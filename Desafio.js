const listaPedidos= [{id:1, producto:'Pizza', entregado:false},
                    {id:2, producto:'Pollo', entregado:true},
                    {id:3, producto:'Sushi', entregado:true},
                    {id:4, producto:'Fideos', entregado:false}];

function procesarPedido(pedido){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(procesarPedido.entregado){
                resolve(`Pedido ${pedido.id} (${pedido.producto} ya fue entregado`);

            }else{
                reject(`Pedido ${pedido.id} (${pedido.producto} esta pendiente`);
            }
        },1000);
    })
};

async function procesarPedidos() {
    for(let pedido of listaPedidos){
        try{
            const resultado = await procesarPedido(pedido);
            console.log(resultado);
        }catch (error){
            console.log(error);
        }
    }
    
}

procesarPedidos();