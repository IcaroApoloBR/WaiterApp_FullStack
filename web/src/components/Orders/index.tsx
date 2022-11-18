import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    "_id": "6373de78b6e06647c81f417d",
    "table": "3",
    "status": "WAITING",
    "products": [
      {
        "product": {
          "name": "Coca cola",
          "imagePath": "1668534431375-coca-cola.png",
          "price": 7,
        },
        "quantity": 2,
        "_id": "6373de78b6e06647c81f417e"
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={orders}
      />

      <OrdersBoard
        icon="👩‍🍳"
        title="Em produção"
        orders={[]}
      />

      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />

    </Container>
  );
}
