import { Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { NextPage } from 'next';
import { NoFavourites } from '../../components/ui';
import { localFavourites } from '../../utils'
import { FavouritePokemons } from '../../components/pokemon/FavouritePokemons';


const FavoritosPage: NextPage= () => {

  const [pokeList, setPokeList] = useState<number[]>([])

  useEffect(() => {
    
    setPokeList( localFavourites.pokemons() ) 

  }, [])
  

  return (
    <Layout title='Pokemons Favoritos'>
      <>
       { pokeList.length === 0 ? (
          <NoFavourites />
          ) : (
            <>
              <Text h2>Listado pokemons favoritos</Text>
              <FavouritePokemons pokemons={pokeList} />
            </>
        )}
      </>
    </Layout>
  )   
};

export default FavoritosPage;
