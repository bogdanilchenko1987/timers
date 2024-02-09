let i=null;const t={notification:document.querySelector(".js-alert")};function o(){t.notification.classList.remove("is-visible")}t.notification.addEventListener("click",(function(){o(),clearTimeout(i)})),t.notification.classList.add("is-visible"),i=setTimeout((()=>{console.log("close notification so it dont bothered us"),o()}),3e3);
//# sourceMappingURL=notification.d6955ac0.js.map
