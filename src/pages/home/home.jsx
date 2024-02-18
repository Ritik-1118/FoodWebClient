import { useState, useEffect } from "react";
import Header from "../../components/header";
import Recommended from "../../components/recommandFood";
import Special from "../../components/special";
import Footer from "../../shared/footer";
import Loader from "../../shared/loader.";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    // Clean up the timer on component unmount or when data is fetched
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
        <Header />
      {isLoading ? (
        // Loader component while data is being fetched
        <div className="">
          {" "}
          <Loader />
        </div>
      ) : (
        // Render components after data is fetched
        <>
         <Recommended />
        </>
      )}
        
       <Special />
    </section>
  );
};

export default Home;
