import { Actividad } from './../../models/actividades';
import { ActividadesService } from './../../service/actividades.service';
import { AgregarService } from './../../service/agregar.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-act-lectura',
  templateUrl: './act-lectura.component.html',
  styleUrls: ['./act-lectura.component.css']
})
export class ActLecturaComponent implements OnInit {

  constructor(public agregarService:AgregarService, public actividadesService:ActividadesService) { }

  ngOnInit(): void {
  }

  editActividades(actividad:Actividad){
    this.actividadesService.actividad = actividad;
  }

  createActividades(form:NgForm){
    if(form.value.cveActividad){
      console.log('actualizando');
      this.actividadesService.editActividades(form.value).subscribe(
        res=> console.log(res),
        err=> console.log(err)
      );
    }
  }


}
