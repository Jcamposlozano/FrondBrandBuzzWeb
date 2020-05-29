import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label,Color } from 'ng2-charts';
import { ServerDraflineSkipTestsService } from '../../services/server-drafline--skip-tests.service';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ControlProgramaComponent } from '../control-programa/control-programa.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-diag-barras',
  templateUrl: './diag-barras.component.html',
  styles: []
})
export class DiagBarrasComponent implements OnInit {

  dataServer: any = [];
  labels: string  [];
  controles: ControlProgramaComponent;
  positive =  [];
  negative = [];
  neutral = [];
  leabel = [];
  
  constructor(private serv:ServerDraflineSkipTestsService ) { }

  ngOnInit(): void {
  
  }


  cargardataDiagramaBarras(){
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor ...'
    });
    Swal.showLoading();
    this.serv.getDataDigBarras(localStorage.getItem('brand')).subscribe(
        res =>
           {
          this.dataServer = res
          this.organizarData();
        }
        ,err => console.log(err)
    )
 
  }

  organizarData(){
    
    let texto = [];

    console.log('Limpiando Archivos')
    console.log(this.dataServer)
    this.positive.length=0;
    this.negative.length=0;
    this.neutral.length=0;
    this.leabel.length=0;
    
    for(let i=0; i<this.dataServer.length; i++){
       
      texto = this.dataServer[i]['pruabapiloto'].split(",");
      
      if (texto[0].substr(1) === 'Neutral'){
        this.neutral.push(parseInt(texto[2].substr(0,texto[2].length-1)))
        this.leabel.push(texto[1])
      }
      
      if (texto[0].substr(1) === 'Negative'){
        this.negative.push(parseInt(texto[2].substr(0,texto[2].length-1)))
      }

      if (texto[0].substr(1) === 'Positive'){
        this.positive.push(parseInt(texto[2].substr(0,texto[2].length-1)))
      }

      if (texto[0].substr(1) === 'Positive'){
        this.positive.push(parseInt(texto[2].substr(0,texto[2].length-1)))
      }

      //console.log(texto[0].substr(1))
      //console.log(texto[2].substr(0,texto[2].length-1))

      
      /* for (let j=0;j<this.dataServer[i]['pruabapiloto'].length; j++){
        if (this.dataServer[j]['pruabapiloto'].substr(j,1) === ',' ){
          console.log(j)
        } 
        } */

      //console.log(this.dataServer[i]['pruabapiloto'].substr(1,3))
    }
   // console.log(this.leabel)
   Swal.close();
  } 

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{stacked: true}], yAxes: [{stacked: true}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end'
        ,font:{
          size: 7,
        }
      }
    }
  };


public barChartLabels: Label[] = this.leabel;


  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

public barChartColors: Color[] = [
  { backgroundColor: 'rgba(51,191,19)' },
  { backgroundColor: 'rgba(229,236,226)'},
  { backgroundColor: 'rgba(200,26,8)'},
];

public barChartData: ChartDataSets[] = [
  { data: this.positive, label: 'Positive'},
  { data: this.neutral, label: 'Neutral'},
  { data: this.negative, label: 'Negative'},
];


 

    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public randomize(): void {

     
      this.cargardataDiagramaBarras();
      this.barChartData[0]
      console.log('Datos cargados')

  }


}
