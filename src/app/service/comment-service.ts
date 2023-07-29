import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CommentCreateRequest } from '../dto/commentCreateRequest';
import { CommentUpdateRequest } from '../dto/commentUpdateRequest';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = 'http://localhost:8080/comments'

  constructor(private http:HttpClient) { 
    
  }

  getAllComments(): Observable<any>{
    return this.http.get<any> (this.apiUrl + "/getAll")
  }
  addComment(comment:CommentCreateRequest){
    return this.http.post<any>(this.apiUrl + "/add", comment, {})
  }
  updateComment(comment:CommentUpdateRequest){
    return this.http.put<any> (this.apiUrl + "/update", comment, {})
  }
  deleteComment(commentId:number){
    const url = `${this.apiUrl}/delete/${commentId}`;
    return this.http.delete<any> (url)
  }
  } 
