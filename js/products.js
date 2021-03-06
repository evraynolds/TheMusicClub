/*First we have a collection of variables used throughout the code
in various functions*/
var total = 0;
var subtotal=0;
var subParse= 0;
var counter=0;

var colorCounter = 255;
var endCounter = 255;

var productInfo = new Array();
var productQty = new Array();

var listOfProducts = new Array("Guitar", "Bass", "Drums", "Piano",
  "small", "medium", "large", "xlarge", "8-track", "vinyl", "cassette",
  "mp3Player")

var listOfPrice = new Array("30", "20", "50", "100", "5", "7", "10",
  "12", "5", "20", "2", "10", "1");

var compareProduct = new Array();

/*Here is the first function which will be called everytime the quantity of
products is augmented.*/
function order(instVal, musVal, shirtVal, frm){

  /*These variables take the number in the number field for each product.*/
  var instQty = frm.instrum.value;
  var musQty = frm.music.value;
  var shirtQty = frm.shirt.value;

  /*These variables will be used later to estimate total product cost*/
  var instrumTotal;
  var musTotal;
  var shirtTotal;

  /*These varibles take in the number from the cost of each group of products*/
  var instCost = document.getElementById("instCost");
  var musCost = document.getElementById("musCost");
  var shirtCost = document.getElementById("shirtCost");
  var totalCost = document.getElementById("totalCost");

/*These Switch Statements will read the product chosen by the user and the
quantity of each product and calculate the cost of the products in groups*/
switch(instVal){
  case "Guitar":
  instrumTotal = 30 * instQty
  instCost.value =  instrumTotal
  break;
  case "Bass":
  instrumTotal = 20 * instQty
  instCost.value =  instrumTotal
  break;
  case "Drums":
  instrumTotal = 50 * instQty
  instCost.value =  instrumTotal
  break;
  case "Piano":
  instrumTotal = 100 * instQty
  instCost.value =  instrumTotal
  break;
  default: break;
}

switch(musVal){
  case "8-track":
  musTotal = 5 * musQty
  musCost.value =  musTotal
  break;
  case "vinyl":
  musTotal = 20 * musQty
  musCost.value =  musTotal
  break;
  case "cassette":
  musTotal = 2 * musQty
  musCost.value =  musTotal
  break;
  case "cd":
  musTotal = 10 * musQty
  musCost.value =  musTotal
  break;
  case "mp3Player":
  musTotal = 1 * musQty
  musCost.value =   musTotal
  break;
  default: break;
}

switch(shirtVal){
  case "small":
  shirtTotal = 5 * shirtQty
  shirtCost.value = shirtTotal
  break;
  case "medium":
  shirtTotal = 7 * shirtQty
  shirtCost.value = shirtTotal
  break;
  case "large":
  shirtTotal = 10 * shirtQty
  shirtCost.value = shirtTotal
  break;
  case "xlarge":
  shirtTotal = 12 * shirtQty
  shirtCost.value = shirtTotal
  break;
  default: break;
}

/*Here the combined total of all products is calculated and then displayed
in the readOnly text field for total cost*/
total =  musTotal + instrumTotal + shirtTotal;
totalCost.value = total + subParse;

/*These following If Statements will change the background color of the page
depending on the total cost of the products*/
document.body.style.backgroundImage = "none";
document.body.style.backgroundColor = "rgb(0, 0 , "+ total + ")";

if(total > 255 ){
  var backGreen = (total - 254);
  document.body.style.backgroundColor =
  "rgb(0, "+ backGreen +"," + total + ")";

  if(total > 510){
    var backRed = (total - 509);
    document.body.style.backgroundColor =
    "rgb("+ backRed +","+ backGreen+"," + total+")";

    if(total > 765){
      var backColor = (total - 764);

      document.body.style.backgroundColor =
      "rgb(255, 255,"+colorCounter+ ")";
      colorCounter -= 10;

      if(colorCounter < 0 ){

        document.body.style.backgroundColor = "rgb(255,"+endCounter+",0)";
        endCounter -= 10;

      }
    }
  }

}
}


/*Here is the second function which stores all selected products in arrays
so that the user can select even more products from the text fileds if he/she
chooses*/
function addProducts(instEl, musEl, shEl)
{

  var iQty = document.getElementById("instrumentQty").value;
  var mQty = document.getElementById("musicQty").value;
  var sQty = document.getElementById("shirtQty").value;

  if( iQty != null && iQty != 0)
  {
    productQty[counter] = iQty;
    compareProduct[counter] = instEl;
    if(productQty[counter] > 1){
     productInfo[counter] = instEl +"s";
   }
   else{
     productInfo[counter] = instEl;
   }
   counter++;
 }

 if( mQty != null && mQty != 0)
 {
  productQty[counter] = mQty;
  compareProduct[counter] = musEl;
  if(productQty[counter] > 1){
    productInfo[counter] = musEl +"s";
  }
  else{
    productInfo[counter] = musEl;
  }
  counter++;
}

if( sQty != null && sQty != 0)
{
  productQty[counter] = sQty;
  compareProduct[counter] = shEl;
  if(productQty[counter] > 1)
  {
    productInfo[counter] = shEl + " shirts";
  }
  else{
    productInfo[counter] = shEl + " shirt";
  }
  counter++;
}

document.getElementById("instrumentQty").value = null;
document.getElementById("instCost").value = null;
document.getElementById("musicQty").value = null;
document.getElementById("musCost").value = null;
document.getElementById("shirtQty").value = null;
document.getElementById("shirtCost").value = null;

subtotal = document.getElementById("totalCost").value;
subParse = parseInt(subtotal);
totalCost.value = subParse;
subparse = 0;
}


function placeOrder(frm){

  var total = document.getElementById("totalCost").value;
  var firstName = frm.firstName.value
  var list = "";

  for(i = 0; i < productInfo.length; i++){
    list = list + " " + productQty[i] + " " + productInfo[i] + " ";

    for(k = 0; k < listOfProducts.length; k++){
      if(compareProduct[i] === listOfProducts[k])
        list = list + " worth  \xA3" + listOfPrice[k];
    }

    if(productQty[i] > 1)
    {
     list = list + " each ";
   }
   list = list + "\n";
 }

 if(total == null || total == 0){
  alert("Please order something before proceeding.")
}
else if(productQty == null || productQty == 0){
  alert("Please press the 'Add to Basket' button before proceeding.")
}
else if(firstName == null || firstName == 0){
  alert("Please enter your first name.")
}
else {alert("Dear " + firstName + ", you have ordered \n"
  + list + " for a total of \xA3" + total );
}
}

function reset(){
  document.getElementById("totalCost").value = null;

}