
// Theme switch
// Based on: https://codepen.io/celar/pen/dXRNQo

 document.addEventListener('DOMContentLoaded', function(){
  let body = document.querySelector('body');
  document.querySelector('.themeselect').addEventListener('change', handleThemeSelect);
  function handleThemeSelect(event) {
    event.preventDefault();
    
    body.className = event.target.value;
  };
  
}); 