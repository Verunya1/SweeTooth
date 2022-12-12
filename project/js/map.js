;(function() {
    if (typeof ymaps === 'undefined') {
      return;
    }
  
    ymaps.ready(function () {
      var myMap = new ymaps.Map('ymap', {
              center: [55.673296, 37.480067],
              zoom: 16
          }, {
              searchControlProvider: 'yandex#search'
          }),
  
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              balloonContent: 'Сладкоежкa'
          }, {

            preset: 'islands#dotIcon',
            iconColor: 'rgb(137, 7, 85)',
            
             
              
              iconImageSize: [40, 63.2],
              iconImageOffset: [-50, -38]
          });
          
      myMap.geoObjects.add(myPlacemark);
  
      myMap.behaviors.disable('scrollZoom');
  });
  
  
  })();