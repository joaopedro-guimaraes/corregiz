import Head from 'next/head';

function MyHead(props) {
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  );
}

export default MyHead;
