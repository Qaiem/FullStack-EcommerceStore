import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Home = () => {
  // Sample data for featured products
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '$25.00',
      image: 'https://via.placeholder.com/150', // Sample image URL
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$45.00',
      image: 'https://via.placeholder.com/150', // Sample image URL
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$60.00',
      image: 'https://via.placeholder.com/150', // Sample image URL
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Welcome to ShopMate</h1>
        <p className="mt-4 text-xl">Your one-stop shop for the best products</p>
        <Link to="/shop" className="mt-6 inline-block bg-white text-blue-500 py-2 px-4 rounded-lg text-lg">
          Shop Now
        </Link>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
              <p className="mt-2 text-gray-500">{product.price}</p>
              <Link
                to={`/product/${product.id}`}
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg text-lg"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Icon */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link to="/cart" className="text-white bg-blue-500 p-4 rounded-full shadow-lg hover:shadow-xl">
          <FaShoppingCart size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
