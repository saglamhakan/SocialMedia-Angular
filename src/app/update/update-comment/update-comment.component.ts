import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommentUpdateRequest } from 'src/app/dto/CommentUpdateRequest';
import { CommentService } from 'src/app/service/comment-service';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.css']
})
export class UpdateCommentComponent implements OnInit{
  updateCommentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private commentService: CommentService) { }

  ngOnInit() {
    this.updateCommentForm = this.formBuilder.group({
      text: '',
      id : 0,
      
    });
  }

  onSubmit(): any {
    let commentUpdateRequest: CommentUpdateRequest = new CommentUpdateRequest();
    commentUpdateRequest.id = this.updateCommentForm.value.id;
    commentUpdateRequest.text = this.updateCommentForm.value.text;
    console.log(commentUpdateRequest);
    this.commentService.updateComment(commentUpdateRequest.id, commentUpdateRequest).subscribe(
      (data) => {
        console.log('Kullanıcı güncellendi:', data);
        // Başarılı işlemler için yapılacaklar
      },
      (error) => {
        console.error('Güncelleme hatası:', error);
        // Hata durumunda yapılacaklar ve hatayı göstermek için kullanabilirsiniz
      }
    );
  }
}
