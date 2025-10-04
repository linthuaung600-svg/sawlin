
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.jsx'; 
import Footer from './Footer.jsx';

const bookData = [
  {
    id: 1,
    title: 'The Coffee Story: A Culture of Beans',
    author: 'Mark Pendergrast',
    description: 'A comprehensive history of coffee, from its discovery to its role in modern culture.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51w7gY19XvL._SX331_BO1,204,203,200_.jpg', 
    link: 'https://www.amazon.com/Uncommon-Ground-Coffee-Culture-Second/dp/0465018361',
    rating: 5,
  },
  {
    id: 2,
    title: 'Coffee Roasting: Best Practices',
    author: 'Scott Rao',
    description: 'Essential guide for advanced coffee roasting techniques and theory.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41Q+t928iRL._SX380_BO1,204,203,200_.jpg',
    link: 'https://www.scottrao.com/books/',
    rating: 4,
  },
  {
    id: 3,
    title: 'The World Atlas of Coffee',
    author: 'James Hoffmann',
    description: 'An essential and beautiful visual guide to the world\'s coffee-growing regions.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/512t4uT1G4L._SX380_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/World-Atlas-Coffee-Farm-Cup/dp/1784724330',
    rating: 5,
  },
  {
    id: 4,
    title: 'How to Make Coffee: The Science Behind the Bean',
    author: 'Lani Kingston',
    description: 'Explore the chemistry and physics of brewing the perfect cup.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51c4r7YQvOL._SX342_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/How-Make-Coffee-Science-Behind/dp/0711244037',
    rating: 4,
  },
  {
    id: 5,
    title: 'God in a Cup: The Obsessive Quest for the Perfect Coffee',
    author: 'Michaele Weissman',
    description: 'A journalistic dive into the world of specialty coffee and the people driving it.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51BqG6dM32L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    link: 'https://www.amazon.com/God-Cup-Obsessive-Quest-Perfect/dp/0471720272',
    rating: 4,
  },
  {
    id: 6,
    title: 'The Professional Barista\'s Handbook',
    author: 'Scott Rao',
    description: 'A detailed manual covering advanced espresso and milk preparation techniques.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51sD9Q3tVGL._SX331_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Professional-Baristas-Handbook-Introduction-Espresso/dp/1492210777',
    rating: 5,
  },
  {
    id: 7,
    title: 'Where the Wild Coffee Grows',
    author: 'Jeff Koehler',
    description: 'A fascinating journey to find the origins of coffee and the future of the industry.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51Pq3Hh5zQL._SX329_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Where-Wild-Coffee-Grows-Ethiopia/dp/1631490234',
    rating: 4,
  },
  {
    id: 8,
    title: 'The Blue Bottle Craft of Coffee',
    author: 'James Freeman',
    description: 'A beautiful guide to the art of brewing and enjoying coffee from Blue Bottle.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51-m-jT6UaL._SX396_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Blue-Bottle-Craft-Coffee-Preparation/dp/1594205421',
    rating: 5,
  },
  {
    id: 9,
    title: 'Espresso Italiano: The Espresso Handbook',
    author: 'Federico Sordillo',
    description: 'Master the Italian way of making and enjoying espresso with traditional techniques.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/511T490uNCL._SX331_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Espresso-Italiano-Handbook-Federico-Sordillo/dp/889025211X',
    rating: 4,
  },
  {
    id: 10,
    title: 'Coffee Life in Japan',
    author: 'Merry White',
    description: 'A look at coffee culture in Japan, focusing on cafes and social life.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41D9K3C2+TL._SY385_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Coffee-Life-Japan-Merry-White/dp/0520286282',
    rating: 4,
  },
  {
    id: 11,
    title: 'Everything But the Coffee',
    author: 'Bryant Simon',
    description: 'An insightful analysis of Starbucks\' impact on American culture and commerce.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/519N-V0x1L._SX322_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Everything-But-Coffee-Learning-America/dp/0520268582',
    rating: 4,
  },
  {
    id: 12,
    title: 'Dear Coffee Writer: Guide to Cafe Freelancing',
    author: 'Nick Cho',
    description: 'Tips and tricks for aspiring writers and freelancers working in coffee shops.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51S47H1mQWL._SX331_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Dear-Coffee-Writer-Guide-Freelancing/dp/1544669866',
    rating: 3,
  },
  {
    id: 13,
    title: 'Coffee Art: Simple Designs for Delicious Drinks',
    author: 'D\'mitri Devore',
    description: 'Step-by-step instructions for creating beautiful latte art designs.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/514qR-t4XbL._SX331_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Coffee-Art-Simple-Designs-Delicious/dp/0764165506',
    rating: 5,
  },
  {
    id: 14,
    title: 'The Great Coffee Book',
    author: 'Annette Molnar',
    description: 'A large format book celebrating the history and flavor profiles of coffee.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61NfA7s93zL._SX404_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Great-Coffee-Book-Annette-Molnar/dp/3848006152',
    rating: 4,
  },
  {
    id: 15,
    title: 'Coffee Obsession',
    author: 'DK Publishing',
    description: 'A detailed reference guide to types of coffee beans and preparation methods.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51+uWk430fL._SX380_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Coffee-Obsession-DK/dp/1465419992',
    rating: 4,
  },
  {
    id: 16,
    title: 'Espresso: The Science of Quality',
    author: 'Andrea Illy',
    description: 'A deep dive into the scientific methods behind producing high-quality espresso.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41D019t4NKL._SX396_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Espresso-Science-Quality-Andrea-Illy/dp/0123737083',
    rating: 5,
  },
  {
    id: 17,
    title: 'Home Coffee Roasting',
    author: 'Kenneth Davids',
    description: 'An approachable guide to roasting coffee beans at home for enthusiasts.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41Kq5E8vGBL._SX331_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Home-Coffee-Roasting-Romance-Revival/dp/0312351722',
    rating: 4,
  },
  {
    id: 18,
    title: 'The Barista Manual',
    author: 'Igor Barlian',
    description: 'Practical tips and industry secrets for working professionally as a barista.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51r2X3yK7rL._SX331_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Barista-Manual-Insiders-Guide/dp/1798544865',
    rating: 4,
  },
  {
    id: 19,
    title: 'The Coffee Dictionary',
    author: 'Maxwell Colonna-Dashwood',
    description: 'A comprehensive dictionary of coffee terminology, from farm to cup.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/511cO7+X34L._SX331_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Coffee-Dictionary-Comprehensive-A-Z-Specialty/dp/0578491845',
    rating: 5,
  },
  {
    id: 20,
    title: 'Latte Art: Mastering the Art of the Pour',
    author: 'Chris Baca',
    description: 'Focuses purely on the mechanics and artistry of pouring milk into espresso.',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51fG94kY3BL._SX331_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Latte-Art-Mastering-Pour-Ultimate/dp/0785834892',
    rating: 5,
  },
];

