
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
  });

  ScrollReveal().reveal('.main-title, .text-box, .hero-btn, .section-title', { delay: 500, origin: 'left' });
  ScrollReveal().reveal('.sec-01 .image, .info', { delay: 600, origin: 'bottom' });
  ScrollReveal().reveal('.text-box2', { delay: 500, origin: 'right' });
  ScrollReveal().reveal('.media-icons i', { delay: 500, origin: 'bottom', interval: 200 });
  ScrollReveal().reveal('.sec-02 .image, .sec-03 .image', { delay: 500, origin: 'top' });
  ScrollReveal().reveal('.media-info li', { delay: 500, origin: 'left', interval: 200 });
  
// Tampilkan tombol saat pengguna scroll ke bawah
window.onscroll = function() {
    var scrollTopBtn = document.getElementById('scrollTopBtn');
    if (document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Scroll ke atas saat tombol diklik
document.getElementById('scrollTopBtn').onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
// Ganti gambar dengan tombol
let currentImageIndex = 0;
const images = ['Aset/donut.png', 'cupcake2.jpg', 'cupcake3.jpg'];

document.getElementById('changeImageButton').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.src = images[currentImageIndex];
});

// Membesar dan mengembalikan ukuran gambar saat diklik
imageElement.addEventListener('click', function() {
    this.classList.toggle('zoomed');
});

