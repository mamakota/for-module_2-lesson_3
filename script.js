'use strict';

const myList = document.querySelector('.list');

const addString = (item, string) => {
  item.insertAdjacentHTML('beforeend', `<li class="list__item">${string}</li>`);
}

const removeLastItem = (item) => {
  item.lastChild.remove();
}

const clearList = (item) => {
  item.innerHTML = '';
}


const foo = () => {

  const promptString = prompt('Enter something', '');
  // const promptString = 'qwe';
  console.log(promptString);

  if (!(promptString === null)) {
    if (!(promptString.trim() === '') && !(promptString === 'exit')) {
      switch (true) {
        case (promptString === 'del'):
          removeLastItem(myList);
          break;
        case (promptString === 'clear'):
          clearList(myList);
          break;
        default:
          addString(myList, promptString);
          break;
      }
    }
  }


  if (promptString === 'exit' || promptString === null) {
    return;
  } else {
    return foo();
  }


};

foo();