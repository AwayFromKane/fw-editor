var app = (function () {
  "use strict";
  function t() {}
  function e(t, e) {
    for (const n in e) t[n] = e[n];
    return t;
  }
  function n(t) {
    return t();
  }
  function i() {
    return Object.create(null);
  }
  function r(t) {
    t.forEach(n);
  }
  function s(t) {
    return "function" == typeof t;
  }
  function a(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && "object" == typeof t) || "function" == typeof t;
  }
  function o(e, n, i) {
    e.$$.on_destroy.push(
      (function (e, ...n) {
        if (null == e) return t;
        const i = e.subscribe(...n);
        return i.unsubscribe ? () => i.unsubscribe() : i;
      })(n, i)
    );
  }
  function l(t, e) {
    const n = {};
    e = new Set(e);
    for (const i in t) e.has(i) || "$" === i[0] || (n[i] = t[i]);
    return n;
  }
  function c(t, e, n) {
    return t.set(n), e;
  }
  function h(t, e) {
    t.appendChild(e);
  }
  function u(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function d(t) {
    t.parentNode && t.parentNode.removeChild(t);
  }
  function p(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
  }
  function m(t) {
    return document.createElement(t);
  }
  function f(t) {
    return document.createTextNode(t);
  }
  function g() {
    return f(" ");
  }
  function v() {
    return f("");
  }
  function y(t, e, n, i) {
    return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
  }
  function x(t, e, n) {
    null == n
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function _(t, e) {
    const n = Object.getOwnPropertyDescriptors(t.__proto__);
    for (const i in e)
      null == e[i]
        ? t.removeAttribute(i)
        : "style" === i
        ? (t.style.cssText = e[i])
        : "__value" === i
        ? (t.value = t[i] = e[i])
        : n[i] && n[i].set
        ? (t[i] = e[i])
        : x(t, i, e[i]);
  }
  function w(t, e) {
    (e = "" + e), t.wholeText !== e && (t.data = e);
  }
  function b(t, e, n, i) {
    null === n
      ? t.style.removeProperty(e)
      : t.style.setProperty(e, n, i ? "important" : "");
  }
  let M;
  function S(t) {
    M = t;
  }
  function E() {
    if (!M) throw new Error("Function called outside component initialization");
    return M;
  }
  function T(t) {
    E().$$.on_mount.push(t);
  }
  function L(t, e) {
    const n = t.$$.callbacks[e.type];
    n && n.slice().forEach((t) => t.call(this, e));
  }
  const A = [],
    R = [],
    P = [],
    C = [],
    I = Promise.resolve();
  let D = !1;
  function N(t) {
    P.push(t);
  }
  function z(t) {
    C.push(t);
  }
  const O = new Set();
  let B = 0;
  function F() {
    const t = M;
    do {
      for (; B < A.length; ) {
        const t = A[B];
        B++, S(t), H(t.$$);
      }
      for (S(null), A.length = 0, B = 0; R.length; ) R.pop()();
      for (let t = 0; t < P.length; t += 1) {
        const e = P[t];
        O.has(e) || (O.add(e), e());
      }
      P.length = 0;
    } while (A.length);
    for (; C.length; ) C.pop()();
    (D = !1), O.clear(), S(t);
  }
  function H(t) {
    if (null !== t.fragment) {
      t.update(), r(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(N);
    }
  }
  const U = new Set();
  let G;
  function V() {
    G = { r: 0, c: [], p: G };
  }
  function k() {
    G.r || r(G.c), (G = G.p);
  }
  function W(t, e) {
    t && t.i && (U.delete(t), t.i(e));
  }
  function j(t, e, n, i) {
    if (t && t.o) {
      if (U.has(t)) return;
      U.add(t),
        G.c.push(() => {
          U.delete(t), i && (n && t.d(1), i());
        }),
        t.o(e);
    } else i && i();
  }
  function X(t, e, n) {
    const i = t.$$.props[e];
    void 0 !== i && ((t.$$.bound[i] = n), n(t.$$.ctx[i]));
  }
  function q(t) {
    t && t.c();
  }
  function Y(t, e, i, a) {
    const { fragment: o, after_update: l } = t.$$;
    o && o.m(e, i),
      a ||
        N(() => {
          const e = t.$$.on_mount.map(n).filter(s);
          t.$$.on_destroy ? t.$$.on_destroy.push(...e) : r(e),
            (t.$$.on_mount = []);
        }),
      l.forEach(N);
  }
  function Z(t, e) {
    const n = t.$$;
    null !== n.fragment &&
      (r(n.on_destroy),
      n.fragment && n.fragment.d(e),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function $(t, e) {
    -1 === t.$$.dirty[0] &&
      (A.push(t), D || ((D = !0), I.then(F)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function J(e, n, s, a, o, l, c, h = [-1]) {
    const u = M;
    S(e);
    const p = (e.$$ = {
      fragment: null,
      ctx: [],
      props: l,
      update: t,
      not_equal: o,
      bound: i(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(n.context || (u ? u.$$.context : [])),
      callbacks: i(),
      dirty: h,
      skip_bound: !1,
      root: n.target || u.$$.root,
    });
    c && c(p.root);
    let m = !1;
    if (
      ((p.ctx = s
        ? s(e, n.props || {}, (t, n, ...i) => {
            const r = i.length ? i[0] : n;
            return (
              p.ctx &&
                o(p.ctx[t], (p.ctx[t] = r)) &&
                (!p.skip_bound && p.bound[t] && p.bound[t](r), m && $(e, t)),
              n
            );
          })
        : []),
      p.update(),
      (m = !0),
      r(p.before_update),
      (p.fragment = !!a && a(p.ctx)),
      n.target)
    ) {
      if (n.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(n.target);
        p.fragment && p.fragment.l(t), t.forEach(d);
      } else p.fragment && p.fragment.c();
      n.intro && W(e.$$.fragment),
        Y(e, n.target, n.anchor, n.customElement),
        F();
    }
    S(u);
  }
  class Q {
    $destroy() {
      Z(this, 1), (this.$destroy = t);
    }
    $on(e, n) {
      if (!s(n)) return t;
      const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        i.push(n),
        () => {
          const t = i.indexOf(n);
          -1 !== t && i.splice(t, 1);
        }
      );
    }
    $set(t) {
      var e;
      this.$$set &&
        ((e = t), 0 !== Object.keys(e).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }
  function K(n) {
    let i,
      s,
      a,
      o,
      l,
      c,
      p,
      v,
      M,
      S,
      E,
      T,
      L,
      A,
      R,
      P = [
        n[14],
        { class: (L = "textfield-component-container " + n[14]?.class) },
      ],
      C = {};
    for (let t = 0; t < P.length; t += 1) C = e(C, P[t]);
    return {
      c() {
        (i = m("div")),
          (s = m("p")),
          (a = f(n[2])),
          (o = g()),
          (l = m("input")),
          (v = g()),
          (M = m("div")),
          (S = g()),
          (E = m("p")),
          (T = f(n[0])),
          x(s, "class", "textfield-title"),
          x(l, "style", (c = n[7].length > 0 ? "user-select: none;" : "")),
          (l.value = n[1]),
          x(l, "placeholder", n[3]),
          x(l, "maxlength", n[6]),
          x(l, "type", n[4]),
          (l.readOnly = p = n[10] || n[7].length > 0),
          (l.disabled = n[11]),
          x(M, "class", "textfield-underline"),
          b(M, "border-bottom-style", n[12] ? "dotted" : "solid"),
          x(E, "class", "textfield-sub"),
          _(i, C);
      },
      m(t, e) {
        u(t, i, e),
          h(i, s),
          h(s, a),
          h(i, o),
          h(i, l),
          h(i, v),
          h(i, M),
          h(i, S),
          h(i, E),
          h(E, T),
          n[17](i),
          A || ((R = [y(l, "change", n[15]), y(l, "input", n[16])]), (A = !0));
      },
      p(t, [e]) {
        4 & e && w(a, t[2]),
          128 & e &&
            c !== (c = t[7].length > 0 ? "user-select: none;" : "") &&
            x(l, "style", c),
          2 & e && l.value !== t[1] && (l.value = t[1]),
          8 & e && x(l, "placeholder", t[3]),
          64 & e && x(l, "maxlength", t[6]),
          16 & e && x(l, "type", t[4]),
          1152 & e && p !== (p = t[10] || t[7].length > 0) && (l.readOnly = p),
          2048 & e && (l.disabled = t[11]),
          4096 & e && b(M, "border-bottom-style", t[12] ? "dotted" : "solid"),
          1 & e && w(T, t[0]),
          _(
            i,
            (C = (function (t, e) {
              const n = {},
                i = {},
                r = { $$scope: 1 };
              let s = t.length;
              for (; s--; ) {
                const a = t[s],
                  o = e[s];
                if (o) {
                  for (const t in a) t in o || (i[t] = 1);
                  for (const t in o) r[t] || ((n[t] = o[t]), (r[t] = 1));
                  t[s] = o;
                } else for (const t in a) r[t] = 1;
              }
              for (const t in i) t in n || (n[t] = void 0);
              return n;
            })(P, [
              16384 & e && t[14],
              16384 & e &&
                L !== (L = "textfield-component-container " + t[14]?.class) && {
                  class: L,
                },
            ]))
          );
      },
      i: t,
      o: t,
      d(t) {
        t && d(i), n[17](null), (A = !1), r(R);
      },
    };
  }
  function tt(t, n, i) {
    const r = [
      "Title",
      "Placeholder",
      "Sub",
      "Type",
      "SubSet",
      "MaxLength",
      "Value",
      "Select",
      "Change",
      "onEnter",
      "ReadOnly",
      "Disabled",
      "Dotted",
    ];
    let s = l(n, r),
      { Title: a = "No Title" } = n,
      { Placeholder: o = "" } = n,
      { Sub: c = "" } = n,
      { Type: h = "text" } = n,
      { SubSet: u = () => {} } = n,
      { MaxLength: d } = n,
      { Value: p = "" } = n,
      { Select: m = [] } = n,
      { Change: f = () => {} } = n,
      { onEnter: g } = n,
      { ReadOnly: v = !1 } = n,
      { Disabled: y = !1 } = n,
      { Dotted: x = !1 } = n;
    var _;
    p.length >= 1 && f(s?.id, p);
    return (
      (t.$$set = (t) => {
        (n = e(
          e({}, n),
          (function (t) {
            const e = {};
            for (const n in t) "$" !== n[0] && (e[n] = t[n]);
            return e;
          })(t)
        )),
          i(14, (s = l(n, r))),
          "Title" in t && i(2, (a = t.Title)),
          "Placeholder" in t && i(3, (o = t.Placeholder)),
          "Sub" in t && i(0, (c = t.Sub)),
          "Type" in t && i(4, (h = t.Type)),
          "SubSet" in t && i(5, (u = t.SubSet)),
          "MaxLength" in t && i(6, (d = t.MaxLength)),
          "Value" in t && i(1, (p = t.Value)),
          "Select" in t && i(7, (m = t.Select)),
          "Change" in t && i(8, (f = t.Change)),
          "onEnter" in t && i(9, (g = t.onEnter)),
          "ReadOnly" in t && i(10, (v = t.ReadOnly)),
          "Disabled" in t && i(11, (y = t.Disabled)),
          "Dotted" in t && i(12, (x = t.Dotted));
      }),
      [
        c,
        p,
        a,
        o,
        h,
        u,
        d,
        m,
        f,
        g,
        v,
        y,
        x,
        _,
        s,
        (t) => {
          g && (g(t.target.value), i(1, (p = "")));
        },
        (t) => {
          if ((i(1, (p = t.target.value)), f(s?.id, p), u)) {
            let t = u(p);
            t && t != c && i(0, (c = t));
          }
        },
        function (t) {
          R[t ? "unshift" : "push"](() => {
            i(13, (_ = t));
          });
        },
      ]
    );
  }
  class et extends Q {
    constructor(t) {
      super(),
        J(this, t, tt, K, a, {
          Title: 2,
          Placeholder: 3,
          Sub: 0,
          Type: 4,
          SubSet: 5,
          MaxLength: 6,
          Value: 1,
          Select: 7,
          Change: 8,
          onEnter: 9,
          ReadOnly: 10,
          Disabled: 11,
          Dotted: 12,
        });
    }
  }
  const nt = [];
  function it(e, n = t) {
    let i;
    const r = new Set();
    function s(t) {
      if (a(e, t) && ((e = t), i)) {
        const t = !nt.length;
        for (const t of r) t[1](), nt.push(t, e);
        if (t) {
          for (let t = 0; t < nt.length; t += 2) nt[t][0](nt[t + 1]);
          nt.length = 0;
        }
      }
    }
    return {
      set: s,
      update: function (t) {
        s(t(e));
      },
      subscribe: function (a, o = t) {
        const l = [a, o];
        return (
          r.add(l),
          1 === r.size && (i = n(s) || t),
          a(e),
          () => {
            r.delete(l), 0 === r.size && (i(), (i = null));
          }
        );
      },
    };
  }
  const rt = (t, e) => {
    const n = (n) => {
      const { Action: i } = n.data;
      `${i}` === t && e(n.data);
    };
    var i;
    T(() => window.addEventListener("message", n)),
      (i = () => window.removeEventListener("message", n)),
      E().$$.on_destroy.push(i);
  };
  const st = (t, e, n) => {
      n || (n = () => {}),
        (async function (t, e, n) {
          const i =
              t ||
              (GetParentResourceName
                ? window.GetParentResourceName()
                : "nui-frame-app"),
            r = await fetch(`https://${i}/${e}`, {
              method: "post",
              headers: { "Content-Type": "application/json; charset=UTF-8" },
              body: JSON.stringify(n),
            });
          return await r.json();
        })("fw-editor", t, e || {})
          .then((t) => {
            n(!0, t);
          })
          .catch((t) => {
            n(!1, t);
          });
    },
    at = (t, e) => {
      rt(t, e);
    },
    ot = (t) => {
      console.log(`[Editor-UI]: ${t}`);
    },
    lt = it(!window.invokeNative),
    ct = it([]),
    ht = it({
      TransformSpace: "world",
      TransformMode: "translate",
      CameraSpeed: 0.1,
      LookSpeedX: 10,
      LookSpeedY: 20,
    });
  function ut(t) {
    let e,
      n,
      i,
      s,
      a,
      o,
      l,
      c,
      p,
      v,
      _,
      w,
      b,
      M,
      S,
      E,
      T,
      L,
      A,
      R,
      P,
      C,
      I,
      D,
      N,
      z,
      O = t[2]?.Hash && dt(t);
    return {
      c() {
        (e = m("div")),
          (n = m("p")),
          (n.textContent = "Space:"),
          (i = g()),
          (s = m("div")),
          (a = m("div")),
          (o = f("World")),
          (c = g()),
          (p = m("div")),
          (v = f("Local")),
          (w = g()),
          (b = m("p")),
          (b.textContent = "Mode:"),
          (M = g()),
          (S = m("div")),
          (E = m("div")),
          (T = f("Translate")),
          (A = g()),
          (R = m("div")),
          (P = f("Rotate")),
          (I = g()),
          O && O.c(),
          x(n, "class", "svelte-3hyxde"),
          x(
            a,
            "class",
            (l =
              "object-controller-button " +
              ("world" == t[0].TransformSpace ? "active" : "") +
              " svelte-3hyxde")
          ),
          x(
            p,
            "class",
            (_ =
              "object-controller-button " +
              ("local" == t[0].TransformSpace ? "active" : "") +
              " svelte-3hyxde")
          ),
          x(s, "class", "object-controller-list svelte-3hyxde"),
          x(b, "class", "svelte-3hyxde"),
          x(
            E,
            "class",
            (L =
              "object-controller-button " +
              ("translate" == t[0].TransformMode ? "active" : "") +
              " svelte-3hyxde")
          ),
          x(
            R,
            "class",
            (C =
              "object-controller-button " +
              ("rotate" == t[0].TransformMode ? "active" : "") +
              " svelte-3hyxde")
          ),
          x(S, "class", "object-controller-list svelte-3hyxde"),
          x(e, "class", "object-controller-container svelte-3hyxde");
      },
      m(r, l) {
        u(r, e, l),
          h(e, n),
          h(e, i),
          h(e, s),
          h(s, a),
          h(a, o),
          h(s, c),
          h(s, p),
          h(p, v),
          h(e, w),
          h(e, b),
          h(e, M),
          h(e, S),
          h(S, E),
          h(E, T),
          h(S, A),
          h(S, R),
          h(R, P),
          h(e, I),
          O && O.m(e, null),
          (D = !0),
          N ||
            ((z = [
              y(a, "keydown", t[8]),
              y(a, "click", t[9]),
              y(p, "keydown", t[7]),
              y(p, "click", t[10]),
              y(E, "keydown", t[6]),
              y(E, "click", t[11]),
              y(R, "keydown", t[5]),
              y(R, "click", t[12]),
            ]),
            (N = !0));
      },
      p(t, n) {
        (!D ||
          (1 & n &&
            l !==
              (l =
                "object-controller-button " +
                ("world" == t[0].TransformSpace ? "active" : "") +
                " svelte-3hyxde"))) &&
          x(a, "class", l),
          (!D ||
            (1 & n &&
              _ !==
                (_ =
                  "object-controller-button " +
                  ("local" == t[0].TransformSpace ? "active" : "") +
                  " svelte-3hyxde"))) &&
            x(p, "class", _),
          (!D ||
            (1 & n &&
              L !==
                (L =
                  "object-controller-button " +
                  ("translate" == t[0].TransformMode ? "active" : "") +
                  " svelte-3hyxde"))) &&
            x(E, "class", L),
          (!D ||
            (1 & n &&
              C !==
                (C =
                  "object-controller-button " +
                  ("rotate" == t[0].TransformMode ? "active" : "") +
                  " svelte-3hyxde"))) &&
            x(R, "class", C),
          t[2]?.Hash
            ? O
              ? (O.p(t, n), 4 & n && W(O, 1))
              : ((O = dt(t)), O.c(), W(O, 1), O.m(e, null))
            : O &&
              (V(),
              j(O, 1, 1, () => {
                O = null;
              }),
              k());
      },
      i(t) {
        D || (W(O), (D = !0));
      },
      o(t) {
        j(O), (D = !1);
      },
      d(t) {
        t && d(e), O && O.d(), (N = !1), r(z);
      },
    };
  }
  function dt(t) {
    let e, n, i, r, s, a, o, l, c, p, f, v, y, _, w, M, S, E, T, L, A, P, C, I;
    function D(e) {
      t[13](e);
    }
    i = new et({ props: { Title: "Model", Value: t[2].Hash, ReadOnly: !0 } });
    let N = { style: "margin-right: 0.5vh;", Title: "X", Type: "number" };
    function O(e) {
      t[14](e);
    }
    void 0 !== t[2].EntityCoords.x && (N.Value = t[2].EntityCoords.x),
      (a = new et({ props: N })),
      R.push(() => X(a, "Value", D));
    let B = { style: "margin-right: 0.5vh;", Title: "Y", Type: "number" };
    function F(e) {
      t[15](e);
    }
    void 0 !== t[2].EntityCoords.y && (B.Value = t[2].EntityCoords.y),
      (c = new et({ props: B })),
      R.push(() => X(c, "Value", O));
    let H = { Title: "Z", Type: "number" };
    function U(e) {
      t[16](e);
    }
    void 0 !== t[2].EntityCoords.z && (H.Value = t[2].EntityCoords.z),
      (v = new et({ props: H })),
      R.push(() => X(v, "Value", F));
    let G = { style: "margin-right: 0.5vh;", Title: "Pitch", Type: "number" };
    function V(e) {
      t[17](e);
    }
    void 0 !== t[2].EntityRot.pitch && (G.Value = t[2].EntityRot.pitch),
      (M = new et({ props: G })),
      R.push(() => X(M, "Value", U));
    let k = { style: "margin-right: 0.5vh;", Title: "Roll", Type: "number" };
    function $(e) {
      t[18](e);
    }
    void 0 !== t[2].EntityRot.roll && (k.Value = t[2].EntityRot.roll),
      (T = new et({ props: k })),
      R.push(() => X(T, "Value", V));
    let J = { Title: "Yaw", Type: "number" };
    return (
      void 0 !== t[2].EntityRot.yaw && (J.Value = t[2].EntityRot.yaw),
      (P = new et({ props: J })),
      R.push(() => X(P, "Value", $)),
      {
        c() {
          (e = m("p")),
            (e.textContent = "Entity"),
            (n = g()),
            q(i.$$.fragment),
            (r = g()),
            (s = m("div")),
            q(a.$$.fragment),
            (l = g()),
            q(c.$$.fragment),
            (f = g()),
            q(v.$$.fragment),
            (_ = g()),
            (w = m("div")),
            q(M.$$.fragment),
            (E = g()),
            q(T.$$.fragment),
            (A = g()),
            q(P.$$.fragment),
            b(e, "font-size", "2vh"),
            x(e, "class", "svelte-3hyxde"),
            b(s, "display", "flex"),
            b(s, "flex-direction", "row"),
            b(s, "justify-content", "space-between"),
            b(w, "display", "flex"),
            b(w, "flex-direction", "row"),
            b(w, "justify-content", "space-between");
        },
        m(t, o) {
          u(t, e, o),
            u(t, n, o),
            Y(i, t, o),
            u(t, r, o),
            u(t, s, o),
            Y(a, s, null),
            h(s, l),
            Y(c, s, null),
            h(s, f),
            Y(v, s, null),
            u(t, _, o),
            u(t, w, o),
            Y(M, w, null),
            h(w, E),
            Y(T, w, null),
            h(w, A),
            Y(P, w, null),
            (I = !0);
        },
        p(t, e) {
          const n = {};
          4 & e && (n.Value = t[2].Hash), i.$set(n);
          const r = {};
          !o &&
            4 & e &&
            ((o = !0), (r.Value = t[2].EntityCoords.x), z(() => (o = !1))),
            a.$set(r);
          const s = {};
          !p &&
            4 & e &&
            ((p = !0), (s.Value = t[2].EntityCoords.y), z(() => (p = !1))),
            c.$set(s);
          const l = {};
          !y &&
            4 & e &&
            ((y = !0), (l.Value = t[2].EntityCoords.z), z(() => (y = !1))),
            v.$set(l);
          const h = {};
          !S &&
            4 & e &&
            ((S = !0), (h.Value = t[2].EntityRot.pitch), z(() => (S = !1))),
            M.$set(h);
          const u = {};
          !L &&
            4 & e &&
            ((L = !0), (u.Value = t[2].EntityRot.roll), z(() => (L = !1))),
            T.$set(u);
          const d = {};
          !C &&
            4 & e &&
            ((C = !0), (d.Value = t[2].EntityRot.yaw), z(() => (C = !1))),
            P.$set(d);
        },
        i(t) {
          I ||
            (W(i.$$.fragment, t),
            W(a.$$.fragment, t),
            W(c.$$.fragment, t),
            W(v.$$.fragment, t),
            W(M.$$.fragment, t),
            W(T.$$.fragment, t),
            W(P.$$.fragment, t),
            (I = !0));
        },
        o(t) {
          j(i.$$.fragment, t),
            j(a.$$.fragment, t),
            j(c.$$.fragment, t),
            j(v.$$.fragment, t),
            j(M.$$.fragment, t),
            j(T.$$.fragment, t),
            j(P.$$.fragment, t),
            (I = !1);
        },
        d(t) {
          t && d(e),
            t && d(n),
            Z(i, t),
            t && d(r),
            t && d(s),
            Z(a),
            Z(c),
            Z(v),
            t && d(_),
            t && d(w),
            Z(M),
            Z(T),
            Z(P);
        },
      }
    );
  }
  function pt(t) {
    let e,
      n,
      i = t[1] && ut(t);
    return {
      c() {
        i && i.c(), (e = v());
      },
      m(t, r) {
        i && i.m(t, r), u(t, e, r), (n = !0);
      },
      p(t, [n]) {
        t[1]
          ? i
            ? (i.p(t, n), 2 & n && W(i, 1))
            : ((i = ut(t)), i.c(), W(i, 1), i.m(e.parentNode, e))
          : i &&
            (V(),
            j(i, 1, 1, () => {
              i = null;
            }),
            k());
      },
      i(t) {
        n || (W(i), (n = !0));
      },
      o(t) {
        j(i), (n = !1);
      },
      d(t) {
        i && i.d(t), t && d(e);
      },
    };
  }
  function mt(t, e, n) {
    let i, r, s;
    o(t, ht, (t) => n(0, (i = t))),
      o(t, lt, (t) => n(1, (r = t))),
      o(t, ct, (t) => n(2, (s = t)));
    const a = (t) => {
        var e = { ...i };
        (e.TransformSpace = t), ht.set(e);
      },
      l = (t) => {
        var e = { ...i };
        (e.TransformMode = t), ht.set(e);
      };
    return [
      i,
      r,
      s,
      a,
      l,
      function (e) {
        L.call(this, t, e);
      },
      function (e) {
        L.call(this, t, e);
      },
      function (e) {
        L.call(this, t, e);
      },
      function (e) {
        L.call(this, t, e);
      },
      () => a("world"),
      () => a("local"),
      () => l("translate"),
      () => l("rotate"),
      function (e) {
        t.$$.not_equal(s.EntityCoords.x, e) &&
          ((s.EntityCoords.x = e), ct.set(s));
      },
      function (e) {
        t.$$.not_equal(s.EntityCoords.y, e) &&
          ((s.EntityCoords.y = e), ct.set(s));
      },
      function (e) {
        t.$$.not_equal(s.EntityCoords.z, e) &&
          ((s.EntityCoords.z = e), ct.set(s));
      },
      function (e) {
        t.$$.not_equal(s.EntityRot.pitch, e) &&
          ((s.EntityRot.pitch = e), ct.set(s));
      },
      function (e) {
        t.$$.not_equal(s.EntityRot.roll, e) &&
          ((s.EntityRot.roll = e), ct.set(s));
      },
      function (e) {
        t.$$.not_equal(s.EntityRot.yaw, e) &&
          ((s.EntityRot.yaw = e), ct.set(s));
      },
    ];
  }
  class ft extends Q {
    constructor(t) {
      super(), J(this, t, mt, pt, a, {});
    }
  }
  function gt(t, e, n) {
    const i = t.slice();
    return (i[12] = e[n][0]), (i[3] = e[n][1]), i;
  }
  function vt(t, e, n) {
    const i = t.slice();
    return (i[15] = e[n]), (i[17] = n), i;
  }
  function yt(t) {
    let e, n, i, s, a, o, l, c, f, v;
    n = new et({
      props: { style: "margin: 1vh 0;", Title: "Zoeken", Change: t[4] },
    });
    let _ = Object.entries(t[0]),
      w = [];
    for (let e = 0; e < _.length; e += 1) w[e] = wt(gt(t, _, e));
    return {
      c() {
        (e = m("div")), q(n.$$.fragment), (i = g()), (s = m("div"));
        for (let t = 0; t < w.length; t += 1) w[t].c();
        (a = g()),
          (o = m("div")),
          (l = m("div")),
          (l.innerHTML = '<i class="fas fa-save"></i>'),
          x(s, "class", "object-list-objects svelte-lyh39j"),
          x(e, "class", "object-list-container svelte-lyh39j"),
          x(l, "data-tooltip", "Opslaan"),
          x(l, "data-position", "right"),
          x(l, "class", "tooltip object-list-button-item svelte-lyh39j"),
          x(o, "class", "object-list-buttons svelte-lyh39j");
      },
      m(r, d) {
        u(r, e, d), Y(n, e, null), h(e, i), h(e, s);
        for (let t = 0; t < w.length; t += 1) w[t].m(s, null);
        u(r, a, d),
          u(r, o, d),
          h(o, l),
          (c = !0),
          f || ((v = [y(l, "keyup", t[5]), y(l, "click", t[10])]), (f = !0));
      },
      p(t, e) {
        if (3 & e) {
          let n;
          for (_ = Object.entries(t[0]), n = 0; n < _.length; n += 1) {
            const i = gt(t, _, n);
            w[n] ? w[n].p(i, e) : ((w[n] = wt(i)), w[n].c(), w[n].m(s, null));
          }
          for (; n < w.length; n += 1) w[n].d(1);
          w.length = _.length;
        }
      },
      i(t) {
        c || (W(n.$$.fragment, t), (c = !0));
      },
      o(t) {
        j(n.$$.fragment, t), (c = !1);
      },
      d(t) {
        t && d(e), Z(n), p(w, t), t && d(a), t && d(o), (f = !1), r(v);
      },
    };
  }
  function xt(t) {
    let e,
      n = t[3],
      i = [];
    for (let e = 0; e < n.length; e += 1) i[e] = _t(vt(t, n, e));
    return {
      c() {
        e = m("div");
        for (let t = 0; t < i.length; t += 1) i[t].c();
        x(e, "class", "objects-folder-list svelte-lyh39j");
      },
      m(t, n) {
        u(t, e, n);
        for (let t = 0; t < i.length; t += 1) i[t].m(e, null);
      },
      p(t, r) {
        if (1 & r) {
          let s;
          for (n = t[3], s = 0; s < n.length; s += 1) {
            const a = vt(t, n, s);
            i[s] ? i[s].p(a, r) : ((i[s] = _t(a)), i[s].c(), i[s].m(e, null));
          }
          for (; s < i.length; s += 1) i[s].d(1);
          i.length = n.length;
        }
      },
      d(t) {
        t && d(e), p(i, t);
      },
    };
  }
  function _t(t) {
    let e,
      n,
      i,
      s,
      a,
      o,
      l,
      c,
      p = t[15] + "";
    function v() {
      return t[9](t[15]);
    }
    return {
      c() {
        (e = m("div")),
          (n = m("i")),
          (i = g()),
          (s = m("p")),
          (a = f(p)),
          (o = g()),
          x(n, "class", "fal fa-triangle svelte-lyh39j"),
          x(e, "class", "objects-folder-list-item svelte-lyh39j");
      },
      m(r, d) {
        u(r, e, d),
          h(e, n),
          h(e, i),
          h(e, s),
          h(s, a),
          h(e, o),
          l || ((c = [y(e, "keyup", t[6]), y(e, "click", v)]), (l = !0));
      },
      p(e, n) {
        (t = e), 1 & n && p !== (p = t[15] + "") && w(a, p);
      },
      d(t) {
        t && d(e), (l = !1), r(c);
      },
    };
  }
  function wt(t) {
    let e,
      n,
      i,
      s,
      a,
      o,
      l,
      c,
      p,
      v,
      _ = t[12] + "",
      b = t[1].includes(t[12]);
    function M() {
      return t[8](t[12]);
    }
    let S = b && xt(t);
    return {
      c() {
        (e = m("div")),
          (n = m("div")),
          (i = m("i")),
          (s = g()),
          (a = m("p")),
          (o = f(_)),
          (l = g()),
          S && S.c(),
          (c = g()),
          x(i, "class", "fas fa-folder svelte-lyh39j"),
          x(n, "class", "objects-folder-name svelte-lyh39j"),
          x(e, "class", "objects-folder svelte-lyh39j");
      },
      m(r, d) {
        u(r, e, d),
          h(e, n),
          h(n, i),
          h(n, s),
          h(n, a),
          h(a, o),
          h(e, l),
          S && S.m(e, null),
          h(e, c),
          p || ((v = [y(n, "keyup", t[7]), y(n, "click", M)]), (p = !0));
      },
      p(n, i) {
        (t = n),
          1 & i && _ !== (_ = t[12] + "") && w(o, _),
          3 & i && (b = t[1].includes(t[12])),
          b
            ? S
              ? S.p(t, i)
              : ((S = xt(t)), S.c(), S.m(e, c))
            : S && (S.d(1), (S = null));
      },
      d(t) {
        t && d(e), S && S.d(), (p = !1), r(v);
      },
    };
  }
  function bt(t) {
    let e,
      n,
      i = t[2] && yt(t);
    return {
      c() {
        i && i.c(), (e = v());
      },
      m(t, r) {
        i && i.m(t, r), u(t, e, r), (n = !0);
      },
      p(t, [n]) {
        t[2]
          ? i
            ? (i.p(t, n), 4 & n && W(i, 1))
            : ((i = yt(t)), i.c(), W(i, 1), i.m(e.parentNode, e))
          : i &&
            (V(),
            j(i, 1, 1, () => {
              i = null;
            }),
            k());
      },
      i(t) {
        n || (W(i), (n = !0));
      },
      o(t) {
        j(i), (n = !1);
      },
      d(t) {
        i && i.d(t), t && d(e);
      },
    };
  }
  function Mt(t, e, n) {
    let i;
    o(t, lt, (t) => n(2, (i = t)));
    let r = [],
      s = [],
      a = ["RESULT"],
      l = [];
    st("Editor/GetObjects", {}, (t, e) => {
      n(3, (r = e)), n(0, (s = e));
      var i = Object.values(e);
      for (let t = 0; t < i.length; t++) l = [...l, ...i[t]];
    });
    return [
      s,
      a,
      i,
      r,
      (t, e) => {
        if (0 != e.length) {
          var i = l.filter((t) => t.toLowerCase().includes(e.toLowerCase()));
          n(0, (s = { RESULT: [...i] }));
        } else n(0, (s = r));
      },
      function (e) {
        L.call(this, t, e);
      },
      function (e) {
        L.call(this, t, e);
      },
      function (e) {
        L.call(this, t, e);
      },
      (t) => {
        a.includes(t)
          ? n(1, (a = a.filter((e) => e != t)))
          : n(1, (a = [...a, t]));
      },
      (t) => {
        st("Editor/SpawnGhost", { Model: t });
      },
      () => {
        st("Entity/SaveObjects");
      },
    ];
  }
  class St extends Q {
    constructor(t) {
      super(), J(this, t, Mt, bt, a, {});
    }
  }
  /**
   * @license
   * Copyright 2010-2021 Three.js Authors
   * SPDX-License-Identifier: MIT
   */ const Et = 100,
    Tt = 1e3,
    Lt = 1001,
    At = 1002,
    Rt = 1003,
    Pt = 1006,
    Ct = 1008,
    It = 1009,
    Dt = 1012,
    Nt = 1014,
    zt = 1015,
    Ot = 1016,
    Bt = 1020,
    Ft = 1022,
    Ht = 1023,
    Ut = 1026,
    Gt = 1027,
    Vt = 2300,
    kt = 2301,
    Wt = 2302,
    jt = 2400,
    Xt = 2401,
    qt = 2402,
    Yt = 2500,
    Zt = 3e3,
    $t = 7680,
    Jt = 35044,
    Qt = 35048,
    Kt = "300 es";
  class te {
    addEventListener(t, e) {
      void 0 === this._listeners && (this._listeners = {});
      const n = this._listeners;
      void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
    }
    hasEventListener(t, e) {
      if (void 0 === this._listeners) return !1;
      const n = this._listeners;
      return void 0 !== n[t] && -1 !== n[t].indexOf(e);
    }
    removeEventListener(t, e) {
      if (void 0 === this._listeners) return;
      const n = this._listeners[t];
      if (void 0 !== n) {
        const t = n.indexOf(e);
        -1 !== t && n.splice(t, 1);
      }
    }
    dispatchEvent(t) {
      if (void 0 === this._listeners) return;
      const e = this._listeners[t.type];
      if (void 0 !== e) {
        t.target = this;
        const n = e.slice(0);
        for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
        t.target = null;
      }
    }
  }
  const ee = [];
  for (let t = 0; t < 256; t++) ee[t] = (t < 16 ? "0" : "") + t.toString(16);
  let ne = 1234567;
  const ie = Math.PI / 180,
    re = 180 / Math.PI;
  function se() {
    const t = (4294967295 * Math.random()) | 0,
      e = (4294967295 * Math.random()) | 0,
      n = (4294967295 * Math.random()) | 0,
      i = (4294967295 * Math.random()) | 0;
    return (
      ee[255 & t] +
      ee[(t >> 8) & 255] +
      ee[(t >> 16) & 255] +
      ee[(t >> 24) & 255] +
      "-" +
      ee[255 & e] +
      ee[(e >> 8) & 255] +
      "-" +
      ee[((e >> 16) & 15) | 64] +
      ee[(e >> 24) & 255] +
      "-" +
      ee[(63 & n) | 128] +
      ee[(n >> 8) & 255] +
      "-" +
      ee[(n >> 16) & 255] +
      ee[(n >> 24) & 255] +
      ee[255 & i] +
      ee[(i >> 8) & 255] +
      ee[(i >> 16) & 255] +
      ee[(i >> 24) & 255]
    ).toUpperCase();
  }
  function ae(t, e, n) {
    return Math.max(e, Math.min(n, t));
  }
  function oe(t, e) {
    return ((t % e) + e) % e;
  }
  function le(t, e, n) {
    return (1 - n) * t + n * e;
  }
  function ce(t) {
    return 0 == (t & (t - 1)) && 0 !== t;
  }
  function he(t) {
    return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
  }
  function ue(t) {
    return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
  }
  var de = Object.freeze({
    __proto__: null,
    DEG2RAD: ie,
    RAD2DEG: re,
    generateUUID: se,
    clamp: ae,
    euclideanModulo: oe,
    mapLinear: function (t, e, n, i, r) {
      return i + ((t - e) * (r - i)) / (n - e);
    },
    inverseLerp: function (t, e, n) {
      return t !== e ? (n - t) / (e - t) : 0;
    },
    lerp: le,
    damp: function (t, e, n, i) {
      return le(t, e, 1 - Math.exp(-n * i));
    },
    pingpong: function (t, e = 1) {
      return e - Math.abs(oe(t, 2 * e) - e);
    },
    smoothstep: function (t, e, n) {
      return t <= e
        ? 0
        : t >= n
        ? 1
        : (t = (t - e) / (n - e)) * t * (3 - 2 * t);
    },
    smootherstep: function (t, e, n) {
      return t <= e
        ? 0
        : t >= n
        ? 1
        : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10);
    },
    randInt: function (t, e) {
      return t + Math.floor(Math.random() * (e - t + 1));
    },
    randFloat: function (t, e) {
      return t + Math.random() * (e - t);
    },
    randFloatSpread: function (t) {
      return t * (0.5 - Math.random());
    },
    seededRandom: function (t) {
      return (
        void 0 !== t && (ne = t % 2147483647),
        (ne = (16807 * ne) % 2147483647),
        (ne - 1) / 2147483646
      );
    },
    degToRad: function (t) {
      return t * ie;
    },
    radToDeg: function (t) {
      return t * re;
    },
    isPowerOfTwo: ce,
    ceilPowerOfTwo: he,
    floorPowerOfTwo: ue,
    setQuaternionFromProperEuler: function (t, e, n, i, r) {
      const s = Math.cos,
        a = Math.sin,
        o = s(n / 2),
        l = a(n / 2),
        c = s((e + i) / 2),
        h = a((e + i) / 2),
        u = s((e - i) / 2),
        d = a((e - i) / 2),
        p = s((i - e) / 2),
        m = a((i - e) / 2);
      switch (r) {
        case "XYX":
          t.set(o * h, l * u, l * d, o * c);
          break;
        case "YZY":
          t.set(l * d, o * h, l * u, o * c);
          break;
        case "ZXZ":
          t.set(l * u, l * d, o * h, o * c);
          break;
        case "XZX":
          t.set(o * h, l * m, l * p, o * c);
          break;
        case "YXY":
          t.set(l * p, o * h, l * m, o * c);
          break;
        case "ZYZ":
          t.set(l * m, l * p, o * h, o * c);
          break;
        default:
          console.warn(
            "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
              r
          );
      }
    },
  });
  class pe {
    constructor(t = 0, e = 0) {
      (this.x = t), (this.y = e);
    }
    get width() {
      return this.x;
    }
    set width(t) {
      this.x = t;
    }
    get height() {
      return this.y;
    }
    set height(t) {
      this.y = t;
    }
    set(t, e) {
      return (this.x = t), (this.y = e), this;
    }
    setScalar(t) {
      return (this.x = t), (this.y = t), this;
    }
    setX(t) {
      return (this.x = t), this;
    }
    setY(t) {
      return (this.y = t), this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(t) {
      return (this.x = t.x), (this.y = t.y), this;
    }
    add(t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
          ),
          this.addVectors(t, e))
        : ((this.x += t.x), (this.y += t.y), this);
    }
    addScalar(t) {
      return (this.x += t), (this.y += t), this;
    }
    addVectors(t, e) {
      return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
    }
    addScaledVector(t, e) {
      return (this.x += t.x * e), (this.y += t.y * e), this;
    }
    sub(t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
          ),
          this.subVectors(t, e))
        : ((this.x -= t.x), (this.y -= t.y), this);
    }
    subScalar(t) {
      return (this.x -= t), (this.y -= t), this;
    }
    subVectors(t, e) {
      return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
    }
    multiply(t) {
      return (this.x *= t.x), (this.y *= t.y), this;
    }
    multiplyScalar(t) {
      return (this.x *= t), (this.y *= t), this;
    }
    divide(t) {
      return (this.x /= t.x), (this.y /= t.y), this;
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    applyMatrix3(t) {
      const e = this.x,
        n = this.y,
        i = t.elements;
      return (
        (this.x = i[0] * e + i[3] * n + i[6]),
        (this.y = i[1] * e + i[4] * n + i[7]),
        this
      );
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), this
      );
    }
    clamp(t, e) {
      return (
        (this.x = Math.max(t.x, Math.min(e.x, this.x))),
        (this.y = Math.max(t.y, Math.min(e.y, this.y))),
        this
      );
    }
    clampScalar(t, e) {
      return (
        (this.x = Math.max(t, Math.min(e, this.x))),
        (this.y = Math.max(t, Math.min(e, this.y))),
        this
      );
    }
    clampLength(t, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(t, Math.min(e, n))
      );
    }
    floor() {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    }
    ceil() {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    }
    round() {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        this
      );
    }
    negate() {
      return (this.x = -this.x), (this.y = -this.y), this;
    }
    dot(t) {
      return this.x * t.x + this.y * t.y;
    }
    cross(t) {
      return this.x * t.y - this.y * t.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
      const e = this.x - t.x,
        n = this.y - t.y;
      return e * e + n * n;
    }
    manhattanDistanceTo(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return (
        (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this
      );
    }
    lerpVectors(t, e, n) {
      return (
        (this.x = t.x + (e.x - t.x) * n), (this.y = t.y + (e.y - t.y) * n), this
      );
    }
    equals(t) {
      return t.x === this.x && t.y === this.y;
    }
    fromArray(t, e = 0) {
      return (this.x = t[e]), (this.y = t[e + 1]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this.x), (t[e + 1] = this.y), t;
    }
    fromBufferAttribute(t, e, n) {
      return (
        void 0 !== n &&
          console.warn(
            "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
          ),
        (this.x = t.getX(e)),
        (this.y = t.getY(e)),
        this
      );
    }
    rotateAround(t, e) {
      const n = Math.cos(e),
        i = Math.sin(e),
        r = this.x - t.x,
        s = this.y - t.y;
      return (
        (this.x = r * n - s * i + t.x), (this.y = r * i + s * n + t.y), this
      );
    }
    random() {
      return (this.x = Math.random()), (this.y = Math.random()), this;
    }
  }
  pe.prototype.isVector2 = !0;
  class me {
    constructor() {
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        arguments.length > 0 &&
          console.error(
            "THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
          );
    }
    set(t, e, n, i, r, s, a, o, l) {
      const c = this.elements;
      return (
        (c[0] = t),
        (c[1] = i),
        (c[2] = a),
        (c[3] = e),
        (c[4] = r),
        (c[5] = o),
        (c[6] = n),
        (c[7] = s),
        (c[8] = l),
        this
      );
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(t) {
      const e = this.elements,
        n = t.elements;
      return (
        (e[0] = n[0]),
        (e[1] = n[1]),
        (e[2] = n[2]),
        (e[3] = n[3]),
        (e[4] = n[4]),
        (e[5] = n[5]),
        (e[6] = n[6]),
        (e[7] = n[7]),
        (e[8] = n[8]),
        this
      );
    }
    extractBasis(t, e, n) {
      return (
        t.setFromMatrix3Column(this, 0),
        e.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
      );
    }
    setFromMatrix4(t) {
      const e = t.elements;
      return (
        this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
      );
    }
    multiply(t) {
      return this.multiplyMatrices(this, t);
    }
    premultiply(t) {
      return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
      const n = t.elements,
        i = e.elements,
        r = this.elements,
        s = n[0],
        a = n[3],
        o = n[6],
        l = n[1],
        c = n[4],
        h = n[7],
        u = n[2],
        d = n[5],
        p = n[8],
        m = i[0],
        f = i[3],
        g = i[6],
        v = i[1],
        y = i[4],
        x = i[7],
        _ = i[2],
        w = i[5],
        b = i[8];
      return (
        (r[0] = s * m + a * v + o * _),
        (r[3] = s * f + a * y + o * w),
        (r[6] = s * g + a * x + o * b),
        (r[1] = l * m + c * v + h * _),
        (r[4] = l * f + c * y + h * w),
        (r[7] = l * g + c * x + h * b),
        (r[2] = u * m + d * v + p * _),
        (r[5] = u * f + d * y + p * w),
        (r[8] = u * g + d * x + p * b),
        this
      );
    }
    multiplyScalar(t) {
      const e = this.elements;
      return (
        (e[0] *= t),
        (e[3] *= t),
        (e[6] *= t),
        (e[1] *= t),
        (e[4] *= t),
        (e[7] *= t),
        (e[2] *= t),
        (e[5] *= t),
        (e[8] *= t),
        this
      );
    }
    determinant() {
      const t = this.elements,
        e = t[0],
        n = t[1],
        i = t[2],
        r = t[3],
        s = t[4],
        a = t[5],
        o = t[6],
        l = t[7],
        c = t[8];
      return (
        e * s * c - e * a * l - n * r * c + n * a * o + i * r * l - i * s * o
      );
    }
    invert() {
      const t = this.elements,
        e = t[0],
        n = t[1],
        i = t[2],
        r = t[3],
        s = t[4],
        a = t[5],
        o = t[6],
        l = t[7],
        c = t[8],
        h = c * s - a * l,
        u = a * o - c * r,
        d = l * r - s * o,
        p = e * h + n * u + i * d;
      if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const m = 1 / p;
      return (
        (t[0] = h * m),
        (t[1] = (i * l - c * n) * m),
        (t[2] = (a * n - i * s) * m),
        (t[3] = u * m),
        (t[4] = (c * e - i * o) * m),
        (t[5] = (i * r - a * e) * m),
        (t[6] = d * m),
        (t[7] = (n * o - l * e) * m),
        (t[8] = (s * e - n * r) * m),
        this
      );
    }
    transpose() {
      let t;
      const e = this.elements;
      return (
        (t = e[1]),
        (e[1] = e[3]),
        (e[3] = t),
        (t = e[2]),
        (e[2] = e[6]),
        (e[6] = t),
        (t = e[5]),
        (e[5] = e[7]),
        (e[7] = t),
        this
      );
    }
    getNormalMatrix(t) {
      return this.setFromMatrix4(t).invert().transpose();
    }
    transposeIntoArray(t) {
      const e = this.elements;
      return (
        (t[0] = e[0]),
        (t[1] = e[3]),
        (t[2] = e[6]),
        (t[3] = e[1]),
        (t[4] = e[4]),
        (t[5] = e[7]),
        (t[6] = e[2]),
        (t[7] = e[5]),
        (t[8] = e[8]),
        this
      );
    }
    setUvTransform(t, e, n, i, r, s, a) {
      const o = Math.cos(r),
        l = Math.sin(r);
      return (
        this.set(
          n * o,
          n * l,
          -n * (o * s + l * a) + s + t,
          -i * l,
          i * o,
          -i * (-l * s + o * a) + a + e,
          0,
          0,
          1
        ),
        this
      );
    }
    scale(t, e) {
      const n = this.elements;
      return (
        (n[0] *= t),
        (n[3] *= t),
        (n[6] *= t),
        (n[1] *= e),
        (n[4] *= e),
        (n[7] *= e),
        this
      );
    }
    rotate(t) {
      const e = Math.cos(t),
        n = Math.sin(t),
        i = this.elements,
        r = i[0],
        s = i[3],
        a = i[6],
        o = i[1],
        l = i[4],
        c = i[7];
      return (
        (i[0] = e * r + n * o),
        (i[3] = e * s + n * l),
        (i[6] = e * a + n * c),
        (i[1] = -n * r + e * o),
        (i[4] = -n * s + e * l),
        (i[7] = -n * a + e * c),
        this
      );
    }
    translate(t, e) {
      const n = this.elements;
      return (
        (n[0] += t * n[2]),
        (n[3] += t * n[5]),
        (n[6] += t * n[8]),
        (n[1] += e * n[2]),
        (n[4] += e * n[5]),
        (n[7] += e * n[8]),
        this
      );
    }
    equals(t) {
      const e = this.elements,
        n = t.elements;
      for (let t = 0; t < 9; t++) if (e[t] !== n[t]) return !1;
      return !0;
    }
    fromArray(t, e = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
      return this;
    }
    toArray(t = [], e = 0) {
      const n = this.elements;
      return (
        (t[e] = n[0]),
        (t[e + 1] = n[1]),
        (t[e + 2] = n[2]),
        (t[e + 3] = n[3]),
        (t[e + 4] = n[4]),
        (t[e + 5] = n[5]),
        (t[e + 6] = n[6]),
        (t[e + 7] = n[7]),
        (t[e + 8] = n[8]),
        t
      );
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  let fe;
  me.prototype.isMatrix3 = !0;
  class ge {
    static getDataURL(t) {
      if (/^data:/i.test(t.src)) return t.src;
      if ("undefined" == typeof HTMLCanvasElement) return t.src;
      let e;
      if (t instanceof HTMLCanvasElement) e = t;
      else {
        void 0 === fe &&
          (fe = document.createElementNS(
            "http://www.w3.org/1999/xhtml",
            "canvas"
          )),
          (fe.width = t.width),
          (fe.height = t.height);
        const n = fe.getContext("2d");
        t instanceof ImageData
          ? n.putImageData(t, 0, 0)
          : n.drawImage(t, 0, 0, t.width, t.height),
          (e = fe);
      }
      return e.width > 2048 || e.height > 2048
        ? (console.warn(
            "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
            t
          ),
          e.toDataURL("image/jpeg", 0.6))
        : e.toDataURL("image/png");
    }
  }
  let ve = 0;
  class ye extends te {
    constructor(
      t = ye.DEFAULT_IMAGE,
      e = ye.DEFAULT_MAPPING,
      n = 1001,
      i = 1001,
      r = 1006,
      s = 1008,
      a = 1023,
      o = 1009,
      l = 1,
      c = 3e3
    ) {
      super(),
        Object.defineProperty(this, "id", { value: ve++ }),
        (this.uuid = se()),
        (this.name = ""),
        (this.image = t),
        (this.mipmaps = []),
        (this.mapping = e),
        (this.wrapS = n),
        (this.wrapT = i),
        (this.magFilter = r),
        (this.minFilter = s),
        (this.anisotropy = l),
        (this.format = a),
        (this.internalFormat = null),
        (this.type = o),
        (this.offset = new pe(0, 0)),
        (this.repeat = new pe(1, 1)),
        (this.center = new pe(0, 0)),
        (this.rotation = 0),
        (this.matrixAutoUpdate = !0),
        (this.matrix = new me()),
        (this.generateMipmaps = !0),
        (this.premultiplyAlpha = !1),
        (this.flipY = !0),
        (this.unpackAlignment = 4),
        (this.encoding = c),
        (this.version = 0),
        (this.onUpdate = null);
    }
    updateMatrix() {
      this.matrix.setUvTransform(
        this.offset.x,
        this.offset.y,
        this.repeat.x,
        this.repeat.y,
        this.rotation,
        this.center.x,
        this.center.y
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return (
        (this.name = t.name),
        (this.image = t.image),
        (this.mipmaps = t.mipmaps.slice(0)),
        (this.mapping = t.mapping),
        (this.wrapS = t.wrapS),
        (this.wrapT = t.wrapT),
        (this.magFilter = t.magFilter),
        (this.minFilter = t.minFilter),
        (this.anisotropy = t.anisotropy),
        (this.format = t.format),
        (this.internalFormat = t.internalFormat),
        (this.type = t.type),
        this.offset.copy(t.offset),
        this.repeat.copy(t.repeat),
        this.center.copy(t.center),
        (this.rotation = t.rotation),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        this.matrix.copy(t.matrix),
        (this.generateMipmaps = t.generateMipmaps),
        (this.premultiplyAlpha = t.premultiplyAlpha),
        (this.flipY = t.flipY),
        (this.unpackAlignment = t.unpackAlignment),
        (this.encoding = t.encoding),
        this
      );
    }
    toJSON(t) {
      const e = void 0 === t || "string" == typeof t;
      if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
      const n = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON",
        },
        uuid: this.uuid,
        name: this.name,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        type: this.type,
        encoding: this.encoding,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment,
      };
      if (void 0 !== this.image) {
        const i = this.image;
        if (
          (void 0 === i.uuid && (i.uuid = se()),
          !e && void 0 === t.images[i.uuid])
        ) {
          let e;
          if (Array.isArray(i)) {
            e = [];
            for (let t = 0, n = i.length; t < n; t++)
              i[t].isDataTexture ? e.push(xe(i[t].image)) : e.push(xe(i[t]));
          } else e = xe(i);
          t.images[i.uuid] = { uuid: i.uuid, url: e };
        }
        n.image = i.uuid;
      }
      return e || (t.textures[this.uuid] = n), n;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(t) {
      if (300 !== this.mapping) return t;
      if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
        switch (this.wrapS) {
          case Tt:
            t.x = t.x - Math.floor(t.x);
            break;
          case Lt:
            t.x = t.x < 0 ? 0 : 1;
            break;
          case At:
            1 === Math.abs(Math.floor(t.x) % 2)
              ? (t.x = Math.ceil(t.x) - t.x)
              : (t.x = t.x - Math.floor(t.x));
        }
      if (t.y < 0 || t.y > 1)
        switch (this.wrapT) {
          case Tt:
            t.y = t.y - Math.floor(t.y);
            break;
          case Lt:
            t.y = t.y < 0 ? 0 : 1;
            break;
          case At:
            1 === Math.abs(Math.floor(t.y) % 2)
              ? (t.y = Math.ceil(t.y) - t.y)
              : (t.y = t.y - Math.floor(t.y));
        }
      return this.flipY && (t.y = 1 - t.y), t;
    }
    set needsUpdate(t) {
      !0 === t && this.version++;
    }
  }
  function xe(t) {
    return ("undefined" != typeof HTMLImageElement &&
      t instanceof HTMLImageElement) ||
      ("undefined" != typeof HTMLCanvasElement &&
        t instanceof HTMLCanvasElement) ||
      ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
      ? ge.getDataURL(t)
      : t.data
      ? {
          data: Array.prototype.slice.call(t.data),
          width: t.width,
          height: t.height,
          type: t.data.constructor.name,
        }
      : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  (ye.DEFAULT_IMAGE = void 0),
    (ye.DEFAULT_MAPPING = 300),
    (ye.prototype.isTexture = !0);
  class _e {
    constructor(t = 0, e = 0, n = 0, i = 1) {
      (this.x = t), (this.y = e), (this.z = n), (this.w = i);
    }
    get width() {
      return this.z;
    }
    set width(t) {
      this.z = t;
    }
    get height() {
      return this.w;
    }
    set height(t) {
      this.w = t;
    }
    set(t, e, n, i) {
      return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
    }
    setScalar(t) {
      return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
    }
    setX(t) {
      return (this.x = t), this;
    }
    setY(t) {
      return (this.y = t), this;
    }
    setZ(t) {
      return (this.z = t), this;
    }
    setW(t) {
      return (this.w = t), this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        case 3:
          this.w = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(t) {
      return (
        (this.x = t.x),
        (this.y = t.y),
        (this.z = t.z),
        (this.w = void 0 !== t.w ? t.w : 1),
        this
      );
    }
    add(t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
          ),
          this.addVectors(t, e))
        : ((this.x += t.x),
          (this.y += t.y),
          (this.z += t.z),
          (this.w += t.w),
          this);
    }
    addScalar(t) {
      return (this.x += t), (this.y += t), (this.z += t), (this.w += t), this;
    }
    addVectors(t, e) {
      return (
        (this.x = t.x + e.x),
        (this.y = t.y + e.y),
        (this.z = t.z + e.z),
        (this.w = t.w + e.w),
        this
      );
    }
    addScaledVector(t, e) {
      return (
        (this.x += t.x * e),
        (this.y += t.y * e),
        (this.z += t.z * e),
        (this.w += t.w * e),
        this
      );
    }
    sub(t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
          ),
          this.subVectors(t, e))
        : ((this.x -= t.x),
          (this.y -= t.y),
          (this.z -= t.z),
          (this.w -= t.w),
          this);
    }
    subScalar(t) {
      return (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this;
    }
    subVectors(t, e) {
      return (
        (this.x = t.x - e.x),
        (this.y = t.y - e.y),
        (this.z = t.z - e.z),
        (this.w = t.w - e.w),
        this
      );
    }
    multiply(t) {
      return (
        (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this
      );
    }
    multiplyScalar(t) {
      return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this;
    }
    applyMatrix4(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = this.w,
        s = t.elements;
      return (
        (this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r),
        (this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r),
        (this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r),
        (this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r),
        this
      );
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    setAxisAngleFromQuaternion(t) {
      this.w = 2 * Math.acos(t.w);
      const e = Math.sqrt(1 - t.w * t.w);
      return (
        e < 1e-4
          ? ((this.x = 1), (this.y = 0), (this.z = 0))
          : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
        this
      );
    }
    setAxisAngleFromRotationMatrix(t) {
      let e, n, i, r;
      const s = 0.01,
        a = 0.1,
        o = t.elements,
        l = o[0],
        c = o[4],
        h = o[8],
        u = o[1],
        d = o[5],
        p = o[9],
        m = o[2],
        f = o[6],
        g = o[10];
      if (Math.abs(c - u) < s && Math.abs(h - m) < s && Math.abs(p - f) < s) {
        if (
          Math.abs(c + u) < a &&
          Math.abs(h + m) < a &&
          Math.abs(p + f) < a &&
          Math.abs(l + d + g - 3) < a
        )
          return this.set(1, 0, 0, 0), this;
        e = Math.PI;
        const t = (l + 1) / 2,
          o = (d + 1) / 2,
          v = (g + 1) / 2,
          y = (c + u) / 4,
          x = (h + m) / 4,
          _ = (p + f) / 4;
        return (
          t > o && t > v
            ? t < s
              ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
              : ((n = Math.sqrt(t)), (i = y / n), (r = x / n))
            : o > v
            ? o < s
              ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
              : ((i = Math.sqrt(o)), (n = y / i), (r = _ / i))
            : v < s
            ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
            : ((r = Math.sqrt(v)), (n = x / r), (i = _ / r)),
          this.set(n, i, r, e),
          this
        );
      }
      let v = Math.sqrt(
        (f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c)
      );
      return (
        Math.abs(v) < 0.001 && (v = 1),
        (this.x = (f - p) / v),
        (this.y = (h - m) / v),
        (this.z = (u - c) / v),
        (this.w = Math.acos((l + d + g - 1) / 2)),
        this
      );
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)),
        (this.y = Math.min(this.y, t.y)),
        (this.z = Math.min(this.z, t.z)),
        (this.w = Math.min(this.w, t.w)),
        this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)),
        (this.y = Math.max(this.y, t.y)),
        (this.z = Math.max(this.z, t.z)),
        (this.w = Math.max(this.w, t.w)),
        this
      );
    }
    clamp(t, e) {
      return (
        (this.x = Math.max(t.x, Math.min(e.x, this.x))),
        (this.y = Math.max(t.y, Math.min(e.y, this.y))),
        (this.z = Math.max(t.z, Math.min(e.z, this.z))),
        (this.w = Math.max(t.w, Math.min(e.w, this.w))),
        this
      );
    }
    clampScalar(t, e) {
      return (
        (this.x = Math.max(t, Math.min(e, this.x))),
        (this.y = Math.max(t, Math.min(e, this.y))),
        (this.z = Math.max(t, Math.min(e, this.z))),
        (this.w = Math.max(t, Math.min(e, this.w))),
        this
      );
    }
    clampLength(t, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(t, Math.min(e, n))
      );
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        (this.w = Math.floor(this.w)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        (this.w = Math.ceil(this.w)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        (this.w = Math.round(this.w)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
        (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
        this
      );
    }
    negate() {
      return (
        (this.x = -this.x),
        (this.y = -this.y),
        (this.z = -this.z),
        (this.w = -this.w),
        this
      );
    }
    dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
    }
    lengthSq() {
      return (
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    length() {
      return Math.sqrt(
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    manhattanLength() {
      return (
        Math.abs(this.x) +
        Math.abs(this.y) +
        Math.abs(this.z) +
        Math.abs(this.w)
      );
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return (
        (this.x += (t.x - this.x) * e),
        (this.y += (t.y - this.y) * e),
        (this.z += (t.z - this.z) * e),
        (this.w += (t.w - this.w) * e),
        this
      );
    }
    lerpVectors(t, e, n) {
      return (
        (this.x = t.x + (e.x - t.x) * n),
        (this.y = t.y + (e.y - t.y) * n),
        (this.z = t.z + (e.z - t.z) * n),
        (this.w = t.w + (e.w - t.w) * n),
        this
      );
    }
    equals(t) {
      return (
        t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
      );
    }
    fromArray(t, e = 0) {
      return (
        (this.x = t[e]),
        (this.y = t[e + 1]),
        (this.z = t[e + 2]),
        (this.w = t[e + 3]),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this.x),
        (t[e + 1] = this.y),
        (t[e + 2] = this.z),
        (t[e + 3] = this.w),
        t
      );
    }
    fromBufferAttribute(t, e, n) {
      return (
        void 0 !== n &&
          console.warn(
            "THREE.Vector4: offset has been removed from .fromBufferAttribute()."
          ),
        (this.x = t.getX(e)),
        (this.y = t.getY(e)),
        (this.z = t.getZ(e)),
        (this.w = t.getW(e)),
        this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        (this.w = Math.random()),
        this
      );
    }
  }
  _e.prototype.isVector4 = !0;
  class we extends te {
    constructor(t, e, n) {
      super(),
        (this.width = t),
        (this.height = e),
        (this.depth = 1),
        (this.scissor = new _e(0, 0, t, e)),
        (this.scissorTest = !1),
        (this.viewport = new _e(0, 0, t, e)),
        (n = n || {}),
        (this.texture = new ye(
          void 0,
          n.mapping,
          n.wrapS,
          n.wrapT,
          n.magFilter,
          n.minFilter,
          n.format,
          n.type,
          n.anisotropy,
          n.encoding
        )),
        (this.texture.image = {}),
        (this.texture.image.width = t),
        (this.texture.image.height = e),
        (this.texture.image.depth = 1),
        (this.texture.generateMipmaps =
          void 0 !== n.generateMipmaps && n.generateMipmaps),
        (this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : Pt),
        (this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer),
        (this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer),
        (this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null);
    }
    setTexture(t) {
      (t.image = { width: this.width, height: this.height, depth: this.depth }),
        (this.texture = t);
    }
    setSize(t, e, n = 1) {
      (this.width === t && this.height === e && this.depth === n) ||
        ((this.width = t),
        (this.height = e),
        (this.depth = n),
        (this.texture.image.width = t),
        (this.texture.image.height = e),
        (this.texture.image.depth = n),
        this.dispose()),
        this.viewport.set(0, 0, t, e),
        this.scissor.set(0, 0, t, e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return (
        (this.width = t.width),
        (this.height = t.height),
        (this.depth = t.depth),
        this.viewport.copy(t.viewport),
        (this.texture = t.texture.clone()),
        (this.depthBuffer = t.depthBuffer),
        (this.stencilBuffer = t.stencilBuffer),
        (this.depthTexture = t.depthTexture),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  we.prototype.isWebGLRenderTarget = !0;
  (class extends we {
    constructor(t, e, n) {
      super(t, e, n), (this.samples = 4);
    }
    copy(t) {
      return super.copy.call(this, t), (this.samples = t.samples), this;
    }
  }).prototype.isWebGLMultisampleRenderTarget = !0;
  class be {
    constructor(t = 0, e = 0, n = 0, i = 1) {
      (this._x = t), (this._y = e), (this._z = n), (this._w = i);
    }
    static slerp(t, e, n, i) {
      return (
        console.warn(
          "THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."
        ),
        n.slerpQuaternions(t, e, i)
      );
    }
    static slerpFlat(t, e, n, i, r, s, a) {
      let o = n[i + 0],
        l = n[i + 1],
        c = n[i + 2],
        h = n[i + 3];
      const u = r[s + 0],
        d = r[s + 1],
        p = r[s + 2],
        m = r[s + 3];
      if (0 === a)
        return (
          (t[e + 0] = o), (t[e + 1] = l), (t[e + 2] = c), void (t[e + 3] = h)
        );
      if (1 === a)
        return (
          (t[e + 0] = u), (t[e + 1] = d), (t[e + 2] = p), void (t[e + 3] = m)
        );
      if (h !== m || o !== u || l !== d || c !== p) {
        let t = 1 - a;
        const e = o * u + l * d + c * p + h * m,
          n = e >= 0 ? 1 : -1,
          i = 1 - e * e;
        if (i > Number.EPSILON) {
          const r = Math.sqrt(i),
            s = Math.atan2(r, e * n);
          (t = Math.sin(t * s) / r), (a = Math.sin(a * s) / r);
        }
        const r = a * n;
        if (
          ((o = o * t + u * r),
          (l = l * t + d * r),
          (c = c * t + p * r),
          (h = h * t + m * r),
          t === 1 - a)
        ) {
          const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
          (o *= t), (l *= t), (c *= t), (h *= t);
        }
      }
      (t[e] = o), (t[e + 1] = l), (t[e + 2] = c), (t[e + 3] = h);
    }
    static multiplyQuaternionsFlat(t, e, n, i, r, s) {
      const a = n[i],
        o = n[i + 1],
        l = n[i + 2],
        c = n[i + 3],
        h = r[s],
        u = r[s + 1],
        d = r[s + 2],
        p = r[s + 3];
      return (
        (t[e] = a * p + c * h + o * d - l * u),
        (t[e + 1] = o * p + c * u + l * h - a * d),
        (t[e + 2] = l * p + c * d + a * u - o * h),
        (t[e + 3] = c * p - a * h - o * u - l * d),
        t
      );
    }
    get x() {
      return this._x;
    }
    set x(t) {
      (this._x = t), this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t) {
      (this._y = t), this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t) {
      (this._z = t), this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(t) {
      (this._w = t), this._onChangeCallback();
    }
    set(t, e, n, i) {
      return (
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._w = i),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(t) {
      return (
        (this._x = t.x),
        (this._y = t.y),
        (this._z = t.z),
        (this._w = t.w),
        this._onChangeCallback(),
        this
      );
    }
    setFromEuler(t, e) {
      if (!t || !t.isEuler)
        throw new Error(
          "THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
        );
      const n = t._x,
        i = t._y,
        r = t._z,
        s = t._order,
        a = Math.cos,
        o = Math.sin,
        l = a(n / 2),
        c = a(i / 2),
        h = a(r / 2),
        u = o(n / 2),
        d = o(i / 2),
        p = o(r / 2);
      switch (s) {
        case "XYZ":
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case "YXZ":
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        case "ZXY":
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case "ZYX":
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        case "YZX":
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case "XZY":
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        default:
          console.warn(
            "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
              s
          );
      }
      return !1 !== e && this._onChangeCallback(), this;
    }
    setFromAxisAngle(t, e) {
      const n = e / 2,
        i = Math.sin(n);
      return (
        (this._x = t.x * i),
        (this._y = t.y * i),
        (this._z = t.z * i),
        (this._w = Math.cos(n)),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(t) {
      const e = t.elements,
        n = e[0],
        i = e[4],
        r = e[8],
        s = e[1],
        a = e[5],
        o = e[9],
        l = e[2],
        c = e[6],
        h = e[10],
        u = n + a + h;
      if (u > 0) {
        const t = 0.5 / Math.sqrt(u + 1);
        (this._w = 0.25 / t),
          (this._x = (c - o) * t),
          (this._y = (r - l) * t),
          (this._z = (s - i) * t);
      } else if (n > a && n > h) {
        const t = 2 * Math.sqrt(1 + n - a - h);
        (this._w = (c - o) / t),
          (this._x = 0.25 * t),
          (this._y = (i + s) / t),
          (this._z = (r + l) / t);
      } else if (a > h) {
        const t = 2 * Math.sqrt(1 + a - n - h);
        (this._w = (r - l) / t),
          (this._x = (i + s) / t),
          (this._y = 0.25 * t),
          (this._z = (o + c) / t);
      } else {
        const t = 2 * Math.sqrt(1 + h - n - a);
        (this._w = (s - i) / t),
          (this._x = (r + l) / t),
          (this._y = (o + c) / t),
          (this._z = 0.25 * t);
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(t, e) {
      let n = t.dot(e) + 1;
      return (
        n < Number.EPSILON
          ? ((n = 0),
            Math.abs(t.x) > Math.abs(t.z)
              ? ((this._x = -t.y),
                (this._y = t.x),
                (this._z = 0),
                (this._w = n))
              : ((this._x = 0),
                (this._y = -t.z),
                (this._z = t.y),
                (this._w = n)))
          : ((this._x = t.y * e.z - t.z * e.y),
            (this._y = t.z * e.x - t.x * e.z),
            (this._z = t.x * e.y - t.y * e.x),
            (this._w = n)),
        this.normalize()
      );
    }
    angleTo(t) {
      return 2 * Math.acos(Math.abs(ae(this.dot(t), -1, 1)));
    }
    rotateTowards(t, e) {
      const n = this.angleTo(t);
      if (0 === n) return this;
      const i = Math.min(1, e / n);
      return this.slerp(t, i), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return (
        (this._x *= -1),
        (this._y *= -1),
        (this._z *= -1),
        this._onChangeCallback(),
        this
      );
    }
    dot(t) {
      return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
    }
    lengthSq() {
      return (
        this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
      );
    }
    length() {
      return Math.sqrt(
        this._x * this._x +
          this._y * this._y +
          this._z * this._z +
          this._w * this._w
      );
    }
    normalize() {
      let t = this.length();
      return (
        0 === t
          ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
          : ((t = 1 / t),
            (this._x = this._x * t),
            (this._y = this._y * t),
            (this._z = this._z * t),
            (this._w = this._w * t)),
        this._onChangeCallback(),
        this
      );
    }
    multiply(t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
          ),
          this.multiplyQuaternions(t, e))
        : this.multiplyQuaternions(this, t);
    }
    premultiply(t) {
      return this.multiplyQuaternions(t, this);
    }
    multiplyQuaternions(t, e) {
      const n = t._x,
        i = t._y,
        r = t._z,
        s = t._w,
        a = e._x,
        o = e._y,
        l = e._z,
        c = e._w;
      return (
        (this._x = n * c + s * a + i * l - r * o),
        (this._y = i * c + s * o + r * a - n * l),
        (this._z = r * c + s * l + n * o - i * a),
        (this._w = s * c - n * a - i * o - r * l),
        this._onChangeCallback(),
        this
      );
    }
    slerp(t, e) {
      if (0 === e) return this;
      if (1 === e) return this.copy(t);
      const n = this._x,
        i = this._y,
        r = this._z,
        s = this._w;
      let a = s * t._w + n * t._x + i * t._y + r * t._z;
      if (
        (a < 0
          ? ((this._w = -t._w),
            (this._x = -t._x),
            (this._y = -t._y),
            (this._z = -t._z),
            (a = -a))
          : this.copy(t),
        a >= 1)
      )
        return (this._w = s), (this._x = n), (this._y = i), (this._z = r), this;
      const o = 1 - a * a;
      if (o <= Number.EPSILON) {
        const t = 1 - e;
        return (
          (this._w = t * s + e * this._w),
          (this._x = t * n + e * this._x),
          (this._y = t * i + e * this._y),
          (this._z = t * r + e * this._z),
          this.normalize(),
          this._onChangeCallback(),
          this
        );
      }
      const l = Math.sqrt(o),
        c = Math.atan2(l, a),
        h = Math.sin((1 - e) * c) / l,
        u = Math.sin(e * c) / l;
      return (
        (this._w = s * h + this._w * u),
        (this._x = n * h + this._x * u),
        (this._y = i * h + this._y * u),
        (this._z = r * h + this._z * u),
        this._onChangeCallback(),
        this
      );
    }
    slerpQuaternions(t, e, n) {
      this.copy(t).slerp(e, n);
    }
    equals(t) {
      return (
        t._x === this._x &&
        t._y === this._y &&
        t._z === this._z &&
        t._w === this._w
      );
    }
    fromArray(t, e = 0) {
      return (
        (this._x = t[e]),
        (this._y = t[e + 1]),
        (this._z = t[e + 2]),
        (this._w = t[e + 3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this._x),
        (t[e + 1] = this._y),
        (t[e + 2] = this._z),
        (t[e + 3] = this._w),
        t
      );
    }
    fromBufferAttribute(t, e) {
      return (
        (this._x = t.getX(e)),
        (this._y = t.getY(e)),
        (this._z = t.getZ(e)),
        (this._w = t.getW(e)),
        this
      );
    }
    _onChange(t) {
      return (this._onChangeCallback = t), this;
    }
    _onChangeCallback() {}
  }
  be.prototype.isQuaternion = !0;
  class Me {
    constructor(t = 0, e = 0, n = 0) {
      (this.x = t), (this.y = e), (this.z = n);
    }
    set(t, e, n) {
      return (
        void 0 === n && (n = this.z),
        (this.x = t),
        (this.y = e),
        (this.z = n),
        this
      );
    }
    setScalar(t) {
      return (this.x = t), (this.y = t), (this.z = t), this;
    }
    setX(t) {
      return (this.x = t), this;
    }
    setY(t) {
      return (this.y = t), this;
    }
    setZ(t) {
      return (this.z = t), this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(t) {
      return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
    }
    add(t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
          ),
          this.addVectors(t, e))
        : ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
    }
    addScalar(t) {
      return (this.x += t), (this.y += t), (this.z += t), this;
    }
    addVectors(t, e) {
      return (
        (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this
      );
    }
    addScaledVector(t, e) {
      return (
        (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this
      );
    }
    sub(t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
          ),
          this.subVectors(t, e))
        : ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
    }
    subScalar(t) {
      return (this.x -= t), (this.y -= t), (this.z -= t), this;
    }
    subVectors(t, e) {
      return (
        (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this
      );
    }
    multiply(t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
          ),
          this.multiplyVectors(t, e))
        : ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
    }
    multiplyScalar(t) {
      return (this.x *= t), (this.y *= t), (this.z *= t), this;
    }
    multiplyVectors(t, e) {
      return (
        (this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this
      );
    }
    applyEuler(t) {
      return (
        (t && t.isEuler) ||
          console.error(
            "THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
          ),
        this.applyQuaternion(Ee.setFromEuler(t))
      );
    }
    applyAxisAngle(t, e) {
      return this.applyQuaternion(Ee.setFromAxisAngle(t, e));
    }
    applyMatrix3(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.elements;
      return (
        (this.x = r[0] * e + r[3] * n + r[6] * i),
        (this.y = r[1] * e + r[4] * n + r[7] * i),
        (this.z = r[2] * e + r[5] * n + r[8] * i),
        this
      );
    }
    applyNormalMatrix(t) {
      return this.applyMatrix3(t).normalize();
    }
    applyMatrix4(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.elements,
        s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
      return (
        (this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s),
        (this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s),
        (this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s),
        this
      );
    }
    applyQuaternion(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.x,
        s = t.y,
        a = t.z,
        o = t.w,
        l = o * e + s * i - a * n,
        c = o * n + a * e - r * i,
        h = o * i + r * n - s * e,
        u = -r * e - s * n - a * i;
      return (
        (this.x = l * o + u * -r + c * -a - h * -s),
        (this.y = c * o + u * -s + h * -r - l * -a),
        (this.z = h * o + u * -a + l * -s - c * -r),
        this
      );
    }
    project(t) {
      return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
        t.projectionMatrix
      );
    }
    unproject(t) {
      return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
        t.matrixWorld
      );
    }
    transformDirection(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.elements;
      return (
        (this.x = r[0] * e + r[4] * n + r[8] * i),
        (this.y = r[1] * e + r[5] * n + r[9] * i),
        (this.z = r[2] * e + r[6] * n + r[10] * i),
        this.normalize()
      );
    }
    divide(t) {
      return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)),
        (this.y = Math.min(this.y, t.y)),
        (this.z = Math.min(this.z, t.z)),
        this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)),
        (this.y = Math.max(this.y, t.y)),
        (this.z = Math.max(this.z, t.z)),
        this
      );
    }
    clamp(t, e) {
      return (
        (this.x = Math.max(t.x, Math.min(e.x, this.x))),
        (this.y = Math.max(t.y, Math.min(e.y, this.y))),
        (this.z = Math.max(t.z, Math.min(e.z, this.z))),
        this
      );
    }
    clampScalar(t, e) {
      return (
        (this.x = Math.max(t, Math.min(e, this.x))),
        (this.y = Math.max(t, Math.min(e, this.y))),
        (this.z = Math.max(t, Math.min(e, this.z))),
        this
      );
    }
    clampLength(t, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(t, Math.min(e, n))
      );
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
        this
      );
    }
    negate() {
      return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
    }
    dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return (
        (this.x += (t.x - this.x) * e),
        (this.y += (t.y - this.y) * e),
        (this.z += (t.z - this.z) * e),
        this
      );
    }
    lerpVectors(t, e, n) {
      return (
        (this.x = t.x + (e.x - t.x) * n),
        (this.y = t.y + (e.y - t.y) * n),
        (this.z = t.z + (e.z - t.z) * n),
        this
      );
    }
    cross(t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
          ),
          this.crossVectors(t, e))
        : this.crossVectors(this, t);
    }
    crossVectors(t, e) {
      const n = t.x,
        i = t.y,
        r = t.z,
        s = e.x,
        a = e.y,
        o = e.z;
      return (
        (this.x = i * o - r * a),
        (this.y = r * s - n * o),
        (this.z = n * a - i * s),
        this
      );
    }
    projectOnVector(t) {
      const e = t.lengthSq();
      if (0 === e) return this.set(0, 0, 0);
      const n = t.dot(this) / e;
      return this.copy(t).multiplyScalar(n);
    }
    projectOnPlane(t) {
      return Se.copy(this).projectOnVector(t), this.sub(Se);
    }
    reflect(t) {
      return this.sub(Se.copy(t).multiplyScalar(2 * this.dot(t)));
    }
    angleTo(t) {
      const e = Math.sqrt(this.lengthSq() * t.lengthSq());
      if (0 === e) return Math.PI / 2;
      const n = this.dot(t) / e;
      return Math.acos(ae(n, -1, 1));
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
      const e = this.x - t.x,
        n = this.y - t.y,
        i = this.z - t.z;
      return e * e + n * n + i * i;
    }
    manhattanDistanceTo(t) {
      return (
        Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
      );
    }
    setFromSpherical(t) {
      return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
    }
    setFromSphericalCoords(t, e, n) {
      const i = Math.sin(e) * t;
      return (
        (this.x = i * Math.sin(n)),
        (this.y = Math.cos(e) * t),
        (this.z = i * Math.cos(n)),
        this
      );
    }
    setFromCylindrical(t) {
      return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
    }
    setFromCylindricalCoords(t, e, n) {
      return (
        (this.x = t * Math.sin(e)),
        (this.y = n),
        (this.z = t * Math.cos(e)),
        this
      );
    }
    setFromMatrixPosition(t) {
      const e = t.elements;
      return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
    }
    setFromMatrixScale(t) {
      const e = this.setFromMatrixColumn(t, 0).length(),
        n = this.setFromMatrixColumn(t, 1).length(),
        i = this.setFromMatrixColumn(t, 2).length();
      return (this.x = e), (this.y = n), (this.z = i), this;
    }
    setFromMatrixColumn(t, e) {
      return this.fromArray(t.elements, 4 * e);
    }
    setFromMatrix3Column(t, e) {
      return this.fromArray(t.elements, 3 * e);
    }
    equals(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z;
    }
    fromArray(t, e = 0) {
      return (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t;
    }
    fromBufferAttribute(t, e, n) {
      return (
        void 0 !== n &&
          console.warn(
            "THREE.Vector3: offset has been removed from .fromBufferAttribute()."
          ),
        (this.x = t.getX(e)),
        (this.y = t.getY(e)),
        (this.z = t.getZ(e)),
        this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        this
      );
    }
  }
  Me.prototype.isVector3 = !0;
  const Se = new Me(),
    Ee = new be();
  class Te {
    constructor(
      t = new Me(1 / 0, 1 / 0, 1 / 0),
      e = new Me(-1 / 0, -1 / 0, -1 / 0)
    ) {
      (this.min = t), (this.max = e);
    }
    set(t, e) {
      return this.min.copy(t), this.max.copy(e), this;
    }
    setFromArray(t) {
      let e = 1 / 0,
        n = 1 / 0,
        i = 1 / 0,
        r = -1 / 0,
        s = -1 / 0,
        a = -1 / 0;
      for (let o = 0, l = t.length; o < l; o += 3) {
        const l = t[o],
          c = t[o + 1],
          h = t[o + 2];
        l < e && (e = l),
          c < n && (n = c),
          h < i && (i = h),
          l > r && (r = l),
          c > s && (s = c),
          h > a && (a = h);
      }
      return this.min.set(e, n, i), this.max.set(r, s, a), this;
    }
    setFromBufferAttribute(t) {
      let e = 1 / 0,
        n = 1 / 0,
        i = 1 / 0,
        r = -1 / 0,
        s = -1 / 0,
        a = -1 / 0;
      for (let o = 0, l = t.count; o < l; o++) {
        const l = t.getX(o),
          c = t.getY(o),
          h = t.getZ(o);
        l < e && (e = l),
          c < n && (n = c),
          h < i && (i = h),
          l > r && (r = l),
          c > s && (s = c),
          h > a && (a = h);
      }
      return this.min.set(e, n, i), this.max.set(r, s, a), this;
    }
    setFromPoints(t) {
      this.makeEmpty();
      for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
      return this;
    }
    setFromCenterAndSize(t, e) {
      const n = Ae.copy(e).multiplyScalar(0.5);
      return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
    }
    setFromObject(t) {
      return this.makeEmpty(), this.expandByObject(t);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return this.min.copy(t.min), this.max.copy(t.max), this;
    }
    makeEmpty() {
      return (
        (this.min.x = this.min.y = this.min.z = 1 / 0),
        (this.max.x = this.max.y = this.max.z = -1 / 0),
        this
      );
    }
    isEmpty() {
      return (
        this.max.x < this.min.x ||
        this.max.y < this.min.y ||
        this.max.z < this.min.z
      );
    }
    getCenter(t) {
      return (
        void 0 === t &&
          (console.warn("THREE.Box3: .getCenter() target is now required"),
          (t = new Me())),
        this.isEmpty()
          ? t.set(0, 0, 0)
          : t.addVectors(this.min, this.max).multiplyScalar(0.5)
      );
    }
    getSize(t) {
      return (
        void 0 === t &&
          (console.warn("THREE.Box3: .getSize() target is now required"),
          (t = new Me())),
        this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
      );
    }
    expandByPoint(t) {
      return this.min.min(t), this.max.max(t), this;
    }
    expandByVector(t) {
      return this.min.sub(t), this.max.add(t), this;
    }
    expandByScalar(t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this;
    }
    expandByObject(t) {
      t.updateWorldMatrix(!1, !1);
      const e = t.geometry;
      void 0 !== e &&
        (null === e.boundingBox && e.computeBoundingBox(),
        Re.copy(e.boundingBox),
        Re.applyMatrix4(t.matrixWorld),
        this.union(Re));
      const n = t.children;
      for (let t = 0, e = n.length; t < e; t++) this.expandByObject(n[t]);
      return this;
    }
    containsPoint(t) {
      return !(
        t.x < this.min.x ||
        t.x > this.max.x ||
        t.y < this.min.y ||
        t.y > this.max.y ||
        t.z < this.min.z ||
        t.z > this.max.z
      );
    }
    containsBox(t) {
      return (
        this.min.x <= t.min.x &&
        t.max.x <= this.max.x &&
        this.min.y <= t.min.y &&
        t.max.y <= this.max.y &&
        this.min.z <= t.min.z &&
        t.max.z <= this.max.z
      );
    }
    getParameter(t, e) {
      return (
        void 0 === e &&
          (console.warn("THREE.Box3: .getParameter() target is now required"),
          (e = new Me())),
        e.set(
          (t.x - this.min.x) / (this.max.x - this.min.x),
          (t.y - this.min.y) / (this.max.y - this.min.y),
          (t.z - this.min.z) / (this.max.z - this.min.z)
        )
      );
    }
    intersectsBox(t) {
      return !(
        t.max.x < this.min.x ||
        t.min.x > this.max.x ||
        t.max.y < this.min.y ||
        t.min.y > this.max.y ||
        t.max.z < this.min.z ||
        t.min.z > this.max.z
      );
    }
    intersectsSphere(t) {
      return (
        this.clampPoint(t.center, Ae),
        Ae.distanceToSquared(t.center) <= t.radius * t.radius
      );
    }
    intersectsPlane(t) {
      let e, n;
      return (
        t.normal.x > 0
          ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
          : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
        t.normal.y > 0
          ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
          : ((e += t.normal.y * this.max.y), (n += t.normal.y * this.min.y)),
        t.normal.z > 0
          ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
          : ((e += t.normal.z * this.max.z), (n += t.normal.z * this.min.z)),
        e <= -t.constant && n >= -t.constant
      );
    }
    intersectsTriangle(t) {
      if (this.isEmpty()) return !1;
      this.getCenter(Oe),
        Be.subVectors(this.max, Oe),
        Pe.subVectors(t.a, Oe),
        Ce.subVectors(t.b, Oe),
        Ie.subVectors(t.c, Oe),
        De.subVectors(Ce, Pe),
        Ne.subVectors(Ie, Ce),
        ze.subVectors(Pe, Ie);
      let e = [
        0,
        -De.z,
        De.y,
        0,
        -Ne.z,
        Ne.y,
        0,
        -ze.z,
        ze.y,
        De.z,
        0,
        -De.x,
        Ne.z,
        0,
        -Ne.x,
        ze.z,
        0,
        -ze.x,
        -De.y,
        De.x,
        0,
        -Ne.y,
        Ne.x,
        0,
        -ze.y,
        ze.x,
        0,
      ];
      return (
        !!Ue(e, Pe, Ce, Ie, Be) &&
        ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        !!Ue(e, Pe, Ce, Ie, Be) &&
          (Fe.crossVectors(De, Ne),
          (e = [Fe.x, Fe.y, Fe.z]),
          Ue(e, Pe, Ce, Ie, Be)))
      );
    }
    clampPoint(t, e) {
      return (
        void 0 === e &&
          (console.warn("THREE.Box3: .clampPoint() target is now required"),
          (e = new Me())),
        e.copy(t).clamp(this.min, this.max)
      );
    }
    distanceToPoint(t) {
      return Ae.copy(t).clamp(this.min, this.max).sub(t).length();
    }
    getBoundingSphere(t) {
      return (
        void 0 === t &&
          console.error(
            "THREE.Box3: .getBoundingSphere() target is now required"
          ),
        this.getCenter(t.center),
        (t.radius = 0.5 * this.getSize(Ae).length()),
        t
      );
    }
    intersect(t) {
      return (
        this.min.max(t.min),
        this.max.min(t.max),
        this.isEmpty() && this.makeEmpty(),
        this
      );
    }
    union(t) {
      return this.min.min(t.min), this.max.max(t.max), this;
    }
    applyMatrix4(t) {
      return (
        this.isEmpty() ||
          (Le[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
          Le[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
          Le[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
          Le[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
          Le[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
          Le[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
          Le[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
          Le[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
          this.setFromPoints(Le)),
        this
      );
    }
    translate(t) {
      return this.min.add(t), this.max.add(t), this;
    }
    equals(t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    }
  }
  Te.prototype.isBox3 = !0;
  const Le = [
      new Me(),
      new Me(),
      new Me(),
      new Me(),
      new Me(),
      new Me(),
      new Me(),
      new Me(),
    ],
    Ae = new Me(),
    Re = new Te(),
    Pe = new Me(),
    Ce = new Me(),
    Ie = new Me(),
    De = new Me(),
    Ne = new Me(),
    ze = new Me(),
    Oe = new Me(),
    Be = new Me(),
    Fe = new Me(),
    He = new Me();
  function Ue(t, e, n, i, r) {
    for (let s = 0, a = t.length - 3; s <= a; s += 3) {
      He.fromArray(t, s);
      const a =
          r.x * Math.abs(He.x) + r.y * Math.abs(He.y) + r.z * Math.abs(He.z),
        o = e.dot(He),
        l = n.dot(He),
        c = i.dot(He);
      if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a) return !1;
    }
    return !0;
  }
  const Ge = new Te(),
    Ve = new Me(),
    ke = new Me(),
    We = new Me();
  class je {
    constructor(t = new Me(), e = -1) {
      (this.center = t), (this.radius = e);
    }
    set(t, e) {
      return this.center.copy(t), (this.radius = e), this;
    }
    setFromPoints(t, e) {
      const n = this.center;
      void 0 !== e ? n.copy(e) : Ge.setFromPoints(t).getCenter(n);
      let i = 0;
      for (let e = 0, r = t.length; e < r; e++)
        i = Math.max(i, n.distanceToSquared(t[e]));
      return (this.radius = Math.sqrt(i)), this;
    }
    copy(t) {
      return this.center.copy(t.center), (this.radius = t.radius), this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), (this.radius = -1), this;
    }
    containsPoint(t) {
      return t.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(t) {
      return t.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(t) {
      const e = this.radius + t.radius;
      return t.center.distanceToSquared(this.center) <= e * e;
    }
    intersectsBox(t) {
      return t.intersectsSphere(this);
    }
    intersectsPlane(t) {
      return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(t, e) {
      const n = this.center.distanceToSquared(t);
      return (
        void 0 === e &&
          (console.warn("THREE.Sphere: .clampPoint() target is now required"),
          (e = new Me())),
        e.copy(t),
        n > this.radius * this.radius &&
          (e.sub(this.center).normalize(),
          e.multiplyScalar(this.radius).add(this.center)),
        e
      );
    }
    getBoundingBox(t) {
      return (
        void 0 === t &&
          (console.warn(
            "THREE.Sphere: .getBoundingBox() target is now required"
          ),
          (t = new Te())),
        this.isEmpty()
          ? (t.makeEmpty(), t)
          : (t.set(this.center, this.center), t.expandByScalar(this.radius), t)
      );
    }
    applyMatrix4(t) {
      return (
        this.center.applyMatrix4(t),
        (this.radius = this.radius * t.getMaxScaleOnAxis()),
        this
      );
    }
    translate(t) {
      return this.center.add(t), this;
    }
    expandByPoint(t) {
      We.subVectors(t, this.center);
      const e = We.lengthSq();
      if (e > this.radius * this.radius) {
        const t = Math.sqrt(e),
          n = 0.5 * (t - this.radius);
        this.center.add(We.multiplyScalar(n / t)), (this.radius += n);
      }
      return this;
    }
    union(t) {
      return (
        ke
          .subVectors(t.center, this.center)
          .normalize()
          .multiplyScalar(t.radius),
        this.expandByPoint(Ve.copy(t.center).add(ke)),
        this.expandByPoint(Ve.copy(t.center).sub(ke)),
        this
      );
    }
    equals(t) {
      return t.center.equals(this.center) && t.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const Xe = new Me(),
    qe = new Me(),
    Ye = new Me(),
    Ze = new Me(),
    $e = new Me(),
    Je = new Me(),
    Qe = new Me();
  class Ke {
    constructor(t = new Me(), e = new Me(0, 0, -1)) {
      (this.origin = t), (this.direction = e);
    }
    set(t, e) {
      return this.origin.copy(t), this.direction.copy(e), this;
    }
    copy(t) {
      return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
    }
    at(t, e) {
      return (
        void 0 === e &&
          (console.warn("THREE.Ray: .at() target is now required"),
          (e = new Me())),
        e.copy(this.direction).multiplyScalar(t).add(this.origin)
      );
    }
    lookAt(t) {
      return this.direction.copy(t).sub(this.origin).normalize(), this;
    }
    recast(t) {
      return this.origin.copy(this.at(t, Xe)), this;
    }
    closestPointToPoint(t, e) {
      void 0 === e &&
        (console.warn(
          "THREE.Ray: .closestPointToPoint() target is now required"
        ),
        (e = new Me())),
        e.subVectors(t, this.origin);
      const n = e.dot(this.direction);
      return n < 0
        ? e.copy(this.origin)
        : e.copy(this.direction).multiplyScalar(n).add(this.origin);
    }
    distanceToPoint(t) {
      return Math.sqrt(this.distanceSqToPoint(t));
    }
    distanceSqToPoint(t) {
      const e = Xe.subVectors(t, this.origin).dot(this.direction);
      return e < 0
        ? this.origin.distanceToSquared(t)
        : (Xe.copy(this.direction).multiplyScalar(e).add(this.origin),
          Xe.distanceToSquared(t));
    }
    distanceSqToSegment(t, e, n, i) {
      qe.copy(t).add(e).multiplyScalar(0.5),
        Ye.copy(e).sub(t).normalize(),
        Ze.copy(this.origin).sub(qe);
      const r = 0.5 * t.distanceTo(e),
        s = -this.direction.dot(Ye),
        a = Ze.dot(this.direction),
        o = -Ze.dot(Ye),
        l = Ze.lengthSq(),
        c = Math.abs(1 - s * s);
      let h, u, d, p;
      if (c > 0)
        if (((h = s * o - a), (u = s * a - o), (p = r * c), h >= 0))
          if (u >= -p)
            if (u <= p) {
              const t = 1 / c;
              (h *= t),
                (u *= t),
                (d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l);
            } else
              (u = r),
                (h = Math.max(0, -(s * u + a))),
                (d = -h * h + u * (u + 2 * o) + l);
          else
            (u = -r),
              (h = Math.max(0, -(s * u + a))),
              (d = -h * h + u * (u + 2 * o) + l);
        else
          u <= -p
            ? ((h = Math.max(0, -(-s * r + a))),
              (u = h > 0 ? -r : Math.min(Math.max(-r, -o), r)),
              (d = -h * h + u * (u + 2 * o) + l))
            : u <= p
            ? ((h = 0),
              (u = Math.min(Math.max(-r, -o), r)),
              (d = u * (u + 2 * o) + l))
            : ((h = Math.max(0, -(s * r + a))),
              (u = h > 0 ? r : Math.min(Math.max(-r, -o), r)),
              (d = -h * h + u * (u + 2 * o) + l));
      else
        (u = s > 0 ? -r : r),
          (h = Math.max(0, -(s * u + a))),
          (d = -h * h + u * (u + 2 * o) + l);
      return (
        n && n.copy(this.direction).multiplyScalar(h).add(this.origin),
        i && i.copy(Ye).multiplyScalar(u).add(qe),
        d
      );
    }
    intersectSphere(t, e) {
      Xe.subVectors(t.center, this.origin);
      const n = Xe.dot(this.direction),
        i = Xe.dot(Xe) - n * n,
        r = t.radius * t.radius;
      if (i > r) return null;
      const s = Math.sqrt(r - i),
        a = n - s,
        o = n + s;
      return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e);
    }
    intersectsSphere(t) {
      return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
    }
    distanceToPlane(t) {
      const e = t.normal.dot(this.direction);
      if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
      const n = -(this.origin.dot(t.normal) + t.constant) / e;
      return n >= 0 ? n : null;
    }
    intersectPlane(t, e) {
      const n = this.distanceToPlane(t);
      return null === n ? null : this.at(n, e);
    }
    intersectsPlane(t) {
      const e = t.distanceToPoint(this.origin);
      if (0 === e) return !0;
      return t.normal.dot(this.direction) * e < 0;
    }
    intersectBox(t, e) {
      let n, i, r, s, a, o;
      const l = 1 / this.direction.x,
        c = 1 / this.direction.y,
        h = 1 / this.direction.z,
        u = this.origin;
      return (
        l >= 0
          ? ((n = (t.min.x - u.x) * l), (i = (t.max.x - u.x) * l))
          : ((n = (t.max.x - u.x) * l), (i = (t.min.x - u.x) * l)),
        c >= 0
          ? ((r = (t.min.y - u.y) * c), (s = (t.max.y - u.y) * c))
          : ((r = (t.max.y - u.y) * c), (s = (t.min.y - u.y) * c)),
        n > s || r > i
          ? null
          : ((r > n || n != n) && (n = r),
            (s < i || i != i) && (i = s),
            h >= 0
              ? ((a = (t.min.z - u.z) * h), (o = (t.max.z - u.z) * h))
              : ((a = (t.max.z - u.z) * h), (o = (t.min.z - u.z) * h)),
            n > o || a > i
              ? null
              : ((a > n || n != n) && (n = a),
                (o < i || i != i) && (i = o),
                i < 0 ? null : this.at(n >= 0 ? n : i, e)))
      );
    }
    intersectsBox(t) {
      return null !== this.intersectBox(t, Xe);
    }
    intersectTriangle(t, e, n, i, r) {
      $e.subVectors(e, t), Je.subVectors(n, t), Qe.crossVectors($e, Je);
      let s,
        a = this.direction.dot(Qe);
      if (a > 0) {
        if (i) return null;
        s = 1;
      } else {
        if (!(a < 0)) return null;
        (s = -1), (a = -a);
      }
      Ze.subVectors(this.origin, t);
      const o = s * this.direction.dot(Je.crossVectors(Ze, Je));
      if (o < 0) return null;
      const l = s * this.direction.dot($e.cross(Ze));
      if (l < 0) return null;
      if (o + l > a) return null;
      const c = -s * Ze.dot(Qe);
      return c < 0 ? null : this.at(c / a, r);
    }
    applyMatrix4(t) {
      return (
        this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
      );
    }
    equals(t) {
      return t.origin.equals(this.origin) && t.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class tn {
    constructor() {
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        arguments.length > 0 &&
          console.error(
            "THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
          );
    }
    set(t, e, n, i, r, s, a, o, l, c, h, u, d, p, m, f) {
      const g = this.elements;
      return (
        (g[0] = t),
        (g[4] = e),
        (g[8] = n),
        (g[12] = i),
        (g[1] = r),
        (g[5] = s),
        (g[9] = a),
        (g[13] = o),
        (g[2] = l),
        (g[6] = c),
        (g[10] = h),
        (g[14] = u),
        (g[3] = d),
        (g[7] = p),
        (g[11] = m),
        (g[15] = f),
        this
      );
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new tn().fromArray(this.elements);
    }
    copy(t) {
      const e = this.elements,
        n = t.elements;
      return (
        (e[0] = n[0]),
        (e[1] = n[1]),
        (e[2] = n[2]),
        (e[3] = n[3]),
        (e[4] = n[4]),
        (e[5] = n[5]),
        (e[6] = n[6]),
        (e[7] = n[7]),
        (e[8] = n[8]),
        (e[9] = n[9]),
        (e[10] = n[10]),
        (e[11] = n[11]),
        (e[12] = n[12]),
        (e[13] = n[13]),
        (e[14] = n[14]),
        (e[15] = n[15]),
        this
      );
    }
    copyPosition(t) {
      const e = this.elements,
        n = t.elements;
      return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
    }
    setFromMatrix3(t) {
      const e = t.elements;
      return (
        this.set(
          e[0],
          e[3],
          e[6],
          0,
          e[1],
          e[4],
          e[7],
          0,
          e[2],
          e[5],
          e[8],
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    extractBasis(t, e, n) {
      return (
        t.setFromMatrixColumn(this, 0),
        e.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this
      );
    }
    makeBasis(t, e, n) {
      return (
        this.set(
          t.x,
          e.x,
          n.x,
          0,
          t.y,
          e.y,
          n.y,
          0,
          t.z,
          e.z,
          n.z,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    extractRotation(t) {
      const e = this.elements,
        n = t.elements,
        i = 1 / en.setFromMatrixColumn(t, 0).length(),
        r = 1 / en.setFromMatrixColumn(t, 1).length(),
        s = 1 / en.setFromMatrixColumn(t, 2).length();
      return (
        (e[0] = n[0] * i),
        (e[1] = n[1] * i),
        (e[2] = n[2] * i),
        (e[3] = 0),
        (e[4] = n[4] * r),
        (e[5] = n[5] * r),
        (e[6] = n[6] * r),
        (e[7] = 0),
        (e[8] = n[8] * s),
        (e[9] = n[9] * s),
        (e[10] = n[10] * s),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        this
      );
    }
    makeRotationFromEuler(t) {
      (t && t.isEuler) ||
        console.error(
          "THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
        );
      const e = this.elements,
        n = t.x,
        i = t.y,
        r = t.z,
        s = Math.cos(n),
        a = Math.sin(n),
        o = Math.cos(i),
        l = Math.sin(i),
        c = Math.cos(r),
        h = Math.sin(r);
      if ("XYZ" === t.order) {
        const t = s * c,
          n = s * h,
          i = a * c,
          r = a * h;
        (e[0] = o * c),
          (e[4] = -o * h),
          (e[8] = l),
          (e[1] = n + i * l),
          (e[5] = t - r * l),
          (e[9] = -a * o),
          (e[2] = r - t * l),
          (e[6] = i + n * l),
          (e[10] = s * o);
      } else if ("YXZ" === t.order) {
        const t = o * c,
          n = o * h,
          i = l * c,
          r = l * h;
        (e[0] = t + r * a),
          (e[4] = i * a - n),
          (e[8] = s * l),
          (e[1] = s * h),
          (e[5] = s * c),
          (e[9] = -a),
          (e[2] = n * a - i),
          (e[6] = r + t * a),
          (e[10] = s * o);
      } else if ("ZXY" === t.order) {
        const t = o * c,
          n = o * h,
          i = l * c,
          r = l * h;
        (e[0] = t - r * a),
          (e[4] = -s * h),
          (e[8] = i + n * a),
          (e[1] = n + i * a),
          (e[5] = s * c),
          (e[9] = r - t * a),
          (e[2] = -s * l),
          (e[6] = a),
          (e[10] = s * o);
      } else if ("ZYX" === t.order) {
        const t = s * c,
          n = s * h,
          i = a * c,
          r = a * h;
        (e[0] = o * c),
          (e[4] = i * l - n),
          (e[8] = t * l + r),
          (e[1] = o * h),
          (e[5] = r * l + t),
          (e[9] = n * l - i),
          (e[2] = -l),
          (e[6] = a * o),
          (e[10] = s * o);
      } else if ("YZX" === t.order) {
        const t = s * o,
          n = s * l,
          i = a * o,
          r = a * l;
        (e[0] = o * c),
          (e[4] = r - t * h),
          (e[8] = i * h + n),
          (e[1] = h),
          (e[5] = s * c),
          (e[9] = -a * c),
          (e[2] = -l * c),
          (e[6] = n * h + i),
          (e[10] = t - r * h);
      } else if ("XZY" === t.order) {
        const t = s * o,
          n = s * l,
          i = a * o,
          r = a * l;
        (e[0] = o * c),
          (e[4] = -h),
          (e[8] = l * c),
          (e[1] = t * h + r),
          (e[5] = s * c),
          (e[9] = n * h - i),
          (e[2] = i * h - n),
          (e[6] = a * c),
          (e[10] = r * h + t);
      }
      return (
        (e[3] = 0),
        (e[7] = 0),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        this
      );
    }
    makeRotationFromQuaternion(t) {
      return this.compose(rn, t, sn);
    }
    lookAt(t, e, n) {
      const i = this.elements;
      return (
        ln.subVectors(t, e),
        0 === ln.lengthSq() && (ln.z = 1),
        ln.normalize(),
        an.crossVectors(n, ln),
        0 === an.lengthSq() &&
          (1 === Math.abs(n.z) ? (ln.x += 1e-4) : (ln.z += 1e-4),
          ln.normalize(),
          an.crossVectors(n, ln)),
        an.normalize(),
        on.crossVectors(ln, an),
        (i[0] = an.x),
        (i[4] = on.x),
        (i[8] = ln.x),
        (i[1] = an.y),
        (i[5] = on.y),
        (i[9] = ln.y),
        (i[2] = an.z),
        (i[6] = on.z),
        (i[10] = ln.z),
        this
      );
    }
    multiply(t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
          ),
          this.multiplyMatrices(t, e))
        : this.multiplyMatrices(this, t);
    }
    premultiply(t) {
      return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
      const n = t.elements,
        i = e.elements,
        r = this.elements,
        s = n[0],
        a = n[4],
        o = n[8],
        l = n[12],
        c = n[1],
        h = n[5],
        u = n[9],
        d = n[13],
        p = n[2],
        m = n[6],
        f = n[10],
        g = n[14],
        v = n[3],
        y = n[7],
        x = n[11],
        _ = n[15],
        w = i[0],
        b = i[4],
        M = i[8],
        S = i[12],
        E = i[1],
        T = i[5],
        L = i[9],
        A = i[13],
        R = i[2],
        P = i[6],
        C = i[10],
        I = i[14],
        D = i[3],
        N = i[7],
        z = i[11],
        O = i[15];
      return (
        (r[0] = s * w + a * E + o * R + l * D),
        (r[4] = s * b + a * T + o * P + l * N),
        (r[8] = s * M + a * L + o * C + l * z),
        (r[12] = s * S + a * A + o * I + l * O),
        (r[1] = c * w + h * E + u * R + d * D),
        (r[5] = c * b + h * T + u * P + d * N),
        (r[9] = c * M + h * L + u * C + d * z),
        (r[13] = c * S + h * A + u * I + d * O),
        (r[2] = p * w + m * E + f * R + g * D),
        (r[6] = p * b + m * T + f * P + g * N),
        (r[10] = p * M + m * L + f * C + g * z),
        (r[14] = p * S + m * A + f * I + g * O),
        (r[3] = v * w + y * E + x * R + _ * D),
        (r[7] = v * b + y * T + x * P + _ * N),
        (r[11] = v * M + y * L + x * C + _ * z),
        (r[15] = v * S + y * A + x * I + _ * O),
        this
      );
    }
    multiplyScalar(t) {
      const e = this.elements;
      return (
        (e[0] *= t),
        (e[4] *= t),
        (e[8] *= t),
        (e[12] *= t),
        (e[1] *= t),
        (e[5] *= t),
        (e[9] *= t),
        (e[13] *= t),
        (e[2] *= t),
        (e[6] *= t),
        (e[10] *= t),
        (e[14] *= t),
        (e[3] *= t),
        (e[7] *= t),
        (e[11] *= t),
        (e[15] *= t),
        this
      );
    }
    determinant() {
      const t = this.elements,
        e = t[0],
        n = t[4],
        i = t[8],
        r = t[12],
        s = t[1],
        a = t[5],
        o = t[9],
        l = t[13],
        c = t[2],
        h = t[6],
        u = t[10],
        d = t[14];
      return (
        t[3] *
          (+r * o * h -
            i * l * h -
            r * a * u +
            n * l * u +
            i * a * d -
            n * o * d) +
        t[7] *
          (+e * o * d -
            e * l * u +
            r * s * u -
            i * s * d +
            i * l * c -
            r * o * c) +
        t[11] *
          (+e * l * h -
            e * a * d -
            r * s * h +
            n * s * d +
            r * a * c -
            n * l * c) +
        t[15] *
          (-i * a * c -
            e * o * h +
            e * a * u +
            i * s * h -
            n * s * u +
            n * o * c)
      );
    }
    transpose() {
      const t = this.elements;
      let e;
      return (
        (e = t[1]),
        (t[1] = t[4]),
        (t[4] = e),
        (e = t[2]),
        (t[2] = t[8]),
        (t[8] = e),
        (e = t[6]),
        (t[6] = t[9]),
        (t[9] = e),
        (e = t[3]),
        (t[3] = t[12]),
        (t[12] = e),
        (e = t[7]),
        (t[7] = t[13]),
        (t[13] = e),
        (e = t[11]),
        (t[11] = t[14]),
        (t[14] = e),
        this
      );
    }
    setPosition(t, e, n) {
      const i = this.elements;
      return (
        t.isVector3
          ? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z))
          : ((i[12] = t), (i[13] = e), (i[14] = n)),
        this
      );
    }
    invert() {
      const t = this.elements,
        e = t[0],
        n = t[1],
        i = t[2],
        r = t[3],
        s = t[4],
        a = t[5],
        o = t[6],
        l = t[7],
        c = t[8],
        h = t[9],
        u = t[10],
        d = t[11],
        p = t[12],
        m = t[13],
        f = t[14],
        g = t[15],
        v =
          h * f * l - m * u * l + m * o * d - a * f * d - h * o * g + a * u * g,
        y =
          p * u * l - c * f * l - p * o * d + s * f * d + c * o * g - s * u * g,
        x =
          c * m * l - p * h * l + p * a * d - s * m * d - c * a * g + s * h * g,
        _ =
          p * h * o - c * m * o - p * a * u + s * m * u + c * a * f - s * h * f,
        w = e * v + n * y + i * x + r * _;
      if (0 === w)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const b = 1 / w;
      return (
        (t[0] = v * b),
        (t[1] =
          (m * u * r -
            h * f * r -
            m * i * d +
            n * f * d +
            h * i * g -
            n * u * g) *
          b),
        (t[2] =
          (a * f * r -
            m * o * r +
            m * i * l -
            n * f * l -
            a * i * g +
            n * o * g) *
          b),
        (t[3] =
          (h * o * r -
            a * u * r -
            h * i * l +
            n * u * l +
            a * i * d -
            n * o * d) *
          b),
        (t[4] = y * b),
        (t[5] =
          (c * f * r -
            p * u * r +
            p * i * d -
            e * f * d -
            c * i * g +
            e * u * g) *
          b),
        (t[6] =
          (p * o * r -
            s * f * r -
            p * i * l +
            e * f * l +
            s * i * g -
            e * o * g) *
          b),
        (t[7] =
          (s * u * r -
            c * o * r +
            c * i * l -
            e * u * l -
            s * i * d +
            e * o * d) *
          b),
        (t[8] = x * b),
        (t[9] =
          (p * h * r -
            c * m * r -
            p * n * d +
            e * m * d +
            c * n * g -
            e * h * g) *
          b),
        (t[10] =
          (s * m * r -
            p * a * r +
            p * n * l -
            e * m * l -
            s * n * g +
            e * a * g) *
          b),
        (t[11] =
          (c * a * r -
            s * h * r -
            c * n * l +
            e * h * l +
            s * n * d -
            e * a * d) *
          b),
        (t[12] = _ * b),
        (t[13] =
          (c * m * i -
            p * h * i +
            p * n * u -
            e * m * u -
            c * n * f +
            e * h * f) *
          b),
        (t[14] =
          (p * a * i -
            s * m * i -
            p * n * o +
            e * m * o +
            s * n * f -
            e * a * f) *
          b),
        (t[15] =
          (s * h * i -
            c * a * i +
            c * n * o -
            e * h * o -
            s * n * u +
            e * a * u) *
          b),
        this
      );
    }
    scale(t) {
      const e = this.elements,
        n = t.x,
        i = t.y,
        r = t.z;
      return (
        (e[0] *= n),
        (e[4] *= i),
        (e[8] *= r),
        (e[1] *= n),
        (e[5] *= i),
        (e[9] *= r),
        (e[2] *= n),
        (e[6] *= i),
        (e[10] *= r),
        (e[3] *= n),
        (e[7] *= i),
        (e[11] *= r),
        this
      );
    }
    getMaxScaleOnAxis() {
      const t = this.elements,
        e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
        n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
        i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
      return Math.sqrt(Math.max(e, n, i));
    }
    makeTranslation(t, e, n) {
      return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
    }
    makeRotationX(t) {
      const e = Math.cos(t),
        n = Math.sin(t);
      return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(t) {
      const e = Math.cos(t),
        n = Math.sin(t);
      return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(t) {
      const e = Math.cos(t),
        n = Math.sin(t);
      return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(t, e) {
      const n = Math.cos(e),
        i = Math.sin(e),
        r = 1 - n,
        s = t.x,
        a = t.y,
        o = t.z,
        l = r * s,
        c = r * a;
      return (
        this.set(
          l * s + n,
          l * a - i * o,
          l * o + i * a,
          0,
          l * a + i * o,
          c * a + n,
          c * o - i * s,
          0,
          l * o - i * a,
          c * o + i * s,
          r * o * o + n,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    makeScale(t, e, n) {
      return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }
    makeShear(t, e, n) {
      return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1), this;
    }
    compose(t, e, n) {
      const i = this.elements,
        r = e._x,
        s = e._y,
        a = e._z,
        o = e._w,
        l = r + r,
        c = s + s,
        h = a + a,
        u = r * l,
        d = r * c,
        p = r * h,
        m = s * c,
        f = s * h,
        g = a * h,
        v = o * l,
        y = o * c,
        x = o * h,
        _ = n.x,
        w = n.y,
        b = n.z;
      return (
        (i[0] = (1 - (m + g)) * _),
        (i[1] = (d + x) * _),
        (i[2] = (p - y) * _),
        (i[3] = 0),
        (i[4] = (d - x) * w),
        (i[5] = (1 - (u + g)) * w),
        (i[6] = (f + v) * w),
        (i[7] = 0),
        (i[8] = (p + y) * b),
        (i[9] = (f - v) * b),
        (i[10] = (1 - (u + m)) * b),
        (i[11] = 0),
        (i[12] = t.x),
        (i[13] = t.y),
        (i[14] = t.z),
        (i[15] = 1),
        this
      );
    }
    decompose(t, e, n) {
      const i = this.elements;
      let r = en.set(i[0], i[1], i[2]).length();
      const s = en.set(i[4], i[5], i[6]).length(),
        a = en.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (r = -r),
        (t.x = i[12]),
        (t.y = i[13]),
        (t.z = i[14]),
        nn.copy(this);
      const o = 1 / r,
        l = 1 / s,
        c = 1 / a;
      return (
        (nn.elements[0] *= o),
        (nn.elements[1] *= o),
        (nn.elements[2] *= o),
        (nn.elements[4] *= l),
        (nn.elements[5] *= l),
        (nn.elements[6] *= l),
        (nn.elements[8] *= c),
        (nn.elements[9] *= c),
        (nn.elements[10] *= c),
        e.setFromRotationMatrix(nn),
        (n.x = r),
        (n.y = s),
        (n.z = a),
        this
      );
    }
    makePerspective(t, e, n, i, r, s) {
      void 0 === s &&
        console.warn(
          "THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
        );
      const a = this.elements,
        o = (2 * r) / (e - t),
        l = (2 * r) / (n - i),
        c = (e + t) / (e - t),
        h = (n + i) / (n - i),
        u = -(s + r) / (s - r),
        d = (-2 * s * r) / (s - r);
      return (
        (a[0] = o),
        (a[4] = 0),
        (a[8] = c),
        (a[12] = 0),
        (a[1] = 0),
        (a[5] = l),
        (a[9] = h),
        (a[13] = 0),
        (a[2] = 0),
        (a[6] = 0),
        (a[10] = u),
        (a[14] = d),
        (a[3] = 0),
        (a[7] = 0),
        (a[11] = -1),
        (a[15] = 0),
        this
      );
    }
    makeOrthographic(t, e, n, i, r, s) {
      const a = this.elements,
        o = 1 / (e - t),
        l = 1 / (n - i),
        c = 1 / (s - r),
        h = (e + t) * o,
        u = (n + i) * l,
        d = (s + r) * c;
      return (
        (a[0] = 2 * o),
        (a[4] = 0),
        (a[8] = 0),
        (a[12] = -h),
        (a[1] = 0),
        (a[5] = 2 * l),
        (a[9] = 0),
        (a[13] = -u),
        (a[2] = 0),
        (a[6] = 0),
        (a[10] = -2 * c),
        (a[14] = -d),
        (a[3] = 0),
        (a[7] = 0),
        (a[11] = 0),
        (a[15] = 1),
        this
      );
    }
    equals(t) {
      const e = this.elements,
        n = t.elements;
      for (let t = 0; t < 16; t++) if (e[t] !== n[t]) return !1;
      return !0;
    }
    fromArray(t, e = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
      return this;
    }
    toArray(t = [], e = 0) {
      const n = this.elements;
      return (
        (t[e] = n[0]),
        (t[e + 1] = n[1]),
        (t[e + 2] = n[2]),
        (t[e + 3] = n[3]),
        (t[e + 4] = n[4]),
        (t[e + 5] = n[5]),
        (t[e + 6] = n[6]),
        (t[e + 7] = n[7]),
        (t[e + 8] = n[8]),
        (t[e + 9] = n[9]),
        (t[e + 10] = n[10]),
        (t[e + 11] = n[11]),
        (t[e + 12] = n[12]),
        (t[e + 13] = n[13]),
        (t[e + 14] = n[14]),
        (t[e + 15] = n[15]),
        t
      );
    }
  }
  tn.prototype.isMatrix4 = !0;
  const en = new Me(),
    nn = new tn(),
    rn = new Me(0, 0, 0),
    sn = new Me(1, 1, 1),
    an = new Me(),
    on = new Me(),
    ln = new Me(),
    cn = new tn(),
    hn = new be();
  class un {
    constructor(t = 0, e = 0, n = 0, i = un.DefaultOrder) {
      (this._x = t), (this._y = e), (this._z = n), (this._order = i);
    }
    get x() {
      return this._x;
    }
    set x(t) {
      (this._x = t), this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t) {
      (this._y = t), this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t) {
      (this._z = t), this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(t) {
      (this._order = t), this._onChangeCallback();
    }
    set(t, e, n, i) {
      return (
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._order = i || this._order),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(t) {
      return (
        (this._x = t._x),
        (this._y = t._y),
        (this._z = t._z),
        (this._order = t._order),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(t, e, n) {
      const i = t.elements,
        r = i[0],
        s = i[4],
        a = i[8],
        o = i[1],
        l = i[5],
        c = i[9],
        h = i[2],
        u = i[6],
        d = i[10];
      switch ((e = e || this._order)) {
        case "XYZ":
          (this._y = Math.asin(ae(a, -1, 1))),
            Math.abs(a) < 0.9999999
              ? ((this._x = Math.atan2(-c, d)), (this._z = Math.atan2(-s, r)))
              : ((this._x = Math.atan2(u, l)), (this._z = 0));
          break;
        case "YXZ":
          (this._x = Math.asin(-ae(c, -1, 1))),
            Math.abs(c) < 0.9999999
              ? ((this._y = Math.atan2(a, d)), (this._z = Math.atan2(o, l)))
              : ((this._y = Math.atan2(-h, r)), (this._z = 0));
          break;
        case "ZXY":
          (this._x = Math.asin(ae(u, -1, 1))),
            Math.abs(u) < 0.9999999
              ? ((this._y = Math.atan2(-h, d)), (this._z = Math.atan2(-s, l)))
              : ((this._y = 0), (this._z = Math.atan2(o, r)));
          break;
        case "ZYX":
          (this._y = Math.asin(-ae(h, -1, 1))),
            Math.abs(h) < 0.9999999
              ? ((this._x = Math.atan2(u, d)), (this._z = Math.atan2(o, r)))
              : ((this._x = 0), (this._z = Math.atan2(-s, l)));
          break;
        case "YZX":
          (this._z = Math.asin(ae(o, -1, 1))),
            Math.abs(o) < 0.9999999
              ? ((this._x = Math.atan2(-c, l)), (this._y = Math.atan2(-h, r)))
              : ((this._x = 0), (this._y = Math.atan2(a, d)));
          break;
        case "XZY":
          (this._z = Math.asin(-ae(s, -1, 1))),
            Math.abs(s) < 0.9999999
              ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(a, r)))
              : ((this._x = Math.atan2(-c, d)), (this._y = 0));
          break;
        default:
          console.warn(
            "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
              e
          );
      }
      return (this._order = e), !1 !== n && this._onChangeCallback(), this;
    }
    setFromQuaternion(t, e, n) {
      return (
        cn.makeRotationFromQuaternion(t), this.setFromRotationMatrix(cn, e, n)
      );
    }
    setFromVector3(t, e) {
      return this.set(t.x, t.y, t.z, e || this._order);
    }
    reorder(t) {
      return hn.setFromEuler(this), this.setFromQuaternion(hn, t);
    }
    equals(t) {
      return (
        t._x === this._x &&
        t._y === this._y &&
        t._z === this._z &&
        t._order === this._order
      );
    }
    fromArray(t) {
      return (
        (this._x = t[0]),
        (this._y = t[1]),
        (this._z = t[2]),
        void 0 !== t[3] && (this._order = t[3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this._x),
        (t[e + 1] = this._y),
        (t[e + 2] = this._z),
        (t[e + 3] = this._order),
        t
      );
    }
    toVector3(t) {
      return t
        ? t.set(this._x, this._y, this._z)
        : new Me(this._x, this._y, this._z);
    }
    _onChange(t) {
      return (this._onChangeCallback = t), this;
    }
    _onChangeCallback() {}
  }
  (un.prototype.isEuler = !0),
    (un.DefaultOrder = "XYZ"),
    (un.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"]);
  class dn {
    constructor() {
      this.mask = 1;
    }
    set(t) {
      this.mask = (1 << t) | 0;
    }
    enable(t) {
      this.mask |= (1 << t) | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(t) {
      this.mask ^= (1 << t) | 0;
    }
    disable(t) {
      this.mask &= ~((1 << t) | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(t) {
      return 0 != (this.mask & t.mask);
    }
  }
  let pn = 0;
  const mn = new Me(),
    fn = new be(),
    gn = new tn(),
    vn = new Me(),
    yn = new Me(),
    xn = new Me(),
    _n = new be(),
    wn = new Me(1, 0, 0),
    bn = new Me(0, 1, 0),
    Mn = new Me(0, 0, 1),
    Sn = { type: "added" },
    En = { type: "removed" };
  class Tn extends te {
    constructor() {
      super(),
        Object.defineProperty(this, "id", { value: pn++ }),
        (this.uuid = se()),
        (this.name = ""),
        (this.type = "Object3D"),
        (this.parent = null),
        (this.children = []),
        (this.up = Tn.DefaultUp.clone());
      const t = new Me(),
        e = new un(),
        n = new be(),
        i = new Me(1, 1, 1);
      e._onChange(function () {
        n.setFromEuler(e, !1);
      }),
        n._onChange(function () {
          e.setFromQuaternion(n, void 0, !1);
        }),
        Object.defineProperties(this, {
          position: { configurable: !0, enumerable: !0, value: t },
          rotation: { configurable: !0, enumerable: !0, value: e },
          quaternion: { configurable: !0, enumerable: !0, value: n },
          scale: { configurable: !0, enumerable: !0, value: i },
          modelViewMatrix: { value: new tn() },
          normalMatrix: { value: new me() },
        }),
        (this.matrix = new tn()),
        (this.matrixWorld = new tn()),
        (this.matrixAutoUpdate = Tn.DefaultMatrixAutoUpdate),
        (this.matrixWorldNeedsUpdate = !1),
        (this.layers = new dn()),
        (this.visible = !0),
        (this.castShadow = !1),
        (this.receiveShadow = !1),
        (this.frustumCulled = !0),
        (this.renderOrder = 0),
        (this.animations = []),
        (this.userData = {});
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(t) {
      this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(t),
        this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(t) {
      return this.quaternion.premultiply(t), this;
    }
    setRotationFromAxisAngle(t, e) {
      this.quaternion.setFromAxisAngle(t, e);
    }
    setRotationFromEuler(t) {
      this.quaternion.setFromEuler(t, !0);
    }
    setRotationFromMatrix(t) {
      this.quaternion.setFromRotationMatrix(t);
    }
    setRotationFromQuaternion(t) {
      this.quaternion.copy(t);
    }
    rotateOnAxis(t, e) {
      return fn.setFromAxisAngle(t, e), this.quaternion.multiply(fn), this;
    }
    rotateOnWorldAxis(t, e) {
      return fn.setFromAxisAngle(t, e), this.quaternion.premultiply(fn), this;
    }
    rotateX(t) {
      return this.rotateOnAxis(wn, t);
    }
    rotateY(t) {
      return this.rotateOnAxis(bn, t);
    }
    rotateZ(t) {
      return this.rotateOnAxis(Mn, t);
    }
    translateOnAxis(t, e) {
      return (
        mn.copy(t).applyQuaternion(this.quaternion),
        this.position.add(mn.multiplyScalar(e)),
        this
      );
    }
    translateX(t) {
      return this.translateOnAxis(wn, t);
    }
    translateY(t) {
      return this.translateOnAxis(bn, t);
    }
    translateZ(t) {
      return this.translateOnAxis(Mn, t);
    }
    localToWorld(t) {
      return t.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(t) {
      return t.applyMatrix4(gn.copy(this.matrixWorld).invert());
    }
    lookAt(t, e, n) {
      t.isVector3 ? vn.copy(t) : vn.set(t, e, n);
      const i = this.parent;
      this.updateWorldMatrix(!0, !1),
        yn.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight
          ? gn.lookAt(yn, vn, this.up)
          : gn.lookAt(vn, yn, this.up),
        this.quaternion.setFromRotationMatrix(gn),
        i &&
          (gn.extractRotation(i.matrixWorld),
          fn.setFromRotationMatrix(gn),
          this.quaternion.premultiply(fn.invert()));
    }
    add(t) {
      if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
        return this;
      }
      return t === this
        ? (console.error(
            "THREE.Object3D.add: object can't be added as a child of itself.",
            t
          ),
          this)
        : (t && t.isObject3D
            ? (null !== t.parent && t.parent.remove(t),
              (t.parent = this),
              this.children.push(t),
              t.dispatchEvent(Sn))
            : console.error(
                "THREE.Object3D.add: object not an instance of THREE.Object3D.",
                t
              ),
          this);
    }
    remove(t) {
      if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
        return this;
      }
      const e = this.children.indexOf(t);
      return (
        -1 !== e &&
          ((t.parent = null), this.children.splice(e, 1), t.dispatchEvent(En)),
        this
      );
    }
    clear() {
      for (let t = 0; t < this.children.length; t++) {
        const e = this.children[t];
        (e.parent = null), e.dispatchEvent(En);
      }
      return (this.children.length = 0), this;
    }
    attach(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        gn.copy(this.matrixWorld).invert(),
        null !== t.parent &&
          (t.parent.updateWorldMatrix(!0, !1),
          gn.multiply(t.parent.matrixWorld)),
        t.applyMatrix4(gn),
        this.add(t),
        t.updateWorldMatrix(!1, !0),
        this
      );
    }
    getObjectById(t) {
      return this.getObjectByProperty("id", t);
    }
    getObjectByName(t) {
      return this.getObjectByProperty("name", t);
    }
    getObjectByProperty(t, e) {
      if (this[t] === e) return this;
      for (let n = 0, i = this.children.length; n < i; n++) {
        const i = this.children[n].getObjectByProperty(t, e);
        if (void 0 !== i) return i;
      }
    }
    getWorldPosition(t) {
      return (
        void 0 === t &&
          (console.warn(
            "THREE.Object3D: .getWorldPosition() target is now required"
          ),
          (t = new Me())),
        this.updateWorldMatrix(!0, !1),
        t.setFromMatrixPosition(this.matrixWorld)
      );
    }
    getWorldQuaternion(t) {
      return (
        void 0 === t &&
          (console.warn(
            "THREE.Object3D: .getWorldQuaternion() target is now required"
          ),
          (t = new be())),
        this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(yn, t, xn),
        t
      );
    }
    getWorldScale(t) {
      return (
        void 0 === t &&
          (console.warn(
            "THREE.Object3D: .getWorldScale() target is now required"
          ),
          (t = new Me())),
        this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(yn, _n, t),
        t
      );
    }
    getWorldDirection(t) {
      void 0 === t &&
        (console.warn(
          "THREE.Object3D: .getWorldDirection() target is now required"
        ),
        (t = new Me())),
        this.updateWorldMatrix(!0, !1);
      const e = this.matrixWorld.elements;
      return t.set(e[8], e[9], e[10]).normalize();
    }
    raycast() {}
    traverse(t) {
      t(this);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
    }
    traverseVisible(t) {
      if (!1 === this.visible) return;
      t(this);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
    }
    traverseAncestors(t) {
      const e = this.parent;
      null !== e && (t(e), e.traverseAncestors(t));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale),
        (this.matrixWorldNeedsUpdate = !0);
    }
    updateMatrixWorld(t) {
      this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || t) &&
          (null === this.parent
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              ),
          (this.matrixWorldNeedsUpdate = !1),
          (t = !0));
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t);
    }
    updateWorldMatrix(t, e) {
      const n = this.parent;
      if (
        (!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        !0 === e)
      ) {
        const t = this.children;
        for (let e = 0, n = t.length; e < n; e++)
          t[e].updateWorldMatrix(!1, !0);
      }
    }
    toJSON(t) {
      const e = void 0 === t || "string" == typeof t,
        n = {};
      e &&
        ((t = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
          skeletons: {},
          animations: {},
        }),
        (n.metadata = {
          version: 4.5,
          type: "Object",
          generator: "Object3D.toJSON",
        }));
      const i = {};
      function r(e, n) {
        return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
      }
      if (
        ((i.uuid = this.uuid),
        (i.type = this.type),
        "" !== this.name && (i.name = this.name),
        !0 === this.castShadow && (i.castShadow = !0),
        !0 === this.receiveShadow && (i.receiveShadow = !0),
        !1 === this.visible && (i.visible = !1),
        !1 === this.frustumCulled && (i.frustumCulled = !1),
        0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
        "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
        (i.layers = this.layers.mask),
        (i.matrix = this.matrix.toArray()),
        !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
        this.isInstancedMesh &&
          ((i.type = "InstancedMesh"),
          (i.count = this.count),
          (i.instanceMatrix = this.instanceMatrix.toJSON()),
          null !== this.instanceColor &&
            (i.instanceColor = this.instanceColor.toJSON())),
        this.isMesh || this.isLine || this.isPoints)
      ) {
        i.geometry = r(t.geometries, this.geometry);
        const e = this.geometry.parameters;
        if (void 0 !== e && void 0 !== e.shapes) {
          const n = e.shapes;
          if (Array.isArray(n))
            for (let e = 0, i = n.length; e < i; e++) {
              const i = n[e];
              r(t.shapes, i);
            }
          else r(t.shapes, n);
        }
      }
      if (
        (this.isSkinnedMesh &&
          ((i.bindMode = this.bindMode),
          (i.bindMatrix = this.bindMatrix.toArray()),
          void 0 !== this.skeleton &&
            (r(t.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
        void 0 !== this.material)
      )
        if (Array.isArray(this.material)) {
          const e = [];
          for (let n = 0, i = this.material.length; n < i; n++)
            e.push(r(t.materials, this.material[n]));
          i.material = e;
        } else i.material = r(t.materials, this.material);
      if (this.children.length > 0) {
        i.children = [];
        for (let e = 0; e < this.children.length; e++)
          i.children.push(this.children[e].toJSON(t).object);
      }
      if (this.animations.length > 0) {
        i.animations = [];
        for (let e = 0; e < this.animations.length; e++) {
          const n = this.animations[e];
          i.animations.push(r(t.animations, n));
        }
      }
      if (e) {
        const e = s(t.geometries),
          i = s(t.materials),
          r = s(t.textures),
          a = s(t.images),
          o = s(t.shapes),
          l = s(t.skeletons),
          c = s(t.animations);
        e.length > 0 && (n.geometries = e),
          i.length > 0 && (n.materials = i),
          r.length > 0 && (n.textures = r),
          a.length > 0 && (n.images = a),
          o.length > 0 && (n.shapes = o),
          l.length > 0 && (n.skeletons = l),
          c.length > 0 && (n.animations = c);
      }
      return (n.object = i), n;
      function s(t) {
        const e = [];
        for (const n in t) {
          const i = t[n];
          delete i.metadata, e.push(i);
        }
        return e;
      }
    }
    clone(t) {
      return new this.constructor().copy(this, t);
    }
    copy(t, e = !0) {
      if (
        ((this.name = t.name),
        this.up.copy(t.up),
        this.position.copy(t.position),
        (this.rotation.order = t.rotation.order),
        this.quaternion.copy(t.quaternion),
        this.scale.copy(t.scale),
        this.matrix.copy(t.matrix),
        this.matrixWorld.copy(t.matrixWorld),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
        (this.layers.mask = t.layers.mask),
        (this.visible = t.visible),
        (this.castShadow = t.castShadow),
        (this.receiveShadow = t.receiveShadow),
        (this.frustumCulled = t.frustumCulled),
        (this.renderOrder = t.renderOrder),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        !0 === e)
      )
        for (let e = 0; e < t.children.length; e++) {
          const n = t.children[e];
          this.add(n.clone());
        }
      return this;
    }
  }
  (Tn.DefaultUp = new Me(0, 1, 0)),
    (Tn.DefaultMatrixAutoUpdate = !0),
    (Tn.prototype.isObject3D = !0);
  const Ln = new Me(),
    An = new Me(),
    Rn = new me();
  class Pn {
    constructor(t = new Me(1, 0, 0), e = 0) {
      (this.normal = t), (this.constant = e);
    }
    set(t, e) {
      return this.normal.copy(t), (this.constant = e), this;
    }
    setComponents(t, e, n, i) {
      return this.normal.set(t, e, n), (this.constant = i), this;
    }
    setFromNormalAndCoplanarPoint(t, e) {
      return this.normal.copy(t), (this.constant = -e.dot(this.normal)), this;
    }
    setFromCoplanarPoints(t, e, n) {
      const i = Ln.subVectors(n, e).cross(An.subVectors(t, e)).normalize();
      return this.setFromNormalAndCoplanarPoint(i, t), this;
    }
    copy(t) {
      return this.normal.copy(t.normal), (this.constant = t.constant), this;
    }
    normalize() {
      const t = 1 / this.normal.length();
      return this.normal.multiplyScalar(t), (this.constant *= t), this;
    }
    negate() {
      return (this.constant *= -1), this.normal.negate(), this;
    }
    distanceToPoint(t) {
      return this.normal.dot(t) + this.constant;
    }
    distanceToSphere(t) {
      return this.distanceToPoint(t.center) - t.radius;
    }
    projectPoint(t, e) {
      return (
        void 0 === e &&
          (console.warn("THREE.Plane: .projectPoint() target is now required"),
          (e = new Me())),
        e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
      );
    }
    intersectLine(t, e) {
      void 0 === e &&
        (console.warn("THREE.Plane: .intersectLine() target is now required"),
        (e = new Me()));
      const n = t.delta(Ln),
        i = this.normal.dot(n);
      if (0 === i)
        return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
      const r = -(t.start.dot(this.normal) + this.constant) / i;
      return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start);
    }
    intersectsLine(t) {
      const e = this.distanceToPoint(t.start),
        n = this.distanceToPoint(t.end);
      return (e < 0 && n > 0) || (n < 0 && e > 0);
    }
    intersectsBox(t) {
      return t.intersectsPlane(this);
    }
    intersectsSphere(t) {
      return t.intersectsPlane(this);
    }
    coplanarPoint(t) {
      return (
        void 0 === t &&
          (console.warn("THREE.Plane: .coplanarPoint() target is now required"),
          (t = new Me())),
        t.copy(this.normal).multiplyScalar(-this.constant)
      );
    }
    applyMatrix4(t, e) {
      const n = e || Rn.getNormalMatrix(t),
        i = this.coplanarPoint(Ln).applyMatrix4(t),
        r = this.normal.applyMatrix3(n).normalize();
      return (this.constant = -i.dot(r)), this;
    }
    translate(t) {
      return (this.constant -= t.dot(this.normal)), this;
    }
    equals(t) {
      return t.normal.equals(this.normal) && t.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  Pn.prototype.isPlane = !0;
  const Cn = new Me(),
    In = new Me(),
    Dn = new Me(),
    Nn = new Me(),
    zn = new Me(),
    On = new Me(),
    Bn = new Me(),
    Fn = new Me(),
    Hn = new Me(),
    Un = new Me();
  class Gn {
    constructor(t = new Me(), e = new Me(), n = new Me()) {
      (this.a = t), (this.b = e), (this.c = n);
    }
    static getNormal(t, e, n, i) {
      void 0 === i &&
        (console.warn("THREE.Triangle: .getNormal() target is now required"),
        (i = new Me())),
        i.subVectors(n, e),
        Cn.subVectors(t, e),
        i.cross(Cn);
      const r = i.lengthSq();
      return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
    }
    static getBarycoord(t, e, n, i, r) {
      Cn.subVectors(i, e), In.subVectors(n, e), Dn.subVectors(t, e);
      const s = Cn.dot(Cn),
        a = Cn.dot(In),
        o = Cn.dot(Dn),
        l = In.dot(In),
        c = In.dot(Dn),
        h = s * l - a * a;
      if (
        (void 0 === r &&
          (console.warn(
            "THREE.Triangle: .getBarycoord() target is now required"
          ),
          (r = new Me())),
        0 === h)
      )
        return r.set(-2, -1, -1);
      const u = 1 / h,
        d = (l * o - a * c) * u,
        p = (s * c - a * o) * u;
      return r.set(1 - d - p, p, d);
    }
    static containsPoint(t, e, n, i) {
      return (
        this.getBarycoord(t, e, n, i, Nn),
        Nn.x >= 0 && Nn.y >= 0 && Nn.x + Nn.y <= 1
      );
    }
    static getUV(t, e, n, i, r, s, a, o) {
      return (
        this.getBarycoord(t, e, n, i, Nn),
        o.set(0, 0),
        o.addScaledVector(r, Nn.x),
        o.addScaledVector(s, Nn.y),
        o.addScaledVector(a, Nn.z),
        o
      );
    }
    static isFrontFacing(t, e, n, i) {
      return Cn.subVectors(n, e), In.subVectors(t, e), Cn.cross(In).dot(i) < 0;
    }
    set(t, e, n) {
      return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
    }
    setFromPointsAndIndices(t, e, n, i) {
      return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
    }
    getArea() {
      return (
        Cn.subVectors(this.c, this.b),
        In.subVectors(this.a, this.b),
        0.5 * Cn.cross(In).length()
      );
    }
    getMidpoint(t) {
      return (
        void 0 === t &&
          (console.warn(
            "THREE.Triangle: .getMidpoint() target is now required"
          ),
          (t = new Me())),
        t
          .addVectors(this.a, this.b)
          .add(this.c)
          .multiplyScalar(1 / 3)
      );
    }
    getNormal(t) {
      return Gn.getNormal(this.a, this.b, this.c, t);
    }
    getPlane(t) {
      return (
        void 0 === t &&
          (console.warn("THREE.Triangle: .getPlane() target is now required"),
          (t = new Pn())),
        t.setFromCoplanarPoints(this.a, this.b, this.c)
      );
    }
    getBarycoord(t, e) {
      return Gn.getBarycoord(t, this.a, this.b, this.c, e);
    }
    getUV(t, e, n, i, r) {
      return Gn.getUV(t, this.a, this.b, this.c, e, n, i, r);
    }
    containsPoint(t) {
      return Gn.containsPoint(t, this.a, this.b, this.c);
    }
    isFrontFacing(t) {
      return Gn.isFrontFacing(this.a, this.b, this.c, t);
    }
    intersectsBox(t) {
      return t.intersectsTriangle(this);
    }
    closestPointToPoint(t, e) {
      void 0 === e &&
        (console.warn(
          "THREE.Triangle: .closestPointToPoint() target is now required"
        ),
        (e = new Me()));
      const n = this.a,
        i = this.b,
        r = this.c;
      let s, a;
      zn.subVectors(i, n), On.subVectors(r, n), Fn.subVectors(t, n);
      const o = zn.dot(Fn),
        l = On.dot(Fn);
      if (o <= 0 && l <= 0) return e.copy(n);
      Hn.subVectors(t, i);
      const c = zn.dot(Hn),
        h = On.dot(Hn);
      if (c >= 0 && h <= c) return e.copy(i);
      const u = o * h - c * l;
      if (u <= 0 && o >= 0 && c <= 0)
        return (s = o / (o - c)), e.copy(n).addScaledVector(zn, s);
      Un.subVectors(t, r);
      const d = zn.dot(Un),
        p = On.dot(Un);
      if (p >= 0 && d <= p) return e.copy(r);
      const m = d * l - o * p;
      if (m <= 0 && l >= 0 && p <= 0)
        return (a = l / (l - p)), e.copy(n).addScaledVector(On, a);
      const f = c * p - d * h;
      if (f <= 0 && h - c >= 0 && d - p >= 0)
        return (
          Bn.subVectors(r, i),
          (a = (h - c) / (h - c + (d - p))),
          e.copy(i).addScaledVector(Bn, a)
        );
      const g = 1 / (f + m + u);
      return (
        (s = m * g),
        (a = u * g),
        e.copy(n).addScaledVector(zn, s).addScaledVector(On, a)
      );
    }
    equals(t) {
      return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
    }
  }
  let Vn = 0;
  function kn() {
    Object.defineProperty(this, "id", { value: Vn++ }),
      (this.uuid = se()),
      (this.name = ""),
      (this.type = "Material"),
      (this.fog = !0),
      (this.blending = 1),
      (this.side = 0),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = 204),
      (this.blendDst = 205),
      (this.blendEquation = Et),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = 3),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = 519),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = $t),
      (this.stencilZFail = $t),
      (this.stencilZPass = $t),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaTest = 0),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0);
  }
  (kn.prototype = Object.assign(Object.create(te.prototype), {
    constructor: kn,
    isMaterial: !0,
    onBuild: function () {},
    onBeforeCompile: function () {},
    customProgramCacheKey: function () {
      return this.onBeforeCompile.toString();
    },
    setValues: function (t) {
      if (void 0 !== t)
        for (const e in t) {
          const n = t[e];
          if (void 0 === n) {
            console.warn("THREE.Material: '" + e + "' parameter is undefined.");
            continue;
          }
          if ("shading" === e) {
            console.warn(
              "THREE." +
                this.type +
                ": .shading has been removed. Use the boolean .flatShading instead."
            ),
              (this.flatShading = 1 === n);
            continue;
          }
          const i = this[e];
          void 0 !== i
            ? i && i.isColor
              ? i.set(n)
              : i && i.isVector3 && n && n.isVector3
              ? i.copy(n)
              : (this[e] = n)
            : console.warn(
                "THREE." +
                  this.type +
                  ": '" +
                  e +
                  "' is not a property of this material."
              );
        }
    },
    toJSON: function (t) {
      const e = void 0 === t || "string" == typeof t;
      e && (t = { textures: {}, images: {} });
      const n = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON",
        },
      };
      function i(t) {
        const e = [];
        for (const n in t) {
          const i = t[n];
          delete i.metadata, e.push(i);
        }
        return e;
      }
      if (
        ((n.uuid = this.uuid),
        (n.type = this.type),
        "" !== this.name && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        void 0 !== this.roughness && (n.roughness = this.roughness),
        void 0 !== this.metalness && (n.metalness = this.metalness),
        this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()),
        this.emissive &&
          this.emissive.isColor &&
          (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity &&
          1 !== this.emissiveIntensity &&
          (n.emissiveIntensity = this.emissiveIntensity),
        this.specular &&
          this.specular.isColor &&
          (n.specular = this.specular.getHex()),
        void 0 !== this.shininess && (n.shininess = this.shininess),
        void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
        void 0 !== this.clearcoatRoughness &&
          (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap &&
          this.clearcoatMap.isTexture &&
          (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
        this.clearcoatRoughnessMap &&
          this.clearcoatRoughnessMap.isTexture &&
          (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
        this.clearcoatNormalMap &&
          this.clearcoatNormalMap.isTexture &&
          ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
          (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
        this.matcap &&
          this.matcap.isTexture &&
          (n.matcap = this.matcap.toJSON(t).uuid),
        this.alphaMap &&
          this.alphaMap.isTexture &&
          (n.alphaMap = this.alphaMap.toJSON(t).uuid),
        this.lightMap &&
          this.lightMap.isTexture &&
          ((n.lightMap = this.lightMap.toJSON(t).uuid),
          (n.lightMapIntensity = this.lightMapIntensity)),
        this.aoMap &&
          this.aoMap.isTexture &&
          ((n.aoMap = this.aoMap.toJSON(t).uuid),
          (n.aoMapIntensity = this.aoMapIntensity)),
        this.bumpMap &&
          this.bumpMap.isTexture &&
          ((n.bumpMap = this.bumpMap.toJSON(t).uuid),
          (n.bumpScale = this.bumpScale)),
        this.normalMap &&
          this.normalMap.isTexture &&
          ((n.normalMap = this.normalMap.toJSON(t).uuid),
          (n.normalMapType = this.normalMapType),
          (n.normalScale = this.normalScale.toArray())),
        this.displacementMap &&
          this.displacementMap.isTexture &&
          ((n.displacementMap = this.displacementMap.toJSON(t).uuid),
          (n.displacementScale = this.displacementScale),
          (n.displacementBias = this.displacementBias)),
        this.roughnessMap &&
          this.roughnessMap.isTexture &&
          (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
        this.metalnessMap &&
          this.metalnessMap.isTexture &&
          (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
        this.emissiveMap &&
          this.emissiveMap.isTexture &&
          (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
        this.specularMap &&
          this.specularMap.isTexture &&
          (n.specularMap = this.specularMap.toJSON(t).uuid),
        this.envMap &&
          this.envMap.isTexture &&
          ((n.envMap = this.envMap.toJSON(t).uuid),
          void 0 !== this.combine && (n.combine = this.combine)),
        void 0 !== this.envMapIntensity &&
          (n.envMapIntensity = this.envMapIntensity),
        void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
        void 0 !== this.refractionRatio &&
          (n.refractionRatio = this.refractionRatio),
        this.gradientMap &&
          this.gradientMap.isTexture &&
          (n.gradientMap = this.gradientMap.toJSON(t).uuid),
        void 0 !== this.size && (n.size = this.size),
        null !== this.shadowSide && (n.shadowSide = this.shadowSide),
        void 0 !== this.sizeAttenuation &&
          (n.sizeAttenuation = this.sizeAttenuation),
        1 !== this.blending && (n.blending = this.blending),
        0 !== this.side && (n.side = this.side),
        this.vertexColors && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        !0 === this.transparent && (n.transparent = this.transparent),
        (n.depthFunc = this.depthFunc),
        (n.depthTest = this.depthTest),
        (n.depthWrite = this.depthWrite),
        (n.colorWrite = this.colorWrite),
        (n.stencilWrite = this.stencilWrite),
        (n.stencilWriteMask = this.stencilWriteMask),
        (n.stencilFunc = this.stencilFunc),
        (n.stencilRef = this.stencilRef),
        (n.stencilFuncMask = this.stencilFuncMask),
        (n.stencilFail = this.stencilFail),
        (n.stencilZFail = this.stencilZFail),
        (n.stencilZPass = this.stencilZPass),
        this.rotation && 0 !== this.rotation && (n.rotation = this.rotation),
        !0 === this.polygonOffset && (n.polygonOffset = !0),
        0 !== this.polygonOffsetFactor &&
          (n.polygonOffsetFactor = this.polygonOffsetFactor),
        0 !== this.polygonOffsetUnits &&
          (n.polygonOffsetUnits = this.polygonOffsetUnits),
        this.linewidth &&
          1 !== this.linewidth &&
          (n.linewidth = this.linewidth),
        void 0 !== this.dashSize && (n.dashSize = this.dashSize),
        void 0 !== this.gapSize && (n.gapSize = this.gapSize),
        void 0 !== this.scale && (n.scale = this.scale),
        !0 === this.dithering && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        !0 === this.alphaToCoverage &&
          (n.alphaToCoverage = this.alphaToCoverage),
        !0 === this.premultipliedAlpha &&
          (n.premultipliedAlpha = this.premultipliedAlpha),
        !0 === this.wireframe && (n.wireframe = this.wireframe),
        this.wireframeLinewidth > 1 &&
          (n.wireframeLinewidth = this.wireframeLinewidth),
        "round" !== this.wireframeLinecap &&
          (n.wireframeLinecap = this.wireframeLinecap),
        "round" !== this.wireframeLinejoin &&
          (n.wireframeLinejoin = this.wireframeLinejoin),
        !0 === this.morphTargets && (n.morphTargets = !0),
        !0 === this.morphNormals && (n.morphNormals = !0),
        !0 === this.skinning && (n.skinning = !0),
        !0 === this.flatShading && (n.flatShading = this.flatShading),
        !1 === this.visible && (n.visible = !1),
        !1 === this.toneMapped && (n.toneMapped = !1),
        "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
        e)
      ) {
        const e = i(t.textures),
          r = i(t.images);
        e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
      }
      return n;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (t) {
      (this.name = t.name),
        (this.fog = t.fog),
        (this.blending = t.blending),
        (this.side = t.side),
        (this.vertexColors = t.vertexColors),
        (this.opacity = t.opacity),
        (this.transparent = t.transparent),
        (this.blendSrc = t.blendSrc),
        (this.blendDst = t.blendDst),
        (this.blendEquation = t.blendEquation),
        (this.blendSrcAlpha = t.blendSrcAlpha),
        (this.blendDstAlpha = t.blendDstAlpha),
        (this.blendEquationAlpha = t.blendEquationAlpha),
        (this.depthFunc = t.depthFunc),
        (this.depthTest = t.depthTest),
        (this.depthWrite = t.depthWrite),
        (this.stencilWriteMask = t.stencilWriteMask),
        (this.stencilFunc = t.stencilFunc),
        (this.stencilRef = t.stencilRef),
        (this.stencilFuncMask = t.stencilFuncMask),
        (this.stencilFail = t.stencilFail),
        (this.stencilZFail = t.stencilZFail),
        (this.stencilZPass = t.stencilZPass),
        (this.stencilWrite = t.stencilWrite);
      const e = t.clippingPlanes;
      let n = null;
      if (null !== e) {
        const t = e.length;
        n = new Array(t);
        for (let i = 0; i !== t; ++i) n[i] = e[i].clone();
      }
      return (
        (this.clippingPlanes = n),
        (this.clipIntersection = t.clipIntersection),
        (this.clipShadows = t.clipShadows),
        (this.shadowSide = t.shadowSide),
        (this.colorWrite = t.colorWrite),
        (this.precision = t.precision),
        (this.polygonOffset = t.polygonOffset),
        (this.polygonOffsetFactor = t.polygonOffsetFactor),
        (this.polygonOffsetUnits = t.polygonOffsetUnits),
        (this.dithering = t.dithering),
        (this.alphaTest = t.alphaTest),
        (this.alphaToCoverage = t.alphaToCoverage),
        (this.premultipliedAlpha = t.premultipliedAlpha),
        (this.visible = t.visible),
        (this.toneMapped = t.toneMapped),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        this
      );
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  })),
    Object.defineProperty(kn.prototype, "needsUpdate", {
      set: function (t) {
        !0 === t && this.version++;
      },
    });
  const Wn = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    },
    jn = { h: 0, s: 0, l: 0 },
    Xn = { h: 0, s: 0, l: 0 };
  function qn(t, e, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 1 / 6
        ? t + 6 * (e - t) * n
        : n < 0.5
        ? e
        : n < 2 / 3
        ? t + 6 * (e - t) * (2 / 3 - n)
        : t
    );
  }
  function Yn(t) {
    return t < 0.04045
      ? 0.0773993808 * t
      : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
  }
  function Zn(t) {
    return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
  }
  class $n {
    constructor(t, e, n) {
      return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n);
    }
    set(t) {
      return (
        t && t.isColor
          ? this.copy(t)
          : "number" == typeof t
          ? this.setHex(t)
          : "string" == typeof t && this.setStyle(t),
        this
      );
    }
    setScalar(t) {
      return (this.r = t), (this.g = t), (this.b = t), this;
    }
    setHex(t) {
      return (
        (t = Math.floor(t)),
        (this.r = ((t >> 16) & 255) / 255),
        (this.g = ((t >> 8) & 255) / 255),
        (this.b = (255 & t) / 255),
        this
      );
    }
    setRGB(t, e, n) {
      return (this.r = t), (this.g = e), (this.b = n), this;
    }
    setHSL(t, e, n) {
      if (((t = oe(t, 1)), (e = ae(e, 0, 1)), (n = ae(n, 0, 1)), 0 === e))
        this.r = this.g = this.b = n;
      else {
        const i = n <= 0.5 ? n * (1 + e) : n + e - n * e,
          r = 2 * n - i;
        (this.r = qn(r, i, t + 1 / 3)),
          (this.g = qn(r, i, t)),
          (this.b = qn(r, i, t - 1 / 3));
      }
      return this;
    }
    setStyle(t) {
      function e(e) {
        void 0 !== e &&
          parseFloat(e) < 1 &&
          console.warn(
            "THREE.Color: Alpha component of " + t + " will be ignored."
          );
      }
      let n;
      if ((n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t))) {
        let t;
        const i = n[1],
          r = n[2];
        switch (i) {
          case "rgb":
          case "rgba":
            if (
              (t =
                /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  r
                ))
            )
              return (
                (this.r = Math.min(255, parseInt(t[1], 10)) / 255),
                (this.g = Math.min(255, parseInt(t[2], 10)) / 255),
                (this.b = Math.min(255, parseInt(t[3], 10)) / 255),
                e(t[4]),
                this
              );
            if (
              (t =
                /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  r
                ))
            )
              return (
                (this.r = Math.min(100, parseInt(t[1], 10)) / 100),
                (this.g = Math.min(100, parseInt(t[2], 10)) / 100),
                (this.b = Math.min(100, parseInt(t[3], 10)) / 100),
                e(t[4]),
                this
              );
            break;
          case "hsl":
          case "hsla":
            if (
              (t =
                /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  r
                ))
            ) {
              const n = parseFloat(t[1]) / 360,
                i = parseInt(t[2], 10) / 100,
                r = parseInt(t[3], 10) / 100;
              return e(t[4]), this.setHSL(n, i, r);
            }
        }
      } else if ((n = /^\#([A-Fa-f\d]+)$/.exec(t))) {
        const t = n[1],
          e = t.length;
        if (3 === e)
          return (
            (this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255),
            (this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255),
            (this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255),
            this
          );
        if (6 === e)
          return (
            (this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255),
            (this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255),
            (this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255),
            this
          );
      }
      return t && t.length > 0 ? this.setColorName(t) : this;
    }
    setColorName(t) {
      const e = Wn[t.toLowerCase()];
      return (
        void 0 !== e
          ? this.setHex(e)
          : console.warn("THREE.Color: Unknown color " + t),
        this
      );
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(t) {
      return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
    }
    copyGammaToLinear(t, e = 2) {
      return (
        (this.r = Math.pow(t.r, e)),
        (this.g = Math.pow(t.g, e)),
        (this.b = Math.pow(t.b, e)),
        this
      );
    }
    copyLinearToGamma(t, e = 2) {
      const n = e > 0 ? 1 / e : 1;
      return (
        (this.r = Math.pow(t.r, n)),
        (this.g = Math.pow(t.g, n)),
        (this.b = Math.pow(t.b, n)),
        this
      );
    }
    convertGammaToLinear(t) {
      return this.copyGammaToLinear(this, t), this;
    }
    convertLinearToGamma(t) {
      return this.copyLinearToGamma(this, t), this;
    }
    copySRGBToLinear(t) {
      return (this.r = Yn(t.r)), (this.g = Yn(t.g)), (this.b = Yn(t.b)), this;
    }
    copyLinearToSRGB(t) {
      return (this.r = Zn(t.r)), (this.g = Zn(t.g)), (this.b = Zn(t.b)), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex() {
      return (
        ((255 * this.r) << 16) ^ ((255 * this.g) << 8) ^ ((255 * this.b) << 0)
      );
    }
    getHexString() {
      return ("000000" + this.getHex().toString(16)).slice(-6);
    }
    getHSL(t) {
      void 0 === t &&
        (console.warn("THREE.Color: .getHSL() target is now required"),
        (t = { h: 0, s: 0, l: 0 }));
      const e = this.r,
        n = this.g,
        i = this.b,
        r = Math.max(e, n, i),
        s = Math.min(e, n, i);
      let a, o;
      const l = (s + r) / 2;
      if (s === r) (a = 0), (o = 0);
      else {
        const t = r - s;
        switch (((o = l <= 0.5 ? t / (r + s) : t / (2 - r - s)), r)) {
          case e:
            a = (n - i) / t + (n < i ? 6 : 0);
            break;
          case n:
            a = (i - e) / t + 2;
            break;
          case i:
            a = (e - n) / t + 4;
        }
        a /= 6;
      }
      return (t.h = a), (t.s = o), (t.l = l), t;
    }
    getStyle() {
      return (
        "rgb(" +
        ((255 * this.r) | 0) +
        "," +
        ((255 * this.g) | 0) +
        "," +
        ((255 * this.b) | 0) +
        ")"
      );
    }
    offsetHSL(t, e, n) {
      return (
        this.getHSL(jn),
        (jn.h += t),
        (jn.s += e),
        (jn.l += n),
        this.setHSL(jn.h, jn.s, jn.l),
        this
      );
    }
    add(t) {
      return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
    }
    addColors(t, e) {
      return (
        (this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this
      );
    }
    addScalar(t) {
      return (this.r += t), (this.g += t), (this.b += t), this;
    }
    sub(t) {
      return (
        (this.r = Math.max(0, this.r - t.r)),
        (this.g = Math.max(0, this.g - t.g)),
        (this.b = Math.max(0, this.b - t.b)),
        this
      );
    }
    multiply(t) {
      return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
    }
    multiplyScalar(t) {
      return (this.r *= t), (this.g *= t), (this.b *= t), this;
    }
    lerp(t, e) {
      return (
        (this.r += (t.r - this.r) * e),
        (this.g += (t.g - this.g) * e),
        (this.b += (t.b - this.b) * e),
        this
      );
    }
    lerpColors(t, e, n) {
      return (
        (this.r = t.r + (e.r - t.r) * n),
        (this.g = t.g + (e.g - t.g) * n),
        (this.b = t.b + (e.b - t.b) * n),
        this
      );
    }
    lerpHSL(t, e) {
      this.getHSL(jn), t.getHSL(Xn);
      const n = le(jn.h, Xn.h, e),
        i = le(jn.s, Xn.s, e),
        r = le(jn.l, Xn.l, e);
      return this.setHSL(n, i, r), this;
    }
    equals(t) {
      return t.r === this.r && t.g === this.g && t.b === this.b;
    }
    fromArray(t, e = 0) {
      return (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t;
    }
    fromBufferAttribute(t, e) {
      return (
        (this.r = t.getX(e)),
        (this.g = t.getY(e)),
        (this.b = t.getZ(e)),
        !0 === t.normalized &&
          ((this.r /= 255), (this.g /= 255), (this.b /= 255)),
        this
      );
    }
    toJSON() {
      return this.getHex();
    }
  }
  ($n.NAMES = Wn),
    ($n.prototype.isColor = !0),
    ($n.prototype.r = 1),
    ($n.prototype.g = 1),
    ($n.prototype.b = 1);
  class Jn extends kn {
    constructor(t) {
      super(),
        (this.type = "MeshBasicMaterial"),
        (this.color = new $n(16777215)),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.combine = 0),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.skinning = !1),
        (this.morphTargets = !1),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        (this.map = t.map),
        (this.lightMap = t.lightMap),
        (this.lightMapIntensity = t.lightMapIntensity),
        (this.aoMap = t.aoMap),
        (this.aoMapIntensity = t.aoMapIntensity),
        (this.specularMap = t.specularMap),
        (this.alphaMap = t.alphaMap),
        (this.envMap = t.envMap),
        (this.combine = t.combine),
        (this.reflectivity = t.reflectivity),
        (this.refractionRatio = t.refractionRatio),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.wireframeLinecap = t.wireframeLinecap),
        (this.wireframeLinejoin = t.wireframeLinejoin),
        (this.skinning = t.skinning),
        (this.morphTargets = t.morphTargets),
        this
      );
    }
  }
  Jn.prototype.isMeshBasicMaterial = !0;
  const Qn = new Me(),
    Kn = new pe();
  class ti {
    constructor(t, e, n) {
      if (Array.isArray(t))
        throw new TypeError(
          "THREE.BufferAttribute: array should be a Typed Array."
        );
      (this.name = ""),
        (this.array = t),
        (this.itemSize = e),
        (this.count = void 0 !== t ? t.length / e : 0),
        (this.normalized = !0 === n),
        (this.usage = Jt),
        (this.updateRange = { offset: 0, count: -1 }),
        (this.version = 0),
        (this.onUploadCallback = function () {});
    }
    set needsUpdate(t) {
      !0 === t && this.version++;
    }
    setUsage(t) {
      return (this.usage = t), this;
    }
    copy(t) {
      return (
        (this.name = t.name),
        (this.array = new t.array.constructor(t.array)),
        (this.itemSize = t.itemSize),
        (this.count = t.count),
        (this.normalized = t.normalized),
        (this.usage = t.usage),
        this
      );
    }
    copyAt(t, e, n) {
      (t *= this.itemSize), (n *= e.itemSize);
      for (let i = 0, r = this.itemSize; i < r; i++)
        this.array[t + i] = e.array[n + i];
      return this;
    }
    copyArray(t) {
      return this.array.set(t), this;
    }
    copyColorsArray(t) {
      const e = this.array;
      let n = 0;
      for (let i = 0, r = t.length; i < r; i++) {
        let r = t[i];
        void 0 === r &&
          (console.warn(
            "THREE.BufferAttribute.copyColorsArray(): color is undefined",
            i
          ),
          (r = new $n())),
          (e[n++] = r.r),
          (e[n++] = r.g),
          (e[n++] = r.b);
      }
      return this;
    }
    copyVector2sArray(t) {
      const e = this.array;
      let n = 0;
      for (let i = 0, r = t.length; i < r; i++) {
        let r = t[i];
        void 0 === r &&
          (console.warn(
            "THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
            i
          ),
          (r = new pe())),
          (e[n++] = r.x),
          (e[n++] = r.y);
      }
      return this;
    }
    copyVector3sArray(t) {
      const e = this.array;
      let n = 0;
      for (let i = 0, r = t.length; i < r; i++) {
        let r = t[i];
        void 0 === r &&
          (console.warn(
            "THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
            i
          ),
          (r = new Me())),
          (e[n++] = r.x),
          (e[n++] = r.y),
          (e[n++] = r.z);
      }
      return this;
    }
    copyVector4sArray(t) {
      const e = this.array;
      let n = 0;
      for (let i = 0, r = t.length; i < r; i++) {
        let r = t[i];
        void 0 === r &&
          (console.warn(
            "THREE.BufferAttribute.copyVector4sArray(): vector is undefined",
            i
          ),
          (r = new _e())),
          (e[n++] = r.x),
          (e[n++] = r.y),
          (e[n++] = r.z),
          (e[n++] = r.w);
      }
      return this;
    }
    applyMatrix3(t) {
      if (2 === this.itemSize)
        for (let e = 0, n = this.count; e < n; e++)
          Kn.fromBufferAttribute(this, e),
            Kn.applyMatrix3(t),
            this.setXY(e, Kn.x, Kn.y);
      else if (3 === this.itemSize)
        for (let e = 0, n = this.count; e < n; e++)
          Qn.fromBufferAttribute(this, e),
            Qn.applyMatrix3(t),
            this.setXYZ(e, Qn.x, Qn.y, Qn.z);
      return this;
    }
    applyMatrix4(t) {
      for (let e = 0, n = this.count; e < n; e++)
        (Qn.x = this.getX(e)),
          (Qn.y = this.getY(e)),
          (Qn.z = this.getZ(e)),
          Qn.applyMatrix4(t),
          this.setXYZ(e, Qn.x, Qn.y, Qn.z);
      return this;
    }
    applyNormalMatrix(t) {
      for (let e = 0, n = this.count; e < n; e++)
        (Qn.x = this.getX(e)),
          (Qn.y = this.getY(e)),
          (Qn.z = this.getZ(e)),
          Qn.applyNormalMatrix(t),
          this.setXYZ(e, Qn.x, Qn.y, Qn.z);
      return this;
    }
    transformDirection(t) {
      for (let e = 0, n = this.count; e < n; e++)
        (Qn.x = this.getX(e)),
          (Qn.y = this.getY(e)),
          (Qn.z = this.getZ(e)),
          Qn.transformDirection(t),
          this.setXYZ(e, Qn.x, Qn.y, Qn.z);
      return this;
    }
    set(t, e = 0) {
      return this.array.set(t, e), this;
    }
    getX(t) {
      return this.array[t * this.itemSize];
    }
    setX(t, e) {
      return (this.array[t * this.itemSize] = e), this;
    }
    getY(t) {
      return this.array[t * this.itemSize + 1];
    }
    setY(t, e) {
      return (this.array[t * this.itemSize + 1] = e), this;
    }
    getZ(t) {
      return this.array[t * this.itemSize + 2];
    }
    setZ(t, e) {
      return (this.array[t * this.itemSize + 2] = e), this;
    }
    getW(t) {
      return this.array[t * this.itemSize + 3];
    }
    setW(t, e) {
      return (this.array[t * this.itemSize + 3] = e), this;
    }
    setXY(t, e, n) {
      return (
        (t *= this.itemSize),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        this
      );
    }
    setXYZ(t, e, n, i) {
      return (
        (t *= this.itemSize),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        (this.array[t + 2] = i),
        this
      );
    }
    setXYZW(t, e, n, i, r) {
      return (
        (t *= this.itemSize),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        (this.array[t + 2] = i),
        (this.array[t + 3] = r),
        this
      );
    }
    onUpload(t) {
      return (this.onUploadCallback = t), this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const t = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.prototype.slice.call(this.array),
        normalized: this.normalized,
      };
      return (
        "" !== this.name && (t.name = this.name),
        this.usage !== Jt && (t.usage = this.usage),
        (0 === this.updateRange.offset && -1 === this.updateRange.count) ||
          (t.updateRange = this.updateRange),
        t
      );
    }
  }
  ti.prototype.isBufferAttribute = !0;
  class ei extends ti {
    constructor(t, e, n) {
      super(new Uint16Array(t), e, n);
    }
  }
  class ni extends ti {
    constructor(t, e, n) {
      super(new Uint32Array(t), e, n);
    }
  }
  (class extends ti {
    constructor(t, e, n) {
      super(new Uint16Array(t), e, n);
    }
  }).prototype.isFloat16BufferAttribute = !0;
  class ii extends ti {
    constructor(t, e, n) {
      super(new Float32Array(t), e, n);
    }
  }
  function ri(t) {
    if (0 === t.length) return -1 / 0;
    let e = t[0];
    for (let n = 1, i = t.length; n < i; ++n) t[n] > e && (e = t[n]);
    return e;
  }
  let si = 0;
  const ai = new tn(),
    oi = new Tn(),
    li = new Me(),
    ci = new Te(),
    hi = new Te(),
    ui = new Me();
  class di extends te {
    constructor() {
      super(),
        Object.defineProperty(this, "id", { value: si++ }),
        (this.uuid = se()),
        (this.name = ""),
        (this.type = "BufferGeometry"),
        (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.morphTargetsRelative = !1),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.drawRange = { start: 0, count: 1 / 0 }),
        (this.userData = {});
    }
    getIndex() {
      return this.index;
    }
    setIndex(t) {
      return (
        Array.isArray(t)
          ? (this.index = new (ri(t) > 65535 ? ni : ei)(t, 1))
          : (this.index = t),
        this
      );
    }
    getAttribute(t) {
      return this.attributes[t];
    }
    setAttribute(t, e) {
      return (this.attributes[t] = e), this;
    }
    deleteAttribute(t) {
      return delete this.attributes[t], this;
    }
    hasAttribute(t) {
      return void 0 !== this.attributes[t];
    }
    addGroup(t, e, n = 0) {
      this.groups.push({ start: t, count: e, materialIndex: n });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(t, e) {
      (this.drawRange.start = t), (this.drawRange.count = e);
    }
    applyMatrix4(t) {
      const e = this.attributes.position;
      void 0 !== e && (e.applyMatrix4(t), (e.needsUpdate = !0));
      const n = this.attributes.normal;
      if (void 0 !== n) {
        const e = new me().getNormalMatrix(t);
        n.applyNormalMatrix(e), (n.needsUpdate = !0);
      }
      const i = this.attributes.tangent;
      return (
        void 0 !== i && (i.transformDirection(t), (i.needsUpdate = !0)),
        null !== this.boundingBox && this.computeBoundingBox(),
        null !== this.boundingSphere && this.computeBoundingSphere(),
        this
      );
    }
    rotateX(t) {
      return ai.makeRotationX(t), this.applyMatrix4(ai), this;
    }
    rotateY(t) {
      return ai.makeRotationY(t), this.applyMatrix4(ai), this;
    }
    rotateZ(t) {
      return ai.makeRotationZ(t), this.applyMatrix4(ai), this;
    }
    translate(t, e, n) {
      return ai.makeTranslation(t, e, n), this.applyMatrix4(ai), this;
    }
    scale(t, e, n) {
      return ai.makeScale(t, e, n), this.applyMatrix4(ai), this;
    }
    lookAt(t) {
      return (
        oi.lookAt(t), oi.updateMatrix(), this.applyMatrix4(oi.matrix), this
      );
    }
    center() {
      return (
        this.computeBoundingBox(),
        this.boundingBox.getCenter(li).negate(),
        this.translate(li.x, li.y, li.z),
        this
      );
    }
    setFromPoints(t) {
      const e = [];
      for (let n = 0, i = t.length; n < i; n++) {
        const i = t[n];
        e.push(i.x, i.y, i.z || 0);
      }
      return this.setAttribute("position", new ii(e, 3)), this;
    }
    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new Te());
      const t = this.attributes.position,
        e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute)
        return (
          console.error(
            'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
            this
          ),
          void this.boundingBox.set(
            new Me(-1 / 0, -1 / 0, -1 / 0),
            new Me(1 / 0, 1 / 0, 1 / 0)
          )
        );
      if (void 0 !== t) {
        if ((this.boundingBox.setFromBufferAttribute(t), e))
          for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            ci.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (ui.addVectors(this.boundingBox.min, ci.min),
                  this.boundingBox.expandByPoint(ui),
                  ui.addVectors(this.boundingBox.max, ci.max),
                  this.boundingBox.expandByPoint(ui))
                : (this.boundingBox.expandByPoint(ci.min),
                  this.boundingBox.expandByPoint(ci.max));
          }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) ||
        isNaN(this.boundingBox.min.y) ||
        isNaN(this.boundingBox.min.z)) &&
        console.error(
          'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
          this
        );
    }
    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new je());
      const t = this.attributes.position,
        e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute)
        return (
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
            this
          ),
          void this.boundingSphere.set(new Me(), 1 / 0)
        );
      if (t) {
        const n = this.boundingSphere.center;
        if ((ci.setFromBufferAttribute(t), e))
          for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            hi.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (ui.addVectors(ci.min, hi.min),
                  ci.expandByPoint(ui),
                  ui.addVectors(ci.max, hi.max),
                  ci.expandByPoint(ui))
                : (ci.expandByPoint(hi.min), ci.expandByPoint(hi.max));
          }
        ci.getCenter(n);
        let i = 0;
        for (let e = 0, r = t.count; e < r; e++)
          ui.fromBufferAttribute(t, e),
            (i = Math.max(i, n.distanceToSquared(ui)));
        if (e)
          for (let r = 0, s = e.length; r < s; r++) {
            const s = e[r],
              a = this.morphTargetsRelative;
            for (let e = 0, r = s.count; e < r; e++)
              ui.fromBufferAttribute(s, e),
                a && (li.fromBufferAttribute(t, e), ui.add(li)),
                (i = Math.max(i, n.distanceToSquared(ui)));
          }
        (this.boundingSphere.radius = Math.sqrt(i)),
          isNaN(this.boundingSphere.radius) &&
            console.error(
              'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
              this
            );
      }
    }
    computeFaceNormals() {}
    computeTangents() {
      const t = this.index,
        e = this.attributes;
      if (
        null === t ||
        void 0 === e.position ||
        void 0 === e.normal ||
        void 0 === e.uv
      )
        return void console.error(
          "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
        );
      const n = t.array,
        i = e.position.array,
        r = e.normal.array,
        s = e.uv.array,
        a = i.length / 3;
      void 0 === e.tangent &&
        this.setAttribute("tangent", new ti(new Float32Array(4 * a), 4));
      const o = e.tangent.array,
        l = [],
        c = [];
      for (let t = 0; t < a; t++) (l[t] = new Me()), (c[t] = new Me());
      const h = new Me(),
        u = new Me(),
        d = new Me(),
        p = new pe(),
        m = new pe(),
        f = new pe(),
        g = new Me(),
        v = new Me();
      function y(t, e, n) {
        h.fromArray(i, 3 * t),
          u.fromArray(i, 3 * e),
          d.fromArray(i, 3 * n),
          p.fromArray(s, 2 * t),
          m.fromArray(s, 2 * e),
          f.fromArray(s, 2 * n),
          u.sub(h),
          d.sub(h),
          m.sub(p),
          f.sub(p);
        const r = 1 / (m.x * f.y - f.x * m.y);
        isFinite(r) &&
          (g
            .copy(u)
            .multiplyScalar(f.y)
            .addScaledVector(d, -m.y)
            .multiplyScalar(r),
          v
            .copy(d)
            .multiplyScalar(m.x)
            .addScaledVector(u, -f.x)
            .multiplyScalar(r),
          l[t].add(g),
          l[e].add(g),
          l[n].add(g),
          c[t].add(v),
          c[e].add(v),
          c[n].add(v));
      }
      let x = this.groups;
      0 === x.length && (x = [{ start: 0, count: n.length }]);
      for (let t = 0, e = x.length; t < e; ++t) {
        const e = x[t],
          i = e.start;
        for (let t = i, r = i + e.count; t < r; t += 3)
          y(n[t + 0], n[t + 1], n[t + 2]);
      }
      const _ = new Me(),
        w = new Me(),
        b = new Me(),
        M = new Me();
      function S(t) {
        b.fromArray(r, 3 * t), M.copy(b);
        const e = l[t];
        _.copy(e),
          _.sub(b.multiplyScalar(b.dot(e))).normalize(),
          w.crossVectors(M, e);
        const n = w.dot(c[t]) < 0 ? -1 : 1;
        (o[4 * t] = _.x),
          (o[4 * t + 1] = _.y),
          (o[4 * t + 2] = _.z),
          (o[4 * t + 3] = n);
      }
      for (let t = 0, e = x.length; t < e; ++t) {
        const e = x[t],
          i = e.start;
        for (let t = i, r = i + e.count; t < r; t += 3)
          S(n[t + 0]), S(n[t + 1]), S(n[t + 2]);
      }
    }
    computeVertexNormals() {
      const t = this.index,
        e = this.getAttribute("position");
      if (void 0 !== e) {
        let n = this.getAttribute("normal");
        if (void 0 === n)
          (n = new ti(new Float32Array(3 * e.count), 3)),
            this.setAttribute("normal", n);
        else for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
        const i = new Me(),
          r = new Me(),
          s = new Me(),
          a = new Me(),
          o = new Me(),
          l = new Me(),
          c = new Me(),
          h = new Me();
        if (t)
          for (let u = 0, d = t.count; u < d; u += 3) {
            const d = t.getX(u + 0),
              p = t.getX(u + 1),
              m = t.getX(u + 2);
            i.fromBufferAttribute(e, d),
              r.fromBufferAttribute(e, p),
              s.fromBufferAttribute(e, m),
              c.subVectors(s, r),
              h.subVectors(i, r),
              c.cross(h),
              a.fromBufferAttribute(n, d),
              o.fromBufferAttribute(n, p),
              l.fromBufferAttribute(n, m),
              a.add(c),
              o.add(c),
              l.add(c),
              n.setXYZ(d, a.x, a.y, a.z),
              n.setXYZ(p, o.x, o.y, o.z),
              n.setXYZ(m, l.x, l.y, l.z);
          }
        else
          for (let t = 0, a = e.count; t < a; t += 3)
            i.fromBufferAttribute(e, t + 0),
              r.fromBufferAttribute(e, t + 1),
              s.fromBufferAttribute(e, t + 2),
              c.subVectors(s, r),
              h.subVectors(i, r),
              c.cross(h),
              n.setXYZ(t + 0, c.x, c.y, c.z),
              n.setXYZ(t + 1, c.x, c.y, c.z),
              n.setXYZ(t + 2, c.x, c.y, c.z);
        this.normalizeNormals(), (n.needsUpdate = !0);
      }
    }
    merge(t, e) {
      if (!t || !t.isBufferGeometry)
        return void console.error(
          "THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
          t
        );
      void 0 === e &&
        ((e = 0),
        console.warn(
          "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
        ));
      const n = this.attributes;
      for (const i in n) {
        if (void 0 === t.attributes[i]) continue;
        const r = n[i].array,
          s = t.attributes[i],
          a = s.array,
          o = s.itemSize * e,
          l = Math.min(a.length, r.length - o);
        for (let t = 0, e = o; t < l; t++, e++) r[e] = a[t];
      }
      return this;
    }
    normalizeNormals() {
      const t = this.attributes.normal;
      for (let e = 0, n = t.count; e < n; e++)
        ui.fromBufferAttribute(t, e),
          ui.normalize(),
          t.setXYZ(e, ui.x, ui.y, ui.z);
    }
    toNonIndexed() {
      function t(t, e) {
        const n = t.array,
          i = t.itemSize,
          r = t.normalized,
          s = new n.constructor(e.length * i);
        let a = 0,
          o = 0;
        for (let t = 0, r = e.length; t < r; t++) {
          a = e[t] * i;
          for (let t = 0; t < i; t++) s[o++] = n[a++];
        }
        return new ti(s, i, r);
      }
      if (null === this.index)
        return (
          console.warn(
            "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
          ),
          this
        );
      const e = new di(),
        n = this.index.array,
        i = this.attributes;
      for (const r in i) {
        const s = t(i[r], n);
        e.setAttribute(r, s);
      }
      const r = this.morphAttributes;
      for (const i in r) {
        const s = [],
          a = r[i];
        for (let e = 0, i = a.length; e < i; e++) {
          const i = t(a[e], n);
          s.push(i);
        }
        e.morphAttributes[i] = s;
      }
      e.morphTargetsRelative = this.morphTargetsRelative;
      const s = this.groups;
      for (let t = 0, n = s.length; t < n; t++) {
        const n = s[t];
        e.addGroup(n.start, n.count, n.materialIndex);
      }
      return e;
    }
    toJSON() {
      const t = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON",
        },
      };
      if (
        ((t.uuid = this.uuid),
        (t.type = this.type),
        "" !== this.name && (t.name = this.name),
        Object.keys(this.userData).length > 0 && (t.userData = this.userData),
        void 0 !== this.parameters)
      ) {
        const e = this.parameters;
        for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
        return t;
      }
      t.data = { attributes: {} };
      const e = this.index;
      null !== e &&
        (t.data.index = {
          type: e.array.constructor.name,
          array: Array.prototype.slice.call(e.array),
        });
      const n = this.attributes;
      for (const e in n) {
        const i = n[e];
        t.data.attributes[e] = i.toJSON(t.data);
      }
      const i = {};
      let r = !1;
      for (const e in this.morphAttributes) {
        const n = this.morphAttributes[e],
          s = [];
        for (let e = 0, i = n.length; e < i; e++) {
          const i = n[e];
          s.push(i.toJSON(t.data));
        }
        s.length > 0 && ((i[e] = s), (r = !0));
      }
      r &&
        ((t.data.morphAttributes = i),
        (t.data.morphTargetsRelative = this.morphTargetsRelative));
      const s = this.groups;
      s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
      const a = this.boundingSphere;
      return (
        null !== a &&
          (t.data.boundingSphere = {
            center: a.center.toArray(),
            radius: a.radius,
          }),
        t
      );
    }
    clone() {
      return new di().copy(this);
    }
    copy(t) {
      (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null);
      const e = {};
      this.name = t.name;
      const n = t.index;
      null !== n && this.setIndex(n.clone(e));
      const i = t.attributes;
      for (const t in i) {
        const n = i[t];
        this.setAttribute(t, n.clone(e));
      }
      const r = t.morphAttributes;
      for (const t in r) {
        const n = [],
          i = r[t];
        for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
        this.morphAttributes[t] = n;
      }
      this.morphTargetsRelative = t.morphTargetsRelative;
      const s = t.groups;
      for (let t = 0, e = s.length; t < e; t++) {
        const e = s[t];
        this.addGroup(e.start, e.count, e.materialIndex);
      }
      const a = t.boundingBox;
      null !== a && (this.boundingBox = a.clone());
      const o = t.boundingSphere;
      return (
        null !== o && (this.boundingSphere = o.clone()),
        (this.drawRange.start = t.drawRange.start),
        (this.drawRange.count = t.drawRange.count),
        (this.userData = t.userData),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  di.prototype.isBufferGeometry = !0;
  const pi = new tn(),
    mi = new Ke(),
    fi = new je(),
    gi = new Me(),
    vi = new Me(),
    yi = new Me(),
    xi = new Me(),
    _i = new Me(),
    wi = new Me(),
    bi = new Me(),
    Mi = new Me(),
    Si = new Me(),
    Ei = new pe(),
    Ti = new pe(),
    Li = new pe(),
    Ai = new Me(),
    Ri = new Me();
  class Pi extends Tn {
    constructor(t = new di(), e = new Jn()) {
      super(),
        (this.type = "Mesh"),
        (this.geometry = t),
        (this.material = e),
        this.updateMorphTargets();
    }
    copy(t) {
      return (
        super.copy(t),
        void 0 !== t.morphTargetInfluences &&
          (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
        void 0 !== t.morphTargetDictionary &&
          (this.morphTargetDictionary = Object.assign(
            {},
            t.morphTargetDictionary
          )),
        (this.material = t.material),
        (this.geometry = t.geometry),
        this
      );
    }
    updateMorphTargets() {
      const t = this.geometry;
      if (t.isBufferGeometry) {
        const e = t.morphAttributes,
          n = Object.keys(e);
        if (n.length > 0) {
          const t = e[n[0]];
          if (void 0 !== t) {
            (this.morphTargetInfluences = []),
              (this.morphTargetDictionary = {});
            for (let e = 0, n = t.length; e < n; e++) {
              const n = t[e].name || String(e);
              this.morphTargetInfluences.push(0),
                (this.morphTargetDictionary[n] = e);
            }
          }
        }
      } else {
        const e = t.morphTargets;
        void 0 !== e &&
          e.length > 0 &&
          console.error(
            "THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
          );
      }
    }
    raycast(t, e) {
      const n = this.geometry,
        i = this.material,
        r = this.matrixWorld;
      if (void 0 === i) return;
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        fi.copy(n.boundingSphere),
        fi.applyMatrix4(r),
        !1 === t.ray.intersectsSphere(fi))
      )
        return;
      if (
        (pi.copy(r).invert(),
        mi.copy(t.ray).applyMatrix4(pi),
        null !== n.boundingBox && !1 === mi.intersectsBox(n.boundingBox))
      )
        return;
      let s;
      if (n.isBufferGeometry) {
        const r = n.index,
          a = n.attributes.position,
          o = n.morphAttributes.position,
          l = n.morphTargetsRelative,
          c = n.attributes.uv,
          h = n.attributes.uv2,
          u = n.groups,
          d = n.drawRange;
        if (null !== r)
          if (Array.isArray(i))
            for (let n = 0, p = u.length; n < p; n++) {
              const p = u[n],
                m = i[p.materialIndex];
              for (
                let n = Math.max(p.start, d.start),
                  i = Math.min(p.start + p.count, d.start + d.count);
                n < i;
                n += 3
              ) {
                const i = r.getX(n),
                  u = r.getX(n + 1),
                  d = r.getX(n + 2);
                (s = Ci(this, m, t, mi, a, o, l, c, h, i, u, d)),
                  s &&
                    ((s.faceIndex = Math.floor(n / 3)),
                    (s.face.materialIndex = p.materialIndex),
                    e.push(s));
              }
            }
          else {
            for (
              let n = Math.max(0, d.start),
                u = Math.min(r.count, d.start + d.count);
              n < u;
              n += 3
            ) {
              const u = r.getX(n),
                d = r.getX(n + 1),
                p = r.getX(n + 2);
              (s = Ci(this, i, t, mi, a, o, l, c, h, u, d, p)),
                s && ((s.faceIndex = Math.floor(n / 3)), e.push(s));
            }
          }
        else if (void 0 !== a)
          if (Array.isArray(i))
            for (let n = 0, r = u.length; n < r; n++) {
              const r = u[n],
                p = i[r.materialIndex];
              for (
                let n = Math.max(r.start, d.start),
                  i = Math.min(r.start + r.count, d.start + d.count);
                n < i;
                n += 3
              ) {
                (s = Ci(this, p, t, mi, a, o, l, c, h, n, n + 1, n + 2)),
                  s &&
                    ((s.faceIndex = Math.floor(n / 3)),
                    (s.face.materialIndex = r.materialIndex),
                    e.push(s));
              }
            }
          else {
            for (
              let n = Math.max(0, d.start),
                r = Math.min(a.count, d.start + d.count);
              n < r;
              n += 3
            ) {
              (s = Ci(this, i, t, mi, a, o, l, c, h, n, n + 1, n + 2)),
                s && ((s.faceIndex = Math.floor(n / 3)), e.push(s));
            }
          }
      } else
        n.isGeometry &&
          console.error(
            "THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
          );
    }
  }
  function Ci(t, e, n, i, r, s, a, o, l, c, h, u) {
    gi.fromBufferAttribute(r, c),
      vi.fromBufferAttribute(r, h),
      yi.fromBufferAttribute(r, u);
    const d = t.morphTargetInfluences;
    if (e.morphTargets && s && d) {
      bi.set(0, 0, 0), Mi.set(0, 0, 0), Si.set(0, 0, 0);
      for (let t = 0, e = s.length; t < e; t++) {
        const e = d[t],
          n = s[t];
        0 !== e &&
          (xi.fromBufferAttribute(n, c),
          _i.fromBufferAttribute(n, h),
          wi.fromBufferAttribute(n, u),
          a
            ? (bi.addScaledVector(xi, e),
              Mi.addScaledVector(_i, e),
              Si.addScaledVector(wi, e))
            : (bi.addScaledVector(xi.sub(gi), e),
              Mi.addScaledVector(_i.sub(vi), e),
              Si.addScaledVector(wi.sub(yi), e)));
      }
      gi.add(bi), vi.add(Mi), yi.add(Si);
    }
    t.isSkinnedMesh &&
      e.skinning &&
      (t.boneTransform(c, gi), t.boneTransform(h, vi), t.boneTransform(u, yi));
    const p = (function (t, e, n, i, r, s, a, o) {
      let l;
      if (
        ((l =
          1 === e.side
            ? i.intersectTriangle(a, s, r, !0, o)
            : i.intersectTriangle(r, s, a, 2 !== e.side, o)),
        null === l)
      )
        return null;
      Ri.copy(o), Ri.applyMatrix4(t.matrixWorld);
      const c = n.ray.origin.distanceTo(Ri);
      return c < n.near || c > n.far
        ? null
        : { distance: c, point: Ri.clone(), object: t };
    })(t, e, n, i, gi, vi, yi, Ai);
    if (p) {
      o &&
        (Ei.fromBufferAttribute(o, c),
        Ti.fromBufferAttribute(o, h),
        Li.fromBufferAttribute(o, u),
        (p.uv = Gn.getUV(Ai, gi, vi, yi, Ei, Ti, Li, new pe()))),
        l &&
          (Ei.fromBufferAttribute(l, c),
          Ti.fromBufferAttribute(l, h),
          Li.fromBufferAttribute(l, u),
          (p.uv2 = Gn.getUV(Ai, gi, vi, yi, Ei, Ti, Li, new pe())));
      const t = { a: c, b: h, c: u, normal: new Me(), materialIndex: 0 };
      Gn.getNormal(gi, vi, yi, t.normal), (p.face = t);
    }
    return p;
  }
  Pi.prototype.isMesh = !0;
  class Ii extends di {
    constructor(t = 1, e = 1, n = 1, i = 1, r = 1, s = 1) {
      super(),
        (this.type = "BoxGeometry"),
        (this.parameters = {
          width: t,
          height: e,
          depth: n,
          widthSegments: i,
          heightSegments: r,
          depthSegments: s,
        });
      const a = this;
      (i = Math.floor(i)), (r = Math.floor(r)), (s = Math.floor(s));
      const o = [],
        l = [],
        c = [],
        h = [];
      let u = 0,
        d = 0;
      function p(t, e, n, i, r, s, p, m, f, g, v) {
        const y = s / f,
          x = p / g,
          _ = s / 2,
          w = p / 2,
          b = m / 2,
          M = f + 1,
          S = g + 1;
        let E = 0,
          T = 0;
        const L = new Me();
        for (let s = 0; s < S; s++) {
          const a = s * x - w;
          for (let o = 0; o < M; o++) {
            const u = o * y - _;
            (L[t] = u * i),
              (L[e] = a * r),
              (L[n] = b),
              l.push(L.x, L.y, L.z),
              (L[t] = 0),
              (L[e] = 0),
              (L[n] = m > 0 ? 1 : -1),
              c.push(L.x, L.y, L.z),
              h.push(o / f),
              h.push(1 - s / g),
              (E += 1);
          }
        }
        for (let t = 0; t < g; t++)
          for (let e = 0; e < f; e++) {
            const n = u + e + M * t,
              i = u + e + M * (t + 1),
              r = u + (e + 1) + M * (t + 1),
              s = u + (e + 1) + M * t;
            o.push(n, i, s), o.push(i, r, s), (T += 6);
          }
        a.addGroup(d, T, v), (d += T), (u += E);
      }
      p("z", "y", "x", -1, -1, n, e, t, s, r, 0),
        p("z", "y", "x", 1, -1, n, e, -t, s, r, 1),
        p("x", "z", "y", 1, 1, t, n, e, i, s, 2),
        p("x", "z", "y", 1, -1, t, n, -e, i, s, 3),
        p("x", "y", "z", 1, -1, t, e, n, i, r, 4),
        p("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
        this.setIndex(o),
        this.setAttribute("position", new ii(l, 3)),
        this.setAttribute("normal", new ii(c, 3)),
        this.setAttribute("uv", new ii(h, 2));
    }
  }
  function Di(t) {
    const e = {};
    for (const n in t) {
      e[n] = {};
      for (const i in t[n]) {
        const r = t[n][i];
        r &&
        (r.isColor ||
          r.isMatrix3 ||
          r.isMatrix4 ||
          r.isVector2 ||
          r.isVector3 ||
          r.isVector4 ||
          r.isTexture ||
          r.isQuaternion)
          ? (e[n][i] = r.clone())
          : Array.isArray(r)
          ? (e[n][i] = r.slice())
          : (e[n][i] = r);
      }
    }
    return e;
  }
  function Ni(t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const i = Di(t[n]);
      for (const t in i) e[t] = i[t];
    }
    return e;
  }
  const zi = { clone: Di, merge: Ni };
  class Oi extends kn {
    constructor(t) {
      super(),
        (this.type = "ShaderMaterial"),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.vertexShader =
          "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
        (this.fragmentShader =
          "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
        (this.linewidth = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.lights = !1),
        (this.clipping = !1),
        (this.skinning = !1),
        (this.morphTargets = !1),
        (this.morphNormals = !1),
        (this.extensions = {
          derivatives: !1,
          fragDepth: !1,
          drawBuffers: !1,
          shaderTextureLOD: !1,
        }),
        (this.defaultAttributeValues = {
          color: [1, 1, 1],
          uv: [0, 0],
          uv2: [0, 0],
        }),
        (this.index0AttributeName = void 0),
        (this.uniformsNeedUpdate = !1),
        (this.glslVersion = null),
        void 0 !== t &&
          (void 0 !== t.attributes &&
            console.error(
              "THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."
            ),
          this.setValues(t));
    }
    copy(t) {
      return (
        super.copy(t),
        (this.fragmentShader = t.fragmentShader),
        (this.vertexShader = t.vertexShader),
        (this.uniforms = Di(t.uniforms)),
        (this.defines = Object.assign({}, t.defines)),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.lights = t.lights),
        (this.clipping = t.clipping),
        (this.skinning = t.skinning),
        (this.morphTargets = t.morphTargets),
        (this.morphNormals = t.morphNormals),
        (this.extensions = Object.assign({}, t.extensions)),
        (this.glslVersion = t.glslVersion),
        this
      );
    }
    toJSON(t) {
      const e = super.toJSON(t);
      (e.glslVersion = this.glslVersion), (e.uniforms = {});
      for (const n in this.uniforms) {
        const i = this.uniforms[n].value;
        i && i.isTexture
          ? (e.uniforms[n] = { type: "t", value: i.toJSON(t).uuid })
          : i && i.isColor
          ? (e.uniforms[n] = { type: "c", value: i.getHex() })
          : i && i.isVector2
          ? (e.uniforms[n] = { type: "v2", value: i.toArray() })
          : i && i.isVector3
          ? (e.uniforms[n] = { type: "v3", value: i.toArray() })
          : i && i.isVector4
          ? (e.uniforms[n] = { type: "v4", value: i.toArray() })
          : i && i.isMatrix3
          ? (e.uniforms[n] = { type: "m3", value: i.toArray() })
          : i && i.isMatrix4
          ? (e.uniforms[n] = { type: "m4", value: i.toArray() })
          : (e.uniforms[n] = { value: i });
      }
      Object.keys(this.defines).length > 0 && (e.defines = this.defines),
        (e.vertexShader = this.vertexShader),
        (e.fragmentShader = this.fragmentShader);
      const n = {};
      for (const t in this.extensions) !0 === this.extensions[t] && (n[t] = !0);
      return Object.keys(n).length > 0 && (e.extensions = n), e;
    }
  }
  Oi.prototype.isShaderMaterial = !0;
  class Bi extends Tn {
    constructor() {
      super(),
        (this.type = "Camera"),
        (this.matrixWorldInverse = new tn()),
        (this.projectionMatrix = new tn()),
        (this.projectionMatrixInverse = new tn());
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        this.matrixWorldInverse.copy(t.matrixWorldInverse),
        this.projectionMatrix.copy(t.projectionMatrix),
        this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
        this
      );
    }
    getWorldDirection(t) {
      void 0 === t &&
        (console.warn(
          "THREE.Camera: .getWorldDirection() target is now required"
        ),
        (t = new Me())),
        this.updateWorldMatrix(!0, !1);
      const e = this.matrixWorld.elements;
      return t.set(-e[8], -e[9], -e[10]).normalize();
    }
    updateMatrixWorld(t) {
      super.updateMatrixWorld(t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(t, e) {
      super.updateWorldMatrix(t, e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  Bi.prototype.isCamera = !0;
  class Fi extends Bi {
    constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
      super(),
        (this.type = "PerspectiveCamera"),
        (this.fov = t),
        (this.zoom = 1),
        (this.near = n),
        (this.far = i),
        (this.focus = 10),
        (this.aspect = e),
        (this.view = null),
        (this.filmGauge = 35),
        (this.filmOffset = 0),
        this.updateProjectionMatrix();
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        (this.fov = t.fov),
        (this.zoom = t.zoom),
        (this.near = t.near),
        (this.far = t.far),
        (this.focus = t.focus),
        (this.aspect = t.aspect),
        (this.view = null === t.view ? null : Object.assign({}, t.view)),
        (this.filmGauge = t.filmGauge),
        (this.filmOffset = t.filmOffset),
        this
      );
    }
    setFocalLength(t) {
      const e = (0.5 * this.getFilmHeight()) / t;
      (this.fov = 2 * re * Math.atan(e)), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const t = Math.tan(0.5 * ie * this.fov);
      return (0.5 * this.getFilmHeight()) / t;
    }
    getEffectiveFOV() {
      return 2 * re * Math.atan(Math.tan(0.5 * ie * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    setViewOffset(t, e, n, i, r, s) {
      (this.aspect = t / e),
        null === this.view &&
          (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1,
          }),
        (this.view.enabled = !0),
        (this.view.fullWidth = t),
        (this.view.fullHeight = e),
        (this.view.offsetX = n),
        (this.view.offsetY = i),
        (this.view.width = r),
        (this.view.height = s),
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t = this.near;
      let e = (t * Math.tan(0.5 * ie * this.fov)) / this.zoom,
        n = 2 * e,
        i = this.aspect * n,
        r = -0.5 * i;
      const s = this.view;
      if (null !== this.view && this.view.enabled) {
        const t = s.fullWidth,
          a = s.fullHeight;
        (r += (s.offsetX * i) / t),
          (e -= (s.offsetY * n) / a),
          (i *= s.width / t),
          (n *= s.height / a);
      }
      const a = this.filmOffset;
      0 !== a && (r += (t * a) / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        (e.object.fov = this.fov),
        (e.object.zoom = this.zoom),
        (e.object.near = this.near),
        (e.object.far = this.far),
        (e.object.focus = this.focus),
        (e.object.aspect = this.aspect),
        null !== this.view && (e.object.view = Object.assign({}, this.view)),
        (e.object.filmGauge = this.filmGauge),
        (e.object.filmOffset = this.filmOffset),
        e
      );
    }
  }
  Fi.prototype.isPerspectiveCamera = !0;
  const Hi = 90;
  class Ui extends Tn {
    constructor(t, e, n) {
      if (
        (super(), (this.type = "CubeCamera"), !0 !== n.isWebGLCubeRenderTarget)
      )
        return void console.error(
          "THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."
        );
      this.renderTarget = n;
      const i = new Fi(Hi, 1, t, e);
      (i.layers = this.layers),
        i.up.set(0, -1, 0),
        i.lookAt(new Me(1, 0, 0)),
        this.add(i);
      const r = new Fi(Hi, 1, t, e);
      (r.layers = this.layers),
        r.up.set(0, -1, 0),
        r.lookAt(new Me(-1, 0, 0)),
        this.add(r);
      const s = new Fi(Hi, 1, t, e);
      (s.layers = this.layers),
        s.up.set(0, 0, 1),
        s.lookAt(new Me(0, 1, 0)),
        this.add(s);
      const a = new Fi(Hi, 1, t, e);
      (a.layers = this.layers),
        a.up.set(0, 0, -1),
        a.lookAt(new Me(0, -1, 0)),
        this.add(a);
      const o = new Fi(Hi, 1, t, e);
      (o.layers = this.layers),
        o.up.set(0, -1, 0),
        o.lookAt(new Me(0, 0, 1)),
        this.add(o);
      const l = new Fi(Hi, 1, t, e);
      (l.layers = this.layers),
        l.up.set(0, -1, 0),
        l.lookAt(new Me(0, 0, -1)),
        this.add(l);
    }
    update(t, e) {
      null === this.parent && this.updateMatrixWorld();
      const n = this.renderTarget,
        [i, r, s, a, o, l] = this.children,
        c = t.xr.enabled,
        h = t.getRenderTarget();
      t.xr.enabled = !1;
      const u = n.texture.generateMipmaps;
      (n.texture.generateMipmaps = !1),
        t.setRenderTarget(n, 0),
        t.render(e, i),
        t.setRenderTarget(n, 1),
        t.render(e, r),
        t.setRenderTarget(n, 2),
        t.render(e, s),
        t.setRenderTarget(n, 3),
        t.render(e, a),
        t.setRenderTarget(n, 4),
        t.render(e, o),
        (n.texture.generateMipmaps = u),
        t.setRenderTarget(n, 5),
        t.render(e, l),
        t.setRenderTarget(h),
        (t.xr.enabled = c);
    }
  }
  class Gi extends ye {
    constructor(t, e, n, i, r, s, a, o, l, c) {
      super(
        (t = void 0 !== t ? t : []),
        (e = void 0 !== e ? e : 301),
        n,
        i,
        r,
        s,
        (a = void 0 !== a ? a : Ft),
        o,
        l,
        c
      ),
        (this._needsFlipEnvMap = !0),
        (this.flipY = !1);
    }
    get images() {
      return this.image;
    }
    set images(t) {
      this.image = t;
    }
  }
  Gi.prototype.isCubeTexture = !0;
  class Vi extends we {
    constructor(t, e, n) {
      Number.isInteger(e) &&
        (console.warn(
          "THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"
        ),
        (e = n)),
        super(t, t, e),
        (e = e || {}),
        (this.texture = new Gi(
          void 0,
          e.mapping,
          e.wrapS,
          e.wrapT,
          e.magFilter,
          e.minFilter,
          e.format,
          e.type,
          e.anisotropy,
          e.encoding
        )),
        (this.texture.generateMipmaps =
          void 0 !== e.generateMipmaps && e.generateMipmaps),
        (this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : Pt),
        (this.texture._needsFlipEnvMap = !1);
    }
    fromEquirectangularTexture(t, e) {
      (this.texture.type = e.type),
        (this.texture.format = Ht),
        (this.texture.encoding = e.encoding),
        (this.texture.generateMipmaps = e.generateMipmaps),
        (this.texture.minFilter = e.minFilter),
        (this.texture.magFilter = e.magFilter);
      const n = {
          uniforms: { tEquirect: { value: null } },
          vertexShader:
            "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
          fragmentShader:
            "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
        },
        i = new Ii(5, 5, 5),
        r = new Oi({
          name: "CubemapFromEquirect",
          uniforms: Di(n.uniforms),
          vertexShader: n.vertexShader,
          fragmentShader: n.fragmentShader,
          side: 1,
          blending: 0,
        });
      r.uniforms.tEquirect.value = e;
      const s = new Pi(i, r),
        a = e.minFilter;
      e.minFilter === Ct && (e.minFilter = Pt);
      return (
        new Ui(1, 10, this).update(t, s),
        (e.minFilter = a),
        s.geometry.dispose(),
        s.material.dispose(),
        this
      );
    }
    clear(t, e, n, i) {
      const r = t.getRenderTarget();
      for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, n, i);
      t.setRenderTarget(r);
    }
  }
  Vi.prototype.isWebGLCubeRenderTarget = !0;
  class ki extends ye {
    constructor(t, e, n, i, r, s, a, o, l, c, h, u) {
      super(null, s, a, o, l, c, i, r, h, u),
        (this.image = { data: t || null, width: e || 1, height: n || 1 }),
        (this.magFilter = void 0 !== l ? l : Rt),
        (this.minFilter = void 0 !== c ? c : Rt),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1),
        (this.needsUpdate = !0);
    }
  }
  ki.prototype.isDataTexture = !0;
  const Wi = new je(),
    ji = new Me();
  class Xi {
    constructor(
      t = new Pn(),
      e = new Pn(),
      n = new Pn(),
      i = new Pn(),
      r = new Pn(),
      s = new Pn()
    ) {
      this.planes = [t, e, n, i, r, s];
    }
    set(t, e, n, i, r, s) {
      const a = this.planes;
      return (
        a[0].copy(t),
        a[1].copy(e),
        a[2].copy(n),
        a[3].copy(i),
        a[4].copy(r),
        a[5].copy(s),
        this
      );
    }
    copy(t) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
      return this;
    }
    setFromProjectionMatrix(t) {
      const e = this.planes,
        n = t.elements,
        i = n[0],
        r = n[1],
        s = n[2],
        a = n[3],
        o = n[4],
        l = n[5],
        c = n[6],
        h = n[7],
        u = n[8],
        d = n[9],
        p = n[10],
        m = n[11],
        f = n[12],
        g = n[13],
        v = n[14],
        y = n[15];
      return (
        e[0].setComponents(a - i, h - o, m - u, y - f).normalize(),
        e[1].setComponents(a + i, h + o, m + u, y + f).normalize(),
        e[2].setComponents(a + r, h + l, m + d, y + g).normalize(),
        e[3].setComponents(a - r, h - l, m - d, y - g).normalize(),
        e[4].setComponents(a - s, h - c, m - p, y - v).normalize(),
        e[5].setComponents(a + s, h + c, m + p, y + v).normalize(),
        this
      );
    }
    intersectsObject(t) {
      const e = t.geometry;
      return (
        null === e.boundingSphere && e.computeBoundingSphere(),
        Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
        this.intersectsSphere(Wi)
      );
    }
    intersectsSprite(t) {
      return (
        Wi.center.set(0, 0, 0),
        (Wi.radius = 0.7071067811865476),
        Wi.applyMatrix4(t.matrixWorld),
        this.intersectsSphere(Wi)
      );
    }
    intersectsSphere(t) {
      const e = this.planes,
        n = t.center,
        i = -t.radius;
      for (let t = 0; t < 6; t++) {
        if (e[t].distanceToPoint(n) < i) return !1;
      }
      return !0;
    }
    intersectsBox(t) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) {
        const i = e[n];
        if (
          ((ji.x = i.normal.x > 0 ? t.max.x : t.min.x),
          (ji.y = i.normal.y > 0 ? t.max.y : t.min.y),
          (ji.z = i.normal.z > 0 ? t.max.z : t.min.z),
          i.distanceToPoint(ji) < 0)
        )
          return !1;
      }
      return !0;
    }
    containsPoint(t) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
      return !0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  function qi() {
    let t = null,
      e = !1,
      n = null,
      i = null;
    function r(e, s) {
      n(e, s), (i = t.requestAnimationFrame(r));
    }
    return {
      start: function () {
        !0 !== e && null !== n && ((i = t.requestAnimationFrame(r)), (e = !0));
      },
      stop: function () {
        t.cancelAnimationFrame(i), (e = !1);
      },
      setAnimationLoop: function (t) {
        n = t;
      },
      setContext: function (e) {
        t = e;
      },
    };
  }
  function Yi(t, e) {
    const n = e.isWebGL2,
      i = new WeakMap();
    return {
      get: function (t) {
        return t.isInterleavedBufferAttribute && (t = t.data), i.get(t);
      },
      remove: function (e) {
        e.isInterleavedBufferAttribute && (e = e.data);
        const n = i.get(e);
        n && (t.deleteBuffer(n.buffer), i.delete(e));
      },
      update: function (e, r) {
        if (e.isGLBufferAttribute) {
          const t = i.get(e);
          return void (
            (!t || t.version < e.version) &&
            i.set(e, {
              buffer: e.buffer,
              type: e.type,
              bytesPerElement: e.elementSize,
              version: e.version,
            })
          );
        }
        e.isInterleavedBufferAttribute && (e = e.data);
        const s = i.get(e);
        void 0 === s
          ? i.set(
              e,
              (function (e, i) {
                const r = e.array,
                  s = e.usage,
                  a = t.createBuffer();
                t.bindBuffer(i, a), t.bufferData(i, r, s), e.onUploadCallback();
                let o = 5126;
                return (
                  r instanceof Float32Array
                    ? (o = 5126)
                    : r instanceof Float64Array
                    ? console.warn(
                        "THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."
                      )
                    : r instanceof Uint16Array
                    ? e.isFloat16BufferAttribute
                      ? n
                        ? (o = 5131)
                        : console.warn(
                            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
                          )
                      : (o = 5123)
                    : r instanceof Int16Array
                    ? (o = 5122)
                    : r instanceof Uint32Array
                    ? (o = 5125)
                    : r instanceof Int32Array
                    ? (o = 5124)
                    : r instanceof Int8Array
                    ? (o = 5120)
                    : r instanceof Uint8Array && (o = 5121),
                  {
                    buffer: a,
                    type: o,
                    bytesPerElement: r.BYTES_PER_ELEMENT,
                    version: e.version,
                  }
                );
              })(e, r)
            )
          : s.version < e.version &&
            (!(function (e, i, r) {
              const s = i.array,
                a = i.updateRange;
              t.bindBuffer(r, e),
                -1 === a.count
                  ? t.bufferSubData(r, 0, s)
                  : (n
                      ? t.bufferSubData(
                          r,
                          a.offset * s.BYTES_PER_ELEMENT,
                          s,
                          a.offset,
                          a.count
                        )
                      : t.bufferSubData(
                          r,
                          a.offset * s.BYTES_PER_ELEMENT,
                          s.subarray(a.offset, a.offset + a.count)
                        ),
                    (a.count = -1));
            })(s.buffer, e, r),
            (s.version = e.version));
      },
    };
  }
  class Zi extends di {
    constructor(t = 1, e = 1, n = 1, i = 1) {
      super(),
        (this.type = "PlaneGeometry"),
        (this.parameters = {
          width: t,
          height: e,
          widthSegments: n,
          heightSegments: i,
        });
      const r = t / 2,
        s = e / 2,
        a = Math.floor(n),
        o = Math.floor(i),
        l = a + 1,
        c = o + 1,
        h = t / a,
        u = e / o,
        d = [],
        p = [],
        m = [],
        f = [];
      for (let t = 0; t < c; t++) {
        const e = t * u - s;
        for (let n = 0; n < l; n++) {
          const i = n * h - r;
          p.push(i, -e, 0), m.push(0, 0, 1), f.push(n / a), f.push(1 - t / o);
        }
      }
      for (let t = 0; t < o; t++)
        for (let e = 0; e < a; e++) {
          const n = e + l * t,
            i = e + l * (t + 1),
            r = e + 1 + l * (t + 1),
            s = e + 1 + l * t;
          d.push(n, i, s), d.push(i, r, s);
        }
      this.setIndex(d),
        this.setAttribute("position", new ii(p, 3)),
        this.setAttribute("normal", new ii(m, 3)),
        this.setAttribute("uv", new ii(f, 2));
    }
  }
  const $i = {
      alphamap_fragment:
        "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
      alphamap_pars_fragment:
        "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
      alphatest_fragment:
        "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
      aomap_fragment:
        "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
      aomap_pars_fragment:
        "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
      begin_vertex: "vec3 transformed = vec3( position );",
      beginnormal_vertex:
        "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
      bsdfs:
        "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
      bumpmap_pars_fragment:
        "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
      clipping_planes_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
      clipping_planes_pars_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
      clipping_planes_pars_vertex:
        "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
      clipping_planes_vertex:
        "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
      color_fragment:
        "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
      color_pars_fragment:
        "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
      color_pars_vertex:
        "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
      color_vertex:
        "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
      common:
        "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
      cube_uv_reflection_fragment:
        "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
      defaultnormal_vertex:
        "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
      displacementmap_pars_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
      displacementmap_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
      emissivemap_fragment:
        "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
      emissivemap_pars_fragment:
        "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
      encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
      encodings_pars_fragment:
        "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
      envmap_fragment:
        "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
      envmap_common_pars_fragment:
        "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
      envmap_pars_fragment:
        "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
      envmap_pars_vertex:
        "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
      envmap_physical_pars_fragment:
        "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
      envmap_vertex:
        "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
      fog_vertex: "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif",
      fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
      fog_fragment:
        "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
      fog_pars_fragment:
        "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
      gradientmap_pars_fragment:
        "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
      lightmap_fragment:
        "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
      lightmap_pars_fragment:
        "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
      lights_lambert_vertex:
        "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
      lights_pars_begin:
        "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
      lights_toon_fragment:
        "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
      lights_toon_pars_fragment:
        "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
      lights_phong_fragment:
        "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
      lights_phong_pars_fragment:
        "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
      lights_physical_fragment:
        "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
      lights_physical_pars_fragment:
        "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
      lights_fragment_begin:
        "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
      lights_fragment_maps:
        "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
      lights_fragment_end:
        "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
      logdepthbuf_fragment:
        "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
      logdepthbuf_pars_fragment:
        "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
      logdepthbuf_pars_vertex:
        "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
      logdepthbuf_vertex:
        "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
      map_fragment:
        "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
      map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
      map_particle_fragment:
        "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
      map_particle_pars_fragment:
        "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
      metalnessmap_fragment:
        "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
      metalnessmap_pars_fragment:
        "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
      morphnormal_vertex:
        "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
      morphtarget_pars_vertex:
        "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
      morphtarget_vertex:
        "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
      normal_fragment_begin:
        "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
      normal_fragment_maps:
        "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
      normalmap_pars_fragment:
        "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
      clearcoat_normal_fragment_begin:
        "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
      clearcoat_normal_fragment_maps:
        "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
      clearcoat_pars_fragment:
        "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
      packing:
        "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
      premultiplied_alpha_fragment:
        "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
      project_vertex:
        "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
      dithering_fragment:
        "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
      dithering_pars_fragment:
        "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
      roughnessmap_fragment:
        "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
      roughnessmap_pars_fragment:
        "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
      shadowmap_pars_fragment:
        "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
      shadowmap_pars_vertex:
        "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
      shadowmap_vertex:
        "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
      shadowmask_pars_fragment:
        "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
      skinbase_vertex:
        "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
      skinning_pars_vertex:
        "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
      skinning_vertex:
        "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
      skinnormal_vertex:
        "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
      specularmap_fragment:
        "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
      specularmap_pars_fragment:
        "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
      tonemapping_fragment:
        "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
      tonemapping_pars_fragment:
        "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
      transmissionmap_fragment:
        "#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif",
      transmissionmap_pars_fragment:
        "#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif",
      uv_pars_fragment:
        "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
      uv_pars_vertex:
        "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
      uv_vertex:
        "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
      uv2_pars_fragment:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
      uv2_pars_vertex:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
      uv2_vertex:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
      worldpos_vertex:
        "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
      background_frag:
        "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      background_vert:
        "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
      cube_frag:
        "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      cube_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
      depth_frag:
        "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
      depth_vert:
        "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
      distanceRGBA_frag:
        "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
      distanceRGBA_vert:
        "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
      equirect_frag:
        "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      equirect_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
      linedashed_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
      linedashed_vert:
        "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
      meshbasic_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshbasic_vert:
        "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
      meshlambert_frag:
        "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshlambert_vert:
        "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshmatcap_frag:
        "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshmatcap_vert:
        "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
      meshtoon_frag:
        "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshtoon_vert:
        "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshphong_frag:
        "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshphong_vert:
        "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshphysical_frag:
        "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshphysical_vert:
        "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      normal_frag:
        "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
      normal_vert:
        "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
      points_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
      points_vert:
        "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
      shadow_frag:
        "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
      shadow_vert:
        "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      sprite_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
      sprite_vert:
        "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    },
    Ji = {
      common: {
        diffuse: { value: new $n(15658734) },
        opacity: { value: 1 },
        map: { value: null },
        uvTransform: { value: new me() },
        uv2Transform: { value: new me() },
        alphaMap: { value: null },
      },
      specularmap: { specularMap: { value: null } },
      envmap: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        reflectivity: { value: 1 },
        refractionRatio: { value: 0.98 },
        maxMipLevel: { value: 0 },
      },
      aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
      lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
      emissivemap: { emissiveMap: { value: null } },
      bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
      normalmap: {
        normalMap: { value: null },
        normalScale: { value: new pe(1, 1) },
      },
      displacementmap: {
        displacementMap: { value: null },
        displacementScale: { value: 1 },
        displacementBias: { value: 0 },
      },
      roughnessmap: { roughnessMap: { value: null } },
      metalnessmap: { metalnessMap: { value: null } },
      gradientmap: { gradientMap: { value: null } },
      fog: {
        fogDensity: { value: 25e-5 },
        fogNear: { value: 1 },
        fogFar: { value: 2e3 },
        fogColor: { value: new $n(16777215) },
      },
      lights: {
        ambientLightColor: { value: [] },
        lightProbe: { value: [] },
        directionalLights: {
          value: [],
          properties: { direction: {}, color: {} },
        },
        directionalLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        directionalShadowMap: { value: [] },
        directionalShadowMatrix: { value: [] },
        spotLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            direction: {},
            distance: {},
            coneCos: {},
            penumbraCos: {},
            decay: {},
          },
        },
        spotLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        spotShadowMap: { value: [] },
        spotShadowMatrix: { value: [] },
        pointLights: {
          value: [],
          properties: { color: {}, position: {}, decay: {}, distance: {} },
        },
        pointLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {},
          },
        },
        pointShadowMap: { value: [] },
        pointShadowMatrix: { value: [] },
        hemisphereLights: {
          value: [],
          properties: { direction: {}, skyColor: {}, groundColor: {} },
        },
        rectAreaLights: {
          value: [],
          properties: { color: {}, position: {}, width: {}, height: {} },
        },
        ltc_1: { value: null },
        ltc_2: { value: null },
      },
      points: {
        diffuse: { value: new $n(15658734) },
        opacity: { value: 1 },
        size: { value: 1 },
        scale: { value: 1 },
        map: { value: null },
        alphaMap: { value: null },
        uvTransform: { value: new me() },
      },
      sprite: {
        diffuse: { value: new $n(15658734) },
        opacity: { value: 1 },
        center: { value: new pe(0.5, 0.5) },
        rotation: { value: 0 },
        map: { value: null },
        alphaMap: { value: null },
        uvTransform: { value: new me() },
      },
    },
    Qi = {
      basic: {
        uniforms: Ni([
          Ji.common,
          Ji.specularmap,
          Ji.envmap,
          Ji.aomap,
          Ji.lightmap,
          Ji.fog,
        ]),
        vertexShader: $i.meshbasic_vert,
        fragmentShader: $i.meshbasic_frag,
      },
      lambert: {
        uniforms: Ni([
          Ji.common,
          Ji.specularmap,
          Ji.envmap,
          Ji.aomap,
          Ji.lightmap,
          Ji.emissivemap,
          Ji.fog,
          Ji.lights,
          { emissive: { value: new $n(0) } },
        ]),
        vertexShader: $i.meshlambert_vert,
        fragmentShader: $i.meshlambert_frag,
      },
      phong: {
        uniforms: Ni([
          Ji.common,
          Ji.specularmap,
          Ji.envmap,
          Ji.aomap,
          Ji.lightmap,
          Ji.emissivemap,
          Ji.bumpmap,
          Ji.normalmap,
          Ji.displacementmap,
          Ji.fog,
          Ji.lights,
          {
            emissive: { value: new $n(0) },
            specular: { value: new $n(1118481) },
            shininess: { value: 30 },
          },
        ]),
        vertexShader: $i.meshphong_vert,
        fragmentShader: $i.meshphong_frag,
      },
      standard: {
        uniforms: Ni([
          Ji.common,
          Ji.envmap,
          Ji.aomap,
          Ji.lightmap,
          Ji.emissivemap,
          Ji.bumpmap,
          Ji.normalmap,
          Ji.displacementmap,
          Ji.roughnessmap,
          Ji.metalnessmap,
          Ji.fog,
          Ji.lights,
          {
            emissive: { value: new $n(0) },
            roughness: { value: 1 },
            metalness: { value: 0 },
            envMapIntensity: { value: 1 },
          },
        ]),
        vertexShader: $i.meshphysical_vert,
        fragmentShader: $i.meshphysical_frag,
      },
      toon: {
        uniforms: Ni([
          Ji.common,
          Ji.aomap,
          Ji.lightmap,
          Ji.emissivemap,
          Ji.bumpmap,
          Ji.normalmap,
          Ji.displacementmap,
          Ji.gradientmap,
          Ji.fog,
          Ji.lights,
          { emissive: { value: new $n(0) } },
        ]),
        vertexShader: $i.meshtoon_vert,
        fragmentShader: $i.meshtoon_frag,
      },
      matcap: {
        uniforms: Ni([
          Ji.common,
          Ji.bumpmap,
          Ji.normalmap,
          Ji.displacementmap,
          Ji.fog,
          { matcap: { value: null } },
        ]),
        vertexShader: $i.meshmatcap_vert,
        fragmentShader: $i.meshmatcap_frag,
      },
      points: {
        uniforms: Ni([Ji.points, Ji.fog]),
        vertexShader: $i.points_vert,
        fragmentShader: $i.points_frag,
      },
      dashed: {
        uniforms: Ni([
          Ji.common,
          Ji.fog,
          {
            scale: { value: 1 },
            dashSize: { value: 1 },
            totalSize: { value: 2 },
          },
        ]),
        vertexShader: $i.linedashed_vert,
        fragmentShader: $i.linedashed_frag,
      },
      depth: {
        uniforms: Ni([Ji.common, Ji.displacementmap]),
        vertexShader: $i.depth_vert,
        fragmentShader: $i.depth_frag,
      },
      normal: {
        uniforms: Ni([
          Ji.common,
          Ji.bumpmap,
          Ji.normalmap,
          Ji.displacementmap,
          { opacity: { value: 1 } },
        ]),
        vertexShader: $i.normal_vert,
        fragmentShader: $i.normal_frag,
      },
      sprite: {
        uniforms: Ni([Ji.sprite, Ji.fog]),
        vertexShader: $i.sprite_vert,
        fragmentShader: $i.sprite_frag,
      },
      background: {
        uniforms: { uvTransform: { value: new me() }, t2D: { value: null } },
        vertexShader: $i.background_vert,
        fragmentShader: $i.background_frag,
      },
      cube: {
        uniforms: Ni([Ji.envmap, { opacity: { value: 1 } }]),
        vertexShader: $i.cube_vert,
        fragmentShader: $i.cube_frag,
      },
      equirect: {
        uniforms: { tEquirect: { value: null } },
        vertexShader: $i.equirect_vert,
        fragmentShader: $i.equirect_frag,
      },
      distanceRGBA: {
        uniforms: Ni([
          Ji.common,
          Ji.displacementmap,
          {
            referencePosition: { value: new Me() },
            nearDistance: { value: 1 },
            farDistance: { value: 1e3 },
          },
        ]),
        vertexShader: $i.distanceRGBA_vert,
        fragmentShader: $i.distanceRGBA_frag,
      },
      shadow: {
        uniforms: Ni([
          Ji.lights,
          Ji.fog,
          { color: { value: new $n(0) }, opacity: { value: 1 } },
        ]),
        vertexShader: $i.shadow_vert,
        fragmentShader: $i.shadow_frag,
      },
    };
  function Ki(t, e, n, i, r) {
    const s = new $n(0);
    let a,
      o,
      l = 0,
      c = null,
      h = 0,
      u = null;
    function d(t, e) {
      n.buffers.color.setClear(t.r, t.g, t.b, e, r);
    }
    return {
      getClearColor: function () {
        return s;
      },
      setClearColor: function (t, e = 1) {
        s.set(t), (l = e), d(s, l);
      },
      getClearAlpha: function () {
        return l;
      },
      setClearAlpha: function (t) {
        (l = t), d(s, l);
      },
      render: function (n, r, p, m) {
        let f = !0 === r.isScene ? r.background : null;
        f && f.isTexture && (f = e.get(f));
        const g = t.xr,
          v = g.getSession && g.getSession();
        v && "additive" === v.environmentBlendMode && (f = null),
          null === f ? d(s, l) : f && f.isColor && (d(f, 1), (m = !0)),
          (t.autoClear || m) &&
            t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
          f && (f.isCubeTexture || 306 === f.mapping)
            ? (void 0 === o &&
                ((o = new Pi(
                  new Ii(1, 1, 1),
                  new Oi({
                    name: "BackgroundCubeMaterial",
                    uniforms: Di(Qi.cube.uniforms),
                    vertexShader: Qi.cube.vertexShader,
                    fragmentShader: Qi.cube.fragmentShader,
                    side: 1,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1,
                  })
                )),
                o.geometry.deleteAttribute("normal"),
                o.geometry.deleteAttribute("uv"),
                (o.onBeforeRender = function (t, e, n) {
                  this.matrixWorld.copyPosition(n.matrixWorld);
                }),
                Object.defineProperty(o.material, "envMap", {
                  get: function () {
                    return this.uniforms.envMap.value;
                  },
                }),
                i.update(o)),
              (o.material.uniforms.envMap.value = f),
              (o.material.uniforms.flipEnvMap.value =
                f.isCubeTexture && f._needsFlipEnvMap ? -1 : 1),
              (c === f && h === f.version && u === t.toneMapping) ||
                ((o.material.needsUpdate = !0),
                (c = f),
                (h = f.version),
                (u = t.toneMapping)),
              n.unshift(o, o.geometry, o.material, 0, 0, null))
            : f &&
              f.isTexture &&
              (void 0 === a &&
                ((a = new Pi(
                  new Zi(2, 2),
                  new Oi({
                    name: "BackgroundMaterial",
                    uniforms: Di(Qi.background.uniforms),
                    vertexShader: Qi.background.vertexShader,
                    fragmentShader: Qi.background.fragmentShader,
                    side: 0,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1,
                  })
                )),
                a.geometry.deleteAttribute("normal"),
                Object.defineProperty(a.material, "map", {
                  get: function () {
                    return this.uniforms.t2D.value;
                  },
                }),
                i.update(a)),
              (a.material.uniforms.t2D.value = f),
              !0 === f.matrixAutoUpdate && f.updateMatrix(),
              a.material.uniforms.uvTransform.value.copy(f.matrix),
              (c === f && h === f.version && u === t.toneMapping) ||
                ((a.material.needsUpdate = !0),
                (c = f),
                (h = f.version),
                (u = t.toneMapping)),
              n.unshift(a, a.geometry, a.material, 0, 0, null));
      },
    };
  }
  function tr(t, e, n, i) {
    const r = t.getParameter(34921),
      s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
      a = i.isWebGL2 || null !== s,
      o = {},
      l = d(null);
    let c = l;
    function h(e) {
      return i.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e);
    }
    function u(e) {
      return i.isWebGL2 ? t.deleteVertexArray(e) : s.deleteVertexArrayOES(e);
    }
    function d(t) {
      const e = [],
        n = [],
        i = [];
      for (let t = 0; t < r; t++) (e[t] = 0), (n[t] = 0), (i[t] = 0);
      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: e,
        enabledAttributes: n,
        attributeDivisors: i,
        object: t,
        attributes: {},
        index: null,
      };
    }
    function p() {
      const t = c.newAttributes;
      for (let e = 0, n = t.length; e < n; e++) t[e] = 0;
    }
    function m(t) {
      f(t, 0);
    }
    function f(n, r) {
      const s = c.newAttributes,
        a = c.enabledAttributes,
        o = c.attributeDivisors;
      if (
        ((s[n] = 1),
        0 === a[n] && (t.enableVertexAttribArray(n), (a[n] = 1)),
        o[n] !== r)
      ) {
        (i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[
          i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](n, r),
          (o[n] = r);
      }
    }
    function g() {
      const e = c.newAttributes,
        n = c.enabledAttributes;
      for (let i = 0, r = n.length; i < r; i++)
        n[i] !== e[i] && (t.disableVertexAttribArray(i), (n[i] = 0));
    }
    function v(e, n, r, s, a, o) {
      !0 !== i.isWebGL2 || (5124 !== r && 5125 !== r)
        ? t.vertexAttribPointer(e, n, r, s, a, o)
        : t.vertexAttribIPointer(e, n, r, a, o);
    }
    function y() {
      x(), c !== l && ((c = l), h(c.object));
    }
    function x() {
      (l.geometry = null), (l.program = null), (l.wireframe = !1);
    }
    return {
      setup: function (r, l, u, y, x) {
        let _ = !1;
        if (a) {
          const e = (function (e, n, r) {
            const a = !0 === r.wireframe;
            let l = o[e.id];
            void 0 === l && ((l = {}), (o[e.id] = l));
            let c = l[n.id];
            void 0 === c && ((c = {}), (l[n.id] = c));
            let h = c[a];
            void 0 === h &&
              ((h = d(
                i.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES()
              )),
              (c[a] = h));
            return h;
          })(y, u, l);
          c !== e && ((c = e), h(c.object)),
            (_ = (function (t, e) {
              const n = c.attributes,
                i = t.attributes;
              let r = 0;
              for (const t in i) {
                const e = n[t],
                  s = i[t];
                if (void 0 === e) return !0;
                if (e.attribute !== s) return !0;
                if (e.data !== s.data) return !0;
                r++;
              }
              return c.attributesNum !== r || c.index !== e;
            })(y, x)),
            _ &&
              (function (t, e) {
                const n = {},
                  i = t.attributes;
                let r = 0;
                for (const t in i) {
                  const e = i[t],
                    s = {};
                  (s.attribute = e),
                    e.data && (s.data = e.data),
                    (n[t] = s),
                    r++;
                }
                (c.attributes = n), (c.attributesNum = r), (c.index = e);
              })(y, x);
        } else {
          const t = !0 === l.wireframe;
          (c.geometry === y.id && c.program === u.id && c.wireframe === t) ||
            ((c.geometry = y.id),
            (c.program = u.id),
            (c.wireframe = t),
            (_ = !0));
        }
        !0 === r.isInstancedMesh && (_ = !0),
          null !== x && n.update(x, 34963),
          _ &&
            (!(function (r, s, a, o) {
              if (
                !1 === i.isWebGL2 &&
                (r.isInstancedMesh || o.isInstancedBufferGeometry) &&
                null === e.get("ANGLE_instanced_arrays")
              )
                return;
              p();
              const l = o.attributes,
                c = a.getAttributes(),
                h = s.defaultAttributeValues;
              for (const e in c) {
                const i = c[e];
                if (i >= 0) {
                  const s = l[e];
                  if (void 0 !== s) {
                    const e = s.normalized,
                      r = s.itemSize,
                      a = n.get(s);
                    if (void 0 === a) continue;
                    const l = a.buffer,
                      c = a.type,
                      h = a.bytesPerElement;
                    if (s.isInterleavedBufferAttribute) {
                      const n = s.data,
                        a = n.stride,
                        u = s.offset;
                      n && n.isInstancedInterleavedBuffer
                        ? (f(i, n.meshPerAttribute),
                          void 0 === o._maxInstanceCount &&
                            (o._maxInstanceCount =
                              n.meshPerAttribute * n.count))
                        : m(i),
                        t.bindBuffer(34962, l),
                        v(i, r, c, e, a * h, u * h);
                    } else
                      s.isInstancedBufferAttribute
                        ? (f(i, s.meshPerAttribute),
                          void 0 === o._maxInstanceCount &&
                            (o._maxInstanceCount =
                              s.meshPerAttribute * s.count))
                        : m(i),
                        t.bindBuffer(34962, l),
                        v(i, r, c, e, 0, 0);
                  } else if ("instanceMatrix" === e) {
                    const e = n.get(r.instanceMatrix);
                    if (void 0 === e) continue;
                    const s = e.buffer,
                      a = e.type;
                    f(i + 0, 1),
                      f(i + 1, 1),
                      f(i + 2, 1),
                      f(i + 3, 1),
                      t.bindBuffer(34962, s),
                      t.vertexAttribPointer(i + 0, 4, a, !1, 64, 0),
                      t.vertexAttribPointer(i + 1, 4, a, !1, 64, 16),
                      t.vertexAttribPointer(i + 2, 4, a, !1, 64, 32),
                      t.vertexAttribPointer(i + 3, 4, a, !1, 64, 48);
                  } else if ("instanceColor" === e) {
                    const e = n.get(r.instanceColor);
                    if (void 0 === e) continue;
                    const s = e.buffer,
                      a = e.type;
                    f(i, 1),
                      t.bindBuffer(34962, s),
                      t.vertexAttribPointer(i, 3, a, !1, 12, 0);
                  } else if (void 0 !== h) {
                    const n = h[e];
                    if (void 0 !== n)
                      switch (n.length) {
                        case 2:
                          t.vertexAttrib2fv(i, n);
                          break;
                        case 3:
                          t.vertexAttrib3fv(i, n);
                          break;
                        case 4:
                          t.vertexAttrib4fv(i, n);
                          break;
                        default:
                          t.vertexAttrib1fv(i, n);
                      }
                  }
                }
              }
              g();
            })(r, l, u, y),
            null !== x && t.bindBuffer(34963, n.get(x).buffer));
      },
      reset: y,
      resetDefaultState: x,
      dispose: function () {
        y();
        for (const t in o) {
          const e = o[t];
          for (const t in e) {
            const n = e[t];
            for (const t in n) u(n[t].object), delete n[t];
            delete e[t];
          }
          delete o[t];
        }
      },
      releaseStatesOfGeometry: function (t) {
        if (void 0 === o[t.id]) return;
        const e = o[t.id];
        for (const t in e) {
          const n = e[t];
          for (const t in n) u(n[t].object), delete n[t];
          delete e[t];
        }
        delete o[t.id];
      },
      releaseStatesOfProgram: function (t) {
        for (const e in o) {
          const n = o[e];
          if (void 0 === n[t.id]) continue;
          const i = n[t.id];
          for (const t in i) u(i[t].object), delete i[t];
          delete n[t.id];
        }
      },
      initAttributes: p,
      enableAttribute: m,
      disableUnusedAttributes: g,
    };
  }
  function er(t, e, n, i) {
    const r = i.isWebGL2;
    let s;
    (this.setMode = function (t) {
      s = t;
    }),
      (this.render = function (e, i) {
        t.drawArrays(s, e, i), n.update(i, s, 1);
      }),
      (this.renderInstances = function (i, a, o) {
        if (0 === o) return;
        let l, c;
        if (r) (l = t), (c = "drawArraysInstanced");
        else if (
          ((l = e.get("ANGLE_instanced_arrays")),
          (c = "drawArraysInstancedANGLE"),
          null === l)
        )
          return void console.error(
            "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
          );
        l[c](s, i, a, o), n.update(a, s, o);
      });
  }
  function nr(t, e, n) {
    let i;
    function r(e) {
      if ("highp" === e) {
        if (
          t.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
          t.getShaderPrecisionFormat(35632, 36338).precision > 0
        )
          return "highp";
        e = "mediump";
      }
      return "mediump" === e &&
        t.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
        t.getShaderPrecisionFormat(35632, 36337).precision > 0
        ? "mediump"
        : "lowp";
    }
    const s =
      ("undefined" != typeof WebGL2RenderingContext &&
        t instanceof WebGL2RenderingContext) ||
      ("undefined" != typeof WebGL2ComputeRenderingContext &&
        t instanceof WebGL2ComputeRenderingContext);
    let a = void 0 !== n.precision ? n.precision : "highp";
    const o = r(a);
    o !== a &&
      (console.warn(
        "THREE.WebGLRenderer:",
        a,
        "not supported, using",
        o,
        "instead."
      ),
      (a = o));
    const l = !0 === n.logarithmicDepthBuffer,
      c = t.getParameter(34930),
      h = t.getParameter(35660),
      u = t.getParameter(3379),
      d = t.getParameter(34076),
      p = t.getParameter(34921),
      m = t.getParameter(36347),
      f = t.getParameter(36348),
      g = t.getParameter(36349),
      v = h > 0,
      y = s || e.has("OES_texture_float");
    return {
      isWebGL2: s,
      getMaxAnisotropy: function () {
        if (void 0 !== i) return i;
        if (!0 === e.has("EXT_texture_filter_anisotropic")) {
          const n = e.get("EXT_texture_filter_anisotropic");
          i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        } else i = 0;
        return i;
      },
      getMaxPrecision: r,
      precision: a,
      logarithmicDepthBuffer: l,
      maxTextures: c,
      maxVertexTextures: h,
      maxTextureSize: u,
      maxCubemapSize: d,
      maxAttributes: p,
      maxVertexUniforms: m,
      maxVaryings: f,
      maxFragmentUniforms: g,
      vertexTextures: v,
      floatFragmentTextures: y,
      floatVertexTextures: v && y,
      maxSamples: s ? t.getParameter(36183) : 0,
    };
  }
  function ir(t) {
    const e = this;
    let n = null,
      i = 0,
      r = !1,
      s = !1;
    const a = new Pn(),
      o = new me(),
      l = { value: null, needsUpdate: !1 };
    function c() {
      l.value !== n && ((l.value = n), (l.needsUpdate = i > 0)),
        (e.numPlanes = i),
        (e.numIntersection = 0);
    }
    function h(t, n, i, r) {
      const s = null !== t ? t.length : 0;
      let c = null;
      if (0 !== s) {
        if (((c = l.value), !0 !== r || null === c)) {
          const e = i + 4 * s,
            r = n.matrixWorldInverse;
          o.getNormalMatrix(r),
            (null === c || c.length < e) && (c = new Float32Array(e));
          for (let e = 0, n = i; e !== s; ++e, n += 4)
            a.copy(t[e]).applyMatrix4(r, o),
              a.normal.toArray(c, n),
              (c[n + 3] = a.constant);
        }
        (l.value = c), (l.needsUpdate = !0);
      }
      return (e.numPlanes = s), (e.numIntersection = 0), c;
    }
    (this.uniform = l),
      (this.numPlanes = 0),
      (this.numIntersection = 0),
      (this.init = function (t, e, s) {
        const a = 0 !== t.length || e || 0 !== i || r;
        return (r = e), (n = h(t, s, 0)), (i = t.length), a;
      }),
      (this.beginShadows = function () {
        (s = !0), h(null);
      }),
      (this.endShadows = function () {
        (s = !1), c();
      }),
      (this.setState = function (e, a, o) {
        const u = e.clippingPlanes,
          d = e.clipIntersection,
          p = e.clipShadows,
          m = t.get(e);
        if (!r || null === u || 0 === u.length || (s && !p)) s ? h(null) : c();
        else {
          const t = s ? 0 : i,
            e = 4 * t;
          let r = m.clippingState || null;
          (l.value = r), (r = h(u, a, e, o));
          for (let t = 0; t !== e; ++t) r[t] = n[t];
          (m.clippingState = r),
            (this.numIntersection = d ? this.numPlanes : 0),
            (this.numPlanes += t);
        }
      });
  }
  function rr(t) {
    let e = new WeakMap();
    function n(t, e) {
      return 303 === e ? (t.mapping = 301) : 304 === e && (t.mapping = 302), t;
    }
    function i(t) {
      const n = t.target;
      n.removeEventListener("dispose", i);
      const r = e.get(n);
      void 0 !== r && (e.delete(n), r.dispose());
    }
    return {
      get: function (r) {
        if (r && r.isTexture) {
          const s = r.mapping;
          if (303 === s || 304 === s) {
            if (e.has(r)) {
              return n(e.get(r).texture, r.mapping);
            }
            {
              const s = r.image;
              if (s && s.height > 0) {
                const a = t.getRenderTarget(),
                  o = new Vi(s.height / 2);
                return (
                  o.fromEquirectangularTexture(t, r),
                  e.set(r, o),
                  t.setRenderTarget(a),
                  r.addEventListener("dispose", i),
                  n(o.texture, r.mapping)
                );
              }
              return null;
            }
          }
        }
        return r;
      },
      dispose: function () {
        e = new WeakMap();
      },
    };
  }
  function sr(t) {
    const e = {};
    function n(n) {
      if (void 0 !== e[n]) return e[n];
      let i;
      switch (n) {
        case "WEBGL_depth_texture":
          i =
            t.getExtension("WEBGL_depth_texture") ||
            t.getExtension("MOZ_WEBGL_depth_texture") ||
            t.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          i =
            t.getExtension("EXT_texture_filter_anisotropic") ||
            t.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
            t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          i =
            t.getExtension("WEBGL_compressed_texture_s3tc") ||
            t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
            t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          i =
            t.getExtension("WEBGL_compressed_texture_pvrtc") ||
            t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          i = t.getExtension(n);
      }
      return (e[n] = i), i;
    }
    return {
      has: function (t) {
        return null !== n(t);
      },
      init: function (t) {
        t.isWebGL2
          ? n("EXT_color_buffer_float")
          : (n("WEBGL_depth_texture"),
            n("OES_texture_float"),
            n("OES_texture_half_float"),
            n("OES_texture_half_float_linear"),
            n("OES_standard_derivatives"),
            n("OES_element_index_uint"),
            n("OES_vertex_array_object"),
            n("ANGLE_instanced_arrays")),
          n("OES_texture_float_linear"),
          n("EXT_color_buffer_half_float");
      },
      get: function (t) {
        const e = n(t);
        return (
          null === e &&
            console.warn(
              "THREE.WebGLRenderer: " + t + " extension not supported."
            ),
          e
        );
      },
    };
  }
  function ar(t, e, n, i) {
    const r = {},
      s = new WeakMap();
    function a(t) {
      const o = t.target;
      null !== o.index && e.remove(o.index);
      for (const t in o.attributes) e.remove(o.attributes[t]);
      o.removeEventListener("dispose", a), delete r[o.id];
      const l = s.get(o);
      l && (e.remove(l), s.delete(o)),
        i.releaseStatesOfGeometry(o),
        !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
        n.memory.geometries--;
    }
    function o(t) {
      const n = [],
        i = t.index,
        r = t.attributes.position;
      let a = 0;
      if (null !== i) {
        const t = i.array;
        a = i.version;
        for (let e = 0, i = t.length; e < i; e += 3) {
          const i = t[e + 0],
            r = t[e + 1],
            s = t[e + 2];
          n.push(i, r, r, s, s, i);
        }
      } else {
        const t = r.array;
        a = r.version;
        for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
          const t = e + 0,
            i = e + 1,
            r = e + 2;
          n.push(t, i, i, r, r, t);
        }
      }
      const o = new (ri(n) > 65535 ? ni : ei)(n, 1);
      o.version = a;
      const l = s.get(t);
      l && e.remove(l), s.set(t, o);
    }
    return {
      get: function (t, e) {
        return (
          !0 === r[e.id] ||
            (e.addEventListener("dispose", a),
            (r[e.id] = !0),
            n.memory.geometries++),
          e
        );
      },
      update: function (t) {
        const n = t.attributes;
        for (const t in n) e.update(n[t], 34962);
        const i = t.morphAttributes;
        for (const t in i) {
          const n = i[t];
          for (let t = 0, i = n.length; t < i; t++) e.update(n[t], 34962);
        }
      },
      getWireframeAttribute: function (t) {
        const e = s.get(t);
        if (e) {
          const n = t.index;
          null !== n && e.version < n.version && o(t);
        } else o(t);
        return s.get(t);
      },
    };
  }
  function or(t, e, n, i) {
    const r = i.isWebGL2;
    let s, a, o;
    (this.setMode = function (t) {
      s = t;
    }),
      (this.setIndex = function (t) {
        (a = t.type), (o = t.bytesPerElement);
      }),
      (this.render = function (e, i) {
        t.drawElements(s, i, a, e * o), n.update(i, s, 1);
      }),
      (this.renderInstances = function (i, l, c) {
        if (0 === c) return;
        let h, u;
        if (r) (h = t), (u = "drawElementsInstanced");
        else if (
          ((h = e.get("ANGLE_instanced_arrays")),
          (u = "drawElementsInstancedANGLE"),
          null === h)
        )
          return void console.error(
            "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
          );
        h[u](s, l, a, i * o, c), n.update(l, s, c);
      });
  }
  function lr(t) {
    const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return {
      memory: { geometries: 0, textures: 0 },
      render: e,
      programs: null,
      autoReset: !0,
      reset: function () {
        e.frame++,
          (e.calls = 0),
          (e.triangles = 0),
          (e.points = 0),
          (e.lines = 0);
      },
      update: function (t, n, i) {
        switch ((e.calls++, n)) {
          case 4:
            e.triangles += i * (t / 3);
            break;
          case 1:
            e.lines += i * (t / 2);
            break;
          case 3:
            e.lines += i * (t - 1);
            break;
          case 2:
            e.lines += i * t;
            break;
          case 0:
            e.points += i * t;
            break;
          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", n);
        }
      },
    };
  }
  function cr(t, e) {
    return t[0] - e[0];
  }
  function hr(t, e) {
    return Math.abs(e[1]) - Math.abs(t[1]);
  }
  function ur(t) {
    const e = {},
      n = new Float32Array(8),
      i = [];
    for (let t = 0; t < 8; t++) i[t] = [t, 0];
    return {
      update: function (r, s, a, o) {
        const l = r.morphTargetInfluences,
          c = void 0 === l ? 0 : l.length;
        let h = e[s.id];
        if (void 0 === h) {
          h = [];
          for (let t = 0; t < c; t++) h[t] = [t, 0];
          e[s.id] = h;
        }
        for (let t = 0; t < c; t++) {
          const e = h[t];
          (e[0] = t), (e[1] = l[t]);
        }
        h.sort(hr);
        for (let t = 0; t < 8; t++)
          t < c && h[t][1]
            ? ((i[t][0] = h[t][0]), (i[t][1] = h[t][1]))
            : ((i[t][0] = Number.MAX_SAFE_INTEGER), (i[t][1] = 0));
        i.sort(cr);
        const u = a.morphTargets && s.morphAttributes.position,
          d = a.morphNormals && s.morphAttributes.normal;
        let p = 0;
        for (let t = 0; t < 8; t++) {
          const e = i[t],
            r = e[0],
            a = e[1];
          r !== Number.MAX_SAFE_INTEGER && a
            ? (u &&
                s.getAttribute("morphTarget" + t) !== u[r] &&
                s.setAttribute("morphTarget" + t, u[r]),
              d &&
                s.getAttribute("morphNormal" + t) !== d[r] &&
                s.setAttribute("morphNormal" + t, d[r]),
              (n[t] = a),
              (p += a))
            : (u &&
                !0 === s.hasAttribute("morphTarget" + t) &&
                s.deleteAttribute("morphTarget" + t),
              d &&
                !0 === s.hasAttribute("morphNormal" + t) &&
                s.deleteAttribute("morphNormal" + t),
              (n[t] = 0));
        }
        const m = s.morphTargetsRelative ? 1 : 1 - p;
        o.getUniforms().setValue(t, "morphTargetBaseInfluence", m),
          o.getUniforms().setValue(t, "morphTargetInfluences", n);
      },
    };
  }
  function dr(t, e, n, i) {
    let r = new WeakMap();
    function s(t) {
      const e = t.target;
      e.removeEventListener("dispose", s),
        n.remove(e.instanceMatrix),
        null !== e.instanceColor && n.remove(e.instanceColor);
    }
    return {
      update: function (t) {
        const a = i.render.frame,
          o = t.geometry,
          l = e.get(t, o);
        return (
          r.get(l) !== a && (e.update(l), r.set(l, a)),
          t.isInstancedMesh &&
            (!1 === t.hasEventListener("dispose", s) &&
              t.addEventListener("dispose", s),
            n.update(t.instanceMatrix, 34962),
            null !== t.instanceColor && n.update(t.instanceColor, 34962)),
          l
        );
      },
      dispose: function () {
        r = new WeakMap();
      },
    };
  }
  Qi.physical = {
    uniforms: Ni([
      Qi.standard.uniforms,
      {
        clearcoat: { value: 0 },
        clearcoatMap: { value: null },
        clearcoatRoughness: { value: 0 },
        clearcoatRoughnessMap: { value: null },
        clearcoatNormalScale: { value: new pe(1, 1) },
        clearcoatNormalMap: { value: null },
        sheen: { value: new $n(0) },
        transmission: { value: 0 },
        transmissionMap: { value: null },
      },
    ]),
    vertexShader: $i.meshphysical_vert,
    fragmentShader: $i.meshphysical_frag,
  };
  class pr extends ye {
    constructor(t = null, e = 1, n = 1, i = 1) {
      super(null),
        (this.image = { data: t, width: e, height: n, depth: i }),
        (this.magFilter = Rt),
        (this.minFilter = Rt),
        (this.wrapR = Lt),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1),
        (this.needsUpdate = !0);
    }
  }
  pr.prototype.isDataTexture2DArray = !0;
  class mr extends ye {
    constructor(t = null, e = 1, n = 1, i = 1) {
      super(null),
        (this.image = { data: t, width: e, height: n, depth: i }),
        (this.magFilter = Rt),
        (this.minFilter = Rt),
        (this.wrapR = Lt),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1),
        (this.needsUpdate = !0);
    }
  }
  mr.prototype.isDataTexture3D = !0;
  const fr = new ye(),
    gr = new pr(),
    vr = new mr(),
    yr = new Gi(),
    xr = [],
    _r = [],
    wr = new Float32Array(16),
    br = new Float32Array(9),
    Mr = new Float32Array(4);
  function Sr(t, e, n) {
    const i = t[0];
    if (i <= 0 || i > 0) return t;
    const r = e * n;
    let s = xr[r];
    if ((void 0 === s && ((s = new Float32Array(r)), (xr[r] = s)), 0 !== e)) {
      i.toArray(s, 0);
      for (let i = 1, r = 0; i !== e; ++i) (r += n), t[i].toArray(s, r);
    }
    return s;
  }
  function Er(t, e) {
    if (t.length !== e.length) return !1;
    for (let n = 0, i = t.length; n < i; n++) if (t[n] !== e[n]) return !1;
    return !0;
  }
  function Tr(t, e) {
    for (let n = 0, i = e.length; n < i; n++) t[n] = e[n];
  }
  function Lr(t, e) {
    let n = _r[e];
    void 0 === n && ((n = new Int32Array(e)), (_r[e] = n));
    for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
    return n;
  }
  function Ar(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1f(this.addr, e), (n[0] = e));
  }
  function Rr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y) ||
        (t.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
    else {
      if (Er(n, e)) return;
      t.uniform2fv(this.addr, e), Tr(n, e);
    }
  }
  function Pr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
        (t.uniform3f(this.addr, e.x, e.y, e.z),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z));
    else if (void 0 !== e.r)
      (n[0] === e.r && n[1] === e.g && n[2] === e.b) ||
        (t.uniform3f(this.addr, e.r, e.g, e.b),
        (n[0] = e.r),
        (n[1] = e.g),
        (n[2] = e.b));
    else {
      if (Er(n, e)) return;
      t.uniform3fv(this.addr, e), Tr(n, e);
    }
  }
  function Cr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
        (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z),
        (n[3] = e.w));
    else {
      if (Er(n, e)) return;
      t.uniform4fv(this.addr, e), Tr(n, e);
    }
  }
  function Ir(t, e) {
    const n = this.cache,
      i = e.elements;
    if (void 0 === i) {
      if (Er(n, e)) return;
      t.uniformMatrix2fv(this.addr, !1, e), Tr(n, e);
    } else {
      if (Er(n, i)) return;
      Mr.set(i), t.uniformMatrix2fv(this.addr, !1, Mr), Tr(n, i);
    }
  }
  function Dr(t, e) {
    const n = this.cache,
      i = e.elements;
    if (void 0 === i) {
      if (Er(n, e)) return;
      t.uniformMatrix3fv(this.addr, !1, e), Tr(n, e);
    } else {
      if (Er(n, i)) return;
      br.set(i), t.uniformMatrix3fv(this.addr, !1, br), Tr(n, i);
    }
  }
  function Nr(t, e) {
    const n = this.cache,
      i = e.elements;
    if (void 0 === i) {
      if (Er(n, e)) return;
      t.uniformMatrix4fv(this.addr, !1, e), Tr(n, e);
    } else {
      if (Er(n, i)) return;
      wr.set(i), t.uniformMatrix4fv(this.addr, !1, wr), Tr(n, i);
    }
  }
  function zr(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1i(this.addr, e), (n[0] = e));
  }
  function Or(t, e) {
    const n = this.cache;
    Er(n, e) || (t.uniform2iv(this.addr, e), Tr(n, e));
  }
  function Br(t, e) {
    const n = this.cache;
    Er(n, e) || (t.uniform3iv(this.addr, e), Tr(n, e));
  }
  function Fr(t, e) {
    const n = this.cache;
    Er(n, e) || (t.uniform4iv(this.addr, e), Tr(n, e));
  }
  function Hr(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1ui(this.addr, e), (n[0] = e));
  }
  function Ur(t, e) {
    const n = this.cache;
    Er(n, e) || (t.uniform2uiv(this.addr, e), Tr(n, e));
  }
  function Gr(t, e) {
    const n = this.cache;
    Er(n, e) || (t.uniform3uiv(this.addr, e), Tr(n, e));
  }
  function Vr(t, e) {
    const n = this.cache;
    Er(n, e) || (t.uniform4uiv(this.addr, e), Tr(n, e));
  }
  function kr(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      n.safeSetTexture2D(e || fr, r);
  }
  function Wr(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      n.setTexture3D(e || vr, r);
  }
  function jr(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      n.safeSetTextureCube(e || yr, r);
  }
  function Xr(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      n.setTexture2DArray(e || gr, r);
  }
  function qr(t, e) {
    t.uniform1fv(this.addr, e);
  }
  function Yr(t, e) {
    const n = Sr(e, this.size, 2);
    t.uniform2fv(this.addr, n);
  }
  function Zr(t, e) {
    const n = Sr(e, this.size, 3);
    t.uniform3fv(this.addr, n);
  }
  function $r(t, e) {
    const n = Sr(e, this.size, 4);
    t.uniform4fv(this.addr, n);
  }
  function Jr(t, e) {
    const n = Sr(e, this.size, 4);
    t.uniformMatrix2fv(this.addr, !1, n);
  }
  function Qr(t, e) {
    const n = Sr(e, this.size, 9);
    t.uniformMatrix3fv(this.addr, !1, n);
  }
  function Kr(t, e) {
    const n = Sr(e, this.size, 16);
    t.uniformMatrix4fv(this.addr, !1, n);
  }
  function ts(t, e) {
    t.uniform1iv(this.addr, e);
  }
  function es(t, e) {
    t.uniform2iv(this.addr, e);
  }
  function ns(t, e) {
    t.uniform3iv(this.addr, e);
  }
  function is(t, e) {
    t.uniform4iv(this.addr, e);
  }
  function rs(t, e) {
    t.uniform1uiv(this.addr, e);
  }
  function ss(t, e) {
    t.uniform2uiv(this.addr, e);
  }
  function as(t, e) {
    t.uniform3uiv(this.addr, e);
  }
  function os(t, e) {
    t.uniform4uiv(this.addr, e);
  }
  function ls(t, e, n) {
    const i = e.length,
      r = Lr(n, i);
    t.uniform1iv(this.addr, r);
    for (let t = 0; t !== i; ++t) n.safeSetTexture2D(e[t] || fr, r[t]);
  }
  function cs(t, e, n) {
    const i = e.length,
      r = Lr(n, i);
    t.uniform1iv(this.addr, r);
    for (let t = 0; t !== i; ++t) n.safeSetTextureCube(e[t] || yr, r[t]);
  }
  function hs(t, e, n) {
    (this.id = t),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = (function (t) {
        switch (t) {
          case 5126:
            return Ar;
          case 35664:
            return Rr;
          case 35665:
            return Pr;
          case 35666:
            return Cr;
          case 35674:
            return Ir;
          case 35675:
            return Dr;
          case 35676:
            return Nr;
          case 5124:
          case 35670:
            return zr;
          case 35667:
          case 35671:
            return Or;
          case 35668:
          case 35672:
            return Br;
          case 35669:
          case 35673:
            return Fr;
          case 5125:
            return Hr;
          case 36294:
            return Ur;
          case 36295:
            return Gr;
          case 36296:
            return Vr;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return kr;
          case 35679:
          case 36299:
          case 36307:
            return Wr;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return jr;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return Xr;
        }
      })(e.type));
  }
  function us(t, e, n) {
    (this.id = t),
      (this.addr = n),
      (this.cache = []),
      (this.size = e.size),
      (this.setValue = (function (t) {
        switch (t) {
          case 5126:
            return qr;
          case 35664:
            return Yr;
          case 35665:
            return Zr;
          case 35666:
            return $r;
          case 35674:
            return Jr;
          case 35675:
            return Qr;
          case 35676:
            return Kr;
          case 5124:
          case 35670:
            return ts;
          case 35667:
          case 35671:
            return es;
          case 35668:
          case 35672:
            return ns;
          case 35669:
          case 35673:
            return is;
          case 5125:
            return rs;
          case 36294:
            return ss;
          case 36295:
            return as;
          case 36296:
            return os;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return ls;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return cs;
        }
      })(e.type));
  }
  function ds(t) {
    (this.id = t), (this.seq = []), (this.map = {});
  }
  (us.prototype.updateCache = function (t) {
    const e = this.cache;
    t instanceof Float32Array &&
      e.length !== t.length &&
      (this.cache = new Float32Array(t.length)),
      Tr(e, t);
  }),
    (ds.prototype.setValue = function (t, e, n) {
      const i = this.seq;
      for (let r = 0, s = i.length; r !== s; ++r) {
        const s = i[r];
        s.setValue(t, e[s.id], n);
      }
    });
  const ps = /(\w+)(\])?(\[|\.)?/g;
  function ms(t, e) {
    t.seq.push(e), (t.map[e.id] = e);
  }
  function fs(t, e, n) {
    const i = t.name,
      r = i.length;
    for (ps.lastIndex = 0; ; ) {
      const s = ps.exec(i),
        a = ps.lastIndex;
      let o = s[1];
      const l = "]" === s[2],
        c = s[3];
      if ((l && (o |= 0), void 0 === c || ("[" === c && a + 2 === r))) {
        ms(n, void 0 === c ? new hs(o, t, e) : new us(o, t, e));
        break;
      }
      {
        let t = n.map[o];
        void 0 === t && ((t = new ds(o)), ms(n, t)), (n = t);
      }
    }
  }
  function gs(t, e) {
    (this.seq = []), (this.map = {});
    const n = t.getProgramParameter(e, 35718);
    for (let i = 0; i < n; ++i) {
      const n = t.getActiveUniform(e, i);
      fs(n, t.getUniformLocation(e, n.name), this);
    }
  }
  function vs(t, e, n) {
    const i = t.createShader(e);
    return t.shaderSource(i, n), t.compileShader(i), i;
  }
  (gs.prototype.setValue = function (t, e, n, i) {
    const r = this.map[e];
    void 0 !== r && r.setValue(t, n, i);
  }),
    (gs.prototype.setOptional = function (t, e, n) {
      const i = e[n];
      void 0 !== i && this.setValue(t, n, i);
    }),
    (gs.upload = function (t, e, n, i) {
      for (let r = 0, s = e.length; r !== s; ++r) {
        const s = e[r],
          a = n[s.id];
        !1 !== a.needsUpdate && s.setValue(t, a.value, i);
      }
    }),
    (gs.seqWithValue = function (t, e) {
      const n = [];
      for (let i = 0, r = t.length; i !== r; ++i) {
        const r = t[i];
        r.id in e && n.push(r);
      }
      return n;
    });
  let ys = 0;
  function xs(t) {
    switch (t) {
      case Zt:
        return ["Linear", "( value )"];
      case 3001:
        return ["sRGB", "( value )"];
      case 3002:
        return ["RGBE", "( value )"];
      case 3004:
        return ["RGBM", "( value, 7.0 )"];
      case 3005:
        return ["RGBM", "( value, 16.0 )"];
      case 3006:
        return ["RGBD", "( value, 256.0 )"];
      case 3007:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
      case 3003:
        return ["LogLuv", "( value )"];
      default:
        return (
          console.warn("THREE.WebGLProgram: Unsupported encoding:", t),
          ["Linear", "( value )"]
        );
    }
  }
  function _s(t, e, n) {
    const i = t.getShaderParameter(e, 35713),
      r = t.getShaderInfoLog(e).trim();
    if (i && "" === r) return "";
    return (
      "THREE.WebGLShader: gl.getShaderInfoLog() " +
      n +
      "\n" +
      r +
      (function (t) {
        const e = t.split("\n");
        for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
        return e.join("\n");
      })(t.getShaderSource(e))
    );
  }
  function ws(t, e) {
    const n = xs(e);
    return (
      "vec4 " +
      t +
      "( vec4 value ) { return " +
      n[0] +
      "ToLinear" +
      n[1] +
      "; }"
    );
  }
  function bs(t, e) {
    const n = xs(e);
    return (
      "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
    );
  }
  function Ms(t, e) {
    let n;
    switch (e) {
      case 1:
        n = "Linear";
        break;
      case 2:
        n = "Reinhard";
        break;
      case 3:
        n = "OptimizedCineon";
        break;
      case 4:
        n = "ACESFilmic";
        break;
      case 5:
        n = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
          (n = "Linear");
    }
    return (
      "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
    );
  }
  function Ss(t) {
    return "" !== t;
  }
  function Es(t, e) {
    return t
      .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
      .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
      .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
      .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
      .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
      .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
      .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
      .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
  }
  function Ts(t, e) {
    return t
      .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
      .replace(
        /UNION_CLIPPING_PLANES/g,
        e.numClippingPlanes - e.numClipIntersection
      );
  }
  const Ls = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function As(t) {
    return t.replace(Ls, Rs);
  }
  function Rs(t, e) {
    const n = $i[e];
    if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
    return As(n);
  }
  const Ps =
      /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
    Cs =
      /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function Is(t) {
    return t.replace(Cs, Ns).replace(Ps, Ds);
  }
  function Ds(t, e, n, i) {
    return (
      console.warn(
        "WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."
      ),
      Ns(t, e, n, i)
    );
  }
  function Ns(t, e, n, i) {
    let r = "";
    for (let t = parseInt(e); t < parseInt(n); t++)
      r += i
        .replace(/\[\s*i\s*\]/g, "[ " + t + " ]")
        .replace(/UNROLLED_LOOP_INDEX/g, t);
    return r;
  }
  function zs(t) {
    let e =
      "precision " +
      t.precision +
      " float;\nprecision " +
      t.precision +
      " int;";
    return (
      "highp" === t.precision
        ? (e += "\n#define HIGH_PRECISION")
        : "mediump" === t.precision
        ? (e += "\n#define MEDIUM_PRECISION")
        : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"),
      e
    );
  }
  function Os(t, e, n, i) {
    const r = t.getContext(),
      s = n.defines;
    let a = n.vertexShader,
      o = n.fragmentShader;
    const l = (function (t) {
        let e = "SHADOWMAP_TYPE_BASIC";
        return (
          1 === t.shadowMapType
            ? (e = "SHADOWMAP_TYPE_PCF")
            : 2 === t.shadowMapType
            ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
            : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"),
          e
        );
      })(n),
      c = (function (t) {
        let e = "ENVMAP_TYPE_CUBE";
        if (t.envMap)
          switch (t.envMapMode) {
            case 301:
            case 302:
              e = "ENVMAP_TYPE_CUBE";
              break;
            case 306:
            case 307:
              e = "ENVMAP_TYPE_CUBE_UV";
          }
        return e;
      })(n),
      h = (function (t) {
        let e = "ENVMAP_MODE_REFLECTION";
        if (t.envMap)
          switch (t.envMapMode) {
            case 302:
            case 307:
              e = "ENVMAP_MODE_REFRACTION";
          }
        return e;
      })(n),
      u = (function (t) {
        let e = "ENVMAP_BLENDING_NONE";
        if (t.envMap)
          switch (t.combine) {
            case 0:
              e = "ENVMAP_BLENDING_MULTIPLY";
              break;
            case 1:
              e = "ENVMAP_BLENDING_MIX";
              break;
            case 2:
              e = "ENVMAP_BLENDING_ADD";
          }
        return e;
      })(n),
      d = t.gammaFactor > 0 ? t.gammaFactor : 1,
      p = n.isWebGL2
        ? ""
        : (function (t) {
            return [
              t.extensionDerivatives ||
              t.envMapCubeUV ||
              t.bumpMap ||
              t.tangentSpaceNormalMap ||
              t.clearcoatNormalMap ||
              t.flatShading ||
              "physical" === t.shaderID
                ? "#extension GL_OES_standard_derivatives : enable"
                : "",
              (t.extensionFragDepth || t.logarithmicDepthBuffer) &&
              t.rendererExtensionFragDepth
                ? "#extension GL_EXT_frag_depth : enable"
                : "",
              t.extensionDrawBuffers && t.rendererExtensionDrawBuffers
                ? "#extension GL_EXT_draw_buffers : require"
                : "",
              (t.extensionShaderTextureLOD || t.envMap) &&
              t.rendererExtensionShaderTextureLod
                ? "#extension GL_EXT_shader_texture_lod : enable"
                : "",
            ]
              .filter(Ss)
              .join("\n");
          })(n),
      m = (function (t) {
        const e = [];
        for (const n in t) {
          const i = t[n];
          !1 !== i && e.push("#define " + n + " " + i);
        }
        return e.join("\n");
      })(s),
      f = r.createProgram();
    let g,
      v,
      y = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
    n.isRawShaderMaterial
      ? ((g = [m].filter(Ss).join("\n")),
        g.length > 0 && (g += "\n"),
        (v = [p, m].filter(Ss).join("\n")),
        v.length > 0 && (v += "\n"))
      : ((g = [
          zs(n),
          "#define SHADER_NAME " + n.shaderName,
          m,
          n.instancing ? "#define USE_INSTANCING" : "",
          n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
          n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
          "#define GAMMA_FACTOR " + d,
          "#define MAX_BONES " + n.maxBones,
          n.useFog && n.fog ? "#define USE_FOG" : "",
          n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
          n.map ? "#define USE_MAP" : "",
          n.envMap ? "#define USE_ENVMAP" : "",
          n.envMap ? "#define " + h : "",
          n.lightMap ? "#define USE_LIGHTMAP" : "",
          n.aoMap ? "#define USE_AOMAP" : "",
          n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          n.bumpMap ? "#define USE_BUMPMAP" : "",
          n.normalMap ? "#define USE_NORMALMAP" : "",
          n.normalMap && n.objectSpaceNormalMap
            ? "#define OBJECTSPACE_NORMALMAP"
            : "",
          n.normalMap && n.tangentSpaceNormalMap
            ? "#define TANGENTSPACE_NORMALMAP"
            : "",
          n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          n.displacementMap && n.supportsVertexTextures
            ? "#define USE_DISPLACEMENTMAP"
            : "",
          n.specularMap ? "#define USE_SPECULARMAP" : "",
          n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          n.metalnessMap ? "#define USE_METALNESSMAP" : "",
          n.alphaMap ? "#define USE_ALPHAMAP" : "",
          n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          n.vertexTangents ? "#define USE_TANGENT" : "",
          n.vertexColors ? "#define USE_COLOR" : "",
          n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
          n.vertexUvs ? "#define USE_UV" : "",
          n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
          n.flatShading ? "#define FLAT_SHADED" : "",
          n.skinning ? "#define USE_SKINNING" : "",
          n.useVertexTexture ? "#define BONE_TEXTURE" : "",
          n.morphTargets ? "#define USE_MORPHTARGETS" : "",
          n.morphNormals && !1 === n.flatShading
            ? "#define USE_MORPHNORMALS"
            : "",
          n.doubleSided ? "#define DOUBLE_SIDED" : "",
          n.flipSided ? "#define FLIP_SIDED" : "",
          n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          n.shadowMapEnabled ? "#define " + l : "",
          n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
          n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
            ? "#define USE_LOGDEPTHBUF_EXT"
            : "",
          "uniform mat4 modelMatrix;",
          "uniform mat4 modelViewMatrix;",
          "uniform mat4 projectionMatrix;",
          "uniform mat4 viewMatrix;",
          "uniform mat3 normalMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          "#ifdef USE_INSTANCING",
          "\tattribute mat4 instanceMatrix;",
          "#endif",
          "#ifdef USE_INSTANCING_COLOR",
          "\tattribute vec3 instanceColor;",
          "#endif",
          "attribute vec3 position;",
          "attribute vec3 normal;",
          "attribute vec2 uv;",
          "#ifdef USE_TANGENT",
          "\tattribute vec4 tangent;",
          "#endif",
          "#if defined( USE_COLOR_ALPHA )",
          "\tattribute vec4 color;",
          "#elif defined( USE_COLOR )",
          "\tattribute vec3 color;",
          "#endif",
          "#ifdef USE_MORPHTARGETS",
          "\tattribute vec3 morphTarget0;",
          "\tattribute vec3 morphTarget1;",
          "\tattribute vec3 morphTarget2;",
          "\tattribute vec3 morphTarget3;",
          "\t#ifdef USE_MORPHNORMALS",
          "\t\tattribute vec3 morphNormal0;",
          "\t\tattribute vec3 morphNormal1;",
          "\t\tattribute vec3 morphNormal2;",
          "\t\tattribute vec3 morphNormal3;",
          "\t#else",
          "\t\tattribute vec3 morphTarget4;",
          "\t\tattribute vec3 morphTarget5;",
          "\t\tattribute vec3 morphTarget6;",
          "\t\tattribute vec3 morphTarget7;",
          "\t#endif",
          "#endif",
          "#ifdef USE_SKINNING",
          "\tattribute vec4 skinIndex;",
          "\tattribute vec4 skinWeight;",
          "#endif",
          "\n",
        ]
          .filter(Ss)
          .join("\n")),
        (v = [
          p,
          zs(n),
          "#define SHADER_NAME " + n.shaderName,
          m,
          n.alphaTest
            ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0")
            : "",
          "#define GAMMA_FACTOR " + d,
          n.useFog && n.fog ? "#define USE_FOG" : "",
          n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
          n.map ? "#define USE_MAP" : "",
          n.matcap ? "#define USE_MATCAP" : "",
          n.envMap ? "#define USE_ENVMAP" : "",
          n.envMap ? "#define " + c : "",
          n.envMap ? "#define " + h : "",
          n.envMap ? "#define " + u : "",
          n.lightMap ? "#define USE_LIGHTMAP" : "",
          n.aoMap ? "#define USE_AOMAP" : "",
          n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          n.bumpMap ? "#define USE_BUMPMAP" : "",
          n.normalMap ? "#define USE_NORMALMAP" : "",
          n.normalMap && n.objectSpaceNormalMap
            ? "#define OBJECTSPACE_NORMALMAP"
            : "",
          n.normalMap && n.tangentSpaceNormalMap
            ? "#define TANGENTSPACE_NORMALMAP"
            : "",
          n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          n.specularMap ? "#define USE_SPECULARMAP" : "",
          n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          n.metalnessMap ? "#define USE_METALNESSMAP" : "",
          n.alphaMap ? "#define USE_ALPHAMAP" : "",
          n.sheen ? "#define USE_SHEEN" : "",
          n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          n.vertexTangents ? "#define USE_TANGENT" : "",
          n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
          n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
          n.vertexUvs ? "#define USE_UV" : "",
          n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
          n.gradientMap ? "#define USE_GRADIENTMAP" : "",
          n.flatShading ? "#define FLAT_SHADED" : "",
          n.doubleSided ? "#define DOUBLE_SIDED" : "",
          n.flipSided ? "#define FLIP_SIDED" : "",
          n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          n.shadowMapEnabled ? "#define " + l : "",
          n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
          n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
          n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
            ? "#define USE_LOGDEPTHBUF_EXT"
            : "",
          (n.extensionShaderTextureLOD || n.envMap) &&
          n.rendererExtensionShaderTextureLod
            ? "#define TEXTURE_LOD_EXT"
            : "",
          "uniform mat4 viewMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          0 !== n.toneMapping ? "#define TONE_MAPPING" : "",
          0 !== n.toneMapping ? $i.tonemapping_pars_fragment : "",
          0 !== n.toneMapping ? Ms("toneMapping", n.toneMapping) : "",
          n.dithering ? "#define DITHERING" : "",
          $i.encodings_pars_fragment,
          n.map ? ws("mapTexelToLinear", n.mapEncoding) : "",
          n.matcap ? ws("matcapTexelToLinear", n.matcapEncoding) : "",
          n.envMap ? ws("envMapTexelToLinear", n.envMapEncoding) : "",
          n.emissiveMap
            ? ws("emissiveMapTexelToLinear", n.emissiveMapEncoding)
            : "",
          n.lightMap ? ws("lightMapTexelToLinear", n.lightMapEncoding) : "",
          bs("linearToOutputTexel", n.outputEncoding),
          n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
          "\n",
        ]
          .filter(Ss)
          .join("\n"))),
      (a = As(a)),
      (a = Es(a, n)),
      (a = Ts(a, n)),
      (o = As(o)),
      (o = Es(o, n)),
      (o = Ts(o, n)),
      (a = Is(a)),
      (o = Is(o)),
      n.isWebGL2 &&
        !0 !== n.isRawShaderMaterial &&
        ((y = "#version 300 es\n"),
        (g =
          [
            "#define attribute in",
            "#define varying out",
            "#define texture2D texture",
          ].join("\n") +
          "\n" +
          g),
        (v =
          [
            "#define varying in",
            n.glslVersion === Kt ? "" : "out highp vec4 pc_fragColor;",
            n.glslVersion === Kt ? "" : "#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth",
            "#define texture2D texture",
            "#define textureCube texture",
            "#define texture2DProj textureProj",
            "#define texture2DLodEXT textureLod",
            "#define texture2DProjLodEXT textureProjLod",
            "#define textureCubeLodEXT textureLod",
            "#define texture2DGradEXT textureGrad",
            "#define texture2DProjGradEXT textureProjGrad",
            "#define textureCubeGradEXT textureGrad",
          ].join("\n") +
          "\n" +
          v));
    const x = y + v + o,
      _ = vs(r, 35633, y + g + a),
      w = vs(r, 35632, x);
    if (
      (r.attachShader(f, _),
      r.attachShader(f, w),
      void 0 !== n.index0AttributeName
        ? r.bindAttribLocation(f, 0, n.index0AttributeName)
        : !0 === n.morphTargets && r.bindAttribLocation(f, 0, "position"),
      r.linkProgram(f),
      t.debug.checkShaderErrors)
    ) {
      const t = r.getProgramInfoLog(f).trim(),
        e = r.getShaderInfoLog(_).trim(),
        n = r.getShaderInfoLog(w).trim();
      let i = !0,
        s = !0;
      if (!1 === r.getProgramParameter(f, 35714)) {
        i = !1;
        const e = _s(r, _, "vertex"),
          n = _s(r, w, "fragment");
        console.error(
          "THREE.WebGLProgram: shader error: ",
          r.getError(),
          "35715",
          r.getProgramParameter(f, 35715),
          "gl.getProgramInfoLog",
          t,
          e,
          n
        );
      } else
        "" !== t
          ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", t)
          : ("" !== e && "" !== n) || (s = !1);
      s &&
        (this.diagnostics = {
          runnable: i,
          programLog: t,
          vertexShader: { log: e, prefix: g },
          fragmentShader: { log: n, prefix: v },
        });
    }
    let b, M;
    return (
      r.deleteShader(_),
      r.deleteShader(w),
      (this.getUniforms = function () {
        return void 0 === b && (b = new gs(r, f)), b;
      }),
      (this.getAttributes = function () {
        return (
          void 0 === M &&
            (M = (function (t, e) {
              const n = {},
                i = t.getProgramParameter(e, 35721);
              for (let r = 0; r < i; r++) {
                const i = t.getActiveAttrib(e, r).name;
                n[i] = t.getAttribLocation(e, i);
              }
              return n;
            })(r, f)),
          M
        );
      }),
      (this.destroy = function () {
        i.releaseStatesOfProgram(this),
          r.deleteProgram(f),
          (this.program = void 0);
      }),
      (this.name = n.shaderName),
      (this.id = ys++),
      (this.cacheKey = e),
      (this.usedTimes = 1),
      (this.program = f),
      (this.vertexShader = _),
      (this.fragmentShader = w),
      this
    );
  }
  function Bs(t, e, n, i, r, s) {
    const a = [],
      o = i.isWebGL2,
      l = i.logarithmicDepthBuffer,
      c = i.floatVertexTextures,
      h = i.maxVertexUniforms,
      u = i.vertexTextures;
    let d = i.precision;
    const p = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite",
      },
      m = [
        "precision",
        "isWebGL2",
        "supportsVertexTextures",
        "outputEncoding",
        "instancing",
        "instancingColor",
        "map",
        "mapEncoding",
        "matcap",
        "matcapEncoding",
        "envMap",
        "envMapMode",
        "envMapEncoding",
        "envMapCubeUV",
        "lightMap",
        "lightMapEncoding",
        "aoMap",
        "emissiveMap",
        "emissiveMapEncoding",
        "bumpMap",
        "normalMap",
        "objectSpaceNormalMap",
        "tangentSpaceNormalMap",
        "clearcoatMap",
        "clearcoatRoughnessMap",
        "clearcoatNormalMap",
        "displacementMap",
        "specularMap",
        "roughnessMap",
        "metalnessMap",
        "gradientMap",
        "alphaMap",
        "combine",
        "vertexColors",
        "vertexAlphas",
        "vertexTangents",
        "vertexUvs",
        "uvsVertexOnly",
        "fog",
        "useFog",
        "fogExp2",
        "flatShading",
        "sizeAttenuation",
        "logarithmicDepthBuffer",
        "skinning",
        "maxBones",
        "useVertexTexture",
        "morphTargets",
        "morphNormals",
        "premultipliedAlpha",
        "numDirLights",
        "numPointLights",
        "numSpotLights",
        "numHemiLights",
        "numRectAreaLights",
        "numDirLightShadows",
        "numPointLightShadows",
        "numSpotLightShadows",
        "shadowMapEnabled",
        "shadowMapType",
        "toneMapping",
        "physicallyCorrectLights",
        "alphaTest",
        "doubleSided",
        "flipSided",
        "numClippingPlanes",
        "numClipIntersection",
        "depthPacking",
        "dithering",
        "sheen",
        "transmissionMap",
      ];
    function f(t) {
      let e;
      return (
        t && t.isTexture
          ? (e = t.encoding)
          : t && t.isWebGLRenderTarget
          ? (console.warn(
              "THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."
            ),
            (e = t.texture.encoding))
          : (e = Zt),
        e
      );
    }
    return {
      getParameters: function (r, a, m, g, v) {
        const y = g.fog,
          x = r.isMeshStandardMaterial ? g.environment : null,
          _ = e.get(r.envMap || x),
          w = p[r.type],
          b = v.isSkinnedMesh
            ? (function (t) {
                const e = t.skeleton.bones;
                if (c) return 1024;
                {
                  const t = h,
                    n = Math.floor((t - 20) / 4),
                    i = Math.min(n, e.length);
                  return i < e.length
                    ? (console.warn(
                        "THREE.WebGLRenderer: Skeleton has " +
                          e.length +
                          " bones. This GPU supports " +
                          i +
                          "."
                      ),
                      0)
                    : i;
                }
              })(v)
            : 0;
        let M, S;
        if (
          (null !== r.precision &&
            ((d = i.getMaxPrecision(r.precision)),
            d !== r.precision &&
              console.warn(
                "THREE.WebGLProgram.getParameters:",
                r.precision,
                "not supported, using",
                d,
                "instead."
              )),
          w)
        ) {
          const t = Qi[w];
          (M = t.vertexShader), (S = t.fragmentShader);
        } else (M = r.vertexShader), (S = r.fragmentShader);
        const E = t.getRenderTarget();
        return {
          isWebGL2: o,
          shaderID: w,
          shaderName: r.type,
          vertexShader: M,
          fragmentShader: S,
          defines: r.defines,
          isRawShaderMaterial: !0 === r.isRawShaderMaterial,
          glslVersion: r.glslVersion,
          precision: d,
          instancing: !0 === v.isInstancedMesh,
          instancingColor: !0 === v.isInstancedMesh && null !== v.instanceColor,
          supportsVertexTextures: u,
          outputEncoding: null !== E ? f(E.texture) : t.outputEncoding,
          map: !!r.map,
          mapEncoding: f(r.map),
          matcap: !!r.matcap,
          matcapEncoding: f(r.matcap),
          envMap: !!_,
          envMapMode: _ && _.mapping,
          envMapEncoding: f(_),
          envMapCubeUV: !!_ && (306 === _.mapping || 307 === _.mapping),
          lightMap: !!r.lightMap,
          lightMapEncoding: f(r.lightMap),
          aoMap: !!r.aoMap,
          emissiveMap: !!r.emissiveMap,
          emissiveMapEncoding: f(r.emissiveMap),
          bumpMap: !!r.bumpMap,
          normalMap: !!r.normalMap,
          objectSpaceNormalMap: 1 === r.normalMapType,
          tangentSpaceNormalMap: 0 === r.normalMapType,
          clearcoatMap: !!r.clearcoatMap,
          clearcoatRoughnessMap: !!r.clearcoatRoughnessMap,
          clearcoatNormalMap: !!r.clearcoatNormalMap,
          displacementMap: !!r.displacementMap,
          roughnessMap: !!r.roughnessMap,
          metalnessMap: !!r.metalnessMap,
          specularMap: !!r.specularMap,
          alphaMap: !!r.alphaMap,
          gradientMap: !!r.gradientMap,
          sheen: !!r.sheen,
          transmissionMap: !!r.transmissionMap,
          combine: r.combine,
          vertexTangents: r.normalMap && r.vertexTangents,
          vertexColors: r.vertexColors,
          vertexAlphas:
            !0 === r.vertexColors &&
            v.geometry &&
            v.geometry.attributes.color &&
            4 === v.geometry.attributes.color.itemSize,
          vertexUvs: !!(
            r.map ||
            r.bumpMap ||
            r.normalMap ||
            r.specularMap ||
            r.alphaMap ||
            r.emissiveMap ||
            r.roughnessMap ||
            r.metalnessMap ||
            r.clearcoatMap ||
            r.clearcoatRoughnessMap ||
            r.clearcoatNormalMap ||
            r.displacementMap ||
            r.transmissionMap
          ),
          uvsVertexOnly: !(
            r.map ||
            r.bumpMap ||
            r.normalMap ||
            r.specularMap ||
            r.alphaMap ||
            r.emissiveMap ||
            r.roughnessMap ||
            r.metalnessMap ||
            r.clearcoatNormalMap ||
            r.transmissionMap ||
            !r.displacementMap
          ),
          fog: !!y,
          useFog: r.fog,
          fogExp2: y && y.isFogExp2,
          flatShading: !!r.flatShading,
          sizeAttenuation: r.sizeAttenuation,
          logarithmicDepthBuffer: l,
          skinning: r.skinning && b > 0,
          maxBones: b,
          useVertexTexture: c,
          morphTargets: r.morphTargets,
          morphNormals: r.morphNormals,
          numDirLights: a.directional.length,
          numPointLights: a.point.length,
          numSpotLights: a.spot.length,
          numRectAreaLights: a.rectArea.length,
          numHemiLights: a.hemi.length,
          numDirLightShadows: a.directionalShadowMap.length,
          numPointLightShadows: a.pointShadowMap.length,
          numSpotLightShadows: a.spotShadowMap.length,
          numClippingPlanes: s.numPlanes,
          numClipIntersection: s.numIntersection,
          dithering: r.dithering,
          shadowMapEnabled: t.shadowMap.enabled && m.length > 0,
          shadowMapType: t.shadowMap.type,
          toneMapping: r.toneMapped ? t.toneMapping : 0,
          physicallyCorrectLights: t.physicallyCorrectLights,
          premultipliedAlpha: r.premultipliedAlpha,
          alphaTest: r.alphaTest,
          doubleSided: 2 === r.side,
          flipSided: 1 === r.side,
          depthPacking: void 0 !== r.depthPacking && r.depthPacking,
          index0AttributeName: r.index0AttributeName,
          extensionDerivatives: r.extensions && r.extensions.derivatives,
          extensionFragDepth: r.extensions && r.extensions.fragDepth,
          extensionDrawBuffers: r.extensions && r.extensions.drawBuffers,
          extensionShaderTextureLOD:
            r.extensions && r.extensions.shaderTextureLOD,
          rendererExtensionFragDepth: o || n.has("EXT_frag_depth"),
          rendererExtensionDrawBuffers: o || n.has("WEBGL_draw_buffers"),
          rendererExtensionShaderTextureLod:
            o || n.has("EXT_shader_texture_lod"),
          customProgramCacheKey: r.customProgramCacheKey(),
        };
      },
      getProgramCacheKey: function (e) {
        const n = [];
        if (
          (e.shaderID
            ? n.push(e.shaderID)
            : (n.push(e.fragmentShader), n.push(e.vertexShader)),
          void 0 !== e.defines)
        )
          for (const t in e.defines) n.push(t), n.push(e.defines[t]);
        if (!1 === e.isRawShaderMaterial) {
          for (let t = 0; t < m.length; t++) n.push(e[m[t]]);
          n.push(t.outputEncoding), n.push(t.gammaFactor);
        }
        return n.push(e.customProgramCacheKey), n.join();
      },
      getUniforms: function (t) {
        const e = p[t.type];
        let n;
        if (e) {
          const t = Qi[e];
          n = zi.clone(t.uniforms);
        } else n = t.uniforms;
        return n;
      },
      acquireProgram: function (e, n) {
        let i;
        for (let t = 0, e = a.length; t < e; t++) {
          const e = a[t];
          if (e.cacheKey === n) {
            (i = e), ++i.usedTimes;
            break;
          }
        }
        return void 0 === i && ((i = new Os(t, n, e, r)), a.push(i)), i;
      },
      releaseProgram: function (t) {
        if (0 == --t.usedTimes) {
          const e = a.indexOf(t);
          (a[e] = a[a.length - 1]), a.pop(), t.destroy();
        }
      },
      programs: a,
    };
  }
  function Fs() {
    let t = new WeakMap();
    return {
      get: function (e) {
        let n = t.get(e);
        return void 0 === n && ((n = {}), t.set(e, n)), n;
      },
      remove: function (e) {
        t.delete(e);
      },
      update: function (e, n, i) {
        t.get(e)[n] = i;
      },
      dispose: function () {
        t = new WeakMap();
      },
    };
  }
  function Hs(t, e) {
    return t.groupOrder !== e.groupOrder
      ? t.groupOrder - e.groupOrder
      : t.renderOrder !== e.renderOrder
      ? t.renderOrder - e.renderOrder
      : t.program !== e.program
      ? t.program.id - e.program.id
      : t.material.id !== e.material.id
      ? t.material.id - e.material.id
      : t.z !== e.z
      ? t.z - e.z
      : t.id - e.id;
  }
  function Us(t, e) {
    return t.groupOrder !== e.groupOrder
      ? t.groupOrder - e.groupOrder
      : t.renderOrder !== e.renderOrder
      ? t.renderOrder - e.renderOrder
      : t.z !== e.z
      ? e.z - t.z
      : t.id - e.id;
  }
  function Gs(t) {
    const e = [];
    let n = 0;
    const i = [],
      r = [],
      s = { id: -1 };
    function a(i, r, a, o, l, c) {
      let h = e[n];
      const u = t.get(a);
      return (
        void 0 === h
          ? ((h = {
              id: i.id,
              object: i,
              geometry: r,
              material: a,
              program: u.program || s,
              groupOrder: o,
              renderOrder: i.renderOrder,
              z: l,
              group: c,
            }),
            (e[n] = h))
          : ((h.id = i.id),
            (h.object = i),
            (h.geometry = r),
            (h.material = a),
            (h.program = u.program || s),
            (h.groupOrder = o),
            (h.renderOrder = i.renderOrder),
            (h.z = l),
            (h.group = c)),
        n++,
        h
      );
    }
    return {
      opaque: i,
      transparent: r,
      init: function () {
        (n = 0), (i.length = 0), (r.length = 0);
      },
      push: function (t, e, n, s, o, l) {
        const c = a(t, e, n, s, o, l);
        (!0 === n.transparent ? r : i).push(c);
      },
      unshift: function (t, e, n, s, o, l) {
        const c = a(t, e, n, s, o, l);
        (!0 === n.transparent ? r : i).unshift(c);
      },
      finish: function () {
        for (let t = n, i = e.length; t < i; t++) {
          const n = e[t];
          if (null === n.id) break;
          (n.id = null),
            (n.object = null),
            (n.geometry = null),
            (n.material = null),
            (n.program = null),
            (n.group = null);
        }
      },
      sort: function (t, e) {
        i.length > 1 && i.sort(t || Hs), r.length > 1 && r.sort(e || Us);
      },
    };
  }
  function Vs(t) {
    let e = new WeakMap();
    return {
      get: function (n, i) {
        let r;
        return (
          !1 === e.has(n)
            ? ((r = new Gs(t)), e.set(n, [r]))
            : i >= e.get(n).length
            ? ((r = new Gs(t)), e.get(n).push(r))
            : (r = e.get(n)[i]),
          r
        );
      },
      dispose: function () {
        e = new WeakMap();
      },
    };
  }
  function ks() {
    const t = {};
    return {
      get: function (e) {
        if (void 0 !== t[e.id]) return t[e.id];
        let n;
        switch (e.type) {
          case "DirectionalLight":
            n = { direction: new Me(), color: new $n() };
            break;
          case "SpotLight":
            n = {
              position: new Me(),
              direction: new Me(),
              color: new $n(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0,
            };
            break;
          case "PointLight":
            n = { position: new Me(), color: new $n(), distance: 0, decay: 0 };
            break;
          case "HemisphereLight":
            n = {
              direction: new Me(),
              skyColor: new $n(),
              groundColor: new $n(),
            };
            break;
          case "RectAreaLight":
            n = {
              color: new $n(),
              position: new Me(),
              halfWidth: new Me(),
              halfHeight: new Me(),
            };
        }
        return (t[e.id] = n), n;
      },
    };
  }
  let Ws = 0;
  function js(t, e) {
    return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0);
  }
  function Xs(t, e) {
    const n = new ks(),
      i = (function () {
        const t = {};
        return {
          get: function (e) {
            if (void 0 !== t[e.id]) return t[e.id];
            let n;
            switch (e.type) {
              case "DirectionalLight":
              case "SpotLight":
                n = {
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new pe(),
                };
                break;
              case "PointLight":
                n = {
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new pe(),
                  shadowCameraNear: 1,
                  shadowCameraFar: 1e3,
                };
            }
            return (t[e.id] = n), n;
          },
        };
      })(),
      r = {
        version: 0,
        hash: {
          directionalLength: -1,
          pointLength: -1,
          spotLength: -1,
          rectAreaLength: -1,
          hemiLength: -1,
          numDirectionalShadows: -1,
          numPointShadows: -1,
          numSpotShadows: -1,
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotShadow: [],
        spotShadowMap: [],
        spotShadowMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
      };
    for (let t = 0; t < 9; t++) r.probe.push(new Me());
    const s = new Me(),
      a = new tn(),
      o = new tn();
    return {
      setup: function (s) {
        let a = 0,
          o = 0,
          l = 0;
        for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
        let c = 0,
          h = 0,
          u = 0,
          d = 0,
          p = 0,
          m = 0,
          f = 0,
          g = 0;
        s.sort(js);
        for (let t = 0, e = s.length; t < e; t++) {
          const e = s[t],
            v = e.color,
            y = e.intensity,
            x = e.distance,
            _ = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
          if (e.isAmbientLight) (a += v.r * y), (o += v.g * y), (l += v.b * y);
          else if (e.isLightProbe)
            for (let t = 0; t < 9; t++)
              r.probe[t].addScaledVector(e.sh.coefficients[t], y);
          else if (e.isDirectionalLight) {
            const t = n.get(e);
            if (
              (t.color.copy(e.color).multiplyScalar(e.intensity), e.castShadow)
            ) {
              const t = e.shadow,
                n = i.get(e);
              (n.shadowBias = t.bias),
                (n.shadowNormalBias = t.normalBias),
                (n.shadowRadius = t.radius),
                (n.shadowMapSize = t.mapSize),
                (r.directionalShadow[c] = n),
                (r.directionalShadowMap[c] = _),
                (r.directionalShadowMatrix[c] = e.shadow.matrix),
                m++;
            }
            (r.directional[c] = t), c++;
          } else if (e.isSpotLight) {
            const t = n.get(e);
            if (
              (t.position.setFromMatrixPosition(e.matrixWorld),
              t.color.copy(v).multiplyScalar(y),
              (t.distance = x),
              (t.coneCos = Math.cos(e.angle)),
              (t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra))),
              (t.decay = e.decay),
              e.castShadow)
            ) {
              const t = e.shadow,
                n = i.get(e);
              (n.shadowBias = t.bias),
                (n.shadowNormalBias = t.normalBias),
                (n.shadowRadius = t.radius),
                (n.shadowMapSize = t.mapSize),
                (r.spotShadow[u] = n),
                (r.spotShadowMap[u] = _),
                (r.spotShadowMatrix[u] = e.shadow.matrix),
                g++;
            }
            (r.spot[u] = t), u++;
          } else if (e.isRectAreaLight) {
            const t = n.get(e);
            t.color.copy(v).multiplyScalar(y),
              t.halfWidth.set(0.5 * e.width, 0, 0),
              t.halfHeight.set(0, 0.5 * e.height, 0),
              (r.rectArea[d] = t),
              d++;
          } else if (e.isPointLight) {
            const t = n.get(e);
            if (
              (t.color.copy(e.color).multiplyScalar(e.intensity),
              (t.distance = e.distance),
              (t.decay = e.decay),
              e.castShadow)
            ) {
              const t = e.shadow,
                n = i.get(e);
              (n.shadowBias = t.bias),
                (n.shadowNormalBias = t.normalBias),
                (n.shadowRadius = t.radius),
                (n.shadowMapSize = t.mapSize),
                (n.shadowCameraNear = t.camera.near),
                (n.shadowCameraFar = t.camera.far),
                (r.pointShadow[h] = n),
                (r.pointShadowMap[h] = _),
                (r.pointShadowMatrix[h] = e.shadow.matrix),
                f++;
            }
            (r.point[h] = t), h++;
          } else if (e.isHemisphereLight) {
            const t = n.get(e);
            t.skyColor.copy(e.color).multiplyScalar(y),
              t.groundColor.copy(e.groundColor).multiplyScalar(y),
              (r.hemi[p] = t),
              p++;
          }
        }
        d > 0 &&
          (e.isWebGL2 || !0 === t.has("OES_texture_float_linear")
            ? ((r.rectAreaLTC1 = Ji.LTC_FLOAT_1),
              (r.rectAreaLTC2 = Ji.LTC_FLOAT_2))
            : !0 === t.has("OES_texture_half_float_linear")
            ? ((r.rectAreaLTC1 = Ji.LTC_HALF_1),
              (r.rectAreaLTC2 = Ji.LTC_HALF_2))
            : console.error(
                "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
              )),
          (r.ambient[0] = a),
          (r.ambient[1] = o),
          (r.ambient[2] = l);
        const v = r.hash;
        (v.directionalLength === c &&
          v.pointLength === h &&
          v.spotLength === u &&
          v.rectAreaLength === d &&
          v.hemiLength === p &&
          v.numDirectionalShadows === m &&
          v.numPointShadows === f &&
          v.numSpotShadows === g) ||
          ((r.directional.length = c),
          (r.spot.length = u),
          (r.rectArea.length = d),
          (r.point.length = h),
          (r.hemi.length = p),
          (r.directionalShadow.length = m),
          (r.directionalShadowMap.length = m),
          (r.pointShadow.length = f),
          (r.pointShadowMap.length = f),
          (r.spotShadow.length = g),
          (r.spotShadowMap.length = g),
          (r.directionalShadowMatrix.length = m),
          (r.pointShadowMatrix.length = f),
          (r.spotShadowMatrix.length = g),
          (v.directionalLength = c),
          (v.pointLength = h),
          (v.spotLength = u),
          (v.rectAreaLength = d),
          (v.hemiLength = p),
          (v.numDirectionalShadows = m),
          (v.numPointShadows = f),
          (v.numSpotShadows = g),
          (r.version = Ws++));
      },
      setupView: function (t, e) {
        let n = 0,
          i = 0,
          l = 0,
          c = 0,
          h = 0;
        const u = e.matrixWorldInverse;
        for (let e = 0, d = t.length; e < d; e++) {
          const d = t[e];
          if (d.isDirectionalLight) {
            const t = r.directional[n];
            t.direction.setFromMatrixPosition(d.matrixWorld),
              s.setFromMatrixPosition(d.target.matrixWorld),
              t.direction.sub(s),
              t.direction.transformDirection(u),
              n++;
          } else if (d.isSpotLight) {
            const t = r.spot[l];
            t.position.setFromMatrixPosition(d.matrixWorld),
              t.position.applyMatrix4(u),
              t.direction.setFromMatrixPosition(d.matrixWorld),
              s.setFromMatrixPosition(d.target.matrixWorld),
              t.direction.sub(s),
              t.direction.transformDirection(u),
              l++;
          } else if (d.isRectAreaLight) {
            const t = r.rectArea[c];
            t.position.setFromMatrixPosition(d.matrixWorld),
              t.position.applyMatrix4(u),
              o.identity(),
              a.copy(d.matrixWorld),
              a.premultiply(u),
              o.extractRotation(a),
              t.halfWidth.set(0.5 * d.width, 0, 0),
              t.halfHeight.set(0, 0.5 * d.height, 0),
              t.halfWidth.applyMatrix4(o),
              t.halfHeight.applyMatrix4(o),
              c++;
          } else if (d.isPointLight) {
            const t = r.point[i];
            t.position.setFromMatrixPosition(d.matrixWorld),
              t.position.applyMatrix4(u),
              i++;
          } else if (d.isHemisphereLight) {
            const t = r.hemi[h];
            t.direction.setFromMatrixPosition(d.matrixWorld),
              t.direction.transformDirection(u),
              t.direction.normalize(),
              h++;
          }
        }
      },
      state: r,
    };
  }
  function qs(t, e) {
    const n = new Xs(t, e),
      i = [],
      r = [];
    return {
      init: function () {
        (i.length = 0), (r.length = 0);
      },
      state: { lightsArray: i, shadowsArray: r, lights: n },
      setupLights: function () {
        n.setup(i);
      },
      setupLightsView: function (t) {
        n.setupView(i, t);
      },
      pushLight: function (t) {
        i.push(t);
      },
      pushShadow: function (t) {
        r.push(t);
      },
    };
  }
  function Ys(t, e) {
    let n = new WeakMap();
    return {
      get: function (i, r = 0) {
        let s;
        return (
          !1 === n.has(i)
            ? ((s = new qs(t, e)), n.set(i, [s]))
            : r >= n.get(i).length
            ? ((s = new qs(t, e)), n.get(i).push(s))
            : (s = n.get(i)[r]),
          s
        );
      },
      dispose: function () {
        n = new WeakMap();
      },
    };
  }
  class Zs extends kn {
    constructor(t) {
      super(),
        (this.type = "MeshDepthMaterial"),
        (this.depthPacking = 3200),
        (this.skinning = !1),
        (this.morphTargets = !1),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.depthPacking = t.depthPacking),
        (this.skinning = t.skinning),
        (this.morphTargets = t.morphTargets),
        (this.map = t.map),
        (this.alphaMap = t.alphaMap),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        this
      );
    }
  }
  Zs.prototype.isMeshDepthMaterial = !0;
  class $s extends kn {
    constructor(t) {
      super(),
        (this.type = "MeshDistanceMaterial"),
        (this.referencePosition = new Me()),
        (this.nearDistance = 1),
        (this.farDistance = 1e3),
        (this.skinning = !1),
        (this.morphTargets = !1),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.fog = !1),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        this.referencePosition.copy(t.referencePosition),
        (this.nearDistance = t.nearDistance),
        (this.farDistance = t.farDistance),
        (this.skinning = t.skinning),
        (this.morphTargets = t.morphTargets),
        (this.map = t.map),
        (this.alphaMap = t.alphaMap),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        this
      );
    }
  }
  $s.prototype.isMeshDistanceMaterial = !0;
  function Js(t, e, n) {
    let i = new Xi();
    const r = new pe(),
      s = new pe(),
      a = new _e(),
      o = [],
      l = [],
      c = {},
      h = n.maxTextureSize,
      u = { 0: 1, 1: 0, 2: 2 },
      d = new Oi({
        defines: { SAMPLE_RATE: 2 / 8, HALF_SAMPLE_RATE: 1 / 8 },
        uniforms: {
          shadow_pass: { value: null },
          resolution: { value: new pe() },
          radius: { value: 4 },
        },
        vertexShader:
          "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
        fragmentShader:
          "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
      }),
      p = d.clone();
    p.defines.HORIZONTAL_PASS = 1;
    const m = new di();
    m.setAttribute(
      "position",
      new ti(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
    );
    const f = new Pi(m, d),
      g = this;
    function v(n, i) {
      const r = e.update(f);
      (d.uniforms.shadow_pass.value = n.map.texture),
        (d.uniforms.resolution.value = n.mapSize),
        (d.uniforms.radius.value = n.radius),
        t.setRenderTarget(n.mapPass),
        t.clear(),
        t.renderBufferDirect(i, null, r, d, f, null),
        (p.uniforms.shadow_pass.value = n.mapPass.texture),
        (p.uniforms.resolution.value = n.mapSize),
        (p.uniforms.radius.value = n.radius),
        t.setRenderTarget(n.map),
        t.clear(),
        t.renderBufferDirect(i, null, r, p, f, null);
    }
    function y(t, e, n) {
      const i = (t << 0) | (e << 1) | (n << 2);
      let r = o[i];
      return (
        void 0 === r &&
          ((r = new Zs({ depthPacking: 3201, morphTargets: t, skinning: e })),
          (o[i] = r)),
        r
      );
    }
    function x(t, e, n) {
      const i = (t << 0) | (e << 1) | (n << 2);
      let r = l[i];
      return (
        void 0 === r &&
          ((r = new $s({ morphTargets: t, skinning: e })), (l[i] = r)),
        r
      );
    }
    function _(e, n, i, r, s, a, o) {
      let l = null,
        h = y,
        d = e.customDepthMaterial;
      if (
        (!0 === r.isPointLight && ((h = x), (d = e.customDistanceMaterial)),
        void 0 === d)
      ) {
        let t = !1;
        !0 === i.morphTargets &&
          (t =
            n.morphAttributes &&
            n.morphAttributes.position &&
            n.morphAttributes.position.length > 0);
        let r = !1;
        !0 === e.isSkinnedMesh &&
          (!0 === i.skinning
            ? (r = !0)
            : console.warn(
                "THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",
                e
              ));
        l = h(t, r, !0 === e.isInstancedMesh);
      } else l = d;
      if (
        t.localClippingEnabled &&
        !0 === i.clipShadows &&
        0 !== i.clippingPlanes.length
      ) {
        const t = l.uuid,
          e = i.uuid;
        let n = c[t];
        void 0 === n && ((n = {}), (c[t] = n));
        let r = n[e];
        void 0 === r && ((r = l.clone()), (n[e] = r)), (l = r);
      }
      return (
        (l.visible = i.visible),
        (l.wireframe = i.wireframe),
        (l.side =
          3 === o
            ? null !== i.shadowSide
              ? i.shadowSide
              : i.side
            : null !== i.shadowSide
            ? i.shadowSide
            : u[i.side]),
        (l.clipShadows = i.clipShadows),
        (l.clippingPlanes = i.clippingPlanes),
        (l.clipIntersection = i.clipIntersection),
        (l.wireframeLinewidth = i.wireframeLinewidth),
        (l.linewidth = i.linewidth),
        !0 === r.isPointLight &&
          !0 === l.isMeshDistanceMaterial &&
          (l.referencePosition.setFromMatrixPosition(r.matrixWorld),
          (l.nearDistance = s),
          (l.farDistance = a)),
        l
      );
    }
    function w(n, r, s, a, o) {
      if (!1 === n.visible) return;
      if (
        n.layers.test(r.layers) &&
        (n.isMesh || n.isLine || n.isPoints) &&
        (n.castShadow || (n.receiveShadow && 3 === o)) &&
        (!n.frustumCulled || i.intersectsObject(n))
      ) {
        n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
        const i = e.update(n),
          r = n.material;
        if (Array.isArray(r)) {
          const e = i.groups;
          for (let l = 0, c = e.length; l < c; l++) {
            const c = e[l],
              h = r[c.materialIndex];
            if (h && h.visible) {
              const e = _(n, i, h, a, s.near, s.far, o);
              t.renderBufferDirect(s, null, i, e, n, c);
            }
          }
        } else if (r.visible) {
          const e = _(n, i, r, a, s.near, s.far, o);
          t.renderBufferDirect(s, null, i, e, n, null);
        }
      }
      const l = n.children;
      for (let t = 0, e = l.length; t < e; t++) w(l[t], r, s, a, o);
    }
    (this.enabled = !1),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this.type = 1),
      (this.render = function (e, n, o) {
        if (!1 === g.enabled) return;
        if (!1 === g.autoUpdate && !1 === g.needsUpdate) return;
        if (0 === e.length) return;
        const l = t.getRenderTarget(),
          c = t.getActiveCubeFace(),
          u = t.getActiveMipmapLevel(),
          d = t.state;
        d.setBlending(0),
          d.buffers.color.setClear(1, 1, 1, 1),
          d.buffers.depth.setTest(!0),
          d.setScissorTest(!1);
        for (let l = 0, c = e.length; l < c; l++) {
          const c = e[l],
            u = c.shadow;
          if (void 0 === u) {
            console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
            continue;
          }
          if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
          r.copy(u.mapSize);
          const p = u.getFrameExtents();
          if (
            (r.multiply(p),
            s.copy(u.mapSize),
            (r.x > h || r.y > h) &&
              (r.x > h &&
                ((s.x = Math.floor(h / p.x)),
                (r.x = s.x * p.x),
                (u.mapSize.x = s.x)),
              r.y > h &&
                ((s.y = Math.floor(h / p.y)),
                (r.y = s.y * p.y),
                (u.mapSize.y = s.y))),
            null === u.map && !u.isPointLightShadow && 3 === this.type)
          ) {
            const t = { minFilter: Pt, magFilter: Pt, format: Ht };
            (u.map = new we(r.x, r.y, t)),
              (u.map.texture.name = c.name + ".shadowMap"),
              (u.mapPass = new we(r.x, r.y, t)),
              u.camera.updateProjectionMatrix();
          }
          if (null === u.map) {
            const t = { minFilter: Rt, magFilter: Rt, format: Ht };
            (u.map = new we(r.x, r.y, t)),
              (u.map.texture.name = c.name + ".shadowMap"),
              u.camera.updateProjectionMatrix();
          }
          t.setRenderTarget(u.map), t.clear();
          const m = u.getViewportCount();
          for (let t = 0; t < m; t++) {
            const e = u.getViewport(t);
            a.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w),
              d.viewport(a),
              u.updateMatrices(c, t),
              (i = u.getFrustum()),
              w(n, o, u.camera, c, this.type);
          }
          u.isPointLightShadow || 3 !== this.type || v(u, o),
            (u.needsUpdate = !1);
        }
        (g.needsUpdate = !1), t.setRenderTarget(l, c, u);
      });
  }
  function Qs(t, e, n) {
    const i = n.isWebGL2;
    const r = new (function () {
        let e = !1;
        const n = new _e();
        let i = null;
        const r = new _e(0, 0, 0, 0);
        return {
          setMask: function (n) {
            i === n || e || (t.colorMask(n, n, n, n), (i = n));
          },
          setLocked: function (t) {
            e = t;
          },
          setClear: function (e, i, s, a, o) {
            !0 === o && ((e *= a), (i *= a), (s *= a)),
              n.set(e, i, s, a),
              !1 === r.equals(n) && (t.clearColor(e, i, s, a), r.copy(n));
          },
          reset: function () {
            (e = !1), (i = null), r.set(-1, 0, 0, 0);
          },
        };
      })(),
      s = new (function () {
        let e = !1,
          n = null,
          i = null,
          r = null;
        return {
          setTest: function (t) {
            t ? z(2929) : O(2929);
          },
          setMask: function (i) {
            n === i || e || (t.depthMask(i), (n = i));
          },
          setFunc: function (e) {
            if (i !== e) {
              if (e)
                switch (e) {
                  case 0:
                    t.depthFunc(512);
                    break;
                  case 1:
                    t.depthFunc(519);
                    break;
                  case 2:
                    t.depthFunc(513);
                    break;
                  case 3:
                  default:
                    t.depthFunc(515);
                    break;
                  case 4:
                    t.depthFunc(514);
                    break;
                  case 5:
                    t.depthFunc(518);
                    break;
                  case 6:
                    t.depthFunc(516);
                    break;
                  case 7:
                    t.depthFunc(517);
                }
              else t.depthFunc(515);
              i = e;
            }
          },
          setLocked: function (t) {
            e = t;
          },
          setClear: function (e) {
            r !== e && (t.clearDepth(e), (r = e));
          },
          reset: function () {
            (e = !1), (n = null), (i = null), (r = null);
          },
        };
      })(),
      a = new (function () {
        let e = !1,
          n = null,
          i = null,
          r = null,
          s = null,
          a = null,
          o = null,
          l = null,
          c = null;
        return {
          setTest: function (t) {
            e || (t ? z(2960) : O(2960));
          },
          setMask: function (i) {
            n === i || e || (t.stencilMask(i), (n = i));
          },
          setFunc: function (e, n, a) {
            (i === e && r === n && s === a) ||
              (t.stencilFunc(e, n, a), (i = e), (r = n), (s = a));
          },
          setOp: function (e, n, i) {
            (a === e && o === n && l === i) ||
              (t.stencilOp(e, n, i), (a = e), (o = n), (l = i));
          },
          setLocked: function (t) {
            e = t;
          },
          setClear: function (e) {
            c !== e && (t.clearStencil(e), (c = e));
          },
          reset: function () {
            (e = !1),
              (n = null),
              (i = null),
              (r = null),
              (s = null),
              (a = null),
              (o = null),
              (l = null),
              (c = null);
          },
        };
      })();
    let o = {},
      l = null,
      c = {},
      h = null,
      u = !1,
      d = null,
      p = null,
      m = null,
      f = null,
      g = null,
      v = null,
      y = null,
      x = !1,
      _ = null,
      w = null,
      b = null,
      M = null,
      S = null;
    const E = t.getParameter(35661);
    let T = !1,
      L = 0;
    const A = t.getParameter(7938);
    -1 !== A.indexOf("WebGL")
      ? ((L = parseFloat(/^WebGL (\d)/.exec(A)[1])), (T = L >= 1))
      : -1 !== A.indexOf("OpenGL ES") &&
        ((L = parseFloat(/^OpenGL ES (\d)/.exec(A)[1])), (T = L >= 2));
    let R = null,
      P = {};
    const C = new _e(0, 0, t.canvas.width, t.canvas.height),
      I = new _e(0, 0, t.canvas.width, t.canvas.height);
    function D(e, n, i) {
      const r = new Uint8Array(4),
        s = t.createTexture();
      t.bindTexture(e, s),
        t.texParameteri(e, 10241, 9728),
        t.texParameteri(e, 10240, 9728);
      for (let e = 0; e < i; e++)
        t.texImage2D(n + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
      return s;
    }
    const N = {};
    function z(e) {
      !0 !== o[e] && (t.enable(e), (o[e] = !0));
    }
    function O(e) {
      !1 !== o[e] && (t.disable(e), (o[e] = !1));
    }
    (N[3553] = D(3553, 3553, 1)),
      (N[34067] = D(34067, 34069, 6)),
      r.setClear(0, 0, 0, 1),
      s.setClear(1),
      a.setClear(0),
      z(2929),
      s.setFunc(3),
      U(!1),
      G(1),
      z(2884),
      H(0);
    const B = { [Et]: 32774, 101: 32778, 102: 32779 };
    if (i) (B[103] = 32775), (B[104] = 32776);
    else {
      const t = e.get("EXT_blend_minmax");
      null !== t && ((B[103] = t.MIN_EXT), (B[104] = t.MAX_EXT));
    }
    const F = {
      200: 0,
      201: 1,
      202: 768,
      204: 770,
      210: 776,
      208: 774,
      206: 772,
      203: 769,
      205: 771,
      209: 775,
      207: 773,
    };
    function H(e, n, i, r, s, a, o, l) {
      if (0 !== e) {
        if ((!1 === u && (z(3042), (u = !0)), 5 === e))
          (s = s || n),
            (a = a || i),
            (o = o || r),
            (n === p && s === g) ||
              (t.blendEquationSeparate(B[n], B[s]), (p = n), (g = s)),
            (i === m && r === f && a === v && o === y) ||
              (t.blendFuncSeparate(F[i], F[r], F[a], F[o]),
              (m = i),
              (f = r),
              (v = a),
              (y = o)),
            (d = e),
            (x = null);
        else if (e !== d || l !== x) {
          if (
            ((p === Et && g === Et) ||
              (t.blendEquation(32774), (p = Et), (g = Et)),
            l)
          )
            switch (e) {
              case 1:
                t.blendFuncSeparate(1, 771, 1, 771);
                break;
              case 2:
                t.blendFunc(1, 1);
                break;
              case 3:
                t.blendFuncSeparate(0, 0, 769, 771);
                break;
              case 4:
                t.blendFuncSeparate(0, 768, 0, 770);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", e);
            }
          else
            switch (e) {
              case 1:
                t.blendFuncSeparate(770, 771, 1, 771);
                break;
              case 2:
                t.blendFunc(770, 1);
                break;
              case 3:
                t.blendFunc(0, 769);
                break;
              case 4:
                t.blendFunc(0, 768);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", e);
            }
          (m = null), (f = null), (v = null), (y = null), (d = e), (x = l);
        }
      } else !0 === u && (O(3042), (u = !1));
    }
    function U(e) {
      _ !== e && (e ? t.frontFace(2304) : t.frontFace(2305), (_ = e));
    }
    function G(e) {
      0 !== e
        ? (z(2884),
          e !== w &&
            (1 === e
              ? t.cullFace(1029)
              : 2 === e
              ? t.cullFace(1028)
              : t.cullFace(1032)))
        : O(2884),
        (w = e);
    }
    function V(e, n, i) {
      e
        ? (z(32823),
          (M === n && S === i) || (t.polygonOffset(n, i), (M = n), (S = i)))
        : O(32823);
    }
    function k(e) {
      void 0 === e && (e = 33984 + E - 1),
        R !== e && (t.activeTexture(e), (R = e));
    }
    return {
      buffers: { color: r, depth: s, stencil: a },
      enable: z,
      disable: O,
      bindFramebuffer: function (e, n) {
        null === n && null !== l && (n = l),
          c[e] !== n &&
            (t.bindFramebuffer(e, n),
            (c[e] = n),
            i &&
              (36009 === e && (c[36160] = n), 36160 === e && (c[36009] = n)));
      },
      bindXRFramebuffer: function (e) {
        e !== l && (t.bindFramebuffer(36160, e), (l = e));
      },
      useProgram: function (e) {
        return h !== e && (t.useProgram(e), (h = e), !0);
      },
      setBlending: H,
      setMaterial: function (t, e) {
        2 === t.side ? O(2884) : z(2884);
        let n = 1 === t.side;
        e && (n = !n),
          U(n),
          1 === t.blending && !1 === t.transparent
            ? H(0)
            : H(
                t.blending,
                t.blendEquation,
                t.blendSrc,
                t.blendDst,
                t.blendEquationAlpha,
                t.blendSrcAlpha,
                t.blendDstAlpha,
                t.premultipliedAlpha
              ),
          s.setFunc(t.depthFunc),
          s.setTest(t.depthTest),
          s.setMask(t.depthWrite),
          r.setMask(t.colorWrite);
        const i = t.stencilWrite;
        a.setTest(i),
          i &&
            (a.setMask(t.stencilWriteMask),
            a.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask),
            a.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
          V(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits),
          !0 === t.alphaToCoverage ? z(32926) : O(32926);
      },
      setFlipSided: U,
      setCullFace: G,
      setLineWidth: function (e) {
        e !== b && (T && t.lineWidth(e), (b = e));
      },
      setPolygonOffset: V,
      setScissorTest: function (t) {
        t ? z(3089) : O(3089);
      },
      activeTexture: k,
      bindTexture: function (e, n) {
        null === R && k();
        let i = P[R];
        void 0 === i && ((i = { type: void 0, texture: void 0 }), (P[R] = i)),
          (i.type === e && i.texture === n) ||
            (t.bindTexture(e, n || N[e]), (i.type = e), (i.texture = n));
      },
      unbindTexture: function () {
        const e = P[R];
        void 0 !== e &&
          void 0 !== e.type &&
          (t.bindTexture(e.type, null),
          (e.type = void 0),
          (e.texture = void 0));
      },
      compressedTexImage2D: function () {
        try {
          t.compressedTexImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage2D: function () {
        try {
          t.texImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage3D: function () {
        try {
          t.texImage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      scissor: function (e) {
        !1 === C.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), C.copy(e));
      },
      viewport: function (e) {
        !1 === I.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), I.copy(e));
      },
      reset: function () {
        t.disable(3042),
          t.disable(2884),
          t.disable(2929),
          t.disable(32823),
          t.disable(3089),
          t.disable(2960),
          t.disable(32926),
          t.blendEquation(32774),
          t.blendFunc(1, 0),
          t.blendFuncSeparate(1, 0, 1, 0),
          t.colorMask(!0, !0, !0, !0),
          t.clearColor(0, 0, 0, 0),
          t.depthMask(!0),
          t.depthFunc(513),
          t.clearDepth(1),
          t.stencilMask(4294967295),
          t.stencilFunc(519, 0, 4294967295),
          t.stencilOp(7680, 7680, 7680),
          t.clearStencil(0),
          t.cullFace(1029),
          t.frontFace(2305),
          t.polygonOffset(0, 0),
          t.activeTexture(33984),
          t.bindFramebuffer(36160, null),
          !0 === i &&
            (t.bindFramebuffer(36009, null), t.bindFramebuffer(36008, null)),
          t.useProgram(null),
          t.lineWidth(1),
          t.scissor(0, 0, t.canvas.width, t.canvas.height),
          t.viewport(0, 0, t.canvas.width, t.canvas.height),
          (o = {}),
          (R = null),
          (P = {}),
          (l = null),
          (c = {}),
          (h = null),
          (u = !1),
          (d = null),
          (p = null),
          (m = null),
          (f = null),
          (g = null),
          (v = null),
          (y = null),
          (x = !1),
          (_ = null),
          (w = null),
          (b = null),
          (M = null),
          (S = null),
          C.set(0, 0, t.canvas.width, t.canvas.height),
          I.set(0, 0, t.canvas.width, t.canvas.height),
          r.reset(),
          s.reset(),
          a.reset();
      },
    };
  }
  function Ks(t, e, n, i, r, s, a) {
    const o = r.isWebGL2,
      l = r.maxTextures,
      c = r.maxCubemapSize,
      h = r.maxTextureSize,
      u = r.maxSamples,
      d = new WeakMap();
    let p,
      m = !1;
    try {
      m =
        "undefined" != typeof OffscreenCanvas &&
        null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (t) {}
    function f(t, e) {
      return m
        ? new OffscreenCanvas(t, e)
        : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
    }
    function g(t, e, n, i) {
      let r = 1;
      if (
        ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)),
        r < 1 || !0 === e)
      ) {
        if (
          ("undefined" != typeof HTMLImageElement &&
            t instanceof HTMLImageElement) ||
          ("undefined" != typeof HTMLCanvasElement &&
            t instanceof HTMLCanvasElement) ||
          ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
        ) {
          const i = e ? ue : Math.floor,
            s = i(r * t.width),
            a = i(r * t.height);
          void 0 === p && (p = f(s, a));
          const o = n ? f(s, a) : p;
          (o.width = s), (o.height = a);
          return (
            o.getContext("2d").drawImage(t, 0, 0, s, a),
            console.warn(
              "THREE.WebGLRenderer: Texture has been resized from (" +
                t.width +
                "x" +
                t.height +
                ") to (" +
                s +
                "x" +
                a +
                ")."
            ),
            o
          );
        }
        return (
          "data" in t &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                t.width +
                "x" +
                t.height +
                ")."
            ),
          t
        );
      }
      return t;
    }
    function v(t) {
      return ce(t.width) && ce(t.height);
    }
    function y(t, e) {
      return t.generateMipmaps && e && t.minFilter !== Rt && t.minFilter !== Pt;
    }
    function x(e, n, r, s) {
      t.generateMipmap(e);
      i.get(n).__maxMipLevel = Math.log2(Math.max(r, s));
    }
    function _(n, i, r) {
      if (!1 === o) return i;
      if (null !== n) {
        if (void 0 !== t[n]) return t[n];
        console.warn(
          "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
            n +
            "'"
        );
      }
      let s = i;
      return (
        6403 === i &&
          (5126 === r && (s = 33326),
          5131 === r && (s = 33325),
          5121 === r && (s = 33321)),
        6407 === i &&
          (5126 === r && (s = 34837),
          5131 === r && (s = 34843),
          5121 === r && (s = 32849)),
        6408 === i &&
          (5126 === r && (s = 34836),
          5131 === r && (s = 34842),
          5121 === r && (s = 32856)),
        (33325 !== s && 33326 !== s && 34842 !== s && 34836 !== s) ||
          e.get("EXT_color_buffer_float"),
        s
      );
    }
    function w(t) {
      return t === Rt || 1004 === t || 1005 === t ? 9728 : 9729;
    }
    function b(e) {
      const n = e.target;
      n.removeEventListener("dispose", b),
        (function (e) {
          const n = i.get(e);
          if (void 0 === n.__webglInit) return;
          t.deleteTexture(n.__webglTexture), i.remove(e);
        })(n),
        n.isVideoTexture && d.delete(n),
        a.memory.textures--;
    }
    function M(e) {
      const n = e.target;
      n.removeEventListener("dispose", M),
        (function (e) {
          const n = e.texture,
            r = i.get(e),
            s = i.get(n);
          if (!e) return;
          void 0 !== s.__webglTexture && t.deleteTexture(s.__webglTexture);
          e.depthTexture && e.depthTexture.dispose();
          if (e.isWebGLCubeRenderTarget)
            for (let e = 0; e < 6; e++)
              t.deleteFramebuffer(r.__webglFramebuffer[e]),
                r.__webglDepthbuffer &&
                  t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
          else
            t.deleteFramebuffer(r.__webglFramebuffer),
              r.__webglDepthbuffer &&
                t.deleteRenderbuffer(r.__webglDepthbuffer),
              r.__webglMultisampledFramebuffer &&
                t.deleteFramebuffer(r.__webglMultisampledFramebuffer),
              r.__webglColorRenderbuffer &&
                t.deleteRenderbuffer(r.__webglColorRenderbuffer),
              r.__webglDepthRenderbuffer &&
                t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
          i.remove(n), i.remove(e);
        })(n),
        a.memory.textures--;
    }
    let S = 0;
    function E(t, e) {
      const r = i.get(t);
      if (
        (t.isVideoTexture &&
          (function (t) {
            const e = a.render.frame;
            d.get(t) !== e && (d.set(t, e), t.update());
          })(t),
        t.version > 0 && r.__version !== t.version)
      ) {
        const n = t.image;
        if (void 0 === n)
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but image is undefined"
          );
        else {
          if (!1 !== n.complete) return void C(r, t, e);
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
          );
        }
      }
      n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture);
    }
    function T(e, r) {
      const a = i.get(e);
      e.version > 0 && a.__version !== e.version
        ? (function (e, i, r) {
            if (6 !== i.image.length) return;
            P(e, i),
              n.activeTexture(33984 + r),
              n.bindTexture(34067, e.__webglTexture),
              t.pixelStorei(37440, i.flipY),
              t.pixelStorei(37441, i.premultiplyAlpha),
              t.pixelStorei(3317, i.unpackAlignment),
              t.pixelStorei(37443, 0);
            const a =
                i && (i.isCompressedTexture || i.image[0].isCompressedTexture),
              l = i.image[0] && i.image[0].isDataTexture,
              h = [];
            for (let t = 0; t < 6; t++)
              h[t] =
                a || l
                  ? l
                    ? i.image[t].image
                    : i.image[t]
                  : g(i.image[t], !1, !0, c);
            const u = h[0],
              d = v(u) || o,
              p = s.convert(i.format),
              m = s.convert(i.type),
              f = _(i.internalFormat, p, m);
            let w;
            if ((R(34067, i, d), a)) {
              for (let t = 0; t < 6; t++) {
                w = h[t].mipmaps;
                for (let e = 0; e < w.length; e++) {
                  const r = w[e];
                  i.format !== Ht && i.format !== Ft
                    ? null !== p
                      ? n.compressedTexImage2D(
                          34069 + t,
                          e,
                          f,
                          r.width,
                          r.height,
                          0,
                          r.data
                        )
                      : console.warn(
                          "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                        )
                    : n.texImage2D(
                        34069 + t,
                        e,
                        f,
                        r.width,
                        r.height,
                        0,
                        p,
                        m,
                        r.data
                      );
                }
              }
              e.__maxMipLevel = w.length - 1;
            } else {
              w = i.mipmaps;
              for (let t = 0; t < 6; t++)
                if (l) {
                  n.texImage2D(
                    34069 + t,
                    0,
                    f,
                    h[t].width,
                    h[t].height,
                    0,
                    p,
                    m,
                    h[t].data
                  );
                  for (let e = 0; e < w.length; e++) {
                    const i = w[e].image[t].image;
                    n.texImage2D(
                      34069 + t,
                      e + 1,
                      f,
                      i.width,
                      i.height,
                      0,
                      p,
                      m,
                      i.data
                    );
                  }
                } else {
                  n.texImage2D(34069 + t, 0, f, p, m, h[t]);
                  for (let e = 0; e < w.length; e++) {
                    const i = w[e];
                    n.texImage2D(34069 + t, e + 1, f, p, m, i.image[t]);
                  }
                }
              e.__maxMipLevel = w.length;
            }
            y(i, d) && x(34067, i, u.width, u.height);
            (e.__version = i.version), i.onUpdate && i.onUpdate(i);
          })(a, e, r)
        : (n.activeTexture(33984 + r), n.bindTexture(34067, a.__webglTexture));
    }
    const L = { [Tt]: 10497, [Lt]: 33071, [At]: 33648 },
      A = {
        [Rt]: 9728,
        1004: 9984,
        1005: 9986,
        [Pt]: 9729,
        1007: 9985,
        [Ct]: 9987,
      };
    function R(n, s, a) {
      if (
        (a
          ? (t.texParameteri(n, 10242, L[s.wrapS]),
            t.texParameteri(n, 10243, L[s.wrapT]),
            (32879 !== n && 35866 !== n) ||
              t.texParameteri(n, 32882, L[s.wrapR]),
            t.texParameteri(n, 10240, A[s.magFilter]),
            t.texParameteri(n, 10241, A[s.minFilter]))
          : (t.texParameteri(n, 10242, 33071),
            t.texParameteri(n, 10243, 33071),
            (32879 !== n && 35866 !== n) || t.texParameteri(n, 32882, 33071),
            (s.wrapS === Lt && s.wrapT === Lt) ||
              console.warn(
                "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
              ),
            t.texParameteri(n, 10240, w(s.magFilter)),
            t.texParameteri(n, 10241, w(s.minFilter)),
            s.minFilter !== Rt &&
              s.minFilter !== Pt &&
              console.warn(
                "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
              )),
        !0 === e.has("EXT_texture_filter_anisotropic"))
      ) {
        const a = e.get("EXT_texture_filter_anisotropic");
        if (s.type === zt && !1 === e.has("OES_texture_float_linear")) return;
        if (
          !1 === o &&
          s.type === Ot &&
          !1 === e.has("OES_texture_half_float_linear")
        )
          return;
        (s.anisotropy > 1 || i.get(s).__currentAnisotropy) &&
          (t.texParameterf(
            n,
            a.TEXTURE_MAX_ANISOTROPY_EXT,
            Math.min(s.anisotropy, r.getMaxAnisotropy())
          ),
          (i.get(s).__currentAnisotropy = s.anisotropy));
      }
    }
    function P(e, n) {
      void 0 === e.__webglInit &&
        ((e.__webglInit = !0),
        n.addEventListener("dispose", b),
        (e.__webglTexture = t.createTexture()),
        a.memory.textures++);
    }
    function C(e, i, r) {
      let a = 3553;
      i.isDataTexture2DArray && (a = 35866),
        i.isDataTexture3D && (a = 32879),
        P(e, i),
        n.activeTexture(33984 + r),
        n.bindTexture(a, e.__webglTexture),
        t.pixelStorei(37440, i.flipY),
        t.pixelStorei(37441, i.premultiplyAlpha),
        t.pixelStorei(3317, i.unpackAlignment),
        t.pixelStorei(37443, 0);
      const l =
          (function (t) {
            return (
              !o &&
              (t.wrapS !== Lt ||
                t.wrapT !== Lt ||
                (t.minFilter !== Rt && t.minFilter !== Pt))
            );
          })(i) && !1 === v(i.image),
        c = g(i.image, l, !1, h),
        u = v(c) || o,
        d = s.convert(i.format);
      let p,
        m = s.convert(i.type),
        f = _(i.internalFormat, d, m);
      R(a, i, u);
      const w = i.mipmaps;
      if (i.isDepthTexture)
        (f = 6402),
          o
            ? (f =
                i.type === zt
                  ? 36012
                  : i.type === Nt
                  ? 33190
                  : i.type === Bt
                  ? 35056
                  : 33189)
            : i.type === zt &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          i.format === Ut &&
            6402 === f &&
            i.type !== Dt &&
            i.type !== Nt &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (i.type = Dt),
            (m = s.convert(i.type))),
          i.format === Gt &&
            6402 === f &&
            ((f = 34041),
            i.type !== Bt &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (i.type = Bt),
              (m = s.convert(i.type)))),
          n.texImage2D(3553, 0, f, c.width, c.height, 0, d, m, null);
      else if (i.isDataTexture)
        if (w.length > 0 && u) {
          for (let t = 0, e = w.length; t < e; t++)
            (p = w[t]),
              n.texImage2D(3553, t, f, p.width, p.height, 0, d, m, p.data);
          (i.generateMipmaps = !1), (e.__maxMipLevel = w.length - 1);
        } else
          n.texImage2D(3553, 0, f, c.width, c.height, 0, d, m, c.data),
            (e.__maxMipLevel = 0);
      else if (i.isCompressedTexture) {
        for (let t = 0, e = w.length; t < e; t++)
          (p = w[t]),
            i.format !== Ht && i.format !== Ft
              ? null !== d
                ? n.compressedTexImage2D(
                    3553,
                    t,
                    f,
                    p.width,
                    p.height,
                    0,
                    p.data
                  )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                  )
              : n.texImage2D(3553, t, f, p.width, p.height, 0, d, m, p.data);
        e.__maxMipLevel = w.length - 1;
      } else if (i.isDataTexture2DArray)
        n.texImage3D(35866, 0, f, c.width, c.height, c.depth, 0, d, m, c.data),
          (e.__maxMipLevel = 0);
      else if (i.isDataTexture3D)
        n.texImage3D(32879, 0, f, c.width, c.height, c.depth, 0, d, m, c.data),
          (e.__maxMipLevel = 0);
      else if (w.length > 0 && u) {
        for (let t = 0, e = w.length; t < e; t++)
          (p = w[t]), n.texImage2D(3553, t, f, d, m, p);
        (i.generateMipmaps = !1), (e.__maxMipLevel = w.length - 1);
      } else n.texImage2D(3553, 0, f, d, m, c), (e.__maxMipLevel = 0);
      y(i, u) && x(a, i, c.width, c.height),
        (e.__version = i.version),
        i.onUpdate && i.onUpdate(i);
    }
    function I(e, r, a, o) {
      const l = r.texture,
        c = s.convert(l.format),
        h = s.convert(l.type),
        u = _(l.internalFormat, c, h);
      32879 === o || 35866 === o
        ? n.texImage3D(o, 0, u, r.width, r.height, r.depth, 0, c, h, null)
        : n.texImage2D(o, 0, u, r.width, r.height, 0, c, h, null),
        n.bindFramebuffer(36160, e),
        t.framebufferTexture2D(36160, a, o, i.get(l).__webglTexture, 0),
        n.bindFramebuffer(36160, null);
    }
    function D(e, n, i) {
      if ((t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer)) {
        let r = 33189;
        if (i) {
          const e = n.depthTexture;
          e &&
            e.isDepthTexture &&
            (e.type === zt ? (r = 36012) : e.type === Nt && (r = 33190));
          const i = z(n);
          t.renderbufferStorageMultisample(36161, i, r, n.width, n.height);
        } else t.renderbufferStorage(36161, r, n.width, n.height);
        t.framebufferRenderbuffer(36160, 36096, 36161, e);
      } else if (n.depthBuffer && n.stencilBuffer) {
        if (i) {
          const e = z(n);
          t.renderbufferStorageMultisample(36161, e, 35056, n.width, n.height);
        } else t.renderbufferStorage(36161, 34041, n.width, n.height);
        t.framebufferRenderbuffer(36160, 33306, 36161, e);
      } else {
        const e = n.texture,
          r = s.convert(e.format),
          a = s.convert(e.type),
          o = _(e.internalFormat, r, a);
        if (i) {
          const e = z(n);
          t.renderbufferStorageMultisample(36161, e, o, n.width, n.height);
        } else t.renderbufferStorage(36161, o, n.width, n.height);
      }
      t.bindRenderbuffer(36161, null);
    }
    function N(e) {
      const r = i.get(e),
        s = !0 === e.isWebGLCubeRenderTarget;
      if (e.depthTexture) {
        if (s)
          throw new Error(
            "target.depthTexture not supported in Cube render targets"
          );
        !(function (e, r) {
          if (r && r.isWebGLCubeRenderTarget)
            throw new Error(
              "Depth Texture with cube render targets is not supported"
            );
          if (
            (n.bindFramebuffer(36160, e),
            !r.depthTexture || !r.depthTexture.isDepthTexture)
          )
            throw new Error(
              "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
            );
          (i.get(r.depthTexture).__webglTexture &&
            r.depthTexture.image.width === r.width &&
            r.depthTexture.image.height === r.height) ||
            ((r.depthTexture.image.width = r.width),
            (r.depthTexture.image.height = r.height),
            (r.depthTexture.needsUpdate = !0)),
            E(r.depthTexture, 0);
          const s = i.get(r.depthTexture).__webglTexture;
          if (r.depthTexture.format === Ut)
            t.framebufferTexture2D(36160, 36096, 3553, s, 0);
          else {
            if (r.depthTexture.format !== Gt)
              throw new Error("Unknown depthTexture format");
            t.framebufferTexture2D(36160, 33306, 3553, s, 0);
          }
        })(r.__webglFramebuffer, e);
      } else if (s) {
        r.__webglDepthbuffer = [];
        for (let i = 0; i < 6; i++)
          n.bindFramebuffer(36160, r.__webglFramebuffer[i]),
            (r.__webglDepthbuffer[i] = t.createRenderbuffer()),
            D(r.__webglDepthbuffer[i], e, !1);
      } else
        n.bindFramebuffer(36160, r.__webglFramebuffer),
          (r.__webglDepthbuffer = t.createRenderbuffer()),
          D(r.__webglDepthbuffer, e, !1);
      n.bindFramebuffer(36160, null);
    }
    function z(t) {
      return o && t.isWebGLMultisampleRenderTarget ? Math.min(u, t.samples) : 0;
    }
    let O = !1,
      B = !1;
    (this.allocateTextureUnit = function () {
      const t = S;
      return (
        t >= l &&
          console.warn(
            "THREE.WebGLTextures: Trying to use " +
              t +
              " texture units while this GPU supports only " +
              l
          ),
        (S += 1),
        t
      );
    }),
      (this.resetTextureUnits = function () {
        S = 0;
      }),
      (this.setTexture2D = E),
      (this.setTexture2DArray = function (t, e) {
        const r = i.get(t);
        t.version > 0 && r.__version !== t.version
          ? C(r, t, e)
          : (n.activeTexture(33984 + e),
            n.bindTexture(35866, r.__webglTexture));
      }),
      (this.setTexture3D = function (t, e) {
        const r = i.get(t);
        t.version > 0 && r.__version !== t.version
          ? C(r, t, e)
          : (n.activeTexture(33984 + e),
            n.bindTexture(32879, r.__webglTexture));
      }),
      (this.setTextureCube = T),
      (this.setupRenderTarget = function (e) {
        const r = e.texture,
          l = i.get(e),
          c = i.get(r);
        e.addEventListener("dispose", M),
          (c.__webglTexture = t.createTexture()),
          (c.__version = r.version),
          a.memory.textures++;
        const h = !0 === e.isWebGLCubeRenderTarget,
          u = !0 === e.isWebGLMultisampleRenderTarget,
          d = r.isDataTexture3D || r.isDataTexture2DArray,
          p = v(e) || o;
        if (
          (!o ||
            r.format !== Ft ||
            (r.type !== zt && r.type !== Ot) ||
            ((r.format = Ht),
            console.warn(
              "THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead."
            )),
          h)
        ) {
          l.__webglFramebuffer = [];
          for (let e = 0; e < 6; e++)
            l.__webglFramebuffer[e] = t.createFramebuffer();
        } else if (((l.__webglFramebuffer = t.createFramebuffer()), u))
          if (o) {
            (l.__webglMultisampledFramebuffer = t.createFramebuffer()),
              (l.__webglColorRenderbuffer = t.createRenderbuffer()),
              t.bindRenderbuffer(36161, l.__webglColorRenderbuffer);
            const i = s.convert(r.format),
              a = s.convert(r.type),
              o = _(r.internalFormat, i, a),
              c = z(e);
            t.renderbufferStorageMultisample(36161, c, o, e.width, e.height),
              n.bindFramebuffer(36160, l.__webglMultisampledFramebuffer),
              t.framebufferRenderbuffer(
                36160,
                36064,
                36161,
                l.__webglColorRenderbuffer
              ),
              t.bindRenderbuffer(36161, null),
              e.depthBuffer &&
                ((l.__webglDepthRenderbuffer = t.createRenderbuffer()),
                D(l.__webglDepthRenderbuffer, e, !0)),
              n.bindFramebuffer(36160, null);
          } else
            console.warn(
              "THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."
            );
        if (h) {
          n.bindTexture(34067, c.__webglTexture), R(34067, r, p);
          for (let t = 0; t < 6; t++)
            I(l.__webglFramebuffer[t], e, 36064, 34069 + t);
          y(r, p) && x(34067, r, e.width, e.height), n.bindTexture(34067, null);
        } else {
          let t = 3553;
          if (d)
            if (o) {
              t = r.isDataTexture3D ? 32879 : 35866;
            } else
              console.warn(
                "THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2."
              );
          n.bindTexture(t, c.__webglTexture),
            R(t, r, p),
            I(l.__webglFramebuffer, e, 36064, t),
            y(r, p) && x(3553, r, e.width, e.height),
            n.bindTexture(3553, null);
        }
        e.depthBuffer && N(e);
      }),
      (this.updateRenderTargetMipmap = function (t) {
        const e = t.texture;
        if (y(e, v(t) || o)) {
          const r = t.isWebGLCubeRenderTarget ? 34067 : 3553,
            s = i.get(e).__webglTexture;
          n.bindTexture(r, s),
            x(r, e, t.width, t.height),
            n.bindTexture(r, null);
        }
      }),
      (this.updateMultisampleRenderTarget = function (e) {
        if (e.isWebGLMultisampleRenderTarget)
          if (o) {
            const r = e.width,
              s = e.height;
            let a = 16384;
            e.depthBuffer && (a |= 256), e.stencilBuffer && (a |= 1024);
            const o = i.get(e);
            n.bindFramebuffer(36008, o.__webglMultisampledFramebuffer),
              n.bindFramebuffer(36009, o.__webglFramebuffer),
              t.blitFramebuffer(0, 0, r, s, 0, 0, r, s, a, 9728),
              n.bindFramebuffer(36008, null),
              n.bindFramebuffer(36009, o.__webglMultisampledFramebuffer);
          } else
            console.warn(
              "THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."
            );
      }),
      (this.safeSetTexture2D = function (t, e) {
        t &&
          t.isWebGLRenderTarget &&
          (!1 === O &&
            (console.warn(
              "THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."
            ),
            (O = !0)),
          (t = t.texture)),
          E(t, e);
      }),
      (this.safeSetTextureCube = function (t, e) {
        t &&
          t.isWebGLCubeRenderTarget &&
          (!1 === B &&
            (console.warn(
              "THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."
            ),
            (B = !0)),
          (t = t.texture)),
          T(t, e);
      });
  }
  function ta(t, e, n) {
    const i = n.isWebGL2;
    return {
      convert: function (t) {
        let n;
        if (t === It) return 5121;
        if (1017 === t) return 32819;
        if (1018 === t) return 32820;
        if (1019 === t) return 33635;
        if (1010 === t) return 5120;
        if (1011 === t) return 5122;
        if (t === Dt) return 5123;
        if (1013 === t) return 5124;
        if (t === Nt) return 5125;
        if (t === zt) return 5126;
        if (t === Ot)
          return i
            ? 5131
            : ((n = e.get("OES_texture_half_float")),
              null !== n ? n.HALF_FLOAT_OES : null);
        if (1021 === t) return 6406;
        if (t === Ft) return 6407;
        if (t === Ht) return 6408;
        if (1024 === t) return 6409;
        if (1025 === t) return 6410;
        if (t === Ut) return 6402;
        if (t === Gt) return 34041;
        if (1028 === t) return 6403;
        if (1029 === t) return 36244;
        if (1030 === t) return 33319;
        if (1031 === t) return 33320;
        if (1032 === t) return 36248;
        if (1033 === t) return 36249;
        if (33776 === t || 33777 === t || 33778 === t || 33779 === t) {
          if (((n = e.get("WEBGL_compressed_texture_s3tc")), null === n))
            return null;
          if (33776 === t) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (33777 === t) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (33778 === t) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (33779 === t) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
        if (35840 === t || 35841 === t || 35842 === t || 35843 === t) {
          if (((n = e.get("WEBGL_compressed_texture_pvrtc")), null === n))
            return null;
          if (35840 === t) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (35841 === t) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (35842 === t) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (35843 === t) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }
        if (36196 === t)
          return (
            (n = e.get("WEBGL_compressed_texture_etc1")),
            null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null
          );
        if (
          (37492 === t || 37496 === t) &&
          ((n = e.get("WEBGL_compressed_texture_etc")), null !== n)
        ) {
          if (37492 === t) return n.COMPRESSED_RGB8_ETC2;
          if (37496 === t) return n.COMPRESSED_RGBA8_ETC2_EAC;
        }
        return 37808 === t ||
          37809 === t ||
          37810 === t ||
          37811 === t ||
          37812 === t ||
          37813 === t ||
          37814 === t ||
          37815 === t ||
          37816 === t ||
          37817 === t ||
          37818 === t ||
          37819 === t ||
          37820 === t ||
          37821 === t ||
          37840 === t ||
          37841 === t ||
          37842 === t ||
          37843 === t ||
          37844 === t ||
          37845 === t ||
          37846 === t ||
          37847 === t ||
          37848 === t ||
          37849 === t ||
          37850 === t ||
          37851 === t ||
          37852 === t ||
          37853 === t
          ? ((n = e.get("WEBGL_compressed_texture_astc")),
            null !== n ? t : null)
          : 36492 === t
          ? ((n = e.get("EXT_texture_compression_bptc")), null !== n ? t : null)
          : t === Bt
          ? i
            ? 34042
            : ((n = e.get("WEBGL_depth_texture")),
              null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null)
          : void 0;
      },
    };
  }
  class ea extends Fi {
    constructor(t = []) {
      super(), (this.cameras = t);
    }
  }
  ea.prototype.isArrayCamera = !0;
  class na extends Tn {
    constructor() {
      super(), (this.type = "Group");
    }
  }
  na.prototype.isGroup = !0;
  const ia = { type: "move" };
  class ra {
    constructor() {
      (this._targetRay = null), (this._grip = null), (this._hand = null);
    }
    getHandSpace() {
      return (
        null === this._hand &&
          ((this._hand = new na()),
          (this._hand.matrixAutoUpdate = !1),
          (this._hand.visible = !1),
          (this._hand.joints = {}),
          (this._hand.inputState = { pinching: !1 })),
        this._hand
      );
    }
    getTargetRaySpace() {
      return (
        null === this._targetRay &&
          ((this._targetRay = new na()),
          (this._targetRay.matrixAutoUpdate = !1),
          (this._targetRay.visible = !1),
          (this._targetRay.hasLinearVelocity = !1),
          (this._targetRay.linearVelocity = new Me()),
          (this._targetRay.hasAngularVelocity = !1),
          (this._targetRay.angularVelocity = new Me())),
        this._targetRay
      );
    }
    getGripSpace() {
      return (
        null === this._grip &&
          ((this._grip = new na()),
          (this._grip.matrixAutoUpdate = !1),
          (this._grip.visible = !1),
          (this._grip.hasLinearVelocity = !1),
          (this._grip.linearVelocity = new Me()),
          (this._grip.hasAngularVelocity = !1),
          (this._grip.angularVelocity = new Me())),
        this._grip
      );
    }
    dispatchEvent(t) {
      return (
        null !== this._targetRay && this._targetRay.dispatchEvent(t),
        null !== this._grip && this._grip.dispatchEvent(t),
        null !== this._hand && this._hand.dispatchEvent(t),
        this
      );
    }
    disconnect(t) {
      return (
        this.dispatchEvent({ type: "disconnected", data: t }),
        null !== this._targetRay && (this._targetRay.visible = !1),
        null !== this._grip && (this._grip.visible = !1),
        null !== this._hand && (this._hand.visible = !1),
        this
      );
    }
    update(t, e, n) {
      let i = null,
        r = null,
        s = null;
      const a = this._targetRay,
        o = this._grip,
        l = this._hand;
      if (t && "visible-blurred" !== e.session.visibilityState)
        if (
          (null !== a &&
            ((i = e.getPose(t.targetRaySpace, n)),
            null !== i &&
              (a.matrix.fromArray(i.transform.matrix),
              a.matrix.decompose(a.position, a.rotation, a.scale),
              i.linearVelocity
                ? ((a.hasLinearVelocity = !0),
                  a.linearVelocity.copy(i.linearVelocity))
                : (a.hasLinearVelocity = !1),
              i.angularVelocity
                ? ((a.hasAngularVelocity = !0),
                  a.angularVelocity.copy(i.angularVelocity))
                : (a.hasAngularVelocity = !1),
              this.dispatchEvent(ia))),
          l && t.hand)
        ) {
          s = !0;
          for (const i of t.hand.values()) {
            const t = e.getJointPose(i, n);
            if (void 0 === l.joints[i.jointName]) {
              const t = new na();
              (t.matrixAutoUpdate = !1),
                (t.visible = !1),
                (l.joints[i.jointName] = t),
                l.add(t);
            }
            const r = l.joints[i.jointName];
            null !== t &&
              (r.matrix.fromArray(t.transform.matrix),
              r.matrix.decompose(r.position, r.rotation, r.scale),
              (r.jointRadius = t.radius)),
              (r.visible = null !== t);
          }
          const i = l.joints["index-finger-tip"],
            r = l.joints["thumb-tip"],
            a = i.position.distanceTo(r.position),
            o = 0.02,
            c = 0.005;
          l.inputState.pinching && a > o + c
            ? ((l.inputState.pinching = !1),
              this.dispatchEvent({
                type: "pinchend",
                handedness: t.handedness,
                target: this,
              }))
            : !l.inputState.pinching &&
              a <= o - c &&
              ((l.inputState.pinching = !0),
              this.dispatchEvent({
                type: "pinchstart",
                handedness: t.handedness,
                target: this,
              }));
        } else
          null !== o &&
            t.gripSpace &&
            ((r = e.getPose(t.gripSpace, n)),
            null !== r &&
              (o.matrix.fromArray(r.transform.matrix),
              o.matrix.decompose(o.position, o.rotation, o.scale),
              r.linearVelocity
                ? ((o.hasLinearVelocity = !0),
                  o.linearVelocity.copy(r.linearVelocity))
                : (o.hasLinearVelocity = !1),
              r.angularVelocity
                ? ((o.hasAngularVelocity = !0),
                  o.angularVelocity.copy(r.angularVelocity))
                : (o.hasAngularVelocity = !1)));
      return (
        null !== a && (a.visible = null !== i),
        null !== o && (o.visible = null !== r),
        null !== l && (l.visible = null !== s),
        this
      );
    }
  }
  class sa extends te {
    constructor(t, e) {
      super();
      const n = this,
        i = t.state;
      let r = null,
        s = 1,
        a = null,
        o = "local-floor",
        l = null;
      const c = [],
        h = new Map(),
        u = new Fi();
      u.layers.enable(1), (u.viewport = new _e());
      const d = new Fi();
      d.layers.enable(2), (d.viewport = new _e());
      const p = [u, d],
        m = new ea();
      m.layers.enable(1), m.layers.enable(2);
      let f = null,
        g = null;
      function v(t) {
        const e = h.get(t.inputSource);
        e && e.dispatchEvent({ type: t.type, data: t.inputSource });
      }
      function y() {
        h.forEach(function (t, e) {
          t.disconnect(e);
        }),
          h.clear(),
          (f = null),
          (g = null),
          i.bindXRFramebuffer(null),
          t.setRenderTarget(t.getRenderTarget()),
          S.stop(),
          (n.isPresenting = !1),
          n.dispatchEvent({ type: "sessionend" });
      }
      function x(t) {
        const e = r.inputSources;
        for (let t = 0; t < c.length; t++) h.set(e[t], c[t]);
        for (let e = 0; e < t.removed.length; e++) {
          const n = t.removed[e],
            i = h.get(n);
          i &&
            (i.dispatchEvent({ type: "disconnected", data: n }), h.delete(n));
        }
        for (let e = 0; e < t.added.length; e++) {
          const n = t.added[e],
            i = h.get(n);
          i && i.dispatchEvent({ type: "connected", data: n });
        }
      }
      (this.enabled = !1),
        (this.isPresenting = !1),
        (this.getController = function (t) {
          let e = c[t];
          return (
            void 0 === e && ((e = new ra()), (c[t] = e)), e.getTargetRaySpace()
          );
        }),
        (this.getControllerGrip = function (t) {
          let e = c[t];
          return void 0 === e && ((e = new ra()), (c[t] = e)), e.getGripSpace();
        }),
        (this.getHand = function (t) {
          let e = c[t];
          return void 0 === e && ((e = new ra()), (c[t] = e)), e.getHandSpace();
        }),
        (this.setFramebufferScaleFactor = function (t) {
          (s = t),
            !0 === n.isPresenting &&
              console.warn(
                "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
              );
        }),
        (this.setReferenceSpaceType = function (t) {
          (o = t),
            !0 === n.isPresenting &&
              console.warn(
                "THREE.WebXRManager: Cannot change reference space type while presenting."
              );
        }),
        (this.getReferenceSpace = function () {
          return a;
        }),
        (this.getSession = function () {
          return r;
        }),
        (this.setSession = async function (t) {
          if (((r = t), null !== r)) {
            r.addEventListener("select", v),
              r.addEventListener("selectstart", v),
              r.addEventListener("selectend", v),
              r.addEventListener("squeeze", v),
              r.addEventListener("squeezestart", v),
              r.addEventListener("squeezeend", v),
              r.addEventListener("end", y),
              r.addEventListener("inputsourceschange", x);
            const t = e.getContextAttributes();
            !0 !== t.xrCompatible && (await e.makeXRCompatible());
            const i = {
                antialias: t.antialias,
                alpha: t.alpha,
                depth: t.depth,
                stencil: t.stencil,
                framebufferScaleFactor: s,
              },
              l = new XRWebGLLayer(r, e, i);
            r.updateRenderState({ baseLayer: l }),
              (a = await r.requestReferenceSpace(o)),
              S.setContext(r),
              S.start(),
              (n.isPresenting = !0),
              n.dispatchEvent({ type: "sessionstart" });
          }
        });
      const _ = new Me(),
        w = new Me();
      function b(t, e) {
        null === e
          ? t.matrixWorld.copy(t.matrix)
          : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
          t.matrixWorldInverse.copy(t.matrixWorld).invert();
      }
      this.getCamera = function (t) {
        (m.near = d.near = u.near = t.near),
          (m.far = d.far = u.far = t.far),
          (f === m.near && g === m.far) ||
            (r.updateRenderState({ depthNear: m.near, depthFar: m.far }),
            (f = m.near),
            (g = m.far));
        const e = t.parent,
          n = m.cameras;
        b(m, e);
        for (let t = 0; t < n.length; t++) b(n[t], e);
        t.matrixWorld.copy(m.matrixWorld),
          t.matrix.copy(m.matrix),
          t.matrix.decompose(t.position, t.quaternion, t.scale);
        const i = t.children;
        for (let t = 0, e = i.length; t < e; t++) i[t].updateMatrixWorld(!0);
        return (
          2 === n.length
            ? (function (t, e, n) {
                _.setFromMatrixPosition(e.matrixWorld),
                  w.setFromMatrixPosition(n.matrixWorld);
                const i = _.distanceTo(w),
                  r = e.projectionMatrix.elements,
                  s = n.projectionMatrix.elements,
                  a = r[14] / (r[10] - 1),
                  o = r[14] / (r[10] + 1),
                  l = (r[9] + 1) / r[5],
                  c = (r[9] - 1) / r[5],
                  h = (r[8] - 1) / r[0],
                  u = (s[8] + 1) / s[0],
                  d = a * h,
                  p = a * u,
                  m = i / (-h + u),
                  f = m * -h;
                e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
                  t.translateX(f),
                  t.translateZ(m),
                  t.matrixWorld.compose(t.position, t.quaternion, t.scale),
                  t.matrixWorldInverse.copy(t.matrixWorld).invert();
                const g = a + m,
                  v = o + m,
                  y = d - f,
                  x = p + (i - f),
                  b = ((l * o) / v) * g,
                  M = ((c * o) / v) * g;
                t.projectionMatrix.makePerspective(y, x, b, M, g, v);
              })(m, u, d)
            : m.projectionMatrix.copy(u.projectionMatrix),
          m
        );
      };
      let M = null;
      const S = new qi();
      S.setAnimationLoop(function (t, e) {
        if (((l = e.getViewerPose(a)), null !== l)) {
          const t = l.views,
            e = r.renderState.baseLayer;
          i.bindXRFramebuffer(e.framebuffer);
          let n = !1;
          t.length !== m.cameras.length && ((m.cameras.length = 0), (n = !0));
          for (let i = 0; i < t.length; i++) {
            const r = t[i],
              s = e.getViewport(r),
              a = p[i];
            a.matrix.fromArray(r.transform.matrix),
              a.projectionMatrix.fromArray(r.projectionMatrix),
              a.viewport.set(s.x, s.y, s.width, s.height),
              0 === i && m.matrix.copy(a.matrix),
              !0 === n && m.cameras.push(a);
          }
        }
        const n = r.inputSources;
        for (let t = 0; t < c.length; t++) {
          const i = c[t],
            r = n[t];
          i.update(r, e, a);
        }
        M && M(t, e);
      }),
        (this.setAnimationLoop = function (t) {
          M = t;
        }),
        (this.dispose = function () {});
    }
  }
  function aa(t) {
    function e(e, n) {
      (e.opacity.value = n.opacity),
        n.color && e.diffuse.value.copy(n.color),
        n.emissive &&
          e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),
        n.map && (e.map.value = n.map),
        n.alphaMap && (e.alphaMap.value = n.alphaMap),
        n.specularMap && (e.specularMap.value = n.specularMap);
      const i = t.get(n).envMap;
      if (i) {
        (e.envMap.value = i),
          (e.flipEnvMap.value = i.isCubeTexture && i._needsFlipEnvMap ? -1 : 1),
          (e.reflectivity.value = n.reflectivity),
          (e.refractionRatio.value = n.refractionRatio);
        const r = t.get(i).__maxMipLevel;
        void 0 !== r && (e.maxMipLevel.value = r);
      }
      let r, s;
      n.lightMap &&
        ((e.lightMap.value = n.lightMap),
        (e.lightMapIntensity.value = n.lightMapIntensity)),
        n.aoMap &&
          ((e.aoMap.value = n.aoMap),
          (e.aoMapIntensity.value = n.aoMapIntensity)),
        n.map
          ? (r = n.map)
          : n.specularMap
          ? (r = n.specularMap)
          : n.displacementMap
          ? (r = n.displacementMap)
          : n.normalMap
          ? (r = n.normalMap)
          : n.bumpMap
          ? (r = n.bumpMap)
          : n.roughnessMap
          ? (r = n.roughnessMap)
          : n.metalnessMap
          ? (r = n.metalnessMap)
          : n.alphaMap
          ? (r = n.alphaMap)
          : n.emissiveMap
          ? (r = n.emissiveMap)
          : n.clearcoatMap
          ? (r = n.clearcoatMap)
          : n.clearcoatNormalMap
          ? (r = n.clearcoatNormalMap)
          : n.clearcoatRoughnessMap && (r = n.clearcoatRoughnessMap),
        void 0 !== r &&
          (r.isWebGLRenderTarget && (r = r.texture),
          !0 === r.matrixAutoUpdate && r.updateMatrix(),
          e.uvTransform.value.copy(r.matrix)),
        n.aoMap ? (s = n.aoMap) : n.lightMap && (s = n.lightMap),
        void 0 !== s &&
          (s.isWebGLRenderTarget && (s = s.texture),
          !0 === s.matrixAutoUpdate && s.updateMatrix(),
          e.uv2Transform.value.copy(s.matrix));
    }
    function n(e, n) {
      (e.roughness.value = n.roughness),
        (e.metalness.value = n.metalness),
        n.roughnessMap && (e.roughnessMap.value = n.roughnessMap),
        n.metalnessMap && (e.metalnessMap.value = n.metalnessMap),
        n.emissiveMap && (e.emissiveMap.value = n.emissiveMap),
        n.bumpMap &&
          ((e.bumpMap.value = n.bumpMap),
          (e.bumpScale.value = n.bumpScale),
          1 === n.side && (e.bumpScale.value *= -1)),
        n.normalMap &&
          ((e.normalMap.value = n.normalMap),
          e.normalScale.value.copy(n.normalScale),
          1 === n.side && e.normalScale.value.negate()),
        n.displacementMap &&
          ((e.displacementMap.value = n.displacementMap),
          (e.displacementScale.value = n.displacementScale),
          (e.displacementBias.value = n.displacementBias));
      t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity);
    }
    return {
      refreshFogUniforms: function (t, e) {
        t.fogColor.value.copy(e.color),
          e.isFog
            ? ((t.fogNear.value = e.near), (t.fogFar.value = e.far))
            : e.isFogExp2 && (t.fogDensity.value = e.density);
      },
      refreshMaterialUniforms: function (t, i, r, s) {
        i.isMeshBasicMaterial
          ? e(t, i)
          : i.isMeshLambertMaterial
          ? (e(t, i),
            (function (t, e) {
              e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
            })(t, i))
          : i.isMeshToonMaterial
          ? (e(t, i),
            (function (t, e) {
              e.gradientMap && (t.gradientMap.value = e.gradientMap);
              e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
              e.bumpMap &&
                ((t.bumpMap.value = e.bumpMap),
                (t.bumpScale.value = e.bumpScale),
                1 === e.side && (t.bumpScale.value *= -1));
              e.normalMap &&
                ((t.normalMap.value = e.normalMap),
                t.normalScale.value.copy(e.normalScale),
                1 === e.side && t.normalScale.value.negate());
              e.displacementMap &&
                ((t.displacementMap.value = e.displacementMap),
                (t.displacementScale.value = e.displacementScale),
                (t.displacementBias.value = e.displacementBias));
            })(t, i))
          : i.isMeshPhongMaterial
          ? (e(t, i),
            (function (t, e) {
              t.specular.value.copy(e.specular),
                (t.shininess.value = Math.max(e.shininess, 1e-4)),
                e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
              e.bumpMap &&
                ((t.bumpMap.value = e.bumpMap),
                (t.bumpScale.value = e.bumpScale),
                1 === e.side && (t.bumpScale.value *= -1));
              e.normalMap &&
                ((t.normalMap.value = e.normalMap),
                t.normalScale.value.copy(e.normalScale),
                1 === e.side && t.normalScale.value.negate());
              e.displacementMap &&
                ((t.displacementMap.value = e.displacementMap),
                (t.displacementScale.value = e.displacementScale),
                (t.displacementBias.value = e.displacementBias));
            })(t, i))
          : i.isMeshStandardMaterial
          ? (e(t, i),
            i.isMeshPhysicalMaterial
              ? (function (t, e) {
                  n(t, e),
                    (t.reflectivity.value = e.reflectivity),
                    (t.clearcoat.value = e.clearcoat),
                    (t.clearcoatRoughness.value = e.clearcoatRoughness),
                    e.sheen && t.sheen.value.copy(e.sheen);
                  e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap);
                  e.clearcoatRoughnessMap &&
                    (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap);
                  e.clearcoatNormalMap &&
                    (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),
                    (t.clearcoatNormalMap.value = e.clearcoatNormalMap),
                    1 === e.side && t.clearcoatNormalScale.value.negate());
                  (t.transmission.value = e.transmission),
                    e.transmissionMap &&
                      (t.transmissionMap.value = e.transmissionMap);
                })(t, i)
              : n(t, i))
          : i.isMeshMatcapMaterial
          ? (e(t, i),
            (function (t, e) {
              e.matcap && (t.matcap.value = e.matcap);
              e.bumpMap &&
                ((t.bumpMap.value = e.bumpMap),
                (t.bumpScale.value = e.bumpScale),
                1 === e.side && (t.bumpScale.value *= -1));
              e.normalMap &&
                ((t.normalMap.value = e.normalMap),
                t.normalScale.value.copy(e.normalScale),
                1 === e.side && t.normalScale.value.negate());
              e.displacementMap &&
                ((t.displacementMap.value = e.displacementMap),
                (t.displacementScale.value = e.displacementScale),
                (t.displacementBias.value = e.displacementBias));
            })(t, i))
          : i.isMeshDepthMaterial
          ? (e(t, i),
            (function (t, e) {
              e.displacementMap &&
                ((t.displacementMap.value = e.displacementMap),
                (t.displacementScale.value = e.displacementScale),
                (t.displacementBias.value = e.displacementBias));
            })(t, i))
          : i.isMeshDistanceMaterial
          ? (e(t, i),
            (function (t, e) {
              e.displacementMap &&
                ((t.displacementMap.value = e.displacementMap),
                (t.displacementScale.value = e.displacementScale),
                (t.displacementBias.value = e.displacementBias));
              t.referencePosition.value.copy(e.referencePosition),
                (t.nearDistance.value = e.nearDistance),
                (t.farDistance.value = e.farDistance);
            })(t, i))
          : i.isMeshNormalMaterial
          ? (e(t, i),
            (function (t, e) {
              e.bumpMap &&
                ((t.bumpMap.value = e.bumpMap),
                (t.bumpScale.value = e.bumpScale),
                1 === e.side && (t.bumpScale.value *= -1));
              e.normalMap &&
                ((t.normalMap.value = e.normalMap),
                t.normalScale.value.copy(e.normalScale),
                1 === e.side && t.normalScale.value.negate());
              e.displacementMap &&
                ((t.displacementMap.value = e.displacementMap),
                (t.displacementScale.value = e.displacementScale),
                (t.displacementBias.value = e.displacementBias));
            })(t, i))
          : i.isLineBasicMaterial
          ? ((function (t, e) {
              t.diffuse.value.copy(e.color), (t.opacity.value = e.opacity);
            })(t, i),
            i.isLineDashedMaterial &&
              (function (t, e) {
                (t.dashSize.value = e.dashSize),
                  (t.totalSize.value = e.dashSize + e.gapSize),
                  (t.scale.value = e.scale);
              })(t, i))
          : i.isPointsMaterial
          ? (function (t, e, n, i) {
              t.diffuse.value.copy(e.color),
                (t.opacity.value = e.opacity),
                (t.size.value = e.size * n),
                (t.scale.value = 0.5 * i),
                e.map && (t.map.value = e.map);
              e.alphaMap && (t.alphaMap.value = e.alphaMap);
              let r;
              e.map ? (r = e.map) : e.alphaMap && (r = e.alphaMap);
              void 0 !== r &&
                (!0 === r.matrixAutoUpdate && r.updateMatrix(),
                t.uvTransform.value.copy(r.matrix));
            })(t, i, r, s)
          : i.isSpriteMaterial
          ? (function (t, e) {
              t.diffuse.value.copy(e.color),
                (t.opacity.value = e.opacity),
                (t.rotation.value = e.rotation),
                e.map && (t.map.value = e.map);
              e.alphaMap && (t.alphaMap.value = e.alphaMap);
              let n;
              e.map ? (n = e.map) : e.alphaMap && (n = e.alphaMap);
              void 0 !== n &&
                (!0 === n.matrixAutoUpdate && n.updateMatrix(),
                t.uvTransform.value.copy(n.matrix));
            })(t, i)
          : i.isShadowMaterial
          ? (t.color.value.copy(i.color), (t.opacity.value = i.opacity))
          : i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
      },
    };
  }
  function oa(t) {
    const e =
        void 0 !== (t = t || {}).canvas
          ? t.canvas
          : (function () {
              const t = document.createElementNS(
                "http://www.w3.org/1999/xhtml",
                "canvas"
              );
              return (t.style.display = "block"), t;
            })(),
      n = void 0 !== t.context ? t.context : null,
      i = void 0 !== t.alpha && t.alpha,
      r = void 0 === t.depth || t.depth,
      s = void 0 === t.stencil || t.stencil,
      a = void 0 !== t.antialias && t.antialias,
      o = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
      l = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
      c = void 0 !== t.powerPreference ? t.powerPreference : "default",
      h =
        void 0 !== t.failIfMajorPerformanceCaveat &&
        t.failIfMajorPerformanceCaveat;
    let u = null,
      d = null;
    const p = [],
      m = [];
    (this.domElement = e),
      (this.debug = { checkShaderErrors: !0 }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.gammaFactor = 2),
      (this.outputEncoding = Zt),
      (this.physicallyCorrectLights = !1),
      (this.toneMapping = 0),
      (this.toneMappingExposure = 1);
    const f = this;
    let g = !1,
      v = 0,
      y = 0,
      x = null,
      _ = -1,
      w = null;
    const b = new _e(),
      M = new _e();
    let S = null,
      E = e.width,
      T = e.height,
      L = 1,
      A = null,
      R = null;
    const P = new _e(0, 0, E, T),
      C = new _e(0, 0, E, T);
    let I = !1;
    const D = new Xi();
    let N = !1,
      z = !1;
    const O = new tn(),
      B = new Me(),
      F = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    function H() {
      return null === x ? L : 1;
    }
    let U,
      G,
      V,
      k,
      W,
      j,
      X,
      q,
      Y,
      Z,
      $,
      J,
      Q,
      K,
      tt,
      et,
      nt,
      it,
      rt,
      st,
      at,
      ot,
      lt = n;
    function ct(t, n) {
      for (let i = 0; i < t.length; i++) {
        const r = t[i],
          s = e.getContext(r, n);
        if (null !== s) return s;
      }
      return null;
    }
    try {
      const t = {
        alpha: i,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: o,
        preserveDrawingBuffer: l,
        powerPreference: c,
        failIfMajorPerformanceCaveat: h,
      };
      if (
        (e.addEventListener("webglcontextlost", dt, !1),
        e.addEventListener("webglcontextrestored", pt, !1),
        null === lt)
      ) {
        const e = ["webgl2", "webgl", "experimental-webgl"];
        if (
          (!0 === f.isWebGL1Renderer && e.shift(), (lt = ct(e, t)), null === lt)
        )
          throw ct(e)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
      void 0 === lt.getShaderPrecisionFormat &&
        (lt.getShaderPrecisionFormat = function () {
          return { rangeMin: 1, rangeMax: 1, precision: 1 };
        });
    } catch (t) {
      throw (console.error("THREE.WebGLRenderer: " + t.message), t);
    }
    function ht() {
      (U = new sr(lt)),
        (G = new nr(lt, U, t)),
        U.init(G),
        (at = new ta(lt, U, G)),
        (V = new Qs(lt, U, G)),
        (k = new lr()),
        (W = new Fs()),
        (j = new Ks(lt, U, V, W, G, at, k)),
        (X = new rr(f)),
        (q = new Yi(lt, G)),
        (ot = new tr(lt, U, q, G)),
        (Y = new ar(lt, q, k, ot)),
        (Z = new dr(lt, Y, q, k)),
        (it = new ur(lt)),
        (tt = new ir(W)),
        ($ = new Bs(f, X, U, G, ot, tt)),
        (J = new aa(W)),
        (Q = new Vs(W)),
        (K = new Ys(U, G)),
        (nt = new Ki(f, X, V, Z, o)),
        (et = new Js(f, Z, G)),
        (rt = new er(lt, U, k, G)),
        (st = new or(lt, U, k, G)),
        (k.programs = $.programs),
        (f.capabilities = G),
        (f.extensions = U),
        (f.properties = W),
        (f.renderLists = Q),
        (f.shadowMap = et),
        (f.state = V),
        (f.info = k);
    }
    ht();
    const ut = new sa(f, lt);
    function dt(t) {
      t.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (g = !0);
    }
    function pt() {
      console.log("THREE.WebGLRenderer: Context Restored."), (g = !1);
      const t = k.autoReset,
        e = et.enabled,
        n = et.autoUpdate,
        i = et.needsUpdate,
        r = et.type;
      ht(),
        (k.autoReset = t),
        (et.enabled = e),
        (et.autoUpdate = n),
        (et.needsUpdate = i),
        (et.type = r);
    }
    function mt(t) {
      const e = t.target;
      e.removeEventListener("dispose", mt),
        (function (t) {
          (function (t) {
            const e = W.get(t).programs;
            void 0 !== e &&
              e.forEach(function (t) {
                $.releaseProgram(t);
              });
          })(t),
            W.remove(t);
        })(e);
    }
    (this.xr = ut),
      (this.getContext = function () {
        return lt;
      }),
      (this.getContextAttributes = function () {
        return lt.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const t = U.get("WEBGL_lose_context");
        t && t.loseContext();
      }),
      (this.forceContextRestore = function () {
        const t = U.get("WEBGL_lose_context");
        t && t.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return L;
      }),
      (this.setPixelRatio = function (t) {
        void 0 !== t && ((L = t), this.setSize(E, T, !1));
      }),
      (this.getSize = function (t) {
        return (
          void 0 === t &&
            (console.warn(
              "WebGLRenderer: .getsize() now requires a Vector2 as an argument"
            ),
            (t = new pe())),
          t.set(E, T)
        );
      }),
      (this.setSize = function (t, n, i) {
        ut.isPresenting
          ? console.warn(
              "THREE.WebGLRenderer: Can't change size while VR device is presenting."
            )
          : ((E = t),
            (T = n),
            (e.width = Math.floor(t * L)),
            (e.height = Math.floor(n * L)),
            !1 !== i &&
              ((e.style.width = t + "px"), (e.style.height = n + "px")),
            this.setViewport(0, 0, t, n));
      }),
      (this.getDrawingBufferSize = function (t) {
        return (
          void 0 === t &&
            (console.warn(
              "WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"
            ),
            (t = new pe())),
          t.set(E * L, T * L).floor()
        );
      }),
      (this.setDrawingBufferSize = function (t, n, i) {
        (E = t),
          (T = n),
          (L = i),
          (e.width = Math.floor(t * i)),
          (e.height = Math.floor(n * i)),
          this.setViewport(0, 0, t, n);
      }),
      (this.getCurrentViewport = function (t) {
        return (
          void 0 === t &&
            (console.warn(
              "WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"
            ),
            (t = new _e())),
          t.copy(b)
        );
      }),
      (this.getViewport = function (t) {
        return t.copy(P);
      }),
      (this.setViewport = function (t, e, n, i) {
        t.isVector4 ? P.set(t.x, t.y, t.z, t.w) : P.set(t, e, n, i),
          V.viewport(b.copy(P).multiplyScalar(L).floor());
      }),
      (this.getScissor = function (t) {
        return t.copy(C);
      }),
      (this.setScissor = function (t, e, n, i) {
        t.isVector4 ? C.set(t.x, t.y, t.z, t.w) : C.set(t, e, n, i),
          V.scissor(M.copy(C).multiplyScalar(L).floor());
      }),
      (this.getScissorTest = function () {
        return I;
      }),
      (this.setScissorTest = function (t) {
        V.setScissorTest((I = t));
      }),
      (this.setOpaqueSort = function (t) {
        A = t;
      }),
      (this.setTransparentSort = function (t) {
        R = t;
      }),
      (this.getClearColor = function (t) {
        return (
          void 0 === t &&
            (console.warn(
              "WebGLRenderer: .getClearColor() now requires a Color as an argument"
            ),
            (t = new $n())),
          t.copy(nt.getClearColor())
        );
      }),
      (this.setClearColor = function () {
        nt.setClearColor.apply(nt, arguments);
      }),
      (this.getClearAlpha = function () {
        return nt.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        nt.setClearAlpha.apply(nt, arguments);
      }),
      (this.clear = function (t, e, n) {
        let i = 0;
        (void 0 === t || t) && (i |= 16384),
          (void 0 === e || e) && (i |= 256),
          (void 0 === n || n) && (i |= 1024),
          lt.clear(i);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        e.removeEventListener("webglcontextlost", dt, !1),
          e.removeEventListener("webglcontextrestored", pt, !1),
          Q.dispose(),
          K.dispose(),
          W.dispose(),
          X.dispose(),
          Z.dispose(),
          ot.dispose(),
          ut.dispose(),
          ut.removeEventListener("sessionstart", gt),
          ut.removeEventListener("sessionend", vt),
          yt.stop();
      }),
      (this.renderBufferImmediate = function (t, e) {
        ot.initAttributes();
        const n = W.get(t);
        t.hasPositions && !n.position && (n.position = lt.createBuffer()),
          t.hasNormals && !n.normal && (n.normal = lt.createBuffer()),
          t.hasUvs && !n.uv && (n.uv = lt.createBuffer()),
          t.hasColors && !n.color && (n.color = lt.createBuffer());
        const i = e.getAttributes();
        t.hasPositions &&
          (lt.bindBuffer(34962, n.position),
          lt.bufferData(34962, t.positionArray, 35048),
          ot.enableAttribute(i.position),
          lt.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)),
          t.hasNormals &&
            (lt.bindBuffer(34962, n.normal),
            lt.bufferData(34962, t.normalArray, 35048),
            ot.enableAttribute(i.normal),
            lt.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)),
          t.hasUvs &&
            (lt.bindBuffer(34962, n.uv),
            lt.bufferData(34962, t.uvArray, 35048),
            ot.enableAttribute(i.uv),
            lt.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)),
          t.hasColors &&
            (lt.bindBuffer(34962, n.color),
            lt.bufferData(34962, t.colorArray, 35048),
            ot.enableAttribute(i.color),
            lt.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)),
          ot.disableUnusedAttributes(),
          lt.drawArrays(4, 0, t.count),
          (t.count = 0);
      }),
      (this.renderBufferDirect = function (t, e, n, i, r, s) {
        null === e && (e = F);
        const a = r.isMesh && r.matrixWorld.determinant() < 0,
          o = St(t, e, i, r);
        V.setMaterial(i, a);
        let l = n.index;
        const c = n.attributes.position;
        if (null === l) {
          if (void 0 === c || 0 === c.count) return;
        } else if (0 === l.count) return;
        let h,
          u = 1;
        !0 === i.wireframe && ((l = Y.getWireframeAttribute(n)), (u = 2)),
          (i.morphTargets || i.morphNormals) && it.update(r, n, i, o),
          ot.setup(r, i, o, n, l);
        let d = rt;
        null !== l && ((h = q.get(l)), (d = st), d.setIndex(h));
        const p = null !== l ? l.count : c.count,
          m = n.drawRange.start * u,
          f = n.drawRange.count * u,
          g = null !== s ? s.start * u : 0,
          v = null !== s ? s.count * u : 1 / 0,
          y = Math.max(m, g),
          x = Math.min(p, m + f, g + v) - 1,
          _ = Math.max(0, x - y + 1);
        if (0 !== _) {
          if (r.isMesh)
            !0 === i.wireframe
              ? (V.setLineWidth(i.wireframeLinewidth * H()), d.setMode(1))
              : d.setMode(4);
          else if (r.isLine) {
            let t = i.linewidth;
            void 0 === t && (t = 1),
              V.setLineWidth(t * H()),
              r.isLineSegments
                ? d.setMode(1)
                : r.isLineLoop
                ? d.setMode(2)
                : d.setMode(3);
          } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
          if (r.isInstancedMesh) d.renderInstances(y, _, r.count);
          else if (n.isInstancedBufferGeometry) {
            const t = Math.min(n.instanceCount, n._maxInstanceCount);
            d.renderInstances(y, _, t);
          } else d.render(y, _);
        }
      }),
      (this.compile = function (t, e) {
        (d = K.get(t)),
          d.init(),
          t.traverseVisible(function (t) {
            t.isLight &&
              t.layers.test(e.layers) &&
              (d.pushLight(t), t.castShadow && d.pushShadow(t));
          }),
          d.setupLights(),
          t.traverse(function (e) {
            const n = e.material;
            if (n)
              if (Array.isArray(n))
                for (let i = 0; i < n.length; i++) {
                  bt(n[i], t, e);
                }
              else bt(n, t, e);
          });
      });
    let ft = null;
    function gt() {
      yt.stop();
    }
    function vt() {
      yt.start();
    }
    const yt = new qi();
    function xt(t, e, n, i) {
      if (!1 === t.visible) return;
      if (t.layers.test(e.layers))
        if (t.isGroup) n = t.renderOrder;
        else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
        else if (t.isLight) d.pushLight(t), t.castShadow && d.pushShadow(t);
        else if (t.isSprite) {
          if (!t.frustumCulled || D.intersectsSprite(t)) {
            i && B.setFromMatrixPosition(t.matrixWorld).applyMatrix4(O);
            const e = Z.update(t),
              r = t.material;
            r.visible && u.push(t, e, r, n, B.z, null);
          }
        } else if (t.isImmediateRenderObject)
          i && B.setFromMatrixPosition(t.matrixWorld).applyMatrix4(O),
            u.push(t, null, t.material, n, B.z, null);
        else if (
          (t.isMesh || t.isLine || t.isPoints) &&
          (t.isSkinnedMesh &&
            t.skeleton.frame !== k.render.frame &&
            (t.skeleton.update(), (t.skeleton.frame = k.render.frame)),
          !t.frustumCulled || D.intersectsObject(t))
        ) {
          i && B.setFromMatrixPosition(t.matrixWorld).applyMatrix4(O);
          const e = Z.update(t),
            r = t.material;
          if (Array.isArray(r)) {
            const i = e.groups;
            for (let s = 0, a = i.length; s < a; s++) {
              const a = i[s],
                o = r[a.materialIndex];
              o && o.visible && u.push(t, e, o, n, B.z, a);
            }
          } else r.visible && u.push(t, e, r, n, B.z, null);
        }
      const r = t.children;
      for (let t = 0, s = r.length; t < s; t++) xt(r[t], e, n, i);
    }
    function _t(t, e, n) {
      const i = !0 === e.isScene ? e.overrideMaterial : null;
      for (let r = 0, s = t.length; r < s; r++) {
        const s = t[r],
          a = s.object,
          o = s.geometry,
          l = null === i ? s.material : i,
          c = s.group;
        if (n.isArrayCamera) {
          const t = n.cameras;
          for (let n = 0, i = t.length; n < i; n++) {
            const i = t[n];
            a.layers.test(i.layers) &&
              (V.viewport(b.copy(i.viewport)),
              d.setupLightsView(i),
              wt(a, e, i, o, l, c));
          }
        } else wt(a, e, n, o, l, c);
      }
    }
    function wt(t, e, n, i, r, s) {
      if (
        (t.onBeforeRender(f, e, n, i, r, s),
        t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld),
        t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
        t.isImmediateRenderObject)
      ) {
        const i = St(n, e, r, t);
        V.setMaterial(r),
          ot.reset(),
          (function (t, e) {
            t.render(function (t) {
              f.renderBufferImmediate(t, e);
            });
          })(t, i);
      } else f.renderBufferDirect(n, e, i, r, t, s);
      t.onAfterRender(f, e, n, i, r, s);
    }
    function bt(t, e, n) {
      !0 !== e.isScene && (e = F);
      const i = W.get(t),
        r = d.state.lights,
        s = d.state.shadowsArray,
        a = r.state.version,
        o = $.getParameters(t, r.state, s, e, n),
        l = $.getProgramCacheKey(o);
      let c = i.programs;
      (i.environment = t.isMeshStandardMaterial ? e.environment : null),
        (i.fog = e.fog),
        (i.envMap = X.get(t.envMap || i.environment)),
        void 0 === c &&
          (t.addEventListener("dispose", mt),
          (c = new Map()),
          (i.programs = c));
      let h = c.get(l);
      if (void 0 !== h) {
        if (i.currentProgram === h && i.lightsStateVersion === a)
          return Mt(t, o), h;
      } else
        (o.uniforms = $.getUniforms(t)),
          t.onBuild(o, f),
          t.onBeforeCompile(o, f),
          (h = $.acquireProgram(o, l)),
          c.set(l, h),
          (i.uniforms = o.uniforms);
      const u = i.uniforms;
      ((t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping) ||
        (u.clippingPlanes = tt.uniform),
        Mt(t, o),
        (i.needsLights = (function (t) {
          return (
            t.isMeshLambertMaterial ||
            t.isMeshToonMaterial ||
            t.isMeshPhongMaterial ||
            t.isMeshStandardMaterial ||
            t.isShadowMaterial ||
            (t.isShaderMaterial && !0 === t.lights)
          );
        })(t)),
        (i.lightsStateVersion = a),
        i.needsLights &&
          ((u.ambientLightColor.value = r.state.ambient),
          (u.lightProbe.value = r.state.probe),
          (u.directionalLights.value = r.state.directional),
          (u.directionalLightShadows.value = r.state.directionalShadow),
          (u.spotLights.value = r.state.spot),
          (u.spotLightShadows.value = r.state.spotShadow),
          (u.rectAreaLights.value = r.state.rectArea),
          (u.ltc_1.value = r.state.rectAreaLTC1),
          (u.ltc_2.value = r.state.rectAreaLTC2),
          (u.pointLights.value = r.state.point),
          (u.pointLightShadows.value = r.state.pointShadow),
          (u.hemisphereLights.value = r.state.hemi),
          (u.directionalShadowMap.value = r.state.directionalShadowMap),
          (u.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
          (u.spotShadowMap.value = r.state.spotShadowMap),
          (u.spotShadowMatrix.value = r.state.spotShadowMatrix),
          (u.pointShadowMap.value = r.state.pointShadowMap),
          (u.pointShadowMatrix.value = r.state.pointShadowMatrix));
      const p = h.getUniforms(),
        m = gs.seqWithValue(p.seq, u);
      return (i.currentProgram = h), (i.uniformsList = m), h;
    }
    function Mt(t, e) {
      const n = W.get(t);
      (n.outputEncoding = e.outputEncoding),
        (n.instancing = e.instancing),
        (n.numClippingPlanes = e.numClippingPlanes),
        (n.numIntersection = e.numClipIntersection),
        (n.vertexAlphas = e.vertexAlphas);
    }
    function St(t, e, n, i) {
      !0 !== e.isScene && (e = F), j.resetTextureUnits();
      const r = e.fog,
        s = n.isMeshStandardMaterial ? e.environment : null,
        a = null === x ? f.outputEncoding : x.texture.encoding,
        o = X.get(n.envMap || s),
        l =
          !0 === n.vertexColors &&
          i.geometry &&
          i.geometry.attributes.color &&
          4 === i.geometry.attributes.color.itemSize,
        c = W.get(n),
        h = d.state.lights;
      if (!0 === N && (!0 === z || t !== w)) {
        const e = t === w && n.id === _;
        tt.setState(n, t, e);
      }
      let u = !1;
      n.version === c.__version
        ? (c.needsLights && c.lightsStateVersion !== h.state.version) ||
          c.outputEncoding !== a ||
          (i.isInstancedMesh && !1 === c.instancing)
          ? (u = !0)
          : i.isInstancedMesh || !0 !== c.instancing
          ? c.envMap !== o || (n.fog && c.fog !== r)
            ? (u = !0)
            : void 0 === c.numClippingPlanes ||
              (c.numClippingPlanes === tt.numPlanes &&
                c.numIntersection === tt.numIntersection)
            ? c.vertexAlphas !== l && (u = !0)
            : (u = !0)
          : (u = !0)
        : ((u = !0), (c.__version = n.version));
      let p = c.currentProgram;
      !0 === u && (p = bt(n, e, i));
      let m = !1,
        g = !1,
        v = !1;
      const y = p.getUniforms(),
        b = c.uniforms;
      if (
        (V.useProgram(p.program) && ((m = !0), (g = !0), (v = !0)),
        n.id !== _ && ((_ = n.id), (g = !0)),
        m || w !== t)
      ) {
        if (
          (y.setValue(lt, "projectionMatrix", t.projectionMatrix),
          G.logarithmicDepthBuffer &&
            y.setValue(
              lt,
              "logDepthBufFC",
              2 / (Math.log(t.far + 1) / Math.LN2)
            ),
          w !== t && ((w = t), (g = !0), (v = !0)),
          n.isShaderMaterial ||
            n.isMeshPhongMaterial ||
            n.isMeshToonMaterial ||
            n.isMeshStandardMaterial ||
            n.envMap)
        ) {
          const e = y.map.cameraPosition;
          void 0 !== e &&
            e.setValue(lt, B.setFromMatrixPosition(t.matrixWorld));
        }
        (n.isMeshPhongMaterial ||
          n.isMeshToonMaterial ||
          n.isMeshLambertMaterial ||
          n.isMeshBasicMaterial ||
          n.isMeshStandardMaterial ||
          n.isShaderMaterial) &&
          y.setValue(lt, "isOrthographic", !0 === t.isOrthographicCamera),
          (n.isMeshPhongMaterial ||
            n.isMeshToonMaterial ||
            n.isMeshLambertMaterial ||
            n.isMeshBasicMaterial ||
            n.isMeshStandardMaterial ||
            n.isShaderMaterial ||
            n.isShadowMaterial ||
            n.skinning) &&
            y.setValue(lt, "viewMatrix", t.matrixWorldInverse);
      }
      if (n.skinning) {
        y.setOptional(lt, i, "bindMatrix"),
          y.setOptional(lt, i, "bindMatrixInverse");
        const t = i.skeleton;
        if (t) {
          const e = t.bones;
          if (G.floatVertexTextures) {
            if (null === t.boneTexture) {
              let n = Math.sqrt(4 * e.length);
              (n = he(n)), (n = Math.max(n, 4));
              const i = new Float32Array(n * n * 4);
              i.set(t.boneMatrices);
              const r = new ki(i, n, n, Ht, zt);
              (t.boneMatrices = i),
                (t.boneTexture = r),
                (t.boneTextureSize = n);
            }
            y.setValue(lt, "boneTexture", t.boneTexture, j),
              y.setValue(lt, "boneTextureSize", t.boneTextureSize);
          } else y.setOptional(lt, t, "boneMatrices");
        }
      }
      var M, S;
      return (
        (g || c.receiveShadow !== i.receiveShadow) &&
          ((c.receiveShadow = i.receiveShadow),
          y.setValue(lt, "receiveShadow", i.receiveShadow)),
        g &&
          (y.setValue(lt, "toneMappingExposure", f.toneMappingExposure),
          c.needsLights &&
            ((S = v),
            ((M = b).ambientLightColor.needsUpdate = S),
            (M.lightProbe.needsUpdate = S),
            (M.directionalLights.needsUpdate = S),
            (M.directionalLightShadows.needsUpdate = S),
            (M.pointLights.needsUpdate = S),
            (M.pointLightShadows.needsUpdate = S),
            (M.spotLights.needsUpdate = S),
            (M.spotLightShadows.needsUpdate = S),
            (M.rectAreaLights.needsUpdate = S),
            (M.hemisphereLights.needsUpdate = S)),
          r && n.fog && J.refreshFogUniforms(b, r),
          J.refreshMaterialUniforms(b, n, L, T),
          gs.upload(lt, c.uniformsList, b, j)),
        n.isShaderMaterial &&
          !0 === n.uniformsNeedUpdate &&
          (gs.upload(lt, c.uniformsList, b, j), (n.uniformsNeedUpdate = !1)),
        n.isSpriteMaterial && y.setValue(lt, "center", i.center),
        y.setValue(lt, "modelViewMatrix", i.modelViewMatrix),
        y.setValue(lt, "normalMatrix", i.normalMatrix),
        y.setValue(lt, "modelMatrix", i.matrixWorld),
        p
      );
    }
    yt.setAnimationLoop(function (t) {
      ft && ft(t);
    }),
      "undefined" != typeof window && yt.setContext(window),
      (this.setAnimationLoop = function (t) {
        (ft = t), ut.setAnimationLoop(t), null === t ? yt.stop() : yt.start();
      }),
      ut.addEventListener("sessionstart", gt),
      ut.addEventListener("sessionend", vt),
      (this.render = function (t, e) {
        let n, i;
        if (
          (void 0 !== arguments[2] &&
            (console.warn(
              "THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."
            ),
            (n = arguments[2])),
          void 0 !== arguments[3] &&
            (console.warn(
              "THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."
            ),
            (i = arguments[3])),
          void 0 !== e && !0 !== e.isCamera)
        )
          return void console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
        if (!0 === g) return;
        !0 === t.autoUpdate && t.updateMatrixWorld(),
          null === e.parent && e.updateMatrixWorld(),
          !0 === ut.enabled && !0 === ut.isPresenting && (e = ut.getCamera(e)),
          !0 === t.isScene && t.onBeforeRender(f, t, e, n || x),
          (d = K.get(t, m.length)),
          d.init(),
          m.push(d),
          O.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
          D.setFromProjectionMatrix(O),
          (z = this.localClippingEnabled),
          (N = tt.init(this.clippingPlanes, z, e)),
          (u = Q.get(t, p.length)),
          u.init(),
          p.push(u),
          xt(t, e, 0, f.sortObjects),
          u.finish(),
          !0 === f.sortObjects && u.sort(A, R),
          !0 === N && tt.beginShadows();
        const r = d.state.shadowsArray;
        et.render(r, t, e),
          d.setupLights(),
          d.setupLightsView(e),
          !0 === N && tt.endShadows(),
          !0 === this.info.autoReset && this.info.reset(),
          void 0 !== n && this.setRenderTarget(n),
          nt.render(u, t, e, i);
        const s = u.opaque,
          a = u.transparent;
        s.length > 0 && _t(s, t, e),
          a.length > 0 && _t(a, t, e),
          null !== x &&
            (j.updateRenderTargetMipmap(x), j.updateMultisampleRenderTarget(x)),
          !0 === t.isScene && t.onAfterRender(f, t, e),
          V.buffers.depth.setTest(!0),
          V.buffers.depth.setMask(!0),
          V.buffers.color.setMask(!0),
          V.setPolygonOffset(!1),
          ot.resetDefaultState(),
          (_ = -1),
          (w = null),
          m.pop(),
          (d = m.length > 0 ? m[m.length - 1] : null),
          p.pop(),
          (u = p.length > 0 ? p[p.length - 1] : null);
      }),
      (this.getActiveCubeFace = function () {
        return v;
      }),
      (this.getActiveMipmapLevel = function () {
        return y;
      }),
      (this.getRenderTarget = function () {
        return x;
      }),
      (this.setRenderTarget = function (t, e = 0, n = 0) {
        (x = t),
          (v = e),
          (y = n),
          t && void 0 === W.get(t).__webglFramebuffer && j.setupRenderTarget(t);
        let i = null,
          r = !1,
          s = !1;
        if (t) {
          const n = t.texture;
          (n.isDataTexture3D || n.isDataTexture2DArray) && (s = !0);
          const a = W.get(t).__webglFramebuffer;
          t.isWebGLCubeRenderTarget
            ? ((i = a[e]), (r = !0))
            : (i = t.isWebGLMultisampleRenderTarget
                ? W.get(t).__webglMultisampledFramebuffer
                : a),
            b.copy(t.viewport),
            M.copy(t.scissor),
            (S = t.scissorTest);
        } else
          b.copy(P).multiplyScalar(L).floor(),
            M.copy(C).multiplyScalar(L).floor(),
            (S = I);
        if (
          (V.bindFramebuffer(36160, i),
          V.viewport(b),
          V.scissor(M),
          V.setScissorTest(S),
          r)
        ) {
          const i = W.get(t.texture);
          lt.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n);
        } else if (s) {
          const i = W.get(t.texture),
            r = e || 0;
          lt.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r);
        }
      }),
      (this.readRenderTargetPixels = function (t, e, n, i, r, s, a) {
        if (!t || !t.isWebGLRenderTarget)
          return void console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
        let o = W.get(t).__webglFramebuffer;
        if ((t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o)) {
          V.bindFramebuffer(36160, o);
          try {
            const a = t.texture,
              o = a.format,
              l = a.type;
            if (o !== Ht && at.convert(o) !== lt.getParameter(35739))
              return void console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
            const c =
              l === Ot &&
              (U.has("EXT_color_buffer_half_float") ||
                (G.isWebGL2 && U.has("EXT_color_buffer_float")));
            if (
              !(
                l === It ||
                at.convert(l) === lt.getParameter(35738) ||
                (l === zt &&
                  (G.isWebGL2 ||
                    U.has("OES_texture_float") ||
                    U.has("WEBGL_color_buffer_float"))) ||
                c
              )
            )
              return void console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
            36053 === lt.checkFramebufferStatus(36160)
              ? e >= 0 &&
                e <= t.width - i &&
                n >= 0 &&
                n <= t.height - r &&
                lt.readPixels(e, n, i, r, at.convert(o), at.convert(l), s)
              : console.error(
                  "THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."
                );
          } finally {
            const t = null !== x ? W.get(x).__webglFramebuffer : null;
            V.bindFramebuffer(36160, t);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (t, e, n = 0) {
        const i = Math.pow(2, -n),
          r = Math.floor(e.image.width * i),
          s = Math.floor(e.image.height * i),
          a = at.convert(e.format);
        j.setTexture2D(e, 0),
          lt.copyTexImage2D(3553, n, a, t.x, t.y, r, s, 0),
          V.unbindTexture();
      }),
      (this.copyTextureToTexture = function (t, e, n, i = 0) {
        const r = e.image.width,
          s = e.image.height,
          a = at.convert(n.format),
          o = at.convert(n.type);
        j.setTexture2D(n, 0),
          lt.pixelStorei(37440, n.flipY),
          lt.pixelStorei(37441, n.premultiplyAlpha),
          lt.pixelStorei(3317, n.unpackAlignment),
          e.isDataTexture
            ? lt.texSubImage2D(3553, i, t.x, t.y, r, s, a, o, e.image.data)
            : e.isCompressedTexture
            ? lt.compressedTexSubImage2D(
                3553,
                i,
                t.x,
                t.y,
                e.mipmaps[0].width,
                e.mipmaps[0].height,
                a,
                e.mipmaps[0].data
              )
            : lt.texSubImage2D(3553, i, t.x, t.y, a, o, e.image),
          0 === i && n.generateMipmaps && lt.generateMipmap(3553),
          V.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (t, e, n, i, r = 0) {
        if (f.isWebGL1Renderer)
          return void console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
          );
        const { width: s, height: a, data: o } = n.image,
          l = at.convert(i.format),
          c = at.convert(i.type);
        let h;
        if (i.isDataTexture3D) j.setTexture3D(i, 0), (h = 32879);
        else {
          if (!i.isDataTexture2DArray)
            return void console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
            );
          j.setTexture2DArray(i, 0), (h = 35866);
        }
        lt.pixelStorei(37440, i.flipY),
          lt.pixelStorei(37441, i.premultiplyAlpha),
          lt.pixelStorei(3317, i.unpackAlignment);
        const u = lt.getParameter(3314),
          d = lt.getParameter(32878),
          p = lt.getParameter(3316),
          m = lt.getParameter(3315),
          g = lt.getParameter(32877);
        lt.pixelStorei(3314, s),
          lt.pixelStorei(32878, a),
          lt.pixelStorei(3316, t.min.x),
          lt.pixelStorei(3315, t.min.y),
          lt.pixelStorei(32877, t.min.z),
          lt.texSubImage3D(
            h,
            r,
            e.x,
            e.y,
            e.z,
            t.max.x - t.min.x + 1,
            t.max.y - t.min.y + 1,
            t.max.z - t.min.z + 1,
            l,
            c,
            o
          ),
          lt.pixelStorei(3314, u),
          lt.pixelStorei(32878, d),
          lt.pixelStorei(3316, p),
          lt.pixelStorei(3315, m),
          lt.pixelStorei(32877, g),
          0 === r && i.generateMipmaps && lt.generateMipmap(h),
          V.unbindTexture();
      }),
      (this.initTexture = function (t) {
        j.setTexture2D(t, 0), V.unbindTexture();
      }),
      (this.resetState = function () {
        (v = 0), (y = 0), (x = null), V.reset(), ot.reset();
      }),
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  (class extends oa {}).prototype.isWebGL1Renderer = !0;
  class la extends Tn {
    constructor() {
      super(),
        (this.type = "Scene"),
        (this.background = null),
        (this.environment = null),
        (this.fog = null),
        (this.overrideMaterial = null),
        (this.autoUpdate = !0),
        "undefined" != typeof __THREE_DEVTOOLS__ &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent("observe", { detail: this })
          );
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        null !== t.background && (this.background = t.background.clone()),
        null !== t.environment && (this.environment = t.environment.clone()),
        null !== t.fog && (this.fog = t.fog.clone()),
        null !== t.overrideMaterial &&
          (this.overrideMaterial = t.overrideMaterial.clone()),
        (this.autoUpdate = t.autoUpdate),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        this
      );
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        null !== this.background &&
          (e.object.background = this.background.toJSON(t)),
        null !== this.environment &&
          (e.object.environment = this.environment.toJSON(t)),
        null !== this.fog && (e.object.fog = this.fog.toJSON()),
        e
      );
    }
  }
  la.prototype.isScene = !0;
  class ca {
    constructor(t, e) {
      (this.array = t),
        (this.stride = e),
        (this.count = void 0 !== t ? t.length / e : 0),
        (this.usage = Jt),
        (this.updateRange = { offset: 0, count: -1 }),
        (this.version = 0),
        (this.uuid = se()),
        (this.onUploadCallback = function () {});
    }
    set needsUpdate(t) {
      !0 === t && this.version++;
    }
    setUsage(t) {
      return (this.usage = t), this;
    }
    copy(t) {
      return (
        (this.array = new t.array.constructor(t.array)),
        (this.count = t.count),
        (this.stride = t.stride),
        (this.usage = t.usage),
        this
      );
    }
    copyAt(t, e, n) {
      (t *= this.stride), (n *= e.stride);
      for (let i = 0, r = this.stride; i < r; i++)
        this.array[t + i] = e.array[n + i];
      return this;
    }
    set(t, e = 0) {
      return this.array.set(t, e), this;
    }
    clone(t) {
      void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
        void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = se()),
        void 0 === t.arrayBuffers[this.array.buffer._uuid] &&
          (t.arrayBuffers[this.array.buffer._uuid] =
            this.array.slice(0).buffer);
      const e = new this.array.constructor(
          t.arrayBuffers[this.array.buffer._uuid]
        ),
        n = new ca(e, this.stride);
      return n.setUsage(this.usage), n;
    }
    onUpload(t) {
      return (this.onUploadCallback = t), this;
    }
    toJSON(t) {
      return (
        void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
        void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = se()),
        void 0 === t.arrayBuffers[this.array.buffer._uuid] &&
          (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(
            new Uint32Array(this.array.buffer)
          )),
        {
          uuid: this.uuid,
          buffer: this.array.buffer._uuid,
          type: this.array.constructor.name,
          stride: this.stride,
        }
      );
    }
  }
  ca.prototype.isInterleavedBuffer = !0;
  const ha = new Me();
  class ua {
    constructor(t, e, n, i) {
      (this.name = ""),
        (this.data = t),
        (this.itemSize = e),
        (this.offset = n),
        (this.normalized = !0 === i);
    }
    get count() {
      return this.data.count;
    }
    get array() {
      return this.data.array;
    }
    set needsUpdate(t) {
      this.data.needsUpdate = t;
    }
    applyMatrix4(t) {
      for (let e = 0, n = this.data.count; e < n; e++)
        (ha.x = this.getX(e)),
          (ha.y = this.getY(e)),
          (ha.z = this.getZ(e)),
          ha.applyMatrix4(t),
          this.setXYZ(e, ha.x, ha.y, ha.z);
      return this;
    }
    applyNormalMatrix(t) {
      for (let e = 0, n = this.count; e < n; e++)
        (ha.x = this.getX(e)),
          (ha.y = this.getY(e)),
          (ha.z = this.getZ(e)),
          ha.applyNormalMatrix(t),
          this.setXYZ(e, ha.x, ha.y, ha.z);
      return this;
    }
    transformDirection(t) {
      for (let e = 0, n = this.count; e < n; e++)
        (ha.x = this.getX(e)),
          (ha.y = this.getY(e)),
          (ha.z = this.getZ(e)),
          ha.transformDirection(t),
          this.setXYZ(e, ha.x, ha.y, ha.z);
      return this;
    }
    setX(t, e) {
      return (this.data.array[t * this.data.stride + this.offset] = e), this;
    }
    setY(t, e) {
      return (
        (this.data.array[t * this.data.stride + this.offset + 1] = e), this
      );
    }
    setZ(t, e) {
      return (
        (this.data.array[t * this.data.stride + this.offset + 2] = e), this
      );
    }
    setW(t, e) {
      return (
        (this.data.array[t * this.data.stride + this.offset + 3] = e), this
      );
    }
    getX(t) {
      return this.data.array[t * this.data.stride + this.offset];
    }
    getY(t) {
      return this.data.array[t * this.data.stride + this.offset + 1];
    }
    getZ(t) {
      return this.data.array[t * this.data.stride + this.offset + 2];
    }
    getW(t) {
      return this.data.array[t * this.data.stride + this.offset + 3];
    }
    setXY(t, e, n) {
      return (
        (t = t * this.data.stride + this.offset),
        (this.data.array[t + 0] = e),
        (this.data.array[t + 1] = n),
        this
      );
    }
    setXYZ(t, e, n, i) {
      return (
        (t = t * this.data.stride + this.offset),
        (this.data.array[t + 0] = e),
        (this.data.array[t + 1] = n),
        (this.data.array[t + 2] = i),
        this
      );
    }
    setXYZW(t, e, n, i, r) {
      return (
        (t = t * this.data.stride + this.offset),
        (this.data.array[t + 0] = e),
        (this.data.array[t + 1] = n),
        (this.data.array[t + 2] = i),
        (this.data.array[t + 3] = r),
        this
      );
    }
    clone(t) {
      if (void 0 === t) {
        console.log(
          "THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data."
        );
        const t = [];
        for (let e = 0; e < this.count; e++) {
          const n = e * this.data.stride + this.offset;
          for (let e = 0; e < this.itemSize; e++)
            t.push(this.data.array[n + e]);
        }
        return new ti(
          new this.array.constructor(t),
          this.itemSize,
          this.normalized
        );
      }
      return (
        void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
        void 0 === t.interleavedBuffers[this.data.uuid] &&
          (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
        new ua(
          t.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized
        )
      );
    }
    toJSON(t) {
      if (void 0 === t) {
        console.log(
          "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data."
        );
        const t = [];
        for (let e = 0; e < this.count; e++) {
          const n = e * this.data.stride + this.offset;
          for (let e = 0; e < this.itemSize; e++)
            t.push(this.data.array[n + e]);
        }
        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: t,
          normalized: this.normalized,
        };
      }
      return (
        void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
        void 0 === t.interleavedBuffers[this.data.uuid] &&
          (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
    }
  }
  ua.prototype.isInterleavedBufferAttribute = !0;
  class da extends kn {
    constructor(t) {
      super(),
        (this.type = "SpriteMaterial"),
        (this.color = new $n(16777215)),
        (this.map = null),
        (this.alphaMap = null),
        (this.rotation = 0),
        (this.sizeAttenuation = !0),
        (this.transparent = !0),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        (this.map = t.map),
        (this.alphaMap = t.alphaMap),
        (this.rotation = t.rotation),
        (this.sizeAttenuation = t.sizeAttenuation),
        this
      );
    }
  }
  let pa;
  da.prototype.isSpriteMaterial = !0;
  const ma = new Me(),
    fa = new Me(),
    ga = new Me(),
    va = new pe(),
    ya = new pe(),
    xa = new tn(),
    _a = new Me(),
    wa = new Me(),
    ba = new Me(),
    Ma = new pe(),
    Sa = new pe(),
    Ea = new pe();
  function Ta(t, e, n, i, r, s) {
    va.subVectors(t, n).addScalar(0.5).multiply(i),
      void 0 !== r
        ? ((ya.x = s * va.x - r * va.y), (ya.y = r * va.x + s * va.y))
        : ya.copy(va),
      t.copy(e),
      (t.x += ya.x),
      (t.y += ya.y),
      t.applyMatrix4(xa);
  }
  (class extends Tn {
    constructor(t) {
      if ((super(), (this.type = "Sprite"), void 0 === pa)) {
        pa = new di();
        const t = new Float32Array([
            -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5,
            0.5, 0, 0, 1,
          ]),
          e = new ca(t, 5);
        pa.setIndex([0, 1, 2, 0, 2, 3]),
          pa.setAttribute("position", new ua(e, 3, 0, !1)),
          pa.setAttribute("uv", new ua(e, 2, 3, !1));
      }
      (this.geometry = pa),
        (this.material = void 0 !== t ? t : new da()),
        (this.center = new pe(0.5, 0.5));
    }
    raycast(t, e) {
      null === t.camera &&
        console.error(
          'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
        ),
        fa.setFromMatrixScale(this.matrixWorld),
        xa.copy(t.camera.matrixWorld),
        this.modelViewMatrix.multiplyMatrices(
          t.camera.matrixWorldInverse,
          this.matrixWorld
        ),
        ga.setFromMatrixPosition(this.modelViewMatrix),
        t.camera.isPerspectiveCamera &&
          !1 === this.material.sizeAttenuation &&
          fa.multiplyScalar(-ga.z);
      const n = this.material.rotation;
      let i, r;
      0 !== n && ((r = Math.cos(n)), (i = Math.sin(n)));
      const s = this.center;
      Ta(_a.set(-0.5, -0.5, 0), ga, s, fa, i, r),
        Ta(wa.set(0.5, -0.5, 0), ga, s, fa, i, r),
        Ta(ba.set(0.5, 0.5, 0), ga, s, fa, i, r),
        Ma.set(0, 0),
        Sa.set(1, 0),
        Ea.set(1, 1);
      let a = t.ray.intersectTriangle(_a, wa, ba, !1, ma);
      if (
        null === a &&
        (Ta(wa.set(-0.5, 0.5, 0), ga, s, fa, i, r),
        Sa.set(0, 1),
        (a = t.ray.intersectTriangle(_a, ba, wa, !1, ma)),
        null === a)
      )
        return;
      const o = t.ray.origin.distanceTo(ma);
      o < t.near ||
        o > t.far ||
        e.push({
          distance: o,
          point: ma.clone(),
          uv: Gn.getUV(ma, _a, wa, ba, Ma, Sa, Ea, new pe()),
          face: null,
          object: this,
        });
    }
    copy(t) {
      return (
        super.copy(t),
        void 0 !== t.center && this.center.copy(t.center),
        (this.material = t.material),
        this
      );
    }
  }).prototype.isSprite = !0;
  const La = new Me(),
    Aa = new _e(),
    Ra = new _e(),
    Pa = new Me(),
    Ca = new tn();
  class Ia extends Pi {
    constructor(t, e) {
      super(t, e),
        (this.type = "SkinnedMesh"),
        (this.bindMode = "attached"),
        (this.bindMatrix = new tn()),
        (this.bindMatrixInverse = new tn());
    }
    copy(t) {
      return (
        super.copy(t),
        (this.bindMode = t.bindMode),
        this.bindMatrix.copy(t.bindMatrix),
        this.bindMatrixInverse.copy(t.bindMatrixInverse),
        (this.skeleton = t.skeleton),
        this
      );
    }
    bind(t, e) {
      (this.skeleton = t),
        void 0 === e &&
          (this.updateMatrixWorld(!0),
          this.skeleton.calculateInverses(),
          (e = this.matrixWorld)),
        this.bindMatrix.copy(e),
        this.bindMatrixInverse.copy(e).invert();
    }
    pose() {
      this.skeleton.pose();
    }
    normalizeSkinWeights() {
      const t = new _e(),
        e = this.geometry.attributes.skinWeight;
      for (let n = 0, i = e.count; n < i; n++) {
        (t.x = e.getX(n)),
          (t.y = e.getY(n)),
          (t.z = e.getZ(n)),
          (t.w = e.getW(n));
        const i = 1 / t.manhattanLength();
        i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0),
          e.setXYZW(n, t.x, t.y, t.z, t.w);
      }
    }
    updateMatrixWorld(t) {
      super.updateMatrixWorld(t),
        "attached" === this.bindMode
          ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
          : "detached" === this.bindMode
          ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
          : console.warn(
              "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
            );
    }
    boneTransform(t, e) {
      const n = this.skeleton,
        i = this.geometry;
      Aa.fromBufferAttribute(i.attributes.skinIndex, t),
        Ra.fromBufferAttribute(i.attributes.skinWeight, t),
        La.fromBufferAttribute(i.attributes.position, t).applyMatrix4(
          this.bindMatrix
        ),
        e.set(0, 0, 0);
      for (let t = 0; t < 4; t++) {
        const i = Ra.getComponent(t);
        if (0 !== i) {
          const r = Aa.getComponent(t);
          Ca.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]),
            e.addScaledVector(Pa.copy(La).applyMatrix4(Ca), i);
        }
      }
      return e.applyMatrix4(this.bindMatrixInverse);
    }
  }
  Ia.prototype.isSkinnedMesh = !0;
  (class extends Tn {
    constructor() {
      super(), (this.type = "Bone");
    }
  }).prototype.isBone = !0;
  const Da = new tn(),
    Na = new tn(),
    za = [],
    Oa = new Pi();
  (class extends Pi {
    constructor(t, e, n) {
      super(t, e),
        (this.instanceMatrix = new ti(new Float32Array(16 * n), 16)),
        (this.instanceColor = null),
        (this.count = n),
        (this.frustumCulled = !1);
    }
    copy(t) {
      return (
        super.copy(t),
        this.instanceMatrix.copy(t.instanceMatrix),
        null !== t.instanceColor &&
          (this.instanceColor = t.instanceColor.clone()),
        (this.count = t.count),
        this
      );
    }
    getColorAt(t, e) {
      e.fromArray(this.instanceColor.array, 3 * t);
    }
    getMatrixAt(t, e) {
      e.fromArray(this.instanceMatrix.array, 16 * t);
    }
    raycast(t, e) {
      const n = this.matrixWorld,
        i = this.count;
      if (
        ((Oa.geometry = this.geometry),
        (Oa.material = this.material),
        void 0 !== Oa.material)
      )
        for (let r = 0; r < i; r++) {
          this.getMatrixAt(r, Da),
            Na.multiplyMatrices(n, Da),
            (Oa.matrixWorld = Na),
            Oa.raycast(t, za);
          for (let t = 0, n = za.length; t < n; t++) {
            const n = za[t];
            (n.instanceId = r), (n.object = this), e.push(n);
          }
          za.length = 0;
        }
    }
    setColorAt(t, e) {
      null === this.instanceColor &&
        (this.instanceColor = new ti(new Float32Array(3 * this.count), 3)),
        e.toArray(this.instanceColor.array, 3 * t);
    }
    setMatrixAt(t, e) {
      e.toArray(this.instanceMatrix.array, 16 * t);
    }
    updateMorphTargets() {}
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }).prototype.isInstancedMesh = !0;
  class Ba extends kn {
    constructor(t) {
      super(),
        (this.type = "LineBasicMaterial"),
        (this.color = new $n(16777215)),
        (this.linewidth = 1),
        (this.linecap = "round"),
        (this.linejoin = "round"),
        (this.morphTargets = !1),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        (this.linewidth = t.linewidth),
        (this.linecap = t.linecap),
        (this.linejoin = t.linejoin),
        (this.morphTargets = t.morphTargets),
        this
      );
    }
  }
  Ba.prototype.isLineBasicMaterial = !0;
  const Fa = new Me(),
    Ha = new Me(),
    Ua = new tn(),
    Ga = new Ke(),
    Va = new je();
  class ka extends Tn {
    constructor(t = new di(), e = new Ba()) {
      super(),
        (this.type = "Line"),
        (this.geometry = t),
        (this.material = e),
        this.updateMorphTargets();
    }
    copy(t) {
      return (
        super.copy(t),
        (this.material = t.material),
        (this.geometry = t.geometry),
        this
      );
    }
    computeLineDistances() {
      const t = this.geometry;
      if (t.isBufferGeometry)
        if (null === t.index) {
          const e = t.attributes.position,
            n = [0];
          for (let t = 1, i = e.count; t < i; t++)
            Fa.fromBufferAttribute(e, t - 1),
              Ha.fromBufferAttribute(e, t),
              (n[t] = n[t - 1]),
              (n[t] += Fa.distanceTo(Ha));
          t.setAttribute("lineDistance", new ii(n, 1));
        } else
          console.warn(
            "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
          );
      else
        t.isGeometry &&
          console.error(
            "THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
          );
      return this;
    }
    raycast(t, e) {
      const n = this.geometry,
        i = this.matrixWorld,
        r = t.params.Line.threshold,
        s = n.drawRange;
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        Va.copy(n.boundingSphere),
        Va.applyMatrix4(i),
        (Va.radius += r),
        !1 === t.ray.intersectsSphere(Va))
      )
        return;
      Ua.copy(i).invert(), Ga.copy(t.ray).applyMatrix4(Ua);
      const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        o = a * a,
        l = new Me(),
        c = new Me(),
        h = new Me(),
        u = new Me(),
        d = this.isLineSegments ? 2 : 1;
      if (n.isBufferGeometry) {
        const i = n.index,
          r = n.attributes.position;
        if (null !== i) {
          for (
            let n = Math.max(0, s.start),
              a = Math.min(i.count, s.start + s.count) - 1;
            n < a;
            n += d
          ) {
            const s = i.getX(n),
              a = i.getX(n + 1);
            l.fromBufferAttribute(r, s), c.fromBufferAttribute(r, a);
            if (Ga.distanceSqToSegment(l, c, u, h) > o) continue;
            u.applyMatrix4(this.matrixWorld);
            const d = t.ray.origin.distanceTo(u);
            d < t.near ||
              d > t.far ||
              e.push({
                distance: d,
                point: h.clone().applyMatrix4(this.matrixWorld),
                index: n,
                face: null,
                faceIndex: null,
                object: this,
              });
          }
        } else {
          for (
            let n = Math.max(0, s.start),
              i = Math.min(r.count, s.start + s.count) - 1;
            n < i;
            n += d
          ) {
            l.fromBufferAttribute(r, n), c.fromBufferAttribute(r, n + 1);
            if (Ga.distanceSqToSegment(l, c, u, h) > o) continue;
            u.applyMatrix4(this.matrixWorld);
            const i = t.ray.origin.distanceTo(u);
            i < t.near ||
              i > t.far ||
              e.push({
                distance: i,
                point: h.clone().applyMatrix4(this.matrixWorld),
                index: n,
                face: null,
                faceIndex: null,
                object: this,
              });
          }
        }
      } else
        n.isGeometry &&
          console.error(
            "THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
          );
    }
    updateMorphTargets() {
      const t = this.geometry;
      if (t.isBufferGeometry) {
        const e = t.morphAttributes,
          n = Object.keys(e);
        if (n.length > 0) {
          const t = e[n[0]];
          if (void 0 !== t) {
            (this.morphTargetInfluences = []),
              (this.morphTargetDictionary = {});
            for (let e = 0, n = t.length; e < n; e++) {
              const n = t[e].name || String(e);
              this.morphTargetInfluences.push(0),
                (this.morphTargetDictionary[n] = e);
            }
          }
        }
      } else {
        const e = t.morphTargets;
        void 0 !== e &&
          e.length > 0 &&
          console.error(
            "THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
          );
      }
    }
  }
  ka.prototype.isLine = !0;
  const Wa = new Me(),
    ja = new Me();
  class Xa extends ka {
    constructor(t, e) {
      super(t, e), (this.type = "LineSegments");
    }
    computeLineDistances() {
      const t = this.geometry;
      if (t.isBufferGeometry)
        if (null === t.index) {
          const e = t.attributes.position,
            n = [];
          for (let t = 0, i = e.count; t < i; t += 2)
            Wa.fromBufferAttribute(e, t),
              ja.fromBufferAttribute(e, t + 1),
              (n[t] = 0 === t ? 0 : n[t - 1]),
              (n[t + 1] = n[t] + Wa.distanceTo(ja));
          t.setAttribute("lineDistance", new ii(n, 1));
        } else
          console.warn(
            "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
          );
      else
        t.isGeometry &&
          console.error(
            "THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
          );
      return this;
    }
  }
  Xa.prototype.isLineSegments = !0;
  (class extends ka {
    constructor(t, e) {
      super(t, e), (this.type = "LineLoop");
    }
  }).prototype.isLineLoop = !0;
  class qa extends kn {
    constructor(t) {
      super(),
        (this.type = "PointsMaterial"),
        (this.color = new $n(16777215)),
        (this.map = null),
        (this.alphaMap = null),
        (this.size = 1),
        (this.sizeAttenuation = !0),
        (this.morphTargets = !1),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        (this.map = t.map),
        (this.alphaMap = t.alphaMap),
        (this.size = t.size),
        (this.sizeAttenuation = t.sizeAttenuation),
        (this.morphTargets = t.morphTargets),
        this
      );
    }
  }
  qa.prototype.isPointsMaterial = !0;
  const Ya = new tn(),
    Za = new Ke(),
    $a = new je(),
    Ja = new Me();
  function Qa(t, e, n, i, r, s, a) {
    const o = Za.distanceSqToPoint(t);
    if (o < n) {
      const n = new Me();
      Za.closestPointToPoint(t, n), n.applyMatrix4(i);
      const l = r.ray.origin.distanceTo(n);
      if (l < r.near || l > r.far) return;
      s.push({
        distance: l,
        distanceToRay: Math.sqrt(o),
        point: n,
        index: e,
        face: null,
        object: a,
      });
    }
  }
  (class extends Tn {
    constructor(t = new di(), e = new qa()) {
      super(),
        (this.type = "Points"),
        (this.geometry = t),
        (this.material = e),
        this.updateMorphTargets();
    }
    copy(t) {
      return (
        super.copy(t),
        (this.material = t.material),
        (this.geometry = t.geometry),
        this
      );
    }
    raycast(t, e) {
      const n = this.geometry,
        i = this.matrixWorld,
        r = t.params.Points.threshold,
        s = n.drawRange;
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        $a.copy(n.boundingSphere),
        $a.applyMatrix4(i),
        ($a.radius += r),
        !1 === t.ray.intersectsSphere($a))
      )
        return;
      Ya.copy(i).invert(), Za.copy(t.ray).applyMatrix4(Ya);
      const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        o = a * a;
      if (n.isBufferGeometry) {
        const r = n.index,
          a = n.attributes.position;
        if (null !== r) {
          for (
            let n = Math.max(0, s.start),
              l = Math.min(r.count, s.start + s.count);
            n < l;
            n++
          ) {
            const s = r.getX(n);
            Ja.fromBufferAttribute(a, s), Qa(Ja, s, o, i, t, e, this);
          }
        } else {
          for (
            let n = Math.max(0, s.start),
              r = Math.min(a.count, s.start + s.count);
            n < r;
            n++
          )
            Ja.fromBufferAttribute(a, n), Qa(Ja, n, o, i, t, e, this);
        }
      } else
        console.error(
          "THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    }
    updateMorphTargets() {
      const t = this.geometry;
      if (t.isBufferGeometry) {
        const e = t.morphAttributes,
          n = Object.keys(e);
        if (n.length > 0) {
          const t = e[n[0]];
          if (void 0 !== t) {
            (this.morphTargetInfluences = []),
              (this.morphTargetDictionary = {});
            for (let e = 0, n = t.length; e < n; e++) {
              const n = t[e].name || String(e);
              this.morphTargetInfluences.push(0),
                (this.morphTargetDictionary[n] = e);
            }
          }
        }
      } else {
        const e = t.morphTargets;
        void 0 !== e &&
          e.length > 0 &&
          console.error(
            "THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
          );
      }
    }
  }).prototype.isPoints = !0;
  (class extends ye {
    constructor(t, e, n, i, r, s, a, o, l) {
      super(t, e, n, i, r, s, a, o, l),
        (this.format = void 0 !== a ? a : Ft),
        (this.minFilter = void 0 !== s ? s : Pt),
        (this.magFilter = void 0 !== r ? r : Pt),
        (this.generateMipmaps = !1);
      const c = this;
      "requestVideoFrameCallback" in t &&
        t.requestVideoFrameCallback(function e() {
          (c.needsUpdate = !0), t.requestVideoFrameCallback(e);
        });
    }
    clone() {
      return new this.constructor(this.image).copy(this);
    }
    update() {
      const t = this.image;
      !1 === "requestVideoFrameCallback" in t &&
        t.readyState >= t.HAVE_CURRENT_DATA &&
        (this.needsUpdate = !0);
    }
  }).prototype.isVideoTexture = !0;
  (class extends ye {
    constructor(t, e, n, i, r, s, a, o, l, c, h, u) {
      super(null, s, a, o, l, c, i, r, h, u),
        (this.image = { width: e, height: n }),
        (this.mipmaps = t),
        (this.flipY = !1),
        (this.generateMipmaps = !1);
    }
  }).prototype.isCompressedTexture = !0;
  (class extends ye {
    constructor(t, e, n, i, r, s, a, o, l) {
      super(t, e, n, i, r, s, a, o, l), (this.needsUpdate = !0);
    }
  }).prototype.isCanvasTexture = !0;
  (class extends ye {
    constructor(t, e, n, i, r, s, a, o, l, c) {
      if ((c = void 0 !== c ? c : Ut) !== Ut && c !== Gt)
        throw new Error(
          "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
        );
      void 0 === n && c === Ut && (n = Dt),
        void 0 === n && c === Gt && (n = Bt),
        super(null, i, r, s, a, o, c, n, l),
        (this.image = { width: t, height: e }),
        (this.magFilter = void 0 !== a ? a : Rt),
        (this.minFilter = void 0 !== o ? o : Rt),
        (this.flipY = !1),
        (this.generateMipmaps = !1);
    }
  }).prototype.isDepthTexture = !0;
  class Ka extends di {
    constructor(
      t = 1,
      e = 1,
      n = 1,
      i = 8,
      r = 1,
      s = !1,
      a = 0,
      o = 2 * Math.PI
    ) {
      super(),
        (this.type = "CylinderGeometry"),
        (this.parameters = {
          radiusTop: t,
          radiusBottom: e,
          height: n,
          radialSegments: i,
          heightSegments: r,
          openEnded: s,
          thetaStart: a,
          thetaLength: o,
        });
      const l = this;
      (i = Math.floor(i)), (r = Math.floor(r));
      const c = [],
        h = [],
        u = [],
        d = [];
      let p = 0;
      const m = [],
        f = n / 2;
      let g = 0;
      function v(n) {
        const r = p,
          s = new pe(),
          m = new Me();
        let v = 0;
        const y = !0 === n ? t : e,
          x = !0 === n ? 1 : -1;
        for (let t = 1; t <= i; t++)
          h.push(0, f * x, 0), u.push(0, x, 0), d.push(0.5, 0.5), p++;
        const _ = p;
        for (let t = 0; t <= i; t++) {
          const e = (t / i) * o + a,
            n = Math.cos(e),
            r = Math.sin(e);
          (m.x = y * r),
            (m.y = f * x),
            (m.z = y * n),
            h.push(m.x, m.y, m.z),
            u.push(0, x, 0),
            (s.x = 0.5 * n + 0.5),
            (s.y = 0.5 * r * x + 0.5),
            d.push(s.x, s.y),
            p++;
        }
        for (let t = 0; t < i; t++) {
          const e = r + t,
            i = _ + t;
          !0 === n ? c.push(i, i + 1, e) : c.push(i + 1, i, e), (v += 3);
        }
        l.addGroup(g, v, !0 === n ? 1 : 2), (g += v);
      }
      !(function () {
        const s = new Me(),
          v = new Me();
        let y = 0;
        const x = (e - t) / n;
        for (let l = 0; l <= r; l++) {
          const c = [],
            g = l / r,
            y = g * (e - t) + t;
          for (let t = 0; t <= i; t++) {
            const e = t / i,
              r = e * o + a,
              l = Math.sin(r),
              m = Math.cos(r);
            (v.x = y * l),
              (v.y = -g * n + f),
              (v.z = y * m),
              h.push(v.x, v.y, v.z),
              s.set(l, x, m).normalize(),
              u.push(s.x, s.y, s.z),
              d.push(e, 1 - g),
              c.push(p++);
          }
          m.push(c);
        }
        for (let t = 0; t < i; t++)
          for (let e = 0; e < r; e++) {
            const n = m[e][t],
              i = m[e + 1][t],
              r = m[e + 1][t + 1],
              s = m[e][t + 1];
            c.push(n, i, s), c.push(i, r, s), (y += 6);
          }
        l.addGroup(g, y, 0), (g += y);
      })(),
        !1 === s && (t > 0 && v(!0), e > 0 && v(!1)),
        this.setIndex(c),
        this.setAttribute("position", new ii(h, 3)),
        this.setAttribute("normal", new ii(u, 3)),
        this.setAttribute("uv", new ii(d, 2));
    }
  }
  class to extends di {
    constructor(t, e, n = 1, i = 0) {
      super(),
        (this.type = "PolyhedronGeometry"),
        (this.parameters = { vertices: t, indices: e, radius: n, detail: i });
      const r = [],
        s = [];
      function a(t, e, n, i) {
        const r = i + 1,
          s = [];
        for (let i = 0; i <= r; i++) {
          s[i] = [];
          const a = t.clone().lerp(n, i / r),
            o = e.clone().lerp(n, i / r),
            l = r - i;
          for (let t = 0; t <= l; t++)
            s[i][t] = 0 === t && i === r ? a : a.clone().lerp(o, t / l);
        }
        for (let t = 0; t < r; t++)
          for (let e = 0; e < 2 * (r - t) - 1; e++) {
            const n = Math.floor(e / 2);
            e % 2 == 0
              ? (o(s[t][n + 1]), o(s[t + 1][n]), o(s[t][n]))
              : (o(s[t][n + 1]), o(s[t + 1][n + 1]), o(s[t + 1][n]));
          }
      }
      function o(t) {
        r.push(t.x, t.y, t.z);
      }
      function l(e, n) {
        const i = 3 * e;
        (n.x = t[i + 0]), (n.y = t[i + 1]), (n.z = t[i + 2]);
      }
      function c(t, e, n, i) {
        i < 0 && 1 === t.x && (s[e] = t.x - 1),
          0 === n.x && 0 === n.z && (s[e] = i / 2 / Math.PI + 0.5);
      }
      function h(t) {
        return Math.atan2(t.z, -t.x);
      }
      !(function (t) {
        const n = new Me(),
          i = new Me(),
          r = new Me();
        for (let s = 0; s < e.length; s += 3)
          l(e[s + 0], n), l(e[s + 1], i), l(e[s + 2], r), a(n, i, r, t);
      })(i),
        (function (t) {
          const e = new Me();
          for (let n = 0; n < r.length; n += 3)
            (e.x = r[n + 0]),
              (e.y = r[n + 1]),
              (e.z = r[n + 2]),
              e.normalize().multiplyScalar(t),
              (r[n + 0] = e.x),
              (r[n + 1] = e.y),
              (r[n + 2] = e.z);
        })(n),
        (function () {
          const t = new Me();
          for (let n = 0; n < r.length; n += 3) {
            (t.x = r[n + 0]), (t.y = r[n + 1]), (t.z = r[n + 2]);
            const i = h(t) / 2 / Math.PI + 0.5,
              a =
                ((e = t),
                Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI +
                  0.5);
            s.push(i, 1 - a);
          }
          var e;
          (function () {
            const t = new Me(),
              e = new Me(),
              n = new Me(),
              i = new Me(),
              a = new pe(),
              o = new pe(),
              l = new pe();
            for (let u = 0, d = 0; u < r.length; u += 9, d += 6) {
              t.set(r[u + 0], r[u + 1], r[u + 2]),
                e.set(r[u + 3], r[u + 4], r[u + 5]),
                n.set(r[u + 6], r[u + 7], r[u + 8]),
                a.set(s[d + 0], s[d + 1]),
                o.set(s[d + 2], s[d + 3]),
                l.set(s[d + 4], s[d + 5]),
                i.copy(t).add(e).add(n).divideScalar(3);
              const p = h(i);
              c(a, d + 0, t, p), c(o, d + 2, e, p), c(l, d + 4, n, p);
            }
          })(),
            (function () {
              for (let t = 0; t < s.length; t += 6) {
                const e = s[t + 0],
                  n = s[t + 2],
                  i = s[t + 4],
                  r = Math.max(e, n, i),
                  a = Math.min(e, n, i);
                r > 0.9 &&
                  a < 0.1 &&
                  (e < 0.2 && (s[t + 0] += 1),
                  n < 0.2 && (s[t + 2] += 1),
                  i < 0.2 && (s[t + 4] += 1));
              }
            })();
        })(),
        this.setAttribute("position", new ii(r, 3)),
        this.setAttribute("normal", new ii(r.slice(), 3)),
        this.setAttribute("uv", new ii(s, 2)),
        0 === i ? this.computeVertexNormals() : this.normalizeNormals();
    }
  }
  new Me(), new Me(), new Me(), new Gn();
  const eo = function (t, e, n) {
    n = n || 2;
    const i = e && e.length,
      r = i ? e[0] * n : t.length;
    let s = no(t, 0, r, n, !0);
    const a = [];
    if (!s || s.next === s.prev) return a;
    let o, l, c, h, u, d, p;
    if (
      (i &&
        (s = (function (t, e, n, i) {
          const r = [];
          let s, a, o, l, c;
          for (s = 0, a = e.length; s < a; s++)
            (o = e[s] * i),
              (l = s < a - 1 ? e[s + 1] * i : t.length),
              (c = no(t, o, l, i, !1)),
              c === c.next && (c.steiner = !0),
              r.push(mo(c));
          for (r.sort(co), s = 0; s < r.length; s++)
            ho(r[s], n), (n = io(n, n.next));
          return n;
        })(t, e, s, n)),
      t.length > 80 * n)
    ) {
      (o = c = t[0]), (l = h = t[1]);
      for (let e = n; e < r; e += n)
        (u = t[e]),
          (d = t[e + 1]),
          u < o && (o = u),
          d < l && (l = d),
          u > c && (c = u),
          d > h && (h = d);
      (p = Math.max(c - o, h - l)), (p = 0 !== p ? 1 / p : 0);
    }
    return ro(s, a, n, o, l, p), a;
  };
  function no(t, e, n, i, r) {
    let s, a;
    if (
      r ===
      (function (t, e, n, i) {
        let r = 0;
        for (let s = e, a = n - i; s < n; s += i)
          (r += (t[a] - t[s]) * (t[s + 1] + t[a + 1])), (a = s);
        return r;
      })(t, e, n, i) >
        0
    )
      for (s = e; s < n; s += i) a = So(s, t[s], t[s + 1], a);
    else for (s = n - i; s >= e; s -= i) a = So(s, t[s], t[s + 1], a);
    return a && yo(a, a.next) && (Eo(a), (a = a.next)), a;
  }
  function io(t, e) {
    if (!t) return t;
    e || (e = t);
    let n,
      i = t;
    do {
      if (
        ((n = !1), i.steiner || (!yo(i, i.next) && 0 !== vo(i.prev, i, i.next)))
      )
        i = i.next;
      else {
        if ((Eo(i), (i = e = i.prev), i === i.next)) break;
        n = !0;
      }
    } while (n || i !== e);
    return e;
  }
  function ro(t, e, n, i, r, s, a) {
    if (!t) return;
    !a &&
      s &&
      (function (t, e, n, i) {
        let r = t;
        do {
          null === r.z && (r.z = po(r.x, r.y, e, n, i)),
            (r.prevZ = r.prev),
            (r.nextZ = r.next),
            (r = r.next);
        } while (r !== t);
        (r.prevZ.nextZ = null),
          (r.prevZ = null),
          (function (t) {
            let e,
              n,
              i,
              r,
              s,
              a,
              o,
              l,
              c = 1;
            do {
              for (n = t, t = null, s = null, a = 0; n; ) {
                for (
                  a++, i = n, o = 0, e = 0;
                  e < c && (o++, (i = i.nextZ), i);
                  e++
                );
                for (l = c; o > 0 || (l > 0 && i); )
                  0 !== o && (0 === l || !i || n.z <= i.z)
                    ? ((r = n), (n = n.nextZ), o--)
                    : ((r = i), (i = i.nextZ), l--),
                    s ? (s.nextZ = r) : (t = r),
                    (r.prevZ = s),
                    (s = r);
                n = i;
              }
              (s.nextZ = null), (c *= 2);
            } while (a > 1);
          })(r);
      })(t, i, r, s);
    let o,
      l,
      c = t;
    for (; t.prev !== t.next; )
      if (((o = t.prev), (l = t.next), s ? ao(t, i, r, s) : so(t)))
        e.push(o.i / n),
          e.push(t.i / n),
          e.push(l.i / n),
          Eo(t),
          (t = l.next),
          (c = l.next);
      else if ((t = l) === c) {
        a
          ? 1 === a
            ? ro((t = oo(io(t), e, n)), e, n, i, r, s, 2)
            : 2 === a && lo(t, e, n, i, r, s)
          : ro(io(t), e, n, i, r, s, 1);
        break;
      }
  }
  function so(t) {
    const e = t.prev,
      n = t,
      i = t.next;
    if (vo(e, n, i) >= 0) return !1;
    let r = t.next.next;
    for (; r !== t.prev; ) {
      if (
        fo(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) &&
        vo(r.prev, r, r.next) >= 0
      )
        return !1;
      r = r.next;
    }
    return !0;
  }
  function ao(t, e, n, i) {
    const r = t.prev,
      s = t,
      a = t.next;
    if (vo(r, s, a) >= 0) return !1;
    const o = r.x < s.x ? (r.x < a.x ? r.x : a.x) : s.x < a.x ? s.x : a.x,
      l = r.y < s.y ? (r.y < a.y ? r.y : a.y) : s.y < a.y ? s.y : a.y,
      c = r.x > s.x ? (r.x > a.x ? r.x : a.x) : s.x > a.x ? s.x : a.x,
      h = r.y > s.y ? (r.y > a.y ? r.y : a.y) : s.y > a.y ? s.y : a.y,
      u = po(o, l, e, n, i),
      d = po(c, h, e, n, i);
    let p = t.prevZ,
      m = t.nextZ;
    for (; p && p.z >= u && m && m.z <= d; ) {
      if (
        p !== t.prev &&
        p !== t.next &&
        fo(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) &&
        vo(p.prev, p, p.next) >= 0
      )
        return !1;
      if (
        ((p = p.prevZ),
        m !== t.prev &&
          m !== t.next &&
          fo(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) &&
          vo(m.prev, m, m.next) >= 0)
      )
        return !1;
      m = m.nextZ;
    }
    for (; p && p.z >= u; ) {
      if (
        p !== t.prev &&
        p !== t.next &&
        fo(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) &&
        vo(p.prev, p, p.next) >= 0
      )
        return !1;
      p = p.prevZ;
    }
    for (; m && m.z <= d; ) {
      if (
        m !== t.prev &&
        m !== t.next &&
        fo(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) &&
        vo(m.prev, m, m.next) >= 0
      )
        return !1;
      m = m.nextZ;
    }
    return !0;
  }
  function oo(t, e, n) {
    let i = t;
    do {
      const r = i.prev,
        s = i.next.next;
      !yo(r, s) &&
        xo(r, i, i.next, s) &&
        bo(r, s) &&
        bo(s, r) &&
        (e.push(r.i / n),
        e.push(i.i / n),
        e.push(s.i / n),
        Eo(i),
        Eo(i.next),
        (i = t = s)),
        (i = i.next);
    } while (i !== t);
    return io(i);
  }
  function lo(t, e, n, i, r, s) {
    let a = t;
    do {
      let t = a.next.next;
      for (; t !== a.prev; ) {
        if (a.i !== t.i && go(a, t)) {
          let o = Mo(a, t);
          return (
            (a = io(a, a.next)),
            (o = io(o, o.next)),
            ro(a, e, n, i, r, s),
            void ro(o, e, n, i, r, s)
          );
        }
        t = t.next;
      }
      a = a.next;
    } while (a !== t);
  }
  function co(t, e) {
    return t.x - e.x;
  }
  function ho(t, e) {
    if (
      ((e = (function (t, e) {
        let n = e;
        const i = t.x,
          r = t.y;
        let s,
          a = -1 / 0;
        do {
          if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
            const t = n.x + ((r - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
            if (t <= i && t > a) {
              if (((a = t), t === i)) {
                if (r === n.y) return n;
                if (r === n.next.y) return n.next;
              }
              s = n.x < n.next.x ? n : n.next;
            }
          }
          n = n.next;
        } while (n !== e);
        if (!s) return null;
        if (i === a) return s;
        const o = s,
          l = s.x,
          c = s.y;
        let h,
          u = 1 / 0;
        n = s;
        do {
          i >= n.x &&
            n.x >= l &&
            i !== n.x &&
            fo(r < c ? i : a, r, l, c, r < c ? a : i, r, n.x, n.y) &&
            ((h = Math.abs(r - n.y) / (i - n.x)),
            bo(n, t) &&
              (h < u ||
                (h === u && (n.x > s.x || (n.x === s.x && uo(s, n))))) &&
              ((s = n), (u = h))),
            (n = n.next);
        } while (n !== o);
        return s;
      })(t, e)),
      e)
    ) {
      const n = Mo(e, t);
      io(e, e.next), io(n, n.next);
    }
  }
  function uo(t, e) {
    return vo(t.prev, t, e.prev) < 0 && vo(e.next, t, t.next) < 0;
  }
  function po(t, e, n, i, r) {
    return (
      (t =
        1431655765 &
        ((t =
          858993459 &
          ((t =
            252645135 &
            ((t = 16711935 & ((t = 32767 * (t - n) * r) | (t << 8))) |
              (t << 4))) |
            (t << 2))) |
          (t << 1))) |
      ((e =
        1431655765 &
        ((e =
          858993459 &
          ((e =
            252645135 &
            ((e = 16711935 & ((e = 32767 * (e - i) * r) | (e << 8))) |
              (e << 4))) |
            (e << 2))) |
          (e << 1))) <<
        1)
    );
  }
  function mo(t) {
    let e = t,
      n = t;
    do {
      (e.x < n.x || (e.x === n.x && e.y < n.y)) && (n = e), (e = e.next);
    } while (e !== t);
    return n;
  }
  function fo(t, e, n, i, r, s, a, o) {
    return (
      (r - a) * (e - o) - (t - a) * (s - o) >= 0 &&
      (t - a) * (i - o) - (n - a) * (e - o) >= 0 &&
      (n - a) * (s - o) - (r - a) * (i - o) >= 0
    );
  }
  function go(t, e) {
    return (
      t.next.i !== e.i &&
      t.prev.i !== e.i &&
      !(function (t, e) {
        let n = t;
        do {
          if (
            n.i !== t.i &&
            n.next.i !== t.i &&
            n.i !== e.i &&
            n.next.i !== e.i &&
            xo(n, n.next, t, e)
          )
            return !0;
          n = n.next;
        } while (n !== t);
        return !1;
      })(t, e) &&
      ((bo(t, e) &&
        bo(e, t) &&
        (function (t, e) {
          let n = t,
            i = !1;
          const r = (t.x + e.x) / 2,
            s = (t.y + e.y) / 2;
          do {
            n.y > s != n.next.y > s &&
              n.next.y !== n.y &&
              r < ((n.next.x - n.x) * (s - n.y)) / (n.next.y - n.y) + n.x &&
              (i = !i),
              (n = n.next);
          } while (n !== t);
          return i;
        })(t, e) &&
        (vo(t.prev, t, e.prev) || vo(t, e.prev, e))) ||
        (yo(t, e) && vo(t.prev, t, t.next) > 0 && vo(e.prev, e, e.next) > 0))
    );
  }
  function vo(t, e, n) {
    return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
  }
  function yo(t, e) {
    return t.x === e.x && t.y === e.y;
  }
  function xo(t, e, n, i) {
    const r = wo(vo(t, e, n)),
      s = wo(vo(t, e, i)),
      a = wo(vo(n, i, t)),
      o = wo(vo(n, i, e));
    return (
      (r !== s && a !== o) ||
      !(0 !== r || !_o(t, n, e)) ||
      !(0 !== s || !_o(t, i, e)) ||
      !(0 !== a || !_o(n, t, i)) ||
      !(0 !== o || !_o(n, e, i))
    );
  }
  function _o(t, e, n) {
    return (
      e.x <= Math.max(t.x, n.x) &&
      e.x >= Math.min(t.x, n.x) &&
      e.y <= Math.max(t.y, n.y) &&
      e.y >= Math.min(t.y, n.y)
    );
  }
  function wo(t) {
    return t > 0 ? 1 : t < 0 ? -1 : 0;
  }
  function bo(t, e) {
    return vo(t.prev, t, t.next) < 0
      ? vo(t, e, t.next) >= 0 && vo(t, t.prev, e) >= 0
      : vo(t, e, t.prev) < 0 || vo(t, t.next, e) < 0;
  }
  function Mo(t, e) {
    const n = new To(t.i, t.x, t.y),
      i = new To(e.i, e.x, e.y),
      r = t.next,
      s = e.prev;
    return (
      (t.next = e),
      (e.prev = t),
      (n.next = r),
      (r.prev = n),
      (i.next = n),
      (n.prev = i),
      (s.next = i),
      (i.prev = s),
      i
    );
  }
  function So(t, e, n, i) {
    const r = new To(t, e, n);
    return (
      i
        ? ((r.next = i.next), (r.prev = i), (i.next.prev = r), (i.next = r))
        : ((r.prev = r), (r.next = r)),
      r
    );
  }
  function Eo(t) {
    (t.next.prev = t.prev),
      (t.prev.next = t.next),
      t.prevZ && (t.prevZ.nextZ = t.nextZ),
      t.nextZ && (t.nextZ.prevZ = t.prevZ);
  }
  function To(t, e, n) {
    (this.i = t),
      (this.x = e),
      (this.y = n),
      (this.prev = null),
      (this.next = null),
      (this.z = null),
      (this.prevZ = null),
      (this.nextZ = null),
      (this.steiner = !1);
  }
  class Lo {
    static area(t) {
      const e = t.length;
      let n = 0;
      for (let i = e - 1, r = 0; r < e; i = r++)
        n += t[i].x * t[r].y - t[r].x * t[i].y;
      return 0.5 * n;
    }
    static isClockWise(t) {
      return Lo.area(t) < 0;
    }
    static triangulateShape(t, e) {
      const n = [],
        i = [],
        r = [];
      Ao(t), Ro(n, t);
      let s = t.length;
      e.forEach(Ao);
      for (let t = 0; t < e.length; t++)
        i.push(s), (s += e[t].length), Ro(n, e[t]);
      const a = eo(n, i);
      for (let t = 0; t < a.length; t += 3) r.push(a.slice(t, t + 3));
      return r;
    }
  }
  function Ao(t) {
    const e = t.length;
    e > 2 && t[e - 1].equals(t[0]) && t.pop();
  }
  function Ro(t, e) {
    for (let n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y);
  }
  class Po extends di {
    constructor(t, e) {
      super(),
        (this.type = "ExtrudeGeometry"),
        (this.parameters = { shapes: t, options: e }),
        (t = Array.isArray(t) ? t : [t]);
      const n = this,
        i = [],
        r = [];
      for (let e = 0, n = t.length; e < n; e++) {
        s(t[e]);
      }
      function s(t) {
        const s = [],
          a = void 0 !== e.curveSegments ? e.curveSegments : 12,
          o = void 0 !== e.steps ? e.steps : 1;
        let l = void 0 !== e.depth ? e.depth : 100,
          c = void 0 === e.bevelEnabled || e.bevelEnabled,
          h = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
          u = void 0 !== e.bevelSize ? e.bevelSize : h - 2,
          d = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
          p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
        const m = e.extrudePath,
          f = void 0 !== e.UVGenerator ? e.UVGenerator : Co;
        void 0 !== e.amount &&
          (console.warn(
            "THREE.ExtrudeBufferGeometry: amount has been renamed to depth."
          ),
          (l = e.amount));
        let g,
          v,
          y,
          x,
          _,
          w = !1;
        m &&
          ((g = m.getSpacedPoints(o)),
          (w = !0),
          (c = !1),
          (v = m.computeFrenetFrames(o, !1)),
          (y = new Me()),
          (x = new Me()),
          (_ = new Me())),
          c || ((p = 0), (h = 0), (u = 0), (d = 0));
        const b = t.extractPoints(a);
        let M = b.shape;
        const S = b.holes;
        if (!Lo.isClockWise(M)) {
          M = M.reverse();
          for (let t = 0, e = S.length; t < e; t++) {
            const e = S[t];
            Lo.isClockWise(e) && (S[t] = e.reverse());
          }
        }
        const E = Lo.triangulateShape(M, S),
          T = M;
        for (let t = 0, e = S.length; t < e; t++) {
          const e = S[t];
          M = M.concat(e);
        }
        function L(t, e, n) {
          return (
            e || console.error("THREE.ExtrudeGeometry: vec does not exist"),
            e.clone().multiplyScalar(n).add(t)
          );
        }
        const A = M.length,
          R = E.length;
        function P(t, e, n) {
          let i, r, s;
          const a = t.x - e.x,
            o = t.y - e.y,
            l = n.x - t.x,
            c = n.y - t.y,
            h = a * a + o * o,
            u = a * c - o * l;
          if (Math.abs(u) > Number.EPSILON) {
            const u = Math.sqrt(h),
              d = Math.sqrt(l * l + c * c),
              p = e.x - o / u,
              m = e.y + a / u,
              f =
                ((n.x - c / d - p) * c - (n.y + l / d - m) * l) /
                (a * c - o * l);
            (i = p + a * f - t.x), (r = m + o * f - t.y);
            const g = i * i + r * r;
            if (g <= 2) return new pe(i, r);
            s = Math.sqrt(g / 2);
          } else {
            let t = !1;
            a > Number.EPSILON
              ? l > Number.EPSILON && (t = !0)
              : a < -Number.EPSILON
              ? l < -Number.EPSILON && (t = !0)
              : Math.sign(o) === Math.sign(c) && (t = !0),
              t
                ? ((i = -o), (r = a), (s = Math.sqrt(h)))
                : ((i = a), (r = o), (s = Math.sqrt(h / 2)));
          }
          return new pe(i / s, r / s);
        }
        const C = [];
        for (
          let t = 0, e = T.length, n = e - 1, i = t + 1;
          t < e;
          t++, n++, i++
        )
          n === e && (n = 0), i === e && (i = 0), (C[t] = P(T[t], T[n], T[i]));
        const I = [];
        let D,
          N = C.concat();
        for (let t = 0, e = S.length; t < e; t++) {
          const e = S[t];
          D = [];
          for (
            let t = 0, n = e.length, i = n - 1, r = t + 1;
            t < n;
            t++, i++, r++
          )
            i === n && (i = 0),
              r === n && (r = 0),
              (D[t] = P(e[t], e[i], e[r]));
          I.push(D), (N = N.concat(D));
        }
        for (let t = 0; t < p; t++) {
          const e = t / p,
            n = h * Math.cos((e * Math.PI) / 2),
            i = u * Math.sin((e * Math.PI) / 2) + d;
          for (let t = 0, e = T.length; t < e; t++) {
            const e = L(T[t], C[t], i);
            B(e.x, e.y, -n);
          }
          for (let t = 0, e = S.length; t < e; t++) {
            const e = S[t];
            D = I[t];
            for (let t = 0, r = e.length; t < r; t++) {
              const r = L(e[t], D[t], i);
              B(r.x, r.y, -n);
            }
          }
        }
        const z = u + d;
        for (let t = 0; t < A; t++) {
          const e = c ? L(M[t], N[t], z) : M[t];
          w
            ? (x.copy(v.normals[0]).multiplyScalar(e.x),
              y.copy(v.binormals[0]).multiplyScalar(e.y),
              _.copy(g[0]).add(x).add(y),
              B(_.x, _.y, _.z))
            : B(e.x, e.y, 0);
        }
        for (let t = 1; t <= o; t++)
          for (let e = 0; e < A; e++) {
            const n = c ? L(M[e], N[e], z) : M[e];
            w
              ? (x.copy(v.normals[t]).multiplyScalar(n.x),
                y.copy(v.binormals[t]).multiplyScalar(n.y),
                _.copy(g[t]).add(x).add(y),
                B(_.x, _.y, _.z))
              : B(n.x, n.y, (l / o) * t);
          }
        for (let t = p - 1; t >= 0; t--) {
          const e = t / p,
            n = h * Math.cos((e * Math.PI) / 2),
            i = u * Math.sin((e * Math.PI) / 2) + d;
          for (let t = 0, e = T.length; t < e; t++) {
            const e = L(T[t], C[t], i);
            B(e.x, e.y, l + n);
          }
          for (let t = 0, e = S.length; t < e; t++) {
            const e = S[t];
            D = I[t];
            for (let t = 0, r = e.length; t < r; t++) {
              const r = L(e[t], D[t], i);
              w ? B(r.x, r.y + g[o - 1].y, g[o - 1].x + n) : B(r.x, r.y, l + n);
            }
          }
        }
        function O(t, e) {
          let n = t.length;
          for (; --n >= 0; ) {
            const i = n;
            let r = n - 1;
            r < 0 && (r = t.length - 1);
            for (let t = 0, n = o + 2 * p; t < n; t++) {
              const n = A * t,
                s = A * (t + 1);
              H(e + i + n, e + r + n, e + r + s, e + i + s);
            }
          }
        }
        function B(t, e, n) {
          s.push(t), s.push(e), s.push(n);
        }
        function F(t, e, r) {
          U(t), U(e), U(r);
          const s = i.length / 3,
            a = f.generateTopUV(n, i, s - 3, s - 2, s - 1);
          G(a[0]), G(a[1]), G(a[2]);
        }
        function H(t, e, r, s) {
          U(t), U(e), U(s), U(e), U(r), U(s);
          const a = i.length / 3,
            o = f.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
          G(o[0]), G(o[1]), G(o[3]), G(o[1]), G(o[2]), G(o[3]);
        }
        function U(t) {
          i.push(s[3 * t + 0]), i.push(s[3 * t + 1]), i.push(s[3 * t + 2]);
        }
        function G(t) {
          r.push(t.x), r.push(t.y);
        }
        !(function () {
          const t = i.length / 3;
          if (c) {
            let t = 0,
              e = A * t;
            for (let t = 0; t < R; t++) {
              const n = E[t];
              F(n[2] + e, n[1] + e, n[0] + e);
            }
            (t = o + 2 * p), (e = A * t);
            for (let t = 0; t < R; t++) {
              const n = E[t];
              F(n[0] + e, n[1] + e, n[2] + e);
            }
          } else {
            for (let t = 0; t < R; t++) {
              const e = E[t];
              F(e[2], e[1], e[0]);
            }
            for (let t = 0; t < R; t++) {
              const e = E[t];
              F(e[0] + A * o, e[1] + A * o, e[2] + A * o);
            }
          }
          n.addGroup(t, i.length / 3 - t, 0);
        })(),
          (function () {
            const t = i.length / 3;
            let e = 0;
            O(T, e), (e += T.length);
            for (let t = 0, n = S.length; t < n; t++) {
              const n = S[t];
              O(n, e), (e += n.length);
            }
            n.addGroup(t, i.length / 3 - t, 1);
          })();
      }
      this.setAttribute("position", new ii(i, 3)),
        this.setAttribute("uv", new ii(r, 2)),
        this.computeVertexNormals();
    }
    toJSON() {
      const t = di.prototype.toJSON.call(this);
      return (function (t, e, n) {
        if (((n.shapes = []), Array.isArray(t)))
          for (let e = 0, i = t.length; e < i; e++) {
            const i = t[e];
            n.shapes.push(i.uuid);
          }
        else n.shapes.push(t.uuid);
        void 0 !== e.extrudePath &&
          (n.options.extrudePath = e.extrudePath.toJSON());
        return n;
      })(this.parameters.shapes, this.parameters.options, t);
    }
  }
  const Co = {
    generateTopUV: function (t, e, n, i, r) {
      const s = e[3 * n],
        a = e[3 * n + 1],
        o = e[3 * i],
        l = e[3 * i + 1],
        c = e[3 * r],
        h = e[3 * r + 1];
      return [new pe(s, a), new pe(o, l), new pe(c, h)];
    },
    generateSideWallUV: function (t, e, n, i, r, s) {
      const a = e[3 * n],
        o = e[3 * n + 1],
        l = e[3 * n + 2],
        c = e[3 * i],
        h = e[3 * i + 1],
        u = e[3 * i + 2],
        d = e[3 * r],
        p = e[3 * r + 1],
        m = e[3 * r + 2],
        f = e[3 * s],
        g = e[3 * s + 1],
        v = e[3 * s + 2];
      return Math.abs(o - h) < 0.01
        ? [
            new pe(a, 1 - l),
            new pe(c, 1 - u),
            new pe(d, 1 - m),
            new pe(f, 1 - v),
          ]
        : [
            new pe(o, 1 - l),
            new pe(h, 1 - u),
            new pe(p, 1 - m),
            new pe(g, 1 - v),
          ];
    },
  };
  class Io extends to {
    constructor(t = 1, e = 0) {
      super(
        [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
        [
          0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4,
          2,
        ],
        t,
        e
      ),
        (this.type = "OctahedronGeometry"),
        (this.parameters = { radius: t, detail: e });
    }
  }
  class Do extends di {
    constructor(t, e = 12) {
      super(),
        (this.type = "ShapeGeometry"),
        (this.parameters = { shapes: t, curveSegments: e });
      const n = [],
        i = [],
        r = [],
        s = [];
      let a = 0,
        o = 0;
      if (!1 === Array.isArray(t)) l(t);
      else
        for (let e = 0; e < t.length; e++)
          l(t[e]), this.addGroup(a, o, e), (a += o), (o = 0);
      function l(t) {
        const a = i.length / 3,
          l = t.extractPoints(e);
        let c = l.shape;
        const h = l.holes;
        !1 === Lo.isClockWise(c) && (c = c.reverse());
        for (let t = 0, e = h.length; t < e; t++) {
          const e = h[t];
          !0 === Lo.isClockWise(e) && (h[t] = e.reverse());
        }
        const u = Lo.triangulateShape(c, h);
        for (let t = 0, e = h.length; t < e; t++) {
          const e = h[t];
          c = c.concat(e);
        }
        for (let t = 0, e = c.length; t < e; t++) {
          const e = c[t];
          i.push(e.x, e.y, 0), r.push(0, 0, 1), s.push(e.x, e.y);
        }
        for (let t = 0, e = u.length; t < e; t++) {
          const e = u[t],
            i = e[0] + a,
            r = e[1] + a,
            s = e[2] + a;
          n.push(i, r, s), (o += 3);
        }
      }
      this.setIndex(n),
        this.setAttribute("position", new ii(i, 3)),
        this.setAttribute("normal", new ii(r, 3)),
        this.setAttribute("uv", new ii(s, 2));
    }
    toJSON() {
      const t = di.prototype.toJSON.call(this);
      return (function (t, e) {
        if (((e.shapes = []), Array.isArray(t)))
          for (let n = 0, i = t.length; n < i; n++) {
            const i = t[n];
            e.shapes.push(i.uuid);
          }
        else e.shapes.push(t.uuid);
        return e;
      })(this.parameters.shapes, t);
    }
  }
  class No extends di {
    constructor(
      t = 1,
      e = 8,
      n = 6,
      i = 0,
      r = 2 * Math.PI,
      s = 0,
      a = Math.PI
    ) {
      super(),
        (this.type = "SphereGeometry"),
        (this.parameters = {
          radius: t,
          widthSegments: e,
          heightSegments: n,
          phiStart: i,
          phiLength: r,
          thetaStart: s,
          thetaLength: a,
        }),
        (e = Math.max(3, Math.floor(e))),
        (n = Math.max(2, Math.floor(n)));
      const o = Math.min(s + a, Math.PI);
      let l = 0;
      const c = [],
        h = new Me(),
        u = new Me(),
        d = [],
        p = [],
        m = [],
        f = [];
      for (let d = 0; d <= n; d++) {
        const g = [],
          v = d / n;
        let y = 0;
        0 == d && 0 == s
          ? (y = 0.5 / e)
          : d == n && o == Math.PI && (y = -0.5 / e);
        for (let n = 0; n <= e; n++) {
          const o = n / e;
          (h.x = -t * Math.cos(i + o * r) * Math.sin(s + v * a)),
            (h.y = t * Math.cos(s + v * a)),
            (h.z = t * Math.sin(i + o * r) * Math.sin(s + v * a)),
            p.push(h.x, h.y, h.z),
            u.copy(h).normalize(),
            m.push(u.x, u.y, u.z),
            f.push(o + y, 1 - v),
            g.push(l++);
        }
        c.push(g);
      }
      for (let t = 0; t < n; t++)
        for (let i = 0; i < e; i++) {
          const e = c[t][i + 1],
            r = c[t][i],
            a = c[t + 1][i],
            l = c[t + 1][i + 1];
          (0 !== t || s > 0) && d.push(e, r, l),
            (t !== n - 1 || o < Math.PI) && d.push(r, a, l);
        }
      this.setIndex(d),
        this.setAttribute("position", new ii(p, 3)),
        this.setAttribute("normal", new ii(m, 3)),
        this.setAttribute("uv", new ii(f, 2));
    }
  }
  class zo extends di {
    constructor(t = 1, e = 0.4, n = 8, i = 6, r = 2 * Math.PI) {
      super(),
        (this.type = "TorusGeometry"),
        (this.parameters = {
          radius: t,
          tube: e,
          radialSegments: n,
          tubularSegments: i,
          arc: r,
        }),
        (n = Math.floor(n)),
        (i = Math.floor(i));
      const s = [],
        a = [],
        o = [],
        l = [],
        c = new Me(),
        h = new Me(),
        u = new Me();
      for (let s = 0; s <= n; s++)
        for (let d = 0; d <= i; d++) {
          const p = (d / i) * r,
            m = (s / n) * Math.PI * 2;
          (h.x = (t + e * Math.cos(m)) * Math.cos(p)),
            (h.y = (t + e * Math.cos(m)) * Math.sin(p)),
            (h.z = e * Math.sin(m)),
            a.push(h.x, h.y, h.z),
            (c.x = t * Math.cos(p)),
            (c.y = t * Math.sin(p)),
            u.subVectors(h, c).normalize(),
            o.push(u.x, u.y, u.z),
            l.push(d / i),
            l.push(s / n);
        }
      for (let t = 1; t <= n; t++)
        for (let e = 1; e <= i; e++) {
          const n = (i + 1) * t + e - 1,
            r = (i + 1) * (t - 1) + e - 1,
            a = (i + 1) * (t - 1) + e,
            o = (i + 1) * t + e;
          s.push(n, r, o), s.push(r, a, o);
        }
      this.setIndex(s),
        this.setAttribute("position", new ii(a, 3)),
        this.setAttribute("normal", new ii(o, 3)),
        this.setAttribute("uv", new ii(l, 2));
    }
  }
  (class extends kn {
    constructor(t) {
      super(),
        (this.type = "ShadowMaterial"),
        (this.color = new $n(0)),
        (this.transparent = !0),
        this.setValues(t);
    }
    copy(t) {
      return super.copy(t), this.color.copy(t.color), this;
    }
  }).prototype.isShadowMaterial = !0;
  (class extends Oi {
    constructor(t) {
      super(t), (this.type = "RawShaderMaterial");
    }
  }).prototype.isRawShaderMaterial = !0;
  class Oo extends kn {
    constructor(t) {
      super(),
        (this.defines = { STANDARD: "" }),
        (this.type = "MeshStandardMaterial"),
        (this.color = new $n(16777215)),
        (this.roughness = 1),
        (this.metalness = 0),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new $n(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new pe(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.roughnessMap = null),
        (this.metalnessMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapIntensity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.skinning = !1),
        (this.morphTargets = !1),
        (this.morphNormals = !1),
        (this.flatShading = !1),
        (this.vertexTangents = !1),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.defines = { STANDARD: "" }),
        this.color.copy(t.color),
        (this.roughness = t.roughness),
        (this.metalness = t.metalness),
        (this.map = t.map),
        (this.lightMap = t.lightMap),
        (this.lightMapIntensity = t.lightMapIntensity),
        (this.aoMap = t.aoMap),
        (this.aoMapIntensity = t.aoMapIntensity),
        this.emissive.copy(t.emissive),
        (this.emissiveMap = t.emissiveMap),
        (this.emissiveIntensity = t.emissiveIntensity),
        (this.bumpMap = t.bumpMap),
        (this.bumpScale = t.bumpScale),
        (this.normalMap = t.normalMap),
        (this.normalMapType = t.normalMapType),
        this.normalScale.copy(t.normalScale),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        (this.roughnessMap = t.roughnessMap),
        (this.metalnessMap = t.metalnessMap),
        (this.alphaMap = t.alphaMap),
        (this.envMap = t.envMap),
        (this.envMapIntensity = t.envMapIntensity),
        (this.refractionRatio = t.refractionRatio),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.wireframeLinecap = t.wireframeLinecap),
        (this.wireframeLinejoin = t.wireframeLinejoin),
        (this.skinning = t.skinning),
        (this.morphTargets = t.morphTargets),
        (this.morphNormals = t.morphNormals),
        (this.flatShading = t.flatShading),
        (this.vertexTangents = t.vertexTangents),
        this
      );
    }
  }
  Oo.prototype.isMeshStandardMaterial = !0;
  (class extends Oo {
    constructor(t) {
      super(),
        (this.defines = { STANDARD: "", PHYSICAL: "" }),
        (this.type = "MeshPhysicalMaterial"),
        (this.clearcoat = 0),
        (this.clearcoatMap = null),
        (this.clearcoatRoughness = 0),
        (this.clearcoatRoughnessMap = null),
        (this.clearcoatNormalScale = new pe(1, 1)),
        (this.clearcoatNormalMap = null),
        (this.reflectivity = 0.5),
        Object.defineProperty(this, "ior", {
          get: function () {
            return (
              (1 + 0.4 * this.reflectivity) / (1 - 0.4 * this.reflectivity)
            );
          },
          set: function (t) {
            this.reflectivity = ae((2.5 * (t - 1)) / (t + 1), 0, 1);
          },
        }),
        (this.sheen = null),
        (this.transmission = 0),
        (this.transmissionMap = null),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.defines = { STANDARD: "", PHYSICAL: "" }),
        (this.clearcoat = t.clearcoat),
        (this.clearcoatMap = t.clearcoatMap),
        (this.clearcoatRoughness = t.clearcoatRoughness),
        (this.clearcoatRoughnessMap = t.clearcoatRoughnessMap),
        (this.clearcoatNormalMap = t.clearcoatNormalMap),
        this.clearcoatNormalScale.copy(t.clearcoatNormalScale),
        (this.reflectivity = t.reflectivity),
        t.sheen
          ? (this.sheen = (this.sheen || new $n()).copy(t.sheen))
          : (this.sheen = null),
        (this.transmission = t.transmission),
        (this.transmissionMap = t.transmissionMap),
        this
      );
    }
  }).prototype.isMeshPhysicalMaterial = !0;
  class Bo extends kn {
    constructor(t) {
      super(),
        (this.type = "MeshPhongMaterial"),
        (this.color = new $n(16777215)),
        (this.specular = new $n(1118481)),
        (this.shininess = 30),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new $n(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new pe(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.combine = 0),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.skinning = !1),
        (this.morphTargets = !1),
        (this.morphNormals = !1),
        (this.flatShading = !1),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        this.specular.copy(t.specular),
        (this.shininess = t.shininess),
        (this.map = t.map),
        (this.lightMap = t.lightMap),
        (this.lightMapIntensity = t.lightMapIntensity),
        (this.aoMap = t.aoMap),
        (this.aoMapIntensity = t.aoMapIntensity),
        this.emissive.copy(t.emissive),
        (this.emissiveMap = t.emissiveMap),
        (this.emissiveIntensity = t.emissiveIntensity),
        (this.bumpMap = t.bumpMap),
        (this.bumpScale = t.bumpScale),
        (this.normalMap = t.normalMap),
        (this.normalMapType = t.normalMapType),
        this.normalScale.copy(t.normalScale),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        (this.specularMap = t.specularMap),
        (this.alphaMap = t.alphaMap),
        (this.envMap = t.envMap),
        (this.combine = t.combine),
        (this.reflectivity = t.reflectivity),
        (this.refractionRatio = t.refractionRatio),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.wireframeLinecap = t.wireframeLinecap),
        (this.wireframeLinejoin = t.wireframeLinejoin),
        (this.skinning = t.skinning),
        (this.morphTargets = t.morphTargets),
        (this.morphNormals = t.morphNormals),
        (this.flatShading = t.flatShading),
        this
      );
    }
  }
  Bo.prototype.isMeshPhongMaterial = !0;
  (class extends kn {
    constructor(t) {
      super(),
        (this.defines = { TOON: "" }),
        (this.type = "MeshToonMaterial"),
        (this.color = new $n(16777215)),
        (this.map = null),
        (this.gradientMap = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new $n(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new pe(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.alphaMap = null),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.skinning = !1),
        (this.morphTargets = !1),
        (this.morphNormals = !1),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        (this.map = t.map),
        (this.gradientMap = t.gradientMap),
        (this.lightMap = t.lightMap),
        (this.lightMapIntensity = t.lightMapIntensity),
        (this.aoMap = t.aoMap),
        (this.aoMapIntensity = t.aoMapIntensity),
        this.emissive.copy(t.emissive),
        (this.emissiveMap = t.emissiveMap),
        (this.emissiveIntensity = t.emissiveIntensity),
        (this.bumpMap = t.bumpMap),
        (this.bumpScale = t.bumpScale),
        (this.normalMap = t.normalMap),
        (this.normalMapType = t.normalMapType),
        this.normalScale.copy(t.normalScale),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        (this.alphaMap = t.alphaMap),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.wireframeLinecap = t.wireframeLinecap),
        (this.wireframeLinejoin = t.wireframeLinejoin),
        (this.skinning = t.skinning),
        (this.morphTargets = t.morphTargets),
        (this.morphNormals = t.morphNormals),
        this
      );
    }
  }).prototype.isMeshToonMaterial = !0;
  (class extends kn {
    constructor(t) {
      super(),
        (this.type = "MeshNormalMaterial"),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new pe(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.skinning = !1),
        (this.morphTargets = !1),
        (this.morphNormals = !1),
        (this.flatShading = !1),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.bumpMap = t.bumpMap),
        (this.bumpScale = t.bumpScale),
        (this.normalMap = t.normalMap),
        (this.normalMapType = t.normalMapType),
        this.normalScale.copy(t.normalScale),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.skinning = t.skinning),
        (this.morphTargets = t.morphTargets),
        (this.morphNormals = t.morphNormals),
        (this.flatShading = t.flatShading),
        this
      );
    }
  }).prototype.isMeshNormalMaterial = !0;
  (class extends kn {
    constructor(t) {
      super(),
        (this.type = "MeshLambertMaterial"),
        (this.color = new $n(16777215)),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new $n(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.combine = 0),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.skinning = !1),
        (this.morphTargets = !1),
        (this.morphNormals = !1),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        (this.map = t.map),
        (this.lightMap = t.lightMap),
        (this.lightMapIntensity = t.lightMapIntensity),
        (this.aoMap = t.aoMap),
        (this.aoMapIntensity = t.aoMapIntensity),
        this.emissive.copy(t.emissive),
        (this.emissiveMap = t.emissiveMap),
        (this.emissiveIntensity = t.emissiveIntensity),
        (this.specularMap = t.specularMap),
        (this.alphaMap = t.alphaMap),
        (this.envMap = t.envMap),
        (this.combine = t.combine),
        (this.reflectivity = t.reflectivity),
        (this.refractionRatio = t.refractionRatio),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.wireframeLinecap = t.wireframeLinecap),
        (this.wireframeLinejoin = t.wireframeLinejoin),
        (this.skinning = t.skinning),
        (this.morphTargets = t.morphTargets),
        (this.morphNormals = t.morphNormals),
        this
      );
    }
  }).prototype.isMeshLambertMaterial = !0;
  (class extends kn {
    constructor(t) {
      super(),
        (this.defines = { MATCAP: "" }),
        (this.type = "MeshMatcapMaterial"),
        (this.color = new $n(16777215)),
        (this.matcap = null),
        (this.map = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new pe(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.alphaMap = null),
        (this.skinning = !1),
        (this.morphTargets = !1),
        (this.morphNormals = !1),
        (this.flatShading = !1),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.defines = { MATCAP: "" }),
        this.color.copy(t.color),
        (this.matcap = t.matcap),
        (this.map = t.map),
        (this.bumpMap = t.bumpMap),
        (this.bumpScale = t.bumpScale),
        (this.normalMap = t.normalMap),
        (this.normalMapType = t.normalMapType),
        this.normalScale.copy(t.normalScale),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        (this.alphaMap = t.alphaMap),
        (this.skinning = t.skinning),
        (this.morphTargets = t.morphTargets),
        (this.morphNormals = t.morphNormals),
        (this.flatShading = t.flatShading),
        this
      );
    }
  }).prototype.isMeshMatcapMaterial = !0;
  (class extends Ba {
    constructor(t) {
      super(),
        (this.type = "LineDashedMaterial"),
        (this.scale = 1),
        (this.dashSize = 3),
        (this.gapSize = 1),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.scale = t.scale),
        (this.dashSize = t.dashSize),
        (this.gapSize = t.gapSize),
        this
      );
    }
  }).prototype.isLineDashedMaterial = !0;
  const Fo = {
    arraySlice: function (t, e, n) {
      return Fo.isTypedArray(t)
        ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length))
        : t.slice(e, n);
    },
    convertArray: function (t, e, n) {
      return !t || (!n && t.constructor === e)
        ? t
        : "number" == typeof e.BYTES_PER_ELEMENT
        ? new e(t)
        : Array.prototype.slice.call(t);
    },
    isTypedArray: function (t) {
      return ArrayBuffer.isView(t) && !(t instanceof DataView);
    },
    getKeyframeOrder: function (t) {
      const e = t.length,
        n = new Array(e);
      for (let t = 0; t !== e; ++t) n[t] = t;
      return (
        n.sort(function (e, n) {
          return t[e] - t[n];
        }),
        n
      );
    },
    sortedArray: function (t, e, n) {
      const i = t.length,
        r = new t.constructor(i);
      for (let s = 0, a = 0; a !== i; ++s) {
        const i = n[s] * e;
        for (let n = 0; n !== e; ++n) r[a++] = t[i + n];
      }
      return r;
    },
    flattenJSON: function (t, e, n, i) {
      let r = 1,
        s = t[0];
      for (; void 0 !== s && void 0 === s[i]; ) s = t[r++];
      if (void 0 === s) return;
      let a = s[i];
      if (void 0 !== a)
        if (Array.isArray(a))
          do {
            (a = s[i]),
              void 0 !== a && (e.push(s.time), n.push.apply(n, a)),
              (s = t[r++]);
          } while (void 0 !== s);
        else if (void 0 !== a.toArray)
          do {
            (a = s[i]),
              void 0 !== a && (e.push(s.time), a.toArray(n, n.length)),
              (s = t[r++]);
          } while (void 0 !== s);
        else
          do {
            (a = s[i]),
              void 0 !== a && (e.push(s.time), n.push(a)),
              (s = t[r++]);
          } while (void 0 !== s);
    },
    subclip: function (t, e, n, i, r = 30) {
      const s = t.clone();
      s.name = e;
      const a = [];
      for (let t = 0; t < s.tracks.length; ++t) {
        const e = s.tracks[t],
          o = e.getValueSize(),
          l = [],
          c = [];
        for (let t = 0; t < e.times.length; ++t) {
          const s = e.times[t] * r;
          if (!(s < n || s >= i)) {
            l.push(e.times[t]);
            for (let n = 0; n < o; ++n) c.push(e.values[t * o + n]);
          }
        }
        0 !== l.length &&
          ((e.times = Fo.convertArray(l, e.times.constructor)),
          (e.values = Fo.convertArray(c, e.values.constructor)),
          a.push(e));
      }
      s.tracks = a;
      let o = 1 / 0;
      for (let t = 0; t < s.tracks.length; ++t)
        o > s.tracks[t].times[0] && (o = s.tracks[t].times[0]);
      for (let t = 0; t < s.tracks.length; ++t) s.tracks[t].shift(-1 * o);
      return s.resetDuration(), s;
    },
    makeClipAdditive: function (t, e = 0, n = t, i = 30) {
      i <= 0 && (i = 30);
      const r = n.tracks.length,
        s = e / i;
      for (let e = 0; e < r; ++e) {
        const i = n.tracks[e],
          r = i.ValueTypeName;
        if ("bool" === r || "string" === r) continue;
        const a = t.tracks.find(function (t) {
          return t.name === i.name && t.ValueTypeName === r;
        });
        if (void 0 === a) continue;
        let o = 0;
        const l = i.getValueSize();
        i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
          (o = l / 3);
        let c = 0;
        const h = a.getValueSize();
        a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
          (c = h / 3);
        const u = i.times.length - 1;
        let d;
        if (s <= i.times[0]) {
          const t = o,
            e = l - o;
          d = Fo.arraySlice(i.values, t, e);
        } else if (s >= i.times[u]) {
          const t = u * l + o,
            e = t + l - o;
          d = Fo.arraySlice(i.values, t, e);
        } else {
          const t = i.createInterpolant(),
            e = o,
            n = l - o;
          t.evaluate(s), (d = Fo.arraySlice(t.resultBuffer, e, n));
        }
        if ("quaternion" === r) {
          new be().fromArray(d).normalize().conjugate().toArray(d);
        }
        const p = a.times.length;
        for (let t = 0; t < p; ++t) {
          const e = t * h + c;
          if ("quaternion" === r)
            be.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e);
          else {
            const t = h - 2 * c;
            for (let n = 0; n < t; ++n) a.values[e + n] -= d[n];
          }
        }
      }
      return (t.blendMode = 2501), t;
    },
  };
  class Ho {
    constructor(t, e, n, i) {
      (this.parameterPositions = t),
        (this._cachedIndex = 0),
        (this.resultBuffer = void 0 !== i ? i : new e.constructor(n)),
        (this.sampleValues = e),
        (this.valueSize = n),
        (this.settings = null),
        (this.DefaultSettings_ = {});
    }
    evaluate(t) {
      const e = this.parameterPositions;
      let n = this._cachedIndex,
        i = e[n],
        r = e[n - 1];
      t: {
        e: {
          let s;
          n: {
            i: if (!(t < i)) {
              for (let s = n + 2; ; ) {
                if (void 0 === i) {
                  if (t < r) break i;
                  return (
                    (n = e.length),
                    (this._cachedIndex = n),
                    this.afterEnd_(n - 1, t, r)
                  );
                }
                if (n === s) break;
                if (((r = i), (i = e[++n]), t < i)) break e;
              }
              s = e.length;
              break n;
            }
            if (t >= r) break t;
            {
              const a = e[1];
              t < a && ((n = 2), (r = a));
              for (let s = n - 2; ; ) {
                if (void 0 === r)
                  return (this._cachedIndex = 0), this.beforeStart_(0, t, i);
                if (n === s) break;
                if (((i = r), (r = e[--n - 1]), t >= r)) break e;
              }
              (s = n), (n = 0);
            }
          }
          for (; n < s; ) {
            const i = (n + s) >>> 1;
            t < e[i] ? (s = i) : (n = i + 1);
          }
          if (((i = e[n]), (r = e[n - 1]), void 0 === r))
            return (this._cachedIndex = 0), this.beforeStart_(0, t, i);
          if (void 0 === i)
            return (
              (n = e.length),
              (this._cachedIndex = n),
              this.afterEnd_(n - 1, r, t)
            );
        }
        (this._cachedIndex = n), this.intervalChanged_(n, r, i);
      }
      return this.interpolate_(n, r, t, i);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(t) {
      const e = this.resultBuffer,
        n = this.sampleValues,
        i = this.valueSize,
        r = t * i;
      for (let t = 0; t !== i; ++t) e[t] = n[r + t];
      return e;
    }
    interpolate_() {
      throw new Error("call to abstract method");
    }
    intervalChanged_() {}
  }
  (Ho.prototype.beforeStart_ = Ho.prototype.copySampleValue_),
    (Ho.prototype.afterEnd_ = Ho.prototype.copySampleValue_);
  class Uo extends Ho {
    constructor(t, e, n, i) {
      super(t, e, n, i),
        (this._weightPrev = -0),
        (this._offsetPrev = -0),
        (this._weightNext = -0),
        (this._offsetNext = -0),
        (this.DefaultSettings_ = { endingStart: jt, endingEnd: jt });
    }
    intervalChanged_(t, e, n) {
      const i = this.parameterPositions;
      let r = t - 2,
        s = t + 1,
        a = i[r],
        o = i[s];
      if (void 0 === a)
        switch (this.getSettings_().endingStart) {
          case Xt:
            (r = t), (a = 2 * e - n);
            break;
          case qt:
            (r = i.length - 2), (a = e + i[r] - i[r + 1]);
            break;
          default:
            (r = t), (a = n);
        }
      if (void 0 === o)
        switch (this.getSettings_().endingEnd) {
          case Xt:
            (s = t), (o = 2 * n - e);
            break;
          case qt:
            (s = 1), (o = n + i[1] - i[0]);
            break;
          default:
            (s = t - 1), (o = e);
        }
      const l = 0.5 * (n - e),
        c = this.valueSize;
      (this._weightPrev = l / (e - a)),
        (this._weightNext = l / (o - n)),
        (this._offsetPrev = r * c),
        (this._offsetNext = s * c);
    }
    interpolate_(t, e, n, i) {
      const r = this.resultBuffer,
        s = this.sampleValues,
        a = this.valueSize,
        o = t * a,
        l = o - a,
        c = this._offsetPrev,
        h = this._offsetNext,
        u = this._weightPrev,
        d = this._weightNext,
        p = (n - e) / (i - e),
        m = p * p,
        f = m * p,
        g = -u * f + 2 * u * m - u * p,
        v = (1 + u) * f + (-1.5 - 2 * u) * m + (-0.5 + u) * p + 1,
        y = (-1 - d) * f + (1.5 + d) * m + 0.5 * p,
        x = d * f - d * m;
      for (let t = 0; t !== a; ++t)
        r[t] = g * s[c + t] + v * s[l + t] + y * s[o + t] + x * s[h + t];
      return r;
    }
  }
  class Go extends Ho {
    constructor(t, e, n, i) {
      super(t, e, n, i);
    }
    interpolate_(t, e, n, i) {
      const r = this.resultBuffer,
        s = this.sampleValues,
        a = this.valueSize,
        o = t * a,
        l = o - a,
        c = (n - e) / (i - e),
        h = 1 - c;
      for (let t = 0; t !== a; ++t) r[t] = s[l + t] * h + s[o + t] * c;
      return r;
    }
  }
  class Vo extends Ho {
    constructor(t, e, n, i) {
      super(t, e, n, i);
    }
    interpolate_(t) {
      return this.copySampleValue_(t - 1);
    }
  }
  class ko {
    constructor(t, e, n, i) {
      if (void 0 === t)
        throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === e || 0 === e.length)
        throw new Error(
          "THREE.KeyframeTrack: no keyframes in track named " + t
        );
      (this.name = t),
        (this.times = Fo.convertArray(e, this.TimeBufferType)),
        (this.values = Fo.convertArray(n, this.ValueBufferType)),
        this.setInterpolation(i || this.DefaultInterpolation);
    }
    static toJSON(t) {
      const e = t.constructor;
      let n;
      if (e.toJSON !== this.toJSON) n = e.toJSON(t);
      else {
        n = {
          name: t.name,
          times: Fo.convertArray(t.times, Array),
          values: Fo.convertArray(t.values, Array),
        };
        const e = t.getInterpolation();
        e !== t.DefaultInterpolation && (n.interpolation = e);
      }
      return (n.type = t.ValueTypeName), n;
    }
    InterpolantFactoryMethodDiscrete(t) {
      return new Vo(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodLinear(t) {
      return new Go(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodSmooth(t) {
      return new Uo(this.times, this.values, this.getValueSize(), t);
    }
    setInterpolation(t) {
      let e;
      switch (t) {
        case Vt:
          e = this.InterpolantFactoryMethodDiscrete;
          break;
        case kt:
          e = this.InterpolantFactoryMethodLinear;
          break;
        case Wt:
          e = this.InterpolantFactoryMethodSmooth;
      }
      if (void 0 === e) {
        const e =
          "unsupported interpolation for " +
          this.ValueTypeName +
          " keyframe track named " +
          this.name;
        if (void 0 === this.createInterpolant) {
          if (t === this.DefaultInterpolation) throw new Error(e);
          this.setInterpolation(this.DefaultInterpolation);
        }
        return console.warn("THREE.KeyframeTrack:", e), this;
      }
      return (this.createInterpolant = e), this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return Vt;
        case this.InterpolantFactoryMethodLinear:
          return kt;
        case this.InterpolantFactoryMethodSmooth:
          return Wt;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(t) {
      if (0 !== t) {
        const e = this.times;
        for (let n = 0, i = e.length; n !== i; ++n) e[n] += t;
      }
      return this;
    }
    scale(t) {
      if (1 !== t) {
        const e = this.times;
        for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t;
      }
      return this;
    }
    trim(t, e) {
      const n = this.times,
        i = n.length;
      let r = 0,
        s = i - 1;
      for (; r !== i && n[r] < t; ) ++r;
      for (; -1 !== s && n[s] > e; ) --s;
      if ((++s, 0 !== r || s !== i)) {
        r >= s && ((s = Math.max(s, 1)), (r = s - 1));
        const t = this.getValueSize();
        (this.times = Fo.arraySlice(n, r, s)),
          (this.values = Fo.arraySlice(this.values, r * t, s * t));
      }
      return this;
    }
    validate() {
      let t = !0;
      const e = this.getValueSize();
      e - Math.floor(e) != 0 &&
        (console.error(
          "THREE.KeyframeTrack: Invalid value size in track.",
          this
        ),
        (t = !1));
      const n = this.times,
        i = this.values,
        r = n.length;
      0 === r &&
        (console.error("THREE.KeyframeTrack: Track is empty.", this), (t = !1));
      let s = null;
      for (let e = 0; e !== r; e++) {
        const i = n[e];
        if ("number" == typeof i && isNaN(i)) {
          console.error(
            "THREE.KeyframeTrack: Time is not a valid number.",
            this,
            e,
            i
          ),
            (t = !1);
          break;
        }
        if (null !== s && s > i) {
          console.error(
            "THREE.KeyframeTrack: Out of order keys.",
            this,
            e,
            i,
            s
          ),
            (t = !1);
          break;
        }
        s = i;
      }
      if (void 0 !== i && Fo.isTypedArray(i))
        for (let e = 0, n = i.length; e !== n; ++e) {
          const n = i[e];
          if (isNaN(n)) {
            console.error(
              "THREE.KeyframeTrack: Value is not a valid number.",
              this,
              e,
              n
            ),
              (t = !1);
            break;
          }
        }
      return t;
    }
    optimize() {
      const t = Fo.arraySlice(this.times),
        e = Fo.arraySlice(this.values),
        n = this.getValueSize(),
        i = this.getInterpolation() === Wt,
        r = t.length - 1;
      let s = 1;
      for (let a = 1; a < r; ++a) {
        let r = !1;
        const o = t[a];
        if (o !== t[a + 1] && (1 !== a || o !== t[0]))
          if (i) r = !0;
          else {
            const t = a * n,
              i = t - n,
              s = t + n;
            for (let a = 0; a !== n; ++a) {
              const n = e[t + a];
              if (n !== e[i + a] || n !== e[s + a]) {
                r = !0;
                break;
              }
            }
          }
        if (r) {
          if (a !== s) {
            t[s] = t[a];
            const i = a * n,
              r = s * n;
            for (let t = 0; t !== n; ++t) e[r + t] = e[i + t];
          }
          ++s;
        }
      }
      if (r > 0) {
        t[s] = t[r];
        for (let t = r * n, i = s * n, a = 0; a !== n; ++a) e[i + a] = e[t + a];
        ++s;
      }
      return (
        s !== t.length
          ? ((this.times = Fo.arraySlice(t, 0, s)),
            (this.values = Fo.arraySlice(e, 0, s * n)))
          : ((this.times = t), (this.values = e)),
        this
      );
    }
    clone() {
      const t = Fo.arraySlice(this.times, 0),
        e = Fo.arraySlice(this.values, 0),
        n = new (0, this.constructor)(this.name, t, e);
      return (n.createInterpolant = this.createInterpolant), n;
    }
  }
  (ko.prototype.TimeBufferType = Float32Array),
    (ko.prototype.ValueBufferType = Float32Array),
    (ko.prototype.DefaultInterpolation = kt);
  class Wo extends ko {}
  (Wo.prototype.ValueTypeName = "bool"),
    (Wo.prototype.ValueBufferType = Array),
    (Wo.prototype.DefaultInterpolation = Vt),
    (Wo.prototype.InterpolantFactoryMethodLinear = void 0),
    (Wo.prototype.InterpolantFactoryMethodSmooth = void 0);
  class jo extends ko {}
  jo.prototype.ValueTypeName = "color";
  class Xo extends ko {}
  Xo.prototype.ValueTypeName = "number";
  class qo extends Ho {
    constructor(t, e, n, i) {
      super(t, e, n, i);
    }
    interpolate_(t, e, n, i) {
      const r = this.resultBuffer,
        s = this.sampleValues,
        a = this.valueSize,
        o = (n - e) / (i - e);
      let l = t * a;
      for (let t = l + a; l !== t; l += 4)
        be.slerpFlat(r, 0, s, l - a, s, l, o);
      return r;
    }
  }
  class Yo extends ko {
    InterpolantFactoryMethodLinear(t) {
      return new qo(this.times, this.values, this.getValueSize(), t);
    }
  }
  (Yo.prototype.ValueTypeName = "quaternion"),
    (Yo.prototype.DefaultInterpolation = kt),
    (Yo.prototype.InterpolantFactoryMethodSmooth = void 0);
  class Zo extends ko {}
  (Zo.prototype.ValueTypeName = "string"),
    (Zo.prototype.ValueBufferType = Array),
    (Zo.prototype.DefaultInterpolation = Vt),
    (Zo.prototype.InterpolantFactoryMethodLinear = void 0),
    (Zo.prototype.InterpolantFactoryMethodSmooth = void 0);
  class $o extends ko {}
  $o.prototype.ValueTypeName = "vector";
  class Jo {
    constructor(t, e = -1, n, i = 2500) {
      (this.name = t),
        (this.tracks = n),
        (this.duration = e),
        (this.blendMode = i),
        (this.uuid = se()),
        this.duration < 0 && this.resetDuration();
    }
    static parse(t) {
      const e = [],
        n = t.tracks,
        i = 1 / (t.fps || 1);
      for (let t = 0, r = n.length; t !== r; ++t) e.push(Qo(n[t]).scale(i));
      const r = new this(t.name, t.duration, e, t.blendMode);
      return (r.uuid = t.uuid), r;
    }
    static toJSON(t) {
      const e = [],
        n = t.tracks,
        i = {
          name: t.name,
          duration: t.duration,
          tracks: e,
          uuid: t.uuid,
          blendMode: t.blendMode,
        };
      for (let t = 0, i = n.length; t !== i; ++t) e.push(ko.toJSON(n[t]));
      return i;
    }
    static CreateFromMorphTargetSequence(t, e, n, i) {
      const r = e.length,
        s = [];
      for (let t = 0; t < r; t++) {
        let a = [],
          o = [];
        a.push((t + r - 1) % r, t, (t + 1) % r), o.push(0, 1, 0);
        const l = Fo.getKeyframeOrder(a);
        (a = Fo.sortedArray(a, 1, l)),
          (o = Fo.sortedArray(o, 1, l)),
          i || 0 !== a[0] || (a.push(r), o.push(o[0])),
          s.push(
            new Xo(".morphTargetInfluences[" + e[t].name + "]", a, o).scale(
              1 / n
            )
          );
      }
      return new this(t, -1, s);
    }
    static findByName(t, e) {
      let n = t;
      if (!Array.isArray(t)) {
        const e = t;
        n = (e.geometry && e.geometry.animations) || e.animations;
      }
      for (let t = 0; t < n.length; t++) if (n[t].name === e) return n[t];
      return null;
    }
    static CreateClipsFromMorphTargetSequences(t, e, n) {
      const i = {},
        r = /^([\w-]*?)([\d]+)$/;
      for (let e = 0, n = t.length; e < n; e++) {
        const n = t[e],
          s = n.name.match(r);
        if (s && s.length > 1) {
          const t = s[1];
          let e = i[t];
          e || (i[t] = e = []), e.push(n);
        }
      }
      const s = [];
      for (const t in i)
        s.push(this.CreateFromMorphTargetSequence(t, i[t], e, n));
      return s;
    }
    static parseAnimation(t, e) {
      if (!t)
        return (
          console.error(
            "THREE.AnimationClip: No animation in JSONLoader data."
          ),
          null
        );
      const n = function (t, e, n, i, r) {
          if (0 !== n.length) {
            const s = [],
              a = [];
            Fo.flattenJSON(n, s, a, i),
              0 !== s.length && r.push(new t(e, s, a));
          }
        },
        i = [],
        r = t.name || "default",
        s = t.fps || 30,
        a = t.blendMode;
      let o = t.length || -1;
      const l = t.hierarchy || [];
      for (let t = 0; t < l.length; t++) {
        const r = l[t].keys;
        if (r && 0 !== r.length)
          if (r[0].morphTargets) {
            const t = {};
            let e;
            for (e = 0; e < r.length; e++)
              if (r[e].morphTargets)
                for (let n = 0; n < r[e].morphTargets.length; n++)
                  t[r[e].morphTargets[n]] = -1;
            for (const n in t) {
              const t = [],
                s = [];
              for (let i = 0; i !== r[e].morphTargets.length; ++i) {
                const i = r[e];
                t.push(i.time), s.push(i.morphTarget === n ? 1 : 0);
              }
              i.push(new Xo(".morphTargetInfluence[" + n + "]", t, s));
            }
            o = t.length * (s || 1);
          } else {
            const s = ".bones[" + e[t].name + "]";
            n($o, s + ".position", r, "pos", i),
              n(Yo, s + ".quaternion", r, "rot", i),
              n($o, s + ".scale", r, "scl", i);
          }
      }
      if (0 === i.length) return null;
      return new this(r, o, i, a);
    }
    resetDuration() {
      let t = 0;
      for (let e = 0, n = this.tracks.length; e !== n; ++e) {
        const n = this.tracks[e];
        t = Math.max(t, n.times[n.times.length - 1]);
      }
      return (this.duration = t), this;
    }
    trim() {
      for (let t = 0; t < this.tracks.length; t++)
        this.tracks[t].trim(0, this.duration);
      return this;
    }
    validate() {
      let t = !0;
      for (let e = 0; e < this.tracks.length; e++)
        t = t && this.tracks[e].validate();
      return t;
    }
    optimize() {
      for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
      return this;
    }
    clone() {
      const t = [];
      for (let e = 0; e < this.tracks.length; e++)
        t.push(this.tracks[e].clone());
      return new this.constructor(this.name, this.duration, t, this.blendMode);
    }
    toJSON() {
      return this.constructor.toJSON(this);
    }
  }
  function Qo(t) {
    if (void 0 === t.type)
      throw new Error(
        "THREE.KeyframeTrack: track type undefined, can not parse"
      );
    const e = (function (t) {
      switch (t.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
          return Xo;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
          return $o;
        case "color":
          return jo;
        case "quaternion":
          return Yo;
        case "bool":
        case "boolean":
          return Wo;
        case "string":
          return Zo;
      }
      throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t);
    })(t.type);
    if (void 0 === t.times) {
      const e = [],
        n = [];
      Fo.flattenJSON(t.keys, e, n, "value"), (t.times = e), (t.values = n);
    }
    return void 0 !== e.parse
      ? e.parse(t)
      : new e(t.name, t.times, t.values, t.interpolation);
  }
  const Ko = {
    enabled: !1,
    files: {},
    add: function (t, e) {
      !1 !== this.enabled && (this.files[t] = e);
    },
    get: function (t) {
      if (!1 !== this.enabled) return this.files[t];
    },
    remove: function (t) {
      delete this.files[t];
    },
    clear: function () {
      this.files = {};
    },
  };
  const tl = new (class {
    constructor(t, e, n) {
      const i = this;
      let r,
        s = !1,
        a = 0,
        o = 0;
      const l = [];
      (this.onStart = void 0),
        (this.onLoad = t),
        (this.onProgress = e),
        (this.onError = n),
        (this.itemStart = function (t) {
          o++, !1 === s && void 0 !== i.onStart && i.onStart(t, a, o), (s = !0);
        }),
        (this.itemEnd = function (t) {
          a++,
            void 0 !== i.onProgress && i.onProgress(t, a, o),
            a === o && ((s = !1), void 0 !== i.onLoad && i.onLoad());
        }),
        (this.itemError = function (t) {
          void 0 !== i.onError && i.onError(t);
        }),
        (this.resolveURL = function (t) {
          return r ? r(t) : t;
        }),
        (this.setURLModifier = function (t) {
          return (r = t), this;
        }),
        (this.addHandler = function (t, e) {
          return l.push(t, e), this;
        }),
        (this.removeHandler = function (t) {
          const e = l.indexOf(t);
          return -1 !== e && l.splice(e, 2), this;
        }),
        (this.getHandler = function (t) {
          for (let e = 0, n = l.length; e < n; e += 2) {
            const n = l[e],
              i = l[e + 1];
            if ((n.global && (n.lastIndex = 0), n.test(t))) return i;
          }
          return null;
        });
    }
  })();
  class el {
    constructor(t) {
      (this.manager = void 0 !== t ? t : tl),
        (this.crossOrigin = "anonymous"),
        (this.withCredentials = !1),
        (this.path = ""),
        (this.resourcePath = ""),
        (this.requestHeader = {});
    }
    load() {}
    loadAsync(t, e) {
      const n = this;
      return new Promise(function (i, r) {
        n.load(t, i, e, r);
      });
    }
    parse() {}
    setCrossOrigin(t) {
      return (this.crossOrigin = t), this;
    }
    setWithCredentials(t) {
      return (this.withCredentials = t), this;
    }
    setPath(t) {
      return (this.path = t), this;
    }
    setResourcePath(t) {
      return (this.resourcePath = t), this;
    }
    setRequestHeader(t) {
      return (this.requestHeader = t), this;
    }
  }
  const nl = {};
  class il extends el {
    constructor(t) {
      super(t);
    }
    load(t, e, n, i) {
      void 0 === t && (t = ""),
        void 0 !== this.path && (t = this.path + t),
        (t = this.manager.resolveURL(t));
      const r = this,
        s = Ko.get(t);
      if (void 0 !== s)
        return (
          r.manager.itemStart(t),
          setTimeout(function () {
            e && e(s), r.manager.itemEnd(t);
          }, 0),
          s
        );
      if (void 0 !== nl[t])
        return void nl[t].push({ onLoad: e, onProgress: n, onError: i });
      const a = t.match(/^data:(.*?)(;base64)?,(.*)$/);
      let o;
      if (a) {
        const n = a[1],
          s = !!a[2];
        let o = a[3];
        (o = decodeURIComponent(o)), s && (o = atob(o));
        try {
          let i;
          const s = (this.responseType || "").toLowerCase();
          switch (s) {
            case "arraybuffer":
            case "blob":
              const t = new Uint8Array(o.length);
              for (let e = 0; e < o.length; e++) t[e] = o.charCodeAt(e);
              i = "blob" === s ? new Blob([t.buffer], { type: n }) : t.buffer;
              break;
            case "document":
              const e = new DOMParser();
              i = e.parseFromString(o, n);
              break;
            case "json":
              i = JSON.parse(o);
              break;
            default:
              i = o;
          }
          setTimeout(function () {
            e && e(i), r.manager.itemEnd(t);
          }, 0);
        } catch (e) {
          setTimeout(function () {
            i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
          }, 0);
        }
      } else {
        (nl[t] = []),
          nl[t].push({ onLoad: e, onProgress: n, onError: i }),
          (o = new XMLHttpRequest()),
          o.open("GET", t, !0),
          o.addEventListener(
            "load",
            function (e) {
              const n = this.response,
                i = nl[t];
              if ((delete nl[t], 200 === this.status || 0 === this.status)) {
                0 === this.status &&
                  console.warn("THREE.FileLoader: HTTP Status 0 received."),
                  Ko.add(t, n);
                for (let t = 0, e = i.length; t < e; t++) {
                  const e = i[t];
                  e.onLoad && e.onLoad(n);
                }
                r.manager.itemEnd(t);
              } else {
                for (let t = 0, n = i.length; t < n; t++) {
                  const n = i[t];
                  n.onError && n.onError(e);
                }
                r.manager.itemError(t), r.manager.itemEnd(t);
              }
            },
            !1
          ),
          o.addEventListener(
            "progress",
            function (e) {
              const n = nl[t];
              for (let t = 0, i = n.length; t < i; t++) {
                const i = n[t];
                i.onProgress && i.onProgress(e);
              }
            },
            !1
          ),
          o.addEventListener(
            "error",
            function (e) {
              const n = nl[t];
              delete nl[t];
              for (let t = 0, i = n.length; t < i; t++) {
                const i = n[t];
                i.onError && i.onError(e);
              }
              r.manager.itemError(t), r.manager.itemEnd(t);
            },
            !1
          ),
          o.addEventListener(
            "abort",
            function (e) {
              const n = nl[t];
              delete nl[t];
              for (let t = 0, i = n.length; t < i; t++) {
                const i = n[t];
                i.onError && i.onError(e);
              }
              r.manager.itemError(t), r.manager.itemEnd(t);
            },
            !1
          ),
          void 0 !== this.responseType && (o.responseType = this.responseType),
          void 0 !== this.withCredentials &&
            (o.withCredentials = this.withCredentials),
          o.overrideMimeType &&
            o.overrideMimeType(
              void 0 !== this.mimeType ? this.mimeType : "text/plain"
            );
        for (const t in this.requestHeader)
          o.setRequestHeader(t, this.requestHeader[t]);
        o.send(null);
      }
      return r.manager.itemStart(t), o;
    }
    setResponseType(t) {
      return (this.responseType = t), this;
    }
    setMimeType(t) {
      return (this.mimeType = t), this;
    }
  }
  class rl extends el {
    constructor(t) {
      super(t);
    }
    load(t, e, n, i) {
      void 0 !== this.path && (t = this.path + t),
        (t = this.manager.resolveURL(t));
      const r = this,
        s = Ko.get(t);
      if (void 0 !== s)
        return (
          r.manager.itemStart(t),
          setTimeout(function () {
            e && e(s), r.manager.itemEnd(t);
          }, 0),
          s
        );
      const a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
      function o() {
        a.removeEventListener("load", o, !1),
          a.removeEventListener("error", l, !1),
          Ko.add(t, this),
          e && e(this),
          r.manager.itemEnd(t);
      }
      function l(e) {
        a.removeEventListener("load", o, !1),
          a.removeEventListener("error", l, !1),
          i && i(e),
          r.manager.itemError(t),
          r.manager.itemEnd(t);
      }
      return (
        a.addEventListener("load", o, !1),
        a.addEventListener("error", l, !1),
        "data:" !== t.substr(0, 5) &&
          void 0 !== this.crossOrigin &&
          (a.crossOrigin = this.crossOrigin),
        r.manager.itemStart(t),
        (a.src = t),
        a
      );
    }
  }
  class sl extends el {
    constructor(t) {
      super(t);
    }
    load(t, e, n, i) {
      const r = new Gi(),
        s = new rl(this.manager);
      s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
      let a = 0;
      function o(n) {
        s.load(
          t[n],
          function (t) {
            (r.images[n] = t),
              a++,
              6 === a && ((r.needsUpdate = !0), e && e(r));
          },
          void 0,
          i
        );
      }
      for (let e = 0; e < t.length; ++e) o(e);
      return r;
    }
  }
  class al extends el {
    constructor(t) {
      super(t);
    }
    load(t, e, n, i) {
      const r = new ye(),
        s = new rl(this.manager);
      return (
        s.setCrossOrigin(this.crossOrigin),
        s.setPath(this.path),
        s.load(
          t,
          function (n) {
            r.image = n;
            const i =
              t.search(/\.jpe?g($|\?)/i) > 0 ||
              0 === t.search(/^data\:image\/jpeg/);
            (r.format = i ? Ft : Ht),
              (r.needsUpdate = !0),
              void 0 !== e && e(r);
          },
          n,
          i
        ),
        r
      );
    }
  }
  class ol {
    constructor() {
      (this.type = "Curve"), (this.arcLengthDivisions = 200);
    }
    getPoint() {
      return console.warn("THREE.Curve: .getPoint() not implemented."), null;
    }
    getPointAt(t, e) {
      const n = this.getUtoTmapping(t);
      return this.getPoint(n, e);
    }
    getPoints(t = 5) {
      const e = [];
      for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
      return e;
    }
    getSpacedPoints(t = 5) {
      const e = [];
      for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
      return e;
    }
    getLength() {
      const t = this.getLengths();
      return t[t.length - 1];
    }
    getLengths(t = this.arcLengthDivisions) {
      if (
        this.cacheArcLengths &&
        this.cacheArcLengths.length === t + 1 &&
        !this.needsUpdate
      )
        return this.cacheArcLengths;
      this.needsUpdate = !1;
      const e = [];
      let n,
        i = this.getPoint(0),
        r = 0;
      e.push(0);
      for (let s = 1; s <= t; s++)
        (n = this.getPoint(s / t)), (r += n.distanceTo(i)), e.push(r), (i = n);
      return (this.cacheArcLengths = e), e;
    }
    updateArcLengths() {
      (this.needsUpdate = !0), this.getLengths();
    }
    getUtoTmapping(t, e) {
      const n = this.getLengths();
      let i = 0;
      const r = n.length;
      let s;
      s = e || t * n[r - 1];
      let a,
        o = 0,
        l = r - 1;
      for (; o <= l; )
        if (((i = Math.floor(o + (l - o) / 2)), (a = n[i] - s), a < 0))
          o = i + 1;
        else {
          if (!(a > 0)) {
            l = i;
            break;
          }
          l = i - 1;
        }
      if (((i = l), n[i] === s)) return i / (r - 1);
      const c = n[i];
      return (i + (s - c) / (n[i + 1] - c)) / (r - 1);
    }
    getTangent(t, e) {
      const n = 1e-4;
      let i = t - n,
        r = t + n;
      i < 0 && (i = 0), r > 1 && (r = 1);
      const s = this.getPoint(i),
        a = this.getPoint(r),
        o = e || (s.isVector2 ? new pe() : new Me());
      return o.copy(a).sub(s).normalize(), o;
    }
    getTangentAt(t, e) {
      const n = this.getUtoTmapping(t);
      return this.getTangent(n, e);
    }
    computeFrenetFrames(t, e) {
      const n = new Me(),
        i = [],
        r = [],
        s = [],
        a = new Me(),
        o = new tn();
      for (let e = 0; e <= t; e++) {
        const n = e / t;
        (i[e] = this.getTangentAt(n, new Me())), i[e].normalize();
      }
      (r[0] = new Me()), (s[0] = new Me());
      let l = Number.MAX_VALUE;
      const c = Math.abs(i[0].x),
        h = Math.abs(i[0].y),
        u = Math.abs(i[0].z);
      c <= l && ((l = c), n.set(1, 0, 0)),
        h <= l && ((l = h), n.set(0, 1, 0)),
        u <= l && n.set(0, 0, 1),
        a.crossVectors(i[0], n).normalize(),
        r[0].crossVectors(i[0], a),
        s[0].crossVectors(i[0], r[0]);
      for (let e = 1; e <= t; e++) {
        if (
          ((r[e] = r[e - 1].clone()),
          (s[e] = s[e - 1].clone()),
          a.crossVectors(i[e - 1], i[e]),
          a.length() > Number.EPSILON)
        ) {
          a.normalize();
          const t = Math.acos(ae(i[e - 1].dot(i[e]), -1, 1));
          r[e].applyMatrix4(o.makeRotationAxis(a, t));
        }
        s[e].crossVectors(i[e], r[e]);
      }
      if (!0 === e) {
        let e = Math.acos(ae(r[0].dot(r[t]), -1, 1));
        (e /= t), i[0].dot(a.crossVectors(r[0], r[t])) > 0 && (e = -e);
        for (let n = 1; n <= t; n++)
          r[n].applyMatrix4(o.makeRotationAxis(i[n], e * n)),
            s[n].crossVectors(i[n], r[n]);
      }
      return { tangents: i, normals: r, binormals: s };
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return (this.arcLengthDivisions = t.arcLengthDivisions), this;
    }
    toJSON() {
      const t = {
        metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" },
      };
      return (
        (t.arcLengthDivisions = this.arcLengthDivisions),
        (t.type = this.type),
        t
      );
    }
    fromJSON(t) {
      return (this.arcLengthDivisions = t.arcLengthDivisions), this;
    }
  }
  class ll extends ol {
    constructor(
      t = 0,
      e = 0,
      n = 1,
      i = 1,
      r = 0,
      s = 2 * Math.PI,
      a = !1,
      o = 0
    ) {
      super(),
        (this.type = "EllipseCurve"),
        (this.aX = t),
        (this.aY = e),
        (this.xRadius = n),
        (this.yRadius = i),
        (this.aStartAngle = r),
        (this.aEndAngle = s),
        (this.aClockwise = a),
        (this.aRotation = o);
    }
    getPoint(t, e) {
      const n = e || new pe(),
        i = 2 * Math.PI;
      let r = this.aEndAngle - this.aStartAngle;
      const s = Math.abs(r) < Number.EPSILON;
      for (; r < 0; ) r += i;
      for (; r > i; ) r -= i;
      r < Number.EPSILON && (r = s ? 0 : i),
        !0 !== this.aClockwise || s || (r === i ? (r = -i) : (r -= i));
      const a = this.aStartAngle + t * r;
      let o = this.aX + this.xRadius * Math.cos(a),
        l = this.aY + this.yRadius * Math.sin(a);
      if (0 !== this.aRotation) {
        const t = Math.cos(this.aRotation),
          e = Math.sin(this.aRotation),
          n = o - this.aX,
          i = l - this.aY;
        (o = n * t - i * e + this.aX), (l = n * e + i * t + this.aY);
      }
      return n.set(o, l);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.aX = t.aX),
        (this.aY = t.aY),
        (this.xRadius = t.xRadius),
        (this.yRadius = t.yRadius),
        (this.aStartAngle = t.aStartAngle),
        (this.aEndAngle = t.aEndAngle),
        (this.aClockwise = t.aClockwise),
        (this.aRotation = t.aRotation),
        this
      );
    }
    toJSON() {
      const t = super.toJSON();
      return (
        (t.aX = this.aX),
        (t.aY = this.aY),
        (t.xRadius = this.xRadius),
        (t.yRadius = this.yRadius),
        (t.aStartAngle = this.aStartAngle),
        (t.aEndAngle = this.aEndAngle),
        (t.aClockwise = this.aClockwise),
        (t.aRotation = this.aRotation),
        t
      );
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        (this.aX = t.aX),
        (this.aY = t.aY),
        (this.xRadius = t.xRadius),
        (this.yRadius = t.yRadius),
        (this.aStartAngle = t.aStartAngle),
        (this.aEndAngle = t.aEndAngle),
        (this.aClockwise = t.aClockwise),
        (this.aRotation = t.aRotation),
        this
      );
    }
  }
  ll.prototype.isEllipseCurve = !0;
  class cl extends ll {
    constructor(t, e, n, i, r, s) {
      super(t, e, n, n, i, r, s), (this.type = "ArcCurve");
    }
  }
  function hl() {
    let t = 0,
      e = 0,
      n = 0,
      i = 0;
    function r(r, s, a, o) {
      (t = r),
        (e = a),
        (n = -3 * r + 3 * s - 2 * a - o),
        (i = 2 * r - 2 * s + a + o);
    }
    return {
      initCatmullRom: function (t, e, n, i, s) {
        r(e, n, s * (n - t), s * (i - e));
      },
      initNonuniformCatmullRom: function (t, e, n, i, s, a, o) {
        let l = (e - t) / s - (n - t) / (s + a) + (n - e) / a,
          c = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
        (l *= a), (c *= a), r(e, n, l, c);
      },
      calc: function (r) {
        const s = r * r;
        return t + e * r + n * s + i * (s * r);
      },
    };
  }
  cl.prototype.isArcCurve = !0;
  const ul = new Me(),
    dl = new hl(),
    pl = new hl(),
    ml = new hl();
  class fl extends ol {
    constructor(t = [], e = !1, n = "centripetal", i = 0.5) {
      super(),
        (this.type = "CatmullRomCurve3"),
        (this.points = t),
        (this.closed = e),
        (this.curveType = n),
        (this.tension = i);
    }
    getPoint(t, e = new Me()) {
      const n = e,
        i = this.points,
        r = i.length,
        s = (r - (this.closed ? 0 : 1)) * t;
      let a,
        o,
        l = Math.floor(s),
        c = s - l;
      this.closed
        ? (l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r)
        : 0 === c && l === r - 1 && ((l = r - 2), (c = 1)),
        this.closed || l > 0
          ? (a = i[(l - 1) % r])
          : (ul.subVectors(i[0], i[1]).add(i[0]), (a = ul));
      const h = i[l % r],
        u = i[(l + 1) % r];
      if (
        (this.closed || l + 2 < r
          ? (o = i[(l + 2) % r])
          : (ul.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), (o = ul)),
        "centripetal" === this.curveType || "chordal" === this.curveType)
      ) {
        const t = "chordal" === this.curveType ? 0.5 : 0.25;
        let e = Math.pow(a.distanceToSquared(h), t),
          n = Math.pow(h.distanceToSquared(u), t),
          i = Math.pow(u.distanceToSquared(o), t);
        n < 1e-4 && (n = 1),
          e < 1e-4 && (e = n),
          i < 1e-4 && (i = n),
          dl.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, e, n, i),
          pl.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, e, n, i),
          ml.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, e, n, i);
      } else
        "catmullrom" === this.curveType &&
          (dl.initCatmullRom(a.x, h.x, u.x, o.x, this.tension),
          pl.initCatmullRom(a.y, h.y, u.y, o.y, this.tension),
          ml.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));
      return n.set(dl.calc(c), pl.calc(c), ml.calc(c)), n;
    }
    copy(t) {
      super.copy(t), (this.points = []);
      for (let e = 0, n = t.points.length; e < n; e++) {
        const n = t.points[e];
        this.points.push(n.clone());
      }
      return (
        (this.closed = t.closed),
        (this.curveType = t.curveType),
        (this.tension = t.tension),
        this
      );
    }
    toJSON() {
      const t = super.toJSON();
      t.points = [];
      for (let e = 0, n = this.points.length; e < n; e++) {
        const n = this.points[e];
        t.points.push(n.toArray());
      }
      return (
        (t.closed = this.closed),
        (t.curveType = this.curveType),
        (t.tension = this.tension),
        t
      );
    }
    fromJSON(t) {
      super.fromJSON(t), (this.points = []);
      for (let e = 0, n = t.points.length; e < n; e++) {
        const n = t.points[e];
        this.points.push(new Me().fromArray(n));
      }
      return (
        (this.closed = t.closed),
        (this.curveType = t.curveType),
        (this.tension = t.tension),
        this
      );
    }
  }
  function gl(t, e, n, i, r) {
    const s = 0.5 * (i - e),
      a = 0.5 * (r - n),
      o = t * t;
    return (
      (2 * n - 2 * i + s + a) * (t * o) +
      (-3 * n + 3 * i - 2 * s - a) * o +
      s * t +
      n
    );
  }
  function vl(t, e, n, i) {
    return (
      (function (t, e) {
        const n = 1 - t;
        return n * n * e;
      })(t, e) +
      (function (t, e) {
        return 2 * (1 - t) * t * e;
      })(t, n) +
      (function (t, e) {
        return t * t * e;
      })(t, i)
    );
  }
  function yl(t, e, n, i, r) {
    return (
      (function (t, e) {
        const n = 1 - t;
        return n * n * n * e;
      })(t, e) +
      (function (t, e) {
        const n = 1 - t;
        return 3 * n * n * t * e;
      })(t, n) +
      (function (t, e) {
        return 3 * (1 - t) * t * t * e;
      })(t, i) +
      (function (t, e) {
        return t * t * t * e;
      })(t, r)
    );
  }
  fl.prototype.isCatmullRomCurve3 = !0;
  class xl extends ol {
    constructor(t = new pe(), e = new pe(), n = new pe(), i = new pe()) {
      super(),
        (this.type = "CubicBezierCurve"),
        (this.v0 = t),
        (this.v1 = e),
        (this.v2 = n),
        (this.v3 = i);
    }
    getPoint(t, e = new pe()) {
      const n = e,
        i = this.v0,
        r = this.v1,
        s = this.v2,
        a = this.v3;
      return n.set(yl(t, i.x, r.x, s.x, a.x), yl(t, i.y, r.y, s.y, a.y)), n;
    }
    copy(t) {
      return (
        super.copy(t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this.v3.copy(t.v3),
        this
      );
    }
    toJSON() {
      const t = super.toJSON();
      return (
        (t.v0 = this.v0.toArray()),
        (t.v1 = this.v1.toArray()),
        (t.v2 = this.v2.toArray()),
        (t.v3 = this.v3.toArray()),
        t
      );
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this.v3.fromArray(t.v3),
        this
      );
    }
  }
  xl.prototype.isCubicBezierCurve = !0;
  class _l extends ol {
    constructor(t = new Me(), e = new Me(), n = new Me(), i = new Me()) {
      super(),
        (this.type = "CubicBezierCurve3"),
        (this.v0 = t),
        (this.v1 = e),
        (this.v2 = n),
        (this.v3 = i);
    }
    getPoint(t, e = new Me()) {
      const n = e,
        i = this.v0,
        r = this.v1,
        s = this.v2,
        a = this.v3;
      return (
        n.set(
          yl(t, i.x, r.x, s.x, a.x),
          yl(t, i.y, r.y, s.y, a.y),
          yl(t, i.z, r.z, s.z, a.z)
        ),
        n
      );
    }
    copy(t) {
      return (
        super.copy(t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this.v3.copy(t.v3),
        this
      );
    }
    toJSON() {
      const t = super.toJSON();
      return (
        (t.v0 = this.v0.toArray()),
        (t.v1 = this.v1.toArray()),
        (t.v2 = this.v2.toArray()),
        (t.v3 = this.v3.toArray()),
        t
      );
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this.v3.fromArray(t.v3),
        this
      );
    }
  }
  _l.prototype.isCubicBezierCurve3 = !0;
  class wl extends ol {
    constructor(t = new pe(), e = new pe()) {
      super(), (this.type = "LineCurve"), (this.v1 = t), (this.v2 = e);
    }
    getPoint(t, e = new pe()) {
      const n = e;
      return (
        1 === t
          ? n.copy(this.v2)
          : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
        n
      );
    }
    getPointAt(t, e) {
      return this.getPoint(t, e);
    }
    getTangent(t, e) {
      const n = e || new pe();
      return n.copy(this.v2).sub(this.v1).normalize(), n;
    }
    copy(t) {
      return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
    }
    toJSON() {
      const t = super.toJSON();
      return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
      );
    }
  }
  wl.prototype.isLineCurve = !0;
  class bl extends ol {
    constructor(t = new pe(), e = new pe(), n = new pe()) {
      super(),
        (this.type = "QuadraticBezierCurve"),
        (this.v0 = t),
        (this.v1 = e),
        (this.v2 = n);
    }
    getPoint(t, e = new pe()) {
      const n = e,
        i = this.v0,
        r = this.v1,
        s = this.v2;
      return n.set(vl(t, i.x, r.x, s.x), vl(t, i.y, r.y, s.y)), n;
    }
    copy(t) {
      return (
        super.copy(t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
      );
    }
    toJSON() {
      const t = super.toJSON();
      return (
        (t.v0 = this.v0.toArray()),
        (t.v1 = this.v1.toArray()),
        (t.v2 = this.v2.toArray()),
        t
      );
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
      );
    }
  }
  bl.prototype.isQuadraticBezierCurve = !0;
  class Ml extends ol {
    constructor(t = new Me(), e = new Me(), n = new Me()) {
      super(),
        (this.type = "QuadraticBezierCurve3"),
        (this.v0 = t),
        (this.v1 = e),
        (this.v2 = n);
    }
    getPoint(t, e = new Me()) {
      const n = e,
        i = this.v0,
        r = this.v1,
        s = this.v2;
      return (
        n.set(vl(t, i.x, r.x, s.x), vl(t, i.y, r.y, s.y), vl(t, i.z, r.z, s.z)),
        n
      );
    }
    copy(t) {
      return (
        super.copy(t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
      );
    }
    toJSON() {
      const t = super.toJSON();
      return (
        (t.v0 = this.v0.toArray()),
        (t.v1 = this.v1.toArray()),
        (t.v2 = this.v2.toArray()),
        t
      );
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
      );
    }
  }
  Ml.prototype.isQuadraticBezierCurve3 = !0;
  class Sl extends ol {
    constructor(t = []) {
      super(), (this.type = "SplineCurve"), (this.points = t);
    }
    getPoint(t, e = new pe()) {
      const n = e,
        i = this.points,
        r = (i.length - 1) * t,
        s = Math.floor(r),
        a = r - s,
        o = i[0 === s ? s : s - 1],
        l = i[s],
        c = i[s > i.length - 2 ? i.length - 1 : s + 1],
        h = i[s > i.length - 3 ? i.length - 1 : s + 2];
      return n.set(gl(a, o.x, l.x, c.x, h.x), gl(a, o.y, l.y, c.y, h.y)), n;
    }
    copy(t) {
      super.copy(t), (this.points = []);
      for (let e = 0, n = t.points.length; e < n; e++) {
        const n = t.points[e];
        this.points.push(n.clone());
      }
      return this;
    }
    toJSON() {
      const t = super.toJSON();
      t.points = [];
      for (let e = 0, n = this.points.length; e < n; e++) {
        const n = this.points[e];
        t.points.push(n.toArray());
      }
      return t;
    }
    fromJSON(t) {
      super.fromJSON(t), (this.points = []);
      for (let e = 0, n = t.points.length; e < n; e++) {
        const n = t.points[e];
        this.points.push(new pe().fromArray(n));
      }
      return this;
    }
  }
  Sl.prototype.isSplineCurve = !0;
  var El = Object.freeze({
    __proto__: null,
    ArcCurve: cl,
    CatmullRomCurve3: fl,
    CubicBezierCurve: xl,
    CubicBezierCurve3: _l,
    EllipseCurve: ll,
    LineCurve: wl,
    LineCurve3: class extends ol {
      constructor(t = new Me(), e = new Me()) {
        super(),
          (this.type = "LineCurve3"),
          (this.isLineCurve3 = !0),
          (this.v1 = t),
          (this.v2 = e);
      }
      getPoint(t, e = new Me()) {
        const n = e;
        return (
          1 === t
            ? n.copy(this.v2)
            : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
          n
        );
      }
      getPointAt(t, e) {
        return this.getPoint(t, e);
      }
      copy(t) {
        return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
      }
      toJSON() {
        const t = super.toJSON();
        return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
      }
      fromJSON(t) {
        return (
          super.fromJSON(t),
          this.v1.fromArray(t.v1),
          this.v2.fromArray(t.v2),
          this
        );
      }
    },
    QuadraticBezierCurve: bl,
    QuadraticBezierCurve3: Ml,
    SplineCurve: Sl,
  });
  class Tl extends ol {
    constructor() {
      super(),
        (this.type = "CurvePath"),
        (this.curves = []),
        (this.autoClose = !1);
    }
    add(t) {
      this.curves.push(t);
    }
    closePath() {
      const t = this.curves[0].getPoint(0),
        e = this.curves[this.curves.length - 1].getPoint(1);
      t.equals(e) || this.curves.push(new wl(e, t));
    }
    getPoint(t) {
      const e = t * this.getLength(),
        n = this.getCurveLengths();
      let i = 0;
      for (; i < n.length; ) {
        if (n[i] >= e) {
          const t = n[i] - e,
            r = this.curves[i],
            s = r.getLength(),
            a = 0 === s ? 0 : 1 - t / s;
          return r.getPointAt(a);
        }
        i++;
      }
      return null;
    }
    getLength() {
      const t = this.getCurveLengths();
      return t[t.length - 1];
    }
    updateArcLengths() {
      (this.needsUpdate = !0),
        (this.cacheLengths = null),
        this.getCurveLengths();
    }
    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
        return this.cacheLengths;
      const t = [];
      let e = 0;
      for (let n = 0, i = this.curves.length; n < i; n++)
        (e += this.curves[n].getLength()), t.push(e);
      return (this.cacheLengths = t), t;
    }
    getSpacedPoints(t = 40) {
      const e = [];
      for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
      return this.autoClose && e.push(e[0]), e;
    }
    getPoints(t = 12) {
      const e = [];
      let n;
      for (let i = 0, r = this.curves; i < r.length; i++) {
        const s = r[i],
          a =
            s && s.isEllipseCurve
              ? 2 * t
              : s && (s.isLineCurve || s.isLineCurve3)
              ? 1
              : s && s.isSplineCurve
              ? t * s.points.length
              : t,
          o = s.getPoints(a);
        for (let t = 0; t < o.length; t++) {
          const i = o[t];
          (n && n.equals(i)) || (e.push(i), (n = i));
        }
      }
      return (
        this.autoClose &&
          e.length > 1 &&
          !e[e.length - 1].equals(e[0]) &&
          e.push(e[0]),
        e
      );
    }
    copy(t) {
      super.copy(t), (this.curves = []);
      for (let e = 0, n = t.curves.length; e < n; e++) {
        const n = t.curves[e];
        this.curves.push(n.clone());
      }
      return (this.autoClose = t.autoClose), this;
    }
    toJSON() {
      const t = super.toJSON();
      (t.autoClose = this.autoClose), (t.curves = []);
      for (let e = 0, n = this.curves.length; e < n; e++) {
        const n = this.curves[e];
        t.curves.push(n.toJSON());
      }
      return t;
    }
    fromJSON(t) {
      super.fromJSON(t), (this.autoClose = t.autoClose), (this.curves = []);
      for (let e = 0, n = t.curves.length; e < n; e++) {
        const n = t.curves[e];
        this.curves.push(new El[n.type]().fromJSON(n));
      }
      return this;
    }
  }
  class Ll extends Tl {
    constructor(t) {
      super(),
        (this.type = "Path"),
        (this.currentPoint = new pe()),
        t && this.setFromPoints(t);
    }
    setFromPoints(t) {
      this.moveTo(t[0].x, t[0].y);
      for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
      return this;
    }
    moveTo(t, e) {
      return this.currentPoint.set(t, e), this;
    }
    lineTo(t, e) {
      const n = new wl(this.currentPoint.clone(), new pe(t, e));
      return this.curves.push(n), this.currentPoint.set(t, e), this;
    }
    quadraticCurveTo(t, e, n, i) {
      const r = new bl(this.currentPoint.clone(), new pe(t, e), new pe(n, i));
      return this.curves.push(r), this.currentPoint.set(n, i), this;
    }
    bezierCurveTo(t, e, n, i, r, s) {
      const a = new xl(
        this.currentPoint.clone(),
        new pe(t, e),
        new pe(n, i),
        new pe(r, s)
      );
      return this.curves.push(a), this.currentPoint.set(r, s), this;
    }
    splineThru(t) {
      const e = [this.currentPoint.clone()].concat(t),
        n = new Sl(e);
      return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
    }
    arc(t, e, n, i, r, s) {
      const a = this.currentPoint.x,
        o = this.currentPoint.y;
      return this.absarc(t + a, e + o, n, i, r, s), this;
    }
    absarc(t, e, n, i, r, s) {
      return this.absellipse(t, e, n, n, i, r, s), this;
    }
    ellipse(t, e, n, i, r, s, a, o) {
      const l = this.currentPoint.x,
        c = this.currentPoint.y;
      return this.absellipse(t + l, e + c, n, i, r, s, a, o), this;
    }
    absellipse(t, e, n, i, r, s, a, o) {
      const l = new ll(t, e, n, i, r, s, a, o);
      if (this.curves.length > 0) {
        const t = l.getPoint(0);
        t.equals(this.currentPoint) || this.lineTo(t.x, t.y);
      }
      this.curves.push(l);
      const c = l.getPoint(1);
      return this.currentPoint.copy(c), this;
    }
    copy(t) {
      return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
    }
    toJSON() {
      const t = super.toJSON();
      return (t.currentPoint = this.currentPoint.toArray()), t;
    }
    fromJSON(t) {
      return (
        super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this
      );
    }
  }
  class Al extends Ll {
    constructor(t) {
      super(t), (this.uuid = se()), (this.type = "Shape"), (this.holes = []);
    }
    getPointsHoles(t) {
      const e = [];
      for (let n = 0, i = this.holes.length; n < i; n++)
        e[n] = this.holes[n].getPoints(t);
      return e;
    }
    extractPoints(t) {
      return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
    }
    copy(t) {
      super.copy(t), (this.holes = []);
      for (let e = 0, n = t.holes.length; e < n; e++) {
        const n = t.holes[e];
        this.holes.push(n.clone());
      }
      return this;
    }
    toJSON() {
      const t = super.toJSON();
      (t.uuid = this.uuid), (t.holes = []);
      for (let e = 0, n = this.holes.length; e < n; e++) {
        const n = this.holes[e];
        t.holes.push(n.toJSON());
      }
      return t;
    }
    fromJSON(t) {
      super.fromJSON(t), (this.uuid = t.uuid), (this.holes = []);
      for (let e = 0, n = t.holes.length; e < n; e++) {
        const n = t.holes[e];
        this.holes.push(new Ll().fromJSON(n));
      }
      return this;
    }
  }
  class Rl extends Tn {
    constructor(t, e = 1) {
      super(),
        (this.type = "Light"),
        (this.color = new $n(t)),
        (this.intensity = e);
    }
    dispose() {}
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        (this.intensity = t.intensity),
        this
      );
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        (e.object.color = this.color.getHex()),
        (e.object.intensity = this.intensity),
        void 0 !== this.groundColor &&
          (e.object.groundColor = this.groundColor.getHex()),
        void 0 !== this.distance && (e.object.distance = this.distance),
        void 0 !== this.angle && (e.object.angle = this.angle),
        void 0 !== this.decay && (e.object.decay = this.decay),
        void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
        void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
        e
      );
    }
  }
  Rl.prototype.isLight = !0;
  (class extends Rl {
    constructor(t, e, n) {
      super(t, n),
        (this.type = "HemisphereLight"),
        this.position.copy(Tn.DefaultUp),
        this.updateMatrix(),
        (this.groundColor = new $n(e));
    }
    copy(t) {
      return (
        Rl.prototype.copy.call(this, t),
        this.groundColor.copy(t.groundColor),
        this
      );
    }
  }).prototype.isHemisphereLight = !0;
  const Pl = new tn(),
    Cl = new Me(),
    Il = new Me();
  class Dl {
    constructor(t) {
      (this.camera = t),
        (this.bias = 0),
        (this.normalBias = 0),
        (this.radius = 1),
        (this.mapSize = new pe(512, 512)),
        (this.map = null),
        (this.mapPass = null),
        (this.matrix = new tn()),
        (this.autoUpdate = !0),
        (this.needsUpdate = !1),
        (this._frustum = new Xi()),
        (this._frameExtents = new pe(1, 1)),
        (this._viewportCount = 1),
        (this._viewports = [new _e(0, 0, 1, 1)]);
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(t) {
      const e = this.camera,
        n = this.matrix;
      Cl.setFromMatrixPosition(t.matrixWorld),
        e.position.copy(Cl),
        Il.setFromMatrixPosition(t.target.matrixWorld),
        e.lookAt(Il),
        e.updateMatrixWorld(),
        Pl.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(Pl),
        n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
        n.multiply(e.projectionMatrix),
        n.multiply(e.matrixWorldInverse);
    }
    getViewport(t) {
      return this._viewports[t];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(t) {
      return (
        (this.camera = t.camera.clone()),
        (this.bias = t.bias),
        (this.radius = t.radius),
        this.mapSize.copy(t.mapSize),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const t = {};
      return (
        0 !== this.bias && (t.bias = this.bias),
        0 !== this.normalBias && (t.normalBias = this.normalBias),
        1 !== this.radius && (t.radius = this.radius),
        (512 === this.mapSize.x && 512 === this.mapSize.y) ||
          (t.mapSize = this.mapSize.toArray()),
        (t.camera = this.camera.toJSON(!1).object),
        delete t.camera.matrix,
        t
      );
    }
  }
  class Nl extends Dl {
    constructor() {
      super(new Fi(50, 1, 0.5, 500)), (this.focus = 1);
    }
    updateMatrices(t) {
      const e = this.camera,
        n = 2 * re * t.angle * this.focus,
        i = this.mapSize.width / this.mapSize.height,
        r = t.distance || e.far;
      (n === e.fov && i === e.aspect && r === e.far) ||
        ((e.fov = n), (e.aspect = i), (e.far = r), e.updateProjectionMatrix()),
        super.updateMatrices(t);
    }
    copy(t) {
      return super.copy(t), (this.focus = t.focus), this;
    }
  }
  Nl.prototype.isSpotLightShadow = !0;
  (class extends Rl {
    constructor(t, e, n = 0, i = Math.PI / 3, r = 0, s = 1) {
      super(t, e),
        (this.type = "SpotLight"),
        this.position.copy(Tn.DefaultUp),
        this.updateMatrix(),
        (this.target = new Tn()),
        (this.distance = n),
        (this.angle = i),
        (this.penumbra = r),
        (this.decay = s),
        (this.shadow = new Nl());
    }
    get power() {
      return this.intensity * Math.PI;
    }
    set power(t) {
      this.intensity = t / Math.PI;
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(t) {
      return (
        super.copy(t),
        (this.distance = t.distance),
        (this.angle = t.angle),
        (this.penumbra = t.penumbra),
        (this.decay = t.decay),
        (this.target = t.target.clone()),
        (this.shadow = t.shadow.clone()),
        this
      );
    }
  }).prototype.isSpotLight = !0;
  const zl = new tn(),
    Ol = new Me(),
    Bl = new Me();
  class Fl extends Dl {
    constructor() {
      super(new Fi(90, 1, 0.5, 500)),
        (this._frameExtents = new pe(4, 2)),
        (this._viewportCount = 6),
        (this._viewports = [
          new _e(2, 1, 1, 1),
          new _e(0, 1, 1, 1),
          new _e(3, 1, 1, 1),
          new _e(1, 1, 1, 1),
          new _e(3, 0, 1, 1),
          new _e(1, 0, 1, 1),
        ]),
        (this._cubeDirections = [
          new Me(1, 0, 0),
          new Me(-1, 0, 0),
          new Me(0, 0, 1),
          new Me(0, 0, -1),
          new Me(0, 1, 0),
          new Me(0, -1, 0),
        ]),
        (this._cubeUps = [
          new Me(0, 1, 0),
          new Me(0, 1, 0),
          new Me(0, 1, 0),
          new Me(0, 1, 0),
          new Me(0, 0, 1),
          new Me(0, 0, -1),
        ]);
    }
    updateMatrices(t, e = 0) {
      const n = this.camera,
        i = this.matrix,
        r = t.distance || n.far;
      r !== n.far && ((n.far = r), n.updateProjectionMatrix()),
        Ol.setFromMatrixPosition(t.matrixWorld),
        n.position.copy(Ol),
        Bl.copy(n.position),
        Bl.add(this._cubeDirections[e]),
        n.up.copy(this._cubeUps[e]),
        n.lookAt(Bl),
        n.updateMatrixWorld(),
        i.makeTranslation(-Ol.x, -Ol.y, -Ol.z),
        zl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(zl);
    }
  }
  Fl.prototype.isPointLightShadow = !0;
  (class extends Rl {
    constructor(t, e, n = 0, i = 1) {
      super(t, e),
        (this.type = "PointLight"),
        (this.distance = n),
        (this.decay = i),
        (this.shadow = new Fl());
    }
    get power() {
      return 4 * this.intensity * Math.PI;
    }
    set power(t) {
      this.intensity = t / (4 * Math.PI);
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(t) {
      return (
        super.copy(t),
        (this.distance = t.distance),
        (this.decay = t.decay),
        (this.shadow = t.shadow.clone()),
        this
      );
    }
  }).prototype.isPointLight = !0;
  class Hl extends Bi {
    constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, s = 2e3) {
      super(),
        (this.type = "OrthographicCamera"),
        (this.zoom = 1),
        (this.view = null),
        (this.left = t),
        (this.right = e),
        (this.top = n),
        (this.bottom = i),
        (this.near = r),
        (this.far = s),
        this.updateProjectionMatrix();
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        (this.left = t.left),
        (this.right = t.right),
        (this.top = t.top),
        (this.bottom = t.bottom),
        (this.near = t.near),
        (this.far = t.far),
        (this.zoom = t.zoom),
        (this.view = null === t.view ? null : Object.assign({}, t.view)),
        this
      );
    }
    setViewOffset(t, e, n, i, r, s) {
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
        (this.view.enabled = !0),
        (this.view.fullWidth = t),
        (this.view.fullHeight = e),
        (this.view.offsetX = n),
        (this.view.offsetY = i),
        (this.view.width = r),
        (this.view.height = s),
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t = (this.right - this.left) / (2 * this.zoom),
        e = (this.top - this.bottom) / (2 * this.zoom),
        n = (this.right + this.left) / 2,
        i = (this.top + this.bottom) / 2;
      let r = n - t,
        s = n + t,
        a = i + e,
        o = i - e;
      if (null !== this.view && this.view.enabled) {
        const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
          e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        (r += t * this.view.offsetX),
          (s = r + t * this.view.width),
          (a -= e * this.view.offsetY),
          (o = a - e * this.view.height);
      }
      this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        (e.object.zoom = this.zoom),
        (e.object.left = this.left),
        (e.object.right = this.right),
        (e.object.top = this.top),
        (e.object.bottom = this.bottom),
        (e.object.near = this.near),
        (e.object.far = this.far),
        null !== this.view && (e.object.view = Object.assign({}, this.view)),
        e
      );
    }
  }
  Hl.prototype.isOrthographicCamera = !0;
  class Ul extends Dl {
    constructor() {
      super(new Hl(-5, 5, 5, -5, 0.5, 500));
    }
  }
  Ul.prototype.isDirectionalLightShadow = !0;
  (class extends Rl {
    constructor(t, e) {
      super(t, e),
        (this.type = "DirectionalLight"),
        this.position.copy(Tn.DefaultUp),
        this.updateMatrix(),
        (this.target = new Tn()),
        (this.shadow = new Ul());
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(t) {
      return (
        super.copy(t),
        (this.target = t.target.clone()),
        (this.shadow = t.shadow.clone()),
        this
      );
    }
  }).prototype.isDirectionalLight = !0;
  (class extends Rl {
    constructor(t, e) {
      super(t, e), (this.type = "AmbientLight");
    }
  }).prototype.isAmbientLight = !0;
  (class extends Rl {
    constructor(t, e, n = 10, i = 10) {
      super(t, e),
        (this.type = "RectAreaLight"),
        (this.width = n),
        (this.height = i);
    }
    copy(t) {
      return (
        super.copy(t), (this.width = t.width), (this.height = t.height), this
      );
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (e.object.width = this.width), (e.object.height = this.height), e;
    }
  }).prototype.isRectAreaLight = !0;
  class Gl {
    constructor() {
      this.coefficients = [];
      for (let t = 0; t < 9; t++) this.coefficients.push(new Me());
    }
    set(t) {
      for (let e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
      return this;
    }
    zero() {
      for (let t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
      return this;
    }
    getAt(t, e) {
      const n = t.x,
        i = t.y,
        r = t.z,
        s = this.coefficients;
      return (
        e.copy(s[0]).multiplyScalar(0.282095),
        e.addScaledVector(s[1], 0.488603 * i),
        e.addScaledVector(s[2], 0.488603 * r),
        e.addScaledVector(s[3], 0.488603 * n),
        e.addScaledVector(s[4], n * i * 1.092548),
        e.addScaledVector(s[5], i * r * 1.092548),
        e.addScaledVector(s[6], 0.315392 * (3 * r * r - 1)),
        e.addScaledVector(s[7], n * r * 1.092548),
        e.addScaledVector(s[8], 0.546274 * (n * n - i * i)),
        e
      );
    }
    getIrradianceAt(t, e) {
      const n = t.x,
        i = t.y,
        r = t.z,
        s = this.coefficients;
      return (
        e.copy(s[0]).multiplyScalar(0.886227),
        e.addScaledVector(s[1], 1.023328 * i),
        e.addScaledVector(s[2], 1.023328 * r),
        e.addScaledVector(s[3], 1.023328 * n),
        e.addScaledVector(s[4], 0.858086 * n * i),
        e.addScaledVector(s[5], 0.858086 * i * r),
        e.addScaledVector(s[6], 0.743125 * r * r - 0.247708),
        e.addScaledVector(s[7], 0.858086 * n * r),
        e.addScaledVector(s[8], 0.429043 * (n * n - i * i)),
        e
      );
    }
    add(t) {
      for (let e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
      return this;
    }
    addScaledSH(t, e) {
      for (let n = 0; n < 9; n++)
        this.coefficients[n].addScaledVector(t.coefficients[n], e);
      return this;
    }
    scale(t) {
      for (let e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
      return this;
    }
    lerp(t, e) {
      for (let n = 0; n < 9; n++)
        this.coefficients[n].lerp(t.coefficients[n], e);
      return this;
    }
    equals(t) {
      for (let e = 0; e < 9; e++)
        if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
      return !0;
    }
    copy(t) {
      return this.set(t.coefficients);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    fromArray(t, e = 0) {
      const n = this.coefficients;
      for (let i = 0; i < 9; i++) n[i].fromArray(t, e + 3 * i);
      return this;
    }
    toArray(t = [], e = 0) {
      const n = this.coefficients;
      for (let i = 0; i < 9; i++) n[i].toArray(t, e + 3 * i);
      return t;
    }
    static getBasisAt(t, e) {
      const n = t.x,
        i = t.y,
        r = t.z;
      (e[0] = 0.282095),
        (e[1] = 0.488603 * i),
        (e[2] = 0.488603 * r),
        (e[3] = 0.488603 * n),
        (e[4] = 1.092548 * n * i),
        (e[5] = 1.092548 * i * r),
        (e[6] = 0.315392 * (3 * r * r - 1)),
        (e[7] = 1.092548 * n * r),
        (e[8] = 0.546274 * (n * n - i * i));
    }
  }
  Gl.prototype.isSphericalHarmonics3 = !0;
  class Vl extends Rl {
    constructor(t = new Gl(), e = 1) {
      super(void 0, e), (this.sh = t);
    }
    copy(t) {
      return super.copy(t), this.sh.copy(t.sh), this;
    }
    fromJSON(t) {
      return (this.intensity = t.intensity), this.sh.fromArray(t.sh), this;
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (e.object.sh = this.sh.toArray()), e;
    }
  }
  Vl.prototype.isLightProbe = !0;
  class kl {
    static decodeText(t) {
      if ("undefined" != typeof TextDecoder) return new TextDecoder().decode(t);
      let e = "";
      for (let n = 0, i = t.length; n < i; n++) e += String.fromCharCode(t[n]);
      try {
        return decodeURIComponent(escape(e));
      } catch (t) {
        return e;
      }
    }
    static extractUrlBase(t) {
      const e = t.lastIndexOf("/");
      return -1 === e ? "./" : t.substr(0, e + 1);
    }
  }
  (class extends di {
    constructor() {
      super(),
        (this.type = "InstancedBufferGeometry"),
        (this.instanceCount = 1 / 0);
    }
    copy(t) {
      return super.copy(t), (this.instanceCount = t.instanceCount), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const t = super.toJSON(this);
      return (
        (t.instanceCount = this.instanceCount),
        (t.isInstancedBufferGeometry = !0),
        t
      );
    }
  }).prototype.isInstancedBufferGeometry = !0;
  (class extends ti {
    constructor(t, e, n, i) {
      "number" == typeof n &&
        ((i = n),
        (n = !1),
        console.error(
          "THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."
        )),
        super(t, e, n),
        (this.meshPerAttribute = i || 1);
    }
    copy(t) {
      return super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this;
    }
    toJSON() {
      const t = super.toJSON();
      return (
        (t.meshPerAttribute = this.meshPerAttribute),
        (t.isInstancedBufferAttribute = !0),
        t
      );
    }
  }).prototype.isInstancedBufferAttribute = !0;
  let Wl;
  (class extends el {
    constructor(t) {
      super(t),
        "undefined" == typeof createImageBitmap &&
          console.warn(
            "THREE.ImageBitmapLoader: createImageBitmap() not supported."
          ),
        "undefined" == typeof fetch &&
          console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
        (this.options = { premultiplyAlpha: "none" });
    }
    setOptions(t) {
      return (this.options = t), this;
    }
    load(t, e, n, i) {
      void 0 === t && (t = ""),
        void 0 !== this.path && (t = this.path + t),
        (t = this.manager.resolveURL(t));
      const r = this,
        s = Ko.get(t);
      if (void 0 !== s)
        return (
          r.manager.itemStart(t),
          setTimeout(function () {
            e && e(s), r.manager.itemEnd(t);
          }, 0),
          s
        );
      const a = {};
      (a.credentials =
        "anonymous" === this.crossOrigin ? "same-origin" : "include"),
        (a.headers = this.requestHeader),
        fetch(t, a)
          .then(function (t) {
            return t.blob();
          })
          .then(function (t) {
            return createImageBitmap(
              t,
              Object.assign(r.options, { colorSpaceConversion: "none" })
            );
          })
          .then(function (n) {
            Ko.add(t, n), e && e(n), r.manager.itemEnd(t);
          })
          .catch(function (e) {
            i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
          }),
        r.manager.itemStart(t);
    }
  }).prototype.isImageBitmapLoader = !0;
  const jl = function () {
    return (
      void 0 === Wl &&
        (Wl = new (window.AudioContext || window.webkitAudioContext)()),
      Wl
    );
  };
  class Xl extends el {
    constructor(t) {
      super(t);
    }
    load(t, e, n, i) {
      const r = this,
        s = new il(this.manager);
      s.setResponseType("arraybuffer"),
        s.setPath(this.path),
        s.setRequestHeader(this.requestHeader),
        s.setWithCredentials(this.withCredentials),
        s.load(
          t,
          function (n) {
            try {
              const t = n.slice(0);
              jl().decodeAudioData(t, function (t) {
                e(t);
              });
            } catch (e) {
              i ? i(e) : console.error(e), r.manager.itemError(t);
            }
          },
          n,
          i
        );
    }
  }
  (class extends Vl {
    constructor(t, e, n = 1) {
      super(void 0, n);
      const i = new $n().set(t),
        r = new $n().set(e),
        s = new Me(i.r, i.g, i.b),
        a = new Me(r.r, r.g, r.b),
        o = Math.sqrt(Math.PI),
        l = o * Math.sqrt(0.75);
      this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o),
        this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l);
    }
  }).prototype.isHemisphereLightProbe = !0;
  (class extends Vl {
    constructor(t, e = 1) {
      super(void 0, e);
      const n = new $n().set(t);
      this.sh.coefficients[0]
        .set(n.r, n.g, n.b)
        .multiplyScalar(2 * Math.sqrt(Math.PI));
    }
  }).prototype.isAmbientLightProbe = !0;
  class ql {
    constructor(t, e, n) {
      let i, r, s;
      switch (((this.binding = t), (this.valueSize = n), e)) {
        case "quaternion":
          (i = this._slerp),
            (r = this._slerpAdditive),
            (s = this._setAdditiveIdentityQuaternion),
            (this.buffer = new Float64Array(6 * n)),
            (this._workIndex = 5);
          break;
        case "string":
        case "bool":
          (i = this._select),
            (r = this._select),
            (s = this._setAdditiveIdentityOther),
            (this.buffer = new Array(5 * n));
          break;
        default:
          (i = this._lerp),
            (r = this._lerpAdditive),
            (s = this._setAdditiveIdentityNumeric),
            (this.buffer = new Float64Array(5 * n));
      }
      (this._mixBufferRegion = i),
        (this._mixBufferRegionAdditive = r),
        (this._setIdentity = s),
        (this._origIndex = 3),
        (this._addIndex = 4),
        (this.cumulativeWeight = 0),
        (this.cumulativeWeightAdditive = 0),
        (this.useCount = 0),
        (this.referenceCount = 0);
    }
    accumulate(t, e) {
      const n = this.buffer,
        i = this.valueSize,
        r = t * i + i;
      let s = this.cumulativeWeight;
      if (0 === s) {
        for (let t = 0; t !== i; ++t) n[r + t] = n[t];
        s = e;
      } else {
        s += e;
        const t = e / s;
        this._mixBufferRegion(n, r, 0, t, i);
      }
      this.cumulativeWeight = s;
    }
    accumulateAdditive(t) {
      const e = this.buffer,
        n = this.valueSize,
        i = n * this._addIndex;
      0 === this.cumulativeWeightAdditive && this._setIdentity(),
        this._mixBufferRegionAdditive(e, i, 0, t, n),
        (this.cumulativeWeightAdditive += t);
    }
    apply(t) {
      const e = this.valueSize,
        n = this.buffer,
        i = t * e + e,
        r = this.cumulativeWeight,
        s = this.cumulativeWeightAdditive,
        a = this.binding;
      if (
        ((this.cumulativeWeight = 0),
        (this.cumulativeWeightAdditive = 0),
        r < 1)
      ) {
        const t = e * this._origIndex;
        this._mixBufferRegion(n, i, t, 1 - r, e);
      }
      s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
      for (let t = e, r = e + e; t !== r; ++t)
        if (n[t] !== n[t + e]) {
          a.setValue(n, i);
          break;
        }
    }
    saveOriginalState() {
      const t = this.binding,
        e = this.buffer,
        n = this.valueSize,
        i = n * this._origIndex;
      t.getValue(e, i);
      for (let t = n, r = i; t !== r; ++t) e[t] = e[i + (t % n)];
      this._setIdentity(),
        (this.cumulativeWeight = 0),
        (this.cumulativeWeightAdditive = 0);
    }
    restoreOriginalState() {
      const t = 3 * this.valueSize;
      this.binding.setValue(this.buffer, t);
    }
    _setAdditiveIdentityNumeric() {
      const t = this._addIndex * this.valueSize,
        e = t + this.valueSize;
      for (let n = t; n < e; n++) this.buffer[n] = 0;
    }
    _setAdditiveIdentityQuaternion() {
      this._setAdditiveIdentityNumeric(),
        (this.buffer[this._addIndex * this.valueSize + 3] = 1);
    }
    _setAdditiveIdentityOther() {
      const t = this._origIndex * this.valueSize,
        e = this._addIndex * this.valueSize;
      for (let n = 0; n < this.valueSize; n++)
        this.buffer[e + n] = this.buffer[t + n];
    }
    _select(t, e, n, i, r) {
      if (i >= 0.5) for (let i = 0; i !== r; ++i) t[e + i] = t[n + i];
    }
    _slerp(t, e, n, i) {
      be.slerpFlat(t, e, t, e, t, n, i);
    }
    _slerpAdditive(t, e, n, i, r) {
      const s = this._workIndex * r;
      be.multiplyQuaternionsFlat(t, s, t, e, t, n),
        be.slerpFlat(t, e, t, e, t, s, i);
    }
    _lerp(t, e, n, i, r) {
      const s = 1 - i;
      for (let a = 0; a !== r; ++a) {
        const r = e + a;
        t[r] = t[r] * s + t[n + a] * i;
      }
    }
    _lerpAdditive(t, e, n, i, r) {
      for (let s = 0; s !== r; ++s) {
        const r = e + s;
        t[r] = t[r] + t[n + s] * i;
      }
    }
  }
  const Yl = "\\[\\]\\.:\\/",
    Zl = new RegExp("[\\[\\]\\.:\\/]", "g"),
    $l = "[^\\[\\]\\.:\\/]",
    Jl = "[^" + Yl.replace("\\.", "") + "]",
    Ql = /((?:WC+[\/:])*)/.source.replace("WC", $l),
    Kl = /(WCOD+)?/.source.replace("WCOD", Jl),
    tc = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", $l),
    ec = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", $l),
    nc = new RegExp("^" + Ql + Kl + tc + ec + "$"),
    ic = ["material", "materials", "bones"];
  class rc {
    constructor(t, e, n) {
      (this.path = e),
        (this.parsedPath = n || rc.parseTrackName(e)),
        (this.node = rc.findNode(t, this.parsedPath.nodeName) || t),
        (this.rootNode = t),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound);
    }
    static create(t, e, n) {
      return t && t.isAnimationObjectGroup
        ? new rc.Composite(t, e, n)
        : new rc(t, e, n);
    }
    static sanitizeNodeName(t) {
      return t.replace(/\s/g, "_").replace(Zl, "");
    }
    static parseTrackName(t) {
      const e = nc.exec(t);
      if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
      const n = {
          nodeName: e[2],
          objectName: e[3],
          objectIndex: e[4],
          propertyName: e[5],
          propertyIndex: e[6],
        },
        i = n.nodeName && n.nodeName.lastIndexOf(".");
      if (void 0 !== i && -1 !== i) {
        const t = n.nodeName.substring(i + 1);
        -1 !== ic.indexOf(t) &&
          ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = t));
      }
      if (null === n.propertyName || 0 === n.propertyName.length)
        throw new Error(
          "PropertyBinding: can not parse propertyName from trackName: " + t
        );
      return n;
    }
    static findNode(t, e) {
      if (
        !e ||
        "" === e ||
        "." === e ||
        -1 === e ||
        e === t.name ||
        e === t.uuid
      )
        return t;
      if (t.skeleton) {
        const n = t.skeleton.getBoneByName(e);
        if (void 0 !== n) return n;
      }
      if (t.children) {
        const n = function (t) {
            for (let i = 0; i < t.length; i++) {
              const r = t[i];
              if (r.name === e || r.uuid === e) return r;
              const s = n(r.children);
              if (s) return s;
            }
            return null;
          },
          i = n(t.children);
        if (i) return i;
      }
      return null;
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(t, e) {
      t[e] = this.node[this.propertyName];
    }
    _getValue_array(t, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i];
    }
    _getValue_arrayElement(t, e) {
      t[e] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(t, e) {
      this.resolvedProperty.toArray(t, e);
    }
    _setValue_direct(t, e) {
      this.targetObject[this.propertyName] = t[e];
    }
    _setValue_direct_setNeedsUpdate(t, e) {
      (this.targetObject[this.propertyName] = t[e]),
        (this.targetObject.needsUpdate = !0);
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
      (this.targetObject[this.propertyName] = t[e]),
        (this.targetObject.matrixWorldNeedsUpdate = !0);
    }
    _setValue_array(t, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
    }
    _setValue_array_setNeedsUpdate(t, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
      this.targetObject.needsUpdate = !0;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_arrayElement(t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e];
    }
    _setValue_arrayElement_setNeedsUpdate(t, e) {
      (this.resolvedProperty[this.propertyIndex] = t[e]),
        (this.targetObject.needsUpdate = !0);
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
      (this.resolvedProperty[this.propertyIndex] = t[e]),
        (this.targetObject.matrixWorldNeedsUpdate = !0);
    }
    _setValue_fromArray(t, e) {
      this.resolvedProperty.fromArray(t, e);
    }
    _setValue_fromArray_setNeedsUpdate(t, e) {
      this.resolvedProperty.fromArray(t, e),
        (this.targetObject.needsUpdate = !0);
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
      this.resolvedProperty.fromArray(t, e),
        (this.targetObject.matrixWorldNeedsUpdate = !0);
    }
    _getValue_unbound(t, e) {
      this.bind(), this.getValue(t, e);
    }
    _setValue_unbound(t, e) {
      this.bind(), this.setValue(t, e);
    }
    bind() {
      let t = this.node;
      const e = this.parsedPath,
        n = e.objectName,
        i = e.propertyName;
      let r = e.propertyIndex;
      if (
        (t ||
          ((t = rc.findNode(this.rootNode, e.nodeName) || this.rootNode),
          (this.node = t)),
        (this.getValue = this._getValue_unavailable),
        (this.setValue = this._setValue_unavailable),
        !t)
      )
        return void console.error(
          "THREE.PropertyBinding: Trying to update node for track: " +
            this.path +
            " but it wasn't found."
        );
      if (n) {
        let i = e.objectIndex;
        switch (n) {
          case "materials":
            if (!t.material)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
                this
              );
            if (!t.material.materials)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
                this
              );
            t = t.material.materials;
            break;
          case "bones":
            if (!t.skeleton)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
                this
              );
            t = t.skeleton.bones;
            for (let e = 0; e < t.length; e++)
              if (t[e].name === i) {
                i = e;
                break;
              }
            break;
          default:
            if (void 0 === t[n])
              return void console.error(
                "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
                this
              );
            t = t[n];
        }
        if (void 0 !== i) {
          if (void 0 === t[i])
            return void console.error(
              "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
              this,
              t
            );
          t = t[i];
        }
      }
      const s = t[i];
      if (void 0 === s) {
        const n = e.nodeName;
        return void console.error(
          "THREE.PropertyBinding: Trying to update property for track: " +
            n +
            "." +
            i +
            " but it wasn't found.",
          t
        );
      }
      let a = this.Versioning.None;
      (this.targetObject = t),
        void 0 !== t.needsUpdate
          ? (a = this.Versioning.NeedsUpdate)
          : void 0 !== t.matrixWorldNeedsUpdate &&
            (a = this.Versioning.MatrixWorldNeedsUpdate);
      let o = this.BindingType.Direct;
      if (void 0 !== r) {
        if ("morphTargetInfluences" === i) {
          if (!t.geometry)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
              this
            );
          if (!t.geometry.isBufferGeometry)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",
              this
            );
          if (!t.geometry.morphAttributes)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
              this
            );
          void 0 !== t.morphTargetDictionary[r] &&
            (r = t.morphTargetDictionary[r]);
        }
        (o = this.BindingType.ArrayElement),
          (this.resolvedProperty = s),
          (this.propertyIndex = r);
      } else
        void 0 !== s.fromArray && void 0 !== s.toArray
          ? ((o = this.BindingType.HasFromToArray), (this.resolvedProperty = s))
          : Array.isArray(s)
          ? ((o = this.BindingType.EntireArray), (this.resolvedProperty = s))
          : (this.propertyName = i);
      (this.getValue = this.GetterByBindingType[o]),
        (this.setValue = this.SetterByBindingTypeAndVersioning[o][a]);
    }
    unbind() {
      (this.node = null),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound);
    }
  }
  (rc.Composite = class {
    constructor(t, e, n) {
      const i = n || rc.parseTrackName(e);
      (this._targetGroup = t), (this._bindings = t.subscribe_(e, i));
    }
    getValue(t, e) {
      this.bind();
      const n = this._targetGroup.nCachedObjects_,
        i = this._bindings[n];
      void 0 !== i && i.getValue(t, e);
    }
    setValue(t, e) {
      const n = this._bindings;
      for (
        let i = this._targetGroup.nCachedObjects_, r = n.length;
        i !== r;
        ++i
      )
        n[i].setValue(t, e);
    }
    bind() {
      const t = this._bindings;
      for (
        let e = this._targetGroup.nCachedObjects_, n = t.length;
        e !== n;
        ++e
      )
        t[e].bind();
    }
    unbind() {
      const t = this._bindings;
      for (
        let e = this._targetGroup.nCachedObjects_, n = t.length;
        e !== n;
        ++e
      )
        t[e].unbind();
    }
  }),
    (rc.prototype.BindingType = {
      Direct: 0,
      EntireArray: 1,
      ArrayElement: 2,
      HasFromToArray: 3,
    }),
    (rc.prototype.Versioning = {
      None: 0,
      NeedsUpdate: 1,
      MatrixWorldNeedsUpdate: 2,
    }),
    (rc.prototype.GetterByBindingType = [
      rc.prototype._getValue_direct,
      rc.prototype._getValue_array,
      rc.prototype._getValue_arrayElement,
      rc.prototype._getValue_toArray,
    ]),
    (rc.prototype.SetterByBindingTypeAndVersioning = [
      [
        rc.prototype._setValue_direct,
        rc.prototype._setValue_direct_setNeedsUpdate,
        rc.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
      ],
      [
        rc.prototype._setValue_array,
        rc.prototype._setValue_array_setNeedsUpdate,
        rc.prototype._setValue_array_setMatrixWorldNeedsUpdate,
      ],
      [
        rc.prototype._setValue_arrayElement,
        rc.prototype._setValue_arrayElement_setNeedsUpdate,
        rc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
      ],
      [
        rc.prototype._setValue_fromArray,
        rc.prototype._setValue_fromArray_setNeedsUpdate,
        rc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
      ],
    ]);
  class sc {
    constructor(t, e, n = null, i = e.blendMode) {
      (this._mixer = t),
        (this._clip = e),
        (this._localRoot = n),
        (this.blendMode = i);
      const r = e.tracks,
        s = r.length,
        a = new Array(s),
        o = { endingStart: jt, endingEnd: jt };
      for (let t = 0; t !== s; ++t) {
        const e = r[t].createInterpolant(null);
        (a[t] = e), (e.settings = o);
      }
      (this._interpolantSettings = o),
        (this._interpolants = a),
        (this._propertyBindings = new Array(s)),
        (this._cacheIndex = null),
        (this._byClipCacheIndex = null),
        (this._timeScaleInterpolant = null),
        (this._weightInterpolant = null),
        (this.loop = 2201),
        (this._loopCount = -1),
        (this._startTime = null),
        (this.time = 0),
        (this.timeScale = 1),
        (this._effectiveTimeScale = 1),
        (this.weight = 1),
        (this._effectiveWeight = 1),
        (this.repetitions = 1 / 0),
        (this.paused = !1),
        (this.enabled = !0),
        (this.clampWhenFinished = !1),
        (this.zeroSlopeAtStart = !0),
        (this.zeroSlopeAtEnd = !0);
    }
    play() {
      return this._mixer._activateAction(this), this;
    }
    stop() {
      return this._mixer._deactivateAction(this), this.reset();
    }
    reset() {
      return (
        (this.paused = !1),
        (this.enabled = !0),
        (this.time = 0),
        (this._loopCount = -1),
        (this._startTime = null),
        this.stopFading().stopWarping()
      );
    }
    isRunning() {
      return (
        this.enabled &&
        !this.paused &&
        0 !== this.timeScale &&
        null === this._startTime &&
        this._mixer._isActiveAction(this)
      );
    }
    isScheduled() {
      return this._mixer._isActiveAction(this);
    }
    startAt(t) {
      return (this._startTime = t), this;
    }
    setLoop(t, e) {
      return (this.loop = t), (this.repetitions = e), this;
    }
    setEffectiveWeight(t) {
      return (
        (this.weight = t),
        (this._effectiveWeight = this.enabled ? t : 0),
        this.stopFading()
      );
    }
    getEffectiveWeight() {
      return this._effectiveWeight;
    }
    fadeIn(t) {
      return this._scheduleFading(t, 0, 1);
    }
    fadeOut(t) {
      return this._scheduleFading(t, 1, 0);
    }
    crossFadeFrom(t, e, n) {
      if ((t.fadeOut(e), this.fadeIn(e), n)) {
        const n = this._clip.duration,
          i = t._clip.duration,
          r = i / n,
          s = n / i;
        t.warp(1, r, e), this.warp(s, 1, e);
      }
      return this;
    }
    crossFadeTo(t, e, n) {
      return t.crossFadeFrom(this, e, n);
    }
    stopFading() {
      const t = this._weightInterpolant;
      return (
        null !== t &&
          ((this._weightInterpolant = null),
          this._mixer._takeBackControlInterpolant(t)),
        this
      );
    }
    setEffectiveTimeScale(t) {
      return (
        (this.timeScale = t),
        (this._effectiveTimeScale = this.paused ? 0 : t),
        this.stopWarping()
      );
    }
    getEffectiveTimeScale() {
      return this._effectiveTimeScale;
    }
    setDuration(t) {
      return (this.timeScale = this._clip.duration / t), this.stopWarping();
    }
    syncWith(t) {
      return (
        (this.time = t.time), (this.timeScale = t.timeScale), this.stopWarping()
      );
    }
    halt(t) {
      return this.warp(this._effectiveTimeScale, 0, t);
    }
    warp(t, e, n) {
      const i = this._mixer,
        r = i.time,
        s = this.timeScale;
      let a = this._timeScaleInterpolant;
      null === a &&
        ((a = i._lendControlInterpolant()), (this._timeScaleInterpolant = a));
      const o = a.parameterPositions,
        l = a.sampleValues;
      return (o[0] = r), (o[1] = r + n), (l[0] = t / s), (l[1] = e / s), this;
    }
    stopWarping() {
      const t = this._timeScaleInterpolant;
      return (
        null !== t &&
          ((this._timeScaleInterpolant = null),
          this._mixer._takeBackControlInterpolant(t)),
        this
      );
    }
    getMixer() {
      return this._mixer;
    }
    getClip() {
      return this._clip;
    }
    getRoot() {
      return this._localRoot || this._mixer._root;
    }
    _update(t, e, n, i) {
      if (!this.enabled) return void this._updateWeight(t);
      const r = this._startTime;
      if (null !== r) {
        const i = (t - r) * n;
        if (i < 0 || 0 === n) return;
        (this._startTime = null), (e = n * i);
      }
      e *= this._updateTimeScale(t);
      const s = this._updateTime(e),
        a = this._updateWeight(t);
      if (a > 0) {
        const t = this._interpolants,
          e = this._propertyBindings;
        if (2501 === this.blendMode)
          for (let n = 0, i = t.length; n !== i; ++n)
            t[n].evaluate(s), e[n].accumulateAdditive(a);
        else
          for (let n = 0, r = t.length; n !== r; ++n)
            t[n].evaluate(s), e[n].accumulate(i, a);
      }
    }
    _updateWeight(t) {
      let e = 0;
      if (this.enabled) {
        e = this.weight;
        const n = this._weightInterpolant;
        if (null !== n) {
          const i = n.evaluate(t)[0];
          (e *= i),
            t > n.parameterPositions[1] &&
              (this.stopFading(), 0 === i && (this.enabled = !1));
        }
      }
      return (this._effectiveWeight = e), e;
    }
    _updateTimeScale(t) {
      let e = 0;
      if (!this.paused) {
        e = this.timeScale;
        const n = this._timeScaleInterpolant;
        if (null !== n) {
          (e *= n.evaluate(t)[0]),
            t > n.parameterPositions[1] &&
              (this.stopWarping(),
              0 === e ? (this.paused = !0) : (this.timeScale = e));
        }
      }
      return (this._effectiveTimeScale = e), e;
    }
    _updateTime(t) {
      const e = this._clip.duration,
        n = this.loop;
      let i = this.time + t,
        r = this._loopCount;
      const s = 2202 === n;
      if (0 === t) return -1 === r ? i : s && 1 == (1 & r) ? e - i : i;
      if (2200 === n) {
        -1 === r && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
        t: {
          if (i >= e) i = e;
          else {
            if (!(i < 0)) {
              this.time = i;
              break t;
            }
            i = 0;
          }
          this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
            (this.time = i),
            this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: t < 0 ? -1 : 1,
            });
        }
      } else {
        if (
          (-1 === r &&
            (t >= 0
              ? ((r = 0), this._setEndings(!0, 0 === this.repetitions, s))
              : this._setEndings(0 === this.repetitions, !0, s)),
          i >= e || i < 0)
        ) {
          const n = Math.floor(i / e);
          (i -= e * n), (r += Math.abs(n));
          const a = this.repetitions - r;
          if (a <= 0)
            this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
              (i = t > 0 ? e : 0),
              (this.time = i),
              this._mixer.dispatchEvent({
                type: "finished",
                action: this,
                direction: t > 0 ? 1 : -1,
              });
          else {
            if (1 === a) {
              const e = t < 0;
              this._setEndings(e, !e, s);
            } else this._setEndings(!1, !1, s);
            (this._loopCount = r),
              (this.time = i),
              this._mixer.dispatchEvent({
                type: "loop",
                action: this,
                loopDelta: n,
              });
          }
        } else this.time = i;
        if (s && 1 == (1 & r)) return e - i;
      }
      return i;
    }
    _setEndings(t, e, n) {
      const i = this._interpolantSettings;
      n
        ? ((i.endingStart = Xt), (i.endingEnd = Xt))
        : ((i.endingStart = t ? (this.zeroSlopeAtStart ? Xt : jt) : qt),
          (i.endingEnd = e ? (this.zeroSlopeAtEnd ? Xt : jt) : qt));
    }
    _scheduleFading(t, e, n) {
      const i = this._mixer,
        r = i.time;
      let s = this._weightInterpolant;
      null === s &&
        ((s = i._lendControlInterpolant()), (this._weightInterpolant = s));
      const a = s.parameterPositions,
        o = s.sampleValues;
      return (a[0] = r), (o[0] = e), (a[1] = r + t), (o[1] = n), this;
    }
  }
  (class extends te {
    constructor(t) {
      super(),
        (this._root = t),
        this._initMemoryManager(),
        (this._accuIndex = 0),
        (this.time = 0),
        (this.timeScale = 1);
    }
    _bindAction(t, e) {
      const n = t._localRoot || this._root,
        i = t._clip.tracks,
        r = i.length,
        s = t._propertyBindings,
        a = t._interpolants,
        o = n.uuid,
        l = this._bindingsByRootAndName;
      let c = l[o];
      void 0 === c && ((c = {}), (l[o] = c));
      for (let t = 0; t !== r; ++t) {
        const r = i[t],
          l = r.name;
        let h = c[l];
        if (void 0 !== h) s[t] = h;
        else {
          if (((h = s[t]), void 0 !== h)) {
            null === h._cacheIndex &&
              (++h.referenceCount, this._addInactiveBinding(h, o, l));
            continue;
          }
          const i = e && e._propertyBindings[t].binding.parsedPath;
          (h = new ql(rc.create(n, l, i), r.ValueTypeName, r.getValueSize())),
            ++h.referenceCount,
            this._addInactiveBinding(h, o, l),
            (s[t] = h);
        }
        a[t].resultBuffer = h.buffer;
      }
    }
    _activateAction(t) {
      if (!this._isActiveAction(t)) {
        if (null === t._cacheIndex) {
          const e = (t._localRoot || this._root).uuid,
            n = t._clip.uuid,
            i = this._actionsByClip[n];
          this._bindAction(t, i && i.knownActions[0]),
            this._addInactiveAction(t, n, e);
        }
        const e = t._propertyBindings;
        for (let t = 0, n = e.length; t !== n; ++t) {
          const n = e[t];
          0 == n.useCount++ && (this._lendBinding(n), n.saveOriginalState());
        }
        this._lendAction(t);
      }
    }
    _deactivateAction(t) {
      if (this._isActiveAction(t)) {
        const e = t._propertyBindings;
        for (let t = 0, n = e.length; t !== n; ++t) {
          const n = e[t];
          0 == --n.useCount &&
            (n.restoreOriginalState(), this._takeBackBinding(n));
        }
        this._takeBackAction(t);
      }
    }
    _initMemoryManager() {
      (this._actions = []),
        (this._nActiveActions = 0),
        (this._actionsByClip = {}),
        (this._bindings = []),
        (this._nActiveBindings = 0),
        (this._bindingsByRootAndName = {}),
        (this._controlInterpolants = []),
        (this._nActiveControlInterpolants = 0);
      const t = this;
      this.stats = {
        actions: {
          get total() {
            return t._actions.length;
          },
          get inUse() {
            return t._nActiveActions;
          },
        },
        bindings: {
          get total() {
            return t._bindings.length;
          },
          get inUse() {
            return t._nActiveBindings;
          },
        },
        controlInterpolants: {
          get total() {
            return t._controlInterpolants.length;
          },
          get inUse() {
            return t._nActiveControlInterpolants;
          },
        },
      };
    }
    _isActiveAction(t) {
      const e = t._cacheIndex;
      return null !== e && e < this._nActiveActions;
    }
    _addInactiveAction(t, e, n) {
      const i = this._actions,
        r = this._actionsByClip;
      let s = r[e];
      if (void 0 === s)
        (s = { knownActions: [t], actionByRoot: {} }),
          (t._byClipCacheIndex = 0),
          (r[e] = s);
      else {
        const e = s.knownActions;
        (t._byClipCacheIndex = e.length), e.push(t);
      }
      (t._cacheIndex = i.length), i.push(t), (s.actionByRoot[n] = t);
    }
    _removeInactiveAction(t) {
      const e = this._actions,
        n = e[e.length - 1],
        i = t._cacheIndex;
      (n._cacheIndex = i), (e[i] = n), e.pop(), (t._cacheIndex = null);
      const r = t._clip.uuid,
        s = this._actionsByClip,
        a = s[r],
        o = a.knownActions,
        l = o[o.length - 1],
        c = t._byClipCacheIndex;
      (l._byClipCacheIndex = c),
        (o[c] = l),
        o.pop(),
        (t._byClipCacheIndex = null);
      delete a.actionByRoot[(t._localRoot || this._root).uuid],
        0 === o.length && delete s[r],
        this._removeInactiveBindingsForAction(t);
    }
    _removeInactiveBindingsForAction(t) {
      const e = t._propertyBindings;
      for (let t = 0, n = e.length; t !== n; ++t) {
        const n = e[t];
        0 == --n.referenceCount && this._removeInactiveBinding(n);
      }
    }
    _lendAction(t) {
      const e = this._actions,
        n = t._cacheIndex,
        i = this._nActiveActions++,
        r = e[i];
      (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
    }
    _takeBackAction(t) {
      const e = this._actions,
        n = t._cacheIndex,
        i = --this._nActiveActions,
        r = e[i];
      (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
    }
    _addInactiveBinding(t, e, n) {
      const i = this._bindingsByRootAndName,
        r = this._bindings;
      let s = i[e];
      void 0 === s && ((s = {}), (i[e] = s)),
        (s[n] = t),
        (t._cacheIndex = r.length),
        r.push(t);
    }
    _removeInactiveBinding(t) {
      const e = this._bindings,
        n = t.binding,
        i = n.rootNode.uuid,
        r = n.path,
        s = this._bindingsByRootAndName,
        a = s[i],
        o = e[e.length - 1],
        l = t._cacheIndex;
      (o._cacheIndex = l),
        (e[l] = o),
        e.pop(),
        delete a[r],
        0 === Object.keys(a).length && delete s[i];
    }
    _lendBinding(t) {
      const e = this._bindings,
        n = t._cacheIndex,
        i = this._nActiveBindings++,
        r = e[i];
      (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
    }
    _takeBackBinding(t) {
      const e = this._bindings,
        n = t._cacheIndex,
        i = --this._nActiveBindings,
        r = e[i];
      (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
    }
    _lendControlInterpolant() {
      const t = this._controlInterpolants,
        e = this._nActiveControlInterpolants++;
      let n = t[e];
      return (
        void 0 === n &&
          ((n = new Go(
            new Float32Array(2),
            new Float32Array(2),
            1,
            this._controlInterpolantsResultBuffer
          )),
          (n.__cacheIndex = e),
          (t[e] = n)),
        n
      );
    }
    _takeBackControlInterpolant(t) {
      const e = this._controlInterpolants,
        n = t.__cacheIndex,
        i = --this._nActiveControlInterpolants,
        r = e[i];
      (t.__cacheIndex = i), (e[i] = t), (r.__cacheIndex = n), (e[n] = r);
    }
    clipAction(t, e, n) {
      const i = e || this._root,
        r = i.uuid;
      let s = "string" == typeof t ? Jo.findByName(i, t) : t;
      const a = null !== s ? s.uuid : t,
        o = this._actionsByClip[a];
      let l = null;
      if ((void 0 === n && (n = null !== s ? s.blendMode : Yt), void 0 !== o)) {
        const t = o.actionByRoot[r];
        if (void 0 !== t && t.blendMode === n) return t;
        (l = o.knownActions[0]), null === s && (s = l._clip);
      }
      if (null === s) return null;
      const c = new sc(this, s, e, n);
      return this._bindAction(c, l), this._addInactiveAction(c, a, r), c;
    }
    existingAction(t, e) {
      const n = e || this._root,
        i = n.uuid,
        r = "string" == typeof t ? Jo.findByName(n, t) : t,
        s = r ? r.uuid : t,
        a = this._actionsByClip[s];
      return (void 0 !== a && a.actionByRoot[i]) || null;
    }
    stopAllAction() {
      const t = this._actions;
      for (let e = this._nActiveActions - 1; e >= 0; --e) t[e].stop();
      return this;
    }
    update(t) {
      t *= this.timeScale;
      const e = this._actions,
        n = this._nActiveActions,
        i = (this.time += t),
        r = Math.sign(t),
        s = (this._accuIndex ^= 1);
      for (let a = 0; a !== n; ++a) {
        e[a]._update(i, t, r, s);
      }
      const a = this._bindings,
        o = this._nActiveBindings;
      for (let t = 0; t !== o; ++t) a[t].apply(s);
      return this;
    }
    setTime(t) {
      this.time = 0;
      for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
      return this.update(t);
    }
    getRoot() {
      return this._root;
    }
    uncacheClip(t) {
      const e = this._actions,
        n = t.uuid,
        i = this._actionsByClip,
        r = i[n];
      if (void 0 !== r) {
        const t = r.knownActions;
        for (let n = 0, i = t.length; n !== i; ++n) {
          const i = t[n];
          this._deactivateAction(i);
          const r = i._cacheIndex,
            s = e[e.length - 1];
          (i._cacheIndex = null),
            (i._byClipCacheIndex = null),
            (s._cacheIndex = r),
            (e[r] = s),
            e.pop(),
            this._removeInactiveBindingsForAction(i);
        }
        delete i[n];
      }
    }
    uncacheRoot(t) {
      const e = t.uuid,
        n = this._actionsByClip;
      for (const t in n) {
        const i = n[t].actionByRoot[e];
        void 0 !== i &&
          (this._deactivateAction(i), this._removeInactiveAction(i));
      }
      const i = this._bindingsByRootAndName[e];
      if (void 0 !== i)
        for (const t in i) {
          const e = i[t];
          e.restoreOriginalState(), this._removeInactiveBinding(e);
        }
    }
    uncacheAction(t, e) {
      const n = this.existingAction(t, e);
      null !== n && (this._deactivateAction(n), this._removeInactiveAction(n));
    }
  }).prototype._controlInterpolantsResultBuffer = new Float32Array(1);
  (class extends ca {
    constructor(t, e, n = 1) {
      super(t, e), (this.meshPerAttribute = n || 1);
    }
    copy(t) {
      return super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this;
    }
    clone(t) {
      const e = super.clone(t);
      return (e.meshPerAttribute = this.meshPerAttribute), e;
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        (e.isInstancedInterleavedBuffer = !0),
        (e.meshPerAttribute = this.meshPerAttribute),
        e
      );
    }
  }).prototype.isInstancedInterleavedBuffer = !0;
  function ac(t, e) {
    return t.distance - e.distance;
  }
  function oc(t, e, n, i) {
    if ((t.layers.test(e.layers) && t.raycast(e, n), !0 === i)) {
      const i = t.children;
      for (let t = 0, r = i.length; t < r; t++) oc(i[t], e, n, !0);
    }
  }
  (class extends Tn {
    constructor(t) {
      super(),
        (this.material = t),
        (this.render = function () {}),
        (this.hasPositions = !1),
        (this.hasNormals = !1),
        (this.hasColors = !1),
        (this.hasUvs = !1),
        (this.positionArray = null),
        (this.normalArray = null),
        (this.colorArray = null),
        (this.uvArray = null),
        (this.count = 0);
    }
  }).prototype.isImmediateRenderObject = !0;
  const lc = new Me(),
    cc = new tn(),
    hc = new tn();
  function uc(t) {
    const e = [];
    t && t.isBone && e.push(t);
    for (let n = 0; n < t.children.length; n++)
      e.push.apply(e, uc(t.children[n]));
    return e;
  }
  const dc = new Float32Array(1);
  new Int32Array(dc.buffer);
  const pc = new Jn({ side: 1, depthWrite: !1, depthTest: !1 });
  new Pi(new Ii(), pc),
    (ol.create = function (t, e) {
      return (
        console.log("THREE.Curve.create() has been deprecated"),
        (t.prototype = Object.create(ol.prototype)),
        (t.prototype.constructor = t),
        (t.prototype.getPoint = e),
        t
      );
    }),
    (Ll.prototype.fromPoints = function (t) {
      return (
        console.warn(
          "THREE.Path: .fromPoints() has been renamed to .setFromPoints()."
        ),
        this.setFromPoints(t)
      );
    }),
    (class extends Xa {
      constructor(t = 10, e = 10, n = 4473924, i = 8947848) {
        (n = new $n(n)), (i = new $n(i));
        const r = e / 2,
          s = t / e,
          a = t / 2,
          o = [],
          l = [];
        for (let t = 0, c = 0, h = -a; t <= e; t++, h += s) {
          o.push(-a, 0, h, a, 0, h), o.push(h, 0, -a, h, 0, a);
          const e = t === r ? n : i;
          e.toArray(l, c),
            (c += 3),
            e.toArray(l, c),
            (c += 3),
            e.toArray(l, c),
            (c += 3),
            e.toArray(l, c),
            (c += 3);
        }
        const c = new di();
        c.setAttribute("position", new ii(o, 3)),
          c.setAttribute("color", new ii(l, 3));
        super(c, new Ba({ vertexColors: !0, toneMapped: !1 })),
          (this.type = "GridHelper");
      }
    }.prototype.setColors = function () {
      console.error(
        "THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead."
      );
    }),
    (class extends Xa {
      constructor(t) {
        const e = uc(t),
          n = new di(),
          i = [],
          r = [],
          s = new $n(0, 0, 1),
          a = new $n(0, 1, 0);
        for (let t = 0; t < e.length; t++) {
          const n = e[t];
          n.parent &&
            n.parent.isBone &&
            (i.push(0, 0, 0),
            i.push(0, 0, 0),
            r.push(s.r, s.g, s.b),
            r.push(a.r, a.g, a.b));
        }
        n.setAttribute("position", new ii(i, 3)),
          n.setAttribute("color", new ii(r, 3));
        super(
          n,
          new Ba({
            vertexColors: !0,
            depthTest: !1,
            depthWrite: !1,
            toneMapped: !1,
            transparent: !0,
          })
        ),
          (this.type = "SkeletonHelper"),
          (this.isSkeletonHelper = !0),
          (this.root = t),
          (this.bones = e),
          (this.matrix = t.matrixWorld),
          (this.matrixAutoUpdate = !1);
      }
      updateMatrixWorld(t) {
        const e = this.bones,
          n = this.geometry,
          i = n.getAttribute("position");
        hc.copy(this.root.matrixWorld).invert();
        for (let t = 0, n = 0; t < e.length; t++) {
          const r = e[t];
          r.parent &&
            r.parent.isBone &&
            (cc.multiplyMatrices(hc, r.matrixWorld),
            lc.setFromMatrixPosition(cc),
            i.setXYZ(n, lc.x, lc.y, lc.z),
            cc.multiplyMatrices(hc, r.parent.matrixWorld),
            lc.setFromMatrixPosition(cc),
            i.setXYZ(n + 1, lc.x, lc.y, lc.z),
            (n += 2));
        }
        (n.getAttribute("position").needsUpdate = !0),
          super.updateMatrixWorld(t);
      }
    }.prototype.update = function () {
      console.error(
        "THREE.SkeletonHelper: update() no longer needs to be called."
      );
    }),
    (el.prototype.extractUrlBase = function (t) {
      return (
        console.warn(
          "THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."
        ),
        kl.extractUrlBase(t)
      );
    }),
    (el.Handlers = {
      add: function () {
        console.error(
          "THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead."
        );
      },
      get: function () {
        console.error(
          "THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead."
        );
      },
    }),
    (Te.prototype.center = function (t) {
      return (
        console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),
        this.getCenter(t)
      );
    }),
    (Te.prototype.empty = function () {
      return (
        console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
        this.isEmpty()
      );
    }),
    (Te.prototype.isIntersectionBox = function (t) {
      return (
        console.warn(
          "THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."
        ),
        this.intersectsBox(t)
      );
    }),
    (Te.prototype.isIntersectionSphere = function (t) {
      return (
        console.warn(
          "THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."
        ),
        this.intersectsSphere(t)
      );
    }),
    (Te.prototype.size = function (t) {
      return (
        console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
        this.getSize(t)
      );
    }),
    (je.prototype.empty = function () {
      return (
        console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),
        this.isEmpty()
      );
    }),
    (Xi.prototype.setFromMatrix = function (t) {
      return (
        console.warn(
          "THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."
        ),
        this.setFromProjectionMatrix(t)
      );
    }),
    (me.prototype.flattenToArrayOffset = function (t, e) {
      return (
        console.warn(
          "THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
        ),
        this.toArray(t, e)
      );
    }),
    (me.prototype.multiplyVector3 = function (t) {
      return (
        console.warn(
          "THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."
        ),
        t.applyMatrix3(this)
      );
    }),
    (me.prototype.multiplyVector3Array = function () {
      console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
    }),
    (me.prototype.applyToBufferAttribute = function (t) {
      return (
        console.warn(
          "THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."
        ),
        t.applyMatrix3(this)
      );
    }),
    (me.prototype.applyToVector3Array = function () {
      console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
    }),
    (me.prototype.getInverse = function (t) {
      return (
        console.warn(
          "THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."
        ),
        this.copy(t).invert()
      );
    }),
    (tn.prototype.extractPosition = function (t) {
      return (
        console.warn(
          "THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."
        ),
        this.copyPosition(t)
      );
    }),
    (tn.prototype.flattenToArrayOffset = function (t, e) {
      return (
        console.warn(
          "THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
        ),
        this.toArray(t, e)
      );
    }),
    (tn.prototype.getPosition = function () {
      return (
        console.warn(
          "THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."
        ),
        new Me().setFromMatrixColumn(this, 3)
      );
    }),
    (tn.prototype.setRotationFromQuaternion = function (t) {
      return (
        console.warn(
          "THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."
        ),
        this.makeRotationFromQuaternion(t)
      );
    }),
    (tn.prototype.multiplyToArray = function () {
      console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
    }),
    (tn.prototype.multiplyVector3 = function (t) {
      return (
        console.warn(
          "THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."
        ),
        t.applyMatrix4(this)
      );
    }),
    (tn.prototype.multiplyVector4 = function (t) {
      return (
        console.warn(
          "THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."
        ),
        t.applyMatrix4(this)
      );
    }),
    (tn.prototype.multiplyVector3Array = function () {
      console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
    }),
    (tn.prototype.rotateAxis = function (t) {
      console.warn(
        "THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."
      ),
        t.transformDirection(this);
    }),
    (tn.prototype.crossVector = function (t) {
      return (
        console.warn(
          "THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."
        ),
        t.applyMatrix4(this)
      );
    }),
    (tn.prototype.translate = function () {
      console.error("THREE.Matrix4: .translate() has been removed.");
    }),
    (tn.prototype.rotateX = function () {
      console.error("THREE.Matrix4: .rotateX() has been removed.");
    }),
    (tn.prototype.rotateY = function () {
      console.error("THREE.Matrix4: .rotateY() has been removed.");
    }),
    (tn.prototype.rotateZ = function () {
      console.error("THREE.Matrix4: .rotateZ() has been removed.");
    }),
    (tn.prototype.rotateByAxis = function () {
      console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
    }),
    (tn.prototype.applyToBufferAttribute = function (t) {
      return (
        console.warn(
          "THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."
        ),
        t.applyMatrix4(this)
      );
    }),
    (tn.prototype.applyToVector3Array = function () {
      console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
    }),
    (tn.prototype.makeFrustum = function (t, e, n, i, r, s) {
      return (
        console.warn(
          "THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."
        ),
        this.makePerspective(t, e, i, n, r, s)
      );
    }),
    (tn.prototype.getInverse = function (t) {
      return (
        console.warn(
          "THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."
        ),
        this.copy(t).invert()
      );
    }),
    (Pn.prototype.isIntersectionLine = function (t) {
      return (
        console.warn(
          "THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."
        ),
        this.intersectsLine(t)
      );
    }),
    (be.prototype.multiplyVector3 = function (t) {
      return (
        console.warn(
          "THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."
        ),
        t.applyQuaternion(this)
      );
    }),
    (be.prototype.inverse = function () {
      return (
        console.warn(
          "THREE.Quaternion: .inverse() has been renamed to invert()."
        ),
        this.invert()
      );
    }),
    (Ke.prototype.isIntersectionBox = function (t) {
      return (
        console.warn(
          "THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."
        ),
        this.intersectsBox(t)
      );
    }),
    (Ke.prototype.isIntersectionPlane = function (t) {
      return (
        console.warn(
          "THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."
        ),
        this.intersectsPlane(t)
      );
    }),
    (Ke.prototype.isIntersectionSphere = function (t) {
      return (
        console.warn(
          "THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."
        ),
        this.intersectsSphere(t)
      );
    }),
    (Gn.prototype.area = function () {
      return (
        console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),
        this.getArea()
      );
    }),
    (Gn.prototype.barycoordFromPoint = function (t, e) {
      return (
        console.warn(
          "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
        ),
        this.getBarycoord(t, e)
      );
    }),
    (Gn.prototype.midpoint = function (t) {
      return (
        console.warn(
          "THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."
        ),
        this.getMidpoint(t)
      );
    }),
    (Gn.prototypenormal = function (t) {
      return (
        console.warn(
          "THREE.Triangle: .normal() has been renamed to .getNormal()."
        ),
        this.getNormal(t)
      );
    }),
    (Gn.prototype.plane = function (t) {
      return (
        console.warn(
          "THREE.Triangle: .plane() has been renamed to .getPlane()."
        ),
        this.getPlane(t)
      );
    }),
    (Gn.barycoordFromPoint = function (t, e, n, i, r) {
      return (
        console.warn(
          "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
        ),
        Gn.getBarycoord(t, e, n, i, r)
      );
    }),
    (Gn.normal = function (t, e, n, i) {
      return (
        console.warn(
          "THREE.Triangle: .normal() has been renamed to .getNormal()."
        ),
        Gn.getNormal(t, e, n, i)
      );
    }),
    (Al.prototype.extractAllPoints = function (t) {
      return (
        console.warn(
          "THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."
        ),
        this.extractPoints(t)
      );
    }),
    (Al.prototype.extrude = function (t) {
      return (
        console.warn(
          "THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."
        ),
        new Po(this, t)
      );
    }),
    (Al.prototype.makeGeometry = function (t) {
      return (
        console.warn(
          "THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."
        ),
        new Do(this, t)
      );
    }),
    (pe.prototype.fromAttribute = function (t, e, n) {
      return (
        console.warn(
          "THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."
        ),
        this.fromBufferAttribute(t, e, n)
      );
    }),
    (pe.prototype.distanceToManhattan = function (t) {
      return (
        console.warn(
          "THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
        ),
        this.manhattanDistanceTo(t)
      );
    }),
    (pe.prototype.lengthManhattan = function () {
      return (
        console.warn(
          "THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."
        ),
        this.manhattanLength()
      );
    }),
    (Me.prototype.setEulerFromRotationMatrix = function () {
      console.error(
        "THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead."
      );
    }),
    (Me.prototype.setEulerFromQuaternion = function () {
      console.error(
        "THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead."
      );
    }),
    (Me.prototype.getPositionFromMatrix = function (t) {
      return (
        console.warn(
          "THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."
        ),
        this.setFromMatrixPosition(t)
      );
    }),
    (Me.prototype.getScaleFromMatrix = function (t) {
      return (
        console.warn(
          "THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."
        ),
        this.setFromMatrixScale(t)
      );
    }),
    (Me.prototype.getColumnFromMatrix = function (t, e) {
      return (
        console.warn(
          "THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."
        ),
        this.setFromMatrixColumn(e, t)
      );
    }),
    (Me.prototype.applyProjection = function (t) {
      return (
        console.warn(
          "THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."
        ),
        this.applyMatrix4(t)
      );
    }),
    (Me.prototype.fromAttribute = function (t, e, n) {
      return (
        console.warn(
          "THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."
        ),
        this.fromBufferAttribute(t, e, n)
      );
    }),
    (Me.prototype.distanceToManhattan = function (t) {
      return (
        console.warn(
          "THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
        ),
        this.manhattanDistanceTo(t)
      );
    }),
    (Me.prototype.lengthManhattan = function () {
      return (
        console.warn(
          "THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."
        ),
        this.manhattanLength()
      );
    }),
    (_e.prototype.fromAttribute = function (t, e, n) {
      return (
        console.warn(
          "THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."
        ),
        this.fromBufferAttribute(t, e, n)
      );
    }),
    (_e.prototype.lengthManhattan = function () {
      return (
        console.warn(
          "THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."
        ),
        this.manhattanLength()
      );
    }),
    (Tn.prototype.getChildByName = function (t) {
      return (
        console.warn(
          "THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."
        ),
        this.getObjectByName(t)
      );
    }),
    (Tn.prototype.renderDepth = function () {
      console.warn(
        "THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead."
      );
    }),
    (Tn.prototype.translate = function (t, e) {
      return (
        console.warn(
          "THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."
        ),
        this.translateOnAxis(e, t)
      );
    }),
    (Tn.prototype.getWorldRotation = function () {
      console.error(
        "THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead."
      );
    }),
    (Tn.prototype.applyMatrix = function (t) {
      return (
        console.warn(
          "THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."
        ),
        this.applyMatrix4(t)
      );
    }),
    Object.defineProperties(Tn.prototype, {
      eulerOrder: {
        get: function () {
          return (
            console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
            this.rotation.order
          );
        },
        set: function (t) {
          console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
            (this.rotation.order = t);
        },
      },
      useQuaternion: {
        get: function () {
          console.warn(
            "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
          );
        },
        set: function () {
          console.warn(
            "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
          );
        },
      },
    }),
    (Pi.prototype.setDrawMode = function () {
      console.error(
        "THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
      );
    }),
    Object.defineProperties(Pi.prototype, {
      drawMode: {
        get: function () {
          return (
            console.error(
              "THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."
            ),
            0
          );
        },
        set: function () {
          console.error(
            "THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
          );
        },
      },
    }),
    (Ia.prototype.initBones = function () {
      console.error("THREE.SkinnedMesh: initBones() has been removed.");
    }),
    (Fi.prototype.setLens = function (t, e) {
      console.warn(
        "THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."
      ),
        void 0 !== e && (this.filmGauge = e),
        this.setFocalLength(t);
    }),
    Object.defineProperties(Rl.prototype, {
      onlyShadow: {
        set: function () {
          console.warn("THREE.Light: .onlyShadow has been removed.");
        },
      },
      shadowCameraFov: {
        set: function (t) {
          console.warn(
            "THREE.Light: .shadowCameraFov is now .shadow.camera.fov."
          ),
            (this.shadow.camera.fov = t);
        },
      },
      shadowCameraLeft: {
        set: function (t) {
          console.warn(
            "THREE.Light: .shadowCameraLeft is now .shadow.camera.left."
          ),
            (this.shadow.camera.left = t);
        },
      },
      shadowCameraRight: {
        set: function (t) {
          console.warn(
            "THREE.Light: .shadowCameraRight is now .shadow.camera.right."
          ),
            (this.shadow.camera.right = t);
        },
      },
      shadowCameraTop: {
        set: function (t) {
          console.warn(
            "THREE.Light: .shadowCameraTop is now .shadow.camera.top."
          ),
            (this.shadow.camera.top = t);
        },
      },
      shadowCameraBottom: {
        set: function (t) {
          console.warn(
            "THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."
          ),
            (this.shadow.camera.bottom = t);
        },
      },
      shadowCameraNear: {
        set: function (t) {
          console.warn(
            "THREE.Light: .shadowCameraNear is now .shadow.camera.near."
          ),
            (this.shadow.camera.near = t);
        },
      },
      shadowCameraFar: {
        set: function (t) {
          console.warn(
            "THREE.Light: .shadowCameraFar is now .shadow.camera.far."
          ),
            (this.shadow.camera.far = t);
        },
      },
      shadowCameraVisible: {
        set: function () {
          console.warn(
            "THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead."
          );
        },
      },
      shadowBias: {
        set: function (t) {
          console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
            (this.shadow.bias = t);
        },
      },
      shadowDarkness: {
        set: function () {
          console.warn("THREE.Light: .shadowDarkness has been removed.");
        },
      },
      shadowMapWidth: {
        set: function (t) {
          console.warn(
            "THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."
          ),
            (this.shadow.mapSize.width = t);
        },
      },
      shadowMapHeight: {
        set: function (t) {
          console.warn(
            "THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."
          ),
            (this.shadow.mapSize.height = t);
        },
      },
    }),
    Object.defineProperties(ti.prototype, {
      length: {
        get: function () {
          return (
            console.warn(
              "THREE.BufferAttribute: .length has been deprecated. Use .count instead."
            ),
            this.array.length
          );
        },
      },
      dynamic: {
        get: function () {
          return (
            console.warn(
              "THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
            ),
            this.usage === Qt
          );
        },
        set: function () {
          console.warn(
            "THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
          ),
            this.setUsage(Qt);
        },
      },
    }),
    (ti.prototype.setDynamic = function (t) {
      return (
        console.warn(
          "THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."
        ),
        this.setUsage(!0 === t ? Qt : Jt),
        this
      );
    }),
    (ti.prototype.copyIndicesArray = function () {
      console.error(
        "THREE.BufferAttribute: .copyIndicesArray() has been removed."
      );
    }),
    (ti.prototype.setArray = function () {
      console.error(
        "THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
      );
    }),
    (di.prototype.addIndex = function (t) {
      console.warn(
        "THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."
      ),
        this.setIndex(t);
    }),
    (di.prototype.addAttribute = function (t, e) {
      return (
        console.warn(
          "THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."
        ),
        (e && e.isBufferAttribute) || (e && e.isInterleavedBufferAttribute)
          ? "index" === t
            ? (console.warn(
                "THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."
              ),
              this.setIndex(e),
              this)
            : this.setAttribute(t, e)
          : (console.warn(
              "THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."
            ),
            this.setAttribute(t, new ti(arguments[1], arguments[2])))
      );
    }),
    (di.prototype.addDrawCall = function (t, e, n) {
      void 0 !== n &&
        console.warn(
          "THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."
        ),
        console.warn(
          "THREE.BufferGeometry: .addDrawCall() is now .addGroup()."
        ),
        this.addGroup(t, e);
    }),
    (di.prototype.clearDrawCalls = function () {
      console.warn(
        "THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."
      ),
        this.clearGroups();
    }),
    (di.prototype.computeOffsets = function () {
      console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
    }),
    (di.prototype.removeAttribute = function (t) {
      return (
        console.warn(
          "THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."
        ),
        this.deleteAttribute(t)
      );
    }),
    (di.prototype.applyMatrix = function (t) {
      return (
        console.warn(
          "THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."
        ),
        this.applyMatrix4(t)
      );
    }),
    Object.defineProperties(di.prototype, {
      drawcalls: {
        get: function () {
          return (
            console.error(
              "THREE.BufferGeometry: .drawcalls has been renamed to .groups."
            ),
            this.groups
          );
        },
      },
      offsets: {
        get: function () {
          return (
            console.warn(
              "THREE.BufferGeometry: .offsets has been renamed to .groups."
            ),
            this.groups
          );
        },
      },
    }),
    (ca.prototype.setDynamic = function (t) {
      return (
        console.warn(
          "THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."
        ),
        this.setUsage(!0 === t ? Qt : Jt),
        this
      );
    }),
    (ca.prototype.setArray = function () {
      console.error(
        "THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
      );
    }),
    (Po.prototype.getArrays = function () {
      console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
    }),
    (Po.prototype.addShapeList = function () {
      console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
    }),
    (Po.prototype.addShape = function () {
      console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
    }),
    (la.prototype.dispose = function () {
      console.error("THREE.Scene: .dispose() has been removed.");
    }),
    Object.defineProperties(kn.prototype, {
      wrapAround: {
        get: function () {
          console.warn("THREE.Material: .wrapAround has been removed.");
        },
        set: function () {
          console.warn("THREE.Material: .wrapAround has been removed.");
        },
      },
      overdraw: {
        get: function () {
          console.warn("THREE.Material: .overdraw has been removed.");
        },
        set: function () {
          console.warn("THREE.Material: .overdraw has been removed.");
        },
      },
      wrapRGB: {
        get: function () {
          return (
            console.warn("THREE.Material: .wrapRGB has been removed."), new $n()
          );
        },
      },
      shading: {
        get: function () {
          console.error(
            "THREE." +
              this.type +
              ": .shading has been removed. Use the boolean .flatShading instead."
          );
        },
        set: function (t) {
          console.warn(
            "THREE." +
              this.type +
              ": .shading has been removed. Use the boolean .flatShading instead."
          ),
            (this.flatShading = 1 === t);
        },
      },
      stencilMask: {
        get: function () {
          return (
            console.warn(
              "THREE." +
                this.type +
                ": .stencilMask has been removed. Use .stencilFuncMask instead."
            ),
            this.stencilFuncMask
          );
        },
        set: function (t) {
          console.warn(
            "THREE." +
              this.type +
              ": .stencilMask has been removed. Use .stencilFuncMask instead."
          ),
            (this.stencilFuncMask = t);
        },
      },
    }),
    Object.defineProperties(Oi.prototype, {
      derivatives: {
        get: function () {
          return (
            console.warn(
              "THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
            ),
            this.extensions.derivatives
          );
        },
        set: function (t) {
          console.warn(
            "THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
          ),
            (this.extensions.derivatives = t);
        },
      },
    }),
    (oa.prototype.clearTarget = function (t, e, n, i) {
      console.warn(
        "THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."
      ),
        this.setRenderTarget(t),
        this.clear(e, n, i);
    }),
    (oa.prototype.animate = function (t) {
      console.warn(
        "THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."
      ),
        this.setAnimationLoop(t);
    }),
    (oa.prototype.getCurrentRenderTarget = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."
        ),
        this.getRenderTarget()
      );
    }),
    (oa.prototype.getMaxAnisotropy = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."
        ),
        this.capabilities.getMaxAnisotropy()
      );
    }),
    (oa.prototype.getPrecision = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."
        ),
        this.capabilities.precision
      );
    }),
    (oa.prototype.resetGLState = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .resetGLState() is now .state.reset()."
        ),
        this.state.reset()
      );
    }),
    (oa.prototype.supportsFloatTextures = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."
        ),
        this.extensions.get("OES_texture_float")
      );
    }),
    (oa.prototype.supportsHalfFloatTextures = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."
        ),
        this.extensions.get("OES_texture_half_float")
      );
    }),
    (oa.prototype.supportsStandardDerivatives = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."
        ),
        this.extensions.get("OES_standard_derivatives")
      );
    }),
    (oa.prototype.supportsCompressedTextureS3TC = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."
        ),
        this.extensions.get("WEBGL_compressed_texture_s3tc")
      );
    }),
    (oa.prototype.supportsCompressedTexturePVRTC = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."
        ),
        this.extensions.get("WEBGL_compressed_texture_pvrtc")
      );
    }),
    (oa.prototype.supportsBlendMinMax = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."
        ),
        this.extensions.get("EXT_blend_minmax")
      );
    }),
    (oa.prototype.supportsVertexTextures = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."
        ),
        this.capabilities.vertexTextures
      );
    }),
    (oa.prototype.supportsInstancedArrays = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."
        ),
        this.extensions.get("ANGLE_instanced_arrays")
      );
    }),
    (oa.prototype.enableScissorTest = function (t) {
      console.warn(
        "THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."
      ),
        this.setScissorTest(t);
    }),
    (oa.prototype.initMaterial = function () {
      console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
    }),
    (oa.prototype.addPrePlugin = function () {
      console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
    }),
    (oa.prototype.addPostPlugin = function () {
      console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
    }),
    (oa.prototype.updateShadowMap = function () {
      console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
    }),
    (oa.prototype.setFaceCulling = function () {
      console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
    }),
    (oa.prototype.allocTextureUnit = function () {
      console.warn(
        "THREE.WebGLRenderer: .allocTextureUnit() has been removed."
      );
    }),
    (oa.prototype.setTexture = function () {
      console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
    }),
    (oa.prototype.setTexture2D = function () {
      console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
    }),
    (oa.prototype.setTextureCube = function () {
      console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
    }),
    (oa.prototype.getActiveMipMapLevel = function () {
      return (
        console.warn(
          "THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."
        ),
        this.getActiveMipmapLevel()
      );
    }),
    Object.defineProperties(oa.prototype, {
      shadowMapEnabled: {
        get: function () {
          return this.shadowMap.enabled;
        },
        set: function (t) {
          console.warn(
            "THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."
          ),
            (this.shadowMap.enabled = t);
        },
      },
      shadowMapType: {
        get: function () {
          return this.shadowMap.type;
        },
        set: function (t) {
          console.warn(
            "THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."
          ),
            (this.shadowMap.type = t);
        },
      },
      shadowMapCullFace: {
        get: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
          );
        },
        set: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
          );
        },
      },
      context: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."
            ),
            this.getContext()
          );
        },
      },
      vr: {
        get: function () {
          return (
            console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),
            this.xr
          );
        },
      },
      gammaInput: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
            ),
            !1
          );
        },
        set: function () {
          console.warn(
            "THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
          );
        },
      },
      gammaOutput: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
            ),
            !1
          );
        },
        set: function (t) {
          console.warn(
            "THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
          ),
            (this.outputEncoding = !0 === t ? 3001 : Zt);
        },
      },
      toneMappingWhitePoint: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."
            ),
            1
          );
        },
        set: function () {
          console.warn(
            "THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."
          );
        },
      },
    }),
    Object.defineProperties(Js.prototype, {
      cullFace: {
        get: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
          );
        },
        set: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
          );
        },
      },
      renderReverseSided: {
        get: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
          );
        },
        set: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
          );
        },
      },
      renderSingleSided: {
        get: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
          );
        },
        set: function () {
          console.warn(
            "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
          );
        },
      },
    }),
    Object.defineProperties(we.prototype, {
      wrapS: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."
            ),
            this.texture.wrapS
          );
        },
        set: function (t) {
          console.warn(
            "THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."
          ),
            (this.texture.wrapS = t);
        },
      },
      wrapT: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."
            ),
            this.texture.wrapT
          );
        },
        set: function (t) {
          console.warn(
            "THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."
          ),
            (this.texture.wrapT = t);
        },
      },
      magFilter: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
            ),
            this.texture.magFilter
          );
        },
        set: function (t) {
          console.warn(
            "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
          ),
            (this.texture.magFilter = t);
        },
      },
      minFilter: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
            ),
            this.texture.minFilter
          );
        },
        set: function (t) {
          console.warn(
            "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
          ),
            (this.texture.minFilter = t);
        },
      },
      anisotropy: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
            ),
            this.texture.anisotropy
          );
        },
        set: function (t) {
          console.warn(
            "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
          ),
            (this.texture.anisotropy = t);
        },
      },
      offset: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .offset is now .texture.offset."
            ),
            this.texture.offset
          );
        },
        set: function (t) {
          console.warn(
            "THREE.WebGLRenderTarget: .offset is now .texture.offset."
          ),
            (this.texture.offset = t);
        },
      },
      repeat: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
            ),
            this.texture.repeat
          );
        },
        set: function (t) {
          console.warn(
            "THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
          ),
            (this.texture.repeat = t);
        },
      },
      format: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .format is now .texture.format."
            ),
            this.texture.format
          );
        },
        set: function (t) {
          console.warn(
            "THREE.WebGLRenderTarget: .format is now .texture.format."
          ),
            (this.texture.format = t);
        },
      },
      type: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .type is now .texture.type."
            ),
            this.texture.type
          );
        },
        set: function (t) {
          console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
            (this.texture.type = t);
        },
      },
      generateMipmaps: {
        get: function () {
          return (
            console.warn(
              "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
            ),
            this.texture.generateMipmaps
          );
        },
        set: function (t) {
          console.warn(
            "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
          ),
            (this.texture.generateMipmaps = t);
        },
      },
    }),
    (class extends Tn {
      constructor(t) {
        super(),
          (this.type = "Audio"),
          (this.listener = t),
          (this.context = t.context),
          (this.gain = this.context.createGain()),
          this.gain.connect(t.getInput()),
          (this.autoplay = !1),
          (this.buffer = null),
          (this.detune = 0),
          (this.loop = !1),
          (this.loopStart = 0),
          (this.loopEnd = 0),
          (this.offset = 0),
          (this.duration = void 0),
          (this.playbackRate = 1),
          (this.isPlaying = !1),
          (this.hasPlaybackControl = !0),
          (this.source = null),
          (this.sourceType = "empty"),
          (this._startedAt = 0),
          (this._progress = 0),
          (this._connected = !1),
          (this.filters = []);
      }
      getOutput() {
        return this.gain;
      }
      setNodeSource(t) {
        return (
          (this.hasPlaybackControl = !1),
          (this.sourceType = "audioNode"),
          (this.source = t),
          this.connect(),
          this
        );
      }
      setMediaElementSource(t) {
        return (
          (this.hasPlaybackControl = !1),
          (this.sourceType = "mediaNode"),
          (this.source = this.context.createMediaElementSource(t)),
          this.connect(),
          this
        );
      }
      setMediaStreamSource(t) {
        return (
          (this.hasPlaybackControl = !1),
          (this.sourceType = "mediaStreamNode"),
          (this.source = this.context.createMediaStreamSource(t)),
          this.connect(),
          this
        );
      }
      setBuffer(t) {
        return (
          (this.buffer = t),
          (this.sourceType = "buffer"),
          this.autoplay && this.play(),
          this
        );
      }
      play(t = 0) {
        if (!0 === this.isPlaying)
          return void console.warn("THREE.Audio: Audio is already playing.");
        if (!1 === this.hasPlaybackControl)
          return void console.warn(
            "THREE.Audio: this Audio has no playback control."
          );
        this._startedAt = this.context.currentTime + t;
        const e = this.context.createBufferSource();
        return (
          (e.buffer = this.buffer),
          (e.loop = this.loop),
          (e.loopStart = this.loopStart),
          (e.loopEnd = this.loopEnd),
          (e.onended = this.onEnded.bind(this)),
          e.start(this._startedAt, this._progress + this.offset, this.duration),
          (this.isPlaying = !0),
          (this.source = e),
          this.setDetune(this.detune),
          this.setPlaybackRate(this.playbackRate),
          this.connect()
        );
      }
      pause() {
        if (!1 !== this.hasPlaybackControl)
          return (
            !0 === this.isPlaying &&
              ((this._progress +=
                Math.max(this.context.currentTime - this._startedAt, 0) *
                this.playbackRate),
              !0 === this.loop &&
                (this._progress =
                  this._progress % (this.duration || this.buffer.duration)),
              this.source.stop(),
              (this.source.onended = null),
              (this.isPlaying = !1)),
            this
          );
        console.warn("THREE.Audio: this Audio has no playback control.");
      }
      stop() {
        if (!1 !== this.hasPlaybackControl)
          return (
            (this._progress = 0),
            this.source.stop(),
            (this.source.onended = null),
            (this.isPlaying = !1),
            this
          );
        console.warn("THREE.Audio: this Audio has no playback control.");
      }
      connect() {
        if (this.filters.length > 0) {
          this.source.connect(this.filters[0]);
          for (let t = 1, e = this.filters.length; t < e; t++)
            this.filters[t - 1].connect(this.filters[t]);
          this.filters[this.filters.length - 1].connect(this.getOutput());
        } else this.source.connect(this.getOutput());
        return (this._connected = !0), this;
      }
      disconnect() {
        if (this.filters.length > 0) {
          this.source.disconnect(this.filters[0]);
          for (let t = 1, e = this.filters.length; t < e; t++)
            this.filters[t - 1].disconnect(this.filters[t]);
          this.filters[this.filters.length - 1].disconnect(this.getOutput());
        } else this.source.disconnect(this.getOutput());
        return (this._connected = !1), this;
      }
      getFilters() {
        return this.filters;
      }
      setFilters(t) {
        return (
          t || (t = []),
          !0 === this._connected
            ? (this.disconnect(), (this.filters = t.slice()), this.connect())
            : (this.filters = t.slice()),
          this
        );
      }
      setDetune(t) {
        if (((this.detune = t), void 0 !== this.source.detune))
          return (
            !0 === this.isPlaying &&
              this.source.detune.setTargetAtTime(
                this.detune,
                this.context.currentTime,
                0.01
              ),
            this
          );
      }
      getDetune() {
        return this.detune;
      }
      getFilter() {
        return this.getFilters()[0];
      }
      setFilter(t) {
        return this.setFilters(t ? [t] : []);
      }
      setPlaybackRate(t) {
        if (!1 !== this.hasPlaybackControl)
          return (
            (this.playbackRate = t),
            !0 === this.isPlaying &&
              this.source.playbackRate.setTargetAtTime(
                this.playbackRate,
                this.context.currentTime,
                0.01
              ),
            this
          );
        console.warn("THREE.Audio: this Audio has no playback control.");
      }
      getPlaybackRate() {
        return this.playbackRate;
      }
      onEnded() {
        this.isPlaying = !1;
      }
      getLoop() {
        return !1 === this.hasPlaybackControl
          ? (console.warn("THREE.Audio: this Audio has no playback control."),
            !1)
          : this.loop;
      }
      setLoop(t) {
        if (!1 !== this.hasPlaybackControl)
          return (
            (this.loop = t),
            !0 === this.isPlaying && (this.source.loop = this.loop),
            this
          );
        console.warn("THREE.Audio: this Audio has no playback control.");
      }
      setLoopStart(t) {
        return (this.loopStart = t), this;
      }
      setLoopEnd(t) {
        return (this.loopEnd = t), this;
      }
      getVolume() {
        return this.gain.gain.value;
      }
      setVolume(t) {
        return (
          this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01),
          this
        );
      }
    }.prototype.load = function (t) {
      console.warn(
        "THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."
      );
      const e = this;
      return (
        new Xl().load(t, function (t) {
          e.setBuffer(t);
        }),
        this
      );
    }),
    (Ui.prototype.updateCubeMap = function (t, e) {
      return (
        console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),
        this.update(t, e)
      );
    }),
    (Ui.prototype.clear = function (t, e, n, i) {
      return (
        console.warn(
          "THREE.CubeCamera: .clear() is now .renderTarget.clear()."
        ),
        this.renderTarget.clear(t, e, n, i)
      );
    }),
    (ge.crossOrigin = void 0),
    (ge.loadTexture = function (t, e, n, i) {
      console.warn(
        "THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."
      );
      const r = new al();
      r.setCrossOrigin(this.crossOrigin);
      const s = r.load(t, n, void 0, i);
      return e && (s.mapping = e), s;
    }),
    (ge.loadTextureCube = function (t, e, n, i) {
      console.warn(
        "THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."
      );
      const r = new sl();
      r.setCrossOrigin(this.crossOrigin);
      const s = r.load(t, n, void 0, i);
      return e && (s.mapping = e), s;
    }),
    (ge.loadCompressedTexture = function () {
      console.error(
        "THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead."
      );
    }),
    (ge.loadCompressedTextureCube = function () {
      console.error(
        "THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead."
      );
    }),
    "undefined" != typeof __THREE_DEVTOOLS__ &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("register", { detail: { revision: "128" } })
      ),
    "undefined" != typeof window &&
      (window.__THREE__
        ? console.warn(
            "WARNING: Multiple instances of Three.js being imported."
          )
        : (window.__THREE__ = "128"));
  const mc = new (class {
      constructor(t, e, n = 0, i = 1 / 0) {
        (this.ray = new Ke(t, e)),
          (this.near = n),
          (this.far = i),
          (this.camera = null),
          (this.layers = new dn()),
          (this.params = {
            Mesh: {},
            Line: { threshold: 1 },
            LOD: {},
            Points: { threshold: 1 },
            Sprite: {},
          });
      }
      set(t, e) {
        this.ray.set(t, e);
      }
      setFromCamera(t, e) {
        e && e.isPerspectiveCamera
          ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
            this.ray.direction
              .set(t.x, t.y, 0.5)
              .unproject(e)
              .sub(this.ray.origin)
              .normalize(),
            (this.camera = e))
          : e && e.isOrthographicCamera
          ? (this.ray.origin
              .set(t.x, t.y, (e.near + e.far) / (e.near - e.far))
              .unproject(e),
            this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld),
            (this.camera = e))
          : console.error(
              "THREE.Raycaster: Unsupported camera type: " + e.type
            );
      }
      intersectObject(t, e = !1, n = []) {
        return oc(t, this, n, e), n.sort(ac), n;
      }
      intersectObjects(t, e = !1, n = []) {
        for (let i = 0, r = t.length; i < r; i++) oc(t[i], this, n, e);
        return n.sort(ac), n;
      }
    })(),
    fc = new Me(),
    gc = new Me(),
    vc = new be(),
    yc = { X: new Me(1, 0, 0), Y: new Me(0, 1, 0), Z: new Me(0, 0, 1) },
    xc = { type: "change" },
    _c = { type: "mouseDown" },
    wc = { type: "mouseUp", mode: null },
    bc = { type: "objectChange" };
  class Mc extends Tn {
    constructor(t, e) {
      super(),
        void 0 === e &&
          (console.warn(
            'THREE.TransformControls: The second parameter "domElement" is now mandatory.'
          ),
          (e = document)),
        (this.visible = !1),
        (this.domElement = e);
      const n = new Wc();
      (this._gizmo = n), this.add(n);
      const i = new jc();
      (this._plane = i), this.add(i);
      const r = this;
      function s(t, e) {
        let s = e;
        Object.defineProperty(r, t, {
          get: function () {
            return void 0 !== s ? s : e;
          },
          set: function (e) {
            s !== e &&
              ((s = e),
              (i[t] = e),
              (n[t] = e),
              r.dispatchEvent({ type: t + "-changed", value: e }),
              r.dispatchEvent(xc));
          },
        }),
          (r[t] = e),
          (i[t] = e),
          (n[t] = e);
      }
      s("camera", t),
        s("object", void 0),
        s("enabled", !0),
        s("axis", null),
        s("mode", "translate"),
        s("translationSnap", null),
        s("rotationSnap", null),
        s("scaleSnap", null),
        s("space", "world"),
        s("size", 1),
        s("dragging", !1),
        s("showX", !0),
        s("showY", !0),
        s("showZ", !0);
      const a = new Me(),
        o = new Me(),
        l = new be(),
        c = new be(),
        h = new Me(),
        u = new be(),
        d = new Me(),
        p = new Me(),
        m = new Me(),
        f = new Me();
      s("worldPosition", a),
        s("worldPositionStart", o),
        s("worldQuaternion", l),
        s("worldQuaternionStart", c),
        s("cameraPosition", h),
        s("cameraQuaternion", u),
        s("pointStart", d),
        s("pointEnd", p),
        s("rotationAxis", m),
        s("rotationAngle", 0),
        s("eye", f),
        (this._offset = new Me()),
        (this._startNorm = new Me()),
        (this._endNorm = new Me()),
        (this._cameraScale = new Me()),
        (this._parentPosition = new Me()),
        (this._parentQuaternion = new be()),
        (this._parentQuaternionInv = new be()),
        (this._parentScale = new Me()),
        (this._worldScaleStart = new Me()),
        (this._worldQuaternionInv = new be()),
        (this._worldScale = new Me()),
        (this._positionStart = new Me()),
        (this._quaternionStart = new be()),
        (this._scaleStart = new Me()),
        (this._getPointer = Sc.bind(this)),
        (this._onPointerDown = Tc.bind(this)),
        (this._onPointerHover = Ec.bind(this)),
        (this._onPointerMove = Lc.bind(this)),
        (this._onPointerUp = Ac.bind(this)),
        this.domElement.addEventListener("pointerdown", this._onPointerDown),
        this.domElement.addEventListener("pointermove", this._onPointerHover),
        this.domElement.ownerDocument.addEventListener(
          "pointerup",
          this._onPointerUp
        );
    }
    updateMatrixWorld() {
      void 0 !== this.object &&
        (this.object.updateMatrixWorld(),
        null === this.object.parent
          ? console.error(
              "TransformControls: The attached 3D object must be a part of the scene graph."
            )
          : this.object.parent.matrixWorld.decompose(
              this._parentPosition,
              this._parentQuaternion,
              this._parentScale
            ),
        this.object.matrixWorld.decompose(
          this.worldPosition,
          this.worldQuaternion,
          this._worldScale
        ),
        this._parentQuaternionInv.copy(this._parentQuaternion).invert(),
        this._worldQuaternionInv.copy(this.worldQuaternion).invert()),
        this.camera.updateMatrixWorld(),
        this.camera.matrixWorld.decompose(
          this.cameraPosition,
          this.cameraQuaternion,
          this._cameraScale
        ),
        this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),
        super.updateMatrixWorld(this);
    }
    pointerHover(t) {
      if (void 0 === this.object || !0 === this.dragging) return;
      mc.setFromCamera(t, this.camera);
      const e = Rc(this._gizmo.picker[this.mode], mc);
      this.axis = e ? e.object.name : null;
    }
    pointerDown(t) {
      if (
        void 0 !== this.object &&
        !0 !== this.dragging &&
        0 === t.button &&
        null !== this.axis
      ) {
        mc.setFromCamera(t, this.camera);
        const e = Rc(this._plane, mc, !0);
        if (e) {
          let t = this.space;
          if (
            ("scale" === this.mode
              ? (t = "local")
              : ("E" !== this.axis &&
                  "XYZE" !== this.axis &&
                  "XYZ" !== this.axis) ||
                (t = "world"),
            "local" === t && "rotate" === this.mode)
          ) {
            const t = this.rotationSnap;
            "X" === this.axis &&
              t &&
              (this.object.rotation.x =
                Math.round(this.object.rotation.x / t) * t),
              "Y" === this.axis &&
                t &&
                (this.object.rotation.y =
                  Math.round(this.object.rotation.y / t) * t),
              "Z" === this.axis &&
                t &&
                (this.object.rotation.z =
                  Math.round(this.object.rotation.z / t) * t);
          }
          this.object.updateMatrixWorld(),
            this.object.parent.updateMatrixWorld(),
            this._positionStart.copy(this.object.position),
            this._quaternionStart.copy(this.object.quaternion),
            this._scaleStart.copy(this.object.scale),
            this.object.matrixWorld.decompose(
              this.worldPositionStart,
              this.worldQuaternionStart,
              this._worldScaleStart
            ),
            this.pointStart.copy(e.point).sub(this.worldPositionStart);
        }
        (this.dragging = !0), (_c.mode = this.mode), this.dispatchEvent(_c);
      }
    }
    pointerMove(t) {
      const e = this.axis,
        n = this.mode,
        i = this.object;
      let r = this.space;
      if (
        ("scale" === n
          ? (r = "local")
          : ("E" !== e && "XYZE" !== e && "XYZ" !== e) || (r = "world"),
        void 0 === i || null === e || !1 === this.dragging || -1 !== t.button)
      )
        return;
      mc.setFromCamera(t, this.camera);
      const s = Rc(this._plane, mc, !0);
      if (s) {
        if (
          (this.pointEnd.copy(s.point).sub(this.worldPositionStart),
          "translate" === n)
        )
          this._offset.copy(this.pointEnd).sub(this.pointStart),
            "local" === r &&
              "XYZ" !== e &&
              this._offset.applyQuaternion(this._worldQuaternionInv),
            -1 === e.indexOf("X") && (this._offset.x = 0),
            -1 === e.indexOf("Y") && (this._offset.y = 0),
            -1 === e.indexOf("Z") && (this._offset.z = 0),
            "local" === r && "XYZ" !== e
              ? this._offset
                  .applyQuaternion(this._quaternionStart)
                  .divide(this._parentScale)
              : this._offset
                  .applyQuaternion(this._parentQuaternionInv)
                  .divide(this._parentScale),
            i.position.copy(this._offset).add(this._positionStart),
            this.translationSnap &&
              ("local" === r &&
                (i.position.applyQuaternion(
                  vc.copy(this._quaternionStart).invert()
                ),
                -1 !== e.search("X") &&
                  (i.position.x =
                    Math.round(i.position.x / this.translationSnap) *
                    this.translationSnap),
                -1 !== e.search("Y") &&
                  (i.position.y =
                    Math.round(i.position.y / this.translationSnap) *
                    this.translationSnap),
                -1 !== e.search("Z") &&
                  (i.position.z =
                    Math.round(i.position.z / this.translationSnap) *
                    this.translationSnap),
                i.position.applyQuaternion(this._quaternionStart)),
              "world" === r &&
                (i.parent &&
                  i.position.add(
                    fc.setFromMatrixPosition(i.parent.matrixWorld)
                  ),
                -1 !== e.search("X") &&
                  (i.position.x =
                    Math.round(i.position.x / this.translationSnap) *
                    this.translationSnap),
                -1 !== e.search("Y") &&
                  (i.position.y =
                    Math.round(i.position.y / this.translationSnap) *
                    this.translationSnap),
                -1 !== e.search("Z") &&
                  (i.position.z =
                    Math.round(i.position.z / this.translationSnap) *
                    this.translationSnap),
                i.parent &&
                  i.position.sub(
                    fc.setFromMatrixPosition(i.parent.matrixWorld)
                  )));
        else if ("scale" === n) {
          if (-1 !== e.search("XYZ")) {
            let t = this.pointEnd.length() / this.pointStart.length();
            this.pointEnd.dot(this.pointStart) < 0 && (t *= -1),
              gc.set(t, t, t);
          } else
            fc.copy(this.pointStart),
              gc.copy(this.pointEnd),
              fc.applyQuaternion(this._worldQuaternionInv),
              gc.applyQuaternion(this._worldQuaternionInv),
              gc.divide(fc),
              -1 === e.search("X") && (gc.x = 1),
              -1 === e.search("Y") && (gc.y = 1),
              -1 === e.search("Z") && (gc.z = 1);
          i.scale.copy(this._scaleStart).multiply(gc),
            this.scaleSnap &&
              (-1 !== e.search("X") &&
                (i.scale.x =
                  Math.round(i.scale.x / this.scaleSnap) * this.scaleSnap ||
                  this.scaleSnap),
              -1 !== e.search("Y") &&
                (i.scale.y =
                  Math.round(i.scale.y / this.scaleSnap) * this.scaleSnap ||
                  this.scaleSnap),
              -1 !== e.search("Z") &&
                (i.scale.z =
                  Math.round(i.scale.z / this.scaleSnap) * this.scaleSnap ||
                  this.scaleSnap));
        } else if ("rotate" === n) {
          this._offset.copy(this.pointEnd).sub(this.pointStart);
          const t =
            20 /
            this.worldPosition.distanceTo(
              fc.setFromMatrixPosition(this.camera.matrixWorld)
            );
          "E" === e
            ? (this.rotationAxis.copy(this.eye),
              (this.rotationAngle = this.pointEnd.angleTo(this.pointStart)),
              this._startNorm.copy(this.pointStart).normalize(),
              this._endNorm.copy(this.pointEnd).normalize(),
              (this.rotationAngle *=
                this._endNorm.cross(this._startNorm).dot(this.eye) < 0
                  ? 1
                  : -1))
            : "XYZE" === e
            ? (this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),
              (this.rotationAngle =
                this._offset.dot(fc.copy(this.rotationAxis).cross(this.eye)) *
                t))
            : ("X" !== e && "Y" !== e && "Z" !== e) ||
              (this.rotationAxis.copy(yc[e]),
              fc.copy(yc[e]),
              "local" === r && fc.applyQuaternion(this.worldQuaternion),
              (this.rotationAngle =
                this._offset.dot(fc.cross(this.eye).normalize()) * t)),
            this.rotationSnap &&
              (this.rotationAngle =
                Math.round(this.rotationAngle / this.rotationSnap) *
                this.rotationSnap),
            "local" === r && "E" !== e && "XYZE" !== e
              ? (i.quaternion.copy(this._quaternionStart),
                i.quaternion
                  .multiply(
                    vc.setFromAxisAngle(this.rotationAxis, this.rotationAngle)
                  )
                  .normalize())
              : (this.rotationAxis.applyQuaternion(this._parentQuaternionInv),
                i.quaternion.copy(
                  vc.setFromAxisAngle(this.rotationAxis, this.rotationAngle)
                ),
                i.quaternion.multiply(this._quaternionStart).normalize());
        }
        this.dispatchEvent(xc), this.dispatchEvent(bc);
      }
    }
    pointerUp(t) {
      0 === t.button &&
        (this.dragging &&
          null !== this.axis &&
          ((wc.mode = this.mode), this.dispatchEvent(wc)),
        (this.dragging = !1),
        (this.axis = null));
    }
    dispose() {
      this.domElement.removeEventListener("pointerdown", this._onPointerDown),
        this.domElement.removeEventListener(
          "pointermove",
          this._onPointerHover
        ),
        this.domElement.ownerDocument.removeEventListener(
          "pointermove",
          this._onPointerMove
        ),
        this.domElement.ownerDocument.removeEventListener(
          "pointerup",
          this._onPointerUp
        ),
        this.traverse(function (t) {
          t.geometry && t.geometry.dispose(),
            t.material && t.material.dispose();
        });
    }
    attach(t) {
      return (this.object = t), (this.visible = !0), this;
    }
    detach() {
      return (
        (this.object = void 0), (this.visible = !1), (this.axis = null), this
      );
    }
    getMode() {
      return this.mode;
    }
    setMode(t) {
      this.mode = t;
    }
    setTranslationSnap(t) {
      this.translationSnap = t;
    }
    setRotationSnap(t) {
      this.rotationSnap = t;
    }
    setScaleSnap(t) {
      this.scaleSnap = t;
    }
    setSize(t) {
      this.size = t;
    }
    getSpace() {
      return this.space;
    }
    setSpace(t) {
      this.space = t;
    }
    update() {
      console.warn(
        "THREE.TransformControls: update function has no more functionality and therefore has been deprecated."
      );
    }
  }
  function Sc(t) {
    if (this.domElement.ownerDocument.pointerLockElement)
      return { x: 0, y: 0, button: t.button };
    {
      const e = t.changedTouches ? t.changedTouches[0] : t,
        n = this.domElement.getBoundingClientRect();
      return {
        x: ((e.clientX - n.left) / n.width) * 2 - 1,
        y: (-(e.clientY - n.top) / n.height) * 2 + 1,
        button: t.button,
      };
    }
  }
  function Ec(t) {
    if (this.enabled)
      switch (t.pointerType) {
        case "mouse":
        case "pen":
          this.pointerHover(this._getPointer(t));
      }
  }
  function Tc(t) {
    this.enabled &&
      ((this.domElement.style.touchAction = "none"),
      this.domElement.ownerDocument.addEventListener(
        "pointermove",
        this._onPointerMove
      ),
      this.pointerHover(this._getPointer(t)),
      this.pointerDown(this._getPointer(t)));
  }
  function Lc(t) {
    this.enabled && this.pointerMove(this._getPointer(t));
  }
  function Ac(t) {
    this.enabled &&
      ((this.domElement.style.touchAction = ""),
      this.domElement.ownerDocument.removeEventListener(
        "pointermove",
        this._onPointerMove
      ),
      this.pointerUp(this._getPointer(t)));
  }
  function Rc(t, e, n) {
    const i = e.intersectObject(t, !0);
    for (let t = 0; t < i.length; t++)
      if (i[t].object.visible || n) return i[t];
    return !1;
  }
  Mc.prototype.isTransformControls = !0;
  const Pc = new un(),
    Cc = new Me(0, 1, 0),
    Ic = new Me(0, 0, 0),
    Dc = new tn(),
    Nc = new be(),
    zc = new be(),
    Oc = new Me(),
    Bc = new tn(),
    Fc = new Me(1, 0, 0),
    Hc = new Me(0, 1, 0),
    Uc = new Me(0, 0, 1),
    Gc = new Me(),
    Vc = new Me(),
    kc = new Me();
  class Wc extends Tn {
    constructor() {
      super(), (this.type = "TransformControlsGizmo");
      const t = new Jn({
          depthTest: !1,
          depthWrite: !1,
          transparent: !0,
          side: 2,
          fog: !1,
          toneMapped: !1,
        }),
        e = new Ba({
          depthTest: !1,
          depthWrite: !1,
          transparent: !0,
          linewidth: 1,
          fog: !1,
          toneMapped: !1,
        }),
        n = t.clone();
      n.opacity = 0.15;
      const i = t.clone();
      i.opacity = 0.33;
      const r = t.clone();
      r.color.set(16711680);
      const s = t.clone();
      s.color.set(65280);
      const a = t.clone();
      a.color.set(255);
      const o = t.clone();
      o.opacity = 0.25;
      const l = o.clone();
      l.color.set(16776960);
      const c = o.clone();
      c.color.set(65535);
      const h = o.clone();
      h.color.set(16711935);
      t.clone().color.set(16776960);
      const u = e.clone();
      u.color.set(16711680);
      const d = e.clone();
      d.color.set(65280);
      const p = e.clone();
      p.color.set(255);
      const m = e.clone();
      m.color.set(65535);
      const f = e.clone();
      f.color.set(16711935);
      const g = e.clone();
      g.color.set(16776960);
      const v = e.clone();
      v.color.set(7895160);
      const y = g.clone();
      y.opacity = 0.25;
      const x = new Ka(0, 0.05, 0.2, 12, 1, !1),
        _ = new Ii(0.125, 0.125, 0.125),
        w = new di();
      function b(t, e) {
        const n = new di(),
          i = [];
        for (let n = 0; n <= 64 * e; ++n)
          i.push(
            0,
            Math.cos((n / 32) * Math.PI) * t,
            Math.sin((n / 32) * Math.PI) * t
          );
        return n.setAttribute("position", new ii(i, 3)), n;
      }
      w.setAttribute("position", new ii([0, 0, 0, 1, 0, 0], 3));
      const M = {
          X: [
            [new Pi(x, r), [1, 0, 0], [0, 0, -Math.PI / 2], null, "fwd"],
            [new Pi(x, r), [1, 0, 0], [0, 0, Math.PI / 2], null, "bwd"],
            [new ka(w, u)],
          ],
          Y: [
            [new Pi(x, s), [0, 1, 0], null, null, "fwd"],
            [new Pi(x, s), [0, 1, 0], [Math.PI, 0, 0], null, "bwd"],
            [new ka(w, d), null, [0, 0, Math.PI / 2]],
          ],
          Z: [
            [new Pi(x, a), [0, 0, 1], [Math.PI / 2, 0, 0], null, "fwd"],
            [new Pi(x, a), [0, 0, 1], [-Math.PI / 2, 0, 0], null, "bwd"],
            [new ka(w, p), null, [0, -Math.PI / 2, 0]],
          ],
          XYZ: [[new Pi(new Io(0.1, 0), o.clone()), [0, 0, 0], [0, 0, 0]]],
          XY: [
            [new Pi(new Zi(0.295, 0.295), l.clone()), [0.15, 0.15, 0]],
            [new ka(w, g), [0.18, 0.3, 0], null, [0.125, 1, 1]],
            [new ka(w, g), [0.3, 0.18, 0], [0, 0, Math.PI / 2], [0.125, 1, 1]],
          ],
          YZ: [
            [
              new Pi(new Zi(0.295, 0.295), c.clone()),
              [0, 0.15, 0.15],
              [0, Math.PI / 2, 0],
            ],
            [new ka(w, m), [0, 0.18, 0.3], [0, 0, Math.PI / 2], [0.125, 1, 1]],
            [new ka(w, m), [0, 0.3, 0.18], [0, -Math.PI / 2, 0], [0.125, 1, 1]],
          ],
          XZ: [
            [
              new Pi(new Zi(0.295, 0.295), h.clone()),
              [0.15, 0, 0.15],
              [-Math.PI / 2, 0, 0],
            ],
            [new ka(w, f), [0.18, 0, 0.3], null, [0.125, 1, 1]],
            [new ka(w, f), [0.3, 0, 0.18], [0, -Math.PI / 2, 0], [0.125, 1, 1]],
          ],
        },
        S = {
          X: [
            [
              new Pi(new Ka(0.2, 0, 1, 4, 1, !1), n),
              [0.6, 0, 0],
              [0, 0, -Math.PI / 2],
            ],
          ],
          Y: [[new Pi(new Ka(0.2, 0, 1, 4, 1, !1), n), [0, 0.6, 0]]],
          Z: [
            [
              new Pi(new Ka(0.2, 0, 1, 4, 1, !1), n),
              [0, 0, 0.6],
              [Math.PI / 2, 0, 0],
            ],
          ],
          XYZ: [[new Pi(new Io(0.2, 0), n)]],
          XY: [[new Pi(new Zi(0.4, 0.4), n), [0.2, 0.2, 0]]],
          YZ: [
            [new Pi(new Zi(0.4, 0.4), n), [0, 0.2, 0.2], [0, Math.PI / 2, 0]],
          ],
          XZ: [
            [new Pi(new Zi(0.4, 0.4), n), [0.2, 0, 0.2], [-Math.PI / 2, 0, 0]],
          ],
        },
        E = {
          START: [[new Pi(new Io(0.01, 2), i), null, null, null, "helper"]],
          END: [[new Pi(new Io(0.01, 2), i), null, null, null, "helper"]],
          DELTA: [
            [
              new ka(
                (function () {
                  const t = new di();
                  return (
                    t.setAttribute("position", new ii([0, 0, 0, 1, 1, 1], 3)), t
                  );
                })(),
                i
              ),
              null,
              null,
              null,
              "helper",
            ],
          ],
          X: [
            [new ka(w, i.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"],
          ],
          Y: [
            [
              new ka(w, i.clone()),
              [0, -1e3, 0],
              [0, 0, Math.PI / 2],
              [1e6, 1, 1],
              "helper",
            ],
          ],
          Z: [
            [
              new ka(w, i.clone()),
              [0, 0, -1e3],
              [0, -Math.PI / 2, 0],
              [1e6, 1, 1],
              "helper",
            ],
          ],
        },
        T = {
          X: [
            [new ka(b(1, 0.5), u)],
            [new Pi(new Io(0.04, 0), r), [0, 0, 0.99], null, [1, 3, 1]],
          ],
          Y: [
            [new ka(b(1, 0.5), d), null, [0, 0, -Math.PI / 2]],
            [new Pi(new Io(0.04, 0), s), [0, 0, 0.99], null, [3, 1, 1]],
          ],
          Z: [
            [new ka(b(1, 0.5), p), null, [0, Math.PI / 2, 0]],
            [new Pi(new Io(0.04, 0), a), [0.99, 0, 0], null, [1, 3, 1]],
          ],
          E: [
            [new ka(b(1.25, 1), y), null, [0, Math.PI / 2, 0]],
            [
              new Pi(new Ka(0.03, 0, 0.15, 4, 1, !1), y),
              [1.17, 0, 0],
              [0, 0, -Math.PI / 2],
              [1, 1, 0.001],
            ],
            [
              new Pi(new Ka(0.03, 0, 0.15, 4, 1, !1), y),
              [-1.17, 0, 0],
              [0, 0, Math.PI / 2],
              [1, 1, 0.001],
            ],
            [
              new Pi(new Ka(0.03, 0, 0.15, 4, 1, !1), y),
              [0, -1.17, 0],
              [Math.PI, 0, 0],
              [1, 1, 0.001],
            ],
            [
              new Pi(new Ka(0.03, 0, 0.15, 4, 1, !1), y),
              [0, 1.17, 0],
              [0, 0, 0],
              [1, 1, 0.001],
            ],
          ],
          XYZE: [[new ka(b(1, 1), v), null, [0, Math.PI / 2, 0]]],
        },
        L = {
          AXIS: [
            [new ka(w, i.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"],
          ],
        },
        A = {
          X: [
            [
              new Pi(new zo(1, 0.1, 4, 24), n),
              [0, 0, 0],
              [0, -Math.PI / 2, -Math.PI / 2],
            ],
          ],
          Y: [
            [new Pi(new zo(1, 0.1, 4, 24), n), [0, 0, 0], [Math.PI / 2, 0, 0]],
          ],
          Z: [
            [new Pi(new zo(1, 0.1, 4, 24), n), [0, 0, 0], [0, 0, -Math.PI / 2]],
          ],
          E: [[new Pi(new zo(1.25, 0.1, 2, 24), n)]],
          XYZE: [[new Pi(new No(0.7, 10, 8), n)]],
        },
        R = {
          X: [
            [new Pi(_, r), [0.8, 0, 0], [0, 0, -Math.PI / 2]],
            [new ka(w, u), null, null, [0.8, 1, 1]],
          ],
          Y: [
            [new Pi(_, s), [0, 0.8, 0]],
            [new ka(w, d), null, [0, 0, Math.PI / 2], [0.8, 1, 1]],
          ],
          Z: [
            [new Pi(_, a), [0, 0, 0.8], [Math.PI / 2, 0, 0]],
            [new ka(w, p), null, [0, -Math.PI / 2, 0], [0.8, 1, 1]],
          ],
          XY: [
            [new Pi(_, l), [0.85, 0.85, 0], null, [2, 2, 0.2]],
            [new ka(w, g), [0.855, 0.98, 0], null, [0.125, 1, 1]],
            [
              new ka(w, g),
              [0.98, 0.855, 0],
              [0, 0, Math.PI / 2],
              [0.125, 1, 1],
            ],
          ],
          YZ: [
            [new Pi(_, c), [0, 0.85, 0.85], null, [0.2, 2, 2]],
            [
              new ka(w, m),
              [0, 0.855, 0.98],
              [0, 0, Math.PI / 2],
              [0.125, 1, 1],
            ],
            [
              new ka(w, m),
              [0, 0.98, 0.855],
              [0, -Math.PI / 2, 0],
              [0.125, 1, 1],
            ],
          ],
          XZ: [
            [new Pi(_, h), [0.85, 0, 0.85], null, [2, 0.2, 2]],
            [new ka(w, f), [0.855, 0, 0.98], null, [0.125, 1, 1]],
            [
              new ka(w, f),
              [0.98, 0, 0.855],
              [0, -Math.PI / 2, 0],
              [0.125, 1, 1],
            ],
          ],
          XYZX: [[new Pi(new Ii(0.125, 0.125, 0.125), o.clone()), [1.1, 0, 0]]],
          XYZY: [[new Pi(new Ii(0.125, 0.125, 0.125), o.clone()), [0, 1.1, 0]]],
          XYZZ: [[new Pi(new Ii(0.125, 0.125, 0.125), o.clone()), [0, 0, 1.1]]],
        },
        P = {
          X: [
            [
              new Pi(new Ka(0.2, 0, 0.8, 4, 1, !1), n),
              [0.5, 0, 0],
              [0, 0, -Math.PI / 2],
            ],
          ],
          Y: [[new Pi(new Ka(0.2, 0, 0.8, 4, 1, !1), n), [0, 0.5, 0]]],
          Z: [
            [
              new Pi(new Ka(0.2, 0, 0.8, 4, 1, !1), n),
              [0, 0, 0.5],
              [Math.PI / 2, 0, 0],
            ],
          ],
          XY: [[new Pi(_, n), [0.85, 0.85, 0], null, [3, 3, 0.2]]],
          YZ: [[new Pi(_, n), [0, 0.85, 0.85], null, [0.2, 3, 3]]],
          XZ: [[new Pi(_, n), [0.85, 0, 0.85], null, [3, 0.2, 3]]],
          XYZX: [[new Pi(new Ii(0.2, 0.2, 0.2), n), [1.1, 0, 0]]],
          XYZY: [[new Pi(new Ii(0.2, 0.2, 0.2), n), [0, 1.1, 0]]],
          XYZZ: [[new Pi(new Ii(0.2, 0.2, 0.2), n), [0, 0, 1.1]]],
        },
        C = {
          X: [
            [new ka(w, i.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"],
          ],
          Y: [
            [
              new ka(w, i.clone()),
              [0, -1e3, 0],
              [0, 0, Math.PI / 2],
              [1e6, 1, 1],
              "helper",
            ],
          ],
          Z: [
            [
              new ka(w, i.clone()),
              [0, 0, -1e3],
              [0, -Math.PI / 2, 0],
              [1e6, 1, 1],
              "helper",
            ],
          ],
        };
      function I(t) {
        const e = new Tn();
        for (const n in t)
          for (let i = t[n].length; i--; ) {
            const r = t[n][i][0].clone(),
              s = t[n][i][1],
              a = t[n][i][2],
              o = t[n][i][3],
              l = t[n][i][4];
            (r.name = n),
              (r.tag = l),
              s && r.position.set(s[0], s[1], s[2]),
              a && r.rotation.set(a[0], a[1], a[2]),
              o && r.scale.set(o[0], o[1], o[2]),
              r.updateMatrix();
            const c = r.geometry.clone();
            c.applyMatrix4(r.matrix),
              (r.geometry = c),
              (r.renderOrder = 1 / 0),
              r.position.set(0, 0, 0),
              r.rotation.set(0, 0, 0),
              r.scale.set(1, 1, 1),
              e.add(r);
          }
        return e;
      }
      (this.gizmo = {}),
        (this.picker = {}),
        (this.helper = {}),
        this.add((this.gizmo.translate = I(M))),
        this.add((this.gizmo.rotate = I(T))),
        this.add((this.gizmo.scale = I(R))),
        this.add((this.picker.translate = I(S))),
        this.add((this.picker.rotate = I(A))),
        this.add((this.picker.scale = I(P))),
        this.add((this.helper.translate = I(E))),
        this.add((this.helper.rotate = I(L))),
        this.add((this.helper.scale = I(C))),
        (this.picker.translate.visible = !1),
        (this.picker.rotate.visible = !1),
        (this.picker.scale.visible = !1);
    }
    updateMatrixWorld(t) {
      const e =
        "local" === ("scale" === this.mode ? this.space : "local")
          ? this.worldQuaternion
          : zc;
      (this.gizmo.translate.visible = "translate" === this.mode),
        (this.gizmo.rotate.visible = "rotate" === this.mode),
        (this.gizmo.scale.visible = "scale" === this.mode),
        (this.helper.translate.visible = "translate" === this.mode),
        (this.helper.rotate.visible = "rotate" === this.mode),
        (this.helper.scale.visible = "scale" === this.mode);
      let n = [];
      (n = n.concat(this.picker[this.mode].children)),
        (n = n.concat(this.gizmo[this.mode].children)),
        (n = n.concat(this.helper[this.mode].children));
      for (let t = 0; t < n.length; t++) {
        const i = n[t];
        let r;
        if (
          ((i.visible = !0),
          i.rotation.set(0, 0, 0),
          i.position.copy(this.worldPosition),
          (r = this.camera.isOrthographicCamera
            ? (this.camera.top - this.camera.bottom) / this.camera.zoom
            : this.worldPosition.distanceTo(this.cameraPosition) *
              Math.min(
                (1.9 * Math.tan((Math.PI * this.camera.fov) / 360)) /
                  this.camera.zoom,
                7
              )),
          i.scale.set(1, 1, 1).multiplyScalar((r * this.size) / 7),
          "helper" !== i.tag)
        ) {
          if (
            (i.quaternion.copy(e),
            "translate" === this.mode || "scale" === this.mode)
          ) {
            const t = 0.99,
              n = 0.2,
              r = 0;
            ("X" !== i.name && "XYZX" !== i.name) ||
              (Math.abs(Cc.copy(Fc).applyQuaternion(e).dot(this.eye)) > t &&
                (i.scale.set(1e-10, 1e-10, 1e-10), (i.visible = !1))),
              ("Y" !== i.name && "XYZY" !== i.name) ||
                (Math.abs(Cc.copy(Hc).applyQuaternion(e).dot(this.eye)) > t &&
                  (i.scale.set(1e-10, 1e-10, 1e-10), (i.visible = !1))),
              ("Z" !== i.name && "XYZZ" !== i.name) ||
                (Math.abs(Cc.copy(Uc).applyQuaternion(e).dot(this.eye)) > t &&
                  (i.scale.set(1e-10, 1e-10, 1e-10), (i.visible = !1))),
              "XY" === i.name &&
                Math.abs(Cc.copy(Uc).applyQuaternion(e).dot(this.eye)) < n &&
                (i.scale.set(1e-10, 1e-10, 1e-10), (i.visible = !1)),
              "YZ" === i.name &&
                Math.abs(Cc.copy(Fc).applyQuaternion(e).dot(this.eye)) < n &&
                (i.scale.set(1e-10, 1e-10, 1e-10), (i.visible = !1)),
              "XZ" === i.name &&
                Math.abs(Cc.copy(Hc).applyQuaternion(e).dot(this.eye)) < n &&
                (i.scale.set(1e-10, 1e-10, 1e-10), (i.visible = !1)),
              -1 !== i.name.search("X") &&
                (Cc.copy(Fc).applyQuaternion(e).dot(this.eye) < r
                  ? "fwd" === i.tag
                    ? (i.visible = !1)
                    : (i.scale.x *= -1)
                  : "bwd" === i.tag && (i.visible = !1)),
              -1 !== i.name.search("Y") &&
                (Cc.copy(Hc).applyQuaternion(e).dot(this.eye) < r
                  ? "fwd" === i.tag
                    ? (i.visible = !1)
                    : (i.scale.y *= -1)
                  : "bwd" === i.tag && (i.visible = !1)),
              -1 !== i.name.search("Z") &&
                (Cc.copy(Uc).applyQuaternion(e).dot(this.eye) < r
                  ? "fwd" === i.tag
                    ? (i.visible = !1)
                    : (i.scale.z *= -1)
                  : "bwd" === i.tag && (i.visible = !1));
          } else
            "rotate" === this.mode &&
              (Nc.copy(e),
              Cc.copy(this.eye).applyQuaternion(vc.copy(e).invert()),
              -1 !== i.name.search("E") &&
                i.quaternion.setFromRotationMatrix(Dc.lookAt(this.eye, Ic, Hc)),
              "X" === i.name &&
                (vc.setFromAxisAngle(Fc, Math.atan2(-Cc.y, Cc.z)),
                vc.multiplyQuaternions(Nc, vc),
                i.quaternion.copy(vc)),
              "Y" === i.name &&
                (vc.setFromAxisAngle(Hc, Math.atan2(Cc.x, Cc.z)),
                vc.multiplyQuaternions(Nc, vc),
                i.quaternion.copy(vc)),
              "Z" === i.name &&
                (vc.setFromAxisAngle(Uc, Math.atan2(Cc.y, Cc.x)),
                vc.multiplyQuaternions(Nc, vc),
                i.quaternion.copy(vc)));
          (i.visible = i.visible && (-1 === i.name.indexOf("X") || this.showX)),
            (i.visible =
              i.visible && (-1 === i.name.indexOf("Y") || this.showY)),
            (i.visible =
              i.visible && (-1 === i.name.indexOf("Z") || this.showZ)),
            (i.visible =
              i.visible &&
              (-1 === i.name.indexOf("E") ||
                (this.showX && this.showY && this.showZ))),
            (i.material._opacity = i.material._opacity || i.material.opacity),
            (i.material._color = i.material._color || i.material.color.clone()),
            i.material.color.copy(i.material._color),
            (i.material.opacity = i.material._opacity),
            this.enabled
              ? this.axis &&
                (i.name === this.axis ||
                this.axis.split("").some(function (t) {
                  return i.name === t;
                })
                  ? ((i.material.opacity = 1),
                    i.material.color.lerp(new $n(1, 1, 1), 0.5))
                  : ((i.material.opacity *= 0.25),
                    i.material.color.lerp(new $n(1, 1, 1), 0.5)))
              : ((i.material.opacity *= 0.5),
                i.material.color.lerp(new $n(1, 1, 1), 0.5));
        } else
          (i.visible = !1),
            "AXIS" === i.name
              ? (i.position.copy(this.worldPositionStart),
                (i.visible = !!this.axis),
                "X" === this.axis &&
                  (vc.setFromEuler(Pc.set(0, 0, 0)),
                  i.quaternion.copy(e).multiply(vc),
                  Math.abs(Cc.copy(Fc).applyQuaternion(e).dot(this.eye)) >
                    0.9 && (i.visible = !1)),
                "Y" === this.axis &&
                  (vc.setFromEuler(Pc.set(0, 0, Math.PI / 2)),
                  i.quaternion.copy(e).multiply(vc),
                  Math.abs(Cc.copy(Hc).applyQuaternion(e).dot(this.eye)) >
                    0.9 && (i.visible = !1)),
                "Z" === this.axis &&
                  (vc.setFromEuler(Pc.set(0, Math.PI / 2, 0)),
                  i.quaternion.copy(e).multiply(vc),
                  Math.abs(Cc.copy(Uc).applyQuaternion(e).dot(this.eye)) >
                    0.9 && (i.visible = !1)),
                "XYZE" === this.axis &&
                  (vc.setFromEuler(Pc.set(0, Math.PI / 2, 0)),
                  Cc.copy(this.rotationAxis),
                  i.quaternion.setFromRotationMatrix(Dc.lookAt(Ic, Cc, Hc)),
                  i.quaternion.multiply(vc),
                  (i.visible = this.dragging)),
                "E" === this.axis && (i.visible = !1))
              : "START" === i.name
              ? (i.position.copy(this.worldPositionStart),
                (i.visible = this.dragging))
              : "END" === i.name
              ? (i.position.copy(this.worldPosition),
                (i.visible = this.dragging))
              : "DELTA" === i.name
              ? (i.position.copy(this.worldPositionStart),
                i.quaternion.copy(this.worldQuaternionStart),
                fc
                  .set(1e-10, 1e-10, 1e-10)
                  .add(this.worldPositionStart)
                  .sub(this.worldPosition)
                  .multiplyScalar(-1),
                fc.applyQuaternion(this.worldQuaternionStart.clone().invert()),
                i.scale.copy(fc),
                (i.visible = this.dragging))
              : (i.quaternion.copy(e),
                this.dragging
                  ? i.position.copy(this.worldPositionStart)
                  : i.position.copy(this.worldPosition),
                this.axis && (i.visible = -1 !== this.axis.search(i.name)));
      }
      super.updateMatrixWorld(t);
    }
  }
  Wc.prototype.isTransformControlsGizmo = !0;
  class jc extends Pi {
    constructor() {
      super(
        new Zi(1e5, 1e5, 2, 2),
        new Jn({
          visible: !1,
          wireframe: !0,
          side: 2,
          transparent: !0,
          opacity: 0.1,
          toneMapped: !1,
        })
      ),
        (this.type = "TransformControlsPlane");
    }
    updateMatrixWorld(t) {
      let e = this.space;
      switch (
        (this.position.copy(this.worldPosition),
        "scale" === this.mode && (e = "local"),
        Gc.copy(Fc).applyQuaternion("local" === e ? this.worldQuaternion : zc),
        Vc.copy(Hc).applyQuaternion("local" === e ? this.worldQuaternion : zc),
        kc.copy(Uc).applyQuaternion("local" === e ? this.worldQuaternion : zc),
        Cc.copy(Vc),
        this.mode)
      ) {
        case "translate":
        case "scale":
          switch (this.axis) {
            case "X":
              Cc.copy(this.eye).cross(Gc), Oc.copy(Gc).cross(Cc);
              break;
            case "Y":
              Cc.copy(this.eye).cross(Vc), Oc.copy(Vc).cross(Cc);
              break;
            case "Z":
              Cc.copy(this.eye).cross(kc), Oc.copy(kc).cross(Cc);
              break;
            case "XY":
              Oc.copy(kc);
              break;
            case "YZ":
              Oc.copy(Gc);
              break;
            case "XZ":
              Cc.copy(kc), Oc.copy(Vc);
              break;
            case "XYZ":
            case "E":
              Oc.set(0, 0, 0);
          }
          break;
        default:
          Oc.set(0, 0, 0);
      }
      0 === Oc.length()
        ? this.quaternion.copy(this.cameraQuaternion)
        : (Bc.lookAt(fc.set(0, 0, 0), Oc, Cc),
          this.quaternion.setFromRotationMatrix(Bc)),
        super.updateMatrixWorld(t);
    }
  }
  function Xc(e) {
    let n;
    return {
      c() {
        (n = m("canvas")), b(n, "display", e[1] ? "block" : "none");
      },
      m(t, i) {
        u(t, n, i), e[2](n);
      },
      p(t, [e]) {
        2 & e && b(n, "display", t[1] ? "block" : "none");
      },
      i: t,
      o: t,
      d(t) {
        t && d(n), e[2](null);
      },
    };
  }
  function qc(t, e, n) {
    let i, r, s;
    o(t, ct, (t) => n(13, (i = t))),
      o(t, ht, (t) => n(14, (r = t))),
      o(t, lt, (t) => n(1, (s = t)));
    var a,
      l,
      h,
      u,
      d,
      p,
      m,
      f = void 0,
      g = !1,
      v = !1,
      y = !1;
    ht.subscribe((t) => {
      d &&
        (d.getSpace() != t.TransformSpace && d.setSpace(t.TransformSpace),
        d.getMode() != t.TransformMode && d.setMode(t.TransformMode));
    });
    at("UpdatePositions", (t) => {
      var e, n;
      l.position.set(t.Cam.Position.x, t.Cam.Position.z, -t.Cam.Position.y),
        l.rotation.set(
          de.degToRad(t.Cam.Rotation.x),
          de.degToRad(
            ((e = t.Cam.Rotation.x),
            (n = t.Cam.Rotation.z),
            e > 0 && e < 90 ? n : (e > -180 && e < -90) || e > 0 ? -n : n)
          ),
          de.degToRad(t.Cam.Rotation.y)
        ),
        (l.fov = t.Cam.Fov),
        l.updateProjectionMatrix(),
        u.position.set(
          t.Entity.Position.x,
          t.Entity.Position.z,
          -t.Entity.Position.y
        ),
        u.rotation.set(
          de.degToRad(t.Entity.Rotation.x),
          de.degToRad(t.Entity.Rotation.z),
          de.degToRad(-t.Entity.Rotation.y)
        );
    }),
      window.addEventListener("keyup", (t) => {
        if ("BODY" == t.target.tagName)
          switch (t.which) {
            case 82: // r
              c(ht, (r.TransformMode = "rotate"), r);
              break;
            case 84: // t
              c(ht, (r.TransformMode = "translate"), r);
              break;
            case 46: // delete
              st("Entity/Delete");
              break;
            case 71: // g
              st("Entity/Ground");
          }
      }),
      window.addEventListener("mouseup", (t) => {
        2 == t.button && (y = !1);
      }),
      window.addEventListener("mousemove", (t) => {
        if (y) {
          var e = t.pageX - p,
            n = t.pageY - m;
          e > r.LookSpeedX && (e = r.LookSpeedX),
            e < -r.LookSpeedX && (e = -r.LookSpeedX),
            n > r.LookSpeedY && (n = r.LookSpeedY),
            n < -r.LookSpeedY && (n = -r.LookSpeedY),
            st("Editor/RotateCamera", {
              x: e,
              y: n,
              screenX: document.documentElement.scrollHeight,
              screenY: document.documentElement.scrollWidth,
            }),
            (p = t.pageX),
            (m = t.pageY);
        }
      }),
      window.addEventListener("mousedown", (t) => {
        "CANVAS" != t.target.tagName ||
          g ||
          (0 == t.button
            ? st(
                "Editor/SelectEntity",
                {
                  x: t.pageX / window.innerWidth,
                  y: t.pageY / window.innerHeight,
                },
                (t, e) => {
                  t &&
                    e.Hit &&
                    v !== e.Entity &&
                    st("Editor/GetEntityData", { Entity: e.Entity }, (t, n) => {
                      n.Success
                        ? (u.position.set(
                            n.EntityCoords.x,
                            n.EntityCoords.z,
                            -n.EntityCoords.y
                          ),
                          u.rotation.set(
                            de.degToRad(n.EntityRot.pitch),
                            de.degToRad(n.EntityRot.yaw),
                            de.degToRad(-n.EntityRot.roll)
                          ),
                          ct.set(n),
                          (v = e.Entity),
                          (d.enabled = !0),
                          ot(
                            "CurrentEntityData: " + JSON.stringify(n, void 0, 2)
                          ))
                        : ((v = !1),
                          ct.set({}),
                          (d.enabled = !1),
                          ot("Failed to get entity data. " + e.Entity));
                    });
                }
              )
            : 2 == t.button && ((y = !0), (p = t.pageX), (m = t.pageY)));
      });
    const x = () => {
      if ((requestAnimationFrame(x), v)) {
        var t = { ...i };
        (t.EntityCoords = {
          x: u.position.x,
          y: -u.position.z,
          z: u.position.y,
        }),
          (t.EntityRot = {
            pitch: de.radToDeg(u.rotation.x),
            roll: de.radToDeg(-u.rotation.z),
            yaw: de.radToDeg(u.rotation.y),
          }),
          ct.set(t),
          st("Editor/EditEntity", {
            Entity: v,
            Alpha: (e = i).EntityAlpha,
            x: e.EntityCoords.x,
            y: e.EntityCoords.y,
            z: e.EntityCoords.z,
            pitch: e.EntityRot.pitch,
            roll: e.EntityRot.roll,
            yaw: e.EntityRot.yaw,
          });
      }
      var e;
      h.render(a, l);
    };
    return (
      T(() => {
        (a = new la()),
          ((l = new Fi(
            50,
            window.innerWidth / window.innerHeight,
            0.1,
            1e3
          )).rotation.order = "YZX"),
          (l.position.z = 2),
          (h = new oa({ alpha: !0, canvas: f })).setSize(
            window.innerWidth,
            window.innerHeight
          );
        const t = new Ii(),
          e = new Bo({ color: 16711935, opacity: 0, transparent: !0 });
        ((u = new Pi(t, e)).rotation.order = "YZX"),
          u.scale.set(1, 1, 1),
          a.add(u),
          (d = new Mc(l, f)).setSpace(r.TransformSpace),
          d.attach(u),
          a.add(d),
          d.addEventListener("mouseDown", (t) => {
            g = !0;
          }),
          d.addEventListener("mouseUp", (t) => {
            if ((console.log(v), (g = !1), v)) {
              var e = { ...i };
              (e.EntityCoords = {
                x: u.position.x,
                y: -u.position.z,
                z: u.position.y,
              }),
                (e.EntityRot = {
                  pitch: u.rotation.x,
                  roll: -u.rotation.z,
                  yaw: u.rotation.y,
                }),
                ct.set(e);
            }
          }),
          x();
      }),
      [
        f,
        s,
        function (t) {
          R[t ? "unshift" : "push"](() => {
            n(0, (f = t));
          });
        },
      ]
    );
  }
  jc.prototype.isTransformControlsPlane = !0;
  class Yc extends Q {
    constructor(t) {
      super(), J(this, t, qc, Xc, a, {});
    }
  }
  function Zc(e) {
    let n, i, r, s, a, o, l;
    return (
      (i = new Yc({})),
      (s = new St({})),
      (o = new ft({})),
      {
        c() {
          (n = m("div")),
            q(i.$$.fragment),
            (r = g()),
            q(s.$$.fragment),
            (a = g()),
            q(o.$$.fragment),
            x(n, "class", "root");
        },
        m(t, e) {
          u(t, n, e),
            Y(i, n, null),
            h(n, r),
            Y(s, n, null),
            h(n, a),
            Y(o, n, null),
            (l = !0);
        },
        p: t,
        i(t) {
          l ||
            (W(i.$$.fragment, t),
            W(s.$$.fragment, t),
            W(o.$$.fragment, t),
            (l = !0));
        },
        o(t) {
          j(i.$$.fragment, t),
            j(s.$$.fragment, t),
            j(o.$$.fragment, t),
            (l = !1);
        },
        d(t) {
          t && d(n), Z(i), Z(s), Z(o);
        },
      }
    );
  }
  function $c(t, e, n) {
    let i;
    var r, s, a, l;
    return (
      o(t, lt, (t) => n(0, (i = t))),
      at("SetEditor", (t) => {
        lt.set(t.State);
      }),
      (r = "CloseEditor"),
      (s = "Editor/Close"),
      (a = () => i),
      (l = {}),
      window.addEventListener("keyup", (t) => {
        27 == t.keyCode &&
          a() &&
          (st(s, l),
          r &&
            window.dispatchEvent(
              new MessageEvent("message", { data: { Action: r, ...l } })
            ));
      }),
      []
    );
  }
  return new (class extends Q {
    constructor(t) {
      super(), J(this, t, $c, Zc, a, {});
    }
  })({ target: document.body });
})();
