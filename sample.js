var marketing;
(() => {
  "use strict";
  var e,
    r,
    t,
    n,
    a,
    o,
    i,
    u,
    l,
    f,
    d,
    s = {
      8867: (e, r, t) => {
        var n = {
            "./MarketingApp": () =>
              Promise.all([t.e(750), t.e(271), t.e(185)]).then(
                () => () => t(6185)
              ),
          },
          a = (e, r) => (
            (t.R = r),
            (r = t.o(n, e)
              ? n[e]()
              : Promise.resolve().then(() => {
                  throw new Error(
                    'Module "' + e + '" does not exist in container.'
                  );
                })),
            (t.R = void 0),
            r
          ),
          o = (e, r) => {
            if (t.S) {
              var n = "default",
                a = t.S[n];
              if (a && a !== e)
                throw new Error(
                  "Container initialization failed as it has already been initialized with a different share scope"
                );
              return (t.S[n] = e), t.I(n, r);
            }
          };
        t.d(r, { get: () => a, init: () => o });
      },
    },
    c = {};
  function h(e) {
    var r = c[e];
    if (void 0 !== r) return r.exports;
    var t = (c[e] = { exports: {} });
    return s[e](t, t.exports, h), t.exports;
  }
  (h.m = s),
    (h.c = c),
    (h.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return h.d(r, { a: r }), r;
    }),
    (h.d = (e, r) => {
      for (var t in r)
        h.o(r, t) &&
          !h.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (h.f = {}),
    (h.e = (e) =>
      Promise.all(Object.keys(h.f).reduce((r, t) => (h.f[t](e, r), r), []))),
    (h.u = (e) =>
      e +
      "." +
      {
        185: "6c2e2eee792cff0bb3b5",
        190: "47823be0030740867108",
        271: "7cde8a9568ca741fdb32",
        294: "14331f88c383b63c4b62",
        655: "857dc2054a22aa7950d4",
        750: "e3906c6a1d0ac311f198",
        935: "b277c3b1562ae7b89896",
      }[e] +
      ".js"),
    (h.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (h.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (e = {}),
    (r = "marketing:"),
    (h.l = (t, n, a, o) => {
      if (e[t]) e[t].push(n);
      else {
        var i, u;
        if (void 0 !== a)
          for (
            var l = document.getElementsByTagName("script"), f = 0;
            f < l.length;
            f++
          ) {
            var d = l[f];
            if (
              d.getAttribute("src") == t ||
              d.getAttribute("data-webpack") == r + a
            ) {
              i = d;
              break;
            }
          }
        i ||
          ((u = !0),
          ((i = document.createElement("script")).charset = "utf-8"),
          (i.timeout = 120),
          h.nc && i.setAttribute("nonce", h.nc),
          i.setAttribute("data-webpack", r + a),
          (i.src = t)),
          (e[t] = [n]);
        var s = (r, n) => {
            (i.onerror = i.onload = null), clearTimeout(c);
            var a = e[t];
            if (
              (delete e[t],
              i.parentNode && i.parentNode.removeChild(i),
              a && a.forEach((e) => e(n)),
              r)
            )
              return r(n);
          },
          c = setTimeout(
            s.bind(null, void 0, { type: "timeout", target: i }),
            12e4
          );
        (i.onerror = s.bind(null, i.onerror)),
          (i.onload = s.bind(null, i.onload)),
          u && document.head.appendChild(i);
      }
    }),
    (h.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      h.S = {};
      var e = {},
        r = {};
      h.I = (t, n) => {
        n || (n = []);
        var a = r[t];
        if ((a || (a = r[t] = {}), !(n.indexOf(a) >= 0))) {
          if ((n.push(a), e[t])) return e[t];
          h.o(h.S, t) || (h.S[t] = {});
          var o = h.S[t],
            i = "marketing",
            u = (e, r, t, n) => {
              var a = (o[e] = o[e] || {}),
                u = a[r];
              (!u || (!u.loaded && (!n != !u.eager ? n : i > u.from))) &&
                (a[r] = { get: t, from: i, eager: !!n });
            },
            l = [];
          return (
            "default" === t &&
              (u("react-dom", "17.0.2", () =>
                Promise.all([h.e(935), h.e(271)]).then(() => () => h(3935))
              ),
              u("react-router-dom", "5.3.4", () =>
                Promise.all([h.e(655), h.e(271), h.e(190)]).then(
                  () => () => h(4655)
                )
              ),
              u("react", "17.0.2", () => h.e(294).then(() => () => h(9976)))),
            (e[t] = l.length ? Promise.all(l).then(() => (e[t] = 1)) : 1)
          );
        }
      };
    })(),
    (h.p = "/marketing/latest/"),
    (t = (e) => {
      var r = (e) => e.split(".").map((e) => (+e == e ? +e : e)),
        t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
        n = t[1] ? r(t[1]) : [];
      return (
        t[2] && (n.length++, n.push.apply(n, r(t[2]))),
        t[3] && (n.push([]), n.push.apply(n, r(t[3]))),
        n
      );
    }),
    (n = (e, r) => {
      (e = t(e)), (r = t(r));
      for (var n = 0; ; ) {
        if (n >= e.length) return n < r.length && "u" != (typeof r[n])[0];
        var a = e[n],
          o = (typeof a)[0];
        if (n >= r.length) return "u" == o;
        var i = r[n],
          u = (typeof i)[0];
        if (o != u) return ("o" == o && "n" == u) || "s" == u || "u" == o;
        if ("o" != o && "u" != o && a != i) return a < i;
        n++;
      }
    }),
    (a = (e, r) => {
      if (0 in e) {
        r = t(r);
        var n = e[0],
          o = n < 0;
        o && (n = -n - 1);
        for (var i = 0, u = 1, l = !0; ; u++, i++) {
          var f,
            d,
            s = u < e.length ? (typeof e[u])[0] : "";
          if (i >= r.length || "o" == (d = (typeof (f = r[i]))[0]))
            return !l || ("u" == s ? u > n && !o : ("" == s) != o);
          if ("u" == d) {
            if (!l || "u" != s) return !1;
          } else if (l)
            if (s == d)
              if (u <= n) {
                if (f != e[u]) return !1;
              } else {
                if (o ? f > e[u] : f < e[u]) return !1;
                f != e[u] && (l = !1);
              }
            else if ("s" != s && "n" != s) {
              if (o || u <= n) return !1;
              (l = !1), u--;
            } else {
              if (u <= n || d < s != o) return !1;
              l = !1;
            }
          else "s" != s && "n" != s && ((l = !1), u--);
        }
      }
      var c = [],
        h = c.pop.bind(c);
      for (i = 1; i < e.length; i++) {
        var p = e[i];
        c.push(1 == p ? h() | h() : 2 == p ? h() & h() : p ? a(p, r) : !h());
      }
      return !!h();
    }),
    (o = (e, r, t) => {
      var o = e[r];
      return (
        (r = Object.keys(o).reduce(
          (e, r) => (!a(t, r) || (e && !n(e, r)) ? e : r),
          0
        )) && o[r]
      );
    }),
    (i = (e) => ((e.loaded = 1), e.get())),
    (u = ((e) =>
      function (r, t, n, a) {
        var o = h.I(r);
        return o && o.then
          ? o.then(e.bind(e, r, h.S[r], t, n, a))
          : e(0, h.S[r], t, n, a);
      })((e, r, t, n, a) => {
      var u = r && h.o(r, t) && o(r, t, n);
      return u ? i(u) : a();
    })),
    (l = {}),
    (f = {
      7271: () =>
        u("default", "react", [1, 17, 0, 1], () =>
          h.e(294).then(() => () => h(9976))
        ),
      334: () =>
        u("default", "react-router-dom", [1, 5, 2, 0], () =>
          h.e(655).then(() => () => h(4655))
        ),
      7650: () =>
        u("default", "react-dom", [1, 17, 0, 1], () =>
          h.e(935).then(() => () => h(3935))
        ),
    }),
    (d = { 185: [334, 7650], 271: [7271] }),
    (h.f.consumes = (e, r) => {
      h.o(d, e) &&
        d[e].forEach((e) => {
          if (h.o(l, e)) return r.push(l[e]);
          var t = (r) => {
              (l[e] = 0),
                (h.m[e] = (t) => {
                  delete h.c[e], (t.exports = r());
                });
            },
            n = (r) => {
              delete l[e],
                (h.m[e] = (t) => {
                  throw (delete h.c[e], r);
                });
            };
          try {
            var a = f[e]();
            a.then ? r.push((l[e] = a.then(t).catch(n))) : t(a);
          } catch (e) {
            n(e);
          }
        });
    }),
    (() => {
      var e = { 73: 0 };
      h.f.j = (r, t) => {
        var n = h.o(e, r) ? e[r] : void 0;
        if (0 !== n)
          if (n) t.push(n[2]);
          else if (271 != r) {
            var a = new Promise((t, a) => (n = e[r] = [t, a]));
            t.push((n[2] = a));
            var o = h.p + h.u(r),
              i = new Error();
            h.l(
              o,
              (t) => {
                if (h.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var a = t && ("load" === t.type ? "missing" : t.type),
                    o = t && t.target && t.target.src;
                  (i.message =
                    "Loading chunk " + r + " failed.\n(" + a + ": " + o + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = a),
                    (i.request = o),
                    n[1](i);
                }
              },
              "chunk-" + r,
              r
            );
          } else e[r] = 0;
      };
      var r = (r, t) => {
          var n,
            a,
            [o, i, u] = t,
            l = 0;
          if (o.some((r) => 0 !== e[r])) {
            for (n in i) h.o(i, n) && (h.m[n] = i[n]);
            u && u(h);
          }
          for (r && r(t); l < o.length; l++)
            (a = o[l]), h.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        t = (self.webpackChunkmarketing = self.webpackChunkmarketing || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
  var p = h(8867);
  marketing = p;
})();
