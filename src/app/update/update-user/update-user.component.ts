import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user-service';
import { UserUpdateRequest } from 'src/app/dto/UserUpdateRequest';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  updateUserForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.updateUserForm = this.formBuilder.group({
      userName: '',
      password: '',
      userId: 0
    });
  }

  onSubmit(): any {
    let userUpdateRequest: UserUpdateRequest = new UserUpdateRequest();
    userUpdateRequest.userName = this.updateUserForm.value.userName;
    userUpdateRequest.userId = this.updateUserForm.value.userId;
    userUpdateRequest.password = this.updateUserForm.value.password;
    console.log(userUpdateRequest);
    this.userService.updateUser(userUpdateRequest.userId, userUpdateRequest).subscribe(
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
