import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateMedicoComponent } from '././views/medico/create-medico/create-medico.component';
import { ListMedicoComponent } from '././views/medico/list-medico/list-medico.component';

//Auto import

const routes: Routes = [

  {
    path: '', 
    component: ListMedicoComponent
  },
  {
    path: 'medico/create', 
    component: CreateMedicoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
