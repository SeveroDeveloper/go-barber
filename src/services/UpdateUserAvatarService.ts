import { getRepository } from 'typeorm';
import fs from 'fs';
import path from 'path';

import User from '../models/User';
import uploadConfig from '../config/upload';

interface Request{
  user_id: string;
  avatarFileName: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFileName }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new Error('ONly authenticated users can change avatar.');
    }

    if (user.avatar) {
      const userAvatarPath = path.join(uploadConfig.directory, user.avatar);

      const userAvatarFileExists = fs.existsSync(userAvatarPath);
      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarPath);
      }
    }

    user.avatar = avatarFileName;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
