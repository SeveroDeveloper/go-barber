import { Router } from 'express';

import appointmentesRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentesRouter);

export default routes;
