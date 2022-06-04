import { Router } from 'express';

import appointmentesRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentesRouter);
routes.use('/users', usersRouter);

export default routes;
