import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { NewblogComponent } from './newblog/newblog.component';
import { EditblogComponent } from './editblog/editblog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';

const routes: Routes = [
  {path: "profile", component: ProfileComponent},
  {path: "login", component : LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "newblog", component: NewblogComponent},
  {path: "editblog/:id", component: EditblogComponent},
  {path: "blog/:id", component: BlogdetailsComponent},
  {path: "",component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
