function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Trình duyệt của bạn không hỗ trợ Geolocation.");
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    alert("Vị trí của bạn: " + latitude + ", " + longitude);
}
