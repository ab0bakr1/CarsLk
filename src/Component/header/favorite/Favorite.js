// Favorite.js
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // استخدام solid يعطي انطباعاً أقوى
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import "./Favorite.css";
import { useShoppingFav } from '../../../context/ShoppingFavContext';

function Favorite() {
  const { openFav, FavQuantity } = useShoppingFav();
  
  return (
    <div className='favorite-wrapper'>
      <Button 
        variant="link" 
        className='fav-btn-custom' 
        onClick={openFav}
      >
        <FontAwesomeIcon icon={faHeart} />
        {FavQuantity > 0 && (
          <Badge pill bg="danger" className="fav-badge">
            {FavQuantity}
          </Badge>
        )}
      </Button>
    </div>
  );
}

export default Favorite;
