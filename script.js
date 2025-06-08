const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value');
    let selectedRating = 0;

    stars.forEach((star, index) => {
      star.addEventListener('mouseover', () => {
        highlightStars(index + 1);
      });

      star.addEventListener('mouseout', () => {
        highlightStars(selectedRating);
      });

      star.addEventListener('click', () => {
        selectedRating = index + 1;
        ratingValue.textContent = selectedRating;
        highlightStars(selectedRating);
      });
    });

    function highlightStars(rating) {
      stars.forEach((star, index) => {
        star.classList.toggle('hovered', index < rating);
        star.classList.toggle('selected', index < rating);
      });
    }