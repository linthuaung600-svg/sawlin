
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css'; 

import Header from './Header.jsx'; 
import Footer from './Footer.jsx';

import EspressoShotImg from './coffe.jpg'; 
import LatteHotImg from './coffe1.jpg';     
import DarkEspressoImg from './coffe2.jpg';   
import CappuccinoImg from './coffe3.jpg';  

import IcedLatteImg from './coffe4.jpg';    
import IcedCoffeeCreamImg from './coffe5.jpg';   
import DarkIcedCoffeeImg from './coffe6.jpg';  
import IcedCoffeeBlackImg from './coffe7.jpg'; 

import ChocoCroissantImg from './coffe8.jpg'; 
import StrawberryCroissantImg from './coffe9.jpg'; 
import WaffleImg from './coffe10.jpg';        
import CreamCroissantImg from './coffe11.jpg';     


import Refresher1Img from './GreenTeaLatte.jpg'; 
import Refresher2Img from './IcedLemonade.jpg'; 
import Refresher3Img from './BerryHibiscusRefresher.jpg'; 
import Refresher4Img from './SparklingWater.jpg'; 

const fullMenu = [
  { 
    category: '1. Classic Hot Espresso', 
    items: [
      { id: 101, name: 'Espresso Shot', price: '2,000 Ks', description: 'Strong, concentrated coffee for a quick boost.', imageUrl: EspressoShotImg }, 
      { id: 102, name: 'Americano (Hot)', price: '2,500 Ks', description: 'Espresso with added hot water.', imageUrl: DarkEspressoImg },  
      { id: 103, name: 'Cappuccino', price: '3,500 Ks', description: 'Equal parts espresso, steamed milk, and milk foam.', imageUrl: CappuccinoImg },
      { id: 104, name: 'Latte (Hot)', price: '3,500 Ks', description: 'Espresso with steamed milk and a thin layer of foam.', imageUrl: LatteHotImg },
    ] 
  },
  { 
    category: '2. Signature Iced Coffees', 
    items: [
      { id: 201, name: 'Iced Latte (Layered)', price: '4,000 Ks', description: 'Chilled espresso with milk and a rich, creamy layer.', imageUrl: IcedLatteImg },
      { id: 202, name: 'Iced Coffee Cream', price: '4,500 Ks', description: 'Iced coffee topped with a sweet cream foam.', imageUrl: IcedCoffeeCreamImg },
      { id: 203, name: 'Dark Iced Coffee', price: '4,800 Ks', description: 'Strong iced coffee with a touch of milk.', imageUrl: DarkIcedCoffeeImg },
      { id: 204, name: 'Iced Coffee Black', price: '4,000 Ks', description: 'Strong espresso shaken with ice and a touch of sweetness.', imageUrl: IcedCoffeeBlackImg },
    ] 
  },
  { 
    category: '3. Pastries & Desserts', 
    items: [
      { id: 301, name: 'Chocolate Croissant', price: '2,500 Ks', description: 'Buttery French pastry with a chocolate filling.', imageUrl: ChocoCroissantImg },
      { id: 302, name: 'Cream Croissant', price: '4,000 Ks', description: 'Flaky croissant with sweet cream and almond slices.', imageUrl: CreamCroissantImg },
      { id: 303, name: 'Classic Waffle', price: '2,800 Ks', description: 'Warm waffle topped with butter and syrup.', imageUrl: WaffleImg },
      { id: 304, name: 'Strawberry Croissant', price: '3,000 Ks', description: 'Croissant filled with cream and fresh strawberries.', imageUrl: StrawberryCroissantImg },
      ] 
  },
  { 
    category: '4. Refreshers & Tea Products', 
    items: [
      { id: 401, name: 'Green Tea Latte', price: '3,800 Ks', description: 'Smooth matcha combined with steamed milk.', imageUrl: Refresher1Img }, 
      { id: 402, name: 'Iced Lemonade', price: '3,000 Ks', description: 'Freshly squeezed lemons with a hint of sugar.', imageUrl: Refresher2Img },  
      { id: 403, name: 'Berry Hibiscus Refresher', price: '4,500 Ks', description: 'A vibrant blend of berry and hibiscus.', imageUrl: Refresher3Img },
      { id: 404, name: 'Sparkling Water', price: '1,500 Ks', description: 'Crisp and refreshing carbonated water.', imageUrl: Refresher4Img },
    ] 
  },
];


const MenuPage = ({ addToCart }) => { 
  const [menuItems] = useState(fullMenu);
  const [orderMessage, setOrderMessage] = useState('');
  const navigate = useNavigate();

  // Item ကို Cart ထဲ ထည့်သွင်းပြီး Message ပြသခြင်း
  const handleOrder = (item) => { 
    if (addToCart) {
        addToCart(item); 
    }
    setOrderMessage(`${item.name} has been added to your cart successfully!`);
    setTimeout(() => { setOrderMessage(''); }, 7000);
  };
  
  // Cart Page သို့ သွားခြင်း (View Cart)
  const goToCart = () => {
      navigate('/cart'); 
  };

  return (
    <div> 
      <Header />
      
      <div className="container my-5" style={{ paddingTop: '50px' }}>
        <h1 className="text-center mb-5 display-3 fw-bolder text-dark text-uppercase">The Coffee House Menu</h1>
        
        {/* View Cart Notification */}
        {orderMessage && (
            <div className="alert alert-success alert-dismissible fade show fixed-top mx-auto mt-3 p-3" 
                 role="alert" 
                 style={{ maxWidth: '600px', zIndex: 1050, borderLeft: '5px solid #ffc107' }}>
                
                <p className="fw-bold mb-2">{orderMessage}</p>
                <hr className="my-2"/>
                
                <p className="mb-0 small d-flex justify-content-between align-items-center">
                    <span className="text-dark">Or continue shopping for more delicious items!</span>
                    <button 
                        onClick={goToCart} // ⬅️ View Cart Function
                        className="btn btn-sm btn-warning fw-bold text-dark" 
                    >
                        <i className="bi bi-cart-fill me-1"></i> View Cart 
                    </button>
                </p>
                
                <button type="button" className="btn-close" onClick={() => setOrderMessage('')}></button>
            </div>
        )}
        
        {/* Menu Categories loop */}
        {menuItems.map((categoryData, index) => (
          <section key={index} className="mb-5 bg-light p-4 rounded shadow-lg">
            <h2 className="text-start mb-4 pb-2 border-bottom border-danger fw-bolder text-primary display-6">
              {categoryData.category}
            </h2>
            
            <div className="row g-4">
              {/* Menu Items loop */}
              {categoryData.items.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card h-100 border-0 shadow-sm custom-card">
                    <img 
                      src={item.imageUrl} 
                      className="card-img-top" 
                      alt={item.name} 
                      style={{ height: '200px', objectFit: 'cover' }} 
                    />
                    
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-bold text-dark text-truncate">{item.name}</h5>
                      <p className="card-text text-muted small flex-grow-1 mb-3">{item.description}</p>
                      
                      <div className="d-flex justify-content-between align-items-center mt-auto pt-2 border-top">
                        <span className="fs-5 fw-bolder text-danger">{item.price}</span>
                        <button 
                          className="btn btn-dark btn-sm fw-bold"
                          onClick={() => handleOrder(item)} 
                        >
                          <i className="bi bi-bag-plus me-1"></i> Add to Order
                        </button>
                      </div>
                    </div>
                  </div> 
                </div> 
              ))}
            </div>
          </section> 
        ))}
      </div> 

      <Footer />
    </div> 
  );
}; 

export default MenuPage;