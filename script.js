const product = [
    {name:"product1" , price:1000, info:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." , Image:"e5c481b3f10547fcac91c3aced62b82a.jpg"},
    {name:"product2" , price:2000, info:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." , Image:"e5c481b3f10547fcac91c3aced62b82a.jpg"},
    {name:"product3" , price:3500, info:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." , Image:"e5c481b3f10547fcac91c3aced62b82a.jpg"},
    {name:"product4" , price:5000, info:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." , Image:"e5c481b3f10547fcac91c3aced62b82a.jpg"},
    {name:"product5" , price:6200, info:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." , Image:"e5c481b3f10547fcac91c3aced62b82a.jpg"},
    {name:"product6" , price:3000, info:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." , Image:"e5c481b3f10547fcac91c3aced62b82a.jpg"},
    {name:"product7" , price:9500, info:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." , Image:"e5c481b3f10547fcac91c3aced62b82a.jpg"},
    {name:"product8" , price:1200, info:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." , Image:"e5c481b3f10547fcac91c3aced62b82a.jpg"}
];

function showprice (data){
    
    let container = document.querySelector('.grid-container');

    data.forEach((product) => {
        
        const productDiv = document.createElement("div");
        productDiv.classList.add("grid-item");
        
        const nameElement = document.createElement('h1');
        nameElement.textContent = product.name;
        nameElement.classList.add("mm");
        
        const imgElement = document.createElement('img');
        imgElement.src = product.Image;
        imgElement.alt = product.name;
        imgElement.classList.add("image")

        const infoElement = document.createElement('p');
        infoElement.textContent = `توضیحات: ${product.info}`;
        infoElement.classList.add("info");


        const priceElement = document.createElement('p');
        priceElement.textContent = `قیمت: ${product.price} تومان`;
        priceElement.classList.add("value");

        const shopbtn = document.createElement("button")
        shopbtn.classList.add("shop");
        shopbtn.textContent = "خرید نهایی";

        shopbtn.addEventListener("click",()=>{
            const selectedProductPrice = product.price;
            let currentprice = parseInt(localStorage.getItem('finalshop')) || 0;
            const finalshop =  selectedProductPrice + currentprice;
            localStorage.setItem('finalshop', finalshop);
            document.getElementById('prudoctprice').textContent = `${finalshop} تومان`;
            console.log(finalshop);
        });
        
        productDiv.appendChild(nameElement);
        productDiv.appendChild(imgElement);
        productDiv.appendChild(infoElement);
        productDiv.appendChild(priceElement);
        productDiv.appendChild(shopbtn);

        container.appendChild(productDiv);
    });
}

showprice(product);
const savedPrice = localStorage.getItem('finalshop');
if (savedPrice) {
    document.getElementById('prudoctprice').textContent = `${savedPrice} تومان`;
}
//popup code....


document.getElementById("addProductButton").addEventListener("click", function() {
    document.getElementById("popup").style.display = "flex";
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

let submitForms = document.querySelector("#save")

//**** */
submitForms?.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const phone = document.getElementById("phone").value;
    const prudoctname = document.getElementById("prudoctname").value;
    const pricenow = document.getElementById("pricenow").value;

    if (phone && prudoctname && pricenow) {
        const newProductDiv = document.createElement("div")
        newProductDiv.classList.add("grid-item");

        const nameElement = document.createElement("h2");
        nameElement.textContent = prudoctname;
        nameElement.classList.add("aa");

        const phoneElement = document.createElement("p");
        phoneElement.textContent = `شماره ملی: ${phone}`;
        phoneElement.classList.add("yy");

        const priceElement = document.createElement("p");
        priceElement.textContent = `قیمت: ${pricenow} تومان`;
        priceElement.classList.add("kk");
        
        newProductDiv.appendChild(nameElement);
        newProductDiv.appendChild(priceElement);
        newProductDiv.appendChild(phoneElement);
        
        document.querySelector('.grid-container').appendChild(newProductDiv);
        document.getElementById("save").reset();
        document.getElementById("popup").style.display = "none";
    } else {
        alert("لطفاً تمام فیلدها را پر کنید.");
    }

})

//زمانیکه روی هرجایی از سایت غیر از پاپ آپ کلیک کردیم بسته بشه
window.addEventListener("click", function(event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});


document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.toLowerCase(); // دریافت مقدار جستجو و تبدیل به حروف کوچک
    const filteredProducts = product.filter(prod => prod.name.toLowerCase().includes(query)); // فیلتر کردن محصولات بر اساس جستجو

    // پاک کردن محصولات فعلی از صفحه
    const container = document.querySelector('.grid-container');
    container.innerHTML = '';

    // نمایش محصولات فیلتر شده
    if (filteredProducts.length > 0) {
        showprice(filteredProducts);
    } else {
        container.innerHTML = '<p style="text-align: center; font-size: 20px; color: white;">هیچ محصولی یافت نشد.</p>';
    }
});

// جستجو با تایپ مستقیم در ورودی (اگر نیاز باشد)
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredProducts = product.filter(prod => prod.name.toLowerCase().includes(query));

    const container = document.querySelector('.grid-container');
    container.innerHTML = '';

    if (filteredProducts.length > 0) {
        showprice(filteredProducts);
    } else {
        container.innerHTML = '<p style="text-align: center; font-size: 20px; color: white;">هیچ محصولی یافت نشد.</p>';
    }
});


