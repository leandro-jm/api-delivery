/**
 * Contem as regras do negocio para aquele escopo.
 */

export default class PedidoService {

    /**
     * 
     * @param products 
     * @returns 
     */
    sortProduct(products: any[]) {

        products.sort(function (a,b){
            if (a.total > b.total) {
                return -1;
              }
              if (a.total < b.total) {
                return 1;
              }
              return 0;
        })

        return products;
    }

}