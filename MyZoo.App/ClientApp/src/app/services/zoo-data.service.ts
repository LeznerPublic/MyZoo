import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Animal } from '../interfaces/animal';

@Injectable({
  providedIn: 'root'
})
export class ZooDataService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'UserToken': this.getToken() });
  options = { headers: this.headers };

  baseUrl:string;

  constructor(private http: HttpClient,@Inject('BASE_URL') _baseUrl: string) { 
    this.baseUrl=_baseUrl;
  }

  getAnimalTypes() {
    var url = this.getServerUrl() + '/api/myzoo/get-animal-types';
 
    return this.http.get(url ,this.options);
  }

  addAnimal(animal: Animal) {
    var url = this.getServerUrl() + '/api/myzoo/add-animal';
  
    return this.http.post(url ,animal, this.options);
  }

  getStatisticsByAge() {
    var url = this.getServerUrl() + '/api/myzoo/get-statistics-by-age';

    return this.http.get(url ,this.options);
  }

  getStatisticsByGender() {
    var url = this.getServerUrl() + '/api/myzoo/get-statistics-by-gender';

    return this.http.get(url ,this.options);
  }

  getStatisticsByType() {
    var url = this.getServerUrl() + '/api/myzoo/get-statistics-by-type';

    return this.http.get(url ,this.options);
  }

  deleteAnimal(id: number) {
    var url = this.getServerUrl() + '/api/myzoo/delete-animal';

    let request = {Id:id}

    return this.http.post(url , request ,this.options);
  }

  updateAnimal(id: number, name: string, description: string, age: number) {
    var url = this.getServerUrl() + '/api/myzoo/update-animal';

    let request = {Id:id, Name: name, Description:description, Age:age}

    return this.http.post(url ,request, this.options);
  }



  getAllAnimals() {
    var url = this.getServerUrl() + '/api/myzoo/get-all-animals';

    return this.http.get(url ,this.options);
  }
  getToken() {
    
    return "";
  }

  getServerUrl() {
    if(this.baseUrl.includes('localhost:4200'))
      return "https://localhost:44336"

      return this.baseUrl.replace(/\/$/, "");;
  }
}
