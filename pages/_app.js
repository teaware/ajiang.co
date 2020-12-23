import Layout from "../components/Layout";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout pageTitle="water" description="be water">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
