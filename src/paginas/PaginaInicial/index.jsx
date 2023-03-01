import styles from "./PaginaInicial.module.scss";
import banner from "./banner.png";

import Cabecalho from "componentes/Cabecalho";
import Menu from "componentes/Menu";
import Rodape from "componentes/Rodape/index";
import Galeria from "componentes/Galeria/index";
import Populares from "componentes/Populares";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaco</h1>
            <img src={banner} alt="A imagem da terra vista do espaco" />
          </div>
        </section>
        <div>
          <Galeria />
          <Populares />
        </div>
      </main>

      <Rodape />
    </>
  );
}
