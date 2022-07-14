import React from 'react'
import Head from "next/head";
import Link from 'next/link';

export interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({children}:LayoutProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href="/">
          <a>общая информация</a>
        </Link>
        <Link href="/">
          <a>задача 1</a>
        </Link>
        <Link href="/">
          <a>задача 2</a>
        </Link>
      </header>
      <main>{children}</main>
      
    </>
  );
}