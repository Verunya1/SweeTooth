/* form start */
;(function() {
    var forms = document.querySelectorAll('.form-send');
  
    if (forms.length === 0) {
      return;
    }
  
    var serialize = function(form) {
      var items = form.querySelectorAll('input, select, textarea');
      var str = '';
      for (var i = 0; i < items.length; i += 1) {
        var item = items[i];
        var name = item.name;
        var value = item.value;
        var separator = i === 0 ? '' : '&';
  
        if (value) {
          str += separator + name + '=' + value;
        }
      }
      return str;
    };
  
    var formSend = function(form) {
      var data = serialize(form);
      var xhr = new XMLHttpRequest();
    //   var url = WPJS.ajaxUrl + '?action=send_email';
      
    //   xhr.open('POST', url);
    //   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
      xhr.onload = function() {
        var activePopup = document.querySelector('.popup.is-active');
  
        if (activePopup) {
          activePopup.classList.remove('is-active');
        } else {
          myLib.toggleScroll();
        }
  
        if (xhr.response === 'success') {
          document.querySelector('.popup-thanks').classList.add('is-active');
          document.dispatchEvent(new CustomEvent('reset-cart'));
        } else {
          document.querySelector('.popup-error').classList.add('is-active');
        }
  
        form.reset();
      };
  
    //   xhr.send(data);
    };
  
    for (var i = 0; i < forms.length; i += 1) {
      forms[i].addEventListener('submit', function(e) {
        e.preventDefault();
        var form = e.currentTarget;
        formSend(form);
      });
    }
  })();
  /* form end */


// ;(function(){
//        var send = document.querySelectorAll('.form-send');;
    
//         send.addEventListener('click',function(e){
    
//             del
//         });
//     })();