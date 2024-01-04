import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CouponList from './components/CouponList';
import SearchFilter from './components/SearchFilter';

const App = () => {
  const [coupons, setCoupons] = useState([]);
  const [filteredCoupons, setFilteredCoupons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  useEffect(() => {
    // Fetch coupon data from your backend API
    axios.get('http://localhost:3001/coupons').then((response) => {
  setCoupons(response.data);
  setFilteredCoupons(response.data);
});

  }, []);

  useEffect(() => {
    // Filter coupons based on search term and category
    let filtered = coupons.filter((coupon) => {
      return (
        coupon.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterCategory === '' || coupon.category === filterCategory)
      );
    });
    setFilteredCoupons(filtered);
  }, [searchTerm, filterCategory, coupons]);

  return (
    <div>
      <h1>Coupon Website</h1>
      <SearchFilter onSearch={setSearchTerm} onFilter={setFilterCategory} />
      <CouponList coupons={filteredCoupons} />
    </div>
  );
};

export default App;
