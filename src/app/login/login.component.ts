import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    logindata:FormGroup=new FormGroup({
      username:new FormControl(),
      password:new FormControl()
    })

    data:any
    submit(){
      this.data=this.logindata.value
    }
}
