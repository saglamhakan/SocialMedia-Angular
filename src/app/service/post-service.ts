import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostUpdateRequest } from '../dto/PostUpdateRequest';
import { PostCreateRequest } from '../dto/PostCreateRequest';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8080/posts';
  

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any>{
    return this.http.get<any> (this.apiUrl + "/getAll")
  }


  addPost(post: PostCreateRequest) {
    return this.http.post<any>(`${this.apiUrl}/add`, post, {});
  }

  updatePost(postId: number, post: PostUpdateRequest) {
    return this.http.put<any>(`${this.apiUrl}/update/${postId}`, post, {});
  }

  deletePost(postId: number) {
    const url = `${this.apiUrl}/delete/${postId}`;
    return this.http.delete<any>(url);
  }
 
}
