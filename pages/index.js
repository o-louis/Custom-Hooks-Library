import Head from "next/head";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Custom Hooks Library</title>
      </Head>

      <main>
        <h1>Custom Hooks Library</h1>
        <ul>
          <li>useFetch</li>
          <li>useScroll</li>
          <li>useTheme</li>
          <li>useLocalStorage</li>
          <li>useKeyDown</li>
        </ul>
      </main>
    </div>
  );
};

export default Index;
