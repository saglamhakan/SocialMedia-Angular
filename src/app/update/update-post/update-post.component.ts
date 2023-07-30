import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostUpdateRequest } from 'src/app/dto/PostUpdateRequest';
import { PostService } from 'src/app/service/post-service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit{
  updatePostForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService) { }

  ngOnInit() {
    this.updatePostForm = this.formBuilder.group({
      text: '',
      title: '',
      postId: 0
    });
  }

  onSubmit(): any {
    let postUpdateRequest: PostUpdateRequest = new PostUpdateRequest();
    postUpdateRequest.postId = this.updatePostForm.value.postId;
    postUpdateRequest.title = this.updatePostForm.value.title;
    postUpdateRequest.text = this.updatePostForm.value.text;
    console.log(postUpdateRequest);
    this.postService.updatePost(postUpdateRequest.postId, postUpdateRequest).subscribe(
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
