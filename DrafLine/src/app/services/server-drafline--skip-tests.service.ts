import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModeloMarcas} from '../models/marcas';
@Injectable({
  providedIn: 'root'
})
export class ServerDraflineSkipTestsService {


  API_URL = "http://localhost:3000";

  constructor(private http: HttpClient) { 
    console.log(``);
  }


  getUsers(){
    return this.http.get(`${this.API_URL}/users`);
  }

  getUser(id: string){
    return this.http.get(`${this.API_URL}/users/${id}`);
  }

  getMarcas(country: string){
    return this.http.get(`${this.API_URL}/marcas/${country}`);
  }

  getCountry(){
    return this.http.get(`${this.API_URL}/country`);
  }

  getDataDigBarras(marca: string){
    return this.http.get(`${this.API_URL}/grafico/${marca}`);
  }
  

  getLogErrores(){
    return  this.http.get(`${this.API_URL}/logErrores`);
  }

  
/*   saveUser(user: User){
    return this.http.post(`${this.api_uri}/users`, user)
  }
 */

  deleteUser(id: string){
    return this.http.delete(`${this.API_URL}/users/${id}`);
  }

  /*   saveUser(id: string, user: User): Observable<User>{
    return  this.http.post(`${this.api_uri}/users/${id}`, user)
  }
 */
  
  

}
