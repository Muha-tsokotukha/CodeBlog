import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service'; 
import { Blog } from '../Blog';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {

  constructor(private router: Router , private blogService: BlogService, private activatedRoute: ActivatedRoute) { }
  blog: Blog = {
    id: 1,
    title: "blog 1",
    description: "description 1",
    imageURL: "",
    author: {
      id: 1,
      name: "name name",
    },
    views: 0
  };
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
        this.blog.id = params['id'];
    });
    this.blog = this.blogService.getBlog(this.blog.id);
  }

}
