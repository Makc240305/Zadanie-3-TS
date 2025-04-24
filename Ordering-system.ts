
class Product {
    constructor(public name: string, public price: number) {}
  }
  
  class OrderItem {
    constructor(public product: Product, public quantity: number) {}
  
    getTotal(): number {
      return this.product.price * this.quantity;
    }
  }
  
  class Order {
    public items: OrderItem[] = [];
    public status: 'Pending' | 'Completed' = 'Pending';
  
    addItem(item: OrderItem) {
      this.items.push(item);
    }
  
    getTotal(): number {
      return this.items.reduce((sum, item) => sum + item.getTotal(), 0);
    }
  
    completeOrder() {
      this.status = 'Completed';
    }
  }
  
  class Customer {
    public orders: Order[] = [];
  
    constructor(public name: string) {}
  
    placeOrder(order: Order) {
      this.orders.push(order);
    }
  
    showOrderHistory() {
      console.log(`Order history for ${this.name}:`);
      this.orders.forEach((order, index) => {
        console.log(`Order #${index + 1}, Total: ${order.getTotal()} zł, Status: ${order.status}`);
      });
    }
  }