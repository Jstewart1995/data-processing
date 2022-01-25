//use location object to access querystring (address bar)
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i =0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
const queryString = window.location.search;
let myData = '';
let myCart = '';//will store cart details
let myTotal = 0;//will sgtore total cost

if(queryString != ""){

    //separate querystring parameters
    const urlParams = new URLSearchParams(queryString);

    
    urlParams.forEach(function(value, key) {
        if(key=="Cart"){//Proces cart
            switch(value){
                case "Widget":
                    myCart += "Widget: $3.99<br />";
                    myTotal += 3.99;
                break;

                case "Sprocket":
                    myCart += "Sprocket: $5.99<br />";
                    myTotal += 5.99;
                break;

                case "Thingy":
                    myCart += "Thingy: $1.99<br />";
                    myTotal += 1.99;
                break;
            }
        }else{//build shipping Info
        //https://stackoverflow.com/questions/542232/in-javascript-how-can-i-perform-a-global-replace-on-string-with-a-variable-insi
        //will replace underscore with spaces
        switch(key){
            case "First_Name":
            case "Last_Name":
            case "Address":
            case "city":
                value = titleCase(value);
        }
        key = key.split("_").join(" ");
        myData += `<p>${key}: ${value}</p>`;
        }


        
    });
    
    myCart = `
    
        <p><b>Cart Contents</b></p>
        <p>${myCart}</p>
        <p>Total: $${myTotal}</p>
        `;

    myData = myCart + "<p><b>Shipping Information</b></p>" + myData;
    myData += `<p><a href="index.html">CLEAR</a></p>`;

    document.getElementById("output").innerHTML = myData;


}


    