import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import loadingImage from '../../images/loading.svg';
import * as SliderAPI from '../../utils/getData';

class CarouselContainer extends React.Component {
  state = {
    slides: [],
    loading: true,
  };

  componentDidMount() {
    SliderAPI.getSlides().then((slides) => {
      if (slides) {
        this.setState({
          slides: slides,
          loading: false,
        });
      }
    });
  }

  render() {
    const { loading, slides } = this.state;

    return (
      <>
        <section className="o-carousel">
          <div className="container">
            {loading ? (
              <img src={loadingImage} alt="Carregando..." />
            ) : (
              <Carousel showArrows={false}>
                {slides.map((item) => (
                  <Link to="/" key={item.id}>
                    <figure>
                      <img
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
