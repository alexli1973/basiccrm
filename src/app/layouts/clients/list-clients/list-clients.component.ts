import {Component, Input, OnInit} from '@angular/core';
import {ClientModel} from '../../../shared/models/client-model';
import {ConnectionService} from '../../../shared/services/connection.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
  @Input() allClients: ClientModel[] = [];

  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {}

   removeClient(): void {}

}
