function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}
const avatar= document.querySelector('#player');
const goldcoin= document.querySelector('#coin');
window.addEventListener('keyup',function(e){
   if (e.key==='ArrowDown'  || e.key==='Down'){
	   const currtop=extracttop(avatar.style.top);
	   avatar.style.top=`${currtop+50}px`;
   }
   else if(e.key==='ArrowUp' || e.key==='Up'){
	const currtop=extracttop(avatar.style.top);
	avatar.style.top=`${currtop-50}px`;
   }
   else if(e.key==='ArrowRight' || e.key==='Right'){
	const currtop=extracttop(avatar.style.left);
	avatar.style.left=`${currtop+50}px`;
	avatar.style.transform='scale(1,1)';
   }
   else if(e.key==='ArrowLeft' || e.key==='Left'){
	const currtop=extracttop(avatar.style.left);
	avatar.style.left=`${currtop-50}px`;
	avatar.style.transform='scale(-1,1)';
   }
   if (isTouching(avatar,goldcoin)){
	     const points=this.document.querySelector('span')
		 const score=parseInt(points.innerText)+50;
		 points.innerText=score;
	     movecoin();
   }
});
function extracttop(top){
	if (!top) return 100;
	return parseInt(top.slice(0,-2));
}
function movecoin(){
	const top=Math.floor(Math.random()*window.innerWidth);
	const bottom=Math.floor(Math.random()*(window.innerHeight-100));
    goldcoin.style.top=`${top}px`;
	goldcoin.style.left=`${bottom}px`;
}
movecoin();
function getscore(){
	const points=this.document.querySelector('span');
    const score=parseInt(points.innerText)
	return score;
}
window.onload = function() {
	var minute = 0;
	var sec = 60;
	setInterval(function() {
	  document.getElementById("timer").innerHTML = minute + " : " + sec;
	  sec--;
	  if (sec == 00) {
		if (minute == 0) {
			const x=getscore();
			if (x>=500){
			      alert('kudos! You won the game with the score of:'+ x);
			}
			else{
				alert('You lost the game,Try again');
			}
			minute=1;
		}
		minute --;
		sec = 60;
	  }
	}, 1000);
  }