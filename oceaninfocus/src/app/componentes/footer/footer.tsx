import Image from "next/image";
import Link from "next/link";


const Footer = () => {
    return (
        <>
            <footer className="rodape">

                <div className="content-rodape">
                    
                    <Link href='/'><Image src='/imagens/LogoGS.png' alt="" width={100} height={100}></Image></Link>

                    <ul>
                        <li><span>Átila Costa - RM552650</span></li>
                        <li><span>Gabriel Onodera - RM000000</span></li>
                        <li><span>Gabriel Plasa - RM000000</span></li>
                    </ul>
                </div>


                <div className="rodape-footer">
                    <span>&copy;2023 InovaTech. Todos os direitos reservados. Inovação em cada solução.</span>
                </div>

            </footer>
        </>
    )
};
export default Footer;