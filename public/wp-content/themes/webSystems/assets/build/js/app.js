window.mobileCheck = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check
};
window.mobileAndTabletCheck = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check
};
$("textarea").each(function () {
    this.setAttribute("style", "height:" + this.scrollHeight + "px;overflow-y:hidden;");
    var par = this.parentNode.parentNode.parentNode.parentNode;
    if (window.innerWidth > 1439) {
        par.setAttribute("style", "height: 714px");
        par.setAttribute("style", "height: 714px")
    }
}).on("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
    var par = this.parentNode.parentNode.parentNode.parentNode;
    if (window.innerWidth > 1439) {
        par.style.height = 514 + this.scrollHeight + "px";
        par.parentNode.style.height = 514 + this.scrollHeight + "px"
    }
});
AOS.init({
    duration: 800,
    once: true,
    easing: "ease-out-quad",
    offset: 50
});

function initAos() {
    $(".aos-init").each(function () {
        if ($(this).offset().top < $(window).innerHeight()) {
            $(this).addClass("aos-animate")
        }
    })
}

function initTouchAos() {
    if (window.matchMedia("(hover: none)").matches) {
        $(".aos-init").each(function () {
            var top = $(window).scrollTop();
            if ($(this).offset().top < top + $(window).innerHeight()) {
                $(this).addClass("aos-animate")
            }
        })
    }
}
initTouchAos();
window.addEventListener("scroll", initTouchAos, false);

