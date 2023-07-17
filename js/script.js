const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });  
});

const animated = document.querySelectorAll('.animate');  
animated.forEach((el) => observer.observe(el));