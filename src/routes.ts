import express from 'express';

import UsersControllers from './controllers/UsersControllers';
import PhotosController from './controllers/PhotosController';
import AuthenticateController from './controllers/AuthenticateController';

const routes = express.Router();

const users = UsersControllers;
const photos = PhotosController;
const auth = AuthenticateController;

routes.post('/users', users.insert);

routes.get('/photos', photos.index);
routes.post('/photos', photos.insert);
routes.delete('/photos', photos.delet);

routes.post('/auth', auth.login);

export default routes;