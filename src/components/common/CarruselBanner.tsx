import { useState, useEffect } from "react";
import carrusel1 from '../../assets/carrusel/carrusel1.png';
import carrusel2 from '../../assets/carrusel/nikes-derecha.png';
import carrusel3 from '../../assets/carrusel/nikes-izquierda.png';
import carrusel4 from '../../assets/carrusel/carrusel4.png';

interface Slide {
    imagen: string;
    titulo: string;
    descripcion: string;
}

const slides: Slide[] = [
    { imagen: carrusel1, titulo: "ZapaterIA", descripcion: "Descubre nuestros últimos productos" },
    { imagen: carrusel2, titulo: "Calzado de calidad", descripcion: "Encuentra tu estilo más cómodo" },
    { imagen: carrusel4, titulo: "Promociones", descripcion: "Descuentos exclusivos" },
    { imagen: carrusel3, titulo: "Envío rápido y seguro", descripcion: "Recibe tus pedidos rápido de forma segura" },
];

export default function CarruselBanner() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000); // cambia cada 4 segundos
        return () => clearInterval(interval);
    }, []);

    const slide = slides[current];
    const isEven = current % 2 === 0;


    return (
        <div className="relative w-full h-120 overflow-hidden flex items-center justify-center">
            <div className="flex flex-col md:flex-row w-full h-full">
                {/* Imagen */}
                <div className={`w-full md:w-1/2 h-full ${isEven ? "order-1" : "order-2"}`}>
                    <img src={slide.imagen} alt={slide.titulo} className="w-full h-full object-cover" />
                </div>

                {/* Texto */}
                <div className={`w-full md:w-1/2 flex flex-col justify-center p-6 text-center md:text-left ${isEven ? "order-2 md:items-start md:justify-center" : "order-1 md:items-start md:justify-center text-right"}`}>
                    <div className={`max-w ${isEven ? "ml-0 md:ml-8" : "mr-0 md:mr-8 flex flex-col w-full justify-end items-end"}`}>
                        <h2 className="text-3xl font-bold mb-2 text-[oklch(0.15_0.08_262)] dark:text-[oklch(0.96_0.08_262)]">{slide.titulo}</h2>
                        <p className="text-[oklch(0.4_0.08_262)] dark:text-[oklch(0.76_0.08_262)]">{slide.descripcion}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
