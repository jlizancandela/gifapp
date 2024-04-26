import { Gifapp } from "./components/gifapp";
import { ToTop } from "./components/totop";
import styles from "./assets/resultado.module.css";
const { apptitle } = styles;

export function App() {
  return (
    <>
      <h1 className={apptitle}>Buscador de gifs</h1>
      <Gifapp />
      <ToTop />
    </>
  );
}
