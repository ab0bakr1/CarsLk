import React from 'react'
import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from 'react-bootstrap'
import FavItem from './FavItem';
import { useShoppingFav } from '../../../context/ShoppingFavContext';

const FavCart = ({isOpen}) => {
  const {FavItems, closeFav} = useShoppingFav();
  return (
    <Offcanvas show={isOpen} onHide={closeFav} placement='end'>
        <OffcanvasHeader closeButton>
            <OffcanvasTitle>Favorite Car</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
            {FavItems.map((item)=>(
                <FavItem key={item.id} {...item} />
            ))}
        </OffcanvasBody>
    </Offcanvas>
  );
};

export default FavCart