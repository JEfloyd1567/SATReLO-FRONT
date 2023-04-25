export interface IUser {
  name: string;
  role: IRole;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export type IRole = 'therapist' | 'patient' | undefined;