import { useState } from 'react';
import { useZapatillas } from '../context/ZapatillasContext';
import { Link, useParams } from 'react-router-dom';
import { useCarrito } from "../context/CarritoContext";
import ConfirmacionCarrito from "../common/ConfirmacionCarrito";

const DetallesZapatilla = () => {
    const { id } = useParams();
    const { zapatillas } = useZapatillas();
    const { agregarAlCarrito } = useCarrito();
    const [confirmVisible, setConfirmVisible] = useState(false);

    const zapatilla = zapatillas.find((zap: { id: number }) => zap.id === Number(id!));

    if (!zapatilla) {
        return <div>Zapatilla no encontrada</div>;
    }

    const handleAgregar = () => {
        agregarAlCarrito(zapatilla);
        setConfirmVisible(true);
    };

    return (
        <div className='flex px-32 py-20 relative'>
            {/* Imagen */}
            <div className='bg-[oklch(1_0.04_262)] dark:bg-[oklch(0.1_0.04_262)] flex items-center justify-center rounded-4xl ms-16'>
                <img
                    className='size-120 p-8 object-cover'
                    src={zapatilla.rutaImg}
                    alt={"Imagen " + zapatilla.nombre}
                />
            </div>

            {/* Detalles */}
            <div className='p-16 ms-16 flex flex-col text-[oklch(0.15_0.08_262)] dark:text-[oklch(0.96_0.08_262)]'>
                <h2 className='text-6xl font-bold'>{zapatilla.nombre}</h2>
                <p className='text-lg ms-1 mt-2 text-[oklch(0.4_0.08_262)] dark:text-[oklch(0.76_0.08_262)]'>
                    {zapatilla.descripcion}
                </p>

                <div className='flex items-center mt-8 gap-8'>
                    <p className='text-4xl ms-1'>{zapatilla.precio}€</p>
                    <button
                        onClick={handleAgregar}
                        className='bg-[oklch(0.4_0.1_262)] border-3 border-[oklch(0.6_0.08_262)] px-6 py-3 rounded-4xl text-[oklch(0.96_0.08_262)] hover:cursor-pointer hover:scale-105 hover:shadow-lg transition-all'
                    >
                        Añadir a la cesta
                    </button>
                </div>
            </div>

            {/* Botón volver */}
            <Link to={'/productos'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-arrow-left size-8 text-[oklch(0.15_0.08_262)] dark:text-[oklch(0.96_0.08_262)] absolute top-10 left-10 hover:scale-110 transition-transform"
                    viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
            </Link>

            {/* Confirmación */}
            <ConfirmacionCarrito
                visible={confirmVisible}
                onClose={() => setConfirmVisible(false)}
                mensaje={`${zapatilla.nombre} añadido al carrito`}
            />
        </div>
    );
};

export default DetallesZapatilla;
