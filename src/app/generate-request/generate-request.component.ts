import { Component } from '@angular/core';
import { Position } from '../position';

@Component({
  selector: 'app-generate-request',
  imports: [],
  templateUrl: './generate-request.component.html',
  styleUrl: './generate-request.component.css'
})
export class GenerateRequestComponent {

  position:Position = new Position();

  onSubmit(){
    console.log(this.position)
  }

}
