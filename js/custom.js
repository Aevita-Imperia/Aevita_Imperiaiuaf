document.querySelectorAll('.boxtiny,.boxsmall, .box, .boxmedium, .boxmassive, .boxlarge, .boxsupermassive, .preorderbox').forEach(box => {
    // Set initial styles to allow overflow
    box.style.backgroundImage = 'none'; // Or a default image URL if desired
    box.style.backgroundSize = 'contain'; // Scale to fit within the box initially
    box.style.overflow = 'visible'; // Ensure overflow is allowed

    // Add event listeners for mouseover and mouseout
    box.addEventListener('mouseover', () => {
        box.style.backgroundImage = `url(${box.getAttribute('data-hover')})`;
        box.style.backgroundSize = 'auto'; // Change to a value that allows overflow, such as '150%' or 'cover'
        box.style.backgroundRepeat = 'no-repeat'; // Prevents tiling
        box.style.backgroundPosition = 'center'; // Centers the image
    });

    box.addEventListener('mouseout', () => {
        box.style.backgroundImage = 'none'; // Reset to default
    });
});

  $(document).ready(function(){
      $("#bannerUAF").owlCarousel({
          items: 1, // Number of items to show
          loop: true, // Infinite loop
          margin: 10, // Space between items
          nav: true, // Show next/prev buttons
          autoplay: true, // Autoplay option
          autoplayTimeout: 5000, // Autoplay speed
          autoplayHoverPause: true, // Pause on hover
          dots: true // Show dots navigation
      });
  });
