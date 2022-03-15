import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const MainCategories = () => {
  const mainCategories = useSelector((state) => state.piclist?.piclist?.Categories?.Category);
  const items = useSelector((state) => state.piclist?.piclist?.Items?.Item);
  const rootCategory = mainCategories?.filter(
    (category) => category.id === category.Languages.Language[0].InCategories,
  );

  return (
    <div className="main-categories">
      <button className="btn-add-category">+</button>
      <div className="categories-block">
        {rootCategory?.map((category) => (
          <Link key={category.id} to={`${category.id}`} className="category-link">
          <div key={category.id} className="category">
            <p className="category-title">{category.Languages.Language[0].Description}</p>
            <button className="category-edit-btn">Edit</button>
            <img className="category-rm-button" src="/images/remove.png" alt="" />
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainCategories;
