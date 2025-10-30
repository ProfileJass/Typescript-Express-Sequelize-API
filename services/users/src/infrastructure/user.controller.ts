import User from "../domain/user.model";
import { Request, Response } from "express";
import { userService } from "../application/user.service";
import { UserRequest } from "../application/dto/user.request";
import { ApplicationError } from "../application/utils/user.error";
import { ResponseHandler } from "../shared/utils/response-handler.util";
import Validator from "../shared/utils/validator.util";
import { asyncHandler } from "../shared/middleware/error-handler.middleware";

export class UserController {
  static getAllUsers = asyncHandler(
    async (req: Request, res: Response): Promise<Response> => {
      const users: User[] = await userService.findAll();

      return ResponseHandler.success(
        res,
        users,
        `Se encontraron ${users.length} usuarios`
      );
    }
  );

  static getUserById = asyncHandler(
    async (req: Request, res: Response): Promise<Response> => {
      const id = Number(req.params.id);

      if (isNaN(id)) {
        return ResponseHandler.badRequest(res, "ID de usuario inválido");
      }

      try {
        const user = await userService.findById(id);
        return ResponseHandler.success(
          res,
          user,
          `Usuario con ID ${id} encontrado`
        );
      } catch (error: any) {
        if (error instanceof ApplicationError) {
          return ResponseHandler.notFound(res, "Usuario");
        }
        throw error;
      }
    }
  );

  static createUser = asyncHandler(
    async (req: Request, res: Response): Promise<Response> => {
      const { name, lastName, password } = req.body;

      const validationErrors = Validator.validateFields([
        () => Validator.required(name, "name"),
        () => Validator.string(name, "name", 2),
        () => Validator.required(lastName, "lastName"),
        () => Validator.string(lastName, "lastName", 2),
        () => Validator.required(password, "password"),
        () => Validator.string(password, "password", 6),
      ]);

      if (validationErrors.length > 0) {
        return ResponseHandler.validationError(res, validationErrors);
      }

      try {
        const userRequest: UserRequest = { name, lastName, password };
        const newUser: User = await userService.create(userRequest);

        return ResponseHandler.success(
          res,
          newUser,
          "Usuario creado exitosamente",
          201
        );
      } catch (error: any) {
        if (error instanceof ApplicationError) {
          return ResponseHandler.badRequest(res, error.message);
        }
        throw error;
      }
    }
  );

  static validateUser = asyncHandler(
    async (req: Request, res: Response): Promise<Response> => {
      const { name, password } = req.body;

      const validationErrors = Validator.validateFields([
        () => Validator.required(name, "name"),
        () => Validator.string(name, "name"),
        () => Validator.required(password, "password"),
        () => Validator.string(password, "password"),
      ]);

      if (validationErrors.length > 0) {
        return ResponseHandler.validationError(res, validationErrors);
      }

      try {
        const user = await userService.validateUser(name, password);
        return ResponseHandler.success(
          res,
          user,
          "Usuario validado exitosamente"
        );
      } catch (error: any) {
        if (error instanceof ApplicationError) {
          return ResponseHandler.unauthorized(res, "Credenciales inválidas");
        }
        throw error;
      }
    }
  );

  static deleteUser = asyncHandler(
    async (req: Request, res: Response): Promise<Response> => {
      const id = Number(req.params.id);

      if (isNaN(id)) {
        return ResponseHandler.badRequest(res, "ID de usuario inválido");
      }

      try {
        const deleted = await userService.deleteUserById(id);
        if (deleted) {
          return ResponseHandler.successNoData(
            res,
            `Usuario con ID ${id} eliminado exitosamente`,
            204
          );
        } else {
          return ResponseHandler.notFound(res, "Usuario");
        }
      } catch (error: any) {
        if (error instanceof ApplicationError) {
          return ResponseHandler.badRequest(res, error.message);
        }
        throw error;
      }
    }
  );

  static updateUser = asyncHandler(
    async (req: Request, res: Response): Promise<Response> => {
      const id = Number(req.params.id);
      const { name, lastName, password } = req.body;

      if (isNaN(id)) {
        return ResponseHandler.badRequest(res, "ID de usuario inválido");
      }

      const validationErrors = Validator.validateFields([
        ...(name !== undefined
          ? [() => Validator.string(name, "name", 2)]
          : []),
        ...(lastName !== undefined
          ? [() => Validator.string(lastName, "lastName", 2)]
          : []),
        ...(password !== undefined
          ? [() => Validator.string(password, "password", 6)]
          : []),
      ]);

      if (validationErrors.length > 0) {
        return ResponseHandler.validationError(res, validationErrors);
      }

      try {
        const userRequest: Partial<UserRequest> = { name, lastName, password };
        const updatedUser = await userService.updateUser(id, userRequest);

        return ResponseHandler.success(
          res,
          updatedUser,
          "Usuario actualizado exitosamente"
        );
      } catch (error: any) {
        if (error instanceof ApplicationError) {
          return ResponseHandler.badRequest(res, error.message);
        }
        throw error;
      }
    }
  );
}
