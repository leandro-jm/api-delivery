/**
 * Metodos de acesso, get, post, etc.
 */

import { doesNotThrow } from "assert";
import { Get, Route } from "tsoa";
import PedidoRepository from "./PedidoRepository";

interface PedidoResponse {
    message: any;
  }
  
@Route("pedido")
export default class PedidoController {

    private params: any;

    constructor(request: any) {
        this.params = request.params;
    }

    @Get("/")
    public get(): PedidoResponse {

        let pedidoRepo = new PedidoRepository();
        let result = pedidoRepo.get(this.params.id);

        return {
            message: result,
        };
    }

    @Get("/")
    public totalPedidosCliente(): PedidoResponse {

        let pedidoRepo = new PedidoRepository();
        let result = pedidoRepo.totalPedidosCliente(this.params.cliente);
        
        return {
            message: result,
        };
    }

    @Get("/")
    public totalPedidosProduto(): PedidoResponse {

        let pedidoRepo = new PedidoRepository();
        let result = pedidoRepo.totalPedidosProduto(this.params.produto);
        
        return {
            message: result,
        };
    }

    @Get("/")
    public produtoMaisVendidos(): PedidoResponse {

        let pedidoRepo = new PedidoRepository();
        let result = pedidoRepo.produtoMaisVendidos();
        
        return {
            message: result,
        };
    }
}



