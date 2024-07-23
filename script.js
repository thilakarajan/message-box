const form = document.getElementById('form');
const arr = [];
index=0
const accept = () => { 
    arr[index]= document.form.input.value
    alert("Your message stored successfully") ;
    index++;
    document.form.input.value ="";
}
form.addEventListener('submit',(event)=>{
    event.preventDefault();
})

const decline = () =>{
    alert("Your message not stored") ;
    document.form.input.value ="";
}


