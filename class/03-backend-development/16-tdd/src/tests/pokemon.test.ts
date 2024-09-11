import request from "supertest";
import app from "../index";
import nock from "nock";

describe("GET Pokemon API", () => {
  it("should return an array Pokemons", async () => {
    const mockResponse = {
      results: [
        {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon/1/",
        },
        {
          name: "ivysaur",
          url: "https://pokeapi.co/api/v2/pokemon/2/",
        },
      ],
    };

    nock("https://pokeapi.co").get("/api/v2/pokemon").reply(200, mockResponse);
    const response = await request(app).get("/api/v1/pokemons");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockResponse.results);
  });
});
