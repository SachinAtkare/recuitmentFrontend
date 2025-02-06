import { Component, OnInit } from '@angular/core';
import { Position } from '../position';
import { NgFor } from '@angular/common';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-request-postions',
  imports: [NgFor],
  templateUrl: './request-postions.component.html',
  styleUrl: './request-postions.component.css'
})
export class RequestPostionsComponent implements OnInit {



  positions!: Position[];

  constructor(private positionservice:PositionService){}

  ngOnInit(): void {
    this.getposition();
  };

  private getposition(){
    this.positionservice.getpositionlist().subscribe(data=>{
      this.positions=data;
    })

  }

}
