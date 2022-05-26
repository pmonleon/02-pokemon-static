import { Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import { FavouritePokemonCard } from './FavouritePokemonCard'

type props = {
  pokemons: number[]
}

export const FavouritePokemons: FC<props> = ({pokemons}) => {
  return (
      <Grid.Container gap={2} direction='row' justify="flex-start">
          {
            pokemons.map((pokeId) => <FavouritePokemonCard key={pokeId} pokeId={pokeId} />)
          }
      </Grid.Container>
  )
}
