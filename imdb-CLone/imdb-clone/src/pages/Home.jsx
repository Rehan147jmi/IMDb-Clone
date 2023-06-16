import React from "react";
import { Box, styled, Typography } from "@mui/material";
import Header from "../Common Components/Header";
import Banner from "../Common Components/Banner";
import Slide from "../Common Components/Slide";
import Upnext from "../Common Components/Upnext";
import { categoryMovies } from "../services/APIs";
import { NOWPLAYING_API_URL} from "../constants/Constant";


function Home() {
  const [movies, setMovies] = React.useState([]);

  let API_URL = NOWPLAYING_API_URL;

  React.useEffect(() => {
    const getData = async (API_URL) => {
      let response = await categoryMovies(API_URL);
      setMovies(response.results);
      console.log(response.results);
    };
    getData(API_URL);
  }, []);

  const StylledBox = styled(Box)`
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
  `;

  return (
    <>
      <Header />

      <StylledBox>
        <Banner movies={movies} />
        <Upnext movies={movies} />
      </StylledBox>

      <Typography
        component="span"
        style={{
          color: "#DBA506",
          fontSize: "2rem",
          fontFamily: "Roboto",
          fontWeight: "600",
          marginLeft: "74px",
        }}
      >
        Explore Movies
      </Typography>

      <Slide movies={movies} />
      <Slide movies={movies} />
      <Slide movies={movies} />
      <Slide movies={movies} />
      <Slide movies={movies} />
    </>
  );
}

export default Home;
