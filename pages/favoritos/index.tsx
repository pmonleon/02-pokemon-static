import { Text } from "@nextui-org/react";
import React from "react";
import { Layout } from "../../components/layouts";
import { NextPage } from 'next';

const FavoritosPage: NextPage= () => {
  return (
    <Layout title='Pokemons Favoritos'>
      <>
         <Text h1>Favoritos</Text>
      </>
    </Layout>
  )   
};

export default FavoritosPage;
