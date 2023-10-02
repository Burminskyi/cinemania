import {
  StyledDetailsText,
  StyledFilmCaption,
  StyledFilmDetailsContainer,
  StyledFilmDetailsImg,
  StyledFilmDetailsList,
  StyledFilmDetailsListItem,
  StyledFilmDetailsSection,
  StyledFilmDetailsWrap,
  StyledModalBtn,
} from './ModalPage.styled';

export const ModalFilmDetails = ({
  data,
  posterImage,
  addToLibrary,
  removeFromLibrary,
  favoriteMovies,
}) => {
  const handleClick = e => {
    e.preventDefault();
    addToLibrary(data);
  };

  const handleDelete = e => {
    e.preventDefault();
    removeFromLibrary(data.id);
  };

  const isInLibrary =
    favoriteMovies &&
    favoriteMovies.some(favoriteMovie => favoriteMovie.id === data.id);

  return (
    <StyledFilmDetailsContainer>
      <StyledFilmDetailsWrap>
        <StyledFilmDetailsImg src={posterImage} alt={data.original_title} />
        <div>
          <StyledFilmDetailsList>
            <StyledFilmDetailsListItem>
              <StyledFilmDetailsSection>Vote / Votes</StyledFilmDetailsSection>
              <StyledDetailsText>
                {data.vote_average} / {data.vote_count}
              </StyledDetailsText>
            </StyledFilmDetailsListItem>
            <StyledFilmDetailsListItem>
              <StyledFilmDetailsSection>Popularity</StyledFilmDetailsSection>
              <StyledDetailsText>
                {Math.round(data.popularity)}
              </StyledDetailsText>
            </StyledFilmDetailsListItem>
            <StyledFilmDetailsListItem>
              <StyledFilmDetailsSection>Genre</StyledFilmDetailsSection>
              <StyledDetailsText>Comedy, Adventure, Fantasy</StyledDetailsText>
            </StyledFilmDetailsListItem>
          </StyledFilmDetailsList>
          <StyledFilmDetailsSection>ABOUT</StyledFilmDetailsSection>
          <StyledFilmCaption>{data.overview}</StyledFilmCaption>
          {isInLibrary ? (
            <StyledModalBtn type="button" onClick={handleDelete}>
              Remove from library
            </StyledModalBtn>
          ) : (
            <StyledModalBtn type="button" onClick={handleClick}>
              Add to my library
            </StyledModalBtn>
          )}
        </div>
      </StyledFilmDetailsWrap>
    </StyledFilmDetailsContainer>
  );
};