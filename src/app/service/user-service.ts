import { UserCreateRequest } from "src/app/dto/UserCreateRequest";
import { UserUpdateRequest } from 'src/app/dto/UserUpdateRequest';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + "/getAll");
  }

  addUser(user: UserCreateRequest) {
    return this.http.post<any>(this.apiUrl + "/add", user, {});
  }

  updateUser(userId: number, user: UserUpdateRequest): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${userId}`, user, {});
  }

  deleteUser(userId: number) {
    const url = `${this.apiUrl}/delete/${userId}`;
    return this.http.delete<any>(url);
  }
}
