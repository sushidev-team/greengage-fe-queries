import { GetStaticProps } from 'next';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import { GetMagazinesDocument, GetNavigationByHandleDocument } from '../src/graphql/generated';
import { clearSsrCache, ssrCache, ssrQuery, useQuery } from '../lib/urql';

function Home({ data }) {
  const [{ data: magazinesData }] = useQuery({ query: GetMagazinesDocument, variables: {} });
  const magazines = magazinesData?.magazines;

  const printData = JSON.stringify(data || '', null, 2);

  return (
    <main>
      <section
        style={{
          padding: '3em',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <h1 style={{ fontSize: '4.5em' }}>Queries testground</h1>
        <p>This sample page is used for query testing.</p>
        <SyntaxHighlighter
          language="javascript"
          style={syntaxStyle}
          customStyle={{ fontSize: '0.8em' }}
          showInlineLineNumbers={true}
          showLineNumbers={true}
          wrapLines={true}
          wrapLongLines={true}
        >
          {printData}
        </SyntaxHighlighter>
      </section>
      <ul>
        {magazines?.map((magazine) => (
          <li key={magazine?.id}>{magazine?.title}</li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  clearSsrCache();

  const { data } = await ssrQuery({
    query: GetNavigationByHandleDocument,
    variables: { handle: process.env.NEXT_PUBLIC_HEADER_NAV_HANDLE || '' },
  });
  await ssrQuery({ query: GetMagazinesDocument, variables: {} });

  return {
    props: {
      data,
      urqlState: ssrCache.extractData(),
    },
  };
};

export default Home;
