import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConnectionService} from '../../../shared/services/connection.service';
import {ClientModel} from '../../../shared/models/client-model';
import {NgForm} from '@angular/forms';
import {OrderModel} from '../../../shared/models/order-model';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  @Input() allClients: ClientModel[] = [];
  currentClientId = 1;
  currentClient: ClientModel;
  @Output() eventOrderAdd = new EventEmitter<OrderModel>();

  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {
    this.clientChange();
  }

  clientChange() {
    console.log('Cur ID Client Order Page ' + this.currentClientId);
    this.currentClient = this.allClients
      .find(c => c.id === +this.currentClientId);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    let {clientId, nameOrder, amount} = form.value;
    if (amount < 0) {
      amount *= -1;
    }
    const order = new OrderModel(+this.currentClientId, nameOrder, amount);
    this.connectionService.addOrder(order);
    this.eventOrderAdd.emit(order);
    // form.reset();
  }

}
