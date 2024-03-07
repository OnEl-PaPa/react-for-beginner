import { useState, useEffect } from "react";

function Preview({ id }) {
  const [previewMovie, setPreviewMovie] = useState({});
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setPreviewMovie(json.data.movie);
  };

  useEffect(() => {
    getMovies();
  }, [id]);

  return (
    <div id={id} style={{ height: "441px", width: "100%" }}>
      <div style={{ float: "left", width: "250px" }}>
        <img src={previewMovie.medium_cover_image} />
      </div>
      <div
        style={{
          float: "left",
          padding: "0px 30px 0px 20px",
          width: "calc(100% - 300px)",
        }}
      >
        <h1>{previewMovie.title}</h1>
        <h5>
          {previewMovie.year} {previewMovie.runtime}분 평점:
          {previewMovie.rating}
        </h5>
        <h3 style={{ height: "200px", overflow: "auto" }}>
          {previewMovie.description_intro}
        </h3>
      </div>
    </div>
  );
}

export default Preview;
