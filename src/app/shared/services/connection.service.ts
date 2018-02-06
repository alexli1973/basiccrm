import {Injectable} from '@angular/core';
import {ClientModel} from '../models/client-model';
import {OrderModel} from '../models/order-model';

@Injectable()
export class ConnectionService {

  private clients: ClientModel[];
  private orders: OrderModel[];
  private nextId: number;
  private nextIdOrder: number;

  constructor() {
    let clients = this.getClients();
    if (clients.length === 0) {
      this.nextId = 1;
    }else {
      let curMaxId = clients[clients.length - 1].id; // id??
      this.nextId = ++curMaxId;
    }
    let orders = this.getOrders();
    if (orders.length === 0) {
      this.nextIdOrder = 1;
    }else {
      let curMaxIdOrder = orders[orders.length - 1].orderId;
      this.nextIdOrder = curMaxIdOrder + 1;
    }
  }

  addClient(client: ClientModel) {
    client.id = this.nextId++;
    let clients = this.getClients();
    clients.push(client);
    this.setClientToLocalStorage(clients);
    return client;
  }

  addOrder(order: OrderModel) {
    order.orderId = this.nextIdOrder++;
    let orders = this.getOrders();
    orders.push(order);
    this.setOrderToLocalStorage(orders);
    return order;
  }
// checked, ok ->
  getClients(): ClientModel[] {
    let localStorageClient = JSON.parse(localStorage.getItem('clients'));
    return localStorageClient == null ? [] : localStorageClient.clients;
  }
  getOrders(): OrderModel[] {
    let localStorageOrder = JSON.parse(localStorage.getItem('orders'));
    return localStorageOrder == null ? [] : localStorageOrder.orders;
  }

  removeClient(id: number): void {
    let clients = this.getClients();
    clients = clients.filter((client) => client.id !== id );
    this.setClientToLocalStorage(clients);
  }

  updateClient(client: ClientModel) {
    let clients = this.getClients();
    clients = clients.filter((c) => c.id !== client.id );

    let clientsCopy: ClientModel[] = [];
    clientsCopy = clients;

    clientsCopy.push(client);
    this.setClientToLocalStorage(clientsCopy);
  }

  updateOrder(order: OrderModel) {
    let orders = this.getOrders();
    orders = orders.filter((o) => o.orderId !== order.orderId );

    let ordersCopy: OrderModel[] = [];
    ordersCopy = orders;

    ordersCopy.push(order);
    this.setOrderToLocalStorage(ordersCopy);
  }

  setClientToLocalStorage(clients: ClientModel[]): void {
    localStorage.setItem('clients', JSON.stringify({clients}));
  }
  setOrderToLocalStorage(orders: OrderModel[]): void {
    localStorage.setItem('orders', JSON.stringify({orders}));
  }
}
