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
  l = {},
  a = n.parcelRequire2359;
null == a &&
  (((a = function (e) {
    if (e in r) return r[e].exports;
    if (e in l) {
      var t = l[e];
      delete l[e];
      var n = { id: e, exports: {} };
      return (r[e] = n), t.call(n.exports, n, n.exports), n.exports;
    }
    var a = new Error("Cannot find module '" + e + "'");
    throw ((a.code = "MODULE_NOT_FOUND"), a);
  }).register = function (e, t) {
    l[e] = t;
  }),
  (n.parcelRequire2359 = a)),
  a.register("27Lyk", function (t, n) {
    var r, l;
    e(
      t.exports,
      "register",
      () => r,
      (e) => (r = e)
    ),
      e(
        t.exports,
        "resolve",
        () => l,
        (e) => (l = e)
      );
    var a = {};
    (r = function (e) {
      for (var t = Object.keys(e), n = 0; n < t.length; n++) a[t[n]] = e[t[n]];
    }),
      (l = function (e) {
        var t = a[e];
        if (null == t) throw new Error("Could not resolve bundle with id " + e);
        return t;
      });
  }),
  a.register("1b2ls", function (t, n) {
    var r, l, o;
    e(
      t.exports,
      "Fragment",
      () => r,
      (e) => (r = e)
    ),
      e(
        t.exports,
        "jsx",
        () => l,
        (e) => (l = e)
      ),
      e(
        t.exports,
        "jsxs",
        () => o,
        (e) => (o = e)
      );
    var i = a("acw62"),
      u = Symbol.for("react.element"),
      s = Symbol.for("react.fragment"),
      c = Object.prototype.hasOwnProperty,
      f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      d = { key: !0, ref: !0, __self: !0, __source: !0 };
    function p(e, t, n) {
      var r,
        l = {},
        a = null,
        o = null;
      for (r in (void 0 !== n && (a = "" + n),
      void 0 !== t.key && (a = "" + t.key),
      void 0 !== t.ref && (o = t.ref),
      t))
        c.call(t, r) && !d.hasOwnProperty(r) && (l[r] = t[r]);
      if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
      return { $$typeof: u, type: e, key: a, ref: o, props: l, _owner: f.current };
    }
    (r = s), (l = p), (o = p);
  }),
  a.register("acw62", function (e, t) {
    e.exports = a("2pUnB");
  }),
  a.register("2pUnB", function (t, n) {
    var r,
      l,
      a,
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
      _,
      P,
      N,
      T,
      L,
      z,
      R,
      I,
      O,
      D,
      j,
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
        () => l,
        (e) => (l = e)
      ),
      e(
        t.exports,
        "Fragment",
        () => a,
        (e) => (a = e)
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
        () => _,
        (e) => (_ = e)
      ),
      e(
        t.exports,
        "useId",
        () => P,
        (e) => (P = e)
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
        () => z,
        (e) => (z = e)
      ),
      e(
        t.exports,
        "useReducer",
        () => R,
        (e) => (R = e)
      ),
      e(
        t.exports,
        "useRef",
        () => I,
        (e) => (I = e)
      ),
      e(
        t.exports,
        "useState",
        () => O,
        (e) => (O = e)
      ),
      e(
        t.exports,
        "useSyncExternalStore",
        () => D,
        (e) => (D = e)
      ),
      e(
        t.exports,
        "useTransition",
        () => j,
        (e) => (j = e)
      ),
      e(
        t.exports,
        "version",
        () => F,
        (e) => (F = e)
      );
    var M = Symbol.for("react.element"),
      U = Symbol.for("react.portal"),
      H = Symbol.for("react.fragment"),
      A = Symbol.for("react.strict_mode"),
      B = Symbol.for("react.profiler"),
      $ = Symbol.for("react.provider"),
      V = Symbol.for("react.context"),
      W = Symbol.for("react.forward_ref"),
      Q = Symbol.for("react.suspense"),
      q = Symbol.for("react.memo"),
      K = Symbol.for("react.lazy"),
      Y = Symbol.iterator;
    var G = {
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
      (this.props = e), (this.context = t), (this.refs = Z), (this.updater = n || G);
    }
    function ee() {}
    function te(e, t, n) {
      (this.props = e), (this.context = t), (this.refs = Z), (this.updater = n || G);
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
      le = Object.prototype.hasOwnProperty,
      ae = { current: null },
      oe = { key: !0, ref: !0, __self: !0, __source: !0 };
    function ie(e, t, n) {
      var r,
        l = {},
        a = null,
        o = null;
      if (null != t)
        for (r in (void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (a = "" + t.key), t))
          le.call(t, r) && !oe.hasOwnProperty(r) && (l[r] = t[r]);
      var i = arguments.length - 2;
      if (1 === i) l.children = n;
      else if (1 < i) {
        for (var u = Array(i), s = 0; s < i; s++) u[s] = arguments[s + 2];
        l.children = u;
      }
      if (e && e.defaultProps) for (r in (i = e.defaultProps)) void 0 === l[r] && (l[r] = i[r]);
      return { $$typeof: M, type: e, key: a, ref: o, props: l, _owner: ae.current };
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
    function fe(e, t, n, r, l) {
      var a = typeof e;
      ("undefined" !== a && "boolean" !== a) || (e = null);
      var o = !1;
      if (null === e) o = !0;
      else
        switch (a) {
          case "string":
          case "number":
            o = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case M:
              case U:
                o = !0;
            }
        }
      if (o)
        return (
          (l = l((o = e))),
          (e = "" === r ? "." + ce(o, 0) : r),
          re(l)
            ? ((n = ""),
              null != e && (n = e.replace(se, "$&/") + "/"),
              fe(l, t, n, "", function (e) {
                return e;
              }))
            : null != l &&
              (ue(l) &&
                (l = (function (e, t) {
                  return {
                    $$typeof: M,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner,
                  };
                })(
                  l,
                  n +
                    (!l.key || (o && o.key === l.key)
                      ? ""
                      : ("" + l.key).replace(se, "$&/") + "/") +
                    e
                )),
              t.push(l)),
          1
        );
      if (((o = 0), (r = "" === r ? "." : r + ":"), re(e)))
        for (var i = 0; i < e.length; i++) {
          var u = r + ce((a = e[i]), i);
          o += fe(a, t, n, u, l);
        }
      else if (
        ((u = (function (e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (Y && e[Y]) || e["@@iterator"])
            ? e
            : null;
        })(e)),
        "function" == typeof u)
      )
        for (e = u.call(e), i = 0; !(a = e.next()).done; )
          o += fe((a = a.value), t, n, (u = r + ce(a, i++)), l);
      else if ("object" === a)
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
        l = 0;
      return (
        fe(e, r, "", "", function (e) {
          return t.call(n, e, l++);
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
      (l = J),
      (a = H),
      (o = B),
      (i = te),
      (u = A),
      (s = Q),
      (c = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: he, ReactCurrentOwner: ae }),
      (f = function (e, t, n) {
        if (null == e)
          throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
              e +
              "."
          );
        var r = X({}, e.props),
          l = e.key,
          a = e.ref,
          o = e._owner;
        if (null != t) {
          if (
            (void 0 !== t.ref && ((a = t.ref), (o = ae.current)),
            void 0 !== t.key && (l = "" + t.key),
            e.type && e.type.defaultProps)
          )
            var i = e.type.defaultProps;
          for (u in t)
            le.call(t, u) &&
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
        return { $$typeof: M, type: e.type, key: l, ref: a, props: r, _owner: o };
      }),
      (d = function (e) {
        return (
          ((e = {
            $$typeof: V,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }).Provider = { $$typeof: $, _context: e }),
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
        return { $$typeof: W, render: e };
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
      (_ = function (e, t) {
        return me.current.useEffect(e, t);
      }),
      (P = function () {
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
      (z = function (e, t) {
        return me.current.useMemo(e, t);
      }),
      (R = function (e, t, n) {
        return me.current.useReducer(e, t, n);
      }),
      (I = function (e) {
        return me.current.useRef(e);
      }),
      (O = function (e) {
        return me.current.useState(e);
      }),
      (D = function (e, t, n) {
        return me.current.useSyncExternalStore(e, t, n);
      }),
      (j = function () {
        return me.current.useTransition();
      }),
      (F = "18.2.0");
  }),
  a.register("Xw6Mv", function (t, n) {
    var r, l, o, i, u, s, c, f, d, p, m, h;
    e(
      t.exports,
      "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
      () => r,
      (e) => (r = e)
    ),
      e(
        t.exports,
        "createPortal",
        () => l,
        (e) => (l = e)
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
    var g = a("acw62"),
      v = a("fO90s");
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
      _ = {},
      P = {};
    function N(e, t, n, r, l, a, o) {
      (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = l),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = a),
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
    function z(e) {
      return e[1].toUpperCase();
    }
    function R(e, t, n, r) {
      var l = T.hasOwnProperty(t) ? T[t] : null;
      (null !== l
        ? 0 !== l.type
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
        })(t, n, l, r) && (n = null),
        r || null === l
          ? (function (e) {
              return (
                !!E.call(P, e) || (!E.call(_, e) && (C.test(e) ? (P[e] = !0) : ((_[e] = !0), !1)))
              );
            })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
          : l.mustUseProperty
          ? (e[l.propertyName] = null === n ? 3 !== l.type && "" : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            null === n
              ? e.removeAttribute(t)
              : ((n = 3 === (l = l.type) || (4 === l && !0 === n) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(L, z);
        T[t] = new N(t, 1, !1, e, null, !1, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(L, z);
          T[t] = new N(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var t = e.replace(L, z);
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
    var I = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      O = Symbol.for("react.element"),
      D = Symbol.for("react.portal"),
      j = Symbol.for("react.fragment"),
      F = Symbol.for("react.strict_mode"),
      M = Symbol.for("react.profiler"),
      U = Symbol.for("react.provider"),
      H = Symbol.for("react.context"),
      A = Symbol.for("react.forward_ref"),
      B = Symbol.for("react.suspense"),
      $ = Symbol.for("react.suspense_list"),
      V = Symbol.for("react.memo"),
      W = Symbol.for("react.lazy");
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
    var Y,
      G = Object.assign;
    function X(e) {
      if (void 0 === Y)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          Y = (t && t[1]) || "";
        }
      return "\n" + Y + e;
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
            var l = t.stack.split("\n"),
              a = r.stack.split("\n"),
              o = l.length - 1,
              i = a.length - 1;
            1 <= o && 0 <= i && l[o] !== a[i];

          )
            i--;
          for (; 1 <= o && 0 <= i; o--, i--)
            if (l[o] !== a[i]) {
              if (1 !== o || 1 !== i)
                do {
                  if ((o--, 0 > --i || l[o] !== a[i])) {
                    var u = "\n" + l[o].replace(" at new ", " at ");
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
        case j:
          return "Fragment";
        case D:
          return "Portal";
        case M:
          return "Profiler";
        case F:
          return "StrictMode";
        case B:
          return "Suspense";
        case $:
          return "SuspenseList";
      }
      if ("object" == typeof e)
        switch (e.$$typeof) {
          case H:
            return (e.displayName || "Context") + ".Consumer";
          case U:
            return (e._context.displayName || "Context") + ".Provider";
          case A:
            var t = e.render;
            return (
              (e = e.displayName) ||
                (e =
                  "" !== (e = t.displayName || t.name || "")
                    ? "ForwardRef(" + e + ")"
                    : "ForwardRef"),
              e
            );
          case V:
            return null !== (t = e.displayName || null) ? t : te(e.type) || "Memo";
          case W:
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
    function le(e) {
      var t = e.type;
      return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
    }
    function ae(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var t = le(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
          if (
            !e.hasOwnProperty(t) &&
            void 0 !== n &&
            "function" == typeof n.get &&
            "function" == typeof n.set
          ) {
            var l = n.get,
              a = n.set;
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return l.call(this);
                },
                set: function (e) {
                  (r = "" + e), a.call(this, e);
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
        e && (r = le(e) ? (e.checked ? "true" : "false") : e.value),
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
      return G({}, t, {
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
      null != (t = t.checked) && R(e, "checked", t, !1);
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
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
          (l = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0);
      } else {
        for (n = "" + re(n), t = null, l = 0; l < e.length; l++) {
          if (e[l].value === n)
            return (e[l].selected = !0), void (r && (e[l].defaultSelected = !0));
          null !== t || e[l].disabled || (t = e[l]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function ge(e, t) {
      if (null != t.dangerouslySetInnerHTML) throw Error(y(91));
      return G({}, t, {
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
    var _e = {
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
      Pe = ["Webkit", "ms", "Moz", "O"];
    function Ne(e, t, n) {
      return null == t || "boolean" == typeof t || "" === t
        ? ""
        : n || "number" != typeof t || 0 === t || (_e.hasOwnProperty(e) && _e[e])
        ? ("" + t).trim()
        : t + "px";
    }
    function Te(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf("--"),
            l = Ne(n, t[n], r);
          "float" === n && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
        }
    }
    Object.keys(_e).forEach(function (e) {
      Pe.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_e[t] = _e[e]);
      });
    });
    var Le = G(
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
    function ze(e, t) {
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
    function Re(e, t) {
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
    var Ie = null;
    function Oe(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    var De = null,
      je = null,
      Fe = null;
    function Me(e) {
      if ((e = Rl(e))) {
        if ("function" != typeof De) throw Error(y(280));
        var t = e.stateNode;
        t && ((t = Ol(t)), De(e.stateNode, e.type, t));
      }
    }
    function Ue(e) {
      je ? (Fe ? Fe.push(e) : (Fe = [e])) : (je = e);
    }
    function He() {
      if (je) {
        var e = je,
          t = Fe;
        if (((Fe = je = null), Me(e), t)) for (e = 0; e < t.length; e++) Me(t[e]);
      }
    }
    function Ae(e, t) {
      return e(t);
    }
    function Be() {}
    var $e = !1;
    function Ve(e, t, n) {
      if ($e) return e(t, n);
      $e = !0;
      try {
        return Ae(e, t, n);
      } finally {
        ($e = !1), (null !== je || null !== Fe) && (Be(), He());
      }
    }
    function We(e, t) {
      var n = e.stateNode;
      if (null === n) return null;
      var r = Ol(n);
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
    function Ke(e, t, n, r, l, a, o, i, u) {
      var s = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, s);
      } catch (e) {
        this.onError(e);
      }
    }
    var Ye = !1,
      Ge = null,
      Xe = !1,
      Ze = null,
      Je = {
        onError: function (e) {
          (Ye = !0), (Ge = e);
        },
      };
    function et(e, t, n, r, l, a, o, i, u) {
      (Ye = !1), (Ge = null), Ke.apply(Je, arguments);
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
    function lt(e) {
      return null !==
        (e = (function (e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = tt(e))) throw Error(y(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
            var l = n.return;
            if (null === l) break;
            var a = l.alternate;
            if (null === a) {
              if (null !== (r = l.return)) {
                n = r;
                continue;
              }
              break;
            }
            if (l.child === a.child) {
              for (a = l.child; a; ) {
                if (a === n) return rt(l), e;
                if (a === r) return rt(l), t;
                a = a.sibling;
              }
              throw Error(y(188));
            }
            if (n.return !== r.return) (n = l), (r = a);
            else {
              for (var o = !1, i = l.child; i; ) {
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
              if (!o) {
                for (i = a.child; i; ) {
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
                if (!o) throw Error(y(189));
              }
            }
            if (n.alternate !== r) throw Error(y(190));
          }
          if (3 !== n.tag) throw Error(y(188));
          return n.stateNode.current === n ? e : t;
        })(e))
        ? at(e)
        : null;
    }
    function at(e) {
      if (5 === e.tag || 6 === e.tag) return e;
      for (e = e.child; null !== e; ) {
        var t = at(e);
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
        l = e.suspendedLanes,
        a = e.pingedLanes,
        o = 268435455 & n;
      if (0 !== o) {
        var i = o & ~l;
        0 !== i ? (r = Et(i)) : 0 !== (a &= o) && (r = Et(a));
      } else 0 !== (o = n & ~l) ? (r = Et(o)) : 0 !== a && (r = Et(a));
      if (0 === r) return 0;
      if (
        0 !== t &&
        t !== r &&
        0 == (t & l) &&
        ((l = r & -r) >= (a = t & -t) || (16 === l && 0 != (4194240 & a)))
      )
        return t;
      if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; )
          (l = 1 << (n = 31 - bt(t))), (r |= e[n]), (t &= ~l);
      return r;
    }
    function _t(e, t) {
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
    function Pt(e) {
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
    function zt(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - bt(n),
          l = 1 << r;
        (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
      }
    }
    var Rt = 0;
    function It(e) {
      return 1 < (e &= -e) ? (4 < e ? (0 != (268435455 & e) ? 16 : 536870912) : 4) : 1;
    }
    var Ot,
      Dt,
      jt,
      Ft,
      Mt,
      Ut = !1,
      Ht = [],
      At = null,
      Bt = null,
      $t = null,
      Vt = new Map(),
      Wt = new Map(),
      Qt = [],
      qt =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        );
    function Kt(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          At = null;
          break;
        case "dragenter":
        case "dragleave":
          Bt = null;
          break;
        case "mouseover":
        case "mouseout":
          $t = null;
          break;
        case "pointerover":
        case "pointerout":
          Vt.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Wt.delete(t.pointerId);
      }
    }
    function Yt(e, t, n, r, l, a) {
      return null === e || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [l],
          }),
          null !== t && null !== (t = Rl(t)) && Dt(t),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          null !== l && -1 === t.indexOf(l) && t.push(l),
          e);
    }
    function Gt(e) {
      var t = zl(e.target);
      if (null !== t) {
        var n = tt(t);
        if (null !== n)
          if (13 === (t = n.tag)) {
            if (null !== (t = nt(n)))
              return (
                (e.blockedOn = t),
                void Mt(e.priority, function () {
                  jt(n);
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
        if (null !== n) return null !== (t = Rl(n)) && Dt(t), (e.blockedOn = n), !1;
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        (Ie = r), n.target.dispatchEvent(r), (Ie = null), t.shift();
      }
      return !0;
    }
    function Zt(e, t, n) {
      Xt(e) && n.delete(t);
    }
    function Jt() {
      (Ut = !1),
        null !== At && Xt(At) && (At = null),
        null !== Bt && Xt(Bt) && (Bt = null),
        null !== $t && Xt($t) && ($t = null),
        Vt.forEach(Zt),
        Wt.forEach(Zt);
    }
    function en(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        Ut || ((Ut = !0), v.unstable_scheduleCallback(v.unstable_NormalPriority, Jt)));
    }
    function tn(e) {
      function t(t) {
        return en(t, e);
      }
      if (0 < Ht.length) {
        en(Ht[0], e);
        for (var n = 1; n < Ht.length; n++) {
          var r = Ht[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        null !== At && en(At, e),
          null !== Bt && en(Bt, e),
          null !== $t && en($t, e),
          Vt.forEach(t),
          Wt.forEach(t),
          n = 0;
        n < Qt.length;
        n++
      )
        (r = Qt[n]).blockedOn === e && (r.blockedOn = null);
      for (; 0 < Qt.length && null === (n = Qt[0]).blockedOn; )
        Gt(n), null === n.blockedOn && Qt.shift();
    }
    var nn = I.ReactCurrentBatchConfig,
      rn = !0;
    function ln(e, t, n, r) {
      var l = Rt,
        a = nn.transition;
      nn.transition = null;
      try {
        (Rt = 1), on(e, t, n, r);
      } finally {
        (Rt = l), (nn.transition = a);
      }
    }
    function an(e, t, n, r) {
      var l = Rt,
        a = nn.transition;
      nn.transition = null;
      try {
        (Rt = 4), on(e, t, n, r);
      } finally {
        (Rt = l), (nn.transition = a);
      }
    }
    function on(e, t, n, r) {
      if (rn) {
        var l = sn(e, t, n, r);
        if (null === l) rl(e, t, r, un, n), Kt(e, r);
        else if (
          (function (e, t, n, r, l) {
            switch (t) {
              case "focusin":
                return (At = Yt(At, e, t, n, r, l)), !0;
              case "dragenter":
                return (Bt = Yt(Bt, e, t, n, r, l)), !0;
              case "mouseover":
                return ($t = Yt($t, e, t, n, r, l)), !0;
              case "pointerover":
                var a = l.pointerId;
                return Vt.set(a, Yt(Vt.get(a) || null, e, t, n, r, l)), !0;
              case "gotpointercapture":
                return (a = l.pointerId), Wt.set(a, Yt(Wt.get(a) || null, e, t, n, r, l)), !0;
            }
            return !1;
          })(l, e, t, n, r)
        )
          r.stopPropagation();
        else if ((Kt(e, r), 4 & t && -1 < qt.indexOf(e))) {
          for (; null !== l; ) {
            var a = Rl(l);
            if ((null !== a && Ot(a), null === (a = sn(e, t, n, r)) && rl(e, t, r, un, n), a === l))
              break;
            l = a;
          }
          null !== l && r.stopPropagation();
        } else rl(e, t, r, null, n);
      }
    }
    var un = null;
    function sn(e, t, n, r) {
      if (((un = null), null !== (e = zl((e = Oe(r))))))
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
        l = "value" in fn ? fn.value : fn.textContent,
        a = l.length;
      for (e = 0; e < r && n[e] === l[e]; e++);
      var o = r - e;
      for (t = 1; t <= o && n[r - t] === l[a - t]; t++);
      return (pn = l.slice(e, 1 < t ? 1 - t : void 0));
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
      function t(t, n, r, l, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = l),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(l) : l[o]));
        return (
          (this.isDefaultPrevented = (
            null != l.defaultPrevented ? l.defaultPrevented : !1 === l.returnValue
          )
            ? gn
            : vn),
          (this.isPropagationStopped = vn),
          this
        );
      }
      return (
        G(t.prototype, {
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
      En = G({}, Sn, { view: 0, detail: 0 }),
      Cn = yn(En),
      _n = G({}, En, {
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
      Pn = yn(_n),
      Nn = yn(G({}, _n, { dataTransfer: 0 })),
      Tn = yn(G({}, En, { relatedTarget: 0 })),
      Ln = yn(G({}, Sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      zn = G({}, Sn, {
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      }),
      Rn = yn(zn),
      In = yn(G({}, Sn, { data: 0 })),
      On = {
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
      Dn = {
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
      jn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Fn(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : !!(e = jn[e]) && !!t[e];
    }
    function Mn() {
      return Fn;
    }
    var Un = G({}, En, {
        key: function (e) {
          if (e.key) {
            var t = On[e.key] || e.key;
            if ("Unidentified" !== t) return t;
          }
          return "keypress" === e.type
            ? 13 === (e = hn(e))
              ? "Enter"
              : String.fromCharCode(e)
            : "keydown" === e.type || "keyup" === e.type
            ? Dn[e.keyCode] || "Unidentified"
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
      Hn = yn(Un),
      An = yn(
        G({}, _n, {
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
        G({}, En, {
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
      $n = yn(G({}, Sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Vn = G({}, _n, {
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
      Wn = yn(Vn),
      Qn = [9, 13, 27, 32],
      qn = x && "CompositionEvent" in window,
      Kn = null;
    x && "documentMode" in document && (Kn = document.documentMode);
    var Yn = x && "TextEvent" in window && !Kn,
      Gn = x && (!qn || (Kn && 8 < Kn && 11 >= Kn)),
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
    function lr(e, t, n, r) {
      Ue(r),
        0 < (t = al(t, "onChange")).length &&
          ((n = new xn("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
    }
    var ar = null,
      or = null;
    function ir(e) {
      Xr(e, 0);
    }
    function ur(e) {
      if (oe(Il(e))) return e;
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
      ar && (ar.detachEvent("onpropertychange", hr), (or = ar = null));
    }
    function hr(e) {
      if ("value" === e.propertyName && ur(or)) {
        var t = [];
        lr(t, or, e, Oe(e)), Ve(ir, t);
      }
    }
    function gr(e, t, n) {
      "focusin" === e
        ? (mr(), (or = n), (ar = t).attachEvent("onpropertychange", hr))
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
        var l = n[r];
        if (!E.call(t, l) || !wr(e[l], t[l])) return !1;
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
    function _r(e) {
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
    function Pr(e) {
      var t = Cr(),
        n = e.focusedElem,
        r = e.selectionRange;
      if (t !== n && n && n.ownerDocument && Er(n.ownerDocument.documentElement, n)) {
        if (null !== r && _r(n))
          if (((t = r.start), void 0 === (e = r.end) && (e = t), "selectionStart" in n))
            (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
          else if (
            (e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection
          ) {
            e = e.getSelection();
            var l = n.textContent.length,
              a = Math.min(r.start, l);
            (r = void 0 === r.end ? a : Math.min(r.end, l)),
              !e.extend && a > r && ((l = r), (r = a), (a = l)),
              (l = xr(n, a));
            var o = xr(n, r);
            l &&
              o &&
              (1 !== e.rangeCount ||
                e.anchorNode !== l.node ||
                e.anchorOffset !== l.offset ||
                e.focusNode !== o.node ||
                e.focusOffset !== o.offset) &&
              ((t = t.createRange()).setStart(l.node, l.offset),
              e.removeAllRanges(),
              a > r
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
      zr = null,
      Rr = !1;
    function Ir(e, t, n) {
      var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
      Rr ||
        null == Tr ||
        Tr !== ie(r) ||
        ("selectionStart" in (r = Tr) && _r(r)
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
        (zr && kr(zr, r)) ||
          ((zr = r),
          0 < (r = al(Lr, "onSelect")).length &&
            ((t = new xn("onSelect", "select", null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Tr))));
    }
    function Or(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
      );
    }
    var Dr = {
        animationend: Or("Animation", "AnimationEnd"),
        animationiteration: Or("Animation", "AnimationIteration"),
        animationstart: Or("Animation", "AnimationStart"),
        transitionend: Or("Transition", "TransitionEnd"),
      },
      jr = {},
      Fr = {};
    function Mr(e) {
      if (jr[e]) return jr[e];
      if (!Dr[e]) return e;
      var t,
        n = Dr[e];
      for (t in n) if (n.hasOwnProperty(t) && t in Fr) return (jr[e] = n[t]);
      return e;
    }
    x &&
      ((Fr = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Dr.animationend.animation,
        delete Dr.animationiteration.animation,
        delete Dr.animationstart.animation),
      "TransitionEvent" in window || delete Dr.transitionend.transition);
    var Ur = Mr("animationend"),
      Hr = Mr("animationiteration"),
      Ar = Mr("animationstart"),
      Br = Mr("transitionend"),
      $r = new Map(),
      Vr =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " "
        );
    function Wr(e, t) {
      $r.set(e, t), k(t, [e]);
    }
    for (var Qr = 0; Qr < Vr.length; Qr++) {
      var qr = Vr[Qr];
      Wr(qr.toLowerCase(), "on" + (qr[0].toUpperCase() + qr.slice(1)));
    }
    Wr(Ur, "onAnimationEnd"),
      Wr(Hr, "onAnimationIteration"),
      Wr(Ar, "onAnimationStart"),
      Wr("dblclick", "onDoubleClick"),
      Wr("focusin", "onFocus"),
      Wr("focusout", "onBlur"),
      Wr(Br, "onTransitionEnd"),
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
      Yr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));
    function Gr(e, t, n) {
      var r = e.type || "unknown-event";
      (e.currentTarget = n),
        (function (e, t, n, r, l, a, o, i, u) {
          if ((et.apply(this, arguments), Ye)) {
            if (!Ye) throw Error(y(198));
            var s = Ge;
            (Ye = !1), (Ge = null), Xe || ((Xe = !0), (Ze = s));
          }
        })(r, t, void 0, e),
        (e.currentTarget = null);
    }
    function Xr(e, t) {
      t = 0 != (4 & t);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          l = r.event;
        r = r.listeners;
        e: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var i = r[o],
                u = i.instance,
                s = i.currentTarget;
              if (((i = i.listener), u !== a && l.isPropagationStopped())) break e;
              Gr(l, i, s), (a = u);
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((u = (i = r[o]).instance),
                (s = i.currentTarget),
                (i = i.listener),
                u !== a && l.isPropagationStopped())
              )
                break e;
              Gr(l, i, s), (a = u);
            }
        }
      }
      if (Xe) throw ((e = Ze), (Xe = !1), (Ze = null), e);
    }
    function Zr(e, t) {
      var n = t[Nl];
      void 0 === n && (n = t[Nl] = new Set());
      var r = e + "__bubble";
      n.has(r) || (nl(t, e, 2, !1), n.add(r));
    }
    function Jr(e, t, n) {
      var r = 0;
      t && (r |= 4), nl(n, e, r, t);
    }
    var el = "_reactListening" + Math.random().toString(36).slice(2);
    function tl(e) {
      if (!e[el]) {
        (e[el] = !0),
          b.forEach(function (t) {
            "selectionchange" !== t && (Yr.has(t) || Jr(t, !1, e), Jr(t, !0, e));
          });
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[el] || ((t[el] = !0), Jr("selectionchange", !1, t));
      }
    }
    function nl(e, t, n, r) {
      switch (cn(t)) {
        case 1:
          var l = ln;
          break;
        case 4:
          l = an;
          break;
        default:
          l = on;
      }
      (n = l.bind(null, t, n, e)),
        (l = void 0),
        !Qe || ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) || (l = !0),
        r
          ? void 0 !== l
            ? e.addEventListener(t, n, { capture: !0, passive: l })
            : e.addEventListener(t, n, !0)
          : void 0 !== l
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1);
    }
    function rl(e, t, n, r, l) {
      var a = r;
      if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
          if (null === r) return;
          var o = r.tag;
          if (3 === o || 4 === o) {
            var i = r.stateNode.containerInfo;
            if (i === l || (8 === i.nodeType && i.parentNode === l)) break;
            if (4 === o)
              for (o = r.return; null !== o; ) {
                var u = o.tag;
                if (
                  (3 === u || 4 === u) &&
                  ((u = o.stateNode.containerInfo) === l ||
                    (8 === u.nodeType && u.parentNode === l))
                )
                  return;
                o = o.return;
              }
            for (; null !== i; ) {
              if (null === (o = zl(i))) return;
              if (5 === (u = o.tag) || 6 === u) {
                r = a = o;
                continue e;
              }
              i = i.parentNode;
            }
          }
          r = r.return;
        }
      Ve(function () {
        var r = a,
          l = Oe(n),
          o = [];
        e: {
          var i = $r.get(e);
          if (void 0 !== i) {
            var u = xn,
              s = e;
            switch (e) {
              case "keypress":
                if (0 === hn(n)) break e;
              case "keydown":
              case "keyup":
                u = Hn;
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
                u = Pn;
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
              case Ur:
              case Hr:
              case Ar:
                u = Ln;
                break;
              case Br:
                u = $n;
                break;
              case "scroll":
                u = Cn;
                break;
              case "wheel":
                u = Wn;
                break;
              case "copy":
              case "cut":
              case "paste":
                u = Rn;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                u = An;
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
                  ((p = h), null !== d && null != (h = We(m, d)) && c.push(ll(m, h, p))),
                f)
              )
                break;
              m = m.return;
            }
            0 < c.length && ((i = new u(i, s, null, n, l)), o.push({ event: i, listeners: c }));
          }
        }
        if (0 == (7 & t)) {
          if (
            ((u = "mouseout" === e || "pointerout" === e),
            (!(i = "mouseover" === e || "pointerover" === e) ||
              n === Ie ||
              !(s = n.relatedTarget || n.fromElement) ||
              (!zl(s) && !s[Pl])) &&
              (u || i) &&
              ((i =
                l.window === l
                  ? l
                  : (i = l.ownerDocument)
                  ? i.defaultView || i.parentWindow
                  : window),
              u
                ? ((u = r),
                  null !== (s = (s = n.relatedTarget || n.toElement) ? zl(s) : null) &&
                    (s !== (f = tt(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                    (s = null))
                : ((u = null), (s = r)),
              u !== s))
          ) {
            if (
              ((c = Pn),
              (h = "onMouseLeave"),
              (d = "onMouseEnter"),
              (m = "mouse"),
              ("pointerout" !== e && "pointerover" !== e) ||
                ((c = An), (h = "onPointerLeave"), (d = "onPointerEnter"), (m = "pointer")),
              (f = null == u ? i : Il(u)),
              (p = null == s ? i : Il(s)),
              ((i = new c(h, m + "leave", u, n, l)).target = f),
              (i.relatedTarget = p),
              (h = null),
              zl(l) === r &&
                (((c = new c(d, m + "enter", s, n, l)).target = p), (c.relatedTarget = f), (h = c)),
              (f = h),
              u && s)
            )
              e: {
                for (d = s, m = 0, p = c = u; p; p = ol(p)) m++;
                for (p = 0, h = d; h; h = ol(h)) p++;
                for (; 0 < m - p; ) (c = ol(c)), m--;
                for (; 0 < p - m; ) (d = ol(d)), p--;
                for (; m--; ) {
                  if (c === d || (null !== d && c === d.alternate)) break e;
                  (c = ol(c)), (d = ol(d));
                }
                c = null;
              }
            else c = null;
            null !== u && il(o, i, u, c, !1), null !== s && null !== f && il(o, f, s, c, !0);
          }
          if (
            "select" === (u = (i = r ? Il(r) : window).nodeName && i.nodeName.toLowerCase()) ||
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
              ? lr(o, g, n, l)
              : (v && v(e, i, r),
                "focusout" === e &&
                  (v = i._wrapperState) &&
                  v.controlled &&
                  "number" === i.type &&
                  pe(i, "number", i.value)),
            (v = r ? Il(r) : window),
            e)
          ) {
            case "focusin":
              (rr(v) || "true" === v.contentEditable) && ((Tr = v), (Lr = r), (zr = null));
              break;
            case "focusout":
              zr = Lr = Tr = null;
              break;
            case "mousedown":
              Rr = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (Rr = !1), Ir(o, n, l);
              break;
            case "selectionchange":
              if (Nr) break;
            case "keydown":
            case "keyup":
              Ir(o, n, l);
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
            (Gn &&
              "ko" !== n.locale &&
              (tr || "onCompositionStart" !== b
                ? "onCompositionEnd" === b && tr && (y = mn())
                : ((dn = "value" in (fn = l) ? fn.value : fn.textContent), (tr = !0))),
            0 < (v = al(r, b)).length &&
              ((b = new In(b, e, null, n, l)),
              o.push({ event: b, listeners: v }),
              y ? (b.data = y) : null !== (y = er(n)) && (b.data = y))),
            (y = Yn
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
                      return Gn && "ko" !== t.locale ? null : t.data;
                  }
                })(e, n)) &&
              0 < (r = al(r, "onBeforeInput")).length &&
              ((l = new In("onBeforeInput", "beforeinput", null, n, l)),
              o.push({ event: l, listeners: r }),
              (l.data = y));
        }
        Xr(o, t);
      });
    }
    function ll(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function al(e, t) {
      for (var n = t + "Capture", r = []; null !== e; ) {
        var l = e,
          a = l.stateNode;
        5 === l.tag &&
          null !== a &&
          ((l = a),
          null != (a = We(e, n)) && r.unshift(ll(e, a, l)),
          null != (a = We(e, t)) && r.push(ll(e, a, l))),
          (e = e.return);
      }
      return r;
    }
    function ol(e) {
      if (null === e) return null;
      do {
        e = e.return;
      } while (e && 5 !== e.tag);
      return e || null;
    }
    function il(e, t, n, r, l) {
      for (var a = t._reactName, o = []; null !== n && n !== r; ) {
        var i = n,
          u = i.alternate,
          s = i.stateNode;
        if (null !== u && u === r) break;
        5 === i.tag &&
          null !== s &&
          ((i = s),
          l
            ? null != (u = We(n, a)) && o.unshift(ll(n, u, i))
            : l || (null != (u = We(n, a)) && o.push(ll(n, u, i)))),
          (n = n.return);
      }
      0 !== o.length && e.push({ event: t, listeners: o });
    }
    var ul = /\r\n?/g,
      sl = /\u0000|\uFFFD/g;
    function cl(e) {
      return ("string" == typeof e ? e : "" + e).replace(ul, "\n").replace(sl, "");
    }
    function fl(e, t, n) {
      if (((t = cl(t)), cl(e) !== t && n)) throw Error(y(425));
    }
    function dl() {}
    var pl = null,
      ml = null;
    function hl(e, t) {
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
    var gl = "function" == typeof setTimeout ? setTimeout : void 0,
      vl = "function" == typeof clearTimeout ? clearTimeout : void 0,
      yl = "function" == typeof Promise ? Promise : void 0,
      bl =
        "function" == typeof queueMicrotask
          ? queueMicrotask
          : void 0 !== yl
          ? function (e) {
              return yl.resolve(null).then(e).catch(wl);
            }
          : gl;
    function wl(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function kl(e, t) {
      var n = t,
        r = 0;
      do {
        var l = n.nextSibling;
        if ((e.removeChild(n), l && 8 === l.nodeType))
          if ("/$" === (n = l.data)) {
            if (0 === r) return e.removeChild(l), void tn(t);
            r--;
          } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
        n = l;
      } while (n);
      tn(t);
    }
    function Sl(e) {
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
    function xl(e) {
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
    var El = Math.random().toString(36).slice(2),
      Cl = "__reactFiber$" + El,
      _l = "__reactProps$" + El,
      Pl = "__reactContainer$" + El,
      Nl = "__reactEvents$" + El,
      Tl = "__reactListeners$" + El,
      Ll = "__reactHandles$" + El;
    function zl(e) {
      var t = e[Cl];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[Pl] || n[Cl])) {
          if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
            for (e = xl(e); null !== e; ) {
              if ((n = e[Cl])) return n;
              e = xl(e);
            }
          return t;
        }
        n = (e = n).parentNode;
      }
      return null;
    }
    function Rl(e) {
      return !(e = e[Cl] || e[Pl]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
        ? null
        : e;
    }
    function Il(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(y(33));
    }
    function Ol(e) {
      return e[_l] || null;
    }
    var Dl = [],
      jl = -1;
    function Fl(e) {
      return { current: e };
    }
    function Ml(e) {
      0 > jl || ((e.current = Dl[jl]), (Dl[jl] = null), jl--);
    }
    function Ul(e, t) {
      jl++, (Dl[jl] = e.current), (e.current = t);
    }
    var Hl = {},
      Al = Fl(Hl),
      Bl = Fl(!1),
      $l = Hl;
    function Vl(e, t) {
      var n = e.type.contextTypes;
      if (!n) return Hl;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var l,
        a = {};
      for (l in n) a[l] = t[l];
      return (
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = a)),
        a
      );
    }
    function Wl(e) {
      return null != (e = e.childContextTypes);
    }
    function Ql() {
      Ml(Bl), Ml(Al);
    }
    function ql(e, t, n) {
      if (Al.current !== Hl) throw Error(y(168));
      Ul(Al, t), Ul(Bl, n);
    }
    function Kl(e, t, n) {
      var r = e.stateNode;
      if (((t = t.childContextTypes), "function" != typeof r.getChildContext)) return n;
      for (var l in (r = r.getChildContext()))
        if (!(l in t)) throw Error(y(108, ne(e) || "Unknown", l));
      return G({}, n, r);
    }
    function Yl(e) {
      return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Hl),
        ($l = Al.current),
        Ul(Al, e),
        Ul(Bl, Bl.current),
        !0
      );
    }
    function Gl(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(y(169));
      n
        ? ((e = Kl(e, t, $l)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          Ml(Bl),
          Ml(Al),
          Ul(Al, e))
        : Ml(Bl),
        Ul(Bl, n);
    }
    var Xl = null,
      Zl = !1,
      Jl = !1;
    function ea(e) {
      null === Xl ? (Xl = [e]) : Xl.push(e);
    }
    function ta() {
      if (!Jl && null !== Xl) {
        Jl = !0;
        var e = 0,
          t = Rt;
        try {
          var n = Xl;
          for (Rt = 1; e < n.length; e++) {
            var r = n[e];
            do {
              r = r(!0);
            } while (null !== r);
          }
          (Xl = null), (Zl = !1);
        } catch (t) {
          throw (null !== Xl && (Xl = Xl.slice(e + 1)), ot(dt, ta), t);
        } finally {
          (Rt = t), (Jl = !1);
        }
      }
      return null;
    }
    var na = [],
      ra = 0,
      la = null,
      aa = 0,
      oa = [],
      ia = 0,
      ua = null,
      sa = 1,
      ca = "";
    function fa(e, t) {
      (na[ra++] = aa), (na[ra++] = la), (la = e), (aa = t);
    }
    function da(e, t, n) {
      (oa[ia++] = sa), (oa[ia++] = ca), (oa[ia++] = ua), (ua = e);
      var r = sa;
      e = ca;
      var l = 32 - bt(r) - 1;
      (r &= ~(1 << l)), (n += 1);
      var a = 32 - bt(t) + l;
      if (30 < a) {
        var o = l - (l % 5);
        (a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (l -= o),
          (sa = (1 << (32 - bt(t) + l)) | (n << l) | r),
          (ca = a + e);
      } else (sa = (1 << a) | (n << l) | r), (ca = e);
    }
    function pa(e) {
      null !== e.return && (fa(e, 1), da(e, 1, 0));
    }
    function ma(e) {
      for (; e === la; ) (la = na[--ra]), (na[ra] = null), (aa = na[--ra]), (na[ra] = null);
      for (; e === ua; )
        (ua = oa[--ia]),
          (oa[ia] = null),
          (ca = oa[--ia]),
          (oa[ia] = null),
          (sa = oa[--ia]),
          (oa[ia] = null);
    }
    var ha = null,
      ga = null,
      va = !1,
      ya = null;
    function ba(e, t) {
      var n = Vs(5, null, null, 0);
      (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
    }
    function wa(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            null !==
              (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
            ((e.stateNode = t), (ha = e), (ga = Sl(t.firstChild)), !0)
          );
        case 6:
          return (
            null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
            ((e.stateNode = t), (ha = e), (ga = null), !0)
          );
        case 13:
          return (
            null !== (t = 8 !== t.nodeType ? null : t) &&
            ((n = null !== ua ? { id: sa, overflow: ca } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            ((n = Vs(18, null, null, 0)).stateNode = t),
            (n.return = e),
            (e.child = n),
            (ha = e),
            (ga = null),
            !0)
          );
        default:
          return !1;
      }
    }
    function ka(e) {
      return 0 != (1 & e.mode) && 0 == (128 & e.flags);
    }
    function Sa(e) {
      if (va) {
        var t = ga;
        if (t) {
          var n = t;
          if (!wa(e, t)) {
            if (ka(e)) throw Error(y(418));
            t = Sl(n.nextSibling);
            var r = ha;
            t && wa(e, t) ? ba(r, n) : ((e.flags = (-4097 & e.flags) | 2), (va = !1), (ha = e));
          }
        } else {
          if (ka(e)) throw Error(y(418));
          (e.flags = (-4097 & e.flags) | 2), (va = !1), (ha = e);
        }
      }
    }
    function xa(e) {
      for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
      ha = e;
    }
    function Ea(e) {
      if (e !== ha) return !1;
      if (!va) return xa(e), (va = !0), !1;
      var t;
      if (
        ((t = 3 !== e.tag) &&
          !(t = 5 !== e.tag) &&
          (t = "head" !== (t = e.type) && "body" !== t && !hl(e.type, e.memoizedProps)),
        t && (t = ga))
      ) {
        if (ka(e)) throw (Ca(), Error(y(418)));
        for (; t; ) ba(e, t), (t = Sl(t.nextSibling));
      }
      if ((xa(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(y(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("/$" === n) {
                if (0 === t) {
                  ga = Sl(e.nextSibling);
                  break e;
                }
                t--;
              } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
            }
            e = e.nextSibling;
          }
          ga = null;
        }
      } else ga = ha ? Sl(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Ca() {
      for (var e = ga; e; ) e = Sl(e.nextSibling);
    }
    function _a() {
      (ga = ha = null), (va = !1);
    }
    function Pa(e) {
      null === ya ? (ya = [e]) : ya.push(e);
    }
    var Na = I.ReactCurrentBatchConfig;
    function Ta(e, t) {
      if (e && e.defaultProps) {
        for (var n in ((t = G({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
      }
      return t;
    }
    var La = Fl(null),
      za = null,
      Ra = null,
      Ia = null;
    function Oa() {
      Ia = Ra = za = null;
    }
    function Da(e) {
      var t = La.current;
      Ml(La), (e._currentValue = t);
    }
    function ja(e, t, n) {
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
    function Fa(e, t) {
      (za = e),
        (Ia = Ra = null),
        null !== (e = e.dependencies) &&
          null !== e.firstContext &&
          (0 != (e.lanes & t) && (Ii = !0), (e.firstContext = null));
    }
    function Ma(e) {
      var t = e._currentValue;
      if (Ia !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), null === Ra)) {
          if (null === za) throw Error(y(308));
          (Ra = e), (za.dependencies = { lanes: 0, firstContext: e });
        } else Ra = Ra.next = e;
      return t;
    }
    var Ua = null;
    function Ha(e) {
      null === Ua ? (Ua = [e]) : Ua.push(e);
    }
    function Aa(e, t, n, r) {
      var l = t.interleaved;
      return (
        null === l ? ((n.next = n), Ha(t)) : ((n.next = l.next), (l.next = n)),
        (t.interleaved = n),
        Ba(e, r)
      );
    }
    function Ba(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        (e.childLanes |= t),
          null !== (n = e.alternate) && (n.childLanes |= t),
          (n = e),
          (e = e.return);
      return 3 === n.tag ? n.stateNode : null;
    }
    var $a = !1;
    function Va(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function Wa(e, t) {
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
    function Qa(e, t) {
      return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function qa(e, t, n) {
      var r = e.updateQueue;
      if (null === r) return null;
      if (((r = r.shared), 0 != (2 & Au))) {
        var l = r.pending;
        return (
          null === l ? (t.next = t) : ((t.next = l.next), (l.next = t)), (r.pending = t), Ba(e, n)
        );
      }
      return (
        null === (l = r.interleaved) ? ((t.next = t), Ha(r)) : ((t.next = l.next), (l.next = t)),
        (r.interleaved = t),
        Ba(e, n)
      );
    }
    function Ka(e, t, n) {
      if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
        var r = t.lanes;
        (n |= r &= e.pendingLanes), (t.lanes = n), zt(e, n);
      }
    }
    function Ya(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (null !== r && n === (r = r.updateQueue)) {
        var l = null,
          a = null;
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
            null === a ? (l = a = o) : (a = a.next = o), (n = n.next);
          } while (null !== n);
          null === a ? (l = a = t) : (a = a.next = t);
        } else l = a = t;
        return (
          (n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: a,
            shared: r.shared,
            effects: r.effects,
          }),
          void (e.updateQueue = n)
        );
      }
      null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
    }
    function Ga(e, t, n, r) {
      var l = e.updateQueue;
      $a = !1;
      var a = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        i = l.shared.pending;
      if (null !== i) {
        l.shared.pending = null;
        var u = i,
          s = u.next;
        (u.next = null), null === o ? (a = s) : (o.next = s), (o = u);
        var c = e.alternate;
        null !== c &&
          (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
          (null === i ? (c.firstBaseUpdate = s) : (i.next = s), (c.lastBaseUpdate = u));
      }
      if (null !== a) {
        var f = l.baseState;
        for (o = 0, c = s = u = null, i = a; ; ) {
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
                  f = G({}, f, d);
                  break e;
                case 2:
                  $a = !0;
              }
            }
            null !== i.callback &&
              0 !== i.lane &&
              ((e.flags |= 64), null === (d = l.effects) ? (l.effects = [i]) : d.push(i));
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
            if (null === (i = l.shared.pending)) break;
            (i = (d = i).next), (d.next = null), (l.lastBaseUpdate = d), (l.shared.pending = null);
          }
        }
        if (
          (null === c && (u = f),
          (l.baseState = u),
          (l.firstBaseUpdate = s),
          (l.lastBaseUpdate = c),
          null !== (t = l.shared.interleaved))
        ) {
          l = t;
          do {
            (o |= l.lane), (l = l.next);
          } while (l !== t);
        } else null === a && (l.shared.lanes = 0);
        (Yu |= o), (e.lanes = o), (e.memoizedState = f);
      }
    }
    function Xa(e, t, n) {
      if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
          var r = e[t],
            l = r.callback;
          if (null !== l) {
            if (((r.callback = null), (r = n), "function" != typeof l)) throw Error(y(191, l));
            l.call(r);
          }
        }
    }
    var Za = new g.Component().refs;
    function Ja(e, t, n, r) {
      (n = null == (n = n(r, (t = e.memoizedState))) ? t : G({}, t, n)),
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
          l = ms(e),
          a = Qa(r, l);
        (a.payload = t),
          null != n && (a.callback = n),
          null !== (t = qa(e, a, l)) && (hs(t, e, l, r), Ka(t, e, l));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ps(),
          l = ms(e),
          a = Qa(r, l);
        (a.tag = 1),
          (a.payload = t),
          null != n && (a.callback = n),
          null !== (t = qa(e, a, l)) && (hs(t, e, l, r), Ka(t, e, l));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ps(),
          r = ms(e),
          l = Qa(n, r);
        (l.tag = 2),
          null != t && (l.callback = t),
          null !== (t = qa(e, l, r)) && (hs(t, e, r, n), Ka(t, e, r));
      },
    };
    function to(e, t, n, r, l, a, o) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, a, o)
        : !t.prototype || !t.prototype.isPureReactComponent || !kr(n, r) || !kr(l, a);
    }
    function no(e, t, n) {
      var r = !1,
        l = Hl,
        a = t.contextType;
      return (
        "object" == typeof a && null !== a
          ? (a = Ma(a))
          : ((l = Wl(t) ? $l : Al.current),
            (a = (r = null != (r = t.contextTypes)) ? Vl(e, l) : Hl)),
        (t = new t(n, a)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = eo),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = l),
          (e.__reactInternalMemoizedMaskedChildContext = a)),
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
    function lo(e, t, n, r) {
      var l = e.stateNode;
      (l.props = n), (l.state = e.memoizedState), (l.refs = Za), Va(e);
      var a = t.contextType;
      "object" == typeof a && null !== a
        ? (l.context = Ma(a))
        : ((a = Wl(t) ? $l : Al.current), (l.context = Vl(e, a))),
        (l.state = e.memoizedState),
        "function" == typeof (a = t.getDerivedStateFromProps) &&
          (Ja(e, t, a, n), (l.state = e.memoizedState)),
        "function" == typeof t.getDerivedStateFromProps ||
          "function" == typeof l.getSnapshotBeforeUpdate ||
          ("function" != typeof l.UNSAFE_componentWillMount &&
            "function" != typeof l.componentWillMount) ||
          ((t = l.state),
          "function" == typeof l.componentWillMount && l.componentWillMount(),
          "function" == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount(),
          t !== l.state && eo.enqueueReplaceState(l, l.state, null),
          Ga(e, n, l, r),
          (l.state = e.memoizedState)),
        "function" == typeof l.componentDidMount && (e.flags |= 4194308);
    }
    function ao(e, t, n) {
      if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
        if (n._owner) {
          if ((n = n._owner)) {
            if (1 !== n.tag) throw Error(y(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(y(147, e));
          var l = r,
            a = "" + e;
          return null !== t &&
            null !== t.ref &&
            "function" == typeof t.ref &&
            t.ref._stringRef === a
            ? t.ref
            : ((t = function (e) {
                var t = l.refs;
                t === Za && (t = l.refs = {}), null === e ? delete t[a] : (t[a] = e);
              }),
              (t._stringRef = a),
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
      function l(e, t) {
        return ((e = Qs(e, t)).index = 0), (e.sibling = null), e;
      }
      function a(t, n, r) {
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
          ? (((t = Gs(n, e.mode, r)).return = e), t)
          : (((t = l(t, n)).return = e), t);
      }
      function u(e, t, n, r) {
        var a = n.type;
        return a === j
          ? c(e, t, n.props.children, r, n.key)
          : null !== t &&
            (t.elementType === a ||
              ("object" == typeof a && null !== a && a.$$typeof === W && io(a) === t.type))
          ? (((r = l(t, n.props)).ref = ao(e, t, n)), (r.return = e), r)
          : (((r = qs(n.type, n.key, n.props, null, e.mode, r)).ref = ao(e, t, n)),
            (r.return = e),
            r);
      }
      function s(e, t, n, r) {
        return null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? (((t = Xs(n, e.mode, r)).return = e), t)
          : (((t = l(t, n.children || [])).return = e), t);
      }
      function c(e, t, n, r, a) {
        return null === t || 7 !== t.tag
          ? (((t = Ks(n, e.mode, r, a)).return = e), t)
          : (((t = l(t, n)).return = e), t);
      }
      function f(e, t, n) {
        if (("string" == typeof t && "" !== t) || "number" == typeof t)
          return ((t = Gs("" + t, e.mode, n)).return = e), t;
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case O:
              return (
                ((n = qs(t.type, t.key, t.props, null, e.mode, n)).ref = ao(e, null, t)),
                (n.return = e),
                n
              );
            case D:
              return ((t = Xs(t, e.mode, n)).return = e), t;
            case W:
              return f(e, (0, t._init)(t._payload), n);
          }
          if (me(t) || K(t)) return ((t = Ks(t, e.mode, n, null)).return = e), t;
          oo(e, t);
        }
        return null;
      }
      function d(e, t, n, r) {
        var l = null !== t ? t.key : null;
        if (("string" == typeof n && "" !== n) || "number" == typeof n)
          return null !== l ? null : i(e, t, "" + n, r);
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case O:
              return n.key === l ? u(e, t, n, r) : null;
            case D:
              return n.key === l ? s(e, t, n, r) : null;
            case W:
              return d(e, t, (l = n._init)(n._payload), r);
          }
          if (me(n) || K(n)) return null !== l ? null : c(e, t, n, r, null);
          oo(e, n);
        }
        return null;
      }
      function p(e, t, n, r, l) {
        if (("string" == typeof r && "" !== r) || "number" == typeof r)
          return i(t, (e = e.get(n) || null), "" + r, l);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case O:
              return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, l);
            case D:
              return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, l);
            case W:
              return p(e, t, n, (0, r._init)(r._payload), l);
          }
          if (me(r) || K(r)) return c(t, (e = e.get(n) || null), r, l, null);
          oo(t, r);
        }
        return null;
      }
      function m(l, o, i, u) {
        for (
          var s = null, c = null, m = o, h = (o = 0), g = null;
          null !== m && h < i.length;
          h++
        ) {
          m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
          var v = d(l, m, i[h], u);
          if (null === v) {
            null === m && (m = g);
            break;
          }
          e && m && null === v.alternate && t(l, m),
            (o = a(v, o, h)),
            null === c ? (s = v) : (c.sibling = v),
            (c = v),
            (m = g);
        }
        if (h === i.length) return n(l, m), va && fa(l, h), s;
        if (null === m) {
          for (; h < i.length; h++)
            null !== (m = f(l, i[h], u)) &&
              ((o = a(m, o, h)), null === c ? (s = m) : (c.sibling = m), (c = m));
          return va && fa(l, h), s;
        }
        for (m = r(l, m); h < i.length; h++)
          null !== (g = p(m, l, h, i[h], u)) &&
            (e && null !== g.alternate && m.delete(null === g.key ? h : g.key),
            (o = a(g, o, h)),
            null === c ? (s = g) : (c.sibling = g),
            (c = g));
        return (
          e &&
            m.forEach(function (e) {
              return t(l, e);
            }),
          va && fa(l, h),
          s
        );
      }
      function h(l, o, i, u) {
        var s = K(i);
        if ("function" != typeof s) throw Error(y(150));
        if (null == (i = s.call(i))) throw Error(y(151));
        for (
          var c = (s = null), m = o, h = (o = 0), g = null, v = i.next();
          null !== m && !v.done;
          h++, v = i.next()
        ) {
          m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
          var b = d(l, m, v.value, u);
          if (null === b) {
            null === m && (m = g);
            break;
          }
          e && m && null === b.alternate && t(l, m),
            (o = a(b, o, h)),
            null === c ? (s = b) : (c.sibling = b),
            (c = b),
            (m = g);
        }
        if (v.done) return n(l, m), va && fa(l, h), s;
        if (null === m) {
          for (; !v.done; h++, v = i.next())
            null !== (v = f(l, v.value, u)) &&
              ((o = a(v, o, h)), null === c ? (s = v) : (c.sibling = v), (c = v));
          return va && fa(l, h), s;
        }
        for (m = r(l, m); !v.done; h++, v = i.next())
          null !== (v = p(m, l, h, v.value, u)) &&
            (e && null !== v.alternate && m.delete(null === v.key ? h : v.key),
            (o = a(v, o, h)),
            null === c ? (s = v) : (c.sibling = v),
            (c = v));
        return (
          e &&
            m.forEach(function (e) {
              return t(l, e);
            }),
          va && fa(l, h),
          s
        );
      }
      return function e(r, a, i, u) {
        if (
          ("object" == typeof i &&
            null !== i &&
            i.type === j &&
            null === i.key &&
            (i = i.props.children),
          "object" == typeof i && null !== i)
        ) {
          switch (i.$$typeof) {
            case O:
              e: {
                for (var s = i.key, c = a; null !== c; ) {
                  if (c.key === s) {
                    if ((s = i.type) === j) {
                      if (7 === c.tag) {
                        n(r, c.sibling), ((a = l(c, i.props.children)).return = r), (r = a);
                        break e;
                      }
                    } else if (
                      c.elementType === s ||
                      ("object" == typeof s && null !== s && s.$$typeof === W && io(s) === c.type)
                    ) {
                      n(r, c.sibling),
                        ((a = l(c, i.props)).ref = ao(r, c, i)),
                        (a.return = r),
                        (r = a);
                      break e;
                    }
                    n(r, c);
                    break;
                  }
                  t(r, c), (c = c.sibling);
                }
                i.type === j
                  ? (((a = Ks(i.props.children, r.mode, u, i.key)).return = r), (r = a))
                  : (((u = qs(i.type, i.key, i.props, null, r.mode, u)).ref = ao(r, a, i)),
                    (u.return = r),
                    (r = u));
              }
              return o(r);
            case D:
              e: {
                for (c = i.key; null !== a; ) {
                  if (a.key === c) {
                    if (
                      4 === a.tag &&
                      a.stateNode.containerInfo === i.containerInfo &&
                      a.stateNode.implementation === i.implementation
                    ) {
                      n(r, a.sibling), ((a = l(a, i.children || [])).return = r), (r = a);
                      break e;
                    }
                    n(r, a);
                    break;
                  }
                  t(r, a), (a = a.sibling);
                }
                ((a = Xs(i, r.mode, u)).return = r), (r = a);
              }
              return o(r);
            case W:
              return e(r, a, (c = i._init)(i._payload), u);
          }
          if (me(i)) return m(r, a, i, u);
          if (K(i)) return h(r, a, i, u);
          oo(r, i);
        }
        return ("string" == typeof i && "" !== i) || "number" == typeof i
          ? ((i = "" + i),
            null !== a && 6 === a.tag
              ? (n(r, a.sibling), ((a = l(a, i)).return = r), (r = a))
              : (n(r, a), ((a = Gs(i, r.mode, u)).return = r), (r = a)),
            o(r))
          : n(r, a);
      };
    }
    var so = uo(!0),
      co = uo(!1),
      fo = {},
      po = Fl(fo),
      mo = Fl(fo),
      ho = Fl(fo);
    function go(e) {
      if (e === fo) throw Error(y(174));
      return e;
    }
    function vo(e, t) {
      switch ((Ul(ho, t), Ul(mo, e), Ul(po, fo), (e = t.nodeType))) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : ke(null, "");
          break;
        default:
          t = ke((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
      }
      Ml(po), Ul(po, t);
    }
    function yo() {
      Ml(po), Ml(mo), Ml(ho);
    }
    function bo(e) {
      go(ho.current);
      var t = go(po.current),
        n = ke(t, e.type);
      t !== n && (Ul(mo, e), Ul(po, n));
    }
    function wo(e) {
      mo.current === e && (Ml(po), Ml(mo));
    }
    var ko = Fl(0);
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
    var Co = I.ReactCurrentDispatcher,
      _o = I.ReactCurrentBatchConfig,
      Po = 0,
      No = null,
      To = null,
      Lo = null,
      zo = !1,
      Ro = !1,
      Io = 0,
      Oo = 0;
    function Do() {
      throw Error(y(321));
    }
    function jo(e, t) {
      if (null === t) return !1;
      for (var n = 0; n < t.length && n < e.length; n++) if (!wr(e[n], t[n])) return !1;
      return !0;
    }
    function Fo(e, t, n, r, l, a) {
      if (
        ((Po = a),
        (No = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Co.current = null === e || null === e.memoizedState ? wi : ki),
        (e = n(r, l)),
        Ro)
      ) {
        a = 0;
        do {
          if (((Ro = !1), (Io = 0), 25 <= a)) throw Error(y(301));
          (a += 1), (Lo = To = null), (t.updateQueue = null), (Co.current = Si), (e = n(r, l));
        } while (Ro);
      }
      if (
        ((Co.current = bi),
        (t = null !== To && null !== To.next),
        (Po = 0),
        (Lo = To = No = null),
        (zo = !1),
        t)
      )
        throw Error(y(300));
      return e;
    }
    function Mo() {
      var e = 0 !== Io;
      return (Io = 0), e;
    }
    function Uo() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return null === Lo ? (No.memoizedState = Lo = e) : (Lo = Lo.next = e), Lo;
    }
    function Ho() {
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
    function Ao(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    function Bo(e) {
      var t = Ho(),
        n = t.queue;
      if (null === n) throw Error(y(311));
      n.lastRenderedReducer = e;
      var r = To,
        l = r.baseQueue,
        a = n.pending;
      if (null !== a) {
        if (null !== l) {
          var o = l.next;
          (l.next = a.next), (a.next = o);
        }
        (r.baseQueue = l = a), (n.pending = null);
      }
      if (null !== l) {
        (a = l.next), (r = r.baseState);
        var i = (o = null),
          u = null,
          s = a;
        do {
          var c = s.lane;
          if ((Po & c) === c)
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
            null === u ? ((i = u = f), (o = r)) : (u = u.next = f), (No.lanes |= c), (Yu |= c);
          }
          s = s.next;
        } while (null !== s && s !== a);
        null === u ? (o = r) : (u.next = i),
          wr(r, t.memoizedState) || (Ii = !0),
          (t.memoizedState = r),
          (t.baseState = o),
          (t.baseQueue = u),
          (n.lastRenderedState = r);
      }
      if (null !== (e = n.interleaved)) {
        l = e;
        do {
          (a = l.lane), (No.lanes |= a), (Yu |= a), (l = l.next);
        } while (l !== e);
      } else null === l && (n.lanes = 0);
      return [t.memoizedState, n.dispatch];
    }
    function $o(e) {
      var t = Ho(),
        n = t.queue;
      if (null === n) throw Error(y(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        l = n.pending,
        a = t.memoizedState;
      if (null !== l) {
        n.pending = null;
        var o = (l = l.next);
        do {
          (a = e(a, o.action)), (o = o.next);
        } while (o !== l);
        wr(a, t.memoizedState) || (Ii = !0),
          (t.memoizedState = a),
          null === t.baseQueue && (t.baseState = a),
          (n.lastRenderedState = a);
      }
      return [a, r];
    }
    function Vo() {}
    function Wo(e, t) {
      var n = No,
        r = Ho(),
        l = t(),
        a = !wr(r.memoizedState, l);
      if (
        (a && ((r.memoizedState = l), (Ii = !0)),
        (r = r.queue),
        ri(Ko.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || a || (null !== Lo && 1 & Lo.memoizedState.tag))
      ) {
        if (((n.flags |= 2048), Zo(9, qo.bind(null, n, r, l, t), void 0, null), null === Bu))
          throw Error(y(349));
        0 != (30 & Po) || Qo(n, t, l);
      }
      return l;
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
      (t.value = n), (t.getSnapshot = r), Yo(t) && Go(e);
    }
    function Ko(e, t, n) {
      return n(function () {
        Yo(t) && Go(e);
      });
    }
    function Yo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !wr(e, n);
      } catch (e) {
        return !0;
      }
    }
    function Go(e) {
      var t = Ba(e, 1);
      null !== t && hs(t, e, 1, -1);
    }
    function Xo(e) {
      var t = Uo();
      return (
        "function" == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ao,
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
      return Ho().memoizedState;
    }
    function ei(e, t, n, r) {
      var l = Uo();
      (No.flags |= e), (l.memoizedState = Zo(1 | t, n, void 0, void 0 === r ? null : r));
    }
    function ti(e, t, n, r) {
      var l = Ho();
      r = void 0 === r ? null : r;
      var a = void 0;
      if (null !== To) {
        var o = To.memoizedState;
        if (((a = o.destroy), null !== r && jo(r, o.deps)))
          return void (l.memoizedState = Zo(t, n, a, r));
      }
      (No.flags |= e), (l.memoizedState = Zo(1 | t, n, a, r));
    }
    function ni(e, t) {
      return ei(8390656, 8, e, t);
    }
    function ri(e, t) {
      return ti(2048, 8, e, t);
    }
    function li(e, t) {
      return ti(4, 2, e, t);
    }
    function ai(e, t) {
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
      var n = Ho();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && jo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function ci(e, t) {
      var n = Ho();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && jo(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function fi(e, t, n) {
      return 0 == (21 & Po)
        ? (e.baseState && ((e.baseState = !1), (Ii = !0)), (e.memoizedState = n))
        : (wr(n, t) || ((n = Nt()), (No.lanes |= n), (Yu |= n), (e.baseState = !0)), t);
    }
    function di(e, t) {
      var n = Rt;
      (Rt = 0 !== n && 4 > n ? n : 4), e(!0);
      var r = _o.transition;
      _o.transition = {};
      try {
        e(!1), t();
      } finally {
        (Rt = n), (_o.transition = r);
      }
    }
    function pi() {
      return Ho().memoizedState;
    }
    function mi(e, t, n) {
      var r = ms(e);
      if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), gi(e)))
        vi(t, n);
      else if (null !== (n = Aa(e, t, n, r))) {
        hs(n, e, r, ps()), yi(n, t, r);
      }
    }
    function hi(e, t, n) {
      var r = ms(e),
        l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
      if (gi(e)) vi(t, l);
      else {
        var a = e.alternate;
        if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
          try {
            var o = t.lastRenderedState,
              i = a(o, n);
            if (((l.hasEagerState = !0), (l.eagerState = i), wr(i, o))) {
              var u = t.interleaved;
              return (
                null === u ? ((l.next = l), Ha(t)) : ((l.next = u.next), (u.next = l)),
                void (t.interleaved = l)
              );
            }
          } catch (e) {}
        null !== (n = Aa(e, t, l, r)) && (hs(n, e, r, (l = ps())), yi(n, t, r));
      }
    }
    function gi(e) {
      var t = e.alternate;
      return e === No || (null !== t && t === No);
    }
    function vi(e, t) {
      Ro = zo = !0;
      var n = e.pending;
      null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
    }
    function yi(e, t, n) {
      if (0 != (4194240 & n)) {
        var r = t.lanes;
        (n |= r &= e.pendingLanes), (t.lanes = n), zt(e, n);
      }
    }
    var bi = {
        readContext: Ma,
        useCallback: Do,
        useContext: Do,
        useEffect: Do,
        useImperativeHandle: Do,
        useInsertionEffect: Do,
        useLayoutEffect: Do,
        useMemo: Do,
        useReducer: Do,
        useRef: Do,
        useState: Do,
        useDebugValue: Do,
        useDeferredValue: Do,
        useTransition: Do,
        useMutableSource: Do,
        useSyncExternalStore: Do,
        useId: Do,
        unstable_isNewReconciler: !1,
      },
      wi = {
        readContext: Ma,
        useCallback: function (e, t) {
          return (Uo().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: Ma,
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
          var n = Uo();
          return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
          var r = Uo();
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
          return (e = { current: e }), (Uo().memoizedState = e);
        },
        useState: Xo,
        useDebugValue: ui,
        useDeferredValue: function (e) {
          return (Uo().memoizedState = e);
        },
        useTransition: function () {
          var e = Xo(!1),
            t = e[0];
          return (e = di.bind(null, e[1])), (Uo().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
          var r = No,
            l = Uo();
          if (va) {
            if (void 0 === n) throw Error(y(407));
            n = n();
          } else {
            if (((n = t()), null === Bu)) throw Error(y(349));
            0 != (30 & Po) || Qo(r, t, n);
          }
          l.memoizedState = n;
          var a = { value: n, getSnapshot: t };
          return (
            (l.queue = a),
            ni(Ko.bind(null, r, a, e), [e]),
            (r.flags |= 2048),
            Zo(9, qo.bind(null, r, a, n, t), void 0, null),
            n
          );
        },
        useId: function () {
          var e = Uo(),
            t = Bu.identifierPrefix;
          if (va) {
            var n = ca;
            (t = ":" + t + "R" + (n = (sa & ~(1 << (32 - bt(sa) - 1))).toString(32) + n)),
              0 < (n = Io++) && (t += "H" + n.toString(32)),
              (t += ":");
          } else t = ":" + t + "r" + (n = Oo++).toString(32) + ":";
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      ki = {
        readContext: Ma,
        useCallback: si,
        useContext: Ma,
        useEffect: ri,
        useImperativeHandle: ii,
        useInsertionEffect: li,
        useLayoutEffect: ai,
        useMemo: ci,
        useReducer: Bo,
        useRef: Jo,
        useState: function () {
          return Bo(Ao);
        },
        useDebugValue: ui,
        useDeferredValue: function (e) {
          return fi(Ho(), To.memoizedState, e);
        },
        useTransition: function () {
          return [Bo(Ao)[0], Ho().memoizedState];
        },
        useMutableSource: Vo,
        useSyncExternalStore: Wo,
        useId: pi,
        unstable_isNewReconciler: !1,
      },
      Si = {
        readContext: Ma,
        useCallback: si,
        useContext: Ma,
        useEffect: ri,
        useImperativeHandle: ii,
        useInsertionEffect: li,
        useLayoutEffect: ai,
        useMemo: ci,
        useReducer: $o,
        useRef: Jo,
        useState: function () {
          return $o(Ao);
        },
        useDebugValue: ui,
        useDeferredValue: function (e) {
          var t = Ho();
          return null === To ? (t.memoizedState = e) : fi(t, To.memoizedState, e);
        },
        useTransition: function () {
          return [$o(Ao)[0], Ho().memoizedState];
        },
        useMutableSource: Vo,
        useSyncExternalStore: Wo,
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
        var l = n;
      } catch (e) {
        l = "\nError generating stack: " + e.message + "\n" + e.stack;
      }
      return { value: e, source: t, stack: l, digest: null };
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
    var _i = "function" == typeof WeakMap ? WeakMap : Map;
    function Pi(e, t, n) {
      ((n = Qa(-1, n)).tag = 3), (n.payload = { element: null });
      var r = t.value;
      return (
        (n.callback = function () {
          rs || ((rs = !0), (ls = r)), Ci(0, t);
        }),
        n
      );
    }
    function Ni(e, t, n) {
      (n = Qa(-1, n)).tag = 3;
      var r = e.type.getDerivedStateFromError;
      if ("function" == typeof r) {
        var l = t.value;
        (n.payload = function () {
          return r(l);
        }),
          (n.callback = function () {
            Ci(0, t);
          });
      }
      var a = e.stateNode;
      return (
        null !== a &&
          "function" == typeof a.componentDidCatch &&
          (n.callback = function () {
            Ci(0, t),
              "function" != typeof r && (null === as ? (as = new Set([this])) : as.add(this));
            var e = t.stack;
            this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" });
          }),
        n
      );
    }
    function Ti(e, t, n) {
      var r = e.pingCache;
      if (null === r) {
        r = e.pingCache = new _i();
        var l = new Set();
        r.set(t, l);
      } else void 0 === (l = r.get(t)) && ((l = new Set()), r.set(t, l));
      l.has(n) || (l.add(n), (e = Ms.bind(null, e, t, n)), t.then(e, e));
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
    function zi(e, t, n, r, l) {
      return 0 == (1 & e.mode)
        ? (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (n.flags |= 131072),
              (n.flags &= -52805),
              1 === n.tag &&
                (null === n.alternate ? (n.tag = 17) : (((t = Qa(-1, 1)).tag = 2), qa(n, t, 1))),
              (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = l), e);
    }
    var Ri = I.ReactCurrentOwner,
      Ii = !1;
    function Oi(e, t, n, r) {
      t.child = null === e ? co(t, null, n, r) : so(t, e.child, n, r);
    }
    function Di(e, t, n, r, l) {
      n = n.render;
      var a = t.ref;
      return (
        Fa(t, l),
        (r = Fo(e, t, n, r, a, l)),
        (n = Mo()),
        null === e || Ii
          ? (va && n && pa(t), (t.flags |= 1), Oi(e, t, r, l), t.child)
          : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), ru(e, t, l))
      );
    }
    function ji(e, t, n, r, l) {
      if (null === e) {
        var a = n.type;
        return "function" != typeof a ||
          Ws(a) ||
          void 0 !== a.defaultProps ||
          null !== n.compare ||
          void 0 !== n.defaultProps
          ? (((e = qs(n.type, null, r, t, t.mode, l)).ref = t.ref), (e.return = t), (t.child = e))
          : ((t.tag = 15), (t.type = a), Fi(e, t, a, r, l));
      }
      if (((a = e.child), 0 == (e.lanes & l))) {
        var o = a.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : kr)(o, r) && e.ref === t.ref) return ru(e, t, l);
      }
      return (t.flags |= 1), ((e = Qs(a, r)).ref = t.ref), (e.return = t), (t.child = e);
    }
    function Fi(e, t, n, r, l) {
      if (null !== e) {
        var a = e.memoizedProps;
        if (kr(a, r) && e.ref === t.ref) {
          if (((Ii = !1), (t.pendingProps = r = a), 0 == (e.lanes & l)))
            return (t.lanes = e.lanes), ru(e, t, l);
          0 != (131072 & e.flags) && (Ii = !0);
        }
      }
      return Hi(e, t, n, r, l);
    }
    function Mi(e, t, n) {
      var r = t.pendingProps,
        l = r.children,
        a = null !== e ? e.memoizedState : null;
      if ("hidden" === r.mode)
        if (0 == (1 & t.mode))
          (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
            Ul(Qu, Wu),
            (Wu |= n);
        else {
          if (0 == (1073741824 & n))
            return (
              (e = null !== a ? a.baseLanes | n : n),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
              (t.updateQueue = null),
              Ul(Qu, Wu),
              (Wu |= e),
              null
            );
          (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
            (r = null !== a ? a.baseLanes : n),
            Ul(Qu, Wu),
            (Wu |= r);
        }
      else
        null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
          Ul(Qu, Wu),
          (Wu |= r);
      return Oi(e, t, l, n), t.child;
    }
    function Ui(e, t) {
      var n = t.ref;
      ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function Hi(e, t, n, r, l) {
      var a = Wl(n) ? $l : Al.current;
      return (
        (a = Vl(t, a)),
        Fa(t, l),
        (n = Fo(e, t, n, r, a, l)),
        (r = Mo()),
        null === e || Ii
          ? (va && r && pa(t), (t.flags |= 1), Oi(e, t, n, l), t.child)
          : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), ru(e, t, l))
      );
    }
    function Ai(e, t, n, r, l) {
      if (Wl(n)) {
        var a = !0;
        Yl(t);
      } else a = !1;
      if ((Fa(t, l), null === t.stateNode)) nu(e, t), no(t, n, r), lo(t, n, r, l), (r = !0);
      else if (null === e) {
        var o = t.stateNode,
          i = t.memoizedProps;
        o.props = i;
        var u = o.context,
          s = n.contextType;
        "object" == typeof s && null !== s
          ? (s = Ma(s))
          : (s = Vl(t, (s = Wl(n) ? $l : Al.current)));
        var c = n.getDerivedStateFromProps,
          f = "function" == typeof c || "function" == typeof o.getSnapshotBeforeUpdate;
        f ||
          ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
            "function" != typeof o.componentWillReceiveProps) ||
          ((i !== r || u !== s) && ro(t, o, r, s)),
          ($a = !1);
        var d = t.memoizedState;
        (o.state = d),
          Ga(t, r, o, l),
          (u = t.memoizedState),
          i !== r || d !== u || Bl.current || $a
            ? ("function" == typeof c && (Ja(t, n, c, r), (u = t.memoizedState)),
              (i = $a || to(t, n, i, r, d, u, s))
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
          Wa(e, t),
          (i = t.memoizedProps),
          (s = t.type === t.elementType ? i : Ta(t.type, i)),
          (o.props = s),
          (f = t.pendingProps),
          (d = o.context),
          "object" == typeof (u = n.contextType) && null !== u
            ? (u = Ma(u))
            : (u = Vl(t, (u = Wl(n) ? $l : Al.current)));
        var p = n.getDerivedStateFromProps;
        (c = "function" == typeof p || "function" == typeof o.getSnapshotBeforeUpdate) ||
          ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
            "function" != typeof o.componentWillReceiveProps) ||
          ((i !== f || d !== u) && ro(t, o, r, u)),
          ($a = !1),
          (d = t.memoizedState),
          (o.state = d),
          Ga(t, r, o, l);
        var m = t.memoizedState;
        i !== f || d !== m || Bl.current || $a
          ? ("function" == typeof p && (Ja(t, n, p, r), (m = t.memoizedState)),
            (s = $a || to(t, n, s, r, d, m, u) || !1)
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
      return Bi(e, t, n, r, a, l);
    }
    function Bi(e, t, n, r, l, a) {
      Ui(e, t);
      var o = 0 != (128 & t.flags);
      if (!r && !o) return l && Gl(t, n, !1), ru(e, t, a);
      (r = t.stateNode), (Ri.current = t);
      var i = o && "function" != typeof n.getDerivedStateFromError ? null : r.render();
      return (
        (t.flags |= 1),
        null !== e && o
          ? ((t.child = so(t, e.child, null, a)), (t.child = so(t, null, i, a)))
          : Oi(e, t, i, a),
        (t.memoizedState = r.state),
        l && Gl(t, n, !0),
        t.child
      );
    }
    function $i(e) {
      var t = e.stateNode;
      t.pendingContext
        ? ql(0, t.pendingContext, t.pendingContext !== t.context)
        : t.context && ql(0, t.context, !1),
        vo(e, t.containerInfo);
    }
    function Vi(e, t, n, r, l) {
      return _a(), Pa(l), (t.flags |= 256), Oi(e, t, n, r), t.child;
    }
    var Wi,
      Qi,
      qi,
      Ki = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Yi(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function Gi(e, t, n) {
      var r,
        l = t.pendingProps,
        a = ko.current,
        o = !1,
        i = 0 != (128 & t.flags);
      if (
        ((r = i) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
        r ? ((o = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (a |= 1),
        Ul(ko, 1 & a),
        null === e)
      )
        return (
          Sa(t),
          null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
            ? (0 == (1 & t.mode)
                ? (t.lanes = 1)
                : "$!" === e.data
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
              null)
            : ((i = l.children),
              (e = l.fallback),
              o
                ? ((l = t.mode),
                  (o = t.child),
                  (i = { mode: "hidden", children: i }),
                  0 == (1 & l) && null !== o
                    ? ((o.childLanes = 0), (o.pendingProps = i))
                    : (o = Ys(i, l, 0, null)),
                  (e = Ks(e, l, n, null)),
                  (o.return = t),
                  (e.return = t),
                  (o.sibling = e),
                  (t.child = o),
                  (t.child.memoizedState = Yi(n)),
                  (t.memoizedState = Ki),
                  e)
                : Xi(t, i))
        );
      if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated))
        return (function (e, t, n, r, l, a, o) {
          if (n)
            return 256 & t.flags
              ? ((t.flags &= -257), Zi(e, t, o, (r = Ei(Error(y(422))))))
              : null !== t.memoizedState
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((a = r.fallback),
                (l = t.mode),
                (r = Ys({ mode: "visible", children: r.children }, l, 0, null)),
                ((a = Ks(a, l, o, null)).flags |= 2),
                (r.return = t),
                (a.return = t),
                (r.sibling = a),
                (t.child = r),
                0 != (1 & t.mode) && so(t, e.child, null, o),
                (t.child.memoizedState = Yi(o)),
                (t.memoizedState = Ki),
                a);
          if (0 == (1 & t.mode)) return Zi(e, t, o, null);
          if ("$!" === l.data) {
            if ((r = l.nextSibling && l.nextSibling.dataset)) var i = r.dgst;
            return (r = i), Zi(e, t, o, (r = Ei((a = Error(y(419))), r, void 0)));
          }
          if (((i = 0 != (o & e.childLanes)), Ii || i)) {
            if (null !== (r = Bu)) {
              switch (o & -o) {
                case 4:
                  l = 2;
                  break;
                case 16:
                  l = 8;
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
                  l = 32;
                  break;
                case 536870912:
                  l = 268435456;
                  break;
                default:
                  l = 0;
              }
              0 !== (l = 0 != (l & (r.suspendedLanes | o)) ? 0 : l) &&
                l !== a.retryLane &&
                ((a.retryLane = l), Ba(e, l), hs(r, e, l, -1));
            }
            return Ns(), Zi(e, t, o, (r = Ei(Error(y(421)))));
          }
          return "$?" === l.data
            ? ((t.flags |= 128),
              (t.child = e.child),
              (t = Hs.bind(null, e)),
              (l._reactRetry = t),
              null)
            : ((e = a.treeContext),
              (ga = Sl(l.nextSibling)),
              (ha = t),
              (va = !0),
              (ya = null),
              null !== e &&
                ((oa[ia++] = sa),
                (oa[ia++] = ca),
                (oa[ia++] = ua),
                (sa = e.id),
                (ca = e.overflow),
                (ua = t)),
              ((t = Xi(t, r.children)).flags |= 4096),
              t);
        })(e, t, i, l, r, a, n);
      if (o) {
        (o = l.fallback), (i = t.mode), (r = (a = e.child).sibling);
        var u = { mode: "hidden", children: l.children };
        return (
          0 == (1 & i) && t.child !== a
            ? (((l = t.child).childLanes = 0), (l.pendingProps = u), (t.deletions = null))
            : ((l = Qs(a, u)).subtreeFlags = 14680064 & a.subtreeFlags),
          null !== r ? (o = Qs(r, o)) : ((o = Ks(o, i, n, null)).flags |= 2),
          (o.return = t),
          (l.return = t),
          (l.sibling = o),
          (t.child = l),
          (l = o),
          (o = t.child),
          (i =
            null === (i = e.child.memoizedState)
              ? Yi(n)
              : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
          (o.memoizedState = i),
          (o.childLanes = e.childLanes & ~n),
          (t.memoizedState = Ki),
          l
        );
      }
      return (
        (e = (o = e.child).sibling),
        (l = Qs(o, { mode: "visible", children: l.children })),
        0 == (1 & t.mode) && (l.lanes = n),
        (l.return = t),
        (l.sibling = null),
        null !== e &&
          (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l
      );
    }
    function Xi(e, t) {
      return (
        ((t = Ys({ mode: "visible", children: t }, e.mode, 0, null)).return = e), (e.child = t)
      );
    }
    function Zi(e, t, n, r) {
      return (
        null !== r && Pa(r),
        so(t, e.child, null, n),
        ((e = Xi(t, t.pendingProps.children)).flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Ji(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      null !== r && (r.lanes |= t), ja(e.return, t, n);
    }
    function eu(e, t, n, r, l) {
      var a = e.memoizedState;
      null === a
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: l,
          })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = r),
          (a.tail = n),
          (a.tailMode = l));
    }
    function tu(e, t, n) {
      var r = t.pendingProps,
        l = r.revealOrder,
        a = r.tail;
      if ((Oi(e, t, r.children, n), 0 != (2 & (r = ko.current))))
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
      if ((Ul(ko, r), 0 == (1 & t.mode))) t.memoizedState = null;
      else
        switch (l) {
          case "forwards":
            for (n = t.child, l = null; null !== n; )
              null !== (e = n.alternate) && null === So(e) && (l = n), (n = n.sibling);
            null === (n = l)
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
              eu(t, !1, l, n, a);
            break;
          case "backwards":
            for (n = null, l = t.child, t.child = null; null !== l; ) {
              if (null !== (e = l.alternate) && null === So(e)) {
                t.child = l;
                break;
              }
              (e = l.sibling), (l.sibling = n), (n = l), (l = e);
            }
            eu(t, !0, n, null, a);
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
        (null !== e && (t.dependencies = e.dependencies), (Yu |= t.lanes), 0 == (n & t.childLanes))
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
    function lu(e, t) {
      if (!va)
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
    function au(e) {
      var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var l = e.child; null !== l; )
          (n |= l.lanes | l.childLanes),
            (r |= 14680064 & l.subtreeFlags),
            (r |= 14680064 & l.flags),
            (l.return = e),
            (l = l.sibling);
      else
        for (l = e.child; null !== l; )
          (n |= l.lanes | l.childLanes),
            (r |= l.subtreeFlags),
            (r |= l.flags),
            (l.return = e),
            (l = l.sibling);
      return (e.subtreeFlags |= r), (e.childLanes = n), t;
    }
    function ou(e, t, n) {
      var r = t.pendingProps;
      switch ((ma(t), t.tag)) {
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
          return au(t), null;
        case 1:
        case 17:
          return Wl(t.type) && Ql(), au(t), null;
        case 3:
          return (
            (r = t.stateNode),
            yo(),
            Ml(Bl),
            Ml(Al),
            Eo(),
            r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
            (null !== e && null !== e.child) ||
              (Ea(t)
                ? (t.flags |= 4)
                : null === e ||
                  (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                  ((t.flags |= 1024), null !== ya && (bs(ya), (ya = null)))),
            au(t),
            null
          );
        case 5:
          wo(t);
          var l = go(ho.current);
          if (((n = t.type), null !== e && null != t.stateNode))
            Qi(e, t, n, r), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
          else {
            if (!r) {
              if (null === t.stateNode) throw Error(y(166));
              return au(t), null;
            }
            if (((e = go(po.current)), Ea(t))) {
              (r = t.stateNode), (n = t.type);
              var a = t.memoizedProps;
              switch (((r[Cl] = t), (r[_l] = a), (e = 0 != (1 & t.mode)), n)) {
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
                  for (l = 0; l < Kr.length; l++) Zr(Kr[l], r);
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
                  se(r, a), Zr("invalid", r);
                  break;
                case "select":
                  (r._wrapperState = { wasMultiple: !!a.multiple }), Zr("invalid", r);
                  break;
                case "textarea":
                  ve(r, a), Zr("invalid", r);
              }
              for (var o in (ze(n, a), (l = null), a))
                if (a.hasOwnProperty(o)) {
                  var i = a[o];
                  "children" === o
                    ? "string" == typeof i
                      ? r.textContent !== i &&
                        (!0 !== a.suppressHydrationWarning && fl(r.textContent, i, e),
                        (l = ["children", i]))
                      : "number" == typeof i &&
                        r.textContent !== "" + i &&
                        (!0 !== a.suppressHydrationWarning && fl(r.textContent, i, e),
                        (l = ["children", "" + i]))
                    : w.hasOwnProperty(o) && null != i && "onScroll" === o && Zr("scroll", r);
                }
              switch (n) {
                case "input":
                  ae(r), de(r, a, !0);
                  break;
                case "textarea":
                  ae(r), be(r);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" == typeof a.onClick && (r.onclick = dl);
              }
              (r = l), (t.updateQueue = r), null !== r && (t.flags |= 4);
            } else {
              (o = 9 === l.nodeType ? l : l.ownerDocument),
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
                (e[Cl] = t),
                (e[_l] = r),
                Wi(e, t),
                (t.stateNode = e);
              e: {
                switch (((o = Re(n, r)), n)) {
                  case "dialog":
                    Zr("cancel", e), Zr("close", e), (l = r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Zr("load", e), (l = r);
                    break;
                  case "video":
                  case "audio":
                    for (l = 0; l < Kr.length; l++) Zr(Kr[l], e);
                    l = r;
                    break;
                  case "source":
                    Zr("error", e), (l = r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Zr("error", e), Zr("load", e), (l = r);
                    break;
                  case "details":
                    Zr("toggle", e), (l = r);
                    break;
                  case "input":
                    se(e, r), (l = ue(e, r)), Zr("invalid", e);
                    break;
                  case "option":
                  default:
                    l = r;
                    break;
                  case "select":
                    (e._wrapperState = { wasMultiple: !!r.multiple }),
                      (l = G({}, r, { value: void 0 })),
                      Zr("invalid", e);
                    break;
                  case "textarea":
                    ve(e, r), (l = ge(e, r)), Zr("invalid", e);
                }
                for (a in (ze(n, l), (i = l)))
                  if (i.hasOwnProperty(a)) {
                    var u = i[a];
                    "style" === a
                      ? Te(e, u)
                      : "dangerouslySetInnerHTML" === a
                      ? null != (u = u ? u.__html : void 0) && Ee(e, u)
                      : "children" === a
                      ? "string" == typeof u
                        ? ("textarea" !== n || "" !== u) && Ce(e, u)
                        : "number" == typeof u && Ce(e, "" + u)
                      : "suppressContentEditableWarning" !== a &&
                        "suppressHydrationWarning" !== a &&
                        "autoFocus" !== a &&
                        (w.hasOwnProperty(a)
                          ? null != u && "onScroll" === a && Zr("scroll", e)
                          : null != u && R(e, a, u, o));
                  }
                switch (n) {
                  case "input":
                    ae(e), de(e, r, !1);
                    break;
                  case "textarea":
                    ae(e), be(e);
                    break;
                  case "option":
                    null != r.value && e.setAttribute("value", "" + re(r.value));
                    break;
                  case "select":
                    (e.multiple = !!r.multiple),
                      null != (a = r.value)
                        ? he(e, !!r.multiple, a, !1)
                        : null != r.defaultValue && he(e, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    "function" == typeof l.onClick && (e.onclick = dl);
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
          return au(t), null;
        case 6:
          if (e && null != t.stateNode) qi(0, t, e.memoizedProps, r);
          else {
            if ("string" != typeof r && null === t.stateNode) throw Error(y(166));
            if (((n = go(ho.current)), go(po.current), Ea(t))) {
              if (
                ((r = t.stateNode),
                (n = t.memoizedProps),
                (r[Cl] = t),
                (a = r.nodeValue !== n) && null !== (e = ha))
              )
                switch (e.tag) {
                  case 3:
                    fl(r.nodeValue, n, 0 != (1 & e.mode));
                    break;
                  case 5:
                    !0 !== e.memoizedProps.suppressHydrationWarning &&
                      fl(r.nodeValue, n, 0 != (1 & e.mode));
                }
              a && (t.flags |= 4);
            } else
              ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Cl] = t),
                (t.stateNode = r);
          }
          return au(t), null;
        case 13:
          if (
            (Ml(ko),
            (r = t.memoizedState),
            null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
          ) {
            if (va && null !== ga && 0 != (1 & t.mode) && 0 == (128 & t.flags))
              Ca(), _a(), (t.flags |= 98560), (a = !1);
            else if (((a = Ea(t)), null !== r && null !== r.dehydrated)) {
              if (null === e) {
                if (!a) throw Error(y(318));
                if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null))
                  throw Error(y(317));
                a[Cl] = t;
              } else _a(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
              au(t), (a = !1);
            } else null !== ya && (bs(ya), (ya = null)), (a = !0);
            if (!a) return 65536 & t.flags ? t : null;
          }
          return 0 != (128 & t.flags)
            ? ((t.lanes = n), t)
            : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                r &&
                ((t.child.flags |= 8192),
                0 != (1 & t.mode) &&
                  (null === e || 0 != (1 & ko.current) ? 0 === qu && (qu = 3) : Ns())),
              null !== t.updateQueue && (t.flags |= 4),
              au(t),
              null);
        case 4:
          return yo(), null === e && tl(t.stateNode.containerInfo), au(t), null;
        case 10:
          return Da(t.type._context), au(t), null;
        case 19:
          if ((Ml(ko), null === (a = t.memoizedState))) return au(t), null;
          if (((r = 0 != (128 & t.flags)), null === (o = a.rendering)))
            if (r) lu(a, !1);
            else {
              if (0 !== qu || (null !== e && 0 != (128 & e.flags)))
                for (e = t.child; null !== e; ) {
                  if (null !== (o = So(e))) {
                    for (
                      t.flags |= 128,
                        lu(a, !1),
                        null !== (r = o.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                        t.subtreeFlags = 0,
                        r = n,
                        n = t.child;
                      null !== n;

                    )
                      (e = r),
                        ((a = n).flags &= 14680066),
                        null === (o = a.alternate)
                          ? ((a.childLanes = 0),
                            (a.lanes = e),
                            (a.child = null),
                            (a.subtreeFlags = 0),
                            (a.memoizedProps = null),
                            (a.memoizedState = null),
                            (a.updateQueue = null),
                            (a.dependencies = null),
                            (a.stateNode = null))
                          : ((a.childLanes = o.childLanes),
                            (a.lanes = o.lanes),
                            (a.child = o.child),
                            (a.subtreeFlags = 0),
                            (a.deletions = null),
                            (a.memoizedProps = o.memoizedProps),
                            (a.memoizedState = o.memoizedState),
                            (a.updateQueue = o.updateQueue),
                            (a.type = o.type),
                            (e = o.dependencies),
                            (a.dependencies =
                              null === e
                                ? null
                                : { lanes: e.lanes, firstContext: e.firstContext })),
                        (n = n.sibling);
                    return Ul(ko, (1 & ko.current) | 2), t.child;
                  }
                  e = e.sibling;
                }
              null !== a.tail &&
                ct() > ts &&
                ((t.flags |= 128), (r = !0), lu(a, !1), (t.lanes = 4194304));
            }
          else {
            if (!r)
              if (null !== (e = So(o))) {
                if (
                  ((t.flags |= 128),
                  (r = !0),
                  null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                  lu(a, !0),
                  null === a.tail && "hidden" === a.tailMode && !o.alternate && !va)
                )
                  return au(t), null;
              } else
                2 * ct() - a.renderingStartTime > ts &&
                  1073741824 !== n &&
                  ((t.flags |= 128), (r = !0), lu(a, !1), (t.lanes = 4194304));
            a.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : (null !== (n = a.last) ? (n.sibling = o) : (t.child = o), (a.last = o));
          }
          return null !== a.tail
            ? ((t = a.tail),
              (a.rendering = t),
              (a.tail = t.sibling),
              (a.renderingStartTime = ct()),
              (t.sibling = null),
              (n = ko.current),
              Ul(ko, r ? (1 & n) | 2 : 1 & n),
              t)
            : (au(t), null);
        case 22:
        case 23:
          return (
            Es(),
            (r = null !== t.memoizedState),
            null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
            r && 0 != (1 & t.mode)
              ? 0 != (1073741824 & Wu) && (au(t), 6 & t.subtreeFlags && (t.flags |= 8192))
              : au(t),
            null
          );
        case 24:
        case 25:
          return null;
      }
      throw Error(y(156, t.tag));
    }
    function iu(e, t) {
      switch ((ma(t), t.tag)) {
        case 1:
          return (
            Wl(t.type) && Ql(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
          );
        case 3:
          return (
            yo(),
            Ml(Bl),
            Ml(Al),
            Eo(),
            0 != (65536 & (e = t.flags)) && 0 == (128 & e)
              ? ((t.flags = (-65537 & e) | 128), t)
              : null
          );
        case 5:
          return wo(t), null;
        case 13:
          if ((Ml(ko), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
            if (null === t.alternate) throw Error(y(340));
            _a();
          }
          return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
          return Ml(ko), null;
        case 4:
          return yo(), null;
        case 10:
          return Da(t.type._context), null;
        case 22:
        case 23:
          return Es(), null;
        default:
          return null;
      }
    }
    (Wi = function (e, t) {
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
        var l = e.memoizedProps;
        if (l !== r) {
          (e = t.stateNode), go(po.current);
          var a,
            o = null;
          switch (n) {
            case "input":
              (l = ue(e, l)), (r = ue(e, r)), (o = []);
              break;
            case "select":
              (l = G({}, l, { value: void 0 })), (r = G({}, r, { value: void 0 })), (o = []);
              break;
            case "textarea":
              (l = ge(e, l)), (r = ge(e, r)), (o = []);
              break;
            default:
              "function" != typeof l.onClick && "function" == typeof r.onClick && (e.onclick = dl);
          }
          for (s in (ze(n, r), (n = null), l))
            if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && null != l[s])
              if ("style" === s) {
                var i = l[s];
                for (a in i) i.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
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
              ((i = null != l ? l[s] : void 0),
              r.hasOwnProperty(s) && u !== i && (null != u || null != i))
            )
              if ("style" === s)
                if (i) {
                  for (a in i)
                    !i.hasOwnProperty(a) ||
                      (u && u.hasOwnProperty(a)) ||
                      (n || (n = {}), (n[a] = ""));
                  for (a in u)
                    u.hasOwnProperty(a) && i[a] !== u[a] && (n || (n = {}), (n[a] = u[a]));
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
        var l = (r = r.next);
        do {
          if ((l.tag & e) === e) {
            var a = l.destroy;
            (l.destroy = void 0), void 0 !== a && pu(t, n, a);
          }
          l = l.next;
        } while (l !== r);
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
          (delete t[Cl], delete t[_l], delete t[Nl], delete t[Tl], delete t[Ll]),
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
              null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = dl));
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
      for (n = n.child; null !== n; ) _u(e, t, n), (n = n.sibling);
    }
    function _u(e, t, n) {
      if (yt && "function" == typeof yt.onCommitFiberUnmount)
        try {
          yt.onCommitFiberUnmount(vt, n);
        } catch (e) {}
      switch (n.tag) {
        case 5:
          su || du(n, t);
        case 6:
          var r = xu,
            l = Eu;
          (xu = null),
            Cu(e, t, n),
            (Eu = l),
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
                8 === e.nodeType ? kl(e.parentNode, n) : 1 === e.nodeType && kl(e, n),
                tn(e))
              : kl(xu, n.stateNode));
          break;
        case 4:
          (r = xu),
            (l = Eu),
            (xu = n.stateNode.containerInfo),
            (Eu = !0),
            Cu(e, t, n),
            (xu = r),
            (Eu = l);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!su && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
            l = r = r.next;
            do {
              var a = l,
                o = a.destroy;
              (a = a.tag),
                void 0 !== o && (0 != (2 & a) || 0 != (4 & a)) && pu(n, t, o),
                (l = l.next);
            } while (l !== r);
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
    function Pu(e) {
      var t = e.updateQueue;
      if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new cu()),
          t.forEach(function (t) {
            var r = As.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
      }
    }
    function Nu(e, t) {
      var n = t.deletions;
      if (null !== n)
        for (var r = 0; r < n.length; r++) {
          var l = n[r];
          try {
            var a = e,
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
            _u(a, o, l), (xu = null), (Eu = !1);
            var u = l.alternate;
            null !== u && (u.return = null), (l.return = null);
          } catch (e) {
            Fs(l, t, e);
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
            var l = e.stateNode;
            try {
              Ce(l, "");
            } catch (t) {
              Fs(e, e.return, t);
            }
          }
          if (4 & r && null != (l = e.stateNode)) {
            var a = e.memoizedProps,
              o = null !== n ? n.memoizedProps : a,
              i = e.type,
              u = e.updateQueue;
            if (((e.updateQueue = null), null !== u))
              try {
                "input" === i && "radio" === a.type && null != a.name && ce(l, a), Re(i, o);
                var s = Re(i, a);
                for (o = 0; o < u.length; o += 2) {
                  var c = u[o],
                    f = u[o + 1];
                  "style" === c
                    ? Te(l, f)
                    : "dangerouslySetInnerHTML" === c
                    ? Ee(l, f)
                    : "children" === c
                    ? Ce(l, f)
                    : R(l, c, f, s);
                }
                switch (i) {
                  case "input":
                    fe(l, a);
                    break;
                  case "textarea":
                    ye(l, a);
                    break;
                  case "select":
                    var d = l._wrapperState.wasMultiple;
                    l._wrapperState.wasMultiple = !!a.multiple;
                    var p = a.value;
                    null != p
                      ? he(l, !!a.multiple, p, !1)
                      : d !== !!a.multiple &&
                        (null != a.defaultValue
                          ? he(l, !!a.multiple, a.defaultValue, !0)
                          : he(l, !!a.multiple, a.multiple ? [] : "", !1));
                }
                l[_l] = a;
              } catch (t) {
                Fs(e, e.return, t);
              }
          }
          break;
        case 6:
          if ((Nu(t, e), Lu(e), 4 & r)) {
            if (null === e.stateNode) throw Error(y(162));
            (l = e.stateNode), (a = e.memoizedProps);
            try {
              l.nodeValue = a;
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
            8192 & (l = e.child).flags &&
              ((a = null !== l.memoizedState),
              (l.stateNode.isHidden = a),
              !a || (null !== l.alternate && null !== l.alternate.memoizedState) || (es = ct())),
            4 & r && Pu(e);
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
                        Ou(f);
                        continue;
                      }
                  }
                  null !== p ? ((p.return = d), (fu = p)) : Ou(f);
                }
                c = c.sibling;
              }
            e: for (c = null, f = e; ; ) {
              if (5 === f.tag) {
                if (null === c) {
                  c = f;
                  try {
                    (l = f.stateNode),
                      s
                        ? "function" == typeof (a = l.style).setProperty
                          ? a.setProperty("display", "none", "important")
                          : (a.display = "none")
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
          Nu(t, e), Lu(e), 4 & r && Pu(e);
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
              var l = r.stateNode;
              32 & r.flags && (Ce(l, ""), (r.flags &= -33)), Su(e, wu(e), l);
              break;
            case 3:
            case 4:
              var a = r.stateNode.containerInfo;
              ku(e, wu(e), a);
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
    function zu(e, t, n) {
      (fu = e), Ru(e, t, n);
    }
    function Ru(e, t, n) {
      for (var r = 0 != (1 & e.mode); null !== fu; ) {
        var l = fu,
          a = l.child;
        if (22 === l.tag && r) {
          var o = null !== l.memoizedState || uu;
          if (!o) {
            var i = l.alternate,
              u = (null !== i && null !== i.memoizedState) || su;
            i = uu;
            var s = su;
            if (((uu = o), (su = u) && !s))
              for (fu = l; null !== fu; )
                (u = (o = fu).child),
                  22 === o.tag && null !== o.memoizedState
                    ? Du(l)
                    : null !== u
                    ? ((u.return = o), (fu = u))
                    : Du(l);
            for (; null !== a; ) (fu = a), Ru(a, t, n), (a = a.sibling);
            (fu = l), (uu = i), (su = s);
          }
          Iu(e);
        } else 0 != (8772 & l.subtreeFlags) && null !== a ? ((a.return = l), (fu = a)) : Iu(e);
      }
    }
    function Iu(e) {
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
                      var l =
                        t.elementType === t.type ? n.memoizedProps : Ta(t.type, n.memoizedProps);
                      r.componentDidUpdate(
                        l,
                        n.memoizedState,
                        r.__reactInternalSnapshotBeforeUpdate
                      );
                    }
                  var a = t.updateQueue;
                  null !== a && Xa(t, a, r);
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
                    Xa(t, o, n);
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
    function Ou(e) {
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
    function Du(e) {
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
                var l = t.return;
                try {
                  r.componentDidMount();
                } catch (e) {
                  Fs(t, l, e);
                }
              }
              var a = t.return;
              try {
                vu(t);
              } catch (e) {
                Fs(t, a, e);
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
    var ju,
      Fu = Math.ceil,
      Mu = I.ReactCurrentDispatcher,
      Uu = I.ReactCurrentOwner,
      Hu = I.ReactCurrentBatchConfig,
      Au = 0,
      Bu = null,
      $u = null,
      Vu = 0,
      Wu = 0,
      Qu = Fl(0),
      qu = 0,
      Ku = null,
      Yu = 0,
      Gu = 0,
      Xu = 0,
      Zu = null,
      Ju = null,
      es = 0,
      ts = 1 / 0,
      ns = null,
      rs = !1,
      ls = null,
      as = null,
      os = !1,
      is = null,
      us = 0,
      ss = 0,
      cs = null,
      fs = -1,
      ds = 0;
    function ps() {
      return 0 != (6 & Au) ? ct() : -1 !== fs ? fs : (fs = ct());
    }
    function ms(e) {
      return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & Au) && 0 !== Vu
        ? Vu & -Vu
        : null !== Na.transition
        ? (0 === ds && (ds = Nt()), ds)
        : 0 !== (e = Rt)
        ? e
        : (e = void 0 === (e = window.event) ? 16 : cn(e.type));
    }
    function hs(e, t, n, r) {
      if (50 < ss) throw ((ss = 0), (cs = null), Error(y(185)));
      Lt(e, n, r),
        (0 != (2 & Au) && e === Bu) ||
          (e === Bu && (0 == (2 & Au) && (Gu |= n), 4 === qu && ws(e, Vu)),
          gs(e, r),
          1 === n && 0 === Au && 0 == (1 & t.mode) && ((ts = ct() + 500), Zl && ta()));
    }
    function gs(e, t) {
      var n = e.callbackNode;
      !(function (e, t) {
        for (
          var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes;
          0 < a;

        ) {
          var o = 31 - bt(a),
            i = 1 << o,
            u = l[o];
          -1 === u
            ? (0 != (i & n) && 0 == (i & r)) || (l[o] = _t(i, t))
            : u <= t && (e.expiredLanes |= i),
            (a &= ~i);
        }
      })(e, t);
      var r = Ct(e, e === Bu ? Vu : 0);
      if (0 === r) null !== n && it(n), (e.callbackNode = null), (e.callbackPriority = 0);
      else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && it(n), 1 === t))
          0 === e.tag
            ? (function (e) {
                (Zl = !0), ea(e);
              })(ks.bind(null, e))
            : ea(ks.bind(null, e)),
            bl(function () {
              0 == (6 & Au) && ta();
            }),
            (n = null);
        else {
          switch (It(r)) {
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
      if (((fs = -1), (ds = 0), 0 != (6 & Au))) throw Error(y(327));
      var n = e.callbackNode;
      if (Ds() && e.callbackNode !== n) return null;
      var r = Ct(e, e === Bu ? Vu : 0);
      if (0 === r) return null;
      if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Ts(e, r);
      else {
        t = r;
        var l = Au;
        Au |= 2;
        var a = Ps();
        for ((Bu === e && Vu === t) || ((ns = null), (ts = ct() + 500), Cs(e, t)); ; )
          try {
            zs();
            break;
          } catch (t) {
            _s(e, t);
          }
        Oa(), (Mu.current = a), (Au = l), null !== $u ? (t = 0) : ((Bu = null), (Vu = 0), (t = qu));
      }
      if (0 !== t) {
        if ((2 === t && 0 !== (l = Pt(e)) && ((r = l), (t = ys(e, l))), 1 === t))
          throw ((n = Ku), Cs(e, 0), ws(e, r), gs(e, ct()), n);
        if (6 === t) ws(e, r);
        else {
          if (
            ((l = e.current.alternate),
            0 == (30 & r) &&
              !(function (e) {
                for (var t = e; ; ) {
                  if (16384 & t.flags) {
                    var n = t.updateQueue;
                    if (null !== n && null !== (n = n.stores))
                      for (var r = 0; r < n.length; r++) {
                        var l = n[r],
                          a = l.getSnapshot;
                        l = l.value;
                        try {
                          if (!wr(a(), l)) return !1;
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
              })(l) &&
              (2 === (t = Ts(e, r)) && 0 !== (a = Pt(e)) && ((r = a), (t = ys(e, a))), 1 === t))
          )
            throw ((n = Ku), Cs(e, 0), ws(e, r), gs(e, ct()), n);
          switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
            case 0:
            case 1:
              throw Error(y(345));
            case 2:
            case 5:
              Os(e, Ju, ns);
              break;
            case 3:
              if ((ws(e, r), (130023424 & r) === r && 10 < (t = es + 500 - ct()))) {
                if (0 !== Ct(e, 0)) break;
                if (((l = e.suspendedLanes) & r) !== r) {
                  ps(), (e.pingedLanes |= e.suspendedLanes & l);
                  break;
                }
                e.timeoutHandle = gl(Os.bind(null, e, Ju, ns), t);
                break;
              }
              Os(e, Ju, ns);
              break;
            case 4:
              if ((ws(e, r), (4194240 & r) === r)) break;
              for (t = e.eventTimes, l = -1; 0 < r; ) {
                var o = 31 - bt(r);
                (a = 1 << o), (o = t[o]) > l && (l = o), (r &= ~a);
              }
              if (
                ((r = l),
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
                e.timeoutHandle = gl(Os.bind(null, e, Ju, ns), r);
                break;
              }
              Os(e, Ju, ns);
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
        t &= ~Xu, t &= ~Gu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
        0 < t;

      ) {
        var n = 31 - bt(t),
          r = 1 << n;
        (e[n] = -1), (t &= ~r);
      }
    }
    function ks(e) {
      if (0 != (6 & Au)) throw Error(y(327));
      Ds();
      var t = Ct(e, 0);
      if (0 == (1 & t)) return gs(e, ct()), null;
      var n = Ts(e, t);
      if (0 !== e.tag && 2 === n) {
        var r = Pt(e);
        0 !== r && ((t = r), (n = ys(e, r)));
      }
      if (1 === n) throw ((n = Ku), Cs(e, 0), ws(e, t), gs(e, ct()), n);
      if (6 === n) throw Error(y(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Os(e, Ju, ns),
        gs(e, ct()),
        null
      );
    }
    function Ss(e, t) {
      var n = Au;
      Au |= 1;
      try {
        return e(t);
      } finally {
        0 === (Au = n) && ((ts = ct() + 500), Zl && ta());
      }
    }
    function xs(e) {
      null !== is && 0 === is.tag && 0 == (6 & Au) && Ds();
      var t = Au;
      Au |= 1;
      var n = Hu.transition,
        r = Rt;
      try {
        if (((Hu.transition = null), (Rt = 1), e)) return e();
      } finally {
        (Rt = r), (Hu.transition = n), 0 == (6 & (Au = t)) && ta();
      }
    }
    function Es() {
      (Wu = Qu.current), Ml(Qu);
    }
    function Cs(e, t) {
      (e.finishedWork = null), (e.finishedLanes = 0);
      var n = e.timeoutHandle;
      if ((-1 !== n && ((e.timeoutHandle = -1), vl(n)), null !== $u))
        for (n = $u.return; null !== n; ) {
          var r = n;
          switch ((ma(r), r.tag)) {
            case 1:
              null != (r = r.type.childContextTypes) && Ql();
              break;
            case 3:
              yo(), Ml(Bl), Ml(Al), Eo();
              break;
            case 5:
              wo(r);
              break;
            case 4:
              yo();
              break;
            case 13:
            case 19:
              Ml(ko);
              break;
            case 10:
              Da(r.type._context);
              break;
            case 22:
            case 23:
              Es();
          }
          n = n.return;
        }
      if (
        ((Bu = e),
        ($u = e = Qs(e.current, null)),
        (Vu = Wu = t),
        (qu = 0),
        (Ku = null),
        (Xu = Gu = Yu = 0),
        (Ju = Zu = null),
        null !== Ua)
      ) {
        for (t = 0; t < Ua.length; t++)
          if (null !== (r = (n = Ua[t]).interleaved)) {
            n.interleaved = null;
            var l = r.next,
              a = n.pending;
            if (null !== a) {
              var o = a.next;
              (a.next = l), (r.next = o);
            }
            n.pending = r;
          }
        Ua = null;
      }
      return e;
    }
    function _s(e, t) {
      for (;;) {
        var n = $u;
        try {
          if ((Oa(), (Co.current = bi), zo)) {
            for (var r = No.memoizedState; null !== r; ) {
              var l = r.queue;
              null !== l && (l.pending = null), (r = r.next);
            }
            zo = !1;
          }
          if (
            ((Po = 0),
            (Lo = To = No = null),
            (Ro = !1),
            (Io = 0),
            (Uu.current = null),
            null === n || null === n.return)
          ) {
            (qu = 1), (Ku = t), ($u = null);
            break;
          }
          e: {
            var a = e,
              o = n.return,
              i = n,
              u = t;
            if (
              ((t = Vu),
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
                (p.flags &= -257), zi(p, o, i, 0, t), 1 & p.mode && Ti(a, s, t), (u = s);
                var m = (t = p).updateQueue;
                if (null === m) {
                  var h = new Set();
                  h.add(u), (t.updateQueue = h);
                } else m.add(u);
                break e;
              }
              if (0 == (1 & t)) {
                Ti(a, s, t), Ns();
                break e;
              }
              u = Error(y(426));
            } else if (va && 1 & i.mode) {
              var g = Li(o);
              if (null !== g) {
                0 == (65536 & g.flags) && (g.flags |= 256), zi(g, o, i, 0, t), Pa(xi(u, i));
                break e;
              }
            }
            (a = u = xi(u, i)),
              4 !== qu && (qu = 2),
              null === Zu ? (Zu = [a]) : Zu.push(a),
              (a = o);
            do {
              switch (a.tag) {
                case 3:
                  (a.flags |= 65536), (t &= -t), (a.lanes |= t), Ya(a, Pi(0, u, t));
                  break e;
                case 1:
                  i = u;
                  var v = a.type,
                    b = a.stateNode;
                  if (
                    0 == (128 & a.flags) &&
                    ("function" == typeof v.getDerivedStateFromError ||
                      (null !== b &&
                        "function" == typeof b.componentDidCatch &&
                        (null === as || !as.has(b))))
                  ) {
                    (a.flags |= 65536), (t &= -t), (a.lanes |= t), Ya(a, Ni(a, i, t));
                    break e;
                  }
              }
              a = a.return;
            } while (null !== a);
          }
          Is(n);
        } catch (e) {
          (t = e), $u === n && null !== n && ($u = n = n.return);
          continue;
        }
        break;
      }
    }
    function Ps() {
      var e = Mu.current;
      return (Mu.current = bi), null === e ? bi : e;
    }
    function Ns() {
      (0 !== qu && 3 !== qu && 2 !== qu) || (qu = 4),
        null === Bu || (0 == (268435455 & Yu) && 0 == (268435455 & Gu)) || ws(Bu, Vu);
    }
    function Ts(e, t) {
      var n = Au;
      Au |= 2;
      var r = Ps();
      for ((Bu === e && Vu === t) || ((ns = null), Cs(e, t)); ; )
        try {
          Ls();
          break;
        } catch (t) {
          _s(e, t);
        }
      if ((Oa(), (Au = n), (Mu.current = r), null !== $u)) throw Error(y(261));
      return (Bu = null), (Vu = 0), qu;
    }
    function Ls() {
      for (; null !== $u; ) Rs($u);
    }
    function zs() {
      for (; null !== $u && !ut(); ) Rs($u);
    }
    function Rs(e) {
      var t = ju(e.alternate, e, Wu);
      (e.memoizedProps = e.pendingProps), null === t ? Is(e) : ($u = t), (Uu.current = null);
    }
    function Is(e) {
      var t = e;
      do {
        var n = t.alternate;
        if (((e = t.return), 0 == (32768 & t.flags))) {
          if (null !== (n = ou(n, t, Wu))) return void ($u = n);
        } else {
          if (null !== (n = iu(n, t))) return (n.flags &= 32767), void ($u = n);
          if (null === e) return (qu = 6), void ($u = null);
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        }
        if (null !== (t = t.sibling)) return void ($u = t);
        $u = t = e;
      } while (null !== t);
      0 === qu && (qu = 5);
    }
    function Os(e, t, n) {
      var r = Rt,
        l = Hu.transition;
      try {
        (Hu.transition = null),
          (Rt = 1),
          (function (e, t, n, r) {
            do {
              Ds();
            } while (null !== is);
            if (0 != (6 & Au)) throw Error(y(327));
            n = e.finishedWork;
            var l = e.finishedLanes;
            if (null === n) return null;
            if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
              throw Error(y(177));
            (e.callbackNode = null), (e.callbackPriority = 0);
            var a = n.lanes | n.childLanes;
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
                  var l = 31 - bt(n),
                    a = 1 << l;
                  (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~a);
                }
              })(e, a),
              e === Bu && (($u = Bu = null), (Vu = 0)),
              (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                os ||
                ((os = !0),
                Bs(mt, function () {
                  return Ds(), null;
                })),
              (a = 0 != (15990 & n.flags)),
              0 != (15990 & n.subtreeFlags) || a)
            ) {
              (a = Hu.transition), (Hu.transition = null);
              var o = Rt;
              Rt = 1;
              var i = Au;
              (Au |= 4),
                (Uu.current = null),
                (function (e, t) {
                  if (((pl = rn), _r((e = Cr())))) {
                    if ("selectionStart" in e)
                      var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                      e: {
                        var r =
                          (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection &&
                          n.getSelection();
                        if (r && 0 !== r.rangeCount) {
                          n = r.anchorNode;
                          var l = r.anchorOffset,
                            a = r.focusNode;
                          r = r.focusOffset;
                          try {
                            n.nodeType, a.nodeType;
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
                              f !== n || (0 !== l && 3 !== f.nodeType) || (i = o + l),
                                f !== a || (0 !== r && 3 !== f.nodeType) || (u = o + r),
                                3 === f.nodeType && (o += f.nodeValue.length),
                                null !== (p = f.firstChild);

                            )
                              (d = f), (f = p);
                            for (;;) {
                              if (f === e) break t;
                              if (
                                (d === n && ++s === l && (i = o),
                                d === a && ++c === r && (u = o),
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
                  for (ml = { focusedElem: e, selectionRange: n }, rn = !1, fu = t; null !== fu; )
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
                                      t.elementType === t.type ? h : Ta(t.type, h),
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
                Pr(ml),
                (rn = !!pl),
                (ml = pl = null),
                (e.current = n),
                zu(n, e, l),
                st(),
                (Au = i),
                (Rt = o),
                (Hu.transition = a);
            } else e.current = n;
            if (
              (os && ((os = !1), (is = e), (us = l)),
              0 === (a = e.pendingLanes) && (as = null),
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
                (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
            if (rs) throw ((rs = !1), (e = ls), (ls = null), e);
            0 != (1 & us) && 0 !== e.tag && Ds(),
              0 != (1 & (a = e.pendingLanes)) ? (e === cs ? ss++ : ((ss = 0), (cs = e))) : (ss = 0),
              ta();
          })(e, t, n, r);
      } finally {
        (Hu.transition = l), (Rt = r);
      }
      return null;
    }
    function Ds() {
      if (null !== is) {
        var e = It(us),
          t = Hu.transition,
          n = Rt;
        try {
          if (((Hu.transition = null), (Rt = 16 > e ? 16 : e), null === is)) var r = !1;
          else {
            if (((e = is), (is = null), (us = 0), 0 != (6 & Au))) throw Error(y(331));
            var l = Au;
            for (Au |= 4, fu = e.current; null !== fu; ) {
              var a = fu,
                o = a.child;
              if (0 != (16 & fu.flags)) {
                var i = a.deletions;
                if (null !== i) {
                  for (var u = 0; u < i.length; u++) {
                    var s = i[u];
                    for (fu = s; null !== fu; ) {
                      var c = fu;
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          hu(8, c, a);
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
                  var m = a.alternate;
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
                  fu = a;
                }
              }
              if (0 != (2064 & a.subtreeFlags) && null !== o) (o.return = a), (fu = o);
              else
                e: for (; null !== fu; ) {
                  if (0 != (2048 & (a = fu).flags))
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hu(9, a, a.return);
                    }
                  var v = a.sibling;
                  if (null !== v) {
                    (v.return = a.return), (fu = v);
                    break e;
                  }
                  fu = a.return;
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
            if (((Au = l), ta(), yt && "function" == typeof yt.onPostCommitFiberRoot))
              try {
                yt.onPostCommitFiberRoot(vt, e);
              } catch (e) {}
            r = !0;
          }
          return r;
        } finally {
          (Rt = n), (Hu.transition = t);
        }
      }
      return !1;
    }
    function js(e, t, n) {
      (e = qa(e, (t = Pi(0, (t = xi(n, t)), 1)), 1)),
        (t = ps()),
        null !== e && (Lt(e, 1, t), gs(e, t));
    }
    function Fs(e, t, n) {
      if (3 === e.tag) js(e, e, n);
      else
        for (; null !== t; ) {
          if (3 === t.tag) {
            js(t, e, n);
            break;
          }
          if (1 === t.tag) {
            var r = t.stateNode;
            if (
              "function" == typeof t.type.getDerivedStateFromError ||
              ("function" == typeof r.componentDidCatch && (null === as || !as.has(r)))
            ) {
              (t = qa(t, (e = Ni(t, (e = xi(n, e)), 1)), 1)),
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
          (Vu & n) === n &&
          (4 === qu || (3 === qu && (130023424 & Vu) === Vu && 500 > ct() - es)
            ? Cs(e, 0)
            : (Xu |= n)),
        gs(e, t);
    }
    function Us(e, t) {
      0 === t &&
        (0 == (1 & e.mode) ? (t = 1) : ((t = xt), 0 == (130023424 & (xt <<= 1)) && (xt = 4194304)));
      var n = ps();
      null !== (e = Ba(e, t)) && (Lt(e, t, n), gs(e, n));
    }
    function Hs(e) {
      var t = e.memoizedState,
        n = 0;
      null !== t && (n = t.retryLane), Us(e, n);
    }
    function As(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var r = e.stateNode,
            l = e.memoizedState;
          null !== l && (n = l.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        default:
          throw Error(y(314));
      }
      null !== r && r.delete(t), Us(e, n);
    }
    function Bs(e, t) {
      return ot(e, t);
    }
    function $s(e, t, n, r) {
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
    function Vs(e, t, n, r) {
      return new $s(e, t, n, r);
    }
    function Ws(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function Qs(e, t) {
      var n = e.alternate;
      return (
        null === n
          ? (((n = Vs(e.tag, t, e.key, e.mode)).elementType = e.elementType),
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
    function qs(e, t, n, r, l, a) {
      var o = 2;
      if (((r = e), "function" == typeof e)) Ws(e) && (o = 1);
      else if ("string" == typeof e) o = 5;
      else
        e: switch (e) {
          case j:
            return Ks(n.children, l, a, t);
          case F:
            (o = 8), (l |= 8);
            break;
          case M:
            return ((e = Vs(12, n, t, 2 | l)).elementType = M), (e.lanes = a), e;
          case B:
            return ((e = Vs(13, n, t, l)).elementType = B), (e.lanes = a), e;
          case $:
            return ((e = Vs(19, n, t, l)).elementType = $), (e.lanes = a), e;
          case Q:
            return Ys(n, l, a, t);
          default:
            if ("object" == typeof e && null !== e)
              switch (e.$$typeof) {
                case U:
                  o = 10;
                  break e;
                case H:
                  o = 9;
                  break e;
                case A:
                  o = 11;
                  break e;
                case V:
                  o = 14;
                  break e;
                case W:
                  (o = 16), (r = null);
                  break e;
              }
            throw Error(y(130, null == e ? e : typeof e, ""));
        }
      return ((t = Vs(o, n, t, l)).elementType = e), (t.type = r), (t.lanes = a), t;
    }
    function Ks(e, t, n, r) {
      return ((e = Vs(7, e, r, t)).lanes = n), e;
    }
    function Ys(e, t, n, r) {
      return (
        ((e = Vs(22, e, r, t)).elementType = Q), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
      );
    }
    function Gs(e, t, n) {
      return ((e = Vs(6, e, null, t)).lanes = n), e;
    }
    function Xs(e, t, n) {
      return (
        ((t = Vs(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function Zs(e, t, n, r, l) {
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
        (this.onRecoverableError = l),
        (this.mutableSourceEagerHydrationData = null);
    }
    function Js(e, t, n, r, l, a, o, i, u) {
      return (
        (e = new Zs(e, t, n, i, u)),
        1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
        (a = Vs(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (a.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        Va(a),
        e
      );
    }
    function ec(e, t, n) {
      var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: D,
        key: null == r ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    function tc(e) {
      if (!e) return Hl;
      e: {
        if (tt((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(y(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (Wl(t.type)) {
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
        if (Wl(n)) return Kl(e, n, t);
      }
      return t;
    }
    function nc(e, t, n, r, l, a, o, i, u) {
      return (
        ((e = Js(n, r, !0, e, 0, a, 0, i, u)).context = tc(null)),
        (n = e.current),
        ((a = Qa((r = ps()), (l = ms(n)))).callback = null != t ? t : null),
        qa(n, a, l),
        (e.current.lanes = l),
        Lt(e, l, r),
        gs(e, r),
        e
      );
    }
    function rc(e, t, n, r) {
      var l = t.current,
        a = ps(),
        o = ms(l);
      return (
        (n = tc(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = Qa(a, o)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = qa(l, t, o)) && (hs(e, l, o, a), Ka(e, l, o)),
        o
      );
    }
    function lc(e) {
      return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
    }
    function ac(e, t) {
      if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
      }
    }
    function oc(e, t) {
      ac(e, t), (e = e.alternate) && ac(e, t);
    }
    ju = function (e, t, n) {
      if (null !== e)
        if (e.memoizedProps !== t.pendingProps || Bl.current) Ii = !0;
        else {
          if (0 == (e.lanes & n) && 0 == (128 & t.flags))
            return (
              (Ii = !1),
              (function (e, t, n) {
                switch (t.tag) {
                  case 3:
                    $i(t), _a();
                    break;
                  case 5:
                    bo(t);
                    break;
                  case 1:
                    Wl(t.type) && Yl(t);
                    break;
                  case 4:
                    vo(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    var r = t.type._context,
                      l = t.memoizedProps.value;
                    Ul(La, r._currentValue), (r._currentValue = l);
                    break;
                  case 13:
                    if (null !== (r = t.memoizedState))
                      return null !== r.dehydrated
                        ? (Ul(ko, 1 & ko.current), (t.flags |= 128), null)
                        : 0 != (n & t.child.childLanes)
                        ? Gi(e, t, n)
                        : (Ul(ko, 1 & ko.current), null !== (e = ru(e, t, n)) ? e.sibling : null);
                    Ul(ko, 1 & ko.current);
                    break;
                  case 19:
                    if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                      if (r) return tu(e, t, n);
                      t.flags |= 128;
                    }
                    if (
                      (null !== (l = t.memoizedState) &&
                        ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
                      Ul(ko, ko.current),
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
          Ii = 0 != (131072 & e.flags);
        }
      else (Ii = !1), va && 0 != (1048576 & t.flags) && da(t, aa, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var r = t.type;
          nu(e, t), (e = t.pendingProps);
          var l = Vl(t, Al.current);
          Fa(t, n), (l = Fo(null, t, r, e, l, n));
          var a = Mo();
          return (
            (t.flags |= 1),
            "object" == typeof l &&
            null !== l &&
            "function" == typeof l.render &&
            void 0 === l.$$typeof
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                Wl(r) ? ((a = !0), Yl(t)) : (a = !1),
                (t.memoizedState = null !== l.state && void 0 !== l.state ? l.state : null),
                Va(t),
                (l.updater = eo),
                (t.stateNode = l),
                (l._reactInternals = t),
                lo(t, r, e, n),
                (t = Bi(null, t, r, !0, a, n)))
              : ((t.tag = 0), va && a && pa(t), Oi(null, t, l, n), (t = t.child)),
            t
          );
        case 16:
          r = t.elementType;
          e: {
            switch (
              (nu(e, t),
              (e = t.pendingProps),
              (r = (l = r._init)(r._payload)),
              (t.type = r),
              (l = t.tag =
                (function (e) {
                  if ("function" == typeof e) return Ws(e) ? 1 : 0;
                  if (null != e) {
                    if ((e = e.$$typeof) === A) return 11;
                    if (e === V) return 14;
                  }
                  return 2;
                })(r)),
              (e = Ta(r, e)),
              l)
            ) {
              case 0:
                t = Hi(null, t, r, e, n);
                break e;
              case 1:
                t = Ai(null, t, r, e, n);
                break e;
              case 11:
                t = Di(null, t, r, e, n);
                break e;
              case 14:
                t = ji(null, t, r, Ta(r.type, e), n);
                break e;
            }
            throw Error(y(306, r, ""));
          }
          return t;
        case 0:
          return (
            (r = t.type),
            (l = t.pendingProps),
            Hi(e, t, r, (l = t.elementType === r ? l : Ta(r, l)), n)
          );
        case 1:
          return (
            (r = t.type),
            (l = t.pendingProps),
            Ai(e, t, r, (l = t.elementType === r ? l : Ta(r, l)), n)
          );
        case 3:
          e: {
            if (($i(t), null === e)) throw Error(y(387));
            (r = t.pendingProps), (l = (a = t.memoizedState).element), Wa(e, t), Ga(t, r, null, n);
            var o = t.memoizedState;
            if (((r = o.element), a.isDehydrated)) {
              if (
                ((a = {
                  element: r,
                  isDehydrated: !1,
                  cache: o.cache,
                  pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                  transitions: o.transitions,
                }),
                (t.updateQueue.baseState = a),
                (t.memoizedState = a),
                256 & t.flags)
              ) {
                t = Vi(e, t, r, n, (l = xi(Error(y(423)), t)));
                break e;
              }
              if (r !== l) {
                t = Vi(e, t, r, n, (l = xi(Error(y(424)), t)));
                break e;
              }
              for (
                ga = Sl(t.stateNode.containerInfo.firstChild),
                  ha = t,
                  va = !0,
                  ya = null,
                  n = co(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
            } else {
              if ((_a(), r === l)) {
                t = ru(e, t, n);
                break e;
              }
              Oi(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            bo(t),
            null === e && Sa(t),
            (r = t.type),
            (l = t.pendingProps),
            (a = null !== e ? e.memoizedProps : null),
            (o = l.children),
            hl(r, l) ? (o = null) : null !== a && hl(r, a) && (t.flags |= 32),
            Ui(e, t),
            Oi(e, t, o, n),
            t.child
          );
        case 6:
          return null === e && Sa(t), null;
        case 13:
          return Gi(e, t, n);
        case 4:
          return (
            vo(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            null === e ? (t.child = so(t, null, r, n)) : Oi(e, t, r, n),
            t.child
          );
        case 11:
          return (
            (r = t.type),
            (l = t.pendingProps),
            Di(e, t, r, (l = t.elementType === r ? l : Ta(r, l)), n)
          );
        case 7:
          return Oi(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
          return Oi(e, t, t.pendingProps.children, n), t.child;
        case 10:
          e: {
            if (
              ((r = t.type._context),
              (l = t.pendingProps),
              (a = t.memoizedProps),
              (o = l.value),
              Ul(La, r._currentValue),
              (r._currentValue = o),
              null !== a)
            )
              if (wr(a.value, o)) {
                if (a.children === l.children && !Bl.current) {
                  t = ru(e, t, n);
                  break e;
                }
              } else
                for (null !== (a = t.child) && (a.return = t); null !== a; ) {
                  var i = a.dependencies;
                  if (null !== i) {
                    o = a.child;
                    for (var u = i.firstContext; null !== u; ) {
                      if (u.context === r) {
                        if (1 === a.tag) {
                          (u = Qa(-1, n & -n)).tag = 2;
                          var s = a.updateQueue;
                          if (null !== s) {
                            var c = (s = s.shared).pending;
                            null === c ? (u.next = u) : ((u.next = c.next), (c.next = u)),
                              (s.pending = u);
                          }
                        }
                        (a.lanes |= n),
                          null !== (u = a.alternate) && (u.lanes |= n),
                          ja(a.return, n, t),
                          (i.lanes |= n);
                        break;
                      }
                      u = u.next;
                    }
                  } else if (10 === a.tag) o = a.type === t.type ? null : a.child;
                  else if (18 === a.tag) {
                    if (null === (o = a.return)) throw Error(y(341));
                    (o.lanes |= n),
                      null !== (i = o.alternate) && (i.lanes |= n),
                      ja(o, n, t),
                      (o = a.sibling);
                  } else o = a.child;
                  if (null !== o) o.return = a;
                  else
                    for (o = a; null !== o; ) {
                      if (o === t) {
                        o = null;
                        break;
                      }
                      if (null !== (a = o.sibling)) {
                        (a.return = o.return), (o = a);
                        break;
                      }
                      o = o.return;
                    }
                  a = o;
                }
            Oi(e, t, l.children, n), (t = t.child);
          }
          return t;
        case 9:
          return (
            (l = t.type),
            (r = t.pendingProps.children),
            Fa(t, n),
            (r = r((l = Ma(l)))),
            (t.flags |= 1),
            Oi(e, t, r, n),
            t.child
          );
        case 14:
          return (l = Ta((r = t.type), t.pendingProps)), ji(e, t, r, (l = Ta(r.type, l)), n);
        case 15:
          return Fi(e, t, t.type, t.pendingProps, n);
        case 17:
          return (
            (r = t.type),
            (l = t.pendingProps),
            (l = t.elementType === r ? l : Ta(r, l)),
            nu(e, t),
            (t.tag = 1),
            Wl(r) ? ((e = !0), Yl(t)) : (e = !1),
            Fa(t, n),
            no(t, r, l),
            lo(t, r, l, n),
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
    function pc(e, t, n, r, l) {
      var a = n._reactRootContainer;
      if (a) {
        var o = a;
        if ("function" == typeof l) {
          var i = l;
          l = function () {
            var e = lc(o);
            i.call(e);
          };
        }
        rc(t, o, e, l);
      } else
        o = (function (e, t, n, r, l) {
          if (l) {
            if ("function" == typeof r) {
              var a = r;
              r = function () {
                var e = lc(o);
                a.call(e);
              };
            }
            var o = nc(t, r, e, 0, null, !1, 0, "", dc);
            return (
              (e._reactRootContainer = o),
              (e[Pl] = o.current),
              tl(8 === e.nodeType ? e.parentNode : e),
              xs(),
              o
            );
          }
          for (; (l = e.lastChild); ) e.removeChild(l);
          if ("function" == typeof r) {
            var i = r;
            r = function () {
              var e = lc(u);
              i.call(e);
            };
          }
          var u = Js(e, 0, !1, null, 0, !1, 0, "", dc);
          return (
            (e._reactRootContainer = u),
            (e[Pl] = u.current),
            tl(8 === e.nodeType ? e.parentNode : e),
            xs(function () {
              rc(t, u, n, r);
            }),
            u
          );
        })(n, t, e, l, r);
      return lc(o);
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
              (t[Pl] = null);
          }
        }),
      (sc.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
          var t = Ft();
          e = { blockedOn: null, target: e, priority: t };
          for (var n = 0; n < Qt.length && 0 !== t && t < Qt[n].priority; n++);
          Qt.splice(n, 0, e), 0 === n && Gt(e);
        }
      }),
      (Ot = function (e) {
        switch (e.tag) {
          case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
              var n = Et(t.pendingLanes);
              0 !== n && (zt(t, 1 | n), gs(t, ct()), 0 == (6 & Au) && ((ts = ct() + 500), ta()));
            }
            break;
          case 13:
            xs(function () {
              var t = Ba(e, 1);
              if (null !== t) {
                var n = ps();
                hs(t, e, 1, n);
              }
            }),
              oc(e, 1);
        }
      }),
      (Dt = function (e) {
        if (13 === e.tag) {
          var t = Ba(e, 134217728);
          if (null !== t) hs(t, e, 134217728, ps());
          oc(e, 134217728);
        }
      }),
      (jt = function (e) {
        if (13 === e.tag) {
          var t = ms(e),
            n = Ba(e, t);
          if (null !== n) hs(n, e, t, ps());
          oc(e, t);
        }
      }),
      (Ft = function () {
        return Rt;
      }),
      (Mt = function (e, t) {
        var n = Rt;
        try {
          return (Rt = e), t();
        } finally {
          Rt = n;
        }
      }),
      (De = function (e, t, n) {
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
                  var l = Ol(r);
                  if (!l) throw Error(y(90));
                  oe(r), fe(r, l);
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
      (Ae = Ss),
      (Be = xs);
    var mc = { usingClientEntryPoint: !1, Events: [Rl, Il, Ol, Ue, He, Ss] },
      hc = {
        findFiberByHostInstance: zl,
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
        currentDispatcherRef: I.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return null === (e = lt(e)) ? null : e.stateNode;
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
      (l = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!cc(t)) throw Error(y(200));
        return ec(e, t, null, n);
      }),
      (o = function (e, t) {
        if (!cc(e)) throw Error(y(299));
        var n = !1,
          r = "",
          l = ic;
        return (
          null != t &&
            (!0 === t.unstable_strictMode && (n = !0),
            void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
            void 0 !== t.onRecoverableError && (l = t.onRecoverableError)),
          (t = Js(e, 1, !1, null, 0, n, 0, r, l)),
          (e[Pl] = t.current),
          tl(8 === e.nodeType ? e.parentNode : e),
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
        return (e = null === (e = lt(t)) ? null : e.stateNode);
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
          l = !1,
          a = "",
          o = ic;
        if (
          (null != n &&
            (!0 === n.unstable_strictMode && (l = !0),
            void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
            void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
          (t = nc(t, null, e, 1, null != n ? n : null, l, 0, a, o)),
          (e[Pl] = t.current),
          tl(e),
          r)
        )
          for (e = 0; e < r.length; e++)
            (l = (l = (n = r[e])._getVersion)(n._source)),
              null == t.mutableSourceEagerHydrationData
                ? (t.mutableSourceEagerHydrationData = [n, l])
                : t.mutableSourceEagerHydrationData.push(n, l);
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
              (e._reactRootContainer = null), (e[Pl] = null);
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
  a.register("fO90s", function (e, t) {
    e.exports = a("gcnCG");
  }),
  a.register("gcnCG", function (t, n) {
    var r, l, a, o, i, u, s, c, f, d, p, m, h, g, v, y, b, w, k;
    function S(e, t) {
      var n = e.length;
      e.push(t);
      e: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          l = e[r];
        if (!(0 < C(l, t))) break e;
        (e[r] = t), (e[n] = l), (n = r);
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
        e: for (var r = 0, l = e.length, a = l >>> 1; r < a; ) {
          var o = 2 * (r + 1) - 1,
            i = e[o],
            u = o + 1,
            s = e[u];
          if (0 > C(i, n))
            u < l && 0 > C(s, i)
              ? ((e[r] = s), (e[u] = n), (r = u))
              : ((e[r] = i), (e[o] = n), (r = o));
          else {
            if (!(u < l && 0 > C(s, n))) break e;
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
        () => l,
        (e) => (l = e)
      ),
      e(
        t.exports,
        "unstable_ImmediatePriority",
        () => a,
        (e) => (a = e)
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
      var _ = performance;
      r = function () {
        return _.now();
      };
    } else {
      var P = Date,
        N = P.now();
      r = function () {
        return P.now() - N;
      };
    }
    var T = [],
      L = [],
      z = 1,
      R = null,
      I = 3,
      O = !1,
      D = !1,
      j = !1,
      F = "function" == typeof setTimeout ? setTimeout : null,
      M = "function" == typeof clearTimeout ? clearTimeout : null,
      U = "undefined" != typeof setImmediate ? setImmediate : null;
    function H(e) {
      for (var t = x(L); null !== t; ) {
        if (null === t.callback) E(L);
        else {
          if (!(t.startTime <= e)) break;
          E(L), (t.sortIndex = t.expirationTime), S(T, t);
        }
        t = x(L);
      }
    }
    function A(e) {
      if (((j = !1), H(e), !D))
        if (null !== x(T)) (D = !0), J(B);
        else {
          var t = x(L);
          null !== t && ee(A, t.startTime - e);
        }
    }
    function B(e, t) {
      (D = !1), j && ((j = !1), M(Q), (Q = -1)), (O = !0);
      var n = I;
      try {
        for (H(t), R = x(T); null !== R && (!(R.expirationTime > t) || (e && !Y())); ) {
          var l = R.callback;
          if ("function" == typeof l) {
            (R.callback = null), (I = R.priorityLevel);
            var a = l(R.expirationTime <= t);
            (t = r()), "function" == typeof a ? (R.callback = a) : R === x(T) && E(T), H(t);
          } else E(T);
          R = x(T);
        }
        if (null !== R) var o = !0;
        else {
          var i = x(L);
          null !== i && ee(A, i.startTime - t), (o = !1);
        }
        return o;
      } finally {
        (R = null), (I = n), (O = !1);
      }
    }
    "undefined" != typeof navigator &&
      void 0 !== navigator.scheduling &&
      void 0 !== navigator.scheduling.isInputPending &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var $,
      V = !1,
      W = null,
      Q = -1,
      q = 5,
      K = -1;
    function Y() {
      return !(r() - K < q);
    }
    function G() {
      if (null !== W) {
        var e = r();
        K = e;
        var t = !0;
        try {
          t = W(!0, e);
        } finally {
          t ? $() : ((V = !1), (W = null));
        }
      } else V = !1;
    }
    if ("function" == typeof U)
      $ = function () {
        U(G);
      };
    else if ("undefined" != typeof MessageChannel) {
      var X = new MessageChannel(),
        Z = X.port2;
      (X.port1.onmessage = G),
        ($ = function () {
          Z.postMessage(null);
        });
    } else
      $ = function () {
        F(G, 0);
      };
    function J(e) {
      (W = e), V || ((V = !0), $());
    }
    function ee(e, t) {
      Q = F(function () {
        e(r());
      }, t);
    }
    (l = 5),
      (a = 1),
      (o = 4),
      (i = 3),
      (u = null),
      (s = 2),
      (c = function (e) {
        e.callback = null;
      }),
      (f = function () {
        D || O || ((D = !0), J(B));
      }),
      (d = function (e) {
        0 > e || 125 < e
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (q = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (p = function () {
        return I;
      }),
      (m = function () {
        return x(T);
      }),
      (h = function (e) {
        switch (I) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = I;
        }
        var n = I;
        I = t;
        try {
          return e();
        } finally {
          I = n;
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
        var n = I;
        I = e;
        try {
          return t();
        } finally {
          I = n;
        }
      }),
      (b = function (e, t, n) {
        var l = r();
        switch (
          ("object" == typeof n && null !== n
            ? (n = "number" == typeof (n = n.delay) && 0 < n ? l + n : l)
            : (n = l),
          e)
        ) {
          case 1:
            var a = -1;
            break;
          case 2:
            a = 250;
            break;
          case 5:
            a = 1073741823;
            break;
          case 4:
            a = 1e4;
            break;
          default:
            a = 5e3;
        }
        return (
          (e = {
            id: z++,
            callback: t,
            priorityLevel: e,
            startTime: n,
            expirationTime: (a = n + a),
            sortIndex: -1,
          }),
          n > l
            ? ((e.sortIndex = n),
              S(L, e),
              null === x(T) && e === x(L) && (j ? (M(Q), (Q = -1)) : (j = !0), ee(A, n - l)))
            : ((e.sortIndex = a), S(T, e), D || O || ((D = !0), J(B))),
          e
        );
      }),
      (w = Y),
      (k = function (e) {
        var t = I;
        return function () {
          var n = I;
          I = t;
          try {
            return e.apply(this, arguments);
          } finally {
            I = n;
          }
        };
      });
  }),
  a.register("hOzOt", function (e, t) {
    var n = a("kZO5c");
    function r() {}
    function l() {}
    (l.resetWarningCache = r),
      (e.exports = function () {
        function e(e, t, r, l, a, o) {
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
        var a = {
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
          checkPropTypes: l,
          resetWarningCache: r,
        };
        return (a.PropTypes = a), a;
      });
  }),
  a.register("kZO5c", function (e, t) {
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  }),
  a("27Lyk").register(
    JSON.parse(
      '{"9vqfN":"index.f23169f2.js","jrEFD":"motion-background.6277a59a.jpg","hTHrW":"devdotto.c5600637.svg","fRa5e":"envelope.218572ce.svg","bdIA1":"github.a2abf599.svg","cfg7H":"instagram.834d60d8.svg","8Zi1Z":"linkedin.b0d336c3.svg","8uFw5":"medium.11e7a8f2.svg","3fieH":"twitter.da090011.svg","ihen4":"youtube.225f4e4b.svg","7uSVY":"down-arrow.8b6aeb0f.svg","2Cto5":"desk-and-chair.0dc62b27.jpg","bI8jb":"school.1b4724cf.jpg","epOVD":"design-desk.3f0e8627.jpg","aGs9L":"index.8a2d62ac.css"}'
    )
  );
var o;
(o = a("1b2ls")), a("acw62");
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
  (i = a("Xw6Mv")),
  a("acw62"),
  a("acw62");
var u;
u = new URL(a("27Lyk").resolve("jrEFD"), import.meta.url).toString();
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
a("acw62");
var f;
f = a("hOzOt")();
var d;
d = new URL(a("27Lyk").resolve("hTHrW"), import.meta.url).toString();
var p;
p = new URL(a("27Lyk").resolve("fRa5e"), import.meta.url).toString();
var m;
m = new URL(a("27Lyk").resolve("bdIA1"), import.meta.url).toString();
var h;
h = new URL(a("27Lyk").resolve("cfg7H"), import.meta.url).toString();
var g;
g = new URL(a("27Lyk").resolve("8Zi1Z"), import.meta.url).toString();
var v;
v = new URL(a("27Lyk").resolve("8uFw5"), import.meta.url).toString();
var y;
y = new URL(a("27Lyk").resolve("3fieH"), import.meta.url).toString();
var b;
b = new URL(a("27Lyk").resolve("ihen4"), import.meta.url).toString();
const w = (e) => {
  const {
    devDotTo: n,
    email: r,
    gitHub: l,
    instagram: a,
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
          l &&
            (0, o.jsx)("a", {
              href: `https://github.com/${l}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0, o.jsx)("img", { src: t(m), alt: "GitHub", className: "socialIcon" }),
            }),
          a &&
            (0, o.jsx)("a", {
              href: `https://www.instagram.com/${a}`,
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
a("acw62");
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
a("acw62");
var x;
x = new URL(a("27Lyk").resolve("7uSVY"), import.meta.url).toString();
var E;
E = new URL(a("27Lyk").resolve("2Cto5"), import.meta.url).toString();
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
var _ = C;
a("acw62");
var P = a("acw62"),
  N = ((P = a("acw62")), (P = a("acw62")), (P = a("acw62")), Object.defineProperty),
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
  z = (e, t) => {
    L.isServer ? (0, P.useEffect)(e, t) : (0, P.useLayoutEffect)(e, t);
  };
function R(e) {
  let t = (0, P.useRef)(e);
  return (
    z(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let I = function (e) {
  let n = R(e);
  return t(P).useCallback((...e) => n.current(...e), [n]);
};
var O;
P = a("acw62");
function D() {
  let e = (function () {
      let e = "undefined" == typeof document;
      return (
        "useSyncExternalStore" in P &&
        P.useSyncExternalStore(
          () => () => {},
          () => !1,
          () => !e
        )
      );
    })(),
    [t, n] = P.useState(L.isHandoffComplete);
  return (
    t && !1 === L.isHandoffComplete && n(!1),
    P.useEffect(() => {
      !0 !== t && n(!0);
    }, [t]),
    P.useEffect(() => L.handoff(), []),
    !e && t
  );
}
let j =
  null != (O = t((P = a("acw62"))).useId)
    ? O
    : function () {
        let e = D(),
          [n, r] = t(P).useState(e ? () => L.nextId() : null);
        return (
          z(() => {
            null === n && r(L.nextId());
          }, [n]),
          null != n ? "" + n : void 0
        );
      };
P = a("acw62");
function F(e) {
  var t;
  if (e.type) return e.type;
  let n = null != (t = e.as) ? t : "button";
  return "string" == typeof n && "button" === n.toLowerCase() ? "button" : void 0;
}
function M(e, t) {
  let [n, r] = (0, P.useState)(() => F(e));
  return (
    z(() => {
      r(F(e));
    }, [e.type, e.as]),
    z(() => {
      n ||
        (t.current &&
          t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute("type") &&
          r("button"));
    }, [n, t]),
    n
  );
}
P = a("acw62");
let U = Symbol();
function H(e, t = !0) {
  return Object.assign(e, { [U]: t });
}
function A(...e) {
  let t = (0, P.useRef)(e);
  (0, P.useEffect)(() => {
    t.current = e;
  }, [e]);
  let n = I((e) => {
    for (let n of t.current) null != n && ("function" == typeof n ? n(e) : (n.current = e));
  });
  return e.every((e) => null == e || (null == e ? void 0 : e[U])) ? void 0 : n;
}
let B = (0, (P = a("acw62")).createContext)(null);
B.displayName = "OpenClosedContext";
var $,
  V =
    ((($ = V || {})[($.Open = 1)] = "Open"),
    ($[($.Closed = 2)] = "Closed"),
    ($[($.Closing = 4)] = "Closing"),
    ($[($.Opening = 8)] = "Opening"),
    $);
function W({ value: e, children: n }) {
  return t(P).createElement(B.Provider, { value: e }, n);
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
P = a("acw62");
function Y(...e) {
  return Array.from(new Set(e.flatMap((e) => ("string" == typeof e ? e.split(" ") : []))))
    .filter(Boolean)
    .join(" ");
}
var G,
  X,
  Z =
    (((G = Z || {})[(G.None = 0)] = "None"),
    (G[(G.RenderStrategy = 1)] = "RenderStrategy"),
    (G[(G.Static = 2)] = "Static"),
    G),
  J = ((e) => ((e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e))(J || {});
function ee({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: a = !0,
  name: o,
  mergeRefs: i,
}) {
  i = null != i ? i : re;
  let u = le(t, e);
  if (a) return te(u, n, r, o, i);
  let s = null != l ? l : 0;
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
function te(e, t = {}, n, r, l) {
  let { as: a = n, children: o, refName: i = "ref", ...u } = ie(e, ["unmount", "static"]),
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
    for (let [r, l] of Object.entries(t)) "boolean" == typeof l && (e = !0), !0 === l && n.push(r);
    e && (f["data-headlessui-state"] = n.join(" "));
  }
  if (a === P.Fragment && Object.keys(oe(u)).length > 0) {
    if (!(0, P.isValidElement)(c) || (Array.isArray(c) && c.length > 1))
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
          ? (...t) => Y(null == e ? void 0 : e.className(...t), u.className)
          : Y(null == e ? void 0 : e.className, u.className),
      n = t ? { className: t } : {};
    return (0, P.cloneElement)(
      c,
      Object.assign({}, le(c.props, oe(ie(u, ["ref"]))), f, s, { ref: l(c.ref, s.ref) }, n)
    );
  }
  return (0, P.createElement)(
    a,
    Object.assign({}, ie(u, ["ref"]), a !== P.Fragment && s, a !== P.Fragment && f),
    c
  );
}
function ne() {
  let e = (0, P.useRef)([]),
    t = (0, P.useCallback)((t) => {
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
function le(...e) {
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
        let l = n[e];
        for (let e of l) {
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
function ae(e) {
  var t;
  return Object.assign((0, P.forwardRef)(e), {
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
  null != (X = t((P = a("acw62"))).startTransition)
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
  ge = (0, P.createContext)(null);
function ve(e) {
  let t = (0, P.useContext)(ge);
  if (null === t) {
    let t = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(t, ve), t);
  }
  return t;
}
ge.displayName = "DisclosureContext";
let ye = (0, P.createContext)(null);
function be(e) {
  let t = (0, P.useContext)(ye);
  if (null === t) {
    let t = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(t, be), t);
  }
  return t;
}
ye.displayName = "DisclosureAPIContext";
let we = (0, P.createContext)(null);
function ke(e, t) {
  return q(t.type, he, e, t);
}
we.displayName = "DisclosurePanelContext";
let Se = P.Fragment;
let xe = Z.RenderStrategy | Z.Static;
let Ee = ae(function (e, n) {
    let { defaultOpen: r = !1, ...l } = e,
      a = (0, P.useRef)(null),
      o = A(
        n,
        H((e) => {
          a.current = e;
        }, void 0 === e.as || e.as === P.Fragment)
      ),
      i = (0, P.useRef)(null),
      u = (0, P.useRef)(null),
      s = (0, P.useReducer)(ke, {
        disclosureState: r ? 0 : 1,
        linkedPanel: !1,
        buttonRef: u,
        panelRef: i,
        buttonId: null,
        panelId: null,
      }),
      [{ disclosureState: c, buttonId: f }, d] = s,
      p = I((e) => {
        d({ type: 1 });
        let t = K(a);
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
      m = (0, P.useMemo)(() => ({ close: p }), [p]),
      h = (0, P.useMemo)(() => ({ open: 0 === c, close: p }), [c, p]),
      g = { ref: o };
    return t(P).createElement(
      ge.Provider,
      { value: s },
      t(P).createElement(
        ye.Provider,
        { value: m },
        t(P).createElement(
          W,
          { value: q(c, { 0: V.Open, 1: V.Closed }) },
          ee({ ourProps: g, theirProps: l, slot: h, defaultTag: Se, name: "Disclosure" })
        )
      )
    );
  }),
  Ce = ae(function (e, t) {
    let n = j(),
      { id: r = `headlessui-disclosure-button-${n}`, ...l } = e,
      [a, o] = ve("Disclosure.Button"),
      i = (0, P.useContext)(we),
      u = null !== i && i === a.panelId,
      s = (0, P.useRef)(null),
      c = A(s, t, u ? null : a.buttonRef),
      f = ne();
    (0, P.useEffect)(() => {
      if (!u)
        return (
          o({ type: 2, buttonId: r }),
          () => {
            o({ type: 2, buttonId: null });
          }
        );
    }, [r, o, u]);
    let d = I((e) => {
        var t;
        if (u) {
          if (1 === a.disclosureState) return;
          switch (e.key) {
            case de.Space:
            case de.Enter:
              e.preventDefault(),
                e.stopPropagation(),
                o({ type: 0 }),
                null == (t = a.buttonRef.current) || t.focus();
          }
        } else
          switch (e.key) {
            case de.Space:
            case de.Enter:
              e.preventDefault(), e.stopPropagation(), o({ type: 0 });
          }
      }),
      p = I((e) => {
        if (e.key === de.Space) e.preventDefault();
      }),
      m = I((t) => {
        var n;
        Q(t.currentTarget) ||
          e.disabled ||
          (u ? (o({ type: 0 }), null == (n = a.buttonRef.current) || n.focus()) : o({ type: 0 }));
      }),
      h = (0, P.useMemo)(() => ({ open: 0 === a.disclosureState }), [a]),
      g = M(e, s);
    return ee({
      mergeRefs: f,
      ourProps: u
        ? { ref: c, type: g, onKeyDown: d, onClick: m }
        : {
            ref: c,
            id: r,
            type: g,
            "aria-expanded": 0 === a.disclosureState,
            "aria-controls": a.linkedPanel ? a.panelId : void 0,
            onKeyDown: d,
            onKeyUp: p,
            onClick: m,
          },
      theirProps: l,
      slot: h,
      defaultTag: "button",
      name: "Disclosure.Button",
    });
  }),
  _e = ae(function (e, n) {
    let r = j(),
      { id: l = `headlessui-disclosure-panel-${r}`, ...a } = e,
      [o, i] = ve("Disclosure.Panel"),
      { close: u } = be("Disclosure.Panel"),
      s = ne(),
      c = A(n, o.panelRef, (e) => {
        ue(() => i({ type: e ? 4 : 5 }));
      });
    (0, P.useEffect)(
      () => (
        i({ type: 3, panelId: l }),
        () => {
          i({ type: 3, panelId: null });
        }
      ),
      [l, i]
    );
    let f = (0, P.useContext)(B),
      d = null !== f ? (f & V.Open) === V.Open : 0 === o.disclosureState,
      p = (0, P.useMemo)(() => ({ open: 0 === o.disclosureState, close: u }), [o, u]),
      m = { ref: c, id: l };
    return t(P).createElement(
      we.Provider,
      { value: o.panelId },
      ee({
        mergeRefs: s,
        ourProps: m,
        theirProps: a,
        slot: p,
        defaultTag: "div",
        features: xe,
        visible: d,
        name: "Disclosure.Panel",
      })
    );
  }),
  Pe = Object.assign(Ee, { Button: Ce, Panel: _e });
var Ne,
  Te = (P = a("acw62")).forwardRef(function ({ title: e, titleId: t, ...n }, r) {
    return P.createElement(
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
      e ? P.createElement("title", { id: t }, e) : null,
      P.createElement("path", {
        fillRule: "evenodd",
        d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
        clipRule: "evenodd",
      })
    );
  });
Ne = new URL(a("27Lyk").resolve("bI8jb"), import.meta.url).toString();
const Le = [
  {
    degree: "Master of Information Technology",
    university: "University of Western Australia (UWA), Perth, Australia",
    gpa: "6.38 / 7.0",
    achievements: [
      {
        title: "Agile Web application - BrewChat",
        technologies: "Javascript, Flask, SQLAlchemy, unittest, Git",
      },
      {
        title: "Data Warehousing & Association Rule Mining",
        technologies: "R, SQL, SSMS, Power BI",
      },
      { title: "Graph Database & Graph Data Science", technologies: "Neo4j, Cypher, R" },
      {
        title: "Exploratory data analysis and Machine learning models",
        technologies: "R, RStudio, Git",
      },
      {
        title: "IOT ESP32 Air Quality Detector",
        technologies: "C++, Flask, HTML, CSS, Javascript, Firebase Real-Time DB, Git",
      },
      { title: "Business intelligence report", technologies: "Python, PowerBI" },
      { title: "Cybersecurity", technologies: "Bash, Virtualisation & Containerisation" },
      { title: "Rational Database Management System", technologies: "SQL" },
      { title: "COVID Analysis", technologies: "Python" },
    ],
    results: [
      "HD & Top3 Project",
      "HD & Top2 Project",
      "HD & Top4 Project",
      "Top1 Project",
      "HD",
      "HD",
      "HD",
      "HD",
      "HD",
    ],
    url: "#",
  },
  {
    degree: "M.S. in Accounting and Information Technology",
    university: "National Chung Cheng University (CCU), Chiayi, Taiwan",
    gpa: "3.93 / 4.0",
    achievements: [
      {
        title: "Nationally in CCU’s competitive annual Accounting postgraduate entrance exam.",
        technologies:
          "Subjects: English, Intermediate Accounting, and Cost and Management Accounting",
      },
      {
        title:
          "Conducted research on “Directors’ and Officers’ Liability Insurance and Cost Stickiness.”",
        technologies: "SAS, SPSS, Excel, Word, and PowerPoint",
      },
    ],
    results: ["TOP2", "HD"],
    url: "#",
  },
  {
    degree: "B.S. in Accounting and Information Systems",
    university:
      "National Kaohsiung University of Science and Technology (NKUST), Kaohsiung, Taiwan",
    gpa: "80.44 / 100",
    achievements: [],
    results: [],
    url: "#",
  },
];
var ze = () =>
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
              src: t(Ne),
              className: "h-9/10 w-full object-cover slide-in",
              alt: "School building",
            }),
          }),
          (0, o.jsx)("div", {
            className: "verticalContainer",
            children: Le.map((e) =>
              (0, o.jsx)(
                "div",
                {
                  className: "box",
                  children: (0, o.jsx)(Pe, {
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
                          (0, o.jsx)(Pe.Button, {
                            className: "pt-3 w-full flex items-center justify-center",
                            children: (0, o.jsx)(Te, {
                              className:
                                (t ? "rotate-180 transform" : "") + " h-5 w-5 text-gray-500",
                            }),
                          }),
                          (0, o.jsx)(Pe.Panel, {
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
a("acw62");
var Re;
Re = new URL(a("27Lyk").resolve("epOVD"), import.meta.url).toString();
const Ie = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];
var Oe = () =>
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
              src: t(Re),
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
            children: Ie.map((e) =>
              (0, o.jsxs)(
                "div",
                {
                  className: "box",
                  children: [
                    (0, o.jsx)("a", {
                      href: e.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: (0, o.jsx)("h3", {
                        style: { flexBasis: "40px" },
                        children: e.title,
                      }),
                    }),
                    (0, o.jsx)("p", { className: "small", children: e.description }),
                  ],
                },
                e.title
              )
            ),
          }),
        ],
      }),
    ],
  });
const De = {
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
var je = () =>
  (0, o.jsxs)("div", {
    id: "main",
    children: [
      (0, o.jsx)(S, {}),
      (0, o.jsx)(_, { name: De.name, title: De.title }),
      (0, o.jsx)(c, {}),
      (0, o.jsx)(ze, {}),
      (0, o.jsx)(Oe, {}),
      (0, o.jsx)(k, { ...De, primaryColor: "#4E567E", secondaryColor: "#D2F1E4" }),
    ],
  });
(0, i.render)((0, o.jsx)(je, {}), document.getElementById("app"));
//# sourceMappingURL=index.f23169f2.js.map
