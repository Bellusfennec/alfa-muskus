// Акардеон
const accordionAll = document.querySelectorAll(".answer__accordion-button");
const accordionNumber = document.querySelectorAll(".answer__accordion-number");

for (let i = 0; i < accordionAll.length; i++) {
  accordionAll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    accordionNumber[i].classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// анимация появления текста снизу вверх
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("animation__lift_show");
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".animation__lift");
for (let elm of elements) {
  observer.observe(elm);
}

// ПОПАП окно
$(".order-consultation-popup").magnificPopup({
  type: "inline",
});
$(".lobanov-video-popup").magnificPopup({
  type: "inline",
});
$(".order-preparation-popup").magnificPopup({
  type: "inline",
});
$(".more-tincture-popup").magnificPopup({
  type: "inline",
});
$(".more-capsules-popup").magnificPopup({
  type: "inline",
});
$(".more-rectal-candles-popup").magnificPopup({
  type: "inline",
});
$(".privacy-policy-popup").magnificPopup({
  type: "inline",
});
$(".reviews-video-popup").magnificPopup({
  type: "inline",
});
$('#More-certeficate').magnificPopup({
  items: [
    {
      src: 'assets/images/heals sertificate 1.png',
    },
    {
      src: 'assets/images/heals sertificate 2.png',
    },
    {
      src: 'assets/images/heals sertificate 3.png',
    },
  ],
  gallery: {
    enabled: true
  },
  type: 'image'
});

$('.gallery').each(function() { // the containers for all your galleries
  $(this).magnificPopup({
      delegate: 'a', // the selector for gallery item
      type: 'image',
      gallery: {
        enabled:true
      }
  });
});

// ВЫБОР МЕСЕНДЖЕРА
$("input[name='social2']").on('change, input', function () {
  if ($(this).is('#whatsapp2')) {
      $(this).closest('form').find('input[name="phone"]').attr('placeholder', 'Ваш телефон WhatsApp');
  } else if ($(this).is('#telegram2')) {
      $(this).closest('form').find('input[name="phone"]').attr('placeholder', 'Ваш телефон Telegram');
  } else if ($(this).is('#viber2')) {
      $(this).closest('form').find('input[name="phone"]').attr('placeholder', 'Ваш телефон Viber');
  }
});
// ВЫБОР ссылки отмечат нужный checkbox
$('.popup-checkbox-1').on('click', function(){
  $('#preparation-1').prop('checked',true);
})
$('.popup-checkbox-2').on('click', function(){
  $('#preparation-2').prop('checked',true);
})
$('.popup-checkbox-3').on('click', function(){
  $('#preparation-3').prop('checked',true);
})

// ФОРМА НОМЕА ТЕЛЕФОНА
// по умолчанию
// $('input[name="phone"]').mask('+38 (999) 999-99-99').attr("placeholder", "+38 (999) 999-99-99")

$(".phone").intlTelInput({
  onlyCountries: ["ru", "ua", "by"],
  initialCountry: "ua",
  utilsScript: "assets/plugins/intl-tel-input-master/lib/libphonenumber/build/utils.js",
});

var input = $(".phone");
input.on("countrychange", function () {
  const country = $(this).intlTelInput("getSelectedCountryData").iso2;
  if (country === "ru") {
    $(this).mask("+7 (999) 999-99-99");
    $(this).attr("placeholder", "+7 (999) 999-99-99");
  } else if (country === "ua") {
    $(this).mask("+38 (999) 999-99-99");
    $(this).attr("placeholder", "+38 (999) 999-99-99");
  } else if (country === "by") {
    $(this).mask("+375 (99) 999-99-99");
    $(this).attr("placeholder", "+375 (99) 999-99-99");
  }
  $(this).blur();
});

// увеличение value input-а при клике на button
document.addEventListener('click', function (event) {
  if (event.target.classList.contains("form__increase")) {
    ++event.target.parentElement.querySelector("input").value;
  } else if (event.target.classList.contains("form__decrease")) {
    --event.target.parentElement.querySelector("input").value;
  }
})
// document.addEventListener('click', function (event) {
//   count = event.target.parentElement.querySelector("input").value
//   console.log(count);
//   if (event.target.classList.contains("form__increase")) {
//     ++count
//     console.log('+' + count);
//   } else if (event.target.classList.contains("form__decrease")) {
//     count = count < 1 ? 1 : count
//     console.log('-' + count);
//     --count
//   } else {
//     return false
//   }
// })

// КАРУСЕЛЬ
$('.reviews__owl').owlCarousel({
  loop:true,
  nav: true,
  dots: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})

$('.heals__owl').owlCarousel({
  loop: false,
  margin:10,
  nav: true,
  mouseDrag: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})