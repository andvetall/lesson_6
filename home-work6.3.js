var style = document.head.appendChild(document.createElement('style'))

style.textContent = `
    .redBack {
        background-color: red!important;
    } `
for(var elem of document.body.children){
    elem.tagName === "SCRIPT" ? null :
        elem.className = "redBack"
}
