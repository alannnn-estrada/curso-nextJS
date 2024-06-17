import Link from "next/link";

export const metadata = {
    title: 'Tienda oficial',
}

function LayoutTienda({ children }) {
    return (
        <>
            <nav>
                <h3>Sección de tienda</h3>
                <ul>
                    <li>
                        <Link href={"/tienda"}>Tienda</Link>
                    </li>
                    <li>
                        <Link href={"/tienda/categorias"}>Categorías</Link>
                    </li>
                    <li>
                        <Link href={"/tienda/categorias/computadoras"}>Computadoras</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </>
    )
}

export default LayoutTienda;