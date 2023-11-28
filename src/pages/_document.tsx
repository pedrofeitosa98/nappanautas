import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" href="/images/favicon.png" />
        <meta
          name="description"
          content="Nappanautas é um fã-site e primeia rádio do Nappa Hotel. Procuramos proporcionar diversão através de programações diversas e interações diretas com vocês jogadores e ouvintes, além de - é claro - muita música!"
        />
        <script
          async
          defer
          src="https://platform.twitter.com/widgets.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
