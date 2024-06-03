import Link from "next/link"

const Junte = () => {
    return (
        <>
            <section className="junte">

                <div className="content">

                    <div className="mensagens">
                        <h3>Por Que Participar? </h3>
                        <span>Sua participação é crucial para a proteção dos nossos mares.
                            Cada denúncia ajuda a monitorar e agir contra atividades nocivas,
                            preservando a biodiversidade e garantindo um futuro sustentável para as próximas gerações.</span>
                    </div>
                    
                    <div className="mensagens">
                        <h3>Junte-se a Nós!</h3>
                        <span>Faça parte dessa corrente do bem e ajude a proteger nossos oceanos.
                            Cadastre-se, entre, denuncie, compartilhe e faça a diferença!
                            Vamos juntos preservar a vida marinha!</span>
                            <div className="btn-entrar"><Link href='#'>Entre</Link></div>
                            <div className="btn-cadastro"><Link href='#'>Cadastre-se</Link></div>
                    </div>


                </div>

            </section>

        </>
    )
};
export default Junte;