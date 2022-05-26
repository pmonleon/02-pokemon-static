// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { Grid, Text } from '@nextui-org/react';
import { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse } from '../interfaces';
import { SmallPokemon } from '../interfaces/pokemon-list';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({pokemons}) => {
  
  return (

      <Layout title='Listado de Pokemons'>
        
        <>
          <Text h1>Lista de Pokémons</Text>
          <Grid.Container gap={2} justify='flex-start'>
            {pokemons.map((pokemon) => (
               <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </Grid.Container>
          
        </>       
      </Layout>
       
  )
}



export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const response = await  pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const { data } = response;

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg
  const pokemons: SmallPokemon[] = data.results.map((element, index) => {
      element.id = index + 1
      element.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${element.id}.svg`
      return element
  });
 

  return {
    props: {
      pokemons
    }
  }
}




export default HomePage
