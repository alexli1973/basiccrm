import { Component, OnInit } from '@angular/core';
import {ConnectionService} from '../../shared/services/connection.service';
import {ClientModel} from '../../shared/models/client-model';
import {OrderModel} from '../../shared/models/order-model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  allClients: ClientModel[] = [];
  allOrders: OrderModel[] = [];
  isLoaded = false;
  orderIsLoaded = false;

  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {
    this.allClients = this.connectionService.getClients();
    this.isLoaded = true;
    this.allOrders = this.connectionService.getOrders();
    if (this.allOrders.length !== 0 ) {this.orderIsLoaded = true; }
  }

  newOrderAdded(order: OrderModel) {
    this.allOrders.push(order);
    this.orderIsLoaded = true;
  }

  orderWasEdited(order: OrderModel) {
    const idx = this.allOrders.findIndex(o => o.orderId === order.orderId);
    this.allOrders[idx] = order;
  }

}
