import React from 'react';

const List = ({ slides }) => (
  <ul>
    {slides.map((slide) => (
      <li key={slide.id}>
        <h2>{slide.title.rendered}</h2>
        <div dangerouslySetInnerHTML={{ __html: slide.content.rendered }}></div>
      </li>
    ))}
  </ul>
);

export class Slider extends React.Component {
  constructor() {
    super();
    this.state = { slides: [] };
  }

  componentDidMount() {
    fetch(
      'http://localhost:8888/woocommerce/dist/wordpress/wp-json/wp/v2/slider?per_page=100'
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
    return <List slides={this.state.slides} />;
  }
}
