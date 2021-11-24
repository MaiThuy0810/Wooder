//scroll show header
//
//
//
//
let header = document.querySelector(".header");
let slider = document.querySelector(".slider");
let heightSlide = slider.clientHeight;
let heightHead = header.clientHeight;
function changeBack() {
  let scrollY = window.pageYOffset;
  if (scrollY > heightSlide - heightHead) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

document.addEventListener("scroll", function () {
  changeBack();
});

//nav header
//
//
//
//
let nav = document.querySelector(".nav"),
  btnmenu = document.querySelector(".btnhumber");
btnmenu.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("active");
});
// function hidenNav() {
//   this.classList.remove("active");
//   nav.classList.remove("active");
// }
// let window = window.innerWidth;
// if (window < 992) {
//   window.location.reload();
//   hidenNav();
//   // alert(1);
// }
let w = window.innerWidth;
window.addEventListener("resize", function () {
  if (w < 992) {
    btnmenu = document.querySelector(".btnhumber");
    btnmenu.classList.remove("active");
    nav.classList.remove("active");
  }
});

//
//
//
//
//back to top
let backTop = document.querySelector(".footer__btt");
backTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
//
//
//
//
//language
let dropdown = document.querySelector(".dropdown__wrap");
let dropdownCurrent = document.querySelector(".dropdown__wrap .current span");
let dropdownOpt = document.querySelector(".dropdown__wrap .option");
let dropdownItems = document.querySelectorAll(".dropdown__wrap .option a");
dropdown.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdownOpt.classList.toggle("active");
});

dropdownItems.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    let dropdownText = this.textContent;
    let dropdownCurrentSpan = dropdownCurrent.textContent;
    dropdownCurrent.innerHTML = dropdownText;
    this.innerHTML = dropdownCurrentSpan;
  });
});

//
//
//
//
// popup video
let button_play = document.querySelectorAll(".quality__img-item");
let popupvideo = document.querySelector(".popupvideo");
let closePopup = document.querySelector(".close");
let iframe = document.querySelector(".popupvideo .iframe iframe");
button_play.forEach(function (button) {
  button.addEventListener("click", function () {
    let video_id = button.getAttribute("data-video-id");
    iframe.setAttribute(
      "src",
      "https://www.youtube.com/embed/" + video_id + "?autoplay=1"
    );
    popupvideo.classList.add("active");
    console.log(video_id);
  });
});

closePopup.addEventListener("click", function () {
  iframe.setAttribute("src", "");
  popupvideo.classList.remove("active");
});
document.querySelector(".popupvideo").addEventListener("click", function () {
  iframe.setAttribute("src", "");
  popupvideo.classList.remove("active");
  // alert("Please");
});

//
//
//
//
//sliders
let itemSlide = document.querySelectorAll(".slider__item");
let currenSlide = 0;
let number = document.querySelector(
  ".slider__bottom .container-fluid .paging .num"
);
let dot = document.querySelectorAll(
  ".slider__bottom .container-fluid .paging .dots ol li"
);

itemSlide.forEach(function (item, index) {
  if (item.classList.contains("active")) {
    currenSlide = index;
  }
});
function showNum(index) {
  number.innerHTML = index.toString().padStart(2, "0");
}

// showNum(currenSlide + 1);
dot[currenSlide].classList.add("selected");

function goControl(index) {
  itemSlide[currenSlide].classList.remove("active");
  itemSlide[index].classList.add("active");
  dot[currenSlide].classList.remove("selected");
  dot[index].classList.add("selected");
  currenSlide = index;
  showNum(currenSlide + 1);
}

let controlBack = document.querySelector(".controls .--prev");
controlBack.addEventListener("click", function () {
  if (currenSlide > 0) {
    goControl(currenSlide - 1);
  } else {
    goControl(itemSlide.length - 1);
  }
  // alert(1);
});

let controlNext = document.querySelector(".controls .--next");
controlNext.addEventListener("click", function () {
  if (currenSlide < itemSlide.length - 1) {
    goControl(currenSlide + 1);
  } else {
    goControl(0);
  }
});
dot.forEach(function (li, index) {
  li.addEventListener("click", function () {
    goControl(index);
  });
});
//
//
//
//fab
var acc = document.querySelectorAll(".accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
//
//
//
//tag news()
let tagButton = document.querySelectorAll(".news__tag .news__tag-text .tag");
let tagList = document.querySelectorAll(".news__info");
tagButton.forEach(function (item, index) {
  item.addEventListener("click", function () {
    let tagID = index + 1;
    console.log(tagID);
    tagButton.forEach(function (tag) {
      tag.classList.remove("active");
    });
    tagList.forEach(function (tags) {
      tags.classList.remove("active");
    });
    item.classList.add("active");
    document.querySelector(".news__info-" + tagID).classList.add("active");
  });
});
//
//
//
//

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("#myBar").style.width = scrolled + "%";
// }
// window.onscroll = function () {
//   myFunction();
// };

var elem = document.querySelector(".carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "center",
  contain: true,
  wrapAround: true,
  imagesLoaded: true,
  percentPosition: true,
});

