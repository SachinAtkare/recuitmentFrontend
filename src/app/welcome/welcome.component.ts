import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-welcome',
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  constructor(private router:Router){}

  loginpage(){
    this.router.navigate(['/login']);
  }
}
