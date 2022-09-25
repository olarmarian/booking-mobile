import { Status } from "../enums";

export class Booking {
  title: string;
  id: number;
  date: Date;
  client: string;
  phoneNumber: string;
  status: Status;
  location: string;
}
