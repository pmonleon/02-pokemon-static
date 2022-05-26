import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { pokeApi } from '../../api'
import { Pokemon, PokemonListResponse, SmallPokemon } from '../../interfaces'
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react'
import { localFavourites } from '../../utils'
import confetti from 'canvas-confetti';
import { getPokemonInfo } from '../../utils/getPokemonInfo';


interface PokemonNamePageProps {
    pokemon: Pokemon
}

const PokemonNamePage: NextPage<PokemonNamePageProps> = ({ pokemon }) => {

    const [isInFavourites, setisInFavourites] = useState( localFavourites.existInFavourites(pokemon.id)  )
    
    
    const onToggleFavourite = () => {
        setisInFavourites(!isInFavourites)
        localFavourites.toggleFavourite(pokemon.id)

        if (isInFavourites) return

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 0.5,
                y: 0
            }
        })
    }



  return (
    <Layout title={pokemon.name}>
    
        <Grid.Container css={{marginTop:'5px'}} gap={2}>

            <Grid xs={12} sm={4}>
                <Card hoverable css={{padding: '30px'}}>
                    <Card.Body>
                        <Card.Image 
                            src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                            alt={pokemon.name}
                            width={'100%'}
                            height={'200px'}
                        />
                    </Card.Body>
                </Card>
            </Grid>

            <Grid xs={12} sm={8}>
                <Card>
                    <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
                        <Text h1 transform='capitalize'>{pokemon.name}</Text>
            
                        <Button color={'gradient'} ghost={!isInFavourites} onClick={() => onToggleFavourite()}>
                            { !isInFavourites ? <span>Guardar en favoritos</span> : <span>En favoritos</span> }
                        </Button>
                        
                    </Card.Header>
                    <Card.Body>
                        <Text size={30}>Sprites:</Text>
                        <Container direction='row' display='flex'>
                            <Image 
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                              <Image 
                                src={pokemon.sprites.back_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                              <Image 
                                src={pokemon.sprites.front_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                              <Image 
                                src={pokemon.sprites.back_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                        </Container>
                    </Card.Body>
                </Card>          
            </Grid>

        </Grid.Container>

    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const response = await  pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const { data } = response;
  
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg
    const pokemons: SmallPokemon[] = data.results.map((element, index) => {
        element.id = index + 1
        element.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${element.id}.svg`
        return element
    });

 
    return {
        paths: pokemons.map(({name})=>{
            return  {
                params: {
                   name
                },
            }
        }),
        fallback: false
    }
}


// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async (ctx) => {
   const { params } = ctx;
   const { name } = params as {name: string};


    return {
        props: {
          pokemon: await getPokemonInfo(name)
        }
    }
}

  

export default PokemonNamePage

