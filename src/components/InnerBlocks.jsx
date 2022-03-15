import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AdditionBlock from './AdditionBlock';

const InnerBlocks = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const needId = location.pathname.substring(1);
  let concatedItemsArr = [];

  // All items from the STORE

  const mainCategories = useSelector((state) => state.piclist?.piclist?.Categories?.Category);
  const items = useSelector((state) => state.piclist?.piclist?.Items?.Item);

  // FILTERED Items

  // const filteredItems = items?.filter(item => item.Languages?.Language[0]?.Categories === needId);

  const filteredItemsARR = items?.filter((item) => {
    let isItemChild = false;
    let parentsIdArr = item.Languages?.Language[0]?.Categories.split(',');
    for (let i = 0; i <= parentsIdArr.length; i++) {
      if (parentsIdArr[i] === needId) {
        isItemChild = true;
      }
    }

    if (isItemChild) {
      return item;
    } else {
      return '';
    }
  });

  const filteredCategories = mainCategories?.filter((category) => {
    let isItemChild = false;
    let parentsIdArr = category.Languages.Language[0].InCategories.split(',');
    for (let i = 0; i <= parentsIdArr.length; i++) {
      if (parentsIdArr[i] === needId) {
        isItemChild = true;
      }
    }
    if (isItemChild) {
      return category;
    } else {
      return '';
    }
  });

  concatedItemsArr = [...filteredCategories, ...filteredItemsARR];

  console.log('concatedItemsArr >>> ', concatedItemsArr);

  React.useEffect(() => {
    props.fetchPiclist()
  }, [])

  return (
    <div className="inner-blocks">
      <div className="inner-block-wrapper">
        {concatedItemsArr?.length ? (
          concatedItemsArr.map((item) => (
            <div
              key={item.id ? item.id : item.UPC}
              className="content-block"
              onClick={() => navigate(`/${item.id ? item.id : item.UPC}`)}>
              <p className="category-title">{item.Languages.Language[0].Description}</p>
              <p className="category-type">Type: {item.id ? ` Category  ${item.id}` : `Item ${item.UPC}` }</p>
              <button
                className="category-edit-btn"
                onClick={(event) => {
                  event.stopPropagation();
                  dispatch({type: "SHOW_EDIT_ITEMS_MODAL"});
                  dispatch({type: "ACTIVATE_EDIT_FORM", payload: JSON.parse(JSON.stringify(item))});
                  // console.log('ITEM INFO', JSON.parse(JSON.stringify(item)));

                }}>
                Edit
              </button>
              <img className="category-rm-button" src="/images/remove.png" alt="removeBtn" />
            </div>
          ))
        ) : (
          <p
            style={{
              textAlign: 'center',
              margin: '0 auto',
              fontWeight: 'bold',
              padding: '12px',
              color: '#cc3333',
            }}
            id="blink1">
            Вложенные товары отсутствуют!
          </p>
        )}
      </div>
      <AdditionBlock />
    </div>
  );
};

export default InnerBlocks;
