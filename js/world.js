window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 15, lng: 0 },
        zoom: 1.5,
        styles: [
            {
                stylers: [
                    {
                        color: "#ffffff",
                    },
                ],
            },
            {
                elementType: "geometry",
                stylers: [
                    {
                        color: "#ffffff",
                    },
                ],
            },
            {
                elementType: "geometry.fill",
                stylers: [
                    {
                        color: "#ffffff",
                    },
                ],
            },
            {
                elementType: "geometry.stroke",
                stylers: [
                    {
                        color: "#ffffff",
                    },
                ],
            },
            {
                featureType: "administrative",
                stylers: [
                    {
                        color: "#ffffff",
                    },
                ],
            },
            {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [
                    {
                        color: "#ffffff",
                    },
                ],
            },
            {
                featureType: "administrative",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#1d0090",
                    },
                ],
            },
            {
                featureType: "administrative",
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        color: "#ffe500",
                    },
                    {
                        weight: 8,
                    },
                ],
            },
            {
                featureType: "administrative.land_parcel",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                featureType: "administrative.neighborhood",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                featureType: "landscape",
                stylers: [
                    {
                        color: "#ffffff",
                    },
                ],
            },
            {
                featureType: "poi",
                stylers: [
                    {
                        color: "#ffffff",
                    },
                ],
            },
            {
                featureType: "road",
                stylers: [
                    {
                        color: "#ffffff",
                    },
                ],
            },
            {
                featureType: "transit",
                stylers: [
                    {
                        color: "#ffffff",
                    },
                ],
            },
            {
                featureType: "water",
                stylers: [
                    {
                        color: "#1d0090",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "labels.text",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
        ],
    });

    var myIcon = new google.maps.MarkerImage(
        "/media/marker3.png",
        null,
        null,
        null,
        new google.maps.Size(230, 100)
    );

    const japan = [
        {
            label: "도쿄",
            name: "도쿄",
            star: "4점",
            lat: 35.5020581,
            lng: 138.4504777,
            icon: myIcon,
        },
        {
            label: "오사카",
            name: "오사카",
            star: "4점",
            lat: 34.6775704,
            lng: 135.403636,
            icon: myIcon,
        },
        {
            label: "삿포로",
            name: "삿포로",
            star: "4점",
            lat: 42.9848631,
            lng: 140.9183286,
            icon: myIcon,
        },
        {
            label: "후쿠오카",
            name: "후쿠오카",
            star: "4점",
            lat: 33.6495358,
            lng: 129.9343191,
            icon: myIcon,
        },
    ];

    var japanMarkers = []; // 일본 마커들을 저장하는 배열

    japan.forEach(({ name, star, lat, lng, icon }) => {
        const marker = new google.maps.Marker({
            position: { lat, lng },
            label: {
                text: name + " " + star + "점",
                fontSize: "10px",
                fontFamily: "PyeongChangPeace-Bold",
            },
            map,
            icon,
            visible: false, // 일단 모든 마커를 숨김
        });
        japanMarkers.push(marker); // 마커를 배열에 추가
    });

    const france = [
        {
            label: "파리",
            name: "파리",
            star: 4,
            lat: 48.8588255,
            lng: 2.2646345,
            icon: myIcon,
        },
        {
            label: "니스",
            name: "니스",
            star: 4,
            lat: 43.7031657,
            lng: 7.1704111,
            icon: myIcon,
        },
        {
            label: "마르세유",
            name: "마르세유",
            star: 4,
            lat: 43.280227,
            lng: 5.2158399,
            icon: myIcon,
        },
    ];

    var franceMarkers = []; // 프랑스 마커들을 저장하는 배열

    france.forEach(({ star, name, lat, lng, icon }) => {
        const marker = new google.maps.Marker({
            position: { lat, lng },
            label: {
                text: " ",
                text: name + " " + star + "점",
                fontSize: "25px",
                fontFamily: "PyeongChangPeace-Bold",
            },
            map: map,
            icon: icon,
        });
        franceMarkers.push(marker); // 마커를 배열에 추가
    });
    google.maps.event.addListener(map, "zoom_changed", function () {
        var currentZoom = map.getZoom(); // 현재 줌 레벨 가져오기
        var minZoomToShowMarker = 5; // 마커가 보이게 하려는 최소 줌 레벨 설정

        infowindow.open(map);
        map.addListener("zoom_changed", () => {
            infowindow.setContent("Zoom: " + map.getZoom());
        });

        japan.forEach((marker) => {
            if (currentZoom >= minZoomToShowMarker) {
                marker.setVisible(true); // 마커를 표시
            } else {
                marker.setVisible(false); // 마커를 숨김
            }
        });

        france.forEach((marker) => {
            if (currentZoom <= minZoomToShowMarker) {
                marker.setMap(map); // 마커를 지도에 표시
            } else {
                marker.setMap(null); // 마커를 지도에서 제거
            }
        });
    });
};
