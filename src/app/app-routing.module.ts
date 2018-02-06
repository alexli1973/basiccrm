import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ClientsComponent} from './layouts/clients/clients.component';
import {LayoutsComponent} from './layouts/layouts.component';

const routes: Routes = [
  {path: '', redirectTo: 'system/clients', pathMatch: 'full'}
  /*{path: '', component: LayoutsComponent}*/
];

@NgModule({
  imports: [
   // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
