// let box = document.querySelector(".box");
// box.onclick = ()=>{
//     box.classList.toggle("boxSelected");
// }

let boxes = document.querySelectorAll(".box");
console.log(boxes);
console.log(boxes[0]);
console.log(boxes[1]);
console.log(boxes[2]);
// boxes.forEach(function(grass){
//     grass.onclick = () => {
//         grass.classList.toggle("boxSelected");
//     }
// });
// foreach의 괄호속은(each)는 변수로 아무거나 쓴거임 명시성
boxes.forEach((each)=> {
    each.onclick =()=>{
        each.classList.toggle("boxSelected")
    }
});