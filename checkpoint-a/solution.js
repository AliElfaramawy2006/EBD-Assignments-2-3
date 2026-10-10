// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Cairo" && order.status === "pending"
  );
}

export function summarize(orders) {
  if (orders.length === 0) {
    return 0;
  }

  return Math.max(...orders.map((order) => order.price));
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.quantity} x ${order.item} for ${order.student}`;
  } catch {
    return `No order with id ${id}`;
  }
}

export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((order) => ({
      student: order.student,
      city: order.city
    }))
  );
}