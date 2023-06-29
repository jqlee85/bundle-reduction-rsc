import { AppProps } from 'next/app';
import React from 'react';
import Layout from '../components/Layout';
 
const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  
  console.log({Component, pageProps})

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.displayName = 'MyApp';

export default MyApp;