import { Component, OnInit } from '@angular/core';
import { ServerDraflineSkipTestsService } from '../../services/server-drafline--skip-tests.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ModelConsultasBarras } from '../../models/consultaBarras';
import { Observable } from 'rxjs';

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

  constructor(private serv:ServerDraflineSkipTestsService, private fb:FormBuilder ) {
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
    });
  }

  cargarMarcas(){
    localStorage.setItem('country', this.forma.get('country').value);
    this.serv.getMarcas(this.forma.get('country').value).subscribe(
      res => {
        this.marcas = res;
      },
      err => console.log(err)  
      )       
  }

  guardar(){
    //console.log(this.forma)
    localStorage.setItem('brand', this.forma.get('brand').value);

  } 

}
