import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConnectionService} from '../../shared/services/connection.service';
import {ClientModel} from '../../shared/models/client-model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  allClients: ClientModel[] = [];
  isLoaded = false;
  clientIsLoaded = false;

  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {
    this.allClients = this.connectionService.getClients();
    this.isLoaded = true;
    // console.log(this.connectionService.getAllClients());
    if (this.allClients.length !== 0 ) {this.clientIsLoaded = true; }
  }

  newClientAdded(client: ClientModel) {
    // add to array
    this.allClients.push(client);
    this.clientIsLoaded = true;
  }

  clientWasEdited(client: ClientModel) {
    const idx = this.allClients.findIndex(c => c.id === client.id);
    this.allClients[idx] = client;
  }

}
