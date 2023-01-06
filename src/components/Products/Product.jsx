import React from 'react'

const Product = (props) => {
  return (
    <>
      <div>{props.imageSrc}</div>
      <img src={props.imageSrc} alt="product" />
    </>
  )
}

export default Product
