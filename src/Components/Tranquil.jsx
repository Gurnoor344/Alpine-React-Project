import React from 'react';

import './Tranquil.css';

const Tranquil = () => {
  return (
    <>
      

      {/* Center */}
      <div className="bundle">
        <img src="https://www.heartyculturenursery.com/cdn/shop/products/001_2_7669ad9d-2814-403a-94f8-7d814b364137_869x869.png?v=1633609044" alt="" />
        <div className="content">
          <h2>Tranquil Trio | Jasmine, Lemon grass, Henna</h2>
          <div>
            <label>Quantity<br />
              <input type="number" value="1" />
            </label>
            <p>Rs 599.00</p>
          </div>
          <p>10% Contribution goes to Forest By Heartfulness - Donate</p>
        </div>
      </div>

      <div className="writing">
        <h1>Rich aromatic plants that soothe and calm.</h1>
        <h2>1. Mogra Jasmine</h2>
        <h3>
          Mogra is a snow white, exquisite flower that has its own exotic sense of beauty. This is
          quite incomparable to any other flower, with its very own unique fragrance and its use
          for women to adorn their hair. In India, it is known for its great religious significance,
          being the flower of gods and goddesses. This durable flower stays fresh for a long time.
          It is also known for its medicinal and aromatherapy properties, commonly used for its healing
          and a very calming effect.
        </h3>

        <h2>2. Lemongrass</h2>
        <h3>
          Lemon grass is a unique all-purpose herb, and its properties are vast, from being a medicinal
          plant to an aromatic plant and even a pesticide. It has many names including Malabar grass, Cochin
          grass, and Barbed wire grass. Lemongrass tea is proven to reduce anxiety, lower cholesterol levels,
          prevent several infections, boost oral health. It is also used as a handy painkiller.
          <br />
          Did you know that a 2015 study concluded that drinking lemongrass tea for 30 days boosted
          hemoglobin concentration and RBC count?
        </h3>

        <h2>3. Henna</h2>
        <h3>
          We would remember the henna plant for the rich, deep red mehendi or maruthani on our hands during
          festivals and the red henna hair dye commonly used. In addition to this, it has health benefits
          like cooling body temperature and serves as an excellent ornamental outdoor tree. Henna would
          thrive in your garden when you plant it on well-drained soil and water it only once the soil
          dries out. It also loves the sunlight, so choose a nice sunny spot for it.
          <br />
          It is quite a tall shrub, that grows up to 25 feet. Did you know it was brought to India by the Mughal
          emperor Babur?
        </h3>
      </div>

      <section>
        <h1 style={{ textAlign: 'center' }}>Inspired by your shopping trends</h1>
        <div className="guide">
          <figure>
            <img src="https://thegrowers-exchange.com/cdn/shop/products/Parsley__Italian_Flatleaf_2000x.jpg?v=1575466902" alt="" />
            <figcaption>
              <h3 className="h3">
                <a className="card title" style={{ color: '#ef6f6c' }}>Parsley 'Italian Flatleaf'<br />
                  Price: Rs. 450
                </a>
              </h3>
            </figcaption>
          </figure>

          <figure>
            <img src="https://thegrowers-exchange.com/cdn/shop/products/Mint_Peppermint_2000x.jpg?v=1575406286" alt="" />
            <figcaption>
              <h3 className="h3">
                <a className="card title" style={{ color: '#ef6f6c' }}>Mint 'Peppermint'<br />
                  Price: Rs. 250
                </a>
              </h3>
            </figcaption>
          </figure>

          <figure>
            <img src="https://thegrowers-exchange.com/cdn/shop/products/Stevia_1_2000x.jpg?v=1575467970" alt="" />
            <figcaption>
              <h3 className="h3">
                <a className="card title" style={{ color: '#ef6f6c' }}>Stevia<br />
                  Price: Rs. 650
                </a>
              </h3>
            </figcaption>
          </figure>
        </div>
      </section>

      <br />

      <div className="reviews">
        <h1>REVIEWS</h1>
        <div className="rating">
          <p>NO REVIEWS</p>
        </div>
      </div>
    </>
  );
}

export default Tranquil;
