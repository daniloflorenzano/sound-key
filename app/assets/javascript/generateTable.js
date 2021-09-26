const tableBody = document.querySelector('tbody');

const edit = `<button class="btn btn-danger deleteButton">
 <span class="material-icons">delete_forever</span> 
 </button>`;


async function generateTable() {
    document.location.reload(true);
}

async function updateTable() {

    const databaseContent = await Macros.findAll({
        attributes: ['name', 'key']
    });

    const keybindsString = JSON.stringify(databaseContent);
    const keybindsObj = JSON.parse(keybindsString)

    for (let i = 0; i < keybindsObj.length; i++) {
        dataContent = keybindsObj[i];
        const nameText = `<p>${dataContent.name}</p>`;
        const keyText = `<p>${dataContent.key}</p>`;

        let line = document.createElement('tr');
        let nameSpace = document.createElement('td')
        let associatedKeySpace = document.createElement('td')
        let editSpace = document.createElement('td')

        editSpace.innerHTML = edit;
        nameSpace.innerHTML = nameText;
        associatedKeySpace.innerHTML = keyText;

        line.appendChild(nameSpace);
        line.appendChild(associatedKeySpace);
        line.appendChild(editSpace);

        tableBody.appendChild(line);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    updateTable();
});