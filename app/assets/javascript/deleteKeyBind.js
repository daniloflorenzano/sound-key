function addEvent(id) {
    document.querySelector(`#${id}`).addEventListener('click', function (event) {
        let name = event.target.parentNode.parentNode.firstChild.textContent;

        deleteKeyBind(name);
        generateTable();
    })
}

setTimeout(() => {
    const deleteButton = document.getElementsByClassName('deleteButton');

    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].id = `dinamicId${i}`;
        newId = deleteButton[i].id;
        addEvent(newId);
    }
}, 200);

function deleteKeyBind(name) {
    MacrosController.delete(name)
}