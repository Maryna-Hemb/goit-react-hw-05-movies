import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, Title } from './MovieList.styled';

const MoviesList = ({ movies, titlePage }) => {
  const location = useLocation();

  return (
    <>
      {titlePage && <Title>{titlePage}</Title>}

      <List>
        {movies.map(({ id, title }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </Item>
        ))}
      </List>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }).isRequired
  ),
  titlePage: PropTypes.string,
};

export default MoviesList;
