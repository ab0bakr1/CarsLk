// FavItem.js
import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import StoreItems from "../../../Data/AllCars.json";
import { useShoppingFav } from '../../../context/ShoppingFavContext';

const FavItem = ({ id }) => {
  const { decreaseFavQuantity } = useShoppingFav();
  const item = StoreItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction='horizontal' gap={3} className='fav-item-card align-items-center mb-3 shadow-sm'>
      <div className="fav-img-wrapper">
        <img className='fav-img-fluid' src={item.CarImg} alt={item.model} />
      </div>
      <div className="me-auto content-info">
        <h6 className='mb-0 fw-bold'>{item.make} {item.model}</h6>
        <small className='text-muted'>{item.year}</small>
        <div className='fav-item-price'>
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}
        </div>
      </div>
      <Button 
        variant="outline-danger" 
        size="sm" 
        className="remove-fav-btn"
        onClick={() => decreaseFavQuantity(id)}
      >
        ✕
      </Button>
    </Stack>
  );
}

export default FavItem;
