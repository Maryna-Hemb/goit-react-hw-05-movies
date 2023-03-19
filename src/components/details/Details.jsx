import photo from '../../images/vecteezy_icon-image-not-found-vector.jpg';
import { DetailsContainer } from './Details.styled';

const Details = ({ movieDetailsID }) => {
  const { title, release_date, vote_average, overview, genres, poster_path } =
    movieDetailsID;

  const vote = Math.round(vote_average * 10);
  const date = `${release_date}`.slice(0, 4);
  const imgURL = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : photo;

  return (
    <DetailsContainer>
      <img src={imgURL} alt={title} width={300} />
      <div>
        <h1>
          {title} ({date})
        </h1>
        <p>
          <b>User score:</b> {vote}%
        </p>
        <h2>Overwiev</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(({ name }) => name).join(' ')}</p>
      </div>
    </DetailsContainer>
  );
};
export default Details;
