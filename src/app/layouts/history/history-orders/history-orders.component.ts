import {Component, Input, OnInit} from '@angular/core';
import {ClientModel} from '../../../shared/models/client-model';
import {OrderModel} from '../../../shared/models/order-model';

@Component({
  selector: 'app-history-orders',
  templateUrl: './history-orders.component.html',
  styleUrls: ['./history-orders.component.css']
})
export class HistoryOrdersComponent implements OnInit {
  @Input() allClients: ClientModel[] = [];
  @Input() allOrders: OrderModel[] = [];

  constructor() { }

  ngOnInit() {
    this.allOrders.forEach((o) => {
      o.clientName = this.allClients.find(c => c.id === o.clientId).clientEmail;
    });
  }

}
