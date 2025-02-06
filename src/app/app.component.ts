import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestPostionsComponent } from './request-postions/request-postions.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,WelcomeComponent,LoginComponent,ReactiveFormsModule,RequestPostionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularRecuitment';
}
