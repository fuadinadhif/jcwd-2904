import { Request, Response } from "express";
import axios from "axios";

export async function getAllPokemons(req: Request, res: Response) {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");

    return res.status(200).json(data.results);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }
}
