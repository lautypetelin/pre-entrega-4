const carritoDeCompra = ['Arroz', 'Fideos', 'Manteca', 'Maiz', 'Manzana'];
let flag = true;
const menu = 'Carrito de compras\n\n' +
  '1. Ver carrito.\n' +
  '2. Agregar producto al principio de la lista.\n' +
  '3. Agregar producto al final de la lista.\n' +
  '4. Quitar producto al principio de la lista.\n' +
  '5. Quitar producto al final de la lista.\n' +
  '6. Comprobar existencia de un producto por nombre.\n' +
  '7. Reemplaza producto por otro.\n' +
  '8. Salir.';

const mostrarCarritoDeCompra = () => {
  let carrito = 'Lista de productos: \n\n'
  if(carritoDeCompra.length > 0){
    for(let producto of carritoDeCompra){
      if (obtenerPosicionDeProducto(carritoDeCompra, producto) != 0) {
        carrito += '\nProducto: ' + producto;
      }else{
        carrito += 'Producto: ' + producto;
      }
    }
  }else{
    carrito = 'Tu carrito de compra está vacío.'
  }

  alert(carrito);
};

do{
  let opcion = parseInt(prompt(menu));
  let producto;

  switch(opcion){
    case 1:
      mostrarCarritoDeCompra();
      break;
    case 2:
      agregarProductoAlPrincipio(carritoDeCompra);
      break;
    case 3:
      agregarProductoAlFinal(carritoDeCompra);
      break;
    case 4:
      producto = quitarProductoAlPrincipio(carritoDeCompra);
      alert(`Se ha quitado el producto '${producto}' del principio.`)
      break;
    case 5:
      producto = quitarProductoAlFinal(carritoDeCompra);
      alert(`Se ha quitado el producto '${producto}' del final.`)
      break;
    case 6:
      corroborarExistenciaDeProducto(carritoDeCompra);
      break;
    case 7:
      reemplazarProductoPorOtro(carritoDeCompra);
      break;
    case 8:
      alert('¡Gracias por visitar nuestro local!.')
      flag = false;
      break;
    default:
      alert('La opción ingresada no es válida.')
  }

}while(flag);

// --------------------------------------------------

function agregarProductoAlPrincipio(carritoDeCompra){
  let producto = prompt('Nombre del producto para agregar al principio:').trim();

  if(carritoDeCompra.includes(producto)){
    alert(`El producto '${producto}' ya existe en la lista de compra.`);
    return;
  }

  carritoDeCompra.unshift(producto);
  alert(`Se ha agregado el producto '${producto}' al principio de la lista.`);
}

function agregarProductoAlFinal(carritoDeCompra){
  let producto = prompt('Nombre del producto para agregar al final:').trim();

  if(carritoDeCompra.includes(producto)){
    alert(`El producto '${producto}' ya existe en la lista de compra.`);
    return;
  }

  carritoDeCompra.push(producto);
  alert(`Se ha agregado el producto '${producto}' al final de la lista.`);
}

function quitarProductoAlPrincipio(carritoDeCompra){
  return carritoDeCompra.shift();
}

function quitarProductoAlFinal(carritoDeCompra){
  return carritoDeCompra.pop();
}

function corroborarExistenciaDeProducto(carritoDeCompra){
  let producto = prompt('Nombre del producto para comprobar existencia:').trim();

  let existe = carritoDeCompra.includes(producto);
  
  if(existe){
    alert(`Tu carrito de compras cuenta con el producto '${producto}' en la posición ${obtenerPosicionDeProducto(carritoDeCompra, producto)}`);
  }else{
    alert(`Tu carrito de compras no cuenta con el producto '${producto}'`);
  }
}

function reemplazarProductoPorOtro(carritoDeCompra){
  let productoAReemplazar = prompt('Nombre del producto que deseas reemplazar:').trim();
  if(!carritoDeCompra.includes(productoAReemplazar)){
    alert(`El producto '${productoAReemplazar}' no existe.`)
    return;
  }
  let posicionDelProducto = carritoDeCompra.indexOf(productoAReemplazar);

  let productoNuevo = prompt('Nombre del producto nuevo:').trim();

  if(carritoDeCompra.includes(productoNuevo) && productoAReemplazar !== productoNuevo){
    alert(`El producto '${productoNuevo}' ya existe en la lista de compra.`);
    return;
  }

  // carritoDeCompra[carritoDeCompra.indexOf(productoAReemplazar)] = productoNuevo;
  let fueReemplazado = carritoDeCompra.splice(posicionDelProducto, 1, productoNuevo);

  if(fueReemplazado){
    alert(`Se ha reemplazado el producto '${productoAReemplazar}' por '${productoNuevo}' en la posición ${posicionDelProducto}.`)
  }else{
    alert(`No se ha podido reemplazar el producto..`)
  }
}

function obtenerPosicionDeProducto(carritoDeCompra, producto){
  return carritoDeCompra.indexOf(producto);
}