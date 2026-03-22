// Favorite.js
import { faHeart } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import "./Favorite.css";
import { useShoppingFav } from '../../../context/ShoppingFavContext';

function Favorite() {
  const { openFav, FavQuantity } = useShoppingFav();

  return (
    <div className='favorite-container'>
      <Button variant="light" className='fav-icon-btn shadow-sm' onClick={openFav}>
        <FontAwesomeIcon icon={faHeart} />
        {FavQuantity > 0 && (
          <Badge pill bg="danger" className='fav-badge-count'>
            {FavQuantity}
          </Badge>
        )}
      </Button>
    </div>
  );
}

export default Favorite;
