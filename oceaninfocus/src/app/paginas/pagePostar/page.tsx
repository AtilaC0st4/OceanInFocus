import Footer from "@/app/componentes/footer/footer";
import HeaderFinal from "@/app/componentes/header/haederFinal";
import HeaderInicial from "@/app/componentes/headerInicial/headerInicial";

const PagePostar = () => {
  return (
    <>
      <HeaderFinal />

      <section className="login">
        <form action="/upload" method="post" className="form-login">
          <h1>Denuncie</h1>

          <div className="container-forms">

          <div className="campo-forms">
            <label htmlFor="descricao">Descrição da denúncia</label>
          </div>

          <div className="campo-forms">
            <input type='text' name="descricao" id=""></input>
          </div>

          <div className="campo-forms">
            <label htmlFor="imagem">Carregue a imagem aqui:</label>
          </div>

          <div className="campo-forms">
            <input type="file" id="imagem"  accept="image/*" name="imagem" />
          </div>
          </div>

          <button className="btn-entrar">Postar</button>
        </form>
      </section>

      <Footer />
    </>
  );
};
export default PagePostar;
