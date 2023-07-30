import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommentService } from 'src/app/service/comment-service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  commentList : any []= [] ;
  addCommentForm! : FormGroup

  constructor (private commentService: CommentService){
  }

  ngOnInit(): void {
      this.loadComments();
  }

  loadComments(){
    this.commentService.getAllComments().subscribe(data => {
      this.commentList = data
    });
  }

  deleteItem(id: number){
    this.commentService.deleteComment(id).subscribe(data=> {
      let response : any = data
      console.log(response)
      this.loadComments();
    })

  }

}
