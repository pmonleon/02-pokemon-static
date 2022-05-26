import Head from 'next/head'
import React, { FC, ReactNode } from 'react'
import { Navbar } from '../ui/Navbar';

type LayoutProps = {
    title?: string,
    children?: ReactNode
}

const origin = (typeof window === 'undefined') ? "" : window.location.origin

export const Layout:FC<LayoutProps> = ({children, title}) => {

  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name='author' content='Francisco Monleon' />
            <meta name='description' content={`Informacion sobre el pokemon ${title}`}/>
            <meta name='keywords' content={`${title}, pokemon, pokedex`} />
            
            <meta property="og:title" content={`Informacion sobre el pokemon ${title}`} />
            <meta property="og:description" content={`Esta es la página sobre ${title}`}/>
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>
        {/* Navbar */}
        <Navbar />
        <main style={{
            padding: '0 20px'

        }}>
            {children}
        </main>
    </>
  )
}
