import styled from "styled-components";
import React from "react";

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;
const ChooseCityLabel = styled.span`
  color: black;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;
const WelcomeWeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;
const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WelcomeWeatherLogo
        src={
          "data:image/png;base64,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"
        }
      />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}>Search</button>
      </SearchBox>
    </>
  );
};
export default CityComponent;
