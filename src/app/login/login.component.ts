import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,JsonPipe,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router){}
    logindata:FormGroup=new FormGroup({
      username:new FormControl(),
      password:new FormControl()
    })


    submit(){
      this.router.navigate(['/hrdashboard']);
    }
}
