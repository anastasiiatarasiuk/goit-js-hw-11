import{S as d,i as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(t){const s="https://pixabay.com/api/",o=new URLSearchParams({key:"44012525-f6ee3715003c9db0af32c6494",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}),i=`${s}?${o}`;return fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const p=document.querySelector(".images-container");let a;function y(t){return`<li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img 
        class="gallery-image" 
        src="${t.webformatURL}" 
        alt="${t.tags}" 
      />
    </a>
    <div class="img-details-box">
      <p class="detail-item"><b class="detail-title">Likes:</b> ${t.likes}</p>
      <p class="detail-item"><b class="detail-title">Views:</b> ${t.views}</p>
      <p class="detail-item"><b class="detail-title">Comments:</b> ${t.comments}</p>
      <p class="detail-item"><b class="detail-title">Downloads:</b> ${t.downloads}</p>
    </div>
    </li>
  `}function h(t){return t.map(y).join("")}function g(t){const s=h(t);p.insertAdjacentHTML("beforeend",s),a?a.refresh():a=new d(".images-container a",{captionsData:"alt",captionDelay:250})}const u=document.querySelector(".form"),b=document.querySelector(".images-container"),m=document.querySelector(".loader");u.addEventListener("submit",L);function L(t){t.preventDefault(),b.innerHTML="",S();const s=t.target.elements.query.value.trim();if(!s){l.error({message:"Search field is empty",position:"topRight"}),c();return}f(s).then(o=>{if(o&&o.hits&&o.hits.length)g(o.hits);else throw Error("Sorry, there are no images matching your search query. Please try again!")}).catch(o=>{l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{c()}),u.reset()}function S(){m.style.display="inline-block"}function c(){m.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
