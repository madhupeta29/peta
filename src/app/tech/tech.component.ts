import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../servive/newsapiservices.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  techNewsDisplay:any =[];

  ngOnInit(): void {
  
  this._services.techNews().subscribe((result)=>{

    this.techNewsDisplay = result.articles;

  });
  
  }



}
