import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>      
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      {/* Muestra la imagen del home en redes sociales */}
      <meta property="og:image" content="../public/img/imageHome.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      </Head>  
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


