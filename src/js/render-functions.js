function imageTemplate(image) {
  return `
	<a class="gallery-link" href="${image.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${image.webformatURL}" 
			alt="${image.tags}" 
			/>
      <ul class="img-details-box">
      <li class="detail-item"><b>Likes:</b> ${image.likes}</li>
      <li class="detail-item"><b>Views:</b> ${image.views}</li>
      <li class="detail-item"><b>Comments:</b> ${image.comments}</li>
      <li class="detail-item"><b>Downloads:</b> ${image.downloads}</li></ul>
      </a>`;
}

export function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}
