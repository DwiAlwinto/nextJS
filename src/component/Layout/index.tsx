import React, { ReactNode } from 'react'
import Header from '../header'
import Footer from '../header/footer'
import styles from './Layout.module.css'
import Head from 'next/head'

interface LayoutProops { //kalau kita buat children berarti type dari react tersebut adalah ReactNode
    children: ReactNode; 
    pageTitle: string;
}

export default function Layout(proops : LayoutProops) {
    const {children, pageTitle} = proops;

  return (
    <>
    
    {/* Head untuk membuat metadata(untuk kebutuhan SIO) */}
    <Head>
      <title>
        Next JS | 
        {' '}
        {pageTitle}
        </title>
      <meta name='description' content='Website with  NextJS ' />
    </Head>

    <div className={styles.container}>
      <Header />

      <div className={styles.content}>{children}</div>

      <Footer />
    </div>
    </>

  )
}
