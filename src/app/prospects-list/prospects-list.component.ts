import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProspectModel, ProspectBuilder, Usuario, UdisModel,UdisBuilder } from '../shared/prospect.model';
import { ProspectService } from '../shared/prospect.service';
import { Frase } from '../chuck/modelos/frase';
import { ApiService } from'../chuck/servicios/api.service'

@Component({
  selector: 'app-prospects-list',
  templateUrl: './prospects-list.component.html',
  styleUrls: ['./prospects-list.component.css']
})
export class ProspectsListComponent implements OnInit {
  public frase: Frase = { value: "", icon_url: "", id: "", url: "" };
  users: any;
  prospects: any;
  constructor(private prospectService: ProspectService, private apiService: ApiService) { 
  }

  ngOnInit(): void {
    this.apiService.getFrase().subscribe(frase => (this.frase = frase));
    this.getUsers();
    this.getProspects();
    console.log(this.users);
  }


  /*
  async getUdis(){
    this.prospectService.getUdis('2022-03-9', '2022-03-09')
      .subscribe(response => console.log(response.bmx.series));
  }
  */
 

  getUsers(){
    this.prospectService.getUsersAny().subscribe(data => {
      this.users = data.data;
    });
  }

  getProspects(){
    this.prospectService.getAllProspects().subscribe(data => {
      this.prospects = data.data;
    })
  }




}
