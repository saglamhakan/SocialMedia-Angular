import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostCreateRequest } from 'src/app/dto/PostCreateRequest';
import { PostService } from 'src/app/service/post-service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{
  addPostForm!:FormGroup

  constructor(private formBuilder: FormBuilder, private postService: PostService){}

  ngOnInit(): void {
      this.addPostForm = this.formBuilder.group({
        userId: 0,
        title: "",
        text:""

      })

  }
  onSubmit(): any {
    let postCreateRequest: PostCreateRequest = new PostCreateRequest();
    postCreateRequest.userId = this.addPostForm.value.userId
    postCreateRequest.title=this.addPostForm.value.title
    postCreateRequest.text=this.addPostForm.value.text
    console.log(postCreateRequest)
    
    this.postService.addPost(postCreateRequest).subscribe(data => {
      let response: any = data
    })

  }

}
