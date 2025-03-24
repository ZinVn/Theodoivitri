document.getElementById('locationLink').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById('locationResult').innerText = "Trình duyệt của bạn không hỗ trợ Geolocation.";
    }
});

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    document.getElementById('locationResult').innerText = `Vị trí của bạn: Latitude: ${latitude}, Longitude: ${longitude}`;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('locationResult').innerText = "Người dùng từ chối yêu cầu xác định vị trí.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('locationResult').innerText = "Thông tin vị trí không khả dụng.";
            break;
        case error.TIMEOUT:
            document.getElementById('locationResult').innerText = "Yêu cầu xác định vị trí đã hết thời gian.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('locationResult').innerText = "Đã xảy ra lỗi không xác định.";
            break;
    }
}
