import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusModel, StatusModelBuilder } from '../shared/prospecto.models';
import { ProspectService } from '../shared/prospect.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-prospect',
  templateUrl: './edit-prospect.component.html',
  styleUrls: ['./edit-prospect.component.css']
})
export class EditProspectComponent implements OnInit {
  statusModel: StatusModel;
  public prospectId:number = 0;
  comments: string = '';
  name = 'Monica';
  constructor(
    private routeNavigate: Router,
    private prospectService: ProspectService,
    private route: ActivatedRoute) {
    this.statusModel = new StatusModelBuilder().build();
  }

  ngOnInit(): void {
    this.statusModel.autorizar = 0;
    let id = this.route.snapshot.paramMap.get("id");
    
  }

  callType(value: string) {
    let d = parseInt(value);
    if (d == 2){
      this.statusModel.autorizar = 1
    }
    else{
      this.statusModel.autorizar = 0
    }
  }


  async updateStatus(statusModel: StatusModel){
 
    statusModel.observaciones = this.comments;
    let id = this.route.snapshot.paramMap.get("id");
    this.prospectService
      .updateProspect(statusModel, id)
      .subscribe((response) => {
        console.log(statusModel);
        Swal.fire('Exito', 'El Prospecto ha sido guardado' , 'success');
        this.routeNavigate.navigate(["prospectos"]);
      }, (error) => {
        if (!error.error.status_code) {
          Swal.fire(`Error ${error.error.code}`, error.error.message, 'error');
        } else {
          Swal.fire('Atención', error.error.message, 'warning');
        }
      }
    );

    
   

  }

  onSubmit(){
    /*
     if (this.tarea._id)
      this.tareaService.updateTarea(this.tarea)
        .subscribe(data => {console.log(data); this.router.navigate(['/tareas']);},error=>console.log(error));
    else
      this.tareaService.addTarea(this.tarea)
        .subscribe(data => {console.log(data); this.router.navigate(['/tareas']);},error=>console.log(error));
    
    */
  }

}
