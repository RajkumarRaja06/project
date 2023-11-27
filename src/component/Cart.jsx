import '../index.css';
import { useState, useEffect } from 'react';

const Cart = () => {
  const [cartData, setCartData] = useState('');

  useEffect(() => {
    fetch('https://reqres.in/api/users/1')
      .then((data) => data.json())
      .then((data) => dataFetch(data.data));
  }, []);

  function dataFetch(params) {
    setCartData(params);
    console.log(params);
  }

  return (
    <div className='cart'>
      <div className='cartInside'>
        <div className='cartImg'>
          <img src={cartData.avatar} alt={cartData.first_name} />
        </div>
        <div className='tab'>
          <div className='cartText'>
            <h3 className='cartName'>{cartData.first_name}</h3>
            <div className='cartContent'>
              <h4>Email</h4>
              <p>{cartData.email}</p>
            </div>
            <div className='cartContent'>
              <h4>Occupation</h4>
              <p>Web Developer</p>
            </div>
            <div className='cartContent'>
              <h4>Location</h4>
              <p>Coimbatore</p>
            </div>
            <div className='cartContent4'>
              <h4>Address</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
                perspiciatis minus. Rerum iure rem nemo hic dolorem repellendus
                earum iste id eos repudiandae assumenda
              </p>
            </div>
          </div>
        </div>
        <div className='lap'>
          <h3 className='cartName'>{cartData.first_name}</h3>
          <div className='cartTextTab'>
            <div className='cartTextTab1'>
              <div className='cartContent'>
                <h4>Email</h4>
                <p>{cartData.email}</p>
              </div>
              <div className='cartContent'>
                <h4>Occupation</h4>
                <p>Web Developer</p>
              </div>
            </div>
            <div className='cartTextTab2'>
              <div className='cartContent'>
                <h4>Location : </h4>
                <p>Coimbatore</p>
              </div>
              <div className='cartContent4'>
                <h4>Address</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
                  perspiciatis minus. Rerum iure rem nemo hic dolorem
                  repellendus earum iste id eos repudiandae assumenda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
