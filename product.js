const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id")
// console.log(urlParams.get("id"));

const url = "https://kea-alt-del.dk/t7/api/products/" + id;
// const url = "https://kea-alt-del.dk/t7/api/products/1163";

fetch(url)
  .then(res => res.json())
  .then(data => showProduct(data));

//populate the page

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .productType").textContent = product.category;
  document.querySelector(".breadcrumbs .productName").textContent = product.productdisplayname;

  // description
  const brandInfo = document.querySelector(".brandInfo p");
  console.log(brandInfo);
  brandInfo.innerHTML = product.description;
  // document.querySelector(".brandInfo p").textContent = product.description;

  //image 


  document.querySelector("img.product-pic").src= `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("img.product-pic").alt= product.productdisplayname;
}
