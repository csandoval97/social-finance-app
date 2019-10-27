import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.css']
})
export class SavingComponent implements OnInit {
  info: Financial_Info[];
  authToken: any;

  constructor(private http: HttpClient) { }
  
  
 
  ngOnInit() {
    this.getOrder().subscribe((data: Financial_Info[]) => {
      this.info = data;
    });
  }
}