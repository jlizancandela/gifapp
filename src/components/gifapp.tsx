import { useState } from "react";
import { Input } from "../components/input";
import { Resultado } from "./resultado";
import styles from "../assets/resultado.module.css";
const { title } = styles;

export const Gifapp = () => {
  const [resultado, setResultado] = useState<string[]>([]);

  const onSearch = (value: string) => {
    setResultado([value, ...resultado]);
  };

  return (
    <>
      <Input onSearch={onSearch} />
      {resultado.map((r, i) => (
        <section key={i}>
          <h1 className={title}>{r}:</h1>
          <Resultado value={r}></Resultado>
        </section>
      ))}
    </>
  );
};
