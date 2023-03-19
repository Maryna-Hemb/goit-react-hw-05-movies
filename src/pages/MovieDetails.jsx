import { useState, useEffect, Suspense, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { featchMovieDetailsById } from '../service/Api';
import Details from '../components/details/Details';
import ReturnButton from '../components/returnButton/ReturnButton';
import Additional from '../components/additional/Additional';

const MovieDetails = () => {
  const [movieDetailsID, setMovieDetailsID] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const getMovieInf = await featchMovieDetailsById(movieId);
        setMovieDetailsID(getMovieInf);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieDetails();
  }, [movieId]);

  if (!movieDetailsID) {
    return;
  }

  return (
    <>
      <ReturnButton locationBack={backLinkLocationRef.current} />
      <Details movieDetailsID={movieDetailsID} />
      <Additional />

      <Suspense fallback={<div>Loading..</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
