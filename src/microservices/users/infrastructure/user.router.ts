import { Router } from 'express';
import { UserController } from './user.controller';

const router = Router();

router.get('/getAll/', UserController.getAllUsers);
router.get('/getById/:id', UserController.getUserById);
router.post('/createUser/', UserController.createUser);
router.post('/validateUser/', UserController.validateUser);
router.delete('/deleteUser/:id', UserController.deleteUser);

export default router;