import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>      
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
        {/* Muestra la imagen del home en redes sociales */}
        {/* Etiquetas para Facebook */}
        <meta property="og:url" content="https://www.byodisy.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Odisy web site" />
        <meta property="og:description" content="Odisy es una empresa dedicada al diseño y desarrollo web en la ciudad de Morelia." />
        <meta property="og:image" content="https://www.byodisy.com/public/images/imageHome.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1851" />
        <meta property="og:image:height" content="917" />
      </Head>  
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


