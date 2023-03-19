import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { featchMovieCredits } from '../../service/Api';
import { CastList, CastItem } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCast() {
      try {
        const getMovieCast = await featchMovieCredits(movieId);
        setMovieCast(getMovieCast.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieCast();
  }, [movieId]);

  if (!movieCast) {
    return;
  }

  return movieCast.length > 0 ? (
    <CastList>
      {movieCast.map(({ id, name, character, profile_path }) => (
        <CastItem key={id}>
          {
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `http://www.suryalaya.org/images/no_image.jpg`
              }
              alt={name}
              width="100"
              height="150"
            />
          }
          <div>
            <p>
              <b>{name}</b>
            </p>
            <p>
              Character: <b>{character}</b>
            </p>
          </div>
        </CastItem>
      ))}
    </CastList>
  ) : (
    <p
      style={{
        fontSize: 22,
        fontWeight: 700,
        color: '000000',
      }}
    >
      No information about cast yet...
    </p>
  );
};
export default Cast;
