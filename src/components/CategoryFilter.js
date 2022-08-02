import React from "react";

function CategoryFilter({ categories, handleCategoryClick }) {
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(category => <button key={category} onClick={(() =>handleCategoryClick(category))}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
