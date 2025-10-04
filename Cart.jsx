// src/Cart.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx'; 
import Footer from './Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ cartItems, setCart }) => {
  // 📝 Item ရဲ့ စုစုပေါင်း ဈေးနှုန်း တွက်ချက်ခြင်း
  const total = cartItems.reduce(
    (acc, item) => acc + (parseFloat(item.price.replace(' Ks', '').replace(',', '')) * item.quantity), 
    0
  );

  // 📝 Quantity ပြောင်းလဲခြင်း (အနာဂတ်အတွက်)
  const handleQuantityChange = (id, change) => {
    setCart(
      cartItems.map(item =>
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) } // 1 အောက် မရောက်အောင် ထိန်းထား
          : item
      )
    );
  };

  // 📝 Item ဖယ်ရှားခြင်း
  const handleRemoveItem = (id) => {
    setCart(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <Header />
      
      <div className="container my-5" style={{ paddingTop: '50px' }}>
        <h1 className="text-center mb-5 display-4 fw-bold text-dark">Your Order Cart</h1>

        {cartItems.length === 0 ? (
          // Cart ဗလာဖြစ်နေရင်
          <div className="alert alert-info text-center p-4">
            <h4 className="alert-heading">Your cart is empty!</h4>
            <p>Looks like you haven't added any delicious items yet.</p>
            <Link to="/menu" className="btn btn-warning mt-3 fw-bold">
              <i className="bi bi-cup-hot-fill me-2"></i> Start Ordering
            </Link>
          </div>
        ) : (
          // Cart ထဲ Item ရှိရင်
          <div className="row">
            
            {/* Cart Items List */}
            <div className="col-lg-8">
              <ul className="list-group shadow-lg">
                {cartItems.map((item) => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center p-3">
                    
                    <div>
                      <h5 className="mb-1 fw-bold text-dark">{item.name}</h5>
                      <p className="mb-0 small text-muted">Price: {item.price}</p>
                    </div>

                    <div className="d-flex align-items-center">
                      {/* Quantity Controls */}
                      <button 
                        className="btn btn-outline-secondary btn-sm me-2" 
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="fw-bold me-2">{item.quantity}</span>
                      <button 
                        className="btn btn-outline-secondary btn-sm me-3" 
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                      
                      {/* Remove Button */}
                      <button 
                        className="btn btn-outline-danger btn-sm" 
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>

                  </li>
                ))}
              </ul>
            </div>
            
            {/* Cart Summary */}
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="card shadow-lg border-warning border-3">
                <div className="card-body">
                  <h4 className="card-title fw-bold mb-4 text-warning">Order Summary</h4>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Total Items:</span>
                    <span className="fw-bold">{cartItems.length} type(s)</span>
                    </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-4 fs-5">
                    <span className="fw-bold">Grand Total:</span>
                    <span className="fw-bolder text-danger">{total.toLocaleString()} Ks</span>
                  </div>
                  
                  <button className="btn btn-success btn-lg w-100 fw-bold shadow">
                    <i className="bi bi-bag-check-fill me-2"></i> Checkout Now
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}
        
      </div>

      <Footer />
    </div>
  );
};

export default Cart;