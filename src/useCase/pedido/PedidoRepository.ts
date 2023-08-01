import fs from 'fs'
import path from 'path';
import PedidoService from './PedidoService';

/**
 * CRUD com acesso ao arquivo.
 */

export default class PedidoRepository {

    public nextId: number = 0;
    public pedidos: any;

    private readFile() {

        try {
            const pathFile = path.join(__dirname, '../../../data/pedidos.json');

            const data = fs.readFileSync(pathFile, 'utf-8');
            const json = JSON.parse(data);

            this.nextId = json.nextId;
            this.pedidos = json.pedidos;

            return json;

        } catch (error) {
            console.error('Erro ao ler o arquivo:', error);
            return null;
        }
    }

    private writeFile() {


    }

    public save() {
        return {
            message: "App template Node, Express, TypeScript, DotEnv COnfig, API and Swagger",
        };
    }

    public edit() {
        return {
            message: "App template Node, Express, TypeScript, DotEnv COnfig, API and Swagger",
        };
    }

    public delete() {
        return {
            message: "App template Node, Express, TypeScript, DotEnv COnfig, API and Swagger",
        };
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    public get(id: string) {
        this.readFile();
        let pedido = this.pedidos.find((obj: { id: string; }) => obj.id == id);
        return pedido;
    }

    /**
     * 
     * @param cliente 
     * @returns 
     */
    public totalPedidosCliente(cliente: string) {

        this.readFile();
        
        const pedidos = this.pedidos.filter((pedido: {entregue: boolean; cliente: string;}) => pedido.cliente === cliente && pedido.entregue === true);

        if (pedidos.length === 0) {
          return 'Cliente não encontrado.';
        }
      
        const totalSum = pedidos.reduce((acc: any, pedido: { valor: any; }) => acc + pedido.valor, 0);
        return { cliente: cliente, totalSum };

    }

    /**
     * 
     * @param produto 
     * @returns 
     */
    public totalPedidosProduto(produto: string) {

        this.readFile();
        
        const pedidos = this.pedidos.filter((pedido: {entregue: boolean; produto: string;}) => pedido.produto === produto && pedido.entregue === true);

        if (pedidos.length === 0) {
          return 'Produto não encontrado.';
        }
      
        const totalSum = pedidos.reduce((acc: any, pedido: { valor: any; }) => acc + pedido.valor, 0);
        return { produto: produto, totalSum };

    }

    /**
     * 
     * @returns 
     */
    public produtoMaisVendidos() {

        this.readFile();
        
        const pedidos = this.pedidos.filter((pedido: {entregue: boolean;}) => pedido.entregue === true);

        const quantidadeVendida: any = {};

        pedidos.forEach((pedido: { produto: string; quantidade: number; }) => {

            const produto = pedido.produto;
            if (!quantidadeVendida[produto]) {
              quantidadeVendida[produto] = 0;
            }
            quantidadeVendida[produto] += 1;

          });
        
          const produtosMaisVendidos = Object.entries(quantidadeVendida)
            .map(([produto, quantidade]) => ({ produto, quantidade }))
            .sort((a: any, b: any) => b.quantidade - a.quantidade); 


        return produtosMaisVendidos;

    }
}