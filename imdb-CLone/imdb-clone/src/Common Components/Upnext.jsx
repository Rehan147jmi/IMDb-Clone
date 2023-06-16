import { Box, Typography, styled } from "@mui/material";

const Upnext = ({ movies }) => {
  const StylledBox = styled(Box)`
    width: 25%;
    background-color: #121212;
    padding-left: 20px;
    box-sizing: border-box;
    padding-left: 32px;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  `;

  const Component = styled(Box)`
    display: flex;
  `;

  const StylledPoster = styled("img")`
    width: 88px;
    margin-top: 14px;
  `;

  const mapMovies = movies.splice(0, 3).map((movie) => {
    return (
      <Component>
        <StylledPoster
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="Poster"
        />
        <Typography
          style={{
            fontSize: "1rem",
            fontFamily: "Roboto",
            fontWeight: "400",
            color: "#ffffff",
            margin: "15px 0px 0px 15px",
          }}
        >
          {movie.original_title}
        </Typography>
      </Component>
    );
  });

  return (
    <StylledBox>
      <Typography
        component="span"
        style={{
          color: "#DBA506",
          fontSize: "1.25rem",
          fontFamily: "Roboto",
          fontWeight: "600",
        }}
      >
        Up Next
      </Typography>

      {mapMovies}
    </StylledBox>
  );
};

export default Upnext;
