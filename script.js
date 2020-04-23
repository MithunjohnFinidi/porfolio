$( document ).ready(function() {
   $("nav #navbarNav ul li").click(function(){
        $("nav").find(".current_item").removeClass("current_item");
       $(this).addClass("current_item");
      var pageId = $(this).attr("data-page");
      $("html, body").animate({ scrollTop: ($("#"+pageId).offset().top - 10) }, 1000);
    });

    const sections = document.querySelectorAll('.slide_in');
    const sliders = document.querySelectorAll('.slide_up');
    const sectionsRight = document.querySelectorAll('.slide_in_right');
    const popUps = document.querySelectorAll('.show_up');

    const options = { 
      root: null,
      thershold: 1
    };

    const observer = new IntersectionObserver( (entries, observer) => {
      entries.forEach( (entry) => {
        if(!entry.isIntersecting) {
          return
        } else {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      })
    }, options);

    sections.forEach( (section) => {
      observer.observe(section);
    })

    sliders.forEach( (slider) => {
      observer.observe(slider);
    })

    sectionsRight.forEach( (slider) => {
      observer.observe(slider);
    })

    popUps.forEach( (popup) => {
      observer.observe(popup);
    })
    
    
});
