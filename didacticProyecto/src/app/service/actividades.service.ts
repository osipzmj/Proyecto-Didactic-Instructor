import { Actividad } from './../models/actividades';
import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  URL_API = 'http://localhost:9000/agregar-actividad/';

  public actividad:Actividad=
  {cveTema: 0,nombre:'',contenido:'',tipo: '',valor: 0};

  actividades: Actividad[]=[];

  constructor(private http: HttpClient) { }

  getActividades(){
    return this.http.get<Actividad[]>(this.URL_API);
  }

  createActividades(actividad:Actividad){
    return this.http.post(this.URL_API,actividad);
  }

  deleteActividades(cveActividad:any){
    return this.http.delete(this.URL_API+cveActividad);
  }

  editActividades(actividad:Actividad){
  return this.http.put(this.URL_API+actividad.cveActividad,actividad);
  }
}
