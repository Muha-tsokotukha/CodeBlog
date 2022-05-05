import { Injectable } from '@angular/core';
import { Blog, blogs } from './Blog';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthToken } from './authToken';
import {  HttpResponse ,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }
  blogs: Blog[] = [];
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
  getBlogs(): Observable<Blog[]>{
    let token = localStorage.getItem("token")?.split("'")[1];
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const requestOptions = { headers: headers };
    return this.http.get<Blog[]>("http://127.0.0.1:8000/api/blogs/", requestOptions);
  }
  getBlog(id:any){
  }

  login(email:any,password:any): Observable<AuthToken> {
    return <Observable<AuthToken>> this.http.post("http://127.0.0.1:8000/api/login/", {
      username: email,
      password
    })
  }
  isLogged(logg:any){
    this.logged = logg;
  }

}
