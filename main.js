var form = document.getElementById('main-form'),
    input = document.getElementById('form-input'),
    ol = document.getElementById('list'),
    submitBtn = document.getElementById('submit'),
    searchInput = document.getElementById('search-input'),
    isFormActive = false;


form.addEventListener('submit', addListItem)
searchInput.addEventListener('input', filterList)
//input.addEventListener('blur', onHandleBlur)
//input.addEventListener('input', onHandleFormInput)

function clearForm(){
    input.value = ""
}


function addListItem(e){
    e.preventDefault()
    var li = document.createElement('li'),
    deleteBtn = document.createElement('button')
    
    li.className = "list-group-item"
    deleteBtn.className = "btn btn-danger btn-sm float-right delete"
    deleteBtn.appendChild(document.createTextNode('X'))
    deleteBtn.addEventListener('click', delteItem)

    var value = input.value
    li.setAttribute('id', value)
    deleteBtn.setAttribute('id', value)
    if (value !== ''){
        li.appendChild(document.createTextNode(value))
        li.appendChild(deleteBtn)
        ol.appendChild(li)
    }
    clearForm()
}

function filterList(e){
        var list = document.getElementsByClassName('list-group-item'),
            searchValue = e.target.value.toUpperCase(),
            idx = 0,
            listValue = ''

        for(var i=0; i<list.length; i++){
            idx = list[i].innerHTML.indexOf('<')
            listValue = list[i].innerHTML.substring(0, idx)

            if(listValue.toUpperCase().includes(searchValue)){
                list[i].style.display = ''
            } else {
                list[i].style.display = 'none'
            }
        }
}

function delteItem(e){
    var list = document.getElementsByClassName('list-group-item')
    for(var i=0; i<list.length; i++){
        if(list[i].id === e.target.id){
            list[i].remove()
        }
    }
}

// function onHandleBlur(e){
//     let errorMessage = 'Please enter an item name',
//         span = document.createElement('span')
//     span.appendChild(document.createTextNode(errorMessage))
//     span.setAttribute('id', 'errorMsg')
//     if(input.value === ''){
//         e.target.style.borderColor = 'red'
//         input.insertAdjacentElement("afterend", span)
//     }
// }