function move(id){
    var selected = document.getElementById(id);
    var list1 = selected.parentNode;
    var list2;
    if(list1.id == "list1"){
        list2 = document.getElementById("list2");
    }else{
        list2 = document.getElementById("list1");
    }
    list2.appendChild(selected);
    list1.removeChild(selected);
}