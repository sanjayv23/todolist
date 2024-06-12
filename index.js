var text;

var a=document.getElementById("task");

var textnode

var todos=[];

var node


$("input").keyup(function(event){
        
        
    text=event.target.value;
    
    
});

$("#taskbutton").click(function(){
   
    
    todos.push(text);
   
    add(text);
    $("#myform").val('');
    $('input[type="text"]').val('');

});

function add(text){
    
    let para=document.createElement('p');
    para.innerText=text;
    a.appendChild(para);
    
    
    para.addEventListener("click",function(){
        $(para).css("textDecoration","line-through");
        remove(para);
    });
    
    
    para.addEventListener("dblclick",function(){
        
        a.removeChild(para);
        remove(para)
    });
    
}
function remove(todo){
    
    let index = todos.indexOf(todo);
    
    if (index > -1) {
        todos.splice(index, 1);
    }
    
}

$("#clearbutton").click(function () {
    a.remove();
 });

