import {Timestamp} from "firebase/firestore";
export interface Request {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  content: string;
  createdAt: Timestamp;
}
