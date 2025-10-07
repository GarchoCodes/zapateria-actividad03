import { pdf } from "@react-pdf/renderer";
import FacturaPDF from "../components/carrito/FacturaPDF";
import type { Zapatilla } from "../components/context/ZapatillasContext";

interface Comprador {
    nombre: string;
    direccion: string;
    email: string;
}

export async function generarPDF(carrito: Zapatilla[], comprador: Comprador) {
    const blob = await pdf(
        <FacturaPDF carrito={[...carrito]} comprador={comprador} />
    ).toBlob();
    return blob;
}