import { NextFunction, Request, Response } from 'express';
import { UserModel } from '../models/User';
import { userSchema } from '../schemas/user';

class UserController {
  public async getAll(_req: Request, res: Response) {
    const users = await new UserModel().findAll();

    res.status(200).json(users);
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const user = await new UserModel().findById(id);

    if (!user) return next({ status: 404, message: 'Usuário não encontrado' });

    res.status(200).json(user);
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    const user = req.body;
    const { error } = userSchema.validate(user);

    if (error) return next(error);

    const createdUser = await new UserModel().create(user);
    
    res.status(201).json(createdUser);
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const user = req.body;
    const { error } = userSchema.validate(user);

    if (error) return next(error);

    const updatedUser = await new UserModel().update(id, user);

    if (!updatedUser) return next({ status: 404, message: 'Usuário não encontrado' });

    res.status(200).json(updatedUser);
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const deleteResponse = await new UserModel().delete(id);

    if (!deleteResponse) return next({ status: 404, message: 'Usuário não encontrado' });

    res.status(200).json(deleteResponse);
  }
}

export { UserController };
