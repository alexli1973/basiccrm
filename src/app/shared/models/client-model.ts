import {OrderModel} from './order-model';

export class ClientModel {
  constructor(
    public firstName: string,
    public lastName: string,
    public clientEmail: string,
    public id?: number,
    public order?: OrderModel[],
  ) {}
}
