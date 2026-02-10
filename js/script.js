$(document).ready(function() {
    // 공통 슬라이드 로직을 .each()로 루프 돌림
    $('.mainslide, .notice-slidebox').each(function(index, item) {
        // 1. 해당 슬라이드 내의 요소들 정의
        const $this = $(item); // 현재 슬라이드 박스
        const $slideBox = $this.find('.slideBox, .notice-slidebox-slide');
        const $slides = $slideBox.find('a');
        const $currentPage = $this.find('#current-page, .current-page'); // ID가 중복되면 class로 바꾸는게 좋습니다
        
        const $btnPrev = $this.find('.btn-prev');
        const $btnNext = $this.find('.btn-next');
        const $btnToggle = $this.find('#toggleBtn, .btn-pause, .btn-play');

        // 2. 개별 변수 설정
        const slideCount = $slides.length;
        const slideWidth = $slides.width(); // 각각의 너비 자동 계산
        let currentIndex = 0;
        let timer = null;
        let isPlaying = true;

        // 3. 이동 함수
        function moveSlide(idx) {
            if (idx >= slideCount) {
                currentIndex = 0;
            } else if (idx < 0) {
                currentIndex = slideCount - 1;
            } else {
                currentIndex = idx;
            }

            // 애니메이션 실행
            $slideBox.stop().animate({
                left: -(currentIndex * slideWidth)
            }, 500);

            // 페이지 번호 업데이트 (01, 02...)
            let displayNum = currentIndex + 1;
            $this.find('#current-page').text(displayNum < 10 ? '0' + displayNum : displayNum);
        }

        // 4. 재생/정지 제어
        function startAutoPlay() {
            stopAutoPlay(); // 중복 방지
            timer = setInterval(function() {
                moveSlide(currentIndex + 1);
            }, 2000);
            isPlaying = true;
            $btnToggle.removeClass('play').addClass('stop'); // CSS에 맞춰 클래스 교체
        }

        function stopAutoPlay() {
            clearInterval(timer);
            isPlaying = false;
            $btnToggle.removeClass('stop').addClass('play');
        }

        // 5. 이벤트 바인딩 (현재 슬라이드 내부의 버튼만 작동)
        $btnNext.on('click', function() {
            moveSlide(currentIndex + 1);
        });

        $btnPrev.on('click', function() {
            moveSlide(currentIndex - 1);
        });

        $btnToggle.on('click', function() {
            if (isPlaying) {
                stopAutoPlay();
            } else {
                startAutoPlay();
            }
        });

        // 6. 각 슬라이드별 초기 실행
        startAutoPlay();
    });
});



$(function(){


    $(".notice-title").click(function(e){
        e.preventDefault();
        $(".notice-title").removeClass("active")
        $(this).addClass("active")

        let index=$(this).index();

        $('.notice-listbx').hide();
        $(".notice-listbx").removeClass("active") 
        $('.notice-listbx').eq(index).show(); 
        $('.notice-listbx').eq(index).find('.notice-item').addClass("active"); 

    })


    $(".tabs ul li").click(function(e){
        e.preventDefault();
        $(".tabs ul li").removeClass("on")
        $(this).addClass("on")

        let i=$(this).index();

        $('.tabcon>div').hide(); 
        $('.tabcon>div').eq(i).show(); 
        $('.tabcon>div').eq(i).find('.ill-bx').css({rotateY : '0deg'}); 

    })
})

