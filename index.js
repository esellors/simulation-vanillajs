/* HTML references */

let displayTotal = document.getElementById('display-total');
let billName = document.getElementById('name');
let billAmount = document.getElementById('amount');
let submitBtn = document.getElementById('submit');
let expenseList = document.querySelector('ul');
let deleteBtn = document.querySelector('.trash')
console.log(deleteBtn)

/* Define variables */

let userList = [];

/* The magic */

submitBtn.addEventListener('click', function(evt) {
    evt.preventDefault();

    let runningTotal = 0;

    let entry = {
        userBill: billName.value,
        userPrice: parseInt(billAmount.value),
        userId: userList.length + 1
    }

    userList.push(entry);

    /* Create elements, attributes, and assign attributes */

    let li = document.createElement('li');
    let attrLi = document.createAttribute('id');
    attrLi.value = userList.length - 1;
    li.setAttributeNode(attrLi);

    let divItem = document.createElement('div');
    let attrItem = document.createAttribute('id')
    attrItem.value = "item";
    divItem.setAttributeNode(attrItem);

    let divPrice = document.createElement('div');
    let attrPrice = document.createAttribute('id')
    attrPrice.value = "price";
    divPrice.setAttributeNode(attrPrice);

    let divTrash = document.createElement('div');
    let attrTrash = document.createAttribute('class')
    attrTrash.value = "trash";
    divTrash.setAttributeNode(attrTrash);
    let attrTrashId = document.createAttribute('id')
    attrTrashId.value = userList.length - 1;
    divTrash.setAttributeNode(attrTrashId);

    /* Add content to created Expense list elements */
    
    divItem.innerText = userList[userList.length - 1].userBill;
    divPrice.innerHTML = `$<span>${userList[userList.length - 1].userPrice}</span>`;
    divTrash.innerHTML = '<img src="./assets/trash_can.svg">';

    /* Display new elements on page in Expenses list */

    li.append(divItem);
    li.append(divPrice);
    li.append(divTrash);
    expenseList.append(li);

    /* Add to pages display total */

    for (let i = 0; i < userList.length; i++) {
        runningTotal += userList[i].userPrice;
    }

    displayTotal.innerText = runningTotal;

    /* Add event listener to item to delete */

    deleteBtn.addEventListener('click', function(evt) {
        
    })









    /* Clear page form values and set focus to enter another item */
    
    billName.value = '';
    billAmount.value = '';
    billName.focus();

})





