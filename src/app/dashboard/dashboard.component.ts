import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  zoom=15;
  center = {lat: 24, lng: 12};


  constructor(
    private userService:UserService,
    private router:Router,

  ) { }

  ngOnInit(): void {
  }
  logout():void{
    this.userService.logout()
    .then(response=>{
      console.log(response);
      this.router.navigate(['/logout']);

    })
    .catch(error=>console.log(error));
  }

}
