<?php 

    function filter_rest_data( $data, $post, $request ) {
        $_data = $data->data;
        $params = $request->get_params();
            if ( ! isset( $params['id'] ) ) {
            unset( $_data['date'] );
            unset( $_data['slug'] );
            unset( $_data['date_gmt'] );
            unset( $_data['modified'] );
            unset( $_data['modified_gmt'] );
            unset( $_data['guid'] );
            unset( $_data['type'] );
        }

        $data->data = $_data;
        return $data;
    }
  
    add_filter( 'rest_prepare_slider', 'filter_rest_data', 10, 3 );