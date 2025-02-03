export enum OrderStatus {
  // Order is created but ticket it is trying to reserve is not yet reserved.
  Created = "created",

  // Ticket the order is trying to reserve has already been reserved
  // Or user has cancelled the order.
  // Or order expires before payment.
  Cancelled = "cancelled",

  // Order has successfully reserved the ticket.
  AwaitingPayment = "awaiting:payment",

  // Order has reserved the ticket and payment is successful.
  Complete = "complete",
}
