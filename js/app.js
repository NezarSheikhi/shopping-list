$(function () {
    var hotDrinks = [
        {name:'Coffee', price:10, id:1, picture:'pic/coffee.jpg'}, 
        {name:'Tea', price:5, id:2, picture:'pic/tea.jpg'}, 
        {name:'Espresso', price:15, id:3, picture:'pic/espresso.jpg'}, 
        {name:'Hot Chocolate', price:25, id:4, picture:'pic/hot-chocolate.jpg'},
        {name:'Milo', price:20, id:5, picture:''}, 
        {name:'Cappuccino', price:30, id:6, picture:''}
    ]
    var shoppingList = [];

    var appendList = function (array, location) {
        var template = array.map(function (item, id) {
            return `<li class="product col-3">
                <img src="${item.picture}" alt="">
                <div class="product-content">
                <h4>${item.name} 
                <small>${item.price}kr</small>
                 </h4>
                </div>
                <button type="button" id="${item.id}">Köp Nu</button>
            </li>`;
        });
        $(location).html(template);
    };

    appendList(hotDrinks, $('.product-list'));
});
