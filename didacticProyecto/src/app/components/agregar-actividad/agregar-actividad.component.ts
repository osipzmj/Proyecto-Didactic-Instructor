import { Actividad } from './../../models/actividades';
import { ActividadesService } from './../../service/actividades.service';
import { TemasService } from './../../service/temas.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-agregar-actividad',
  templateUrl: './agregar-actividad.component.html',
  styleUrls: ['./agregar-actividad.component.css']
})
export class AgregarActividadComponent implements OnInit {

  tipo:string;

  constructor(public actividadesService:ActividadesService, public temasService:TemasService) {
    this.tipo='';
   }
  

  ngOnInit(): void {
    this.getActividades();
    this.getTemas();
  }

  getTemas(){
    this.temasService.getTemas().subscribe(
      res => {
        this.temasService.temas = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  getActividades(){
    this.actividadesService.getActividades().subscribe(
      res => {
        this.actividadesService.actividades = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  createActividades(form:NgForm){
    if(form.value.cveActividad){
      console.log('actualizando');
      this.actividadesService.editActividades(form.value).subscribe(
        res=> console.log(res),
        err=> console.log(err)
      );
    }else{//Creando
      this.actividadesService.createActividades(form.value).subscribe(
        res=> {
          this.getActividades();
          form.reset();
        },
        err=> console.log(err)
      )}
  }

  deleteActividades(cveActividad:any){
    const resp = confirm('¿Estas seguro de eliminarlo?')
    console.log('eliminando '+cveActividad);
    if(resp){
      this.actividadesService.deleteActividades(cveActividad).subscribe(
        (res)=> {
          this.getActividades();
        },
        (err)=> console.log(err)
      );
    }
  }

  
  editActividades(actividad:Actividad){
    this.actividadesService.actividad = actividad;
  }

  formReset(form:NgForm){
    this.actividadesService.actividad =form.value;
    form.reset(); 
   }


  

}
