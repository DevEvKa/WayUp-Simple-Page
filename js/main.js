

var el = document.getElementsByClassName('menu__item');
for(var i=0; i<el.length; i++) {
   el[i].addEventListener("mouseenter", showSub, false);
   el[i].addEventListener("mouseleave", hideSub, false);
}
function showSub(e) {
   if(this.children.length>1) {
      this.children[1].style.height = "auto";
      this.children[1].style.overflow = "visible";
      this.children[1].style.opacity = "1";
   } else {
      return false;
   }
}
function hideSub(e) {
    if(this.children.length>1) {
      this.children[1].style.height = "0px";
       this.children[1].style.overflow = "hidden";
       this.children[1].style.opacity = "0";
    } else {
       return false;
    }
}

window.onload = function () {
    var a = document.getElementById('switch');
    a.onclick = function() {
        if (this.innerHTML=='Свяжитесь со мной') this.innerHTML = '+7 937 214 48 82';
        else if (this.innerHTML=='+7 937 214 48 82') this.innerHTML = 'karabanovaep@yandex.ru';
        else this.innerHTML = 'Свяжитесь со мной';
        return false;
    }
}
