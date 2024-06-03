import Image from "next/image";

const Sobre = () => {
    return (
        <>
            <section className="sobre">
                <div className="content">
                    <h2>Sobre Nós</h2>
                    <div className="container-sobre">
                        <Image src="/imagens/baleia.gif" alt='gif de duas baleias' width={250} height={250}></Image>
                        <p>Nosso site foi criado com o propósito de unir pessoas comprometidas com a preservação dos oceanos.
                            Sabemos que as agressões ao meio ambiente marinho são um problema crescente e urgente.
                            Desde a poluição por plásticos até a pesca ilegal, passando pela destruição de habitats marinhos,
                            cada ação prejudicial precisa ser identificada e combatida.</p>
                    </div>
                </div>
            </section>
        </>
    )

};
export default Sobre;