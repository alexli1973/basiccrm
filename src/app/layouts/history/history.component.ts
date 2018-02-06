import { Component, OnInit } from '@angular/core';
import {ClientModel} from '../../shared/models/client-model';
import {OrderModel} from '../../shared/models/order-model';
import {ConnectionService} from '../../shared/services/connection.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  allClients: ClientModel[] = [];
  allOrders: OrderModel[] = [];

  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {
    this.allClients = this.connectionService.getClients();
    this.allOrders = this.connectionService.getOrders();
  }

}
