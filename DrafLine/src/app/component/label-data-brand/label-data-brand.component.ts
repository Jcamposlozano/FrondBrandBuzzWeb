import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-data-brand',
  templateUrl: './label-data-brand.component.html',
  styles: []
})
export class LabelDataBRandComponent implements OnInit {

  marca: string;
  constructor() { }

  ngOnInit(): void {
    
    this.marca = localStorage.getItem('brand')

  }

}
