(function () {
    if (Boolean(document.querySelector('#map-container'))) {
        ymaps.ready(function (e) {
            var myCenter = [58.630025065823255, 49.59629799999993];
            if (window.innerWidth < 850) {
                myCenter = [58.630525065823255, 49.59800799999993];
            }
            let myMap = new ymaps.Map('map-container', {
                    center: myCenter,
                    zoom: 17,
                    //controls: ['zoomControl', 'typeSelector', 'fullscreenControl', 'routeButtonControl']
                    //controls: ['zoomControl', 'typeSelector', 'fullscreenControl', 'routeButtonControl']
                }, {}),

                // Создаём макет содержимого.
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                ),

                myPlacemark = new ymaps.Placemark([58.629625065823255, 49.59809799999993], {
                    hintContent: 'Бар Стекло',
                    balloonContent: 'Зубовский бульвар 16/20<br>' +
                        'строение 1'
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: 'img/icon-placemark-with-logo.png',  // TODO: add
                    // Размеры метки.
                    iconImageSize: [140, 149],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-45, -135]
                }),

                myPlacemarkWithContent = new ymaps.Placemark([64.57721363065828, 39.85982436634828], [64.58178329172841, 39.87413663365174], {
                    hintContent: '',
                    balloonContent: '',
                    iconContent: ''
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#imageWithContent',
                    // Своё изображение иконки метки.
                    iconImageHref: '',
                    // Размеры метки.
                    iconImageSize: [48, 48],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-24, -24],
                    // Смещение слоя с содержимым относительно слоя с картинкой.
                    iconContentOffset: [15, 15],
                    // Макет содержимого.
                    iconContentLayout: MyIconContentLayout
                });

            myMap.geoObjects
                .add(myPlacemark)
                .add(myPlacemarkWithContent);

            // myMap.behaviors.disable('scrollZoom');
            myMap.controls.remove('zoomControl');
            myMap.controls.remove('geolocationControl');
            myMap.controls.remove('searchControl');
            myMap.controls.remove('trafficControl');
            myMap.controls.remove('typeSelector');
            myMap.controls.remove('fullscreenControl');
            myMap.controls.remove('rulerControl');
        });
    }
}());