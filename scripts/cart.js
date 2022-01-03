
let data = JSON.parse(localStorage.getItem('cart'));
var count=0;
let priceTotal = 0;
displayMeals(data,count);


function displayMeals(data,count){
    let container = document.getElementById('containers');
    data.forEach(function(el){
        let innerDiv = document.createElement('div');
        innerDiv.style.width="100%";
        innerDiv.style.height="200px";
        innerDiv.style.border="1px solid";
        innerDiv.style.margin="5px";
        innerDiv.style.display="flex";

        let img = document.createElement('img');
        img.style.width="30%";
        img.style.height="100%";
        img.src=el.strMealThumb;

        let divs = document.createElement('div');
        divs.style.width="60%";
        divs.style.height="100%";
        divs.style.padding="10px";
        divs.style.paddingLeft="30px";
        let nameOfmeal = document.createElement('h2');
        nameOfmeal.innerText = el.strMeal;
        
        let price = document.createElement('p');
        price.innerText = `Price: ${el.price}`;

        let removeToCart = document.createElement('button');
        removeToCart.innerText="Remove from Cart";
        removeToCart.style.padding="5px";
        removeToCart.style.marginTop="20px"
        removeToCart.style.backgroundColor="brown";
        removeToCart.style.color="white";
        innerDiv.id = el.id;
        let ids = el.id;
       
        let totalPrice=document.getElementById('totalPrice');
        totalPrice.innerHTML=`<h2 style="text-align: center;">Total Price: ${data.length}</h2>`


        removeToCart.onclick= function(e){
            e.preventDefault();
            let div = document.getElementById(ids);
            div.innerHTML = "";
            div.style.height="0px"
            console.log('ids:', ids);
            let cartItems = JSON.parse(localStorage.getItem('cart'));
            let newArray=[];
            for(let i=0; i<cartItems.length; i++){
                if(cartItems[i].id === ids){
                    console.log(cartItems[i])
                }
                else{
                    newArray.push(cartItems[i]);
                }
            }
            console.log('newArray:', newArray)
            localStorage.setItem('cart',JSON.stringify(newArray));
            let priceDiv  = document.getElementById('totalPrice');
            priceDiv.innerHTML=null;
            priceDiv.innerHTML=`<h2 style="text-align: center;">Total Price: ${newArray.length}</h2>`

            
        }
        
        divs.append(nameOfmeal,price,removeToCart);
        innerDiv.append(img,divs);
        
       
        container.append(innerDiv);

        count++;
    })
}

