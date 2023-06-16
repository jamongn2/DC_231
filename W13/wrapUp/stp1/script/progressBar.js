const indicator = document.querySelector("indicator");
const progressTarget = document.querySelector("main")

const progressBar = ()=> {
    const progressTargetBCR = progressTarget.getBoundingClientRect();
    const progress = 
    (1- progressTargetBCR.bottom/ progressTargetBCR.height);
    console.log(progress);
    // progress가 0보다 크거나 같고 1보다 작거나 같을때에만 실행해줘 
    if(progress >=0 && progress <= 1)
    indicator.style.cssText = "transform: scaleX(" +progress + ")";
};

// 이벤트 리스너 추가하는 방법 1
document.onscroll = () =>{
    progressBar();
};

// 이벤트 리스너 추가하는 법 2
document.addEventListener("scroll", progressBar);



// let x = 0;
// let y = 0;
// let fps = 60.0;
// let durationIwant = 2.0;
// let sinAngle = 2 * Math.PI * timeToFrames(time)/(60 *2);
// let amp = 200;
// y = amp + Math.sin(sinAngle);

// [x,y];