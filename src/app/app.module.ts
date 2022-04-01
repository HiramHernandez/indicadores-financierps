import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { ProspectsListComponent } from './prospects-list/prospects-list.component';
import { EditProspectComponent } from './edit-prospect/edit-prospect.component';
import { TareaListaComponent } from './tarea-lista/tarea-lista.component';
import { EditTareaComponent } from './edit-tarea/edit-tarea.component';
import { ProspectService } from './shared/prospect.service';
import { AddProspectComponent } from './add-prospect/add-prospect.component';
import { BartChartComponent } from './bart-chart/bart-chart.component';

const appRoutes: Routes= [
  { path:'tareas', component:TareaListaComponent},
  { path:'tareas/:id/edit', component:EditTareaComponent },
  { path:'tareas/new', component:EditTareaComponent },
  { path: 'prospectos', component:ProspectsListComponent},
  {path: 'prospecto/:id/edit', component:EditProspectComponent},
  {path: 'prospecto/new', component:AddProspectComponent},
  { path:'**', redirectTo:'/tareas', pathMatch:'full'} ];



@NgModule({
  declarations: [
    AppComponent,
    ProspectsListComponent,
    EditProspectComponent,
    TareaListaComponent,
    EditTareaComponent,
    AddProspectComponent,
    BartChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [ProspectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
