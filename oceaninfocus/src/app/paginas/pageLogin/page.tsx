import Footer from "@/app/componentes/footer/footer";
import HeaderInicial from "@/app/componentes/headerInicial/headerInicial";
import Link from "next/link";

const PageLogin = () => {
    return (
        <>
            <HeaderInicial />

            <section className="login">

                <form action="" className="form-login" >

                    <h1>Bem-vindo(a)</h1>

                    <div className="container-forms">

                    <div className="campo-forms">
                        <label htmlFor="nome">Nome de usuário:</label>
                    </div>

                    <div className="campo-forms">
                        <input type="text" name="nome" placeholder="Nome de usuário" />
                    </div>

                    <div className="campo-forms">
                        <label htmlFor="senha">Senha:</label>
                    </div>

                    <div className="campo-forms">                                                                                     
                        <input type="password" name="senha" placeholder="Senha"/>
                    </div>
                    </div>
                    <button className="btn-entrar">Entrar</button>
                    <Link href='/paginas/pageFeed/'> aqui</Link>

                </form>
            </section>

            <Footer />
        </>
    )
};
export default PageLogin;