import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommentCreateRequest } from 'src/app/dto/CommentCreateRequest';
import { CommentService } from 'src/app/service/comment-service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
  addCommentForm!:FormGroup

  constructor(private formBuilder: FormBuilder, private commentService: CommentService){}

  ngOnInit(): void {
      this.addCommentForm = this.formBuilder.group({
        userId: 0,
        postId: 0,
        text:""

      })

  }
  onSubmit(): any {
    let commentCreateRequest: CommentCreateRequest = new CommentCreateRequest();
    commentCreateRequest.userId = this.addCommentForm.value.userId
    commentCreateRequest.postId=this.addCommentForm.value.postId
    commentCreateRequest.text=this.addCommentForm.value.text
    console.log(commentCreateRequest)
    
    this.commentService.addComment(commentCreateRequest).subscribe(data => {
      let response: any = data
    })

  }
}
