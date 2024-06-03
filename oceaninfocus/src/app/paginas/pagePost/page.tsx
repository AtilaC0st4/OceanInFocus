import Footer from "@/app/componentes/footer/footer";
import HeaderInicial from "@/app/componentes/headerInicial/headerInicial";

const PagePost = () => {
    return (
        <>
            

            <section className="denuncie">
                <form action="">
                    <h1>Denuncie</h1>

                    <div>
                        <label htmlFor="descricao">Descrição da denúncia</label>
                        <textarea name="descricao" id=""></textarea>
                    </div>

                    <div>
                        <label htmlFor="imagem">Carregue a imagem aqui:</label>
                        <input type="image" name="imagem" />
                    </div>

                    <button>Postar</button>

                </form>
            </section>

            <Footer />
        </>
    )
};
export default PagePost;