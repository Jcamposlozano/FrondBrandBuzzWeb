import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceObservableService } from '../../services/service-observable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-label-data-brand',
  templateUrl: './label-data-brand.component.html',
  styles: []
})
export class LabelDataBRandComponent implements OnInit, OnDestroy {

  marca: string = 'Marca';
  marcaSuscription: Subscription;

  constructor(public serviceObserva: ServiceObservableService) { }
  ngOnInit(): void {
    
  /*   this.marcaSuscription = this.serviceObserva.marca$.subscribe(
     mensaje => {
        this.marca = mensaje;
     }); */
  }

  
 ngOnDestroy(){
  //   this.marcaSuscription.unsubscribe();
  }
 

}
