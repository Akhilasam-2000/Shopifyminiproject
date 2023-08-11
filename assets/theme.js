document.addEventListener('DOMContentLoaded', function () {
    const imageBlocks = document.querySelectorAll('.quick-view-trigger');
    const overlay = document.createElement('div');
    overlay.classList.add('image-overlay');
  
    imageBlocks.forEach((block) => {
      block.addEventListener('click', () => {
        const imageUrl = block.getAttribute('data-image');
        const blockId = block.getAttribute('data-identifier');
        const quickViewContent = generateQuickViewContent(imageUrl);
  
        overlay.innerHTML = quickViewContent;
        overlay.classList.add('active');
        document.body.appendChild(overlay);
  
        overlay.addEventListener('click', () => {
          overlay.classList.remove('active');
          overlay.innerHTML = ''; // Clear the content
        });
      });
    });
  
    function generateQuickViewContent(imageUrl) {
      return `
        <div class="quick-view-content">
          <img src="${imageUrl}" alt="Quick View" />
        </div>
      `;
    }
  });
// document.addEventListener('DOMContentLoaded', function () {
//     const imageBlocks = document.querySelectorAll('.quick-view-trigger');
//     const overlay = document.createElement('div');
//     overlay.classList.add('image-overlay');
  
//     imageBlocks.forEach((block) => {
//       block.addEventListener('click', () => {
//         const images = block.getAttribute('data-images').split(',');
//         const text = block.getAttribute('data-text');
//         const quickViewContent = generateQuickViewContent(images, text);
  
//         overlay.innerHTML = quickViewContent;
//         overlay.classList.add('active');
//         document.body.appendChild(overlay);
  
//         overlay.addEventListener('click', () => {
//           overlay.classList.remove('active');
//           overlay.innerHTML = ''; // Clear the content
//         });
//       });
//     });
  
//     function generateQuickViewContent(images, text) {
//       const imageElements = images.map((imageUrl) => `<img src="${imageUrl}" alt="Image" />`).join('');
//       return `
//         <div class="quick-view-content">
//           ${imageElements}
//           <p>${text}</p>
//         </div>
//       `;
//     }
//   });
  
  