// var flkty = new Flickity(".carousel");

// var progressBar = document.querySelector(".progress-bar");

// flkty.on("scroll", function (progress) {
//   progress = Math.max(0, Math.min(1, progress));
//   progressBar.style.width = progress * 100 + "%";
// });

//
//
//
//
//popup gallery
// var initPhotoSwipeFromDOM = function (gallerySelector) {
//   var parseThumbnailElements = function (el) {
//     var thumbElements = el.childNodes,
//       numNodes = thumbElements.length,
//       items = [],
//       figureEl,
//       linkEl,
//       size,
//       item;
//     for (var i = 0; i < numNodes; i++) {
//       figureEl = thumbElements[i]; // <figure> element
//       if (figureEl.nodeType !== 1) {
//         continue;
//       }
//       linkEl = figureEl.children[0]; // <a> element
//       size = linkEl.getAttribute("data-size").split("x");
//       item = {
//         src: linkEl.getAttribute("href"),
//         w: parseInt(size[0], 10),
//         h: parseInt(size[1], 10),
//       };
//       if (figureEl.children.length > 1) {
//         item.title = figureEl.children[1].innerHTML;
//       }
//       if (linkEl.children.length > 0) {
//         // <img> thumbnail element, retrieving thumbnail url
//         item.msrc = linkEl.children[0].getAttribute("src");
//       }
//       item.el = figureEl; // save link to element for getThumbBoundsFn
//       items.push(item);
//     }
//     return items;
//   };
//   var closest = function closest(el, fn) {
//     return el && (fn(el) ? el : closest(el.parentNode, fn));
//   };
//   var onThumbnailsClick = function (e) {
//     e = e || window.event;
//     e.preventDefault ? e.preventDefault() : (e.returnValue = false);
//     var eTarget = e.target || e.srcElement;
//     var clickedListItem = closest(eTarget, function (el) {
//       return el.tagName && el.tagName.toUpperCase() === "FIGURE";
//     });
//     if (!clickedListItem) {
//       return;
//     }
//     var clickedGallery = clickedListItem.parentNode,
//       childNodes = clickedListItem.parentNode.childNodes,
//       numChildNodes = childNodes.length,
//       nodeIndex = 0,
//       index;
//     for (var i = 0; i < numChildNodes; i++) {
//       if (childNodes[i].nodeType !== 1) {
//         continue;
//       }
//       if (childNodes[i] === clickedListItem) {
//         index = nodeIndex;
//         break;
//       }
//       nodeIndex++;
//     }
//     if (index >= 0) {
//       openPhotoSwipe(index, clickedGallery);
//     }
//     return false;
//   };
//   var photoswipeParseHash = function () {
//     var hash = window.location.hash.substring(1),
//       params = {};
//     if (hash.length < 5) {
//       return params;
//     }
//     var vars = hash.split("&");
//     for (var i = 0; i < vars.length; i++) {
//       if (!vars[i]) {
//         continue;
//       }
//       var pair = vars[i].split("=");
//       if (pair.length < 2) {
//         continue;
//       }
//       params[pair[0]] = pair[1];
//     }
//     if (params.gid) {
//       params.gid = parseInt(params.gid, 10);
//     }
//     return params;
//   };
//   var openPhotoSwipe = function (
//     index,
//     galleryElement,
//     disableAnimation,
//     fromURL
//   ) {
//     var pswpElement = document.querySelectorAll(".pswp")[0],
//       gallery,
//       options,
//       items;
//     items = parseThumbnailElements(galleryElement);
//     options = {
//       galleryUID: galleryElement.getAttribute("data-pswp-uid"),
//       getThumbBoundsFn: function (index) {
//         var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
//           pageYScroll =
//             window.pageYOffset || document.documentElement.scrollTop,
//           rect = thumbnail.getBoundingClientRect();

//         return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
//       },
//       showAnimationDuration: 0,
//       hideAnimationDuration: 0,
//     };
//     if (fromURL) {
//       if (options.galleryPIDs) {
//         for (var j = 0; j < items.length; j++) {
//           if (items[j].pid == index) {
//             options.index = j;
//             break;
//           }
//         }
//       } else {
//         options.index = parseInt(index, 10) - 1;
//       }
//     } else {
//       options.index = parseInt(index, 10);
//     }
//     if (isNaN(options.index)) {
//       return;
//     }
//     if (disableAnimation) {
//       options.showAnimationDuration = 0;
//     }
//     gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
//     gallery.init();
//   };
//   var galleryElements = document.querySelectorAll(gallerySelector);
//   for (var i = 0, l = galleryElements.length; i < l; i++) {
//     galleryElements[i].setAttribute("data-pswp-uid", i + 1);
//     galleryElements[i].onclick = onThumbnailsClick;
//   }
//   var hashData = photoswipeParseHash();
//   if (hashData.pid && hashData.gid) {
//     openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
//   }
// };

// window.load(function () {
//   initPhotoSwipeFromDOM(".carousel-img");
// });
