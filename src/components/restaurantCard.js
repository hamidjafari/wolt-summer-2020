import React from "react"
import PropTypes from "prop-types"
import styled, { css, keyframes } from "styled-components"
import Img from "gatsby-image"
import { FaShippingFast } from "react-icons/fa"

const ResaurantCard = ({ restaurant, loading }) => {
    return (
        <Container loading={loading}>
            {loading ? (
                <LoadingCard />
            ) : (
                    <>
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
                    </>
                )}
        </Container>
    )
}

ResaurantCard.propTypes = {
    restautant: PropTypes.shape({
        Img: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        delivery_price: PropTypes.number.isRequired,
        tags: PropTypes.array.isRequired,
    }),
    loading: PropTypes.bool,
}

export default ResaurantCard

const fadeInOut = keyframes`
0% {
    opacity:100%;
}
35% {
    opacity:20%;
}
100% {
    opacity:100%;
}
`

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
  ${p => p.loading ? css`
    animation: ${fadeInOut} 1.5s ease-out infinite;
    pointer-events:none;
  `: ""}
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

const LoadingCard = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#eee, #eee), linear-gradient(#eee, #eee),
    linear-gradient(#eee, #eee), linear-gradient(#eee, #eee);
  background-size: 93% 45%, 70% 12px, 40% 12px, 50% 10px;
  background-position: 50% 7px, 8px 59%, 8px 69%, 8px 97%;
  background-repeat: no-repeat;
`
