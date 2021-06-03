import { ObjectId } from "mongodb";

export default interface shoutout {
    _id?: ObjectId;
    to: string;
    from: string;
    message: string;
  }