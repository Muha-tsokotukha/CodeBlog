import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service'; 
import { Blog } from '../Blog';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  constructor(private blogService: BlogService  ) { }
  blogs: Blog[] = []; 
  ngOnInit(): void {
    this.getBlogs();
  }
  viewed(blog:any){
    this.blogService.viewed(blog);
  }
  deleteBlog(blog:any){
    this.blogService.deleteBlog(blog);
    const deleted = document.getElementById(('blog-'+blog.id));
    if(deleted)
    deleted.innerHTML = "";
    this.blogService.getBlogs();
  }
  getBlogs(){
    this.blogService.getBlogs().subscribe((data)=>{
      this.blogs = data;
      console.log(this.blogs);
    });
  }
  editblog(blog: any){
    this.blogService.deleteBlog(blog);
  }
}
