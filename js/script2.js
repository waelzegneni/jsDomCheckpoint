var removeItems = document.getElementsByClassName("remove")

for(var i=0; i < removeItems.length ; i++){
    var button = removeItems[i];
    button.addEventListener('click',function(){
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove()
        updateTotal();
        numberOfItems();
    })
}



 var MinusItems = document.getElementsByClassName('minus');

 for(var i=0; i < MinusItems.length ; i++){
     var Minus = MinusItems[i];
     Minus.addEventListener('click',function(){
        let value = event.target.nextElementSibling;
        if(value.innerText>0)
             value.innerText --;
        updateTotal()
        updateItemTotal();

    })
 }





 var PlusItems = document.getElementsByClassName('plus');

 for(var i=0; i < MinusItems.length ; i++){
     var Plus = PlusItems[i];
     Plus.addEventListener('click',function(){
        let value = event.target.previousElementSibling;
        value.innerText ++;
        updateTotal()
        updateItemTotal();
    })
 }





 var hearts = document.getElementsByClassName('heart');
 console.log(hearts)

 for(var i=0; i < hearts.length ; i++){
     var heart = hearts[i];
     heart.addEventListener("click", function(){
         if(event.target.innerHTML != '❤'){
         event.target.innerHTML = '❤'
         event.target.style.color="red";
         }
         else{
            event.target.innerHTML = '♡'
            event.target.style.color="black";
         }
     })
 }





function updateItemTotal(){
    itemsList = document.getElementsByClassName('items-list')[0];
    items = itemsList.getElementsByClassName('item');

    for(var i=0; i < items.length ; i++ ){
        var item = items[i];
        var priceElement = item.getElementsByClassName('price')[0];
        var quantityElement = item.getElementsByClassName('number')[0];
        
        var price = parseFloat(priceElement.innerText.replace('dt',''));
        var quantity = quantityElement.innerText;

        var priceItem = price*quantity;

        let total = item.getElementsByClassName('total')[0];
        
        total.innerText = priceItem + 'dt';
    }
}





function updateTotal(){
    itemsList = document.getElementsByClassName('items-list')[0];
    items = itemsList.getElementsByClassName('item');
    total = 0;

    for(var i=0; i < items.length ; i++ ){
        var item = items[i];
        var priceElement = item.getElementsByClassName('price')[0];
        var quantityElement = item.getElementsByClassName('number')[0];
        
        var price = parseFloat(priceElement.innerText.replace('dt',''));
        var quantity = quantityElement.innerText;

        total = total + price*quantity;
    }

    document.getElementById('prices').innerHTML = total + "dt";
}




function finalPrice(){
    let shpping = document.getElementById("shipping").value*1;
    let total = document.getElementById('prices');
    let totalRefined = parseFloat(total.innerText.replace('dt',''))

    let finalPrice = document.getElementById('final-price');
    finalPrice = totalRefined + shpping;
    document.getElementById("final-price").innerHTML = finalPrice +"dt";
     
}


function numberOfItems(){
    let counter = 0;
    let item = document.getElementsByClassName('item');
    for (i=0; i < item.length ; i++){
        counter += 1;
    }

    document.getElementById('number-it').innerText = counter;
}

