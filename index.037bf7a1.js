function e(e, t, n, r) {
  Object.defineProperty(e, t, { get: n, set: r, enumerable: !0, configurable: !0 });
}
function t(e) {
  return e && e.__esModule ? e.default : e;
}
var n =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  r = {},
  a = {},
  l = n.parcelRequire2359;
null == l &&
  (((l = function (e) {
    if (e in r) return r[e].exports;
    if (e in a) {
      var t = a[e];
      delete a[e];
      var n = { id: e, exports: {} };
      return (r[e] = n), t.call(n.exports, n, n.exports), n.exports;
    }
    var l = new Error("Cannot find module '" + e + "'");
    throw ((l.code = "MODULE_NOT_FOUND"), l);
  }).register = function (e, t) {
    a[e] = t;
  }),
  (n.parcelRequire2359 = l)),
  l.register("27Lyk", function (t, n) {
    var r, a;
    e(
      t.exports,
      "register",
      () => r,
      (e) => (r = e)
    ),
      e(
        t.exports,
        "resolve",
        () => a,
        (e) => (a = e)
      );
    var l = {};
    (r = function (e) {
      for (var t = Object.keys(e), n = 0; n < t.length; n++) l[t[n]] = e[t[n]];
    }),
      (a = function (e) {
        var t = l[e];
        if (null == t) throw new Error("Could not resolve bundle with id " + e);
        return t;
      });
  }),
  l.register("1b2ls", function (t, n) {
    var r, a, o;
    e(
      t.exports,
      "Fragment",
      () => r,
      (e) => (r = e)
    ),
      e(
        t.exports,
        "jsx",
        () => a,
        (e) => (a = e)
      ),
      e(
        t.exports,
        "jsxs",
        () => o,
        (e) => (o = e)
      );
    var i = l("acw62"),
      u = Symbol.for("react.element"),
      s = Symbol.for("react.fragment"),
      c = Object.prototype.hasOwnProperty,
      f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      d = { key: !0, ref: !0, __self: !0, __source: !0 };
    function p(e, t, n) {
      var r,
        a = {},
        l = null,
        o = null;
      for (r in (void 0 !== n && (l = "" + n),
      void 0 !== t.key && (l = "" + t.key),
      void 0 !== t.ref && (o = t.ref),
      t))
        c.call(t, r) && !d.hasOwnProperty(r) && (a[r] = t[r]);
      if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
      return { $$typeof: u, type: e, key: l, ref: o, props: a, _owner: f.current };
    }
    (r = s), (a = p), (o = p);
  }),
  l.register("acw62", function (e, t) {
    e.exports = l("2pUnB");
  }),
  l.register("2pUnB", function (t, n) {
    var r,
      a,
      l,
      o,
      i,
      u,
      s,
      c,
      f,
      d,
      p,
      m,
      h,
      g,
      v,
      y,
      b,
      w,
      k,
      S,
      x,
      E,
      C,
      P,
      _,
      N,
      T,
      L,
      R,
      z,
      j,
      D,
      I,
      O,
      F;
    e(
      t.exports,
      "Children",
      () => r,
      (e) => (r = e)
    ),
      e(
        t.exports,
        "Component",
        () => a,
        (e) => (a = e)
      ),
      e(
        t.exports,
        "Fragment",
        () => l,
        (e) => (l = e)
      ),
      e(
        t.exports,
        "Profiler",
        () => o,
        (e) => (o = e)
      ),
      e(
        t.exports,
        "PureComponent",
        () => i,
        (e) => (i = e)
      ),
      e(
        t.exports,
        "StrictMode",
        () => u,
        (e) => (u = e)
      ),
      e(
        t.exports,
        "Suspense",
        () => s,
        (e) => (s = e)
      ),
      e(
        t.exports,
        "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
        () => c,
        (e) => (c = e)
      ),
      e(
        t.exports,
        "cloneElement",
        () => f,
        (e) => (f = e)
      ),
      e(
        t.exports,
        "createContext",
        () => d,
        (e) => (d = e)
      ),
      e(
        t.exports,
        "createElement",
        () => p,
        (e) => (p = e)
      ),
      e(
        t.exports,
        "createFactory",
        () => m,
        (e) => (m = e)
      ),
      e(
        t.exports,
        "createRef",
        () => h,
        (e) => (h = e)
      ),
      e(
        t.exports,
        "forwardRef",
        () => g,
        (e) => (g = e)
      ),
      e(
        t.exports,
        "isValidElement",
        () => v,
        (e) => (v = e)
      ),
      e(
        t.exports,
        "lazy",
        () => y,
        (e) => (y = e)
      ),
      e(
        t.exports,
        "memo",
        () => b,
        (e) => (b = e)
      ),
      e(
        t.exports,
        "startTransition",
        () => w,
        (e) => (w = e)
      ),
      e(
        t.exports,
        "unstable_act",
        () => k,
        (e) => (k = e)
      ),
      e(
        t.exports,
        "useCallback",
        () => S,
        (e) => (S = e)
      ),
      e(
        t.exports,
        "useContext",
        () => x,
        (e) => (x = e)
      ),
      e(
        t.exports,
        "useDebugValue",
        () => E,
        (e) => (E = e)
      ),
      e(
        t.exports,
        "useDeferredValue",
        () => C,
        (e) => (C = e)
      ),
      e(
        t.exports,
        "useEffect",
        () => P,
        (e) => (P = e)
      ),
      e(
        t.exports,
        "useId",
        () => _,
        (e) => (_ = e)
      ),
      e(
        t.exports,
        "useImperativeHandle",
        () => N,
        (e) => (N = e)
      ),
      e(
        t.exports,
        "useInsertionEffect",
        () => T,
        (e) => (T = e)
      ),
      e(
        t.exports,
        "useLayoutEffect",
        () => L,
        (e) => (L = e)
      ),
      e(
        t.exports,
        "useMemo",
        () => R,
        (e) => (R = e)
      ),
      e(
        t.exports,
        "useReducer",
        () => z,
        (e) => (z = e)
      ),
      e(
        t.exports,
        "useRef",
        () => j,
        (e) => (j = e)
      ),
      e(
        t.exports,
        "useState",
        () => D,
        (e) => (D = e)
      ),
      e(
        t.exports,
        "useSyncExternalStore",
        () => I,
        (e) => (I = e)
      ),
      e(
        t.exports,
        "useTransition",
        () => O,
        (e) => (O = e)
      ),
      e(
        t.exports,
        "version",
        () => F,
        (e) => (F = e)
      );
    var M = Symbol.for("react.element"),
      A = Symbol.for("react.portal"),
      U = Symbol.for("react.fragment"),
      H = Symbol.for("react.strict_mode"),
      B = Symbol.for("react.profiler"),
      V = Symbol.for("react.provider"),
      W = Symbol.for("react.context"),
      $ = Symbol.for("react.forward_ref"),
      Q = Symbol.for("react.suspense"),
      q = Symbol.for("react.memo"),
      K = Symbol.for("react.lazy"),
      G = Symbol.iterator;
    var Y = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      X = Object.assign,
      Z = {};
    function J(e, t, n) {
      (this.props = e), (this.context = t), (this.refs = Z), (this.updater = n || Y);
    }
    function ee() {}
    function te(e, t, n) {
      (this.props = e), (this.context = t), (this.refs = Z), (this.updater = n || Y);
    }
    (J.prototype.isReactComponent = {}),
      (J.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e)
          throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (J.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (ee.prototype = J.prototype);
    var ne = (te.prototype = new ee());
    (ne.constructor = te), X(ne, J.prototype), (ne.isPureReactComponent = !0);
    var re = Array.isArray,
      ae = Object.prototype.hasOwnProperty,
      le = { current: null },
      oe = { key: !0, ref: !0, __self: !0, __source: !0 };
    function ie(e, t, n) {
      var r,
        a = {},
        l = null,
        o = null;
      if (null != t)
        for (r in (void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (l = "" + t.key), t))
          ae.call(t, r) && !oe.hasOwnProperty(r) && (a[r] = t[r]);
      var i = arguments.length - 2;
      if (1 === i) a.children = n;
      else if (1 < i) {
        for (var u = Array(i), s = 0; s < i; s++) u[s] = arguments[s + 2];
        a.children = u;
      }
      if (e && e.defaultProps) for (r in (i = e.defaultProps)) void 0 === a[r] && (a[r] = i[r]);
      return { $$typeof: M, type: e, key: l, ref: o, props: a, _owner: le.current };
    }
    function ue(e) {
      return "object" == typeof e && null !== e && e.$$typeof === M;
    }
    var se = /\/+/g;
    function ce(e, t) {
      return "object" == typeof e && null !== e && null != e.key
        ? (function (e) {
            var t = { "=": "=0", ":": "=2" };
            return (
              "$" +
              e.replace(/[=:]/g, function (e) {
                return t[e];
              })
            );
          })("" + e.key)
        : t.toString(36);
    }
    function fe(e, t, n, r, a) {
      var l = typeof e;
      ("undefined" !== l && "boolean" !== l) || (e = null);
      var o = !1;
      if (null === e) o = !0;
      else
        switch (l) {
          case "string":
          case "number":
            o = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case M:
              case A:
                o = !0;
            }
        }
      if (o)
        return (
          (a = a((o = e))),
          (e = "" === r ? "." + ce(o, 0) : r),
          re(a)
            ? ((n = ""),
              null != e && (n = e.replace(se, "$&/") + "/"),
              fe(a, t, n, "", function (e) {
                return e;
              }))
            : null != a &&
              (ue(a) &&
                (a = (function (e, t) {
                  return {
                    $$typeof: M,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner,
                  };
                })(
                  a,
                  n +
                    (!a.key || (o && o.key === a.key)
                      ? ""
                      : ("" + a.key).replace(se, "$&/") + "/") +
                    e
                )),
              t.push(a)),
          1
        );
      if (((o = 0), (r = "" === r ? "." : r + ":"), re(e)))
        for (var i = 0; i < e.length; i++) {
          var u = r + ce((l = e[i]), i);
          o += fe(l, t, n, u, a);
        }
      else if (
        ((u = (function (e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (G && e[G]) || e["@@iterator"])
            ? e
            : null;
        })(e)),
        "function" == typeof u)
      )
        for (e = u.call(e), i = 0; !(l = e.next()).done; )
          o += fe((l = l.value), t, n, (u = r + ce(l, i++)), a);
      else if ("object" === l)
        throw (
          ((t = String(e)),
          Error(
            "Objects are not valid as a React child (found: " +
              ("[object Object]" === t
                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                : t) +
              "). If you meant to render a collection of children, use an array instead."
          ))
        );
      return o;
    }
    function de(e, t, n) {
      if (null == e) return e;
      var r = [],
        a = 0;
      return (
        fe(e, r, "", "", function (e) {
          return t.call(n, e, a++);
        }),
        r
      );
    }
    function pe(e) {
      if (-1 === e._status) {
        var t = e._result;
        (t = t()).then(
          function (t) {
            (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
          },
          function (t) {
            (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
          }
        ),
          -1 === e._status && ((e._status = 0), (e._result = t));
      }
      if (1 === e._status) return e._result.default;
      throw e._result;
    }
    var me = { current: null },
      he = { transition: null };
    (r = {
      map: de,
      forEach: function (e, t, n) {
        de(
          e,
          function () {
            t.apply(this, arguments);
          },
          n
        );
      },
      count: function (e) {
        var t = 0;
        return (
          de(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          de(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!ue(e))
          throw Error("React.Children.only expected to receive a single React element child.");
        return e;
      },
    }),
      (a = J),
      (l = U),
      (o = B),
      (i = te),
      (u = H),
      (s = Q),
      (c = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: he, ReactCurrentOwner: le }),
      (f = function (e, t, n) {
        if (null == e)
          throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
              e +
              "."
          );
        var r = X({}, e.props),
          a = e.key,
          l = e.ref,
          o = e._owner;
        if (null != t) {
          if (
            (void 0 !== t.ref && ((l = t.ref), (o = le.current)),
            void 0 !== t.key && (a = "" + t.key),
            e.type && e.type.defaultProps)
          )
            var i = e.type.defaultProps;
          for (u in t)
            ae.call(t, u) &&
              !oe.hasOwnProperty(u) &&
              (r[u] = void 0 === t[u] && void 0 !== i ? i[u] : t[u]);
        }
        var u = arguments.length - 2;
        if (1 === u) r.children = n;
        else if (1 < u) {
          i = Array(u);
          for (var s = 0; s < u; s++) i[s] = arguments[s + 2];
          r.children = i;
        }
        return { $$typeof: M, type: e.type, key: a, ref: l, props: r, _owner: o };
      }),
      (d = function (e) {
        return (
          ((e = {
            $$typeof: W,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }).Provider = { $$typeof: V, _context: e }),
          (e.Consumer = e)
        );
      }),
      (p = ie),
      (m = function (e) {
        var t = ie.bind(null, e);
        return (t.type = e), t;
      }),
      (h = function () {
        return { current: null };
      }),
      (g = function (e) {
        return { $$typeof: $, render: e };
      }),
      (v = ue),
      (y = function (e) {
        return { $$typeof: K, _payload: { _status: -1, _result: e }, _init: pe };
      }),
      (b = function (e, t) {
        return { $$typeof: q, type: e, compare: void 0 === t ? null : t };
      }),
      (w = function (e) {
        var t = he.transition;
        he.transition = {};
        try {
          e();
        } finally {
          he.transition = t;
        }
      }),
      (k = function () {
        throw Error("act(...) is not supported in production builds of React.");
      }),
      (S = function (e, t) {
        return me.current.useCallback(e, t);
      }),
      (x = function (e) {
        return me.current.useContext(e);
      }),
      (E = function () {}),
      (C = function (e) {
        return me.current.useDeferredValue(e);
      }),
      (P = function (e, t) {
        return me.current.useEffect(e, t);
      }),
      (_ = function () {
        return me.current.useId();
      }),
      (N = function (e, t, n) {
        return me.current.useImperativeHandle(e, t, n);
      }),
      (T = function (e, t) {
        return me.current.useInsertionEffect(e, t);
      }),
      (L = function (e, t) {
        return me.current.useLayoutEffect(e, t);
      }),
      (R = function (e, t) {
        return me.current.useMemo(e, t);
      }),
      (z = function (e, t, n) {
        return me.current.useReducer(e, t, n);
      }),
      (j = function (e) {
        return me.current.useRef(e);
      }),
      (D = function (e) {
        return me.current.useState(e);
      }),
      (I = function (e, t, n) {
        return me.current.useSyncExternalStore(e, t, n);
      }),
      (O = function () {
        return me.current.useTransition();
      }),
      (F = "18.2.0");
  }),
  l.register("Xw6Mv", function (t, n) {
    var r, a, o, i, u, s, c, f, d, p, m, h;
    e(
      t.exports,
      "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
      () => r,
      (e) => (r = e)
    ),
      e(
        t.exports,
        "createPortal",
        () => a,
        (e) => (a = e)
      ),
      e(
        t.exports,
        "createRoot",
        () => o,
        (e) => (o = e)
      ),
      e(
        t.exports,
        "findDOMNode",
        () => i,
        (e) => (i = e)
      ),
      e(
        t.exports,
        "flushSync",
        () => u,
        (e) => (u = e)
      ),
      e(
        t.exports,
        "hydrate",
        () => s,
        (e) => (s = e)
      ),
      e(
        t.exports,
        "hydrateRoot",
        () => c,
        (e) => (c = e)
      ),
      e(
        t.exports,
        "render",
        () => f,
        (e) => (f = e)
      ),
      e(
        t.exports,
        "unmountComponentAtNode",
        () => d,
        (e) => (d = e)
      ),
      e(
        t.exports,
        "unstable_batchedUpdates",
        () => p,
        (e) => (p = e)
      ),
      e(
        t.exports,
        "unstable_renderSubtreeIntoContainer",
        () => m,
        (e) => (m = e)
      ),
      e(
        t.exports,
        "version",
        () => h,
        (e) => (h = e)
      );
    var g = l("acw62"),
      v = l("fO90s");
    function y(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
        n < arguments.length;
        n++
      )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var b = new Set(),
      w = {};
    function k(e, t) {
      S(e, t), S(e + "Capture", t);
    }
    function S(e, t) {
      for (w[e] = t, e = 0; e < t.length; e++) b.add(t[e]);
    }
    var x = !(
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      ),
      E = Object.prototype.hasOwnProperty,
      C =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      P = {},
      _ = {};
    function N(e, t, n, r, a, l, o) {
      (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = a),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = l),
        (this.removeEmptyString = o);
    }
    var T = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (e) {
        T[e] = new N(e, 0, !1, e, null, !1, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (e) {
        var t = e[0];
        T[t] = new N(t, 1, !1, e[1], null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
        T[e] = new N(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (
        e
      ) {
        T[e] = new N(e, 2, !1, e, null, !1, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (e) {
          T[e] = new N(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (e) {
        T[e] = new N(e, 3, !0, e, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (e) {
        T[e] = new N(e, 4, !1, e, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (e) {
        T[e] = new N(e, 6, !1, e, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (e) {
        T[e] = new N(e, 5, !1, e.toLowerCase(), null, !1, !1);
      });
    var L = /[\-:]([a-z])/g;
    function R(e) {
      return e[1].toUpperCase();
    }
    function z(e, t, n, r) {
      var a = T.hasOwnProperty(t) ? T[t] : null;
      (null !== a
        ? 0 !== a.type
        : r ||
          !(2 < t.length) ||
          ("o" !== t[0] && "O" !== t[0]) ||
          ("n" !== t[1] && "N" !== t[1])) &&
        ((function (e, t, n, r) {
          if (
            null == t ||
            (function (e, t, n, r) {
              if (null !== n && 0 === n.type) return !1;
              switch (typeof t) {
                case "function":
                case "symbol":
                  return !0;
                case "boolean":
                  return (
                    !r &&
                    (null !== n
                      ? !n.acceptsBooleans
                      : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e)
                  );
                default:
                  return !1;
              }
            })(e, t, n, r)
          )
            return !0;
          if (r) return !1;
          if (null !== n)
            switch (n.type) {
              case 3:
                return !t;
              case 4:
                return !1 === t;
              case 5:
                return isNaN(t);
              case 6:
                return isNaN(t) || 1 > t;
            }
          return !1;
        })(t, n, a, r) && (n = null),
        r || null === a
          ? (function (e) {
              return (
                !!E.call(_, e) || (!E.call(P, e) && (C.test(e) ? (_[e] = !0) : ((P[e] = !0), !1)))
              );
            })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
          : a.mustUseProperty
          ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
          : ((t = a.attributeName),
            (r = a.attributeNamespace),
            null === n
              ? e.removeAttribute(t)
              : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(L, R);
        T[t] = new N(t, 1, !1, e, null, !1, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(L, R);
          T[t] = new N(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var t = e.replace(L, R);
        T[t] = new N(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
      }),
      ["tabIndex", "crossOrigin"].forEach(function (e) {
        T[e] = new N(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (T.xlinkHref = new N(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1
      )),
      ["src", "href", "action", "formAction"].forEach(function (e) {
        T[e] = new N(e, 1, !1, e.toLowerCase(), null, !0, !0);
      });
    var j = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      D = Symbol.for("react.element"),
      I = Symbol.for("react.portal"),
      O = Symbol.for("react.fragment"),
      F = Symbol.for("react.strict_mode"),
      M = Symbol.for("react.profiler"),
      A = Symbol.for("react.provider"),
      U = Symbol.for("react.context"),
      H = Symbol.for("react.forward_ref"),
      B = Symbol.for("react.suspense"),
      V = Symbol.for("react.suspense_list"),
      W = Symbol.for("react.memo"),
      $ = Symbol.for("react.lazy");
    Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
    var Q = Symbol.for("react.offscreen");
    Symbol.for("react.legacy_hidden"),
      Symbol.for("react.cache"),
      Symbol.for("react.tracing_marker");
    var q = Symbol.iterator;
    function K(e) {
      return null === e || "object" != typeof e
        ? null
        : "function" == typeof (e = (q && e[q]) || e["@@iterator"])
        ? e
        : null;
    }
    var G,
      Y = Object.assign;
    function X(e) {
      if (void 0 === G)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          G = (t && t[1]) || "";
        }
      return "\n" + G + e;
    }
    var Z = !1;
    function J(e, t) {
      if (!e || Z) return "";
      Z = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t)
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            "object" == typeof Reflect && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (e) {
              var r = e;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (e) {
              r = e;
            }
            e.call(t.prototype);
          }
        else {
          try {
            throw Error();
          } catch (e) {
            r = e;
          }
          e();
        }
      } catch (t) {
        if (t && r && "string" == typeof t.stack) {
          for (
            var a = t.stack.split("\n"),
              l = r.stack.split("\n"),
              o = a.length - 1,
              i = l.length - 1;
            1 <= o && 0 <= i && a[o] !== l[i];

          )
            i--;
          for (; 1 <= o && 0 <= i; o--, i--)
            if (a[o] !== l[i]) {
              if (1 !== o || 1 !== i)
                do {
                  if ((o--, 0 > --i || a[o] !== l[i])) {
                    var u = "\n" + a[o].replace(" at new ", " at ");
                    return (
                      e.displayName &&
                        u.includes("<anonymous>") &&
                        (u = u.replace("<anonymous>", e.displayName)),
                      u
                    );
                  }
                } while (1 <= o && 0 <= i);
              break;
            }
        }
      } finally {
        (Z = !1), (Error.prepareStackTrace = n);
      }
      return (e = e ? e.displayName || e.name : "") ? X(e) : "";
    }
    function ee(e) {
      switch (e.tag) {
        case 5:
          return X(e.type);
        case 16:
          return X("Lazy");
        case 13:
          return X("Suspense");
        case 19:
          return X("SuspenseList");
        case 0:
        case 2:
        case 15:
          return (e = J(e.type, !1));
        case 11:
          return (e = J(e.type.render, !1));
        case 1:
          return (e = J(e.type, !0));
        default:
          return "";
      }
    }
    function te(e) {
      if (null == e) return null;
      if ("function" == typeof e) return e.displayName || e.name || null;
      if ("string" == typeof e) return e;
      switch (e) {
        case O:
          return "Fragment";
        case I:
          return "Portal";
        case M:
          return "Profiler";
        case F:
          return "StrictMode";
        case B:
          return "Suspense";
        case V:
          return "SuspenseList";
      }
      if ("object" == typeof e)
        switch (e.$$typeof) {
          case U:
            return (e.displayName || "Context") + ".Consumer";
          case A:
            return (e._context.displayName || "Context") + ".Provider";
          case H:
            var t = e.render;
            return (
              (e = e.displayName) ||
                (e =
                  "" !== (e = t.displayName || t.name || "")
                    ? "ForwardRef(" + e + ")"
                    : "ForwardRef"),
              e
            );
          case W:
            return null !== (t = e.displayName || null) ? t : te(e.type) || "Memo";
          case $:
            (t = e._payload), (e = e._init);
            try {
              return te(e(t));
            } catch (e) {}
        }
      return null;
    }
    function ne(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (t.displayName || "Context") + ".Consumer";
        case 10:
          return (t._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return (
            (e = (e = t.render).displayName || e.name || ""),
            t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
          );
        case 7:
          return "Fragment";
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return te(t);
        case 8:
          return t === F ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ("function" == typeof t) return t.displayName || t.name || null;
          if ("string" == typeof t) return t;
      }
      return null;
    }
    function re(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
        case "object":
          return e;
        default:
          return "";
      }
    }
    function ae(e) {
      var t = e.type;
      return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
    }
    function le(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var t = ae(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
          if (
            !e.hasOwnProperty(t) &&
            void 0 !== n &&
            "function" == typeof n.get &&
            "function" == typeof n.set
          ) {
            var a = n.get,
              l = n.set;
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return a.call(this);
                },
                set: function (e) {
                  (r = "" + e), l.call(this, e);
                },
              }),
              Object.defineProperty(e, t, { enumerable: n.enumerable }),
              {
                getValue: function () {
                  return r;
                },
                setValue: function (e) {
                  r = "" + e;
                },
                stopTracking: function () {
                  (e._valueTracker = null), delete e[t];
                },
              }
            );
          }
        })(e));
    }
    function oe(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = "";
      return (
        e && (r = ae(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r) !== n && (t.setValue(e), !0)
      );
    }
    function ie(e) {
      if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    function ue(e, t) {
      var n = t.checked;
      return Y({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
      });
    }
    function se(e, t) {
      var n = null == t.defaultValue ? "" : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
      (n = re(null != t.value ? t.value : n)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value,
        });
    }
    function ce(e, t) {
      null != (t = t.checked) && z(e, "checked", t, !1);
    }
    function fe(e, t) {
      ce(e, t);
      var n = re(t.value),
        r = t.type;
      if (null != n)
        "number" === r
          ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
          : e.value !== "" + n && (e.value = "" + n);
      else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
      t.hasOwnProperty("value")
        ? pe(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && pe(e, t.type, re(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
    }
    function de(e, t, n) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(("submit" !== r && "reset" !== r) || (void 0 !== t.value && null !== t.value)))
          return;
        (t = "" + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      "" !== (n = e.name) && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        "" !== n && (e.name = n);
    }
    function pe(e, t, n) {
      ("number" === t && ie(e.ownerDocument) === e) ||
        (null == n
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var me = Array.isArray;
    function he(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
        for (n = 0; n < e.length; n++)
          (a = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== a && (e[n].selected = a),
            a && r && (e[n].defaultSelected = !0);
      } else {
        for (n = "" + re(n), t = null, a = 0; a < e.length; a++) {
          if (e[a].value === n)
            return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
          null !== t || e[a].disabled || (t = e[a]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function ge(e, t) {
      if (null != t.dangerouslySetInnerHTML) throw Error(y(91));
      return Y({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
      });
    }
    function ve(e, t) {
      var n = t.value;
      if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
          if (null != t) throw Error(y(92));
          if (me(n)) {
            if (1 < n.length) throw Error(y(93));
            n = n[0];
          }
          t = n;
        }
        null == t && (t = ""), (n = t);
      }
      e._wrapperState = { initialValue: re(n) };
    }
    function ye(e, t) {
      var n = re(t.value),
        r = re(t.defaultValue);
      null != n &&
        ((n = "" + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = "" + r);
    }
    function be(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
    }
    function we(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function ke(e, t) {
      return null == e || "http://www.w3.org/1999/xhtml" === e
        ? we(t)
        : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    var Se,
      xe,
      Ee =
        ((xe = function (e, t) {
          if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
          else {
            for (
              (Se = Se || document.createElement("div")).innerHTML =
                "<svg>" + t.valueOf().toString() + "</svg>",
                t = Se.firstChild;
              e.firstChild;

            )
              e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
          }
        }),
        "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (e, t, n, r) {
              MSApp.execUnsafeLocalFunction(function () {
                return xe(e, t);
              });
            }
          : xe);
    function Ce(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
      }
      e.textContent = t;
    }
    var Pe = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      _e = ["Webkit", "ms", "Moz", "O"];
    function Ne(e, t, n) {
      return null == t || "boolean" == typeof t || "" === t
        ? ""
        : n || "number" != typeof t || 0 === t || (Pe.hasOwnProperty(e) && Pe[e])
        ? ("" + t).trim()
        : t + "px";
    }
    function Te(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf("--"),
            a = Ne(n, t[n], r);
          "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : (e[n] = a);
        }
    }
    Object.keys(Pe).forEach(function (e) {
      _e.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pe[t] = Pe[e]);
      });
    });
    var Le = Y(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    );
    function Re(e, t) {
      if (t) {
        if (Le[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
          throw Error(y(137, e));
        if (null != t.dangerouslySetInnerHTML) {
          if (null != t.children) throw Error(y(60));
          if (
            "object" != typeof t.dangerouslySetInnerHTML ||
            !("__html" in t.dangerouslySetInnerHTML)
          )
            throw Error(y(61));
        }
        if (null != t.style && "object" != typeof t.style) throw Error(y(62));
      }
    }
    function ze(e, t) {
      if (-1 === e.indexOf("-")) return "string" == typeof t.is;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var je = null;
    function De(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    var Ie = null,
      Oe = null,
      Fe = null;
    function Me(e) {
      if ((e = za(e))) {
        if ("function" != typeof Ie) throw Error(y(280));
        var t = e.stateNode;
        t && ((t = Da(t)), Ie(e.stateNode, e.type, t));
      }
    }
    function Ae(e) {
      Oe ? (Fe ? Fe.push(e) : (Fe = [e])) : (Oe = e);
    }
    function Ue() {
      if (Oe) {
        var e = Oe,
          t = Fe;
        if (((Fe = Oe = null), Me(e), t)) for (e = 0; e < t.length; e++) Me(t[e]);
      }
    }
    function He(e, t) {
      return e(t);
    }
    function Be() {}
    var Ve = !1;
    function We(e, t, n) {
      if (Ve) return e(t, n);
      Ve = !0;
      try {
        return He(e, t, n);
      } finally {
        (Ve = !1), (null !== Oe || null !== Fe) && (Be(), Ue());
      }
    }
    function $e(e, t) {
      var n = e.stateNode;
      if (null === n) return null;
      var r = Da(n);
      if (null === r) return null;
      n = r[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) ||
            (r = !(
              "button" === (e = e.type) ||
              "input" === e ||
              "select" === e ||
              "textarea" === e
            )),
            (e = !r);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && "function" != typeof n) throw Error(y(231, t, typeof n));
      return n;
    }
    var Qe = !1;
    if (x)
      try {
        var qe = {};
        Object.defineProperty(qe, "passive", {
          get: function () {
            Qe = !0;
          },
        }),
          window.addEventListener("test", qe, qe),
          window.removeEventListener("test", qe, qe);
      } catch (xe) {
        Qe = !1;
      }
    function Ke(e, t, n, r, a, l, o, i, u) {
      var s = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, s);
      } catch (e) {
        this.onError(e);
      }
    }
    var Ge = !1,
      Ye = null,
      Xe = !1,
      Ze = null,
      Je = {
        onError: function (e) {
          (Ge = !0), (Ye = e);
        },
      };
    function et(e, t, n, r, a, l, o, i, u) {
      (Ge = !1), (Ye = null), Ke.apply(Je, arguments);
    }
    function tt(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do {
          0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
        } while (e);
      }
      return 3 === t.tag ? n : null;
    }
    function nt(e) {
      if (13 === e.tag) {
        var t = e.memoizedState;
        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t))
          return t.dehydrated;
      }
      return null;
    }
    function rt(e) {
      if (tt(e) !== e) throw Error(y(188));
    }
    function at(e) {
      return null !==
        (e = (function (e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = tt(e))) throw Error(y(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
            var a = n.return;
            if (null === a) break;
            var l = a.alternate;
            if (null === l) {
              if (null !== (r = a.return)) {
                n = r;
                continue;
              }
              break;
            }
            if (a.child === l.child) {
              for (l = a.child; l; ) {
                if (l === n) return rt(a), e;
                if (l === r) return rt(a), t;
                l = l.sibling;
              }
              throw Error(y(188));
            }
            if (n.return !== r.return) (n = a), (r = l);
            else {
              for (var o = !1, i = a.child; i; ) {
                if (i === n) {
                  (o = !0), (n = a), (r = l);
                  break;
                }
                if (i === r) {
                  (o = !0), (r = a), (n = l);
                  break;
                }
                i = i.sibling;
              }
              if (!o) {
                for (i = l.child; i; ) {
                  if (i === n) {
                    (o = !0), (n = l), (r = a);
                    break;
                  }
                  if (i === r) {
                    (o = !0), (r = l), (n = a);
                    break;
                  }
                  i = i.sibling;
                }
                if (!o) throw Error(y(189));
              }
            }
            if (n.alternate !== r) throw Error(y(190));
          }
          if (3 !== n.tag) throw Error(y(188));
          return n.stateNode.current === n ? e : t;
        })(e))
        ? lt(e)
        : null;
    }
    function lt(e) {
      if (5 === e.tag || 6 === e.tag) return e;
      for (e = e.child; null !== e; ) {
        var t = lt(e);
        if (null !== t) return t;
        e = e.sibling;
      }
      return null;
    }
    var ot = v.unstable_scheduleCallback,
      it = v.unstable_cancelCallback,
      ut = v.unstable_shouldYield,
      st = v.unstable_requestPaint,
      ct = v.unstable_now,
      ft = v.unstable_getCurrentPriorityLevel,
      dt = v.unstable_ImmediatePriority,
      pt = v.unstable_UserBlockingPriority,
      mt = v.unstable_NormalPriority,
      ht = v.unstable_LowPriority,
      gt = v.unstable_IdlePriority,
      vt = null,
      yt = null;
    var bt = Math.clz32
        ? Math.clz32
        : function (e) {
            return 0 === (e >>>= 0) ? 32 : (31 - ((wt(e) / kt) | 0)) | 0;
          },
      wt = Math.log,
      kt = Math.LN2;
    var St = 64,
      xt = 4194304;
    function Et(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return 4194240 & e;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return 130023424 & e;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function Ct(e, t) {
      var n = e.pendingLanes;
      if (0 === n) return 0;
      var r = 0,
        a = e.suspendedLanes,
        l = e.pingedLanes,
        o = 268435455 & n;
      if (0 !== o) {
        var i = o & ~a;
        0 !== i ? (r = Et(i)) : 0 !== (l &= o) && (r = Et(l));
      } else 0 !== (o = n & ~a) ? (r = Et(o)) : 0 !== l && (r = Et(l));
      if (0 === r) return 0;
      if (
        0 !== t &&
        t !== r &&
        0 == (t & a) &&
        ((a = r & -r) >= (l = t & -t) || (16 === a && 0 != (4194240 & l)))
      )
        return t;
      if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; )
          (a = 1 << (n = 31 - bt(t))), (r |= e[n]), (t &= ~a);
      return r;
    }
    function Pt(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        default:
          return -1;
      }
    }
    function _t(e) {
      return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
    }
    function Nt() {
      var e = St;
      return 0 == (4194240 & (St <<= 1)) && (St = 64), e;
    }
    function Tt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function Lt(e, t, n) {
      (e.pendingLanes |= t),
        536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(t = 31 - bt(t))] = n);
    }
    function Rt(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - bt(n),
          a = 1 << r;
        (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
      }
    }
    var zt = 0;
    function jt(e) {
      return 1 < (e &= -e) ? (4 < e ? (0 != (268435455 & e) ? 16 : 536870912) : 4) : 1;
    }
    var Dt,
      It,
      Ot,
      Ft,
      Mt,
      At = !1,
      Ut = [],
      Ht = null,
      Bt = null,
      Vt = null,
      Wt = new Map(),
      $t = new Map(),
      Qt = [],
      qt =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        );
    function Kt(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ht = null;
          break;
        case "dragenter":
        case "dragleave":
          Bt = null;
          break;
        case "mouseover":
        case "mouseout":
          Vt = null;
          break;
        case "pointerover":
        case "pointerout":
          Wt.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          $t.delete(t.pointerId);
      }
    }
    function Gt(e, t, n, r, a, l) {
      return null === e || e.nativeEvent !== l
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: l,
            targetContainers: [a],
          }),
          null !== t && null !== (t = za(t)) && It(t),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          null !== a && -1 === t.indexOf(a) && t.push(a),
          e);
    }
    function Yt(e) {
      var t = Ra(e.target);
      if (null !== t) {
        var n = tt(t);
        if (null !== n)
          if (13 === (t = n.tag)) {
            if (null !== (t = nt(n)))
              return (
                (e.blockedOn = t),
                void Mt(e.priority, function () {
                  Ot(n);
                })
              );
          } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
            return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
      }
      e.blockedOn = null;
    }
    function Xt(e) {
      if (null !== e.blockedOn) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = sn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return null !== (t = za(n)) && It(t), (e.blockedOn = n), !1;
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        (je = r), n.target.dispatchEvent(r), (je = null), t.shift();
      }
      return !0;
    }
    function Zt(e, t, n) {
      Xt(e) && n.delete(t);
    }
    function Jt() {
      (At = !1),
        null !== Ht && Xt(Ht) && (Ht = null),
        null !== Bt && Xt(Bt) && (Bt = null),
        null !== Vt && Xt(Vt) && (Vt = null),
        Wt.forEach(Zt),
        $t.forEach(Zt);
    }
    function en(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        At || ((At = !0), v.unstable_scheduleCallback(v.unstable_NormalPriority, Jt)));
    }
    function tn(e) {
      function t(t) {
        return en(t, e);
      }
      if (0 < Ut.length) {
        en(Ut[0], e);
        for (var n = 1; n < Ut.length; n++) {
          var r = Ut[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        null !== Ht && en(Ht, e),
          null !== Bt && en(Bt, e),
          null !== Vt && en(Vt, e),
          Wt.forEach(t),
          $t.forEach(t),
          n = 0;
        n < Qt.length;
        n++
      )
        (r = Qt[n]).blockedOn === e && (r.blockedOn = null);
      for (; 0 < Qt.length && null === (n = Qt[0]).blockedOn; )
        Yt(n), null === n.blockedOn && Qt.shift();
    }
    var nn = j.ReactCurrentBatchConfig,
      rn = !0;
    function an(e, t, n, r) {
      var a = zt,
        l = nn.transition;
      nn.transition = null;
      try {
        (zt = 1), on(e, t, n, r);
      } finally {
        (zt = a), (nn.transition = l);
      }
    }
    function ln(e, t, n, r) {
      var a = zt,
        l = nn.transition;
      nn.transition = null;
      try {
        (zt = 4), on(e, t, n, r);
      } finally {
        (zt = a), (nn.transition = l);
      }
    }
    function on(e, t, n, r) {
      if (rn) {
        var a = sn(e, t, n, r);
        if (null === a) ra(e, t, r, un, n), Kt(e, r);
        else if (
          (function (e, t, n, r, a) {
            switch (t) {
              case "focusin":
                return (Ht = Gt(Ht, e, t, n, r, a)), !0;
              case "dragenter":
                return (Bt = Gt(Bt, e, t, n, r, a)), !0;
              case "mouseover":
                return (Vt = Gt(Vt, e, t, n, r, a)), !0;
              case "pointerover":
                var l = a.pointerId;
                return Wt.set(l, Gt(Wt.get(l) || null, e, t, n, r, a)), !0;
              case "gotpointercapture":
                return (l = a.pointerId), $t.set(l, Gt($t.get(l) || null, e, t, n, r, a)), !0;
            }
            return !1;
          })(a, e, t, n, r)
        )
          r.stopPropagation();
        else if ((Kt(e, r), 4 & t && -1 < qt.indexOf(e))) {
          for (; null !== a; ) {
            var l = za(a);
            if ((null !== l && Dt(l), null === (l = sn(e, t, n, r)) && ra(e, t, r, un, n), l === a))
              break;
            a = l;
          }
          null !== a && r.stopPropagation();
        } else ra(e, t, r, null, n);
      }
    }
    var un = null;
    function sn(e, t, n, r) {
      if (((un = null), null !== (e = Ra((e = De(r))))))
        if (null === (t = tt(e))) e = null;
        else if (13 === (n = t.tag)) {
          if (null !== (e = nt(t))) return e;
          e = null;
        } else if (3 === n) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return 3 === t.tag ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      return (un = e), null;
    }
    function cn(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (ft()) {
            case dt:
              return 1;
            case pt:
              return 4;
            case mt:
            case ht:
              return 16;
            case gt:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var fn = null,
      dn = null,
      pn = null;
    function mn() {
      if (pn) return pn;
      var e,
        t,
        n = dn,
        r = n.length,
        a = "value" in fn ? fn.value : fn.textContent,
        l = a.length;
      for (e = 0; e < r && n[e] === a[e]; e++);
      var o = r - e;
      for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
      return (pn = a.slice(e, 1 < t ? 1 - t : void 0));
    }
    function hn(e) {
      var t = e.keyCode;
      return (
        "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      );
    }
    function gn() {
      return !0;
    }
    function vn() {
      return !1;
    }
    function yn(e) {
      function t(t, n, r, a, l) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = a),
        (this.target = l),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
        return (
          (this.isDefaultPrevented = (
            null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
          )
            ? gn
            : vn),
          (this.isPropagationStopped = vn),
          this
        );
      }
      return (
        Y(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : "unknown" != typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = gn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = gn));
          },
          persist: function () {},
          isPersistent: gn,
        }),
        t
      );
    }
    var bn,
      wn,
      kn,
      Sn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      xn = yn(Sn),
      En = Y({}, Sn, { view: 0, detail: 0 }),
      Cn = yn(En),
      Pn = Y({}, En, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Mn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return void 0 === e.relatedTarget
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== kn &&
                (kn && "mousemove" === e.type
                  ? ((bn = e.screenX - kn.screenX), (wn = e.screenY - kn.screenY))
                  : (wn = bn = 0),
                (kn = e)),
              bn);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : wn;
        },
      }),
      _n = yn(Pn),
      Nn = yn(Y({}, Pn, { dataTransfer: 0 })),
      Tn = yn(Y({}, En, { relatedTarget: 0 })),
      Ln = yn(Y({}, Sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Rn = Y({}, Sn, {
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      }),
      zn = yn(Rn),
      jn = yn(Y({}, Sn, { data: 0 })),
      Dn = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      In = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      On = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Fn(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : !!(e = On[e]) && !!t[e];
    }
    function Mn() {
      return Fn;
    }
    var An = Y({}, En, {
        key: function (e) {
          if (e.key) {
            var t = Dn[e.key] || e.key;
            if ("Unidentified" !== t) return t;
          }
          return "keypress" === e.type
            ? 13 === (e = hn(e))
              ? "Enter"
              : String.fromCharCode(e)
            : "keydown" === e.type || "keyup" === e.type
            ? In[e.keyCode] || "Unidentified"
            : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Mn,
        charCode: function (e) {
          return "keypress" === e.type ? hn(e) : 0;
        },
        keyCode: function (e) {
          return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
        },
        which: function (e) {
          return "keypress" === e.type
            ? hn(e)
            : "keydown" === e.type || "keyup" === e.type
            ? e.keyCode
            : 0;
        },
      }),
      Un = yn(An),
      Hn = yn(
        Y({}, Pn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        })
      ),
      Bn = yn(
        Y({}, En, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Mn,
        })
      ),
      Vn = yn(Y({}, Sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Wn = Y({}, Pn, {
        deltaX: function (e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
          return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      $n = yn(Wn),
      Qn = [9, 13, 27, 32],
      qn = x && "CompositionEvent" in window,
      Kn = null;
    x && "documentMode" in document && (Kn = document.documentMode);
    var Gn = x && "TextEvent" in window && !Kn,
      Yn = x && (!qn || (Kn && 8 < Kn && 11 >= Kn)),
      Xn = String.fromCharCode(32),
      Zn = !1;
    function Jn(e, t) {
      switch (e) {
        case "keyup":
          return -1 !== Qn.indexOf(t.keyCode);
        case "keydown":
          return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function er(e) {
      return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var tr = !1;
    var nr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function rr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === t ? !!nr[e.type] : "textarea" === t;
    }
    function ar(e, t, n, r) {
      Ae(r),
        0 < (t = la(t, "onChange")).length &&
          ((n = new xn("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
    }
    var lr = null,
      or = null;
    function ir(e) {
      Xr(e, 0);
    }
    function ur(e) {
      if (oe(ja(e))) return e;
    }
    function sr(e, t) {
      if ("change" === e) return t;
    }
    var cr = !1;
    if (x) {
      var fr;
      if (x) {
        var dr = "oninput" in document;
        if (!dr) {
          var pr = document.createElement("div");
          pr.setAttribute("oninput", "return;"), (dr = "function" == typeof pr.oninput);
        }
        fr = dr;
      } else fr = !1;
      cr = fr && (!document.documentMode || 9 < document.documentMode);
    }
    function mr() {
      lr && (lr.detachEvent("onpropertychange", hr), (or = lr = null));
    }
    function hr(e) {
      if ("value" === e.propertyName && ur(or)) {
        var t = [];
        ar(t, or, e, De(e)), We(ir, t);
      }
    }
    function gr(e, t, n) {
      "focusin" === e
        ? (mr(), (or = n), (lr = t).attachEvent("onpropertychange", hr))
        : "focusout" === e && mr();
    }
    function vr(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e) return ur(or);
    }
    function yr(e, t) {
      if ("click" === e) return ur(t);
    }
    function br(e, t) {
      if ("input" === e || "change" === e) return ur(t);
    }
    var wr =
      "function" == typeof Object.is
        ? Object.is
        : function (e, t) {
            return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
    function kr(e, t) {
      if (wr(e, t)) return !0;
      if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var a = n[r];
        if (!E.call(t, a) || !wr(e[a], t[a])) return !1;
      }
      return !0;
    }
    function Sr(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function xr(e, t) {
      var n,
        r = Sr(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = Sr(r);
      }
    }
    function Er(e, t) {
      return (
        !(!e || !t) &&
        (e === t ||
          ((!e || 3 !== e.nodeType) &&
            (t && 3 === t.nodeType
              ? Er(e, t.parentNode)
              : "contains" in e
              ? e.contains(t)
              : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
      );
    }
    function Cr() {
      for (var e = window, t = ie(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = "string" == typeof t.contentWindow.location.href;
        } catch (e) {
          n = !1;
        }
        if (!n) break;
        t = ie((e = t.contentWindow).document);
      }
      return t;
    }
    function Pr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        (("input" === t &&
          ("text" === e.type ||
            "search" === e.type ||
            "tel" === e.type ||
            "url" === e.type ||
            "password" === e.type)) ||
          "textarea" === t ||
          "true" === e.contentEditable)
      );
    }
    function _r(e) {
      var t = Cr(),
        n = e.focusedElem,
        r = e.selectionRange;
      if (t !== n && n && n.ownerDocument && Er(n.ownerDocument.documentElement, n)) {
        if (null !== r && Pr(n))
          if (((t = r.start), void 0 === (e = r.end) && (e = t), "selectionStart" in n))
            (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
          else if (
            (e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection
          ) {
            e = e.getSelection();
            var a = n.textContent.length,
              l = Math.min(r.start, a);
            (r = void 0 === r.end ? l : Math.min(r.end, a)),
              !e.extend && l > r && ((a = r), (r = l), (l = a)),
              (a = xr(n, l));
            var o = xr(n, r);
            a &&
              o &&
              (1 !== e.rangeCount ||
                e.anchorNode !== a.node ||
                e.anchorOffset !== a.offset ||
                e.focusNode !== o.node ||
                e.focusOffset !== o.offset) &&
              ((t = t.createRange()).setStart(a.node, a.offset),
              e.removeAllRanges(),
              l > r
                ? (e.addRange(t), e.extend(o.node, o.offset))
                : (t.setEnd(o.node, o.offset), e.addRange(t)));
          }
        for (t = [], e = n; (e = e.parentNode); )
          1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
          ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
      }
    }
    var Nr = x && "documentMode" in document && 11 >= document.documentMode,
      Tr = null,
      Lr = null,
      Rr = null,
      zr = !1;
    function jr(e, t, n) {
      var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
      zr ||
        null == Tr ||
        Tr !== ie(r) ||
        ("selectionStart" in (r = Tr) && Pr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : (r = {
              anchorNode: (r = (
                (r.ownerDocument && r.ownerDocument.defaultView) ||
                window
              ).getSelection()).anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            }),
        (Rr && kr(Rr, r)) ||
          ((Rr = r),
          0 < (r = la(Lr, "onSelect")).length &&
            ((t = new xn("onSelect", "select", null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Tr))));
    }
    function Dr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
      );
    }
    var Ir = {
        animationend: Dr("Animation", "AnimationEnd"),
        animationiteration: Dr("Animation", "AnimationIteration"),
        animationstart: Dr("Animation", "AnimationStart"),
        transitionend: Dr("Transition", "TransitionEnd"),
      },
      Or = {},
      Fr = {};
    function Mr(e) {
      if (Or[e]) return Or[e];
      if (!Ir[e]) return e;
      var t,
        n = Ir[e];
      for (t in n) if (n.hasOwnProperty(t) && t in Fr) return (Or[e] = n[t]);
      return e;
    }
    x &&
      ((Fr = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Ir.animationend.animation,
        delete Ir.animationiteration.animation,
        delete Ir.animationstart.animation),
      "TransitionEvent" in window || delete Ir.transitionend.transition);
    var Ar = Mr("animationend"),
      Ur = Mr("animationiteration"),
      Hr = Mr("animationstart"),
      Br = Mr("transitionend"),
      Vr = new Map(),
      Wr =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " "
        );
    function $r(e, t) {
      Vr.set(e, t), k(t, [e]);
    }
    for (var Qr = 0; Qr < Wr.length; Qr++) {
      var qr = Wr[Qr];
      $r(qr.toLowerCase(), "on" + (qr[0].toUpperCase() + qr.slice(1)));
    }
    $r(Ar, "onAnimationEnd"),
      $r(Ur, "onAnimationIteration"),
      $r(Hr, "onAnimationStart"),
      $r("dblclick", "onDoubleClick"),
      $r("focusin", "onFocus"),
      $r("focusout", "onBlur"),
      $r(Br, "onTransitionEnd"),
      S("onMouseEnter", ["mouseout", "mouseover"]),
      S("onMouseLeave", ["mouseout", "mouseover"]),
      S("onPointerEnter", ["pointerout", "pointerover"]),
      S("onPointerLeave", ["pointerout", "pointerover"]),
      k("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
      k(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " "
        )
      ),
      k("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      k("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
      k(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" ")
      ),
      k(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
      );
    var Kr =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      Gr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));
    function Yr(e, t, n) {
      var r = e.type || "unknown-event";
      (e.currentTarget = n),
        (function (e, t, n, r, a, l, o, i, u) {
          if ((et.apply(this, arguments), Ge)) {
            if (!Ge) throw Error(y(198));
            var s = Ye;
            (Ge = !1), (Ye = null), Xe || ((Xe = !0), (Ze = s));
          }
        })(r, t, void 0, e),
        (e.currentTarget = null);
    }
    function Xr(e, t) {
      t = 0 != (4 & t);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          a = r.event;
        r = r.listeners;
        e: {
          var l = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var i = r[o],
                u = i.instance,
                s = i.currentTarget;
              if (((i = i.listener), u !== l && a.isPropagationStopped())) break e;
              Yr(a, i, s), (l = u);
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((u = (i = r[o]).instance),
                (s = i.currentTarget),
                (i = i.listener),
                u !== l && a.isPropagationStopped())
              )
                break e;
              Yr(a, i, s), (l = u);
            }
        }
      }
      if (Xe) throw ((e = Ze), (Xe = !1), (Ze = null), e);
    }
    function Zr(e, t) {
      var n = t[Na];
      void 0 === n && (n = t[Na] = new Set());
      var r = e + "__bubble";
      n.has(r) || (na(t, e, 2, !1), n.add(r));
    }
    function Jr(e, t, n) {
      var r = 0;
      t && (r |= 4), na(n, e, r, t);
    }
    var ea = "_reactListening" + Math.random().toString(36).slice(2);
    function ta(e) {
      if (!e[ea]) {
        (e[ea] = !0),
          b.forEach(function (t) {
            "selectionchange" !== t && (Gr.has(t) || Jr(t, !1, e), Jr(t, !0, e));
          });
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[ea] || ((t[ea] = !0), Jr("selectionchange", !1, t));
      }
    }
    function na(e, t, n, r) {
      switch (cn(t)) {
        case 1:
          var a = an;
          break;
        case 4:
          a = ln;
          break;
        default:
          a = on;
      }
      (n = a.bind(null, t, n, e)),
        (a = void 0),
        !Qe || ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) || (a = !0),
        r
          ? void 0 !== a
            ? e.addEventListener(t, n, { capture: !0, passive: a })
            : e.addEventListener(t, n, !0)
          : void 0 !== a
          ? e.addEventListener(t, n, { passive: a })
          : e.addEventListener(t, n, !1);
    }
    function ra(e, t, n, r, a) {
      var l = r;
      if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
          if (null === r) return;
          var o = r.tag;
          if (3 === o || 4 === o) {
            var i = r.stateNode.containerInfo;
            if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
            if (4 === o)
              for (o = r.return; null !== o; ) {
                var u = o.tag;
                if (
                  (3 === u || 4 === u) &&
                  ((u = o.stateNode.containerInfo) === a ||
                    (8 === u.nodeType && u.parentNode === a))
                )
                  return;
                o = o.return;
              }
            for (; null !== i; ) {
              if (null === (o = Ra(i))) return;
              if (5 === (u = o.tag) || 6 === u) {
                r = l = o;
                continue e;
              }
              i = i.parentNode;
            }
          }
          r = r.return;
        }
      We(function () {
        var r = l,
          a = De(n),
          o = [];
        e: {
          var i = Vr.get(e);
          if (void 0 !== i) {
            var u = xn,
              s = e;
            switch (e) {
              case "keypress":
                if (0 === hn(n)) break e;
              case "keydown":
              case "keyup":
                u = Un;
                break;
              case "focusin":
                (s = "focus"), (u = Tn);
                break;
              case "focusout":
                (s = "blur"), (u = Tn);
                break;
              case "beforeblur":
              case "afterblur":
                u = Tn;
                break;
              case "click":
                if (2 === n.button) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                u = _n;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                u = Nn;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                u = Bn;
                break;
              case Ar:
              case Ur:
              case Hr:
                u = Ln;
                break;
              case Br:
                u = Vn;
                break;
              case "scroll":
                u = Cn;
                break;
              case "wheel":
                u = $n;
                break;
              case "copy":
              case "cut":
              case "paste":
                u = zn;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                u = Hn;
            }
            var c = 0 != (4 & t),
              f = !c && "scroll" === e,
              d = c ? (null !== i ? i + "Capture" : null) : i;
            c = [];
            for (var p, m = r; null !== m; ) {
              var h = (p = m).stateNode;
              if (
                (5 === p.tag &&
                  null !== h &&
                  ((p = h), null !== d && null != (h = $e(m, d)) && c.push(aa(m, h, p))),
                f)
              )
                break;
              m = m.return;
            }
            0 < c.length && ((i = new u(i, s, null, n, a)), o.push({ event: i, listeners: c }));
          }
        }
        if (0 == (7 & t)) {
          if (
            ((u = "mouseout" === e || "pointerout" === e),
            (!(i = "mouseover" === e || "pointerover" === e) ||
              n === je ||
              !(s = n.relatedTarget || n.fromElement) ||
              (!Ra(s) && !s[_a])) &&
              (u || i) &&
              ((i =
                a.window === a
                  ? a
                  : (i = a.ownerDocument)
                  ? i.defaultView || i.parentWindow
                  : window),
              u
                ? ((u = r),
                  null !== (s = (s = n.relatedTarget || n.toElement) ? Ra(s) : null) &&
                    (s !== (f = tt(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                    (s = null))
                : ((u = null), (s = r)),
              u !== s))
          ) {
            if (
              ((c = _n),
              (h = "onMouseLeave"),
              (d = "onMouseEnter"),
              (m = "mouse"),
              ("pointerout" !== e && "pointerover" !== e) ||
                ((c = Hn), (h = "onPointerLeave"), (d = "onPointerEnter"), (m = "pointer")),
              (f = null == u ? i : ja(u)),
              (p = null == s ? i : ja(s)),
              ((i = new c(h, m + "leave", u, n, a)).target = f),
              (i.relatedTarget = p),
              (h = null),
              Ra(a) === r &&
                (((c = new c(d, m + "enter", s, n, a)).target = p), (c.relatedTarget = f), (h = c)),
              (f = h),
              u && s)
            )
              e: {
                for (d = s, m = 0, p = c = u; p; p = oa(p)) m++;
                for (p = 0, h = d; h; h = oa(h)) p++;
                for (; 0 < m - p; ) (c = oa(c)), m--;
                for (; 0 < p - m; ) (d = oa(d)), p--;
                for (; m--; ) {
                  if (c === d || (null !== d && c === d.alternate)) break e;
                  (c = oa(c)), (d = oa(d));
                }
                c = null;
              }
            else c = null;
            null !== u && ia(o, i, u, c, !1), null !== s && null !== f && ia(o, f, s, c, !0);
          }
          if (
            "select" === (u = (i = r ? ja(r) : window).nodeName && i.nodeName.toLowerCase()) ||
            ("input" === u && "file" === i.type)
          )
            var g = sr;
          else if (rr(i))
            if (cr) g = br;
            else {
              g = vr;
              var v = gr;
            }
          else
            (u = i.nodeName) &&
              "input" === u.toLowerCase() &&
              ("checkbox" === i.type || "radio" === i.type) &&
              (g = yr);
          switch (
            (g && (g = g(e, r))
              ? ar(o, g, n, a)
              : (v && v(e, i, r),
                "focusout" === e &&
                  (v = i._wrapperState) &&
                  v.controlled &&
                  "number" === i.type &&
                  pe(i, "number", i.value)),
            (v = r ? ja(r) : window),
            e)
          ) {
            case "focusin":
              (rr(v) || "true" === v.contentEditable) && ((Tr = v), (Lr = r), (Rr = null));
              break;
            case "focusout":
              Rr = Lr = Tr = null;
              break;
            case "mousedown":
              zr = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (zr = !1), jr(o, n, a);
              break;
            case "selectionchange":
              if (Nr) break;
            case "keydown":
            case "keyup":
              jr(o, n, a);
          }
          var y;
          if (qn)
            e: {
              switch (e) {
                case "compositionstart":
                  var b = "onCompositionStart";
                  break e;
                case "compositionend":
                  b = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  b = "onCompositionUpdate";
                  break e;
              }
              b = void 0;
            }
          else
            tr
              ? Jn(e, n) && (b = "onCompositionEnd")
              : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
          b &&
            (Yn &&
              "ko" !== n.locale &&
              (tr || "onCompositionStart" !== b
                ? "onCompositionEnd" === b && tr && (y = mn())
                : ((dn = "value" in (fn = a) ? fn.value : fn.textContent), (tr = !0))),
            0 < (v = la(r, b)).length &&
              ((b = new jn(b, e, null, n, a)),
              o.push({ event: b, listeners: v }),
              y ? (b.data = y) : null !== (y = er(n)) && (b.data = y))),
            (y = Gn
              ? (function (e, t) {
                  switch (e) {
                    case "compositionend":
                      return er(t);
                    case "keypress":
                      return 32 !== t.which ? null : ((Zn = !0), Xn);
                    case "textInput":
                      return (e = t.data) === Xn && Zn ? null : e;
                    default:
                      return null;
                  }
                })(e, n)
              : (function (e, t) {
                  if (tr)
                    return "compositionend" === e || (!qn && Jn(e, t))
                      ? ((e = mn()), (pn = dn = fn = null), (tr = !1), e)
                      : null;
                  switch (e) {
                    case "paste":
                    default:
                      return null;
                    case "keypress":
                      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case "compositionend":
                      return Yn && "ko" !== t.locale ? null : t.data;
                  }
                })(e, n)) &&
              0 < (r = la(r, "onBeforeInput")).length &&
              ((a = new jn("onBeforeInput", "beforeinput", null, n, a)),
              o.push({ event: a, listeners: r }),
              (a.data = y));
        }
        Xr(o, t);
      });
    }
    function aa(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function la(e, t) {
      for (var n = t + "Capture", r = []; null !== e; ) {
        var a = e,
          l = a.stateNode;
        5 === a.tag &&
          null !== l &&
          ((a = l),
          null != (l = $e(e, n)) && r.unshift(aa(e, l, a)),
          null != (l = $e(e, t)) && r.push(aa(e, l, a))),
          (e = e.return);
      }
      return r;
    }
    function oa(e) {
      if (null === e) return null;
      do {
        e = e.return;
      } while (e && 5 !== e.tag);
      return e || null;
    }
    function ia(e, t, n, r, a) {
      for (var l = t._reactName, o = []; null !== n && n !== r; ) {
        var i = n,
          u = i.alternate,
          s = i.stateNode;
        if (null !== u && u === r) break;
        5 === i.tag &&
          null !== s &&
          ((i = s),
          a
            ? null != (u = $e(n, l)) && o.unshift(aa(n, u, i))
            : a || (null != (u = $e(n, l)) && o.push(aa(n, u, i)))),
          (n = n.return);
      }
      0 !== o.length && e.push({ event: t, listeners: o });
    }
    var ua = /\r\n?/g,
      sa = /\u0000|\uFFFD/g;
    function ca(e) {
      return ("string" == typeof e ? e : "" + e).replace(ua, "\n").replace(sa, "");
    }
    function fa(e, t, n) {
      if (((t = ca(t)), ca(e) !== t && n)) throw Error(y(425));
    }
    function da() {}
    var pa = null,
      ma = null;
    function ha(e, t) {
      return (
        "textarea" === e ||
        "noscript" === e ||
        "string" == typeof t.children ||
        "number" == typeof t.children ||
        ("object" == typeof t.dangerouslySetInnerHTML &&
          null !== t.dangerouslySetInnerHTML &&
          null != t.dangerouslySetInnerHTML.__html)
      );
    }
    var ga = "function" == typeof setTimeout ? setTimeout : void 0,
      va = "function" == typeof clearTimeout ? clearTimeout : void 0,
      ya = "function" == typeof Promise ? Promise : void 0,
      ba =
        "function" == typeof queueMicrotask
          ? queueMicrotask
          : void 0 !== ya
          ? function (e) {
              return ya.resolve(null).then(e).catch(wa);
            }
          : ga;
    function wa(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function ka(e, t) {
      var n = t,
        r = 0;
      do {
        var a = n.nextSibling;
        if ((e.removeChild(n), a && 8 === a.nodeType))
          if ("/$" === (n = a.data)) {
            if (0 === r) return e.removeChild(a), void tn(t);
            r--;
          } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
        n = a;
      } while (n);
      tn(t);
    }
    function Sa(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
        if (8 === t) {
          if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
          if ("/$" === t) return null;
        }
      }
      return e;
    }
    function xa(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ("$" === n || "$!" === n || "$?" === n) {
            if (0 === t) return e;
            t--;
          } else "/$" === n && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var Ea = Math.random().toString(36).slice(2),
      Ca = "__reactFiber$" + Ea,
      Pa = "__reactProps$" + Ea,
      _a = "__reactContainer$" + Ea,
      Na = "__reactEvents$" + Ea,
      Ta = "__reactListeners$" + Ea,
      La = "__reactHandles$" + Ea;
    function Ra(e) {
      var t = e[Ca];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[_a] || n[Ca])) {
          if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
            for (e = xa(e); null !== e; ) {
              if ((n = e[Ca])) return n;
              e = xa(e);
            }
          return t;
        }
        n = (e = n).parentNode;
      }
      return null;
    }
    function za(e) {
      return !(e = e[Ca] || e[_a]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
        ? null
        : e;
    }
    function ja(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(y(33));
    }
    function Da(e) {
      return e[Pa] || null;
    }
    var Ia = [],
      Oa = -1;
    function Fa(e) {
      return { current: e };
    }
    function Ma(e) {
      0 > Oa || ((e.current = Ia[Oa]), (Ia[Oa] = null), Oa--);
    }
    function Aa(e, t) {
      Oa++, (Ia[Oa] = e.current), (e.current = t);
    }
    var Ua = {},
      Ha = Fa(Ua),
      Ba = Fa(!1),
      Va = Ua;
    function Wa(e, t) {
      var n = e.type.contextTypes;
      if (!n) return Ua;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var a,
        l = {};
      for (a in n) l[a] = t[a];
      return (
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = l)),
        l
      );
    }
    function $a(e) {
      return null != (e = e.childContextTypes);
    }
    function Qa() {
      Ma(Ba), Ma(Ha);
    }
    function qa(e, t, n) {
      if (Ha.current !== Ua) throw Error(y(168));
      Aa(Ha, t), Aa(Ba, n);
    }
    function Ka(e, t, n) {
      var r = e.stateNode;
      if (((t = t.childContextTypes), "function" != typeof r.getChildContext)) return n;
      for (var a in (r = r.getChildContext()))
        if (!(a in t)) throw Error(y(108, ne(e) || "Unknown", a));
      return Y({}, n, r);
    }
    function Ga(e) {
      return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ua),
        (Va = Ha.current),
        Aa(Ha, e),
        Aa(Ba, Ba.current),
        !0
      );
    }
    function Ya(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(y(169));
      n
        ? ((e = Ka(e, t, Va)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          Ma(Ba),
          Ma(Ha),
          Aa(Ha, e))
        : Ma(Ba),
        Aa(Ba, n);
    }
    var Xa = null,
      Za = !1,
      Ja = !1;
    function el(e) {
      null === Xa ? (Xa = [e]) : Xa.push(e);
    }
    function tl() {
      if (!Ja && null !== Xa) {
        Ja = !0;
        var e = 0,
          t = zt;
        try {
          var n = Xa;
          for (zt = 1; e < n.length; e++) {
            var r = n[e];
            do {
              r = r(!0);
            } while (null !== r);
          }
          (Xa = null), (Za = !1);
        } catch (t) {
          throw (null !== Xa && (Xa = Xa.slice(e + 1)), ot(dt, tl), t);
        } finally {
          (zt = t), (Ja = !1);
        }
      }
      return null;
    }
    var nl = [],
      rl = 0,
      al = null,
      ll = 0,
      ol = [],
      il = 0,
      ul = null,
      sl = 1,
      cl = "";
    function fl(e, t) {
      (nl[rl++] = ll), (nl[rl++] = al), (al = e), (ll = t);
    }
    function dl(e, t, n) {
      (ol[il++] = sl), (ol[il++] = cl), (ol[il++] = ul), (ul = e);
      var r = sl;
      e = cl;
      var a = 32 - bt(r) - 1;
      (r &= ~(1 << a)), (n += 1);
      var l = 32 - bt(t) + a;
      if (30 < l) {
        var o = a - (a % 5);
        (l = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (a -= o),
          (sl = (1 << (32 - bt(t) + a)) | (n << a) | r),
          (cl = l + e);
      } else (sl = (1 << l) | (n << a) | r), (cl = e);
    }
    function pl(e) {
      null !== e.return && (fl(e, 1), dl(e, 1, 0));
    }
    function ml(e) {
      for (; e === al; ) (al = nl[--rl]), (nl[rl] = null), (ll = nl[--rl]), (nl[rl] = null);
      for (; e === ul; )
        (ul = ol[--il]),
          (ol[il] = null),
          (cl = ol[--il]),
          (ol[il] = null),
          (sl = ol[--il]),
          (ol[il] = null);
    }
    var hl = null,
      gl = null,
      vl = !1,
      yl = null;
    function bl(e, t) {
      var n = Ws(5, null, null, 0);
      (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
    }
    function wl(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            null !==
              (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
            ((e.stateNode = t), (hl = e), (gl = Sa(t.firstChild)), !0)
          );
        case 6:
          return (
            null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
            ((e.stateNode = t), (hl = e), (gl = null), !0)
          );
        case 13:
          return (
            null !== (t = 8 !== t.nodeType ? null : t) &&
            ((n = null !== ul ? { id: sl, overflow: cl } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            ((n = Ws(18, null, null, 0)).stateNode = t),
            (n.return = e),
            (e.child = n),
            (hl = e),
            (gl = null),
            !0)
          );
        default:
          return !1;
      }
    }
    function kl(e) {
      return 0 != (1 & e.mode) && 0 == (128 & e.flags);
    }
    function Sl(e) {
      if (vl) {
        var t = gl;
        if (t) {
          var n = t;
          if (!wl(e, t)) {
            if (kl(e)) throw Error(y(418));
            t = Sa(n.nextSibling);
            var r = hl;
            t && wl(e, t) ? bl(r, n) : ((e.flags = (-4097 & e.flags) | 2), (vl = !1), (hl = e));
          }
        } else {
          if (kl(e)) throw Error(y(418));
          (e.flags = (-4097 & e.flags) | 2), (vl = !1), (hl = e);
        }
      }
    }
    function xl(e) {
      for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
      hl = e;
    }
    function El(e) {
      if (e !== hl) return !1;
      if (!vl) return xl(e), (vl = !0), !1;
      var t;
      if (
        ((t = 3 !== e.tag) &&
          !(t = 5 !== e.tag) &&
          (t = "head" !== (t = e.type) && "body" !== t && !ha(e.type, e.memoizedProps)),
        t && (t = gl))
      ) {
        if (kl(e)) throw (Cl(), Error(y(418)));
        for (; t; ) bl(e, t), (t = Sa(t.nextSibling));
      }
      if ((xl(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(y(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("/$" === n) {
                if (0 === t) {
                  gl = Sa(e.nextSibling);
                  break e;
                }
                t--;
              } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
            }
            e = e.nextSibling;
          }
          gl = null;
        }
      } else gl = hl ? Sa(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Cl() {
      for (var e = gl; e; ) e = Sa(e.nextSibling);
    }
    function Pl() {
      (gl = hl = null), (vl = !1);
    }
    function _l(e) {
      null === yl ? (yl = [e]) : yl.push(e);
    }
    var Nl = j.ReactCurrentBatchConfig;
    function Tl(e, t) {
      if (e && e.defaultProps) {
        for (var n in ((t = Y({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
      }
      return t;
    }
    var Ll = Fa(null),
      Rl = null,
      zl = null,
      jl = null;
    function Dl() {
      jl = zl = Rl = null;
    }
    function Il(e) {
      var t = Ll.current;
      Ma(Ll), (e._currentValue = t);
    }
    function Ol(e, t, n) {
      for (; null !== e; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
            : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function Fl(e, t) {
      (Rl = e),
        (jl = zl = null),
        null !== (e = e.dependencies) &&
          null !== e.firstContext &&
          (0 != (e.lanes & t) && (ji = !0), (e.firstContext = null));
    }
    function Ml(e) {
      var t = e._currentValue;
      if (jl !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), null === zl)) {
          if (null === Rl) throw Error(y(308));
          (zl = e), (Rl.dependencies = { lanes: 0, firstContext: e });
        } else zl = zl.next = e;
      return t;
    }
    var Al = null;
    function Ul(e) {
      null === Al ? (Al = [e]) : Al.push(e);
    }
    function Hl(e, t, n, r) {
      var a = t.interleaved;
      return (
        null === a ? ((n.next = n), Ul(t)) : ((n.next = a.next), (a.next = n)),
        (t.interleaved = n),
        Bl(e, r)
      );
    }
    function Bl(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        (e.childLanes |= t),
          null !== (n = e.alternate) && (n.childLanes |= t),
          (n = e),
          (e = e.return);
      return 3 === n.tag ? n.stateNode : null;
    }
    var Vl = !1;
    function Wl(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function $l(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          });
    }
    function Ql(e, t) {
      return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function ql(e, t, n) {
      var r = e.updateQueue;
      if (null === r) return null;
      if (((r = r.shared), 0 != (2 & Hu))) {
        var a = r.pending;
        return (
          null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)), (r.pending = t), Bl(e, n)
        );
      }
      return (
        null === (a = r.interleaved) ? ((t.next = t), Ul(r)) : ((t.next = a.next), (a.next = t)),
        (r.interleaved = t),
        Bl(e, n)
      );
    }
    function Kl(e, t, n) {
      if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
        var r = t.lanes;
        (n |= r &= e.pendingLanes), (t.lanes = n), Rt(e, n);
      }
    }
    function Gl(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (null !== r && n === (r = r.updateQueue)) {
        var a = null,
          l = null;
        if (null !== (n = n.firstBaseUpdate)) {
          do {
            var o = {
              eventTime: n.eventTime,
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: n.callback,
              next: null,
            };
            null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
          } while (null !== n);
          null === l ? (a = l = t) : (l = l.next = t);
        } else a = l = t;
        return (
          (n = {
            baseState: r.baseState,
            firstBaseUpdate: a,
            lastBaseUpdate: l,
            shared: r.shared,
            effects: r.effects,
          }),
          void (e.updateQueue = n)
        );
      }
      null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
    }
    function Yl(e, t, n, r) {
      var a = e.updateQueue;
      Vl = !1;
      var l = a.firstBaseUpdate,
        o = a.lastBaseUpdate,
        i = a.shared.pending;
      if (null !== i) {
        a.shared.pending = null;
        var u = i,
          s = u.next;
        (u.next = null), null === o ? (l = s) : (o.next = s), (o = u);
        var c = e.alternate;
        null !== c &&
          (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
          (null === i ? (c.firstBaseUpdate = s) : (i.next = s), (c.lastBaseUpdate = u));
      }
      if (null !== l) {
        var f = a.baseState;
        for (o = 0, c = s = u = null, i = l; ; ) {
          var d = i.lane,
            p = i.eventTime;
          if ((r & d) === d) {
            null !== c &&
              (c = c.next =
                {
                  eventTime: p,
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                });
            e: {
              var m = e,
                h = i;
              switch (((d = t), (p = n), h.tag)) {
                case 1:
                  if ("function" == typeof (m = h.payload)) {
                    f = m.call(p, f, d);
                    break e;
                  }
                  f = m;
                  break e;
                case 3:
                  m.flags = (-65537 & m.flags) | 128;
                case 0:
                  if (null == (d = "function" == typeof (m = h.payload) ? m.call(p, f, d) : m))
                    break e;
                  f = Y({}, f, d);
                  break e;
                case 2:
                  Vl = !0;
              }
            }
            null !== i.callback &&
              0 !== i.lane &&
              ((e.flags |= 64), null === (d = a.effects) ? (a.effects = [i]) : d.push(i));
          } else
            (p = {
              eventTime: p,
              lane: d,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            }),
              null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
              (o |= d);
          if (null === (i = i.next)) {
            if (null === (i = a.shared.pending)) break;
            (i = (d = i).next), (d.next = null), (a.lastBaseUpdate = d), (a.shared.pending = null);
          }
        }
        if (
          (null === c && (u = f),
          (a.baseState = u),
          (a.firstBaseUpdate = s),
          (a.lastBaseUpdate = c),
          null !== (t = a.shared.interleaved))
        ) {
          a = t;
          do {
            (o |= a.lane), (a = a.next);
          } while (a !== t);
        } else null === l && (a.shared.lanes = 0);
        (Gu |= o), (e.lanes = o), (e.memoizedState = f);
      }
    }
    function Xl(e, t, n) {
      if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
          var r = e[t],
            a = r.callback;
          if (null !== a) {
            if (((r.callback = null), (r = n), "function" != typeof a)) throw Error(y(191, a));
            a.call(r);
          }
        }
    }
    var Zl = new g.Component().refs;
    function Jl(e, t, n, r) {
      (n = null == (n = n(r, (t = e.memoizedState))) ? t : Y({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n);
    }
    var eo = {
      isMounted: function (e) {
        return !!(e = e._reactInternals) && tt(e) === e;
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = ps(),
          a = ms(e),
          l = Ql(r, a);
        (l.payload = t),
          null != n && (l.callback = n),
          null !== (t = ql(e, l, a)) && (hs(t, e, a, r), Kl(t, e, a));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ps(),
          a = ms(e),
          l = Ql(r, a);
        (l.tag = 1),
          (l.payload = t),
          null != n && (l.callback = n),
          null !== (t = ql(e, l, a)) && (hs(t, e, a, r), Kl(t, e, a));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ps(),
          r = ms(e),
          a = Ql(n, r);
        (a.tag = 2),
          null != t && (a.callback = t),
          null !== (t = ql(e, a, r)) && (hs(t, e, r, n), Kl(t, e, r));
      },
    };
    function to(e, t, n, r, a, l, o) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, l, o)
        : !t.prototype || !t.prototype.isPureReactComponent || !kr(n, r) || !kr(a, l);
    }
    function no(e, t, n) {
      var r = !1,
        a = Ua,
        l = t.contextType;
      return (
        "object" == typeof l && null !== l
          ? (l = Ml(l))
          : ((a = $a(t) ? Va : Ha.current),
            (l = (r = null != (r = t.contextTypes)) ? Wa(e, a) : Ua)),
        (t = new t(n, l)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = eo),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
          (e.__reactInternalMemoizedMaskedChildContext = l)),
        t
      );
    }
    function ro(e, t, n, r) {
      (e = t.state),
        "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        "function" == typeof t.UNSAFE_componentWillReceiveProps &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && eo.enqueueReplaceState(t, t.state, null);
    }
    function ao(e, t, n, r) {
      var a = e.stateNode;
      (a.props = n), (a.state = e.memoizedState), (a.refs = Zl), Wl(e);
      var l = t.contextType;
      "object" == typeof l && null !== l
        ? (a.context = Ml(l))
        : ((l = $a(t) ? Va : Ha.current), (a.context = Wa(e, l))),
        (a.state = e.memoizedState),
        "function" == typeof (l = t.getDerivedStateFromProps) &&
          (Jl(e, t, l, n), (a.state = e.memoizedState)),
        "function" == typeof t.getDerivedStateFromProps ||
          "function" == typeof a.getSnapshotBeforeUpdate ||
          ("function" != typeof a.UNSAFE_componentWillMount &&
            "function" != typeof a.componentWillMount) ||
          ((t = a.state),
          "function" == typeof a.componentWillMount && a.componentWillMount(),
          "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
          t !== a.state && eo.enqueueReplaceState(a, a.state, null),
          Yl(e, n, a, r),
          (a.state = e.memoizedState)),
        "function" == typeof a.componentDidMount && (e.flags |= 4194308);
    }
    function lo(e, t, n) {
      if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
        if (n._owner) {
          if ((n = n._owner)) {
            if (1 !== n.tag) throw Error(y(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(y(147, e));
          var a = r,
            l = "" + e;
          return null !== t &&
            null !== t.ref &&
            "function" == typeof t.ref &&
            t.ref._stringRef === l
            ? t.ref
            : ((t = function (e) {
                var t = a.refs;
                t === Zl && (t = a.refs = {}), null === e ? delete t[l] : (t[l] = e);
              }),
              (t._stringRef = l),
              t);
        }
        if ("string" != typeof e) throw Error(y(284));
        if (!n._owner) throw Error(y(290, e));
      }
      return e;
    }
    function oo(e, t) {
      throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
          y(
            31,
            "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
          )
        ))
      );
    }
    function io(e) {
      return (0, e._init)(e._payload);
    }
    function uo(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e, t) {
        for (e = new Map(); null !== t; )
          null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
      }
      function a(e, t) {
        return ((e = Qs(e, t)).index = 0), (e.sibling = null), e;
      }
      function l(t, n, r) {
        return (
          (t.index = r),
          e
            ? null !== (r = t.alternate)
              ? (r = r.index) < n
                ? ((t.flags |= 2), n)
                : r
              : ((t.flags |= 2), n)
            : ((t.flags |= 1048576), n)
        );
      }
      function o(t) {
        return e && null === t.alternate && (t.flags |= 2), t;
      }
      function i(e, t, n, r) {
        return null === t || 6 !== t.tag
          ? (((t = Ys(n, e.mode, r)).return = e), t)
          : (((t = a(t, n)).return = e), t);
      }
      function u(e, t, n, r) {
        var l = n.type;
        return l === O
          ? c(e, t, n.props.children, r, n.key)
          : null !== t &&
            (t.elementType === l ||
              ("object" == typeof l && null !== l && l.$$typeof === $ && io(l) === t.type))
          ? (((r = a(t, n.props)).ref = lo(e, t, n)), (r.return = e), r)
          : (((r = qs(n.type, n.key, n.props, null, e.mode, r)).ref = lo(e, t, n)),
            (r.return = e),
            r);
      }
      function s(e, t, n, r) {
        return null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? (((t = Xs(n, e.mode, r)).return = e), t)
          : (((t = a(t, n.children || [])).return = e), t);
      }
      function c(e, t, n, r, l) {
        return null === t || 7 !== t.tag
          ? (((t = Ks(n, e.mode, r, l)).return = e), t)
          : (((t = a(t, n)).return = e), t);
      }
      function f(e, t, n) {
        if (("string" == typeof t && "" !== t) || "number" == typeof t)
          return ((t = Ys("" + t, e.mode, n)).return = e), t;
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case D:
              return (
                ((n = qs(t.type, t.key, t.props, null, e.mode, n)).ref = lo(e, null, t)),
                (n.return = e),
                n
              );
            case I:
              return ((t = Xs(t, e.mode, n)).return = e), t;
            case $:
              return f(e, (0, t._init)(t._payload), n);
          }
          if (me(t) || K(t)) return ((t = Ks(t, e.mode, n, null)).return = e), t;
          oo(e, t);
        }
        return null;
      }
      function d(e, t, n, r) {
        var a = null !== t ? t.key : null;
        if (("string" == typeof n && "" !== n) || "number" == typeof n)
          return null !== a ? null : i(e, t, "" + n, r);
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case D:
              return n.key === a ? u(e, t, n, r) : null;
            case I:
              return n.key === a ? s(e, t, n, r) : null;
            case $:
              return d(e, t, (a = n._init)(n._payload), r);
          }
          if (me(n) || K(n)) return null !== a ? null : c(e, t, n, r, null);
          oo(e, n);
        }
        return null;
      }
      function p(e, t, n, r, a) {
        if (("string" == typeof r && "" !== r) || "number" == typeof r)
          return i(t, (e = e.get(n) || null), "" + r, a);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case D:
              return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
            case I:
              return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
            case $:
              return p(e, t, n, (0, r._init)(r._payload), a);
          }
          if (me(r) || K(r)) return c(t, (e = e.get(n) || null), r, a, null);
          oo(t, r);
        }
        return null;
      }
      function m(a, o, i, u) {
        for (
          var s = null, c = null, m = o, h = (o = 0), g = null;
          null !== m && h < i.length;
          h++
        ) {
          m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
          var v = d(a, m, i[h], u);
          if (null === v) {
            null === m && (m = g);
            break;
          }
          e && m && null === v.alternate && t(a, m),
            (o = l(v, o, h)),
            null === c ? (s = v) : (c.sibling = v),
            (c = v),
            (m = g);
        }
        if (h === i.length) return n(a, m), vl && fl(a, h), s;
        if (null === m) {
          for (; h < i.length; h++)
            null !== (m = f(a, i[h], u)) &&
              ((o = l(m, o, h)), null === c ? (s = m) : (c.sibling = m), (c = m));
          return vl && fl(a, h), s;
        }
        for (m = r(a, m); h < i.length; h++)
          null !== (g = p(m, a, h, i[h], u)) &&
            (e && null !== g.alternate && m.delete(null === g.key ? h : g.key),
            (o = l(g, o, h)),
            null === c ? (s = g) : (c.sibling = g),
            (c = g));
        return (
          e &&
            m.forEach(function (e) {
              return t(a, e);
            }),
          vl && fl(a, h),
          s
        );
      }
      function h(a, o, i, u) {
        var s = K(i);
        if ("function" != typeof s) throw Error(y(150));
        if (null == (i = s.call(i))) throw Error(y(151));
        for (
          var c = (s = null), m = o, h = (o = 0), g = null, v = i.next();
          null !== m && !v.done;
          h++, v = i.next()
        ) {
          m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
          var b = d(a, m, v.value, u);
          if (null === b) {
            null === m && (m = g);
            break;
          }
          e && m && null === b.alternate && t(a, m),
            (o = l(b, o, h)),
            null === c ? (s = b) : (c.sibling = b),
            (c = b),
            (m = g);
        }
        if (v.done) return n(a, m), vl && fl(a, h), s;
        if (null === m) {
          for (; !v.done; h++, v = i.next())
            null !== (v = f(a, v.value, u)) &&
              ((o = l(v, o, h)), null === c ? (s = v) : (c.sibling = v), (c = v));
          return vl && fl(a, h), s;
        }
        for (m = r(a, m); !v.done; h++, v = i.next())
          null !== (v = p(m, a, h, v.value, u)) &&
            (e && null !== v.alternate && m.delete(null === v.key ? h : v.key),
            (o = l(v, o, h)),
            null === c ? (s = v) : (c.sibling = v),
            (c = v));
        return (
          e &&
            m.forEach(function (e) {
              return t(a, e);
            }),
          vl && fl(a, h),
          s
        );
      }
      return function e(r, l, i, u) {
        if (
          ("object" == typeof i &&
            null !== i &&
            i.type === O &&
            null === i.key &&
            (i = i.props.children),
          "object" == typeof i && null !== i)
        ) {
          switch (i.$$typeof) {
            case D:
              e: {
                for (var s = i.key, c = l; null !== c; ) {
                  if (c.key === s) {
                    if ((s = i.type) === O) {
                      if (7 === c.tag) {
                        n(r, c.sibling), ((l = a(c, i.props.children)).return = r), (r = l);
                        break e;
                      }
                    } else if (
                      c.elementType === s ||
                      ("object" == typeof s && null !== s && s.$$typeof === $ && io(s) === c.type)
                    ) {
                      n(r, c.sibling),
                        ((l = a(c, i.props)).ref = lo(r, c, i)),
                        (l.return = r),
                        (r = l);
                      break e;
                    }
                    n(r, c);
                    break;
                  }
                  t(r, c), (c = c.sibling);
                }
                i.type === O
                  ? (((l = Ks(i.props.children, r.mode, u, i.key)).return = r), (r = l))
                  : (((u = qs(i.type, i.key, i.props, null, r.mode, u)).ref = lo(r, l, i)),
                    (u.return = r),
                    (r = u));
              }
              return o(r);
            case I:
              e: {
                for (c = i.key; null !== l; ) {
                  if (l.key === c) {
                    if (
                      4 === l.tag &&
                      l.stateNode.containerInfo === i.containerInfo &&
                      l.stateNode.implementation === i.implementation
                    ) {
                      n(r, l.sibling), ((l = a(l, i.children || [])).return = r), (r = l);
                      break e;
                    }
                    n(r, l);
                    break;
                  }
                  t(r, l), (l = l.sibling);
                }
                ((l = Xs(i, r.mode, u)).return = r), (r = l);
              }
              return o(r);
            case $:
              return e(r, l, (c = i._init)(i._payload), u);
          }
          if (me(i)) return m(r, l, i, u);
          if (K(i)) return h(r, l, i, u);
          oo(r, i);
        }
        return ("string" == typeof i && "" !== i) || "number" == typeof i
          ? ((i = "" + i),
            null !== l && 6 === l.tag
              ? (n(r, l.sibling), ((l = a(l, i)).return = r), (r = l))
              : (n(r, l), ((l = Ys(i, r.mode, u)).return = r), (r = l)),
            o(r))
          : n(r, l);
      };
    }
    var so = uo(!0),
      co = uo(!1),
      fo = {},
      po = Fa(fo),
      mo = Fa(fo),
      ho = Fa(fo);
    function go(e) {
      if (e === fo) throw Error(y(174));
      return e;
    }
    function vo(e, t) {
      switch ((Aa(ho, t), Aa(mo, e), Aa(po, fo), (e = t.nodeType))) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : ke(null, "");
          break;
        default:
          t = ke((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
      }
      Ma(po), Aa(po, t);
    }
    function yo() {
      Ma(po), Ma(mo), Ma(ho);
    }
    function bo(e) {
      go(ho.current);
      var t = go(po.current),
        n = ke(t, e.type);
      t !== n && (Aa(mo, e), Aa(po, n));
    }
    function wo(e) {
      mo.current === e && (Ma(po), Ma(mo));
    }
    var ko = Fa(0);
    function So(e) {
      for (var t = e; null !== t; ) {
        if (13 === t.tag) {
          var n = t.memoizedState;
          if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
            return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
          if (0 != (128 & t.flags)) return t;
        } else if (null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    var xo = [];
    function Eo() {
      for (var e = 0; e < xo.length; e++) xo[e]._workInProgressVersionPrimary = null;
      xo.length = 0;
    }
    var Co = j.ReactCurrentDispatcher,
      Po = j.ReactCurrentBatchConfig,
      _o = 0,
      No = null,
      To = null,
      Lo = null,
      Ro = !1,
      zo = !1,
      jo = 0,
      Do = 0;
    function Io() {
      throw Error(y(321));
    }
    function Oo(e, t) {
      if (null === t) return !1;
      for (var n = 0; n < t.length && n < e.length; n++) if (!wr(e[n], t[n])) return !1;
      return !0;
    }
    function Fo(e, t, n, r, a, l) {
      if (
        ((_o = l),
        (No = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Co.current = null === e || null === e.memoizedState ? wi : ki),
        (e = n(r, a)),
        zo)
      ) {
        l = 0;
        do {
          if (((zo = !1), (jo = 0), 25 <= l)) throw Error(y(301));
          (l += 1), (Lo = To = null), (t.updateQueue = null), (Co.current = Si), (e = n(r, a));
        } while (zo);
      }
      if (
        ((Co.current = bi),
        (t = null !== To && null !== To.next),
        (_o = 0),
        (Lo = To = No = null),
        (Ro = !1),
        t)
      )
        throw Error(y(300));
      return e;
    }
    function Mo() {
      var e = 0 !== jo;
      return (jo = 0), e;
    }
    function Ao() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return null === Lo ? (No.memoizedState = Lo = e) : (Lo = Lo.next = e), Lo;
    }
    function Uo() {
      if (null === To) {
        var e = No.alternate;
        e = null !== e ? e.memoizedState : null;
      } else e = To.next;
      var t = null === Lo ? No.memoizedState : Lo.next;
      if (null !== t) (Lo = t), (To = e);
      else {
        if (null === e) throw Error(y(310));
        (e = {
          memoizedState: (To = e).memoizedState,
          baseState: To.baseState,
          baseQueue: To.baseQueue,
          queue: To.queue,
          next: null,
        }),
          null === Lo ? (No.memoizedState = Lo = e) : (Lo = Lo.next = e);
      }
      return Lo;
    }
    function Ho(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    function Bo(e) {
      var t = Uo(),
        n = t.queue;
      if (null === n) throw Error(y(311));
      n.lastRenderedReducer = e;
      var r = To,
        a = r.baseQueue,
        l = n.pending;
      if (null !== l) {
        if (null !== a) {
          var o = a.next;
          (a.next = l.next), (l.next = o);
        }
        (r.baseQueue = a = l), (n.pending = null);
      }
      if (null !== a) {
        (l = a.next), (r = r.baseState);
        var i = (o = null),
          u = null,
          s = l;
        do {
          var c = s.lane;
          if ((_o & c) === c)
            null !== u &&
              (u = u.next =
                {
                  lane: 0,
                  action: s.action,
                  hasEagerState: s.hasEagerState,
                  eagerState: s.eagerState,
                  next: null,
                }),
              (r = s.hasEagerState ? s.eagerState : e(r, s.action));
          else {
            var f = {
              lane: c,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            };
            null === u ? ((i = u = f), (o = r)) : (u = u.next = f), (No.lanes |= c), (Gu |= c);
          }
          s = s.next;
        } while (null !== s && s !== l);
        null === u ? (o = r) : (u.next = i),
          wr(r, t.memoizedState) || (ji = !0),
          (t.memoizedState = r),
          (t.baseState = o),
          (t.baseQueue = u),
          (n.lastRenderedState = r);
      }
      if (null !== (e = n.interleaved)) {
        a = e;
        do {
          (l = a.lane), (No.lanes |= l), (Gu |= l), (a = a.next);
        } while (a !== e);
      } else null === a && (n.lanes = 0);
      return [t.memoizedState, n.dispatch];
    }
    function Vo(e) {
      var t = Uo(),
        n = t.queue;
      if (null === n) throw Error(y(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        l = t.memoizedState;
      if (null !== a) {
        n.pending = null;
        var o = (a = a.next);
        do {
          (l = e(l, o.action)), (o = o.next);
        } while (o !== a);
        wr(l, t.memoizedState) || (ji = !0),
          (t.memoizedState = l),
          null === t.baseQueue && (t.baseState = l),
          (n.lastRenderedState = l);
      }
      return [l, r];
    }
    function Wo() {}
    function $o(e, t) {
      var n = No,
        r = Uo(),
        a = t(),
        l = !wr(r.memoizedState, a);
      if (
        (l && ((r.memoizedState = a), (ji = !0)),
        (r = r.queue),
        ri(Ko.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || l || (null !== Lo && 1 & Lo.memoizedState.tag))
      ) {
        if (((n.flags |= 2048), Zo(9, qo.bind(null, n, r, a, t), void 0, null), null === Bu))
          throw Error(y(349));
        0 != (30 & _o) || Qo(n, t, a);
      }
      return a;
    }
    function Qo(e, t, n) {
      (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = No.updateQueue)
          ? ((t = { lastEffect: null, stores: null }), (No.updateQueue = t), (t.stores = [e]))
          : null === (n = t.stores)
          ? (t.stores = [e])
          : n.push(e);
    }
    function qo(e, t, n, r) {
      (t.value = n), (t.getSnapshot = r), Go(t) && Yo(e);
    }
    function Ko(e, t, n) {
      return n(function () {
        Go(t) && Yo(e);
      });
    }
    function Go(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !wr(e, n);
      } catch (e) {
        return !0;
      }
    }
    function Yo(e) {
      var t = Bl(e, 1);
      null !== t && hs(t, e, 1, -1);
    }
    function Xo(e) {
      var t = Ao();
      return (
        "function" == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ho,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = hi.bind(null, No, e)),
        [t.memoizedState, e]
      );
    }
    function Zo(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = No.updateQueue)
          ? ((t = { lastEffect: null, stores: null }),
            (No.updateQueue = t),
            (t.lastEffect = e.next = e))
          : null === (n = t.lastEffect)
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function Jo() {
      return Uo().memoizedState;
    }
    function ei(e, t, n, r) {
      var a = Ao();
      (No.flags |= e), (a.memoizedState = Zo(1 | t, n, void 0, void 0 === r ? null : r));
    }
    function ti(e, t, n, r) {
      var a = Uo();
      r = void 0 === r ? null : r;
      var l = void 0;
      if (null !== To) {
        var o = To.memoizedState;
        if (((l = o.destroy), null !== r && Oo(r, o.deps)))
          return void (a.memoizedState = Zo(t, n, l, r));
      }
      (No.flags |= e), (a.memoizedState = Zo(1 | t, n, l, r));
    }
    function ni(e, t) {
      return ei(8390656, 8, e, t);
    }
    function ri(e, t) {
      return ti(2048, 8, e, t);
    }
    function ai(e, t) {
      return ti(4, 2, e, t);
    }
    function li(e, t) {
      return ti(4, 4, e, t);
    }
    function oi(e, t) {
      return "function" == typeof t
        ? ((e = e()),
          t(e),
          function () {
            t(null);
          })
        : null != t
        ? ((e = e()),
          (t.current = e),
          function () {
            t.current = null;
          })
        : void 0;
    }
    function ii(e, t, n) {
      return (n = null != n ? n.concat([e]) : null), ti(4, 4, oi.bind(null, t, e), n);
    }
    function ui() {}
    function si(e, t) {
      var n = Uo();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && Oo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function ci(e, t) {
      var n = Uo();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && Oo(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function fi(e, t, n) {
      return 0 == (21 & _o)
        ? (e.baseState && ((e.baseState = !1), (ji = !0)), (e.memoizedState = n))
        : (wr(n, t) || ((n = Nt()), (No.lanes |= n), (Gu |= n), (e.baseState = !0)), t);
    }
    function di(e, t) {
      var n = zt;
      (zt = 0 !== n && 4 > n ? n : 4), e(!0);
      var r = Po.transition;
      Po.transition = {};
      try {
        e(!1), t();
      } finally {
        (zt = n), (Po.transition = r);
      }
    }
    function pi() {
      return Uo().memoizedState;
    }
    function mi(e, t, n) {
      var r = ms(e);
      if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), gi(e)))
        vi(t, n);
      else if (null !== (n = Hl(e, t, n, r))) {
        hs(n, e, r, ps()), yi(n, t, r);
      }
    }
    function hi(e, t, n) {
      var r = ms(e),
        a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
      if (gi(e)) vi(t, a);
      else {
        var l = e.alternate;
        if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer))
          try {
            var o = t.lastRenderedState,
              i = l(o, n);
            if (((a.hasEagerState = !0), (a.eagerState = i), wr(i, o))) {
              var u = t.interleaved;
              return (
                null === u ? ((a.next = a), Ul(t)) : ((a.next = u.next), (u.next = a)),
                void (t.interleaved = a)
              );
            }
          } catch (e) {}
        null !== (n = Hl(e, t, a, r)) && (hs(n, e, r, (a = ps())), yi(n, t, r));
      }
    }
    function gi(e) {
      var t = e.alternate;
      return e === No || (null !== t && t === No);
    }
    function vi(e, t) {
      zo = Ro = !0;
      var n = e.pending;
      null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
    }
    function yi(e, t, n) {
      if (0 != (4194240 & n)) {
        var r = t.lanes;
        (n |= r &= e.pendingLanes), (t.lanes = n), Rt(e, n);
      }
    }
    var bi = {
        readContext: Ml,
        useCallback: Io,
        useContext: Io,
        useEffect: Io,
        useImperativeHandle: Io,
        useInsertionEffect: Io,
        useLayoutEffect: Io,
        useMemo: Io,
        useReducer: Io,
        useRef: Io,
        useState: Io,
        useDebugValue: Io,
        useDeferredValue: Io,
        useTransition: Io,
        useMutableSource: Io,
        useSyncExternalStore: Io,
        useId: Io,
        unstable_isNewReconciler: !1,
      },
      wi = {
        readContext: Ml,
        useCallback: function (e, t) {
          return (Ao().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: Ml,
        useEffect: ni,
        useImperativeHandle: function (e, t, n) {
          return (n = null != n ? n.concat([e]) : null), ei(4194308, 4, oi.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
          return ei(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return ei(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Ao();
          return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
          var r = Ao();
          return (
            (t = void 0 !== n ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (r.queue = e),
            (e = e.dispatch = mi.bind(null, No, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          return (e = { current: e }), (Ao().memoizedState = e);
        },
        useState: Xo,
        useDebugValue: ui,
        useDeferredValue: function (e) {
          return (Ao().memoizedState = e);
        },
        useTransition: function () {
          var e = Xo(!1),
            t = e[0];
          return (e = di.bind(null, e[1])), (Ao().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
          var r = No,
            a = Ao();
          if (vl) {
            if (void 0 === n) throw Error(y(407));
            n = n();
          } else {
            if (((n = t()), null === Bu)) throw Error(y(349));
            0 != (30 & _o) || Qo(r, t, n);
          }
          a.memoizedState = n;
          var l = { value: n, getSnapshot: t };
          return (
            (a.queue = l),
            ni(Ko.bind(null, r, l, e), [e]),
            (r.flags |= 2048),
            Zo(9, qo.bind(null, r, l, n, t), void 0, null),
            n
          );
        },
        useId: function () {
          var e = Ao(),
            t = Bu.identifierPrefix;
          if (vl) {
            var n = cl;
            (t = ":" + t + "R" + (n = (sl & ~(1 << (32 - bt(sl) - 1))).toString(32) + n)),
              0 < (n = jo++) && (t += "H" + n.toString(32)),
              (t += ":");
          } else t = ":" + t + "r" + (n = Do++).toString(32) + ":";
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      ki = {
        readContext: Ml,
        useCallback: si,
        useContext: Ml,
        useEffect: ri,
        useImperativeHandle: ii,
        useInsertionEffect: ai,
        useLayoutEffect: li,
        useMemo: ci,
        useReducer: Bo,
        useRef: Jo,
        useState: function () {
          return Bo(Ho);
        },
        useDebugValue: ui,
        useDeferredValue: function (e) {
          return fi(Uo(), To.memoizedState, e);
        },
        useTransition: function () {
          return [Bo(Ho)[0], Uo().memoizedState];
        },
        useMutableSource: Wo,
        useSyncExternalStore: $o,
        useId: pi,
        unstable_isNewReconciler: !1,
      },
      Si = {
        readContext: Ml,
        useCallback: si,
        useContext: Ml,
        useEffect: ri,
        useImperativeHandle: ii,
        useInsertionEffect: ai,
        useLayoutEffect: li,
        useMemo: ci,
        useReducer: Vo,
        useRef: Jo,
        useState: function () {
          return Vo(Ho);
        },
        useDebugValue: ui,
        useDeferredValue: function (e) {
          var t = Uo();
          return null === To ? (t.memoizedState = e) : fi(t, To.memoizedState, e);
        },
        useTransition: function () {
          return [Vo(Ho)[0], Uo().memoizedState];
        },
        useMutableSource: Wo,
        useSyncExternalStore: $o,
        useId: pi,
        unstable_isNewReconciler: !1,
      };
    function xi(e, t) {
      try {
        var n = "",
          r = t;
        do {
          (n += ee(r)), (r = r.return);
        } while (r);
        var a = n;
      } catch (e) {
        a = "\nError generating stack: " + e.message + "\n" + e.stack;
      }
      return { value: e, source: t, stack: a, digest: null };
    }
    function Ei(e, t, n) {
      return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
    }
    function Ci(e, t) {
      try {
        console.error(t.value);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    var Pi = "function" == typeof WeakMap ? WeakMap : Map;
    function _i(e, t, n) {
      ((n = Ql(-1, n)).tag = 3), (n.payload = { element: null });
      var r = t.value;
      return (
        (n.callback = function () {
          rs || ((rs = !0), (as = r)), Ci(0, t);
        }),
        n
      );
    }
    function Ni(e, t, n) {
      (n = Ql(-1, n)).tag = 3;
      var r = e.type.getDerivedStateFromError;
      if ("function" == typeof r) {
        var a = t.value;
        (n.payload = function () {
          return r(a);
        }),
          (n.callback = function () {
            Ci(0, t);
          });
      }
      var l = e.stateNode;
      return (
        null !== l &&
          "function" == typeof l.componentDidCatch &&
          (n.callback = function () {
            Ci(0, t),
              "function" != typeof r && (null === ls ? (ls = new Set([this])) : ls.add(this));
            var e = t.stack;
            this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" });
          }),
        n
      );
    }
    function Ti(e, t, n) {
      var r = e.pingCache;
      if (null === r) {
        r = e.pingCache = new Pi();
        var a = new Set();
        r.set(t, a);
      } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
      a.has(n) || (a.add(n), (e = Ms.bind(null, e, t, n)), t.then(e, e));
    }
    function Li(e) {
      do {
        var t;
        if (
          ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)
        )
          return e;
        e = e.return;
      } while (null !== e);
      return null;
    }
    function Ri(e, t, n, r, a) {
      return 0 == (1 & e.mode)
        ? (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (n.flags |= 131072),
              (n.flags &= -52805),
              1 === n.tag &&
                (null === n.alternate ? (n.tag = 17) : (((t = Ql(-1, 1)).tag = 2), ql(n, t, 1))),
              (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = a), e);
    }
    var zi = j.ReactCurrentOwner,
      ji = !1;
    function Di(e, t, n, r) {
      t.child = null === e ? co(t, null, n, r) : so(t, e.child, n, r);
    }
    function Ii(e, t, n, r, a) {
      n = n.render;
      var l = t.ref;
      return (
        Fl(t, a),
        (r = Fo(e, t, n, r, l, a)),
        (n = Mo()),
        null === e || ji
          ? (vl && n && pl(t), (t.flags |= 1), Di(e, t, r, a), t.child)
          : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), ru(e, t, a))
      );
    }
    function Oi(e, t, n, r, a) {
      if (null === e) {
        var l = n.type;
        return "function" != typeof l ||
          $s(l) ||
          void 0 !== l.defaultProps ||
          null !== n.compare ||
          void 0 !== n.defaultProps
          ? (((e = qs(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
          : ((t.tag = 15), (t.type = l), Fi(e, t, l, r, a));
      }
      if (((l = e.child), 0 == (e.lanes & a))) {
        var o = l.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : kr)(o, r) && e.ref === t.ref) return ru(e, t, a);
      }
      return (t.flags |= 1), ((e = Qs(l, r)).ref = t.ref), (e.return = t), (t.child = e);
    }
    function Fi(e, t, n, r, a) {
      if (null !== e) {
        var l = e.memoizedProps;
        if (kr(l, r) && e.ref === t.ref) {
          if (((ji = !1), (t.pendingProps = r = l), 0 == (e.lanes & a)))
            return (t.lanes = e.lanes), ru(e, t, a);
          0 != (131072 & e.flags) && (ji = !0);
        }
      }
      return Ui(e, t, n, r, a);
    }
    function Mi(e, t, n) {
      var r = t.pendingProps,
        a = r.children,
        l = null !== e ? e.memoizedState : null;
      if ("hidden" === r.mode)
        if (0 == (1 & t.mode))
          (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
            Aa(Qu, $u),
            ($u |= n);
        else {
          if (0 == (1073741824 & n))
            return (
              (e = null !== l ? l.baseLanes | n : n),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
              (t.updateQueue = null),
              Aa(Qu, $u),
              ($u |= e),
              null
            );
          (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
            (r = null !== l ? l.baseLanes : n),
            Aa(Qu, $u),
            ($u |= r);
        }
      else
        null !== l ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
          Aa(Qu, $u),
          ($u |= r);
      return Di(e, t, a, n), t.child;
    }
    function Ai(e, t) {
      var n = t.ref;
      ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function Ui(e, t, n, r, a) {
      var l = $a(n) ? Va : Ha.current;
      return (
        (l = Wa(t, l)),
        Fl(t, a),
        (n = Fo(e, t, n, r, l, a)),
        (r = Mo()),
        null === e || ji
          ? (vl && r && pl(t), (t.flags |= 1), Di(e, t, n, a), t.child)
          : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), ru(e, t, a))
      );
    }
    function Hi(e, t, n, r, a) {
      if ($a(n)) {
        var l = !0;
        Ga(t);
      } else l = !1;
      if ((Fl(t, a), null === t.stateNode)) nu(e, t), no(t, n, r), ao(t, n, r, a), (r = !0);
      else if (null === e) {
        var o = t.stateNode,
          i = t.memoizedProps;
        o.props = i;
        var u = o.context,
          s = n.contextType;
        "object" == typeof s && null !== s
          ? (s = Ml(s))
          : (s = Wa(t, (s = $a(n) ? Va : Ha.current)));
        var c = n.getDerivedStateFromProps,
          f = "function" == typeof c || "function" == typeof o.getSnapshotBeforeUpdate;
        f ||
          ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
            "function" != typeof o.componentWillReceiveProps) ||
          ((i !== r || u !== s) && ro(t, o, r, s)),
          (Vl = !1);
        var d = t.memoizedState;
        (o.state = d),
          Yl(t, r, o, a),
          (u = t.memoizedState),
          i !== r || d !== u || Ba.current || Vl
            ? ("function" == typeof c && (Jl(t, n, c, r), (u = t.memoizedState)),
              (i = Vl || to(t, n, i, r, d, u, s))
                ? (f ||
                    ("function" != typeof o.UNSAFE_componentWillMount &&
                      "function" != typeof o.componentWillMount) ||
                    ("function" == typeof o.componentWillMount && o.componentWillMount(),
                    "function" == typeof o.UNSAFE_componentWillMount &&
                      o.UNSAFE_componentWillMount()),
                  "function" == typeof o.componentDidMount && (t.flags |= 4194308))
                : ("function" == typeof o.componentDidMount && (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = u)),
              (o.props = r),
              (o.state = u),
              (o.context = s),
              (r = i))
            : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), (r = !1));
      } else {
        (o = t.stateNode),
          $l(e, t),
          (i = t.memoizedProps),
          (s = t.type === t.elementType ? i : Tl(t.type, i)),
          (o.props = s),
          (f = t.pendingProps),
          (d = o.context),
          "object" == typeof (u = n.contextType) && null !== u
            ? (u = Ml(u))
            : (u = Wa(t, (u = $a(n) ? Va : Ha.current)));
        var p = n.getDerivedStateFromProps;
        (c = "function" == typeof p || "function" == typeof o.getSnapshotBeforeUpdate) ||
          ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
            "function" != typeof o.componentWillReceiveProps) ||
          ((i !== f || d !== u) && ro(t, o, r, u)),
          (Vl = !1),
          (d = t.memoizedState),
          (o.state = d),
          Yl(t, r, o, a);
        var m = t.memoizedState;
        i !== f || d !== m || Ba.current || Vl
          ? ("function" == typeof p && (Jl(t, n, p, r), (m = t.memoizedState)),
            (s = Vl || to(t, n, s, r, d, m, u) || !1)
              ? (c ||
                  ("function" != typeof o.UNSAFE_componentWillUpdate &&
                    "function" != typeof o.componentWillUpdate) ||
                  ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, m, u),
                  "function" == typeof o.UNSAFE_componentWillUpdate &&
                    o.UNSAFE_componentWillUpdate(r, m, u)),
                "function" == typeof o.componentDidUpdate && (t.flags |= 4),
                "function" == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024))
              : ("function" != typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = m)),
            (o.props = r),
            (o.state = m),
            (o.context = u),
            (r = s))
          : ("function" != typeof o.componentDidUpdate ||
              (i === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            "function" != typeof o.getSnapshotBeforeUpdate ||
              (i === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return Bi(e, t, n, r, l, a);
    }
    function Bi(e, t, n, r, a, l) {
      Ai(e, t);
      var o = 0 != (128 & t.flags);
      if (!r && !o) return a && Ya(t, n, !1), ru(e, t, l);
      (r = t.stateNode), (zi.current = t);
      var i = o && "function" != typeof n.getDerivedStateFromError ? null : r.render();
      return (
        (t.flags |= 1),
        null !== e && o
          ? ((t.child = so(t, e.child, null, l)), (t.child = so(t, null, i, l)))
          : Di(e, t, i, l),
        (t.memoizedState = r.state),
        a && Ya(t, n, !0),
        t.child
      );
    }
    function Vi(e) {
      var t = e.stateNode;
      t.pendingContext
        ? qa(0, t.pendingContext, t.pendingContext !== t.context)
        : t.context && qa(0, t.context, !1),
        vo(e, t.containerInfo);
    }
    function Wi(e, t, n, r, a) {
      return Pl(), _l(a), (t.flags |= 256), Di(e, t, n, r), t.child;
    }
    var $i,
      Qi,
      qi,
      Ki = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Gi(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function Yi(e, t, n) {
      var r,
        a = t.pendingProps,
        l = ko.current,
        o = !1,
        i = 0 != (128 & t.flags);
      if (
        ((r = i) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & l)),
        r ? ((o = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (l |= 1),
        Aa(ko, 1 & l),
        null === e)
      )
        return (
          Sl(t),
          null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
            ? (0 == (1 & t.mode)
                ? (t.lanes = 1)
                : "$!" === e.data
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
              null)
            : ((i = a.children),
              (e = a.fallback),
              o
                ? ((a = t.mode),
                  (o = t.child),
                  (i = { mode: "hidden", children: i }),
                  0 == (1 & a) && null !== o
                    ? ((o.childLanes = 0), (o.pendingProps = i))
                    : (o = Gs(i, a, 0, null)),
                  (e = Ks(e, a, n, null)),
                  (o.return = t),
                  (e.return = t),
                  (o.sibling = e),
                  (t.child = o),
                  (t.child.memoizedState = Gi(n)),
                  (t.memoizedState = Ki),
                  e)
                : Xi(t, i))
        );
      if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
        return (function (e, t, n, r, a, l, o) {
          if (n)
            return 256 & t.flags
              ? ((t.flags &= -257), Zi(e, t, o, (r = Ei(Error(y(422))))))
              : null !== t.memoizedState
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((l = r.fallback),
                (a = t.mode),
                (r = Gs({ mode: "visible", children: r.children }, a, 0, null)),
                ((l = Ks(l, a, o, null)).flags |= 2),
                (r.return = t),
                (l.return = t),
                (r.sibling = l),
                (t.child = r),
                0 != (1 & t.mode) && so(t, e.child, null, o),
                (t.child.memoizedState = Gi(o)),
                (t.memoizedState = Ki),
                l);
          if (0 == (1 & t.mode)) return Zi(e, t, o, null);
          if ("$!" === a.data) {
            if ((r = a.nextSibling && a.nextSibling.dataset)) var i = r.dgst;
            return (r = i), Zi(e, t, o, (r = Ei((l = Error(y(419))), r, void 0)));
          }
          if (((i = 0 != (o & e.childLanes)), ji || i)) {
            if (null !== (r = Bu)) {
              switch (o & -o) {
                case 4:
                  a = 2;
                  break;
                case 16:
                  a = 8;
                  break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  a = 32;
                  break;
                case 536870912:
                  a = 268435456;
                  break;
                default:
                  a = 0;
              }
              0 !== (a = 0 != (a & (r.suspendedLanes | o)) ? 0 : a) &&
                a !== l.retryLane &&
                ((l.retryLane = a), Bl(e, a), hs(r, e, a, -1));
            }
            return Ns(), Zi(e, t, o, (r = Ei(Error(y(421)))));
          }
          return "$?" === a.data
            ? ((t.flags |= 128),
              (t.child = e.child),
              (t = Us.bind(null, e)),
              (a._reactRetry = t),
              null)
            : ((e = l.treeContext),
              (gl = Sa(a.nextSibling)),
              (hl = t),
              (vl = !0),
              (yl = null),
              null !== e &&
                ((ol[il++] = sl),
                (ol[il++] = cl),
                (ol[il++] = ul),
                (sl = e.id),
                (cl = e.overflow),
                (ul = t)),
              ((t = Xi(t, r.children)).flags |= 4096),
              t);
        })(e, t, i, a, r, l, n);
      if (o) {
        (o = a.fallback), (i = t.mode), (r = (l = e.child).sibling);
        var u = { mode: "hidden", children: a.children };
        return (
          0 == (1 & i) && t.child !== l
            ? (((a = t.child).childLanes = 0), (a.pendingProps = u), (t.deletions = null))
            : ((a = Qs(l, u)).subtreeFlags = 14680064 & l.subtreeFlags),
          null !== r ? (o = Qs(r, o)) : ((o = Ks(o, i, n, null)).flags |= 2),
          (o.return = t),
          (a.return = t),
          (a.sibling = o),
          (t.child = a),
          (a = o),
          (o = t.child),
          (i =
            null === (i = e.child.memoizedState)
              ? Gi(n)
              : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
          (o.memoizedState = i),
          (o.childLanes = e.childLanes & ~n),
          (t.memoizedState = Ki),
          a
        );
      }
      return (
        (e = (o = e.child).sibling),
        (a = Qs(o, { mode: "visible", children: a.children })),
        0 == (1 & t.mode) && (a.lanes = n),
        (a.return = t),
        (a.sibling = null),
        null !== e &&
          (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a
      );
    }
    function Xi(e, t) {
      return (
        ((t = Gs({ mode: "visible", children: t }, e.mode, 0, null)).return = e), (e.child = t)
      );
    }
    function Zi(e, t, n, r) {
      return (
        null !== r && _l(r),
        so(t, e.child, null, n),
        ((e = Xi(t, t.pendingProps.children)).flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Ji(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      null !== r && (r.lanes |= t), Ol(e.return, t, n);
    }
    function eu(e, t, n, r, a) {
      var l = e.memoizedState;
      null === l
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: a,
          })
        : ((l.isBackwards = t),
          (l.rendering = null),
          (l.renderingStartTime = 0),
          (l.last = r),
          (l.tail = n),
          (l.tailMode = a));
    }
    function tu(e, t, n) {
      var r = t.pendingProps,
        a = r.revealOrder,
        l = r.tail;
      if ((Di(e, t, r.children, n), 0 != (2 & (r = ko.current))))
        (r = (1 & r) | 2), (t.flags |= 128);
      else {
        if (null !== e && 0 != (128 & e.flags))
          e: for (e = t.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && Ji(e, n, t);
            else if (19 === e.tag) Ji(e, n, t);
            else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break e;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        r &= 1;
      }
      if ((Aa(ko, r), 0 == (1 & t.mode))) t.memoizedState = null;
      else
        switch (a) {
          case "forwards":
            for (n = t.child, a = null; null !== n; )
              null !== (e = n.alternate) && null === So(e) && (a = n), (n = n.sibling);
            null === (n = a)
              ? ((a = t.child), (t.child = null))
              : ((a = n.sibling), (n.sibling = null)),
              eu(t, !1, a, n, l);
            break;
          case "backwards":
            for (n = null, a = t.child, t.child = null; null !== a; ) {
              if (null !== (e = a.alternate) && null === So(e)) {
                t.child = a;
                break;
              }
              (e = a.sibling), (a.sibling = n), (n = a), (a = e);
            }
            eu(t, !0, n, null, l);
            break;
          case "together":
            eu(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function nu(e, t) {
      0 == (1 & t.mode) &&
        null !== e &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function ru(e, t, n) {
      if (
        (null !== e && (t.dependencies = e.dependencies), (Gu |= t.lanes), 0 == (n & t.childLanes))
      )
        return null;
      if (null !== e && t.child !== e.child) throw Error(y(153));
      if (null !== t.child) {
        for (n = Qs((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
          (e = e.sibling), ((n = n.sibling = Qs(e, e.pendingProps)).return = t);
        n.sibling = null;
      }
      return t.child;
    }
    function au(e, t) {
      if (!vl)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
            null === n ? (e.tail = null) : (n.sibling = null);
            break;
          case "collapsed":
            n = e.tail;
            for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
            null === r
              ? t || null === e.tail
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function lu(e) {
      var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var a = e.child; null !== a; )
          (n |= a.lanes | a.childLanes),
            (r |= 14680064 & a.subtreeFlags),
            (r |= 14680064 & a.flags),
            (a.return = e),
            (a = a.sibling);
      else
        for (a = e.child; null !== a; )
          (n |= a.lanes | a.childLanes),
            (r |= a.subtreeFlags),
            (r |= a.flags),
            (a.return = e),
            (a = a.sibling);
      return (e.subtreeFlags |= r), (e.childLanes = n), t;
    }
    function ou(e, t, n) {
      var r = t.pendingProps;
      switch ((ml(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return lu(t), null;
        case 1:
        case 17:
          return $a(t.type) && Qa(), lu(t), null;
        case 3:
          return (
            (r = t.stateNode),
            yo(),
            Ma(Ba),
            Ma(Ha),
            Eo(),
            r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
            (null !== e && null !== e.child) ||
              (El(t)
                ? (t.flags |= 4)
                : null === e ||
                  (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                  ((t.flags |= 1024), null !== yl && (bs(yl), (yl = null)))),
            lu(t),
            null
          );
        case 5:
          wo(t);
          var a = go(ho.current);
          if (((n = t.type), null !== e && null != t.stateNode))
            Qi(e, t, n, r), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
          else {
            if (!r) {
              if (null === t.stateNode) throw Error(y(166));
              return lu(t), null;
            }
            if (((e = go(po.current)), El(t))) {
              (r = t.stateNode), (n = t.type);
              var l = t.memoizedProps;
              switch (((r[Ca] = t), (r[Pa] = l), (e = 0 != (1 & t.mode)), n)) {
                case "dialog":
                  Zr("cancel", r), Zr("close", r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Zr("load", r);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Kr.length; a++) Zr(Kr[a], r);
                  break;
                case "source":
                  Zr("error", r);
                  break;
                case "img":
                case "image":
                case "link":
                  Zr("error", r), Zr("load", r);
                  break;
                case "details":
                  Zr("toggle", r);
                  break;
                case "input":
                  se(r, l), Zr("invalid", r);
                  break;
                case "select":
                  (r._wrapperState = { wasMultiple: !!l.multiple }), Zr("invalid", r);
                  break;
                case "textarea":
                  ve(r, l), Zr("invalid", r);
              }
              for (var o in (Re(n, l), (a = null), l))
                if (l.hasOwnProperty(o)) {
                  var i = l[o];
                  "children" === o
                    ? "string" == typeof i
                      ? r.textContent !== i &&
                        (!0 !== l.suppressHydrationWarning && fa(r.textContent, i, e),
                        (a = ["children", i]))
                      : "number" == typeof i &&
                        r.textContent !== "" + i &&
                        (!0 !== l.suppressHydrationWarning && fa(r.textContent, i, e),
                        (a = ["children", "" + i]))
                    : w.hasOwnProperty(o) && null != i && "onScroll" === o && Zr("scroll", r);
                }
              switch (n) {
                case "input":
                  le(r), de(r, l, !0);
                  break;
                case "textarea":
                  le(r), be(r);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" == typeof l.onClick && (r.onclick = da);
              }
              (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
            } else {
              (o = 9 === a.nodeType ? a : a.ownerDocument),
                "http://www.w3.org/1999/xhtml" === e && (e = we(n)),
                "http://www.w3.org/1999/xhtml" === e
                  ? "script" === n
                    ? (((e = o.createElement("div")).innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild)))
                    : "string" == typeof r.is
                    ? (e = o.createElement(n, { is: r.is }))
                    : ((e = o.createElement(n)),
                      "select" === n &&
                        ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
                  : (e = o.createElementNS(e, n)),
                (e[Ca] = t),
                (e[Pa] = r),
                $i(e, t),
                (t.stateNode = e);
              e: {
                switch (((o = ze(n, r)), n)) {
                  case "dialog":
                    Zr("cancel", e), Zr("close", e), (a = r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Zr("load", e), (a = r);
                    break;
                  case "video":
                  case "audio":
                    for (a = 0; a < Kr.length; a++) Zr(Kr[a], e);
                    a = r;
                    break;
                  case "source":
                    Zr("error", e), (a = r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Zr("error", e), Zr("load", e), (a = r);
                    break;
                  case "details":
                    Zr("toggle", e), (a = r);
                    break;
                  case "input":
                    se(e, r), (a = ue(e, r)), Zr("invalid", e);
                    break;
                  case "option":
                  default:
                    a = r;
                    break;
                  case "select":
                    (e._wrapperState = { wasMultiple: !!r.multiple }),
                      (a = Y({}, r, { value: void 0 })),
                      Zr("invalid", e);
                    break;
                  case "textarea":
                    ve(e, r), (a = ge(e, r)), Zr("invalid", e);
                }
                for (l in (Re(n, a), (i = a)))
                  if (i.hasOwnProperty(l)) {
                    var u = i[l];
                    "style" === l
                      ? Te(e, u)
                      : "dangerouslySetInnerHTML" === l
                      ? null != (u = u ? u.__html : void 0) && Ee(e, u)
                      : "children" === l
                      ? "string" == typeof u
                        ? ("textarea" !== n || "" !== u) && Ce(e, u)
                        : "number" == typeof u && Ce(e, "" + u)
                      : "suppressContentEditableWarning" !== l &&
                        "suppressHydrationWarning" !== l &&
                        "autoFocus" !== l &&
                        (w.hasOwnProperty(l)
                          ? null != u && "onScroll" === l && Zr("scroll", e)
                          : null != u && z(e, l, u, o));
                  }
                switch (n) {
                  case "input":
                    le(e), de(e, r, !1);
                    break;
                  case "textarea":
                    le(e), be(e);
                    break;
                  case "option":
                    null != r.value && e.setAttribute("value", "" + re(r.value));
                    break;
                  case "select":
                    (e.multiple = !!r.multiple),
                      null != (l = r.value)
                        ? he(e, !!r.multiple, l, !1)
                        : null != r.defaultValue && he(e, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    "function" == typeof a.onClick && (e.onclick = da);
                }
                switch (n) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    r = !!r.autoFocus;
                    break e;
                  case "img":
                    r = !0;
                    break e;
                  default:
                    r = !1;
                }
              }
              r && (t.flags |= 4);
            }
            null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
          }
          return lu(t), null;
        case 6:
          if (e && null != t.stateNode) qi(0, t, e.memoizedProps, r);
          else {
            if ("string" != typeof r && null === t.stateNode) throw Error(y(166));
            if (((n = go(ho.current)), go(po.current), El(t))) {
              if (
                ((r = t.stateNode),
                (n = t.memoizedProps),
                (r[Ca] = t),
                (l = r.nodeValue !== n) && null !== (e = hl))
              )
                switch (e.tag) {
                  case 3:
                    fa(r.nodeValue, n, 0 != (1 & e.mode));
                    break;
                  case 5:
                    !0 !== e.memoizedProps.suppressHydrationWarning &&
                      fa(r.nodeValue, n, 0 != (1 & e.mode));
                }
              l && (t.flags |= 4);
            } else
              ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Ca] = t),
                (t.stateNode = r);
          }
          return lu(t), null;
        case 13:
          if (
            (Ma(ko),
            (r = t.memoizedState),
            null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
          ) {
            if (vl && null !== gl && 0 != (1 & t.mode) && 0 == (128 & t.flags))
              Cl(), Pl(), (t.flags |= 98560), (l = !1);
            else if (((l = El(t)), null !== r && null !== r.dehydrated)) {
              if (null === e) {
                if (!l) throw Error(y(318));
                if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null))
                  throw Error(y(317));
                l[Ca] = t;
              } else Pl(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
              lu(t), (l = !1);
            } else null !== yl && (bs(yl), (yl = null)), (l = !0);
            if (!l) return 65536 & t.flags ? t : null;
          }
          return 0 != (128 & t.flags)
            ? ((t.lanes = n), t)
            : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                r &&
                ((t.child.flags |= 8192),
                0 != (1 & t.mode) &&
                  (null === e || 0 != (1 & ko.current) ? 0 === qu && (qu = 3) : Ns())),
              null !== t.updateQueue && (t.flags |= 4),
              lu(t),
              null);
        case 4:
          return yo(), null === e && ta(t.stateNode.containerInfo), lu(t), null;
        case 10:
          return Il(t.type._context), lu(t), null;
        case 19:
          if ((Ma(ko), null === (l = t.memoizedState))) return lu(t), null;
          if (((r = 0 != (128 & t.flags)), null === (o = l.rendering)))
            if (r) au(l, !1);
            else {
              if (0 !== qu || (null !== e && 0 != (128 & e.flags)))
                for (e = t.child; null !== e; ) {
                  if (null !== (o = So(e))) {
                    for (
                      t.flags |= 128,
                        au(l, !1),
                        null !== (r = o.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                        t.subtreeFlags = 0,
                        r = n,
                        n = t.child;
                      null !== n;

                    )
                      (e = r),
                        ((l = n).flags &= 14680066),
                        null === (o = l.alternate)
                          ? ((l.childLanes = 0),
                            (l.lanes = e),
                            (l.child = null),
                            (l.subtreeFlags = 0),
                            (l.memoizedProps = null),
                            (l.memoizedState = null),
                            (l.updateQueue = null),
                            (l.dependencies = null),
                            (l.stateNode = null))
                          : ((l.childLanes = o.childLanes),
                            (l.lanes = o.lanes),
                            (l.child = o.child),
                            (l.subtreeFlags = 0),
                            (l.deletions = null),
                            (l.memoizedProps = o.memoizedProps),
                            (l.memoizedState = o.memoizedState),
                            (l.updateQueue = o.updateQueue),
                            (l.type = o.type),
                            (e = o.dependencies),
                            (l.dependencies =
                              null === e
                                ? null
                                : { lanes: e.lanes, firstContext: e.firstContext })),
                        (n = n.sibling);
                    return Aa(ko, (1 & ko.current) | 2), t.child;
                  }
                  e = e.sibling;
                }
              null !== l.tail &&
                ct() > ts &&
                ((t.flags |= 128), (r = !0), au(l, !1), (t.lanes = 4194304));
            }
          else {
            if (!r)
              if (null !== (e = So(o))) {
                if (
                  ((t.flags |= 128),
                  (r = !0),
                  null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                  au(l, !0),
                  null === l.tail && "hidden" === l.tailMode && !o.alternate && !vl)
                )
                  return lu(t), null;
              } else
                2 * ct() - l.renderingStartTime > ts &&
                  1073741824 !== n &&
                  ((t.flags |= 128), (r = !0), au(l, !1), (t.lanes = 4194304));
            l.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : (null !== (n = l.last) ? (n.sibling = o) : (t.child = o), (l.last = o));
          }
          return null !== l.tail
            ? ((t = l.tail),
              (l.rendering = t),
              (l.tail = t.sibling),
              (l.renderingStartTime = ct()),
              (t.sibling = null),
              (n = ko.current),
              Aa(ko, r ? (1 & n) | 2 : 1 & n),
              t)
            : (lu(t), null);
        case 22:
        case 23:
          return (
            Es(),
            (r = null !== t.memoizedState),
            null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
            r && 0 != (1 & t.mode)
              ? 0 != (1073741824 & $u) && (lu(t), 6 & t.subtreeFlags && (t.flags |= 8192))
              : lu(t),
            null
          );
        case 24:
        case 25:
          return null;
      }
      throw Error(y(156, t.tag));
    }
    function iu(e, t) {
      switch ((ml(t), t.tag)) {
        case 1:
          return (
            $a(t.type) && Qa(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
          );
        case 3:
          return (
            yo(),
            Ma(Ba),
            Ma(Ha),
            Eo(),
            0 != (65536 & (e = t.flags)) && 0 == (128 & e)
              ? ((t.flags = (-65537 & e) | 128), t)
              : null
          );
        case 5:
          return wo(t), null;
        case 13:
          if ((Ma(ko), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
            if (null === t.alternate) throw Error(y(340));
            Pl();
          }
          return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
          return Ma(ko), null;
        case 4:
          return yo(), null;
        case 10:
          return Il(t.type._context), null;
        case 22:
        case 23:
          return Es(), null;
        default:
          return null;
      }
    }
    ($i = function (e, t) {
      for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === t) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === t) return;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }),
      (Qi = function (e, t, n, r) {
        var a = e.memoizedProps;
        if (a !== r) {
          (e = t.stateNode), go(po.current);
          var l,
            o = null;
          switch (n) {
            case "input":
              (a = ue(e, a)), (r = ue(e, r)), (o = []);
              break;
            case "select":
              (a = Y({}, a, { value: void 0 })), (r = Y({}, r, { value: void 0 })), (o = []);
              break;
            case "textarea":
              (a = ge(e, a)), (r = ge(e, r)), (o = []);
              break;
            default:
              "function" != typeof a.onClick && "function" == typeof r.onClick && (e.onclick = da);
          }
          for (s in (Re(n, r), (n = null), a))
            if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
              if ("style" === s) {
                var i = a[s];
                for (l in i) i.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
              } else
                "dangerouslySetInnerHTML" !== s &&
                  "children" !== s &&
                  "suppressContentEditableWarning" !== s &&
                  "suppressHydrationWarning" !== s &&
                  "autoFocus" !== s &&
                  (w.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
          for (s in r) {
            var u = r[s];
            if (
              ((i = null != a ? a[s] : void 0),
              r.hasOwnProperty(s) && u !== i && (null != u || null != i))
            )
              if ("style" === s)
                if (i) {
                  for (l in i)
                    !i.hasOwnProperty(l) ||
                      (u && u.hasOwnProperty(l)) ||
                      (n || (n = {}), (n[l] = ""));
                  for (l in u)
                    u.hasOwnProperty(l) && i[l] !== u[l] && (n || (n = {}), (n[l] = u[l]));
                } else n || (o || (o = []), o.push(s, n)), (n = u);
              else
                "dangerouslySetInnerHTML" === s
                  ? ((u = u ? u.__html : void 0),
                    (i = i ? i.__html : void 0),
                    null != u && i !== u && (o = o || []).push(s, u))
                  : "children" === s
                  ? ("string" != typeof u && "number" != typeof u) || (o = o || []).push(s, "" + u)
                  : "suppressContentEditableWarning" !== s &&
                    "suppressHydrationWarning" !== s &&
                    (w.hasOwnProperty(s)
                      ? (null != u && "onScroll" === s && Zr("scroll", e), o || i === u || (o = []))
                      : (o = o || []).push(s, u));
          }
          n && (o = o || []).push("style", n);
          var s = o;
          (t.updateQueue = s) && (t.flags |= 4);
        }
      }),
      (qi = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
      });
    var uu = !1,
      su = !1,
      cu = "function" == typeof WeakSet ? WeakSet : Set,
      fu = null;
    function du(e, t) {
      var n = e.ref;
      if (null !== n)
        if ("function" == typeof n)
          try {
            n(null);
          } catch (n) {
            Fs(e, t, n);
          }
        else n.current = null;
    }
    function pu(e, t, n) {
      try {
        n();
      } catch (n) {
        Fs(e, t, n);
      }
    }
    var mu = !1;
    function hu(e, t, n) {
      var r = t.updateQueue;
      if (null !== (r = null !== r ? r.lastEffect : null)) {
        var a = (r = r.next);
        do {
          if ((a.tag & e) === e) {
            var l = a.destroy;
            (a.destroy = void 0), void 0 !== l && pu(t, n, l);
          }
          a = a.next;
        } while (a !== r);
      }
    }
    function gu(e, t) {
      if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function vu(e) {
      var t = e.ref;
      if (null !== t) {
        var n = e.stateNode;
        e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
      }
    }
    function yu(e) {
      var t = e.alternate;
      null !== t && ((e.alternate = null), yu(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
          null !== (t = e.stateNode) &&
          (delete t[Ca], delete t[Pa], delete t[Na], delete t[Ta], delete t[La]),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
    }
    function bu(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function wu(e) {
      e: for (;;) {
        for (; null === e.sibling; ) {
          if (null === e.return || bu(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

        ) {
          if (2 & e.flags) continue e;
          if (null === e.child || 4 === e.tag) continue e;
          (e.child.return = e), (e = e.child);
        }
        if (!(2 & e.flags)) return e.stateNode;
      }
    }
    function ku(e, t, n) {
      var r = e.tag;
      if (5 === r || 6 === r)
        (e = e.stateNode),
          t
            ? 8 === n.nodeType
              ? n.parentNode.insertBefore(e, t)
              : n.insertBefore(e, t)
            : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
              null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = da));
      else if (4 !== r && null !== (e = e.child))
        for (ku(e, t, n), e = e.sibling; null !== e; ) ku(e, t, n), (e = e.sibling);
    }
    function Su(e, t, n) {
      var r = e.tag;
      if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
      else if (4 !== r && null !== (e = e.child))
        for (Su(e, t, n), e = e.sibling; null !== e; ) Su(e, t, n), (e = e.sibling);
    }
    var xu = null,
      Eu = !1;
    function Cu(e, t, n) {
      for (n = n.child; null !== n; ) Pu(e, t, n), (n = n.sibling);
    }
    function Pu(e, t, n) {
      if (yt && "function" == typeof yt.onCommitFiberUnmount)
        try {
          yt.onCommitFiberUnmount(vt, n);
        } catch (e) {}
      switch (n.tag) {
        case 5:
          su || du(n, t);
        case 6:
          var r = xu,
            a = Eu;
          (xu = null),
            Cu(e, t, n),
            (Eu = a),
            null !== (xu = r) &&
              (Eu
                ? ((e = xu),
                  (n = n.stateNode),
                  8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                : xu.removeChild(n.stateNode));
          break;
        case 18:
          null !== xu &&
            (Eu
              ? ((e = xu),
                (n = n.stateNode),
                8 === e.nodeType ? ka(e.parentNode, n) : 1 === e.nodeType && ka(e, n),
                tn(e))
              : ka(xu, n.stateNode));
          break;
        case 4:
          (r = xu),
            (a = Eu),
            (xu = n.stateNode.containerInfo),
            (Eu = !0),
            Cu(e, t, n),
            (xu = r),
            (Eu = a);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!su && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
            a = r = r.next;
            do {
              var l = a,
                o = l.destroy;
              (l = l.tag),
                void 0 !== o && (0 != (2 & l) || 0 != (4 & l)) && pu(n, t, o),
                (a = a.next);
            } while (a !== r);
          }
          Cu(e, t, n);
          break;
        case 1:
          if (!su && (du(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount))
            try {
              (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
            } catch (e) {
              Fs(n, t, e);
            }
          Cu(e, t, n);
          break;
        case 21:
          Cu(e, t, n);
          break;
        case 22:
          1 & n.mode
            ? ((su = (r = su) || null !== n.memoizedState), Cu(e, t, n), (su = r))
            : Cu(e, t, n);
          break;
        default:
          Cu(e, t, n);
      }
    }
    function _u(e) {
      var t = e.updateQueue;
      if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new cu()),
          t.forEach(function (t) {
            var r = Hs.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
      }
    }
    function Nu(e, t) {
      var n = t.deletions;
      if (null !== n)
        for (var r = 0; r < n.length; r++) {
          var a = n[r];
          try {
            var l = e,
              o = t,
              i = o;
            e: for (; null !== i; ) {
              switch (i.tag) {
                case 5:
                  (xu = i.stateNode), (Eu = !1);
                  break e;
                case 3:
                case 4:
                  (xu = i.stateNode.containerInfo), (Eu = !0);
                  break e;
              }
              i = i.return;
            }
            if (null === xu) throw Error(y(160));
            Pu(l, o, a), (xu = null), (Eu = !1);
            var u = a.alternate;
            null !== u && (u.return = null), (a.return = null);
          } catch (e) {
            Fs(a, t, e);
          }
        }
      if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) Tu(t, e), (t = t.sibling);
    }
    function Tu(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((Nu(t, e), Lu(e), 4 & r)) {
            try {
              hu(3, e, e.return), gu(3, e);
            } catch (t) {
              Fs(e, e.return, t);
            }
            try {
              hu(5, e, e.return);
            } catch (t) {
              Fs(e, e.return, t);
            }
          }
          break;
        case 1:
          Nu(t, e), Lu(e), 512 & r && null !== n && du(n, n.return);
          break;
        case 5:
          if ((Nu(t, e), Lu(e), 512 & r && null !== n && du(n, n.return), 32 & e.flags)) {
            var a = e.stateNode;
            try {
              Ce(a, "");
            } catch (t) {
              Fs(e, e.return, t);
            }
          }
          if (4 & r && null != (a = e.stateNode)) {
            var l = e.memoizedProps,
              o = null !== n ? n.memoizedProps : l,
              i = e.type,
              u = e.updateQueue;
            if (((e.updateQueue = null), null !== u))
              try {
                "input" === i && "radio" === l.type && null != l.name && ce(a, l), ze(i, o);
                var s = ze(i, l);
                for (o = 0; o < u.length; o += 2) {
                  var c = u[o],
                    f = u[o + 1];
                  "style" === c
                    ? Te(a, f)
                    : "dangerouslySetInnerHTML" === c
                    ? Ee(a, f)
                    : "children" === c
                    ? Ce(a, f)
                    : z(a, c, f, s);
                }
                switch (i) {
                  case "input":
                    fe(a, l);
                    break;
                  case "textarea":
                    ye(a, l);
                    break;
                  case "select":
                    var d = a._wrapperState.wasMultiple;
                    a._wrapperState.wasMultiple = !!l.multiple;
                    var p = l.value;
                    null != p
                      ? he(a, !!l.multiple, p, !1)
                      : d !== !!l.multiple &&
                        (null != l.defaultValue
                          ? he(a, !!l.multiple, l.defaultValue, !0)
                          : he(a, !!l.multiple, l.multiple ? [] : "", !1));
                }
                a[Pa] = l;
              } catch (t) {
                Fs(e, e.return, t);
              }
          }
          break;
        case 6:
          if ((Nu(t, e), Lu(e), 4 & r)) {
            if (null === e.stateNode) throw Error(y(162));
            (a = e.stateNode), (l = e.memoizedProps);
            try {
              a.nodeValue = l;
            } catch (t) {
              Fs(e, e.return, t);
            }
          }
          break;
        case 3:
          if ((Nu(t, e), Lu(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
            try {
              tn(t.containerInfo);
            } catch (t) {
              Fs(e, e.return, t);
            }
          break;
        case 4:
        default:
          Nu(t, e), Lu(e);
          break;
        case 13:
          Nu(t, e),
            Lu(e),
            8192 & (a = e.child).flags &&
              ((l = null !== a.memoizedState),
              (a.stateNode.isHidden = l),
              !l || (null !== a.alternate && null !== a.alternate.memoizedState) || (es = ct())),
            4 & r && _u(e);
          break;
        case 22:
          if (
            ((c = null !== n && null !== n.memoizedState),
            1 & e.mode ? ((su = (s = su) || c), Nu(t, e), (su = s)) : Nu(t, e),
            Lu(e),
            8192 & r)
          ) {
            if (
              ((s = null !== e.memoizedState),
              (e.stateNode.isHidden = s) && !c && 0 != (1 & e.mode))
            )
              for (fu = e, c = e.child; null !== c; ) {
                for (f = fu = c; null !== fu; ) {
                  switch (((p = (d = fu).child), d.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      hu(4, d, d.return);
                      break;
                    case 1:
                      du(d, d.return);
                      var m = d.stateNode;
                      if ("function" == typeof m.componentWillUnmount) {
                        (r = d), (n = d.return);
                        try {
                          (t = r),
                            (m.props = t.memoizedProps),
                            (m.state = t.memoizedState),
                            m.componentWillUnmount();
                        } catch (e) {
                          Fs(r, n, e);
                        }
                      }
                      break;
                    case 5:
                      du(d, d.return);
                      break;
                    case 22:
                      if (null !== d.memoizedState) {
                        Du(f);
                        continue;
                      }
                  }
                  null !== p ? ((p.return = d), (fu = p)) : Du(f);
                }
                c = c.sibling;
              }
            e: for (c = null, f = e; ; ) {
              if (5 === f.tag) {
                if (null === c) {
                  c = f;
                  try {
                    (a = f.stateNode),
                      s
                        ? "function" == typeof (l = a.style).setProperty
                          ? l.setProperty("display", "none", "important")
                          : (l.display = "none")
                        : ((i = f.stateNode),
                          (o =
                            null != (u = f.memoizedProps.style) && u.hasOwnProperty("display")
                              ? u.display
                              : null),
                          (i.style.display = Ne("display", o)));
                  } catch (t) {
                    Fs(e, e.return, t);
                  }
                }
              } else if (6 === f.tag) {
                if (null === c)
                  try {
                    f.stateNode.nodeValue = s ? "" : f.memoizedProps;
                  } catch (t) {
                    Fs(e, e.return, t);
                  }
              } else if (
                ((22 !== f.tag && 23 !== f.tag) || null === f.memoizedState || f === e) &&
                null !== f.child
              ) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === e) break e;
              for (; null === f.sibling; ) {
                if (null === f.return || f.return === e) break e;
                c === f && (c = null), (f = f.return);
              }
              c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
            }
          }
          break;
        case 19:
          Nu(t, e), Lu(e), 4 & r && _u(e);
        case 21:
      }
    }
    function Lu(e) {
      var t = e.flags;
      if (2 & t) {
        try {
          e: {
            for (var n = e.return; null !== n; ) {
              if (bu(n)) {
                var r = n;
                break e;
              }
              n = n.return;
            }
            throw Error(y(160));
          }
          switch (r.tag) {
            case 5:
              var a = r.stateNode;
              32 & r.flags && (Ce(a, ""), (r.flags &= -33)), Su(e, wu(e), a);
              break;
            case 3:
            case 4:
              var l = r.stateNode.containerInfo;
              ku(e, wu(e), l);
              break;
            default:
              throw Error(y(161));
          }
        } catch (t) {
          Fs(e, e.return, t);
        }
        e.flags &= -3;
      }
      4096 & t && (e.flags &= -4097);
    }
    function Ru(e, t, n) {
      (fu = e), zu(e, t, n);
    }
    function zu(e, t, n) {
      for (var r = 0 != (1 & e.mode); null !== fu; ) {
        var a = fu,
          l = a.child;
        if (22 === a.tag && r) {
          var o = null !== a.memoizedState || uu;
          if (!o) {
            var i = a.alternate,
              u = (null !== i && null !== i.memoizedState) || su;
            i = uu;
            var s = su;
            if (((uu = o), (su = u) && !s))
              for (fu = a; null !== fu; )
                (u = (o = fu).child),
                  22 === o.tag && null !== o.memoizedState
                    ? Iu(a)
                    : null !== u
                    ? ((u.return = o), (fu = u))
                    : Iu(a);
            for (; null !== l; ) (fu = l), zu(l, t, n), (l = l.sibling);
            (fu = a), (uu = i), (su = s);
          }
          ju(e);
        } else 0 != (8772 & a.subtreeFlags) && null !== l ? ((l.return = a), (fu = l)) : ju(e);
      }
    }
    function ju(e) {
      for (; null !== fu; ) {
        var t = fu;
        if (0 != (8772 & t.flags)) {
          var n = t.alternate;
          try {
            if (0 != (8772 & t.flags))
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  su || gu(5, t);
                  break;
                case 1:
                  var r = t.stateNode;
                  if (4 & t.flags && !su)
                    if (null === n) r.componentDidMount();
                    else {
                      var a =
                        t.elementType === t.type ? n.memoizedProps : Tl(t.type, n.memoizedProps);
                      r.componentDidUpdate(
                        a,
                        n.memoizedState,
                        r.__reactInternalSnapshotBeforeUpdate
                      );
                    }
                  var l = t.updateQueue;
                  null !== l && Xl(t, l, r);
                  break;
                case 3:
                  var o = t.updateQueue;
                  if (null !== o) {
                    if (((n = null), null !== t.child))
                      switch (t.child.tag) {
                        case 5:
                        case 1:
                          n = t.child.stateNode;
                      }
                    Xl(t, o, n);
                  }
                  break;
                case 5:
                  var i = t.stateNode;
                  if (null === n && 4 & t.flags) {
                    n = i;
                    var u = t.memoizedProps;
                    switch (t.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        u.autoFocus && n.focus();
                        break;
                      case "img":
                        u.src && (n.src = u.src);
                    }
                  }
                  break;
                case 6:
                case 4:
                case 12:
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                case 13:
                  if (null === t.memoizedState) {
                    var s = t.alternate;
                    if (null !== s) {
                      var c = s.memoizedState;
                      if (null !== c) {
                        var f = c.dehydrated;
                        null !== f && tn(f);
                      }
                    }
                  }
                  break;
                default:
                  throw Error(y(163));
              }
            su || (512 & t.flags && vu(t));
          } catch (e) {
            Fs(t, t.return, e);
          }
        }
        if (t === e) {
          fu = null;
          break;
        }
        if (null !== (n = t.sibling)) {
          (n.return = t.return), (fu = n);
          break;
        }
        fu = t.return;
      }
    }
    function Du(e) {
      for (; null !== fu; ) {
        var t = fu;
        if (t === e) {
          fu = null;
          break;
        }
        var n = t.sibling;
        if (null !== n) {
          (n.return = t.return), (fu = n);
          break;
        }
        fu = t.return;
      }
    }
    function Iu(e) {
      for (; null !== fu; ) {
        var t = fu;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var n = t.return;
              try {
                gu(4, t);
              } catch (e) {
                Fs(t, n, e);
              }
              break;
            case 1:
              var r = t.stateNode;
              if ("function" == typeof r.componentDidMount) {
                var a = t.return;
                try {
                  r.componentDidMount();
                } catch (e) {
                  Fs(t, a, e);
                }
              }
              var l = t.return;
              try {
                vu(t);
              } catch (e) {
                Fs(t, l, e);
              }
              break;
            case 5:
              var o = t.return;
              try {
                vu(t);
              } catch (e) {
                Fs(t, o, e);
              }
          }
        } catch (e) {
          Fs(t, t.return, e);
        }
        if (t === e) {
          fu = null;
          break;
        }
        var i = t.sibling;
        if (null !== i) {
          (i.return = t.return), (fu = i);
          break;
        }
        fu = t.return;
      }
    }
    var Ou,
      Fu = Math.ceil,
      Mu = j.ReactCurrentDispatcher,
      Au = j.ReactCurrentOwner,
      Uu = j.ReactCurrentBatchConfig,
      Hu = 0,
      Bu = null,
      Vu = null,
      Wu = 0,
      $u = 0,
      Qu = Fa(0),
      qu = 0,
      Ku = null,
      Gu = 0,
      Yu = 0,
      Xu = 0,
      Zu = null,
      Ju = null,
      es = 0,
      ts = 1 / 0,
      ns = null,
      rs = !1,
      as = null,
      ls = null,
      os = !1,
      is = null,
      us = 0,
      ss = 0,
      cs = null,
      fs = -1,
      ds = 0;
    function ps() {
      return 0 != (6 & Hu) ? ct() : -1 !== fs ? fs : (fs = ct());
    }
    function ms(e) {
      return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & Hu) && 0 !== Wu
        ? Wu & -Wu
        : null !== Nl.transition
        ? (0 === ds && (ds = Nt()), ds)
        : 0 !== (e = zt)
        ? e
        : (e = void 0 === (e = window.event) ? 16 : cn(e.type));
    }
    function hs(e, t, n, r) {
      if (50 < ss) throw ((ss = 0), (cs = null), Error(y(185)));
      Lt(e, n, r),
        (0 != (2 & Hu) && e === Bu) ||
          (e === Bu && (0 == (2 & Hu) && (Yu |= n), 4 === qu && ws(e, Wu)),
          gs(e, r),
          1 === n && 0 === Hu && 0 == (1 & t.mode) && ((ts = ct() + 500), Za && tl()));
    }
    function gs(e, t) {
      var n = e.callbackNode;
      !(function (e, t) {
        for (
          var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes;
          0 < l;

        ) {
          var o = 31 - bt(l),
            i = 1 << o,
            u = a[o];
          -1 === u
            ? (0 != (i & n) && 0 == (i & r)) || (a[o] = Pt(i, t))
            : u <= t && (e.expiredLanes |= i),
            (l &= ~i);
        }
      })(e, t);
      var r = Ct(e, e === Bu ? Wu : 0);
      if (0 === r) null !== n && it(n), (e.callbackNode = null), (e.callbackPriority = 0);
      else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && it(n), 1 === t))
          0 === e.tag
            ? (function (e) {
                (Za = !0), el(e);
              })(ks.bind(null, e))
            : el(ks.bind(null, e)),
            ba(function () {
              0 == (6 & Hu) && tl();
            }),
            (n = null);
        else {
          switch (jt(r)) {
            case 1:
              n = dt;
              break;
            case 4:
              n = pt;
              break;
            case 16:
            default:
              n = mt;
              break;
            case 536870912:
              n = gt;
          }
          n = Bs(n, vs.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
      }
    }
    function vs(e, t) {
      if (((fs = -1), (ds = 0), 0 != (6 & Hu))) throw Error(y(327));
      var n = e.callbackNode;
      if (Is() && e.callbackNode !== n) return null;
      var r = Ct(e, e === Bu ? Wu : 0);
      if (0 === r) return null;
      if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Ts(e, r);
      else {
        t = r;
        var a = Hu;
        Hu |= 2;
        var l = _s();
        for ((Bu === e && Wu === t) || ((ns = null), (ts = ct() + 500), Cs(e, t)); ; )
          try {
            Rs();
            break;
          } catch (t) {
            Ps(e, t);
          }
        Dl(), (Mu.current = l), (Hu = a), null !== Vu ? (t = 0) : ((Bu = null), (Wu = 0), (t = qu));
      }
      if (0 !== t) {
        if ((2 === t && 0 !== (a = _t(e)) && ((r = a), (t = ys(e, a))), 1 === t))
          throw ((n = Ku), Cs(e, 0), ws(e, r), gs(e, ct()), n);
        if (6 === t) ws(e, r);
        else {
          if (
            ((a = e.current.alternate),
            0 == (30 & r) &&
              !(function (e) {
                for (var t = e; ; ) {
                  if (16384 & t.flags) {
                    var n = t.updateQueue;
                    if (null !== n && null !== (n = n.stores))
                      for (var r = 0; r < n.length; r++) {
                        var a = n[r],
                          l = a.getSnapshot;
                        a = a.value;
                        try {
                          if (!wr(l(), a)) return !1;
                        } catch (e) {
                          return !1;
                        }
                      }
                  }
                  if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                    (n.return = t), (t = n);
                  else {
                    if (t === e) break;
                    for (; null === t.sibling; ) {
                      if (null === t.return || t.return === e) return !0;
                      t = t.return;
                    }
                    (t.sibling.return = t.return), (t = t.sibling);
                  }
                }
                return !0;
              })(a) &&
              (2 === (t = Ts(e, r)) && 0 !== (l = _t(e)) && ((r = l), (t = ys(e, l))), 1 === t))
          )
            throw ((n = Ku), Cs(e, 0), ws(e, r), gs(e, ct()), n);
          switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
            case 0:
            case 1:
              throw Error(y(345));
            case 2:
            case 5:
              Ds(e, Ju, ns);
              break;
            case 3:
              if ((ws(e, r), (130023424 & r) === r && 10 < (t = es + 500 - ct()))) {
                if (0 !== Ct(e, 0)) break;
                if (((a = e.suspendedLanes) & r) !== r) {
                  ps(), (e.pingedLanes |= e.suspendedLanes & a);
                  break;
                }
                e.timeoutHandle = ga(Ds.bind(null, e, Ju, ns), t);
                break;
              }
              Ds(e, Ju, ns);
              break;
            case 4:
              if ((ws(e, r), (4194240 & r) === r)) break;
              for (t = e.eventTimes, a = -1; 0 < r; ) {
                var o = 31 - bt(r);
                (l = 1 << o), (o = t[o]) > a && (a = o), (r &= ~l);
              }
              if (
                ((r = a),
                10 <
                  (r =
                    (120 > (r = ct() - r)
                      ? 120
                      : 480 > r
                      ? 480
                      : 1080 > r
                      ? 1080
                      : 1920 > r
                      ? 1920
                      : 3e3 > r
                      ? 3e3
                      : 4320 > r
                      ? 4320
                      : 1960 * Fu(r / 1960)) - r))
              ) {
                e.timeoutHandle = ga(Ds.bind(null, e, Ju, ns), r);
                break;
              }
              Ds(e, Ju, ns);
              break;
            default:
              throw Error(y(329));
          }
        }
      }
      return gs(e, ct()), e.callbackNode === n ? vs.bind(null, e) : null;
    }
    function ys(e, t) {
      var n = Zu;
      return (
        e.current.memoizedState.isDehydrated && (Cs(e, t).flags |= 256),
        2 !== (e = Ts(e, t)) && ((t = Ju), (Ju = n), null !== t && bs(t)),
        e
      );
    }
    function bs(e) {
      null === Ju ? (Ju = e) : Ju.push.apply(Ju, e);
    }
    function ws(e, t) {
      for (
        t &= ~Xu, t &= ~Yu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
        0 < t;

      ) {
        var n = 31 - bt(t),
          r = 1 << n;
        (e[n] = -1), (t &= ~r);
      }
    }
    function ks(e) {
      if (0 != (6 & Hu)) throw Error(y(327));
      Is();
      var t = Ct(e, 0);
      if (0 == (1 & t)) return gs(e, ct()), null;
      var n = Ts(e, t);
      if (0 !== e.tag && 2 === n) {
        var r = _t(e);
        0 !== r && ((t = r), (n = ys(e, r)));
      }
      if (1 === n) throw ((n = Ku), Cs(e, 0), ws(e, t), gs(e, ct()), n);
      if (6 === n) throw Error(y(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Ds(e, Ju, ns),
        gs(e, ct()),
        null
      );
    }
    function Ss(e, t) {
      var n = Hu;
      Hu |= 1;
      try {
        return e(t);
      } finally {
        0 === (Hu = n) && ((ts = ct() + 500), Za && tl());
      }
    }
    function xs(e) {
      null !== is && 0 === is.tag && 0 == (6 & Hu) && Is();
      var t = Hu;
      Hu |= 1;
      var n = Uu.transition,
        r = zt;
      try {
        if (((Uu.transition = null), (zt = 1), e)) return e();
      } finally {
        (zt = r), (Uu.transition = n), 0 == (6 & (Hu = t)) && tl();
      }
    }
    function Es() {
      ($u = Qu.current), Ma(Qu);
    }
    function Cs(e, t) {
      (e.finishedWork = null), (e.finishedLanes = 0);
      var n = e.timeoutHandle;
      if ((-1 !== n && ((e.timeoutHandle = -1), va(n)), null !== Vu))
        for (n = Vu.return; null !== n; ) {
          var r = n;
          switch ((ml(r), r.tag)) {
            case 1:
              null != (r = r.type.childContextTypes) && Qa();
              break;
            case 3:
              yo(), Ma(Ba), Ma(Ha), Eo();
              break;
            case 5:
              wo(r);
              break;
            case 4:
              yo();
              break;
            case 13:
            case 19:
              Ma(ko);
              break;
            case 10:
              Il(r.type._context);
              break;
            case 22:
            case 23:
              Es();
          }
          n = n.return;
        }
      if (
        ((Bu = e),
        (Vu = e = Qs(e.current, null)),
        (Wu = $u = t),
        (qu = 0),
        (Ku = null),
        (Xu = Yu = Gu = 0),
        (Ju = Zu = null),
        null !== Al)
      ) {
        for (t = 0; t < Al.length; t++)
          if (null !== (r = (n = Al[t]).interleaved)) {
            n.interleaved = null;
            var a = r.next,
              l = n.pending;
            if (null !== l) {
              var o = l.next;
              (l.next = a), (r.next = o);
            }
            n.pending = r;
          }
        Al = null;
      }
      return e;
    }
    function Ps(e, t) {
      for (;;) {
        var n = Vu;
        try {
          if ((Dl(), (Co.current = bi), Ro)) {
            for (var r = No.memoizedState; null !== r; ) {
              var a = r.queue;
              null !== a && (a.pending = null), (r = r.next);
            }
            Ro = !1;
          }
          if (
            ((_o = 0),
            (Lo = To = No = null),
            (zo = !1),
            (jo = 0),
            (Au.current = null),
            null === n || null === n.return)
          ) {
            (qu = 1), (Ku = t), (Vu = null);
            break;
          }
          e: {
            var l = e,
              o = n.return,
              i = n,
              u = t;
            if (
              ((t = Wu),
              (i.flags |= 32768),
              null !== u && "object" == typeof u && "function" == typeof u.then)
            ) {
              var s = u,
                c = i,
                f = c.tag;
              if (0 == (1 & c.mode) && (0 === f || 11 === f || 15 === f)) {
                var d = c.alternate;
                d
                  ? ((c.updateQueue = d.updateQueue),
                    (c.memoizedState = d.memoizedState),
                    (c.lanes = d.lanes))
                  : ((c.updateQueue = null), (c.memoizedState = null));
              }
              var p = Li(o);
              if (null !== p) {
                (p.flags &= -257), Ri(p, o, i, 0, t), 1 & p.mode && Ti(l, s, t), (u = s);
                var m = (t = p).updateQueue;
                if (null === m) {
                  var h = new Set();
                  h.add(u), (t.updateQueue = h);
                } else m.add(u);
                break e;
              }
              if (0 == (1 & t)) {
                Ti(l, s, t), Ns();
                break e;
              }
              u = Error(y(426));
            } else if (vl && 1 & i.mode) {
              var g = Li(o);
              if (null !== g) {
                0 == (65536 & g.flags) && (g.flags |= 256), Ri(g, o, i, 0, t), _l(xi(u, i));
                break e;
              }
            }
            (l = u = xi(u, i)),
              4 !== qu && (qu = 2),
              null === Zu ? (Zu = [l]) : Zu.push(l),
              (l = o);
            do {
              switch (l.tag) {
                case 3:
                  (l.flags |= 65536), (t &= -t), (l.lanes |= t), Gl(l, _i(0, u, t));
                  break e;
                case 1:
                  i = u;
                  var v = l.type,
                    b = l.stateNode;
                  if (
                    0 == (128 & l.flags) &&
                    ("function" == typeof v.getDerivedStateFromError ||
                      (null !== b &&
                        "function" == typeof b.componentDidCatch &&
                        (null === ls || !ls.has(b))))
                  ) {
                    (l.flags |= 65536), (t &= -t), (l.lanes |= t), Gl(l, Ni(l, i, t));
                    break e;
                  }
              }
              l = l.return;
            } while (null !== l);
          }
          js(n);
        } catch (e) {
          (t = e), Vu === n && null !== n && (Vu = n = n.return);
          continue;
        }
        break;
      }
    }
    function _s() {
      var e = Mu.current;
      return (Mu.current = bi), null === e ? bi : e;
    }
    function Ns() {
      (0 !== qu && 3 !== qu && 2 !== qu) || (qu = 4),
        null === Bu || (0 == (268435455 & Gu) && 0 == (268435455 & Yu)) || ws(Bu, Wu);
    }
    function Ts(e, t) {
      var n = Hu;
      Hu |= 2;
      var r = _s();
      for ((Bu === e && Wu === t) || ((ns = null), Cs(e, t)); ; )
        try {
          Ls();
          break;
        } catch (t) {
          Ps(e, t);
        }
      if ((Dl(), (Hu = n), (Mu.current = r), null !== Vu)) throw Error(y(261));
      return (Bu = null), (Wu = 0), qu;
    }
    function Ls() {
      for (; null !== Vu; ) zs(Vu);
    }
    function Rs() {
      for (; null !== Vu && !ut(); ) zs(Vu);
    }
    function zs(e) {
      var t = Ou(e.alternate, e, $u);
      (e.memoizedProps = e.pendingProps), null === t ? js(e) : (Vu = t), (Au.current = null);
    }
    function js(e) {
      var t = e;
      do {
        var n = t.alternate;
        if (((e = t.return), 0 == (32768 & t.flags))) {
          if (null !== (n = ou(n, t, $u))) return void (Vu = n);
        } else {
          if (null !== (n = iu(n, t))) return (n.flags &= 32767), void (Vu = n);
          if (null === e) return (qu = 6), void (Vu = null);
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        }
        if (null !== (t = t.sibling)) return void (Vu = t);
        Vu = t = e;
      } while (null !== t);
      0 === qu && (qu = 5);
    }
    function Ds(e, t, n) {
      var r = zt,
        a = Uu.transition;
      try {
        (Uu.transition = null),
          (zt = 1),
          (function (e, t, n, r) {
            do {
              Is();
            } while (null !== is);
            if (0 != (6 & Hu)) throw Error(y(327));
            n = e.finishedWork;
            var a = e.finishedLanes;
            if (null === n) return null;
            if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
              throw Error(y(177));
            (e.callbackNode = null), (e.callbackPriority = 0);
            var l = n.lanes | n.childLanes;
            if (
              ((function (e, t) {
                var n = e.pendingLanes & ~t;
                (e.pendingLanes = t),
                  (e.suspendedLanes = 0),
                  (e.pingedLanes = 0),
                  (e.expiredLanes &= t),
                  (e.mutableReadLanes &= t),
                  (e.entangledLanes &= t),
                  (t = e.entanglements);
                var r = e.eventTimes;
                for (e = e.expirationTimes; 0 < n; ) {
                  var a = 31 - bt(n),
                    l = 1 << a;
                  (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                }
              })(e, l),
              e === Bu && ((Vu = Bu = null), (Wu = 0)),
              (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                os ||
                ((os = !0),
                Bs(mt, function () {
                  return Is(), null;
                })),
              (l = 0 != (15990 & n.flags)),
              0 != (15990 & n.subtreeFlags) || l)
            ) {
              (l = Uu.transition), (Uu.transition = null);
              var o = zt;
              zt = 1;
              var i = Hu;
              (Hu |= 4),
                (Au.current = null),
                (function (e, t) {
                  if (((pa = rn), Pr((e = Cr())))) {
                    if ("selectionStart" in e)
                      var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                      e: {
                        var r =
                          (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection &&
                          n.getSelection();
                        if (r && 0 !== r.rangeCount) {
                          n = r.anchorNode;
                          var a = r.anchorOffset,
                            l = r.focusNode;
                          r = r.focusOffset;
                          try {
                            n.nodeType, l.nodeType;
                          } catch (e) {
                            n = null;
                            break e;
                          }
                          var o = 0,
                            i = -1,
                            u = -1,
                            s = 0,
                            c = 0,
                            f = e,
                            d = null;
                          t: for (;;) {
                            for (
                              var p;
                              f !== n || (0 !== a && 3 !== f.nodeType) || (i = o + a),
                                f !== l || (0 !== r && 3 !== f.nodeType) || (u = o + r),
                                3 === f.nodeType && (o += f.nodeValue.length),
                                null !== (p = f.firstChild);

                            )
                              (d = f), (f = p);
                            for (;;) {
                              if (f === e) break t;
                              if (
                                (d === n && ++s === a && (i = o),
                                d === l && ++c === r && (u = o),
                                null !== (p = f.nextSibling))
                              )
                                break;
                              d = (f = d).parentNode;
                            }
                            f = p;
                          }
                          n = -1 === i || -1 === u ? null : { start: i, end: u };
                        } else n = null;
                      }
                    n = n || { start: 0, end: 0 };
                  } else n = null;
                  for (ma = { focusedElem: e, selectionRange: n }, rn = !1, fu = t; null !== fu; )
                    if (((e = (t = fu).child), 0 != (1028 & t.subtreeFlags) && null !== e))
                      (e.return = t), (fu = e);
                    else
                      for (; null !== fu; ) {
                        t = fu;
                        try {
                          var m = t.alternate;
                          if (0 != (1024 & t.flags))
                            switch (t.tag) {
                              case 0:
                              case 11:
                              case 15:
                              case 5:
                              case 6:
                              case 4:
                              case 17:
                                break;
                              case 1:
                                if (null !== m) {
                                  var h = m.memoizedProps,
                                    g = m.memoizedState,
                                    v = t.stateNode,
                                    b = v.getSnapshotBeforeUpdate(
                                      t.elementType === t.type ? h : Tl(t.type, h),
                                      g
                                    );
                                  v.__reactInternalSnapshotBeforeUpdate = b;
                                }
                                break;
                              case 3:
                                var w = t.stateNode.containerInfo;
                                1 === w.nodeType
                                  ? (w.textContent = "")
                                  : 9 === w.nodeType &&
                                    w.documentElement &&
                                    w.removeChild(w.documentElement);
                                break;
                              default:
                                throw Error(y(163));
                            }
                        } catch (e) {
                          Fs(t, t.return, e);
                        }
                        if (null !== (e = t.sibling)) {
                          (e.return = t.return), (fu = e);
                          break;
                        }
                        fu = t.return;
                      }
                  (m = mu), (mu = !1);
                })(e, n),
                Tu(n, e),
                _r(ma),
                (rn = !!pa),
                (ma = pa = null),
                (e.current = n),
                Ru(n, e, a),
                st(),
                (Hu = i),
                (zt = o),
                (Uu.transition = l);
            } else e.current = n;
            if (
              (os && ((os = !1), (is = e), (us = a)),
              0 === (l = e.pendingLanes) && (ls = null),
              (function (e) {
                if (yt && "function" == typeof yt.onCommitFiberRoot)
                  try {
                    yt.onCommitFiberRoot(vt, e, void 0, 128 == (128 & e.current.flags));
                  } catch (e) {}
              })(n.stateNode),
              gs(e, ct()),
              null !== t)
            )
              for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                (a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest });
            if (rs) throw ((rs = !1), (e = as), (as = null), e);
            0 != (1 & us) && 0 !== e.tag && Is(),
              0 != (1 & (l = e.pendingLanes)) ? (e === cs ? ss++ : ((ss = 0), (cs = e))) : (ss = 0),
              tl();
          })(e, t, n, r);
      } finally {
        (Uu.transition = a), (zt = r);
      }
      return null;
    }
    function Is() {
      if (null !== is) {
        var e = jt(us),
          t = Uu.transition,
          n = zt;
        try {
          if (((Uu.transition = null), (zt = 16 > e ? 16 : e), null === is)) var r = !1;
          else {
            if (((e = is), (is = null), (us = 0), 0 != (6 & Hu))) throw Error(y(331));
            var a = Hu;
            for (Hu |= 4, fu = e.current; null !== fu; ) {
              var l = fu,
                o = l.child;
              if (0 != (16 & fu.flags)) {
                var i = l.deletions;
                if (null !== i) {
                  for (var u = 0; u < i.length; u++) {
                    var s = i[u];
                    for (fu = s; null !== fu; ) {
                      var c = fu;
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          hu(8, c, l);
                      }
                      var f = c.child;
                      if (null !== f) (f.return = c), (fu = f);
                      else
                        for (; null !== fu; ) {
                          var d = (c = fu).sibling,
                            p = c.return;
                          if ((yu(c), c === s)) {
                            fu = null;
                            break;
                          }
                          if (null !== d) {
                            (d.return = p), (fu = d);
                            break;
                          }
                          fu = p;
                        }
                    }
                  }
                  var m = l.alternate;
                  if (null !== m) {
                    var h = m.child;
                    if (null !== h) {
                      m.child = null;
                      do {
                        var g = h.sibling;
                        (h.sibling = null), (h = g);
                      } while (null !== h);
                    }
                  }
                  fu = l;
                }
              }
              if (0 != (2064 & l.subtreeFlags) && null !== o) (o.return = l), (fu = o);
              else
                e: for (; null !== fu; ) {
                  if (0 != (2048 & (l = fu).flags))
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hu(9, l, l.return);
                    }
                  var v = l.sibling;
                  if (null !== v) {
                    (v.return = l.return), (fu = v);
                    break e;
                  }
                  fu = l.return;
                }
            }
            var b = e.current;
            for (fu = b; null !== fu; ) {
              var w = (o = fu).child;
              if (0 != (2064 & o.subtreeFlags) && null !== w) (w.return = o), (fu = w);
              else
                e: for (o = b; null !== fu; ) {
                  if (0 != (2048 & (i = fu).flags))
                    try {
                      switch (i.tag) {
                        case 0:
                        case 11:
                        case 15:
                          gu(9, i);
                      }
                    } catch (e) {
                      Fs(i, i.return, e);
                    }
                  if (i === o) {
                    fu = null;
                    break e;
                  }
                  var k = i.sibling;
                  if (null !== k) {
                    (k.return = i.return), (fu = k);
                    break e;
                  }
                  fu = i.return;
                }
            }
            if (((Hu = a), tl(), yt && "function" == typeof yt.onPostCommitFiberRoot))
              try {
                yt.onPostCommitFiberRoot(vt, e);
              } catch (e) {}
            r = !0;
          }
          return r;
        } finally {
          (zt = n), (Uu.transition = t);
        }
      }
      return !1;
    }
    function Os(e, t, n) {
      (e = ql(e, (t = _i(0, (t = xi(n, t)), 1)), 1)),
        (t = ps()),
        null !== e && (Lt(e, 1, t), gs(e, t));
    }
    function Fs(e, t, n) {
      if (3 === e.tag) Os(e, e, n);
      else
        for (; null !== t; ) {
          if (3 === t.tag) {
            Os(t, e, n);
            break;
          }
          if (1 === t.tag) {
            var r = t.stateNode;
            if (
              "function" == typeof t.type.getDerivedStateFromError ||
              ("function" == typeof r.componentDidCatch && (null === ls || !ls.has(r)))
            ) {
              (t = ql(t, (e = Ni(t, (e = xi(n, e)), 1)), 1)),
                (e = ps()),
                null !== t && (Lt(t, 1, e), gs(t, e));
              break;
            }
          }
          t = t.return;
        }
    }
    function Ms(e, t, n) {
      var r = e.pingCache;
      null !== r && r.delete(t),
        (t = ps()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Bu === e &&
          (Wu & n) === n &&
          (4 === qu || (3 === qu && (130023424 & Wu) === Wu && 500 > ct() - es)
            ? Cs(e, 0)
            : (Xu |= n)),
        gs(e, t);
    }
    function As(e, t) {
      0 === t &&
        (0 == (1 & e.mode) ? (t = 1) : ((t = xt), 0 == (130023424 & (xt <<= 1)) && (xt = 4194304)));
      var n = ps();
      null !== (e = Bl(e, t)) && (Lt(e, t, n), gs(e, n));
    }
    function Us(e) {
      var t = e.memoizedState,
        n = 0;
      null !== t && (n = t.retryLane), As(e, n);
    }
    function Hs(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          null !== a && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        default:
          throw Error(y(314));
      }
      null !== r && r.delete(t), As(e, n);
    }
    function Bs(e, t) {
      return ot(e, t);
    }
    function Vs(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function Ws(e, t, n, r) {
      return new Vs(e, t, n, r);
    }
    function $s(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function Qs(e, t) {
      var n = e.alternate;
      return (
        null === n
          ? (((n = Ws(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = 14680064 & e.flags),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function qs(e, t, n, r, a, l) {
      var o = 2;
      if (((r = e), "function" == typeof e)) $s(e) && (o = 1);
      else if ("string" == typeof e) o = 5;
      else
        e: switch (e) {
          case O:
            return Ks(n.children, a, l, t);
          case F:
            (o = 8), (a |= 8);
            break;
          case M:
            return ((e = Ws(12, n, t, 2 | a)).elementType = M), (e.lanes = l), e;
          case B:
            return ((e = Ws(13, n, t, a)).elementType = B), (e.lanes = l), e;
          case V:
            return ((e = Ws(19, n, t, a)).elementType = V), (e.lanes = l), e;
          case Q:
            return Gs(n, a, l, t);
          default:
            if ("object" == typeof e && null !== e)
              switch (e.$$typeof) {
                case A:
                  o = 10;
                  break e;
                case U:
                  o = 9;
                  break e;
                case H:
                  o = 11;
                  break e;
                case W:
                  o = 14;
                  break e;
                case $:
                  (o = 16), (r = null);
                  break e;
              }
            throw Error(y(130, null == e ? e : typeof e, ""));
        }
      return ((t = Ws(o, n, t, a)).elementType = e), (t.type = r), (t.lanes = l), t;
    }
    function Ks(e, t, n, r) {
      return ((e = Ws(7, e, r, t)).lanes = n), e;
    }
    function Gs(e, t, n, r) {
      return (
        ((e = Ws(22, e, r, t)).elementType = Q), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
      );
    }
    function Ys(e, t, n) {
      return ((e = Ws(6, e, null, t)).lanes = n), e;
    }
    function Xs(e, t, n) {
      return (
        ((t = Ws(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function Zs(e, t, n, r, a) {
      (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Tt(0)),
        (this.expirationTimes = Tt(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Tt(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = a),
        (this.mutableSourceEagerHydrationData = null);
    }
    function Js(e, t, n, r, a, l, o, i, u) {
      return (
        (e = new Zs(e, t, n, i, u)),
        1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
        (l = Ws(3, null, null, t)),
        (e.current = l),
        (l.stateNode = e),
        (l.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        Wl(l),
        e
      );
    }
    function ec(e, t, n) {
      var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: I,
        key: null == r ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    function tc(e) {
      if (!e) return Ua;
      e: {
        if (tt((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(y(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if ($a(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          t = t.return;
        } while (null !== t);
        throw Error(y(171));
      }
      if (1 === e.tag) {
        var n = e.type;
        if ($a(n)) return Ka(e, n, t);
      }
      return t;
    }
    function nc(e, t, n, r, a, l, o, i, u) {
      return (
        ((e = Js(n, r, !0, e, 0, l, 0, i, u)).context = tc(null)),
        (n = e.current),
        ((l = Ql((r = ps()), (a = ms(n)))).callback = null != t ? t : null),
        ql(n, l, a),
        (e.current.lanes = a),
        Lt(e, a, r),
        gs(e, r),
        e
      );
    }
    function rc(e, t, n, r) {
      var a = t.current,
        l = ps(),
        o = ms(a);
      return (
        (n = tc(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = Ql(l, o)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = ql(a, t, o)) && (hs(e, a, o, l), Kl(e, a, o)),
        o
      );
    }
    function ac(e) {
      return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
    }
    function lc(e, t) {
      if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
      }
    }
    function oc(e, t) {
      lc(e, t), (e = e.alternate) && lc(e, t);
    }
    Ou = function (e, t, n) {
      if (null !== e)
        if (e.memoizedProps !== t.pendingProps || Ba.current) ji = !0;
        else {
          if (0 == (e.lanes & n) && 0 == (128 & t.flags))
            return (
              (ji = !1),
              (function (e, t, n) {
                switch (t.tag) {
                  case 3:
                    Vi(t), Pl();
                    break;
                  case 5:
                    bo(t);
                    break;
                  case 1:
                    $a(t.type) && Ga(t);
                    break;
                  case 4:
                    vo(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    var r = t.type._context,
                      a = t.memoizedProps.value;
                    Aa(Ll, r._currentValue), (r._currentValue = a);
                    break;
                  case 13:
                    if (null !== (r = t.memoizedState))
                      return null !== r.dehydrated
                        ? (Aa(ko, 1 & ko.current), (t.flags |= 128), null)
                        : 0 != (n & t.child.childLanes)
                        ? Yi(e, t, n)
                        : (Aa(ko, 1 & ko.current), null !== (e = ru(e, t, n)) ? e.sibling : null);
                    Aa(ko, 1 & ko.current);
                    break;
                  case 19:
                    if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                      if (r) return tu(e, t, n);
                      t.flags |= 128;
                    }
                    if (
                      (null !== (a = t.memoizedState) &&
                        ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                      Aa(ko, ko.current),
                      r)
                    )
                      break;
                    return null;
                  case 22:
                  case 23:
                    return (t.lanes = 0), Mi(e, t, n);
                }
                return ru(e, t, n);
              })(e, t, n)
            );
          ji = 0 != (131072 & e.flags);
        }
      else (ji = !1), vl && 0 != (1048576 & t.flags) && dl(t, ll, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var r = t.type;
          nu(e, t), (e = t.pendingProps);
          var a = Wa(t, Ha.current);
          Fl(t, n), (a = Fo(null, t, r, e, a, n));
          var l = Mo();
          return (
            (t.flags |= 1),
            "object" == typeof a &&
            null !== a &&
            "function" == typeof a.render &&
            void 0 === a.$$typeof
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                $a(r) ? ((l = !0), Ga(t)) : (l = !1),
                (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                Wl(t),
                (a.updater = eo),
                (t.stateNode = a),
                (a._reactInternals = t),
                ao(t, r, e, n),
                (t = Bi(null, t, r, !0, l, n)))
              : ((t.tag = 0), vl && l && pl(t), Di(null, t, a, n), (t = t.child)),
            t
          );
        case 16:
          r = t.elementType;
          e: {
            switch (
              (nu(e, t),
              (e = t.pendingProps),
              (r = (a = r._init)(r._payload)),
              (t.type = r),
              (a = t.tag =
                (function (e) {
                  if ("function" == typeof e) return $s(e) ? 1 : 0;
                  if (null != e) {
                    if ((e = e.$$typeof) === H) return 11;
                    if (e === W) return 14;
                  }
                  return 2;
                })(r)),
              (e = Tl(r, e)),
              a)
            ) {
              case 0:
                t = Ui(null, t, r, e, n);
                break e;
              case 1:
                t = Hi(null, t, r, e, n);
                break e;
              case 11:
                t = Ii(null, t, r, e, n);
                break e;
              case 14:
                t = Oi(null, t, r, Tl(r.type, e), n);
                break e;
            }
            throw Error(y(306, r, ""));
          }
          return t;
        case 0:
          return (
            (r = t.type),
            (a = t.pendingProps),
            Ui(e, t, r, (a = t.elementType === r ? a : Tl(r, a)), n)
          );
        case 1:
          return (
            (r = t.type),
            (a = t.pendingProps),
            Hi(e, t, r, (a = t.elementType === r ? a : Tl(r, a)), n)
          );
        case 3:
          e: {
            if ((Vi(t), null === e)) throw Error(y(387));
            (r = t.pendingProps), (a = (l = t.memoizedState).element), $l(e, t), Yl(t, r, null, n);
            var o = t.memoizedState;
            if (((r = o.element), l.isDehydrated)) {
              if (
                ((l = {
                  element: r,
                  isDehydrated: !1,
                  cache: o.cache,
                  pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                  transitions: o.transitions,
                }),
                (t.updateQueue.baseState = l),
                (t.memoizedState = l),
                256 & t.flags)
              ) {
                t = Wi(e, t, r, n, (a = xi(Error(y(423)), t)));
                break e;
              }
              if (r !== a) {
                t = Wi(e, t, r, n, (a = xi(Error(y(424)), t)));
                break e;
              }
              for (
                gl = Sa(t.stateNode.containerInfo.firstChild),
                  hl = t,
                  vl = !0,
                  yl = null,
                  n = co(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
            } else {
              if ((Pl(), r === a)) {
                t = ru(e, t, n);
                break e;
              }
              Di(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            bo(t),
            null === e && Sl(t),
            (r = t.type),
            (a = t.pendingProps),
            (l = null !== e ? e.memoizedProps : null),
            (o = a.children),
            ha(r, a) ? (o = null) : null !== l && ha(r, l) && (t.flags |= 32),
            Ai(e, t),
            Di(e, t, o, n),
            t.child
          );
        case 6:
          return null === e && Sl(t), null;
        case 13:
          return Yi(e, t, n);
        case 4:
          return (
            vo(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            null === e ? (t.child = so(t, null, r, n)) : Di(e, t, r, n),
            t.child
          );
        case 11:
          return (
            (r = t.type),
            (a = t.pendingProps),
            Ii(e, t, r, (a = t.elementType === r ? a : Tl(r, a)), n)
          );
        case 7:
          return Di(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
          return Di(e, t, t.pendingProps.children, n), t.child;
        case 10:
          e: {
            if (
              ((r = t.type._context),
              (a = t.pendingProps),
              (l = t.memoizedProps),
              (o = a.value),
              Aa(Ll, r._currentValue),
              (r._currentValue = o),
              null !== l)
            )
              if (wr(l.value, o)) {
                if (l.children === a.children && !Ba.current) {
                  t = ru(e, t, n);
                  break e;
                }
              } else
                for (null !== (l = t.child) && (l.return = t); null !== l; ) {
                  var i = l.dependencies;
                  if (null !== i) {
                    o = l.child;
                    for (var u = i.firstContext; null !== u; ) {
                      if (u.context === r) {
                        if (1 === l.tag) {
                          (u = Ql(-1, n & -n)).tag = 2;
                          var s = l.updateQueue;
                          if (null !== s) {
                            var c = (s = s.shared).pending;
                            null === c ? (u.next = u) : ((u.next = c.next), (c.next = u)),
                              (s.pending = u);
                          }
                        }
                        (l.lanes |= n),
                          null !== (u = l.alternate) && (u.lanes |= n),
                          Ol(l.return, n, t),
                          (i.lanes |= n);
                        break;
                      }
                      u = u.next;
                    }
                  } else if (10 === l.tag) o = l.type === t.type ? null : l.child;
                  else if (18 === l.tag) {
                    if (null === (o = l.return)) throw Error(y(341));
                    (o.lanes |= n),
                      null !== (i = o.alternate) && (i.lanes |= n),
                      Ol(o, n, t),
                      (o = l.sibling);
                  } else o = l.child;
                  if (null !== o) o.return = l;
                  else
                    for (o = l; null !== o; ) {
                      if (o === t) {
                        o = null;
                        break;
                      }
                      if (null !== (l = o.sibling)) {
                        (l.return = o.return), (o = l);
                        break;
                      }
                      o = o.return;
                    }
                  l = o;
                }
            Di(e, t, a.children, n), (t = t.child);
          }
          return t;
        case 9:
          return (
            (a = t.type),
            (r = t.pendingProps.children),
            Fl(t, n),
            (r = r((a = Ml(a)))),
            (t.flags |= 1),
            Di(e, t, r, n),
            t.child
          );
        case 14:
          return (a = Tl((r = t.type), t.pendingProps)), Oi(e, t, r, (a = Tl(r.type, a)), n);
        case 15:
          return Fi(e, t, t.type, t.pendingProps, n);
        case 17:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : Tl(r, a)),
            nu(e, t),
            (t.tag = 1),
            $a(r) ? ((e = !0), Ga(t)) : (e = !1),
            Fl(t, n),
            no(t, r, a),
            ao(t, r, a, n),
            Bi(null, t, r, !0, e, n)
          );
        case 19:
          return tu(e, t, n);
        case 22:
          return Mi(e, t, n);
      }
      throw Error(y(156, t.tag));
    };
    var ic =
      "function" == typeof reportError
        ? reportError
        : function (e) {
            console.error(e);
          };
    function uc(e) {
      this._internalRoot = e;
    }
    function sc(e) {
      this._internalRoot = e;
    }
    function cc(e) {
      return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
    }
    function fc(e) {
      return !(
        !e ||
        (1 !== e.nodeType &&
          9 !== e.nodeType &&
          11 !== e.nodeType &&
          (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      );
    }
    function dc() {}
    function pc(e, t, n, r, a) {
      var l = n._reactRootContainer;
      if (l) {
        var o = l;
        if ("function" == typeof a) {
          var i = a;
          a = function () {
            var e = ac(o);
            i.call(e);
          };
        }
        rc(t, o, e, a);
      } else
        o = (function (e, t, n, r, a) {
          if (a) {
            if ("function" == typeof r) {
              var l = r;
              r = function () {
                var e = ac(o);
                l.call(e);
              };
            }
            var o = nc(t, r, e, 0, null, !1, 0, "", dc);
            return (
              (e._reactRootContainer = o),
              (e[_a] = o.current),
              ta(8 === e.nodeType ? e.parentNode : e),
              xs(),
              o
            );
          }
          for (; (a = e.lastChild); ) e.removeChild(a);
          if ("function" == typeof r) {
            var i = r;
            r = function () {
              var e = ac(u);
              i.call(e);
            };
          }
          var u = Js(e, 0, !1, null, 0, !1, 0, "", dc);
          return (
            (e._reactRootContainer = u),
            (e[_a] = u.current),
            ta(8 === e.nodeType ? e.parentNode : e),
            xs(function () {
              rc(t, u, n, r);
            }),
            u
          );
        })(n, t, e, a, r);
      return ac(o);
    }
    (sc.prototype.render = uc.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(y(409));
        rc(e, t, null, null);
      }),
      (sc.prototype.unmount = uc.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            xs(function () {
              rc(null, e, null, null);
            }),
              (t[_a] = null);
          }
        }),
      (sc.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
          var t = Ft();
          e = { blockedOn: null, target: e, priority: t };
          for (var n = 0; n < Qt.length && 0 !== t && t < Qt[n].priority; n++);
          Qt.splice(n, 0, e), 0 === n && Yt(e);
        }
      }),
      (Dt = function (e) {
        switch (e.tag) {
          case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
              var n = Et(t.pendingLanes);
              0 !== n && (Rt(t, 1 | n), gs(t, ct()), 0 == (6 & Hu) && ((ts = ct() + 500), tl()));
            }
            break;
          case 13:
            xs(function () {
              var t = Bl(e, 1);
              if (null !== t) {
                var n = ps();
                hs(t, e, 1, n);
              }
            }),
              oc(e, 1);
        }
      }),
      (It = function (e) {
        if (13 === e.tag) {
          var t = Bl(e, 134217728);
          if (null !== t) hs(t, e, 134217728, ps());
          oc(e, 134217728);
        }
      }),
      (Ot = function (e) {
        if (13 === e.tag) {
          var t = ms(e),
            n = Bl(e, t);
          if (null !== n) hs(n, e, t, ps());
          oc(e, t);
        }
      }),
      (Ft = function () {
        return zt;
      }),
      (Mt = function (e, t) {
        var n = zt;
        try {
          return (zt = e), t();
        } finally {
          zt = n;
        }
      }),
      (Ie = function (e, t, n) {
        switch (t) {
          case "input":
            if ((fe(e, n), (t = n.name), "radio" === n.type && null != t)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = Da(r);
                  if (!a) throw Error(y(90));
                  oe(r), fe(r, a);
                }
              }
            }
            break;
          case "textarea":
            ye(e, n);
            break;
          case "select":
            null != (t = n.value) && he(e, !!n.multiple, t, !1);
        }
      }),
      (He = Ss),
      (Be = xs);
    var mc = { usingClientEntryPoint: !1, Events: [za, ja, Da, Ae, Ue, Ss] },
      hc = {
        findFiberByHostInstance: Ra,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
      },
      gc = {
        bundleType: hc.bundleType,
        version: hc.version,
        rendererPackageName: hc.rendererPackageName,
        rendererConfig: hc.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: j.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return null === (e = at(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
          hc.findFiberByHostInstance ||
          function () {
            return null;
          },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
      };
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var vc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!vc.isDisabled && vc.supportsFiber)
        try {
          (vt = vc.inject(gc)), (yt = vc);
        } catch (e) {}
    }
    (r = mc),
      (a = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!cc(t)) throw Error(y(200));
        return ec(e, t, null, n);
      }),
      (o = function (e, t) {
        if (!cc(e)) throw Error(y(299));
        var n = !1,
          r = "",
          a = ic;
        return (
          null != t &&
            (!0 === t.unstable_strictMode && (n = !0),
            void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
            void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
          (t = Js(e, 1, !1, null, 0, n, 0, r, a)),
          (e[_a] = t.current),
          ta(8 === e.nodeType ? e.parentNode : e),
          new uc(t)
        );
      }),
      (i = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
          if ("function" == typeof e.render) throw Error(y(188));
          throw ((e = Object.keys(e).join(",")), Error(y(268, e)));
        }
        return (e = null === (e = at(t)) ? null : e.stateNode);
      }),
      (u = function (e) {
        return xs(e);
      }),
      (s = function (e, t, n) {
        if (!fc(t)) throw Error(y(200));
        return pc(null, e, t, !0, n);
      }),
      (c = function (e, t, n) {
        if (!cc(e)) throw Error(y(405));
        var r = (null != n && n.hydratedSources) || null,
          a = !1,
          l = "",
          o = ic;
        if (
          (null != n &&
            (!0 === n.unstable_strictMode && (a = !0),
            void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
            void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
          (t = nc(t, null, e, 1, null != n ? n : null, a, 0, l, o)),
          (e[_a] = t.current),
          ta(e),
          r)
        )
          for (e = 0; e < r.length; e++)
            (a = (a = (n = r[e])._getVersion)(n._source)),
              null == t.mutableSourceEagerHydrationData
                ? (t.mutableSourceEagerHydrationData = [n, a])
                : t.mutableSourceEagerHydrationData.push(n, a);
        return new sc(t);
      }),
      (f = function (e, t, n) {
        if (!fc(t)) throw Error(y(200));
        return pc(null, e, t, !1, n);
      }),
      (d = function (e) {
        if (!fc(e)) throw Error(y(40));
        return (
          !!e._reactRootContainer &&
          (xs(function () {
            pc(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[_a] = null);
            });
          }),
          !0)
        );
      }),
      (p = Ss),
      (m = function (e, t, n, r) {
        if (!fc(n)) throw Error(y(200));
        if (null == e || void 0 === e._reactInternals) throw Error(y(38));
        return pc(e, t, n, !1, r);
      }),
      (h = "18.2.0-next-9e3b772b8-20220608");
  }),
  l.register("fO90s", function (e, t) {
    e.exports = l("gcnCG");
  }),
  l.register("gcnCG", function (t, n) {
    var r, a, l, o, i, u, s, c, f, d, p, m, h, g, v, y, b, w, k;
    function S(e, t) {
      var n = e.length;
      e.push(t);
      e: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (!(0 < C(a, t))) break e;
        (e[r] = t), (e[n] = a), (n = r);
      }
    }
    function x(e) {
      return 0 === e.length ? null : e[0];
    }
    function E(e) {
      if (0 === e.length) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
          var o = 2 * (r + 1) - 1,
            i = e[o],
            u = o + 1,
            s = e[u];
          if (0 > C(i, n))
            u < a && 0 > C(s, i)
              ? ((e[r] = s), (e[u] = n), (r = u))
              : ((e[r] = i), (e[o] = n), (r = o));
          else {
            if (!(u < a && 0 > C(s, n))) break e;
            (e[r] = s), (e[u] = n), (r = u);
          }
        }
      }
      return t;
    }
    function C(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    if (
      (e(
        t.exports,
        "unstable_now",
        () => r,
        (e) => (r = e)
      ),
      e(
        t.exports,
        "unstable_IdlePriority",
        () => a,
        (e) => (a = e)
      ),
      e(
        t.exports,
        "unstable_ImmediatePriority",
        () => l,
        (e) => (l = e)
      ),
      e(
        t.exports,
        "unstable_LowPriority",
        () => o,
        (e) => (o = e)
      ),
      e(
        t.exports,
        "unstable_NormalPriority",
        () => i,
        (e) => (i = e)
      ),
      e(
        t.exports,
        "unstable_Profiling",
        () => u,
        (e) => (u = e)
      ),
      e(
        t.exports,
        "unstable_UserBlockingPriority",
        () => s,
        (e) => (s = e)
      ),
      e(
        t.exports,
        "unstable_cancelCallback",
        () => c,
        (e) => (c = e)
      ),
      e(
        t.exports,
        "unstable_continueExecution",
        () => f,
        (e) => (f = e)
      ),
      e(
        t.exports,
        "unstable_forceFrameRate",
        () => d,
        (e) => (d = e)
      ),
      e(
        t.exports,
        "unstable_getCurrentPriorityLevel",
        () => p,
        (e) => (p = e)
      ),
      e(
        t.exports,
        "unstable_getFirstCallbackNode",
        () => m,
        (e) => (m = e)
      ),
      e(
        t.exports,
        "unstable_next",
        () => h,
        (e) => (h = e)
      ),
      e(
        t.exports,
        "unstable_pauseExecution",
        () => g,
        (e) => (g = e)
      ),
      e(
        t.exports,
        "unstable_requestPaint",
        () => v,
        (e) => (v = e)
      ),
      e(
        t.exports,
        "unstable_runWithPriority",
        () => y,
        (e) => (y = e)
      ),
      e(
        t.exports,
        "unstable_scheduleCallback",
        () => b,
        (e) => (b = e)
      ),
      e(
        t.exports,
        "unstable_shouldYield",
        () => w,
        (e) => (w = e)
      ),
      e(
        t.exports,
        "unstable_wrapCallback",
        () => k,
        (e) => (k = e)
      ),
      "object" == typeof performance && "function" == typeof performance.now)
    ) {
      var P = performance;
      r = function () {
        return P.now();
      };
    } else {
      var _ = Date,
        N = _.now();
      r = function () {
        return _.now() - N;
      };
    }
    var T = [],
      L = [],
      R = 1,
      z = null,
      j = 3,
      D = !1,
      I = !1,
      O = !1,
      F = "function" == typeof setTimeout ? setTimeout : null,
      M = "function" == typeof clearTimeout ? clearTimeout : null,
      A = "undefined" != typeof setImmediate ? setImmediate : null;
    function U(e) {
      for (var t = x(L); null !== t; ) {
        if (null === t.callback) E(L);
        else {
          if (!(t.startTime <= e)) break;
          E(L), (t.sortIndex = t.expirationTime), S(T, t);
        }
        t = x(L);
      }
    }
    function H(e) {
      if (((O = !1), U(e), !I))
        if (null !== x(T)) (I = !0), J(B);
        else {
          var t = x(L);
          null !== t && ee(H, t.startTime - e);
        }
    }
    function B(e, t) {
      (I = !1), O && ((O = !1), M(Q), (Q = -1)), (D = !0);
      var n = j;
      try {
        for (U(t), z = x(T); null !== z && (!(z.expirationTime > t) || (e && !G())); ) {
          var a = z.callback;
          if ("function" == typeof a) {
            (z.callback = null), (j = z.priorityLevel);
            var l = a(z.expirationTime <= t);
            (t = r()), "function" == typeof l ? (z.callback = l) : z === x(T) && E(T), U(t);
          } else E(T);
          z = x(T);
        }
        if (null !== z) var o = !0;
        else {
          var i = x(L);
          null !== i && ee(H, i.startTime - t), (o = !1);
        }
        return o;
      } finally {
        (z = null), (j = n), (D = !1);
      }
    }
    "undefined" != typeof navigator &&
      void 0 !== navigator.scheduling &&
      void 0 !== navigator.scheduling.isInputPending &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var V,
      W = !1,
      $ = null,
      Q = -1,
      q = 5,
      K = -1;
    function G() {
      return !(r() - K < q);
    }
    function Y() {
      if (null !== $) {
        var e = r();
        K = e;
        var t = !0;
        try {
          t = $(!0, e);
        } finally {
          t ? V() : ((W = !1), ($ = null));
        }
      } else W = !1;
    }
    if ("function" == typeof A)
      V = function () {
        A(Y);
      };
    else if ("undefined" != typeof MessageChannel) {
      var X = new MessageChannel(),
        Z = X.port2;
      (X.port1.onmessage = Y),
        (V = function () {
          Z.postMessage(null);
        });
    } else
      V = function () {
        F(Y, 0);
      };
    function J(e) {
      ($ = e), W || ((W = !0), V());
    }
    function ee(e, t) {
      Q = F(function () {
        e(r());
      }, t);
    }
    (a = 5),
      (l = 1),
      (o = 4),
      (i = 3),
      (u = null),
      (s = 2),
      (c = function (e) {
        e.callback = null;
      }),
      (f = function () {
        I || D || ((I = !0), J(B));
      }),
      (d = function (e) {
        0 > e || 125 < e
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (q = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (p = function () {
        return j;
      }),
      (m = function () {
        return x(T);
      }),
      (h = function (e) {
        switch (j) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = j;
        }
        var n = j;
        j = t;
        try {
          return e();
        } finally {
          j = n;
        }
      }),
      (g = function () {}),
      (v = function () {}),
      (y = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = j;
        j = e;
        try {
          return t();
        } finally {
          j = n;
        }
      }),
      (b = function (e, t, n) {
        var a = r();
        switch (
          ("object" == typeof n && null !== n
            ? (n = "number" == typeof (n = n.delay) && 0 < n ? a + n : a)
            : (n = a),
          e)
        ) {
          case 1:
            var l = -1;
            break;
          case 2:
            l = 250;
            break;
          case 5:
            l = 1073741823;
            break;
          case 4:
            l = 1e4;
            break;
          default:
            l = 5e3;
        }
        return (
          (e = {
            id: R++,
            callback: t,
            priorityLevel: e,
            startTime: n,
            expirationTime: (l = n + l),
            sortIndex: -1,
          }),
          n > a
            ? ((e.sortIndex = n),
              S(L, e),
              null === x(T) && e === x(L) && (O ? (M(Q), (Q = -1)) : (O = !0), ee(H, n - a)))
            : ((e.sortIndex = l), S(T, e), I || D || ((I = !0), J(B))),
          e
        );
      }),
      (w = G),
      (k = function (e) {
        var t = j;
        return function () {
          var n = j;
          j = t;
          try {
            return e.apply(this, arguments);
          } finally {
            j = n;
          }
        };
      });
  }),
  l.register("hOzOt", function (e, t) {
    var n = l("kZO5c");
    function r() {}
    function a() {}
    (a.resetWarningCache = r),
      (e.exports = function () {
        function e(e, t, r, a, l, o) {
          if (o !== n) {
            var i = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((i.name = "Invariant Violation"), i);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var l = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: a,
          resetWarningCache: r,
        };
        return (l.PropTypes = l), l;
      });
  }),
  l.register("kZO5c", function (e, t) {
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  }),
  l("27Lyk").register(
    JSON.parse(
      '{"9vqfN":"index.037bf7a1.js","jrEFD":"motion-background.6277a59a.jpg","hTHrW":"devdotto.c5600637.svg","fRa5e":"envelope.218572ce.svg","bdIA1":"github.a2abf599.svg","cfg7H":"instagram.834d60d8.svg","8Zi1Z":"linkedin.b0d336c3.svg","8uFw5":"medium.11e7a8f2.svg","3fieH":"twitter.da090011.svg","ihen4":"youtube.225f4e4b.svg","7uSVY":"down-arrow.8b6aeb0f.svg","2Cto5":"desk-and-chair.0dc62b27.jpg","bI8jb":"school.1b4724cf.jpg","epOVD":"design-desk.3f0e8627.jpg","aGs9L":"index.398f7bb4.css"}'
    )
  );
var o;
(o = l("1b2ls")), l("acw62");
var i;
!(function e() {
  if (
    "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
    "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
    } catch (e) {
      console.error(e);
    }
})(),
  (i = l("Xw6Mv")),
  l("acw62"),
  l("acw62");
var u;
u = new URL(l("27Lyk").resolve("jrEFD"), import.meta.url).toString();
const s = [
  "Agile Methodologies & Management",
  "UI/UX Design & Prototyping",
  "Full Stack Web Development",
  "Data Warehousing & ETL Processes",
  "Data Analysis & Visualization",
  "Machine Learning & Data Mining",
];
var c = () =>
  (0, o.jsxs)("section", {
    className: "padding",
    id: "about",
    children: [
      (0, o.jsx)("img", {
        className: "background",
        src: t(u),
        alt: "purple and blue abstract background",
      }),
      (0, o.jsxs)("div", {
        style: {
          backgroundColor: "white",
          width: "70%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        },
        children: [
          (0, o.jsx)("h2", { children: "About Myself" }),
          (0, o.jsx)("p", {
            className: "large",
            children:
              "I'm a software developer and data science enthusiast, passionate about designing elegant and user-friendly interfaces.",
          }),
          (0, o.jsx)("hr", {}),
          (0, o.jsx)("ul", {
            style: {
              textAlign: "left",
              columns: 2,
              fontSize: "1.25rem",
              margin: "2rem 3rem",
              gap: "3rem",
            },
            children: s.map((e) => (0, o.jsx)("li", { children: e }, e)),
          }),
          (0, o.jsx)("hr", {}),
          (0, o.jsx)("p", {
            style: { padding: "1rem 3rem 0" },
            children:
              "I am deeply passionate about pioneering innovative solutions, leveraging my UI/UX expertise to make technology universally accessible and user-friendly",
          }),
        ],
      }),
    ],
  });
l("acw62");
var f;
f = l("hOzOt")();
var d;
d = new URL(l("27Lyk").resolve("hTHrW"), import.meta.url).toString();
var p;
p = new URL(l("27Lyk").resolve("fRa5e"), import.meta.url).toString();
var m;
m = new URL(l("27Lyk").resolve("bdIA1"), import.meta.url).toString();
var h;
h = new URL(l("27Lyk").resolve("cfg7H"), import.meta.url).toString();
var g;
g = new URL(l("27Lyk").resolve("8Zi1Z"), import.meta.url).toString();
var v;
v = new URL(l("27Lyk").resolve("8uFw5"), import.meta.url).toString();
var y;
y = new URL(l("27Lyk").resolve("3fieH"), import.meta.url).toString();
var b;
b = new URL(l("27Lyk").resolve("ihen4"), import.meta.url).toString();
const w = (e) => {
  const {
    devDotTo: n,
    email: r,
    gitHub: a,
    instagram: l,
    linkedIn: i,
    medium: u,
    name: s,
    primaryColor: c,
    twitter: f,
    youTube: w,
  } = e;
  return (0, o.jsxs)("div", {
    id: "footer",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2.5rem",
      padding: "5rem 0 3rem",
      backgroundColor: c,
      width: "100vw",
    },
    children: [
      (0, o.jsxs)("div", {
        style: { display: "flex", justifyContent: "center", gap: "2.5rem" },
        children: [
          r &&
            (0, o.jsx)("a", {
              href: `mailto:${r}`,
              children: (0, o.jsx)("img", { src: t(p), alt: "email", className: "socialIcon" }),
            }),
          n &&
            (0, o.jsx)("a", {
              href: `https://dev.to/${n}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0, o.jsx)("img", { src: t(d), alt: "Dev.to", className: "socialIcon" }),
            }),
          a &&
            (0, o.jsx)("a", {
              href: `https://github.com/${a}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0, o.jsx)("img", { src: t(m), alt: "GitHub", className: "socialIcon" }),
            }),
          l &&
            (0, o.jsx)("a", {
              href: `https://www.instagram.com/${l}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0, o.jsx)("img", { src: t(h), alt: "Instagram", className: "socialIcon" }),
            }),
          i &&
            (0, o.jsx)("a", {
              href: `https://www.linkedin.com/in/${i}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0, o.jsx)("img", { src: t(g), alt: "LinkedIn", className: "socialIcon" }),
            }),
          u &&
            (0, o.jsx)("a", {
              href: `https://medium.com/@${u}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0, o.jsx)("img", { src: t(v), alt: "Medium", className: "socialIcon" }),
            }),
          f &&
            (0, o.jsx)("a", {
              href: `https://twitter.com/${f}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0, o.jsx)("img", { src: t(y), alt: "Twitter", className: "socialIcon" }),
            }),
          w &&
            (0, o.jsx)("a", {
              href: `https://www.youtube.com/c/${w}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0, o.jsx)("img", { src: t(b), alt: "YouTube", className: "socialIcon" }),
            }),
        ],
      }),
      (0, o.jsxs)("p", {
        className: "small",
        style: { marginTop: 0, color: "white" },
        children: ["Created by ", s],
      }),
    ],
  });
};
(w.defaultProps = { name: "" }),
  (w.propTypes = {
    devDotTo: t(f).string,
    email: t(f).string,
    gitHub: t(f).string,
    instagram: t(f).string,
    linkedIn: t(f).string,
    medium: t(f).string,
    name: t(f).string.isRequired,
    primaryColor: t(f).string,
    twitter: t(f).string,
    youTube: t(f).string,
  });
var k = w;
l("acw62");
var S = () =>
  (0, o.jsxs)("div", {
    style: {
      position: "fixed",
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
      background: "rgba(255,255,255,0.75)",
      padding: "1rem",
      top: 0,
      width: "100%",
      zIndex: 10,
    },
    children: [
      (0, o.jsx)("a", { href: "#home", children: "Home" }),
      (0, o.jsx)("a", { href: "#about", children: "About" }),
      (0, o.jsx)("a", { href: "#education", children: "Education" }),
      (0, o.jsx)("a", { href: "#portfolio", children: "Portfolio" }),
      (0, o.jsx)("a", { href: "#footer", children: "Contact" }),
    ],
  });
l("acw62");
var x;
x = new URL(l("27Lyk").resolve("7uSVY"), import.meta.url).toString();
var E;
E = new URL(l("27Lyk").resolve("2Cto5"), import.meta.url).toString();
const C = ({ name: e, title: n }) =>
  (0, o.jsxs)("section", {
    id: "home",
    className: "min-height",
    children: [
      (0, o.jsx)("img", { className: "background", src: t(E), alt: "" }),
      (0, o.jsxs)("div", {
        style: { position: "absolute", top: "5rem", left: "2rem", width: "20rem" },
        children: [(0, o.jsx)("h1", { children: e }), (0, o.jsx)("h2", { children: n })],
      }),
      (0, o.jsx)("div", {
        className: "scroll-down-arrow",
        style: { position: "absolute", bottom: "3rem", left: "50%" },
        children: (0, o.jsx)("img", {
          src: t(x),
          style: { height: "3rem", width: "3rem" },
          alt: "A desk with a chair and a computer monitor. The monitor displays a code editor with a React project open.",
        }),
      }),
    ],
  });
(C.defaultProps = { name: "", title: "" }),
  (C.propTypes = { name: t(f).string.isRequired, title: t(f).string.isRequired });
var P = C;
l("acw62");
var _ = l("acw62"),
  N = ((_ = l("acw62")), (_ = l("acw62")), (_ = l("acw62")), Object.defineProperty),
  T = (e, t, n) => (
    ((e, t, n) => {
      t in e ? N(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
    })(e, "symbol" != typeof t ? t + "" : t, n),
    n
  );
let L = new (class {
    constructor() {
      T(this, "current", this.detect()),
        T(this, "handoffState", "pending"),
        T(this, "currentId", 0);
    }
    set(e) {
      this.current !== e &&
        ((this.handoffState = "pending"), (this.currentId = 0), (this.current = e));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return "server" === this.current;
    }
    get isClient() {
      return "client" === this.current;
    }
    detect() {
      return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client";
    }
    handoff() {
      "pending" === this.handoffState && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return "complete" === this.handoffState;
    }
  })(),
  R = (e, t) => {
    L.isServer ? (0, _.useEffect)(e, t) : (0, _.useLayoutEffect)(e, t);
  };
function z(e) {
  let t = (0, _.useRef)(e);
  return (
    R(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let j = function (e) {
  let n = z(e);
  return t(_).useCallback((...e) => n.current(...e), [n]);
};
var D;
_ = l("acw62");
function I() {
  let e = (function () {
      let e = "undefined" == typeof document;
      return (
        "useSyncExternalStore" in _ &&
        _.useSyncExternalStore(
          () => () => {},
          () => !1,
          () => !e
        )
      );
    })(),
    [t, n] = _.useState(L.isHandoffComplete);
  return (
    t && !1 === L.isHandoffComplete && n(!1),
    _.useEffect(() => {
      !0 !== t && n(!0);
    }, [t]),
    _.useEffect(() => L.handoff(), []),
    !e && t
  );
}
let O =
  null != (D = t((_ = l("acw62"))).useId)
    ? D
    : function () {
        let e = I(),
          [n, r] = t(_).useState(e ? () => L.nextId() : null);
        return (
          R(() => {
            null === n && r(L.nextId());
          }, [n]),
          null != n ? "" + n : void 0
        );
      };
_ = l("acw62");
function F(e) {
  var t;
  if (e.type) return e.type;
  let n = null != (t = e.as) ? t : "button";
  return "string" == typeof n && "button" === n.toLowerCase() ? "button" : void 0;
}
function M(e, t) {
  let [n, r] = (0, _.useState)(() => F(e));
  return (
    R(() => {
      r(F(e));
    }, [e.type, e.as]),
    R(() => {
      n ||
        (t.current &&
          t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute("type") &&
          r("button"));
    }, [n, t]),
    n
  );
}
_ = l("acw62");
let A = Symbol();
function U(e, t = !0) {
  return Object.assign(e, { [A]: t });
}
function H(...e) {
  let t = (0, _.useRef)(e);
  (0, _.useEffect)(() => {
    t.current = e;
  }, [e]);
  let n = j((e) => {
    for (let n of t.current) null != n && ("function" == typeof n ? n(e) : (n.current = e));
  });
  return e.every((e) => null == e || (null == e ? void 0 : e[A])) ? void 0 : n;
}
let B = (0, (_ = l("acw62")).createContext)(null);
B.displayName = "OpenClosedContext";
var V,
  W =
    (((V = W || {})[(V.Open = 1)] = "Open"),
    (V[(V.Closed = 2)] = "Closed"),
    (V[(V.Closing = 4)] = "Closing"),
    (V[(V.Opening = 8)] = "Opening"),
    V);
function $({ value: e, children: n }) {
  return t(_).createElement(B.Provider, { value: e }, n);
}
function Q(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = "" === (null == t ? void 0 : t.getAttribute("disabled"));
  return (
    (!r ||
      !(function (e) {
        if (!e) return !1;
        let t = e.previousElementSibling;
        for (; null !== t; ) {
          if (t instanceof HTMLLegendElement) return !1;
          t = t.previousElementSibling;
        }
        return !0;
      })(n)) &&
    r
  );
}
function q(e, t, ...n) {
  if (e in t) {
    let r = t[e];
    return "function" == typeof r ? r(...n) : r;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((e) => `"${e}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, q), r);
}
function K(e) {
  return L.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : null != e && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
_ = l("acw62");
function G(...e) {
  return Array.from(new Set(e.flatMap((e) => ("string" == typeof e ? e.split(" ") : []))))
    .filter(Boolean)
    .join(" ");
}
var Y,
  X,
  Z =
    (((Y = Z || {})[(Y.None = 0)] = "None"),
    (Y[(Y.RenderStrategy = 1)] = "RenderStrategy"),
    (Y[(Y.Static = 2)] = "Static"),
    Y),
  J = ((e) => ((e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e))(J || {});
function ee({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: a,
  visible: l = !0,
  name: o,
  mergeRefs: i,
}) {
  i = null != i ? i : re;
  let u = ae(t, e);
  if (l) return te(u, n, r, o, i);
  let s = null != a ? a : 0;
  if (2 & s) {
    let { static: e = !1, ...t } = u;
    if (e) return te(t, n, r, o, i);
  }
  if (1 & s) {
    let { unmount: e = !0, ...t } = u;
    return q(e ? 0 : 1, {
      0: () => null,
      1: () => te({ ...t, hidden: !0, style: { display: "none" } }, n, r, o, i),
    });
  }
  return te(u, n, r, o, i);
}
function te(e, t = {}, n, r, a) {
  let { as: l = n, children: o, refName: i = "ref", ...u } = ie(e, ["unmount", "static"]),
    s = void 0 !== e.ref ? { [i]: e.ref } : {},
    c = "function" == typeof o ? o(t) : o;
  "className" in u &&
    u.className &&
    "function" == typeof u.className &&
    (u.className = u.className(t));
  let f = {};
  if (t) {
    let e = !1,
      n = [];
    for (let [r, a] of Object.entries(t)) "boolean" == typeof a && (e = !0), !0 === a && n.push(r);
    e && (f["data-headlessui-state"] = n.join(" "));
  }
  if (l === _.Fragment && Object.keys(oe(u)).length > 0) {
    if (!(0, _.isValidElement)(c) || (Array.isArray(c) && c.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(u)
            .map((e) => `  - ${e}`)
            .join("\n"),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ]
            .map((e) => `  - ${e}`)
            .join("\n"),
        ].join("\n")
      );
    let e = c.props,
      t =
        "function" == typeof (null == e ? void 0 : e.className)
          ? (...t) => G(null == e ? void 0 : e.className(...t), u.className)
          : G(null == e ? void 0 : e.className, u.className),
      n = t ? { className: t } : {};
    return (0, _.cloneElement)(
      c,
      Object.assign({}, ae(c.props, oe(ie(u, ["ref"]))), f, s, { ref: a(c.ref, s.ref) }, n)
    );
  }
  return (0, _.createElement)(
    l,
    Object.assign({}, ie(u, ["ref"]), l !== _.Fragment && s, l !== _.Fragment && f),
    c
  );
}
function ne() {
  let e = (0, _.useRef)([]),
    t = (0, _.useCallback)((t) => {
      for (let n of e.current) null != n && ("function" == typeof n ? n(t) : (n.current = t));
    }, []);
  return (...n) => {
    if (!n.every((e) => null == e)) return (e.current = n), t;
  };
}
function re(...e) {
  return e.every((e) => null == e)
    ? void 0
    : (t) => {
        for (let n of e) null != n && ("function" == typeof n ? n(t) : (n.current = t));
      };
}
function ae(...e) {
  if (0 === e.length) return {};
  if (1 === e.length) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let e in r)
      e.startsWith("on") && "function" == typeof r[e]
        ? (null != n[e] || (n[e] = []), n[e].push(r[e]))
        : (t[e] = r[e]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((e) => [e, void 0])));
  for (let e in n)
    Object.assign(t, {
      [e](t, ...r) {
        let a = n[e];
        for (let e of a) {
          if (
            (t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
            t.defaultPrevented
          )
            return;
          e(t, ...r);
        }
      },
    });
  return t;
}
function le(e) {
  var t;
  return Object.assign((0, _.forwardRef)(e), {
    displayName: null != (t = e.displayName) ? t : e.name,
  });
}
function oe(e) {
  let t = Object.assign({}, e);
  for (let e in t) void 0 === t[e] && delete t[e];
  return t;
}
function ie(e, t = []) {
  let n = Object.assign({}, e);
  for (let e of t) e in n && delete n[e];
  return n;
}
let ue =
  null != (X = t((_ = l("acw62"))).startTransition)
    ? X
    : function (e) {
        e();
      };
var se,
  ce,
  fe,
  de =
    (((se = de || {}).Space = " "),
    (se.Enter = "Enter"),
    (se.Escape = "Escape"),
    (se.Backspace = "Backspace"),
    (se.Delete = "Delete"),
    (se.ArrowLeft = "ArrowLeft"),
    (se.ArrowUp = "ArrowUp"),
    (se.ArrowRight = "ArrowRight"),
    (se.ArrowDown = "ArrowDown"),
    (se.Home = "Home"),
    (se.End = "End"),
    (se.PageUp = "PageUp"),
    (se.PageDown = "PageDown"),
    (se.Tab = "Tab"),
    se),
  pe = (((fe = pe || {})[(fe.Open = 0)] = "Open"), (fe[(fe.Closed = 1)] = "Closed"), fe),
  me =
    (((ce = me || {})[(ce.ToggleDisclosure = 0)] = "ToggleDisclosure"),
    (ce[(ce.CloseDisclosure = 1)] = "CloseDisclosure"),
    (ce[(ce.SetButtonId = 2)] = "SetButtonId"),
    (ce[(ce.SetPanelId = 3)] = "SetPanelId"),
    (ce[(ce.LinkPanel = 4)] = "LinkPanel"),
    (ce[(ce.UnlinkPanel = 5)] = "UnlinkPanel"),
    ce);
let he = {
    0: (e) => ({ ...e, disclosureState: q(e.disclosureState, { 0: 1, 1: 0 }) }),
    1: (e) => (1 === e.disclosureState ? e : { ...e, disclosureState: 1 }),
    4: (e) => (!0 === e.linkedPanel ? e : { ...e, linkedPanel: !0 }),
    5: (e) => (!1 === e.linkedPanel ? e : { ...e, linkedPanel: !1 }),
    2: (e, t) => (e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId }),
    3: (e, t) => (e.panelId === t.panelId ? e : { ...e, panelId: t.panelId }),
  },
  ge = (0, _.createContext)(null);
function ve(e) {
  let t = (0, _.useContext)(ge);
  if (null === t) {
    let t = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(t, ve), t);
  }
  return t;
}
ge.displayName = "DisclosureContext";
let ye = (0, _.createContext)(null);
function be(e) {
  let t = (0, _.useContext)(ye);
  if (null === t) {
    let t = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(t, be), t);
  }
  return t;
}
ye.displayName = "DisclosureAPIContext";
let we = (0, _.createContext)(null);
function ke(e, t) {
  return q(t.type, he, e, t);
}
we.displayName = "DisclosurePanelContext";
let Se = _.Fragment;
let xe = Z.RenderStrategy | Z.Static;
let Ee = le(function (e, n) {
    let { defaultOpen: r = !1, ...a } = e,
      l = (0, _.useRef)(null),
      o = H(
        n,
        U((e) => {
          l.current = e;
        }, void 0 === e.as || e.as === _.Fragment)
      ),
      i = (0, _.useRef)(null),
      u = (0, _.useRef)(null),
      s = (0, _.useReducer)(ke, {
        disclosureState: r ? 0 : 1,
        linkedPanel: !1,
        buttonRef: u,
        panelRef: i,
        buttonId: null,
        panelId: null,
      }),
      [{ disclosureState: c, buttonId: f }, d] = s,
      p = j((e) => {
        d({ type: 1 });
        let t = K(l);
        if (!t || !f) return;
        let n = e
          ? e instanceof HTMLElement
            ? e
            : e.current instanceof HTMLElement
            ? e.current
            : t.getElementById(f)
          : t.getElementById(f);
        null == n || n.focus();
      }),
      m = (0, _.useMemo)(() => ({ close: p }), [p]),
      h = (0, _.useMemo)(() => ({ open: 0 === c, close: p }), [c, p]),
      g = { ref: o };
    return t(_).createElement(
      ge.Provider,
      { value: s },
      t(_).createElement(
        ye.Provider,
        { value: m },
        t(_).createElement(
          $,
          { value: q(c, { 0: W.Open, 1: W.Closed }) },
          ee({ ourProps: g, theirProps: a, slot: h, defaultTag: Se, name: "Disclosure" })
        )
      )
    );
  }),
  Ce = le(function (e, t) {
    let n = O(),
      { id: r = `headlessui-disclosure-button-${n}`, ...a } = e,
      [l, o] = ve("Disclosure.Button"),
      i = (0, _.useContext)(we),
      u = null !== i && i === l.panelId,
      s = (0, _.useRef)(null),
      c = H(s, t, u ? null : l.buttonRef),
      f = ne();
    (0, _.useEffect)(() => {
      if (!u)
        return (
          o({ type: 2, buttonId: r }),
          () => {
            o({ type: 2, buttonId: null });
          }
        );
    }, [r, o, u]);
    let d = j((e) => {
        var t;
        if (u) {
          if (1 === l.disclosureState) return;
          switch (e.key) {
            case de.Space:
            case de.Enter:
              e.preventDefault(),
                e.stopPropagation(),
                o({ type: 0 }),
                null == (t = l.buttonRef.current) || t.focus();
          }
        } else
          switch (e.key) {
            case de.Space:
            case de.Enter:
              e.preventDefault(), e.stopPropagation(), o({ type: 0 });
          }
      }),
      p = j((e) => {
        if (e.key === de.Space) e.preventDefault();
      }),
      m = j((t) => {
        var n;
        Q(t.currentTarget) ||
          e.disabled ||
          (u ? (o({ type: 0 }), null == (n = l.buttonRef.current) || n.focus()) : o({ type: 0 }));
      }),
      h = (0, _.useMemo)(() => ({ open: 0 === l.disclosureState }), [l]),
      g = M(e, s);
    return ee({
      mergeRefs: f,
      ourProps: u
        ? { ref: c, type: g, onKeyDown: d, onClick: m }
        : {
            ref: c,
            id: r,
            type: g,
            "aria-expanded": 0 === l.disclosureState,
            "aria-controls": l.linkedPanel ? l.panelId : void 0,
            onKeyDown: d,
            onKeyUp: p,
            onClick: m,
          },
      theirProps: a,
      slot: h,
      defaultTag: "button",
      name: "Disclosure.Button",
    });
  }),
  Pe = le(function (e, n) {
    let r = O(),
      { id: a = `headlessui-disclosure-panel-${r}`, ...l } = e,
      [o, i] = ve("Disclosure.Panel"),
      { close: u } = be("Disclosure.Panel"),
      s = ne(),
      c = H(n, o.panelRef, (e) => {
        ue(() => i({ type: e ? 4 : 5 }));
      });
    (0, _.useEffect)(
      () => (
        i({ type: 3, panelId: a }),
        () => {
          i({ type: 3, panelId: null });
        }
      ),
      [a, i]
    );
    let f = (0, _.useContext)(B),
      d = null !== f ? (f & W.Open) === W.Open : 0 === o.disclosureState,
      p = (0, _.useMemo)(() => ({ open: 0 === o.disclosureState, close: u }), [o, u]),
      m = { ref: c, id: a };
    return t(_).createElement(
      we.Provider,
      { value: o.panelId },
      ee({
        mergeRefs: s,
        ourProps: m,
        theirProps: l,
        slot: p,
        defaultTag: "div",
        features: xe,
        visible: d,
        name: "Disclosure.Panel",
      })
    );
  }),
  _e = Object.assign(Ee, { Button: Ce, Panel: Pe });
var Ne,
  Te = (_ = l("acw62")).forwardRef(function ({ title: e, titleId: t, ...n }, r) {
    return _.createElement(
      "svg",
      Object.assign(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
          ref: r,
          "aria-labelledby": t,
        },
        n
      ),
      e ? _.createElement("title", { id: t }, e) : null,
      _.createElement("path", {
        fillRule: "evenodd",
        d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
        clipRule: "evenodd",
      })
    );
  });
Ne = JSON.parse(
  '[{"degree":"Master of Information Technology","university":"University of Western Australia (UWA), Perth, Australia","gpa":"6.38 / 7.0","achievements":[{"title":"Agile Web application - BrewChat","technologies":"Javascript, Flask, SQLAlchemy, unittest, Git"},{"title":"Data Warehousing & Association Rule Mining","technologies":"R, SQL, SSMS, Power BI"},{"title":"Graph Database & Graph Data Science","technologies":"Neo4j, Cypher, R"},{"title":"Exploratory data analysis and Machine learning models","technologies":"R, RStudio, Git"},{"title":"IOT ESP32 Air Quality Detector","technologies":"C++, Flask, HTML, CSS, Javascript, Firebase Real-Time DB, Git"},{"title":"Business intelligence report","technologies":"Python, PowerBI"},{"title":"Cybersecurity","technologies":"Bash, Virtualisation & Containerisation"},{"title":"Rational Database Management System","technologies":"SQL"},{"title":"COVID Analysis","technologies":"Python"}],"results":["HD & Top3 Project","HD & Top2 Project","HD & Top4 Project","Top1 Project","HD","HD","HD","HD","HD"],"url":"#"},{"degree":"M.S. in Accounting and Information Technology","university":"National Chung Cheng University (CCU), Chiayi, Taiwan","gpa":"3.93 / 4.0","achievements":[{"title":"Nationally in CCU’s competitive annual Accounting postgraduate entrance exam.","technologies":"Subjects: English, Intermediate Accounting, and Cost and Management Accounting"},{"title":"Conducted research on “Directors’ and Officers’ Liability Insurance and Cost Stickiness.”","technologies":"SAS, SPSS, Excel, Word, and PowerPoint"}],"results":["TOP2","HD"],"url":"#"},{"degree":"B.S. in Accounting and Information Systems","university":"National Kaohsiung University of Science and Technology (NKUST), Kaohsiung, Taiwan","gpa":"80.44 / 100","achievements":[],"results":[],"url":"#"}]'
);
var Le;
Le = new URL(l("27Lyk").resolve("bI8jb"), import.meta.url).toString();
var Re = () =>
  (0, o.jsxs)("section", {
    className: "padding",
    id: "education",
    children: [
      (0, o.jsx)("h2", { className: "text-center", children: "Education" }),
      (0, o.jsxs)("div", {
        className: "flex flex-row pt-12",
        children: [
          (0, o.jsx)("div", {
            className: "w-3/4 self-center",
            children: (0, o.jsx)("img", {
              src: t(Le),
              className: "h-9/10 w-full object-cover slide-in",
              alt: "School building",
            }),
          }),
          (0, o.jsx)("div", {
            className: "verticalContainer",
            children: t(Ne).map((e) =>
              (0, o.jsx)(
                "div",
                {
                  className: "box",
                  children: (0, o.jsx)(_e, {
                    children: ({ open: t }) =>
                      (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsxs)("div", {
                            className: "degreeGpaPair",
                            children: [
                              (0, o.jsx)("a", {
                                href: e.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, o.jsx)("span", {
                                  className: "degree",
                                  children: e.degree,
                                }),
                              }),
                              (0, o.jsxs)("span", { className: "gpa", children: ["GPA: ", e.gpa] }),
                            ],
                          }),
                          (0, o.jsx)("p", { className: "small", children: e.university }),
                          (0, o.jsx)(_e.Button, {
                            className: "pt-3 w-full flex items-center justify-center",
                            children: (0, o.jsx)(Te, {
                              className:
                                (t ? "rotate-180 transform" : "") + " h-5 w-5 text-gray-500",
                            }),
                          }),
                          (0, o.jsx)(_e.Panel, {
                            children: (0, o.jsx)("ul", {
                              children: e.achievements.map((t, n) =>
                                (0, o.jsxs)(
                                  "div",
                                  {
                                    className: "achievementResultPair",
                                    children: [
                                      (0, o.jsxs)("span", {
                                        className: "achievementPair",
                                        children: [
                                          (0, o.jsx)("span", {
                                            className: "achievementTitle",
                                            children: t.title,
                                          }),
                                          (0, o.jsx)("span", {
                                            className: "achievementTechnologies",
                                            children: t.technologies,
                                          }),
                                        ],
                                      }),
                                      (0, o.jsx)("span", {
                                        className: "result",
                                        children: e.results[n],
                                      }),
                                    ],
                                  },
                                  n
                                )
                              ),
                            }),
                          }),
                        ],
                      }),
                  }),
                },
                e.degree
              )
            ),
          }),
        ],
      }),
    ],
  });
l("acw62");
var ze;
ze = new URL(l("27Lyk").resolve("epOVD"), import.meta.url).toString();
var je;
je = JSON.parse(
  '[{"work":[{"occupation":"Assistant Manager","industry":"Financial Services","company":"Deloitte","period":"2019.03 - 2020.08","technologies":["US GAAP","IFRS","SOX","COSO framework","Microsoft Excel","Power BI"],"description":["Possessed sound knowledge of US GAAP, IFRS, and SOX internal control audits.","Performed financial modelling to support and challenge key assumptions, such as DCF models.","Performed risk assessment of material financial statement items under the COSO framework.","Performed valuation analysis of assets, debt, and equity, such as intangible assets impairment and convertible bonds.","Utilized IT skills for data cleaning, manipulation, and mapping.","Led 4 members and managed audit plan for listed companies.","Supervised, coached, and developed junior members of staff within teams, on client premises, and in the office."]},{"occupation":"Staff - Senior Associate","industry":"Financial Services","company":"PwC","period":"2016.09 - 2019.02","technologies":["IFRS9","Financial Analysis","Net Asset Value","Return on Investment","Cash Flow Forecasting"],"description":["Conducted in the Biotechnology Industry’s initial public offering project.","Evaluated investment profiles including local/international, public/private stocks, and bonds under IFRS9.","Evaluated derivative financial instruments.","Recalculated net asset value and return on investment.","Reviewed cash flow forecasts for the prospectus to assess the feasibility of the assumptions.","Assessed financial risk information, including market risk, credit risk, liquidity risk, interest rate risk, and sensitive analysis of each."]},{"occupation":"Intermediate Accounting Instructor","industry":"Education","company":"Tekom Technologies, Inc","period":"2016.03 - 2016.06","technologies":["Accounting Instruction","Educational Facilitation"],"description":["Provided guidance and delivered effective instruction in Intermediate Accounting, facilitating student understanding and proficiency."]},{"occupation":"Facilitator","industry":"Education","company":"National Chung Cheng University","period":"2015.02 - 2016.06","technologies":["Business Analysis","Accounting","Advanced Accounting","Audit","Statistics"],"description":["Assisted in teaching courses including Business Analysis, Accounting, Advanced Accounting, Audit, and Statistics.","Provided guidance and handouts."]}]},{"internship":[{"title":"Practera","occupation":"Business Consultant","company":"UseVerb","period":"2022.07 - 2022.08","technologies":["SWOT Analysis","PESTLE Analysis","Competitor Analysis","Digital Marketing"],"description":["Collaborated with UseVerb, leveraging my expertise in business consulting to enhance their marketing strategies.","Conducted a comprehensive SWOT analysis to identify strengths, weaknesses, opportunities, and threats, enabling a more targeted approach to marketing and outreach.","Utilized PESTLE analysis to understand the macro-environmental factors affecting UseVerb, ensuring that marketing strategies were adaptable and relevant.","Performed an in-depth competitor analysis to benchmark UseVerb’s services and identify unique positioning and value propositions in the market.","Developed and proposed innovative marketing strategies, integrating insights from SWOT, PESTLE, and competitor analysis, to effectively reach and engage the target audience.","Enhanced digital presence and community engagement through data-driven marketing initiatives, leading to measurable increases in service awareness and utilization.","Collaborated closely with the team to align the marketing plan with organizational goals, ensuring a cohesive and impactful brand message.","Contributed to a significant improvement in UseVerb’s market positioning and community impact, driven by strategic, analytical, and data-informed decision-making."]}]},{"competition":[{"title":"Data Science Hackathon: Prototype Solution Presentation ","company":"SLB","period":"2023.09 - 2023.10","rank":"3rd","technologies":["Dataiku","LSTM","Data Collection","Model Development","ETL Process","ETL Frameworks"],"description":["Developed a mining exploration lithology identification model using LSTM.","Addressed challenges in accurately identifying lithology in mining exploration data.","Collaborated with a multidisciplinary team on data collection, model development, and ETL frameworks and processes.","Presented the LSTM solution, showcasing its effectiveness in improving identification accuracy."]},{"title":"Data Science Hackathon: Creative Poster at the WA Mining Conference","company":"SLB","period":"2023.10","rank":"4th","technologies":["Microsoft PowerPoint","Dataiku"],"description":["Designed an engaging and informative poster showcasing the applications and benefits of the developed model.","Presented findings at the conference, highlighting the impact of accurate lithology identification in mining exploration.","Received recognition for the innovative approach to solving exploration challenges."]}]},{"volunteer":[{"project":"Repair Labs project","company":"CFC","url":"https://github.com/codersforcauses/repair-labs","occupation":"Full Stack developer","period":"2023.06 - Current","technologies":["Next.js","TypeScript","React","Tailwind CSS","Vercel","Prisma","Postgres","Docker"],"description":["Actively contributing as a member of the Repair Labs Project.","Technology Stack: Next.js, TypeScript, React, Tailwind CSS, and Vercel; Prisma as ORM, Postgres, and Docker for local DB.","Designed mobile and desktop layouts using Figma, ensuring a user-friendly interface.","Developed robust APIs to seamlessly connect frontend pages with the backend database, facilitating efficient data retrieval and updates.","Achievements: Successfully created and merged three pull requests via GitHub into the main branch within one month."]},{"project":"Pets Of Older Persons project","company":"CFC","url":"https://github.com/codersforcauses/poops","occupation":"Full Stack developer","period":"2022.11 - 2023.02","label":"","technologies":["Next.js","TypeScript","React","Tailwind CSS","Firebase","Vercel"],"description":["Contributed as a team member in the Pets of Older Persons Project.","Technology Stack: Next.js, TypeScript, React, Tailwind CSS, Firebase, and Vercel.","Utilized Figma to craft intuitive mobile and desktop layouts.","Collaborated effectively with other student volunteers, utilizing Git version control."]}]},{"academic":[{"subject":"Agile Web application - BrewChat","url":"","label":"UWA Project","technologies":["Javascript","Flask","SQLAlchemy","unittest","Git"],"achievement":"HD","rank":"Top3","description":""},{"subject":"Data Warehousing & Association Rule Mining","url":"","label":"UWA Project","technologies":["R","SQL","SSMS","Power BI"],"achievement":"HD","rank":"Top2","description":""},{"subject":"Graph Database & Graph Data Science","url":"","label":"UWA Project","technologies":["Neo4j","Cypher","R"],"achievement":"HD","rank":"Top4","description":""},{"subject":"Exploratory data analysis and Machine learning models","url":"","label":"UWA Project","technologies":["R","RStudio","Git"],"achievement":"","rank":"Top1","description":""},{"subject":"IOT ESP32 Air Quality Detector","url":"","label":"UWA Project","technologies":["C++","Flask","HTML","CSS","Javascript","Firebase Real-Time DB","Git"],"achievement":"HD","rank":"","description":""},{"subject":"Business intelligence report","url":"","label":"UWA Project","technologies":["Python","PowerBI"],"achievement":"HD","rank":"","description":""},{"subject":"Cybersecurity","url":"","label":"UWA Project","technologies":["Bash","Virtualisation","Containerisation"],"achievement":"HD","rank":"","description":""},{"subject":"Rational Database Management System","url":"","label":"UWA Project","technologies":["SQL"],"achievement":"HD","rank":"","description":""},{"subject":"COVID Analysis","url":"","label":"UWA Project","technologies":["Python"],"achievement":"HD","rank":"","description":""}]}]'
);
var De = () => {
  const [e, n] = useState(t(je)),
    r = e.volunteer || [];
  return (
    useEffect(() => {
      console.log(e);
    }, [e]),
    (0, o.jsxs)("section", {
      className: "padding",
      id: "portfolio",
      children: [
        (0, o.jsx)("h2", {
          style: { textAlign: "center" },
          children: "Portfolio - Work and Project Experience",
        }),
        (0, o.jsxs)("div", {
          style: { display: "flex", flexDirection: "row", paddingTop: "3rem" },
          children: [
            (0, o.jsx)("div", {
              style: { maxWidth: "40%", alignSelf: "center" },
              children: (0, o.jsx)("img", {
                src: t(ze),
                style: {
                  height: "90%",
                  width: "100%",
                  objectFit: "cover",
                  animation: "1s ease-out 0s 1 slideIn",
                },
                alt: "desktop with books and laptop",
              }),
            }),
            (0, o.jsx)("div", {
              className: "container",
              children: r.map((e) =>
                (0, o.jsxs)(
                  "div",
                  {
                    className: "box",
                    children: [
                      (0, o.jsx)("a", {
                        href: e.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: (0, o.jsxs)("h3", {
                          style: { flexBasis: "40px" },
                          children: [e.project, " - ", e.company],
                        }),
                      }),
                      (0, o.jsx)("p", { className: "small", children: e.technologies }),
                      (0, o.jsx)("p", { className: "small", children: e.description }),
                    ],
                  },
                  e.project
                )
              ),
            }),
          ],
        }),
      ],
    })
  );
};
const Ie = {
  name: "Huixin Yang",
  title: "Software Developer & CPA Australia",
  email: "huixin.yang.tw@gmail.com",
  gitHub: "HUIXIN-TW",
  instagram: "",
  linkedIn: "hui-xin-yang",
  medium: "",
  twitter: "",
  youTube: "",
};
var Oe = () =>
  (0, o.jsxs)("div", {
    id: "main",
    children: [
      (0, o.jsx)(S, {}),
      (0, o.jsx)(P, { name: Ie.name, title: Ie.title }),
      (0, o.jsx)(c, {}),
      (0, o.jsx)(Re, {}),
      (0, o.jsx)(De, {}),
      (0, o.jsx)(k, { ...Ie, primaryColor: "#4E567E", secondaryColor: "#D2F1E4" }),
    ],
  });
(0, i.render)((0, o.jsx)(Oe, {}), document.getElementById("app"));
//# sourceMappingURL=index.037bf7a1.js.map
