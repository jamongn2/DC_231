const options = {
  root: null,
  rootMargin: "0px",
  threshold: [0.75],
};

const callback = (triggers, observer) => {
  triggers.forEach((trigger) => {
    if (trigger.isIntersecting) {
      trigger.target.classList.add("triggered");
      // 만약 교차하면 트리거를 붙여라 
    } else {
      trigger.target.classList.remove("triggered");
      // 아니면 트리거를 지워라 
    }
  });
};

const observer = new IntersectionObserver(callback, options);

const animTriggers = document.querySelectorAll(".animTrigger");
animTriggers.forEach((animTrigger) => {
  observer.observe(animTrigger);
});
