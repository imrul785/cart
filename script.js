// Here is add item into cart
var addCartbtns = document.getElementsByClassName("cart-btn");
for(i = 0; i< addCartbtns.length; i++){
    var addcart = addCartbtns[i];
    addcart.addEventListener('click', additem);
}
function additem(event){
    var addbtnclicked = event.target;
    var cartEl = addbtnclicked.parentElement;
    var pimage = cartEl.children[0].src;
    var pname = cartEl.children[1].innerText;
    var pprice = cartEl.children[2].innerText;
    var qtyup = 1;
    productElement(pimage, pname, pprice, qtyup);
}

// Here is Product table update
var ItemCountN = document.getElementsByClassName('count')[0];
function countX(){
    ItemCountN.innerHTML = "0";
}

var tBody = document.getElementsByTagName('tbody')[0];
function productElement(pimage, pname, pprice, qtyup){
    var createTable = document.createElement('tr');
    var Titlename = document.getElementsByClassName('name');
    var ItemCount = document.getElementsByClassName('count')[0];
    ItemCount.innerHTML = Titlename.length+1;
    for(i = 0; i < Titlename.length; i++){
        if(Titlename[i].innerText == pname){
            alert("This Product already added");
            return
        }
        
    }
    
    createTable.innerHTML = `
    <td><img src="${pimage}" alt="" class="cart-img"></td>
    <td><strong class="name">${pname}</strong></td>
    <td><strong class="price">${pprice}</strong></td>
    <td>
        <div class="qty">
            <!--<i class='bx bx-minus decnum' ></i>-->
            <input type="number" value="${qtyup}" min="1" class="input-filed">
            <!--<i class='bx bx-plus incnum' ></i>-->
        </div>
    </td>
    <td><strong class="subtotal">${pprice}</strong></td>
    <td><span class="remove-btn"><i class='bx bx-x' ></i></span></td>`
tBody.append(createTable);
for(i = 0; i < removeBtns.length; i++){  //remove from cart
    var removebtn = removeBtns[i];
    removebtn.addEventListener("click", removeitem)
}
// for(i = 0; i < incrementBtn.length; i++){
//     var button = incrementBtn[i];
//     button.addEventListener('click', incnumber)
// }
// for(i = 0; i < decrementBtn.length; i++){
//     var button = decrementBtn[i];
//     button.addEventListener('click', decnumber)
// }
for(i = 0; i < upcount.length; i++){
    qtyup = upcount[i];
    qtyup.addEventListener('change', updatenewvalue);  
}
totalcartamount();
}

// Here is Remove item from cart
var removeBtns = document.getElementsByClassName("remove-btn");
for(i = 0; i < removeBtns.length; i++){
    var removebtn = removeBtns[i];
    removebtn.addEventListener("click", removeitem)
} 
function removeitem(event){
    var buttonclicked = event.target;
    var remove = buttonclicked.parentElement.parentElement.parentElement.remove();
    totalcartamount();
    
    //clearcart();
    countX()
}

// Here is Quantity Update

// var incrementBtn = document.getElementsByClassName('incnum');
// var decrementBtn = document.getElementsByClassName('decnum');
// console.log(incrementBtn)
// console.log(decrementBtn)

// Here is Quantity Increement
// function incnumber(event){
//     var btnclicked = event.target;
//     // console.log(btnclicked)
//     var input = btnclicked.parentElement.children[1];
//     var get = btnclicked.parentElement.parentElement.parentElement;
//     console.log(get)
//     var inputValue = input.value;
//     var newValue = parseInt(inputValue) + 1;
//     if(newValue >= 1){
//         input.value = newValue;
//     }
//     else{
//         alert("Quantity can not be less than One")
//     }
//     updateVal(newValue)
// }
// Here is Quantity Decreement
// for(i = 0; i < decrementBtn.length; i++){
//     var button = decrementBtn[i];
//     button.addEventListener('click', decnumber)
// }
// function decnumber(event){
//     var btnclicked = event.target;
//     // console.log(btnclicked)
//     var input = btnclicked.parentElement.children[1];
//     var get = btnclicked.parentElement.parentElement.parentElement;
//     console.log(get)
//     var inputValue = input.value;
//     var newValue = parseInt(inputValue) - 1;
//     if(newValue >= 1){
//         input.value = newValue;
//     }
//     else{
//         alert("Quantity can not be less than One")
//     }
//     updateVal(newValue)
// }

