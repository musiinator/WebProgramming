$(document).ready(function(){
    $('option').on('dblclick', function(){
        move(this.id);
    });
});

function move(id){
    var selected = $("#" + id);
    var list1 = selected.parent();
    var list2;
    if(list1.attr('id') == 'list1'){
        list2 = $('#list2');
    }else{
        list2 = $('#list1');
    }
    selected.detach();
    list2.append(selected);
}
