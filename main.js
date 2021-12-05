menu_list_array = ["Veg Margherita Pizza", "Chicken Tandoori Pizza", "Veggie Deluxe Pizza", "Paneer Tikka Pizza", "Veg Extravaganza Pizza"];
                    

function getmenu(){
var htmldata;
htmldata="";
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu  
}

function add_item(){
var htmldata;
//var item_1=document.getElementById("menu_item_1").value;
//var item_2=document.getElementById("menu_item_2").value;
//var item_3=document.getElementById("menu_item_3").value;
//var item_4=document.getElementById("menu_item_4").value;
//var item_5=document.getElementById("menu_item_5").value;
        // use the sort function as - menu_list_array.sort();
        menu_list_array.sort();
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i]+'<br>';
        }
        console.log(htmldata);
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
