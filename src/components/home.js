import React from 'react'
import styled from "styled-components"
import Section from './Section'
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Home() {
  const cars = useSelector(selectCars);
    return (
      <Container>
        <Section
          id={cars[0]}
          title={cars[0]}
          description="Order online for Touchless Delivery"
          backgroundImg="/assets/model-s.jpg"
          leftBtnText="Costum Order"
          rightBtnText="inventory"
        />
        <Section
          id={cars[1]}
          title={cars[1]}
          description="Order online for Touchless Delivery"
          backgroundImg="/assets/model-x.jpg"
          leftBtnText="Costum Order"
          rightBtnText="inventory"
        />
        <Section
          id={cars[2]}
          title={cars[2]}
          description="Order online for Touchless Delivery"
          backgroundImg="/assets/model-y.jpg"
          leftBtnText="Costum Order"
          rightBtnText="inventory"
        />
        <Section
          id={cars[3]}
          title={cars[3]}
          description="Order online for Touchless Delivery"
          backgroundImg="/assets/model-3.jpg"
          leftBtnText="Costum Order"
          rightBtnText="inventory"
        />
        <Section
          title="Solar Panels in America"
          description="Order online for Touchless Delivery"
          backgroundImg="/assets/solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section
          title="Accessories"
          backgroundImg="/assets/accessories.jpg"
          leftBtnText="Order now"
        />
      </Container>
    );
}

export default Home

const Container = styled.div`
  height: 100vh;
`;
