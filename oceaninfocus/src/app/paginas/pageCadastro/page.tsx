import Footer from "@/app/componentes/footer/footer";
import HeaderInicial from "@/app/componentes/headerInicial/headerInicial";

const PageCadastro = () => {
    return (
        <>
            <HeaderInicial />

            <section className="login">
                <form action="" className="form-login">
                    <h1>Cadastre-se</h1>

                    <div className="container-forms">

                    <div className="campo-forms">
                        <label htmlFor="nome">Nome:</label>
                    </div>
                    <div className="campo-forms">
                        <input type="text" name="nome" placeholder="Nome" />
                    </div>
                    <div className="campo-forms">
                        <label htmlFor="dtNascimento">Data de nascimento:</label>
                    </div>
                    <div className="campo-forms">
                        <input type="date" name="dtNascimento" />
                    </div>
                    <div className="campo-forms">
                        <label htmlFor="CPF">CPF:</label>
                    </div>
                    <div className="campo-forms">
                        <input type="text" name="CPF" placeholder="CPF" />
                    </div>
                    <div className="campo-forms">
                        <label htmlFor="email">E-mail:</label>
                    </div>
                    <div className="campo-forms">
                        <input type="email" name="email" placeholder="E-mail" />
                    </div>
                    <div className="campo-forms">
                        <label htmlFor="telefone">Telefone:</label>
                    </div>
                    <div className="campo-forms">
                        <input type="tel" name="telefone" placeholder="Telefone" />
                    </div>
                    <div className="campo-forms">
                        <label htmlFor="nomeUsuario">Nome de usuário:</label>
                    </div>
                    <div className="campo-forms">
                        <input type="text" name="nomeUsuario" placeholder="Nome de usuário" />
                    </div>
                    <div className="campo-forms">
                        <label htmlFor="senha">Senha:</label>
                    </div>
                    <div className="campo-forms">
                        <input type="password" name="senha" placeholder="Senha" />
                    </div>
                    </div>
                    <button className="btn-entrar">Cadastre-se</button>

                </form>
            </section>

            <Footer />
        </>
    )
};
export default PageCadastro;