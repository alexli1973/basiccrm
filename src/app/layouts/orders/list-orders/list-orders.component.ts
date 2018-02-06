import {Component, Input, OnInit} from '@angular/core';
import {OrderModel} from '../../../shared/models/order-model';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {
  @Input() allOrders: OrderModel[] = [];

  constructor() { }

  ngOnInit() {
  }

}
