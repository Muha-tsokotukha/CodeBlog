import { Injectable } from '@angular/core';
import { Blog, blogs } from './Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor() { }
  blogs: Blog[] = blogs;
  logged: boolean = false;
  editblog(blog:any){
    console.log("Edited", blog);
  }
  viewed(blog:any){
    blog.views += 1;
  }
  deleteBlog(blog:any){
    this.blogs = this.blogs.filter( elem => elem.id != blog.id );
    // console.log(this.blogs);
  }
  getBlogs(){
    console.log(this.blogs)
    return this.blogs;
  }
  getBlog(id:any){
    let blog : Blog = {
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

    for(let i =0; i < this.blogs.length;i++){
      if( blogs[i].id == id ){
        blog = blogs[i];
        break;
      }
    }
    // console.log(blog);
    return blog;
  }
}
