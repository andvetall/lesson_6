// var tags = [
//     {
//         tagTitle: "header",
//         classTitle: "top",
//         style: `width: 100px; height: 100px; background-color: green;`,
//         event1: function(event){
//             this.style.backgroundColor = "yellow"
//         },
//         event2: function(event){
//             this.style.backgroundColor = "green"
//         }
//     },
//     {
//         tagTitle: "div",
//         classTitle: "logo",
//         style: `width: 100px; height: 100px; background-color: red;`,
//         event1: function(event){
//             this.style.backgroundColor = "yellow"
//         },
//         event2: function(event){
//             this.style.backgroundColor = "red"
//         }
//     },
//     {
//         tagTitle: "div",
//         classTitle: "container",
//         style: `width: 100px; height: 100px; background-color: gray;`,
//         event1: function(event){
//             this.style.backgroundColor = "yellow"
//         },
//         event2: function(event){
//             this.style.backgroundColor = "gray"
//         }
//     },
//     {
//         tagTitle: "p",
//         classTitle: "parag",
//         style: `width: 100px; height: 100px; background-color: blue;`,
//         event1: function(event){
//             this.style.backgroundColor = "yellow"
//         },
//         event2: function(event){
//             this.style.backgroundColor = "blue"
//         }
//     },
//     {
//         tagTitle: "footer",
//         classTitle: "bottom",
//         style: `width: 100px; height: 100px; background-color: silver;`,
//         event1: function(event){
//             this.style.backgroundColor = "yellow"
//         },
//         event2: function(event){
//             this.style.backgroundColor = "silver"
//         }
//     }
// ]
// tags.forEach(function(elem){
//     var tag = document.body.appendChild(document.createElement(elem.tagTitle))
//     tag.className = elem.classTitle
//     tag.style = elem.style
//     tag.onmouseover = elem.event1
//     tag.onmouseout = elem.event2
// })

var tags = [
    {
        name: 'header',
        attrs: {
            className: 'header',
            innerText: 'Hello World',
        }
    },
    {
        name: 'section',
        attrs: {
            className: 'section',
            innerText: 'Good Morning',
        }
    },
    {
        name: 'div',
        attrs: {
            className: 'div',
            innerText: 'Good afternoon',
            title: 'Title'
        }

    },
    {
        name: 'img',
        attrs: {
            src: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
            title: 'Title'
        }
    },
    {
        name: 'p',
        attrs: {
            className: 'paragraph',
            innerText: '***',
        }
    },
    {
        name: 'footer',
        attrs: {
            className: 'footer',
            innerText: 'Omfg!'
        }

    }
]

var style = document.head.appendChild(
    document.createElement('style')
)
style.textContent = `
  .footer,.paragraph,.div,.section,.header {
    height: 100px;
        width: 100px;
    padding: 20px;
  }
  img{
    width: 200px;
  }
  .footer {
        background-color: gray;
  }
  .paragraph {
        background-color: yellow;
     
  }
  .div {
        background-color: purple;
     
  }
  .section {
        background-color: green;
     
  }
  .header {
        background-color: orange;
     
  }
`

function clickHandler(event){
    function randomColor(){
        return Math.round(Math.random() * 255)
    }
    event.target.style.color = `rgb(${randomColor()},${randomColor()},${randomColor()})`
}
for(var tag of tags){
    var elem = document.body.appendChild(
        document.createElement(`${tag.name}`)
    )
    for(var attr in tag.attrs)
        elem[attr] = tag.attrs[attr]
    elem.onclick = function (event){
        clickHandler(event)
    }
}