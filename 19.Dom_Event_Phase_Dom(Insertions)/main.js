// Сверстать таблицу 5х5 с любым текстовых содержимым заранее заполненным.

// При клике на любую ячейку таблицы появляется внутри ячейке многострочное текстовое
//  поле с текстом который был в ячейке(на которую нажали) и две кнопки save, cancel save 
// -- сохранить в текущей ячейке введенные данные, cancel -- оставит все без изменений как было раньше.

// P.S. обязательно использовать делегирование события + поведение.

let table = document.getElementById('bagua-table');

let editingTd;

table.onclick = function(event) {
    let target = event.target.closest('.cancel, .save, td');

    if (!table.contains(target)) return;

    if (target.dataset.edit == 'cancel') {
        cancel(editingTd.elem);
    } else if (target.dataset.edit == 'save') {
        save(editingTd.elem);
    } else if (target.nodeName == 'TD') {
    if (editingTd) return;

    editTable(target);
    }


};

function editTable(td) {
    editingTd = {
    elem: td,
    data: td.innerHTML
    };

    let textArea = document.createElement('textarea');
    textArea.className = 'textA';

    textArea.value = td.innerHTML;
    td.innerHTML = '';
    td.append(textArea);

    td.insertAdjacentHTML("beforeEnd",
    '<div class="buttons"><button class="save" data-edit="save">SAVE</button><button class="cancel" data-edit="cancel">CANCEL</button></div>'
    );
}

function cancel (td) {
    td.innerHTML = editingTd.data;
    editingTd = null;
}
function save (td) {
    td.innerHTML = td.firstChild.value;
    editingTd = null
}



