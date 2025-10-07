import { useCarrito } from "../context/CarritoContext";

export default function IconoCesta() {
    const { carrito } = useCarrito();

    // Sumar todas las cantidades si cada producto tiene `cantidad`
    const totalItems = carrito.reduce((acc, item) => acc + (item.cantidad || 1), 0);

    return (
        <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-fill size-10 text-[oklch(0.15_0.08_262)] dark:text-[oklch(0.96_0.08_262)]" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
            </svg>
            {totalItems > 0 && (
                <span className="absolute -bottom-1.5 -right-1.5 bg-[oklch(0.15_0.08_262)] dark:bg-[oklch(0.96_0.08_262)] border-3 border-[oklch(0.96_0.04_262)] dark:border-[oklch(0.15_0.04_262)] dark:text-[oklch(0.15_0.08_262)] text-[oklch(0.96_0.08_262)] rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold">
                    {totalItems}
                </span>
            )}
        </div>
    );
}
