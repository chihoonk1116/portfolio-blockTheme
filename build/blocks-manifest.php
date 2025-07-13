<?php
// This file is generated. Do not modify it manually.
return array(
	'flipwords' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'customblocks/flipwords',
		'version' => '0.1.0',
		'title' => 'FilpWords',
		'category' => 'widgets',
		'attributes' => array(
			'size' => array(
				'type' => 'string',
				'default' => 'large'
			),
			'words' => array(
				'type' => 'array',
				'default' => array(
					'Hello',
					'World'
				)
			)
		),
		'icon' => 'smiley',
		'description' => 'Hero section',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'flipwords',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'hero' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'customblocks/hero',
		'version' => '0.1.0',
		'title' => 'Hero',
		'category' => 'widgets',
		'icon' => 'smileydashicons-star-filled',
		'description' => 'Custom hero block',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'hero',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'navbar' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'customblocks/navbar',
		'version' => '0.1.0',
		'title' => 'Navbar',
		'category' => 'widgets',
		'attributes' => array(
			'size' => array(
				'type' => 'string',
				'default' => 'large'
			),
			'words' => array(
				'type' => 'array',
				'default' => array(
					'Hello',
					'World'
				)
			)
		),
		'icon' => 'menu',
		'description' => 'Navbar',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'navbar',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'refBlock' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'customblocks/refBlock',
		'version' => '0.1.0',
		'title' => 'Ref Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'refBlock',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
