import styled from "styled-components";

const StyledYoutubeFrame = styled.iframe`
  height: 100%;
  width: 100%;
  border: none;
  margin: 0;
  position: absolute;
`;

function YoutubePresenter({ url }) {
  return (
    <StyledYoutubeFrame
      title="youtube"
      src={`${url}/?autoplay=1`} // add ?autoplay=1 behind to autoplay
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default YoutubePresenter;
