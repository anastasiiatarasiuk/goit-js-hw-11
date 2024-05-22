import{i as l}from"./assets/vendor-8e8cd629.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function c(r){const s="https://pixabay.com/api/",o=new URLSearchParams({key:"44012525-f6ee3715003c9db0af32c6494",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),i=`${s}?${o}`;return fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function u(r){return`
	<a class="gallery-link" href="${r.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${r.webformatURL}" 
			alt="${r.tags}" 
			/>
      <ul class="img-details-box">
      <li class="detail-item"><b>Likes:</b> ${r.likes}</li>
      <li class="detail-item"><b>Views:</b> ${r.views}</li>
      <li class="detail-item"><b>Comments:</b> ${r.comments}</li>
      <li class="detail-item"><b>Downloads:</b> ${r.downloads}</li></ul>
      </a>`}function m(r){return r.map(u).join("")}const f=document.querySelector(".form"),a=document.querySelector(".images-container"),d=document.querySelector(".loader");f.addEventListener("submit",r=>{r.preventDefault(),a.innerHTML="",h();const s=r.target.elements.query.value.trim();if(!s){l.error({message:"Search field is empty",position:"topRight"});return}c(s).then(o=>{var i;if((i=o==null?void 0:o.hits)!=null&&i.length){const e=m(o.hits);a.innerHTML=e,r.target.reset();return}throw Error("Sorry, there are no images matching your search query. Please try again!")}).catch(o=>{l.error({message:"Sorry, there are no images matching your search query. Please try again",position:"topRight"})})});function h(){d.style.display="inline-block"}
//# sourceMappingURL=commonHelpers.js.map
