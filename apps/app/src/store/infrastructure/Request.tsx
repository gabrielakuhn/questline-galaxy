import { StoreStatus } from "./Status";

export interface StoreRequest {
  status: StoreStatus;
  error: string | number | null; // TODO: Create a type Error
}
