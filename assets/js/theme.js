"use strict";
var theme = {
    init: function() {
        this.changeTheme(), this.filterList(), this.formValidation(), this.navbarSticky(), this.navbarStuckMenuToggle(), this.quantityProducts(), this.rangeSlider(), this.swiperSlider()
    },
    changeTheme: () => {
        const e = localStorage.getItem("theme"),
            t = () => e || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
            n = function() {
                document.documentElement.classList.add("transition-off")
            },
            r = function() {
                setTimeout((function() {
                    document.documentElement.classList.remove("transition-off")
                }), 250)
            },
            i = function(e) {
                "auto" === e && window.matchMedia("(prefers-color-scheme: dark)").matches ? (n(), document.documentElement.setAttribute("data-bs-theme", "dark"), r()) : (n(), document.documentElement.setAttribute("data-bs-theme", e), r())
            };
        i(t());
        const a = e => {
            const t = document.querySelector(".switch-theme");
            null != t && ("light" == e ? t.setAttribute("data-value", "light") : "dark" == e && t.setAttribute("data-value", "dark"))
        };
        a(t()), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (() => {
            "light" === e && "dark" === e || i(t())
        })), window.addEventListener("DOMContentLoaded", (() => {
            document.querySelectorAll(".switch-theme").forEach((e => {
                e.addEventListener("click", (t => {
                    t.preventDefault();
                    let n;
                    n = "light" == e.getAttribute("data-value") ? "dark" : "light", localStorage.setItem("theme", n), i(n), a(n)
                }))
            }))
        }))
    },
    filterList: () => {
        const e = document.querySelectorAll(".widget-filter");
        for (let t = 0; t < e.length; t++) {
            const n = e[t].querySelector(".widget-filter-input"),
                r = e[t].querySelector(".widget-filter-list").querySelectorAll(".widget-filter-item");

            function i() {
                const e = n.value.toUpperCase();
                for (let t = 0; t < r.length; t++) {
                    const n = r[t].querySelector(".widget-filter-item-label");
                    (n.innerContent || n.innerText).toUpperCase().indexOf(e) > -1 ? r[t].classList.remove("d-none") : r[t].classList.add("d-none")
                }
            }
            n && n.addEventListener("keyup", i)
        }
    },
    formValidation: () => {
        const e = document.querySelectorAll(".needs-validation");
        Array.prototype.slice.call(e).forEach((function(e) {
            e.addEventListener("submit", (function(t) {
                e.checkValidity() || (t.preventDefault(), t.stopPropagation()), e.classList.add("was-validated")
            }), !1)
        }))
    },
    navbarSticky: () => {
        const e = document.querySelector(".navbar-sticky");
        if (null == e) return;
        const t = e.offsetHeight;
        window.addEventListener("scroll", (n => {
            n.currentTarget.pageYOffset > 400 && window.innerWidth >= 992 ? (document.body.style.paddingTop = t + "px", e.classList.add("navbar-stuck")) : (document.body.style.paddingTop = "", e.classList.remove("navbar-stuck"))
        }))
    },
    navbarStuckMenuToggle: () => {
        const e = document.querySelector(".navbar-stuck-toggle"),
            t = document.querySelector(".navbar-stuck-menu");
        null != e && e.addEventListener("click", (function(e) {
            t.classList.toggle("show"), e.preventDefault()
        }))
    },
    quantityProducts: () => {
        const e = document.querySelectorAll(".quantity-products");
        for (let t = 0; t < e.length; t++) {
            const n = e[t].querySelector(".quantity-btn-minus"),
                r = e[t].querySelector(".quantity-btn-plus"),
                i = e[t].querySelector(".quantity-number");
            n.addEventListener("click", (() => {
                i.value > 1 ? i.value = +i.value - 1 : i.value = 1
            })), r.addEventListener("click", (() => {
                i.value > 0 ? i.value = +i.value + 1 : i.value = 1
            }))
        }
    },
    rangeSlider: () => {
        const e = document.querySelectorAll(".widget-range-slider");
        for (let t = 0; t < e.length; t++) {
            const n = e[t].querySelector(".range-slider"),
                r = e[t].querySelector(".range-slider-input-min"),
                i = e[t].querySelector(".range-slider-input-max"),
                a = {
                    dataStartMin: parseInt(e[t].dataset.startMin, 10),
                    dataStartMax: parseInt(e[t].dataset.startMax, 10),
                    dataMin: parseInt(e[t].dataset.min, 10),
                    dataMax: parseInt(e[t].dataset.max, 10),
                    dataStep: parseInt(e[t].dataset.step, 10)
                };
            noUiSlider.create(n, {
                start: [a.dataStartMin, a.dataStartMax],
                connect: !0,
                step: a.dataStep,
                tooltips: !0,
                range: {
                    min: a.dataMin,
                    max: a.dataMax
                },
                format: {
                    from: function(e) {
                        return Number(e)
                    },
                    to: function(e) {
                        return parseInt(e, 10) + "$"
                    }
                }
            }), n.noUiSlider.on("update", ((e, t) => {
                let n = e[t];
                n = n.replace(/\D/g, ""), t ? i.value = Math.round(n) : r.value = Math.round(n)
            })), r.addEventListener("change", (function() {
                n.noUiSlider.set([this.value, null])
            })), i.addEventListener("change", (function() {
                n.noUiSlider.set([null, this.value])
            }))
        }
    },
    swiperSlider: () => {
        const e = document.querySelector(".topbar-swiper");
        if (e) {
            new Swiper(e, {
                loop: !0,
                effect: "fade",
                fadeEffect: {
                    crossFade: !0
                },
                autoplay: {
                    delay: 7e3,
                    disableOnInteraction: !1,
                    pauseOnMouseEnter: !0
                },
                centeredSlides: !0
            })
        }
        const t = document.querySelector(".hero-swiper-body");
        if (t) {
            new Swiper(t, {
                slidesPerView: 1,
                breakpoints: {
                    320: {
                        spaceBetween: 8
                    },
                    992: {
                        spaceBetween: 16
                    }
                },
                navigation: {
                    nextEl: ".hero-swiper-button-next",
                    prevEl: ".hero-swiper-button-prev"
                },
                pagination: {
                    el: ".hero-swiper-pagination",
                    type: "bullets",
                    clickable: !0
                },
                speed: 600,
                centeredSlides: !0
            })
        }
        const n = document.querySelector(".products-swiper-body");
        if (n) {
            new Swiper(n, {
                spaceBetween: 30,
                breakpoints: {
                    320: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    }
                },
                navigation: {
                    nextEl: ".products-swiper-button-next",
                    prevEl: ".products-swiper-button-prev"
                },
                threshold: 3,
                speed: 600
            })
        }
        const r = document.querySelector(".recently-swiper-body");
        if (r) {
            new Swiper(r, {
                spaceBetween: 30,
                breakpoints: {
                    320: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 4
                    }
                },
                navigation: {
                    nextEl: ".recently-swiper-button-next",
                    prevEl: ".recently-swiper-button-prev"
                },
                threshold: 3,
                speed: 600
            })
        }
        document.querySelectorAll(".swiper-gallery").forEach((e => {
            const t = e.querySelector(".product-gallery"),
                n = e.querySelector(".product-gallery-thumbs");
            if (t && n) {
                const e = new Swiper(n, {
                    breakpoints: {
                        320: {
                            spaceBetween: 8
                        },
                        992: {
                            spaceBetween: 10
                        }
                    },
                    slidesPerView: 4,
                    threshold: 3,
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0
                });
                new Swiper(t, {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    thumbs: {
                        swiper: e
                    },
                    zoom: {
                        containerClass: "swiper-gallery-image",
                        maxRatio: 2,
                        toggle: !0
                    }
                })
            }
        }));
        const i = document.querySelector(".testimonial-swiper-body");
        if (i) {
            new Swiper(i, {
                spaceBetween: 30,
                breakpoints: {
                    320: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    }
                },
                navigation: {
                    nextEl: ".testimonial-swiper-button-next",
                    prevEl: ".testimonial-swiper-button-prev"
                },
                threshold: 3,
                speed: 600
            })
        }
        const a = document.querySelector(".brand-swiper-body");
        if (a) {
            new Swiper(a, {
                breakpoints: {
                    320: {
                        slidesPerView: 2
                    },
                    576: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 4
                    }
                },
                autoplay: {
                    delay: 6e3,
                    disableOnInteraction: !1,
                    pauseOnMouseEnter: !1
                },
                threshold: 3,
                speed: 600,
                loop: !0
            })
        }
    }
};
theme.init();