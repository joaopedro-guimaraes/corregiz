import Head from "next/head";

function MyHead({ title }) {
  return (
    <Head>
      <title>CorreGiz{title ? ` | ${title}` : ""}</title>
    </Head>
  );
}

export default MyHead;
