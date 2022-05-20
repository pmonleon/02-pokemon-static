import { Text, Spacer, useTheme, Link as NavLink } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link';

import { useRouter } from 'next/router';
import React from 'react'

export const Navbar = () => {

    const { theme } = useTheme(); 
    const { push } = useRouter();

  return (
    <div style={{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        padding:'0px 20px',
        background: theme?.colors.gray50.value
    }}>
      <div style={{
         cursor:'pointer',
         width:'50px',
         display:'flex',
         flexDirection:'row'
       }}
       >
        <Image 
            src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
            alt="Icono de la app"
            width={70}
            height={70}
        />        
       </div>

       <Link href="/" passHref>
          <NavLink>
                <Text color='white' h1>P</Text>
                <Text color='white' h3>okémon</Text>
          </NavLink>
       </Link>
         
        <Spacer css={{flex:1}} />
        <Link href="/favoritos" passHref>
          <NavLink>
            <Text color='white' h3>Favoritos</Text>
          </NavLink>
       </Link>      
    </div>
  )
}
