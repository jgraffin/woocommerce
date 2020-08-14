<?php

    include_once('functions/post-types.php');
    include_once('functions/filter-data.php');
    include_once('functions/featured-image-json.php');

    add_action( 'init', 'slider_post_type' );
    add_action( 'rest_api_init', 'register_genre_as_rest_field' );

