import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const AdditionBlock = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const needId = location.pathname.substring(1);
    let concatedArray = [];
    const [currentName, setCurrentName] = useState('');


    const mainCategories = useSelector((state) => state.piclist?.piclist?.Categories?.Category);
    const items = useSelector((state) => state.piclist?.piclist?.Items?.Item);

    if(mainCategories && items){
        concatedArray = [...mainCategories, ...items];
    }

    const i = concatedArray?.filter(item => item.id ? item.id === needId : item.UPC === needId)
    
    // console.log('concatedArray IN ADDITIONAL BLOCK', concatedArray)
    // console.log('i', i)

    return (
        <div className="addition-block">
            <div className="addition-block-container">
                <button className="button"><span>+</span>Category</button>
                <button className="button"><span>+</span>Product</button>
            </div>
            <p className="addition-block__title">{i[0]?.Languages?.Language[0]?.Description}</p>
            <p className="addition-block__title">{i[0]?.id ? i[0]?.id : i[0]?.UPC}</p>
        </div>
    );
};

export default AdditionBlock;