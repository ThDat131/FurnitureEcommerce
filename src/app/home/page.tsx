import Head from "next/head";
import Banner from "./component/Banner";
import { Grid } from "@mui/material";
import Article from "./component/Article";
import TrendingProduct from "./component/TrendingProduct";
import { items } from "../static";
import StorageService from "./component/StorageService";
import Activity from "./component/Activity";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <Grid xs={12} container>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid xs={12} container rowSpacing={6}>
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid item xs={12}>
          <Article />
        </Grid>
        <Grid item xs={12}>
          <TrendingProduct items={items} />
        </Grid>
        <Grid item xs={12}>
          <StorageService />
        </Grid>
        <Grid item xs={12}>
          <Activity />
        </Grid>
      </Grid>
      <Grid xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Home;
