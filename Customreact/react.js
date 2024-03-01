const mainContainer = document.querySelector('#root')
function customRender(reactElement,container) {
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML =reactElement.children
    domElement.setAttribute('href.reat
    
}
const reactElement = {
    type:'a',
    props:'https://google.com'
    // target : '_blank',
}
children: 'Click me to vist google'
customRender(reactElement,mainContainer)