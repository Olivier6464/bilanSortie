(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function m(a){const o=document.querySelector(a);let i="";for(let n=0;n<o.options.length;n++)o.options[n].selected&&(i+=o.options[n].value+", ");return`${i.substring(0,i.length-2)}.`}function v(a){const o=()=>{const i=document.querySelector("#besoin").value,n=document.querySelector("#output"),e=document.querySelector("#genre").value,t=document.querySelector("#nom").value,u=document.querySelector("#autonomie").value,s=document.querySelector("#distance").value;let r="";e=="Madame"?r="la patiente":r="le patient";let c=m("#transferts"),p=i=="est autonome"?"est autonome pour les transferts":`${i} pour les transferts de type ${c}`,l=document.querySelector("#douleur").value,d=document.querySelector("#location").value;l=="0/4"?l=`${l} EVS`:l=`${l} EVS ${d}`,n.innerHTML=`${e} ${t} ${p} 
la douleur est estimée à ${l}.
Au niveau de l'autonomie dans les déplacements ${r} ${u}, son périmètre de marche est d'environ ${s}
    `};a.addEventListener("click",()=>o())}document.querySelector("#app").innerHTML=`
  <div>
    <h1>Bilan de sortie</h1>
    <select name="genre" id="genre">
      <option value="Monsieur">Monsieur</option>
      <option value="Madame" selected>Madame</option>
    </select>

    <input id="nom" placeholder="nom" type="text" /><br>
    <select id="besoin">
    <option value="est autonome">est autonome</option>
      <option value="a besoin d'une personne">a besoin d'une personne</option>
      <option value="a besoin d'une barrière">a besoin d'une barrière</option>
    </select>
    <label>pour les transferts de type</label><br>
    <select multiple id="transferts">
      <option value="retournement au lit">retournement au lit</option>
      <option value="allongé assis">allongé assis</option>
      <option value="assis debout">assis debout</option>
      <option value="lit fauteuil">lit fauteuil</option>
    </select><br>
    <label>La douleur est estimée à</label><br>
    <select id="douleur">
      <option value="0/4">0/4</option>
      <option value="1/4">1/4</option>
      <option value="2/4">2/4</option>
      <option value="3/4">3/4</option>
      <option value="4/4">4/4</option>
    </select><br>
    <label>EVS au niveau</label><br>
    <select id="location">
      <option value="au niveau du dos">du dos</option>
      <option value="au niveau de la jambe">de la jambe</option>
      <option value="au niveau du bras">du bras</option>
    </select><br>
    <label id="deplacements"
      >Au niveau de l'autonomie dans les déplacements</label
    ><br>
    <label>le ou la patiente </label>
    <select id="autonomie">
      <option value="utilise une canne">utilise une canne</option>
      <option value="utilise un rolator">utilise un rolator</option>
      <option value="utilise un déambulateur">utilise un déambulateur</option>
      <option value="n'utilise pas d'aide technique">n'utilise pas d'aide technique</option>
    </select><br>
    <label id="perimetre">son périmètre de marche est d'environ </label>
    <select id="distance">
      <option value="20 m">20 m</option>
      <option value="40 m">40 m</option>
      <option value="60 m">60 m</option>
      <option value="80 m">80 m</option>
      <option value="40 m">100 m</option>
      <option value="40 m">200 m</option>
    </select><br>
    
    <div class="card">
      <button id="sortie" type="button">génération</button>
    </div>
    <textarea id="output" cols="40" rows="10"></textarea>
    
   
  </div>
`;v(document.querySelector("#sortie"));
