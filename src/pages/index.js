import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import RestaurantCard from '../components/restaurantCard'

export default ({ data }) => (
    <Layout>
        <GridContainer>
            {data.allDataJson.nodes[0].restaurants.map(restaurant => (
                <RestaurantCard key={restaurant.name} restaurant={restaurant} />
            ))}
        </GridContainer>
    </Layout>
)

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