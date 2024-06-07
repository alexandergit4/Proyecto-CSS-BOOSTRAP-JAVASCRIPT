window.onload = function() {
    const imageSources = [
      '../img/i1.png',
      '../img/i2.jpeg',
      '../img/i3.png',
      '../img/i4.png',
      '../img/i5.jpeg'
    ];
    const galleryImages = document.querySelectorAll('.gallery-image');
    let currentImageIndex = 1;
  
    function rotateImages() {
      galleryImages.forEach(image => {
        image.style.opacity = 0;
      });
  
      setTimeout(() => {
        galleryImages.forEach((image, index) => {
          image.src = imageSources[(currentImageIndex + index) % imageSources.length];
          image.style.opacity = 1;
        });
        currentImageIndex = (currentImageIndex + 1) % imageSources.length;
      }, 500);
    }
  
    setInterval(rotateImages, 3500);
  };