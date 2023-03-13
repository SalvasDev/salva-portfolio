import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>      
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* Muestra la imagen del home en redes sociales */}
        {/* Etiquetas para Facebook */}
        <meta name='description' content='Odisy es una empresa dedicada al diseño y desarrollo web en la ciudad de Morelia. Somos especialistas en diseño y desarrollo web, páginas web, landing pageas e identidad corporativa como logotipos, diseño gráfico profesional, diseño editorial y creación de contenido para redes sociales.'/>         
        <meta name="google-site-verification" content="lPCCUtxUlK8TtxzFrrV1Qk2skVI7Og6R_cdSNDhqqnc" />
        <meta property="og:url" content="https://www.byodisy.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Odisy web site" />
        <meta property="og:description" content="Odisy es una empresa dedicada al diseño y desarrollo web en la ciudad de Morelia." />
        <meta property="og:image" content="/imageHome.jpg" />
        <meta property="og:image:type" content="image/jpg" />
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


