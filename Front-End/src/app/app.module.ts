import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './core/_auth/auth.interceptor';  // Adjust the path as necessary
import { UserAuthService } from './core/_services/user-auth.service';  // Adjust the path as necessary

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule  // Make sure to import HttpClientModule for HTTP requests
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,  // Your interceptor class
      multi: true,  // This allows you to have multiple interceptors if needed
    },
    UserAuthService  // Register your authentication service
  ],
})
export class AppModule { }
