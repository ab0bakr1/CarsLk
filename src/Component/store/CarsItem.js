// CarsItem.jsx
import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid, faGasPump, faCogs } from '@fortawesome/free-solid-svg-icons';
import { useShoppingFav } from "../../context/ShoppingFavContext";
import "./Store.css";

const CarsItem = ({ id, CarImg, make, model, price, year }) => {
  const { increaseFavQuantity, FavItems, decreaseFavQuantity } = useShoppingFav();
  
  const isFav = FavItems.some((item) => item.id === id);

  return (
    <Card className='car-card border-0 shadow-sm h-100'>
      <div className="car-img-container">
        <Card.Img src={CarImg} className='car-card-img' />
        <Button 
          variant="light" 
          className={`fav-floating-btn ${isFav ? 'active' : ''}`}
          onClick={() => isFav ? decreaseFavQuantity(id) : increaseFavQuantity(id)}
        >
          <FontAwesomeIcon icon={isFav ? faHeartSolid : faHeart} />
        </Button>
      </div>

      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between mb-2">
          <Badge bg="primary-soft" className="car-year-badge">{year}</Badge>
          <span className="car-price-tag">{price}</span>
        </div>
        
        <Card.Title className="fw-bold mb-3">{make} {model}</Card.Title>
        
        {/* إضافة تفاصيل تقنية تعطي شكلاً احترافياً */}
        <div className="car-specs d-flex gap-3 mb-4 text-muted small">
          <span><FontAwesomeIcon icon={faGasPump} className="me-1"/> Hybrid</span>
          <span><FontAwesomeIcon icon={faCogs} className="me-1"/> Automatic</span>
        </div>

        <Button variant="primary" className='w-100 buy-btn mt-auto py-2 fw-bold'>
          Rent Now
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CarsItem;