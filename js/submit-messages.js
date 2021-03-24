let main = document.querySelector('main');

export let successSubmitMessage = document.querySelector('#success').content;
console.log(successSubmitMessage);
export let errorSubmitMessage = document.querySelector('#error');
console.log(errorSubmitMessage)

export const showSubmitMessage = (element) => {
  main.appendChild(element);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      main.removeChild(main.lastChild);
      console.log(main)
      console.log('delete');
    }
  });
};


