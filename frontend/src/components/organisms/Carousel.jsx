import Slider from 'infinite-react-carousel';
import React from 'react';
import img3 from '../../images/banner-drible-por.jpg';
import img2 from '../../images/banner-nova.jpg';
import img1 from '../../images/banner-padrao-athl.jpg';

export default class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="o-carousel">
          <div className="container">
            <Slider dots autoplay>
              <figure>
                <img src={img1} alt="" />
              </figure>
              <figure>
                <img src={img2} alt="" />
              </figure>
              <figure>
                <img src={img3} alt="" />
              </figure>
            </Slider>
          </div>
        </section>
      </>
    );
  }
}
