function homework61(event) {


    var tags = ["header", "div", "div", "p", "footer"]
    var classes = ["top", "logo", "container", "parag", "bottom"]

    var style = document.head.appendChild(document.createElement('style'))
    style.innerHTML =
        `
.top{ width 100px; height: 100px; background-color: green; }
.logo{ width 100px; height: 100px; background-color: red; }
.container{ width 100px; height: 100px; background-color: blue; }
.parag{ width 100px; height: 100px; background-color: orange; }
.bottom{ width 100px; height: 100px; background-color: gray; }
`
    for (var tag in tags) {
        document.body.appendChild(document.createElement(`${tags[tag]}`))
            .setAttribute('class', `${classes[tag]}`)
    }
} homework61()