// Here is Update subtotal Amount


// function updateVal(newValue, e){
//     var upval = e.target;
//     var hhh = upval.parentElement.parentElement.parentElement;
//     // console.log(upval)
//     var mainprice = hhh.getElementsByClassName('price')[0];
//     var newmain = mainprice.innerHTML.replace('$', ' ');
//     var subtotalval = hhh.getElementsByClassName('subtotal')[0];
//     var itemprices = parseFloat(newmain * upval);
//     subtotalval.innerText = '$' + itemprices;
    
// }

var upcount = document.getElementsByClassName('input-filed');
// for(i = 0; i < upcount.length; i++){
//     updatecount = upcount[i];
//     updatecount.addEventListener('click', updatenewvalue);  
// }
function updatenewvalue(event){
    var buttonclicked = event.target;
    var parentEl = buttonclicked.parentElement.parentElement.parentElement;
    console.log(buttonclicked.value);
    var mainprice = parentEl.getElementsByClassName('price')[0];
    var newmain = mainprice.innerHTML.replace('$', ' ');
    var subtotalval = parentEl.getElementsByClassName('subtotal')[0];
    var itemprices = parseFloat(buttonclicked.value * newmain);
    var itemprice = Math.round(itemprices * 100) / 100;
    subtotalval.innerText = '$' + itemprice;
    totalcartamount();
}

function totalcartamount(){
    var total = 0;
    var updateSubtotal = document.getElementsByClassName('subtotal');
    var totalAmount = document.getElementsByClassName('total-amount')[0];
    var deliveryAmount = document.getElementsByClassName('delivery-amount')[0];
    var discountAmount = document.getElementsByClassName('discount-amount')[0];
    for(i = 0; i < updateSubtotal.length; i++){
        var updatesubtotalAmount = parseFloat(updateSubtotal[i].innerText.replace('$', ' '));
        // console.log(updatesubtotalAmount);
        // var updatedelivery = parseInt(deliveryAmount.innerText.replace('$', ' '));
        // var updateddiscount = parseInt(discountAmount.innerText.replace('$', ' '));
        // var deliverycharge = updatesubtotalAmount / 15;
        // var deliverycharge = Math.round(deliverycharge * 100) / 100;
        // var updateddiscountx = updatesubtotalAmount / 30;
        // var updateddiscountx = Math.round(updateddiscountx * 100) / 100;
        // var updateTotal = updatesubtotalAmount + deliverycharge + updateddiscountx;
        // // console.log(updateTotal)
        // deliveryAmount.innerHTML = '$' + deliverycharge;
        // discountAmount.innerHTML = '$' + updateddiscountx;
        total += updatesubtotalAmount;
    }
        var totals = Math.round(total * 100) / 100;
        totalAmount.innerHTML = '$ ' + parseFloat(totals);
    

}

function totalAm(){
    var totalAmountA = document.getElementsByClassName('total-amount')[0];
    totalAmountA.innerHTML = "$00.00";
}

function deliveryDis(){
    var deliveryAmountN = document.getElementsByClassName('delivery-amount')[0];
    var discountAmountN = document.getElementsByClassName('discount-amount')[0];
    deliveryAmountN.innerHTML = "$00.00";
    discountAmountN.innerHTML = "$00.00";
}

// Here is Check Out Button
var checkoutBtn = document.getElementsByClassName('checkout')[0].addEventListener('click', checkout);
function checkout(){
    alert('Your Order is placed');
    var clearContent = document.getElementsByClassName('cart-content')[0];
    while(clearContent.hasChildNodes()){
        clearContent.removeChild(clearContent.firstChild);
    }
    totalcartamount()
    deliveryDis()
    totalAm()
    countX()
}
// Here is Clear Cart Button
var cleartBtn = document.getElementsByClassName('clear-cart')[0].addEventListener('click', clearcart);
function clearcart(){
    var clearContent = document.getElementsByClassName('cart-content')[0];
    while(clearContent.hasChildNodes()){
        clearContent.removeChild(clearContent.firstChild);
    }
    totalcartamount()
    deliveryDis()
    totalAm()
    countX()
}






