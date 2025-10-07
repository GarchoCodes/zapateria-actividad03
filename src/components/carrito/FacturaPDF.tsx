import { Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import type { Zapatilla } from "../context/ZapatillasContext";
import logo from "../../assets/sport-shoe.png";

interface FacturaPDFProps {
    carrito: Zapatilla[];
    comprador: {
        nombre: string;
        direccion: string;
        email: string;
    };
}

const styles = StyleSheet.create({
    page: { padding: 30, fontSize: 12, fontFamily: "Helvetica" },
    headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
    empresaInfo: { textAlign: "right" },
    compradorInfo: { marginBottom: 20, paddingTop: 10 },
    table: { display: "flex", width: "auto", marginTop: 10 },
    row: { flexDirection: "row" },
    cell: { flex: 1, borderWidth: 1, padding: 4 },
    total: { textAlign: "right", marginTop: 10, fontSize: 12, fontWeight: "bold" },
});

export default function FacturaPDF({ carrito, comprador }: FacturaPDFProps) {
    const total = carrito.reduce((acc, item) => acc + item.precio * (item.cantidad || 1), 0);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={{ alignItems: "center", marginBottom: 20 }}>
                    <Text style={{ fontSize: 24, fontWeight: "bold" }}>Factura</Text>
                </View>

                <View style={styles.headerRow}>

                    <Image src={logo} style={{ width: 100, height: 100 }} />
                    <View style={styles.empresaInfo}>
                        <Text style={{ fontSize: 12, fontWeight: "bold" }}>ZapaterIA</Text>
                        <Text style={{ fontSize: 10 }}>Calle Bahía de Almería, 13</Text>
                        <Text style={{ fontSize: 10 }}>Madrid, España</Text>
                        <Text style={{ fontSize: 10 }}>+34 674 832 182</Text>
                    </View>
                </View>

                {/* Info del comprador */}
                <View style={styles.compradorInfo}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Factura para:</Text>
                    <Text style={{ fontSize: 12 }}>{comprador.nombre}</Text>
                    <Text style={{ fontSize: 12 }}>{comprador.direccion}</Text>
                    <Text style={{ fontSize: 12 }}>{comprador.email}</Text>
                </View>

                {/* Tabla de productos */}
                <View style={styles.table}>
                    <View style={[styles.row, { backgroundColor: "#f0f0f0" }]}>
                        <Text style={[styles.cell, { flex: 2 }]}>Producto</Text>
                        <Text style={styles.cell}>Cantidad</Text>
                        <Text style={styles.cell}>Precio</Text>
                        <Text style={styles.cell}>Subtotal</Text>
                    </View>
                    {carrito.map((item, i) => (
                        <View style={styles.row} key={i}>
                            <Text style={[styles.cell, { flex: 2 }]}>{item.nombre}</Text>
                            <Text style={styles.cell}>{item.cantidad || 1}</Text>
                            <Text style={styles.cell}>{item.precio}€</Text>
                            <Text style={styles.cell}>{(item.precio * (item.cantidad || 1)).toFixed(2)}€</Text>
                        </View>
                    ))}
                </View>

                {/* Total */}
                <Text style={styles.total}>Total: {total.toFixed(2)}€</Text>
            </Page>
        </Document>
    );
}