$(document).ready(function () {
    var options = {
        damping: 0.05,
        renderByPixels: true,
        syncCallbacks: true,
        alwaysShowTracks: false
    };
    var scrollbar = Scrollbar.init(document.querySelector(".js-scroll"), options);
    scrollbar.track.xAxis.element.remove();
    var fixed = document.querySelector(".fixed");
    var header = document.querySelector(".header");
    var footer = document.querySelector(".footer");
    var cookieModal = document.querySelector(".cookie");
    document.querySelector(".scroll-content").setAttribute("id", "top");
    var $header = $(".header");
    var $landingNav = $(".js-landing-nav");
    var $landingNavWrapper = $(".js-landing-nav-wrapper");
    var $landingNavList = $(".js-landing-nav-list");
    var $landingNavBox = $(".js-landing-nav-box");
    var $landingNavBg = $(".js-landing-nav-bg");
    var $landingNavSVG = $(".js-landing-nav-svg");
    var landingNavSVGColorStart = $landingNavSVG.attr("data-color-start");
    var $landingContentBox = [];
    var landingNavBgColors = [];
    var landingNavBoxPercent = 100 / $landingNavBox.length;
    $landingNavBox.each(function (index) {
        var href = $(this).attr("href").substring(1);
        var colorEnd = $(this).attr("data-color-end");
        landingNavBgColors.push(colorEnd);
        $landingContentBox.push($("#" + href));
        if (index == 0) {
            $(this).css("--nav-variable-bg", "linear-gradient(to right, " + landingNavSVGColorStart + " 0%, " + colorEnd + " 100%)")
        } else {
            $(this).css("--nav-variable-bg", "linear-gradient(to right, " + landingNavBgColors[index - 1] + " 0%, " + colorEnd + " 100%)")
        }
    });


    function landingNavSetup() {
        if ($landingNav.length) {
            var landingNavBgGradient = "";
            var landingNavSVGWidth = "";
            landingNavSVGWidth = $landingNavSVG.css("width");
            $landingNavBg.css("left", landingNavSVGWidth);
            landingNavBgColors.map(function (item, index) {
                landingNavBgGradient += ", " + item + " " + (index + 1) * landingNavBoxPercent + "%"
            });
            $landingNavSVG.css("--nav-variable-bg", "linear-gradient(to right, " + landingNavSVGColorStart + " 0%, " + landingNavBgColors[0] + " 100%)");
            $landingNavBg.css("--nav-variable-bg", "linear-gradient(to right" + landingNavBgGradient + ")")
        }
    }
    landingNavSetup();

    function landingNavBuild() {
        if ($landingNav.length) {
            var headerRect = $header[0].getBoundingClientRect();
            var landNavRect = $landingNav[0].getBoundingClientRect();
            if (window.matchMedia("(hover: hover)").matches) {
                if (landNavRect.y - headerRect.height < 0) {
                    $(".header").css("transform", "translateY(" + (landNavRect.y - headerRect.height) + "px)")
                } else if (landNavRect.y - headerRect.height > 0) {
                    $header.css("transform", "translateY(0px)")
                }
                if (landNavRect.y < 0) {
                    $landingNavWrapper.css("transform", "translateY(" + (Math.abs(landNavRect.y) - 1) + "px)")
                } else {
                    $landingNavWrapper.css("transform", "translateY(0px)")
                }
            } else {
                if (landNavRect.y - headerRect.height < 0) {
                    $header.css("transform", "translateY(" + (landNavRect.y - headerRect.height) + "px)")
                } else if (landNavRect.y - headerRect.height > 0) {
                    $header.css("transform", "translateY(0px)")
                }
                if (landNavRect.y < 0) {
                    $landingNavWrapper.css("position", "fixed");
                    $landingNavWrapper.css("transform", "translateY(0px)")
                } else {
                    $landingNavWrapper.css("transform", "translateY(0px)");
                    $landingNavWrapper.css("position", "relative")
                }
            }
            $landingContentBox.forEach(function (item, index) {
                var boxRect = item[0].getBoundingClientRect();
                var pixelToPercent = landingNavBoxPercent / boxRect.height;
                var pixelToPercentBox = 100 / boxRect.height;
                if (boxRect.y > boxRect.height * -1 && boxRect.y < 0) {
                    var currentPercent = Math.abs(boxRect.y) * pixelToPercent;
                    var currentBoxPercent = Math.abs(boxRect.y) * pixelToPercentBox;
                    $landingNavBg.css("--nav-variable-percent", currentPercent + landingNavBoxPercent * index + "%");
                    $landingNavBox.each(function (navBoxIndex) {
                        var $this = $(this);
                        if (index === navBoxIndex) {
                            $this.addClass("active");
                            $this.closest(".landing-nav__box").addClass("is-active");
                            $this.css("--nav-variable-percent", currentBoxPercent + "%")
                        } else {
                            $this.removeClass("active");
                            $this.closest(".landing-nav__box").removeClass("is-active");
                            $this.css("--nav-variable-percent", "0%")
                        };
                        // if (window.matchMedia("(min-width:992px)").matches) {
                        // 	if (navBoxIndex <= index) {
                        // 		$this.addClass("color-black");
                        // 	} else {
                        // 		$this.removeClass("color-black");
                        // 	}
                        // } else {
                        // 	if (navBoxIndex == index) {
                        // 		$this.addClass("color-black");
                        // 	} else {
                        // 		$this.removeClass("color-black");
                        // 	}
                        // }
                    })
                } else if (index === 0 && boxRect.y >= 0) {
                    $landingNavBg.css("--nav-variable-percent", "-1%");
                    $landingNavSVG.removeClass("active");
                    $landingNavBox.removeClass("color-black");
                    $landingNavBox.each(function (navBoxIndex) {
                        var $this = $(this);
                        if (index === navBoxIndex) {
                            $this.css("--nav-variable-percent", "0%")
                        }
                    })
                } else if (index + 1 == $landingContentBox.length && boxRect.y <= 0) {
                    $landingNavBox.each(function (navBoxIndex) {
                        var $this = $(this);
                        if (index === navBoxIndex) {
                            $this.addClass("active");
                            $this.closest(".landing-nav__box").addClass("is-active");
                            $this.css("--nav-variable-percent", "100%")
                        }
                    })
                }
                if (index === 0 && boxRect.y < 400) {
                    $landingNavSVG.addClass("active")
                }
            })
        }
    }
    var deltaY = 0;
    addEventListener("wheel", function (event) {
        deltaY = event.deltaY;
        if ($(sectionE).hasClass("fixed") && !$(videoE).hasClass("scaling")) {
            $(videoE).addClass("scaling");
            if (deltaY > 0) {
                if (sectionE.offsetHeight - videoE.offsetHeight > 10) {
                    scaleVideo(increase)
                }
            } else {
                if (videoE.offsetHeight >= videoHeight) {
                    scaleVideo(increase * -1)
                }
            }
        }
    });
    if (document.querySelector(".pv-section")) {
        var sectionRatio = document.querySelector(".pv-section").offsetWidth / document.querySelector(".pv-section").offsetHeight;
        var videoHeight = document.querySelector(".pv-video").offsetHeight;
        if (window.outerWidth > 1200) {
            var videoWidth = document.querySelector(".pv-video").style.width = videoHeight * sectionRatio + "px"
        } else {
            var videoWidth = videoHeight * sectionRatio + "px"
        }
        var sectionE = document.querySelector(".pv-section");
        var increase = sectionE.offsetHeight - videoHeight + 1;
        var increaseRepeat = 0;
        var videoE = document.querySelector(".pv-video video");
        var labelLeftE = document.querySelector(".pv-label-left");
        var labelRightE = document.querySelector(".pv-label-right");
        var deltaCustom = 0;
        var playButton = document.querySelector(".pv-button");;
    }
    scrollbar.addListener(function (_ref) {
        var offset = _ref.offset;
        if (fixed) {
            fixed.style.top = offset.y + "px"
        }
        if (offset.y > 0) {
            header.classList.add("fixed")
        } else {
            header.classList.remove("fixed")
        } if (cookieModal && cookieModal.classList.contains("active")) {
            if (offset.y + window.innerHeight > footer.offsetTop) {
                document.querySelector(".cookie").classList.add("hide")
            } else {
                document.querySelector(".cookie").classList.remove("hide")
            }
        }
        if (document.querySelector(".pv-section")) {
            deltaCustom = deltaCustom - offset.y;
            var pvOffset = sectionE.offsetTop - scrollbar.offset.y - document.querySelector(".header").offsetHeight;
            if (deltaY > 0) {
                if (isVideoSmall(pvOffset)) {
                    $(sectionE).addClass("fixed");
                    scrollbar.scrollTop = sectionE.offsetTop - document.querySelector(".header").offsetHeight
                } else {
                    $(sectionE).removeClass("fixed")
                }
            } else {
                if (isVideoLarge(pvOffset)) {
                    $(sectionE).addClass("fixed");
                    scrollbar.scrollTop = sectionE.offsetTop - document.querySelector(".header").offsetHeight
                } else {
                    $(sectionE).removeClass("fixed")
                }
            }
            deltaCustom = offset.y
        }
        landingNavBuild();
        initAos()
    });
    
    $(window).on("resize", function (e) {
        landingNavSetup();
        landingNavBuild()
    });
})

