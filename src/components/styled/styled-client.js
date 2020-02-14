import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 0;
  padding: 30px;
  margin: 50px 100px 50px 100px;
  width: 650px;
  max-height: 410px;
  font-family: "Roboto Light", sans-serif;
  color: #0B0A07;
  border: none;
  background-color: #ffffff;
  box-shadow: 20px 14px 45px -6px rgba(0, 0, 0, 0.1);
`;

const StyledContainerAddInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  text-align: center;
  width: 250px;
`;

const StyledContainerMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-right: 90px;
  &::after {
      position: absolute;
      content: '';
      height:396px;
      width: 3px;
      right: -64px;
      top: -23px;
      background-image: url("../../assets/img/verticalline.png");
      background-color: #f1f1f1;
  };
`;

const positions = {
    first: `88px`,
    second: `50%`
};

const StyledInfo = styled.span`
  display: inline-block;
  position: relative;
  ${props => props.isSecond ? `margin: 0 auto` : null};
  margin-bottom: 13px;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #000000;
  background-color: transparent;
  border: none;
  word-break: break-word;
  width: fit-content;
  &::after {
      content: '';
      position: absolute;
      width: 175px;
      height: 3px;
      left: ${props =>
    props.isSecond ? props.positions.second : props.positions.first};
      bottom: -9px;
      margin-left: calc(-175px / 2);
      background-image: url("../../assets/img/line.png");
      background-color: #e8e8e8;
  };
`;

const StyledLabel = styled.label`
  margin-bottom: 3px;
  width: fit-content;
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  color: #2f2f2f;
  font-size: 18px;
  letter-spacing: 0.01em;
`;

const StyledLabelAdd = styled.span`
  width: fit-content;
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  color: #2f2f2f;
  font-size: 18px;
  word-break: break-word;
  letter-spacing: 0.01em;
  margin: 0 auto 5px;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #2f5395;
`;

export { StyledLabel, StyledDiv, StyledContainerAddInfo, StyledContainerMainInfo, StyledInfo, StyledLabelAdd, StyledUl, positions }