import { useState, useEffect } from "react";
import Header from "../Common Components/Header";
import MoviesList from "../Common Components/MoviesList";
import { Box, styled, Typography, Divider } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { categoryMovies } from "../services/APIs";
import { useLocation } from "react-router-dom";
import {
  POPULAR_API_URL,
  TOPRATED_API_URL,
  UPCOMING_API_URL,
  moviesType,
} from "../constants/Constant";

const CategoryMovies = () => {
  const [movies, setMovies] = useState([]);

  const { search } = useLocation();

  let API_URL;

  useEffect(() => {
    const getData = async (API_URL) => {
      let response = await categoryMovies(API_URL);
      setMovies(response.results);
      console.log(response.results);
    };

    if (search.includes("popular")) {
      API_URL = POPULAR_API_URL;
    } else if (search.includes("toprated")) {
      API_URL = TOPRATED_API_URL;
    } else if (search.includes("upcoming")) {
      API_URL = UPCOMING_API_URL;
    }

    getData(API_URL);
  }, [search]);

  const StylledBanner = styled("img")`
    height: 450px;
    width: 100%;
  `;

  const Container = styled(Box)`
    width: 80%;
    margin: auto;
  `;

  const Component = styled(Box)`
    background: #f5f5f5;
    text-align: left;
    padding: 10px;
  `;

  const mapFilms = movies.map((movie) => {
    return (
      <Box>
        <StylledBanner
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="Banner"
        />
      </Box>
    );
  });

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Header />
      <Container>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={false}
          slidesToSlide={1}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {mapFilms}
        </Carousel>

        <Component>
          <Typography variant="h6">IMDB Charts </Typography>
          <Typography variant="h4">
            IMDB {moviesType[search.split("=")[1]]} Movies
          </Typography>
          <Typography style={{ fontSize: 12, margin: 5 }}>
            IMDB Top {movies.length} as rated by regular IMDb voters{" "}
          </Typography>
          <Divider />
          <MoviesList movies={movies} />
        </Component>
      </Container>
    </>
  );
};

export default CategoryMovies;
