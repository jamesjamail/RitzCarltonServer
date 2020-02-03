let carData = {
    1: {
        lat: 29.7620,
        lng: -95.3692,
        newInfo: false
    },
    2: {
        lat: 29.7615,
        lng: -95.3700,
        newInfo: false
    }
};

const updateCarLocation = function (id, lat, lng) {
    if (!carData[id]) {
        carData[id] = {}
    }
    carData[id].lat = lat;
    carData[id].lng = lng;
    carData[id].newInfo = false;
}

const updateRetrieveNewInfo = function (id) {
    carData[id].newInfo = !carData[id].newInfo;
}

const getCarLocation = function (id) {
    return {
        lat: carData[id].lat,
        lng: carData[id].lng
    }
}

const getNewInfo = function (id) {
    return carData[id].newInfo;
}

module.exports = { updateCarLocation, updateRetrieveNewInfo, getCarLocation, getNewInfo }