import { useEffect, useState } from "react";
import { Check } from "lucide-react";

interface ConfirmacionCarritoProps {
    mensaje?: string;
    visible: boolean;
    onClose: () => void;
}

export default function ConfirmacionCarrito({
    mensaje = "Producto agregado al carrito",
    visible,
    onClose,
}: ConfirmacionCarritoProps) {
    const [show, setShow] = useState(visible);
    const [animateOut, setAnimateOut] = useState(false);

    useEffect(() => {
        if (visible) {
            setShow(true);
            setAnimateOut(false);

            const timer = setTimeout(() => {
                setAnimateOut(true); // empieza la animación de salida
                const timerOut = setTimeout(() => {
                    setShow(false);
                    onClose();
                }, 300); // duración de la animación de salida
                return () => clearTimeout(timerOut);
            }, 2500); // visible 2.5s antes de cerrar
            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);

    if (!show) return null;

    return (
        <div className="fixed top-40 right-6 z-50">
            <div
                className={`flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-2xl shadow-lg
          ${animateOut ? "animate-slide-out" : "animate-slide-in"}`}
            >
                <Check className="w-6 h-6" />
                <span className="font-medium">{mensaje}</span>
            </div>
        </div>
    );
}
