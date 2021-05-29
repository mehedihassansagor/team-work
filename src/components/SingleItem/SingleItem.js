import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Shopping/Shopping-actions';

const SingleItem = ({currentItem, addToCart}) => {
    return (
        <div>
            <h1>single item {currentItem?.name}</h1>
            <button onClick={() => addToCart(currentItem.id)}>Add To Cart</button>
        </div>
    );
};

const mapStateToProps = state =>{
    return{
        currentItem: state.shop.currentItem
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps) (SingleItem);