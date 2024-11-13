let div = document.querySelector('#div1');

let element = document.createElement('h3');
element.setAttribute("class","el-class");
element.setAttribute("id","el-id");
element.innerText = 'javascript';
div.append(element);

let divAdd = document.createElement('div');
divAdd.setAttribute("class","div-class-3");
divAdd.setAttribute("id","div-id-3");
let element2 = document.createElement('h1');
element2.innerText='jai ho';
divAdd.append(element2);
div.append(divAdd);


let hiddenContent = document.getElementById('#hidden-div');
let btn = document.querySelector('#btn-id');
btn.addEventListener('click',()=>{
    hiddenContent.classList.toggle('block');
});
