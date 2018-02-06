import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClientModel} from '../../../shared/models/client-model';
import {OrderModel} from '../../../shared/models/order-model';
import {NgForm} from '@angular/forms';
import {ConnectionService} from '../../../shared/services/connection.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  @Input() allOrders: OrderModel[] = [];
  @Output() eventOrderEdit = new EventEmitter<OrderModel>();

  currentOrderEditId = 1;
  currentOrderEdit: OrderModel;

  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {
    this.orderEditChange();
  }

  orderEditChange() {
    console.log('Cur ID Order Edit ' + this.currentOrderEditId);
    this.currentOrderEdit = this.allOrders
        .find(o => o.orderId === +this.currentOrderEditId);
  }

  onSubmit(form: NgForm) {
    let {nameOrder, amount} = form.value;
    if (amount < 0) {amount *= -1; }
    const order = new OrderModel(+this.currentOrderEdit.clientId, nameOrder, amount, +this.currentOrderEditId);
    this.connectionService.updateOrder(order);
    this.eventOrderEdit.emit(order);
  }

}
