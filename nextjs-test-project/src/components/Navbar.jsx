import Link from 'next/link';
import "./navbar.css"
export function Navbar() {
    return (
        <nav className='navbar'>
            <h1>NextJS curso</h1>
            <ul>
                {/* Carga la aplicación con dada cambio */}
                {/* <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/tienda">Tienda</a></li>
            <li><a href="/tienda/categorias">Categorias</a></li>
            <li><a href="/tienda/categorias/computadoras">Computadoras</a></li> */}
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
                <li>
                    <Link href={"/post"}>Post</Link>
                </li>
                <li>
                    <Link href={"/tienda"}>Tienda</Link>
                </li>
                <li>
                    <Link href={"/tienda/categorias"}>Categorias</Link>
                </li>
                <li>
                    <Link href={"/tienda/categorias/computadoras"}>Computadoras</Link>
                </li>
            </ul>
        </nav>
    )
}