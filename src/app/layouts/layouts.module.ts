import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import {HeaderComponent} from '../shared/header/header.component';
import { LayoutsComponent } from './layouts.component';
import {SidebarComponent} from '../shared/sidebar/sidebar.component';
import {LayoutsRoutingModule} from './layouts-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { AddClientComponent } from './clients/add-client/add-client.component';
import { EditClientComponent } from './clients/edit-client/edit-client.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { EditOrderComponent } from './orders/edit-order/edit-order.component';
import { HistoryComponent } from './history/history.component';
import { HistoryOrdersComponent } from './history/history-orders/history-orders.component';
import { HistoryDetailComponent } from './history/history-detail/history-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutsRoutingModule
  ],
  declarations: [
    ClientsComponent,
    HeaderComponent,
    SidebarComponent,
    LayoutsComponent,
    OrdersComponent,
    AddClientComponent,
    EditClientComponent,
    ContactComponent,
    ListClientsComponent,
    AddOrderComponent,
    ListOrdersComponent,
    EditOrderComponent,
    HistoryComponent,
    HistoryOrdersComponent,
    HistoryDetailComponent,
  ]
})
export class LayoutsModule { }
