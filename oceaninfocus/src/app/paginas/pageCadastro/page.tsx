import Footer from "@/app/componentes/footer/footer";
import HeaderInicial from "@/app/componentes/headerInicial/headerInicial";

const PageCadastro = () => {
    return (
        <>
            <HeaderInicial />

            <section className="cadastro">
                <form action="">
                    <h1>Cadastre-se</h1>

                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" name="nome" />
                    </div>

                    <div>
                        <label htmlFor="dtNascimento">Data de nascimento:</label>
                        <input type="date" name="dtNascimento" />
                    </div>
                    <div>
                        <label htmlFor="CPF">CPF:</label>
                        <input type="password" name="CPF" />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="tel" name="telefone" />
                    </div>
                    <div>
                        <label htmlFor="nomeUsuario">Nome de usuário:</label>
                        <input type="text" name="nomeUsuario" />
                    </div>
                    <div>
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" name="senha" />
                    </div>
                    <button>Cadastre-se</button>

                </form>
            </section>

            <Footer />
        </>
    )
};
export default PageCadastro;