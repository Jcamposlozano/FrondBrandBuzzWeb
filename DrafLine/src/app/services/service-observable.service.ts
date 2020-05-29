import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceObservableService {

  marca$ = new EventEmitter<string>();  

  constructor() { }

  

}
