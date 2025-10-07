import TarjetaCarrito from '../components/carrito/TarjetaCarrito'
import { useCarrito } from '../components/context/CarritoContext'
import TarjetaCheckout from '../components/carrito/TarjetaCheckout';

const Carrito = () => {
    const { carrito } = useCarrito();

    if (carrito.length === 0) return (
        <div className="flex flex-1 items-center justify-center min-h-[60vh]">
            <p className="text-2xl text-[#495057]">El carrito está vacío</p>
        </div>
    )

    return (
        <div className='p-4 flex flex-col md:flex-row gap-8'>
            <div className="flex-1">
                {carrito.map((p, index) => (
                    <TarjetaCarrito key={index} zapatilla={p} />
                ))}
            </div>
            <div className="w-full md:w-96 me-8">
                <TarjetaCheckout />
            </div>
        </div>
    )
}

export default Carrito
