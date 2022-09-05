import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    private userService:UserService,
  ) {
    this.formLogin =new FormGroup({
      email:new FormControl(),
      password:new FormControl(),
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.userService.login(this.formLogin.value)
      .then(response=>{
        console.log(response);
      })
      .catch(error=>console.log(error));
  }
}
