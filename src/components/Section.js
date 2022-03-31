import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  id,
  number,
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {

  var list = ["#ModelS", "#ModelX", "#ModelY", "#Model3"];
  var nextLink = list[(number + 1) % 4];
  

  return (
    <div id={id}>
      <Wrap bgImage={backgroundImg}>
        <Fade bottom>
          <ItemText>
            <h1 id={id}>{title}</h1>
            <p>{description}</p>
          </ItemText>
        </Fade>
        <Buttons>
          <Fade bottom>
            <ButtonGroup>
              <LeftButton>{leftBtnText}</LeftButton>
              {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
            </ButtonGroup>
          </Fade>
          <a href={nextLink}>
            <DownArrow
              src="/assets/down-arrow.svg"
              onClick={() => console.log(nextLink)}
            />
          </a>
        </Buttons>
      </Wrap>
    </div>
  );
}

export default Section;

const Wrap = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url('${props.bgImage}')`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  z-index:10;
`;

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width: 768px){
        flex-direction:column;
    }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size:12px;
  cursor:pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    cursor: pointer;
`
const Buttons = styled.div``