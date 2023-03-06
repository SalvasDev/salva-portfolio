import { Html, Head, Main, NextScript } from 'next/document'
import previewOdissy from '../public/img/PreviewOdissy.png'

export default function Document() {
  return (
    <Html lang="en">
      <Head>      
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <meta property="og:image" content='../public/img/PreviewOdissy.png' />

      </Head>  
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


