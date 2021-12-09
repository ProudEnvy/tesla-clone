import React from 'react'
import styled from "styled-components"
import Section from './Section'

function home() {
    return (
      <Container>
        <Section
          id="ModelS"
          title="Model S"
          description="Order online for Touchless Delivery"
          backgroundImg="/assets/model-s.jpg"
          leftBtnText="Costum Order"
          rightBtnText="inventory"
        />
        <Section
          id="ModelX"
          title="Model x"
          description="Order online for Touchless Delivery"
          backgroundImg="/assets/model-x.jpg"
          leftBtnText="Costum Order"
          rightBtnText="inventory"
        />
        <Section
          title="Model Y"
          description="Order online for Touchless Delivery"
          backgroundImg="/assets/model-y.jpg"
          leftBtnText="Costum Order"
          rightBtnText="inventory"
        />
        <Section
          title="Model 3"
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

export default home

const Container = styled.div`
  height: 100vh;
`;
