mapboxgl.accessToken =
    "pk.eyJ1Ijoic2FoaWwta2FtYXRlIiwiYSI6ImNsMm01dzk4ODBldzUzanJ1dm9pN3pzcDQifQ.32S_1bF86VEmWYaCHjlswQ"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 16
    })

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })

    // map.addControl(directions, "top-left")
}