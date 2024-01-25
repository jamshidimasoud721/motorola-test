export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number,
  name: string,
  age: number,
  job: string,
  avatar: string,
  username: string,
  password: string
}
