import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./Favorite.css"
import { useShoppingFav } from '../../../context/ShoppingFavContext'

function Favorite() {
  const {openFav,FavQuantity} = useShoppingFav();
  return (
    <div className='Favorite'>
        <button className='Fav-btn' onClick={openFav}><FontAwesomeIcon icon={faHeart} style={{color: "#0074D9",}} /></button>
        <div className='fav-number rounded-circle'>
          {FavQuantity}
        </div>
    </div>
  )
}

export default Favorite