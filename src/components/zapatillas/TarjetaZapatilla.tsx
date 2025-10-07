interface TarjetaZapatillaProps {
    rutaImg?: string;
    nombre?: string;
    precio?: number;
}

const TarjetaZapatilla = ({ rutaImg, nombre, precio }: TarjetaZapatillaProps) => {
    return (
        <div className="flex flex-col bg-[oklch(1_0.04_262)] dark:bg-[oklch(0.1_0.04_262)] items-center shadow-lg p-4 rounded-2xl hover:cursor-pointer hover:scale-105 hover:shadow-lg transition-all">
            <div className="w-64 h-60">
                <img className="w-full h-full object-cover" src={rutaImg} alt={"Imagen " + nombre} />
            </div>
            <div className="flex items-center justify-between w-full px-2 text-[oklch(0.15_0.08_262)] dark:text-[oklch(0.96_0.08_262)]">
                <h2 className="text-3xl">{nombre}</h2>
                <p className="text-xl">{precio}€</p>
            </div>
        </div>
    )
}

export default TarjetaZapatilla
