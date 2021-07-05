import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component'
import { MachineDetailsComponent } from './machine-details/machine-details.component';
import { MachineComponent } from './machine/machine.component';
import {SearchComponent} from './search/search.component'

const routes: Routes = [
  { path:'', component:DashboardComponent},
  { path:'search', component:SearchComponent},
  { path:'machine',
    component:MachineComponent,
    children: [{path:':id', component:MachineDetailsComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
