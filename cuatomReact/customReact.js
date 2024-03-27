// yha hmne niche custom render ka code likh custom react k liye

function customRender(reactEle,container){
    // const domElement= document.createElement(reactEle.type)
    // domElement.innerHTML=reactEle.children
    // domElement.setAttribute("href",reactEle.props.href)
    // domElement.setAttribute("target",reactEle.props.target)
    // container.appendChild(domElement)

    //for loop lga kr krenge to kitne bhi attribute de skenge 
    const domElement= document.createElement(reactEle.type)
     domElement.innerHTML=reactEle.children
     for (const prop in reactEle.props) {
        if (prop==="children") continue;
        domElement.setAttribute(prop,reactEle.props[prop])
          
     }
     container.appendChild(domElement)

}
 // niche mene custom likha bnaya jo ki render hoga custom react se

const reactElement = {
    type : 'a',
    props : {
        href : "https://www.google.com",
        target : "_blank"
    },
    children : "click me to visit"
}


const mainContainer = document.getElementById('root')

customRender(reactElement,mainContainer)