let items=document.querySelectorAll('.slider .list .item');
let next=document.getElementById('next');
let prev=document.getElementById('prev');
let thumbnail=document.querySelectorAll('.thumbnail .item');
//config param
let countItem=items.length;
let itemActive=0;
//event next click
next.onclick=function(){
    itemActive=itemActive+1;
    //when next button is clicked the position of active item is increased by 1 hence next slide
    if(itemActive>=countItem){
        itemActive=0;//back to 1st img slide
    }
    showSlider();//function to display slider
}
//event prev click
prev.onclick=function(){
    itemActive=itemActive-1;
    if(itemActive<0){
        itemActive=countItem-1;
    }
    showSlider();
}
//auto run slider
let refreshInterval=setInterval(()=>{
    next.click();
},5000)
function showSlider(){
    //remove old active item
    let itemActiveOld=document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld=document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');
    //active new item

//setting next slide as active
items[itemActive].classList.add('active');
thumbnail[itemActive].classList.add('active');
//clear auto time run slider
clearInterval(refreshInterval);
refreshInterval=setInterval(()=>{
    next.click();
},5000)
}
//when clicked on a thumbnail
thumbnail.forEach((thumbnail,index)=>{
    thumbnail.addEventListener('click',()=>{
        itemActive=index;
        showSlider();
    })
})