﻿window.Q = function (t, i, n) {
    "use strict";
    function e(t, i, n) {
        if (t[Gh]()) {
            var s = t._fe || t.getChildren();
            if (s) {
                s = s._is || s;
                for (var h = 0, r = s[qh]; r > h; h++)
                    if (i.call(n, s[h]) === !1 || e(s[h], i, n) === !1)
                        return !1;
                return !0
            }
        }
    }

    function s(t) {
        if (!t[Gh]())
            return t instanceof wY ? t : null;
        for (var i, n = t._fe._is, e = n[qh] - 1; e >= 0;) {
            if (i = n[e], i = s(i)) return i;
            e--
        }
        return null
    }

    function h(t, i, n, e) {
        return e ? r(t, i, n) : a(t, i, n)
    }

    function r(t, i, n) {
        t = t._is || t;
        for (var e, s = 0, h = t.length; h > s; s++)
            if (e = t[s], e[Gh]() && !r(e[zh], i, n) || i[Hh](n, e) === !1)
                return !1;
        return !0
    }

    function a(t, i, n) {
        t = t._is || t;
        for (var e, s = 0, h = t[qh]; h > s; s++)
            if (e = t[s], i.call(n, e) === !1 || e[Gh]() && !a(e[zh], i, n))
                return !1;
        return !0
    }

    function o(t, i, n, e) {
        return e ? f(t, i, n) : u(t, i, n)
    }

    function f(t, i, n) {
        t = t._is || t;
        for (var e, s = t[qh], h = s - 1; h >= 0; h--)
            if (e = t[h], e[Gh]() && !f(e[zh], i, n) || i.call(n, e) === !1)
                return !1;
        return !0
    }

    function u(t, i, n) {
        t = t._is || t;
        for (var e, s = t[qh], h = s - 1; h >= 0; h--)
            if (e = t[h], i[Hh](n, e) === !1 || e[Gh]() && !u(e[zh], i, n))
                return !1;
        return !0
    }

    function c(t, i, n) {
        for (var e, s = (t._is || t)[Yh](0); s[qh];) {
            e = s[0], s = s[Uh](1);
            var h = i.call(n, e);
            if (h === !1)
                return !1;
            if (e.hasChildren()) {
                var r = e[zh];
                r = r._is || r, s = s.concat(r)
            }
        }
        return !0
    }

    function _(t, i, n) {
        for (var e, s = (t._is || t)[Yh](0); s[qh];) {
            e = s[s[qh] - 1], s = s[Uh](0, s[qh] - 1);
            var h = i[Hh](n, e);
            if (h === !1)
                return !1;
            if (e[Gh]()) {
                var r = e[zh];
                r = r._is || r, s = s[Wh](r)
            }
        }
        return !0
    }

    function d(t, i) {
        function n(t, n) {
            for (var e = t[qh], s = n[qh], h = e + s, r = new Array(h), a = 0, o = 0, f = 0; h > f;)
                r[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            return r
        }

        function e(t) {
            var i = t[qh], s = Math[Xh](i / 2);
            return 1 >= i ? t : n(e(t.slice(0, s)), e(t[Yh](s)))
        }

        return e(t)
    }

    function l(t, i, n, e) {
        t instanceof iq && (t = t._is);
        for (var s = 0, h = (t._is || t)[qh]; h > s; s++) {
            var r = i[Hh](n, t[s], s, e);
            if (r === !1)
                return !1
        }
        return !0
    }

    function v(t, i, n) {
        for (var e = t instanceof iq, s = t._is || t, h = 0, r = s[qh]; r > h; h++) {
            var a = s[h];
            i.call(n, a) && (e ? t[Vh](a) : t[Uh](h, 1), h-- , r--)
        }
    }

    function b(t, i, n, e) {
        t instanceof iq && (t = t._is);
        for (var s = (t._is || t).length - 1; s >= 0; s--) {
            var h = i.call(n, t[s], s, e);
            if (h === !1)
                return !1
        }
        return !0
    }

    function g(t) {
        if (t[Zh] instanceof Function)
            return t[Zh](!0);
        var i, n = [];
        return l(t, function (t) {
            i = t && t[Zh] instanceof Function ? t[Zh]() : t, n[Kh](i)
        }, this), n
    }

    function y(t, i, e) {
        e === n || 0 > e ? t[Kh](i) : t.splice(e, 0, i)
    }

    function m(t, i) {
        var n = t[Jh](i);
        return 0 > n || n >= t.length ? !1 : t.splice(n, 1)
    }

    function x(t, i) {
        var n = !1;
        return l(t, function (t) {
            return i == t ? (n = !0, !1) : void 0
        }), n
    }

    function p(t, i) {
        var n = t;
        for (var e in i) {
            if (i.__lookupGetter__) {
                var s = i.__lookupGetter__(e), h = i.__lookupSetter__(e);
                s || h ? (s && n.__defineGetter__(e, s), h && n.__defineSetter__(e, h)) : n[e] = i[e]
            } else
                n[e] = i[e];
        }
        return n
    }

    function E(t, i, n) {
        if (!(t instanceof Function))
            throw new Error("subclass must be type of Function");
        var e = null;
        Qh == typeof i && (e = i, i = t, t = function () {
            i.apply(this, arguments)
        });
        var s = t[tr], h = function () {
        };
        return h[tr] = i.prototype, t[tr] = new h, t[ir] = i[tr], t[ir].constructor = i, p(t[tr], s), e && p(t[tr], e), n && p(t.prototype, n), t[tr].class = t, t
    }

    function w(t, i, n) {
        return T(t, i, "constructor", n)
    }

    function T(t, i, n, e) {
        var s = i.superclass;
        if (s) {
            var h = s[n];
            return h ? h[nr](t, e) : void 0
        }
    }

    function M(t, i, n, e) {
        if ("constructor" == n)
            return k(t, i, e);
        if (i[er] instanceof Function) {
            var s = i[er].prototype[n];
            return s instanceof Function ? s[nr](t, e) : void 0
        }
    }

    function k(t, i, n) {
        return i.super_ instanceof Function ? i[er].apply(t, n) : void 0
    }

    function O(t, i) {
        return t[er] = i, t[tr] = Object.create(i[tr], {
            super_: {value: i, enumerable: !1},
            constructor: {value: t, enumerable: !1}
        }), t
    }

    function S(t, i, n) {
        if (!(t instanceof Function) && t instanceof Object) {
            i = t.super;
            var e;
            return t.hasOwnProperty("constructor") ? (e = t.constructor, delete t.constructor) : e = i ? function () {
                i.apply(this, arguments)
            } : function () {
            }, S(e, i, t)
        }
        if (i && !(i instanceof Function) && i instanceof Object)
            return S(t, i[sr], i);
        if (i && O(t, i), n) {
            var s = t[tr];
            for (var h in n)
                s[h] = n[h]
        }
        return t
    }

    function I(t, i, e, s, h) {
        if (s)
            return void Object[hr](t, i, {value: e, enumerable: !0});
        var r = {configurable: !0, enumerable: !0}, a = rr + i;
        e !== n && (t[a] = e), r.get = function () {
            return this[a]
        }, r.set = function (t) {
            var n = this[a];
            if (n == t)
                return !1;
            var e = new xq(this, i, t, n);
            return this[ar](e) ? (this[a] = t, h && h[Hh](this, t, n), this[or](e), !0) : !1
        }, Object[hr](t, i, r)
    }

    function A(t, i) {
        for (var n = 0, e = i[qh]; e > n; n++) {
            var s = i[n];
            I(t, s.name || s, s.defaultValue || s.value, s[fr], s[ur])
        }
    }

    function C(t, i, n) {
        return i instanceof Object ? t = t[cr](i) : i && !n && (n = parseInt(i)), i && !n && (n = parseInt(i)), n ? setTimeout(t, n) : setTimeout(t)
    }

    function L(i, n) {
        return n && (i = i.bind(n)), t[_r](i)
    }

    function P(t, i) {
        return t[dr] = i, t
    }

    function R(t, i) {
        if (!t.hasOwnProperty(lr)) {
            var n = t[vr](br);
            if (!n) return P(t, i);
            for (var e = n[gr](yr), s = 0, h = e[qh]; h > s; s++)if (e[s] == i) return;
            return n += yr + i, P(t, n)
        }
        t[lr].add(i)
    }

    function D(t, i) {
        if (!t.hasOwnProperty(lr)) {
            var n = t[vr](br);
            if (!n || !n[Jh](i))
                return;
            for (var e = "", s = n[gr](yr), h = 0, r = s[qh]; r > h; h++)
                s[h] != i && (e += s[h] + yr);
            return P(t, e)
        }
        t[lr].remove(i)
    }

    function N(t) {
        return !isNaN(t) && t instanceof Number || mr == typeof t
    }

    function B(t) {
        return t !== n && (t instanceof String || xr == typeof t)
    }

    function j(t) {
        return t !== n && (t instanceof Boolean || pr == typeof t)
    }

    function $(t) {
        return Array[Er](t)
    }

    function F(i) {
        i || (i = t[wr]), i[Tr] ? i[Tr]() : i.returnValue = !1
    }

    function G(i) {
        i || (i = t.event), i[Mr] ? i[Mr]() : i[kr] || (i[kr] = !0)
    }

    function q(t) {
        F(t), G(t)
    }

    function z(t) {
        return Math[Or](Math[Sr]() * t)
    }

    function H() {
        return Math[Sr]() >= .5
    }

    function Y(t) {
        var i = !0;
        for (var n in t) {
            i = !1;
            break
        }
        return i
    }

    function U(t) {
        if (t && t > 0 && 1 > t) {
            var i = Math[Or](16777215 * Math[Sr]());
            return Ir + (i >> 16 & 255) + Ar + (i >> 8 & 255) + Ar + (255 & i) + Ar + t[Cr](2) + Lr
        }
        return V(Math[Or](16777215 * Math[Sr]()))
    }

    function W(t) {
        return t > 0 ? Math[Or](t) : Math[Xh](t)
    }

    function X(t) {
        return t > 0 ? Math.ceil(t) : Math[Or](t)
    }

    function V(t) {
        return 16777216 > t ? Pr + (Rr + t.toString(16))[Yh](-6) : Ir + (t >> 16 & 255) + Ar + (t >> 8 & 255) + Ar + (255 & t) + Ar + ((t >> 24 & 255) / 255)[Cr](2) + Lr
    }

    function Z(t, i, n) {
        Qh != typeof n || n.hasOwnProperty(Dr) || (n[Dr] = !0), Object.defineProperty(t, i, n)
    }

    function K(t, i) {
        for (var n in i) if (Nr != n[0]) {
            var e = i[n];
            Qh != typeof e || e.hasOwnProperty(Dr) || (e.enumerable = !0)
        }
        Object[Br](t, i)
    }

    function J(i, n) {
        n || (n = t);
        for (var e = i[gr](jr), s = 0, h = e.length; h > s; s++) {
            var r = e[s];
            n = n[r]
        }
        return n
    }

    function Q(t) {
        return t instanceof MouseEvent || t instanceof Object && t[$r] !== n
    }

    function ti(i) {
        t[Fr] && console.log(i)
    }

    function ii(i) {
        t.console && console[Gr](i)
    }

    function ni(i) {
        t.console && console.error(i)
    }

    function ei(t, i, n) {
        var e, s, h;
        0 == t._mq ? (e = -1, h = 0, s = i) : 0 == t._mu ? (e = 0, h = 1, s = n) : (e = -1 / t._mq, s = (t._mq - e) * i + t._ms, h = 1);
        var r = new rq;
        return r._mq = e, r._ms = s, r._mu = h, r._mn = i, r._ml = n, r._k7 = Math[qr](e, h), r._muos = Math.cos(r._k7), r[zr] = Math.sin(r._k7), r
    }

    function si(t, i, n, e, s) {
        var h, r;
        i > e ? h = -1 : e > i && (h = 1), n > s ? r = -1 : s > n && (r = 1);
        var a, o;
        if (!h) return o = 0 > r ? t.y : t[Hr], {x: i, y: o};
        if (!r) return a = 0 > h ? t.x : t[Yr], {x: a, y: n};
        var f = (n - s) / (i - e), u = n - f * i, c = 0 > h ? i - t.x : i - t.right, _ = 0 > r ? n - t.y : n - t[Hr];
        return Math.abs(f) >= Math.abs(_ / c) ? (o = 0 > r ? t.y : t[Hr], a = (o - u) / f) : (a = 0 > h ? t.x : t[Yr], o = f * a + u), {
            x: a,
            y: o
        }
    }

    function hi(t, i, n, e, s, h, r, a) {
        return 0 >= r || 0 >= a || 0 >= n || 0 >= e ? !1 : (r += s, a += h, n += t, e += i, (s > r || r > t) && (h > a || a > i) && (t > n || n > s) && (i > e || e > h))
    }

    function ri(t, i, n, e, s, h) {
        return s >= t && t + n >= s && h >= i && i + e >= h
    }

    function ai(t, i, n, e, s, h, r, a, o) {
        return o && (t -= o, i -= o, n += o + o, e += o + o), s >= t && h >= i && t + n >= s + r && i + e >= h + a
    }

    function oi(t, i, n, e, s, h, r, a) {
        var o = t;
        o += n;
        var f = i;
        f += e;
        var u = s;
        u += r;
        var c = h;
        return c += a, s > t && (t = s), h > i && (i = h), o > u && (o = u), f > c && (f = c), o -= t, f -= i, 0 > o || 0 > f ? null : new oq(t, i, o, f)
    }

    function fi(t, i, e) {
        if (B(t) && (t = uq[Ur](t)), !t) return {x: 0, y: 0};
        if (t.x !== n) return {x: t.x, y: t.y};
        var s, h, r = t[Wr], a = t[Xr];
        switch (r) {
            case cq:
                s = 0;
                break;
            case dq:
                s = i;
                break;
            default:
                s = i / 2
        }
        switch (a) {
            case lq:
                h = 0;
                break;
            case bq:
                h = e;
                break;
            default:
                h = e / 2
        }
        return {x: s, y: h}
    }

    function ui(t, i, n) {
        t.children.add(i, n), t.onChildAdd(i, n)
    }

    function ci(t, i) {
        t._fe && (t._fe.remove(i), t[Vr](i))
    }

    function _i(t) {
        return t[Zr](/^-ms-/, Kr).replace(/-([\da-z])/gi, function (t, i) {
            return i.toUpperCase()
        })
    }

    function di(t) {
        return t[Zr](/[A-Z]/g, function (t) {
            return Jr + t[Qr]()
        }).replace(/^ms-/, ta)
    }

    function li(t, i) {
        var n = t.style;
        if (!n) return !1;
        var e, s;
        for (e in i) i.hasOwnProperty(e) && (s = Nq(e)) && (n[s] = i[e]);
        return t
    }

    function vi(t) {
        var i, n, e = "";
        for (i in t) t.hasOwnProperty(i) && (n = Nq(i)) && (e += di(n) + ia + t[i] + na);
        return e ? e[ea](0, e[qh] - 1) : e
    }

    function bi(t, i, n) {
        (i = Nq(i)) && (t.style[i] = n)
    }

    function gi(t, i) {
        return Rq ? (i && !B(i) && (i = vi(i)), Rq[sa] ? void Rq.insertRule(t + ha + i + ra, 0) : void (Rq[aa] && Rq[aa](t, i, 0))) : !1
    }

    function yi(i, n) {
        i[$r] && (i = i.changedTouches && i[oa][qh] ? i[oa][0] : i.touches[0]);
        var e = n[fa](), s = i[ua] || 0, h = i[ca] || 0;
        return JG && WG && (t.pageXOffset && s == i[_a] && (s -= t[da]), t[la] && h == i[va] && (h -= t[la])), {
            x: s - e.left,
            y: h - e.top
        }
    }

    function mi(t, i, n) {
        this._lq = t, this[ba] = n, this._handler = i, this[ga] = new pi, this._install()
    }

    function xi(t) {
        return XG && t[ya] || !XG && t[ma]
    }

    function pi() {
        this.points = []
    }

    function Ei(t, i, n, e, s) {
        Ti(t, function (e) {
            if (i) {
                var s = e[xa];
                if (!s) return void (n || lz)(pa + t + Ea);
                i(s)
            }
        }, n, e, s)
    }

    function wi(t, i, n, e, s) {
        Ti(t, function (e) {
            if (i) {
                var s, h = e.responseText;
                if (!h) return (n || lz)(pa + t + wa), s = new Error(pa + t + wa), i(h, s);
                try {
                    h = JSON.parse(h)
                } catch (r) {
                    (n || lz)(r), s = r
                }
                i(h, s)
            }
        }, n, e, s)
    }

    function Ti(t, i, n, e, s) {
        (n === !1 || e === !1) && (s = !1);
        try {
            var h = new XMLHttpRequest, r = encodeURI(t);
            if (s !== !1) {
                var a;
                a = r[Jh](Ta) > 0 ? "&" : Ta, r += a + Ma + Date.now()
            }
            h[ka](Oa, r), h[Sa] = function () {
                return 4 == h[Ia] ? h[Aa] && 200 != h.status ? void (n || lz)(pa + t + Ca) : void (i && i(h)) : void 0
            }, h[La](e)
        } catch (o) {
            (n || lz)(pa + t + Ca, o)
        }
    }

    function hi(t, i, n, e, s, h, r, a) {
        return 0 >= r || 0 >= a || 0 >= n || 0 >= e ? !1 : (r += s, a += h, n += t, e += i, (s > r || r > t) && (h > a || a > i) && (t > n || n > s) && (i > e || e > h))
    }

    function ai(t, i, n, e, s, h, r, a) {
        return s >= t && h >= i && t + n >= s + r && i + e >= h + a
    }

    function Mi(t, i, n) {
        return t instanceof Object && t.x ? Oi(t, i, 0, 0) : ki(t, i, n, 0, 0)
    }

    function ki(t, i, n, e, s) {
        var h = Math.sin(n), r = Math.cos(n), a = t - e, o = i - s;
        return t = a * r - o * h + e, i = a * h + o * r + s, new sq(t, i, n)
    }

    function Oi(t, i, n, e) {
        n = n || 0, e = e || 0;
        var s = Math.sin(i), h = Math.cos(i), r = t.x - n, a = t.y - e;
        return t.x = r * h - a * s + n, t.y = r * s + a * h + e, t
    }

    function Si(t, i, n) {
        return Ii(t, i, n, 0, 0)
    }

    function Ii(t, i, n, e, s) {
        var h = ki(t.x, t.y, i, e, s), r = ki(t.x + t[Pa], t.y, i, e, s), a = ki(t.x + t[Pa], t.y + t[Ra], i, e, s),
            o = ki(t.x, t.y + t.height, i, e, s);
        return n ? n[Da]() : n = new oq, n.addPoint(h), n.addPoint(r), n.addPoint(a), n[Na](o), n
    }

    function Ai(t, i) {
        var n = this[Ba] || 1;
        this[ja][Pa] = t + $a, this[ja][Ra] = i + $a, this[Pa] = t * n, this.height = i * n
    }

    function Ci(t) {
        var i = t.webkitBackingStorePixelRatio || t[Fa] || t[Ga] || t[qa] || t[za] || 1;
        return gz / i
    }

    function Li(t, n, e) {
        var s = i[Ha](Ya);
        if (s.g = s[Ua](Wa), t !== !0 && !e) return t && n && (s[Pa] = t, s[Ra] = n), s;
        var h = s.g;
        return h[Ba] = s[Ba] = Ci(h), s[Xa] = Ai, h._ka = function () {
            this[Ya][Pa] = this[Ya][Pa]
        }, t && n && s.setSize(t, n), s
    }

    function Pi(t, i) {
        return yz || (yz = Li()), t && i && (yz[Pa] = t, yz[Ra] = i), yz.g
    }

    function Ri(t, i, n) {
        return (n || tq.FONT_STYLE) + yr + (i || tq[Va]) + Za + (t || tq[Ka])
    }

    function Di(t, i, n, e, s, h, r, a, o, f) {
        if (t[Ja](), t[Qa](n, e), mz && xz > r) {
            var u = r / xz;
            t.scale(u, u), r = xz, f = null
        }
        o || (o = tq.LINE_HEIGHT), r || (r = tq.FONT_SIZE), o *= r, t[to] = f || Ri(h, r, a), t[io] = s, t[no] = eo;
        for (var c = o / 2, _ = i[gr](so), d = 0, l = _[qh]; l > d; d++) {
            var v = _[d];
            t[ho](v, 0, c), c += o
        }
        t[ro]()
    }

    function Ni(t, i, n, e, s, h) {
        if (!t) return {width: 0, height: 0};
        if (i || (i = tq[Va]), mz && xz > i) {
            var r = i / xz, a = Ni(t, xz, n, e, s);
            return a.width *= r, a[Ra] *= r, a
        }
        var o = Pi();
        o[to] = h || Ri(n, i, e), s || (s = tq.LINE_HEIGHT);
        for (var f = i * s, u = 0, c = 0, _ = t[gr](so), d = 0, l = _[qh]; l > d; d++) {
            var v = _[d];
            u = Math.max(o[ao](v)[Pa], u), c += f
        }
        return {width: u, height: c}
    }

    function Bi(t, i, n, e, s) {
        var h;
        if (FG) try {
            h = t[oo](i, n, e, s)
        } catch (r) {
        } else h = t[oo](i, n, e, s);
        return h
    }

    function ji(t) {
        return Math.log(t + Math[fo](t * t + 1))
    }

    function $i(t, i) {
        i = i || t(1);
        var n = 1 / i, e = .5 * n, s = Math.min(1, i / 100);
        return function (h) {
            if (0 >= h) return 0;
            if (h >= i) return 1;
            for (var r = h * n, a = 0; a++ < 10;) {
                var o = t(r), f = h - o;
                if (Math.abs(f) <= s) return r;
                r += f * e
            }
            return r
        }
    }

    function Fi(t, i, n) {
        var e = 1 - t, s = e * e * i[0] + 2 * e * t * i[2] + t * t * i[4],
            h = e * e * i[1] + 2 * e * t * i[3] + t * t * i[5];
        if (n) {
            var r = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0], a = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
            return {x: s, y: h, rotate: Math[qr](a, r)}
        }
        return {t: t, x: s, y: h}
    }

    function Gi(t, i, n) {
        var e = t - 2 * i + n;
        return 0 != e ? (t - i) / e : -1
    }

    function qi(t, i) {
        i.add(t[4], t[5]);
        var n = Gi(t[0], t[2], t[4]);
        if (n > 0 && 1 > n) {
            var e = Fi(n, t);
            i.add(e.x, e.y)
        }
        var s = Gi(t[1], t[3], t[5]);
        if (s > 0 && 1 > s) {
            var e = Fi(s, t);
            i.add(e.x, e.y)
        }
        return i
    }

    function zi(t, i) {
        return Math.abs(t - i) < 1e-7
    }

    function Hi(t) {
        if (zi(t[1], t[3]) && (zi(t[0], t[2]) || zi(t[1], t[5]))) {
            var i = t[0], n = t[1], e = t[4], s = t[5], h = Math.sqrt(pz(i, n, e, s));
            return function (t) {
                return h * t
            }
        }
        var r = t[0], a = t[2], o = t[4], f = r - 2 * a + o, u = 2 * a - 2 * r;
        r = t[1], a = t[3], o = t[5];
        var c = r - 2 * a + o, _ = 2 * a - 2 * r, d = 4 * (f * f + c * c), l = 4 * (f * u + c * _), v = u * u + _ * _,
            h = 4 * d * v - l * l, b = 1 / h, g = .125 * Math.pow(d, -1.5), y = 2 * Math[fo](d),
            m = (h * ji(l / Math.sqrt(h)) + 2 * Math[fo](d) * l * Math.sqrt(v)) * g;
        return function (t) {
            var i = l + 2 * t * d, n = i / Math[fo](h), e = i * i * b;
            return (h * Math.log(n + Math[fo](e + 1)) + y * i * Math[fo](v + t * l + t * t * d)) * g - m
        }
    }

    function Yi(t, i, n) {
        var e = 1 - t, s = i[0], h = i[2], r = i[4], a = i[6],
            o = s * e * e * e + 3 * h * t * e * e + 3 * r * t * t * e + a * t * t * t;
        if (n) var f = 3 * t * t * a + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * h + (-3 * t * t + 6 * t - 3) * s;
        s = i[1], h = i[3], r = i[5], a = i[7];
        var u = s * e * e * e + 3 * h * t * e * e + 3 * r * t * t * e + a * t * t * t;
        if (n) {
            var c = 3 * t * t * a + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * h + (-3 * t * t + 6 * t - 3) * s;
            return {x: o, y: u, rotate: Math[qr](c, f)}
        }
        return {x: o, y: u}
    }

    function Ui(t, i, n, e) {
        var s = -t + 3 * i - 3 * n + e;
        if (0 == s) return [(t - i) / (2 * n - 4 * i + 2 * t)];
        var h = 2 * t - 4 * i + 2 * n, r = i - t, a = h * h - 4 * s * r;
        return 0 > a ? void 0 : 0 == a ? [-h / (2 * s)] : (a = Math.sqrt(a), [(a - h) / (2 * s), (-a - h) / (2 * s)])
    }

    function Wi(t, i) {
        i.add(t[6], t[7]);
        var n = Ui(t[0], t[2], t[4], t[6]);
        if (n) for (var e = 0; e < n[qh]; e++) {
            var s = n[e];
            if (!(0 >= s || s >= 1)) {
                var h = Yi(s, t);
                i.add(h.x, h.y)
            }
        }
        if (n = Ui(t[1], t[3], t[5], t[7])) for (var e = 0; e < n.length; e++) {
            var s = n[e];
            if (!(0 >= s || s >= 1)) {
                var h = Yi(s, t);
                i.add(h.x, h.y)
            }
        }
    }

    function Xi(t) {
        var i = {x: t[0], y: t[1]}, n = {x: t[2], y: t[3]}, e = {x: t[4], y: t[5]}, s = {
                x: t[6],
                y: t[7]
            }, h = i.x - 0, r = i.y - 0, a = n.x - 0, o = n.y - 0, f = e.x - 0, u = e.y - 0, c = s.x - 0, _ = s.y - 0,
            d = 3 * (-h + 3 * a - 3 * f + c), l = 6 * (h - 2 * a + f), v = 3 * (-h + a),
            b = 3 * (-r + 3 * o - 3 * u + _), g = 6 * (r - 2 * o + u), y = 3 * (-r + o), m = function (t) {
                var i = d * t * t + l * t + v, n = b * t * t + g * t + y;
                return Math.sqrt(i * i + n * n)
            }, x = (m(0) + 4 * m(.5) + m(1)) / 6;
        return x
    }

    function Vi(t, i) {
        function n(t, i, n, e) {
            var s = -t + 3 * i - 3 * n + e, h = 2 * t - 4 * i + 2 * n, r = i - t;
            return function (t) {
                return 3 * (s * t * t + h * t + r)
            }
        }

        function e(t, i) {
            var n = s(t), e = h(t);
            return Math.sqrt(n * n + e * e) * i
        }

        var s = n(t[0], t[2], t[4], t[6]), h = n(t[1], t[3], t[5], t[7]);
        i = i || 100;
        var r = 1 / i;
        return function (t) {
            if (!t) return 0;
            for (var i, n = 0, s = 0; ;) {
                if (i = n + r, i >= t) return s += e(n, i - n);
                s += e(n, r), n = i
            }
        }
    }

    function Zi(t, i, n) {
        return pz(i, n, t.cx, t.cy) <= t[uo] + Ez
    }

    function Ki(t, i, n, e) {
        return n = n || Ji(t, i), new Qi((t.x + i.x) / 2, (t.y + i.y) / 2, n / 2, t, i, null, e)
    }

    function Ji(t, i) {
        return hq(t.x, t.y, i.x, i.y)
    }

    function Qi(t, i, n, e, s, h, r) {
        this.cx = t, this.cy = i, this.r = n, this[uo] = n * n, this.p1 = e, this.p2 = s, this.p3 = h, this[co] = r
    }

    function tn(t, i, n, e) {
        this.cx = t, this.cy = i, this[Pa] = n, this[Ra] = e
    }

    function nn(t) {
        var i = t[0], n = t[1], e = t[2], s = Qi._j3Circle(i, n, e);
        return sn(t, i, n, e, s)
    }

    function en(t, i) {
        i = i || hn(t);
        for (var n, e = i.width / i[Ra], s = [], h = t[qh], r = 0; h > r; r++)n = t[r], s[Kh]({x: n.x, y: n.y * e});
        var a = nn(s);
        return a ? new tn(a.cx, a.cy / e, 2 * a.r, 2 * a.r / e) : void 0
    }

    function sn(t, i, n, e, s) {
        for (var h, r, a = t[qh], o = s._squareR, f = 0; a > f; f++)if (h = t[f], h != i && h != n && h != e) {
            var u = pz(s.cx, s.cy, h.x, h.y);
            u - Ez > o && (o = u, r = h)
        }
        if (!r) return s;
        var c, _ = Qi[_o](r, i, n), d = Qi._j3Circle(r, i, e), l = Qi._j3Circle(r, e, n);
        return Zi(_, e.x, e.y) && (c = _), Zi(d, n.x, n.y) && (!c || c.r > d.r) && (c = d), Zi(l, i.x, i.y) && (!c || c.r > l.r) && (c = l), i = c.p1, n = c.p2, e = c.p3 || c[co], sn(t, i, n, e, c)
    }

    function hn(t) {
        for (var i, n = t[qh], e = new oq, s = 0; n > s; s++)i = t[s], e.add(i.x, i.y);
        return e
    }

    function rn(t, i, n, e, s) {
        this._6c && this.validate();
        var h = s ? this[lo](s) : this.bounds, r = n / h[Pa], a = t - r * h.x, o = e / h[Ra], f = i - o * h.y,
            u = this._gd, c = [];
        return l(u, function (t) {
            var i = t[Zh](), n = i.points;
            if (n && n[qh]) {
                for (var e = n.length, s = [], h = 0; e > h; h++) {
                    var u = n[h];
                    h++;
                    var _ = n[h];
                    u = r * u + a, _ = o * _ + f, s.push(u), s[Kh](_)
                }
                i[vo] = s
            }
            c[Kh](i)
        }, this), new Qz(c)
    }

    function an(t, i, n, e, s, h) {
        if (s = s || 0, n = n || 0, !s && !h) return !1;
        if (!e) {
            var r = this[lo](s);
            if (!r[bo](t, i, n)) return !1
        }
        var a = Math[go](2 * n) || 1, o = Pi(a, a), f = (o.canvas, -t + n), u = -i + n;
        if (o[yo](1, 0, 0, 1, f, u), !o.isPointInStroke) {
            this._l3(o), s && o.stroke(), h && o.fill();
            var c = Bi(o, 0, 0, a, a);
            if (!c) return !1;
            c = c[mo];
            for (var _ = c[qh] / 4; _ > 0;) {
                if (c[4 * _ - 1] > Jz) return !0;
                --_
            }
            return !1
        }
        return o[xo] = (s || 0) + 2 * n, this._l3(o), s && o[po](n, n) ? !0 : h ? o[Eo](n, n) : !1
    }

    function on(t, i, n) {
        if (!this._in) return null;
        var e = this._gd;
        if (e.length < 2) return null;
        n === !1 && (t += this._in);
        var s = e[0];
        if (0 >= t) return Fs(s[vo][0], s.points[1], e[1][vo][0], e[1][vo][1], t, i);
        if (t >= this._in) {
            s = e[e[qh] - 1];
            var h, r, a = s[vo], o = a[qh], f = a[o - 2], u = a[o - 1];
            if (o >= 4) h = a[o - 4], r = a[o - 3]; else {
                s = e[e[qh] - 2];
                var c = s[wo];
                h = c.x, r = c.y
            }
            return Fs(f, u, f + f - h, u + u - r, t - this._in, i)
        }
        for (var _, d = 0, l = 1, o = e[qh]; o > l; l++)if (_ = e[l], _._in) {
            if (!(d + _._in < t)) {
                var v, c = s.lastPoint;
                if (_.type == Vz) {
                    var b = _.points;
                    v = fn(t - d, _, c.x, c.y, b[0], b[1], b[2], b[3], _._r)
                } else {
                    if (!_._lf) return Fs(c.x, c.y, _.points[0], _.points[1], t - d, i);
                    var g = $i(_._lf, _._in)(t - d), b = _[vo];
                    v = _[To] == Xz && 6 == b.length ? Yi(g, [c.x, c.y][Wh](b), !0) : Fi(g, [c.x, c.y][Wh](b), !0)
                }
                return i && (v.x -= i * Math.sin(v.rotate || 0), v.y += i * Math.cos(v[Mo] || 0)), v
            }
            d += _._in, s = _
        } else s = _
    }

    function fn(t, i, n, e, s, h, r, a) {
        if (t <= i._l1) return Fs(n, e, s, h, t, t);
        if (t >= i._in) return t -= i._in, Fs(i._p2x, i[ko], r, a, t, t);
        if (t -= i._l1, i._o) {
            var o = t / i._r;
            i[Oo] && (o = -o);
            var f = ki(i[So], i[Io], o, i._o.x, i._o.y);
            return f.rotate += i[Ao] || 0, f[Mo] += Math.PI, f
        }
        return Fs(i[So], i[Io], i[Co], i[ko], t, t)
    }

    function ei(t, i, n) {
        var e, s, h;
        0 == t._mq ? (e = -1, h = 0, s = i) : 0 == t._mu ? (e = 0, h = 1, s = n) : (e = -1 / t._mq, s = (t._mq - e) * i + t._ms, h = 1);
        var r = new rq;
        return r._mq = e, r._ms = s, r._mu = h, r._mn = i, r._ml = n, r
    }

    function un(t) {
        return t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI), t
    }

    function cn(t, i, n, e, s, h, r, a) {
        var o = hq(i, n, e, s), f = hq(e, s, h, r);
        if (!o || !f) return t._d = 0, t._r = 0, t._l1 = o, t._l2 = f, t._in = 0;
        var u = dn(e, s, i, n), c = dn(e, s, h, r);
        t[Ao] = u, t._mq2 = c;
        var _ = u - c;
        _ = un(_), _ > Math.PI && (_ = 2 * Math.PI - _, t[Oo] = !0);
        var d = Math.PI - _, l = Math.tan(_ / 2), v = a / l, b = Math.min(o, f);
        v > b && (v = b, a = l * v);
        var g, y = e + Math.cos(u) * v, m = s + Math.sin(u) * v, x = e + Math.cos(c) * v, p = s + Math.sin(c) * v,
            E = new rq(i, n, e, s), w = new rq(e, s, h, r), T = ei(E, y, m), M = ei(w, x, p), k = T._40(M),
            O = Math[qr](m - k.y, y - k.x), S = Math.atan2(p - k.y, x - k.x);
        g = t[Oo] ? S : O;
        for (var I, A = 0; 4 > A;) {
            var C = A * nq;
            if (un(C - g) <= d) {
                var L, P;
                if (I ? I++ : I = 1, 0 == A ? (L = k.x + a, P = k.y) : 1 == A ? (L = k.x, P = k.y + a) : 2 == A ? (L = k.x - a, P = k.y) : (L = k.x, P = k.y - a), t[Lo + I] = {
                        x: L,
                        y: P
                    }, 2 == I) break
            }
            A++
        }
        return t[So] = y, t[Io] = m, t[Co] = x, t[ko] = p, t._o = k, t._d = v, t._r = a, t._l1 = o - v, t._l2 = f - v, t._in = t._l1 + d * a
    }

    function _n(t, i, n, e, s, h, r) {
        var a = dn(n, e, t, i), o = dn(n, e, s, h), f = a - o;
        return r ? f : (0 > f && (f = -f), f > Math.PI && (f -= Math.PI), f)
    }

    function dn(t, i, n, e) {
        return Math[qr](e - i, n - t)
    }

    function ln(t) {
        var i = Tz.exec(t);
        if (i) return i[1];
        var n = t.lastIndexOf(jr);
        return n >= 0 && n < t[qh] - 1 ? t[ea](n + 1) : void 0
    }

    function vn(t) {
        if (!t) return null;
        if (t instanceof Qz) return Cz;
        if (t[Po] instanceof Function) return Az;
        if (B(t)) {
            var i = ln(t);
            if (i) {
                if (!FG && Mz.test(i)) return Iz;
                if (kz[Ro](i)) return Sz
            }
            return Oz
        }
    }

    function bn(t, i, n) {
        if (this._l1 = vn(t), !this._l1) throw new Error("the image format is not supported", t);
        this._lr = t, this[Do] = i, this[No] = n, this[Pa] = i || tq.IMAGE_WIDTH, this[Ra] = n || tq[Bo], this._iz = {}
    }

    function gn(t, i, n, e) {
        return i ? (Dz[t] = new bn(i, n, e), t) : void delete Dz[t]
    }

    function yn(t) {
        if (t._kf) return t._kf;
        var i = B(t);
        if (!i && !t[jo]) return t._kf = new bn(t);
        var n = t[jo] || t;
        return n in Dz ? Dz[n] : Dz[n] = new bn(t)
    }

    function mn(t) {
        return t in Dz
    }

    function xn(t, i, n) {
        n = n || {};
        var e = t[lo](n[xo]);
        if (!e[Pa] || !e[Ra]) return !1;
        var s = i.getContext(Wa), h = i[Ba] || 1, r = n.scaleMode || $o, a = /full/i[Ro](r), o = /uniform/i[Ro](r),
            f = 1, u = 1;
        if (a) {
            var c = i.width, _ = i[Ra], d = n[Fo], l = 0, v = 0;
            if (d) {
                var b, g, y, m;
                N(d) ? b = g = y = m = d : (b = d.top || 0, g = d[Hr] || 0, y = d[Go] || 0, m = d[Yr] || 0), c -= y + m, _ -= b + g, l += y, v += b
            }
            f = c / e[Pa], u = _ / e.height, o && (f > u ? (l += (c - u * e.width) / 2, f = u) : u > f && (v += (_ - f * e.height) / 2, u = f)), (l || v) && s.translate(l, v)
        }
        s[Qa](-e.x * f, -e.y * u), t[Po](s, h, n, f, u, !0)
    }

    function pn(t, i, n) {
        var e = yn(t);
        return e ? (e[qo](), (e._l1 == Iz || e._79()) && e[zo](function (t) {
            t[Ho] && (this[Pa] = this[Pa], xn(t.source, this, n))
        }, i), void xn(e, i, n)) : (vz.error(Yo + t), !1)
    }

    function En(t, i, e, s) {
        var h = t[qh];
        if (h && !(0 > h)) {
            s = s || 1;
            for (var r, a, o, f = [], u = 0; u++ < h;)if (r = t.getLocation(u, 0), r && hq(i, e, r.x, r.y) <= s) {
                a = u, o = r[Mo];
                break
            }
            if (a !== n) {
                for (var r, c, _, d = 0, u = 0, l = t._gd[qh]; l > u; u++) {
                    if (r = t._gd[u], !c && (d += r._in || 0, d > a)) if (c = !0, r.type == Uz || r[To] == Zz) f[Kh](new Kz(Uz, [i, e])); else {
                        var v = Math.max(10, r._in / 6), b = v * Math.sin(o), g = v * Math.cos(o);
                        if (r[To] == Xz) {
                            var y = r.points[0], m = r[vo][1];
                            if (_) {
                                var x = new rq(i, e, i + g, e + b),
                                    p = x._40(new rq(_[wo].x, _.lastPoint.y, r.points[0], r[vo][1]));
                                p.x !== n && (y = p.x, m = p.y)
                            }
                            f[Kh](new Kz(Xz, [y, m, i - g, e - b, i, e]))
                        } else f.push(new Kz(Wz, [i - g, e - b, i, e]));
                        if (r[vo]) if (r.type == Xz) {
                            r[vo][0] = i + g, r[vo][1] = e + b;
                            var x = new rq(i, e, i + g, e + b),
                                p = x._40(new rq(r.points[2], r[vo][3], r[vo][4], r.points[5]));
                            p.x !== n && (r[vo][2] = p.x, r[vo][3] = p.y)
                        } else if (r[To] == Wz) {
                            r[To] = Xz, r[vo] = [i + g, e + b][Wh](r[vo]);
                            var x = new rq(i, e, i + g, e + b),
                                p = x._40(new rq(r[vo][2], r.points[3], r[vo][4], r.points[5]));
                            p.x !== n && (r[vo][2] = p.x, r.points[3] = p.y)
                        } else r[To] == Uz && (r[To] = Wz, r[vo] = [i + g, e + b].concat(r[vo]), u == l - 1 && (r.invalidTerminal = !0))
                    }
                    f[Kh](r), _ = r
                }
                return f
            }
        }
    }

    function wn(t) {
        var i = t[Pa], n = t[Ra], e = Bi(t.g, 0, 0, i, n);
        return e ? Mn(e[mo], i, n) : void 0
    }

    function Tn(t, i, n) {
        this._13(t, i, n)
    }

    function Mn(t, i, n) {
        return new Tn(t, i, n)
    }

    function kn(t) {
        if (Pr == t[0]) {
            if (t = t.substring(1), 3 == t[qh]) t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]; else if (6 != t[qh]) return;
            return t = parseInt(t, 16), [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }
        if (/^rgb/i[Ro](t)) {
            var i = t[Jh](Uo), n = t[Jh](Lr);
            if (0 > i || i > n) return;
            if (t = t.substring(i + 1, n), t = t[gr](Ar), t[qh] < 3) return;
            var e = parseInt(t[0]), s = parseInt(t[1]), h = parseInt(t[2]), r = 3 == t.length ? 255 : parseInt(t[3]);
            return [e, s, h, r]
        }
    }

    function On(t, i, n) {
        return n || (n = tq[Wo]), n == bz[Xo] ? t * i : n == bz[Vo] ? Math.min(t, i) : n == bz.BLEND_MODE_COLOR_BURN ? 1 - (1 - i) / t : n == bz[Zo] ? t + i - 1 : n == bz[Ko] ? Math.max(t, i) : n == bz[Jo] ? t + i - t * i : i
    }

    function Sn(t, i, n) {
        var e = kn(i);
        if (!e) return void vz[Qo](tf + i + nf);
        var s = Bi(t.g, 0, 0, t[Pa], t[Ra]);
        if (s) {
            var h = s.data;
            if (n instanceof Function) h = n(t, h, e) || h; else {
                var r = e[0] / 255, a = e[1] / 255, o = e[2] / 255;
                if (n == bz[ef]) for (var f = 0, u = h.length; u > f; f += 4) {
                    var c = 77 * h[f] + 151 * h[f + 1] + 28 * h[f + 2] >> 8;
                    h[f] = c * r | 0, h[f + 1] = c * a | 0, h[f + 2] = c * o | 0
                } else for (var f = 0,
                                u = h.length; u > f; f += 4)h[f] = 255 * On(r, h[f] / 255, n) | 0, h[f + 1] = 255 * On(a, h[f + 1] / 255, n) | 0, h[f + 2] = 255 * On(o, h[f + 2] / 255, n) | 0
            }
            var t = Li(t.width, t[Ra]);
            return t.g[sf](s, 0, 0), t
        }
    }

    function In(t, i, n, e) {
        return 1 > n && (n = 1), An(t - n, i - n, 2 * n, 2 * n, e)
    }

    function An(t, i, n, e, s) {
        n = Math[go](n) || 1, e = Math[go](e) || 1;
        var h = Pi(n, e);
        h[yo](1, 0, 0, 1, -t, -i), s[Po](h);
        var r = Bi(h, 0, 0, n, e);
        if (!r) return !1;
        r = r[mo];
        for (var a = r.length / 4; a-- > 0;)if (r[4 * a - 1] > Jz) return !0;
        return !1
    }

    function Cn(t, i, n, e, s, h) {
        t -= s.$x, i -= s.$y;
        var r = s._ft.intersection(t, i, n, e);
        if (!r) return !1;
        t = r.x * h, i = r.y * h, n = r[Pa] * h, e = r[Ra] * h, n = Math.round(n) || 1, e = Math.round(e) || 1;
        var a = Pi(), o = a[Ya];
        o.width < n || o.height < e ? (o.width = n, o[Ra] = e) : (a[yo](1, 0, 0, 1, 0, 0), a[hf](0, 0, n, e)), a.setTransform(1, 0, 0, 1, -t - s.$x * h, -i - s.$y * h), a[rf](h, h), s._ja(a, 1);
        var f = Bi(a, 0, 0, n, e);
        if (!f) return !1;
        f = f[mo];
        for (var u = f[qh] / 4; u-- > 0;)if (f[4 * u - 1] > Jz) return !0;
        return !1
    }

    function Ln(t, i, n, e, s, h, r, a, o) {
        if (ri(t, i, n, e, a, o)) return null;
        var f, u, c, _ = new Kz(Uz, [t + n - s, i]), d = new Kz(Wz, [t + n, i, t + n, i + h]),
            l = new Kz(Uz, [t + n, i + e - h]), v = new Kz(Wz, [t + n, i + e, t + n - s, i + e]),
            b = new Kz(Uz, [t + s, i + e]), g = new Kz(Wz, [t, i + e, t, i + e - h]), y = new Kz(Uz, [t, i + h]),
            m = new Kz(Wz, [t, i, t + s, i]), x = (new Kz(Zz), [_, d, l, v, b, g, y, m]),
            p = new oq(t + s, i + h, n - s - s, e - h - h);
        t > a ? (f = cq, c = 5) : a > t + n ? (f = dq, c = 1) : (f = _q, c = 0), i > o ? (u = lq, f == cq && (c = 7)) : o > i + e ? (u = bq, f == dq ? c = 3 : f == _q && (c = 4)) : (u = vq, f == cq ? c = 6 : f == dq && (c = 2));
        var E = jn(c, t, i, n, e, s, h, r, a, o, p), w = E[0], T = E[1], M = new Qz, k = M._gd;
        k[Kh](new Kz(Yz, [w.x, w.y])), k[Kh](new Kz(Uz, [a, o])), k[Kh](new Kz(Uz, [T.x, T.y])), T._ls && (k[Kh](T._ls), T[af]++);
        for (var O = T[af] % 8, S = w[af]; k.push(x[O]), ++O, O %= 8, O != S;);
        return w._ls && k[Kh](w._ls), M.closePath(), M
    }

    function Pn(t, i, e, s, h, r, a, o, f, u, c, _, d, l) {
        var v = new rq(_, d, e, s), b = new rq(i[0], i[1], i[4], i[5]), g = b._40(v, c), y = g[0], m = g[1];
        if (y._rest !== n) {
            y[af] = (t - 1) % 8, m[af] = (t + 1) % 8;
            var x = y._rest;
            7 == t ? (y.y = r + u + Math.min(l[Ra], x), m.x = h + f + Math.min(l[Pa], x)) : 5 == t ? (y.x = h + f + Math.min(l.width, x), m.y = r + o - u - Math.min(l.height, x)) : 3 == t ? (y.y = r + o - u - Math.min(l[Ra], x), m.x = h + a - f - Math.min(l.width, x)) : 1 == t && (y.x = h + a - f - Math.min(l[Pa], x), m.y = r + u + Math.min(l.height, x))
        } else {
            v._m6(v._mn, v._ml, y.x, y.y), y = v._$d(i), v._m6(v._mn, v._ml, m.x, m.y), m = v._$d(i);
            var p = $n(i, [y, m]), E = p[0], w = p[2];
            y[af] = t, m[af] = t, y._ls = new Kz(Wz, E[Yh](2)), m._ls = new Kz(Wz, w.slice(2))
        }
        return [y, m]
    }

    function Rn(t, i, n, e, s, h, r, a, o, f) {
        var u, c;
        if (o - a >= i + h) u = {y: n, x: o - a}, u._lsNO = 0; else {
            u = {y: n + r, x: Math.max(i, o - a)};
            var _ = [i, n + r, i, n, i + h, n], d = new rq(o, f, u.x, u.y);
            if (u = d._$d(_)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = $n(_, [u]);
                l = l[0], l && (u._ls = new Kz(Wz, l.slice(2))), u[af] = 7
            } else u = {y: n, x: i + h}, u[af] = 0
        }
        if (i + e - h >= o + a) c = {y: n, x: o + a}, c[af] = 0; else {
            c = {y: n + r, x: Math.min(i + e, o + a)};
            var v = [i + e - h, n, i + e, n, i + e, n + r], d = new rq(o, f, c.x, c.y);
            if (c = d._$d(v)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = $n(v, [c]);
                l && l[l[qh] - 1] && (c._ls = new Kz(Wz, l[l[qh] - 1][Yh](2))), c._lsNO = 1
            } else c = {y: n, x: i + e - h}, c[af] = 0
        }
        return [u, c]
    }

    function Dn(t, i, n, e, s, h, r, a, o, f) {
        var u, c;
        if (f - a >= n + r) u = {x: i + e, y: f - a}, u[af] = 2; else {
            u = {x: i + e - h, y: Math.max(n, f - a)};
            var _ = [i + e - h, n, i + e, n, i + e, n + r], d = new rq(o, f, u.x, u.y);
            if (u = d._$d(_)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = $n(_, [u]);
                l = l[0], l && (u._ls = new Kz(Wz, l[Yh](2))), u[af] = 1
            } else u = {x: i + e, y: n + r}, u[af] = 2
        }
        if (n + s - r >= f + a) c = {x: i + e, y: f + a}, c[af] = 2; else {
            c = {x: i + e - h, y: Math.min(n + s, f + a)};
            var v = [i + e, n + s - r, i + e, n + s, i + e - h, n + s], d = new rq(o, f, c.x, c.y);
            if (c = d._$d(v)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = $n(v, [c]);
                l[1] && (c._ls = new Kz(Wz, l[1][Yh](2))), c[af] = 3
            } else c = {x: i + e, y: n + s - r}, c._lsNO = 2
        }
        return [u, c]
    }

    function Nn(t, i, n, e, s, h, r, a, o, f) {
        var u, c;
        if (o - a >= i + h) c = {y: n + s, x: o - a}, c[af] = 4; else {
            c = {y: n + s - r, x: Math.max(i, o - a)};
            var _ = [i + h, n + s, i, n + s, i, n + s - r], d = new rq(o, f, c.x, c.y);
            if (c = d._$d(_)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = $n(_, [c]);
                l = l[l[qh] - 1], l && (c._ls = new Kz(Wz, l[Yh](2))), c._lsNO = 5
            } else c = {y: n + s, x: i + h}, c[af] = 4
        }
        if (i + e - h >= o + a) u = {y: n + s, x: o + a}, u._lsNO = 4; else {
            u = {y: n + s - r, x: Math.min(i + e, o + a)};
            var v = [i + e, n + s - r, i + e, n + s, i + e - h, n + s], d = new rq(o, f, u.x, u.y);
            if (u = d._$d(v)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = $n(v, [u]);
                l[0] && (u._ls = new Kz(Wz, l[0][Yh](2))), u[af] = 3
            } else u = {y: n + s, x: i + e - h}, u[af] = 4
        }
        return [u, c]
    }

    function Bn(t, i, n, e, s, h, r, a, o, f) {
        var u, c;
        if (f - a >= n + r) c = {x: i, y: f - a}, c[af] = 6; else {
            c = {x: i + h, y: Math.max(n, f - a)};
            var _ = [i, n + r, i, n, i + h, n], d = new rq(o, f, c.x, c.y);
            if (c = d._$d(_)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = $n(_, [c]);
                l = l[l[qh] - 1], l && (c._ls = new Kz(Wz, l.slice(2)))
            } else c = {x: i, y: n + r};
            c[af] = 7
        }
        if (n + s - r >= f + a) u = {x: i, y: f + a}, u[af] = 6; else {
            u = {x: i + h, y: Math.min(n + s, f + a)};
            var v = [i + h, n + s, i, n + s, i, n + s - r], d = new rq(o, f, u.x, u.y);
            if (u = d._$d(v)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = $n(v, [u]);
                l[0] && (u._ls = new Kz(Wz, l[0].slice(2))), u[af] = 5
            } else u = {x: i, y: n + s - r}, u[af] = 6
        }
        return [u, c]
    }

    function jn(t, i, n, e, s, h, r, a, o, f, u) {
        var c = a / 2;
        switch (t) {
            case 7:
                var _ = [i, n + r, i, n, i + h, n], d = i + h, l = n + r;
                return Pn(t, _, d, l, i, n, e, s, h, r, a, o, f, u);
            case 5:
                return _ = [i + h, n + s, i, n + s, i, n + s - r], d = i + h, l = n + s - r, Pn(t, _, d, l, i, n, e, s, h, r, a, o, f, u);
            case 3:
                return _ = [i + e, n + s - r, i + e, n + s, i + e - h, n + s], d = i + e - h, l = n + s - r, Pn(t, _, d, l, i, n, e, s, h, r, a, o, f, u);
            case 1:
                return _ = [i + e - h, n, i + e, n, i + e, n + r], d = i + e - h, l = n + r, Pn(t, _, d, l, i, n, e, s, h, r, a, o, f, u);
            case 0:
                return Rn(t, i, n, e, s, h, r, c, o, f, u);
            case 2:
                return Dn(t, i, n, e, s, h, r, c, o, f, u);
            case 4:
                return Nn(t, i, n, e, s, h, r, c, o, f, u);
            case 6:
                return Bn(t, i, n, e, s, h, r, c, o, f, u)
        }
    }

    function $n(t, i) {
        for (var e, s, h, r, a, o, f = t[0], u = t[1], c = t[2], _ = t[3], d = t[4], l = t[5], v = [],
                 b = 0; b < i.length; b++)a = i[b], o = a.t, 0 != o && 1 != o ? (e = f + (c - f) * o, s = u + (_ - u) * o, h = c + (d - c) * o, r = _ + (l - _) * o, v[Kh]([f, u, e, s, a.x, a.y]), f = a.x, u = a.y, c = h, _ = r) : v[Kh](null);
        return h !== n && v.push([a.x, a.y, h, r, d, l]), v
    }

    function Fn(t) {
        return this.$layoutByAnchorPoint && this[of] && (t.x -= this._mqe.x, t.y -= this._mqe.y), this[ff] && Oi(t, this[ff]), t.x += this.$offsetX || 0, t.y += this[uf] || 0, this[cf] && this.$_hostRotate ? Oi(t, this.$_hostRotate) : t
    }

    function Gn(t) {
        return this[cf] && this[_f] && Oi(t, -this.$_hostRotate), t.x -= this.$offsetX || 0, t.y -= this.$offsetY || 0, this.$rotate && Oi(t, -this.$rotate), this[df] && this[of] && (t.x += this._mqe.x, t.y += this[of].y), t
    }

    function qn() {
        var t = this[lf];
        this[lf] && (this[lf] = !1, this[vf] = !0, this._8d[bf](this._iv), this.$padding && this._8d.grow(this[gf]), this[yf] && this._8d.grow(this[yf]));
        var i = this._$v();
        if (i) var n = this[mf] && this[xf];
        return this[vf] && this[df] && (this[vf] = !1, n && (t = !0), this[of] = fi(this[pf], this._8d.width, this._8d[Ra]), this[of].x += this._8d.x, this[of].y += this._8d.y), i ? (t && (this[Ef] = !0, zn.call(this, n)), this[Ef] && (this._msackgroundGradientInvalidateFlag = !1, this[wf] = this[Tf] && this[Mf] && this._laShape[kf] ? Nz.prototype.generatorGradient[Hh](this[Tf], this._laShape[kf]) : null), t) : (this[Of] = !1, t)
    }

    function zn(t) {
        var i = this._8d.x + this[yf] / 2, n = this._8d.y + this[yf] / 2, e = this._8d[Pa] - this[yf],
            s = this._8d[Ra] - this.$border, h = 0, r = 0;
        if (this[Sf] && (N(this[Sf]) ? h = r = this[Sf] : (h = this.$borderRadius.x || 0, r = this[Sf].y || 0), h = Math.min(h, e / 2), r = Math.min(r, s / 2)), t && (this[If] = this[of].x - this[Af] + this[Cf], this[Lf] = this._mqe.y - this.$offsetY + this[Pf], !this._8d[bo](this[If], this._pointerY))) {
            var a = new iH(i, n, e, s, h, r, this[xf], this[If], this[Lf]);
            return this._laShape = a._ls, this._laShape[kf].set(i, n, e, s), void (this.__m3Pointer = !0)
        }
        this[Mf] && this[Mf][Da](), this[Mf] = MY.getRect(i, n, e, s, h, r, this[Mf]), this[Mf][kf].set(i, n, e, s)
    }

    function Hn(t, i, n, e) {
        return e && (t.width < 0 || t[Ra] < 0) ? (t.x = i, t.y = n, void (t[Pa] = t[Ra] = 0)) : (i < t.x ? (t[Pa] += t.x - i, t.x = i) : i > t.x + t[Pa] && (t[Pa] = i - t.x), void (n < t.y ? (t.height += t.y - n, t.y = n) : n > t.y + t[Ra] && (t[Ra] = n - t.y)))
    }

    function Yn(t, i, e) {
        var s, h = t.position, r = t[Rf] === n ? this[Rf] : t[Rf];
        return this.$data instanceof Qz && r ? (s = wz._ms6(h, this[Df], this.lineWidth, i, e), s.x *= this._j8, s.y *= this._j5) : (s = fi(h, this._8d[Pa], this._8d[Ra]), s.x += this._8d.x, s.y += this._8d.y), Fn[Hh](this, s)
    }

    function Un(t, i) {
        if (i) if (i._8d[Nf]()) t.$x = i.$x, t.$y = i.$y; else {
            var n = Yn[Hh](i, t);
            t.$x = n.x, t.$y = n.y, t[Bf] = n[Mo]
        } else t.$x = 0, t.$y = 0;
        t[jf] && sH.call(t)
    }

    function Wn(t) {
        if (t[$f] === n) {
            var i, e;
            if (t.setLineDash) i = t.getLineDash, e = t[Ff]; else {
                var s;
                if (t[Gf] !== n) s = Gf; else {
                    if (t[qf] === n) return !1;
                    s = qf
                }
                e = function (t) {
                    this[s] = t
                }, i = function () {
                    return this[s]
                }
            }
            Z(t, $f, {
                get: function () {
                    return i[Hh](this)
                }, set: function (t) {
                    e[Hh](this, t)
                }
            })
        }
        if (t.lineDashOffset === n) {
            var h;
            if (t[zf] !== n) h = zf; else {
                if (t[Hf] === n) return;
                h = Hf
            }
            Z(t, Yf, {
                get: function () {
                    return this[h]
                }, set: function (t) {
                    this[h] = t
                }
            })
        }
    }

    function Xn(t, i, n, e, s) {
        var h, r, a, o, f, u, c, _, d = function (t) {
            return function (i) {
                t(i)
            }
        }, l = function () {
            r = null, a = null, o = f, f = null, u = null
        }, v = function (t) {
            h = t, c || (c = Li()), c[Pa] = h[Pa], c[Ra] = h.height, i.width = h[Pa], i.height = h[Ra]
        }, b = function (t) {
            g(), l(), r = t[Uf] ? t[Wf] : null, a = 10 * t[Xf], f = t[Vf]
        }, g = function () {
            if (u) {
                var t = u.getImageData(0, 0, h.width, h.height), n = {
                    data: t,
                    _pixels: Mn(t.data, h[Pa], h[Ra]),
                    delay: a
                };
                s[Hh](i, n)
            }
        }, y = function (t) {
            u || (u = c[Ua](Wa));
            var i = t.lctFlag ? t.lct : h.gct, n = u.getImageData(t.leftPos, t[Zf], t[Pa], t[Ra]);
            t.pixels[Kf](function (t, e) {
                r !== t ? (n.data[4 * e + 0] = i[t][0], n[mo][4 * e + 1] = i[t][1], n[mo][4 * e + 2] = i[t][2], n[mo][4 * e + 3] = 255) : (2 === o || 3 === o) && (n[mo][4 * e + 3] = 0)
            }), u.clearRect(0, 0, h[Pa], h[Ra]), u[sf](n, t[Jf], t[Zf])
        }, m = function () {
        }, x = {
            hdr: d(v), gce: d(b), com: d(m), app: {NETSCAPE: d(m)}, img: d(y, !0), eof: function () {
                g(), n[Hh](i)
            }
        }, p = new XMLHttpRequest;
        FG || p[Qf]("text/plain; charset=x-user-defined"), p[tu] = function () {
            _ = new fH(p[iu]);
            try {
                cH(_, x)
            } catch (t) {
                e[Hh](i, nu)
            }
        }, p[eu] = function () {
            e.call(i, su)
        }, p[ka](Oa, t, !0), p[La]()
    }

    function Vn(t) {
        var i = [51, 10, 10, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 109, 97, 112, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 50, 46, 48, 10, 49, 52, 51, 49, 51, 51, 55, 51, 51, 55, 50, 49, 56, 10, 10, 48, 10];
        return i[Kf](function (n, e) {
            i[e] = t(n)
        }), i[hu]("")
    }

    function Zn(t, i) {
        try {
            if (null == t || t[qh] < 8) return;
            if (null == i || i[qh] <= 0) return;
            for (var n = "", e = 0; e < i[qh]; e++)n += i[ru](e).toString();
            var s = Math[Or](n.length / 5),
                h = parseInt(n[au](s) + n[au](2 * s) + n.charAt(3 * s) + n.charAt(4 * s) + n.charAt(5 * s), 10),
                r = Math[go](i[qh] / 2), a = Math.pow(2, 31) - 1, o = parseInt(t.substring(t.length - 8, t[qh]), 16);
            for (t = t[ea](0, t.length - 8), n += o; n[qh] > 10;)n = (parseInt(n[ea](0, 10), 10) + parseInt(n[ea](10, n.length), 10)).toString();
            n = (h * n + r) % a;
            for (var f = "", u = "",
                     e = 0; e < t[qh]; e += 2)f = parseInt(parseInt(t[ea](e, e + 2), 16) ^ Math.floor(n / a * 255), 10), u += String.fromCharCode(f), n = (h * n + r) % a;
            return 0 | u[0] ? qH = gH[ou + xH + fu](u) : null
        } catch (c) {
        }
    }

    function Kn() {
        var t = dH;
        if (!t) return void (XH = !0);
        GH = t;
        var i;
        t = t.split(Ar);
        for (var n = 0; n < t[qh] && (i = Zn(t[n], vH), !(i && i.split(so).length >= 8));)1 == t[qh] && (i = Zn(t[n], uu)), n++;
        if (!i || i[gr](so).length < 8) return YH = !0, "" === vH || vH == cu + TH + _u + MH + du || vH == lu + wH + vu ? (UH = JH, XH = !1, ZH = !1, void (FH = !1)) : (UH = JH, void (XH = !0));
        FH = i[gr](so);
        var e = FH[3];
        if (e != nW) return YH = !0, void (ZH = !0);
        XH = !1, ZH = !1;
        var s = FH[0];
        (bu == s || gu == s) && (YH = !1);
        var h = FH[5];
        WH = h;
        var r = FH[6];
        UH = r
    }

    function Jn() {
        var t = GH;
        if (t) {
            var i;
            t = t[gr](Ar);
            for (var n = 0; n < t[qh] && (i = QH(t[n], vH), !(i && i.split(so).length >= 8));)1 == t[qh] && (i = QH(t[n], uu)), n++;
            if (i.split(so)[qh] >= 8) return void (VH = !1)
        }
        return vH && vH != cu + TH + _u + MH + du && vH != lu + wH + vu ? void (VH = !0) : void (VH = !1)
    }

    function Qn() {
        if (YH) {
            var t = oh[AH + To]._ja, i = HH;
            oh[AH + To]._ja = function () {
                t.apply(this, arguments), i[Hh](this[yu], this.g)
            };
            var n = dY[AH + To]._h5;
            dY[AH + To]._h5 = function (t) {
                n[nr](this, arguments), i[Hh](this, t)
            }
        }
    }

    function te() {
        if (WH !== !0 && WH) {
            var t = WH[gr](jr);
            if (3 != t[qh]) return void (OY.prototype._ja = null);
            var i = parseInt(t[0], 10), n = parseInt(t[1], 10), e = parseInt(t[2], 10), s = 3,
                h = (365.2425 * (i - 2e3 + 10 * s) + (n - 1) * s * 10 + e) * s * 8 * s * 1200 * 1e3;
            lH > h && (OY[tr]._ja = null)
        }
    }

    function ie() {
        var t = 0 | UH;
        t && (iq[AH + To]._jy = function (i, e) {
            var s = i.id;
            return s === n || this.containsById(s) ? !1 : this._is[qh] > t ? !1 : (y(this._is, i, e), this._l5[s] = i, i)
        })
    }

    function ne() {
        XH && (iq[AH + To]._jy = iq[AH + To]._fm)
    }

    function ee() {
        VH && (dY[AH + To]._ja = dY[AH + To][mu])
    }

    function se() {
        KH && (gY[tr]._go = gY[tr]._ef)
    }

    function he() {
        ZH && (_Y[AH + To].render = dY[AH + To]._ja)
    }

    function re() {
        FH === n && (dY[AH + To]._im = oq[xu])
    }

    function ae(t) {
        var i = Li(!0);
        return Wn(i.g), i.onselectstart = function () {
            return !1
        }, t.appendChild(i), i[dr] = sY, i
    }

    function d(t, i) {
        function n(t, n) {
            for (var e = t[qh], s = n[qh], h = e + s, r = new Array(h), a = 0, o = 0,
                     f = 0; h > f;)r[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            return r
        }

        function e(t) {
            var i = t[qh], s = Math.ceil(i / 2);
            return 1 >= i ? t : n(e(t.slice(0, s)), e(t[Yh](s)))
        }

        return e(t)
    }

    function oe(t) {
        t[Pa] = t.width
    }

    function fe(t) {
        uY || (uY = "imageSmoothingEnabled" in CanvasRenderingContext2D[tr] ? "imageSmoothingEnabled" : "mozImageSmoothingEnabled" in CanvasRenderingContext2D[tr] ? "mozImageSmoothingEnabled" : "msImageSmoothingEnabled" in CanvasRenderingContext2D[tr] ? "msImageSmoothingEnabled" : "webkitImageSmoothingEnabled" in CanvasRenderingContext2D[tr] ? "webkitImageSmoothingEnabled" : "imageSmoothingEnabled"), t[uY] = !1
    }

    function ue(t, i, n, e, s) {
        e = X(i + e) - (i = W(i)), s = X(n + s) - (n = W(n)), t[hf](i, n, e, s), t[pu](i, n, e, s)
    }

    function W(t) {
        return Math[Or](t)
    }

    function X(t) {
        return Math[Xh](t)
    }

    function ce(t) {
        var i = [];
        return t[Kf](function (t) {
            i.push(-t)
        }), i
    }

    function _e(t) {
        return t %= vY, 0 > t && (t += vY), t
    }

    function de(t, i, n, e, s, h, r, a) {
        var o = ((t * e - i * n) * (s - r) - (t - n) * (s * a - h * r)) / ((t - n) * (h - a) - (i - e) * (s - r)),
            f = ((t * e - i * n) * (h - a) - (i - e) * (s * a - h * r)) / ((t - n) * (h - a) - (i - e) * (s - r));
        if (isNaN(o) || isNaN(f)) return !1;
        if (t >= n) {
            if (!(o >= n && t >= o)) return !1
        } else if (!(o >= t && n >= o)) return !1;
        if (i >= e) {
            if (!(f >= e && i >= f)) return !1
        } else if (!(f >= i && e >= f)) return !1;
        if (s >= r) {
            if (!(o >= r && s >= o)) return !1
        } else if (!(o >= s && r >= o)) return !1;
        if (h >= a) {
            if (!(f >= a && h >= f)) return !1
        } else if (!(f >= h && a >= f)) return !1;
        return !0
    }

    function le(t, i) {
        for (var n = 0, e = t[qh]; e > n;) {
            for (var s = t[n], h = t[(n + 1) % e], r = 0; 4 > r;) {
                var a = i[r], o = i[(r + 1) % e];
                if (de(s[0], s[1], h[0], h[1], a[0], a[1], o[0], o[1])) return !0;
                r++
            }
            n++
        }
        return !1
    }

    function ve(t, i, n, e) {
        return [t * e - i * n, t * n + i * e]
    }

    function be(t) {
        return t.parent ? (t = t[Eu], t._dp ? t._dp : t instanceof kY && t._g5 === !1 ? t : null) : null
    }

    function ge(t, i, n) {
        if (n = n || i[wu], n == t) return !1;
        var e = t.getEdgeBundle(n);
        return e || (e = new YU(t, n), t[Tu][n.id] = e), e._i9(i, t)
    }

    function ye(t, i, n) {
        if (n = n || i[wu], n == t) return !1;
        var e = t.getEdgeBundle(n);
        return e ? e._dg(i, t) : void 0
    }

    function me(t, i, e) {
        return e === n && (e = i[wu]), e != t ? (t._8j || (t._8j = new iq), t._8j.add(i) === !1 ? !1 : void t._97++) : void 0
    }

    function xe(t, i, n) {
        return t._8j && t._8j.remove(i) !== !1 ? (t._97-- , void ye(t, i, n)) : !1
    }

    function pe(t, i) {
        return i[Mu] != t ? (t._95 || (t._95 = new iq), t._95.add(i) === !1 ? !1 : void t._mqv++) : void 0
    }

    function Ee(t, i) {
        return t._95 && t._95[Vh](i) !== !1 ? (t._mqv-- , void ye(i[Mu], i, t)) : !1
    }

    function we(t, i) {
        if (i === n && (i = t instanceof EY), i) {
            if (t.isInvalid()) return null;
            var e = we(t[ku], !1);
            if (t.isLooped()) return e;
            for (var s = we(t.to, !1); null != e && null != s;) {
                if (e == s) return e;
                if (e[Ou](s)) return s;
                if (s[Ou](e)) return e;
                e = we(e, !1), s = we(s, !1)
            }
            return null
        }
        for (var h = t[Eu]; null != h;) {
            if (h._hu()) return h;
            h = h[Eu]
        }
        return null
    }

    function Te(t, i, n) {
        t._hu() && t[Gh]() && t[zh].forEach(function (t) {
            t instanceof wY && i.add(t) && Te(t, i, n)
        }, this), t.hasFollowers() && t._do[Kf](function (t) {
            (null == n || n[Su](t)) && i.add(t) && Te(t, i, n)
        })
    }

    function Me(t, i) {
        i.parent ? i[Eu][Iu](i, i[Eu][Au] - 1) : t[Cu][Lu](i, t[Cu][qh] - 1)
    }

    function ke(t, i) {
        if (i instanceof EY) return void (i[Pu]() || Se(t, i));
        for (Me(t, i); i = i[Eu];)Me(t, i)
    }

    function Oe(t, i) {
        if (i instanceof EY) return void (i[Pu]() || Se(t, i));
        for (Me(t, i); i = i[Eu];)Me(t, i)
    }

    function Se(t, i) {
        var n = i[Mu];
        if (i.isLooped()) Me(t, n); else {
            var e = i.toAgent;
            Me(t, n), Me(t, e)
        }
    }

    function Ie(t, i) {
        return t._97++ , t._gb ? (i._hx = t._i2, t._i2._hy = i, void (t._i2 = i)) : (t._gb = i, void (t._i2 = i))
    }

    function Ae(t, i) {
        t._97-- , t._i2 == i && (t._i2 = i._hx), i._hx ? i._hx._hy = i._hy : t._gb = i._hy, i._hy && (i._hy._hx = i._hx), i._hx = null, i._hy = null, ye(t, i, i.$to)
    }

    function Ce(t, i) {
        return t[Ru]++ , t._i1 ? (i._jk = t._j2, t._j2._jm = i, void (t._j2 = i)) : (t._i1 = i, void (t._j2 = i))
    }

    function Le(t, i) {
        t._mqv-- , t._j2 == i && (t._j2 = i._jk), i._jk ? i._jk._jm = i._jm : t._i1 = i._jm, i._jm && (i._jm._jk = i._jk), i._jk = null, i._jm = null
    }

    function Pe(t, i) {
        return i = i || new iq, t[Du](function (t) {
            i.add({id: t.id, edge: t, fromAgent: t[Nu]._dp, toAgent: t.$to._dp})
        }), t[Bu](function (t) {
            t instanceof wY && Pe(t, i)
        }), i
    }

    function Re(t, i, n) {
        return Ne(t, i, n) === !1 ? !1 : De(t, i, n)
    }

    function De(t, i, n) {
        if (t._gb) for (var e = t._gb; e;) {
            if (i[Hh](n, e) === !1) return !1;
            e = e._hy
        }
    }

    function Ne(t, i, n) {
        if (t._i1) for (var e = t._i1; e;) {
            if (i[Hh](n, e) === !1) return !1;
            e = e._jm
        }
    }

    function Be(t, i, e, s, h, r, a) {
        return r || a ? (r = r || 0, a = a === n ? r : a || 0, r = Math.min(r, s / 2), a = Math.min(a, h / 2), t.moveTo(i + r, e), t.lineTo(i + s - r, e), t[ju](i + s, e, i + s, e + a), t[$u](i + s, e + h - a), t[ju](i + s, e + h, i + s - r, e + h), t.lineTo(i + r, e + h), t[ju](i, e + h, i, e + h - a), t[$u](i, e + a), t[ju](i, e, i + r, e), t[Fu](), t) : (t[Gu](i, e), t[$u](i + s, e), t[$u](i + s, e + h), t[$u](i, e + h), t[Fu](), t)
    }

    function je(t, i) {
        var n = i.r || 1, e = i.cx || 0, s = i.cy || 0, h = n * Math.tan(Math.PI / 8), r = n * Math.sin(Math.PI / 4);
        t[Gu](e + n, s), t[ju](e + n, s + h, e + r, s + r), t[ju](e + h, s + n, e, s + n), t[ju](e - h, s + n, e - r, s + r), t.quadTo(e - n, s + h, e - n, s), t[ju](e - n, s - h, e - r, s - r), t.quadTo(e - h, s - n, e, s - n), t[ju](e + h, s - n, e + r, s - r), t.quadTo(e + n, s - h, e + n, s)
    }

    function $e(t, i, n, e, s) {
        i instanceof tn && (e = i[Pa], s = i.height, n = i.cy - s / 2, i = i.cx - e / 2);
        var h = .5522848, r = e / 2 * h, a = s / 2 * h, o = i + e, f = n + s, u = i + e / 2, c = n + s / 2;
        return t[Gu](i, c), t[qu](i, c - a, u - r, n, u, n), t[qu](u + r, n, o, c - a, o, c), t[qu](o, c + a, u + r, f, u, f), t[qu](u - r, f, i, c + a, i, c), t
    }

    function Fe(t, i, n, e, s) {
        var h = 2 * e, r = 2 * s, a = i + e / 2, o = n + s / 2;
        return t[Gu](a - h / 4, o - r / 12), t[$u](i + .306 * e, n + .579 * s), t[$u](a - h / 6, o + r / 4), t[$u](i + e / 2, n + .733 * s), t.lineTo(a + h / 6, o + r / 4), t[$u](i + .693 * e, n + .579 * s), t[$u](a + h / 4, o - r / 12), t.lineTo(i + .611 * e, n + .332 * s), t.lineTo(a + 0, o - r / 4), t.lineTo(i + .388 * e, n + .332 * s), t[Fu](), t
    }

    function Ge(t, i, n, e, s) {
        return t[Gu](i, n), t[$u](i + e, n + s / 2), t[$u](i, n + s), t[Fu](), t
    }

    function qe(t, i, n, e, s) {
        return t.moveTo(i, n + s / 2), t[$u](i + e / 2, n), t[$u](i + e, n + s / 2), t[$u](i + e / 2, n + s), t[Fu](), t
    }

    function ze(t, i, n, e, s, h) {
        return t[Gu](i, n), t.lineTo(i + e, n + s / 2), t[$u](i, n + s), h || (t[$u](i + .25 * e, n + s / 2), t.closePath()), t
    }

    function He(t, i, n, e, s) {
        if (!t || 3 > t) throw new Error("edge number must greater than 2");
        t = 0 | t, e = e || 50, s = s || 0, i = i || 0, n = n || 0;
        for (var h, r, a = 0, o = 2 * Math.PI / t,
                 f = new Qz; t > a;)h = i + e * Math.cos(s), r = n + e * Math.sin(s), a ? f[$u](h, r) : f.moveTo(h, r), ++a, s += o;
        return f[Fu](), f
    }

    function Ye() {
        var t = new Qz;
        return t.moveTo(75, 40), t[qu](75, 37, 70, 25, 50, 25), t[qu](20, 25, 20, 62.5, 20, 62.5), t[qu](20, 80, 40, 102, 75, 120), t.curveTo(110, 102, 130, 80, 130, 62.5), t.curveTo(130, 62.5, 130, 25, 100, 25), t[qu](85, 25, 75, 37, 75, 40), t
    }

    function Ue() {
        var t = new Qz;
        return t[Gu](20, 0), t[$u](80, 0), t[$u](100, 100), t[$u](0, 100), t[Fu](), t
    }

    function We() {
        var t = new Qz;
        return t[Gu](100, 0), t[$u](100, 80), t[$u](0, 100), t[$u](0, 20), t.closePath(), t
    }

    function Xe() {
        var t = new Qz;
        return t[Gu](20, 0), t[$u](100, 0), t[$u](80, 100), t[$u](0, 100), t[Fu](), t
    }

    function Ve() {
        var t = new Qz;
        return t[Gu](43, 23), t[$u](28, 10), t[$u](37, 2), t.lineTo(63, 31), t[$u](37, 59), t[$u](28, 52), t[$u](44, 38), t[$u](3, 38), t[$u](3, 23), t[Fu](), t
    }

    function Ze() {
        var t = new Qz;
        return t.moveTo(1, 8), t.lineTo(7, 2), t[$u](32, 26), t.lineTo(7, 50), t[$u](1, 44), t[$u](18, 26), t.closePath(), t.moveTo(27, 8), t[$u](33, 2), t[$u](57, 26), t.lineTo(33, 50), t[$u](27, 44), t[$u](44, 26), t[Fu](), t
    }

    function Ke() {
        var t = new Qz;
        return t[Gu](0, 15), t[$u](23, 15), t[$u](23, 1), t[$u](47, 23), t.lineTo(23, 43), t[$u](23, 29), t[$u](0, 29), t.closePath(), t
    }

    function Je() {
        var t = new Qz;
        return t[Gu](0, 21), t.lineTo(30, 21), t[$u](19, 0), t[$u](25, 0), t[$u](47, 25), t.lineTo(25, 48), t[$u](19, 48), t.lineTo(30, 28), t[$u](0, 28), t.closePath(), t
    }

    function Qe() {
        var t = new Qz;
        return t[Gu](0, 0), t[$u](34, 24), t[$u](0, 48), t[$u](14, 24), t[Fu](), t
    }

    function ts() {
        var t = new Qz;
        return t[Gu](20, 0), t[$u](34, 14), t[$u](20, 28), t[$u](22, 18), t.lineTo(1, 25), t[$u](10, 14), t[$u](1, 3), t[$u](22, 10), t.closePath(), t
    }

    function is() {
        var t = new Qz;
        return t[Gu](4, 18), t[$u](45, 18), t[$u](37, 4), t[$u](83, 25), t[$u](37, 46), t.lineTo(45, 32), t[$u](4, 32), t.closePath(), t
    }

    function ns() {
        var t = new Qz;
        return t[Gu](17, 11), t[$u](27, 11), t.lineTo(42, 27), t[$u](27, 42), t[$u](17, 42), t[$u](28, 30), t[$u](4, 30), t[$u](4, 23), t[$u](28, 23), t[Fu](), t
    }

    function es() {
        MY[zu](bz.SHAPE_CIRCLE, $e(new Qz, 0, 0, 100, 100)), MY[zu](bz[Hu], Be(new Qz, 0, 0, 100, 100)), MY[zu](bz[Yu], Be(new Qz, 0, 0, 100, 100, 20, 20)), MY[zu](bz[Uu], Fe(new Qz, 0, 0, 100, 100)), MY[zu](bz[Wu], Ge(new Qz, 0, 0, 100, 100)), MY.register(bz[Xu], He(5)), MY[zu](bz.SHAPE_HEXAGON, He(6)), MY[zu](bz[Vu], qe(new Qz, 0, 0, 100, 100)), MY.register(bz[Zu], Ye()), MY[zu](bz[Ku], Ue()), MY[zu](bz[Ju], We()), MY.register(bz[Qu], Xe());
        var t = new Qz;
        t.moveTo(20, 0), t.lineTo(40, 0), t[$u](40, 20), t[$u](60, 20), t[$u](60, 40), t[$u](40, 40), t[$u](40, 60), t.lineTo(20, 60), t[$u](20, 40), t[$u](0, 40), t[$u](0, 20), t[$u](20, 20), t[Fu](), MY[zu](bz[tc], t), MY[zu](bz[ic], ze(new Qz, 0, 0, 100, 100)), MY.register(bz[nc], Ve()), MY[zu](bz[ec], Ze()), MY[zu](bz.SHAPE_ARROW_3, Ke()), MY[zu](bz[sc], Je()), MY[zu](bz[hc], Qe()), MY[zu](bz.SHAPE_ARROW_6, ts()), MY[zu](bz[rc], is()), MY[zu](bz[ac], ns()), MY.register(bz[oc], ze(new Qz, 0, 0, 100, 100, !0))
    }

    function ss() {
        w(this, ss, arguments), this.busLayout = !0
    }

    function hs() {
        w(this, hs), this._$r = new kq
    }

    function rs() {
        if (this._g5 === !0) {
            var t = this._8j, i = this._95;
            if (t) for (t = t._is; t[qh];) {
                var n = t[0];
                xe(this, n, n.toAgent)
            }
            if (i) for (i = i._is; i[qh];) {
                var n = i[0];
                Ee(this, n, n[Mu])
            }
            return void this.forEachChild(function (t) {
                t._hu() && rs[Hh](t)
            })
        }
        var e = Pe(this);
        e.forEach(function (t) {
            t = t.edge;
            var i = t[Nu], n = t.$to, e = i[Ou](this), s = n.isDescendantOf(this);
            e && !s ? (me(this, t), ge(this, t)) : s && !e && (pe(this, t), ge(t.fromAgent, t, this))
        }, this)
    }

    function as() {
        w(this, as, arguments), this[fc] = null
    }

    function os(t, i, n, e) {
        return t[i] = n, e ? {
            get: function () {
                return this[i]
            }, set: function (t) {
                if (t !== this[i]) {
                    this[i] = t, !this._mqo, this._1p = !0;
                    for (var n = e[qh]; --n >= 0;)this[e[n]] = !0
                }
            }
        } : {
            get: function () {
                return this[i]
            }, set: function (t) {
                t !== this[i] && (this[i] = t)
            }
        }
    }

    function fs(t, i) {
        var n = {}, e = {};
        for (var s in i) {
            var h = i[s];
            h[uc] && h[uc][Kf](function (t, i, n) {
                n[i] = cc + t, e[t] = !0
            }), n[s] = os(t, rr + s, h[_c], h[uc])
        }
        for (var r in e) t[cc + r] = !0;
        Object[Br](t, n)
    }

    function us(t, i, n, e) {
        if (Array[Er](i)) for (var s = i[qh]; --s >= 0;)us(t, i[s], n, e); else {
            var h = i[dc];
            if (h) {
                if (h instanceof OY || (h = t[h]), !h) return
            } else h = t;
            if (e || (e = t.getProperty(i[lc], n)), i.bindingProperty && (h[i.bindingProperty] = e), i[vc]) {
                var r = i.callback;
                r instanceof Function || (r = t[r]), r instanceof Function && r[Hh](t, e, h)
            }
        }
    }

    function cs() {
        SY[Kf](function (t) {
            this[t] = {}
        }, this)
    }

    function _s(t, i, n, e) {
        return e == bz.PROPERTY_TYPE_ACCESSOR ? void (t[n] = i) : e == bz[bc] ? void t.set(n, i) : e == bz[gc] ? void t[yc](n, i) : !1
    }

    function ds() {
        w(this, ds, arguments)
    }

    function ls() {
        w(this, ls, arguments)
    }

    function vs(t, i, n, e) {
        var s = bs(t, i, n, e), h = [];
        if (xs(t)) gs(s, i, n, h, e[mc](IY[xc])); else {
            As(t, i, n, h, s, e);
            var r = ys(t, e), a = r ? Ms(t, s, i, n, e[mc](IY.EDGE_SPLIT_PERCENT)) : e[mc](IY.EDGE_SPLIT_VALUE);
            0 == a && (s = !s)
        }
        return h
    }

    function bs(t, i, n) {
        if (null != t) {
            if (t == bz.EDGE_TYPE_ELBOW_HORIZONTAL || t == bz[pc] || t == bz[Ec] || t == bz[wc] || t == bz[Tc]) return !0;
            if (t == bz[Mc] || t == bz[kc] || t == bz[Oc] || t == bz[Sc] || t == bz[Ic]) return !1
        }
        var e = ws(i, n), s = Ts(i, n);
        return e >= s
    }

    function gs(t, i, n, e, s) {
        t ? Ds(i, n, e, s) : Ns(i, n, e, s)
    }

    function ys(t, i) {
        return i[mc](IY[Ac])
    }

    function ms(t) {
        return null != t && (t == bz[Sc] || t == bz[wc] || t == bz.EDGE_TYPE_EXTEND_BOTTOM || t == bz[Tc])
    }

    function xs(t) {
        return t && (t == bz[Cc] || t == bz[Lc] || t == bz[Mc])
    }

    function ps(t, i, n, e, s) {
        if (t == bz[Ec] || t == bz.EDGE_TYPE_VERTICAL_HORIZONTAL) return new sq(e.x + e[Pa] / 2, e.y + e[Ra] / 2);
        var h;
        if (ms(t)) {
            var r = Math.min(n.y, e.y), a = Math.min(n.x, e.x), o = Math.max(n[Hr], e[Hr]),
                f = Math.max(n.right, e[Yr]);
            if (h = s.getStyle(IY[xc]), t == bz.EDGE_TYPE_EXTEND_TOP) return new sq((a + f) / 2, r - h);
            if (t == bz[wc]) return new sq(a - h, (r + o) / 2);
            if (t == bz[Ic]) return new sq((a + f) / 2, o + h);
            if (t == bz[Tc]) return new sq(f + h, (r + o) / 2)
        }
        var u = ys(t, s);
        if (h = u ? Ms(t, i, n, e, s[mc](IY.EDGE_SPLIT_PERCENT)) : s.getStyle(IY.EDGE_SPLIT_VALUE), h == Number[Pc] || h == Number[Rc]) return new sq(e.x + e.width / 2, e.y + e[Ra] / 2);
        if (0 == h) return new sq(n.x + n[Pa] / 2, n.y + n[Ra] / 2);
        if (i) {
            var c = n.x + n[Yr] < e.x + e.right;
            return new sq(Ss(c, h, n.x, n[Pa]), n.y + n[Ra] / 2)
        }
        var _ = n.y + n.bottom < e.y + e[Hr];
        return new sq(n.x + n[Pa] / 2, Ss(_, h, n.y, n[Ra]))
    }

    function Es(t, i, n, e) {
        var s = Math.max(i, e) - Math.min(t, n);
        return s - (i - t + e - n)
    }

    function ws(t, i) {
        var n = Math.max(t.x + t[Pa], i.x + i[Pa]) - Math.min(t.x, i.x);
        return n - t[Pa] - i[Pa]
    }

    function Ts(t, i) {
        var n = Math.max(t.y + t.height, i.y + i[Ra]) - Math.min(t.y, i.y);
        return n - t[Ra] - i[Ra]
    }

    function Ms(t, i, n, e, s) {
        var h = ks(s, i, n, e, null);
        return h * s
    }

    function ks(t, i, n, e) {
        return i ? Os(t, n.x, n[Yr], e.x, e.right) : Os(t, n.y, n.bottom, e.y, e[Hr])
    }

    function Os(t, i, n, e, s) {
        var h = Es(i, n, e, s), r = e + s > i + n;
        if (h > 0) {
            if (1 == t) return h + (s - e) / 2;
            if (t >= 0 && 1 > t) return h;
            if (0 > t) return r ? e - i : n - s
        }
        return Math.abs(r && t > 0 || !r && 0 > t ? n - s : i - e)
    }

    function Ss(t, i, n, e) {
        return t == i > 0 ? n + e + Math.abs(i) : n - Math.abs(i)
    }

    function Is(t, i) {
        var n = t.length;
        if (!(3 > n)) {
            var e = i[mc](IY[Dc]);
            if (e != bz[Nc]) {
                var s = i[mc](IY[Bc]), h = 0, r = 0;
                s && (N(s) ? h = r = s : (h = s.x || 0, r = s.y || 0));
                for (var a, o, f, u, c = t[0], _ = t[1], d = null, l = 2; n > l; l++) {
                    var v = t[l], b = _.x - c.x, g = _.y - c.y, x = v.x - _.x, p = v.y - _.y,
                        E = !b || b > -Ez && Ez > b, w = !g || g > -Ez && Ez > g, T = !x || x > -Ez && Ez > x,
                        M = !p || p > -Ez && Ez > p, k = w;
                    (E && M || w && T) && (k ? (a = Math.min(2 == l ? Math.abs(b) : Math.abs(b) / 2, h), o = Math.min(l == n - 1 ? Math.abs(p) : Math.abs(p) / 2, r), f = new sq(_.x - (b > 0 ? a : -a), _.y), u = new sq(_.x, _.y + (p > 0 ? o : -o))) : (a = Math.min(l == n - 1 ? Math.abs(x) : Math.abs(x) / 2, h), o = Math.min(2 == l ? Math.abs(g) : Math.abs(g) / 2, r), f = new sq(_.x, _.y - (g > 0 ? o : -o)), u = new sq(_.x + (x > 0 ? a : -a), _.y)), m(t, _), l-- , n-- , (f.x != c.x || f.y != c.y) && (y(t, f, l), l++ , n++), e == bz[jc] ? (y(t, u, l), l++ , n++) : e == bz[$c] && (y(t, [_, u], l), l++ , n++)), c = _, _ = v
                }
                null != d && u.x == _.x && u.y == _.y && m(t, _)
            }
        }
    }

    function As(t, i, n, e, s, h) {
        var r = h.getStyle(IY[Fc]), a = null == r;
        if (null != r) {
            var o = (new oq)[Gc](i)[Gc](n);
            o[qc](r) || (s = Cs(r.x, r.y, o.y, o.x, o[Hr], o[Yr]))
        } else r = ps(t, s, i, n, h);
        s ? Rs(i, n, r, e, a) : Ps(i, n, r, e, a)
    }

    function Cs(t, i, n, e, s, h) {
        return n > i && n - i > e - t && n - i > t - h || i > s && i - s > e - t && i - s > t - h ? !1 : !0
    }

    function Ls(t, i, n) {
        return i >= t.x && i <= t.right && n >= t.y && n <= t.bottom
    }

    function Ps(t, i, n, e, s) {
        var h = Math.max(t.y, i.y), r = Math.min(t.y + t[Ra], i.y + i.height), a = null != n ? n.y : r + (h - r) / 2,
            o = t.x + t[Pa] / 2, f = i.x + i[Pa] / 2;
        if (0 == s && null != n && (n.x >= t.x && n.x <= t.x + t[Pa] && (o = n.x), n.x >= i.x && n.x <= i.x + i[Pa] && (f = n.x)), Ls(i, o, a) || Ls(t, o, a) || e[Kh](new sq(o, a)), Ls(i, f, a) || Ls(t, f, a) || e[Kh](new sq(f, a)), 0 == e.length) if (null != n) Ls(i, n.x, a) || Ls(t, n.x, a) || e[Kh](new sq(n.x, a)); else {
            var u = Math.max(t.x, i.x), c = Math.min(t.x + t[Pa], i.x + i[Pa]);
            e[Kh](new sq(u + (c - u) / 2, a))
        }
    }

    function Rs(t, i, n, e, s) {
        var h = Math.max(t.x, i.x), r = Math.min(t.x + t[Pa], i.x + i[Pa]), a = null != n ? n.x : r + (h - r) / 2,
            o = t.y + t.height / 2, f = i.y + i[Ra] / 2;
        if (0 == s && null != n && (n.y >= t.y && n.y <= t.y + t.height && (o = n.y), n.y >= i.y && n.y <= i.y + i[Ra] && (f = n.y)), Ls(i, a, o) || Ls(t, a, o) || e.push(new sq(a, o)), Ls(i, a, f) || Ls(t, a, f) || e.push(new sq(a, f)), 0 == e[qh]) if (null != n) Ls(i, a, n.y) || Ls(t, a, n.y) || e[Kh](new sq(a, n.y)); else {
            var u = Math.max(t.y, i.y), c = Math.min(t.y + t[Ra], i.y + i.height);
            e.push(new sq(a, u + (c - u) / 2))
        }
    }

    function Ds(t, i, n, e) {
        var s = i.x + i[Pa] < t.x, h = t.x + t[Pa] < i.x, r = s ? t.x : t.x + t[Pa], a = t.y + t.height / 2,
            o = h ? i.x : i.x + i[Pa], f = i.y + i.height / 2, u = e, c = s ? -u : u, _ = new sq(r + c, a);
        c = h ? -u : u;
        var d = new sq(o + c, f);
        if (s == h) {
            var l = s ? Math.min(r, o) - e : Math.max(r, o) + e;
            n[Kh](new sq(l, a)), n[Kh](new sq(l, f))
        } else if (_.x < d.x == s) {
            var v = a + (f - a) / 2;
            n[Kh](_), n[Kh](new sq(_.x, v)), n[Kh](new sq(d.x, v)), n[Kh](d)
        } else n[Kh](_), n[Kh](d)
    }

    function Ns(t, i, n, e) {
        var s = i.y + i[Ra] < t.y, h = t.y + t[Ra] < i.y, r = t.x + t[Pa] / 2, a = s ? t.y : t.y + t.height,
            o = i.x + i.width / 2, f = h ? i.y : i.y + i.height, u = e, c = s ? -u : u, _ = new sq(r, a + c);
        c = h ? -u : u;
        var d = new sq(o, f + c);
        if (s == h) {
            var l = s ? Math.min(a, f) - e : Math.max(a, f) + e;
            n.push(new sq(r, l)), n.push(new sq(o, l))
        } else if (_.y < d.y == s) {
            var v = r + (o - r) / 2;
            n[Kh](_), n[Kh](new sq(v, _.y)), n[Kh](new sq(v, d.y)), n[Kh](d)
        } else n[Kh](_), n.push(d)
    }

    function Bs(t) {
        return t == bz[zc] || t == bz[pc] || t == bz[Ec] || t == bz[kc] || t == bz[Oc] || t == bz[Sc] || t == bz[wc] || t == bz[Ic] || t == bz.EDGE_TYPE_EXTEND_RIGHT || t == bz[Cc] || t == bz[Lc] || t == bz[Mc]
    }

    function js(t, i) {
        var n, e;
        i && i.width && i[Ra] ? (n = i[Pa], e = i.height) : n = e = isNaN(i) ? tq.ARROW_SIZE : i;
        var s = MY[Hc](t, -n, -e / 2, n, e);
        return s || (s = new Qz, s[Gu](-n, -e / 2), s[$u](0, 0), s[$u](-n, e / 2)), s
    }

    function $s(t, i) {
        var n = Math.sin(i), e = Math.cos(i), s = t.x, h = t.y;
        return t.x = s * e - h * n, t.y = s * n + h * e, t
    }

    function Fs(t, i, n, e, s, h) {
        var r = Math[qr](e - i, n - t), a = new sq(s, h);
        return a[Mo] = r, $s(a, r), a.x += t, a.y += i, a
    }

    function Gs(t, i, n, e, s) {
        i = si(e, i.x, i.y, n.x, n.y), n = si(s, n.x, n.y, i.x, i.y);
        var h = Math.PI / 2 + Math[qr](n.y - i.y, n.x - i.x), r = t * Math.cos(h), a = t * Math.sin(h), o = n.x - i.x,
            f = n.y - i.y, u = i.x + .25 * o, c = i.y + .25 * f, _ = i.x + .75 * o, d = i.y + .75 * f;
        return [new Kz(Xz, [u + r, c + a, _ + r, d + a])]
    }

    function qs(t, i, e) {
        if (y(t, new Kz(Yz, [i.x, i.y]), 0), e) {
            if (t.length > 1) {
                var s = t[t.length - 1];
                if (Wz == s[To] && (s.invalidTerminal || s[vo][2] === n || null === s[vo][2])) return s[vo][2] = e.x, s.points[3] = e.y, void (s.invalidTerminal = !0);
                if (Xz == s[To] && (s.invalidTerminal || s[vo][4] === n || null === s.points[4])) return s[vo][4] = e.x, s[vo][5] = e.y, void (s[Yc] = !0)
            }
            t[Kh](new Kz(Uz, [e.x, e.y]))
        }
    }

    function zs(t, i, n, e, s, h, r, a) {
        return i[Uc]() ? void (n._gd = i._9l[Wc]()) : e == s ? void t[Xc](n, e, h, r) : void t[Vc](n, e, s, h, r, a)
    }

    function Hs(t, i, n, e, s) {
        var h = e == s, r = t[Zc].getUI(e), a = h ? r : t[Zc][Kc](s);
        if (r && a) {
            var o = i[Jc], f = r.bodyBounds.clone(), u = h ? f : a[Qc][Zh](), c = t[mc](IY.EDGE_FROM_OFFSET),
                _ = t[mc](IY.EDGE_TO_OFFSET);
            c && (f.x += c.x || 0, f.y += c.y || 0), _ && (u.x += _.x || 0, u.y += _.y || 0);
            var d = i[Uc]();
            if (!h && !o && !d) {
                var l = e[t_], v = s[t_];
                if (l != v) {
                    var b, g, y, m, x = i[i_];
                    l ? (b = r, g = f, y = a, m = u) : (b = a, g = u, y = r, m = f);
                    var p = Zs(g, b, l, y, m, x);
                    if (p && 2 == p[qh]) {
                        var E = p[0], w = p[1];
                        return n[Gu](E.x, E.y), w.x == E.x && w.y == E.y && (w.y += .01), n.lineTo(w.x, w.y), void (n._6c = !0)
                    }
                }
            }
            zs(t, i, n, r, a, o, f, u), (!h || d) && Ys(t, i, n, r, a, o, f, u), n._6c = !0
        }
    }

    function Ys(t, i, e, s, h, r, a, o) {
        var f = a.center, u = o.center, c = t.fromAtEdge, _ = t[n_];
        if (!c && !_) return void qs(e._gd, f, u);
        var d = e._gd;
        if (d[qh]) {
            if (c) {
                var l = d[0], v = l.firstPoint;
                a.contains(v.x, v.y) && (l[To] == Xz ? (f = v, v = {
                    x: l.points[2],
                    y: l.points[3]
                }, l[vo] = l[vo][Yh](2), l[To] = Wz) : l.type == Wz && (f = v, v = {
                        x: l.points[0],
                        y: l[vo][1]
                    }, l[vo] = l[vo][Yh](2), l.type = Uz)), Us(s, a, v, f, n, n)
            }
            if (_) {
                var b, g = d[d[qh] - 1], y = g[wo], m = g[vo][qh], x = y.x === n || y.y === n;
                m >= 4 && (x || o.contains(y.x, y.y)) && (x || (u = y), b = !0, y = {
                    x: g[vo][m - 4],
                    y: g.points[m - 3]
                }, o[e_](y.x, y.y) && (u = y, m >= 6 ? (y = {
                    x: g[vo][m - 6],
                    y: g.points[m - 5]
                }, g[vo] = g.points[Yh](0, 4), g.type = Wz) : 1 == d.length ? (y = {
                    x: f.x,
                    y: f.y
                }, g[vo] = g[vo][Yh](0, 2), g.type = Uz) : (g = d[d[qh] - 2], y = g[wo]))), Us(h, o, y, u, n, n), b && (m = g[vo].length, g[vo][m - 2] = u.x, g[vo][m - 1] = u.y, u = null)
            }
        } else {
            var p = Math[qr](u.y - f.y, u.x - f.x), E = Math.cos(p), w = Math.sin(p);
            c && Us(s, a, u, f, E, w), _ && Us(h, o, f, u, -E, -w)
        }
        qs(e._gd, f, u)
    }

    function Us(t, i, e, s, h, r) {
        if (h === n) {
            var a = Math[qr](e.y - s.y, e.x - s.x);
            h = Math.cos(a), r = Math.sin(a)
        }
        for (e = {x: e.x, y: e.y}, i[e_](e.x, e.y) || (e = si(i, s.x, s.y, e.x, e.y)); ;) {
            if (!i[e_](e.x, e.y)) return s;
            if (t[s_](e.x - h, e.y - r, tq[h_])) {
                s.x = e.x - h / 2, s.y = e.y - r / 2;
                break
            }
            e.x -= h, e.y -= r
        }
        return s
    }

    function Ws(t, i, n, e, s, h, r, a) {
        if (i.hasPathSegments()) return i._9l;
        var o = i[Jc];
        if (Bs(o)) {
            var f = vs(o, n, e, t, s, h);
            if (!f || !f[qh]) return null;
            y(f, r, 0), f[Kh](a), o != bz[Cc] && Is(f, t);
            for (var u = [], c = f[qh], _ = 1; c - 1 > _; _++) {
                var d = f[_];
                u[Kh]($(d) ? new Kz(Wz, [d[0].x, d[0].y, d[1].x, d[1].y]) : new Kz(Uz, [d.x, d.y]))
            }
            return u
        }
        if (i.$bundleEnabled) {
            var l = t._2e();
            if (!l) return;
            return Gs(l, r, a, n, e)
        }
    }

    function Xs(t, i, n) {
        var e = t[mc](IY.EDGE_LOOPED_EXTAND), s = t._2e(), h = e + .2 * s, r = i.x + i[Pa] - h, a = i.y,
            o = i.x + i.width, f = i.y + h;
        e += s;
        var u = .707, c = -.707, _ = i.x + i[Pa], d = i.y, l = _ + u * e, v = d + c * e, b = {x: r, y: a}, g = {
                x: l,
                y: v
            }, y = {
                x: o,
                y: f
            }, m = b.x, x = g.x, p = y.x, E = b.y, w = g.y, T = y.y,
            M = ((T - E) * (w * w - E * E + x * x - m * m) + (w - E) * (E * E - T * T + m * m - p * p)) / (2 * (x - m) * (T - E) - 2 * (p - m) * (w - E)),
            k = ((p - m) * (x * x - m * m + w * w - E * E) + (x - m) * (m * m - p * p + E * E - T * T)) / (2 * (w - E) * (p - m) - 2 * (T - E) * (x - m)),
            h = Math[fo]((m - M) * (m - M) + (E - k) * (E - k)), O = Math[qr](b.y - k, b.x - M),
            S = Math[qr](y.y - k, y.x - M), I = S - O;
        return 0 > I && (I += 2 * Math.PI), Vs(M, k, O, I, h, h, !0, n)
    }

    function Vs(t, i, n, e, s, h, r, a) {
        var o, f, u, c, _, d, l, v, b, g, y;
        if (Math.abs(e) > 2 * Math.PI && (e = 2 * Math.PI), _ = Math[Xh](Math.abs(e) / (Math.PI / 4)), o = e / _, f = o, u = n, _ > 0) {
            d = t + Math.cos(u) * s, l = i + Math.sin(u) * h, moveTo ? a.moveTo(d, l) : a[$u](d, l);
            for (var m = 0; _ > m; m++)u += f, c = u - f / 2, v = t + Math.cos(u) * s, b = i + Math.sin(u) * h, g = t + Math.cos(c) * (s / Math.cos(f / 2)), y = i + Math.sin(c) * (h / Math.cos(f / 2)), a[ju](g, y, v, b)
        }
    }

    function Zs(t, i, e, s, h, r) {
        var a = h.cx, o = h.cy, f = a < t.x, u = a > t.right, c = o < t.y, _ = o > t.bottom, d = t.cx, l = t.cy,
            v = f || u, b = c || _, g = r === n || null === r;
        g && (r = Math[qr](o - l, a - d), v || b || (r += Math.PI));
        var y = Math.cos(r), m = Math.sin(r), x = Js(i, t, {x: a, y: o}, -y, -m);
        x || (r = Math[qr](o - l, a - d), v || b || (r += Math.PI), y = Math.cos(r), m = Math.sin(r), x = Js(i, t, {
                x: a,
                y: o
            }, -y, -m) || {x: d, y: l});
        var p = Js(s, h, {x: x.x, y: x.y}, -x[r_] || y, -x.perY || m, !1) || {x: a, y: o};
        return e ? [x, p] : [p, x]
    }

    function Ks(t, i, n, e, s, h) {
        var r = i < t.x, a = i > t[Yr], o = n < t.y, f = n > t[Hr];
        if (r && e > 0) {
            var u = t.x - i, c = n + u * s / e;
            if (c >= t.y && c <= t[Hr]) return {x: t.x, y: c, perX: e, perY: s}
        }
        if (a && 0 > e) {
            var u = t.right - i, c = n + u * s / e;
            if (c >= t.y && c <= t.bottom) return {x: t[Yr], y: c, perX: e, perY: s}
        }
        if (o && s > 0) {
            var _ = t.y - n, d = i + _ * e / s;
            if (d >= t.x && d <= t[Yr]) return {x: d, y: t.y, perX: e, perY: s}
        }
        if (f && 0 > s) {
            var _ = t.bottom - n, d = i + _ * e / s;
            if (d >= t.x && d <= t[Yr]) return {x: d, y: t[Hr], perX: e, perY: s}
        }
        return h !== !1 ? Ks(t, i, n, -e, -s, !1) : void 0
    }

    function Js(t, i, n, e, s, h) {
        if (!i[e_](n.x, n.y)) {
            if (n = Ks(i, n.x, n.y, e, s, h), !n) return;
            return Qs(t, i, n, n.perX, n.perY)
        }
        return h === !1 ? Qs(t, i, n, e, s) : Qs(t, i, {x: n.x, y: n.y, perX: e, perY: s}, e, s) || Qs(t, i, n, -e, -s)
    }

    function Qs(t, i, n, e, s) {
        for (; ;) {
            if (!i[e_](n.x, n.y)) return;
            if (t[s_](n.x + e, n.y + s)) break;
            n.x += e, n.y += s
        }
        return n
    }

    function th(t) {
        return mn(t) ? t : t.match(/.(gif|jpg|jpeg|png)$/gi) ? t : (t = J(t), t instanceof Object && t[Po] ? t : void 0)
    }

    function ih(t) {
        for (var i = t.parent; i;) {
            if (i[a_]) return i;
            i = i[Eu]
        }
        return null
    }

    function nh() {
        w(this, nh, arguments)
    }

    function eh(t, n, e, s, h, r, a) {
        var o = i[Ha](o_);
        o.className = f_, li(o, WY), n && li(o, n);
        var f = i[Ha](u_);
        return r && (JG && (f[c_] = r), zq || (f[__] = r)), f.name = a, f.src = e, li(f, XY), h && li(f, h), s && bi(f, d_, l_), o[v_] = f, o.appendChild(f), t.appendChild(o), o
    }

    function sh(t, n) {
        this[b_] = i.createElement(o_), this[b_][dr] = g_, li(this[b_], {
            "background-color": y_,
            overflow: m_,
            "user-select": x_,
            position: p_
        }), this[E_] = eh(this._navPane, {width: w_}, tq[T_], !1, null, n, M_), this[k_] = eh(this[b_], {height: w_}, tq[O_], !1, VY, n, Go), this._right = eh(this[b_], {
            height: w_,
            right: S_
        }, tq[O_], !0, VY, n, Yr), this._msottom = eh(this[b_], {
            width: w_,
            bottom: S_
        }, tq[T_], !0, null, n, Hr), t.appendChild(this[b_])
    }

    function hh(t, i) {
        if (!tq[O_]) {
            var n = Li(20, 40), e = n.g;
            e[rf](e[Ba], e.ratio), e[Gu](16, 4), e.lineTo(4, 20), e[$u](16, 36), e.lineWidth = 3, e.lineCap = go, e[I_] = go, e[A_] = C_, e[L_] = P_, e.shadowBlur = 5, e[R_](), tq.NAVIGATION_IMAGE_LEFT = n[D_]();
            var s = Li(n[Ra], n[Pa], !1);
            s.g[Qa](s.width, 0), s.g.rotate(Math.PI / 2), s.g[N_](n, 0, 0), tq[T_] = s[D_]()
        }
        this[yu] = t;
        var h = function (i) {
            q(i);
            var n, e, s = i[dc], h = s.name;
            if (Go == h) n = 1; else if (Yr == h) n = -1; else if (M_ == h) e = 1; else {
                if (Hr != h) return;
                e = -1
            }
            JG && (s[dr] = B_, setTimeout(function () {
                s[dr] = ""
            }, 100)), q(i), t._k0[j_](n, e)
        };
        sh[Hh](this, i, h), this._3g(i.clientWidth, i[$_])
    }

    function rh(t, i) {
        this[yu] = t, this.init(i, t)
    }

    function ah() {
        w(this, ah, arguments)
    }

    function oh(t, i) {
        this._msaseCanvas = t, this._ik = ae(i), this.g = this._ik.g, this._9j = new iq
    }

    function fh(t) {
        var i = t[F_], n = [];
        return t[G_].forEach(function (i) {
            t[q_](i) && t.isSelectable(i) && n.push(i)
        }), i.set(n)
    }

    function uh(t, i, n) {
        var e = t[kf];
        n = n || e, i = i || 1;
        var s = null;
        s && n.width * n[Ra] * i * i > s && (i = Math[fo](s / n.width / n[Ra]));
        var h = Li();
        Wn(h.g), h[Pa] = n[Pa] * i, h[Ra] = n[Ra] * i, t._8y._h5(h.g, i, n);
        var r = null;
        try {
            r = h[D_](z_)
        } catch (a) {
            vz[Qo](a)
        }
        return {canvas: h, data: r, width: h[Pa], height: h.height}
    }

    function ch(t) {
        this[Zc] = t, this.topCanvas = t[H_]
    }

    function _h(t, i) {
        this[Y_] = t, this[U_] = i || W_
    }

    function dh() {
        w(this, dh, arguments)
    }

    function lh(t, i) {
        if (!t) return i;
        var e = {};
        for (var s in t) e[s] = t[s];
        for (var s in i) e[s] === n && (e[s] = i[s]);
        return e
    }

    function vh() {
        w(this, vh, arguments)
    }

    function bh() {
        w(this, bh, arguments)
    }

    function gh() {
        w(this, gh, arguments)
    }

    function yh() {
        w(this, yh, arguments)
    }

    function mh(i, n, e) {
        i += t[da], n += t.pageYOffset;
        var s = e[fa]();
        return {x: i + s[Go], y: n + s.top}
    }

    function xh(t, i, n) {
        var e = t[X_], s = t[V_];
        t[ja][Go] = i - e / 2 + $a, t[ja].top = n - s / 2 + $a
    }

    function ph(t) {
        var n = i.createElement(Ya), e = n.getContext(Wa), s = getComputedStyle(t, null), h = s[to];
        h || (h = s[Z_] + yr + s[K_] + yr + s[J_]), e[to] = h;
        var r = t[_c], a = r.split(so), o = parseInt(s[K_]), f = 0, u = 0;
        return vz.forEach(a, function (t) {
            var i = e.measureText(t)[Pa];
            i > f && (f = i), u += 1.2 * o
        }), {width: f, height: u}
    }

    function Eh(t, n) {
        if (mr == typeof t[Q_] && mr == typeof t[td]) {
            var e = t[_c], s = t[Q_];
            t[_c] = e[Yh](0, s) + n + e[Yh](t[td]), t.selectionEnd = t[Q_] = s + n[qh]
        } else if (id != typeof i[nd]) {
            var h = i.selection.createRange();
            h[ed] = n, h.collapse(!1), h.select()
        }
    }

    function wh(i) {
        if (FG) {
            var n = t[sd] || t.pageXOffset, e = t[hd] || t.pageYOffset;
            return i[rd](), void t[ad](n, e)
        }
        i.select()
    }

    function Th() {
    }

    function Mh(t) {
        this[Zc] = t, this.topCanvas = t.topCanvas, this[od] = JG ? 8 : 5
    }

    function kh(t) {
        return t.type == Wz || t[To] == Xz
    }

    function Oh(t) {
        this[Zc] = t, this[H_] = t.topCanvas, this.handlerSize = JG ? 8 : 4, this._rotateHandleLength = JG ? 30 : 20
    }

    function Sh(t, i) {
        var n = new oq;
        return n.addPoint(Fn.call(t, {x: i.x, y: i.y})), n.addPoint(Fn.call(t, {
            x: i.x + i.width,
            y: i.y
        })), n[Na](Fn.call(t, {x: i.x + i[Pa], y: i.y + i[Ra]})), n[Na](Fn[Hh](t, {x: i.x, y: i.y + i[Ra]})), n
    }

    function Ih(t) {
        t %= 2 * Math.PI;
        var i = Math[go](t / JY);
        return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : fd
    }

    function Ah(n, e, s) {
        var h = i[ud], r = new vz[cd](t[da], t.pageYOffset, h.clientWidth - 2, h[$_] - 2), a = n.offsetWidth,
            o = n.offsetHeight;
        e + a > r.x + r[Pa] && (e = r.x + r[Pa] - a), s + o > r.y + r[Ra] && (s = r.y + r.height - o), e < r.x && (e = r.x), s < r.y && (s = r.y), n[ja][Go] = e + $a, n.style.top = s + $a
    }

    function Ch(t, i, n, e, s) {
        this[Ho] = t, this.type = _d, this[dd] = i, this[wr] = n, this[mo] = e, this[ld] = s
    }

    function Lh(t) {
        this._4w = {}, this._k0 = t, this._k0._1o.addListener(this._9c, this), this.currentMode = bz.INTERACTION_MODE_DEFAULT
    }

    function Ph(t) {
        return t >= 100 && 200 > t
    }

    function Rh(t) {
        return t == gU || t == MU || t == TU || t == xU || t == SU || t == IU
    }

    function Dh() {
        var t, i, n = {}, e = [], s = 0, h = {}, r = 0;
        this[Zc][Kf](function (a) {
            if (this.isLayoutable(a)) if (a instanceof wY) {
                var o = {node: a, id: a.id, x: a.x, y: a.y};
                for (this.appendNodeInfo && this[vd](a, o), n[a.id] = o, e.push(o), s++ , i = a[Eu]; i instanceof kY;) {
                    t || (t = {});
                    var f = t[i.id];
                    f || (f = t[i.id] = {id: i.id, children: []}), f[zh][Kh](o), i = i[Eu]
                }
            } else if (a instanceof EY && !a[bd]() && a.fromAgent && a.toAgent) {
                var o = {edge: a};
                h[a.id] = o, r++
            }
        }, this);
        var a = {};
        for (var o in h) {
            var f = h[o], u = f[gd], c = u[Mu], _ = u[wu], d = c.id + Jr + _.id, l = _.id + Jr + c.id;
            if (n[c.id] && n[_.id] && !a[d] && !a[l]) {
                var v = n[c.id], b = n[_.id];
                f.from = v, f.to = b, a[d] = f, this[yd] && this[yd](u, f)
            } else delete h[o], r--
        }
        return {groups: t, nodesArray: e, nodes: n, nodeCount: s, edges: h, edgeCount: r, minEnergy: this[md](s, r)}
    }

    function Nh(t) {
        this[Zc] = t, this.currentMovingNodes = {}
    }

    function Bh() {
        w(this, Bh, arguments)
    }

    function jh(t, i, n, e, s) {
        e ? t[Du](function (e) {
            var h = e.otherNode(t);
            h != n && h[xd] != s && i(h, t)
        }, this, !0) : t.forEachOutEdge(function (e) {
            var h = e.toAgent;
            h != n && h._marker != s && i(h, t)
        })
    }

    //var Fh = ["has", "C", "hildren", "length", "children", "call", "slice", "splice", "concat", "ceil", "remove", "clone", "push", "index", "O", "f", "object", "prototype", "superclass", "apply", "super", "_", "define", "P", "roperty", "$", "before", "E", "vent", "on", "read", "nly", "S", "etting", "bind", "request", "A", "nimation", "F", "rame", "class", "N", "ame", "L", "ist", "get", "ttribute", "split", " ", "number", "string", "boolean", "is", "rray", "event", "prevent", "D", "efault", "stop", "ropagation", "cancel", "B", "ubble", "floor", "random", "rgba", "(", ",", "to", "ixed", ")", "#", "000000", "enumerable", "roperties", ".", "touches", "console", "trace", "atan", "2", "sin", "bottom", "right", "from", "tring", "horizontal", "osition", "vertical", "hild", "R", "emove", "replace", "ms", "-", "ower", "ase", ":", ";", "substring", "insert", "ule", "{", "}", "add", "changed", "T", "ouches", "ounding", "lient", "ect", "client", "X", "Y", "page", "XO", "ffset", "YO", "scope", "drag", "oints", "meta", "K", "ey", "ctrl", "response", "XML", "'", "' ", "format", "error", "JSON", "?", "__", "time", "=", "open", "GET", "onreadystatechange", "ready", "tate", "status", "load", "send", "width", "height", "clear", "oint", "ratio", "style", "px", "moz", "acking", "tore", "ixel", "atio", "o", "backing", "create", "lement", "canvas", "ontext", "d", "set", "ize", "FONT", "SIZE", "FAMILY", "save", "translate", "font", "text", "lign", "aseline", "middle", "\n", "fill", "ext", "restore", "measure", "I", "mage", "ata", "sqrt", "square", "other", "j", "3", "ircle", "ounds", "points", "intersects", "round", "ransform", "data", "line", "W", "idth", "n", "troke", "ath", "last", "type", "rotate", "p", "y", "CCW", "1", "x", "mq", "boundary", "draw", "test", "msa", "5", "IMAGE", "HEIGHT", "name", "full", "uniform", "padding", "left", "validate", "msd", "source", "image", " - ", "BLEND", "MODE", "MULTIPLY", "DARKEN", "LINEAR", "BURN", "LIGHTEN", "SCREEN", "color", ", [", "]", "GRAY", "put", "scale", "ls", "NO", "mqe", "offset", "rotatable", "$_", "host", "otate", "layout", "nchor", "invalidate", "border", "show", "ointer", "pointer", "anchor", "msackground", "G", "radient", "nvalidate", "lag", "background", "la", "hape", "bounds", "m", "adius", "mpty", "ash", "ine", "webkit", "transparency", "iven", "ndex", "delay", "ime", "disposal", "M", "ethod", "top", "os", "for", "ach", "override", "ype", "onload", "parse", "onerror", "xhr", "join", "char", "ode", "t", "decode", "U", "omponent", "qunee", "lo", "lh", "12", "0", "msase", "anvas", "render", "equals", "rect", "parent", "gent", "linked", "odes", "escendant", "accept", "ount", "roots", "nvalid", "mqv", "dge", "quad", "close", "move", "curve", "register", "SHAPE", "RECT", "ROUNDRECT", "STAR", "TRIANGLE", "PENTAGON", "DIAMOND", "HEART", "TRAPEZIUM", "RHOMBUS", "PARALLELOGRAM", "CROSS", "ARROW", "STANDARD", "4", "7", "8", "OPEN", "lags", "value", "target", "property", "callback", "PROPERTY", "TYPE", "CLIENT", "STYLE", "tyle", "EDGE", "EXTEND", "ORTHOGONAL", "HORIZONTAL", "VERTICAL", "LEFT", "RIGHT", "ELBOW", "TOP", "BOTTOM", "SPLIT", "BY", "PERCENT", "NEGATIVE", "INFINITY", "POSITIVE", "CORNER", "NONE", "RADIUS", "BEVEL", "ROUND", "CONTROL", "POINT", "union", "invalid", "erminal", "egments", "atas", "ooped", "graph", "UI", "edge", "body", "bus", "ayout", "angle", "contains", "hit", "est", "LOOKING", "ENDPOINT", "TOLERANCE", "per", "enable", "ub", "etwork", "div", "Q", "raph", "av", "utton", "img", "ontouchstart", "onclick", "transform", "180", "deg", "nav", "ane", ", ", "hidden", "none", "relative", "100", "%", "NAVIGATION", "J", "oin", "stroke", "FFF", "shadow", "olor", "888", "URL", "hover", "H", "eight", "selection", "odel", "V", "isible", "/", "png", "interactions", "default", "ursor", "amily", "tart", "nd", "undefined", "scroll", "select", "handler", "nesw", "resize", "document", "interaction", "kind", "datas", "append", "nfo", "min", "nergy", "unction", "marker", "navigator", "user", "match", "equest", "ancel", "imeout", "333", "normal", "hanged", "not", "exist", "mqi", "first", "node", "tag", "next", "ibling", "pper", "distance", "rest", "muos", "MAX", "VALUE", " , ", "intersection", "sort", "l", "c", "r", "b", "MIDDLE", "CENTER", "radius", "classify", ": ", "change", "old", "alue", "child", "listener", "events", "listeners", "istener", "list", "KIND", "ADD", "REMOVE", "arent", "dd", "lear", "jy", "fm", "CLEAR", "filter", "hange", "ispatcher", "mue", "disconnect", "dges", " '", "msox", "head", "css", "styles", "sheet", ";\n", "handle", "return", "DOUBLE", "CLICK", "INTERVAL", "TIME", "touchstart", "touchmove", "touchend", "touchcancel", "onmousewheel", "DOMM", "ouse", "croll", "contextmenu", "mousedown", "mouseup", "click", "dblclick", "mousemove", "keydown", "keyup", "ouch", "muurrent", "tem", "indow", "ove", "dragging", "tamp", "mqction", "QE", "long", "ress", "imer", "kc", "muancel", "lick", "onlongpress", "ong", "fix", "touch", "onstart", "ul", "prev", "cale", "startpinch", "kcdrag", "ondrag", "pinching", "onpinch", "endpinch", "enddrag", "onrelease", "oncontextmenu", "wheel", "elta", "detail", "delta", "onmouseup", "screen", "mulick", "dblclicked", "ondblclick", "button", "startdrag", "urrent", "peed", "ka", "tatus", "anel", "UIB", "mh", "emoved", "ii", "isteners", "gs", "muustom", "nteraction", "hs", "nteractions", "destroy", "start", "total", "limit", "zoom", "in", "out", "grab", "grabbing", "crosshair", "url", "gif", "base", "64", "i", "VBOR", "w", "KG", "go", "AAAANSU", "h", "EU", "g", "AAABAAAAAQCAYAAAA", "9", "AAAAGXRFWHRT", "Z", "ZQBBZG", "ZSBJ", "WF", "ZVJ", "YWR", "ccll", "PAAAAFVJREFU", "e", "pi", "//", "lg", "BG", "AY", "MIO", "GQZANIM", "osky", "AKYZG", "yi", "PIOSWGA", "z", "RBGU", "MB", "q", "GUBM", "gxh", "nfp", "KQD", "qq", "RE", "qu", "RGY", "BA", "AEAD", "ad", "TI", "zw", "AAAAASUVORK", "CYII", "=) ", "bounce", "ut", "muallback", "ID", "tep", "msv", "upport", "nsets", "IL", "calculate", "istance", "rag", "alert", "prompt", "confirm", "CSSR", "flip", "mirror", "elbow", "orthogonal", "extend", "zigzag", "bevel", "circle", "ELLIPSE", "oval", "roundrect", "star", "triangle", "hexagon", "pentagon", "trapezium", "rhombus", "parallelogram", "heart", "diamond", "cross", "arrow", "standard", "6", "LINE", "CAP", "BUTT", "butt", "JOIN", "MITER", "miter", "SELECTION", "SHADOW", "BLUR", "COLOR", "BORDER", "POINTER", "WIDTH", "device", "quadratic", "urve", "bezier", "CACHE", "PIXELS", "dispatcher", "mu", "pixels", "cacheable", "CCC", "clip", "center", "000", "lur", "oading", "...", "rror", "ache", "max", "ll", "mages", "colors", "positions", "GRADIENT", "RADIAL", "inear", "position", "adial", "RAINBOW", "a", "SEGMENT", "TO", "QUAD", "CURVE", "ARC", "umber", "egment", "hadow", "order", "ap", "outline", "begin", "original", "ixels", "darken", "multiply", "burn", "linear", "lighten", "gray", "imit", "186493", "145", "115", "87", "85", "125", "89", "176291", "2479", "2881", "BB", "FA", "86", "004063", "ece", "efefef", "135", "186494", "70", "257", "AB", "2377", "AD", "DA", "105984", "6969", "545252", "646262", "4948", "494645", "808080", "888888", "939293", "FFFFFF", "EAEA", "fa", "caca", "39", "CBEA", "ECE", "global", "lpha", "727171", "muache", "hsed", "msr", "msuffered", "yte", "ytes", "har", "nsigned", "LZW", "code", "GIF", "ot", "file", "shift", "sorted", "gct", "bg", "pixel", "spect", "terminator", "comment", "pt", "iterations", "app", "identifier", "auth", "unknown", "label", "gce", "com", "pte", "lct", "lzw", "interlaced", "sentinel", "eof", "nknown", "block", "alt", "ersion", "version", "ublish", "ate", "publish", "about", "copyright", "43", "1133375609", "ab", "3212", "157552652782", "dc", "abfe", "47273959", "defd", "82", "eba", "3781", "7138", "bd", "02954591", "ffc", "95", "aca", "49", "03", "ae", "3317", "fcd", "2397", "fee", "cfafc", "22186728105736650", "cb", "696", "47", "44", "741", "bf", "667", "aefb", "497", "aa", "dcfcdabc", "9817288", "dface", "24", "fd", "afdb", "18", "ddb", "42", "bdca", "295", "58191399", "633", "34", "ebd", "8329", "aef", "54181232", "088", "ff", "aea", "de", "05", "749", "icensed", "20", "website", "demo", "map", "fil", "nee", "RIC", "ho", "ca", "ifr", "end", "ont", "proto", "locat", "11000", "15000", "17000", "20000", "31000", "32000", "ion", "stname", "u", "HTML", "iframe", "display", "content", "localhost", "127", "00", "cont", "ent", "ering", "overflow", "absolute", "muc", "ing", "viewport", "muj", "cs", "mqo", "size", "jaing", "muh", "mug", "matrix", "mqd", "mqt", "mqr", "mutx", "msuffer", "reverse", "atrix", "trans", "muss", "hf", "visible", "mqb", "tab", "ogical", "ui", "iv", "muk", "everse", "lobal", "lips", "BUTTON", "navigation", "SCROLLBAR", "scrollbar", "ja", "mqg", "undle", "origin", "djusted", "isibility", "fj", "v", "element", "selected", "ender", "lass", "expanded", "muq", "kk", "48", "found", "k", "invert", "msack", "muy", "tooltip", "tyles", "connect", "edges", "path", "segment", "fire", "bundle", "nabled", "location", "oops", "ollowers", "follower", "SHAPENODE", "STYLES", "segments", "generator", "us", "current", "GROUP", "PADDING", "group", "EXPANDED", "roup", "444", "ackground", "sync", "election", "alpha", "empty", "ocation", "initialize", "do", "it", "mqk", "ACCESSOR", "binding", "OFFSET", "RENDER", "ALPHA", "blur", "shape", "dash", "FILL", "gradient", "OUTLINE", "cap", "LAYOUT", "PATH", "by", "BACKGROUND", "DASH", "INDEX", "ADJUST", "adjust", "LABEL", "ROTATE", "POSITION", "VISIBLE", "family", "ALIGN", "align", "ROTATABLE", "STROKE", "BUNDLE", "ANCHOR", "gap", "LOOPED", "EXTAND", "looped", "extand", "control", "point", "percent", "corner", "at", "FROM", "op", "lend", "31", "check", "ody", "60", "rrow", "AT", "utline", "ill", "abel", "inding", "init", "alidate", "BOUNDS", "GROW", "grow", "msody", "muw", "easured", "rom", "ZIGZAG", "editable", "eference", "msb", "555555", "GAP", "075", "bc", "2898", "onresize", "ondrop", "ondragover", "ransfer", "rop", "drop", "ction", "msq", "properties", "reated", "ELEMENT", "CREATED", "droppable", "movable", "selectable", "resizable", "linkable", "can", "ink", "limited", "muhecking", "ocal", "ater", "pan", "focus", "unselect", "elect", "ovable", "ilter", "ustom", "html", "inner", "elete", "lements", "REMOVED", "UIC", "dit", "allow", "an", "agent", "+", "delayed", "endering", "DELAYED", "RENDERING", "efresh", "MIN", "msl", "CIRCLE", "_$", "10", "opacity", "s", "ease", "transition", "cubic", "visibility", "msottom", "ar", "margin", "; ", "box", "sizing", ": #", "120", ");", ", .", "nertia", "msj", "oth", "drawable", "ZOOM", "ANIMATE", "trong", "pause", "speed", "TX", "TY", "duration", "ANIMATION", "INTERACTION", "HANDLER", "TOUCH", "DESKTOP", "fb", "rawable", "raw", "escapable", "lose", "finish", "responded", "MOVE", "reate", "cursor", "imple", "EDITOR", "SUBMIT", "WHEN", "LOST", "FOCUS", "textarea", "ditor", "solid", " #", "08", "oninput", "onkeypress", "key", "hen", "diting", "ditable", "up", "ouble", "verview", "enter", "export", "title", "ragging", "MOVING", "ith", "END", "PAN", "START", "lr", "isting", "editting", "mouse", "ressed", "muan", "ontrol", "555", "mqx", "RECTANGLE", "16", "SELECT", "electable", "BETWEEN", "popupmenu", "hide", "nwse", "ns", "ew", "255", "FF", "andle", "ength", "insets", "esizable", "otatable", "msg", "RESIZE", "ROTATING", "esize", "un", "TOOLTIP", "DURATION", "ooltip", "FFFFCA", "msu", "mus", "<", "br", ">", "ontent", "mqa", "delete", "uration", "elay", "mss", "heel", "oom", "moving", "created", "removed", "RESIZING", "resizing", "rotating", "between", "js", "nstances", "VIEW", "view", "ZOOMIN", "zoomin", "ZOOMOUT", "zoomout", "CREATE", "SIMPLE", "simple", "DEFAULT", "xport", "ectangle", "ight", "ayouter", "animate", "animation", "locations", "update", "ocations", "DIRECTION", "even", "two", "side", "EVEN", "TWO", "SIDE", "orizontal", "irection", "ayoutable", "HG", "root", "undirected", "mqnchor", "ez", "DY", "DX", "inherited", "mqm", "mqs", "muz", "oving", "timer", "ax", "terations", "nodes", "onstop", "unning", "reset", "ngle", "alloon", "proportional", "regular", "variable", "ANGLE", "SPACING", "PROPORTIONAL", "REGULAR", "UNIFORM", "layouter", "pacing", "ind", "indable", "ositive", "rder", "stack", "pop", "dx", "quads", "mass", "nternal", "attractive", "muo", "elastic", "ass", "lasticity", "nbody", "orce", "repulsion", "pring", "mqnimate", "eb", "onfinish", "opo", "epth", "irst", "earch", "IE", "pera", "ebkit", "ecko", "irefox", "afari", "hrome", "ac", "onsts", "ree", "unee", "beta", "iagramming", "omponents", "23", "11", "2016"];
    /*
    !function () {
        debugger;
        var t = "65a1b7e7416f5f5d08921dba7d4cebfa622f3a9cb4ff7b7bcb7a00e8c541102d2a57ec36e934d60a0a1c50f8b5a99a3f93f243efba80409626778b037d62a5714752dfffad92409b17b39957f5b5bbc89d0494e85c3b89cd212b427ecb7acb8b6f15dacae9e41ddef8057314172935be0e62cb22017bfb5eabcedd275dfc35f7bab05e05dac78c6c90f135cfe182ce5da475719a832b1bba2123b40911dba0ec7f8d55c89446369770758d8d95f1b0d7323e489dbdb1b911fab69cbeee50253fa49628d80c2e9203f392790ac68f3f1930fd6a921447c7c9ce140285d8790ae2a71ba71394b1d55a9b9f1902b232fd71435b277a8458d98fbb14fd8178f3ca1e4a42d05b1312fa29aa8e081700ec5763d140fceb585b005a98aa54e4e1f1de271e275835494eb44a317d77ce03ce90dc8093af11f4c413bdc57ebbc9288568ca4ecbfbb64726ad58a966d1d65f3c26d92768c7f089b109cc8797f313996501b18dc5cf323984ffe763b8d64dac57d6a3ad802f8b4dcd3a4d04b2e90f1a66bdd9879daa3e9b1e889bb54cff377b645ceb99010ba5d2ef65bd819bbebc5adb40b8d5a069fbbca752afbec9ab5bee3587617ba0d3ee853449b5e85c1287db066cf3fbdf34f61dbea8a9b49dfe926ad060e5cd6fe2d9bc1ceaa5293f58f833fd8c570e041787ba3d4bb93a1f01f3e0a135e18e47da58865d5683b98aae3c26e1c259a9289dc9e800a086e37c9483279520d7adc058a836a9fa9519bf176b62da8f4920d27a2798a520961516f2e15eb86210860da69acfec41b2b874d11d8983d87ab84bd2cef1d54ffe35dfbd01d958665952973cd08cb819550bb684e7b39dbf65cbb9892ddb0a64f5f7150d60ed772296f07d10a93e63bfb817955cf1735c781d89f837576f81a23dde94bad3df2ed93e431f24197c8cecc2fe625b18c3fca8fdecda799273c90dd615dd84240a60b799da19993892085ed04587d8ac446b050db5593df11743544bb6d8b885cecbde1654504e07d89bae8df35c915d3f23663c579ed082e53219bce809666b90fd3b5a0b493d03e1aa326ced9f91854df111cc217c10bb07f5cefc2bee8051424c4f36132d5d79372db204c6cb6ba14cd070d59ea494ae135dd2bbfa02b9b0b93cf4796ef699a014b846c395722012eeba812f946903be2fae3a509ad89ab47b459ff6cc53484d196fa53a2bd0b1b8d28cad1e0043cd2dca48732be73f7e10260b5d69fe835a3c3719bc81e01488684737883e46ce90f75576290db0e74b84a61af91369f58a57817470de01811594b479da86b9cac9e35b53a2d742a5523de070ce036a7526ef18fbdfa46e9b71dcb5a687fd77d6ec68b53b42771376578f45417f80d8a5f7630224e01bc0472658b328234700eb79f8b4784fb28bc45a467b588442d34fbdfdf99892a4a3cef67a50b278214ee49aa0bd4badd090a2f1fb622234306eb5b64a076bcbde85d5d07516d5f3408210cbbc781dbf0ba336f6e5ce7819619ebf3bcc6eee4dcb4035e48b82776041a70a40192dd84162a3bbaa1465ae0874a5d1e41f5feba5ad6f7121d81129d8166a4f9b243048421f312f922331cc7330d03af52b7d8cfd19ce1b1d8325036547991c8ef772b4d9e060831a07846e01f0f8dbfa5846cda4aad3e13bb2c3431c646c8614b4b2d983b6879099726cf49d12b710b0c3db718743b79aea22deec4584632cd147c2091f0ba681b8970a04337f47b463e6bbc0bf9dd749e2645b24f3e4623a45ec5b721db8f78dce2b9ba7821d9ab92bd4b223687f1edf71c473de7e8ede453db4e2ca4a56e188ad375fdc4dd6f059955afd42e552b63c1c516cff83262f72ea919f683299284901128f7a6ecefd5059254d0fbc59dadfeb684f755e0cefc35d55b4c512b48e8e41e398aa8bd6a25431c8211666c73baac13a8e6a4d483e3de9077bba0d29828632c2a7d19c4f0821a7ec1090edcadcfd3385940d7569543189f84829bb7ac30b675750b68b5c540eff4f123cc3f9893dd8868d0241bddd200c27594748111e987968c734677236b9602fe0c2d5b2a958825716d199e139c25e407182be81d4fe0f8907a16fdad00c424c9a4f1435de38c030e9313b7a609880034312b7ce3f34b43c94a9fcf9bbe5bcf475258cd2cc3e7c71bbe714598007966eeb46484c41c8ffd4d5e19929c5a55ae9794c1820fb984cae65f540bd0cbae95a1cd5e0ac1738001075f3679d779cecf5468f5b691333a66d897fd94a652e9b4d5956842d78725299e9fb160327790f5d6ca18faa02afcdced58d0ddc644597fd51c45d595d78bc67f5f02e926c96d0820347d4c4f1e53f5ad168cc25ca8068c889c1299665742eb62572048047c76edca37bb8b8139e77f15aee373ac153f0c3cef1602d8beaa4f05272f2a30b511c5162d46809a4a549cf3f36891fac4c05938a355a3d1ccf269e89347ee8b34972bd74f4176f53b27b8caa5f73c890814383375bb16efe42b1c581eaa25cb6d5922761153b3de1547c7106698a9d2058aec4954e80e9d16457624b12ac6e72240f52d981acaed195f372a9b2dc71cc2d25267034a9b23259dff5e4bd2d1f4a42d68f6d7f63bae60b56a93c0620eef42005986a804ce84e16419c45c6f54d61fe3d93bf5531846d116b80f55a667a17aa33dbbf947266d7e7ccc1d4bd8c53bdec7ad2db674a375c4a10ca9226f4a38847445fa8080d16263fa76719f8faf259c8a05cbc8f26b30350a1e2bf71697538a09d122147cc2945773cde6d27224f5ce596bbe73c3b41edc899a510bc4f1414fe18031a7eddcf3ac1a3d16e00f43d3075b7ff98121f9df5021ecb765c718970660d1043d886608932abf7ecbe2f675437f53f326902f68410a4db13eefbb451d51db2d3ccd97e3b039dfeca96a863e1e0150876591c42df9fab0a812fdeac2bb66fc7c1a64970a68e1d18d79f235230c5b0cbdcd85d00e30376140f6ab79a92f186e5ed0be75bc1dcf815156a835141a52a1560851468cf237cbe2b44777e2c021e26557622440ae0909495522232c75d07aaa1caa2e001217032175884665f627c0ab9dc1a5d812b3d7efc8282fb3ce3edc6f60ae14cb735f8ad8ec07a5cb6a71c07ee1346ac53abb88c598901ee7976f865e0fcb3d6beacc92276e2d94503aff8cf91ec097b05229b8370e81b50e878f80d3e2f9ffd881cdeb1ad352a17a61c7fda2dc8ef941eb454e464b2e2f7fb6f815e6f7251a3124d1364bf4433b911fab670ec83c1603a52264e3b12a82850efc6368a803625bec8468cccbe0fe7b34981695f847d875c5090c9e5cb76c9810676b171a8f8c04751f847dce1eb13d7fc6b8f15773dab7efc9951cac5eaba26478a91cdb5cb6c06fca971adf39400f341bed45b39e05ab443c20170077772c0c53cccb5722058f0248e383abcc4bed4cd99f71d6a7c1c6b7daf0d99748552b11da35378634ee0744e69c8418e529ee290c4dffbc50f9e35a9a44ecde6375d5a54fedffcd5098b23d83cd52348616fc2468bc59a323e8417b8636955d21eb5716d9e92e59b9bf57a917b633fcb5462a2aa8843b8f96c7b220b0199c41a28ea61add12c4df985d14c5382aa72e856f26aeea5b805f92a8276c6b47d6b38e5be71442b7994fe51aaf052b9e40c2cd8c20e65f84cf5155f356c279cf30fa268247f0e8b39e0f920c4eb8d2cec20149ca9ba520d9d1d31c42bed30963e2a97576c1767f2a46961b5677cb8f2b1bba78f501c9a9a426b011c5d0616690ced101b9d06aee80d320abd91e27792b42d075def5944590f8b766f2e7cb336ad0406911e7198d449ef66cced34d3f1592f73bd1a7a020633584e492611dc89eff733b68f5bf3b9a671f90a3501b0bf7f3e4d933fb1de3cf46d478053ce919730bf32a1c5c7775c9c336e5e4e3b4032249282847ccdfa334eb708d80e172143d6b9da867c1ff2dacf580d7ddcc8d8d3c46bd3b2890269cb62c91523807760d32704953ee64780b2bc76c66e2a5781569442c5ac486b4d852b744791ba4197bafd913b15fbc0bcd752c3cafd27f31f80bf7ff75cb26dc7a08232d13b2f3f76a10b4ee66c3f68d7908fc8c3815ca61a0d85367fcc6c850df4e7c3339a45e69f13a49e187015ab9c9219e7b102930292216dee044a2a89eabd61fad14bbd547859afa13a4741dc20937758c0b81bf544adc9a9dd179a86a6db656a8cc4f89085722c02d56130d4d0c6470d9942a96753e383eae793a3e700a80755d74d63a1394a6ef793a87836d447f1c8bf2a39e493e8cdf91dfa992bce2673a8075e13cd765d54cad19562e5c64901a010939608f983a03b650f4de40e96765a829ac5a7e06895a6f59901e859ef9abd30d814902f2062e4f92a2ee4e14494fcb93ee46556456dc1100f5fc96d359f92ffabaa3acc34975f8043775ecc55259652252878e2acda2b2d3b7760aef2be4fd924e543c1528ada28a154e9bb01bb64a9d9ec1e3a1b444b19fbdcac11dff068d76e11bf24adcb47c832afa7f792a0616a4253a07068726dc7797796ac808e0b78bda602ed4842056ddc04cf90ae44a1f2fcb10315714960cc819caeb3f8f7213a963c4a3985e34fcaa35ac26bb5c0eba8e74aa723afbe03352f51ff4730ceabf3fce443d619d7f8a9e1bb6b13992499cdf99651eb47daae2dfc9c6e6c5b6b89c746af3c7a1890128bf88434fac560e8e6e0f84508d606793a096c3e5f4f16f9acb69caf1af9fffda86df774c8bafed525c2c6758c2fa3b70e5f9125bb5832cad38f3452a4a89dc714034a388b0b6de70ca711cd4155f4cd70f88489cd4801b7962611bf3553db5562851c1fedf662cf53441b56599a5bd6c14ea89441cfcd20d8c49d70f9f1c6a7bbe9fbaab3017da41494fbe57dd81dd2f67b60a1895728c9f29b58b1ba1bf4869a69d79d9d5b5d5a49c9b4fa7fb3ddaaa202ec0ef3ba9e1dff393a87b12151a322d417d16cbf33facbab539924d54fd08445b6d16a4faefd1835112cdd801501ac84c5c3e0539bef77d0f67c083839568e2797157298ca9662e0468922b8822157f193975b64991bf02c20d995fe901c1cfb91cac192b6820c5d3cadeb3707752fdb25ee2dc40b00b408d97fdb41446a52bffa463223a472e2ff1535ccf7ea8380239ab8d344e9b6e08effd1bc7d2c6b855e9d26454cbd72d4a6a901690a9518b4666de3583ee8309fb5ab5ab55e7e5cd02686678fb7f0d130bafabf18235c8c3eb3c958bae0746177c5642e642251aa8f0dad5d397c1dc78389503ac8680985c510fd96f171da071d0088ee4d609a6eb166fddb4e0fbfcc52528fe2c01c91523ebbe259514166d8ceb88a7139db4dc2c35fd295c159cd762c7015d54cc52b8c087a5752dde3d26167a3ebd73dede006af9f3ce99e4ea67c8fc25a726f754407198ea06e7fcc2c7717a182c91273a244d6daf8394560bf8309ad533cce6d0daa4c1f0af42ad087f07b2b7b28dd8c03baa8fe8f4dab30b1d6030c976407ced6c326aa685558dbb3d0b7450959361db172c952a2b26bd980db8768da361b6a89b9eefa174d30155d24ea5c866d997e94bd16bb27d886482bc482698ff4ba7d3234b25707a7ac2b73c885b9717f275d631f6e92055eb0916f9f6937c5e9c1e46447ad0bf24dfd4f864f6c9b42527e01f2d3e35dff5377c0bc576be6286dacd51db9604af16f5560b41567a779fef9394837bd15bfbfe2d60caa5873f85374c684bb016ab4fac4a92257cde25d7f1a51ce187b5e07e3848382320593c01d647f3f5b7e6d391b02b37d615f67d5a150c5c54b2a22644c1748278899d94a3c65f60a343a27bdc99bccf566e3c3d1f1a0cf90a3495754b5415669c385d6adf890980c69f9620917b1db4ebc1296321908ffc126f6791787eab4498b39a3a7800e875feb6cc2f9e6e12379b37d8025bd9b2b68e7a57660ece17a4413d066bb4e7e79ba1e12fa6d7953e85c8a0b4e6ca927fa9f6aa795981974921e2b5640c7fd9576abba82e359951a7781a2539a7dec47f851cc764237895d5a94c0656f1de2fcfbe175f6f42fc4b602cd50f2c92a01a4e173497fcd2dfbd1077d0e67306704a024db5c85839ebc20835d85fef783eb4381157567d87fadb92c7161a529cb23a598d93a19a5230893944461538287d3dedbdaaa75cca3aa635e3e019685f013fb59bea82e5cec0579f352683ef394b1291e1d3de9a205e4fd12a82bb4274e8bb328f6fed05fb384ab0f45b6f20d5dafd4fb9decf6023fce03361b1bbbac2c2d828dee57b3fa994a7b17f463a33956cb6f061ee251bc839f092cbd458cf26918e9aafd9c2593f083afee01fce29c0942742a82589e830511f8ce00eab59049710401d6205d4cb88b3068bf75fce95595a6f93ff4da6e86c2370ee960d30373c926af85557872c5571a1f724c1f2de9bb3156d67337bedba501acb87dde45a3d1d5abe687fc349952f468a26e4a1998a6c85902ddda75efd3555aeaa5e7ac643d776c731810786a8ab33fb102be0ea4575c0b939c7f62cd0a6662edba845d281544339d5210e54c9154f41ebd0f652ea59f5a5e0f284935f924cade4499cd644ef878c6d42423ca90cad1cbf91f3d0f1fb8e45ca51317174092996dc345b4d5139aa94cbf46969e52cf702f62229499da55a413eccc011edafd43f0df7a3b01315bf5038773ea9340fa0f62ca77720d917b53b25694952f232cd04240eb3b20e63605b5a159d111f2910c8fbf9df9f8ab50350ad6c89be969a573caa12cb4b3cdd806a5a300eee4304b87af034eb5c0015927362b5c019a4d995a451fc6b69e335caa3f10c9cb32dcb45732546af06e2616c40932430fdfc2c8352bc5f6fed181382328148454d43da8603629e175585f9e62d6c25a14b59fdfd6ca0e1ac7e6c5e0ce721503cc44bd8d3a4db6ffcac98078f5cd9f42912a76d59326a086e6bdc85d960bb29b2f19cfa0e9d01d0eac1332f55570931c826957c1b65aebe078b116e47fd5ae9c58749eca8708399f43ee7c141c83776a83dbdccddd4217acd9f6b8eca4af2ccce9742d7ca3e756cfe0202563cfb943fdeaaeb0f3ea1bf3d4b5a53c822f92a72f955cd08e4baf8f56abdda1a358ebabfa3f14c6c5e6b9b6f1079192c3b03a8293200ee6a03d17f59c000f3ef0d28743cc4384abcadae697d276960cb78020fa15429f2bf5e25fd02a4091edcf71c2729e3cb97427ec779777d4ebe590ba6d771e2cab80998f2a18bfab477dbd4bffbbe1ebca03133e71fb957196a939adbe072e243253cbbe1aab7486df41f27ef06b5cce31fd5b025c702b8aaa019d8d7bd5f947829aa0f88376d3cbd9ca272f691e0ab61b2e2bbf6e5b913e959d9c998a7187c6af7f3da0f57d5416d31da7d81fd32b58ba3062949364e4f9445904a4d1c1a75dc5b9c11d3caaf5ebd4e6c710ac12dec8f89eec89cdecc47f66bd4e6625b8b7db6465f6760dfa14f39617f5b50dd56c4fbc0901feac3b35314525bd036d212459150fb26737f6222c181529d11ff2d7a165a858fe5382f972761108efb5e749795dfaf79a4998a2b386fa08ae7b3dc804b6b037f50fea566dad29f2e697ef7bab77421f952c58d345666360ed6fe46da4fc623866be66a647269ec3c5f89fa15e290441af3d004008c11953da0e67f655897eadf8525ff3aea86d7f50053f244fc8a1810ea1c640d80bb0c37e1c5734153beb9543b6246b0742708155794f69f258dfdfcfcbcb0a8b3e36e8ec2893242b0d5afc20cc5060b96e9d2d806ae6e12758846e44beb01a43179b183e70f557c24de7b77ff86c2bb3311f7442b5f27e736dbae930ee5c29bfc693575205ba27aa925a28006c1a34b9c337e106b21ce7df679de0a24580c2db1a4a11df516da270f21cf94b35d5f5a4efe5953d0eb7455994b1a62d38811ca6912f00d23c726a47983f5a000d9b09b402d0d9c983edbdc654fd8b17c5b86efce0903f83c57e4c09fc85cfa446ef4a18dc0adadbaf08b727f4c3cda0df069dbf32f01ab99bf70bf5d0d287ac33416e56f35dd8dd672ade0ef76ac01577bcd80fcf5cfbcd9e2348ff65e58ee9ed3c62760909dccb21c9ef3d6fccc46c5174849f90f0c502f85da49fd1fd5f05d10495fc08dad52ee328397b861c86a8a69945bb384e86f32ca703e6d38cfc1d23041ba3e299c0ea2d1c2c22ff9f4bcefb3c51b7a14d2c90c55aab15d2eeab3ae77e20d86c7b60f18d82bbe395f4bbc9e99e42d54d95972c38aa2aad5518d972b46934220571654e1d81896a6da16333eaf082f087e47f6785deaae33d2d5bd77744a4aff1abcd923df104af44f990408061be9a930915d955ef59f15fcff34beb6ff7980f2d8924544006e8d168a7aea464dde9e51d76043d7291cfc385432b034eae13c80809e33dcff21081313ba9c53f466da6e2b6adcf0928eb0fc2083522da1c40bb6daae2de3ab0ad438fb99945b40ccfa42ed4829eebc64cc97781e38d315b51166c13320aca2b5e865620a1b7fc5c95d10423d883809bb617b1a544032286fe051438efd0e5108cf6bb9494d1d0ad180cbc42cd5aacf86eac20562eb57eaa11f040685a148d06f9be1883f9138aea663880e2292ac65fa187819100fb113d9c74e9cbdc37e0ced65d92e5b451aa3caa3408a794909ef8cac56b3bcc02e848bc00559627da42d358891233cab8818175628ae96e5e8ad2a7568afda46d246a68414eb8eb49ebc42bb9a45de10bfdda893d9d9bfc6ff5bfd4c3631949a01fba39e742e7c4426cf6ce6302dad1b394411a7811c64e05bfbbf9d190feb687fb0a27e27a2b3ad8dd87f225952178536277e8d0f15b57e8c19288ba0a8971909050d11523ef5f8a0a4a7e9267ca2fc6f456a4ebadd7eac3fbfe17b261ea413959a032855cfd8768f280706eb8dabd0d3bf3c5ba2ba0722cb46d7ca78e08dfb914d2ca0e3c4cccff4c46b3f87ca41b6ea10252117e7902df8635e8429d2a98bec0a918f2040439dc14c9116dc6150d6aac8927ff124edcdabe0a41558b0a21a595fa7b312647514d8043c6ae3b9d251430f45837bc23b3e22ddfc8e8d191aa7c7dff175deab38a686afd339758df43051fbe616c83503ea21769b008e1fc188de94f7c383b5aa1783ab66e0da2c5ca9ec6c9d5d8032df918818a04a94a3b61067083ea8478a8ae3ec740dbd4ecf4869d973587919c64e19aca1026075ae0b0cb1b07dc938c0c90d444b63ab881002b7d80d0e72f4f723125e8fcc6b8155591fa6bceff181ae3e098cdcdae5ceb942b1b075de71cfe2d4e08b97a3fbc590593edc9173a4ac32c17ae11c863bf8d73c7f1941b9047fc78414dd04029bbf11378eecccb89e843bed4138d305961bf57a650bf4dd5986b59df261f387013ea5dc237446e85a9da4b8ab9c18982d0ca335f1f94d575b72aee83ad1326ccd7a436a70182c6bd5ba07ddb42c9b68c53a61f2297e12371b20f5096a86ddbf1b191b5fcd0ef0a3c7ecb8bf38fccb4904de9349f85586c1f5ce29328dac8670fb4b19b4ebebe63efc450ad9d19db96aaee5c45e55f685c79faa71ab7e94b43f8d6119be32f0fe93e99a8f1a92985a8bdd36148262a2b50d00e9eeb5518b62b2d913684f10c286309116de8817efb16f4fb6181e8febd19e151c1436599d59c5d403cc456cea8fc5833073d074d767c075c3e4c629896a0c0709e5bcdc7c2dacf00923b42b017acc7d2f113386d075f90560ff28f3d029d50e41e4b4778277707f596d3205f04e3e94711f431f226664b81dd378cd905b9c26be8112d385a8ebbf6d4c05335f5b61bef5b85c1e580c364ec065ed220775160a68d96c434263cae7705b988670268f78a7418bb885da20ec3a921d6e2a596da646408b00f17b8501268f0b3b82ef316d9781afa7154d21c795f6c49b4aeaede67364901c19b1a1ea5c6074ba39038d993c2d486409fbf5cb06ad1755c374835d7a46243ae9e600ea0fd3d35c08fc642e15447df56d51463d6620f8305a658487abe5757715b5b91a2d73b4150554b634840fa23efbf00d44e73ecdff5e3170ac88e2a15381955505e70b3a596af92cd04475cf01f526321ac2d60bd0c450c1d21f8f0f236851bd13b4e28a8dcc8be7db4313144c02d556135010cd66f874f6ade93c3d5e5ac4535cef4d021672670698edafe79843137fe29c66e3bcf3a8af52a3787ff6d84601bbe77061506a552f0922269088a8718b1b33a3ebf97d3c8ffc391d88f96d85fc80eedd7af21ade95146a5a609da7a6c63bb0ba97db449a13d32cc7e45fc0e41164fd14d0431e7a8283c778952ce919ee96880013d0436c7cede41e820e7c5b0871e7b6e96f507aa24764655df9a3a92d79d2162f96328aaaab3f549e73d2db61b8758d7f579054f95dad315e4d73364c1070e3bcafec6ab1401466f6e56a9173f0fdfe96547dc261e144a8053472114a345ce6cd4b257367f59729b636467889b2180c898a25878fe108a7ab41491b1be5cd75aa7fa61488e5eef70be62a896362b6ea5fae69f826267f9af08ab8a9802bedab717090555326e2cdec7e125fd309668a5cb93290d4db1af18eb28d9912d459d8df0b11129e30c019fad63e9e2a6ff4f2dccfc1c3ce29db099d929f7265fab8a7745f86c32974187ba6ce6cd5a4022ee830138b953ced63aea0e46a9ac397478acf3a537509337e16cc2f56398348460db3203b011b0d993c1194eda0007a9d802c33460fc7f64950f8e7fca30fc0abab83926cbdb605ab6f61fdac75b36f6755717e9b15affb580409fcd715aac4b8eb06b72d34bc9b084d93ebc0f3c4dcb2206fc4f902fe3750e82c93a3b1ccddb5212d5998db08800a732d1445c355fe33eb740ebc5b7a19a6c6c44ab3d99e37894728b95b9599c729caae80c4b37aa4a44ce69bfc62655c58b8552fe9bdb84df5a897c47b0d264385469ecb0c9083f923b517445f9702d05a5754e9d36072fcac27412b32407cb0fa0b18ff0ac9d9af25c12ea30e0dd70d5a6c2c27304cf161e179154f6b2d00aba1c54ffef2236c55bc1b4ca1eef4d21556256671960c8a5eb25552ba9c0adaf8cd6bfed5a916faaa9a0737fc28b47c85c54529b3188a47839192c4c8ece80979580b6aa1db91dabae6eeb5e8219898f0c450f5f172a3904be508cdc7c71926db4ed97d5045490aef727b9a643f2a1e081f4fe3368e8eb99c34e0a9f1383f78a44f83adf17e7443a8c8ae99d1a26747e31cec7c78bb5316445d6695fcd80b49b88bc8a68fa611ac4d661cef19cbb81ccd326828f0313ad47f935995a892fc23641a3753d3d94d111ee3f4d0372aa93ea3bada9a8f8b7312f38c94290756f34cad18aa2b59f5605b56c451e497482f914d4d09dec2c798f0c519b8064b5698382eef9df76ffdb6ea1054ccde581f2299a3069f5daef544dbcfb1fa0407aa1bec9a9c5297762b156f49ef1d1ee227f485dbdc6e0adae9ca8080d1c6e17f608b1f399fc6cc3e36c5e1dde2b9a13185a4beb949d8ebb50e2fc8351ae7dfb21d26f27d7091ef282bd8d7624898795ccd517a81ea658c3a65c4a303fdb052daeb293bd89888d234aeb281cded5d79753c126ad61a1ac2a7673f8408a01609c13262efc21edd2c7fbdb3648a94bbc190f41e31d3b983e8f57b96edb33a42e1b393c58b79f5d86575b0a2d098561fa311d9205864b9a298e3a22bd24096efc000d605ed79f1299ca3ad47a83edae6ae5cd647f73772d78be61f12fa9e9e4c38ac21a5cd64c2f18ceacf53985430e3e84e1738cc8ab26f22e74b12096548ca40882201b6f7978ed5e76349477bba0c25db2b007a5d5da9f022fe16ba9959dd36030d03dd5c5dd13300f92811d27dd5f7b4f7a8acd1d9395728de341e70990a3585a2866681d4c52dd343c255a12cc67786d15e044107c791b6c5bb2dcce0f086db215a12c4cf98f6930c831f2caa3177ddd097cf32f883a0eea762c9a37128d73dc1b57ac7b9bf8ebe7a6b2ef9faaaa215b67d3407415f5e59c5fe0be026d07713932dc2ff50434c497f4661103d4df4d0193118453b4ebc6e5de9eeae1bb759adb690bcbf1bef602ced5dc04406321c0b50cfabe18ddd233431c4656fc03105a2fabca9b6a31e8e14b703ebc8b43548de348c3e7d8339c6855153a161afc9e796d0dfc7994a6a6d31cfc8881cd371a776d853d18f899cbe2b5b2c2c28411710a8f1a5a741c54dcecdfbe231d53855e12989f36fffe5573a5dc4f34d741fdf81964bb3a0cdef3fc5cc67c2ff024dd8799c6eabc966d67da94d3de1fa01c0fdd07158530ff1dafe24ae5264a7bc48ea3919835abaec5fb54daffafcb333f25da0189e7d9fe3f6628cb6a9d3c91743281ed141d8daa7a42ac25c5d6aac33a3f83bae31c4fc75c40b96465cd4ec277dd4523d20f8be16ab1f15b118c1d61838df83882510c3ac7a4ea49057f56419ddb63624f5bae276008ea0e1b8435c94259377ce0b970a9605aa5af6306cc6f3127ae6910061c1aa4ea3c44093f5c17ff87629cf44f6efc6d10e14dfe3958ec067cc61eb68a6499890c6ca2a0a77c3f0139b28e1be283ded4977b2a14964c93d0e9b1797b414d6199096424bd4c05f655b946fa3134e8d44e7c38435687ebd04f59427e2a42b7d6de0f8fcc5701f35d6f02ed93f80d2717b7e1f207f41e96289dbc37c248ee90ba2a81236bc9a68475db2abd8e71c84ed37916f30c7441d27a5444c38f7629520cb9a71ac877803253a7852ab96d9e595b06ca98bdcbc1ebc9e3753f951b771d8d5b017908d11743248cd702c9e08aef4ca9ce9fa7d28bfc7fbeeb217b78ae011e39b248d02c5d7c108f741c5402c0db75e67c498a6a76e70407ad07011b06af49aa936fb643bc215c2785a9a3d3449f657ea6352bb4b1369879c8d0a70c3bacf70acdbb9392a14d253e2195291d88f07a6fb679c153770d24c9d67291a1d95e47af222451eb2d32046c8da21978d648b32fb187dcbbab8b3afb7e59d1e7861f23978a5ee188adfaee5781d5eb9a77b3c2068ee185bad293443eda351c78b6c6aa5bd80321a87885a21e896e88948a4822b7e0bfe176b0b08c2448376a1cff377802d964bf57857a77b36054a8e740c770302c303eecf9ae861a9b5349cd1754395c756d9171a0746e5154c9b146f8aff162736a2416cf9ff8ac4925de8a15a43dc673d1f211bb5ce05bb8ca02f609e2bf637704c91b9f64f4a2ff94abf5baf6470b766f949a8b9203336354d6c39675efc218b2b453d0511c5ccbdb0edb88955ea51fc1872f2f54a52f7f620432af358154bc23edfd032135b1e9ea363ebb330df9d57310742aa15a312e332b6d1fe100489e6fee15474f0315b2a1cea7bee420d26dd5e4e430d5e2053ba120a09706443d5c7deb7aecea13be0ff71e719f7bb0ebbf47808bc26cdf517a201c09b59631c814e7dfd0c0648fc52dcc7ad0a400a64635dc398cd83d168112987804a9b305e61ff2df071fe396204d9acd7b1b440e8e34df581e0459eacb0ba87c5ae9ffbdb0dbed7b27ee60c91e4b566e027eb39f7d394c6543d2594a078458756ef43bed451416c3afa95906739398d84cdf6552ab9446cede01f56137dd1d1551e64c50b33108e1c0e730ae8d341a65ba8ab8625be4baa11765110c70dc490f3ddb0e685a37cf345740c1c912781e98813f5665a104cb9171fe28432f8fd6d3db91257b970901b46ee141d91d6cc467b759487cf9bf7291fa6978dc6dacae2c49753059a64bf9385dcc20a7ebbf382c2f38f040755c2b683a4c5e7c53f58c615e61c3e2f435b8cb3f82c2c6dcb6e890e425b639dd159b297d6ecd938736827a4cc65c69abc9c93e4acf901616115363f42cde7543c20fdab3c3d4c04e9b893cfce6c51ecba3725efa90bbf01bd5e7723e85c0cfcf0bc37639fff62192c82f3a0a2a6225a1131397d493165e73e63ea903b9b7604b7e3f7fb9d3dc34f37067fc178f089134f38a3358bbe72013f22a75bada14bb5cc0ea8a920feda05d6a5ed5ab1eef988aeb6553405f397badea3ff79dd5635ca7a52302b2724e2d97bcf96e2d6a4ed800a75f7a50dfec08b52a735d65b6e06bef9f9f622ce7b413b0d6d20833a6f254d7864917e1247ab94fba091cbda36133543ca562e10dab45d9b5ad844f07517c7b717c7c0f7c13ac3ed78873958fbd4ff99f73952b05bcf6773a7cc3d1dbe023412c87a9f72181c3305885579b5e26913a1ac54ddd160f7107558130d31716cb9fa6eefb97b61ff80b732d35e644d53814af10c171430032d12a925382d905c34d5a003981bf1781b486e8cbe54993e5690544e8f7b46056ce0e343d1f27edbde41ccfb7feb0c4f744c4de1611e8541982f69b39450961826cce3a33f8efeecf3a9db3c1c68010b6085e7c11633803f21f3677b2262ed0e45213a256174ced7caed6aeefa1d52411b27574462cf8ffdc63f29288419282e27a5b55c855684e2475d3884fd5115b6f322ef2bffae9689f3f903db1c0a50da66fa3f0b973d508a7d8539d49cdbda23ec931cf2b3ad21eded07427b002b46b2e09e71cac25b61804d4049eba02c63fcb82e0733183f6b0bd2b42efdfab77fa1d1be9fcb2667d5bdc6a82df82cb972253e2933562eada73bbe8edd60419cef789abf85aae61a552e96daa4cb864b90f888b0983411ca0f612220c06adb5ea7f9b453d9eae87c6ea91e79bd685691a3e60f0f7de2135146fee4c8c9c9820e91bd89ecf528ff77f1f21ddc9b1bd3ba666c0dcb44eb99f0b7530e103d013e7a7604d3677cdb34e22bd6176c43785c0a22a56270b4a5784f98274ae8da5990bfb88db8eb9837bc9e97f49dcf3f10cb46d6df6088bcca1714b44e6291edf66fd3bef905060e7aa71633d148fdf13f718c66e930a5bd53c8ea0ec7fca0e9a517c8ab0cd53567bbe1444f8e7599130ca70f300750f6e749bad3b45d2a991fc92438833fea4d9715c777d960870ac8b2c0e7853262b3fdd545822df4b451a95ad4c3b97a0344b96f069ccc655e35e0868f6375b8d7881c609808c563319671d24a26b983b025ea2f43944279be274809cb0d25a9c3f47922408688362ba5d825c2c254cdf9474484719b902fb0a1863ba3b3c1f69ff77592ffed46c1591882adbab174d8036e55891399308339ec053c6c885ae7570172073fa1d43f492dbdd936d16a3e77c3553efe6b789c531dfb4cca030ff831fc2405ed7613104b7ad4a7c53edd426a19a72cd145f36799109516d45f0bdce2939b9405c40755dd25744af39ded119a3a2fc47f5b656d1ae3476ba5660da1078c9e179121ceaf568692c8ec7633b44747f233722bdb3f09f730a66d1cc2bb39d981afe63554bc395b8ef6e9459890c51343049d3be0ee67600b180e646a95d3b603436b1ed1b6b454eaccffd4befcf31847e06052298f99700ca3e87cb6e59ab0f2c2cd0a46ce2b0b28d990cc885519b5801d6750777b6de0ea0f9d89902f3fe977bc3c38adf7c712b4175eeb221a21015e657642db5aef21a3ab7da3bc2f12775ed9ab3823452f653da94729846e51ab186b58c72f847778204dd7fb331ab487d33fb4679de297b20c69dd8a8f074e42e76bbc30bcaed181109fa5451f96837e53a3472348300b04a56b821696d24cb4a45724654f3cf51c16ad2ac0e03618e9af83f17052fece702eedec698df2b0048a727ae30ef94dfbe6b34fea81dbcc0649f38e9dcffc909fbfb604d8441d3ff048a91ee"
        function decoding(message, key) {
            var keyCode = "";
            for (var i = 0; i < key.length; i++)
                keyCode += key.charCodeAt(i).toString();
            var s = Math.floor(keyCode.length / 5), // 向下取整
                h = parseInt(keyCode.charAt(s) + keyCode.charAt(2 * s) + keyCode.charAt(3 * s) + keyCode.charAt(4 * s) + keyCode.charAt(5 * s)),
                r = Math.round(key.length / 2), // 四舍五入
                a = Math.pow(2, 31) - 1, // 底数的指定次幂
                o = parseInt(message.substring(message.length - 8, message.length), 16),
                result = "";
            for (message = message.substring(0, message.length - 8), keyCode += o; keyCode.length > 10;)
                keyCode = (parseInt(keyCode.substring(0, 10)) + parseInt(keyCode.substring(10, keyCode.length))).toString();
            for (var i = 0; i < message.length; i += 2) {
                keyCode = (h * keyCode + r) % a;
                var code = parseInt(parseInt(message.substring(i, i + 2), 16) ^ Math.floor(keyCode / a * 255));
                result += String.fromCharCode(code);
            }
            return result
        }
        t = decoding(t, "QUNEE");
        Fh = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93)); // 91=[  93=]
    }();
    */
    
    var
        Gh = "hasChildren",
        qh = "length",
        zh = "children",
        Hh = "call",
        Yh = "slice",
        Uh = "splice",
        Wh = "concat",
        Xh = "ceil",
        Vh = "remove",
        Zh = "clone",
        Kh = "push",
        Jh = "indexOf",
        Qh = "object",
        tr = "prototype",
        ir = "superclass",
        nr = "apply",
        er = "super_",
        sr = "super",
        hr = "defineProperty",
        rr = "$",
        ar = "beforeEvent",
        or = "onEvent",
        fr = "readOnly",
        ur = "onSetting",
        cr = "bind",
        _r = "requestAnimationFrame",
        dr = "className",
        lr = "classList",
        vr = "getAttribute",
        br = "class",
        gr = "split",
        yr = " ",
        mr = "number",
        xr = "string",
        pr = "boolean",
        Er = "isArray",
        wr = "event",
        Tr = "preventDefault",
        Mr = "stopPropagation",
        kr = "cancelBubble",
        Or = "floor",
        Sr = "random",
        Ir = "rgba(",
        Ar = ",",
        Cr = "toFixed",
        Lr = ")",
        Pr = "#",
        Rr = "000000",
        Dr = "enumerable",
        Nr = "_",
        Br = "defineProperties",
        jr = ".",
        $r = "touches",
        Fr = "console",
        Gr = "trace",
        qr = "atan2",
        zr = "_sin",
        Hr = "bottom",
        Yr = "right",
        Ur = "fromString",
        Wr = "horizontalPosition",
        Xr = "verticalPosition",
        Vr = "onChildRemove",
        Zr = "replace",
        Kr = "ms-",
        Jr = "-",
        Qr = "toLowerCase",
        ta = "-ms-",
        ia = ":",
        na = ";",
        ea = "substring",
        sa = "insertRule",
        ha = "{",
        ra = "}",
        aa = "addRule",
        oa = "changedTouches",
        fa = "getBoundingClientRect",
        ua = "clientX",
        ca = "clientY",
        _a = "pageX",
        da = "pageXOffset",
        la = "pageYOffset",
        va = "pageY",
        ba = "_scope",
        ga = "_dragPoints",
        ya = "metaKey",
        ma = "ctrlKey",
        xa = "responseXML",
        pa = "'",
        Ea = "' XML format error.",
        wa = "' JSON format error.",
        Ta = "?",
        Ma = "__time=",
        ka = "open",
        Oa = "GET",
        Sa = "onreadystatechange",
        Ia = "readyState",
        Aa = "status",
        Ca = "' load error",
        La = "send",
        Pa = "width",
        Ra = "height",
        Da = "clear",
        Na = "addPoint",
        Ba = "ratio",
        ja = "style",
        $a = "px",
        Fa = "mozBackingStorePixelRatio",
        Ga = "msBackingStorePixelRatio",
        qa = "oBackingStorePixelRatio",
        za = "backingStorePixelRatio",
        Ha = "createElement",
        Ya = "canvas",
        Ua = "getContext",
        Wa = "2d",
        Xa = "setSize",
        Va = "FONT_SIZE",
        Za = "px ",
        Ka = "FONT_FAMILY",
        Ja = "save",
        Qa = "translate",
        to = "font",
        io = "textAlign",
        no = "textBaseline",
        eo = "middle",
        so = "\n",
        ho = "fillText",
        ro = "restore",
        ao = "measureText",
        oo = "getImageData",
        fo = "sqrt",
        uo = "_squareR",
        co = "_otherPoint",
        _o = "_j3Circle",
        lo = "getBounds",
        vo = "points",
        bo = "intersectsPoint",
        go = "round",
        yo = "setTransform",
        mo = "data",
        xo = "lineWidth",
        po = "isPointInStroke",
        Eo = "isPointInPath",
        wo = "lastPoint",
        To = "type",
        Mo = "rotate",
        ko = "_p2y",
        Oo = "_CCW",
        So = "_p1x",
        Io = "_p1y",
        Ao = "_mq1",
        Co = "_p2x",
        Lo = "$boundaryPoint",
        Po = "draw",
        Ro = "test",
        Do = "_msa",
        No = "_mq5",
        Bo = "IMAGE_HEIGHT",
        jo = "name",
        $o = "full.uniform",
        Fo = "padding",
        Go = "left",
        qo = "validate",
        zo = "_msd",
        Ho = "source",
        Yo = "draw image error - ",
        Uo = "(",
        Wo = "BLEND_MODE",
        Xo = "BLEND_MODE_MULTIPLY",
        Vo = "BLEND_MODE_DARKEN",
        Zo = "BLEND_MODE_LINEAR_BURN",
        Ko = "BLEND_MODE_LIGHTEN",
        Jo = "BLEND_MODE_SCREEN",
        Qo = "error",
        tf = "color error, [",
        nf = "]",
        ef = "BLEND_MODE_GRAY",
        sf = "putImageData",
        hf = "clearRect",
        rf = "scale",
        af = "_lsNO",
        of = "_mqe",
        ff = "$rotate",
        uf = "$offsetY",
        cf = "$rotatable",
        _f = "$_hostRotate",
        df = "$layoutByAnchorPoint",
        lf = "$invalidateSize",
        vf = "$invalidateAnchorPoint",
        bf = "setByRect",
        gf = "$padding",
        yf = "$border",
        mf = "showPointer",
        xf = "$pointerWidth",
        pf = "$anchorPosition",
        Ef = "_msackgroundGradientInvalidateFlag",
        wf = "_msackgroundGradient",
        Tf = "backgroundGradient",
        Mf = "_laShape",
        kf = "bounds",
        Of = "__m3Pointer",
        Sf = "$borderRadius",
        If = "_pointerX",
        Af = "$offsetX",
        Cf = "$pointerX",
        Lf = "_pointerY",
        Pf = "$pointerY",
        Rf = "layoutByPath",
        Df = "$data",
        Nf = "isEmpty",
        Bf = "_hostRotate",
        jf = "$invalidateRotate",
        $f = "lineDash",
        Ff = "setLineDash",
        Gf = "mozDash",
        qf = "webkitLineDash",
        zf = "mozDashOffset",
        Hf = "webkitLineDashOffset",
        Yf = "lineDashOffset",
        Uf = "transparencyGiven",
        Wf = "transparencyIndex",
        Xf = "delayTime",
        Vf = "disposalMethod",
        Zf = "topPos",
        Kf = "forEach",
        Jf = "leftPos",
        Qf = "overrideMimeType",
        tu = "onload",
        iu = "responseText",
        nu = "parse",
        eu = "onerror",
        su = "xhr",
        hu = "join",
        ru = "charCodeAt",
        au = "charAt",
        ou = "decodeU",
        fu = "omponent",
        uu = "qunee",
        cu = "lo",
        _u = "lh",
        du = "t",
        lu = "12",
        vu = "0.0.1",
        bu = "2",
        gu = "3",
        yu = "_msaseCanvas",
        mu = "render",
        xu = "equals",
        pu = "rect",
        Eu = "parent",
        wu = "toAgent",
        Tu = "_linkedNodes",
        Mu = "fromAgent",
        ku = "from",
        Ou = "isDescendantOf",
        Su = "accept",
        Iu = "setChildIndex",
        Au = "childrenCount",
        Cu = "roots",
        Lu = "setIndex",
        Pu = "isInvalid",
        Ru = "_mqv",
        Du = "forEachEdge",
        Nu = "$from",
        Bu = "forEachChild",
        ju = "quadTo",
        $u = "lineTo",
        Fu = "closePath",
        Gu = "moveTo",
        qu = "curveTo",
        zu = "register",
        Hu = "SHAPE_RECT",
        Yu = "SHAPE_ROUNDRECT",
        Uu = "SHAPE_STAR",
        Wu = "SHAPE_TRIANGLE",
        Xu = "SHAPE_PENTAGON",
        Vu = "SHAPE_DIAMOND",
        Zu = "SHAPE_HEART",
        Ku = "SHAPE_TRAPEZIUM",
        Ju = "SHAPE_RHOMBUS",
        Qu = "SHAPE_PARALLELOGRAM",
        tc = "SHAPE_CROSS",
        ic = "SHAPE_ARROW_STANDARD",
        nc = "SHAPE_ARROW_1",
        ec = "SHAPE_ARROW_2",
        sc = "SHAPE_ARROW_4",
        hc = "SHAPE_ARROW_5",
        rc = "SHAPE_ARROW_7",
        ac = "SHAPE_ARROW_8",
        oc = "SHAPE_ARROW_OPEN",
        fc = "$image",
        uc = "validateFlags",
        cc = "$invalidate",
        _c = "value",
        dc = "target",
        lc = "property",
        vc = "callback",
        bc = "PROPERTY_TYPE_CLIENT",
        gc = "PROPERTY_TYPE_STYLE",
        yc = "setStyle",
        mc = "getStyle",
        xc = "EDGE_EXTEND",
        pc = "EDGE_TYPE_ORTHOGONAL_HORIZONTAL",
        Ec = "EDGE_TYPE_HORIZONTAL_VERTICAL",
        wc = "EDGE_TYPE_EXTEND_LEFT",
        Tc = "EDGE_TYPE_EXTEND_RIGHT",
        Mc = "EDGE_TYPE_ELBOW_VERTICAL",
        kc = "EDGE_TYPE_ORTHOGONAL_VERTICAL",
        Oc = "EDGE_TYPE_VERTICAL_HORIZONTAL",
        Sc = "EDGE_TYPE_EXTEND_TOP",
        Ic = "EDGE_TYPE_EXTEND_BOTTOM",
        Ac = "EDGE_SPLIT_BY_PERCENT",
        Cc = "EDGE_TYPE_ELBOW",
        Lc = "EDGE_TYPE_ELBOW_HORIZONTAL",
        Pc = "NEGATIVE_INFINITY",
        Rc = "POSITIVE_INFINITY",
        Dc = "EDGE_CORNER",
        Nc = "EDGE_CORNER_NONE",
        Bc = "EDGE_CORNER_RADIUS",
        jc = "EDGE_CORNER_BEVEL",
        $c = "EDGE_CORNER_ROUND",
        Fc = "EDGE_CONTROL_POINT",
        Gc = "union",
        qc = "intersects",
        zc = "EDGE_TYPE_ORTHOGONAL",
        Hc = "getShape",
        Yc = "invalidTerminal",
        Uc = "hasPathSegments",
        Wc = "toDatas",
        Xc = "drawLoopedEdge",
        Vc = "drawEdge",
        Zc = "graph",
        Kc = "getUI",
        Jc = "edgeType",
        Qc = "bodyBounds",
        t_ = "busLayout",
        i_ = "angle",
        n_ = "toAtEdge",
        e_ = "contains",
        s_ = "hitTest",
        h_ = "LOOKING_EDGE_ENDPOINT_TOLERANCE",
        r_ = "perX",
        a_ = "enableSubNetwork",
        o_ = "div",
        f_ = "Q-Graph-Nav-Button",
        u_ = "img",
        c_ = "ontouchstart",
        __ = "onclick",
        d_ = "transform",
        l_ = "rotate(180deg)",
        v_ = "_img",
        b_ = "_navPane",
        g_ = "Q-Graph-Nav",
        y_ = "rgba(0, 0, 0, 0)",
        m_ = "hidden",
        x_ = "none",
        p_ = "relative",
        E_ = "_top",
        w_ = "100%",
        T_ = "NAVIGATION_IMAGE_TOP",
        M_ = "top",
        k_ = "_left",
        O_ = "NAVIGATION_IMAGE_LEFT",
        S_ = "0px",
        I_ = "lineJoin",
        A_ = "strokeStyle",
        C_ = "#FFF",
        L_ = "shadowColor",
        P_ = "#888",
        R_ = "stroke",
        D_ = "toDataURL",
        N_ = "drawImage",
        B_ = "hover",
        j_ = "_mq8",
        $_ = "clientHeight",
        F_ = "selectionModel",
        G_ = "graphModel",
        q_ = "isVisible",
        z_ = "image/png",
        H_ = "topCanvas",
        Y_ = "interactions",
        U_ = "defaultCursor",
        W_ = "default",
        X_ = "offsetWidth",
        V_ = "offsetHeight",
        Z_ = "fontStyle",
        K_ = "fontSize",
        J_ = "fontFamily",
        Q_ = "selectionStart",
        td = "selectionEnd",
        id = "undefined",
        nd = "selection",
        ed = "text",
        sd = "scrollX",
        hd = "scrollY",
        rd = "select",
        ad = "scrollTo",
        od = "handlerSize",
        fd = "nesw-resize",
        ud = "documentElement",
        cd = "Rect",
        _d = "interaction",
        dd = "kind",
        ld = "datas",
        vd = "appendNodeInfo",
        bd = "isLooped",
        gd = "edge",
        yd = "appendEdgeInfo",
        md = "minEnergyFunction",
        xd = "_marker",
        pd = "navigator",
        Ed = "userAgent",
        wd = "match",
        Td = "mozRequestAnimationFrame",
        Md = "oRequestAnimationFrame",
        kd = "msRequestAnimationFrame",
        Od = "cancelAnimationFrame",
        Sd = "webkitCancelAnimationFrame",
        Id = "mozCancelAnimationFrame",
        Ad = "msCancelAnimationFrame",
        Cd = "clearTimeout",
        Ld = "#333",
        Pd = "_fontStyle",
        Rd = "normal",
        Dd = "_fontChanged",
        Nd = "_fontSize",
        Bd = "_fontFamily",
        jd = "FONT_STYLE",
        $d = "getByIndex",
        Fd = "containsById",
        Gd = "' not exist",
        qd = "_mqi",
        zd = "removeById",
        Hd = "getById",
        Yd = "firstChild",
        Ud = "nodeType",
        Wd = "tagName",
        Xd = "nextSibling",
        Vd = "nextElementSibling",
        Zd = "toUpperCase",
        Kd = "Point(",
        Jd = ", ",
        Qd = "distance",
        tl = "_rest",
        il = "_muos",
        nl = "Size(",
        el = "intersectsRect",
        sl = "addRect",
        hl = "MAX_VALUE",
        rl = " , ",
        al = "intersection",
        ol = "sortName",
        fl = "l",
        ul = "c",
        cl = "r",
        _l = "m",
        dl = "b",
        ll = "LEFT_TOP",
        vl = "LEFT_MIDDLE",
        bl = "LEFT_BOTTOM",
        gl = "CENTER_TOP",
        yl = "CENTER_MIDDLE",
        ml = "CENTER_BOTTOM",
        xl = "RIGHT_MIDDLE",
        pl = "RIGHT_BOTTOM",
        El = "RIGHT_TOP",
        wl = "radius",
        Tl = "classify",
        Ml = "source: ",
        kl = ", type: ",
        Ol = ", kind: ",
        Sl = "propertyType",
        Il = "property.change",
        Al = ", propertyName: ",
        Cl = ", oldValue: ",
        Ll = "oldValue",
        Pl = ", value: ",
        Rl = "propertyName",
        Dl = "oldIndex",
        Nl = "getChildIndex",
        Bl = "child.add",
        jl = "child.remove",
        $l = "child",
        Fl = "child.index",
        Gl = "listener",
        ql = "events",
        zl = "scope",
        Hl = "listeners",
        Yl = "addListener",
        Ul = "list",
        Wl = "index",
        Xl = ", data: ",
        Vl = ", index: ",
        Zl = ", oldIndex: ",
        Kl = "KIND_ADD",
        Jl = "add",
        Ql = "KIND_REMOVE",
        tv = "index.change",
        iv = "_ms4",
        nv = "onParentChanged",
        ev = "onChildAdd",
        sv = "toChildren",
        hv = "onChildrenClear",
        rv = "_jy",
        av = "_fm",
        ov = "KIND_CLEAR",
        fv = "filter",
        uv = "listChangeDispatcher",
        cv = "selectionChangeDispatcher",
        _v = "_selectionModel",
        dv = "dataChangeDispatcher",
        lv = "beforeDataPropertyChange",
        vv = "onDataPropertyChanged",
        bv = "childIndexChangeDispatcher",
        gv = "$roots",
        yv = "_mueIndexFlag",
        mv = "disconnect",
        xv = "getEdges",
        pv = "removeChild",
        Ev = "parentChangeDispatcher",
        wv = "data '",
        Tv = "_msoxChangeListener",
        Mv = "head",
        kv = "Transform",
        Ov = "appendChild",
        Sv = "createTextNode",
        Iv = "text/css",
        Av = "qunee-styles",
        Cv = "sheet",
        Lv = ";\n",
        Pv = "handle",
        Rv = "addEventListener",
        Dv = "returnValue",
        Nv = "DOUBLE_CLICK_INTERVAL_TIME",
        Bv = "touchstart,touchmove,touchend,touchcancel",
        jv = "onmousewheel",
        $v = "DOMMouseScroll",
        Fv = "contextmenu,mousedown,mouseup,click,dblclick,mousemove,keydown,keyup,",
        Gv = ",touchstart,touchmove,touchend,touchcancel",
        qv = "TouchEvent",
        zv = "_muurrentItem",
        Hv = "_onWindowMouseMove",
        Yv = "_onWindowMouseUp",
        Uv = "__dragging",
        Wv = "mousemove",
        Xv = "mouseup",
        Vv = "removeEventListener",
        Zv = "timeStamp",
        Kv = "__mqction",
        Jv = "_mqction",
        Qv = "_toQEvent",
        tb = "_onEvent",
        ib = "on",
        nb = "__longPressTimer",
        eb = "_kcEvent",
        sb = "__muancelClick",
        hb = "onlongpress2",
        rb = "onlongpress",
        ab = "_muancelLongPressTimer",
        ob = "__onLongPressFunction",
        fb = "__fixTouchEvent",
        ub = "__touchCountChange",
        cb = "_onstart",
        _b = "__kcLongPress",
        db = "__kcMulTouchEvent",
        lb = "_scale",
        vb = "prevScale",
        bb = "startpinch",
        gb = "_kcdrag",
        yb = "_ondrag",
        mb = "__pinching",
        xb = "onpinch",
        pb = "endpinch",
        Eb = "_enddrag",
        wb = "_handleTouchEvent",
        Tb = "mousedown",
        Mb = "_onrelease",
        kb = "click",
        Ob = "dblclick",
        Sb = "contextmenu",
        Ib = "oncontextmenu",
        Ab = "wheelDelta",
        Cb = "detail",
        Lb = "delta",
        Pb = "_handler",
        Rb = "onmouseup",
        Db = "screenX",
        Nb = "screenY",
        Bb = "__mulickTimer",
        jb = "__dblclicked",
        $b = "ondblclick",
        Fb = "button",
        Gb = "onstart2",
        qb = "onstart",
        zb = "onrelease2",
        Hb = "onrelease",
        Yb = "startdrag2",
        Ub = "startdrag",
        Wb = "ondrag2",
        Xb = "ondrag",
        Vb = "getCurrentSpeed",
        Zb = "enddrag2",
        Kb = "enddrag",
        Jb = "_kaStatus",
        Qb = "getData",
        tg = "canvasPanel",
        ig = "getElementByMouseEvent",
        ng = "getUIByMouseEvent",
        eg = "_mhData",
        sg = "onElementRemoved",
        hg = "_iiListeners",
        rg = "onClear",
        ag = "_2gs",
        og = "_muustomInteractionListeners",
        fg = "_hsInteractions",
        ug = "__handleEvent",
        cg = "destroy",
        _g = "_hsInteraction",
        dg = "_kcY",
        lg = "startY",
        vg = "totalDeltaX",
        bg = "totalDeltaY",
        gg = "limitCount",
        yg = "-webkit-zoom-in",
        mg = "-webkit-zoom-out",
        xg = "-webkit-grab",
        pg = "-webkit-grabbing",
        Eg = "-moz-zoom-in",
        wg = "-moz-zoom-out",
        Tg = "-moz-grab",
        Mg = "-moz-grabbing",
        kg = "crosshair",
        Og = "move",
        Sg = "url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFVJREFUeNpi/P//PwMlgBGfAYyMIOn/jGQZANIMoskyAKYZGeAyiGgX4PIOSWGAzRBGUmMBw1CqGUBMlA1yA4gxhKhYwBnfpKQDqqREquRGYgBAgAEAD8h/4adTIzwAAAAASUVORK5CYII=) 8 8,crosshair",
        Ig = "bounceOut",
        Ag = "bounceIn",
        Cg = "_muallback",
        Lg = "_requestID",
        Pg = "_onStep",
        Rg = "_lo",
        Dg = "_msv",
        Ng = "0.0",
        Bg = "isTouchSupport",
        jg = "containsRect",
        $g = "Size",
        Fg = "Insets",
        Gg = "Event",
        qg = "PropertyChangeEvent",
        zg = "ListEvent",
        Hg = "Dispatcher",
        Yg = "Data",
        Ug = "DataModel",
        Wg = "IListener",
        Kg = "calculateDistance",
        Jg = "DragSupport",
        iy = "confirm",
        ny = "addCSSRule",
        ey = "flip",
        sy = "mirror",
        hy = "border.rect",
        ry = "border",
        ay = "shadow",
        oy = "elbow",
        fy = "elbow.H",
        uy = "elbow.V",
        cy = "orthogonal",
        _y = "orthogonal.H",
        dy = "orthogonal.V",
        ly = "orthogonal.H.V",
        vy = "orthogonal.V.H",
        by = "extend.top",
        gy = "extend.left",
        yy = "extend.bottom",
        my = "extend.right",
        xy = "zigzag",
        py = "bevel",
        Ey = "circle",
        wy = "ELLIPSE",
        Ty = "oval",
        My = "roundrect",
        ky = "star",
        Oy = "triangle",
        Sy = "hexagon",
        Iy = "pentagon",
        Ay = "trapezium",
        Cy = "rhombus",
        Ly = "parallelogram",
        Py = "heart",
        Ry = "diamond",
        Dy = "cross",
        Ny = "arrow.standard",
        By = "arrow.1",
        jy = "arrow.2",
        $y = "arrow.3",
        Fy = "arrow.4",
        Gy = "arrow.5",
        qy = "arrow.6",
        zy = "arrow.7",
        Hy = "arrow.8",
        Yy = "arrow.open",
        Uy = "LINE_CAP_TYPE_BUTT",
        Wy = "butt",
        Xy = "square",
        Vy = "LINE_JOIN_TYPE_BEVEL",
        Zy = "LINE_JOIN_TYPE_ROUND",
        Ky = "LINE_JOIN_TYPE_MITER",
        Jy = "miter",
        Qy = "SELECTION_TYPE",
        tm = "SELECTION_TYPE_SHADOW",
        im = "SELECTION_TOLERANCE",
        nm = "SELECTION_SHADOW_BLUR",
        em = "SELECTION_COLOR",
        sm = "BORDER_RADIUS",
        hm = "POINTER_WIDTH",
        rm = "ARROW_SIZE",
        am = "devicePixelRatio",
        om = "createCanvas",
        fm = "offset",
        um = "quadraticCurveTo",
        cm = "bezierCurveTo",
        _m = "$boundaryPoint1",
        dm = "$boundaryPoint2",
        lm = "IMAGE_WIDTH",
        vm = "MAX_CACHE_PIXELS",
        bm = "_mq7",
        gm = "_dispatcher",
        ym = "parentNode",
        mm = "Image load error - ",
        xm = "_mu3",
        pm = "body",
        Em = "_pixels",
        wm = "cacheable",
        Tm = "IMAGE_MAX_SIZE",
        Mm = "_width",
        km = "_height",
        Om = "fillStyle",
        Sm = "#CCC",
        Im = "fill",
        Am = "clip",
        Cm = "center",
        Lm = "normal ",
        Pm = "strokeText",
        Rm = "#000",
        Dm = "shadowBlur",
        Nm = "shadowOffsetX",
        Bm = "shadowOffsetY",
        jm = "Loading...",
        $m = "renderColor",
        Fm = "Error...",
        Gm = "_defaultCache",
        qm = "maxScale",
        zm = "image",
        Hm = "load",
        Ym = "removeListener",
        Um = "registerImage",
        Wm = "getAllImages",
        Xm = "colors",
        Vm = "positions",
        Zm = "GRADIENT_TYPE_RADIAL",
        Km = "GRADIENT_TYPE_LINEAR",
        Jm = "createLinearGradient",
        Qm = "position",
        tx = "createRadialGradient",
        ix = "addColorStop",
        nx = "LINEAR_GRADIENT_VERTICAL",
        ex = "LINEAR_GRADIENT_HORIZONTAL",
        sx = "RAINBOW_LINEAR_GRADIENT",
        hx = "RAINBOW_LINEAR_GRADIENT_VERTICAL",
        rx = "RAINBOW_RADIAL_GRADIENT",
        ax = "q",
        ox = "a",
        fx = "z",
        ux = "SEGMENT_LINE_TO",
        cx = "SEGMENT_QUAD_TO",
        _x = "SEGMENT_CURVE_TO",
        dx = "SEGMENT_ARC_TO",
        lx = "isNumber",
        vx = "PathSegment",
        bx = "toJSON",
        gx = "selectionColor",
        yx = "selectionShadowBlur",
        mx = "selectionShadowOffsetX",
        xx = "selectionShadowOffsetY",
        px = "SELECTION_TYPE_BORDER",
        Ex = "selectionBorder",
        wx = "lineCap",
        Tx = "outlineStyle",
        Mx = "outline",
        kx = "fillColor",
        Ox = "fillGradient",
        Sx = "_fillGradient",
        Ix = "beginPath",
        Ax = "_originalPixelsWidth",
        Cx = "_originalPixels",
        Lx = "darken",
        Px = "multiply",
        Rx = "BLEND_MODE_COLOR_BURN",
        Dx = "color.burn",
        Nx = "linear.burn",
        Bx = "lighten",
        jx = "screen",
        $x = "gray",
        Fx = "rgba(0,0,0,0)",
        Gx = "miterLimit",
        qx = "#1C6B9D",
        zx = "#186493",
        Hx = "#145E8B",
        Yx = "#115B87",
        Ux = "#115A85",
        Wx = "#125C89",
        Xx = "#176291",
        Vx = "#1D6C9F",
        Zx = "#2479B0",
        Kx = "#2881BB",
        Jx = "#1F6FA2",
        Qx = "#115A86",
        tp = "#004063",
        ip = "#2e8ece",
        np = "#efefef",
        ep = "#135D89",
        sp = "#186494",
        hp = "#1F70A4",
        rp = "#257AB2",
        ap = "#2377AD",
        op = "#1E6DA0",
        fp = "#105984",
        up = "#f7f8f8",
        cp = "#6A6969",
        _p = "#4F4C4B",
        dp = "#545252",
        lp = "#646262",
        vp = "#6F6E6F",
        bp = "#4C4948",
        gp = "#494645",
        yp = "#7D7D7D",
        mp = "#808080",
        xp = "#888888",
        pp = "#939293",
        Ep = "#9E9D9D",
        wp = "#A7A5A4",
        Tp = "#A9A6A5",
        Mp = "#A7A4A3",
        kp = "#FFFFFF",
        Op = "#E9EAEA",
        Sp = "#9fa0a0",
        Ip = "#c9caca",
        Ap = "#3e3a39",
        Cp = "#B2CBEA",
        Lp = "#2E8ECE",
        Pp = "globalAlpha",
        Rp = "#727171",
        Dp = "#b5b5b6",
        Np = "Q-",
        Bp = "_mu1",
        jp = "_muache",
        $p = "_hsed",
        Fp = "_msr",
        Gp = "_msufferedImage",
        qp = "readByte",
        zp = "readBytes",
        Hp = "read",
        Yp = "fromCharCode",
        Up = "readUnsigned",
        Wp = "Invalid LZW code.",
        Xp = "GIF",
        Vp = "Not a GIF file.",
        Zp = "shift",
        Kp = "sorted",
        Jp = "gctSize",
        Qp = "bgColor",
        tE = "pixelAspectRatio",
        iE = "terminator",
        nE = "comment",
        eE = "ptData",
        sE = "iterations",
        hE = "appData",
        rE = "identifier",
        aE = "authCode",
        oE = "unknown",
        fE = "label",
        uE = "extType",
        cE = "gce",
        _E = "com",
        dE = "pte",
        lE = "app",
        vE = "lctFlag",
        bE = "lctSize",
        gE = "lzwMinCodeSize",
        yE = "pixels",
        mE = "interlaced",
        xE = "sentinel",
        pE = "ext",
        EE = "eof",
        wE = "Unknown block: 0x",
        TE = "keydown",
        ME = "shiftKey",
        kE = "altKey",
        OE = "\nVersion - ",
        SE = "version",
        IE = "\nPublish Date - ",
        AE = "publishDate",
        CE = "about",
        LE = "copyright",
        PE = "f43b4e1133375609ab7a3212e157552652782c3dc9abfe47273959defd82eba0b5f3781a7138bd02954591b7ffc3a95aca49c9b03a2ae3317fcd2397fee2cfafc22186728105736650,cb1a696d47a44f741bf667aefb497aa4dcfcdabc9817288dface24a7fd3c0afdb18ddb42e49bdca295d58191399e633bf2c34e9ebd8329aef54181232fd9a088ff85aea0de05a749e4",
        RE = "\nLicensed to: ",
        DE = "%20website%3A%20demo.qunee.com%2Cmap.qunee.com",
        NE = "fil",
        BE = "nee",
        jE = "RIC",
        $E = "setT",
        FE = "ho",
        GE = "7.",
        qE = "ca",
        zE = "os",
        HE = "ifr",
        YE = "Canvas",
        UE = "Rend",
        WE = "Cont",
        XE = "proto",
        VE = "locat",
        ZE = "create",
        KE = "11000",
        JE = "15000",
        QE = "17000",
        tw = "20000",
        iw = "31000",
        nw = "32000",
        ew = "imeout",
        sw = "ion",
        hw = "stname",
        rw = "Qu",
        aw = " for HTML5",
        ow = "iframe",
        fw = "display",
        uw = "contentWindow",
        cw = "localhost",
        _w = "127.00.1",
        dw = "Element",
        lw = "ame",
        vw = "cont",
        bw = "entWindow",
        gw = "Date",
        yw = "ering",
        mw = "ext2D",
        xw = "lText",
        pw = "overflow",
        Ew = "absolute",
        ww = "0 0",
        Tw = "Q-Canvas",
        Mw = "Q-CanvasPanel",
        kw = "Q-Graph",
        Ow = "_muc",
        Sw = "_l3ingList",
        Iw = "_viewport",
        Aw = "_muj",
        Cw = "setParent",
        Lw = "_6cs",
        Pw = "invalidate",
        Rw = "_mqo",
        Dw = "_mue",
        Nw = "size",
        Bw = "viewport",
        jw = "_jaingID",
        $w = "_muh",
        Fw = "_mug",
        Gw = "_ms0",
        qw = "matrix",
        zw = "_mqd",
        Hw = "_mqt",
        Yw = "_mqr",
        Uw = "zIndex",
        Ww = "_mutx",
        Xw = "_msuffer",
        Vw = "_mueCanvasSizeFlag",
        Zw = "reverseTransform",
        Kw = "_muurrentMatrix",
        Jw = "transMatrix",
        Qw = "__mussMatrix",
        tT = "matrix(",
        iT = "__hf",
        nT = "visible",
        eT = "_mqb",
        sT = "tabIndex",
        hT = "toLogical",
        rT = "uiId",
        aT = "__iv",
        oT = "_mueBoundsFlag",
        fT = "_muk",
        uT = "delay",
        cT = "forEachReverse",
        _T = "clientWidth",
        dT = "getGlobalBounds",
        lT = "_viewportClips",
        vT = "NAVIGATION_BUTTON",
        bT = "navigation.button",
        gT = "NAVIGATION_SCROLLBAR",
        yT = "navigation.scrollbar",
        mT = "NAVIGATION_TYPE",
        xT = "_ja",
        pT = "getElementById",
        ET = "_topCanvas",
        wT = "_mqg",
        TT = "_5g",
        MT = "getEdgeBundle",
        kT = "uiBounds",
        OT = "_6u",
        ST = "_3g",
        IT = "_viewportChanged",
        AT = "_originAdjusted",
        CT = "invalidateVisibility",
        LT = "_fj",
        PT = "_e8Changed",
        RT = "_scaleChanged",
        DT = "_8vChanged",
        NT = "element.bounds",
        BT = "__6c",
        jT = "toCanvas",
        $T = "selected",
        FT = "invalidateRender",
        GT = "uiClass",
        qT = "expanded",
        zT = "onPropertyChange",
        HT = "invalidateData",
        YT = "_muq",
        UT = "_edgeBundleInvalidateFlag",
        WT = "_ms8",
        XT = "validateEdgeBundle",
        VT = "__kk",
        ZT = "sort",
        KT = "__48",
        JT = "hasEdge",
        QT = "getIndexById",
        tM = "UI '",
        iM = "' not found",
        nM = "viewportBounds",
        eM = "_k0Model",
        sM = "invert",
        hM = "_msackM",
        rM = "_globalBounds",
        aM = "canvasBounds",
        oM = "ui",
        fM = "_muy",
        uM = "$name",
        cM = "Q.Element",
        _M = "tooltip",
        dM = "putStyles",
        lM = "connect",
        vM = "Q.Edge",
        bM = "edges",
        gM = "path.segment",
        yM = "firePathChange",
        mM = "addPathSegment",
        xM = "to",
        pM = "bundleEnabled",
        EM = "Q-node",
        wM = "$location",
        TM = "hasLoops",
        MM = "location",
        kM = "host",
        OM = "hasFollowers",
        SM = "toFollowers",
        IM = "_host",
        AM = "Q.Node",
        CM = "follower.add",
        LM = "follower.remove",
        PM = "anchorPosition",
        RM = "SHAPENODE_STYLES",
        DM = "ARROW_TO",
        NM = "Q.ShapeNode",
        BM = "path",
        jM = "removePathSegment",
        $M = "segments",
        FM = "ShapeNode",
        GM = "generator",
        qM = "Q.Bus",
        zM = "currentSubNetwork",
        HM = "GROUP_TYPE_RECT",
        YM = "GROUP_PADDING",
        UM = "invalidateFlag",
        WM = "$groupType",
        XM = "GROUP_TYPE",
        VM = "GROUP_EXPANDED",
        ZM = "Q.Group",
        KM = "minSize",
        JM = "groupType",
        QM = "groupImage",
        tk = "Group",
        ik = "Q.Text",
        nk = "Text",
        ek = "#444",
        sk = "selectionType",
        hk = "selectionBackgroundColor",
        rk = "fillRect",
        ak = "strokeRect",
        ok = "syncSelectionStyles",
        fk = "$alpha",
        uk = "offsetX",
        ck = "offsetY",
        _k = "SELECTION_TYPE_BORDER_RECT",
        dk = "_empty",
        lk = "borderColor",
        vk = "borderLineDash",
        bk = "borderLineDashOffset",
        gk = "$backgroundColor",
        yk = "$invalidateData",
        mk = "$backgroundGradient",
        xk = "measure",
        pk = "validateSize",
        Ek = "onBoundsChanged",
        wk = "$invalidateLocation",
        Tk = "$visible",
        Mk = "initialize",
        kk = "doHitTest",
        Ok = "$invalidateVisibility",
        Sk = "onDataChanged",
        Ik = "_mqk",
        Ak = "Visibility",
        Ck = "Location",
        Lk = "AnchorPoint",
        Pk = "BackgroundGradient",
        Rk = "Rotate",
        Dk = "PROPERTY_TYPE_ACCESSOR",
        Nk = "bindingProperty",
        Bk = "selection.color",
        jk = "SELECTION_BORDER",
        $k = "selection.border",
        Fk = "SELECTION_SHADOW_OFFSET_X",
        Gk = "selection.type",
        qk = "RENDER_COLOR",
        zk = "render.color",
        Hk = "RENDER_COLOR_BLEND_MODE",
        Yk = "ALPHA",
        Uk = "alpha",
        Wk = "SHADOW_BLUR",
        Xk = "shadow.blur",
        Vk = "SHADOW_COLOR",
        Zk = "shadow.color",
        Kk = "SHADOW_OFFSET_X",
        Jk = "shadow.offset.x",
        Qk = "shadow.offset.y",
        tO = "shape.stroke",
        iO = "shape.stroke.style",
        nO = "shape.line.dash",
        eO = "shape.fill.color",
        sO = "SHAPE_FILL_GRADIENT",
        hO = "shape.fill.gradient",
        rO = "SHAPE_OUTLINE",
        aO = "shape.outline",
        oO = "SHAPE_OUTLINE_STYLE",
        fO = "shape.outline.style",
        uO = "line.cap",
        cO = "line.join",
        _O = "LAYOUT_BY_PATH",
        dO = "layout.by.path",
        lO = "background.color",
        vO = "BACKGROUND_GRADIENT",
        bO = "background.gradient",
        gO = "BORDER",
        yO = "border.width",
        mO = "BORDER_COLOR",
        xO = "border.color",
        pO = "border.line.dash",
        EO = "BORDER_LINE_DASH_OFFSET",
        wO = "border.radius",
        TO = "PADDING",
        MO = "IMAGE_BACKGROUND_GRADIENT",
        kO = "IMAGE_BORDER",
        OO = "image.border.width",
        SO = "IMAGE_BORDER_STYLE",
        IO = "image.border.style",
        AO = "IMAGE_BORDER_LINE_DASH",
        CO = "IMAGE_BORDER_RADIUS",
        LO = "image.radius",
        PO = "IMAGE_PADDING",
        RO = "image.padding",
        DO = "IMAGE_Z_INDEX",
        NO = "image.z.index",
        BO = "IMAGE_ADJUST",
        jO = "image.adjust",
        $O = "IMAGE_ALPHA",
        FO = "image.alpha",
        GO = "LABEL_ROTATE",
        qO = "label.rotate",
        zO = "LABEL_POSITION",
        HO = "label.position",
        YO = "LABEL_VISIBLE",
        UO = "label.visible",
        WO = "label.color",
        XO = "LABEL_FONT_SIZE",
        VO = "label.font.size",
        ZO = "label.font.family",
        KO = "LABEL_FONT_STYLE",
        JO = "label.font.style",
        QO = "LABEL_PADDING",
        tS = "label.padding",
        iS = "LABEL_POINTER_WIDTH",
        nS = "label.pointer.width",
        eS = "LABEL_POINTER",
        sS = "label.pointer",
        hS = "label.radius",
        rS = "LABEL_OFFSET_X",
        aS = "label.offset.x",
        oS = "LABEL_OFFSET_Y",
        fS = "label.offset.y",
        uS = "LABEL_SIZE",
        cS = "label.size",
        _S = "LABEL_ALIGN_POSITION",
        dS = "label.align.position",
        lS = "label.border",
        vS = "label.border.style",
        bS = "LABEL_BACKGROUND_COLOR",
        gS = "LABEL_BACKGROUND_GRADIENT",
        yS = "LABEL_ROTATABLE",
        mS = "label.rotatable",
        xS = "LABEL_SHADOW_BLUR",
        pS = "label.shadow.blur",
        ES = "LABEL_SHADOW_COLOR",
        wS = "label.shadow.color",
        TS = "LABEL_SHADOW_OFFSET_X",
        MS = "LABEL_SHADOW_OFFSET_Y",
        kS = "LABEL_Z_INDEX",
        OS = "label.z.index",
        SS = "label.on.top",
        IS = "GROUP_BACKGROUND_COLOR",
        AS = "GROUP_STROKE",
        CS = "group.stroke",
        LS = "GROUP_STROKE_STYLE",
        PS = "group.stroke.color",
        RS = "GROUP_STROKE_LINE_DASH",
        DS = "GROUP_STROKE_LINE_DASH_OFFSET",
        NS = "EDGE_BUNDLE_LABEL_ROTATE",
        BS = "EDGE_BUNDLE_LABEL_ANCHOR_POSITION",
        jS = "EDGE_BUNDLE_LABEL_FONT_SIZE",
        $S = "EDGE_BUNDLE_LABEL_PADDING",
        FS = "EDGE_BUNDLE_LABEL_POINTER_WIDTH",
        GS = "EDGE_BUNDLE_LABEL_POINTER",
        qS = "EDGE_BUNDLE_LABEL_BORDER",
        zS = "EDGE_BUNDLE_LABEL_BORDER_STYLE",
        HS = "EDGE_BUNDLE_LABEL_ROTATABLE",
        YS = "edge.width",
        US = "EDGE_COLOR",
        WS = "edge.color",
        XS = "EDGE_OUTLINE",
        VS = "edge.outline",
        ZS = "EDGE_OUTLINE_STYLE",
        KS = "edge.outline.style",
        JS = "EDGE_LINE_DASH",
        QS = "edge.line.dash",
        tI = "edge.from.offset",
        iI = "EDGE_TO_OFFSET",
        nI = "edge.to.offset",
        eI = "edge.bundle.gap",
        sI = "EDGE_LOOPED_EXTAND",
        hI = "edge.looped.extand",
        rI = "edge.extend",
        aI = "edge.control.point",
        oI = "edge.split.percent",
        fI = "edge.split.value",
        uI = "edge.corner",
        cI = "edge.corner.radius",
        _I = "edge.from.at.edge",
        dI = "edge.to.at.edge",
        lI = "ARROW_FROM",
        vI = "arrow.from",
        bI = "arrow.from.size",
        gI = "ARROW_FROM_OFFSET",
        yI = "arrow.from.offset",
        mI = "ARROW_FROM_STROKE",
        xI = "arrow.from.stroke",
        pI = "ARROW_FROM_STROKE_STYLE",
        EI = "arrow.from.outline",
        wI = "ARROW_FROM_OUTLINE_STYLE",
        TI = "arrow.from.line.dash",
        MI = "ARROW_FROM_FILL_GRADIENT",
        kI = "arrow.from.line.cap",
        OI = "ARROW_FROM_LINE_JOIN",
        SI = "arrow.from.line.join",
        II = "arrow.to",
        AI = "ARROW_TO_SIZE",
        CI = "arrow.to.size",
        LI = "ARROW_TO_OFFSET",
        PI = "arrow.to.offset",
        RI = "ARROW_TO_STROKE",
        DI = "arrow.to.stroke",
        NI = "ARROW_TO_STROKE_STYLE",
        BI = "arrow.to.outline",
        jI = "ARROW_TO_OUTLINE_STYLE",
        $I = "arrow.to.line.dash",
        FI = "ARROW_TO_LINE_DASH_OFFSET",
        GI = "arrow.to.fill.color",
        qI = "ARROW_TO_FILL_GRADIENT",
        zI = "arrow.to.line.cap",
        HI = "ARROW_TO_LINE_JOIN",
        YI = "arrow.to.line.join",
        UI = "LABEL_COLOR",
        WI = "color",
        XI = "LABEL_BORDER",
        VI = "LABEL_BORDER_STYLE",
        ZI = "backgroundColor",
        KI = "showOnTop",
        JI = "SHADOW_OFFSET_Y",
        QI = "LABEL_FONT_FAMILY",
        tA = "alignPosition",
        iA = "pointerWidth",
        nA = "LABEL_RADIUS",
        eA = "borderRadius",
        sA = "rotatable",
        hA = "renderColorBlendMode",
        rA = "_31",
        aA = "_mu5",
        oA = "SHAPE_STROKE",
        fA = "SHAPE_STROKE_STYLE",
        uA = "SHAPE_FILL_COLOR",
        cA = "adjustType",
        _A = "SHAPE_LINE_DASH",
        dA = "SHAPE_LINE_DASH_OFFSET",
        lA = "LINE_CAP",
        vA = "IMAGE_BACKGROUND_COLOR",
        bA = "IMAGE_BORDER_COLOR",
        gA = "checkBody",
        yA = "_60",
        mA = "shape",
        xA = "GROUP_BACKGROUND_GRADIENT",
        pA = "_48",
        EA = "EDGE_WIDTH",
        wA = "fromArrow",
        TA = "toArrow",
        MA = "fromAtEdge",
        kA = "EDGE_TO_AT_EDGE",
        OA = "EDGE_LINE_DASH_OFFSET",
        SA = "ARROW_FROM_SIZE",
        IA = "fromArrowSize",
        AA = "fromArrowOffset",
        CA = "fromArrowStroke",
        LA = "fromArrowStrokeStyle",
        PA = "ARROW_FROM_OUTLINE",
        RA = "fromArrowOutline",
        DA = "fromArrowFillColor",
        NA = "ARROW_FROM_LINE_DASH",
        BA = "fromArrowLineDash",
        jA = "fromArrowLineJoin",
        $A = "ARROW_FROM_LINE_CAP",
        FA = "fromArrowLineCap",
        GA = "toArrowSize",
        qA = "toArrowOffset",
        zA = "toArrowStroke",
        HA = "toArrowStrokeStyle",
        YA = "ARROW_TO_OUTLINE",
        UA = "toArrowOutline",
        WA = "toArrowOutlineStyle",
        XA = "ARROW_TO_FILL_COLOR",
        VA = "toArrowFillColor",
        ZA = "toArrowFillGradient",
        KA = "ARROW_TO_LINE_DASH",
        JA = "toArrowLineDash",
        QA = "toArrowLineJoin",
        tC = "ARROW_TO_LINE_CAP",
        iC = "toArrowLineCap",
        nC = "EDGE_BUNDLE_LABEL_COLOR",
        eC = "bundleLabel",
        sC = "EDGE_BUNDLE_LABEL_POSITION",
        hC = "EDGE_BUNDLE_LABEL_FONT_FAMILY",
        rC = "EDGE_BUNDLE_LABEL_FONT_STYLE",
        aC = "EDGE_BUNDLE_LABEL_RADIUS",
        oC = "EDGE_BUNDLE_LABEL_OFFSET_X",
        fC = "EDGE_BUNDLE_LABEL_BACKGROUND_COLOR",
        uC = "EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT",
        cC = "BACKGROUND_COLOR",
        _C = "invalidateShape",
        dC = "ARROW_FROM_FILL_COLOR",
        lC = "ARROW_FROM_LINE_DASH_OFFSET",
        vC = "_mu0",
        bC = "invalidateChildrenIndex",
        gC = "invalidateSize",
        yC = "removeBinding",
        mC = "$invalidateChild",
        xC = "onBindingPropertyChange",
        pC = "addChild",
        EC = "initLabel",
        wC = "bindingProperties",
        TC = "doValidate",
        MC = "$selectionBorder",
        kC = "$shadowOffsetX",
        OC = "$selectionShadowOffsetX",
        SC = "$shadowOffsetY",
        IC = "$selectionShadowOffsetY",
        AC = "UI_BOUNDS_GROW",
        CC = "grow",
        LC = "$invalidateBounds",
        PC = "_msody",
        RC = "bodyChanged",
        DC = "$renderColorBlendMode",
        NC = "$shadowColor",
        BC = "$shadowBlur",
        jC = "hitTestChildren",
        $C = "$renderColor",
        FC = "_muw",
        GC = "$size",
        qC = "$invalidateScale",
        zC = "_originalBounds",
        HC = "setMeasuredBounds",
        YC = "generatorGradient",
        UC = "$invalidateFillGradient",
        WC = "$adjustType",
        XC = "$lineWidth",
        VC = "$fillGradient",
        ZC = "Scale",
        KC = "FillGradient",
        JC = "ALIGN_POSITION",
        QC = "$fontSize",
        tL = "$fontFamily",
        iL = "LINE_HEIGHT",
        nL = "$font",
        eL = "$fontStyle",
        sL = "Font",
        hL = "$invalidateFont",
        rL = "pathBounds",
        aL = "$invalidateToArrow",
        oL = "$outline",
        fL = "$invalidateFromArrow",
        uL = "validateFromArrow",
        cL = "validateToArrow",
        _L = "$fromArrow",
        dL = "$fromArrowShape",
        lL = "getLocation",
        vL = "fromArrowLocation",
        bL = "$fromArrowSize",
        gL = "fromArrowStyles",
        yL = "fromArrowFillGradient",
        mL = "Gradient",
        xL = "$toArrow",
        pL = "$toArrowShape",
        EL = "toArrowLocation",
        wL = "$toArrowSize",
        TL = "toArrowStyles",
        ML = "ArrowStroke",
        kL = "ArrowStrokeStyle",
        OL = "ArrowStyles",
        SL = "ArrowLineDash",
        IL = "ArrowLineDashOffset",
        AL = "ArrowFillColor",
        CL = "ArrowFillGradient",
        LL = "ArrowLineCap",
        PL = "ArrowLineJoin",
        RL = "ArrowOutline",
        DL = "ArrowOutlineStyle",
        NL = "drawArrow",
        BL = "FromArrow",
        jL = "ToArrow",
        $L = "initBindingProperties",
        FL = "EDGE_TYPE_ZIGZAG",
        GL = "isBundleEnabled",
        qL = "getYOffset",
        zL = "createBundleLabel",
        HL = "editable",
        YL = "getBundleLabel",
        UL = "validatePoints",
        WL = "checkBundleLabel",
        XL = "drawReferenceLine",
        VL = "extend.",
        ZL = "_msb",
        KL = "LABEL_ANCHOR_POSITION",
        JL = "#555555",
        QL = "EDGE_FROM_AT_EDGE",
        tP = "EDGE_SPLIT_PERCENT",
        iP = "EDGE_BUNDLE_GAP",
        nP = "#075bc5",
        eP = "#2898E0",
        sP = "_onresize",
        hP = "resize",
        rP = "ondrop",
        aP = "ondragover",
        oP = "stopEvent",
        fP = "dataTransfer",
        uP = "getDropInfo",
        cP = "dropAction",
        _P = "Node",
        dP = "createShapeNode",
        lP = "createGroup",
        vP = "createNode",
        bP = "_msq",
        gP = "properties",
        yP = "clientProperties",
        mP = "styles",
        xP = "onElementCreated",
        pP = "ELEMENT_CREATED",
        EP = "onInteractionEvent",
        wP = "droppable",
        TP = "movable",
        MP = "selectable",
        kP = "resizable",
        OP = "linkable",
        SP = "canLinkFrom",
        IP = "canLinkTo",
        AP = "addElement",
        CP = "limitedBounds",
        LP = "stopAnimation",
        PP = "translateTo",
        RP = "_muheckingBounds",
        DP = "globalToLocal",
        NP = "scaleStep",
        BP = "zoomIn",
        jP = "zoomOut",
        $P = "minScale",
        FP = "isInvalidate",
        GP = "centerTo",
        qP = "callLater",
        zP = "zoomAnimation",
        HP = "_panAnimation",
        YP = "focus",
        UP = "unselect",
        WP = "reverseSelect",
        XP = "setLocation",
        VP = "isMovable",
        ZP = "_movableFilter",
        KP = "addCustomInteraction",
        JP = "removeCustomInteraction",
        QP = "html",
        tR = "innerHTML",
        iR = "Delete Elements - ",
        nR = "removeSelection",
        eR = "ELEMENT_REMOVED",
        sR = "Shape",
        hR = "Line",
        rR = "Styles",
        aR = "createEdge",
        oR = "Edge",
        fR = "edgeUIClass",
        uR = "interactionProperties",
        cR = "startEdit",
        _R = "allowEmptyLabel",
        dR = "Label Can't Empty",
        lR = "interactionMode",
        vR = "agentEdge",
        bR = "+",
        gR = "delayedRendering",
        yR = "_muurrentMode",
        mR = "currentMode",
        xR = "propertyChangeDispatcher",
        pR = "_viewportBounds",
        ER = "_limitedBounds",
        wR = "DELAYED_RENDERING",
        TR = "fullRefresh",
        MR = "GROUP_MIN_HEIGHT",
        kR = "_msl",
        OR = "GROUP_TYPE_CIRCLE",
        SR = "GROUP_TYPE_ELLIPSE",
        IR = "GROUP_MIN_WIDTH",
        AR = "_$y",
        CR = "GroupUI",
        LR = "10px",
        PR = "opacity 0.2s ease-in",
        RR = "block",
        DR = ".Q-Graph-Nav img",
        NR = "opacity:1;background-color: rgba(0, 0, 0, 0.5)",
        BR = ".Q-Graph-Nav",
        jR = "opacity:0;",
        $R = "transition",
        FR = ":opacity 3s cubic-bezier(0.8, 0, 0.8, 1)",
        GR = ".Q-Graph-Nav:hover",
        qR = "opacity:1;",
        zR = ":opacity 0.3s linear",
        HR = "visibility",
        YR = "_right",
        UR = "_mu8",
        WR = "_msottom",
        XR = "_mq3",
        VR = ".Q-Graph-ScrollBar",
        ZR = "margin: 2px; position: absolute;box-sizing: border-box;box-shadow: #FFF 0px 0px 1px; background-color: rgba(120,120,120,0.3);border-radius: 4px;margin: 1px;",
        KR = ".Q-Graph-ScrollBar.hover, .Q-Graph-ScrollBar:hover",
        JR = "margin-bottom: 8px;",
        QR = "margin-right: 8px;",
        tD = ".Q-Graph-ScrollPane",
        iD = ":opacity 3s cubic-bezier(0.8, 0, 0.8, 1);",
        nD = "_verticalDragSupport",
        eD = "_horizontalDragSupport",
        sD = "Q-Graph-ScrollPane",
        hD = "enableInertia",
        rD = "_msj",
        aD = "Both",
        oD = "pathSegments",
        fD = "drawable",
        uD = "ZOOM_ANIMATE",
        cD = "_mu7",
        _D = "_mqY",
        dD = "easeOutStrong",
        lD = "__delayRender",
        vD = "pauseRendering",
        bD = "onAnimationStart",
        gD = "_speedX",
        yD = "_mqX",
        mD = "_speedY",
        xD = "_toTX",
        pD = "_fromTX",
        ED = "_toTY",
        wD = "_fromScale",
        TD = "duration",
        MD = "ANIMATION_TYPE",
        kD = "_fromTY",
        OD = "INTERACTION_HANDLER_SIZE_TOUCH",
        SD = "INTERACTION_HANDLER_SIZE_DESKTOP",
        ID = "INTERACTION_ROTATE_HANDLER_SIZE_TOUCH",
        AD = "INTERACTION_ROTATE_HANDLER_SIZE_DESKTOP",
        CD = "element",
        LD = "_fbId",
        PD = "removeDrawable",
        RD = "addDrawable",
        DD = "doDraw",
        ND = "escapable",
        BD = "DrawableInteraction",
        jD = "drawPoint",
        $D = "isClosePath",
        FD = "styleDraw",
        GD = "currentPoint",
        qD = "DrawPathInteraction",
        zD = "_kcTime",
        HD = "createEdgeByInteraction",
        YD = "start",
        UD = "finish",
        WD = "toLogicalPoint",
        XD = "setCurrentPoint",
        VD = "responded",
        ZD = "getDefaultStyle",
        KD = "LINE_JOIN",
        JD = "SEGMENT_MOVE_TO",
        QD = "CreateShapeInteraction",
        tN = "createLineByInteraction",
        iN = "CreateLineInteraction",
        nN = "cursor",
        eN = "EdgeUI",
        sN = "CreateSimpleEdgeInteraction",
        hN = "LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS",
        rN = "textarea",
        aN = "Q-LabelEditor",
        oN = "solid #08E 1px",
        fN = "5px",
        uN = "boxShadow",
        cN = "oninput",
        _N = "onValueChange",
        dN = "cancelEdit",
        lN = "onkeypress",
        vN = "keyCode",
        bN = "onSizeChange",
        gN = "stopEdit",
        yN = "createHTML",
        mN = "stopEditWhenClickOnWindow",
        xN = "onClickOnWindow",
        pN = "setText",
        EN = "isEditing",
        wN = "labelEditor",
        TN = "isEditable",
        MN = "startLabelEdit",
        kN = "EDGE_BUNDLE",
        ON = "upSubNetwork",
        SN = "enableDoubleClickToOverview",
        IN = "moveToCenter",
        AN = "removeSelectionByInteraction",
        CN = "EditInteraction",
        LN = "exportImage",
        PN = "document",
        RN = "title",
        DN = "export image - ",
        NN = " x ",
        BN = "draggingElements",
        jN = "currentDraggingElement",
        $N = "beforeInteractionEvent",
        FN = "ELEMENT_MOVING",
        GN = "moveElements",
        qN = "forEachReverseVisibleUI",
        zN = "linkedWith",
        HN = "ELEMENT_MOVE_END",
        YN = "PAN_START",
        UN = "dScale",
        WN = "zoomAt",
        XN = "_lrPropertyChangeListing",
        VN = "dataPropertyChangeDispatcher",
        ZN = "_editting",
        KN = "_mousePressed",
        JN = "_muanEdit",
        QN = "drawLineId",
        tB = "drawLine",
        iB = "isControlPoint",
        nB = "#555",
        eB = "_mqx",
        sB = "removePathSegmentByIndex",
        hB = "isEndPoint",
        rB = "isFrom",
        aB = "EDGE_FROM_OFFSET",
        oB = "oldPoints",
        fB = "prevSegment",
        uB = "nextSegment",
        cB = "oldNextPoints",
        _B = "pointIndex",
        dB = "point",
        lB = "POINT_MOVE_END",
        vB = "SELECTION_RECTANGLE_STROKE",
        bB = "SELECTION_RECTANGLE_STROKE_COLOR",
        gB = "SELECTION_RECTANGLE_FILL_COLOR",
        yB = "_16Id",
        mB = "_end",
        xB = "SELECT_START",
        pB = "_fjTimer",
        EB = "SELECT_END",
        wB = "forEachVisibleUI",
        TB = "isSelectable",
        MB = "SELECT_BETWEEN",
        kB = "popupmenu",
        OB = "hide",
        SB = "_rotatePoint",
        IB = "nwse-resize",
        AB = "ns-resize",
        CB = "ew-resize",
        LB = "rgba(0, 255, 0, 1)",
        PB = "#FF0",
        RB = "_rotateHandleLength",
        DB = "_insets",
        NB = "isResizable",
        BB = "isRotatable",
        jB = "_msg",
        $B = "RESIZE_START",
        FB = "ROTATING",
        GB = "RESIZE_END",
        qB = "ResizeInteraction",
        zB = "SELECT",
        HB = "setSelection",
        YB = "unSelectAll",
        UB = "TOOLTIP_DURATION",
        WB = "Q-Tooltip",
        XB = "#FFFFCA",
        VB = "1px solid #D9D9D9",
        ZB = "2px 4px",
        KB = "_msu",
        JB = "_mus",
        QB = "getTooltip",
        tj = "tooltipType",
        ij = "<br>",
        nj = "textContent",
        ej = "_mqa",
        sj = "_deleteTimer",
        hj = "tooltipDuration",
        rj = "tooltipDelay",
        aj = "_initTimer",
        oj = "_mss",
        fj = "enableWheelZoom",
        uj = "zoomByMouseEvent",
        cj = "ELEMENT_MOVE_START",
        _j = "element.move.start",
        dj = "element.moving",
        lj = "element.move.end",
        vj = "element.created",
        bj = "element.removed",
        gj = "point.move.start",
        yj = "POINT_MOVING",
        mj = "point.moving",
        xj = "point.move.end",
        pj = "resize.start",
        Ej = "RESIZING",
        wj = "resizing",
        Tj = "resize.end",
        Mj = "rotating",
        kj = "ROTATE_END",
        Oj = "rotate.end",
        Sj = "pan.start",
        Ij = "pan.end",
        Aj = "group.expanded",
        Cj = "edge.bundle",
        Lj = "select.start",
        Pj = "select.between",
        Rj = "select.end",
        Dj = "long.click",
        Nj = "_interactionSupport",
        Bj = "_onElementRemoved",
        jj = "_onElementClear",
        $j = "_m6Interaction",
        Fj = "_jsCustomInteractionListener",
        Gj = "currentInteractionMode",
        qj = "getInteractionInstances",
        zj = "registerInteractions",
        Hj = "INTERACTION_MODE_VIEW",
        Yj = "view",
        Uj = "INTERACTION_MODE_SELECTION",
        Wj = "INTERACTION_MODE_ZOOMIN",
        Xj = "zoomin",
        Vj = "INTERACTION_MODE_ZOOMOUT",
        Zj = "zoomout",
        Kj = "INTERACTION_MODE_CREATE_SIMPLE_EDGE",
        Jj = "create.simple.edge",
        Qj = "INTERACTION_MODE_CREATE_EDGE",
        t$ = "create.edge",
        i$ = "create.shape",
        n$ = "create.line",
        e$ = "INTERACTION_MODE_CREATE_LINE",
        s$ = "INTERACTION_MODE_DEFAULT",
        h$ = "PanInteraction",
        r$ = "MoveInteraction",
        a$ = "ExportInteraction",
        o$ = "TooltipInteraction",
        f$ = "RectangleSelectionInteraction",
        u$ = "RectangleSelectionInteractionByRightButton",
        c$ = "PointsInteraction",
        _$ = "Layouter",
        d$ = "getUIBounds",
        l$ = "animate",
        v$ = "animationType",
        b$ = "locations",
        g$ = "node",
        y$ = "updateLocations",
        m$ = "DIRECTION_LEFT",
        x$ = "DIRECTION_CENTER",
        p$ = "DIRECTION_BOTTOM",
        E$ = "DIRECTION_TOP",
        w$ = "DIRECTION_RIGHT_TOP",
        T$ = "DIRECTION_RIGHT_BOTTOM",
        M$ = "DIRECTION_LEFT_TOP",
        k$ = "DIRECTION_LEFT_BOTTOM",
        O$ = "DIRECTION_TOP_LEFT",
        S$ = "even",
        I$ = "two.side",
        A$ = "even.h",
        C$ = "even.v",
        L$ = "LAYOUT_TYPE_EVEN_HORIZONTAL",
        P$ = "LAYOUT_TYPE_EVEN_VERTICAL",
        R$ = "LAYOUT_TYPE_TWO_SIDE",
        D$ = "isHorizontalDirection",
        N$ = "defaultSize",
        B$ = "isLayoutable",
        j$ = "getNodeSize",
        $$ = "parentChildrenDirection",
        F$ = "_ms5",
        G$ = "getHGap",
        q$ = "getLayoutType",
        z$ = "hGap",
        H$ = "vGap",
        Y$ = "layoutType",
        U$ = "root",
        W$ = "undirected",
        X$ = "doLayout",
        V$ = "parentBounds",
        Z$ = "_mqnchorLocation",
        K$ = "_d0",
        J$ = "_ez",
        Q$ = "hostDY",
        tF = "hostDX",
        iF = "_inheritedParentChildrenDirection",
        nF = "nodeX",
        eF = "_mqm",
        sF = "nodeY",
        hF = "_mqs",
        rF = "_muz",
        aF = "currentMovingNodes",
        oF = "layoutDatas",
        fF = "invalidateLayoutDatas",
        uF = "timer",
        cF = "stop",
        _F = "getMaxIterations",
        dF = "nodeCount",
        lF = "edgeCount",
        vF = "nodes",
        bF = "onstop",
        gF = "timeStep",
        yF = "isRunning",
        mF = "_j7r",
        xF = "resetLayoutDatas",
        pF = "startAngle",
        EF = "BalloonLayouter",
        wF = "proportional",
        TF = "regular",
        MF = "uniform",
        kF = "variable",
        OF = "ANGLE_SPACING_PROPORTIONAL",
        SF = "ANGLE_SPACING_REGULAR",
        IF = "RADIUS_MODE_UNIFORM",
        AF = "getGap",
        CF = "layouter",
        LF = "angleSpacing",
        PF = "node1",
        RF = "node2",
        DF = "EDGE_BUNDLE_EXPANDED",
        NF = "canBind",
        BF = "_mueBindableFlag",
        jF = "isPositiveOrder",
        $F = "_hfInBundle",
        FF = "stack",
        GF = "popIdx",
        qF = "quads",
        zF = "massX",
        HF = "massY",
        YF = "isInternal",
        UF = "mass",
        WF = "reset",
        XF = "attractive",
        VF = "_muo",
        ZF = "elastic",
        KF = "layoutMass",
        JF = "layoutElasticity",
        QF = "_nbodyForce",
        tG = "nodesArray",
        iG = "repulsion",
        nG = "update",
        eG = "currentEnergy",
        sG = "SpringLayouter",
        hG = "oldLocations",
        rG = "_mqnimate",
        aG = "_ebType",
        oG = "_onfinish",
        fG = "hasInEdge",
        uG = "hasOutEdge",
        cG = "forEachByTopoDepthFirstSearch",
        _G = "_from",
        dG = "toColor",
        lG = "isIE",
        vG = "isOpera",
        bG = "isWebkit",
        gG = "isGecko",
        yG = "isFirefox",
        mG = "isSafari",
        xG = "isChrome",
        pG = "isMac",
        EG = "DefaultStyles",
        wG = "Consts",
        TG = "Graph",
        MG = "BaseUI",
        kG = "NodeUI",
        OG = "ImageUI",
        SG = "Path",
        IG = "InteractionEvent",
        AG = "TreeLayouter",
        CG = "",
        LG = "2.0",
        PG = "2.5.9",
        RG = "Qunee - Diagramming Components for HTML5/Canvas",
        DG = "IDrawable",
        NG = "23/03/2017",
        BG = 0;
    if (t[pd]) {
        var jG = navigator[Ed], $G = /opera/i.test(jG), FG = !$G && /msie/i[Ro](jG), GG = /rv:11.0/i[Ro](jG),
            qG = /MSIE 10./i[Ro](jG);
        if (GG && (FG = !0), /msie\s[6,7,8]/i.test(jG)) throw new Error("your browser is not supported");
        var zG = /webkit|khtml/i.test(jG), HG = !zG && /gecko/i[Ro](jG), YG = /firefox\//i.test(jG),
            UG = /Chrome\//i[Ro](jG), WG = !UG && /Safari\//i[Ro](jG), XG = /Macintosh;/i[Ro](jG),
            VG = /(iPad|iPhone|iPod)/g[Ro](jG), ZG = /Android/g[Ro](jG), KG = /Windows Phone/g[Ro](jG),
            JG = (VG || ZG || KG) && c_ in t, QG = jG.match(/AppleWebKit\/([0-9\.]*)/);
        if (QG && QG.length > 1) {
            parseFloat(QG[1])
        }
        ZG && parseFloat(jG[wd](/Android\s([0-9\.]*)/)[1])
    }
    t.requestAnimationFrame || (t[_r] = t.webkitRequestAnimationFrame || t[Td] || t[Md] || t[kd] || function (i) {
            return t.setTimeout(function () {
                i()
            }, 1e3 / 60)
        }), t[Od] || (t.cancelAnimationFrame = t[Sd] || t[Id] || t.oCancelAnimationFrame || t[Ad] || function (i) {
            return t[Cd](i)
        });
    var tq = {SELECTION_TOLERANCE: JG ? 5 : 2, LABEL_COLOR: Ld};
    K(tq, {
        FONT_STYLE: {
            get: function () {
                return this._fontStyle || (this[Pd] = Rd)
            }, set: function (t) {
                this[Pd] != t && (this[Pd] = t, this[Dd] = !0)
            }
        }, FONT_SIZE: {
            get: function () {
                return this[Nd] || (this._fontSize = 12)
            }, set: function (t) {
                this[Nd] != t && (this[Nd] = t, this[Dd] = !0)
            }
        }, FONT_FAMILY: {
            get: function () {
                return this._fontFamily || (this[Bd] = "Verdana,helvetica,arial,sans-serif")
            }, set: function (t) {
                this._fontFamily != t && (this[Bd] = t, this[Dd] = !0)
            }
        }, FONT: {
            get: function () {
                return (this._fontChanged || this._fontChanged === n) && (this[Dd] = !1, this._font = this[jd] + yr + this[Va] + Za + this[Ka]), this._font
            }
        }
    });
    var iq = function (t) {
        this._is = [], this._l5 = {}, t && this.add(t)
    };
    iq[tr] = {
        _is: null, _l5: null, get: function (t) {
            return this[$d](t)
        }, getById: function (t) {
            return this._l5[t]
        }, getByIndex: function (t) {
            return this._is[t]
        }, forEach: function (t, i, n) {
            return l(this._is, t, i, n)
        }, forEachReverse: function (t, i, n) {
            return b(this._is, t, i, n)
        }, size: function () {
            return this._is[qh]
        }, contains: function (t) {
            return this[Fd](t.id)
        }, containsById: function (t) {
            return this._l5.hasOwnProperty(t)
        }, setIndex: function (t, i) {
            var n = this._is.indexOf(t);
            if (0 > n) throw new Error(pa + t.id + Gd);
            return n == i ? !1 : (this._is.splice(n, 1), this._is[Uh](i, 0, t), !0)
        }, setIndexAfter: function (t, i) {
            var n = this._is.indexOf(t);
            if (0 > n) throw new Error(pa + t.id + Gd);
            return n == i ? i : n == i + 1 ? i + 1 : (n > i && (i += 1), this._is.splice(n, 1), this._is[Uh](i, 0, t), i)
        }, setIndexBefore: function (t, i) {
            var n = this._is[Jh](t);
            if (0 > n) throw new Error(pa + t.id + Gd);
            return n == i ? i : n == i - 1 ? i - 1 : (i > n && (i -= 1), this._is.splice(n, 1), this._is.splice(i, 0, t), i)
        }, indexOf: function (t) {
            return this._is[Jh](t)
        }, getIndexById: function (t) {
            var i = this.getById(t);
            return i ? this._is.indexOf(i) : -1
        }, add: function (t, i) {
            return $(t) ? this._fi(t, i) : this._jy(t, i)
        }, addFirst: function (t) {
            return this.add(t, 0)
        }, _fi: function (t, i) {
            if (0 == t[qh]) return !1;
            var e = !1, s = i >= 0;
            t = t._is || t;
            for (var h = 0, r = t[qh]; r > h; h++) {
                var a = t[h];
                null !== a && a !== n && this._jy(a, i, !0) && (e = !0, s && i++)
            }
            return e
        }, _jy: function (t, i) {
            var e = t.id;
            return e === n || this[Fd](e) ? !1 : (y(this._is, t, i), this._l5[e] = t, t)
        }, remove: function (t) {
            return $(t) ? this[qd](t) : t.id ? this._fm(t.id, t) : this[zd](t)
        }, _mqi: function (t) {
            if (0 == t.length) return !1;
            var i = !1;
            t = t._is || t;
            for (var e = 0, s = t[qh]; s > e; e++) {
                var h = t[e];
                if (null !== h && h !== n) {
                    h.id === n && (h = this._l5[h]);
                    var r = h.id;
                    this._fm(r, h, !0) && (i = !0)
                }
            }
            return i
        }, _fm: function (t, i) {
            return t !== n && this[Fd](t) ? ((null === i || i === n) && (i = this[Hd](t)), delete this._l5[t], m(this._is, i), !0) : !1
        }, removeById: function (t) {
            var i = this._l5[t];
            return i ? this._fm(t, i) : !1
        }, set: function (t) {
            if (!t || 0 == t) return void this[Da]();
            if (this.isEmpty() || !$(t)) return this[Da](), this.add(t);
            var i = [], n = {}, e = 0;
            if (l(t, function (t) {
                    this._l5[t.id] ? (n[t.id] = t, e++) : i.push(t)
                }, this), e != this.length) {
                var s = [];
                this[Kf](function (t) {
                    n[t.id] || s.push(t)
                }, this), s[qh] && this._mqi(s)
            }
            return i[qh] && this._fi(i), !0
        }, clear: function () {
            return this[Nf]() ? !1 : (this._is[qh] = 0, this._l5 = {}, !0)
        }, toDatas: function () {
            return this._is.slice(0)
        }, isEmpty: function () {
            return 0 == this._is[qh]
        }, valueOf: function () {
            return this._is[qh]
        }, clone: function (t) {
            var i = new iq;
            return i.add(t ? g(this._is) : this[Wc]()), i
        }
    }, K(iq.prototype, {
        datas: {
            get: function () {
                return this._is
            }
        }, random: {
            get: function () {
                return this._is && this._is.length ? this._is[z(this._is[qh])] : null
            }
        }, length: {
            get: function () {
                return this._is ? this._is[qh] : 0
            }
        }
    });
    var nq = (2 * Math.PI, .5 * Math.PI), eq = function (t, i) {
        i = i.toUpperCase();
        for (var n = FG ? t[Yd] : t.firstElementChild; n && (1 != n[Ud] || n[Wd] && n[Wd].toUpperCase() != i);)n = FG ? n[Xd] : n[Vd];
        return n && 1 == n[Ud] && n[Wd] && n[Wd][Zd]() == i ? n : null
    }, sq = function (t, i, n) {
        t instanceof sq && (i = t.y, t = t.x, n = t[Mo]), this.set(t, i, n)
    }, hq = function (t, i, n, e) {
        var s = t - n, h = i - e;
        return Math[fo](s * s + h * h)
    };
    sq[tr] = {
        x: 0, y: 0, rotate: n, set: function (t, i, n) {
            this.x = t || 0, this.y = i || 0, this.rotate = n || 0
        }, negate: function () {
            this.x = -this.x, this.y = -this.y
        }, offset: function (t, i) {
            this.x += t, this.y += i
        }, equals: function (t) {
            return this.x == t.x && this.y == t.y
        }, distanceTo: function (t) {
            return hq(this.x, this.y, t.x, t.y)
        }, toString: function () {
            return Kd + this.x + Jd + this.y + Lr
        }, clone: function () {
            return new sq(this.x, this.y)
        }
    }, Object[hr](sq[tr], Qd, {
        get: function () {
            return Math[fo](this.x * this.x + this.y * this.y)
        }
    });
    var rq = function (t, i, e, s) {
        t !== n && this._m6(t, i, e, s)
    };
    rq[tr] = {
        _mn: null, _ml: null, _mj: null, _mp: null, _mq: null, _ms: null, _mu: 1, _m6: function (t, i, n, e) {
            this._mn = t, this._ml = i, this._mj = n, this._mp = e, t == n ? (this._mq = -1, this._mu = 0, this._ms = t) : (this._mq = (i - e) / (t - n), this._ms = i - this._mq * t, this._mu = 1), this._k7 = Math[qr](this._mp - this._ml, this._mj - this._mn), this._muos = Math.cos(this._k7), this._sin = Math.sin(this._k7)
        }, _dd: function (t) {
            return 0 == this._mu ? Number.NaN : this._mq * t + this._ms
        }, _db: function (t) {
            return 0 == this._mq ? Number.NaN : (t - this._ms) / this._mq
        }, _$d: function (t) {
            var i, n, e, s, h, r = t[0], a = t[2], o = t[4], f = t[1], u = t[3], c = t[5], _ = this._mq, d = this._ms,
                l = this._mu;
            if (0 == l ? (e = Math[fo]((-_ * _ * r - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * r), s = -_ * a + _ * r, h = _ * o - 2 * _ * a + _ * r) : (e = Math[fo]((-f + _ * r + d) * c + u * u + (-2 * _ * a - 2 * d) * u + (_ * o + d) * f + (-_ * _ * r - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * r), s = -u + f + _ * a - _ * r, h = c - 2 * u + f - _ * o + 2 * _ * a - _ * r), 0 != h) {
                i = (e + s) / h, n = (-e + s) / h;
                var v, b;
                return i >= 0 && 1 >= i && (v = Fi(i, t)), n >= 0 && 1 >= n && (b = Fi(n, t)), v && b ? [v, b] : v ? v : b ? b : void 0
            }
        }, _40: function (t, i, n) {
            if (this._mq == t._mq || 0 == this._mu && 0 == t._mu) return null;
            var e, s;
            if (e = 0 == this._mu ? this._ms : 0 == t._mu ? t._ms : (t._ms - this._ms) / (this._mq - t._mq), s = 0 == this._mq ? this._ms : 0 == t._mq ? t._ms : this._mu ? this._mq * e + this._ms : t._mq * e + t._ms, !i) return {
                x: e,
                y: s
            };
            var h, r, a;
            if (n) h = -i / 2, r = -h; else {
                h = -hq(this._mn, this._ml, e, s), r = hq(this._mj, this._mp, e, s);
                var o = -h + r;
                if (o > i) {
                    var f = i / o;
                    h *= f, r *= f
                } else a = (i - o) / 2
            }
            var u = this._7u(e, s, h), c = this._7u(e, s, r);
            return a && (u._rest = a, c[tl] = a), [u, c]
        }, _7u: function (t, i, n) {
            return 0 == this._mu ? {x: t, y: i + n} : {x: t + n * this[il], y: i + n * this[zr]}
        }
    };
    var aq = function (t, i) {
        this.width = t, this[Ra] = i
    };
    aq.prototype = {
        width: 0, height: 0, isEmpty: function () {
            return this.width <= 0 || this[Ra] <= 0
        }, clone: function () {
            return new aq(this.width, this.height)
        }, toString: function () {
            return nl + this[Pa] + Jd + this.height + Lr
        }
    };
    var oq = function (t, i, e, s) {
        t instanceof Object && !N(t) && (i = t.y, e = t[Pa], s = t[Ra], t = t.x), e === n && (e = -1), s === n && (s = -1), this.x = t || 0, this.y = i || 0, this[Pa] = e, this[Ra] = s
    };
    oq[tr] = {
        x: 0, y: 0, width: -1, height: -1, setByRect: function (t) {
            this.x = t.x || 0, this.y = t.y || 0, this.width = t.width || 0, this[Ra] = t.height || 0
        }, set: function (t, i, n, e) {
            this.x = t || 0, this.y = i || 0, this[Pa] = n || 0, this.height = e || 0
        }, offset: function (t, i) {
            return this.x += t, this.y += i, this
        }, contains: function (t, i) {
            return t instanceof oq ? ai(this.x, this.y, this[Pa], this[Ra], t.x, t.y, t[Pa], t[Ra], i) : t >= this.x && t <= this.x + this[Pa] && i >= this.y && i <= this.y + this[Ra]
        }, intersectsPoint: function (t, i, n) {
            return this[Pa] <= 0 && this[Ra] <= 0 ? !1 : n ? this[el](t - n, i - n, 2 * n, 2 * n) : t >= this.x && t <= this.x + this[Pa] && i >= this.y && i <= this.y + this[Ra]
        }, intersectsRect: function (t, i, n, e) {
            return hi(this.x, this.y, this[Pa], this[Ra], t, i, n, e)
        }, intersects: function (t, i) {
            return N(t.width) ? this.intersectsRect(t.x, t.y, t.width, t[Ra]) : this[bo](t, i)
        }, intersection: function (t, i, n, e) {
            var s = this.x, h = this.y, r = s;
            r += this[Pa];
            var a = h;
            a += this[Ra];
            var o = t;
            o += n;
            var f = i;
            return f += e, t > s && (s = t), i > h && (h = i), r > o && (r = o), a > f && (a = f), r -= s, a -= h, 0 > r || 0 > a ? null : new oq(s, h, r, a)
        }, addPoint: function (t) {
            this.add(t.x, t.y)
        }, add: function (t, i) {
            if (N(t[Pa])) return this[sl](t.x, t.y, t[Pa], t.height);
            if (N(t.x) && (i = t.y, t = t.x), this[Pa] < 0 || this[Ra] < 0) return this.x = t, this.y = i, void (this.width = this.height = 0);
            var n = this.x, e = this.y, s = this[Pa], h = this.height;
            s += n, h += e, n > t && (n = t), e > i && (e = i), t > s && (s = t), i > h && (h = i), s -= n, h -= e, s > Number[hl] && (s = Number[hl]), h > Number.MAX_VALUE && (h = Number[hl]), this.set(n, e, s, h)
        }, addRect: function (t, i, n, e) {
            var s = this[Pa], h = this.height;
            (0 > s || 0 > h) && this.set(t, i, n, e);
            var r = n, a = e;
            if (!(0 > r || 0 > a)) {
                var o = this.x, f = this.y;
                s += o, h += f;
                var u = t, c = i;
                r += u, a += c, o > u && (o = u), f > c && (f = c), r > s && (s = r), a > h && (h = a), s -= o, h -= f, s > Number[hl] && (s = Number[hl]), h > Number[hl] && (h = Number.MAX_VALUE), this.set(o, f, s, h)
            }
        }, shrink: function (t, i, n, e) {
            return N(t) ? 1 == arguments[qh] ? e = i = n = t || 0 : 2 == arguments[qh] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[Go] || 0, n = t[Hr] || 0, e = t[Yr] || 0, t = t.top || 0), this.x += i, this.y += t, this[Pa] -= i + e, this[Ra] -= t + n, this
        }, grow: function (t, i, n, e) {
            return N(t) ? 1 == arguments[qh] ? e = i = n = t || 0 : 2 == arguments[qh] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[Go] || 0, n = t[Hr] || 0, e = t.right || 0, t = t.top || 0), this.x -= i, this.y -= t, this[Pa] += i + e, this[Ra] += t + n, this
        }, scale: function (t) {
            return this.x *= t, this.y *= t, this[Pa] *= t, this[Ra] *= t, this
        }, isEmpty: function () {
            return this[Pa] <= 0 && this.height <= 0
        }, toString: function () {
            return this.x + rl + this.y + rl + this[Pa] + rl + this[Ra]
        }, union: function (t) {
            var i = this.width, n = this[Ra];
            if (0 > i || 0 > n) return new oq(t.x, t.y, t.width, t[Ra]);
            var e = t.width, s = t.height;
            if (0 > e || 0 > s) return new oq(this.x, this.y, this[Pa], this.height);
            var h = this.x, r = this.y;
            i += h, n += r;
            var a = t.x, o = t.y;
            return e += a, s += o, h > a && (h = a), r > o && (r = o), e > i && (i = e), s > n && (n = s), i -= h, n -= r, i > Number.MAX_VALUE && (i = Number[hl]), n > Number.MAX_VALUE && (n = Number.MAX_VALUE), new oq(h, r, i, n)
        }, clear: function () {
            this.set(0, 0, -1, -1)
        }, equals: function (t) {
            return t && this.x == t.x && this.y == t.y && this.width == t[Pa] && this[Ra] == t.height
        }, clone: function (t, i) {
            return new oq(this.x + (t || 0), this.y + (i || 0), this[Pa], this.height)
        }, toArray: function () {
            return [this.x, this.y, this[Pa], this[Ra]]
        }, getIntersectionPoint: function (t, i, n, e) {
            return si(this, t, i, n, e)
        }
    }, E(oq, aq), oq[xu] = function (t, i) {
        return t == i || t && i && t.x == i.x && t.y == i.y && t[Pa] == i.width && t[Ra] == i[Ra]
    }, K(oq.prototype, {
        left: {
            get: function () {
                return this.x
            }
        }, top: {
            get: function () {
                return this.y
            }
        }, bottom: {
            get: function () {
                return this.y + this[Ra]
            }
        }, right: {
            get: function () {
                return this.x + this[Pa]
            }
        }, cx: {
            get: function () {
                return this.x + this[Pa] / 2
            }
        }, cy: {
            get: function () {
                return this.y + this[Ra] / 2
            }
        }, center: {
            get: function () {
                return new sq(this.cx, this.cy)
            }
        }
    }), oq[qc] = hi, oq[al] = oi, oq.intersectsPoint = ri;
    var fq = function (t, i, n, e) {
        1 == arguments.length ? i = n = e = t : 2 == arguments.length && (n = t, e = i), this.set(t, i, n, e)
    };
    fq[tr] = {
        top: 0, bottom: 0, left: 0, right: 0, set: function (t, i, n, e) {
            this.top = t || 0, this[Go] = i || 0, this[Hr] = n || 0, this[Yr] = e || 0
        }, clone: function () {
            return new fq(this.top, this.left, this.bottom, this[Yr])
        }, equals: function (t) {
            return t && this.top == t.top && this[Hr] == t[Hr] && this[Go] == t[Go] && this[Yr] == t.right
        }
    };
    var uq = function (t, i) {
        this[Wr] = t, this[Xr] = i
    };
    uq[tr] = {
        verticalPosition: !1, horizontalPosition: !1, toString: function () {
            return (this[Wr] || "") + (this[Xr] || "")
        }
    }, Z(uq.prototype, ol, {
        get: function () {
            return (this[Wr] || "") + (this[Xr] || "")
        }
    });
    var cq = fl, _q = ul, dq = cl, lq = du, vq = _l, bq = dl;
    uq[ll] = new uq(cq, lq), uq[vl] = new uq(cq, vq), uq[bl] = new uq(cq, bq), uq[gl] = new uq(_q, lq), uq[yl] = new uq(_q, vq), uq[ml] = new uq(_q, bq), uq.RIGHT_TOP = new uq(dq, lq), uq[xl] = new uq(dq, vq), uq[pl] = new uq(dq, bq);
    var gq = [uq[ll], uq[vl], uq[bl], uq[gl], uq[yl], uq[ml], uq[El], uq[xl], uq.RIGHT_BOTTOM];
    Z(uq, Sr, {
        get: function () {
            return gq[z(gq.length)]
        }
    }), uq[Ur] = function (t) {
        for (var i in uq) {
            var n = uq[i];
            if (n && Sr != i && n instanceof uq && n.toString() == t) return n
        }
    };
    var yq = function (t, i, n, e, s) {
        this.set(t, i, n, e), this[wl] = s
    };
    yq[tr] = {
        radius: 0, classify: function (t, i, n, e) {
            return i > t ? 0 : i + e > t ? 1 : n - e > t ? 2 : n > t ? 3 : 4
        }, intersectsRect: function (t, i, n, e) {
            if (T(this, yq, el, arguments) === !1) return !1;
            var s = this.x, h = this.y, r = s + this[Pa], a = h + this.height, o = 2 * radius, f = 2 * radius,
                u = Math.min(this[Pa], Math.abs(o)) / 2, c = Math.min(this[Ra], Math.abs(f)) / 2,
                _ = this[Tl](t, s, r, u), d = this[Tl](t + n, s, r, u), l = this[Tl](i, h, a, c),
                v = this[Tl](i + e, h, a, c);
            return 2 == _ || 2 == d || 2 == l || 2 == v ? !0 : 2 > _ && d > 2 || 2 > l && v > 2 ? !0 : (t = 1 == d ? t = t + n - (s + u) : t -= r - u, i = 1 == v ? i = i + e - (h + c) : i -= a - c, t /= u, i /= c, 1 >= t * t + i * i)
        }, intersectsPoint: function (t, i) {
            if (T(this, yq, bo, arguments) === !1) return !1;
            var n = this.x, e = this.y, s = n + this[Pa], h = e + this[Ra];
            if (n > t || e > i || t >= s || i >= h) return !1;
            var r = 2 * radius, a = 2 * radius, o = Math.min(this[Pa], Math.abs(r)) / 2,
                f = Math.min(this[Ra], Math.abs(a)) / 2;
            return t >= (n += o) && t < (n = s - o) ? !0 : i >= (e += f) && i < (e = h - f) ? !0 : (t = (t - n) / o, i = (i - e) / f, 1 >= t * t + i * i)
        }, clone: function () {
            return new yq(this.x, this.y, this[Pa], this[Ra], this.radius)
        }
    }, E(yq, oq);
    var mq = function (t, i, n, e) {
        this[Ho] = t, this[To] = i, this[dd] = n, this.value = e
    };
    mq[tr] = {
        source: null, type: null, kind: null, value: null, toString: function () {
            return Ml + this[Ho] + kl + this[To] + Ol + this[dd]
        }
    };
    var xq = function (t, i, n, e, s) {
        this.source = t, this[dd] = i, this.oldValue = e, this[_c] = n, this[Sl] = s
    };
    xq[tr] = {
        type: Il, propertyType: null, toString: function () {
            return Ml + this.source + kl + this[To] + Al + this[dd] + Cl + this[Ll] + Pl + this[_c]
        }
    }, E(xq, mq), Z(xq[tr], Rl, {
        get: function () {
            return this.kind
        }, set: function (t) {
            this[dd] = t
        }
    });
    var pq = function (t, i, n) {
        this[Ho] = t, this[Ll] = t[Eu], this[_c] = i, this.newIndex = n, this.oldValue && (this[Dl] = this.oldValue[Nl](t))
    };
    pq[tr] = {kind: Eu}, E(pq, xq);
    var Eq = function (t, i) {
        this[Ho] = t, this[_c] = i
    };
    Eq[tr][dd] = Bl, E(Eq, xq);
    var wq = function (t, i) {
        this[Ho] = t, this[_c] = i
    };
    wq[tr].kind = jl, E(wq, xq);
    var Tq = function (t, i, n, e) {
        this[Ho] = i, this[Ll] = n, this.value = e, this[Eu] = t, this[$l] = i, this[Dl] = n, this.newIndex = e
    };
    Tq[tr].kind = Fl, E(Tq, xq);
    var Mq = function () {
    };
    Mq.prototype = {
        listener: null, beforeEvent: function (t) {
            return null != this.listener && this[Gl][ar] ? this[Gl][ar](t) : !0
        }, onEvent: function (t) {
            null != this[Gl] && this.listener[or] && this.listener[or](t)
        }
    };
    var kq = function () {
        w(this, kq, arguments), this[ql] = {}, this.listeners = []
    }, Oq = function (t, i) {
        this.listener = t, this[zl] = i, t instanceof Function ? this[or] = t : (this[or] = t[or], this.beforeEvent = t[ar]), this[xu] = function (t) {
            return t && this.listener == t[Gl] && this[zl] == t.scope
        }
    };
    Oq[tr] = {
        equals: function (t) {
            return t && this[Gl] == t[Gl] && this.scope == t[zl]
        }, destroy: function () {
            delete this[zl], delete this[Gl]
        }
    }, kq[tr] = {
        listeners: null, _msr: function () {
            return this[Hl] && this[Hl][qh] > 0
        }, _7s: function (t, i) {
            return t instanceof kq ? t : new Oq(t, i)
        }, _9d: function (t, i) {
            if (t instanceof kq) return this[Hl][Jh](t);
            for (var n = this[Hl], e = 0, s = n[qh]; s > e; e++) {
                var h = n[e];
                if (h[Gl] == t && h[zl] == i) return e
            }
            return -1
        }, contains: function (t, i) {
            return this._9d(t, i) >= 0
        }, addListener: function (t, i) {
            return this[e_](t, i) ? !1 : void this[Hl][Kh](this._7s(t, i))
        }, removeListener: function (t, i) {
            var n = this._9d(t, i);
            n >= 0 && this.listeners[Uh](n, 1)
        }, on: function (t, i) {
            this[Yl](t, i)
        }, un: function (t, i, n) {
            this.removeListener(t, i, n)
        }, onEvent: function (t) {
            return this[Hl] ? void l(this.listeners, function (i) {
                i[or] && (i[zl] ? i[or][Hh](i[zl], t) : i[or](t))
            }, this) : !1
        }, beforeEvent: function (t) {
            return this[Hl] ? l(this[Hl], function (i) {
                return i[ar] ? i[zl] ? i[ar].call(i[zl], t) : i[ar](t) : !0
            }, this) : !0
        }, _dk: function (t) {
            return this[ar](t) === !1 ? !1 : (this[or](t), !0)
        }, clear: function () {
            this.listeners = []
        }, destroy: function () {
            this[Da]()
        }
    }, E(kq, Mq);
    var Sq = {
        onEvent: function () {
        }, beforeEvent: function () {
        }
    }, Iq = function (t, i, n, e, s) {
        this[Ho] = t, this[To] = Ul, this[dd] = i, this[mo] = n, this[Wl] = e, this.oldIndex = s
    };
    Iq[tr] = {
        index: -1, oldIndex: -1, toString: function () {
            return Ml + this[Ho] + kl + this[To] + Ol + this[dd] + Xl + this[mo] + Vl + this[Wl] + Zl + this[Dl]
        }
    }, E(Iq, mq), Iq[Kl] = Jl, Iq[Ql] = Vh, Iq.KIND_CLEAR = Da, Iq.KIND_INDEX_CHANGE = tv;
    var Aq = function () {
        this.id = ++BG, this._d2 = {}
    };
    Aq.prototype = {
        _d2: null, id: null, get: function (t) {
            return this._d2[t]
        }, set: function (t, i) {
            var n = this.get(t);
            if (n === i) return !1;
            var e = new xq(this, t, i, n);
            return e[Sl] = bz[bc], this[iv](t, i, e, this._d2)
        }, _ms4: function (t, i, e, s) {
            return this[ar](e) === !1 ? !1 : (s || (s = this._d2), i === n ? delete s[t] : s[t] = i, this.onEvent(e), !0)
        }, remove: function (t) {
            this.set(t, null)
        }, valueOf: function () {
            return this.id
        }, toString: function () {
            return this.id
        }, _dr: function (t, i) {
            if (i === n && (i = -1), this == t || t == this._j9) return !1;
            if (t && this == t._j9 && !t._dr(null)) return !1;
            var e = new pq(this, t, i);
            if (!this.beforeEvent(e)) return !1;
            var s, h, r = this._j9;
            return t && (s = new Eq(t, this), !t.beforeEvent(s)) ? !1 : null == r || (h = new wq(r, this), r[ar](h)) ? (this._j9 = t, null != t && ui(t, this, i), null != r && ci(r, this), this.onEvent(e), null != t && t.onEvent(s), null != r && r.onEvent(h), this[nv](r, t), !0) : !1
        }, addChild: function (t, i) {
            var n = t._dr(this, i);
            return n && this[ev](t, i), n
        }, onChildAdd: function () {
        }, removeChild: function (t) {
            if (!this._fe || !this._fe[e_](t)) return !1;
            var i = t._dr(null);
            return this[Vr](t), i
        }, onChildRemove: function () {
        }, toChildren: function () {
            return this._fe ? this._fe[Wc]() : null
        }, clearChildren: function () {
            if (this._fe && this._fe.length) {
                var t = this[sv]();
                l(t, function (t) {
                    t._dr(null)
                }, this), this[hv](t)
            }
        }, forEachChild: function (t, i) {
            return this.hasChildren() ? this._fe.forEach(t, i) : !1
        }, onChildrenClear: function () {
        }, getChildIndex: function (t) {
            return this._fe && this._fe[qh] ? this._fe[Jh](t) : -1
        }, setChildIndex: function (t, i) {
            if (!this._fe || !this._fe[qh]) return !1;
            var n = this._fe.indexOf(t);
            if (0 > n || n == i) return !1;
            var e = new Tq(this, t, n, i);
            return this[ar](e) === !1 ? !1 : (this._fe[Vh](t) && this._fe.add(t, i), this[or](e), !0)
        }, hasChildren: function () {
            return this._fe && this._fe[qh] > 0
        }, getChildAt: function (t) {
            return null == this._fe ? null : this._fe._is[t]
        }, isDescendantOf: function (t) {
            if (!t[Gh]()) return !1;
            for (var i = this.parent; null != i;) {
                if (t == i) return !0;
                i = i.parent
            }
            return !1
        }, onParentChanged: function () {
        }, firePropertyChangeEvent: function (t, i, n, e) {
            this[or](new xq(this, t, i, n, e))
        }
    }, E(Aq, Mq), K(Aq[tr], {
        childrenCount: {
            get: function () {
                return this._fe ? this._fe.length : 0
            }
        }, children: {
            get: function () {
                return this._fe || (this._fe = new iq), this._fe
            }
        }, parent: {
            get: function () {
                return this._j9
            }, set: function (t) {
                this._dr(t, -1)
            }
        }, properties: {
            get: function () {
                return this._d2
            }, set: function (t) {
                this._d2 != t && (this._d2 = t)
            }
        }
    });
    var Cq = function () {
        this._is = [], this._l5 = {}, this._1o = new kq
    };
    Cq.prototype = {
        beforeEvent: function (t) {
            return null != this._1o && this._1o[ar] ? this._1o[ar](t) : !0
        }, onEvent: function (t) {
            return this._1o instanceof Function ? void this._1o(t) : void (null != this._1o && this._1o[or] && this._1o.onEvent(t))
        }, _1o: null, setIndex: function (t, i) {
            if (!this[e_](t)) throw new Error(pa + t.getId() + Gd);
            var n = this[Jh](t);
            if (n == i) return !1;
            var e = new Iq(this, Iq.KIND_INDEX_CHANGE, t, i, n);
            return this.beforeEvent(e) === !1 ? !1 : (this._is[Vh](t) >= 0 && this._is.add(i, t), this[or](e), !0)
        }, _fi: function (t, i) {
            if (0 == t[qh]) return !1;
            var e = !1, s = i >= 0, h = new Iq(this, Iq[Kl], t, i);
            if (this.beforeEvent(h) === !1) return !1;
            var r = [];
            t = t._is || t;
            for (var a = 0, o = t[qh]; o > a; a++) {
                var f = t[a];
                null !== f && f !== n && this._jy(f, i, !0) && (r.push(f), e = !0, s && i++)
            }
            return h[mo] = r, this[or](h), e
        }, _jy: function (t, i, n) {
            if (this[Su](t) === !1) return !1;
            if (n) return T(this, Cq, rv, arguments);
            var e = new Iq(this, Iq[Kl], t, i);
            return this.beforeEvent(e) === !1 ? !1 : T(this, Cq, rv, arguments) ? (this._jx(t, e), t) : !1
        }, _jx: function (t, i) {
            this[or](i)
        }, _mqi: function (t) {
            if (0 == t[qh]) return !1;
            var i = new Iq(this, Iq.KIND_REMOVE, t);
            if (this[ar](i) === !1) return !1;
            var e = [], s = !1;
            t = t._is || t;
            for (var h = 0, r = t.length; r > h; h++) {
                var a = t[h];
                if (null !== a && a !== n) {
                    var o = a.id || a;
                    a.id === n && (a = null), this._fm(o, a, !0) && (e[Kh](a), s = !0)
                }
            }
            return i[mo] = e, this.onEvent(i), s
        }, _fm: function (t, i, n) {
            if (n) return T(this, Cq, av, arguments);
            var e = new Iq(this, Iq[Ql], i);
            return this.beforeEvent(e) === !1 ? !1 : T(this, Cq, av, arguments) ? (this[or](e), !0) : !1
        }, clear: function () {
            if (this[Nf]()) return !1;
            var t = new Iq(this, Iq[ov], this.toDatas());
            return this[ar](t) === !1 ? !1 : T(this, Cq, Da) ? (this[or](t), !0) : !1
        }, accept: function (t) {
            return this[fv] && this[fv](t) === !1 ? !1 : !0
        }
    }, E(Cq, iq), Z(Cq.prototype, uv, {
        get: function () {
            return this._1o
        }
    });
    var Lq = function () {
        w(this, Lq, arguments), this[cv] = new kq, this[_v] = new Pq(this), this._selectionModel._1o = this[cv], this[dv] = new kq, this[dv].addListener({
            beforeEvent: this[lv],
            onEvent: this[vv]
        }, this), this.parentChangeDispatcher = new kq, this[bv] = new kq, this[gv] = new iq;
        var t = this;
        this.$roots.setIndex = function (i, n) {
            if (!t[gv].contains(i)) throw new Error(pa + i.id + Gd);
            var e = t[gv]._is[Jh](i);
            if (e == n) return !1;
            t[gv]._is[Uh](e, 1), t[gv]._is[Uh](n, 0, i), t[yv] = !0;
            var s = new Tq(t, i, e, n);
            return t._20(s), !0
        }
    };
    Lq[tr] = {
        selectionModel: null,
        selectionChangeDispatcher: null,
        dataChangeDispatcher: null,
        parentChangeDispatcher: null,
        roots: null,
        _jx: function (t, i) {
            t[Gl] = this[dv], t[Eu] || this.$roots.add(t), this.onEvent(i)
        },
        _fm: function (t, i) {
            if (T(this, Lq, av, arguments)) {
                if (i instanceof EY) i[mv](); else if (i instanceof wY) {
                    var n = i[xv]();
                    this[Vh](n)
                }
                var e = i[Eu];
                return null == e ? this[gv][Vh](i) : (e[pv](i), e.__6c = !0), i[Gh]() && this.remove(i[sv]()), i[Gl] = null, !0
            }
            return !1
        },
        _5i: function (t) {
            var i = t.source;
            this[e_](i) && (null == i.parent ? this[gv].add(i) : null == t.oldValue && this[gv][Vh](i), this[Ev][or](t))
        },
        _20: function (t) {
            this[bv].onEvent(t)
        },
        beforeDataPropertyChange: function (t) {
            return t instanceof pq ? this[Ev][ar](t) : !0
        },
        onDataPropertyChanged: function (t) {
            return t instanceof pq ? (this[yv] = !0, t.source._mueIndexFlag = !0, void this._5i(t)) : void (t instanceof Tq && (this[yv] = !0, t[Ho]._mueIndexFlag = !0, this._20(t)))
        },
        toRoots: function () {
            return this[gv][Wc]()
        },
        _fx: function (t) {
            var i, n = t._j9;
            i = n ? n._fe : this[gv];
            var e = i[Jh](t);
            if (0 > e) throw new Error(wv + t + "' not exist in the box");
            return 0 == e ? n : i[$d](e - 1)
        },
        _g0: function (t) {
            var i, n = t._j9;
            i = n ? n._fe : this.$roots;
            var e = i[Jh](t);
            if (0 > e) throw new Error(wv + t + "' not exist in the box");
            return e == i.length - 1 ? n ? this._g0(n) : null : i[$d](e + 1)
        },
        forEachByDepthFirst: function (t, i, n) {
            return this.$roots.length ? h(this[gv], t, i, n) : !1
        },
        forEachByDepthFirstReverse: function (t, i, n) {
            return this[gv].length ? o(this[gv], t, i, n) : !1
        },
        forEachByBreadthFirst: function (t, i) {
            return this[gv][qh] ? c(this.$roots, t, i) : !1
        },
        forEachByBreadthFirstReverse: function (t, i) {
            return this[gv].length ? _(this[gv], t, i) : !1
        },
        clear: function () {
            return T(this, Lq, Da) ? (this[gv][Da](), this[F_][Da](), !0) : !1
        }
    }, E(Lq, Cq), K(Lq.prototype, {
        selectionModel: {
            get: function () {
                return this._selectionModel
            }
        }, roots: {
            get: function () {
                return this[gv]
            }
        }
    });
    var Pq = function (t) {
        w(this, Pq), this.box = t, this[Tv] = {
            onEvent: function (t) {
                Iq.KIND_REMOVE == t.kind ? null != t.data ? this[Vh](t.data) : null != t[ld] && this.remove(t.datas) : Iq[ov] == t[dd] && this[Da]()
            }
        }, this.box.listChangeDispatcher[Yl](this._msoxChangeListener, this)
    };
    Pq[tr] = {
        box: null, isSelected: function (t) {
            return this[Fd](t.id || t)
        }, select: function (t) {
            return this.add(t)
        }, unselect: function (t) {
            return this[Vh](t)
        }, reverseSelect: function (t) {
            return this.contains(t) ? this[Vh](t) : this.add(t)
        }, accept: function (t) {
            return this.box[e_](t)
        }
    }, E(Pq, Cq);
    var Rq = null, Dq = null, Nq = function () {
        if (!i.createElement) return function (t) {
            return t
        };
        var t = i.createElement(o_), e = t[ja], s = {};
        return function (t) {
            if (s[t]) return s[t];
            var i = _i(t);
            return e[i] !== n || Dq && e[i = _i(Dq + i)] !== n ? (s[t] = i, i) : t
        }
    }(), Bq = {};
    !function () {
        if (!i[Mv]) return !1;
        for (var e = i[Mv], s = "Webkit Moz O ms Khtml"[gr](yr), h = 0; h < s[qh]; h++)if (e[ja][s[h] + kv] !== n) {
            Dq = Jr + s[h].toLowerCase() + Jr;
            break
        }
        var r = i.createElement(ja);
        t.createPopup || r[Ov](i[Sv]("")), r[To] = Iv, r.id = Av, e[Ov](r), Rq = r[Cv];
        var a, o;
        for (var f in Bq) {
            var u = Bq[f];
            a = f, o = "";
            for (var c in u) o += Nq(c) + ia + u[c] + Lv;
            gi(a, o)
        }
    }();
    var jq = function (t, i, n, e, s) {
        if (s) {
            var h = function (t) {
                h.handle[Hh](h[zl], t)
            };
            return h[zl] = s, h[Pv] = n, t[Rv](i, h, e), h
        }
        return t.addEventListener(i, n, e), n
    }, $q = function (t, i, n) {
        t.removeEventListener(i, n)
    }, F = function (t) {
        t[Tr] ? t.preventDefault() : t[Dv] = !1
    }, G = function (t) {
        t.stopPropagation ? t.stopPropagation() : t[kr] || (t[kr] = !0)
    }, q = function (t) {
        F(t), G(t)
    };
    if (tq[Nv] = 200, tq.LONG_PRESS_INTERVAL = 800, t[pd] && navigator[Ed]) {
        var Fq, Gq = /mobile|tablet|ip(ad|hone|od)|android/i, qq = c_ in t, zq = qq && Gq.test(navigator[Ed]);
        if (zq) Fq = Bv; else {
            var Hq = jv in t ? "mousewheel" : $v;
            Fq = Fv + Hq, qq && (Fq += Gv)
        }
        Fq = Fq[gr](/[\s,]+/);
        var Yq = function (i) {
            return t[qv] && i instanceof t[qv]
        }, Uq = function () {
            return tq[Nv]
        }, Wq = function () {
            return tq.LONG_PRESS_INTERVAL
        }, F = function (t) {
            t.preventDefault ? t[Tr]() : t[Dv] = !1
        }, G = function (t) {
            t[Mr] && t.stopPropagation(), t.cancelBubble = !0
        }, q = function (t) {
            F(t), G(t)
        }, Xq = function (t) {
            return t.defaultPrevented || t[Dv] === !1
        }, Vq = function (t) {
            iz[zv] && iz[zv][Hv](t)
        }, Zq = function (t) {
            if (iz[zv]) {
                var i = iz[zv];
                i[Yv](t), Kq(null)
            }
        }, Kq = function (t) {
            iz[zv] != t && (iz[zv] && (iz[zv][Uv] = !1), iz._muurrentItem = t)
        }, Jq = function (i, n) {
            Fq[Kf](function (t) {
                i[Rv](t, n, !1)
            }), JG || iz._mqo || (iz._mqo = !0, t.addEventListener(Wv, Vq, !0), t[Rv](Xv, Zq, !0))
        }, Qq = function (t, i) {
            Fq[Kf](function (n) {
                t[Vv](n, i, !1)
            })
        }, tz = function (t) {
            return t.touches ? {timeStamp: t[Zv], x: t.cx, y: t.cy} : {timeStamp: t[Zv], x: t.clientX, y: t[ca]}
        };
        mi.prototype = {
            _install: function () {
                this[Kv] || (this[Kv] = function (t) {
                    this[Jv](t)
                }[cr](this), Jq(this._lq, this[Kv]))
            }, _uninstall: function () {
                this.__mqction && Qq(this._lq, this.__mqction)
            }, _mqction: function (t) {
                t = this[Qv](t);
                var i = t.type;
                this._handleEvent(t, i) === !1 && this[tb](t, ib + i)
            }, _muancelLongPressTimer: function () {
                this.__longPressTimer && (clearTimeout(this[nb]), this[nb] = null)
            }, __kcLongPress: function (t) {
                this.__onLongPressFunction || (this.__onLongPressFunction = function () {
                    this[eb] && (this[sb] = !0, this[eb].button ? this[tb](this[eb], hb) : this._onEvent(this[eb], rb))
                }[cr](this)), this[ab](), this.__longPressTimer = setTimeout(this[ob], Wq(t))
            }, __fixTouchEvent: function (t) {
                for (var i, n, e = 0, s = 0, h = t.touches[qh], r = 0; h > r;) {
                    var a = t[$r][r++], o = a[ua], f = a[ca];
                    if (2 == r) {
                        var u = n[0] - o, c = n[1] - f;
                        i = Math[fo](u * u + c * c)
                    }
                    n = [o, f], e += o, s += f
                }
                t.cx = e / h, t.cy = s / h, t.center = {x: t.cx, y: t.cy, clientX: t.cx, clientY: t.cy}, t[Qd] = i
            }, __touchCountChange: function (t) {
                this[ga][Da](), this._9g = tz(t)
            }, _handleTouchEvent: function (t, i) {
                switch (i) {
                    case "touchstart":
                        q(t), this[fb](t), this[ub](t);
                        var n = t[$r][qh];
                        this[eb] || (this[eb] = t, this[cb](t), this.__muancelClick = !1, this[_b](t)), 1 == n && (this[db] = null), n >= 2 && !this[db] && (this[db] = {
                            cx: t.cx,
                            cy: t.cy,
                            distance: t[Qd]
                        });
                        break;
                    case "touchmove":
                        q(t), this.__fixTouchEvent(t);
                        var n = t[$r][qh];
                        if (n >= 2 && this[db]) {
                            var e = this[db].distance;
                            t._scale = t[Qd] / e, t.dScale = this[db].prevScale ? t[lb] / this[db][vb] : t[lb], this.__kcMulTouchEvent[vb] = t._scale, this.__pinching || (this.__pinching = !0, this[tb](t, bb))
                        }
                        this[Uv] || (this.__dragging = !0, this[gb](t)), this[yb](t), this[mb] && this[tb](t, xb);
                        break;
                    case "touchend":
                        q(t);
                        var n = t[$r][qh];
                        n && (this[fb](t), this.__touchCountChange(t)), 1 >= n && (this[mb] && (this[mb] = !1, this._onEvent(t, pb)), this.__kcMulTouchEvent = null), 0 == n && (this.__dragging ? (this[Eb](t), this[Uv] = !1) : t[Zv] - this._kcEvent[Zv] < .8 * Uq(t) && this.__onclick(this[eb]), this._onrelease(t));
                        break;
                    case "touchcancel":
                        this[Uv] = !1, this[mb] = !1, this[db] = null
                }
                return !1
            }, _handleEvent: function (t, i) {
                if (Yq(t)) return this[wb](t, i);
                if (Tb == i) q(t), Kq(this), this._9g = tz(t), this[eb] || (this[eb] = t, this[cb](t)), this.__muancelClick = !1, this[_b](t); else if (Xv == i) Kq(), this[Mb](t); else if (kb == i) {
                    if (this._delayClickEvent) return this.__onclick(t), !0
                } else if (Ob == i) {
                    if (this._delayClickEvent) return !0
                } else {
                    if (Sb == i) return this[tb](t, Ib), this[eb] && Xq(t) && Kq(this), !0;
                    if (i == Hq) {
                        var e = t[Ab];
                        if (e !== n ? e % 120 ? e % 12 || (e /= 12) : e /= 120 : e === n && (e = -t[Cb]), !e) return;
                        return t[Lb] = e, this._onEvent(t, jv)
                    }
                }
                return !1
            }, _onEvent: function (t, i) {
                if (this[Pb]) {
                    var n = this[Pb];
                    return i = i || t[To], n instanceof Function ? n(t, i) : n[i] instanceof Function ? n[i][Hh](n, t, this._scope || this._lq) : void 0
                }
            }, _toQEvent: function (t) {
                return t
            }, _onWindowMouseUp: function (t) {
                this.__dragging && (q(t), this[Uv] = !1, t = this._toQEvent(t), this[Eb](t), this[Mb](t), this[tb](t, Rb))
            }, _kcDragDistance: 4, _onWindowMouseMove: function (t) {
                if (this[eb]) {
                    if (q(t), !this[Uv]) {
                        var i = this[eb][Db] - t[Db], n = this[eb][Nb] - t[Nb];
                        if (i * i + n * n < this._kcDragDistance) return;
                        this.__dragging = !0, this[gb](t)
                    }
                    this[yb](this[Qv](t))
                }
            }, _delayClickEvent: !0, __onclick: function (t) {
                if (!this[sb]) {
                    var i = Uq(t);
                    this[Bb] ? this[jb] || (clearTimeout(this[Bb]), this[Bb] = null, this[tb](t, $b), this.__dblclicked = !0) : (this[jb] = !1, this.__mulickTimer = setTimeout(function (t) {
                        this[Bb] = null, this[jb] || this[tb](t, __)
                    }[cr](this, t, i), i))
                }
            }, _onstart: function (t) {
                t[Fb] ? this[tb](t, Gb) : this[tb](t, qb)
            }, _onrelease: function (t) {
                this[eb] && (this[ab](), t[Fb] ? this[tb](t, zb) : this[tb](t, Hb), this[eb] = null, this._9g = null)
            }, _mqppendDragInfo: function (t) {
                var i = this._9g;
                this._9g = tz(t), this[ga].add(i, this._9g, t)
            }, _kcdrag: function () {
                this[sb] = !0, this[ab](), this[eb].button ? this._onEvent(this[eb], Yb) : this[tb](this[eb], Ub)
            }, _ondrag: function (t) {
                this._mqppendDragInfo(t), this[eb][Fb] ? this[tb](t, Wb) : this._onEvent(t, Xb)
            }, _enddrag: function (t) {
                if (t.timeStamp - this._9g.timeStamp < 100) {
                    var i = this._dragPoints[Vb]();
                    i && (t.vx = i.x, t.vy = i.y)
                }
                this[eb].button ? this._onEvent(t, Zb) : this[tb](t, Kb), this[ga][Da]()
            }, _hs: function () {
                this[Jb]()
            }, _kaStatus: function () {
                iz[zv] == this && delete iz[zv], this[ab](), delete this._9g, this[eb] && (delete this._kcEvent[Qb], delete this[eb].getUI, delete this[eb])
            }
        };
        var iz = S(function (t) {
            this._k0 = t, mi.apply(this, [t[tg], null, t])
        }, {
            "super": mi, _mhData: function (t) {
                return this._k0[ig](t)
            }, _l0: function (t) {
                return this._k0[ng](t)
            }, _toQEvent: function (i) {
                return (i instanceof MouseEvent || t[qv] && i instanceof t[qv]) && (i[Qb] = this[eg][cr](this, i), i[Kc] = this._l0[cr](this, i)), i
            }, _onElementRemoved: function (t) {
                this._iiListeners(function (i) {
                    i[sg] instanceof Function && i.onElementRemoved(t, this._k0)
                })
            }, _onElementClear: function () {
                this[hg](function (t) {
                    t.onClear instanceof Function && t[rg](this._k0)
                })
            }, _hs: function (t) {
                this[ag] && this._hsInteractions(this._2gs, t), this[og] && this[fg](this[og], t), this[Jb]()
            }, _k0: null, _2gs: null, _muustomInteractionListeners: null, _m6Interaction: function (t) {
                return this[ag] == t ? !1 : (this[ag] && this._2gs.length && this[fg](this[ag]), void (this._2gs = t))
            }, _mfCustomInteractionListener: function (t) {
                this[og] || (this._muustomInteractionListeners = []), this._muustomInteractionListeners[Kh](t)
            }, _jsCustomInteractionListener: function (t) {
                this[og] && 0 != this[og][qh] && m(this[og], t)
            }, _onEvent: function (t, i, n) {
                this._k0[i] instanceof Function && this._k0[i].call(this._k0, t, n), this._2gs && this.__onEvent(t, i, this[ag], n), this[og] && this.__onEvent(t, i, this[og], n)
            }, _iiListeners: function (t) {
                this._2gs && l(this[ag], t, this), this[og] && l(this._muustomInteractionListeners, t, this)
            }, __onEvent: function (t, i, n, e) {
                if (!$(n)) return void this[ug](t, i, n, e);
                for (var s = 0; s < n[qh]; s++) {
                    var h = n[s];
                    this.__handleEvent(t, i, h, e)
                }
            }, __handleEvent: function (t, i, n, e) {
                if (!(n[Su] instanceof Function && n[Su](i, t, this._k0, e) === !1)) {
                    n.onevent instanceof Function && n.onevent(i, t, this._k0, e);
                    var s = n[i];
                    s instanceof Function && s.call(n, t, this._k0, e)
                }
            }, _hsInteraction: function (t) {
                t[cg] instanceof Function && t[cg].call(t, this._k0)
            }, _hsInteractions: function (t, i) {
                if (!$(t)) return void this[_g](t, i);
                for (var n = 0; n < t.length; n++) {
                    var e = t[n];
                    e && this._hsInteraction(e, i)
                }
            }
        })
    }
    pi.prototype = {
        limitCount: 10, points: null, add: function (t, i, n) {
            0 == this[vo].length && (this._kcX = t.x, this[dg] = t.y);
            var e = i.timeStamp - t[Zv] || 1;
            n.interval = e;
            var s = i.x - t.x, h = i.y - t.y;
            n.dx = s, n.dy = h, n.startX = this._kcX, n[lg] = this[dg], n[vg] = i.x - this._kcX, n[bg] = i.y - this[dg], this[vo][Uh](0, 0, {
                interval: e,
                dx: s,
                dy: h
            }), this.points[qh] > this[gg] && this[vo].pop()
        }, getCurrentSpeed: function () {
            if (!this[vo][qh]) return null;
            for (var t = 0, i = 0, n = 0, e = 0, s = this.points[qh]; s > e; e++) {
                var h = this[vo][e], r = h.interval;
                if (r > 150) {
                    t = 0;
                    break
                }
                if (t += r, i += h.dx, n += h.dy, t > 300) break
            }
            return 0 == t || 0 == i && 0 == n ? null : {x: i / t, y: n / t}
        }, clear: function () {
            this[vo] = []
        }
    };
    var nz, ez, sz, hz;
    zG ? (nz = yg, ez = mg, sz = xg, hz = pg) : HG ? (nz = Eg, ez = wg, sz = Tg, hz = Mg) : (nz = kg, ez = kg, sz = W_, hz = Og);
    var rz = Sg, az = Math.PI, oz = Math.pow, fz = Math.sin, uz = 1.70158, cz = {
        swing: function (t) {
            return -Math.cos(t * az) / 2 + .5
        }, easeNone: function (t) {
            return t
        }, easeIn: function (t) {
            return t * t
        }, easeOut: function (t) {
            return (2 - t) * t
        }, easeBoth: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2))
        }, easeInStrong: function (t) {
            return t * t * t * t
        }, easeOutStrong: function (t) {
            return 1 - --t * t * t * t
        }, easeBothStrong: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t)
        }, elasticIn: function (t) {
            var i = .3, n = i / 4;
            return 0 === t || 1 === t ? t : -(oz(2, 10 * (t -= 1)) * fz(2 * (t - n) * az / i))
        }, elasticOut: function (t) {
            var i = .3, n = i / 4;
            return 0 === t || 1 === t ? t : oz(2, -10 * t) * fz(2 * (t - n) * az / i) + 1
        }, elasticBoth: function (t) {
            var i = .45, n = i / 4;
            return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * oz(2, 10 * (t -= 1)) * fz(2 * (t - n) * az / i) : oz(2, -10 * (t -= 1)) * fz(2 * (t - n) * az / i) * .5 + 1
        }, backIn: function (t) {
            return 1 === t && (t -= .001), t * t * ((uz + 1) * t - uz)
        }, backOut: function (t) {
            return (t -= 1) * t * ((uz + 1) * t + uz) + 1
        }, backBoth: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * (((uz *= 1.525) + 1) * t - uz) : .5 * ((t -= 2) * t * (((uz *= 1.525) + 1) * t + uz) + 2)
        }, bounceIn: function (t) {
            return 1 - cz[Ig](1 - t)
        }, bounceOut: function (t) {
            var i, n = 7.5625;
            return i = 1 / 2.75 > t ? n * t * t : 2 / 2.75 > t ? n * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? n * (t -= 2.25 / 2.75) * t + .9375 : n * (t -= 2.625 / 2.75) * t + .984375
        }, bounceBoth: function (t) {
            return .5 > t ? .5 * cz[Ag](2 * t) : .5 * cz[Ig](2 * t - 1) + .5
        }
    }, _z = function (t) {
        this._j7 = t
    };
    _z.prototype = {
        _j7: null, _8b: function () {
            this[Cg] instanceof Function && (this[Cg](), this._muallback = null)
        }, _kc: function (t) {
            var i = Date.now();
            this._lo(), this[Cg] = t, this[Lg] = requestAnimationFrame(function n() {
                var t = Date.now(), e = t - i;
                return !e || this._j7 && this._j7(e) !== !1 ? (i = t, void (this[Lg] = requestAnimationFrame(n[cr](this)))) : void this._lo()
            }[cr](this))
        }, _7f: function () {
        }, _lo: function () {
            return this[Lg] ? (this._7f(), this._8b(), t.cancelAnimationFrame(this[Lg]), void delete this[Lg]) : !1
        }, _eh: function () {
            return null != this._requestID
        }
    };
    var dz = function (t, i, n, e) {
        this[Pg] = t, this[ba] = i || this, this._3s = e, n && n > 0 && (this._ia = n)
    };
    dz[tr] = {
        _ia: 1e3, _3s: null, _dt: 0, _lo: function () {
            return this._dt = 0, this._msv = 0, T(this, dz, Rg)
        }, _msv: 0, _j7: function (t) {
            if (this._dt += t, this._dt >= this._ia) return this[Pg].call(this[ba], 1, (1 - this[Dg]) * this._ia, t, this._ia), !1;
            var i = this._dt / this._ia;
            return this._3s && (i = this._3s(i)), this._onStep[Hh](this[ba], i, (i - this[Dg]) * this._ia, t, this._ia) === !1 ? !1 : void (this._msv = i)
        }
    }, E(dz, _z);
    var lz = function (t) {
        ni(t)
    }, vz = {
        version: Ng,
        extend: E,
        doSuperConstructor: w,
        doSuper: T,
        createFunction: function (t, i) {
            return i.bind(t)
        },
        setClass: P,
        appendClass: R,
        removeClass: D,
        forEach: l,
        forEachReverse: b,
        isNumber: N,
        isString: B,
        isBoolean: j,
        isArray: $,
        eventPreventDefault: F,
        eventStopPropagation: G,
        stopEvent: q,
        callLater: C,
        nextFrame: L,
        forEachChild: e,
        forEachByDepthFirst: h,
        forEachByDepthFirstReverse: o,
        forEachByBreadthFirst: c,
        randomInt: z,
        randomBool: H,
        randomColor: U,
        addEventListener: jq,
        getFirstElementChildByTagName: eq
    };
    vz[Bg] = JG, vz.isIOS = VG, vz[bo] = ri, vz[jg] = ai, vz.Rect = oq, vz[$g] = aq, vz.Point = sq, vz[Fg] = fq, vz[Gg] = mq, vz[qg] = xq, vz[zg] = Iq, vz.Handler = Mq, vz[Hg] = kq, vz.Position = uq, vz[Yg] = Aq, vz.SelectionModel = Pq, vz[Ug] = Lq, vz[Wg] = Sq, vz["loadURL"] = Ti, vz["loadXML"] = Ei, vz["loadJSON"] = wi, vz.isMetaKey = xi, vz[Kg] = hq, vz.HashList = iq, vz[Jg] = mi, vz["alert"] = function (t) {
        alert(t)
    }, vz["prompt"] = function (t, i, n, e) {
        var s = prompt(t, i);
        return s != i && n ? n.call(e, s) : s
    }, vz[iy] = function (t, i, n) {
        var e = confirm(t);
        return e && i ? i[Hh](n) : e
    }, vz[ny] = gi;
    var bz = {
        IMAGE_ADJUST_FLIP: ey,
        IMAGE_ADJUST_MIRROR: sy,
        SELECTION_TYPE_BORDER_RECT: hy,
        SELECTION_TYPE_BORDER: ry,
        SELECTION_TYPE_SHADOW: ay,
        NS_SVG: "http://www.w3.org/2000/svg",
        PROPERTY_TYPE_ACCESSOR: 0,
        PROPERTY_TYPE_STYLE: 1,
        PROPERTY_TYPE_CLIENT: 2,
        EDGE_TYPE_DEFAULT: null,
        EDGE_TYPE_ELBOW: oy,
        EDGE_TYPE_ELBOW_HORIZONTAL: fy,
        EDGE_TYPE_ELBOW_VERTICAL: uy,
        EDGE_TYPE_ORTHOGONAL: cy,
        EDGE_TYPE_ORTHOGONAL_HORIZONTAL: _y,
        EDGE_TYPE_ORTHOGONAL_VERTICAL: dy,
        EDGE_TYPE_HORIZONTAL_VERTICAL: ly,
        EDGE_TYPE_VERTICAL_HORIZONTAL: vy,
        EDGE_TYPE_EXTEND_TOP: by,
        EDGE_TYPE_EXTEND_LEFT: gy,
        EDGE_TYPE_EXTEND_BOTTOM: yy,
        EDGE_TYPE_EXTEND_RIGHT: my,
        EDGE_TYPE_ZIGZAG: xy,
        EDGE_CORNER_NONE: x_,
        EDGE_CORNER_ROUND: go,
        EDGE_CORNER_BEVEL: py,
        GROUP_TYPE_RECT: pu,
        GROUP_TYPE_CIRCLE: Ey,
        GROUP_TYPE_ELLIPSE: wy,
        SHAPE_CIRCLE: Ty,
        SHAPE_RECT: pu,
        SHAPE_ROUNDRECT: My,
        SHAPE_STAR: ky,
        SHAPE_TRIANGLE: Oy,
        SHAPE_HEXAGON: Sy,
        SHAPE_PENTAGON: Iy,
        SHAPE_TRAPEZIUM: Ay,
        SHAPE_RHOMBUS: Cy,
        SHAPE_PARALLELOGRAM: Ly,
        SHAPE_HEART: Py,
        SHAPE_DIAMOND: Ry,
        SHAPE_CROSS: Dy,
        SHAPE_ARROW_STANDARD: Ny,
        SHAPE_ARROW_1: By,
        SHAPE_ARROW_2: jy,
        SHAPE_ARROW_3: $y,
        SHAPE_ARROW_4: Fy,
        SHAPE_ARROW_5: Gy,
        SHAPE_ARROW_6: qy,
        SHAPE_ARROW_7: zy,
        SHAPE_ARROW_8: Hy,
        SHAPE_ARROW_OPEN: Yy
    };
    bz[Uy] = Wy, bz.LINE_CAP_TYPE_ROUND = go, bz.LINE_CAP_TYPE_SQUARE = Xy, bz[Vy] = py, bz[Zy] = go, bz[Ky] = Jy, tq[Qy] = bz[tm], tq[im] = zq ? 8 : 3, tq.SELECTION_BORDER = 2, tq[nm] = 7, tq[em] = V(3422561023), tq.SELECTION_TYPE = bz[tm], tq[sm] = 10, tq[hm] = 10, tq[rm] = 10, tq.IMAGE_MAX_SIZE = 200, tq.LINE_HEIGHT = 1.2;
    var gz = t[am] || 1;
    1 > gz && (gz = 1);
    var yz;
    vz[om] = Li;
    var mz = UG && !JG, xz = 9, pz = function (t, i, n, e) {
        var s = t - n, h = i - e;
        return s * s + h * h
    };
    Qi[tr] = {
        equals: function (t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r
        }
    }, Qi._j3Circle = function (t, i, n) {
        if (!n) return Ki(t, i);
        var e = pz(t.x, t.y, i.x, i.y), s = pz(t.x, t.y, n.x, n.y), h = pz(n.x, n.y, i.x, i.y);
        if (e + Ez >= s + h) return Ki(t, i, 0, n);
        if (s + Ez >= e + h) return Ki(t, n, 0, i);
        if (h + Ez >= e + s) return Ki(i, n, 0, t);
        var r;
        Math.abs(n.y - i.y) < 1e-4 && (r = t, t = i, i = r), r = n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * (-t.y + n.y);
        var a = (n.x * n.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - n.y)) * (i.y - n.y) + i.x * i.x * (-t.y + n.y)) / (2 * r),
            o = (i.y + n.y) / 2 - (n.x - i.x) / (n.y - i.y) * (a - (i.x + n.x) / 2);
        return new Qi(a, o, hq(a, o, t.x, t.y), t, i, n)
    };
    var Ez = .01, wz = {
        _ms6: function (t, i, e, s, h) {
            if (B(t) && (t = uq[Ur](t)), !t) return {x: 0, y: 0};
            var r = 0, a = 0, o = i._in;
            if (e = e || 0, t.x === n) {
                var f = t[Wr], u = t[Xr], c = !0;
                switch (f) {
                    case dq:
                        c = !1;
                        break;
                    case _q:
                        r += o / 2
                }
                switch (u) {
                    case lq:
                        a -= e / 2;
                        break;
                    case bq:
                        a += e / 2
                }
            } else r = t.x, a = t.y, Math.abs(r) > 0 && Math.abs(r) < 1 && (r *= o);
            h && null != s && (a += s.y, r += Math.abs(s.x) < 1 ? s.x * o : s.x);
            var _ = on[Hh](i, r, a, c);
            return _ ? (h || null == s || _[fm](s), _) : {x: 0, y: 0}
        }, _l3: function (t, i) {
            var n = i[To], e = i[vo];
            switch (n) {
                case Vz:
                    t.arcTo(e[0], e[1], e[2], e[3], i._r);
                    break;
                case Yz:
                    t[Gu](e[0], e[1]);
                    break;
                case Uz:
                    t[$u](e[0], e[1]);
                    break;
                case Wz:
                    t[um](e[0], e[1], e[2], e[3]);
                    break;
                case Xz:
                    t[cm](e[0], e[1], e[2], e[3], e[4], e[5]);
                    break;
                case Zz:
                    t[Fu]()
            }
        }, _63: function (t, i, n, e) {
            var s = i.type;
            if (s != Yz && s != Zz) {
                var h = n.lastPoint, r = i.points;
                switch (n[To] == Yz && t.add(h.x, h.y), s) {
                    case Vz:
                        cn(i, h.x, h.y, r[0], r[1], r[2], r[3], r[4]), t.add(r[0], r[1]), t.add(i._p1x, i[Io]), t.add(i[Co], i[ko]), i[_m] && t.add(i[_m].x, i.$boundaryPoint1.y), i[dm] && t.add(i.$boundaryPoint2.x, i[dm].y);
                        break;
                    case Uz:
                        t.add(r[0], r[1]);
                        break;
                    case Wz:
                        qi([h.x, h.y][Wh](r), t);
                        break;
                    case Xz:
                        Wi([h.x, h.y].concat(r), t);
                        break;
                    case Zz:
                        e && t.add(e[vo][0], e[vo][1])
                }
            }
        }, _66: function (t, i, n) {
            var e = t.type;
            if (e == Yz) return 0;
            var s = i[wo], h = t[vo];
            switch (e == Xz && 4 == h[qh] && (e = Wz), e) {
                case Uz:
                    return hq(h[0], h[1], s.x, s.y);
                case Vz:
                    return t._in;
                case Wz:
                    var r = Hi([s.x, s.y][Wh](h));
                    return t._lf = r, r(1);
                case Xz:
                    var r = Vi([s.x, s.y].concat(h));
                    return t._lf = r, r(1) || Xi([s.x, s.y][Wh](h));
                case Zz:
                    if (s && n) return t[vo] = n.points, hq(n.points[0], n[vo][1], s.x, s.y)
            }
            return 0
        }
    }, Tz = /^data:image\/(\w+);base64,/i, Mz = /^gif/i, kz = /^svg/i, Oz = 10, Sz = 11, Iz = 12, Az = 20, Cz = 30;
    tq[lm] = 50, tq[Bo] = 30, tq[vm] = 1e6;
    var Lz = 1, Pz = 2, Rz = 3;
    bn[tr] = {
        _ix: 0, _6c: !0, _kf: null, _ik: null, _lr: null, _l1: null, _msa: n, _mq5: n, _79: function () {
            return this._ix == Lz
        }, getBounds: function (t) {
            return this._l1 == Cz ? this._lr.getBounds(t) : (this._6c && this._fj(), this)
        }, validate: function () {
            this._6c && this._fj()
        }, _fj: function () {
            if (this._6c = !1, this._l1 == Cz) return this._lr[qo](), void this[bf](this._lr[kf]);
            if (this._l1 == Az) return void this[bm]();
            if (this._ix != Lz) try {
                this._ds()
            } catch (t) {
                this._ix = Rz, vz[Qo](t)
            }
        }, _5a: function () {
            this._dk(), this[gm][Da](), delete this[gm]
        }, _hz: function (t) {
            this._kf && this._kf.parentNode && this._kf[ym].removeChild(this._kf), this._ix = Rz, vz[Qo](mm + this._lr), this._pixels = null, this._ik = null, this._kf = null, t !== !1 && this._5a()
        }, _ds: function () {
            var t = this._lr;
            if (this._ix = Lz, this[gm] = new kq, this._l1 == Iz) {
                for (var n in rH) this[n] = rH[n];
                return void Xn(this._lr, this, this[xm], this._hz, this._ei)
            }
            this._kf || (this._kf = i.createElement(u_), FG && (this._kf[ja].visibility = m_, i[pm][Ov](this._kf))), this._kf.src = t, this._kf.width && (this.width = this._kf.width, this.height = this._kf.height), this._kf[tu] = FG ? function (t) {
                setTimeout(this._84.bind(this, t), 100)
            }[cr](this) : this._84[cr](this), this._kf[eu] = this._hz.bind(this)
        }, _84: function () {
            this._ix = Pz;
            var t = this._kf[Pa], i = this._kf.height;
            if (this._kf[ym] && this._kf.parentNode[pv](this._kf), !t || !i) return void this._hz();
            this.width = t, this[Ra] = i;
            var n = this._dv();
            n.width = t, n[Ra] = i, n.g.drawImage(this._kf, 0, 0, t, i), this[Em] = FG && this._l1 == Sz ? null : wn(n), this._5a()
        }, _mq7: function () {
            var t = this._lr;
            if (!(t[Po] instanceof Function)) return void this._hz(!1);
            if (t[wm] === !1 && t[Pa] && t.height) return this[Pa] = t[Pa], void (this.height = t.height);
            var i = t.width || tq[Tm], n = t.height || tq.IMAGE_MAX_SIZE, e = this._dv();
            e[Pa] = i, e[Ra] = n;
            var s = e.g;
            t.draw(s);
            var h = Bi(s, 0, 0, i, n);
            if (h) {
                var r = Mn(h[mo], i, n);
                this.x = r._x, this.y = r._y, this[Pa] = r[Mm], this[Ra] = r[km], e[Pa] = this.width, e[Ra] = this[Ra], s.putImageData(h, -this.x, -this.y), this._pixels = r
            }
        }, _dv: function () {
            return this._ik || (this._ik = Li())
        }, _78: function (t, i, n, e, s, h) {
            i.save(), i[pu](0, 0, e, s), i[Om] = h || Sm, i[Im](), i[Am](), i[io] = Cm, i[no] = eo, i[Om] = P_;
            var r = 6 * (i.canvas.ratio || 1);
            i[to] = Lm + r + "px Verdana,helvetica,arial,sans-serif", i[A_] = C_, i.lineWidth = 1, i[Pm](t, e / 2 + .5, s / 2 + .5), i[A_] = Rm, i.strokeText(t, e / 2 - .5, s / 2 - .5), i[ho](t, e / 2, s / 2), i[ro]()
        }, draw: function (t, i, n, e, s, h) {
            if (this[Pa] && this.height) {
                i = i || 1, e = e || 1, s = s || 1;
                var r = this[Pa] * e, a = this[Ra] * s;
                if (h && n[L_] && (t[L_] = n.shadowColor, t[Dm] = (n.shadowBlur || 0) * i, t[Nm] = (n[Nm] || 0) * i, t[Bm] = (n[Bm] || 0) * i), this._ix == Lz) return this._78(jm, t, i, r, a, n[$m]);
                if (this._ix == Rz) return this._78(Fm, t, i, r, a, n.renderColor);
                if (this._l1 == Cz) return t[rf](e, s), void this._lr[Po](t, i, n);
                var o = this._g9(i, e, s);
                return o ? ((this.x || this.y) && t[Qa](this.x * e, this.y * s), t[rf](e / o[rf], s / o[rf]), void o._l3(t, n[$m], n.renderColorBlendMode)) : void this._im(t, i, e, s, this[Pa] * e, this[Ra] * s, n)
            }
        }, _im: function (t, i, n, e, s, h, r) {
            if (this._l1 == Az) return 1 != n && 1 != e && t[rf](n, e), void this._lr[Po](t, r);
            if (this._kf) {
                if (!YG) return void t[N_](this._kf, 0, 0, s, h);
                var n = i * s / this[Pa], e = i * h / this[Ra];
                t.scale(1 / n, 1 / e), t[N_](this._kf, 0, 0, s * n, h * e)
            }
        }, _iz: null, _g9: function (t, i, n) {
            if (this._l1 == Az && this._lr[wm] === !1) return null;
            if (this._l1 == Oz || (t *= Math.max(i, n)) <= 1) return this[Gm] || (this[Gm] = this._ga(this._ik || this._kf, 1)), this._defaultCache;
            var e = this._iz[qm] || 0;
            if (t = Math[Xh](t), e >= t) {
                for (var s = t, h = this._iz[s]; !h && ++s <= e;)h = this._iz[s];
                if (h) return h
            }
            t % 2 && t++;
            var r = this.width * t, a = this.height * t;
            if (r * a > tq[vm]) return null;
            var o = Li(r, a);
            return (this.x || this.y) && o.g.translate(-this.x * t, -this.y * t), this._im(o.g, 1, t, t, r, a), this._ga(o, t)
        }, _ga: function (t, i) {
            var n = new tH(t, i);
            return this._iz[i] = n, this._iz.maxScale = i, n
        }, hitTest: function (t, i, n) {
            if (this._l1 == Cz) return this._lr[s_][nr](this._lr, arguments);
            if (!(this[Em] || this._kf && this._kf._pixels)) return !0;
            var e = this._pixels || this._kf._pixels;
            return e._hp(t, i, n)
        }, _dk: function () {
            this[gm] && this[gm][or](new mq(this, zm, Hm, this._kf))
        }, _msd: function (t, i) {
            this[gm] && this[gm][Yl](t, i)
        }, _76: function (t, i) {
            this[gm] && this._dispatcher[Ym](t, i)
        }, _msw: function (t) {
            this._iz = {}, (t || this.width * this[Ra] > 1e5) && (this._kf = null, this._ik = null)
        }
    }, E(bn, oq);
    var Dz = {};
    vz.drawImage = pn, vz[Um] = gn, vz.hasImage = mn, vz[Wm] = function () {
        var t = [];
        for (var i in Dz) t[Kh](i);
        return t
    };
    var Nz = function (t, i, n, e, s, h) {
        this[To] = t, this[Xm] = i, this[Vm] = n, this[i_] = e || 0, this.tx = s || 0, this.ty = h || 0
    };
    bz[Zm] = cl, bz.GRADIENT_TYPE_LINEAR = fl, Nz.prototype = {
        type: null,
        colors: null,
        positions: null,
        angle: null,
        tx: 0,
        ty: 0,
        position: uq[yl],
        isEmpty: function () {
            return null == this.colors || 0 == this[Xm][qh]
        },
        _72: function () {
            var t = this[Xm].length;
            if (1 == t) return [0];
            for (var i = [], n = 1 / (t - 1), e = 0; t > e; e++)i.push(n * e);
            return this.positions || (this[Vm] = i), i
        },
        generatorGradient: function (t) {
            if (null == this[Xm] || 0 == this.colors.length) return null;
            var i, n = Pi();
            if (this.type == bz[Km]) {
                var e = this.angle;
                e > Math.PI && (e -= Math.PI);
                var s;
                if (e <= Math.PI / 2) {
                    var h = Math.atan2(t[Ra], t[Pa]), r = Math[fo](t[Pa] * t[Pa] + t.height * t[Ra]), a = h - e;
                    s = Math.cos(a) * r
                } else {
                    var h = Math.atan2(t[Pa], t[Ra]), r = Math[fo](t.width * t[Pa] + t[Ra] * t[Ra]),
                        a = h - (e - Math.PI / 2);
                    s = Math.cos(a) * r
                }
                var o = s / 2, f = o * Math.cos(e), u = o * Math.sin(e), c = t.x + t[Pa] / 2 - f,
                    _ = t.y + t[Ra] / 2 - u, d = t.x + t.width / 2 + f, l = t.y + t.height / 2 + u;
                i = n[Jm](c, _, d, l)
            } else {
                if (!(this[To] = bz.GRADIENT_TYPE_RADIAL)) return null;
                var v = fi(this[Qm], t[Pa], t[Ra]);
                v.x += t.x, v.y += t.y, this.tx && (v.x += Math.abs(this.tx) < 1 ? t[Pa] * this.tx : this.tx), this.ty && (v.y += Math.abs(this.ty) < 1 ? t[Ra] * this.ty : this.ty);
                var b = hq(v.x, v.y, t.x, t.y);
                b = Math.max(b, hq(v.x, v.y, t.x, t.y + t[Ra])), b = Math.max(b, hq(v.x, v.y, t.x + t.width, t.y + t[Ra])), b = Math.max(b, hq(v.x, v.y, t.x + t[Pa], t.y)), i = n[tx](v.x, v.y, 0, v.x, v.y, b)
            }
            var g = this[Xm], y = this.positions;
            y && y[qh] == g[qh] || (y = this._72());
            for (var m = 0, x = g[qh]; x > m; m++)i[ix](y[m], g[m]);
            return i
        }
    };
    var Bz = new Nz(bz[Km], [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], Math.PI / 2),
        jz = new Nz(bz[Km], [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], 0),
        $z = (new Nz(bz[Km], [V(1154272460), V(1442840575)], [.1, .9], 0), new Nz(bz[Zm], [V(2298478591), V(1156509422), V(1720223880), V(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)),
        Fz = [V(0), V(4294901760), V(4294967040), V(4278255360), V(4278250239), V(4278190992), V(4294901958), V(0)],
        Gz = [0, .12, .28, .45, .6, .75, .8, 1], qz = new Nz(bz[Km], Fz, Gz), zz = new Nz(bz[Km], Fz, Gz, Math.PI / 2),
        Hz = new Nz(bz[Zm], Fz, Gz);
    Nz[nx] = Bz, Nz[ex] = jz, Nz.RADIAL_GRADIENT = $z, Nz[sx] = qz, Nz[hx] = zz, Nz[rx] = Hz;
    var Yz = _l, Uz = fl, Wz = ax, Xz = ul, Vz = ox, Zz = fx;
    bz.SEGMENT_MOVE_TO = Yz, bz[ux] = Uz, bz[cx] = Wz, bz[_x] = Xz, bz[dx] = Vz, bz.SEGMENT_CLOSE = Zz;
    var Kz = function (t, i) {
        this.id = ++BG, $(t) ? this.points = t : (this[To] = t, this[vo] = i)
    };
    Kz.prototype = {
        toJSON: function () {
            var t = {type: this[To], points: this.points};
            return this.invalidTerminal && (t[Yc] = !0), t
        }, parseJSON: function (t) {
            this[To] = t[To], this[vo] = t[vo], this[Yc] = t[Yc]
        }, points: null, type: Uz, clone: function () {
            return new Kz(this.type, this.points ? g(this.points) : null)
        }, move: function (t, i) {
            if (this[vo]) for (var n = 0, e = this[vo][qh]; e > n; n++) {
                var s = this.points[n];
                vz[lx](s) && (this.points[n] += n % 2 == 0 ? t : i)
            }
        }
    }, K(Kz[tr], {
        lastPoint: {
            get: function () {
                return this.type == Vz ? {x: this[Co], y: this[ko]} : {
                    x: this.points[this.points[qh] - 2],
                    y: this[vo][this.points[qh] - 1]
                }
            }
        }, firstPoint: {
            get: function () {
                return {x: this[vo][0], y: this[vo][1]}
            }
        }
    }), vz[vx] = Kz;
    var Jz = 0, Qz = function (t) {
        this.bounds = new oq, this._gd = t || []
    };
    Qz.prototype = {
        toJSON: function () {
            var t = [];
            return this._gd.forEach(function (i) {
                t[Kh](i[bx]())
            }), t
        }, parseJSON: function (t) {
            var i = this._gd;
            t[Kf](function (t) {
                i[Kh](new Kz(t[To], t.points))
            })
        }, clear: function () {
            this._gd.length = 0, this[kf][Da](), this._in = 0, this._6c = !0
        }, _dm: !0, _71: function (t, i) {
            this._dm && 0 === this._gd.length && t != Yz && this._gd.push(new Kz(Yz, [0, 0])), this._gd[Kh](new Kz(t, i)), this._6c = !0
        }, add: function (t) {
            this._gd.push(t), this._6c = !0
        }, removePathSegment: function (t) {
            return t >= this._gd[qh] ? !1 : (this._gd.splice(t, 1), void (this._6c = !0))
        }, moveTo: function (t, i) {
            this._71(Yz, [t, i])
        }, lineTo: function (t, i) {
            this._71(Uz, [t, i])
        }, quadTo: function (t, i, n, e) {
            this._71(Wz, [t, i, n, e])
        }, curveTo: function (t, i, n, e, s, h) {
            this._71(Xz, [t, i, n, e, s, h])
        }, arcTo: function (t, i, n, e, s) {
            this._71(Vz, [t, i, n, e, s])
        }, closePath: function () {
            this._71(Zz)
        }, _7v: function (t, i, n, e, s) {
            if (e[gx]) {
                if (n == bz.SELECTION_TYPE_SHADOW) {
                    if (!e[yx]) return;
                    return t.shadowColor = e[gx], t.shadowBlur = e[yx] * i, t[Nm] = (e[mx] || 0) * i, void (t.shadowOffsetY = (e[xx] || 0) * i)
                }
                if (n == bz[px]) {
                    if (!e[Ex]) return;
                    t.strokeStyle = e[gx], t[xo] = e.selectionBorder + (s[xo] || 0), this._l3(t), t.stroke()
                }
            }
        }, _6c: !0, _gd: null, _in: 0, lineCap: Wy, lineJoin: go, draw: function (t, i, n, e, s) {
            t.lineCap = n[wx] || this.lineCap, t[I_] = n[I_] || this.lineJoin, e && (s || (s = n), this._7v(t, i, s.selectionType, s, n)), n[Tx] && (this._l3(t), t.lineWidth = n[xo] + 2 * (n[Mx] || 0), t[A_] = n[Tx], t[R_]()), t.lineWidth = 0, this._l3(t), n[kx] && (t[Om] = n.renderColor || n[kx], t[Im]()), n[Ox] && (t[Om] = n[Sx] || n[Ox], t[Im]()), n[xo] && (t[xo] = n.lineWidth, n[$f] && (t[$f] = n.lineDash, t[Yf] = n[Yf]), t[A_] = n[$m] || n[A_], t[R_](), t[$f] = [])
        }, _l3: function (t) {
            t[Ix]();
            for (var i, n, e = 0, s = this._gd[qh]; s > e; e++)i = this._gd[e], wz._l3(t, i, n), n = i
        }, invalidate: function () {
            this._6c = !0
        }, validate: function () {
            if (this._6c = !1, this[kf][Da](), this._in = 0, 0 != this._gd[qh]) for (var t, i, n = this._gd, e = 1,
                                                                                         s = n[0], h = s,
                                                                                         r = n.length; r > e; e++)t = n[e], t.type == Yz ? h = t : (wz._63(this[kf], t, s, h), i = wz._66(t, s, h), t._in = i, this._in += i), s = t
        }, getBounds: function (t, i) {
            if (this._6c && this[qo](), i = i || new oq, t) {
                var n = t / 2;
                i.set(this.bounds.x - n, this[kf].y - n, this[kf][Pa] + t, this[kf][Ra] + t)
            } else i.set(this[kf].x, this[kf].y, this[kf][Pa], this[kf][Ra]);
            return i
        }, hitTest: function (t, i, n, e, s, h) {
            return an.call(this, t, i, n, e, s, h)
        }, toSegments: function () {
            return [][Wh](this._gd)
        }, generator: function (t, i, n, e, s) {
            return rn[Hh](this, t, i, n, e, s)
        }, getLocation: function (t, i) {
            return on[Hh](this, t, i || 0)
        }
    }, K(Qz[tr], {
        segments: {
            get: function () {
                return this._gd
            }, set: function (t) {
                this[Da](), this._gd = t
            }
        }, length: {
            get: function () {
                return this._6c && this[qo](), this._in
            }
        }, _empty: {
            get: function () {
                return 0 == this._gd[qh]
            }
        }
    }), Tn[tr] = {
        _13: function (t, i) {
            var n, e, s, h, r, a = t[qh], o = 0, f = 0;
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
            this._x = s, this._y = n, this._width = h - s + 1, this._height = e - n + 1, this._iv = new oq(s, n, this[Mm], this[km]), this._pixelSize = this[Mm] * this[km], this[Ax] = i, this[Cx] = t
        }, _dx: function (t, i) {
            return this[Cx][4 * (t + this._x + (this._y + i) * this._originalPixelsWidth) + 3]
        }, _hp: function (t, i, n) {
            (!n || 1 >= n) && (n = 1), n = 0 | n, t = Math[go](t - this._x) - n, i = Math[go](i - this._y) - n, n += n;
            for (var e = t, s = i; i + n > s;) {
                for (var e = t; t + n > e;) {
                    if (this._dx(e, s)) return !0;
                    ++e
                }
                ++s
            }
            return !1
        }
    }, bz[Vo] = Lx, bz[Xo] = Px, bz[Rx] = Dx, bz[Zo] = Nx, bz.BLEND_MODE_LIGHTEN = Bx, bz[Jo] = jx, bz[ef] = $x, tq[Wo] = bz[Zo];
    var tH = function (t, i, n) {
        this._ik = t, this[rf] = i || 1, t instanceof Image && (n = !1), this._hw = n
    };
    tH[tr] = {
        scale: 1, _ik: null, _iz: null, _hw: !0, _l3: function (t, i, n) {
            if (!i || this._hw === !1) return void t[N_](this._ik, 0, 0);
            this._iz || (this._iz = {});
            var e = i + n, s = this._iz[e];
            if (s || (s = Sn(this._ik, i, n), s || (this._hw = !1), this._iz[e] = s || this._ik), s) if (FG) try {
                t[N_](s, 0, 0)
            } catch (h) {
            } else t[N_](s, 0, 0)
        }
    };
    var iH = function (t, i, n, e, s, h, r, a, o) {
        this._ls = Ln(t, i, n, e, s, h, r, a, o)
    }, nH = {
        server: {
            draw: function (t) {
                t[Ja](), t.translate(0, 0), t[Ix](), t.moveTo(0, 0), t.lineTo(40, 0), t[$u](40, 40), t[$u](0, 40), t[Fu](), t[Am](), t[Qa](0, 0), t[Qa](0, 0), t[rf](1, 1), t[Qa](0, 0), t[A_] = Fx, t.lineCap = Wy, t[I_] = Jy, t[Gx] = 4, t[Ja](), t[Ja](), t[ro](), t[Ja](), t[ro](), t[Ja](), t[ro](), t[Ja](), t[ro](), t[Ja](), t[ro](), t[Ja](), t.restore(), t[Ja](), t[ro](), t[Ja](), t[ro](), t.save(), t[ro](), t[Ja](), t.restore(), t[Ja](), t[ro](), t[Ja](), t[ro](), t.save(), t.restore(), t[ro](), t[Ja]();
                var i = t[Jm](6.75, 3.9033, 30.5914, 27.7447);
                i[ix](.0493, qx), i[ix](.0689, zx), i[ix](.0939, Hx), i[ix](.129, Yx), i[ix](.2266, Ux), i.addColorStop(.2556, Wx), i[ix](.2869, Xx), i.addColorStop(.3194, Vx), i[ix](.3525, Zx), i.addColorStop(.3695, Kx), i[ix](.5025, Jx), i.addColorStop(.9212, Qx), i.addColorStop(1, tp), t[Om] = i, t[Ix](), t[Gu](25.677, 4.113), t[cm](25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004), t[cm](19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003), t.bezierCurveTo(12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004), t[cm](9.19, 2.897, 8.977, 2.989, 8.805, 3.094), t.bezierCurveTo(8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63), t[cm](5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05), t[cm](4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307), t[cm](22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575), t[cm](24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004), t.bezierCurveTo(25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004), t[cm](25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85), t[cm](25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253), t[cm](25.706, 4.885, 25.749, 4.478, 25.677, 4.113), t[cm](25.67, 4.077, 25.697, 4.217, 25.677, 4.113), t[Fu](), t.fill(), t[R_](), t.restore(), t.save(), t[Ja](), t[Om] = ip, t.beginPath(), t[Gu](19.763, 6.645), t[cm](20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778), t.bezierCurveTo(20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999), t.bezierCurveTo(21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999), t.bezierCurveTo(21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372), t[$u](21.398, 36.253), t.bezierCurveTo(21.397, 36.489, 21.349, 36.713, 21.262, 36.917), t[cm](21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458), t[cm](20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996), t[cm](20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949), t[$u](4.675, 37.877), t[cm](4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741), t[cm](3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376), t[cm](3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996), t.bezierCurveTo(3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172), t[$u](2.924, 8.431), t.bezierCurveTo(2.923, 8.192, 2.971, 7.964, 3.057, 7.758), t.bezierCurveTo(3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209), t.bezierCurveTo(3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837), t[cm](4.17, 6.749, 4.396, 6.701, 4.633, 6.7), t[$u](19.763, 6.645), t.closePath(), t[Im](), t[R_](), t[ro](), t.restore(), t.save(), t[Om] = np, t[Ix](), t.arc(12.208, 26.543, 2.208, 0, 6.283185307179586, !0), t[Fu](), t.fill(), t.stroke(), t[ro](), t[Ja](), t[Om] = ip, t[Ix](), t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, !0), t.closePath(), t[Im](), t[R_](), t.restore(), t[Ja](), t[Om] = np, t[Ix](), t[Gu](19.377, 17.247), t[cm](19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998), t[$u](5.882, 18.108999999999998), t[cm](5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247), t[$u](5.02, 11.144), t[cm](5.02, 10.666, 5.406, 10.281, 5.882, 10.281), t[$u](18.516, 10.281), t[cm](18.993, 10.281, 19.377, 10.666, 19.377, 11.144), t[$u](19.377, 17.247), t[Fu](), t[Im](), t[R_](), t[ro](), t[Ja](), t.save(), t[Om] = ip, t.beginPath(), t[Gu](18.536, 13.176), t.bezierCurveTo(18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794), t.lineTo(6.479, 13.794), t[cm](6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176), t[$u](5.861, 11.84), t[cm](5.861, 11.498, 6.137, 11.221, 6.479, 11.221), t[$u](17.918, 11.221), t[cm](18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84), t[$u](18.535, 13.176), t[Fu](), t.fill(), t.stroke(), t[ro](), t[Ja](), t[Om] = ip, t.beginPath(), t[Gu](18.536, 16.551), t[cm](18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997), t[$u](6.479, 17.168999999999997), t.bezierCurveTo(6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551), t[$u](5.861, 15.215999999999998), t[cm](5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998), t[$u](17.918, 14.596999999999998), t.bezierCurveTo(18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998), t[$u](18.535, 16.551), t[Fu](), t[Im](), t.stroke(), t[ro](), t.restore(), t[ro]()
            }
        }, exchanger2: {
            draw: function (t) {
                t[Ja](), t.translate(0, 0), t[Ix](), t.moveTo(0, 0), t[$u](40, 0), t[$u](40, 40), t.lineTo(0, 40), t[Fu](), t[Am](), t.translate(0, 0), t[Qa](0, 0), t.scale(1, 1), t.translate(0, 0), t[A_] = Fx, t[wx] = Wy, t[I_] = Jy, t[Gx] = 4, t[Ja](), t[Ja](), t[ro](), t[Ja](), t.restore(), t[Ja](), t.restore(), t.save(), t[ro](), t[Ja](), t.restore(), t[Ja](), t[ro](), t[Ja](), t[ro](), t[Ja](), t[ro](), t[Ja](), t[ro](), t[Ja](), t[ro](), t[ro](), t.save();
                var i = t[Jm](.4102, 24.3613, 39.5898, 24.3613);
                i[ix](0, qx), i.addColorStop(.0788, Ux), i.addColorStop(.2046, ep), i[ix](.3649, sp), i.addColorStop(.5432, hp), i[ix](.6798, rp), i[ix](.7462, ap), i[ix](.8508, op), i[ix](.98, Wx), i.addColorStop(1, fp), t[Om] = i, t[Ix](), t[Gu](.41, 16.649), t.bezierCurveTo(.633, 19.767, .871, 20.689, 1.094, 23.807000000000002), t[cm](1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002), t[cm](10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523), t[cm](26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004), t[cm](38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005), t.bezierCurveTo(39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005), t.bezierCurveTo(39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649), t[Fu](), t.fill(), t[R_](), t[ro](), t.save(), t[Ja](), t[Om] = ip, t[Ix](), t.moveTo(16.4, 25.185), t.bezierCurveTo(12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705), t.bezierCurveTo(3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999), t.bezierCurveTo(1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998), t[cm](11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998), t[cm](22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998), t[cm](32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998), t[cm](40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997), t[cm](33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996), t.bezierCurveTo(23.289, 25.28, 19.824, 25.436, 16.4, 25.185), t[cm](13.529, 24.977, 19.286, 25.396, 16.4, 25.185), t[Fu](), t[Im](), t[R_](), t.restore(), t[ro](), t.save(), t[Ja](), t[Ja](), t[Ja](), t[Ja](), t[Om] = up, t[Ix](), t.moveTo(5.21, 21.754), t[$u](8.188, 17.922), t[$u](9.53, 18.75), t[$u](15.956, 16.004), t[$u](18.547, 17.523), t[$u](12.074, 20.334), t.lineTo(13.464, 21.204), t[$u](5.21, 21.754), t.closePath(), t[Im](), t[R_](), t[ro](), t[ro](), t[ro](), t[Ja](), t[Ja](), t.save(), t[Om] = up, t.beginPath(), t[Gu](17.88, 14.61), t[$u](9.85, 13.522), t[$u](11.703, 12.757), t.lineTo(7.436, 10.285), t[$u](10.783, 8.942), t[$u](15.091, 11.357), t[$u](16.88, 10.614), t[$u](17.88, 14.61), t[Fu](), t[Im](), t.stroke(), t.restore(), t.restore(), t[Ja](), t[Ja](), t[Om] = up, t[Ix](), t[Gu](17.88, 14.61), t[$u](9.85, 13.522), t[$u](11.703, 12.757), t.lineTo(7.436, 10.285), t.lineTo(10.783, 8.942), t[$u](15.091, 11.357), t[$u](16.88, 10.614), t[$u](17.88, 14.61), t[Fu](), t.fill(), t[R_](), t.restore(), t[ro](), t[ro](), t[Ja](), t[Ja](), t.save(), t[Om] = up, t[Ix](), t[Gu](23.556, 15.339), t[$u](20.93, 13.879), t[$u](26.953, 11.304), t[$u](25.559, 10.567), t[$u](33.251, 9.909), t[$u](31.087, 13.467), t.lineTo(29.619, 12.703), t[$u](23.556, 15.339), t[Fu](), t.fill(), t[R_](), t[ro](), t[ro](), t[ro](), t[Ja](), t[Ja](), t[Ja](), t.fillStyle = up, t[Ix](), t[Gu](30.028, 23.383), t[$u](24.821, 20.366), t[$u](22.915, 21.227), t[$u](21.669, 16.762), t[$u](30.189, 17.942), t[$u](28.33, 18.782), t[$u](33.579, 21.725), t[$u](30.028, 23.383), t.closePath(), t[Im](), t[R_](), t[ro](), t[ro](), t[Ja](), t[Ja](), t[Om] = up, t.beginPath(), t[Gu](30.028, 23.383), t.lineTo(24.821, 20.366), t.lineTo(22.915, 21.227), t.lineTo(21.669, 16.762), t[$u](30.189, 17.942), t[$u](28.33, 18.782), t[$u](33.579, 21.725), t.lineTo(30.028, 23.383), t.closePath(), t.fill(), t[R_](), t[ro](), t.restore(), t[ro](), t[ro](), t.restore(), t[ro]()
            }
        }, exchanger: {
            draw: function (t) {
                t.save(), t[Qa](0, 0), t[Ix](), t.moveTo(0, 0), t.lineTo(40, 0), t[$u](40, 40), t[$u](0, 40), t.closePath(), t[Am](), t[Qa](0, 0), t.translate(0, 0), t[rf](1, 1), t[Qa](0, 0), t[A_] = Fx, t[wx] = Wy, t[I_] = Jy, t.miterLimit = 4, t[Ja](), t.save(), t.restore(), t[Ja](), t[ro](), t[Ja](), t.restore(), t.save(), t[ro](), t[Ja](), t.restore(), t[Ja](), t[ro](), t.save(), t[ro](), t[ro](), t[Ja]();
                var i = t[Jm](.2095, 20.7588, 39.4941, 20.7588);
                i[ix](0, cp), i.addColorStop(.0788, _p), i[ix](.352, dp), i[ix](.6967, lp), i.addColorStop(.8916, vp), i.addColorStop(.9557, bp), i[ix](1, gp), t.fillStyle = i, t.beginPath(), t[Gu](39.449, 12.417), t[$u](39.384, 9.424), t[cm](39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024), t.bezierCurveTo(-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002), t.bezierCurveTo(.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437), t[cm](1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094), t[cm](8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089), t.bezierCurveTo(23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996), t.bezierCurveTo(34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997), t.bezierCurveTo(37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997), t[$u](37.711, 30.316999999999997), t[$u](39.281, 16.498999999999995), t[cm](39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994), t[cm](39.515, 14.105, 39.449, 12.417, 39.449, 12.417), t[Fu](), t[Im](), t.stroke(), t.restore(), t[Ja](), t[Ja](), t[Ja](), t[Ja](), t.restore(), t.save(), t.restore(), t[Ja](), t[ro](), t[Ja](), t[ro](), t[Ja](), t[ro](), t[Ja](), t[ro](), t[Ja](), t.restore(), t.save(), t.restore(), t[Ja](), t[ro](), t.restore(), t[Ja]();
                var i = t[Jm](19.8052, 7.7949, 19.8052, 24.7632);
                i[ix](0, yp), i[ix](.1455, mp), i[ix](.2975, xp), i.addColorStop(.4527, pp), i.addColorStop(.6099, Ep), i[ix](.7687, wp), i[ix](.9268, Tp), i[ix](.9754, Mp), i[ix](1, kp), t[Om] = i, t.beginPath(), t[Gu](33.591, 24.763), t[cm](23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003), t[cm](3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003), t[cm](1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004), t[cm](4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004), t[cm](6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004), t.bezierCurveTo(16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005), t.bezierCurveTo(30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004), t.bezierCurveTo(36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005), t[cm](37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005), t.bezierCurveTo(39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005), t.bezierCurveTo(38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005), t[cm](37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007), t.bezierCurveTo(37.151, 24.271, 35.264, 24.77, 33.591, 24.763), t.closePath(), t[Im](), t.stroke(), t.restore(), t[ro](), t[ro](), t[Ja](), t.save(), t[Ja](), t[Om] = up, t[Ix](), t.moveTo(10.427, 19.292), t[$u](5.735, 16.452), t.lineTo(12.58, 13.8), t[$u](12.045, 15.07), t[$u](20.482, 15.072), t[$u](19.667, 17.887), t[$u](11.029, 17.851), t[$u](10.427, 19.292), t[Fu](), t[Im](), t.stroke(), t[ro](), t[ro](), t[Ja](), t[Ja](), t[Om] = up, t[Ix](), t[Gu](13.041, 13.042), t.lineTo(8.641, 10.73), t.lineTo(14.82, 8.474), t.lineTo(14.373, 9.537), t[$u](22.102, 9.479), t[$u](21.425, 11.816), t[$u](13.54, 11.85), t[$u](13.041, 13.042), t[Fu](), t[Im](), t[R_](), t[ro](), t[ro](), t[Ja](), t.save(), t.fillStyle = up, t[Ix](), t[Gu](29.787, 16.049), t[$u](29.979, 14.704), t[$u](21.51, 14.706), t.lineTo(22.214, 12.147), t[$u](30.486, 12.116), t.lineTo(30.653, 10.926), t.lineTo(36.141, 13.4), t.lineTo(29.787, 16.049), t[Fu](), t[Im](), t.stroke(), t.restore(), t.restore(), t[Ja](), t.save(), t[Om] = up, t[Ix](), t[Gu](28.775, 23.14), t[$u](29.011, 21.49), t[$u](19.668, 21.405), t[$u](20.523, 18.295), t.lineTo(29.613, 18.338), t[$u](29.815, 16.898), t.lineTo(35.832, 19.964), t.lineTo(28.775, 23.14), t[Fu](), t[Im](), t[R_](), t.restore(), t[ro](), t[ro](), t[ro]()
            }
        }, cloud: {
            draw: function (t) {
                t[Ja](), t[Ix](), t[Gu](0, 0), t[$u](90.75, 0), t.lineTo(90.75, 62.125), t.lineTo(0, 62.125), t.closePath(), t[Am](), t.strokeStyle = Fx, t.lineCap = Wy, t[I_] = Jy, t.miterLimit = 4, t.save();
                var i = t[Jm](44.0054, 6.4116, 44.0054, 51.3674);
                i[ix](0, "rgba(159, 160, 160, 0.7)"), i[ix](.9726, Op), t[Om] = i, t[Ix](), t.moveTo(57.07, 20.354), t[cm](57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358), t.bezierCurveTo(54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001), t.bezierCurveTo(33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003), t[cm](18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004), t[cm](14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49), t[cm](29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961), t.bezierCurveTo(34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995), t.bezierCurveTo(43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994), t[cm](49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999), t[cm](66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999), t.bezierCurveTo(73.986, 27.436, 66.413, 20.354, 57.07, 20.354), t[Fu](), t[Im](), t[R_](), t[ro](), t.restore()
            }
        }, node: {
            width: 60, height: 100, draw: function (t) {
                t[Ja](), t[Qa](0, 0), t[Ix](), t[Gu](0, 0), t[$u](40, 0), t[$u](40, 40), t[$u](0, 40), t[Fu](), t.clip(), t[Qa](0, 0), t[Qa](0, 0), t.scale(1, 1), t.translate(0, 0), t[A_] = Fx, t[wx] = Wy, t[I_] = Jy, t[Gx] = 4, t[Ja](), t.fillStyle = Sp, t.beginPath(), t[Gu](13.948, 31.075), t[$u](25.914, 31.075), t[um](25.914, 31.075, 25.914, 31.075), t.lineTo(25.914, 34.862), t.quadraticCurveTo(25.914, 34.862, 25.914, 34.862), t[$u](13.948, 34.862), t[um](13.948, 34.862, 13.948, 34.862), t[$u](13.948, 31.075), t[um](13.948, 31.075, 13.948, 31.075), t.closePath(), t[Im](), t.stroke(), t.restore(), t.save(), t[Om] = Ip, t[Ix](), t[Gu](29.679, 35.972), t.bezierCurveTo(29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244), t.lineTo(11.456, 37.244), t[cm](10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972), t[$u](10.183, 36.136), t.bezierCurveTo(10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863), t[$u](28.407, 34.863), t.bezierCurveTo(29.11, 34.863, 29.678, 35.431, 29.678, 36.136), t.lineTo(29.678, 35.972), t[Fu](), t[Im](), t[R_](), t.restore(), t[Ja](), t[Om] = Ip, t[Ix](), t.moveTo(.196, 29.346), t[cm](.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075), t[$u](37.936, 31.075), t[cm](38.891, 31.075, 39.665, 30.301, 39.665, 29.346), t[$u](39.665, 27.174), t[$u](.196, 27.174), t[$u](.196, 29.346), t[Fu](), t[Im](), t[R_](), t.restore(), t[Ja](), t[Om] = Ap, t.beginPath(), t.moveTo(37.937, 3.884), t.lineTo(1.926, 3.884), t.bezierCurveTo(.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614), t.lineTo(.19699999999999984, 27.12), t[$u](39.666000000000004, 27.12), t[$u](39.666000000000004, 5.615), t.bezierCurveTo(39.665, 4.657, 38.892, 3.884, 37.937, 3.884), t[Fu](), t[Im](), t[R_](), t.restore(), t[Ja](), t[Ja](), t[ro](), t[Ja](), t[ro](), t.restore(), t[Ja]();
                var i = t[Jm](6.9609, 2.9341, 32.9008, 28.874);
                i[ix](0, Cp), i.addColorStop(1, Lp), t[Om] = i, t.beginPath(), t[Gu](35.788, 6.39), t[$u](4.074, 6.39), t[cm](3.315, 6.39, 2.702, 7.003, 2.702, 7.763), t[$u](2.702, 24.616), t[$u](37.159, 24.616), t[$u](37.159, 7.763), t.bezierCurveTo(37.159, 7.003, 36.546, 6.39, 35.788, 6.39), t[Fu](), t[Im](), t[R_](), t.restore(), t.restore()
            }
        }, group: {
            draw: function (t) {
                t[Ja](), t[Qa](0, 0), t[Ix](), t.moveTo(0, 0), t[$u](47.75, 0), t[$u](47.75, 40), t[$u](0, 40), t[Fu](), t[Am](), t[Qa](0, 0), t[Qa](0, 0), t[rf](1, 1), t.translate(0, 0), t.strokeStyle = Fx, t[wx] = Wy, t[I_] = Jy, t.miterLimit = 4, t.save(), t.save(), t[Om] = Sp, t[Ix](), t[Gu](10.447, 26.005), t[$u](18.847, 26.005), t[um](18.847, 26.005, 18.847, 26.005), t[$u](18.847, 28.663), t[um](18.847, 28.663, 18.847, 28.663), t[$u](10.447, 28.663), t.quadraticCurveTo(10.447, 28.663, 10.447, 28.663), t[$u](10.447, 26.005), t[um](10.447, 26.005, 10.447, 26.005), t.closePath(), t[Im](), t[R_](), t.restore(), t[Ja](), t[Om] = Ip, t[Ix](), t[Gu](21.491, 29.443), t.bezierCurveTo(21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338), t[$u](8.698, 30.338), t[cm](8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443), t.lineTo(7.8020000000000005, 29.557000000000002), t[cm](7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003), t[$u](20.597, 28.662000000000003), t[cm](21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002), t[$u](21.491, 29.443), t[Fu](), t.fill(), t[R_](), t.restore(), t[Ja](), t[Om] = Ip, t.beginPath(), t.moveTo(.789, 24.79), t[cm](.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005), t[$u](27.289, 26.005), t[cm](27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79), t[$u](28.504, 23.267), t[$u](.789, 23.267), t[$u](.789, 24.79), t[Fu](), t.fill(), t[R_](), t[ro](), t.save(), t[Om] = Ap, t.beginPath(), t[Gu](27.289, 6.912), t[$u](2.006, 6.912), t[cm](1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126), t[$u](.7889999999999997, 23.227), t[$u](28.503999999999998, 23.227), t[$u](28.503999999999998, 8.126), t[cm](28.504, 7.455, 27.961, 6.912, 27.289, 6.912), t.closePath(), t.fill(), t[R_](), t[ro](), t.save(), t[Ja](), t[ro](), t.save(), t.restore(), t[ro](), t[Ja]();
                var i = t[Jm](5.54, 6.2451, 23.7529, 24.458);
                i[ix](0, Cp), i.addColorStop(1, Lp), t[Om] = i, t[Ix](), t[Gu](25.78, 8.671), t[$u](3.514, 8.671), t.bezierCurveTo(2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635), t[$u](2.549, 21.466), t.lineTo(26.743, 21.466), t[$u](26.743, 9.636), t.bezierCurveTo(26.743, 9.102, 26.312, 8.671, 25.78, 8.671), t[Fu](), t.fill(), t[R_](), t[ro](), t[ro](), t[Ja](), t[Ja](), t[Om] = Sp, t[Ix](), t.moveTo(27.053, 33.602), t[$u](36.22, 33.602), t[um](36.22, 33.602, 36.22, 33.602), t.lineTo(36.22, 36.501), t[um](36.22, 36.501, 36.22, 36.501), t[$u](27.053, 36.501), t.quadraticCurveTo(27.053, 36.501, 27.053, 36.501), t[$u](27.053, 33.602), t[um](27.053, 33.602, 27.053, 33.602), t[Fu](), t.fill(), t.stroke(), t[ro](), t[Ja](), t[Om] = Ip, t[Ix](), t[Gu](39.104, 37.352), t.bezierCurveTo(39.104, 37.891, 38.67, 38.327, 38.13, 38.327), t.lineTo(25.143, 38.327), t.bezierCurveTo(24.602, 38.327, 24.166, 37.891, 24.166, 37.352), t.lineTo(24.166, 37.477999999999994), t[cm](24.166, 36.937, 24.602, 36.501, 25.143, 36.501), t.lineTo(38.131, 36.501), t.bezierCurveTo(38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994), t[$u](39.105, 37.352), t.closePath(), t[Im](), t[R_](), t[ro](), t.save(), t.fillStyle = Ip, t[Ix](), t.moveTo(16.514, 32.275), t[cm](16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601), t[$u](45.433, 33.601), t[cm](46.166, 33.601, 46.758, 33.005, 46.758, 32.275), t[$u](46.758, 30.607999999999997), t[$u](16.514, 30.607999999999997), t[$u](16.514, 32.275), t.closePath(), t[Im](), t[R_](), t[ro](), t[Ja](), t.fillStyle = Ap, t.beginPath(), t.moveTo(45.433, 12.763), t[$u](17.839, 12.763), t[cm](17.107, 12.763, 16.514, 13.356, 16.514, 14.089), t[$u](16.514, 30.57), t.lineTo(46.757999999999996, 30.57), t[$u](46.757999999999996, 14.088), t[cm](46.758, 13.356, 46.166, 12.763, 45.433, 12.763), t[Fu](), t[Im](), t[R_](), t[ro](), t[Ja](), t.save(), t[ro](), t[Ja](), t[ro](), t[ro](), t[Ja](), i = t[Jm](21.6973, 12.0352, 41.5743, 31.9122), i[ix](0, Cp), i[ix](1, Lp), t.fillStyle = i, t[Ix](), t[Gu](43.785, 14.683), t.lineTo(19.486, 14.683), t[cm](18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735), t.lineTo(18.433, 28.649), t.lineTo(44.837, 28.649), t[$u](44.837, 15.734), t[cm](44.838, 15.153, 44.367, 14.683, 43.785, 14.683), t[Fu](), t[Im](), t.stroke(), t[ro](), t.restore(), t[Ja](), t[Pp] = .5, t[Ix](), t.moveTo(23.709, 36.33), t[$u](4.232, 36.33), t[$u](4.232, 27.199), t[$u](5.304, 27.199), t[$u](5.304, 35.259), t[$u](23.709, 35.259), t.lineTo(23.709, 36.33), t.closePath(), t.fill(), t[R_](), t[ro](), t[ro]()
            }
        }, subnetwork: {
            draw: function (t) {
                t[Ja](), t.translate(0, 0), t.beginPath(), t.moveTo(0, 0), t[$u](60.75, 0), t.lineTo(60.75, 42.125), t[$u](0, 42.125), t.closePath(), t[Am](), t[Qa](0, .26859504132231393), t.scale(.6694214876033058, .6694214876033058), t[Qa](0, 0), t[A_] = Fx, t.lineCap = Wy, t.lineJoin = Jy, t[Gx] = 4, t.save(), t.save(), t[ro](), t[Ja](), t.restore(), t.restore(), t.save();
                var i = t[Jm](43.6724, -2.7627, 43.6724, 59.3806);
                i[ix](0, "rgba(159, 160, 160, 0.7)"), i[ix](.9726, Op), t.fillStyle = i, t[Ix](), t[Gu](61.732, 16.509), t.bezierCurveTo(61.686, 16.509, 61.644, 16.515, 61.599, 16.515), t.bezierCurveTo(58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006), t[cm](29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415), t.bezierCurveTo(9.09, 20.566, 2.229, 28.136, 2.229, 37.326), t[cm](2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006), t[cm](23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001), t.bezierCurveTo(31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001), t.bezierCurveTo(42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001), t.bezierCurveTo(51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014), t[cm](74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001), t[cm](85.116, 26.298, 74.646, 16.509, 61.732, 16.509), t.closePath(), t.fill(), t[R_](), t[ro](), t[Ja](), t.save(), t.fillStyle = Sp, t.beginPath(), t[Gu](34.966, 44.287), t[$u](45.112, 44.287), t.quadraticCurveTo(45.112, 44.287, 45.112, 44.287), t[$u](45.112, 47.497), t.quadraticCurveTo(45.112, 47.497, 45.112, 47.497), t[$u](34.966, 47.497), t[um](34.966, 47.497, 34.966, 47.497), t.lineTo(34.966, 44.287), t[um](34.966, 44.287, 34.966, 44.287), t.closePath(), t[Im](), t[R_](), t[ro](), t.save(), t[Om] = Rp, t.beginPath(), t[Gu](48.306, 48.439), t[cm](48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52), t[$u](32.854, 49.52), t.bezierCurveTo(32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439), t.lineTo(31.771, 48.578), t[cm](31.771, 47.981, 32.253, 47.497, 32.854, 47.497), t.lineTo(47.226, 47.497), t.bezierCurveTo(47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578), t[$u](48.306, 48.439), t[Fu](), t.fill(), t[R_](), t[ro](), t[Ja](), t[Om] = Dp, t[Ix](), t[Gu](23.302, 42.82), t[cm](23.302, 43.63, 23.96, 44.287, 24.772, 44.287), t[$u](55.308, 44.287), t[cm](56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82), t[$u](56.775, 40.98), t.lineTo(23.302, 40.98), t.lineTo(23.302, 42.82), t.closePath(), t[Im](), t[R_](), t[ro](), t.save(), t[Om] = Ap, t[Ix](), t.moveTo(55.307, 21.229), t.lineTo(24.771, 21.229), t.bezierCurveTo(23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695), t[$u](23.301000000000002, 40.933), t[$u](56.774, 40.933), t[$u](56.774, 22.695), t[cm](56.774, 21.884, 56.119, 21.229, 55.307, 21.229), t[Fu](), t.fill(), t[R_](), t[ro](), t.save(), t.save(), t[ro](), t.save(), t.restore(), t[ro](), t[Ja](), i = t[Jm](29.04, 20.4219, 51.0363, 42.4181), i[ix](0, Cp), i.addColorStop(1, Lp), t[Om] = i, t.beginPath(), t[Gu](53.485, 23.353), t.lineTo(26.592, 23.353), t[cm](25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003), t[$u](25.427, 38.807), t[$u](54.647, 38.807), t[$u](54.647, 24.517000000000003), t[cm](54.648, 23.873, 54.127, 23.353, 53.485, 23.353), t[Fu](), t[Im](), t.stroke(), t.restore(), t[ro](), t.restore()
            }
        }
    };
    for (var eH in nH) gn(Np + eH, nH[eH]);
    var sH = function () {
        this.$invalidateRotate = !1;
        var t = this._ft;
        t[Da]();
        var i = this[yf] || 0, n = this._8d.x + i / 2, e = this._8d.y + i / 2, s = this._8d[Pa] - i,
            h = this._8d.height - i, r = Fn[Hh](this, {
                x: n,
                y: e
            });
        Hn(t, r.x, r.y, !0), r = Fn[Hh](this, {x: n + s, y: e}), Hn(t, r.x, r.y), r = Fn[Hh](this, {
            x: n + s,
            y: e + h
        }), Hn(t, r.x, r.y), r = Fn[Hh](this, {
            x: n,
            y: e + h
        }), Hn(t, r.x, r.y), this[Of] && (r = Fn.call(this, {
            x: this[If],
            y: this[Lf]
        }), Hn(t, r.x, r.y)), i && t.grow(i / 2)
    }, hH = 20, rH = {
        _gl: !1, _ju: null, _mu1: 0, _kk: -1, _km: null, _ei: function (t) {
            this._ju || (this._ju = [], this._ix = Pz), this._ju[Kh](t), this._eq(), this._kc()
        }, _kc: function () {
            if (!this._km) {
                var t = this;
                this._km = setTimeout(function i() {
                    return t._eq() !== !1 ? void (t._km = setTimeout(i, t._gz())) : void delete t._km
                }, this._gz())
            }
        }, _gz: function () {
            return Math.max(hH, this._ju[this._kk].delay)
        }, _eq: function () {
            return this._h1(this._kk + 1)
        }, _h1: function (t) {
            if (this._gl) t %= this[Bp]; else if (t >= this._ju[qh]) return !1;
            if (this._kk == t) return !1;
            this._kk = t;
            var i = this._ju[this._kk], n = i._muache;
            return n || (i[jp] = n = Li(this[Pa], this[Ra]), n.g[sf](i.data, 0, 0), n[Em] = i._pixels), this._kf = n, this[lf] = !0, this._dk()
        }, _mu3: function () {
            return this._ju ? (this._gl = !0, this._mu1 = this._ju[qh], 1 == this._mu1 ? this._dk() : void this._kc()) : void this._hz()
        }, _lo: function () {
            this._km && (clearTimeout(this._km), delete this._km)
        }, _dk: function () {
            var t = this[gm].listeners;
            if (!t || !t[qh]) return !1;
            for (var i = new mq(this, zm, Hm, this._kf), n = 0, e = t.length; e > n; n++) {
                var s = t[n];
                s[zl]._j9 && s[zl]._j9[$p] ? (t[Uh](n, 1), n-- , e--) : s[or][Hh](s[zl], i)
            }
            return t.length > 0
        }, _msd: function (t, i) {
            this[gm][Yl](t, i), this._gl && !this._km && this._kc()
        }, _76: function (t, i) {
            this._dispatcher[Ym](t, i), this[gm][Fp]() || this._lo()
        }, _hs: function () {
            this._lo(), this[gm][Da]()
        }, _g9: function () {
            var t = this._kf[Gp];
            return t || (this._kf[Gp] = t = new tH(this._kf, 1)), t
        }
    }, aH = function (t) {
        return t.reduce(function (t, i) {
            return 2 * t + i
        }, 0)
    }, oH = function (t) {
        for (var i = [], n = 7; n >= 0; n--)i[Kh](!!(t & 1 << n));
        return i
    }, fH = function (t) {
        this[mo] = t, this.len = this[mo][qh], this.pos = 0, this[qp] = function () {
            if (this.pos >= this[mo][qh]) throw new Error("Attempted to read past end of stream.");
            return 255 & t[ru](this.pos++)
        }, this[zp] = function (t) {
            for (var i = [], n = 0; t > n; n++)i[Kh](this.readByte());
            return i
        }, this[Hp] = function (t) {
            for (var i = "", n = 0; t > n; n++)i += String[Yp](this[qp]());
            return i
        }, this[Up] = function () {
            var t = this[zp](2);
            return (t[1] << 8) + t[0]
        }
    }, uH = function (t, i) {
        for (var n, e, s = 0, h = function (t) {
            for (var n = 0, e = 0; t > e; e++)i[ru](s >> 3) & 1 << (7 & s) && (n |= 1 << e), s++;
            return n
        }, r = [], a = 1 << t, o = a + 1, f = t + 1, u = [], c = function () {
            u = [], f = t + 1;
            for (var i = 0; a > i; i++)u[i] = [i];
            u[a] = [], u[o] = null
        }; ;)if (e = n, n = h(f), n !== a) {
            if (n === o) break;
            if (n < u.length) e !== a && u[Kh](u[e][Wh](u[n][0])); else {
                if (n !== u[qh]) throw new Error(Wp);
                u[Kh](u[e].concat(u[e][0]))
            }
            r[Kh].apply(r, u[n]), u[qh] === 1 << f && 12 > f && f++
        } else c();
        return r
    }, cH = function (t, i) {
        i || (i = {});
        var n = function (i) {
            for (var n = [], e = 0; i > e; e++)n[Kh](t[zp](3));
            return n
        }, e = function () {
            var i, n;
            n = "";
            do i = t[qp](), n += t.read(i); while (0 !== i);
            return n
        }, s = function () {
            var e = {};
            if (e.sig = t[Hp](3), e.ver = t[Hp](3), Xp !== e.sig) throw new Error(Vp);
            e[Pa] = t[Up](), e.height = t[Up]();
            var s = oH(t[qp]());
            e.gctFlag = s[Zp](), e.colorRes = aH(s[Uh](0, 3)), e[Kp] = s[Zp](), e[Jp] = aH(s[Uh](0, 3)), e[Qp] = t[qp](), e[tE] = t[qp](), e.gctFlag && (e.gct = n(1 << e[Jp] + 1)), i.hdr && i.hdr(e)
        }, h = function (n) {
            var s = function (n) {
                var e = (t.readByte(), oH(t.readByte()));
                n.reserved = e[Uh](0, 3), n.disposalMethod = aH(e.splice(0, 3)), n.userInput = e[Zp](), n.transparencyGiven = e.shift(), n[Xf] = t[Up](), n[Wf] = t.readByte(), n[iE] = t.readByte(), i.gce && i.gce(n)
            }, h = function (t) {
                t[nE] = e(), i.com && i.com(t)
            }, r = function (n) {
                t.readByte(), n.ptHeader = t[zp](12), n[eE] = e(), i.pte && i.pte(n)
            }, a = function (n) {
                var s = function (n) {
                    t[qp](), n.unknown = t.readByte(), n[sE] = t[Up](), n[iE] = t[qp](), i.app && i.app.NETSCAPE && i.app.NETSCAPE(n)
                }, h = function (t) {
                    t[hE] = e(), i.app && i.app[t.identifier] && i.app[t.identifier](t)
                };
                switch (t[qp](), n[rE] = t[Hp](8), n[aE] = t.read(3), n[rE]) {
                    case "NETSCAPE":
                        s(n);
                        break;
                    default:
                        h(n)
                }
            }, o = function (t) {
                t[mo] = e(), i.unknown && i[oE](t)
            };
            switch (n[fE] = t[qp](), n[fE]) {
                case 249:
                    n[uE] = cE, s(n);
                    break;
                case 254:
                    n[uE] = _E, h(n);
                    break;
                case 1:
                    n[uE] = dE, r(n);
                    break;
                case 255:
                    n[uE] = lE, a(n);
                    break;
                default:
                    n.extType = oE, o(n)
            }
        }, r = function (s) {
            var h = function (t, i) {
                for (var n = new Array(t[qh]), e = t[qh] / i, s = function (e, s) {
                        var h = t[Yh](s * i, (s + 1) * i);
                        n[Uh].apply(n, [e * i, i][Wh](h))
                    }, h = [0, 4, 2, 1], r = [8, 8, 4, 2], a = 0,
                         o = 0; 4 > o; o++)for (var f = h[o]; e > f; f += r[o])s(f, a), a++;
                return n
            };
            s[Jf] = t.readUnsigned(), s[Zf] = t.readUnsigned(), s[Pa] = t.readUnsigned(), s.height = t[Up]();
            var r = oH(t[qp]());
            s[vE] = r[Zp](), s.interlaced = r[Zp](), s[Kp] = r[Zp](), s.reserved = r[Uh](0, 2), s[bE] = aH(r.splice(0, 3)), s[vE] && (s.lct = n(1 << s[bE] + 1)), s[gE] = t[qp]();
            var a = e();
            s[yE] = uH(s[gE], a), s[mE] && (s.pixels = h(s[yE], s[Pa])), i.img && i.img(s)
        }, a = function () {
            var n = {};
            switch (n[xE] = t[qp](), String.fromCharCode(n[xE])) {
                case "!":
                    n.type = pE, h(n);
                    break;
                case ",":
                    n[To] = u_, r(n);
                    break;
                case ";":
                    n[To] = EE, i.eof && i.eof(n);
                    break;
                default:
                    throw new Error(wE + n[xE].toString(16))
            }
            EE !== n[To] && setTimeout(a, 0)
        }, o = function () {
            s(), setTimeout(a, 0)
        };
        o()
    }, _H = "";
    i.addEventListener && i.addEventListener(TE, function (t) {
        if (t[ma] && t[ME] && t[kE] && 73 == t.keyCode) {
            var i = vz.name + OE + vz[SE] + IE + vz[AE] + so + vz[CE] + so + vz[LE] + _H;
            vz.alert(i)
        }
    }, !1);
    var dH = PE;
    // TODO 
    _H = RE + decodeURIComponent(DE);
    var lH, vH, bH, gH = t, yH = NE, mH = BE, xH = jE, pH = $E, EH = FE, wH = GE, TH = qE, MH = zE, kH = HE, OH = YE,
        SH = UE, IH = WE, AH = XE, CH = VE, LH = ZE, PH = KE, RH = JE, DH = QE, NH = tw, BH = iw, jH = nw,
        $H = gH[pH + ew];
    $H && (vH = gH[CH + sw][EH + hw], $H[Hh](gH, Kn, PH), $H.call(gH, Jn, NH), $H[Hh](gH, function () {
        GH && GH == dH && (KH = !1)
    }, RH));
    var FH, GH, qH, zH = 111, HH = function (t, i) {
        i || (i = rw + mH + aw);
        try {
            bH[Hh](t, i, 6 * zH, 1 * zH)
        } catch (n) {
        }
    }, YH = !0, UH = !0, WH = !0, XH = !0, VH = !0, ZH = !0, KH = !0, JH = JG ? 200 : 1024, QH = function (t, i) {
        return Zn ? Zn(t, i) || "" : void 0
    };
    if (i[Ha]) {
        var tY = i.createElement(ow);
        tY[ja][fw] = x_, tY[tu] = function (t) {
            var i = t[dc][uw], n = vH;
            if ("" === n || cw == n || _w == n) return void this.parentNode[ym][pv](this.parentNode);
            var e = i.String[Yp];
            i[pH + ew](function () {
                Vn(e) != FH && (OY[tr]._ja = null)
            }, NH), this.parentNode[ym].removeChild(this[ym])
        };
        var iY = i.createElement(o_);
        iY[ja][Pa] = S_, iY.style.height = S_, iY.style.overflow = m_, iY[Ov](tY), i[ud][Ov](iY)
    }
    if (i[LH + dw]) {
        var nY = i[LH + dw](kH + lw);
        nY.style[fw] = x_, nY[tu] = function (t) {
            var i = vw, n = t.target[i + bw];
            lH = n[gw].now();
            var e = n[OH + SH + yw + IH + mw][AH + To];
            bH = e[yH + xw], UG && (n = gH);
            var s = n[pH + ew];
            s[Hh](gH, ne, NH), s[Hh](gH, ee, BH), s[Hh](gH, he, jH), s[Hh](gH, re, RH), s[Hh](gH, Qn, DH), s.call(gH, ie, jH), s.call(gH, se, NH), s[Hh](gH, te, NH), this[ym][ym][pv](this[ym])
        };
        var iY = i[Ha](o_);
        iY.style.width = S_, iY.style.height = S_, iY[ja][pw] = m_, iY[Ov](nY), i.documentElement[Ov](iY)
    }
    var eY = {
        position: Ew,
        userSelect: x_,
        outline: x_,
        transformOrigin: ww,
        "-webkit-tap-highlight-color": Fx
    }, sY = Tw;
    gi(jr + sY, eY);
    var hY = {
        width: w_,
        height: w_,
        position: p_,
        overflow: m_,
        textAlign: Go,
        outline: x_,
        tapHighlightColor: Fx,
        userSelect: x_
    }, rY = Mw;
    gi(jr + rY, hY);
    var aY = kw, oY = {overflow: m_, "text-align": Go, "-webkit-tap-highlight-color": Fx, outline: x_};
    gi(jr + aY, oY);
    var fY = S(function (t) {
        this._mqr = new cY, this._md = new iq, this._8g = [], this[Ow] = [], this[Sw] = [], this._89 = {}, this[kf] = new oq, this._iq = new gY, this[Iw] = new yY, this._iq[Gl] = function (t) {
            this._6f(t)
        }[cr](this), this[Aw](), this[Cw](t)
    }, {
        _mqb: null, _ik: null, _md: null, _muc: null, _iq: null, _mue: function (t) {
            return t ? (this[Lw] || (this[Lw] = {}), this[Lw][t] ? !1 : (this[Lw][t] = !0, void this[Pw]())) : this[Pw]()
        }, _9s: function (t) {
            return this[Lw] && this[Lw][t]
        }, isInvalidate: function () {
            return this._6c
        }, clear: function () {
            this._md.clear(), this[Ow].length = 0, this._89 = {}, this[Rw] = !1, this[Pw]()
        }, _6j: function () {
            this[Dw](Nw), this._35()
        }, _35: function () {
            this._mue(Bw)
        }, invalidate: function (t) {
            (t || !this._6c) && (this._6c = !0, this._lo || (this[jw] = requestAnimationFrame(this._fj[cr](this))))
        }, _6h: function (t) {
            return this._lo = t, t ? void (this[jw] && (cancelAnimationFrame(this[jw]), this._jaingID = null)) : void (this._6c && this[Pw](!0))
        }, _fj: function () {
            this[jw] = null, this._6c = !1;
            var t = this._mqo;
            this[Rw] || (this[$w](), this[Rw] = !0), this[Fw](!t), this._3d(), this._ja(), this._24()
        }, _mug: function (t) {
            this[Gw] = t || this.fullRefresh, (t || this._6cs[Nw]) && this._9r(), (t || this[Lw][qw]) && this._6d(), this[zw](t), this._4u(t), this[Lw] = {}
        }, _3d: function () {
            this[Ow].length = 0;
            var t = this[Iw];
            if (this._md.forEach(function (i) {
                    if (i.__hf !== !1) {
                        var n = this[Hw](i);
                        t.intersects(n.x, n.y, n.width, n[Ra]) && this[Ow][Kh](i)
                    }
                }, this), this[Ow] = this._ho(this[Ow]), !this._ms0) {
                var i = this[Yw];
                this._l3ingList[qh] = 0, i._mqz(this[Iw]), i._hk() || this[Ow][Kf](function (t) {
                    var n = this[Hw](t);
                    i._eo(n.x, n.y, n[Pa], n[Ra]) && this._l3ingList[Kh](t)
                }, this)
            }
        }, _ho: function (t) {
            return UG ? t = d(t, this._9z) : t.sort(this._9z), t
        }, _9z: function (t, i) {
            return t = t[Uw] || 0, i = i[Uw] || 0, t - i
        }, _mqt: function (t) {
            return t.boundingBox
        }, _ja: function () {
            if (this[Gw]) return this._e3(), this._6u(!0), void this[mu](this[Ww], this[Ow]);
            this._6u(this._msuffer);
            var t = this[Yw], i = this[Ww];
            i[Ja](), this[Xw] && (fe(i), i[N_](this[Xw][Ya], this[Xw].x, this[Xw].y)), t._jo(i, this._e8[cr](this)), this._e3(), this[mu](i, this[Sw]), i[ro]()
        }, _6u: function (t) {
            this[Vw] ? (this[Vw] = !1, this._ik.setSize(this[Mm], this._height)) : t && oe(this._ik)
        }, _9r: function () {
            var t = this[Pa], i = this[Ra];
            return this[Mm] == t && this[km] == i ? !1 : (this[Mm] = t, this[km] = i, void (this[Vw] = !0))
        }, _4u: function (t) {
            if (!t && !this[Lw][Bw]) return !1;
            var i = this._iq[Zw]([0, 0]), n = this[rf], e = this._width / n, s = this[km] / n, h = this[Mo],
                r = this[Iw];
            if (r.x == i[0] && r.y == i[1] && r[Pa] == e && r.height == s && r[Mo] == h) return !1;
            var a = r[bx]();
            return this._viewport.set(i[0], i[1], e, s, h, n), this._3g(this[Iw], a, t), !0
        }, _3g: function (t, i, n) {
            this[Gw] || n || (this._msuffer = this._gu(i, t))
        }, _6f: function () {
            if (this[Rw]) {
                if (this._lo) {
                    var t;
                    this[Kw] ? this._muurrentMatrix[Jw] = t = lY.mul([], this._iq.m, lY.invert([], this[Kw].m)) : t = this._iq.m, this._5g(t)
                }
                this[Dw](qw), this._35()
            }
        }, _5g: function (t) {
            this[Qw] = t, mY.setStyle(this._ik, d_, t ? tT + t.join(Ar) + ")" : "")
        }, _6d: function () {
            var t = this[Kw];
            if (this[Kw] = {
                    tx: this._iq.m[4],
                    ty: this._iq.m[5],
                    m: this._iq.m[Yh](),
                    scale: this._iq._go(),
                    rotate: this._iq._ef()
                }, this[Qw] && this._5g(null), !this[Gw]) {
                if (this._33(this[Kw], t), !t || t[rf] != this._muurrentMatrix[rf]) return this._6n(this[Kw][rf], t ? t.scale : null), void (this._ms0 = !0);
                if (!t || t[Mo] != this[Kw][Mo]) return this._5r(this._muurrentMatrix[Mo], t ? t[Mo] : null), void (this[Gw] = !0);
                var i = t.m[4] - this[Kw].m[4], n = t.m[5] - this[Kw].m[5], e = this[Ba];
                i *= e, n *= e;
                var s = 1e-4;
                (Math.abs(i - Math[go](i)) > s || Math.abs(n - Math[go](n)) > s) && (this[Gw] = !0)
            }
        }, _68: function () {
            var t = this[kf], i = t[Zh]();
            t[Da](), this._md[Kf](function (i) {
                i[iT] !== !1 && t.add(this[Hw](i))
            }, this), t[xu](i) || this._3h(t, i)
        }, _3h: function () {
        }, _mqo: !1, _muh: function () {
        }, _9p: function (t) {
            var i = t.ratio;
            t.scale(i, i), t[d_].apply(t, this._iq.m)
        }, render: function (t, i) {
            i && i[qh] && (t[Ja](), this._9p(t), i.forEach(function (i) {
                if (t[Ja](), i[nT] !== !1) try {
                    i[mu](t)
                } catch (n) {
                    console[Qo](n)
                }
                t.restore()
            }, this), t[ro]())
        }, setParent: function (t) {
            B(t) && (t = i.getElementById(t)), this._mb != t && (this._mb && this[eT] && (D(this._mb, aY), this._mb[pv](this._mqb)), this._mb = t, this._mb && (R(this._mb, aY), this._mb[Ov](this._6y()), this._6j()))
        }, _6y: function () {
            return this[eT] || this._muj(), this[eT]
        }, _muj: function () {
            var t = Li(!0);
            Wn(t.g), t[dr] = sY;
            var n = i.createElement(o_);
            return n[dr] = rY, n[Ov](t), n[sT] = 0, this._ik = t, this[eT] = n, this[Ww] = this._ik.getContext(Wa), t
        }, toLogical: function (t, i) {
            return t instanceof Object && (Q(t) && (t = this._86(t)), Array.isArray(t) ? (i = t[1] || 0, t = t[0] || 0) : (i = t.y || 0, t = t.x || 0)), this._iq[Zw]([t, i])
        }, toCanvas: function (t, i) {
            return this._iq[d_]([t, i])
        }, _86: function (t) {
            return yi(t, this[eT])
        }, _f3: function (t, i, n) {
            if (t[s_] instanceof Function) return t[s_](i, n);
            var e = this[Hw](t);
            return e ? n ? oq.intersects(e.x, e.y, e.width, e[Ra], i[0] - n, i[1] - n, n + n, n + n) : oq[qc](e.x, e.y, e[Pa], e[Ra], i[0], i[1]) : t
        }, hitTest: function (t, i) {
            return this._87(t, i)
        }, _87: function (t, i) {
            i = this._9o(i), t = this[hT](t);
            for (var n, e = this[Ow][qh]; --e >= 0;)if (n = this[Ow][e], this._f3(n, t, i)) return n
        }, _9o: function (t) {
            return (t === n || null === t) && (t = tq.SELECTION_TOLERANCE), t ? t / this[rf] : 0
        }, getUIByMouseEvent: function (t, i) {
            if (t[rT]) return this._md[Hd](t[rT]);
            var n = this._87(t, i);
            return t[rT] = n ? n.id : -1, n
        }, _89: null, invalidateUI: function (t) {
            this._89[t.id] = t, this[Pw]()
        }, _9w: function (t) {
            t.validate instanceof Function && t.validate(this)
        }, _muk: function (t) {
            t[aT] && this._gq(t.__iv);
            var i = t[iT];
            if (t.__hf = this._ex(t), !t[iT]) return i;
            var n = t.__iv;
            this._9w(t);
            var e = this[Hw](t);
            t[aT] = {x: e.x, y: e.y, width: e[Pa], height: e[Ra]};
            var s = t[iT] !== i || !oq[xu](n, e);
            return s && t.__iv && this._gq(t.__iv), s
        }, _ex: function (t) {
            return t[nT] !== !1
        }, _$w: function () {
            this._md[Kf](function (t) {
                this._muk(t)
            }, this), this._89 = {}, this._68()
        }, _mqd: function (t) {
            if (t) return this._$w();
            var i = this._mueBoundsFlag;
            this[oT] = !1;
            for (var n in this._89) {
                var e = this._89[n];
                i ? this[fT](e) : i = this[fT](e)
            }
            this._89 = {}, i && this._68()
        }, _8g: null, _24: function () {
            if (!this._8g[qh]) return !1;
            var t = this._8g;
            this._8g = [], t[Kf](function (t) {
                try {
                    var i = t.call, n = t.scope, e = t[uT];
                    n instanceof Object ? i = i[cr](n) : n && !e && (e = parseInt(n)), e ? setTimeout(i, e) : i()
                } catch (s) {
                }
            }, this), this._6c && this._fj()
        }, _di: function (t, i, n) {
            this._8g[Kh]({call: t, scope: i, delay: n}), this._6c || this._24()
        }, _43: function (t, i) {
            for (var n = this[Ow], e = 0, s = n[qh]; s > e; e++)if (t[Hh](i, n[e]) === !1) return !1
        }, _dl: function (t, i) {
            this._md.forEach(t, i)
        }, _$z: function (t, i) {
            for (var n = this[Ow], e = n[qh] - 1; e >= 0; e--)if (t.call(i, n[e]) === !1) return !1
        }, _46: function (t, i) {
            this._md[cT](t, i)
        }, _47: function () {
            return this.bounds
        }, _gy: function (t, i, n) {
            t /= this.scale || 1, this._je(t, i, n)
        }, _je: function (t, i, e) {
            if (this._mqo && (i === n || null === i)) {
                var s = this.toLogical(this.width / 2, this[Ra] / 2);
                i = s[0] || 0, e = s[1] || 0
            }
            return this._iq[rf](t, [i || 0, e || 0])
        }, _du: function (t, i) {
            this._iq[Qa]([t, i], !0)
        }, _ms2: function (t, i, n, e) {
            if (n == this[rf] && e !== !1) {
                var s = this.ratio;
                s != (0 | s) && (t = Math[go](t * s) / s, i = Math.round(i * s) / s)
            }
            this._iq.translateTo([t, i], n)
        }, _jf: function (t, i) {
            return this._je(this._dy, t, i)
        }, _hl: function (t, i) {
            return this._je(1 / this._dy, t, i)
        }, _1m: function () {
            var t = this._47();
            if (!t[Nf]()) {
                var i = this[Pa] / t.width, n = this.height / t[Ra], e = Math.min(i, n);
                return e = Math.max(this._gv, Math.min(this._gw, e)), {scale: e, cx: t.cx, cy: t.cy}
            }
        }, _dy: 1.3, _gw: 10, _gv: .1, _ms0: !1, _6n: function () {
        }, _5r: function () {
        }, _33: function () {
        }, _e3: function () {
            this[Xw] = null, this[Yw]._ka()
        }, _e8: function (t) {
            var i = this._iq, n = this._ik.ratio, e = this.scale, s = i._ef();
            if (!s) {
                var h = i[d_]([t[0], t[1]]);
                return h[0] *= n, h[1] *= n, n *= e, h[2] = t[2] * n, h[3] = t[3] * n, h
            }
            var r = new oq, a = i[d_]([t[0], t[1]]);
            return r.add(a[0], a[1]), a = i[d_]([t[0] + t[2], t[1]]), r.add(a[0], a[1]), a = i[d_]([t[0], t[1] + t[3]]), r.add(a[0], a[1]), a = i.transform([t[0] + t[2], t[1] + t[3]]), r.add(a[0], a[1]), [r.x * n, r.y * n, r[Pa] * n, r[Ra] * n]
        }, _gu: function (t, n) {
            var e = n._3z(t.x, t.y, t[Pa], t[Ra]);
            if (e) {
                var s = this._ik, h = this[rf] * this[Ba], r = this[Yw], a = {}, o = 1e-6;
                e.x > o && (a.left = n._4s(0, 0, e.x, n[Ra], h)), n[Pa] - e[Yr] > o && (a[Yr] = n._4s(e.right, 0, n.width - e[Yr], n[Ra], h)), e.y > o && (a.top = n._4s(e.x, 0, e.width, e.y, h)), n[Ra] - e[Hr] > o && (a.bottom = n._4s(e.x, e.bottom, e[Pa], n[Ra] - e[Hr], h)), Y(a) || r._4q(a);
                var f = n._hg(t.x, t.y), u = (f[0] - e.x) * h, c = (f[1] - e.y) * h, _ = e[Pa] * h, d = e[Ra] * h;
                u = Math.round(u), c = Math[go](c), _ = Math.round(_), d = Math[go](d);
                var l = this._msackCanvas;
                return l || (l = this._msackCanvas = i[Ha](Ya), l.g = l[Ua](Wa)), l.width = _, l[Ra] = d, fe(l.g), l.g[N_](s, u, c), u = f[0] * h - u, c = f[1] * h - c, {
                    x: u,
                    y: c,
                    canvas: l
                }
            }
        }, _la: function (t, i, n, e) {
            this[Yw]._mf(t, i, n, e)
        }, _gq: function (t) {
            this[Yw]._hn(t)
        }
    });
    Object.defineProperties(fY[tr], {
        width: {
            get: function () {
                return this._mqb[_T]
            }
        }, height: {
            get: function () {
                return this[eT][$_]
            }
        }, rotate: {
            get: function () {
                return this._iq._ef()
            }
        }, tx: {
            get: function () {
                return this._iq._7x()[0]
            }
        }, ty: {
            get: function () {
                return this._iq._7x()[1]
            }
        }, ratio: {
            get: function () {
                return this._ik ? this._ik.ratio : void 0
            }
        }, scale: {
            get: function () {
                return this._iq._go()
            }, set: function (t) {
                this._gy(t)
            }
        }, renderScale: {
            get: function () {
                return this[rf] * this[Ba]
            }
        }, uis: {
            get: function () {
                return this._md
            }
        }, length: {
            get: function () {
                return this._md.length
            }
        }, viewportBounds: {
            get: function () {
                return this[Iw][dT]()
            }
        }
    });
    var uY, cY = S({
        constructor: function () {
            this._hd = [], this._iv = new oq, this._he = FG ? 20 : 50
        }, _he: 20, _hd: null, _l8: !1, _iv: null, _ka: function () {
            this._l8 = !1, this._hd[qh] = 0, this[lT] = null, this._iv[Da]()
        }, _hk: function () {
            return 0 == this._hd[qh] && !this._viewportClips
        }, _mf: function (t, i, n, e) {
            0 >= n || 0 >= e || this._hd.push([t, i, n, e])
        }, _hn: function (t) {
            this._mf(t.x, t.y, t[Pa], t.height)
        }, _4q: function (t) {
            var i = this._iv;
            for (var n in t) {
                var e = t[n], s = e.getGlobalBounds();
                i.add(s)
            }
            this[lT] = t
        }, _mqz: function (t, i) {
            for (var n = [], e = this._hd, s = 0, h = e[qh]; h > s; s++) {
                var r = e[s];
                t[qc](r[0], r[1], r[2], r[3]) && (n.push(r), this._iv[sl](r[0], r[1], r[2], r[3]))
            }
            this._hd = n, this._l8 = i || n.length >= this._he
        }, _eo: function (t, i, n, e) {
            if (!this._iv[el](t, i, n, e)) return !1;
            if (this._l8) return !0;
            if (this[lT]) {
                var s = this._viewportClips;
                for (var h in s) if (s[h][qc](t, i, n, e)) return !0
            }
            for (var r, a = 0,
                     o = this._hd[qh]; o > a; a++)if (r = this._hd[a], oq.intersects(t, i, n, e, r[0], r[1], r[2], r[3])) return !0;
            return !1
        }, _jo: function (t, i) {
            if (this._hk()) return !1;
            if (t[Ix](), this._l8) {
                var n = i([this._iv.x, this._iv.y, this._iv[Pa], this._iv[Ra]]);
                return ue(t, n[0], n[1], n[2], n[3]), void t.clip()
            }
            if (this[lT]) for (var e in this[lT]) {
                var n = this[lT][e].canvasBounds;
                ue(t, n[0], n[1], n[2], n[3])
            }
            for (var s = this._hd, h = 0, r = s.length; r > h; h++) {
                var n = i(s[h]);
                ue(t, n[0], n[1], n[2], n[3])
            }
            t[Am]()
        }
    });
    cY._toIntRect = function (t, i, n, e) {
        return t instanceof Object && (i = t.y, n = t.width, e = t.height, t = t.x), n = X(t + n) - (t = W(t)), e = X(i + e) - (i = W(i)), [t, i, n, e]
    }, cY._df = W, cY._gc = X, bz[vT] = bT, bz[gT] = yT, tq[mT] = bz[gT];
    var _Y = S({
        _ja: function () {
            M(this, _Y, xT, arguments), this._topCanvas._ja()
        },
        _9z: function (t, i) {
            return t = t[Df][Uw] || 0, i = i[Df][Uw] || 0, t - i
        },
        "super": fY,
        constructor: function (t, n) {
            this._k0 = t, B(n) && (n = i[pT](n)), n && n[Wd] || (n = i[Ha](o_)), k(this, _Y, [n]), this[ET] = new oh(this, this[eT]), this._h7 = [], this._k0._9.addListener(this._1g, this), this._k0._1o.addListener(this._9c, this), this._k0._19.addListener(this._6q, this), this._k0._$k[Yl](this._2z, this), this._k0._$q[Yl](this._3p, this), this[wT] = {}, this._3y(tq[mT], !0)
        },
        _5g: function (t) {
            M(this, _Y, TT, arguments), this._topCanvas._5g(t)
        },
        _hb: function (t) {
            return t.id || (t = this._md.getById(t)), t ? (this._md[Vh](t), t.destroy(), t[aT] && this._gq(t.__iv), void (this[oT] = !0)) : !1
        },
        _ha: function () {
            this._md[Kf](function (t) {
                t.destroy()
            }), this._md.clear()
        },
        _ex: function (t) {
            var i = t[mo] || t;
            return i._$t && (i._$t = !1, i._hf = this._57(i)), i._hf !== !1
        },
        _57: function (t) {
            return this._3k(t) ? !this._k0._hfFilter || this._k0._hfFilter(t) !== !1 : !1
        },
        _9x: function (t) {
            return this._k0._3t == ih(t)
        },
        _3k: function (t) {
            if (t.visible === !1) return !1;
            if (!(t instanceof EY)) return this._k0._3t != ih(t) ? !1 : !t._dp;
            var i = t[Mu], n = t[wu];
            if (!i || !n) return !1;
            if (i == n && !t[bd]()) return !1;
            if (t.isBundleEnabled()) {
                var e = t[MT](!0);
                if (e && !e._ex(t)) return !1
            }
            var s = this._ex(i), h = this._ex(n);
            return s && h ? !0 : !1
        },
        _mqt: function (t) {
            return t[Rw] ? {x: t.$x + t[kT].x, y: t.$y + t[kT].y, width: t[kT][Pa], height: t[kT][Ra]} : void 0
        },
        _2v: function (t) {
            var i = this._l0(t);
            if (i) {
                var n = this._mqt(i);
                if (n) return new oq(n)
            }
        },
        _f3: function (t, i, n) {
            return t[s_](i[0], i[1], n)
        },
        hitTest: function (t, i) {
            var n = M(this, _Y, s_, arguments);
            if (n) {
                t = this[hT](t), i = this._9o(i);
                var e = n[s_](t[0], t[1], i, !0);
                if (e instanceof OY) return e
            }
            return n
        },
        _3l: function (t) {
            return this[ng](t)
        },
        _6u: function () {
            M(this, _Y, OT, arguments), this._topCanvas._id(this[Pa], this[Ra])
        },
        _kx: 1,
        _muc: null,
        _8u: null,
        _8v: null,
        _md: null,
        _mb: null,
        _ik: null,
        _mqr: null,
        _6c: !1,
        _mqo: !1,
        _iq: null,
        _43: function (t, i) {
            for (var n = this[Ow], e = 0, s = n[qh]; s > e; e++)if (t[Hh](i, n[e]) === !1) return !1
        },
        _dl: function (t, i) {
            this._md[Kf](t, i)
        },
        _$z: function (t, i) {
            for (var n = this[Ow], e = n[qh] - 1; e >= 0; e--)if (t[Hh](i, n[e]) === !1) return !1
        },
        _46: function (t, i) {
            this._md[cT](t, i)
        },
        _3g: function (t) {
            M(this, _Y, ST, arguments), this[IT] = {value: t}
        },
        _muh: function () {
            this._4u(!0), this[AT] || (this._originAdjusted = !0, this._k0 && this._k0.originAtCenter && this._iq.translateTo([this[Pa] / 2, this[Ra] / 2]))
        },
        _fj: function () {
            if (!this[$p] && this._6c) {
                if (this[jw] = null, this._6c = !1, this._mqo && this._k0 && this._k0._$t && (this._k0._$t = !1, this._k0[Kf](function (t) {
                        t[CT](!0)
                    })), M(this, _Y, LT, arguments), this._6o && (this[PT] || this._8vChanged) && this._6o._ip(), this[PT]) {
                    var t = this._e8Changed[_c], i = this[PT].old;
                    this[PT] = null, this._k0._4e(new xq(this._k0, d_, t, i))
                }
                if (this[RT]) {
                    var t = this[RT].value, i = this._scaleChanged.old;
                    this[RT] = null, this._k0._4e(new xq(this._k0, rf, t, i))
                }
                if (this[DT]) {
                    var t = this._8vChanged[_c], i = this._8vChanged.old;
                    this[DT] = null, this._k0._4e(new xq(this._k0, NT, t, i))
                }
                this[IT] && (this[IT] = !1, this._6o && this._6o._3g && this._6o._3g(this[Iw].width * this[Iw].scale, this[Iw][Ra] * this._viewport[rf]), this._k0._4e(new xq(this._k0, Bw, this[Iw])))
            }
        },
        _h7: null,
        _muk: function (t) {
            var i = t.$data;
            if (!t._1p && !i._6c && !i._$t) return !1;
            var n = t.$invalidateSize;
            return n = M(this, _Y, fT, arguments) || n
        },
        _9w: function (t) {
            var i = t[Df];
            i.__48 && (i.__48 = !1, t._48()), i[BT] && i._hu() && (t._60(), i[BT] = !1), (t._1p || i._6c) && (i._6c = !1, t.validate())
        },
        _h6: function (t, i) {
            var n = t.ratio;
            t[rf](n, n), t[d_][nr](t, this._iq.m);
            for (var e = this.scale, s = [], h = 0, r = i[qh]; r > h; h++) {
                var a = i[h];
                a._ja(t, e), a._jc && a._jc[qh] && s[Kh](a)
            }
            if (s[qh]) for (h = 0, r = s[qh]; r > h; h++)s[h]._9u(t, e)
        },
        render: function (t, i) {
            if (i[qh]) {
                if (t[Ja](), FG) try {
                    this._h6(t, i)
                } catch (n) {
                } else this._h6(t, i);
                t[ro]()
            }
        },
        _h5: function (t, i, n) {
            t.save(), t.translate(-n.x * i, -n.y * i), t[rf](i, i);
            var e, s, h = this._md._is[Yh]();
            h = this._ho(h);
            for (var r = [], a = 0,
                     o = h[qh]; o > a; a++)e = h[a], e[iT] && (s = this[Hw](e), n[el](s.x, s.y, s.width, s[Ra]) && (e._ja(t, i), e._jc && e._jc[qh] && r.push(e)));
            if (r[qh]) for (a = 0, o = r.length; o > a; a++)r[a]._9u(t, i);
            t[ro]()
        },
        _11: function () {
        },
        _1r: function () {
            for (var t, i, n = this._md._is, e = new oq,
                     s = n.length - 1; s >= 0; s--)t = n[s], t._hf && (i = t[kT], e.addRect(t.$x + i.x, t.$y + i.y, i.width, i[Ra]));
            var h = this._8v;
            this._8v = e, e.equals(h) || this._11(h, e)
        },
        _80: function () {
        },
        _5f: function () {
            this[Ow][qh] = 0, this._8u = {}
        },
        _ky: function () {
            this._ka()
        },
        _hs: function () {
            this._ka(), this._hsed = !0, this._6c = !1, this._topCanvas[Da](), this._8g.length = 0, this._6o && (this._6o._hs(), delete this._6o)
        },
        _l0: function (t) {
            return this._md.getById(t.id || t)
        },
        _$i: function (t) {
            return this._e2(t)
        },
        _h4: function (t, i) {
            var n = this[jT](t, i);
            return {x: n[0], y: n[1]}
        },
        _e2: function (t, i) {
            var n = this.toLogical(t, i);
            return {x: n[0], y: n[1]}
        },
        _$g: null,
        _3p: function (t) {
            var i = t[Ho], n = t[mo];
            if (n) if (this[Rw]) {
                var e, s;
                if ($(n)) for (var h = 0,
                                   r = n[qh]; r > h; h++)s = n[h].id, e = this._md[Hd](s), e && (e[$T] = i[Fd](s), e[FT]()); else {
                    if (s = n.id, e = this._md[Hd](s), !e) return;
                    e[$T] = i[Fd](s), e.invalidateRender()
                }
                this._mue()
            } else {
                this._$g || (this._$g = {});
                var e, s;
                if ($(n)) for (var h = 0,
                                   r = n[qh]; r > h; h++)s = n[h].id, this._$g[s] = !0; else s = n.id, this._$g[s] = !0
            }
        },
        _k0: null,
        _muq: function (t) {
            var i = t[GT];
            return i ? new i(t, this._k0) : void 0
        },
        _1g: function (t) {
            if (!this[Rw]) return !1;
            var i = t[Ho], n = t[dd];
            a_ == n && this._k0[CT](), GT == n ? (this._hb(i.id), this._jx(i)) : qT == n && i._hu() && t[_c] && this._5m(i);
            var e = this._md.getById(i.id);
            e && e._mqo && e[zT](t) && this[Dw]()
        },
        _3r: function (t) {
            var i = this._l0(t);
            i && (i[HT](), this[Dw]())
        },
        _9c: function (t) {
            if (!this._mqo) return !1;
            switch (t[dd]) {
                case Iq[Kl]:
                    this._jx(t[mo]);
                    break;
                case Iq[Ql]:
                    this._h2(t[mo]);
                    break;
                case Iq[ov]:
                    this._ht(t[mo])
            }
        },
        _ka: function () {
            this[wT] = {}, this._ha(), this[Da]()
        },
        _mqg: null,
        _jx: function (t) {
            var i = this[YT](t);
            i && (this._md.add(i), this[Rw] && (this[wT][t.id] = t), this[Dw]())
        },
        _h2: function (t) {
            if (Array[Er](t)) {
                for (var i, n = [], e = 0, s = t[qh]; s > e; e++)i = t[e].id, n.push(i), delete this[wT][i];
                t = n
            } else t = t.id, delete this._mqg[t], t = [t];
            t[Kf](function (t) {
                this._hb(t)
            }, this), this[Dw]()
        },
        _ht: function () {
            this._ka()
        },
        _6q: function (t) {
            return this[Rw] ? void (t[Ho] instanceof wY && !this[wT][t[Ho].id] && (t.oldValue && (this._3r(t.oldValue), t[Ll].__6c = !0), t[_c] && (this._3r(t[_c]), t[_c][BT] = !0), this._5m(t.source))) : !1
        },
        _2z: function (t) {
            return this[Rw] ? void (t.source instanceof wY && !this[wT][t[Ho].id] && this._5m(t.source)) : !1
        },
        _2x: function (t) {
            if (t[UT]) {
                var i = t[MT](!0);
                if (!i) return t[UT] = !1, void t.validateEdgeBundle();
                i._fj(this._k0), i[WT](function (t) {
                    t[XT]()
                })
            }
        },
        _$w: function () {
            var t, i = (this._k0, this._k0.graphModel), n = this._md, e = [], s = 1;
            if (i.forEachByDepthFirst(function (i) {
                    return i instanceof EY ? (this._2x(i), void e[Kh](i)) : (t = this[YT](i), void (t && (n.add(t), i.__kk = s++)))
                }, this), n[qh]) for (var h = n._is, s = h.length - 1; s >= 0; s--)t = h[s], this._3x(t, t.$data);
            for (var r, s = 0, a = e[qh]; a > s; s++)if (r = e[s], t = this[YT](r)) {
                this._3x(t, r), n.add(t);
                var o = r[Mu], f = r.toAgent, u = o.__kk || 0;
                o != f && (u = Math.max(u, f[VT] || 0)), r[VT] = u
            }
            if (e.length && n._is[ZT](function (t, i) {
                    return t[Df][VT] - i.$data.__kk
                }), this._$g) {
                var c = i[F_];
                for (var _ in this._$g) if (c.containsById(_)) {
                    var t = n[Hd](_);
                    t && (t.selected = !0)
                }
                this._$g = null
            }
            this._68()
        },
        _mqd: function (t) {
            if (t) return this._$w();
            var i = this[oT];
            this[oT] = !1;
            for (var n in this._mqg) {
                var e = this[wT][n];
                e instanceof wY ? this._5m(e) : this._5n(e)
            }
            this[wT] = {};
            for (var s, h, r = this._md._is, a = [],
                     o = r[qh] - 1; o >= 0; o--)s = r[o], h = s.$data, h instanceof EY ? (this._2x(h), a.push(s)) : this._3x(s, h) && !i && (i = !0);
            if (a.length) for (var o = 0, f = a[qh]; f > o; o++)s = a[o], this._3x(s, s[Df]) && !i && (i = !0);
            i && this._68()
        },
        _3x: function (t, i) {
            if (i instanceof EY) return i[KT] && (i.__48 = !1, t._48()), this[fT](t);
            if (i.__6c && i._hu() && (t._60(), i[BT] = !1), this._muk(t)) {
                var n = this._4j(i);
                return n && (n[BT] = !0), i[JT]() && i[Du](function (t) {
                    t[KT] = !0
                }, this), !0
            }
        },
        _2s: function (t, i) {
            var n = t[Mu], e = t.toAgent, s = i[QT](n.id);
            if (n == e) return s;
            var h = i[QT](e.id);
            return Math.max(s, h)
        },
        _39: function (t, i) {
            var n = this.graphModel._g8(t);
            return n ? i.getIndexById(n.id) : 0
        },
        _5m: function (t) {
            var i = this._md, n = i[Hd](t.id);
            if (!n) throw new Error(tM + t[jo] + iM);
            var s = this._39(t, i), h = [n];
            t.hasChildren() && e(t, function (t) {
                t instanceof wY && (n = i.getById(t.id), n && h[Kh](n))
            }, this), this._4h(i, s, h)
        },
        _5n: function (t) {
            var i = this._md[Hd](t.id);
            if (i) {
                var n = this._2s(t, this._md);
                this._md.setIndexBefore(i, n)
            }
        },
        _4h: function (t, i, n) {
            function e(t) {
                s.add(t)
            }

            var s = new iq;
            l(n, function (n) {
                i = t.setIndexAfter(n, i), n.$data[Du](e)
            }, this), 0 != s[qh] && s[Kf](this._5n, this)
        },
        _8p: function (t) {
            return t[MT](!0)
        },
        _4j: function (t) {
            var i = we(t);
            return i && i[qT] ? i : null
        },
        _6p: null,
        _6o: null,
        _3y: function (t, i) {
            return i || t != this._6p ? (this._6p = t, this._6o && (this._6o._hs(), delete this._6o), t == bz[gT] ? void (this._6o = new rh(this, this[eT])) : t == bz[vT] ? void (this._6o = new hh(this, this._mqb)) : void 0) : !1
        },
        _33: function (t, i) {
            this[PT] = {value: t, old: i}
        },
        _6n: function (t, i) {
            this[RT] = {value: t, old: i}
        },
        _3h: function (t, i) {
            this[DT] = {value: t, old: i}
        },
        _6m: function () {
            this._6j()
        }
    });
    Object[Br](_Y[tr], {
        _viewportBounds: {
            get: function () {
                return this[nM]
            }
        }, _scale: {
            get: function () {
                return this[rf]
            }, set: function (t) {
                this._gy(t)
            }
        }, _tx: {
            get: function () {
                return this.tx
            }
        }, _ty: {
            get: function () {
                return this.ty
            }
        }, graphModel: {
            get: function () {
                return this._k0[eM]
            }
        }
    });
    var dY = fY, lY = {};
    lY[ZE] = function () {
        return [1, 0, 0, 1, 0, 0]
    }, lY[sM] = function (t, i) {
        var n = i[0], e = i[1], s = i[2], h = i[3], r = i[4], a = i[5], o = n * h - e * s;
        return o ? (o = 1 / o, t[0] = h * o, t[1] = -e * o, t[2] = -s * o, t[3] = n * o, t[4] = (s * a - h * r) * o, t[5] = (e * r - n * a) * o, t) : null
    }, lY[Px] = function (t, i, n) {
        var e = i[0], s = i[1], h = i[2], r = i[3], a = i[4], o = i[5], f = n[0], u = n[1], c = n[2], _ = n[3],
            d = n[4], l = n[5];
        return t[0] = e * f + h * u, t[1] = s * f + r * u, t[2] = e * c + h * _, t[3] = s * c + r * _, t[4] = e * d + h * l + a, t[5] = s * d + r * l + o, t
    }, lY.mul = lY[Px], lY[Mo] = function (t, i, n) {
        var e = i[0], s = i[1], h = i[2], r = i[3], a = i[4], o = i[5], f = Math.sin(n), u = Math.cos(n);
        return t[0] = e * u + h * f, t[1] = s * u + r * f, t[2] = e * -f + h * u, t[3] = s * -f + r * u, t[4] = a, t[5] = o, t
    }, lY[rf] = function (t, i, n) {
        var e = i[0], s = i[1], h = i[2], r = i[3], a = i[4], o = i[5], f = n[0], u = n[1];
        return t[0] = e * f, t[1] = s * f, t[2] = h * u, t[3] = r * u, t[4] = a, t[5] = o, t
    }, lY[Qa] = function (t, i, n) {
        var e = i[0], s = i[1], h = i[2], r = i[3], a = i[4], o = i[5], f = n[0], u = n[1];
        return t[0] = e, t[1] = s, t[2] = h, t[3] = r, t[4] = e * f + h * u + a, t[5] = s * f + r * u + o, t
    }, lY[d_] = function (t, i) {
        var n = i[0], e = i[1];
        return [n * t[0] + e * t[2] + t[4], n * t[1] + e * t[3] + t[5]]
    }, lY.reverseTransform = function (t, i) {
        return lY[d_](lY.invert([], t), i)
    };
    var vY = Math.PI + Math.PI, bY = N, gY = S({
        equals: function (t) {
            if (!t || !Array.isArray(t)) return !1;
            for (var i = this.m, n = 0; n < i[qh];) {
                if (i[n] != t[n]) return !1;
                ++n
            }
            return !0
        }, constructor: function (t) {
            this.m = t || lY[ZE](), this.im = []
        }, listener: null, _6c: !0, invalidate: function () {
            return this._6c = !0, this._msackM && this[xu](this[hM]) ? !1 : (this.listener && this[Gl]({
                target: this,
                kind: Pw
            }), this[hM] = this.m[Yh](), this)
        }, validate: function () {
            return this._6c = !1, lY[sM](this.im, this.m), this
        }, translate: function (t, i) {
            return bY(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i !== !1 ? (this.m[4] += t[0], this.m[5] += t[1], this[Pw]()) : (lY.translate(this.m, this.m, t), this.invalidate())
        }, translateTo: function (t, i) {
            return bY(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i && (i /= this._go(), lY.scale(this.m, this.m, [i, i])), this.m[4] = t[0], this.m[5] = t[1], this[Pw]()
        }, scale: function (t, i) {
            return mr == typeof t && (t = [t, t]), i ? (lY[Qa](this.m, this.m, i), lY[rf](this.m, this.m, t), lY.translate(this.m, this.m, ce(i))) : lY[rf](this.m, this.m, t), this.invalidate()
        }, rotate: function (t, i) {
            return i ? (lY[Qa](this.m, this.m, i), lY.rotate(this.m, this.m, t), lY[Qa](this.m, this.m, ce(i))) : lY[Mo](this.m, this.m, t), this[Pw]()
        }, transform: function (t) {
            return lY.transform(this.m, t)
        }, reverseTransform: function (t) {
            return lY[d_](this._4x(), t)
        }, toString: function () {
            return tT + this.m[hu](Ar) + Lr
        }, _4x: function () {
            return this._6c && this[qo](), this.im
        }, _ea: function () {
            var t = this.m[0], i = this.m[1], n = this.m[2], e = this.m[3];
            return [Math.sqrt(t * t + n * n), Math.sqrt(i * i + e * e)]
        }, _go: function () {
            var t = this.m[0], i = this.m[2];
            return Math.sqrt(t * t + i * i)
        }, _7x: function () {
            return [this.m[4], this.m[5]]
        }, _muu: function () {
            var t = this.m[0], i = this.m[1], n = this.m[2], e = this.m[3];
            return [_e(Math.atan2(i, e)), _e(Math[qr](-n, t))]
        }, _ef: function () {
            return _e(Math[qr](this.m[1], this.m[3]))
        }
    }), yY = S({
        constructor: function () {
        }, x: 0, y: 0, width: 0, height: 0, rotate: 0, set: function (t, i, n, e, s, h) {
            return this.x = t, this.y = i, this[Pa] = n, this.height = e, this[Mo] = s, this[il] = Math.cos(s), this[zr] = Math.sin(s), this[rf] = h, this[rM] = null, this
        }, _hg: function (t, i) {
            return t -= this.x, i -= this.y, this.rotate ? ve(t, i, this[zr], this._muos) : [t, i]
        }, _7y: function (t) {
            var i = new oq;
            return i.add(this._hg(t.x, t.y)), i.add(this._hg(t.x + t[Pa], t.y)), i.add(this._hg(t.x, t.y + t[Ra])), i.add(this._hg(t.x + t.width, t.y + t[Ra])), i
        }, _f8: function (t, i) {
            if (this[Mo]) {
                var n = ve(t, i, Math.sin(-this.rotate), Math.cos(-this[Mo]));
                t = n[0], i = n[1]
            }
            return [this.x + t, this.y + i]
        }, _5t: function (t, i) {
            var n = this._hg(t, i);
            return t = n[0], i = n[1], t >= 0 && i >= 0 && t <= this[Pa] && i <= this[Ra]
        }, intersects: function (t, i, n, e) {
            if (!this[Mo]) return oq[qc](this.x, this.y, this[Pa], this[Ra], t, i, n, e);
            if (!n || !e) return this._5t(t, i);
            var s = this[dT]();
            if (!s[qc](t, i, n, e)) return !1;
            for (var h = s[vo], r = 0; r < h[qh];) {
                var a = h[r];
                if (oq[bo](t, i, n, e, a[0], a[1])) return !0;
                r++
            }
            var o = [[t, i], [t + n, i], [t, i + e], [t + n, i + e]];
            for (r = 0; r < o.length;) {
                var a = o[r];
                if (this._5t(a[0], a[1])) return !0;
                r++
            }
            return le(h, o)
        }, getGlobalBounds: function () {
            return this[rM] || (this[rM] = this._6l(0, 0, this[Pa], this.height)), this[rM]
        }, _6l: function (t, i, n, e) {
            if (!this[Mo]) return new oq(this.x + t, this.y + i, n, e);
            var s = [], h = new oq, r = this._f8(t, i);
            return s[Kh](r), h.add(r[0], r[1]), r = this._f8(t + n, i), s[Kh](r), h.add(r[0], r[1]), r = this._f8(t, i + e), s[Kh](r), h.add(r[0], r[1]), r = this._f8(t + n, i + e), s.push(r), h.add(r[0], r[1]), h[vo] = s, h
        }, _4s: function (t, i, n, e, s) {
            var h;
            if (this[Mo]) {
                var r = this._f8(t, i);
                h = (new yY).set(r[0], r[1], n, e, this[Mo], this[rf])
            } else h = (new yY).set(this.x + t, this.y + i, n, e, 0, this[rf]);
            return h[aM] = [Math.round(s * t), Math[go](s * i), Math.round(s * n), Math.round(s * e)], h
        }, _3z: function (t, i, n, e) {
            if (!this[Mo]) {
                var s = oq[al](this.x, this.y, this[Pa], this[Ra], t, i, n, e);
                return s && s.offset(-this.x, -this.y), s
            }
            var h = this._hg(t, i);
            return t = h[0], i = h[1], oq[al](0, 0, this[Pa], this[Ra], h[0], h[1], n, e)
        }, equals: function (t) {
            return this.x == t.x && this.y == t.y && this.width == t[Pa] && this[Ra] == t.height && this.rotate == t.rotate
        }, toString: function () {
            return this.x + Ar + this.y + Ar + this[Pa] + Ar + this.height + Ar + this.rotate
        }, toJSON: function () {
            return {x: this.x, y: this.y, width: this[Pa], height: this[Ra], rotate: this.rotate, scale: this.scale}
        }
    }), mY = {setStyle: bi, setStyles: li, addRule: gi, pre: Nq}, xY = function (t, i, n, e) {
        this[Ho] = t, this.kind = i, this[Ll] = e, this[_c] = n, this.propertyType = bz[gc]
    };
    E(xY, xq);
    var pY = function (t) {
        this.id = ++BG, this._d2 = {}, this._iw = {}, t && (this.$name = t)
    };
    pY[tr] = {
        _iw: null, getStyle: function (t) {
            return this._iw[t]
        }, setStyle: function (t, i) {
            var n = this._iw[t];
            return n === i || n && i && n[xu] && n[xu](i) ? !1 : this._ms4(t, i, new xY(this, t, i, n), this._iw)
        }, putStyles: function (t, i) {
            for (var n in t) {
                var e = t[n];
                i ? this._iw[n] = e : this[yc](n, e)
            }
        }, _$t: !0, invalidateVisibility: function (t) {
            this._$t = !0, t || (this instanceof wY && this[JT]() && this.forEachEdge(function (t) {
                t._$t = !0
            }), this._hu() && this[Gh]() && this[Bu](function (t) {
                t[CT]()
            }))
        }, onParentChanged: function () {
            this[CT]()
        }, _hu: function () {
            return !this._42 && this instanceof kY
        }, invalidate: function () {
            this.onEvent(new mq(this, oM, Pw))
        }, _muy: null, addUI: function (t, i) {
            if (this[fM] || (this._muy = new iq), t.id || (t.id = ++BG), this[fM][Fd](t.id)) return !1;
            var n = {id: t.id, ui: t, bindingProperties: i};
            this[fM].add(n);
            var e = new mq(this, oM, Jl, n);
            return this[or](e)
        }, removeUI: function (t) {
            if (!this[fM]) return !1;
            var i = this._muy[Hd](t.id);
            return i ? (this._muy[Vh](i), void this[or](new mq(this, oM, Vh, i))) : !1
        }, toString: function () {
            return this[uM] || this.id
        }, type: cM, _42: !1, _hf: !0
    }, E(pY, Aq), A(pY[tr], [GT, jo, Uw, _M]), K(pY[tr], {
        enableSubNetwork: {
            get: function () {
                return this._42
            }, set: function (t) {
                if (this._42 != t) {
                    var i = this._42;
                    this._42 = t, this instanceof wY && this._15(), this[or](new xq(this, a_, t, i))
                }
            }
        }, bindingUIs: {
            get: function () {
                return this[fM]
            }
        }, styles: {
            get: function () {
                return this._iw
            }, set: function (t) {
                if (this._iw != t) {
                    for (var i in this._iw) i in t || (t[i] = n);
                    this[dM](t), this._iw = t
                }
            }
        }
    });
    var EY = function (t, i, n) {
        this.id = ++BG, this._d2 = {}, this._iw = {}, n && (this.$name = n), this[Nu] = t, this.$to = i, this[lM]()
    };
    EY[tr] = {
        $uiClass: ds, _jk: null, _hx: null, _jm: null, _hy: null, _ev: !1, type: vM, otherNode: function (t) {
            return t == this[ku] ? this.to : t == this.to ? this.from : void 0
        }, connect: function () {
            if (this._ev) return !1;
            if (!this[Nu] || !this.$to) return !1;
            if (this._ev = !0, this[Nu] == this.$to) return void this[Nu]._i3(this);
            Ce(this.$to, this), Ie(this[Nu], this), ge(this.$from, this, this.$to);
            var t = this[Mu], i = this[wu];
            if (t != i) {
                var n;
                this[Nu]._dp && (me(t, this, i), n = !0), this.$to._dp && (pe(i, this, t), n = !0), n && ge(t, this, i)
            }
        }, disconnect: function () {
            if (!this._ev) return !1;
            if (this._ev = !1, this[Nu] == this.$to) return void this[Nu]._d7(this);
            Ae(this.$from, this), Le(this.$to, this), ye(this[Nu], this, this.$to);
            var t = this.fromAgent, i = this[wu];
            if (t != i) {
                var n;
                this[Nu]._dp && (xe(t, this, i), n = !0), this.$to._dp && (Ee(i, this, t), n = !0), n && ye(t, this, i)
            }
        }, isConnected: function () {
            return this._ev
        }, isInvalid: function () {
            return !this.$from || !this.$to
        }, isLooped: function () {
            return this[Nu] == this.$to
        }, getEdgeBundle: function (t) {
            return t ? this._2u() : this[bd]() ? this[Nu]._44 : this[Nu][MT](this.$to)
        }, hasEdgeBundle: function () {
            var t = this.getEdgeBundle(!0);
            return t && t[bM][qh] > 1
        }, _2u: function () {
            var t = this[Mu], i = this.toAgent;
            return t == i ? this.$from._dp || this.$to._dp ? null : this.$from._44 : this[Mu][MT](this[wu])
        }, _9l: null, hasPathSegments: function () {
            return this._9l && !this._9l[Nf]()
        }, isBundleEnabled: function () {
            return this.bundleEnabled && !this.hasPathSegments()
        }, firePathChange: function (t) {
            this[or](new xq(this, gM, t))
        }, addPathSegment: function (t, i, n) {
            var e = new Kz(i || Uz, t);
            this._9l || (this._9l = new iq), this._9l.add(e, n), this[yM](e)
        }, addPathSegement: function () {
            return vz.log('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'), this[mM][nr](this, arguments)
        }, removePathSegmentByIndex: function (t) {
            if (!this._9l) return !1;
            var i = this._9l.getByIndex(t);
            i && (this._9l[Vh](i), this.firePathChange(i))
        }, removePathSegment: function (t) {
            return this._9l ? (this._9l.remove(t), void this[yM](t)) : !1
        }, movePathSegment: function (t, i, n) {
            if (!this._9l) return !1;
            if (t = t || 0, i = i || 0, vz[lx](n)) {
                var e = this._9l.getByIndex(n);
                return e ? (e[Og](t, i), void this.firePathChange()) : !1
            }
            l(function (n) {
                n.move(t, i)
            }), this.firePathChange()
        }, move: function (t, i) {
            return this._9l ? (this._9l[Kf](function (n) {
                n[Og](t, i)
            }, this), void this[yM]()) : !1
        }, validateEdgeBundle: function () {
        }
    }, E(EY, pY), K(EY.prototype, {
        pathSegments: {
            get: function () {
                return this._9l
            }, set: function (t) {
                vz[Er](t) && (t = new iq(t)), this._9l = t, this[yM]()
            }
        }, from: {
            get: function () {
                return this[Nu]
            }, set: function (t) {
                if (this.$from != t) {
                    var i = new xq(this, ku, t, this.$from);
                    this[ar](i) !== !1 && (this.disconnect(), this.$from = t, this[lM](), this[or](i))
                }
            }
        }, to: {
            get: function () {
                return this.$to
            }, set: function (t) {
                if (this.$to != t) {
                    var i = new xq(this, xM, t, this.$to);
                    this[ar](i) !== !1 && (this[mv](), this.$to = t, this[lM](), this[or](i))
                }
            }
        }, fromAgent: {
            get: function () {
                return this[Nu] ? this[Nu]._dp || this.$from : null
            }
        }, toAgent: {
            get: function () {
                return this.$to ? this.$to._dp || this.$to : null
            }
        }
    }), A(EY[tr], [Jc, {name: pM, value: !0}, i_]);
    var wY = function (t, i, n) {
        2 == arguments[qh] && N(t) && (n = i, i = t, t = null), this.id = ++BG, this._d2 = {}, this._iw = {}, t && (this[uM] = t), this[fc] = EM, this.$anchorPosition = uq[yl], this[wM] = {
            x: i || 0,
            y: n || 0
        }, this._linkedNodes = {}
    };
    wY[tr] = {
        $uiClass: ls, _dp: null, forEachEdge: function (t, i, n) {
            return !n && this._k3 && this._k3.forEach(t, i) === !1 ? !1 : Re(this, t, i)
        }, forEachOutEdge: function (t, i) {
            return De(this, t, i)
        }, forEachInEdge: function (t, i) {
            return Ne(this, t, i)
        }, getEdges: function () {
            var t = [];
            return this[Du](function (i) {
                t[Kh](i)
            }), t
        }, _i1: null, _gb: null, _j2: null, _i2: null, _mqv: 0, _97: 0, hasInEdge: function () {
            return null != this._i1
        }, hasOutEdge: function () {
            return null != this._gb
        }, hasEdge: function () {
            return null != this._i1 || null != this._gb || this[TM]()
        }, linkedWith: function (t) {
            return t.from == this || t.to == this || t[Mu] == this || t.toAgent == this
        }, hasEdgeWith: function (t) {
            var i = this.getEdgeBundle(t);
            return i && i[bM].length > 0
        }, _k3: null, _44: null, hasLoops: function () {
            return this._k3 && this._k3.length > 0
        }, _i3: function (t) {
            return this._k3 || (this._k3 = new iq, this._44 = new YU(this, this, this._k3)), this._44._i9(t)
        }, _d7: function (t) {
            return this._44 ? this._44._dg(t) : void 0
        }, getEdgeBundle: function (t) {
            return t == this ? this._44 : this[Tu][t.id] || t[Tu][this.id]
        }, _74: function () {
            return this._95 && this._95[qh]
        }, _5d: function () {
            return this._8j && this._8j[qh]
        }, _96: function () {
            return this._74() || this._5d()
        }, _8j: null, _95: null, _d5: function () {
            var t = this._dp, i = be(this);
            if (t != i) {
                var n = Pe(this);
                this._91(i), n[Kf](function (t) {
                    var i = t[Mu], n = t[wu], t = t[gd], e = t[Nu]._dp, s = t.$to._dp;
                    i != n && (i && xe(i, t, n || t.$to), n && Ee(n, t, i || t.$from)), e != s && (e && me(e, t, s || t.$to), s && pe(s, t, e || t.$from), ge(e || t[Nu], t, s || t.$to))
                }, this)
            }
        }, onParentChanged: function () {
            this[CT](), this._d5()
        }, _8c: null, _15: function () {
            var t;
            if (this._42 ? t = null : (t = this._dp, t || this._g5 !== !1 || (t = this)), this._8c == t) return !1;
            if (this._8c = t, this._fe && this._fe._is[qh]) for (var i, n = this._fe._is, e = 0,
                                                                     s = n[qh]; s > e; e++)i = n[e], i instanceof wY && i._91(t)
        }, setLocation: function (t, i) {
            if (this[wM] && this[wM].x == t && this.$location.y == i) return !1;
            var n;
            n = this.$location ? {x: this.$location.x, y: this[wM].y} : this[wM];
            var e = new xq(this, MM, n, {x: t, y: i});
            return this[ar](e) === !1 ? !1 : (this[wM] ? (this[wM].x = t, this.$location.y = i) : this[wM] = new sq(t, i), this[or](e), !0)
        }, _do: null, addFollower: function (t) {
            return null == t ? !1 : t[kM] = this
        }, removeFollower: function (t) {
            return this._do && this._do.contains(t) ? t.host = null : !1
        }, hasFollowers: function () {
            return this._do && !this._do[Nf]()
        }, toFollowers: function () {
            return this[OM]() ? this._do.toDatas() : null
        }, clearFollowers: function () {
            this[OM]() && (this.toFollowers(), l(this[SM](), function (t) {
                t[kM] = null
            }))
        }, getFollowerIndex: function (t) {
            return this._do && this._do.contains(t) ? this._do[Jh](t) : -1
        }, setFollowerIndex: function (t, i) {
            return this._do && this._do.contains(t) ? void this._do[Lu](t, i) : -1
        }, getFollowerCount: function () {
            return this._do ? this._do.length : 0
        }, _93: function () {
            return this._do ? this._do : (this._do = new iq, this._do)
        }, isFollow: function (t) {
            if (!t || !this._host) return !1;
            for (var i = this[IM]; i;) {
                if (i == t) return !0;
                i = i[IM]
            }
            return !1
        }, _91: function (t) {
            return t == this._dp ? !1 : (this._dp = t, this[CT](), void this._15())
        }, type: AM
    }, E(wY, pY), K(wY[tr], {
        loops: {
            get: function () {
                return this._k3
            }
        }, edgeCount: {
            get: function () {
                return this._mqv + this._97
            }
        }, agentNode: {
            get: function () {
                return this._dp || this
            }
        }, host: {
            set: function (t) {
                if (this == t || t == this[IM]) return !1;
                var i = new xq(this, kM, this[IM], t);
                if (!1 === this[ar](i)) return !1;
                var n = null, e = null, s = this[IM];
                if (null != t && (n = new xq(t, CM, null, this), !1 === t[ar](n))) return !1;
                if (null != s && (e = new xq(s, LM, null, this), !1 === s.beforeEvent(e))) return !1;
                if (this[IM] = t, null != t) {
                    var h = t._93();
                    h.add(this)
                }
                if (null != s) {
                    var h = s._93();
                    h[Vh](this)
                }
                return this[or](i), null != t && t[or](n), null != s && s.onEvent(e), !0
            }, get: function () {
                return this[IM]
            }
        }
    }), A(wY.prototype, [MM, Nw, zm, Mo, PM]), K(wY[tr], {
        x: {
            get: function () {
                return this[MM].x
            }, set: function (t) {
                t != this[MM].x && (this.location = new sq(t, this.location.y))
            }
        }, y: {
            get: function () {
                return this[MM].y
            }, set: function (t) {
                t != this[MM].y && (this[MM] = new sq(this[MM].x, t))
            }
        }
    });
    var TY = function (t, i) {
        t instanceof Qz && (i = t, t = n), w(this, TY, [t]), this.path = i || new Qz, this[PM] = null, this.uiClass = ah, tq[RM] || (tq[RM] = {}, tq[RM][IY[DM]] = !1), this[dM](tq[RM])
    };
    TY[tr] = {
        $uiClass: ah, type: NM, moveTo: function (t, i) {
            this.path[Gu](t, i), this[yM]()
        }, lineTo: function (t, i) {
            this[BM][$u](t, i), this[yM]()
        }, quadTo: function (t, i, n, e) {
            this[BM][ju](t, i, n, e), this[yM]()
        }, curveTo: function (t, i, n, e, s, h) {
            this[BM][qu](t, i, n, e, s, h), this.firePathChange()
        }, arcTo: function (t, i, n, e, s) {
            this.path.arcTo(t, i, n, e, s), this[yM]()
        }, closePath: function () {
            this[BM].closePath(), this[yM]()
        }, clear: function () {
            this[BM][Da](), this[yM]()
        }, removePathSegmentByIndex: function (t) {
            this.path[jM](t) !== !1 && this[yM]()
        }, firePathChange: function () {
            this[BM]._6c = !0, this[or](new xq(this, gM))
        }
    }, E(TY, wY), K(TY.prototype, {
        path: {
            get: function () {
                return this[zm]
            }, set: function (t) {
                this.image = t
            }
        }, pathSegments: {
            get: function () {
                return this.path[$M]
            }, set: function (t) {
                this.path[$M] = t || [], this[yM]()
            }
        }, length: {
            get: function () {
                return this[BM][qh]
            }
        }
    }), vz[FM] = TY;
    var MY = {
        _j6: {}, register: function (t, i) {
            MY._j6[t] = i
        }, getShape: function (t, i, e, s, h, r) {
            s === n && (s = i, h = e, i = 0, e = 0), s || (s = 50), h || (h = 50);
            var a = MY._j6[t];
            return a ? a[GM] instanceof Function ? a[GM](i, e, s, h, r) : a : void 0
        }, getRect: function (t, i, n, e, s, h, r) {
            return t instanceof Object && Pa in t && (i = t.y, n = t[Pa], e = t[Ra], s = t.rx, h = t.ry, r = t[BM], t = t.x), Be(r || new Qz, t, i, n, e, s, h)
        }, getAllShapes: function (t, i, n, e, s) {
            var h = {};
            for (var r in MY._j6) {
                var a = MY[Hc](r, t, i, n, e, s);
                a && (h[r] = a)
            }
            return h
        }, createRegularShape: function (t, i, n, e, s) {
            return He(t, i, n, e, s)
        }
    };
    es(), ss[tr] = {type: qM}, E(ss, TY), vz.Bus = ss, hs.prototype = {
        _g8: function (t) {
            var i, n = t._j9;
            i = n ? n._fe : this[gv];
            var e = i.indexOf(t);
            if (0 > e) throw new Error(wv + t + "' not exist in the box");
            for (; e >= 0;) {
                if (0 == e) return n instanceof wY ? n : null;
                e -= 1;
                var h = i[$d](e);
                if (h = s(h)) return h
            }
            return null
        }, forEachNode: function (t, i) {
            this[Kf](function (n) {
                return n instanceof wY && t[Hh](i, n) === !1 ? !1 : void 0
            })
        }, _3t: null
    }, E(hs, Lq), K(hs[tr], {
        propertyChangeDispatcher: {
            get: function () {
                return this._$r
            }
        }, currentSubNetwork: {
            get: function () {
                return this._3t
            }, set: function (t) {
                if (t && !t.enableSubNetwork && (t = null), this._3t != t) {
                    var i = this._3t;
                    this._3t = t, this._$r.onEvent(new xq(this, zM, t, i))
                }
            }
        }
    }), tq.GROUP_TYPE = bz[HM], tq[YM] = 5, tq.GROUP_EXPANDED = !0, tq.GROUP_MIN_SIZE = {width: 60, height: 60};
    var kY = function (t, i, e) {
        w(this, kY, arguments), (i === n || e === n) && (this.$location[UM] = !0), this[WM] = tq[XM], this[gf] = tq.GROUP_PADDING, this[fc] = nH.group, this.$minSize = tq.GROUP_MIN_SIZE, this[qT] = tq[VM]
    };
    kY.prototype = {
        type: ZM, $uiClass: nh, _9a: function () {
            return !this._g5 && !this._dp
        }, forEachOutEdge: function (t, i, n) {
            return De(this, t, i) === !1 ? !1 : !n && this._9a() && this._8j ? this._8j[Kf](t, i) : void 0
        }, forEachInEdge: function (t, i, n) {
            return Ne(this, t, i) === !1 ? !1 : !n && this._9a() && this._95 ? this._95[Kf](t, i) : void 0
        }, forEachEdge: function (t, i, n) {
            return T(this, kY, Du, arguments) === !1 ? !1 : n || n || !this._9a() ? void 0 : this._95 && this._95.forEach(t, i) === !1 ? !1 : this._8j ? this._8j[Kf](t, i) : void 0
        }, hasInEdge: function (t) {
            return t ? null != this._i1 : null != this._i1 || this._74()
        }, hasOutEdge: function (t) {
            return t ? null != this._gb : null != this._gb || this._5d()
        }, hasEdge: function (t) {
            return t ? null != this._i1 || null != this._gb : null != this._i1 || null != this._gb || this._96()
        }
    }, E(kY, wY), K(kY.prototype, {
        expanded: {
            get: function () {
                return this._g5
            }, set: function (t) {
                if (this._g5 != t) {
                    var i = new xq(this, qT, t, this._g5);
                    this[ar](i) !== !1 && (this._g5 = t, this._15(), this.onEvent(i), this._dp || rs[Hh](this))
                }
            }
        }
    }), A(kY[tr], [KM, JM, Fo, QM]), vz[tk] = kY, as[tr][To] = ik, E(as, wY), vz[nk] = as;
    var OY = function (t) {
        this._iv = new oq, this._8d = new oq, this._ft = new oq, this.id = ++BG, t && (this[mo] = t)
    };
    OY[tr] = {
        invalidate: function () {
            this.invalidateData()
        },
        _1p: !0,
        _iv: null,
        _8d: null,
        _ft: null,
        _mqo: !1,
        _j8: 1,
        _j5: 1,
        _hf: !0,
        _7z: 0,
        _67: 0,
        _j9: null,
        _mqe: null,
        borderColor: ek,
        borderLineDash: null,
        borderLineDashOffset: null,
        syncSelection: !0,
        syncSelectionStyles: !0,
        _1b: function () {
            this.$anchorPoint = fi(this[PM], this._7z, this._67)
        },
        setMeasuredBounds: function (t, i, n, e) {
            return t instanceof Object && (n = t.x, e = t.y, i = t[Ra], t = t[Pa]), this._iv[Pa] == t && this._iv[Ra] == i && this._iv.x == n && this._iv.y == e ? !1 : void this._iv.set(n || 0, e || 0, t || 0, i || 0)
        },
        initialize: function () {
        },
        measure: function () {
        },
        draw: function () {
        },
        _7v: function (t, i, n) {
            n[sk] == bz[tm] ? (t[L_] = n[gx], t[Dm] = n[yx] * i, t.shadowOffsetX = (n.selectionShadowOffsetX || 0) * i, t[Bm] = (n[xx] || 0) * i) : this._22(t, i, n)
        },
        _22: function (t, i, n) {
            var e = n[Ex] || 0;
            n[hk] && (t[Om] = n[hk], t[rk](this._8d.x - e / 2, this._8d.y - e / 2, this._8d[Pa] + e, this._8d[Ra] + e)), t[A_] = n.selectionColor, t.lineWidth = e, t[ak](this._8d.x - e / 2, this._8d.y - e / 2, this._8d[Pa] + e, this._8d.height + e)
        },
        _ja: function (t, i, n, e) {
            if (!this._hf) return !1;
            if (this.syncSelection || (n = this[$T]), (n && !this[ok] || !e) && (e = this), t[Ja](), 1 != this[fk] && (t[Pp] = this.$alpha), t[Qa](this.$x, this.$y), this[cf] && this[_f] && t[Mo](this[_f]), (this[uk] || this.offsetY) && t.translate(this[uk], this[ck]), this[ff] && t[Mo](this[ff]), this.$layoutByAnchorPoint && this[of] && t[Qa](-this[of].x, -this[of].y), this[L_] && (t.shadowColor = this[L_], t[Dm] = this[Dm] * i, t[Nm] = this[Nm] * i, t.shadowOffsetY = this[Bm] * i), n && e[sk] == bz[_k] && (this._22(t, i, e), n = !1), this._$v() && this[Mf] && !this[Mf][dk]) {
                this[Mf][qo]();
                var s = {
                    lineWidth: this[yf],
                    strokeStyle: this[lk],
                    lineDash: this[vk],
                    lineDashOffset: this[bk],
                    fillColor: this[gk],
                    fillGradient: this[wf],
                    lineCap: Wy,
                    lineJoin: go
                };
                this._laShape.draw(t, i, s, n, e), n = !1, t[L_] = Fx
            }
            t[Ix](), this[Po](t, i, n, e), t[ro]()
        },
        invalidateData: function () {
            this[yk] = !0, this[lf] = !0, this._1p = !0
        },
        invalidateSize: function () {
            this.$invalidateSize = !0, this._1p = !0
        },
        invalidateRender: function () {
            this._1p = !0
        },
        _57: function () {
        },
        _$v: function () {
            return this[gk] || this[mk] || this[yf]
        },
        _4a: function () {
            return this[gk] || this.$backgroundGradient
        },
        doValidate: function () {
            return this[yk] && (this.$invalidateData = !1, this[xk]() !== !1 && (this.$invalidateSize = !0)), this[lf] && this[pk] && this[pk](), qn.call(this) ? (this[jf] = !0, this[Ek] && this[Ek](), !0) : this[wk] ? (this[jf] = !0, this[wk] = !1, !0) : void 0
        },
        validate: function () {
            var t = this._hf;
            return this.$invalidateVisibility && (this.$invalidateVisibility = !1, this._hf = this[Tk], !this._hf || (this[Df] || this.$showEmpty) && this._57() !== !1 || (this._hf = !1)), this._hf ? (this._1p = !1, this._mqo || (this[Mk](), this[Rw] = !0), this.doValidate()) : t != this._hf
        },
        _hg: function (t, i) {
            return t -= this.$x, i -= this.$y, Gn[Hh](this, {x: t, y: i})
        },
        hitTest: function (t, i, n, e) {
            if (t -= this.$x, i -= this.$y, !this._ft.intersectsPoint(t, i, n)) return !1;
            var s = Gn[Hh](this, {x: t, y: i});
            return t = s.x, i = s.y, !e && this._$v() && this[Mf] && this[Mf][s_](t, i, n, !1, this.$border, this.$backgroundColor || this.$backgroundGradient) ? !0 : this[kk](t, i, n)
        },
        doHitTest: function (t, i, n) {
            return this._iv.intersectsPoint(t, i, n)
        },
        hitTestByBounds: function (t, i, n, e) {
            var s = this._hg(t, i);
            return !e && this._$v() && this[Mf] && this[Mf][s_](t, i, n, !1, this[yf], this[gk] || this.$backgroundGradient) ? !0 : this._iv[bo](s.x, s.y, n)
        },
        onDataChanged: function () {
            this[yk] = !0, this._1p = !0, this[Ok] = !0
        },
        getBounds: function () {
            var t = this._ft[Zh]();
            return t[fm](this.x, this.y), this[Eu] && (this.parent[Mo] && Si(t, this.parent.rotate, t), t[fm](this[Eu].x || 0, this[Eu].y || 0)), t
        },
        destroy: function () {
            this._hsed = !0
        },
        _dw: !1
    }, K(OY[tr], {
        originalBounds: {
            get: function () {
                return this._iv
            }
        }, data: {
            get: function () {
                return this[Df]
            }, set: function (t) {
                if (this[Df] != t) {
                    var i = this[Df];
                    this.$data = t, this[Sk](t, i)
                }
            }
        }, parent: {
            get: function () {
                return this._j9
            }
        }, showOnTop: {
            get: function () {
                return this._dw
            }, set: function (t) {
                t != this._dw && (this._dw = t, this._1p = !0, this._j9 && this._j9[Ik] && this._j9[Ik](this))
            }
        }
    }), fs(OY[tr], {
        visible: {value: !0, validateFlags: [Ak, Ck]},
        showEmpty: {validateFlags: [Ak]},
        anchorPosition: {value: uq[yl], validateFlags: [Lk, Ck]},
        position: {value: uq.CENTER_MIDDLE, validateFlags: [Ck]},
        offsetX: {value: 0, validateFlags: [Ck]},
        offsetY: {value: 0, validateFlags: [Ck]},
        layoutByAnchorPoint: {value: !0, validateFlags: [$g, Lk, Ck]},
        padding: {value: 0, validateFlags: [$g]},
        border: {value: 0, validateFlags: [$g]},
        borderRadius: {value: tq[sm]},
        showPointer: {value: !1, validateFlags: [$g]},
        pointerX: {value: 0, validateFlags: [$g]},
        pointerY: {value: 0, validateFlags: [$g]},
        pointerWidth: {value: tq[hm]},
        backgroundColor: {validateFlags: [$g]},
        backgroundGradient: {validateFlags: [$g, Pk]},
        selected: {value: !1, validateFlags: [$g]},
        selectionBorder: {value: tq.SELECTION_BORDER, validateFlags: [$g]},
        selectionShadowBlur: {value: tq[nm], validateFlags: [$g]},
        selectionColor: {value: tq.SELECTION_COLOR, validateFlags: [$g]},
        selectionType: {value: tq[Qy], validateFlags: [$g]},
        selectionShadowOffsetX: {value: 0, validateFlags: [$g]},
        selectionShadowOffsetY: {value: 0, validateFlags: [$g]},
        shadowBlur: {value: 0, validateFlags: [$g]},
        shadowColor: {validateFlags: [$g]},
        shadowOffsetX: {value: 0, validateFlags: [$g]},
        shadowOffsetY: {value: 0, validateFlags: [$g]},
        renderColorBlendMode: {},
        renderColor: {},
        x: {value: 0, validateFlags: [Ck]},
        y: {value: 0, validateFlags: [Ck]},
        rotatable: {value: !0, validateFlags: [Rk, $g]},
        rotate: {value: 0, validateFlags: [Rk, $g]},
        _hostRotate: {validateFlags: [Rk]},
        lineWidth: {value: 0, validateFlags: [Yg]},
        alpha: {value: 1}
    });
    var SY = [bz.PROPERTY_TYPE_ACCESSOR, bz.PROPERTY_TYPE_STYLE, bz[bc]];
    cs[tr] = {
        removeBinding: function (t) {
            for (var i = SY.length; --i >= 0;) {
                var n = SY[i], e = this[n];
                for (var s in e) {
                    var h = e[s];
                    Array[Er](h) ? (v(h, function (i) {
                        return i[dc] == t
                    }, this), h[qh] || delete e[s]) : h.target == t && delete e[s]
                }
            }
        }, _1z: function (t, i, n) {
            if (!n && (n = this[i[Sl] || bz[Dk]], !n)) return !1;
            var e = n[t];
            e ? (Array[Er](e) || (n[t] = e = [e]), e.push(i)) : n[t] = i
        }, _2n: function (t, i, n, e, s, h) {
            t = t || bz[Dk];
            var r = this[t];
            if (!r) return !1;
            var a = {property: i, propertyType: t, bindingProperty: e, target: n, callback: s, invalidateSize: h};
            this._1z(i, a, r)
        }, onBindingPropertyChange: function (t, i, n, e) {
            var s = this[n || bz[Dk]];
            if (!s) return !1;
            var h = s[i];
            return h ? (t._1p = !0, us(t, h, n, e), !0) : !1
        }, initBindingProperties: function (t, i) {
            for (var e = SY[qh]; --e >= 0;) {
                var s = SY[e], h = this[s];
                for (var r in h) {
                    var a = h[r];
                    if (a[Nk]) {
                        var o = a[dc];
                        if (o) {
                            if (!(o instanceof OY || (o = t[o]))) continue
                        } else o = t;
                        var f;
                        f = i === !1 ? t.getProperty(a[lc], s) : s == bz[gc] ? t.graph.getStyle(t.$data, a[lc]) : t.$data[a[lc]], f !== n && (o[a[Nk]] = f)
                    }
                }
            }
        }
    };
    var IY = {};
    IY[em] = Bk, IY[jk] = $k, IY[nm] = "selection.shadow.blur", IY[Fk] = "selection.shadow.offset.x", IY.SELECTION_SHADOW_OFFSET_Y = "selection.shadow.offset.y", IY.SELECTION_TYPE = Gk, IY[qk] = zk, IY[Hk] = "render.color.blend.mode", IY[Yk] = Uk, IY[Wk] = Xk, IY[Vk] = Zk, IY[Kk] = Jk, IY.SHADOW_OFFSET_Y = Qk, IY.SHAPE_STROKE = tO, IY.SHAPE_STROKE_STYLE = iO, IY.SHAPE_LINE_DASH = nO, IY.SHAPE_LINE_DASH_OFFSET = "shape.line.dash.offset", IY.SHAPE_FILL_COLOR = eO, IY[sO] = hO, IY[rO] = aO, IY[oO] = fO, IY.LINE_CAP = uO, IY.LINE_JOIN = cO, IY[_O] = dO, IY.BACKGROUND_COLOR = lO, IY[vO] = bO, IY[gO] = yO, IY[mO] = xO, IY.BORDER_LINE_DASH = pO, IY[EO] = "border.line.dash.offset", IY[sm] = wO, IY[TO] = Fo, IY.IMAGE_BACKGROUND_COLOR = "image.background.color", IY[MO] = "image.background.gradient", IY[kO] = OO, IY[SO] = IY.IMAGE_BORDER_COLOR = IO, IY[AO] = "image.border.line.dash", IY.IMAGE_BORDER_LINE_DASH_OFFSET = "image.border.line.dash.offset", IY.IMAGE_RADIUS = IY[CO] = LO, IY[PO] = RO, IY[DO] = NO, IY[BO] = jO, IY[$O] = FO, IY[GO] = qO, IY[zO] = HO, IY[YO] = UO, IY.LABEL_ANCHOR_POSITION = "label.anchor.position", IY.LABEL_COLOR = WO, IY[XO] = VO, IY.LABEL_FONT_FAMILY = ZO, IY[KO] = JO, IY[QO] = tS, IY[iS] = nS, IY[eS] = sS, IY.LABEL_RADIUS = hS, IY[rS] = aS, IY[oS] = fS, IY[uS] = cS, IY[_S] = dS, IY.LABEL_BORDER = lS, IY.LABEL_BORDER_STYLE = vS, IY[bS] = "label.background.color", IY[gS] = "label.background.gradient", IY[yS] = mS, IY[xS] = pS, IY[ES] = wS, IY[TS] = "label.shadow.offset.x", IY[MS] = "label.shadow.offset.y", IY[kS] = OS, IY.LABEL_ON_TOP = SS, IY[IS] = "group.background.color", IY.GROUP_BACKGROUND_GRADIENT = "group.background.gradient", IY[AS] = CS, IY[LS] = PS, IY[RS] = "group.stroke.line.dash", IY[DS] = "group.stroke.line.dash.offset", IY[NS] = "edge.bundle.label.rotate", IY.EDGE_BUNDLE_LABEL_POSITION = "edge.bundle.label.position", IY[BS] = "edge.bundle.label.anchor.position", IY.EDGE_BUNDLE_LABEL_COLOR = "edge.bundle.label.color", IY[jS] = "edge.bundle.label.font.size", IY.EDGE_BUNDLE_LABEL_FONT_FAMILY = "edge.bundle.label.font.family", IY.EDGE_BUNDLE_LABEL_FONT_STYLE = "edge.bundle.label.font.style", IY[$S] = "edge.bundle.label.padding", IY[FS] = "edge.bundle.label.pointer.width", IY[GS] = "edge.bundle.label.pointer", IY.EDGE_BUNDLE_LABEL_RADIUS = "edge.bundle.label.radius", IY.EDGE_BUNDLE_LABEL_OFFSET_X = "edge.bundle.label.offset.x", IY.EDGE_BUNDLE_LABEL_OFFSET_Y = "edge.bundle.label.offset.y", IY[qS] = "edge.bundle.label.border", IY[zS] = "edge.bundle.label.border.color", IY.EDGE_BUNDLE_LABEL_BACKGROUND_COLOR = "edge.bundle.label.background.color", IY.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT = "edge.bundle.label.background.gradient", IY[HS] = "edge.bundle.label.rotatable", IY.EDGE_WIDTH = YS, IY[US] = WS, IY[XS] = VS, IY[ZS] = KS, IY[JS] = QS, IY.EDGE_LINE_DASH_OFFSET = "edge.line.dash.offset", IY.EDGE_FROM_OFFSET = tI, IY[iI] = nI, IY.EDGE_BUNDLE_GAP = eI, IY[sI] = hI, IY.EDGE_EXTEND = rI, IY[Fc] = aI, IY[Ac] = "edge.split.by.percent", IY.EDGE_SPLIT_PERCENT = oI, IY.EDGE_SPLIT_VALUE = fI, IY[Dc] = uI, IY.EDGE_CORNER_RADIUS = cI, IY.EDGE_FROM_AT_EDGE = _I, IY.EDGE_TO_AT_EDGE = dI, IY[lI] = vI, IY.ARROW_FROM_SIZE = bI, IY[gI] = yI, IY[mI] = xI, IY[pI] = "arrow.from.stroke.style", IY.ARROW_FROM_OUTLINE = EI, IY[wI] = "arrow.from.outline.style", IY.ARROW_FROM_LINE_DASH = TI, IY.ARROW_FROM_LINE_DASH_OFFSET = "arrow.from.line.dash.offset", IY.ARROW_FROM_FILL_COLOR = "arrow.from.fill.color", IY[MI] = "arrow.from.fill.gradient", IY.ARROW_FROM_LINE_CAP = kI, IY[OI] = SI, IY[DM] = II, IY[AI] = CI, IY[LI] = PI, IY[RI] = DI, IY[NI] = "arrow.to.stroke.style", IY.ARROW_TO_OUTLINE = BI, IY[jI] = "arrow.to.outline.style", IY.ARROW_TO_LINE_DASH = $I, IY[FI] = "arrow.to.line.dash.offset", IY.ARROW_TO_FILL_COLOR = GI, IY[qI] = "arrow.to.fill.gradient", IY.ARROW_TO_LINE_CAP = zI, IY[HI] = YI;
    var AY = new cs, CY = bz[Dk], LY = bz[gc], PY = !1;
    AY._2n(LY, IY.SELECTION_TYPE, null, sk), AY._2n(LY, IY[jk], null, Ex), AY._2n(LY, IY.SELECTION_SHADOW_BLUR, null, yx), AY._2n(LY, IY.SELECTION_COLOR, null, gx), AY._2n(LY, IY[Fk], null, "selectionShadowOffsetX"), AY._2n(LY, IY.SELECTION_SHADOW_OFFSET_Y, null, "selectionShadowOffsetY"), AY._2n(CY, jo, fE, mo), AY._2n(LY, IY.LABEL_VISIBLE, fE, nT), AY._2n(LY, IY[zO], fE, Qm), AY._2n(LY, IY.LABEL_ANCHOR_POSITION, fE, PM), AY._2n(LY, IY[UI], fE, WI), AY._2n(LY, IY.LABEL_FONT_SIZE, fE, K_), AY._2n(LY, IY[XI], fE, ry), AY._2n(LY, IY[VI], fE, lk), AY._2n(LY, IY.LABEL_BACKGROUND_COLOR, fE, ZI), AY._2n(LY, IY.LABEL_ON_TOP, fE, KI), PY || (AY._2n(LY, IY[Wk], null, Dm), AY._2n(LY, IY[Vk], null, L_), AY._2n(LY, IY.SHADOW_OFFSET_X, null, Nm), AY._2n(LY, IY[JI], null, Bm), AY._2n(LY, IY[QI], fE, J_), AY._2n(LY, IY.LABEL_FONT_STYLE, fE, Z_), AY._2n(LY, IY[_S], fE, tA), AY._2n(LY, IY[GO], fE, Mo), AY._2n(LY, IY[QO], fE, Fo), AY._2n(LY, IY[iS], fE, iA), AY._2n(LY, IY.LABEL_POINTER, fE, mf), AY._2n(LY, IY[nA], fE, eA), AY._2n(LY, IY[rS], fE, uk), AY._2n(LY, IY[oS], fE, ck), AY._2n(LY, IY[yS], fE, sA), AY._2n(LY, IY[gS], fE, Tf), AY._2n(LY, IY[uS], fE, Nw), AY._2n(LY, IY.LABEL_SHADOW_BLUR, fE, Dm), AY._2n(LY, IY[ES], fE, L_), AY._2n(LY, IY[TS], fE, Nm), AY._2n(LY, IY[MS], fE, Bm), AY._2n(LY, IY[kS], fE, Uw), AY._2n(LY, IY[qk], null, $m), AY._2n(LY, IY[Hk], null, hA), AY._2n(LY, IY[Yk], null, Uk));
    var RY = new cs;
    RY._2n(CY, MM), RY._2n(CY, PM, null, rA), RY._2n(CY, Mo, null, Mo), PY || (RY._2n(LY, IY.BACKGROUND_COLOR, null, ZI), RY._2n(LY, IY[vO], null, Tf), RY._2n(LY, IY.PADDING, null, Fo), RY._2n(LY, IY[gO], null, ry), RY._2n(LY, IY[sm], null, eA), RY._2n(LY, IY[mO], null, lk), RY._2n(LY, IY.BORDER_LINE_DASH, null, vk), RY._2n(LY, IY[EO], null, bk)), RY._2n(CY, zm, zm, mo, aA), RY._2n(CY, Nw, zm, Nw), RY._2n(LY, IY[oA], zm, xo), RY._2n(LY, IY[fA], zm, A_), RY._2n(LY, IY[uA], zm, kx), RY._2n(LY, IY[_O], zm, Rf), PY || (RY._2n(LY, IY.IMAGE_ADJUST, zm, cA), RY._2n(LY, IY[rO], zm, Mx), RY._2n(LY, IY[oO], zm, Tx), RY._2n(LY, IY[sO], zm, Ox), RY._2n(LY, IY[_A], zm, $f), RY._2n(LY, IY[dA], zm, Yf), RY._2n(LY, IY[lA], zm, wx), RY._2n(LY, IY.LINE_JOIN, zm, I_), RY._2n(LY, IY[vA], zm, ZI), RY._2n(LY, IY[MO], zm, Tf), RY._2n(LY, IY[PO], zm, Fo), RY._2n(LY, IY[kO], zm, ry), RY._2n(LY, IY[CO], zm, eA), RY._2n(LY, IY[bA], zm, lk), RY._2n(LY, IY.IMAGE_BORDER_LINE_DASH, zm, vk), RY._2n(LY, IY.IMAGE_BORDER_LINE_DASH_OFFSET, zm, bk), RY._2n(LY, IY[DO], zm, Uw), RY._2n(LY, IY.IMAGE_ALPHA, zm, Uk)), RY._2n(CY, qT, null, null, gA), RY._2n(CY, a_, null, null, gA);
    var DY = new cs;
    DY._2n(CY, JM, null, null, yA), DY._2n(CY, QM, null, null, yA), DY._2n(CY, KM, null, null, yA), DY._2n(CY, Fo, null, null, yA), DY._2n(LY, IY[IS], mA, kx), DY._2n(LY, IY[xA], mA, Ox), DY._2n(LY, IY.GROUP_STROKE, mA, xo), DY._2n(LY, IY[LS], mA, A_), DY._2n(LY, IY[RS], mA, $f), DY._2n(LY, IY[DS], mA, Yf);
    var NY = new cs;
    NY._2n(CY, ku, mA, null, pA), NY._2n(CY, xM, mA, null, pA), NY._2n(CY, Jc, mA, null, pA), NY._2n(LY, IY[EA], mA, xo), NY._2n(LY, IY[US], mA, A_), NY._2n(LY, IY[lI], mA, wA), NY._2n(LY, IY[DM], mA, TA), PY || (NY._2n(LY, IY.EDGE_FROM_AT_EDGE, null, MA, pA), NY._2n(LY, IY[kA], null, n_, pA), NY._2n(LY, IY.EDGE_OUTLINE, mA, Mx), NY._2n(LY, IY[ZS], mA, Tx), NY._2n(LY, IY[JS], mA, $f), NY._2n(LY, IY[OA], mA, Yf), NY._2n(LY, IY.EDGE_CONTROL_POINT, mA, null, pA), NY._2n(LY, IY.EDGE_FROM_OFFSET, mA, null, pA), NY._2n(LY, IY.EDGE_TO_OFFSET, mA, null, pA), NY._2n(LY, IY[lA], mA, wx), NY._2n(LY, IY.LINE_JOIN, mA, I_), NY._2n(CY, gM, null, null, pA, !0), NY._2n(CY, i_, null, null, pA, !0), NY._2n(LY, IY[SA], mA, IA), NY._2n(LY, IY[gI], mA, AA), NY._2n(LY, IY[mI], mA, CA), NY._2n(LY, IY.ARROW_FROM_STROKE_STYLE, mA, LA), NY._2n(LY, IY[PA], mA, RA), NY._2n(LY, IY[wI], mA, "fromArrowOutlineStyle"), NY._2n(LY, IY.ARROW_FROM_FILL_COLOR, mA, DA), NY._2n(LY, IY[MI], mA, "fromArrowFillGradient"), NY._2n(LY, IY[NA], mA, BA), NY._2n(LY, IY.ARROW_FROM_LINE_DASH_OFFSET, mA, "fromArrowLineDashOffset"), NY._2n(LY, IY.ARROW_FROM_LINE_JOIN, mA, jA), NY._2n(LY, IY[$A], mA, FA), NY._2n(LY, IY.ARROW_TO_SIZE, mA, GA), NY._2n(LY, IY.ARROW_TO_OFFSET, mA, qA), NY._2n(LY, IY[RI], mA, zA), NY._2n(LY, IY[NI], mA, HA), NY._2n(LY, IY[YA], mA, UA), NY._2n(LY, IY[jI], mA, WA), NY._2n(LY, IY[XA], mA, VA), NY._2n(LY, IY[qI], mA, ZA), NY._2n(LY, IY[KA], mA, JA), NY._2n(LY, IY[FI], mA, "toArrowLineDashOffset"), NY._2n(LY, IY[HI], mA, QA), NY._2n(LY, IY[tC], mA, iC));
    var BY = new cs;
    BY._2n(LY, IY[nC], eC, WI), BY._2n(LY, IY[sC], eC, Qm), BY._2n(LY, IY.EDGE_BUNDLE_LABEL_ANCHOR_POSITION, eC, PM), BY._2n(LY, IY[jS], eC, K_), BY._2n(LY, IY[HS], eC, sA), PY || (BY._2n(LY, IY[NS], eC, Mo), BY._2n(LY, IY[hC], eC, J_), BY._2n(LY, IY[rC], eC, Z_), BY._2n(LY, IY.EDGE_BUNDLE_LABEL_PADDING, eC, Fo), BY._2n(LY, IY[FS], eC, iA), BY._2n(LY, IY[GS], eC, mf), BY._2n(LY, IY[aC], eC, eA), BY._2n(LY, IY[oC], eC, uk), BY._2n(LY, IY.EDGE_BUNDLE_LABEL_OFFSET_Y, eC, ck), BY._2n(LY, IY[qS], eC, ry), BY._2n(LY, IY[zS], eC, lk), BY._2n(LY, IY[fC], eC, ZI), BY._2n(LY, IY[uC], eC, Tf));
    var jY = new cs;
    jY._2n(CY, MM), jY._2n(LY, IY[cC], null, ZI), jY._2n(LY, IY.BACKGROUND_GRADIENT, null, Tf), jY._2n(LY, IY[TO], null, Fo), jY._2n(LY, IY[gO], null, ry), jY._2n(LY, IY[sm], null, eA), jY._2n(LY, IY[mO], null, lk), jY._2n(LY, IY.BORDER_LINE_DASH, null, vk), jY._2n(LY, IY[EO], null, bk), jY._2n(CY, Mo, null, Mo), jY._2n(CY, gM, null, null, _C), jY._2n(CY, BM, zm, mo), jY._2n(CY, Nw, zm, Nw), jY._2n(LY, IY[oA], zm, xo), jY._2n(LY, IY[fA], zm, A_), jY._2n(LY, IY[uA], zm, kx), jY._2n(LY, IY[sO], zm, Ox), PY || (jY._2n(LY, IY[rO], zm, Mx), jY._2n(LY, IY[oO], zm, Tx), jY._2n(LY, IY[_A], zm, $f), jY._2n(LY, IY[dA], zm, Yf), jY._2n(LY, IY[lA], zm, wx), jY._2n(LY, IY.LINE_JOIN, zm, I_), jY._2n(LY, IY[_O], zm, Rf), jY._2n(LY, IY[vA], zm, ZI), jY._2n(LY, IY.IMAGE_BACKGROUND_GRADIENT, zm, Tf), jY._2n(LY, IY[PO], zm, Fo), jY._2n(LY, IY.IMAGE_BORDER, zm, ry), jY._2n(LY, IY[CO], zm, eA), jY._2n(LY, IY.IMAGE_BORDER_COLOR, zm, lk), jY._2n(LY, IY[AO], zm, vk), jY._2n(LY, IY.IMAGE_BORDER_LINE_DASH_OFFSET, zm, bk), jY._2n(LY, IY[lI], zm, wA), jY._2n(LY, IY[SA], zm, IA), jY._2n(LY, IY[gI], zm, AA), jY._2n(LY, IY[mI], zm, CA), jY._2n(LY, IY[pI], zm, LA), jY._2n(LY, IY[dC], zm, DA), jY._2n(LY, IY[MI], zm, "fromArrowFillGradient"), jY._2n(LY, IY.ARROW_FROM_LINE_DASH, zm, BA), jY._2n(LY, IY[lC], zm, "fromArrowLineDashOffset"), jY._2n(LY, IY.ARROW_FROM_LINE_JOIN, zm, jA), jY._2n(LY, IY[$A], zm, FA), jY._2n(LY, IY[AI], zm, GA), jY._2n(LY, IY.ARROW_TO_OFFSET, zm, qA), jY._2n(LY, IY[DM], zm, TA), jY._2n(LY, IY[RI], zm, zA), jY._2n(LY, IY.ARROW_TO_STROKE_STYLE, zm, HA), jY._2n(LY, IY[XA], zm, VA), jY._2n(LY, IY[qI], zm, ZA), jY._2n(LY, IY[KA], zm, JA), jY._2n(LY, IY[FI], zm, "toArrowLineDashOffset"), jY._2n(LY, IY[HI], zm, QA), jY._2n(LY, IY.ARROW_TO_LINE_CAP, zm, iC));
    var $Y = function (t, i) {
        return t = t[Uw], i = i.zIndex, t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
    }, FY = function (t, i) {
        this[kT] = new oq, w(this, FY, arguments), this.id = this[Df].id, this[Zc] = i, this._fe = [], this[vC] = new cs
    };
    FY[tr] = {
        syncSelection: !1,
        graph: null,
        layoutByAnchorPoint: !1,
        _mu0: null,
        _fe: null,
        addChild: function (t, i) {
            t._j9 = this, i !== n ? y(this._fe, t, i) : this._fe[Kh](t), t._dw && this[Ik](t), this[bC](), this[gC](), this.$invalidateChild = !0
        },
        removeChild: function (t) {
            this[vC][yC](t), t._j9 = null, m(this._fe, t), this._jc && this._jc.remove(t), this[gC](), this[mC] = !0
        },
        getProperty: function (t, i) {
            return i == bz[gc] ? this.graph[mc](this.$data, t) : i == bz[bc] ? this.$data.get(t) : this[Df][t]
        },
        getStyle: function (t) {
            return this[Zc][mc](this.$data, t)
        },
        _$y: function (t, i, n) {
            var e = this[vC][xC](this, t, i, n);
            return AY[xC](this, t, i, n) || e
        },
        onPropertyChange: function (t) {
            if (Uw == t[dd]) return this[FT](), !0;
            if (oM == t[To]) {
                if (Pw == t.kind) return this.invalidate(), !0;
                var i = t.value;
                return i && i.ui ? (Jl == t[dd] ? this._9t(i) : Vh == t[dd] && this[pv](i.ui), !0) : !1
            }
            return this._$y(t[dd], t[Sl] || CY, t[_c])
        },
        label: null,
        initLabel: function () {
            var t = new qY;
            t.name = fE, this[pC](t), this.label = t
        },
        initialize: function () {
            this[EC](), this[Df]._muy && this[Df][fM].forEach(this._9t, this), AY.initBindingProperties(this), this[vC].initBindingProperties(this, !1)
        },
        addBinding: function (t, i) {
            return i.property ? (i[dc] = t, void this._mu0._1z(i[lc], i)) : !1
        },
        _g1: function (t, i) {
            var n = this.$data;
            if (!n[fM]) return !1;
            var e = n._muy.getById(t.id);
            if (!e || !e[wC]) return !1;
            var s = e.bindingProperties;
            if ($(s)) {
                var h = !1;
                return l(s, function (t) {
                    return mo == t.bindingProperty ? (h = _s(n, i, t[lc], t.propertyType), !1) : void 0
                }, this), h
            }
            return mo == s[Nk] ? _s(n, i, s.property, s[Sl]) : !1
        },
        _9t: function (t) {
            var i = t.ui;
            if (i) {
                var n = t.bindingProperties;
                n && (Array[Er](n) ? n[Kf](function (t) {
                    this.addBinding(i, t)
                }, this) : this.addBinding(i, n)), this[pC](i)
            }
        },
        validate: function () {
            return this[Rw] || (this[Mk](), this._mqo = !0), this[TC]()
        },
        _$c: !0,
        invalidateChildrenIndex: function () {
            this._$c = !0
        },
        doValidate: function () {
            if (this._1p && (this._1p = !1, this.validateChildren() && (this.measure(), this[lf] = !0), this._$c && (this._$c = !1, UG ? this._fe = d(this._fe, $Y) : this._fe[ZT]($Y))), qn[Hh](this) && (this[jf] = !0), this.$invalidateRotate) {
                sH[Hh](this), this[kT].setByRect(this._ft);
                var t = this[MC] || 0, i = Math.max(this[MC] || 0, this[kC] || 0, this[OC] || 0),
                    n = Math.max(this[SC] || 0, this[IC] || 0),
                    e = Math.max(2 * t, this.$shadowBlur, this.$selectionShadowBlur);
                e += tq[AC] || 0;
                var s = e - i, h = e + i, r = e - n, a = e + n;
                return 0 > s && (s = 0), 0 > h && (h = 0), 0 > r && (r = 0), 0 > a && (a = 0), this[kT][CC](r, s, a, h), this.onBoundsChanged && this.onBoundsChanged(), this[LC] = !0, !0
            }
        },
        validateChildren: function () {
            var t = this[mC];
            this[mC] = !1;
            var i = this[PC], n = this[RC];
            i && (i.$renderColor = this.$renderColor, i[DC] = this[DC], i[NC] = this[NC], i.$shadowBlur = this[BC], i[kC] = this[kC], i.$shadowOffsetY = this.$shadowOffsetY), this.bodyChanged = !1, i && i._1p && (n = i[qo]() || n, i.$x = 0, i.$y = 0, i[jf] && sH[Hh](i), t = !0);
            for (var e = 0, s = this._fe[qh]; s > e; e++) {
                var h = this._fe[e];
                if (h != i) {
                    var r = h._1p && h[qo]();
                    (r || n) && h._hf && Un(h, i, this), !t && r && (t = !0)
                }
            }
            return t
        },
        measure: function () {
            this._iv.clear();
            for (var t, i, n = 0,
                     e = this._fe[qh]; e > n; n++)t = this._fe[n], t._hf && (i = t._ft, i[Pa] <= 0 || i[Ra] <= 0 || this._iv[sl](t.$x + i.x, t.$y + i.y, i[Pa], i[Ra]))
        },
        _jc: null,
        _mqk: function (t) {
            if (!this._jc) {
                if (!t[KI]) return;
                return this._jc = new iq, this._jc.add(t)
            }
            return t[KI] ? this._jc.add(t) : this._jc[Vh](t)
        },
        draw: function (t, i, n) {
            for (var e, s = 0,
                     h = this._fe[qh]; h > s; s++)e = this._fe[s], e._hf && !e.showOnTop && e._ja(t, i, n, this)
        },
        _9u: function (t, i) {
            if (!this._hf || !this._jc || !this._jc[qh]) return !1;
            t[Ja](), t[Qa](this.$x, this.$y), this[cf] && this[_f] && t[Mo](this[_f]), (this.offsetX || this[ck]) && t[Qa](this[uk], this[ck]), this.$rotate && t.rotate(this[ff]), this[df] && this[of] && t[Qa](-this._mqe.x, -this[of].y), this[L_] && (t[L_] = this[L_], t[Dm] = this[Dm] * i, t[Nm] = this.shadowOffsetX * i, t.shadowOffsetY = this[Bm] * i), t[Ix]();
            for (var n, e = 0,
                     s = this._fe.length; s > e; e++)n = this._fe[e], n._hf && n[KI] && n._ja(t, i, this.selected, this);
            t.restore()
        },
        doHitTest: function (t, i, n) {
            if (n) {
                if (!this._iv.intersectsRect(t - n, i - n, 2 * n, 2 * n)) return !1
            } else if (!this._iv[bo](t, i)) return !1;
            return this[jC](t, i, n)
        },
        hitTestChildren: function (t, i, n) {
            for (var e, s = this._fe[qh] - 1; s >= 0; s--)if (e = this._fe[s], e._hf && e[s_](t, i, n)) return e;
            return !1
        },
        destroy: function () {
            this._hsed = !0;
            for (var t, i = this._fe[qh] - 1; i >= 0; i--)t = this._fe[i], t[cg]()
        }
    }, E(FY, OY), K(FY[tr], {
        renderColorBlendMode: {
            get: function () {
                return this[DC]
            }, set: function (t) {
                this[DC] = t, this._1p = !0, this[pm] && (this[pm][hA] = this[DC])
            }
        }, renderColor: {
            get: function () {
                return this.$renderColor
            }, set: function (t) {
                this[$C] = t, this._1p = !0, this[pm] && (this[pm][$m] = this[$C])
            }
        }, bodyBounds: {
            get: function () {
                if (this.$invalidateBounds) {
                    this[LC] = !1;
                    var t, i = this[pm];
                    t = i && i._hf && !this._$v() ? i._ft[Zh]() : this._ft.clone(), this[Mo] && Si(t, this[Mo], t), t.x += this.$x, t.y += this.$y, this[FC] = t
                }
                return this._muw
            }
        }, bounds: {
            get: function () {
                return new oq((this.$x || 0) + this.uiBounds.x, (this.$y || 0) + this[kT].y, this[kT][Pa], this[kT][Ra])
            }
        }, body: {
            get: function () {
                return this[PC]
            }, set: function (t) {
                t && this[PC] != t && (this._msody = t, this[RC] = !0, this.invalidateSize())
            }
        }
    }), tq.UI_BOUNDS_GROW = 1;
    var GY = function () {
        w(this, GY, arguments)
    };
    GY[tr] = {
        strokeStyle: Rm,
        lineWidth: 0,
        fillColor: null,
        fillGradient: null,
        _j8: 1,
        _j5: 1,
        outline: 0,
        onDataChanged: function (t) {
            T(this, GY, Sk, arguments), this._kf && this._84 && this._kf._76(this._84, this), t && this[aA](t)
        },
        _mu5: function (t) {
            this._kf = yn(t), this._kf[qo](), (this._kf._l1 == Iz || this._kf._79()) && (this._84 || (this._84 = function () {
                this[HT](), this._j9 && this._j9.graph && (this._j9[gC](), this._j9.graph.invalidate())
            }), this._kf[zo](this._84, this))
        },
        _kf: null,
        initialize: function () {
            this._mu5(this[Df])
        },
        _57: function () {
            return this._kf && this._kf[Po]
        },
        _9r: function (t) {
            if (!t || t.width <= 0 || t[Ra] <= 0 || !this[GC] || !(this[Nw] instanceof Object)) return this._j8 = 1, void (this._j5 = 1);
            var i = this[Nw][Pa], e = this.size.height;
            if ((i === n || null === i) && (i = -1), (e === n || null === e) && (e = -1), 0 > i && 0 > e) return this._j8 = 1, void (this._j5 = 1);
            var s, h, r = t[Pa], a = t[Ra];
            i >= 0 && (s = i / r), e >= 0 && (h = e / a), 0 > i ? s = h : 0 > e && (h = s), this._j8 = s, this._j5 = h
        },
        validateSize: function () {
            if (this[qC]) {
                this[qC] = !1;
                var t = this[zC];
                this._j8, this._j5, this._9r(t), this[HC](t.width * this._j8, t[Ra] * this._j5, t.x * this._j8, t.y * this._j5)
            }
        },
        measure: function () {
            var t = this._kf[lo](this[xo] + this.outline);
            return t ? (this[qC] = !0, void (this[zC] = t[Zh]())) : void this._iv.set(0, 0, 0, 0)
        },
        onBoundsChanged: function () {
            this.$invalidateFillGradient = !0
        },
        _1s: function () {
            this.$invalidateFillGradient = !1, this._fillGradient = this[Ox] ? Nz[tr][YC][Hh](this.$fillGradient, this._8d) : null
        },
        _jd: function (t) {
            var i, n;
            if (ey == this.$adjustType) i = 1, n = -1; else {
                if (sy != this.$adjustType) return;
                i = -1, n = 1
            }
            var e = this._iv.cx, s = this._iv.cy;
            t[Qa](e, s), t[rf](i, n), t[Qa](-e, -s)
        },
        draw: function (t, i, n, e) {
            if (this._j8 && this._j5) {
                if (this[UC] && this._1s(), t.save(), this[WC] && this._jd(t), this._kf._l1 == Cz) return t[rf](this._j8, this._j5), this._kf._lr[Po](t, i, this, n, e || this), void t[ro]();
                n && this._7v(t, i, e), this._kf[Po](t, i, this, this._j8, this._j5), t[ro]()
            }
        },
        doHitTest: function (t, i, n) {
            if (this._kf[s_]) {
                if (ey == this[WC]) {
                    var e = this._iv.cy;
                    i = 2 * e - i
                } else if (sy == this.$adjustType) {
                    var s = this._iv.cx;
                    t = 2 * s - t
                }
                t /= this._j8, i /= this._j5;
                var h = (this._j8 + this._j5) / 2;
                return h > 1 && (n /= h, n = 0 | n), this._kf._lr instanceof Qz ? this._kf._lr[s_](t, i, n, !0, this[XC], this.$fillColor || this[VC]) : this._kf[s_](t, i, n)
            }
            return !0
        },
        $invalidateScale: !0,
        $invalidateFillGradient: !0
    }, E(GY, OY), fs(GY[tr], {
        adjustType: {},
        fillColor: {},
        size: {validateFlags: [$g, ZC]},
        fillGradient: {validateFlags: [KC]}
    }), K(GY.prototype, {
        originalBounds: {
            get: function () {
                return this[zC]
            }
        }
    }), tq[JC] = uq[yl];
    var qY = function () {
        w(this, qY, arguments), this[WI] = tq[UI]
    };
    qY.prototype = {
        color: tq[UI],
        showPointer: !0,
        fontSize: null,
        fontFamily: null,
        fontStyle: null,
        _fw: null,
        alignPosition: null,
        measure: function () {
            this[to];
            var t = Ni(this[Df], this[QC], this[tL], this.$fontStyle, tq[iL], this[nL]);
            if (this._fw = t, this[GC]) {
                var i = this[GC][Pa] || 0, n = this[GC][Ra] || 0;
                return this.setMeasuredBounds(i > t[Pa] ? i : t.width, n > t.height ? n : t.height)
            }
            return this[HC](t[Pa], t[Ra])
        },
        doHitTest: function (t, i, n) {
            return this[Df] ? In(t, i, n, this) : !1
        },
        draw: function (t, i, n, e) {
            if (n && this._7v(t, i, e), this[QC] || tq[Va], this[cf] && this[_f]) {
                var s = un(this[_f]);
                s > nq && 3 * nq > s && (t[Qa](this._iv[Pa] / 2, this._iv[Ra] / 2), t.rotate(Math.PI), t[Qa](-this._iv[Pa] / 2, -this._iv[Ra] / 2))
            }
            var h = this[tA] || tq[JC], r = h.horizontalPosition, a = h.verticalPosition, o = 0;
            r == _q ? (r = Cm, o += this._iv[Pa] / 2) : r == dq ? (r = Yr, o += this._iv[Pa]) : r = Go;
            var f = 0;
            a == vq ? f = (this._iv[Ra] - this._fw.height) / 2 : a == bq && (f = this._iv.height - this._fw[Ra]), t.fillStyle = this[WI], Di(t, this[Df], o, f, r, this[tL], this.$fontSize, this[eL], tq[iL], this[nL])
        },
        _57: function () {
            return null != this.$data || this[GC]
        },
        $invalidateFont: !0
    }, E(qY, OY), fs(qY.prototype, {
        size: {validateFlags: [Yg]},
        fontStyle: {validateFlags: [Yg, sL]},
        fontSize: {validateFlags: [Yg, sL]},
        fontFamily: {validateFlags: [Yg, sL]}
    }), K(qY[tr], {
        font: {
            get: function () {
                return this.$invalidateFont && (this[hL] = !1, this.$font = (this[eL] || tq[jd]) + yr + (this.$fontSize || tq.FONT_SIZE) + Za + (this.$fontFamily || tq[Ka])), this[nL]
            }
        }
    });
    var zY = function (t) {
        t = t || new Qz, this[rL] = new oq, w(this, zY, [t])
    };
    zY.prototype = {
        layoutByPath: !0,
        layoutByAnchorPoint: !1,
        measure: function () {
            this.$invalidateFromArrow = !0, this[aL] = !0, this[Df][lo](this.$lineWidth + this[oL], this[rL]), this.setMeasuredBounds(this[rL])
        },
        validateSize: function () {
            if (this[fL] || this[aL]) {
                var t = this[rL][Zh]();
                if (this[fL]) {
                    this[fL] = !1;
                    var i = this[uL]();
                    i && t.add(i)
                }
                if (this[aL]) {
                    this[aL] = !1;
                    var i = this[cL]();
                    i && t.add(i)
                }
                this.setMeasuredBounds(t)
            }
        },
        validateFromArrow: function () {
            if (!this[Df]._in || !this[_L]) return void (this[dL] = null);
            var t = this[Df], i = 0, n = 0, e = this.$fromArrowOffset;
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0, i > 0 && 1 > i && (i *= t._in)), this.fromArrowLocation = t[lL](i, n), this[vL][Mo] = Math.PI + this[vL][Mo] || 0, this[dL] = js(this[_L], this[bL]);
            var s = this[dL].getBounds(this[gL][xo] + this.fromArrowStyles[Mx]);
            return this[yL] instanceof vz[mL] ? this.fromArrowStyles._fillGradient = Nz[tr][YC][Hh](this.fromArrowFillGradient, s) : this[gL] && (this[gL][Sx] = null), s[fm](this[vL].x, this[vL].y), Ii(s, this[vL][Mo], s, this.fromArrowLocation.x, this[vL].y), s
        },
        validateToArrow: function () {
            if (!this.$data._in || !this[xL]) return void (this[pL] = null);
            var t = this[Df], i = 0, n = 0, e = this.$toArrowOffset;
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0), 0 > i && i > -1 && (i *= t._in), i += t._in, this[EL] = t[lL](i, n), this[pL] = js(this.$toArrow, this[wL]);
            var s = this.$toArrowShape[lo](this[TL].lineWidth + this[TL].outline);
            return this[ZA] instanceof vz.Gradient ? this[TL][Sx] = Nz[tr][YC][Hh](this[ZA], s) : this[TL] && (this.toArrowStyles._fillGradient = null), s[fm](this[EL].x, this[EL].y), Ii(s, this.toArrowLocation[Mo], s, this.toArrowLocation.x, this[EL].y), s
        },
        _29: function (t) {
            var i = t ? "from" : xM, e = this[i + ML];
            e === n && (e = this[XC]);
            var s = this[i + kL];
            s === n && (s = this[A_]);
            var h = this[i + OL];
            h || (this[i + OL] = h = {}), h[xo] = e, h[A_] = s, h.lineDash = this[i + SL], h[Yf] = this[i + IL], h.fillColor = this[i + AL], h[Ox] = this[i + CL], h[wx] = this[i + LL], h[I_] = this[i + PL], h[Mx] = this[i + RL] || 0, h.outlineStyle = this[i + DL]
        },
        doValidate: function () {
            return this.$fromArrow && this._29(!0), this.$toArrow && this._29(!1), T(this, zY, TC)
        },
        drawArrow: function (t, i, n, e) {
            if (this[_L] && this.$fromArrowShape) {
                t[Ja]();
                var s = this[vL], h = s.x, r = s.y, a = s[Mo];
                t[Qa](h, r), a && t.rotate(a), this[dL][Po](t, i, this[gL], n, e), t.restore()
            }
            if (this[xL] && this.$toArrowShape) {
                t[Ja]();
                var s = this[EL], h = s.x, r = s.y, a = s[Mo];
                t.translate(h, r), a && t[Mo](a), this.$toArrowShape[Po](t, i, this.toArrowStyles, n, e), t[ro]()
            }
        },
        outlineStyle: null,
        outline: 0,
        onBoundsChanged: function () {
            this[UC] = !0
        },
        _1s: function () {
            this.$invalidateFillGradient = !1, this[Sx] = this[VC] ? Nz.prototype[YC][Hh](this[VC], this._8d) : null
        },
        draw: function (t, i, n, e) {
            this.$invalidateFillGradient && this._1s(), this[Df].draw(t, i, this, n, e), this[NL](t, i, n, e)
        },
        doHitTest: function (t, i, n) {
            if (this.$data.hitTest(t, i, n, !0, this[XC] + this[oL], this.$fillColor || this[VC])) return !0;
            if (this[xL] && this[pL]) {
                var e = t - this[EL].x, s = i - this[EL].y;
                if (this[EL][Mo]) {
                    var h = Mi(e, s, -this.toArrowLocation[Mo]);
                    e = h.x, s = h.y
                }
                var r = this.toArrowStyles.fillColor || this.toArrowStyles[Ox];
                if (this[pL].hitTest(e, s, n, !0, this[TL][xo], r)) return !0
            }
            if (this[_L] && this.$fromArrowShape) {
                var e = t - this[vL].x, s = i - this.fromArrowLocation.y;
                if (this[vL][Mo]) {
                    var h = Mi(e, s, -this.fromArrowLocation[Mo]);
                    e = h.x, s = h.y
                }
                var r = this[gL][kx] || this[gL].fillGradient;
                if (this[dL][s_](e, s, n, !0, this.fromArrowStyles[xo], r)) return !0
            }
            return !1
        },
        $fromArrowOutline: 0,
        $toArrowOutline: 0,
        $invalidateFillGradient: !0,
        $invalidateFromArrow: !0,
        $invalidateToArrow: !0
    }, E(zY, OY), fs(zY.prototype, {
        fillColor: {},
        fillGradient: {validateFlags: [KC]},
        fromArrowOffset: {validateFlags: [BL, $g]},
        fromArrowSize: {validateFlags: [BL, $g]},
        fromArrow: {validateFlags: [BL, $g]},
        fromArrowOutline: {validateFlags: [BL, $g]},
        fromArrowStroke: {validateFlags: [BL, $g]},
        toArrowOffset: {validateFlags: [jL, $g]},
        toArrowSize: {validateFlags: [jL, $g]},
        toArrow: {validateFlags: [jL, $g]},
        toArrowOutline: {validateFlags: [jL, $g]},
        toArrowStroke: {validateFlags: [jL, $g]},
        outline: {value: 0, validateFlags: [Yg]}
    }), K(zY.prototype, {
        length: {
            get: function () {
                return this[mo][qh]
            }
        }
    }), ds[tr] = {
        shape: null, path: null, initialize: function () {
            T(this, ds, Mk), this[BM] = new Qz, this[BM]._dm = !1, this[mA] = new zY(this[BM]), this[pC](this[mA], 0), this._msody = this.shape, NY[$L](this)
        }, _1u: !0, _5k: null, _$v: function () {
            return !1
        }, _4a: function () {
            return !1
        }, validatePoints: function () {
            this[mA].invalidateData();
            var t = this[Df], i = this[BM];
            i.clear();
            var n = t[Mu], e = t.toAgent;
            n && e && Hs(this, t, i, n, e)
        }, drawLoopedEdge: function (t, i, n, e) {
            Xs(this, e, t)
        }, drawEdge: function (t, i, n, e, s, h) {
            var r = s[Cm], a = h.center;
            if (e == bz[FL]) {
                var o = (r.x + a.x) / 2, f = (r.y + a.y) / 2, u = r.x - a.x, c = r.y - a.y,
                    _ = Math.sqrt(u * u + c * c), d = Math[qr](c, u);
                d += Math.PI / 6, _ *= .04, _ > 30 && (_ = 30);
                var l = Math.cos(d) * _, v = Math.sin(d) * _;
                return t.lineTo(o - v, f + l), void t.lineTo(o + v, f - l)
            }
            var b = Ws(this, this[mo], s, h, i, n, r, a);
            b && (t._gd = b)
        }, _2e: function () {
            if (!this[Df][GL]()) return null;
            var t = this[Zc]._8y._8p(this[Df]);
            if (!t || !t.canBind(this[Zc]) || !t._g5) return null;
            var i = t[qL](this);
            return t.isPositiveOrder(this[Df]) || (i = -i), i
        }, checkBundleLabel: function () {
            var t = this.getBundleLabel();
            return t ? (this[eC] || this[zL](), this[eC]._hf = !0, void (this[eC][mo] = t)) : void (this.bundleLabel && (this[eC]._hf = !1, this.bundleLabel[mo] = null))
        }, createBundleLabel: function () {
            var t = new qY;
            t[HL] = !1, this[eC] = t, this[pC](this[eC]), BY[$L](this)
        }, getBundleLabel: function () {
            return this.graph[YL](this[mo])
        }, doValidate: function () {
            return this._1u && (this._1u = !1, this[UL]()), this[WL](), T(this, ds, TC)
        }, _48: function () {
            this._1u = !0, this[gC]()
        }, _$y: function (t, i, n) {
            var e = this[vC][xC](this, t, i, n);
            return e = AY.onBindingPropertyChange(this, t, i, n) || e, this[eC] && this[eC][Df] && (e = BY[xC](this, t, i, n) || e), NY.onBindingPropertyChange(this, t, i, n) || e
        }
    }, E(ds, FY), ds[XL] = function (t, i, n, e) {
        if (t[Gu](i.x, i.y), !e || e == bz.EDGE_TYPE_DEFAULT) return void t[$u](n.x, n.y);
        if (e == bz[Oc]) t.lineTo(i.x, n.y); else if (e == bz[Ec]) t.lineTo(n.x, i.y); else if (0 == e[Jh](bz[zc])) {
            var s;
            s = e == bz[pc] ? !0 : e == bz[kc] ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y);
            var h = (i.x + n.x) / 2, r = (i.y + n.y) / 2;
            s ? (t[$u](h, i.y), t[$u](h, n.y)) : (t.lineTo(i.x, r), t[$u](n.x, r))
        } else if (0 == e.indexOf(bz.EDGE_TYPE_ELBOW)) {
            var s, a = HY[IY[xc]] || 0;
            s = e == bz[Lc] ? !0 : e == bz[Mc] ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y), s ? (t.lineTo(i.x + a, i.y), t.lineTo(n.x - a, n.y)) : (t.lineTo(i.x, i.y + a), t[$u](n.x, n.y - a))
        } else if (0 == e.indexOf(VL)) {
            var a = HY[IY[xc]] || 0;
            if (e == bz[Sc]) {
                var o = Math.min(i.y, n.y) - a;
                t[$u](i.x, o), t.lineTo(n.x, o)
            } else if (e == bz[Ic]) {
                var o = Math.max(i.y, n.y) + a;
                t[$u](i.x, o), t.lineTo(n.x, o)
            } else if (e == bz[wc]) {
                var f = Math.min(i.x, n.x) - a;
                t[$u](f, i.y), t.lineTo(f, n.y)
            } else if (e == bz[Tc]) {
                var f = Math.max(i.x, n.x) + a;
                t.lineTo(f, i.y), t[$u](f, n.y)
            }
        } else if (e == bz[FL]) {
            var h = (i.x + n.x) / 2, r = (i.y + n.y) / 2, u = i.x - n.x, c = i.y - n.y, _ = Math[fo](u * u + c * c),
                d = Math.atan2(c, u);
            d += Math.PI / 6, _ *= .04, _ > 30 && (_ = 30);
            var l = Math.cos(d) * _, v = Math.sin(d) * _;
            t[$u](h - v, r + l), t[$u](h + v, r - l)
        }
        t[$u](n.x, n.y)
    }, K(ds[tr], {
        length: {
            get: function () {
                return this[BM] ? this[BM].length : 0
            }
        }
    }), ds[tr][Na] = function (t, i, n) {
        var e = En(this[BM], t, i, n);
        if (e && e[qh] > 2) {
            var s = this[mo], h = e[e[qh] - 1];
            s.pathSegments = h.type == Uz ? e[Uh](1, e[qh] - 2) : e.splice(1, e[qh] - 1)
        }
    }, ls.prototype = {
        _31: null, image: null, initialize: function () {
            T(this, ls, Mk), this[ZL](), RY.initBindingProperties(this)
        }, _mu5: function () {
            this.data[zm] ? this[zm] && (this.body = this[zm]) : this[fE] && (this[pm] = this[fE])
        }, _msb: function () {
            this[zm] = new GY, this[pC](this.image, 0), this[aA]()
        }, doValidate: function () {
            this[pm] && (this instanceof nh && !this[Df][QM] && this._5v() ? this.body.$layoutByAnchorPoint = !1 : (this.body.$layoutByAnchorPoint = null != this._31, this[pm][PM] = this._31));
            var t = this[Df].$location, i = 0, n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[LC] = !0), this.$x = i, this.$y = n, FY[tr][TC][Hh](this) || e
        }, _$y: function (t, i, n) {
            var e = this[vC].onBindingPropertyChange(this, t, i, n);
            return e = AY[xC](this, t, i, n) || e, RY[xC](this, t, i, n) || e
        }
    }, E(ls, FY);
    var HY = {};
    HY[IY[em]] = tq[em], HY[IY[jk]] = tq[jk], HY[IY[nm]] = tq[nm], HY[IY[Qy]] = bz[tm], HY[IY[Fk]] = 2, HY[IY.SELECTION_SHADOW_OFFSET_Y] = 2, HY[IY.LABEL_COLOR] = tq.LABEL_COLOR, HY[IY.LABEL_POSITION] = uq[ml], HY[IY[KL]] = uq.CENTER_TOP, HY[IY[QO]] = new fq(0, 2), HY[IY.LABEL_POINTER_WIDTH] = 8, HY[IY.LABEL_RADIUS] = 8, HY[IY[eS]] = !0, HY[IY.LABEL_BORDER] = 0, HY[IY.LABEL_BORDER_STYLE] = Rm, HY[IY.LABEL_ROTATABLE] = !0, HY[IY[bS]] = null, HY[IY[gS]] = null, HY[IY[US]] = JL, HY[IY[EA]] = 1.5, HY[IY[QL]] = !0, HY[IY[kA]] = !0, HY[IY[IS]] = V(3438210798), HY[IY[AS]] = 1, HY[IY[LS]] = Rm, HY[IY[DM]] = !0, HY[IY[SA]] = tq[rm], HY[IY[AI]] = tq[rm], HY[IY[sI]] = 10, HY[IY[Bc]] = 8, HY[IY[Dc]] = bz[$c], HY[IY[Ac]] = !0, HY[IY[xc]] = 20, HY[IY[tP]] = .5, HY[IY.EDGE_SPLIT_VALUE] = 20, HY[IY[iP]] = 20, HY[IY.EDGE_BUNDLE_LABEL_ANCHOR_POSITION] = uq[ml], HY[IY[sC]] = uq[gl], HY[IY[nC]] = nP, HY[IY.SHAPE_STROKE] = 1, HY[IY.SHAPE_STROKE_STYLE] = eP, HY[IY.RENDER_COLOR_BLEND_MODE] = tq.BLEND_MODE, HY[IY[Yk]] = 1, tq[h_] = 2;
    var YY = function (i, n) {
        this._$r = new kq, this._$r.on(function (t) {
            zM == t.kind && this[CT]()
        }, this), this._1o = new kq, this._1o[Yl](function (t) {
            !this.currentSubNetwork || t[dd] != Iq[ov] && t[dd] != Iq[Ql] || this.graphModel[e_](this.currentSubNetwork) || (this.currentSubNetwork = null)
        }, this), this._9 = new kq, this._19 = new kq, this._$k = new kq, this._$q = new kq, this[G_] = n || new hs, this._8y = new _Y(this, i), this._38 = new Lh(this), this._1e = new kq, this[sP] = jq(t, hP, function () {
            this.updateViewport()
        }, !1, this), this._8y[eT][rP] = function (t) {
            this[rP](t)
        }[cr](this), this._8y[eT][aP] = function (t) {
            this[aP](t)
        }.bind(this)
    };
    YY.prototype = {
        originAtCenter: !0,
        editable: !1,
        ondragover: function (t) {
            vz[oP](t)
        },
        getDropInfo: function (t, i) {
            var n = null;
            if (i) try {
                n = JSON[nu](i)
            } catch (e) {
            }
            return n
        },
        ondrop: function (t) {
            var i = t[fP];
            if (i) {
                var n = i[Qb](ed), e = this[uP](t, n);
                e || (e = {}, e.image = i.getData(zm), e[To] = i.getData(To), e[fE] = i[Qb](fE), e[QM] = i.getData(QM));
                var s = this.globalToLocal(t);
                if (s = this.toLogical(s.x, s.y), !(this.dropAction instanceof Function && this[cP][Hh](this, t, s, e) === !1) && (e.image || e[fE] || e[To])) {
                    var h = e[zm], r = e.type, a = e[fE], o = e[QM];
                    vz[oP](t);
                    var f;
                    if (r && _P != r ? nk == r ? f = this.createText(a, s.x, s.y) : FM == r ? f = this[dP](a, s.x, s.y) : tk == r ? (f = this[lP](a, s.x, s.y), o && (o = th(o), o && (f[QM] = o))) : (r = J(r), r instanceof Function && r.prototype instanceof wY && (f = new r, f[jo] = a, f[MM] = new sq(s.x, s.y), this[eM].add(f))) : f = this[vP](a, s.x, s.y), f) {
                        if (h && (h = th(h), h && (f[zm] = h)), t[ME]) {
                            var u = this[ig](t);
                            u && this[bP](u) && (f[Eu] = u)
                        }
                        if (e.properties) for (var c in e[gP]) f[c] = e[gP][c];
                        if (e[yP]) for (var c in e[yP]) f.set(c, e[yP][c]);
                        if (e[mP] && f.putStyles(e.styles), this[xP](f, t, e) === !1) return !1;
                        var _ = new Ch(this, Ch[pP], t, f);
                        return this[EP](_), f
                    }
                }
            }
        },
        _msq: function (t) {
            return t[a_] || t instanceof kY || t[wP]
        },
        enableDoubleClickToOverview: !0,
        _8y: null,
        _$r: null,
        _1o: null,
        _9: null,
        _$q: null,
        _19: null,
        _$k: null,
        _1x: function (t) {
            return this._$r.beforeEvent(t)
        },
        _4e: function (t) {
            this._$r[or](t), Bw == t.kind && this.checkLimitedBounds()
        },
        isVisible: function (t) {
            return this._8y._ex(t)
        },
        isMovable: function (t) {
            return (t instanceof wY || t instanceof EY && t[Uc]()) && t[TP] !== !1
        },
        isSelectable: function (t) {
            return t[MP] !== !1
        },
        isEditable: function (t) {
            return t[HL] !== !1
        },
        isRotatable: function (t) {
            return t[sA] !== !1
        },
        isResizable: function (t) {
            return t[kP] !== !1
        },
        canLinkFrom: function (t) {
            return t[OP] !== !1 && t[SP] !== !1
        },
        canLinkTo: function (t) {
            return t[OP] !== !1 && t[IP] !== !1
        },
        createNode: function (t, i, n) {
            var e = new wY(t, i, n);
            return this[eM].add(e), e
        },
        createText: function (t, i, n) {
            var e = new as(t, i, n);
            return this._k0Model.add(e), e
        },
        createShapeNode: function (t, i, n, e) {
            N(i) && (e = n, n = i, i = null);
            var s = new TY(t, i);
            return s[wM] = new sq(n, e), this[eM].add(s), s
        },
        createGroup: function (t, i, n) {
            var e = new kY(t, i, n);
            return this[eM].add(e), e
        },
        createEdge: function (t, i, n) {
            if (t instanceof wY) {
                var e = n;
                n = i, i = t, t = e
            }
            var s = new EY(i, n);
            return t && (s[uM] = t), this[eM].add(s), s
        },
        addElement: function (t, i) {
            this[eM].add(t), i && t[Gh]() && t[Bu](function (t) {
                this[AP](t, i)
            }, this)
        },
        removeElement: function (t) {
            this[eM][Vh](t)
        },
        clear: function () {
            this[eM].clear()
        },
        getStyle: function (t, i) {
            var e = t._iw[i];
            return e !== n ? e : this.getDefaultStyle(i)
        },
        getDefaultStyle: function (t) {
            if (this._iw) {
                var i = this._iw[t];
                if (i !== n) return i
            }
            return HY[t]
        },
        _2p: function (t, i) {
            if (!this[CP] || this[CP][e_](this.viewportBounds)) return i && i(), !1;
            t = this._2i(), this[LP]();
            var n, e, s, h = this[nM], r = this[CP], a = h[Pa] / this[CP].width, o = h[Ra] / this.limitedBounds[Ra];
            if (1 >= a && 1 >= o) return n = r[Go] > h[Go] ? r[Go] : r.right < h.right ? h[Go] - (h[Yr] - r[Yr]) : h[Go], e = r.top > h.top ? r.top : r[Hr] < h[Hr] ? h.top - (h[Hr] - r[Hr]) : h.top, void this[PP](-n * this.scale, -e * this.scale, this.scale, !1, i);
            var f = a > o;
            s = Math.max(a, o), f ? (n = r.x, e = r.y + (h.top - r.top) * (1 - s) / s, e > r.y ? e = r.y : e < r[Hr] - h[Ra] / s && (e = r[Hr] - h.height / s)) : (e = r.y, n = r.x + (h[Go] - r.left) * (1 - s) / s, n > r.x ? n = r.x : n < r[Yr] - h[Pa] / s && (n = r.right - h[Pa] / s)), s *= this[rf], n *= s, e *= s, this.translateTo(-n, -e, s, t, i)
        },
        checkLimitedBounds: function (t) {
            return this._muheckingBounds || !this[CP] || this[CP][e_](this.viewportBounds) ? !1 : (this[RP] = !0, void this.callLater(function () {
                this._2p(t, function () {
                    this._muheckingBounds = !1
                }[cr](this))
            }, this))
        },
        zoomByMouseEvent: function (t, i, n, e) {
            var s = this[DP](t);
            return N(i) ? this.zoomAt(Math.pow(this[NP], i), s.x, s.y, n, e) : i ? this[BP](s.x, s.y, n, e) : this[jP](s.x, s.y, n, e)
        },
        resetScale: 1,
        translate: function (t, i, n) {
            return this[PP](this.tx + t, this.ty + i, this[rf], n)
        },
        translateTo: function (t, i, n, e, s) {
            if (n && (n = Math.min(this[qm], Math.max(this[$P], n))), e) {
                var h = this._5s();
                return void h._kd(t, i, n, e, s)
            }
            var r = this._8y._ms2(t, i, n);
            return s && s(), r
        },
        centerTo: function (t, i, e, s, h) {
            return (!e || 0 >= e) && (e = this[rf]), s === n && (s = this._2i()), this[PP](this[Pa] / 2 - t * e, this[Ra] / 2 - i * e, e, s, h)
        },
        moveToCenter: function (t, i) {
            if (arguments[2] === !1 || !this._8y[FP]()) {
                var n = this[kf];
                return void this[GP](n.cx, n.cy, t, i)
            }
            return this._8y[Rw] || (i = !1), this.callLater(this.moveToCenter.bind(this, t, i, !1))
        },
        zoomToOverview: function (t, i) {
            if (arguments[2] === !1 || !this._8y.isInvalidate()) {
                var n = this._8y._1m();
                return void (n && (i && (n.scale = Math.min(n[rf], i)), this.centerTo(n.cx, n.cy, n[rf], t)))
            }
            return this._8y[Rw] || (t = !1), this[qP](this.zoomToOverview.bind(this, t, i, !1))
        },
        _2i: function () {
            return this._8y._mqo ? this.zoomAnimation === n || null === this[zP] ? tq.ZOOM_ANIMATE : this.zoomAnimation : !1
        },
        zoomAt: function (t, i, e, s, h) {
            s === n && (s = this._2i()), i === n && (i = this[Pa] / 2), i = i || 0, e === n && (e = this.height / 2), e = e || 0;
            var r = this.scale;
            return t = Math.min(this.maxScale, Math.max(this[$P], r * t)), i = t * (this.tx - i) / r + i, e = t * (this.ty - e) / r + e, this[PP](i, e, t, s, h)
        },
        zoomOut: function (t, i, n, e) {
            return this.zoomAt(1 / this[NP], t, i, n, e)
        },
        zoomIn: function (t, i, n, e) {
            return this.zoomAt(this.scaleStep, t, i, n, e)
        },
        _5s: function () {
            return this[HP] || (this[HP] = new KY(this)), this[HP]
        },
        onAnimationStart: function () {
        },
        onAnimationEnd: function () {
        },
        isAnimating: function () {
            return this._panAnimation && this[HP]._eh()
        },
        enableInertia: !0,
        _mq8: function (t, i) {
            var n = this._5s();
            return n._fq(t || 0, i || 0)
        },
        stopAnimation: function () {
            this._panAnimation && this[HP]._lo()
        },
        getUI: function (t) {
            return Q(t) ? this._8y._3l(t) : this._8y._l0(t)
        },
        getUIByMouseEvent: function (t) {
            return this._8y._3l(t)
        },
        hitTest: function (t) {
            return this._8y[s_](t)
        },
        globalToLocal: function (t) {
            return this._8y._86(t)
        },
        toCanvas: function (t, i) {
            return this._8y._h4(t, i)
        },
        toLogical: function (t, i) {
            return Q(t) ? this._8y._$i(t) : this._8y._e2(t, i)
        },
        getElementByMouseEvent: function (t) {
            var i = this._8y._3l(t);
            return i ? i[Df] : void 0
        },
        getElement: function (t) {
            if (Q(t)) {
                var i = this._8y._3l(t);
                return i ? i.$data : null
            }
            return this[eM].getById(t)
        },
        invalidate: function () {
            this._8y[Dw]()
        },
        invalidateUI: function (t) {
            t[Pw](), this.invalidate()
        },
        invalidateElement: function (t) {
            this._8y._3r(t)
        },
        getUIBounds: function (t) {
            return this._8y._2v(t)
        },
        forEachVisibleUI: function (t, i) {
            return this._8y._43(t, i)
        },
        forEachReverseVisibleUI: function (t, i) {
            return this._8y._$z(t, i)
        },
        forEachUI: function (t, i) {
            return this._8y._dl(t, i)
        },
        forEachReverseUI: function (t, i) {
            return this._8y._46(t, i)
        },
        forEach: function (t, i) {
            return this[eM].forEach(t, i)
        },
        getElementByName: function (t) {
            var i;
            return this._k0Model[Kf](function (n) {
                return n[jo] == t ? (i = n, !1) : void 0
            }), i
        },
        focus: function (i) {
            if (i) {
                var n = t[sd] || t.pageXOffset, e = t[hd] || t[la];
                return this.canvasPanel[YP](), void t[ad](n, e)
            }
            this[tg][YP]()
        },
        callLater: function (t, i, n) {
            this._8y._di(t, i, n)
        },
        exportImage: function (t, i) {
            return uh(this, t, i)
        },
        setSelection: function (t) {
            return this._k0Model._selectionModel.set(t)
        },
        select: function (t) {
            return this._k0Model[_v][rd](t)
        },
        unselect: function (t) {
            return this[eM]._selectionModel[UP](t)
        },
        reverseSelect: function (t) {
            return this[eM]._selectionModel[WP](t)
        },
        selectAll: function () {
            fh(this)
        },
        unSelectAll: function () {
            this.selectionModel.clear()
        },
        unselectAll: function () {
            this.unSelectAll()
        },
        isSelected: function (t) {
            return this[eM][_v][e_](t)
        },
        sendToTop: function (t) {
            ke(this._k0Model, t)
        },
        sendToBottom: function (t) {
            Oe(this[eM], t)
        },
        moveElements: function (t, i, n) {
            var e = [], s = new iq;
            return l(t, function (t) {
                t instanceof wY ? e.push(t) : t instanceof EY && s.add(t)
            }), this._e5(e, i, n, s)
        },
        _e5: function (t, i, n, e) {
            if (0 == i && 0 == n || 0 == t[qh] && 0 == e[qh]) return !1;
            if (0 != t[qh]) {
                var s = this._4o(t);
                e = this._4m(s, e), l(s, function (t) {
                    var e = t.$location;
                    e ? t[XP](e.x + i, e.y + n) : t.setLocation(i, n)
                })
            }
            return e && e[qh] && this._e6(e, i, n), !0
        },
        _e6: function (t, i, n) {
            t.forEach(function (t) {
                t[Og](i, n)
            })
        },
        _4m: function (t, i) {
            return this.graphModel[Kf](function (n) {
                n instanceof EY && this[VP](n) && t[e_](n[Mu]) && t[e_](n.toAgent) && i.add(n)
            }, this), i
        },
        _4o: function (t) {
            var i = new iq;
            return l(t, function (t) {
                !this.isMovable(t), i.add(t), Te(t, i, this[ZP])
            }, this), i
        },
        reverseExpanded: function (t) {
            if (!t[GL]()) return !1;
            var i = t.getEdgeBundle(!0);
            return i ? i.reverseExpanded() !== !1 ? (this[Pw](), !0) : void 0 : !1
        },
        _38: null,
        _1e: null,
        beforeInteractionEvent: function (t) {
            return this._1e.beforeEvent(t)
        },
        onInteractionEvent: function (t) {
            this._1e[or](t)
        },
        addCustomInteraction: function (t) {
            this._38[KP](t)
        },
        removeCustomInteraction: function (t) {
            this._38[JP](t)
        },
        enableWheelZoom: !0,
        enableTooltip: !0,
        getTooltip: function (t) {
            return t.tooltip || t.name
        },
        updateViewport: function () {
            this._8y._6m()
        },
        destroy: function () {
            this._4e(new xq(this, cg, !0, this._hsed)), this[$p] = !0, $q(t, hP, this[sP]), this._38[cg](), this[G_] = new hs;
            var i = this[QP];
            this._8y._hs(), i && (i[tR] = "")
        },
        onPropertyChange: function (t, i, n) {
            this._$r[Yl](function (e) {
                e.kind == t && i[Hh](n, e)
            })
        },
        removeSelection: function () {
            var t = this[F_]._is;
            return t && 0 != t.length ? (t = t[Yh](), this[eM][Vh](t), t) : !1
        },
        removeSelectionByInteraction: function (t) {
            var i = this[F_][ld];
            return i && 0 != i[qh] ? void vz[iy](iR + i[qh], function () {
                var i = this[nR]();
                if (i) {
                    var n = new Ch(this, Ch[eR], t, i);
                    this[EP](n)
                }
            }, this) : !1
        },
        createShapeByInteraction: function (t, i, n, e) {
            var s = new Qz(i);
            i[qh] > 2 && s[Fu]();
            var h = this[dP](sR, s, n, e);
            this[xP](h, t);
            var r = new Ch(this, Ch[pP], t, h);
            return this.onInteractionEvent(r), h
        },
        createLineByInteraction: function (t, i, n, e) {
            var s = new Qz(i), h = this[dP](hR, s, n, e);
            h[yc](vz[rR][uA], null), h.setStyle(vz[rR].SHAPE_FILL_GRADIENT, null), h[yc](vz.Styles[_O], !0), this[xP](h, t);
            var r = new Ch(this, Ch[pP], t, h);
            return this[EP](r), h
        },
        createEdgeByInteraction: function (t, i, n, e) {
            var s = this[aR](oR, t, i);
            if (e) s._9l = e; else {
                var h = this[fR], r = this[Jc];
                this[uR] && (h = this[uR][GT] || h, r = this.interactionProperties[Jc] || r), h && (s.uiClass = h), r && (s[Jc] = r)
            }
            this[xP](s, n);
            var a = new Ch(this, Ch[pP], n, s);
            return this.onInteractionEvent(a), s
        },
        onElementCreated: function (t) {
            !t.parent && this[zM] && (t[Eu] = this.currentSubNetwork)
        },
        allowEmptyLabel: !1,
        startLabelEdit: function (t, i, n, e) {
            var s = this;
            n[cR](e.x, e.y, i[mo], this[mc](t, IY[XO]), function (n) {
                return s.onLabelEdit(t, i, n, i[Eu])
            })
        },
        onLabelEdit: function (t, i, n, e) {
            return n || this[_R] ? void (fE == i[jo] ? t.name = n : e._g1(i, n) === !1 && (i.data = n, this.invalidateElement(t))) : (vz.alert(dR), !1)
        },
        setInteractionMode: function (t, i) {
            this[lR] = t, this[uR] = i
        },
        upSubNetwork: function () {
            return this._3t ? this[zM] = ih(this._3t) : !1
        },
        _$t: !1,
        invalidateVisibility: function () {
            this._$t = !0, this[Pw]()
        },
        getBundleLabel: function (t) {
            var i = t[MT](!0);
            return i && i[vR] == t ? bR + i.bindableEdges[qh] : null
        },
        zoomAnimation: null,
        pauseRendering: function (t, i) {
            (this[gR] || i) && this._8y._6h(t)
        },
        _4v: n,
        enableRectangleSelectionByRightButton: !0
    }, K(YY[tr], {
        center: {
            get: function () {
                return this.toLogical(this[QP].clientWidth / 2, this.html[$_] / 2)
            }
        }, visibleFilter: {
            get: function () {
                return this._hfFilter
            }, set: function (t) {
                this._hfFilter = t, this[CT]()
            }
        }, topCanvas: {
            get: function () {
                return this._8y[ET]
            }
        }, propertyChangeDispatcher: {
            get: function () {
                return this._$r
            }
        }, listChangeDispatcher: {
            get: function () {
                return this._1o
            }
        }, dataPropertyChangeDispatcher: {
            get: function () {
                return this._9
            }
        }, selectionChangeDispatcher: {
            get: function () {
                return this._$q
            }
        }, parentChangeDispatcher: {
            get: function () {
                return this._19
            }
        }, childIndexChangeDispatcher: {
            get: function () {
                return this._$k
            }
        }, interactionDispatcher: {
            get: function () {
                return this._1e
            }
        }, cursor: {
            set: function (t) {
                this.canvasPanel.style.cursor = t || this._38.defaultCursor
            }, get: function () {
                return this.canvasPanel[ja].cursor
            }
        }, interactionMode: {
            get: function () {
                return this._38[yR]
            }, set: function (t) {
                var i = this[lR];
                i != t && (this._38[mR] = t, this._4e(new xq(this, lR, t, i)))
            }
        }, scaleStep: {
            get: function () {
                return this._8y._dy
            }, set: function (t) {
                this._8y._dy = t
            }
        }, maxScale: {
            get: function () {
                return this._8y._gw
            }, set: function (t) {
                this._8y._gw = t
            }
        }, minScale: {
            get: function () {
                return this._8y._gv
            }, set: function (t) {
                this._8y._gv = t
            }
        }, scale: {
            get: function () {
                return this._8y[lb]
            }, set: function (t) {
                return this._8y._scale = t
            }
        }, tx: {
            get: function () {
                return this._8y._tx
            }
        }, ty: {
            get: function () {
                return this._8y._ty
            }
        }, styles: {
            get: function () {
                return this._iw
            }, set: function (t) {
                this._iw = t
            }
        }, selectionModel: {
            get: function () {
                return this[eM][_v]
            }
        }, graphModel: {
            get: function () {
                return this[eM]
            }, set: function (t) {
                if (this._k0Model == t) return !1;
                var i = this[eM], n = new xq(this, G_, i, t);
                return this._1x(n) === !1 ? !1 : (null != i && (i[xR][Ym](this._$r, this), i[uv][Ym](this._1o, this), i[dv].removeListener(this._9, this), i[Ev].removeListener(this._19, this), i[bv].removeListener(this._$k, this), i[cv][Ym](this._$q, this)), this[eM] = t, this[eM] && (this._k0Model[xR][Yl](this._$r, this), this[eM][uv][Yl](this._1o, this), this._k0Model.dataChangeDispatcher[Yl](this._9, this), this[eM].parentChangeDispatcher.addListener(this._19, this), this._k0Model[bv][Yl](this._$k, this), this[eM][cv][Yl](this._$q, this)), this._8y && this._8y._ky(), void this._4e(n))
            }
        }, count: {
            get: function () {
                return this[eM].length
            }
        }, width: {
            get: function () {
                return this[QP].clientWidth
            }
        }, height: {
            get: function () {
                return this[QP].clientHeight
            }
        }, viewportBounds: {
            get: function () {
                return this._8y[pR]
            }
        }, bounds: {
            get: function () {
                return this._8y._47()
            }
        }, canvasPanel: {
            get: function () {
                return this._8y[eT]
            }
        }, html: {
            get: function () {
                return this._8y[eT][ym]
            }
        }, navigationType: {
            get: function () {
                return this._8y._6p
            }, set: function (t) {
                this._8y._3y(t)
            }
        }, _3t: {
            get: function () {
                return this._k0Model._3t
            }
        }, currentSubNetwork: {
            get: function () {
                return this._k0Model.currentSubNetwork
            }, set: function (t) {
                this[eM][zM] = t
            }
        }, limitedBounds: {
            get: function () {
                return this[ER]
            }, set: function (t) {
                return oq[xu](t, this[ER]) ? !1 : t ? void (this[ER] = new oq(t)) : void (this[ER] = null)
            }
        }, ratio: {
            get: function () {
                return this._8y[Ba]
            }
        }, delayedRendering: {
            get: function () {
                return this._4v === n ? tq[wR] : this._4v
            }, set: function (t) {
                t != this.delayedRendering && (this._4v = t, this.pauseRendering(!1, !0))
            }
        }, fullRefresh: {
            get: function () {
                return this._8y[TR]
            }, set: function (t) {
                this._8y.fullRefresh = t
            }
        }
    }), tq.DELAYED_RENDERING = !0, tq.GROUP_MIN_WIDTH = 60, tq[MR] = 60, nh[tr] = {
        initialize: function () {
            T(this, nh, Mk), this[gA]()
        }, _msl: function () {
            this._ls = new Qz, this[mA] = new GY(this._ls), this.shape.layoutByPath = !1, this.addChild(this[mA], 0), this[pm] = this.shape
        }, checkBody: function () {
            return this._5v() ? (this._2b = !0, this[mA] ? (this.shape[nT] = !0, this[pm] = this[mA]) : (this[kR](), DY[$L](this)), void (this[zm] && (this.image[nT] = !1))) : (this[zm] ? (this[zm][nT] = !0, this[pm] = this[zm]) : this._msb(), void (this[mA] && (this.shape[nT] = !1)))
        }, _5v: function () {
            return this[Df]._hu() && this[Df].expanded
        }, _ls: null, _2b: !0, _60: function () {
            this._1p = !0, this._2b = !0
        }, doValidate: function () {
            if (this._2b && this._5v()) {
                if (this._2b = !1, this.shape[HT](), this[Df][QM]) {
                    this[mA].data = this[Df][QM];
                    var t = this._2d();
                    return this[mA].offsetX = t.x + t[Pa] / 2, this[mA][ck] = t.y + t.height / 2, this[mA][Nw] = {
                        width: t[Pa],
                        height: t[Ra]
                    }, ls[tr][TC][Hh](this)
                }
                this[mA][uk] = 0, this[mA][ck] = 0;
                var i = this._8x(this[Df][JM]);
                this._ls[Da](), i instanceof oq ? Be(this._ls, i.x, i.y, i[Pa], i[Ra], i.rx, i.ry) : i instanceof Qi ? je(this._ls, i) : i instanceof tn && $e(this._ls, i), this._ls._6c = !0, this[mA][HT]()
            }
            return ls.prototype[TC].call(this)
        }, _6a: function (t, i, n, e, s) {
            switch (mr != typeof e && (e = -i / 2), mr != typeof s && (s = -n / 2), t) {
                case bz[OR]:
                    var h = Math.max(i, n) / 2;
                    return new Qi(e + i / 2, s + n / 2, h);
                case bz[SR]:
                    return new tn(e + i / 2, s + n / 2, i, n);
                default:
                    return new oq(e, s, i, n)
            }
        }, _2d: function () {
            return this._8x(null)
        }, _8x: function (t) {
            var i, e, s = this[mo], h = s[Fo], r = s[KM], a = tq[IR], o = tq[MR];
            if (r && (mr == typeof r[Pa] && (a = r[Pa]), mr == typeof r.height && (o = r[Ra]), i = r.x, e = r.y), !s[Gh]()) return this._6a(t, a, o, i, e);
            var f, u = this.$data._fe._is;
            (t == bz.GROUP_TYPE_CIRCLE || t == bz[SR]) && (f = []);
            for (var c, _, d, l, v = new oq, b = 0, g = u[qh]; g > b; b++) {
                var y = u[b];
                if (this[Zc][q_](y)) {
                    var m = this.graph[Kc](y);
                    m && (c = m.$x + m._ft.x, _ = m.$y + m._ft.y, d = m._ft[Pa], l = m._ft[Ra], v[sl](c, _, d, l), f && (f[Kh]({
                        x: c,
                        y: _
                    }), f[Kh]({x: c + d, y: _}), f[Kh]({x: c + d, y: _ + l}), f.push({x: c, y: _ + l})))
                }
            }
            var x = this[Df][wM];
            x ? x[UM] && (x[UM] = !1, i === n && (x.x = v.cx), e === n && (x.y = v.cy)) : x = this[Df][wM] = {
                x: v.cx,
                y: v.cy
            }, h && v[CC](h), mr == typeof i && i + x.x < v.x && (v[Pa] += v.x - (i + x.x), v.x = i + x.x, f && f.push({
                x: v.x,
                y: v.cy
            })), mr == typeof e && e + x.y < v.y && (v[Ra] += v.y - (v.y, e + x.y), v.y = e + x.y, f && f.push({
                x: v.cx,
                y: v.y
            }));
            var p, i = x.x, e = x.y;
            if (t == bz[OR]) {
                p = nn(f), p.cx -= i, p.cy -= e;
                var E = Math.max(a, o) / 2;
                return p.r < E && (p.cx += E - p.r, p.cy += E - p.r, p.r = E), p
            }
            return t == bz[SR] ? (p = en(f, v), p.cx -= i, p.cy -= e, p[Pa] < a && (p.cx += (a - p[Pa]) / 2, p.width = a), p.height < o && (p.cy += (o - p[Ra]) / 2, p[Ra] = o), p) : (p = v, v.width < a && (v.width = a), v[Ra] < o && (v.height = o), v.offset(-i, -e), p)
        }, _$y: function (t, i, n) {
            if (!this._5v()) return T(this, nh, AR, arguments);
            var e = this[vC].onBindingPropertyChange(this, t, i, n);
            return e = AY[xC](this, t, i, n) || e, e = RY[xC](this, t, i, n) || e, DY[xC](this, t, i, n) || e
        }
    }, E(nh, ls), vz[CR] = nh;
    var UY = {
        draw: function () {
        }
    };
    tq[O_] = null, tq[T_] = null;
    var WY = {position: Ew, "text-align": Cm}, XY = {padding: LR, transition: PR}, VY = {position: p_, display: RR};
    gi(DR, "opacity:0.7;vertical-align:middle;"), gi(".Q-Graph-Nav img:hover,img.hover", NR), JG || (gi(BR, jR + Nq($R) + FR), gi(GR, qR + Nq($R) + zR)), hh[tr] = {
        _mu8: function (t, i) {
            return t._hf == i ? !1 : (t._hf = i, void (t.style[HR] = i ? "visible" : m_))
        }, _3g: function (t, i) {
            var n = i / 2 - this._left[v_][$_] / 2 + $a;
            this[k_]._img[ja].top = n, this[YR][v_][ja].top = n, this._navPane.style.width = t + $a, this[b_][ja][Ra] = i + $a
        }, _mq3: function (t, i, n, e) {
            this._mu8(this[E_], t), this[UR](this[k_], i), this._mu8(this[WR], n), this[UR](this._right, e)
        }, _hs: function () {
            var t = this[b_].parentNode;
            t && t[pv](this._navPane)
        }, _ip: function () {
            var t = this[yu]._k0;
            if (t) {
                var i = t[kf];
                if (i.isEmpty()) return void this._mq3(!1, !1, !1, !1);
                var n = t[nM], e = n.y > i.y + 1, s = n.x > i.x + 1, h = n[Hr] < i[Hr] - 1, r = n.right < i[Yr] - 1;
                this[XR](e, s, h, r)
            }
        }
    };
    var ZY = 10;
    gi(VR, ZR), gi(KR, "background-color: #7E7E7E;" + Nq($R) + ": background-color 0.2s linear;"), gi(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"), gi(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"), gi(".Q-Graph-ScrollBar--V.Both", JR), gi(".Q-Graph-ScrollBar--H.Both", QR), JG || (gi(tD, jR + Nq($R) + iD), gi(".Q-Graph:hover .Q-Graph-ScrollPane", qR + Nq($R) + ":opacity 0.3s linear;")), rh[tr] = {
        _hs: function () {
            this[nD]._hs(), this._horizontalDragSupport._hs(), delete this._verticalDragSupport, delete this[eD], this._lq[ym] && this._lq[ym][pv](this._lq)
        }, _lq: null, _msj: null, _82: null, init: function (t) {
            var n = i.createElement(o_);
            n[dr] = sD, li(n, {width: w_, height: w_, position: p_});
            var e = i.createElement(o_);
            e[dr] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
            var s = i[Ha](o_);
            s[dr] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H", n[Ov](e), n[Ov](s), t[Ov](n), this._lq = n, this._82 = s, this._msj = e, s.isH = !0;
            var h = this, r = {
                onstart: function (t, i) {
                    i[lr].add(B_)
                }, onrelease: function (t, i) {
                    i.classList.remove(B_)
                }, ondrag: function (t, i) {
                    var n = h[yu]._k0;
                    if (n) {
                        var e = i.isH, s = e ? t.dx : t.dy;
                        if (s && i.scale) {
                            var r = n[rf] / i[rf];
                            e ? n.translate(-r * s, 0) : n[Qa](0, -r * s), vz[oP](t)
                        }
                    }
                }, enddrag: function (t, i) {
                    var n = h._msaseCanvas._k0;
                    if (n && n[hD]) {
                        var e = i.isH, s = e ? t.vx : t.vy;
                        if (Math.abs(s) > .1) {
                            var r = n[rf] / i[rf];
                            s *= r, e ? n[j_](-s, 0) : n[j_](0, -s)
                        }
                    }
                }
            };
            this[nD] = new mi(e, r), this._horizontalDragSupport = new mi(s, r)
        }, _3g: function () {
            var t = this[yu]._k0;
            t && t[qP](this._ip[cr](this))
        }, _ip: function () {
            var t = this[yu]._k0;
            if (t) {
                var i = t[kf];
                if (i[Nf]()) return this._50(!1), void this._52(!1);
                var n = t.viewportBounds, e = t[Pa], s = t[Ra], h = t[rf], r = 1 / h,
                    a = n.x > i.x + r || n[Yr] < i[Yr] - r, o = n.y > i.y + r || n.bottom < i[Hr] - r, f = a && o;
                f ? (R(this[rD], aD), R(this._82, aD)) : (D(this[rD], aD), D(this._82, aD)), this._50(a, n, i, f ? e - ZY : e), this._52(o, n, i, f ? s - ZY : s)
            }
        }, _50: function (t, i, n, e) {
            if (!t) return this._82[ja][fw] = x_, void (this._82[rf] = 0);
            var s = Math.min(i.x, n.x), h = Math.max(i.right, n.right), r = h - s, a = e / r;
            this._82.scale = a, this._82[ja][Go] = parseInt((i.x - s) * a) + $a, this._82.style.right = parseInt((h - i[Yr]) * a) + $a, this._82[ja].display = ""
        }, _52: function (t, i, n, e) {
            if (!t) return this[rD][ja][fw] = x_, void (this[rD][rf] = 0);
            var s = Math.min(i.y, n.y), h = Math.max(i.bottom, n[Hr]), r = h - s, a = e / r;
            this[rD][rf] = a, this._msj.style.top = parseInt((i.y - s) * a) + $a, this._msj.style[Hr] = parseInt((h - i[Hr]) * a) + $a, this[rD].style[fw] = ""
        }
    }, ah.prototype = {
        shape: null, initialize: function () {
            T(this, ah, Mk), this[ZL](), jY[$L](this)
        }, _msb: function () {
            this[zm] = new zY(this.$data[BM]), this.addChild(this[zm], 0), this[pm] = this[zm]
        }, invalidateShape: function () {
            this.image.invalidateData(), this.invalidateRender()
        }, _$y: function (t, i, n) {
            var e = this[vC][xC](this, t, i, n);
            return e = AY[xC](this, t, i, n) || e, jY[xC](this, t, i, n) || e
        }, doValidate: function () {
            this[pm] && (this[zm].data = this[mo][BM], this[pm][df] = null != this._31, this[pm][PM] = this._31);
            var t = this[Df].$location, i = 0, n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[LC] = !0), this.$x = i, this.$y = n, FY.prototype[TC][Hh](this) || e
        }
    }, E(ah, FY), K(ah[tr], {
        path: {
            get: function () {
                return this.data.path
            }
        }, length: {
            get: function () {
                return this[mo].length
            }
        }
    }), ah[tr][Na] = function (t, i, n) {
        var e = this._hg(t, i), s = this[mo], h = En(s.path, e.x, e.y, n);
        h && (s[oD] = h)
    }, oh[tr] = {
        _m3: function () {
            this._ik[ja].visibility = nT
        }, _it: function () {
            this._ik.style[HR] = m_
        }, clear: function () {
            this._9j.clear(), this[Dw]()
        }, contains: function (t) {
            return t instanceof Object && t.id && (t = t.id), this._9j.containsById(t)
        }, _5g: function (t) {
            mY.setStyle(this._ik, d_, t ? tT + t[hu](Ar) + ")" : "")
        }, addDrawable: function (t, i) {
            if (i) {
                var n = {id: ++BG, drawable: t, scope: i};
                return this._9j.add(n), n
            }
            return t.id || (t.id = ++BG), this._9j.add(t), t
        }, removeDrawable: function (t) {
            return t.id ? void this._9j[Vh](t) : this._9j[zd](t)
        }, _9j: null, invalidate: function () {
            this[Dw]()
        }, _mue: function () {
            this[yu]._6c || this._ja()
        }, _id: function (t, i) {
            this._ik[Xa](t, i)
        }, _ja: function () {
            var t = this[yu][lb], i = this.g;
            i._ka(), i[Ja](), this._msaseCanvas._9p(i);
            for (var n = this._9j._is, e = 0, s = n.length; s > e; e++)i[Ja](), i[Ix](), this._fr(i, n[e], t), i[ro]();
            i.restore()
        }, _fr: function (t, i, n) {
            return i instanceof Function ? void i(t, n) : void (i[fD] instanceof Function && i[zl] && i[fD].call(i[zl], t, n))
        }
    }, tq[uD] = !0;
    var KY = function (t) {
        this._k0 = t
    };
    tq.ANIMATION_MAXTIME = 600, tq.ANIMATION_TYPE = cz.easeOut, KY.prototype = {
        _k0: null,
        _mq: .001,
        _eb: null,
        _mu7: function (t) {
            return t > 1 ? 1 : -1 > t ? -1 : t
        },
        _fq: function (t, i, n) {
            this._lo(), t *= .6, i *= .6, t = this[cD](t), i = this[cD](i);
            var e = Math.sqrt(t * t + i * i);
            if (.01 > e) return !1;
            var s = Math.min(tq.ANIMATION_MAXTIME, e / this._mq);
            this._speedX = t, this._speedY = i, this._mqX = t / s, this[_D] = i / s, this._7d(this._61, s, cz[dD], n)
        },
        _7d: function (t, i, n, e, s) {
            this._eb && this._eb._lo(), s && (this[lD] = !0, this._k0[vD](!0)), this._4y(), this._eb = new dz(t, this, i, n), this._eb._7f = this._7f.bind(this), this._eb._kc(e)
        },
        _4y: function () {
            this._k0[bD]()
        },
        _7f: function () {
            this[lD] && (this._k0[vD](!1), delete this[lD]), this._k0.onAnimationEnd()
        },
        _eh: function () {
            return this._eb && this._eb._eh()
        },
        _61: function (t, i) {
            if (0 != t) {
                var n = this[gD] * i - .5 * this[yD] * i * i, e = this._speedY * i - .5 * this._mqY * i * i;
                this[gD] -= this[yD] * i, this[mD] -= this._mqY * i, this._k0.translate(n, e)
            }
        },
        _lo: function () {
            this._eb && this._eb._lo()
        },
        _ie: function (t) {
            var i = this._fromTX + (this[xD] - this[pD]) * t, n = this._fromTY + (this[ED] - this._fromTY) * t,
                e = this[wD] + (this._toScale - this._fromScale) * t;
            this._k0[PP](i, n, e, this.toInt)
        },
        _kd: function (t, i, n, e, s) {
            this._lo();
            var h = this._k0, r = h[rf];
            if (0 >= n && (n = r), t != h.tx || i != h.ty || n != r) {
                var a, o, f;
                e instanceof Object && (a = e[TD], o = e.maxTime, f = e.animationType);
                var u = h.tx, c = h.ty;
                if (!a) if (n != r) {
                    var _ = n > r ? n / r : r / n;
                    _ = Math.log(_) / Math.log(1.3), a = 60 * _
                } else {
                    var d = hq(t, i, u, c);
                    a = d / 2
                }
                o = o || tq.ANIMATION_MAXTIME, f = f || tq[MD], a = Math.min(o, a), this[pD] = u, this[kD] = c, this[wD] = r, this[xD] = t, this._toTY = i, this._toScale = n, this._7d(this._ie, a, f, s, n != r)
            }
        }
    }, tq[OD] = 8, tq[SD] = 4, tq[ID] = 30, tq[AD] = 20;
    var JY = Math.PI / 4;
    ch[tr] = {
        onElementRemoved: function (t, i) {
            this.element && (t == this.element || $(t) && x(t, this[CD])) && this[cg](i)
        }, onClear: function (t) {
            this[CD] && this.destroy(t)
        }, destroy: function () {
            delete this[CD], this.removeDrawable()
        }, invalidate: function () {
            this[H_][Pw]()
        }, removeDrawable: function () {
            this[LD] && (this[H_][PD](this[LD]), delete this[LD], this[Pw]())
        }, addDrawable: function () {
            this._fbId || (this[LD] = this[H_][RD](this[DD], this).id, this[Pw]())
        }, doDraw: function () {
        }, escapable: !0, onkeydown: function (t, i) {
            this[ND] && 27 == t.keyCode && (q(t), this[cg](i))
        }
    }, vz[BD] = ch, _h.prototype = {
        defaultCursor: W_, getInteractionInstances: function (t) {
            if (!this[Y_]) return null;
            for (var i = [], n = 0, e = this[Y_].length; e > n; n++) {
                var s = this[Y_][n];
                s instanceof Function ? i[Kh](new s(t)) : s instanceof Object && i[Kh](s)
            }
            return i
        }
    }, dh[tr] = {
        _e1: null, _jg: null, destroy: function () {
            T(this, dh, cg, arguments), delete this._jg, delete this._9g, delete this._e1
        }, doDraw: function (t) {
            var i = this[vo];
            i && (i[Kf](function (i) {
                this[jD](t, i)
            }, this), this[$D] && t.closePath(), this[FD](t))
        }, styleDraw: function (t) {
            var i = lh(this.graph[uR], this.getDefaultDrawStyles(this.graph));
            i[xo] && (t[xo] = i[xo], i[wx] && (t[wx] = i[wx]), i[I_] && (t[I_] = i[I_]), i.lineDash && (t[$f] = i.lineDash, t.lineDashOffset = i.lineDashOffset || 0), t[A_] = i[A_], t.stroke()), i[Om] && (t[Om] = i[Om], t[Im]())
        }, drawPoint: function (t, i, n) {
            if (n) return void t[Gu](i.x, i.y);
            if (vz[Er](i)) {
                var e = i[0], s = i[1];
                t.quadraticCurveTo(e.x, e.y, s.x, s.y)
            } else t[$u](i.x, i.y)
        }, setCurrentPoint: function (t) {
            this[GD] = t
        }, addPoint: function (t) {
            this._jg || (this._jg = [], this[RD]()), this._jg.push(t), this[Pw]()
        }
    }, K(dh.prototype, {
        currentPoint: {
            get: function () {
                return this._9g
            }, set: function (t) {
                this._9g = t, this.invalidate()
            }
        }, prevPoint: {
            get: function () {
                return this._jg && this._jg.length ? this._jg[this._jg[qh] - 1] : null
            }
        }, points: {
            get: function () {
                return this._9g && this._jg && this._jg[qh] ? this._jg[Wh](this._9g) : void 0
            }
        }
    }), E(dh, ch), vz[qD] = dh, vh[tr] = {
        destroy: function () {
            T(this, vh, cg, arguments), delete this[zD], delete this.start
        }, doDraw: function (t, i) {
            return this._jg ? this._jg.length <= 1 ? yh.prototype[DD].call(this, t, i) : void T(this, vh, DD, arguments) : void 0
        }, ondblclick: function (t, i) {
            this.destroy(i)
        }, finish: function (t, i, n) {
            if (this._kcTime && Date.now() - this[zD] < 200) return void this.destroy(i);
            var e;
            this._jg && this._jg[qh] >= 2 && (this._jg.shift(), e = new iq, l(this._jg, function (t) {
                if (vz[Er](t)) {
                    var i = t[0], n = t[1];
                    e.add(new Kz(bz[cx], [i.x, i.y, n.x, n.y]))
                } else e.add(new Kz(bz[ux], [t.x, t.y]))
            }, this)), i[HD](this[YD], n, t, e), this.destroy(i)
        }, onstart: function (t, i) {
            if (2 != t[Fb]) {
                var n = t[Qb]();
                if (this[YD]) {
                    var e = n instanceof wY && i.canLinkTo(n, this[YD]);
                    return e ? void this[UD](t, i, n) : void this[Na](this[WD](t))
                }
                var s = n instanceof wY && i[SP](n);
                s && (this[YD] = n, this[zD] = Date.now(), this.addPoint(this.toLogicalPoint(t)))
            }
        }, onmousemove: function (t) {
            this[YD] && this[XD](this[WD](t))
        }, toLogicalPoint: function (t) {
            return this.graph.toLogical(t)
        }, startdrag: function (t) {
            this[YD] && (t[VD] = !0)
        }, ondrag: function (t) {
            this[YD] && this[XD](this[WD](t))
        }, enddrag: function (t, i) {
            if (this[YD]) {
                var n = t[Qb](), e = n instanceof wY && i[IP](n, this.start);
                e && this[UD](t, i, n)
            }
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: this[Zc][ZD](IY[EA]),
                strokeStyle: this[Zc][ZD](IY[US]),
                lineDash: this[Zc].getDefaultStyle(IY.EDGE_LINE_DASH),
                lineDashOffset: this[Zc][ZD](IY[OA]),
                lineCap: this.graph[ZD](IY.LINE_CAP),
                lineJoin: this.graph.getDefaultStyle(IY[KD])
            }
        }
    }, E(vh, dh), vz.CreateEdgeInteraction = vh, bh.prototype = {
        getDefaultDrawStyles: function () {
            return {lineWidth: this[Zc][ZD](IY[oA]), strokeStyle: this[Zc][ZD](IY[fA]), fillStyle: this[Zc][ZD](IY[uA])}
        }, finish: function (t, i) {
            if (this._jg && this._jg[qh]) {
                var n = this._jg, e = 0, s = 0, h = 0;
                n[Kf](function (t) {
                    return vz.isArray(t) ? void t[Kf](function () {
                        e += t.x, s += t.y, h++
                    }) : (e += t.x, s += t.y, void h++)
                }), e /= h, s /= h;
                var r = [];
                n.forEach(function (t, i) {
                    if (0 == i) return void r[Kh](new Kz(bz[JD], [t.x - e, t.y - s]));
                    if (vz[Er](t)) {
                        var n = t[0], h = t[1];
                        r[Kh](new Kz(bz[cx], [n.x - e, n.y - s, h.x - e, h.y - s]))
                    } else r.push(new Kz(bz[ux], [t.x - e, t.y - s]))
                }), this[Ha](t, r, e, s), this[cg](i)
            }
        }, startdrag: function (t) {
            t[VD] = !0
        }, createElement: function (t, i, n, e) {
            return this[Zc].createShapeByInteraction(t, i, n, e)
        }, onstart: function (t, i) {
            var n = i[hT](t);
            this._e1 = n, this[Na](n)
        }, onmousemove: function (t, i) {
            this._e1 && (this[GD] = i.toLogical(t))
        }, ondblclick: function (t, i) {
            if (this._e1) {
                if (this._jg.length < 3) return void this[cg](i);
                delete this._jg[this._jg[qh] - 1], this[UD](t, i)
            }
        }, isClosePath: !0
    }, E(bh, dh), vz[QD] = bh, gh[tr] = {
        isClosePath: !1, createElement: function (t, i, n, e) {
            return this.graph[tN](t, i, n, e)
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: HY[IY.SHAPE_STROKE],
                strokeStyle: HY[IY.SHAPE_STROKE_STYLE],
                lineDash: this[Zc][ZD](IY.SHAPE_LINE_DASH),
                lineDashOffset: this[Zc][ZD](IY.SHAPE_LINE_DASH_OFFSET),
                lineCap: this[Zc].getDefaultStyle(IY[lA]),
                lineJoin: this.graph.getDefaultStyle(IY[KD])
            }
        }
    }, E(gh, bh), vz[iN] = gh, yh[tr] = {
        destroy: function (t) {
            T(this, yh, cg, arguments), t[nN] = "", this[YD] = null
        }, doDraw: function (t) {
            if (this.start && this[GD]) {
                var i, n;
                this.graph[uR] && (i = this[Zc][uR].uiClass, n = this[Zc][uR][Jc]), i = i || this[Zc][fR] || vz[eN], n = n || this[Zc].edgeType;
                var e = i[XL] || vz[eN][XL], s = this.graph.getUI(this.start);
                s && s[Qc] && (s = s[Qc][Cm], e(t, s, this[GD], n), this[FD](t))
            }
        }, canLinkFrom: function (t, i) {
            return t instanceof wY && i[SP](t)
        }, canLinkTo: function (t, i) {
            return t instanceof wY && i[IP](t, this[YD])
        }, startdrag: function (t, i) {
            var n = t[Qb]();
            this[SP](n, i) && (t[VD] = !0, this[YD] = n, i.cursor = kg, this[RD]())
        }, ondrag: function (t, i) {
            this[YD] && (vz[oP](t), this[GD] = i[hT](t), this.invalidate())
        }, enddrag: function (t, i) {
            if (this[YD]) {
                this.invalidate();
                var n = t.getData();
                this[IP](n, i) && i[HD](this[YD], n, t), this.destroy(i)
            }
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: this[Zc][ZD](IY[EA]),
                strokeStyle: this[Zc].getDefaultStyle(IY[US]),
                lineDash: this[Zc][ZD](IY[JS]),
                lineDashOffset: this[Zc].getDefaultStyle(IY[OA]),
                lineCap: this.graph[ZD](IY.LINE_CAP),
                lineJoin: this.graph[ZD](IY[KD])
            }
        }
    }, E(yh, dh), vz[sN] = yh, tq[hN] = !1, Th[tr] = {
        html: null, createHTML: function () {
            var t = i[Ha](rN);
            t[dr] = aN, t[ja][Qm] = Ew, t[ja][io] = Cm, t[ja][ry] = oN, t[ja][Fo] = fN, t[ja][uN] = "0px 0px 10px rgba(40, 85, 184, 0.75)", t[ja].display = x_, t.style[pw] = m_;
            var n = this;
            return t[cN] = function (t) {
                n[_N](t)
            }, t.onkeydown = function (t) {
                return 27 == t.keyCode ? void n[dN]() : void 0
            }, t[lN] = function (i) {
                if (13 == i.keyCode || 10 == i[vN]) {
                    if (i[Tr](), i[kE] || i[ma] || i[ME]) return Eh(t, so), void n[_N](i);
                    n.stopEdit()
                }
            }, i.body[Ov](t), t
        }, setText: function (t, i) {
            this.html[_c] = t || "", i && (this[QP][ja][K_] = i), wh(this[QP]), this[bN](this.html)
        }, onSizeChange: function (t) {
            var i = (t.offsetWidth, t[V_], ph(t));
            return t[ja][Pa] = i[Pa] + 30 + $a, t.style[Ra] = i[Ra] + 10 + $a, i
        }, onValueChange: function (t) {
            var i = t.target;
            this[bN](i), i.style[Go] = i.x - i.offsetWidth / 2 + $a
        }, onClickOnWindow: function (t) {
            t[dc] != this[QP] && (tq[hN] ? this[gN]() : this[dN]())
        }, startEdit: function (i, n, e, s, h) {
            this.html || (this.html = this[yN]()), this[mN] || (this[mN] = function (t) {
                this[xN](t)
            }[cr](this)), t[Rv](Tb, this.stopEditWhenClickOnWindow, !0), this[vc] = h, this.html.x = i, this[QP].y = n, this.html.style.display = RR, xh(this[QP], i, n), this[pN](e, s || 10), xh(this[QP], i, n)
        }, isEditing: function () {
            return x_ != this.html[ja][fw]
        }, cancelEdit: function () {
            this.stopEdit(!0)
        }, stopEdit: function (i) {
            if (this[EN]()) {
                t.removeEventListener(Tb, this.stopEditWhenClickOnWindow);
                var n = this[QP].value;
                if (!i && this[vc] && this[vc](n) === !1) return !1;
                this[QP][ja][fw] = x_, this.html[_c] = null, this[vc] = null
            }
        }, destroy: function () {
            this[QP] && i[pm][pv](this[QP])
        }
    }, vz.LabelEditor = Th;
    var QY = function (t) {
        this[Zc] = t
    };
    QY.prototype = {
        destroy: function (t) {
            t.labelEditor && (t[wN][cg](), delete t[wN])
        }, ondblclick: function (t, i) {
            var n = t[Qb]();
            if (n) {
                if (n.dblclickable !== !1) {
                    if (i[HL] && i[TN](n)) {
                        var e = i[s_](t);
                        if (e instanceof qY && e[HL] !== !1) {
                            var s = i[wN];
                            s || (i.labelEditor = s = new Th);
                            var h = e[lo]();
                            return h = i.toCanvas(h.x + h[Pa] / 2, h.y + h[Ra] / 2), h = mh(h.x, h.y, i.html), void i[MN](n, e, s, h)
                        }
                    }
                    var r = n instanceof kY, a = n instanceof EY && n.hasEdgeBundle();
                    return n._42 && (xi(t) || !r && !a) ? void (i.currentSubNetwork = n) : r ? (n.expanded = !n[qT], void this[Zc][EP](new Ch(this.graph, Ch.GROUP_EXPANDED, t, n))) : void (a && this[Zc].reverseExpanded(n) && this[Zc][EP](new Ch(this[Zc], Ch[kN], t, n)))
                }
            } else {
                if (i[zM]) return void i[ON]();
                if (i[SN]) {
                    var o = i.resetScale || 1;
                    Math.abs(i[rf] - o) < 1e-4 ? i.zoomToOverview() : i[IN](o)
                }
            }
        }
    };
    var tU = function (t) {
        this[Zc] = t
    };
    tU.prototype = {
        onkeydown: function (t, i) {
            if (i[HL]) {
                var n = t[vN];
                if (8 == n || 46 == n || 127 == n) return i[AN](t), void F(t);
                if (xi(t)) {
                    if (67 == n); else if (86 == n); else if (90 == n); else if (89 != n) return;
                    F(t)
                }
            }
        }
    }, vz[CN] = tU;
    var iU = function (t) {
        this[Zc] = t
    };
    iU.prototype = {
        onkeydown: function (i, n) {
            if (i[ya] && 83 == i[vN]) {
                var e = n[LN](n[rf], n[nM]), s = t[ka](), h = s[PN];
                h[RN] = DN + e.width + NN + e[Ra];
                var r = h[Ha](u_);
                r.src = e.data, h.body[Ov](r), F(i)
            }
        }
    };
    var nU = function (t) {
        this.graph = t
    };
    nU[tr] = {
        destroy: function () {
            delete this[BN], delete this[jN]
        }, _2k: function (t) {
            var i = new iq;
            return t[F_][Kf](function (n) {
                t[VP](n) && t.isVisible(n) && i.add(n)
            }, this), i
        }, onstart: function (t, i) {
            this[jN] && this[cg](i)
        }, startdrag: function (t, i) {
            if (!(t[VD] || t[$r] && 1 != t[$r].length)) {
                var n = t[Qb]();
                if (!n || !i.isSelected(n) || !i[VP](n)) return void this.destroy(i);
                t[VD] = !0, this[jN] = n, this.draggingElements = this._2k(i);
                var e = new Ch(i, Ch.ELEMENT_MOVE_START, t, this[jN], this[BN][ld]);
                return i[$N](e) === !1 ? void this[cg](i) : void i.onInteractionEvent(e)
            }
        }, ondrag: function (t, i) {
            if (this[jN]) {
                if (t[$r] && 1 != t[$r][qh]) return void this.enddrag(t, i);
                q(t);
                var n = t.dx, e = t.dy, s = i[rf];
                n /= s, e /= s;
                var h = new Ch(i, Ch[FN], t, this[jN], this.draggingElements.datas);
                i[GN](this[BN][ld], n, e), i[EP](h)
            }
        }, enddrag: function (t, i) {
            if (this.currentDraggingElement) {
                if (this.draggingElements && this[BN][qh]) {
                    if (t[ME]) {
                        var n, e = i[hT](t), s = e.x, h = e.y;
                        i[qN](function (t) {
                            var i = t.data;
                            if (!this[BN][e_](i) && t[kT].intersectsPoint(s - t.x, h - t.y) && t[s_](s, h, 1)) {
                                if (i instanceof vz.Edge) {
                                    if (!i[a_]) return;
                                    for (var e = this.draggingElements[qh]; e-- > 0;) {
                                        var r = this[BN].get(e);
                                        if (r instanceof vz.Node && r[zN](i)) return
                                    }
                                    return n = i, !1
                                }
                                return (i[a_] || i._hu() && i[qT]) && (n = i), !1
                            }
                        }, this), n && this[BN][Kf](function (t) {
                            for (var i = t[Eu]; i;) {
                                if (this[BN][e_](i)) return;
                                i = i[Eu]
                            }
                            t[Eu] = n
                        }, this)
                    }
                    var r = new Ch(i, Ch[HN], t, this[jN], this[BN][ld]);
                    i[EP](r)
                }
                this.destroy(i)
            }
        }, onpinch: function (t, i) {
            this[jN] && this[Kb](t, i)
        }, step: 1, onkeydown: function (t, i) {
            if (xi(t)) {
                var n, e;
                if (37 == t.keyCode ? n = -1 : 39 == t.keyCode ? n = 1 : 38 == t[vN] ? e = -1 : 40 == t.keyCode && (e = 1), n || e) {
                    var s = this._2k(i).datas;
                    if (0 != s.length) {
                        F(t), n = n || 0, e = e || 0;
                        var h = this.step / i[rf], r = new Ch(i, Ch[HN], t, null, s);
                        i[GN](s, n * h, e * h), i[EP](r)
                    }
                }
            }
        }
    };
    var eU = function (t) {
        this[Zc] = t
    };
    eU[tr] = {
        onkeydown: function (t, i) {
            xi(t) || (37 == t[vN] ? (this._54(i, 1, 0), F(t)) : 39 == t[vN] ? (this._54(i, -1, 0), F(t)) : 38 == t.keyCode ? (this._54(i, 0, 1), F(t)) : 40 == t.keyCode && (this._54(i, 0, -1), F(t)))
        }, _54: function (t, i, n) {
            t[j_](i, n)
        }, onstart: function (t, i) {
            this._kc && this.destroy(i)
        }, _kc: !1, startdrag: function (t, i) {
            if (!t.responded) {
                t.responded = !0, this._kc = !0, i[nN] = hz;
                var n = new Ch(i, Ch[YN], t);
                i[EP](n)
            }
        }, ondrag: function (t, i) {
            this._kc && i[Qa](t.dx || 0, t.dy || 0)
        }, enddrag: function (t, i) {
            if (this._kc) {
                if (i[hD] !== !1) {
                    var n = t.vx, e = t.vy;
                    (Math.abs(n) > .1 || Math.abs(e) > .1) && i[j_](n, e)
                }
                this[cg](i);
                var s = new Ch(i, Ch.PAN_END, t);
                i.onInteractionEvent(s)
            }
        }, startpinch: function (t, i) {
            i.pauseRendering(!0)
        }, onpinch: function (t, i) {
            this._kc = !0;
            var n = t[UN];
            if (n) {
                var e = i[DP](t[Cm]);
                i[WN](n, e.x, e.y, !1)
            }
        }, endpinch: function (t, i) {
            i.pauseRendering(!1)
        }, destroy: function (t) {
            this._kc = !1, t.cursor = null
        }
    }, Mh.prototype = {
        _1g: function (t) {
            this[CD] && t.source == this.element && this.graph[qP](function () {
                this._ip()
            }, this)
        }, _7: function () {
            this[XN] || (this._lrPropertyChangeListing = !0, this.graph[VN].addListener(this._1g, this))
        }, _5: function () {
            this[XN] = !1, this[Zc][VN][Ym](this._1g, this)
        }, onElementRemoved: function (t, i) {
            this[CD] && (t == this[CD] || Array[Er](t) && x(t, this[CD])) && this.destroy(i)
        }, onClear: function (t) {
            this[CD] && this.destroy(t)
        }, destroy: function () {
            this[Zc].cursor = null, this[CD] && delete this[CD][ZN], this[KN] = !1, delete this.element, delete this._9l, delete this._9g, delete this[JN], this._7m(), this._5()
        }, _7m: function () {
            this[QN] && (this[H_][PD](this[QN]), delete this[QN], this.topCanvas[Pw]())
        }, _mqx: function () {
            this[QN] && this[H_][e_](this.drawLineId) || (this[QN] = this[H_][RD](this[tB], this).id, this[H_][Pw]())
        }, _9l: null, _5w: function (t) {
            this._9l = t, this[Pw]()
        }, _es: function (t, i, n) {
            t[Ix](), i[iB] ? t.rect(i.x - this[od] / n, i.y - this[od] / n, this.handlerSize / n * 2, this[od] / n * 2) : t.arc(i.x, i.y, this[od] / n, 0, 2 * Math.PI, !1), t.lineWidth = 1 / n, t[$f] = [], t[A_] = P_, t[Om] = "rgba(255, 255, 0, 0.8)", t[R_](), t[Im]()
        }, _fb: function (t, i, n, e) {
            e ? t[Gu](i, n) : t[$u](i, n)
        }, drawLine: function (t, i) {
            if (this._9l && this._9l[qh]) {
                t[Ja]();
                var n = this[CD] instanceof TY;
                n && (t.translate(this.element.x, this[CD].y), this[CD][Mo] && t[Mo](this[CD][Mo]));
                var e, s = [];
                t[Ix](), this._9l[qh], this._9l.forEach(function (i) {
                    if (i[To] != bz.SEGMENT_CLOSE) for (var n = 0, h = i[vo]; n + 1 < h.length;) {
                        var r = h[n], a = h[n + 1], o = {x: r, y: a, isControlPoint: this._7r(i, n)};
                        s[Kh](o), this._fb(t, o.x, o.y, null == e), e = o, n += 2
                    }
                }, this), t.lineWidth = 1 / i, t.lineDash = [2 / i, 3 / i], t.strokeStyle = nB, t[R_](), s[Kf](function (n) {
                    this._es(t, n, i)
                }, this), t[ro]()
            }
        }, invalidate: function () {
            this[H_][Pw]()
        }, _3v: function (t) {
            if (this[CD] != t && (this.element && this[cg](), t && this[TN](t))) {
                var i = this._5p(t, this.graph);
                i && (this[CD] = t, t[ZN] = !0, this._muanEdit = !0, this._5w(i), this._7(), this[eB]())
            }
        }, _ip: function () {
            if (this.drawLineId && this.element) {
                var t = this._5p(this[CD], this.graph);
                return t ? void this._5w(t) : void this[cg](this[Zc])
            }
        }, _5p: function (t, i) {
            if (i.isEditable(t)) {
                var n = t[oD] || [];
                n instanceof iq && (n = n[Wc]());
                var e = i[Kc](t);
                if (e instanceof vz[eN]) {
                    var s = t[Mu], h = t.toAgent, r = i[Kc](s), a = i.getUI(h), o = r.bodyBounds[Zh](), f = a[Qc][Zh](),
                        u = o.center, c = f[Cm], _ = e[mc](vz[rR].EDGE_FROM_OFFSET), d = e[mc](vz[rR][iI]);
                    _ && (u.x += _.x || 0, u.y += _.y || 0), d && (c.x += d.x || 0, c.y += d.y || 0), n[Uh](0, 0, new vz[vx](bz[JD], [u.x, u.y])), n[Kh](new vz[vx](bz[JD], [c.x, c.y]))
                }
                return n
            }
        }, _hg: function (t, i) {
            t -= this[CD].x, i -= this[CD].y;
            var n = {x: t, y: i};
            return this.element[Mo] && $s(n, -this[CD][Mo]), n
        }, onclick: function (t, i) {
            if (i[HL] && t[kE] && this[CD]) {
                var n = this._ff(t, i);
                if (n && n[iB]) return void this[CD][sB](n.index);
                if (this[CD] == t[Qb]()) {
                    var e = i[hT](t), s = i[Kc](this.element);
                    s[Na](e.x, e.y, this.handlerSize || 2)
                }
            }
        }, isEditable: function (t) {
            return this.graph.isEditable(t) && (t instanceof TY || t instanceof EY && (!t[bd]() || t[Uc]()))
        }, ondblclick: function (t, i) {
            if (!i.editable) return void (this[CD] && this[cg](i));
            var n = t.getData();
            return !n || n == this[CD] || n[ZN] ? void this[cg](i) : void this._3v(n)
        }, onstart: function (t, i) {
            if (this[KN] = !0, !i[HL]) return void (this[CD] && this[cg](i));
            if (!t[VD]) {
                if (this[CD] && this._ff(t, i)) return void (t[VD] = !0);
                var n = t[Qb]();
                return n && i.isResizable(n) && n instanceof TY ? void (this[CD] && n != this[CD] && this[cg]()) : void this._3v(n)
            }
        }, onrelease: function () {
            this._mousePressed = !1, this[CD] && (this._muanEdit = !0)
        }, _9g: null, _ff: function (t, i) {
            var n = i[hT](t);
            this.element instanceof TY && (n = this._hg(n.x, n.y));
            var e, s = i[rf], h = this[od] / s, r = this._9l, a = r[qh], o = this.element instanceof vz[oR];
            return r[Kf](function (t, s) {
                for (var f = 0, u = t[vo]; f + 1 < u.length;) {
                    var c = u[f], _ = u[f + 1], d = hq(n.x, n.y, c, _);
                    if (h > d) {
                        if (e = {
                                oldPoints: u.slice(0),
                                segment: t,
                                index: s,
                                pointIndex: f
                            }, o && (e[Wl] -= 1), o && !kh(t) && (0 == s || s == r[qh] - 1)) {
                            e[hB] = !0;
                            var l = 0 == s;
                            e[rB] = l;
                            var v = l ? vz[rR][aB] : vz.Styles[iI], b = i[mc](this[CD], v) || {};
                            e[oB] = [b.x || 0, b.y || 0]
                        }
                        return this._7r(t, f) && (e.isControlPoint = !0, s > 0 && (e[fB] = r instanceof iq ? r[$d](s - 1) : r[s - 1]), a > s + 1 && (e[uB] = r instanceof iq ? r[$d](s + 1) : r[s + 1], e[uB].points && (e[cB] = e.nextSegment.points.slice(0)))), !1
                    }
                    f += 2
                }
            }, this), e
        }, _7r: function (t, i) {
            return i == t.points[qh] - 2
        }, startdrag: function (t, i) {
            if (this.element && this[JN] && (this._9g = this._ff(t, i), this._9g)) {
                this._7m(), t[VD] = !0;
                var n = new Ch(i, Ch.POINT_MOVE_START, t, this[CD]);
                n.point = this._9g, i.onInteractionEvent(n)
            }
        }, onkeyup: function (t, i) {
            this[KN] && 16 != !t[vN] && this[CD] && this._9g && this._9g[Lb] && this._d9(this._9g[Lb].x, this._9g[Lb].y, i, t, !1)
        }, onkeydown: function (t, i) {
            this[KN] && this.element && this._9g && t[ME] && this._9g[Lb] && this._d9(this._9g[Lb].x, this._9g[Lb].y, i, t, !0)
        }, _d9: function (t, i, n, e, s) {
            var h = this._9g, r = this[CD], a = h.oldPoints, o = h.segment;
            if (h[hB]) {
                var f = h.isFrom ? vz[rR][aB] : vz[rR][iI], u = {x: a[0] + t, y: a[1] + i};
                return void r[yc](f, u)
            }
            if (s && h[iB]) {
                var c = {
                    x: a[a[qh] - 2] + t,
                    y: a[a[qh] - 1] + i
                }, _ = h[fB], d = h[uB], l = 20 / n[rf], v = Number.MAX_VALUE, b = v, g = v, y = v;
                _ && (_ = _[wo], v = Math.abs(c.x - _.x), g = Math.abs(c.y - _.y)), d && (d = d[wo], b = Math.abs(c.x - d.x), y = Math.abs(c.y - d.y)), l > v && b > v ? t += _.x - c.x : l > b && v > b && (t += d.x - c.x), l > g && y > g ? i += _.y - c.y : l > y && g > y && (i += d.y - c.y)
            }
            if (h[iB] && kh(o)) {
                for (var m = o.points[qh] - 4; m < o[vo][qh];) {
                    var x = a[m] + t, p = a[m + 1] + i;
                    o[vo][m] = x, o[vo][m + 1] = p, m += 2
                }
                if (h[uB] && kh(h[uB])) {
                    var E = h[cB], x = E[0] + t, p = E[1] + i;
                    h.nextSegment.points[0] = x, h.nextSegment[vo][1] = p
                }
            } else {
                var m = h[_B], x = a[m] + t, p = a[m + 1] + i;
                o[vo][m] = x, o.points[m + 1] = p
            }
            r[yM]();
            var w = new Ch(n, Ch.POINT_MOVING, e, r);
            w[dB] = h, n[EP](w)
        }, ondrag: function (t, i) {
            if (this[CD] && this._9g) {
                var n = this._9g, e = this[CD], s = t.totalDeltaX, h = t[bg], r = i[rf];
                if (s /= r, h /= r, e[Mo]) {
                    var a = {x: s, y: h};
                    $s(a, -e[Mo]), s = a.x, h = a.y
                }
                n[Lb] = {x: s, y: h}, this._d9(s, h, i, t, t[ME])
            }
        }, enddrag: function (t, i) {
            if (this.element && this._9g) {
                this[eB](), this._ip();
                var n = new Ch(i, Ch[lB], t, this[CD]);
                n[dB] = this._9g, i[EP](n)
            }
        }, onmousemove: function (t, i) {
            this.element && (i[nN] = t[kE] && (this._ff(t, i) || this.element == t[Qb]()) ? "crosshair" : null)
        }
    }, tq[vB] = 1, tq[bB] = V(3724541951), tq[gB] = V(1430753245);
    var sU = function (t) {
        this[Zc] = t, this.topCanvas = t._8y._topCanvas
    };
    sU[tr] = {
        onstart: function (t, i) {
            this._kc && this.destroy(i)
        }, startdrag: function (t, i) {
            t.responded || (t[VD] = !0, this._kc = i[hT](t), i[nN] = kg, this[yB] = this[H_].addDrawable(this._16, this).id)
        }, ondrag: function (t, i) {
            if (this._kc) {
                q(t), this[mB] = i[hT](t), this.invalidate();
                var n = new Ch(i, Ch[xB], t, i[F_]);
                i[EP](n)
            }
        }, enddrag: function (t, i) {
            if (this._kc) {
                this[pB] && (clearTimeout(this[pB]), this[pB] = null), this._fj(!0), this[cg](i);
                var n = new Ch(i, Ch[EB], t, i[F_]);
                i[EP](n)
            }
        }, onpinch: function (t, i) {
            this._kc && this[Kb](t, i)
        }, _16: function (t, i) {
            t[A_] = tq[bB], t[Om] = tq.SELECTION_RECTANGLE_FILL_COLOR, t[xo] = tq[vB] / i;
            var n = this._kc.x, e = this._kc.y;
            t.rect(n, e, this[mB].x - n, this[mB].y - e), t[Im](), t[R_]()
        }, invalidate: function () {
            return this.invalidateFlag ? void this[H_][Pw]() : (this[UM] = !0, void (this[pB] = setTimeout(this._fj[cr](this), 100)))
        }, _fj: function (t) {
            if (this.invalidateFlag = !1, this._fjTimer = null, !this._kc || qG && !t) return void this[H_][Pw]();
            var i = Math.min(this._kc.x, this._end.x), n = Math.min(this._kc.y, this[mB].y),
                e = Math.abs(this._kc.x - this._end.x), s = Math.abs(this._kc.y - this[mB].y);
            if (!e || !s) return void this[Zc][F_][Da]();
            var h, r = [], a = this[Zc][rf];
            if (this[Zc][wB](function (t) {
                    t._hf && this[Zc][TB](t[Df]) && (h = t._ft, (ai(i, n, e, s, h.x + t._x, h.y + t._y, h.width, h[Ra]) || Cn(i, n, e, s, t, a)) && r[Kh](t[Df]))
                }, this), this[Zc].selectionModel.set(r), this[H_][Pw](), !t) {
                var o = new Ch(this.graph, Ch[MB], null, this[Zc][F_]);
                this[Zc][EP](o)
            }
        }, destroy: function (t) {
            this._kc = null, t.cursor = null, this[yB] && (this[H_][PD](this._16Id), delete this[yB], this[H_][Pw]())
        }
    };
    var hU = S({
        "super": sU, onstart: null, startdrag: null, ondrag: null, enddrag: null, accept: function (t, i, n) {
            return n.enableRectangleSelectionByRightButton !== !1
        }, oncontextmenu: function (t, i) {
            i[kB] || q(t)
        }, onstart2: function () {
            sU.prototype[qb][nr](this, arguments)
        }, startdrag2: function (t, i) {
            t[VD] || (i[kB] && i[kB][OB] instanceof Function && i.popupmenu[OB](), sU[tr][Ub][nr](this, arguments))
        }, ondrag2: function () {
            sU.prototype[Xb][nr](this, arguments)
        }, enddrag2: function () {
            sU[tr].enddrag.apply(this, arguments)
        }
    }), JY = Math.PI / 4;
    Oh[tr] = {
        _el: !1, _em: !1, _1g: function (t) {
            this.element && t[Ho] == this.element && this[Zc][qP](function () {
                this._9n()
            }, this)
        }, _7: function () {
            this[XN] || (this[XN] = !0, this[Zc].dataPropertyChangeDispatcher.addListener(this._1g, this))
        }, _5: function () {
            this[XN] = !1, this.graph.dataPropertyChangeDispatcher[Ym](this._1g, this)
        }, onElementRemoved: function (t, i) {
            this[CD] && (t == this[CD] || $(t) && x(t, this[CD])) && this[cg](i)
        }, onClear: function (t) {
            this[CD] && this.destroy(t)
        }, ondblclick: function (t, i) {
            this[CD] && this.destroy(i)
        }, destroy: function (t) {
            t[nN] = null, delete this[CD], delete this[FC], delete this[PC], delete this._9g, delete this._muanEdit, delete this._jg, delete this[SB], delete this._em, delete this._el, delete this._insets, this._7m(), this._5()
        }, _7m: function () {
            this[LD] && (this[H_].removeDrawable(this[LD]), delete this[LD], this[H_].invalidate())
        }, _mqx: function () {
            this[LD] && this[H_][e_](this[LD]) || (this[LD] = this[H_][RD](this._fb, this).id, this[H_].invalidate())
        }, _muw: null, _jg: null, _8n: function (t) {
            this._muw = t;
            var i = this._muw.x, n = this[FC].y, e = this[FC].width, s = this._muw[Ra];
            if (this[CD] instanceof kY && this.element[qT], this._em) {
                var h = [];
                h[Kh]({x: i, y: n, p: uq.LEFT_TOP, cursor: IB, rotate: 5 * JY}), h[Kh]({
                    x: i + e / 2,
                    y: n,
                    p: uq[gl],
                    cursor: AB,
                    rotate: 6 * JY
                }), h[Kh]({x: i + e, y: n, p: uq[El], cursor: fd, rotate: 7 * JY}), h.push({
                    x: i,
                    y: n + s / 2,
                    p: uq.LEFT_MIDDLE,
                    cursor: CB,
                    rotate: 4 * JY
                }), h.push({x: i, y: n + s, p: uq[bl], cursor: fd, rotate: 3 * JY}), h.push({
                    x: i + e,
                    y: n + s / 2,
                    p: uq[xl],
                    cursor: CB,
                    rotate: 0
                }), h[Kh]({x: i + e / 2, y: n + s, p: uq.CENTER_BOTTOM, cursor: AB, rotate: 2 * JY}), h.push({
                    x: i + e,
                    y: n + s,
                    p: uq[pl],
                    cursor: IB,
                    rotate: JY
                }), this._jg = h
            }
            this[SB] = this._el ? {x: i + e / 2, y: n, cursor: rz} : null, this[Dw]()
        }, _es: function (t, i, n, e) {
            t[Ix]();
            var s = (this[od] - 1) / e;
            t[pu](i - s, n - s, 2 * s, 2 * s), t[xo] = 1 / e, t[$f] = [], t[A_] = P_, t[Om] = "rgba(255, 255, 255, 0.8)", t[R_](), t[Im]()
        }, _5c: function (t, i, n, e, s, h) {
            s = s || this.handlerSize, h = h || LB, t[Ix](), s /= e, t.arc(i, n, s, 0, 2 * Math.PI, !1), t[xo] = 1 / e, t.lineDash = [], t.strokeStyle = P_, t[Om] = h, t[R_](), t[Im]()
        }, _hg: function (t, i) {
            t -= this.element.x, i -= this[CD].y;
            var n = {x: t, y: i};
            return this[CD][Mo] && $s(n, -this[CD].rotate), n
        }, _fb: function (t, i) {
            if (this._muw) {
                if (t[Ja](), t[Qa](this[CD].x, this.element.y), this.element[Mo] && t[Mo](this.element[Mo]), this[SB]) {
                    this._5c(t, 0, 0, i, 3, PB);
                    var n = this[SB].x, e = this[SB].y - this[RB] / i;
                    t.beginPath(), t[Gu](n, this._rotatePoint.y), t[$u](n, e), t[xo] = 1 / i, t[A_] = nB, t[R_](), this._5c(t, n, e, i)
                }
                if (this._jg) {
                    var s = this[FC].x, h = this[FC].y, r = this[FC].width, a = this[FC][Ra];
                    t[Ix](), t.rect(s, h, r, a), t[xo] = 1 / i, t[$f] = [2 / i, 3 / i], t[A_] = nB, t[R_](), l(this._jg, function (n) {
                        this._es(t, n.x, n.y, i)
                    }, this)
                }
                t[ro]()
            }
        }, _mue: function () {
            this[H_][Pw]()
        }, _3v: function (t, i, n, e) {
            this[CD] = t, this[eB]();
            var s = i[Kc](t);
            this[PC] = s[pm], this._em = n, this._el = e, this._9n(), this._7()
        }, _9n: function () {
            if (this[LD]) {
                var t = Sh(this[PC], this[PC]._iv), i = Sh(this[PC], this[PC]._8d);
                this[DB] = new fq(t.y - i.y, t.x - i.x, i.bottom - t[Hr], i[Yr] - t[Yr]), this._8n(i)
            }
        }, _msh: function (t, i) {
            return i[NB](t)
        }, _msg: function (t, i) {
            return (!t._hu() || !t[qT]) && i[BB](t)
        }, _d3: function (t, i) {
            return t instanceof wY && i.isEditable(t)
        }, onstart: function (t, i) {
            if (!i[HL]) return void (this[CD] && this[cg](i));
            if (!t[VD]) {
                var n = i[Kc](t), e = t[Qb]();
                if (e != this.element) {
                    if (this[CD]) {
                        if (this._ff(t, i)) return void (t[VD] = !0);
                        this[cg](i)
                    }
                    if (e && !e[ZN] && this._d3(e, i)) {
                        var s = this._msh(e, i, n), h = this[jB](e, i, n);
                        (s || h) && this._3v(e, i, s, h)
                    }
                }
            }
        }, onrelease: function (t, i) {
            this[CD] && (this[JN] = !0, this[eB](), i[qP](function () {
                this._9n()
            }, this))
        }, _9g: null, _ff: function (t, i) {
            var n = i.toLogical(t);
            n = this._hg(n.x, n.y);
            var e = i.scale, s = this.handlerSize / e;
            if (this._rotatePoint) {
                var h = this[SB].x, r = this[SB].y - this._rotateHandleLength / e;
                if (hq(n.x, n.y, h, r) < s) return this[SB]
            }
            if (this._jg && this._jg[qh]) {
                var a;
                return l(this._jg, function (t) {
                    return hq(n.x, n.y, t.x, t.y) < s ? (a = t, !1) : void 0
                }, this), a
            }
        }, onmousemove: function (t, i) {
            if (this[CD]) {
                var n = this._ff(t, i);
                if (!n) return void (i[nN] = null);
                if (n != this[SB] && this[CD][Mo]) {
                    var e = n.rotate + this[CD][Mo];
                    return void (i[nN] = Ih(e))
                }
                i[nN] = n.cursor
            }
        }, startdrag: function (t, i) {
            if (this[CD] && (this._7m(), this[JN] && (this._9g = this._ff(t, i), this._9g))) {
                if (t[VD] = !0, this._9g == this[SB]) return this._9g[YD] = i[hT](t), void (this._9g[Mo] = this.element.rotate || 0);
                var n = new Ch(i, Ch[$B], t, this[CD]);
                n[dB] = this._9g, i[EP](n)
            }
        }, _7n: function (t, i, n, e, s, h) {
            var r = this[FC], a = r.x, o = r.y, f = r[Pa], u = r[Ra];
            if (h) {
                var c = e != f;
                c ? s = e * u / f : e = s * f / u
            }
            var _ = t[BM]._gd, d = e / f, l = s / u, v = -a * d + i, b = -o * l + n;
            _[Kf](function (t) {
                if (t[To] != bz.SEGMENT_CLOSE) {
                    var e = t[vo];
                    if (e && e[qh]) for (var s = 0, h = e[qh]; h > s; s += 2) {
                        var r = e[s], f = e[s + 1];
                        e[s] = (r - a) * d + i - v, e[s + 1] = (f - o) * l + n - b
                    }
                }
            }), this._muw.set(i - v, n - b, e, s), t[XP](t.x + v, t.y + b), t.firePathChange()
        }, _9m: function (t, i, n, e, s) {
            this._muw.set(i, n, e, s), t[KM] = {x: i, y: n, width: e, height: s}
        }, _4f: function (t, i, n, e, s) {
            if (this[CD] instanceof kY) return this._9m(this.element, t, i, n, e, s);
            if (this.element instanceof TY) return this._7n(this[CD], t, i, n, e, s);
            var h = this[PC] instanceof qY;
            if (!h && s) {
                var r = this[FC], a = this._msody.originalBounds, o = n != r[Pa];
                o ? e = n * a.height / a[Pa] : n = e * a[Pa] / a.height
            }
            var f = this[CD].anchorPosition,
                u = new aq(n - this[DB][Go] - this[DB][Yr], e - this[DB].top - this[DB][Hr]);
            if (u[Pa] < 1 && (n = this[DB][Go] + this[DB][Yr] + 1, u.width = 1), u[Ra] < 1 && (e = this[DB].top + this[DB][Hr] + 1, u.height = 1), h ? this[CD][yc](IY[uS], u) : this.element[Nw] = u, f) {
                var c = fi(f, n, e), _ = c.x + t - (this[PC].offsetX || 0), d = c.y + i - (this[PC][ck] || 0);
                if (this[FC].set(t - _, i - d, n, e), this[CD][Mo]) {
                    var c = $s({x: _, y: d}, this[CD].rotate);
                    _ = c.x, d = c.y
                }
                this[CD].x += _, this[CD].y += d
            } else {
                var _ = this[FC].x * n / this._muw.width - t, d = this[FC].y * e / this[FC][Ra] - i;
                if (this._muw.set(t + _, i + d, n, e), this.element.rotate) {
                    var c = $s({x: _, y: d}, this[CD][Mo]);
                    _ = c.x, d = c.y
                }
                this[CD].x -= _, this[CD].y -= d
            }
        }, ondrag: function (t, i) {
            if (this.element && this._9g) if (this._9g != this[SB]) {
                var n = t.dx, e = t.dy, s = i[rf];
                if (n /= s, e /= s, this[CD][Mo]) {
                    var h = {x: n, y: e};
                    $s(h, -this[CD][Mo]), n = h.x, e = h.y
                }
                var r = this._9g.p, a = this[FC], o = a.x, f = a.y, u = a.width, c = a[Ra];
                r.horizontalPosition == cq ? n >= u ? (o += u, u = n - u || 1) : (o += n, u -= n) : r[Wr] == dq && (-n >= u ? (u = -n - u || 1, o -= u) : u += n), r[Xr] == lq ? e >= c ? (f += c, c = e - c || 1) : (f += e, c -= e) : r.verticalPosition == bq && (-e >= c ? (c = -e - c || 1, f -= c) : c += e), this._4f(o, f, u, c, t[ME]);
                var _ = new Ch(i, Ch.RESIZING, t, this[CD]);
                _[dB] = this._9g, i[EP](_)
            } else {
                var h = i[hT](t), d = _n(h.x, h.y, this[CD].x, this.element.y, this._9g.start.x, this._9g.start.y, !0);
                d += this._9g[Mo] || 0, t[ME] && (d = Math[go](d / Math.PI * 4) * Math.PI / 4), this[CD][Mo] = d % (2 * Math.PI);
                var _ = new Ch(i, Ch[FB], t, this[CD])
            }
        }, enddrag: function (t, i) {
            if (this.element && this._9g && this._9g != this[SB]) {
                var n = new Ch(i, Ch[GB], t, this[CD]);
                n[dB] = this._9g, i[EP](n)
            }
        }
    }, vz[qB] = Oh;
    var rU = function (t) {
        this[Zc] = t
    };
    rU[tr] = {
        onmousedown: function (t, i) {
            JG || i.focus(!FG)
        }, onstart: function (t, i) {
            if (!t[VD]) {
                var n = t[Qb]();
                if (n && !i[TB](n) && (n = null), n && xi(t)) {
                    i[WP](n);
                    var e = new Ch(i, Ch[zB], t, i[F_]);
                    return void i[EP](e)
                }
                if (!n || !i[F_].isSelected(n)) {
                    n ? (i[HB](n), i.sendToTop(n)) : i[HB](null);
                    var e = new Ch(i, Ch[zB], t, i[F_]);
                    i[EP](e)
                }
            }
        }, onkeydown: function (t, i) {
            return 27 == t[vN] ? void i[YB]() : void (xi(t) && 65 == t[vN] && (i.selectAll(), F(t)))
        }
    };
    var aU = 0, oU = 15;
    tq[UB] = 3e3, tq.TOOLTIP_DELAY = 1e3;
    var fU = WB;
    gi(jr + fU, {
        "background-color": XB,
        overflow: m_,
        "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
        color: Rm,
        "pointer-events": x_,
        border: VB,
        padding: ZB,
        display: RR,
        position: Ew
    });
    var uU = function (t) {
        this[Zc] = t, this._mqa = {}
    };
    uU[tr] = {
        _mqa: null, _msu: null, _mss: function () {
            delete this._initTimer, this._mqa.data && (this._msu || (this._msu = i.createElement(o_), this[KB][dr] = fU), this[KB].parentNode || i[pm].appendChild(this[KB]), this[JB](this.graph, this._mqa[mo]))
        }, _mus: function (t, i) {
            var n = t[QB](i), e = ed == i[tj];
            n && !e && (n = n.replace(/\n/g, ij)), e ? this._msu[nj] = n || "" : this[KB].innerHTML = n || "";
            var s = this[ej].evt.pageX + aU, h = this[ej].evt[va] + oU;
            Ah(this[KB], s, h), this[sj] && (clearTimeout(this[sj]), delete this[sj]), this[sj] = setTimeout(this._8m[cr](this), t[hj] || tq[UB])
        }, _8m: function () {
            delete this[sj], this._msu && this[KB][ym] && this[KB][ym].removeChild(this[KB]), delete this[KB], this._mqa = {}
        }, _ej: function (t, i, n, e) {
            if (!this._msu) {
                var s = e[rj];
                return isNaN(s) && (s = tq.TOOLTIP_DELAY), void (this[aj] = setTimeout(this[oj][cr](this), s))
            }
            this._mus(e, t)
        }, onstart: function (t, i) {
            this[cg](i)
        }, onmousemove: function (t, i) {
            if (i.enableTooltip) {
                var n = t.getData();
                if (this._mqa.evt = t, this._mqa[mo] != n && (this[ej][mo] = n, this._initTimer && (clearTimeout(this._initTimer), delete this[aj]), n)) {
                    var e = i.getTooltip(n);
                    e && this._ej(n, e, t, i)
                }
            }
        }, destroy: function () {
            this._initTimer && (clearTimeout(this[aj]), delete this[aj]), this[sj] && (clearTimeout(this[sj]), delete this._deleteTimer), this[KB] && this._8m(), this._mqa = {}
        }
    };
    var cU = function (t) {
        this.graph = t
    };
    cU.prototype = {
        _fj: function () {
            delete this._km
        }, destroy: function (t) {
            this._km && this._fj(t)
        }, onmousewheel: function (t, i) {
            if (i[fj] !== !1 && t[Lb]) {
                var n = t[Lb] > 0, e = i.scale;
                if (!(n && i.maxScale - e < 1e-4 || !n && e - i.minScale < 1e-4)) {
                    q(t);
                    var s = Math.sqrt(Math.abs(t[Lb]));
                    n || (s = -s), this._km && clearTimeout(this._km), this._km = setTimeout(this._fj[cr](this, i), 100), i.zoomByMouseEvent(t, s)
                }
            }
        }
    };
    var _U = function (t) {
        this[Zc] = t
    };
    _U.prototype = {
        onclick: function (t, i) {
            i[uj](t, !xi(t))
        }
    };
    var dU = function (t) {
        this[Zc] = t
    };
    dU.prototype = {
        onclick: function (t, i) {
            i[uj](t, xi(t))
        }
    }, E(Ch, mq), Ch[cj] = _j, Ch[FN] = dj, Ch[HN] = lj, Ch.ELEMENT_CREATED = vj, Ch[eR] = bj, Ch.POINT_MOVE_START = gj, Ch[yj] = mj, Ch.POINT_MOVE_END = xj, Ch.RESIZE_START = pj, Ch[Ej] = wj, Ch.RESIZE_END = Tj, Ch.ROTATING = Mj, Ch[kj] = Oj, Ch[YN] = Sj, Ch.PAN_END = Ij, Ch[VM] = Aj, Ch.EDGE_BUNDLE = Cj, Ch[zB] = rd, Ch[xB] = Lj, Ch.SELECT_BETWEEN = Pj, Ch[EB] = Rj, Ch.LONG_CLICK = Dj, Lh[tr] = {
        _9c: function (t) {
            if (this._interactionSupport) switch (t.kind) {
                case Iq[Ql]:
                    this[Nj][Bj](t[mo]);
                    break;
                case Iq[ov]:
                    this[Nj][jj](t.data)
            }
        }, destroy: function () {
            delete this._k0, delete this._4w, this._interactionSupport && (this._interactionSupport._hs(), delete this[Nj])
        }, _k0: null, _4w: null, defaultMode: null, _fo: function (t, i, n) {
            this._4w[t] = new _h(i, n), t == this[mR] && this._interactionSupport[$j](i)
        }, addCustomInteraction: function (t) {
            this[Nj]._mfCustomInteractionListener(t)
        }, removeCustomInteraction: function (t) {
            this._interactionSupport[Fj](t)
        }, _mh: function (t) {
            var i = this._4w[t];
            return i ? i : lU[t]
        }
    }, K(Lh[tr], {
        defaultCursor: {
            get: function () {
                return this[Gj] ? this[Gj][U_] : void 0
            }
        }, currentMode: {
            get: function () {
                return this[yR]
            }, set: function (t) {
                this._muurrentMode != t && (this[yR], this[Nj] || (this[Nj] = new iz(this._k0)), this._muurrentMode = t, this[Gj] = this._mh(this[yR]), this._k0[nN] = this.defaultCursor, this[Nj][$j](this[Gj] ? this.currentInteractionMode[qj](this._k0) : []))
            }
        }
    });
    var lU = {};
    tq[zj] = function (t, i, n) {
        var e = new _h(i, n);
        lU[t] = e
    }, bz[Hj] = Yj, bz.INTERACTION_MODE_DEFAULT = W_, bz[Uj] = nd, bz[Wj] = Xj, bz[Vj] = Zj, bz[Kj] = Jj, bz[Qj] = t$, bz.INTERACTION_MODE_CREATE_SHAPE = i$, bz.INTERACTION_MODE_CREATE_LINE = n$, tq[zj](bz.INTERACTION_MODE_VIEW, [rU, eU, cU, iU, QY, uU, hU]), tq[zj](bz[Kj], [tU, yh, rU, eU, cU, iU, uU]), tq[zj](bz[Qj], [tU, vh, rU, eU, cU, iU, uU]), tq[zj](bz.INTERACTION_MODE_CREATE_SHAPE, [tU, bh, rU, eU, cU, iU, uU]), tq[zj](bz[e$], [gh, rU, eU, cU, iU, uU]), tq[zj](bz[s$], [tU, Oh, Mh, rU, nU, eU, cU, iU, QY, uU, hU]), tq.registerInteractions(bz.INTERACTION_MODE_SELECTION, [tU, Oh, Mh, rU, nU, sU, eU, cU, iU, QY, uU]), tq[zj](bz[Wj], [cU, iU, _U], nz), tq[zj](bz.INTERACTION_MODE_ZOOMOUT, [cU, iU, dU], ez), vz[h$] = eU, vz.SelectionInteraction = rU, vz[r$] = nU, vz.WheelZoomInteraction = cU, vz.DoubleClickInteraction = QY, vz[a$] = iU, vz[o$] = uU, vz[f$] = sU, vz[u$] = hU, vz[c$] = Mh;
    var vU = function (t) {
        this[Zc] = t
    };
    vz[_$] = vU, vU.prototype = {
        getNodeBounds: function (t) {
            return this[Zc][d$](t)
        }, isLayoutable: function (t) {
            return this[Zc][q_](t) && t.layoutable !== !1
        }, getLayoutResult: function () {
        }, updateLocations: function (t, i, n, e, s) {
            if (i === !0) {
                if (this[l$] || (this.animate = new VU), n && (this[l$][TD] = n), e && (this.animate[v$] = e), this[l$][b$] = t, s) {
                    var h = s, r = this;
                    s = function () {
                        h.call(r, t)
                    }
                }
                return void this.animate[YD](s)
            }
            for (var a in t) {
                var o = t[a], f = o[g$];
                f[XP](o.x, o.y)
            }
            s && s.call(this, t)
        }, _fa: function (t) {
            var i, n, e, s = null;
            t && (i = t.byAnimate, s = t.callback, n = t.duration, e = t.animationType);
            var h = this.getLayoutResult(t);
            return h ? (this[y$](h, i, n, e, s), h) : !1
        }, doLayout: function (t, i) {
            return this[Zc] && i !== !0 ? void this.graph[qP](function () {
                this._fa(t)
            }, this) : this._fa(t)
        }
    };
    var bU = 110, gU = 120, yU = 130, mU = 210, xU = 220, pU = 230, EU = 111, wU = 112, TU = 121, MU = 122, kU = 211,
        OU = 212, SU = 221, IU = 222;
    bz.DIRECTION_RIGHT = bU, bz[m$] = gU, bz[x$] = yU, bz[p$] = mU, bz[E$] = xU, bz.DIRECTION_MIDDLE = pU, bz[w$] = EU, bz[T$] = wU, bz[M$] = TU, bz[k$] = MU, bz.DIRECTION_BOTTOM_LEFT = kU, bz.DIRECTION_BOTTOM_RIGHT = OU, bz[O$] = SU, bz.DIRECTION_TOP_RIGHT = IU;
    var AU = S$, CU = I$, LU = A$, PU = C$;
    bz.LAYOUT_TYPE_EVEN = AU, bz[L$] = LU, bz[P$] = PU, bz[R$] = CU, vz[D$] = Ph;
    var RU = function (t) {
        this[Zc] = t
    };
    RU[tr] = {
        hGap: 50,
        vGap: 50,
        parentChildrenDirection: mU,
        layoutType: AU,
        defaultSize: {width: 50, height: 60},
        getNodeSize: function (t) {
            if (this[Zc]._8y[Rw]) {
                var i = this[Zc][Kc](t);
                if (i) return i._ft
            }
            return t[zm] && t[zm][kf] ? {width: t.image[kf].width, height: t[zm][kf][Ra]} : this[N$]
        },
        _msy: function (t, i) {
            if (this[B$](t)) {
                var n, e = this[j$](t);
                n = e instanceof oq ? [-e.x, -e.y] : [e[Pa] / 2, e[Ra] / 2];
                var s = t.id, h = (t[$$], i ? this._90[i.id] : this[F$]);
                this._90[s] = new DU(this[G$](t), this.getVGap(t), this[q$](t), t.parentChildrenDirection, h, t, e[Pa], e.height, n)
            }
        },
        getHGap: function (t) {
            return t && N(t[z$]) ? t[z$] : this.hGap
        },
        getVGap: function (t) {
            return t && N(t.vGap) ? t[H$] : this.vGap
        },
        getLayoutType: function (t) {
            return t && t[Y$] ? t[Y$] : this.layoutType
        },
        _90: null,
        _ms5: null,
        _ka: function () {
            this._90 = null, this[F$] = null
        },
        getLayoutResult: function (t) {
            var i, n, e, s, h = this[Zc];
            t instanceof Object && (i = t.x, n = t.y, h = t[U$] || this[Zc], e = t[kf], s = t[W$]), this._90 = {}, this[F$] = new DU, this._ms5._m6(this[z$], this[H$], this[$$], this[Y$]);
            var r = {}, a = JU(h, this._msy, this, !1, s);
            return a && (this._ms5._fa(i || 0, n || 0, r), e && e.set(this[F$].x, this._ms5.y, this[F$][Pa], this[F$][Ra])), this._ka(), r
        },
        doLayout: function (t, i) {
            if (N(t)) {
                var n = t, e = 0;
                N(i) && (e = i), t = {x: n, y: e}, i = !0
            }
            return T(this, RU, X$, [t, i])
        }
    }, E(RU, vU);
    var DU = function (t, i, n, e, s, h, r, a, o) {
        this._lw = t || 0, this._ly = i || 0, this.layoutType = n, this.parentChildrenDirection = e, this[V$] = s, s && s._fg(this), this[g$] = h, this._ez = r, this._d0 = a, this[Z$] = o
    };
    DU[tr] = {
        _m6: function (t, i, n, e) {
            this._lw = t, this._ly = i, this.parentChildrenDirection = n, this[Y$] = e
        },
        _8e: function () {
            this._fe = []
        },
        _lw: 0,
        _ly: 0,
        _fe: null,
        _ez: 0,
        _d0: 0,
        layoutType: null,
        parentChildrenDirection: null,
        _fg: function (t) {
            this._fe || (this._fe = []), this._fe.push(t)
        },
        _muz: function (t, i, n, e) {
            var s = new oq;
            return n(this._fe, function (n) {
                n._3b(t, i), s.add(n), e ? t += n[Pa] + this._lw : i += n.height + this._ly
            }, this), s
        },
        _8i: function (t, i, n, e, s) {
            var h, r = e ? this._lw : this._ly, a = e ? this._ly : this._lw, o = e ? "width" : Ra,
                f = e ? "height" : Pa, u = e ? "_ez" : K$, c = e ? "_d0" : J$, _ = e ? "hostDX" : Q$,
                d = e ? "hostDY" : tF, v = new oq, b = 0, g = 0, y = [], m = 0, x = 0;
            n(this._fe, function (n) {
                var s = x >= g;
                n[iF] = s ? e ? gU : xU : e ? bU : mU, n._3b(t, i), s ? (y[Kh](n), b = Math.max(b, n[o]), g += n[f] + a) : (h || (h = []), h[Kh](n), m = Math.max(m, n[o]), x += n[f] + a)
            }, this), g -= a, x -= a;
            var p = Math.max(g, x), E = r, w = 0;
            this[g$] && (s && (E += this[u] + r, p > this[c] ? this[d] = (p - this[c]) / 2 : w = (this[c] - p) / 2), this[_] = b + E / 2 - this[u] / 2);
            var T = 0, M = w;
            return l(y, function (t) {
                e ? t.offset(b - t[o], M) : t[fm](M, b - t[o]), M += a + t[f], v.add(t)
            }, this), h ? (M = w, T = b + E, l(h, function (t) {
                e ? t[fm](T, M) : t.offset(M, T), M += a + t[f], v.add(t)
            }, this), v) : v
        },
        offset: function (t, i) {
            this.x += t, this.y += i, this.nodeX += t, this.nodeY += i, this._7j(t, i)
        },
        _mqm: function (t, i) {
            return 2 * this.cx - t - i - t
        },
        _mqs: function (t, i) {
            return 2 * this.cy - t - i - t
        },
        _m0: function (t) {
            if (this._fe && 0 != this._fe[qh]) {
                if (t) return this[g$] && (this[nF] += this[eF](this[nF], this._ez)), void l(this._fe, function (t) {
                    t[fm](this[eF](t.x, t[Pa]), 0)
                }, this);
                this.node && (this[sF] += this[hF](this.nodeY, this._d0)), l(this._fe, function (t) {
                    t[fm](0, this[hF](t.y, t.height))
                }, this)
            }
        },
        _7j: function (t, i) {
            this._fe && l(this._fe, function (n) {
                n[fm](t, i)
            }, this)
        },
        _3b: function (t, i) {
            return this.x = t || 0, this.y = i || 0, this._fe && 0 != this._fe.length ? void this._1i(this.x, this.y, this[Y$]) : void (this[g$] && (this[Pa] = this._ez, this[Ra] = this._d0, this[nF] = this.x, this[sF] = this.y))
        },
        _7h: function (t) {
            if (this[g$]) {
                var i = this._mqnchorLocation, n = i[0], e = i[1];
                t[this[g$].id] = {
                    node: this[g$],
                    x: this.nodeX + n,
                    y: this.nodeY + e,
                    left: this[nF],
                    top: this.nodeY,
                    width: this._ez,
                    height: this._d0
                }
            }
            this._fe && l(this._fe, function (i) {
                i._7h(t)
            }, this)
        },
        _fa: function (t, i, n) {
            this._3b(t, i), this._7h(n)
        },
        _1i: function (t, i, e) {
            var s, h = t, r = i;
            !this[$$] && this.parentBounds && (this[$$] = this[iF] || this.parentBounds[$$]);
            var a = this[$$], o = Ph(a);
            if (this[g$]) {
                s = a == yU || a == pU;
                var f = Rh(a);
                s || (o ? t += this._ez + this._lw : i += this._d0 + this._ly)
            }
            var u, c = this[g$] && this[g$].layoutReverse ? b : l;
            if (e == CU) u = this._8i(t, i, c, !o, s); else {
                var _;
                _ = e == AU ? !o : e == LU, u = this[rF](t, i, c, _, s)
            }
            var d = 0, v = 0;
            if (u && !u[Nf]() && (d = u[Pa], v = u[Ra], this.add(u)), this[g$]) {
                if (this[nF] = h, this[sF] = r, this[tF] !== n || this[Q$] !== n) this.nodeX += this[tF] || 0, this[sF] += this[Q$] || 0; else {
                    var g;
                    g = a == mU || a == xU || a == gU || a == bU ? 1 : a == OU || a == IU || a == MU || a == wU ? 0 : 2, o ? 1 == g ? this[sF] += v / 2 - this._d0 / 2 : 2 == g && (this.nodeY += v - this._d0) : 1 == g ? this.nodeX += d / 2 - this._ez / 2 : 2 == g && (this[nF] += d - this._ez)
                }
                this.addRect(this.nodeX, this[sF], this._ez, this._d0), f && this._m0(o)
            }
        },
        node: null,
        uiBounds: null
    }, E(DU, oq), Nh[tr] = {
        layoutDatas: null, isMovable: function (t) {
            return !this[aF][t.id]
        }, _6w: !1, _3j: function () {
            this._6w = !0, this.graph._1o[Yl](this._98, this), this.graph._1e[Yl](this._2g, this)
        }, _1k: function () {
            this._6w = !1, this[Zc]._1o[Ym](this._98, this), this[Zc]._1e[Ym](this._2g, this)
        }, invalidateFlag: !0, invalidateLayoutDatas: function () {
            this[UM] = !0
        }, resetLayoutDatas: function () {
            return this[UM] = !1, this[oF] = Dh.call(this)
        }, _2g: function (t) {
            Ch[cj] == t[dd] ? (this.currentMovingNodes = {}, t[ld][Kf](function (t) {
                this[aF][t.id] = t
            }, this)) : Ch[HN] == t[dd] && (this.currentMovingNodes = {})
        }, _98: function () {
            this[fF]()
        }, isRunning: function () {
            return this[uF] && this.timer._eh()
        }, getLayoutResult: function () {
            this[cF](), this.resetLayoutDatas();
            for (var t = this[_F](this[oF][dF] || 0, this[oF][lF] || 0), i = 0; t > i && this.step(!1) !== !1; i++);
            var n = this[oF][vF];
            return this[bF](), n
        }, _l6: function () {
            return !1
        }, step: function (t) {
            if (t === !1) return this._l6(this[gF]);
            (this.invalidateFlag || !this[oF]) && this.resetLayoutDatas();
            var i = this._l6(t), n = this[oF].nodes;
            for (var e in n) {
                var s = n[e], h = s[g$];
                this.isMovable(h) ? h[XP](s.x, s.y) : (s.x = h.x, s.y = h.y, s.vx = 0, s.vy = 0)
            }
            return i
        }, onstop: function () {
            delete this[oF]
        }, start: function (t) {
            if (this[yF]()) return !1;
            this._6w || this._3j(), this[mF] || (this[mF] = function (t) {
                return this.step(t)
            }[cr](this)), this[fF](), this[uF] = new _z(this._j7r);
            var i = this;
            return this[uF]._kc(function () {
                i.onstop(), t && t()
            }), !0
        }, stop: function () {
            this[uF] && (this.timer._lo(), this[bF]())
        }, getMaxIterations: function (t) {
            return Math.min(1e3, 3 * t + 10)
        }, minEnergyFunction: function (t, i) {
            return 10 + Math.pow(t + i, 1.4)
        }, resetGraph: function () {
            this._6w || this._3j(), this[xF]()
        }, destroy: function () {
            this.stop(), this._1k()
        }
    }, E(Nh, vU);
    var NU = function (t, i, n, e) {
        this[Zc] = t, N(i) && (this[wl] = i), N(n) && (this.gap = n), N(e) && (this[pF] = e)
    };
    vz[EF] = NU;
    var BU = wF, jU = TF, $U = MF, FU = kF;
    bz[OF] = BU, bz[SF] = jU, bz[IF] = $U, bz.RADIUS_MODE_VARIABLE = FU, NU.prototype = {
        angleSpacing: BU,
        radiusMode: FU,
        gap: 4,
        radius: 50,
        startAngle: 0,
        _90: null,
        _ms5: null,
        _ka: function () {
            this._90 = null, this._ms5 = null
        },
        getLayoutResult: function (t) {
            var i, n = 0, e = 0, s = this[Zc];
            t instanceof Object && (n = t.cx || 0, e = t.cy || 0, s = t.root || this[Zc], i = t.bounds), this._90 = {}, this[F$] = new zU(this);
            var h = {}, r = QU(s, this._msy, this);
            return r && (this[F$]._fe && 1 == this[F$]._fe[qh] && (this._ms5 = this[F$]._fe[0]), this[F$]._dz(!0), this._ms5._5j(n, e, this[pF], h, i)), this._ka(), h
        },
        _msy: function (t, i) {
            if (this[B$](t)) {
                var n = i ? this._90[i.id] : this[F$];
                this._90[t.id] = new zU(this, t, n)
            }
        },
        defaultSize: 40,
        getRadius: function () {
            return this[wl]
        },
        getNodeSize: function (t) {
            if (this[Zc]._8y[Rw]) {
                var i = this[Zc][Kc](t);
                if (i) return (i._ft.width + i._ft[Ra]) / 2
            }
            return this[N$]
        },
        getGap: function () {
            return this.gap
        },
        _2t: function (t, i, n) {
            return this.getNodeSize(t, i, n) + this[AF](t, i, n)
        }
    };
    var GU = function (t) {
        var i, n = this._fe[qh], e = 0, s = 0;
        if (l(this._fe, function (t) {
                var n = t._dz();
                1 > n && (n = 1), s += n, n > e && (e = n, i = t)
            }, this), n > 1) {
            var h = 0, r = {}, a = s / n / 3;
            s = 0, l(this._fe, function (t) {
                var i = t._m4;
                a > i && (i = a), r[t.id] = i, s += i
            }, this);
            var o = vY / s;
            l(this._fe, function (i, n) {
                var e = r[i.id], s = e * o;
                0 === n && (h = t ? -s / 2 : -s), i._k7 = h + s / 2, i._k9 = s, h += s
            }, this)
        }
        return [e, i._k9]
    }, qU = function (t) {
        var i = this._8l, n = 2 * Math.PI / i, e = 0, s = t ? 0 : i > 1 ? -n / 2 : 0;
        return l(this._fe, function (t) {
            t._k7 = s % vY, s += n, t._k9 = n;
            var i = t._dz();
            i > e && (e = i)
        }, this), [e, n]
    }, zU = function (t, i, n) {
        this[CF] = t, i && (this._lu = i, this.id = i.id), n && (n._fg(this), n._m1 = !1, this._k6 = n._k6 + 1)
    }, vY = 2 * Math.PI;
    zU[tr] = {
        _k9: 0,
        _k7: 0,
        _jh: 0,
        _ey: 0,
        _dh: 0,
        _k6: 0,
        _m1: !0,
        _m4: 0,
        _g2: 0,
        _fe: null,
        _lu: null,
        _fg: function (t) {
            this._fe || (this._fe = []), this._fe[Kh](t), t.parent = this
        },
        _g4: function (t) {
            if (this._k7 = (this._k7 + t) % vY, this._fe) {
                var i = this._fe[qh];
                if (1 == i) return void this._fe[0]._g4(this._k7);
                t = this._k7 + Math.PI, l(this._fe, function (i) {
                    i._g4(t)
                }, this)
            }
        },
        _8l: 0,
        _7c: function (t) {
            return this._lu && (this._g2 = this[CF]._2t(this._lu, this._k6, this._m1) / 2), this._fe ? (this._g2, this._8l = this._fe.length, this._8l <= 2 || this[CF][LF] == jU ? qU[Hh](this, t) : GU[Hh](this, t)) : null
        },
        _dz: function (t) {
            var i = this._7c(t);
            if (!i) return this._m4 = this._g2;
            var n = i[0], e = i[1], s = this[CF].getRadius(this._lu, this._k6);
            if (s < this._g2 && (s = this._g2), this._ey = s, this._g2 + n > s && (s = this._g2 + n), n && this._8l > 1 && e < Math.PI) {
                var h = n / Math.sin(e / 2);
                h > s && (s = h)
            }
            return this._jh = s, this._m4 = s + n, this._lu && this._fe && this[CF].radiusMode == FU && l(this._fe, function (t) {
                var i = t._m4;
                1 == t._8l && (i /= 2);
                var n = this._g2 + i, e = t._k9;
                if (e && e < Math.PI) {
                    var s = Math.sin(e / 2), h = i / s;
                    h > i && (i = h)
                }
                n > i && (i = n), t._dh = i
            }, this), (!this._lu || t) && this._g4(0), this._m4
        },
        _5j: function (t, i, n, e, s) {
            if (this._lu && (e[this._lu.id] = {
                    x: t,
                    y: i,
                    node: this._lu
                }, s && s[sl](t - this._g2 / 2, i - this._g2 / 2, this._g2, this._g2)), this._fe) {
                if (!this._lu && 1 == this._fe[qh]) return void this._fe[0]._5j(t, i, n, e, s);
                n = n || 0;
                var h = this._jh, r = this._ey;
                l(this._fe, function (a) {
                    var o = h;
                    a._dh && (o = Math.max(r, a._dh));
                    var f = a._k7 + n, u = t + o * Math.cos(f), c = i + o * Math.sin(f);
                    a._5j(u, c, n, e, s)
                }, this)
            }
        }
    }, E(NU, vU);
    var HU = function () {
        w(this, HU, arguments)
    };
    E(HU, Bh);
    var YU = function (t, i) {
        this[PF] = t, this[RF] = i, t == i ? (this[bd] = !0, this._k4 = t._k3) : this._k4 = new iq, this._8z = [], this._g5 = tq.EDGE_BUNDLE_EXPANDED
    };
    tq[DF] = !0, YU[tr] = {
        node1: null,
        node2: null,
        _k4: null,
        _g5: tq.EDGE_BUNDLE_EXPANDED,
        _8z: null,
        _g7: null,
        agentEdge: null,
        _ms8: function (t, i, n) {
            this._k4[Kf](function (e) {
                return n && e.$from != n && e[Mu] != n ? void 0 : t[Hh](i, e)
            })
        },
        _5q: 0,
        _58: 0,
        _i9: function (t, i) {
            return this._k4.add(t) === !1 ? !1 : (i == this[PF] ? this._5q++ : this._58++ , this[Rw] ? void this._17(t) : void (this[Rw] = !0))
        },
        _dg: function (t, i) {
            return this._k4.remove(t) === !1 ? !1 : (i == this.node1 ? this._5q-- : this._58-- , this._17(t), void this._k4.forEach(function (t) {
                t[UT] = !0, t[KT] = !0
            }, this))
        },
        _17: function (t) {
            this._mueBindableFlag = !0, this._6c = !0, t._edgeBundleInvalidateFlag = !0, t[KT] = !0
        },
        _mue: function () {
            this._6c || (this._6c = !0, this._k4.forEach(function (t) {
                t[UT] = !0
            }))
        },
        isEmpty: function () {
            return this._k4.isEmpty()
        },
        isPositiveOrder: function (t) {
            return this[PF] == t[Nu] || this[PF] == t[Mu]
        },
        canBind: function (t) {
            return t && this._6c && this._fj(t), this._k4.length > 1 && this._8z[qh] > 1
        },
        _hq: function (t) {
            return this._8z[Jh](t)
        },
        getYOffset: function (t) {
            return this._g7[t.id]
        },
        _4d: function (t) {
            if (!this[NF]()) return void (this._g7 = {});
            var i = {}, n = this._8z[qh];
            if (!(2 > n)) {
                var e = 0, s = this._8z[0];
                i[s.id] = 0;
                for (var h = 1; n > h; h++) {
                    s = this._8z[h];
                    var r = t[mc](s, IY[iP]) || HY[IY[iP]];
                    e += r, i[s.id] = e
                }
                if (!this.isLooped) for (var a = e / 2, h = 0; n > h; h++)s = this._8z[h], i[s.id] -= a;
                this._g7 = i
            }
        },
        _mqq: function (t) {
            return this._g5 == t ? !1 : (this._g5 = t, this[Dw](), !0)
        },
        reverseExpanded: function () {
            return this._mqq(!this._g5)
        },
        _1d: function () {
            this[BF] = !1, this._8z.length = 0;
            var t;
            this._k4[Kf](function (i) {
                if (i.isBundleEnabled()) {
                    if (!this[jF](i)) return t || (t = []), void t.push(i);
                    this._8z[Kh](i)
                }
            }, this), t && (this._8z = t[Wh](this._8z))
        },
        _ex: function (t) {
            return t == this.agentEdge || !this[NF]() || this._g5
        },
        _fj: function (t) {
            this._6c = !1, this._k4[Kf](function (t) {
                t[UT] = !1
            }), this[BF] && this._1d();
            var i = this._g5, n = this[NF](), e = !n || i;
            l(this._8z, function (t) {
                t._$t = !0, t[$F] = e, e && (t[KT] = !0)
            }, this), e ? this._9b(null, t) : (this._9b(this._8z[0], t), this.agentEdge[$F] = !0, this[vR][KT] = !0), e && this._4d(t)
        },
        _9b: function (t, i) {
            if (t != this.agentEdge) {
                var n = this[vR];
                return this.agentEdge = t, i && i._4e(new xq(this, vR, t, n)), !0
            }
        }
    }, K(YU[tr], {
        bindableEdges: {
            get: function () {
                return this._8z
            }
        }, edges: {
            get: function () {
                return this._k4._is
            }
        }, length: {
            get: function () {
                return this._k4 ? this._k4.length : 1
            }
        }, expanded: {
            get: function () {
                return this._g5
            }, set: function (t) {
                return this._g5 == t ? !1 : (this._g5 = t, void this._mue())
            }
        }
    });
    var UU = function () {
        function t(t, i) {
            this[g$] = t, this[pm] = i
        }

        function i() {
            this[FF] = [], this[GF] = 0
        }

        var n = -1e6, e = .8;
        i[tr] = {
            isEmpty: function () {
                return 0 === this.popIdx
            }, push: function (i, n) {
                var e = this[FF][this[GF]];
                e ? (e[g$] = i, e[pm] = n) : this.stack[this[GF]] = new t(i, n), ++this[GF]
            }, pop: function () {
                return this[GF] > 0 ? this[FF][--this.popIdx] : void 0
            }, reset: function () {
                this[GF] = 0
            }
        };
        var s = [], h = new i, r = function () {
            this[pm] = null, this[qF] = [], this.mass = 0, this[zF] = 0, this[HF] = 0, this.left = 0, this.top = 0, this[Hr] = 0, this.right = 0, this[YF] = !1
        }, a = [], o = 0, f = function () {
            var t;
            return a[o] ? (t = a[o], t[qF][0] = null, t[qF][1] = null, t[qF][2] = null, t[qF][3] = null, t[pm] = null, t[UF] = t[zF] = t[HF] = 0, t[Go] = t[Yr] = t.top = t[Hr] = 0, t[YF] = !1) : (t = new r, a[o] = t), ++o, t
        }, u = f(), c = function (t, i) {
            var n = Math.abs(t.x - i.x), e = Math.abs(t.y - i.y);
            return 1e-8 > n && 1e-8 > e
        }, _ = function (t) {
            for (h[WF](), h[Kh](u, t); !h[Nf]();) {
                var i = h.pop(), n = i[g$], e = i[pm];
                if (n.isInternal) {
                    var s = e.x, r = e.y;
                    n[UF] = n.mass + e.mass, n.massX = n.massX + e[UF] * s, n.massY = n[HF] + e[UF] * r;
                    var a = 0, o = n[Go], _ = (n[Yr] + o) / 2, d = n.top, l = (n.bottom + d) / 2;
                    if (s > _) {
                        a += 1;
                        var v = o;
                        o = _, _ += _ - v
                    }
                    if (r > l) {
                        a += 2;
                        var b = d;
                        d = l, l += l - b
                    }
                    var g = n[qF][a];
                    g || (g = f(), g.left = o, g.top = d, g[Yr] = _, g[Hr] = l, n[qF][a] = g), h.push(g, e)
                } else if (n[pm]) {
                    var y = n[pm];
                    if (n[pm] = null, n[YF] = !0, c(y, e)) {
                        if (n[Yr] - n.left < 1e-8) return;
                        do {
                            var m = Math[Sr](), x = (n[Yr] - n[Go]) * m, p = (n[Hr] - n.top) * m;
                            y.x = n.left + x, y.y = n.top + p
                        } while (c(y, e))
                    }
                    h.push(n, y), h[Kh](n, e)
                } else n[pm] = e
            }
        }, d = function (t) {
            var i, h, r, a, o = s, f = 1, c = 0, _ = 1;
            for (o[0] = u; f;) {
                var d = o[c], l = d.body;
                f -= 1, c += 1, l && l !== t ? (h = l.x - t.x, r = l.y - t.y, a = Math[fo](h * h + r * r), 0 === a && (h = (Math[Sr]() - .5) / 50, r = (Math.random() - .5) / 50, a = Math.sqrt(h * h + r * r)), i = n * l[UF] * t.mass / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * h, t.fy = t.fy + i * r) : (h = d[zF] / d[UF] - t.x, r = d.massY / d[UF] - t.y, a = Math[fo](h * h + r * r), 0 === a && (h = (Math[Sr]() - .5) / 50, r = (Math[Sr]() - .5) / 50, a = Math.sqrt(h * h + r * r)), (d[Yr] - d.left) / a < e ? (i = n * d.mass * t[UF] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * h, t.fy = t.fy + i * r) : (d[qF][0] && (o[_] = d.quads[0], f += 1, _ += 1), d.quads[1] && (o[_] = d.quads[1], f += 1, _ += 1), d.quads[2] && (o[_] = d[qF][2], f += 1, _ += 1), d[qF][3] && (o[_] = d[qF][3], f += 1, _ += 1)))
            }
        }, l = function (t, i) {
            n = i;
            var e, s = Number[hl], h = Number.MAX_VALUE, r = Number.MIN_VALUE, a = Number.MIN_VALUE, c = t,
                d = c.length;
            for (e = d; e--;) {
                var l = c[e].x, v = c[e].y;
                s > l && (s = l), l > r && (r = l), h > v && (h = v), v > a && (a = v)
            }
            var b = r - s, g = a - h;
            for (b > g ? a = h + b : r = s + g, o = 0, u = f(), u[Go] = s, u[Yr] = r, u.top = h, u[Hr] = a, e = d; e--;)_(c[e], u)
        };
        return {init: l, update: d}
    }, WU = function (t) {
        t.fx -= t.x * this.attractive, t.fy -= t.y * this[XF]
    }, XU = function (t) {
        if (0 != t.k) {
            var i = this[VF], n = t.from, e = t.to, s = e.x - n.x, h = e.y - n.y, r = s * s + h * h,
                a = Math.sqrt(r) || .1, o = (a - i) * t.k * this[ZF];
            o /= a;
            var f = o * s, u = o * h;
            e.fx -= f, e.fy -= u, n.fx += f, n.fy += u
        }
    };
    Bh[tr] = {
        appendNodeInfo: function (t, i) {
            i.mass = t[KF] || 1, i.fx = 0, i.fy = 0, i.vx = 0, i.vy = 0
        }, appendEdgeInfo: function (t, i) {
            i.k = t[JF] || 1
        }, setMass: function (t, i) {
            t[KF] = i, this[oF] && this[oF].nodes && (t = this[oF][vF][t.id], t && (t.mass = i))
        }, setElasticity: function (t, i) {
            t[JF] = i, this[oF] && this[oF][bM] && (t = this[oF][bM][t.id], t && (t.k = i))
        }, _muo: 50, _i4: .5, timeStep: .15, repulsion: 50, attractive: .1, elastic: 3, _ln: 1e3, _jr: function (t) {
            return this._ln + .3 * (t - this._ln)
        }, _l6: function (t, i) {
            var n = (Date.now(), this[oF][vF]);
            for (var e in n) {
                var s = n[e];
                i && (s.x += Math[Sr]() - .5, s.y += Math[Sr]() - .5), WU[Hh](this, s)
            }
            var h = this[oF].groups;
            if (h) for (var e in h) {
                var r = h[e], a = r[zh], o = 0, f = 0;
                a[Kf](function (t) {
                    o += t.x, f += t.y
                }), o /= a[qh], f /= a[qh];
                var u = 10 * this[XF];
                a[Kf](function (t) {
                    t.fx -= (t.x - o) * u, t.fy -= (t.y - f) * u
                })
            }
            var c = this[QF];
            c || (c = this[QF] = UU()), c.init(this[oF][tG], -this[iG] * this[iG] * this.repulsion);
            for (var e in n) c[nG](n[e]);
            if (this[ZF]) {
                var _ = this[oF][bM];
                for (var e in _) XU[Hh](this, _[e])
            }
            return this._l7(t)
        }, _l7: function (t) {
            var i = this[oF].minEnergy, n = (this.layoutDatas[eG], this.layoutDatas[vF]), t = this[gF], e = 0,
                s = this._i4;
            for (var h in n) {
                var r = n[h], a = r.fx / r[UF], o = r.fy / r[UF], f = r.vx += a * t, u = r.vy += o * t;
                r.x += f * t, r.y += u * t, i > e && (e += 2 * (f * f + u * u)), r.fx = 0, r.fy = 0, r.vx *= s, r.vy *= s
            }
            return this[oF][eG] = e, e >= i
        }
    }, E(Bh, Nh), vz[sG] = Bh;
    var VU = function (t) {
        this[b$] = t
    };
    VU[tr] = {
        oldLocations: null, _eu: null, duration: 700, animationType: cz[dD], _7i: function (t) {
            if (this._eu = t, this.oldLocations = {}, t) for (var i in t) {
                var n = t[i], e = n[g$];
                this[hG][i] = {x: e.x, y: e.y}
            }
        }, setLocation: function (t, i, n) {
            t[XP](i, n)
        }, forEach: function (t, i) {
            for (var n in this[b$]) {
                var e = this[hG][n], s = this[b$][n];
                t.call(i, e, s)
            }
        }, _ji: function (t) {
            this.forEach(function (i, n) {
                var e = n.node, s = i.x + (n.x - i.x) * t, h = i.y + (n.y - i.y) * t;
                this.setLocation(e, s, h)
            }, this)
        }, stop: function () {
            this._mqnimate && this._mqnimate._lo()
        }, start: function (t) {
            this._mqnimate ? (this[rG]._lo(), this[rG]._ia = this.duration, this._mqnimate[aG] = this.animationType, this[rG][oG] = this._onfinish) : this[rG] = new dz(this._ji, this, this[TD], this[v$]), this[rG]._kc(t)
        }
    }, K(VU[tr], {
        locations: {
            get: function () {
                return this._eu
            }, set: function (t) {
                this._eu != t && this._7i(t)
            }
        }
    });
    var ZU = function (t) {
        var i, n = new iq;
        return t.forEach(function (t) {
            t instanceof wY && (t[fG]() ? !i && t[uG]() && (i = t) : n.add(t))
        }), n[Nf]() && i && n.add(i), n
    }, KU = function (t, i, n, e, s, h) {
        if (i instanceof Aq) return t(i, n, e, s, h), i;
        if (i instanceof YY) {
            var r = new iq;
            i[eM].forEach(function (t) {
                return i[q_](t) ? t._hu() && t._g5 && t[Gh]() ? void (t[wM] && (t.$location[UM] = !1)) : void r.add(t) : void 0
            }), i = r
        }
        var i = ZU(i, e);
        return l(i, function (i) {
            t(i, n, e, s, h)
        }), i
    }, JU = function (t, i, n, e, s) {
        return KU(tW, t, i, n, e, s)
    }, QU = function (t, i, n, e, s) {
        return KU(iW, t, i, n, e, s)
    };
    hs.prototype[cG] = function (t, i, n, e) {
        JU(this, t, i, n, e)
    }, hs[tr].forEachByTopoBreadthFirstSearch = function (t, i, n, e) {
        QU(this, t, i, n, e)
    };
    var tW = function (t, i, n, e, s) {
        function h(t, i, n, e, s, r, a, o) {
            t[xd] = r, e || i[Hh](n, t, o, a), jh(t, function (o) {
                h(o, i, n, e, s, r, a + 1, t)
            }, o, s, r, n), e && i[Hh](n, t, o, a)
        }

        h(t, i, n, e, s, {}, 0)
    }, iW = function (t, i, n, e, s) {
        function h(t, i, n, e, s, r, a) {
            var o, f = t[qh];
            t[Kf](function (t, h) {
                var u = t.v;
                u._marker = r, e || i[Hh](n, u, t._from, a, h, f), jh(u, function (t) {
                    o || (o = []), t[xd] = r, o[Kh]({v: t, _from: u})
                }, u, s, r, n)
            }), o && h(o, i, n, e, s, r, a + 1), e && t.forEach(function (t, e) {
                i.call(n, t.v, t[_G], a, e, f)
            })
        }

        h([{v: t}], i, n, e, s, {}, 0)
    };
    vz[dG] = V, vz.log = ti, vz[Qo] = ni, vz.trace = ii, vz[lG] = FG, vz[vG] = $G, vz[bG] = zG, vz[gG] = HG, vz[yG] = YG, vz[mG] = WG, vz[xG] = UG, vz[pG] = XG, vz[EG] = HY, vz.Defaults = tq, vz[rR] = IY, vz[wG] = bz, vz.Graphs = nH, vz[TG] = YY, vz[MG] = OY, vz.ElementUI = FY, vz[kG] = ls, vz.EdgeUI = ds, vz.LabelUI = qY, vz[OG] = GY, vz.Shapes = MY, vz[SG] = Qz, vz[mL] = Nz, vz[IG] = Ch, vz.Element = pY, vz[_P] = wY, vz[oR] = EY, vz.GraphModel = hs, vz.EdgeBundle = YU, vz[AG] = RU, vz.name = CG;
    var nW = LG;
    return vz.version = PG, vz[CE] = RG, vz[LE] = "Copyright © 2016 Qunee.com", vz.css = li, vz[DG] = UY, ti = function () {}, vz.publishDate = NG, vz
}(window, document);
