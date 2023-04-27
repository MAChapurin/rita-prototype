ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.430426, 37.776610],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 17,
    });

    myMap.behaviors.disable('scrollZoom');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      myMap.behaviors.disable('drag');
  }


var myPlacemark = new ymaps.Placemark([55.430426, 37.776610], {}, {
iconLayout: 'default#image',
iconImageHref: 'img/marker-map.svg',
iconImageSize: [30, 42],
iconImageOffset: [-3, -42]
});

// Размещение геообъекта на карте.

myMap.geoObjects.add(myPlacemark);
}