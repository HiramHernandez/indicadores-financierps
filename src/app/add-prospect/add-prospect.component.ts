import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import * as moment from 'moment';
import { ProspectModel, ProspectModelBuilder, Grafica } from '../shared/prospecto.models';
import Swal from 'sweetalert2';
import { ChartOptions, ChartType, ChartDataSets  } from 'chart.js';
import { Label } from 'ng2-charts';
import { ProspectService } from '../shared/prospect.service';
import { UdisBuilder, UdisModel } from '../shared/prospect.model';

@Component({
  selector: 'app-add-prospect',
  templateUrl: './add-prospect.component.html',
  styleUrls: ['./add-prospect.component.css']
})
export class AddProspectComponent implements OnInit {
  prospect:ProspectModel;
  labelFile = 'Buscar documento';

  fechaInicial = '';
  fechaFinal = '';
  prospects: any;
  udisList: any = [];
  series: any = []
  datos:any = []
  cargando: boolean = false
  idSerie = '';
  titulo = '';
  minimo = 0;
  maximo = 0;
  promedio = 0;


  multipleImages = [];
  /*PROPIEDADES DE LA GRÁFICA*/
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'line';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[]=[]

  /*PROPIEDADES DE LA GRÁFICA*/


  constructor(private routeNavigate: Router, private prospectService: ProspectService) { 
    this.prospect = new ProspectModelBuilder().build();
  }

  generarGrafica(){
    this.llenarTablaManual(this.series);
  }


  llenarTablaManual(series: any[]){
    this.barChartData.pop();
    this.barChartLabels.pop();

    let values: any =[];
    let i = 0;
    series.forEach((serie) =>{
      this.barChartLabels.push(serie.fecha)
      values.push(serie.dato)
      i++;
    });
    let removeIndex = 0;
    if (removeIndex > 0){
      this.barChartData.splice(removeIndex, 1);
    }
    this.barChartData.push({data:  values, label: 'Resultados graficados'});

    //barChartData es el origen de datos



  }

  llenarGrafica(series: any[]){
   
  }

  getUdis(){

    this.cargando = false
    this.prospectService.getUdis(this.fechaInicial, this.fechaFinal)
      .subscribe(
        (response) => {

          this.idSerie = response.bmx.series[0]['idSerie'];
          this.titulo = response.bmx.series[0]['titulo'];
          this.series = response.bmx.series[0]['datos'];
          this.minimo = response.consolidado.minimo;
          this.maximo = response.consolidado.maximo;
          this.promedio = response.consolidado.promedio;
        }
        
      )
    //this.llenarGrafica(this.series);
    this.cargando = true
  }

  getDolar(){
    this.prospectService.getDolares(this.fechaInicial, this.fechaFinal)
      .subscribe(
        (response) =>{
          this.idSerie = response.bmx.series[0]['idSerie'];
          this.titulo = response.bmx.series[0]['titulo'];
          this.series = response.bmx.series[0]['datos'];
          this.minimo = response.consolidado.minimo;
          this.maximo = response.consolidado.maximo;
          this.promedio = response.consolidado.promedio;
        }
      )
  }

  getTiies(){
    this.prospectService.getTiies(this.fechaInicial, this.fechaFinal)
    .subscribe(
      (response) =>{
        this.idSerie = response.bmx.series[0]['idSerie'];
        this.titulo = response.bmx.series[0]['titulo'];
        this.series = response.bmx.series[0]['datos'];
        this.minimo = response.consolidado.minimo;
        this.maximo = response.consolidado.maximo;
        this.promedio = response.consolidado.promedio;
      }
    )
  }

  changeDate(e: any) {
    switch(e.target.id){
      case "fechaInicial":
        this.fechaInicial= moment(e.target.value).format('YYYY-MM-DD')
        break;
      case "fechaFinal":
        this.fechaFinal =  moment(e.target.value).format('YYYY-MM-DD')
        break;
    }
  }


  ngOnInit(): void {
    
  }



  onMultipleFileSelect(event: any){
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
      this.labelFile = '' + event.target.files.length + ' Seleccionados.'
    } else {
      Swal.fire(
        'Aviso',
        'Un archivo minimo es requerido para alta.',
        'warning'
      );
    }
  }

  redirectToProspectList() {
    Swal.fire({
      title: 'Al salir se borrarán las datos capturados, ¿Desea salir?',
      icon: 'question',
      showDenyButton: true,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        //this.resetFormValues();
        this.routeNavigate.navigate(["prospectos"]);
      }
    })
  }



  resetFields(){
    this.labelFile = '';
  }

  resetFormValues(){
    this.labelFile = 'Buscar documento';
    //this.file = '';
    this.prospect = new ProspectModelBuilder().build();
    //this.prospect.status = ApiContants.WAIT_STATUS;
    this.multipleImages = [];
  }

  chartOptions = {
    responsive: true
  };

}
