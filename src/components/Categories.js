import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../redux/categories/categoriesSlice';

const RenderCategories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <div key={index}>{category}</div>
      ))}
    </div>
  );
};

export default RenderCategories;
