import { useCarrito } from '../context/CarritoContext';
import DescargarFactura from './DescargarFactura';

const TarjetaCheckout = () => {
    const { carrito } = useCarrito();

    const precioTotal = carrito.reduce((acc, zap) => acc + zap.precio * zap.cantidad, 0);

    return (
        <div className='rounded-lg p-4 m-4 w-full sticky top-8 text-[oklch(0.15_0.08_262)] dark:text-[oklch(0.96_0.08_262)]'>
            <h2 className='text-2xl font-bold mb-2'>Detalles del pedido</h2>
            <hr className="mb-4" />
            <ul className="mb-4">
                {carrito.map((zap, idx) => (
                    <li key={idx} className="flex justify-between mb-2">
                        <span>{zap.nombre} x{zap.cantidad}</span>
                        <span>{(zap.precio * zap.cantidad).toFixed(2)}€</span>
                    </li>
                ))}
            </ul>
            <hr className="mb-2" />
            <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{precioTotal.toFixed(2)}€</span>
            </div>
            <DescargarFactura />
        </div>
    )
}

export default TarjetaCheckout
