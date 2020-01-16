(function () {

    document.querySelector(".burger").addEventListener("click", function () {
        document.querySelector(".overlay").classList.add("overlay_active");
        document.querySelector(".nav").classList.add("nav_active");
        document.querySelector(".popbox_main_content").classList.add("popbox_main_content_active");
    });

    document.querySelector(".overlay").addEventListener("click", function () {
        document.querySelector(".overlay").classList.remove("overlay_active");
        document.querySelector(".popbox_main_content").classList.remove("popbox_main_content_active");
        document.querySelector(".nav").classList.remove("nav_active");
    });

    document.querySelectorAll(".nav__link").forEach(nav__link => {
        nav__link.addEventListener("click", function () {
            document.querySelector(".overlay").classList.remove("overlay_active");
            document.querySelector(".popbox_main_content").classList.remove("popbox_main_content_active");
            document.querySelector(".nav").classList.remove("nav_active");
        });
    });


    let popbox = new Popbox();
    popbox.open("popbox-success");
}());
(function () {
    if (Boolean(document.querySelector('#map-container'))) {
        ymaps.ready(function (e) {
            var myCenter = [55.73822628892799,37.581239996557617];
            if (window.innerWidth < 800) {
                myCenter = [55.73881628892799,37.58429196557617];
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

                myPlacemark = new ymaps.Placemark([55.73781628892799,37.58429196557617], {
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