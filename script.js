// #region render boxes

function renderGallery() {
    const photo_containerRef = document.getElementById('photo_container');

    for (let i = 0; i < photoArray.length; i++) {
        photo_containerRef.innerHTML += /*html*/`
        <button class="photo_box" onclick="openDialog(${i})">
            <img id="photo$(photoArray[i])" src="./assets/img/${photoArray[i].path}" alt="${photoArray[i].name}">
        </button>
    `
    }
}

// #endregion

// #region dialog template

const photo_dialogRef = document.getElementById('photo_dialog');

function templateDialog(i) {
    return /*html*/`
    <div class="dialog_box" onclick="BubblingProtection(event)">
        <header class="dialog_head">
            <h2>${photoArray[i].name}</h2>
            <button onclick="closeDialog()"><img src="./assets/icons/close_button.svg" alt="closing_button"></button>
        </header>
        <div class="dialog_img">
            <img src="./assets/img/${photoArray[i].path}" alt="${photoArray[i].name}">
        </div>
        <footer class="dialog_foot">
            <button id="left" class="button_left" onclick="changeToPrevPhoto(${i})"><img src="./assets/icons/arrow.svg" alt=""></button>
            <p>${[i + 1]}/${photoArray.length}</p>
            <button id="right" class="button_right" onclick="changeToNextPhoto(${i})"><img src="./assets/icons/arrow.svg" alt="next_button"></button>
        </footer>
    </div>
    `
}

// #endregion

// #region dialog functions

function openDialog(i) {
    photo_dialogRef.showModal();
    photo_dialogRef.innerHTML = templateDialog(i);
    photo_dialogRef.classList.add("opened");
}

function changeToNextPhoto(i) {
    photo_dialogRef.innerHTML = "";

    if(i>=0 && i<photoArray.length - 1) {i++} 
    else {i=0};
    photo_dialogRef.innerHTML = templateDialog(i);
    document.getElementById("right").focus();
}

function changeToPrevPhoto(i) {
    photo_dialogRef.innerHTML = "";

    if(i>0) {i--}
    else {i=photoArray.length - 1};
    photo_dialogRef.innerHTML = templateDialog(i);
    document.getElementById("left").focus();
}

function closeDialog() {
    photo_dialogRef.close();
    photo_dialogRef.classList.add("opened");
}

function BubblingProtection(event) {
    event.stopPropagation();
}

// #endregion