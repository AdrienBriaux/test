function getCameras() {
    return fetch("http://localhost:3000/api/cameras")
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function (cameras) {
            console.log(cameras);
            return cameras;
        })
        .catch(function (err) {
            alert(error)
        });
}