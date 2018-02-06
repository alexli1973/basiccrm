import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutsComponent} from './layouts.component';
import {ClientsComponent} from './clients/clients.component';
import {OrdersComponent} from './orders/orders.component';
import {ContactComponent} from './contact/contact.component';
import {HistoryComponent} from './history/history.component';
import {HistoryDetailComponent} from './history/history-detail/history-detail.component';


const routes: Routes = [
  {
    path: 'system', component: LayoutsComponent,
    children: [
      {path: 'clients', component: ClientsComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'history', component: HistoryComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'history/:id', component: HistoryDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class LayoutsRoutingModule { }
