import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://andruxnet-random-famous-quotes.p.rapidapi.com/";

  private httpOptions = {
    headers: new HttpHeaders({
      "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
	    "x-rapidapi-key": "27b1ee63a0msh230d0ec2b75388ap19ebb5jsn8c11bb06ad6f"
    })
  };
  private RAPIDAPI_KEY = "27b1ee63a0msh230d0ec2b75388ap19ebb5jsn8c11bb06ad6f";
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER, this.httpOptions);
  }
}
