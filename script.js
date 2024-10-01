//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
{ url: "https://picsum.photos/id/237/200/300" },
{ url: "https://picsum.photos/id/238/200/300" },
{ url: "https://picsum.photos/id/239/200/300" },
];
 document.getElementById('download-images-button').addEventListener('click', downloadAndDisplayImages);

        function downloadAndDisplayImages() {
            const imagePromises = imageUrls.map(downloadImage);

            Promise.all(imagePromises)
                .then(images => {
                    const outputDiv = document.getElementById('output');
                    outputDiv.innerHTML = ''; // Clear previous images
                    images.forEach(img => outputDiv.appendChild(img));
                })
                .catch(error => {
                    console.error(error);
                });
        }

        function downloadImage(imageObj) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = imageObj.url;
                img.onload = () => resolve(img);
                img.onerror = () => reject(new Error(`Failed to load image's URL: ${imageObj.url}`));
            });
        }