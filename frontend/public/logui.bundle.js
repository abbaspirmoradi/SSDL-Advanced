/*
	LogUI Prebuilt Client Library
	Version 0.5.4a
	
	See https://www.github.com/logui-framework/ for more information on what this library does.
	
	Published Date: 2022-02-03
*/

var LogUI = function () {
    "use strict";

    function e(e, t) {
        return e(t = {exports: {}}, t.exports), t.exports
    }

    var h = e(function (e) {
        var t = function (i) {
            var f, e = Object.prototype, l = e.hasOwnProperty, t = "function" == typeof Symbol ? Symbol : {},
                o = t.iterator || "@@iterator", n = t.asyncIterator || "@@asyncIterator",
                r = t.toStringTag || "@@toStringTag";

            function a(e, t, n) {
                return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t]
            }

            try {
                a({}, "")
            } catch (e) {
                a = function (e, t, n) {
                    return e[t] = n
                }
            }

            function s(e, t, n, r) {
                var a, i, s, c, o = t && t.prototype instanceof y ? t : y, u = Object.create(o.prototype),
                    l = new k(r || []);
                return u._invoke = (a = e, i = n, s = l, c = p, function (e, t) {
                    if (c === m) throw new Error("Generator is already running");
                    if (c === v) {
                        if ("throw" === e) throw t;
                        return j()
                    }
                    for (s.method = e, s.arg = t; ;) {
                        var n = s.delegate;
                        if (n) {
                            var r = function e(t, n) {
                                var r = t.iterator[n.method];
                                if (r === f) {
                                    if (n.delegate = null, "throw" === n.method) {
                                        if (t.iterator.return && (n.method = "return", n.arg = f, e(t, n), "throw" === n.method)) return g;
                                        n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return g
                                }
                                var o = h(r, t.iterator, n.arg);
                                if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, g;
                                var a = o.arg;
                                if (!a) return n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g;
                                {
                                    if (!a.done) return a;
                                    n[t.resultName] = a.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = f)
                                }
                                n.delegate = null;
                                return g
                            }(n, s);
                            if (r) {
                                if (r === g) continue;
                                return r
                            }
                        }
                        if ("next" === s.method) s.sent = s._sent = s.arg; else if ("throw" === s.method) {
                            if (c === p) throw c = v, s.arg;
                            s.dispatchException(s.arg)
                        } else "return" === s.method && s.abrupt("return", s.arg);
                        c = m;
                        var o = h(a, i, s);
                        if ("normal" === o.type) {
                            if (c = s.done ? v : d, o.arg === g) continue;
                            return {value: o.arg, done: s.done}
                        }
                        "throw" === o.type && (c = v, s.method = "throw", s.arg = o.arg)
                    }
                }), u
            }

            function h(e, t, n) {
                try {
                    return {type: "normal", arg: e.call(t, n)}
                } catch (e) {
                    return {type: "throw", arg: e}
                }
            }

            i.wrap = s;
            var p = "suspendedStart", d = "suspendedYield", m = "executing", v = "completed", g = {};

            function y() {
            }

            function c() {
            }

            function u() {
            }

            var b = {};
            b[o] = function () {
                return this
            };
            var w = Object.getPrototypeOf, E = w && w(w(L([])));
            E && E !== e && l.call(E, o) && (b = E);
            var S = u.prototype = y.prototype = Object.create(b);

            function A(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    a(e, t, function (e) {
                        return this._invoke(t, e)
                    })
                })
            }

            function I(c, u) {
                var t;
                this._invoke = function (n, r) {
                    function e() {
                        return new u(function (e, t) {
                            !function t(e, n, r, o) {
                                var a = h(c[e], c, n);
                                if ("throw" !== a.type) {
                                    var i = a.arg, s = i.value;
                                    return s && "object" == typeof s && l.call(s, "__await") ? u.resolve(s.__await).then(function (e) {
                                        t("next", e, r, o)
                                    }, function (e) {
                                        t("throw", e, r, o)
                                    }) : u.resolve(s).then(function (e) {
                                        i.value = e, r(i)
                                    }, function (e) {
                                        return t("throw", e, r, o)
                                    })
                                }
                                o(a.arg)
                            }(n, r, e, t)
                        })
                    }

                    return t = t ? t.then(e, e) : e()
                }
            }

            function O(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function x(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function k(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(O, this), this.reset(!0)
            }

            function L(t) {
                if (t) {
                    var e = t[o];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1, r = function e() {
                            for (; ++n < t.length;) if (l.call(t, n)) return e.value = t[n], e.done = !1, e;
                            return e.value = f, e.done = !0, e
                        };
                        return r.next = r
                    }
                }
                return {next: j}
            }

            function j() {
                return {value: f, done: !0}
            }

            return ((c.prototype = S.constructor = u).constructor = c).displayName = a(u, r, "GeneratorFunction"), i.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === c || "GeneratorFunction" === (t.displayName || t.name))
            }, i.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, a(e, r, "GeneratorFunction")), e.prototype = Object.create(S), e
            }, i.awrap = function (e) {
                return {__await: e}
            }, A(I.prototype), I.prototype[n] = function () {
                return this
            }, i.AsyncIterator = I, i.async = function (e, t, n, r, o) {
                void 0 === o && (o = Promise);
                var a = new I(s(e, t, n, r), o);
                return i.isGeneratorFunction(t) ? a : a.next().then(function (e) {
                    return e.done ? e.value : a.next()
                })
            }, A(S), a(S, r, "Generator"), S[o] = function () {
                return this
            }, S.toString = function () {
                return "[object Generator]"
            }, i.keys = function (n) {
                var e, r = [];
                for (e in n) r.push(e);
                return r.reverse(), function e() {
                    for (; r.length;) {
                        var t = r.pop();
                        if (t in n) return e.value = t, e.done = !1, e
                    }
                    return e.done = !0, e
                }
            }, i.values = L, k.prototype = {
                constructor: k, reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = f, this.done = !1, this.delegate = null, this.method = "next", this.arg = f, this.tryEntries.forEach(x), !e) for (var t in this) "t" === t.charAt(0) && l.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = f)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (n) {
                    if (this.done) throw n;
                    var r = this;

                    function e(e, t) {
                        return a.type = "throw", a.arg = n, r.next = e, t && (r.method = "next", r.arg = f), !!t
                    }

                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var o = this.tryEntries[t], a = o.completion;
                        if ("root" === o.tryLoc) return e("end");
                        if (o.tryLoc <= this.prev) {
                            var i = l.call(o, "catchLoc"), s = l.call(o, "finallyLoc");
                            if (i && s) {
                                if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                            } else if (i) {
                                if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
                            } else {
                                if (!s) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && l.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var o = r;
                            break
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var a = o ? o.completion : {};
                    return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, g) : this.complete(a)
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), g
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r, o = n.completion;
                            return "throw" === o.type && (r = o.arg, x(n)), r
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (e, t, n) {
                    return this.delegate = {
                        iterator: L(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = f), g
                }
            }, i
        }(e.exports);
        try {
            regeneratorRuntime = t
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(t)
        }
    });

    function c(e, t, n, r, o, a, i) {
        try {
            var s = e[a](i), c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o)
    }

    var i, t, n, r, p = function (s) {
            return function () {
                var e = this, i = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, i);

                    function o(e) {
                        c(r, t, n, o, a, "next", e)
                    }

                    function a(e) {
                        c(r, t, n, o, a, "throw", e)
                    }

                    o(void 0)
                })
            }
        }, s = e(function (t) {
            function n(e) {
                return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = n = function (e) {
                    return typeof e
                } : t.exports = n = function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(e)
            }

            t.exports = n
        }),
        d = (i = window, (t = {}).$ = i.document.querySelector.bind(i.document), t.$$ = i.document.querySelectorAll.bind(i.document), t.console = function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], r = "", o = console.log;
            if (t && (r = " (".concat(t, ")")), n && (o = console.warn), i.LogUI.Config.getConfigProperty("verbose") || n) {
                var a = (new Date).getTime() - i.LogUI.Config.getInitTimestamp();
                if ("object" === s(e) && null !== e) return o("LogUI".concat(r, " @ ").concat(a, "ms > Logged object below")), void o(e);
                o("LogUI".concat(r, " @ ").concat(a, "ms > ").concat(e))
            }
        }, t.getElementDescendant = function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : ".";
            if (!t || t == []) return e;
            for (var r = t.split(n); r.length && (e = e[r.shift()]);) ;
            return e
        }, t.extendObject = function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }, t), m = {verbose: !0, overrideEqualSpecificity: !0, sessionUUID: null},
        v = (r = ["console", "document", "document.documentElement", "document.querySelector", "document.querySelectorAll", "navigator", "addEventListener", "sessionStorage", "MutationObserver", "Number", "WeakMap", "Map", "Date", "Object"], (n = {}).getFeatures = function () {
            return r
        }, n.addFeature = function (e) {
            r.push(e)
        }, n), g = 2147483647, y = 36, b = 1, w = 26, E = 38, S = 700, A = 72, I = 128, O = "-", T = /[^\x20-\x7E]/,
        o = /[\x2E\u3002\uFF0E\uFF61]/g, a = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        }, x = y - b, k = Math.floor, L = String.fromCharCode;

    function j(e) {
        throw new RangeError(a[e])
    }

    function D(e, t) {
        var n = e.split("@"), r = "";
        return 1 < n.length && (r = n[0] + "@", e = n[1]), r + function (e, t) {
            for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
            return r
        }((e = e.replace(o, ".")).split("."), t).join(".")
    }

    function C(e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
    }

    function _(e) {
        for (var t, n, r, o, a, i, s, c, u, l, f, h = [], p = (e = function (e) {
            for (var t, n, r = [], o = 0, a = e.length; o < a;) 55296 <= (t = e.charCodeAt(o++)) && t <= 56319 && o < a ? 56320 == (64512 & (n = e.charCodeAt(o++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--) : r.push(t);
            return r
        }(e)).length, d = I, m = A, v = t = 0; v < p; ++v) (c = e[v]) < 128 && h.push(L(c));
        for (n = r = h.length, r && h.push(O); n < p;) {
            for (o = g, v = 0; v < p; ++v) d <= (c = e[v]) && c < o && (o = c);
            for (o - d > k((g - t) / (u = n + 1)) && j("overflow"), t += (o - d) * u, d = o, v = 0; v < p; ++v) if ((c = e[v]) < d && ++t > g && j("overflow"), c == d) {
                for (a = t, i = y; !(a < (s = i <= m ? b : m + w <= i ? w : i - m)); i += y) f = a - s, l = y - s, h.push(L(C(s + f % l, 0))), a = k(f / l);
                h.push(L(C(a, 0))), m = function (e, t, n) {
                    var r = 0;
                    for (e = n ? k(e / S) : e >> 1, e += k(e / t); x * w >> 1 < e; r += y) e = k(e / x);
                    return k(r + (x + 1) * e / (e + E))
                }(t, u, n == r), t = 0, ++n
            }
            ++t, ++d
        }
        return h.join("")
    }

    function U(e) {
        return null === e
    }

    function R(e) {
        return "string" == typeof e
    }

    function P(e) {
        return "object" == typeof e && null !== e
    }

    var F = Array.isArray || function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    };

    function M(e) {
        switch (typeof e) {
            case"string":
                return e;
            case"boolean":
                return e ? "true" : "false";
            case"number":
                return isFinite(e) ? e : "";
            default:
                return ""
        }
    }

    function q(e, t) {
        if (e.map) return e.map(t);
        for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
        return n
    }

    var z = Object.keys || function (e) {
        var t, n = [];
        for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
        return n
    };

    function $(e, t, n, r) {
        t = t || "&", n = n || "=";
        var o = {};
        if ("string" != typeof e || 0 === e.length) return o;
        var a = /\+/g;
        e = e.split(t);
        var i = 1e3;
        r && "number" == typeof r.maxKeys && (i = r.maxKeys);
        var s = e.length;
        0 < i && i < s && (s = i);
        for (var c, u, l = 0; l < s; ++l) {
            var f, h = e[l].replace(a, "%20"), p = h.indexOf(n),
                d = 0 <= p ? (f = h.substr(0, p), h.substr(p + 1)) : (f = h, ""), m = decodeURIComponent(f),
                v = decodeURIComponent(d);
            c = o, u = m, Object.prototype.hasOwnProperty.call(c, u) ? F(o[m]) ? o[m].push(v) : o[m] = [o[m], v] : o[m] = v
        }
        return o
    }

    var f = {
        parse: ee, resolve: function (e, t) {
            return ee(e, !1, !0).resolve(t)
        }, resolveObject: function (e, t) {
            return e ? ee(e, !1, !0).resolveObject(t) : t
        }, format: function (e) {
            R(e) && (e = te({}, e));
            return ne(e)
        }, Url: V
    };

    function V() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }

    var N = /^([a-z0-9.+-]+:)/i, u = /:[0-9]*$/, Z = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        l = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]), G = ["'"].concat(l),
        W = ["%", "/", "?", ";", "#"].concat(G), H = ["/", "?", "#"], K = 255, J = /^[+a-z0-9A-Z_-]{0,63}$/,
        B = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Y = {javascript: !0, "javascript:": !0},
        X = {javascript: !0, "javascript:": !0}, Q = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        };

    function ee(e, t, n) {
        if (e && P(e) && e instanceof V) return e;
        var r = new V;
        return r.parse(e, t, n), r
    }

    function te(e, t, n, r) {
        if (!R(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
        var o = t.indexOf("?"), a = -1 !== o && o < t.indexOf("#") ? "?" : "#", i = t.split(a);
        i[0] = i[0].replace(/\\/g, "/");
        var s = (s = t = i.join(a)).trim();
        if (!r && 1 === t.split("#").length) {
            var c = Z.exec(s);
            if (c) return e.path = s, e.href = s, e.pathname = c[1], c[2] ? (e.search = c[2], e.query = n ? $(e.search.substr(1)) : e.search.substr(1)) : n && (e.search = "", e.query = {}), e
        }
        var u, l, f, h, p = N.exec(s);
        if (p && (u = (p = p[0]).toLowerCase(), e.protocol = u, s = s.substr(p.length)), (r || p || s.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(l = "//" === s.substr(0, 2)) || p && X[p] || (s = s.substr(2), e.slashes = !0)), !X[p] && (l || p && !Q[p])) {
            var d, m, v = -1;
            for (b = 0; b < H.length; b++) -1 !== (f = s.indexOf(H[b])) && (-1 === v || f < v) && (v = f);
            for (-1 !== (m = -1 === v ? s.lastIndexOf("@") : s.lastIndexOf("@", v)) && (d = s.slice(0, m), s = s.slice(m + 1), e.auth = decodeURIComponent(d)), v = -1, b = 0; b < W.length; b++) -1 !== (f = s.indexOf(W[b])) && (-1 === v || f < v) && (v = f);
            -1 === v && (v = s.length), e.host = s.slice(0, v), s = s.slice(v), re(e), e.hostname = e.hostname || "";
            var g = "[" === e.hostname[0] && "]" === e.hostname[e.hostname.length - 1];
            if (!g) for (var y = e.hostname.split(/\./), b = 0, w = y.length; b < w; b++) {
                var E = y[b];
                if (E && !E.match(J)) {
                    for (var S = "", A = 0, I = E.length; A < I; A++) 127 < E.charCodeAt(A) ? S += "x" : S += E[A];
                    if (!S.match(J)) {
                        var O = y.slice(0, b), x = y.slice(b + 1), k = E.match(B);
                        k && (O.push(k[1]), x.unshift(k[2])), x.length && (s = "/" + x.join(".") + s), e.hostname = O.join(".");
                        break
                    }
                }
            }
            e.hostname.length > K ? e.hostname = "" : e.hostname = e.hostname.toLowerCase(), g || (e.hostname = D(e.hostname, function (e) {
                return T.test(e) ? "xn--" + _(e) : e
            })), h = e.port ? ":" + e.port : "";
            var L = e.hostname || "";
            e.host = L + h, e.href += e.host, g && (e.hostname = e.hostname.substr(1, e.hostname.length - 2), "/" !== s[0] && (s = "/" + s))
        }
        if (!Y[u]) for (b = 0, w = G.length; b < w; b++) {
            var j, C = G[b];
            -1 !== s.indexOf(C) && ((j = encodeURIComponent(C)) === C && (j = escape(C)), s = s.split(C).join(j))
        }
        var U = s.indexOf("#");
        -1 !== U && (e.hash = s.substr(U), s = s.slice(0, U));
        var P, F = s.indexOf("?");
        return -1 !== F ? (e.search = s.substr(F), e.query = s.substr(F + 1), n && (e.query = $(e.query)), s = s.slice(0, F)) : n && (e.search = "", e.query = {}), s && (e.pathname = s), Q[u] && e.hostname && !e.pathname && (e.pathname = "/"), (e.pathname || e.search) && (h = e.pathname || "", P = e.search || "", e.path = h + P), e.href = ne(e), e
    }

    function ne(e) {
        var t = e.auth || "";
        t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
        var n, r, o, a, i = e.protocol || "", s = e.pathname || "", c = e.hash || "", u = !1, l = "";
        e.host ? u = t + e.host : e.hostname && (u = t + (-1 === e.hostname.indexOf(":") ? e.hostname : "[" + this.hostname + "]"), e.port && (u += ":" + e.port)), e.query && P(e.query) && Object.keys(e.query).length && (n = e.query, r = r || "&", o = o || "=", null === n && (n = void 0), l = "object" == typeof n ? q(z(n), function (e) {
            var t = encodeURIComponent(M(e)) + o;
            return F(n[e]) ? q(n[e], function (e) {
                return t + encodeURIComponent(M(e))
            }).join(r) : t + encodeURIComponent(M(n[e]))
        }).join(r) : a ? encodeURIComponent(M(a)) + o + encodeURIComponent(M(n)) : "");
        var f = e.search || l && "?" + l || "";
        return i && ":" !== i.substr(-1) && (i += ":"), e.slashes || (!i || Q[i]) && !1 !== u ? (u = "//" + (u || ""), s && "/" !== s.charAt(0) && (s = "/" + s)) : u = u || "", c && "#" !== c.charAt(0) && (c = "#" + c), f && "?" !== f.charAt(0) && (f = "?" + f), i + u + (s = s.replace(/[?#]/g, function (e) {
            return encodeURIComponent(e)
        })) + (f = f.replace("#", "%23")) + c
    }

    function re(e) {
        var t = e.host, n = u.exec(t);
        n && (":" !== (n = n[0]) && (e.port = n.substr(1)), t = t.substr(0, t.length - n.length)), t && (e.hostname = t)
    }

    V.prototype.parse = function (e, t, n) {
        return te(this, e, t, n)
    }, V.prototype.format = function () {
        return ne(this)
    }, V.prototype.resolve = function (e) {
        return this.resolveObject(ee(e, !1, !0)).format()
    }, V.prototype.resolveObject = function (e) {
        var t;
        R(e) && ((t = new V).parse(e, !1, !0), e = t);
        for (var n, r, o = new V, a = Object.keys(this), i = 0; i < a.length; i++) {
            var s = a[i];
            o[s] = this[s]
        }
        if (o.hash = e.hash, "" === e.href) return o.href = o.format(), o;
        if (e.slashes && !e.protocol) {
            for (var c = Object.keys(e), u = 0; u < c.length; u++) {
                var l = c[u];
                "protocol" !== l && (o[l] = e[l])
            }
            return Q[o.protocol] && o.hostname && !o.pathname && (o.path = o.pathname = "/"), o.href = o.format(), o
        }
        if (e.protocol && e.protocol !== o.protocol) {
            if (!Q[e.protocol]) {
                for (var f = Object.keys(e), h = 0; h < f.length; h++) {
                    var p = f[h];
                    o[p] = e[p]
                }
                return o.href = o.format(), o
            }
            if (o.protocol = e.protocol, e.host || X[e.protocol]) o.pathname = e.pathname; else {
                for (E = (e.pathname || "").split("/"); E.length && !(e.host = E.shift());) ;
                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== E[0] && E.unshift(""), E.length < 2 && E.unshift(""), o.pathname = E.join("/")
            }
            return o.search = e.search, o.query = e.query, o.host = e.host || "", o.auth = e.auth, o.hostname = e.hostname || e.host, o.port = e.port, (o.pathname || o.search) && (n = o.pathname || "", r = o.search || "", o.path = n + r), o.slashes = o.slashes || e.slashes, o.href = o.format(), o
        }
        var d, m = o.pathname && "/" === o.pathname.charAt(0), v = e.host || e.pathname && "/" === e.pathname.charAt(0),
            g = v || m || o.host && e.pathname, y = g, b = o.pathname && o.pathname.split("/") || [],
            w = o.protocol && !Q[o.protocol], E = e.pathname && e.pathname.split("/") || [];
        if (w && (o.hostname = "", o.port = null, o.host && ("" === b[0] ? b[0] = o.host : b.unshift(o.host)), o.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === E[0] ? E[0] = e.host : E.unshift(e.host)), e.host = null), g = g && ("" === E[0] || "" === b[0])), v) o.host = e.host || "" === e.host ? e.host : o.host, o.hostname = e.hostname || "" === e.hostname ? e.hostname : o.hostname, o.search = e.search, o.query = e.query, b = E; else if (E.length) (b = b || []).pop(), b = b.concat(E), o.search = e.search, o.query = e.query; else if (null != e.search) return w && (o.hostname = o.host = b.shift(), (d = !!(o.host && 0 < o.host.indexOf("@")) && o.host.split("@")) && (o.auth = d.shift(), o.host = o.hostname = d.shift())), o.search = e.search, o.query = e.query, U(o.pathname) && U(o.search) || (o.path = (o.pathname ? o.pathname : "") + (o.search ? o.search : "")), o.href = o.format(), o;
        if (!b.length) return o.pathname = null, o.search ? o.path = "/" + o.search : o.path = null, o.href = o.format(), o;
        for (var S = b.slice(-1)[0], A = (o.host || e.host || 1 < b.length) && ("." === S || ".." === S) || "" === S, I = 0, O = b.length; 0 <= O; O--) "." === (S = b[O]) ? b.splice(O, 1) : ".." === S ? (b.splice(O, 1), I++) : I && (b.splice(O, 1), I--);
        if (!g && !y) for (; I--;) b.unshift("..");
        !g || "" === b[0] || b[0] && "/" === b[0].charAt(0) || b.unshift(""), A && "/" !== b.join("/").substr(-1) && b.push("");
        var x = "" === b[0] || b[0] && "/" === b[0].charAt(0);
        return w && (o.hostname = o.host = !x && b.length ? b.shift() : "", (d = !!(o.host && 0 < o.host.indexOf("@")) && o.host.split("@")) && (o.auth = d.shift(), o.host = o.hostname = d.shift())), (g = g || o.host && b.length) && !x && b.unshift(""), b.length ? o.pathname = b.join("/") : (o.pathname = null, o.path = null), U(o.pathname) && U(o.search) || (o.path = (o.pathname ? o.pathname : "") + (o.search ? o.search : "")), o.auth = e.auth || o.auth, o.slashes = o.slashes || e.slashes, o.href = o.format(), o
    }, V.prototype.parseHost = function () {
        return re(this)
    };
    var oe = e(function (e, t) {
            var n = t.ValidationError = function (e, t, n, r, o, a) {
                r && (this.property = r), e && (this.message = e), n && (n.id ? this.schema = n.id : this.schema = n), t && (this.instance = t), this.name = o, this.argument = a, this.stack = this.toString()
            };
            n.prototype.toString = function () {
                return this.property + " " + this.message
            };
            var r = t.ValidatorResult = function (e, t, n, r) {
                this.instance = e, this.schema = t, this.propertyPath = r.propertyPath, this.errors = [], this.throwError = n && n.throwError, this.disableFormat = n && !0 === n.disableFormat
            };

            function o(e, t) {
                return t + ": " + e.toString() + "\n"
            }

            r.prototype.addError = function (e) {
                var t;
                if ("string" == typeof e) t = new n(e, this.instance, this.schema, this.propertyPath); else {
                    if (!e) throw new Error("Missing error detail");
                    if (!e.message) throw new Error("Missing error message");
                    if (!e.name) throw new Error("Missing validator type");
                    t = new n(e.message, this.instance, this.schema, this.propertyPath, e.name, e.argument)
                }
                if (this.throwError) throw t;
                return this.errors.push(t), t
            }, r.prototype.importErrors = function (e) {
                "string" == typeof e || e && e.validatorType ? this.addError(e) : e && e.errors && Array.prototype.push.apply(this.errors, e.errors)
            }, r.prototype.toString = function () {
                return this.errors.map(o).join("")
            }, Object.defineProperty(r.prototype, "valid", {
                get: function () {
                    return !this.errors.length
                }
            });
            var a = t.SchemaError = function e(t, n) {
                this.message = t, this.schema = n, Error.call(this, t), Error.captureStackTrace(this, e)
            };
            a.prototype = Object.create(Error.prototype, {
                constructor: {value: a, enumerable: !1},
                name: {value: "SchemaError", enumerable: !1}
            });
            var i = t.SchemaContext = function (e, t, n, r, o) {
                this.schema = e, this.options = t, this.propertyPath = n, this.base = r, this.schemas = o
            };
            i.prototype.resolve = function (e) {
                return f.resolve(this.base, e)
            }, i.prototype.makeChild = function (e, t) {
                var n = void 0 === t ? this.propertyPath : this.propertyPath + c(t), r = f.resolve(this.base, e.id || ""),
                    o = new i(e, this.options, n, r, Object.create(this.schemas));
                return e.id && !o.schemas[r] && (o.schemas[r] = e), o
            };
            var s = t.FORMAT_REGEXPS = {
                "date-time": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
                date: /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
                time: /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,
                email: /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
                "ip-address": /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
                uri: /^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/,
                color: /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
                hostname: /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
                "host-name": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
                alpha: /^[a-zA-Z]+$/,
                alphanumeric: /^[a-zA-Z0-9]+$/,
                "utc-millisec": function (e) {
                    return "string" == typeof e && parseFloat(e) === parseInt(e, 10) && !isNaN(e)
                },
                regex: function (e) {
                    var t = !0;
                    try {
                        new RegExp(e)
                    } catch (e) {
                        t = !1
                    }
                    return t
                },
                style: /\s*(.+?):\s*([^;]+);?/,
                phone: /^\+(?:[0-9] ?){6,14}[0-9]$/
            };
            s.regexp = s.regex, s.pattern = s.regex, s.ipv4 = s["ip-address"], t.isFormat = function (e, t, n) {
                if ("string" == typeof e && void 0 !== s[t]) {
                    if (s[t] instanceof RegExp) return s[t].test(e);
                    if ("function" == typeof s[t]) return s[t](e)
                } else if (n && n.customFormats && "function" == typeof n.customFormats[t]) return n.customFormats[t](e);
                return !0
            };
            var c = t.makeSuffix = function (e) {
                return (e = e.toString()).match(/[.\s\[\]]/) || e.match(/^[\d]/) ? e.match(/^\d+$/) ? "[" + e + "]" : "[" + JSON.stringify(e) + "]" : "." + e
            };

            function u(e, t) {
                var n = Array.isArray(t), r = n ? [] : {};
                return n ? (e = e || [], r = r.concat(e), t.forEach(function (e, t, n, r) {
                    "object" == typeof n ? t[r] = u(e[r], n) : -1 === e.indexOf(n) && t.push(n)
                }.bind(null, e, r))) : (e && "object" == typeof e && Object.keys(e).forEach(function (e, t, n) {
                    t[n] = e[n]
                }.bind(null, e, r)), Object.keys(t).forEach(function (e, t, n, r) {
                    "object" == typeof t[r] && t[r] && e[r] ? n[r] = u(e[r], t[r]) : n[r] = t[r]
                }.bind(null, e, t, r))), r
            }

            function l(e) {
                return "/" + encodeURIComponent(e).replace(/~/g, "%7E")
            }

            t.deepCompareStrict = function n(r, o) {
                if (typeof r != typeof o) return !1;
                if (Array.isArray(r)) return !!Array.isArray(o) && (r.length === o.length && r.every(function (e, t) {
                    return n(r[t], o[t])
                }));
                if ("object" != typeof r) return r === o;
                if (!r || !o) return r === o;
                var e = Object.keys(r), t = Object.keys(o);
                return e.length === t.length && e.every(function (e) {
                    return n(r[e], o[e])
                })
            }, e.exports.deepMerge = u, t.objectGetPath = function (e, t) {
                for (var n, r = t.split("/").slice(1); "string" == typeof (n = r.shift());) {
                    var o = decodeURIComponent(n.replace(/~0/, "~").replace(/~1/g, "/"));
                    if (!(o in e)) return;
                    e = e[o]
                }
                return e
            }, t.encodePath = function (e) {
                return e.map(l).join("")
            }, t.getDecimalPlaces = function (e) {
                var t = 0;
                if (isNaN(e)) return t;
                "number" != typeof e && (e = Number(e));
                var n = e.toString().split("e");
                if (2 === n.length) {
                    if ("-" !== n[1][0]) return t;
                    t = Number(n[1].slice(1))
                }
                var r = n[0].split(".");
                return 2 === r.length && (t += r[1].length), t
            }
        }),
        ae = (oe.ValidationError, oe.ValidatorResult, oe.SchemaError, oe.SchemaContext, oe.FORMAT_REGEXPS, oe.isFormat, oe.makeSuffix, oe.deepCompareStrict, oe.deepMerge, oe.objectGetPath, oe.encodePath, oe.getDecimalPlaces, oe.ValidatorResult),
        ie = oe.SchemaError, se = {
            ignoreProperties: {
                id: !0,
                default: !0,
                description: !0,
                title: !0,
                exclusiveMinimum: !0,
                exclusiveMaximum: !0,
                additionalItems: !0,
                $schema: !0,
                $ref: !0,
                extends: !0
            }
        }, ce = se.validators = {};

    function ue(e, t, n, r, o) {
        var a = t.throwError;
        t.throwError = !1;
        var i = this.validateSchema(e, o, t, n);
        return t.throwError = a, !i.valid && r instanceof Function && r(i), i.valid
    }

    function le(e, t, n, r, o, a) {
        var i, s;
        this.types.object(e) && (t.properties && void 0 !== t.properties[o] || (!1 === t.additionalProperties ? a.addError({
            name: "additionalProperties",
            argument: o,
            message: "additionalProperty " + JSON.stringify(o) + " exists in instance when not allowed"
        }) : (i = t.additionalProperties || {}, "function" == typeof n.preValidateProperty && n.preValidateProperty(e, o, i, n, r), (s = this.validateSchema(e[o], i, n, r.makeChild(i, o))).instance !== a.instance[o] && (a.instance[o] = s.instance), a.importErrors(s))))
    }

    ce.type = function (e, t, n, r) {
        if (void 0 === e) return null;
        var o, a = new ae(e, t, n, r), i = Array.isArray(t.type) ? t.type : [t.type];
        return i.some(this.testType.bind(this, e, t, n, r)) || (o = i.map(function (e) {
            return e.id && "<" + e.id + ">" || e + ""
        }), a.addError({name: "type", argument: o, message: "is not of a type(s) " + o})), a
    }, ce.anyOf = function (e, t, n, r) {
        if (void 0 === e) return null;
        var o, a = new ae(e, t, n, r), i = new ae(e, t, n, r);
        if (!Array.isArray(t.anyOf)) throw new ie("anyOf must be an array");
        return t.anyOf.some(ue.bind(this, e, n, r, function (e) {
            i.importErrors(e)
        })) || (o = t.anyOf.map(function (e, t) {
            return e.id && "<" + e.id + ">" || e.title && JSON.stringify(e.title) || e.$ref && "<" + e.$ref + ">" || "[subschema " + t + "]"
        }), n.nestedErrors && a.importErrors(i), a.addError({
            name: "anyOf",
            argument: o,
            message: "is not any of " + o.join(",")
        })), a
    }, ce.allOf = function (o, e, a, i) {
        if (void 0 === o) return null;
        if (!Array.isArray(e.allOf)) throw new ie("allOf must be an array");
        var s = new ae(o, e, a, i), c = this;
        return e.allOf.forEach(function (e, t) {
            var n, r = c.validateSchema(o, e, a, i);
            r.valid || (n = e.id && "<" + e.id + ">" || e.title && JSON.stringify(e.title) || e.$ref && "<" + e.$ref + ">" || "[subschema " + t + "]", s.addError({
                name: "allOf",
                argument: {id: n, length: r.errors.length, valid: r},
                message: "does not match allOf schema " + n + " with " + r.errors.length + " error[s]:"
            }), s.importErrors(r))
        }), s
    }, ce.oneOf = function (e, t, n, r) {
        if (void 0 === e) return null;
        if (!Array.isArray(t.oneOf)) throw new ie("oneOf must be an array");
        var o = new ae(e, t, n, r), a = new ae(e, t, n, r), i = t.oneOf.filter(ue.bind(this, e, n, r, function (e) {
            a.importErrors(e)
        })).length, s = t.oneOf.map(function (e, t) {
            return e.id && "<" + e.id + ">" || e.title && JSON.stringify(e.title) || e.$ref && "<" + e.$ref + ">" || "[subschema " + t + "]"
        });
        return 1 !== i && (n.nestedErrors && o.importErrors(a), o.addError({
            name: "oneOf",
            argument: s,
            message: "is not exactly one from " + s.join(",")
        })), o
    }, ce.properties = function (e, t, n, r) {
        if (this.types.object(e)) {
            var o, a = new ae(e, t, n, r), i = t.properties || {};
            for (o in i) {
                "function" == typeof n.preValidateProperty && n.preValidateProperty(e, o, i[o], n, r);
                var s = Object.hasOwnProperty.call(e, o) ? e[o] : void 0,
                    c = this.validateSchema(s, i[o], n, r.makeChild(i[o], o));
                c.instance !== a.instance[o] && (a.instance[o] = c.instance), a.importErrors(c)
            }
            return a
        }
    }, ce.patternProperties = function (e, t, n, r) {
        if (this.types.object(e)) {
            var o, a = new ae(e, t, n, r), i = t.patternProperties || {};
            for (o in e) {
                var s, c, u = !0;
                for (s in i) {
                    new RegExp(s).test(o) && (u = !1, "function" == typeof n.preValidateProperty && n.preValidateProperty(e, o, i[s], n, r), (c = this.validateSchema(e[o], i[s], n, r.makeChild(i[s], o))).instance !== a.instance[o] && (a.instance[o] = c.instance), a.importErrors(c))
                }
                u && le.call(this, e, t, n, r, o, a)
            }
            return a
        }
    }, ce.additionalProperties = function (e, t, n, r) {
        if (this.types.object(e)) {
            if (t.patternProperties) return null;
            var o, a = new ae(e, t, n, r);
            for (o in e) le.call(this, e, t, n, r, o, a);
            return a
        }
    }, ce.minProperties = function (e, t, n, r) {
        if (this.types.object(e)) {
            var o = new ae(e, t, n, r);
            return Object.keys(e).length >= t.minProperties || o.addError({
                name: "minProperties",
                argument: t.minProperties,
                message: "does not meet minimum property length of " + t.minProperties
            }), o
        }
    }, ce.maxProperties = function (e, t, n, r) {
        if (this.types.object(e)) {
            var o = new ae(e, t, n, r);
            return Object.keys(e).length <= t.maxProperties || o.addError({
                name: "maxProperties",
                argument: t.maxProperties,
                message: "does not meet maximum property length of " + t.maxProperties
            }), o
        }
    }, ce.items = function (e, o, a, i) {
        var s = this;
        if (this.types.array(e) && o.items) {
            var c = new ae(e, o, a, i);
            return e.every(function (e, t) {
                var n = Array.isArray(o.items) ? o.items[t] || o.additionalItems : o.items;
                if (void 0 === n) return !0;
                if (!1 === n) return c.addError({name: "items", message: "additionalItems not permitted"}), !1;
                var r = s.validateSchema(e, n, a, i.makeChild(n, t));
                return r.instance !== c.instance[t] && (c.instance[t] = r.instance), c.importErrors(r), !0
            }), c
        }
    }, ce.minimum = function (e, t, n, r) {
        if (this.types.number(e)) {
            var o = new ae(e, t, n, r);
            return (t.exclusiveMinimum && !0 === t.exclusiveMinimum ? e > t.minimum : e >= t.minimum) || o.addError({
                name: "minimum",
                argument: t.minimum,
                message: "must have a minimum value of " + t.minimum
            }), o
        }
    }, ce.maximum = function (e, t, n, r) {
        if (this.types.number(e)) {
            var o = new ae(e, t, n, r),
                a = t.exclusiveMaximum && !0 === t.exclusiveMaximum ? e < t.maximum : e <= t.maximum;
            return a || o.addError({
                name: "maximum",
                argument: t.maximum,
                message: "must have a maximum value of " + t.maximum
            }), o
        }
    };

    function fe(e, t, n, r, o, a) {
        if (this.types.number(e)) {
            var i = t[o];
            if (0 == i) throw new ie(o + " cannot be zero");
            var s = new ae(e, t, n, r), c = oe.getDecimalPlaces(e), u = oe.getDecimalPlaces(i), l = Math.max(c, u),
                f = Math.pow(10, l);
            return Math.round(e * f) % Math.round(i * f) != 0 && s.addError({
                name: o,
                argument: i,
                message: a + JSON.stringify(i)
            }), s
        }
    }

    function he(e, t, n) {
        for (var r = n.length, o = t + 1; o < r; o++) if (oe.deepCompareStrict(e, n[o])) return !1;
        return !0
    }

    ce.multipleOf = function (e, t, n, r) {
        return fe.call(this, e, t, n, r, "multipleOf", "is not a multiple of (divisible by) ")
    }, ce.divisibleBy = function (e, t, n, r) {
        return fe.call(this, e, t, n, r, "divisibleBy", "is not divisible by (multiple of) ")
    }, ce.required = function (t, e, n, r) {
        var o = new ae(t, e, n, r);
        return void 0 === t && !0 === e.required ? o.addError({
            name: "required",
            message: "is required"
        }) : this.types.object(t) && Array.isArray(e.required) && e.required.forEach(function (e) {
            void 0 === t[e] && o.addError({
                name: "required",
                argument: e,
                message: "requires property " + JSON.stringify(e)
            })
        }), o
    }, ce.pattern = function (e, t, n, r) {
        if (this.types.string(e)) {
            var o = new ae(e, t, n, r);
            return e.match(t.pattern) || o.addError({
                name: "pattern",
                argument: t.pattern,
                message: "does not match pattern " + JSON.stringify(t.pattern.toString())
            }), o
        }
    }, ce.format = function (e, t, n, r) {
        if (void 0 !== e) {
            var o = new ae(e, t, n, r);
            return o.disableFormat || oe.isFormat(e, t.format, this) || o.addError({
                name: "format",
                argument: t.format,
                message: "does not conform to the " + JSON.stringify(t.format) + " format"
            }), o
        }
    }, ce.minLength = function (e, t, n, r) {
        if (this.types.string(e)) {
            var o = new ae(e, t, n, r), a = e.match(/[\uDC00-\uDFFF]/g);
            return e.length - (a ? a.length : 0) >= t.minLength || o.addError({
                name: "minLength",
                argument: t.minLength,
                message: "does not meet minimum length of " + t.minLength
            }), o
        }
    }, ce.maxLength = function (e, t, n, r) {
        if (this.types.string(e)) {
            var o = new ae(e, t, n, r), a = e.match(/[\uDC00-\uDFFF]/g);
            return e.length - (a ? a.length : 0) <= t.maxLength || o.addError({
                name: "maxLength",
                argument: t.maxLength,
                message: "does not meet maximum length of " + t.maxLength
            }), o
        }
    }, ce.minItems = function (e, t, n, r) {
        if (this.types.array(e)) {
            var o = new ae(e, t, n, r);
            return e.length >= t.minItems || o.addError({
                name: "minItems",
                argument: t.minItems,
                message: "does not meet minimum length of " + t.minItems
            }), o
        }
    }, ce.maxItems = function (e, t, n, r) {
        if (this.types.array(e)) {
            var o = new ae(e, t, n, r);
            return e.length <= t.maxItems || o.addError({
                name: "maxItems",
                argument: t.maxItems,
                message: "does not meet maximum length of " + t.maxItems
            }), o
        }
    }, ce.uniqueItems = function (e, t, n, r) {
        if (this.types.array(e)) {
            var o = new ae(e, t, n, r);
            return e.every(function (e, t, n) {
                for (var r = t + 1; r < n.length; r++) if (oe.deepCompareStrict(e, n[r])) return !1;
                return !0
            }) || o.addError({name: "uniqueItems", message: "contains duplicate item"}), o
        }
    }, ce.uniqueItems = function (e, t, n, r) {
        if (this.types.array(e)) {
            var o = new ae(e, t, n, r);
            return e.every(he) || o.addError({name: "uniqueItems", message: "contains duplicate item"}), o
        }
    }, ce.dependencies = function (t, e, n, r) {
        if (this.types.object(t)) {
            var o, a, i, s, c = new ae(t, e, n, r);
            for (o in e.dependencies) {
                void 0 !== t[o] && (a = e.dependencies[o], i = r.makeChild(a, o), "string" == typeof a && (a = [a]), Array.isArray(a) ? a.forEach(function (e) {
                    void 0 === t[e] && c.addError({
                        name: "dependencies",
                        argument: i.propertyPath,
                        message: "property " + e + " not found, required by " + i.propertyPath
                    })
                }) : (s = this.validateSchema(t, a, n, i), c.instance !== s.instance && (c.instance = s.instance), s && s.errors.length && (c.addError({
                    name: "dependencies",
                    argument: i.propertyPath,
                    message: "does not meet dependency required by " + i.propertyPath
                }), c.importErrors(s))))
            }
            return c
        }
    }, ce.enum = function (e, t, n, r) {
        if (void 0 === e) return null;
        if (!Array.isArray(t.enum)) throw new ie("enum expects an array", t);
        var o = new ae(e, t, n, r);
        return t.enum.some(oe.deepCompareStrict.bind(null, e)) || o.addError({
            name: "enum",
            argument: t.enum,
            message: "is not one of enum values: " + t.enum.map(String).join(",")
        }), o
    }, ce.const = function (e, t, n, r) {
        if (void 0 === e) return null;
        var o = new ae(e, t, n, r);
        return oe.deepCompareStrict(t.const, e) || o.addError({
            name: "const",
            argument: t.const,
            message: "does not exactly match expected constant: " + t.const
        }), o
    }, ce.not = ce.disallow = function (n, r, o, a) {
        var i = this;
        if (void 0 === n) return null;
        var s = new ae(n, r, o, a), e = r.not || r.disallow;
        return e ? (Array.isArray(e) || (e = [e]), e.forEach(function (e) {
            var t;
            i.testType(n, r, o, a, e) && (t = e && e.id && "<" + e.id + ">" || e, s.addError({
                name: "not",
                argument: t,
                message: "is of prohibited type " + t
            }))
        }), s) : null
    };
    var pe = se;

    function de(e, t) {
        this.id = e, this.ref = t
    }

    function me() {
        this.customFormats = Object.create(me.prototype.customFormats), this.schemas = {}, this.unresolvedRefs = [], this.types = Object.create(Se), this.attributes = Object.create(pe.validators)
    }

    var ve = {
        SchemaScanResult: de, scan: function (e, t) {
            function o(e, t) {
                if (t && "object" == typeof t) if (t.$ref) {
                    var n = f.resolve(e, t.$ref);
                    c[n] = c[n] ? c[n] + 1 : 0
                } else {
                    var r = t.id ? f.resolve(e, t.id) : e;
                    if (r) {
                        if (r.indexOf("#") < 0 && (r += "#"), s[r]) {
                            if (!oe.deepCompareStrict(s[r], t)) throw new Error("Schema <" + t + "> already exists with different definition");
                            return s[r]
                        }
                        s[r] = t, "#" == r[r.length - 1] && (s[r.substring(0, r.length - 1)] = t)
                    }
                    a(r + "/items", Array.isArray(t.items) ? t.items : [t.items]), a(r + "/extends", Array.isArray(t.extends) ? t.extends : [t.extends]), o(r + "/additionalItems", t.additionalItems), i(r + "/properties", t.properties), o(r + "/additionalProperties", t.additionalProperties), i(r + "/definitions", t.definitions), i(r + "/patternProperties", t.patternProperties), i(r + "/dependencies", t.dependencies), a(r + "/disallow", t.disallow), a(r + "/allOf", t.allOf), a(r + "/anyOf", t.anyOf), a(r + "/oneOf", t.oneOf), o(r + "/not", t.not)
                }
            }

            function a(e, t) {
                if (Array.isArray(t)) for (var n = 0; n < t.length; n++) o(e + "/" + n, t[n])
            }

            function i(e, t) {
                if (t && "object" == typeof t) for (var n in t) o(e + "/" + n, t[n])
            }

            var s = {}, c = {};
            return o(e, t), new de(s, c)
        }
    }, ge = ve.scan, ye = oe.ValidatorResult, be = oe.SchemaError, we = oe.SchemaContext;

    function Ee(e) {
        var t = "string" == typeof e ? e : e.$ref;
        return "string" == typeof t && t
    }

    me.prototype.customFormats = {}, me.prototype.schemas = null, me.prototype.types = null, me.prototype.attributes = null, me.prototype.unresolvedRefs = null, me.prototype.addSchema = function (e, t) {
        var n = this;
        if (!e) return null;
        var r, o = ge(t || "/", e), a = t || e.id;
        for (r in o.id) this.schemas[r] = o.id[r];
        for (r in o.ref) this.unresolvedRefs.push(r);
        return this.unresolvedRefs = this.unresolvedRefs.filter(function (e) {
            return void 0 === n.schemas[e]
        }), this.schemas[a]
    }, me.prototype.addSubSchemaArray = function (e, t) {
        if (Array.isArray(t)) for (var n = 0; n < t.length; n++) this.addSubSchema(e, t[n])
    }, me.prototype.addSubSchemaObject = function (e, t) {
        if (t && "object" == typeof t) for (var n in t) this.addSubSchema(e, t[n])
    }, me.prototype.setSchemas = function (e) {
        this.schemas = e
    }, me.prototype.getSchema = function (e) {
        return this.schemas[e]
    }, me.prototype.validate = function (e, t, n, r) {
        var o = (n = n || {}).propertyName || "instance", a = f.resolve(n.base || "/", t.id || "");
        if (!r) {
            (r = new we(t, n, o, a, Object.create(this.schemas))).schemas[a] || (r.schemas[a] = t);
            var i, s = ge(a, t);
            for (i in s.id) {
                var c = s.id[i];
                r.schemas[i] = c
            }
        }
        if (t) {
            var u = this.validateSchema(e, t, n, r);
            if (!u) throw new Error("Result undefined");
            return u
        }
        throw new be("no schema specified", t)
    }, me.prototype.validateSchema = function (e, t, n, r) {
        var o, a, i = new ye(e, t, n, r);
        if ("boolean" == typeof t) !0 === t ? t = {} : !1 === t && (t = {type: []}); else if (!t) throw new Error("schema is undefined");
        if (t.extends && (Array.isArray(t.extends) ? (o = {
            schema: t,
            ctx: r
        }, t.extends.forEach(this.schemaTraverser.bind(this, o)), t = o.schema, o.schema = null, o.ctx = null, o = null) : t = oe.deepMerge(t, this.superResolve(t.extends, r))), a = Ee(t)) {
            var s = this.resolve(t, a, r), c = new we(s.subschema, n, r.propertyPath, s.switchSchema, r.schemas);
            return this.validateSchema(e, s.subschema, n, c)
        }
        var u, l, f = n && n.skipAttributes || [];
        for (u in t) if (!pe.ignoreProperties[u] && f.indexOf(u) < 0) {
            var h = null, p = this.attributes[u];
            if (p) h = p.call(this, e, t, n, r); else if (!1 === n.allowUnknownAttributes) throw new be("Unsupported attribute: " + u, t);
            h && i.importErrors(h)
        }
        return "function" == typeof n.rewrite && (l = n.rewrite.call(this, e, t, n, r), i.instance = l), i
    }, me.prototype.schemaTraverser = function (e, t) {
        e.schema = oe.deepMerge(e.schema, this.superResolve(t, e.ctx))
    }, me.prototype.superResolve = function (e, t) {
        var n;
        return (n = Ee(e)) ? this.resolve(e, n, t).subschema : e
    }, me.prototype.resolve = function (e, t, n) {
        if (t = n.resolve(t), n.schemas[t]) return {subschema: n.schemas[t], switchSchema: t};
        var r = f.parse(t), o = r && r.hash, a = o && o.length && t.substr(0, t.length - o.length);
        if (!a || !n.schemas[a]) throw new be("no such schema <" + t + ">", e);
        var i = oe.objectGetPath(n.schemas[a], o.substr(1));
        if (void 0 === i) throw new be("no such schema " + o + " located in <" + a + ">", e);
        return {subschema: i, switchSchema: t}
    }, me.prototype.testType = function (e, t, n, r, o) {
        if ("function" == typeof this.types[o]) return this.types[o].call(this, e);
        if (o && "object" == typeof o) {
            var a = this.validateSchema(e, o, n, r);
            return void 0 === a || !(a && a.errors.length)
        }
        return !0
    };
    var Se = me.prototype.types = {};
    Se.string = function (e) {
        return "string" == typeof e
    }, Se.number = function (e) {
        return "number" == typeof e && isFinite(e)
    }, Se.integer = function (e) {
        return "number" == typeof e && e % 1 == 0
    }, Se.boolean = function (e) {
        return "boolean" == typeof e
    }, Se.array = function (e) {
        return Array.isArray(e)
    }, Se.null = function (e) {
        return null === e
    }, Se.date = function (e) {
        return e instanceof Date
    }, Se.any = function () {
        return !0
    }, Se.object = function (e) {
        return e && "object" == typeof e && !Array.isArray(e) && !(e instanceof Date)
    };
    var Ae = me, Ie = e(function (e) {
            var r = e.exports.Validator = Ae;
            e.exports.ValidatorResult = oe.ValidatorResult, e.exports.ValidationError = oe.ValidationError, e.exports.SchemaError = oe.SchemaError, e.exports.SchemaScanResult = ve.SchemaScanResult, e.exports.scan = ve.scan, e.exports.validate = function (e, t, n) {
                return (new r).validate(e, t, n)
            }
        }), Oe = Ie.Validator,
        xe = (Ie.ValidatorResult, Ie.ValidationError, Ie.SchemaError, Ie.SchemaScanResult, Ie.scan, Ie.validate, {
            id: "LogUI-suppliedConfig",
            type: "object",
            properties: {
                applicationSpecificData: {type: "object"},
                logUIConfiguration: {$ref: "/LogUI-logUIConfig"},
                trackingConfiguration: {$ref: "/LogUI-trackingConfig"}
            },
            required: ["applicationSpecificData", "trackingConfiguration", "logUIConfiguration"]
        }), ke = {
            id: "LogUI-logUIConfig",
            type: "object",
            properties: {verbose: {type: "boolean"}, browserEvents: {$ref: "/LogUI-browserEvents"}},
            required: []
        }, Le = {
            id: "LogUI-browserEvents",
            type: "object",
            additionalProperties: !1,
            properties: {
                blockEventBubbling: {type: "boolean"},
                eventsWhileScrolling: {type: "boolean"},
                URLChanges: {type: "boolean"},
                contextMenu: {type: "boolean"},
                pageFocus: {type: "boolean"},
                trackCursor: {type: "boolean"},
                cursorUpdateFrequency: {type: "number"},
                cursorLeavingPage: {type: "boolean"},
                pageResize: {type: "boolean"}
            },
            required: []
        }, je = {id: "LogUI-trackingConfig", type: "object", properties: {}, required: []}, Ce = {
            addLogUIConfigProperty: function (e, t) {
                var n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
                ke.properties[e] = {type: t}, n && ke.required.push(e)
            }, validateSuppliedConfigObject: function (e) {
                var t = new Oe;
                return t.addSchema(ke, "/LogUI-logUIConfig"), t.addSchema(je, "/LogUI-trackingConfig"), t.addSchema(Le, "/LogUI-browserEvents"), t.validate(e, xe)
            }
        };

    function Ue(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return Pe(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pe(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0, o = function () {
                };
                return {
                    s: o, n: function () {
                        return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                    }, e: function (e) {
                        throw e
                    }, f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0, s = !1;
        return {
            s: function () {
                n = e[Symbol.iterator]()
            }, n: function () {
                var e = n.next();
                return i = e.done, e
            }, e: function (e) {
                s = !0, a = e
            }, f: function () {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
        }
    }

    function Pe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    var Fe = "logUI-sessionIDKey", Te = function (r) {
        var n = {}, o = null, a = null, t = {}, i = {}, s = null, c = {}, u = null, l = null;
        n.init = function (e) {
            o = new Date, s = d.extendObject({}, m);
            var t = h() && p(e) && f(e);
            return t ? (u = new WeakMap, n.CSSRules.init(), n.sessionData.init()) : o = null, t
        };
        var f = function (e) {
            return d.extendObject(s, m.dispatcher), d.extendObject(s, e.logUIConfiguration), t = e.applicationSpecificData, i = e.trackingConfiguration, c = e.browserEvents, !0
        };
        n.reset = function () {
            a = o = s = null, t = {}, i = {}, c = {}, n.CSSRules.reset()
        }, n.DOMProperties = {
            has: function (e) {
                return u.has(e)
            }, set: function (e, t) {
                u.set(e, t)
            }, get: function (e) {
                if (u.has(e)) return u.get(e)
            }, reset: function () {
                return !!n.isActive() && (u = new WeakMap, !0)
            }
        }, n.CSSRules = {
            init: function () {
                l = r.document.createElement("style"), r.document.head.append(l)
            }, reset: function () {
                l.remove(), l = null
            }, addRule: function (e, t) {
                var n = l.sheet;
                n && n.insertRule("".concat(e, " { ").concat(t, " }"))
            }, removeRule: function (e, t) {
                if (l) {
                    for (var n in l.sheet.cssRules) {
                        if (l.sheet.cssRules[n].cssText == "".concat(e, " { ").concat(t, " }")) return l.sheet.removeRule(n), !0
                    }
                    return !1
                }
            }
        }, n.getConfigProperty = function (e) {
            return s[e]
        }, n.applicationSpecificData = {
            get: function () {
                return t
            }, update: function (e) {
                t = d.extendObject(t, e)
            }, deleteKey: function (e) {
                delete t[e]
            }
        }, n.elementTrackingConfig = {
            get: function () {
                return i
            }, getElementGroup: function (e) {
                return i[e]
            }
        }, n.isActive = function () {
            return !!o
        }, n.getInitTimestamp = function () {
            return o
        }, n.sessionData = {
            init: function () {
                a = {
                    IDkey: null,
                    sessionStartTimestamp: null,
                    libraryStartTimestamp: null
                }, n.sessionData.getSessionIDKey()
            }, reset: function () {
                n.sessionData.init()
            }, getSessionIDKey: function () {
                return r.sessionStorage.getItem(Fe)
            }, clearSessionIDKey: function () {
                r.sessionStorage.removeItem(Fe)
            }, setID: function (e) {
                a.IDkey = e, r.sessionStorage.setItem(Fe, e)
            }, setIDFromSession: function () {
                a.IDKey = r.sessionStorage.getItem(Fe)
            }, setTimestamps: function (e, t) {
                a.sessionStartTimestamp = e, a.libraryStartTimestamp = t
            }, getSessionStartTimestamp: function () {
                return a.sessionStartTimestamp
            }, getLibraryStartTimestamp: function () {
                return a.libraryStartTimestamp
            }
        }, n.browserEventsConfig = {
            get: function (e, t) {
                return n.browserEventsConfig.has(e) ? c[e] : t
            }, has: function (e) {
                return !!c && c.hasOwnProperty(e)
            }
        };
        var h = function () {
            var e, t = Ue(v.getFeatures());
            try {
                for (t.s(); !(e = t.n()).done;) {
                    var n = e.value;
                    if (!d.getElementDescendant(r, n)) return d.console("The required feature '".concat(n, "' cannot be found; LogUI cannot start!"), "Initialisation", !0), !1
                }
            } catch (e) {
                t.e(e)
            } finally {
                t.f()
            }
            return !0
        }, p = function (e) {
            var t = Ce.validateSuppliedConfigObject(e);
            if (t.valid) return !0;
            d.console("The configuration object passed to LogUI was not valid or complete; refer to the warning(s) below for more information.", "Initialisation", !0);
            var n, r = Ue(t.errors);
            try {
                for (r.s(); !(n = r.n()).done;) {
                    var o = n.value;
                    d.console("> ".concat(o.stack), "Initialisation", !0)
                }
            } catch (e) {
                r.e(e)
            } finally {
                r.f()
            }
            return !1
        };
        return n
    }(window);
    m.dispatcher = {
        endpoint: null,
        authorisationToken: null,
        cacheSize: 10,
        maximumCacheSize: 1e3,
        reconnectAttempts: 5,
        reconnectAttemptDelay: 5e3
    }, v.addFeature("WebSocket"), Ce.addLogUIConfigProperty("endpoint", "string"), Ce.addLogUIConfigProperty("authorisationToken", "string");
    var De = function (n) {
        var e = {}, r = !1, o = null, a = 0, i = null, s = null;
        e.dispatcherType = "websocket", e.init = function () {
            return Te.getConfigProperty("endpoint"), i && (clearInterval(i), i = null), c(), s = [], r = !0
        }, e.stop = p(h.mark(function e() {
            return h.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        f(), u(), a = 0, i && clearInterval(i), s = null, r = !1;
                    case 8:
                    case"end":
                        return e.stop()
                }
            }, e)
        })), e.isActive = function () {
            return r
        }, e.sendObject = function (e) {
            if (r) return s.push(e), d.console(e, "Dispatcher", !1), void (s.length >= m.dispatcher.cacheSize && f());
            throw Error("You cannot send a message when LogUI is not active.")
        };
        var c = function () {
            (o = new WebSocket(Te.getConfigProperty("endpoint"))).addEventListener("close", t.onClose), o.addEventListener("error", t.onError), o.addEventListener("message", t.onMessage), o.addEventListener("open", t.onOpen)
        }, u = function () {
            o && (d.console("The connection to the server is being closed.", "Dispatcher", !1), o.removeEventListener("close", t.onClose), o.removeEventListener("error", t.onError), o.removeEventListener("message", t.onMessage), o.removeEventListener("open", t.onOpen), o.close(), o = null)
        }, t = {
            onClose: function (e) {
                d.console("The connection to the server has been closed.", "Dispatcher", !1);
                var t = "Something went wrong with the connection to the LogUI server.";
                switch (e.code) {
                    case 4001:
                        t = "A bad message was sent to the LogUI server. LogUI is shutting down.";
                        break;
                    case 4002:
                        t = "The client sent a bad application handshake to the server. LogUI is shutting down.";
                        break;
                    case 4003:
                        t = "The LogUI server being connected to does not support version 0.5.4a of the client. LogUI is shutting down.";
                        break;
                    case 4004:
                        t = "A bad authentication token was provided to the LogUI server. LogUI is shutting down.";
                        break;
                    case 4005:
                        t = "The LogUI server did not recognise the domain that this client is being started from. LogUI is shutting down.";
                        break;
                    case 4006:
                        t = "The LogUI client sent an invalid session ID to the server. LogUI is shutting down.", Te.sessionData.clearSessionIDKey();
                        break;
                    case 4007:
                        t = "The LogUI server is not accepting new connections for this application at present.";
                        break;
                    default:
                        t = "".concat(t, " The recorded error code was ").concat(e.code, ". LogUI is shutting down.")
                }
                switch (e.code) {
                    case 1e3:
                        console.log("clean connection closure!");
                        break;
                    case 1006:
                        o && !i && (u(), i = setInterval(function () {
                            if (r) {
                                if (o) switch (o.readyState) {
                                    case 0:
                                        return;
                                    case 1:
                                        return d.console("The connection to the server has been (re-)established.", "Dispatcher", !1), clearInterval(i), a = 0, void (i = null);
                                    default:
                                        return d.console("The connection to the server has failed; we are unable to restart.", "Dispatcher", !0), void u()
                                }
                                if ((a += 1) == m.dispatcher.reconnectAttempts) throw d.console("We've maxed out the number of permissible reconnection attempts. We must stop here.", "Dispatcher", !0), clearInterval(i), n.dispatchEvent(new Event("logUIShutdownRequest")), Error("LogUI attempted to reconnect to the server but failed to do so. LogUI is now stopping. Any events not sent to the server will be lost.");
                                d.console("(Re-)connection attempt ".concat(a, " of ").concat(m.dispatcher.reconnectAttempts), "Dispatcher", !1), c()
                            } else clearInterval(i), i = null
                        }, m.dispatcher.reconnectAttemptDelay));
                        break;
                    default:
                        throw n.dispatchEvent(new Event("logUIShutdownRequest")), Error(t)
                }
            }, onError: function () {
            }, onMessage: function (e) {
                var t = JSON.parse(e.data);
                "handshakeSuccess" === t.type && (d.console("The handshake was successful. Hurray! The server is listening.", "Dispatcher", !1), Te.sessionData.setID(t.payload.sessionID), t.payload.newSessionCreated ? Te.sessionData.setTimestamps(new Date(t.payload.clientStartTimestamp), new Date(t.payload.clientStartTimestamp)) : (Te.sessionData.setTimestamps(new Date(t.payload.clientStartTimestamp), new Date), s.length >= m.dispatcher.cacheSize && f()), n.dispatchEvent(new Event("logUIStarted")))
            }, onOpen: function () {
                var e = Te.sessionData.getSessionIDKey();
                d.console("The connection to the server has been established.", "Dispatcher", !1);
                var t = {
                    clientVersion: "0.5.4a",
                    authorisationToken: Te.getConfigProperty("authorisationToken"),
                    pageOrigin: n.location.origin,
                    userAgent: n.navigator.userAgent,
                    clientTimestamp: new Date
                };
                e && (t.sessionID = Te.sessionData.getSessionIDKey()), d.console("The LogUI handshake has been sent.", "Dispatcher", !1), o.send(JSON.stringify(l("handshake", t)))
            }
        }, l = function (e, t) {
            return {sender: "logUIClient", type: e, payload: t}
        }, f = function () {
            var e;
            o && 1 == o.readyState ? (e = {
                length: s.length,
                items: s
            }, o.send(JSON.stringify(l("logEvents", e))), d.console("Cache flushed.", "Dispatcher", !1), s = []) : s.length >= m.dispatcher.maximumCacheSize && (d.console("The cache has grown too large, with no connection to clear it. LogUI will now stop; any cached events will be lost.", "Dispatcher", !1), n.dispatchEvent(new Event("logUIShutdownRequest")))
        };
        return e
    }(window);

    function _e(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return Re(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Re(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0, o = function () {
                };
                return {
                    s: o, n: function () {
                        return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                    }, e: function (e) {
                        throw e
                    }, f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0, s = !1;
        return {
            s: function () {
                n = e[Symbol.iterator]()
            }, n: function () {
                var e = n.next();
                return i = e.done, e
            }, e: function (e) {
                s = !0, a = e
            }, f: function () {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
        }
    }

    function Re(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    var Me, qe, ze, $e, Ve, Ne, Ze = function (e) {
        var t, n = {
            events: {}, hasEvent: function (e) {
                return !!n.events.hasOwnProperty(e)
            }, getEventGroupName: function (e) {
                return !!n.hasEvent(e) && n.events[e]
            }, getEventList: h.mark(function e() {
                var t;
                return h.wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            e.t0 = h.keys(n.events);
                        case 1:
                            if ((e.t1 = e.t0()).done) {
                                e.next = 7;
                                break
                            }
                            return t = e.t1.value, e.next = 5, t;
                        case 5:
                            e.next = 1;
                            break;
                        case 7:
                        case"end":
                            return e.stop()
                    }
                }, e)
            }), deleteEventsWithGroup: function (e) {
                for (var t in n.events) n.getEventGroupName(t) == e && n.deleteEvent(t)
            }, deleteEvent: function (e) {
                delete n.events[e]
            }, setEvent: function (e, t) {
                n.events[e] = t
            }
        }, r = _e(e.eventsList);
        try {
            for (r.s(); !(t = r.n()).done;) {
                var o = t.value;
                n.events[o] = e.name
            }
        } catch (e) {
            r.e(e)
        } finally {
            r.f()
        }
        return n
    }, Ge = Me = {
        init: function () {
        }, stop: function () {
        }, getObject: function (e, t) {
            var n = Me.getValue(e, t);
            if (n) return {name: t.nameForLog, value: n}
        }, getValue: function (e, t) {
            if (t.hasOwnProperty("lookFor") && e.hasAttribute(t.lookFor)) return e.getAttribute(t.lookFor)
        }
    }, We = Object.freeze({__proto__: null, default: Ge}), He = qe = {
        init: function () {
        }, stop: function () {
        }, getObject: function (e, t) {
            var n = qe.getValue(e, t);
            if (n) return {name: t.nameForLog, value: n}
        }, getValue: function (e, t) {
            if (t.hasOwnProperty("lookFor")) {
                if (t.hasOwnProperty("onElement")) {
                    var n = d.$(t.onElement);
                    if (!n) return;
                    return n[t.lookFor] ? n[t.lookFor] : void 0
                }
                if (e[t.lookFor]) return e[t.lookFor]
            }
        }
    }, Ke = Object.freeze({__proto__: null, default: He}), Je = ze = {
        init: function () {
        }, stop: function () {
        }, getObject: function (e, t) {
            var n = ze.getValue(e, t);
            if (n) return {name: t.nameForLog, value: n}
        }, getValue: function (e, t) {
            if (t.hasOwnProperty("lookFor")) return localStorage.getItem(t.lookFor)
        }
    }, Be = Object.freeze({__proto__: null, default: Je}), Ye = $e = {
        init: function () {
        }, stop: function () {
        }, getObject: function (e, t) {
            var n = $e.getValue(e, t);
            if (n) return {name: t.nameForLog, value: n}
        }, getValue: function (e, t) {
            for (var n in e) if (n.startsWith("__reactFiber")) {
                var r = e[n]._debugOwner.stateNode.props;
                if (r.hasOwnProperty(t.lookFor)) return r[t.lookFor]
            }
        }
    }, Xe = Object.freeze({__proto__: null, default: Ye}), Qe = Ve = {
        init: function () {
        }, stop: function () {
        }, getObject: function (e, t) {
            var n = Ve.getValue(e, t);
            if (n) return {name: t.nameForLog, value: n}
        }, getValue: function (e, t) {
            for (var n in e) if (n.startsWith("__reactFiber")) {
                var r = e[n]._debugOwner.stateNode.state;
                if (r.hasOwnProperty(t.lookFor)) return r[t.lookFor]
            }
        }
    }, et = Object.freeze({__proto__: null, default: Qe}), tt = Ne = {
        init: function () {
        }, stop: function () {
        }, getObject: function (e, t) {
            var n = Ne.getValue(e, t);
            if (n) return {name: t.nameForLog, value: n}
        }, getValue: function (e, t) {
            if (t.hasOwnProperty("lookFor")) return sessionStorage.getItem(t.lookFor)
        }
    }, nt = Object.freeze({__proto__: null, default: tt});

    function rt(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return ot(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ot(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0, o = function () {
                };
                return {
                    s: o, n: function () {
                        return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                    }, e: function (e) {
                        throw e
                    }, f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0, s = !1;
        return {
            s: function () {
                n = e[Symbol.iterator]()
            }, n: function () {
                var e = n.next();
                return i = e.done, e
            }, e: function (e) {
                s = !0, a = e
            }, f: function () {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
        }
    }

    function ot(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    var at, it, st, ct, ut, lt, ft = {};
    for (at in nt) ft["default" === at ? "sessionStorage" : at] = nt[at];
    for (it in et) ft["default" === it ? "reactComponentState" : it] = et[it];
    for (st in Xe) ft["default" === st ? "reactComponentProp" : st] = Xe[st];
    for (ct in Be) ft["default" === ct ? "localStorage" : ct] = Be[ct];
    for (ut in Ke) ft["default" === ut ? "elementProperty" : ut] = Ke[ut];
    for (lt in We) ft["default" === lt ? "elementAttribute" : lt] = We[lt];
    var ht, pt, dt = ft, mt = (ht = {
        init: function () {
            for (var e in dt) dt[e].init();
            return !0
        }, stop: function () {
            for (var e in dt) {
                var t = dt[e];
                t.hasOwnProperty("stop") && t.stop()
            }
        }, getMetadataValue: function (e, t) {
            var n = pt(t.sourcer);
            if (n && t.hasOwnProperty("nameForLog") && t.hasOwnProperty("lookFor")) return n.getObject(e, t)
        }, getMetadata: function (e, t) {
            var n = [], r = [];
            if (t.hasOwnProperty("metadata")) {
                var o, a = rt(t.metadata);
                try {
                    for (a.s(); !(o = a.n()).done;) {
                        var i = o.value, s = ht.getMetadataValue(e, i);
                        r.includes(i.nameForLog) || s && (n.push(s), r.push(i.nameForLog))
                    }
                } catch (e) {
                    a.e(e)
                } finally {
                    a.f()
                }
            }
            return n
        }
    }, pt = function (e) {
        for (var t in dt) if (t == e) return dt[t]
    }, ht);

    function vt(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return gt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gt(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0, o = function () {
                };
                return {
                    s: o, n: function () {
                        return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                    }, e: function (e) {
                        throw e
                    }, f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0, s = !1;
        return {
            s: function () {
                n = e[Symbol.iterator]()
            }, n: function () {
                var e = n.next();
                return i = e.done, e
            }, e: function (e) {
                s = !0, a = e
            }, f: function () {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
        }
    }

    function gt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    var yt, bt, wt = (yt = {
        browserEvents: ["submit"], init: function () {
        }, logUIEventCallback: function (e, t, n) {
            var r = n.name, o = bt(n), a = {type: t.type};
            return console.log(r), r && (a.name = r), 0 < o.length && (a.submissionValues = o), a
        }
    }, bt = function (e) {
        var t = e.properties, n = [], r = [];
        if (t && t.hasOwnProperty("includeValues")) {
            var o, a = vt(t.includeValues);
            try {
                for (a.s(); !(o = a.n()).done;) {
                    var i, s = o.value, c = d.$(s.selector);
                    c && ((i = mt.getMetadataValue(c, s)) && (r.includes(s.nameForLog) || (r.push(s.nameForLog), n.push(i))))
                }
            } catch (e) {
                a.e(e)
            } finally {
                a.f()
            }
        }
        return n
    }, yt), Et = Object.freeze({__proto__: null, default: wt});
    v.addFeature("WeakMap");
    var St, At, It = function () {
        var e = {}, s = null;
        e.browserEvents = ["mousedown", "mouseup"], e.init = function () {
            s = new WeakMap
        }, e.stop = function () {
            s = null
        }, e.logUIEventCallback = function (e, t, n) {
            if ("mousedown" == t.type && s.set(e, t.timeStamp), "mouseup" == t.type && s.has(e)) {
                var r = t.timeStamp - s.get(e), o = t.button, a = c(n, o);
                if (!a) return;
                var i = {};
                return i.clickDuration = r, i.type = "mouseClick", i.button = a.mapping, "name" in a && (i.name = a.name), s.delete(e), i
            }
        };
        var c = function (e, t) {
            if (e.properties) {
                var n = {0: "primary", 1: "auxiliary", 2: "secondary", 3: "auxiliary2", 4: "auxiliary3"};
                if (t in n && e.properties[n[t]]) return e.properties[n[t]].mapping = n[t], e.properties[n[t]]
            }
        };
        return e
    }(), Ot = Object.freeze({__proto__: null, default: It}), xt = (St = {
        browserEvents: ["mouseenter", "mouseleave"], init: function () {
        }, logUIEventCallback: function (e, t, n) {
            var r = At(n, t.type), o = {type: t.type};
            return r && (o.name = r), o
        }
    }, At = function (e, t) {
        var n = e.properties;
        if (n && n.hasOwnProperty(t) && n[t].hasOwnProperty("name")) return n[t].name
    }, St), kt = Object.freeze({__proto__: null, default: xt});
    v.addFeature("IntersectionObserver");
    var Lt, jt, Ct = {
        init: function () {
        }, callback: function (e, t) {
            return !0
        }
    }, Ut = Object.freeze({__proto__: null, default: Ct}), Pt = (Lt = {
        init: function () {
            return !0
        }, stop: function () {
        }, packageInteractionEvent: function (e, t, n) {
            var r = jt();
            r.eventType = "interactionEvent", r.eventDetails = t, r.metadata = mt.getMetadata(e, n), De.sendObject(r)
        }, packageCustomEvent: function (e) {
            var t = jt();
            t.eventType = "customEvent", t.eventDetails = e, De.sendObject(t)
        }, packageBrowserEvent: function (e) {
            var t = jt();
            t.eventType = "browserEvent", t.eventDetails = e, De.sendObject(t)
        }, packageStatusEvent: function (e) {
            var t = jt();
            t.eventType = "statusEvent", t.eventDetails = e, De.sendObject(t)
        }
    }, jt = function () {
        var e = new Date, t = Te.sessionData.getSessionStartTimestamp(), n = Te.sessionData.getLibraryStartTimestamp();
        return {
            eventType: null,
            eventDetails: {},
            sessionID: Te.sessionData.getSessionIDKey(),
            timestamps: {eventTimestamp: e, sinceSessionStartMillis: e - t, sinceLogUILoadMillis: e - n},
            applicationSpecificData: Te.applicationSpecificData.get()
        }
    }, Lt);

    function Ft(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return Tt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tt(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0, o = function () {
                };
                return {
                    s: o, n: function () {
                        return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                    }, e: function (e) {
                        throw e
                    }, f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0, s = !1;
        return {
            s: function () {
                n = e[Symbol.iterator]()
            }, n: function () {
                var e = n.next();
                return i = e.done, e
            }, e: function (e) {
                s = !0, a = e
            }, f: function () {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
        }
    }

    function Tt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    v.addFeature("WeakMap");
    var Dt, _t, Rt, Mt, qt, zt = function () {
        var e = {}, l = null, f = null;
        e.browserEvents = ["scroll"], e.init = function () {
            l = new WeakMap, f = []
        }, e.stop = function () {
            var e, t = Ft(f);
            try {
                for (t.s(); !(e = t.n()).done;) {
                    var n = e.value;
                    clearTimeout(n)
                }
            } catch (e) {
                t.e(e)
            } finally {
                t.f()
            }
            f = l = null
        }, e.logUIEventCallback = function (e, t, n) {
            var r = e;
            if (l.has(r)) {
                var o = l.get(r), a = setTimeout(function () {
                    h(r, a)
                }, 50);
                return f.push(a), o.handles.push(a), void l.set(r, o)
            }
            var i = setTimeout(function () {
                h(r, i)
            }, 50);
            f.push(i);
            var s = {handles: [i], eventContext: e, trackingConfig: n};
            l.set(r, s);
            var c = {type: "scrollStart"}, u = p(n, "scrollStart");
            return u && (c.name = u), c
        };
        var h = function (e, t) {
            var n, r, o, a;
            l.has(e) && (r = (n = l.get(e)).handles.indexOf(t), n.handles.splice(r, 1), r = f.indexOf(t), f.splice(r, 1), 0 == n.handles.length && (l.delete(e), o = {type: "scrollEnd"}, (a = p(n.trackingConfig, "scrollEnd")) && (o.name = a), Pt.packageInteractionEvent(e, o, n.trackingConfig)))
        }, p = function (e, t) {
            var n = e.properties;
            if (n && n.hasOwnProperty(t) && n[t].hasOwnProperty("name")) return n[t].name
        };
        return e
    }(), $t = Object.freeze({__proto__: null, default: zt}), Vt = {};
    for (Dt in $t) Vt["default" === Dt ? "scrollable" : Dt] = $t[Dt];
    for (_t in Ut) Vt["default" === _t ? "sampleEventHandler" : _t] = Ut[_t];
    for (Rt in kt) Vt["default" === Rt ? "mouseHover" : Rt] = kt[Rt];
    for (Mt in Ot) Vt["default" === Mt ? "mouseClick" : Mt] = Ot[Mt];
    for (qt in Et) Vt["default" === qt ? "formSubmission" : qt] = Et[qt];

    function Nt(c) {
        var e, u = c, l = {a: 0, b: 0, c: 0}, f = [];

        function t(e) {
            var t, n, r, o;
            if (e.test(u)) for (n = 0, r = (t = u.match(e)).length; n < r; n += 1) o = t[n], u = u.replace(o, Array(o.length + 1).join("A"))
        }

        return e = function (e, t) {
            var n, r, o, a, i, s;
            if (e.test(u)) for (r = 0, o = (n = u.match(e)).length; r < o; r += 1) l[t] += 1, a = n[r], i = u.indexOf(a), s = a.length, f.push({
                selector: c.substr(i, s),
                type: t,
                index: i,
                length: s
            }), u = u.replace(a, Array(s + 1).join(" "))
        }, t(/\\[0-9A-Fa-f]{6}\s?/g), t(/\\[0-9A-Fa-f]{1,5}\s/g), t(/\\./g), function () {
            var e, t, n, r, o = /{[^]*/gm;
            if (o.test(u)) for (t = 0, n = (e = u.match(o)).length; t < n; t += 1) r = e[t], u = u.replace(r, Array(r.length + 1).join(" "))
        }(), e(/(\[[^\]]+\])/g, "b"), e(/(#[^\#\s\+>~\.\[:\)]+)/g, "a"), e(/(\.[^\s\+>~\.\[:\)]+)/g, "b"), e(/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, "c"), e(/(:(?!not|global|local)[\w-]+\([^\)]*\))/gi, "b"), e(/(:(?!not|global|local)[^\s\+>~\.\[:]+)/g, "b"), u = (u = (u = (u = (u = (u = u.replace(/[\*\s\+>~]/g, " ")).replace(/[#\.]/g, " ")).replace(/:not/g, "    ")).replace(/:local/g, "      ")).replace(/:global/g, "       ")).replace(/[\(\)]/g, " "), e(/([^\s\+>~\.\[:]+)/g, "c"), f.sort(function (e, t) {
            return e.index - t.index
        }), {
            selector: c,
            specificity: "0," + l.a.toString() + "," + l.b.toString() + "," + l.c.toString(),
            specificityArray: [0, l.a, l.b, l.c],
            parts: f
        }
    }

    function Zt(e, t) {
        var n, r, o;
        if ("string" == typeof e) {
            if (-1 !== e.indexOf(",")) throw"Invalid CSS selector";
            n = Nt(e).specificityArray
        } else {
            if (!Array.isArray(e)) throw"Invalid CSS selector or specificity array";
            if (4 !== e.filter(function (e) {
                return "number" == typeof e
            }).length) throw"Invalid specificity array";
            n = e
        }
        if ("string" == typeof t) {
            if (-1 !== t.indexOf(",")) throw"Invalid CSS selector";
            r = Nt(t).specificityArray
        } else {
            if (!Array.isArray(t)) throw"Invalid CSS selector or specificity array";
            if (4 !== t.filter(function (e) {
                return "number" == typeof e
            }).length) throw"Invalid specificity array";
            r = t
        }
        for (o = 0; o < 4; o += 1) {
            if (n[o] < r[o]) return -1;
            if (n[o] > r[o]) return 1
        }
        return 0
    }

    var Gt, Wt = Vt, Ht = ((Gt = {
        init: function () {
            for (var e in Wt) Wt[e].hasOwnProperty("init") && Wt[e].init();
            return !0
        }, stop: function () {
            for (var e in Wt) Wt[e].hasOwnProperty("stop") && Wt[e].stop()
        }
    }).eventHandlers = Wt, Gt.getEventHandler = function (e) {
        return !!Wt.hasOwnProperty(e) && Wt[e]
    }, Gt.getEventHandlerEvents = function (e) {
        if (Wt.hasOwnProperty(e)) return Wt[e].hasOwnProperty("browserEvents") ? Wt[e].browserEvents : (d.console("The event handler '".concat(e, "' does not have the required property 'browserEvents'."), "Initialisation", !0), !1)
    }, Gt);

    function Kt(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return Jt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Jt(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0, o = function () {
                };
                return {
                    s: o, n: function () {
                        return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                    }, e: function (e) {
                        throw e
                    }, f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0, s = !1;
        return {
            s: function () {
                n = e[Symbol.iterator]()
            }, n: function () {
                var e = n.next();
                return i = e.done, e
            }, e: function (e) {
                s = !0, a = e
            }, f: function () {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
        }
    }

    function Jt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    var Bt, Yt, Xt, Qt = ((Bt = {}).generators = {
        trackingConfig: h.mark(function () {
            var t, n, r;
            return h.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        t = Te.elementTrackingConfig.get(), e.t0 = h.keys(t);
                    case 2:
                        if ((e.t1 = e.t0()).done) {
                            e.next = 12;
                            break
                        }
                        if (n = e.t1.value, (r = {
                            name: n,
                            selector: t[n].selector,
                            event: t[n].event,
                            selectedElements: d.$$(t[n].selector),
                            eventsList: function (e) {
                                var t = null;
                                if (Ht.getEventHandler(e)) {
                                    if (!(t = Ht.getEventHandlerEvents(e))) return
                                } else t = [e];
                                return t
                            }(t[n].event)
                        }).eventsList) {
                            e.next = 8;
                            break
                        }
                        return d.console("Skipping group '".concat(n, "'"), "Initialisation", !0), e.abrupt("continue", 2);
                    case 8:
                        return e.next = 10, r;
                    case 10:
                        e.next = 2;
                        break;
                    case 12:
                    case"end":
                        return e.stop()
                }
            }, t)
        }), uniqueElements: h.mark(function e() {
            var t, n, r, o, a, i, s;
            return h.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        t = new Map, n = Kt(Bt.generators.trackingConfig()), e.prev = 2, n.s();
                    case 4:
                        if ((r = n.n()).done) {
                            e.next = 28;
                            break
                        }
                        o = r.value, a = Kt(o.selectedElements), e.prev = 7, a.s();
                    case 9:
                        if ((i = a.n()).done) {
                            e.next = 18;
                            break
                        }
                        if (s = i.value, t.has(s)) return e.abrupt("continue", 16);
                        e.next = 13;
                        break;
                    case 13:
                        return t.set(s, !0), e.next = 16, s;
                    case 16:
                        e.next = 9;
                        break;
                    case 18:
                        e.next = 23;
                        break;
                    case 20:
                        e.prev = 20, e.t0 = e.catch(7), a.e(e.t0);
                    case 23:
                        return e.prev = 23, a.f(), e.finish(23);
                    case 26:
                        e.next = 4;
                        break;
                    case 28:
                        e.next = 33;
                        break;
                    case 30:
                        e.prev = 30, e.t1 = e.catch(2), n.e(e.t1);
                    case 33:
                        return e.prev = 33, n.f(), e.finish(33);
                    case 36:
                    case"end":
                        return e.stop()
                }
            }, e, null, [[2, 30, 33, 36], [7, 20, 23, 26]])
        })
    }, Bt.processElement = function (e, t) {
        if (Te.DOMProperties.has(e)) {
            var n, r = Te.DOMProperties.get(e), o = Kt(t.eventsList);
            try {
                for (o.s(); !(n = o.n()).done;) {
                    var a = n.value;
                    if (r.hasEvent(a)) {
                        var i = r.getEventGroupName(a), s = Te.elementTrackingConfig.getElementGroup(i).selector;
                        if (i == t.name) continue;
                        var c = -1 == Zt(s, t.selector);
                        Te.getConfigProperty("overrideEqualSpecificity") && (c = Zt(s, t.selector) <= 0), c && (r.deleteEventsWithGroup(i), r.setEvent(a, t.name))
                    } else r.setEvent(a, t.name)
                }
            } catch (e) {
                o.e(e)
            } finally {
                o.f()
            }
        } else {
            var u = Ze(t);
            Te.DOMProperties.set(e, u)
        }
    }, Bt), en = (Yt = {
        logUIEventCallback: function (e) {
            var t, n, r, o, a = Te.DOMProperties.get(e.currentTarget);
            a && (t = a.getEventGroupName(e.type), n = Te.elementTrackingConfig.getElementGroup(t), o = !1, (o = (r = Ht.getEventHandler(n.event)) ? r.logUIEventCallback(this, e, n) : Xt(this, e, n)) && Pt.packageInteractionEvent(this, o, n))
        }
    }, Xt = function (e, t, n) {
        var r = {type: t.type};
        return n.hasOwnProperty("name") && (r.name = n.name), r
    }, Yt);

    function tn(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return nn(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nn(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0, o = function () {
                };
                return {
                    s: o, n: function () {
                        return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                    }, e: function (e) {
                        throw e
                    }, f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0, s = !1;
        return {
            s: function () {
                n = e[Symbol.iterator]()
            }, n: function () {
                var e = n.next();
                return i = e.done, e
            }, e: function (e) {
                s = !0, a = e
            }, f: function () {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
        }
    }

    function nn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    var rn, on, an, sn, cn, un, ln, fn, hn, pn, dn, mn, vn, gn = rn = {
        init: function () {
            var e, t = tn(Qt.generators.uniqueElements());
            try {
                for (t.s(); !(e = t.n()).done;) {
                    var n = e.value;
                    rn.bind(n)
                }
            } catch (e) {
                t.e(e)
            } finally {
                t.f()
            }
        }, stop: function () {
            var e, t = tn(Qt.generators.uniqueElements());
            try {
                for (t.s(); !(e = t.n()).done;) {
                    var n = e.value;
                    rn.unbind(n)
                }
            } catch (e) {
                t.e(e)
            } finally {
                t.f()
            }
        }, bind: function (e) {
            var t, n = tn(Te.DOMProperties.get(e).getEventList());
            try {
                for (n.s(); !(t = n.n()).done;) {
                    var r = t.value;
                    e.addEventListener(r, en.logUIEventCallback)
                }
            } catch (e) {
                n.e(e)
            } finally {
                n.f()
            }
        }, unbind: function (e) {
            var t, n = tn(Te.DOMProperties.get(e).getEventList());
            try {
                for (n.s(); !(t = n.n()).done;) {
                    var r = t.value;
                    e.removeEventListener(r, en.logUIEventCallback)
                }
            } catch (e) {
                n.e(e)
            } finally {
                n.f()
            }
        }
    }, yn = (on = window, an = {
        init: function () {
            Te.browserEventsConfig.get("contextMenu", !0) && on.document.addEventListener("contextmenu", sn)
        }, stop: function () {
            on.document.removeEventListener("contextmenu", sn)
        }
    }, sn = function () {
        Pt.packageBrowserEvent({type: "contextMenuFired"})
    }, an), bn = Object.freeze({__proto__: null, default: yn}), wn = function (t) {
        var e = {}, n = null, r = 200, o = null, a = null, i = null;
        e.init = function () {
            var e;
            Te.browserEventsConfig.get("trackCursor", !0) && (e = Te.browserEventsConfig.get("cursorUpdateFrequency", 200), r = !(e <= 0) && e, n = Te.browserEventsConfig.get("cursorLeavingPage", !0), t.document.addEventListener("mousemove", u), n && (t.document.addEventListener("mouseleave", p), t.document.addEventListener("mouseenter", d)), l())
        }, e.stop = function () {
            t.document.removeEventListener("mousemove", u), t.document.removeEventListener("mouseleave", p), t.document.removeEventListener("mouseenter", d), f(), r = 200, i = a = n = null
        };

        function s() {
            a && h(a, i)
        }

        function c(e, t) {
            return {
                clientX: e.clientX,
                clientY: e.clientY,
                screenX: e.screenX,
                screenY: e.screenY,
                pageX: e.pageX,
                pageY: e.pageY,
                pageHadFocus: t
            }
        }

        var u = function (e) {
            r || h(e, t.document.hasFocus()), a = e, i = t.document.hasFocus()
        }, l = function () {
            r && !o && (o = setInterval(s, r))
        }, f = function () {
            clearInterval(o), o = null
        }, h = function (e, t) {
            var n = c(e, t);
            n.type = "cursorTracking", n.trackingType = "positionUpdate", Pt.packageBrowserEvent(n)
        }, p = function (e) {
            var t = c(e, i);
            t.type = "cursorTracking", t.trackingType = "cursorLeftViewport", f(), Pt.packageBrowserEvent(t)
        }, d = function (e) {
            var t = c(e, i);
            t.type = "cursorTracking", t.trackingType = "cursorEnteredViewport", l(), Pt.packageBrowserEvent(t)
        };
        return e
    }(window), En = Object.freeze({__proto__: null, default: wn}), Sn = (cn = window, un = {
        init: function () {
            Te.browserEventsConfig.get("pageFocus", !0) && (cn.addEventListener("blur", ln), cn.addEventListener("focus", ln))
        }, stop: function () {
            cn.removeEventListener("blur", ln), cn.removeEventListener("focus", ln)
        }
    }, ln = function (e) {
        var t = "focus" === e.type;
        Pt.packageBrowserEvent({type: "viewportFocusChange", hasFocus: t})
    }, un), An = Object.freeze({__proto__: null, default: Sn}), In = function (e) {
        var t = {};
        t.init = function () {
            Te.browserEventsConfig.get("eventsWhileScrolling", !0) && (Te.CSSRules.addRule(".disable-hover, disable-hover *", "pointer-events: none !important;"), e.addEventListener("scroll", n))
        }, t.stop = function () {
            e.removeEventListener("scroll", n)
        };
        var n = function () {
            setTimeout(function () {
                e.document.body.classList.remove("disable-hover")
            }, 0), e.document.body.classList.contains("disable-hover") || e.document.body.classList.add("disable-hover")
        };
        return t
    }(window), On = Object.freeze({__proto__: null, default: In}), xn = function (n) {
        var e = {}, r = n.location.href;
        e.init = function () {
            Te.browserEventsConfig.get("URLChanges", !0) && n.addEventListener("popstate", t)
        }, e.stop = function () {
            n.removeEventListener("popstate", t)
        };
        var t = function () {
            var e = r, t = n.location.href;
            r = t, Pt.packageBrowserEvent({type: "URLChange", previousURL: e, newURL: t})
        };
        return e
    }(window), kn = Object.freeze({__proto__: null, default: xn}), Ln = function (e) {
        var t = {}, n = null;
        t.init = function () {
            Te.browserEventsConfig.get("pageResize", !0) && e.addEventListener("resize", r)
        }, t.stop = function () {
            e.removeEventListener("resize", r), clearTimeout(n), n = null
        };
        var r = function (e) {
            clearTimeout(n), n = setTimeout(function () {
                Pt.packageBrowserEvent({
                    type: "viewportResize",
                    viewportWidth: e.target.innerWidth,
                    viewportHeight: e.target.innerHeight,
                    stringRepr: "".concat(e.target.innerWidth, "x").concat(e.target.innerHeight)
                })
            }, 200)
        };
        return t
    }(window), jn = Object.freeze({__proto__: null, default: Ln}), Cn = {};
    for (fn in jn) Cn["default" === fn ? "viewportResize" : fn] = jn[fn];
    for (hn in kn) Cn["default" === hn ? "urlChange" : hn] = kn[hn];
    for (pn in On) Cn["default" === pn ? "scroll" : pn] = On[pn];
    for (dn in An) Cn["default" === dn ? "pageFocus" : dn] = An[dn];
    for (mn in En) Cn["default" === mn ? "cursorPosition" : mn] = En[mn];
    for (vn in bn) Cn["default" === vn ? "contextMenu" : vn] = bn[vn];
    var Un = Cn, Pn = {
        init: function () {
            for (var e in Un) Un[e].init()
        }, stop: function () {
            for (var e in Un) {
                var t = Un[e];
                t.hasOwnProperty("stop") && t.stop()
            }
        }
    };

    function Fn(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return Tn(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tn(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0, o = function () {
                };
                return {
                    s: o, n: function () {
                        return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                    }, e: function (e) {
                        throw e
                    }, f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0, s = !1;
        return {
            s: function () {
                n = e[Symbol.iterator]()
            }, n: function () {
                var e = n.next();
                return i = e.done, e
            }, e: function (e) {
                s = !0, a = e
            }, f: function () {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
        }
    }

    function Tn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    var Dn = function (e) {
        var t = {}, n = null;
        t.init = function () {
            (n = new MutationObserver(r)).observe(e.document, {
                childList: !0,
                attributes: !1,
                characterData: !1,
                subtree: !0
            })
        }, t.stop = function () {
            n.disconnect(), n = null
        };
        var r = function (e) {
            var t, n = Fn(e);
            try {
                for (n.s(); !(t = n.n()).done;) {
                    var r = t.value;
                    if ("childList" == r.type) {
                        var o, a = Fn(r.addedNodes);
                        try {
                            for (a.s(); !(o = a.n()).done;) {
                                var i = o.value;
                                1 == i.nodeType && (c(i), s(i))
                            }
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                    }
                }
            } catch (e) {
                n.e(e)
            } finally {
                n.f()
            }
        }, s = function t(e) {
            Array.from(e.children).forEach(function (e) {
                c(e), t(e)
            })
        }, c = function (e) {
            var t, n = !1, r = Fn(Qt.generators.trackingConfig());
            try {
                for (r.s(); !(t = r.n()).done;) {
                    var o = t.value;
                    e.matches(o.selector) && (n = !0, Qt.processElement(e, o))
                }
            } catch (e) {
                r.e(e)
            } finally {
                r.f()
            }
            n && gn.bind(e)
        };
        return t
    }(window);

    function _n(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return Rn(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Rn(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0, o = function () {
                };
                return {
                    s: o, n: function () {
                        return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                    }, e: function (e) {
                        throw e
                    }, f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0, s = !1;
        return {
            s: function () {
                n = e[Symbol.iterator]()
            }, n: function () {
                var e = n.next();
                return i = e.done, e
            }, e: function (e) {
                s = !0, a = e
            }, f: function () {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
        }
    }

    function Rn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    var Mn, qn, zn, $n, Vn, Nn, Zn = (Mn = {
        init: function () {
            return qn(), Pn.init(), gn.init(), Dn.init(), !0
        }, stop: function () {
            Dn.stop(), Pn.stop(), gn.stop()
        }
    }, qn = function () {
        var e, t = _n(Qt.generators.trackingConfig());
        try {
            for (t.s(); !(e = t.n()).done;) {
                var n, r = e.value;
                for (n in Object.keys(r.selectedElements)) {
                    var o = r.selectedElements[n];
                    Qt.processElement(o, r)
                }
            }
        } catch (e) {
            t.e(e)
        } finally {
            t.f()
        }
    }, Mn), Gn = (zn = window, $n = {
        init: function () {
            return zn.addEventListener("logUIStarted", $n.logUIStartedEvent), !0
        }, stop: function () {
            zn.removeEventListener("logUIStarted", $n.logUIStartedEvent), $n.logUIStoppedEvent()
        }, logUIStartedEvent: function () {
            var e = {
                type: "started",
                browserAgentString: zn.navigator.userAgent,
                screenResolution: {width: zn.screen.width, height: zn.screen.height, depth: zn.screen.colorDepth},
                viewportResolution: {width: zn.innerWidth, height: zn.innerHeight}
            };
            Pt.packageStatusEvent(e)
        }, logUIStoppedEvent: function () {
            Pt.packageStatusEvent({type: "stopped"})
        }, logUIUpdatedApplicationSpecificData: function () {
            Pt.packageStatusEvent({type: "applicationSpecificDataUpdated"})
        }
    });
    return Vn = window, (Nn = {
        buildVersion: "0.5.4a",
        buildEnvironment: "production",
        buildDate: "Thu Feb 03 2022 14:32:38 GMT+0000 (Greenwich Mean Time)"
    }).Config = Te, Nn.init = function () {
        var t = p(h.mark(function e(t) {
            return h.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        if (Vn.addEventListener("logUIShutdownRequest", Nn.stop), t) {
                            e.next = 3;
                            break
                        }
                        throw Error("LogUI requires a configuration object to be passed to the init() function.");
                    case 3:
                        if (Te.init(t)) {
                            e.next = 5;
                            break
                        }
                        throw Error("The LogUI configuration component failed to initialise. Check console warnings to see what went wrong.");
                    case 5:
                        if (mt.init()) {
                            e.next = 7;
                            break
                        }
                        throw Error("The LogUI metadata handler component failed to initialise. Check console warnings to see what went wrong.");
                    case 7:
                        if (Pt.init()) {
                            e.next = 9;
                            break
                        }
                        throw Error("The LogUI event packaging component failed to initialise. Check console warnings to see what went wrong.");
                    case 9:
                        if (Gn.init()) {
                            e.next = 11;
                            break
                        }
                        throw Error("The LogUI events component failed to initialise. Check console warnings to see what went wrong.");
                    case 11:
                        return e.next = 13, De.init(t);
                    case 13:
                        if (e.sent) {
                            e.next = 15;
                            break
                        }
                        throw Error("The LogUI dispatcher component failed to initialise. Check console warnings to see what went wrong.");
                    case 15:
                        if (Zn.init()) {
                            e.next = 17;
                            break
                        }
                        throw Error("The LogUI DOMHandler component failed to initialise. Check console warnings to see what went wrong.");
                    case 17:
                        if (Ht.init()) {
                            e.next = 19;
                            break
                        }
                        throw Error("The LogUI event handler controller component failed to initialise. Check console warnings to see what went wrong.");
                    case 19:
                        Vn.addEventListener("unload", Nn.stop);
                    case 20:
                    case"end":
                        return e.stop()
                }
            }, e)
        }));
        return function (e) {
            return t.apply(this, arguments)
        }
    }(), Nn.isActive = function () {
        return Te.isActive() && De.isActive()
    }, Nn.stop = p(h.mark(function e() {
        return h.wrap(function (e) {
            for (; ;) switch (e.prev = e.next) {
                case 0:
                    if (Nn.isActive()) {
                        e.next = 2;
                        break
                    }
                    throw Error("LogUI may only be stopped if it is currently running.");
                case 2:
                    return Vn.removeEventListener("unload", Nn.stop), Vn.removeEventListener("logUIShutdownRequest", Nn.stop), Zn.stop(), Ht.stop(), Gn.stop(), Pt.stop(), mt.stop(), e.next = 11, De.stop();
                case 11:
                    Te.reset(), Vn.dispatchEvent(new Event("logUIStopped"));
                case 13:
                case"end":
                    return e.stop()
            }
        }, e)
    })), Nn.logCustomMessage = function (e) {
        if (!Nn.isActive()) throw Error("Custom messages may only be logged when the LogUI client is active.");
        Pt.packageCustomEvent(e)
    }, Nn.updateApplicationSpecificData = function (e) {
        if (!Nn.isActive()) throw Error("Application specific data can only be updated when the LogUI client is active.");
        Te.applicationSpecificData.update(e), Gn.logUIUpdatedApplicationSpecificData()
    }, Nn.deleteApplicationSpecificDataKey = function (e) {
        Te.applicationSpecificData.deleteKey(e), Gn.logUIUpdatedApplicationSpecificData()
    }, Nn.clearSessionID = function () {
        if (Nn.isActive()) throw Error("The session ID can only be reset when the LogUI client is inactive.");
        Te.sessionData.clearSessionIDKey()
    }, Nn
}();



let configurationObject = {

    logUIConfiguration: {
        // endpoint: 'wss://sebastiangomes.com/ws/',
         endpoint: 'ws://localhost:2001/ws/',
        // endpoint: 'wss://logger/ws/',
        // endpoint: 'ws://localhost:8080/ws/endpoint/',
        authorisationToken: 'AUTHTOKEN',  // The authorisation token.

        browserEvents: {
            contextMenu: false,
        },
        browserEvents: {
            trackCursor: false,
        }
    },
    applicationSpecificData: {
        userID: localStorage.getItem('loggedin-user'),
        interface:"advanced-SDDL"
    },
    trackingConfiguration: {

        // 'all-click': {
        //     selector: '*',
        //     event: 'click',
        //     name: 'ANY_CLICK',
        // },

        'serp-doc-click': {
            selector: '#document-title-serp',
            event: 'click',
            properties: {
                primary: {
                    name: 'document-title-serp',
                }
            },
            metadata: [
                {
                    nameForLog: 'doc-click-serp',
                    sourcer: 'elementProperty',
                    lookFor: 'textContent',
                }
            ],
        },
        'ws-doc-click': {
            selector: '#document-title-ws',
            event: 'click',
            properties: {
                primary: {
                    name: 'document-title-ws',
                }
            },
            metadata: [
                {
                    nameForLog: 'ws-doc-click',
                    sourcer: 'elementProperty',
                    lookFor: 'textContent',
                }
            ],
        },
        'move-from-ril-to-ws-click': {
            selector: '#move-from-ril-to-ws',
            event: 'click',
            properties: {
                primary: {
                    name: 'move-from-ril-to-ws',
                }
            },
            metadata: [
                {
                    nameForLog: 'move-from-ril-to-ws',
                    sourcer: 'elementProperty',
                    lookFor: 'textContent',
                }
            ],
        },
        'pagination-click': {
            selector: '.pagination_element',
            event: 'mouseClick',
            properties: {
                primary: {
                    name: 'pagination-click',
                }
            },
            metadata: [
                {
                    nameForLog: 'pagination-click',
                    sourcer: 'elementProperty',
                    lookFor: 'textContent',
                }
            ],
        },

        'navigations': {
            selector: '.transition',
            event: 'mouseClick',
            properties: {
                primary: {
                    name: 'navigations-clicks',
                }
            },
            metadata: [
                {
                    nameForLog: 'pagination-click',
                    sourcer: 'elementProperty',
                    lookFor: 'textContent',
                }
            ],
        },
        'remove-docment': {
            selector: '.text-rose-600',
            event: 'mouseClick',
            properties: {
                primary: {
                    name: 'remove-docment',
                }
            },
            metadata: [
                {
                    nameForLog: 'remove-docment',
                    sourcer: 'elementProperty',
                    lookFor: 'textContent',
                }
            ],
        },
        'save-to-ril': {
            selector: '#click-to-save-in-ril',
            event: 'mouseClick',
            properties: {
                primary: {
                    name: 'save-to-ril',
                }
            },
            metadata: [
                {
                    nameForLog: 'save-to-ril',
                    sourcer: 'elementProperty',
                    lookFor: 'textContent',
                }
            ],
        },
        // 'add-tag': {
        //     selector: '.add-tag-log',
        //     event: 'mouseClick',
        //     properties: {
        //         primary: {
        //             name: 'add-tag-click',
        //         }
        //     },
        //     metadata: [
        //         {
        //             nameForLog: 'add-tag-click',
        //             sourcer: 'elementProperty',
        //             lookFor: 'textContent',
        //         }
        //     ],
        // },
        'tag-input-typing': {
            selector: '.tag-input-log',
            event: 'keyup',
            properties: {
                primary: {
                    name: 'typing-in-tagbox',
                }
            },
            metadata: [
                {
                    nameForLog: 'typing-in-tagbox',
                    sourcer: 'elementProperty',
                    lookFor: 'value',
                }
            ],
        },

        'searchBox-input-typing': {
            selector: '#query',
            event: 'keyup',
            properties: {
                primary: {
                    name: 'typing-in-searchBox',
                }
            },
            metadata: [
                {
                    nameForLog: 'typing-in-searchBox',
                    sourcer: 'elementProperty',
                    lookFor: 'value',
                }
            ],
        },

        'issue-a-query': {
            selector: '#search',
            event: 'mouseClick',
            properties: {
                primary: {
                    name: 'typing-in-searchBox',
                }
            },
            metadata: [
                {
                    nameForLog: 'typing-in-searchBox',
                    sourcer: 'elementProperty',
                    lookFor: 'value',
                }
            ],
        },
        'issue-a-query': {
            selector: '#search-btn',
            event: 'mouseClick',
            properties: {
                primary: {
                    name: 'typing-in-searchBox',
                }
            },
            metadata: [
                {
                    nameForLog: 'typing-in-searchBox',
                    sourcer: 'elementProperty',
                    lookFor: 'value',
                }
            ],
        },

        'selectOrUnselectAll-pressed': {
            selector: '#selectALLOrDeselectAll',
            event: 'mouseClick',
            properties: {
                primary: {
                    name: 'clicked-on-selectOrUnselectAll-button',
                },
            },
            metadata: [
                {
                    nameForLog: 'buttonName',
                    sourcer: 'elementProperty',
                    lookFor: 'textContent',
                }
            ]
        },

        'searchBarBtn-clicked': {
            selector: '#searchBarBtn',
            event: 'mouseClick',
            properties: {
                primary: {
                    name: 'clicked-on-searchBarBtn-button',
                },
            },
            metadata: [
                {
                    nameForLog: 'buttonName',
                    sourcer: 'elementProperty',
                    lookFor: 'textContent',
                }
            ]
        },
         'scrollBtn-clicked': {
            selector: '#scrollBtn',
            event: 'mouseClick',
            properties: {
                primary: {
                    name: 'clicked-on-scrollBtn-button',
                },
            },
            metadata: [
                {
                    nameForLog: 'buttonName',
                    sourcer: 'elementProperty',
                    lookFor: 'textContent',
                }
            ]
        },
        'tag-clicked': {
            selector: '.tag-select-log',
            event: 'mouseClick',
            properties: {
                primary: {
                    name: 'clicked-on-tag',
                },
            },
            metadata: [
                {
                    nameForLog: 'buttonName',
                    sourcer: 'elementProperty',
                    lookFor: 'textContent',
                }
            ]
        },

        'tag-removed': {
            selector: '.tag-delete-log',
            event: 'mouseClick',
            properties: {
                primary: {
                    name: 'clicked-on-tag',
                },
            },
            metadata: [
                {
                    nameForLog: 'buttonName',
                    sourcer: 'elementProperty',
                    lookFor: 'textContent',
                }
            ]
        },


    }
}
if (window.LogUI) {
    console.log('@@@@@@@@@@@@@@@@@   Log UI INIT   @@@@@@@@@@@@@@@');
    LogUI.init(configurationObject);
}
