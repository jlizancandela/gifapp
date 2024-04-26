import React, { useState } from "react";
import styles from "../assets/resultado.module.css";
const { formulario } = styles;
interface InputProps {
  onSearch: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setInputValue(value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} className={formulario}>
      <input
        type="text"
        name="busqueda"
        onChange={onChange}
        value={inputValue}
        placeholder="Texto a buscar..."
      />
    </form>
  );
};
