<?php // Add 'featured_image_url' to REST data

    function post_featured_image_json( $data, $post, $context ) {
        $featured_image_id = $data->data['featured_media'];
        $featured_image_url = wp_get_attachment_image_src( $featured_image_id, 'original' );

        if( $featured_image_url ) {
            $data->data['featured_image_url'] = $featured_image_url[0];
        }

        return $data;
    }
    
    add_filter( 'rest_prepare_movies', 'post_featured_image_json', 10, 3 );