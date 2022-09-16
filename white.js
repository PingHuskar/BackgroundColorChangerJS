const searchParam = new URLSearchParams(location.search)
var bg = searchParam.get('bg') || '#fff'
bg = (/[\da-f]{7,}/i.test(bg)) ? bg.slice(0,6): bg
document.body.style.backgroundColor = (/[\da-f]{6}|[\da-f]{3}/i.test(bg)) ? `#${bg}` : bg