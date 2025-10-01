let links = document.querySelectorAll("ul li a");
let loc = location.href;
links.forEach((link)=>{
  if(link.href === loc){
    link.classList.add("active");
  }
})