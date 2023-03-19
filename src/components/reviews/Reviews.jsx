import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { featchMovieReviews } from '../../service/Api';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      try {
        const getMovieReviews = await featchMovieReviews(movieId);
        setMovieReviews(getMovieReviews.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieReviews();
  }, [movieId]);

  if (!movieReviews) {
    return;
  }

  return movieReviews.length > 0 ? (
    <ul>
      {movieReviews.map(({ author, content }) => (
        <li key={author}>
          <p>
            <b>{author}</b>
          </p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p
      style={{
        fontSize: 22,
        fontWeight: 700,
        color: '000000',
      }}
    >
      {' '}
      No reviews yet...
    </p>
  );
};

export default Reviews;
