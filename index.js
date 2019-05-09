let billName = document.getElementById('name');
let billAmount = document.getElementById('amount');
let submitbtn = document.getElementById('submit');
let expenseList = document.querySelector('ul');

submitbtn.addEventListener('click', function(evt) {
    evt.preventDefault();

    let li = document.createElement('li');
    let divItem = document.createElement('div');
    let divPrice = document.createElement('div');
    let divTrash = document.createElement('div');

    let attrItem = document.createAttribute('id')
    let attrPrice = document.createAttribute('id')
    let attrTrash = document.createAttribute('id')

    attrItem.value = "item";
    attrPrice.value = "price";
    attrTrash.value = "trash";

    divItem.setAttributeNode(attrItem);
    divPrice.setAttributeNode(attrPrice);
    divTrash.setAttributeNode(attrTrash);

    divItem.innerText = billName.value;
    divPrice.innerHTML = `$<span>${billAmount.value}</span>`;
    divTrash.innerHTML = '<img src="./assets/trash_can.svg">';

    li.append(divItem);
    li.append(divPrice);
    li.append(divTrash);

    expenseList.append(li);


    // li.append(divItem).append(divPrice).append(divTrash);


    // expenseList.append(li);
    


})
