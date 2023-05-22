export interface IUser {
  name?: string;
  personalId?: string;
  role: IRole
}

export interface IUserLogin {
  username: string;
  password: string;
  role?: IRole;
}

export type IRole = 'therapist' | 'patient' | 'admin'  | undefined;