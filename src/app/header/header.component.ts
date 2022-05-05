import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private blogService: BlogService) { }
  logged: boolean=false;
  ngOnInit(): void {
    this.logged = this.blogService.logged;
    console.log(this.logged);
  }
  logout(){
    this.logged = false;
  }
}
