import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LikeService } from 'src/app/service/like-service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  likeList : any []= [] ;
  addPostForm! : FormGroup

  constructor (private likeService: LikeService){
  }

  ngOnInit(): void {
      this.loadLikes();
  }

  loadLikes(){
    this.likeService.getAllLikes().subscribe(data => {
      this.likeList = data
    });
  }

  deleteItem(likeId: number){
    this.likeService.deleteLike(likeId).subscribe(data=> {
      let response : any = data
      console.log(response)
      this.loadLikes();
    })

  }
}
