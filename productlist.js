let url = "";// "https://kea-alt-del.dk/t7/api/products";

// Parameters given from other page
const urlParams = new URLSearchParams(window.location.search);
console.log("URL params: " + urlParams);
const category = urlParams.get("category");
console.log("category param: " + category);

if (category == "Accessories") {
    url = "https://kea-alt-del.dk/t7/api/products?limit=40&category=Accessories";
    // set the category title based on category parameter
    document.querySelector("#categoryTitle").textContent = "Accessories";
} else if(category == "Apparel") {
    url = "https://kea-alt-del.dk/t7/api/products?limit=40&category=Apparel";    
    document.querySelector("#categoryTitle").textContent = "Apparel";
} else if(category =="Footwear"){
    url ="https://kea-alt-del.dk/t7/api/products?limit=40&category=Footwear"
    document.querySelector("#categoryTitle").textContent = "Footwear";
} else if(category =="FreeItems"){
    url ="https://kea-alt-del.dk/t7/api/products?limit=40&category=Free%20Items"
    document.querySelector("#categoryTitle").textContent = "Free Items";
}else if(category =="PersonalCare"){
    url ="https://kea-alt-del.dk/t7/api/products?limit=40&category=Personal%20Care"
    document.querySelector("#categoryTitle").textContent = "Personal Care";
}else if(category =="Sport"){
    url ="https://kea-alt-del.dk/t7/api/products?limit=40&category=Sporting%20Goods"
    document.querySelector("#categoryTitle").textContent = "Sport";
}
else {
    url = "https://kea-alt-del.dk/t7/api/products";
}



 fetch(url)
 .then(function(res){
     return res.json();
 })
 .then(function(data){
    handleProductList(data);
 })

 function handleProductList(data){
    //  console.log(data)
    data.forEach(showProduct);
 }





//  <article class="smallProduct">
    //  <img src="images/1566.webp" alt="image" class="img-list">
    //  <h3> Black Cap</h3>
    //  <p class="subtle">Accessories | Artengo</p> DONE
    //  <p class="price"><span>Prev.</span> DKK 299,-</p>
    //  <div class="discounted">
    //    <p>Now DKK 1560,-</p>
    //    <p>-34%</p>
    //  </div>
    //  <a href="product.html">Read More</a>
// </article>





 function showProduct(product){
     console.log(product);
    //  grab the template
    const template = document.querySelector("#smallProductTemp").content;

    const copy = template.cloneNode(true);
// url
 copy.querySelector("a").setAttribute("href", `product.html?id=${product.id}`)



    // content
    copy.querySelector(".subtle").textContent = `${product.articletype} | ${product.brandname}`;
    copy.querySelector("h3").textContent = product.productdisplayname;

    copy.querySelector("img").src= `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    copy.querySelector(".price").textContent = `Prev. DKK ${product.price},-`;
    if(product.soldout){
        copy.querySelector("article").classList.add("soldOut");
    }
    if(product.discount){
        copy.querySelector("article").classList.add("onSale");
// <div class="discounted">
    //    <p>Now DKK 1560,-</p>
    //    <p>-34%</p>
    //  </div>
    copy.querySelector(".discounted p span").textContent = Math.floor(product.price-((product.price * product.discount)/100));
    }

    const parent = document.querySelector("main");

    parent.appendChild(copy);
 }