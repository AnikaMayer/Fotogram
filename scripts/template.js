// #region gallery template

function templateGallery(i) {
    return /*html*/`
        <button aria-label="show large photo" class="photo_box" onclick="openDialog(${i})">
            <img id="photo$(photoArray[i])" src="./assets/img/${photoArray[i].path}" alt="${photoArray[i].name}">
        </button>
    `
}

// #endregion

// #region dialog template

function templateDialog(i) {
    return /*html*/`
    <div class="dialog_box" onclick="bubblingProtection(event)">
        <header class="dialog_head">
            <h2>${photoArray[i].name}</h2>
            <button onclick="closeDialog()"><img src="./assets/icons/close_button.svg" alt="closing_button"></button>
        </header>
        <div class="dialog_img">
            <img src="./assets/img/${photoArray[i].path}" alt="${photoArray[i].name}">
        </div>
        <footer class="dialog_foot">
            <button id="left" class="button_left" onclick="changeToPrevPhoto(${i})"><img src="./assets/icons/arrow.svg" alt="previous_photo"></button>
            <p>${[i + 1]}/${photoArray.length}</p>
            <button id="right" class="button_right" onclick="changeToNextPhoto(${i})"><img src="./assets/icons/arrow.svg" alt="next_photo"></button>
        </footer>
    </div>
    `
}

// #endregion