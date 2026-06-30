export type Notification = {
  id: number;
  type:
    | "join team"
    | "request"
    | "cancel request"
    | "accept request"
    | "reject request";
  message: string;
  timestamp: Date;
  read: boolean;
  name: string | null;
  company: string | null;
};
