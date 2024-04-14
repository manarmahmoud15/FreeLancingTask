/*!
 * Bootstrap v5.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t()
}(this, (function() {
    "use strict";
    const e = new Map,
        t = {
            set(t, s, i) {
                e.has(t) || e.set(t, new Map);
                const r = e.get(t);
                r.has(s) || 0 === r.size ? r.set(s, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)
            },
            get: (t, s) => e.has(t) && e.get(t).get(s) || null,
            remove(t, s) {
                if (!e.has(t)) return;
                const i = e.get(t);
                i.delete(s), 0 === i.size && e.delete(t)
            }
        },
        s = "transitionend",
        i = e => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, ((e, t) => `#${CSS.escape(t)}`))), e),
        r = e => {
            e.dispatchEvent(new Event(s))
        },
        n = e => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
        a = e => n(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(i(e)) : null,
        o = e => {
            if (!n(e) || 0 === e.getClientRects().length) return !1;
            const t = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
                s = e.closest("details:not([open])");
            if (!s) return t;
            if (s !== e) {
                const t = e.closest("summary");
                if (t && t.parentNode !== s) return !1;
                if (null === t) return !1
            }
            return t
        },
        l = e => !e || e.nodeType !== Node.ELEMENT_NODE || (!!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled"))),
        c = e => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
                const t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? c(e.parentNode) : null
        },
        d = () => {},
        p = e => {
            e.offsetHeight
        },
        u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
        h = [],
        f = () => "rtl" === document.documentElement.dir,
        m = e => {
            var t;
            t = () => {
                const t = u();
                if (t) {
                    const s = e.NAME,
                        i = t.fn[s];
                    t.fn[s] = e.jQueryInterface, t.fn[s].Constructor = e, t.fn[s].noConflict = () => (t.fn[s] = i, e.jQueryInterface)
                }
            }, "loading" === document.readyState ? (h.length || document.addEventListener("DOMContentLoaded", (() => {
                for (const e of h) e()
            })), h.push(t)) : t()
        },
        g = (e, t = [], s = e) => "function" == typeof e ? e(...t) : s,
        v = (e, t, i = !0) => {
            if (!i) return void g(e);
            const n = (e => {
                if (!e) return 0;
                let {
                    transitionDuration: t,
                    transitionDelay: s
                } = window.getComputedStyle(e);
                const i = Number.parseFloat(t),
                    r = Number.parseFloat(s);
                return i || r ? (t = t.split(",")[0], s = s.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(s))) : 0
            })(t) + 5;
            let a = !1;
            const o = ({
                target: i
            }) => {
                i === t && (a = !0, t.removeEventListener(s, o), g(e))
            };
            t.addEventListener(s, o), setTimeout((() => {
                a || r(t)
            }), n)
        },
        b = (e, t, s, i) => {
            const r = e.length;
            let n = e.indexOf(t);
            return -1 === n ? !s && i ? e[r - 1] : e[0] : (n += s ? 1 : -1, i && (n = (n + r) % r), e[Math.max(0, Math.min(n, r - 1))])
        },
        y = /[^.]*(?=\..*)\.|.*/,
        w = /\..*/,
        E = /::\d+$/,
        x = {};
    let _ = 1;
    const S = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        T = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function C(e, t) {
        return t && `${t}::${_++}` || e.uidEvent || _++
    }

    function M(e) {
        const t = C(e);
        return e.uidEvent = t, x[t] = x[t] || {}, x[t]
    }

    function A(e, t, s = null) {
        return Object.values(e).find((e => e.callable === t && e.delegationSelector === s))
    }

    function O(e, t, s) {
        const i = "string" == typeof t,
            r = i ? s : t || s;
        let n = D(e);
        return T.has(n) || (n = e), [i, r, n]
    }

    function k(e, t, s, i, r) {
        if ("string" != typeof t || !e) return;
        let [n, a, o] = O(t, s, i);
        if (t in S) {
            const e = e => function(t) {
                if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t)
            };
            a = e(a)
        }
        const l = M(e),
            c = l[o] || (l[o] = {}),
            d = A(c, a, n ? s : null);
        if (d) return void(d.oneOff = d.oneOff && r);
        const p = C(a, t.replace(y, "")),
            u = n ? function(e, t, s) {
                return function i(r) {
                    const n = e.querySelectorAll(t);
                    for (let {
                            target: a
                        } = r; a && a !== this; a = a.parentNode)
                        for (const o of n)
                            if (o === a) return I(r, {
                                delegateTarget: a
                            }), i.oneOff && $.off(e, r.type, t, s), s.apply(a, [r])
                }
            }(e, s, a) : function(e, t) {
                return function s(i) {
                    return I(i, {
                        delegateTarget: e
                    }), s.oneOff && $.off(e, i.type, t), t.apply(e, [i])
                }
            }(e, a);
        u.delegationSelector = n ? s : null, u.callable = a, u.oneOff = r, u.uidEvent = p, c[p] = u, e.addEventListener(o, u, n)
    }

    function L(e, t, s, i, r) {
        const n = A(t[s], i, r);
        n && (e.removeEventListener(s, n, Boolean(r)), delete t[s][n.uidEvent])
    }

    function P(e, t, s, i) {
        const r = t[s] || {};
        for (const [n, a] of Object.entries(r)) n.includes(i) && L(e, t, s, a.callable, a.delegationSelector)
    }

    function D(e) {
        return e = e.replace(w, ""), S[e] || e
    }
    const $ = {
        on(e, t, s, i) {
            k(e, t, s, i, !1)
        },
        one(e, t, s, i) {
            k(e, t, s, i, !0)
        },
        off(e, t, s, i) {
            if ("string" != typeof t || !e) return;
            const [r, n, a] = O(t, s, i), o = a !== t, l = M(e), c = l[a] || {}, d = t.startsWith(".");
            if (void 0 === n) {
                if (d)
                    for (const s of Object.keys(l)) P(e, l, s, t.slice(1));
                for (const [s, i] of Object.entries(c)) {
                    const r = s.replace(E, "");
                    o && !t.includes(r) || L(e, l, a, i.callable, i.delegationSelector)
                }
            } else {
                if (!Object.keys(c).length) return;
                L(e, l, a, n, r ? s : null)
            }
        },
        trigger(e, t, s) {
            if ("string" != typeof t || !e) return null;
            const i = u();
            let r = null,
                n = !0,
                a = !0,
                o = !1;
            t !== D(t) && i && (r = i.Event(t, s), i(e).trigger(r), n = !r.isPropagationStopped(), a = !r.isImmediatePropagationStopped(), o = r.isDefaultPrevented());
            const l = I(new Event(t, {
                bubbles: n,
                cancelable: !0
            }), s);
            return o && l.preventDefault(), a && e.dispatchEvent(l), l.defaultPrevented && r && r.preventDefault(), l
        }
    };

    function I(e, t = {}) {
        for (const [s, i] of Object.entries(t)) try {
            e[s] = i
        } catch (t) {
            Object.defineProperty(e, s, {
                configurable: !0,
                get: () => i
            })
        }
        return e
    }

    function N(e) {
        if ("true" === e) return !0;
        if ("false" === e) return !1;
        if (e === Number(e).toString()) return Number(e);
        if ("" === e || "null" === e) return null;
        if ("string" != typeof e) return e;
        try {
            return JSON.parse(decodeURIComponent(e))
        } catch (t) {
            return e
        }
    }

    function z(e) {
        return e.replace(/[A-Z]/g, (e => `-${e.toLowerCase()}`))
    }
    const j = {
        setDataAttribute(e, t, s) {
            e.setAttribute(`data-bs-${z(t)}`, s)
        },
        removeDataAttribute(e, t) {
            e.removeAttribute(`data-bs-${z(t)}`)
        },
        getDataAttributes(e) {
            if (!e) return {};
            const t = {},
                s = Object.keys(e.dataset).filter((e => e.startsWith("bs") && !e.startsWith("bsConfig")));
            for (const i of s) {
                let s = i.replace(/^bs/, "");
                s = s.charAt(0).toLowerCase() + s.slice(1, s.length), t[s] = N(e.dataset[i])
            }
            return t
        },
        getDataAttribute: (e, t) => N(e.getAttribute(`data-bs-${z(t)}`))
    };
    class H {
        static get Default() {
            return {}
        }
        static get DefaultType() {
            return {}
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(e) {
            return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
        }
        _configAfterMerge(e) {
            return e
        }
        _mergeConfigObj(e, t) {
            const s = n(t) ? j.getDataAttribute(t, "config") : {};
            return { ...this.constructor.Default,
                ..."object" == typeof s ? s : {},
                ...n(t) ? j.getDataAttributes(t) : {},
                ..."object" == typeof e ? e : {}
            }
        }
        _typeCheckConfig(e, t = this.constructor.DefaultType) {
            for (const [i, r] of Object.entries(t)) {
                const t = e[i],
                    a = n(t) ? "element" : null == (s = t) ? `${s}` : Object.prototype.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(r).test(a)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${r}".`)
            }
            var s
        }
    }
    class V extends H {
        constructor(e, s) {
            super(), (e = a(e)) && (this._element = e, this._config = this._getConfig(s), t.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            t.remove(this._element, this.constructor.DATA_KEY), $.off(this._element, this.constructor.EVENT_KEY);
            for (const e of Object.getOwnPropertyNames(this)) this[e] = null
        }
        _queueCallback(e, t, s = !0) {
            v(e, t, s)
        }
        _getConfig(e) {
            return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
        }
        static getInstance(e) {
            return t.get(a(e), this.DATA_KEY)
        }
        static getOrCreateInstance(e, t = {}) {
            return this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
        }
        static get VERSION() {
            return "5.3.1"
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
        static eventName(e) {
            return `${e}${this.EVENT_KEY}`
        }
    }
    const W = e => {
            let t = e.getAttribute("data-bs-target");
            if (!t || "#" === t) {
                let s = e.getAttribute("href");
                if (!s || !s.includes("#") && !s.startsWith(".")) return null;
                s.includes("#") && !s.startsWith("#") && (s = `#${s.split("#")[1]}`), t = s && "#" !== s ? s.trim() : null
            }
            return i(t)
        },
        R = {
            find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
            findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
            children: (e, t) => [].concat(...e.children).filter((e => e.matches(t))),
            parents(e, t) {
                const s = [];
                let i = e.parentNode.closest(t);
                for (; i;) s.push(i), i = i.parentNode.closest(t);
                return s
            },
            prev(e, t) {
                let s = e.previousElementSibling;
                for (; s;) {
                    if (s.matches(t)) return [s];
                    s = s.previousElementSibling
                }
                return []
            },
            next(e, t) {
                let s = e.nextElementSibling;
                for (; s;) {
                    if (s.matches(t)) return [s];
                    s = s.nextElementSibling
                }
                return []
            },
            focusableChildren(e) {
                const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e => `${e}:not([tabindex^="-"])`)).join(",");
                return this.find(t, e).filter((e => !l(e) && o(e)))
            },
            getSelectorFromElement(e) {
                const t = W(e);
                return t && R.findOne(t) ? t : null
            },
            getElementFromSelector(e) {
                const t = W(e);
                return t ? R.findOne(t) : null
            },
            getMultipleElementsFromSelector(e) {
                const t = W(e);
                return t ? R.find(t) : []
            }
        },
        B = (e, t = "hide") => {
            const s = `click.dismiss${e.EVENT_KEY}`,
                i = e.NAME;
            $.on(document, s, `[data-bs-dismiss="${i}"]`, (function(s) {
                if (["A", "AREA"].includes(this.tagName) && s.preventDefault(), l(this)) return;
                const r = R.getElementFromSelector(this) || this.closest(`.${i}`);
                e.getOrCreateInstance(r)[t]()
            }))
        },
        F = ".bs.alert",
        q = `close${F}`,
        X = `closed${F}`;
    class Y extends V {
        static get NAME() {
            return "alert"
        }
        close() {
            if ($.trigger(this._element, q).defaultPrevented) return;
            this._element.classList.remove("show");
            const e = this._element.classList.contains("fade");
            this._queueCallback((() => this._destroyElement()), this._element, e)
        }
        _destroyElement() {
            this._element.remove(), $.trigger(this._element, X), this.dispose()
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = Y.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            }))
        }
    }
    B(Y, "close"), m(Y);
    const G = '[data-bs-toggle="button"]';
    class U extends V {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = U.getOrCreateInstance(this);
                "toggle" === e && t[e]()
            }))
        }
    }
    $.on(document, "click.bs.button.data-api", G, (e => {
        e.preventDefault();
        const t = e.target.closest(G);
        U.getOrCreateInstance(t).toggle()
    })), m(U);
    const K = ".bs.swipe",
        Q = `touchstart${K}`,
        Z = `touchmove${K}`,
        J = `touchend${K}`,
        ee = `pointerdown${K}`,
        te = `pointerup${K}`,
        se = {
            endCallback: null,
            leftCallback: null,
            rightCallback: null
        },
        ie = {
            endCallback: "(function|null)",
            leftCallback: "(function|null)",
            rightCallback: "(function|null)"
        };
    class re extends H {
        constructor(e, t) {
            super(), this._element = e, e && re.isSupported() && (this._config = this._getConfig(t), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
        }
        static get Default() {
            return se
        }
        static get DefaultType() {
            return ie
        }
        static get NAME() {
            return "swipe"
        }
        dispose() {
            $.off(this._element, K)
        }
        _start(e) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : this._deltaX = e.touches[0].clientX
        }
        _end(e) {
            this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback)
        }
        _move(e) {
            this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
            const e = Math.abs(this._deltaX);
            if (e <= 40) return;
            const t = e / this._deltaX;
            this._deltaX = 0, t && g(t > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() {
            this._supportPointerEvents ? ($.on(this._element, ee, (e => this._start(e))), $.on(this._element, te, (e => this._end(e))), this._element.classList.add("pointer-event")) : ($.on(this._element, Q, (e => this._start(e))), $.on(this._element, Z, (e => this._move(e))), $.on(this._element, J, (e => this._end(e))))
        }
        _eventIsPointerPenTouch(e) {
            return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType)
        }
        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
        }
    }
    const ne = ".bs.carousel",
        ae = ".data-api",
        oe = "next",
        le = "prev",
        ce = "left",
        de = "right",
        pe = `slide${ne}`,
        ue = `slid${ne}`,
        he = `keydown${ne}`,
        fe = `mouseenter${ne}`,
        me = `mouseleave${ne}`,
        ge = `dragstart${ne}`,
        ve = `load${ne}${ae}`,
        be = `click${ne}${ae}`,
        ye = "carousel",
        we = "active",
        Ee = ".active",
        xe = ".carousel-item",
        _e = Ee + xe,
        Se = {
            ArrowLeft: de,
            ArrowRight: ce
        },
        Te = {
            interval: 5e3,
            keyboard: !0,
            pause: "hover",
            ride: !1,
            touch: !0,
            wrap: !0
        },
        Ce = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean"
        };
    class Me extends V {
        constructor(e, t) {
            super(e, t), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = R.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === ye && this.cycle()
        }
        static get Default() {
            return Te
        }
        static get DefaultType() {
            return Ce
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(oe)
        }
        nextWhenVisible() {
            !document.hidden && o(this._element) && this.next()
        }
        prev() {
            this._slide(le)
        }
        pause() {
            this._isSliding && r(this._element), this._clearInterval()
        }
        cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval)
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? $.one(this._element, ue, (() => this.cycle())) : this.cycle())
        }
        to(e) {
            const t = this._getItems();
            if (e > t.length - 1 || e < 0) return;
            if (this._isSliding) return void $.one(this._element, ue, (() => this.to(e)));
            const s = this._getItemIndex(this._getActive());
            if (s === e) return;
            const i = e > s ? oe : le;
            this._slide(i, t[e])
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
        }
        _configAfterMerge(e) {
            return e.defaultInterval = e.interval, e
        }
        _addEventListeners() {
            this._config.keyboard && $.on(this._element, he, (e => this._keydown(e))), "hover" === this._config.pause && ($.on(this._element, fe, (() => this.pause())), $.on(this._element, me, (() => this._maybeEnableCycle()))), this._config.touch && re.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            for (const e of R.find(".carousel-item img", this._element)) $.on(e, ge, (e => e.preventDefault()));
            const e = {
                leftCallback: () => this._slide(this._directionToOrder(ce)),
                rightCallback: () => this._slide(this._directionToOrder(de)),
                endCallback: () => {
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval))
                }
            };
            this._swipeHelper = new re(this._element, e)
        }
        _keydown(e) {
            if (/input|textarea/i.test(e.target.tagName)) return;
            const t = Se[e.key];
            t && (e.preventDefault(), this._slide(this._directionToOrder(t)))
        }
        _getItemIndex(e) {
            return this._getItems().indexOf(e)
        }
        _setActiveIndicatorElement(e) {
            if (!this._indicatorsElement) return;
            const t = R.findOne(Ee, this._indicatorsElement);
            t.classList.remove(we), t.removeAttribute("aria-current");
            const s = R.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
            s && (s.classList.add(we), s.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
            const e = this._activeElement || this._getActive();
            if (!e) return;
            const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
            this._config.interval = t || this._config.defaultInterval
        }
        _slide(e, t = null) {
            if (this._isSliding) return;
            const s = this._getActive(),
                i = e === oe,
                r = t || b(this._getItems(), s, i, this._config.wrap);
            if (r === s) return;
            const n = this._getItemIndex(r),
                a = t => $.trigger(this._element, t, {
                    relatedTarget: r,
                    direction: this._orderToDirection(e),
                    from: this._getItemIndex(s),
                    to: n
                });
            if (a(pe).defaultPrevented) return;
            if (!s || !r) return;
            const o = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(n), this._activeElement = r;
            const l = i ? "carousel-item-start" : "carousel-item-end",
                c = i ? "carousel-item-next" : "carousel-item-prev";
            r.classList.add(c), p(r), s.classList.add(l), r.classList.add(l);
            this._queueCallback((() => {
                r.classList.remove(l, c), r.classList.add(we), s.classList.remove(we, c, l), this._isSliding = !1, a(ue)
            }), s, this._isAnimated()), o && this.cycle()
        }
        _isAnimated() {
            return this._element.classList.contains("slide")
        }
        _getActive() {
            return R.findOne(_e, this._element)
        }
        _getItems() {
            return R.find(xe, this._element)
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null)
        }
        _directionToOrder(e) {
            return f() ? e === ce ? le : oe : e === ce ? oe : le
        }
        _orderToDirection(e) {
            return f() ? e === le ? ce : de : e === le ? de : ce
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = Me.getOrCreateInstance(this, e);
                if ("number" != typeof e) {
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                } else t.to(e)
            }))
        }
    }
    $.on(document, be, "[data-bs-slide], [data-bs-slide-to]", (function(e) {
        const t = R.getElementFromSelector(this);
        if (!t || !t.classList.contains(ye)) return;
        e.preventDefault();
        const s = Me.getOrCreateInstance(t),
            i = this.getAttribute("data-bs-slide-to");
        return i ? (s.to(i), void s._maybeEnableCycle()) : "next" === j.getDataAttribute(this, "slide") ? (s.next(), void s._maybeEnableCycle()) : (s.prev(), void s._maybeEnableCycle())
    })), $.on(window, ve, (() => {
        const e = R.find('[data-bs-ride="carousel"]');
        for (const t of e) Me.getOrCreateInstance(t)
    })), m(Me);
    const Ae = ".bs.collapse",
        Oe = `show${Ae}`,
        ke = `shown${Ae}`,
        Le = `hide${Ae}`,
        Pe = `hidden${Ae}`,
        De = `click${Ae}.data-api`,
        $e = "show",
        Ie = "collapse",
        Ne = "collapsing",
        ze = `:scope .${Ie} .${Ie}`,
        je = '[data-bs-toggle="collapse"]',
        He = {
            parent: null,
            toggle: !0
        },
        Ve = {
            parent: "(null|element)",
            toggle: "boolean"
        };
    class We extends V {
        constructor(e, t) {
            super(e, t), this._isTransitioning = !1, this._triggerArray = [];
            const s = R.find(je);
            for (const e of s) {
                const t = R.getSelectorFromElement(e),
                    s = R.find(t).filter((e => e === this._element));
                null !== t && s.length && this._triggerArray.push(e)
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }
        static get Default() {
            return He
        }
        static get DefaultType() {
            return Ve
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let e = [];
            if (this._config.parent && (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e => e !== this._element)).map((e => We.getOrCreateInstance(e, {
                    toggle: !1
                })))), e.length && e[0]._isTransitioning) return;
            if ($.trigger(this._element, Oe).defaultPrevented) return;
            for (const t of e) t.hide();
            const t = this._getDimension();
            this._element.classList.remove(Ie), this._element.classList.add(Ne), this._element.style[t] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const s = `scroll${t[0].toUpperCase()+t.slice(1)}`;
            this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(Ne), this._element.classList.add(Ie, $e), this._element.style[t] = "", $.trigger(this._element, ke)
            }), this._element, !0), this._element.style[t] = `${this._element[s]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if ($.trigger(this._element, Le).defaultPrevented) return;
            const e = this._getDimension();
            this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, p(this._element), this._element.classList.add(Ne), this._element.classList.remove(Ie, $e);
            for (const e of this._triggerArray) {
                const t = R.getElementFromSelector(e);
                t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1)
            }
            this._isTransitioning = !0;
            this._element.style[e] = "", this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(Ne), this._element.classList.add(Ie), $.trigger(this._element, Pe)
            }), this._element, !0)
        }
        _isShown(e = this._element) {
            return e.classList.contains($e)
        }
        _configAfterMerge(e) {
            return e.toggle = Boolean(e.toggle), e.parent = a(e.parent), e
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const e = this._getFirstLevelChildren(je);
            for (const t of e) {
                const e = R.getElementFromSelector(t);
                e && this._addAriaAndCollapsedClass([t], this._isShown(e))
            }
        }
        _getFirstLevelChildren(e) {
            const t = R.find(ze, this._config.parent);
            return R.find(e, this._config.parent).filter((e => !t.includes(e)))
        }
        _addAriaAndCollapsedClass(e, t) {
            if (e.length)
                for (const s of e) s.classList.toggle("collapsed", !t), s.setAttribute("aria-expanded", t)
        }
        static jQueryInterface(e) {
            const t = {};
            return "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1), this.each((function() {
                const s = We.getOrCreateInstance(this, t);
                if ("string" == typeof e) {
                    if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
                    s[e]()
                }
            }))
        }
    }
    $.on(document, De, je, (function(e) {
        ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
        for (const e of R.getMultipleElementsFromSelector(this)) We.getOrCreateInstance(e, {
            toggle: !1
        }).toggle()
    })), m(We);
    var Re = "top",
        Be = "bottom",
        Fe = "right",
        qe = "left",
        Xe = "auto",
        Ye = [Re, Be, Fe, qe],
        Ge = "start",
        Ue = "end",
        Ke = "clippingParents",
        Qe = "viewport",
        Ze = "popper",
        Je = "reference",
        et = Ye.reduce((function(e, t) {
            return e.concat([t + "-" + Ge, t + "-" + Ue])
        }), []),
        tt = [].concat(Ye, [Xe]).reduce((function(e, t) {
            return e.concat([t, t + "-" + Ge, t + "-" + Ue])
        }), []),
        st = "beforeRead",
        it = "read",
        rt = "afterRead",
        nt = "beforeMain",
        at = "main",
        ot = "afterMain",
        lt = "beforeWrite",
        ct = "write",
        dt = "afterWrite",
        pt = [st, it, rt, nt, at, ot, lt, ct, dt];

    function ut(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }

    function ht(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return t && t.defaultView || window
        }
        return e
    }

    function ft(e) {
        return e instanceof ht(e).Element || e instanceof Element
    }

    function mt(e) {
        return e instanceof ht(e).HTMLElement || e instanceof HTMLElement
    }

    function gt(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof ht(e).ShadowRoot || e instanceof ShadowRoot)
    }
    const vt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(e) {
            var t = e.state;
            Object.keys(t.elements).forEach((function(e) {
                var s = t.styles[e] || {},
                    i = t.attributes[e] || {},
                    r = t.elements[e];
                mt(r) && ut(r) && (Object.assign(r.style, s), Object.keys(i).forEach((function(e) {
                    var t = i[e];
                    !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t)
                })))
            }))
        },
        effect: function(e) {
            var t = e.state,
                s = {
                    popper: {
                        position: t.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
            return Object.assign(t.elements.popper.style, s.popper), t.styles = s, t.elements.arrow && Object.assign(t.elements.arrow.style, s.arrow),
                function() {
                    Object.keys(t.elements).forEach((function(e) {
                        var i = t.elements[e],
                            r = t.attributes[e] || {},
                            n = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : s[e]).reduce((function(e, t) {
                                return e[t] = "", e
                            }), {});
                        mt(i) && ut(i) && (Object.assign(i.style, n), Object.keys(r).forEach((function(e) {
                            i.removeAttribute(e)
                        })))
                    }))
                }
        },
        requires: ["computeStyles"]
    };

    function bt(e) {
        return e.split("-")[0]
    }
    var yt = Math.max,
        wt = Math.min,
        Et = Math.round;

    function xt() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
            return e.brand + "/" + e.version
        })).join(" ") : navigator.userAgent
    }

    function _t() {
        return !/^((?!chrome|android).)*safari/i.test(xt())
    }

    function St(e, t, s) {
        void 0 === t && (t = !1), void 0 === s && (s = !1);
        var i = e.getBoundingClientRect(),
            r = 1,
            n = 1;
        t && mt(e) && (r = e.offsetWidth > 0 && Et(i.width) / e.offsetWidth || 1, n = e.offsetHeight > 0 && Et(i.height) / e.offsetHeight || 1);
        var a = (ft(e) ? ht(e) : window).visualViewport,
            o = !_t() && s,
            l = (i.left + (o && a ? a.offsetLeft : 0)) / r,
            c = (i.top + (o && a ? a.offsetTop : 0)) / n,
            d = i.width / r,
            p = i.height / n;
        return {
            width: d,
            height: p,
            top: c,
            right: l + d,
            bottom: c + p,
            left: l,
            x: l,
            y: c
        }
    }

    function Tt(e) {
        var t = St(e),
            s = e.offsetWidth,
            i = e.offsetHeight;
        return Math.abs(t.width - s) <= 1 && (s = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: s,
            height: i
        }
    }

    function Ct(e, t) {
        var s = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (s && gt(s)) {
            var i = t;
            do {
                if (i && e.isSameNode(i)) return !0;
                i = i.parentNode || i.host
            } while (i)
        }
        return !1
    }

    function Mt(e) {
        return ht(e).getComputedStyle(e)
    }

    function At(e) {
        return ["table", "td", "th"].indexOf(ut(e)) >= 0
    }

    function Ot(e) {
        return ((ft(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }

    function kt(e) {
        return "html" === ut(e) ? e : e.assignedSlot || e.parentNode || (gt(e) ? e.host : null) || Ot(e)
    }

    function Lt(e) {
        return mt(e) && "fixed" !== Mt(e).position ? e.offsetParent : null
    }

    function Pt(e) {
        for (var t = ht(e), s = Lt(e); s && At(s) && "static" === Mt(s).position;) s = Lt(s);
        return s && ("html" === ut(s) || "body" === ut(s) && "static" === Mt(s).position) ? t : s || function(e) {
            var t = /firefox/i.test(xt());
            if (/Trident/i.test(xt()) && mt(e) && "fixed" === Mt(e).position) return null;
            var s = kt(e);
            for (gt(s) && (s = s.host); mt(s) && ["html", "body"].indexOf(ut(s)) < 0;) {
                var i = Mt(s);
                if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || t && "filter" === i.willChange || t && i.filter && "none" !== i.filter) return s;
                s = s.parentNode
            }
            return null
        }(e) || t
    }

    function Dt(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
    }

    function $t(e, t, s) {
        return yt(e, wt(t, s))
    }

    function It(e) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, e)
    }

    function Nt(e, t) {
        return t.reduce((function(t, s) {
            return t[s] = e, t
        }), {})
    }
    const zt = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t, s = e.state,
                i = e.name,
                r = e.options,
                n = s.elements.arrow,
                a = s.modifiersData.popperOffsets,
                o = bt(s.placement),
                l = Dt(o),
                c = [qe, Fe].indexOf(o) >= 0 ? "height" : "width";
            if (n && a) {
                var d = function(e, t) {
                        return It("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                            placement: t.placement
                        })) : e) ? e : Nt(e, Ye))
                    }(r.padding, s),
                    p = Tt(n),
                    u = "y" === l ? Re : qe,
                    h = "y" === l ? Be : Fe,
                    f = s.rects.reference[c] + s.rects.reference[l] - a[l] - s.rects.popper[c],
                    m = a[l] - s.rects.reference[l],
                    g = Pt(n),
                    v = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                    b = f / 2 - m / 2,
                    y = d[u],
                    w = v - p[c] - d[h],
                    E = v / 2 - p[c] / 2 + b,
                    x = $t(y, E, w),
                    _ = l;
                s.modifiersData[i] = ((t = {})[_] = x, t.centerOffset = x - E, t)
            }
        },
        effect: function(e) {
            var t = e.state,
                s = e.options.element,
                i = void 0 === s ? "[data-popper-arrow]" : s;
            null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && Ct(t.elements.popper, i) && (t.elements.arrow = i)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };

    function jt(e) {
        return e.split("-")[1]
    }
    var Ht = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };

    function Vt(e) {
        var t, s = e.popper,
            i = e.popperRect,
            r = e.placement,
            n = e.variation,
            a = e.offsets,
            o = e.position,
            l = e.gpuAcceleration,
            c = e.adaptive,
            d = e.roundOffsets,
            p = e.isFixed,
            u = a.x,
            h = void 0 === u ? 0 : u,
            f = a.y,
            m = void 0 === f ? 0 : f,
            g = "function" == typeof d ? d({
                x: h,
                y: m
            }) : {
                x: h,
                y: m
            };
        h = g.x, m = g.y;
        var v = a.hasOwnProperty("x"),
            b = a.hasOwnProperty("y"),
            y = qe,
            w = Re,
            E = window;
        if (c) {
            var x = Pt(s),
                _ = "clientHeight",
                S = "clientWidth";
            if (x === ht(s) && "static" !== Mt(x = Ot(s)).position && "absolute" === o && (_ = "scrollHeight", S = "scrollWidth"), r === Re || (r === qe || r === Fe) && n === Ue) w = Be, m -= (p && x === E && E.visualViewport ? E.visualViewport.height : x[_]) - i.height, m *= l ? 1 : -1;
            if (r === qe || (r === Re || r === Be) && n === Ue) y = Fe, h -= (p && x === E && E.visualViewport ? E.visualViewport.width : x[S]) - i.width, h *= l ? 1 : -1
        }
        var T, C = Object.assign({
                position: o
            }, c && Ht),
            M = !0 === d ? function(e, t) {
                var s = e.x,
                    i = e.y,
                    r = t.devicePixelRatio || 1;
                return {
                    x: Et(s * r) / r || 0,
                    y: Et(i * r) / r || 0
                }
            }({
                x: h,
                y: m
            }, ht(s)) : {
                x: h,
                y: m
            };
        return h = M.x, m = M.y, l ? Object.assign({}, C, ((T = {})[w] = b ? "0" : "", T[y] = v ? "0" : "", T.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + m + "px)" : "translate3d(" + h + "px, " + m + "px, 0)", T)) : Object.assign({}, C, ((t = {})[w] = b ? m + "px" : "", t[y] = v ? h + "px" : "", t.transform = "", t))
    }
    const Wt = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(e) {
            var t = e.state,
                s = e.options,
                i = s.gpuAcceleration,
                r = void 0 === i || i,
                n = s.adaptive,
                a = void 0 === n || n,
                o = s.roundOffsets,
                l = void 0 === o || o,
                c = {
                    placement: bt(t.placement),
                    variation: jt(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: r,
                    isFixed: "fixed" === t.options.strategy
                };
            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Vt(Object.assign({}, c, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: a,
                roundOffsets: l
            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Vt(Object.assign({}, c, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement
            })
        },
        data: {}
    };
    var Rt = {
        passive: !0
    };
    const Bt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(e) {
            var t = e.state,
                s = e.instance,
                i = e.options,
                r = i.scroll,
                n = void 0 === r || r,
                a = i.resize,
                o = void 0 === a || a,
                l = ht(t.elements.popper),
                c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return n && c.forEach((function(e) {
                    e.addEventListener("scroll", s.update, Rt)
                })), o && l.addEventListener("resize", s.update, Rt),
                function() {
                    n && c.forEach((function(e) {
                        e.removeEventListener("scroll", s.update, Rt)
                    })), o && l.removeEventListener("resize", s.update, Rt)
                }
        },
        data: {}
    };
    var Ft = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

    function qt(e) {
        return e.replace(/left|right|bottom|top/g, (function(e) {
            return Ft[e]
        }))
    }
    var Xt = {
        start: "end",
        end: "start"
    };

    function Yt(e) {
        return e.replace(/start|end/g, (function(e) {
            return Xt[e]
        }))
    }

    function Gt(e) {
        var t = ht(e);
        return {
            scrollLeft: t.pageXOffset,
            scrollTop: t.pageYOffset
        }
    }

    function Ut(e) {
        return St(Ot(e)).left + Gt(e).scrollLeft
    }

    function Kt(e) {
        var t = Mt(e),
            s = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(s + r + i)
    }

    function Qt(e) {
        return ["html", "body", "#document"].indexOf(ut(e)) >= 0 ? e.ownerDocument.body : mt(e) && Kt(e) ? e : Qt(kt(e))
    }

    function Zt(e, t) {
        var s;
        void 0 === t && (t = []);
        var i = Qt(e),
            r = i === (null == (s = e.ownerDocument) ? void 0 : s.body),
            n = ht(i),
            a = r ? [n].concat(n.visualViewport || [], Kt(i) ? i : []) : i,
            o = t.concat(a);
        return r ? o : o.concat(Zt(kt(a)))
    }

    function Jt(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }

    function es(e, t, s) {
        return t === Qe ? Jt(function(e, t) {
            var s = ht(e),
                i = Ot(e),
                r = s.visualViewport,
                n = i.clientWidth,
                a = i.clientHeight,
                o = 0,
                l = 0;
            if (r) {
                n = r.width, a = r.height;
                var c = _t();
                (c || !c && "fixed" === t) && (o = r.offsetLeft, l = r.offsetTop)
            }
            return {
                width: n,
                height: a,
                x: o + Ut(e),
                y: l
            }
        }(e, s)) : ft(t) ? function(e, t) {
            var s = St(e, !1, "fixed" === t);
            return s.top = s.top + e.clientTop, s.left = s.left + e.clientLeft, s.bottom = s.top + e.clientHeight, s.right = s.left + e.clientWidth, s.width = e.clientWidth, s.height = e.clientHeight, s.x = s.left, s.y = s.top, s
        }(t, s) : Jt(function(e) {
            var t, s = Ot(e),
                i = Gt(e),
                r = null == (t = e.ownerDocument) ? void 0 : t.body,
                n = yt(s.scrollWidth, s.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
                a = yt(s.scrollHeight, s.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
                o = -i.scrollLeft + Ut(e),
                l = -i.scrollTop;
            return "rtl" === Mt(r || s).direction && (o += yt(s.clientWidth, r ? r.clientWidth : 0) - n), {
                width: n,
                height: a,
                x: o,
                y: l
            }
        }(Ot(e)))
    }

    function ts(e, t, s, i) {
        var r = "clippingParents" === t ? function(e) {
                var t = Zt(kt(e)),
                    s = ["absolute", "fixed"].indexOf(Mt(e).position) >= 0 && mt(e) ? Pt(e) : e;
                return ft(s) ? t.filter((function(e) {
                    return ft(e) && Ct(e, s) && "body" !== ut(e)
                })) : []
            }(e) : [].concat(t),
            n = [].concat(r, [s]),
            a = n[0],
            o = n.reduce((function(t, s) {
                var r = es(e, s, i);
                return t.top = yt(r.top, t.top), t.right = wt(r.right, t.right), t.bottom = wt(r.bottom, t.bottom), t.left = yt(r.left, t.left), t
            }), es(e, a, i));
        return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o
    }

    function ss(e) {
        var t, s = e.reference,
            i = e.element,
            r = e.placement,
            n = r ? bt(r) : null,
            a = r ? jt(r) : null,
            o = s.x + s.width / 2 - i.width / 2,
            l = s.y + s.height / 2 - i.height / 2;
        switch (n) {
            case Re:
                t = {
                    x: o,
                    y: s.y - i.height
                };
                break;
            case Be:
                t = {
                    x: o,
                    y: s.y + s.height
                };
                break;
            case Fe:
                t = {
                    x: s.x + s.width,
                    y: l
                };
                break;
            case qe:
                t = {
                    x: s.x - i.width,
                    y: l
                };
                break;
            default:
                t = {
                    x: s.x,
                    y: s.y
                }
        }
        var c = n ? Dt(n) : null;
        if (null != c) {
            var d = "y" === c ? "height" : "width";
            switch (a) {
                case Ge:
                    t[c] = t[c] - (s[d] / 2 - i[d] / 2);
                    break;
                case Ue:
                    t[c] = t[c] + (s[d] / 2 - i[d] / 2)
            }
        }
        return t
    }

    function is(e, t) {
        void 0 === t && (t = {});
        var s = t,
            i = s.placement,
            r = void 0 === i ? e.placement : i,
            n = s.strategy,
            a = void 0 === n ? e.strategy : n,
            o = s.boundary,
            l = void 0 === o ? Ke : o,
            c = s.rootBoundary,
            d = void 0 === c ? Qe : c,
            p = s.elementContext,
            u = void 0 === p ? Ze : p,
            h = s.altBoundary,
            f = void 0 !== h && h,
            m = s.padding,
            g = void 0 === m ? 0 : m,
            v = It("number" != typeof g ? g : Nt(g, Ye)),
            b = u === Ze ? Je : Ze,
            y = e.rects.popper,
            w = e.elements[f ? b : u],
            E = ts(ft(w) ? w : w.contextElement || Ot(e.elements.popper), l, d, a),
            x = St(e.elements.reference),
            _ = ss({
                reference: x,
                element: y,
                strategy: "absolute",
                placement: r
            }),
            S = Jt(Object.assign({}, y, _)),
            T = u === Ze ? S : x,
            C = {
                top: E.top - T.top + v.top,
                bottom: T.bottom - E.bottom + v.bottom,
                left: E.left - T.left + v.left,
                right: T.right - E.right + v.right
            },
            M = e.modifiersData.offset;
        if (u === Ze && M) {
            var A = M[r];
            Object.keys(C).forEach((function(e) {
                var t = [Fe, Be].indexOf(e) >= 0 ? 1 : -1,
                    s = [Re, Be].indexOf(e) >= 0 ? "y" : "x";
                C[e] += A[s] * t
            }))
        }
        return C
    }

    function rs(e, t) {
        void 0 === t && (t = {});
        var s = t,
            i = s.placement,
            r = s.boundary,
            n = s.rootBoundary,
            a = s.padding,
            o = s.flipVariations,
            l = s.allowedAutoPlacements,
            c = void 0 === l ? tt : l,
            d = jt(i),
            p = d ? o ? et : et.filter((function(e) {
                return jt(e) === d
            })) : Ye,
            u = p.filter((function(e) {
                return c.indexOf(e) >= 0
            }));
        0 === u.length && (u = p);
        var h = u.reduce((function(t, s) {
            return t[s] = is(e, {
                placement: s,
                boundary: r,
                rootBoundary: n,
                padding: a
            })[bt(s)], t
        }), {});
        return Object.keys(h).sort((function(e, t) {
            return h[e] - h[t]
        }))
    }
    const ns = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state,
                s = e.options,
                i = e.name;
            if (!t.modifiersData[i]._skip) {
                for (var r = s.mainAxis, n = void 0 === r || r, a = s.altAxis, o = void 0 === a || a, l = s.fallbackPlacements, c = s.padding, d = s.boundary, p = s.rootBoundary, u = s.altBoundary, h = s.flipVariations, f = void 0 === h || h, m = s.allowedAutoPlacements, g = t.options.placement, v = bt(g), b = l || (v === g || !f ? [qt(g)] : function(e) {
                        if (bt(e) === Xe) return [];
                        var t = qt(e);
                        return [Yt(e), t, Yt(t)]
                    }(g)), y = [g].concat(b).reduce((function(e, s) {
                        return e.concat(bt(s) === Xe ? rs(t, {
                            placement: s,
                            boundary: d,
                            rootBoundary: p,
                            padding: c,
                            flipVariations: f,
                            allowedAutoPlacements: m
                        }) : s)
                    }), []), w = t.rects.reference, E = t.rects.popper, x = new Map, _ = !0, S = y[0], T = 0; T < y.length; T++) {
                    var C = y[T],
                        M = bt(C),
                        A = jt(C) === Ge,
                        O = [Re, Be].indexOf(M) >= 0,
                        k = O ? "width" : "height",
                        L = is(t, {
                            placement: C,
                            boundary: d,
                            rootBoundary: p,
                            altBoundary: u,
                            padding: c
                        }),
                        P = O ? A ? Fe : qe : A ? Be : Re;
                    w[k] > E[k] && (P = qt(P));
                    var D = qt(P),
                        $ = [];
                    if (n && $.push(L[M] <= 0), o && $.push(L[P] <= 0, L[D] <= 0), $.every((function(e) {
                            return e
                        }))) {
                        S = C, _ = !1;
                        break
                    }
                    x.set(C, $)
                }
                if (_)
                    for (var I = function(e) {
                            var t = y.find((function(t) {
                                var s = x.get(t);
                                if (s) return s.slice(0, e).every((function(e) {
                                    return e
                                }))
                            }));
                            if (t) return S = t, "break"
                        }, N = f ? 3 : 1; N > 0; N--) {
                        if ("break" === I(N)) break
                    }
                t.placement !== S && (t.modifiersData[i]._skip = !0, t.placement = S, t.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function as(e, t, s) {
        return void 0 === s && (s = {
            x: 0,
            y: 0
        }), {
            top: e.top - t.height - s.y,
            right: e.right - t.width + s.x,
            bottom: e.bottom - t.height + s.y,
            left: e.left - t.width - s.x
        }
    }

    function os(e) {
        return [Re, Fe, Be, qe].some((function(t) {
            return e[t] >= 0
        }))
    }
    const ls = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(e) {
            var t = e.state,
                s = e.name,
                i = t.rects.reference,
                r = t.rects.popper,
                n = t.modifiersData.preventOverflow,
                a = is(t, {
                    elementContext: "reference"
                }),
                o = is(t, {
                    altBoundary: !0
                }),
                l = as(a, i),
                c = as(o, r, n),
                d = os(l),
                p = os(c);
            t.modifiersData[s] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: d,
                hasPopperEscaped: p
            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": d,
                "data-popper-escaped": p
            })
        }
    };
    const cs = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(e) {
            var t = e.state,
                s = e.options,
                i = e.name,
                r = s.offset,
                n = void 0 === r ? [0, 0] : r,
                a = tt.reduce((function(e, s) {
                    return e[s] = function(e, t, s) {
                        var i = bt(e),
                            r = [qe, Re].indexOf(i) >= 0 ? -1 : 1,
                            n = "function" == typeof s ? s(Object.assign({}, t, {
                                placement: e
                            })) : s,
                            a = n[0],
                            o = n[1];
                        return a = a || 0, o = (o || 0) * r, [qe, Fe].indexOf(i) >= 0 ? {
                            x: o,
                            y: a
                        } : {
                            x: a,
                            y: o
                        }
                    }(s, t.rects, n), e
                }), {}),
                o = a[t.placement],
                l = o.x,
                c = o.y;
            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[i] = a
        }
    };
    const ds = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(e) {
            var t = e.state,
                s = e.name;
            t.modifiersData[s] = ss({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
            })
        },
        data: {}
    };
    const ps = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state,
                s = e.options,
                i = e.name,
                r = s.mainAxis,
                n = void 0 === r || r,
                a = s.altAxis,
                o = void 0 !== a && a,
                l = s.boundary,
                c = s.rootBoundary,
                d = s.altBoundary,
                p = s.padding,
                u = s.tether,
                h = void 0 === u || u,
                f = s.tetherOffset,
                m = void 0 === f ? 0 : f,
                g = is(t, {
                    boundary: l,
                    rootBoundary: c,
                    padding: p,
                    altBoundary: d
                }),
                v = bt(t.placement),
                b = jt(t.placement),
                y = !b,
                w = Dt(v),
                E = "x" === w ? "y" : "x",
                x = t.modifiersData.popperOffsets,
                _ = t.rects.reference,
                S = t.rects.popper,
                T = "function" == typeof m ? m(Object.assign({}, t.rects, {
                    placement: t.placement
                })) : m,
                C = "number" == typeof T ? {
                    mainAxis: T,
                    altAxis: T
                } : Object.assign({
                    mainAxis: 0,
                    altAxis: 0
                }, T),
                M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                A = {
                    x: 0,
                    y: 0
                };
            if (x) {
                if (n) {
                    var O, k = "y" === w ? Re : qe,
                        L = "y" === w ? Be : Fe,
                        P = "y" === w ? "height" : "width",
                        D = x[w],
                        $ = D + g[k],
                        I = D - g[L],
                        N = h ? -S[P] / 2 : 0,
                        z = b === Ge ? _[P] : S[P],
                        j = b === Ge ? -S[P] : -_[P],
                        H = t.elements.arrow,
                        V = h && H ? Tt(H) : {
                            width: 0,
                            height: 0
                        },
                        W = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        },
                        R = W[k],
                        B = W[L],
                        F = $t(0, _[P], V[P]),
                        q = y ? _[P] / 2 - N - F - R - C.mainAxis : z - F - R - C.mainAxis,
                        X = y ? -_[P] / 2 + N + F + B + C.mainAxis : j + F + B + C.mainAxis,
                        Y = t.elements.arrow && Pt(t.elements.arrow),
                        G = Y ? "y" === w ? Y.clientTop || 0 : Y.clientLeft || 0 : 0,
                        U = null != (O = null == M ? void 0 : M[w]) ? O : 0,
                        K = D + X - U,
                        Q = $t(h ? wt($, D + q - U - G) : $, D, h ? yt(I, K) : I);
                    x[w] = Q, A[w] = Q - D
                }
                if (o) {
                    var Z, J = "x" === w ? Re : qe,
                        ee = "x" === w ? Be : Fe,
                        te = x[E],
                        se = "y" === E ? "height" : "width",
                        ie = te + g[J],
                        re = te - g[ee],
                        ne = -1 !== [Re, qe].indexOf(v),
                        ae = null != (Z = null == M ? void 0 : M[E]) ? Z : 0,
                        oe = ne ? ie : te - _[se] - S[se] - ae + C.altAxis,
                        le = ne ? te + _[se] + S[se] - ae - C.altAxis : re,
                        ce = h && ne ? function(e, t, s) {
                            var i = $t(e, t, s);
                            return i > s ? s : i
                        }(oe, te, le) : $t(h ? oe : ie, te, h ? le : re);
                    x[E] = ce, A[E] = ce - te
                }
                t.modifiersData[i] = A
            }
        },
        requiresIfExists: ["offset"]
    };

    function us(e, t, s) {
        void 0 === s && (s = !1);
        var i, r, n = mt(t),
            a = mt(t) && function(e) {
                var t = e.getBoundingClientRect(),
                    s = Et(t.width) / e.offsetWidth || 1,
                    i = Et(t.height) / e.offsetHeight || 1;
                return 1 !== s || 1 !== i
            }(t),
            o = Ot(t),
            l = St(e, a, s),
            c = {
                scrollLeft: 0,
                scrollTop: 0
            },
            d = {
                x: 0,
                y: 0
            };
        return (n || !n && !s) && (("body" !== ut(t) || Kt(o)) && (c = (i = t) !== ht(i) && mt(i) ? {
            scrollLeft: (r = i).scrollLeft,
            scrollTop: r.scrollTop
        } : Gt(i)), mt(t) ? ((d = St(t, !0)).x += t.clientLeft, d.y += t.clientTop) : o && (d.x = Ut(o))), {
            x: l.left + c.scrollLeft - d.x,
            y: l.top + c.scrollTop - d.y,
            width: l.width,
            height: l.height
        }
    }

    function hs(e) {
        var t = new Map,
            s = new Set,
            i = [];

        function r(e) {
            s.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                if (!s.has(e)) {
                    var i = t.get(e);
                    i && r(i)
                }
            })), i.push(e)
        }
        return e.forEach((function(e) {
            t.set(e.name, e)
        })), e.forEach((function(e) {
            s.has(e.name) || r(e)
        })), i
    }
    var fs = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function ms() {
        for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
        return !t.some((function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        }))
    }

    function gs(e) {
        void 0 === e && (e = {});
        var t = e,
            s = t.defaultModifiers,
            i = void 0 === s ? [] : s,
            r = t.defaultOptions,
            n = void 0 === r ? fs : r;
        return function(e, t, s) {
            void 0 === s && (s = n);
            var r, a, o = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, fs, n),
                    modifiersData: {},
                    elements: {
                        reference: e,
                        popper: t
                    },
                    attributes: {},
                    styles: {}
                },
                l = [],
                c = !1,
                d = {
                    state: o,
                    setOptions: function(s) {
                        var r = "function" == typeof s ? s(o.options) : s;
                        p(), o.options = Object.assign({}, n, o.options, r), o.scrollParents = {
                            reference: ft(e) ? Zt(e) : e.contextElement ? Zt(e.contextElement) : [],
                            popper: Zt(t)
                        };
                        var a, c, u = function(e) {
                            var t = hs(e);
                            return pt.reduce((function(e, s) {
                                return e.concat(t.filter((function(e) {
                                    return e.phase === s
                                })))
                            }), [])
                        }((a = [].concat(i, o.options.modifiers), c = a.reduce((function(e, t) {
                            var s = e[t.name];
                            return e[t.name] = s ? Object.assign({}, s, t, {
                                options: Object.assign({}, s.options, t.options),
                                data: Object.assign({}, s.data, t.data)
                            }) : t, e
                        }), {}), Object.keys(c).map((function(e) {
                            return c[e]
                        }))));
                        return o.orderedModifiers = u.filter((function(e) {
                            return e.enabled
                        })), o.orderedModifiers.forEach((function(e) {
                            var t = e.name,
                                s = e.options,
                                i = void 0 === s ? {} : s,
                                r = e.effect;
                            if ("function" == typeof r) {
                                var n = r({
                                        state: o,
                                        name: t,
                                        instance: d,
                                        options: i
                                    }),
                                    a = function() {};
                                l.push(n || a)
                            }
                        })), d.update()
                    },
                    forceUpdate: function() {
                        if (!c) {
                            var e = o.elements,
                                t = e.reference,
                                s = e.popper;
                            if (ms(t, s)) {
                                o.rects = {
                                    reference: us(t, Pt(s), "fixed" === o.options.strategy),
                                    popper: Tt(s)
                                }, o.reset = !1, o.placement = o.options.placement, o.orderedModifiers.forEach((function(e) {
                                    return o.modifiersData[e.name] = Object.assign({}, e.data)
                                }));
                                for (var i = 0; i < o.orderedModifiers.length; i++)
                                    if (!0 !== o.reset) {
                                        var r = o.orderedModifiers[i],
                                            n = r.fn,
                                            a = r.options,
                                            l = void 0 === a ? {} : a,
                                            p = r.name;
                                        "function" == typeof n && (o = n({
                                            state: o,
                                            options: l,
                                            name: p,
                                            instance: d
                                        }) || o)
                                    } else o.reset = !1, i = -1
                            }
                        }
                    },
                    update: (r = function() {
                        return new Promise((function(e) {
                            d.forceUpdate(), e(o)
                        }))
                    }, function() {
                        return a || (a = new Promise((function(e) {
                            Promise.resolve().then((function() {
                                a = void 0, e(r())
                            }))
                        }))), a
                    }),
                    destroy: function() {
                        p(), c = !0
                    }
                };
            if (!ms(e, t)) return d;

            function p() {
                l.forEach((function(e) {
                    return e()
                })), l = []
            }
            return d.setOptions(s).then((function(e) {
                !c && s.onFirstUpdate && s.onFirstUpdate(e)
            })), d
        }
    }
    var vs = gs(),
        bs = gs({
            defaultModifiers: [Bt, ds, Wt, vt]
        }),
        ys = gs({
            defaultModifiers: [Bt, ds, Wt, vt, cs, ns, ps, zt, ls]
        });
    const ws = Object.freeze(Object.defineProperty({
            __proto__: null,
            afterMain: ot,
            afterRead: rt,
            afterWrite: dt,
            applyStyles: vt,
            arrow: zt,
            auto: Xe,
            basePlacements: Ye,
            beforeMain: nt,
            beforeRead: st,
            beforeWrite: lt,
            bottom: Be,
            clippingParents: Ke,
            computeStyles: Wt,
            createPopper: ys,
            createPopperBase: vs,
            createPopperLite: bs,
            detectOverflow: is,
            end: Ue,
            eventListeners: Bt,
            flip: ns,
            hide: ls,
            left: qe,
            main: at,
            modifierPhases: pt,
            offset: cs,
            placements: tt,
            popper: Ze,
            popperGenerator: gs,
            popperOffsets: ds,
            preventOverflow: ps,
            read: it,
            reference: Je,
            right: Fe,
            start: Ge,
            top: Re,
            variationPlacements: et,
            viewport: Qe,
            write: ct
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Es = "dropdown",
        xs = ".bs.dropdown",
        _s = ".data-api",
        Ss = "ArrowUp",
        Ts = "ArrowDown",
        Cs = `hide${xs}`,
        Ms = `hidden${xs}`,
        As = `show${xs}`,
        Os = `shown${xs}`,
        ks = `click${xs}${_s}`,
        Ls = `keydown${xs}${_s}`,
        Ps = `keyup${xs}${_s}`,
        Ds = "show",
        $s = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        Is = `${$s}.${Ds}`,
        Ns = ".dropdown-menu",
        zs = f() ? "top-end" : "top-start",
        js = f() ? "top-start" : "top-end",
        Hs = f() ? "bottom-end" : "bottom-start",
        Vs = f() ? "bottom-start" : "bottom-end",
        Ws = f() ? "left-start" : "right-start",
        Rs = f() ? "right-start" : "left-start",
        Bs = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle"
        },
        Fs = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)"
        };
    class qs extends V {
        constructor(e, t) {
            super(e, t), this._popper = null, this._parent = this._element.parentNode, this._menu = R.next(this._element, Ns)[0] || R.prev(this._element, Ns)[0] || R.findOne(Ns, this._parent), this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return Bs
        }
        static get DefaultType() {
            return Fs
        }
        static get NAME() {
            return Es
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (l(this._element) || this._isShown()) return;
            const e = {
                relatedTarget: this._element
            };
            if (!$.trigger(this._element, As, e).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                    for (const e of [].concat(...document.body.children)) $.on(e, "mouseover", d);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Ds), this._element.classList.add(Ds), $.trigger(this._element, Os, e)
            }
        }
        hide() {
            if (l(this._element) || !this._isShown()) return;
            const e = {
                relatedTarget: this._element
            };
            this._completeHide(e)
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }
        _completeHide(e) {
            if (!$.trigger(this._element, Cs, e).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                    for (const e of [].concat(...document.body.children)) $.off(e, "mouseover", d);
                this._popper && this._popper.destroy(), this._menu.classList.remove(Ds), this._element.classList.remove(Ds), this._element.setAttribute("aria-expanded", "false"), j.removeDataAttribute(this._menu, "popper"), $.trigger(this._element, Ms, e)
            }
        }
        _getConfig(e) {
            if ("object" == typeof(e = super._getConfig(e)).reference && !n(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError(`${Es.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return e
        }
        _createPopper() {
            if (void 0 === ws) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = this._parent : n(this._config.reference) ? e = a(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            const t = this._getPopperConfig();
            this._popper = ys(e, this._menu, t)
        }
        _isShown() {
            return this._menu.classList.contains(Ds)
        }
        _getPlacement() {
            const e = this._parent;
            if (e.classList.contains("dropend")) return Ws;
            if (e.classList.contains("dropstart")) return Rs;
            if (e.classList.contains("dropup-center")) return "top";
            if (e.classList.contains("dropdown-center")) return "bottom";
            const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return e.classList.contains("dropup") ? t ? js : zs : t ? Vs : Hs
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {
                offset: e
            } = this._config;
            return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
        }
        _getPopperConfig() {
            const e = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (j.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), { ...e,
                ...g(this._config.popperConfig, [e])
            }
        }
        _selectMenuItem({
            key: e,
            target: t
        }) {
            const s = R.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((e => o(e)));
            s.length && b(s, t, e === Ts, !s.includes(t)).focus()
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = qs.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
        static clearMenus(e) {
            if (2 === e.button || "keyup" === e.type && "Tab" !== e.key) return;
            const t = R.find(Is);
            for (const s of t) {
                const t = qs.getInstance(s);
                if (!t || !1 === t._config.autoClose) continue;
                const i = e.composedPath(),
                    r = i.includes(t._menu);
                if (i.includes(t._element) || "inside" === t._config.autoClose && !r || "outside" === t._config.autoClose && r) continue;
                if (t._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                const n = {
                    relatedTarget: t._element
                };
                "click" === e.type && (n.clickEvent = e), t._completeHide(n)
            }
        }
        static dataApiKeydownHandler(e) {
            const t = /input|textarea/i.test(e.target.tagName),
                s = "Escape" === e.key,
                i = [Ss, Ts].includes(e.key);
            if (!i && !s) return;
            if (t && !s) return;
            e.preventDefault();
            const r = this.matches($s) ? this : R.prev(this, $s)[0] || R.next(this, $s)[0] || R.findOne($s, e.delegateTarget.parentNode),
                n = qs.getOrCreateInstance(r);
            if (i) return e.stopPropagation(), n.show(), void n._selectMenuItem(e);
            n._isShown() && (e.stopPropagation(), n.hide(), r.focus())
        }
    }
    $.on(document, Ls, $s, qs.dataApiKeydownHandler), $.on(document, Ls, Ns, qs.dataApiKeydownHandler), $.on(document, ks, qs.clearMenus), $.on(document, Ps, qs.clearMenus), $.on(document, ks, $s, (function(e) {
        e.preventDefault(), qs.getOrCreateInstance(this).toggle()
    })), m(qs);
    const Xs = "backdrop",
        Ys = "show",
        Gs = `mousedown.bs.${Xs}`,
        Us = {
            className: "modal-backdrop",
            clickCallback: null,
            isAnimated: !1,
            isVisible: !0,
            rootElement: "body"
        },
        Ks = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)"
        };
    class Qs extends H {
        constructor(e) {
            super(), this._config = this._getConfig(e), this._isAppended = !1, this._element = null
        }
        static get Default() {
            return Us
        }
        static get DefaultType() {
            return Ks
        }
        static get NAME() {
            return Xs
        }
        show(e) {
            if (!this._config.isVisible) return void g(e);
            this._append();
            const t = this._getElement();
            this._config.isAnimated && p(t), t.classList.add(Ys), this._emulateAnimation((() => {
                g(e)
            }))
        }
        hide(e) {
            this._config.isVisible ? (this._getElement().classList.remove(Ys), this._emulateAnimation((() => {
                this.dispose(), g(e)
            }))) : g(e)
        }
        dispose() {
            this._isAppended && ($.off(this._element, Gs), this._element.remove(), this._isAppended = !1)
        }
        _getElement() {
            if (!this._element) {
                const e = document.createElement("div");
                e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e
            }
            return this._element
        }
        _configAfterMerge(e) {
            return e.rootElement = a(e.rootElement), e
        }
        _append() {
            if (this._isAppended) return;
            const e = this._getElement();
            this._config.rootElement.append(e), $.on(e, Gs, (() => {
                g(this._config.clickCallback)
            })), this._isAppended = !0
        }
        _emulateAnimation(e) {
            v(e, this._getElement(), this._config.isAnimated)
        }
    }
    const Zs = ".bs.focustrap",
        Js = `focusin${Zs}`,
        ei = `keydown.tab${Zs}`,
        ti = "backward",
        si = {
            autofocus: !0,
            trapElement: null
        },
        ii = {
            autofocus: "boolean",
            trapElement: "element"
        };
    class ri extends H {
        constructor(e) {
            super(), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null
        }
        static get Default() {
            return si
        }
        static get DefaultType() {
            return ii
        }
        static get NAME() {
            return "focustrap"
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), $.off(document, Zs), $.on(document, Js, (e => this._handleFocusin(e))), $.on(document, ei, (e => this._handleKeydown(e))), this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1, $.off(document, Zs))
        }
        _handleFocusin(e) {
            const {
                trapElement: t
            } = this._config;
            if (e.target === document || e.target === t || t.contains(e.target)) return;
            const s = R.focusableChildren(t);
            0 === s.length ? t.focus() : this._lastTabNavDirection === ti ? s[s.length - 1].focus() : s[0].focus()
        }
        _handleKeydown(e) {
            "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? ti : "forward")
        }
    }
    const ni = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        ai = ".sticky-top",
        oi = "padding-right",
        li = "margin-right";
    class ci {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const e = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - e)
        }
        hide() {
            const e = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, oi, (t => t + e)), this._setElementAttributes(ni, oi, (t => t + e)), this._setElementAttributes(ai, li, (t => t - e))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, oi), this._resetElementAttributes(ni, oi), this._resetElementAttributes(ai, li)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }
        _setElementAttributes(e, t, s) {
            const i = this.getWidth();
            this._applyManipulationCallback(e, (e => {
                if (e !== this._element && window.innerWidth > e.clientWidth + i) return;
                this._saveInitialAttribute(e, t);
                const r = window.getComputedStyle(e).getPropertyValue(t);
                e.style.setProperty(t, `${s(Number.parseFloat(r))}px`)
            }))
        }
        _saveInitialAttribute(e, t) {
            const s = e.style.getPropertyValue(t);
            s && j.setDataAttribute(e, t, s)
        }
        _resetElementAttributes(e, t) {
            this._applyManipulationCallback(e, (e => {
                const s = j.getDataAttribute(e, t);
                null !== s ? (j.removeDataAttribute(e, t), e.style.setProperty(t, s)) : e.style.removeProperty(t)
            }))
        }
        _applyManipulationCallback(e, t) {
            if (n(e)) t(e);
            else
                for (const s of R.find(e, this._element)) t(s)
        }
    }
    const di = ".bs.modal",
        pi = `hide${di}`,
        ui = `hidePrevented${di}`,
        hi = `hidden${di}`,
        fi = `show${di}`,
        mi = `shown${di}`,
        gi = `resize${di}`,
        vi = `click.dismiss${di}`,
        bi = `mousedown.dismiss${di}`,
        yi = `keydown.dismiss${di}`,
        wi = `click${di}.data-api`,
        Ei = "modal-open",
        xi = "show",
        _i = "modal-static",
        Si = {
            backdrop: !0,
            focus: !0,
            keyboard: !0
        },
        Ti = {
            backdrop: "(boolean|string)",
            focus: "boolean",
            keyboard: "boolean"
        };
    class Ci extends V {
        constructor(e, t) {
            super(e, t), this._dialog = R.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new ci, this._addEventListeners()
        }
        static get Default() {
            return Si
        }
        static get DefaultType() {
            return Ti
        }
        static get NAME() {
            return "modal"
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(e) {
            if (this._isShown || this._isTransitioning) return;
            $.trigger(this._element, fi, {
                relatedTarget: e
            }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Ei), this._adjustDialog(), this._backdrop.show((() => this._showElement(e))))
        }
        hide() {
            if (!this._isShown || this._isTransitioning) return;
            $.trigger(this._element, pi).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(xi), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated()))
        }
        dispose() {
            $.off(window, di), $.off(this._dialog, di), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new Qs({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new ri({
                trapElement: this._element
            })
        }
        _showElement(e) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const t = R.findOne(".modal-body", this._dialog);
            t && (t.scrollTop = 0), p(this._element), this._element.classList.add(xi);
            this._queueCallback((() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, $.trigger(this._element, mi, {
                    relatedTarget: e
                })
            }), this._dialog, this._isAnimated())
        }
        _addEventListeners() {
            $.on(this._element, yi, (e => {
                "Escape" === e.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition())
            })), $.on(window, gi, (() => {
                this._isShown && !this._isTransitioning && this._adjustDialog()
            })), $.on(this._element, bi, (e => {
                $.one(this._element, vi, (t => {
                    this._element === e.target && this._element === t.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                }))
            }))
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                document.body.classList.remove(Ei), this._resetAdjustments(), this._scrollBar.reset(), $.trigger(this._element, hi)
            }))
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if ($.trigger(this._element, ui).defaultPrevented) return;
            const e = this._element.scrollHeight > document.documentElement.clientHeight,
                t = this._element.style.overflowY;
            "hidden" === t || this._element.classList.contains(_i) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(_i), this._queueCallback((() => {
                this._element.classList.remove(_i), this._queueCallback((() => {
                    this._element.style.overflowY = t
                }), this._dialog)
            }), this._dialog), this._element.focus())
        }
        _adjustDialog() {
            const e = this._element.scrollHeight > document.documentElement.clientHeight,
                t = this._scrollBar.getWidth(),
                s = t > 0;
            if (s && !e) {
                const e = f() ? "paddingLeft" : "paddingRight";
                this._element.style[e] = `${t}px`
            }
            if (!s && e) {
                const e = f() ? "paddingRight" : "paddingLeft";
                this._element.style[e] = `${t}px`
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }
        static jQueryInterface(e, t) {
            return this.each((function() {
                const s = Ci.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
                    s[e](t)
                }
            }))
        }
    }
    $.on(document, wi, '[data-bs-toggle="modal"]', (function(e) {
        const t = R.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(), $.one(t, fi, (e => {
            e.defaultPrevented || $.one(t, hi, (() => {
                o(this) && this.focus()
            }))
        }));
        const s = R.findOne(".modal.show");
        s && Ci.getInstance(s).hide();
        Ci.getOrCreateInstance(t).toggle(this)
    })), B(Ci), m(Ci);
    const Mi = ".bs.offcanvas",
        Ai = ".data-api",
        Oi = `load${Mi}${Ai}`,
        ki = "show",
        Li = "showing",
        Pi = "hiding",
        Di = ".offcanvas.show",
        $i = `show${Mi}`,
        Ii = `shown${Mi}`,
        Ni = `hide${Mi}`,
        zi = `hidePrevented${Mi}`,
        ji = `hidden${Mi}`,
        Hi = `resize${Mi}`,
        Vi = `click${Mi}${Ai}`,
        Wi = `keydown.dismiss${Mi}`,
        Ri = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        Bi = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            scroll: "boolean"
        };
    class Fi extends V {
        constructor(e, t) {
            super(e, t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }
        static get Default() {
            return Ri
        }
        static get DefaultType() {
            return Bi
        }
        static get NAME() {
            return "offcanvas"
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(e) {
            if (this._isShown) return;
            if ($.trigger(this._element, $i, {
                    relatedTarget: e
                }).defaultPrevented) return;
            this._isShown = !0, this._backdrop.show(), this._config.scroll || (new ci).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Li);
            this._queueCallback((() => {
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(ki), this._element.classList.remove(Li), $.trigger(this._element, Ii, {
                    relatedTarget: e
                })
            }), this._element, !0)
        }
        hide() {
            if (!this._isShown) return;
            if ($.trigger(this._element, Ni).defaultPrevented) return;
            this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Pi), this._backdrop.hide();
            this._queueCallback((() => {
                this._element.classList.remove(ki, Pi), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new ci).reset(), $.trigger(this._element, ji)
            }), this._element, !0)
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        _initializeBackDrop() {
            const e = Boolean(this._config.backdrop);
            return new Qs({
                className: "offcanvas-backdrop",
                isVisible: e,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: e ? () => {
                    "static" !== this._config.backdrop ? this.hide() : $.trigger(this._element, zi)
                } : null
            })
        }
        _initializeFocusTrap() {
            return new ri({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            $.on(this._element, Wi, (e => {
                "Escape" === e.key && (this._config.keyboard ? this.hide() : $.trigger(this._element, zi))
            }))
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = Fi.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            }))
        }
    }
    $.on(document, Vi, '[data-bs-toggle="offcanvas"]', (function(e) {
        const t = R.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), l(this)) return;
        $.one(t, ji, (() => {
            o(this) && this.focus()
        }));
        const s = R.findOne(Di);
        s && s !== t && Fi.getInstance(s).hide();
        Fi.getOrCreateInstance(t).toggle(this)
    })), $.on(window, Oi, (() => {
        for (const e of R.find(Di)) Fi.getOrCreateInstance(e).show()
    })), $.on(window, Hi, (() => {
        for (const e of R.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(e).position && Fi.getOrCreateInstance(e).hide()
    })), B(Fi), m(Fi);
    const qi = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        Xi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Yi = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
        Gi = (e, t) => {
            const s = e.nodeName.toLowerCase();
            return t.includes(s) ? !Xi.has(s) || Boolean(Yi.test(e.nodeValue)) : t.filter((e => e instanceof RegExp)).some((e => e.test(s)))
        };
    const Ui = {
            allowList: qi,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>"
        },
        Ki = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string"
        },
        Qi = {
            entry: "(string|element|function|null)",
            selector: "(string|element)"
        };
    class Zi extends H {
        constructor(e) {
            super(), this._config = this._getConfig(e)
        }
        static get Default() {
            return Ui
        }
        static get DefaultType() {
            return Ki
        }
        static get NAME() {
            return "TemplateFactory"
        }
        getContent() {
            return Object.values(this._config.content).map((e => this._resolvePossibleFunction(e))).filter(Boolean)
        }
        hasContent() {
            return this.getContent().length > 0
        }
        changeContent(e) {
            return this._checkContent(e), this._config.content = { ...this._config.content,
                ...e
            }, this
        }
        toHtml() {
            const e = document.createElement("div");
            e.innerHTML = this._maybeSanitize(this._config.template);
            for (const [t, s] of Object.entries(this._config.content)) this._setContent(e, s, t);
            const t = e.children[0],
                s = this._resolvePossibleFunction(this._config.extraClass);
            return s && t.classList.add(...s.split(" ")), t
        }
        _typeCheckConfig(e) {
            super._typeCheckConfig(e), this._checkContent(e.content)
        }
        _checkContent(e) {
            for (const [t, s] of Object.entries(e)) super._typeCheckConfig({
                selector: t,
                entry: s
            }, Qi)
        }
        _setContent(e, t, s) {
            const i = R.findOne(s, e);
            i && ((t = this._resolvePossibleFunction(t)) ? n(t) ? this._putElementInTemplate(a(t), i) : this._config.html ? i.innerHTML = this._maybeSanitize(t) : i.textContent = t : i.remove())
        }
        _maybeSanitize(e) {
            return this._config.sanitize ? function(e, t, s) {
                if (!e.length) return e;
                if (s && "function" == typeof s) return s(e);
                const i = (new window.DOMParser).parseFromString(e, "text/html"),
                    r = [].concat(...i.body.querySelectorAll("*"));
                for (const e of r) {
                    const s = e.nodeName.toLowerCase();
                    if (!Object.keys(t).includes(s)) {
                        e.remove();
                        continue
                    }
                    const i = [].concat(...e.attributes),
                        r = [].concat(t["*"] || [], t[s] || []);
                    for (const t of i) Gi(t, r) || e.removeAttribute(t.nodeName)
                }
                return i.body.innerHTML
            }(e, this._config.allowList, this._config.sanitizeFn) : e
        }
        _resolvePossibleFunction(e) {
            return g(e, [this])
        }
        _putElementInTemplate(e, t) {
            if (this._config.html) return t.innerHTML = "", void t.append(e);
            t.textContent = e.textContent
        }
    }
    const Ji = new Set(["sanitize", "allowList", "sanitizeFn"]),
        er = "fade",
        tr = "show",
        sr = ".modal",
        ir = "hide.bs.modal",
        rr = "hover",
        nr = "focus",
        ar = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: f() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: f() ? "right" : "left"
        },
        or = {
            allowList: qi,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 6],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus"
        },
        lr = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string"
        };
    class cr extends V {
        constructor(e, t) {
            if (void 0 === ws) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(e, t), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
        }
        static get Default() {
            return or
        }
        static get DefaultType() {
            return lr
        }
        static get NAME() {
            return "tooltip"
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter())
        }
        dispose() {
            clearTimeout(this._timeout), $.off(this._element.closest(sr), ir, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const e = $.trigger(this._element, this.constructor.eventName("show")),
                t = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (e.defaultPrevented || !t) return;
            this._disposePopper();
            const s = this._getTipElement();
            this._element.setAttribute("aria-describedby", s.getAttribute("id"));
            const {
                container: i
            } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (i.append(s), $.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(s), s.classList.add(tr), "ontouchstart" in document.documentElement)
                for (const e of [].concat(...document.body.children)) $.on(e, "mouseover", d);
            this._queueCallback((() => {
                $.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1
            }), this.tip, this._isAnimated())
        }
        hide() {
            if (!this._isShown()) return;
            if ($.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) return;
            if (this._getTipElement().classList.remove(tr), "ontouchstart" in document.documentElement)
                for (const e of [].concat(...document.body.children)) $.off(e, "mouseover", d);
            this._activeTrigger.click = !1, this._activeTrigger[nr] = !1, this._activeTrigger[rr] = !1, this._isHovered = null;
            this._queueCallback((() => {
                this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), $.trigger(this._element, this.constructor.eventName("hidden")))
            }), this.tip, this._isAnimated())
        }
        update() {
            this._popper && this._popper.update()
        }
        _isWithContent() {
            return Boolean(this._getTitle())
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
        }
        _createTipElement(e) {
            const t = this._getTemplateFactory(e).toHtml();
            if (!t) return null;
            t.classList.remove(er, tr), t.classList.add(`bs-${this.constructor.NAME}-auto`);
            const s = (e => {
                do {
                    e += Math.floor(1e6 * Math.random())
                } while (document.getElementById(e));
                return e
            })(this.constructor.NAME).toString();
            return t.setAttribute("id", s), this._isAnimated() && t.classList.add(er), t
        }
        setContent(e) {
            this._newContent = e, this._isShown() && (this._disposePopper(), this.show())
        }
        _getTemplateFactory(e) {
            return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new Zi({ ...this._config,
                content: e,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            }
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }
        _initializeOnDelegatedTarget(e) {
            return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(er)
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(tr)
        }
        _createPopper(e) {
            const t = g(this._config.placement, [this, e, this._element]),
                s = ar[t.toUpperCase()];
            return ys(this._element, e, this._getPopperConfig(s))
        }
        _getOffset() {
            const {
                offset: e
            } = this._config;
            return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
        }
        _resolvePossibleFunction(e) {
            return g(e, [this._element])
        }
        _getPopperConfig(e) {
            const t = {
                placement: e,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: e => {
                        this._getTipElement().setAttribute("data-popper-placement", e.state.placement)
                    }
                }]
            };
            return { ...t,
                ...g(this._config.popperConfig, [t])
            }
        }
        _setListeners() {
            const e = this._config.trigger.split(" ");
            for (const t of e)
                if ("click" === t) $.on(this._element, this.constructor.eventName("click"), this._config.selector, (e => {
                    this._initializeOnDelegatedTarget(e).toggle()
                }));
                else if ("manual" !== t) {
                const e = t === rr ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                    s = t === rr ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                $.on(this._element, e, this._config.selector, (e => {
                    const t = this._initializeOnDelegatedTarget(e);
                    t._activeTrigger["focusin" === e.type ? nr : rr] = !0, t._enter()
                })), $.on(this._element, s, this._config.selector, (e => {
                    const t = this._initializeOnDelegatedTarget(e);
                    t._activeTrigger["focusout" === e.type ? nr : rr] = t._element.contains(e.relatedTarget), t._leave()
                }))
            }
            this._hideModalHandler = () => {
                this._element && this.hide()
            }, $.on(this._element.closest(sr), ir, this._hideModalHandler)
        }
        _fixTitle() {
            const e = this._element.getAttribute("title");
            e && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e), this._element.setAttribute("data-bs-original-title", e), this._element.removeAttribute("title"))
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => {
                this._isHovered && this.show()
            }), this._config.delay.show))
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => {
                this._isHovered || this.hide()
            }), this._config.delay.hide))
        }
        _setTimeout(e, t) {
            clearTimeout(this._timeout), this._timeout = setTimeout(e, t)
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(e) {
            const t = j.getDataAttributes(this._element);
            for (const e of Object.keys(t)) Ji.has(e) && delete t[e];
            return e = { ...t,
                ..."object" == typeof e && e ? e : {}
            }, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
        }
        _configAfterMerge(e) {
            return e.container = !1 === e.container ? document.body : a(e.container), "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), e
        }
        _getDelegateConfig() {
            const e = {};
            for (const [t, s] of Object.entries(this._config)) this.constructor.Default[t] !== s && (e[t] = s);
            return e.selector = !1, e.trigger = "manual", e
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = cr.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }
    m(cr);
    const dr = { ...cr.Default,
            content: "",
            offset: [0, 8],
            placement: "right",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            trigger: "click"
        },
        pr = { ...cr.DefaultType,
            content: "(null|string|element|function)"
        };
    class ur extends cr {
        static get Default() {
            return dr
        }
        static get DefaultType() {
            return pr
        }
        static get NAME() {
            return "popover"
        }
        _isWithContent() {
            return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            }
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = ur.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }
    m(ur);
    const hr = ".bs.scrollspy",
        fr = `activate${hr}`,
        mr = `click${hr}`,
        gr = `load${hr}.data-api`,
        vr = "active",
        br = "[href]",
        yr = ".nav-link",
        wr = `${yr}, .nav-item > ${yr}, .list-group-item`,
        Er = {
            offset: null,
            rootMargin: "0px 0px -25%",
            smoothScroll: !1,
            target: null,
            threshold: [.1, .5, 1]
        },
        xr = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element",
            threshold: "array"
        };
    class _r extends V {
        constructor(e, t) {
            super(e, t), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            }, this.refresh()
        }
        static get Default() {
            return Er
        }
        static get DefaultType() {
            return xr
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const e of this._observableSections.values()) this._observer.observe(e)
        }
        dispose() {
            this._observer.disconnect(), super.dispose()
        }
        _configAfterMerge(e) {
            return e.target = a(e.target) || document.body, e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin, "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map((e => Number.parseFloat(e)))), e
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && ($.off(this._config.target, mr), $.on(this._config.target, mr, br, (e => {
                const t = this._observableSections.get(e.target.hash);
                if (t) {
                    e.preventDefault();
                    const s = this._rootElement || window,
                        i = t.offsetTop - this._element.offsetTop;
                    if (s.scrollTo) return void s.scrollTo({
                        top: i,
                        behavior: "smooth"
                    });
                    s.scrollTop = i
                }
            })))
        }
        _getNewObserver() {
            const e = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver((e => this._observerCallback(e)), e)
        }
        _observerCallback(e) {
            const t = e => this._targetLinks.get(`#${e.target.id}`),
                s = e => {
                    this._previousScrollData.visibleEntryTop = e.target.offsetTop, this._process(t(e))
                },
                i = (this._rootElement || document.documentElement).scrollTop,
                r = i >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = i;
            for (const n of e) {
                if (!n.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(t(n));
                    continue
                }
                const e = n.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (r && e) {
                    if (s(n), !i) return
                } else r || e || s(n)
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            const e = R.find(br, this._config.target);
            for (const t of e) {
                if (!t.hash || l(t)) continue;
                const e = R.findOne(decodeURI(t.hash), this._element);
                o(e) && (this._targetLinks.set(decodeURI(t.hash), t), this._observableSections.set(t.hash, e))
            }
        }
        _process(e) {
            this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(vr), this._activateParents(e), $.trigger(this._element, fr, {
                relatedTarget: e
            }))
        }
        _activateParents(e) {
            if (e.classList.contains("dropdown-item")) R.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(vr);
            else
                for (const t of R.parents(e, ".nav, .list-group"))
                    for (const e of R.prev(t, wr)) e.classList.add(vr)
        }
        _clearActiveClass(e) {
            e.classList.remove(vr);
            const t = R.find(`${br}.${vr}`, e);
            for (const e of t) e.classList.remove(vr)
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = _r.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }
    $.on(window, gr, (() => {
        for (const e of R.find('[data-bs-spy="scroll"]')) _r.getOrCreateInstance(e)
    })), m(_r);
    const Sr = ".bs.tab",
        Tr = `hide${Sr}`,
        Cr = `hidden${Sr}`,
        Mr = `show${Sr}`,
        Ar = `shown${Sr}`,
        Or = `click${Sr}`,
        kr = `keydown${Sr}`,
        Lr = `load${Sr}`,
        Pr = "ArrowLeft",
        Dr = "ArrowRight",
        $r = "ArrowUp",
        Ir = "ArrowDown",
        Nr = "Home",
        zr = "End",
        jr = "active",
        Hr = "fade",
        Vr = "show",
        Wr = ":not(.dropdown-toggle)",
        Rr = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Br = `${`.nav-link${Wr}, .list-group-item${Wr}, [role="tab"]${Wr}`}, ${Rr}`,
        Fr = `.${jr}[data-bs-toggle="tab"], .${jr}[data-bs-toggle="pill"], .${jr}[data-bs-toggle="list"]`;
    class qr extends V {
        constructor(e) {
            super(e), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), $.on(this._element, kr, (e => this._keydown(e))))
        }
        static get NAME() {
            return "tab"
        }
        show() {
            const e = this._element;
            if (this._elemIsActive(e)) return;
            const t = this._getActiveElem(),
                s = t ? $.trigger(t, Tr, {
                    relatedTarget: e
                }) : null;
            $.trigger(e, Mr, {
                relatedTarget: t
            }).defaultPrevented || s && s.defaultPrevented || (this._deactivate(t, e), this._activate(e, t))
        }
        _activate(e, t) {
            if (!e) return;
            e.classList.add(jr), this._activate(R.getElementFromSelector(e));
            this._queueCallback((() => {
                "tab" === e.getAttribute("role") ? (e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), $.trigger(e, Ar, {
                    relatedTarget: t
                })) : e.classList.add(Vr)
            }), e, e.classList.contains(Hr))
        }
        _deactivate(e, t) {
            if (!e) return;
            e.classList.remove(jr), e.blur(), this._deactivate(R.getElementFromSelector(e));
            this._queueCallback((() => {
                "tab" === e.getAttribute("role") ? (e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), $.trigger(e, Cr, {
                    relatedTarget: t
                })) : e.classList.remove(Vr)
            }), e, e.classList.contains(Hr))
        }
        _keydown(e) {
            if (![Pr, Dr, $r, Ir, Nr, zr].includes(e.key)) return;
            e.stopPropagation(), e.preventDefault();
            const t = this._getChildren().filter((e => !l(e)));
            let s;
            if ([Nr, zr].includes(e.key)) s = t[e.key === Nr ? 0 : t.length - 1];
            else {
                const i = [Dr, Ir].includes(e.key);
                s = b(t, e.target, i, !0)
            }
            s && (s.focus({
                preventScroll: !0
            }), qr.getOrCreateInstance(s).show())
        }
        _getChildren() {
            return R.find(Br, this._parent)
        }
        _getActiveElem() {
            return this._getChildren().find((e => this._elemIsActive(e))) || null
        }
        _setInitialAttributes(e, t) {
            this._setAttributeIfNotExists(e, "role", "tablist");
            for (const e of t) this._setInitialAttributesOnChild(e)
        }
        _setInitialAttributesOnChild(e) {
            e = this._getInnerElement(e);
            const t = this._elemIsActive(e),
                s = this._getOuterElement(e);
            e.setAttribute("aria-selected", t), s !== e && this._setAttributeIfNotExists(s, "role", "presentation"), t || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e)
        }
        _setInitialAttributesOnTargetPanel(e) {
            const t = R.getElementFromSelector(e);
            t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `${e.id}`))
        }
        _toggleDropDown(e, t) {
            const s = this._getOuterElement(e);
            if (!s.classList.contains("dropdown")) return;
            const i = (e, i) => {
                const r = R.findOne(e, s);
                r && r.classList.toggle(i, t)
            };
            i(".dropdown-toggle", jr), i(".dropdown-menu", Vr), s.setAttribute("aria-expanded", t)
        }
        _setAttributeIfNotExists(e, t, s) {
            e.hasAttribute(t) || e.setAttribute(t, s)
        }
        _elemIsActive(e) {
            return e.classList.contains(jr)
        }
        _getInnerElement(e) {
            return e.matches(Br) ? e : R.findOne(Br, e)
        }
        _getOuterElement(e) {
            return e.closest(".nav-item, .list-group-item") || e
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = qr.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }
    $.on(document, Or, Rr, (function(e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(), l(this) || qr.getOrCreateInstance(this).show()
    })), $.on(window, Lr, (() => {
        for (const e of R.find(Fr)) qr.getOrCreateInstance(e)
    })), m(qr);
    const Xr = ".bs.toast",
        Yr = `mouseover${Xr}`,
        Gr = `mouseout${Xr}`,
        Ur = `focusin${Xr}`,
        Kr = `focusout${Xr}`,
        Qr = `hide${Xr}`,
        Zr = `hidden${Xr}`,
        Jr = `show${Xr}`,
        en = `shown${Xr}`,
        tn = "hide",
        sn = "show",
        rn = "showing",
        nn = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        an = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        };
    class on extends V {
        constructor(e, t) {
            super(e, t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }
        static get Default() {
            return an
        }
        static get DefaultType() {
            return nn
        }
        static get NAME() {
            return "toast"
        }
        show() {
            if ($.trigger(this._element, Jr).defaultPrevented) return;
            this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
            this._element.classList.remove(tn), p(this._element), this._element.classList.add(sn, rn), this._queueCallback((() => {
                this._element.classList.remove(rn), $.trigger(this._element, en), this._maybeScheduleHide()
            }), this._element, this._config.animation)
        }
        hide() {
            if (!this.isShown()) return;
            if ($.trigger(this._element, Qr).defaultPrevented) return;
            this._element.classList.add(rn), this._queueCallback((() => {
                this._element.classList.add(tn), this._element.classList.remove(rn, sn), $.trigger(this._element, Zr)
            }), this._element, this._config.animation)
        }
        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(sn), super.dispose()
        }
        isShown() {
            return this._element.classList.contains(sn)
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                this.hide()
            }), this._config.delay)))
        }
        _onInteraction(e, t) {
            switch (e.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = t;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = t
            }
            if (t) return void this._clearTimeout();
            const s = e.relatedTarget;
            this._element === s || this._element.contains(s) || this._maybeScheduleHide()
        }
        _setListeners() {
            $.on(this._element, Yr, (e => this._onInteraction(e, !0))), $.on(this._element, Gr, (e => this._onInteraction(e, !1))), $.on(this._element, Ur, (e => this._onInteraction(e, !0))), $.on(this._element, Kr, (e => this._onInteraction(e, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = on.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            }))
        }
    }
    B(on), m(on);
    return {
        Alert: Y,
        Button: U,
        Carousel: Me,
        Collapse: We,
        Dropdown: qs,
        Modal: Ci,
        Offcanvas: Fi,
        Popover: ur,
        ScrollSpy: _r,
        Tab: qr,
        Toast: on,
        Tooltip: cr
    }
})),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).noUiSlider = {})
}(this, (function(e) {
    "use strict";
    var t, s;

    function i(e) {
        return "object" == typeof e && "function" == typeof e.to
    }

    function r(e) {
        e.parentElement.removeChild(e)
    }

    function n(e) {
        return null != e
    }

    function a(e) {
        e.preventDefault()
    }

    function o(e) {
        return "number" == typeof e && !isNaN(e) && isFinite(e)
    }

    function l(e, t, s) {
        s > 0 && (u(e, t), setTimeout((function() {
            h(e, t)
        }), s))
    }

    function c(e) {
        return Math.max(Math.min(e, 100), 0)
    }

    function d(e) {
        return Array.isArray(e) ? e : [e]
    }

    function p(e) {
        var t = (e = String(e)).split(".");
        return t.length > 1 ? t[1].length : 0
    }

    function u(e, t) {
        e.classList && !/\s/.test(t) ? e.classList.add(t) : e.className += " " + t
    }

    function h(e, t) {
        e.classList && !/\s/.test(t) ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    }

    function f(e) {
        var t = void 0 !== window.pageXOffset,
            s = "CSS1Compat" === (e.compatMode || "");
        return {
            x: t ? window.pageXOffset : s ? e.documentElement.scrollLeft : e.body.scrollLeft,
            y: t ? window.pageYOffset : s ? e.documentElement.scrollTop : e.body.scrollTop
        }
    }

    function m(e, t) {
        return 100 / (t - e)
    }

    function g(e, t, s) {
        return 100 * t / (e[s + 1] - e[s])
    }

    function v(e, t) {
        for (var s = 1; e >= t[s];) s += 1;
        return s
    }

    function b(e, t, s) {
        if (s >= e.slice(-1)[0]) return 100;
        var i = v(s, e),
            r = e[i - 1],
            n = e[i],
            a = t[i - 1],
            o = t[i];
        return a + function(e, t) {
            return g(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0)
        }([r, n], s) / m(a, o)
    }

    function y(e, t, s, i) {
        if (100 === i) return i;
        var r = v(i, e),
            n = e[r - 1],
            a = e[r];
        return s ? i - n > (a - n) / 2 ? a : n : t[r - 1] ? e[r - 1] + function(e, t) {
            return Math.round(e / t) * t
        }(i - e[r - 1], t[r - 1]) : i
    }
    e.PipsMode = void 0, (t = e.PipsMode || (e.PipsMode = {})).Range = "range", t.Steps = "steps", t.Positions = "positions", t.Count = "count", t.Values = "values", e.PipsType = void 0, (s = e.PipsType || (e.PipsType = {}))[s.None = -1] = "None", s[s.NoValue = 0] = "NoValue", s[s.LargeValue = 1] = "LargeValue", s[s.SmallValue = 2] = "SmallValue";
    var w = function() {
            function e(e, t, s) {
                var i;
                this.xPct = [], this.xVal = [], this.xSteps = [], this.xNumSteps = [], this.xHighestCompleteStep = [], this.xSteps = [s || !1], this.xNumSteps = [!1], this.snap = t;
                var r = [];
                for (Object.keys(e).forEach((function(t) {
                        r.push([d(e[t]), t])
                    })), r.sort((function(e, t) {
                        return e[0][0] - t[0][0]
                    })), i = 0; i < r.length; i++) this.handleEntryPoint(r[i][1], r[i][0]);
                for (this.xNumSteps = this.xSteps.slice(0), i = 0; i < this.xNumSteps.length; i++) this.handleStepPoint(i, this.xNumSteps[i])
            }
            return e.prototype.getDistance = function(e) {
                for (var t = [], s = 0; s < this.xNumSteps.length - 1; s++) t[s] = g(this.xVal, e, s);
                return t
            }, e.prototype.getAbsoluteDistance = function(e, t, s) {
                var i, r = 0;
                if (e < this.xPct[this.xPct.length - 1])
                    for (; e > this.xPct[r + 1];) r++;
                else e === this.xPct[this.xPct.length - 1] && (r = this.xPct.length - 2);
                s || e !== this.xPct[r + 1] || r++, null === t && (t = []);
                var n = 1,
                    a = t[r],
                    o = 0,
                    l = 0,
                    c = 0,
                    d = 0;
                for (i = s ? (e - this.xPct[r]) / (this.xPct[r + 1] - this.xPct[r]) : (this.xPct[r + 1] - e) / (this.xPct[r + 1] - this.xPct[r]); a > 0;) o = this.xPct[r + 1 + d] - this.xPct[r + d], t[r + d] * n + 100 - 100 * i > 100 ? (l = o * i, n = (a - 100 * i) / t[r + d], i = 1) : (l = t[r + d] * o / 100 * n, n = 0), s ? (c -= l, this.xPct.length + d >= 1 && d--) : (c += l, this.xPct.length - d >= 1 && d++), a = t[r + d] * n;
                return e + c
            }, e.prototype.toStepping = function(e) {
                return e = b(this.xVal, this.xPct, e)
            }, e.prototype.fromStepping = function(e) {
                return function(e, t, s) {
                    if (s >= 100) return e.slice(-1)[0];
                    var i = v(s, t),
                        r = e[i - 1],
                        n = e[i],
                        a = t[i - 1];
                    return function(e, t) {
                        return t * (e[1] - e[0]) / 100 + e[0]
                    }([r, n], (s - a) * m(a, t[i]))
                }(this.xVal, this.xPct, e)
            }, e.prototype.getStep = function(e) {
                return e = y(this.xPct, this.xSteps, this.snap, e)
            }, e.prototype.getDefaultStep = function(e, t, s) {
                var i = v(e, this.xPct);
                return (100 === e || t && e === this.xPct[i - 1]) && (i = Math.max(i - 1, 1)), (this.xVal[i] - this.xVal[i - 1]) / s
            }, e.prototype.getNearbySteps = function(e) {
                var t = v(e, this.xPct);
                return {
                    stepBefore: {
                        startValue: this.xVal[t - 2],
                        step: this.xNumSteps[t - 2],
                        highestStep: this.xHighestCompleteStep[t - 2]
                    },
                    thisStep: {
                        startValue: this.xVal[t - 1],
                        step: this.xNumSteps[t - 1],
                        highestStep: this.xHighestCompleteStep[t - 1]
                    },
                    stepAfter: {
                        startValue: this.xVal[t],
                        step: this.xNumSteps[t],
                        highestStep: this.xHighestCompleteStep[t]
                    }
                }
            }, e.prototype.countStepDecimals = function() {
                var e = this.xNumSteps.map(p);
                return Math.max.apply(null, e)
            }, e.prototype.hasNoSize = function() {
                return this.xVal[0] === this.xVal[this.xVal.length - 1]
            }, e.prototype.convert = function(e) {
                return this.getStep(this.toStepping(e))
            }, e.prototype.handleEntryPoint = function(e, t) {
                var s;
                if (!o(s = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e)) || !o(t[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
                this.xPct.push(s), this.xVal.push(t[0]);
                var i = Number(t[1]);
                s ? this.xSteps.push(!isNaN(i) && i) : isNaN(i) || (this.xSteps[0] = i), this.xHighestCompleteStep.push(0)
            }, e.prototype.handleStepPoint = function(e, t) {
                if (t)
                    if (this.xVal[e] !== this.xVal[e + 1]) {
                        this.xSteps[e] = g([this.xVal[e], this.xVal[e + 1]], t, 0) / m(this.xPct[e], this.xPct[e + 1]);
                        var s = (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                            i = Math.ceil(Number(s.toFixed(3)) - 1),
                            r = this.xVal[e] + this.xNumSteps[e] * i;
                        this.xHighestCompleteStep[e] = r
                    } else this.xSteps[e] = this.xHighestCompleteStep[e] = this.xVal[e]
            }, e
        }(),
        E = {
            to: function(e) {
                return void 0 === e ? "" : e.toFixed(2)
            },
            from: Number
        },
        x = {
            target: "target",
            base: "base",
            origin: "origin",
            handle: "handle",
            handleLower: "handle-lower",
            handleUpper: "handle-upper",
            touchArea: "touch-area",
            horizontal: "horizontal",
            vertical: "vertical",
            background: "background",
            connect: "connect",
            connects: "connects",
            ltr: "ltr",
            rtl: "rtl",
            textDirectionLtr: "txt-dir-ltr",
            textDirectionRtl: "txt-dir-rtl",
            draggable: "draggable",
            drag: "state-drag",
            tap: "state-tap",
            active: "active",
            tooltip: "tooltip",
            pips: "pips",
            pipsHorizontal: "pips-horizontal",
            pipsVertical: "pips-vertical",
            marker: "marker",
            markerHorizontal: "marker-horizontal",
            markerVertical: "marker-vertical",
            markerNormal: "marker-normal",
            markerLarge: "marker-large",
            markerSub: "marker-sub",
            value: "value",
            valueHorizontal: "value-horizontal",
            valueVertical: "value-vertical",
            valueNormal: "value-normal",
            valueLarge: "value-large",
            valueSub: "value-sub"
        },
        _ = {
            tooltips: ".__tooltips",
            aria: ".__aria"
        };

    function S(e, t) {
        if (!o(t)) throw new Error("noUiSlider: 'step' is not numeric.");
        e.singleStep = t
    }

    function T(e, t) {
        if (!o(t)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        e.keyboardPageMultiplier = t
    }

    function C(e, t) {
        if (!o(t)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
        e.keyboardMultiplier = t
    }

    function M(e, t) {
        if (!o(t)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        e.keyboardDefaultStep = t
    }

    function A(e, t) {
        if ("object" != typeof t || Array.isArray(t)) throw new Error("noUiSlider: 'range' is not an object.");
        if (void 0 === t.min || void 0 === t.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        e.spectrum = new w(t, e.snap || !1, e.singleStep)
    }

    function O(e, t) {
        if (t = d(t), !Array.isArray(t) || !t.length) throw new Error("noUiSlider: 'start' option is incorrect.");
        e.handles = t.length, e.start = t
    }

    function k(e, t) {
        if ("boolean" != typeof t) throw new Error("noUiSlider: 'snap' option must be a boolean.");
        e.snap = t
    }

    function L(e, t) {
        if ("boolean" != typeof t) throw new Error("noUiSlider: 'animate' option must be a boolean.");
        e.animate = t
    }

    function P(e, t) {
        if ("number" != typeof t) throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        e.animationDuration = t
    }

    function D(e, t) {
        var s, i = [!1];
        if ("lower" === t ? t = [!0, !1] : "upper" === t && (t = [!1, !0]), !0 === t || !1 === t) {
            for (s = 1; s < e.handles; s++) i.push(t);
            i.push(!1)
        } else {
            if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
            i = t
        }
        e.connect = i
    }

    function $(e, t) {
        switch (t) {
            case "horizontal":
                e.ort = 0;
                break;
            case "vertical":
                e.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.")
        }
    }

    function I(e, t) {
        if (!o(t)) throw new Error("noUiSlider: 'margin' option must be numeric.");
        0 !== t && (e.margin = e.spectrum.getDistance(t))
    }

    function N(e, t) {
        if (!o(t)) throw new Error("noUiSlider: 'limit' option must be numeric.");
        if (e.limit = e.spectrum.getDistance(t), !e.limit || e.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")
    }

    function z(e, t) {
        var s;
        if (!o(t) && !Array.isArray(t)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        if (Array.isArray(t) && 2 !== t.length && !o(t[0]) && !o(t[1])) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        if (0 !== t) {
            for (Array.isArray(t) || (t = [t, t]), e.padding = [e.spectrum.getDistance(t[0]), e.spectrum.getDistance(t[1])], s = 0; s < e.spectrum.xNumSteps.length - 1; s++)
                if (e.padding[0][s] < 0 || e.padding[1][s] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            var i = t[0] + t[1],
                r = e.spectrum.xVal[0];
            if (i / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - r) > 1) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")
        }
    }

    function j(e, t) {
        switch (t) {
            case "ltr":
                e.dir = 0;
                break;
            case "rtl":
                e.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.")
        }
    }

    function H(e, t) {
        if ("string" != typeof t) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        var s = t.indexOf("tap") >= 0,
            i = t.indexOf("drag") >= 0,
            r = t.indexOf("fixed") >= 0,
            n = t.indexOf("snap") >= 0,
            a = t.indexOf("hover") >= 0,
            o = t.indexOf("unconstrained") >= 0,
            l = t.indexOf("drag-all") >= 0,
            c = t.indexOf("smooth-steps") >= 0;
        if (r) {
            if (2 !== e.handles) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            I(e, e.start[1] - e.start[0])
        }
        if (o && (e.margin || e.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        e.events = {
            tap: s || n,
            drag: i,
            dragAll: l,
            smoothSteps: c,
            fixed: r,
            snap: n,
            hover: a,
            unconstrained: o
        }
    }

    function V(e, t) {
        if (!1 !== t)
            if (!0 === t || i(t)) {
                e.tooltips = [];
                for (var s = 0; s < e.handles; s++) e.tooltips.push(t)
            } else {
                if ((t = d(t)).length !== e.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                t.forEach((function(e) {
                    if ("boolean" != typeof e && !i(e)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")
                })), e.tooltips = t
            }
    }

    function W(e, t) {
        if (t.length !== e.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
        e.handleAttributes = t
    }

    function R(e, t) {
        if (!i(t)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        e.ariaFormat = t
    }

    function B(e, t) {
        if (! function(e) {
                return i(e) && "function" == typeof e.from
            }(t)) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        e.format = t
    }

    function F(e, t) {
        if ("boolean" != typeof t) throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        e.keyboardSupport = t
    }

    function q(e, t) {
        e.documentElement = t
    }

    function X(e, t) {
        if ("string" != typeof t && !1 !== t) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        e.cssPrefix = t
    }

    function Y(e, t) {
        if ("object" != typeof t) throw new Error("noUiSlider: 'cssClasses' must be an object.");
        "string" == typeof e.cssPrefix ? (e.cssClasses = {}, Object.keys(t).forEach((function(s) {
            e.cssClasses[s] = e.cssPrefix + t[s]
        }))) : e.cssClasses = t
    }

    function G(e) {
        var t = {
                margin: null,
                limit: null,
                padding: null,
                animate: !0,
                animationDuration: 300,
                ariaFormat: E,
                format: E
            },
            s = {
                step: {
                    r: !1,
                    t: S
                },
                keyboardPageMultiplier: {
                    r: !1,
                    t: T
                },
                keyboardMultiplier: {
                    r: !1,
                    t: C
                },
                keyboardDefaultStep: {
                    r: !1,
                    t: M
                },
                start: {
                    r: !0,
                    t: O
                },
                connect: {
                    r: !0,
                    t: D
                },
                direction: {
                    r: !0,
                    t: j
                },
                snap: {
                    r: !1,
                    t: k
                },
                animate: {
                    r: !1,
                    t: L
                },
                animationDuration: {
                    r: !1,
                    t: P
                },
                range: {
                    r: !0,
                    t: A
                },
                orientation: {
                    r: !1,
                    t: $
                },
                margin: {
                    r: !1,
                    t: I
                },
                limit: {
                    r: !1,
                    t: N
                },
                padding: {
                    r: !1,
                    t: z
                },
                behaviour: {
                    r: !0,
                    t: H
                },
                ariaFormat: {
                    r: !1,
                    t: R
                },
                format: {
                    r: !1,
                    t: B
                },
                tooltips: {
                    r: !1,
                    t: V
                },
                keyboardSupport: {
                    r: !0,
                    t: F
                },
                documentElement: {
                    r: !1,
                    t: q
                },
                cssPrefix: {
                    r: !0,
                    t: X
                },
                cssClasses: {
                    r: !0,
                    t: Y
                },
                handleAttributes: {
                    r: !1,
                    t: W
                }
            },
            i = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: !0,
                cssPrefix: "noUi-",
                cssClasses: x,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10
            };
        e.format && !e.ariaFormat && (e.ariaFormat = e.format), Object.keys(s).forEach((function(r) {
            if (n(e[r]) || void 0 !== i[r]) s[r].t(t, n(e[r]) ? e[r] : i[r]);
            else if (s[r].r) throw new Error("noUiSlider: '" + r + "' is required.")
        })), t.pips = e.pips;
        var r = document.createElement("div"),
            a = void 0 !== r.style.msTransform,
            o = void 0 !== r.style.transform;
        t.transformRule = o ? "transform" : a ? "msTransform" : "webkitTransform";
        return t.style = [
            ["left", "top"],
            ["right", "bottom"]
        ][t.dir][t.ort], t
    }

    function U(t, s, i) {
        var o, p, m, g, v, b, y, w = window.navigator.pointerEnabled ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            } : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend"
            },
            E = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    window.addEventListener("test", null, t)
                } catch (e) {}
                return e
            }(),
            x = t,
            S = s.spectrum,
            T = [],
            C = [],
            M = [],
            A = 0,
            O = {},
            k = t.ownerDocument,
            L = s.documentElement || k.documentElement,
            P = k.body,
            D = "rtl" === k.dir || 1 === s.ort ? 0 : 100;

        function $(e, t) {
            var s = k.createElement("div");
            return t && u(s, t), e.appendChild(s), s
        }

        function I(e, t) {
            var i = $(e, s.cssClasses.origin),
                r = $(i, s.cssClasses.handle);
            if ($(r, s.cssClasses.touchArea), r.setAttribute("data-handle", String(t)), s.keyboardSupport && (r.setAttribute("tabindex", "0"), r.addEventListener("keydown", (function(e) {
                    return function(e, t) {
                        if (j() || H(t)) return !1;
                        var i = ["Left", "Right"],
                            r = ["Down", "Up"],
                            n = ["PageDown", "PageUp"],
                            a = ["Home", "End"];
                        s.dir && !s.ort ? i.reverse() : s.ort && !s.dir && (r.reverse(), n.reverse());
                        var o, l = e.key.replace("Arrow", ""),
                            c = l === n[0],
                            d = l === n[1],
                            p = l === r[0] || l === i[0] || c,
                            u = l === r[1] || l === i[1] || d,
                            h = l === a[0],
                            f = l === a[1];
                        if (!(p || u || h || f)) return !0;
                        if (e.preventDefault(), u || p) {
                            var m = p ? 0 : 1,
                                g = ge(t)[m];
                            if (null === g) return !1;
                            !1 === g && (g = S.getDefaultStep(C[t], p, s.keyboardDefaultStep)), g *= d || c ? s.keyboardPageMultiplier : s.keyboardMultiplier, g = Math.max(g, 1e-7), g *= p ? -1 : 1, o = T[t] + g
                        } else o = f ? s.spectrum.xVal[s.spectrum.xVal.length - 1] : s.spectrum.xVal[0];
                        return pe(t, S.toStepping(o), !0, !0), ne("slide", t), ne("update", t), ne("change", t), ne("set", t), !1
                    }(e, t)
                }))), void 0 !== s.handleAttributes) {
                var n = s.handleAttributes[t];
                Object.keys(n).forEach((function(e) {
                    r.setAttribute(e, n[e])
                }))
            }
            return r.setAttribute("role", "slider"), r.setAttribute("aria-orientation", s.ort ? "vertical" : "horizontal"), 0 === t ? u(r, s.cssClasses.handleLower) : t === s.handles - 1 && u(r, s.cssClasses.handleUpper), i.handle = r, i
        }

        function N(e, t) {
            return !!t && $(e, s.cssClasses.connect)
        }

        function z(e, t) {
            return !(!s.tooltips || !s.tooltips[t]) && $(e.firstChild, s.cssClasses.tooltip)
        }

        function j() {
            return x.hasAttribute("disabled")
        }

        function H(e) {
            return p[e].hasAttribute("disabled")
        }

        function V() {
            v && (re("update" + _.tooltips), v.forEach((function(e) {
                e && r(e)
            })), v = null)
        }

        function W() {
            V(), v = p.map(z), ie("update" + _.tooltips, (function(e, t, i) {
                if (v && s.tooltips && !1 !== v[t]) {
                    var r = e[t];
                    !0 !== s.tooltips[t] && (r = s.tooltips[t].to(i[t])), v[t].innerHTML = r
                }
            }))
        }

        function R(e, t) {
            return e.map((function(e) {
                return S.fromStepping(t ? S.getStep(e) : e)
            }))
        }

        function B(t) {
            var s, i = function(t) {
                    if (t.mode === e.PipsMode.Range || t.mode === e.PipsMode.Steps) return S.xVal;
                    if (t.mode === e.PipsMode.Count) {
                        if (t.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                        for (var s = t.values - 1, i = 100 / s, r = []; s--;) r[s] = s * i;
                        return r.push(100), R(r, t.stepped)
                    }
                    return t.mode === e.PipsMode.Positions ? R(t.values, t.stepped) : t.mode === e.PipsMode.Values ? t.stepped ? t.values.map((function(e) {
                        return S.fromStepping(S.getStep(S.toStepping(e)))
                    })) : t.values : []
                }(t),
                r = {},
                n = S.xVal[0],
                a = S.xVal[S.xVal.length - 1],
                o = !1,
                l = !1,
                c = 0;
            return s = i.slice().sort((function(e, t) {
                return e - t
            })), (i = s.filter((function(e) {
                return !this[e] && (this[e] = !0)
            }), {}))[0] !== n && (i.unshift(n), o = !0), i[i.length - 1] !== a && (i.push(a), l = !0), i.forEach((function(s, n) {
                var a, d, p, u, h, f, m, g, v, b, y = s,
                    w = i[n + 1],
                    E = t.mode === e.PipsMode.Steps;
                for (E && (a = S.xNumSteps[n]), a || (a = w - y), void 0 === w && (w = y), a = Math.max(a, 1e-7), d = y; d <= w; d = Number((d + a).toFixed(7))) {
                    for (g = (h = (u = S.toStepping(d)) - c) / (t.density || 1), b = h / (v = Math.round(g)), p = 1; p <= v; p += 1) r[(f = c + p * b).toFixed(5)] = [S.fromStepping(f), 0];
                    m = i.indexOf(d) > -1 ? e.PipsType.LargeValue : E ? e.PipsType.SmallValue : e.PipsType.NoValue, !n && o && d !== w && (m = 0), d === w && l || (r[u.toFixed(5)] = [d, m]), c = u
                }
            })), r
        }

        function F(t, i, r) {
            var n, a, o = k.createElement("div"),
                l = ((n = {})[e.PipsType.None] = "", n[e.PipsType.NoValue] = s.cssClasses.valueNormal, n[e.PipsType.LargeValue] = s.cssClasses.valueLarge, n[e.PipsType.SmallValue] = s.cssClasses.valueSub, n),
                c = ((a = {})[e.PipsType.None] = "", a[e.PipsType.NoValue] = s.cssClasses.markerNormal, a[e.PipsType.LargeValue] = s.cssClasses.markerLarge, a[e.PipsType.SmallValue] = s.cssClasses.markerSub, a),
                d = [s.cssClasses.valueHorizontal, s.cssClasses.valueVertical],
                p = [s.cssClasses.markerHorizontal, s.cssClasses.markerVertical];

            function h(e, t) {
                var i = t === s.cssClasses.value,
                    r = i ? l : c;
                return t + " " + (i ? d : p)[s.ort] + " " + r[e]
            }
            return u(o, s.cssClasses.pips), u(o, 0 === s.ort ? s.cssClasses.pipsHorizontal : s.cssClasses.pipsVertical), Object.keys(t).forEach((function(n) {
                ! function(t, n, a) {
                    if ((a = i ? i(n, a) : a) !== e.PipsType.None) {
                        var l = $(o, !1);
                        l.className = h(a, s.cssClasses.marker), l.style[s.style] = t + "%", a > e.PipsType.NoValue && ((l = $(o, !1)).className = h(a, s.cssClasses.value), l.setAttribute("data-value", String(n)), l.style[s.style] = t + "%", l.innerHTML = String(r.to(n)))
                    }
                }(n, t[n][0], t[n][1])
            })), o
        }

        function q() {
            g && (r(g), g = null)
        }

        function X(e) {
            q();
            var t = B(e),
                s = e.filter,
                i = e.format || {
                    to: function(e) {
                        return String(Math.round(e))
                    }
                };
            return g = x.appendChild(F(t, s, i))
        }

        function Y() {
            var e = o.getBoundingClientRect(),
                t = "offset" + ["Width", "Height"][s.ort];
            return 0 === s.ort ? e.width || o[t] : e.height || o[t]
        }

        function U(e, t, i, r) {
            var n = function(n) {
                    var a, o, l = function(e, t, s) {
                        var i = 0 === e.type.indexOf("touch"),
                            r = 0 === e.type.indexOf("mouse"),
                            n = 0 === e.type.indexOf("pointer"),
                            a = 0,
                            o = 0;
                        0 === e.type.indexOf("MSPointer") && (n = !0);
                        if ("mousedown" === e.type && !e.buttons && !e.touches) return !1;
                        if (i) {
                            var l = function(t) {
                                var i = t.target;
                                return i === s || s.contains(i) || e.composed && e.composedPath().shift() === s
                            };
                            if ("touchstart" === e.type) {
                                var c = Array.prototype.filter.call(e.touches, l);
                                if (c.length > 1) return !1;
                                a = c[0].pageX, o = c[0].pageY
                            } else {
                                var d = Array.prototype.find.call(e.changedTouches, l);
                                if (!d) return !1;
                                a = d.pageX, o = d.pageY
                            }
                        }
                        t = t || f(k), (r || n) && (a = e.clientX + t.x, o = e.clientY + t.y);
                        return e.pageOffset = t, e.points = [a, o], e.cursor = r || n, e
                    }(n, r.pageOffset, r.target || t);
                    return !!l && (!(j() && !r.doNotReject) && (a = x, o = s.cssClasses.tap, !((a.classList ? a.classList.contains(o) : new RegExp("\\b" + o + "\\b").test(a.className)) && !r.doNotReject) && (!(e === w.start && void 0 !== l.buttons && l.buttons > 1) && ((!r.hover || !l.buttons) && (E || l.preventDefault(), l.calcPoint = l.points[s.ort], void i(l, r))))))
                },
                a = [];
            return e.split(" ").forEach((function(e) {
                t.addEventListener(e, n, !!E && {
                    passive: !0
                }), a.push([e, n])
            })), a
        }

        function K(e) {
            var t, i, r, n, a, l, d = 100 * (e - (t = o, i = s.ort, r = t.getBoundingClientRect(), n = t.ownerDocument, a = n.documentElement, l = f(n), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (l.x = 0), i ? r.top + l.y - a.clientTop : r.left + l.x - a.clientLeft)) / Y();
            return d = c(d), s.dir ? 100 - d : d
        }

        function Q(e, t) {
            "mouseout" === e.type && "HTML" === e.target.nodeName && null === e.relatedTarget && J(e, t)
        }

        function Z(e, t) {
            if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === e.buttons && 0 !== t.buttonsProperty) return J(e, t);
            var i = (s.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
            le(i > 0, 100 * i / t.baseSize, t.locations, t.handleNumbers, t.connect)
        }

        function J(e, t) {
            t.handle && (h(t.handle, s.cssClasses.active), A -= 1), t.listeners.forEach((function(e) {
                L.removeEventListener(e[0], e[1])
            })), 0 === A && (h(x, s.cssClasses.drag), de(), e.cursor && (P.style.cursor = "", P.removeEventListener("selectstart", a))), s.events.smoothSteps && (t.handleNumbers.forEach((function(e) {
                pe(e, C[e], !0, !0, !1, !1)
            })), t.handleNumbers.forEach((function(e) {
                ne("update", e)
            }))), t.handleNumbers.forEach((function(e) {
                ne("change", e), ne("set", e), ne("end", e)
            }))
        }

        function ee(e, t) {
            if (!t.handleNumbers.some(H)) {
                var i;
                if (1 === t.handleNumbers.length) i = p[t.handleNumbers[0]].children[0], A += 1, u(i, s.cssClasses.active);
                e.stopPropagation();
                var r = [],
                    n = U(w.move, L, Z, {
                        target: e.target,
                        handle: i,
                        connect: t.connect,
                        listeners: r,
                        startCalcPoint: e.calcPoint,
                        baseSize: Y(),
                        pageOffset: e.pageOffset,
                        handleNumbers: t.handleNumbers,
                        buttonsProperty: e.buttons,
                        locations: C.slice()
                    }),
                    o = U(w.end, L, J, {
                        target: e.target,
                        handle: i,
                        listeners: r,
                        doNotReject: !0,
                        handleNumbers: t.handleNumbers
                    }),
                    l = U("mouseout", L, Q, {
                        target: e.target,
                        handle: i,
                        listeners: r,
                        doNotReject: !0,
                        handleNumbers: t.handleNumbers
                    });
                r.push.apply(r, n.concat(o, l)), e.cursor && (P.style.cursor = getComputedStyle(e.target).cursor, p.length > 1 && u(x, s.cssClasses.drag), P.addEventListener("selectstart", a, !1)), t.handleNumbers.forEach((function(e) {
                    ne("start", e)
                }))
            }
        }

        function te(e) {
            e.stopPropagation();
            var t = K(e.calcPoint),
                i = function(e) {
                    var t = 100,
                        s = !1;
                    return p.forEach((function(i, r) {
                        if (!H(r)) {
                            var n = C[r],
                                a = Math.abs(n - e);
                            (a < t || a <= t && e > n || 100 === a && 100 === t) && (s = r, t = a)
                        }
                    })), s
                }(t);
            !1 !== i && (s.events.snap || l(x, s.cssClasses.tap, s.animationDuration), pe(i, t, !0, !0), de(), ne("slide", i, !0), ne("update", i, !0), s.events.snap ? ee(e, {
                handleNumbers: [i]
            }) : (ne("change", i, !0), ne("set", i, !0)))
        }

        function se(e) {
            var t = K(e.calcPoint),
                s = S.getStep(t),
                i = S.fromStepping(s);
            Object.keys(O).forEach((function(e) {
                "hover" === e.split(".")[0] && O[e].forEach((function(e) {
                    e.call(ve, i)
                }))
            }))
        }

        function ie(e, t) {
            O[e] = O[e] || [], O[e].push(t), "update" === e.split(".")[0] && p.forEach((function(e, t) {
                ne("update", t)
            }))
        }

        function re(e) {
            var t = e && e.split(".")[0],
                s = t ? e.substring(t.length) : e;
            Object.keys(O).forEach((function(e) {
                var i = e.split(".")[0],
                    r = e.substring(i.length);
                t && t !== i || s && s !== r || function(e) {
                    return e === _.aria || e === _.tooltips
                }(r) && s !== r || delete O[e]
            }))
        }

        function ne(e, t, i) {
            Object.keys(O).forEach((function(r) {
                var n = r.split(".")[0];
                e === n && O[r].forEach((function(e) {
                    e.call(ve, T.map(s.format.to), t, T.slice(), i || !1, C.slice(), ve)
                }))
            }))
        }

        function ae(e, t, i, r, n, a, o) {
            var l;
            return p.length > 1 && !s.events.unconstrained && (r && t > 0 && (l = S.getAbsoluteDistance(e[t - 1], s.margin, !1), i = Math.max(i, l)), n && t < p.length - 1 && (l = S.getAbsoluteDistance(e[t + 1], s.margin, !0), i = Math.min(i, l))), p.length > 1 && s.limit && (r && t > 0 && (l = S.getAbsoluteDistance(e[t - 1], s.limit, !1), i = Math.min(i, l)), n && t < p.length - 1 && (l = S.getAbsoluteDistance(e[t + 1], s.limit, !0), i = Math.max(i, l))), s.padding && (0 === t && (l = S.getAbsoluteDistance(0, s.padding[0], !1), i = Math.max(i, l)), t === p.length - 1 && (l = S.getAbsoluteDistance(100, s.padding[1], !0), i = Math.min(i, l))), o || (i = S.getStep(i)), !((i = c(i)) === e[t] && !a) && i
        }

        function oe(e, t) {
            var i = s.ort;
            return (i ? t : e) + ", " + (i ? e : t)
        }

        function le(e, t, i, r, n) {
            var a = i.slice(),
                o = r[0],
                l = s.events.smoothSteps,
                c = [!e, e],
                d = [e, !e];
            r = r.slice(), e && r.reverse(), r.length > 1 ? r.forEach((function(e, s) {
                var i = ae(a, e, a[e] + t, c[s], d[s], !1, l);
                !1 === i ? t = 0 : (t = i - a[e], a[e] = i)
            })) : c = d = [!0];
            var p = !1;
            r.forEach((function(e, s) {
                p = pe(e, i[e] + t, c[s], d[s], !1, l) || p
            })), p && (r.forEach((function(e) {
                ne("update", e), ne("slide", e)
            })), null != n && ne("drag", o))
        }

        function ce(e, t) {
            return s.dir ? 100 - e - t : e
        }

        function de() {
            M.forEach((function(e) {
                var t = C[e] > 50 ? -1 : 1,
                    s = 3 + (p.length + t * e);
                p[e].style.zIndex = String(s)
            }))
        }

        function pe(e, t, i, r, n, a) {
            return n || (t = ae(C, e, t, i, r, !1, a)), !1 !== t && (function(e, t) {
                C[e] = t, T[e] = S.fromStepping(t);
                var i = "translate(" + oe(ce(t, 0) - D + "%", "0") + ")";
                p[e].style[s.transformRule] = i, ue(e), ue(e + 1)
            }(e, t), !0)
        }

        function ue(e) {
            if (m[e]) {
                var t = 0,
                    i = 100;
                0 !== e && (t = C[e - 1]), e !== m.length - 1 && (i = C[e]);
                var r = i - t,
                    n = "translate(" + oe(ce(t, r) + "%", "0") + ")",
                    a = "scale(" + oe(r / 100, "1") + ")";
                m[e].style[s.transformRule] = n + " " + a
            }
        }

        function he(e, t) {
            return null === e || !1 === e || void 0 === e ? C[t] : ("number" == typeof e && (e = String(e)), !1 !== (e = s.format.from(e)) && (e = S.toStepping(e)), !1 === e || isNaN(e) ? C[t] : e)
        }

        function fe(e, t, i) {
            var r = d(e),
                n = void 0 === C[0];
            t = void 0 === t || t, s.animate && !n && l(x, s.cssClasses.tap, s.animationDuration), M.forEach((function(e) {
                pe(e, he(r[e], e), !0, !1, i)
            }));
            var a = 1 === M.length ? 0 : 1;
            if (n && S.hasNoSize() && (i = !0, C[0] = 0, M.length > 1)) {
                var o = 100 / (M.length - 1);
                M.forEach((function(e) {
                    C[e] = e * o
                }))
            }
            for (; a < M.length; ++a) M.forEach((function(e) {
                pe(e, C[e], !0, !0, i)
            }));
            de(), M.forEach((function(e) {
                ne("update", e), null !== r[e] && t && ne("set", e)
            }))
        }

        function me(e) {
            if (void 0 === e && (e = !1), e) return 1 === T.length ? T[0] : T.slice(0);
            var t = T.map(s.format.to);
            return 1 === t.length ? t[0] : t
        }

        function ge(e) {
            var t = C[e],
                i = S.getNearbySteps(t),
                r = T[e],
                n = i.thisStep.step,
                a = null;
            if (s.snap) return [r - i.stepBefore.startValue || null, i.stepAfter.startValue - r || null];
            !1 !== n && r + n > i.stepAfter.startValue && (n = i.stepAfter.startValue - r), a = r > i.thisStep.startValue ? i.thisStep.step : !1 !== i.stepBefore.step && r - i.stepBefore.highestStep, 100 === t ? n = null : 0 === t && (a = null);
            var o = S.countStepDecimals();
            return null !== n && !1 !== n && (n = Number(n.toFixed(o))), null !== a && !1 !== a && (a = Number(a.toFixed(o))), [a, n]
        }
        u(b = x, s.cssClasses.target), 0 === s.dir ? u(b, s.cssClasses.ltr) : u(b, s.cssClasses.rtl), 0 === s.ort ? u(b, s.cssClasses.horizontal) : u(b, s.cssClasses.vertical), u(b, "rtl" === getComputedStyle(b).direction ? s.cssClasses.textDirectionRtl : s.cssClasses.textDirectionLtr), o = $(b, s.cssClasses.base),
            function(e, t) {
                var i = $(t, s.cssClasses.connects);
                p = [], (m = []).push(N(i, e[0]));
                for (var r = 0; r < s.handles; r++) p.push(I(t, r)), M[r] = r, m.push(N(i, e[r + 1]))
            }(s.connect, o), (y = s.events).fixed || p.forEach((function(e, t) {
                U(w.start, e.children[0], ee, {
                    handleNumbers: [t]
                })
            })), y.tap && U(w.start, o, te, {}), y.hover && U(w.move, o, se, {
                hover: !0
            }), y.drag && m.forEach((function(e, t) {
                if (!1 !== e && 0 !== t && t !== m.length - 1) {
                    var i = p[t - 1],
                        r = p[t],
                        n = [e],
                        a = [i, r],
                        o = [t - 1, t];
                    u(e, s.cssClasses.draggable), y.fixed && (n.push(i.children[0]), n.push(r.children[0])), y.dragAll && (a = p, o = M), n.forEach((function(t) {
                        U(w.start, t, ee, {
                            handles: a,
                            handleNumbers: o,
                            connect: e
                        })
                    }))
                }
            })), fe(s.start), s.pips && X(s.pips), s.tooltips && W(), re("update" + _.aria), ie("update" + _.aria, (function(e, t, i, r, n) {
                M.forEach((function(e) {
                    var t = p[e],
                        r = ae(C, e, 0, !0, !0, !0),
                        a = ae(C, e, 100, !0, !0, !0),
                        o = n[e],
                        l = String(s.ariaFormat.to(i[e]));
                    r = S.fromStepping(r).toFixed(1), a = S.fromStepping(a).toFixed(1), o = S.fromStepping(o).toFixed(1), t.children[0].setAttribute("aria-valuemin", r), t.children[0].setAttribute("aria-valuemax", a), t.children[0].setAttribute("aria-valuenow", o), t.children[0].setAttribute("aria-valuetext", l)
                }))
            }));
        var ve = {
            destroy: function() {
                for (re(_.aria), re(_.tooltips), Object.keys(s.cssClasses).forEach((function(e) {
                        h(x, s.cssClasses[e])
                    })); x.firstChild;) x.removeChild(x.firstChild);
                delete x.noUiSlider
            },
            steps: function() {
                return M.map(ge)
            },
            on: ie,
            off: re,
            get: me,
            set: fe,
            setHandle: function(e, t, s, i) {
                if (!((e = Number(e)) >= 0 && e < M.length)) throw new Error("noUiSlider: invalid handle number, got: " + e);
                pe(e, he(t, e), !0, !0, i), ne("update", e), s && ne("set", e)
            },
            reset: function(e) {
                fe(s.start, e)
            },
            disable: function(e) {
                null != e ? (p[e].setAttribute("disabled", ""), p[e].handle.removeAttribute("tabindex")) : (x.setAttribute("disabled", ""), p.forEach((function(e) {
                    e.handle.removeAttribute("tabindex")
                })))
            },
            enable: function(e) {
                null != e ? (p[e].removeAttribute("disabled"), p[e].handle.setAttribute("tabindex", "0")) : (x.removeAttribute("disabled"), p.forEach((function(e) {
                    e.removeAttribute("disabled"), e.handle.setAttribute("tabindex", "0")
                })))
            },
            __moveHandles: function(e, t, s) {
                le(e, t, C, s)
            },
            options: i,
            updateOptions: function(e, t) {
                var r = me(),
                    a = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
                a.forEach((function(t) {
                    void 0 !== e[t] && (i[t] = e[t])
                }));
                var o = G(i);
                a.forEach((function(t) {
                    void 0 !== e[t] && (s[t] = o[t])
                })), S = o.spectrum, s.margin = o.margin, s.limit = o.limit, s.padding = o.padding, s.pips ? X(s.pips) : q(), s.tooltips ? W() : V(), C = [], fe(n(e.start) ? e.start : r, t)
            },
            target: x,
            removePips: q,
            removeTooltips: V,
            getPositions: function() {
                return C.slice()
            },
            getTooltips: function() {
                return v
            },
            getOrigins: function() {
                return p
            },
            pips: X
        };
        return ve
    }

    function K(e, t) {
        if (!e || !e.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + e);
        if (e.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
        var s = U(e, G(t), t);
        return e.noUiSlider = s, s
    }
    var Q = {
        __spectrum: w,
        cssClasses: x,
        create: K
    };
    e.create = K, e.cssClasses = x, e.default = Q, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}));
var SimpleBar = function() {
        "use strict";
        var e = function(t, s) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
            }, e(t, s)
        };
        var t = !("undefined" == typeof window || !window.document || !window.document.createElement),
            s = "object" == typeof global && global && global.Object === Object && global,
            i = "object" == typeof self && self && self.Object === Object && self,
            r = s || i || Function("return this")(),
            n = r.Symbol,
            a = Object.prototype,
            o = a.hasOwnProperty,
            l = a.toString,
            c = n ? n.toStringTag : void 0;
        var d = Object.prototype.toString;
        var p = "[object Null]",
            u = "[object Undefined]",
            h = n ? n.toStringTag : void 0;

        function f(e) {
            return null == e ? void 0 === e ? u : p : h && h in Object(e) ? function(e) {
                var t = o.call(e, c),
                    s = e[c];
                try {
                    e[c] = void 0;
                    var i = !0
                } catch (e) {}
                var r = l.call(e);
                return i && (t ? e[c] = s : delete e[c]), r
            }(e) : function(e) {
                return d.call(e)
            }(e)
        }
        var m = "[object Symbol]";
        var g = /\s/;
        var v = /^\s+/;

        function b(e) {
            return e ? e.slice(0, function(e) {
                for (var t = e.length; t-- && g.test(e.charAt(t)););
                return t
            }(e) + 1).replace(v, "") : e
        }

        function y(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
        var w = NaN,
            E = /^[-+]0x[0-9a-f]+$/i,
            x = /^0b[01]+$/i,
            _ = /^0o[0-7]+$/i,
            S = parseInt;

        function T(e) {
            if ("number" == typeof e) return e;
            if (function(e) {
                    return "symbol" == typeof e || function(e) {
                        return null != e && "object" == typeof e
                    }(e) && f(e) == m
                }(e)) return w;
            if (y(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = y(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = b(e);
            var s = x.test(e);
            return s || _.test(e) ? S(e.slice(2), s ? 2 : 8) : E.test(e) ? w : +e
        }
        var C = function() {
                return r.Date.now()
            },
            M = "Expected a function",
            A = Math.max,
            O = Math.min;

        function k(e, t, s) {
            var i, r, n, a, o, l, c = 0,
                d = !1,
                p = !1,
                u = !0;
            if ("function" != typeof e) throw new TypeError(M);

            function h(t) {
                var s = i,
                    n = r;
                return i = r = void 0, c = t, a = e.apply(n, s)
            }

            function f(e) {
                var s = e - l;
                return void 0 === l || s >= t || s < 0 || p && e - c >= n
            }

            function m() {
                var e = C();
                if (f(e)) return g(e);
                o = setTimeout(m, function(e) {
                    var s = t - (e - l);
                    return p ? O(s, n - (e - c)) : s
                }(e))
            }

            function g(e) {
                return o = void 0, u && i ? h(e) : (i = r = void 0, a)
            }

            function v() {
                var e = C(),
                    s = f(e);
                if (i = arguments, r = this, l = e, s) {
                    if (void 0 === o) return function(e) {
                        return c = e, o = setTimeout(m, t), d ? h(e) : a
                    }(l);
                    if (p) return clearTimeout(o), o = setTimeout(m, t), h(l)
                }
                return void 0 === o && (o = setTimeout(m, t)), a
            }
            return t = T(t) || 0, y(s) && (d = !!s.leading, n = (p = "maxWait" in s) ? A(T(s.maxWait) || 0, t) : n, u = "trailing" in s ? !!s.trailing : u), v.cancel = function() {
                void 0 !== o && clearTimeout(o), c = 0, i = l = r = o = void 0
            }, v.flush = function() {
                return void 0 === o ? a : g(C())
            }, v
        }
        var L = function() {
                return L = Object.assign || function(e) {
                    for (var t, s = 1, i = arguments.length; s < i; s++)
                        for (var r in t = arguments[s]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }, L.apply(this, arguments)
            },
            P = null,
            D = null;

        function $() {
            if (null === P) {
                if ("undefined" == typeof document) return P = 0;
                var e = document.body,
                    t = document.createElement("div");
                t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
                var s = t.getBoundingClientRect().right;
                e.removeChild(t), P = s
            }
            return P
        }

        function I(e) {
            return e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window
        }

        function N(e) {
            return e && e.ownerDocument ? e.ownerDocument : document
        }
        t && window.addEventListener("resize", (function() {
            D !== window.devicePixelRatio && (D = window.devicePixelRatio, P = null)
        }));
        var z = function(e) {
            return Array.prototype.reduce.call(e, (function(e, t) {
                var s = t.name.match(/data-simplebar-(.+)/);
                if (s) {
                    var i = s[1].replace(/\W+(.)/g, (function(e, t) {
                        return t.toUpperCase()
                    }));
                    switch (t.value) {
                        case "true":
                            e[i] = !0;
                            break;
                        case "false":
                            e[i] = !1;
                            break;
                        case void 0:
                            e[i] = !0;
                            break;
                        default:
                            e[i] = t.value
                    }
                }
                return e
            }), {})
        };

        function j(e, t) {
            var s;
            e && (s = e.classList).add.apply(s, t.split(" "))
        }

        function H(e, t) {
            e && t.split(" ").forEach((function(t) {
                e.classList.remove(t)
            }))
        }

        function V(e) {
            return ".".concat(e.split(" ").join("."))
        }
        var W = Object.freeze({
                __proto__: null,
                getElementWindow: I,
                getElementDocument: N,
                getOptions: z,
                addClasses: j,
                removeClasses: H,
                classNamesToQuery: V
            }),
            R = I,
            B = N,
            F = z,
            q = j,
            X = H,
            Y = V,
            G = function() {
                function e(t, s) {
                    void 0 === s && (s = {});
                    var i = this;
                    if (this.removePreventClickId = null, this.minScrollbarWidth = 20, this.stopScrollDelay = 175, this.isScrolling = !1, this.isMouseEntering = !1, this.scrollXTicking = !1, this.scrollYTicking = !1, this.wrapperEl = null, this.contentWrapperEl = null, this.contentEl = null, this.offsetEl = null, this.maskEl = null, this.placeholderEl = null, this.heightAutoObserverWrapperEl = null, this.heightAutoObserverEl = null, this.rtlHelpers = null, this.scrollbarWidth = 0, this.resizeObserver = null, this.mutationObserver = null, this.elStyles = null, this.isRtl = null, this.mouseX = 0, this.mouseY = 0, this.onMouseMove = function() {}, this.onWindowResize = function() {}, this.onStopScrolling = function() {}, this.onMouseEntered = function() {}, this.onScroll = function() {
                            var e = R(i.el);
                            i.scrollXTicking || (e.requestAnimationFrame(i.scrollX), i.scrollXTicking = !0), i.scrollYTicking || (e.requestAnimationFrame(i.scrollY), i.scrollYTicking = !0), i.isScrolling || (i.isScrolling = !0, q(i.el, i.classNames.scrolling)), i.showScrollbar("x"), i.showScrollbar("y"), i.onStopScrolling()
                        }, this.scrollX = function() {
                            i.axis.x.isOverflowing && i.positionScrollbar("x"), i.scrollXTicking = !1
                        }, this.scrollY = function() {
                            i.axis.y.isOverflowing && i.positionScrollbar("y"), i.scrollYTicking = !1
                        }, this._onStopScrolling = function() {
                            X(i.el, i.classNames.scrolling), i.options.autoHide && (i.hideScrollbar("x"), i.hideScrollbar("y")), i.isScrolling = !1
                        }, this.onMouseEnter = function() {
                            i.isMouseEntering || (q(i.el, i.classNames.mouseEntered), i.showScrollbar("x"), i.showScrollbar("y"), i.isMouseEntering = !0), i.onMouseEntered()
                        }, this._onMouseEntered = function() {
                            X(i.el, i.classNames.mouseEntered), i.options.autoHide && (i.hideScrollbar("x"), i.hideScrollbar("y")), i.isMouseEntering = !1
                        }, this._onMouseMove = function(e) {
                            i.mouseX = e.clientX, i.mouseY = e.clientY, (i.axis.x.isOverflowing || i.axis.x.forceVisible) && i.onMouseMoveForAxis("x"), (i.axis.y.isOverflowing || i.axis.y.forceVisible) && i.onMouseMoveForAxis("y")
                        }, this.onMouseLeave = function() {
                            i.onMouseMove.cancel(), (i.axis.x.isOverflowing || i.axis.x.forceVisible) && i.onMouseLeaveForAxis("x"), (i.axis.y.isOverflowing || i.axis.y.forceVisible) && i.onMouseLeaveForAxis("y"), i.mouseX = -1, i.mouseY = -1
                        }, this._onWindowResize = function() {
                            i.scrollbarWidth = i.getScrollbarWidth(), i.hideNativeScrollbar()
                        }, this.onPointerEvent = function(e) {
                            var t, s;
                            i.axis.x.track.el && i.axis.y.track.el && i.axis.x.scrollbar.el && i.axis.y.scrollbar.el && (i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect(), i.axis.y.track.rect = i.axis.y.track.el.getBoundingClientRect(), (i.axis.x.isOverflowing || i.axis.x.forceVisible) && (t = i.isWithinBounds(i.axis.x.track.rect)), (i.axis.y.isOverflowing || i.axis.y.forceVisible) && (s = i.isWithinBounds(i.axis.y.track.rect)), (t || s) && (e.stopPropagation(), "pointerdown" === e.type && "touch" !== e.pointerType && (t && (i.axis.x.scrollbar.rect = i.axis.x.scrollbar.el.getBoundingClientRect(), i.isWithinBounds(i.axis.x.scrollbar.rect) ? i.onDragStart(e, "x") : i.onTrackClick(e, "x")), s && (i.axis.y.scrollbar.rect = i.axis.y.scrollbar.el.getBoundingClientRect(), i.isWithinBounds(i.axis.y.scrollbar.rect) ? i.onDragStart(e, "y") : i.onTrackClick(e, "y")))))
                        }, this.drag = function(t) {
                            var s, r, n, a, o, l, c, d, p, u, h;
                            if (i.draggedAxis && i.contentWrapperEl) {
                                var f = i.axis[i.draggedAxis].track,
                                    m = null !== (r = null === (s = f.rect) || void 0 === s ? void 0 : s[i.axis[i.draggedAxis].sizeAttr]) && void 0 !== r ? r : 0,
                                    g = i.axis[i.draggedAxis].scrollbar,
                                    v = null !== (a = null === (n = i.contentWrapperEl) || void 0 === n ? void 0 : n[i.axis[i.draggedAxis].scrollSizeAttr]) && void 0 !== a ? a : 0,
                                    b = parseInt(null !== (l = null === (o = i.elStyles) || void 0 === o ? void 0 : o[i.axis[i.draggedAxis].sizeAttr]) && void 0 !== l ? l : "0px", 10);
                                t.preventDefault(), t.stopPropagation();
                                var y = ("y" === i.draggedAxis ? t.pageY : t.pageX) - (null !== (d = null === (c = f.rect) || void 0 === c ? void 0 : c[i.axis[i.draggedAxis].offsetAttr]) && void 0 !== d ? d : 0) - i.axis[i.draggedAxis].dragOffset,
                                    w = (y = "x" === i.draggedAxis && i.isRtl ? (null !== (u = null === (p = f.rect) || void 0 === p ? void 0 : p[i.axis[i.draggedAxis].sizeAttr]) && void 0 !== u ? u : 0) - g.size - y : y) / (m - g.size) * (v - b);
                                "x" === i.draggedAxis && i.isRtl && (w = (null === (h = e.getRtlHelpers()) || void 0 === h ? void 0 : h.isScrollingToNegative) ? -w : w), i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr] = w
                            }
                        }, this.onEndDrag = function(e) {
                            var t = B(i.el),
                                s = R(i.el);
                            e.preventDefault(), e.stopPropagation(), X(i.el, i.classNames.dragging), t.removeEventListener("mousemove", i.drag, !0), t.removeEventListener("mouseup", i.onEndDrag, !0), i.removePreventClickId = s.setTimeout((function() {
                                t.removeEventListener("click", i.preventClick, !0), t.removeEventListener("dblclick", i.preventClick, !0), i.removePreventClickId = null
                            }))
                        }, this.preventClick = function(e) {
                            e.preventDefault(), e.stopPropagation()
                        }, this.el = t, this.options = L(L({}, e.defaultOptions), s), this.classNames = L(L({}, e.defaultOptions.classNames), s.classNames), this.axis = {
                            x: {
                                scrollOffsetAttr: "scrollLeft",
                                sizeAttr: "width",
                                scrollSizeAttr: "scrollWidth",
                                offsetSizeAttr: "offsetWidth",
                                offsetAttr: "left",
                                overflowAttr: "overflowX",
                                dragOffset: 0,
                                isOverflowing: !0,
                                forceVisible: !1,
                                track: {
                                    size: null,
                                    el: null,
                                    rect: null,
                                    isVisible: !1
                                },
                                scrollbar: {
                                    size: null,
                                    el: null,
                                    rect: null,
                                    isVisible: !1
                                }
                            },
                            y: {
                                scrollOffsetAttr: "scrollTop",
                                sizeAttr: "height",
                                scrollSizeAttr: "scrollHeight",
                                offsetSizeAttr: "offsetHeight",
                                offsetAttr: "top",
                                overflowAttr: "overflowY",
                                dragOffset: 0,
                                isOverflowing: !0,
                                forceVisible: !1,
                                track: {
                                    size: null,
                                    el: null,
                                    rect: null,
                                    isVisible: !1
                                },
                                scrollbar: {
                                    size: null,
                                    el: null,
                                    rect: null,
                                    isVisible: !1
                                }
                            }
                        }, "object" != typeof this.el || !this.el.nodeName) throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
                    this.onMouseMove = function(e, t, s) {
                        var i = !0,
                            r = !0;
                        if ("function" != typeof e) throw new TypeError("Expected a function");
                        return y(s) && (i = "leading" in s ? !!s.leading : i, r = "trailing" in s ? !!s.trailing : r), k(e, t, {
                            leading: i,
                            maxWait: t,
                            trailing: r
                        })
                    }(this._onMouseMove, 64), this.onWindowResize = k(this._onWindowResize, 64, {
                        leading: !0
                    }), this.onStopScrolling = k(this._onStopScrolling, this.stopScrollDelay), this.onMouseEntered = k(this._onMouseEntered, this.stopScrollDelay), this.init()
                }
                return e.getRtlHelpers = function() {
                    if (e.rtlHelpers) return e.rtlHelpers;
                    var t = document.createElement("div");
                    t.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
                    var s = t.firstElementChild,
                        i = null == s ? void 0 : s.firstElementChild;
                    if (!i) return null;
                    document.body.appendChild(s), s.scrollLeft = 0;
                    var r = e.getOffset(s),
                        n = e.getOffset(i);
                    s.scrollLeft = -999;
                    var a = e.getOffset(i);
                    return document.body.removeChild(s), e.rtlHelpers = {
                        isScrollOriginAtZero: r.left !== n.left,
                        isScrollingToNegative: n.left !== a.left
                    }, e.rtlHelpers
                }, e.prototype.getScrollbarWidth = function() {
                    try {
                        return this.contentWrapperEl && "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : $()
                    } catch (e) {
                        return $()
                    }
                }, e.getOffset = function(e) {
                    var t = e.getBoundingClientRect(),
                        s = B(e),
                        i = R(e);
                    return {
                        top: t.top + (i.pageYOffset || s.documentElement.scrollTop),
                        left: t.left + (i.pageXOffset || s.documentElement.scrollLeft)
                    }
                }, e.prototype.init = function() {
                    t && (this.initDOM(), this.rtlHelpers = e.getRtlHelpers(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners())
                }, e.prototype.initDOM = function() {
                    var e, t;
                    this.wrapperEl = this.el.querySelector(Y(this.classNames.wrapper)), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(Y(this.classNames.contentWrapper)), this.contentEl = this.options.contentNode || this.el.querySelector(Y(this.classNames.contentEl)), this.offsetEl = this.el.querySelector(Y(this.classNames.offset)), this.maskEl = this.el.querySelector(Y(this.classNames.mask)), this.placeholderEl = this.findChild(this.wrapperEl, Y(this.classNames.placeholder)), this.heightAutoObserverWrapperEl = this.el.querySelector(Y(this.classNames.heightAutoObserverWrapperEl)), this.heightAutoObserverEl = this.el.querySelector(Y(this.classNames.heightAutoObserverEl)), this.axis.x.track.el = this.findChild(this.el, "".concat(Y(this.classNames.track)).concat(Y(this.classNames.horizontal))), this.axis.y.track.el = this.findChild(this.el, "".concat(Y(this.classNames.track)).concat(Y(this.classNames.vertical))), this.axis.x.scrollbar.el = (null === (e = this.axis.x.track.el) || void 0 === e ? void 0 : e.querySelector(Y(this.classNames.scrollbar))) || null, this.axis.y.scrollbar.el = (null === (t = this.axis.y.track.el) || void 0 === t ? void 0 : t.querySelector(Y(this.classNames.scrollbar))) || null, this.options.autoHide || (q(this.axis.x.scrollbar.el, this.classNames.visible), q(this.axis.y.scrollbar.el, this.classNames.visible))
                }, e.prototype.initListeners = function() {
                    var e, t = this,
                        s = R(this.el);
                    if (this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("pointerdown", this.onPointerEvent, !0), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), null === (e = this.contentWrapperEl) || void 0 === e || e.addEventListener("scroll", this.onScroll), s.addEventListener("resize", this.onWindowResize), this.contentEl) {
                        if (window.ResizeObserver) {
                            var i = !1,
                                r = s.ResizeObserver || ResizeObserver;
                            this.resizeObserver = new r((function() {
                                i && s.requestAnimationFrame((function() {
                                    t.recalculate()
                                }))
                            })), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), s.requestAnimationFrame((function() {
                                i = !0
                            }))
                        }
                        this.mutationObserver = new s.MutationObserver((function() {
                            s.requestAnimationFrame((function() {
                                t.recalculate()
                            }))
                        })), this.mutationObserver.observe(this.contentEl, {
                            childList: !0,
                            subtree: !0,
                            characterData: !0
                        })
                    }
                }, e.prototype.recalculate = function() {
                    if (this.heightAutoObserverEl && this.contentEl && this.contentWrapperEl && this.wrapperEl && this.placeholderEl) {
                        var e = R(this.el);
                        this.elStyles = e.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction;
                        var t = this.contentEl.offsetWidth,
                            s = this.heightAutoObserverEl.offsetHeight <= 1,
                            i = this.heightAutoObserverEl.offsetWidth <= 1 || t > 0,
                            r = this.contentWrapperEl.offsetWidth,
                            n = this.elStyles.overflowX,
                            a = this.elStyles.overflowY;
                        this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft), this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
                        var o = this.contentEl.scrollHeight,
                            l = this.contentEl.scrollWidth;
                        this.contentWrapperEl.style.height = s ? "auto" : "100%", this.placeholderEl.style.width = i ? "".concat(t || l, "px") : "auto", this.placeholderEl.style.height = "".concat(o, "px");
                        var c = this.contentWrapperEl.offsetHeight;
                        this.axis.x.isOverflowing = 0 !== t && l > t, this.axis.y.isOverflowing = o > c, this.axis.x.isOverflowing = "hidden" !== n && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== a && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar();
                        var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                            p = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
                        this.axis.x.isOverflowing = this.axis.x.isOverflowing && l > r - p, this.axis.y.isOverflowing = this.axis.y.isOverflowing && o > c - d, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el && (this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px")), this.axis.y.scrollbar.el && (this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px")), this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y")
                    }
                }, e.prototype.getScrollbarSize = function(e) {
                    var t, s;
                    if (void 0 === e && (e = "y"), !this.axis[e].isOverflowing || !this.contentEl) return 0;
                    var i, r = this.contentEl[this.axis[e].scrollSizeAttr],
                        n = null !== (s = null === (t = this.axis[e].track.el) || void 0 === t ? void 0 : t[this.axis[e].offsetSizeAttr]) && void 0 !== s ? s : 0,
                        a = n / r;
                    return i = Math.max(~~(a * n), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (i = Math.min(i, this.options.scrollbarMaxSize)), i
                }, e.prototype.positionScrollbar = function(t) {
                    var s, i, r;
                    void 0 === t && (t = "y");
                    var n = this.axis[t].scrollbar;
                    if (this.axis[t].isOverflowing && this.contentWrapperEl && n.el && this.elStyles) {
                        var a = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                            o = (null === (s = this.axis[t].track.el) || void 0 === s ? void 0 : s[this.axis[t].offsetSizeAttr]) || 0,
                            l = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                            c = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
                        c = "x" === t && this.isRtl && (null === (i = e.getRtlHelpers()) || void 0 === i ? void 0 : i.isScrollOriginAtZero) ? -c : c, "x" === t && this.isRtl && (c = (null === (r = e.getRtlHelpers()) || void 0 === r ? void 0 : r.isScrollingToNegative) ? c : -c);
                        var d = c / (a - l),
                            p = ~~((o - n.size) * d);
                        p = "x" === t && this.isRtl ? -p + (o - n.size) : p, n.el.style.transform = "x" === t ? "translate3d(".concat(p, "px, 0, 0)") : "translate3d(0, ".concat(p, "px, 0)")
                    }
                }, e.prototype.toggleTrackVisibility = function(e) {
                    void 0 === e && (e = "y");
                    var t = this.axis[e].track.el,
                        s = this.axis[e].scrollbar.el;
                    t && s && this.contentWrapperEl && (this.axis[e].isOverflowing || this.axis[e].forceVisible ? (t.style.visibility = "visible", this.contentWrapperEl.style[this.axis[e].overflowAttr] = "scroll", this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(e))) : (t.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[e].overflowAttr] = "hidden", this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(e))), this.axis[e].isOverflowing ? s.style.display = "block" : s.style.display = "none")
                }, e.prototype.showScrollbar = function(e) {
                    void 0 === e && (e = "y"), this.axis[e].isOverflowing && !this.axis[e].scrollbar.isVisible && (q(this.axis[e].scrollbar.el, this.classNames.visible), this.axis[e].scrollbar.isVisible = !0)
                }, e.prototype.hideScrollbar = function(e) {
                    void 0 === e && (e = "y"), this.axis[e].isOverflowing && this.axis[e].scrollbar.isVisible && (X(this.axis[e].scrollbar.el, this.classNames.visible), this.axis[e].scrollbar.isVisible = !1)
                }, e.prototype.hideNativeScrollbar = function() {
                    this.offsetEl && (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px", this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px")
                }, e.prototype.onMouseMoveForAxis = function(e) {
                    void 0 === e && (e = "y");
                    var t = this.axis[e];
                    t.track.el && t.scrollbar.el && (t.track.rect = t.track.el.getBoundingClientRect(), t.scrollbar.rect = t.scrollbar.el.getBoundingClientRect(), this.isWithinBounds(t.track.rect) ? (this.showScrollbar(e), q(t.track.el, this.classNames.hover), this.isWithinBounds(t.scrollbar.rect) ? q(t.scrollbar.el, this.classNames.hover) : X(t.scrollbar.el, this.classNames.hover)) : (X(t.track.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(e)))
                }, e.prototype.onMouseLeaveForAxis = function(e) {
                    void 0 === e && (e = "y"), X(this.axis[e].track.el, this.classNames.hover), X(this.axis[e].scrollbar.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(e)
                }, e.prototype.onDragStart = function(e, t) {
                    var s;
                    void 0 === t && (t = "y");
                    var i = B(this.el),
                        r = R(this.el),
                        n = this.axis[t].scrollbar,
                        a = "y" === t ? e.pageY : e.pageX;
                    this.axis[t].dragOffset = a - ((null === (s = n.rect) || void 0 === s ? void 0 : s[this.axis[t].offsetAttr]) || 0), this.draggedAxis = t, q(this.el, this.classNames.dragging), i.addEventListener("mousemove", this.drag, !0), i.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (i.addEventListener("click", this.preventClick, !0), i.addEventListener("dblclick", this.preventClick, !0)) : (r.clearTimeout(this.removePreventClickId), this.removePreventClickId = null)
                }, e.prototype.onTrackClick = function(e, t) {
                    var s, i, r, n, a = this;
                    void 0 === t && (t = "y");
                    var o = this.axis[t];
                    if (this.options.clickOnTrack && o.scrollbar.el && this.contentWrapperEl) {
                        e.preventDefault();
                        var l = R(this.el);
                        this.axis[t].scrollbar.rect = o.scrollbar.el.getBoundingClientRect();
                        var c = null !== (i = null === (s = this.axis[t].scrollbar.rect) || void 0 === s ? void 0 : s[this.axis[t].offsetAttr]) && void 0 !== i ? i : 0,
                            d = parseInt(null !== (n = null === (r = this.elStyles) || void 0 === r ? void 0 : r[this.axis[t].sizeAttr]) && void 0 !== n ? n : "0px", 10),
                            p = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                            u = ("y" === t ? this.mouseY - c : this.mouseX - c) < 0 ? -1 : 1,
                            h = -1 === u ? p - d : p + d,
                            f = function() {
                                a.contentWrapperEl && (-1 === u ? p > h && (p -= 40, a.contentWrapperEl[a.axis[t].scrollOffsetAttr] = p, l.requestAnimationFrame(f)) : p < h && (p += 40, a.contentWrapperEl[a.axis[t].scrollOffsetAttr] = p, l.requestAnimationFrame(f)))
                            };
                        f()
                    }
                }, e.prototype.getContentElement = function() {
                    return this.contentEl
                }, e.prototype.getScrollElement = function() {
                    return this.contentWrapperEl
                }, e.prototype.removeListeners = function() {
                    var e = R(this.el);
                    this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("pointerdown", this.onPointerEvent, !0), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.onMouseMove.cancel(), this.onWindowResize.cancel(), this.onStopScrolling.cancel(), this.onMouseEntered.cancel()
                }, e.prototype.unMount = function() {
                    this.removeListeners()
                }, e.prototype.isWithinBounds = function(e) {
                    return this.mouseX >= e.left && this.mouseX <= e.left + e.width && this.mouseY >= e.top && this.mouseY <= e.top + e.height
                }, e.prototype.findChild = function(e, t) {
                    var s = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
                    return Array.prototype.filter.call(e.children, (function(e) {
                        return s.call(e, t)
                    }))[0]
                }, e.rtlHelpers = null, e.defaultOptions = {
                    forceVisible: !1,
                    clickOnTrack: !0,
                    scrollbarMinSize: 25,
                    scrollbarMaxSize: 0,
                    ariaLabel: "scrollable content",
                    classNames: {
                        contentEl: "simplebar-content",
                        contentWrapper: "simplebar-content-wrapper",
                        offset: "simplebar-offset",
                        mask: "simplebar-mask",
                        wrapper: "simplebar-wrapper",
                        placeholder: "simplebar-placeholder",
                        scrollbar: "simplebar-scrollbar",
                        track: "simplebar-track",
                        heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
                        heightAutoObserverEl: "simplebar-height-auto-observer",
                        visible: "simplebar-visible",
                        horizontal: "simplebar-horizontal",
                        vertical: "simplebar-vertical",
                        hover: "simplebar-hover",
                        dragging: "simplebar-dragging",
                        scrolling: "simplebar-scrolling",
                        scrollable: "simplebar-scrollable",
                        mouseEntered: "simplebar-mouse-entered"
                    },
                    scrollableNode: null,
                    contentNode: null,
                    autoHide: !0
                }, e.getOptions = F, e.helpers = W, e
            }(),
            U = G.helpers,
            K = U.getOptions,
            Q = U.addClasses,
            Z = function(t) {
                function s() {
                    for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                    var r = t.apply(this, e) || this;
                    return s.instances.set(e[0], r), r
                }
                return function(t, s) {
                    if ("function" != typeof s && null !== s) throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");

                    function i() {
                        this.constructor = t
                    }
                    e(t, s), t.prototype = null === s ? Object.create(s) : (i.prototype = s.prototype, new i)
                }(s, t), s.initDOMLoadedElements = function() {
                    document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), (function(e) {
                        "init" === e.getAttribute("data-simplebar") || s.instances.has(e) || new s(e, K(e.attributes))
                    }))
                }, s.removeObserver = function() {
                    var e;
                    null === (e = s.globalObserver) || void 0 === e || e.disconnect()
                }, s.prototype.initDOM = function() {
                    var e, t, s, i = this;
                    if (!Array.prototype.filter.call(this.el.children, (function(e) {
                            return e.classList.contains(i.classNames.wrapper)
                        })).length) {
                        for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), Q(this.wrapperEl, this.classNames.wrapper), Q(this.contentWrapperEl, this.classNames.contentWrapper), Q(this.offsetEl, this.classNames.offset), Q(this.maskEl, this.classNames.mask), Q(this.contentEl, this.classNames.contentEl), Q(this.placeholderEl, this.classNames.placeholder), Q(this.heightAutoObserverWrapperEl, this.classNames.heightAutoObserverWrapperEl), Q(this.heightAutoObserverEl, this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                        this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl), null === (e = this.contentWrapperEl) || void 0 === e || e.setAttribute("tabindex", "0"), null === (t = this.contentWrapperEl) || void 0 === t || t.setAttribute("role", "region"), null === (s = this.contentWrapperEl) || void 0 === s || s.setAttribute("aria-label", this.options.ariaLabel)
                    }
                    if (!this.axis.x.track.el || !this.axis.y.track.el) {
                        var r = document.createElement("div"),
                            n = document.createElement("div");
                        Q(r, this.classNames.track), Q(n, this.classNames.scrollbar), r.appendChild(n), this.axis.x.track.el = r.cloneNode(!0), Q(this.axis.x.track.el, this.classNames.horizontal), this.axis.y.track.el = r.cloneNode(!0), Q(this.axis.y.track.el, this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el)
                    }
                    G.prototype.initDOM.call(this), this.el.setAttribute("data-simplebar", "init")
                }, s.prototype.unMount = function() {
                    G.prototype.unMount.call(this), s.instances.delete(this.el)
                }, s.initHtmlApi = function() {
                    this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(s.handleMutations), this.globalObserver.observe(document, {
                        childList: !0,
                        subtree: !0
                    })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
                }, s.handleMutations = function(e) {
                    e.forEach((function(e) {
                        e.addedNodes.forEach((function(e) {
                            1 === e.nodeType && (e.hasAttribute("data-simplebar") ? !s.instances.has(e) && document.documentElement.contains(e) && new s(e, K(e.attributes)) : e.querySelectorAll("[data-simplebar]").forEach((function(e) {
                                "init" !== e.getAttribute("data-simplebar") && !s.instances.has(e) && document.documentElement.contains(e) && new s(e, K(e.attributes))
                            })))
                        })), e.removedNodes.forEach((function(e) {
                            1 === e.nodeType && ("init" === e.getAttribute("data-simplebar") ? s.instances.has(e) && !document.documentElement.contains(e) && s.instances.get(e).unMount() : Array.prototype.forEach.call(e.querySelectorAll('[data-simplebar="init"]'), (function(e) {
                                s.instances.has(e) && !document.documentElement.contains(e) && s.instances.get(e).unMount()
                            })))
                        }))
                    }))
                }, s.instances = new WeakMap, s
            }(G);
        return t && Z.initHtmlApi(), Z
    }(),
    Swiper = function() {
        "use strict";

        function e(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
        }

        function t(s, i) {
            void 0 === s && (s = {}), void 0 === i && (i = {}), Object.keys(i).forEach((r => {
                void 0 === s[r] ? s[r] = i[r] : e(i[r]) && e(s[r]) && Object.keys(i[r]).length > 0 && t(s[r], i[r])
            }))
        }
        const s = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({
                initEvent() {}
            }),
            createElement: () => ({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName: () => []
            }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };

        function i() {
            const e = "undefined" != typeof document ? document : {};
            return t(e, s), e
        }
        const r = {
            document: s,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function() {
                return this
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle: () => ({
                getPropertyValue: () => ""
            }),
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia: () => ({}),
            requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };

        function n() {
            const e = "undefined" != typeof window ? window : {};
            return t(e, r), e
        }

        function a(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }

        function o() {
            return Date.now()
        }

        function l(e, t) {
            void 0 === t && (t = "x");
            const s = n();
            let i, r, a;
            const o = function(e) {
                const t = n();
                let s;
                return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
            }(e);
            return s.WebKitCSSMatrix ? (r = o.transform || o.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((e => e.replace(",", "."))).join(", ")), a = new s.WebKitCSSMatrix("none" === r ? "" : r)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), "x" === t && (r = s.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (r = s.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0
        }

        function c(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function d() {
            const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                t = ["__proto__", "constructor", "prototype"];
            for (let i = 1; i < arguments.length; i += 1) {
                const r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (null != r && (s = r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                    const s = Object.keys(Object(r)).filter((e => t.indexOf(e) < 0));
                    for (let t = 0, i = s.length; t < i; t += 1) {
                        const i = s[t],
                            n = Object.getOwnPropertyDescriptor(r, i);
                        void 0 !== n && n.enumerable && (c(e[i]) && c(r[i]) ? r[i].__swiper__ ? e[i] = r[i] : d(e[i], r[i]) : !c(e[i]) && c(r[i]) ? (e[i] = {}, r[i].__swiper__ ? e[i] = r[i] : d(e[i], r[i])) : e[i] = r[i])
                    }
                }
            }
            var s;
            return e
        }

        function p(e, t, s) {
            e.style.setProperty(t, s)
        }

        function u(e) {
            let {
                swiper: t,
                targetPosition: s,
                side: i
            } = e;
            const r = n(),
                a = -t.translate;
            let o, l = null;
            const c = t.params.speed;
            t.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(t.cssModeFrameID);
            const d = s > a ? "next" : "prev",
                p = (e, t) => "next" === d && e >= t || "prev" === d && e <= t,
                u = () => {
                    o = (new Date).getTime(), null === l && (l = o);
                    const e = Math.max(Math.min((o - l) / c, 1), 0),
                        n = .5 - Math.cos(e * Math.PI) / 2;
                    let d = a + n * (s - a);
                    if (p(d, s) && (d = s), t.wrapperEl.scrollTo({
                            [i]: d
                        }), p(d, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                        t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                            [i]: d
                        })
                    })), void r.cancelAnimationFrame(t.cssModeFrameID);
                    t.cssModeFrameID = r.requestAnimationFrame(u)
                };
            u()
        }

        function h(e) {
            return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
        }

        function f(e, t) {
            return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
        }

        function m(e, t) {
            void 0 === t && (t = []);
            const s = document.createElement(e);
            return s.classList.add(...Array.isArray(t) ? t : [t]), s
        }

        function g(e) {
            const t = n(),
                s = i(),
                r = e.getBoundingClientRect(),
                a = s.body,
                o = e.clientTop || a.clientTop || 0,
                l = e.clientLeft || a.clientLeft || 0,
                c = e === t ? t.scrollY : e.scrollTop,
                d = e === t ? t.scrollX : e.scrollLeft;
            return {
                top: r.top + c - o,
                left: r.left + d - l
            }
        }

        function v(e, t) {
            return n().getComputedStyle(e, null).getPropertyValue(t)
        }

        function b(e) {
            let t, s = e;
            if (s) {
                for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
                return t
            }
        }

        function y(e, t) {
            const s = [];
            let i = e.parentElement;
            for (; i;) t ? i.matches(t) && s.push(i) : s.push(i), i = i.parentElement;
            return s
        }

        function w(e, t) {
            t && e.addEventListener("transitionend", (function s(i) {
                i.target === e && (t.call(e, i), e.removeEventListener("transitionend", s))
            }))
        }

        function E(e, t, s) {
            const i = n();
            return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
        }
        let x, _, S;

        function T() {
            return x || (x = function() {
                const e = n(),
                    t = i();
                return {
                    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                }
            }()), x
        }

        function C(e) {
            return void 0 === e && (e = {}), _ || (_ = function(e) {
                let {
                    userAgent: t
                } = void 0 === e ? {} : e;
                const s = T(),
                    i = n(),
                    r = i.navigator.platform,
                    a = t || i.navigator.userAgent,
                    o = {
                        ios: !1,
                        android: !1
                    },
                    l = i.screen.width,
                    c = i.screen.height,
                    d = a.match(/(Android);?[\s\/]+([\d.]+)?/);
                let p = a.match(/(iPad).*OS\s([\d_]+)/);
                const u = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                    h = !p && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    f = "Win32" === r;
                let m = "MacIntel" === r;
                return !p && m && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${c}`) >= 0 && (p = a.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), m = !1), d && !f && (o.os = "android", o.android = !0), (p || h || u) && (o.os = "ios", o.ios = !0), o
            }(e)), _
        }

        function M() {
            return S || (S = function() {
                const e = n();
                let t = !1;

                function s() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }
                if (s()) {
                    const s = String(e.navigator.userAgent);
                    if (s.includes("Version/")) {
                        const [e, i] = s.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                        t = e < 16 || 16 === e && i < 2
                    }
                }
                return {
                    isSafari: t || s(),
                    needPerspectiveFix: t,
                    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                }
            }()), S
        }
        var A = {
            on(e, t, s) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof t) return i;
                const r = s ? "unshift" : "push";
                return e.split(" ").forEach((e => {
                    i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
                })), i
            },
            once(e, t, s) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof t) return i;

                function r() {
                    i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                    for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++) n[a] = arguments[a];
                    t.apply(i, n)
                }
                return r.__emitterProxy = t, i.on(e, r, s)
            },
            onAny(e, t) {
                const s = this;
                if (!s.eventsListeners || s.destroyed) return s;
                if ("function" != typeof e) return s;
                const i = t ? "unshift" : "push";
                return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
            },
            offAny(e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsAnyListeners) return t;
                const s = t.eventsAnyListeners.indexOf(e);
                return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
            },
            off(e, t) {
                const s = this;
                return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                    void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((i, r) => {
                        (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(r, 1)
                    }))
                })), s) : s
            },
            emit() {
                const e = this;
                if (!e.eventsListeners || e.destroyed) return e;
                if (!e.eventsListeners) return e;
                let t, s, i;
                for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], s = n.slice(1, n.length), i = e) : (t = n[0].events, s = n[0].data, i = n[0].context || e), s.unshift(i);
                return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                    e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                        e.apply(i, [t, ...s])
                    })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                        e.apply(i, s)
                    }))
                })), e
            }
        };
        const O = (e, t) => {
                if (!e || e.destroyed || !e.params) return;
                const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                if (s) {
                    let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
                    !t && e.isElement && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)), t && t.remove()
                }
            },
            k = (e, t) => {
                if (!e.slides[t]) return;
                const s = e.slides[t].querySelector('[loading="lazy"]');
                s && s.removeAttribute("loading")
            },
            L = e => {
                if (!e || e.destroyed || !e.params) return;
                let t = e.params.lazyPreloadPrevNext;
                const s = e.slides.length;
                if (!s || !t || t < 0) return;
                t = Math.min(t, s);
                const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                    r = e.activeIndex;
                if (e.params.grid && e.params.grid.rows > 1) {
                    const s = r,
                        n = [s - t];
                    return n.push(...Array.from({
                        length: t
                    }).map(((e, t) => s + i + t))), void e.slides.forEach(((t, s) => {
                        n.includes(t.column) && k(e, s)
                    }))
                }
                const n = r + i - 1;
                if (e.params.rewind || e.params.loop)
                    for (let i = r - t; i <= n + t; i += 1) {
                        const t = (i % s + s) % s;
                        (t < r || t > n) && k(e, t)
                    } else
                        for (let i = Math.max(r - t, 0); i <= Math.min(n + t, s - 1); i += 1) i !== r && (i > n || i < r) && k(e, i)
            };
        var P = {
            updateSize: function() {
                const e = this;
                let t, s;
                const i = e.el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(v(i, "padding-left") || 0, 10) - parseInt(v(i, "padding-right") || 0, 10), s = s - parseInt(v(i, "padding-top") || 0, 10) - parseInt(v(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                    width: t,
                    height: s,
                    size: e.isHorizontal() ? t : s
                }))
            },
            updateSlides: function() {
                const e = this;

                function t(t) {
                    return e.isHorizontal() ? t : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[t]
                }

                function s(e, s) {
                    return parseFloat(e.getPropertyValue(t(s)) || 0)
                }
                const i = e.params,
                    {
                        wrapperEl: r,
                        slidesEl: n,
                        size: a,
                        rtlTranslate: o,
                        wrongRTL: l
                    } = e,
                    c = e.virtual && i.virtual.enabled,
                    d = c ? e.virtual.slides.length : e.slides.length,
                    u = f(n, `.${e.params.slideClass}, swiper-slide`),
                    h = c ? e.virtual.slides.length : u.length;
                let m = [];
                const g = [],
                    b = [];
                let y = i.slidesOffsetBefore;
                "function" == typeof y && (y = i.slidesOffsetBefore.call(e));
                let w = i.slidesOffsetAfter;
                "function" == typeof w && (w = i.slidesOffsetAfter.call(e));
                const x = e.snapGrid.length,
                    _ = e.slidesGrid.length;
                let S = i.spaceBetween,
                    T = -y,
                    C = 0,
                    M = 0;
                if (void 0 === a) return;
                "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * a : "string" == typeof S && (S = parseFloat(S)), e.virtualSize = -S, u.forEach((e => {
                    o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                })), i.centeredSlides && i.cssMode && (p(r, "--swiper-centered-offset-before", ""), p(r, "--swiper-centered-offset-after", ""));
                const A = i.grid && i.grid.rows > 1 && e.grid;
                let O;
                A && e.grid.initSlides(h);
                const k = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter((e => void 0 !== i.breakpoints[e].slidesPerView)).length > 0;
                for (let r = 0; r < h; r += 1) {
                    let n;
                    if (O = 0, u[r] && (n = u[r]), A && e.grid.updateSlide(r, n, h, t), !u[r] || "none" !== v(n, "display")) {
                        if ("auto" === i.slidesPerView) {
                            k && (u[r].style[t("width")] = "");
                            const a = getComputedStyle(n),
                                o = n.style.transform,
                                l = n.style.webkitTransform;
                            if (o && (n.style.transform = "none"), l && (n.style.webkitTransform = "none"), i.roundLengths) O = e.isHorizontal() ? E(n, "width", !0) : E(n, "height", !0);
                            else {
                                const e = s(a, "width"),
                                    t = s(a, "padding-left"),
                                    i = s(a, "padding-right"),
                                    r = s(a, "margin-left"),
                                    o = s(a, "margin-right"),
                                    l = a.getPropertyValue("box-sizing");
                                if (l && "border-box" === l) O = e + r + o;
                                else {
                                    const {
                                        clientWidth: s,
                                        offsetWidth: a
                                    } = n;
                                    O = e + t + i + r + o + (a - s)
                                }
                            }
                            o && (n.style.transform = o), l && (n.style.webkitTransform = l), i.roundLengths && (O = Math.floor(O))
                        } else O = (a - (i.slidesPerView - 1) * S) / i.slidesPerView, i.roundLengths && (O = Math.floor(O)), u[r] && (u[r].style[t("width")] = `${O}px`);
                        u[r] && (u[r].swiperSlideSize = O), b.push(O), i.centeredSlides ? (T = T + O / 2 + C / 2 + S, 0 === C && 0 !== r && (T = T - a / 2 - S), 0 === r && (T = T - a / 2 - S), Math.abs(T) < .001 && (T = 0), i.roundLengths && (T = Math.floor(T)), M % i.slidesPerGroup == 0 && m.push(T), g.push(T)) : (i.roundLengths && (T = Math.floor(T)), (M - Math.min(e.params.slidesPerGroupSkip, M)) % e.params.slidesPerGroup == 0 && m.push(T), g.push(T), T = T + O + S), e.virtualSize += O + S, C = O, M += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, a) + w, o && l && ("slide" === i.effect || "coverflow" === i.effect) && (r.style.width = `${e.virtualSize+S}px`), i.setWrapperSize && (r.style[t("width")] = `${e.virtualSize+S}px`), A && e.grid.updateWrapperSize(O, m, t), !i.centeredSlides) {
                    const t = [];
                    for (let s = 0; s < m.length; s += 1) {
                        let r = m[s];
                        i.roundLengths && (r = Math.floor(r)), m[s] <= e.virtualSize - a && t.push(r)
                    }
                    m = t, Math.floor(e.virtualSize - a) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - a)
                }
                if (c && i.loop) {
                    const t = b[0] + S;
                    if (i.slidesPerGroup > 1) {
                        const s = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / i.slidesPerGroup),
                            r = t * i.slidesPerGroup;
                        for (let e = 0; e < s; e += 1) m.push(m[m.length - 1] + r)
                    }
                    for (let s = 0; s < e.virtual.slidesBefore + e.virtual.slidesAfter; s += 1) 1 === i.slidesPerGroup && m.push(m[m.length - 1] + t), g.push(g[g.length - 1] + t), e.virtualSize += t
                }
                if (0 === m.length && (m = [0]), 0 !== S) {
                    const s = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
                    u.filter(((e, t) => !(i.cssMode && !i.loop) || t !== u.length - 1)).forEach((e => {
                        e.style[s] = `${S}px`
                    }))
                }
                if (i.centeredSlides && i.centeredSlidesBounds) {
                    let e = 0;
                    b.forEach((t => {
                        e += t + (S || 0)
                    })), e -= S;
                    const t = e - a;
                    m = m.map((e => e <= 0 ? -y : e > t ? t + w : e))
                }
                if (i.centerInsufficientSlides) {
                    let e = 0;
                    if (b.forEach((t => {
                            e += t + (S || 0)
                        })), e -= S, e < a) {
                        const t = (a - e) / 2;
                        m.forEach(((e, s) => {
                            m[s] = e - t
                        })), g.forEach(((e, s) => {
                            g[s] = e + t
                        }))
                    }
                }
                if (Object.assign(e, {
                        slides: u,
                        snapGrid: m,
                        slidesGrid: g,
                        slidesSizesGrid: b
                    }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                    p(r, "--swiper-centered-offset-before", -m[0] + "px"), p(r, "--swiper-centered-offset-after", e.size / 2 - b[b.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0],
                        s = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
                }
                if (h !== d && e.emit("slidesLengthChange"), m.length !== x && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), g.length !== _ && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !(c || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
                    const t = `${i.containerModifierClass}backface-hidden`,
                        s = e.el.classList.contains(t);
                    h <= i.maxBackfaceHiddenSlides ? s || e.el.classList.add(t) : s && e.el.classList.remove(t)
                }
            },
            updateAutoHeight: function(e) {
                const t = this,
                    s = [],
                    i = t.virtual && t.params.virtual.enabled;
                let r, n = 0;
                "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const a = e => i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
                        s.push(e)
                    }));
                    else
                        for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                            const e = t.activeIndex + r;
                            if (e > t.slides.length && !i) break;
                            s.push(a(e))
                        } else s.push(a(t.activeIndex));
                for (r = 0; r < s.length; r += 1)
                    if (void 0 !== s[r]) {
                        const e = s[r].offsetHeight;
                        n = e > n ? e : n
                    }(n || 0 === n) && (t.wrapperEl.style.height = `${n}px`)
            },
            updateSlidesOffset: function() {
                const e = this,
                    t = e.slides,
                    s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
                for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment()
            },
            updateSlidesProgress: function(e) {
                void 0 === e && (e = this && this.translate || 0);
                const t = this,
                    s = t.params,
                    {
                        slides: i,
                        rtlTranslate: r,
                        snapGrid: n
                    } = t;
                if (0 === i.length) return;
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                let a = -e;
                r && (a = e), i.forEach((e => {
                    e.classList.remove(s.slideVisibleClass)
                })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                let o = s.spaceBetween;
                "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
                for (let e = 0; e < i.length; e += 1) {
                    const l = i[e];
                    let c = l.swiperSlideOffset;
                    s.cssMode && s.centeredSlides && (c -= i[0].swiperSlideOffset);
                    const d = (a + (s.centeredSlides ? t.minTranslate() : 0) - c) / (l.swiperSlideSize + o),
                        p = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - c) / (l.swiperSlideSize + o),
                        u = -(a - c),
                        h = u + t.slidesSizesGrid[e];
                    (u >= 0 && u < t.size - 1 || h > 1 && h <= t.size || u <= 0 && h >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), i[e].classList.add(s.slideVisibleClass)), l.progress = r ? -d : d, l.originalProgress = r ? -p : p
                }
            },
            updateProgress: function(e) {
                const t = this;
                if (void 0 === e) {
                    const s = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * s || 0
                }
                const s = t.params,
                    i = t.maxTranslate() - t.minTranslate();
                let {
                    progress: r,
                    isBeginning: n,
                    isEnd: a,
                    progressLoop: o
                } = t;
                const l = n,
                    c = a;
                if (0 === i) r = 0, n = !0, a = !0;
                else {
                    r = (e - t.minTranslate()) / i;
                    const s = Math.abs(e - t.minTranslate()) < 1,
                        o = Math.abs(e - t.maxTranslate()) < 1;
                    n = s || r <= 0, a = o || r >= 1, s && (r = 0), o && (r = 1)
                }
                if (s.loop) {
                    const s = t.getSlideIndexByData(0),
                        i = t.getSlideIndexByData(t.slides.length - 1),
                        r = t.slidesGrid[s],
                        n = t.slidesGrid[i],
                        a = t.slidesGrid[t.slidesGrid.length - 1],
                        l = Math.abs(e);
                    o = l >= r ? (l - r) / a : (l + a - n) / a, o > 1 && (o -= 1)
                }
                Object.assign(t, {
                    progress: r,
                    progressLoop: o,
                    isBeginning: n,
                    isEnd: a
                }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), a && !c && t.emit("reachEnd toEdge"), (l && !n || c && !a) && t.emit("fromEdge"), t.emit("progress", r)
            },
            updateSlidesClasses: function() {
                const e = this,
                    {
                        slides: t,
                        params: s,
                        slidesEl: i,
                        activeIndex: r
                    } = e,
                    n = e.virtual && s.virtual.enabled,
                    a = e => f(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
                let o;
                if (t.forEach((e => {
                        e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
                    })), n)
                    if (s.loop) {
                        let t = r - e.virtual.slidesBefore;
                        t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), o = a(`[data-swiper-slide-index="${t}"]`)
                    } else o = a(`[data-swiper-slide-index="${r}"]`);
                else o = t[r];
                if (o) {
                    o.classList.add(s.slideActiveClass);
                    let e = function(e, t) {
                        const s = [];
                        for (; e.nextElementSibling;) {
                            const i = e.nextElementSibling;
                            t ? i.matches(t) && s.push(i) : s.push(i), e = i
                        }
                        return s
                    }(o, `.${s.slideClass}, swiper-slide`)[0];
                    s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
                    let i = function(e, t) {
                        const s = [];
                        for (; e.previousElementSibling;) {
                            const i = e.previousElementSibling;
                            t ? i.matches(t) && s.push(i) : s.push(i), e = i
                        }
                        return s
                    }(o, `.${s.slideClass}, swiper-slide`)[0];
                    s.loop && 0 === !i && (i = t[t.length - 1]), i && i.classList.add(s.slidePrevClass)
                }
                e.emitSlidesClasses()
            },
            updateActiveIndex: function(e) {
                const t = this,
                    s = t.rtlTranslate ? t.translate : -t.translate,
                    {
                        snapGrid: i,
                        params: r,
                        activeIndex: n,
                        realIndex: a,
                        snapIndex: o
                    } = t;
                let l, c = e;
                const d = e => {
                    let s = e - t.virtual.slidesBefore;
                    return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s
                };
                if (void 0 === c && (c = function(e) {
                        const {
                            slidesGrid: t,
                            params: s
                        } = e, i = e.rtlTranslate ? e.translate : -e.translate;
                        let r;
                        for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? r = e : i >= t[e] && i < t[e + 1] && (r = e + 1) : i >= t[e] && (r = e);
                        return s.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r
                    }(t)), i.indexOf(s) >= 0) l = i.indexOf(s);
                else {
                    const e = Math.min(r.slidesPerGroupSkip, c);
                    l = e + Math.floor((c - e) / r.slidesPerGroup)
                }
                if (l >= i.length && (l = i.length - 1), c === n) return l !== o && (t.snapIndex = l, t.emit("snapIndexChange")), void(t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = d(c)));
                let p;
                p = t.virtual && r.virtual.enabled && r.loop ? d(c) : t.slides[c] ? parseInt(t.slides[c].getAttribute("data-swiper-slide-index") || c, 10) : c, Object.assign(t, {
                    previousSnapIndex: o,
                    snapIndex: l,
                    previousRealIndex: a,
                    realIndex: p,
                    previousIndex: n,
                    activeIndex: c
                }), t.initialized && L(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), a !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
            },
            updateClickedSlide: function(e) {
                const t = this,
                    s = t.params,
                    i = e.closest(`.${s.slideClass}, swiper-slide`);
                let r, n = !1;
                if (i)
                    for (let e = 0; e < t.slides.length; e += 1)
                        if (t.slides[e] === i) {
                            n = !0, r = e;
                            break
                        }
                if (!i || !n) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = r, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        };
        var D = {
            getTranslate: function(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                const {
                    params: t,
                    rtlTranslate: s,
                    translate: i,
                    wrapperEl: r
                } = this;
                if (t.virtualTranslate) return s ? -i : i;
                if (t.cssMode) return i;
                let n = l(r, e);
                return n += this.cssOverflowAdjustment(), s && (n = -n), n || 0
            },
            setTranslate: function(e, t) {
                const s = this,
                    {
                        rtlTranslate: i,
                        params: r,
                        wrapperEl: n,
                        progress: a
                    } = s;
                let o, l = 0,
                    c = 0;
                s.isHorizontal() ? l = i ? -e : e : c = e, r.roundLengths && (l = Math.floor(l), c = Math.floor(c)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? l : c, r.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -l : -c : r.virtualTranslate || (s.isHorizontal() ? l -= s.cssOverflowAdjustment() : c -= s.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${c}px, 0px)`);
                const d = s.maxTranslate() - s.minTranslate();
                o = 0 === d ? 0 : (e - s.minTranslate()) / d, o !== a && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, s, i, r) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
                const n = this,
                    {
                        params: a,
                        wrapperEl: o
                    } = n;
                if (n.animating && a.preventInteractionOnTransition) return !1;
                const l = n.minTranslate(),
                    c = n.maxTranslate();
                let d;
                if (d = i && e > l ? l : i && e < c ? c : e, n.updateProgress(d), a.cssMode) {
                    const e = n.isHorizontal();
                    if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d;
                    else {
                        if (!n.support.smoothScroll) return u({
                            swiper: n,
                            targetPosition: -d,
                            side: e ? "left" : "top"
                        }), !0;
                        o.scrollTo({
                            [e ? "left" : "top"]: -d,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return 0 === t ? (n.setTransition(0), n.setTranslate(d), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                    n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, s && n.emit("transitionEnd"))
                }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0
            }
        };

        function $(e) {
            let {
                swiper: t,
                runCallbacks: s,
                direction: i,
                step: r
            } = e;
            const {
                activeIndex: n,
                previousIndex: a
            } = t;
            let o = i;
            if (o || (o = n > a ? "next" : n < a ? "prev" : "reset"), t.emit(`transition${r}`), s && n !== a) {
                if ("reset" === o) return void t.emit(`slideResetTransition${r}`);
                t.emit(`slideChangeTransition${r}`), "next" === o ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`)
            }
        }
        var I = {
            slideTo: function(e, t, s, i, r) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
                const n = this;
                let a = e;
                a < 0 && (a = 0);
                const {
                    params: o,
                    snapGrid: l,
                    slidesGrid: c,
                    previousIndex: d,
                    activeIndex: p,
                    rtlTranslate: h,
                    wrapperEl: f,
                    enabled: m
                } = n;
                if (n.animating && o.preventInteractionOnTransition || !m && !i && !r) return !1;
                const g = Math.min(n.params.slidesPerGroupSkip, a);
                let v = g + Math.floor((a - g) / n.params.slidesPerGroup);
                v >= l.length && (v = l.length - 1);
                const b = -l[v];
                if (o.normalizeSlideIndex)
                    for (let e = 0; e < c.length; e += 1) {
                        const t = -Math.floor(100 * b),
                            s = Math.floor(100 * c[e]),
                            i = Math.floor(100 * c[e + 1]);
                        void 0 !== c[e + 1] ? t >= s && t < i - (i - s) / 2 ? a = e : t >= s && t < i && (a = e + 1) : t >= s && (a = e)
                    }
                if (n.initialized && a !== p) {
                    if (!n.allowSlideNext && (h ? b > n.translate && b > n.minTranslate() : b < n.translate && b < n.minTranslate())) return !1;
                    if (!n.allowSlidePrev && b > n.translate && b > n.maxTranslate() && (p || 0) !== a) return !1
                }
                let y;
                if (a !== (d || 0) && s && n.emit("beforeSlideChangeStart"), n.updateProgress(b), y = a > p ? "next" : a < p ? "prev" : "reset", h && -b === n.translate || !h && b === n.translate) return n.updateActiveIndex(a), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(b), "reset" !== y && (n.transitionStart(s, y), n.transitionEnd(s, y)), !1;
                if (o.cssMode) {
                    const e = n.isHorizontal(),
                        s = h ? b : -b;
                    if (0 === t) {
                        const t = n.virtual && n.params.virtual.enabled;
                        t && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                            f[e ? "scrollLeft" : "scrollTop"] = s
                        }))) : f[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                            n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1
                        }))
                    } else {
                        if (!n.support.smoothScroll) return u({
                            swiper: n,
                            targetPosition: s,
                            side: e ? "left" : "top"
                        }), !0;
                        f.scrollTo({
                            [e ? "left" : "top"]: s,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return n.setTransition(t), n.setTranslate(b), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(s, y), 0 === t ? n.transitionEnd(s, y) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
                    n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, y))
                }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0
            },
            slideToLoop: function(e, t, s, i) {
                if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
                    e = parseInt(e, 10)
                }
                const r = this;
                let n = e;
                return r.params.loop && (r.virtual && r.params.virtual.enabled ? n += r.virtual.slidesBefore : n = r.getSlideIndexByData(n)), r.slideTo(n, t, s, i)
            },
            slideNext: function(e, t, s) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const i = this,
                    {
                        enabled: r,
                        params: n,
                        animating: a
                    } = i;
                if (!r) return i;
                let o = n.slidesPerGroup;
                "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                const l = i.activeIndex < n.slidesPerGroupSkip ? 1 : o,
                    c = i.virtual && n.virtual.enabled;
                if (n.loop) {
                    if (a && !c && n.loopPreventsSliding) return !1;
                    i.loopFix({
                        direction: "next"
                    }), i._clientLeft = i.wrapperEl.clientLeft
                }
                return n.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + l, e, t, s)
            },
            slidePrev: function(e, t, s) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const i = this,
                    {
                        params: r,
                        snapGrid: n,
                        slidesGrid: a,
                        rtlTranslate: o,
                        enabled: l,
                        animating: c
                    } = i;
                if (!l) return i;
                const d = i.virtual && r.virtual.enabled;
                if (r.loop) {
                    if (c && !d && r.loopPreventsSliding) return !1;
                    i.loopFix({
                        direction: "prev"
                    }), i._clientLeft = i.wrapperEl.clientLeft
                }

                function p(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                const u = p(o ? i.translate : -i.translate),
                    h = n.map((e => p(e)));
                let f = n[h.indexOf(u) - 1];
                if (void 0 === f && r.cssMode) {
                    let e;
                    n.forEach(((t, s) => {
                        u >= t && (e = s)
                    })), void 0 !== e && (f = n[e > 0 ? e - 1 : e])
                }
                let m = 0;
                if (void 0 !== f && (m = a.indexOf(f), m < 0 && (m = i.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (m = m - i.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), r.rewind && i.isBeginning) {
                    const r = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                    return i.slideTo(r, e, t, s)
                }
                return i.slideTo(m, e, t, s)
            },
            slideReset: function(e, t, s) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s)
            },
            slideToClosest: function(e, t, s, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
                const r = this;
                let n = r.activeIndex;
                const a = Math.min(r.params.slidesPerGroupSkip, n),
                    o = a + Math.floor((n - a) / r.params.slidesPerGroup),
                    l = r.rtlTranslate ? r.translate : -r.translate;
                if (l >= r.snapGrid[o]) {
                    const e = r.snapGrid[o];
                    l - e > (r.snapGrid[o + 1] - e) * i && (n += r.params.slidesPerGroup)
                } else {
                    const e = r.snapGrid[o - 1];
                    l - e <= (r.snapGrid[o] - e) * i && (n -= r.params.slidesPerGroup)
                }
                return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, e, t, s)
            },
            slideToClickedSlide: function() {
                const e = this,
                    {
                        params: t,
                        slidesEl: s
                    } = e,
                    i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let r, n = e.clickedIndex;
                const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
                if (t.loop) {
                    if (e.animating) return;
                    r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), n = e.getSlideIndex(f(s, `${o}[data-swiper-slide-index="${r}"]`)[0]), a((() => {
                        e.slideTo(n)
                    }))) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(), n = e.getSlideIndex(f(s, `${o}[data-swiper-slide-index="${r}"]`)[0]), a((() => {
                        e.slideTo(n)
                    }))) : e.slideTo(n)
                } else e.slideTo(n)
            }
        };
        var N = {
            loopCreate: function(e) {
                const t = this,
                    {
                        params: s,
                        slidesEl: i
                    } = t;
                if (!s.loop || t.virtual && t.params.virtual.enabled) return;
                f(i, `.${s.slideClass}, swiper-slide`).forEach(((e, t) => {
                    e.setAttribute("data-swiper-slide-index", t)
                })), t.loopFix({
                    slideRealIndex: e,
                    direction: s.centeredSlides ? void 0 : "next"
                })
            },
            loopFix: function(e) {
                let {
                    slideRealIndex: t,
                    slideTo: s = !0,
                    direction: i,
                    setTranslate: r,
                    activeSlideIndex: n,
                    byController: a,
                    byMousewheel: o
                } = void 0 === e ? {} : e;
                const l = this;
                if (!l.params.loop) return;
                l.emit("beforeLoopFix");
                const {
                    slides: c,
                    allowSlidePrev: d,
                    allowSlideNext: p,
                    slidesEl: u,
                    params: h
                } = l;
                if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && h.virtual.enabled) return s && (h.centeredSlides || 0 !== l.snapIndex ? h.centeredSlides && l.snapIndex < h.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0) : l.slideTo(l.virtual.slides.length, 0, !1, !0)), l.allowSlidePrev = d, l.allowSlideNext = p, void l.emit("loopFix");
                const f = "auto" === h.slidesPerView ? l.slidesPerViewDynamic() : Math.ceil(parseFloat(h.slidesPerView, 10));
                let m = h.loopedSlides || f;
                m % h.slidesPerGroup != 0 && (m += h.slidesPerGroup - m % h.slidesPerGroup), l.loopedSlides = m;
                const g = [],
                    v = [];
                let b = l.activeIndex;
                void 0 === n ? n = l.getSlideIndex(l.slides.filter((e => e.classList.contains(h.slideActiveClass)))[0]) : b = n;
                const y = "next" === i || !i,
                    w = "prev" === i || !i;
                let E = 0,
                    x = 0;
                if (n < m) {
                    E = Math.max(m - n, h.slidesPerGroup);
                    for (let e = 0; e < m - n; e += 1) {
                        const t = e - Math.floor(e / c.length) * c.length;
                        g.push(c.length - t - 1)
                    }
                } else if (n > l.slides.length - 2 * m) {
                    x = Math.max(n - (l.slides.length - 2 * m), h.slidesPerGroup);
                    for (let e = 0; e < x; e += 1) {
                        const t = e - Math.floor(e / c.length) * c.length;
                        v.push(t)
                    }
                }
                if (w && g.forEach((e => {
                        l.slides[e].swiperLoopMoveDOM = !0, u.prepend(l.slides[e]), l.slides[e].swiperLoopMoveDOM = !1
                    })), y && v.forEach((e => {
                        l.slides[e].swiperLoopMoveDOM = !0, u.append(l.slides[e]), l.slides[e].swiperLoopMoveDOM = !1
                    })), l.recalcSlides(), "auto" === h.slidesPerView && l.updateSlides(), h.watchSlidesProgress && l.updateSlidesOffset(), s)
                    if (g.length > 0 && w)
                        if (void 0 === t) {
                            const e = l.slidesGrid[b],
                                t = l.slidesGrid[b + E] - e;
                            o ? l.setTranslate(l.translate - t) : (l.slideTo(b + E, 0, !1, !0), r && (l.touches[l.isHorizontal() ? "startX" : "startY"] += t, l.touchEventsData.currentTranslate = l.translate))
                        } else r && (l.slideToLoop(t, 0, !1, !0), l.touchEventsData.currentTranslate = l.translate);
                else if (v.length > 0 && y)
                    if (void 0 === t) {
                        const e = l.slidesGrid[b],
                            t = l.slidesGrid[b - x] - e;
                        o ? l.setTranslate(l.translate - t) : (l.slideTo(b - x, 0, !1, !0), r && (l.touches[l.isHorizontal() ? "startX" : "startY"] += t, l.touchEventsData.currentTranslate = l.translate))
                    } else l.slideToLoop(t, 0, !1, !0);
                if (l.allowSlidePrev = d, l.allowSlideNext = p, l.controller && l.controller.control && !a) {
                    const e = {
                        slideRealIndex: t,
                        direction: i,
                        setTranslate: r,
                        activeSlideIndex: n,
                        byController: !0
                    };
                    Array.isArray(l.controller.control) ? l.controller.control.forEach((t => {
                        !t.destroyed && t.params.loop && t.loopFix({ ...e,
                            slideTo: t.params.slidesPerView === h.slidesPerView && s
                        })
                    })) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({ ...e,
                        slideTo: l.controller.control.params.slidesPerView === h.slidesPerView && s
                    })
                }
                l.emit("loopFix")
            },
            loopDestroy: function() {
                const e = this,
                    {
                        params: t,
                        slidesEl: s
                    } = e;
                if (!t.loop || e.virtual && e.params.virtual.enabled) return;
                e.recalcSlides();
                const i = [];
                e.slides.forEach((e => {
                    const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                    i[t] = e
                })), e.slides.forEach((e => {
                    e.removeAttribute("data-swiper-slide-index")
                })), i.forEach((e => {
                    s.append(e)
                })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
            }
        };

        function z(e) {
            const t = this,
                s = i(),
                r = n(),
                a = t.touchEventsData;
            a.evCache.push(e);
            const {
                params: l,
                touches: c,
                enabled: d
            } = t;
            if (!d) return;
            if (!l.simulateTouch && "mouse" === e.pointerType) return;
            if (t.animating && l.preventInteractionOnTransition) return;
            !t.animating && l.cssMode && l.loop && t.loopFix();
            let p = e;
            p.originalEvent && (p = p.originalEvent);
            let u = p.target;
            if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(u)) return;
            if ("which" in p && 3 === p.which) return;
            if ("button" in p && p.button > 0) return;
            if (a.isTouched && a.isMoved) return;
            const h = !!l.noSwipingClass && "" !== l.noSwipingClass,
                f = e.composedPath ? e.composedPath() : e.path;
            h && p.target && p.target.shadowRoot && f && (u = f[0]);
            const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
                g = !(!p.target || !p.target.shadowRoot);
            if (l.noSwiping && (g ? function(e, t) {
                    return void 0 === t && (t = this),
                        function t(s) {
                            if (!s || s === i() || s === n()) return null;
                            s.assignedSlot && (s = s.assignedSlot);
                            const r = s.closest(e);
                            return r || s.getRootNode ? r || t(s.getRootNode().host) : null
                        }(t)
                }(m, u) : u.closest(m))) return void(t.allowClick = !0);
            if (l.swipeHandler && !u.closest(l.swipeHandler)) return;
            c.currentX = p.pageX, c.currentY = p.pageY;
            const v = c.currentX,
                b = c.currentY,
                y = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
                w = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
            if (y && (v <= w || v >= r.innerWidth - w)) {
                if ("prevent" !== y) return;
                e.preventDefault()
            }
            Object.assign(a, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), c.startX = v, c.startY = b, a.touchStartTime = o(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (a.allowThresholdMove = !1);
            let E = !0;
            u.matches(a.focusableElements) && (E = !1, "SELECT" === u.nodeName && (a.isTouched = !1)), s.activeElement && s.activeElement.matches(a.focusableElements) && s.activeElement !== u && s.activeElement.blur();
            const x = E && t.allowTouchMove && l.touchStartPreventDefault;
            !l.touchStartForcePreventDefault && !x || u.isContentEditable || p.preventDefault(), l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p)
        }

        function j(e) {
            const t = i(),
                s = this,
                r = s.touchEventsData,
                {
                    params: n,
                    touches: a,
                    rtlTranslate: l,
                    enabled: c
                } = s;
            if (!c) return;
            if (!n.simulateTouch && "mouse" === e.pointerType) return;
            let d = e;
            if (d.originalEvent && (d = d.originalEvent), !r.isTouched) return void(r.startMoving && r.isScrolling && s.emit("touchMoveOpposite", d));
            const p = r.evCache.findIndex((e => e.pointerId === d.pointerId));
            p >= 0 && (r.evCache[p] = d);
            const u = r.evCache.length > 1 ? r.evCache[0] : d,
                h = u.pageX,
                f = u.pageY;
            if (d.preventedByNestedSwiper) return a.startX = h, void(a.startY = f);
            if (!s.allowTouchMove) return d.target.matches(r.focusableElements) || (s.allowClick = !1), void(r.isTouched && (Object.assign(a, {
                startX: h,
                startY: f,
                prevX: s.touches.currentX,
                prevY: s.touches.currentY,
                currentX: h,
                currentY: f
            }), r.touchStartTime = o()));
            if (n.touchReleaseOnEdges && !n.loop)
                if (s.isVertical()) {
                    if (f < a.startY && s.translate <= s.maxTranslate() || f > a.startY && s.translate >= s.minTranslate()) return r.isTouched = !1, void(r.isMoved = !1)
                } else if (h < a.startX && s.translate <= s.maxTranslate() || h > a.startX && s.translate >= s.minTranslate()) return;
            if (t.activeElement && d.target === t.activeElement && d.target.matches(r.focusableElements)) return r.isMoved = !0, void(s.allowClick = !1);
            if (r.allowTouchCallbacks && s.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
            a.currentX = h, a.currentY = f;
            const m = a.currentX - a.startX,
                g = a.currentY - a.startY;
            if (s.params.threshold && Math.sqrt(m ** 2 + g ** 2) < s.params.threshold) return;
            if (void 0 === r.isScrolling) {
                let e;
                s.isHorizontal() && a.currentY === a.startY || s.isVertical() && a.currentX === a.startX ? r.isScrolling = !1 : m * m + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(m)) / Math.PI, r.isScrolling = s.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle)
            }
            if (r.isScrolling && s.emit("touchMoveOpposite", d), void 0 === r.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (r.startMoving = !0)), r.isScrolling || s.zoom && s.params.zoom && s.params.zoom.enabled && r.evCache.length > 1) return void(r.isTouched = !1);
            if (!r.startMoving) return;
            s.allowClick = !1, !n.cssMode && d.cancelable && d.preventDefault(), n.touchMoveStopPropagation && !n.nested && d.stopPropagation();
            let v = s.isHorizontal() ? m : g,
                b = s.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
            n.oneWayMovement && (v = Math.abs(v) * (l ? 1 : -1), b = Math.abs(b) * (l ? 1 : -1)), a.diff = v, v *= n.touchRatio, l && (v = -v, b = -b);
            const y = s.touchesDirection;
            s.swipeDirection = v > 0 ? "prev" : "next", s.touchesDirection = b > 0 ? "prev" : "next";
            const w = s.params.loop && !n.cssMode;
            if (!r.isMoved) {
                if (w && s.loopFix({
                        direction: s.swipeDirection
                    }), r.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
                    const e = new window.CustomEvent("transitionend", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    s.wrapperEl.dispatchEvent(e)
                }
                r.allowMomentumBounce = !1, !n.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", d)
            }
            let E;
            r.isMoved && y !== s.touchesDirection && w && Math.abs(v) >= 1 && (s.loopFix({
                direction: s.swipeDirection,
                setTranslate: !0
            }), E = !0), s.emit("sliderMove", d), r.isMoved = !0, r.currentTranslate = v + r.startTranslate;
            let x = !0,
                _ = n.resistanceRatio;
            if (n.touchReleaseOnEdges && (_ = 0), v > 0 ? (w && !E && r.currentTranslate > (n.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) && s.loopFix({
                    direction: "prev",
                    setTranslate: !0,
                    activeSlideIndex: 0
                }), r.currentTranslate > s.minTranslate() && (x = !1, n.resistance && (r.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + r.startTranslate + v) ** _))) : v < 0 && (w && !E && r.currentTranslate < (n.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) && s.loopFix({
                    direction: "next",
                    setTranslate: !0,
                    activeSlideIndex: s.slides.length - ("auto" === n.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
                }), r.currentTranslate < s.maxTranslate() && (x = !1, n.resistance && (r.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - r.startTranslate - v) ** _))), x && (d.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), s.allowSlidePrev || s.allowSlideNext || (r.currentTranslate = r.startTranslate), n.threshold > 0) {
                if (!(Math.abs(v) > n.threshold || r.allowThresholdMove)) return void(r.currentTranslate = r.startTranslate);
                if (!r.allowThresholdMove) return r.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, r.currentTranslate = r.startTranslate, void(a.diff = s.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
            }
            n.followFinger && !n.cssMode && ((n.freeMode && n.freeMode.enabled && s.freeMode || n.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(r.currentTranslate), s.setTranslate(r.currentTranslate))
        }

        function H(e) {
            const t = this,
                s = t.touchEventsData,
                i = s.evCache.findIndex((t => t.pointerId === e.pointerId));
            if (i >= 0 && s.evCache.splice(i, 1), ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
                if (!(["pointercancel", "contextmenu"].includes(e.type) && (t.browser.isSafari || t.browser.isWebView))) return
            }
            const {
                params: r,
                touches: n,
                rtlTranslate: l,
                slidesGrid: c,
                enabled: d
            } = t;
            if (!d) return;
            if (!r.simulateTouch && "mouse" === e.pointerType) return;
            let p = e;
            if (p.originalEvent && (p = p.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", p), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && r.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
            r.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const u = o(),
                h = u - s.touchStartTime;
            if (t.allowClick) {
                const e = p.path || p.composedPath && p.composedPath();
                t.updateClickedSlide(e && e[0] || p.target), t.emit("tap click", p), h < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", p)
            }
            if (s.lastClickTime = o(), a((() => {
                    t.destroyed || (t.allowClick = !0)
                })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
            let f;
            if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, f = r.followFinger ? l ? t.translate : -t.translate : -s.currentTranslate, r.cssMode) return;
            if (r.freeMode && r.freeMode.enabled) return void t.freeMode.onTouchEnd({
                currentPos: f
            });
            let m = 0,
                g = t.slidesSizesGrid[0];
            for (let e = 0; e < c.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                void 0 !== c[e + t] ? f >= c[e] && f < c[e + t] && (m = e, g = c[e + t] - c[e]) : f >= c[e] && (m = e, g = c[c.length - 1] - c[c.length - 2])
            }
            let v = null,
                b = null;
            r.rewind && (t.isBeginning ? b = r.virtual && r.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
            const y = (f - c[m]) / g,
                w = m < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            if (h > r.longSwipesMs) {
                if (!r.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (y >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? v : m + w) : t.slideTo(m)), "prev" === t.swipeDirection && (y > 1 - r.longSwipesRatio ? t.slideTo(m + w) : null !== b && y < 0 && Math.abs(y) > r.longSwipesRatio ? t.slideTo(b) : t.slideTo(m))
            } else {
                if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation && (p.target === t.navigation.nextEl || p.target === t.navigation.prevEl) ? p.target === t.navigation.nextEl ? t.slideTo(m + w) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : m + w), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : m))
            }
        }

        function V() {
            const e = this,
                {
                    params: t,
                    el: s
                } = e;
            if (s && 0 === s.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            const {
                allowSlideNext: i,
                allowSlidePrev: r,
                snapGrid: n
            } = e, a = e.virtual && e.params.virtual.enabled;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
            const o = a && t.loop;
            !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
            }), 500)), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
        }

        function W(e) {
            const t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
        }

        function R() {
            const e = this,
                {
                    wrapperEl: t,
                    rtlTranslate: s,
                    enabled: i
                } = e;
            if (!i) return;
            let r;
            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
            const n = e.maxTranslate() - e.minTranslate();
            r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, r !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
        }

        function B(e) {
            const t = this;
            O(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
        }
        let F = !1;

        function q() {}
        const X = (e, t) => {
            const s = i(),
                {
                    params: r,
                    el: n,
                    wrapperEl: a,
                    device: o
                } = e,
                l = !!r.nested,
                c = "on" === t ? "addEventListener" : "removeEventListener",
                d = t;
            n[c]("pointerdown", e.onTouchStart, {
                passive: !1
            }), s[c]("pointermove", e.onTouchMove, {
                passive: !1,
                capture: l
            }), s[c]("pointerup", e.onTouchEnd, {
                passive: !0
            }), s[c]("pointercancel", e.onTouchEnd, {
                passive: !0
            }), s[c]("pointerout", e.onTouchEnd, {
                passive: !0
            }), s[c]("pointerleave", e.onTouchEnd, {
                passive: !0
            }), s[c]("contextmenu", e.onTouchEnd, {
                passive: !0
            }), (r.preventClicks || r.preventClicksPropagation) && n[c]("click", e.onClick, !0), r.cssMode && a[c]("scroll", e.onScroll), r.updateOnWindowResize ? e[d](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", V, !0) : e[d]("observerUpdate", V, !0), n[c]("load", e.onLoad, {
                capture: !0
            })
        };
        const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var G = {
            init: !0,
            direction: "horizontal",
            oneWayMovement: !1,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 5,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            loop: !1,
            loopedSlides: null,
            loopPreventsSliding: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };

        function U(e, t) {
            return function(s) {
                void 0 === s && (s = {});
                const i = Object.keys(s)[0],
                    r = s[i];
                "object" == typeof r && null !== r ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === e[i] && (e[i] = {
                    auto: !0
                }), i in e && "enabled" in r ? (!0 === e[i] && (e[i] = {
                    enabled: !0
                }), "object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
                    enabled: !1
                }), d(t, s)) : d(t, s)) : d(t, s)
            }
        }
        const K = {
                eventsEmitter: A,
                update: P,
                translate: D,
                transition: {
                    setTransition: function(e, t) {
                        const s = this;
                        s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t)
                    },
                    transitionStart: function(e, t) {
                        void 0 === e && (e = !0);
                        const s = this,
                            {
                                params: i
                            } = s;
                        i.cssMode || (i.autoHeight && s.updateAutoHeight(), $({
                            swiper: s,
                            runCallbacks: e,
                            direction: t,
                            step: "Start"
                        }))
                    },
                    transitionEnd: function(e, t) {
                        void 0 === e && (e = !0);
                        const s = this,
                            {
                                params: i
                            } = s;
                        s.animating = !1, i.cssMode || (s.setTransition(0), $({
                            swiper: s,
                            runCallbacks: e,
                            direction: t,
                            step: "End"
                        }))
                    }
                },
                slide: I,
                loop: N,
                grabCursor: {
                    setGrabCursor: function(e) {
                        const t = this;
                        if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                        const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                        t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                            t.__preventObserver__ = !1
                        }))
                    },
                    unsetGrabCursor: function() {
                        const e = this;
                        e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                            e.__preventObserver__ = !1
                        })))
                    }
                },
                events: {
                    attachEvents: function() {
                        const e = this,
                            t = i(),
                            {
                                params: s
                            } = e;
                        e.onTouchStart = z.bind(e), e.onTouchMove = j.bind(e), e.onTouchEnd = H.bind(e), s.cssMode && (e.onScroll = R.bind(e)), e.onClick = W.bind(e), e.onLoad = B.bind(e), F || (t.addEventListener("touchstart", q), F = !0), X(e, "on")
                    },
                    detachEvents: function() {
                        X(this, "off")
                    }
                },
                breakpoints: {
                    setBreakpoint: function() {
                        const e = this,
                            {
                                realIndex: t,
                                initialized: s,
                                params: i,
                                el: r
                            } = e,
                            n = i.breakpoints;
                        if (!n || n && 0 === Object.keys(n).length) return;
                        const a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                        if (!a || e.currentBreakpoint === a) return;
                        const o = (a in n ? n[a] : void 0) || e.originalParams,
                            l = Y(e, i),
                            c = Y(e, o),
                            p = i.enabled;
                        l && !c ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !l && c && (r.classList.add(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                            if (void 0 === o[t]) return;
                            const s = i[t] && i[t].enabled,
                                r = o[t] && o[t].enabled;
                            s && !r && e[t].disable(), !s && r && e[t].enable()
                        }));
                        const u = o.direction && o.direction !== i.direction,
                            h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                        u && s && e.changeDirection(), d(e.params, o);
                        const f = e.params.enabled;
                        Object.assign(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }), p && !f ? e.disable() : !p && f && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", o)
                    },
                    getBreakpoint: function(e, t, s) {
                        if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                        let i = !1;
                        const r = n(),
                            a = "window" === t ? r.innerHeight : s.clientHeight,
                            o = Object.keys(e).map((e => {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    const t = parseFloat(e.substr(1));
                                    return {
                                        value: a * t,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            }));
                        o.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                        for (let e = 0; e < o.length; e += 1) {
                            const {
                                point: n,
                                value: a
                            } = o[e];
                            "window" === t ? r.matchMedia(`(min-width: ${a}px)`).matches && (i = n) : a <= s.clientWidth && (i = n)
                        }
                        return i || "max"
                    }
                },
                checkOverflow: {
                    checkOverflow: function() {
                        const e = this,
                            {
                                isLocked: t,
                                params: s
                            } = e,
                            {
                                slidesOffsetBefore: i
                            } = s;
                        if (i) {
                            const t = e.slides.length - 1,
                                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                            e.isLocked = e.size > s
                        } else e.isLocked = 1 === e.snapGrid.length;
                        !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                    }
                },
                classes: {
                    addClasses: function() {
                        const e = this,
                            {
                                classNames: t,
                                params: s,
                                rtl: i,
                                el: r,
                                device: n
                            } = e,
                            a = function(e, t) {
                                const s = [];
                                return e.forEach((e => {
                                    "object" == typeof e ? Object.keys(e).forEach((i => {
                                        e[i] && s.push(t + i)
                                    })) : "string" == typeof e && s.push(t + e)
                                })), s
                            }(["initialized", s.direction, {
                                "free-mode": e.params.freeMode && s.freeMode.enabled
                            }, {
                                autoheight: s.autoHeight
                            }, {
                                rtl: i
                            }, {
                                grid: s.grid && s.grid.rows > 1
                            }, {
                                "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                            }, {
                                android: n.android
                            }, {
                                ios: n.ios
                            }, {
                                "css-mode": s.cssMode
                            }, {
                                centered: s.cssMode && s.centeredSlides
                            }, {
                                "watch-progress": s.watchSlidesProgress
                            }], s.containerModifierClass);
                        t.push(...a), r.classList.add(...t), e.emitContainerClasses()
                    },
                    removeClasses: function() {
                        const {
                            el: e,
                            classNames: t
                        } = this;
                        e.classList.remove(...t), this.emitContainerClasses()
                    }
                }
            },
            Q = {};
        class Z {
            constructor() {
                let e, t;
                for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
                1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? t = r[0] : [e, t] = r, t || (t = {}), t = d({}, t), e && !t.el && (t.el = e);
                const a = i();
                if (t.el && "string" == typeof t.el && a.querySelectorAll(t.el).length > 1) {
                    const e = [];
                    return a.querySelectorAll(t.el).forEach((s => {
                        const i = d({}, t, {
                            el: s
                        });
                        e.push(new Z(i))
                    })), e
                }
                const o = this;
                o.__swiper__ = !0, o.support = T(), o.device = C({
                    userAgent: t.userAgent
                }), o.browser = M(), o.eventsListeners = {}, o.eventsAnyListeners = [], o.modules = [...o.__modules__], t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
                const l = {};
                o.modules.forEach((e => {
                    e({
                        params: t,
                        swiper: o,
                        extendParams: U(t, l),
                        on: o.on.bind(o),
                        once: o.once.bind(o),
                        off: o.off.bind(o),
                        emit: o.emit.bind(o)
                    })
                }));
                const c = d({}, G, l);
                return o.params = d({}, c, Q, t), o.originalParams = d({}, o.params), o.passedParams = d({}, t), o.params && o.params.on && Object.keys(o.params.on).forEach((e => {
                    o.on(e, o.params.on[e])
                })), o.params && o.params.onAny && o.onAny(o.params.onAny), Object.assign(o, {
                    enabled: o.params.enabled,
                    el: e,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: () => "horizontal" === o.params.direction,
                    isVertical: () => "vertical" === o.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                    },
                    allowSlideNext: o.params.allowSlideNext,
                    allowSlidePrev: o.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: o.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        evCache: []
                    },
                    allowClick: !0,
                    allowTouchMove: o.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), o.emit("_swiper"), o.params.init && o.init(), o
            }
            getSlideIndex(e) {
                const {
                    slidesEl: t,
                    params: s
                } = this, i = b(f(t, `.${s.slideClass}, swiper-slide`)[0]);
                return b(e) - i
            }
            getSlideIndexByData(e) {
                return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
            }
            recalcSlides() {
                const {
                    slidesEl: e,
                    params: t
                } = this;
                this.slides = f(e, `.${t.slideClass}, swiper-slide`)
            }
            enable() {
                const e = this;
                e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
            }
            disable() {
                const e = this;
                e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
            }
            setProgress(e, t) {
                const s = this;
                e = Math.min(Math.max(e, 0), 1);
                const i = s.minTranslate(),
                    r = (s.maxTranslate() - i) * e + i;
                s.translateTo(r, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
            }
            emitContainerClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                e.emit("_containerClasses", t.join(" "))
            }
            getSlideClasses(e) {
                const t = this;
                return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
            }
            emitSlidesClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = [];
                e.slides.forEach((s => {
                    const i = e.getSlideClasses(s);
                    t.push({
                        slideEl: s,
                        classNames: i
                    }), e.emit("_slideClass", s, i)
                })), e.emit("_slideClasses", t)
            }
            slidesPerViewDynamic(e, t) {
                void 0 === e && (e = "current"), void 0 === t && (t = !1);
                const {
                    params: s,
                    slides: i,
                    slidesGrid: r,
                    slidesSizesGrid: n,
                    size: a,
                    activeIndex: o
                } = this;
                let l = 1;
                if (s.centeredSlides) {
                    let e, t = i[o] ? i[o].swiperSlideSize : 0;
                    for (let s = o + 1; s < i.length; s += 1) i[s] && !e && (t += i[s].swiperSlideSize, l += 1, t > a && (e = !0));
                    for (let s = o - 1; s >= 0; s -= 1) i[s] && !e && (t += i[s].swiperSlideSize, l += 1, t > a && (e = !0))
                } else if ("current" === e)
                    for (let e = o + 1; e < i.length; e += 1) {
                        (t ? r[e] + n[e] - r[o] < a : r[e] - r[o] < a) && (l += 1)
                    } else
                        for (let e = o - 1; e >= 0; e -= 1) {
                            r[o] - r[e] < a && (l += 1)
                        }
                return l
            }
            update() {
                const e = this;
                if (!e || e.destroyed) return;
                const {
                    snapGrid: t,
                    params: s
                } = e;

                function i() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                let r;
                if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                        t.complete && O(e, t)
                    })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) i(), s.autoHeight && e.updateAutoHeight();
                else {
                    if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                        const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                        r = e.slideTo(t.length - 1, 0, !1, !0)
                    } else r = e.slideTo(e.activeIndex, 0, !1, !0);
                    r || i()
                }
                s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
            }
            changeDirection(e, t) {
                void 0 === t && (t = !0);
                const s = this,
                    i = s.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${i}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t => {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                })), s.emit("changeDirection"), t && s.update()), s
            }
            changeLanguageDirection(e) {
                const t = this;
                t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
            }
            mount(e) {
                const t = this;
                if (t.mounted) return !0;
                let s = e || t.params.el;
                if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
                s.swiper = t, s.parentNode && s.parentNode.host && "SWIPER-CONTAINER" === s.parentNode.host.nodeName && (t.isElement = !0);
                const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
                let r = (() => {
                    if (s && s.shadowRoot && s.shadowRoot.querySelector) {
                        return s.shadowRoot.querySelector(i())
                    }
                    return f(s, i())[0]
                })();
                return !r && t.params.createElements && (r = m("div", t.params.wrapperClass), s.append(r), f(s, `.${t.params.slideClass}`).forEach((e => {
                    r.append(e)
                }))), Object.assign(t, {
                    el: s,
                    wrapperEl: r,
                    slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : r,
                    hostEl: t.isElement ? s.parentNode.host : s,
                    mounted: !0,
                    rtl: "rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction")),
                    wrongRTL: "-webkit-box" === v(r, "display")
                }), !0
            }
            init(e) {
                const t = this;
                if (t.initialized) return t;
                if (!1 === t.mount(e)) return t;
                t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                const s = [...t.el.querySelectorAll('[loading="lazy"]')];
                return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => {
                    e.complete ? O(t, e) : e.addEventListener("load", (e => {
                        O(t, e.target)
                    }))
                })), L(t), t.initialized = !0, L(t), t.emit("init"), t.emit("afterInit"), t
            }
            destroy(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                const s = this,
                    {
                        params: i,
                        el: r,
                        wrapperEl: n,
                        slides: a
                    } = s;
                return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), r.removeAttribute("style"), n.removeAttribute("style"), a && a.length && a.forEach((e => {
                    e.classList.remove(i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                }))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                    s.off(e)
                })), !1 !== e && (s.el.swiper = null, function(e) {
                    const t = e;
                    Object.keys(t).forEach((e => {
                        try {
                            t[e] = null
                        } catch (e) {}
                        try {
                            delete t[e]
                        } catch (e) {}
                    }))
                }(s)), s.destroyed = !0), null
            }
            static extendDefaults(e) {
                d(Q, e)
            }
            static get extendedDefaults() {
                return Q
            }
            static get defaults() {
                return G
            }
            static installModule(e) {
                Z.prototype.__modules__ || (Z.prototype.__modules__ = []);
                const t = Z.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
            }
            static use(e) {
                return Array.isArray(e) ? (e.forEach((e => Z.installModule(e))), Z) : (Z.installModule(e), Z)
            }
        }

        function J(e, t, s, i) {
            return e.params.createElements && Object.keys(i).forEach((r => {
                if (!s[r] && !0 === s.auto) {
                    let n = f(e.el, `.${i[r]}`)[0];
                    n || (n = m("div", i[r]), n.className = i[r], e.el.append(n)), s[r] = n, t[r] = n
                }
            })), s
        }

        function ee(e) {
            return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
        }

        function te(e) {
            const t = this,
                {
                    params: s,
                    slidesEl: i
                } = t;
            s.loop && t.loopDestroy();
            const r = e => {
                if ("string" == typeof e) {
                    const t = document.createElement("div");
                    t.innerHTML = e, i.append(t.children[0]), t.innerHTML = ""
                } else i.append(e)
            };
            if ("object" == typeof e && "length" in e)
                for (let t = 0; t < e.length; t += 1) e[t] && r(e[t]);
            else r(e);
            t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update()
        }

        function se(e) {
            const t = this,
                {
                    params: s,
                    activeIndex: i,
                    slidesEl: r
                } = t;
            s.loop && t.loopDestroy();
            let n = i + 1;
            const a = e => {
                if ("string" == typeof e) {
                    const t = document.createElement("div");
                    t.innerHTML = e, r.prepend(t.children[0]), t.innerHTML = ""
                } else r.prepend(e)
            };
            if ("object" == typeof e && "length" in e) {
                for (let t = 0; t < e.length; t += 1) e[t] && a(e[t]);
                n = i + e.length
            } else a(e);
            t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), t.slideTo(n, 0, !1)
        }

        function ie(e, t) {
            const s = this,
                {
                    params: i,
                    activeIndex: r,
                    slidesEl: n
                } = s;
            let a = r;
            i.loop && (a -= s.loopedSlides, s.loopDestroy(), s.recalcSlides());
            const o = s.slides.length;
            if (e <= 0) return void s.prependSlide(t);
            if (e >= o) return void s.appendSlide(t);
            let l = a > e ? a + 1 : a;
            const c = [];
            for (let t = o - 1; t >= e; t -= 1) {
                const e = s.slides[t];
                e.remove(), c.unshift(e)
            }
            if ("object" == typeof t && "length" in t) {
                for (let e = 0; e < t.length; e += 1) t[e] && n.append(t[e]);
                l = a > e ? a + t.length : a
            } else n.append(t);
            for (let e = 0; e < c.length; e += 1) n.append(c[e]);
            s.recalcSlides(), i.loop && s.loopCreate(), i.observer && !s.isElement || s.update(), i.loop ? s.slideTo(l + s.loopedSlides, 0, !1) : s.slideTo(l, 0, !1)
        }

        function re(e) {
            const t = this,
                {
                    params: s,
                    activeIndex: i
                } = t;
            let r = i;
            s.loop && (r -= t.loopedSlides, t.loopDestroy());
            let n, a = r;
            if ("object" == typeof e && "length" in e) {
                for (let s = 0; s < e.length; s += 1) n = e[s], t.slides[n] && t.slides[n].remove(), n < a && (a -= 1);
                a = Math.max(a, 0)
            } else n = e, t.slides[n] && t.slides[n].remove(), n < a && (a -= 1), a = Math.max(a, 0);
            t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), s.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1)
        }

        function ne() {
            const e = this,
                t = [];
            for (let s = 0; s < e.slides.length; s += 1) t.push(s);
            e.removeSlide(t)
        }

        function ae(e) {
            const {
                effect: t,
                swiper: s,
                on: i,
                setTranslate: r,
                setTransition: n,
                overwriteParams: a,
                perspective: o,
                recreateShadows: l,
                getEffectParams: c
            } = e;
            let d;
            i("beforeInit", (() => {
                if (s.params.effect !== t) return;
                s.classNames.push(`${s.params.containerModifierClass}${t}`), o && o() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                const e = a ? a() : {};
                Object.assign(s.params, e), Object.assign(s.originalParams, e)
            })), i("setTranslate", (() => {
                s.params.effect === t && r()
            })), i("setTransition", ((e, i) => {
                s.params.effect === t && n(i)
            })), i("transitionEnd", (() => {
                if (s.params.effect === t && l) {
                    if (!c || !c().slideShadows) return;
                    s.slides.forEach((e => {
                        e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => e.remove()))
                    })), l()
                }
            })), i("virtualUpdate", (() => {
                s.params.effect === t && (s.slides.length || (d = !0), requestAnimationFrame((() => {
                    d && s.slides && s.slides.length && (r(), d = !1)
                })))
            }))
        }

        function oe(e, t) {
            const s = h(t);
            return s !== t && (s.style.backfaceVisibility = "hidden", s.style["-webkit-backface-visibility"] = "hidden"), s
        }

        function le(e) {
            let {
                swiper: t,
                duration: s,
                transformElements: i,
                allSlides: r
            } = e;
            const {
                activeIndex: n
            } = t;
            if (t.params.virtualTranslate && 0 !== s) {
                let e, s = !1;
                e = r ? i : i.filter((e => {
                    const s = e.classList.contains("swiper-slide-transform") ? (e => {
                        if (!e.parentElement) return t.slides.filter((t => t.shadowRoot && t.shadowRoot === e.parentNode))[0];
                        return e.parentElement
                    })(e) : e;
                    return t.getSlideIndex(s) === n
                })), e.forEach((e => {
                    w(e, (() => {
                        if (s) return;
                        if (!t || t.destroyed) return;
                        s = !0, t.animating = !1;
                        const e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        t.wrapperEl.dispatchEvent(e)
                    }))
                }))
            }
        }

        function ce(e, t, s) {
            const i = `swiper-slide-shadow${s?`-${s}`:""}${e?` swiper-slide-shadow-${e}`:""}`,
                r = h(t);
            let n = r.querySelector(`.${i.split(" ").join(".")}`);
            return n || (n = m("div", i.split(" ")), r.append(n)), n
        }
        Object.keys(K).forEach((e => {
            Object.keys(K[e]).forEach((t => {
                Z.prototype[t] = K[e][t]
            }))
        })), Z.use([function(e) {
            let {
                swiper: t,
                on: s,
                emit: i
            } = e;
            const r = n();
            let a = null,
                o = null;
            const l = () => {
                    t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
                },
                c = () => {
                    t && !t.destroyed && t.initialized && i("orientationchange")
                };
            s("init", (() => {
                t.params.resizeObserver && void 0 !== r.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver((e => {
                    o = r.requestAnimationFrame((() => {
                        const {
                            width: s,
                            height: i
                        } = t;
                        let r = s,
                            n = i;
                        e.forEach((e => {
                            let {
                                contentBoxSize: s,
                                contentRect: i,
                                target: a
                            } = e;
                            a && a !== t.el || (r = i ? i.width : (s[0] || s).inlineSize, n = i ? i.height : (s[0] || s).blockSize)
                        })), r === s && n === i || l()
                    }))
                })), a.observe(t.el)) : (r.addEventListener("resize", l), r.addEventListener("orientationchange", c))
            })), s("destroy", (() => {
                o && r.cancelAnimationFrame(o), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), r.removeEventListener("resize", l), r.removeEventListener("orientationchange", c)
            }))
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: i,
                emit: r
            } = e;
            const a = [],
                o = n(),
                l = function(e, s) {
                    void 0 === s && (s = {});
                    const i = new(o.MutationObserver || o.WebkitMutationObserver)((e => {
                        if (t.__preventObserver__) return;
                        if (1 === e.length) return void r("observerUpdate", e[0]);
                        const s = function() {
                            r("observerUpdate", e[0])
                        };
                        o.requestAnimationFrame ? o.requestAnimationFrame(s) : o.setTimeout(s, 0)
                    }));
                    i.observe(e, {
                        attributes: void 0 === s.attributes || s.attributes,
                        childList: void 0 === s.childList || s.childList,
                        characterData: void 0 === s.characterData || s.characterData
                    }), a.push(i)
                };
            s({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            }), i("init", (() => {
                if (t.params.observer) {
                    if (t.params.observeParents) {
                        const e = y(t.hostEl);
                        for (let t = 0; t < e.length; t += 1) l(e[t])
                    }
                    l(t.hostEl, {
                        childList: t.params.observeSlideChildren
                    }), l(t.wrapperEl, {
                        attributes: !1
                    })
                }
            })), i("destroy", (() => {
                a.forEach((e => {
                    e.disconnect()
                })), a.splice(0, a.length)
            }))
        }]);
        const de = [function(e) {
            let t, {
                swiper: s,
                extendParams: r,
                on: n,
                emit: a
            } = e;
            r({
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            });
            const o = i();
            s.virtual = {
                cache: {},
                from: void 0,
                to: void 0,
                slides: [],
                offset: 0,
                slidesGrid: []
            };
            const l = o.createElement("div");

            function c(e, t) {
                const i = s.params.virtual;
                if (i.cache && s.virtual.cache[t]) return s.virtual.cache[t];
                let r;
                return i.renderSlide ? (r = i.renderSlide.call(s, e, t), "string" == typeof r && (l.innerHTML = r, r = l.children[0])) : r = s.isElement ? m("swiper-slide") : m("div", s.params.slideClass), r.setAttribute("data-swiper-slide-index", t), i.renderSlide || (r.innerHTML = e), i.cache && (s.virtual.cache[t] = r), r
            }

            function d(e) {
                const {
                    slidesPerView: t,
                    slidesPerGroup: i,
                    centeredSlides: r,
                    loop: n
                } = s.params, {
                    addSlidesBefore: o,
                    addSlidesAfter: l
                } = s.params.virtual, {
                    from: d,
                    to: p,
                    slides: u,
                    slidesGrid: h,
                    offset: m
                } = s.virtual;
                s.params.cssMode || s.updateActiveIndex();
                const g = s.activeIndex || 0;
                let v, b, y;
                v = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", r ? (b = Math.floor(t / 2) + i + l, y = Math.floor(t / 2) + i + o) : (b = t + (i - 1) + l, y = (n ? t : i) + o);
                let w = g - y,
                    E = g + b;
                n || (w = Math.max(w, 0), E = Math.min(E, u.length - 1));
                let x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);

                function _() {
                    s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), a("virtualUpdate")
                }
                if (n && g >= y ? (w -= y, r || (x += s.slidesGrid[0])) : n && g < y && (w = -y, r && (x += s.slidesGrid[0])), Object.assign(s.virtual, {
                        from: w,
                        to: E,
                        offset: x,
                        slidesGrid: s.slidesGrid,
                        slidesBefore: y,
                        slidesAfter: b
                    }), d === w && p === E && !e) return s.slidesGrid !== h && x !== m && s.slides.forEach((e => {
                    e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px"
                })), s.updateProgress(), void a("virtualUpdate");
                if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
                    offset: x,
                    from: w,
                    to: E,
                    slides: function() {
                        const e = [];
                        for (let t = w; t <= E; t += 1) e.push(u[t]);
                        return e
                    }()
                }), void(s.params.virtual.renderExternalUpdate ? _() : a("virtualUpdate"));
                const S = [],
                    T = [],
                    C = e => {
                        let t = e;
                        return e < 0 ? t = u.length + e : t >= u.length && (t -= u.length), t
                    };
                if (e) s.slidesEl.querySelectorAll(`.${s.params.slideClass}, swiper-slide`).forEach((e => {
                    e.remove()
                }));
                else
                    for (let e = d; e <= p; e += 1)
                        if (e < w || e > E) {
                            const t = C(e);
                            s.slidesEl.querySelectorAll(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`).forEach((e => {
                                e.remove()
                            }))
                        } const M = n ? -u.length : 0,
                    A = n ? 2 * u.length : u.length;
                for (let t = M; t < A; t += 1)
                    if (t >= w && t <= E) {
                        const s = C(t);
                        void 0 === p || e ? T.push(s) : (t > p && T.push(s), t < d && S.push(s))
                    }
                if (T.forEach((e => {
                        s.slidesEl.append(c(u[e], e))
                    })), n)
                    for (let e = S.length - 1; e >= 0; e -= 1) {
                        const t = S[e];
                        s.slidesEl.prepend(c(u[t], t))
                    } else S.sort(((e, t) => t - e)), S.forEach((e => {
                        s.slidesEl.prepend(c(u[e], e))
                    }));
                f(s.slidesEl, ".swiper-slide, swiper-slide").forEach((e => {
                    e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px"
                })), _()
            }
            n("beforeInit", (() => {
                if (!s.params.virtual.enabled) return;
                let e;
                if (void 0 === s.passedParams.virtual.slides) {
                    const t = [...s.slidesEl.children].filter((e => e.matches(`.${s.params.slideClass}, swiper-slide`)));
                    t && t.length && (s.virtual.slides = [...t], e = !0, t.forEach(((e, t) => {
                        e.setAttribute("data-swiper-slide-index", t), s.virtual.cache[t] = e, e.remove()
                    })))
                }
                e || (s.virtual.slides = s.params.virtual.slides), s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || d()
            })), n("setTranslate", (() => {
                s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
                    d()
                }), 100)) : d())
            })), n("init update resize", (() => {
                s.params.virtual.enabled && s.params.cssMode && p(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
            })), Object.assign(s.virtual, {
                appendSlide: function(e) {
                    if ("object" == typeof e && "length" in e)
                        for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);
                    else s.virtual.slides.push(e);
                    d(!0)
                },
                prependSlide: function(e) {
                    const t = s.activeIndex;
                    let i = t + 1,
                        r = 1;
                    if (Array.isArray(e)) {
                        for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
                        i = t + e.length, r = e.length
                    } else s.virtual.slides.unshift(e);
                    if (s.params.virtual.cache) {
                        const e = s.virtual.cache,
                            t = {};
                        Object.keys(e).forEach((s => {
                            const i = e[s],
                                n = i.getAttribute("data-swiper-slide-index");
                            n && i.setAttribute("data-swiper-slide-index", parseInt(n, 10) + r), t[parseInt(s, 10) + r] = i
                        })), s.virtual.cache = t
                    }
                    d(!0), s.slideTo(i, 0)
                },
                removeSlide: function(e) {
                    if (null == e) return;
                    let t = s.activeIndex;
                    if (Array.isArray(e))
                        for (let i = e.length - 1; i >= 0; i -= 1) s.virtual.slides.splice(e[i], 1), s.params.virtual.cache && delete s.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
                    else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                    d(!0), s.slideTo(t, 0)
                },
                removeAllSlides: function() {
                    s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), d(!0), s.slideTo(0, 0)
                },
                update: d
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: r,
                emit: a
            } = e;
            const o = i(),
                l = n();

            function c(e) {
                if (!t.enabled) return;
                const {
                    rtlTranslate: s
                } = t;
                let i = e;
                i.originalEvent && (i = i.originalEvent);
                const r = i.keyCode || i.charCode,
                    n = t.params.keyboard.pageUpDown,
                    c = n && 33 === r,
                    d = n && 34 === r,
                    p = 37 === r,
                    u = 39 === r,
                    h = 38 === r,
                    f = 40 === r;
                if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && f || d)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || c)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || o.activeElement && o.activeElement.nodeName && ("input" === o.activeElement.nodeName.toLowerCase() || "textarea" === o.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (c || d || p || u || h || f)) {
                        let e = !1;
                        if (y(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === y(t.el, `.${t.params.slideActiveClass}`).length) return;
                        const i = t.el,
                            r = i.clientWidth,
                            n = i.clientHeight,
                            a = l.innerWidth,
                            o = l.innerHeight,
                            c = g(i);
                        s && (c.left -= i.scrollLeft);
                        const d = [
                            [c.left, c.top],
                            [c.left + r, c.top],
                            [c.left, c.top + n],
                            [c.left + r, c.top + n]
                        ];
                        for (let t = 0; t < d.length; t += 1) {
                            const s = d[t];
                            if (s[0] >= 0 && s[0] <= a && s[1] >= 0 && s[1] <= o) {
                                if (0 === s[0] && 0 === s[1]) continue;
                                e = !0
                            }
                        }
                        if (!e) return
                    }
                    t.isHorizontal() ? ((c || d || p || u) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), ((d || u) && !s || (c || p) && s) && t.slideNext(), ((c || p) && !s || (d || u) && s) && t.slidePrev()) : ((c || d || h || f) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (d || f) && t.slideNext(), (c || h) && t.slidePrev()), a("keyPress", r)
                }
            }

            function d() {
                t.keyboard.enabled || (o.addEventListener("keydown", c), t.keyboard.enabled = !0)
            }

            function p() {
                t.keyboard.enabled && (o.removeEventListener("keydown", c), t.keyboard.enabled = !1)
            }
            t.keyboard = {
                enabled: !1
            }, s({
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            }), r("init", (() => {
                t.params.keyboard.enabled && d()
            })), r("destroy", (() => {
                t.keyboard.enabled && p()
            })), Object.assign(t.keyboard, {
                enable: d,
                disable: p
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: i,
                emit: r
            } = e;
            const l = n();
            let c;
            s({
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null,
                    noMousewheelClass: "swiper-no-mousewheel"
                }
            }), t.mousewheel = {
                enabled: !1
            };
            let d, p = o();
            const u = [];

            function h() {
                t.enabled && (t.mouseEntered = !0)
            }

            function f() {
                t.enabled && (t.mouseEntered = !1)
            }

            function m(e) {
                return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && o() - p < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && o() - p < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), r("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), r("scroll", e.raw)), p = (new l.Date).getTime(), !1)))
            }

            function g(e) {
                let s = e,
                    i = !0;
                if (!t.enabled) return;
                if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
                const n = t.params.mousewheel;
                t.params.cssMode && s.preventDefault();
                let l = t.el;
                "container" !== t.params.mousewheel.eventsTarget && (l = document.querySelector(t.params.mousewheel.eventsTarget));
                const p = l && l.contains(s.target);
                if (!t.mouseEntered && !p && !n.releaseOnEdges) return !0;
                s.originalEvent && (s = s.originalEvent);
                let h = 0;
                const f = t.rtlTranslate ? -1 : 1,
                    g = function(e) {
                        let t = 0,
                            s = 0,
                            i = 0,
                            r = 0;
                        return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), i = 10 * t, r = 10 * s, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = r, r = 0), (i || r) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !t && (t = i < 1 ? -1 : 1), r && !s && (s = r < 1 ? -1 : 1), {
                            spinX: t,
                            spinY: s,
                            pixelX: i,
                            pixelY: r
                        }
                    }(s);
                if (n.forceToAxis)
                    if (t.isHorizontal()) {
                        if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
                        h = -g.pixelX * f
                    } else {
                        if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
                        h = -g.pixelY
                    }
                else h = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * f : -g.pixelY;
                if (0 === h) return !0;
                n.invert && (h = -h);
                let v = t.getTranslate() + h * n.sensitivity;
                if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), i = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), i && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                    const e = {
                            time: o(),
                            delta: Math.abs(h),
                            direction: Math.sign(h)
                        },
                        i = d && e.time < d.time + 500 && e.delta <= d.delta && e.direction === d.direction;
                    if (!i) {
                        d = void 0;
                        let o = t.getTranslate() + h * n.sensitivity;
                        const l = t.isBeginning,
                            p = t.isEnd;
                        if (o >= t.minTranslate() && (o = t.minTranslate()), o <= t.maxTranslate() && (o = t.maxTranslate()), t.setTransition(0), t.setTranslate(o), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!l && t.isBeginning || !p && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
                                direction: e.direction < 0 ? "next" : "prev",
                                byMousewheel: !0
                            }), t.params.freeMode.sticky) {
                            clearTimeout(c), c = void 0, u.length >= 15 && u.shift();
                            const s = u.length ? u[u.length - 1] : void 0,
                                i = u[0];
                            if (u.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) u.splice(0);
                            else if (u.length >= 15 && e.time - i.time < 500 && i.delta - e.delta >= 1 && e.delta <= 6) {
                                const s = h > 0 ? .8 : .2;
                                d = e, u.splice(0), c = a((() => {
                                    t.slideToClosest(t.params.speed, !0, void 0, s)
                                }), 0)
                            }
                            c || (c = a((() => {
                                d = e, u.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                            }), 500))
                        }
                        if (i || r("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), n.releaseOnEdges && (o === t.minTranslate() || o === t.maxTranslate())) return !0
                    }
                } else {
                    const s = {
                        time: o(),
                        delta: Math.abs(h),
                        direction: Math.sign(h),
                        raw: e
                    };
                    u.length >= 2 && u.shift();
                    const i = u.length ? u[u.length - 1] : void 0;
                    if (u.push(s), i ? (s.direction !== i.direction || s.delta > i.delta || s.time > i.time + 150) && m(s) : m(s), function(e) {
                            const s = t.params.mousewheel;
                            if (e.direction < 0) {
                                if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
                            } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
                            return !1
                        }(s)) return !0
                }
                return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
            }

            function v(e) {
                let s = t.el;
                "container" !== t.params.mousewheel.eventsTarget && (s = document.querySelector(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", h), s[e]("mouseleave", f), s[e]("wheel", g)
            }

            function b() {
                return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", g), !0) : !t.mousewheel.enabled && (v("addEventListener"), t.mousewheel.enabled = !0, !0)
            }

            function y() {
                return t.params.cssMode ? (t.wrapperEl.addEventListener(event, g), !0) : !!t.mousewheel.enabled && (v("removeEventListener"), t.mousewheel.enabled = !1, !0)
            }
            i("init", (() => {
                !t.params.mousewheel.enabled && t.params.cssMode && y(), t.params.mousewheel.enabled && b()
            })), i("destroy", (() => {
                t.params.cssMode && b(), t.mousewheel.enabled && y()
            })), Object.assign(t.mousewheel, {
                enable: b,
                disable: y
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: i,
                emit: r
            } = e;
            s({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            }), t.navigation = {
                nextEl: null,
                prevEl: null
            };
            const n = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

            function a(e) {
                let s;
                return e && "string" == typeof e && t.isElement && (s = t.el.querySelector(e), s) ? s : (e && ("string" == typeof e && (s = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.el.querySelectorAll(e).length && (s = t.el.querySelector(e))), e && !s ? e : s)
            }

            function o(e, s) {
                const i = t.params.navigation;
                (e = n(e)).forEach((e => {
                    e && (e.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = s), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](i.lockClass))
                }))
            }

            function l() {
                const {
                    nextEl: e,
                    prevEl: s
                } = t.navigation;
                if (t.params.loop) return o(s, !1), void o(e, !1);
                o(s, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind)
            }

            function c(e) {
                e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), r("navigationPrev"))
            }

            function d(e) {
                e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), r("navigationNext"))
            }

            function p() {
                const e = t.params.navigation;
                if (t.params.navigation = J(t, t.originalParams.navigation, t.params.navigation, {
                        nextEl: "swiper-button-next",
                        prevEl: "swiper-button-prev"
                    }), !e.nextEl && !e.prevEl) return;
                let s = a(e.nextEl),
                    i = a(e.prevEl);
                Object.assign(t.navigation, {
                    nextEl: s,
                    prevEl: i
                }), s = n(s), i = n(i);
                const r = (s, i) => {
                    s && s.addEventListener("click", "next" === i ? d : c), !t.enabled && s && s.classList.add(...e.lockClass.split(" "))
                };
                s.forEach((e => r(e, "next"))), i.forEach((e => r(e, "prev")))
            }

            function u() {
                let {
                    nextEl: e,
                    prevEl: s
                } = t.navigation;
                e = n(e), s = n(s);
                const i = (e, s) => {
                    e.removeEventListener("click", "next" === s ? d : c), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
                };
                e.forEach((e => i(e, "next"))), s.forEach((e => i(e, "prev")))
            }
            i("init", (() => {
                !1 === t.params.navigation.enabled ? h() : (p(), l())
            })), i("toEdge fromEdge lock unlock", (() => {
                l()
            })), i("destroy", (() => {
                u()
            })), i("enable disable", (() => {
                let {
                    nextEl: e,
                    prevEl: s
                } = t.navigation;
                e = n(e), s = n(s), [...e, ...s].filter((e => !!e)).forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.navigation.lockClass)))
            })), i("click", ((e, s) => {
                let {
                    nextEl: i,
                    prevEl: a
                } = t.navigation;
                i = n(i), a = n(a);
                const o = s.target;
                if (t.params.navigation.hideOnClick && !a.includes(o) && !i.includes(o)) {
                    if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === o || t.pagination.el.contains(o))) return;
                    let e;
                    i.length ? e = i[0].classList.contains(t.params.navigation.hiddenClass) : a.length && (e = a[0].classList.contains(t.params.navigation.hiddenClass)), r(!0 === e ? "navigationShow" : "navigationHide"), [...i, ...a].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
                }
            }));
            const h = () => {
                t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), u()
            };
            Object.assign(t.navigation, {
                enable: () => {
                    t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), p(), l()
                },
                disable: h,
                update: l,
                init: p,
                destroy: u
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: i,
                emit: r
            } = e;
            const n = "swiper-pagination";
            let a;
            s({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: e => e,
                    formatFractionTotal: e => e,
                    bulletClass: `${n}-bullet`,
                    bulletActiveClass: `${n}-bullet-active`,
                    modifierClass: `${n}-`,
                    currentClass: `${n}-current`,
                    totalClass: `${n}-total`,
                    hiddenClass: `${n}-hidden`,
                    progressbarFillClass: `${n}-progressbar-fill`,
                    progressbarOppositeClass: `${n}-progressbar-opposite`,
                    clickableClass: `${n}-clickable`,
                    lockClass: `${n}-lock`,
                    horizontalClass: `${n}-horizontal`,
                    verticalClass: `${n}-vertical`,
                    paginationDisabledClass: `${n}-disabled`
                }
            }), t.pagination = {
                el: null,
                bullets: []
            };
            let o = 0;
            const l = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

            function c() {
                return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
            }

            function d(e, s) {
                const {
                    bulletActiveClass: i
                } = t.params.pagination;
                e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${i}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${i}-${s}-${s}`))
            }

            function p(e) {
                const s = e.target.closest(ee(t.params.pagination.bulletClass));
                if (!s) return;
                e.preventDefault();
                const i = b(s) * t.params.slidesPerGroup;
                if (t.params.loop) {
                    if (t.realIndex === i) return;
                    const e = t.realIndex,
                        s = t.getSlideIndexByData(i),
                        r = t.getSlideIndexByData(t.realIndex);
                    if (s > t.slides.length - t.loopedSlides) {
                        const i = t.activeIndex;
                        t.loopFix({
                            direction: s > r ? "next" : "prev",
                            activeSlideIndex: s,
                            slideTo: !1
                        });
                        i === t.activeIndex && t.slideToLoop(e, 0, !1, !0)
                    }
                    t.slideToLoop(i)
                } else t.slideTo(i)
            }

            function u() {
                const e = t.rtl,
                    s = t.params.pagination;
                if (c()) return;
                let i, n, p = t.pagination.el;
                p = l(p);
                const u = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                    h = t.params.loop ? Math.ceil(u / t.params.slidesPerGroup) : t.snapGrid.length;
                if (t.params.loop ? (n = t.previousRealIndex || 0, i = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (i = t.snapIndex, n = t.previousSnapIndex) : (n = t.previousIndex || 0, i = t.activeIndex || 0), "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                    const r = t.pagination.bullets;
                    let l, c, u;
                    if (s.dynamicBullets && (a = E(r[0], t.isHorizontal() ? "width" : "height", !0), p.forEach((e => {
                            e.style[t.isHorizontal() ? "width" : "height"] = a * (s.dynamicMainBullets + 4) + "px"
                        })), s.dynamicMainBullets > 1 && void 0 !== n && (o += i - (n || 0), o > s.dynamicMainBullets - 1 ? o = s.dynamicMainBullets - 1 : o < 0 && (o = 0)), l = Math.max(i - o, 0), c = l + (Math.min(r.length, s.dynamicMainBullets) - 1), u = (c + l) / 2), r.forEach((e => {
                            const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                            e.classList.remove(...t)
                        })), p.length > 1) r.forEach((e => {
                        const r = b(e);
                        r === i ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (r >= l && r <= c && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), r === l && d(e, "prev"), r === c && d(e, "next"))
                    }));
                    else {
                        const e = r[i];
                        if (e && e.classList.add(...s.bulletActiveClass.split(" ")), t.isElement && r.forEach(((e, t) => {
                                e.setAttribute("part", t === i ? "bullet-active" : "bullet")
                            })), s.dynamicBullets) {
                            const e = r[l],
                                t = r[c];
                            for (let e = l; e <= c; e += 1) r[e] && r[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                            d(e, "prev"), d(t, "next")
                        }
                    }
                    if (s.dynamicBullets) {
                        const i = Math.min(r.length, s.dynamicMainBullets + 4),
                            n = (a * i - a) / 2 - u * a,
                            o = e ? "right" : "left";
                        r.forEach((e => {
                            e.style[t.isHorizontal() ? o : "top"] = `${n}px`
                        }))
                    }
                }
                p.forEach(((e, n) => {
                    if ("fraction" === s.type && (e.querySelectorAll(ee(s.currentClass)).forEach((e => {
                            e.textContent = s.formatFractionCurrent(i + 1)
                        })), e.querySelectorAll(ee(s.totalClass)).forEach((e => {
                            e.textContent = s.formatFractionTotal(h)
                        }))), "progressbar" === s.type) {
                        let r;
                        r = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                        const n = (i + 1) / h;
                        let a = 1,
                            o = 1;
                        "horizontal" === r ? a = n : o = n, e.querySelectorAll(ee(s.progressbarFillClass)).forEach((e => {
                            e.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${o})`, e.style.transitionDuration = `${t.params.speed}ms`
                        }))
                    }
                    "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, i + 1, h), 0 === n && r("paginationRender", e)) : (0 === n && r("paginationRender", e), r("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass)
                }))
            }

            function h() {
                const e = t.params.pagination;
                if (c()) return;
                const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length;
                let i = t.pagination.el;
                i = l(i);
                let n = "";
                if ("bullets" === e.type) {
                    let i = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
                    t.params.freeMode && t.params.freeMode.enabled && i > s && (i = s);
                    for (let s = 0; s < i; s += 1) e.renderBullet ? n += e.renderBullet.call(t, s, e.bulletClass) : n += `<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
                }
                "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], i.forEach((s => {
                    "custom" !== e.type && (s.innerHTML = n || ""), "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(ee(e.bulletClass)))
                })), "custom" !== e.type && r("paginationRender", i[0])
            }

            function f() {
                t.params.pagination = J(t, t.originalParams.pagination, t.params.pagination, {
                    el: "swiper-pagination"
                });
                const e = t.params.pagination;
                if (!e.el) return;
                let s;
                "string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]), s || (s = e.el), s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [...t.el.querySelectorAll(e.el)], s.length > 1 && (s = s.filter((e => y(e, ".swiper")[0] === t.el))[0])), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(t.pagination, {
                    el: s
                }), s = l(s), s.forEach((s => {
                    "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), s.classList.add(e.modifierClass + e.type), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), o = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", p), t.enabled || s.classList.add(e.lockClass)
                })))
            }

            function m() {
                const e = t.params.pagination;
                if (c()) return;
                let s = t.pagination.el;
                s && (s = l(s), s.forEach((s => {
                    s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", p))
                }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
            }
            i("changeDirection", (() => {
                if (!t.pagination || !t.pagination.el) return;
                const e = t.params.pagination;
                let {
                    el: s
                } = t.pagination;
                s = l(s), s.forEach((s => {
                    s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
                }))
            })), i("init", (() => {
                !1 === t.params.pagination.enabled ? g() : (f(), h(), u())
            })), i("activeIndexChange", (() => {
                void 0 === t.snapIndex && u()
            })), i("snapIndexChange", (() => {
                u()
            })), i("snapGridLengthChange", (() => {
                h(), u()
            })), i("destroy", (() => {
                m()
            })), i("enable disable", (() => {
                let {
                    el: e
                } = t.pagination;
                e && (e = l(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
            })), i("lock unlock", (() => {
                u()
            })), i("click", ((e, s) => {
                const i = s.target,
                    n = l(t.pagination.el);
                if (t.params.pagination.el && t.params.pagination.hideOnClick && n && n.length > 0 && !i.classList.contains(t.params.pagination.bulletClass)) {
                    if (t.navigation && (t.navigation.nextEl && i === t.navigation.nextEl || t.navigation.prevEl && i === t.navigation.prevEl)) return;
                    const e = n[0].classList.contains(t.params.pagination.hiddenClass);
                    r(!0 === e ? "paginationShow" : "paginationHide"), n.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
                }
            }));
            const g = () => {
                t.el.classList.add(t.params.pagination.paginationDisabledClass);
                let {
                    el: e
                } = t.pagination;
                e && (e = l(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), m()
            };
            Object.assign(t.pagination, {
                enable: () => {
                    t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                    let {
                        el: e
                    } = t.pagination;
                    e && (e = l(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), f(), h(), u()
                },
                disable: g,
                render: h,
                update: u,
                init: f,
                destroy: m
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: r,
                emit: n
            } = e;
            const o = i();
            let l, c, d, p, u = !1,
                h = null,
                f = null;

            function v() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                const {
                    scrollbar: e,
                    rtlTranslate: s
                } = t, {
                    dragEl: i,
                    el: r
                } = e, n = t.params.scrollbar, a = t.params.loop ? t.progressLoop : t.progress;
                let o = c,
                    l = (d - c) * a;
                s ? (l = -l, l > 0 ? (o = c - l, l = 0) : -l + c > d && (o = d + l)) : l < 0 ? (o = c + l, l = 0) : l + c > d && (o = d - l), t.isHorizontal() ? (i.style.transform = `translate3d(${l}px, 0, 0)`, i.style.width = `${o}px`) : (i.style.transform = `translate3d(0px, ${l}px, 0)`, i.style.height = `${o}px`), n.hide && (clearTimeout(h), r.style.opacity = 1, h = setTimeout((() => {
                    r.style.opacity = 0, r.style.transitionDuration = "400ms"
                }), 1e3))
            }

            function b() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                const {
                    scrollbar: e
                } = t, {
                    dragEl: s,
                    el: i
                } = e;
                s.style.width = "", s.style.height = "", d = t.isHorizontal() ? i.offsetWidth : i.offsetHeight, p = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), c = "auto" === t.params.scrollbar.dragSize ? d * p : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s.style.width = `${c}px` : s.style.height = `${c}px`, i.style.display = p >= 1 ? "none" : "", t.params.scrollbar.hide && (i.style.opacity = 0), t.params.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass)
            }

            function y(e) {
                return t.isHorizontal() ? e.clientX : e.clientY
            }

            function w(e) {
                const {
                    scrollbar: s,
                    rtlTranslate: i
                } = t, {
                    el: r
                } = s;
                let n;
                n = (y(e) - g(r)[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : c / 2)) / (d - c), n = Math.max(Math.min(n, 1), 0), i && (n = 1 - n);
                const a = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * n;
                t.updateProgress(a), t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses()
            }

            function E(e) {
                const s = t.params.scrollbar,
                    {
                        scrollbar: i,
                        wrapperEl: r
                    } = t,
                    {
                        el: a,
                        dragEl: o
                    } = i;
                u = !0, l = e.target === o ? y(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), r.style.transitionDuration = "100ms", o.style.transitionDuration = "100ms", w(e), clearTimeout(f), a.style.transitionDuration = "0ms", s.hide && (a.style.opacity = 1), t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"), n("scrollbarDragStart", e)
            }

            function x(e) {
                const {
                    scrollbar: s,
                    wrapperEl: i
                } = t, {
                    el: r,
                    dragEl: a
                } = s;
                u && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, w(e), i.style.transitionDuration = "0ms", r.style.transitionDuration = "0ms", a.style.transitionDuration = "0ms", n("scrollbarDragMove", e))
            }

            function _(e) {
                const s = t.params.scrollbar,
                    {
                        scrollbar: i,
                        wrapperEl: r
                    } = t,
                    {
                        el: o
                    } = i;
                u && (u = !1, t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "", r.style.transitionDuration = ""), s.hide && (clearTimeout(f), f = a((() => {
                    o.style.opacity = 0, o.style.transitionDuration = "400ms"
                }), 1e3)), n("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest())
            }

            function S(e) {
                const {
                    scrollbar: s,
                    params: i
                } = t, r = s.el;
                if (!r) return;
                const n = r,
                    a = !!i.passiveListeners && {
                        passive: !1,
                        capture: !1
                    },
                    l = !!i.passiveListeners && {
                        passive: !0,
                        capture: !1
                    };
                if (!n) return;
                const c = "on" === e ? "addEventListener" : "removeEventListener";
                n[c]("pointerdown", E, a), o[c]("pointermove", x, a), o[c]("pointerup", _, l)
            }

            function T() {
                const {
                    scrollbar: e,
                    el: s
                } = t;
                t.params.scrollbar = J(t, t.originalParams.scrollbar, t.params.scrollbar, {
                    el: "swiper-scrollbar"
                });
                const i = t.params.scrollbar;
                if (!i.el) return;
                let r, n;
                "string" == typeof i.el && t.isElement && (r = t.el.querySelector(i.el)), r || "string" != typeof i.el ? r || (r = i.el) : r = o.querySelectorAll(i.el), t.params.uniqueNavElements && "string" == typeof i.el && r.length > 1 && 1 === s.querySelectorAll(i.el).length && (r = s.querySelector(i.el)), r.length > 0 && (r = r[0]), r.classList.add(t.isHorizontal() ? i.horizontalClass : i.verticalClass), r && (n = r.querySelector(`.${t.params.scrollbar.dragClass}`), n || (n = m("div", t.params.scrollbar.dragClass), r.append(n))), Object.assign(e, {
                    el: r,
                    dragEl: n
                }), i.draggable && t.params.scrollbar.el && t.scrollbar.el && S("on"), r && r.classList[t.enabled ? "remove" : "add"](t.params.scrollbar.lockClass)
            }

            function C() {
                const e = t.params.scrollbar,
                    s = t.scrollbar.el;
                s && s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && S("off")
            }
            s({
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag",
                    scrollbarDisabledClass: "swiper-scrollbar-disabled",
                    horizontalClass: "swiper-scrollbar-horizontal",
                    verticalClass: "swiper-scrollbar-vertical"
                }
            }), t.scrollbar = {
                el: null,
                dragEl: null
            }, r("init", (() => {
                !1 === t.params.scrollbar.enabled ? M() : (T(), b(), v())
            })), r("update resize observerUpdate lock unlock", (() => {
                b()
            })), r("setTranslate", (() => {
                v()
            })), r("setTransition", ((e, s) => {
                ! function(e) {
                    t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`)
                }(s)
            })), r("enable disable", (() => {
                const {
                    el: e
                } = t.scrollbar;
                e && e.classList[t.enabled ? "remove" : "add"](t.params.scrollbar.lockClass)
            })), r("destroy", (() => {
                C()
            }));
            const M = () => {
                t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.el && t.scrollbar.el.classList.add(t.params.scrollbar.scrollbarDisabledClass), C()
            };
            Object.assign(t.scrollbar, {
                enable: () => {
                    t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.el && t.scrollbar.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass), T(), b(), v()
                },
                disable: M,
                updateSize: b,
                setTranslate: v,
                init: T,
                destroy: C
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: i
            } = e;
            s({
                parallax: {
                    enabled: !1
                }
            });
            const r = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
                n = (e, s) => {
                    const {
                        rtl: i
                    } = t, r = i ? -1 : 1, n = e.getAttribute("data-swiper-parallax") || "0";
                    let a = e.getAttribute("data-swiper-parallax-x"),
                        o = e.getAttribute("data-swiper-parallax-y");
                    const l = e.getAttribute("data-swiper-parallax-scale"),
                        c = e.getAttribute("data-swiper-parallax-opacity"),
                        d = e.getAttribute("data-swiper-parallax-rotate");
                    if (a || o ? (a = a || "0", o = o || "0") : t.isHorizontal() ? (a = n, o = "0") : (o = n, a = "0"), a = a.indexOf("%") >= 0 ? parseInt(a, 10) * s * r + "%" : a * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != c) {
                        const t = c - (c - 1) * (1 - Math.abs(s));
                        e.style.opacity = t
                    }
                    let p = `translate3d(${a}, ${o}, 0px)`;
                    if (null != l) {
                        p += ` scale(${l-(l-1)*(1-Math.abs(s))})`
                    }
                    if (d && null != d) {
                        p += ` rotate(${d*s*-1}deg)`
                    }
                    e.style.transform = p
                },
                a = () => {
                    const {
                        el: e,
                        slides: s,
                        progress: i,
                        snapGrid: a,
                        isElement: o
                    } = t, l = f(e, r);
                    t.isElement && l.push(...f(t.hostEl, r)), l.forEach((e => {
                        n(e, i)
                    })), s.forEach(((e, s) => {
                        let o = e.progress;
                        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (o += Math.ceil(s / 2) - i * (a.length - 1)), o = Math.min(Math.max(o, -1), 1), e.querySelectorAll(`${r}, [data-swiper-parallax-rotate]`).forEach((e => {
                            n(e, o)
                        }))
                    }))
                };
            i("beforeInit", (() => {
                t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
            })), i("init", (() => {
                t.params.parallax.enabled && a()
            })), i("setTranslate", (() => {
                t.params.parallax.enabled && a()
            })), i("setTransition", ((e, s) => {
                t.params.parallax.enabled && function(e) {
                    void 0 === e && (e = t.params.speed);
                    const {
                        el: s,
                        hostEl: i
                    } = t, n = [...s.querySelectorAll(r)];
                    t.isElement && n.push(...i.querySelectorAll(r)), n.forEach((t => {
                        let s = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (s = 0), t.style.transitionDuration = `${s}ms`
                    }))
                }(s)
            }))
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: i,
                emit: r
            } = e;
            const a = n();
            s({
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            }), t.zoom = {
                enabled: !1
            };
            let o, c, d = 1,
                p = !1;
            const u = [],
                h = {
                    originX: 0,
                    originY: 0,
                    slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    imageEl: void 0,
                    imageWrapEl: void 0,
                    maxRatio: 3
                },
                m = {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                v = {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                };
            let b = 1;

            function w() {
                if (u.length < 2) return 1;
                const e = u[0].pageX,
                    t = u[0].pageY,
                    s = u[1].pageX,
                    i = u[1].pageY;
                return Math.sqrt((s - e) ** 2 + (i - t) ** 2)
            }

            function E(e) {
                const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
                return !!e.target.matches(s) || t.slides.filter((t => t.contains(e.target))).length > 0
            }

            function x(e) {
                if ("mouse" === e.pointerType && u.splice(0, u.length), !E(e)) return;
                const s = t.params.zoom;
                if (o = !1, c = !1, u.push(e), !(u.length < 2)) {
                    if (o = !0, h.scaleStart = w(), !h.slideEl) {
                        h.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`), h.slideEl || (h.slideEl = t.slides[t.activeIndex]);
                        let i = h.slideEl.querySelector(`.${s.containerClass}`);
                        if (i && (i = i.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), h.imageEl = i, h.imageWrapEl = i ? y(h.imageEl, `.${s.containerClass}`)[0] : void 0, !h.imageWrapEl) return void(h.imageEl = void 0);
                        h.maxRatio = h.imageWrapEl.getAttribute("data-swiper-zoom") || s.maxRatio
                    }
                    if (h.imageEl) {
                        const [e, t] = function() {
                            if (u.length < 2) return {
                                x: null,
                                y: null
                            };
                            const e = h.imageEl.getBoundingClientRect();
                            return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x) / d, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y) / d]
                        }();
                        h.originX = e, h.originY = t, h.imageEl.style.transitionDuration = "0ms"
                    }
                    p = !0
                }
            }

            function _(e) {
                if (!E(e)) return;
                const s = t.params.zoom,
                    i = t.zoom,
                    r = u.findIndex((t => t.pointerId === e.pointerId));
                r >= 0 && (u[r] = e), u.length < 2 || (c = !0, h.scaleMove = w(), h.imageEl && (i.scale = h.scaleMove / h.scaleStart * d, i.scale > h.maxRatio && (i.scale = h.maxRatio - 1 + (i.scale - h.maxRatio + 1) ** .5), i.scale < s.minRatio && (i.scale = s.minRatio + 1 - (s.minRatio - i.scale + 1) ** .5), h.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`))
            }

            function S(e) {
                if (!E(e)) return;
                if ("mouse" === e.pointerType && "pointerout" === e.type) return;
                const s = t.params.zoom,
                    i = t.zoom,
                    r = u.findIndex((t => t.pointerId === e.pointerId));
                r >= 0 && u.splice(r, 1), o && c && (o = !1, c = !1, h.imageEl && (i.scale = Math.max(Math.min(i.scale, h.maxRatio), s.minRatio), h.imageEl.style.transitionDuration = `${t.params.speed}ms`, h.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`, d = i.scale, p = !1, i.scale > 1 && h.slideEl ? h.slideEl.classList.add(`${s.zoomedSlideClass}`) : i.scale <= 1 && h.slideEl && h.slideEl.classList.remove(`${s.zoomedSlideClass}`), 1 === i.scale && (h.originX = 0, h.originY = 0, h.slideEl = void 0)))
            }

            function T(e) {
                if (!E(e) || ! function(e) {
                        const s = `.${t.params.zoom.containerClass}`;
                        return !!e.target.matches(s) || [...t.hostEl.querySelectorAll(s)].filter((t => t.contains(e.target))).length > 0
                    }(e)) return;
                const s = t.zoom;
                if (!h.imageEl) return;
                if (!m.isTouched || !h.slideEl) return;
                m.isMoved || (m.width = h.imageEl.offsetWidth, m.height = h.imageEl.offsetHeight, m.startX = l(h.imageWrapEl, "x") || 0, m.startY = l(h.imageWrapEl, "y") || 0, h.slideWidth = h.slideEl.offsetWidth, h.slideHeight = h.slideEl.offsetHeight, h.imageWrapEl.style.transitionDuration = "0ms");
                const i = m.width * s.scale,
                    r = m.height * s.scale;
                if (i < h.slideWidth && r < h.slideHeight) return;
                m.minX = Math.min(h.slideWidth / 2 - i / 2, 0), m.maxX = -m.minX, m.minY = Math.min(h.slideHeight / 2 - r / 2, 0), m.maxY = -m.minY, m.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX, m.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY;
                if (Math.max(Math.abs(m.touchesCurrent.x - m.touchesStart.x), Math.abs(m.touchesCurrent.y - m.touchesStart.y)) > 5 && (t.allowClick = !1), !m.isMoved && !p) {
                    if (t.isHorizontal() && (Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x || Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x)) return void(m.isTouched = !1);
                    if (!t.isHorizontal() && (Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y || Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y)) return void(m.isTouched = !1)
                }
                e.cancelable && e.preventDefault(), e.stopPropagation(), m.isMoved = !0;
                const n = (s.scale - d) / (h.maxRatio - t.params.zoom.minRatio),
                    {
                        originX: a,
                        originY: o
                    } = h;
                m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX + n * (m.width - 2 * a), m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY + n * (m.height - 2 * o), m.currentX < m.minX && (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** .8), m.currentX > m.maxX && (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** .8), m.currentY < m.minY && (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** .8), m.currentY > m.maxY && (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** .8), v.prevPositionX || (v.prevPositionX = m.touchesCurrent.x), v.prevPositionY || (v.prevPositionY = m.touchesCurrent.y), v.prevTime || (v.prevTime = Date.now()), v.x = (m.touchesCurrent.x - v.prevPositionX) / (Date.now() - v.prevTime) / 2, v.y = (m.touchesCurrent.y - v.prevPositionY) / (Date.now() - v.prevTime) / 2, Math.abs(m.touchesCurrent.x - v.prevPositionX) < 2 && (v.x = 0), Math.abs(m.touchesCurrent.y - v.prevPositionY) < 2 && (v.y = 0), v.prevPositionX = m.touchesCurrent.x, v.prevPositionY = m.touchesCurrent.y, v.prevTime = Date.now(), h.imageWrapEl.style.transform = `translate3d(${m.currentX}px, ${m.currentY}px,0)`
            }

            function C() {
                const e = t.zoom;
                h.slideEl && t.activeIndex !== t.slides.indexOf(h.slideEl) && (h.imageEl && (h.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), h.imageWrapEl && (h.imageWrapEl.style.transform = "translate3d(0,0,0)"), h.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`), e.scale = 1, d = 1, h.slideEl = void 0, h.imageEl = void 0, h.imageWrapEl = void 0, h.originX = 0, h.originY = 0)
            }

            function M(e) {
                const s = t.zoom,
                    i = t.params.zoom;
                if (!h.slideEl) {
                    e && e.target && (h.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)), h.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? h.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : h.slideEl = t.slides[t.activeIndex]);
                    let s = h.slideEl.querySelector(`.${i.containerClass}`);
                    s && (s = s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), h.imageEl = s, h.imageWrapEl = s ? y(h.imageEl, `.${i.containerClass}`)[0] : void 0
                }
                if (!h.imageEl || !h.imageWrapEl) return;
                let r, n, o, l, c, p, u, v, b, w, E, x, _, S, T, C, M, A;
                t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), h.slideEl.classList.add(`${i.zoomedSlideClass}`), void 0 === m.touchesStart.x && e ? (r = e.pageX, n = e.pageY) : (r = m.touchesStart.x, n = m.touchesStart.y);
                const O = "number" == typeof e ? e : null;
                1 === d && O && (r = void 0, n = void 0), s.scale = O || h.imageWrapEl.getAttribute("data-swiper-zoom") || i.maxRatio, d = O || h.imageWrapEl.getAttribute("data-swiper-zoom") || i.maxRatio, !e || 1 === d && O ? (u = 0, v = 0) : (M = h.slideEl.offsetWidth, A = h.slideEl.offsetHeight, o = g(h.slideEl).left + a.scrollX, l = g(h.slideEl).top + a.scrollY, c = o + M / 2 - r, p = l + A / 2 - n, b = h.imageEl.offsetWidth, w = h.imageEl.offsetHeight, E = b * s.scale, x = w * s.scale, _ = Math.min(M / 2 - E / 2, 0), S = Math.min(A / 2 - x / 2, 0), T = -_, C = -S, u = c * s.scale, v = p * s.scale, u < _ && (u = _), u > T && (u = T), v < S && (v = S), v > C && (v = C)), O && 1 === s.scale && (h.originX = 0, h.originY = 0), h.imageWrapEl.style.transitionDuration = "300ms", h.imageWrapEl.style.transform = `translate3d(${u}px, ${v}px,0)`, h.imageEl.style.transitionDuration = "300ms", h.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`
            }

            function A() {
                const e = t.zoom,
                    s = t.params.zoom;
                if (!h.slideEl) {
                    t.params.virtual && t.params.virtual.enabled && t.virtual ? h.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : h.slideEl = t.slides[t.activeIndex];
                    let e = h.slideEl.querySelector(`.${s.containerClass}`);
                    e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), h.imageEl = e, h.imageWrapEl = e ? y(h.imageEl, `.${s.containerClass}`)[0] : void 0
                }
                h.imageEl && h.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, d = 1, h.imageWrapEl.style.transitionDuration = "300ms", h.imageWrapEl.style.transform = "translate3d(0,0,0)", h.imageEl.style.transitionDuration = "300ms", h.imageEl.style.transform = "translate3d(0,0,0) scale(1)", h.slideEl.classList.remove(`${s.zoomedSlideClass}`), h.slideEl = void 0, h.originX = 0, h.originY = 0)
            }

            function O(e) {
                const s = t.zoom;
                s.scale && 1 !== s.scale ? A() : M(e)
            }

            function k() {
                return {
                    passiveListener: !!t.params.passiveListeners && {
                        passive: !0,
                        capture: !1
                    },
                    activeListenerWithCapture: !t.params.passiveListeners || {
                        passive: !1,
                        capture: !0
                    }
                }
            }

            function L() {
                const e = t.zoom;
                if (e.enabled) return;
                e.enabled = !0;
                const {
                    passiveListener: s,
                    activeListenerWithCapture: i
                } = k();
                t.wrapperEl.addEventListener("pointerdown", x, s), t.wrapperEl.addEventListener("pointermove", _, i), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
                    t.wrapperEl.addEventListener(e, S, s)
                })), t.wrapperEl.addEventListener("pointermove", T, i)
            }

            function P() {
                const e = t.zoom;
                if (!e.enabled) return;
                e.enabled = !1;
                const {
                    passiveListener: s,
                    activeListenerWithCapture: i
                } = k();
                t.wrapperEl.removeEventListener("pointerdown", x, s), t.wrapperEl.removeEventListener("pointermove", _, i), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
                    t.wrapperEl.removeEventListener(e, S, s)
                })), t.wrapperEl.removeEventListener("pointermove", T, i)
            }
            Object.defineProperty(t.zoom, "scale", {
                get: () => b,
                set(e) {
                    if (b !== e) {
                        const t = h.imageEl,
                            s = h.slideEl;
                        r("zoomChange", e, t, s)
                    }
                    b = e
                }
            }), i("init", (() => {
                t.params.zoom.enabled && L()
            })), i("destroy", (() => {
                P()
            })), i("touchStart", ((e, s) => {
                t.zoom.enabled && function(e) {
                    const s = t.device;
                    if (!h.imageEl) return;
                    if (m.isTouched) return;
                    s.android && e.cancelable && e.preventDefault(), m.isTouched = !0;
                    const i = u.length > 0 ? u[0] : e;
                    m.touchesStart.x = i.pageX, m.touchesStart.y = i.pageY
                }(s)
            })), i("touchEnd", ((e, s) => {
                t.zoom.enabled && function() {
                    const e = t.zoom;
                    if (!h.imageEl) return;
                    if (!m.isTouched || !m.isMoved) return m.isTouched = !1, void(m.isMoved = !1);
                    m.isTouched = !1, m.isMoved = !1;
                    let s = 300,
                        i = 300;
                    const r = v.x * s,
                        n = m.currentX + r,
                        a = v.y * i,
                        o = m.currentY + a;
                    0 !== v.x && (s = Math.abs((n - m.currentX) / v.x)), 0 !== v.y && (i = Math.abs((o - m.currentY) / v.y));
                    const l = Math.max(s, i);
                    m.currentX = n, m.currentY = o;
                    const c = m.width * e.scale,
                        d = m.height * e.scale;
                    m.minX = Math.min(h.slideWidth / 2 - c / 2, 0), m.maxX = -m.minX, m.minY = Math.min(h.slideHeight / 2 - d / 2, 0), m.maxY = -m.minY, m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX), m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY), h.imageWrapEl.style.transitionDuration = `${l}ms`, h.imageWrapEl.style.transform = `translate3d(${m.currentX}px, ${m.currentY}px,0)`
                }()
            })), i("doubleTap", ((e, s) => {
                !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && O(s)
            })), i("transitionEnd", (() => {
                t.zoom.enabled && t.params.zoom.enabled && C()
            })), i("slideChange", (() => {
                t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C()
            })), Object.assign(t.zoom, {
                enable: L,
                disable: P,
                in: M,
                out: A,
                toggle: O
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: i
            } = e;

            function r(e, t) {
                const s = function() {
                    let e, t, s;
                    return (i, r) => {
                        for (t = -1, e = i.length; e - t > 1;) s = e + t >> 1, i[s] <= r ? t = s : e = s;
                        return e
                    }
                }();
                let i, r;
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (r = s(this.x, e), i = r - 1, (e - this.x[i]) * (this.y[r] - this.y[i]) / (this.x[r] - this.x[i]) + this.y[i]) : 0
                }, this
            }

            function n() {
                t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
            }
            s({
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            }), t.controller = {
                control: void 0
            }, i("beforeInit", (() => {
                if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
                    const e = document.querySelector(t.params.controller.control);
                    if (e && e.swiper) t.controller.control = e.swiper;
                    else if (e) {
                        const s = i => {
                            t.controller.control = i.detail[0], t.update(), e.removeEventListener("init", s)
                        };
                        e.addEventListener("init", s)
                    }
                } else t.controller.control = t.params.controller.control
            })), i("update", (() => {
                n()
            })), i("resize", (() => {
                n()
            })), i("observerUpdate", (() => {
                n()
            })), i("setTranslate", ((e, s, i) => {
                t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(s, i)
            })), i("setTransition", ((e, s, i) => {
                t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(s, i)
            })), Object.assign(t.controller, {
                setTranslate: function(e, s) {
                    const i = t.controller.control;
                    let n, a;
                    const o = t.constructor;

                    function l(e) {
                        if (e.destroyed) return;
                        const s = t.rtlTranslate ? -t.translate : t.translate;
                        "slide" === t.params.controller.by && (! function(e) {
                            t.controller.spline = t.params.loop ? new r(t.slidesGrid, e.slidesGrid) : new r(t.snapGrid, e.snapGrid)
                        }(e), a = -t.controller.spline.interpolate(-s)), a && "container" !== t.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), !Number.isNaN(n) && Number.isFinite(n) || (n = 1), a = (s - t.minTranslate()) * n + e.minTranslate()), t.params.controller.inverse && (a = e.maxTranslate() - a), e.updateProgress(a), e.setTranslate(a, t), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    if (Array.isArray(i))
                        for (let e = 0; e < i.length; e += 1) i[e] !== s && i[e] instanceof o && l(i[e]);
                    else i instanceof o && s !== i && l(i)
                },
                setTransition: function(e, s) {
                    const i = t.constructor,
                        r = t.controller.control;
                    let n;

                    function o(s) {
                        s.destroyed || (s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && a((() => {
                            s.updateAutoHeight()
                        })), w(s.wrapperEl, (() => {
                            r && s.transitionEnd()
                        }))))
                    }
                    if (Array.isArray(r))
                        for (n = 0; n < r.length; n += 1) r[n] !== s && r[n] instanceof i && o(r[n]);
                    else r instanceof i && s !== r && o(r)
                }
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: i
            } = e;
            s({
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group",
                    id: null
                }
            }), t.a11y = {
                clicked: !1
            };
            let r = null;

            function n(e) {
                const t = r;
                0 !== t.length && (t.innerHTML = "", t.innerHTML = e)
            }
            const a = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

            function o(e) {
                (e = a(e)).forEach((e => {
                    e.setAttribute("tabIndex", "0")
                }))
            }

            function l(e) {
                (e = a(e)).forEach((e => {
                    e.setAttribute("tabIndex", "-1")
                }))
            }

            function c(e, t) {
                (e = a(e)).forEach((e => {
                    e.setAttribute("role", t)
                }))
            }

            function d(e, t) {
                (e = a(e)).forEach((e => {
                    e.setAttribute("aria-roledescription", t)
                }))
            }

            function p(e, t) {
                (e = a(e)).forEach((e => {
                    e.setAttribute("aria-label", t)
                }))
            }

            function u(e) {
                (e = a(e)).forEach((e => {
                    e.setAttribute("aria-disabled", !0)
                }))
            }

            function h(e) {
                (e = a(e)).forEach((e => {
                    e.setAttribute("aria-disabled", !1)
                }))
            }

            function f(e) {
                if (13 !== e.keyCode && 32 !== e.keyCode) return;
                const s = t.params.a11y,
                    i = e.target;
                t.pagination && t.pagination.el && (i === t.pagination.el || t.pagination.el.contains(e.target)) && !e.target.matches(ee(t.params.pagination.bulletClass)) || (t.navigation && t.navigation.nextEl && i === t.navigation.nextEl && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? n(s.lastSlideMessage) : n(s.nextSlideMessage)), t.navigation && t.navigation.prevEl && i === t.navigation.prevEl && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? n(s.firstSlideMessage) : n(s.prevSlideMessage)), t.pagination && i.matches(ee(t.params.pagination.bulletClass)) && i.click())
            }

            function g() {
                return t.pagination && t.pagination.bullets && t.pagination.bullets.length
            }

            function v() {
                return g() && t.params.pagination.clickable
            }
            const y = (e, t, s) => {
                    o(e), "BUTTON" !== e.tagName && (c(e, "button"), e.addEventListener("keydown", f)), p(e, s),
                        function(e, t) {
                            (e = a(e)).forEach((e => {
                                e.setAttribute("aria-controls", t)
                            }))
                        }(e, t)
                },
                w = () => {
                    t.a11y.clicked = !0
                },
                E = () => {
                    requestAnimationFrame((() => {
                        requestAnimationFrame((() => {
                            t.destroyed || (t.a11y.clicked = !1)
                        }))
                    }))
                },
                x = e => {
                    if (t.a11y.clicked) return;
                    const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
                    if (!s || !t.slides.includes(s)) return;
                    const i = t.slides.indexOf(s) === t.activeIndex,
                        r = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
                    i || r || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0))
                },
                _ = () => {
                    const e = t.params.a11y;
                    e.itemRoleDescriptionMessage && d(t.slides, e.itemRoleDescriptionMessage), e.slideRole && c(t.slides, e.slideRole);
                    const s = t.slides.length;
                    e.slideLabelMessage && t.slides.forEach(((i, r) => {
                        const n = t.params.loop ? parseInt(i.getAttribute("data-swiper-slide-index"), 10) : r;
                        p(i, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s))
                    }))
                },
                S = () => {
                    const e = t.params.a11y;
                    t.el.append(r);
                    const s = t.el;
                    e.containerRoleDescriptionMessage && d(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
                    const i = t.wrapperEl,
                        n = e.id || i.getAttribute("id") || `swiper-wrapper-${o=16,void 0===o&&(o=16),"x".repeat(o).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;
                    var o;
                    const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                    var c;
                    c = n, a(i).forEach((e => {
                            e.setAttribute("id", c)
                        })),
                        function(e, t) {
                            (e = a(e)).forEach((e => {
                                e.setAttribute("aria-live", t)
                            }))
                        }(i, l), _();
                    let {
                        nextEl: u,
                        prevEl: h
                    } = t.navigation ? t.navigation : {};
                    if (u = a(u), h = a(h), u && u.forEach((t => y(t, n, e.nextSlideMessage))), h && h.forEach((t => y(t, n, e.prevSlideMessage))), v()) {
                        (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach((e => {
                            e.addEventListener("keydown", f)
                        }))
                    }
                    t.el.addEventListener("focus", x, !0), t.el.addEventListener("pointerdown", w, !0), t.el.addEventListener("pointerup", E, !0)
                };
            i("beforeInit", (() => {
                r = m("span", t.params.a11y.notificationClass), r.setAttribute("aria-live", "assertive"), r.setAttribute("aria-atomic", "true")
            })), i("afterInit", (() => {
                t.params.a11y.enabled && S()
            })), i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
                t.params.a11y.enabled && _()
            })), i("fromEdge toEdge afterInit lock unlock", (() => {
                t.params.a11y.enabled && function() {
                    if (t.params.loop || t.params.rewind || !t.navigation) return;
                    const {
                        nextEl: e,
                        prevEl: s
                    } = t.navigation;
                    s && (t.isBeginning ? (u(s), l(s)) : (h(s), o(s))), e && (t.isEnd ? (u(e), l(e)) : (h(e), o(e)))
                }()
            })), i("paginationUpdate", (() => {
                t.params.a11y.enabled && function() {
                    const e = t.params.a11y;
                    g() && t.pagination.bullets.forEach((s => {
                        t.params.pagination.clickable && (o(s), t.params.pagination.renderBullet || (c(s, "button"), p(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, b(s) + 1)))), s.matches(ee(t.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current")
                    }))
                }()
            })), i("destroy", (() => {
                t.params.a11y.enabled && function() {
                    r && r.remove();
                    let {
                        nextEl: e,
                        prevEl: s
                    } = t.navigation ? t.navigation : {};
                    e = a(e), s = a(s), e && e.forEach((e => e.removeEventListener("keydown", f))), s && s.forEach((e => e.removeEventListener("keydown", f))), v() && (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach((e => {
                        e.removeEventListener("keydown", f)
                    }));
                    t.el.removeEventListener("focus", x, !0), t.el.removeEventListener("pointerdown", w, !0), t.el.removeEventListener("pointerup", E, !0)
                }()
            }))
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: i
            } = e;
            s({
                history: {
                    enabled: !1,
                    root: "",
                    replaceState: !1,
                    key: "slides",
                    keepQuery: !1
                }
            });
            let r = !1,
                a = {};
            const o = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
                l = e => {
                    const t = n();
                    let s;
                    s = e ? new URL(e) : t.location;
                    const i = s.pathname.slice(1).split("/").filter((e => "" !== e)),
                        r = i.length;
                    return {
                        key: i[r - 2],
                        value: i[r - 1]
                    }
                },
                c = (e, s) => {
                    const i = n();
                    if (!r || !t.params.history.enabled) return;
                    let a;
                    a = t.params.url ? new URL(t.params.url) : i.location;
                    const l = t.slides[s];
                    let c = o(l.getAttribute("data-history"));
                    if (t.params.history.root.length > 0) {
                        let s = t.params.history.root;
                        "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), c = `${s}/${e?`${e}/`:""}${c}`
                    } else a.pathname.includes(e) || (c = `${e?`${e}/`:""}${c}`);
                    t.params.history.keepQuery && (c += a.search);
                    const d = i.history.state;
                    d && d.value === c || (t.params.history.replaceState ? i.history.replaceState({
                        value: c
                    }, null, c) : i.history.pushState({
                        value: c
                    }, null, c))
                },
                d = (e, s, i) => {
                    if (s)
                        for (let r = 0, n = t.slides.length; r < n; r += 1) {
                            const n = t.slides[r];
                            if (o(n.getAttribute("data-history")) === s) {
                                const s = t.getSlideIndex(n);
                                t.slideTo(s, e, i)
                            }
                        } else t.slideTo(0, e, i)
                },
                p = () => {
                    a = l(t.params.url), d(t.params.speed, a.value, !1)
                };
            i("init", (() => {
                t.params.history.enabled && (() => {
                    const e = n();
                    if (t.params.history) {
                        if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void(t.params.hashNavigation.enabled = !0);
                        r = !0, a = l(t.params.url), a.key || a.value ? (d(0, a.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p)) : t.params.history.replaceState || e.addEventListener("popstate", p)
                    }
                })()
            })), i("destroy", (() => {
                t.params.history.enabled && (() => {
                    const e = n();
                    t.params.history.replaceState || e.removeEventListener("popstate", p)
                })()
            })), i("transitionEnd _freeModeNoMomentumRelease", (() => {
                r && c(t.params.history.key, t.activeIndex)
            })), i("slideChange", (() => {
                r && t.params.cssMode && c(t.params.history.key, t.activeIndex)
            }))
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                emit: r,
                on: a
            } = e, o = !1;
            const l = i(),
                c = n();
            s({
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1,
                    getSlideIndex(e, s) {
                        if (t.virtual && t.params.virtual.enabled) {
                            const e = t.slides.filter((e => e.getAttribute("data-hash") === s))[0];
                            if (!e) return 0;
                            return parseInt(e.getAttribute("data-swiper-slide-index"), 10)
                        }
                        return t.getSlideIndex(f(t.slidesEl, `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0])
                    }
                }
            });
            const d = () => {
                    r("hashChange");
                    const e = l.location.hash.replace("#", ""),
                        s = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex];
                    if (e !== (s ? s.getAttribute("data-hash") : "")) {
                        const s = t.params.hashNavigation.getSlideIndex(t, e);
                        if (void 0 === s || Number.isNaN(s)) return;
                        t.slideTo(s)
                    }
                },
                p = () => {
                    if (!o || !t.params.hashNavigation.enabled) return;
                    const e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex],
                        s = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
                    t.params.hashNavigation.replaceState && c.history && c.history.replaceState ? (c.history.replaceState(null, null, `#${s}` || ""), r("hashSet")) : (l.location.hash = s || "", r("hashSet"))
                };
            a("init", (() => {
                t.params.hashNavigation.enabled && (() => {
                    if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                    o = !0;
                    const e = l.location.hash.replace("#", "");
                    if (e) {
                        const s = 0,
                            i = t.params.hashNavigation.getSlideIndex(t, e);
                        t.slideTo(i || 0, s, t.params.runCallbacksOnInit, !0)
                    }
                    t.params.hashNavigation.watchState && c.addEventListener("hashchange", d)
                })()
            })), a("destroy", (() => {
                t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && c.removeEventListener("hashchange", d)
            })), a("transitionEnd _freeModeNoMomentumRelease", (() => {
                o && p()
            })), a("slideChange", (() => {
                o && t.params.cssMode && p()
            }))
        }, function(e) {
            let t, s, {
                swiper: r,
                extendParams: n,
                on: a,
                emit: o,
                params: l
            } = e;
            r.autoplay = {
                running: !1,
                paused: !1,
                timeLeft: 0
            }, n({
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            });
            let c, d, p, u, h, f, m, g = l && l.autoplay ? l.autoplay.delay : 3e3,
                v = l && l.autoplay ? l.autoplay.delay : 3e3,
                b = (new Date).getTime;

            function y(e) {
                r && !r.destroyed && r.wrapperEl && e.target === r.wrapperEl && (r.wrapperEl.removeEventListener("transitionend", y), T())
            }
            const w = () => {
                    if (r.destroyed || !r.autoplay.running) return;
                    r.autoplay.paused ? d = !0 : d && (v = c, d = !1);
                    const e = r.autoplay.paused ? c : b + v - (new Date).getTime();
                    r.autoplay.timeLeft = e, o("autoplayTimeLeft", e, e / g), s = requestAnimationFrame((() => {
                        w()
                    }))
                },
                E = e => {
                    if (r.destroyed || !r.autoplay.running) return;
                    cancelAnimationFrame(s), w();
                    let i = void 0 === e ? r.params.autoplay.delay : e;
                    g = r.params.autoplay.delay, v = r.params.autoplay.delay;
                    const n = (() => {
                        let e;
                        if (e = r.virtual && r.params.virtual.enabled ? r.slides.filter((e => e.classList.contains("swiper-slide-active")))[0] : r.slides[r.activeIndex], !e) return;
                        return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
                    })();
                    !Number.isNaN(n) && n > 0 && void 0 === e && (i = n, g = n, v = n), c = i;
                    const a = r.params.speed,
                        l = () => {
                            r && !r.destroyed && (r.params.autoplay.reverseDirection ? !r.isBeginning || r.params.loop || r.params.rewind ? (r.slidePrev(a, !0, !0), o("autoplay")) : r.params.autoplay.stopOnLastSlide || (r.slideTo(r.slides.length - 1, a, !0, !0), o("autoplay")) : !r.isEnd || r.params.loop || r.params.rewind ? (r.slideNext(a, !0, !0), o("autoplay")) : r.params.autoplay.stopOnLastSlide || (r.slideTo(0, a, !0, !0), o("autoplay")), r.params.cssMode && (b = (new Date).getTime(), requestAnimationFrame((() => {
                                E()
                            }))))
                        };
                    return i > 0 ? (clearTimeout(t), t = setTimeout((() => {
                        l()
                    }), i)) : requestAnimationFrame((() => {
                        l()
                    })), i
                },
                x = () => {
                    r.autoplay.running = !0, E(), o("autoplayStart")
                },
                _ = () => {
                    r.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(s), o("autoplayStop")
                },
                S = (e, s) => {
                    if (r.destroyed || !r.autoplay.running) return;
                    clearTimeout(t), e || (m = !0);
                    const i = () => {
                        o("autoplayPause"), r.params.autoplay.waitForTransition ? r.wrapperEl.addEventListener("transitionend", y) : T()
                    };
                    if (r.autoplay.paused = !0, s) return f && (c = r.params.autoplay.delay), f = !1, void i();
                    const n = c || r.params.autoplay.delay;
                    c = n - ((new Date).getTime() - b), r.isEnd && c < 0 && !r.params.loop || (c < 0 && (c = 0), i())
                },
                T = () => {
                    r.isEnd && c < 0 && !r.params.loop || r.destroyed || !r.autoplay.running || (b = (new Date).getTime(), m ? (m = !1, E(c)) : E(), r.autoplay.paused = !1, o("autoplayResume"))
                },
                C = () => {
                    if (r.destroyed || !r.autoplay.running) return;
                    const e = i();
                    "hidden" === e.visibilityState && (m = !0, S(!0)), "visible" === e.visibilityState && T()
                },
                M = e => {
                    "mouse" === e.pointerType && (m = !0, r.animating || r.autoplay.paused || S(!0))
                },
                A = e => {
                    "mouse" === e.pointerType && r.autoplay.paused && T()
                };
            a("init", (() => {
                r.params.autoplay.enabled && (r.params.autoplay.pauseOnMouseEnter && (r.el.addEventListener("pointerenter", M), r.el.addEventListener("pointerleave", A)), i().addEventListener("visibilitychange", C), b = (new Date).getTime(), x())
            })), a("destroy", (() => {
                r.el.removeEventListener("pointerenter", M), r.el.removeEventListener("pointerleave", A), i().removeEventListener("visibilitychange", C), r.autoplay.running && _()
            })), a("beforeTransitionStart", ((e, t, s) => {
                !r.destroyed && r.autoplay.running && (s || !r.params.autoplay.disableOnInteraction ? S(!0, !0) : _())
            })), a("sliderFirstMove", (() => {
                !r.destroyed && r.autoplay.running && (r.params.autoplay.disableOnInteraction ? _() : (p = !0, u = !1, m = !1, h = setTimeout((() => {
                    m = !0, u = !0, S(!0)
                }), 200)))
            })), a("touchEnd", (() => {
                if (!r.destroyed && r.autoplay.running && p) {
                    if (clearTimeout(h), clearTimeout(t), r.params.autoplay.disableOnInteraction) return u = !1, void(p = !1);
                    u && r.params.cssMode && T(), u = !1, p = !1
                }
            })), a("slideChange", (() => {
                !r.destroyed && r.autoplay.running && (f = !0)
            })), Object.assign(r.autoplay, {
                start: x,
                stop: _,
                pause: S,
                resume: T
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: r
            } = e;
            s({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs"
                }
            });
            let n = !1,
                a = !1;

            function o() {
                const e = t.thumbs.swiper;
                if (!e || e.destroyed) return;
                const s = e.clickedIndex,
                    i = e.clickedSlide;
                if (i && i.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
                if (null == s) return;
                let r;
                r = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s, t.params.loop ? t.slideToLoop(r) : t.slideTo(r)
            }

            function l() {
                const {
                    thumbs: e
                } = t.params;
                if (n) return !1;
                n = !0;
                const s = t.constructor;
                if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), Object.assign(t.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), t.thumbs.swiper.update();
                else if (c(e.swiper)) {
                    const i = Object.assign({}, e.swiper);
                    Object.assign(i, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), t.thumbs.swiper = new s(i), a = !0
                }
                return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", o), !0
            }

            function d(e) {
                const s = t.thumbs.swiper;
                if (!s || s.destroyed) return;
                const i = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
                let r = 1;
                const n = t.params.thumbs.slideThumbActiveClass;
                if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (r = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (r = 1), r = Math.floor(r), s.slides.forEach((e => e.classList.remove(n))), s.params.loop || s.params.virtual && s.params.virtual.enabled)
                    for (let e = 0; e < r; e += 1) f(s.slidesEl, `[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e => {
                        e.classList.add(n)
                    }));
                else
                    for (let e = 0; e < r; e += 1) s.slides[t.realIndex + e] && s.slides[t.realIndex + e].classList.add(n);
                const a = t.params.thumbs.autoScrollOffset,
                    o = a && !s.params.loop;
                if (t.realIndex !== s.realIndex || o) {
                    const r = s.activeIndex;
                    let n, l;
                    if (s.params.loop) {
                        const e = s.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`))[0];
                        n = s.slides.indexOf(e), l = t.activeIndex > t.previousIndex ? "next" : "prev"
                    } else n = t.realIndex, l = n > t.previousIndex ? "next" : "prev";
                    o && (n += "next" === l ? a : -1 * a), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(n) < 0 && (s.params.centeredSlides ? n = n > r ? n - Math.floor(i / 2) + 1 : n + Math.floor(i / 2) - 1 : n > r && s.params.slidesPerGroup, s.slideTo(n, e ? 0 : void 0))
                }
            }
            t.thumbs = {
                swiper: null
            }, r("beforeInit", (() => {
                const {
                    thumbs: e
                } = t.params;
                if (e && e.swiper)
                    if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
                        const s = i(),
                            r = () => {
                                const i = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
                                if (i && i.swiper) e.swiper = i.swiper, l(), d(!0);
                                else if (i) {
                                    const s = r => {
                                        e.swiper = r.detail[0], i.removeEventListener("init", s), l(), d(!0), e.swiper.update(), t.update()
                                    };
                                    i.addEventListener("init", s)
                                }
                                return i
                            },
                            n = () => {
                                if (t.destroyed) return;
                                r() || requestAnimationFrame(n)
                            };
                        requestAnimationFrame(n)
                    } else l(), d(!0)
            })), r("slideChange update resize observerUpdate", (() => {
                d()
            })), r("setTransition", ((e, s) => {
                const i = t.thumbs.swiper;
                i && !i.destroyed && i.setTransition(s)
            })), r("beforeDestroy", (() => {
                const e = t.thumbs.swiper;
                e && !e.destroyed && a && e.destroy()
            })), Object.assign(t.thumbs, {
                init: l,
                update: d
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                emit: i,
                once: r
            } = e;
            s({
                freeMode: {
                    enabled: !1,
                    momentum: !0,
                    momentumRatio: 1,
                    momentumBounce: !0,
                    momentumBounceRatio: 1,
                    momentumVelocityRatio: 1,
                    sticky: !1,
                    minimumVelocity: .02
                }
            }), Object.assign(t, {
                freeMode: {
                    onTouchStart: function() {
                        if (t.params.cssMode) return;
                        const e = t.getTranslate();
                        t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                            currentPos: t.rtl ? t.translate : -t.translate
                        })
                    },
                    onTouchMove: function() {
                        if (t.params.cssMode) return;
                        const {
                            touchEventsData: e,
                            touches: s
                        } = t;
                        0 === e.velocities.length && e.velocities.push({
                            position: s[t.isHorizontal() ? "startX" : "startY"],
                            time: e.touchStartTime
                        }), e.velocities.push({
                            position: s[t.isHorizontal() ? "currentX" : "currentY"],
                            time: o()
                        })
                    },
                    onTouchEnd: function(e) {
                        let {
                            currentPos: s
                        } = e;
                        if (t.params.cssMode) return;
                        const {
                            params: n,
                            wrapperEl: a,
                            rtlTranslate: l,
                            snapGrid: c,
                            touchEventsData: d
                        } = t, p = o() - d.touchStartTime;
                        if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
                        else if (s > -t.maxTranslate()) t.slides.length < c.length ? t.slideTo(c.length - 1) : t.slideTo(t.slides.length - 1);
                        else {
                            if (n.freeMode.momentum) {
                                if (d.velocities.length > 1) {
                                    const e = d.velocities.pop(),
                                        s = d.velocities.pop(),
                                        i = e.position - s.position,
                                        r = e.time - s.time;
                                    t.velocity = i / r, t.velocity /= 2, Math.abs(t.velocity) < n.freeMode.minimumVelocity && (t.velocity = 0), (r > 150 || o() - e.time > 300) && (t.velocity = 0)
                                } else t.velocity = 0;
                                t.velocity *= n.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                                let e = 1e3 * n.freeMode.momentumRatio;
                                const s = t.velocity * e;
                                let p = t.translate + s;
                                l && (p = -p);
                                let u, h = !1;
                                const f = 20 * Math.abs(t.velocity) * n.freeMode.momentumBounceRatio;
                                let m;
                                if (p < t.maxTranslate()) n.freeMode.momentumBounce ? (p + t.maxTranslate() < -f && (p = t.maxTranslate() - f), u = t.maxTranslate(), h = !0, d.allowMomentumBounce = !0) : p = t.maxTranslate(), n.loop && n.centeredSlides && (m = !0);
                                else if (p > t.minTranslate()) n.freeMode.momentumBounce ? (p - t.minTranslate() > f && (p = t.minTranslate() + f), u = t.minTranslate(), h = !0, d.allowMomentumBounce = !0) : p = t.minTranslate(), n.loop && n.centeredSlides && (m = !0);
                                else if (n.freeMode.sticky) {
                                    let e;
                                    for (let t = 0; t < c.length; t += 1)
                                        if (c[t] > -p) {
                                            e = t;
                                            break
                                        }
                                    p = Math.abs(c[e] - p) < Math.abs(c[e - 1] - p) || "next" === t.swipeDirection ? c[e] : c[e - 1], p = -p
                                }
                                if (m && r("transitionEnd", (() => {
                                        t.loopFix()
                                    })), 0 !== t.velocity) {
                                    if (e = l ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), n.freeMode.sticky) {
                                        const s = Math.abs((l ? -p : p) - t.translate),
                                            i = t.slidesSizesGrid[t.activeIndex];
                                        e = s < i ? n.speed : s < 2 * i ? 1.5 * n.speed : 2.5 * n.speed
                                    }
                                } else if (n.freeMode.sticky) return void t.slideToClosest();
                                n.freeMode.momentumBounce && h ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, w(a, (() => {
                                    t && !t.destroyed && d.allowMomentumBounce && (i("momentumBounce"), t.setTransition(n.speed), setTimeout((() => {
                                        t.setTranslate(u), w(a, (() => {
                                            t && !t.destroyed && t.transitionEnd()
                                        }))
                                    }), 0))
                                }))) : t.velocity ? (i("_freeModeNoMomentumRelease"), t.updateProgress(p), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, w(a, (() => {
                                    t && !t.destroyed && t.transitionEnd()
                                })))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else {
                                if (n.freeMode.sticky) return void t.slideToClosest();
                                n.freeMode && i("_freeModeNoMomentumRelease")
                            }(!n.freeMode.momentum || p >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                        }
                    }
                }
            })
        }, function(e) {
            let t, s, i, {
                swiper: r,
                extendParams: n
            } = e;
            n({
                grid: {
                    rows: 1,
                    fill: "column"
                }
            });
            const a = () => {
                let e = r.params.spaceBetween;
                return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * r.size : "string" == typeof e && (e = parseFloat(e)), e
            };
            r.grid = {
                initSlides: e => {
                    const {
                        slidesPerView: n
                    } = r.params, {
                        rows: a,
                        fill: o
                    } = r.params.grid;
                    i = Math.floor(e / a), t = Math.floor(e / a) === e / a ? e : Math.ceil(e / a) * a, "auto" !== n && "row" === o && (t = Math.max(t, n * a)), s = t / a
                },
                updateSlide: (e, n, o, l) => {
                    const {
                        slidesPerGroup: c
                    } = r.params, d = a(), {
                        rows: p,
                        fill: u
                    } = r.params.grid;
                    let h, f, m;
                    if ("row" === u && c > 1) {
                        const s = Math.floor(e / (c * p)),
                            i = e - p * c * s,
                            r = 0 === s ? c : Math.min(Math.ceil((o - s * p * c) / p), c);
                        m = Math.floor(i / r), f = i - m * r + s * c, h = f + m * t / p, n.style.order = h
                    } else "column" === u ? (f = Math.floor(e / p), m = e - f * p, (f > i || f === i && m === p - 1) && (m += 1, m >= p && (m = 0, f += 1))) : (m = Math.floor(e / s), f = e - m * s);
                    n.row = m, n.column = f, n.style[l("margin-top")] = 0 !== m ? d && `${d}px` : ""
                },
                updateWrapperSize: (e, s, i) => {
                    const {
                        centeredSlides: n,
                        roundLengths: o
                    } = r.params, l = a(), {
                        rows: c
                    } = r.params.grid;
                    if (r.virtualSize = (e + l) * t, r.virtualSize = Math.ceil(r.virtualSize / c) - l, r.wrapperEl.style[i("width")] = `${r.virtualSize+l}px`, n) {
                        const e = [];
                        for (let t = 0; t < s.length; t += 1) {
                            let i = s[t];
                            o && (i = Math.floor(i)), s[t] < r.virtualSize + s[0] && e.push(i)
                        }
                        s.splice(0, s.length), s.push(...e)
                    }
                }
            }
        }, function(e) {
            let {
                swiper: t
            } = e;
            Object.assign(t, {
                appendSlide: te.bind(t),
                prependSlide: se.bind(t),
                addSlide: ie.bind(t),
                removeSlide: re.bind(t),
                removeAllSlides: ne.bind(t)
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: i
            } = e;
            s({
                fadeEffect: {
                    crossFade: !1
                }
            }), ae({
                effect: "fade",
                swiper: t,
                on: i,
                setTranslate: () => {
                    const {
                        slides: e
                    } = t;
                    t.params.fadeEffect;
                    for (let s = 0; s < e.length; s += 1) {
                        const e = t.slides[s];
                        let i = -e.swiperSlideOffset;
                        t.params.virtualTranslate || (i -= t.translate);
                        let r = 0;
                        t.isHorizontal() || (r = i, i = 0);
                        const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0),
                            a = oe(0, e);
                        a.style.opacity = n, a.style.transform = `translate3d(${i}px, ${r}px, 0px)`
                    }
                },
                setTransition: e => {
                    const s = t.slides.map((e => h(e)));
                    s.forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    })), le({
                        swiper: t,
                        duration: e,
                        transformElements: s,
                        allSlides: !0
                    })
                },
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: i
            } = e;
            s({
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            });
            const r = (e, t, s) => {
                let i = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                    r = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
                i || (i = m("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "left" : "top")).split(" ")), e.append(i)), r || (r = m("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "right" : "bottom")).split(" ")), e.append(r)), i && (i.style.opacity = Math.max(-t, 0)), r && (r.style.opacity = Math.max(t, 0))
            };
            ae({
                effect: "cube",
                swiper: t,
                on: i,
                setTranslate: () => {
                    const {
                        el: e,
                        wrapperEl: s,
                        slides: i,
                        width: n,
                        height: a,
                        rtlTranslate: o,
                        size: l,
                        browser: c
                    } = t, d = t.params.cubeEffect, p = t.isHorizontal(), u = t.virtual && t.params.virtual.enabled;
                    let h, f = 0;
                    d.shadow && (p ? (h = t.wrapperEl.querySelector(".swiper-cube-shadow"), h || (h = m("div", "swiper-cube-shadow"), t.wrapperEl.append(h)), h.style.height = `${n}px`) : (h = e.querySelector(".swiper-cube-shadow"), h || (h = m("div", "swiper-cube-shadow"), e.append(h))));
                    for (let e = 0; e < i.length; e += 1) {
                        const t = i[e];
                        let s = e;
                        u && (s = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
                        let n = 90 * s,
                            a = Math.floor(n / 360);
                        o && (n = -n, a = Math.floor(-n / 360));
                        const c = Math.max(Math.min(t.progress, 1), -1);
                        let h = 0,
                            m = 0,
                            g = 0;
                        s % 4 == 0 ? (h = 4 * -a * l, g = 0) : (s - 1) % 4 == 0 ? (h = 0, g = 4 * -a * l) : (s - 2) % 4 == 0 ? (h = l + 4 * a * l, g = l) : (s - 3) % 4 == 0 && (h = -l, g = 3 * l + 4 * l * a), o && (h = -h), p || (m = h, h = 0);
                        const v = `rotateX(${p?0:-n}deg) rotateY(${p?n:0}deg) translate3d(${h}px, ${m}px, ${g}px)`;
                        c <= 1 && c > -1 && (f = 90 * s + 90 * c, o && (f = 90 * -s - 90 * c)), t.style.transform = v, d.slideShadows && r(t, c, p)
                    }
                    if (s.style.transformOrigin = `50% 50% -${l/2}px`, s.style["-webkit-transform-origin"] = `50% 50% -${l/2}px`, d.shadow)
                        if (p) h.style.transform = `translate3d(0px, ${n/2+d.shadowOffset}px, ${-n/2}px) rotateX(90deg) rotateZ(0deg) scale(${d.shadowScale})`;
                        else {
                            const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                                t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                                s = d.shadowScale,
                                i = d.shadowScale / t,
                                r = d.shadowOffset;
                            h.style.transform = `scale3d(${s}, 1, ${i}) translate3d(0px, ${a/2+r}px, ${-a/2/i}px) rotateX(-90deg)`
                        }
                    const g = (c.isSafari || c.isWebView) && c.needPerspectiveFix ? -l / 2 : 0;
                    s.style.transform = `translate3d(0px,0,${g}px) rotateX(${t.isHorizontal()?0:f}deg) rotateY(${t.isHorizontal()?-f:0}deg)`, s.style.setProperty("--swiper-cube-translate-z", `${g}px`)
                },
                setTransition: e => {
                    const {
                        el: s,
                        slides: i
                    } = t;
                    if (i.forEach((t => {
                            t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                                t.style.transitionDuration = `${e}ms`
                            }))
                        })), t.params.cubeEffect.shadow && !t.isHorizontal()) {
                        const t = s.querySelector(".swiper-cube-shadow");
                        t && (t.style.transitionDuration = `${e}ms`)
                    }
                },
                recreateShadows: () => {
                    const e = t.isHorizontal();
                    t.slides.forEach((t => {
                        const s = Math.max(Math.min(t.progress, 1), -1);
                        r(t, s, e)
                    }))
                },
                getEffectParams: () => t.params.cubeEffect,
                perspective: () => !0,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0
                })
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: i
            } = e;
            s({
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            });
            const r = (e, s) => {
                let i = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                    r = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
                i || (i = ce("flip", e, t.isHorizontal() ? "left" : "top")), r || (r = ce("flip", e, t.isHorizontal() ? "right" : "bottom")), i && (i.style.opacity = Math.max(-s, 0)), r && (r.style.opacity = Math.max(s, 0))
            };
            ae({
                effect: "flip",
                swiper: t,
                on: i,
                setTranslate: () => {
                    const {
                        slides: e,
                        rtlTranslate: s
                    } = t, i = t.params.flipEffect;
                    for (let n = 0; n < e.length; n += 1) {
                        const a = e[n];
                        let o = a.progress;
                        t.params.flipEffect.limitRotation && (o = Math.max(Math.min(a.progress, 1), -1));
                        const l = a.swiperSlideOffset;
                        let c = -180 * o,
                            d = 0,
                            p = t.params.cssMode ? -l - t.translate : -l,
                            u = 0;
                        t.isHorizontal() ? s && (c = -c) : (u = p, p = 0, d = -c, c = 0), a.style.zIndex = -Math.abs(Math.round(o)) + e.length, i.slideShadows && r(a, o);
                        const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${d}deg) rotateY(${c}deg)`;
                        oe(0, a).style.transform = h
                    }
                },
                setTransition: e => {
                    const s = t.slides.map((e => h(e)));
                    s.forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    })), le({
                        swiper: t,
                        duration: e,
                        transformElements: s
                    })
                },
                recreateShadows: () => {
                    t.params.flipEffect, t.slides.forEach((e => {
                        let s = e.progress;
                        t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)), r(e, s)
                    }))
                },
                getEffectParams: () => t.params.flipEffect,
                perspective: () => !0,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: i
            } = e;
            s({
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0
                }
            }), ae({
                effect: "coverflow",
                swiper: t,
                on: i,
                setTranslate: () => {
                    const {
                        width: e,
                        height: s,
                        slides: i,
                        slidesSizesGrid: r
                    } = t, n = t.params.coverflowEffect, a = t.isHorizontal(), o = t.translate, l = a ? e / 2 - o : s / 2 - o, c = a ? n.rotate : -n.rotate, d = n.depth;
                    for (let e = 0, t = i.length; e < t; e += 1) {
                        const t = i[e],
                            s = r[e],
                            o = (l - t.swiperSlideOffset - s / 2) / s,
                            p = "function" == typeof n.modifier ? n.modifier(o) : o * n.modifier;
                        let u = a ? c * p : 0,
                            h = a ? 0 : c * p,
                            f = -d * Math.abs(p),
                            m = n.stretch;
                        "string" == typeof m && -1 !== m.indexOf("%") && (m = parseFloat(n.stretch) / 100 * s);
                        let g = a ? 0 : m * p,
                            v = a ? m * p : 0,
                            b = 1 - (1 - n.scale) * Math.abs(p);
                        Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(f) < .001 && (f = 0), Math.abs(u) < .001 && (u = 0), Math.abs(h) < .001 && (h = 0), Math.abs(b) < .001 && (b = 0);
                        const y = `translate3d(${v}px,${g}px,${f}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${b})`;
                        if (oe(0, t).style.transform = y, t.style.zIndex = 1 - Math.abs(Math.round(p)), n.slideShadows) {
                            let e = a ? t.querySelector(".swiper-slide-shadow-left") : t.querySelector(".swiper-slide-shadow-top"),
                                s = a ? t.querySelector(".swiper-slide-shadow-right") : t.querySelector(".swiper-slide-shadow-bottom");
                            e || (e = ce("coverflow", t, a ? "left" : "top")), s || (s = ce("coverflow", t, a ? "right" : "bottom")), e && (e.style.opacity = p > 0 ? p : 0), s && (s.style.opacity = -p > 0 ? -p : 0)
                        }
                    }
                },
                setTransition: e => {
                    t.slides.map((e => h(e))).forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    }))
                },
                perspective: () => !0,
                overwriteParams: () => ({
                    watchSlidesProgress: !0
                })
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: i
            } = e;
            s({
                creativeEffect: {
                    limitProgress: 1,
                    shadowPerProgress: !1,
                    progressMultiplier: 1,
                    perspective: !0,
                    prev: {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        opacity: 1,
                        scale: 1
                    },
                    next: {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        opacity: 1,
                        scale: 1
                    }
                }
            });
            const r = e => "string" == typeof e ? e : `${e}px`;
            ae({
                effect: "creative",
                swiper: t,
                on: i,
                setTranslate: () => {
                    const {
                        slides: e,
                        wrapperEl: s,
                        slidesSizesGrid: i
                    } = t, n = t.params.creativeEffect, {
                        progressMultiplier: a
                    } = n, o = t.params.centeredSlides;
                    if (o) {
                        const e = i[0] / 2 - t.params.slidesOffsetBefore || 0;
                        s.style.transform = `translateX(calc(50% - ${e}px))`
                    }
                    for (let s = 0; s < e.length; s += 1) {
                        const i = e[s],
                            l = i.progress,
                            c = Math.min(Math.max(i.progress, -n.limitProgress), n.limitProgress);
                        let d = c;
                        o || (d = Math.min(Math.max(i.originalProgress, -n.limitProgress), n.limitProgress));
                        const p = i.swiperSlideOffset,
                            u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
                            h = [0, 0, 0];
                        let f = !1;
                        t.isHorizontal() || (u[1] = u[0], u[0] = 0);
                        let m = {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            scale: 1,
                            opacity: 1
                        };
                        c < 0 ? (m = n.next, f = !0) : c > 0 && (m = n.prev, f = !0), u.forEach(((e, t) => {
                            u[t] = `calc(${e}px + (${r(m.translate[t])} * ${Math.abs(c*a)}))`
                        })), h.forEach(((e, t) => {
                            h[t] = m.rotate[t] * Math.abs(c * a)
                        })), i.style.zIndex = -Math.abs(Math.round(l)) + e.length;
                        const g = u.join(", "),
                            v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                            b = d < 0 ? `scale(${1+(1-m.scale)*d*a})` : `scale(${1-(1-m.scale)*d*a})`,
                            y = d < 0 ? 1 + (1 - m.opacity) * d * a : 1 - (1 - m.opacity) * d * a,
                            w = `translate3d(${g}) ${v} ${b}`;
                        if (f && m.shadow || !f) {
                            let e = i.querySelector(".swiper-slide-shadow");
                            if (!e && m.shadow && (e = ce("creative", i)), e) {
                                const t = n.shadowPerProgress ? c * (1 / n.limitProgress) : c;
                                e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                            }
                        }
                        const E = oe(0, i);
                        E.style.transform = w, E.style.opacity = y, m.origin && (E.style.transformOrigin = m.origin)
                    }
                },
                setTransition: e => {
                    const s = t.slides.map((e => h(e)));
                    s.forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    })), le({
                        swiper: t,
                        duration: e,
                        transformElements: s,
                        allSlides: !0
                    })
                },
                perspective: () => t.params.creativeEffect.perspective,
                overwriteParams: () => ({
                    watchSlidesProgress: !0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: s,
                on: i
            } = e;
            s({
                cardsEffect: {
                    slideShadows: !0,
                    rotate: !0,
                    perSlideRotate: 2,
                    perSlideOffset: 8
                }
            }), ae({
                effect: "cards",
                swiper: t,
                on: i,
                setTranslate: () => {
                    const {
                        slides: e,
                        activeIndex: s,
                        rtlTranslate: i
                    } = t, r = t.params.cardsEffect, {
                        startTranslate: n,
                        isTouched: a
                    } = t.touchEventsData, o = i ? -t.translate : t.translate;
                    for (let l = 0; l < e.length; l += 1) {
                        const c = e[l],
                            d = c.progress,
                            p = Math.min(Math.max(d, -4), 4);
                        let u = c.swiperSlideOffset;
                        t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
                        let h = t.params.cssMode ? -u - t.translate : -u,
                            f = 0;
                        const m = -100 * Math.abs(p);
                        let g = 1,
                            v = -r.perSlideRotate * p,
                            b = r.perSlideOffset - .75 * Math.abs(p);
                        const y = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l,
                            w = (y === s || y === s - 1) && p > 0 && p < 1 && (a || t.params.cssMode) && o < n,
                            E = (y === s || y === s + 1) && p < 0 && p > -1 && (a || t.params.cssMode) && o > n;
                        if (w || E) {
                            const e = (1 - Math.abs((Math.abs(p) - .5) / .5)) ** .5;
                            v += -28 * p * e, g += -.5 * e, b += 96 * e, f = -25 * e * Math.abs(p) + "%"
                        }
                        if (h = p < 0 ? `calc(${h}px ${i?"-":"+"} (${b*Math.abs(p)}%))` : p > 0 ? `calc(${h}px ${i?"-":"+"} (-${b*Math.abs(p)}%))` : `${h}px`, !t.isHorizontal()) {
                            const e = f;
                            f = h, h = e
                        }
                        const x = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 - g) * p),
                            _ = `\n        translate3d(${h}, ${f}, ${m}px)\n        rotateZ(${r.rotate?i?-v:v:0}deg)\n        scale(${x})\n      `;
                        if (r.slideShadows) {
                            let e = c.querySelector(".swiper-slide-shadow");
                            e || (e = ce("cards", c)), e && (e.style.opacity = Math.min(Math.max((Math.abs(p) - .5) / .5, 0), 1))
                        }
                        c.style.zIndex = -Math.abs(Math.round(d)) + e.length;
                        oe(0, c).style.transform = _
                    }
                },
                setTransition: e => {
                    const s = t.slides.map((e => h(e)));
                    s.forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    })), le({
                        swiper: t,
                        duration: e,
                        transformElements: s
                    })
                },
                perspective: () => !0,
                overwriteParams: () => ({
                    watchSlidesProgress: !0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }];
        return Z.use(de), Z
    }();