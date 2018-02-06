import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ConnectionService} from '../../../shared/services/connection.service';
import {OrderModel} from '../../../shared/models/order-model';
import {ClientModel} from '../../../shared/models/client-model';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.css']
})
export class HistoryDetailComponent implements OnInit {
  idUrl: string;
  orders: OrderModel[] = [];
  ordersById: OrderModel[] = [];
  clientById: ClientModel[] = [];

  constructor(private route: ActivatedRoute, private connectionService: ConnectionService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
       // console.log('PARAMS ' + params['id']);
        this.idUrl = params['id'];
      });
   // console.log('ID_URL ' + this.idUrl);
    this.getOrderByClientId(+this.idUrl);
    this.getClientById(+this.idUrl);
  }

  getOrderByClientId(id: any) {
    let orders = this.connectionService.getOrders();
    orders = orders.filter((o) => o.clientId === id);
    this.ordersById = orders;
  }

  // get client name , show on detail page
  getClientById(id: any) {
  }

}
