export interface Employee {
  id: number;
  name: string;
  username: string;
  password: string;
  createdAt: Date;
  createdBy: number;
  updatedAt: Date;
  updatedBy: number;
  deletedAt: Date;
  deletedBy: number;
}