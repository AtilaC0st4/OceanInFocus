import Image from "next/image"
import Link from "next/link"


const HeaderInicial = () => {

    return (
        <>
            <header className="cabecalho">

                <nav className="menu">

                    <Link href='\'><Image src='/imagens/LogoGS.png' alt="" width={70} height={70}></Image></Link>

                    <div className="btns-menu">

                        <Link href='/paginas/pageLogin/' className="btn-entrar">Entre</Link>
                       <Link href='/paginas/pageCadastro/' className="btn-cadastro">Cadastre-se</Link>

                    </div>

                </nav>

            </header>
        </>
    )

}; export default HeaderInicial;