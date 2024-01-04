import React from 'react';

const SearchFilter = ({ onSearch, onFilter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">All Categories</option>
        {/* Add your coupon categories dynamically */}
        <option value="food">Food</option>
        <option value="electronics">Electronics</option>
        {/* Add more categories as needed */}
      </select>
    </div>
  );
};

export default SearchFilter;
