import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    let navigate = useNavigate();
    const goDetail=()=>{
        navigate(`/productDetail/${item?.id}`)
    };
  return (
    <div className='card' onClick={()=>goDetail()}>
      <img src={item?.img}/>
      <div className='choice'>{item?.choice === true ? "Conscious Choice" : ""}</div>
      <div>{item?.title}</div>
      <div>W{item?.price}</div>
      <div>{item?.new === true ? "신제품":""}</div>
    </div>
  )
}

export default ProductCard;
