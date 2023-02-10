import Head from "next/head";
import { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../hooks/reduxHooks";
import { useGetRateQuery } from "../services/testApi";
import { setRate } from "../slices/testSlice";

const Home = () => {
  const dispatch = useTypedDispatch();
  const btcRate = useTypedSelector(({ test }) => test.rate);
  const response = useGetRateQuery(null);

  useEffect(() => {
    const { data, isSuccess } = response;
    if (isSuccess) dispatch(setRate(data.bpi.EUR.rate));
  }, [response]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-9xl text-center">{btcRate}</h1>
    </div>
  );
};

export default Home;
