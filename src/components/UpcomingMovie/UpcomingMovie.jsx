import { useEffect, useState } from 'react';
import {
  StyledUpcomingContentBtn,
  StyledUpcomingContentText,
  StyledUpcomingContentTitle,
  StyledUpcomingContentWrap,
  StyledUpcomingFilm,
  StyledUpcomingImage,
  StyledUpcomingListItem,
  StyledUpcomingListLeft,
  StyledUpcomingListText,
  StyledUpcomingName,
  StyledUpcomingThumb,
  StyledUpcomingTitle,
} from './UpcomingMovie.styled';
import { getUpcomingMovies } from 'services/getMovies';
import { StyledHeroContainer } from 'components/HomePageHero/HomePageHero.styled';
import { Loader } from 'components/Loader/Loader';

export const UpcomingMovie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [upcomingMovie, setMovie] = useState(null);
  useEffect(() => {
    const updateComponent = async () => {
      try {
        setIsLoading(true);
        const data = await getUpcomingMovies();
        setMovie(data.results[0]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    updateComponent();
  }, []);

  const imagePath = 'https://image.tmdb.org/t/p/original/';

  return (
    <section>
      <StyledHeroContainer>
        {isLoading && <Loader />}
        {upcomingMovie && (
          <>
            <StyledUpcomingTitle>UPCOMING THIS MONTH</StyledUpcomingTitle>
            <StyledUpcomingFilm>
              <StyledUpcomingImage>
                <source
                  srcSet={imagePath + upcomingMovie.backdrop_path}
                  media="(min-width: 768px)"
                  loading="lazy"
                />
                <source
                  srcSet={imagePath + upcomingMovie.poster_path}
                  media="(min-width: 320px)"
                  loading="lazy"
                />
                <img
                  src={imagePath + upcomingMovie.poster_path}
                  alt="Movie Poster"
                  loading="lazy"
                />
              </StyledUpcomingImage>

              <StyledUpcomingContentWrap>
                <StyledUpcomingName>
                  {upcomingMovie.original_title}
                </StyledUpcomingName>

                <StyledUpcomingThumb>
                  <StyledUpcomingListLeft>
                    <StyledUpcomingListItem>
                      <StyledUpcomingListText>
                        Release date
                      </StyledUpcomingListText>
                      <p style={{ marginLeft: '58px' }}>
                        {upcomingMovie.release_date}
                      </p>
                    </StyledUpcomingListItem>
                    <StyledUpcomingListItem>
                      <StyledUpcomingListText>
                        Vote / Votes
                      </StyledUpcomingListText>
                      <p style={{ marginLeft: '68px' }}>
                        <span>{upcomingMovie.vote_average}</span> /{' '}
                        <span>{upcomingMovie.vote_count}</span>
                      </p>
                    </StyledUpcomingListItem>
                  </StyledUpcomingListLeft>

                  <ul>
                    <StyledUpcomingListItem>
                      <StyledUpcomingListText>
                        Popularity
                      </StyledUpcomingListText>
                      <p style={{ marginLeft: '78px' }}>
                        {upcomingMovie.popularity}
                      </p>
                    </StyledUpcomingListItem>
                    <StyledUpcomingListItem>
                      <StyledUpcomingListText>Genre</StyledUpcomingListText>
                      <p style={{ marginLeft: '108px' }}>
                        Action, Science Fiction, Horror
                      </p>
                    </StyledUpcomingListItem>
                  </ul>
                </StyledUpcomingThumb>

                <StyledUpcomingContentTitle>About</StyledUpcomingContentTitle>
                <StyledUpcomingContentText>
                  {upcomingMovie.overview}
                </StyledUpcomingContentText>

                <StyledUpcomingContentBtn type="button">
                  Add to my library
                </StyledUpcomingContentBtn>
              </StyledUpcomingContentWrap>
            </StyledUpcomingFilm>
          </>
        )}
      </StyledHeroContainer>
    </section>
  );
};