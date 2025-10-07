import { Link } from "react-router-dom";
import TarjetaZapatilla from "../components/zapatillas/TarjetaZapatilla"
import { useZapatillas } from "../components/context/ZapatillasContext";


const Catalogo = () => {

    const { zapatillas } = useZapatillas();

    return (
        <>
            <h2 className="flex justify-left ps-16 w-full mt-8 text-4xl font-bold text-[oklch(0.15_0.08_262)] dark:text-[oklch(0.96_0.08_262)]">Catálogo</h2>
            <div className="grid grid-cols-4 gap-8 p-16 pt-8">
                {zapatillas.map((zap: { id: React.Key; rutaImg: string | undefined; nombre: string | undefined; precio: number | undefined; }) => (
                    <Link key={zap.id} to={`/producto/${zap.id}`}>
                        <TarjetaZapatilla rutaImg={zap.rutaImg} nombre={zap.nombre} precio={zap.precio} />
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Catalogo
