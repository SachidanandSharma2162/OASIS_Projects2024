const input=document.getElementById('input-text')
const list=document.getElementById('list')

const button=document.getElementById('input-button')

button.addEventListener("click",(e)=>{
    e.preventDefault();
    if (input.value==='') {
        alert('Please enter some todos to add!');
    } else {
        let li=document.createElement('li');
        li.innerHTML=input.value;
        list.appendChild(li);


        let span=document.createElement('span');
        span.innerHTML="\u00d7"
        span.classList.add('span')
        li.appendChild(span);
    }
    input.value=""
    saveData();
})


list.addEventListener('click',(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle('checked')
        saveData();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false)

const saveData=()=>{
    localStorage.setItem("data",list.innerHTML)
}

const showList=()=>{
    list.innerHTML=localStorage.getItem("data");
}
showList();