function orderProduct(orderId: string | number) {
  console.log("Ordering product with id", orderId);
}

orderProduct(1); // 👍
orderProduct("123-abc"); // 👍
orderProduct({ name: "foo" }); // 👎
