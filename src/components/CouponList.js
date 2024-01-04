import React from 'react';

const CouponList = ({ coupons }) => {
  return (
    <div>
      <h2>Coupon List</h2>
      <ul>
        {coupons.map((coupon) => (
          <li key={coupon.id}>
            <strong>{coupon.title}</strong> - {coupon.description}
            <br />
            Company: {coupon.companyName} | Discount: {coupon.discount}
            <br />
            <a href={coupon.link} target="_blank" rel="noopener noreferrer">
              View Details
            </a>
            <br />
            <img src={coupon.image} alt={coupon.title} style={{ maxWidth: '100px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CouponList;
