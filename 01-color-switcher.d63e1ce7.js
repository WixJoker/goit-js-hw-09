const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let o=null;t.addEventListener("click",(()=>{o=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),o&&(t.disabled="true")})),e.addEventListener("click",(()=>{clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.d63e1ce7.js.map
