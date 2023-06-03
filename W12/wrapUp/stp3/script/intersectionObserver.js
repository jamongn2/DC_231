// new IntersectionObserver(조건에 부합할때 실행할 함수, 옵션);

// function scrollFunction(){}
// let scrollFunction= ()=>{};
// 위의 두 개의 구문은 같은 말임 

let observerOption ={
    root: null,
    rootmargin : "0px 0px -200px 0px",
    threshold:0.75,
};

// function observationCallback () {}
let observerCallback = (observingTargets) => {
    observingTargets.forEach(
      (eachObservingTarget) => {
        if (eachObservingTarget.isIntersecting) {
          eachObservingTarget.target.classList.add(
            "triggered"
          );
        } else {
          eachObservingTarget.target.classList.remove(
            "triggered"
          );
        }
      }
    );
  };




let observer = new IntersectionObserver(
    observerCallback,
    observerOption
    
);

let elems= document.querySelectorAll(".animTrigger");
console.log(elems);

// 하드코딩
// observer.observe(elems[0]);
// observer.observe(elems[1]);
// observer.observe(elems[2]);
// ...
// 조금 똑똑한 코딩
// for (let idx = 0; idx< elems.length; idx++){
    // obderver.observe(elems[idx]);
// }
// 있어보이는 코딩
elems.forEach((eachElem)=>{
    observer.observe(eachElem);
} 
);