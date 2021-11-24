//scroll show header
//
//
//
//
function changeBack() {
  if (
    $(window).scrollTop() >
    $(".slider").innerHeight() - $(".header").innerHeight()
  ) {
    $(".header").addClass("active");
  } else {
    $(".header").removeClass("active");
  }
}

$(document).on("scroll", function () {
  changeBack();
});
//nav header
//
//
//
//
let nav = $(".nav");
function humbergur() {
  $(".btnhumber").on("click", function () {
    $(this).toggleClass("active");
    nav.toggleClass("active");
  });
}
humbergur();
////////////////////////////////////////////////////////////////////
function scaleMobileNav() {
  let w = $(window).innerWidth();
  $(window).on("resize", function () {
    if ($(w) < 500) {
      let btnmenu = $(".btnhumber");
      btnmenu.removeClass("active");
      nav.removeClass("active");
    }
  });
}
scaleMobileNav();

//
//
//
//
//back to top
function btt() {
  let backTop = $(".footer__btt");
  backTop.on("click", function () {
    $(window).scrollTop({
      //   top: 0,
      behavior: "smooth",
    });
  });
}

btt();

//
//
//
//
//language
let dropdown = $(".dropdown__wrap");
let dropdownCurrent = $(".dropdown__wrap .current span");
let dropdownOpt = $(".dropdown__wrap .option");
let dropdownItems = $(".dropdown__wrap .option a");
$(document).ready(function () {
  function lagua() {
    $(dropdown).on("click", function (e) {
      e.stopPropagation();
      $(dropdownOpt).toggleClass("active");
    });
    // $(dropdownItems).on("click", function (e) {
    //   e.preventDefault();
    //   let dropdownText = $(this).textContent;
    //   let dropdownCurrentSpan = $(dropdownCurrent).textContent;
    //   $(dropdownCurrent).innerHTML = $(dropdownText);
    //   $(this).innerHTML = $(dropdownCurrentSpan);
    // });
  }
  lagua();
});

//
//
//
//
// popup video
let button_play = $(".quality__img-item");
let popupvideo = $(".popupvideo");
let closePopup = $(".close");
let iframe = $("iframe");

button_play.on("click", function () {
  let video_id = $(this).attr("data-video-id");
  console.log({ video_id });
  iframe.attr(
    "src",
    "https://www.youtube.com/embed/" + video_id + "?autoplay=1"
  );
  popupvideo.addClass("active");
});
closePopup.on("click", function () {
  iframe.attr("src", "");
  popupvideo.removeClass("active");
});
popupvideo.on("click", function () {
  iframe.attr("src", "");
  popupvideo.removeClass("active");
  // alert("Please");
});

///
//
//
//accordion-fab
$(document).ready(function () {
  $(".question__test .detail").slideUp(); //an noi dung
  $(".accordion").on("click", function (event) {
    event.preventDefault();
    $(this).next().slideToggle(); //hien thi phan tu
  });
});

//
//
//
//tag news()
let tagButton = $(".tag");
let tagList = $(".news__info");

// function tag() {
tagButton.on("click", function () {
  let tagID = $(this).index() + 1;
  console.log({ tagID });
  tagButton.removeClass("active");
  tagList.removeClass("active");
  $(this).addClass("active");
  $(".news__info-" + tagID).addClass("active");
});
// }
// tag();

//
//
//
//
//sliders
// let itemSlide = $(".slider__item");
// let currenSlide = 0;
// let number = $(".num");
// let dot = $(".dots ol li");

// function goControl(index) {
//   $(itemSlide)[$(currenSlide)].removeClass("active");
//   $(itemSlide)[index].addClass("active");
//   $(dot)[$(currenSlide)].removeClass("selected");
//   $(dot)[index].addClass("selected");
//   $(currenSlide) = index;
//   showNum($(currenSlide) + 1);
// }
// if (itemSlide.hasClass("active")) {
//   currenSlide = $(this).index() + 1;
//   console.log({ currenSlide });
// }
// let controlNext = $(".controls .--next");
// controlNext.on("click", function () {
//   itemSlide[currenSlide].removeClass("active");
//   // $(itemSlide[$(currenSlide) + 1]).addClass("active");
//   // $(currenSlide)++;
// });

// function showNum(index) {
//   number.innerHTML = index.toString().padStart(2, "0");
// }

// dot[currenSlide].classList.add("selected");

// let controlBack = $(".controls .--prev");
// $(controlBack).on("click", function () {
//   if ($(currenSlide) > 0) {
//     goControl($(currenSlide) - 1);
//   } else {
//     goControl($(itemSlide).length - 1);
//   }
//   // alert(1);
// });

// dot.forEach(function (li, index) {
//   li.addEventListener("click", function () {
//     goControl(index);
//   });
// });
//

//
//
//SCROLL
////////////////////////////////////////////
let menu = $(".menu li a");
let heightHeader = $("header").innerHeight();
let sections = [];
// console.log(heightHeader);
// function scrol() {
menu.each(function () {
  let href = $(this).attr("href");
  let replaceClass = href.replace("#", "");
  let section = $("." + replaceClass);
  sections.push(section);

  $(this).on("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: section.offset().top - heightHeader + 1,
      behavior: "smooth",
    });
    menu.each(function () {
      $(this).removeClass("active");
    });
    // $(this).addClass("active");
  });
});

