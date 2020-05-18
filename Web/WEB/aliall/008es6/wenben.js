function createElementWidthTxt(tagName,txt){
    var node=document.createElement(tagName);
    var text=document.createTextNode(txt);
    node.appendChild(text);
    return node;
}