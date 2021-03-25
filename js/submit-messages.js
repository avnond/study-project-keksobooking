let main = document.querySelector('main');

export let successSubmitMessage = document.querySelector('#success').content.querySelector('.success');
export let errorSubmitMessage = document.querySelector('#error');

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc' || evt.code === 27;
};

export const showSubmitMessage = (message) => {
  main.appendChild(message);

  const closeSuccessModal = () => {
    message.remove();
    document.removeEventListener('keydown', onPopupEscKeydown);
  };

  const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeSuccessModal();
    }
  };

  document.addEventListener('keydown', onPopupEscKeydown);
  document.body.addEventListener('click', () => {
    closeSuccessModal();
  });
};
