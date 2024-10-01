//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
{ url: "https://picsum.photos/id/237/200/300" },
{ url: "https://picsum.photos/id/238/200/300" },
{ url: "https://picsum.photos/id/239/200/300" },
];

// Function to download and display images
async function downloadAndDisplayImages() {
  try {
    const imagePromises = images.map(image => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
        img.src = image.url;
      });
btn.addEventListener("click", () => {
  downloadImages(images)
    .then(downloadedImages => {
      output.innerHTML = ''; // Clear any previous images
      downloadedImages.forEach(img => output.appendChild(img));
    })
    .catch(error => {
      console.error(error);
      alert(error);
});
});

    const downloadedImages = await Promise.all(imagePromises);

    // Clear existing images
    output.innerHTML = '';

    // Display downloaded images
    downloadedImages.forEach(img => {
      output.appendChild(img);
function downloadImages(imageUrls) {
  const imagePromises = imageUrls.map(imageObj => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = imageObj.url;
      img.onload = () => resolve(img);
      img.onerror = () => reject(`Failed to load image's URL: ${imageObj.url}`);
});
  } catch (error) {
    console.error(error);
  }
}
  });

// Event listener for button click
btn.addEventListener("click", downloadAndDisplayImages);
  return Promise.all(imagePromises);
}