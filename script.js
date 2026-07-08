const photoArray = [
    {
        name: "Tokyo Buildings",
        path: "tokyo_buildings.jpg",
    },
    {
        name: "Mountain View",
        path: "mountain_view.jpg",
    },
    {
        name: "Tokyo Nightview",
        path: "tokyo_nightview.jpg",
    },
    {
        name: "Onaruto Bridge",
        path: "onaruto_bridge.jpg",
    },
    {
        name: "Origami Cranes",
        path: "origami.jpg",
    },
    {
        name: "Mountain Fuji-san",
        path: "fuji_san.jpg",
    },
    {
        name: "Shiba-inu dog",
        path: "shiba_inu.jpg",
    },
    {
        name: "Mejiro Bird",
        path: "mejiro_bird.jpg",
    },
    {
        name: "Shinto Shrine",
        path: "shinto.jpg",
    },
    {
        name: "Tea Ceremony",
        path: "chanoyu_tea_ceremony.jpg",
    },
    {
        name: "Koi fish",
        path: "koi_fish.jpg",
    },
    {
        name: "Woman watching cityscape",
        path: "woman_view.jpg",
    }
]

function renderGallery() {
    const photo_containerRef = document.getElementById('photo_container');

    for (let i = 0; i < photoArray.length; i++) {
        photo_containerRef.innerHTML += /*html*/`
        <div class="photo_box">
            <img src="../assets/img/${photoArray[i].path}" alt="${photoArray[i].name}">
        </div>
    `
        
    }
}