function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var i=r("7Y9D8");function l(e,o){return new Promise(((n,t)=>{Math.random()>.3?setTimeout((()=>{n({position:e,delay:o})}),o):setTimeout((()=>{t({position:e,delay:o})}),o)}))}document.querySelector(".form").addEventListener("submit",(o=>{o.preventDefault();const n=Number(document.querySelector('[name="amount"]').value),t=Number(document.querySelector('[name="step"]').value),r=Number(document.querySelector('[name="delay"]').value);for(let o=0;o<n;o+=1){l(o+1,r+o*t).then((({position:o,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`),console.log("yes")})).catch((({position:o,delay:n})=>{e(i).Notify.warning(`❌ Rejected promise ${o} in ${n}ms`),console.log("no")}))}}));
//# sourceMappingURL=03-promises.fb289464.js.map