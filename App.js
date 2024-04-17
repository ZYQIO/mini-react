// v1
// const dom = document.createElement('div');
// dom.id = 'app'
// document.querySelector('#root').append(dom)

// const textNode = document.createTextNode('hello world')

// textNode.nodeValue = 'app'

// dom.append(textNode)

// v2 --> react -> dom -> js object

// type props children

// const textEL = {
//     type: "TEXT_ELEMENT",
//     props: {
//         nodeValue: "app",
//         children: []
//     }
// }


import React from "./core/React.js";

const App = React.createElement('div', { id: 'app' }, "hi-", "hello")

export default App;