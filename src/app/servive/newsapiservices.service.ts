import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {
 

  constructor(private _http:HttpClient) { }

   //newsApiUrl

  newsApiUrl ="https://newsapi.org/v2/top-headlines?country=us&apiKey=16a1682971b34090a66f35927ecffcbf";

  //technewsApriUrl

  techApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=16a1682971b34090a66f35927ecffcbf";

//businessnewsApriUrl

businessNewsApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=16a1682971b34090a66f35927ecffcbf";
  
topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
// tech news
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

//business news
busninessNews():Observable<any>
{
  return this._http.get(this.businessNewsApiUrl)
}

}
