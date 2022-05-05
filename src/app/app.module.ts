import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewblogComponent } from './newblog/newblog.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { EditblogComponent } from './editblog/editblog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    NewblogComponent,
    BloglistComponent,
    EditblogComponent,
    BlogdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
