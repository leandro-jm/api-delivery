import { Router } from "express";
import HelloController  from "./useCase/hello/HelloController";
import PedidoController from "./useCase/pedido/PedidoController";

const router: Router = Router();

//Routes
router.get("/", (request, response) => {
     const controller = new HelloController();
     return response.send(controller.home());
});

router.get("/pedidos/:id", (request, response) => {
     const controller = new PedidoController(request);
     return response.send(controller.get());
});

router.get("/pedidos/cliente/:cliente", (request, response) => {
     const controller = new PedidoController(request);
     return response.send(controller.totalPedidosCliente());
});

router.get("/pedidos/produto/:produto", (request, response) => {
     const controller = new PedidoController(request);
     return response.send(controller.totalPedidosProduto());
});

router.get("/produto/mais-vendidos", (request, response) => {
     const controller = new PedidoController(request);
     return response.send(controller.produtoMaisVendidos());
});

export { router };