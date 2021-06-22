
const data = { 
    name: 'menu', 
    items: [
        {
            title: 'title 1',
            handler: 'actionCopy'
        },
        {
            title: 'title 2',
            handler: 'actionSaveAs'
        },
        {
            title: 'title 3',
            handler: 'actionExit' 
        }
    ]
}

const actions = {
    actionCopy() {
        alert('ActionCopy')
    },
    actionSaveAs() {
        alert('ActionSaveAs')
    },
    actionExit() { 
        alert('ActionExit')
    },
    
};





function makeMenu(model) {
    
    const items = model.items;
    const ul = document.createElement('ul');

    ul.classList.add(model.name);

    for(let i = 0; i < items.length; i++) {
        const li = document.createElement('li');
        const {handler} = items[i];

        li.dataset.operation = handler;
        li.innerHTML = `${handler}`

        ul.append(li);
    }

    document.body.append(ul);
}
makeMenu(data);


let menu = document.querySelector(".menu");

document.addEventListener('contextmenu', appearContextMenu);
menu.addEventListener('click', catchTarget);
document.addEventListener('click', toggleHide)

function catchTarget(even) {
    let operation = even.target.dataset.operation;

    if(!operation) return
    actions[operation]();
}
function appearContextMenu(event){
    event.preventDefault()
    const postion = {
        left: event.pageX,
        top: event.pageY
    };

    menu.classList.add('appear')
    positionMenu(postion);
}

function positionMenu(cords) {
    const {left, top} = cords
    
    if ( (window.innerWidth - left) < menu.offsetWidth) {
        menu.style.left = window.innerWidth - menu.offsetWidth + "px";
    } else {
        menu.style.left = left + "px";
    }

    if ( (window.innerHeight - top) < menu.offsetHeight ) {
        menu.style.top = window.innerHeight - menu.offsetHeight + "px";
    } else {
        menu.style.top = top + "px";
    }
}

function toggleHide() {
    menu.classList.remove('appear')
}




