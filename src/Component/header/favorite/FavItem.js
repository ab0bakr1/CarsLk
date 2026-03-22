// FavItem.js
import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import StoreItems from "../../../Data/AllCars.json"
import { useShoppingFav } from '../../../context/ShoppingFavContext';

const FavItem = ({id}) => {
    const {decreaseFavQuantity} = useShoppingFav();
    const item = StoreItems.find((i)=> i.id === id);
    if (item == null) return null;

    return (
        <Stack direction='horizontal' gap={3} className='fav-item-card mb-3 p-2 shadow-sm rounded'>
            <img 
                src={item.CarImg} 
                className='fav-img-styled' 
                alt={item.model} 
            />
            <div className="me-auto">
                <div className='item-title'>{`${item.make} ${item.model}`}</div>
                <div className='item-year text-muted small'>{item.year}</div>
                <div className='item-price text-primary fw-bold'>
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}
                </div>
            </div>
            <Button 
                variant="outline-danger" 
                size="sm" 
                className="rounded-circle border-0"
                onClick={() => decreaseFavQuantity(id)}
            >
                ✕
            </Button>
        </Stack>
    )
}
export default FavItem
