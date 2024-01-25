import {Injectable} from '@angular/core';
import {LoginPayload, LoginResponse} from "./auth.model";
import {of} from "rxjs";
import {users} from "./auth.mock";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(payload: LoginPayload) {
    const params = {
      username: payload.username,
      password: payload.password,
    };
    return of(users)
  }

  getAllUsers() {
    return of<LoginResponse[]>(users)
  }
}
