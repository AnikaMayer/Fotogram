const photo_dialogRef = document.getElementById('photo_dialog');

// #region photoGallery

function renderGallery(i) {
    const photo_containerRef = document.getElementById('photo_container');

    for (let i = 0; i < photoArray.length; i++) {
        photo_containerRef.innerHTML += templateGallery(i);
    }
}

// #endregion

// #region dialog

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

function bubblingProtection(event) {
    event.stopPropagation();
}

// #endregion