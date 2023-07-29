import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user-service';
import { UserCreateRequest } from 'src/app/dto/userCreateRequest';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  addUserForm!: FormGroup
 

  constructor(private formBuilder: FormBuilder, private userService: UserService ){
    
  }
  ngOnInit(){
    this.addUserForm=this.formBuilder.group({
      userName: '',
      password: '',
    })
  }
  onSubmit():any {
    let userCreateRequest:UserCreateRequest = new UserCreateRequest()
    userCreateRequest.userName = this.addUserForm.value.userName
    userCreateRequest.password=this.addUserForm.value.password
    console.log(userCreateRequest)
    this.userService.addUser(userCreateRequest).subscribe(data=>{
      let response:any=data
    });
  }
  
}
