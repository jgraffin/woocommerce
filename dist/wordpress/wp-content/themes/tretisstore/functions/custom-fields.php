<?php

    function genre_meta_box() {
        add_meta_box(
          'global-notice',
          __( 'Genre', 'sitepoint' ),
          'genre_meta_box_callback',
          'slider',
          'side',
          'low'
        );
    }

    function genre_meta_box_callback() {
        global $post;
            $custom = get_post_custom($post->ID);
            $genre = $custom["genre"][0];
        ?>
            <input style="width:100%" name="genre" value="<?php  echo $genre; ?>" />
        <?php
    }

    function save_genre(){
        global $post;
        update_post_meta($post->ID, "printer_category", 
        $_POST["printer_category"]);
    }

    function register_genre_as_rest_field() {
        register_rest_field(
            'movies',
            'genre',
            array(
                'get_callback' => 'get_genre_meta_field',
                'update_callback' => null,
                'schema' => null,
            )
        );
    }
      
    function get_genre_meta_field( $object, $field_name, $value ) {
        return get_post_meta($object['id'])[$field_name][0];
    }
    

    add_action( 'add_meta_boxes', 'genre_meta_box' );
    add_action( 'save_post', 'save_genre' );
    add_action( 'rest_api_init', 'register_genre_as_rest_field' );
