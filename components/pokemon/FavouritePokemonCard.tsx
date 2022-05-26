import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

type props = {
  pokeId: number
}

export const FavouritePokemonCard: FC<props> = ({pokeId}) => {

  const router = useRouter();
  const { push } = router;

  const onFavouriteClick = () => {
      push(`/pokemon/${pokeId}`)
  }

  return (

    <Grid xs={6} sm={3} md={2} xl={1} >
        <Card hoverable clickable css={{padding:'10px'}} onClick={onFavouriteClick}>
            <Card.Image 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`} 
              width={'100%'}
              height={'140px'}
            />
        </Card>
    </Grid>
     
  )
}
