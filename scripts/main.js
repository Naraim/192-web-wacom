function handleLoad(){
  //-------------------------------------------Gallery ----------------------------------------
  var buttonR = document.querySelector('.button__right');
  var buttonL = document.querySelector('.button__left');
  var slider = document.querySelector('.gallery');
  var tape = slider.querySelector('.gallery__tape');
  var count = 0;

  function handleLast(){
    tape.classList.add('gallery__tape--inactive');
    tape.style.transform = 'translate(0px,0px)';
  }

  function handleClick(event){
      if(event.srcElement.classList.contains('btnR')){
        if(count < tape.childElementCount - 1) {
          count++;
        }

      }else if(event.srcElement.classList.contains('btnL')){
        if(count > 0) {
          count--;
        }

      }
      console.log(count);
      tape.style.transform = 'translate('+ (-1*80*count) +'vw, 0)';
  }

  buttonR.addEventListener('click', handleClick);
  buttonL.addEventListener('click', handleClick);

  // ----------------------------------- Bamboo paper ---------------------

  var rangeSlider = document.querySelector('.mainText__range');
  var paperImages = document.querySelector('.mainImage__paper');
  var source = paperImages.getAttribute("src");



   function handleRange() {
     var rangeValue = rangeSlider.value;
     var floatValue = rangeValue/9;
     var indexValue = Math.floor(floatValue);
       paperImages.setAttribute( 'src', "./img/paper_"+indexValue+".png" ) ;
     console.log(source);
     console.log(indexValue);
   }

   rangeSlider.addEventListener('input', handleRange);


}

window.addEventListener('load', handleLoad);
