import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educational',
  templateUrl: './educational.component.html',
  styleUrls: ['./educational.component.css']
})
export class EducationalComponent implements OnInit {
  myNum = 0;
  constructor() { }
  setCounter(num){
   this.myNum = num;
   console.log(this.myNum);
 }
  ngOnInit() {
  }

}
