// FavCart.js
import React from 'react'
import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from 'react-bootstrap'
import FavItem from './FavItem';
import { useShoppingFav } from '../../../context/ShoppingFavContext';

const FavCart = ({isOpen}) => {
  const {FavItems, closeFav} = useShoppingFav();
  return (
    <Offcanvas show={isOpen} onHide={closeFav} placement='end' className="fav-offcanvas">
        <OffcanvasHeader closeButton className="border-bottom">
            <OffcanvasTitle className="fw-bold">سياراتك المفضلة</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
            {FavItems.length > 0 ? (
                FavItems.map((item)=>(
                    <FavItem key={item.id} {...item} />
                ))
            ) : (
                <div className="text-center mt-5 text-muted">قائمة المفضلة فارغة حالياً</div>
            )}
        </OffcanvasBody>
    </Offcanvas>
  );
};
