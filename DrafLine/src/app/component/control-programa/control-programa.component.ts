import { Component, OnInit } from '@angular/core';
import { ServerDraflineSkipTestsService } from '../../services/server-drafline--skip-tests.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ModelConsultasBarras } from '../../models/consultaBarras';
import { Observable } from 'rxjs';
import { ServiceObservableService } from 'src/app/services/service-observable.service';

@Component({
  selector: 'app-control-programa',
  templateUrl: './control-programa.component.html',
  styles: []
})
export class ControlProgramaComponent implements OnInit {

  marcas: any = [];
  countrys: any = [];
  forma: FormGroup;
  pais: string;
  consultaBarras: ModelConsultasBarras;
  cargando:Boolean = false;

  constructor(private serv:ServerDraflineSkipTestsService, private fb:FormBuilder, private serviceObserva: ServiceObservableService ) {
    this.crearFormulario()
   // localStorage.clear();
   }

  ngOnInit(): void {
    this.cargarCountrys();
  }

  cargarCountrys(){
    this.serv.getCountry().subscribe(
      res =>
        {
        this.countrys = res;
      } ,
      err => console.log(err)
    )
  }

   crearFormulario(){
    this.forma = this.fb.group({
      country: [''],
      brand : [''],
      platform: [''],
      campaing: [''],
      sentiment: [''],
      mention_type: [''],
      date_init:  [''],
      date_fin:  [''],
    });
  }

  cargarMarcas(){
    localStorage.setItem('country', this.forma.get('country').value);
      this.cargando = true;
    this.serv.getMarcas(this.forma.get('country').value).subscribe(
      res => {
        this.marcas = res;
        this.cargando = false;
      },
      err => console.log(err)  
      )  
  }

  guardar(){
    console.log(this.forma)
    //this.serviceObserva.marca$.emit(this.forma.get('brand').value);
    //localStorage.setItem('brand', this.forma.get('brand').value);

  } 

}
