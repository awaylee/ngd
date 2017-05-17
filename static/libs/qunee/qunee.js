/**
 * This file is part of NGD.
 * Copyright (c) 2016 by qunee.com
 **/
if (!window.getI18NString) {
    getI18NString = function (string) {
        return string;
    }
}

window.Q = function (t, i, n) {
    "use strict";

    function forEachChild(window, document, n) {
        if (window.hasChildren()) {
            var s = window._fo || window.getChildren();
            if (s) {
                s = s._k0 || s;
                for (var h = 0, r = s.length; r > h; h++) {
                    if (document.call(n, s[h]) === false || forEachChild(s[h], document, n) === false) {
                        return false;
                    }
                }
                return true
            }
        }
    }

    function s(window) {
        if (!window.hasChildren()) {
            return window instanceof Node ? window : null;
        }
        for (var i, n = window._fo._k0, e = n.length - 1; e >= 0;e--) {
            if (i = n[e], i = s(i)) {
                return i;
            }
        }
        return null;
    }

    function forEachByDepthFirst(window, document, n, e) {
        return e ? r(window, document, n) : a(window, document, n);
    }

    function r(window, document, n) {
        window = window._k0 || window;
        for (var e, s = 0, h = window.length; h > s; s++) {
            if (e = window.s, e.hasChildren() && !r(e.children, document, n) || document.call(n, e) === false) {
                return false;
            }
        }
        return true;
    }

    function a(t, i, n) {
        t = t._k0 || t;
        for (var e, s = 0, h = t.length; h > s; s++) {
            if (e = t[s], i.call(n, e) === false || e.hasChildren() && !a(e.children, i, n)) {
                return false;
            }
        }
        return true;
    }

    function forEachByDepthFirstReverse(t, i, n, e) {
        return e ? f(t, i, n) : c(t, i, n);
    }

    function f(t, i, n) {
        t = t._k0 || t;
        for (var e, s = t.length, h = s - 1; h >= 0; h--) {
            if (e = t[h], e.hasChildren() && !f(e.children, i, n) || i.call(n, e) === false) {
                return false;
            }
        }
        return true;
    }

    function c(t, i, n) {
        t = t._k0 || t;
        for (var e, s = t.length, h = s - 1; h >= 0; h--) {
            if (e = t[h], i.call(n, e) === false || e.hasChildren() && !c(e.children, i, n)){
                return false;
            }
        }
        return true;
    }

    function forEachByBreadthFirst(t, i, n) {
        for (var e, s = (t._k0 || t).slice(0); s.length;) {
            e = s[0];
            s = s.splice(1);
            var h = i.call(n, e);
            if (h === false) {
                return false;
            }
            if (e.hasChildren()) {
                var r = e.children;
                r = r._k0 || r;
                s = s.concat(r);
            }
        }
        return true;
    }

    function _(t, i, n) {
        for (var e, s = (t._k0 || t).slice(0); s.length;) {
            e = s[s.length - 1];
            s = s.splice(0, s.length - 1);
            var h = i.call(n, e);
            if (h === false) {
                return false;
            }
            if (e.hasChildren()) {
                var r = e.children;
                r = r._k0 || r;
                s = s.concat(r);
            }
        }
        return true;
    }

    function d(t, i) {
        function n(t, n) {
            for (var e = t.length, s = n.length, h = e + s, r = new Array(h), a = 0, o = 0, f = 0; h > f;) {
                r[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            }
            return r;
        }

        function forEachChild(t) {
            var i = t.length;
            var s = Math.ceil(i / 2);
            return 1 >= i ? t : n(forEachChild(t.slice(0, s)), forEachChild(t.slice(s)));
        }

        return forEachChild(t)
    }

    function forEach(t, i, n, e) {
        t instanceof HashList && (t = t._k0);
        for (var s = 0, h = (t._k0 || t).length; h > s; s++) {
            var r = i.call(n, t[s], s, e);
            if (r === false) {
                return false;
            }
        }
        return true;
    }

    function v(t, i, n) {
        for (var e = t instanceof HashList, s = t._k0 || t, h = 0, r = s.length; r > h; h++) {
            var a = s[h];
            i.call(n, a) && (e ? t.remove(a) : t.splice(h, 1), h-- , r--);
        }
    }

    function forEachReverse(t, i, n, e) {
        t instanceof HashList && (t = t._k0);
        for (var s = (t._k0 || t).length - 1; s >= 0; s--) {
            var h = i.call(n, t[s], s, e);
            if (h === false) {
                return false;
            }
        }
        return true;
    }

    function y(t) {
        if (t.clone instanceof Function) {
            return t.clone(false);
        }
        var i;
        var n = [];
        return forEach(t, function (t) {
            i = t && t.clone instanceof Function ? t.clone() : t;
            n.push(i);
        }, this), n
    }

    function g(t, i, e) {
        e === n || 0 > e ? t.push(i) : t.splice(e, 0, i);
    }

    function x(t, i) {
        var n = t.indexOf(i);
        return 0 > n || n >= t.length ? false : t.splice(n, 1);
    }

    function m(t, i) {
        var n = false;
        return forEach(t, function (t) {
            return i == t ? (n = true, false) : void 0
        }), n
    }

    function E(t, i) {
        var n = t;
        for (var e in i) {
            if (i.__lookupGetter__) {
                var s = i.__lookupGetter__(e);
                var h = i.__lookupSetter__(e);
                s || h ? (s && n.__defineGetter__(e, s), h && n.__defineSetter__(e, h)) : n[e] = i[e];
            } else {
                n[e] = i[e];
            }
        }
        return n;
    }

    function extend(t, i, n) {
        if (!(t instanceof Function)) {
            throw new Error("subclass must be type of Function");
        }
        var e = null;
        "object" == typeof i && (e = i, i = t, t = function () {
            i.apply(this, arguments);
        });
        var s = t.prototype;
        var h = function () {};
        return h.prototype = i.prototype, t.prototype = new h, t.superclass = i.prototype, t.superclass.constructor = i, E(t.prototype, s), e && E(t.prototype, e), n && E(t.prototype, n), t.prototype.class = t, t
    }

    function doSuperConstructor(obj, fun, args) {
        return doSuper(obj, fun, "constructor", args);
    }

    function doSuper(obj, fun, str, args) {
        var superCls = fun.superclass;
        if (superCls) {
            var constructor = superCls[str];
            if (constructor) {
                return constructor.apply(obj, args);
            }
        }
    }

    function createFunction(t, i) {
        return i.bind(t);
    }

    function k(t, i, n, e) {
        if ("constructor" == n) {
            return O(t, i, e);
        }
        if (i.super_ instanceof Function) {
            var s = i.super_.prototype[n];
            return s instanceof Function ? s.apply(t, e) : void 0;
        }
    }

    function O(t, i, n) {
        return i.super_ instanceof Function ? i.super_.apply(t, n) : void 0;
    }

    function M(t, i) {
        return t.super_ = i, t.prototype = Object.create(i.prototype, {
            super_: { value: i, enumerable: false },
            constructor: { value: t, enumerable: false }
        }), t
    }

    function S(t, i, n) {
        if (!(t instanceof Function) && t instanceof Object) {
            i = t.super;
            var e;
            return t.hasOwnProperty("constructor") ? (e = t.constructor, delete t.constructor) : e = i ? function () {
                i.apply(this, arguments);
            } : function () {
            }, S(e, i, t);
        }
        if (i && !(i instanceof Function) && i instanceof Object) return S(t, i.super, i);
        if (i && M(t, i), n) {
            var s = t.prototype;
            for (var h in n) {
                s[h] = n[h];
            }
        }
        return t;
    }

    function I(t, i, e, s, h) {
        if (s) {
            return void Object.defineProperty(t, i, { value: e, enumerable: true });
        }
        var r = { configurable: true, enumerable: true };
        var a = "$" + i;
        e !== n && (t[a] = e);
        r.get = function () {
            return this[a];
        };
        r.set = function (t) {
            var n = this[a];
            if (n == t) {
                return false;
            }
            var e = new PropertyChangeEvent(this, i, t, n);
            return this.beforeEvent(e) ? (this[a] = t, h && h.call(this, t, n), this.onEvent(e), true) : false
        };
        Object.defineProperty(t, i, r);
    }

    function A(t, i) {
        for (var n = 0, e = i.length; e > n; n++) {
            var s = i[n];
            I(t, s.name || s, s.defaultValue || s.value, s.readOnly, s.onSetting);
        }
    }

    function callLater(t, i, n) {
        return i instanceof Object ? t = t.bind(i) : i && !n && (n = parseInt(i)), i && !n && (n = parseInt(i)), n ? setTimeout(t, n) : setTimeout(t);
    }

    function nextFrame(i, n) {
        return n && (i = i.bind(n)), t.requestAnimationFrame(i);
    }

    function setClass(element, cls) {
        element.className = cls;
        return element;
    }

    function appendClass(element, cls) {
        if (!element.hasOwnProperty("classList")) {
            var classes = element.getAttribute("class");
            if (!classes) {
                return setClass(element, cls);
            }
            var classesArr = classes.split(" ");
            for (var i = 0; i < classesArr.length; i++) {
                if (classesArr[i] == cls) {
                    return;
                }
            }
            classes += " " + cls;
            return setClass(element, classes);
        }
        element.classList.add(cls);
    }

    function removeClass(element, cls) {
        if (!element.hasOwnProperty("classList")) {
            var classes = element.getAttribute("class");
            if (!classes || !classes.indexOf(cls)) {
                return;
            }
            var str = "";
            var classesArr = classes.split(" ");
            for (var i = 0; i < classesArr.length; i++) {
                if (classesArr[i] != cls) {
                    str += classesArr[i] + " ";
                }
            }
            return setClass(element, str);
        }
        element.classList.remove(cls);
    }

    function isNumber(obj) {
        return !isNaN(obj) && obj instanceof Number || "number" == typeof obj;
    }

    function isString(obj) {
        return obj !== n && (obj instanceof String || "string" == typeof obj);
    }

    function isBoolean(obj) {
        return obj !== n && (obj instanceof Boolean || "boolean" == typeof obj);
    }

    function isArray(obj) {
        return Array.isArray(obj);
    }

    function eventPreventDefault(event) {
        var event = window.event || event;
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
    }

    function eventStopPropagation(event) {
        var event = window.event || event;
        event.stopPropagation ? event.stopPropagation() : event.cancelBubble || (event.cancelBubble = true);
    }

    function stopEvent(event) {
        eventPreventDefault(event);
        eventStopPropagation(event);
    }

    function randomInt(num) {
        return Math.floor(Math.random() * num);
    }

    function randomBool() {
        return Math.random() >= .5;
    }

    function Y(t) {
        var i = true;
        for (var n in t) {
            i = false;
            break;
        }
        return i;
    }

    function randomColor(num) {
        if (num && num > 0 && 1 > num) {
            var ran = Math.floor(16777215 * Math.random());
            return "rgba(" + (ran >> 16 & 255) + "," + (ran >> 8 & 255) + "," + (255 & ran) + "," + num.toFixed(2) + ")"
        }
        return randomColor2(Math.floor(16777215 * Math.random()));
    }

    function _ndr(t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
    }

    function _gw(t) {
        return t > 0 ? Math.ceil(t) : Math.floor(t);
    }

    function randomColor2(num) {
        return 16777216 > num ? "#" + ("000000" + num.toString(16)).slice(-6) :
            "rgba(" + (num >> 16 & 255) + "," + (num >> 8 & 255) + "," +
            (255 & num) + "," + ((num >> 24 & 255) / 255).toFixed(2) + ")";
    }

    function Z(t, i, n) {
        "object" != typeof n || n.hasOwnProperty("enumerable") || (n.enumerable = true), Object.defineProperty(t, i, n);
    }

    function defineProperties(object, descriptors) {
        for (var key in descriptors) {
            if ("_" != key[0]) {
                var value = descriptors[key];
                if ("object" != typeof value || value.hasOwnProperty("enumerable")) {
                    value.enumerable = true;
                }
            }
        }
        Object.defineProperties(object, descriptors);
    }

    function J(i, n) {
        n || (n = t);
        for (var e = i.split("."), s = 0, h = e.length; h > s; s++) {
            var r = e[s];
            n = n[r];
        }
        return n;
    }

    function Q(t) {
        return t instanceof MouseEvent || t instanceof Object && t.touches !== n;
    }

    function log(str) {
        window.console && console.log(str);
    }

    function trace(str) {
        window.console && console.trace(str);
    }

    function error(str) {
        window.console && console.error(str);
    }

    function ei(t, i, n) {
        var e;
        var s;
        var h;
        0 == t._nb ? (e = -1, h = 0, s = i) : 0 == t._nd ? (e = 0, h = 1, s = n) : (e = -1 / t._nb, s = (t._nb - e) * i + t._nc, h = 1);
        var r = new cz;
        return r._nb = e, r._nc = s, r._nd = h, r._n7 = i, r._n5 = n, r._l6 = Math.atan2(e, h), r._ndos = Math.cos(r._l6), r._sin = Math.sin(r._l6), r;
    }

    function si(t, i, n, e, s) {
        var h;
        var r;
        i > e ? h = -1 : e > i && (h = 1);
        n > s ? r = -1 : s > n && (r = 1);
        var a;
        var o;
        if (!h) {
            return o = 0 > r ? t.y : t.bottom, { x: i, y: o };
        }
        if (!r) {
            return a = 0 > h ? t.x : t.right, { x: a, y: n };
        }
        var f = (n - s) / (i - e);
        var c = n - f * i;
        var u = 0 > h ? i - t.x : i - t.right;
        var _ = 0 > r ? n - t.y : n - t.bottom;
        return Math.abs(f) >= Math.abs(_ / u) ? (o = 0 > r ? t.y : t.bottom, a = (o - c) / f) : (a = 0 > h ? t.x : t.right, o = f * a + c), {
            x: a,
            y: o
        }
    }

    function intersects(t, i, n, e, s, h, r, a) {
        return 0 >= r || 0 >= a || 0 >= n || 0 >= e ? false : (r += s, a += h, n += t, e += i, (s > r || r > t) && (h > a || a > i) && (t > n || n > s) && (i > e || e > h));
    }

    function intersectsPoint(t, i, n, e, s, h) {
        return s >= t && t + n >= s && h >= i && i + e >= h;
    }

    function containsRect(t, i, n, e, s, h, r, a, o) {
        return o && (t -= o, i -= o, n += o + o, e += o + o), s >= t && h >= i && t + n >= s + r && i + e >= h + a;
    }

    function intersection(t, i, n, e, s, h, r, a) {
        var o = t;
        o += n;
        var f = i;
        f += e;
        var c = s;
        c += r;
        var u = h;
        return u += a, s > t && (t = s), h > i && (i = h), o > c && (o = c), f > u && (f = u), o -= t, f -= i, 0 > o || 0 > f ? null : new Rect(t, i, o, f);
    }

    function fi(t, i, e) {
        if (isString(t) && (t = Position.fromString(t)), !t) {
            return { x: 0, y: 0 };
        }
        if (t.x !== n) {
            return { x: t.x, y: t.y };
        }
        var s;
        var h;
        var r = t.horizontalPosition;
        var a = t.verticalPosition;
        switch (r) {
            case "l":
                s = 0;
                break;
            case "r":
                s = i;
                break;
            default:
                s = i / 2;
        }
        switch (a) {
            case "t":
                h = 0;
                break;
            case "b":
                h = e;
                break;
            default:
                h = e / 2;
        }
        return { x: s, y: h };
    }

    function ci(t, i, n) {
        t.children.add(i, n);
        t.onChildAdd(i, n);
    }

    function ui(t, i) {
        t._fo && (t._fo.remove(i), t.onChildRemove(i));
    }

    function _i(t) {
        return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (t, i) {
            return i.toUpperCase();
        });
    }

    function msPrefix(str) {
        return str.replace(/[A-Z]/g, function (str) {
            "-" + str.toLowerCase();
        }).replace(/^ms-/, "-ms-");
    }

    function css(t, i) {
        var n = t.style;
        if (!n) {
            return false;
        }
        var e;
        var s;
        for (e in i) {
            i.hasOwnProperty(e) && (s = Fz(e)) && (n[s] = i[e]);
        }
        return t;
    }

    function objToString(obj) {
        var key;
        var str;
        var string = "";
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                str = Fz(key);
                string += msPrefix(str) + ":" + obj[key] + ";";
            }
        }
        return string ? string.substring(0, string.length - 1) : string;
    }

    function bi(t, i, n) {
        (i = Fz(i)) && (t.style[i] = n);
    }

    function addCSSRule(cls, obj) {
        if (styleSheet) {
            if (obj && !isString(obj) && (obj = objToString(obj))) {
                styleSheet.insertRule && styleSheet.insertRule(cls + "{" + obj + "}", 0);
            } else {
                styleSheet.addRule && styleSheet.addRule(cls, obj, 0);
            }
        } else {
            return false;
        }
    }

    function gi(i, n) {
        i.touches && (i = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i.touches[0]);
        var e = n.getBoundingClientRect();
        var s = i.clientX || 0;
        var h = i.clientY || 0;
        return isTouchSupport && isSafari && (t.pageXOffset && s == i.pageX && (s -= t.pageXOffset), t.pageYOffset && h == i.pageY && (h -= t.pageYOffset)), {
            x: s - e.left,
            y: h - e.top
        }
    }

    function DragSupport(me, handler, scope) {
        this._me = me;
        this._scope = scope;
        this._handler = handler;
        this._dragPoints = new dragPoints;
        this._install();
    }

    function isMetaKey(t) {
        return isMac && t.metaKey || !isMac && t.ctrlKey;
    }

    function dragPoints() {
        this.points = [];
    }

    function loadXML(t, i, n, e, s) {
        loadURL(t, function (e) {
            if (i) {
                var s = e.responseXML;
                if (!s) {
                    return void (n || error)("'" + t + "' XML format error.");
                }
                i(s);
            }
        }, n, e, s);
    }

    function alert(message) {
        alert(message);
    }

    function prompt(text, defaultText, n, e) {
        var userInput = prompt(text, defaultText);
        if (userInput != defaultText && n) {
            return n.call(e, userInput);
        } else {
            return userInput;
        }
    }

    function confirm(message, i, n) {
        var bool = confirm(message);
        if (bool && i) {
            return i.call(n);
        } else {
            return bool;
        }
    }

    function loadJSON(url, callback, print, str, time) {
        loadURL(url, function (xmlHttp) {
            if (callback) {
                var err;
                var json = xmlHttp.responseText;
                if (!json) {
                    (print || error)("'" + url + "' JSON format error.");
                    err = new Error("'" + url + "' JSON format error.");
                    return callback(json, err);
                }
                try {
                    json = JSON.parse(json);
                } catch (error) {
                    (print || error)(error);
                    err = error;
                }
                callback(json, err);
            }
        }, print, str, time);
    }

    function loadURL(url, callback, print, str, time) {
        if (print === false || str === false) {
            time = false;
        }
        try {
            var xmlHttp = new XMLHttpRequest;
            var urlStr = encodeURI(url);
            if (time !== false) {
                urlStr += urlStr.indexOf("?") > 0 ? "&" : "?" + "__time=" + Date.now();
            }
            xmlHttp.open("GET", urlStr);
            xmlHttp.onreadystatechange = function () {
                if (4 == xmlHttp.readyState) {
                    if (xmlHttp.status && 200 != xmlHttp.status) {
                        return (print || error)("'" + url + "' load error");
                    } else {
                        return callback && callback(xmlHttp);
                    }
                }
            };
            xmlHttp.send(str);
        } catch (err) {
            (print || error)("'" + url + "' load error", err);
        }
    }

    function intersects(t, i, n, e, s, h, r, a) {
        return 0 >= r || 0 >= a || 0 >= n || 0 >= e ? false : (r += s, a += h, n += t, e += i, (s > r || r > t) && (h > a || a > i) && (t > n || n > s) && (i > e || e > h));
    }

    function containsRect(t, i, n, e, s, h, r, a) {
        return s >= t && h >= i && t + n >= s + r && i + e >= h + a;
    }

    function ki(t, i, n) {
        return t instanceof Object && t.x ? Mi(t, i, 0, 0) : Oi(t, i, n, 0, 0);
    }

    function Oi(t, i, n, e, s) {
        var h = Math.sin(n);
        var r = Math.cos(n)
        var a = t - e;
        var o = i - s;
        return t = a * r - o * h + e, i = a * h + o * r + s, new Point(t, i, n);
    }

    function Mi(t, i, n, e) {
        n = n || 0;
        e = e || 0;
        var s = Math.sin(i);
        var h = Math.cos(i);
        var r = t.x - n;
        var a = t.y - e;
        return t.x = r * h - a * s + n, t.y = r * s + a * h + e, t;
    }

    function Si(t, i, n) {
        return Ii(t, i, n, 0, 0);
    }

    function Ii(t, i, n, e, s) {
        var h = Oi(t.x, t.y, i, e, s);
        var r = Oi(t.x + t.width, t.y, i, e, s);
        var a = Oi(t.x + t.width, t.y + t.height, i, e, s);
        var o = Oi(t.x, t.y + t.height, i, e, s);
        return n ? n.clear() : n = new Rect, n.addPoint(h), n.addPoint(r), n.addPoint(a), n.addPoint(o), n;
    }

    function setSize(width, height) {
        var ratio = this.ratio || 1;
        this.style.width = width + "px";
        this.style.height = height + "px";
        this.width = width * ratio;
        this.height = height * ratio;
    }

    function setRatio(canvas2d) {
        var backingStorePixelRatio = canvas2d.webkitBackingStorePixelRatio || canvas2d.mozBackingStorePixelRatio ||
            canvas2d.msBackingStorePixelRatio || canvas2d.oBackingStorePixelRatio || canvas2d.backingStorePixelRatio || 1;
        return devicePixelRatio / backingStorePixelRatio;
    }

    function createCanvas(t, n, e) {
        var s = i.createElement("canvas");
        if (s.g = s.getContext("2d"), t !== true && !e) {
            return t && n && (s.width = t, s.height = n), s;
        }
        var h = s.g;
        return h.ratio = s.ratio = setRatio(h), s.setSize = setSize, h._l8 = function () {
            this.canvas.width = this.canvas.width;
        }, t && n && s.setSize(t, n), s
    }

    function Ri(t, i) {
        return canvas || (canvas = createCanvas()), t && i && (canvas.width = t, canvas.height = i), canvas.g;
    }

    function Pi(t, i, n) {
        return (n || Defaults.FONT_STYLE) + " " + (i || Defaults.FONT_SIZE) + "px " + (t || Defaults.FONT_FAMILY);
    }

    function Di(t, i, n, e, s, h, r, a, o, f) {
        if (t.save(), t.translate(n, e), isChrome && !isTouchSupport && 9 > r) {
            var c = r / 9;
            t.scale(c, c);
            r = 9;
            f = null;
        }
        o || (o = Defaults.LINE_HEIGHT);
        r || (r = Defaults.FONT_SIZE);
        o *= r;
        t.font = f || Pi(h, r, a);
        t.textAlign = s;
        t.textBaseline = "middle";
        for (var u = o / 2, _ = i.split("\n"), d = 0, l = _.length; l > d; d++) {
            var v = _[d];
            t.fillText(v, 0, u);
            u += o;
        }
        t.restore();
    }

    function Ni(t, i, n, e, s, h) {
        if (!t) {
            return { width: 0, height: 0 };
        }
        if (i || (i = Defaults.FONT_SIZE), isChrome && !isTouchSupport && 9 > i) {
            var r = i / 9;
            var a = Ni(t, 9, n, e, s);
            return a.width *= r, a.height *= r, a
        }
        var o = Ri();
        o.font = h || Pi(n, i, e);
        s || (s = Defaults.LINE_HEIGHT);
        for (var f = i * s, c = 0, u = 0, _ = t.split("\n"), d = 0, l = _.length; l > d; d++) {
            var v = _[d];
            c = Math.max(o.measureText(v).width, c);
            u += f;
        }
        return { width: c, height: u }
    }

    function ji(t, i, n, e, s) {
        var h;
        if (isIE) try {
            h = t.getImageData(i, n, e, s);
        } catch (r) {
        } else {
            h = t.getImageData(i, n, e, s);
        }
        return h;
    }

    function $i(t) {
        return Math.log(t + Math.sqrt(t * t + 1));
    }

    function Bi(t, i) {
        i = i || t(1);
        var n = 1 / i;
        var e = .5 * n;
        var s = Math.min(1, i / 100);
        return function (h) {
            if (0 >= h) {
                return 0;
            }
            if (h >= i) {
                return 1;
            }
            for (var r = h * n, a = 0; a++ < 10;) {
                var o = t(r);
                var f = h - o;
                if (Math.abs(f) <= s) {
                    return r;
                }
                r += f * e;
            }
            return r;
        }
    }

    function Fi(t, i, n) {
        var e = 1 - t;
        var s = e * e * i[0] + 2 * e * t * i[2] + t * t * i[4];
        var h = e * e * i[1] + 2 * e * t * i[3] + t * t * i[5];
        if (n) {
            var r = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0], a = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
            return { x: s, y: h, rotate: Math.atan2(a, r) };
        }
        return { t: t, x: s, y: h };
    }

    function Gi(t, i, n) {
        var e = t - 2 * i + n;
        return 0 != e ? (t - i) / e : -1;
    }

    function zi(t, i) {
        i.add(t[4], t[5]);
        var n = Gi(t[0], t[2], t[4]);
        if (n > 0 && 1 > n) {
            var e = Fi(n, t);
            i.add(e.x, e.y);
        }
        var s = Gi(t[1], t[3], t[5]);
        if (s > 0 && 1 > s) {
            var e = Fi(s, t);
            i.add(e.x, e.y);
        }
        return i;
    }

    function Hi(t, i) {
        return Math.abs(t - i) < 1e-7;
    }

    function qi(t) {
        if (Hi(t[1], t[3]) && (Hi(t[0], t[2]) || Hi(t[1], t[5]))) {
            var i = t[0];
            var n = t[1];
            var e = t[4];
            var s = t[5];
            var h = Math.sqrt(kH(i, n, e, s));
            return function (t) {
                return h * t;
            }
        }
        var r = t[0];
        var a = t[2];
        var o = t[4];
        var f = r - 2 * a + o;
        var c = 2 * a - 2 * r;
        r = t[1];
        a = t[3];
        o = t[5];
        var u = r - 2 * a + o;
        var _ = 2 * a - 2 * r;
        var d = 4 * (f * f + u * u);
        var l = 4 * (f * c + u * _);
        var v = c * c + _ * _;
        var h = 4 * d * v - l * l;
        var b = 1 / h;
        var y = .125 * Math.pow(d, -1.5);
        var g = 2 * Math.sqrt(d);
        var x = (h * $i(l / Math.sqrt(h)) + 2 * Math.sqrt(d) * l * Math.sqrt(v)) * y;
        return function (t) {
            var i = l + 2 * t * d;
            var n = i / Math.sqrt(h);
            var e = i * i * b;
            return (h * Math.log(n + Math.sqrt(e + 1)) + g * i * Math.sqrt(v + t * l + t * t * d)) * y - x;
        }
    }

    function Yi(t, i, n) {
        var e = 1 - t;
        var s = i[0];
        var h = i[2];
        var r = i[4];
        var a = i[6];
        var o = s * e * e * e + 3 * h * t * e * e + 3 * r * t * t * e + a * t * t * t;
        if (n) {
            var f = 3 * t * t * a + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * h + (-3 * t * t + 6 * t - 3) * s;
        }
        s = i[1];
        h = i[3];
        r = i[5];
        a = i[7];
        var c = s * e * e * e + 3 * h * t * e * e + 3 * r * t * t * e + a * t * t * t;
        if (n) {
            var u = 3 * t * t * a + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * h + (-3 * t * t + 6 * t - 3) * s;
            return { x: o, y: c, rotate: Math.atan2(u, f) };
        }
        return { x: o, y: c };
    }

    function Wi(t, i, n, e) {
        var s = -t + 3 * i - 3 * n + e;
        if (0 == s) {
            return [(t - i) / (2 * n - 4 * i + 2 * t)];
        }
        var h = 2 * t - 4 * i + 2 * n;
        var r = i - t;
        var a = h * h - 4 * s * r;
        return 0 > a ? void 0 : 0 == a ? [-h / (2 * s)] : (a = Math.sqrt(a), [(a - h) / (2 * s), (-a - h) / (2 * s)]);
    }

    function Ui(t, i) {
        i.add(t[6], t[7]);
        var n = Wi(t[0], t[2], t[4], t[6]);
        if (n) {
            for (var e = 0; e < n.length; e++) {
                var s = n[e];
                if (!(0 >= s || s >= 1)) {
                    var h = Yi(s, t);
                    i.add(h.x, h.y);
                }
            }
        }
        if (n = Wi(t[1], t[3], t[5], t[7])) {
            for (var e = 0; e < n.length; e++) {
                var s = n[e];
                if (!(0 >= s || s >= 1)) {
                    var h = Yi(s, t);
                    i.add(h.x, h.y);
                }
            }
        }
    }

    function Vi(t) {
        var i = { x: t[0], y: t[1] };
        var n = { x: t[2], y: t[3] };
        var e = { x: t[4], y: t[5] };
        var s = { x: t[6], y: t[7] };
        var h = i.x - 0;
        var r = i.y - 0;
        var a = n.x - 0;
        var o = n.y - 0;
        var f = e.x - 0;
        var c = e.y - 0;
        var u = s.x - 0;
        var _ = s.y - 0;
        var d = 3 * (-h + 3 * a - 3 * f + u);
        var l = 6 * (h - 2 * a + f), v = 3 * (-h + a);
        var b = 3 * (-r + 3 * o - 3 * c + _);
        var y = 6 * (r - 2 * o + c);
        var g = 3 * (-r + o);
        var x = function (t) {
                var i = d * t * t + l * t + v, n = b * t * t + y * t + g;
                return Math.sqrt(i * i + n * n);
            }
        m = (x(0) + 4 * x(.5) + x(1)) / 6;
        return m;
    }

    function Xi(t, i) {
        function n(t, i, n, e) {
            var s = -t + 3 * i - 3 * n + e;
            var h = 2 * t - 4 * i + 2 * n;
            var r = i - t;
            return function (t) {
                return 3 * (s * t * t + h * t + r);
            }
        }

        function forEachChild(t, i) {
            var n = s(t);
            var e = forEachByDepthFirst(t);
            return Math.sqrt(n * n + e * e) * i;
        }

        var s = n(t[0], t[2], t[4], t[6]);
        var h = n(t[1], t[3], t[5], t[7]);
        i = i || 100;
        var r = 1 / i;
        return function (t) {
            if (!t) return 0;
            for (var i, n = 0, s = 0; ;) {
                if (i = n + r, i >= t) {
                    return s += forEachChild(n, i - n);
                }
                s += forEachChild(n, r);
                n = i;
            }
        }
    }

    function Zi(t, i, n) {
        return kH(i, n, t.cx, t.cy) <= t._squareR + .01;
    }

    function Ki(t, i, n, e) {
        return n = n || Ji(t, i), new Qi((t.x + i.x) / 2, (t.y + i.y) / 2, n / 2, t, i, null, e);
    }

    function Ji(t, i) {
        return calculateDistance(t.x, t.y, i.x, i.y);
    }

    function Qi(t, i, n, e, s, h, r) {
        this.cx = t;
        this.cy = i;
        this.r = n;
        this._squareR = n * n;
        this.p1 = e;
        this.p2 = s;
        this.p3 = h;
        this._otherPoint = r;
    }

    function tn(t, i, n, e) {
        this.cx = t;
        this.cy = i;
        this.width = n;
        this.height = e;
    }

    function nn(t) {
        var i = t[0];
        var n = t[1];
        var e = t[2];
        var s = Qi._jwCircle(i, n, e);
        return sn(t, i, n, e, s);
    }

    function en(t, i) {
        i = i || hn(t);
        for (var n, e = i.width / i.height, s = [], h = t.length, r = 0; h > r; r++) {
            n = t[r];
            s.push({ x: n.x, y: n.y * e });
        }
        var a = nn(s);
        return a ? new tn(a.cx, a.cy / e, 2 * a.r, 2 * a.r / e) : void 0;
    }

    function sn(t, i, n, e, s) {
        for (var h, r, a = t.length, o = s._squareR, f = 0; a > f; f++) {
            if (h = t[f], h != i && h != n && h != e) {}
            var c = kH(s.cx, s.cy, h.x, h.y);
            c - .01 > o && (o = c, r = h);
        }
        if (!r) {
            return s;
        }
        var u;
        var _ = Qi._jwCircle(r, i, n);
        var d = Qi._jwCircle(r, i, e);
        var l = Qi._jwCircle(r, e, n);
        return Zi(_, e.x, e.y) && (u = _), Zi(d, n.x, n.y) && (!u || u.r > d.r) && (u = d), Zi(l, i.x, i.y) && (!u || u.r > l.r) && (u = l), i = u.p1, n = u.p2, e = u.p3 || u._otherPoint, sn(t, i, n, e, u);
    }

    function hn(t) {
        for (var i, n = t.length, e = new Rect, s = 0; n > s; s++) {
            i = t[s];
            e.add(i.x, i.y);
        }
        return e;
    }

    function rn(t, i, n, e, s) {
        this._6h && this.validate();
        var h = s ? this.getBounds(s) : this.bounds;
        var r = n / h.width;
        var a = t - r * h.x;
        var o = e / h.height;
        var f = i - o * h.y;
        var c = this._fu;
        var u = [];
        return forEach(c, function (t) {
            var i = t.clone();
            var n = i.points;
            if (n && n.length) {
                for (var e = n.length, s = [], h = 0; e > h; h++) {
                    var c = n[h];
                    h++;
                    var _ = n[h];
                    c = r * c + a;
                    _ = o * _ + f;
                    s.push(c);
                    s.push(_);
                }
                i.points = s;
            }
            u.push(i);
        }, this), new Path(u);
    }

    function an(t, i, n, e, s, h) {
        if (s = s || 0, n = n || 0, !s && !h) {
            return false;
        }
        if (!e) {
            var r = this.getBounds(s);
            if (!r.intersectsPoint(t, i, n)) {
                return false;
            }
        }
        var a = Math.round(2 * n) || 1;
        var o = Ri(a, a);
        var f = (o.canvas, -t + n);
        var c = -i + n;
        if (o.setTransform(1, 0, 0, 1, f, c), !o.isPointInStroke) {
            this._lt(o);
            s && o.stroke();
            h && o.fill();
            var u = ji(o, 0, 0, a, a);
            if (!u) {
                return false;
            }
            u = u.data;
            for (var _ = u.length / 4; _ > 0;) {
                if (u[4 * _ - 1] > 0) {
                    return true;
                }
                --_;
            }
            return false;
        }
        return o.lineWidth = (s || 0) + 2 * n, this._lt(o), s && o.isPointInStroke(n, n) ? true : h ? o.isPointInPath(n, n) : false;
    }

    function on(t, i, n) {
        if (!this._jg) {
            return null;
        }
        var e = this._fu;
        if (e.length < 2) {
            return null;
        }
        n === false && (t += this._jg);
        var s = e[0];
        if (0 >= t) {
            return Fs(s.points[0], s.points[1], e[1].points[0], e[1].points[1], t, i);
        }
        if (t >= this._jg) {
            s = e[e.length - 1];
            var h;
            var r;
            var a = s.points;
            var o = a.length;
            var f = a[o - 2];
            var c = a[o - 1];
            if (o >= 4) {
                h = a[o - 4];
                r = a[o - 3];
            } else {
                s = e[e.length - 2];
                var u = s.lastPoint;
                h = u.x;
                r = u.y;
            }
            return Fs(f, c, f + f - h, c + c - r, t - this._jg, i);
        }
        for (var _, d = 0, l = 1, o = e.length; o > l; l++) {
            if (_ = e[l], _._jg) {
                if (!(d + _._jg < t)) {
                    var v;
                    var u = s.lastPoint;
                    if (_.type == "a") {
                        var b = _.points;
                        v = fn(t - d, _, u.x, u.y, b[0], b[1], b[2], b[3], _._r);
                    } else {
                        if (!_._lf) {
                            return Fs(u.x, u.y, _.points[0], _.points[1], t - d, i);
                        }
                        var y = Bi(_._lf, _._jg)(t - d);
                        var b = _.points;
                        v = _.type == "c" && 6 == b.length ? Yi(y, [u.x, u.y].concat(b), true) : Fi(y, [u.x, u.y].concat(b), true);
                    }
                    return i && (v.x -= i * Math.sin(v.rotate || 0), v.y += i * Math.cos(v.rotate || 0)), v;
                }
                d += _._jg;
                s = _;
            } else {
                s = _;
            }
        }
    }

    function fn(t, i, n, e, s, h, r, a) {
        if (t <= i._l1) {
            return Fs(n, e, s, h, t, t);
        }
        if (t >= i._jg) {
            return t -= i._jg, Fs(i._p2x, i._p2y, r, a, t, t);
        }
        if (t -= i._l1, i._o) {
            var o = t / i._r;
            i._CCW && (o = -o);
            var f = Oi(i._p1x, i._p1y, o, i._o.x, i._o.y);
            return f.rotate += i._nb1 || 0, f.rotate += Math.PI, f;
        }
        return Fs(i._p1x, i._p1y, i._p2x, i._p2y, t, t);
    }

    function ei(t, i, n) {
        var e;
        var s;
        var h;
        0 == t._nb ? (e = -1, h = 0, s = i) : 0 == t._nd ? (e = 0, h = 1, s = n) : (e = -1 / t._nb, s = (t._nb - e) * i + t._nc, h = 1);
        var r = new cz;
        return r._nb = e, r._nc = s, r._nd = h, r._n7 = i, r._n5 = n, r;
    }

    function cn(t) {
        return t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI), t;
    }

    function un(t, i, n, e, s, h, r, a) {
        var o = calculateDistance(i, n, e, s);
        var f = calculateDistance(e, s, h, r);
        if (!o || !f) {
            return t._d = 0, t._r = 0, t._l1 = o, t._l2 = f, t._jg = 0;
        }
        var c = dn(e, s, i, n);
        var u = dn(e, s, h, r);
        t._nb1 = c;
        t._nb2 = u;
        var _ = c - u;
        _ = cn(_);
        _ > Math.PI && (_ = 2 * Math.PI - _, t._CCW = true);
        var d = Math.PI - _;
        var l = Math.tan(_ / 2);
        var v = a / l;
        var b = Math.min(o, f);
        v > b && (v = b, a = l * v);
        var y;
        var g = e + Math.cos(c) * v;
        var x = s + Math.sin(c) * v;
        var m = e + Math.cos(u) * v;
        var E = s + Math.sin(u) * v;
        var p = new cz(i, n, e, s);
        var w = new cz(e, s, h, r);
        var T = ei(p, g, x);
        var k = ei(w, m, E);
        var O = T._3l(k);
        var M = Math.atan2(x - O.y, g - O.x);
        var S = Math.atan2(E - O.y, m - O.x);
        y = t._CCW ? S : M;
        for (var I, A = 0; 4 > A;) {
            var C = A * rz;
            if (cn(C - y) <= d) {
                var L;
                var R;
                if (I ? I++ : I = 1, 0 == A ? (L = O.x + a, R = O.y) : 1 == A ? (L = O.x, R = O.y + a) : 2 == A ? (L = O.x - a, R = O.y) : (L = O.x, R = O.y - a), t["$boundaryPoint" + I] = {
                    x: L,
                    y: R
                }, 2 == I) {
                    break;
                }
            }
            A++;
        }
        return t._p1x = g, t._p1y = x, t._p2x = m, t._p2y = E, t._o = O, t._d = v, t._r = a, t._l1 = o - v, t._l2 = f - v, t._jg = t._l1 + d * a;
    }

    function _n(t, i, n, e, s, h, r) {
        var a = dn(n, e, t, i);
        var o = dn(n, e, s, h);
        var f = a - o;
        return r ? f : (0 > f && (f = -f), f > Math.PI && (f -= Math.PI), f);
    }

    function dn(t, i, n, e) {
        return Math.atan2(e - i, n - t);
    }

    function ln(t) {
        var i = /^data:image\/(\w+);base64,/i.exec(t);
        if (i) {
            return i[1];
        }
        var n = t.lastIndexOf(".");
        return n >= 0 && n < t.length - 1 ? t.substring(n + 1) : void 0;
    }

    function vn(t) {
        if (!t) {
            return null;
        }
        if (t instanceof Path) {
            return 30;
        }
        if (t.draw instanceof Function) {
            return 20;
        }
        if (isString(t)) {
            var i = ln(t);
            if (i) {
                if (!isIE && /^gif/i.test(i)) {
                    return 12;
                }
                if (/^svg/i.test(i)) return 11;
            }
            return 10;
        }
    }

    function bn(t, i, n) {
        if (this._ls = vn(t), !this._ls) {
            throw new Error("the image format is not supported", t);
        }
        this._mg = t;
        this._nbw = i;
        this._9u = n;
        this.width = i || Defaults.IMAGE_WIDTH;
        this.height = n || Defaults.IMAGE_HEIGHT;
        this._js = {};
    }

    function registerImage(t, i, n, e) {
        return i ? (BH[t] = new bn(i, n, e), t) : void delete BH[t];
    }

    function gn(t) {
        if (t._lb) {
            return t._lb;
        }
        var i = isString(t);
        if (!i && !t.name) {
            return t._lb = new bn(t);
        }
        var n = t.name || t;
        return n in BH ? BH[n] : BH[n] = new bn(t);
    }

    function hasImage(t) {
        return t in BH;
    }

    function mn(t, i, n) {
        n = n || {};
        var e = t.getBounds(n.lineWidth);
        if (!e.width || !e.height) {
            return false;
        }
        var s = i.getContext("2d");
        var h = i.ratio || 1;
        var r = n.scaleMode || "full.uniform";
        var a = /full/i.test(r);
        var o = /uniform/i.test(r);
        var f = 1;
        var c = 1;
        if (a) {
            var u = i.width;
            var _ = i.height;
            var d = n.padding;
            var l = 0;
            var v = 0;
            if (d) {
                var b;
                var y;
                var g;
                var x;
                isNumber(d) ? b = y = g = x = d : (b = d.top || 0, y = d.bottom || 0, g = d.left || 0, x = d.right || 0);
                u -= g + x;
                _ -= b + y;
                l += g;
                v += b;
            }
            f = u / e.width;
            c = _ / e.height;
            o && (f > c ? (l += (u - c * e.width) / 2, f = c) : c > f && (v += (_ - f * e.height) / 2, c = f));
            (l || v) && s.translate(l, v);
        }
        s.translate(-e.x * f, -e.y * c);
        t.draw(s, h, n, f, c, true);
    }

    function drawImage(t, i, n) {
        var e = gn(t);
        return e ? (e.validate(), (e._ls == 12 || e._67()) && e._nbn(function (t) {
            t.source && (this.width = this.width, mn(t.source, this, n))
        }, i), void mn(e, i, n)) : (Qunee.error("draw image error - " + t), false);
    }

    function pn(t, i, e, s) {
        var h = t.length;
        if (h && !(0 > h)) {
            s = s || 1;
            for (var r, a, o, f = [], c = 0; c++ < h;) {
                if (r = t.getLocation(c, 0), r && calculateDistance(i, e, r.x, r.y) <= s) {}
                a = c, o = r.rotate;
                break;
            }
            if (a !== n) {
                for (var r, u, _, d = 0, c = 0, l = t._fu.length; l > c; c++) {
                    if (r = t._fu[c], !u && (d += r._jg || 0, d > a)) {
                        if (u = true, r.type == "l" || r.type == "z") {
                            f.push(new PathSegment("l", [i, e]));
                        } else {
                        }
                        var v = Math.max(10, r._jg / 6);
                        var b = v * Math.sin(o);
                        var y = v * Math.cos(o);
                        if (r.type == "c") {
                            var g = r.points[0];
                            var x = r.points[1];
                            if (_) {
                                var m = new cz(i, e, i + y, e + b);
                                var E = m._3l(new cz(_.lastPoint.x, _.lastPoint.y, r.points[0], r.points[1]));
                                E.x !== n && (g = E.x, x = E.y);
                            }
                            f.push(new PathSegment("c", [g, x, i - y, e - b, i, e]));
                        } else {
                            f.push(new PathSegment("q", [i - y, e - b, i, e]));
                        }
                        if (r.points) {
                            if (r.type == "c") {
                                r.points[0] = i + y;
                                r.points[1] = e + b;
                                var m = new cz(i, e, i + y, e + b);
                                var E = m._3l(new cz(r.points[2], r.points[3], r.points[4], r.points[5]));
                                E.x !== n && (r.points[2] = E.x, r.points[3] = E.y)
                            } else if (r.type == "q") {
                                r.type = "c";
                                r.points = [i + y, e + b].concat(r.points);
                                var m = new cz(i, e, i + y, e + b);
                                var E = m._3l(new cz(r.points[2], r.points[3], r.points[4], r.points[5]));
                                E.x !== n && (r.points[2] = E.x, r.points[3] = E.y);
                            } else {
                                r.type == "l" && (r.type = "q", r.points = [i + y, e + b].concat(r.points), c == l - 1 && (r.invalidTerminal = true));
                            }
                        }
                    }
                    f.push(r);
                    _ = r
                }
                return f;
            }
        }
    }

    function wn(t) {
        var i = t.width;
        var n = t.height;
        var e = ji(t.g, 0, 0, i, n);
        return e ? kn(e.data, i, n) : void 0;
    }

    function Tn(t, i, n) {
        this._13(t, i, n);
    }

    function kn(t, i, n) {
        return new Tn(t, i, n);
    }

    function On(t) {
        if ("#" == t[0]) {
            if (t = t.substring(1), 3 == t.length) {
                t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
            } else if (6 != t.length) {
                return;
            }
            return t = parseInt(t, 16), [t >> 16 & 255, t >> 8 & 255, 255 & t];
        }
        if (/^rgb/i.test(t)) {
            var i = t.indexOf("(");
            var n = t.indexOf(")");
            if (0 > i || i > n) {
                return;
            }
            if (t = t.substring(i + 1, n), t = t.split(","), t.length < 3) {
                return;
            }
            var e = parseInt(t[0]);
            var s = parseInt(t[1]);
            var h = parseInt(t[2]);
            var r = 3 == t.length ? 255 : parseInt(t[3]);
            return [e, s, h, r];
        }
    }

    function Mn(t, i, n) {
        return n || (n = Defaults.BLEND_MODE), n == Consts.BLEND_MODE_MULTIPLY ? t * i : n == Consts.BLEND_MODE_DARKEN ? Math.min(t, i) : n == Consts.BLEND_MODE_COLOR_BURN ? 1 - (1 - i) / t : n == Consts.BLEND_MODE_LINEAR_BURN ? t + i - 1 : n == Consts.BLEND_MODE_LIGHTEN ? Math.max(t, i) : n == Consts.BLEND_MODE_SCREEN ? t + i - t * i : i;
    }

    function Sn(t, i, n) {
        var e = On(i);
        if (!e) {
            return void Qunee.error("color error, . + i + ");
        }
        var s = ji(t.g, 0, 0, t.width, t.height);
        if (s) {
            var h = s.data;
            if (n instanceof Function) {
                h = n(t, h, e) || h;
            } else {
                var r = e[0] / 255;
                var a = e[1] / 255;
                var o = e[2] / 255;
                if (n == Consts.BLEND_MODE_GRAY) {
                    for (var f = 0, c = h.length; c > f; f += 4) {
                        var u = 77 * h[f] + 151 * h[f + 1] + 28 * h[f + 2] >> 8;
                        h[f] = u * r | 0;
                        h[f + 1] = u * a | 0;
                        h[f + 2] = u * o | 0;
                    }
                } else {
                    for (var f = 0, c = h.length; c > f; f += 4) {
                        h[f] = 255 * Mn(r, h[f] / 255, n) | 0;
                        h[f + 1] = 255 * Mn(a, h[f + 1] / 255, n) | 0;
                        h[f + 2] = 255 * Mn(o, h[f + 2] / 255, n) | 0;
                    }
                }
            }
            var t = createCanvas(t.width, t.height);
            return t.g.putImageData(s, 0, 0), t;
        }
    }

    function In(t, i, n, e) {
        return 1 > n && (n = 1), An(t - n, i - n, 2 * n, 2 * n, e);
    }

    function An(t, i, n, e, s) {
        n = Math.round(n) || 1;
        e = Math.round(e) || 1;
        var h = Ri(n, e);
        h.setTransform(1, 0, 0, 1, -t, -i);
        s.draw(h);
        var r = ji(h, 0, 0, n, e);
        if (!r) {
            return false;
        }
        r = r.data;
        for (var a = r.length / 4; a-- > 0;) {
            if (r[4 * a - 1] > 0) {
                return true;
            }
        }
        return false;
    }

    function Cn(t, i, n, e, s, h) {
        t -= s.$x;
        i -= s.$y;
        var r = s._fs.intersection(t, i, n, e);
        if (!r) {
            return false;
        }
        t = r.x * h;
        i = r.y * h;
        n = r.width * h;
        e = r.height * h;
        n = Math.round(n) || 1;
        e = Math.round(e) || 1;
        var a = Ri();
        var o = a.canvas;
        o.width < n || o.height < e ? (o.width = n, o.height = e) : (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, n, e));
        a.setTransform(1, 0, 0, 1, -t - s.$x * h, -i - s.$y * h);
        a.scale(h, h);
        s._jk(a, 1);
        var f = ji(a, 0, 0, n, e);
        if (!f) {
            return false;
        }
        f = f.data;
        for (var c = f.length / 4; c-- > 0;) {
            if (f[4 * c - 1] > 0) {
                return true;
            }
        }
        return false;
    }

    function Ln(t, i, n, e, s, h, r, a, o) {
        if (intersectsPoint(t, i, n, e, a, o)) {
            return null;
        }
        var f;
        var c;
        var u;
        var _ = new PathSegment("l", [t + n - s, i]);
        var d = new PathSegment("q", [t + n, i, t + n, i + h]);
        var l = new PathSegment("l", [t + n, i + e - h]);
        var v = new PathSegment("q", [t + n, i + e, t + n - s, i + e])
        var b = new PathSegment("l", [t + s, i + e]);
        var y = new PathSegment("q", [t, i + e, t, i + e - h]);
        var g = new PathSegment("l", [t, i + h]);
        var x = new PathSegment("q", [t, i, t + s, i]);
        var m = (new PathSegment("z"), [_, d, l, v, b, y, g, x]);
        var E = new Rect(t + s, i + h, n - s - s, e - h - h);
        t > a ? (f = "l", u = 5) : a > t + n ? (f = "r", u = 1) : (f = "c", u = 0);
        i > o ? (c = "t", f == "l" && (u = 7)) : o > i + e ? (c = "b", f == "r" ? u = 3 : f == "c" && (u = 4)) : (c = "m", f == "l" ? u = 6 : f == "r" && (u = 2));
        var p = $n(u, t, i, n, e, s, h, r, a, o, E);
        var w = p[0];
        var T = p[1];
        var k = new Path;
        var O = k._fu;
        O.push(new PathSegment("m", [w.x, w.y]));
        O.push(new PathSegment("l", [a, o]));
        O.push(new PathSegment("l", [T.x, T.y]));
        T._mi && (O.push(T._mi), T._miNO++);
        for (var M = T._miNO % 8, S = w._miNO; O.push(m[M]), ++M, M %= 8, M != S;) {}
        return w._mi && O.push(w._mi), k.closePath(), k;
    }

    function Rn(t, i, e, s, h, r, a, o, f, c, u, _, d, l) {
        var v = new cz(_, d, e, s);
        var b = new cz(i[0], i[1], i[4], i[5]);
        var y = b._3l(v, u);
        var g = y[0];
        var x = y[1];
        if (g._rest !== n) {
            g._miNO = (t - 1) % 8;
            x._miNO = (t + 1) % 8;
            var m = g._rest;
            7 == t ? (g.y = r + c + Math.min(l.height, m), x.x = h + f + Math.min(l.width, m)) : 5 == t ? (g.x = h + f + Math.min(l.width, m), x.y = r + o - c - Math.min(l.height, m)) : 3 == t ? (g.y = r + o - c - Math.min(l.height, m), x.x = h + a - f - Math.min(l.width, m)) : 1 == t && (g.x = h + a - f - Math.min(l.width, m), x.y = r + c + Math.min(l.height, m));
        } else {
            v._mv(v._n7, v._n5, g.x, g.y);
            g = v._$i(i);
            v._mv(v._n7, v._n5, x.x, x.y);
            x = v._$i(i);
            var E = Bn(i, [g, x]);
            var p = E[0];
            var w = E[2];
            g._miNO = t;
            x._miNO = t;
            g._mi = new PathSegment("q", p.slice(2));
            x._mi = new PathSegment("q", w.slice(2));
        }
        return [g, x];
    }

    function Pn(t, i, n, e, s, h, r, a, o, f) {
        var c;
        var u;
        if (o - a >= i + h) {
            c = { y: n, x: o - a };
            c._miNO = 0;
        } else {
            c = { y: n + r, x: Math.max(i, o - a) };
            var _ = [i, n + r, i, n, i + h, n];
            var d = new cz(o, f, c.x, c.y);
            if (c = d._$i(_)) {
                isArray(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
                var l = Bn(_, [c]);
                l = l[0];
                l && (c._mi = new PathSegment("q", l.slice(2)));
                c._miNO = 7;
            } else {
                c = { y: n, x: i + h };
                c._miNO = 0;
            }
        }
        if (i + e - h >= o + a) {
            u = { y: n, x: o + a };
            u._miNO = 0;
        } else {
            u = { y: n + r, x: Math.min(i + e, o + a) };
            var v = [i + e - h, n, i + e, n, i + e, n + r];
            var d = new cz(o, f, u.x, u.y);
            if (u = d._$i(v)) {
                isArray(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var l = Bn(v, [u]);
                l && l[l.length - 1] && (u._mi = new PathSegment("q", l[l.length - 1].slice(2)));
                u._miNO = 1;
            } else {
                u = { y: n, x: i + e - h };
                u._miNO = 0;
            }
        }
        return [c, u];
    }

    function Dn(t, i, n, e, s, h, r, a, o, f) {
        var c;
        var u;
        if (f - a >= n + r) {
            c = { x: i + e, y: f - a };
            c._miNO = 2;
        } else {
            c = { x: i + e - h, y: Math.max(n, f - a) };
            var _ = [i + e - h, n, i + e, n, i + e, n + r];
            var d = new cz(o, f, c.x, c.y);
            if (c = d._$i(_)) {
                isArray(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
                var l = Bn(_, [c]);
                l = l[0];
                l && (c._mi = new PathSegment("q", l.slice(2)));
                c._miNO = 1;
            } else {
                c = { x: i + e, y: n + r };
                c._miNO = 2;
            }
        }
        if (n + s - r >= f + a) {
            u = { x: i + e, y: f + a };
            u._miNO = 2;
        } else {
            u = { x: i + e - h, y: Math.min(n + s, f + a) };
            var v = [i + e, n + s - r, i + e, n + s, i + e - h, n + s];
            var d = new cz(o, f, u.x, u.y);
            if (u = d._$i(v)) {
                isArray(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var l = Bn(v, [u]);
                l[1] && (u._mi = new PathSegment("q", l[1].slice(2)));
                u._miNO = 3;
            } else {
                u = { x: i + e, y: n + s - r };
                u._miNO = 2;
            }
        }
        return [c, u];
    }

    function Nn(t, i, n, e, s, h, r, a, o, f) {
        var c;
        var u;
        if (o - a >= i + h) {
            u = { y: n + s, x: o - a };
            u._miNO = 4;
        } else {
            u = { y: n + s - r, x: Math.max(i, o - a) };
            var _ = [i + h, n + s, i, n + s, i, n + s - r];
            var d = new cz(o, f, u.x, u.y);
            if (u = d._$i(_)) {
                isArray(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var l = Bn(_, [u]);
                l = l[l.length - 1];
                l && (u._mi = new PathSegment("q", l.slice(2)));
                u._miNO = 5
            } else {
                u = { y: n + s, x: i + h };
                u._miNO = 4;
            }
        }
        if (i + e - h >= o + a) {
            c = { y: n + s, x: o + a };
            c._miNO = 4;
        } else {
            c = { y: n + s - r, x: Math.min(i + e, o + a) };
            var v = [i + e, n + s - r, i + e, n + s, i + e - h, n + s];
            var d = new cz(o, f, c.x, c.y);
            if (c = d._$i(v)) {
                isArray(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
                var l = Bn(v, [c]);
                l[0] && (c._mi = new PathSegment("q", l[0].slice(2)));
                c._miNO = 3;
            } else {
                c = { y: n + s, x: i + e - h };
                c._miNO = 4;
            }
        }
        return [c, u];
    }

    function jn(t, i, n, e, s, h, r, a, o, f) {
        var c;
        var u;
        if (f - a >= n + r) {
            u = { x: i, y: f - a };
            u._miNO = 6;
        } else {
            u = { x: i + h, y: Math.max(n, f - a) };
            var _ = [i, n + r, i, n, i + h, n];
            var d = new cz(o, f, u.x, u.y);
            if (u = d._$i(_)) {
                isArray(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var l = Bn(_, [u]);
                l = l[l.length - 1];
                l && (u._mi = new PathSegment("q", l.slice(2)));
            } else {
                u = { x: i, y: n + r };
            }
            u._miNO = 7;
        }
        if (n + s - r >= f + a) {
            c = { x: i, y: f + a };
            c._miNO = 6;
        } else {
            c = { x: i + h, y: Math.min(n + s, f + a) };
            var v = [i + h, n + s, i, n + s, i, n + s - r];
            var d = new cz(o, f, c.x, c.y);
            if (c = d._$i(v)) {
                isArray(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
                var l = Bn(v, [c]);
                l[0] && (c._mi = new PathSegment("q", l[0].slice(2)));
                c._miNO = 5;
            } else {
                c = { x: i, y: n + s - r };
                c._miNO = 6;
            }
        }
        return [c, u];
    }

    function $n(t, i, n, e, s, h, r, a, o, f, c) {
        var u = a / 2;
        switch (t) {
            case 7:
                var _ = [i, n + r, i, n, i + h, n];
                var d = i + h;
                var l = n + r;
                return Rn(t, _, d, l, i, n, e, s, h, r, a, o, f, c);
            case 5:
                return _ = [i + h, n + s, i, n + s, i, n + s - r], d = i + h, l = n + s - r, Rn(t, _, d, l, i, n, e, s, h, r, a, o, f, c);
            case 3:
                return _ = [i + e, n + s - r, i + e, n + s, i + e - h, n + s], d = i + e - h, l = n + s - r, Rn(t, _, d, l, i, n, e, s, h, r, a, o, f, c);
            case 1:
                return _ = [i + e - h, n, i + e, n, i + e, n + r], d = i + e - h, l = n + r, Rn(t, _, d, l, i, n, e, s, h, r, a, o, f, c);
            case 0:
                return Pn(t, i, n, e, s, h, r, u, o, f, c);
            case 2:
                return Dn(t, i, n, e, s, h, r, u, o, f, c);
            case 4:
                return Nn(t, i, n, e, s, h, r, u, o, f, c);
            case 6:
                return jn(t, i, n, e, s, h, r, u, o, f, c)
        }
    }

    function Bn(t, i) {
        for (var e, s, h, r, a, o, f = t[0], c = t[1], u = t[2], _ = t[3], d = t[4], l = t[5], v = [], b = 0; b < i.length; b++) {
            a = i[b];
            o = a.t;
            0 != o && 1 != o ? (e = f + (u - f) * o, s = c + (_ - c) * o, h = u + (d - u) * o, r = _ + (l - _) * o, v.push([f, c, e, s, a.x, a.y]), f = a.x, c = a.y, u = h, _ = r) : v.push(null);
        }
        return h !== n && v.push([a.x, a.y, h, r, d, l]), v;
    }

    function Fn(t) {
        return this.$layoutByAnchorPoint && this._nc4 && (t.x -= this._nc4.x, t.y -= this._nc4.y), this.$rotate && Mi(t, this.$rotate), t.x += this.$offsetX || 0, t.y += this.$offsetY || 0, this.$rotatable && this.$_hostRotate ? Mi(t, this.$_hostRotate) : t;
    }

    function Gn(t) {
        return this.$rotatable && this.$_hostRotate && Mi(t, -this.$_hostRotate), t.x -= this.$offsetX || 0, t.y -= this.$offsetY || 0, this.$rotate && Mi(t, -this.$rotate), this.$layoutByAnchorPoint && this._nc4 && (t.x += this._nc4.x, t.y += this._nc4.y), t;
    }

    function zn() {
        var t = this.$invalidateSize;
        this.$invalidateSize && (this.$invalidateSize = false, this.$invalidateAnchorPoint = true, this._7k.setByRect(this._jo), this.$padding && this._7k.grow(this.$padding), this.$border && this._7k.grow(this.$border));
        var i = this._$u();
        if (i) {
            var n = this.showPointer && this.$pointerWidth;
        }
        return this.$invalidateAnchorPoint && this.$layoutByAnchorPoint && (this.$invalidateAnchorPoint = false, n && (t = true), this._nc4 = fi(this.$anchorPosition, this._7k.width, this._7k.height), this._nc4.x += this._7k.x, this._nc4.y += this._7k.y), i ? (t && (this._ncackgroundGradientInvalidateFlag = true, Hn.call(this, n)), this._ncackgroundGradientInvalidateFlag && (this._ncackgroundGradientInvalidateFlag = false, this._ncackgroundGradient = this.backgroundGradient && this._m0Shape && this._m0Shape.bounds ? Gradient.prototype.generatorGradient.call(this.backgroundGradient, this._m0Shape.bounds) : null), t) : (this.__mpPointer = false, t);
    }

    function Hn(t) {
        var i = this._7k.x + this.$border / 2;
        var n = this._7k.y + this.$border / 2;
        var e = this._7k.width - this.$border;
        var s = this._7k.height - this.$border;
        var h = 0;
        var r = 0;
        if (this.$borderRadius && (isNumber(this.$borderRadius) ? h = r = this.$borderRadius : (h = this.$borderRadius.x || 0, r = this.$borderRadius.y || 0), h = Math.min(h, e / 2), r = Math.min(r, s / 2)), t && (this._pointerX = this._nc4.x - this.$offsetX + this.$pointerX, this._pointerY = this._nc4.y - this.$offsetY + this.$pointerY, !this._7k.intersectsPoint(this._pointerX, this._pointerY))) {
            var a = new hq(i, n, e, s, h, r, this.$pointerWidth, this._pointerX, this._pointerY);
            return this._m0Shape = a._mi, this._m0Shape.bounds.set(i, n, e, s), void (this.__mpPointer = true);
        }
        this._m0Shape && this._m0Shape.clear();
        this._m0Shape = Shapes.getRect(i, n, e, s, h, r, this._m0Shape);
        this._m0Shape.bounds.set(i, n, e, s);
    }

    function qn(t, i, n, e) {
        return e && (t.width < 0 || t.height < 0) ? (t.x = i, t.y = n, void (t.width = t.height = 0)) : (i < t.x ? (t.width += t.x - i, t.x = i) : i > t.x + t.width && (t.width = i - t.x), void (n < t.y ? (t.height += t.y - n, t.y = n) : n > t.y + t.height && (t.height = n - t.y)));
    }

    function Yn(t, i, e) {
        var s;
        var h = t.position;
        var r = t.layoutByPath === n ? this.layoutByPath : t.layoutByPath;
        return this.$data instanceof Path && r ? (s = MH._ncg(h, this.$data, this.lineWidth, i, e), s.x *= this._k4, s.y *= this._jy) : (s = fi(h, this._7k.width, this._7k.height), s.x += this._7k.x, s.y += this._7k.y), Fn.call(this, s);
    }

    function Wn(t, i) {
        if (i) {
            if (i._7k.isEmpty()) {
                t.$x = i.$x;
                t.$y = i.$y;
            } else {
                var n = Yn.call(i, t);
                t.$x = n.x;
                t.$y = n.y;
                t._hostRotate = n.rotate;
            }
        } else {
            t.$x = 0;
            t.$y = 0;
        }
        t.$invalidateRotate && oq.call(t);
    }

    function Un(t) {
        if (t.lineDash === n) {
            var i;
            var e;
            if (t.setLineDash) {
                i = t.getLineDash;
                e = t.setLineDash;
            } else {
                var s;
                if (t.mozDash !== n) {
                    s = "mozDash";
                } else {
                    if (t.webkitLineDash === n) {
                        return false;
                    }
                    s = "webkitLineDash";
                }
                e = function (t) {
                    this[s] = t;
                };
                i = function () {
                    return this[s];
                };
            }
            Z(t, "lineDash", {
                get: function () {
                    return i.call(this);
                },
                set: function (t) {
                    e.call(this, t);
                }
            });
        }
        if (t.lineDashOffset === n) {
            var h;
            if (t.mozDashOffset !== n) {
                h = "mozDashOffset";
            } else {
                if (t.webkitLineDashOffset === n) {
                    return;
                }
                h = "webkitLineDashOffset";
            }
            Z(t, "lineDashOffset", {
                get: function () {
                    return this[h];
                },
                set: function (t) {
                    this[h] = t;
                }
            })
        }
    }

    function Vn(t, i, n, e, s) {
        var h;
        var r;
        var a;
        var o;
        var f;
        var c;
        var u;
        var _;
        var d = function (t) {
            return function (i) {
                t(i);
            }
        };
        var l = function () {
            r = null;
            a = null;
            o = f;
            f = null;
            c = null;
        };
        var v = function (t) {
            h = t;
            u || (u = createCanvas());
            u.width = h.width;
            u.height = h.height;
            i.width = h.width;
            i.height = h.height;
        };
        var b = function (t) {
            y();
            forEach();
            r = t.transparencyGiven ? t.transparencyIndex : null;
            a = 10 * t.delayTime;
            f = t.disposalMethod;
        };
        var y = function () {
            if (c) {
                var t = c.getImageData(0, 0, h.width, h.height);
                var n = {
                    data: t,
                    _pixels: kn(t.data, h.width, h.height),
                    delay: a
                };
                s.call(i, n);
            }
        };
        var g = function (t) {
            c || (c = u.getContext("2d"));
            var i = t.lctFlag ? t.lct : h.gct;
            var n = c.getImageData(t.leftPos, t.topPos, t.width, t.height);
            t.pixels.forEach(function (t, e) {
                r !== t ? (n.data[4 * e + 0] = i[t][0], n.data[4 * e + 1] = i[t][1], n.data[4 * e + 2] = i[t][2], n.data[4 * e + 3] = 255) : (2 === o || 3 === o) && (n.data[4 * e + 3] = 0);
            });
            c.clearRect(0, 0, h.width, h.height);
            c.putImageData(n, t.leftPos, t.topPos);
        };
        var x = function () {};
        var m = {
            hdr: d(v),
            gce: d(b),
            com: d(x),
            app: {
                NETSCAPE: d(x)
            },
            img: d(g, true),
            eof: function () {
                y();
                n.call(i);
            }
        };
        var E = new XMLHttpRequest;
        isIE || E.overrideMimeType("text/plain; charset=x-user-defined");
        E.onload = function () {
            _ = new dq(E.responseText);
            try {
                vq(_, m);
            } catch (t) {
                e.call(i, "parse");
            }
        };
        E.onerror = function () {
            e.call(i, "xhr");
        };
        E.open("GET", t, true);
        E.send();
    }

    function Xn(t) {
        var i = [51, 10, 10, 99, 110, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 109, 97, 112, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 50, 46, 48, 10, 49, 52, 56, 48, 57, 57, 52, 48, 50, 54, 53, 48, 54, 10, 10, 10];
        return i.forEach(function (n, e) {
            i[e] = t(n);
        }), i.join("");
    }

    function Zn(license, hostname) {
        try {
            if (null == license || license.length < 8) {
                return;
            }
            if (null == hostname || hostname.length <= 0) {
                return;
            }

            for (var n = "", e = 0; e < hostname.length; e++) {
                n += hostname.charCodeAt(e).toString();
            }

            var s = Math.floor(n.length / 5);
            var h = parseInt(n.charAt(s) + n.charAt(2 * s) + n.charAt(3 * s) + n.charAt(4 * s) + n.charAt(5 * s), 10);
            var r = Math.round(hostname.length / 2);
            var a = Math.pow(2, 31) - 1;
            var o = parseInt(license.substring(license.length - 8, license.length), 16);

            for (license = license.substring(0, license.length - 8), n += o; n,length > 10;) {
                n = (parseInt(n.substring(0, 10), 10) + parseInt(n.substring(10, n.length), 10)).toString();
            }

            n = (h * n + r) % a;

            for (var f = "", c = "", e = 0; e < license.length; e += 2) {
                f = parseInt(parseInt(license.substring(e, e + 2), 16) ^ Math.floor(n / a * 255), 10);
                c += String.fromCharCode(f);
                n = (h * n + r) % a;
            }
            return 0 | c[0] ? Wq = window.decodeURIComponent(c) : null;
        } catch (u) {
        }
    }

    function Kn() {
        //debugger;

        var license = "8dec9f2f783e5826378220bad9683501c9bbeac7d90deea8c64f4bb43d4e32b98674cf801726659bdf2b4090e18299f56a3c9a91344bcda356104a55a973ba0978d39a1b75c027c4718d8b53473fe15403c3d7027633f8," +
            "f43b4e113337560ea0392c49fe475e6d5439227796cda86127370781f999e0a0febe7418392fce2ec61b8fe3baecfd0bd71b95ee2829913463cc3e828f92dea7b3289a76f0224fe89ff07f9c5d1e4e36474b2d040a44cb," +
            "cb1a696d47a44f7310b579f5e45971efdabdd4f6c7717eabfac07af8f92701fdfac0d740ac8caf8ec68b9fc57cb1376aef9112c0af805babe9409c365ea9b1808e8cb2a4af109430445c751e1fffc38ca8c79e012a8d7d";

        if (!license) {
            return false;
        }

        var i;
        var licenseArr = license.split(",");

        for (var n = 0; n < licenseArr.length && (i = Zn(licenseArr[n], window.location.hostname), !(i && i.split("\n").length >= 8)); n++) {
            1 == licenseArr.length && (i = Zn(licenseArr[n], "qunee"));
        }

        if (!i || i.split("\n").length < 8) {
            return true;
            // "" === window.location.hostname || xq == "localhost" || xq == "127.0.0.1" ? (Zq = nY, Jq = false, tY = false, void (qq = false)) : (Zq = nY, void (Jq = true));
        }

        // qq = i.split("\n");

        // var e = qq[3];
        // if (e != rU) return Xq = true, void (tY = true);
        // Jq = false, tY = false;
        // var s = qq[0];
        // (pc == s || wc == s) && (Xq = false);
        // var h = qq[5];
        // Kq = h;
        // var r = qq[6];
        // Zq = r;
    }

    function Jn() {
        //debugger;
        var license = "8dec9f2f783e5826378220bad9683501c9bbeac7d90deea8c64f4bb43d4e32b98674cf801726659bdf2b4090e18299f56a3c9a91344bcda356104a55a973ba0978d39a1b75c027c4718d8b53473fe15403c3d7027633f8," +
            "f43b4e113337560ea0392c49fe475e6d5439227796cda86127370781f999e0a0febe7418392fce2ec61b8fe3baecfd0bd71b95ee2829913463cc3e828f92dea7b3289a76f0224fe89ff07f9c5d1e4e36474b2d040a44cb," +
            "cb1a696d47a44f7310b579f5e45971efdabdd4f6c7717eabfac07af8f92701fdfac0d740ac8caf8ec68b9fc57cb1376aef9112c0af805babe9409c365ea9b1808e8cb2a4af109430445c751e1fffc38ca8c79e012a8d7d";

        if (license) {
            var i;
            var licenseArr = license.split(",");

            for (var n = 0; n < licenseArr.length && (i = eY(licenseArr[n], window.location.hostname), !(i && i.split("\n").length >= 8)); n++) {
                1 == licenseArr.length && (i = eY(licenseArr[n], "qunee"));
            }

            if (i.split("\n").length >= 8) {
                return false;
            }
        }
        return window.location.hostname && window.location.hostname != "localhost" && window.location.hostname != "127.0.0.1" ? true : false;
    }

    function Qn() {
        if (true) {
            var t = oh.prototype._jk;
            var i = Vq;
            oh.prototype._jk = function () {
                t.apply(this, arguments);
                i.call(this._ncaseCanvas, this.g);
            };
            var n = yY.prototype._h7;
            yY.prototype._h7 = function (t) {
                n.apply(this, arguments);
                i.call(this, t);
            }
        }
    }

    function te() {
        if (Kq !== true && Kq) {
            var t = Kq.split(".");
            if (3 != t.length) {
                return void (BaseUI.prototype._jk = null);
            }
            var i = parseInt(t[0], 10);
            var n = parseInt(t[1], 10);
            var e = parseInt(t[2], 10);
            var s = 3;
            var h = (365.2425 * (i - 2e3 + 10 * s) + (n - 1) * s * 10 + e) * s * 8 * s * 1200 * 1e3;
            gq > h && (BaseUI.prototype._jk = null);
        }
    }

    function isIE() {
        var t = 0 | true;
        t && (HashList.prototype._kx = function (i, e) {
            var s = i.id;
            return s === n || this.containsById(s) ? false : this._k0.length > t ? false : (g(this._k0, i, e), this._lv[s] = i, i);
        })
    }

    function ne() {
        true && (HashList.prototype._kx = HashList.prototype._fx);
    }

    function ee() {
        true && (yY.prototype._jk = yY.prototype.render);
    }

    function se() {
        true && (EY.prototype._g6 = EY.prototype._eq);
    }

    function he() {
        true && (bY.prototype.render = yY.prototype._jk);
    }

    function re() {
        qq === n && (yY.prototype._je = Rect.equals);
    }

    function ae(t) {
        var i = createCanvas(true);
        return Un(i.g), i.onselectstart = function () {
            return false
        }, t.appendChild(i), i.className = "Q-Canvas", i;
    }

    function d(t, i) {
        function n(t, n) {
            for (var e = t.length, s = n.length, h = e + s, r = new Array(h), a = 0, o = 0,f = 0; h > f;) {
                r[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            }
            return r;
        }

        function forEachChild(t) {
            var i = t.length;
            var s = Math.ceil(i / 2);
            return 1 >= i ? t : n(forEachChild(t.slice(0, s)), forEachChild(t.slice(s)));
        }

        return forEachChild(t);
    }

    function oe(t) {
        t.width = t.width;
    }

    function fe(t) {
        lY || (lY = "imageSmoothingEnabled" in CanvasRenderingContext2D.prototype ? "imageSmoothingEnabled" : "mozImageSmoothingEnabled" in CanvasRenderingContext2D.prototype ? "mozImageSmoothingEnabled" : "msImageSmoothingEnabled" in CanvasRenderingContext2D.prototype ? "msImageSmoothingEnabled" : "webkitImageSmoothingEnabled" in CanvasRenderingContext2D.prototype ? "webkitImageSmoothingEnabled" : "imageSmoothingEnabled"), t[lY] = false;
    }

    function ce(t, i, n, e, s) {
        e = _gw(i + e) - (i = _ndr(i));
        s = _gw(n + s) - (n = _ndr(n));
        t.clearRect(i, n, e, s);
        t.rect(i, n, e, s);
    }

    function _ndr(t) {
        return Math.floor(t);
    }

    function _gw(t) {
        return Math.ceil(t);
    }

    function ue(t) {
        var i = [];
        return t.forEach(function (t) {
            i.push(-t);
        }), i;
    }

    function _e(t) {
        return t %= (Math.PI * 2), 0 > t && (t += (Math.PI * 2)), t;
    }

    function de(t, i, n, e, s, h, r, a) {
        var o = ((t * e - i * n) * (s - r) - (t - n) * (s * a - h * r)) / ((t - n) * (h - a) - (i - e) * (s - r));
        var f = ((t * e - i * n) * (h - a) - (i - e) * (s * a - h * r)) / ((t - n) * (h - a) - (i - e) * (s - r));
        if (isNaN(o) || isNaN(f)) {
            return false;
        }
        if (t >= n) {
            if (!(o >= n && t >= o)) {
                return false;
            }
        } else if (!(o >= t && n >= o)) {
            return false;
        }
        if (i >= e) {
            if (!(f >= e && i >= f)) {
                return false;
            }
        } else if (!(f >= i && e >= f)) {
            return false;
        }
        if (s >= r) {
            if (!(o >= r && s >= o)) {
                return false;
            }
        } else if (!(o >= s && r >= o)) {
            return false;
        }
        if (h >= a) {
            if (!(f >= a && h >= f)) {
                return false;
            }
        } else if (!(f >= h && a >= f)) {
            return false;
        }
        return true;
    }

    function le(t, i) {
        for (var n = 0, e = t.length; e > n;) {
            for (var s = t[n], h = t[(n + 1) % e], r = 0; 4 > r;) {
                var a = i[r], o = i[(r + 1) % e];
                if (de(s[0], s[1], h[0], h[1], a[0], a[1], o[0], o[1])) {
                    return true;
                }
                r++;
            }
            n++;
        }
        return false;
    }

    function ve(t, i, n, e) {
        return [t * e - i * n, t * n + i * e];
    }

    function be(t) {
        return t.parent ? (t = t.parent, t._e5 ? t._e5 : t instanceof Group && t._gt === false ? t : null) : null;
    }

    function ye(t, i, n) {
        if (n = n || i.toAgent, n == t) {
            return false;
        }
        var e = t.getEdgeBundle(n);
        return e || (e = new EdgeBundle(t, n), t._linkedNodes[n.id] = e), e._iu(i, t);
    }

    function ge(t, i, n) {
        if (n = n || i.toAgent, n == t) {
            return false;
        }
        var e = t.getEdgeBundle(n);
        return e ? e._ds(i, t) : void 0;
    }

    function xe(t, i, e) {
        return e === n && (e = i.toAgent), e != t ? (t._8c || (t._8c = new HashList), t._8c.add(i) === false ? false : void t._8y++) : void 0;
    }

    function me(t, i, n) {
        return t._8c && t._8c.remove(i) !== false ? (t._8y-- , void ge(t, i, n)) : false;
    }

    function Ee(t, i) {
        return i.fromAgent != t ? (t._8w || (t._8w = new HashList), t._8w.add(i) === false ? false : void t._nbi++) : void 0;
    }

    function pe(t, i) {
        return t._8w && t._8w.remove(i) !== false ? (t._nbi-- , void ge(i.fromAgent, i, t)) : false;
    }

    function we(t, i) {
        if (i === n && (i = t instanceof Edge), i) {
            if (t.isInvalid()) {
                return null;
            }
            var e = we(t.from, false);
            if (t.isLooped()) {
                return e;
            }
            for (var s = we(t.to, false); null != e && null != s;) {
                if (e == s) {
                    return e;
                }
                if (e.isDescendantOf(s)) {
                    return s;
                }
                if (s.isDescendantOf(e)) {
                    return e;
                }
                e = we(e, false);
                s = we(s, false);
            }
            return null;
        }
        for (var h = t.parent; null != h;) {
            if (h._ic()) {
                return h;
            }
            h = h.parent;
        }
        return null;
    }

    function Te(t, i, n) {
        t._ic() && t.hasChildren() && t.children.forEach(function (t) {
            t instanceof Node && i.add(t) && Te(t, i, n);
        }, this);
        t.hasFollowers() && t._e4.forEach(function (t) {
            (null == n || n.accept(t)) && i.add(t) && Te(t, i, n);
        });
    }

    function ke(t, i) {
        i.parent ? i.parent.setChildIndex(i, i.parent.childrenCount - 1) : t.roots.setIndex(i, t.roots.length - 1);
    }

    function Oe(t, i) {
        if (i instanceof Edge) {
            return void (i.isInvalid() || Se(t, i));
        }
        for (ke(t, i); i = i.parent;) {
            ke(t, i);
        }
    }

    function Me(t, i) {
        if (i instanceof Edge) {
            return void (i.isInvalid() || Se(t, i));
        }
        for (ke(t, i); i = i.parent;) {
            ke(t, i);
        }
    }

    function Se(t, i) {
        var n = i.fromAgent;
        if (i.isLooped()) {
            ke(t, n);
        } else {
            var e = i.toAgent;
            ke(t, n);
            ke(t, e);
        }
    }

    function Ie(t, i) {
        return t._8y++ , t._gc ? (i._iy = t._il, t._il._iz = i, void (t._il = i)) : (t._gc = i, void (t._il = i));
    }

    function Ae(t, i) {
        t._8y-- , t._il == i && (t._il = i._iy), i._iy ? i._iy._iz = i._iz : t._gc = i._iz, i._iz && (i._iz._iy = i._iy), i._iy = null, i._iz = null, ge(t, i, i.$to);
    }

    function Ce(t, i) {
        return t._nbi++ , t._in ? (i._kl = t._jv, t._jv._ko = i, void (t._jv = i)) : (t._in = i, void (t._jv = i));
    }

    function Le(t, i) {
        t._nbi-- ;
        t._jv == i && (t._jv = i._kl), i._kl ? i._kl._ko = i._ko : t._in = i._ko, i._ko && (i._ko._kl = i._kl), i._kl = null, i._ko = null;
    }

    function Re(t, i) {
        return i = i || new HashList, t.forEachEdge(function (t) {
            i.add({ id: t.id, edge: t, fromAgent: t.$from._e5, toAgent: t.$to._e5 });
        }), t.forEachChild(function (t) {
            t instanceof Node && Re(t, i);
        }), i;
    }

    function Pe(t, i, n) {
        return Ne(t, i, n) === false ? false : De(t, i, n);
    }

    function De(t, i, n) {
        if (t._gc) {
            for (var e = t._gc; e;) {}
            if (i.call(n, e) === false) {
                return false;
            }
            e = e._iz;
        }
    }

    function Ne(t, i, n) {
        if (t._in) {
            for (var e = t._in; e;) {
                if (i.call(n, e) === false) {
                    return false;
                }
                e = e._ko;
            }
        }
    }

    function je(t, i, e, s, h, r, a) {
        return r || a ? (r = r || 0, a = a === n ? r : a || 0, r = Math.min(r, s / 2), a = Math.min(a, h / 2), t.moveTo(i + r, e), t.lineTo(i + s - r, e), t.quadTo(i + s, e, i + s, e + a), t.lineTo(i + s, e + h - a), t.quadTo(i + s, e + h, i + s - r, e + h), t.lineTo(i + r, e + h), t.quadTo(i, e + h, i, e + h - a), t.lineTo(i, e + a), t.quadTo(i, e, i + r, e), t.closePath(), t) : (t.moveTo(i, e), t.lineTo(i + s, e), t.lineTo(i + s, e + h), t.lineTo(i, e + h), t.closePath(), t);
    }

    function $e(t, i) {
        var n = i.r || 1;
        var e = i.cx || 0;
        var s = i.cy || 0;
        var h = n * Math.tan(Math.PI / 8);
        var r = n * Math.sin(Math.PI / 4);
        t.moveTo(e + n, s);
        t.quadTo(e + n, s + h, e + r, s + r);
        t.quadTo(e + h, s + n, e, s + n);
        t.quadTo(e - h, s + n, e - r, s + r);
        t.quadTo(e - n, s + h, e - n, s);
        t.quadTo(e - n, s - h, e - r, s - r);
        t.quadTo(e - h, s - n, e, s - n);
        t.quadTo(e + h, s - n, e + r, s - r);
        t.quadTo(e + n, s - h, e + n, s);
    }

    function Be(t, i, n, e, s) {
        i instanceof tn && (e = i.width, s = i.height, n = i.cy - s / 2, i = i.cx - e / 2);
        var h = .5522848;
        var r = e / 2 * h;
        var a = s / 2 * h;
        var o = i + e;
        var f = n + s;
        var c = i + e / 2;
        var u = n + s / 2;
        return t.moveTo(i, u), t.curveTo(i, u - a, c - r, n, c, n), t.curveTo(c + r, n, o, u - a, o, u), t.curveTo(o, u + a, c + r, f, c, f), t.curveTo(c - r, f, i, u + a, i, u), t;
    }

    function Fe(t, i, n, e, s) {
        var h = 2 * e;
        var r = 2 * s;
        var a = i + e / 2;
        var o = n + s / 2;
        return t.moveTo(a - h / 4, o - r / 12), t.lineTo(i + .306 * e, n + .579 * s), t.lineTo(a - h / 6, o + r / 4), t.lineTo(i + e / 2, n + .733 * s), t.lineTo(a + h / 6, o + r / 4), t.lineTo(i + .693 * e, n + .579 * s), t.lineTo(a + h / 4, o - r / 12), t.lineTo(i + .611 * e, n + .332 * s), t.lineTo(a + 0, o - r / 4), t.lineTo(i + .388 * e, n + .332 * s), t.closePath(), t;
    }

    function Ge(t, i, n, e, s) {
        return t.moveTo(i, n), t.lineTo(i + e, n + s / 2), t.lineTo(i, n + s), t.closePath(), t;
    }

    function ze(t, i, n, e, s) {
        return t.moveTo(i, n + s / 2), t.lineTo(i + e / 2, n), t.lineTo(i + e, n + s / 2), t.lineTo(i + e / 2, n + s), t.closePath(), t;
    }

    function He(t, i, n, e, s, h) {
        return t.moveTo(i, n), t.lineTo(i + e, n + s / 2), t.lineTo(i, n + s), h || (t.lineTo(i + .25 * e, n + s / 2), t.closePath()), t;
    }

    function qe(t, i, n, e, s) {
        if (!t || 3 > t) {
            throw new Error("edge number must greater than 2");
        }
        t = 0 | t;
        e = e || 50;
        s = s || 0;
        i = i || 0;
        n = n || 0;
        for (var h, r, a = 0, o = 2 * Math.PI / t, f = new Path; t > a;) {
            h = i + e * Math.cos(s);
            r = n + e * Math.sin(s);
            a ? f.lineTo(h, r) : f.moveTo(h, r);
            ++a;
            s += o;
        }
        return f.closePath(), f;
    }

    function Ye() {
        var t = new Path;
        return t.moveTo(75, 40), t.curveTo(75, 37, 70, 25, 50, 25), t.curveTo(20, 25, 20, 62.5, 20, 62.5), t.curveTo(20, 80, 40, 102, 75, 120), t.curveTo(110, 102, 130, 80, 130, 62.5), t.curveTo(130, 62.5, 130, 25, 100, 25), t.curveTo(85, 25, 75, 37, 75, 40), t;
    }

    function We() {
        var t = new Path;
        return t.moveTo(20, 0), t.lineTo(80, 0), t.lineTo(100, 100), t.lineTo(0, 100), t.closePath(), t;
    }

    function Ue() {
        var t = new Path;
        return t.moveTo(100, 0), t.lineTo(100, 80), t.lineTo(0, 100), t.lineTo(0, 20), t.closePath(), t;
    }

    function Ve() {
        var t = new Path;
        return t.moveTo(20, 0), t.lineTo(100, 0), t.lineTo(80, 100), t.lineTo(0, 100), t.closePath(), t;
    }

    function Xe() {
        var t = new Path;
        return t.moveTo(43, 23), t.lineTo(28, 10), t.lineTo(37, 2), t.lineTo(63, 31), t.lineTo(37, 59), t.lineTo(28, 52), t.lineTo(44, 38), t.lineTo(3, 38), t.lineTo(3, 23), t.closePath(), t;
    }

    function Ze() {
        var t = new Path;
        return t.moveTo(1, 8), t.lineTo(7, 2), t.lineTo(32, 26), t.lineTo(7, 50), t.lineTo(1, 44), t.lineTo(18, 26), t.closePath(), t.moveTo(27, 8), t.lineTo(33, 2), t.lineTo(57, 26), t.lineTo(33, 50), t.lineTo(27, 44), t.lineTo(44, 26), t.closePath(), t;
    }

    function Ke() {
        var t = new Path;
        return t.moveTo(0, 15), t.lineTo(23, 15), t.lineTo(23, 1), t.lineTo(47, 23), t.lineTo(23, 43), t.lineTo(23, 29), t.lineTo(0, 29), t.closePath(), t;
    }

    function Je() {
        var t = new Path;
        return t.moveTo(0, 21), t.lineTo(30, 21), t.lineTo(19, 0), t.lineTo(25, 0), t.lineTo(47, 25), t.lineTo(25, 48), t.lineTo(19, 48), t.lineTo(30, 28), t.lineTo(0, 28), t.closePath(), t;
    }

    function Qe() {
        var t = new Path;
        return t.moveTo(0, 0), t.lineTo(34, 24), t.lineTo(0, 48), t.lineTo(14, 24), t.closePath(), t;
    }

    function ts() {
        var t = new Path;
        return t.moveTo(20, 0), t.lineTo(34, 14), t.lineTo(20, 28), t.lineTo(22, 18), t.lineTo(1, 25), t.lineTo(10, 14), t.lineTo(1, 3), t.lineTo(22, 10), t.closePath(), t;
    }

    function is() {
        var t = new Path;
        return t.moveTo(4, 18), t.lineTo(45, 18), t.lineTo(37, 4), t.lineTo(83, 25), t.lineTo(37, 46), t.lineTo(45, 32), t.lineTo(4, 32), t.closePath(), t;
    }

    function ns() {
        var t = new Path;
        return t.moveTo(17, 11), t.lineTo(27, 11), t.lineTo(42, 27), t.lineTo(27, 42), t.lineTo(17, 42), t.lineTo(28, 30), t.lineTo(4, 30), t.lineTo(4, 23), t.lineTo(28, 23), t.closePath(), t;
    }

    function es() {
        Shapes.register(Consts.SHAPE_CIRCLE, Be(new Path, 0, 0, 100, 100));
        Shapes.register(Consts.SHAPE_RECT, je(new Path, 0, 0, 100, 100));
        Shapes.register(Consts.SHAPE_ROUNDRECT, je(new Path, 0, 0, 100, 100, 20, 20));
        Shapes.register(Consts.SHAPE_STAR, Fe(new Path, 0, 0, 100, 100));
        Shapes.register(Consts.SHAPE_TRIANGLE, Ge(new Path, 0, 0, 100, 100));
        Shapes.register(Consts.SHAPE_PENTAGON, qe(5));
        Shapes.register(Consts.SHAPE_HEXAGON, qe(6));
        Shapes.register(Consts.SHAPE_DIAMOND, ze(new Path, 0, 0, 100, 100));
        Shapes.register(Consts.SHAPE_HEART, Ye());
        Shapes.register(Consts.SHAPE_TRAPEZIUM, We());
        Shapes.register(Consts.SHAPE_RHOMBUS, Ue());
        Shapes.register(Consts.SHAPE_PARALLELOGRAM, Ve());
        var t = new Path;
        t.moveTo(20, 0);
        t.lineTo(40, 0);
        t.lineTo(40, 20);
        t.lineTo(60, 20);
        t.lineTo(60, 40);
        t.lineTo(40, 40);
        t.lineTo(40, 60);
        t.lineTo(20, 60);
        t.lineTo(20, 40);
        t.lineTo(0, 40);
        t.lineTo(0, 20);
        t.lineTo(20, 20);
        t.closePath();
        Shapes.register(Consts.SHAPE_CROSS, t);
        Shapes.register(Consts.SHAPE_ARROW_STANDARD, He(new Path, 0, 0, 100, 100));
        Shapes.register(Consts.SHAPE_ARROW_1, Xe());
        Shapes.register(Consts.SHAPE_ARROW_2, Ze());
        Shapes.register(Consts.SHAPE_ARROW_3, Ke());
        Shapes.register(Consts.SHAPE_ARROW_4, Je());
        Shapes.register(Consts.SHAPE_ARROW_5, Qe());
        Shapes.register(Consts.SHAPE_ARROW_6, ts());
        Shapes.register(Consts.SHAPE_ARROW_7, is());
        Shapes.register(Consts.SHAPE_ARROW_8, ns());
        Shapes.register(Consts.SHAPE_ARROW_OPEN, He(new Path, 0, 0, 100, 100, true));
    }

    function Bus() {
        doSuperConstructor(this, Bus, arguments);
        this.busLayout = true;
    }

    function GraphModel() {
        doSuperConstructor(this, GraphModel);
        this._$v = new Dispatcher;
    }

    function rs() {
        if (this._gt === true) {
            var t = this._8c;
            var i = this._8w;
            if (t) {
                for (t = t._k0; t.length;) {
                    var n = t[0];
                    me(this, n, n.toAgent);
                }
            }
            if (i) {
                for (i = i._k0; i.length;) {
                    var n = i[0];
                    pe(this, n, n.fromAgent);
                }
            }
            return void this.forEachChild(function (t) {
                t._ic() && rs.call(t);
            });
        }
        var e = Re(this);
        e.forEach(function (t) {
            t = t.edge;
            var i = t.$from;
            var n = t.$to;
            var e = i.isDescendantOf(this);
            var s = n.isDescendantOf(this);
            e && !s ? (xe(this, t), ye(this, t)) : s && !e && (Ee(this, t), ye(t.fromAgent, t, this));
        }, this);
    }

    function Text() {
        doSuperConstructor(this, Text, arguments);
        this.$image = null;
    }

    function os(t, i, n, e) {
        return t[i] = n, e ?
            {
                get: function () {
                    return this[i];
                },
                set: function (t) {
                if (t !== this[i]) {
                    this[i] = t;
                    !this._nc1;
                    this._1d = true;
                    for (var n = e.length; --n >= 0;) {
                        this[e[n]] = true;
                    }
                }
            }
            } :
            {
                get: function () {
                    return this[i];
                },
                set: function (t) {
                    t !== this[i] && (this[i] = t);
                }
            }
    }

    function fs(t, i) {
        var n = {};
        var e = {};
        for (var s in i) {
            var h = i[s];
            h.validateFlags && h.validateFlags.forEach(function (t, i, n) {
                n[i] = "$invalidate" + t;
                e[t] = true;
            });
            n[s] = os(t, "$" + s, h.value, h.validateFlags);
        }
        for (var r in e) {
            t["$invalidate" + r] = true;
        }
        Object.defineProperties(t, n);
    }

    function cs(t, i, n, e) {
        if (Array.isArray(i)) {
            for (var s = i.length; --s >= 0;) {
                cs(t, i[s], n, e);
            }
        } else {
            var h = i.target;
            if (h) {
                if (h instanceof BaseUI || (h = t[h]), !h) {
                    return
                }
            } else {
                h = t;
            }
            if (e || (e = t.getProperty(i.property, n)), i.bindingProperty && (h[i.bindingProperty] = e), i.callback) {
                var r = i.callback;
                r instanceof Function || (r = t[r]), r instanceof Function && r.call(t, e, h);
            }
        }
    }

    function us() {
        LY.forEach(function (t) {
            this[t] = {};
        }, this);
    }

    function _s(t, i, n, e) {
        return e == Consts.PROPERTY_TYPE_ACCESSOR ? void (t[n] = i) : e == Consts.PROPERTY_TYPE_CLIENT ? void t.set(n, i) : e == Consts.PROPERTY_TYPE_STYLE ? void t.setStyle(n, i) : false;
    }

    function EdgeUI() {
        doSuperConstructor(this, EdgeUI, arguments);
    }

    function NodeUI() {
        doSuperConstructor(this, NodeUI, arguments);
    }

    function vs(t, i, n, e) {
        var s = bs(t, i, n, e);
        var h = [];
        if (ms(t)) {
            ys(s, i, n, h, e.getStyle(Styles.EDGE_EXTEND));
        } else {
            As(t, i, n, h, s, e);
            var r = gs(t, e);
            var a = r ? ks(t, s, i, n, e.getStyle(Styles.EDGE_SPLIT_PERCENT)) : e.getStyle(Styles.EDGE_SPLIT_VALUE);
            0 == a && (s = !s);
        }
        return h;
    }

    function bs(t, i, n) {
        if (null != t) {
            if (t == Consts.EDGE_TYPE_ELBOW_HORIZONTAL || t == Consts.EDGE_TYPE_ORTHOGONAL_HORIZONTAL ||
                t == Consts.EDGE_TYPE_HORIZONTAL_VERTICAL || t == Consts.EDGE_TYPE_EXTEND_LEFT ||
                t == Consts.EDGE_TYPE_EXTEND_RIGHT) {
                return true;
            }
            if (t == Consts.EDGE_TYPE_ELBOW_VERTICAL || t == Consts.EDGE_TYPE_ORTHOGONAL_VERTICAL ||
                t == Consts.EDGE_TYPE_VERTICAL_HORIZONTAL || t == Consts.EDGE_TYPE_EXTEND_TOP ||
                t == Consts.EDGE_TYPE_EXTEND_BOTTOM) {
                return false;
            }
        }
        var e = ws(i, n);
        var s = Ts(i, n);
        return e >= s;
    }

    function ys(t, i, n, e, s) {
        t ? Ds(i, n, e, s) : Ns(i, n, e, s);
    }

    function gs(t, i) {
        return i.getStyle(Styles.EDGE_SPLIT_BY_PERCENT);
    }

    function xs(t) {
        return null != t && (t == Consts.EDGE_TYPE_EXTEND_TOP || t == Consts.EDGE_TYPE_EXTEND_LEFT || t == Consts.EDGE_TYPE_EXTEND_BOTTOM || t == Consts.EDGE_TYPE_EXTEND_RIGHT);
    }

    function ms(t) {
        return t && (t == Consts.EDGE_TYPE_ELBOW || t == Consts.EDGE_TYPE_ELBOW_HORIZONTAL || t == Consts.EDGE_TYPE_ELBOW_VERTICAL);
    }

    function Es(t, i, n, e, s) {
        if (t == Consts.EDGE_TYPE_HORIZONTAL_VERTICAL || t == Consts.EDGE_TYPE_VERTICAL_HORIZONTAL) {
            return new Point(e.x + e.width / 2, e.y + e.height / 2);
        }
        var h;
        if (xs(t)) {
            var r = Math.min(n.y, e.y);
            var a = Math.min(n.x, e.x);
            var o = Math.max(n.bottom, e.bottom);
            var f = Math.max(nright, e.right);
            if (h = s.getStyle(Styles.EDGE_EXTEND), t == Consts.EDGE_TYPE_EXTEND_TOP) {
                return new Point((a + f) / 2, r - h);
            }
            if (t == Consts.EDGE_TYPE_EXTEND_LEFT) {
                return new Point(a - h, (r + o) / 2);
            }
            if (t == Consts.EDGE_TYPE_EXTEND_BOTTOM) {
                return new Point((a + f) / 2, o + h);
            }
            if (t == Consts.EDGE_TYPE_EXTEND_RIGHT) {
                return new Point(f + h, (r + o) / 2)
            }
        }
        var c = gs(t, s);
        if (h = c ? ks(t, i, n, e, s.getStyle(Styles.EDGE_SPLIT_PERCENT)) : s.getStyle(Styles.EDGE_SPLIT_VALUE), h == Number.NEGATIVE_INFINITY || h == Number.POSITIVE_INFINITY) {
            return new Point(e.x + e.width / 2, e.y + e.height / 2);
        }
        if (0 == h) {
            return new Point(n.x + n.width / 2, n.y + n.height / 2);
        }
        if (i) {
            var u = n.x + n.right < e.x + e.right;
            return new Point(Ss(u, h, n.x, n.width), n.y + n.height / 2);
        }
        var _ = n.y + n.bottom < e.y + e.bottom;
        return new Point(n.x + n.width / 2, Ss(_, h, n.y, n.height));
    }

    function ps(t, i, n, e) {
        var s = Math.max(i, e) - Math.min(t, n);
        return s - (i - t + e - n);
    }

    function ws(t, i) {
        var n = Math.max(t.x + t.width, i.x + i.width) - Math.min(t.x, i.x);
        return n - t.width - i.width;
    }

    function Ts(t, i) {
        var n = Math.max(t.y + t.height, i.y + i.height) - Math.min(t.y, i.y);
        return n - t.height - i.height;
    }

    function ks(t, i, n, e, s) {
        var h = Os(s, i, n, e, null);
        return h * s;
    }

    function Os(t, i, n, e) {
        return i ? Ms(t, n.x, n.right, e.x, e.right) : Ms(t, n.y, n.bottom, e.y, e.bottom);
    }

    function Ms(t, i, n, e, s) {
        var h = ps(i, n, e, s);
        var r = e + s > i + n;
        if (h > 0) {
            if (1 == t) {
                return h + (s - e) / 2;
            }
            if (t >= 0 && 1 > t) {
                return h;
            }
            if (0 > t) {
                return r ? e - i : n - s;
            }
        }
        return Math.abs(r && t > 0 || !r && 0 > t ? n - s : i - e);
    }

    function Ss(t, i, n, e) {
        return t == i > 0 ? n + e + Math.abs(i) : n - Math.abs(i);
    }

    function Is(t, i) {
        var n = t.length;
        if (!(3 > n)) {
            var e = i.getStyle(Styles.EDGE_CORNER);
            if (e != Consts.EDGE_CORNER_NONE) {
                var s = i.getStyle(Styles.EDGE_CORNER_RADIUS);
                var h = 0;
                var r = 0;
                s && (isNumber(s) ? h = r = s : (h = s.x || 0, r = s.y || 0));
                for (var a, o, f, c, u = t[0], _ = t[1], d = null, l = 2; n > l; l++) {
                    var v = t[l];
                    var b = _.x - u.x;
                    var y = _.y - u.y;
                    var m = v.x - _.x;
                    var E = v.y - _.y;
                    var p = !b || b > -.01 && .01 > b;
                    var w = !y || y > -.01 && .01 > y;
                    var T = !m || m > .01 && .01 > m;
                    var k = !E || E > -.01 && .01 > E;
                    var O = w;
                    (p && k || w && T) && (O ? (a = Math.min(2 == l ? Math.abs(b) : Math.abs(b) / 2, h), o = Math.min(l == n - 1 ? Math.abs(E) : Math.abs(E) / 2, r), f = new Point(_.x - (b > 0 ? a : -a), _.y), c = new Point(_.x, _.y + (E > 0 ? o : -o))) : (a = Math.min(l == n - 1 ? Math.abs(m) : Math.abs(m) / 2, h), o = Math.min(2 == l ? Math.abs(y) : Math.abs(y) / 2, r), f = new Point(_.x, _.y - (y > 0 ? o : -o)), c = new Point(_.x + (m > 0 ? a : -a), _.y)), x(t, _), l-- , n-- , (f.x != u.x || f.y != u.y) && (g(t, f, l), l++ , n++), e == Consts.EDGE_CORNER_BEVEL ? (g(t, c, l), l++ , n++) : e == Consts.EDGE_CORNER_ROUND && (g(t, [_, c], l), l++ , n++)), u = _, _ = v;
                }
                null != d && c.x == _.x && c.y == _.y && x(t, _);
            }
        }
    }

    function As(t, i, n, e, s, h) {
        var r = h.getStyle(Styles.EDGE_CONTROL_POINT);
        var a = null == r;
        if (null != r) {
            var o = (new Rect).union(i).union(n);
            o.intersects(r) || (s = Cs(r.x, r.y, o.y, o.x, o.bottom, o.right));
        } else {
            r = Es(t, s, i, n, h);
        }
        s ? Ps(i, n, r, e, a) : Rs(i, n, r, e, a);
    }

    function Cs(t, i, n, e, s, h) {
        return n > i && n - i > e - t && n - i > t - h || i > s && i - s > e - t && i - s > t - h ? false : true;
    }

    function Ls(t, i, n) {
        return i >= t.x && i <= t.right && n >= t.y && n <= t.bottom;
    }

    function Rs(t, i, n, e, s) {
        var h = Math.max(t.y, i.y);
        var r = Math.min(t.y + t.height, i.y + i.height);
        var a = null != n ? n.y : r + (h - r) / 2;
        var o = t.x + t.width / 2;
        var f = i.x + i.width / 2;
        if (0 == s && null != n && (n.x >= t.x && n.x <= t.x + t.width && (o = n.x), n.x >= i.x && n.x <= i.x + i.width && (f = n.x)), Ls(i, o, a) || Ls(t, o, a) || e.push(new Point(o, a)), Ls(i, f, a) || Ls(t, f, a) || e.push(new Point(f, a)), 0 == e.length) {
            if (null != n) {
                Ls(i, n.x, a) || Ls(t, n.x, a) || e.push(new Point(n.x, a));
            } else {
                var c = Math.max(t.x, i.x);
                var u = Math.min(t.x + t.width, i.x + i.width);
                e.push(new Point(c + (u - c) / 2, a));
            }
        }
    }

    function Ps(t, i, n, e, s) {
        var h = Math.max(t.x, i.x);
        var r = Math.min(t.x + t.width, i.x + i.width);
        var a = null != n ? n.x : r + (h - r) / 2;
        var o = t.y + t.height / 2;
        var f = i.y + i.height / 2;
        if (0 == s && null != n && (n.y >= t.y && n.y <= t.y + t.height && (o = n.y), n.y >= i.y && n.y <= i.y + i.height && (f = n.y)), Ls(i, a, o) || Ls(t, a, o) || e.push(new Point(a, o)), Ls(i, a, f) || Ls(t, a, f) || e.push(new Point(a, f)), 0 == e.length) {
            if (null != n) {
                Ls(i, a, n.y) || Ls(t, a, n.y) || e.push(new Point(a, n.y));
            } else {
                var c = Math.max(t.y, i.y);
                var u = Math.min(t.y + t.height, i.y + i.height);
                e.push(new Point(a, c + (u - c) / 2));
            }
        }
    }

    function Ds(t, i, n, e) {
        var s = i.x + i.width < t.x;
        var h = t.x + t.width < i.x;
        var r = s ? t.x : t.x + t.width;
        var a = t.y + t.height / 2;
        var o = h ? i.x : i.x + i.width;
        var f = i.y + i.height / 2;
        var c = e;
        var u = s ? -c : c;
        var _ = new Point(r + u, a);
        u = h ? -c : c;
        var d = new Point(o + u, f);
        if (s == h) {
            var l = s ? Math.min(r, o) - e : Math.max(r, o) + e;
            n.push(new Point(l, a));
            n.push(new Point(l, f));
        } else if (_.x < d.x == s) {
            var v = a + (f - a) / 2;
            n.push(_);
            n.push(new Point(_.x, v));
            n.push(new Point(d.x, v));
            n.push(d);
        } else {
            n.push(_);
            n.push(d);
        }
    }

    function Ns(t, i, n, e) {
        var s = i.y + i.height < t.y;
        var h = t.y + t.height < i.y;
        var r = t.x + t.width / 2;
        var a = s ? t.y : t.y + t.height;
        var o = i.x + i.width / 2;
        var f = h ? i.y : i.y + i.height;
        var c = e;
        var u = s ? -c : c;
        var _ = new Point(r, a + u);
        u = h ? -c : c;
        var d = new Point(o, f + u);
        if (s == h) {
            var l = s ? Math.min(a, f) - e : Math.max(a, f) + e;
            n.push(new Point(r, l));
            n.push(new Point(o, l));
        } else if (_.y < d.y == s) {
            var v = r + (o - r) / 2;
            n.push(_);
            n.push(new Point(v, _.y));
            n.push(new Point(v, d.y));
            n.push(d);
        } else {
            n.push(_);
            n.push(d);
        }
    }

    function js(t) {
        return t == Consts.EDGE_TYPE_ORTHOGONAL || t == Consts.EDGE_TYPE_ORTHOGONAL_HORIZONTAL || t == Consts.EDGE_TYPE_HORIZONTAL_VERTICAL || t == Consts.EDGE_TYPE_ORTHOGONAL_VERTICAL || t == Consts.EDGE_TYPE_VERTICAL_HORIZONTAL || t == Consts.EDGE_TYPE_EXTEND_TOP || t == Consts.EDGE_TYPE_EXTEND_LEFT || t == Consts.EDGE_TYPE_EXTEND_BOTTOM || t == Consts.EDGE_TYPE_EXTEND_RIGHT || t == Consts.EDGE_TYPE_ELBOW || t == Consts.EDGE_TYPE_ELBOW_HORIZONTAL || t == Consts.EDGE_TYPE_ELBOW_VERTICAL;
    }

    function $s(t, i) {
        var n;
        var e;
        i && i.width && i.height ? (n = i.width, e = i.height) : n = e = isNaN(i) ? Defaults.ARROW_SIZE : i;
        var s = Shapes.getShape(t, -n, -e / 2, n, e);
        return s || (s = new Path, s.moveTo(-n, -e / 2), s.lineTo(0, 0), s.lineTo(-n, e / 2)), s;
    }

    function Bs(t, i) {
        var n = Math.sin(i);
        var e = Math.cos(i);
        var s = t.x;
        var h = t.y;
        return t.x = s * e - h * n, t.y = s * n + h * e, t;
    }

    function Fs(t, i, n, e, s, h) {
        var r = Math.atan2(e - i, n - t);
        var a = new Point(s, h);
        return a.rotate = r, Bs(a, r), a.x += t, a.y += i, a;
    }

    function Gs(t, i, e, s, h) {
        i = si(s, i.x, i.y, e.x, e.y);
        e = si(h, e.x, e.y, i.x, i.y);
        var r = Math.PI / 2 + Math.atan2(e.y - i.y, e.x - i.x);
        var a = t * Math.cos(r);
        var o = t * Math.sin(r);
        var f = e.x - i.x;
        var c = e.y - i.y;
        var u = i.x + .25 * f;
        var _ = i.y + .25 * c;
        var d = i.x + .75 * f;
        var l = i.y + .75 * c;
        return [new PathSegment("c", [u + a, _ + o, d + a, l + o, n, n])];
    }

    function zs(t, i, e) {
        if (g(t, new PathSegment("m", [i.x, i.y]), 0), e) {
            if (t.length > 1) {
                var s = t[t.length - 1];
                if ("q" == s.type && (s.invalidTerminal || s.points[2] === n || null === s.points[2])) {
                    return s.points[2] = e.x, s.points[3] = e.y, void (s.invalidTerminal = true);
                }
                if ("c" == s.type && (s.invalidTerminal || s.points[4] === n || null === s.points[4])) {
                    return s.points[4] = e.x, s.points[5] = e.y, void (s.invalidTerminal = true);
                }
            }
            t.push(new PathSegment("l", [e.x, e.y]));
        }
    }

    function Hs(t, i, n, e, s, h, r, a) {
        return i.hasPathSegments() ? void (n._fu = i._9c.toDatas()) : e == s ? void t.drawLoopedEdge(n, e, h, r) : void t.drawEdge(n, e, s, h, r, a);
    }

    function qs(t, i, n, e, s) {
        var h = e == s;
        var r = t.graph.getUI(e);
        var a = h ? r : t.graph.getUI(s);
        if (r && a) {
            var o = i.edgeType;
            var f = r.bodyBounds.clone();
            var c = h ? f : a.bodyBounds.clone();
            var u = t.getStyle(Styles.EDGE_FROM_OFFSET);
            var _ = t.getStyle(Styles.EDGE_TO_OFFSET);
            u && (f.x += u.x || 0, f.y += u.y || 0);
            _ && (c.x += _.x || 0, c.y += _.y || 0);
            var d = i.hasPathSegments();
            if (!h && !o && !d) {
                var l = e.busLayout;
                var v = s.busLayout;
                if (l != v) {
                    var b;
                    var y;
                    var g;
                    var x;
                    var m = i.angle;
                    l ? (b = r, y = f, g = a, x = c) : (b = a, y = c, g = r, x = f);
                    var E = Zs(y, b, l, g, x, m);
                    if (E && 2 == E.length) {
                        var p = E[0];
                        var w = E[1];
                        return n.moveTo(p.x, p.y), w.x == p.x && w.y == p.y && (w.y += .01), n.lineTo(w.x, w.y), void (n._6h = true);
                    }
                }
            }
            Hs(t, i, n, r, a, o, f, c), (!h || d) && Ys(t, i, n, r, a, o, f, c), n._6h = true;
        }
    }

    function Ys(t, i, e, s, h, r, a, o) {
        var f = a.center;
        var c = o.center;
        var u = t.fromAtEdge;
        var _ = t.toAtEdge;
        if (!u && !_) {
            return void zs(e._fu, f, c);
        }
        var d = e._fu;
        if (d.length) {
            if (u) {
                var l = d[0];
                var v = l.firstPoint;
                a.contains(v.x, v.y) && (l.type == "c" ? (f = v, v = {
                    x: l.points[2],
                    y: l.points[3]
                }, l.points = l.points.slice(2), l.type = "q") : l.type == "q" && (f = v, v = {
                    x: l.points[0],
                    y: l.points[1]
                }, l.points = l.points.slice(2), l.type = "l"));
                Ws(s, a, v, f, n, n);
            }
            if (_) {
                var b;
                var y = d[d.length - 1];
                var g = y.lastPoint;
                var x = y.points.length;
                var m = g.x === n || g.y === n;
                x >= 4 && (m || o.contains(g.x, g.y)) && (m || (c = g), b = true, g = {
                    x: y.points[x - 4],
                    y: y.points[x - 3]
                }, o.contains(g.x, g.y) && (c = g, x >= 6 ? (g = {
                    x: y.points[x - 6],
                    y: y.points[x - 5]
                }, y.points = y.points.slice(0, 4), y.type = "q") : 1 == d.length ? (g = {
                    x: f.x,
                    y: f.y
                }, y.points = y.points.slice(0, 2), y.type = "l") : (y = d[d.length - 2], g = y.lastPoint)));
                Ws(h, o, g, c, n, n);
                b && (x = y.points.length, y.points[x - 2] = c.x, y.points[x - 1] = c.y, c = null);
            }
        } else {
            var E = Math.atan2(c.y - f.y, c.x - f.x);
            var p = Math.cos(E);
            var w = Math.sin(E);
            u && Ws(s, a, c, f, p, w), _ && Ws(h, o, f, c, -p, -w);
        }
        zs(e._fu, f, c);
    }

    function Ws(t, i, e, s, h, r) {
        if (h === n) {
            var a = Math.atan2(e.y - s.y, e.x - s.x);
            var h = Math.cos(a);
            var r = Math.sin(a);
        }
        for (e = { x: e.x, y: e.y }, i.contains(e.x, e.y) || (e = si(i, s.x, s.y, e.x, e.y)); ;) {
            if (!i.contains(e.x, e.y)) {
                return s;
            }
            if (t.hitTest(e.x - h, e.y - r, Defaults.LOOKING_EDGE_ENDPOINT_TOLERANCE)) {
                s.x = e.x - h / 2;
                s.y = e.y - r / 2;
                break;
            }
            e.x -= h;
            e.y -= r;
        }
        return s;
    }

    function Us(t, i, n, e, s, h, r, a) {
        if (i.hasPathSegments()) {
            return i._9c;
        }
        var o = i.edgeType;
        if (js(o)) {
            var f = vs(o, n, e, t, s, h);
            if (!f || !f.length) {
                return null;
            }
            g(f, r, 0);
            f.push(a);
            o != Consts.EDGE_TYPE_ELBOW && Is(f, t);
            for (var c = [], u = f.length, _ = 1; u - 1 > _; _++) {
                var d = f[_];
                c.push(isArray(d) ? new PathSegment("q", [d[0].x, d[0].y, d[1].x, d[1].y]) : new PathSegment("l", [d.x, d.y]));
            }
            return c;
        }
        if (i.$bundleEnabled) {
            var l = t._23();
            if (!l) {
                return;
            }
            return Gs(l, r, a, n, e);
        }
    }

    function Vs(t, i, n) {
        var e = t.getStyle(Styles.EDGE_LOOPED_EXTAND);
        var s = t._23();
        var h = e + .2 * s;
        var r = i.x + i.width - h;
        var a = i.y;
        var o = i.x + i.width;
        var f = i.y + h;
        e += s;
        var c = .707;
        var u = -.707;
        var _ = i.x + i.width;
        var d = i.y;
        var l = _ + c * e;
        var v = d + u * e;
        var b = { x: r, y: a };
        var y = { x: l, y: v };
        var g = { x: o, y: f };
        var x = b.x;
        var m = y.x;
        var E = g.x;
        var p = b.y;
        var w = y.y;
        var T = g.y;
        var k = ((T - p) * (w * w - p * p + m * m - x * x) + (w - p) * (p * p - T * T + x * x - E * E)) / (2 * (m - x) * (T - p) - 2 * (E - x) * (w - p));
        var O = ((E - x) * (m * m - x * x + w * w - p * p) + (m - x) * (x * x - E * E + p * p - T * T)) / (2 * (w - p) * (E - x) - 2 * (T - p) * (m - x));
        var h = Math.sqrt((x - k) * (x - k) + (p - O) * (p - O));
        var M = Math.atan2(b.y - O, b.x - k);
        var S = Math.atan2(g.y - O, g.x - k);
        var I = S - M;
        return 0 > I && (I += 2 * Math.PI), Xs(k, O, M, I, h, h, true, n);
    }

    function Xs(t, i, n, e, s, h, r, a) {
        var o;
        var f;
        var c;
        var u;
        var _;
        var d;
        var l;
        var v;
        var b;
        var y;
        var g;
        if (Math.abs(e) > 2 * Math.PI && (e = 2 * Math.PI), _ = Math.ceil(Math.abs(e) / (Math.PI / 4)), o = e / _, f = o, c = n, _ > 0) {
            d = t + Math.cos(c) * s;
            l = i + Math.sin(c) * h;
            moveTo ? a.moveTo(d, l) : a.lineTo(d, l);
            for (var x = 0; _ > x; x++) {
                c += f;
                u = c - f / 2;
                v = t + Math.cos(c) * s;
                b = i + Math.sin(c) * h;
                y = t + Math.cos(u) * (s / Math.cos(f / 2));
                g = i + Math.sin(u) * (h / Math.cos(f / 2));
                a.quadTo(y, g, v, b);
            }
        }
    }

    function Zs(t, i, e, s, h, r) {
        var a = h.cx;
        var o = h.cy;
        var f = a < t.x;
        var c = a > t.right;
        var u = o < t.y;
        var _ = o > t.bottom;
        var d = t.cx;
        var l = t.cy;
        var v = f || c;
        var b = u || _;
        var y = r === n || null === r;
        y && (r = Math.atan2(o - l, a - d), v || b || (r += Math.PI));
        var g = Math.cos(r);
        var x = Math.sin(r);
        var m = Js(i, t, { x: a, y: o }, -g, -x);
        m || (r = Math.atan2(o - l, a - d), v || b || (r += Math.PI), g = Math.cos(r), x = Math.sin(r), m = Js(i, t, {
            x: a,
            y: o
        }, -g, -x) || { x: d, y: l });
        var E = Js(s, h, { x: m.x, y: m.y }, -m.perX || g, -m.perY || x, false) || { x: a, y: o };
        return e ? [m, E] : [E, m];
    }

    function Ks(t, i, n, e, s, h) {
        var r = i < t.x;
        var a = i > t.right;
        var o = n < t.y;
        var f = n > t.bottom;
        if (r && e > 0) {
            var c = t.x - i;
            var u = n + c * s / e;
            if (u >= t.y && u <= t.bottom) {
                return { x: t.x, y: u, perX: e, perY: s };
            }
        }
        if (a && 0 > e) {
            var c = t.right - i;
            var u = n + c * s / e;
            if (u >= t.y && u <= t.bottom) {
                return { x: t.right, y: u, perX: e, perY: s }
            }
        }
        if (o && s > 0) {
            var _ = t.y - n;
            var d = i + _ * e / s;
            if (d >= t.x && d <= t.right) {
                return { x: d, y: t.y, perX: e, perY: s };
            }
        }
        if (f && 0 > s) {
            var _ = t.bottom - n;
            var d = i + _ * e / s;
            if (d >= t.x && d <= t.right) {
                return { x: d, y: t.bottom, perX: e, perY: s };
            }
        }
        return h !== false ? Ks(t, i, n, -e, -s, false) : void 0;
    }

    function Js(t, i, n, e, s, h) {
        if (!i.contains(n.x, n.y)) {
            if (n = Ks(i, n.x, n.y, e, s, h), !n) {
                return;
            }
            return Qs(t, i, n, n.perX, n.perY);
        }
        return h === false ? Qs(t, i, n, e, s) : Qs(t, i, { x: n.x, y: n.y, perX: e, perY: s }, e, s) || Qs(t, i, n, -e, -s);
    }

    function Qs(t, i, n, e, s) {
        for (; ;) {
            if (!i.contains(n.x, n.y)) {
                return;
            }
            if (t.hitTest(n.x + e, n.y + s)) {
                break;
            }
            n.x += e;
            n.y += s;
        }
        return n;
    }

    function th(t) {
        return hasImage(t) ? t : t.match(/.(gif|jpg|jpeg|png)$/gi) ? t : (t = J(t), t instanceof Object && t.draw ? t : void 0);
    }

    function ih(t) {
        for (var i = t.parent; i;) {
            if (i.enableSubNetwork) {
                return i;
            }
            i = i.parent;
        }
        return null;
    }

    function GroupUI() {
        doSuperConstructor(this, GroupUI, arguments);
    }

    function eh(t, n, e, s, h, r, a) {
        var o = i.createElement("div");
        o.className = "Q-Graph-Nav-Button";
        css(o, { position: "absolute", "text-align": "center" });
        n && css(o, n);
        var f = i.createElement("img");
        return r && (isTouchSupport && (f.ontouchstart = r), Uz || (f.onclick = r)), f.name = a, f.src = e, css(f, { padding: "10px", transition: "opacity 0.2s ease-in" }), h && css(f, h), s && bi(f, "transform", "rotate(180deg)"), o._img = f, o.appendChild(f), t.appendChild(o), o;
    }

    function sh(t, n) {
        this._navPane = i.createElement("div");
        this._navPane.className = "Q-Graph-Nav";
        css(this._navPane, {
            "background-color": "rgba(0, 0, 0, 0)",
            overflow: "hidden",
            "user-select": "none",
            position: "relative"
        });
        this._top = eh(this._navPane, { width: "100%" }, Defaults.NAVIGATION_IMAGE_TOP, false, null, n, "top");
        this._left = eh(this._navPane, { height: "100%" }, Defaults.NAVIGATION_IMAGE_LEFT, false, { position: "relative", display: "block" }, n, "left");
        this._right = eh(this._navPane, {
            height: "100%",
            right: "0px"
        }, Defaults.NAVIGATION_IMAGE_LEFT, true, { position: "relative", display: "block" }, n, "right");
        this._ncottom = eh(this._navPane, {width: "100%", bottom: "0px"}, Defaults.NAVIGATION_IMAGE_TOP, true, null, n, "bottom");
        t.appendChild(this._navPane);
    }

    function hh(t, i) {
        if (!Defaults.NAVIGATION_IMAGE_LEFT) {
            var n = createCanvas(20, 40);
            var e = n.g;
            e.scale(e.ratio, e.ratio);
            e.moveTo(16, 4);
            e.lineTo(4, 20);
            e.lineTo(16, 36);
            e.lineWidth = 3;
            e.lineCap = "round";
            e.lineJoin = "round";
            e.strokeStyle = "#FFF";
            e.shadowColor = "#888";
            e.hadowBlur = 5;
            e.stroke();
            Defaults.NAVIGATION_IMAGE_LEFT = n.toDataURL();
            var s = createCanvas(n.height, n.width, false);
            s.g.translate(s.width, 0);
            s.g.rotate(Math.PI / 2);
            s.g.drawImage(n, 0, 0);
            Defaults.NAVIGATION_IMAGE_TOP = s.toDataURL();
        }
        this._ncaseCanvas = t;
        var h = function (i) {
            stopEvent(i);
            var n;
            var e;
            var s = i.target;
            var h = s.name;
            if ("left" == h) {
                n = 1;
            } else if ("right" == h) {
                n = -1;
            } else if ("top" == h) {
                e = 1;
            } else {
                if ("bottom" != h) {
                    return;
                }
                e = -1;
            }
            isTouchSupport && (s.className = "hover", setTimeout(function () {
                s.className = "";
            }, 100));
            stopEvent(i);
            t._l1._9p(n, e);
        };
        sh.call(this, i, h);
        this._3c(i.clientWidth, i.clientHeight);
    }

    function rh(t, i) {
        this._ncaseCanvas = t;
        this.init(i, t);
    }

    function ah() {
        doSuperConstructor(this, ah, arguments);
    }

    function oh(t, i) {
        this._ncaseCanvas = t;
        this._jf = ae(i);
        this.g = this._jf.g;
        this._9e = new HashList;
    }

    function fh(t) {
        var i = t.selectionModel;
        var n = [];
        return t.graphModel.forEach(function (i) {
            t.isVisible(i) && t.isSelectable(i) && n.push(i);
        }), i.set(n);
    }

    function ch(t, i, n) {
        var e = t.bounds;
        n = n || e;
        i = i || 1;
        var s = null;
        s && n.width * n.height * i * i > s && (i = Math.sqrt(s / n.width / n.height));
        var h = createCanvas();
        Un(h.g);
        h.width = n.width * i;
        h.height = n.height * i;
        t._82._h7(h.g, i, n);
        var r = null;
        try {
            r = h.toDataURL("image/png");
        } catch (a) {
            Qunee.error(a);
        }
        return { canvas: h, data: r, width: h.width, height: h.height };
    }

    function DrawableInteraction(t) {
        this.graph = t;
        this.topCanvas = t.topCanvas;
    }

    function _h(t, i) {
        this.interactions = t;
        this.defaultCursor = i || "default";
    }

    function DrawPathInteraction() {
        doSuperConstructor(this, DrawPathInteraction, arguments);
    }

    function lh(t, i) {
        if (!t) {
            return i;
        }
        var e = {};
        for (var s in t) {
            e[s] = t[s];
        }
        for (var s in i) {
            e[s] === n && (e[s] = i[s]);
        }
        return e;
    }

    function CreateEdgeInteraction() {
        doSuperConstructor(this, CreateEdgeInteraction, arguments);
    }

    function CreateShapeInteraction() {
        doSuperConstructor(this, CreateShapeInteraction, arguments);
    }

    function CreateLineInteraction() {
        doSuperConstructor(this, CreateLineInteraction, arguments);
    }

    function CreateSimpleEdgeInteraction() {
        doSuperConstructor(this, CreateSimpleEdgeInteraction, arguments);
    }

    function xh(i, n, e) {
        i += t.pageXOffset;
        n += t.pageYOffset;
        var s = e.getBoundingClientRect();
        return { x: i + s.left, y: n + s.top };
    }

    function mh(t, i, n) {
        var e = t.offsetWidth;
        var s = t.offsetHeight;
        t.style.left = i - e / 2 + "px";
        t.style.top = n - s / 2 + "px";
    }

    function Eh(t) {
        var n = i.createElement("canvas");
        var e = n.getContext("2d");
        var s = getComputedStyle(t, null);
        var h = s.font;
        h || (h = s.fontStyle + " " + s.fontSize + " " + s.fontFamily);
        e.font = h;
        var r = t.value;
        var a = r.split("\n");
        var o = parseInt(s.fontSize);
        var f = 0;
        var c = 0;
        return Qunee.forEach(a, function (t) {
            var i = e.measureText(t).width;
            i > f && (f = i);
            c += 1.2 * o;
        }), { width: f, height: c };
    }

    function ph(t, n) {
        if ("number" == typeof t.selectionStart && "number" == typeof t.selectionEnd) {
            var e = t.value;
            var s = t.selectionStart;
            t.value = e.slice(0, s) + n + e.slice(t.selectionEnd);
            t.selectionEnd = t.selectionStart = s + n.length;
        } else if ("undefined" != typeof i.selection) {
            var h = i.selection.createRange();
            h.text = n;
            h.collapse(false);
            h.select();
        }
    }

    function wh(i) {
        if (isIE) {
            var n = t.scrollX || t.pageXOffset;
            var e = t.scrollY || t.pageYOffset;
            return i.select(), void t.scrollTo(n, e);
        }
        i.select();
    }

    function LabelEditor() {
    }

    function PointsInteraction(t) {
        this.graph = t;
        this.topCanvas = t.topCanvas;
        this.handlerSize = isTouchSupport ? 8 : 5;
    }

    function Oh(t) {
        return t.type == "q" || t.type == "c";
    }

    function ResizeInteraction(t) {
        this.graph = t;
        this.topCanvas = t.topCanvas;
        this.handlerSize = isTouchSupport ? 8 : 4;
        this._rotateHandleLength = isTouchSupport ? 30 : 20;
    }

    function Sh(t, i) {
        var n = new Rect;
        return n.addPoint(Fn.call(t, { x: i.x, y: i.y })), n.addPoint(Fn.call(t, {
            x: i.x + i.width,
            y: i.y
        })), n.addPoint(Fn.call(t, { x: i.x + i.width, y: i.y + i.height })), n.addPoint(Fn.call(t, { x: i.x, y: i.y + i.height })), n;
    }

    function Ih(t) {
        t %= 2 * Math.PI;
        var i = Math.round(t / (Math.PI / 4));
        return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : "nesw-resize";
    }

    function Ah(n, e, s) {
        var h = i.documentElement;
        var r = new Qunee.Rect(t.pageXOffset, t.pageYOffset, h.clientWidth - 2, h.clientHeight - 2);
        var a = n.offsetWidth;
        var o = n.offsetHeight;
        e + a > r.x + r.width && (e = r.x + r.width - a);
        s + o > r.y + r.height && (s = r.y + r.height - o);
        e < r.x && (e = r.x), s < r.y && (s = r.y);
        n.style.left = e + "px";
        n.style.top = s + "px";
    }

    function InteractionEvent(t, i, n, e, s) {
        this.source = t;
        this.type = "interaction";
        this.kind = i;
        this.event = n;
        this.data = e;
        this.datas = s;
    }

    function Lh(t) {
        this._47 = {};
        this._l1 = t;
        this._l1._1h.addListener(this._96, this);
        this.currentMode = Consts.INTERACTION_MODE_DEFAULT;
    }

    function isHorizontalDirection(t) {
        return t >= 100 && 200 > t;
    }

    function Ph(t) {
        return t == 120 || t == 122 || t == 121 || t == 220 || t == 221 || t == 222;
    }

    function Dh() {
        var t;
        var i;
        var n = {};
        var e = [];
        var s = 0;
        var h = {};
        var r = 0;
        this.graph.forEach(function (a) {
            if (this.isLayoutable(a)) {
                if (a instanceof Node) {
                    var o = { node: a, id: a.id, x: a.x, y: a.y };
                    for (this.appendNodeInfo && this.appendNodeInfo(a, o), n[a.id] = o, e.push(o), s++ , i = a.parent; i instanceof Group;) {
                        t || (t = {});
                        var f = t[i.id];
                        f || (f = t[i.id] = { id: i.id, children: [] });
                        f.children.push(o);
                        i = i.parent;
                    }
                } else if (a instanceof Edge && !a.isLooped() && a.fromAgent && a.toAgent) {
                    var o = { edge: a };
                    h[a.id] = o;
                    r++;
                }
            }
        }, this);
        var a = {};
        for (var o in h) {
            var f = h[o];
            var c = f.edge;
            var u = c.fromAgent;
            var _ = c.toAgent;
            var d = u.id + "-" + _.id;
            var l = _.id + "-" + u.id;
            if (n[u.id] && n[_.id] && !a[d] && !a[l]) {
                var v = n[u.id];
                var b = n[_.id];
                f.from = v;
                f.to = b;
                a[d] = f;
                this.appendEdgeInfo && this.appendEdgeInfo(c, f);
            } else {
                delete h[o];
                r--;
            }
        }
        return { groups: t, nodesArray: e, nodes: n, nodeCount: s, edges: h, edgeCount: r, minEnergy: this.minEnergyFunction(s, r) };
    }

    function Nh(t) {
        this.graph = t;
        this.currentMovingNodes = {};
    }

    function SpringLayouter() {
        doSuperConstructor(this, SpringLayouter, arguments);
    }

    function $h(t, i, n, e, s) {
        e ? t.forEachEdge(function (e) {
            var h = e.otherNode(t);
            h != n && h._marker != s && i(h, t);
        }, this, true) : t.forEachOutEdge(function (e) {
            var h = e.toAgent;
            h != n && h._marker != s && i(h, t);
        });
    }

    var GG = 0;

    if (navigator) {
        var userAgent = navigator.userAgent;
        var isOpera = /opera/i.test(userAgent);
        var isIE = !isOpera && /msie/i.test(userAgent);
        var isIE11 = /rv:11.0/i.test(userAgent);
        var isIE10 = /MSIE 10./i.test(userAgent);

        if (isIE11 && (isIE = true), /msie\s[6,7,8]/i.test(userAgent)) {
            throw new Error("your browser is not supported");
        }

        var isWebkit = /webkit|khtml/i.test(userAgent);
        var isGecko = !isWebkit && /gecko/i.test(userAgent);
        var isFirefox = /firefox\//i.test(userAgent);
        var isChrome = /Chrome\//i.test(userAgent);
        var isSafari = !isChrome && /Safari\//i.test(userAgent);
        var isMac = /Macintosh;/i.test(userAgent);
        var isIOS = /(iPad|iPhone|iPod)/g.test(userAgent);
        var isAndroid = /Android/g.test(userAgent);
        var isWindowsPhone = /Windows Phone/g.test(userAgent);
        var isTouchSupport = (isIOS || isAndroid || isWindowsPhone) && "ontouchstart" in window;
        var isAppleWebKit = userAgent.match(/AppleWebKit\/([0-9\.]*)/);

        if (isAppleWebKit && isAppleWebKit.length > 1) {
            parseFloat(isAppleWebKit[1]);
        }

        isAndroid && parseFloat(userAgent.match(/Android\s([0-9\.]*)/)[1]);
    }

    requestAnimationFrame || (window.requestAnimationFrame = webkitRequestAnimationFrame ||
        mozRequestAnimationFrame || oRequestAnimationFrame || msRequestAnimationFrame ||
        function (callback) {
            return setTimeout(function () {
                callback();
            }, 1e3 / 60);
        });

    cancelAnimationFrame || (window.cancelAnimationFrame = webkitCancelAnimationFrame ||
        mozCancelAnimationFrame || oCancelAnimationFrame || msCancelAnimationFrame ||
        function (callback) {
            return clearTimeout(callback);
        });

    var Defaults = {
        SELECTION_TOLERANCE: isTouchSupport ? 5 : 2,
        LABEL_COLOR: "#333"
    };

    defineProperties(Defaults, {
        FONT_STYLE: {
            get: function () {
                return this._fontStyle || (this._fontStyle = "normal");
            },
            set: function (t) {
                this._fontStyle != t && (this._fontStyle = t, this._fontChanged = true);
            }
        },
        FONT_SIZE: {
            get: function () {
                return this._fontSize || (this._fontSize = 12);
            },
            set: function (t) {
                this._fontSize != t && (this._fontSize = t, this._fontChanged = true);
            }
        },
        FONT_FAMILY: {
            get: function () {
                return this._fontFamily || (this._fontFamily = "Verdana,helvetica,arial,sans-serif");
            },
            set: function (t) {
                this._fontFamily != t && (this._fontFamily = t, this._fontChanged = true);
            }
        },
        FONT: {
            get: function () {
                return (this._fontChanged || this._fontChanged === n) && (this._fontChanged = false, this._font = this.FONT_STYLE + " " + this.FONT_SIZE + "px " + this.FONT_FAMILY), this._font;
            }
        }
    });

    var HashList = function (t) {
        this._k0 = [];
        this._lv = {};
        t && this.add(t);
    };

    HashList.prototype = {
        _k0: null,
        _lv: null,
        get: function (t) {
            return this.getByIndex(t);
        },
        getById: function (t) {
            return this._lv[t];
        },
        getByIndex: function (t) {
            return this._k0[t];
        },
        forEach: function (t, i, n) {
            return forEach(this._k0, t, i, n)
        },
        forEachReverse: function (t, i, n) {
            return forEachReverse(this._k0, t, i, n)
        },
        size: function () {
            return this._k0.length;
        },
        contains: function (t) {
            return this.containsById(t.id);
        },
        containsById: function (t) {
            return this._lv.hasOwnProperty(t);
        },
        setIndex: function (t, i) {
            var n = this._k0.indexOf(t);
            if (0 > n) {
                throw new Error("'" + t.id + "' not exist");
            }
            return n == i ? false : (this._k0.splice(n, 1), this._k0.splice(i, 0, t), true);
        },
        setIndexAfter: function (t, i) {
            var n = this._k0.indexOf(t);
            if (0 > n) {
                throw new Error("'" + t.id + "' not exist");
            }
            return n == i ? i : n == i + 1 ? i + 1 : (n > i && (i += 1), this._k0.splice(n, 1), this._k0.splice(i, 0, t), i);
        },
        setIndexBefore: function (t, i) {
            var n = this._k0.indexOf(t);
            if (0 > n) {
                throw new Error("'" + t.id + "' not exist");
            }
            return n == i ? i : n == i - 1 ? i - 1 : (i > n && (i -= 1), this._k0.splice(n, 1), this._k0.splice(i, 0, t), i);
        },
        indexOf: function (t) {
            return this._k0.indexOf(t);
        },
        getIndexById: function (t) {
            var i = this.getById(t);
            return i ? this._k0.indexOf(i) : -1;
        },
        add: function (t, i) {
            return isArray(t) ? this._g2(t, i) : this._kx(t, i);
        },
        addFirst: function (t) {
            return this.add(t, 0);
        },
        _g2: function (t, i) {
            if (0 == t.length) {
                return false;
            }
            var e = false;
            var s = i >= 0;
            t = t._k0 || t;
            for (var h = 0, r = t.length; r > h; h++) {
                var a = t[h];
                null !== a && a !== n && this._kx(a, i, true) && (e = true, s && i++);
            }
            return e;
        },
        _kx: function (t, i) {
            var e = t.id;
            return e === n || this.containsById(e) ? false : (g(this._k0, t, i), this._lv[e] = t, t);
        },
        remove: function (t) {
            return isArray(t) ? this._ncu(t) : t.id ? this._fx(t.id, t) : this.removeById(t);
        },
        _ncu: function (t) {
            if (0 == t.length) {
                return false;
            }
            var i = false;
            t = t._k0 || t;
            for (var e = 0, s = t.length; s > e; e++) {
                var h = t[e];
                if (null !== h && h !== n) {
                    h.id === n && (h = this._lv[h]);
                    var r = h.id;
                    this._fx(r, h, true) && (i = true);
                }
            }
            return i;
        },
        _fx: function (t, i) {
            return t !== n && this.containsById(t) ? ((null === i || i === n) && (i = this.getById(t)), delete this._lv[t], x(this._k0, i), true) : false;
        },
        removeById: function (t) {
            var i = this._lv.t;
            return i ? this._fx(t, i) : false;
        },
        set: function (t) {
            if (!t || 0 == t) {
                return void this.clear();
            }
            if (this.isEmpty() || !isArray(t)) {
                return this.clear(), this.add(t);
            }
            var i = [];
            var n = {};
            var e = 0;
            if (forEach(t, function (t) {
                this._lv[t.id] ? (n[t.id] = t, e++) : i.push(t);
            }, this), e != this.length) {
                var s = [];
                this.forEach(function (t) {
                    n[t.id] || s.push(t);
                }, this);
                s.length && this._ncu(s);
            }
            return i.length && this._g2(i), true;
        },
        clear: function () {
            return this.isEmpty() ? false : (this._k0.length = 0, this._lv = {}, true);
        },
        toDatas: function () {
            return this._k0.slice(0);
        },
        isEmpty: function () {
            return 0 == this._k0.length;
        },
        valueOf: function () {
            return this._k0.length;
        },
        clone: function (t) {
            var i = new HashList;
            return i.add(t ? y(this._k0) : this.toDatas()), i;
        }
    };

    defineProperties(HashList.prototype, {
        datas: {
            get: function () {
                return this._k0;
            }
        },
        random: {
            get: function () {
                return this._k0 && this._k0.length ? this._k0[randomInt(this._k0.length)] : null;
            }
        },
        length: {
            get: function () {
                return this._k0 ? this._k0.length : 0;
            }
        }
    });

    var rz = (2 * Math.PI, .5 * Math.PI);

    var getFirstElementChildByTagName = function (t, i) {
        i = i.toUpperCase();
        for (var n = isIE ? t.firstChild : t.firstElementChild; n && (1 != n.nodeType || n.tagName && n.tagName.toUpperCase() != i);) {
            n = isIE ? n.nextSibling : n.nextElementSibling;
        }
        return n && 1 == n.nodeType && n.tagName && n.tagName.toUpperCase() == i ? n : null;
    };

    var Point = function (x, y, rotate) {
        if (x instanceof Point) {
            x = t.x;
            y = t.y;
            rotate = t.rotate;
        }
        this.set(x, y, rotate);
    };

    var calculateDistance = function (x1, y1, x2, y2) {
        var x = x1 - x2;
        var y = y1 - y2;
        return Math.sqrt(x * x + y * y);
    };

    Point.prototype = {
        x: 0,
        y: 0,
        rotate: n,
        set: function (t, i, n) {
            this.x = t || 0;
            this.y = i || 0;
            this.rotate = n || 0;
        },
        negate: function () {
            this.x = -this.x;
            this.y = -this.y;
        },
        offset: function (t, i) {
            this.x += t;
            this.y += i;
        },
        equals: function (t) {
            return this.x == t.x && this.y == t.y;
        },
        distanceTo: function (t) {
            return calculateDistance(this.x, this.y, t.x, t.y);
        },
        toString: function () {
            return "Point(" + this.x + ", " + this.y + ")";
        },
        clone: function () {
            return new Point(this.x, this.y);
        }
    };

    Object.defineProperty(Point.prototype, "distance", {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    });

    var cz = function (t, i, e, s) {
        t !== n && this._mv(t, i, e, s);
    };

    cz.prototype = {
        _n7: null,
        _n5: null,
        _n3: null,
        _n9: null,
        _nb: null,
        _nc: null,
        _nd: 1,
        _mv: function (t, i, n, e) {
            this._n7 = t;
            this._n5 = i;
            this._n3 = n;
            this._n9 = e;
            t == n ? (this._nb = -1, this._nd = 0, this._nc = t) : (this._nb = (i - e) / (t - n), this._nc = i - this._nb * t, this._nd = 1);
            this._l6 = Math.atan2(this._n9 - this._n5, this._n3 - this._n7);
            this._ndos = Math.cos(this._l6);
            this._sin = Math.sin(this._l6);
        },
        _ndl: function (t) {
            return 0 == this._nd ? Number.NaN : this._nb * t + this._nc;
        },
        _ndy: function (t) {
            return 0 == this._nb ? Number.NaN : (t - this._nc) / this._nb;
        },
        _$i: function (t) {
            var i;
            var n;
            var e;
            var s;
            var h;
            var r = t[0];
            var a = t[2];
            var o = t[4];
            var f = t[1];
            var c = t[3];
            var u = t[5];
            var _ = this._nb;
            var d = this._nc;
            var l = this._nd;
            if (0 == l ? (e = Math.sqrt((-_ * _ * r - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * r), s = -_ * a + _ * r, h = _ * o - 2 * _ * a + _ * r) : (e = Math.sqrt((-f + _ * r + d) * u + c * c + (-2 * _ * a - 2 * d) * c + (_ * o + d) * f + (-_ * _ * r - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * r), s = -c + f + _ * a - _ * r, h = u - 2 * c + f - _ * o + 2 * _ * a - _ * r), 0 != h) {
                i = (e + s) / h;
                n = (-e + s) / h;
                var v;
                var b;
                return i >= 0 && 1 >= i && (v = Fi(i, t)), n >= 0 && 1 >= n && (b = Fi(n, t)), v && b ? [v, b] : v ? v : b ? b : void 0;
            }
        },
        _3l: function (t, i, n) {
            if (this._nb == t._nb || 0 == this._nd && 0 == t._nd) {
                return null;
            }
            var e;
            var s;
            if (e = 0 == this._nd ? this._nc : 0 == t._nd ? t._nc : (t._nc - this._nc) / (this._nb - t._nb), s = 0 == this._nb ? this._nc : 0 == t._nb ? t._nc : this._nd ? this._nb * e + this._nc : t._nb * e + t._nc, !i) {
                return {
                    x: e,
                    y: s
                };
            }
            var h;
            var r;
            var a;
            if (n) {
                h = -i / 2;
                r = -h;
            } else {
                h = -calculateDistance(this._n7, this._n5, e, s);
                r = calculateDistance(this._n3, this._n9, e, s);
                var o = -h + r;
                if (o > i) {
                    var f = i / o;
                    h *= f;
                    r *= f;
                } else {
                    a = (i - o) / 2;
                }
            }
            var c = this._7c(e, s, h);
            var u = this._7c(e, s, r);
            return a && (c._rest = a, u._rest = a), [c, u];
        },
        _7c: function (t, i, n) {
            return 0 == this._nd ? { x: t, y: i + n } : { x: t + n * this._ndos, y: i + n * this._sin };
        }
    };

    var Size = function (width, height) {
        this.width = width;
        this.height = height;
    };

    Size.prototype = {
        width: 0,
        height: 0,
        isEmpty: function () {
            return this.width <= 0 || this.height <= 0;
        },
        clone: function () {
            return new Size(this.width, this.height);
        },
        toString: function () {
            return "Size(" + this.width + ", " + this.height + ")";
        }
    };

    var Rect = function (x, y, width, height) {
        if (x instanceof Object && !isNumber(x)) {
            x = x.x;
            y = x.y;
            width = x.width;
            height = x.height;
        }
        if (width === n) {
            width = -1;
        }
        if (height === n) {
            height = -1;
        }
        this.x = x || 0;
        this.y = y || 0;
        this.width = width;
        this.height = height;
    };

    Rect.prototype = {
        x: 0,
        y: 0,
        width: -1,
        height: -1,
        setByRect: function (t) {
            this.x = t.x || 0;
            this.y = t.y || 0;
            this.width = t.width || 0;
            this.height = t.height || 0;
        },
        set: function (t, i, n, e) {
            this.x = t || 0;
            this.y = i || 0;
            this.width = n || 0;
            this.height = e || 0;
        },
        offset: function (t, i) {
            return this.x += t, this.y += i, this;
        },
        contains: function (t, i) {
            return t instanceof Rect ? containsRect(this.x, this.y, this.width, this.height, t.x, t.y, t.width, t.height, i) : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this.height;
        },
        intersectsPoint: function (t, i, n) {
            return this.width <= 0 && this.height <= 0 ? false : n ? this.intersectsRect(t - n, i - n, 2 * n, 2 * n) : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this.height;
        },
        intersectsRect: function (t, i, n, e) {
            return intersects(this.x, this.y, this.width, this.height, t, i, n, e);
        },
        intersects: function (t, i) {
            return isNumber(t.width) ? this.intersectsRect(t.x, t.y, t.width, t.height) : this.intersectsPoint(t, i);
        },
        intersection: function (t, i, n, e) {
            var s = this.x;
            var h = this.y;
            var r = s;
            r += this.width;
            var a = h;
            a += this.height;
            var o = t;
            o += n;
            var f = i;
            return f += e, t > s && (s = t), i > h && (h = i), r > o && (r = o), a > f && (a = f), r -= s, a -= h, 0 > r || 0 > a ? null : new Rect(s, h, r, a);
        },
        addPoint: function (t) {
            this.add(t.x, t.y);
        },
        add: function (t, i) {
            if (isNumber(t.width)) {
                return this.addRect(t.x, t.y, t.width, t.height);
            }
            if (isNumber(t.x) && (i = t.y, t = t.x), this.width < 0 || this.height < 0) {
                return this.x = t, this.y = i, void (this.width = this.height = 0);
            }
            var n = this.x;
            var e = this.y;
            var s = this.width;
            var h = this.height;
            s += n;
            h += e;
            n > t && (n = t);
            e > i && (e = i);
            t > s && (s = t);
            i > h && (h = i);
            s -= n;
            h -= e;
            s > Number.MAX_VALUE && (s = Number.MAX_VALUE);
            h > Number.MAX_VALUE && (h = Number.MAX_VALUE);
            this.set(n, e, s, h);
        },
        addRect: function (t, i, n, e) {
            var s = this.width;
            var h = this.height;
            (0 > s || 0 > h) && this.set(t, i, n, e);
            var r = n;
            var a = e;
            if (!(0 > r || 0 > a)) {
                var o = this.x;
                var f = this.y;
                s += o;
                h += f;
                var c = t;
                var u = i;
                r += c;
                a += u;
                o > c && (o = c);
                f > u && (f = u);
                r > s && (s = r);
                a > h && (h = a);
                s -= o;
                h -= f;
                s > Number.MAX_VALUE && (s = Number.MAX_VALUE);
                h > Number.MAX_VALUE && (h = Number.MAX_VALUE);
                this.set(o, f, s, h);
            }
        },
        shrink: function (t, i, n, e) {
            return isNumber(t) ? 1 == arguments.length ? e = i = n = t || 0 : 2 == arguments.length ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t.left || 0, n = t.bottom || 0, e = t.right || 0, t = t.top || 0), this.x += i, this.y += t, this.width -= i + e, this.height -= t + n, this;
        },
        grow: function (t, i, n, e) {
            return isNumber(t) ? 1 == arguments.length ? e = i = n = t || 0 : 2 == arguments.length ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t.left || 0, n = t.bottom || 0, e = t.right || 0, t = t.top || 0), this.x -= i, this.y -= t, this.width += i + e, this.height += t + n, this;
        },
        scale: function (t) {
            return this.x *= t, this.y *= t, this.width *= t, this.height *= t, this;
        },
        isEmpty: function () {
            return this.width <= 0 && this.height <= 0;
        },
        toString: function () {
            return this.x + " , " + this.y + " , " + this.width + " , " + this.height;
        },
        union: function (t) {
            var i = this.width;
            var n = this.height;
            if (0 > i || 0 > n) {
                return new Rect(t.x, t.y, t.width, t.height);;
            }
            var e = t.width;
            var s = t.height;
            if (0 > e || 0 > s) {
                return new Rect(this.x, this.y, this.width, this.height);
            }
            var h = this.x;
            var r = this.y;
            i += h;
            n += r;
            var a = t.x;
            var o = t.y;
            return e += a, s += o, h > a && (h = a), r > o && (r = o), e > i && (i = e), s > n && (n = s), i -= h, n -= r, i > Number.MAX_VALUE && (i = Number.MAX_VALUE), n > Number.MAX_VALUE && (n = Number.MAX_VALUE), new Rect(h, r, i, n);
        },
        clear: function () {
            this.set(0, 0, -1, -1);
        },
        equals: function (t) {
            return t && this.x == t.x && this.y == t.y && this.width == t.width && this.height == t.height;
        },
        clone: function (t, i) {
            return new Rect(this.x + (t || 0), this.y + (i || 0), this.width, this.height);
        },
        toArray: function () {
            return [this.x, this.y, this.width, this.height];
        },
        getIntersectionPoint: function (t, i, n, e) {
            return si(this, t, i, n, e);
        }
    };

    extend(Rect, Size);

    Rect.equals = function (t, i) {
        return t == i || t && i && t.x == i.x && t.y == i.y && t.width == i.width && t.height == i.height;
    };

    defineProperties(Rect.prototype, {
        left: {
            get: function () {
                return this.x;
            }
        },
        top: {
            get: function () {
                return this.y;
            }
        },
        bottom: {
            get: function () {
                return this.y + this.height;
            }
        },
        right: {
            get: function () {
                return this.x + this.width;
            }
        },
        cx: {
            get: function () {
                return this.x + this.width / 2;
            }
        },
        cy: {
            get: function () {
                return this.y + this.height / 2;
            }
        },
        center: {
            get: function () {
                return new Point(this.cx, this.cy);
            }
        }
    });

    Rect.intersects = intersects;

    Rect.intersection = intersection;

    Rect.intersectsPoint = intersectsPoint;

    var Insets = function (top, left, bottom, right) {
        if (1 == arguments.length) {
            left = bottom = right = top;
        } else if (2 == arguments.length) {
            bottom = top;
            right = left;
        }
        this.set(top, left, bottom, right);
    };

    Insets.prototype = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        set: function (t, i, n, e) {
            this.top = t || 0;
            this.left = i || 0;
            this.bottom = n || 0;
            this.right = e || 0;
        },
        clone: function () {
            return new Insets(this.top, this.left, this.bottom, this.right);
        },
        equals: function (t) {
            return t && this.top == t.top && this.bottom == t.bottom && this.left == t.left && this.right == t.right;
        }
    };

    var Position = function (horizontalPosition, verticalPosition) {
        this.horizontalPosition = horizontalPosition;
        this.verticalPosition = verticalPosition;
    };

    Position.prototype = {
        verticalPosition: false,
        horizontalPosition: false,
        toString: function () {
            return (this.horizontalPosition || "") + (this.verticalPosition || "");
        }
    };

    Z(Position.prototype, "sortName", {
        get: function () {
            return (this.horizontalPosition || "") + (this.verticalPosition || "");
        }
    });

    Position.LEFT_TOP = new Position("l", "t");

    Position.LEFT_MIDDLE = new Position("l", "m");

    Position.LEFT_BOTTOM = new Position("l", "b");

    Position.CENTER_TOP = new Position("c", "t");

    Position.CENTER_MIDDLE = new Position("c", "m");

    Position.CENTER_BOTTOM = new Position("c", "b");

    Position.RIGHT_TOP = new Position("r", "t");

    Position.RIGHT_MIDDLE = new Position("r", "m");

    Position.RIGHT_BOTTOM = new Position("r", "b");

    var Positions = [
        Position.LEFT_TOP,
        Position.LEFT_MIDDLE,
        Position.LEFT_BOTTOM,
        Position.CENTER_TOP,
        Position.CENTER_MIDDLE,
        Position.CENTER_BOTTOM,
        Position.RIGHT_TOP,
        Position.RIGHT_MIDDLE,
        Position.RIGHT_BOTTOM
    ];

    Z(Position, "random", {
        get: function () {
            return Positions[randomInt(Positions.length)];
        }
    });

    Position.fromString = function (t) {
        for (var i in Position) {
            var n = Position[i];
            if (n && "random" != i && n instanceof Position && n.toString() == t) {
                return n;
            }
        }
    };

    var pz = function (t, i, n, e, s) {
        this.set(t, i, n, e);
        this.radius = s;
    };

    pz.prototype = {
        radius: 0,
        classify: function (t, i, n, e) {
            return i > t ? 0 : i + e > t ? 1 : n - e > t ? 2 : n > t ? 3 : 4;
        },
        intersectsRect: function (t, i, n, e) {
            if (doSuper(this, pz, "intersectsRect", arguments) === false) {
                return false;
            }
            var s = this.x;
            var h = this.y;
            var r = s + this.width;
            var a = h + this.height;
            var o = 2 * radius;
            var f = 2 * radius;
            var c = Math.min(this.width, Math.abs(o)) / 2;
            var u = Math.min(this.height, Math.abs(f)) / 2;
            var _ = this.classify(t, s, r, c);
            var d = this.classify(t + n, s, r, c);
            var l = this.classify(i, h, a, u);
            var v = this.classify(i + e, h, a, u);
            return 2 == _ || 2 == d || 2 == l || 2 == v ? true : 2 > _ && d > 2 || 2 > l && v > 2 ? true : (t = 1 == d ? t = t + n - (s + c) : t -= r - c, i = 1 == v ? i = i + e - (h + u) : i -= a - u, t /= c, i /= u, 1 >= t * t + i * i);
        },
        intersectsPoint: function (t, i) {
            if (doSuper(this, pz, "intersectsPoint", arguments) === false) {
                return false;
            }
            var n = this.x;
            var e = this.y;
            var s = n + this.width;
            var h = e + this.height;
            if (n > t || e > i || t >= s || i >= h) {
                return false;
            }
            var r = 2 * radius;
            var a = 2 * radius;
            var o = Math.min(this.width, Math.abs(r)) / 2;
            var f = Math.min(this.height, Math.abs(a)) / 2;
            return t >= (n += o) && t < (n = s - o) ? true : i >= (e += f) && i < (e = h - f) ? true : (t = (t - n) / o, i = (i - e) / f, 1 >= t * t + i * i);
        },
        clone: function () {
            return new pz(this.x, this.y, this.width, this.height, this.radius);
        }
    };

    extend(pz, Rect);

    var Event = function (source, type, kind, value) {
        this.source = source;
        this.type = type;
        this.kind = kind;
        this.value = value;
    };

    Event.prototype = {
        source: null,
        type: null,
        kind: null,
        value: null,
        toString: function () {
            return "source: " + this.source + ", type: " + this.type + ", kind: " + this.kind
        }
    };

    var PropertyChangeEvent = function (source, kind, value, oldValue, propertyType) {
        this.source = source;
        this.kind = kind;
        this.value = value;
        this.oldValue = oldValue;
        this.propertyType = propertyType;
    };

    PropertyChangeEvent.prototype = {
        type: "property.change",
        propertyType: null,
        toString: function () {
            return "source: " + this.source + ", type: " + this.type + ", propertyName: " + this.kind + ", oldValue: " + this.oldValue + ", value: " + this.value;
        }
    };

    extend(PropertyChangeEvent, Event);

    Z(PropertyChangeEvent.prototype, "propertyName", {
        get: function () {
            return this.kind;
        },
        set: function (t) {
            this.kind = t;
        }
    });

    var kz = function (source, value, newIndex) {
        this.source = source;
        this.oldValue = source.parent;
        this.value = value;
        this.newIndex = newIndex;
        if (this.oldValue) {
            this.oldIndex = this.oldValue.getChildIndex(source);
        }
    };

    kz.prototype = { kind: "parent" };

    extend(kz, PropertyChangeEvent);

    var Oz = function (source, value) {
        this.source = source;
        this.value = value;
    };

    Oz.prototype.kind = "child.add";

    extend(Oz, PropertyChangeEvent);

    var Mz = function (source, value) {
        this.source = source;
        this.value = value;
    };

    Mz.prototype.kind = "child.remove";

    extend(Mz, PropertyChangeEvent);

    var Sz = function (parent, source, oldValue, value) {
        this.source = source;
        this.oldValue = oldValue;
        this.value = value;
        this.parent = parent;
        this.child = source;
        this.oldIndex = oldValue;
        this.newIndex = value;
    };

    Sz.prototype.kind = "child.index";

    extend(Sz, PropertyChangeEvent);

    var Handler = function () {
    };

    Handler.prototype = {
        listener: null,
        beforeEvent: function (t) {
            return null != this.listener && this.listener.beforeEvent ? this.listener.beforeEvent(t) : true;
        },
        onEvent: function (t) {
            null != this.listener && this.listener.onEvent && this.listener.onEvent(t);
        }
    };

    var Dispatcher = function () {
        doSuperConstructor(this, Dispatcher, arguments);
        this.events = {};
        this.listeners = [];
    };

    var Cz = function (listener, scope) {
        this.listener = listener;
        this.scope = scope;
        listener instanceof Function ? this.onEvent = listener : (this.onEvent = listener.onEvent, this.beforeEvent = listener.beforeEvent);
        this.equals = function (listener) {
            return listener && this.listener == listener.listener && this.scope == listener.scope;
        }
    };

    Cz.prototype = {
        equals: function (t) {
            return t && this.listener == t.listener && this.scope == t.scope;
        },
        destroy: function () {
            delete this.scope;
            delete this.listener;
        }
    };

    Dispatcher.prototype = {
        listeners: null,
        _ncw: function () {
            return this.listeners && this.listeners.length > 0;
        },
        _78: function (t, i) {
            return t instanceof Dispatcher ? t : new Cz(t, i);
        },
        _98: function (t, i) {
            if (t instanceof Dispatcher) {
                return this.listeners.indexOf(t);
            }
            for (var n = this.listeners, e = 0, s = n.length; s > e; e++) {
                var h = n[e];
                if (h.listener == t && h.scope == i) {
                    return e;
                }
            }
            return -1;
        },
        contains: function (t, i) {
            return this._98(t, i) >= 0;
        },
        addListener: function (t, i) {
            return this.contains(t, i) ? false : void this.listeners.push(this._78(t, i));
        },
        removeListener: function (t, i) {
            var n = this._98(t, i);
            n >= 0 && this.listeners.splice(n, 1);
        },
        on: function (t, i) {
            this.addListener(t, i);
        },
        un: function (t, i, n) {
            this.removeListener(t, i, n);
        },
        onEvent: function (t) {
            return this.listeners ? void forEach(this.listeners, function (i) {
                i.onEvent && (i.scope ? i.onEvent.call(i.scope, t) : i.onEvent(t));
            }, this) : false;
        },
        beforeEvent: function (t) {
            return this.listeners ? forEach(this.listeners, function (i) {
                return i.beforeEvent ? i.scope ? i.beforeEvent.call(i.scope, t) : i.beforeEvent(t) : true;
            }, this) : true;
        },
        _e3: function (t) {
            return this.beforeEvent(t) === false ? false : (this.onEvent(t), true);
        },
        clear: function () {
            this.listeners = [];
        },
        destroy: function () {
            this.clear();
        }
    };

    extend(Dispatcher, Handler);

    var IListener = {
        onEvent: function () {
        },
        beforeEvent: function () {
        }
    };

    var ListEvent = function (source, kind, data, index, oldIndex) {
        this.source = source;
        this.type = "list";
        this.kind = kind;
        this.data = data;
        this.index = index;
        this.oldIndex = oldIndex;
    };

    ListEvent.prototype = {
        index: -1,
        oldIndex: -1,
        toString: function () {
            return "source: " + this.source + ", type: " + this.type + ", kind: " + this.kind + ", data: " + this.data + ", index: " + this.index + ", oldIndex: " + this.oldIndex;
        }
    };

    extend(ListEvent, Event);

    ListEvent.KIND_ADD = "add";

    ListEvent.KIND_REMOVE = "remove";

    ListEvent.KIND_CLEAR = "clear";

    ListEvent.KIND_INDEX_CHANGE = "index.change";

    var Data = function () {
        this.id = ++GG;
        this._nd9 = {};
    };

    Data.prototype = {
        _nd9: null,
        id: null,
        get: function (t) {
            return this._nd9[t];
        },
        set: function (t, i) {
            var n = this.get(t);
            if (n === i) {
                return false;
            }
            var e = new PropertyChangeEvent(this, t, i, n);
            return e.propertyType = Consts.PROPERTY_TYPE_CLIENT, this._nbp(t, i, e, this._nd9);
        },
        _nbp: function (t, i, e, s) {
            return this.beforeEvent(e) === false ? false : (s || (s = this._nd9), i === n ? delete s[t] : s[t] = i, this.onEvent(e), true);
        },
        remove: function (t) {
            this.set(t, null);
        },
        valueOf: function () {
            return this.id;
        },
        toString: function () {
            return this.id;
        },
        _e2: function (t, i) {
            if (i === n && (i = -1), this == t || t == this._k6) {
                return false;
            }
            if (t && this == t._k6 && !t._e2(null)) {
                return false;
            }
            var e = new kz(this, t, i);
            if (!this.beforeEvent(e)) {
                return false;
            }
            var s;
            var h;
            var r = this._k6;
            return t && (s = new Oz(t, this), !t.beforeEvent(s)) ? false : null == r || (h = new Mz(r, this), r.beforeEvent(h)) ? (this._k6 = t, null != t && ci(t, this, i), null != r && ui(r, this), this.onEvent(e), null != t && t.onEvent(s), null != r && r.onEvent(h), this.onParentChanged(r, t), true) : false;
        },
        addChild: function (t, i) {
            var n = t._e2(this, i);
            return n && this.onChildAdd(t, i), n;
        },
        onChildAdd: function () {
        },
        removeChild: function (t) {
            if (!this._fo || !this._fo.contains(t)) {
                return false;
            }
            var i = t._e2(null);
            return this.onChildRemove(t), i;
        },
        onChildRemove: function () {
        },
        toChildren: function () {
            return this._fo ? this._fo.toDatas() : null;
        },
        clearChildren: function () {
            if (this._fo && this._fo.length) {
                var t = this.toChildren();
                forEach(t, function (t) {
                    t._e2(null);
                }, this);
                this.onChildrenClear(t);
            }
        },
        forEachChild: function (t, i) {
            return this.hasChildren() ? this._fo.forEach(t, i) : false;
        },
        onChildrenClear: function () {
        },
        getChildIndex: function (t) {
            return this._fo && this._fo.length ? this._fo.indexOf(t) : -1;
        },
        setChildIndex: function (t, i) {
            if (!this._fo || !this._fo.length) {
                return false;
            }
            var n = this._fo.indexOf(t);
            if (0 > n || n == i) {
                return false;
            }
            var e = new Sz(this, t, n, i);
            return this.beforeEvent(e) === false ? false : (this._fo.remove(t) && this._fo.add(t, i), this.onEvent(e), true);
        },
        hasChildren: function () {
            return this._fo && this._fo.length > 0;
        },
        getChildAt: function (t) {
            return null == this._fo ? null : this._fo._k0[t];
        },
        isDescendantOf: function (t) {
            if (!t.hasChildren()) {
                return false;
            }
            for (var i = this.parent; null != i;) {
                if (t == i) {
                    return true;
                }
                i = i.parent;
            }
            return false;
        },
        onParentChanged: function () {
        },
        firePropertyChangeEvent: function (t, i, n, e) {
            this.onEvent(new PropertyChangeEvent(this, t, i, n, e));
        }
    };

    extend(Data, Handler);

    defineProperties(Data.prototype, {
        childrenCount: {
            get: function () {
                return this._fo ? this._fo.length : 0;
            }
        },
        children: {
            get: function () {
                return this._fo || (this._fo = new HashList), this._fo;
            }
        },
        parent: {
            get: function () {
                return this._k6;
            },
            set: function (t) {
                this._e2(t, -1);
            }
        },
        properties: {
            get: function () {
                return this._nd9;
            },
            set: function (t) {
                this._nd9 != t && (this._nd9 = t);
            }
        }
    });

    var Dz = function () {
        this._k0 = [];
        this._lv = {};
        this._1h = new Dispatcher;
    };

    Dz.prototype = {
        beforeEvent: function (t) {
            return null != this._1h && this._1h.beforeEvent ? this._1h.beforeEvent(t) : true;
        },
        onEvent: function (t) {
            if (this._1h instanceof Function) {
                this._1h(t);
            } else {
                if (null != this._1h && this._1h.onEvent) {
                    this._1h.onEvent(t);
                }
            }
        },
        _1h: null,
        setIndex: function (t, i) {
            if (!this.contains(t)) {
                throw new Error("'" + t.getId() + "' not exist");
            }
            var n = this.indexOf(t);
            if (n == i) {
                return false;
            }
            var e = new ListEvent(this, ListEvent.KIND_INDEX_CHANGE, t, i, n);
            return this.beforeEvent(e) === false ? false : (this._k0.remove(t) >= 0 && this._k0.add(i, t), this.onEvent(e), true);
        },
        _g2: function (t, i) {
            if (0 == t.length) {
                return false;
            }
            var e = false;
            var s = i >= 0;
            var h = new ListEvent(this, ListEvent.KIND_ADD, t, i);
            if (this.beforeEvent(h) === false) {
                return false;
            }
            var r = [];
            t = t._k0 || t;
            for (var a = 0, o = t.length; o > a; a++) {
                var f = t[a];
                null !== f && f !== n && this._kx(f, i, true) && (r.push(f), e = true, s && i++);
            }
            return h.data = r;
            this.onEvent(h);
            e;
        },
        _kx: function (t, i, n) {
            if (this.accept(t) === false) {
                return false;
            }
            if (n) {
                return doSuper(this, Dz, "_kx", arguments);
            }
            var e = new ListEvent(this, ListEvent.KIND_ADD, t, i);
            if (this.beforeEvent(e) === false) {
                return false;
            } else {
                if (doSuper(this, Dz, "_kx", arguments)) {
                    this._l0(t, e);
                    return t;
                } else {
                    return false;
                }
            }
        },
        _l0: function (t, i) {
            this.onEvent(i);
        },
        _ncu: function (t) {
            if (0 == t.length) {
                return false;
            }
            var i = new ListEvent(this, ListEvent.KIND_REMOVE, t);
            if (this.beforeEvent(i) === false) {
                return false;
            }
            var e = [];
            var s = false;
            t = t._k0 || t;
            for (var h = 0, r = t.length; r > h; h++) {
                var a = t[h];
                if (null !== a && a !== n) {
                    var o = a.id || a;
                    a.id === n && (a = null);
                    this._fx(o, a, true) && (e.push(a), s = true);
                }
            }
            return i.data = e, this.onEvent(i), s;
        },
        _fx: function (t, i, n) {
            if (n) {
                return doSuper(this, Dz, "_fx", arguments);
            }
            var e = new ListEvent(this, ListEvent.KIND_REMOVE, i);
            return this.beforeEvent(e) === false ? false : doSuper(this, Dz, "_fx", arguments) ? (this.onEvent(e), true) : false;
        },
        clear: function () {
            if (this.isEmpty()) {
                return false;
            }
            var t = new ListEvent(this, ListEvent.KIND_CLEAR, this.toDatas());
            return this.beforeEvent(t) === false ? false : doSuper(this, Dz, "clear") ? (this.onEvent(t), true) : false;
        },
        accept: function (t) {
            return this.filter && this.filter(t) === false ? false : true;
        }
    };

    extend(Dz, HashList);

    Z(Dz.prototype, "listChangeDispatcher", {
        get: function () {
            return this._1h;
        }
    });

    var DataModel = function () {
        doSuperConstructor(this, DataModel, arguments);
        this.selectionChangeDispatcher = new Dispatcher;
        this._selectionModel = new SelectionModel(this);
        this._selectionModel._1h = this.selectionChangeDispatcher;
        this.dataChangeDispatcher = new Dispatcher;
        this.dataChangeDispatcher.addListener({
            beforeEvent: this.beforeDataPropertyChange,
            onEvent: this.onDataPropertyChanged
        }, this);
        this.parentChangeDispatcher = new Dispatcher;
        this.childIndexChangeDispatcher = new Dispatcher;
        this.$roots = new HashList;
        var t = this;
        this.$roots.setIndex = function (i, n) {
            if (!t.$roots.contains(i)) {
                throw new Error("'" + i.id + "' not exist");
            }
            var e = t.$roots._k0.indexOf(i);
            if (e == n) {
                return false;
            }
            t.$roots._k0.splice(e, 1);
            t.$roots._k0.splice(n, 0, i);
            t._d1IndexFlag = true;
            var s = new Sz(t, i, e, n);
            return t._1t(s), true;
        }
    };

    DataModel.prototype = {
        selectionModel: null,
        selectionChangeDispatcher: null,
        dataChangeDispatcher: null,
        parentChangeDispatcher: null,
        roots: null,
        _l0: function (t, i) {
            t.listener = this.dataChangeDispatcher, t.parent || this.$roots.add(t), this.onEvent(i)
        },
        _fx: function (t, i) {
            if (doSuper(this, DataModel, "_fx", arguments)) {
                if (i instanceof Edge) i.disconnect(); else if (i instanceof Node) {
                    var n = i.getEdges();
                    this.remove(n)
                }
                var e = i.parent;
                return null == e ? this.$roots.remove(i) : (e.removeChild(i), e.__6h = true), i.hasChildren() && this.remove(i.toChildren()), i.listener = null, true
            }
            return false
        },
        _57: function (t) {
            var i = t.source;
            this.contains(i) && (null == i.parent ? this.$roots.add(i) : null == t.oldValue && this.$roots.remove(i), this.parentChangeDispatcher.onEvent(t))
        },
        _1t: function (t) {
            this.childIndexChangeDispatcher.onEvent(t)
        },
        beforeDataPropertyChange: function (t) {
            return t instanceof kz ? this.parentChangeDispatcher.beforeEvent(t) : true
        },
        onDataPropertyChanged: function (t) {
            return t instanceof kz ? (this._d1IndexFlag = true, t.source._d1IndexFlag = true, void this._57(t)) : void (t instanceof Sz && (this._d1IndexFlag = true, t.source._d1IndexFlag = true, this._1t(t)))
        },
        toRoots: function () {
            return this.$roots.toDatas()
        },
        _hf: function (t) {
            var i, n = t._k6;
            i = n ? n._fo : this.$roots;
            var e = i.indexOf(t);
            if (0 > e) throw new Error("data '" + t + "' not exist in the box");
            return 0 == e ? n : i.getByIndex(e - 1)
        },
        _h5: function (t) {
            var i, n = t._k6;
            i = n ? n._fo : this.$roots;
            var e = i.indexOf(t);
            if (0 > e) throw new Error("data '" + t + "' not exist in the box");
            return e == i.length - 1 ? n ? this._h5(n) : null : i.getByIndex(e + 1)
        },
        forEachByDepthFirst: function (t, i, n) {
            return this.$roots.length ? forEachByDepthFirst(this.$roots, t, i, n) : false
        },
        forEachByDepthFirstReverse: function (t, i, n) {
            return this.$roots.length ? forEachByDepthFirstReverse(this.$roots, t, i, n) : false
        },
        forEachByBreadthFirst: function (t, i) {
            return this.$roots.length ? forEachByBreadthFirst(this.$roots, t, i) : false
        },
        forEachByBreadthFirstReverse: function (t, i) {
            return this.$roots.length ? _(this.$roots, t, i) : false
        },
        clear: function () {
            return doSuper(this, DataModel, "clear") ? (this.$roots.clear(), this.selectionModel.clear(), true) : false
        }
    };

    extend(DataModel, Dz);

    defineProperties(DataModel.prototype, {
        selectionModel: {
            get: function () {
                return this._selectionModel;
            }
        },
        roots: {
            get: function () {
                return this.$roots;
            }
        }
    });

    var SelectionModel = function (box) {
        doSuperConstructor(this, SelectionModel);
        this.box = box;
        this._ncoxChangeListener = {
            onEvent: function (box) {
                if (ListEvent.KIND_REMOVE == box.kind) {
                    if (null != box.data) {
                        this.remove(box.data);
                    } else if (null != box.datas) {
                         this.remove(box.datas);
                    }
                } else if (ListEvent.KIND_CLEAR == box.kind) {
                     this.clear();
                }
            }
        };
        this.box.listChangeDispatcher.addListener(this._ncoxChangeListener, this);
    };

    SelectionModel.prototype = {
        box: null,
        isSelected: function (t) {
            return this.containsById(t.id || t);
        },
        select: function (t) {
            return this.add(t);
        },
        unselect: function (t) {
            return this.remove(t);
        },
        reverseSelect: function (t) {
            return this.contains(t) ? this.remove(t) : this.add(t);
        },
        accept: function (t) {
            return this.box.contains(t);
        }
    };

    extend(SelectionModel, Dz);

    var styleSheet = null;
    var prefix = null;
    var Gz = {};

    var Fz = function () {
        if (!document.createElement) {
            return function (t) {
                return t;
            };
        }
        var div = document.createElement("div");
        var style = div.style;
        var s = {};
        return function (t) {
            if (s[t]) {
                return s[t];
            }
            var i = _i(t);
            if (style[i] !== n || prefix && style[i = _i(prefix + i)] !== n) {
                s[t] = i;
                return i;
            } else {
                return t;
            }
        }
    }();

    !function () {
        if (!document.head) {
            return false;
        }
        var head = document.head;
        var arr = "Webkit Moz O ms Khtml".split(" ");
        for (var i = 0; i < arr.length; i++) {
            if (head.style[arr[i] + "Transform !== n"]) {
                prefix = "-" + arr[i].toLowerCase() + "-";
                break;
            }
        }

        var style = document.createElement("style");
        style.createPopup || style.appendChild(document.createTextNode(""));
        style.type = "text/css";
        style.id = "qunee-styles";
        head.appendChild(style);
        styleSheet = style.sheet;

        var a;
        var o;
        for (var f in Gz) {
            var c = Gz[f];
            a = f, o = "";
            for (var u in c) {
                o += Fz(u) + ":" + c[u] + ";\n";
            }
            addCSSRule(a, o);
        }
    }();

    var addEventListener = function (window, eventName, listener, useCapture, obj) {
        if (obj) {
            var handler = function (window) {
                handler.handle.call(handler.scope, window);
            };
            handler.scope = obj;
            handler.handle = listener;
            window.addEventListener(eventName, handler, useCapture);
            return handler;
        }
        window.addEventListener(eventName, listener, useCapture);
        return listener;
    };

    var removeEventListener = function (element, event, callback) {
        element.removeEventListener(event, callback);
    };

    Defaults.DOUBLE_CLICK_INTERVAL_TIME = 200;
    Defaults.LONG_PRESS_INTERVAL = 800;

    if (t.navigator && navigator.userAgent) {
        var qz;
        var isMobile = /mobile|tablet|ip(ad|hone|od)|android/i;
        var Wz = "ontouchstart" in t;
        var Uz = Wz && isMobile.test(navigator.userAgent);

        if (Uz) {
            qz = "touchstart,touchmove,touchend,touchcancel";
        } else {
            var Vz = "onmousewheel" in t ? "mousewheel" : "DOMMouseScroll";
            qz = "contextmenu,mousedown,mouseup,click,dblclick,mousemove,keydown,keyup," + Vz;
            Wz && (qz += ",touchstart,touchmove,touchend,touchcancel");
        }

        qz = qz.split(/[\s,]+/);

        var Xz = function (i) {
            return t.TouchEvent && i instanceof t.TouchEvent;
        };

        var Zz = function () {
            return Defaults.DOUBLE_CLICK_INTERVAL_TIME;
        };

        var Kz = function () {
            return Defaults.LONG_PRESS_INTERVAL;
        };

        var F = function (t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = false;
        };

        var G = function (t) {
            t.stopPropagation && t.stopPropagation();
            t.cancelBubble = true;
        };

        var stopEvent = function (t) {
            eventPreventDefault(t);
            eventStopPropagation(t);
        };

        var Jz = function (t) {
            return t.defaultPrevented || t.returnValue === false;
        };

        var Qz = function (t) {
            hH._ndurrentItem && hH._ndurrentItem._onWindowMouseMove(t);
        };

        var tH = function (t) {
            if (hH._ndurrentItem) {
                var i = hH._ndurrentItem;
                i._onWindowMouseUp(t);
                iH(null);
            }
        };

        var iH = function (t) {
            hH._ndurrentItem != t && (hH._ndurrentItem && (hH._ndurrentItem.__dragging = false), hH._ndurrentItem = t);
        };

        var nH = function (i, n) {
            qz.forEach(function (t) {
                i.addEventListener(t, n, false);
            });
            isTouchSupport || hH._nc1 || (hH._nc1 = true, t.addEventListener("mousemove", Qz, true), t.addEventListener("mouseup", tH, true));
        };

        var eH = function (t, i) {
            qz.forEach(function (n) {
                t.removeEventListener(n, i, false);
            })
        };

        var sH = function (t) {
            return t.touches ? { timeStamp: t.timeStamp, x: t.cx, y: t.cy } : { timeStamp: t.timeStamp, x: t.clientX, y: t.clientY };
        };

        DragSupport.prototype = {
            _install: function () {
                this.__nbction || (this.__nbction = function (t) {
                    this._nbction(t)
                }.bind(this), nH(this._me, this.__nbction));
            },
            _uninstall: function () {
                this.__nbction && eH(this._me, this.__nbction);
            },
            _nbction: function (t) {
                t = this._toQEvent(t);
                var i = t.type;
                this._handleEvent(t, i) === false && this._onEvent(t, "on" + i);
            },
            _ndancelLongPressTimer: function () {
                this.__longPressTimer && (clearTimeout(this.__longPressTimer), this.__longPressTimer = null);
            },
            __l9LongPress: function (t) {
                this.__onLongPressFunction || (this.__onLongPressFunction = function () {
                    this._l9Event && (this.__ndancelClick = true, this._l9Event.button ? this._onEvent(this._l9Event, "onlongpress2") : this._onEvent(this._l9Event, "onlongpress"))
                }.bind(this));
                this._ndancelLongPressTimer();
                this.__longPressTimer = setTimeout(this.__onLongPressFunction, Kz(t));
            },
            __fixTouchEvent: function (t) {
                for (var i, n, e = 0, s = 0, h = t.touches.length, r = 0; h > r;) {
                    var a = t.touches[r++];
                    var o = a.clientX;
                    var f = a.clientY;
                    if (2 == r) {
                        var c = n[0] - o;
                        var u = n[1] - f;
                        i = Math.sqrt(c * c + u * u);
                    }
                    n = [o, f];
                    e += o;
                    s += f;
                }
                t.cx = e / h;
                t.cy = s / h;
                t.center = { x: t.cx, y: t.cy, clientX: t.cx, clientY: t.cy };
                t.distance = i;
            },
            __touchCountChange: function (t) {
                this._dragPoints.clear();
                this._9d = sH(t);
            },
            _handleTouchEvent: function (t, i) {
                switch (i) {
                    case "touchstart":
                        eventStopPropagation(t);
                        this.__fixTouchEvent(t);
                        this.__touchCountChange(t);
                        var n = t.touches.length;
                        this._l9Event || (this._l9Event = t, this._onstart(t), this.__ndancelClick = false, this.__l9LongPress(t));
                        1 == n && (this.__l9MulTouchEvent = null);
                        n >= 2 && !this.__l9MulTouchEvent && (this.__l9MulTouchEvent = { cx: t.cx, cy: t.cy, distance: t.distance });
                        break;
                    case "touchmove":
                        stopEvent(t);
                        this.__fixTouchEvent(t);
                        var n = t.touches.length;
                        if (n >= 2 && this.__l9MulTouchEvent) {
                            var e = this.__l9MulTouchEvent.distance;
                            t._scale = t.distance / e;
                            t.dScale = this.__l9MulTouchEvent.prevScale ? t._scale / this.__l9MulTouchEvent.prevScale : t._scale;
                            this.__l9MulTouchEvent.prevScale = t._scale;
                            this.__pinching || (this.__pinching = true, this._onEvent(t, "startpinch"));
                        }
                        this.__dragging || (this.__dragging = true, this._l9drag(t));
                        this._ondrag(t);
                        this.__pinching && this._onEvent(t, "onpinch");
                        break;
                    case "touchend":
                        stopEvent(t);
                        var n = t.touches.length;
                        n && (this.__fixTouchEvent(t), this.__touchCountChange(t));
                        1 >= n && (this.__pinching && (this.__pinching = false, this._onEvent(t, "endpinch")), this.__l9MulTouchEvent = null);
                        0 == n && (this.__dragging ? (this._enddrag(t), this.__dragging = false) : t.timeStamp - this._l9Event.timeStamp < .8 * Zz(t) && this.__onclick(this._l9Event), this._onrelease(t));
                        break;
                    case "touchcancel":
                        this.__dragging = false;
                        this.__pinching = false;
                        this.__l9MulTouchEvent = null;
                }
                return false;
            },
            _handleEvent: function (t, i) {
                if (Xz(t)) {
                    return this._handleTouchEvent(t, i);
                }
                if ("mousedown" == i) {
                    eventStopPropagation(t);
                    iH(this);
                    this._9d = sH(t);
                    this._l9Event || (this._l9Event = t, this._onstart(t));
                    this.__ndancelClick = false;
                    this.__l9LongPress(t);
                } else if ("mouseup" == i) {
                    iH();
                    this._onrelease(t);
                } else if ("click" == i) {
                    if (this._delayClickEvent) {
                        return this.__onclick(t), true;
                    }
                } else if ("dblclick" == i) {
                    if (this._delayClickEvent) {
                        return true;
                    }
                } else {
                    if ("contextmenu" == i) {
                        return this._onEvent(t, "oncontextmenu"), this._l9Event && Jz(t) && iH(this), true;
                    }
                    if (i == Vz) {
                        var e = t.wheelDelta;
                        if (e !== n ? !isSafari && e % 120 ? e % 12 || (e /= 12) : e /= 120 : e === n && (e = -t.detail), !e) {
                            return;
                        }
                        return t.delta = e, this._onEvent(t, "onmousewheel");
                    }
                }
                return false;
            },
            _onEvent: function (t, i) {
                if (this._handler) {
                    var n = this._handler;
                    if (i = i || t.type, n instanceof Function) {
                        return n(t, i);
                    }
                    if (!(n.accept instanceof Function && n.accept(i, t) === false)) {
                        return n.onevent instanceof Function && n.onevent(i, t, this._scope || this._me), n[i] instanceof Function ? n[i].call(n, t, this._scope || this._me) : void 0;
                    }
                }
            },
            _toQEvent: function (t) {
                return t;
            },
            _onWindowMouseUp: function (t) {
                this.__dragging && (stopEvent(t), this.__dragging = false, t = this._toQEvent(t), this._enddrag(t), this._onrelease(t), this._onEvent(t, "onmouseup"));
            },
            _l9DragDistance: 4,
            _onWindowMouseMove: function (t) {
                if (this._l9Event) {
                    if (stopEvent(t), !this.__dragging) {
                        var i = this._l9Event.screenX - t.screenX;
                        var n = this._l9Event.screenY - t.screenY;
                        if (i * i + n * n < this._l9DragDistance) {
                            return;
                        }
                        this.__dragging = true;
                        this._l9drag(t);
                    }
                    this._ondrag(this._toQEvent(t));
                }
            },
            _delayClickEvent: true,
            __onclick: function (t) {
                if (!this.__ndancelClick) {
                    var i = Zz(t);
                    this.__ndlickTimer ? this.__dblclicked || (clearTimeout(this.__ndlickTimer), this.__ndlickTimer = null, this._onEvent(t, "ondblclick"), this.__dblclicked = true) : (this.__dblclicked = false, this.__ndlickTimer = setTimeout(function (t) {
                        this.__ndlickTimer = null, this.__dblclicked || this._onEvent(t, "onclick")
                    }.bind(this, t, i), i));
                }
            },
            _onstart: function (t) {
                t.button ? this._onEvent(t, "onstart2") : this._onEvent(t, "onstart");
            },
            _onrelease: function (t) {
                this._l9Event && (this._ndancelLongPressTimer(), t.button ? this._onEvent(t, "onrelease2") : this._onEvent(t, "onrelease"), this._l9Event = null, this._9d = null);
            },
            _nbppendDragInfo: function (t) {
                var i = this._9d;
                this._9d = sH(t);
                this._dragPoints.add(i, this._9d, t);
            },
            _l9drag: function () {
                this.__ndancelClick = true;
                this._ndancelLongPressTimer();
                this._l9Event.button ? this._onEvent(this._l9Event, "startdrag2") : this._onEvent(this._l9Event, "startdrag");
            },
            _ondrag: function (t) {
                this._nbppendDragInfo(t);
                this._l9Event.button ? this._onEvent(t, "ondrag2") : this._onEvent(t, "ondrag");
            },
            _enddrag: function (t) {
                if (t.timeStamp - this._9d.timeStamp < 100) {
                    var i = this._dragPoints.getCurrentSpeed();
                    i && (t.vx = i.x, t.vy = i.y);
                }
                this._l9Event.button ? this._onEvent(t, "enddrag2") : this._onEvent(t, "enddrag");
                this._dragPoints.clear();
            },
            _ia: function () {
                this._l8Status();
            },
            l8Status: function () {
                hH._ndurrentItem == this && delete hH._ndurrentItem;
                this._ndancelLongPressTimer();
                delete this._9d;
                this._l9Event && (delete this._l9Event.getData, delete this._l9Event.getUI, delete this._l9Event);
            }
        };

        var hH = S(
            function (t) {
                this._l1 = t;
                DragSupport.apply(this, [t.canvasPanel, null, t]);
            },
            {
                "super": DragSupport,
                _muData: function (t) {
                    return this._l1.getElementByMouseEvent(t);
                },
                _lq: function (t) {
                    return this._l1.getUIByMouseEvent(t);
                },
                _toQEvent: function (i) {
                    return (i instanceof MouseEvent || t.TouchEvent && i instanceof t.TouchEvent) && (i.getData = this._muData.bind(this, i), i.getUI = this._lq.bind(this, i)), i;
                },
                _onElementRemoved: function (t) {
                    this._jbListeners(function (i) {
                        i.onElementRemoved instanceof Function && i.onElementRemoved(t, this._l1);
                    })
                },
                _onElementClear: function () {
                    this._jbListeners(function (t) {
                        t.onClear instanceof Function && t.onClear(this._l1);
                    })
                },
                _ia: function (t) {
                    this._24s && this._iaInteractions(this._24s, t);
                    this._ndustomInteractionListeners && this._iaInteractions(this._ndustomInteractionListeners, t);
                    this._l8Status();
                },
                _l1: null,
                _24s: null,
                _ndustomInteractionListeners: null,
                _mvInteraction: function (t) {
                    return this._24s == t ? false : (this._24s && this._24s.length && this._iaInteractions(this._24s), void (this._24s = t));
                },
                _n1CustomInteractionListener: function (t) {
                    this._ndustomInteractionListeners || (this._ndustomInteractionListeners = []);
                    this._ndustomInteractionListeners.push(t);
                },
                _kuCustomInteractionListener: function (t) {
                    this._ndustomInteractionListeners && 0 != this._ndustomInteractionListeners.length && x(this._ndustomInteractionListeners, t);
                },
                _onEvent: function (t, i, n) {
                    this._l1[i] instanceof Function && this._l1[i].call(this._l1, t, n);
                    this._24s && this.__onEvent(t, i, this._24s, n);
                    this._ndustomInteractionListeners && this.__onEvent(t, i, this._ndustomInteractionListeners, n);
                },
                _jbListeners: function (t) {
                    this._24s && forEach(this._24s, t, this);
                    this._ndustomInteractionListeners && forEach(this._ndustomInteractionListeners, t, this);
                },
                __onEvent: function (t, i, n, e) {
                    if (!isArray(n)) {
                        return void this.__handleEvent(t, i, n, e);
                    }
                    for (var s = 0; s < n.length; s++) {
                        var h = n[s];
                        this.__handleEvent(t, i, h, e);
                    }
                },
                __handleEvent: function (t, i, n, e) {
                    if (!(n.accept instanceof Function && n.accept(i, t, this._l1, e) === false)) {
                        n.onevent instanceof Function && n.onevent(i, t, this._l1, e);
                        var s = n[i];
                        s instanceof Function && s.call(n, t, this._l1, e);
                    }
                },
                _iaInteraction: function (t) {
                    t.destroy instanceof Function && t.destroy.call(t, this._l1);
                },
                _iaInteractions: function (t, i) {
                    if (!isArray(t)) {
                        return void this._iaInteraction(t, i);
                    }
                    for (var n = 0; n < t.length; n++) {
                        var e = t[n];
                        e && this._iaInteraction(e, i);
                    }
                }
            }
        );
    }

    dragPoints.prototype = {
        limitCount: 10,
        points: null,
        add: function (t, i, n) {
            0 == this.points.length && (this._l9X = t.x, this._l9Y = t.y);
            var e = i.timeStamp - t.timeStamp || 1;
            n.interval = e;
            var s = i.x - t.x;
            var h = i.y - t.y;
            n.dx = s;
            n.dy = h;
            n.startX = this._l9X;
            n.startY = this._l9Y;
            n.totalDeltaX = i.x - this._l9X;
            n.totalDeltaY = i.y - this._l9Y;
            this.points.splice(0, 0, {
                interval: e,
                dx: s,
                dy: h
            });
            this.points.length > this.limitCount && this.points.pop();
        },
        getCurrentSpeed: function () {
            if (!this.points.length) {
                return null;
            }
            for (var t = 0, i = 0, n = 0, e = 0, s = this.points.length; s > e; e++) {
                var h = this.points[e];
                var r = h.interval;
                if (r > 150) {
                    t = 0;
                    break;
                }
                if (t += r, i += h.dx, n += h.dy, t > 300) {
                    break;
                }
            }
            return 0 == t || 0 == i && 0 == n ? null : { x: i / t, y: n / t };
        },
        clear: function () {
            this.points = [];
        }
    };

    var rH;
    var aH;
    var oH;
    var fH;

    isWebkit ? (rH = "-webkit-zoom-in", aH = "-webkit-zoom-out", oH = "-webkit-grab", fH = "-webkit-grabbing") : isGecko ? (rH = "-moz-zoom-in", aH = "-moz-zoom-out", oH = "-moz-grab", fH = "-moz-grabbing") : (rH = "crosshair", aH = "crosshair", oH = "default", fH = "move");

    var cH = "url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFVJREFUeNpi/P//PwMlgBGfAYyMIOn/jGQZANIMoskyAKYZGeAyiGgX4PIOSWGAzRBGUmMBw1CqGUBMlA1yA4gxhKhYwBnfpKQDqqREquRGYgBAgAEAD8h/4adTIzwAAAAASUVORK5CYII=) 8 8,crosshair";
    var lH = 1.70158;

    var animationEffect = {
        swing: function (t) {
            return -Math.cos(t * Math.PI) / 2 + .5;
        },
        easeNone: function (t) {
            return t;
        },
        easeIn: function (t) {
            return t * t;
        },
        easeOut: function (t) {
            return (2 - t) * t;
        },
        easeBoth: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2));
        },
        easeInStrong: function (t) {
            return t * t * t * t;
        },
        easeOutStrong: function (t) {
            return 1 - --t * t * t * t;
        },
        easeBothStrong: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t);
        },
        elasticIn: function (t) {
            var i = .3;
            var n = i / 4;
            return 0 === t || 1 === t ? t : -(Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - n) * Math.PI / i));
        },
        elasticOut: function (t) {
            var i = .3;
            var n = i / 4;
            return 0 === t || 1 === t ? t : Math.pow(2, -10 * t) * Math.sin(2 * (t - n) * Math.PI / i) + 1;
        },
        elasticBoth: function (t) {
            var i = .45;
            var n = i / 4;
            return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - n) * Math.PI / i) : Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - n) * Math.PI / i) * .5 + 1;
        },
        backIn: function (t) {
            return 1 === t && (t -= .001), t * t * ((lH + 1) * t - lH);
        },
        backOut: function (t) {
            return (t -= 1) * t * ((lH + 1) * t + lH) + 1;
        },
        backBoth: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * (((lH *= 1.525) + 1) * t - lH) : .5 * ((t -= 2) * t * (((lH *= 1.525) + 1) * t + lH) + 2);
        },
        bounceIn: function (t) {
            return 1 - animationEffect.bounceOut(1 - t);
        },
        bounceOut: function (t) {
            var i, n = 7.5625;
            return i = 1 / 2.75 > t ? n * t * t : 2 / 2.75 > t ? n * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? n * (t -= 2.25 / 2.75) * t + .9375 : n * (t -= 2.625 / 2.75) * t + .984375;
        },
        bounceBoth: function (t) {
            return .5 > t ? .5 * animationEffect.bounceIn(2 * t) : .5 * animationEffect.bounceOut(2 * t - 1) + .5;
        }
    };

    var bH = function (t) {
        this._k8 = t;
    };

    bH.prototype = {
        _k8: null,
        _7r: function () {
            this._ndallback instanceof Function && (this._ndallback(), this._ndallback = null);
        },
        _l9: function (t) {
            var i = Date.now();
            this._mc();
            this._ndallback = t;
            this._requestID = requestAnimationFrame(function n() {
                var t = Date.now();
                var e = t - i;
                return !e || this._k8 && this._k8(e) !== false ? (i = t, void (this._requestID = requestAnimationFrame(n.bind(this)))) : void this._mc();
            }.bind(this));
        },
        _72: function () {
        },
        _mc: function () {
            return this._requestID ? (this._72(), this._7r(), t.cancelAnimationFrame(this._requestID), void delete this._requestID) : false;
        },
        _ea: function () {
            return null != this._requestID;
        }
    };

    var yH = function (t, i, n, e) {
        this._onStep = t;
        this._scope = i || this;
        this._36 = e;
        n && n > 0 && (this._j1 = n);
    };

    yH.prototype = {
        _j1: 1e3,
        _36: null,
        _em: 0,
        _mc: function () {
            return this._em = 0, this._d0 = 0, doSuper(this, yH, "_mc");
        },
        _d0: 0,
        _k8: function (t) {
            if (this._em += t, this._em >= this._j1) {
                return this._onStep.call(this._scope, 1, (1 - this._d0) * this._j1, t, this._j1), false;
            }
            var i = this._em / this._j1;
            return this._36 && (i = this._36(i)), this._onStep.call(this._scope, i, (i - this._d0) * this._j1, t, this._j1) === false ? false : void (this._d0 = i);
        }
    };

    extend(yH, bH);

    var error = function (str) {
        error(str);
    };

    var Qunee = {
        version: "0.0",
        extend: extend,
        doSuperConstructor: doSuperConstructor,
        doSuper: doSuper,
        createFunction: createFunction,
        setClass: setClass,
        appendClass: appendClass,
        removeClass: removeClass,
        forEach: forEach,
        forEachReverse: forEachReverse,
        isNumber: isNumber,
        isString: isString,
        isBoolean: isBoolean,
        isArray: isArray,
        eventPreventDefault: eventPreventDefault,
        eventStopPropagation: eventStopPropagation,
        stopEvent: stopEvent,
        callLater: callLater,
        nextFrame: nextFrame,
        forEachChild: forEachChild,
        forEachByDepthFirst: forEachByDepthFirst,
        forEachByDepthFirstReverse: forEachByDepthFirstReverse,
        forEachByBreadthFirst: forEachByBreadthFirst,
        randomInt: randomInt,
        randomBool: randomBool,
        randomColor: randomColor,
        addEventListener: addEventListener,
        getFirstElementChildByTagName: getFirstElementChildByTagName
    };

    Qunee.isTouchSupport = isTouchSupport;
    Qunee.isIOS = isIOS;
    Qunee.intersectsPoint = intersectsPoint;
    Qunee.containsRect = containsRect;
    Qunee.Rect = Rect;
    Qunee.Size = Size;
    Qunee.Point = Point;
    Qunee.Insets = Insets;
    Qunee.Event = Event;
    Qunee.PropertyChangeEvent = PropertyChangeEvent;
    Qunee.ListEvent = ListEvent;
    Qunee.Handler = Handler;
    Qunee.Dispatcher = Dispatcher;
    Qunee.Position = Position;
    Qunee.Data = Data;
    Qunee.SelectionModel = SelectionModel;
    Qunee.DataModel = DataModel;
    Qunee.IListener = IListener;
    Qunee.loadURL = loadURL;
    Qunee.loadXML = loadXML;
    Qunee.loadJSON = loadJSON;
    Qunee.isMetaKey = isMetaKey;
    Qunee.calculateDistance = calculateDistance;
    Qunee.HashList = HashList;
    Qunee.DragSupport = DragSupport;
    Qunee.alert = alert;
    Qunee.prompt = prompt;
    Qunee.confirm = confirm;
    Qunee.addCSSRule = addCSSRule;

    var Consts = {
        IMAGE_ADJUST_FLIP: "flip",
        IMAGE_ADJUST_MIRROR: "mirror",
        SELECTION_TYPE_BORDER_RECT: "border.rect",
        SELECTION_TYPE_BORDER: "border",
        SELECTION_TYPE_SHADOW: "shadow",
        NS_SVG: "http://www.w3.org/2000/svg",
        PROPERTY_TYPE_ACCESSOR: 0,
        PROPERTY_TYPE_STYLE: 1,
        PROPERTY_TYPE_CLIENT: 2,
        EDGE_TYPE_DEFAULT: null,
        EDGE_TYPE_ELBOW: "elbow",
        EDGE_TYPE_ELBOW_HORIZONTAL: "elbow.H",
        EDGE_TYPE_ELBOW_VERTICAL: "elbow._gw",
        EDGE_TYPE_ORTHOGONAL: "orthogonal",
        EDGE_TYPE_ORTHOGONAL_HORIZONTAL: "orthogonal.H",
        EDGE_TYPE_ORTHOGONAL_VERTICAL: "orthogonal._gw",
        EDGE_TYPE_HORIZONTAL_VERTICAL: "orthogonal.H._gw",
        EDGE_TYPE_VERTICAL_HORIZONTAL: "orthogonal._gw.H",
        EDGE_TYPE_EXTEND_TOP: "extend.top",
        EDGE_TYPE_EXTEND_LEFT: "extend.left",
        EDGE_TYPE_EXTEND_BOTTOM: "extend.bottom",
        EDGE_TYPE_EXTEND_RIGHT: "extend.right",
        EDGE_TYPE_ZIGZAG: "zigzag",
        EDGE_CORNER_NONE: "none",
        EDGE_CORNER_ROUND: "round",
        EDGE_CORNER_BEVEL: "bevel",
        GROUP_TYPE_RECT: "rect",
        GROUP_TYPE_CIRCLE: "circle",
        GROUP_TYPE_ELLIPSE: "ELLIPSE",
        SHAPE_CIRCLE: "oval",
        SHAPE_RECT: "rect",
        SHAPE_ROUNDRECT: "roundrect",
        SHAPE_STAR: "star",
        SHAPE_TRIANGLE: "triangle",
        SHAPE_HEXAGON: "hexagon",
        SHAPE_PENTAGON: "pentagon",
        SHAPE_TRAPEZIUM: "trapezium",
        SHAPE_RHOMBUS: "rhombus",
        SHAPE_PARALLELOGRAM: "parallelogram",
        SHAPE_HEART: "heart",
        SHAPE_DIAMOND: "diamond",
        SHAPE_CROSS: "cross",
        SHAPE_ARROW_STANDARD: "arrow.standard",
        SHAPE_ARROW_1: "arrow.1",
        SHAPE_ARROW_2: "arrow.2",
        SHAPE_ARROW_3: "arrow.3",
        SHAPE_ARROW_4: "arrow.4",
        SHAPE_ARROW_5: "arrow.5",
        SHAPE_ARROW_6: "arrow.6",
        SHAPE_ARROW_7: "arrow.7",
        SHAPE_ARROW_8: "arrow.8",
        SHAPE_ARROW_OPEN: "arrow.open"
    };

    Consts.LINE_CAP_TYPE_BUTT = "butt";
    Consts.LINE_CAP_TYPE_ROUND = "round";
    Consts.LINE_CAP_TYPE_SQUARE = "square";
    Consts.LINE_JOIN_TYPE_BEVEL = "bevel";
    Consts.LINE_JOIN_TYPE_ROUND = "round";
    Consts.LINE_JOIN_TYPE_MITER = "miter";
    Defaults.SELECTION_TYPE = Consts.SELECTION_TYPE_SHADOW;
    Defaults.SELECTION_TOLERANCE = Uz ? 8 : 3;
    Defaults.SELECTION_BORDER = 2;
    Defaults.SELECTION_SHADOW_BLUR = 7;
    Defaults.SELECTION_COLOR = randomColor2(3422561023);
    Defaults.SELECTION_TYPE = Consts.SELECTION_TYPE_SHADOW;
    Defaults.BORDER_RADIUS = 10;
    Defaults.POINTER_WIDTH = 10;
    Defaults.ARROW_SIZE = 10;
    Defaults.IMAGE_MAX_SIZE = 200;
    Defaults.LINE_HEIGHT = 1.2;

    var devicePixelRatio = window.devicePixelRatio || 1;
    if (devicePixelRatio < 1) {
        devicePixelRatio = 1
    }

    var canvas;
    Qunee.createCanvas = createCanvas;

    var kH = function (t, i, n, e) {
        var s = t - n;
        var h = i - e;
        return s * s + h * h;
    };

    Qi.prototype = {
        equals: function (t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r;
        }
    };

    Qi._jwCircle = function (t, i, n) {
        if (!n) {
            return Ki(t, i);
        }
        var e = kH(t.x, t.y, i.x, i.y);
        var s = kH(t.x, t.y, n.x, n.y);
        var h = kH(n.x, n.y, i.x, i.y);
        if (e + .01 >= s + h) {
            return Ki(t, i, 0, n);
        }
        if (s + .01 >= e + h) {
            return Ki(t, n, 0, i);
        }
        if (h + .01 >= e + s) {
            return Ki(i, n, 0, t);
        }
        var r;
        Math.abs(n.y - i.y) < 1e-4 && (r = t, t = i, i = r);
        r = n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * (-t.y + n.y);
        var a = (n.x * n.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - n.y)) * (i.y - n.y) + i.x * i.x * (-t.y + n.y)) / (2 * r);
        var o = (i.y + n.y) / 2 - (n.x - i.x) / (n.y - i.y) * (a - (i.x + n.x) / 2);
        return new Qi(a, o, calculateDistance(a, o, t.x, t.y), t, i, n);
    };

    var MH = {
        _ncg: function (t, i, e, s, h) {
            if (isString(t) && (t = Position.fromString(t)), !t) {
                return { x: 0, y: 0 };
            }
            var r = 0;
            var a = 0;
            var o = i._jg;
            if (e = e || 0, t.x === n) {
                var f = t.horizontalPosition;
                var c = t.verticalPosition;
                var u = true;
                switch (f) {
                    case "r":
                        u = false;
                        break;
                    case "c":
                        r += o / 2;
                }
                switch (c) {
                    case "t":
                        a -= e / 2;
                        break;
                    case "b":
                        a += e / 2;
                }
            } else {
                r = t.x;
                a = t.y;
                Math.abs(r) > 0 && Math.abs(r) < 1 && (r *= o);
            }
            h && null != s && (a += s.y, r += Math.abs(s.x) < 1 ? s.x * o : s.x);
            var _ = on.call(i, r, a, u);
            return _ ? (h || null == s || _.offset(s), _) : { x: 0, y: 0 };
        },
        _lt: function (t, i) {
            var n = i.type;
            var e = i.points;
            switch (n) {
                case "a":
                    t.arcTo(e[0], e[1], e[2], e[3], i._r);
                    break;
                case "m":
                    t.moveTo(e[0], e[1]);
                    break;
                case "l":
                    t.lineTo(e[0], e[1]);
                    break;
                case "q":
                    t.quadraticCurveTo(e[0], e[1], e[2], e[3]);
                    break;
                case "c":
                    t.bezierCurveTo(e[0], e[1], e[2], e[3], e[4], e[5]);
                    break;
                case "z":
                    t.closePath();
            }
        },
        _5z: function (t, i, n, e) {
            var s = i.type;
            if (s !="m" && s != "z") {
                var h = n.lastPoint;
                var r = i.points;
                switch (n.type == "m" && t.add(h.x, h.y), s) {
                    case "a":
                        un(i, h.x, h.y, r[0], r[1], r[2], r[3], r[4]);
                        t.add(r[0], r[1]);
                        t.add(i._p1x, i._p1y);
                        t.add(i._p2x, i._p2y);
                        i.$boundaryPoint1 && t.add(i.$boundaryPoint1.x, i.$boundaryPoint1.y);
                        i.$boundaryPoint2 && t.add(i.$boundaryPoint2.x, i.$boundaryPoint2.y);
                        break;
                    case "l":
                        t.add(r[0], r[1]);
                        break;
                    case "q":
                        zi([h.x, h.y].concat(r), t);
                        break;
                    case "c":
                        Ui([h.x, h.y].concat(r), t);
                        break;
                    case "z":
                        e && t.add(e.points[0], e.points[1]);
                }
            }
        },
        _60: function (t, i, n) {
            var e = t.type;
            if (e == "m") {
                return 0;
            }
            var s = i.lastPoint;
            var h = t.points;
            switch (e == "c" && 4 == h.length && (e = "q"), e) {
                case "l":
                    return calculateDistance(h[0], h[1], s.x, s.y);
                case "a":
                    return t._jg;
                case "q":
                    var r = qi([s.x, s.y].concat(h));
                    return t._lf = r, r(1);
                case "c":
                    var r = Xi([s.x, s.y].concat(h));
                    return t._lf = r, r(1) || Vi([s.x, s.y].concat(h));
                case "z":
                    if (s && n) {
                        return t.points = n.points, calculateDistance(n.points[0], n.points[1], s.x, s.y);
                    }
            }
            return 0;
        }
    };

    Defaults.IMAGE_WIDTH = 50;
    Defaults.IMAGE_HEIGHT = 30;
    Defaults.MAX_CACHE_PIXELS = 1e6;

    bn.prototype = {
        _jq: 0,
        _6h: true,
        _lb: null,
        _jf: null,
        _mg: null,
        _ls: null,
        _nbw: n,
        _9u: n,
        _67: function () {
            return this._jq == 1;
        },
        getBounds: function (t) {
            return this._ls == 30 ? this._mg.getBounds(t) : (this._6h && this._fq(), this);
        },
        validate: function () {
            this._6h && this._fq();
        },
        _fq: function () {
            if (this._6h = false, this._ls == 30) {
                return this._mg.validate(), void this.setByRect(this._mg.bounds);
            }
            if (this._ls == 20) {
                return void this._9w();
            }
            if (this._jq != 1) try {
                this._f0();
            } catch (t) {
                this._jq = 3;
                Qunee.error(t);
            }
        },
        _4y: function () {
            this._e3();
            this._dispatcher.clear();
            delete this._dispatcher;
        },
        _i5: function (t) {
            this._lb && this._lb.parentNode && this._lb.parentNode.removeChild(this._lb);
            this._jq = 3;
            Qunee.error("Image load error - " + this._mg);
            this._pixels = null;
            this._jf = null;
            this._lb = null;
            t !== false && this._4y();
        },
        _f0: function () {
            var t = this._mg;
            if (this._jq = 1, this._dispatcher = new Dispatcher, this._ls == 12) {
                for (var n in cq) {
                    this[n] = cq[n];
                }
                return void Vn(this._mg, this, this._d2, this._i5, this._fn);
            }
            this._lb || (this._lb = i.createElement("img"), isIE && (this._lb.style.visibility = "hidden", i.body.appendChild(this._lb)));
            this._lb.src = t;
            this._lb.width && (this.width = this._lb.width, this.height = this._lb.height);
            this._lb.onload = isIE ? function (t) {
                setTimeout(this._7p.bind(this, t), 100);
            }.bind(this) : this._7p.bind(this);
            this._lb.onerror = this._i5.bind(this);
        },
        _7p: function () {
            this._jq = 2;
            var t = this._lb.width;
            var i = this._lb.height;
            if (this._lb.parentNode && this._lb.parentNode.removeChild(this._lb), !t || !i) {
                return void this._i5();
            }
            this.width = t;
            this.height = i;
            var n = this._f5();
            n.width = t;
            n.height = i;
            n.g.drawImage(this._lb, 0, 0, t, i);
            this._pixels = isIE && this._ls == 11 ? null : wn(n), this._4y();
        },
        _9w: function () {
            var t = this._mg;
            if (!(t.draw instanceof Function)) {
                return void this._i5(false);
            }
            if (t.cacheable === false && t.width && t.height) {
                return this.width = t.width, void (this.height = t.height);
            }
            var i = t.width || Defaults.IMAGE_MAX_SIZE;
            var n = t.height || Defaults.IMAGE_MAX_SIZE;
            var e = this._f5();
            e.width = i;
            e.height = n;
            var s = e.g;
            t.draw(s);
            var h = ji(s, 0, 0, i, n);
            if (h) {
                var r = kn(h.data, i, n);
                this.x = r._x;
                this.y = r._y;
                this.width = r._width;
                this.height = r._height;
                e.width = this.width;
                e.height = this.height;
                s.putImageData(h, -this.x, -this.y);
                this._pixels = r;
            }
        },
        _f5: function () {
            return this._jf || (this._jf = createCanvas());
        },
        _6c: function (t, i, n, e, s, h) {
            i.save();
            i.rect(0, 0, e, s);
            i.fillStyle = h || "#CCC";
            i.fill();
            i.clip();
            i.textAlign = "center";
            i.textBaseline = "middle";
            i.fillStyle = "#888";
            var r = 6 * (i.canvas.ratio || 1);
            i.font = "normal " + r + "px Verdana,helvetica,arial,sans-serif";
            i.strokeStyle = "#FFF";
            i.lineWidth = 1;
            i.strokeText(t, e / 2 + .5, s / 2 + .5);
            i.strokeStyle = "#000";
            i.strokeText(t, e / 2 - .5, s / 2 - .5);
            i.fillText(t, e / 2, s / 2);
            i.restore();
        },
        draw: function (t, i, n, e, s, h) {
            if (this.width && this.height) {
                i = i || 1;
                e = e || 1;
                s = s || 1;
                var r = this.width * e;
                var a = this.height * s;
                if (h && n.shadowColor && (t.shadowColor = n.shadowColor, t.shadowBlur = (n.shadowBlur || 0) * i, t.shadowOffsetX = (n.shadowOffsetX || 0) * i, t.shadowOffsetY = (n.shadowOffsetY || 0) * i), this._jq == 1) {
                    return this._6c("Loading...", t, i, r, a, n.renderColor);
                }
                if (this._jq == 3) {
                    return this._6c("Error...", t, i, r, a, n.renderColor);
                }
                if (this._ls == 30) {
                    return t.scale(e, s), void this._mg.draw(t, i, n);
                }
                var o = this._gy(i, e, s);
                return o ? ((this.x || this.y) && t.translate(this.x * e, this.y * s), t.scale(e / o.scale, s / o.scale), void o._lt(t, n.renderColor, n.renderColorBlendMode)) : void this._je(t, i, e, s, this.width * e, this.height * s, n);
            }
        },
        _je: function (t, i, n, e, s, h, r) {
            if (this._ls == 20) {
                return 1 != n && 1 != e && t.scale(n, e), void this._mg.draw(t, r);
            }
            if (this._lb) {
                if (!isFirefox) {
                    return void t.drawImage(this._lb, 0, 0, s, h);
                }
                var n = i * s / this.width;
                var e = i * h / this.height;
                t.scale(1 / n, 1 / e);
                t.drawImage(this._lb, 0, 0, s * n, h * e);
            }
        },
        _js: null,
        _gy: function (t, i, n) {
            if (this._ls == 20 && this._mg.cacheable === false) {
                return null;
            }
            if (this._ls == 10 || (t *= Math.max(i, n)) <= 1) {
                return this._defaultCache || (this._defaultCache = this._h1(this._jf || this._lb, 1)), this._defaultCache;
            }
            var e = this._js.maxScale || 0;
            if (t = Math.ceil(t), e >= t) {
                for (var s = t, h = this._js[s]; !h && ++s <= e;) {
                    h = this._js[s];
                }
                if (h) {
                    return h;
                }
            }
            t % 2 && t++;
            var r = this.width * t;
            var a = this.height * t;
            if (r * a > Defaults.MAX_CACHE_PIXELS) {
                return null;
            }
            var o = createCanvas(r, a);
            return (this.x || this.y) && o.g.translate(-this.x * t, -this.y * t), this._je(o.g, 1, t, t, r, a), this._h1(o, t);
        },
        _h1: function (t, i) {
            var n = new sq(t, i);
            return this._js[i] = n, this._js.maxScale = i, n;
        },
        hitTest: function (t, i, n) {
            if (this._ls == 30) {
                return this._mg.hitTest.apply(this._mg, arguments);
            }
            if (!(this._pixels || this._lb && this._lb._pixels)) {
                return true;
            }
            var e = this._pixels || this._lb._pixels;
            return e._is(t, i, n);
        },
        _e3: function () {
            this._dispatcher && this._dispatcher.onEvent(new Event(this, "image", "load", this._lb));
        },
        _nbn: function (t, i) {
            this._dispatcher && this._dispatcher.addListener(t, i);
        },
        _6j: function (t, i) {
            this._dispatcher && this._dispatcher.removeListener(t, i);
        },
        _ndo: function (t) {
            this._js = {};
            (t || this.width * this.height > 1e5) && (this._lb = null, this._jf = null);
        }
    };

    extend(bn, Rect);

    var BH = {};

    Qunee.drawImage = drawImage;
    Qunee.registerImage = registerImage;
    Qunee.hasImage = hasImage;
    Qunee.getAllImages = function () {
        var t = [];
        for (var i in BH) {
            t.push(i);
        }
        return t;
    };

    var Gradient = function (t, i, n, e, s, h) {
        this.type = t;
        this.colors = i;
        this.positions = n;
        this.angle = e || 0;
        this.tx = s || 0;
        this.ty = h || 0;
    };

    Consts.GRADIENT_TYPE_RADIAL = "r";
    Consts.GRADIENT_TYPE_LINEAR = "l";

    Gradient.prototype = {
        type: null,
        colors: null,
        positions: null,
        angle: null,
        tx: 0,
        ty: 0,
        position: Position.CENTER_MIDDLE,
        isEmpty: function () {
            return null == this.colors || 0 == this.colors.length;
        },
        _79: function () {
            var t = this.colors.length;
            if (1 == t) {
                return [0];
            }
            for (var i = [], n = 1 / (t - 1), e = 0; t > e; e++) {
                i.push(n * e);
            }
            return this.positions || (this.positions = i), i;
        },
        generatorGradient: function (t) {
            if (null == this.colors || 0 == this.colors.length) {
                return null;
            }
            var i;
            var n = Ri();
            if (this.type == Consts.GRADIENT_TYPE_LINEAR) {
                var e = this.angle;
                e > Math.PI && (e -= Math.PI);
                var s;
                if (e <= Math.PI / 2) {
                    var h = Math.atan2(t.height, t.width);
                    var r = Math.sqrt(t.width * t.width + t.height * t.height);
                    var a = h - e;
                    s = Math.cos(a) * r;
                } else {
                    var h = Math.atan2(t.width, t.height);
                    var r = Math.sqrt(t.width * t.width + t.height * t.height);
                    var a = h - (e - Math.PI / 2);
                    s = Math.cos(a) * r;
                }
                var o = s / 2;
                var f = o * Math.cos(e);
                var c = o * Math.sin(e);
                var u = t.x + t.width / 2 - f;
                var _ = t.y + t.height / 2 - c;
                var d = t.x + t.width / 2 + f;
                var l = t.y + t.height / 2 + c;
                i = n.createLinearGradient(u, _, d, l);
            } else {
                if (!(this.type = Consts.GRADIENT_TYPE_RADIAL)) {
                    return null;
                }
                var v = fi(this.position, t.width, t.height);
                v.x += t.x;
                v.y += t.y;
                this.tx && (v.x += Math.abs(this.tx) < 1 ? t.width * this.tx : this.tx);
                this.ty && (v.y += Math.abs(this.ty) < 1 ? t.height * this.ty : this.ty);
                var b = calculateDistance(v.x, v.y, t.x, t.y);
                b = Math.max(b, calculateDistance(v.x, v.y, t.x, t.y + t.height));
                b = Math.max(b, calculateDistance(v.x, v.y, t.x + t.width, t.y + t.height));
                b = Math.max(b, calculateDistance(v.x, v.y, t.x + t.width, t.y));
                i = n.createRadialGradient(v.x, v.y, 0, v.x, v.y, b);
            }
            var y = this.colors;
            var g = this.positions;
            g && g.length == y.length || (g = this._79());
            for (var x = 0, m = y.length; m > x; x++) {
                i.addColorStop(g[x], y[x]);
            }
            return i;
        }
    };

    var LINEAR_GRADIENT_VERTICAL = new Gradient(Consts.GRADIENT_TYPE_LINEAR, [randomColor2(2332033023), randomColor2(1154272460), randomColor2(1154272460), randomColor2(1442840575)], [.1, .3, .7, .9], Math.PI / 2);
    var LINEAR_GRADIENT_HORIZONTAL = new Gradient(Consts.GRADIENT_TYPE_LINEAR, [randomColor2(2332033023), randomColor2(1154272460), randomColor2(1154272460), randomColor2(1442840575)], [.1, .3, .7, .9], 0);
    var RADIAL_GRADIENT = (new Gradient(Consts.GRADIENT_TYPE_LINEAR, [randomColor2(1154272460), randomColor2(1442840575)], [.1, .9], 0), new Gradient(Consts.GRADIENT_TYPE_RADIAL, [randomColor2(2298478591), randomColor2(1156509422), randomColor2(1720223880), randomColor2(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3));
    var qH = [randomColor2(0), randomColor2(4294901760), randomColor2(4294967040), randomColor2(4278255360), randomColor2(4278250239), randomColor2(4278190992), randomColor2(4294901958), randomColor2(0)];
    var YH = [0, .12, .28, .45, .6, .75, .8, 1];
    var RAINBOW_LINEAR_GRADIENT = new Gradient(Consts.GRADIENT_TYPE_LINEAR, qH, YH);
    var RAINBOW_LINEAR_GRADIENT_VERTICAL = new Gradient(Consts.GRADIENT_TYPE_LINEAR, qH, YH, Math.PI / 2);
    var RAINBOW_RADIAL_GRADIENT = new Gradient(Consts.GRADIENT_TYPE_RADIAL, qH, YH);

    Gradient.LINEAR_GRADIENT_VERTICAL = LINEAR_GRADIENT_VERTICAL;
    Gradient.LINEAR_GRADIENT_HORIZONTAL = LINEAR_GRADIENT_HORIZONTAL;
    Gradient.RADIAL_GRADIENT = RADIAL_GRADIENT;
    Gradient.RAINBOW_LINEAR_GRADIENT = RAINBOW_LINEAR_GRADIENT;
    Gradient.RAINBOW_LINEAR_GRADIENT_VERTICAL = RAINBOW_LINEAR_GRADIENT_VERTICAL;
    Gradient.RAINBOW_RADIAL_GRADIENT = RAINBOW_RADIAL_GRADIENT;

    Consts.SEGMENT_MOVE_TO = "m";
    Consts.SEGMENT_LINE_TO = "l";
    Consts.SEGMENT_QUAD_TO = "q";
    Consts.SEGMENT_CURVE_TO = "c";
    Consts.SEGMENT_ARC_TO = "a";
    Consts.SEGMENT_CLOSE = "z";

    var PathSegment = function (t, i) {
        this.id = ++GG;
        isArray(t) ? this.points = t : (this.type = t, this.points = i);
    };

    PathSegment.prototype = {
        toJSON: function () {
            var t = { type: this.type, points: this.points };
            return this.invalidTerminal && (t.invalidTerminal = true), t;
        },
        parseJSON: function (t) {
            this.type = t.type;
            this.points = t.points;
            this.invalidTerminal = t.invalidTerminal;
        },
        points: null,
        type: "l",
        clone: function () {
            return new PathSegment(this.type, this.points ? y(this.points) : null);
        },
        move: function (t, i) {
            if (this.points) {
                for (var n = 0, e = this.points.length; e > n; n++) {}
                var s = this.points[n];
                Qunee.isNumber(s) && (this.points[n] += n % 2 == 0 ? t : i);
            }
        }
    };

    defineProperties(PathSegment.prototype, {
        lastPoint: {
            get: function () {
                return this.type == "a" ?
                    { x: this._p2x, y: this._p2y } :
                    { x: this.points[this.points.length - 2], y: this.points[this.points.length - 1] };
            }
        },
        firstPoint: {
            get: function () {
                return { x: this.points[0], y: this.points[1] };
            }
        }
    });

    Qunee.PathSegment = PathSegment;

    var Path = function (t) {
        this.bounds = new Rect;
        this._fu = t || [];
    };

    Path.prototype = {
        toJSON: function () {
            var t = [];
            return this._fu.forEach(function (i) {
                t.push(i.toJSON())
            }), t
        }, parseJSON: function (t) {
            var i = this._fu;
            t.forEach(function (t) {
                i.push(new PathSegment(t.type, t.points))
            })
        }, clear: function () {
            this._fu.length = 0, this.bounds.clear(), this._jg = 0, this._6h = true
        }, _e8: true, _64: function (t, i) {
            this._e8 && 0 === this._fu.length && t != "m" && this._fu.push(new PathSegment("m", [0, 0])), this._fu.push(new PathSegment(t, i)), this._6h = true
        }, add: function (t) {
            this._fu.push(t), this._6h = true
        }, removePathSegment: function (t) {
            return t >= this._fu.length ? false : (this._fu.splice(t, 1), void (this._6h = true))
        }, moveTo: function (t, i) {
            this._64("m", [t, i])
        }, lineTo: function (t, i) {
            this._64("l", [t, i])
        }, quadTo: function (t, i, n, e) {
            this._64("q", [t, i, n, e])
        }, curveTo: function (t, i, n, e, s, h) {
            this._64("c", [t, i, n, e, s, h])
        }, arcTo: function (t, i, n, e, s) {
            this._64("a", [t, i, n, e, s])
        }, closePath: function () {
            this._64("z")
        }, _7m: function (t, i, n, e, s) {
            if (e.selectionColor) {
                if (n == Consts.SELECTION_TYPE_SHADOW) {
                    if (!e.selectionShadowBlur) return;
                    return t.shadowColor = e.selectionColor, t.shadowBlur = e.selectionShadowBlur * i, t.shadowOffsetX = (e.selectionShadowOffsetX || 0) * i, void (t.shadowOffsetY = (e.selectionShadowOffsetY || 0) * i)
                }
                if (n == Consts.SELECTION_TYPE_BORDER) {
                    if (!e.selectionBorder) return;
                    t.strokeStyle = e.selectionColor, t.lineWidth = e.selectionBorder + (s.lineWidth || 0), this._lt(t), t.stroke()
                }
            }
        }, _6h: true, _fu: null, _jg: 0, lineCap: "butt", lineJoin: "round", draw: function (t, i, n, e, s) {
            t.lineCap = n.lineCap || this.lineCap, t.lineJoin = n.lineJoin || this.lineJoin, e && (s || (s = n), this._7m(t, i, s.selectionType, s, n)), n.outlineStyle && (this._lt(t), t.lineWidth = n.lineWidth + 2 * (n.outline || 0), t.strokeStyle = n.outlineStyle, t.stroke()), t.lineWidth = 0, this._lt(t), n.fillColor && (t.fillStyle = n.renderColor || n.fillColor, t.fill()), n.fillGradient && (t.fillStyle = n._fillGradient || n.fillGradient, t.fill()), n.lineWidth && (t.lineWidth = n.lineWidth, n.lineDash && (t.lineDash = n.lineDash, t.lineDashOffset = n.lineDashOffset), t.strokeStyle = n.renderColor || n.strokeStyle, t.stroke(), t.lineDash = [])
        }, _lt: function (t) {
            t.beginPath();
            for (var i, n, e = 0, s = this._fu.length; s > e; e++)i = this._fu[e], MH._lt(t, i, n), n = i
        }, invalidate: function () {
            this._6h = true
        }, validate: function () {
            if (this._6h = false, this.bounds.clear(), this._jg = 0, 0 != this._fu.length) for (var t, i, n = this._fu, e = 1,
                s = n[0], h = s,
                r = n.length; r > e; e++)t = n[e], t.type == "m" ? h = t : (MH._5z(this.bounds, t, s, h), i = MH._60(t, s, h), t._jg = i, this._jg += i), s = t
        }, getBounds: function (t, i) {
            if (this._6h && this.validate(), i = i || new Rect, t) {
                var n = t / 2;
                i.set(this.bounds.x - n, this.bounds.y - n, this.bounds.width + t, this.bounds.height + t)
            } else i.set(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
            return i
        }, hitTest: function (t, i, n, e, s, h) {
            return an.call(this, t, i, n, e, s, h)
        }, toSegments: function () {
            return [].concat(this._fu)
        }, generator: function (t, i, n, e, s) {
            return rn.call(this, t, i, n, e, s)
        }, getLocation: function (t, i) {
            return on.call(this, t, i || 0)
        }
    };

    defineProperties(Path.prototype, {
        segments: {
            get: function () {
                return this._fu
            }, set: function (t) {
                this.clear(), this._fu = t
            }
        }, length: {
            get: function () {
                return this._6h && this.validate(), this._jg
            }
        }, _empty: {
            get: function () {
                return 0 == this._fu.length
            }
        }
    });

    Tn.prototype = {
        _13: function (t, i) {
            var n, e, s, h, r, a = t.length, o = 0, f = 0;
            for (r = 0; a > r; r += 4)if (t[r + 3] > 0) {
                n = (r + 4) / i / 4 | 0;
                break
            }
            for (r = a - 4; r >= 0; r -= 4)if (t[r + 3] > 0) {
                e = (r + 4) / i / 4 | 0;
                break
            }
            for (o = 0; i > o; o++) {
                for (f = n; e > f; f++)if (t[f * i * 4 + 4 * o + 3] > 0) {
                    s = o;
                    break
                }
                if (s >= 0) break
            }
            for (o = i - 1; o >= 0; o--) {
                for (f = n; e > f; f++)if (t[f * i * 4 + 4 * o + 3] > 0) {
                    h = o;
                    break
                }
                if (h >= 0) break
            }
            this._x = s, this._y = n, this._width = h - s + 1, this._height = e - n + 1, this._jo = new Rect(s, n, this._width, this._height), this._pixelSize = this._width * this._height, this._originalPixelsWidth = i, this._originalPixels = t
        }, _f9: function (t, i) {
            return this._originalPixels[4 * (t + this._x + (this._y + i) * this._originalPixelsWidth) + 3]
        }, _is: function (t, i, n) {
            (!n || 1 >= n) && (n = 1), n = 0 | n, t = Math.round(t - this._x) - n, i = Math.round(i - this._y) - n, n += n;
            for (var e = t, s = i; i + n > s;) {
                for (var e = t; t + n > e;) {
                    if (this._f9(e, s)) return true;
                    ++e
                }
                ++s
            }
            return false
        }
    };

    Consts.BLEND_MODE_DARKEN = "darken";
    Consts.BLEND_MODE_MULTIPLY = "multiply";
    Consts.BLEND_MODE_COLOR_BURN = "color.burn";
    Consts.BLEND_MODE_LINEAR_BURN = "linear.burn";
    Consts.BLEND_MODE_LIGHTEN = "lighten";
    Consts.BLEND_MODE_SCREEN = "screen";
    Consts.BLEND_MODE_GRAY = "gray";
    Defaults.BLEND_MODE = Consts.BLEND_MODE_LINEAR_BURN;

    var sq = function (t, i, n) {
        this._jf = t;
        this.scale = i || 1;
        t instanceof Image && (n = false);
        this._i7 = n;
    };

    sq.prototype = {
        scale: 1,
        _jf: null,
        _js: null,
        _i7: true,
        _lt: function (t, i, n) {
            if (!i || this._i7 === false) {
                return void t.drawImage(this._jf, 0, 0);
            }
            this._js || (this._js = {});
            var e = i + n;
            var s = this._js[e];
            if (s || (s = Sn(this._jf, i, n), s || (this._i7 = false), this._js[e] = s || this._jf), s) {
                if (isIE) {
                    try {
                        t.drawImage(s, 0, 0);
                    } catch (h) {
                    }
                } else {
                    t.drawImage(s, 0, 0);
                }
            }
        }
    };

    var hq = function (t, i, n, e, s, h, r, a, o) {
        this._mi = Ln(t, i, n, e, s, h, r, a, o);
    };

    var Graphs = {
        server: {
            draw: function (t) {
                t.save();
                t.translate(0, 0);
                t.beginPath();
                t.moveTo(0, 0);
                t.lineTo(40, 0);
                t.lineTo(40, 40);
                t.lineTo(0, 40);
                t.closePath();
                t.clip();
                t.translate(0, 0);
                t.translate(0, 0);
                t.scale(1, 1);
                t.translate(0, 0);
                t.strokeStyle = "rgba(0,0,0,0)";
                t.lineCap = "butt";
                t.lineJoin = "miter";
                t.miterLimit = 4;
                t.save();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.restore();
                t.save();
                var i = t.createLinearGradient(6.75, 3.9033, 30.5914, 27.7447);
                i.addColorStop(.0493, "#1C6B9D");
                i.addColorStop(.0689, "#186493");
                i.addColorStop(.0939, "#145E8B");
                i.addColorStop(.129, "#115B87");
                i.addColorStop(.2266, "#115A85");
                i.addColorStop(.2556, "#125C89");
                i.addColorStop(.2869, "#176291");
                i.addColorStop(.3194, "#1D6C9F");
                i.addColorStop(.3525, "#2479B0");
                i.addColorStop(.3695, "#2881BB");
                i.addColorStop(.5025, "#1F6FA2");
                i.addColorStop(.9212, "#115A86");
                i.addColorStop(1, "#004063");
                t.fillStyle = i;
                t.beginPath();
                t.moveTo(25.677, 4.113);
                t.bezierCurveTo(25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004);
                t.bezierCurveTo(19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003);
                t.bezierCurveTo(12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004);
                t.bezierCurveTo(9.19, 2.897, 8.977, 2.989, 8.805, 3.094);
                t.bezierCurveTo(8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63);
                t.bezierCurveTo(5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05);
                t.bezierCurveTo(4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307);
                t.bezierCurveTo(22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575);
                t.bezierCurveTo(24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004);
                t.bezierCurveTo(25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004);
                t.bezierCurveTo(25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85);
                t.bezierCurveTo(25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253);
                t.bezierCurveTo(25.706, 4.885, 25.749, 4.478, 25.677, 4.113);
                t.bezierCurveTo(25.67, 4.077, 25.697, 4.217, 25.677, 4.113);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.save();
                t.fillStyle = "#2e8ece";
                t.beginPath();
                t.moveTo(19.763, 6.645);
                t.bezierCurveTo(20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778);
                t.bezierCurveTo(20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999);
                t.bezierCurveTo(21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999);
                t.bezierCurveTo(21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372);
                t.lineTo(21.398, 36.253);
                t.bezierCurveTo(21.397, 36.489, 21.349, 36.713, 21.262, 36.917);
                t.bezierCurveTo(21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458);
                t.bezierCurveTo(20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996);
                t.bezierCurveTo(20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949);
                t.lineTo(4.675, 37.877);
                t.bezierCurveTo(4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741);
                t.bezierCurveTo(3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376);
                t.bezierCurveTo(3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996);
                t.bezierCurveTo(3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172);
                t.lineTo(2.924, 8.431);
                t.bezierCurveTo(2.923, 8.192, 2.971, 7.964, 3.057, 7.758);
                t.bezierCurveTo(3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209);
                t.bezierCurveTo(3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837);
                t.bezierCurveTo(4.17, 6.749, 4.396, 6.701, 4.633, 6.7);
                t.lineTo(19.763, 6.645);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
                t.save();
                t.fillStyle = "#efefef";
                t.beginPath();
                t.arc(12.208, 26.543, 2.208, 0, 6.283185307179586, true);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.fillStyle = "#2e8ece";
                t.beginPath();
                t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, true);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.fillStyle = "#efefef";
                t.beginPath();
                t.moveTo(19.377, 17.247);
                t.bezierCurveTo(19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998);
                t.lineTo(5.882, 18.108999999999998);
                t.bezierCurveTo(5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247);
                t.lineTo(5.02, 11.144);
                t.bezierCurveTo(5.02, 10.666, 5.406, 10.281, 5.882, 10.281);
                t.lineTo(18.516, 10.281);
                t.bezierCurveTo(18.993, 10.281, 19.3-77, 10.666, 19.377, 11.144);
                t.lineTo(19.377, 17.247);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.save();
                t.fillStyle = "#2e8ece";
                t.beginPath();
                t.moveTo(18.536, 13.176);
                t.bezierCurveTo(18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794);
                t.lineTo(6.479, 13.794);
                t.bezierCurveTo(6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176);
                t.lineTo(5.861, 11.84);
                t.bezierCurveTo(5.861, 11.498, 6.137, 11.221, 6.479, 11.221);
                t.lineTo(17.918, 11.221);
                t.bezierCurveTo(18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84);
                t.lineTo(18.535, 13.176);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.fillStyle = "#2e8ece";
                t.beginPath();
                t.moveTo(18.536, 16.551);
                t.bezierCurveTo(18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997);
                t.lineTo(6.479, 17.168999999999997);
                t.bezierCurveTo(6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551);
                t.lineTo(5.861, 15.215999999999998);
                t.bezierCurveTo(5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998);
                t.lineTo(17.918, 14.596999999999998);
                t.bezierCurveTo(18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998);
                t.lineTo(18.535, 16.551);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
                t.restore();
            }
        },
        exchanger2: {
            draw: function (t) {
                t.save();
                t.translate(0, 0);
                t.beginPath();
                t.moveTo(0, 0);
                t.lineTo(40, 0);
                t.lineTo(40, 40);
                t.lineTo(0, 40);
                t.closePath();
                t.clip();
                t.translate(0, 0);
                t.translate(0, 0);
                t.scale(1, 1);
                t.translate(0, 0);
                t.strokeStyle = "rgba(0,0,0,0)";
                t.lineCap = "butt";
                t.lineJoin = "miter";
                t.miterLimit = 4;
                t.save();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.restore();
                t.save();
                var i = t.createLinearGradient(.4102, 24.3613, 39.5898, 24.3613);
                i.addColorStop(0, "#1C6B9D");
                i.addColorStop(.0788, "#115A85");
                i.addColorStop(.2046, "#135D89");
                i.addColorStop(.3649, "#186494");
                i.addColorStop(.5432, "#1F70A4");
                i.addColorStop(.6798, "#257AB2");
                i.addColorStop(.7462, "#2377AD");
                i.addColorStop(.8508, "#1E6DA0");
                i.addColorStop(.98, "#125C89");
                i.addColorStop(1, "#105984");
                t.fillStyle = i;
                t.beginPath();
                t.moveTo(.41, 16.649);
                t.bezierCurveTo(.633, 19.767, .871, 20.689, 1.094, 23.807000000000002);
                t.bezierCurveTo(1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002);
                t.bezierCurveTo(10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523);
                t.bezierCurveTo(26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004);
                t.bezierCurveTo(38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005);
                t.bezierCurveTo(39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005);
                t.bezierCurveTo(39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.save();
                t.fillStyle = "#2e8ece";
                t.beginPath();
                t.moveTo(16.4, 25.185);
                t.bezierCurveTo(12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705);
                t.bezierCurveTo(3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999);
                t.bezierCurveTo(1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998);
                t.bezierCurveTo(11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998);
                t.bezierCurveTo(22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998);
                t.bezierCurveTo(32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998);
                t.bezierCurveTo(40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997);
                t.bezierCurveTo(33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996);
                t.bezierCurveTo(23.289, 25.28, 19.824, 25.436, 16.4, 25.185);
                t.bezierCurveTo(13.529, 24.977, 19.286, 25.396, 16.4, 25.185);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
                t.save();
                t.save();
                t.save();
                t.save();
                t.save();
                t.fillStyle = "#f7f8f8";
                t.beginPath();
                t.moveTo(5.21, 21.754);
                t.lineTo(8.188, 17.922);
                t.lineTo(9.53, 18.75);
                t.lineTo(15.956, 16.004);
                t.lineTo(18.547, 17.523);
                t.lineTo(12.074, 20.334);
                t.lineTo(13.464, 21.204);
                t.lineTo(5.21, 21.754);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
                t.restore();
                t.save();
                t.save();
                t.save();
                t.fillStyle = "#f7f8f8";
                t.beginPath();
                t.moveTo(17.88, 14.61);
                t.lineTo(9.85, 13.522);
                t.lineTo(11.703, 12.757);
                t.lineTo(7.436, 10.285);
                t.lineTo(10.783, 8.942);
                t.lineTo(15.091, 11.357);
                t.lineTo(16.88, 10.614);
                t.lineTo(17.88, 14.61);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
                t.save();
                t.save();
                t.fillStyle = "#f7f8f8";
                t.beginPath();
                t.moveTo(17.88, 14.61);
                t.lineTo(9.85, 13.522);
                t.lineTo(11.703, 12.757);
                t.lineTo(7.436, 10.285);
                t.lineTo(10.783, 8.942);
                t.lineTo(15.091, 11.357);
                t.lineTo(16.88, 10.614);
                t.lineTo(17.88, 14.61);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
                t.restore();
                t.save();
                t.save();
                t.save();
                t.fillStyle = "#f7f8f8";
                t.beginPath();
                t.moveTo(23.556, 15.339);
                t.lineTo(20.93, 13.879);
                t.lineTo(26.953, 11.304);
                t.lineTo(25.559, 10.567);
                t.lineTo(33.251, 9.909);
                t.lineTo(31.087, 13.467);
                t.lineTo(29.619, 12.703);
                t.lineTo(23.556, 15.339);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
                t.restore();
                t.save();
                t.save();
                t.save();
                t.fillStyle = "#f7f8f8";
                t.beginPath();
                t.moveTo(30.028, 23.383);
                t.lineTo(24.821, 20.366);
                t.lineTo(22.915, 21.227);
                t.lineTo(21.669, 16.762);
                t.lineTo(30.189, 17.942);
                t.lineTo(28.33, 18.782);
                t.lineTo(33.579, 21.725);
                t.lineTo(30.028, 23.383);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
                t.save();
                t.save();
                t.fillStyle = "#f7f8f8";
                t.beginPath();
                t.moveTo(30.028, 23.383);
                t.lineTo(24.821, 20.366);
                t.lineTo(22.915, 21.227);
                t.lineTo(21.669, 16.762);
                t.lineTo(30.189, 17.942);
                t.lineTo(28.33, 18.782);
                t.lineTo(33.579, 21.725);
                t.lineTo(30.028, 23.383);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
                t.restore();
                t.restore();
                t.restore();
                t.restore();
            }
        },
        exchanger: {
            draw: function (t) {
                t.save();
                t.translate(0, 0);
                t.beginPath();
                t.moveTo(0, 0);
                t.lineTo(40, 0);
                t.lineTo(40, 40);
                t.lineTo(0, 40);
                t.closePath();
                t.clip();
                t.translate(0, 0);
                t.translate(0, 0);
                t.scale(1, 1);
                t.translate(0, 0);
                t.strokeStyle = "rgba(0,0,0,0)";
                t.lineCap = "butt";
                t.lineJoin = "miter";
                t.miterLimit = 4;
                t.save();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.restore();
                t.save();
                var i = t.createLinearGradient(.2095, 20.7588, 39.4941, 20.7588);
                i.addColorStop(0, "#6A6969");
                i.addColorStop(.0788, "#4F4C4B");
                i.addColorStop(.352, "#545252");
                i.addColorStop(.6967, "#646262");
                i.addColorStop(.8916, "#6F6E6F");
                i.addColorStop(.9557, "#4C4948");
                i.addColorStop(1, "#494645");
                t.fillStyle = i;
                t.beginPath();
                t.moveTo(39.449, 12.417);
                t.lineTo(39.384, 9.424);
                t.bezierCurveTo(39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024);
                t.bezierCurveTo(-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002);
                t.bezierCurveTo(.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437);
                t.bezierCurveTo(1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094);
                t.bezierCurveTo(8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089);
                t.bezierCurveTo(23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996);
                t.bezierCurveTo(34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997);
                t.bezierCurveTo(37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997);
                t.lineTo(37.711, 30.316999999999997);
                t.lineTo(39.281, 16.498999999999995);
                t.bezierCurveTo(39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994);
                t.bezierCurveTo(39.515, 14.105, 39.449, 12.417, 39.449, 12.417);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.save();
                t.save();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.restore();
                t.save();
                var i = t.createLinearGradient(19.8052, 7.7949, 19.8052, 24.7632);
                i.addColorStop(0, "#7D7D7D");
                i.addColorStop(.1455, "#808080");
                i.addColorStop(.2975, "#888888");
                i.addColorStop(.4527, "#939293");
                i.addColorStop(.6099, "#9E9D9D");
                i.addColorStop(.7687, "#A7A5A4");
                i.addColorStop(.9268, "#A9A6A5");
                i.addColorStop(.9754, "#A7A4A3");
                i.addColorStop(1, "#FFFFFF");
                t.fillStyle = i;
                t.beginPath();
                t.moveTo(33.591, 24.763);
                t.bezierCurveTo(23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003);
                t.bezierCurveTo(3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003);
                t.bezierCurveTo(1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004);
                t.bezierCurveTo(4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004);
                t.bezierCurveTo(6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004);
                t.bezierCurveTo(16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005);
                t.bezierCurveTo(30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004);
                t.bezierCurveTo(36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005);
                t.bezierCurveTo(37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005);
                t.bezierCurveTo(39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005);
                t.bezierCurveTo(38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005);
                t.bezierCurveTo(37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007);
                t.bezierCurveTo(37.151, 24.271, 35.264, 24.77, 33.591, 24.763);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
                t.restore();
                t.save();
                t.save();
                t.save();
                t.fillStyle = "#f7f8f8";
                t.beginPath();
                t.moveTo(10.427, 19.292);
                t.lineTo(5.735, 16.452);
                t.lineTo(12.58, 13.8);
                t.lineTo(12.045, 15.07);
                t.lineTo(20.482, 15.072);
                t.lineTo(19.667, 17.887);
                t.lineTo(11.029, 17.851);
                t.lineTo(10.427, 19.292);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
                t.save();
                t.save();
                t.fillStyle = "#f7f8f8";
                t.beginPath();
                t.moveTo(13.041, 13.042);
                t.lineTo(8.641, 10.73);
                t.lineTo(14.82, 8.474);
                t.lineTo(14.373, 9.537);
                t.lineTo(22.102, 9.479);
                t.lineTo(21.425, 11.816);
                t.lineTo(13.54, 11.85);
                t.lineTo(13.041, 13.042);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
                t.save();
                t.save();
                t.fillStyle = "#f7f8f8";
                t.beginPath();
                t.moveTo(29.787, 16.049);
                t.lineTo(29.979, 14.704);
                t.lineTo(21.51, 14.706);
                t.lineTo(22.214, 12.147);
                t.lineTo(30.486, 12.116);
                t.lineTo(30.653, 10.926);
                t.lineTo(36.141, 13.4);
                t.lineTo(29.787, 16.049);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
                t.save();
                t.save();
                t.fillStyle = "#f7f8f8";
                t.beginPath();
                t.moveTo(28.775, 23.14);
                t.lineTo(29.011, 21.49);
                t.lineTo(19.668, 21.405);
                t.lineTo(20.523, 18.295);
                t.lineTo(29.613, 18.338);
                t.lineTo(29.815, 16.898);
                t.lineTo(35.832, 19.964);
                t.lineTo(28.775, 23.14);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
                t.restore();
                t.restore();
            }
        },
        cloud: {
            draw: function (t) {
                t.save();
                t.beginPath();
                t.moveTo(0, 0);
                t.lineTo(90.75, 0);
                t.lineTo(90.75, 62.125);
                t.lineTo(0, 62.125);
                t.closePath();
                t.clip();
                t.strokeStyle = "rgba(0,0,0,0)";
                t.lineCap = "butt";
                t.lineJoin = "miter";
                t.miterLimit = 4;
                t.save();
                var i = t.createLinearGradient(44.0054, 6.4116, 44.0054, 51.3674);
                i.addColorStop(0, "rgba(159, 160, 160, 0.7)");
                i.addColorStop(.9726, "#E9EAEA");
                t.fillStyle = i;
                t.beginPath();
                t.moveTo(57.07, 20.354);
                t.bezierCurveTo(57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358);
                t.bezierCurveTo(54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001);
                t.bezierCurveTo(33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003);
                t.bezierCurveTo(18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004);
                t.bezierCurveTo(14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49);
                t.bezierCurveTo(29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961);
                t.bezierCurveTo(34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995);
                t.bezierCurveTo(43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994);
                t.bezierCurveTo(49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999);
                t.bezierCurveTo(66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999);
                t.bezierCurveTo(73.986, 27.436, 66.413, 20.354, 57.07, 20.354);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
            }
        },
        node: {
            width: 60,
            height: 100,
            draw: function (t) {
                t.save();
                t.translate(0, 0);
                t.beginPath();
                t.moveTo(0, 0);
                t.lineTo(40, 0);
                t.lineTo(40, 40);
                t.lineTo(0, 40);
                t.closePath();
                t.clip();
                t.translate(0, 0);
                t.translate(0, 0);
                t.scale(1, 1);
                t.translate(0, 0);
                t.strokeStyle = "rgba(0,0,0,0)";
                t.lineCap = "butt";
                t.lineJoin = "miter";
                t.miterLimit = 4;
                t.save();
                t.fillStyle = "#9fa0a0";
                t.beginPath();
                t.moveTo(13.948, 31.075);
                t.lineTo(25.914, 31.075);
                t.quadraticCurveTo(25.914, 31.075, 25.914, 31.075);
                t.lineTo(25.914, 34.862);
                t.quadraticCurveTo(25.914, 34.862, 25.914, 34.862);
                t.lineTo(13.948, 34.862);
                t.quadraticCurveTo(13.948, 34.862, 13.948, 34.862);
                t.lineTo(13.948, 31.075);
                t.quadraticCurveTo(13.948, 31.075, 13.948, 31.075);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.fillStyle = "#c9caca";
                t.beginPath();
                t.moveTo(29.679, 35.972);
                t.bezierCurveTo(29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244);
                t.lineTo(11.456, 37.244);
                t.bezierCurveTo(10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972);
                t.lineTo(10.183, 36.136);
                t.bezierCurveTo(10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863);
                t.lineTo(28.407, 34.863);
                t.bezierCurveTo(29.11, 34.863, 29.678, 35.431, 29.678, 36.136);
                t.lineTo(29.678, 35.972);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.fillStyle = "#c9caca";
                t.beginPath();
                t.moveTo(.196, 29.346);
                t.bezierCurveTo(.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075);
                t.lineTo(37.936, 31.075);
                t.bezierCurveTo(38.891, 31.075, 39.665, 30.301, 39.665, 29.346);
                t.lineTo(39.665, 27.174);
                t.lineTo(.196, 27.174);
                t.lineTo(.196, 29.346);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.fillStyle = "#3e3a39";
                t.beginPath();
                t.moveTo(37.937, 3.884);
                t.lineTo(1.926, 3.884);
                t.bezierCurveTo(.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614);
                t.lineTo(.19699999999999984, 27.12);
                t.lineTo(39.666000000000004, 27.12);
                t.lineTo(39.666000000000004, 5.615);
                t.bezierCurveTo(39.665, 4.657, 38.892, 3.884, 37.937, 3.884);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.restore();
                t.save();
                var i = t.createLinearGradient(6.9609, 2.9341, 32.9008, 28.874);
                i.addColorStop(0, "#B2CBEA");
                i.addColorStop(1, "#2E8ECE");
                t.fillStyle = i;
                t.beginPath();
                t.moveTo(35.788, 6.39);
                t.lineTo(4.074, 6.39);
                t.bezierCurveTo(3.315, 6.39, 2.702, 7.003, 2.702, 7.763);
                t.lineTo(2.702, 24.616);
                t.lineTo(37.159, 24.616);
                t.lineTo(37.159, 7.763);
                t.bezierCurveTo(37.159, 7.003, 36.546, 6.39, 35.788, 6.39);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
            }
        },
        group: {
            draw: function (t) {
                t.save();
                t.translate(0, 0);
                t.beginPath();
                t.moveTo(0, 0);
                t.lineTo(47.75, 0);
                t.lineTo(47.75, 40);
                t.lineTo(0, 40);
                t.closePath();
                t.clip();
                t.translate(0, 0);
                t.translate(0, 0);
                t.scale(1, 1);
                t.translate(0, 0);
                t.strokeStyle = "rgba(0,0,0,0)";
                t.lineCap = "butt";
                t.lineJoin = "miter";
                t.miterLimit = 4;
                t.save();
                t.save();
                t.fillStyle = "#9fa0a0";
                t.beginPath();
                t.moveTo(10.447, 26.005);
                t.lineTo(18.847, 26.005);
                t.quadraticCurveTo(18.847, 26.005, 18.847, 26.005);
                t.lineTo(18.847, 28.663);
                t.quadraticCurveTo(18.847, 28.663, 18.847, 28.663);
                t.lineTo(10.447, 28.663);
                t.quadraticCurveTo(10.447, 28.663, 10.447, 28.663);
                t.lineTo(10.447, 26.005);
                t.quadraticCurveTo(10.447, 26.005, 10.447, 26.005);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.fillStyle = "#c9caca";
                t.beginPath();
                t.moveTo(21.491, 29.443);
                t.bezierCurveTo(21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338);
                t.lineTo(8.698, 30.338);
                t.bezierCurveTo(8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443);
                t.lineTo(7.8020000000000005, 29.557000000000002);
                t.bezierCurveTo(7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003);
                t.lineTo(20.597, 28.662000000000003);
                t.bezierCurveTo(21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002);
                t.lineTo(21.491, 29.443);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.fillStyle = "#c9caca";
                t.beginPath();
                t.moveTo(.789, 24.79);
                t.bezierCurveTo(.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005);
                t.lineTo(27.289, 26.005);
                t.bezierCurveTo(27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79);
                t.lineTo(28.504, 23.267);
                t.lineTo(.789, 23.267);
                t.lineTo(.789, 24.79);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.fillStyle = "#3e3a39";
                t.beginPath();
                t.moveTo(27.289, 6.912);
                t.lineTo(2.006, 6.912);
                t.bezierCurveTo(1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126);
                t.lineTo(.7889999999999997, 23.227);
                t.lineTo(28.503999999999998, 23.227);
                t.lineTo(28.503999999999998, 8.126);
                t.bezierCurveTo(28.504, 7.455, 27.961, 6.912, 27.289, 6.912);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.restore();
                t.save();
                var i = t.createLinearGradient(5.54, 6.2451, 23.7529, 24.458);
                i.addColorStop(0, "#B2CBEA");
                i.addColorStop(1, "#2E8ECE");
                t.fillStyle = i;
                t.beginPath();
                t.moveTo(25.78, 8.671);
                t.lineTo(3.514, 8.671);
                t.bezierCurveTo(2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635);
                t.lineTo(2.549, 21.466);
                t.lineTo(26.743, 21.466);
                t.lineTo(26.743, 9.636);
                t.bezierCurveTo(26.743, 9.102, 26.312, 8.671, 25.78, 8.671);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
                t.save();
                t.save();
                t.fillStyle = "#9fa0a0";
                t.beginPath();
                t.moveTo(27.053, 33.602);
                t.lineTo(36.22, 33.602);
                t.quadraticCurveTo(36.22, 33.602, 36.22, 33.602);
                t.lineTo(36.22, 36.501);
                t.quadraticCurveTo(36.22, 36.501, 36.22, 36.501);
                t.lineTo(27.053, 36.501);
                t.quadraticCurveTo(27.053, 36.501, 27.053, 36.501);
                t.lineTo(27.053, 33.602);
                t.quadraticCurveTo(27.053, 33.602, 27.053, 33.602);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.fillStyle = "#c9caca";
                t.beginPath();
                t.moveTo(39.104, 37.352);
                t.bezierCurveTo(39.104, 37.891, 38.67, 38.327, 38.13, 38.327);
                t.lineTo(25.143, 38.327);
                t.bezierCurveTo(24.602, 38.327, 24.166, 37.891, 24.166, 37.352);
                t.lineTo(24.166, 37.477999999999994);
                t.bezierCurveTo(24.166, 36.937, 24.602, 36.501, 25.143, 36.501);
                t.lineTo(38.131, 36.501);
                t.bezierCurveTo(38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994);
                t.lineTo(39.105, 37.352);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.fillStyle = "#c9caca";
                t.beginPath();
                t.moveTo(16.514, 32.275);
                t.bezierCurveTo(16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601);
                t.lineTo(45.433, 33.601);
                t.bezierCurveTo(46.166, 33.601, 46.758, 33.005, 46.758, 32.275);
                t.lineTo(46.758, 30.607999999999997);
                t.lineTo(16.514, 30.607999999999997);
                t.lineTo(16.514, 32.275);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.fillStyle = "#3e3a39";
                t.beginPath();
                t.moveTo(45.433, 12.763);
                t.lineTo(17.839, 12.763);
                t.bezierCurveTo(17.107, 12.763, 16.514, 13.356, 16.514, 14.089);
                t.lineTo(16.514, 30.57);
                t.lineTo(46.757999999999996, 30.57);
                t.lineTo(46.757999999999996, 14.088);
                t.bezierCurveTo(46.758, 13.356, 46.166, 12.763, 45.433, 12.763);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.restore();
                t.save();
                i = t.createLinearGradient(21.6973, 12.0352, 41.5743, 31.9122);
                i.addColorStop(0, "#B2CBEA");
                i.addColorStop(1, "#2E8ECE");
                t.fillStyle = i;
                t.beginPath();
                t.moveTo(43.785, 14.683);
                t.lineTo(19.486, 14.683);
                t.bezierCurveTo(18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735);
                t.lineTo(18.433, 28.649);
                t.lineTo(44.837, 28.649);
                t.lineTo(44.837, 15.734);
                t.bezierCurveTo(44.838, 15.153, 44.367, 14.683, 43.785, 14.683);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
                t.save();
                t.globalAlpha = .5;
                t.beginPath();
                t.moveTo(23.709, 36.33);
                t.lineTo(4.232, 36.33);
                t.lineTo(4.232, 27.199);
                t.lineTo(5.304, 27.199);
                t.lineTo(5.304, 35.259);
                t.lineTo(23.709, 35.259);
                t.lineTo(23.709, 36.33);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
            }
        },
        subnetwork: {
            draw: function (t) {
                t.save();
                t.translate(0, 0);
                t.beginPath();
                t.moveTo(0, 0);
                t.lineTo(60.75, 0);
                t.lineTo(60.75, 42.125);
                t.lineTo(0, 42.125);
                t.closePath();
                t.clip();
                t.translate(0, .26859504132231393);
                t.scale(.6694214876033058, .6694214876033058);
                t.translate(0, 0);
                t.strokeStyle = "rgba(0,0,0,0)";
                t.lineCap = "butt";
                t.lineJoin = "miter";
                t.miterLimit = 4;
                t.save();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.restore();
                t.save();
                var i = t.createLinearGradient(43.6724, -2.7627, 43.6724, 59.3806);
                i.addColorStop(0, "rgba(159, 160, 160, 0.7)");
                i.addColorStop(.9726, "#E9EAEA");
                t.fillStyle = i;
                t.beginPath();
                t.moveTo(61.732, 16.509);
                t.bezierCurveTo(61.686, 16.509, 61.644, 16.515, 61.599, 16.515);
                t.bezierCurveTo(58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006);
                t.bezierCurveTo(29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415);
                t.bezierCurveTo(9.09, 20.566, 2.229, 28.136, 2.229, 37.326);
                t.bezierCurveTo(2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006);
                t.bezierCurveTo(23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001);
                t.bezierCurveTo(31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001);
                t.bezierCurveTo(42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001);
                t.bezierCurveTo(51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014);
                t.bezierCurveTo(74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001);
                t.bezierCurveTo(85.116, 26.298, 74.646, 16.509, 61.732, 16.509);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.save();
                t.fillStyle = "#9fa0a0";
                t.beginPath();
                t.moveTo(34.966, 44.287);
                t.lineTo(45.112, 44.287);
                t.quadraticCurveTo(45.112, 44.287, 45.112, 44.287);
                t.lineTo(45.112, 47.497);
                t.quadraticCurveTo(45.112, 47.497, 45.112, 47.497);
                t.lineTo(34.966, 47.497);
                t.quadraticCurveTo(34.966, 47.497, 34.966, 47.497);
                t.lineTo(34.966, 44.287);
                t.quadraticCurveTo(34.966, 44.287, 34.966, 44.287);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.fillStyle = "#727171";
                t.beginPath();
                t.moveTo(48.306, 48.439);
                t.bezierCurveTo(48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52);
                t.lineTo(32.854, 49.52);
                t.bezierCurveTo(32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439);
                t.lineTo(31.771, 48.578);
                t.bezierCurveTo(31.771, 47.981, 32.253, 47.497, 32.854, 47.497);
                t.lineTo(47.226, 47.497);
                t.bezierCurveTo(47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578);
                t.lineTo(48.306, 48.439);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.fillStyle = "#b5b5b6";
                t.beginPath();
                t.moveTo(23.302, 42.82);
                t.bezierCurveTo(23.302, 43.63, 23.96, 44.287, 24.772, 44.287);
                t.lineTo(55.308, 44.287);
                t.bezierCurveTo(56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82);
                t.lineTo(56.775, 40.98);
                t.lineTo(23.302, 40.98);
                t.lineTo(23.302, 42.82);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.fillStyle = "#3e3a39";
                t.beginPath();
                t.moveTo(55.307, 21.229);
                t.lineTo(24.771, 21.229);
                t.bezierCurveTo(23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695);
                t.lineTo(23.301000000000002, 40.933);
                t.lineTo(56.774, 40.933);
                t.lineTo(56.774, 22.695);
                t.bezierCurveTo(56.774, 21.884, 56.119, 21.229, 55.307, 21.229);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.save();
                t.save();
                t.restore();
                t.save();
                t.restore();
                t.restore();
                t.save();
                i = t.createLinearGradient(29.04, 20.4219, 51.0363, 42.4181);
                i.addColorStop(0, "#B2CBEA");
                i.addColorStop(1, "#2E8ECE");
                t.fillStyle = i;
                t.beginPath();
                t.moveTo(53.485, 23.353);
                t.lineTo(26.592, 23.353);
                t.bezierCurveTo(25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003);
                t.lineTo(25.427, 38.807);
                t.lineTo(54.647, 38.807);
                t.lineTo(54.647, 24.517000000000003);
                t.bezierCurveTo(54.648, 23.873, 54.127, 23.353, 53.485, 23.353);
                t.closePath();
                t.fill();
                t.stroke();
                t.restore();
                t.restore();
                t.restore();
            }
        }
    };

    for (var aq in Graphs) {
        registerImage("Q-" + aq, Graphs[aq]);
    }

    var oq = function () {
        this.$invalidateRotate = false;
        var t = this._fs;
        t.clear();
        var i = this.$border || 0;
        var n = this._7k.x + i / 2;
        var e = this._7k.y + i / 2;
        var s = this._7k.width - i;
        var h = this._7k.height - i;
        var r = Fn.call(this, { x: n, y: e });
        qn(t, r.x, r.y, true);
        r = Fn.call(this, { x: n + s, y: e });
        qn(t, r.x, r.y);
        r = Fn.call(this, {
            x: n + s,
            y: e + h
        });
        qn(t, r.x, r.y);
        r = Fn.call(this, {
            x: n,
            y: e + h
        });
        qn(t, r.x, r.y);
        this.__mpPointer && (r = Fn.call(this, {
            x: this._pointerX,
            y: this._pointerY
        }), qn(t, r.x, r.y));
        i && t.grow(i / 2);
    };

    var cq = {
        _hu: false,
        _kv: null,
        _ndv: 0,
        _lf: -1,
        _lh: null,
        _fn: function (t) {
            this._kv || (this._kv = [], this._jq = 2);
            this._kv.push(t);
            this._ez();
            this._l9();
        },
        _l9: function () {
            if (!this._lh) {
                var t = this;
                this._lh = setTimeout(function i() {
                    return t._ez() !== false ? void (t._lh = setTimeout(i, t._ht())) : void delete t._lh;
                }, this._ht());
            }
        },
        _ht: function () {
            return Math.max(20, this._kv[this._lf].delay);
        },
        _ez: function () {
            return this._fy(this._lf + 1);
        },
        _fy: function (t) {
            if (this._hu) {
                t %= this._ndv;
            } else if (t >= this._kv.length) {
                return false;
            }
            if (this._lf == t) {
                return false;
            }
            this._lf = t;
            var i = this._kv[this._lf];
            var n = i._ndache;
            return n || (i._ndache = n = createCanvas(this.width, this.height), n.g.putImageData(i.data, 0, 0), n._pixels = i._pixels), this._lb = n, this.$invalidateSize = true, this._e3();
        },
        _d2: function () {
            return this._kv ? (this._hu = true, this._ndv = this._kv.length, 1 == this._ndv ? this._e3() : void this._l9()) : void this._i5();
        },
        _mc: function () {
            this._lh && (clearTimeout(this._lh), delete this._lh);
        },
        _e3: function () {
            var t = this._dispatcher.listeners;
            if (!t || !t.length) {
                return false;
            }
            for (var i = new Event(this, "image", "load", this._lb), n = 0, e = t.length; e > n; n++) {
                var s = t[n];
                s.scope._k6 && s.scope._k6._iaed ? (t.splice(n, 1), n-- , e--) : s.onEvent.call(s.scope, i);
            }
            return t.length > 0;
        },
        _nbn: function (t, i) {
            this._dispatcher.addListener(t, i);
            this._hu && !this._lh && this._l9();
        },
        _6j: function (t, i) {
            this._dispatcher.removeListener(t, i);
            this._dispatcher._ncw() || this._mc();
        },
        _ia: function () {
            this._mc();
            this._dispatcher.clear();
        },
        _gy: function () {
            var t = this._lb._ncufferedImage;
            return t || (this._lb._ncufferedImage = t = new sq(this._lb, 1)), t;
        }
    };

    var uq = function (t) {
        return t.reduce(function (t, i) {
            return 2 * t + i;
        }, 0);
    };

    var _q = function (t) {
        for (var i = [], n = 7; n >= 0; n--) {
            i.push(!!(t & 1 << n));
        }
        return i;
    };

    var dq = function (t) {
        this.data = t;
        this.len = this.data.length;
        this.pos = 0;
        this.readByte = function () {
            if (this.pos >= this.data.length) {
                throw new Error("Attempted to read past end of stream.");
            }
            return 255 & t.charCodeAt(this.pos++);
        };
        this.readBytes = function (t) {
            for (var i = [], n = 0; t > n; n++) {
                i.push(this.readByte());
            }
            return i;
        };
        this.read = function (t) {
            for (var i = "", n = 0; t > n; n++) {
                i += String.fromCharCode(this.readByte());
            }
            return i;
        };
        this.readUnsigned = function () {
            var t = this.readBytes(2);
            return (t[1] << 8) + t[0];
        };
    };

    var lq = function (t, i) {
        for (var n, e, s = 0, h = function (t) {
            for (var n = 0, e = 0; t > e; e++) {
                i.charCodeAt(s >> 3) & 1 << (7 & s) && (n |= 1 << e);
                s++;
            }
            return n;
        }, r = [], a = 1 << t, o = a + 1, f = t + 1, c = [], u = function () {
            c = [];
            f = t + 1;
            for (var i = 0; a > i; i++) {
                c[i] = [i];
            }
            c[a] = [];
            c[o] = null;
        }; ;) {
            if (e = n, n = forEachByDepthFirst(f), n !== a) {
                if (n === o) {
                    break;
                }
                if (n < c.length) {
                    e !== a && c.push(c[e].concat(c[n][0]));
                }else {
                    if (n !== c.length) {
                        throw new Error("Invalid LZW code.");
                    }
                    c.push(c[e].concat(c[e][0]));
                }
                r.push.apply(r, c[n]);
                c.length === 1 << f && 12 > f && f++;
            } else {
                forEachByBreadthFirst();
            }
        }
        return r;
    };

    var vq = function (t, i) {
        i || (i = {});
        var n = function (i) {
            for (var n = [], e = 0; i > e; e++) {
                n.push(t.readBytes(3));
            }
            return n;
        };
        e = function () {
            var i, n;
            n = "";
            do i = t.readByte(), n += t.read(i); while (0 !== i);
            return n;
        };
        s = function () {
            var e = {};
            if (e.sig = t.read(3), e.ver = t.read(3), "GIF" !== e.sig) {
                throw new Error("Not a GIF file.");
            }
            e.width = t.readUnsigned();
            e.height = t.readUnsigned();
            var s = _q(t.readByte());
            e.gctFlag = s.shift();
            e.colorRes = uq(s.splice(0, 3));
            e.sorted = s.shift();
            e.gctSize = uq(s.splice(0, 3));
            e.bgColor = t.readByte();
            e.pixelAspectRatio = t.readByte();
            e.gctFlag && (e.gct = n(1 << e.gctSize + 1)), i.hdr && i.hdr(e);
        };
        h = function (n) {
            var s = function (n) {
                var e = (t.readByte(), _q(t.readByte()));
                n.reserved = e.splice(0, 3);
                n.disposalMethod = uq(e.splice(0, 3));
                n.userInput = e.shift();
                n.transparencyGiven = e.shift();
                n.delayTime = t.readUnsigned();
                n.transparencyIndex = t.readByte();
                n.terminator = t.readByte();
                i.gce && i.gce(n);
            };
            var h = function (t) {
                t.comment = forEachChild();
                i.com && i.com(t);
            };
            var r = function (n) {
                t.readByte();
                n.ptHeader = t.readBytes(12);
                n.ptData = forEachChild();
                i.pte && i.pte(n);
            };
            var a = function (n) {
                var s = function (n) {
                    t.readByte();
                    n.unknown = t.readByte();
                    n.iterations = t.readUnsigned();
                    n.terminator = t.readByte();
                    i.app && i.app.NETSCAPE && i.app.NETSCAPE(n);
                };
                var h = function (t) {
                    t.appData = forEachChild();
                    i.app && i.app[t.identifier] && i.app[t.identifier](t);
                };
                switch (t.readByte(), n.identifier = t.read(8), n.authCode = t.read(3), n.identifier) {
                    case "NETSCAPE":
                        s(n);
                        break;
                    default:
                        forEachByDepthFirst(n);
                }
            };
            var o = function (t) {
                t.data = forEachChild();
                i.unknown && i.unknown(t);
            };
            switch (n.label = t.readByte(), n.label) {
                case 249:
                    n.extType = "gce";
                    s(n);
                    break;
                case 254:
                    n.extType = "com";
                    forEachByDepthFirst(n);
                    break;
                case 1:
                    n.extType = "pte";
                    r(n);
                    break;
                case 255:
                    n.extType = "app";
                    a(n);
                    break;
                default:
                    n.extType = "unknown";
                    forEachByDepthFirstReverse(n);
            }
        };
        r = function (s) {
            var h = function (t, i) {
                for (var n = new Array(t.length), e = t.length / i, s = function (e, s) {
                    var h = t.slice(s * i, (s + 1) * i);
                    n.splice.apply(n, [e * i, i].concat(h));
                }, h = [0, 4, 2, 1], r = [8, 8, 4, 2], a = 0,
                    o = 0; 4 > o; o++) {
                    for (var f = h[o]; e > f; f += r[o]) {
                        s(f, a);
                        a++;
                    }
                }
                return n;
            };
            s.leftPos = t.readUnsigned();
            s.topPos = t.readUnsigned();
            s.width = t.readUnsigned();
            s.height = t.readUnsigned();
            var r = _q(t.readByte());
            s.lctFlag = r.shift();
            s.interlaced = r.shift();
            s.sorted = r.shift();
            s.reserved = r.splice(0, 2);
            s.lctSize = uq(r.splice(0, 3));
            s.lctFlag && (s.lct = n(1 << s.lctSize + 1));
            s.lzwMinCodeSize = t.readByte();
            var a = forEachChild();
            s.pixels = lq(s.lzwMinCodeSize, a);
            s.interlaced && (s.pixels = forEachByDepthFirst(s.pixels, s.width));
            i.img && i.img(s);
        };
        a = function () {
            var n = {};
            switch (n.sentinel = t.readByte(), String.fromCharCode(n.sentinel)) {
                case "!":
                    n.type = "ext";
                    forEachByDepthFirst(n);
                    break;
                case ",":
                    n.type = "img";
                    r(n);
                    break;
                case ";":
                    n.type = "eof";
                    i.eof && i.eof(n);
                    break;
                default:
                    throw new Error("Unknown block: 0x" + n.sentinel.toString(16))
            }
            "eof" !== n.type && setTimeout(a, 0);
        };
        o = function () {
            s();
            setTimeout(a, 0);
        };
        forEachByDepthFirstReverse();
    };

    i.addEventListener && i.addEventListener("keydown", function (t) {
        if (t.ctrlKey && t.shiftKey && t.altKey && 73 == t.keyCode) {
            var i = Qunee.name + "\nVersion - " + Qunee.version + "\nPublish Date - " + Qunee.publishDate + "\n" + Qunee.about + "\n" + Qunee.copyright + "";
            Qunee.alert(i);
        }
    }, false);

    //debugger;

    var gq;
    var mq;
    var qq;
    var Yq;
    var Wq;

    // window.setTimeout && (window.setTimeout.call(window, Kn, "11000"),
    //     window.setTimeout.call(window, Jn, "20000"),
    //     window.setTimeout.call(window, function () {
    //     //debugger;
    //     Yq && Yq == "8dec9f2f783e5826378220bad9683501c9bbeac7d90deea8c64f4bb43d4e32b98674cf801726659bdf2b4090e18299f56a3c9a91344bcda356104a55a973ba0978d39a1b75c027c4718d8b53473fe15403c3d7027633f8,f43b4e113337560ea0392c49fe475e6d5439227796cda86127370781f999e0a0febe7418392fce2ec61b8fe3baecfd0bd71b95ee2829913463cc3e828f92dea7b3289a76f0224fe89ff07f9c5d1e4e36474b2d040a44cb,cb1a696d47a44f7310b579f5e45971efdabdd4f6c7717eabfac07af8f92701fdfac0d740ac8caf8ec68b9fc57cb1376aef9112c0af805babe9409c365ea9b1808e8cb2a4af109430445c751e1fffc38ca8c79e012a8d7d" && (iY = false);
    // }, "15000"));

    //debugger;

    var Vq = function (t, i) {
        // i || (i = "Qunee for HTML5");
        i || (i = "");
        try {
            mq.call(t, i, 666, 111);
        } catch (n) {
        }
    };

    // var Xq = true;
    // var Zq = true;
    var Kq = true;
    // var Jq = true;
    // var Qq = true;
    // var tY = true;
    var iY = true;
    // var nY = isTouchSupport ? 200 : 1024;

    var eY = function (t, i) {
        return Zn ? Zn(t, i) || "" : void 0;
    };

    if (i.createElement) {
        var sY = i.createElement("iframe");
        sY.style.display = "none";
        sY.onload = function (t) {
            var i = t.target.contentWindow;
            var n = window.location.hostname;
            if ("" === n || "localhost" == n || "127.0.0.1" == n) {
                return void this.parentNode.parentNode.removeChild(this.parentNode);
            }
            var e = i.String.fromCharCode;
            i.setTimeout(function () {
                Xn(e) != qq && (BaseUI.prototype._jk = null);
            }, "20000");
            this.parentNode.parentNode.removeChild(this.parentNode);
        };
        var hY = i.createElement("div");
        hY.style.width = "0px";
        hY.style.height = "0px";
        hY.style.overflow = "hidden";
        hY.appendChild(sY);
        i.documentElement.appendChild(hY);
    }

    if (i.createElement) {
        var rY = i.createElement("iframe");
        rY.style.display = "none";
        rY.onload = function (t) {
            var n = t.target.contentWindow;
            gq = n.Date.now();
            var e = n.CanvasRenderingContext2D.prototype;
            mq = e.fillText;
            isChrome && (n = window);
            var s = n.setTimeout;
            s.call(window, ne, "20000");
            s.call(window, ee, "31000");
            s.call(window, he, "32000");
            s.call(window, re, "15000");
            s.call(window, Qn, "17000");
            s.call(window, isIE, "32000");
            s.call(window, se, "20000");
            s.call(window, te, "20000");
            this.parentNode.parentNode.removeChild(this.parentNode);
        };
        var hY = i.createElement("div");
        hY.style.width = "0px";
        hY.style.height = "0px";
        hY.style.overflow = "hidden";
        hY.appendChild(rY);
        i.documentElement.appendChild(hY);
    }

    addCSSRule(".Q-Canvas", {
        position: "absolute",
        userSelect: "none",
        outline: "none",
        transformOrigin: "0 0",
        "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
    });

    addCSSRule(".Q-CanvasPanel", {
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        textAlign: "left",
        outline: "none",
        tapHighlightColor: "rgba(0,0,0,0)",
        userSelect: "none"
    });

    addCSSRule(".Q-Graph", {
        overflow: "hidden",
        "text-align": "left",
        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
        outline: "none"
    });

    var dY = S(function (t) {
        this._nc2 = new vY;
        this._mz = new HashList;
        this._86 = [];
        this._ndw = [];
        this._ltingList = [];
        this._80 = {};
        this.bounds = new Rect;
        this._jj = new EY;
        this._viewport = new pY;
        this._jj.listener = function (t) {
            this._6f(t);
        }.bind(this);
        this._nd7();
        this.setParent(t);
        }, {
            _nbf: null,
            _jf: null,
            _mz: null,
            _ndw: null,
            _jj: null,
            _d1: function (t) {
                return t ? (this._6hs || (this._6hs = {}), this._6hs[t] ? false : (this._6hs[t] = true, void this.invalidate())) : this.invalidate();
            },
            _nb0: function (t) {
                return this._6hs && this._6hs[t]
            },
            isInvalidate: function () {
                return this._6h;
            },
            clear: function () {
                this._mz.clear();
                this._ndw.length = 0;
                this._80 = {};
                this._nc1 = false;
                this.invalidate();
            },
            _6k: function () {
                this._d1("size");
                this._2t();
            },
            _2t: function () {
                this._d1("viewport");
            },
            invalidate: function (t) {
                (t || !this._6h) && (this._6h = true, this._mc || (this._jkingID = requestAnimationFrame(this._fq.bind(this))));
            },
            _6g: function (t) {
                return this._mc = t, t ? void (this._jkingID && (cancelAnimationFrame(this._jkingID), this._jkingID = null)) : void (this._6h && this.invalidate(true));
            },
            _fq: function () {
                this._jkingID = null;
                this._6h = false;
                var t = this._nc1;
                this._nc1 || (this._d9(), this._nc1 = true), this._d4(!t), this._3k(), this._jk(), this._22();
            },
            _d4: function (t) {
                this._nbu = t || this.fullRefresh;
                (t || this._6hs.size) && this._9r(), (t || this._6hs.matrix) && this._6e(), this._nbg(t), this._45(t), this._6hs = {};
            },
            _3k: function () {
                this._ndw.length = 0;
                var t = this._viewport;
                if (this._mz.forEach(function (i) {
                    if (i.__i6 !== false) {
                        var n = this._nbd(i);
                        t.intersects(n.x, n.y, n.width, n.height) && this._ndw.push(i);
                    }
                }, this), this._ndw = this._ig(this._ndw), !this._nbu) {
                    var i = this._nc2;
                    this._ltingList.length = 0;
                    i._nby(this._viewport);
                    i._ip() || this._ndw.forEach(function (t) {
                        var n = this._nbd(t);
                        i._fj(n.x, n.y, n.width, n.height) && this._ltingList.push(t);
                    }, this)
                }
            },
            _ig: function (t) {
                return isChrome ? t = d(t, this._nb7) : t.sort(this._nb7), t;
            },
            _nb7: function (t, i) {
                return t = t.zIndex || 0, i = i.zIndex || 0, t - i;
            },
            _nbd: function (t) {
                return t.boundingBox;
            },
            _jk: function () {
                if (this._nbu) {
                    return this._dv(), this._70(true), void this.render(this._ndtx, this._ndw);
                }
                this._70(this._ncuffer);
                var t = this._nc2;
                var i = this._ndtx;
                i.save();
                this._ncuffer && (fe(i), i.drawImage(this._ncuffer.canvas, this._ncuffer.x, this._ncuffer.y));
                t._kp(i, this._eu.bind(this));
                this._dv();
                this.render(i, this._ltingList);
                i.restore();
            },
            _70: function (t) {
                this._d1CanvasSizeFlag ? (this._d1CanvasSizeFlag = false, this._jf.setSize(this._width, this._height)) : t && oe(this._jf);
            },
            _9r: function () {
                var t = this.width;
                var i = this.height;
                return this._width == t && this._height == i ? false : (this._width = t, this._height = i, void (this._d1CanvasSizeFlag = true));
            },
            _45: function (t) {
                if (!t && !this._6hs.viewport) {
                    return false;
                }
                var i = this._jj.reverseTransform([0, 0]);
                var n = this.scale;
                var e = this._width / n;
                var s = this._height / n;
                var h = this.rotate;
                var r = this._viewport;
                if (r.x == i[0] && r.y == i[1] && r.width == e && r.height == s && r.rotate == h) {
                    return false;
                }
                var a = r.toJSON();
                return this._viewport.set(i[0], i[1], e, s, h, n), this._3c(this._viewport, a, t), true;
            },
            _3c: function (t, i, n) {
                this._nbu || n || (this._ncuffer = this._ga(i, t));
            },
            _6f: function () {
                if (this._nc1) {
                    if (this._mc) {
                        var t;
                        this._ndurrentMatrix ? this._ndurrentMatrix.transMatrix = t = gY.mul([], this._jj.m, gY.invert([], this._ndurrentMatrix.m)) : t = this._jj.m, this._50(t);
                    }
                    this._d1("matrix");
                    this._2t();
                }
            },
            _50: function (t) {
                this.__ndssMatrix = t;
                wY.setStyle(this._jf, "transform", t ? "matrix(" + t.join(",") + ")" : "");
            },
            _6e: function () {
                var t = this._ndurrentMatrix;
                if (this._ndurrentMatrix = {
                    tx: this._jj.m[4],
                    ty: this._jj.m[5],
                    m: this._jj.m.slice(),
                    scale: this._jj._g6(),
                    rotate: this._jj._eq()
                }, this.__ndssMatrix && this._50(null), !this._nbu) {
                    if (this._2d(this._ndurrentMatrix, t), !t || t.scale != this._ndurrentMatrix.scale) {
                        return this._6n(this._ndurrentMatrix.scale, t ? t.scale : null), void (this._nbu = true);
                    }
                    if (!t || t.rotate != this._ndurrentMatrix.rotate) {
                        return this._5j(this._ndurrentMatrix.rotate, t ? t.rotate : null), void (this._nbu = true);
                    }
                    var i = t.m[4] - this._ndurrentMatrix.m[4];
                    var n = t.m[5] - this._ndurrentMatrix.m[5];
                    var e = this.ratio;
                    i *= e;
                    n *= e;
                    var s = 1e-4;
                    (Math.abs(i - Math.round(i)) > s || Math.abs(n - Math.round(n)) > s) && (this._nbu = true);
                }
            },
            _6d: function () {
                var t = this.bounds;
                var i = t.clone();
                t.clear();
                this._mz.forEach(function (i) {
                    i.__i6 !== false && t.add(this._nbd(i));
                }, this);
                t.equals(i) || this._3a(t, i);
            },
            _3a: function () {
            },
            _nc1: false,
            _d9: function () {
            },
            _9z: function (t) {
                var i = t.ratio;
                t.scale(i, i);
                t.transform.apply(t, this._jj.m);
            },
            render: function (t, i) {
                i && i.length && (t.save(), this._9z(t), i.forEach(function (i) {
                    if (t.save(), i.visible !== false) {
                        try {
                            i.render(t);
                        } catch (n) {
                            console.error(n);
                        }
                    }
                    t.restore();
                }, this), t.restore());
            },
            setParent: function (t) {
                isString(t) && (t = i.getElementById(t));
                this._my != t && (this._my && this._nbf && (removeClass(this._my, "Q-Graph"),
                    this._my.removeChild(this._nbf)), this._my = t, this._my && (appendClass(this._my, "Q-Graph"),
                    this._my.appendChild(this._6b()), this._6k()))
            },
            _6b: function () {
                return this._nbf || this._nd7(), this._nbf;
            },
            _nd7: function () {
                var t = createCanvas(true);
                Un(t.g);
                t.className = "Q-Canvas";
                var n = i.createElement("div");
                return n.className = "Q-CanvasPanel", n.appendChild(t), n.tabIndex = 0, this._jf = t, this._nbf = n, this._ndtx = this._jf.getContext("2d"), t;
            },
            toLogical: function (t, i) {
                return t instanceof Object && (Q(t) && (t = this._7z(t)), Array.isArray(t) ? (i = t[1] || 0, t = t[0] || 0) : (i = t.y || 0, t = t.x || 0)), this._jj.reverseTransform([t, i]);
            },
            toCanvas: function (t, i) {
                return this._jj.transform([t, i]);
            },
            _7z: function (t) {
                return gi(t, this._nbf);
            },
            _fh: function (t, i, n) {
                if (t.hitTest instanceof Function) {
                    return t.hitTest(i, n);
                }
                var e = this._nbd(t);
                return e ? n ? Rect.intersects(e.x, e.y, e.width, e.height, i[0] - n, i[1] - n, n + n, n + n) : Rect.intersects(e.x, e.y, e.width, e.height, i[0], i[1]) : t;
            },
            hitTest: function (t, i) {
                return this._7w(t, i);
            },
            _7w: function (t, i) {
                i = this._9x(i);
                t = this.toLogical(t);
                for (var n, e = this._ndw.length; --e >= 0;) {
                    if (n = this._ndw[e], this._fh(n, t, i)) {
                        return n;
                    }
                }
            },
            _9x: function (t) {
                return (t === n || null === t) && (t = Defaults.SELECTION_TOLERANCE), t ? t / this.scale : 0;
            },
            getUIByMouseEvent: function (t, i) {
                if (t.uiId) {
                    return this._mz.getById(t.uiId);
                }
                var n = this._7w(t, i);
                return t.uiId = n ? n.id : -1, n;
            },
            _80: null,
            invalidateUI: function (t) {
                this._80[t.id] = t;
                this.invalidate();
            },
            _nb4: function (t) {
                t.validate instanceof Function && t.validate(this);
            },
            _ndh: function (t, i) {
                t.__jo && this._g7(t.__jo);
                var n = t.__i6;
                if (t.__i6 = this._fb(t, i), !t.__i6) {
                    return n;
                }
                var e = t.__jo;
                this._nb4(t);
                var s = this._nbd(t);
                t.__jo = { x: s.x, y: s.y, width: s.width, height: s.height };
                var h = t.__i6 !== n || !Rect.equals(e, s);
                return h && t.__jo && this._g7(t.__jo), h;
            },
            _fb: function (t) {
                return t.visible !== false;
            },
            _$q: function (t) {
                this._mz.forEach(function (i) {
                    this._ndh(i, t);
                }, this);
                this._80 = {};
                this._6d();
            },
            _nbg: function (t) {
                var i = this.scale;
                if (t) return this._$q(i);
                var n = this._d1BoundsFlag;
                this._d1BoundsFlag = false;
                for (var e in this._80) {
                    var s = this._80[e];
                    n ? this._ndh(s, i) : n = this._ndh(s, i);
                }
                this._80 = {};
                n && this._6d();
            },
            _86: null,
            _22: function () {
                if (!this._86.length) {
                    return false;
                }
                var t = this._86;
                this._86 = [];
                t.forEach(function (t) {
                    try {
                        var i = t.call;
                        var n = t.scope;
                        var e = t.delay;
                        n instanceof Object ? i = i.bind(n) : n && !e && (e = parseInt(n)), e ? setTimeout(i, e) : i();
                    } catch (s) {
                    }
                }, this);
                this._6h && this._fq();
            },
            _f4: function (t, i, n) {
                this._86.push({ call: t, scope: i, delay: n }), this._6h || this._22();
            },
            _4d: function (t, i) {
                for (var n = this._ndw, e = 0, s = n.length; s > e; e++) {
                    if (t.call(i, n[e]) === false) {
                        return false;
                    }
                }
            },
            _ff: function (t, i) {
                this._mz.forEach(t, i);
            },
            _$x: function (t, i) {
                for (var n = this._ndw, e = n.length - 1; e >= 0; e--) {
                    if (t.call(i, n[e]) === false) {
                        return false;
                    }
                }
            },
            _4g: function (t, i) {
                this._mz.forEachReverse(t, i);
            },
            _4h: function () {
                return this.bounds;
            },
            _gs: function (t, i, n) {
                t /= this.scale || 1;
                this._kd(t, i, n);
            },
            _kd: function (t, i, e) {
                if (this._nc1 && (i === n || null === i)) {
                    var s = this.toLogical(this.width / 2, this.height / 2);
                    i = s[0] || 0;
                    e = s[1] || 0;
                }
                return this._jj.scale(t, [i || 0, e || 0]);
            },
            _f1: function (t, i) {
                this._jj.translate([t, i], true);
            },
            _nbl: function (t, i, n, e) {
                if (n == this.scale && e !== false) {
                    var s = this.ratio;
                    s != (0 | s) && (t = Math.round(t * s) / s, i = Math.round(i * s) / s);
                }
                this._jj.translateTo([t, i], n);
            },
            _kf: function (t, i) {
                return this._kd(this._ex, t, i);
            },
            _ij: function (t, i) {
                return this._kd(1 / this._ex, t, i);
            },
            _1k: function () {
                var t = this._4h();
                if (!t.isEmpty()) {
                    var i = this.width / t.width;
                    var n = this.height / t.height;
                    var e = Math.min(i, n);
                    return e = Math.max(this._gi, Math.min(this._gk, e)), { scale: e, cx: t.cx, cy: t.cy };
                }
            },
            _ex: 1.3,
            _gk: 10,
            _gi: .1,
            _nbu: false,
            _6n: function () {
            },
            _5j: function () {
            },
            _2d: function () {
            },
            _dv: function () {
                this._ncuffer = null;
                this._nc2._l8();
            },
            _eu: function (t) {
                var i = this._jj;
                var n = this._jf.ratio;
                var e = this.scale;
                var s = i._eq();
                if (!s) {
                    var h = i.transform([t[0], t[1]]);
                    return h[0] *= n, h[1] *= n, n *= e, h[2] = t[2] * n, h[3] = t[3] * n, h;
                }
                var r = new Rect;
                var a = i.transform([t[0], t[1]]);
                return r.add(a[0], a[1]), a = i.transform([t[0] + t[2], t[1]]), r.add(a[0], a[1]), a = i.transform([t[0], t[1] + t[3]]), r.add(a[0], a[1]), a = i.transform([t[0] + t[2], t[1] + t[3]]), r.add(a[0], a[1]), [r.x * n, r.y * n, r.width * n, r.height * n];
            },
            _ga: function (t, n) {
                var e = n._3q(t.x, t.y, t.width, t.height);
                if (e) {
                    var s = this._jf;
                    var h = this.scale * this.ratio;
                    var r = this._nc2;
                    var a = {};
                    var o = 1e-6;
                    e.x > o && (a.left = n._4u(0, 0, e.x, n.height, h));
                    n.width - e.right > o && (a.right = n._4u(e.right, 0, n.width - e.right, n.height, h));
                    e.y > o && (a.top = n._4u(e.x, 0, e.width, e.y, h));
                    n.height - e.bottom > o && (a.bottom = n._4u(e.x, e.bottom, e.width, n.height - e.bottom, h));
                    Y(a) || r._4n(a);
                    var f = n._it(t.x, t.y);
                    var c = (f[0] - e.x) * h;
                    var u = (f[1] - e.y) * h;
                    var _ = e.width * h;
                    var d = e.height * h;
                    c = Math.round(c);
                    u = Math.round(u);
                    _ = Math.round(_);
                    d = Math.round(d);
                    var l = this._ncackCanvas;
                    return l || (l = this._ncackCanvas = i.createElement("canvas"), l.g = l.getContext("2d")), l.width = _, l.height = d, fe(l.g), l.g.drawImage(s, c, u), c = f[0] * h - c, u = f[1] * h - u, {
                        x: c,
                        y: u,
                        canvas: l
                    }
                }
            },
            _m0: function (t, i, n, e) {
                this._nc2._n1(t, i, n, e);
            },
            _g7: function (t) {
                this._nc2._ir(t);
            }
        });

    Object.defineProperties(dY.prototype, {
        width: {
            get: function () {
                return this._nbf.clientWidth;
            }
        },
        height: {
            get: function () {
                return this._nbf.clientHeight;
            }
        },
        rotate: {
            get: function () {
                return this._jj._eq();
            }
        },
        tx: {
            get: function () {
                return this._jj._7s()[0];
            }
        },
        ty: {
            get: function () {
                return this._jj._7s()[1];
            }
        },
        ratio: {
            get: function () {
                return this._jf ? this._jf.ratio : void 0;
            }
        },
        scale: {
            get: function () {
                return this._jj._g6();
            },
            set: function (t) {
                this._gs(t);
            }
        },
        renderScale: {
            get: function () {
                return this.scale * this.ratio;
            }
        },
        uis: {
            get: function () {
                return this._mz;
            }
        },
        length: {
            get: function () {
                return this._mz.length;
            }
        },
        viewportBounds: {
            get: function () {
                return this._viewport.getGlobalBounds();
            }
        }
    });

    var lY;
    var vY = S({
        constructor: function () {
            this._hl = [];
            this._jo = new Rect;
            this._hm = isIE ? 20 : 50;
        },
        _hm: 20,
        _hl: null,
        _lz: false,
        _jo: null,
        _l8: function () {
            this._lz = false;
            this._hl.length = 0;
            this._viewportClips = null;
            this._jo.clear();
        },
        _ip: function () {
            return 0 == this._hl.length && !this._viewportClips;
        },
        _n1: function (t, i, n, e) {
            0 >= n || 0 >= e || this._hl.push([t, i, n, e]);
        },
        _ir: function (t) {
            this._n1(t.x, t.y, t.width, t.height);
        },
        _4n: function (t) {
            var i = this._jo;
            for (var n in t) {
                var e = t[n];
                var s = e.getGlobalBounds();
                i.add(s);
            }
            this._viewportClips = t;
        },
        _nby: function (t, i) {
            for (var n = [], e = this._hl, s = 0, h = e.length; h > s; s++) {
                var r = e[s];
                t.intersects(r[0], r[1], r[2], r[3]) && (n.push(r), this._jo.addRect(r[0], r[1], r[2], r[3]));
            }
            this._hl = n;
            this._lz = i || n.length >= this._hm;
        },
        _fj: function (t, i, n, e) {
            if (!this._jo.intersectsRect(t, i, n, e)) {
                return false;
            }
            if (this._lz) {
                return true;
            }
            if (this._viewportClips) {
                var s = this._viewportClips;
                for (var h in s) {
                    if (s[h].intersects(t, i, n, e)) {
                        return true;
                    }
                }
            }
            for (var r, a = 0, o = this._hl.length; o > a; a++) {
                if (r = this._hl[a], Rect.intersects(t, i, n, e, r[0], r[1], r[2], r[3])) {
                    return true;
                }
            }
            return false;
        },
        _kp: function (t, i) {
            if (this._ip()) {
                return false;
            }
            if (t.beginPath(), this._lz) {
                var n = i([this._jo.x, this._jo.y, this._jo.width, this._jo.height]);
                return ce(t, n[0], n[1], n[2], n[3]), void t.clip();
            }
            if (this._viewportClips) {
                for (var e in this._viewportClips) {
                    var n = this._viewportClips[e].canvasBounds;
                    ce(t, n[0], n[1], n[2], n[3]);
                }
            }
            for (var s = this._hl, h = 0, r = s.length; r > h; h++) {
                var n = i(s[h]);
                ce(t, n[0], n[1], n[2], n[3]);
            }
            t.clip();
        }
    });

    vY._toIntRect = function (t, i, n, e) {
        return t instanceof Object && (i = t.y, n = t.width, e = t.height, t = t.x), n = _gw(t + n) - (t = _ndr(t)), e = _gw(i + e) - (i = _ndr(i)), [t, i, n, e];
    };
    vY._ndr = _ndr;
    vY._gw = _gw;

    Consts.NAVIGATION_BUTTON = "navigation.button";
    Consts.NAVIGATION_SCROLLBAR = "navigation.scrollbar";
    Defaults.NAVIGATION_TYPE = Consts.NAVIGATION_SCROLLBAR;

    var bY = S({
        _jk: function () {
            k(this, bY, "_jk", arguments), this._topCanvas._jk()
        },
        _nb7: function (t, i) {
            return t = t.$data.zIndex || 0, i = i.$data.zIndex || 0, t - i
        },
        "super": dY,
        constructor: function (t, n) {
            this._l1 = t, isString(n) && (n = i.getElementById(n)), n && n.tagName || (n = i.createElement("div")), O(this, bY, [n]), this._topCanvas = new oh(this, this._nbf), this._h9 = [], this._l1._$c.addListener(this._1f, this), this._l1._1h.addListener(this._96, this), this._l1._16.addListener(this._6v, this), this._l1._$l.addListener(this._2m, this), this._l1._$p.addListener(this._34, this), this._nc8 = {}, this._3e(Defaults.NAVIGATION_TYPE, true)
        },
        _50: function (t) {
            k(this, bY, "_50", arguments), this._topCanvas._50(t)
        },
        _hj: function (t) {
            return t.id || (t = this._mz.getById(t)), t ? (this._mz.remove(t), t.destroy(), t.__jo && this._g7(t.__jo), void (this._d1BoundsFlag = true)) : false
        },
        _hh: function () {
            this._mz.forEach(function (t) {
                t.destroy()
            }), this._mz.clear()
        },
        _fb: function (t, i) {
            var n = t.data || t;
            return n._$s && (n._$s = false, n._i6 = this._55(n, i)), n._i6 !== false
        },
        _55: function (t, i) {
            return this._38(t, i) ? !this._l1._i6Filter || this._l1._i6Filter(t, i) !== false : false
        },
        _nb6: function (t) {
            return this._l1._3r == ih(t)
        },
        _38: function (t, i) {
            if (t.visible === false) return false;
            if (!(t instanceof Edge)) return this._l1._3r != ih(t) ? false : !t._e5;
            var n = t.fromAgent, e = t.toAgent;
            if (!n || !e) return false;
            if (n == e && !t.isLooped()) return false;
            if (t.isBundleEnabled()) {
                var s = t.getEdgeBundle(true);
                if (s && !s._fb(t, i)) return false
            }
            var h = this._fb(n, i), r = this._fb(e, i);
            return h && r ? true : false
        },
        _nbd: function (t) {
            return t._nc1 ? { x: t.$x + t.uiBounds.x, y: t.$y + t.uiBounds.y, width: t.uiBounds.width, height: t.uiBounds.height } : void 0
        },
        _2f: function (t) {
            var i = this._lq(t);
            if (i) {
                var n = this._nbd(i);
                if (n) return new Rect(n)
            }
        },
        _fh: function (t, i, n) {
            return t.hitTest(i[0], i[1], n)
        },
        hitTest: function (t, i) {
            var n = k(this, bY, "hitTest", arguments);
            if (n) {
                t = this.toLogical(t), i = this._9x(i);
                var e = n.hitTest(t[0], t[1], i, true);
                if (e instanceof BaseUI) return e
            }
            return n
        },
        _3v: function (t) {
            return this.getUIByMouseEvent(t)
        },
        _70: function () {
            k(this, bY, "_70", arguments), this._topCanvas._j7(this.width, this.height)
        },
        _ln: 1,
        _ndw: null,
        _8q: null,
        _8s: null,
        _mz: null,
        _my: null,
        _jf: null,
        _nc2: null,
        _6h: false,
        _nc1: false,
        _jj: null,
        _4d: function (t, i) {
            for (var n = this._ndw, e = 0, s = n.length; s > e; e++)if (t.call(i, n[e]) === false) return false
        },
        _ff: function (t, i) {
            this._mz.forEach(t, i)
        },
        _$x: function (t, i) {
            for (var n = this._ndw, e = n.length - 1; e >= 0; e--)if (t.call(i, n[e]) === false) return false
        },
        _4g: function (t, i) {
            this._mz.forEachReverse(t, i)
        },
        _3c: function (t) {
            k(this, bY, "_3c", arguments), this._viewportChanged = { value: t }
        },
        _d9: function () {
            this._45(true), this._originAdjusted || (this._originAdjusted = true, this._l1 && this._l1.originAtCenter && this._jj.translateTo([this.width / 2, this.height / 2]))
        },
        _fq: function () {
            if (!this._iaed && this._6h) {
                if (this._jkingID = null, this._6h = false, this._nc1 && this._l1 && this._l1._$s && (this._l1._$s = false, this._l1.forEach(function (t) {
                    t.invalidateVisibility(true)
                })), k(this, bY, "_fq", arguments), this._8sChanged) {
                    this._6q && this._6q._ji();
                    var t = this._8sChanged.value, i = this._8sChanged.old;
                    this._8sChanged = null, this._l1._4p(new PropertyChangeEvent(this._l1, "element.bounds", t, i))
                }
                this._viewportChanged && (this._viewportChanged = false, this._6q && this._6q._3c && this._6q._3c(this._viewport.width * this._viewport.scale, this._viewport.height * this._viewport.scale), this._l1._4p(new PropertyChangeEvent(this._l1, "viewport", this._viewport)))
            }
        },
        _h9: null,
        _ndh: function (t) {
            var i = t.$data;
            if (!t._1d && !i._6h && !i._$s) return false;
            var n = t.$invalidateSize;
            return n = k(this, bY, "_ndh", arguments) || n
        },
        _nb4: function (t) {
            var i = t.$data;
            i.__4x && (i.__4x = false, t._4x()), i.__6h && i._ic() && (t._5c(), i.__6h = false), (t._1d || i._6h) && (i._6h = false, t.validate())
        },
        _h8: function (t, i) {
            var n = t.ratio;
            t.scale(n, n), t.transform.apply(t, this._jj.m);
            for (var e = this.renderScale, s = [], h = 0, r = i.length; r > h; h++) {
                var a = i[h];
                a._jk(t, e), a._k9 && a._k9.length && s.push(a)
            }
            if (s.length) for (h = 0, r = s.length; r > h; h++)s[h]._9h(t, e)
        },
        render: function (t, i) {
            if (i.length) {
                if (t.save(), isIE) try {
                    this._h8(t, i)
                } catch (n) {
                } else this._h8(t, i);
                t.restore()
            }
        },
        _h7: function (t, i, n) {
            t.save(), t.translate(-n.x * i, -n.y * i), t.scale(i, i);
            var e, s, h = this._mz._k0.slice();
            h = this._ig(h);
            for (var r = [], a = 0,
                o = h.length; o > a; a++)e = h[a], e.__i6 && (s = this._nbd(e), n.intersectsRect(s.x, s.y, s.width, s.height) && (e._jk(t, i), e._k9 && e._k9.length && r.push(e)));
            if (r.length) for (a = 0, o = r.length; o > a; a++)r[a]._9h(t, i);
            t.restore()
        },
        _12: function () {
        },
        _1i: function () {
            for (var t, i, n = this._mz._k0, e = new Rect,
                s = n.length - 1; s >= 0; s--)t = n[s], t._i6 && (i = t.uiBounds, e.addRect(t.$x + i.x, t.$y + i.y, i.width, i.height));
            var h = this._8s;
            this._8s = e, e.equals(h) || this._12(h, e)
        },
        _5d: function () {
            this._ndw.length = 0, this._8q = {}
        },
        _lp: function () {
            this._l8()
        },
        _ia: function () {
            this._l8(), this._iaed = true, this._6h = false, this._topCanvas.clear(), this._86.length = 0, this._6q && (this._6q._ia(), delete this._6q)
        },
        _lq: function (t) {
            return this._mz.getById(t.id || t)
        },
        _$g: function (t) {
            return this._f7(t)
        },
        _i1: function (t, i) {
            var n = this.toCanvas(t, i);
            return { x: n[0], y: n[1] }
        },
        _f7: function (t, i) {
            var n = this.toLogical(t, i);
            return { x: n[0], y: n[1] }
        },
        _$f: null,
        _34: function (t) {
            var i = t.source, n = t.data;
            if (n) if (this._nc1) {
                var e, s;
                if (isArray(n)) for (var h = 0,
                    r = n.length; r > h; h++)s = n[h].id, e = this._mz.getById(s), e && (e.selected = i.containsById(s), e.invalidateRender()); else {
                    if (s = n.id, e = this._mz.getById(s), !e) return;
                    e.selected = i.containsById(s), e.invalidateRender()
                }
                this._d1()
            } else {
                this._$f || (this._$f = {});
                var e, s;
                if (isArray(n)) for (var h = 0,
                    r = n.length; r > h; h++)s = n[h].id, this._$f[s] = true; else s = n.id, this._$f[s] = true
            }
        },
        _l1: null,
        _dq: function (t) {
            var i = t.uiClass;
            return i ? new i(t, this._l1) : void 0
        },
        _1f: function (t) {
            if (!this._nc1) return false;
            var i = t.source, n = t.kind;
            "enableSubNetwork" == n && this._l1.invalidateVisibility(), "uiClass" == n ? (this._hj(i.id), this._l0(i)) : "expanded" == n && i._ic() && t.value && this._5k(i);
            var e = this._mz.getById(i.id);
            e && e._nc1 && e.onPropertyChange(t) && this._d1()
        },
        _3t: function (t) {
            var i = this._lq(t);
            i && (i.invalidateData(), this._d1())
        },
        _96: function (t) {
            if (!this._nc1) return false;
            switch (t.kind) {
                case ListEvent.KIND_ADD:
                    this._l0(t.data);
                    break;
                case ListEvent.KIND_REMOVE:
                    this._gz(t.data);
                    break;
                case ListEvent.KIND_CLEAR:
                    this._iv(t.data)
            }
        },
        _l8: function () {
            this._nc8 = {}, this._hh(), this.clear()
        },
        _nc8: null,
        _l0: function (t) {
            var i = this._dq(t);
            i && (this._mz.add(i), this._nc1 && (this._nc8[t.id] = t), this._d1())
        },
        _gz: function (t) {
            if (Array.isArray(t)) {
                for (var i, n = [], e = 0, s = t.length; s > e; e++)i = t[e].id, n.push(i), delete this._nc8[i];
                t = n
            } else t = t.id, delete this._nc8[t], t = [t];
            t.forEach(function (t) {
                this._hj(t)
            }, this), this._d1()
        },
        _iv: function () {
            this._l8()
        },
        _6v: function (t) {
            return this._nc1 ? void (t.source instanceof Node && !this._nc8[t.source.id] && (t.oldValue && (this._3t(t.oldValue), t.oldValue.__6h = true), t.value && (this._3t(t.value), t.value.__6h = true), this._5k(t.source))) : false
        },
        _2m: function (t) {
            return this._nc1 ? void (t.source instanceof Node && !this._nc8[t.source.id] && this._5k(t.source)) : false
        },
        _2n: function (t) {
            if (t._edgeBundleInvalidateFlag) {
                var i = t.getEdgeBundle(true);
                if (!i) return t._edgeBundleInvalidateFlag = false, void t.validateEdgeBundle();
                i._fq(this._l1), i._ncb(function (t) {
                    t.validateEdgeBundle()
                })
            }
        },
        _$q: function (t) {
            var i, n = (this._l1, this._l1.graphModel), e = this._mz, s = [], h = 1;
            if (n.forEachByDepthFirst(function (t) {
                return t instanceof Edge ? (this._2n(t), void s.push(t)) : (i = this._dq(t), void (i && (e.add(i), t.__lf = h++)))
            }, this), e.length) for (var r = e._k0, h = r.length - 1; h >= 0; h--)i = r[h], this._3i(i, i.$data, t);
            for (var a, h = 0, o = s.length; o > h; h++)if (a = s[h], i = this._dq(a)) {
                this._3i(i, a, t), e.add(i);
                var f = a.fromAgent, c = a.toAgent, u = f.__lf || 0;
                f != c && (u = Math.max(u, c.__lf || 0)), a.__lf = u
            }
            if (s.length && e._k0.sort(function (t, i) {
                return t.$data.__lf - i.$data.__lf
            }), this._$f) {
                var _ = n.selectionModel;
                for (var d in this._$f) if (_.containsById(d)) {
                    var i = e.getById(d);
                    i && (i.selected = true)
                }
                this._$f = null
            }
            this._6d()
        },
        _nbg: function (t, i) {
            if (t) return this._$q();
            var n = this._d1BoundsFlag;
            this._d1BoundsFlag = false;
            for (var e in this._nc8) {
                var s = this._nc8[e];
                s instanceof Node ? this._5k(s) : this._5m(s)
            }
            this._nc8 = {};
            for (var h, r, a = this._mz._k0, o = [],
                f = a.length - 1; f >= 0; f--)h = a[f], r = h.$data, r instanceof Edge ? (this._2n(r), o.push(h)) : this._3i(h, r, i) && !n && (n = true);
            if (o.length) for (var f = 0, c = o.length; c > f; f++)h = o[f], this._3i(h, h.$data, i) && !n && (n = true);
            n && this._6d()
        },
        _3i: function (t, i, n) {
            if (i instanceof Edge) return i.__4x && (i.__4x = false, t._4x()), this._ndh(t, n);
            if (i.__6h && i._ic() && (t._5c(), i.__6h = false), this._ndh(t, n)) {
                var e = this._4t(i);
                return e && (e.__6h = true), i.hasEdge() && i.forEachEdge(function (t) {
                    t.__4x = true
                }, this), true
            }
        },
        _2p: function (t, i) {
            var n = t.fromAgent, e = t.toAgent, s = i.getIndexById(n.id);
            if (n == e) return s;
            var h = i.getIndexById(e.id);
            return Math.max(s, h)
        },
        _2r: function (t, i) {
            var n = this.graphModel._hk(t);
            return n ? i.getIndexById(n.id) : 0
        },
        _5k: function (t) {
            var i = this._mz, n = i.getById(t.id);
            if (!n) throw new Error("UI '" + t.name + "' not found");
            var s = this._2r(t, i), h = [n];
            t.hasChildren() && forEachChild(t, function (t) {
                t instanceof Node && (n = i.getById(t.id), n && h.push(n))
            }, this), this._4r(i, s, h)
        },
        _5m: function (t) {
            var i = this._mz.getById(t.id);
            if (i) {
                var n = this._2p(t, this._mz);
                this._mz.setIndexBefore(i, n)
            }
        },
        _4r: function (t, i, n) {
            function add(t) {
                s.add(t)
            }

            var s = new HashList;
            forEach(n, function (n) {
                i = t.setIndexAfter(n, i), n.$data.forEachEdge(add)
            }, this), 0 != s.length && s.forEach(this._5m, this)
        },
        _8e: function (t) {
            return t.getEdgeBundle(true)
        },
        _4t: function (t) {
            var i = we(t);
            return i && i.expanded ? i : null
        },
        _6s: null,
        _6q: null,
        _3e: function (t, i) {
            return i || t != this._6s ? (this._6s = t, this._6q && (this._6q._ia(), delete this._6q), t == Consts.NAVIGATION_SCROLLBAR ? void (this._6q = new rh(this, this._nbf)) : t == Consts.NAVIGATION_BUTTON ? void (this._6q = new hh(this, this._nbf)) : void 0) : false
        },
        _2d: function (t, i) {
            this._6q && this._6q._ji(), this._l1._4p(new PropertyChangeEvent(this._l1, "transform", t, i))
        },
        _6n: function (t, i) {
            this._l1._4p(new PropertyChangeEvent(this._l1, "scale", t, i))
        },
        _3a: function (t, i) {
            this._8sChanged = { value: t, old: i }
        },
        _6l: function () {
            this._6k()
        }
    });

    Object.defineProperties(bY.prototype, {
        _viewportBounds: {
            get: function () {
                return this.viewportBounds;
            }
        },
        _scale: {
            get: function () {
                return this.scale;
            },
            set: function (t) {
                this._gs(t);
            }
        },
        _tx: {
            get: function () {
                return this.tx;
            }
        },
        _ty: {
            get: function () {
                return this.ty;
            }
        },
        graphModel: {
            get: function () {
                return this._l1._l1Model;
            }
        }
    });

    var yY = dY;
    var gY = {};

    gY.create = function () {
        return [1, 0, 0, 1, 0, 0];
    };
    gY.invert = function (t, i) {
        var n = i[0];
        var e = i[1];
        var s = i[2];
        var h = i[3];
        var r = i[4];
        var a = i[5];
        var o = n * h - e * s;
        return o ? (o = 1 / o, t[0] = h * o, t[1] = -e * o, t[2] = -s * o, t[3] = n * o, t[4] = (s * a - h * r) * o, t[5] = (e * r - n * a) * o, t) : null;
    };
    gY.multiply = function (t, i, n) {
        var e = i[0];
        var s = i[1];
        var h = i[2];
        var r = i[3];
        var a = i[4];
        var o = i[5];
        var f = n[0];
        var c = n[1];
        var u = n[2];
        var _ = n[3];
        var d = n[4];
        var l = n[5];
        return t[0] = e * f + h * c, t[1] = s * f + r * c, t[2] = e * u + h * _, t[3] = s * u + r * _, t[4] = e * d + h * l + a, t[5] = s * d + r * l + o, t;
    };
    gY.mul = gY.multiply;
    gY.rotate = function (t, i, n) {
        var e = i[0];
        var s = i[1];
        var h = i[2];
        var r = i[3];
        var a = i[4];
        var o = i[5];
        var f = Math.sin(n);
        var c = Math.cos(n);
        return t[0] = e * c + h * f, t[1] = s * c + r * f, t[2] = e * -f + h * c, t[3] = s * -f + r * c, t[4] = a, t[5] = o, t;
    };
    gY.scale = function (t, i, n) {
        var e = i[0];
        var s = i[1];
        var h = i[2];
        var r = i[3];
        var a = i[4];
        var o = i[5];
        var f = n[0];
        var c = n[1];
        return t[0] = e * f, t[1] = s * f, t[2] = h * c, t[3] = r * c, t[4] = a, t[5] = o, t;
    };
    gY.translate = function (t, i, n) {
        var e = i[0];
        var s = i[1];
        var h = i[2];
        var r = i[3];
        var a = i[4];
        var o = i[5];
        var f = n[0];
        var c = n[1];
        return t[0] = e, t[1] = s, t[2] = h, t[3] = r, t[4] = e * f + h * c + a, t[5] = s * f + r * c + o, t;
    };
    gY.transform = function (t, i) {
        var n = i[0];
        var e = i[1];
        return [n * t[0] + e * t[2] + t[4], n * t[1] + e * t[3] + t[5]];
    };
    gY.reverseTransform = function (t, i) {
        return gY.transform(gY.invert([], t), i);
    };

    var mY = isNumber;
    var EY = S({
        equals: function (t) {
            if (!t || !Array.isArray(t)) {
                return false;
            }
            for (var i = this.m, n = 0; n < i.length;) {
                if (i[n] != t[n]) {
                    return false;
                }
                ++n;
            }
            return true;
        },
        constructor: function (t) {
            this.m = t || gY.create();
            this.im = [];
        },
        listener: null,
        _6h: true,
        invalidate: function () {
            return this._6h = true, this._ncackM && this.equals(this._ncackM) ? false : (this.listener && this.listener({
                target: this,
                kind: "invalidate"
            }), this._ncackM = this.m.slice(), this);
        },
        validate: function () {
            return this._6h = false, gY.invert(this.im, this.m), this;
        },
        translate: function (t, i) {
            return mY(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i !== false ? (this.m[4] += t[0], this.m[5] += t[1], this.invalidate()) : (gY.translate(this.m, this.m, t), this.invalidate());
        },
        translateTo: function (t, i) {
            return mY(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i && (i /= this._g6(), gY.scale(this.m, this.m, [i, i])), this.m[4] = t[0], this.m[5] = t[1], this.invalidate();
        },
        scale: function (t, i) {
            return "number" == typeof t && (t = [t, t]), i ? (gY.translate(this.m, this.m, i), gY.scale(this.m, this.m, t), gY.translate(this.m, this.m, ue(i))) : gY.scale(this.m, this.m, t), this.invalidate();
        },
        rotate: function (t, i) {
            return i ? (gY.translate(this.m, this.m, i), gY.rotate(this.m, this.m, t), gY.translate(this.m, this.m, ue(i))) : gY.rotate(this.m, this.m, t), this.invalidate();
        },
        transform: function (t) {
            return gY.transform(this.m, t);
        },
        reverseTransform: function (t) {
            return gY.transform(this._4w(), t);
        },
        toString: function () {
            return "matrix(" + this.m.join(",") + ")";
        },
        _4w: function () {
            return this._6h && this.validate(), this.im;
        },
        _et: function () {
            var t = this.m[0];
            var i = this.m[1];
            var n = this.m[2];
            var e = this.m[3];
            return [Math.sqrt(t * t + n * n), Math.sqrt(i * i + e * e)];
        },
        _g6: function () {
            var t = this.m[0];
            var i = this.m[2];
            return Math.sqrt(t * t + i * i);
        },
        _7s: function () {
            return [this.m[4], this.m[5]];
        },
        _ndp: function () {
            var t = this.m[0];
            var i = this.m[1];
            var n = this.m[2];
            var e = this.m[3];
            return [_e(Math.atan2(i, e)), _e(Math.atan2(-n, t))];
        },
        _eq: function () {
            return _e(Math.atan2(this.m[1], this.m[3]));
        }
    });
    var pY = S({
        constructor: function () {
        },
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        rotate: 0,
        set: function (t, i, n, e, s, h) {
            return this.x = t, this.y = i, this.width = n, this.height = e, this.rotate = s, this._ndos = Math.cos(s), this._sin = Math.sin(s), this.scale = h, this._globalBounds = null, this;
        },
        _it: function (t, i) {
            return t -= this.x, i -= this.y, this.rotate ? ve(t, i, this._sin, this._ndos) : [t, i];
        },
        _7u: function (t) {
            var i = new Rect;
            return i.add(this._it(t.x, t.y)), i.add(this._it(t.x + t.width, t.y)), i.add(this._it(t.x, t.y + t.height)), i.add(this._it(t.x + t.width, t.y + t.height)), i;
        },
        _g1: function (t, i) {
            if (this.rotate) {
                var n = ve(t, i, Math.sin(-this.rotate), Math.cos(-this.rotate));
                t = n[0];
                i = n[1];
            }
            return [this.x + t, this.y + i];
        },
        _5r: function (t, i) {
            var n = this._it(t, i);
            return t = n[0], i = n[1], t >= 0 && i >= 0 && t <= this.width && i <= this.height;
        },
        intersects: function (t, i, n, e) {
            if (!this.rotate) {
                return Rect.intersects(this.x, this.y, this.width, this.height, t, i, n, e);
            }
            if (!n || !e) {
                return this._5r(t, i);
            }
            var s = this.getGlobalBounds();
            if (!s.intersects(t, i, n, e)) {
                return false;
            }
            for (var h = s.points, r = 0; r < h.length;) {
                var a = h[r];
                if (Rect.intersectsPoint(t, i, n, e, a[0], a[1])) {
                    return true;
                }
                r++;
            }
            var o = [[t, i], [t + n, i], [t, i + e], [t + n, i + e]];
            for (r = 0; r < o.length;) {
                var a = o[r];
                if (this._5r(a[0], a[1])) {
                    return true;
                }
                r++;
            }
            return le(h, o);
        },
        getGlobalBounds: function () {
            return this._globalBounds || (this._globalBounds = this._6m(0, 0, this.width, this.height)), this._globalBounds;
        },
        _6m: function (t, i, n, e) {
            if (!this.rotate) {
                return new Rect(this.x + t, this.y + i, n, e);
            }
            var s = [];
            var h = new Rect;
            var r = this._g1(t, i);
            return s.push(r), h.add(r[0], r[1]), r = this._g1(t + n, i), s.push(r), h.add(r[0], r[1]), r = this._g1(t, i + e), s.push(r), h.add(r[0], r[1]), r = this._g1(t + n, i + e), s.push(r), h.add(r[0], r[1]), h.points = s, h;
        },
        _4u: function (t, i, n, e, s) {
            var h;
            if (this.rotate) {
                var r = this._g1(t, i);
                h = (new pY).set(r[0], r[1], n, e, this.rotate, this.scale);
            } else {
                h = (new pY).set(this.x + t, this.y + i, n, e, 0, this.scale);
            }
            return h.canvasBounds = [Math.round(s * t), Math.round(s * i), Math.round(s * n), Math.round(s * e)], h;
        },
        _3q: function (t, i, n, e) {
            if (!this.rotate) {
                var s = Rect.intersection(this.x, this.y, this.width, this.height, t, i, n, e);
                return s && s.offset(-this.x, -this.y), s;
            }
            var h = this._it(t, i);
            return t = h[0], i = h[1], Rect.intersection(0, 0, this.width, this.height, h[0], h[1], n, e);
        },
        equals: function (t) {
            return this.x == t.x && this.y == t.y && this.width == t.width && this.height == t.height && this.rotate == t.rotate;
        },
        toString: function () {
            return this.x + "," + this.y + "," + this.width + "," + this.height + "," + this.rotate;
        },
        toJSON: function () {
            return { x: this.x, y: this.y, width: this.width, height: this.height, rotate: this.rotate, scale: this.scale };
        }
    });
    var wY = { setStyle: bi, setStyles: css, addRule: addCSSRule, pre: Fz };
    var TY = function (t, i, n, e) {
        this.source = t;
        this.kind = i;
        this.oldValue = e;
        this.value = n;
        this.propertyType = Consts.PROPERTY_TYPE_STYLE;
    };

    extend(TY, PropertyChangeEvent);

    var Element = function (t) {
        this.id = ++GG;
        this._nd9 = {};
        this._jm = {};
        t && (this.$name = t);
    };

    Element.prototype = {
        _jm: null,
        getStyle: function (t) {
            return this._jm[t];
        },
        setStyle: function (t, i) {
            var n = this._jm[t];
            return n === i || n && i && n.equals && n.equals(i) ? false : this._nbp(t, i, new TY(this, t, i, n), this._jm);
        },
        putStyles: function (t, i) {
            for (var n in t) {
                var e = t[n];
                i ? this._jm[n] = e : this.setStyle(n, e);
            }
        },
        _$s: true,
        invalidateVisibility: function (t) {
            this._$s = true;
            t || (this instanceof Node && this.hasEdge() && this.forEachEdge(function (t) {
                t._$s = true;
            }),
            this._ic() && this.hasChildren() && this.forEachChild(function (t) {
                t.invalidateVisibility();
            }));
        },
        onParentChanged: function () {
            this.invalidateVisibility();
        },
        _ic: function () {
            return !this._3z && this instanceof Group;
        },
        invalidate: function () {
            this.onEvent(new Event(this, "ui", "invalidate"));
        },
        _nd5: null,
        addUI: function (t, i) {
            if (this._nd5 || (this._nd5 = new HashList), t.id || (t.id = ++GG), this._nd5.containsById(t.id)) {
                return false;
            }
            var n = { id: t.id, ui: t, bindingProperties: i };
            this._nd5.add(n);
            var e = new Event(this, "ui", "add", n);
            return this.onEvent(e);
        },
        removeUI: function (t) {
            if (!this._nd5) {
                return false;
            }
            var i = this._nd5.getById(t.id);
            return i ? (this._nd5.remove(i), void this.onEvent(new Event(this, "ui", "remove", i))) : false;
        },
        toString: function () {
            return this.$name || this.id;
        },
        type: "Q.Element",
        _3z: false,
        _i6: true
    };

    extend(Element, Data);

    A(Element.prototype, ["uiClass", "name", "zIndex", "tooltip"]);

    defineProperties(Element.prototype, {
        enableSubNetwork: {
            get: function () {
                return this._3z;
            },
            set: function (t) {
                if (this._3z != t) {
                    var i = this._3z;
                    this._3z = t;
                    this instanceof Node && this._$z(), this.onEvent(new PropertyChangeEvent(this, "enableSubNetwork", t, i));
                }
            }
        },
        bindingUIs: {
            get: function () {
                return this._nd5;
            }
        },
        styles: {
            get: function () {
                return this._jm;
            },
            set: function (t) {
                if (this._jm != t) {
                    for (var i in this._jm) {
                        i in t || (t[i] = n);
                    }
                    this.putStyles(t);
                    this._jm = t;
                }
            }
        }
    });

    var Edge = function (t, i, n) {
        this.id = ++GG;
        this._nd9 = {};
        this._jm = {};
        n && (this.$name = n);
        this.$from = t;
        this.$to = i;
        this.connect();
    };

    Edge.prototype = {
        $uiClass: EdgeUI,
        _kl: null,
        _iy: null,
        _ko: null,
        _iz: null,
        _eo: false,
        type: "Q.Edge",
        otherNode: function (t) {
            return t == this.from ? this.to : t == this.to ? this.from : void 0;
        },
        connect: function () {
            if (this._eo) {
                return false;
            }
            if (!this.$from || !this.$to) {
                return false;
            }
            if (this._eo = true, this.$from == this.$to) {
                return void this.$from._ih(this);
            }
            Ce(this.$to, this);
            Ie(this.$from, this);
            ye(this.$from, this, this.$to);
            var t = this.fromAgent;
            var i = this.toAgent;
            if (t != i) {
                var n;
                this.$from._e5 && (xe(t, this, i), n = true);
                this.$to._e5 && (Ee(i, this, t), n = true);
                n && ye(t, this, i);
            }
        },
        disconnect: function () {
            if (!this._eo) {
                return false;
            }
            if (this._eo = false, this.$from == this.$to) {
                return void this.$from._nds(this);
            }
            Ae(this,$from, this);
            Le(this.$to, this);
            ge(this.$from, this, this.$to);
            var t = this.fromAgent;
            var i = this.toAgent;
            if (t != i) {
                var n;
                this.$from._e5 && (me(t, this, i), n = true);
                this.$to._e5 && (pe(i, this, t), n = true);
                n && ge(t, this, i);
            }
        },
        isConnected: function () {
            return this._eo;
        },
        isInvalid: function () {
            return !this.$from || !this.$to;
        },
        isLooped: function () {
            return this.$from == this.$to;
        },
        getEdgeBundle: function (t) {
            return t ? this._2w() : this.isLooped() ? this.$from._4f : this.$from.getEdgeBundle(this.$to);
        },
        hasEdgeBundle: function () {
            var t = this.getEdgeBundle(true);
            return t && t.edges.length > 1
        },
        _2w: function () {
            var t = this.fromAgent;
            var i = this.toAgent;
            return t == i ? this.$from._e5 || this.$to._e5 ? null : this.$from._4f : this.fromAgent.getEdgeBundle(this.toAgent);
        },
        _9c: null,
        hasPathSegments: function () {
            return this._9c && !this._9c.isEmpty();
        },
        isBundleEnabled: function () {
            return this.bundleEnabled && !this.hasPathSegments();
        },
        firePathChange: function (t) {
            this.onEvent(new PropertyChangeEvent(this, "path.segment", t));
        },
        addPathSegment: function (t, i, n) {
            var e = new PathSegment(i || "l", t);
            this._9c || (this._9c = new HashList);
            this._9c.add(e, n);
            this.firePathChange(e);
        },
        addPathSegement: function () {
            return Qunee.log('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'), this.addPathSegment.apply(this, arguments);
        },
        removePathSegmentByIndex: function (t) {
            if (!this._9c) {
                return false;
            }
            var i = this._9c.getByIndex(t);
            i && (this._9c.remove(i), this.firePathChange(i));
        },
        removePathSegment: function (t) {
            return this._9c ? (this._9c.remove(t), void this.firePathChange(t)) : false;
        },
        movePathSegment: function (t, i, n) {
            if (!this._9c) {
                return false;
            }
            if (t = t || 0, i = i || 0, Qunee.isNumber(n)) {
                var e = this._9c.getByIndex(n);
                return e ? (e.move(t, i), void this.firePathChange()) : false;
            }
            forEach(function (n) {
                n.move(t, i);
            });
            this.firePathChange();
        },
        move: function (t, i) {
            return this._9c ? (this._9c.forEach(function (n) {
                n.move(t, i);
            }, this), void this.firePathChange()) : false;
        },
        validateEdgeBundle: function () {
        }
    };

    extend(Edge, Element);

    defineProperties(Edge.prototype, {
        pathSegments: {
            get: function () {
                return this._9c;
            },
            set: function (t) {
                Qunee.isArray(t) && (t = new HashList(t));
                this._9c = t;
                this.firePathChange();
            }
        },
        from: {
            get: function () {
                return this.$from;
            },
            set: function (t) {
                if (this.$from != t) {
                    var i = new PropertyChangeEvent(this, "from", t, this.$from);
                    this.beforeEvent(i) !== false && (this.disconnect(), this.$from = t, this.connect(), this.onEvent(i));
                }
            }
        },
        to: {
            get: function () {
                return this.$to;
            },
            set: function (t) {
                if (this.$to != t) {
                    var i = new PropertyChangeEvent(this, "to", t, this.$to);
                    this.beforeEvent(i) !== false && (this.disconnect(), this.$to = t, this.connect(), this.onEvent(i));
                }
            }
        },
        fromAgent: {
            get: function () {
                return this.$from ? this.$from._e5 || this.$from : null;
            }
        },
        toAgent: {
            get: function () {
                return this.$to ? this.$to._e5 || this.$to : null;
            }
        }
    });

    A(Edge.prototype, ["edgeType", { name: "bundleEnabled", value: true }, "angle"]);

    var Node = function (t, i, n) {
        2 == arguments.length && isNumber(t) && (n = i, i = t, t = null);
        this.id = ++GG;
        this._nd9 = {};
        this._jm = {};
        t && (this.$name = t);
        this.$image = "Q-node";
        this.$anchorPosition = Position.CENTER_MIDDLE;
        this.$location = {
            x: i || 0,
            y: n || 0
        };
        this._linkedNodes = {};
    };

    Node.prototype = {
        $uiClass: NodeUI,
        _e5: null,
        forEachEdge: function (t, i, n) {
            return !n && this._l2 && this._l2.forEach(t, i) === false ? false : Pe(this, t, i);
        },
        forEachOutEdge: function (t, i) {
            return De(this, t, i);
        },
        forEachInEdge: function (t, i) {
            return Ne(this, t, i);
        },
        getEdges: function () {
            var t = [];
            return this.forEachEdge(function (i) {
                t.push(i);
            }), t;
        },
        _in: null,
        _gc: null,
        _jv: null,
        _il: null,
        _nbi: 0,
        _8y: 0,
        hasInEdge: function () {
            return null != this._in;
        },
        hasOutEdge: function () {
            return null != this._gc;
        },
        hasEdge: function () {
            return null != this._in || null != this._gc || this.hasLoops();
        },
        linkedWith: function (t) {
            return t.from == this || t.to == this || t.fromAgent == this || t.toAgent == this;
        },
        hasEdgeWith: function (t) {
            var i = this.getEdgeBundle(t);
            return i && i.edges.length > 0;
        },
        _l2: null,
        _4f: null,
        hasLoops: function () {
            return this._l2 && this._l2.length > 0;
        },
        _ih: function (t) {
            return this._l2 || (this._l2 = new HashList, this._4f = new EdgeBundle(this, this, this._l2)), this._4f._iu(t);
        },
        _nds: function (t) {
            return this._4f ? this._4f._ds(t) : void 0;
        },
        getEdgeBundle: function (t) {
            return t == this ? this._4f : this._linkedNodes[t.id] || t._linkedNodes[this.id];
        },
        _6x: function () {
            return this._8w && this._8w.length;
        },
        _54: function () {
            return this._8c && this._8c.length;
        },
        _8z: function () {
            return this._6x() || this._54();
        },
        _8c: null,
        _8w: null,
        _ndb: function () {
            var t = this._e5;
            var i = be(this);
            if (t != i) {
                var n = Re(this);
                this._93(i);
                n.forEach(function (t) {
                    var i = t.fromAgent;
                    var n = t.toAgent;
                    var t = t.edge;
                    var e = t.$from._e5;
                    var s = t.$to._e5;
                    i != n && (i && me(i, t, n || t.$to), n && pe(n, t, i || t.$from));
                    e != s && (e && xe(e, t, s || t.$to), s && Ee(s, t, e || t.$from), ye(e || t.$from, t, s || t.$to));
                }, this);
            }
        },
        onParentChanged: function () {
            this.invalidateVisibility();
            this._ndb();
        },
        _8a: null,
        _$z: function () {
            var t;
            if (this._3z ? t = null : (t = this._e5, t || this._gt !== false || (t = this)), this._8a == t) {
                return false;
            }
            if (this._8a = t, this._fo && this._fo._k0.length) {
                for (var i, n = this._fo._k0, e = 0, s = n.length; s > e; e++) {
                    i = n[e];
                    i instanceof Node && i._93(t);
                }
            }
        },
        setLocation: function (t, i) {
            if (this.$location && this.$location.x == t && this.$location.y == i) {
                return false;
            }
            var n = this.$location ? { x: this.$location.x, y: this.$location.y } : this.$location;
            var e = new PropertyChangeEvent(this, "location", n, { x: t, y: i });
            return this.beforeEvent(e) === false ? false : (this.$location ? (this.$location.x = t, this.$location.y = i) : this.$location = new Point(t, i), this.onEvent(e), true);
        },
        _e4: null,
        addFollower: function (t) {
            return null == t ? false : t.host = this;
        },
        removeFollower: function (t) {
            return this._e4 && this._e4.contains(t) ? t.host = null : false;
        },
        hasFollowers: function () {
            return this._e4 && !this._e4.isEmpty();
        },
        toFollowers: function () {
            return this.hasFollowers() ? this._e4.toDatas() : null;
        },
        clearFollowers: function () {
            this.hasFollowers() && (this.toFollowers(), forEach(this.toFollowers(), function (t) {
                t.host = null;
            }));
        },
        getFollowerIndex: function (t) {
            return this._e4 && this._e4.contains(t) ? this._e4.indexOf(t) : -1;
        },
        setFollowerIndex: function (t, i) {
            return this._e4 && this._e4.contains(t) ? void this._e4.setIndex(t, i) : -1;
        },
        getFollowerCount: function () {
            return this._e4 ? this._e4.length : 0;
        },
        _91: function () {
            return this._e4 ? this._e4 : (this._e4 = new HashList, this._e4);
        },
        isFollow: function (t) {
            if (!t || !this._host) {
                return false;
            }
            for (var i = this._host; i;) {
                if (i == t) {
                    return true;
                }
                i = i._host;
            }
            return false;
        },
        _93: function (t) {
            return t == this._e5 ? false : (this._e5 = t, this.invalidateVisibility(), void this._$z());
        },
        type: "Q.Node"
    };

    extend(Node, Element);

    defineProperties(Node.prototype, {
        loops: {
            get: function () {
                return this._l2;
            }
        },
        edgeCount: {
            get: function () {
                return this._nbi + this._8y;
            }
        },
        agentNode: {
            get: function () {
                return this._e5 || this;
            }
        },
        host: {
            set: function (t) {
                if (this == t || t == this._host) {
                    return false;
                }
                var i = new PropertyChangeEvent(this, "host", this._host, t);
                if (false === this.beforeEvent(i)) {
                    return false;
                }
                var n = null;
                var e = null;
                var s = this._host;
                if (null != t && (n = new PropertyChangeEvent(t, "follower.add", null, this), false === t.beforeEvent(n))) {
                    return false;
                }
                if (null != s && (e = new PropertyChangeEvent(s, "follower.remove", null, this), false === s.beforeEvent(e))) {
                    return false;
                }
                if (this._host = t, null != t) {
                    var h = t._91();
                    h.add(this);
                }
                if (null != s) {
                    var h = s._91();
                    h.remove(this);
                }
                return this.onEvent(i), null != t && t.onEvent(n), null != s && s.onEvent(e), true;
            },
            get: function () {
                return this._host;
            }
        }
    });

    A(Node.prototype, ["location", "size", "image", "rotate", "anchorPosition"]);

    defineProperties(Node.prototype, {
        x: {
            get: function () {
                return this.location.x;
            },
            set: function (t) {
                t != this.location.x && (this.location = new Point(t, this.location.y));
            }
        },
        y: {
            get: function () {
                return this.location.y;
            },
            set: function (t) {
                t != this.location.y && (this.location = new Point(this.location.x, t));
            }
        }
    });

    var ShapeNode = function (t, i) {
        t instanceof Path && (i = t, t = n);
        doSuperConstructor(this, ShapeNode, [t]);
        this.path = i || new Path;
        this.anchorPosition = null;
        this.uiClass = ah;
        Defaults.SHAPENODE_STYLES || (Defaults.SHAPENODE_STYLES = {}, Defaults.SHAPENODE_STYLES[Styles.ARROW_TO] = false);
        this.putStyles(Defaults.SHAPENODE_STYLES);
    };

    ShapeNode.prototype = {
        $uiClass: ah,
        type: "Q.ShapeNode",
        moveTo: function (t, i) {
            this.path.moveTo(t, i);
            this.firePathChange();
        },
        lineTo: function (t, i) {
            this.path.lineTo(t, i);
            this.firePathChange();
        },
        quadTo: function (t, i, n, e) {
            this.path.quadTo(t, i, n, e);
            this.firePathChange();
        },
        curveTo: function (t, i, n, e, s, h) {
            this.path.curveTo(t, i, n, e, s, h);
            this.firePathChange();
        },
        arcTo: function (t, i, n, e, s) {
            this.path.arcTo(t, i, n, e, s), this.firePathChange();
        },
        closePath: function () {
            this.path.closePath();
            this.firePathChange();
        },
        clear: function () {
            this.path.clear();
            this.firePathChange();
        },
        removePathSegmentByIndex: function (t) {
            this.path.removePathSegment(t) !== false && this.firePathChange();
        },
        firePathChange: function () {
            this.path._6h = true;
            this.onEvent(new PropertyChangeEvent(this, "path.segment"));
        }
    };

    extend(ShapeNode, Node);

    defineProperties(ShapeNode.prototype, {
        path: {
            get: function () {
                return this.image;
            },
            set: function (t) {
                this.image = t;
            }
        },
        pathSegments: {
            get: function () {
                return this.path.segments;
            },
            set: function (t) {
                this.path.segments = t || [];
                this.firePathChange();
            }
        },
        length: {
            get: function () {
                return this.path.length;
            }
        }
    });

    Qunee.ShapeNode = ShapeNode;

    var Shapes = {
        _k2: {},
        register: function (t, i) {
            Shapes._k2[t] = i;
        },
        getShape: function (t, i, e, s, h, r) {
            s === n && (s = i, h = e, i = 0, e = 0);
            s || (s = 50), h || (h = 50);
            var a = Shapes._k2[t];
            return a ? a.generator instanceof Function ? a.generator(i, e, s, h, r) : a : void 0;
        },
        getRect: function (t, i, n, e, s, h, r) {
            return t instanceof Object && "width" in t && (i = t.y, n = t.width, e = t.height, s = t.rx, h = t.ry, r = t.path, t = t.x), je(r || new Path, t, i, n, e, s, h);
        },
        getAllShapes: function (t, i, n, e, s) {
            var h = {};
            for (var r in Shapes._k2) {
                var a = Shapes.getShape(r, t, i, n, e, s);
                a && (h[r] = a);
            }
            return h;
        },
        createRegularShape: function (t, i, n, e, s) {
            return qe(t, i, n, e, s);
        }
    };

    es();

    Bus.prototype = { type: "Q.Bus" };

    extend(Bus, ShapeNode);

    Qunee.Bus = Bus;

    GraphModel.prototype = {
        _hk: function (t) {
            var i, n = t._k6;
            i = n ? n._fo : this.$roots;
            var e = i.indexOf(t);
            if (0 > e) {
                throw new Error("data '" + t + "' not exist in the box");
            }
            for (; e >= 0;) {
                if (0 == e) {
                    return n instanceof Node ? n : null;
                }
                e -= 1;
                var h = i.getByIndex(e);
                if (h = s(h)) {
                    return h;
                }
            }
            return null;
        },
        forEachNode: function (t, i) {
            this.forEach(function (n) {
                return n instanceof Node && t.call(i, n) === false ? false : void 0;
            })
        },
        _3r: null
    };

    extend(GraphModel, DataModel);

    defineProperties(GraphModel.prototype, {
        propertyChangeDispatcher: {
            get: function () {
                return this._$v;
            }
        },
        currentSubNetwork: {
            get: function () {
                return this._3r;
            },
            set: function (t) {
                if (t && !t.enableSubNetwork && (t = null), this._3r != t) {
                    var i = this._3r;
                    this._3r = t;
                    this._$v.onEvent(new PropertyChangeEvent(this, "currentSubNetwork", t, i));
                }
            }
        }
    });

    Defaults.GROUP_TYPE = Consts.GROUP_TYPE_RECT;
    Defaults.GROUP_PADDING = 5;
    Defaults.GROUP_EXPANDED = true;
    Defaults.GROUP_MIN_SIZE = { width: 60, height: 60 };

    var Group = function (t, i, e) {
        doSuperConstructor(this, Group, arguments);
        (i === n || e === n) && (this.$location.invalidateFlag = true);
        this.$groupType = Defaults.GROUP_TYPE;
        this.$padding = Defaults.GROUP_PADDING;
        this.$image = Graphs.group;
        this.$minSize = Defaults.GROUP_MIN_SIZE;
        this.expanded = Defaults.GROUP_EXPANDED;
    };

    Group.prototype = {
        type: "Q.Group",
        $uiClass: GroupUI,
        _90: function () {
            return !this._gt && !this._e5;
        },
        forEachOutEdge: function (t, i, n) {
            return De(this, t, i) === false ? false : !n && this._90() && this._8c ? this._8c.forEach(t, i) : void 0;
        },
        forEachInEdge: function (t, i, n) {
            return Ne(this, t, i) === false ? false : !n && this._90() && this._8w ? this._8w.forEach(t, i) : void 0;
        },
        forEachEdge: function (t, i, n) {
            return doSuper(this, Group, "forEachEdge", arguments) === false ? false : n || n || !this._90() ? void 0 : this._8w && this._8w.forEach(t, i) === false ? false : this._8c ? this._8c.forEach(t, i) : void 0;
        },
        hasInEdge: function (t) {
            return t ? null != this._in : null != this._in || this._6x();
        },
        hasOutEdge: function (t) {
            return t ? null != this._gc : null != this._gc || this._54();
        },
        hasEdge: function (t) {
            return t ? null != this._in || null != this._gc : null != this._in || null != this._gc || this._8z();
        }
    };

    extend(Group, Node);

    defineProperties(Group.prototype, {
        expanded: {
            get: function () {
                return this._gt;
            },
            set: function (t) {
                if (this._gt != t) {
                    var i = new PropertyChangeEvent(this, "expanded", t, this._gt);
                    this.beforeEvent(i) !== false && (this._gt = t, this._$z(), this.onEvent(i), this._e5 || rs.call(this));
                }
            }
        }
    });

    A(Group.prototype, ["minSize", "groupType", "padding", "groupImage"]);

    Qunee.Group = Group;

    Text.prototype.type = "Q.Text";

    extend(Text, Node);

    Qunee.Text = Text;

    var BaseUI = function (t) {
        this._jo = new Rect;
        this._7k = new Rect;
        this._fs = new Rect;
        this.id = ++GG;
        t && (this.data = t);
    };

    BaseUI.prototype = {
        invalidate: function () {
            this.invalidateData();
        },
        _1d: true,
        _jo: null,
        _7k: null,
        _fs: null,
        _nc1: false,
        _k4: 1,
        _jy: 1,
        _i6: true,
        _7o: 0,
        _66: 0,
        _k6: null,
        _nc4: null,
        borderColor: "#444",
        borderLineDash: null,
        borderLineDashOffset: null,
        syncSelection: true,
        syncSelectionStyles: true,
        _18: function () {
            this.$anchorPoint = fi(this.anchorPosition, this._7o, this._66);
        },
        setMeasuredBounds: function (t, i, n, e) {
            return t instanceof Object && (n = t.x, e = t.y, i = t.height, t = t.width), this._jo.width == t && this._jo.height == i && this._jo.x == n && this._jo.y == e ? false : void this._jo.set(n || 0, e || 0, t || 0, i || 0);
        },
        initialize: function () {
        },
        measure: function () {
        },
        draw: function () {
        },
        _7m: function (t, i, n) {
            n.selectionType == Consts.SELECTION_TYPE_SHADOW ?
                (t.shadowColor = n.selectionColor, t.shadowBlur = n.selectionShadowBlur * i, t.shadowOffsetX = (n.selectionShadowOffsetX || 0) * i, t.shadowOffsetY = (n.selectionShadowOffsetY || 0) * i)
                : this._1y(t, i, n);
        },
        _1y: function (t, i, n) {
            var e = n.selectionBorder || 0;
            n.selectionBackgroundColor && (t.fillStyle = n.selectionBackgroundColor, t.fillRect(this._7k.x - e / 2, this._7k.y - e / 2, this._7k.width + e, this._7k.height + e));
            t.strokeStyle = n.selectionColor;
            t.lineWidth = e;
            t.strokeRect(this._7k.x - e / 2, this._7k.y - e / 2, this._7k.width + e, this._7k.height + e);
        },
        _jk: function (t, i, n, e) {
            if (!this._i6) {
                return false;
            }
            if (this.syncSelection || (n = this.selected), (n && !this.syncSelectionStyles || !e) &&
                (e = this), t.save(), 1 != this.$alpha && (t.globalAlpha = this.$alpha), t.translate(this.$x, this.$y),
                this.$rotatable && this.$_hostRotate && t.rotate(this.$_hostRotate), (this.offsetX || this.offsetY) &&
                t.translate(this.offsetX, this.offsetY), this.$rotate && t.rotate(this.$rotate), this.$layoutByAnchorPoint &&
                this._nc4 && t.translate(-this._nc4.x, -this._nc4.y), this.shadowColor &&
                (t.shadowColor = this.shadowColor, t.shadowBlur = this.shadowBlur * i, t.shadowOffsetX = this.shadowOffsetX * i,
                    t.shadowOffsetY = this.shadowOffsetY * i), n && e.selectionType == Consts.SELECTION_TYPE_BORDER_RECT &&
                (this._1y(t, i, e), n = false), this._$u() && this._m0Shape && !this._m0Shape._empty) {
                this._m0Shape.validate();
                var s = {
                    lineWidth: this.$border,
                    strokeStyle: this.borderColor,
                    lineDash: this.borderLineDash,
                    lineDashOffset: this.borderLineDashOffset,
                    fillColor: this.$backgroundColor,
                    fillGradient: this._ncackgroundGradient,
                    lineCap: "butt",
                    lineJoin: "round"
                };
                this._m0Shape.draw(t, i, s, n, e), n = false;
                t.shadowColor = "rgba(0,0,0,0)";
            }
            t.beginPath();
            this.draw(t, i, n, e);
            t.restore();
        },
        invalidateData: function () {
            this.$invalidateData = true;
            this.$invalidateSize = true;
            this._1d = true;
        },
        invalidateSize: function () {
            this.$invalidateSize = true;
            this._1d = true;
        },
        invalidateRender: function () {
            this._1d = true;
        },
        _55: function () {
        },
        _$u: function () {
            return this.$backgroundColor || this.$backgroundGradient || this.$border;
        },
        _3y: function () {
            return this.$backgroundColor || this.$backgroundGradient;
        },
        doValidate: function () {
            return this.$invalidateData && (this.$invalidateData = false, this.measure() !== false && (this.$invalidateSize = true)), this.$invalidateSize && this.validateSize && this.validateSize(), zn.call(this) ? (this.$invalidateRotate = true, this.onBoundsChanged && this.onBoundsChanged(), true) : this.$invalidateLocation ? (this.$invalidateRotate = true, this.$invalidateLocation = false, true) : void 0;
        },
        validate: function () {
            var t = this._i6;
            return this.$invalidateVisibility && (this.$invalidateVisibility = false, this._i6 = this.$visible, !this._i6 || (this.$data || this.$showEmpty) && this._55() !== false || (this._i6 = false)), this._i6 ? (this._1d = false, this._nc1 || (this.initialize(), this._nc1 = true), this.doValidate()) : t != this._i6;
        },
        _it: function (t, i) {
            return t -= this.$x, i -= this.$y, Gn.call(this, { x: t, y: i });
        },
        hitTest: function (t, i, n, e) {
            if (t -= this.$x, i -= this.$y, !this._fs.intersectsPoint(t, i, n)) {
                return false;
            }
            var s = Gn.call(this, { x: t, y: i });
            return t = s.x, i = s.y, !e && this._$u() && this._m0Shape && this._m0Shape.hitTest(t, i, n, false, this.$border, this.$backgroundColor || this.$backgroundGradient) ? true : this.doHitTest(t, i, n);
        },
        doHitTest: function (t, i, n) {
            return this._jo.intersectsPoint(t, i, n);
        },
        hitTestByBounds: function (t, i, n, e) {
            var s = this._it(t, i);
            return !e && this._$u() && this._m0Shape && this._m0Shape.hitTest(t, i, n, false, this.$border, this.$backgroundColor || this.$backgroundGradient) ? true : this._jo.intersectsPoint(s.x, s.y, n);
        },
        onDataChanged: function () {
            this.$invalidateData = true;
            this._1d = true;
            this.$invalidateVisibility = true;
        },
        getBounds: function () {
            var t = this._fs.clone();
            return t.offset(this.x, this.y), this.parent && (this.parent.rotate && Si(t, this.parent.rotate, t), t.offset(this.parent.x || 0, this.parent.y || 0)), t;
        },
        destroy: function () {
            this._iaed = true;
        },
        _dx: false
    };

    defineProperties(BaseUI.prototype, {
        originalBounds: {
            get: function () {
                return this._jo;
            }
        },
        data: {
            get: function () {
                return this.$data;
            },
            set: function (t) {
                if (this.$data != t) {
                    var i = this.$data;
                    this.$data = t;
                    this.onDataChanged(t, i);
                }
            }
        },
        parent: {
            get: function () {
                return this._k6;
            }
        },
        showOnTop: {
            get: function () {
                return this._dx;
            },
            set: function (t) {
                t != this._dx && (this._dx = t, this._1d = true, this._k6 && this._k6._nc0 && this._k6._nc0(this));
            }
        }
    });

    fs(BaseUI.prototype, {
        visible: { value: true, validateFlags: ["Visibility", "Location"] },
        showEmpty: { validateFlags: ["Visibility"] },
        anchorPosition: { value: Position.CENTER_MIDDLE, validateFlags: ["AnchorPoint", "Location"] },
        position: { value: Position.CENTER_MIDDLE, validateFlags: ["Location"] },
        offsetX: { value: 0, validateFlags: ["Location"] },
        offsetY: { value: 0, validateFlags: ["Location"] },
        layoutByAnchorPoint: { value: true, validateFlags: ["Size", "AnchorPoint", "Location"] },
        padding: { value: 0, validateFlags: ["Size"] },
        border: { value: 0, validateFlags: ["Size"] },
        borderRadius: { value: Defaults.BORDER_RADIUS },
        showPointer: { value: false, validateFlags: ["Size"] },
        pointerX: { value: 0, validateFlags: ["Size"] },
        pointerY: { value: 0, validateFlags: ["Size"] },
        pointerWidth: { value: Defaults.POINTER_WIDTH },
        backgroundColor: { validateFlags: ["Size"] },
        backgroundGradient: { validateFlags: ["Size", "BackgroundGradient"] },
        selected: { value: false, validateFlags: ["Size"] },
        selectionBorder: { value: Defaults.SELECTION_BORDER, validateFlags: ["Size"] },
        selectionShadowBlur: { value: Defaults.SELECTION_SHADOW_BLUR, validateFlags: ["Size"] },
        selectionColor: { value: Defaults.SELECTION_COLOR, validateFlags: ["Size"] },
        selectionType: { value: Defaults.SELECTION_TYPE, validateFlags: ["Size"]},
        selectionShadowOffsetX: { value: 0, validateFlags: ["Size"] },
        selectionShadowOffsetY: { value: 0, validateFlags: ["Size"] },
        shadowBlur: { value: 0, validateFlags: ["Size"] },
        shadowColor: { validateFlags: ["Size"] },
        shadowOffsetX: { value: 0, validateFlags: ["Size"] },
        shadowOffsetY: { value: 0, validateFlags: ["Size"] },
        renderColorBlendMode: {},
        renderColor: {},
        x: { value: 0, validateFlags: ["Location"] },
        y: { value: 0, validateFlags: ["Location"] },
        rotatable: { value: true, validateFlags: ["Rotate", "Size"] },
        rotate: { value: 0, validateFlags: ["Rotate", "Size"] },
        _hostRotate: { validateFlags: ["Rotate"] },
        lineWidth: { value: 0, validateFlags: ["Data"] },
        alpha: { value: 1 }
    });

    var LY = [Consts.PROPERTY_TYPE_ACCESSOR, Consts.PROPERTY_TYPE_STYLE, Consts.PROPERTY_TYPE_CLIENT];

    us.prototype = {
        removeBinding: function (t) {
            for (var i = LY.length; --i >= 0;) {
                var n = LY[i];
                var e = this[n];
                for (var s in e) {
                    var h = e[s];
                    Array.isArray(h) ? (v(h, function (i) {
                        return i.target == t;
                    }, this), h.length || delete e[s]) : h.target == t && delete e[s];
                }
            }
        },
        _1v: function (t, i, n) {
            if (!n && (n = this[i.propertyType || Consts.PROPERTY_TYPE_ACCESSOR], !n)) {
                return false;
            }
            var e = n[t];
            e ? (Array.isArray(e) || (n[t] = e = [e]), e.push(i)) : n[t] = i;
        },
        _2k: function (t, i, n, e, s, h) {
            t = t || Consts.PROPERTY_TYPE_ACCESSOR;
            var r = this[t];
            if (!r) {
                return false;
            }
            var a = { property: i, propertyType: t, bindingProperty: e, target: n, callback: s, invalidateSize: h };
            this._1v(i, a, r);
        },
        onBindingPropertyChange: function (t, i, n, e) {
            var s = this[n || Consts.PROPERTY_TYPE_ACCESSOR];
            if (!s) {
                return false;
            }
            var h = s[i];
            return h ? (t._1d = true, cs(t, h, n, e), true) : false;
        },
        initBindingProperties: function (t, i) {
            for (var e = LY.length; --e >= 0;) {
                var s = LY[e];
                var h = this[s];
                for (var r in h) {
                    var a = h[r];
                    if (a.bindingProperty) {
                        var o = a.target;
                        if (o) {
                            if (!(o instanceof BaseUI || (o = t[o]))) {
                                continue;
                            }
                        } else {
                            o = t;
                        }
                        var f;
                        f = i === false ? t.getProperty(a.property, s) : s == Consts.PROPERTY_TYPE_STYLE ? t.graph.getStyle(t.$data, a.property) : t.$data[a.property], f !== n && (o[a.bindingProperty] = f);
                    }
                }
            }
        }
    };

    var Styles = {};

    Styles.SELECTION_COLOR = "selection.color";
    Styles.SELECTION_BORDER = "selection.border";
    Styles.SELECTION_SHADOW_BLUR = "selection.shadow.blur";
    Styles.SELECTION_SHADOW_OFFSET_X = "selection.shadow.offset.x";
    Styles.SELECTION_SHADOW_OFFSET_Y = "selection.shadow.offset.y";
    Styles.SELECTION_TYPE = "selection.type";
    Styles.RENDER_COLOR = "render.color";
    Styles.RENDER_COLOR_BLEND_MODE = "render.color.blend.mode";
    Styles.ALPHA = "alpha";
    Styles.SHADOW_BLUR = "shadow.blur";
    Styles.SHADOW_COLOR = "shadow.color";
    Styles.SHADOW_OFFSET_X = "shadow.offset.x";
    Styles.SHADOW_OFFSET_Y = "shadow.offset.y";
    Styles.SHAPE_STROKE = "shape.stroke";
    Styles.SHAPE_STROKE_STYLE = "shape.stroke.style";
    Styles.SHAPE_LINE_DASH = "shape.line.dash";
    Styles.SHAPE_LINE_DASH_OFFSET = "shape.line.dash.offset";
    Styles.SHAPE_FILL_COLOR = "shape.fill.color";
    Styles.SHAPE_FILL_GRADIENT = "shape.fill.gradient";
    Styles.SHAPE_OUTLINE = "shape.outline";
    Styles.SHAPE_OUTLINE_STYLE = "shape.outline.style";
    Styles.LINE_CAP = "line.cap";
    Styles.LINE_JOIN = "line.join";
    Styles.LAYOUT_BY_PATH = "layout.by.path";
    Styles.BACKGROUND_COLOR = "background.color";
    Styles.BACKGROUND_GRADIENT = "background.gradient";
    Styles.BORDER = "border.width";
    Styles.BORDER_COLOR = "border.color";
    Styles.BORDER_LINE_DASH = "border.line.dash";
    Styles.BORDER_LINE_DASH_OFFSET = "border.line.dash.offset";
    Styles.BORDER_RADIUS = "border.radius";
    Styles.PADDING = "padding";
    Styles.IMAGE_BACKGROUND_COLOR = "image.background.color";
    Styles.IMAGE_BACKGROUND_GRADIENT = "image.background.gradient";
    Styles.IMAGE_BORDER = "image.border.width";
    Styles.IMAGE_BORDER_STYLE = Styles.IMAGE_BORDER_COLOR = "image.border.style";
    Styles.IMAGE_BORDER_LINE_DASH = "image.border.line.dash";
    Styles.IMAGE_BORDER_LINE_DASH_OFFSET = "image.border.line.dash.offset";
    Styles.IMAGE_RADIUS = Styles.IMAGE_BORDER_RADIUS = "image.radius";
    Styles.IMAGE_PADDING = "image.padding";
    Styles.IMAGE_Z_INDEX = "image.z.index";
    Styles.IMAGE_ADJUST = "image.adjust";
    Styles.IMAGE_ALPHA = "image.alpha";
    Styles.LABEL_ROTATE = "label.rotate";
    Styles.LABEL_POSITION = "label.position";
    Styles.LABEL_VISIBLE = "label.visible";
    Styles.LABEL_ANCHOR_POSITION = "label.anchor.position";
    Styles.LABEL_COLOR = "label.color";
    Styles.LABEL_FONT_SIZE = "label.font.size";
    Styles.LABEL_FONT_FAMILY = "label.font.family";
    Styles.LABEL_FONT_STYLE = "label.font.style";
    Styles.LABEL_PADDING = "label.padding";
    Styles.LABEL_POINTER_WIDTH = "label.pointer.width";
    Styles.LABEL_POINTER = "label.pointer";
    Styles.LABEL_RADIUS = "label.radius";
    Styles.LABEL_OFFSET_X = "label.offset.x";
    Styles.LABEL_OFFSET_Y = "label.offset.y";
    Styles.LABEL_SIZE = "label.size";
    Styles.LABEL_ALIGN_POSITION = "label.align.position";
    Styles.LABEL_BORDER = "label.border";
    Styles.LABEL_BORDER_STYLE = "label.border.style";
    Styles.LABEL_BACKGROUND_COLOR = "label.background.color";
    Styles.LABEL_BACKGROUND_GRADIENT = "label.background.gradient";
    Styles.LABEL_ROTATABLE = "label.rotatable";
    Styles.LABEL_SHADOW_BLUR = "label.shadow.blur";
    Styles.LABEL_SHADOW_COLOR = "label.shadow.color";
    Styles.LABEL_SHADOW_OFFSET_X = "label.shadow.offset.x";
    Styles.LABEL_SHADOW_OFFSET_Y = "label.shadow.offset.y";
    Styles.LABEL_Z_INDEX = "label.z.index";
    Styles.LABEL_ON_TOP = "label.on.top";
    Styles.GROUP_BACKGROUND_COLOR = "group.background.color";
    Styles.GROUP_BACKGROUND_GRADIENT = "group.background.gradient";
    Styles.GROUP_STROKE = "group.stroke";
    Styles.GROUP_STROKE_STYLE = "group.stroke.color";
    Styles.GROUP_STROKE_LINE_DASH = "group.stroke.line.dash";
    Styles.GROUP_STROKE_LINE_DASH_OFFSET = "group.stroke.line.dash.offset";
    Styles.EDGE_BUNDLE_LABEL_ROTATE = "edge.bundle.label.rotate";
    Styles.EDGE_BUNDLE_LABEL_POSITION = "edge.bundle.label.position";
    Styles.EDGE_BUNDLE_LABEL_ANCHOR_POSITION = "edge.bundle.label.anchor.position";
    Styles.EDGE_BUNDLE_LABEL_COLOR = "edge.bundle.label.color";
    Styles.EDGE_BUNDLE_LABEL_FONT_SIZE = "edge.bundle.label.font.size";
    Styles.EDGE_BUNDLE_LABEL_FONT_FAMILY = "edge.bundle.label.font.family";
    Styles.EDGE_BUNDLE_LABEL_FONT_STYLE = "edge.bundle.label.font.style";
    Styles.EDGE_BUNDLE_LABEL_PADDING = "edge.bundle.label.padding";
    Styles.EDGE_BUNDLE_LABEL_POINTER_WIDTH = "edge.bundle.label.pointer.width";
    Styles.EDGE_BUNDLE_LABEL_POINTER = "edge.bundle.label.pointer";
    Styles.EDGE_BUNDLE_LABEL_RADIUS = "edge.bundle.label.radius";
    Styles.EDGE_BUNDLE_LABEL_OFFSET_X = "edge.bundle.label.offset.x";
    Styles.EDGE_BUNDLE_LABEL_OFFSET_Y = "edge.bundle.label.offset.y";
    Styles.EDGE_BUNDLE_LABEL_BORDER = "edge.bundle.label.border";
    Styles.EDGE_BUNDLE_LABEL_BORDER_STYLE = "edge.bundle.label.border.color";
    Styles.EDGE_BUNDLE_LABEL_BACKGROUND_COLOR = "edge.bundle.label.background.color";
    Styles.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT = "edge.bundle.label.background.gradient";
    Styles.EDGE_BUNDLE_LABEL_ROTATABLE = "edge.bundle.label.rotatable";
    Styles.EDGE_WIDTH = "edge.width";
    Styles.EDGE_COLOR = "edge.color";
    Styles.EDGE_OUTLINE = "edge.outline";
    Styles.EDGE_OUTLINE_STYLE = "edge.outline.style";
    Styles.EDGE_LINE_DASH = "edge.line.dash";
    Styles.EDGE_LINE_DASH_OFFSET = "edge.line.dash.offset";
    Styles.EDGE_FROM_OFFSET = "edge.from.offset";
    Styles.EDGE_TO_OFFSET = "edge.to.offset";
    Styles.EDGE_BUNDLE_GAP = "edge.bundle.gap";
    Styles.EDGE_LOOPED_EXTAND = "edge.looped.extand";
    Styles.EDGE_EXTEND = "edge.extend";
    Styles.EDGE_CONTROL_POINT = "edge.control.point";
    Styles.EDGE_SPLIT_BY_PERCENT = "edge.split.by.percent";
    Styles.EDGE_SPLIT_PERCENT = "edge.split.percent";
    Styles.EDGE_SPLIT_VALUE = "edge.split.value";
    Styles.EDGE_CORNER = "edge.corner";
    Styles.EDGE_CORNER_RADIUS = "edge.corner.radius";
    Styles.EDGE_FROM_AT_EDGE = "edge.from.at.edge";
    Styles.EDGE_TO_AT_EDGE = "edge.to.at.edge";
    Styles.ARROW_FROM = "arrow.from";
    Styles.ARROW_FROM_SIZE = "arrow.from.size";
    Styles.ARROW_FROM_OFFSET = "arrow.from.offset";
    Styles.ARROW_FROM_STROKE = "arrow.from.stroke";
    Styles.ARROW_FROM_STROKE_STYLE = "arrow.from.stroke.style";
    Styles.ARROW_FROM_OUTLINE = "arrow.from.outline";
    Styles.ARROW_FROM_OUTLINE_STYLE = "arrow.from.outline.style";
    Styles.ARROW_FROM_LINE_DASH = "arrow.from.line.dash";
    Styles.ARROW_FROM_LINE_DASH_OFFSET = "arrow.from.line.dash.offset";
    Styles.ARROW_FROM_FILL_COLOR = "arrow.from.fill.color";
    Styles.ARROW_FROM_FILL_GRADIENT = "arrow.from.fill.gradient";
    Styles.ARROW_FROM_LINE_CAP = "arrow.from.line.cap";
    Styles.ARROW_FROM_LINE_JOIN = "arrow.from.line.join";
    Styles.ARROW_TO = "arrow.to";
    Styles.ARROW_TO_SIZE = "arrow.to.size";
    Styles.ARROW_TO_OFFSET = "arrow.to.offset";
    Styles.ARROW_TO_STROKE = "arrow.to.stroke";
    Styles.ARROW_TO_STROKE_STYLE = "arrow.to.stroke.style";
    Styles.ARROW_TO_OUTLINE = "arrow.to.outline";
    Styles.ARROW_TO_OUTLINE_STYLE = "arrow.to.outline.style";
    Styles.ARROW_TO_LINE_DASH = "arrow.to.line.dash";
    Styles.ARROW_TO_LINE_DASH_OFFSET = "arrow.to.line.dash.offset";
    Styles.ARROW_TO_FILL_COLOR = "arrow.to.fill.color";
    Styles.ARROW_TO_FILL_GRADIENT = "arrow.to.fill.gradient";
    Styles.ARROW_TO_LINE_CAP = "arrow.to.line.cap";
    Styles.ARROW_TO_LINE_JOIN = "arrow.to.line.join";

    var PY = new us;
    PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SELECTION_TYPE, null, "selectionType");
    PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SELECTION_BORDER, null, "selectionBorder");
    PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SELECTION_SHADOW_BLUR, null, "selectionShadowBlur");
    PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SELECTION_COLOR, null, "selectionColor");
    PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SELECTION_SHADOW_OFFSET_X, null, "selectionShadowOffsetX");
    PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SELECTION_SHADOW_OFFSET_Y, null, "selectionShadowOffsetY");
    PY._2k(Consts.PROPERTY_TYPE_ACCESSOR, "name", "label", "data");
    PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_VISIBLE, "label", "visible");
    PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_POSITION, "label", "position");
    PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_ANCHOR_POSITION, "label", "anchorPosition");
    PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_COLOR, "label", "color");
    PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_FONT_SIZE, "label", "fontSize");
    PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_BORDER, "label", "border");
    PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_BORDER_STYLE, "label", "borderColor");
    PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_BACKGROUND_COLOR, "label", "backgroundColor");
    PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_ON_TOP, "label", "showOnTop");
    false || (PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHADOW_BLUR, null, "shadowBlur"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHADOW_COLOR, null, "shadowColor"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHADOW_OFFSET_X, null, "shadowOffsetX"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHADOW_OFFSET_Y, null, "shadowOffsetY"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_FONT_FAMILY, "label", "fontFamily"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_FONT_STYLE, "label", "fontStyle"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_ALIGN_POSITION, "label", "alignPosition"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_ROTATE, "label", "rotate"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_PADDING, "label", "padding"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_POINTER_WIDTH, "label", "pointerWidth"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_POINTER, "label", "showPointer"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_RADIUS, "label", "borderRadius"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_OFFSET_X, "label", "offsetX"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_OFFSET_Y, "label", "offsetY"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_ROTATABLE, "label", "rotatable"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_BACKGROUND_GRADIENT, "label", "backgroundGradient"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_SIZE, "label", "size"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_SHADOW_BLUR, "label", "shadowBlur"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_SHADOW_COLOR, "label", "shadowColor"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_SHADOW_OFFSET_X, "label", "shadowOffsetX"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_SHADOW_OFFSET_Y, "label", "shadowOffsetY"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LABEL_Z_INDEX, "label", "zIndex"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.RENDER_COLOR, null, "renderColor"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.RENDER_COLOR_BLEND_MODE, null, "renderColorBlendMode"),
        PY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ALPHA, null, "alpha"));

    var $Y = new us;
    $Y._2k(Consts.PROPERTY_TYPE_ACCESSOR, "location");
    $Y._2k(Consts.PROPERTY_TYPE_ACCESSOR, "anchorPosition", null, "_2i");
    $Y._2k(Consts.PROPERTY_TYPE_ACCESSOR, "rotate", null, "rotate");
    false || ($Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.BACKGROUND_COLOR, null, "backgroundColor"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.BACKGROUND_GRADIENT, null, "backgroundGradient"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.PADDING, null, "padding"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.BORDER, null, "border"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.BORDER_RADIUS, null, "borderRadius"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.BORDER_COLOR, null, "borderColor"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.BORDER_LINE_DASH, null, "borderLineDash"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.BORDER_LINE_DASH_OFFSET, null, "borderLineDashOffset")),
        $Y._2k(Consts.PROPERTY_TYPE_ACCESSOR, "image", "image", "data", "_ndd"),
        $Y._2k(Consts.PROPERTY_TYPE_ACCESSOR, "size", "image", "size"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHAPE_STROKE, "image", "lineWidth"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHAPE_STROKE_STYLE, "image", "strokeStyle"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHAPE_FILL_COLOR, "image", "fillColor"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LAYOUT_BY_PATH, "image", "layoutByPath"),
    false || ($Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_ADJUST, "image", "adjustType"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHAPE_OUTLINE, "image", "outline"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHAPE_OUTLINE_STYLE, "image", "outlineStyle"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHAPE_FILL_GRADIENT, "image", "fillGradient"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHAPE_LINE_DASH, "image", "lineDash"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHAPE_LINE_DASH_OFFSET, "image", "lineDashOffset"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LINE_CAP, "image", "lineCap"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LINE_JOIN, "image", "lineJoin"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_BACKGROUND_COLOR, "image", "backgroundColor"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_BACKGROUND_GRADIENT, "image", "backgroundGradient"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_PADDING, "image", "padding"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER, "image", "border"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER_RADIUS, "image", "borderRadius"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER_COLOR, "image", "borderColor"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER_LINE_DASH, "image", "borderLineDash"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER_LINE_DASH_OFFSET, "image", "borderLineDashOffset"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_Z_INDEX, "image", "zIndex"),
        $Y._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_ALPHA, "image", "alpha")),
        $Y._2k(Consts.PROPERTY_TYPE_ACCESSOR, "expanded", null, null, "checkBody"),
        $Y._2k(Consts.PROPERTY_TYPE_ACCESSOR, "enableSubNetwork", null, null, "checkBody");

    var BY = new us;
    BY._2k(Consts.PROPERTY_TYPE_ACCESSOR, "groupType", null, null, "_5c");
    BY._2k(Consts.PROPERTY_TYPE_ACCESSOR, "groupImage", null, null, "_5c");
    BY._2k(Consts.PROPERTY_TYPE_ACCESSOR, "minSize", null, null, "_5c");
    BY._2k(Consts.PROPERTY_TYPE_ACCESSOR, "padding", null, null, "_5c");
    BY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.GROUP_BACKGROUND_COLOR, "shape", "fillColor");
    BY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.GROUP_BACKGROUND_GRADIENT, "shape", "fillGradient");
    BY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.GROUP_STROKE, "shape", "lineWidth");
    BY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.GROUP_STROKE_STYLE, "shape", "strokeStyle");
    BY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.GROUP_STROKE_LINE_DASH, "shape", "lineDash");
    BY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.GROUP_STROKE_LINE_DASH_OFFSET, "shape", "lineDashOffset");

    var FY = new us;
    FY._2k(Consts.PROPERTY_TYPE_ACCESSOR, "from", "shape", null, "_4x");
    FY._2k(Consts.PROPERTY_TYPE_ACCESSOR, "to", "shape", null, "_4x");
    FY._2k(Consts.PROPERTY_TYPE_ACCESSOR, "edgeType", "shape", null, "_4x");
    FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_WIDTH, "shape", "lineWidth");
    FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_COLOR, "shape", "strokeStyle");
    FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM, "shape", "fromArrow");
    FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO, "shape", "toArrow");
    false || (FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_FROM_AT_EDGE, null, "fromAtEdge", "_4x"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_TO_AT_EDGE, null, "toAtEdge", "_4x"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_OUTLINE, "shape", "outline"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_OUTLINE_STYLE, "shape", "outlineStyle"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_LINE_DASH, "shape", "lineDash"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_LINE_DASH_OFFSET, "shape", "lineDashOffset"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_CONTROL_POINT, "shape", null, "_4x"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_FROM_OFFSET, "shape", null, "_4x"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_TO_OFFSET, "shape", null, "_4x"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LINE_CAP, "shape", "lineCap"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LINE_JOIN, "shape", "lineJoin"),
        FY._2k(Consts.PROPERTY_TYPE_ACCESSOR, "path.segment", null, null, "_4x", true),
        FY._2k(Consts.PROPERTY_TYPE_ACCESSOR, "angle", null, null, "_4x", true),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_SIZE, "shape", "fromArrowSize"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_OFFSET, "shape", "fromArrowOffset"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_STROKE, "shape", "fromArrowStroke"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_STROKE_STYLE, "shape", "fromArrowStrokeStyle"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_OUTLINE, "shape", "fromArrowOutline"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_OUTLINE_STYLE, "shape", "fromArrowOutlineStyle"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_FILL_COLOR, "shape", "fromArrowFillColor"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_FILL_GRADIENT, "shape", "fromArrowFillGradient"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_LINE_DASH, "shape", "fromArrowLineDash"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_LINE_DASH_OFFSET, "shape", "fromArrowLineDashOffset"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_LINE_JOIN, "shape", "fromArrowLineJoin"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_LINE_CAP, "shape", "fromArrowLineCap"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_SIZE, "shape", "toArrowSize"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_OFFSET, "shape", "toArrowOffset"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_STROKE, "shape", "toArrowStroke"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_STROKE_STYLE, "shape", "toArrowStrokeStyle"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_OUTLINE, "shape", "toArrowOutline"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_OUTLINE_STYLE, "shape", "toArrowOutlineStyle"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_FILL_COLOR, "shape", "toArrowFillColor"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_FILL_GRADIENT, "shape", "toArrowFillGradient"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_LINE_DASH, "shape", "toArrowLineDash"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_LINE_DASH_OFFSET, "shape", "toArrowLineDashOffset"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_LINE_JOIN, "shape", "toArrowLineJoin"),
        FY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_LINE_CAP, "shape", "toArrowLineCap"));

    var GY = new us;
    GY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_COLOR, "bundleLabel", "color");
    GY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_POSITION, "bundleLabel", "position");
    GY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_ANCHOR_POSITION, "bundleLabel", "anchorPosition");
    GY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_FONT_SIZE, "bundleLabel", "fontSize");
    GY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_ROTATABLE, "bundleLabel", "rotatable");
    false || (GY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_ROTATE, "bundleLabel", "rotate"),
        GY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_FONT_FAMILY, "bundleLabel", "fontFamily"),
        GY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_FONT_STYLE, "bundleLabel", "fontStyle"),
        GY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_PADDING, "bundleLabel", "padding"),
        GY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_POINTER_WIDTH, "bundleLabel", "pointerWidth"),
        GY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_POINTER, "bundleLabel", "showPointer"),
        GY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_RADIUS, "bundleLabel", "borderRadius"),
        GY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_OFFSET_X, "bundleLabel", "offsetX"),
        GY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_OFFSET_Y, "bundleLabel", "offsetY"),
        GY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_BORDER, "bundleLabel", "border"),
        GY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_BORDER_STYLE, "bundleLabel", "borderColor"),
        GY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_BACKGROUND_COLOR, "bundleLabel", "backgroundColor"),
        GY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT, "bundleLabel", "backgroundGradient"));

    var zY = new us;
    zY._2k(Consts.PROPERTY_TYPE_ACCESSOR, "location");
    zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.BACKGROUND_COLOR, null, "backgroundColor");
    zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.BACKGROUND_GRADIENT, null, "backgroundGradient");
    zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.PADDING, null, "padding");
    zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.BORDER, null, "border");
    zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.BORDER_RADIUS, null, "borderRadius");
    zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.BORDER_COLOR, null, "borderColor");
    zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.BORDER_LINE_DASH, null, "borderLineDash");
    zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.BORDER_LINE_DASH_OFFSET, null, "borderLineDashOffset");
    zY._2k(Consts.PROPERTY_TYPE_ACCESSOR, "rotate", null, "rotate");
    zY._2k(Consts.PROPERTY_TYPE_ACCESSOR, "path.segment", null, null, "invalidateShape");
    zY._2k(Consts.PROPERTY_TYPE_ACCESSOR, "path", "image", "data");
    zY._2k(Consts.PROPERTY_TYPE_ACCESSOR, "size", "image", "size");
    zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHAPE_STROKE, "image", "lineWidth");
    zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHAPE_STROKE_STYLE, "image", "strokeStyle");
    zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHAPE_FILL_COLOR, "image", "fillColor");
    zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHAPE_FILL_GRADIENT, "image", "fillGradient");
    false || (zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHAPE_OUTLINE, "image", "outline"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHAPE_OUTLINE_STYLE, "image", "outlineStyle"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHAPE_LINE_DASH, "image", "lineDash"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.SHAPE_LINE_DASH_OFFSET, "image", "lineDashOffset"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LINE_CAP, "image", "lineCap"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LINE_JOIN, "image", "lineJoin"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.LAYOUT_BY_PATH, "image", "layoutByPath"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_BACKGROUND_COLOR, "image", "backgroundColor"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_BACKGROUND_GRADIENT, "image", "backgroundGradient"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_PADDING, "image", "padding"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER, "image", "border"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER_RADIUS, "image", "borderRadius"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER_COLOR, "image", "borderColor"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER_LINE_DASH, "image", "borderLineDash"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.IMAGE_BORDER_LINE_DASH_OFFSET, "image", "borderLineDashOffset"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM, "image", "fromArrow"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_SIZE, "image", "fromArrowSize"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_OFFSET, "image", "fromArrowOffset"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_STROKE, "image", "fromArrowStroke"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_STROKE_STYLE, "image", "fromArrowStrokeStyle"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_FILL_COLOR, "image", "fromArrowFillColor"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_FILL_GRADIENT, "image", "fromArrowFillGradient"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_LINE_DASH, "image", "fromArrowLineDash"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_LINE_DASH_OFFSET, "image", "fromArrowLineDashOffset"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_LINE_JOIN, "image", "fromArrowLineJoin"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_FROM_LINE_CAP, "image", "fromArrowLineCap"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_SIZE, "image", "toArrowSize"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_OFFSET, "image", "toArrowOffset"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO, "image", "toArrow"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_STROKE, "image", "toArrowStroke"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_STROKE_STYLE, "image", "toArrowStrokeStyle"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_FILL_COLOR, "image", "toArrowFillColor"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_FILL_GRADIENT, "image", "toArrowFillGradient"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_LINE_DASH, "image", "toArrowLineDash"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_LINE_DASH_OFFSET, "image", "toArrowLineDashOffset"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_LINE_JOIN, "image", "toArrowLineJoin"),
        zY._2k(Consts.PROPERTY_TYPE_STYLE, Styles.ARROW_TO_LINE_CAP, "image", "toArrowLineCap"));

    var HY = function (t, i) {
        return t = t.zIndex, i = i.zIndex, t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0);
    };

    var ElementUI = function (t, i) {
        this.uiBounds = new Rect, doSuperConstructor(this, ElementUI, arguments), this.id = this.$data.id, this.graph = i, this._fo = [], this._ndj = new us;
    };

    ElementUI.prototype = {
        syncSelection: false,
        graph: null,
        layoutByAnchorPoint: false,
        _ndj: null,
        _fo: null,
        addChild: function (t, i) {
            t._k6 = this;
            i !== n ? g(this._fo, t, i) : this._fo.push(t);
            t._dx && this._nc0(t);
            this.invalidateChildrenIndex();
            this.invalidateSize();
            this.$invalidateChild = true;
        },
        removeChild: function (t) {
            this._ndj.removeBinding(t);
            t._k6 = null;
            x(this._fo, t);
            this._k9 && this._k9.remove(t);
            this.invalidateSize();
            this.$invalidateChild = true;
        },
        getProperty: function (t, i) {
            return i == Consts.PROPERTY_TYPE_STYLE ? this.graph.getStyle(this.$data, t) : i == Consts.PROPERTY_TYPE_CLIENT ? this.$data.get(t) : this.$data[t];
        },
        getStyle: function (t) {
            return this.graph.getStyle(this.$data, t);
        },
        _$w: function (t, i, n) {
            var e = this._ndj.onBindingPropertyChange(this, t, i, n);
            return PY.onBindingPropertyChange(this, t, i, n) || e;
        },
        onPropertyChange: function (t) {
            if ("zIndex" == t.kind) {
                return this.invalidateRender(), true;
            }
            if ("ui" == t.type) {
                if ("invalidate" == t.kind) {
                    return this.invalidate(), true;
                }
                var i = t.value;
                return i && i.ui ? ("add" == t.kind ? this._9m(i) : "remove" == t.kind && this.removeChild(i.ui), true) : false;
            }
            return this._$w(t.kind, t.propertyType || Consts.PROPERTY_TYPE_ACCESSOR, t.value);
        },
        label: null,
        initLabel: function () {
            var t = new LabelUI;
            t.name = "label";
            this.addChild(t);
            this.label = t;
        },
        initialize: function () {
            this.initLabel();
            this.$data._nd5 && this.$data._nd5.forEach(this._9m, this);
            PY.initBindingProperties(this);
            this._ndj.initBindingProperties(this, false);
        },
        addBinding: function (t, i) {
            return i.property ? (i.target = t, void this._ndj._1v(i.property, i)) : false;
        },
        _fv: function (t, i) {
            var n = this.$data;
            if (!n._nd5) {
                return false;
            }
            var e = n._nd5.getById(t.id);
            if (!e || !e.bindingProperties) {
                return false;
            }
            var s = e.bindingProperties;
            if (isArray(s)) {
                var h = false;
                return forEach(s, function (t) {
                    return "data" == t.bindingProperty ? (h = _s(n, i, t.property, t.propertyType), false) : void 0;
                }, this), h;
            }
            return "data" == s.bindingProperty ? _s(n, i, s.property, s.propertyType) : false;
        },
        _9m: function (t) {
            var i = t.ui;
            if (i) {
                var n = t.bindingProperties;
                n && (Array.isArray(n) ? n.forEach(function (t) {
                    this.addBinding(i, t);
                }, this) : this.addBinding(i, n));
                this.addChild(i);
            }
        },
        validate: function () {
            return this._nc1 || (this.initialize(), this._nc1 = true), this.doValidate();
        },
        _$d: true,
        invalidateChildrenIndex: function () {
            this._$d = true;
        },
        doValidate: function () {
            if (this._1d && (this._1d = false, this.validateChildren() && (this.measure(), this.$invalidateSize = true),
                this._$d && (this._$d = false, isChrome ? this._fo = d(this._fo, HY) : this._fo.sort(HY)))
                    , zn.call(this) && (this.$invalidateRotate = true), this.$invalidateRotate) {
                oq.call(this);
                this.uiBounds.setByRect(this._fs);
                var t = this.$selectionBorder || 0;
                var i = Math.max(this.$selectionBorder || 0, this.$shadowOffsetX || 0, this.$selectionShadowOffsetX || 0);
                var n = Math.max(this.$shadowOffsetY || 0, this.$selectionShadowOffsetY || 0);
                var e = Math.max(2 * t, this.$shadowBlur, this.$selectionShadowBlur);
                e += Defaults.UI_BOUNDS_GROW || 0;
                var s = e - i;
                var h = e + i;
                var r = e - n;
                var a = e + n;
                return 0 > s && (s = 0), 0 > h && (h = 0), 0 > r && (r = 0), 0 > a && (a = 0), this.uiBounds.grow(r, s, a, h), this.onBoundsChanged && this.onBoundsChanged(), this.$invalidateBounds = true, true;
            }
        },
        validateChildren: function () {
            var t = this.$invalidateChild;
            this.$invalidateChild = false;
            var i = this._ncody;
            var n = this.bodyChanged;
            i && (i.$renderColor = this.$renderColor, i.$renderColorBlendMode = this.$renderColorBlendMode,
                i.$shadowColor = this.$shadowColor, i.$shadowBlur = this.$shadowBlur, i.$shadowOffsetX = this.$shadowOffsetX,
                i.$shadowOffsetY = this.$shadowOffsetY);
            this.bodyChanged = false;
            i && i._1d && (n = i.validate() || n, i.$x = 0, i.$y = 0, i.$invalidateRotate && oq.call(i), t = true);
            for (var e = 0, s = this._fo.length; s > e; e++) {
                var h = this._fo[e];
                if (h != i) {
                    var r = h._1d && h.validate();
                    (r || n) && h._i6 && Wn(h, i, this);
                    !t && r && (t = true);
                }
            }
            return t;
        },
        measure: function () {
            this._jo.clear();
            for (var t, i, n = 0, e = this._fo.length; e > n; n++) {
                t = this._fo[n];
                t._i6 && (i = t._fs, i.width <= 0 || i.height <= 0 || this._jo.addRect(t.$x + i.x, t.$y + i.y, i.width, i.height));
            }
        },
        _k9: null,
        _nc0: function (t) {
            if (!this._k9) {
                if (!t.showOnTop) {
                    return;
                }
                return this._k9 = new HashList, this._k9.add(t);
            }
            return t.showOnTop ? this._k9.add(t) : this._k9.remove(t);
        },
        draw: function (t, i, n) {
            for (var e, s = 0, h = this._fo.length; h > s; s++) {
                e = this._fo[s];
                e._i6 && !e.showOnTop && e._jk(t, i, n, this);
            }
        },
        _9h: function (t, i) {
            if (!this._i6 || !this._k9 || !this._k9.length) {
                return false;
            }
            t.save();
            t.translate(this.$x, this.$y);
            this.$rotatable && this.$_hostRotate && t.rotate(this.$_hostRotate);
            (this.offsetX || this.offsetY) && t.translate(this.offsetX, this.offsetY);
            this.$rotate && t.rotate(this.$rotate);
            this.$layoutByAnchorPoint && this._nc4 && t.translate(-this._nc4.x, -this._nc4.y);
            this.shadowColor && (t.shadowColor = this.shadowColor, t.shadowBlur = this.shadowBlur * i, t.shadowOffsetX = this.shadowOffsetX * i, t.shadowOffsetY = this.shadowOffsetY * i);
            t.beginPath();
            for (var n, e = 0, s = this._fo.length; s > e; e++) {
                n = this._fo[e];
                n._i6 && n.showOnTop && n._jk(t, i, this.selected, this);
            }
            t.restore();
        },
        doHitTest: function (t, i, n) {
            if (n) {
                if (!this._jo.intersectsRect(t - n, i - n, 2 * n, 2 * n)) {
                    return false;
                }
            } else if (!this._jo.intersectsPoint(t, i)) {
                return false;
            }
            return this.hitTestChildren(t, i, n);
        },
        hitTestChildren: function (t, i, n) {
            for (var e, s = this._fo.length - 1; s >= 0; s--) {
                if (e = this._fo[s], e._i6 && e.hitTest(t, i, n)) {
                    return e;
                }
            }
            return false;
        },
        destroy: function () {
            this._iaed = true;
            for (var t, i = this._fo.length - 1; i >= 0; i--) {
                t = this._fo[i];
                t.destroy();
            }
        }
    };

    extend(ElementUI, BaseUI);

    defineProperties(ElementUI.prototype, {
        renderColorBlendMode: {
            get: function () {
                return this.$renderColorBlendMode;
            },
            set: function (t) {
                this.$renderColorBlendMode = t;
                this._1d = true;
                this.body && (this.body.renderColorBlendMode = this.$renderColorBlendMode);
            }
        },
        renderColor: {
            get: function () {
                return this.$renderColor;
            },
            set: function (t) {
                this.$renderColor = t;
                this._1d = true;
                this.body && (this.body.renderColor = this.$renderColor);
            }
        },
        bodyBounds: {
            get: function () {
                if (this.$invalidateBounds) {
                    this.$invalidateBounds = false;
                    var t;
                    var i = this.body;
                    t = i && i._i6 && !this._$u() ? i._fs.clone() : this._fs.clone();
                    this.rotate && Si(t, this.rotate, t);
                    t.x += this.$x;
                    t.y += this.$y;
                    this._do = t;
                }
                return this._do;
            }
        },
        bounds: {
            get: function () {
                return new Rect((this.$x || 0) + this.uiBounds.x, (this.$y || 0) + this.uiBounds.y, this.uiBounds.width, this.uiBounds.height);
            }
        },
        body: {
            get: function () {
                return this._ncody;
            },
            set: function (t) {
                t && this._ncody != t && (this._ncody = t, this.bodyChanged = true, this.invalidateSize());;
            }
        }
    });

    Defaults.UI_BOUNDS_GROW = 1;

    var ImageUI = function () {
        doSuperConstructor(this, ImageUI, arguments);
    };

    ImageUI.prototype = {
        strokeStyle: "#000",
        lineWidth: 0,
        fillColor: null,
        fillGradient: null,
        _k4: 1,
        _jy: 1,
        outline: 0,
        onDataChanged: function (t) {
            doSuper(this, ImageUI, "onDataChanged", arguments);
            this._lb && this._7p && this._lb._6j(this._7p, this);
            t && this._ndd(t);
        },
        _ndd: function (t) {
            this._lb = gn(t);
            this._lb.validate();
            (this._lb._ls == 12 || this._lb._67()) && (this._7p || (this._7p = function () {
                this.invalidateData();
                this._k6 && this._k6.graph && (this._k6.invalidateSize(), this._k6.graph.invalidate());
            }), this._lb._nbn(this._7p, this));
        },
        _lb: null,
        initialize: function () {
            this._ndd(this.$data);
        },
        _55: function () {
            return this._lb && this._lb.draw;
        },
        _9r: function (t) {
            if (!t || t.width <= 0 || t.height <= 0 || !this.$size || !(this.size instanceof Object)) {
                return this._k4 = 1, void (this._jy = 1);
            }
            var i = this.size.width;
            var e = this.size.height;
            if ((i === n || null === i) && (i = -1), (e === n || null === e) && (e = -1), 0 > i && 0 > e) {
                return this._k4 = 1, void (this._jy = 1);
            }
            var s;
            var h;
            var r = t.width;
            var a = t.height;
            i >= 0 && (s = i / r), e >= 0 && (h = e / a), 0 > i ? s = h : 0 > e && (h = s);
            this._k4 = s;
            this._jy = h;
        },
        validateSize: function () {
            if (this.$invalidateScale) {
                this.$invalidateScale = false;
                var t = this._originalBounds;
                this._k4;
                this._jy;
                this._9r(t);
                this.setMeasuredBounds(t.width * this._k4, t.height * this._jy, t.x * this._k4, t.y * this._jy);
            }
        },
        measure: function () {
            var t = this._lb.getBounds(this.lineWidth + this.outline);
            return t ? (this.$invalidateScale = true, void (this._originalBounds = t.clone())) : void this._jo.set(0, 0, 0, 0);
        },
        onBoundsChanged: function () {
            this.$invalidateFillGradient = true;
        },
        _1n: function () {
            this.$invalidateFillGradient = false;
            this._fillGradient = this.fillGradient ? Gradient.prototype.generatorGradient.call(this.$fillGradient, this._7k) : null;
        },
        _kb: function (t) {
            var i;
            var n;
            if ("flip" == this.$adjustType) {
                i = 1;
                n = -1;
            } else {
                if ("mirror" != this.$adjustType) {
                    return;
                }
                i = -1;
                n = 1
            }
            var e = this._jo.cx;
            var s = this._jo.cy;
            t.translate(e, s);
            t.scale(i, n);
            t.translate(-e, -s);
        },
        draw: function (t, i, n, e) {
            if (this._k4 && this._jy) {
                if (this.$invalidateFillGradient && this._1n(), t.save(), this.$adjustType && this._kb(t), this._lb._ls == 30) {
                    return t.scale(this._k4, this._jy), this._lb._mg.draw(t, i, this, n, e || this), void t.restore();
                }
                n && this._7m(t, i, e);
                this._lb.draw(t, i, this, this._k4, this._jy);
                t.restore();
            }
        },
        doHitTest: function (t, i, n) {
            if (this._lb.hitTest) {
                if ("flip" == this.$adjustType) {
                    var e = this._jo.cy;
                    i = 2 * e - i;
                } else if ("mirror" == this.$adjustType) {
                    var s = this._jo.cx;
                    t = 2 * s - t;
                }
                t /= this._k4;
                i /= this._jy;
                var h = (this._k4 + this._jy) / 2;
                return h > 1 && (n /= h, n = 0 | n), this._lb._mg instanceof Path ? this._lb._mg.hitTest(t, i, n, true, this.$lineWidth, this.$fillColor || this.$fillGradient) : this._lb.hitTest(t, i, n);
            }
            return true;
        },
        $invalidateScale: true,
        $invalidateFillGradient: true
    };

    extend(ImageUI, BaseUI);

    fs(ImageUI.prototype, {
        adjustType: {},
        fillColor: {},
        size: { validateFlags: ["Size", "Scale"] },
        fillGradient: { validateFlags: ["FillGradient"] }
    });

    defineProperties(ImageUI.prototype, {
        originalBounds: {
            get: function () {
                return this._originalBounds
            }
        }
    });

    Defaults.ALIGN_POSITION = Position.CENTER_MIDDLE;

    var LabelUI = function () {
        doSuperConstructor(this, LabelUI, arguments);
        this.color = Defaults.LABEL_COLOR;
    };

    LabelUI.prototype = {
        color: Defaults.LABEL_COLOR,
        showPointer: true,
        fontSize: null,
        fontFamily: null,
        fontStyle: null,
        _h4: null,
        alignPosition: null,
        measure: function () {
            this.font;
            var t = Ni(this.$data, this.$fontSize, this.$fontFamily, this.$fontStyle, Defaults.LINE_HEIGHT, this.$font);
            if (this._h4 = t, this.$size) {
                var i = this.$size.width || 0;
                var n = this.$size.height || 0;
                return this.setMeasuredBounds(i > t.width ? i : t.width, n > t.height ? n : t.height);
            }
            return this.setMeasuredBounds(t.width, t.height);
        },
        doHitTest: function (t, i, n) {
            return this.$data ? In(t, i, n, this) : false;
        },
        draw: function (t, i, n, e) {
            if (n && this._7m(t, i, e), this.$fontSize || Defaults.FONT_SIZE, this.$rotatable && this.$_hostRotate) {
                var s = cn(this.$_hostRotate);
                s > rz && 3 * rz > s && (t.translate(this._jo.width / 2, this._jo.height / 2), t.rotate(Math.PI), t.translate(-this._jo.width / 2, -this._jo.height / 2));
            }
            var h = this.alignPosition || Defaults.ALIGN_POSITION;
            var r = h.horizontalPosition;
            var a = h.verticalPosition;
            var o = 0;
            r == "c" ? (r = "center", o += this._jo.width / 2) : r == "r" ? (r = "right", o += this._jo.width) : r = "left";
            var f = 0;
            a == "m" ? f = (this._jo.height - this._h4.height) / 2 : a == "b" && (f = this._jo.height - this._h4.height), t.fillStyle = this.color, Di(t, this.$data, o, f, r, this.$fontFamily, this.$fontSize, this.$fontStyle, Defaults.LINE_HEIGHT, this.$font);
        },
        _55: function () {
            return null != this.$data || this.$size;
        },
        $invalidateFont: true
    };

    extend(LabelUI, BaseUI);

    fs(LabelUI.prototype, {
        size: { validateFlags: ["Data"] },
        fontStyle: { validateFlags: ["Data", "Font"] },
        fontSize: { validateFlags: ["Data", "Font"] },
        fontFamily: { validateFlags: ["Data", "Font"] }
    });

    defineProperties(LabelUI.prototype, {
        font: {
            get: function () {
                return this.$invalidateFont && (this.$invalidateFont = false, this.$font = (this.$fontStyle || Defaults.FONT_STYLE) + " " + (this.$fontSize || Defaults.FONT_SIZE) + "px " + (this.$fontFamily || Defaults.FONT_FAMILY)), this.$font;
            }
        }
    });

    var UY = function (t) {
        t = t || new Path;
        this.pathBounds = new Rect;
        doSuperConstructor(this, UY, [t]);
    };

    UY.prototype = {
        layoutByPath: true,
        layoutByAnchorPoint: false,
        measure: function () {
            this.$invalidateFromArrow = true;
            this.$invalidateToArrow = true;
            this.$data.getBounds(this.$lineWidth + this.$outline, this.pathBounds);
            this.setMeasuredBounds(this.pathBounds);
        },
        validateSize: function () {
            if (this.$invalidateFromArrow || this.$invalidateToArrow) {
                var t = this.pathBounds.clone();
                if (this.$invalidateFromArrow) {
                    this.$invalidateFromArrow = false;
                    var i = this.validateFromArrow();
                    i && t.add(i);
                }
                if (this.$invalidateToArrow) {
                    this.$invalidateToArrow = false;
                    var i = this.validateToArrow();
                    i && t.add(i);
                }
                this.setMeasuredBounds(t);
            }
        },
        validateFromArrow: function () {
            if (!this.$data._jg || !this.$fromArrow) {
                return void (this.$fromArrowShape = null);
            }
            var t = this.$data;
            var i = 0;
            var n = 0;
            var e = this.$fromArrowOffset;
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0, i > 0 && 1 > i && (i *= t._jg));
            this.fromArrowLocation = t.getLocation(i, n);
            this.fromArrowLocation.rotate = Math.PI + this.fromArrowLocation.rotate || 0;
            this.$fromArrowShape = $s(this.$fromArrow, this.$fromArrowSize);
            var s = this.$fromArrowShape.getBounds(this.fromArrowStyles.lineWidth + this.fromArrowStyles.outline);
            return this.fromArrowFillGradient instanceof Qunee.Gradient ? this.fromArrowStyles._fillGradient = Gradient.prototype.generatorGradient.call(this.fromArrowFillGradient, s) : this.fromArrowStyles && (this.fromArrowStyles._fillGradient = null), s.offset(this.fromArrowLocation.x, this.fromArrowLocation.y), Ii(s, this.fromArrowLocation.rotate, s, this.fromArrowLocation.x, this.fromArrowLocation.y), s;
        },
        validateToArrow: function () {
            if (!this.$data._jg || !this.$toArrow) {
                return void (this.$toArrowShape = null);
            }
            var t = this.$data;
            var i = 0;
            var n = 0;
            var e = this.$toArrowOffset;
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0);
            0 > i && i > -1 && (i *= t._jg);
            i += t._jg;
            this.toArrowLocation = t.getLocation(i, n);
            this.$toArrowShape = $s(this.$toArrow, this.$toArrowSize);
            var s = this.$toArrowShape.getBounds(this.toArrowStyleslineWidth + this.toArrowStyles.outline);
            return this.toArrowFillGradient instanceof Qunee.Gradient ? this.toArrowStyles._fillGradient = Gradient.prototype.generatorGradient.call(this.toArrowFillGradient, s) : this.toArrowStyles && (this.toArrowStyles._fillGradient = null), s.offset(this.toArrowLocation.x, this.toArrowLocation.y), Ii(s, this.toArrowLocation.rotate, s, this.toArrowLocation.x, this.toArrowLocation.y), s;
        },
        _29: function (t) {
            var i = t ? "from" : "to";
            e = this[i + "ArrowStroke"];
            e === n && (e = this.$lineWidth);
            var s = this[i + "ArrowStrokeStyle"];
            s === n && (s = this.strokeStyle);
            var h = this[i + "ArrowStyles"];
            h || (this[i + "ArrowStyles"] = h = {});
            h.lineWidth = e;
            h.strokeStyle = s;
            h.lineDash = this[i + "ArrowLineDash"];
            h.lineDashOffset = this[i + "ArrowLineDashOffset"];
            h.fillColor = this[i + "ArrowFillColor"];
            h.fillGradient = this[i + "ArrowFillGradient"];
            h.lineCap = this[i + "ArrowLineCap"];
            h.lineJoin = this[i + "ArrowLineJoin"];
            h.outline = this[i + "ArrowOutline || 0"];
            h.outlineStyle = this[i + "ArrowOutlineStyle"];
        },
        doValidate: function () {
            return this.$fromArrow && this._29(true), this.$toArrow && this._29(false), doSuper(this, UY, "doValidate");
        },
        drawArrow: function (t, i, n, e) {
            if (this.$fromArrow && this.$fromArrowShape) {
                t.save();
                var s = this.fromArrowLocation;
                var h = s.x;
                var r = s.y;
                var a = s.rotate;
                t.translate(h, r);
                a && t.rotate(a);
                this.$fromArrowShape.draw(t, i, this.fromArrowStyles, n, e);
                t.restore();
            }
            if (this.$toArrow && this.$toArrowShape) {
                t.save();
                var s = this.toArrowLocation;
                var h = s.x;
                var r = s.y;
                var a = s.rotate;
                t.translate(h, r);
                a && t.rotate(a);
                this.$toArrowShape.draw(t, i, this.toArrowStyles, n, e);
                t.restore();
            }
        },
        outlineStyle: null,
        outline: 0,
        onBoundsChanged: function () {
            this.$invalidateFillGradient = true;
        },
        _1n: function () {
            this.$invalidateFillGradient = false;
            this._fillGradient = this.$fillGradient ? Gradient.prototype.generatorGradient.call(this.$fillGradient, this._7k) : null;
        },
        draw: function (t, i, n, e) {
            this.$invalidateFillGradient && this._1n();
            this.$data.draw(t, i, this, n, e);
            this.drawArrow(t, i, n, e);
        },
        doHitTest: function (t, i, n) {
            if (this.$data.hitTest(t, i, n, true, this.$lineWidth + this.$outline, this.$fillColor || this.$fillGradient)) {
                return true;
            }
            if (this.$toArrow && this.$toArrowShape) {
                var e = t - this.toArrowLocation.x;
                var s = i - this.toArrowLocation.y;
                if (this.toArrowLocation.rotate) {
                    var h = ki(e, s, -this.toArrowLocation.rotate);
                    e = h.x;
                    s = h.y;
                }
                var r = this.toArrowStyles.fillColor || this.toArrowStyles.fillGradient;
                if (this.$toArrowShape.hitTest(e, s, n, true, this.toArrowStyles.lineWidth, r)) {
                    return true;
                }
            }
            if (this.$fromArrow && this.$fromArrowShape) {
                var e = t - this.fromArrowLocation.x;
                var s = i - this.fromArrowLocation.y;
                if (this.fromArrowLocation.rotate) {
                    var h = ki(e, s, -this.fromArrowLocation.rotate);
                    e = h.x;
                    s = h.y;
                }
                var r = this.fromArrowStyles.fillColor || this.fromArrowStyles.fillGradient;
                if (this.$fromArrowShape.hitTest(e, s, n, true, this.fromArrowStyles.lineWidth, r)) {
                    return true;
                }
            }
            return false;
        },
        $fromArrowOutline: 0,
        $toArrowOutline: 0,
        $invalidateFillGradient: true,
        $invalidateFromArrow: true,
        $invalidateToArrow: true
    };

    extend(UY, BaseUI);

    fs(UY.prototype, {
        fillColor: {},
        fillGradient: { validateFlags: ["FillGradient"] },
        fromArrowOffset: { validateFlags: ["FromArrow", "Size"] },
        fromArrowSize: { validateFlags: ["FromArrow", "Size"] },
        fromArrow: { validateFlags: ["FromArrow", "Size"] },
        fromArrowOutline: { validateFlags: ["FromArrow", "Size"] },
        fromArrowStroke: { validateFlags: ["FromArrow", "Size"] },
        toArrowOffset: { validateFlags: ["ToArrow", "Size"] },
        toArrowSize: { validateFlags: ["ToArrow", "Size"] },
        toArrow: { validateFlags: ["ToArrow", "Size"] },
        toArrowOutline: { validateFlags: ["ToArrow", "Size"] },
        toArrowStroke: { validateFlags: ["ToArrow", "Size"] },
        outline: { value: 0, validateFlags: ["Data"] }
    });

    defineProperties(UY.prototype, {
        length: {
            get: function () {
                return this.data.length;
            }
        }
    });

    EdgeUI.prototype = {
        shape: null,
        path: null,
        initialize: function () {
            doSuper(this, EdgeUI, "initialize");
            this.path = new Path;
            this.path._e8 = false;
            this.shape = new UY(this.path);
            this.addChild(this.shape, 0);
            this._ncody = this.shape;
            FY.initBindingProperties(this);
        },
        _1g: true,
        _5w: null,
        _$u: function () {
            return false;
        },
        _3y: function () {
            return false;
        },
        validatePoints: function () {
            this.shape.invalidateData();
            var t = this.$data;
            var i = this.path;
            i.clear();
            var n = t.fromAgent;
            var e = t.toAgent;
            n && e && qs(this, t, i, n, e);
        },
        drawLoopedEdge: function (t, i, n, e) {
            Vs(this, e, t);
        },
        drawEdge: function (t, i, n, e, s, h) {
            var r = s.center;
            var a = h.center;
            if (e == Consts.EDGE_TYPE_ZIGZAG) {
                var o = (r.x + a.x) / 2;
                var f = (r.y + a.y) / 2;
                var c = r.x - a.x;
                var u = r.y - a.y;
                var _ = Math.sqrt(c * c + u * u);
                var d = Math.atan2(u, c);
                d += Math.PI / 6;
                _ *= .04;
                _ > 30 && (_ = 30);
                var l = Math.cos(d) * _;
                var v = Math.sin(d) * _;
                return t.lineTo(o - v, f + l), void t.lineTo(o + v, f - l);
            }
            var b = Us(this, this.data, s, h, i, n, r, a);
            b && (t._fu = b);
        },
        _23: function () {
            if (!this.$data.isBundleEnabled()) {
                return null;
            }
            var t = this.graph._82._8e(this.$data);
            if (!t || !t.canBind(this.graph) || !t._gt) {
                return null;
            }
            var i = t.getYOffset(this);
            return t.isPositiveOrder(this.$data) || (i = -i), i;
        },
        checkBundleLabel: function () {
            var t = this.getBundleLabel();
            return t ? (this.bundleLabel || this.createBundleLabel(), this.bundleLabel._i6 = true, void (this.bundleLabel.data = t)) : void (this.bundleLabel && (this.bundleLabel._i6 = false, this.bundleLabel.data = null));
        },
        createBundleLabel: function () {
            var t = new LabelUI;
            t.editable = false;
            this.bundleLabel = t;
            this.addChild(this.bundleLabel);
            GY.initBindingProperties(this);
        },
        getBundleLabel: function () {
            return this.graph.getBundleLabel(this.data);
        },
        doValidate: function () {
            return this._1g && (this._1g = false, this.validatePoints()), this.checkBundleLabel(), doSuper(this, EdgeUI, "doValidate");
        },
        _4x: function () {
            this._1g = true;
            this.invalidateSize();
        },
        _$w: function (t, i, n) {
            var e = this._ndj.onBindingPropertyChange(this, t, i, n);
            return e = PY.onBindingPropertyChange(this, t, i, n) || e, this.bundleLabel && this.bundleLabel.$data && (e = GY.onBindingPropertyChange(this, t, i, n) || e), FY.onBindingPropertyChange(this, t, i, n) || e;
        }
    };

    extend(EdgeUI, ElementUI);

    EdgeUI.drawReferenceLine = function (t, i, n, e) {
        if (t.moveTo(i.x, i.y), !e || e == Consts.EDGE_TYPE_DEFAULT) {
            return void t.lineTo(n.x, n.y);
        }
        if (e == Consts.EDGE_TYPE_VERTICAL_HORIZONTAL) {
            t.lineTo(i.x, n.y);
        } else if (e == Consts.EDGE_TYPE_HORIZONTAL_VERTICAL) {
            t.lineTo(n.x, i.y);
        } else if (0 == e.indexOf(Consts.EDGE_TYPE_ORTHOGONAL)) {
            var s;
            s = e == Consts.EDGE_TYPE_ORTHOGONAL_HORIZONTAL ? true : e == Consts.EDGE_TYPE_ORTHOGONAL_VERTICAL ? false : Math.abs(i.x - n.x) > Math.abs(i.y - n.y);
            var h = (i.x + n.x) / 2;
            var r = (i.y + n.y) / 2;
            s ? (t.lineTo(h, i.y), t.lineTo(h, n.y)) : (t.lineTo(i.x, r), t.lineTo(n.x, r));
        } else if (0 == e.indexOf(Consts.EDGE_TYPE_ELBOW)) {
            var s;
            var a = DefaultStyles[Styles.EDGE_EXTEND] || 0;
            s = e == Consts.EDGE_TYPE_ELBOW_HORIZONTAL ? true : e == Consts.EDGE_TYPE_ELBOW_VERTICAL ? false :
                    Math.abs(i.x - n.x) > Math.abs(i.y - n.y), s ? (t.lineTo(i.x + a, i.y),
                    t.lineTo(n.x - a, n.y)) : (t.lineTo(i.x, i.y + a), t.lineTo(n.x, n.y - a));
        } else if (0 == e.indexOf("extend.")) {
            var a = DefaultStyles[Styles.EDGE_EXTEND] || 0;
            if (e == Consts.EDGE_TYPE_EXTEND_TOP) {
                var o = Math.min(i.y, n.y) - a;
                t.lineTo(i.x, o);
                t.lineTo(n.x, o);
            } else if (e == Consts.EDGE_TYPE_EXTEND_BOTTOM) {
                var o = Math.max(i.y, n.y) + a;
                t.lineTo(i.x, o);
                t.lineTo(n.x, o);
            } else if (e == Consts.EDGE_TYPE_EXTEND_LEFT) {
                var f = Math.min(i.x, n.x) - a;
                t.lineTo(f, i.y);
                t.lineTo(f, n.y);
            } else if (e == Consts.EDGE_TYPE_EXTEND_RIGHT) {
                var f = Math.max(i.x, n.x) + a;
                t.lineTo(f, i.y);
                t.lineTo(f, n.y);
            }
        } else if (e == Consts.EDGE_TYPE_ZIGZAG) {
            var h = (i.x + n.x) / 2;
            var r = (i.y + n.y) / 2;
            var c = i.x - n.x;
            var u = i.y - n.y;
            var _ = Math.sqrt(c * c + u * u);
            var d = Math.atan2(u, c);
            d += Math.PI / 6;
            _ *= .04;
            _ > 30 && (_ = 30);
            var l = Math.cos(d) * _;
            var v = Math.sin(d) * _;
            t.lineTo(h - v, r + l);
            t.lineTo(h + v, r - l);
        }
        t.lineTo(n.x, n.y);
    };

    defineProperties(EdgeUI.prototype, {
        length: {
            get: function () {
                return this.path ? this.path.length : 0;
            }
        }
    });

    EdgeUI.prototype.addPoint = function (t, i, n) {
        var e = pn(this.path, t, i, n);
        if (e && e.length > 2) {
            var s = this.data;
            var h = e[e.length - 1];
            s.pathSegments = h.type == "l" ? e.splice(1, e.length - 2) : e.splice(1, e.length - 1);
        }
    };

    NodeUI.prototype = {
        _2i: null,
        image: null,
        initialize: function () {
            doSuper(this, NodeUI, "initialize");
            this._nbv();
            $Y.initBindingProperties(this);
        },
        _ndd: function () {
            this.data.image ? this.image && (this.body = this.image) : this.label && (this.body = this.label);
        },
        _nbv: function () {
            this.image = new ImageUI;
            this.addChild(this.image, 0);
            this._ndd();
        },
        doValidate: function () {
            this.body && (this instanceof GroupUI && !this.$data.groupImage && this._5b() ? this.body.$layoutByAnchorPoint = false : (this.body.$layoutByAnchorPoint = null != this._2i, this.body.anchorPosition = this._2i));
            var t = this.$data.$location;
            var i = 0;
            var n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this.$invalidateBounds = true), this.$x = i, this.$y = n, ElementUI.prototype.doValidate.call(this) || e;
        },
        _$w: function (t, i, n) {
            var e = this._ndj.onBindingPropertyChange(this, t, i, n);
            return e = PY.onBindingPropertyChange(this, t, i, n) || e, $Y.onBindingPropertyChange(this, t, i, n) || e;
        }
    }

    extend(NodeUI, ElementUI);

    var DefaultStyles = {};

    DefaultStyles[Styles.SELECTION_COLOR] = Defaults.SELECTION_COLOR;
    DefaultStyles[Styles.SELECTION_BORDER] = Defaults.SELECTION_BORDER;
    DefaultStyles[Styles.SELECTION_SHADOW_BLUR] = Defaults.SELECTION_SHADOW_BLUR;
    DefaultStyles[Styles.SELECTION_TYPE] = Consts.SELECTION_TYPE_SHADOW;
    DefaultStyles[Styles.SELECTION_SHADOW_OFFSET_X] = 2;
    DefaultStyles[Styles.SELECTION_SHADOW_OFFSET_Y] = 2;
    DefaultStyles[Styles.LABEL_COLOR] = Defaults.LABEL_COLOR;
    DefaultStyles[Styles.LABEL_POSITION] = Position.CENTER_BOTTOM;
    DefaultStyles[Styles.LABEL_ANCHOR_POSITION] = Position.CENTER_TOP;
    DefaultStyles[Styles.LABEL_PADDING] = new Insets(0, 2);
    DefaultStyles[Styles.LABEL_POINTER_WIDTH] = 8;
    DefaultStyles[Styles.LABEL_RADIUS] = 8;
    DefaultStyles[Styles.LABEL_POINTER] = true;
    DefaultStyles[Styles.LABEL_BORDER] = 0;
    DefaultStyles[Styles.LABEL_BORDER_STYLE] = "#000";
    DefaultStyles[Styles.LABEL_ROTATABLE] = true;
    DefaultStyles[Styles.LABEL_BACKGROUND_COLOR] = null;
    DefaultStyles[Styles.LABEL_BACKGROUND_GRADIENT] = null;
    DefaultStyles[Styles.EDGE_COLOR] = "#555555";
    DefaultStyles[Styles.EDGE_WIDTH] = 1.5;
    DefaultStyles[Styles.EDGE_FROM_AT_EDGE] = true;
    DefaultStyles[Styles.EDGE_TO_AT_EDGE] = true;
    DefaultStyles[Styles.GROUP_BACKGROUND_COLOR] = randomColor2(3438210798);
    DefaultStyles[Styles.GROUP_STROKE] = 1;
    DefaultStyles[Styles.GROUP_STROKE_STYLE] = "#000";
    DefaultStyles[Styles.ARROW_TO] = true;
    DefaultStyles[Styles.ARROW_FROM_SIZE] = Defaults.ARROW_SIZE;
    DefaultStyles[Styles.ARROW_TO_SIZE] = Defaults.ARROW_SIZE;
    DefaultStyles[Styles.EDGE_LOOPED_EXTAND] = 10;
    DefaultStyles[Styles.EDGE_CORNER_RADIUS] = 8;
    DefaultStyles[Styles.EDGE_CORNER] = Consts.EDGE_CORNER_ROUND;
    DefaultStyles[Styles.EDGE_SPLIT_BY_PERCENT] = true;
    DefaultStyles[Styles.EDGE_EXTEND] = 20;
    DefaultStyles[Styles.EDGE_SPLIT_PERCENT] = .5;
    DefaultStyles[Styles.EDGE_SPLIT_VALUE] = 20;
    DefaultStyles[Styles.EDGE_BUNDLE_GAP] = 20;
    DefaultStyles[Styles.EDGE_BUNDLE_LABEL_ANCHOR_POSITION] = Position.CENTER_BOTTOM;
    DefaultStyles[Styles.EDGE_BUNDLE_LABEL_POSITION] = Position.CENTER_TOP;
    DefaultStyles[Styles.EDGE_BUNDLE_LABEL_COLOR] = "#075bc5";
    DefaultStyles[Styles.SHAPE_STROKE] = 1;
    DefaultStyles[Styles.SHAPE_STROKE_STYLE] = "#2898E0";
    DefaultStyles[Styles.RENDER_COLOR_BLEND_MODE] = Defaults.BLEND_MODE;
    DefaultStyles[Styles.ALPHA] = 1;
    Defaults.LOOKING_EDGE_ENDPOINT_TOLERANCE = 2;

    var Graph = function (i, n) {
        this._$v = new Dispatcher;
        this._$v.on(function (t) {
            "currentSubNetwork" == t.kind && this.invalidateVisibility();
        }, this);
        this._1h = new Dispatcher;
        this._1h.addListener(function (t) {
            !this.currentSubNetwork || t.kind != ListEvent.KIND_CLEAR && t.kind != ListEvent.KIND_REMOVE ||
            this.graphModel.contains(this.currentSubNetwork) || (this.currentSubNetwork = null);
        }, this);
        this._$c = new Dispatcher;
        this._16 = new Dispatcher;
        this._$l = new Dispatcher;
        this._$p = new Dispatcher;
        this.graphModel = n || new GraphModel;
        this._82 = new bY(this, i);
        this._32 = new Lh(this);
        this._19 = new Dispatcher;
        this._onresize = addEventListener(t, "resize", function () {
            this.updateViewport();
        }, false, this);
        this._82._nbf.ondrop = function (t) {
            this.ondrop(t);
        }.bind(this);
        this._82._nbf.ondragover = function (t) {
            this.ondragover(t);
        }.bind(this);
    };

    Graph.prototype = {
        originAtCenter: true,
        editable: false,
        ondragover: function (t) {
            Qunee.stopEvent(t);
        },
        getDropInfo: function (t, i) {
            var n = null;
            if (i) {
                try {
                    n = JSON.parse(i);
                } catch (e) {
                }
            }
            return n;
        },
        ondrop: function (t) {
            var i = t.dataTransfer;
            if (i) {
                var n = i.getData("text");
                var e = this.getDropInfo(t, n);
                e || (e = {}, e.image = i.getData("image"), e.type = i.getData("type"), e.label = i.getData("label"),
                    e.groupImage = i.getData("groupImage"));
                var s = this.globalToLocal(t);
                if (s = this.toLogical(s.x, s.y),
                    !(this.dropAction instanceof Function && this.dropAction.call(this, t, s, e) === false) &&
                    (e.image || e.label || e.type)) {
                    var h = e.image;
                    var r = e.type;
                    var a = e.label;
                    var o = e.groupImage;
                    Qunee.stopEvent(t);
                    var f;
                    if (r && "Node" != r ? "Text" == r ? f = this.createText(a, s.x, s.y) :
                                "ShapeNode" == r ? f = this.createShapeNode(a, s.x, s.y) : "Group" == r ?
                                        (f = this.createGroup(a, s.x, s.y), o && (o = th(o), o && (f.groupImage = o))) :
                                        (r = J(r), r instanceof Function && r.prototype instanceof Node &&
                                        (f = new r, f.name = a, f.location = new Point(s.x, s.y), this._l1Model.add(f))) :
                            f = this.createNode(a, s.x, s.y), f) {
                        if (h && (h = th(h), h && (f.image = h)), t.shiftKey) {
                            var c = this.getElementByMouseEvent(t);
                            c && this._ncl(c) && (f.parent = c);
                        }
                        if (e.properties) {
                            for (var u in e.properties) {
                                f[u] = e.properties[u];
                            }
                        }
                        if (e.clientProperties) {
                            for (var u in e.clientProperties) {
                                f.set(u, e.clientProperties[u]);
                            }
                        }
                        if (e.styles && f.putStyles(e.styles), this.onElementCreated(f, t, e) === false) {
                            return false;
                        }
                        var _ = new InteractionEvent(this, InteractionEvent.ELEMENT_CREATED, t, f);
                        return this.onInteractionEvent(_), f;
                    }
                }
            }
        },
        _ncl: function (t) {
            return t.enableSubNetwork || t instanceof Group || t.droppable;
        },
        enableDoubleClickToOverview: true,
        _82: null,
        _$v: null,
        _1h: null,
        _$c: null,
        _$p: null,
        _16: null,
        _$l: null,
        _1l: function (t) {
            return this._$v.beforeEvent(t);
        },
        _4p: function (t) {
            this._$v.onEvent(t);
            "viewport" == t.kind && this.checkLimitedBounds();
        },
        isVisible: function (t) {
            return this._82._fb(t);
        },
        isMovable: function (t) {
            return (t instanceof Node || t instanceof Edge && t.hasPathSegments()) && t.movable !== false;
        },
        isSelectable: function (t) {
            return t.selectable !== false;
        },
        isEditable: function (t) {
            return t.editable !== false;
        },
        isRotatable: function (t) {
            return t.rotatable !== false;
        },
        isResizable: function (t) {
            return t.resizable !== false;
        },
        canLinkFrom: function (t) {
            return t.linkable !== false && t.canLinkFrom !== false;
        },
        canLinkTo: function (t) {
            return t.linkable !== false && t.canLinkTo !== false;
        },
        createNode: function (t, i, n) {
            var e = new Node(t, i, n);
            return this._l1Model.add(e), e;
        },
        createText: function (t, i, n) {
            var e = new Text(t, i, n);
            return this._l1Model.add(e), e;
        },
        createShapeNode: function (t, i, n, e) {
            isNumber(i) && (e = n, n = i, i = null);
            var s = new ShapeNode(t, i);
            return s.$location = new Point(n, e), this._l1Model.add(s), s;
        },
        createGroup: function (t, i, n) {
            var e = new Group(t, i, n);
            return this._l1Model.add(e), e;
        },
        createEdge: function (t, i, n) {
            if (t instanceof Node) {
                var e = n;
                n = i;
                i = t;
                t = e;
            }
            var s = new Edge(i, n);
            return t && (s.$name = t), this._l1Model.add(s), s;
        },
        addElement: function (t, i) {
            this._l1Model.add(t);
            i && t.hasChildren() && t.forEachChild(function (t) {
                this.addElement(t, i);
            }, this);
        },
        removeElement: function (t) {
            this._l1Model.remove(t);
        },
        clear: function () {
            this._l1Model.clear();
        },
        getStyle: function (t, i) {
            var e = t._jm[i];
            return e !== n ? e : this.getDefaultStyle(i);
        },
        getDefaultStyle: function (t) {
            if (this._jm) {
                var i = this._jm[t];
                if (i !== n) {
                    return i;
                }
            }
            return DefaultStyles[t];
        },
        _2y: function (t, i) {
            if (!this.limitedBounds || this.limitedBounds.contains(this.viewportBounds)) {
                return i && i(), false;
            }
            t = this._26();
            this.stopAnimation();
            var n;
            var e;
            var s;
            var h = this.viewportBounds;
            var r = this.limitedBounds;
            var a = h.width / this.limitedBounds.width;
            var o = h.height / this.limitedBounds.height;
            if (1 >= a && 1 >= o) {
                return n = r.left > h.left ? r.left : r.right < h.right ? h.left - (h.right - r.right) : h.left, e = r.top > h.top ? r.top : r.bottom < h.bottom ? h.top - (h.bottom - r.bottom) : h.top, void this.translateTo(-n * this.scale, -e * this.scale, this.scale, false, i);
            }
            var f = a > o;
            s = Math.max(a, o);
            f ? (n = r.x, e = r.y + (h.top - r.top) * (1 - s) / s, e > r.y ? e = r.y : e < r.bottom - h.height / s && (e = r.bottom - h.height / s)) : (e = r.y, n = r.x + (h.left - r.left) * (1 - s) / s, n > r.x ? n = r.x : n < r.right - h.width / s && (n = r.right - h.width / s));
            s *= this.scale;
            n *= s;
            e *= s;
            this.translateTo(-n, -e, s, t, i);
        },
        checkLimitedBounds: function (t) {
            return this._ndheckingBounds || !this.limitedBounds || this.limitedBounds.contains(this.viewportBounds) ? false : (this._ndheckingBounds = true, void this.callLater(function () {
                this._2y(t, function () {
                    this._ndheckingBounds = false;
                }.bind(this));
            }, this));
        },
        zoomByMouseEvent: function (t, i, n, e) {
            var s = this.globalToLocal(t);
            return isNumber(i) ? this.zoomAt(Math.pow(this.scaleStep, i), s.x, s.y, n, e) : i ? this.zoomIn(s.x, s.y, n, e) : this.zoomOut(s.x, s.y, n, e);
        },
        resetScale: 1,
        translate: function (t, i, n) {
            return this.translateTo(this.tx + t, this.ty + i, this.scale, n);
        },
        translateTo: function (t, i, n, e, s) {
            if (n && (n = Math.min(this.maxScale, Math.max(this.minScale, n))), e) {
                var h = this._5p();
                return void h._la(t, i, n, e, s);
            }
            var r = this._82._nbl(t, i, n);
            return s && s(), r;
        },
        centerTo: function (t, i, e, s, h) {
            return (!e || 0 >= e) && (e = this.scale), s === n && (s = this._26()), this.translateTo(this.width / 2 - t * e, this.height / 2 - i * e, e, s, h);
        },
        moveToCenter: function (t, i) {
            if (arguments[2] === false || !this._82.isInvalidate()) {
                var n = this.bounds;
                return void this.centerTo(n.cx, n.cy, t, i);
            }
            return this._82._nc1 || (i = false), this.callLater(this.moveToCenter.bind(this, t, i, false));
        },
        zoomToOverview: function (t, i) {
            if (arguments[2] === false || !this._82.isInvalidate()) {
                var n = this._82._1k();
                return void (n && (i && (n.scale = Math.min(n.scale, i)), this.centerTo(n.cx, n.cy, n.scale, t)));
            }
            return this._82._nc1 || (t = false), this.callLater(this.zoomToOverview.bind(this, t, i, false));
        },
        _26: function () {
            return this._82._nc1 ? this.zoomAnimation === n || null === this.zoomAnimation ? Defaults.ZOOM_ANIMATE : this.zoomAnimation : false;
        },
        zoomAt: function (t, i, e, s, h) {
            s === n && (s = this._26()), i === n && (i = this.width / 2);
            i = i || 0;
            e === n && (e = this.height / 2);
            e = e || 0;
            var r = this.scale;
            return t = Math.min(this.maxScale, Math.max(this.minScale, r * t));
            i = t * (this.tx - i) / r + i;
            e = t * (this.ty - e) / r + e;
            this.translateTo(i, e, t, s, h);
        },
        zoomOut: function (t, i, n, e) {
            return this.zoomAt(1 / this.scaleStep, t, i, n, e);
        },
        zoomIn: function (t, i, n, e) {
            return this.zoomAt(this.scaleStep, t, i, n, e);
        },
        _5p: function () {
            return this._panAnimation || (this._panAnimation = new iW(this)), this._panAnimation;
        },
        onAnimationStart: function () {
        },
        onAnimationEnd: function () {
        },
        isAnimating: function () {
            return this._panAnimation && this._panAnimation._ea();
        },
        enableInertia: true,
        _9p: function (t, i) {
            var n = this._5p();
            return n._h3(t || 0, i || 0);
        },
        stopAnimation: function () {
            this._panAnimation && this._panAnimation._mc();
        },
        getUI: function (t) {
            return Q(t) ? this._82._3v(t) : this._82._lq(t);
        },
        getUIByMouseEvent: function (t) {
            return this._82._3v(t);
        },
        hitTest: function (t) {
            return this._82.hitTest(t);
        },
        globalToLocal: function (t) {
            return this._82._7z(t);
        },
        toCanvas: function (t, i) {
            return this._82._i1(t, i);
        },
        toLogical: function (t, i) {
            return Q(t) ? this._82._$g(t) : this._82._f7(t, i);
        },
        getElementByMouseEvent: function (t) {
            var i = this._82._3v(t);
            return i ? i.$data : void 0;
        },
        getElement: function (t) {
            if (Q(t)) {
                var i = this._82._3v(t);
                return i ? i.$data : null;
            }
            return this._l1Model.getById(t);
        },
        invalidate: function () {
            this._82._d1();
        },
        invalidateUI: function (t) {
            t.invalidate();
            this.invalidate();
        },
        invalidateElement: function (t) {
            this._82._3t(t);
        },
        getUIBounds: function (t) {
            return this._82._2f(t);
        },
        forEachVisibleUI: function (t, i) {
            return this._82._4d(t, i);
        },
        forEachReverseVisibleUI: function (t, i) {
            return this._82._$x(t, i);
        },
        forEachUI: function (t, i) {
            return this._82._ff(t, i);
        },
        forEachReverseUI: function (t, i) {
            return this._82._4g(t, i);
        },
        forEach: function (t, i) {
            return this._l1Model.forEach(t, i);
        },
        getElementByName: function (t) {
            var i;
            return this._l1Model.forEach(function (n) {
                return n.name == t ? (i = n, false) : void 0;
            }), i;
        },
        focus: function (i) {
            if (i) {
                var n = t.scrollX || t.pageXOffset;
                var e = t.scrollY || t.pageYOffset;
                return this.canvasPanel.focus(), void t.scrollTo(n, e);
            }
            this.canvasPanel.focus();
        },
        callLater: function (t, i, n) {
            this._82._f4(t, i, n);
        },
        exportImage: function (t, i) {
            return ch(this, t, i);
        },
        setSelection: function (t) {
            return this._l1Model._selectionModel.set(t);
        },
        select: function (t) {
            return this._l1Model._selectionModel.select(t);
        },
        unselect: function (t) {
            return this._l1Model._selectionModel.unselect(t);
        },
        reverseSelect: function (t) {
            return this._l1Model._selectionModel.reverseSelect(t);
        },
        selectAll: function () {
            fh(this);
        },
        unSelectAll: function () {
            this.selectionModel.clear();
        },
        unselectAll: function () {
            this.unSelectAll();
        },
        isSelected: function (t) {
            return this._l1Model._selectionModel.contains(t);
        },
        sendToTop: function (t) {
            Oe(this._l1Model, t);
        },
        sendToBottom: function (t) {
            Me(this._l1Model, t);
        },
        moveElements: function (t, i, n) {
            var e = [], s = new HashList;
            return forEach(t, function (t) {
                t instanceof Node ? e.push(t) : t instanceof Edge && s.add(t);
            }), this._dz(e, i, n, s);
        },
        _dz: function (t, i, n, e) {
            if (0 == i && 0 == n || 0 == t.length && 0 == e.length) {
                return false;
            }
            if (0 != t.length) {
                var s = this._48(t);
                e = this._49(s, e), forEach(s, function (t) {
                    var e = t.$location;
                    e ? t.setLocation(e.x + i, e.y + n) : t.setLocation(i, n)
                })
            }
            return e && e.length && this._e0(e, i, n), true;
        },
        _e0: function (t, i, n) {
            t.forEach(function (t) {
                t.move(i, n);
            })
        },
        _49: function (t, i) {
            return this.graphModel.forEach(function (n) {
                n instanceof Edge && this.isMovable(n) && t.contains(n.fromAgent) && t.contains(n.toAgent) && i.add(n);
            }, this), i;
        },
        _48: function (t) {
            var i = new HashList;
            return forEach(t, function (t) {
                !this.isMovable(t);
                i.add(t);
                Te(t, i, this._movableFilter);
            }, this), i;
        },
        reverseExpanded: function (t) {
            if (!t.isBundleEnabled()) {
                return false;
            }
            var i = t.getEdgeBundle(true);
            return i ? i.reverseExpanded() !== false ? (this.invalidate(), true) : void 0 : false;
        },
        _32: null,
        _19: null,
        beforeInteractionEvent: function (t) {
            return this._19.beforeEvent(t);
        },
        onInteractionEvent: function (t) {
            this._19.onEvent(t);
        },
        addCustomInteraction: function (t) {
            this._32.addCustomInteraction(t);
        },
        removeCustomInteraction: function (t) {
            this._32.removeCustomInteraction(t);
        },
        enableWheelZoom: true,
        enableTooltip: true,
        getTooltip: function (t) {
            return t.tooltip || t.name;
        },
        updateViewport: function () {
            this._82._6l();
        },
        destroy: function () {
            this._4p(new PropertyChangeEvent(this, "destroy", true, this._iaed));
            this._iaed = true;
            removeEventListener(t, "resize", this._onresize);
            this._32.destroy();
            this.graphModel = new GraphModel;
            var i = this.html;
            this._82._ia();
            i && (i.innerHTML = "");
        },
        onPropertyChange: function (t, i, n) {
            this._$v.addListener(function (e) {
                e.kind == t && i.call(n, e);
            })
        },
        removeSelection: function () {
            var t = this.selectionModel._k0;
            return t && 0 != t.length ? (t = t.slice(), this._l1Model.remove(t), t) : false;
        },
        removeSelectionByInteraction: function (t) {
            var i = this.selectionModel.datas;
            return i && 0 != i.length ? void Qunee.confirm("Delete Elements - " + i.length, function () {
                var i = this.removeSelection();
                if (i) {
                    var n = new InteractionEvent(this, InteractionEvent.ELEMENT_REMOVED, t, i);
                    this.onInteractionEvent(n);
                }
            }, this) : false;
        },
        createShapeByInteraction: function (t, i, n, e) {
            var s = new Path(i);
            i.length > 2 && s.closePath();
            var h = this.createShapeNode("Shape", s, n, e);
            this.onElementCreated(h, t);
            var r = new InteractionEvent(this, InteractionEvent.ELEMENT_CREATED, t, h);
            return this.onInteractionEvent(r), h;
        },
        createLineByInteraction: function (t, i, n, e) {
            var s = new Path(i);
            var h = this.createShapeNode("Line", s, n, e);
            h.setStyle(Qunee.Styles.SHAPE_FILL_COLOR, null);
            h.setStyle(Qunee.Styles.SHAPE_FILL_GRADIENT, null);
            h.setStyle(Qunee.Styles.LAYOUT_BY_PATH, true);
            this.onElementCreated(h, t);
            var r = new InteractionEvent(this, InteractionEvent.ELEMENT_CREATED, t, h);
            return this.onInteractionEvent(r), h;
        },
        createEdgeByInteraction: function (t, i, n, e) {
            var s = this.createEdge("Edge", t, i);
            if (e) {
                s._9c = e;
            } else {
                var h = this.edgeUIClass;
                var r = this.edgeType;
                this.interactionProperties && (h = this.interactionProperties.uiClass || h,
                    r = this.interactionProperties.edgeType || r);
                h && (s.uiClass = h);
                r && (s.edgeType = r);
            }
            this.onElementCreated(s, n);
            var a = new InteractionEvent(this, InteractionEvent.ELEMENT_CREATED, n, s);
            return this.onInteractionEvent(a), s;
        },
        onElementCreated: function (t) {
            !t.parent && this.currentSubNetwork && (t.parent = this.currentSubNetwork);
        },
        allowEmptyLabel: false,
        startLabelEdit: function (t, i, n, e) {
            var s = this;
            n.startEdit(e.x, e.y, i.data, this.getStyle(t, Styles.LABEL_FONT_SIZE), function (n) {
                return s.onLabelEdit(t, i, n, i.parent);
            });
        },
        onLabelEdit: function (t, i, n, e) {
            return n || this.allowEmptyLabel ? void ("label" == i.name ? t.name = n : e._fv(i, n) === false && (i.data = n,
                        this.invalidateElement(t))) : (Qunee.alert("Label Can't Empty"), false);
        },
        setInteractionMode: function (t, i) {
            this.interactionMode = t;
            this.interactionProperties = i;
        },
        upSubNetwork: function () {
            return this._3r ? this.currentSubNetwork = ih(this._3r) : false;
        },
        _$s: false,
        invalidateVisibility: function () {
            this._$s = true;
            this.invalidate();
        },
        getBundleLabel: function (t) {
            var i = t.getEdgeBundle(true);
            return i && i.agentEdge == t ? "+" + i.bindableEdges.length : null;
        },
        zoomAnimation: null,
        pauseRendering: function (t, i) {
            (this.delayedRendering || i) && this._82._6g(t);
        },
        _44: n,
        enableRectangleSelectionByRightButton: true
    };

    defineProperties(Graph.prototype, {
        center: {
            get: function () {
                return this.toLogical(this.html.clientWidth / 2, this.html.clientHeight / 2);
            }
        },
        visibleFilter: {
            get: function () {
                return this._i6Filter;
            },
            set: function (t) {
                this._i6Filter = t;
                this.invalidateVisibility();
            }
        },
        topCanvas: {
            get: function () {
                return this._82._topCanvas;
            }
        },
        propertyChangeDispatcher: {
            get: function () {
                return this._$v;
            }
        },
        listChangeDispatcher: {
            get: function () {
                return this._1h;
            }
        },
        dataPropertyChangeDispatcher: {
            get: function () {
                return this._$c;
            }
        },
        selectionChangeDispatcher: {
            get: function () {
                return this._$p;
            }
        },
        parentChangeDispatcher: {
            get: function () {
                return this._16;
            }
        },
        childIndexChangeDispatcher: {
            get: function () {
                return this._$l;
            }
        },
        interactionDispatcher: {
            get: function () {
                return this._19;
            }
        },
        cursor: {
            set: function (t) {
                this.canvasPanel.style.cursor = t || this._32.defaultCursor;
            },
            get: function () {
                return this.canvasPanel.style.cursor;
            }
        },
        interactionMode: {
            get: function () {
                return this._32._ndurrentMode;
            },
            set: function (t) {
                var i = this.interactionMode;
                i != t && (this._32.currentMode = t, this._4p(new PropertyChangeEvent(this, "interactionMode", t, i)));
            }
        },
        scaleStep: {
            get: function () {
                return this._82._ex;
            },
            set: function (t) {
                this._82._ex = t;
            }
        },
        maxScale: {
            get: function () {
                return this._82._gk;
            },
            set: function (t) {
                this._82._gk = t;
            }
        },
        minScale: {
            get: function () {
                return this._82._gi;
            },
            set: function (t) {
                this._82._gi = t;
            }
        },
        scale: {
            get: function () {
                return this._82._scale;
            },
            set: function (t) {
                return this._82._scale = t;
            }
        },
        tx: {
            get: function () {
                return this._82._tx;
            }
        },
        ty: {
            get: function () {
                return this._82._ty;
            }
        },
        styles: {
            get: function () {
                return this._jm;
            },
            set: function (t) {
                this._jm = t;
            }
        },
        selectionModel: {
            get: function () {
                return this._l1Model._selectionModel;
            }
        },
        graphModel: {
            get: function () {
                return this._l1Model;
            },
            set: function (t) {
                if (this._l1Model == t) {
                    return false;
                }
                var i = this._l1Model;
                var n = new PropertyChangeEvent(this, "graphModel", i, t);
                return this._1l(n) === false ? false : (null != i && (i.propertyChangeDispatcher.removeListener(this._$v, this), i.listChangeDispatcher.removeListener(this._1h, this), i.dataChangeDispatcher.removeListener(this._$c, this), i.parentChangeDispatcher.removeListener(this._16, this), i.childIndexChangeDispatcher.removeListener(this._$l, this), i.selectionChangeDispatcher.removeListener(this._$p, this)), this._l1Model = t, this._l1Model && (this._l1Model.propertyChangeDispatcher.addListener(this._$v, this), this._l1Model.listChangeDispatcher.addListener(this._1h, this), this._l1Model.dataChangeDispatcher.addListener(this._$c, this), this._l1Model.parentChangeDispatcher.addListener(this._16, this), this._l1Model.childIndexChangeDispatcher.addListener(this._$l, this), this._l1Model.selectionChangeDispatcher.addListener(this._$p, this)), this._82 && this._82._lp(), void this._4p(n));
            }
        },
        count: {
            get: function () {
                return this._l1Model.length;
            }
        },
        width: {
            get: function () {
                return this.html.clientWidth;
            }
        },
        height: {
            get: function () {
                return this.html.clientHeight;
            }
        },
        viewportBounds: {
            get: function () {
                return this._82._viewportBounds;
            }
        },
        bounds: {
            get: function () {
                return this._82._4h();
            }
        },
        canvasPanel: {
            get: function () {
                return this._82._nbf;
            }
        },
        html: {
            get: function () {
                return this._82._nbf.parentNode;
            }
        },
        navigationType: {
            get: function () {
                return this._82._6s;
            },
            set: function (t) {
                this._82._3e(t);
            }
        },
        _3r: {
            get: function () {
                return this._l1Model._3r;
            }
        },
        currentSubNetwork: {
            get: function () {
                return this._l1Model.currentSubNetwork;
            },
            set: function (t) {
                this._l1Model.currentSubNetwork = t;
            }
        },
        limitedBounds: {
            get: function () {
                return this._limitedBounds;
            },
            set: function (t) {
                return Rect.equals(t, this._limitedBounds) ? false : t ? void (this._limitedBounds = new Rect(t)) : void (this._limitedBounds = null);
            }
        },
        ratio: {
            get: function () {
                return this._82.ratio;
            }
        },
        delayedRendering: {
            get: function () {
                return this._44 === n ? Defaults.DELAYED_RENDERING : this._44;
            },
            set: function (t) {
                t != this.delayedRendering && (this._44 = t, this.pauseRendering(false, true));
            }
        },
        fullRefresh: {
            get: function () {
                return this._82.fullRefresh;
            },
            set: function (t) {
                this._82.fullRefresh = t;
            }
        }
    });

    Defaults.DELAYED_RENDERING = true;
    Defaults.GROUP_MIN_WIDTH = 60;
    Defaults.GROUP_MIN_HEIGHT = 60;

    GroupUI.prototype = {
        initialize: function () {
            doSuper(this, GroupUI, "initialize");
            this.checkBody();
        },
        _nbq: function () {
            this._mi = new Path;
            this.shape = new ImageUI(this._mi);
            this.shape.layoutByPath = false;
            this.addChild(this.shape, 0);
            this.body = this.shape;
        },
        checkBody: function () {
            return this._5b() ? (this._2b = true, this.shape ? (this.shape.visible = true, this.body = this.shape) :
                    (this._nbq(), BY.initBindingProperties(this)), void (this.image && (this.image.visible = false))) :
                (this.image ? (this.image.visible = true, this.body = this.image) : this._nbv(), void (this.shape &&
                (this.shape.visible = false)));
        },
        _5b: function () {
            return this.$data._ic() && this.$data.expanded;
        },
        _mi: null,
        _2b: true,
        _5c: function () {
            this._1d = true;
            this._2b = true;
        },
        doValidate: function () {
            if (this._2b && this._5b()) {
                if (this._2b = false, this.shape.invalidateData(), this.$data.groupImage) {
                    this.shape.data = this.$data.groupImage;
                    var t = this._25();
                    return this.shape.offsetX = t.x + t.width / 2, this.shape.offsetY = t.y + t.height / 2, this.shape.size = {
                        width: t.width,
                        height: t.height
                    }, NodeUI.prototype.doValidate.call(this);
                }
                this.shape.offsetX = 0;
                this.shape.offsetY = 0;
                var i = this._8l(this.$data.groupType);
                this._mi.clear();
                i instanceof Rect ? je(this._mi, i.x, i.y, i.width, i.height, i.rx, i.ry) :
                    i instanceof Qi ? $e(this._mi, i) :
                        i instanceof tn && Be(this._mi, i), this._mi._6h = true, this.shape.invalidateData();
            }
            return NodeUI.prototype.doValidate.call(this);
        },
        _7g: function (t, i, n, e, s) {
            switch ("number" != typeof e && (e = -i / 2), "number" != typeof s && (s = -n / 2), t) {
                case Consts.GROUP_TYPE_CIRCLE:
                    var h = Math.max(i, n) / 2;
                    return new Qi(e + i / 2, s + n / 2, h);
                case Consts.GROUP_TYPE_ELLIPSE:
                    return new tn(e + i / 2, s + n / 2, i, n);
                default:
                    return new Rect(e, s, i, n);
            }
        },
        _25: function () {
            return this._8l(null);
        },
        _8l: function (t) {
            var i;
            var e;
            var s = this.data;
            var h = s.padding;
            var r = s.minSize;
            var a = Defaults.GROUP_MIN_WIDTH;
            var o = Defaults.GROUP_MIN_HEIGHT;
            if (r && ("number" == typeof r.width && (a = r.width), "number" == typeof r.height && (o = r.height),
                    i = r.x, e = r.y), !s.hasChildren()) {
                return this._7g(t, a, o, i, e);
            }
            var f;
            var c = this.$data._fo._k0;
            (t == Consts.GROUP_TYPE_CIRCLE || t == Consts.GROUP_TYPE_ELLIPSE) && (f = []);
            for (var u, _, d, l, v = new Rect, b = 0, y = c.length; y > b; b++) {
                var g = c[b];
                if (this.graph.isVisible(g)) {
                    var x = this.graph.getUI(g);
                    x && (u = x.$x + x._fs.x, _ = x.$y + x._fs.y, d = x._fs.width,
                        l = x._fs.height, v.addRect(u, _, d, l), f && (f.push({
                        x: u,
                        y: _
                    }), f.push({ x: u + d, y: _ }), f.push({ x: u + d, y: _ + l }), f.push({ x: u, y: _ + l })));
                }
            }
            if (v.isEmpty()) {
                return this._7g(t, a, o, i, e);
            }
            var m = this.$data.$location;
            m ? m.invalidateFlag && (m.invalidateFlag = false, i === n && (m.x = v.cx), e === n && (m.y = v.cy)) : m = this.$data.$location = {
                x: v.cx,
                y: v.cy
            }, h && v.grow(h), "number" == typeof i && i + m.x < v.x && (v.width += v.x - (i + m.x), v.x = i + m.x, f && f.push({
                x: v.x,
                y: v.cy
            })), "number" == typeof e && e + m.y < v.y && (v.height += v.y - (v.y, e + m.y), v.y = e + m.y, f && f.push({
                x: v.cx,
                y: v.y
            }));
            var E;
            var i = m.x;
            var e = m.y;
            if (t == Consts.GROUP_TYPE_CIRCLE) {
                E = nn(f);
                E.cx -= i;
                E.cy -= e;
                var p = Math.max(a, o) / 2;
                return E.r < p && (E.cx += p - E.r, E.cy += p - E.r, E.r = p), E;
            }
            return t == Consts.GROUP_TYPE_ELLIPSE ? (E = en(f, v), E.cx -= i, E.cy -= e, E.width < a && (E.cx += (a - E.width) / 2, E.width = a), E.height < o && (E.cy += (o - E.height) / 2, E.height = o), E) : (E = v, v.width < a && (v.width = a), v.height < o && (v.height = o), v.offset(-i, -e), E);
        },
        _$w: function (t, i, n) {
            if (!this._5b()) {
                return doSuper(this, GroupUI, "_$w", arguments);
            }
            var e = this._ndj.onBindingPropertyChange(this, t, i, n);
            return e = PY.onBindingPropertyChange(this, t, i, n) || e, e = $Y.onBindingPropertyChange(this, t, i, n) || e, BY.onBindingPropertyChange(this, t, i, n) || e;
        }
    };

    extend(GroupUI, NodeUI);

    Qunee.GroupUI = GroupUI;

    var IDrawable = {
        draw: function () {
        }
    };

    Defaults.NAVIGATION_IMAGE_LEFT = null;
    Defaults.NAVIGATION_IMAGE_TOP = null;

    addCSSRule(".Q-Graph-Nav img", "opacity:0.7;vertical-align:middle;");
    addCSSRule(".Q-Graph-Nav img:hover,img.hover", "opacity:1;background-color: rgba(0, 0, 0, 0.5)");
    isTouchSupport || (addCSSRule(".Q-Graph-Nav", "opacity:0;" + Fz("transition") + ":opacity 3s cubic-bezier(0.8, 0, 0.8, 1)"),
        addCSSRule(".Q-Graph-Nav:hover", "opacity:1;" + Fz("transition") + ":opacity 0.3s linear"));

    hh.prototype = {
        _dk: function (t, i) {
            return t._i6 == i ? false : (t._i6 = i, void (t.style.visibility = i ? "visible" : "hidden"));
        },
        _3c: function (t, i) {
            var n = i / 2 - this._left._img.clientHeight / 2 + "px";
            this._left._img.style.top = n;
            this._right._img.style.top = n;
            this._navPane.style.width = t + "px";
            this._navPane.style.height = i + "px";
        },
        _nb9: function (t, i, n, e) {
            this._dk(this._top, t);
            this._dk(this._left, i);
            this._dk(this._ncottom, n);
            this._dk(this._right, e);
        },
        _ia: function () {
            var t = this._navPane.parentNode;
            t && t.removeChild(this._navPane);
        },
        _ji: function () {
            var t = this._ncaseCanvas._l1;
            if (t) {
                var i = t.bounds;
                if (i.isEmpty()) {
                    return void this._nb9(false, false, false, false);
                }
                var n = t.viewportBounds;
                var e = n.y > i.y + 1;
                var s = n.x > i.x + 1;
                var h = n.bottom < i.bottom - 1;
                var r = n.right < i.right - 1;
                this._nb9(e, s, h, r);
            }
        }
    };

    addCSSRule(".Q-Graph-ScrollBar", "margin: 2px; position: absolute;box-sizing: border-box;box-shadow: #FFF 0px 0px 1px; " +
        "background-color: rgba(120,120,120,0.3);border-radius: 4px;margin: 1px;");
    addCSSRule(".Q-Graph-ScrollBar.hover, .Q-Graph-ScrollBar:hover", "background-color: #7E7E7E;" +
        Fz("transition") + ": background-color 0.2s linear;");
    addCSSRule(".Q-Graph-ScrollBar--_gw", "width: 8px;right: 0px;");
    addCSSRule(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;");
    addCSSRule(".Q-Graph-ScrollBar--_gw.Both", "margin-bottom: 8px;");
    addCSSRule(".Q-Graph-ScrollBar--H.Both", "margin-right: 8px;");
    isTouchSupport || (addCSSRule(".Q-Graph-ScrollPane", "opacity:0;" + Fz("transition") + ":opacity 3s cubic-bezier(0.8, 0, 0.8, 1);")
        , addCSSRule(".Q-Graph:hover .Q-Graph-ScrollPane", "opacity:1;" + Fz("transition") + ":opacity 0.3s linear;"));

    rh.prototype = {
        _ia: function () {
            this._verticalDragSupport._ia();
            this._horizontalDragSupport._ia();
            delete this._verticalDragSupport;
            delete this._horizontalDragSupport;
            this._me.parentNode && this._me.parentNode.removeChild(this._me);
        },
        _me: null,
        _nbs: null,
        _87: null,
        init: function (t) {
            var n = i.createElement("div");
            n.className = "Q-Graph-ScrollPane";
            css(n, { width: "100%", height: "100%", position: "relative" });
            var e = i.createElement("div");
            e.className = "Q-Graph-ScrollBar Q-Graph-ScrollBar--_gw";
            var s = i.createElement("div");
            s.className = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H";
            n.appendChild(e);
            n.appendChild(s);
            t.appendChild(n);
            this._me = n;
            this._87 = s;
            this._nbs = e;
            s.isH = true;
            var h = this;
            var r = {
                onstart: function (t, i) {
                    i.classList.add("hover");
                },
                onrelease: function (t, i) {
                    i.classList.remove("hover");
                },
                ondrag: function (t, i) {
                    var n = h._ncaseCanvas._l1;
                    if (n) {
                        var e = i.isH;
                        var s = e ? t.dx : t.dy;
                        if (s && i.scale) {
                            var r = n.scale / i.scale;
                            e ? n.translate(-r * s, 0) : n.translate(0, -r * s);
                            Qunee.stopEvent(t);
                        }
                    }
                },
                enddrag: function (t, i) {
                    var n = h._ncaseCanvas._l1;
                    if (n && n.enableInertia) {
                        var e = i.isH;
                        var s = e ? t.vx : t.vy;
                        if (Math.abs(s) > .1) {
                            var r = n.scale / i.scale;
                            s *= r;
                            e ? n._9p(-s, 0) : n._9p(0, -s);
                        }
                    }
                }
            };
            this._verticalDragSupport = new DragSupport(e, r);
            this._horizontalDragSupport = new DragSupport(s, r);
        },
        _3c: function () {
            var t = this._ncaseCanvas._l1;
            t && t.callLater(this._ji.bind(this));
        },
        _ji: function () {
            var t = this._ncaseCanvas._l1;
            if (t) {
                var i = t.bounds;
                if (i.isEmpty()) {
                    return this._4b(false), void this._4j(false);
                }
                var n = t.viewportBounds;
                var e = t.width;
                var s = t.height;
                var h = t.scale;
                var r = 1 / h;
                var a = n.x > i.x + r || n.right < i.right - r;
                var o = n.y > i.y + r || n.bottom < i.bottom - r;
                var f = a && o;
                f ? (appendClass(this._nbs, "Both"), appendClass(this._87, "Both")) : (removeClass(this._nbs, "Both"), removeClass(this._87, "Both"));
                this._4b(a, n, i, f ? e - 10 : e);
                this._4j(o, n, i, f ? s - 10 : s);
            }
        },
        _4b: function (t, i, n, e) {
            if (!t) {
                return this._87.style.display = "none", void (this._87.scale = 0);
            }
            var s = Math.min(i.x, n.x);
            var h = Math.max(i.right, n.right);
            var r = h - s, a = e / r;
            this._87.scale = a;
            this._87.style.left = parseInt((i.x - s) * a) + "px";
            this._87.style.right = parseInt((h - i.right) * a) + "px";
            this._87.style.display = "";
        },
        _4j: function (t, i, n, e) {
            if (!t) {
                return this._nbs.style.display = "none", void (this._nbs.scale = 0);
            }
            var s = Math.min(i.y, n.y);
            var h = Math.max(i.bottom, n.bottom);
            var r = h - s;
            var a = e / r;
            this._nbs.scale = a;
            this._nbs.style.top = parseInt((i.y - s) * a) + "px";
            this._nbs.style.bottom = parseInt((h - i.bottom) * a) + "px";
            this._nbs.style.display = "";
        }
    };

    ah.prototype = {
        shape: null,
        initialize: function () {
            doSuper(this, ah, "initialize");
            this._nbv();
            zY.initBindingProperties(this);
        },
        _nbv: function () {
            this.image = new UY(this.$data.path);
            this.addChild(this.image, 0);
            this.body = this.image;
        },
        invalidateShape: function () {
            this.image.invalidateData();
            this.invalidateRender();
        },
        _$w: function (t, i, n) {
            var e = this._ndj.onBindingPropertyChange(this, t, i, n);
            return e = PY.onBindingPropertyChange(this, t, i, n) || e, zY.onBindingPropertyChange(this, t, i, n) || e;
        },
        doValidate: function () {
            this.body && (this.image.data = this.data.path, this.body.$layoutByAnchorPoint = null != this._2i,
                this.body.anchorPosition = this._2i);
            var t = this.$data.$location;
            var i = 0;
            var n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this.$invalidateBounds = true), this.$x = i, this.$y = n, ElementUI.prototype.doValidate.call(this) || e;
        }
    };

    extend(ah, ElementUI);

    defineProperties(ah.prototype, {
        path: {
            get: function () {
                return this.data.path;
            }
        },
        length: {
            get: function () {
                return this.data.length;
            }
        }
    });

    ah.prototype.addPoint = function (t, i, n) {
        var e = this._it(t, i);
        var s = this.data;
        var h = pn(s.path, e.x, e.y, n);
        h && (s.pathSegments = h);
    };

    oh.prototype = {
        _mp: function () {
            this._jf.style.visibility = "visible";
        },
        _k1: function () {
            this._jf.style.visibility = "hidden";
        },
        clear: function () {
            this._9e.clear();
            this._d1();
        },
        contains: function (t) {
            return t instanceof Object && t.id && (t = t.id), this._9e.containsById(t);
        },
        _50: function (t) {
            wY.setStyle(this._jf, "transform", t ? "matrix(" + t.join(",") + ")" : "");
        },
        addDrawable: function (t, i) {
            if (i) {
                var n = { id: ++GG, drawable: t, scope: i };
                return this._9e.add(n), n;
            }
            return t.id || (t.id = ++GG), this._9e.add(t), t;
        },
        removeDrawable: function (t) {
            return t.id ? void this._9e.remove(t) : this._9e.removeById(t);
        },
        _9e: null,
        invalidate: function () {
            this._d1();
        },
        _d1: function () {
            this._ncaseCanvas._6h || this._jk();
        },
        _j7: function (t, i) {
            this._jf.setSize(t, i);
        },
        _jk: function () {
            var t = this._ncaseCanvas._scale;
            var i = this.g;
            i._l8();
            i.save();
            this._ncaseCanvas._9z(i);
            for (var n = this._9e._k0, e = 0, s = n.length; s > e; e++) {
                i.save();
                i.beginPath();
                this._hs(i, n[e], t);
                i.restore();
            }
            i.restore();
        },
        _hs: function (t, i, n) {
            return i instanceof Function ? void i(t, n) : void (i.drawable instanceof Function && i.scope && i.drawable.call(i.scope, t, n));
        }
    };

    Defaults.ZOOM_ANIMATE = true;

    var iW = function (t) {
        this._l1 = t;
    };

    Defaults.ANIMATION_MAXTIME = 600;
    Defaults.ANIMATION_TYPE = animationEffect.easeOut;

    iW.prototype = {
        _l1: null,
        _nb: .001,
        _e6: null,
        _ndg: function (t) {
            return t > 1 ? 1 : -1 > t ? -1 : t;
        },
        _h3: function (t, i, n) {
            this._mc();
            t *= .6;
            i *= .6;
            t = this._ndg(t);
            i = this_ndg(i);
            var e = Math.sqrt(t * t + i * i);
            if (.01 > e) {
                return false;
            }
            var s = Math.min(Defaults.ANIMATION_MAXTIME, e / this._nb);
            this._speedX = t;
            this._speedY = i;
            this._nbX = t / s;
            this._nbY = i / s;
            this._7h(this._5q, s, animationEffect.easeOutStrong, n);
        },
        _7h: function (t, i, n, e, s) {
            this._e6 && this._e6._mc();
            s && (this.__delayRender = true, this._l1.pauseRendering(true));
            this._40();
            this._e6 = new yH(t, this, i, n);
            this._e6._72 = this._72.bind(this);
            this._e6._l9(e);
        },
        _40: function () {
            this._l1.onAnimationStart();
        },
        _72: function () {
            this.__delayRender && (this._l1.pauseRendering(false), delete this.__delayRender);
            this._l1.onAnimationEnd();
        },
        _ea: function () {
            return this._e6 && this._e6._ea();
        },
        _5q: function (t, i) {
            if (0 != t) {
                var n = this._speedX * i - .5 * this._nbX * i * i;
                var e = this._speedY * i - .5 * this._nbY * i * i;
                this._speedX -= this._nbX * i;
                this._speedY -= this._nbY * i;
                this._l1.translate(n, e);
            }
        },
        _mc: function () {
            this._e6 && this._e6._mc();
        },
        _j8: function (t) {
            var i = this._fromTX + (this._toTX - this._fromTX) * t;
            var n = this._fromTY + (this._toTY - this._fromTY) * t;
            var e = this._fromScale + (this._toScale - this._fromScale) * t;
            this._l1.translateTo(i, n, e, this.toInt);
        },
        _la: function (t, i, n, e, s) {
            this._mc();
            var h = this._l1, r = h.scale;
            if (0 >= n && (n = r), t != h.tx || i != h.ty || n != r) {
                var a;
                var o;
                var f;
                e instanceof Object && (a = e.duration, o = e.maxTime, f = e.animationType);
                var c = h.tx;
                var u = h.ty;
                if (!a) {
                    if (n != r) {
                        var _ = n > r ? n / r : r / n;
                        _ = Math.log(_) / Math.log(1.3);
                        a = 60 * _;
                    } else {
                        var d = calculateDistance(t, i, c, u);
                        a = d / 2;
                    }
                }
                o = o || Defaults.ANIMATION_MAXTIME;
                f = f || Defaults.ANIMATION_TYPE;
                a = Math.min(o, a);
                this._fromTX = c;
                this._fromTY = u;
                this._fromScale = r;
                this._toTX = t;
                this._toTY = i;
                this._toScale = n;
                this._7h(this._j8, a, f, s, n != r);
            }
        }
    };

    Defaults.INTERACTION_HANDLER_SIZE_TOUCH = 8;
    Defaults.INTERACTION_HANDLER_SIZE_DESKTOP = 4;
    Defaults.INTERACTION_ROTATE_HANDLER_SIZE_TOUCH = 30;
    Defaults.INTERACTION_ROTATE_HANDLER_SIZE_DESKTOP = 20;


    DrawableInteraction.prototype = {
        onElementRemoved: function (t, i) {
            this.element && (t == this.element || isArray(t) && m(t, this.element)) && this.destroy(i);
        },
        onClear: function (t) {
            this.element && this.destroy(t);
        },
        destroy: function () {
            delete this.element;
            this.removeDrawable();
        },
        invalidate: function () {
            this.topCanvas.invalidate();
        },
        removeDrawable: function () {
            this._g4Id && (this.topCanvas.removeDrawable(this._g4Id), delete this._g4Id, this.invalidate());
        },
        addDrawable: function () {
            this._g4Id || (this._g4Id = this.topCanvas.addDrawable(this.doDraw, this).id, this.invalidate());
        },
        doDraw: function () {
        },
        escapable: true,
        onkeydown: function (t, i) {
            this.escapable && 27 == t.keyCode && (stopEvent(t), this.destroy(i));
        }
    };

    Qunee.DrawableInteraction = DrawableInteraction;

    _h.prototype = {
        defaultCursor: "default",
        getInteractionInstances: function (t) {
            if (!this.interactions) {
                return null;
            }
            for (var i = [], n = 0, e = this.interactions.length; e > n; n++) {
                var s = this.interactions[n];
                s instanceof Function ? i.push(new s(t)) : s instanceof Object && i.push(s);
            }
            return i;
        }
    };

    DrawPathInteraction.prototype = {
        _ed: null,
        _kh: null,
        destroy: function () {
            doSuper(this, DrawPathInteraction, "destroy", arguments);
            delete this._kh;
            delete this._9d;
            delete this._ed;
        },
        doDraw: function (t) {
            var i = this.points;
            i && (i.forEach(function (i) {
                this.drawPoint(t, i);
            }, this), this.isClosePath && t.closePath(), this.styleDraw(t));
        },
        styleDraw: function (t) {
            var i = lh(this.graph.interactionProperties, this.getDefaultDrawStyles(this.graph));
            i.lineWidth && (t.lineWidth = i.lineWidth, i.lineCap && (t.lineCap = i.lineCap),
            i.lineJoin && (t.lineJoin = i.lineJoin), i.lineDash && (t.lineDash = i.lineDash,
                t.lineDashOffset = i.lineDashOffset || 0), t.strokeStyle = i.strokeStyle, t.stroke());
            i.fillStyle && (t.fillStyle = i.fillStyle, t.fill());
        },
        drawPoint: function (t, i, n) {
            if (n) {
                return void t.moveTo(i.x, i.y);
            }
            if (Qunee.isArray(i)) {
                var e = i[0];
                var s = i[1];
                t.quadraticCurveTo(e.x, e.y, s.x, s.y);
            } else {
                t.lineTo(i.x, i.y);
            }
        },
        setCurrentPoint: function (t) {
            this.currentPoint = t;
        },
        addPoint: function (t) {
            this._kh || (this._kh = [], this.addDrawable());
            this._kh.push(t);
            this.invalidate();
        }
    };

    extend(DrawPathInteraction, DrawableInteraction);

    defineProperties(DrawPathInteraction.prototype, {
        currentPoint: {
            get: function () {
                return this._9d;
            },
            set: function (t) {
                this._9d = t;
                this.invalidate();
            }
        },
        prevPoint: {
            get: function () {
                return this._kh && this._kh.length ? this._kh[this._kh.length - 1] : null;
            }
        },
        points: {
            get: function () {
                return this._9d && this._kh && this._kh.length ? this._kh.concat(this._9d) : void 0;
            }
        }
    });

    Qunee.DrawPathInteraction = DrawPathInteraction;

    CreateEdgeInteraction.prototype = {
        destroy: function () {
            doSuper(this, CreateEdgeInteraction, "destroy", arguments);
            delete this.start;
            this._lh && (clearTimeout(this._lh), delete this._lh);
        },
        doDraw: function (t, i) {
            return this._kh ? this._kh.length <= 1 ? CreateSimpleEdgeInteraction.prototype.doDraw.call(this, t, i) : void doSuper(this, CreateEdgeInteraction, "doDraw", arguments) : void 0;
        },
        ondblclick: function (t, i) {
            this.destroy(i);
        },
        finish: function (t, i, n) {
            var e;
            this._kh && this._kh.length >= 2 && (this._kh.shift(), e = new HashList, forEach(this._kh, function (t) {
                if (Qunee.isArray(t)) {
                    var i = t[0];
                    var n = t[1];
                    e.add(new PathSegment(Consts.SEGMENT_QUAD_TO, [i.x, i.y, n.x, n.y]));
                } else {
                    e.add(new PathSegment(Consts.SEGMENT_LINE_TO, [t.x, t.y]));
                }
            }, this));
            i.createEdgeByInteraction(this.start, n, t, e);
            this.destroy(i);
        },
        _nct: function (t, i) {
            return t instanceof Node && i.canLinkFrom(t);
        },
        _eg: function (t, i) {
            return t instanceof Node && i.canLinkTo(t, this.start);
        },
        _9f: function (t, i) {
            var n = i.getUI(t);
            return n && n.bodyBounds ? n.bodyBounds.center : t.location;
        },
        onstart: function (t, i) {
            if (this.start) {
                var n = t.getData();
                return this._eg(n, i) ? void this.finish(t, i, n) : void this.addPoint(this.toLogicalPoint(t));
            }
        },
        startdrag: function (t, i) {
            if (!this.start && !t.responded) {
                var n = t.getData();
                n && this._nct(n, i) && (t.responded = true, this.start = n, this.addPoint(this._9f(n, i)));
            }
        },
        _ndf: function (t) {
            this._lh && (clearTimeout(this._lh), delete this._lh);
            this._lh = setTimeout(function (t) {
                if (delete this._lh, this.start && this.currentPoint) {
                    var i = t.x - this.currentPoint.x;
                    var n = t.y - this.currentPoint.y;
                    Math.sqrt(i * i + n * n) * this.graph.scale <= 2 && this.addPoint(this.currentPoint);
                }
            }.bind(this, this.toLogicalPoint(t)), Defaults.LONG_PRESS_INTERVAL);
        },
        ondrag: function (t, i) {
            this.onmousemove(t, i);
        },
        enddrag: function (t, i) {
            if (this.start) {
                var n = t.getData();
                this._eg(n, i) && this.finish(t, i, n);
            }
        },
        onrelease: function (t, i) {
            Xz(t) && this.destroy(i);
        },
        onmousemove: function (t, i) {
            this.start && (this.currentPoint = this.toLogicalPoint(t), Xz(t) && this._ndf(t, i));
        },
        toLogicalPoint: function (t) {
            return this.graph.toLogical(t);
        },
        getDefaultDrawStyles: function () {
            return {
                lineWidth: this.graph.getDefaultStyle(Styles.EDGE_WIDTH),
                strokeStyle: this.graph.getDefaultStyle(Styles.EDGE_COLOR),
                lineDash: this.graph.getDefaultStyle(Styles.EDGE_LINE_DASH),
                lineDashOffset: this.graph.getDefaultStyle(Styles.EDGE_LINE_DASH_OFFSET),
                lineCap: this.graph.getDefaultStyle(Styles.LINE_CAP),
                lineJoin: this.graph.getDefaultStyle(Styles.LINE_JOIN)
            }
        }
    };

    extend(CreateEdgeInteraction, DrawPathInteraction);

    Qunee.CreateEdgeInteraction = CreateEdgeInteraction;

    CreateShapeInteraction.prototype = {
        getDefaultDrawStyles: function () {
            return {
                lineWidth: this.graph.getDefaultStyle(Styles.SHAPE_STROKE),
                strokeStyle: this.graph.getDefaultStyle(Styles.SHAPE_STROKE_STYLE),
                fillStyle: this.graph.getDefaultStyle(Styles.SHAPE_FILL_COLOR)
            }
        },
        finish: function (t, i) {
            if (this._kh && this._kh.length) {
                var n = this._kh;
                var e = 0;
                var s = 0;
                var h = 0;
                n.forEach(function (t) {
                    return Qunee.isArray(t) ? void t.forEach(function () {
                        e += t.x;
                        s += t.y;
                        h++;
                    }) : (e += t.x, s += t.y, void h++);
                });
                e /= h;
                s /= h;
                var r = [];
                n.forEach(function (t, i) {
                    if (0 == i) return void r.push(new PathSegment(Consts.SEGMENT_MOVE_TO, [t.x - e, t.y - s]));
                    if (Qunee.isArray(t)) {
                        var n = t[0];
                        var h = t[1];
                        r.push(new PathSegment(Consts.SEGMENT_QUAD_TO, [n.x - e, n.y - s, h.x - e, h.y - s]));
                    } else {
                        r.push(new PathSegment(Consts.SEGMENT_LINE_TO, [t.x - e, t.y - s]));
                    }
                });
                this.createElement(t, r, e, s);
                this.destroy(i)
            }
        },
        startdrag: function (t) {
            t.responded = true;
        },
        createElement: function (t, i, n, e) {
            return this.graph.createShapeByInteraction(t, i, n, e);
        },
        onstart: function (t, i) {
            var n = i.toLogical(t);
            this._ed = n;
            this.addPoint(n);
        },
        onmousemove: function (t, i) {
            this._ed && (this.currentPoint = i.toLogical(t));
        },
        ondblclick: function (t, i) {
            if (this._ed) {
                if (this._kh.length < 3) {
                    return void this.destroy(i);
                }
                delete this._kh[this._kh.length - 1];
                this.finish(t, i);
            }
        },
        isClosePath: true
    };

    extend(CreateShapeInteraction, DrawPathInteraction);

    Qunee.CreateShapeInteraction = CreateShapeInteraction;

    CreateLineInteraction.prototype = {
        isClosePath: false, createElement: function (t, i, n, e) {
            return this.graph.createLineByInteraction(t, i, n, e)
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: DefaultStyles[Styles.SHAPE_STROKE],
                strokeStyle: DefaultStyles[Styles.SHAPE_STROKE_STYLE],
                lineDash: this.graph.getDefaultStyle(Styles.SHAPE_LINE_DASH),
                lineDashOffset: this.graph.getDefaultStyle(Styles.SHAPE_LINE_DASH_OFFSET),
                lineCap: this.graph.getDefaultStyle(Styles.LINE_CAP),
                lineJoin: this.graph.getDefaultStyle(Styles.LINE_JOIN)
            }
        }
    };

    extend(CreateLineInteraction, CreateShapeInteraction);

    Qunee.CreateLineInteraction = CreateLineInteraction;

    CreateSimpleEdgeInteraction.prototype = {
        destroy: function (t) {
            doSuper(this, CreateSimpleEdgeInteraction, "destroy", arguments), t.cursor = "", this.start = null
        }, doDraw: function (t) {
            if (this.start && this.currentPoint) {
                var i, n;
                this.graph.interactionProperties && (i = this.graph.interactionProperties.uiClass, n = this.graph.interactionProperties.edgeType), i = i || this.graph.edgeUIClass || Qunee.EdgeUI, n = n || this.graph.edgeType;
                var e = i.drawReferenceLine || Qunee.EdgeUI.drawReferenceLine, s = this.graph.getUI(this.start);
                s && s.bodyBounds && (s = s.bodyBounds.center, forEachChild(t, s, this.currentPoint, n), this.styleDraw(t))
            }
        }, canLinkFrom: function (t, i) {
            return t instanceof Node && i.canLinkFrom(t)
        }, canLinkTo: function (t, i) {
            return t instanceof Node && i.canLinkTo(t, this.start)
        }, startdrag: function (t, i) {
            var n = t.getData();
            this.canLinkFrom(n, i) && (t.responded = true, this.start = n, i.cursor = "crosshair", this.addDrawable())
        }, ondrag: function (t, i) {
            this.start && (Qunee.stopEvent(t), this.currentPoint = i.toLogical(t), this.invalidate())
        }, enddrag: function (t, i) {
            if (this.start) {
                this.invalidate();
                var n = t.getData();
                this.canLinkTo(n, i) && i.createEdgeByInteraction(this.start, n, t), this.destroy(i)
            }
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: this.graph.getDefaultStyle(Styles.EDGE_WIDTH),
                strokeStyle: this.graph.getDefaultStyle(Styles.EDGE_COLOR),
                lineDash: this.graph.getDefaultStyle(Styles.EDGE_LINE_DASH),
                lineDashOffset: this.graph.getDefaultStyle(Styles.EDGE_LINE_DASH_OFFSET),
                lineCap: this.graph.getDefaultStyle(Styles.LINE_CAP),
                lineJoin: this.graph.getDefaultStyle(Styles.LINE_JOIN)
            }
        }
    };

    extend(CreateSimpleEdgeInteraction, DrawPathInteraction);

    Qunee.CreateSimpleEdgeInteraction = CreateSimpleEdgeInteraction;

    Defaults.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS = false;

    LabelEditor.prototype = {
        html: null,
        createHTML: function () {
            var t = i.createElement("textarea");
            t.className = "Q-LabelEditor";
            t.style.position = "absolute";
            t.style.textAlign = "center";
            t.style.border = "solid #08E 1px";
            t.style.padding = "5px";
            t.style.boxShadow = "0px 0px 10px rgba(40, 85, 184, 0.75)";
            t.style.display = "none";
            t.style.overflow = "hidden";
            var n = this;
            return t.oninput = function (t) {
                n.onValueChange(t);
            }, t.onkeydown = function (t) {
                return 27 == t.keyCode ? void n.cancelEdit() : void 0;
            }, t.onkeypress = function (i) {
                if (13 == i.keyCode || 10 == i.keyCode) {
                    if (i.preventDefault(), i.altKey || i.ctrlKey || i.shiftKey) {
                        return ph(t, "\n"), void n.onValueChange(i);
                    }
                    n.stopEdit();
                }
            }, i.body.appendChild(t), t;
        },
        setText: function (t, i) {
            this.html.value = t || "";
            i && (this.html.style.fontSize = i);
            wh(this.html);
            this.onSizeChange(this.html);
        },
        onSizeChange: function (t) {
            var i = (t.offsetWidth, t.offsetHeight, Eh(t));
            return t.style.width = i.width + 30 + "px", t.style.height = i.height + 10 + "px", i;
        },
        onValueChange: function (t) {
            var i = t.target;
            this.onSizeChange(i);
            i.style.left = i.x - i.offsetWidth / 2 + "px";
        },
        onClickOnWindow: function (t) {
            t.target != this.html && (Defaults.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS ? this.stopEdit() : this.cancelEdit());
        },
        startEdit: function (i, n, e, s, h) {
            this.html || (this.html = this.createHTML());
            this.stopEditWhenClickOnWindow || (this.stopEditWhenClickOnWindow = function (t) {
                this.onClickOnWindow(t);
            }.bind(this));
            t.addEventListener("mousedown", this.stopEditWhenClickOnWindow, true);
            this.callback = h;
            this.html.x = i;
            this.html.y = n;
            this.html.style.display = "block";
            mh(this.html, i, n);
            this.setText(e, s || 10);
            mh(this.html, i, n);
        },
        isEditing: function () {
            return "none" != this.html.style.display;
        },
        cancelEdit: function () {
            this.stopEdit(true);
        },
        stopEdit: function (i) {
            if (this.isEditing()) {
                t.removeEventListener("mousedown", this.stopEditWhenClickOnWindow);
                var n = this.html.value;
                if (!i && this.callback && this.callback(n) === false) {
                    return false;
                }
                this.html.style.display = "none";
                this.html.value = null;
                this.callback = null;
            }
        },
        destroy: function () {
            this.html && i.body.removeChild(this.html);
        }
    };

    Qunee.LabelEditor = LabelEditor;

    var DoubleClickInteraction = function (t) {
        this.graph = t;
    };

    DoubleClickInteraction.prototype = {
        destroy: function (t) {
            t.labelEditor && (t.labelEditor.destroy(), delete t.labelEditor);
        },
        ondblclick: function (t, i) {
            var n = t.getData();
            if (n) {
                if (n.dblclickable !== false) {
                    if (i.editable && i.isEditable(n)) {
                        var e = i.hitTest(t);
                        if (e instanceof LabelUI && e.editable !== false) {
                            var s = i.labelEditor;
                            s || (i.labelEditor = s = new LabelEditor);
                            var h = e.getBounds();
                            return h = i.toCanvas(h.x + h.width / 2, h.y + h.height / 2), h = xh(h.x, h.y, i.html), void i.startLabelEdit(n, e, s, h);
                        }
                    }
                    var r = n instanceof Group, a = n instanceof Edge && n.hasEdgeBundle();
                    return n._3z && (isMetaKey(t) || !r && !a) ? void (i.currentSubNetwork = n) : r ? (n.expanded = !n.expanded, void this.graph.onInteractionEvent(new InteractionEvent(this.graph, InteractionEvent.GROUP_EXPANDED, t, n))) : void (a && this.graph.reverseExpanded(n) && this.graph.onInteractionEvent(new InteractionEvent(this.graph, InteractionEvent.EDGE_BUNDLE, t, n)));
                }
            } else {
                if (i.currentSubNetwork) {
                    return void i.upSubNetwork();
                }
                if (i.enableDoubleClickToOverview) {
                    var o = i.resetScale || 1;
                    Math.abs(i.scale - o) < 1e-4 ? i.zoomToOverview() : i.moveToCenter(o);
                }
            }
        }
    };

    var EditInteraction = function (t) {
        this.graph = t;
    };

    EditInteraction.prototype = {
        onkeydown: function (t, i) {
            if (i.editable) {
                var n = t.keyCode;
                if (8 == n || 46 == n || 127 == n) return i.removeSelectionByInteraction(t), void eventPreventDefault(t);
                if (isMetaKey(t)) {
                    if (67 == n) {

                    } else if (86 == n) {

                    } else if (90 == n) {

                    } else if (89 != n) {
                        return;
                    }
                    eventPreventDefault(t);
                }
            }
        }
    };

    Qunee.EditInteraction = EditInteraction;

    var ExportInteraction = function (t) {
        this.graph = t;
    };

    ExportInteraction.prototype = {
        onkeydown: function (i, n) {
            if (i.metaKey && 83 == i.keyCode) {
                var e = n.exportImage(n.scale, n.viewportBounds);
                var s = t.open();
                var h = s.document;
                h.title = "export image - " + e.width + " x " + e.height;
                var r = h.createElement("img");
                r.src = e.data;
                h.body.appendChild(r);
                eventPreventDefault(i);
            }
        }
    };

    var MoveInteraction = function (t) {
        this.graph = t;
    };

    MoveInteraction.prototype = {
        destroy: function () {
            delete this.draggingElements;
            delete this.currentDraggingElement
        },
        _1s: function (t) {
            var i = new HashList;
            return t.selectionModel.forEach(function (n) {
                t.isMovable(n) && t.isVisible(n) && i.add(n);
            }, this), i;
        },
        onstart: function (t, i) {
            this.currentDraggingElement && this.destroy(i);
        },
        startdrag: function (t, i) {
            if (!(t.responded || t.touches && 1 != t.touches.length)) {
                var n = t.getData();
                if (!n || !i.isSelected(n) || !i.isMovable(n)) {
                    return void this.destroy(i);
                }
                t.responded = true;
                this.currentDraggingElement = n;
                this.draggingElements = this._1s(i);
                var e = new InteractionEvent(i, InteractionEvent.ELEMENT_MOVE_START, t, this.currentDraggingElement, this.draggingElements.datas);
                return i.beforeInteractionEvent(e) === false ? void this.destroy(i) : void i.onInteractionEvent(e)
            }
        },
        ondrag: function (t, i) {
            if (this.currentDraggingElement) {
                if (t.touches && 1 != t.touches.length) {
                    return void this.enddrag(t, i);
                }
                stopEvent(t);
                var n = t.dx;
                var e = t.dy;
                var s = i.scale;
                n /= s;
                e /= s;
                var h = new InteractionEvent(i, InteractionEvent.ELEMENT_MOVING, t, this.currentDraggingElement, this.draggingElements.datas);
                i.moveElements(this.draggingElements.datas, n, e);
                i.onInteractionEvent(h);
            }
        },
        enddrag: function (t, i) {
            if (this.currentDraggingElement) {
                if (this.draggingElements && this.draggingElements.length) {
                    if (t.shiftKey) {
                        var n;
                        var e = i.toLogical(t);
                        var s = e.x;
                        var h = e.y;
                        i.forEachReverseVisibleUI(function (t) {
                            var i = t.data;
                            if (!this.draggingElements.contains(i) && t.uiBounds.intersectsPoint(s - t.x, h - t.y) && t.hitTest(s, h, 1)) {
                                if (i instanceof Qunee.Edge) {
                                    if (!i.enableSubNetwork) return;
                                    for (var e = this.draggingElements.length; e-- > 0;) {
                                        var r = this.draggingElements.get(e);
                                        if (r instanceof Qunee.Node && r.linkedWith(i)) {
                                            return;
                                        }
                                    }
                                    return n = i, false;
                                }
                                return (i.enableSubNetwork || i._ic() && i.expanded) && (n = i), false;
                            }
                        }, this);
                        n && this.draggingElements.forEach(function (t) {
                            for (var i = t.parent; i;) {
                                if (this.draggingElements.contains(i)) {
                                    return;
                                }
                                i = i.parent;
                            }
                            t.parent = n;
                        }, this);
                    }
                    var r = new InteractionEvent(i, InteractionEvent.ELEMENT_MOVE_END, t, this.currentDraggingElement, this.draggingElements.datas);
                    i.onInteractionEvent(r)
                }
                this.destroy(i);
            }
        },
        onpinch: function (t, i) {
            this.currentDraggingElement && this.enddrag(t, i);
        },
        step: 1,
        onkeydown: function (t, i) {
            if (isMetaKey(t)) {
                var n;
                var e;
                if (37 == t.keyCode ? n = -1 : 39 == t.keyCode ? n = 1 : 38 == t.keyCode ? e = -1 : 40 == t.keyCode && (e = 1),
                    n || e) {
                    var s = this._1s(i).datas;
                    if (0 != s.length) {
                        eventPreventDefault(t);
                        n = n || 0;
                        e = e || 0;
                        var h = this.step / i.scale;
                        var r = new InteractionEvent(i, InteractionEvent.ELEMENT_MOVE_END, t, null, s);
                        i.moveElements(s, n * h, e * h);
                        i.onInteractionEvent(r);
                    }
                }
            }
        }
    };

    var PanInteraction = function (t) {
        this.graph = t;
    };

    PanInteraction.prototype = {
        onkeydown: function (t, i) {
            isMetaKey(t) || (37 == t.keyCode ? (this._52(i, 1, 0), eventPreventDefault(t)) : 39 == t.keyCode ?
                    (this._52(i, -1, 0), eventPreventDefault(t)) : 38 == t.keyCode ? (this._52(i, 0, 1), eventPreventDefault(t)) :
                        40 == t.keyCode && (this._52(i, 0, -1), eventPreventDefault(t)));
        },
        _52: function (t, i, n) {
            t._9p(i, n);
        },
        onstart: function (t, i) {
            this._l9 && this.destroy(i);
        },
        _l9: false,
        startdrag: function (t, i) {
            if (!t.responded) {
                t.responded = true;
                this._l9 = true;
                i.cursor = fH;
                var n = new InteractionEvent(i, InteractionEvent.PAN_START, t);
                i.onInteractionEvent(n);
            }
        },
        ondrag: function (t, i) {
            this._l9 && i.translate(t.dx || 0, t.dy || 0);
        },
        enddrag: function (t, i) {
            if (this._l9) {
                if (i.enableInertia !== false) {
                    var n = t.vx;
                    var e = t.vy;
                    (Math.abs(n) > .1 || Math.abs(e) > .1) && i._9p(n, e);
                }
                this.destroy(i);
                var s = new InteractionEvent(i, InteractionEvent.PAN_END, t);
                i.onInteractionEvent(s);
            }
        },
        startpinch: function (t, i) {
            i.pauseRendering(true);
        },
        onpinch: function (t, i) {
            this._l9 = true;
            var n = t.dScale;
            if (n) {
                var e = i.globalToLocal(t.center);
                i.zoomAt(n, e.x, e.y, false);
            }
        },
        endpinch: function (t, i) {
            i.pauseRendering(false);
        },
        destroy: function (t) {
            this._l9 = false;
            t.cursor = null;
        }
    };

    PointsInteraction.prototype = {
        _1f: function (t) {
            this.element && t.source == this.element && this.graph.callLater(function () {
                this._ji();
            }, this);
        },
        _8: function () {
            this._mgPropertyChangeListing || (this._mgPropertyChangeListing = true,
                this.graph.dataPropertyChangeDispatcher.addListener(this._1f, this));
        },
        _6: function () {
            this._mgPropertyChangeListing = false;
            this.graph.dataPropertyChangeDispatcher.removeListener(this._1f, this);
        },
        onElementRemoved: function (t, i) {
            this.element && (t == this.element || Array.isArray(t) && m(t, this.element)) && this.destroy(i);
        },
        onClear: function (t) {
            this.element && this.destroy(t);
        },
        destroy: function () {
            this.graph.cursor = null;
            this.element && delete this.element._editting;
            this._mousePressed = false;
            delete this.element;
            delete this._9c;
            delete this._9d;
            delete this._ndanEdit;
            this._77();
            this._6();
        },
        _77: function () {
            this.drawLineId && (this.topCanvas.removeDrawable(this.drawLineId),
                delete this.drawLineId, this.topCanvas.invalidate());
        },
        _ncr: function () {
            this.drawLineId && this.topCanvas.contains(this.drawLineId) ||
            (this.drawLineId = this.topCanvas.addDrawable(this.drawLine, this).id, this.topCanvas.invalidate());
        },
        _9c: null,
        _5o: function (t) {
            this._9c = t;
            this.invalidate();
        },
        _ef: function (t, i, n) {
            t.beginPath();
            i.isControlPoint ? t.rect(i.x - this.handlerSize / n, i.y - this.handlerSize / n, this.handlerSize / n * 2,
                    this.handlerSize / n * 2) :
                t.arc(i.x, i.y, this.handlerSize / n, 0, 2 * Math.PI, false);
            t.lineWidth = 1 / n;
            t.lineDash = [];
            t.strokeStyle = "#888";
            t.fillStyle = "rgba(255, 255, 0, 0.8)";
            t.stroke();
            t.fill();
        },
        _g4: function (t, i, n, e) {
            e ? t.moveTo(i, n) : t.lineTo(i, n);
        },
        drawLine: function (t, i) {
            if (this._9c && this._9c.length) {
                t.save();
                var n = this.element instanceof ShapeNode;
                n && (t.translate(this.element.x, this.element.y), this.element.rotate && t.rotate(this.element.rotate));
                var e;
                var s = [];
                t.beginPath();
                this._9c.length;
                this._9c.forEach(function (i) {
                    if (i.type != Consts.SEGMENT_CLOSE) {
                        for (var n = 0, h = i.points; n + 1 < h.length;) {
                            var r = h[n];
                            var a = h[n + 1];
                            var o = { x: r, y: a, isControlPoint: this._7a(i, n) };
                            s.push(o);
                            this._g4(t, o.x, o.y, null == e);
                            e = o;
                            n += 2;
                        }
                    }
                }, this);
                t.lineWidth = 1 / i;
                t.lineDash = [2 / i, 3 / i];
                t.strokeStyle = "#555";
                t.stroke();
                s.forEach(function (n) {
                    this._ef(t, n, i);
                }, this);
                t.restore();
            }
        },
        invalidate: function () {
            this.topCanvas.invalidate();
        },
        _3o: function (t) {
            if (this.element != t && (this.element && this.destroy(), t && this.isEditable(t))) {
                var i = this._5x(t, this.graph);
                i && (this.element = t, t._editting = true, this._ndanEdit = true, this._5o(i), this._8(), this._ncr());
            }
        },
        _ji: function () {
            if (this.drawLineId && this.element) {
                var t = this._5x(this.element, this.graph);
                return t ? void this._5o(t) : void this.destroy(this.graph);
            }
        },
        _5x: function (t, i) {
            if (i.isEditable(t)) {
                var n = t.pathSegments || [];
                n instanceof HashList && (n = n.toDatas());
                var e = i.getUI(t);
                if (e instanceof Qunee.EdgeUI) {
                    var s = t.fromAgent;
                    var h = t.toAgent;
                    var r = i.getUI(s);
                    var a = i.getUI(h);
                    var o = r.bodyBounds.clone();
                    var f = a.bodyBounds.clone();
                    var c = o.center;
                    var u = f.center;
                    var _ = e.getStyle(Qunee.Styles.EDGE_FROM_OFFSET);
                    var d = e.getStyle(Qunee.Styles.EDGE_TO_OFFSET);
                    _ && (c.x += _.x || 0, c.y += _.y || 0);
                    d && (u.x += d.x || 0, u.y += d.y || 0);
                    n.splice(0, 0, new Qunee.PathSegment(Consts.SEGMENT_MOVE_TO, [c.x, c.y]));
                    n.push(new Qunee.PathSegment(Consts.SEGMENT_MOVE_TO, [u.x, u.y]));
                }
                return n;
            }
        },
        _it: function (t, i) {
            t -= this.element.x;
            i -= this.element.y;
            var n = { x: t, y: i };
            return this.element.rotate && Bs(n, -this.element.rotate), n;
        },
        onclick: function (t, i) {
            if (i.editable && t.altKey && this.element) {
                var n = this._gq(t, i);
                if (n && n.isControlPoint) {
                    return void this.element.removePathSegmentByIndex(n.index);
                }
                if (this.element == t.getData()) {
                    var e = i.toLogical(t);
                    var s = i.getUI(this.element);
                    s.addPoint(e.x, e.y, this.handlerSize || 2);
                }
            }
        },
        isEditable: function (t) {
            return this.graph.isEditable(t) && (t instanceof ShapeNode || t instanceof Edge && (!t.isLooped() || t.hasPathSegments()));
        },
        ondblclick: function (t, i) {
            if (!i.editable) {
                return void (this.element && this.destroy(i));
            }
            var n = t.getData();
            return !n || n == this.element || n._editting ? void this.destroy(i) : void this._3o(n);
        },
        onstart: function (t, i) {
            if (this._mousePressed = true, !i.editable) {
                return void (this.element && this.destroy(i));
            }
            if (!t.responded) {
                if (this.element && this._gq(t, i)) {
                    return void (t.responded = true);
                }
                var n = t.getData();
                return n && i.isResizable(n) && n instanceof ShapeNode ?
                    void (this.element && n != this.element && this.destroy()) : void this._3o(n);
            }
        },
        onrelease: function () {
            this._mousePressed = false;
            this.element && (this._ndanEdit = true);
        },
        _9d: null,
        _gq: function (t, i) {
            var n = i.toLogical(t);
            this.element instanceof ShapeNode && (n = this._it(n.x, n.y));
            var e;
            var s = i.scale;
            var h = this.handlerSize / s;
            var r = this._9c;
            var a = r.length;
            var o = this.element instanceof Qunee.Edge;
            return r.forEach(function (t, s) {
                for (var f = 0, c = t.points; f + 1 < c.length;) {
                    var u = c[f];
                    var _ = c[f + 1];
                    var d = calculateDistance(n.x, n.y, u, _);
                    if (h > d) {
                        if (e = {
                            oldPoints: c.slice(0),
                            segment: t,
                            index: s,
                            pointIndex: f
                        }, o && (e.index -= 1), o && !Oh(t) && (0 == s || s == r.length - 1)) {
                            e.isEndPoint = true;
                            var l = 0 == s;
                            e.isFrom = l;
                            var v = l ? Qunee.Styles.EDGE_FROM_OFFSET : Qunee.Styles.EDGE_TO_OFFSET;
                            var b = i.getStyle(this.element, v) || {};
                            e.oldPoints = [b.x || 0, b.y || 0];
                        }
                        return this._7a(t, f) && (e.isControlPoint = true, s > 0 && (e.prevSegment = r instanceof HashList ? r.getByIndex(s - 1) : r[s - 1]), a > s + 1 && (e.nextSegment = r instanceof HashList ? r.getByIndex(s + 1) : r[s + 1], e.nextSegment.points && (e.oldNextPoints = e.nextSegment.points.slice(0)))), false;
                    }
                    f += 2;
                }
            }, this), e;
        },
        _7a: function (t, i) {
            return i == t.points.length - 2;
        },
        startdrag: function (t, i) {
            if (this.element && this._ndanEdit && (this._9d = this._gq(t, i), this._9d)) {
                this._77();
                t.responded = true;
                var n = new InteractionEvent(i, InteractionEvent.POINT_MOVE_START, t, this.element);
                n.point = this._9d;
                i.onInteractionEvent(n);
            }
        },
        onkeyup: function (t, i) {
            this._mousePressed && 16 != !t.keyCode && this.element && this._9d && this._9d.delta &&
            this._ndt(this._9d.delta.x, this._9d.delta.y, i, t, false);
        },
        onkeydown: function (t, i) {
            this._mousePressed && this.element && this._9d && t.shiftKey && this._9d.delta &&
            this._ndt(this._9d.delta.x, this._9d.delta.y, i, t, true);
        },
        _ndt: function (t, i, n, e, s) {
            var h = this._9d;
            var r = this.element;
            var a = h.oldPoints;
            var o = h.segment;
            if (h.isEndPoint) {
                var f = h.isFrom ? Qunee.Styles.EDGE_FROM_OFFSET : Qunee.Styles.EDGE_TO_OFFSET, c = { x: a[0] + t, y: a[1] + i };
                return void r.setStyle(f, c);
            }
            if (s && h.isControlPoint) {
                var u = { x: a[a.length - 2] + t, y: a[a.length - 1] + i };
                var _ = h.prevSegment;
                var d = h.nextSegment;
                var l = 20 / n.scale;
                var v = Number.MAX_VALUE;
                var b = v;
                var y = v;
                var g = v;
                _ && (_ = _.lastPoint, v = Math.abs(u.x - _.x), y = Math.abs(u.y - _.y));
                d && (d = d.lastPoint, b = Math.abs(u.x - d.x), g = Math.abs(u.y - d.y));
                l > v && b > v ? t += _.x - u.x : l > b && v > b && (t += d.x - u.x), l > y && g > y ?
                    i += _.y - u.y : l > g && y > g && (i += d.y - u.y);
            }
            if (h.isControlPoint && Oh(o)) {
                for (var x = o.points.length - 4; x < o.points.length;) {
                    var m = a[x] + t;
                    var E = a[x + 1] + i;
                    o.points[x] = m;
                    o.points[x + 1] = E;
                    x += 2;
                }
                if (h.nextSegment && Oh(h.nextSegment)) {
                    var p = h.oldNextPoints;
                    var m = p[0] + t;
                    var E = p[1] + i;
                    h.nextSegment.points[0] = m;
                    h.nextSegment.points[1] = E;
                }
            } else {
                var x = h.pointIndex;
                var m = a[x] + t;
                var E = a[x + 1] + i;
                o.points[x] = m;
                o.points[x + 1] = E;
            }
            r.firePathChange();
            var w = new InteractionEvent(n, InteractionEvent.POINT_MOVING, e, r);
            w.point = h;
            n.onInteractionEvent(w);
        },
        ondrag: function (t, i) {
            if (this.element && this._9d) {
                var n = this._9d;
                var e = this.element;
                var s = t.totalDeltaX;
                var h = t.totalDeltaY;
                var r = i.scale;
                if (s /= r, h /= r, e.rotate) {
                    var a = { x: s, y: h };
                    Bs(a, -e.rotate);
                    s = a.x;
                    h = a.y;
                }
                n.delta = { x: s, y: h };
                this._ndt(s, h, i, t, t.shiftKey);
            }
        },
        enddrag: function (t, i) {
            if (this.element && this._9d) {
                this._ncr();
                this._ji();
                var n = new InteractionEvent(i, InteractionEvent.POINT_MOVE_END, t, this.element);
                n.point = this._9d;
                i.onInteractionEvent(n);
            }
        },
        onmousemove: function (t, i) {
            this.element && (i.cursor = t.altKey && (this._gq(t, i) || this.element == t.getData()) ? "crosshair" : null);
        }
    };

    Defaults.SELECTION_RECTANGLE_STROKE = 1;
    Defaults.SELECTION_RECTANGLE_STROKE_COLOR = randomColor2(3724541951);
    Defaults.SELECTION_RECTANGLE_FILL_COLOR = randomColor2(1430753245);

    var RectangleSelectionInteraction = function (t) {
        this.graph = t;
        this.topCanvas = t._82._topCanvas;
    };

    RectangleSelectionInteraction.prototype = {
        onstart: function (t, i) {
            this._l9 && this.destroy(i);
        },
        startdrag: function (t, i) {
            t.responded || (t.responded = true, this._l9 = i.toLogical(t), i.cursor = "crosshair",
                this._10Id = this.topCanvas.addDrawable(this._10, this).id);
        },
        ondrag: function (t, i) {
            if (this._l9) {
                stopEvent(t);
                this._end = i.toLogical(t);
                this.invalidate();
                var n = new InteractionEvent(i, InteractionEvent.SELECT_START, t, i.selectionModel);
                i.onInteractionEvent(n);
            }
        },
        enddrag: function (t, i) {
            if (this._l9) {
                this._fqTimer && (clearTimeout(this._fqTimer), this._fqTimer = null);
                this._fq(true);
                this.destroy(i);
                var n = new InteractionEvent(i, InteractionEvent.SELECT_END, t, i.selectionModel);
                i.onInteractionEvent(n);
            }
        },
        onpinch: function (t, i) {
            this._l9 && this.enddrag(t, i);
        },
        _10: function (t, i) {
            t.strokeStyle = Defaults.SELECTION_RECTANGLE_STROKE_COLOR;
            t.fillStyle = Defaults.SELECTION_RECTANGLE_FILL_COLOR;
            t.lineWidth = Defaults.SELECTION_RECTANGLE_STROKE / i;
            var n = this._l9.x;
            var e = this._l9.y;
            t.rect(n, e, this._end.x - n, this._end.y - e);
            t.fill();
            t.stroke();
        },
        invalidate: function () {
            return this.invalidateFlag ? void this.topCanvas.invalidate() :
                (this.invalidateFlag = true, void (this._fqTimer = setTimeout(this._fq.bind(this), 100)));
        },
        _fq: function (t) {
            if (this.invalidateFlag = false, this._fqTimer = null, !this._l9 || isIE10 && !t) {
                return void this.topCanvas.invalidate();
            }
            var i = Math.min(this._l9.x, this._end.x);
            var n = Math.min(this._l9.y, this._end.y);
            var e = Math.abs(this._l9.x - this._end.x);
            var s = Math.abs(this._l9.y - this._end.y);
            if (!e || !s) {
                return void this.graph.selectionModel.clear();
            }
            var h;
            var r = [];
            var a = this.graph.scale;
            if (this.graph.forEachVisibleUI(function (t) {
                t._i6 && this.graph.isSelectable(t.$data) && (h = t._fs, (containsRect(i, n, e, s, h.x + t._x, h.y + t._y, h.width, h.height) || Cn(i, n, e, s, t, a)) && r.push(t.$data))
            }, this), this.graph.selectionModel.set(r),
                    this.topCanvas.invalidate(), !t) {
                var o = new InteractionEvent(this.graph, InteractionEvent.SELECT_BETWEEN, null, this.graph.selectionModel);
                this.graph.onInteractionEvent(o);
            }
        },
        destroy: function (t) {
            this._l9 = null;
            t.cursor = null;
            this._10Id && (this.topCanvas.removeDrawable(this._10Id), delete this._10Id, this.topCanvas.invalidate());
        }
    };

    var RectangleSelectionInteractionByRightButton = S({
        "super": RectangleSelectionInteraction,
        onstart: null,
        startdrag: null,
        ondrag: null,
        enddrag: null,
        accept: function (t, i, n) {
            return n.enableRectangleSelectionByRightButton !== false;
        },
        oncontextmenu: function (t, i) {
            i.popupmenu || stopEvent(t);
        },
        onstart2: function () {
            RectangleSelectionInteraction.prototype.onstart.apply(this, arguments);
        },
        startdrag2: function (t, i) {
            t.responded || (i.popupmenu && i.popupmenu.hide instanceof Function && i.popupmenu.hide(),
                RectangleSelectionInteraction.prototype.startdrag.apply(this, arguments));
        },
        ondrag2: function () {
            RectangleSelectionInteraction.prototype.ondrag.apply(this, arguments);
        },
        enddrag2: function () {
            RectangleSelectionInteraction.prototype.enddrag.apply(this, arguments);
        }
    });

    ResizeInteraction.prototype = {
        _eh: false,
        _ei: false,
        _1f: function (t) {
            this.element && t.source == this.element && this.graph.callLater(function () {
                this._9i();
            }, this);
        },
        _8: function () {
            this._mgPropertyChangeListing || (this._mgPropertyChangeListing = true,
                this.graph.dataPropertyChangeDispatcher.addListener(this._1f, this));
        },
        _6: function () {
            this._mgPropertyChangeListing = false;
            this.graph.dataPropertyChangeDispatcher.removeListener(this._1f, this);
        },
        onElementRemoved: function (t, i) {
            this.element && (t == this.element || isArray(t) && m(t, this.element)) && this.destroy(i);
        },
        onClear: function (t) {
            this.element && this.destroy(t);
        },
        ondblclick: function (t, i) {
            this.element && this.destroy(i);
        },
        destroy: function (t) {
            t.cursor = null;
            delete this.element;
            delete this._do;
            delete this._ncody;
            delete this._9d;
            delete this._ndanEdit;
            delete this._kh;
            delete this._rotatePoint;
            delete this._ei;
            delete this._eh;
            delete this._insets;
            this._77();
            this._6();
        },
        _77: function () {
            this._g4Id && (this.topCanvas.removeDrawable(this._g4Id), delete this._g4Id, this.topCanvas.invalidate());
        },
        _ncr: function () {
            this._g4Id && this.topCanvas.contains(this._g4Id) || (this._g4Id = this.topCanvas.addDrawable(this._g4, this).id,
                this.topCanvas.invalidate());
        },
        _do: null,
        _kh: null,
        _7y: function (t) {
            this._do = t;
            var i = this._do.x;
            var n = this._do.y;
            var e = this._do.width;
            var s = this._do.height;
            if (this.element instanceof Group && this.element.expanded, this._ei) {
                var h = [];
                h.push({ x: i, y: n, p: Position.LEFT_TOP, cursor: "nwse-resize", rotate: 5 * (Math.PI / 4) });
                h.push({
                    x: i + e / 2,
                    y: n,
                    p: Position.CENTER_TOP,
                    cursor: "ns-resize",
                    rotate: 6 * (Math.PI / 4)
                });
                h.push({ x: i + e, y: n, p: Position.RIGHT_TOP, cursor: "nesw-resize", rotate: 7 * (Math.PI / 4) });
                h.push({
                    x: i,
                    y: n + s / 2,
                    p: Position.LEFT_MIDDLE,
                    cursor: "ew-resize",
                    rotate: 4 * (Math.PI / 4)
                });
                h.push({ x: i, y: n + s, p: Position.LEFT_BOTTOM, cursor: "nesw-resize", rotate: 3 * (Math.PI / 4) });
                h.push({
                    x: i + e,
                    y: n + s / 2,
                    p: Position.RIGHT_MIDDLE,
                    cursor: "ew-resize",
                    rotate: 0
                });
                h.push({ x: i + e / 2, y: n + s, p: Position.CENTER_BOTTOM, cursor: "ns-resize", rotate: 2 * (Math.PI / 4) });
                h.push({
                    x: i + e,
                    y: n + s,
                    p: Position.RIGHT_BOTTOM,
                    cursor: "nwse-resize",
                    rotate: (Math.PI / 4)
                });
                this._kh = h;
            }
            this._rotatePoint = this._eh ? { x: i + e / 2, y: n, cursor: cH } : null;
            this._d1();
        },
        _ef: function (t, i, n, e) {
            t.beginPath();
            var s = (this.handlerSize - 1) / e;
            t.rect(i - s, n - s, 2 * s, 2 * s);
            t.lineWidth = 1 / e;
            t.lineDash = [];
            t.strokeStyle = "#888";
            t.fillStyle = "rgba(255, 255, 255, 0.8)";
            t.stroke();
            t.fill();
        },
        _58: function (t, i, n, e, s, h) {
            s = s || this.handlerSize, h = h || "rgba(0, 255, 0, 1)";
            t.beginPath();
            s /= e;
            t.arc(i, n, s, 0, 2 * Math.PI, false);
            t.lineWidth = 1 / e;
            t.lineDash = [];
            t.strokeStyle = "#888";
            t.fillStyle = h;
            t.stroke();
            t.fill();
        },
        _it: function (t, i) {
            t -= this.element.x;
            i -= this.element.y;
            var n = { x: t, y: i };
            return this.element.rotate && Bs(n, -this.element.rotate), n;
        },
        _g4: function (t, i) {
            if (this._do) {
                if (t.save(), t.translate(this.element.x, this.element.y), this.element.rotate &&
                    t.rotate(this.element.rotate), this._rotatePoint) {
                    this._58(t, 0, 0, i, 3, "#FF0");
                    var n = this._rotatePoint.x;
                    var e = this._rotatePoint.y - this._rotateHandleLength / i;
                    t.beginPath();
                    t.moveTo(n, this._rotatePoint.y);
                    t.lineTo(n, e);
                    t.lineWidth = 1 / i;
                    t.strokeStyle = "#555";
                    t.stroke();
                    this._58(t, n, e, i);
                }
                if (this._kh) {
                    var s = this._do.x;
                    var h = this._do.y;
                    var r = this._do.width;
                    var a = this._do.height;
                    t.beginPath();
                    t.rect(s, h, r, a);
                    t.lineWidth = 1 / i;
                    t.lineDash = [2 / i, 3 / i];
                    t.strokeStyle = "#555";
                    t.stroke();
                    forEach(this._kh, function (n) {
                        this._ef(t, n.x, n.y, i);
                    }, this);
                }
                t.restore();
            }
        },
        _d1: function () {
            this.topCanvas.invalidate();
        },
        _3o: function (t, i, n, e) {
            this.element = t;
            this._ncr();
            var s = i.getUI(t);
            this._ncody = s.body;
            this._ei = n;
            this._eh = e;
            this._9i();
            this._8();
        },
        _9i: function () {
            if (this._g4Id) {
                var t = Sh(this._ncody, this._ncody._jo);
                var i = Sh(this._ncody, this._ncody._7k);
                this._insets = new Insets(t.y - i.y, t.x - i.x, i.bottom - t.bottom, i.right - t.right);
                this._7y(i);
            }
        },
        _ncp: function (t, i) {
            return i.isResizable(t);
        },
        _ncn: function (t, i) {
            return (!t._ic() || !t.expanded) && i.isRotatable(t);
        },
        _df: function (t, i) {
            return t instanceof Node && i.isEditable(t);
        },
        onstart: function (t, i) {
            if (!i.editable) {
                return void (this.element && this.destroy(i));
            }
            if (!t.responded) {
                var n = i.getUI(t);
                var e = t.getData();
                if (e != this.element) {
                    if (this.element) {
                        if (this._gq(t, i)) {
                            return void (t.responded = true);
                        }
                        this.destroy(i);
                    }
                    if (e && !e._editting && this._df(e, i)) {
                        var s = this._ncp(e, i, n);
                        var h = this._ncn(e, i, n);
                        (s || h) && this._3o(e, i, s, h);
                    }
                }
            }
        },
        onrelease: function (t, i) {
            this.element && (this._ndanEdit = true, this._ncr(), i.callLater(function () {
                this._9i()
            }, this));
        },
        _9d: null,
        _gq: function (t, i) {
            var n = i.toLogical(t);
            n = this._it(n.x, n.y);
            var e = i.scale;
            var s = this.handlerSize / e;
            if (this._rotatePoint) {
                var h = this._rotatePoint.x;
                var r = this._rotatePoint.y - this._rotateHandleLength / e;
                if (calculateDistance(n.x, n.y, h, r) < s) {
                    return this._rotatePoint;
                }
            }
            if (this._kh && this._kh.length) {
                var a;
                return forEach(this._kh, function (t) {
                    return calculateDistance(n.x, n.y, t.x, t.y) < s ? (a = t, false) : void 0;
                }, this), a;
            }
        },
        onmousemove: function (t, i) {
            if (this.element) {
                var n = this._gq(t, i);
                if (!n) {
                    return void (i.cursor = null);
                }
                if (n != this._rotatePoint && this.element.rotate) {
                    var e = n.rotate + this.element.rotate;
                    return void (i.cursor = Ih(e));
                }
                i.cursor = n.cursor;
            }
        },
        startdrag: function (t, i) {
            if (this.element && (this._77(), this._ndanEdit && (this._9d = this._gq(t, i), this._9d))) {
                if (t.responded = true, this._9d == this._rotatePoint) {
                    return this._9d.start = i.toLogical(t), void (this._9d.rotate = this.element.rotate || 0);
                }
                var n = new InteractionEvent(i, InteractionEvent.RESIZE_START, t, this.element);
                n.point = this._9d;
                i.onInteractionEvent(n);
            }
        },
        _74: function (t, i, n, e, s, h) {
            var r = this._do;
            var a = r.x;
            var o = r.y;
            var f = r.width;
            var c = r.height;
            if (h) {
                var u = e != f;
                u ? s = e * c / f : e = s * f / c;
            }
            var _ = t.path._fu;
            var d = e / f;
            var l = s / c;
            var v = -a * d + i;
            var b = -o * l + n;
            _.forEach(function (t) {
                if (t.type != Consts.SEGMENT_CLOSE) {
                    var e = t.points;
                    if (e && e.length) {
                        for (var s = 0, h = e.length; h > s; s += 2) {
                            var r = e[s];
                            var f = e[s + 1];
                            e[s] = (r - a) * d + i - v;
                            e[s + 1] = (f - o) * l + n - b;
                        }
                    }
                }
            });
            this._do.set(i - v, n - b, e, s);
            t.setLocation(t.x + v, t.y + b);
            t.firePathChange();
        },
        _9n: function (t, i, n, e, s) {
            this._do.set(i, n, e, s);
            t.minSize = { x: i, y: n, width: e, height: s };
        },
        _4l: function (t, i, n, e, s) {
            if (this.element instanceof Group) {
                return this._9n(this.element, t, i, n, e, s);
            }
            if (this.element instanceof ShapeNode) {
                return this._74(this.element, t, i, n, e, s);
            }
            var h = this._ncody instanceof LabelUI;
            if (!h && s) {
                var r = this._do;
                var a = this._ncody.originalBounds;
                var o = n != r.width;
                o ? e = n * a.height / a.width : n = e * a.width / a.height;
            }
            var f = this.element.anchorPosition;
            var c = new Size(n - this._insets.left - this._insets.right, e - this._insets.top - this._insets.bottom);
            if (c.width < 1 && (n = this._insets.left + this._insets.right + 1, c.width = 1), c.height < 1 &&
                (e = this._insets.top + this._insets.bottom + 1, c.height = 1), h ?
                    this.element.setStyle(Styles.LABEL_SIZE, c) : this.element.size = c, f) {
                var u = fi(f, n, e);
                var _ = u.x + t - (this._ncody.offsetX || 0);
                var d = u.y + i - (this._ncody.offsetY || 0);
                if (this._do.set(t - _, i - d, n, e), this.element.rotate) {
                    var u = Bs({ x: _, y: d }, this.element.rotate);
                    _ = u.x;
                    d = u.y;
                }
                this.element.x += _;
                this.element.y += d;
            } else {
                var _ = this._do.x * n / this._do.width - t;
                var d = this._do.y * e / this._do.height - i;
                if (this._do.set(t + _, i + d, n, e), this.element.rotate) {
                    var u = Bs({ x: _, y: d }, this.element.rotate);
                    _ = u.x;
                    d = u.y;
                }
                this.element.x -= _;
                this.element.y -= d;
            }
        },
        ondrag: function (t, i) {
            if (this.element && this._9d) {
                if (this._9d != this._rotatePoint) {
                    var n = t.dx;
                    var e = t.dy;
                    var s = i.scale;
                    if (n /= s, e /= s, this.element.rotate) {
                        var h = { x: n, y: e };
                        Bs(h, -this.element.rotate);
                        n = h.x;
                        e = h.y;
                    }
                    var r = this._9d.p;
                    var a = this._do;
                    var o = a.x;
                    var f = a.y;
                    var c = a.width;
                    var u = a.height;
                    r.horizontalPosition == "l" ? n >= c ? (o += c, c = n - c || 1) : (o += n, c -= n) :
                        r.horizontalPosition == "r" && (-n >= c ? (c = -n - c || 1, o -= c) : c += n),
                        r.verticalPosition == "t" ? e >= u ? (f += u, u = e - u || 1) : (f += e, u -= e) :
                            r.verticalPosition == "b" && (-e >= u ? (u = -e - u || 1, f -= u) : u += e),
                        this._4l(o, f, c, u, t.shiftKey);
                    var _ = new InteractionEvent(i, InteractionEvent.RESIZING, t, this.element);
                    _.point = this._9d;
                    i.onInteractionEvent(_);
                } else {
                    var h = i.toLogical(t);
                    var d = _n(h.x, h.y, this.element.x, this.element.y, this._9d.start.x, this._9d.start.y, true);
                    d += this._9d.rotate || 0;
                    t.shiftKey && (d = Math.round(d / Math.PI * 4) * Math.PI / 4);
                    this.element.rotate = d % (2 * Math.PI);
                    var _ = new InteractionEvent(i, InteractionEvent.ROTATING, t, this.element);
                }
            }
        },
        enddrag: function (t, i) {
            if (this.element && this._9d && this._9d != this._rotatePoint) {
                var n = new InteractionEvent(i, InteractionEvent.RESIZE_END, t, this.element);
                n.point = this._9d;
                i.onInteractionEvent(n);
            }
        }
    };

    Qunee.ResizeInteraction = ResizeInteraction;

    var SelectionInteraction = function (t) {
        this.graph = t;
    };

    SelectionInteraction.prototype = {
        onstart2: function (t, i) {
            this.onstart(t, i);
        },
        onstart: function (t, i) {
            if (!t.responded) {
                var n = t.getData();
                if (n && !i.isSelectable(n) && (n = null), n && isMetaKey(t)) {
                    i.reverseSelect(n);
                    var e = new InteractionEvent(i, InteractionEvent.SELECT, t, i.selectionModel);
                    return void i.onInteractionEvent(e);
                }
                if (!n || !i.selectionModel.isSelected(n)) {
                    n ? (i.setSelection(n), i.sendToTop(n)) : i.setSelection(null);
                    var e = new InteractionEvent(i, InteractionEvent.SELECT, t, i.selectionModel);
                    i.onInteractionEvent(e);
                }
            }
        },
        onkeydown: function (t, i) {
            return 27 == t.keyCode ? void i.unSelectAll() : void (isMetaKey(t) && 65 == t.keyCode && (i.selectAll(), eventPreventDefault(t)));
        }
    };

    Defaults.TOOLTIP_DURATION = 3e3;
    Defaults.TOOLTIP_DELAY = 1e3;

    addCSSRule(".Q-Tooltip", {
        "background-color": "#FFFFCA",
        overflow: "hidden",
        "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
        color: "#000",
        "pointer-events": "none",
        border: "1px solid #D9D9D9",
        padding: "2px 4px",
        display: "block",
        position: "absolute"
    });

    var TooltipInteraction = function (t) {
        this.graph = t;
        this._nd1 = {};
    };

    TooltipInteraction.prototype = {
        _nd1: null,
        _nd0: null,
        _ncy: function () {
            delete this._initTimer;
            this._nd1.data && (this._nd0 || (this._nd0 = i.createElement("div"), this._nd0.className = "Q-Tooltip"),
            this._nd0.parentNode || i.body.appendChild(this._nd0), this._dd(this.graph, this._nd1.data));
        },
        _dd: function (t, i) {
            var n = t.getTooltip(i);
            var e = "text" == i.tooltipType;
            n && !e && (n = n.replace(/\n/g, "<br>"));
            e ? this._nd0.textContent = n || "" : this._nd0.innerHTML = n || "";
            var s = this._nd1.evt.pageX + 0;
            var h = this._nd1.evt.pageY + 15;
            Ah(this._nd0, s, h);
            this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer);
            this._deleteTimer = setTimeout(this._8f.bind(this), t.tooltipDuration || Defaults.TOOLTIP_DURATION);
        },
        _8f: function () {
            delete this._deleteTimer;
            this._nd0 && this._nd0.parentNode && this._nd0.parentNode.removeChild(this._nd0);
            delete this._nd0;
            this._nd1 = {};
        },
        _eb: function (t, i, n, e) {
            if (!this._nd0) {
                var s = e.tooltipDelay;
                return isNaN(s) && (s = Defaults.TOOLTIP_DELAY), void (this._initTimer = setTimeout(this._ncy.bind(this), s));
            }
            this._dd(e, t);
        },
        onstart: function (t, i) {
            this.destroy(i);
        },
        onmousemove: function (t, i) {
            if (i.enableTooltip) {
                var n = t.getData();
                if (this._nd1.evt = t, this._nd1.data != n && (this._nd1.data = n, this._initTimer &&
                    (clearTimeout(this._initTimer), delete this._initTimer), n)) {
                    var e = i.getTooltip(n);
                    e && this._eb(n, e, t, i);
                }
            }
        },
        destroy: function () {
            this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer);
            this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer);
            this._nd0 && this._8f();
            this._nd1 = {};
        }
    };

    var WheelZoomInteraction = function (t) {
        this.graph = t;
    };

    WheelZoomInteraction.prototype = {
        _fq: function () {
            delete this._lh;
        },
        destroy: function (t) {
            this._lh && this._fq(t);
        },
        onmousewheel: function (t, i) {
            if (i.enableWheelZoom !== false && t.delta) {
                var n = t.delta > 0;
                var e = i.scale;
                if (!(n && i.maxScale - e < 1e-4 || !n && e - i.minScale < 1e-4)) {
                    stopEvent(t);
                    var s = Math.sqrt(Math.abs(t.delta));
                    n || (s = -s);
                    this._lh && clearTimeout(this._lh);
                    this._lh = setTimeout(this._fq.bind(this, i), 100);
                    i.zoomByMouseEvent(t, s);
                }
            }
        }
    };

    var bW = function (t) {
        this.graph = t;
    };

    bW.prototype = {
        onclick: function (t, i) {
            i.zoomByMouseEvent(t, !isMetaKey(t));
        }
    };

    var yW = function (t) {
        this.graph = t;
    };

    yW.prototype = {
        onclick: function (t, i) {
            i.zoomByMouseEvent(t, isMetaKey(t))
        }
    };

    extend(InteractionEvent, Event);

    InteractionEvent.ELEMENT_MOVE_START = "element.move.start";
    InteractionEvent.ELEMENT_MOVING = "element.moving";
    InteractionEvent.ELEMENT_MOVE_END = "element.move.end";
    InteractionEvent.ELEMENT_CREATED = "element.created";
    InteractionEvent.ELEMENT_REMOVED = "element.removed";
    InteractionEvent.POINT_MOVE_START = "point.move.start";
    InteractionEvent.POINT_MOVING = "point.moving";
    InteractionEvent.POINT_MOVE_END = "point.move.end";
    InteractionEvent.RESIZE_START = "resize.start";
    InteractionEvent.RESIZING = "resizing";
    InteractionEvent.RESIZE_END = "resize.end";
    InteractionEvent.ROTATING = "rotating";
    InteractionEvent.ROTATE_END = "rotate.end";
    InteractionEvent.PAN_START = "pan.start";
    InteractionEvent.PAN_END = "pan.end";
    InteractionEvent.GROUP_EXPANDED = "group.expanded";
    InteractionEvent.EDGE_BUNDLE = "edge.bundle";
    InteractionEvent.SELECT = "select";
    InteractionEvent.SELECT_START = "select.start";
    InteractionEvent.SELECT_BETWEEN = "select.between";
    InteractionEvent.SELECT_END = "select.end";
    InteractionEvent.LONG_CLICK = "long.click";

    Lh.prototype = {
        _96: function (t) {
            if (this._interactionSupport) switch (t.kind) {
                case ListEvent.KIND_REMOVE:
                    this._interactionSupport._onElementRemoved(t.data);
                    break;
                case ListEvent.KIND_CLEAR:
                    this._interactionSupport._onElementClear(t.data);
            }
        },
        destroy: function () {
            delete this._l1;
            delete this._47;
            this._interactionSupport && (this._interactionSupport._ia(), delete this._interactionSupport);
        },
        _l1: null,
        _47: null,
        defaultMode: null,
        _hp: function (t, i, n) {
            this._47[t] = new _h(i, n);
            t == this.currentMode && this._interactionSupport._mvInteraction(i);
        },
        addCustomInteraction: function (t) {
            this._interactionSupport._n1CustomInteractionListener(t);
        },
        removeCustomInteraction: function (t) {
            this._interactionSupport._kuCustomInteractionListener(t);
        },
        _mu: function (t) {
            var i = this._47[t];
            return i ? i : gW[t];
        }
    };

    defineProperties(Lh.prototype, {
        defaultCursor: {
            get: function () {
                return this.currentInteractionMode ? this.currentInteractionMode.defaultCursor : void 0;
            }
        },
        currentMode: {
            get: function () {
                return this._ndurrentMode;
            },
            set: function (t) {
                this._ndurrentMode != t && (this._ndurrentMode, this._interactionSupport ||
                (this._interactionSupport = new hH(this._l1)),
                    this._ndurrentMode = t, this.currentInteractionMode = this._mu(this._ndurrentMode),
                    this._l1.cursor = this.defaultCursor,
                    this._interactionSupport._mvInteraction(this.currentInteractionMode ?
                        this.currentInteractionMode.getInteractionInstances(this._l1) : []));
            }
        }
    });

    var gW = {};

    Defaults.registerInteractions = function (t, i, n) {
        var e = new _h(i, n);
        gW[t] = e;
    };

    Consts.INTERACTION_MODE_VIEW = "view";
    Consts.INTERACTION_MODE_DEFAULT = "default";
    Consts.INTERACTION_MODE_SELECTION = "selection";
    Consts.INTERACTION_MODE_ZOOMIN = "zoomin";
    Consts.INTERACTION_MODE_ZOOMOUT = "zoomout";
    Consts.INTERACTION_MODE_CREATE_SIMPLE_EDGE = "create.simple.edge";
    Consts.INTERACTION_MODE_CREATE_EDGE = "create.edge";
    Consts.INTERACTION_MODE_CREATE_SHAPE = "create.shape";
    Consts.INTERACTION_MODE_CREATE_LINE = "create.line";

    Defaults.registerInteractions(Consts.INTERACTION_MODE_VIEW, [SelectionInteraction, PanInteraction, WheelZoomInteraction, ExportInteraction, DoubleClickInteraction, TooltipInteraction, RectangleSelectionInteractionByRightButton]);
    Defaults.registerInteractions(Consts.INTERACTION_MODE_CREATE_SIMPLE_EDGE, [EditInteraction, CreateSimpleEdgeInteraction, SelectionInteraction, PanInteraction, WheelZoomInteraction, ExportInteraction, TooltipInteraction]);
    Defaults.registerInteractions(Consts.INTERACTION_MODE_CREATE_EDGE, [EditInteraction, PointsInteraction, SelectionInteraction, CreateEdgeInteraction, PanInteraction, WheelZoomInteraction, ExportInteraction, TooltipInteraction]);
    Defaults.registerInteractions(Consts.INTERACTION_MODE_CREATE_SHAPE, [EditInteraction, CreateShapeInteraction, SelectionInteraction, PanInteraction, WheelZoomInteraction, ExportInteraction, TooltipInteraction]);
    Defaults.registerInteractions(Consts.INTERACTION_MODE_CREATE_LINE, [CreateLineInteraction, SelectionInteraction, PanInteraction, WheelZoomInteraction, ExportInteraction, TooltipInteraction]);
    Defaults.registerInteractions(Consts.INTERACTION_MODE_DEFAULT, [EditInteraction, ResizeInteraction, PointsInteraction, SelectionInteraction, MoveInteraction, PanInteraction, WheelZoomInteraction, ExportInteraction, DoubleClickInteraction, TooltipInteraction, RectangleSelectionInteractionByRightButton]);
    Defaults.registerInteractions(Consts.INTERACTION_MODE_SELECTION, [EditInteraction, ResizeInteraction, PointsInteraction, SelectionInteraction, MoveInteraction, RectangleSelectionInteraction, PanInteraction, WheelZoomInteraction, ExportInteraction, DoubleClickInteraction, TooltipInteraction]);
    Defaults.registerInteractions(Consts.INTERACTION_MODE_ZOOMIN, [WheelZoomInteraction, ExportInteraction, bW], rH);
    Defaults.registerInteractions(Consts.INTERACTION_MODE_ZOOMOUT, [WheelZoomInteraction, ExportInteraction, yW], aH);
    Qunee.PanInteraction = PanInteraction;
    Qunee.SelectionInteraction = SelectionInteraction;
    Qunee.MoveInteraction = MoveInteraction;
    Qunee.WheelZoomInteraction = WheelZoomInteraction;
    Qunee.DoubleClickInteraction = DoubleClickInteraction;
    Qunee.ExportInteraction = ExportInteraction;
    Qunee.TooltipInteraction = TooltipInteraction;
    Qunee.RectangleSelectionInteraction = RectangleSelectionInteraction;
    Qunee.RectangleSelectionInteractionByRightButton = RectangleSelectionInteractionByRightButton;
    Qunee.PointsInteraction = PointsInteraction;

    var Layouter = function (t) {
        this.graph = t;
    };

    Qunee.Layouter = Layouter;

    Layouter.prototype = {
        getNodeBounds: function (t) {
            return this.graph.getUIBounds(t);
        },
        isLayoutable: function (t) {
            return this.graph.isVisible(t) && t.layoutable !== false;
        },
        getLayoutResult: function () {
        },
        updateLocations: function (t, i, n, e, s) {
            if (i === true) {
                if (this.animate || (this.animate = new QW), n && (this.animate.duration = n),
                    e && (this.animate.animationType = e), this.animate.locations = t, s) {
                    var h = s, r = this;
                    s = function () {
                        h.call(r, t);
                    }
                }
                return void this.animate.start(s);
            }
            for (var a in t) {
                var o = t[a];
                var f = o.node;
                f.setLocation(o.x, o.y);
            }
            s && s.call(this, t);
        },
        _fz: function (t) {
            var i;
            var n;
            var e;
            var s = null;
            t && (i = t.byAnimate, s = t.callback, n = t.duration, e = t.animationType);
            var h = this.getLayoutResult(t);
            return h ? (this.updateLocations(h, i, n, e, s), h) : false;
        },
        doLayout: function (t, i) {
            return this.graph && i !== true ? void this.graph.callLater(function () {
                this._fz(t);
            }, this) : this._fz(t);
        }
    };

    Consts.DIRECTION_RIGHT = 110;
    Consts.DIRECTION_LEFT = 120;
    Consts.DIRECTION_CENTER = 130;
    Consts.DIRECTION_BOTTOM = 210;
    Consts.DIRECTION_TOP = 220;
    Consts.DIRECTION_MIDDLE = 230;
    Consts.DIRECTION_RIGHT_TOP = 111;
    Consts.DIRECTION_RIGHT_BOTTOM = 112;
    Consts.DIRECTION_LEFT_TOP = 121;
    Consts.DIRECTION_LEFT_BOTTOM = 122;
    Consts.DIRECTION_BOTTOM_LEFT = 211;
    Consts.DIRECTION_BOTTOM_RIGHT = 212;
    Consts.DIRECTION_TOP_LEFT = 221;
    Consts.DIRECTION_TOP_RIGHT = 222;
    Consts.LAYOUT_TYPE_EVEN = "even";
    Consts.LAYOUT_TYPE_EVEN_HORIZONTAL = "even.h";
    Consts.LAYOUT_TYPE_EVEN_VERTICAL = "even.v";
    Consts.LAYOUT_TYPE_TWO_SIDE = "two.side";
    Qunee.isHorizontalDirection = isHorizontalDirection;

    var TreeLayouter = function (t) {
        this.graph = t;
    };

    TreeLayouter.prototype = {
        hGap: 50,
        vGap: 50,
        parentChildrenDirection: 210,
        layoutType: "even",
        defaultSize: { width: 50, height: 60 },
        getNodeSize: function (t) {
            if (this.graph._82._nc1) {
                var i = this.graph.getUI(t);
                if (i) {
                    return i._fs;
                }
            }
            return t.image && t.image.bounds ? { width: t.image.bounds.width, height: t.image.bounds.height } :
                this.defaultSize;
        },
        _ndn: function (t, i) {
            if (this.isLayoutable(t)) {
                var n;
                var e = this.getNodeSize(t);
                n = e instanceof Rect ? [-e.x, -e.y] : [e.width / 2, e.height / 2];
                var s = t.id;
                var h = (t.parentChildrenDirection, i ? this._9s[i.id] : this._nce);
                this._9s[s] = new BW(this.getHGap(t), this.getVGap(t), this.getLayoutType(t), t.parentChildrenDirection,
                    h, t, e.width, e.height, n);
            }
        },
        getHGap: function (t) {
            return t && isNumber(t.hGap) ? t.hGap : this.hGap;
        },
        getVGap: function (t) {
            return t && isNumber(t.vGap) ? t.vGap : this.vGap;
        },
        getLayoutType: function (t) {
            return t && t.layoutType ? t.layoutType : this.layoutType;
        },
        _9s: null,
        _nce: null,
        _l8: function () {
            this._9s = null;
            this._nce = null;
        },
        getLayoutResult: function (t) {
            var i;
            var n;
            var e;
            var s;
            var h = this.graph;
            t instanceof Object && (i = t.x, n = t.y, h = t.root || this.graph, e = t.bounds, s = t.undirected);
            this._9s = {};
            this._nce = new BW;
            this._nce._mv(this.hGap, this.vGap, this.parentChildrenDirection, this.layoutType);
            var r = {};
            var a = nU(h, this._ndn, this, false, s);
            return a && (this._nce._fz(i || 0, n || 0, r), e && e.set(this._nce.x, this._nce.y, this._nce.width,
                this._nce.height)), this._l8(), r;
        },
        doLayout: function (t, i) {
            if (isNumber(t)) {
                var n = t;
                var e = 0;
                isNumber(i) && (e = i);
                t = { x: n, y: e };
                i = true;
            }
            return doSuper(this, TreeLayouter, "doLayout", [t, i]);
        }
    };

    extend(TreeLayouter, Layouter);

    var BW = function (mk, ml, layoutType, parentChildrenDirection, parentBounds, node, dt, db, nbnchorLocation) {
        this._mk = mk || 0;
        this._ml = ml || 0;
        this.layoutType = layoutType;
        this.parentChildrenDirection = parentChildrenDirection;
        this.parentBounds = parentBounds;
        parentBounds && parentBounds._fw(this);
        this.node = node;
        this._dt = dt;
        this._db = db;
        this._nbnchorLocation = nbnchorLocation;
    };

    BW.prototype = {
        _mv: function (t, i, n, e) {
            this._mk = t;
            this._ml = i;
            this.parentChildrenDirection = n;
            this.layoutType = e;
        },
        _89: function () {
            this._fo = [];
        },
        _mk: 0,
        _ml: 0,
        _fo: null,
        _dt: 0,
        _db: 0,
        layoutType: null,
        parentChildrenDirection: null,
        _fw: function (t) {
            this._fo || (this._fo = []);
            this._fo.push(t);
        },
        _d5: function (t, i, n, e) {
            var s = new Rect;
            return n(this._fo, function (n) {
                n._3j(t, i);
                s.add(n);
                e ? t += n.width + this._mk : i += n.height + this._ml;
            }, this), s;
        },
        _84: function (t, i, n, e, s) {
            var h;
            var r = e ? this._mk : this._ml;
            var a = e ? this._ml : this._mk;
            var o = e ? "width" : "height";
            var f = e ? "height" : "width";
            var c = e ? "_dt" : "_db";
            var u = e ? "_db" : "_dt";
            var _ = e ? "hostDX" : "hostDY";
            var d = e ? "hostDY" : "hostDX";
            var v = new Rect;
            var b = 0;
            var y = 0;
            var g = [];
            var x = 0;
            var m = 0;
            n(this._fo, function (n) {
                var s = m >= y;
                n._inheritedParentChildrenDirection = s ? e ? 120 : 220 : e ? 110 : 210, n._3j(t, i),
                    s ? (g.push(n), b = Math.max(b, n[o]), y += n[f] + a) :
                        (h || (h = []), h.push(n), x = Math.max(x, n[o]), m += n[f] + a);
            }, this);
            y -= a;
            m -= a;
            var E = Math.max(y, m);
            var p = r;
            var w = 0;
            this.node && (s && (p += this[c] + r, E > this[u] ? this[d] = (E - this[u]) / 2 : w = (this[u] - E) / 2),
                this[_] = b + p / 2 - this[c] / 2);
            var T = 0;
            var k = w;
            return forEach(g, function (t) {
                e ? t.offset(b - t[o], k) : t.offset(k, b - t[o]), k += a + t[f], v.add(t);
            }, this), h ? (k = w, T = b + p, forEach(h, function (t) {
                e ? t.offset(T, k) : t.offset(k, T), k += a + t[f], v.add(t);
            }, this), v) : v;
        },
        offset: function (t, i) {
            this.x += t;
            this.y += i;
            this.nodeX += t;
            this.nodeY += i;
            this._6u(t, i);
        },
        _nck: function (t, i) {
            return 2 * this.cx - t - i - t;
        },
        _nci: function (t, i) {
            return 2 * this.cy - t - i - t;
        },
        _mn: function (t) {
            if (this._fo && 0 != this._fo.length) {
                if (t) {
                    return this.node && (this.nodeX += this._nck(this.nodeX, this._dt)), void forEach(this._fo, function (t) {
                        t.offset(this._nck(t.x, t.width), 0);
                    }, this);
                }
                this.node && (this.nodeY += this._nci(this.nodeY, this._db));
                forEach(this._fo, function (t) {
                    t.offset(0, this._nci(t.y, t.height));
                }, this);
            }
        },
        _6u: function (t, i) {
            this._fo && forEach(this._fo, function (n) {
                n.offset(t, i);
            }, this);
        },
        _3j: function (t, i) {
            return this.x = t || 0, this.y = i || 0, this._fo && 0 != this._fo.length ?
                void this._1o(this.x, this.y, this.layoutType) :
                void (this.node && (this.width = this._dt, this.height = this._db, this.nodeX = this.x, this.nodeY = this.y));
        },
        _6p: function (t) {
            if (this.node) {
                var i = this._nbnchorLocation;
                var n = i[0];
                var e = i[1];
                t[this.node.id] = {
                    node: this.node,
                    x: this.nodeX + n,
                    y: this.nodeY + e,
                    left: this.nodeX,
                    top: this.nodeY,
                    width: this._dt,
                    height: this._db
                }
            }
            this._fo && forEach(this._fo, function (i) {
                i._6p(t);
            }, this);
        },
        _fz: function (t, i, n) {
            this._3j(t, i);
            this._6p(n);
        },
        _1o: function (t, i, e) {
            var s;
            var h = t;
            var r = i;
            !this.parentChildrenDirection && this.parentBounds &&
            (this.parentChildrenDirection = this._inheritedParentChildrenDirection ||
                this.parentBounds.parentChildrenDirection);
            var a = this.parentChildrenDirection;
            var o = isHorizontalDirection(a);
            if (this.node) {
                s = a == 130 || a == 230;
                var f = Ph(a);
                s || (o ? t += this._dt + this._mk : i += this._db + this._ml);
            }
            var c;
            var u = this.node && this.node.layoutReverse ? b : l;
            if (e == "two.side") {
                c = this._84(t, i, u, !o, s);
            } else {
                var _;
                _ = e == "even" ? !o : e == "even.h";
                c = this._d5(t, i, u, _, s);
            }
            var d = 0;
            var v = 0;
            if (c && !c.isEmpty() && (d = c.width, v = c.height, this.add(c)), this.node) {
                if (this.nodeX = h, this.nodeY = r, this.hostDX !== n || this.hostDY !== n) {
                    this.nodeX += this.hostDX || 0;
                    this.nodeY += this.hostDY || 0;
                } else {
                    var y;
                    y = a == 210 || a == 220 || a == 120 || a == 110 ? 1 : a == 212 || a == 222 || a == 122 || a == 112 ?
                            0 : 2, o ? 1 == y ? this.nodeY += v / 2 - this._db / 2 : 2 == y && (this.nodeY += v - this._db) :
                        1 == y ? this.nodeX += d / 2 - this._dt / 2 : 2 == y && (this.nodeX += d - this._dt);
                }
                this.addRect(this.nodeX, this.nodeY, this._dt, this._db), f && this._mn(o);
            }
        },
        node: null,
        uiBounds: null
    };

    extend(BW, Rect);

    Nh.prototype = {
        layoutDatas: null,
        isMovable: function (t) {
            return !this.currentMovingNodes[t.id];
        },
        _6z: false,
        _3g: function () {
            this._6z = true;
            this.graph._1h.addListener(this._95, this);
            this.graph._19.addListener(this._24, this);
        },
        _1j: function () {
            this._6z = false;
            this.graph._1h.removeListener(this._95, this);
            this.graph._19.removeListener(this._24, this);
        },
        invalidateFlag: true,
        invalidateLayoutDatas: function () {
            this.invalidateFlag = true;
        },
        resetLayoutDatas: function () {
            return this.invalidateFlag = false;
            this.layoutDatas = Dh.call(this);
        },
        _24: function (t) {
            InteractionEvent.ELEMENT_MOVE_START == t.kind ? (this.currentMovingNodes = {}, t.datas.forEach(function (t) {
                this.currentMovingNodes[t.id] = t;
            }, this)) :
                InteractionEvent.ELEMENT_MOVE_END == t.kind && (this.currentMovingNodes = {});
        },
        _95: function () {
            this.invalidateLayoutDatas();
        },
        isRunning: function () {
            return this.timer && this.timer._ea();
        },
        getLayoutResult: function () {
            this.stop();
            this.resetLayoutDatas();
            for (var t = this.getMaxIterations(this.layoutDatas.nodeCount || 0, this.layoutDatas.edgeCount || 0),
                i = 0; t > i && this.step(false) !== false; i++) {}
            var n = this.layoutDatas.nodes;
            return this.onstop(), n;
        },
        _lw: function () {
            return false;
        },
        step: function (t) {
            if (t === false) {
                return this._lw(this.timeStep);
            }
            (this.invalidateFlag || !this.layoutDatas) && this.resetLayoutDatas();
            var i = this._lw(t);
            var n = this.layoutDatas.nodes;
            for (var e in n) {
                var s = n[e];
                var h = s.node;
                this.isMovable(h) ? h.setLocation(s.x, s.y) : (s.x = h.x, s.y = h.y, s.vx = 0, s.vy = 0);
            }
            return i;
        },
        onstop: function () {
            delete this.layoutDatas;
        },
        start: function (t) {
            if (this.isRunning()) {
                return false;
            }
            this._6z || this._3g();
            this._k8r || (this._k8r = function (t) {
                return this.step(t);
            }.bind(this));
            this.invalidateLayoutDatas();
            this.timer = new bH(this._k8r);
            var i = this;
            return this.timer._l9(function () {
                i.onstop();
                t && t();
            }), true;
        },
        stop: function () {
            this.timer && (this.timer._mc(), this.onstop());
        },
        getMaxIterations: function (t) {
            return Math.min(1e3, 3 * t + 10);
        },
        minEnergyFunction: function (t, i) {
            return 10 + Math.pow(t + i, 1.4);
        },
        resetGraph: function () {
            this._6z || this._3g();
            this.resetLayoutDatas();
        },
        destroy: function () {
            this.stop();
            this._1j();
        }
    };

    extend(Nh, Layouter);

    var BalloonLayouter = function (t, i, n, e) {
        this.graph = t;
        isNumber(i) && (this.radius = i);
        isNumber(n) && (this.gap = n);
        isNumber(e) && (this.startAngle = e);
    };

    Qunee.BalloonLayouter = BalloonLayouter;

    Consts.ANGLE_SPACING_PROPORTIONAL = "proportional";
    Consts.ANGLE_SPACING_REGULAR = "regular";
    Consts.RADIUS_MODE_UNIFORM = "uniform";
    Consts.RADIUS_MODE_VARIABLE = "variable";

    BalloonLayouter.prototype = {
        angleSpacing: "proportional",
        radiusMode: "variable",
        gap: 4,
        radius: 50,
        startAngle: 0,
        _9s: null,
        _nce: null,
        _l8: function () {
            this._9s = null;
            this._nce = null;
        },
        getLayoutResult: function (t) {
            var i;
            var n = 0;
            var e = 0;
            var s = this.graph;
            t instanceof Object && (n = t.cx || 0, e = t.cy || 0, s = t.root || this.graph, i = t.bounds);
            this._9s = {};
            this._nce = new UW(this);
            var h = {};
            var r = eU(s, this._ndn, this);
            return r && (this._nce._fo && 1 == this._nce._fo.length &&
            (this._nce = this._nce._fo[0]), this._nce._f3(true),
                this._nce._62(n, e, this.startAngle, h, i)), this._l8(), h;
        },
        _ndn: function (t, i) {
            if (this.isLayoutable(t)) {
                var n = i ? this._9s[i.id] : this._nce;
                this._9s[t.id] = new UW(this, t, n);
            }
        },
        defaultSize: 40,
        getRadius: function () {
            return this.radius;
        },
        getNodeSize: function (t) {
            if (this.graph._82._nc1) {
                var i = this.graph.getUI(t);
                if (i) {
                    return (i._fs.width + i._fs.height) / 2;
                }
            }
            return this.defaultSize;
        },
        getGap: function () {
            return this.gap;
        },
        _2v: function (t, i, n) {
            return this.getNodeSize(t, i, n) + this.getGap(t, i, n);
        }
    };

    var YW = function (t) {
        var i;
        var n = this._fo.length;
        var e = 0;
        var s = 0;
        if (forEach(this._fo, function (t) {
            var n = t._f3();
            1 > n && (n = 1);
            s += n;
            n > e && (e = n, i = t);
        }, this), n > 1) {
            var h = 0;
            var r = {};
            var a = s / n / 3;
            s = 0;
            forEach(this._fo, function (t) {
                var i = t._ms;
                a > i && (i = a);
                r[t.id] = i;
                s += i;
            }, this);
            var o = Math.PI + Math.PI / s;
            forEach(this._fo, function (i, n) {
                var e = r[i.id];
                var s = e * o;
                0 === n && (h = t ? -s / 2 : -s);
                i._l6 = h + s / 2;
                i._l7 = s;
                h += s;
            }, this);
        }
        return [e, i._l7];
    };

    var WW = function (t) {
        var i = this._8o;
        var n = 2 * Math.PI / i;
        var e = 0;
        var s = t ? 0 : i > 1 ? -n / 2 : 0;
        return forEach(this._fo, function (t) {
            t._l6 = s % (Math.PI + Math.PI);
            s += n;
            t._l7 = n;
            var i = t._f3();
            i > e && (e = i);
        }, this), [e, n];
    };

    var UW = function (layouter, mj, n) {
        this.layouter = layouter;
        mj && (this._mj = mj, this.id = mj.id);
        n && (n._fw(this), n._mq = false, this._l5 = n._l5 + 1);
    };

    UW.prototype = {
        _l7: 0,
        _l6: 0,
        _kj: 0,
        _ev: 0,
        _nd6: 0,
        _l5: 0,
        _mq: true,
        _ms: 0,
        _go: 0,
        _fo: null,
        _mj: null,
        _fw: function (t) {
            this._fo || (this._fo = []);
            this._fo.push(t);
            t.parent = this;
        },
        _gr: function (t) {
            if (this._l6 = (this._l6 + t) % (Math.PI * 2), this._fo) {
                var i = this._fo.length;
                if (1 == i) {
                    return void this._fo[0]._gr(this._l6);
                }
                t = this._l6 + Math.PI;
                forEach(this._fo, function (i) {
                    i._gr(t);
                }, this);
            }
        },
        _8o: 0,
        _69: function (t) {
            return this._mj && (this._go = this.layouter._2v(this._mj, this._l5, this._mq) / 2),
                this._fo ? (this._go, this._8o = this._fo.length, this._8o <= 2 ||
                    this.layouter.angleSpacing == "regular" ? WW.call(this, t) : YW.call(this, t)) : null;
        },
        _f3: function (t) {
            var i = this._69(t);
            if (!i) {
                return this._ms = this._go;
            }
            var n = i[0];
            var e = i[1];
            var s = this.layouter.getRadius(this._mj, this._l5);
            if (s < this._go && (s = this._go), this._ev = s, this._go + n > s && (s = this._go + n),
                n && this._8o > 1 && e < Math.PI) {
                var h = n / Math.sin(e / 2);
                h > s && (s = h);
            }
            return this._kj = s, this._ms = s + n, this._mj && this._fo && this.layouter.radiusMode == "variable" &&
            forEach(this._fo, function (t) {
                var i = t._ms;
                1 == t._8o && (i /= 2);
                var n = this._go + i, e = t._l7;
                if (e && e < Math.PI) {
                    var s = Math.sin(e / 2);
                    var h = i / s;
                    h > i && (i = h);
                }
                n > i && (i = n);
                t._nd6 = i;
            }, this), (!this._mj || t) && this._gr(0), this._ms;
        },
        _62: function (t, i, n, e, s) {
            if (this._mj && (e[this._mj.id] = {
                x: t,
                y: i,
                node: this._mj
            }, s && s.addRect(t - this._go / 2, i - this._go / 2, this._go, this._go)), this._fo) {
                if (!this._mj && 1 == this._fo.length) return void this._fo[0]._62(t, i, n, e, s);
                n = n || 0;
                var h = this._kj;
                var r = this._ev;
                forEach(this._fo, function (a) {
                    var o = h;
                    a._nd6 && (o = Math.max(r, a._nd6));
                    var f = a._l6 + n;
                    var c = t + o * Math.cos(f);
                    var u = i + o * Math.sin(f);
                    a._62(c, u, n, e, s);
                }, this);
            }
        }
    };

    extend(BalloonLayouter, Layouter);

    var VW = function () {
        doSuperConstructor(this, VW, arguments);
    };

    extend(VW, SpringLayouter);

    var EdgeBundle = function (t, i) {
        this.node1 = t;
        this.node2 = i;
        t == i ? (this.isLooped = true, this._l3 = t._l2) : this._l3 = new HashList;
        this._8n = [];
        this._gt = Defaults.EDGE_BUNDLE_EXPANDED;
    };

    Defaults.EDGE_BUNDLE_EXPANDED = true;

    EdgeBundle.prototype = {
        node1: null,
        node2: null,
        _l3: null,
        _gt: Defaults.EDGE_BUNDLE_EXPANDED,
        _8n: null,
        _gu: null,
        agentEdge: null,
        _ncb: function (t, i, n) {
            this._l3.forEach(function (e) {
                return n && e.$from != n && e.fromAgent != n ? void 0 : t.call(i, e);
            });
        },
        _5h: 0,
        _5f: 0,
        _iu: function (t, i) {
            return this._l3.add(t) === false ? false : (i == this.node1 ? this._5h++ : this._5f++ ,
                    this._nc1 ? void this._14(t) : void (this._nc1 = true));
        },
        _ds: function (t, i) {
            return this._l3.remove(t) === false ? false : (i == this.node1 ? this._5h-- : this._5f-- , this._14(t),
                    void this._l3.forEach(function (t) {
                t._edgeBundleInvalidateFlag = true;
                t.__4x = true;
            }, this));
        },
        _14: function (t) {
            this._d1BindableFlag = true;
            this._6h = true;
            t._edgeBundleInvalidateFlag = true;
            t.__4x = true;
        },
        _d1: function () {
            this._6h || (this._6h = true, this._l3.forEach(function (t) {
                t._edgeBundleInvalidateFlag = true;
            }));
        },
        isEmpty: function () {
            return this._l3.isEmpty();
        },
        isPositiveOrder: function (t) {
            return this.node1 == t.$from || this.node1 == t.fromAgent;
        },
        canBind: function (t) {
            return t && this._6h && this._fq(t), this._l3.length > 1 && this._8n.length > 1;
        },
        _if: function (t) {
            return this._8n.indexOf(t);
        },
        getYOffset: function (t) {
            return this._gu[t.id];
        },
        _4q: function (t) {
            if (!this.canBind()) {
                return void (this._gu = {});
            }
            var i = {};
            var n = this._8n.length;
            if (!(2 > n)) {
                var e = 0;
                var s = this._8n[0];
                i[s.id] = 0;
                for (var h = 1; n > h; h++) {
                    s = this._8n[h];
                    var r = t.getStyle(s, Styles.EDGE_BUNDLE_GAP) || DefaultStyles[Styles.EDGE_BUNDLE_GAP];
                    e += r;
                    i[s.id] = e;
                }
                if (!this.isLooped) {
                    for (var a = e / 2, h = 0; n > h; h++) {
                        s = this._8n[h];
                        i[s.id] -= a;
                    }
                }
                this._gu = i;
            }
        },
        _nc6: function (t) {
            return this._gt == t ? false : (this._gt = t, this._d1(), true);
        },
        reverseExpanded: function () {
            return this._nc6(!this._gt);
        },
        _1a: function () {
            this._d1BindableFlag = false;
            this._8n.length = 0;
            var t;
            this._l3.forEach(function (i) {
                if (i.isBundleEnabled()) {
                    if (!this.isPositiveOrder(i)) {
                        return t || (t = []), void t.push(i);
                    }
                    this._8n.push(i);
                }
            }, this);
            t && (this._8n = t.concat(this._8n));
        },
        _fb: function (t) {
            return t == this.agentEdge || !this.canBind() || this._gt;
        },
        _fq: function (t) {
            this._6h = false;
            this._l3.forEach(function (t) {
                t._edgeBundleInvalidateFlag = false;
            });
            this._d1BindableFlag && this._1a();
            var i = this._gt;
            var n = this.canBind();
            var e = !n || i;
            forEach(this._8n, function (t) {
                t._$s = true, t._i6InBundle = e, e && (t.__4x = true)
            }, this);
            e ? this._nb2(null, t) : (this._nb2(this._8n[0], t), this.agentEdge._i6InBundle = true,
                    this.agentEdge.__4x = true);
            e && this._4q(t);
        },
        _nb2: function (t, i) {
            if (t != this.agentEdge) {
                var n = this.agentEdge;
                return this.agentEdge = t, i && i._4p(new PropertyChangeEvent(this, "agentEdge", t, n)), true;
            }
        }
    };

    defineProperties(EdgeBundle.prototype, {
        bindableEdges: {
            get: function () {
                return this._8n;
            }
        },
        edges: {
            get: function () {
                return this._l3._k0;
            }
        },
        length: {
            get: function () {
                return this._l3 ? this._l3.length : 1;
            }
        },
        expanded: {
            get: function () {
                return this._gt;
            },
            set: function (t) {
                return this._gt == t ? false : (this._gt = t, void this._d1());
            }
        }
    });

    var ZW = function () {
        function t(t, i) {
            this.node = t;
            this.body = i;
        }

        function i() {
            this.stack = [];
            this.popIdx = 0;
        }

        var n = -1e6;
        var e = .8;

        i.prototype = {
            isEmpty: function () {
                return 0 === this.popIdx;
            },
            push: function (i, n) {
                var e = this.stack[this.popIdx];
                e ? (e.node = i, e.body = n) : this.stack[this.popIdx] = new t(i, n);
                ++this.popIdx;
            },
            pop: function () {
                return this.popIdx > 0 ? this.stack[--this.popIdx] : void 0;
            },
            reset: function () {
                this.popIdx = 0;
            }
        };
        var s = [];
        var h = new i;
        var r = function () {
            this.body = null;
            this.quads = [];
            this.mass = 0;
            this.massX = 0;
            this.massY = 0;
            this.left = 0;
            this.top = 0;
            this.bottom = 0;
            this.right = 0;
            this.isInternal = false;
        };
        var a = [];
        var o = 0;
        var f = function () {
            var t;
            return a[o] ? (t = a[o], t.quads[0] = null, t.quads[1] = null, t.quads[2] = null, t.quads[3] = null,
                    t.body = null, t.mass = t.massX = t.massY = 0, t.left = t.right = t.top = t.bottom = 0,
                    t.isInternal = false) : (t = new r, a[o] = t), ++o, t;
        };
        var c = f();
        var u = function (t, i) {
            var n = Math.abs(t.x - i.x);
            var e = Math.abs(t.y - i.y);
            return 1e-8 > n && 1e-8 > e;
        };
        var _ = function (t) {
            for (h.reset(), h.push(c, t); !h.isEmpty();) {
                var i = h.pop();
                var n = i.node;
                var e = i.body;
                if (n.isInternal) {
                    var s = e.x;
                    var r = e.y;
                    n.mass = n.mass + e.mass;
                    n.massX = n.massX + e.mass * s;
                    n.massY = n.massY + e.mass * r;
                    var a = 0;
                    var o = n.left;
                    var _ = (n.right + o) / 2;
                    var d = n.top;
                    var l = (n.bottom + d) / 2;
                    if (s > _) {
                        a += 1;
                        var v = o;
                        o = _;
                        _ += _ - v;
                    }
                    if (r > l) {
                        a += 2;
                        var b = d;
                        d = l;
                        l += l - b;
                    }
                    var y = n.quads[a];
                    y || (y = f(), y.left = o, y.top = d, y.right = _, y.bottom = l, n.quads[a] = y);
                    h.push(y, e);
                } else if (n.body) {
                    var g = n.body;
                    if (n.body = null, n.isInternal = true, forEachByBreadthFirst(g, e)) {
                        if (n.right - n.left < 1e-8) {
                            return;
                        }
                        do {
                            var x = Math.random();
                            var m = (n.right - n.left) * x;
                            var E = (n.bottom - n.top) * x;
                            g.x = n.left + m;
                            g.y = n.top + E;
                        } while (forEachByBreadthFirst(g, e));
                    }
                    h.push(n, g);
                    h.push(n, e);
                } else {
                    n.body = e;
                }
            }
        };
        var d = function (t) {
            var i;
            var h;
            var r;
            var a;
            var o = s;
            var f = 1;
            var u = 0;
            var _ = 1;
            for (o[0] = c; f;) {
                var d = o[u];
                var l = d.body;
                f -= 1;
                u += 1;
                l && l !== t ? (h = l.x - t.x, r = l.y - t.y, a = Math.sqrt(h * h + r * r),
                    0 === a && (h = (Math.random() - .5) / 50, r = (Math.random() - .5) / 50,
                        a = Math.sqrt(h * h + r * r)), i = n * l.mass * t.mass / (a * a),
                    -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * h, t.fy = t.fy + i * r) :
                    (h = d.massX / d.mass - t.x, r = d.massY / d.mass - t.y, a = Math.sqrt(h * h + r * r),
                    0 === a && (h = (Math.random() - .5) / 50, r = (Math.random() - .5) / 50,
                        a = Math.sqrt(h * h + r * r)), (d.right - d.left) / a < e ? (i = n * d.mass * t.mass / (a * a),
                        -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * h, t.fy = t.fy + i * r) :
                        (d.quads[0] && (o[_] = d.quads[0], f += 1, _ += 1),
                        d.quads[1] && (o[_] = d.quads[1], f += 1, _ += 1),
                        d.quads[2] && (o[_] = d.quads[2], f += 1, _ += 1),
                        d.quads[3] && (o[_] = d.quads[3], f += 1, _ += 1)));
            }
        };
        var l = function (t, i) {
            n = i;
            var e;
            var s = Number.MAX_VALUE;
            var h = Number.MAX_VALUE;
            var r = Number.MIN_VALUE;
            var a = Number.MIN_VALUE;
            var u = t;
            var d = u.length;
            for (e = d; e--;) {
                var l = u[e].x;
                var v = u[e].y;
                s > l && (s = l);
                l > r && (r = l);
                h > v && (h = v);
                v > a && (a = v);
            }
            var b = r - s;
            var y = a - h;
            for (b > y ? a = h + b : r = s + y, o = 0, c = f(), c.left = s, c.right = r, c.top = h, c.bottom = a, e = d; e--;) {
                _(u[e], c);
            }
        };

        return { init: l, update: d };
    };

    var KW = function (t) {
        t.fx -= t.x * this.attractive;
        t.fy -= t.y * this.attractive;
    };

    var JW = function (t) {
        if (0 != t.k) {
            var i = this._dh;
            var n = t.from;
            var e = t.to;
            var s = e.x - n.x;
            var h = e.y - n.y;
            var r = s * s + h * h;
            var a = Math.sqrt(r) || .1;
            var o = (a - i) * t.k * this.elastic;
            o /= a;
            var f = o * s;
            var c = o * h;
            e.fx -= f;
            e.fy -= c;
            n.fx += f;
            n.fy += c;
        }
    };

    SpringLayouter.prototype = {
        appendNodeInfo: function (t, i) {
            i.mass = t.layoutMass || 1;
            i.fx = 0;
            i.fy = 0;
            i.vx = 0;
            i.vy = 0;
        },
        appendEdgeInfo: function (t, i) {
            i.k = t.layoutElasticity || 1;
        },
        setMass: function (t, i) {
            t.layoutMass = i;
            this.layoutDatas && this.layoutDatas.nodes && (t = this.layoutDatas.nodes[t.id], t && (t.mass = i));
        },
        setElasticity: function (t, i) {
            t.layoutElasticity = i;
            this.layoutDatas && this.layoutDatas.edges && (t = this.layoutDatas.edges[t.id], t && (t.k = i));
        },
        _dh: 50,
        _i3: .5,
        timeStep: .15,
        repulsion: 50,
        attractive: .1,
        elastic: 3,
        _mb: 1e3,
        _kq: function (t) {
            return this._mb + .3 * (t - this._mb);
        },
        _lw: function (t, i) {
            var n = (Date.now(), this.layoutDatas.nodes);
            for (var e in n) {
                var s = n[e];
                i && (s.x += Math.random() - .5, s.y += Math.random() - .5);
                KW.call(this, s);
            }
            var h = this.layoutDatas.groups;
            if (h) {
                for (var e in h) {
                    var r = h[e];
                    var a = r.children;
                    var o = 0;
                    var f = 0;
                    a.forEach(function (t) {
                        o += t.x;
                        f += t.y;
                    });
                    o /= a.length;
                    f /= a.length;
                    var c = 10 * this.attractive;
                    a.forEach(function (t) {
                        t.fx -= (t.x - o) * c;
                        t.fy -= (t.y - f) * c;
                    })
                }
            }
            var u = this._nbodyForce;
            u || (u = this._nbodyForce = ZW());
            u.init(this.layoutDatas.nodesArray, -this.repulsion * this.repulsion * this.repulsion);
            for (var e in n) {
                u.update(n[e]);
            }
            if (this.elastic) {
                var _ = this.layoutDatas.edges;
                for (var e in _) {
                    JW.call(this, _[e]);
                }
            }
            return this._ly(t);
        },
        _ly: function (t) {
            var i = this.layoutDatas.minEnergy;
            var n = (this.layoutDatas.currentEnergy, this.layoutDatas.nodes);
            var t = this.timeStep;
            var e = 0;
            var s = this._i3;
            for (var h in n) {
                var r = n[h];
                var a = r.fx / r.mass;
                var o = r.fy / r.mass;
                var f = r.vx += a * t;
                var c = r.vy += o * t;
                r.x += f * t;
                r.y += c * t;
                i > e && (e += 2 * (f * f + c * c));
                r.fx = 0;
                r.fy = 0;
                r.vx *= s;
                r.vy *= s;
            }
            return this.layoutDatas.currentEnergy = e, e >= i;
        }
    };

    extend(SpringLayouter, Nh);

    Qunee.SpringLayouter = SpringLayouter;

    var QW = function (locations) {
        this.locations = locations;
    };

    QW.prototype = {
        oldLocations: null,
        _fd: null,
        duration: 700,
        animationType: animationEffect.easeOutStrong,
        _6y: function (t) {
            if (this._fd = t, this.oldLocations = {}, t) {
                for (var i in t) {
                    var n = t[i];
                    var e = n.node;
                    this.oldLocations[i] = { x: e.x, y: e.y };
                }
            }
        },
        setLocation: function (t, i, n) {
            t.setLocation(i, n);
        },
        forEach: function (t, i) {
            for (var n in this.locations) {
                var e = this.oldLocations[n];
                var s = this.locations[n];
                t.call(i, e, s);
            }
        },
        _km: function (t) {
            this.forEach(function (i, n) {
                var e = n.node;
                var s = i.x + (n.x - i.x) * t;
                var h = i.y + (n.y - i.y) * t;
                this.setLocation(e, s, h);
            }, this);
        },
        stop: function () {
            this._nbnimate && this._nbnimate._mc();
        },
        start: function (t) {
            this._nbnimate ? (this._nbnimate._mc(), this._nbnimate._j1 = this.duration,
                    this._nbnimate._e6Type = this.animationType, this._nbnimate._onfinish = this._onfinish) :
                this._nbnimate = new yH(this._km, this, this.duration, this.animationType);
            this._nbnimate._l9(t);
        }
    };

    defineProperties(QW.prototype, {
        locations: {
            get: function () {
                return this._fd;
            },
            set: function (t) {
                this._fd != t && this._6y(t);
            }
        }
    });

    var tU = function (t) {
        var i;
        var n = new HashList;
        return t.forEach(function (t) {
            t instanceof Node && (t.hasInEdge() ? !i && t.hasOutEdge() && (i = t) : n.add(t));
        }), n.isEmpty() && i && n.add(i), n;
    };

    var iU = function (t, i, n, e, s, h) {
        if (i instanceof Data) {
            return t(i, n, e, s, h), i;
        }
        if (i instanceof Graph) {
            var r = new HashList;
            i._l1Model.forEach(function (t) {
                return i.isVisible(t) ? t._ic() && t._gt && t.hasChildren() ?
                        void (t.$location && (t.$location.invalidateFlag = false)) : void r.add(t) : void 0;
            }), i = r;
        }
        var i = tU(i, e);
        return forEach(i, function (i) {
            t(i, n, e, s, h);
        }), i;
    };

    var nU = function (t, i, n, e, s) {
        return iU(sU, t, i, n, e, s);
    };

    var eU = function (t, i, n, e, s) {
        return iU(hU, t, i, n, e, s);
    };

    GraphModel.prototype.forEachByTopoDepthFirstSearch = function (t, i, n, e) {
        nU(this, t, i, n, e);
    };

    GraphModel.prototype.forEachByTopoBreadthFirstSearch = function (t, i, n, e) {
        t instanceof Object && 1 == arguments.length && (i = t.scope), eU(this, t, i, n, e);
    };

    var sU = function (t, i, n, e, s) {
        function forEachByDepthFirst(t, i, n, e, s, r, a, o) {
            t._marker = r;
            e || i.call(n, t, o, a);
            $h(t, function (o) {
                forEachByDepthFirst(o, i, n, e, s, r, a + 1, t);
            }, o, s, r, n);
            e && i.call(n, t, o, a);
        }

        forEachByDepthFirst(t, i, n, e, s, {}, 0);
    };

    var hU = function (t, i, n, e, s) {
        function forEachByDepthFirst(t, i, n, e, s, r, a) {
            var o;
            var f = t.length;
            t.forEach(function (t, h) {
                var c = t.v;
                c._marker = r;
                e || i.call(n, c, t._from, a, h, f);
                $h(c, function (t) {
                    o || (o = []);
                    t._marker = r;
                    o.push({ v: t, _from: c });
                }, c, s, r, n);
            });
            o && forEachByDepthFirst(o, i, n, e, s, r, a + 1);
            e && t.forEach(function (t, e) {
                i.call(n, t.v, t._from, a, e, f);
            });
        }

        forEachByDepthFirst([{ v: t }], i, n, e, s, {}, 0);
    };

    Qunee.toColor = randomColor2;
    Qunee.log = log;
    Qunee.error = error;
    Qunee.trace = trace;
    Qunee.isIE = isIE;
    Qunee.isOpera = isOpera;
    Qunee.isWebkit = isWebkit;
    Qunee.isGecko = isGecko;
    Qunee.isFirefox = isFirefox;
    Qunee.isSafari = isSafari;
    Qunee.isChrome = isChrome;
    Qunee.isMac = isMac;
    Qunee.DefaultStyles = DefaultStyles;
    Qunee.Defaults = Defaults;
    Qunee.Styles = Styles;
    Qunee.Consts = Consts;
    Qunee.Graphs = Graphs;
    Qunee.Graph = Graph;
    Qunee.BaseUI = BaseUI;
    Qunee.ElementUI = ElementUI;
    Qunee.NodeUI = NodeUI;
    Qunee.EdgeUI = EdgeUI;
    Qunee.LabelUI = LabelUI;
    Qunee.ImageUI = ImageUI;
    Qunee.Shapes = Shapes;
    Qunee.Path = Path;
    Qunee.Gradient = Gradient;
    Qunee.InteractionEvent = InteractionEvent;
    Qunee.Element = Element;
    Qunee.Node = Node;
    Qunee.Edge = Edge;
    Qunee.GraphModel = GraphModel;
    Qunee.EdgeBundle = EdgeBundle;
    Qunee.TreeLayouter = TreeLayouter;
    // Qunee.name = "Qunee for HTML5";
    Qunee.name = "";
    Qunee.version = "2.6.0.4";
    Qunee.about = "Qunee - Diagramming Components for HTML5/Canvas";
    Qunee.copyright = "Copyright © 2017 Qunee.com";
    Qunee.css = css;
    Qunee.IDrawable = IDrawable;
    Qunee.publishDate = "19/1/2017";

    log = function () {
    }

    return Qunee;
}(window, document);
