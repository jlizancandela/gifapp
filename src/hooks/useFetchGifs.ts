import { useEffect, useState } from "react";
import { searchGifs } from "../helpers/feech";
import { MediaFormat } from "../types/tenor";

interface listaGifsType {
  id: string;
  src: MediaFormat;
}

export const useFetchGifs = (value: string) => {
  const [listaGifs, setListaGifs] = useState<listaGifsType[]>([]);

  useEffect(() => {
    searchGifs(value).then((newImages) => setListaGifs(newImages));
  }, [value]);

  return listaGifs;
};
