import { Component, OnInit } from '@angular/core';
import{NewsapiservicesService} from '../servive/newsapiservices.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {
  

  constructor(private _services:NewsapiservicesService) { }

  businessNewsDisplay: any[] = [];

  ngOnInit(): void {

this. _services.busninessNews().subscribe((result)=>{

  this.businessNewsDisplay=result.articles;

});
    
  }

}
