import { TenorResponse } from "../types/tenor";
export const apiKey = "AIzaSyDo2mJwC0RnDWpARy2Fvtolp8hqc1GXORs";
export const clientKey = "my_test_app";

export const searchGifs = async (value: string) => {
  const url = `https://tenor.googleapis.com/v2/search?q=${value}&key=${apiKey}&client_key=${clientKey}&limit=8`;

  const response = await fetch(url);
  const data: TenorResponse = await response.json();
  const { results } = data;
  const gifs = results.map(({ id, media_formats }) => {
    const { gif } = media_formats;
    return { id, src: gif };
  });
  return gifs;
};
