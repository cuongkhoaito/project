const ButtonEvaluate = document.querySelector('.js-button-evaluate')
        const modal = document.querySelector('.js-modal')
        const modalContainer = document.querySelector('.js-modal-container')
        const modalClose = document.querySelector('.js-modal-close')
        // hàm hiển thị modal phản hồi ( thêm class open vào modal)
        function showEvaluate() {
            modal.classList.add('open')
        }
        // hàm ẩn modal phản hồi ( ẩn class open của modal) 
        function hideEvaluate() {
            modal.classList.remove('open')
        }
        //nghe hành vi click của button evanluate
            ButtonEvaluate.addEventListener('click', showEvaluate)

        //nghe hành vi click của button close
            modalClose.addEventListener('click',hideEvaluate)
            modal.addEventListener('click', hideEvaluate)
            modalContainer.addEventListener('click', function (event) {
                event.stopPropagation()
            })





 //khai báo biến slideIndex đại diện cho slide hiện tại
 var slideIndex;
 // KHai bào hàm hiển thị slide
 function showSlides() {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     var dots = document.getElementsByClassName("dot");
     for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }

     slides[slideIndex].style.display = "block";  
     dots[slideIndex].className += " active";
     //chuyển đến slide tiếp theo
     slideIndex++;
     //nếu đang ở slide cuối cùng thì chuyển về slide đầu
     if (slideIndex > slides.length - 1) {
       slideIndex = 0
     }    
     //tự động chuyển đổi slide sau 5s
     setTimeout(showSlides, 5000);
 }
 //mặc định hiển thị slide đầu tiên 
 showSlides(slideIndex = 0);


 function currentSlide(n) {
   showSlides(slideIndex = n);
 }


 $(document).ready(function() {
    $('.accordion-item.activee  .accordion-body').slideDown();
   $('.accordion-header').click(function() {
  $(this).parent().toggleClass('activee');
  $(this).parent().children('.accordion-body').slideToggle();
    });
});


// pugin messenger
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "103714034331922");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function() {
  FB.init({
    xfbml            : true,
    version          : 'v11.0'
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));





