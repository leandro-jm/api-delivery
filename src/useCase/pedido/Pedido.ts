/**
 * 
 */
export class Pedido {

  id: number;
  cliente: string;
  produto: string;
  valor: number;
  entregue: boolean;
  timestamp: Date;

  constructor(id: number, cliente: string, produto: string, valor: number, entregue: boolean, timestamp: Date) {
    this.id = id;
    this.cliente = cliente;
    this.produto = produto;
    this.valor = valor;
    this.entregue = entregue;
    this.timestamp = timestamp;
  }


}