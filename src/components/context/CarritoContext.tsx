// CarritoContext.tsx
import { createContext, useContext, useState } from "react";
import type { Zapatilla } from "../context/ZapatillasContext";

interface CarritoContextType {
    carrito: Zapatilla[];
    agregarAlCarrito: (zapatilla: Zapatilla) => void;
    removeFromCarrito: (nombre: string) => void;
}

const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

export function useCarrito(): CarritoContextType {
    const context = useContext(CarritoContext);
    if (!context) throw new Error("useCarrito debe usarse dentro de <CarritoProvider>");
    return context;
}

export function CarritoProvider({ children }: { children: React.ReactNode }) {
    const [carrito, setCarrito] = useState<Zapatilla[]>([]);

    // Ejemplo de función para agregar al carrito
    const agregarAlCarrito = (zapatilla: Zapatilla) => {
        setCarrito(prev => {
            const existe = prev.find(item => item.nombre === zapatilla.nombre);
            if (existe) {
                return prev.map(item =>
                    item.nombre === zapatilla.nombre
                        ? { ...item, cantidad: item.cantidad + (zapatilla.cantidad || 1) }
                        : item
                ).filter(item => item.cantidad > 0); // Elimina si la cantidad llega a 0
            } else {
                return [...prev, { ...zapatilla, cantidad: zapatilla.cantidad || 1 }];
            }
        });
    };

    const removeFromCarrito = (nombre: string) => {
        setCarrito(prev => prev.filter(item => item.nombre !== nombre));
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, removeFromCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
}
