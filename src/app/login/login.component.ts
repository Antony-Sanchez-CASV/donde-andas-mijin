import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    private userService:UserService,
    private router:Router,
    private auth:Auth,
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
        if(this.auth){
          this.router.navigate(['/dashboard']);
        }

      })
      .catch(error=>console.log(error));
  }
  goToWelcome(){
    this.router.navigate(['/']);
  }
  goToRegister(){
    this.router.navigate(['/register']);
  }
}
