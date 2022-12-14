import React from 'react';
import Head from 'next/head';
import pages from '../assets/pages.json';

function Home() {
  const title = 'Index of https://epoch.tw/';
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <title>{title}</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1523667193708406"
          crossOrigin="anonymous"
        />
      </Head>
      <main>
        <h1>{title}</h1>
        <ul>
          {
            pages.map((page) => (
              <li key={page.link}>
                <a href={page.link} target="_blank" rel="noreferrer">
                  { page.label }
                </a>
              </li>
            ))
          }
        </ul>
      </main>
    </>
  );
}

export default Home;
