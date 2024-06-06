import Image from "next/image"
import Link from "next/link"


const HeaderFinal = () => {

    return (
        <>
            <header className="cabecalho">



                <nav className="menu">

                    <Link href='\'><Image src='/imagens/LogoGS.png' alt="" width={70} height={70}></Image></Link>

                    <div className="btns-menu">

                        <div className="btn-entrar"><Link href='#'>Postar</Link></div>
                        <div className="btn-cadastro"><Link href='\'>Sair</Link></div>

                    </div>

                </nav>




            </header>
        </>
    )

}; export default HeaderFinal;