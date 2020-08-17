import React from 'react';
import Carousel from 'react-elastic-carousel';

export default class CarouselAPI extends React.Component {
  constructor() {
    super();
    this.state = { slides: [] };
  }

  componentDidMount() {
    fetch(
      'http://localhost:8888/woocommerce/dist/wordpress/wp-json/wp/v2/slider?_embed'
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({
          slides: data,
        });
      });
  }

  render() {
    return (
      <>
        <section className="o-carousel">
          <Carousel enableAutoPlay showArrows={false}>
            {this.state.slides.map((item) => (
              <figure key={item.id}>
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
            ))}
          </Carousel>
        </section>
      </>
    );
  }
}
