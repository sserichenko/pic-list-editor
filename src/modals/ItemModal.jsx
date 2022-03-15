import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ItemFormContainer from "../components/Form/ItemFormContainer"

const ItemModal = () => {

    const dispatch = useDispatch()

    return (
        <div className="overlay">
        <div className="overlay__modal">
        <img className="overlay__close-icon" src="/images/icon-close.svg" alt="close-icon" onClick={() => dispatch({type: "HIDE_EDIT_ITEMS_MODAL"})}/>
        <h2 className="overlay__title">Item editor</h2>
        <hr />
            <ItemFormContainer />
        </div>
        </div>
    );
};

export default ItemModal;