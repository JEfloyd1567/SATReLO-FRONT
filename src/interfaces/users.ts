export interface IUser {
  name: string;
  role: IRole;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface ItherapistUser{
  username: string;
  name: string;
  personalId: string;
  phone: string;
  email: string;
  avatarUrl: string;
}

export type IRole = 'therapist' | 'patient' | undefined;