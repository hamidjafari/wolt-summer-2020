import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import RestaurantCard from '../components/restaurantCard'
import useSortedRestaurants, { sortNames } from "../hooks/useSortedRestaurants"

export default ({ data }) => {
    const [sortBy, setSortBy] = useState(null);
    const sortedRestaurants = useSortedRestaurants(data.allDataJson.nodes[0].restaurants, sortBy);
    return <Layout>
        <span>sort </span>
        {sortNames.map(name => (
            <Button active={name === sortBy} onClick={() => setSortBy(name)}>
                {name}
            </Button>
        ))}
        <GridContainer>
            {sortedRestaurants.map(restaurant => (
                <RestaurantCard key={restaurant.name} restaurant={restaurant} />
            ))}
        </GridContainer>
    </Layout>
}

export const query = graphql`
  query {
    allDataJson {
      nodes {
        restaurants {
          Img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          blurhash
          city
          currency
          description
          delivery_price
          location
          name
          tags
        }
      }
    }
  }
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-area: "head head main main";
  grid-gap: 0.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Button = styled.button`
  font-size: 0.8em;
  padding: 0.2rem 0.4rem;
  border-radius: 0.4rem;
  margin: 0.5rem 0.2rem;
  border: none;
  color: ${p => (p.active ? "white" : "gray")};
  background-color: ${p => (p.active ? "#c75a5a" : "lightgray")};
  :hover {
    color: white;
    cursor: pointer;
    background-color: #c75a5a;
  }
`