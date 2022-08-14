import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { Area } from './../models/areas';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  URL_API = 'http://localhost:9000/area/';

  public area:Area=
  {cveArea: 0,descripcion:'',activo: 0,};

  areas: Area[]=[];

  constructor(private http: HttpClient) { }

  getAreas(){
    return this.http.get<Area[]>(this.URL_API);
  }
}
