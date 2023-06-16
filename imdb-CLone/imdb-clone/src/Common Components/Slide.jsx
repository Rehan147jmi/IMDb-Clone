import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, styled, Typography } from "@mui/material";

const Slide = ({ movies }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const StylledBanner = styled("img")`
    width: 100%;
  `;

  const StylledBox = styled(Box)`
    width: 80vw;
    padding: 20px 0px 0px 76px;
  `;

  const mapMovies = movies.map((movie) => {
    return (
      <Box>
        <StylledBanner
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="Banner"
        />
        <Typography
          style={{
            fontSize: "1rem",
            fontFamily: "Roboto",
            fontWeight: "400",
            color: "#ffffff",
          }}
        >
          {movie.original_title}
        </Typography>
      </Box>
    );
  });

  return (
    <StylledBox>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        keyBoardControl={true}
      >
        {mapMovies}
      </Carousel>
    </StylledBox>
  );
};

export default Slide;
