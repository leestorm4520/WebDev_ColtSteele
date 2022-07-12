var option;
var list=[];
while(option!="quit"){
    option=prompt("What do you would like to do?");

    switch(option){
        case "new":
            var add=prompt("What todo to add?");
            list.push(add);
            console.log(add+" added to List");
            break;
        case "list":
            for(var todo in list) console.log(todo);
            break;
        case "delete":
            var remove=prompt("What todo to remove?");
            const index=list.indexOf(remove);
            if(index>-1){
                list.splice(index, 1);
                consolog.log(remove+" removed from List");
            }
            else console.log(remove+ " not in List");
            break;
        case "quit":
            break;
        default:
    }

}