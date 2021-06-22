window.onload = function() {
  const arrFromStorage = getParseItemFromLocal('ElementsContainer');
  let wrapper = document.querySelector('.wrapper');
  let clear = document.querySelector('.clear');
  let set = document.querySelector('.set');
  let addElemBtn = document.querySelector('.addElem');
  let deleteElemBtn = document.querySelector('.deleteElem');

  getHTMLElementsFromStorage.call(arrFromStorage, wrapper);
  
  let сlickCounter = document.querySelectorAll('.counter');

  getFromLocalStorageCounter.call(сlickCounter);


  wrapper.addEventListener('click', catchTarget);
  clear.addEventListener('click', clearCounter.bind(сlickCounter));
  set.addEventListener('click', setCounter.bind(сlickCounter));
  addElemBtn.addEventListener('click', createElement);
  deleteElemBtn.addEventListener('click', deleteElement);
  

  function catchTarget(event) {
    let target = event.target;

    if (!target.dataset.action) return;
      let previous = target.previousElementSibling;
      previous.innerHTML++;

      putToLocalStorage(previous.id, previous.innerHTML); 
  }; 

  function clearCounter() {
    this.forEach(function(element) { 
      localStorage.removeItem(element.id);
      element.innerHTML = "";
    }); 
  };

  function setCounter() {
    let setId = prompt('ID');
    let valueForId = prompt('value');

    this.forEach(function(count) {
      if(count.id == setId) {
        count.innerHTML = valueForId;
        putToLocalStorage(count.id, count.innerHTML)
      }
    })
}

  function createElement() {
    let numberOfBlocks = localStorage.getItem('numberOfBlocks') || 1;

    numberOfBlocks++
    putToLocalStorage("numberOfBlocks", numberOfBlocks);

    let container = `
      <div class="container">
        <h3>id: count${numberOfBlocks}</h3>
        <span class="counter" id="count${numberOfBlocks}"></span>
        <button class="buttonClick" data-action='counter'>click</button>
      </div>`;
    wrapper.insertAdjacentHTML('beforeend', container);

    const arrToStorage = getParseItemFromLocal('ElementsContainer');
    arrToStorage.push(container);
    
    stringifyValueToLocal(`ElementsContainer`, arrToStorage)
    }
    
  function deleteElement() {
    let last = wrapper.lastElementChild;
    let lastCounter = last.children[1];
    
    if(wrapper.children.length == 1) return

    last.remove();

    let elem = getParseItemFromLocal("ElementsContainer")
    elem.splice(-1, 1);
    stringifyValueToLocal(`ElementsContainer`, elem)

    let numberOfBlocks = localStorage.getItem('numberOfBlocks');
    --numberOfBlocks;
    putToLocalStorage('numberOfBlocks', numberOfBlocks || 1);

    localStorage.removeItem(lastCounter.id) 
  }

  function putToLocalStorage(name, value){
    localStorage.setItem(name, value)
  };
  function getFromLocalStorageCounter() {
    this.forEach(function(item) { 
      item.innerHTML = localStorage.getItem(item.id)
    })
  };
  function getHTMLElementsFromStorage(putIn) {
    this.forEach(function(item) {
      putIn.insertAdjacentHTML('beforeend', item);
    })
  };
  function getParseItemFromLocal(item) {
    return JSON.parse(localStorage.getItem(item)) || []
  }
  function stringifyValueToLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

