import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BlogService} from '../blog.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: BlogService, private router: Router) { }
  email = "";
  password = "";
  ngOnInit(): void {
  }
  login(){
    this.service.login(this.email, this.password).subscribe((data)=>{
      console.log(data);
      if(data){
        this.service.isLogged(true);
        localStorage.setItem("token", data.token);
        this.router.navigate(['/profile']);
      }
    })    
  }
}
