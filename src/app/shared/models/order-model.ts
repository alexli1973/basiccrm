export class OrderModel {
  constructor(
    public clientId: number,
    public nameOrder: string,
    public amount: number,
    public orderId?: number,
    public clientName?: string
  ) {}
}
