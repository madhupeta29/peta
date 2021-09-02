import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../servive/newsapiservices.service'

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }


  //Display data
  topHeadingDisplay:any =[];

  ngOnInit(): void {

    this._services.topHeading().subscribe((result)=>{

      console.log(result);
      this.topHeadingDisplay = result.articles;
    })
  }

}
