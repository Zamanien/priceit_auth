import { NextFunction, Request, Response } from "express";
import {
  deleteItem,
  findAllUsers,
  findUserById,
  addItem,
} from "../services/user.service";
import mongoose, {Types  } from "mongoose";
import { UpdateUserProps } from "../schema/user.schema";
export const getMeHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const addItemHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    const userId = req.params.userId.trim();
    console.log(req.body)
    const objectId = new mongoose.Types.ObjectId(userId)
    // console.log( mongoose.Types.ObjectId.isValid(objectId))
    await addItem( objectId, req.body);
   
    const user = await findUserById(userId);
    return res.status(200).json({message: "Product added to favorites"});
  } catch (err: any) {
    console.log(err)
    next(err);
  }
};

export const deleteItemHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const userId = req.params.userId.trim();
    console.log(req.body)
    const objectId = new mongoose.Types.ObjectId(userId)
    // console.log( mongoose.Types.ObjectId.isValid(objectId))
    await deleteItem( objectId, req.body);
   
    const user = await findUserById(userId);
    return res.status(200).json({message: "Product deleted to favorites"});
  } catch (err: any) {
    console.log(err)
    next(err);
  }
};

export const getAllUsersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await findAllUsers();
    res.status(200).json({
      status: "success",
      result: users.length,
      data: {
        users,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
