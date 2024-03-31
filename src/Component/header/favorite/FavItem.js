import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import StoreItems from "../../../Data/AllCars.json"
import { useShoppingFav } from '../../../context/ShoppingFavContext';

const FavItem = ({id}) =>{
    const {decreaseFavQuantity} = useShoppingFav();
    const item = StoreItems.find((i)=> i.id === id);
    if (item == null) return null;
  return (
    <Stack direction='horizontal' className='d-flex justify-content-between mb-4 align-items-center'>
        <img className='Fav-img' src={item.CarImg} />
        <div>
            <div className='fw-bold'>{`${item.make} ${item.model}`}</div>
            <div className='fw-bold'>{item.year}</div>
            <div className='fav-price'>{(item.price)}</div>
        </div>
        <Button onClick={() => decreaseFavQuantity(id)}>X</Button>
    </Stack>
  )
}

export default FavItem