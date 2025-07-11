<?php
$words = !empty($attributes['words']) ? $attributes['words'] : ['example', 'words', 'default'];
$size = !empty($attributes['size']) ? $attributes['size'] : 'large';

$block_id = 'flipwords-' . uniqid();
?>

<div 
  class="flipwords-root" 
  data-words='<?php echo wp_json_encode($words); ?>'
  data-size='<?php echo $size?>'
>
</div>
