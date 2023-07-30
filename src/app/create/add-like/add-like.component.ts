import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LikeCreateRequest } from 'src/app/dto/LikeCreateRequest';
import { LikeService } from 'src/app/service/like-service';

@Component({
  selector: 'app-add-like',
  templateUrl: './add-like.component.html',
  styleUrls: ['./add-like.component.css']
})
export class AddLikeComponent {
  addLikeForm!:FormGroup

  constructor(private formBuilder: FormBuilder, private likeService: LikeService){}

  ngOnInit(): void {
      this.addLikeForm = this.formBuilder.group({
        userId: 0,
        postId: 0,

      })

  }
  onSubmit(): any {
    let likeCreateRequest: LikeCreateRequest = new LikeCreateRequest();
    likeCreateRequest.userId = this.addLikeForm.value.userId
    likeCreateRequest.postId=this.addLikeForm.value.postId
    console.log(likeCreateRequest)
    
    this.likeService.addLike(likeCreateRequest).subscribe(data => {
      let response: any = data
    })

  }
}
