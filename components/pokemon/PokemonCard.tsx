import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React,{ FC } from 'react'
import { SmallPokemon } from '../../interfaces'

interface PokemosCardProps {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<PokemosCardProps> = ({pokemon}) => {

  const {id, name, image} = pokemon;

  const router = useRouter();

  const onPokemonClick = () => {
        router.push(`/pokemon/${id}`)
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
        <Card 
            hoverable 
            clickable
            onClick={onPokemonClick}
        >
            <Card.Body css={{p: 1}}>
                <Card.Image 
                    src={image}
                    width={"100%"}
                    height={140}
                />
                <Card.Footer>
                <Row justify='space-between'>
                    <Text transform='capitalize'>{name}</Text>
                    <Text>#{id}</Text>
                </Row>
                </Card.Footer>
            </Card.Body>    
        </Card>               
    </Grid>

  )
}
