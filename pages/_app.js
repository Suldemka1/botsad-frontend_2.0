import React from 'react';
import Head from 'next/head'
const Footer = React.lazy(() => import('../components/Footer/Footer'))
import '../styles/globals.scss'
import Header from '../components/Header/Header';
import MainLayout from '../layouts/MainLayout/MainLayout';
import theme from '../store/theme';
import { observer } from 'mobx-react-lite';
import DarkMode from "../components/Eyes";

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/contact`)
    const footer = await res.json()
    console.log(footer)
    return {
        props: {
            footer: footer.data
        }
    }
}

const MyApp = observer(({ Component, pageProps, footer }) => {
  return (
    <MainLayout>
      <Head>
        <title>Главная</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/tuvsu_logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true}></link>
      </Head>
      { theme.theme === 'dark' &&  (<DarkMode />) }
      <div className='container mx-auto text-black font-light min-h-[500px]'>
        <Component {...pageProps} />
      </div>
    </MainLayout>
  )
})

export default MyApp