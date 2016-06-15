var Functions = (function () {
    
    var total = 0;
    
    function getProductName() {
        var productName = document.getElementById('name-field');
        var name = productName.value;
        productName.value = "";
        return name;
    }
    
    
    
    function getProductPrice() {
        var productprice = document.getElementById('price-field');
        var price = parseInt(productprice.value);
        productprice.value = "";           
        total += price;
        return price;
    }


    function createListItem(name, price) {
        var item = document.createElement('li');
        item.innerHTML = name+"  "+price;      
        return item;
        
    }


     function showTotal() {
        var spam = document.getElementById('total');
        spam.innerHTML = total || 0.0;
    }
    

    
    function addProduct(event) { 
        event.preventDefault();
       
        var name = getProductName();
        var price = getProductPrice();

        var newItem = createListItem(name, price);
        document.getElementById("list-products").appendChild(newItem); 
        showTotal();
    }
    

    
    function addListener() { 
        var btn = document.getElementById('btnAdd');
        btn.addEventListener('click', addProduct);
    }
    
    
    addListener();
    
    
})();