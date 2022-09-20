const btnEl =document.querySelector('button');
const bodyEl =document.querySelector('body');
const iconEl =document.querySelector('i');
const containerEl =document.querySelector('.container');
const vidContainer =document.querySelector('.video-container');
const vidEl =document.querySelector('video');

btnEl.addEventListener("click", ()=>{
containerEl.classList.toggle('disappear');
vidContainer.classList.toggle('disappear')
});

iconEl.addEventListener("click", ()=>{
 vidContainer.classList.toggle('disappear');
containerEl.classList.toggle('disappear');
vidEl.pause();
vidEl.currentTime=0;

})