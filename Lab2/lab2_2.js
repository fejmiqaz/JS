/* Create a function that when clicking on a button on the page will be displayed an image, which is randomly selected from the given images. */

function openImage(){
    const images = [
        "http://data.whicdn.com/images/15145864/large.jpg",
        "https://cdn0.vox-cdn.com/uploads/chorus_image/image/48151611/8559004265_4b81d299ce.0.0.jpg",
        "https://farm5.staticflickr.com/4060/4567292488_5d3f4b05f6_z.jpg"
    ]
    const randomIdx = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIdx];
    window.open(randomImage, '-blank');
}
