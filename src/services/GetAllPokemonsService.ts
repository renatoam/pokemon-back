import prisma from '../prisma';

class GetAllPokemonsService {
  async execute(limit: number) {
    const pokemons = await prisma.kanto.findMany({
      take: limit,
    });

    return pokemons;
  }
}

export { GetAllPokemonsService };