function isVideoSmall(pvOffset) {
    return pvOffset < 30 && videoE.offsetHeight < sectionE.offsetHeight
}

function isVideoLarge(pvOffset) {
    return pvOffset >= 0 && videoE.offsetHeight > videoHeight
}

function scaleVideo(increase) {
    increaseRepeat += increase;
    videoE.style.height = videoE.offsetHeight + increase + "px";
    videoE.style.width = (videoE.offsetHeight + increase) * sectionRatio + "px";
    labelLeftE.style.right = "calc((100% + 30px) - " + increaseRepeat * 0.38 * sectionRatio + "px)";
    labelRightE.style.left = "calc((100% + 30px) - " + increaseRepeat * 0.38 * sectionRatio + "px)";
    setTimeout(function () {
        $(videoE).removeClass("scaling")
    }, 905)
}
var minScale = 1,
    maxScale = 1.7,
    minShift = 51,
    maxShift = 160,
    minOpacity = .5,
    maxOpacity = .8,
    minBO = 0,
    maxBO = 1,
    minBS = .8,
    maxBS = 1,
    boStep = (maxBO - minBO) / 100,
    bsStep = (maxBS - minBS) / 100,
    shiftStep = (maxShift - minShift) / 100,
    opacityStep = (maxOpacity - minOpacity) / 100,
    scaleStep = (maxScale - minScale) / 100;
