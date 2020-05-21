import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ZooDataService {

  baseUrl:string;

  constructor(private http: HttpClient,@Inject('BASE_URL') _baseUrl: string) { 
    this.baseUrl=_baseUrl;
  }

  getAllAnimals() {
    var url = this.getServerUrl() + '/api/myzoo/get-all-animals';
    
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'UserToken': this.getToken() });
    let options = { headers: headers };

    return this.http.get(url ,options);
  }
  getToken() {
    
    return "";
  }

  getServerUrl() {
    // return this.baseUrl;
    return "https://localhost:44336"
  }
}
