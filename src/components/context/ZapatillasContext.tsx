import { createContext, useContext } from 'react';
import zapa1 from '../../assets/zapatillas/zapa1.png'
import zapa2 from '../../assets/zapatillas/zapa2.png'
import zapa3 from '../../assets/zapatillas/zapa3.png'
import zapa4 from '../../assets/zapatillas/zapa4.png'
import zapa5 from '../../assets/zapatillas/zapa5.png'
import zapa6 from '../../assets/zapatillas/zapa6.png'
import zapa7 from '../../assets/zapatillas/zapa7.png'
import zapa8 from '../../assets/zapatillas/zapa8.png'
import zapa9 from '../../assets/zapatillas/zapa9.png'
import zapa10 from '../../assets/zapatillas/zapa10.png'
import zapa11 from '../../assets/zapatillas/zapa11.png'
import zapa12 from '../../assets/zapatillas/zapa12.png'

export interface Zapatilla {
    id: number;
    rutaImg: string;
    nombre: string;
    precio: number;
    descripcion: string;
    cantidad: number;
}

interface ZapatillasContextType {
    zapatillas: Zapatilla[];
}

const ZapatillasContext = createContext<ZapatillasContextType | undefined>(undefined);
export function useZapatillas() {
    const context = useContext(ZapatillasContext);
    if (!context) {
        throw new Error("useProductos debe usarse dentro de un <ProductosProvider>");
    }
    return context;
}

export function ZapatillasProvider({ children }: { children: React.ReactNode }) {

    const zapatillas: Zapatilla[] = [
        { id: 1, rutaImg: zapa1, nombre: 'Running', precio: 50, descripcion: 'Descripción de la Zapatilla 1', cantidad: 0 },
        { id: 2, rutaImg: zapa2, nombre: 'EasyWear', precio: 75, descripcion: 'Descripción de la Zapatilla 2', cantidad: 0 },
        { id: 3, rutaImg: zapa3, nombre: 'Flashback', precio: 100, descripcion: 'Descripción de la Zapatilla 3', cantidad: 0 },
        { id: 4, rutaImg: zapa4, nombre: 'Iron Rush 2', precio: 120, descripcion: 'Descripción de la Zapatilla 4', cantidad: 0 },
        { id: 5, rutaImg: zapa5, nombre: 'Air Force', precio: 90, descripcion: 'Descripción de la Zapatilla 5', cantidad: 0 },
        { id: 6, rutaImg: zapa6, nombre: 'Black Menace', precio: 110, descripcion: 'Descripción de la Zapatilla 6', cantidad: 0 },
        { id: 7, rutaImg: zapa7, nombre: 'RetroWave', precio: 80, descripcion: 'Descripción de la Zapatilla 7', cantidad: 0 },
        { id: 8, rutaImg: zapa8, nombre: 'Nova Step', precio: 95, descripcion: 'Descripción de la Zapatilla 8', cantidad: 0 },
        { id: 9, rutaImg: zapa9, nombre: 'Pink Clouds', precio: 130, descripcion: 'Descripción de la Zapatilla 9', cantidad: 0 },
        { id: 10, rutaImg: zapa10, nombre: 'Red Velvet', precio: 85, descripcion: 'Descripción de la Zapatilla 10', cantidad: 0 },
        { id: 11, rutaImg: zapa11, nombre: 'Camo', precio: 115, descripcion: 'Descripción de la Zapatilla 11', cantidad: 0 },
        { id: 12, rutaImg: zapa12, nombre: 'Sky Drift', precio: 140, descripcion: 'Descripción de la Zapatilla 12', cantidad: 0 },
    ];

    return (
        <ZapatillasContext.Provider value={{ zapatillas }}>
            {children}
        </ZapatillasContext.Provider>
    )
}
