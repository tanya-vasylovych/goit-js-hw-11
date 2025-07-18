import{a as f,S as m,i as a}from"./assets/vendor-Cip_4kvj.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(i){const o={key:"51362272-d48daa27a05223f6096b84303",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get("https://pixabay.com/api/",{params:o}).then(t=>t.data).catch(t=>{throw console.log(t),t})}const c=document.querySelector(".gallery"),y=new m(".gallery a",{captionsData:"img",captionPosition:"bottom",captionDelay:250}),l=document.querySelector(".js-loader");function h(i){const o=i.map(({webformatURL:t,largeImageURL:n,tags:e,likes:r,views:s,comments:u,downloads:d})=>`
    <li class="gallery-item">
      <a href="${n}">
        <img src="${t}" alt="${e}" loading="lazy"/>
      </a>
      <div class="info">
        <p>Likes: ${r}</p>
        <p>Views: ${s}</p>
        <p>Comments: ${u}</p>
        <p>Downloads: ${d}</p>
      </div>
    </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function g(){c.innerHTML=""}function L(){l.classList.remove("is-hidden")}function b(){l.classList.add("is-hidden")}const S=document.querySelector(".form"),$=i=>{i.preventDefault(),g();const o=i.currentTarget.elements["search-text"].value.trim();L(),p(o).then(t=>{t.hits.length===0?a.info({message:"Sorry, there are no images matching your search query. Please try again!"}):h(t.hits)}).catch(t=>{a.error({message:`Error: ${t.message}`})}).finally(()=>{b()})};S.addEventListener("submit",$);
//# sourceMappingURL=index.js.map
