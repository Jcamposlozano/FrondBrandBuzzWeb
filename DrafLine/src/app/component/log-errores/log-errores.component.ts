import { Component, OnInit } from '@angular/core';
import { ServerDraflineSkipTestsService } from 'src/app/services/server-drafline--skip-tests.service';

@Component({
  selector: 'app-log-errores',
  templateUrl: './log-errores.component.html',
  styles: []
})
export class LogErroresComponent implements OnInit {

  logErrores:any  = [];

  constructor(private servidor: ServerDraflineSkipTestsService) { }

  ngOnInit(): void {
    this.descargarLogErrores();
  }

  descargarLogErrores(){
    this.servidor.getLogErrores().subscribe(res => { 
        this.logErrores = res 
    },err => console.log(err)    
    );

  }

}
