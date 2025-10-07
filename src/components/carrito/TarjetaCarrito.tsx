import { useCarrito } from '../context/CarritoContext'
import mas from '../../assets/plus.svg'
import menos from '../../assets/dash.svg'

interface Zapatilla {
    id: number;
    nombre: string;
    descripcion: string;
    cantidad: number;
    precio: number;
    rutaImg: string;
}

interface TarjetaCarritoProps {
    zapatilla: Zapatilla;
}

const TarjetaCarrito = ({ zapatilla }: TarjetaCarritoProps) => {
    const { agregarAlCarrito, removeFromCarrito } = useCarrito();

    const handleDecrement = () => {
        if (zapatilla.cantidad <= 1) {
            removeFromCarrito(zapatilla.nombre);
        } else {
            agregarAlCarrito({ ...zapatilla, cantidad: -1 });
        }
    };
    const handleIncrement = () => {
        agregarAlCarrito({ ...zapatilla, cantidad: 1 });
    };

    const precioTotal = zapatilla.precio * zapatilla.cantidad;

    return (
        <div className='rounded-lg p-4 flex items-center bg-[oklch(1_0.04_262)] dark:bg-[oklch(0.1_0.04_262)] m-4 w-full justify-between'>
            <div className='flex items-center'>
                <img src={zapatilla.rutaImg} alt="Zapatilla" className='size-20 ml-4' />
                <h1 className='ml-4 text-2xl font-bold text-[oklch(0.15_0.08_262)] dark:text-[oklch(0.96_0.08_262)]'>{zapatilla.nombre}</h1>
            </div>
            <div className='flex items-center'>
                <h1 className='mr-4 text-2xl font-bold text-[oklch(0.15_0.08_262)] dark:text-[oklch(0.96_0.08_262)]'>{precioTotal}€</h1>
                <button className='p-1.5 bg-[oklch(0.4_0.1_262)] rounded-4xl font-bold hover:bg-[oklch(0.7_0.08_262)] hover:cursor-pointer hover:scale-105 hover:shadow transition-all' onClick={handleDecrement}><img src={menos} alt="" /></button>
                <p className='mx-2 text-lg text-[oklch(0.4_0.08_262)] dark:text-[oklch(0.76_0.08_262)]'>x{zapatilla.cantidad}</p>
                <button className='p-1.5 bg-[oklch(0.4_0.1_262)] rounded-4xl font-bold hover:bg-[oklch(0.7_0.08_262)] hover:cursor-pointer hover:scale-105 hover:shadow transition-all' onClick={handleIncrement}><img src={mas} alt="" /></button>
            </div>
        </div>
    )
}

export default TarjetaCarrito