$(window).on("scroll", function (e) {
    if (document.querySelector(".pv-section")) {
        var pvOffset = sectionE.offsetTop - $(window).scrollTop();
        var sectionScrolledP = pvOffset * -1 / sectionE.offsetHeight / 2 * 100 * 4;
        var scale = minScale + scaleStep * sectionScrolledP;
        var opacity = minOpacity + opacityStep * sectionScrolledP;
        var shift = minShift + shiftStep * sectionScrolledP;
        var bo = minBO + boStep * sectionScrolledP;
        var bs = minBS + bsStep * sectionScrolledP;
        scale > maxScale ? scale = maxScale : scale;
        scale < minScale ? scale = minScale : scale;
        opacity > maxOpacity ? opacity = maxOpacity : opacity;
        opacity < minOpacity ? opacity = minOpacity : opacity;
        shift > maxShift ? shift = maxShift : shift;
        shift < minShift ? shift = minShift : shift;
        bo > maxBO ? bo = maxBO : shift;
        bo < minBO ? bo = minBO : shift;
        bs > maxBS ? bs = maxBS : shift;
        bs < minBS ? bs = minBS : shift;
        videoE.style.transform = "translate(-50%, -50%) scale(" + scale + ")";
        videoE.style.opacity = opacity;
        labelLeftE.style.right = shift + "%";
        labelRightE.style.left = shift + "%";
        playButton.style.transform = "translate(-50%, -50%) scale(" + bs + ")";
        playButton.style.opacity = bo
    }
    landingNavBuild()
});
$(".js-landing-nav-toggle").on("click", function () {
    var $landingNavList = $(".js-landing-nav-list");
    if ($landingNavList.hasClass("show-all")) {
        $landingNavList.removeClass("show-all");
        $(this).removeClass("active")
    } else {
        $landingNavList.addClass("show-all");
        $(this).addClass("active")
    }
});
/* - - - - - - - - - - - - - -       scroll top       - - - - - - - - - - - - - - - */
document.querySelectorAll(".js-scroll-top").forEach(function (item) {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        var link = this.getAttribute("href");
        var target = document.getElementById(link.substring(1));
        var paddingTop = parseInt(window.getComputedStyle(target, null).getPropertyValue("padding-top"));
        var offsetTopValue = document.querySelector(".header").offsetHeight - paddingTop;
        if (link === "#top") {
            offsetTopValue = 0
        }
        if (target) {
            if (window.matchMedia("(hover: hover)").matches) {
                scrollbar.scrollIntoView(target, {
                    offsetTop: -scrollbar.containerEl.scrollTop + offsetTopValue
                })
            } else {
                window.scrollTo({
                    top: target.offsetTop - document.querySelector(".header").offsetHeight,
                    behavior: "smooth"
                })
            }
        }
    }, false)
});
document.querySelectorAll(".js-landing-nav-box").forEach(function (item) {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        if ($(".js-landing-nav-list").hasClass("show-all")) {
            $(".js-landing-nav-list").removeClass("show-all");
            $(".js-landing-nav-toggle").removeClass("active")
        } else {
            $(".js-landing-nav-list").addClass("show-all");
            $(".js-landing-nav-toggle").addClass("active")
        }
        var link = this.getAttribute("href");
        var target = document.getElementById(link.substring(1));
        var paddingTop = parseInt(window.getComputedStyle(target, null).getPropertyValue("padding-top"));
        var navHeight = $(".js-landing-nav-wrapper").height();
        var offsetTopValue = document.querySelector(".js-landing-nav-wrapper").offsetHeight - navHeight - 1;
        if (link === "#top") {
            offsetTopValue = 0
        }
        if (target) {
            if (window.matchMedia("(hover: hover)").matches) {
                scrollbar.scrollIntoView(target, {
                    offsetTop: -scrollbar.containerEl.scrollTop + offsetTopValue
                })
            } else {
                window.scrollTo({
                    top: target.offsetTop - document.querySelector(".js-landing-nav-wrapper").offsetHeight + navHeight + 1,
                    behavior: "smooth"
                })
            }
        }
    }, false)
});
$(document).ready(function () {
    //导航
    $(".top-menu>ul>li").hover(function() {
        $(this).children('div.down-list').show();
    }, function() {
        $(this).children('div.down-list').hide();
    })
    
    function showCookieModal() {
        var str = document.cookie.split("; ");
        var cookie = {};
        for (var i = 0; i < str.length; i++) {
            var cur = str[i].split("=");
            cookie[cur[0]] = cur[1]
        }
        if (cookie.cookieAccept !== "true") {
            setTimeout(function () {
                $(".cookie").addClass("active")
            }, 10000)
        } else {
            $(".cookie").removeClass("active")
        }
    }
    // showCookieModal();
    /* - - - - - - - - - - - - - -       text print animation       - - - - - - - - - - - - - - - */
    function printWorld() {
        var stepDelay = 3,
            count = $(".js-tech").length;
        var stepAnimaion = 100 / (count + 1);
        var animationTpl = "<style>" + "@keyframes printedText {" + "0% { width: 0;}" + (stepAnimaion / 2 + "% { width: 100%; }") + (stepAnimaion + "% { width: 100%; }") + (100 / count + "% { width: 0; }") + "100% { width: 0; }" + "}</style>";
        $("body").prepend(animationTpl);
        var counter = 0;
        $(".js-tech").map(function (index, item) {
            var $text = $(item),
                size = $text.find(".tech-word").text().length;
            $text.css("width", size + "ch");
            $text.find(".tech-word").css({
                "animation-name": "printedText",
                "animation-iteration-count": "infinite",
                "animation-duration": stepDelay * count + "s",
                "animation-timing-function": "steps(" + size + ")",
                "animation-delay": stepDelay * index + "s"
            })
        });
        setInterval(function () {
            counter++;
            if (counter === count) {
                counter = 0
            }
            var $box = $(".first-box__title-box");
            $box.removeClass("show");
            $box.eq(counter).addClass("show");
            $(".first-box__buttons .tech-word").removeClass("show");
            $(".first-box__buttons .tech-word[data-word=\"" + $box.eq(counter).attr("data-word") + "\"]").addClass("show")
        }, stepDelay * 1000)
    }
    if ($(".js-tech").length) {
        setTimeout(printWorld, 500)
    }
    function printWorldBar() {
        $(".model-progress-bar-content").show();
        var text = $(".js-tech-bar").attr("data-text");
        var count = 0;
        var p = "";
        var timer = setInterval(function () {
            p += text.substr(count, 1);
            count++;
            $(".js-tech-bar").text(p);
            if (count >= text.length) {
                clearInterval(timer);
            }
        }, 60);
    }
    if ($(".model-progress-bar-content").length) {
        setTimeout(printWorldBar, 1000)
    }
    /* - - - - - - - - - - - - - -       init inputmask       - - - - - - - - - - - - - - - */
    $("[type=\"tel\"]").inputmask("+38 (999) 999 99 99"); /* - - - - - - - - - - - - - -       init fancybox       - - - - - - - - - - - - - - - */
    $("[data-fancybox]").fancybox({
        closeExisting: true,
        protect: true,
        animationEffect: "fade",
        animationDuration: 600,
        touch: false,
        beforeShow: function beforeShow() {
            $(".header").removeClass("show");
            $(".menu-toggle").removeClass("active")
        }
    });
    /* - - - - - - - - - - - - - -       init fancybox video       - - - - - - - - - - - - - - - */
    $("[data-fancybox-video]").fancybox({
        video: {
            tpl: "<video class=\"fancybox-video\" autoplay playsinline muted loop=\"loop\" controls controlsList=\"nodownload\" poster=\"{{poster}}\">" + "<source src=\"{{src}}\" type=\"{{format}}\" />" + "Sorry, your browser doesn't support embedded videos, <a href=\"{{src}}\">download</a> and watch with your favorite video player!" + "</video>",
            format: "", // custom video format
            autoStart: true
        }
    });
    /* - - - - - - - - - - - - - -       init Aos for resize       - - - - - - - - - - - - - - - */
    $(window).on("resize", function () {
        initAos()
    });

    function fixedHeader() {
        if (window.matchMedia("(hover: none)").matches) {
            var top = $(window).scrollTop();
            if (top > 0) {
                $(".header").addClass("fixed")
            } else {
                $(".header").removeClass("fixed")
            }
        }
    }
    fixedHeader();
    $(window).on("scroll", fixedHeader); /* - - - - - - - - - - - - - -       rebuild header       - - - - - - - - - - - - - - - */
    function rebuildHeader() {
        var $lang = $(".lang"),
            $langTpl = $lang.detach(),
            $headerCenter = $(".header-center"),
            $button = $(".header-button");
        if (window.matchMedia("(min-width:768px)").matches) {
            if (window.matchMedia("(max-width:1199px)").matches) {
                if ($button.length) {
                    $button.prepend($langTpl)
                } else {
                    $headerCenter.append($langTpl)
                }
            } else {
                $(".header-right").prepend($langTpl)
            }
        } else {
            if ($button.length) {
                $button.before($langTpl)
            } else {
                $headerCenter.append($langTpl)
            }
        }
        $lang.css("opacity", 1)
    }
    if ($(".header").length) {
        rebuildHeader();
        $(window).on("resize", function () {
            rebuildHeader()
        })
    }
    /* - - - - - - - - - - - - - -       menu toggle       - - - - - - - - - - - - - - - */
    $(document).on("click", ".js-menu-toggle", function () {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(".header").addClass("show")
        } else {
            $(this).removeClass("active");
            $(".header").removeClass("show")
        }
    });
    $(window).on("resize", function () {
        if (window.matchMedia("(min-width: 1200px)").matches) {
            $(".menu-toggle").removeClass("active");
            $(".header").removeClass("show")
        }
    });
    /* - - - - - - - - - - - - - -       init tabs       - - - - - - - - - - - - - - - */
    $("[data-tabs]").each(function () {
        var $tabs = $(this);
        $tabs.find("[data-tabs-toggle]").on("click", function () {
            var $this = $(this);
            if (!$this.hasClass("active")) {
                $tabs.find("[data-tabs-toggle]").removeClass("active");
                $this.addClass("active");
                $tabs.find("[data-tabs-content]").removeClass("show");
                $tabs.find("[data-tabs-content][data-tab=\"" + $this.attr("data-tab") + "\"]").addClass("show");
                initAos()
            }
        })
    });
    /* - - - - - - - - - - - - - -       services toggle       - - - - - - - - - - - - - - - */
    $(document).on("click", ".js-services", function () {
        var $this = $(this),
            $parent = $this.closest(".services-box");
        if (!$parent.hasClass("active")) {
            $(".services-box").removeClass("active");
            $parent.addClass("active");
            $(".services-box__body").slideUp(500);
            $parent.find(".services-box__body").slideDown(500)
        } else {
            $parent.removeClass("active");
            $parent.find(".services-box__body").slideUp(500);
            setTimeout(function () {
                initAos()
            }, 500)
        }
    });
    /* - - - - - - - - - - - - - -       reviews slider       - - - - - - - - - - - - - - - */
    $(".js-reviews-slider").slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        swipeToSlide: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    /* - - - - - - - - - - - - - -       rebuild blog       - - - - - - - - - - - - - - - */
    function rebuildBlog() {
        var $button = $(".js-blog-button");
        if (window.matchMedia("(min-width:768px)").matches) {
            $(".js-blog-left").append($button)
        } else {
            $(".js-blog-right").append($button)
        }
    }
    if ($(".js-blog-button").length) {
        rebuildBlog();
        $(window).on("resize", function () {
            rebuildBlog()
        })
    }
    /* - - - - - - - - - - - - - -       rebuild partners       - - - - - - - - - - - - - - - */
    function rebuildPartners() {
        var $button = $(".js-partners-button");
        if (window.matchMedia("(min-width:768px)").matches) {
            $(".js-partners-left").append($button)
        } else {
            $(".js-partners-right").append($button)
        }
    }
    if ($(".js-partners-button").length) {
        rebuildPartners();
        $(window).on("resize", function () {
            rebuildPartners()
        })
    }
    /* - - - - - - - - - - - - - -       blog slider       - - - - - - - - - - - - - - - */
    function initBlogSlider() {
        if (window.matchMedia("(max-width: 1199px)").matches) {
            $(".js-blog-slider").slick({
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                swipeToSlide: true,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            })
        }
    }
    initBlogSlider();
    $(window).on("resize", function () {
        if ($(".js-blog-slider").hasClass("slick-initialized") && window.matchMedia("(min-width: 1200px)").matches) {
            setTimeout(function () {
                $(".js-blog-slider").slick("unslick")
            }, 100)
        } else if (!$(".js-blog-slider").hasClass("slick-initialized")) {
            initBlogSlider()
        }
    });
    /* - - - - - - - - - - - - - -       article other slider       - - - - - - - - - - - - - - - */
    function initArticleOtherSlider() {
        if (window.matchMedia("(max-width: 1199px)").matches) {
            $(".js-article-other-slider").slick({
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                swipeToSlide: true,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            })
        }
    }
    initArticleOtherSlider();
    $(window).on("resize", function () {
        if ($(".js-article-other-slider").hasClass("slick-initialized") && window.matchMedia("(min-width: 1200px)").matches) {
            setTimeout(function () {
                $(".js-article-other-slider").slick("unslick")
            }, 100)
        } else if (!$(".js-article-other-slider").hasClass("slick-initialized")) {
            initArticleOtherSlider()
        }
    });
    /* - - - - - - - - - - - - - -       footer box toggle       - - - - - - - - - - - - - - - */
    $(document).on("click", ".footer-box__head", function () {
        var $this = $(this),
            $parent = $this.closest(".footer-box");
        if (window.matchMedia("(max-width: 1199px)").matches) {
            if (!$parent.hasClass("show")) {
                $parent.addClass("show");
                $parent.find(".footer-box__body").slideDown(500)
            } else {
                $parent.removeClass("show");
                $parent.find(".footer-box__body").slideUp(500)
            }
        }
    });
    $(window).on("resize", function () {
        if (window.matchMedia("(min-width: 1200px)").matches) {
            $(".footer-box").removeClass("show");
            $(".footer-box__body").css("display", "")
        }
    });
    /* - - - - - - - - - - - - - -       table responsive       - - - - - - - - - - - - - - - */
    $(".text table").each(function () {
        $(this).wrap("<div class=\"table-responsive\"/>")
    });

    function animationNotFound() {
        var $svg = $(".js-not-found svg"),
            step = -5,
            time = 3000;
        $svg.find("path").map(function (index, item) {
            $(item).css("transition", "transform " + time / 2 / 1000 + "s");
            setTimeout(function () {
                $(item).css("transform", "translate(0, " + index * step + "px)");
                setTimeout(function () {
                    $(item).css("transform", "translate(0, 0)")
                }, time / 2)
            }, 1000); // setInterval( function() {
            // 	$( item ).css( 'transform', 'translate(0, ' + ( index * step ) + 'px)' );
            // }, time );
            // setTimeout( function() {
            // 	setInterval( function() {
            // 		$( item ).css( 'transform', 'translate(0, 0)' );
            // 	}, time );
            // }, time / 2 );
        })
    }
    if ($(".js-not-found svg").length) {
        animationNotFound()
    }
    /* - - - - - - -        file change       - - - - - - - - */
    function showFileError($this, error) {
        $this.addClass("has-error");
        $this.find(".file-box__field").removeClass("hidden");
        $this.find(".js-file [type=\"file\"]").val("");
        $this.find(".help-block").text(error)
    }
    $(document).on("change", ".js-file [type=\"file\"]", function (e) {
        var $this = $(this);
        var $parent = $this.closest(".form-file");
        var list = $this[0].files;
        var errorType = $this.attr("data-error-type") ? $this.attr("data-error-type") : "Error";
        var errorSize = $this.attr("data-error-size") ? $this.attr("data-error-size") : "Error";
        $parent.removeClass("has-error");
        $parent.find(".help-block").text("");
        if ($this.attr("multiple") === undefined) {
            $this.closest(".file-box").find(".file-box__field").addClass("hidden")
        }
        for (var i = 0; i < list.length; i++) {
            var name = list[i].name;
            var size = 5000; // size of kb
            var fileBoxTpl = ""; // validate type file
            var typeFileArr = $this.attr("accept").split(",");
            if (!typeFileArr.includes("." + name.slice(-5).split(".")[1].toLowerCase())) {
                showFileError($parent, errorType);
                return false
            } // validate size file
            if ($this.attr("data-size") && $this.attr("data-size") !== "") {
                size = parseInt($this.attr("data-size"))
            }
            if (size < list[i].size / 1000) {
                showFileError($parent, errorSize);
                return false
            }
            fileBoxTpl = "<div class=\"file-box__list-box\">" + "<div class=\"file-box__list-box-name\">" + name + "</div>" + "<div class=\"file-box__list-box-delete js-file-delete\">" + "<span class=\"icon icon-i-close\"></span>" + "</div>" + "</div>";
            $this.closest(".file-box").find(".file-box__list").append(fileBoxTpl)
        }
    });
    $(document).on("click", ".js-file-delete", function () {
        var $parent = $(this).closest(".file-box");
        $(this).closest(".file-box").find(".file-box__field").removeClass("hidden");
        $(this).closest(".file-box__list-box").remove();
        if (!$parent.find(".file-box__list-box").length) {
            var $this = $parent.find("[type=\"file\"]");
            $this.val("")
        }
    });
    /* - - - - - - - - - - - - - -       vacancy toggle       - - - - - - - - - - - - - - - */
    $(document).on("click", ".js-vacancy", function () {
        var $this = $(this),
            $parent = $this.closest(".vacancy-box");
        if (!$parent.hasClass("active")) {
            $(".vacancy-box").removeClass("active");
            $parent.addClass("active");
            $(".vacancy-box__body").slideUp(500);
            $parent.find(".vacancy-box__body").slideDown(500)
        } else {
            $parent.removeClass("active");
            $parent.find(".vacancy-box__body").slideUp(500);
            setTimeout(function () {
                initAos()
            }, 500)
        }
    });
    /* - - - - - - - - - - - - - -       gallery slider       - - - - - - - - - - - - - - - */
    $(".js-gallery-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 6000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        draggable: false,
        swipe: false,
        swipeToSlide: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    function setValuesHeight() {
        var $list = $(".values-list"),
            paddingList = parseInt($list.css("padding-top")),
            marginBox = parseInt($list.find(".values-box:nth-child(1)").css("margin-bottom")),
            count = $list.find(".values-box").length;
        var column = 1,
            arrHeight = [],
            maxHeight = 0;
        $list.css("max-height", "");
        if (window.matchMedia("(min-width: 576px)").matches) {
            for (var i = 0; i < count; i++) {
                arrHeight[i] = $list.find(".values-box").eq(i).innerHeight()
            }
            if (window.matchMedia("(max-width: 1199px)").matches) {
                column = 2
            } else {
                column = 3
            }
            var _loop = function _loop(_i) {
                var tempMax = 0;
                arrHeight.map(function (item, index) {
                    if (index % column === _i) {
                        tempMax += arrHeight[index]
                    }
                });
                if (maxHeight < tempMax) {
                    maxHeight = tempMax
                }
            };
            for (var _i = 0; _i < column; _i++) {
                _loop(_i)
            }
            maxHeight = maxHeight + paddingList + marginBox * (count / column) + 10;
            $list.css("max-height", maxHeight)
        }
    }
    if ($(".values-list").length) {
        setValuesHeight();
        $(window).on("resize", function () {
            setValuesHeight()
        })
    } /* - - - - - - - - - - - - - -       magazine slider       - - - - - - - - - - - - - - - */
    $(".js-magazine-slider").slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        swipeToSlide: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }]
    }); /* - - - - - - - - - - - - - -       instagram slider       - - - - - - - - - - - - - - - */
    $(".js-instagram-slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 6000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        draggable: false,
        swipe: false,
        swipeToSlide: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }]
    }); /* - - - - - - - - - - - - - -       project video       - - - - - - - - - - - - - - - */
    $(document).on("click", ".js-project-video", function () {
        var $this = $(this);
        $this.find(".project-video__box-content").addClass("show");
        setTimeout(function () {
            $this.find("video")[0].play()
        }, 250)
    }); /* - - - - - - - - - - - - - -       cookie       - - - - - - - - - - - - - - - */
    function toggleCookie() {
        var top = $(window).scrollTop();
        if (top + $(window).innerHeight() > $(".footer").offset().top) {
            $(".cookie").addClass("hide")
        } else {
            $(".cookie").removeClass("hide")
        }
    }
    if ($(".cookie").length) {
        toggleCookie();
        $(window).on("scroll", function () {
            toggleCookie()
        })
    }
    $(document).on("click", ".cookie-close", function () {
        $(".cookie").removeClass("active")
    });
    $(document).on("click", ".cookie-button .btn", function () {
        $(".cookie").removeClass("active");
        var date = new Date(Date.now() + 86400e3);
        document.cookie = "cookieAccept=true; path=/; expires=" + date
    }); /* - - - - - - - - - - - - - -       match height       - - - - - - - - - - - - - - - */
    function matchHeightLanding() {
        if (window.matchMedia("(min-width:768px)").matches) {
            $(".landing-price__count__box-text").matchHeight({
                byRow: false,
                property: "height"
            })
        } else {
            $(".landing-price__count__box-text").matchHeight({
                remove: true
            })
        }
    }
    $(window).resize(function () {
        matchHeightLanding()
    }); /* - - - - - - - - - - - - - -       mosaic grid       - - - - - - - - - - - - - - - */
    function mosaiGrid() {
        $(".js-mosaic-grid").imagesLoaded().progress(function () {
            $(".js-mosaic-grid").masonry({
                itemSelector: ".js-mosaic-box",
                columnWidth: ".js-mosaic-box",
                percentPosition: true,
                resize: true,
                gutter: 38
            })
        })
    }
    mosaiGrid();
    $(window).resize(function () {
        mosaiGrid()
    });
    if ($(".landing-accordion__box").length) {
        $(".landing-accordion__box").each(function () {
            var $this = $(this);
            if ($this.hasClass("active")) {
                $this.find(".landing-accordion__box-body").slideDown(500)
            }
        })
    }
    $(document).on("click", ".landing-accordion__box-title", function () {
        var $this = $(this),
            $parent = $this.closest(".landing-accordion__box");
        if (!$parent.hasClass("active")) {
            $(".landing-accordion__box").removeClass("active");
            $parent.addClass("active");
            $(".landing-accordion__box-body").slideUp(500);
            $parent.find(".landing-accordion__box-body").slideDown(500)
        } else {
            $parent.removeClass("active");
            $parent.find(".landing-accordion__box-body").slideUp(500)
        }
    });
    $("body, html").on("mousemove", function (event) {
        if (document.querySelector(".pv-section")) {
            var x = event.pageX - $(".pv-section").offset().left + (videoWidth.replace("px", "") - sectionE.offsetWidth) / 2;
            var y = event.pageY - $(".pv-section").offset().top + (videoWidth.replace("px", "") - sectionE.offsetWidth) / sectionRatio / 2;
            setTimeout(function () {
                $(".pv-button").css({
                    "top": y + "px",
                    "left": x + "px"
                })
            }, 100)
        }
    })
    // 播放速率
    // var modelViewer = document.querySelector('#orbit-demo');
    // modelViewer.timeScale = 0.15;
    // modelViewer.addEventListener('load', () => {
    //     modelViewer.play();
    // });
    var modelViewer2 = document.querySelector('#orbit-demo2');
    if (modelViewer2) {
        modelViewer2.timeScale = 0.15;
        modelViewer2.addEventListener('load', () => {
            modelViewer2.play();
        });
    }
});
// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: function get() {
            supportsPassive = true
        }
    }))
} catch (e) { }
var wheelOpt = supportsPassive ? {
    passive: false
} : false;
var wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

function fnBrowserDetect() {
    var userAgent = navigator.userAgent;
    var browserName = void 0;
    if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "chrome"
    } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "firefox"
    } else if (userAgent.match(/safari/i)) {
        browserName = "safari"
    } else if (userAgent.match(/opr\//i)) {
        browserName = "opera"
    } else if (userAgent.match(/edg/i)) {
        browserName = "edge"
    } else {
        browserName = "No browser detection"
    }
    return browserName
}
//# sourceMappingURL=app.js.map