import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ClientModel} from '../../../shared/models/client-model';
import {ConnectionService} from '../../../shared/services/connection.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  @Input() allClients: ClientModel[] = [];
  @Output() eventClientEdit = new EventEmitter<ClientModel>();

  currentClientEditId = 1;
  currentClientEdit: ClientModel;

  constructor(private connectionService: ConnectionService) {
  }

  ngOnInit() {
    this.clientEditChange();
  }

  clientEditChange() {
    console.log('Cur ID Client Edit ' + this.currentClientEditId);
    this.currentClientEdit = this.allClients
      .find(c => c.id === +this.currentClientEditId);
  }

  onSubmit(form: NgForm) {
    const {firstName, lastName, clientEmail} = form.value;
    const client = new ClientModel(firstName, lastName, clientEmail, +this.currentClientEditId);
    this.connectionService.updateClient(client);
    this.eventClientEdit.emit(client);
  }
  removeClient(form: NgForm) {
    this.connectionService.removeClient(+this.currentClientEditId);
  }

}
