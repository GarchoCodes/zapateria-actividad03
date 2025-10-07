import { useState } from "react";
import { useCarrito } from "../context/CarritoContext";
import { generarPDF } from "../../utils/generarPDF";
import descarga from "../../assets/download.svg";

export default function BotonDescarga() {
    const comprador = {
        nombre: "Medac Davante",
        direccion: "Calle Albalá, 5, Madrid",
        email: "medac.davante@gmail.com"
    };
    const { carrito } = useCarrito();
    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        if (carrito.length === 0) return;

        setLoading(true);
        try {
            const blob = await generarPDF(carrito, comprador);
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "FacturaZapaterIA.pdf";
            link.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error generando PDF:", error);
            alert("No se pudo generar el PDF. Intenta nuevamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button onClick={handleDownload} className="hover:cursor-pointer flex items-center justify-center bg-[oklch(0.4_0.1_262)] border-3 border-[oklch(0.6_0.08_262)] px-6 py-3 mt-2 gap-4 w-full rounded-4xl text-[oklch(1_0.08_262)] hover:scale-105 hover:shadow-lg transition-all">
            <img className="w-6 h-6" src={descarga} alt="Icono descarga" />
            {loading ? "Generando PDF..." : "Descargar factura"}
        </button>
    );
}