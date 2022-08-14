import { Actividad } from './../models/actividades';
import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgregarService {

  URL_API = 'http://localhost:9000/agregar-lectura/';

  public actividad:Actividad=
  {cveTema: 0,nombre:'',contenido:'',tipo: '',valor: 0};

  actividades: Actividad[]=[];

  constructor(private http: HttpClient) { }

  editActividades(actividad:Actividad){
    return this.http.put(this.URL_API+actividad.cveActividad,actividad);
    }
}
