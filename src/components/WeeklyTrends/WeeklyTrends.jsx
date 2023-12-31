import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  StyledCatalogContainer,
  StyledCatalogList,
  StyledWeeklyTrendsHeader,
} from './WeeklyTrendsStyled';

import { Loader } from 'components/Loader/Loader';
import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { selectLoadingStatus, selectWeeklyTrendingMovies } from 'redux/selectors';

const WeeklyTrends = () => {
  const weeklyTrendingMovies = useSelector(selectWeeklyTrendingMovies);
  const isLoading = useSelector(selectLoadingStatus);

  const [slicedWeeklyTrendingMovies, setSlicedWeeklyTrendingMovies] = useState(
    []
  );

  useEffect(() => {
    if (!weeklyTrendingMovies) return;
    setSlicedWeeklyTrendingMovies(weeklyTrendingMovies.slice(0, 3));
  }, [weeklyTrendingMovies]);

  return (
    <section>
      <StyledCatalogContainer>
        <StyledWeeklyTrendsHeader>
          <h3>Weekly Trends</h3>
          <Link to="/catalog">See All</Link>
        </StyledWeeklyTrendsHeader>
        {isLoading ? (
          <Loader />
        ) : (
          <StyledCatalogList>
            {slicedWeeklyTrendingMovies.map(movie => (
              <MoviesGalleryItem key={movie.id} movie={movie} />
            ))}
          </StyledCatalogList>
        )}
      </StyledCatalogContainer>
    </section>
  );
};

export default WeeklyTrends;
