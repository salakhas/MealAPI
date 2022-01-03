console.log("Welcome to menu.js")


let i=52772;
//fetching meal information
async function meals(){
    console.log("Hi")
    try{
        console.log("Hi")
       while(i<53000){
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${i}`);
        console.log('res:', res)
        let data = await res.json();
        if(data.meals===null){
            return false;
        }
        console.log('data:', data.meals)
        i++;
        displayMeals(data.meals);
       }
    }
    catch(err){
        console.log('err:', err)
    }
}
meals();

let num=-1;

function Meal(img,name,price){
    this.strMealThumb =  img;
    this.strMeal = name;
    this.price = price;
    this.id=num;
}
    
//function to display meals
function displayMeals(data){
    let container = document.getElementById('container');
    //data.forEach(function(el){
        let innerDiv = document.createElement('div');
        innerDiv.style.width="100%";
        innerDiv.style.height="200px";
        innerDiv.style.border="1px solid black";
        innerDiv.style.margin="5px";
        innerDiv.style.display="flex";

        let img = document.createElement('img');
        img.style.width="30%";
        img.style.height="100%";
        img.src=data[0].strMealThumb;

        let divs = document.createElement('div');
        divs.style.width="60%";
        divs.style.height="100%";
        divs.style.padding="10px";
        divs.style.paddingLeft="30px";
        let nameOfmeal = document.createElement('h2');
        nameOfmeal.innerText = data[0].strMeal;
        
        let price = document.createElement('p');
        let value = Math.floor(Math.random()*(500-100)+100);
        price.innerText = `Price: ${value}`;

        let addToCart = document.createElement('button');
        addToCart.innerText="Add to Cart";
        addToCart.style.padding="5px";
        addToCart.style.marginTop="20px"
        addToCart.style.backgroundColor="brown";
        addToCart.style.color="white";
        num++;
        var item = new Meal(data[0].strMealThumb,data[0].strMeal,value,num);
        
        console.log("line70")
        addToCart.onclick= function(e){
            e.preventDefault();
            console.log("onClick function")
            let myCart = localStorage.getItem('cart');
            if(myCart === null){
                myCart=[];
                myCart.push(item);
            }
            else{
                myCart = JSON.parse(myCart);
                myCart.push(item);
            }
            localStorage.setItem('cart',JSON.stringify(myCart));
            console.log("Hi")

            updateCart();
        }
        
        
        divs.append(nameOfmeal,price,addToCart);
        innerDiv.append(img,divs);
        container.append(innerDiv)

        
   // })
}

function updateCart(){
    console.log("Hi")
    let countDiv = document.getElementById('mealCount');
    let cartItems = JSON.parse(localStorage.getItem('cart'));
    let h1=document.createElement("h2");
    countDiv.innerHTML="";
    h1.style.paddingLeft="40%"
    h1.innerHTML=`Cart: ${cartItems.length}`;
    countDiv.append(h1)
}
updateCart();

let countDiv = document.getElementById('mealCount');
let button = document.createElement('button');
button.innerHTML=`<a class="cartButton" href="cart.html">Click here to see cart</a>`;
button.style.padding="5px";
button.style.marginLeft="40%";
button.style.backgroundColor="brown";
button.style.color="white";
countDiv.append(button)
