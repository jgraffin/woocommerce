import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

class CarouselContainer extends React.Component {
  state = {
    slides: [],
  };

  componentDidMount() {
    fetch(
      'http://localhost:8888/woocommerce/dist/wordpress/wp-json/wp/v2/slider?_embed'
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({ slides: json });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { loading, slides } = this.state;

    return (
      <>
        <section className="o-carousel">
          <div className="container">
            {loading ? (
              'Loading...'
            ) : (
              <Carousel showArrows={false}>
                {slides.map((item) => (
                  <Link to="/" key={item.id}>
                    <figure>
                      <img
                        loading="lazy"
                        src={
                          item._embedded
                            ? item._embedded['wp:featuredmedia']['0'].source_url
                            : ''
                        }
                        alt={item.title.rendered}
                      />
                    </figure>
                  </Link>
                ))}
              </Carousel>
            )}
          </div>
        </section>
      </>
    );
  }
}

export default CarouselContainer;
