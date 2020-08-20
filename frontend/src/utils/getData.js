const api = 'http://localhost:8888/woocommerce/dist/wordpress/wp-json/wp/v2';

export const getSlides = () =>
  fetch(`${api}/slider?_embed`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });

export const getLinksMenu = () =>
  fetch(`${api}/posts/pages`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
