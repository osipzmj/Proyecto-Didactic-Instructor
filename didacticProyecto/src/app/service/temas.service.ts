import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { Tema } from './../models/temas';

@Injectable({
  providedIn: 'root'
})

export class TemasService {

  URL_API = 'http://localhost:9000/agregar-tema/';

  public tema:Tema=
  {cveTema: 0,cveArea: 0,nombre:'',descripcion:''};

  temas: Tema[]=[];

  constructor(private http: HttpClient) {}

  getTemas(){
    return this.http.get<Tema[]>(this.URL_API);
  }

  createTemas(tema:Tema){
    return this.http.post(this.URL_API,tema);
  }

  deleteTemas(cveTema:any){
    return this.http.delete(this.URL_API+cveTema);
  }

  editTemas(tema:Tema){
  return this.http.put(this.URL_API+tema.cveTema,tema);
  }

}
