function initMap(){
    const githubLocation = {
        lat: 37.782293,
        lng: -122.391240
    }
    const map = new google.maps.Map(document.getElementById('map'), {
        center: githubLocation,
        scrollwheel: false,
        zoom: 18
    });
    const marker = new google.maps.Marker({
        position: githubLocation,
        map: map,
        title: 'GitHub'
    });
}