import { searchGifs } from "../../helpers/feech";
import { test, expect } from "vitest"

test("searchGifs should return 8 gifs", async () => {
    const response = await searchGifs("hola");
    expect(response.length).toBe(8);
    expect(response[0]).toHaveProperty("src");
    expect(response[0]).toHaveProperty("id");
})