import Movie from "../components/Movie";
import Preview from "../components/Preview";
import { useEffect, useState } from "react";
function Home() {
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const [previewMovieId, setPreviewMovieId] = useState("");

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.9&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoding(false);
  };

  const onMovieMouseOver = (event) => setPreviewMovieId(event.target.id);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loding ? (
        <h1>Loding..</h1>
      ) : (
        <>
          {previewMovieId ? <Preview id={previewMovieId} /> : null}
          <div style={{ overflowY: "scroll" }}>
            <div
              style={{
                marginTop: "50px",
                display: "flex",
                flexWrap: "nowrap",
                overflowX: "scroll",
              }}
            >
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  cover_imeage={movie.medium_cover_image}
                  mouseOver={onMovieMouseOver}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