$(window).on("scroll", function (e) {
  let positionScroll = window.pageYOffset;
  sections.forEach(function (section, index) {
    if (
      positionScroll > section.offset().top - heightHeader &&
      positionScroll < section.offset().top + section.outerHeight(true)
    ) {
      menu.each(function () {
        $(this).removeClass("active");
      });
      $(menu[index]).addClass("active");
      // console.log("true", menu[index]);
    }
    //  else {
    //   $(menu[index]).removeClass("active");
    // }
  });
});
// }
// scrol();

let $carousel = $(".slider__item-wrap");
$carousel.flickity({
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
  autoPlay: true,
  on: {
    ready: function () {
      // let dotted = $(".flickity-page-dots");
      paging = $(".slider__bottom .dots ol");
      $(".slider__item").each((index, item) => {
        const li = document.createElement("li");
        if ($(item).hasClass("is-selected")) {
          $(li).addClass("selected");
        }
        $(li).appendTo(paging);
      });
    },
    change: function (index) {
      let number = $(".slider__bottom .num");
      let indexPage = index + 1;
      number.text(indexPage.toString().padStart(2, 0));
      $(".slider__bottom .dots ol li").removeClass("selected");
      $(".slider__bottom .dots ol li").eq(index).addClass("selected");
    },
  },
});
$(".slider__bottom .dots ol").on("click", "li", function () {
  var index = $(this).index();
  $carousel.flickity("selectCell", index);
});
$(".controls .--prev").on("click", function () {
  console.log(-1);
  $carousel.flickity("previous");
});
$(".controls .--next").on("click", function () {
  console.log(1);
  $carousel.flickity("next");
});

var initPhotoSwipeFromDOM = function (gallerySelector) {
  var parseThumbnailElements = function (el) {
    var thumbElements = el.childNodes,
      numNodes = thumbElements.length,
      items = [],
      figureEl,
      linkEl,
      size,
      item;
    for (var i = 0; i < numNodes; i++) {
      figureEl = thumbElements[i]; // <figure> element
      if (figureEl.nodeType !== 1) {
        continue;
      }
      linkEl = figureEl.children[0]; // <a> element
      size = linkEl.getAttribute("data-size").split("x");
      item = {
        src: linkEl.getAttribute("href"),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10),
      };
      if (figureEl.children.length > 1) {
        item.title = figureEl.children[1].innerHTML;
      }
      if (linkEl.children.length > 0) {
        // <img> thumbnail element, retrieving thumbnail url
        item.msrc = linkEl.children[0].getAttribute("src");
      }
      item.el = figureEl; // save link to element for getThumbBoundsFn
      items.push(item);
    }
    return items;
  };
  var closest = function closest(el, fn) {
    return el && (fn(el) ? el : closest(el.parentNode, fn));
  };
  var onThumbnailsClick = function (e) {
    e = e || window.event;
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    var eTarget = e.target || e.srcElement;
    var clickedListItem = closest(eTarget, function (el) {
      return el.tagName && el.tagName.toUpperCase() === "FIGURE";
    });
    if (!clickedListItem) {
      return;
    }
    var clickedGallery = clickedListItem.parentNode,
      childNodes = clickedListItem.parentNode.childNodes,
      numChildNodes = childNodes.length,
      nodeIndex = 0,
      index;
    for (var i = 0; i < numChildNodes; i++) {
      if (childNodes[i].nodeType !== 1) {
        continue;
      }
      if (childNodes[i] === clickedListItem) {
        index = nodeIndex;
        break;
      }
      nodeIndex++;
    }
    if (index >= 0) {
      openPhotoSwipe(index, clickedGallery);
    }
    return false;
  };
  var photoswipeParseHash = function () {
    var hash = window.location.hash.substring(1),
      params = {};
    if (hash.length < 5) {
      return params;
    }
    var vars = hash.split("&");
    for (var i = 0; i < vars.length; i++) {
      if (!vars[i]) {
        continue;
      }
      var pair = vars[i].split("=");
      if (pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }
    if (params.gid) {
      params.gid = parseInt(params.gid, 10);
    }
    return params;
  };
  var openPhotoSwipe = function (
    index,
    galleryElement,
    disableAnimation,
    fromURL
  ) {
    var pswpElement = document.querySelectorAll(".pswp")[0],
      gallery,
      options,
      items;
    items = parseThumbnailElements(galleryElement);
    options = {
      galleryUID: galleryElement.getAttribute("data-pswp-uid"),
      getThumbBoundsFn: function (index) {
        var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
          pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop,
          rect = thumbnail.getBoundingClientRect();

        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
      },
      showAnimationDuration: 0,
      hideAnimationDuration: 0,
    };
    if (fromURL) {
      if (options.galleryPIDs) {
        for (var j = 0; j < items.length; j++) {
          if (items[j].pid == index) {
            options.index = j;
            break;
          }
        }
      } else {
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    }
    if (isNaN(options.index)) {
      return;
    }
    if (disableAnimation) {
      options.showAnimationDuration = 0;
    }
    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };
  var galleryElements = document.querySelectorAll(gallerySelector);
  for (var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute("data-pswp-uid", i + 1);
    galleryElements[i].onclick = onThumbnailsClick;
  }
  var hashData = photoswipeParseHash();
  if (hashData.pid && hashData.gid) {
    openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
  }
};
// initPhotoSwipeFromDOM(".carousel-img");
$(window).on("load", function () {
  initPhotoSwipeFromDOM(".carousel-img");
});
