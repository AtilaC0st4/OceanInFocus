import Image from "next/image"

const Banner = () => {
    return (
        <>
            <section className="banner">

                <div className="content">

                    <div className="container-banner">

                        <div className="txt-banner">

                            <h1>Proteja Nossos Oceanos:
                                Denuncie Agressões Ambientais</h1>

                            <p>Bem-vindo ao nosso portal de denúncias ambientais. Aqui, sua voz faz a diferença!</p>

                        </div>

                        <div className="img-banner">
                            <Image src="https://www.imagensanimadas.com/data/media/194/peixe-imagem-animada-0354.gif" 
                            alt='gif de um peixe' width={500} height={700}></Image>
                        </div>
                    </div>

                </div>
                <div className="borda"></div>
            </section>


        </>
    )
};
export default Banner;