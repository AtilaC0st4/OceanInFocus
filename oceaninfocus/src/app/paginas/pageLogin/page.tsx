import Footer from "@/app/componentes/footer/footer";
import HeaderInicial from "@/app/componentes/headerInicial/headerInicial";

const PageLogin = () => {
    return (
        <>
            <HeaderInicial />

            <section className="login">
                <form action="">
                    <h1>Bem-vindo(a)</h1>

                    <div>
                        <label htmlFor="nome">Nome de usuário:</label>
                        <input type="text" name="nome" />
                    </div>

                    <div>
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" name="senha" />
                    </div>

                    <button>Entrar</button>

                </form>
            </section>

            <Footer />
        </>
    )
};
export default PageLogin;