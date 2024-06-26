        document.addEventListener('DOMContentLoaded', function() {
            function createCarousel(carouselId, dotsId) {
                const carousel = document.getElementById(carouselId);
                const dotsContainer = document.getElementById(dotsId);
                const items = carousel.children;
                const totalItems = items.length;
                const itemsToShow = 3;
                let currentIndex = 0;

                function updateCarousel() {
                    const offset = -currentIndex * 320; // Adjusted to match the width of the items
                    carousel.style.transform = `translateX(${offset}px)`;
                    updateDots();
                }

                function updateDots() {
                    dotsContainer.innerHTML = '';
                    for (let i = 0; i < itemsToShow; i++) {
                        const dot = document.createElement('div');
                        dot.classList.add('carousel-dot');
                        if (i === currentIndex) {
                            dot.classList.add('active');
                        }
                        dot.addEventListener('click', () => {
                            currentIndex = i;
                            updateCarousel();
                        });
                        dotsContainer.appendChild(dot);
                    }
                }

                function nextSlide() {
                    currentIndex = (currentIndex + 1) % itemsToShow;
                    updateCarousel();
                }

                function prevSlide() {
                    currentIndex = (currentIndex - 1 + itemsToShow) % itemsToShow;
                    updateCarousel();
                }

                updateCarousel();
                setInterval(nextSlide, 4000); // Change slide every 4 seconds
            }

            createCarousel('dishes-carousel', 'dishes-dots');
            createCarousel('events-carousel', 'events-dots');
        });