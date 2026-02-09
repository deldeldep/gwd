document.addEventListener("DOMContentLoaded", function () {
    const slideBox = document.querySelector(".slideBox");
    const slides = slideBox.querySelectorAll("a");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const toggleBtn = document.getElementById("toggleBtn");
    const currentPage = document.getElementById("current-page");

    const slideWidth = 840;
    const slideCount = slides.length;
    let currentIndex = 0;
    let interval = null;
    let isPlaying = true;

    function updateSlide() {
        slideBox.style.left = -(slideWidth * currentIndex) + "px";
        currentPage.textContent = String(currentIndex + 1).padStart(2, "0");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlide();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlide();
    }

    function startAutoPlay() {
        interval = setInterval(nextSlide, 2000);
        isPlaying = true;

        toggleBtn.classList.remove("play");
        toggleBtn.classList.add("stop");
    }

    function stopAutoPlay() {
        clearInterval(interval);
        isPlaying = false;

        toggleBtn.classList.remove("stop");
        toggleBtn.classList.add("play");
    }

    // 이벤트
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    toggleBtn.addEventListener("click", function () {
        if (isPlaying) {
            stopAutoPlay();
        } else {
            startAutoPlay();
        }
    });

    // 초기 실행
    updateSlide();
    startAutoPlay();
});

$(function(){
    /* const slide = $(".notice-slidebox-slide")
    const slideList = $(".notice-slidebox-slide a")
    const prev = $(".notice-slidebox-control .btn-prev")
    const pause = $(".notice-slidebox-control .btn-pause")
    const play = $(".notice-slidebox-control .btn-play")
    const next = $(".notice-slidebox-control .btn-next")

    let i = 0;

    slide.append(slideList.eq(0).clone());

    function nextslide (){
        i++;
        slide.animate({left: "-280" *-i + "px"}, 2000, function(){
            if(i === 2){
                slide.css("left", "0px");
                i=0
            }
        })
    };    
    setInterval(nextslide, 3000); */


    $(".tabs ul li").click(function(e){
        e.preventDefault();
        $(".tabs ul li").removeClass("on")
        $(this).addClass("on")


    })
})