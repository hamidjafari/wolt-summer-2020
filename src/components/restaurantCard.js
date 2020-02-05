import React from 'react';
import PropTypes from "prop-types"
import styled from 'styled-components';
import Img from "gatsby-image"
import { FaShippingFast } from "react-icons/fa"

const ResaurantCard = ({ restaurant }) => {
    return <Container>
        <Img
            fluid={restaurant.Img.childImageSharp.fluid}
            style={{
                height: "60%",
                borderRadius: "0.5rem",
                overflow: "hidden",
            }}
            imgStyle={{ height: "100%" }}
        />
        <h6 className="name">{restaurant.name}</h6>
        <p className="delivery_price">
            <span>{restaurant.delivery_price} </span>
            <FaShippingFast />
        </p>
        <div className="tags-container">
            {restaurant.tags.map(tag => (
                <span>{tag}</span>
            ))}
        </div>
    </Container>
}

ResaurantCard.propTypes = {
    restautant: PropTypes.shape({
        Img: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        delivery_price: PropTypes.number.isRequired,
        tags: PropTypes.array.isRequired,
    }).isRequired
}

export default ResaurantCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  background: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  transition: 0.3s all;
  -webkit-box-shadow: 0px 2px 11px -2px rgba(0, 0, 0, 0.07);
  -moz-box-shadow: 0px 2px 11px -2px rgba(0, 0, 0, 0.07);
  box-shadow: 0px 2px 11px -2px rgba(0, 0, 0, 0.07);
  &:hover {
    -webkit-box-shadow: 0px 2px 35px -16px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 2px 35px -16px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 2px 35px -16px rgba(0, 0, 0, 0.75);
    transform: translateY(-4px);
    cursor: pointer;
  }
  h6 {
    margin-top: 0.4rem;
  }
  .delivery_price {
    color: gray;
    display: flex;
    align-items: center;
    span {
      margin-right: 0.3rem;
    }
  }
  .tags-container {
    margin-top: auto;
    span {
      padding: 0.1rem 0.3rem;
      background-color: whitesmoke;
      color: gray;
      margin: 0.1rem;
      border-radius: 0.2rem;
      font-size: 0.7em;
    }
  }
`