//step01: Create an XHR object

var request = new XMLHttpRequest();
//step:02: create a connection

request.open('GET', 'https://api.openbrewerydb.org/breweries', true);
//step:03: send a request

request.send();
//step04 : once data successfully received from server

request.onload = async function loadUsers(){
    
    const response = await fetch("https://api.openbrewerydb.org/breweries");
    //conversion of string to array of json objects...
    var data = await JSON.parse(request.response);
    //console.log(data);
    for(var i = 0; i < data.length; i++){
             var myDiv = document.createElement("div");
             myDiv.innerHTML = "Name: "+data[i].name + "<br>" + "Brewery_Type: " +data[i].brewery_type+ "<br>" + "Brewery's Address: " +data[i].street+ "," +data[i].city+ "," +data[i].state+ "," +data[i].postal_code+ "," +data[i].country+"."+ "<br>" + "Website_Url: " +data[i].website_url+ "<br>" + "Brewery_Phone: " +data[i].phone+".";
             const randomColor = Math.floor(Math.random()*16777215).toString(16);
             myDiv.style.color =  '#' + randomColor;
             myDiv.style.marginBottom = "5px";
             myDiv.style.backgroundColor = "black";
             console.log(data[i].name + " " +data[i].brewery_type+ " " +data[i].street+ " " +data[i].city+ " " +data[i].state+data[i].postal_code+ " " +data[i].country+ " " +data[i].website_url+ " " +data[i].phone);
             document.body.appendChild(myDiv);
    } 
    return data;


}

document.addEventListener("DOMContentLoaded", async () => {
    let data = [];
    try{
        data = await loadUsers();
    }catch(e){
        console.log("Error..!");
    }
    console.log(data);
});

