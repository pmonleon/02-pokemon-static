import Head from 'next/head'
import React, { FC, ReactNode } from 'react'
import { Navbar } from '../ui/Navbar';

type LayoutProps = {
    title?: string,
    children?: ReactNode
}

export const Layout:FC<LayoutProps> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name='author' content='Francisco Monleon' />
            <meta name='description' content={`Informacion sobre el pokemon ${title}`}/>
            <meta name='keywords' content={`${title}, pokemon, pokedex`} />
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
