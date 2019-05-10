let displayTotal = document.getElementById('display-total');
let billName = document.getElementById('name');
let billAmount = document.getElementById('amount');
let submitBtn = document.getElementById('submit');
let expenseList = document.querySelector('ul');

let userList = [];

submitBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    populateInfo();
})

function populateInfo(deleted) {
    let runningTotal = 0;

    if (!deleted) {
        userList.push({
            userBill: billName.value,
            userAmount: parseFloat(billAmount.value)
        })
    }

    while (expenseList.firstChild) {
        expenseList.removeChild(expenseList.firstChild);
    }

    for (let i = 0; i < userList.length; i++) {
        let divLi = document.createElement('li');
        let divItem = document.createElement('div');
        let divPrice = document.createElement('div');
        let divDelete = document.createElement('div');

        let attrItem = document.createAttribute('class');
        attrItem.value = 'item';
        let attrPrice = document.createAttribute('class');
        attrPrice.value = 'price';

        divItem.innerText = userList[i].userBill;
        divItem.setAttributeNode(attrItem);
        divPrice.innerHTML = `$${userList[i].userAmount}`;
        divPrice.setAttributeNode(attrPrice);
        divDelete.innerHTML = `<img id="${i}" class="deleteBtn" src="./assets/trash_can.svg">`;

        divLi.append(divItem);
        divLi.append(divPrice);
        divLi.append(divDelete);
        expenseList.append(divLi);
    }

    for (let i = 0; i < userList.length; i++) {
        runningTotal += userList[i].userAmount;
    }

    displayTotal.innerText = runningTotal;
    
    let deleteBtns = document.getElementsByClassName('deleteBtn');

    for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', function() {
            depopulateInfo(this);
    }) 
    }

function depopulateInfo(el) {
    let cutIndex = el.id;
    userList.splice(cutIndex, 1);
    populateInfo(userList);
}

billName.value = '';
billAmount.value = '';
billName.focus();

}
