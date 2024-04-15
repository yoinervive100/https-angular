import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { Productapi } from '../../interfaces/interface';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
  data:any = [];
  constructor(private service:ApiServiceService){}

  ngOnInit(): void {
    this.service.hola().subscribe(value  =>{
      this.data = value;
      console.log(this.data);
    })
  }

}

