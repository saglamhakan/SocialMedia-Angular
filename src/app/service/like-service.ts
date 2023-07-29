import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { LikeCreateRequest } from '../dto/likeCreateRequest';



@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private apiUrl = 'http://localhost:8080/likes';
  

  constructor(private http: HttpClient) {}

  getAllLikes(): Observable<any>{
    return this.http.get<any> (this.apiUrl + "/getAll")
  }


  addLike(like: LikeCreateRequest) {
    return this.http.post<any>(`${this.apiUrl}/add`, like, {});
  }

 
  deleteLike(likeId: number) {
    const url = `${this.apiUrl}/delete/${likeId}`;
    return this.http.delete<any>(url);
  }
}
