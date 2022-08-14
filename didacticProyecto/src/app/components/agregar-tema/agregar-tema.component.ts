import { Tema } from './../../models/temas';
import { TemasService } from './../../service/temas.service';
import { AreasService } from './../../service/areas.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-agregar-tema',
  templateUrl: './agregar-tema.component.html',
  styleUrls: ['./agregar-tema.component.css']
})
export class AgregarTemaComponent implements OnInit {

  constructor(public temasService:TemasService, public areasService:AreasService) { }

  ngOnInit(): void {
    this.getTemas();
    this.getAreas();
  }

  getAreas(){
    this.areasService.getAreas().subscribe(
      res => {
        this.areasService.areas = res;
        console.log(res);
      },
      err => console.log(err)
    )
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

  createTemas(form:NgForm){
    if(form.value.cveTema){
      console.log('actualizando');
      this.temasService.editTemas(form.value).subscribe(
        res=> console.log(res),
        err=> console.log(err)
      );
    }else{//Creando
      this.temasService.createTemas(form.value).subscribe(
        res=> {
          this.getTemas();
          form.reset();
        },
        err=> console.log(err)
      )}
  }

  deleteTemas(cveTema:any){
    const resp = confirm('¿Estas seguro de eliminarlo?')
    console.log('eliminando '+cveTema);
    if(resp){
      this.temasService.deleteTemas(cveTema).subscribe(
        (res)=> {
          this.getTemas();
        },
        (err)=> console.log(err)
      );
    }
  }

  
  editTemas(tema:Tema){
    this.temasService.tema = tema;
  }

  formReset(form:NgForm){
    this.temasService.tema =form.value;
    form.reset(); 
   }


}
