import Link from "next/link"

const Junte = () => {
    return (
        <>
            <section className="junte">

                <div className="content">

                    <div className="container-junte">

                        <div className="mensagens" id="msg1">
                            <h3>Por Que Participar? </h3>
                            <p>Sua participação é crucial para a proteção dos nossos mares.
                                Cada denúncia ajuda a monitorar e agir contra atividades nocivas,
                                preservando a biodiversidade e garantindo um futuro sustentável para as próximas gerações.</p>
                        </div>

                        <div className="mensagens" id="msg2">
                            <h3>Junte-se a Nós!</h3>
                            <p>Faça parte dessa corrente do bem e ajude a proteger nossos oceanos.
                                Cadastre-se, entre, denuncie, compartilhe e faça a diferença!
                                Vamos juntos preservar a vida marinha!</p>

                            <div className="btns-menu">

                                <Link href='#' className="btn-entrar">Entre</Link>
                                <Link href='#' className="btn-cadastro">Cadastre-se</Link>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="borda" ></div>

            </section>

        </>
    )
};
export default Junte;