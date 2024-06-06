import Image from "next/image"
import Link from "next/link"


const HeaderFinal = () => {

    return (
        <>
            <header className="cabecalho">



                <nav className="menu">

                    <Link href='\'><Image src='/imagens/LogoGS.png' alt="" width={70} height={70}></Image></Link>

                    <div className="btns-menu">

                         <Link href='#' className="btn-entrar">Postar</Link>
                         <Link href='\' className="btn-cadastro">Sair</Link>

                    </div>

                </nav>




            </header>
        </>
    )

}; export default HeaderFinal;