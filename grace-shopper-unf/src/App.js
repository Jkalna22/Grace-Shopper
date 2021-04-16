import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import Products from "./Products";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";

function App() {

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);


  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path='/'>
          <Home />
          < FeaturedProducts rating={rating} setRating={setRating} hover={hover} setHover={setHover} />
          < Footer />
        </Route>

        <Route exact path='/products'>
          <Products products={products}
            setProducts={setProducts}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            rating={rating}
            setRating={setRating}
            hover={hover}
            setHover={setHover} />
        </Route>

        <Route exact path='/about'>
        </Route>

        <Route exact path='/contact'>
        </Route>

        <Route exact path='/account'>
        </Route>
      </Router>
    </div>
  );
}

export default App;
