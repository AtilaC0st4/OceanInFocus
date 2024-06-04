import Banner from "./componentes/banner/banner";
import Explicacao from "./componentes/explicacao/explicacao";
import Footer from "./componentes/footer/footer";
import HeaderInicial from "./componentes/headerInicial/headerInicial";
import Junte from "./componentes/junte/junte";
import Sobre from "./componentes/sobre/sobre";
import Sugestao from "./componentes/sugestao/sugestao";




const Home = () => {
  return (
    <>
    <HeaderInicial></HeaderInicial>
    <Banner></Banner>
    <Sobre></Sobre>
    <Explicacao></Explicacao>
    <Junte></Junte>
    <Sugestao></Sugestao>
    <Footer></Footer>
    </>
  )
};
export default Home;