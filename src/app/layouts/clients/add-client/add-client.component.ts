import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {ConnectionService} from '../../../shared/services/connection.service';
import {ClientModel} from '../../../shared/models/client-model';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  @Output() eventClientAdd = new EventEmitter<ClientModel>();

  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {}

   onSubmit(form: NgForm) {
      let {firstName, lastName, clientEmail} = form.value;
      const client = new ClientModel(firstName, lastName, clientEmail);
      console.log('CLIENT from on Submit ' + JSON.stringify(client));
      this.connectionService.addClient(client);
      this.eventClientAdd.emit(client);
      form.reset();
  }
}
