/*
Эмитация контроллера, на основе анонимной функции
Перехват текущего значения в адресной строке
и действия по изменению определенных объектов,
которые логически связаны с процессом программы.
*/

(() => {
      var scriptMain = loadScript('main');
      scriptMain.onload = function () {
          User.menu();
          User.login();
      }
      switch (window.location.pathname) {

            case '/':
                  console.log('главная страница');
                  break;

            case '/details/':
                   var script = loadScript('details');
                   script.onload = function () {
                        detailGood.handlerEvents();
                   }
                  break;

            case '/basket/':

                  var script = loadScript('basket');
                  script.onload = function () {
                        var arrObj = [];
                        Object.keys(document.querySelectorAll('.row img')).forEach(function (index) {
                              /* Пример наследования объектом, свойств другого объекта*/
                              obj = {};
                              obj.__proto__ = basket;
                              
                              obj.src = document.querySelectorAll('.row img')[index].src;
                              obj.title = document.querySelectorAll('.row__title')[index].innerText;
                              obj.size = document.querySelectorAll('.row__size')[index].innerText;
                              document.querySelectorAll('.row__count .minus-bsk')[index].onclick = function () {
                                    this.parentElement.getElementsByTagName('span')[0].innerText = parseInt(this.parentElement.getElementsByTagName('span')[0].innerText) - 1;
                                    obj.itogSumm = obj.itogSumm - parseInt(obj.count) * parseInt( obj.price);
                              }
                              obj.count = document.querySelectorAll('.row__count span')[index].innerText;
                              document.querySelectorAll('.row__count .add-bsk')[index].onclick = function () {
                                    this.parentElement.getElementsByTagName('span')[0].innerText = parseInt(this.parentElement.getElementsByTagName('span')[0].innerText) + 1;
                                    obj.count = parseInt(obj.count) + 1;
                                    console.log(parseInt(obj.count) * parseInt( obj.price));
                                    obj.itogSumm =+ parseInt(obj.count) * parseInt( obj.price);
                              }
                              obj.price = document.querySelectorAll('.row__price')[index].innerText;
                              arrObj[index] = obj;
                        });

                        document.getElementById('zakaz').addEventListener('click', function () {
                              //console.log(arrObj);
                              //console.log(JSON.stringify(arrObj));
                              console.log(document.forms.form_zakaz);
                              sendAJAX('zakaz' , 'POST' , document.forms.form_zakaz ,  arrObj , function(){
                                    console.log('zakaz');
                             });
                        })
                        Array.from(document.getElementsByClassName('del-item-basket')).forEach(function (element) {
                              element.onclick = function () {

                                    var objDel = this.parentElement.parentElement;
                                    console.log('Удалить товар ' + objDel.querySelector(".row__title p").innerText);
                                    alert("Удалить товар: " + objDel.querySelector(".row__title p").innerText);
                                    objDel.remove();
                                    //sendAJAX('action=del&good=' + objDel.querySelector(".row__title p").innerText, 'POST');
                                    sendAJAX('delgood' , 'POST' , '' , objDel.querySelector(".row__title p").innerText , function(){
                                           console.log('del');
                                    });
                              };
                        });

                        var itog = 0;
                       
                             Array.from(document.querySelectorAll('#content-basket .row')).forEach(function (element) {
                                itog = parseInt(itog) + parseInt(element.querySelectorAll('.row__count span')[0].innerText) * parseInt(element.querySelectorAll('.row__price')[0].innerText);
                                console.log( parseInt(itog) )
                                console.log( parseInt(element.querySelectorAll('.row__count span')[0].innerText) ) 
                                console.log( parseInt(element.querySelectorAll('.row__price')[0].innerText) )
                               
                            });
                            document.getElementById('summ').innerText = itog;

                  };


                  break;
            case '/category/':
                  loadScript('category');
                  break;
             case '/admin/':
                   var script =  loadScript('admin');
                   script.onload = function(){
                       adminPanel.dispacher();
                   }
                   break;      
      }

})();