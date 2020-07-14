var mymap = L.map('mapid').setView([19.497, -99.12], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWxleGNvZGUiLCJhIjoiY2tjYXNrNWltMWx5czJycWVsbGFocnpsbiJ9.Tf1tuBGhKaHcFeLk_N662g',
}).addTo(mymap)

var marker1 = L.marker([19.497, -99.12]).addTo(mymap);

$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        result.bicicletas.forEach(element => {
            L.marker(element.ubicacion, {title: element.id}).addTo(mymap);
        });
    }
});