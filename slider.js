
function disp(element) { 
        var $this = $(element);
        var base_value = $this.children('.slides-container');
        var a = base_value.children('.slide');
        var d = $this.children('.arrows');
        var prevSlide = d.children('.prev');
        var nextSlide = d.children('.next');
        var slidesCount = a.length;
        var current_slide = a.first();
        var index = 1;
        var c = 1;
        
     
        function fadeNext() {
            current_slide.removeClass('active').fadeOut(500);

            if(index == slidesCount) {
                current_slide = a.first();
                current_slide.delay(300).addClass('active').fadeIn(500);
                index = 1;
            } else {
                index++;
                current_slide = current_slide.next();
                current_slide.delay(300).addClass('active').fadeIn(500);
            }
        }
        function fadePrev() {
            current_slide.removeClass('active').fadeOut(500);

            if(index == 1) {
                current_slide = a.last();
                current_slide.delay(300).addClass('active').fadeIn();
                index = slidesCount;
            } else {
                index--;
                current_slide = current_slide.prev();
                current_slide.delay(300).addClass('active').fadeIn(500);
            }

        }
        $(nextSlide).click(function(e) {
            
            fadeNext();
        });
        $(prevSlide).click(function(e) {
            fadePrev();
        });

       $(document).ready(function(){
            setInterval(fadeNext,4000);
     
        });
       $('#dot1').click(function(){
            $("#img1").css("display","block");
            $("#img2").css("display","none");
            $("#img3").css("display","none");
        })
       $('#dot2').click(function(){
            $("#img2").css("display","block");
            $("#img1").css("display","none");
            $("#img3").css("display","none");
        })
       $('#dot3').click(function(){
            $("#img3").css("display","block");
            $("#img1").css("display","none");
            $("#img2").css("display","none");
        })

    };
    $(function() {
        disp('#slider', true, 1000);
    });


