import { useFetchGifs } from "../hooks/useFetchGifs";
import styles from "../assets/resultado.module.css";
const { contenedor, gif } = styles;

interface ResultadoProps {
  value: string;
}

export const Resultado: React.FC<ResultadoProps> = ({ value }) => {
  const listaGifs = useFetchGifs(value);

  return (
    <section className={contenedor}>
      {listaGifs.map(({ src, id }) => (
        <article key={id} className={gif}>
          <img src={src.url} />
        </article>
      ))}
    </section>
  );
};
