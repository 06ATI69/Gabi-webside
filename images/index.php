<?php

function compressAndConvert($source, $width, $quality) {
    // Check if GD extension is installed
    if (!extension_loaded('gd')) {
        return 'GD extension is not installed';
    }

    // Check if the file exists
    if (!file_exists($source)) {
        return 'File does not exist';
    }

    $info = getimagesize($source);

    // Check if the file is an image
    if ($info === false) {
        return 'Not an image';
    }

    // Generate cache file name
    $output = 'cache/' . basename($source, pathinfo($source, PATHINFO_EXTENSION)) . $width . '-' . $quality . '.webp';

    switch ($info[2]) {
        case IMAGETYPE_JPEG:
            $image = imagecreatefromjpeg($source);
            break;
        case IMAGETYPE_PNG:
            $image = imagecreatefrompng($source);
            // Preserve transparency
            imagealphablending($image, false);
            imagesavealpha($image, true);
            break;
        case IMAGETYPE_GIF:
            $image = imagecreatefromgif($source);
            // Preserve transparency
            imagealphablending($image, false);
            imagesavealpha($image, true);
            break;
        default:
            return 'Unsupported image type';
    }

    $height = imagesy($image) * $width / imagesx($image);

    // Create a new transparent image
    $new_image = imagecreatetruecolor($width, $height);
    imagealphablending($new_image, false);
    imagesavealpha($new_image, true);
    imagecopyresampled($new_image, $image, 0, 0, 0, 0, $width, $height, imagesx($image), imagesy($image));

    // Save the image as WebP with provided quality
    imagewebp($new_image, $output, $quality);

    imagedestroy($image);
    imagedestroy($new_image);

    return file_get_contents($output);
}
// Send the Cache-Control header
header('Cache-Control: max-age=31536000');
header('Content-Type: image/webp');
echo compressAndConvert($_GET['image'], $_GET['width'], $_GET['quality']);
?>
