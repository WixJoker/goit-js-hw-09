!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){timerId=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),timerId&&(t.disabled="true")})),e.addEventListener("click",(function(){clearInterval(timerId)}))}();
//# sourceMappingURL=01-color-switcher.01aecfef.js.map
