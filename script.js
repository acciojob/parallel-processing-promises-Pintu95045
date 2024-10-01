//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
const imageUrls = [
{ url: "https://picsum.photos/id/237/200/300" },
{ url: "https://picsum.photos/id/238/200/300" },
{ url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener('click', downloadImages);

function downloadImages() {
    const imagePromises = imageUrls.map(downloadImage);

    Promise.all(imagePromises)
        .then(images => {
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = ''; // Clear previous images if any
            images.forEach(img => outputDiv.appendChild(img));
        })
        .catch(error => {
            console.error(error);
        });
}

function downloadImage(image) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
    });
}
