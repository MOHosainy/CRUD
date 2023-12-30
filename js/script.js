var productName= document.getElementById("productName");
var productPrice= document.getElementById("productPrice");
var productData= document.getElementById("productDate");

var searchProduct=document.getElementById("search")

var updateBtn=document.getElementById("updatebtn")
var addBtn=document.getElementById("addbtn")

var massageName=document.getElementById("massagename")

var massagePrice=document.getElementById("massageprice")

var massageDate =document.getElementById("massagedate")

// var index;

var indexUpdate=0;

var product=[];

if(localStorage.getItem("products") !=null)
{
    
product=JSON.parse(localStorage.getItem("products"))
displayData()




}


function print(){
   
    if(regaxName()==true && regaxPrice()==true &&   regaxDate()==true)
    {

   

    var productObject={
        name:productName.value,
        price:productPrice.value,
        data:productData.value

    }


    product.push(productObject)
    localStorage.setItem("products",JSON.stringify(product))
    displayData();
    clear();


}

}

function displayData(){

    
    var cartona=''
    for( var i=0; i<product.length;i++){
        cartona +=
        `
        <tr>
        <td>${product[i].name}</td>
        <td>${product[i].price}</td>
        <td>${product[i].data}</td>
        <td><button class="btn btn-outline-warning btn-sm" onclick="setData(${i})">update</button>&nbsp &nbsp
        <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(${i}) ">delete</button></td>
        </tr>
        `

    }

    // console.log(cartona)

    document.getElementById("tableData").innerHTML=cartona
    
}

function deleteProduct(Element){
    // alert(Element)
    product.splice(Element,1)
    document.getElementById("productName").value=""
    document.getElementById("productPrice").value=""
    document.getElementById("productDate").value=""


    localStorage.setItem("products",JSON.stringify(product))

    displayData()
}

function searchInput(){
    var term=searchProduct.value;


    var cartona="";
    for( var i=0; i<product.length;i++){

        if(product[i].name.toLowerCase().includes(term.toLowerCase()))
        {

        cartona +=
        `<tr>
        <td>${product[i].name}</td>
        <td>${product[i].price}</td>
        <td>${product[i].data}</td>
        <td><button class="btn btn-outline-warning btn-sm" onclick="setData(${i})">update</button>&nbsp &nbsp
        <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(${i}) ">delete</button></td>
        </tr>
        `;
        }

    }

    // console.log(cartona)

    document.getElementById("tableData").innerHTML=cartona


}

function setData(index){
    indexUpdate=index

    var currntProduct=product[index]

    productName.value=currntProduct.name

    productPrice.value=currntProduct.price

    productData.value=currntProduct.data

    updateBtn.classList.remove("d-none")

    addBtn.classList.add("d-none")



}

function updateProduct(){
    var productObject={
        name:productName.value,
        price:productPrice.value,
        data:productData.value

    };
    product.splice(indexUpdate,1,productObject)
    localStorage.setItem("products",JSON.stringify(product))

    displayData();

    updateBtn.classList.add("d-none")

    addBtn.classList.remove("d-none")
    clear();
}

function clear(){
    productName.value="";
    productPrice.value="";
    productData.value="";

}


function regaxName(){
    var regax=/^[A-z][a-z]{2,8}$/

    var text=productName.value;

    if(regax.test(text)==true){
        productName.classList.add("is-valid")
        productName.classList.remove("is-invalid")
        massageName.classList.add("d-none")

        return true;


    }
    else{
        productName.classList.add("is-invalid")
        productName.classList.remove("is-valid")
        massageName.classList.remove("d-none")

        return false;
    }


}


function regaxPrice(){
    var regaxprice=/^[1-10]{8,10}$/
    var textprice=productPrice.value;
    if(regaxprice.test(textprice)==true)
    {
        productPrice.classList.add("is-valid")
        productPrice.classList.remove("is-invalid")

        massagePrice.classList.add("d-none")
        return true;

    }
    else{
        
        productPrice.classList.add("is-invalid")
        productPrice.classList.remove("is-valid")
        massagePrice.classList.remove("d-none")

        return false;



    }
}


function regaxDate(){
    var regaxdate=/^[6-8]{2,9}$/
    var textdate=productData.value;

    if(regaxdate.test(textdate)==true)
    {
        productData.classList.add("is-valid")

        productData.classList.remove("is-invalid")

        massageDate.classList.add("d-none")

        return true;


    }
    else{
        productData.classList.add("is-invalid")
        productData.classList.remove("is-valid")
        massageDate.classList.remove("d-none")

        return false;

    }
}