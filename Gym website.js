// Add 'loaded' class to body when page is fully loaded
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

// javascript for footer copyright
const copyrightPara = document.getElementById('copyright-notice');

function copyrightParaUpdate() {
    let year = new Date().getFullYear();
    copyrightPara.innerHTML = `Copyright © ${year} FlexFit.All rights reserved.`;
}

copyrightParaUpdate();

setInterval(1000,copyrightParaUpdate);

// javascript for menu
const menu = document.getElementById('menu');
const slidebar = document.getElementById('side-bar')
const close = document.getElementById('close');

menu.addEventListener('click',()=>{
    slidebar.style.transform = 'translateX(0)';
    menu.style.display = 'none';
    close.style.display = 'flex';
});

close.addEventListener('click',()=>{
    slidebar.style.transform = 'translateX(-100%)';
    menu.style.display = 'flex';
    close.style.display = 'none';
});

slidebar.addEventListener('click',()=>{
    slidebar.style.transform = 'translateX(-100%)';
    menu.style.display = 'flex';
    close.style.display = 'none';
});


// Check if scrollbar width is supported
function isScrollbarWidthSupported() {
  return document.documentElement.scrollHeight > window.innerHeight;
}

// Add class to body if scrollbar width is supported
if (isScrollbarWidthSupported()) {
  document.body.classList.add('scrollbar-width-supported');
}

