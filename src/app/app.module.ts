import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './model/user/user.component';
import { PostComponent } from './model/post/post.component';
import { CommentComponent } from './model/comment/comment.component';
import { LikeComponent } from './model/like/like.component';
import { AddUserComponent } from './create/add-user/add-user.component';
import { AddPostComponent } from './create/add-post/add-post.component';
import { AddCommentComponent } from './create/add-comment/add-comment.component';
import { AddLikeComponent } from './create/add-like/add-like.component';
import { UpdateUserComponent } from './update/update-user/update-user.component';
import { UpdateCommentComponent } from './update/update-comment/update-comment.component';
import { UpdatePostComponent } from './update/update-post/update-post.component';
import { UpdateLikeComponent } from './update/update-like/update-like.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';


const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  { path: 'add-post', component: AddUserComponent },
  { path: 'add-comment', component: AddCommentComponent },
  { path: 'list-user', component: UserComponent },
  { path: 'list-post', component: PostComponent },
  { path: 'list-comment', component: CommentComponent },
  { path: 'update-post/:postId', component: UpdatePostComponent },
  { path: 'update-user/:userId', component:UpdateUserComponent},
  { path: 'update-comment/:commentId', component: UpdateCommentComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    LikeComponent,
    AddUserComponent,
    AddPostComponent,
    AddCommentComponent,
    AddLikeComponent,
    UpdateUserComponent,
    UpdateCommentComponent,
    UpdatePostComponent,
    UpdateLikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
