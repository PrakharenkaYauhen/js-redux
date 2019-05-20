// actionAddTaskModal

let actionAddTaskModal = e => {
    const addTaskModal = document.querySelector('.modal');
    const addTaskModalCover = document.querySelector('.modal__cover');
    const addTaskInTheListInput = document.querySelector('.modal__textarea');
    const addTaskModalExit = document.querySelector('.modal__button_exit');

    let target = e.target;

    if (target.tagName !== 'TD' && target.tagName !== 'BUTTON') return;

    addTaskModal.classList.toggle('modal_visible');
    addTaskModalCover.classList.toggle('modal__cover_visible');
    addTaskInTheListInput.focus();

    addTaskModalExit.addEventListener('click', actionAddTaskModal);
}

export {
    actionAddTaskModal
}