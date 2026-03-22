// FavCart.js
import React from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from 'react-bootstrap';
import FavItem from './FavItem';
import { useShoppingFav } from '../../../context/ShoppingFavContext';

const FavCart = ({ isOpen }) => {
  const { FavItems, closeFav } = useShoppingFav();
  
  return (
    <Offcanvas show={isOpen} onHide={closeFav} placement='end' className="modern-offcanvas">
      <OffcanvasHeader closeButton className="border-bottom">
        <OffcanvasTitle className="fw-bold">السيارات المفضلة</OffcanvasTitle>
      </OffcanvasHeader>
      <OffcanvasBody className="pt-4">
        {FavItems.length > 0 ? (
          FavItems.map((item) => <FavItem key={item.id} {...item} />)
        ) : (
          <div className="text-center text-muted mt-5">قائمة المفضلة فارغة</div>
        )}
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default FavCart;