const BookPage = () => {
  return (
    <div>
      <Header />
      
      <div className="container my-5" style={{ paddingTop: '50px' }}>
        <h1 className="text-center mb-5 display-4 fw-bold text-dark text-uppercase">
          Must-Read Books for Coffee Lovers ({bookData.length} Titles)
        </h1>

        <div className="row g-4">
          {bookData.map((book) => (
            <div key={book.id} className="col-lg-3 col-md-4 col-sm-6"> 
              <div className="card h-100 shadow-sm border-0 hover-lift">                
                <img
                  src={book.imageUrl} 
                  className="card-img-top p-3"
                  alt={book.title}
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/250x250?text=No+Cover+Available'; }}
                  style={{ height: '250px', objectFit: 'contain' }}
                />
                
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-dark text-truncate mb-1">{book.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted small">by {book.author}</h6>
                  <p className="card-text small text-truncate-3 flex-grow-1">{book.description}</p>                  
                  <div className="mt-auto pt-2 border-top">
                    <div className="mb-2">
                      {[...Array(5)].map((_, i) => (
                        <i 
                          key={i} 
                          className={`bi bi-star-fill ${i < book.rating ? 'text-warning' : 'text-secondary'}`} 
                          style={{ fontSize: '0.8rem' }}
                        ></i>
                      ))}
                    </div>                    
                    <a 
                      href={book.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-sm btn-dark w-100 fw-bold"
                    >
                      <i className="bi bi-box-arrow-up-right me-1"></i> View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>        
        <div className="alert alert-info text-center mt-5 shadow-sm" role="alert">
          <i className="bi bi-info-circle-fill me-2"></i>
          Note: All book covers are loaded using hardcoded Internet URLs. This prevents issues with local file paths (like src/images) but requires an internet connection to display the images.
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default BookPage;