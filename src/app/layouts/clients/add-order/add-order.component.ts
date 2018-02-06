import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {ClientModel} from '../../../shared/models/client-model';
import {NgForm} from '@angular/forms';
import {OrderModel} from '../../../shared/models/order-model';
import {ConnectionService} from '../../../shared/services/connection.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  @Input() allClients: ClientModel[] = [];

  currentClientId = 1;
  curentClient: ClientModel;

  constructor(private connectionService: ConnectionService) {
  }

  ngOnInit() {
    this.clientChange();
  }

  clientChange() {
    console.log('Cur ID Client ' + this.currentClientId);
    this.curentClient = this.allClients
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
  }
}
