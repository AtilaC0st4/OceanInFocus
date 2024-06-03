import Footer from "@/app/componentes/footer/footer";
import HeaderFinal from "@/app/componentes/header/haederFinal";
import Image from "next/image";


const PageFeed = () => {
    return (
        <>
            <HeaderFinal />

            <section className="feed" >

                <article className="publi">
                    <header className="cabecalho-publi">
                        <h2>User</h2>
                        <span>20/05/2024</span>
                    </header>
                    <Image src='/public/imagens/publi1.png' alt='publicação' width={350} height={500}></Image>
                    <footer className="rodape-publi">
                        <p>Acabei de ver este rapaz jogando lixo no mar, proximo a praia do centro.</p>
                    </footer>
                </article>

            </section>

            <Footer />
        </>
    )
};
export default PageFeed;