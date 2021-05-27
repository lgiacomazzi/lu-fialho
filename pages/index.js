import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Luise Fialho | Editora e redatora</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Projetos editoriais - Redação - Leitura crítica - Produção de conteúdo"
        />
      </Head>

      <main>
        <h1 className="title">
          Oi! Sou editora, redatora e produtora de conteúdo com foco em
          literatura e mercado editorial.
        </h1>

        <p className="description">Conheça meu portfólio</p>
      </main>

      <footer></footer>
    </div>
  );
}
