document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = [
        'https://example.com/cristiano1.jpg',
        'https://example.com/cristiano2.jpg',
        'https://example.com/cristiano3.jpg'
    ];

    const galleryDiv = document.getElementById('gallery-images');
    
    galleryImages.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Cristiano Ronaldo';
        galleryDiv.appendChild(img);
    });
});
