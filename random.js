const searchParam = new URLSearchParams(window.location.search)
var bg = searchParam.get('bg') !== null ? searchParam.get('bg') : Math.floor(Math.random()*16777215).toString(16)
bg = (/[\da-f]{7,}/i.test(bg)) ? bg.slice(0,6): bg
document.body.style.backgroundColor = (/[\da-f]{6}|[\da-f]{3}/i.test(bg)) ? `#${bg}` : bg
console.log(`bg = ${bg}`)
