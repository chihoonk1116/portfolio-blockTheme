<?php


add_action('enqueue_block_assets', function(){
  wp_enqueue_style(
    'custom-theme-global-css',
    get_template_directory_uri() . '/styles/global.css',
    [],
    filemtime(get_template_directory() . '/styles/global.css')
  );
});

function block_init(){
  register_block_type(__DIR__ . '/build/navbar');
  register_block_type(__DIR__ . '/build/flipwords');
  register_block_type(__DIR__ . '/build/hero');
}

add_action('init', 'block_init');