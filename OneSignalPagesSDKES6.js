!function(e) {
    var t = {};
    function i(n) {
        if (t[n])
            return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, i),
        o.l = !0,
        o.exports
    }
    i.m = e,
    i.c = t,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "",
    i(i.s = 27)
}([function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return n
    });
    Object.setPrototypeOf || Array;
    Object.assign;
    function n(e, t, i, n) {
        return new (i || (i = Promise))(function(o, s) {
            function r(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    s(e)
                }
            }
            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    s(e)
                }
            }
            function c(e) {
                e.done ? o(e.value) : new i(function(t) {
                    t(e.value)
                }
                ).then(r, a)
            }
            c((n = n.apply(e, t || [])).next())
        }
        )
    }
}
, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return n
    });
    class n {
        static shouldLog() {
            try {
                if ("undefined" == typeof window || void 0 === window.localStorage)
                    return !1;
                const e = window.localStorage.getItem("loglevel");
                return !(!e || "trace" !== e.toLowerCase())
            } catch (e) {
                return !1
            }
        }
        static setLevel(e) {
            if ("undefined" != typeof window && void 0 !== window.localStorage)
                try {
                    window.localStorage.setItem("loglevel", e),
                    n.proxyMethodsCreated = void 0,
                    n.createProxyMethods()
                } catch (e) {
                    return
                }
        }
        static createProxyMethods() {
            if (void 0 !== n.proxyMethodsCreated)
                return;
            n.proxyMethodsCreated = !0;
            const e = {
                log: "debug",
                trace: "trace",
                info: "info",
                warn: "warn",
                error: "error"
            };
            for (const t of Object.keys(e)) {
                const i = void 0 !== console[t]
                  , o = e[t]
                  , s = i && (n.shouldLog() || "error" === o);
                n[o] = s ? console[t].bind(console) : function() {}
            }
        }
    }
    n.createProxyMethods()
}
, function(e, t, i) {
    "use strict";
    i.d(t, "g", function() {
        return h
    }),
    i.d(t, "w", function() {
        return p
    }),
    i.d(t, "c", function() {
        return m
    }),
    i.d(t, "q", function() {
        return b
    }),
    i.d(t, "y", function() {
        return f
    }),
    i.d(t, "j", function() {
        return S
    }),
    i.d(t, "s", function() {
        return v
    }),
    i.d(t, "r", function() {
        return O
    }),
    i.d(t, "b", function() {
        return y
    }),
    i.d(t, "e", function() {
        return w
    }),
    i.d(t, "a", function() {
        return E
    }),
    i.d(t, "v", function() {
        return I
    }),
    i.d(t, "o", function() {
        return P
    }),
    i.d(t, "k", function() {
        return C
    }),
    i.d(t, "i", function() {
        return T
    }),
    i.d(t, "t", function() {
        return A
    }),
    i.d(t, "x", function() {
        return M
    }),
    i.d(t, "f", function() {
        return N
    }),
    i.d(t, "z", function() {
        return x
    }),
    i.d(t, "u", function() {
        return k
    }),
    i.d(t, "n", function() {
        return j
    }),
    i.d(t, "d", function() {
        return _
    }),
    i.d(t, "p", function() {
        return D
    }),
    i.d(t, "m", function() {
        return R
    }),
    i.d(t, "l", function() {
        return U
    }),
    i.d(t, "h", function() {
        return W
    });
    var n = i(0)
      , o = i(4)
      , s = i(6)
      , r = (i(3),
    i(1))
      , a = i(8)
      , c = i(17)
      , l = i(22)
      , d = i(5)
      , u = i(9)
      , g = i.n(u);
    function h(e) {
        return l.a.decodeHtmlEntities(e)
    }
    function p(e) {
        var t = document.querySelectorAll(e);
        if (t.length > 0)
            for (let e = 0; e < t.length; e++) {
                const i = t[e].parentNode;
                i && i.removeChild(t[e])
            }
    }
    function m() {
        return Object(n.a)(this, void 0, void 0, function*() {
            return new Promise(e=>{
                OneSignal.initialized ? e() : OneSignal.emitter.once(OneSignal.EVENTS.SDK_INITIALIZED, e)
            }
            )
        })
    }
    function b() {
        return a.a.isUsingSubscriptionWorkaround()
    }
    function f(e=!1) {
        return Object(n.a)(this, void 0, void 0, function*() {
            return c.a.triggerNotificationPermissionChanged(e)
        })
    }
    function S(e, ...t) {
        if (e)
            return e.apply(null, t)
    }
    function v(e, ...t) {
        return a.a.logMethodCall(e, ...t)
    }
    function O(e) {
        return !!e && !!e.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)
    }
    function y(e, t, i) {
        let n;
        if (!(n = "string" == typeof e ? document.querySelector(e) : e))
            throw new Error(`${e} must be a CSS selector string or DOM Element object.`);
        n.insertAdjacentHTML(t, i)
    }
    function w(e) {
        if ("string" == typeof e) {
            const t = document.querySelector(e);
            if (null === t)
                throw new Error(`Cannot find element with selector "${e}"`);
            for (; t.firstChild; )
                t.removeChild(t.firstChild)
        } else {
            if ("object" != typeof e)
                throw new Error(`${e} must be a CSS selector string or DOM Element object.`);
            for (; e.firstChild; )
                e.removeChild(e.firstChild)
        }
    }
    function E(e, t) {
        if ("string" == typeof e) {
            const i = document.querySelector(e);
            if (null === i)
                throw new Error(`Cannot find element with selector "${e}"`);
            i.classList.add(t)
        } else {
            if ("object" != typeof e)
                throw new Error(`${e} must be a CSS selector string or DOM Element object.`);
            e.classList.add(t)
        }
    }
    function I(e, t) {
        if ("string" == typeof e) {
            const i = document.querySelector(e);
            if (null === i)
                throw new Error(`Cannot find element with selector "${e}"`);
            i.classList.remove(t)
        } else {
            if ("object" != typeof e)
                throw new Error(`${e} must be a CSS selector string or DOM Element object.`);
            e.classList.remove(t)
        }
    }
    function P(e, t) {
        if ("string" == typeof e) {
            const i = document.querySelector(e);
            if (null === i)
                throw new Error(`Cannot find element with selector "${e}"`);
            return i.classList.contains(t)
        }
        if ("object" == typeof e)
            return e.classList.contains(t);
        throw new Error(`${e} must be a CSS selector string or DOM Element object.`)
    }
    function C(e) {
        return d.a.getConsoleStyle(e)
    }
    function T(e) {
        return new Promise(t=>{
            setTimeout(t, e)
        }
        )
    }
    function A() {
        return Promise.resolve()
    }
    function M(e, t) {
        return d.a.timeoutPromise(e, t)
    }
    function N(e, t) {
        return d.a.contains(e, t)
    }
    function x() {
        return r.a.warn("OneSignal: Unsubscribing from push."),
        o.a.getWindowEnv() !== s.a.ServiceWorker ? self.registration.pushManager.getSubscription().then(e=>{
            if (e)
                return e.unsubscribe();
            throw new Error("Cannot unsubscribe because not subscribed.")
        }
        ) : b() ? new Promise((e,t)=>{
            r.a.debug("Unsubscribe from push got called, and we're going to remotely execute it in HTTPS iFrame."),
            OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_FROM_PUSH, null, i=>{
                r.a.debug("Unsubscribe from push succesfully remotely executed."),
                i.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? e() : t("Failed to remotely unsubscribe from push.")
            }
            )
        }
        ) : OneSignal.context.serviceWorkerManager.getRegistration().then(e=>e || Promise.resolve()).then(e=>e.pushManager).then(e=>e.getSubscription()).then(e=>e ? e.unsubscribe() : Promise.resolve())
    }
    function k(e, t, i, n=!1) {
        if (t || r.a.error("Cannot call on() with no event: ", t),
        i || r.a.error("Cannot call on() with no task: ", i),
        "string" == typeof e) {
            const n = document.querySelectorAll(e);
            if (n.length > 0)
                for (let e = 0; e < n.length; e++)
                    k(n[e], t, i)
        } else if (s = e,
        "[object Array]" === Object.prototype.toString.call(s))
            for (let n = 0; n < e.length; n++)
                k(e[n], t, i);
        else {
            if ("object" != typeof e)
                throw new Error(`${e} must be a CSS selector string or DOM Element object.`);
            var o = function(t) {
                var s = function() {
                    e.removeEventListener(t.type, o)
                };
                n || s(),
                i(t, s)
            };
            e.addEventListener(t, o)
        }
        var s
    }
    function j() {
        return window.__oneSignalSdkLoadCount || 0
    }
    function _(e) {
        return Object(n.a)(this, void 0, void 0, function*() {
            return yield new Promise(t=>{
                OneSignal.emitter.once(e, e=>{
                    t(e)
                }
                )
            }
            )
        })
    }
    function D() {
        window.__oneSignalSdkLoadCount = j() + 1
    }
    function R(e) {
        return e ? g.a.safari && e.safari ? e.safari : g.a.firefox && e.firefox ? e.firefox : e.chrome || e.firefox || e.safari || "default-icon" : "default-icon"
    }
    function U(e) {
        const t = document.querySelector(e);
        return t || (r.a.debug(`No instance of ${e} found. Returning stub.`),
        document.createElement("div"))
    }
    function W(e) {
        return JSON.parse(JSON.stringify(e))
    }
}
, function(e, t, i) {
    "use strict";
    var n = i(0)
      , o = i(18)
      , s = i(24);
    class r {
    }
    class a {
    }
    var c, l, d = i(23), u = i(21), g = i(6), h = i(20), p = i(13), m = i(4), b = i(8), f = i(5), S = i(1), v = i(19);
    i.d(t, "a", function() {
        return O
    }),
    (l = c || (c = {}))[l.SET = 0] = "SET";
    class O {
        constructor(e) {
            this.databaseName = e,
            this.emitter = new o.a,
            this.database = new s.a(this.databaseName)
        }
        static resetInstance() {
            O.databaseInstance = null
        }
        static get singletonInstance() {
            return O.databaseInstanceName || (O.databaseInstanceName = "ONE_SIGNAL_SDK_DB"),
            O.databaseInstance || (O.databaseInstance = new O(O.databaseInstanceName)),
            O.databaseInstance
        }
        static applyDbResultFilter(e, t, i) {
            switch (e) {
            case "Options":
                return i && t ? i.value : i && !t ? i : null;
            case "Ids":
                return i && t ? i.id : i && !t ? i : null;
            case "NotificationOpened":
                return i && t ? {
                    data: i.data,
                    timestamp: i.timestamp
                } : i && !t ? i : null;
            default:
                return i || null
            }
        }
        shouldUsePostmam() {
            return m.a.getWindowEnv() !== g.a.ServiceWorker && b.b.isUsingSubscriptionWorkaround() && m.a.getTestEnv() === u.a.None
        }
        get(e, t) {
            return Object(n.a)(this, void 0, void 0, function*() {
                if (this.shouldUsePostmam())
                    return yield new Promise(i=>Object(n.a)(this, void 0, void 0, function*() {
                        OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, [{
                            table: e,
                            key: t
                        }], e=>{
                            const t = e.data[0];
                            i(t)
                        }
                        )
                    }));
                {
                    const i = yield this.database.get(e, t);
                    return O.applyDbResultFilter(e, t, i)
                }
            })
        }
        getAll(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                if (this.shouldUsePostmam())
                    return yield new Promise(t=>Object(n.a)(this, void 0, void 0, function*() {
                        OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET_ALL, {
                            table: e
                        }, e=>{
                            const i = e.data;
                            t(i)
                        }
                        )
                    }));
                return yield this.database.getAll(e)
            })
        }
        put(e, t) {
            return Object(n.a)(this, void 0, void 0, function*() {
                yield new Promise((i,o)=>Object(n.a)(this, void 0, void 0, function*() {
                    m.a.getWindowEnv() !== g.a.ServiceWorker && b.b.isUsingSubscriptionWorkaround() && m.a.getTestEnv() === u.a.None ? OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, [{
                        table: e,
                        keypath: t
                    }], n=>{
                        n.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? i() : o(`(Database) Attempted remote IndexedDB put(${e}, ${t}),` + "but did not get success response.")
                    }
                    ) : (yield this.database.put(e, t),
                    i())
                })),
                this.emitter.emit(O.EVENTS.SET, t)
            })
        }
        remove(e, t) {
            return m.a.getWindowEnv() !== g.a.ServiceWorker && b.b.isUsingSubscriptionWorkaround() && m.a.getTestEnv() === u.a.None ? new Promise((i,n)=>{
                OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, [{
                    table: e,
                    keypath: t
                }], o=>{
                    o.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? i() : n(`(Database) Attempted remote IndexedDB remove(${e}, ${t}),` + "but did not get success response.")
                }
                )
            }
            ) : this.database.remove(e, t)
        }
        getAppConfig() {
            return Object(n.a)(this, void 0, void 0, function*() {
                const e = {}
                  , t = yield this.get("Ids", "appId");
                return e.appId = t,
                e.subdomain = yield this.get("Options", "subdomain"),
                e.vapidPublicKey = yield this.get("Options", "vapidPublicKey"),
                e
            })
        }
        getExternalUserId() {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield this.get("Ids", "externalUserId")
            })
        }
        getExternalUserIdAuthHash() {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield this.get("Ids", "externalUserIdAuthHash")
            })
        }
        setExternalUserId(e, t) {
            return Object(n.a)(this, void 0, void 0, function*() {
                const i = f.b.getValueOrDefault(e, "")
                  , n = f.b.getValueOrDefault(t, "");
                "" === i ? yield this.remove("Ids", "externalUserId") : yield this.put("Ids", {
                    type: "externalUserId",
                    id: i
                }),
                "" === n ? yield this.remove("Ids", "externalUserIdAuthHash") : yield this.put("Ids", {
                    type: "externalUserIdAuthHash",
                    id: n
                })
            })
        }
        setAppConfig(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                e.appId && (yield this.put("Ids", {
                    type: "appId",
                    id: e.appId
                })),
                e.subdomain && (yield this.put("Options", {
                    key: "subdomain",
                    value: e.subdomain
                })),
                !0 === e.httpUseOneSignalCom ? yield this.put("Options", {
                    key: "httpUseOneSignalCom",
                    value: !0
                }) : !1 === e.httpUseOneSignalCom && (yield this.put("Options", {
                    key: "httpUseOneSignalCom",
                    value: !1
                })),
                e.vapidPublicKey && (yield this.put("Options", {
                    key: "vapidPublicKey",
                    value: e.vapidPublicKey
                }))
            })
        }
        getAppState() {
            return Object(n.a)(this, void 0, void 0, function*() {
                const e = new r;
                return e.defaultNotificationUrl = yield this.get("Options", "defaultUrl"),
                e.defaultNotificationTitle = yield this.get("Options", "defaultTitle"),
                e.lastKnownPushEnabled = yield this.get("Options", "isPushEnabled"),
                e.clickedNotifications = yield this.get("NotificationOpened"),
                e
            })
        }
        setAppState(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                if (e.defaultNotificationUrl && (yield this.put("Options", {
                    key: "defaultUrl",
                    value: e.defaultNotificationUrl
                })),
                (e.defaultNotificationTitle || "" === e.defaultNotificationTitle) && (yield this.put("Options", {
                    key: "defaultTitle",
                    value: e.defaultNotificationTitle
                })),
                null != e.lastKnownPushEnabled && (yield this.put("Options", {
                    key: "isPushEnabled",
                    value: e.lastKnownPushEnabled
                })),
                e.clickedNotifications) {
                    const t = Object.keys(e.clickedNotifications);
                    for (const i of t) {
                        const t = e.clickedNotifications[i];
                        t ? yield this.put("NotificationOpened", {
                            url: i,
                            data: t.data,
                            timestamp: t.timestamp
                        }) : null === t && (yield this.remove("NotificationOpened", i))
                    }
                }
            })
        }
        getServiceWorkerState() {
            return Object(n.a)(this, void 0, void 0, function*() {
                const e = new a;
                return e.workerVersion = yield this.get("Ids", "WORKER1_ONE_SIGNAL_SW_VERSION"),
                e
            })
        }
        setServiceWorkerState(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                e.workerVersion && (yield this.put("Ids", {
                    type: "WORKER1_ONE_SIGNAL_SW_VERSION",
                    id: e.workerVersion
                }))
            })
        }
        getSubscription() {
            return Object(n.a)(this, void 0, void 0, function*() {
                const e = new d.a;
                e.deviceId = yield this.get("Ids", "userId"),
                e.subscriptionToken = yield this.get("Ids", "registrationId");
                const t = yield this.get("Options", "optedOut")
                  , i = yield this.get("Options", "subscription")
                  , n = yield this.get("Options", "subscriptionCreatedAt")
                  , o = yield this.get("Options", "subscriptionExpirationTime");
                return e.optedOut = null != t ? t : null != i && !i,
                e.createdAt = n,
                e.expirationTime = o,
                e
            })
        }
        setDeviceId(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                yield this.put("Ids", {
                    type: "userId",
                    id: e
                })
            })
        }
        setSubscription(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                e.deviceId && (yield this.setDeviceId(e.deviceId)),
                void 0 !== e.subscriptionToken && (yield this.put("Ids", {
                    type: "registrationId",
                    id: e.subscriptionToken
                })),
                null != e.optedOut && (yield this.put("Options", {
                    key: "optedOut",
                    value: e.optedOut
                })),
                null != e.createdAt && (yield this.put("Options", {
                    key: "subscriptionCreatedAt",
                    value: e.createdAt
                })),
                null != e.expirationTime ? yield this.put("Options", {
                    key: "subscriptionExpirationTime",
                    value: e.expirationTime
                }) : yield this.remove("Options", "subscriptionExpirationTime")
            })
        }
        getEmailProfile() {
            return Object(n.a)(this, void 0, void 0, function*() {
                const e = yield this.get("Ids", "emailProfile");
                return e ? h.a.deserialize(e) : new h.a
            })
        }
        setEmailProfile(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                e && (yield this.put("Ids", {
                    type: "emailProfile",
                    id: e.serialize()
                }))
            })
        }
        getSMSProfile() {
            return Object(n.a)(this, void 0, void 0, function*() {
                const e = yield this.get("Ids", "smsProfile");
                return e ? v.a.deserialize(e) : new v.a
            })
        }
        setSMSProfile(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                e && (yield this.put("Ids", {
                    type: "smsProfile",
                    id: e.serialize()
                }))
            })
        }
        setProvideUserConsent(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                yield this.put("Options", {
                    key: "userConsent",
                    value: e
                })
            })
        }
        getProvideUserConsent() {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield this.get("Options", "userConsent")
            })
        }
        getSession(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield this.get("Sessions", e)
            })
        }
        setSession(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                yield this.put("Sessions", e)
            })
        }
        removeSession(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                yield this.remove("Sessions", e)
            })
        }
        getLastNotificationClicked(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                let t = [];
                try {
                    t = yield this.getAll("NotificationClicked")
                } catch (e) {
                    S.a.error("Database.getNotificationClickedByUrl", e)
                }
                return t.find(t=>t.appId === e) || null
            })
        }
        getNotificationClickedByUrl(e, t) {
            return Object(n.a)(this, void 0, void 0, function*() {
                let i = [];
                try {
                    i = yield this.getAll("NotificationClicked")
                } catch (e) {
                    S.a.error("Database.getNotificationClickedByUrl", e)
                }
                return i.find(i=>i.appId === t && new URL(e).origin === new URL(i.url).origin) || null
            })
        }
        getNotificationClickedById(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield this.get("NotificationClicked", e)
            })
        }
        getNotificationReceivedById(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield this.get("NotificationReceived", e)
            })
        }
        removeNotificationClickedById(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                yield this.remove("NotificationClicked", e)
            })
        }
        removeAllNotificationClicked() {
            return Object(n.a)(this, void 0, void 0, function*() {
                yield this.remove("NotificationClicked")
            })
        }
        resetSentUniqueOutcomes() {
            return Object(n.a)(this, void 0, void 0, function*() {
                const e = (yield this.getAll("SentUniqueOutcome")).map(e=>(e.sentDuringSession = null,
                O.put("SentUniqueOutcome", e)));
                yield Promise.all(e)
            })
        }
        static rebuild() {
            return Object(n.a)(this, void 0, void 0, function*() {
                return Promise.all([O.singletonInstance.remove("Ids"), O.singletonInstance.remove("NotificationOpened"), O.singletonInstance.remove("Options"), O.singletonInstance.remove("NotificationReceived"), O.singletonInstance.remove("NotificationClicked"), O.singletonInstance.remove("SentUniqueOutcome")])
            })
        }
        static on(...e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return O.singletonInstance.emitter.on.apply(O.singletonInstance.emitter, e)
            })
        }
        static getCurrentSession() {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.getSession(p.a)
            })
        }
        static upsertSession(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                yield O.singletonInstance.setSession(e)
            })
        }
        static cleanupCurrentSession() {
            return Object(n.a)(this, void 0, void 0, function*() {
                yield O.singletonInstance.removeSession(p.a)
            })
        }
        static setEmailProfile(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.setEmailProfile(e)
            })
        }
        static getEmailProfile() {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.getEmailProfile()
            })
        }
        static setSMSProfile(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.setSMSProfile(e)
            })
        }
        static getSMSProfile() {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.getSMSProfile()
            })
        }
        static setSubscription(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.setSubscription(e)
            })
        }
        static getSubscription() {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.getSubscription()
            })
        }
        static setProvideUserConsent(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.setProvideUserConsent(e)
            })
        }
        static getProvideUserConsent() {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.getProvideUserConsent()
            })
        }
        static setServiceWorkerState(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.setServiceWorkerState(e)
            })
        }
        static getServiceWorkerState() {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.getServiceWorkerState()
            })
        }
        static setAppState(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.setAppState(e)
            })
        }
        static getAppState() {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.getAppState()
            })
        }
        static setAppConfig(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.setAppConfig(e)
            })
        }
        static getAppConfig() {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.getAppConfig()
            })
        }
        static getExternalUserId() {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.getExternalUserId()
            })
        }
        static getExternalUserIdAuthHash() {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.getExternalUserIdAuthHash()
            })
        }
        static getLastNotificationClicked(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.getLastNotificationClicked(e)
            })
        }
        static removeNotificationClickedById(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.removeNotificationClickedById(e)
            })
        }
        static removeAllNotificationClicked() {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.removeAllNotificationClicked()
            })
        }
        static resetSentUniqueOutcomes() {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.resetSentUniqueOutcomes()
            })
        }
        static getNotificationClickedByUrl(e, t) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.getNotificationClickedByUrl(e, t)
            })
        }
        static getNotificationClickedById(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.getNotificationClickedById(e)
            })
        }
        static getNotificationReceivedById(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.getNotificationReceivedById(e)
            })
        }
        static setExternalUserId(e, t) {
            return Object(n.a)(this, void 0, void 0, function*() {
                yield O.singletonInstance.setExternalUserId(e, t)
            })
        }
        static setDeviceId(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                yield O.singletonInstance.setDeviceId(e)
            })
        }
        static remove(e, t) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.remove(e, t)
            })
        }
        static put(e, t) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.put(e, t)
            })
        }
        static get(e, t) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.get(e, t)
            })
        }
        static getAll(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield O.singletonInstance.getAll(e)
            })
        }
    }
    O.EVENTS = c
}
, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return m
    });
    var n = i(0)
      , o = i(14)
      , s = i(21)
      , r = i(6)
      , a = i(11)
      , c = i(15)
      , l = i(10)
      , d = i(8);
    const u = 4e3
      , g = 3001
      , h = 18080
      , p = ["outcomes", "on_focus"];
    class m {
        static getBuildEnv() {
            return o.a.Production
        }
        static getApiEnv() {
            return o.a.Production
        }
        static getIntegration(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                if (l.a.useSafariLegacyPush())
                    return c.a.Secure;
                const t = window === window.top
                  , i = "https:" === window.location.protocol;
                if (void 0 === e) {
                    if ("undefined" == typeof OneSignal || !OneSignal.context || !OneSignal.context.appConfig)
                        throw new a.a("usingProxyOrigin",a.b.Empty);
                    e = !!OneSignal.context.appConfig.subdomain
                }
                if (t)
                    return i ? e ? c.a.SecureProxy : c.a.Secure : !d.b.isLocalhostAllowedAsSecureOrigin() || "localhost" !== location.hostname && "127.0.0.1" !== location.hostname ? c.a.InsecureProxy : c.a.Secure;
                if (i) {
                    return (yield m.isFrameContextInsecure()) ? c.a.InsecureProxy : e ? c.a.SecureProxy : c.a.Secure
                }
                return c.a.InsecureProxy
            })
        }
        static isFrameContextInsecure() {
            return Object(n.a)(this, void 0, void 0, function*() {
                if (window === window.top || !("serviceWorker"in navigator) || void 0 === navigator.serviceWorker.getRegistration)
                    return !1;
                return !(yield OneSignal.context.serviceWorkerManager.getRegistration())
            })
        }
        static isInsecureOrigin() {
            return "http:" === window.location.protocol
        }
        static getOrigin() {
            return l.a.isBrowser() ? window.location.origin : "undefined" != typeof self && "undefined" != typeof ServiceWorkerGlobalScope ? self.location.origin : "Unknown"
        }
        static getWindowEnv() {
            return "undefined" == typeof window ? "undefined" != typeof self && "undefined" != typeof ServiceWorkerGlobalScope ? r.a.ServiceWorker : r.a.Unknown : window === window.top ? -1 !== location.href.indexOf("initOneSignal") || "/subscribe" === location.pathname && "" === location.search && (location.hostname.endsWith(".onesignal.com") || location.hostname.endsWith(".os.tc") || -1 !== location.hostname.indexOf(".localhost") && m.getBuildEnv() === o.a.Development) ? r.a.OneSignalSubscriptionPopup : r.a.Host : "/webPushIframe" === location.pathname ? r.a.OneSignalProxyFrame : "/webPushModal" === location.pathname ? r.a.OneSignalSubscriptionModal : r.a.CustomIframe
        }
        static getTestEnv() {
            return s.a.None
        }
        static getBuildEnvPrefix(e=m.getBuildEnv()) {
            switch (e) {
            case o.a.Development:
                return "Dev-";
            case o.a.Staging:
                return "Staging-";
            case o.a.Production:
                return "";
            default:
                throw new a.a("buildEnv",a.b.EnumOutOfRange)
            }
        }
        static getOneSignalApiUrl(e=m.getApiEnv(), t) {
            switch (e) {
            case o.a.Development:
                return m.isTurbineEndpoint(t) ? new URL(`https://onesignal.com:${h}/api/v1`) : new URL(`https://onesignal.com:${g}/api/v1`);
            case o.a.Staging:
            case o.a.Production:
                return new URL("https://onesignal.com/api/v1");
            default:
                throw new a.a("buildEnv",a.b.EnumOutOfRange)
            }
        }
        static getOneSignalStaticResourcesUrl() {
            return new URL("https://media.onesignal.com/web-sdk")
        }
        static getOneSignalResourceUrlPath(e=m.getBuildEnv()) {
            let t;
            const i = u;
            switch (e) {
            case o.a.Development:
                t = `http://localhost:${i}`;
                break;
            case o.a.Staging:
                t = "https://localhost";
                break;
            case o.a.Production:
                t = "https://onesignal.com";
                break;
            default:
                throw new a.a("buildEnv",a.b.EnumOutOfRange)
            }
            return new URL(`${t}/sdks`)
        }
        static getOneSignalCssFileName(e=m.getBuildEnv()) {
            switch (e) {
            case o.a.Development:
                return "Dev-OneSignalSDKStyles.css";
            case o.a.Staging:
                return "Staging-OneSignalSDKStyles.css";
            case o.a.Production:
                return "OneSignalSDKStyles.css";
            default:
                throw new a.a("buildEnv",a.b.EnumOutOfRange)
            }
        }
        static isTurbineEndpoint(e) {
            return !!e && p.some(t=>e.indexOf(t) > -1)
        }
    }
}
, function(e, t, i) {
    "use strict";
    var n = i(0)
      , o = i(12);
    class s extends o.a {
        constructor(e="The asynchronous operation has timed out.") {
            super(e),
            this.message = e,
            Object.setPrototypeOf(this, s.prototype)
        }
    }
    var r = i(16);
    i.d(t, "a", function() {
        return a
    });
    class a {
        static contains(e, t) {
            return !!e && -1 !== e.indexOf(t)
        }
        static getConsoleStyle(e) {
            return "code" == e ? 'padding: 0 1px 1px 5px;border: 1px solid #ddd;border-radius: 3px;font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;color: #444;' : "bold" == e ? "font-weight: 600;color: rgb(51, 51, 51);" : "alert" == e ? "font-weight: 600;color: red;" : "event" == e ? "color: green;" : "postmessage" == e ? "color: orange;" : "serviceworkermessage" == e ? "color: purple;" : ""
        }
        static trimUndefined(e) {
            for (const t in e)
                e.hasOwnProperty(t) && void 0 === e[t] && delete e[t];
            return e
        }
        static capitalize(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        static isNullOrUndefined(e) {
            return void 0 === e || null === e
        }
        static valueOrDefault(e, t) {
            return void 0 === e || null === e ? t : e
        }
        static stringify(e) {
            return JSON.stringify(e, (e,t)=>"function" == typeof t ? "[Function]" : t, 4)
        }
        static encodeHashAsUriComponent(e) {
            let t = "";
            const i = Object.keys(e);
            for (const n of i) {
                const i = e[n];
                t += `${encodeURIComponent(n)}=${encodeURIComponent(i)}`
            }
            return t
        }
        static timeoutPromise(e, t) {
            const i = new Promise((e,i)=>{
                setTimeout(()=>{
                    i(new s)
                }
                , t)
            }
            );
            return Promise.race([e, i])
        }
        static getValueOrDefault(e, t) {
            return void 0 !== e && null !== e ? e : t
        }
        static padStart(e, t, i) {
            let n = e;
            for (; n.length < t; )
                n = i + n;
            return n
        }
        static parseVersionString(e) {
            const t = e.toString().split(".")
              , i = a.padStart(t[0], 2, "0");
            let n;
            return n = t[1] ? a.padStart(t[1], 2, "0") : "00",
            Number(`${i}.${n}`)
        }
        static lastParts(e, t, i) {
            const n = e.split(t)
              , o = Math.max(n.length - i, 0);
            return n.slice(o).join(t)
        }
        static enforceAppId(e) {
            if (!e)
                throw new Error("App id cannot be empty")
        }
        static enforcePlayerId(e) {
            if (!e)
                throw new Error("Player id cannot be empty")
        }
        static enforceAppIdAndPlayerId(e, t, i) {
            return Object(n.a)(this, void 0, void 0, function*() {
                a.enforceAppId(e),
                a.enforcePlayerId(t);
                try {
                    return yield i()
                } catch (e) {
                    throw e && Array.isArray(e.errors) && e.errors.length > 0 && a.contains(e.errors[0], "app_id not found") ? new r.a(r.b.MissingAppId) : e
                }
            })
        }
        static sortArrayOfObjects(e, t, i=!1, n=!0) {
            const o = n ? e : e.slice();
            return o.sort((e,n)=>{
                const o = t(e)
                  , s = t(n);
                return o > s ? i ? -1 : 1 : o < s ? i ? 1 : -1 : 0
            }
            ),
            o
        }
    }
    t.b = a
}
, function(e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function() {
        return n
    }),
    function(e) {
        e.ServiceWorker = "ServiceWorker",
        e.Host = "Host",
        e.OneSignalSubscriptionPopup = "Popup",
        e.OneSignalSubscriptionModal = "Modal",
        e.OneSignalProxyFrame = "ProxyFrame",
        e.CustomIframe = "CustomFrame",
        e.Unknown = "Unknown"
    }(n || (n = {}))
}
, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return g
    });
    var n = i(0)
      , o = i(10)
      , s = i(4)
      , r = i(6)
      , a = i(1)
      , c = i(5);
    const l = ["notifyButtonHovering", "notifyButtonHover", "notifyButtonButtonClick", "notifyButtonLauncherClick", "animatedElementHiding", "animatedElementHidden", "animatedElementShowing", "animatedElementShown", "activeAnimatedElementActivating", "activeAnimatedElementActive", "activeAnimatedElementInactivating", "activeAnimatedElementInactive", "dbRetrieved", "dbSet", "testEvent"]
      , d = ["onesignal.prompt.custom.clicked", "onesignal.prompt.native.permissionchanged", "onesignal.subscription.changed", "onesignal.internal.subscriptionset", "dbRebuilt", "initialize", "subscriptionSet", "sendWelcomeNotification", "subscriptionChange", "notificationPermissionChange", "dbSet", "register", "notificationDisplay", "notificationDismiss", "notificationClick", "permissionPromptDisplay", "testWouldDisplay", "testInitOptionDisabled", "popupWindowTimeout"]
      , u = {
        notificationPermissionChange: "onesignal.prompt.native.permissionchanged",
        subscriptionChange: "onesignal.subscription.changed",
        customPromptClick: "onesignal.prompt.custom.clicked"
    };
    class g {
        static trigger(e, t, i=null) {
            return Object(n.a)(this, void 0, void 0, function*() {
                if (!c.b.contains(l, e)) {
                    const n = t;
                    let o = c.b.capitalize(s.a.getWindowEnv().toString());
                    i && (o = `${o} ⬸ ${c.b.capitalize(i)}`),
                    n || !1 === n ? a.a.debug(`(${o}) » %c ${e}:`, c.b.getConsoleStyle("event"), n) : a.a.debug(`(${o}) » %c ${e}`, c.b.getConsoleStyle("event"))
                }
                if (o.a.isBrowser()) {
                    if (e === OneSignal.EVENTS.SDK_INITIALIZED) {
                        if (OneSignal.initialized)
                            return;
                        OneSignal.initialized = !0
                    }
                    yield OneSignal.emitter.emit(e, t)
                }
                if (u.hasOwnProperty(e)) {
                    const i = u[e];
                    g._triggerLegacy(i, t)
                }
                if (o.a.isBrowser() && (s.a.getWindowEnv() === r.a.OneSignalSubscriptionPopup || s.a.getWindowEnv() === r.a.OneSignalProxyFrame)) {
                    opener || parent ? c.b.contains(d, e) && (s.a.getWindowEnv() === r.a.OneSignalSubscriptionPopup ? OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, {
                        eventName: e,
                        eventData: t
                    }) : OneSignal.proxyFrame.retriggerRemoteEvent(e, t)) : a.a.error(`Could not send event '${e}' back to host page because no creator (opener or parent) found!`)
                }
            })
        }
        static _triggerLegacy(e, t) {
            const i = new CustomEvent(e,{
                bubbles: !0,
                cancelable: !0,
                detail: t
            });
            window.dispatchEvent(i)
        }
    }
}
, function(e, t, i) {
    "use strict";
    (function(e) {
        i.d(t, "a", function() {
            return d
        });
        var n = i(9)
          , o = i.n(n)
          , s = i(4)
          , r = i(10)
          , a = i(6)
          , c = i(1)
          , l = i(5);
        class d {
            static getBaseUrl() {
                return location.origin
            }
            static isLocalhostAllowedAsSecureOrigin() {
                return OneSignal.config && OneSignal.config.userConfig && !0 === OneSignal.config.userConfig.allowLocalhostAsSecureOrigin
            }
            static isUsingSubscriptionWorkaround() {
                const e = s.a.getWindowEnv();
                if (!OneSignal.config)
                    throw new Error(`(${e.toString()}) isUsingSubscriptionWorkaround() cannot be called until OneSignal.config exists.`);
                if (o.a.safari)
                    return !1;
                const t = this.isLocalhostAllowedAsSecureOrigin();
                return d.internalIsUsingSubscriptionWorkaround(OneSignal.config.subdomain, t)
            }
            static internalIsUsingSubscriptionWorkaround(e, t) {
                if (o.a.safari)
                    return !1;
                if (!0 === t && ("localhost" === location.hostname || "127.0.0.1" === location.hostname))
                    return !1;
                const i = s.a.getWindowEnv();
                return !(i !== a.a.Host && i !== a.a.CustomIframe || !e && "http:" !== location.protocol)
            }
            static redetectBrowserUserAgent() {
                return "" === o.a.name && "" === o.a.version ? o.a._detect(navigator.userAgent) : o.a
            }
            static isValidUuid(e) {
                return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(e)
            }
            static getRandomUuid() {
                let t = "";
                const i = "undefined" == typeof window ? e.crypto : window.crypto || window.msCrypto;
                return t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, i ? function(e) {
                    var t = i.getRandomValues(new Uint8Array(1))[0] % 16 | 0;
                    return ("x" == e ? t : 3 & t | 8).toString(16)
                }
                : function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" == e ? t : 3 & t | 8).toString(16)
                }
                )
            }
            static logMethodCall(e, ...t) {
                return c.a.debug(`Called %c ${e}(${t.map(l.a.stringify).join(", ")})`, l.a.getConsoleStyle("code"), ".")
            }
            static isHttps() {
                return d.isSafari() ? "https:" === window.location.protocol : !d.isUsingSubscriptionWorkaround()
            }
            static isSafari() {
                return r.a.isBrowser() && void 0 !== window.safari
            }
        }
        t.b = d
    }
    ).call(this, i(29))
}
, function(e, t, i) {
    var n;
    n = function() {
        var e = !0;
        function t(t) {
            function i(e) {
                var i = t.match(e);
                return i && i.length > 1 && i[1] || ""
            }
            var n, o, s, r = i(/(ipod|iphone|ipad)/i).toLowerCase(), a = !/like android/i.test(t) && /android/i.test(t), c = /nexus\s*[0-6]\s*/i.test(t), l = !c && /nexus\s*[0-9]+/i.test(t), d = /CrOS/.test(t), u = /silk/i.test(t), g = /sailfish/i.test(t), h = /tizen/i.test(t), p = /(web|hpw)os/i.test(t), m = /windows phone/i.test(t), b = (/SamsungBrowser/i.test(t),
            !m && /windows/i.test(t)), f = !r && !u && /macintosh/i.test(t), S = !a && !g && !h && !p && /linux/i.test(t), v = i(/edge\/(\d+(\.\d+)?)/i), O = i(/version\/(\d+(\.\d+)?)/i), y = /tablet/i.test(t) && !/tablet pc/i.test(t), w = !y && /[^-]mobi/i.test(t), E = /xbox/i.test(t);
            /opera/i.test(t) ? n = {
                name: "Opera",
                opera: e,
                version: O || i(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
            } : /opr\/|opios/i.test(t) ? n = {
                name: "Opera",
                opera: e,
                version: i(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || O
            } : /SamsungBrowser/i.test(t) ? n = {
                name: "Samsung Internet for Android",
                samsungBrowser: e,
                version: O || i(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
            } : /coast/i.test(t) ? n = {
                name: "Opera Coast",
                coast: e,
                version: O || i(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
            } : /yabrowser/i.test(t) ? n = {
                name: "Yandex Browser",
                yandexbrowser: e,
                version: O || i(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
            } : /ucbrowser/i.test(t) ? n = {
                name: "UC Browser",
                ucbrowser: e,
                version: i(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
            } : /mxios/i.test(t) ? n = {
                name: "Maxthon",
                maxthon: e,
                version: i(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
            } : /epiphany/i.test(t) ? n = {
                name: "Epiphany",
                epiphany: e,
                version: i(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
            } : /puffin/i.test(t) ? n = {
                name: "Puffin",
                puffin: e,
                version: i(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
            } : /sleipnir/i.test(t) ? n = {
                name: "Sleipnir",
                sleipnir: e,
                version: i(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
            } : /k-meleon/i.test(t) ? n = {
                name: "K-Meleon",
                kMeleon: e,
                version: i(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
            } : m ? (n = {
                name: "Windows Phone",
                windowsphone: e
            },
            v ? (n.msedge = e,
            n.version = v) : (n.msie = e,
            n.version = i(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
                name: "Internet Explorer",
                msie: e,
                version: i(/(?:msie |rv:)(\d+(\.\d+)?)/i)
            } : d ? n = {
                name: "Chrome",
                chromeos: e,
                chromeBook: e,
                chrome: e,
                version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            } : /chrome.+? edge/i.test(t) ? n = {
                name: "Microsoft Edge",
                msedge: e,
                version: v
            } : /vivaldi/i.test(t) ? n = {
                name: "Vivaldi",
                vivaldi: e,
                version: i(/vivaldi\/(\d+(\.\d+)?)/i) || O
            } : g ? n = {
                name: "Sailfish",
                sailfish: e,
                version: i(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
            } : /seamonkey\//i.test(t) ? n = {
                name: "SeaMonkey",
                seamonkey: e,
                version: i(/seamonkey\/(\d+(\.\d+)?)/i)
            } : /firefox|iceweasel|fxios/i.test(t) ? (n = {
                name: "Firefox",
                firefox: e,
                version: i(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
            },
            /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.firefoxos = e)) : u ? n = {
                name: "Amazon Silk",
                silk: e,
                version: i(/silk\/(\d+(\.\d+)?)/i)
            } : /phantom/i.test(t) ? n = {
                name: "PhantomJS",
                phantom: e,
                version: i(/phantomjs\/(\d+(\.\d+)?)/i)
            } : /slimerjs/i.test(t) ? n = {
                name: "SlimerJS",
                slimer: e,
                version: i(/slimerjs\/(\d+(\.\d+)?)/i)
            } : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? n = {
                name: "BlackBerry",
                blackberry: e,
                version: O || i(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
            } : p ? (n = {
                name: "WebOS",
                webos: e,
                version: O || i(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
            },
            /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
                name: "Bada",
                bada: e,
                version: i(/dolfin\/(\d+(\.\d+)?)/i)
            } : h ? n = {
                name: "Tizen",
                tizen: e,
                version: i(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || O
            } : /qupzilla/i.test(t) ? n = {
                name: "QupZilla",
                qupzilla: e,
                version: i(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || O
            } : /chromium/i.test(t) ? n = {
                name: "Chromium",
                chromium: e,
                version: i(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || O
            } : /chrome|crios|crmo/i.test(t) ? n = {
                name: "Chrome",
                chrome: e,
                version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            } : a ? n = {
                name: "Android",
                version: O
            } : /safari|applewebkit/i.test(t) ? (n = {
                name: "Safari",
                safari: e
            },
            O && (n.version = O)) : r ? (n = {
                name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
            },
            O && (n.version = O)) : n = /googlebot/i.test(t) ? {
                name: "Googlebot",
                googlebot: e,
                version: i(/googlebot\/(\d+(\.\d+))/i) || O
            } : {
                name: i(/^(.*)\/(.*) /),
                version: (o = /^(.*)\/(.*) /,
                s = t.match(o),
                s && s.length > 1 && s[2] || "")
            },
            !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink",
            n.blink = e) : (n.name = n.name || "Webkit",
            n.webkit = e),
            !n.version && O && (n.version = O)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko",
            n.gecko = e,
            n.version = n.version || i(/gecko\/(\d+(\.\d+)?)/i)),
            n.windowsphone || n.msedge || !a && !n.silk ? n.windowsphone || n.msedge || !r ? f ? n.mac = e : E ? n.xbox = e : b ? n.windows = e : S && (n.linux = e) : (n[r] = e,
            n.ios = e) : n.android = e;
            var I = "";
            n.windows ? I = function(e) {
                switch (e) {
                case "NT":
                    return "NT";
                case "XP":
                    return "XP";
                case "NT 5.0":
                    return "2000";
                case "NT 5.1":
                    return "XP";
                case "NT 5.2":
                    return "2003";
                case "NT 6.0":
                    return "Vista";
                case "NT 6.1":
                    return "7";
                case "NT 6.2":
                    return "8";
                case "NT 6.3":
                    return "8.1";
                case "NT 10.0":
                    return "10";
                default:
                    return
                }
            }(i(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? I = i(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? I = (I = i(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? I = (I = i(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? I = i(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? I = i(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? I = i(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? I = i(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (I = i(/tizen[\/\s](\d+(\.\d+)*)/i)),
            I && (n.osversion = I);
            var P = !n.windows && I.split(".")[0];
            return y || l || "ipad" == r || a && (3 == P || P >= 4 && !w) || n.silk ? n.tablet = e : (w || "iphone" == r || "ipod" == r || a || c || n.blackberry || n.webos || n.bada) && (n.mobile = e),
            n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e,
            n
        }
        var i = t("undefined" != typeof navigator && navigator.userAgent || "");
        function n(e) {
            return e.split(".").length
        }
        function o(e, t) {
            var i, n = [];
            if (Array.prototype.map)
                return Array.prototype.map.call(e, t);
            for (i = 0; i < e.length; i++)
                n.push(t(e[i]));
            return n
        }
        function s(e) {
            for (var t = Math.max(n(e[0]), n(e[1])), i = o(e, function(e) {
                var i = t - n(e);
                return o((e += new Array(i + 1).join(".0")).split("."), function(e) {
                    return new Array(20 - e.length).join("0") + e
                }).reverse()
            }); --t >= 0; ) {
                if (i[0][t] > i[1][t])
                    return 1;
                if (i[0][t] !== i[1][t])
                    return -1;
                if (0 === t)
                    return 0
            }
        }
        function r(e, n, o) {
            var r = i;
            "string" == typeof n && (o = n,
            n = void 0),
            void 0 === n && (n = !1),
            o && (r = t(o));
            var a = "" + r.version;
            for (var c in e)
                if (e.hasOwnProperty(c) && r[c]) {
                    if ("string" != typeof e[c])
                        throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
                    return s([a, e[c]]) < 0
                }
            return n
        }
        return i.test = function(e) {
            for (var t = 0; t < e.length; ++t) {
                var n = e[t];
                if ("string" == typeof n && n in i)
                    return !0
            }
            return !1
        }
        ,
        i.isUnsupportedBrowser = r,
        i.compareVersions = s,
        i.check = function(e, t, i) {
            return !r(e, t, i)
        }
        ,
        i._detect = t,
        i
    }
    ,
    void 0 !== e && e.exports ? e.exports = n() : i(30)("bowser", n)
}
, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return c
    });
    var n = i(4)
      , o = i(6)
      , s = i(9)
      , r = i.n(s)
      , a = i(25);
    class c {
        static isBrowser() {
            return "undefined" != typeof window
        }
        static useSafariLegacyPush() {
            var e;
            return this.isBrowser() && void 0 != (null === (e = window.safari) || void 0 === e ? void 0 : e.pushNotification)
        }
        static useSafariVapidPush() {
            return r.a.safari && Object(a.b)() && !this.useSafariLegacyPush()
        }
        static version() {
            return Number(151605)
        }
        static get TRADITIONAL_CHINESE_LANGUAGE_TAG() {
            return ["tw", "hant"]
        }
        static get SIMPLIFIED_CHINESE_LANGUAGE_TAG() {
            return ["cn", "hans"]
        }
        static getLanguage() {
            let e = navigator.language;
            if (e) {
                const t = (e = e.toLowerCase()).split("-");
                if ("zh" == t[0]) {
                    for (const e of c.TRADITIONAL_CHINESE_LANGUAGE_TAG)
                        if (-1 !== t.indexOf(e))
                            return "zh-Hant";
                    for (const e of c.SIMPLIFIED_CHINESE_LANGUAGE_TAG)
                        if (-1 !== t.indexOf(e))
                            return "zh-Hans";
                    return "zh-Hant"
                }
                return t[0].substring(0, 2)
            }
            return "en"
        }
        static supportsServiceWorkers() {
            switch (n.a.getWindowEnv()) {
            case o.a.ServiceWorker:
                return !0;
            default:
                return "undefined" != typeof navigator && "serviceWorker"in navigator
            }
        }
        static getSdkStylesVersionHash() {
            return "undefined" == typeof __SRC_STYLESHEETS_MD5_HASH__ ? "2" : __SRC_STYLESHEETS_MD5_HASH__
        }
    }
}
, function(e, t, i) {
    "use strict";
    i.d(t, "b", function() {
        return n
    }),
    i.d(t, "a", function() {
        return InvalidArgumentError
    });
    var n, o = i(12);
    !function(e) {
        e[e.Empty = 0] = "Empty",
        e[e.Malformed = 1] = "Malformed",
        e[e.EnumOutOfRange = 2] = "EnumOutOfRange"
    }(n || (n = {}));
    class InvalidArgumentError extends o.a {
        constructor(e, t) {
            let i;
            switch (t) {
            case n.Empty:
                i = `Supply a non-empty value to '${e}'.`;
                break;
            case n.Malformed:
                i = `The value for '${e}' was malformed.`;
                break;
            case n.EnumOutOfRange:
                i = `The value for '${e}' was out of range of the expected input enum.`
            }
            super(i),
            this.argument = e,
            this.reason = n[t],
            Object.setPrototypeOf(this, InvalidArgumentError.prototype)
        }
    }
}
, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return n
    });
    class n extends Error {
        constructor(e="") {
            super(e),
            Object.defineProperty(this, "message", {
                configurable: !0,
                enumerable: !1,
                value: e,
                writable: !0
            }),
            Object.defineProperty(this, "name", {
                configurable: !0,
                enumerable: !1,
                value: this.constructor.name,
                writable: !0
            }),
            Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(this, this.constructor) : (Object.defineProperty(this, "stack", {
                configurable: !0,
                enumerable: !1,
                value: new Error(e).stack,
                writable: !0
            }),
            Object.setPrototypeOf(this, n.prototype))
        }
    }
}
, function(e, t, i) {
    "use strict";
    var n, o;
    i.d(t, "c", function() {
        return n
    }),
    i.d(t, "b", function() {
        return o
    }),
    i.d(t, "a", function() {
        return s
    }),
    i.d(t, "d", function() {
        return r
    }),
    function(e) {
        e.Active = "active",
        e.Inactive = "inactive",
        e.Expired = "expired"
    }(n || (n = {})),
    function(e) {
        e[e.PlayerCreate = 1] = "PlayerCreate",
        e[e.PlayerOnSession = 2] = "PlayerOnSession",
        e[e.VisibilityVisible = 3] = "VisibilityVisible",
        e[e.VisibilityHidden = 4] = "VisibilityHidden",
        e[e.BeforeUnload = 5] = "BeforeUnload",
        e[e.PageRefresh = 6] = "PageRefresh",
        e[e.Focus = 7] = "Focus",
        e[e.Blur = 8] = "Blur"
    }(o || (o = {}));
    const s = "oneSignalSession";
    function r(e) {
        const t = (new Date).getTime()
          , i = e && e.sessionKey || s
          , o = e && e.notificationId || null;
        return {
            sessionKey: i,
            appId: e.appId,
            deviceId: e.deviceId,
            deviceType: e.deviceType,
            startTimestamp: t,
            accumulatedDuration: 0,
            notificationId: o,
            status: n.Active,
            lastDeactivatedTimestamp: null,
            lastActivatedTimestamp: t
        }
    }
}
, function(e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function() {
        return n
    }),
    function(e) {
        e.Development = "Development",
        e.Staging = "Staging",
        e.Production = "Production"
    }(n || (n = {}))
}
, function(e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function() {
        return n
    }),
    function(e) {
        e.Secure = "Secure",
        e.SecureProxy = "Secure Proxy",
        e.InsecureProxy = "Insecure Proxy"
    }(n || (n = {}))
}
, function(e, t, i) {
    "use strict";
    i.d(t, "b", function() {
        return n
    }),
    i.d(t, "a", function() {
        return s
    });
    var n, o = i(12);
    !function(e) {
        e[e.MissingAppId = 0] = "MissingAppId"
    }(n || (n = {}));
    class s extends o.a {
        constructor(e) {
            let t;
            switch (e) {
            case n.MissingAppId:
                t = "The API call is missing an app ID."
            }
            super(t),
            Object.setPrototypeOf(this, s.prototype)
        }
    }
}
, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return r
    });
    var n = i(0)
      , o = i(3)
      , s = i(7);
    class r {
        static triggerNotificationPermissionChanged(e=!1) {
            return Object(n.a)(this, void 0, void 0, function*() {
                if (!r.executing) {
                    r.executing = !0;
                    try {
                        yield r.privateTriggerNotificationPermissionChanged(e)
                    } finally {
                        r.executing = !1
                    }
                }
            })
        }
        static privateTriggerNotificationPermissionChanged(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                const t = yield OneSignal.privateGetNotificationPermission();
                (t !== (yield o.a.get("Options", "notificationPermission")) || e) && (yield o.a.put("Options", {
                    key: "notificationPermission",
                    value: t
                }),
                s.a.trigger(OneSignal.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, {
                    to: t
                }))
            })
        }
    }
    r.executing = !1
}
, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return o
    });
    var n = i(0);
    class o {
        constructor() {
            this._events = {}
        }
        on(e, t) {
            return this._events[e] = this._events[e] || [],
            this._events[e].push(t),
            this
        }
        once(e, t) {
            const i = this;
            function n() {
                i.off(e, n),
                t.apply(this, arguments)
            }
            return n.listener = t,
            this.on(e, n),
            this
        }
        off(e, t) {
            const i = this._events[e];
            if (void 0 !== i) {
                for (let e = 0; e < i.length; e += 1)
                    if (i[e] === t || i[e].listener === t) {
                        i.splice(e, 1);
                        break
                    }
                0 === i.length && this.removeAllListeners(e)
            }
            return this
        }
        removeAllListeners(e) {
            try {
                e ? delete this._events[e] : this._events = {}
            } catch (e) {}
            return this
        }
        listeners(e) {
            try {
                return this._events[e]
            } catch (e) {
                return
            }
        }
        numberOfListeners(e) {
            const t = this.listeners(e);
            return t ? t.length : 0
        }
        emit(...e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                const t = e.shift();
                let i = this._events[t];
                if (void 0 !== i) {
                    const t = (i = i.slice(0)).length;
                    for (let n = 0; n < t; n += 1)
                        yield i[n].apply(this, e)
                }
                return this
            })
        }
    }
}
, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return n
    });
    class n {
        constructor(e, t, i) {
            this.subscriptionId = e,
            this.identifier = t,
            this.identifierAuthHash = i
        }
        serialize() {
            return {
                identifierAuthHash: this.identifierAuthHash,
                smsNumber: this.identifier,
                smsId: this.subscriptionId
            }
        }
        static deserialize(e) {
            return new n(e.smsId,e.smsNumber,e.identifierAuthHash)
        }
    }
}
, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return n
    });
    class n {
        constructor(e, t, i) {
            this.subscriptionId = e,
            this.identifier = t,
            this.identifierAuthHash = i
        }
        serialize() {
            return {
                identifierAuthHash: this.identifierAuthHash,
                emailAddress: this.identifier,
                emailId: this.subscriptionId
            }
        }
        static deserialize(e) {
            return new n(e.emailId,e.emailAddress,e.identifierAuthHash)
        }
    }
}
, function(e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function() {
        return n
    }),
    function(e) {
        e.None = "None",
        e.UnitTesting = "Unit Testing"
    }(n || (n = {}))
}
, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return o
    });
    var n = i(10);
    class o {
        static decodeHtmlEntities(e) {
            return n.a.isBrowser() && (o.decodeTextArea || (o.decodeTextArea = document.createElement("textarea"))),
            o.decodeTextArea ? (o.decodeTextArea.innerHTML = e,
            o.decodeTextArea.value) : e
        }
    }
    o.decodeTextArea = null
}
, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return n
    });
    class n {
        serialize() {
            return {
                deviceId: this.deviceId,
                subscriptionToken: this.subscriptionToken,
                optedOut: this.optedOut,
                createdAt: this.createdAt,
                expirationTime: this.expirationTime
            }
        }
        static deserialize(e) {
            const t = new n;
            return t.deviceId = e.deviceId,
            t.subscriptionToken = e.subscriptionToken,
            t.optedOut = e.optedOut,
            t.createdAt = e.createdAt,
            t.expirationTime = e.expirationTime,
            t
        }
    }
}
, function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
        return c
    });
    var n = i(0)
      , o = i(18)
      , s = i(1)
      , r = i(5);
    const a = 3;
    class c {
        constructor(e) {
            this.databaseName = e,
            this.emitter = new o.a
        }
        open(e) {
            return new Promise(t=>{
                let i = void 0;
                try {
                    i = indexedDB.open(e, a)
                } catch (e) {}
                if (!i)
                    return null;
                i.onerror = this.onDatabaseOpenError,
                i.onblocked = this.onDatabaseOpenBlocked,
                i.onupgradeneeded = this.onDatabaseUpgradeNeeded,
                i.onsuccess = (()=>{
                    this.database = i.result,
                    this.database.onerror = this.onDatabaseError,
                    this.database.onversionchange = this.onDatabaseVersionChange,
                    t(this.database)
                }
                )
            }
            )
        }
        ensureDatabaseOpen() {
            return Object(n.a)(this, void 0, void 0, function*() {
                return this.openLock || (this.openLock = this.open(this.databaseName)),
                yield this.openLock
            })
        }
        onDatabaseOpenError(e) {
            e.preventDefault();
            const t = e.target.error;
            r.b.contains(t.message, "The operation failed for reasons unrelated to the database itself and not covered by any other error code") || r.b.contains(t.message, "A mutation operation was attempted on a database that did not allow mutations") ? s.a.warn("OneSignal: IndexedDb web storage is not available on this origin since this profile's IndexedDb schema has been upgraded in a newer version of Firefox. See: https://bugzilla.mozilla.org/show_bug.cgi?id=1236557#c6") : s.a.warn("OneSignal: Fatal error opening IndexedDb database:", t)
        }
        onDatabaseError(e) {
            s.a.debug("IndexedDb: Generic database error", e.target.errorCode)
        }
        onDatabaseOpenBlocked() {
            s.a.debug("IndexedDb: Blocked event")
        }
        onDatabaseVersionChange(e) {
            s.a.debug("IndexedDb: versionchange event")
        }
        onDatabaseUpgradeNeeded(e) {
            s.a.debug("IndexedDb: Database is being rebuilt or upgraded (upgradeneeded event).");
            const t = e.target.result;
            e.oldVersion < 1 && (t.createObjectStore("Ids", {
                keyPath: "type"
            }),
            t.createObjectStore("NotificationOpened", {
                keyPath: "url"
            }),
            t.createObjectStore("Options", {
                keyPath: "key"
            })),
            e.oldVersion < 2 && (t.createObjectStore("Sessions", {
                keyPath: "sessionKey"
            }),
            t.createObjectStore("NotificationReceived", {
                keyPath: "notificationId"
            }),
            t.createObjectStore("NotificationClicked", {
                keyPath: "notificationId"
            })),
            e.oldVersion < 3 && t.createObjectStore("SentUniqueOutcome", {
                keyPath: "outcomeName"
            }),
            "undefined" != typeof OneSignal && (OneSignal._isNewVisitor = !0)
        }
        get(e, t) {
            return Object(n.a)(this, void 0, void 0, function*() {
                const i = yield this.ensureDatabaseOpen();
                return t ? yield new Promise((n,o)=>{
                    const s = i.transaction(e).objectStore(e).get(t);
                    s.onsuccess = (()=>{
                        n(s.result)
                    }
                    ),
                    s.onerror = (()=>{
                        o(s.error)
                    }
                    )
                }
                ) : yield new Promise((t,n)=>{
                    const o = {}
                      , s = i.transaction(e).objectStore(e).openCursor();
                    s.onsuccess = (e=>{
                        const i = e.target.result;
                        if (i) {
                            const e = i.key;
                            o[e] = i.value,
                            i.continue()
                        } else
                            t(o)
                    }
                    ),
                    s.onerror = (()=>{
                        n(s.error)
                    }
                    )
                }
                )
            })
        }
        getAll(e) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield new Promise((t,i)=>Object(n.a)(this, void 0, void 0, function*() {
                    const n = (yield this.ensureDatabaseOpen()).transaction(e).objectStore(e).openCursor()
                      , o = [];
                    n.onsuccess = (e=>{
                        const i = e.target.result;
                        i ? (o.push(i.value),
                        i.continue()) : t(o)
                    }
                    ),
                    n.onerror = (()=>{
                        i(n.error)
                    }
                    )
                }))
            })
        }
        put(e, t) {
            return Object(n.a)(this, void 0, void 0, function*() {
                return yield this.ensureDatabaseOpen(),
                yield new Promise((i,n)=>{
                    try {
                        const o = this.database.transaction([e], "readwrite").objectStore(e).put(t);
                        o.onsuccess = (()=>{
                            i(t)
                        }
                        ),
                        o.onerror = (e=>{
                            s.a.error("Database PUT Transaction Error:", e),
                            n(e)
                        }
                        )
                    } catch (e) {
                        s.a.error("Database PUT Error:", e),
                        n(e)
                    }
                }
                )
            })
        }
        remove(e, t) {
            return Object(n.a)(this, void 0, void 0, function*() {
                const i = yield this.ensureDatabaseOpen();
                return new Promise((n,o)=>{
                    try {
                        const r = i.transaction([e], "readwrite").objectStore(e)
                          , a = t ? r.delete(t) : r.clear();
                        a.onsuccess = (()=>{
                            n(t)
                        }
                        ),
                        a.onerror = (e=>{
                            s.a.error("Database REMOVE Transaction Error:", e),
                            o(e)
                        }
                        )
                    } catch (e) {
                        s.a.error("Database REMOVE Error:", e),
                        o(e)
                    }
                }
                )
            })
        }
    }
}
, function(e, t, i) {
    "use strict";
    function n() {
        return window.top !== window && "Apple Computer, Inc." === navigator.vendor && "MacIntel" === navigator.platform
    }
    function o() {
        return "undefined" != typeof PushSubscriptionOptions && PushSubscriptionOptions.prototype.hasOwnProperty("applicationServerKey")
    }
    i.d(t, "a", function() {
        return n
    }),
    i.d(t, "b", function() {
        return o
    })
}
, function(e, t) {
    e.exports = function(e, t, o) {
        "function" == typeof t && (o = t,
        t = {});
        t || (t = {});
        var s, r, a = t.prefix || "__jp", c = t.name || a + i++, l = t.param || "callback", d = null != t.timeout ? t.timeout : 6e4, u = encodeURIComponent, g = document.getElementsByTagName("script")[0] || document.head;
        d && (r = setTimeout(function() {
            h(),
            o && o(new Error("Timeout"))
        }, d));
        function h() {
            s.parentNode && s.parentNode.removeChild(s),
            window[c] = n,
            r && clearTimeout(r)
        }
        return window[c] = function(e) {
            h(),
            o && o(null, e)
        }
        ,
        e = (e += (~e.indexOf("?") ? "&" : "?") + l + "=" + u(c)).replace("?&", "?"),
        (s = document.createElement("script")).src = e,
        g.parentNode.insertBefore(s, g),
        function() {
            window[c] && h()
        }
    }
    ;
    var i = 0;
    function n() {}
}
, function(e, t, i) {
    "use strict";
    i.r(t);
    var n = i(1)
      , o = i(2);
    class s {
        static doReplay(e) {
            e && (Array.isArray(e) ? s.processAsArray(e) : e.constructor && "OneSignalStubES6" === e.constructor.name ? s.processAsES6Stub(e) : n.a.error("window.OneSignal is an unexpected type! Should be an Array, OneSignalStubES6, or undefined."))
        }
        static processAsArray(e) {
            for (const t of e)
                try {
                    OneSignal.push(t)
                } catch (e) {
                    n.a.error(e)
                }
        }
        static processAsES6Stub(e) {
            e.SERVICE_WORKER_PATH && (OneSignal.SERVICE_WORKER_PATH = e.SERVICE_WORKER_PATH),
            e.currentLogLevel && OneSignal.log.setLevel(e.currentLogLevel),
            e.SERVICE_WORKER_PARAM && (OneSignal.SERVICE_WORKER_PARAM = e.SERVICE_WORKER_PARAM),
            e.preExistingArray && s.processAsArray(e.preExistingArray);
            for (const t of e.directFunctionCallsArray) {
                const e = OneSignal[t.functionName].apply(OneSignal, t.args);
                t.delayedPromise && e instanceof Promise && e.then(function(...e) {
                    t.delayedPromise && t.delayedPromise.resolve && t.delayedPromise.resolve.apply(null, e)
                }).catch(function(...e) {
                    t.delayedPromise && t.delayedPromise.reject && t.delayedPromise.reject.apply(null, e)
                })
            }
        }
    }
    "undefined" != typeof window && function() {
        if (Object(o.p)(),
        Object(o.n)() > 1)
            return n.a.warn("OneSignal: The web push SDK is included more than once. For optimal performance, please include our SDK only once on your page."),
            void n.a.debug("OneSignal: Exiting from SDK initialization to prevent double-initialization errors. " + `Occurred ${Object(o.n)()} times.`);
        const e = window.OneSignal;
        window.OneSignal = i(28).default,
        s.doReplay(e)
    }()
}
, function(e, t, i) {
    "use strict";
    i.r(t);
    var n, o, s, r, a, c, l, d = i(0), u = i(9), g = i.n(u), h = i(10), InvalidArgumentError = i(11), p = i(12);
    !function(e) {
        e[e.HttpsPermissionRequest = "HTTPS permission request"] = "HttpsPermissionRequest",
        e[e.FullscreenHttpPermissionMessage = "fullscreen HTTP permission message"] = "FullscreenHttpPermissionMessage",
        e[e.FullscreenHttpsPermissionMessage = "fullscreen HTTPS permission message"] = "FullscreenHttpsPermissionMessage",
        e[e.SlidedownPermissionMessage = "slidedown permission message"] = "SlidedownPermissionMessage",
        e[e.SubscriptionBell = "subscription bell"] = "SubscriptionBell"
    }(n || (n = {})),
    (s = o || (o = {}))[s.MissingAppId = 0] = "MissingAppId",
    s[s.RedundantPermissionMessage = 1] = "RedundantPermissionMessage",
    s[s.PushPermissionAlreadyGranted = 2] = "PushPermissionAlreadyGranted",
    s[s.UnsupportedEnvironment = 3] = "UnsupportedEnvironment",
    s[s.MissingDomElement = 4] = "MissingDomElement",
    s[s.ServiceWorkerNotActivated = 5] = "ServiceWorkerNotActivated",
    s[s.NoProxyFrame = 6] = "NoProxyFrame";
    class m extends p.a {
        constructor(e, t) {
            let i;
            switch (e) {
            case o.MissingAppId:
                i = "Missing required app ID.";
                break;
            case o.RedundantPermissionMessage:
                let s = "";
                t && t.permissionPromptType && (s = `(${n[t.permissionPromptType]})`),
                i = `Another permission message ${s} is being displayed.`;
                break;
            case o.PushPermissionAlreadyGranted:
                i = "Push permission has already been granted.";
                break;
            case o.UnsupportedEnvironment:
                i = "The current environment does not support this operation.";
                break;
            case o.ServiceWorkerNotActivated:
                i = "The service worker must be activated first.";
                break;
            case o.NoProxyFrame:
                i = "No proxy frame."
            }
            super(i),
            this.description = o[e],
            this.reason = e,
            Object.setPrototypeOf(this, m.prototype)
        }
    }
    (a = r || (r = {}))[a.Unknown = 0] = "Unknown",
    a[a.NoDeviceId = 1] = "NoDeviceId",
    a[a.NoEmailSet = 2] = "NoEmailSet",
    a[a.NoSMSSet = 3] = "NoSMSSet",
    a[a.OptedOut = 4] = "OptedOut";
    class b extends p.a {
        constructor(e) {
            let t;
            switch (e) {
            case r.Unknown || r.NoDeviceId:
                t = "This operation can only be performed after the user is subscribed.";
                break;
            case r.NoEmailSet:
                t = "No email is currently set.";
                break;
            case r.NoSMSSet:
                t = "No sms is currently set.";
                break;
            case r.OptedOut:
                t = "The user has manually opted out of receiving of notifications. This operation can only be performed after the user is fully resubscribed."
            }
            super(t),
            this.reason = r[e],
            Object.setPrototypeOf(this, b.prototype)
        }
    }
    (l = c || (c = {}))[l.InvalidAppId = 0] = "InvalidAppId",
    l[l.AppNotConfiguredForWebPush = 1] = "AppNotConfiguredForWebPush",
    l[l.MissingSubdomain = 2] = "MissingSubdomain",
    l[l.WrongSiteUrl = 3] = "WrongSiteUrl",
    l[l.MultipleInitialization = 4] = "MultipleInitialization",
    l[l.MissingSafariWebId = 5] = "MissingSafariWebId",
    l[l.Unknown = 6] = "Unknown";
    class f extends p.a {
        constructor(e, t) {
            let i;
            switch (e) {
            case c.InvalidAppId:
                i = "OneSignal: This app ID does not match any existing app. Double check your app ID.";
                break;
            case c.AppNotConfiguredForWebPush:
                i = "OneSignal: This app ID does not have any web platforms enabled. Double check your app ID, or see step 1 on our setup guide (https://tinyurl.com/2x5jzk83).";
                break;
            case c.MissingSubdomain:
                i = "Non-HTTPS pages require the subdomainName parameter within the label set within the OneSignal Web configuration (https://tinyurl.com/ry39x7mk).";
                break;
            case c.WrongSiteUrl:
                i = t && t.siteUrl ? `OneSignal: This web push config can only be used on ${new URL(t.siteUrl).origin}.` + ` Your current origin is ${location.origin}.` : "OneSignal: This web push config can not be used on the current site.";
                break;
            case c.MultipleInitialization:
                i = "OneSignal: The OneSignal web SDK can only be initialized once. Extra initializations are ignored. Please remove calls initializing the SDK more than once.";
                break;
            case c.MissingSafariWebId:
                i = "OneSignal: Safari browser support on Mac OS X requires the Safari web platform to be enabled. Please see the Safari Support steps in our web setup guide.";
                break;
            case c.Unknown:
                i = "OneSignal: An unknown initialization error occurred."
            }
            super(i),
            this.reason = c[e],
            Object.setPrototypeOf(this, f.prototype)
        }
    }
    var S = i(7);
    class v {
        static put(e, t) {
            return void 0 === v.store[e] && (v.store[e] = [null, null]),
            v.store[e].push(t),
            v.store[e].length == v.LIMIT + 1 && v.store[e].shift(),
            v.store[e]
        }
        static get(e) {
            return void 0 === v.store[e] && (v.store[e] = [null, null]),
            v.store[e]
        }
        static getFirst(e) {
            return v.get(e)[0]
        }
        static getLast(e) {
            return v.get(e)[1]
        }
        static remove(e) {
            delete v.store[e]
        }
        static isEmpty(e) {
            const t = v.get(e);
            return null === t[0] && null === t[1]
        }
    }
    v.store = {},
    v.LIMIT = 2;
    var O = i(16)
      , y = i(4)
      , w = i(5)
      , E = i(1);
    class I {
        static get(e, t, i) {
            return I.call("GET", e, t, i)
        }
        static post(e, t, i) {
            return I.call("POST", e, t, i)
        }
        static put(e, t, i) {
            return I.call("PUT", e, t, i)
        }
        static delete(e, t, i) {
            return I.call("DELETE", e, t, i)
        }
        static call(e, t, i, n) {
            if ("GET" === e) {
                if (t.indexOf("players") > -1 && -1 === t.indexOf("app_id="))
                    return console.error("Calls to player api are not permitted without app_id"),
                    Promise.reject(new O.a(O.b.MissingAppId))
            } else if (t.indexOf("players") > -1 && (!i || !i.app_id))
                return console.error("Calls to player api are not permitted without app_id"),
                Promise.reject(new O.a(O.b.MissingAppId));
            const o = new Headers;
            if (o.append("Origin", y.a.getOrigin()),
            o.append("SDK-Version", `onesignal/web/${h.a.version()}`),
            o.append("Content-Type", "application/json;charset=UTF-8"),
            n)
                for (const e of Object.keys(n))
                    o.append(e, n[e]);
            const s = {
                method: e || "NO_METHOD_SPECIFIED",
                headers: o,
                cache: "no-cache"
            };
            let r;
            return i && (s.body = JSON.stringify(i)),
            fetch(y.a.getOneSignalApiUrl(void 0, t).toString() + "/" + t, s).then(e=>(r = e.status,
            e.json())).then(e=>{
                if (r >= 200 && r < 300)
                    return e;
                if ("no-user-id-error" !== I.identifyError(e))
                    return Promise.reject(e)
            }
            ).catch(e=>(E.a.warn(`Could not complete request to /${t}`, e),
            Promise.reject(e)))
        }
        static identifyError(e) {
            if (!e || !e.errors)
                return "no-error";
            const t = e.errors;
            return w.a.contains(t, "No user with this id found") || w.a.contains(t, "Could not find app_id for given player id.") ? "no-user-id-error" : "unknown-error"
        }
    }
    var P = I;
    class C {
        static getPlayer(e, t) {
            return w.b.enforceAppId(e),
            w.b.enforcePlayerId(t),
            P.get(`players/${t}?app_id=${e}`)
        }
        static updatePlayer(e, t, i) {
            return w.b.enforceAppId(e),
            w.b.enforcePlayerId(t),
            P.put(`players/${t}`, Object.assign({
                app_id: e
            }, i))
        }
        static sendNotification(e, t, i, n, o, s, r, a) {
            var c = {
                app_id: e,
                contents: n,
                include_player_ids: t,
                isAnyWeb: !0,
                data: r,
                web_buttons: a
            };
            return i && (c.headings = i),
            o && (c.url = o),
            s && (c.chrome_web_icon = s,
            c.firefox_icon = s),
            w.b.trimUndefined(c),
            P.post("notifications", c)
        }
        static createUser(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = e.serialize();
                w.b.enforceAppId(t.app_id);
                const i = yield P.post("players", t);
                return i && i.success ? i.id : null
            })
        }
        static logoutEmail(e, t, i) {
            return Object(d.a)(this, void 0, void 0, function*() {
                w.b.enforceAppId(e.appId),
                w.b.enforcePlayerId(i);
                const n = yield P.post(`players/${i}/email_logout`, {
                    app_id: e.appId,
                    parent_player_id: t.subscriptionId,
                    identifier_auth_hash: t.identifierAuthHash ? t.identifierAuthHash : void 0
                });
                return !(!n || !n.success)
            })
        }
        static updateUserSession(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                try {
                    const i = t.serialize();
                    w.b.enforceAppId(i.app_id),
                    w.b.enforcePlayerId(e);
                    const n = yield P.post(`players/${e}/on_session`, i);
                    return n.id ? n.id : e
                } catch (e) {
                    throw e && Array.isArray(e.errors) && e.errors.length > 0 && w.b.contains(e.errors[0], "app_id not found") ? new O.a(O.b.MissingAppId) : e
                }
            })
        }
        static sendOutcome(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                E.a.info("Outcome payload:", e);
                try {
                    yield P.post("outcomes/measure", e)
                } catch (e) {
                    E.a.error("sendOutcome", e)
                }
            })
        }
    }
    var T, A, M = i(3), N = i(8), x = i(22);
    !function(e) {
        e.Native = "native",
        e.Push = "push",
        e.Category = "category",
        e.Sms = "sms",
        e.Email = "email",
        e.SmsAndEmail = "smsAndEmail"
    }(T || (T = {}));
    class k {
        static isCategorySlidedownConfigured(e) {
            if (!e)
                return !1;
            const t = k.getFirstSlidedownPromptOptionsWithType(e, T.Category);
            return !!t && (!!t.categories && t.categories.length > 0)
        }
        static isCategorySlidedownConfiguredVersion1(e) {
            var t, i;
            return ((null === (i = null === (t = null === e || void 0 === e ? void 0 : e.categories) || void 0 === t ? void 0 : t.tags) || void 0 === i ? void 0 : i.length) || 0) > 0
        }
        static getFirstSlidedownPromptOptionsWithType(e, t) {
            return e ? e.filter(e=>e.type === t)[0] : void 0
        }
        static isSlidedownAutoPromptConfigured(e) {
            if (!e)
                return !1;
            for (let t = 0; t < e.length; t++)
                if (e[t].autoPrompt)
                    return !0;
            return !1
        }
        static isSlidedownPushDependent(e) {
            return e === T.Push || e === T.Category
        }
    }
    !function(e) {
        e.Default = "default",
        e.Granted = "granted",
        e.Denied = "denied"
    }(A || (A = {}));
    class j {
        static get STORED_PERMISSION_KEY() {
            return "storedNotificationPermission"
        }
        getNotificationPermission(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = yield this.getReportedNotificationPermission(e);
                return (yield this.isPermissionEnvironmentAmbiguous(t)) ? yield this.getInterpretedAmbiguousPermission(t) : t
            })
        }
        getReportedNotificationPermission(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (h.a.useSafariLegacyPush())
                    return j.getSafariNotificationPermission(e);
                if (N.b.isUsingSubscriptionWorkaround())
                    return yield this.getOneSignalSubdomainNotificationPermission(e);
                {
                    const e = this.getW3cNotificationPermission();
                    return (yield this.isPermissionEnvironmentAmbiguous(e)) ? yield this.getInterpretedAmbiguousPermission(e) : this.getW3cNotificationPermission()
                }
            })
        }
        static getSafariNotificationPermission(e) {
            if (e)
                return window.safari.pushNotification.permission(e).permission;
            throw new InvalidArgumentError.a("safariWebId",InvalidArgumentError.b.Empty)
        }
        getW3cNotificationPermission() {
            return Notification.permission
        }
        getOneSignalSubdomainNotificationPermission(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return new Promise(t=>{
                    OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION, {
                        safariWebId: e
                    }, e=>{
                        const i = e.data;
                        t(i)
                    }
                    )
                }
                )
            })
        }
        isPermissionEnvironmentAmbiguous(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = N.b.redetectBrowserUserAgent();
                return !t.safari && !t.firefox && e === A.Denied && (this.isCurrentFrameContextCrossOrigin() || (yield y.a.isFrameContextInsecure()) || N.b.isUsingSubscriptionWorkaround())
            })
        }
        isCurrentFrameContextCrossOrigin() {
            let e;
            try {
                e = window.top.location.origin
            } catch (e) {
                return !0
            }
            return window.top !== window && e !== window.location.origin
        }
        getInterpretedAmbiguousPermission(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                switch (e) {
                case A.Denied:
                    const t = this.getStoredPermission();
                    return t || A.Default;
                default:
                    return e
                }
            })
        }
        getStoredPermission() {
            return U.getStoredPermission()
        }
        setStoredPermission(e) {
            U.setStoredPermission(e)
        }
        updateStoredPermission() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = yield this.getNotificationPermission();
                return this.setStoredPermission(e)
            })
        }
    }
    const _ = "isOptedOut"
      , D = "isPushNotificationsEnabled"
      , R = "os_pageViews";
    class U {
        static getIsOptedOut() {
            return "true" === localStorage.getItem(_)
        }
        static getIsPushNotificationsEnabled() {
            return "true" === localStorage.getItem(D)
        }
        static setIsOptedOut(e) {
            localStorage.setItem(_, e.toString())
        }
        static setIsPushNotificationsEnabled(e) {
            localStorage.setItem(D, e.toString())
        }
        static setStoredPermission(e) {
            localStorage.setItem(j.STORED_PERMISSION_KEY, e)
        }
        static getStoredPermission() {
            switch (localStorage.getItem(j.STORED_PERMISSION_KEY) || "default") {
            case "granted":
                return A.Granted;
            case "denied":
                return A.Denied;
            default:
                return A.Default
            }
        }
        static setLocalPageViewCount(e) {
            localStorage.setItem(R, e.toString())
        }
        static getLocalPageViewCount() {
            return Number(localStorage.getItem(R))
        }
    }
    const W = {
        allowButton: "onesignal-slidedown-allow-button",
        body: "slidedown-body",
        buttonIndicatorHolder: "onesignal-button-indicator-holder",
        cancelButton: "onesignal-slidedown-cancel-button",
        container: "onesignal-slidedown-container",
        dialog: "onesignal-slidedown-dialog",
        footer: "slidedown-footer",
        reset: "onesignal-reset",
        savingStateButton: "onesignal-saving-state-button",
        slideUp: "slide-up",
        slideDown: "slide-down",
        closeSlidedown: "close-slidedown",
        icon: "slidedown-body-icon",
        message: "slidedown-body-message",
        defaultIcon: "default-icon",
        loadingContainer: "onesignal-loading-container",
        clearfix: "clearfix"
    }
      , B = {
        toastText: "onesignal-toast-text"
    }
      , L = {
        toastText: "onesignal-toast-text"
    }
      , V = {
        allowButton: "onesignal-slidedown-allow-button",
        body: "slidedown-body",
        buttonIndicatorHolder: "onesignal-button-indicator-holder",
        cancelButton: "onesignal-slidedown-cancel-button",
        container: "onesignal-slidedown-container",
        dialog: "onesignal-slidedown-dialog",
        footer: "slidedown-footer",
        normalSlidedown: "normal-slidedown",
        loadingContainer: "onesignal-loading-container"
    }
      , F = {
        alignRight: "align-right",
        primary: "primary",
        secondary: "secondary",
        slidedownButton: "slidedown-button"
    }
      , H = {
        categoryLabelInput: "onesignal-category-label-input",
        categoryLabelText: "onesignal-category-label-text",
        categoryLabel: "onesignal-category-label",
        checkmark: "onesignal-checkmark",
        taggingContainer: "tagging-container",
        taggingContainerCol: "tagging-container-col",
        loadingMessage: "onesignal-loading-message"
    }
      , $ = {
        taggingContainer: "tagging-container"
    }
      , G = "data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M33.232 28.434a2.5 2.5 0 001.768.733 1.667 1.667 0 010 3.333H5a1.667 1.667 0 110-3.333 2.5 2.5 0 002.5-2.5v-8.104A13.262 13.262 0 0118.333 5.122V1.667a1.666 1.666 0 113.334 0v3.455A13.262 13.262 0 0132.5 18.563v8.104a2.5 2.5 0 00.732 1.767zM16.273 35h7.454a.413.413 0 01.413.37 4.167 4.167 0 11-8.28 0 .417.417 0 01.413-.37z' fill='%23BDC4CB'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath fill='%23fff' d='M0 0h40v40H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
      , z = "data:image/svg+xml;charset=UTF-8,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.98775 -0.00114406C5.85015 0.0338508 3.81219 0.908665 2.31442 2.43419C1.565 3.18031 0.973715 4.06987 0.575897 5.04969C0.17808 6.02952 -0.0180997 7.07949 -0.000914196 8.13686C-0.00214385 9.17005 0.200528 10.1933 0.595487 11.148C0.990446 12.1028 1.56993 12.9702 2.30072 13.7005C3.03151 14.4309 3.89925 15.0098 4.85421 15.4042C5.80916 15.7986 6.83256 16.0007 7.86575 15.9989H8.00842C10.1467 15.9769 12.1889 15.1075 13.6869 13.5816C15.185 12.0557 16.0165 9.99781 15.9991 7.85952C16.0015 6.8138 15.7949 5.77814 15.3913 4.81345C14.9876 3.84876 14.3952 2.97451 13.6488 2.24213C12.9023 1.50974 12.017 0.933994 11.0448 0.548751C10.0726 0.163508 9.03324 -0.0234551 7.98775 -0.00114406ZM6.99909 11.0269C6.99428 10.8961 7.01558 10.7658 7.06175 10.6434C7.10792 10.521 7.17803 10.4091 7.26797 10.3141C7.35792 10.2191 7.4659 10.143 7.58559 10.0903C7.70529 10.0375 7.8343 10.0092 7.96509 10.0069H7.98309C8.24616 10.0074 8.49882 10.1097 8.6881 10.2924C8.87739 10.4751 8.9886 10.724 8.99842 10.9869C9.00331 11.1176 8.98207 11.248 8.93594 11.3704C8.8898 11.4928 8.8197 11.6048 8.72974 11.6998C8.63978 11.7948 8.53176 11.8709 8.41202 11.9236C8.29229 11.9763 8.16323 12.0046 8.03242 12.0069H8.01442C7.75145 12.006 7.49897 11.9036 7.30976 11.721C7.12054 11.5383 7.00923 11.2896 6.99909 11.0269ZM7.33242 8.33219V4.33219C7.33242 4.15538 7.40266 3.98581 7.52768 3.86079C7.65271 3.73576 7.82227 3.66552 7.99909 3.66552C8.1759 3.66552 8.34547 3.73576 8.47049 3.86079C8.59551 3.98581 8.66575 4.15538 8.66575 4.33219V8.33219C8.66575 8.509 8.59551 8.67857 8.47049 8.80359C8.34547 8.92862 8.1759 8.99886 7.99909 8.99886C7.82227 8.99886 7.65271 8.92862 7.52768 8.80359C7.40266 8.67857 7.33242 8.509 7.33242 8.33219Z' fill='%23E54B4D'/%3e%3c/svg%3e"
      , q = {
        greyLoadingIndicator: "#95A1AC",
        whiteLoadingIndicator: "#FFFFFF"
    }
      , K = {
        fetchingPreferences: "Fetching your preferences"
    }
      , Y = {
        channelCaptureContainer: "channel-capture-container",
        inputWithValidationElement: "input-with-validation-element",
        onesignalErrorInput: "onesignal-error-input",
        onesignalSmsInput: "iti-onesignal-sms-input",
        onesignalEmailInput: "onesignal-email-input",
        onesignalValidationElementHidden: "onesignal-validation-element-hidden",
        onesignalValidationElement: "onesignal-validation-element"
    }
      , J = {
        channelCaptureContainer: "channel-capture-container",
        smsInputWithValidationElement: "sms-input-with-validation-element",
        emailInputWithValidationElement: "email-input-with-validation-element",
        onesignalSmsInput: "iti-onesignal-sms-input",
        onesignalEmailInput: "onesignal-email-input",
        onesignalSmsValidationElement: "onesignal-sms-validation-element",
        onesignalEmailValidationElement: "onesignal-email-validation-element"
    }
      , Q = {
        containerClass: "onesignal-customlink-container",
        subscribeClass: "onesignal-customlink-subscribe",
        explanationClass: "onesignal-customlink-explanation",
        resetClass: "onesignal-reset",
        hide: "hide",
        state: {
            subscribed: "state-subscribed",
            unsubscribed: "state-unsubscribed"
        }
    }
      , Z = {
        containerSelector: `.${Q.containerClass}`,
        subscribeSelector: `.${Q.subscribeClass}`,
        explanationSelector: `.${Q.explanationClass}`
    };
    var X = i(2);
    class ee {
        constructor(e) {
            this.config = e
        }
        initialize() {
            return Object(d.a)(this, void 0, void 0, function*() {
                var e, t;
                if ((null === (e = this.config) || void 0 === e ? void 0 : e.enabled) && (yield this.loadSdkStyles()))
                    if (E.a.info("OneSignal: initializing customlink"),
                    (null === (t = this.config) || void 0 === t ? void 0 : t.unsubscribeEnabled) || !ee.isPushEnabled())
                        for (let e = 0; e < this.customlinkContainerElements.length; e++)
                            yield this.injectMarkup(this.customlinkContainerElements[e]);
                    else
                        this.hideCustomLinkContainers()
            })
        }
        injectMarkup(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                e.innerHTML = "",
                yield this.mountExplanationNode(e),
                yield this.mountSubscriptionNode(e)
            })
        }
        mountExplanationNode(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                var t;
                if (null === (t = this.config) || void 0 === t ? void 0 : t.text) {
                    if (this.config.text.explanation) {
                        const t = document.createElement("p");
                        t.textContent = this.config.text.explanation,
                        Object(X.a)(t, Q.resetClass),
                        Object(X.a)(t, Q.explanationClass),
                        this.config.size && Object(X.a)(t, this.config.size),
                        ee.isPushEnabled() ? Object(X.a)(t, Q.state.subscribed) : Object(X.a)(t, Q.state.unsubscribed),
                        e.appendChild(t)
                    }
                } else
                    E.a.error("CustomLink: required property 'text' is missing in the config")
            })
        }
        mountSubscriptionNode(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                var t;
                if (null === (t = this.config) || void 0 === t ? void 0 : t.text) {
                    if (this.config.text.subscribe) {
                        const t = document.createElement("button");
                        Object(X.a)(t, Q.resetClass),
                        Object(X.a)(t, Q.subscribeClass),
                        this.config.size && Object(X.a)(t, this.config.size),
                        this.config.style && Object(X.a)(t, this.config.style),
                        ee.isPushEnabled() ? Object(X.a)(t, Q.state.subscribed) : Object(X.a)(t, Q.state.unsubscribed),
                        this.setCustomColors(t),
                        yield this.setTextFromPushStatus(t),
                        t.addEventListener("click", ()=>Object(d.a)(this, void 0, void 0, function*() {
                            E.a.info("CustomLink: subscribe clicked"),
                            yield this.handleClick(t)
                        })),
                        e.appendChild(t)
                    }
                } else
                    E.a.error("CustomLink: required property 'text' is missing in the config")
            })
        }
        loadSdkStyles() {
            return Object(d.a)(this, void 0, void 0, function*() {
                return 0 === (yield OneSignal.context.dynamicResourceLoader.loadSdkStylesheet()) || (E.a.debug("Not initializing custom link button because styles failed to load."),
                !1)
            })
        }
        hideElement(e) {
            Object(X.a)(e, Q.hide)
        }
        hideCustomLinkContainers() {
            this.customlinkContainerElements.forEach(e=>{
                this.hideElement(e)
            }
            )
        }
        handleClick(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                var t, i;
                if (ee.isPushEnabled())
                    yield OneSignal.setSubscription(!1),
                    yield this.setTextFromPushStatus(e);
                else {
                    if (!ee.isOptedOut()) {
                        const e = {
                            autoAccept: !OneSignal.environmentInfo.requiresUserInteraction
                        };
                        return yield OneSignal.registerForPushNotifications(e),
                        void (!(null === (t = this.config) || void 0 === t ? void 0 : t.unsubscribeEnabled) && ee.isPushEnabled() && this.hideCustomLinkContainers())
                    }
                    yield OneSignal.setSubscription(!0),
                    !(null === (i = this.config) || void 0 === i ? void 0 : i.unsubscribeEnabled) && ee.isPushEnabled() && this.hideCustomLinkContainers()
                }
            })
        }
        setTextFromPushStatus(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                var t, i, n, o;
                (null === (i = null === (t = this.config) || void 0 === t ? void 0 : t.text) || void 0 === i ? void 0 : i.subscribe) && (ee.isPushEnabled() || (e.textContent = this.config.text.subscribe)),
                (null === (o = null === (n = this.config) || void 0 === n ? void 0 : n.text) || void 0 === o ? void 0 : o.unsubscribe) && ee.isPushEnabled() && (e.textContent = this.config.text.unsubscribe)
            })
        }
        setCustomColors(e) {
            var t, i, n, o, s, r, a;
            (null === (t = this.config) || void 0 === t ? void 0 : t.color) && this.config.color.text && ("button" === (null === (i = this.config) || void 0 === i ? void 0 : i.style) && (null === (n = this.config) || void 0 === n ? void 0 : n.color.button) ? (e.style.backgroundColor = null === (o = this.config) || void 0 === o ? void 0 : o.color.button,
            e.style.color = null === (s = this.config) || void 0 === s ? void 0 : s.color.text) : "link" === (null === (r = this.config) || void 0 === r ? void 0 : r.style) && (e.style.color = null === (a = this.config) || void 0 === a ? void 0 : a.color.text))
        }
        get customlinkContainerElements() {
            const e = document.querySelectorAll(Z.containerSelector);
            return Array.prototype.slice.call(e)
        }
        static isPushEnabled() {
            return U.getIsPushNotificationsEnabled()
        }
        static isOptedOut() {
            return U.getIsOptedOut()
        }
    }
    class te {
        static onNotificationPermissionChange() {
            te.checkAndTriggerSubscriptionChanged()
        }
        static onInternalSubscriptionSet(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                v.put("subscription.optedOut", e)
            })
        }
        static checkAndTriggerSubscriptionChanged() {
            return Object(d.a)(this, void 0, void 0, function*() {
                N.a.logMethodCall("checkAndTriggerSubscriptionChanged");
                const e = yield OneSignal.context.subscriptionManager.getSubscriptionState()
                  , t = yield OneSignal.privateIsPushNotificationsEnabled()
                  , i = yield M.a.getAppState()
                  , {lastKnownPushEnabled: n} = i;
                (null === n || t !== n) && (E.a.info("The user's subscription state changed from " + `${null === n ? "(not stored)" : n} ⟶ ${e.subscribed}`),
                U.setIsPushNotificationsEnabled(t),
                i.lastKnownPushEnabled = t,
                yield M.a.setAppState(i),
                te.triggerSubscriptionChanged(t))
            })
        }
        static _onSubscriptionChanged(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                te.onSubscriptionChanged_showWelcomeNotification(e),
                te.onSubscriptionChanged_sendCategorySlidedownTags(e),
                te.onSubscriptionChanged_evaluateNotifyButtonDisplayPredicate(),
                te.onSubscriptionChanged_updateCustomLink()
            })
        }
        static onSubscriptionChanged_sendCategorySlidedownTags(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                var t, i;
                if (!0 !== e)
                    return;
                const n = null === (i = null === (t = OneSignal.context.appConfig.userConfig.promptOptions) || void 0 === t ? void 0 : t.slidedown) || void 0 === i ? void 0 : i.prompts;
                k.isCategorySlidedownConfigured(n) && (yield OneSignal.context.tagManager.sendTags(!1))
            })
        }
        static onSubscriptionChanged_showWelcomeNotification(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (OneSignal.__doNotShowWelcomeNotification)
                    return void E.a.debug("Not showing welcome notification because user has previously subscribed.");
                const t = OneSignal.config.userConfig.welcomeNotification;
                if (void 0 !== t && !0 === t.disable)
                    return;
                if (!0 !== e)
                    return;
                if (te.sendingOrSentWelcomeNotification)
                    return;
                te.sendingOrSentWelcomeNotification = !0;
                const {deviceId: i} = yield M.a.getSubscription()
                  , {appId: n} = yield M.a.getAppConfig();
                let o = void 0 !== t && void 0 !== t.title && null !== t.title ? t.title : ""
                  , s = void 0 !== t && void 0 !== t.message && null !== t.message && t.message.length > 0 ? t.message : "Thanks for subscribing!";
                const r = new URL(location.href).origin + "?_osp=do_not_open"
                  , a = t && t.url && t.url.length > 0 ? t.url : r;
                o = x.a.decodeHtmlEntities(o),
                s = x.a.decodeHtmlEntities(s),
                E.a.debug("Sending welcome notification."),
                C.sendNotification(n, [i], {
                    en: o
                }, {
                    en: s
                }, a, null, {
                    __isOneSignalWelcomeNotification: !0
                }, void 0),
                S.a.trigger(OneSignal.EVENTS.WELCOME_NOTIFICATION_SENT, {
                    title: o,
                    message: s,
                    url: a
                })
            })
        }
        static onSubscriptionChanged_evaluateNotifyButtonDisplayPredicate() {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (!OneSignal.config.userConfig.notifyButton)
                    return;
                const e = OneSignal.config.userConfig.notifyButton.displayPredicate;
                if (e && "function" == typeof e && OneSignal.notifyButton) {
                    !1 !== (yield e()) ? (E.a.debug("Showing notify button because display predicate returned true."),
                    OneSignal.notifyButton.launcher.show()) : (E.a.debug("Hiding notify button because display predicate returned false."),
                    OneSignal.notifyButton.launcher.hide())
                }
            })
        }
        static onSubscriptionChanged_updateCustomLink() {
            return Object(d.a)(this, void 0, void 0, function*() {
                OneSignal.config.userConfig.promptOptions && new ee(OneSignal.config.userConfig.promptOptions.customlink).initialize()
            })
        }
        static triggerSubscriptionChanged(e) {
            S.a.trigger(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, e)
        }
        static fireStoredNotificationClicks(e=document.URL) {
            return Object(d.a)(this, void 0, void 0, function*() {
                function t(e) {
                    return Object(d.a)(this, void 0, void 0, function*() {
                        const t = yield M.a.getAppState();
                        t.clickedNotifications[e.url] = null,
                        yield M.a.setAppState(t);
                        const {data: i, timestamp: n} = e;
                        if (n) {
                            if ((Date.now() - n) / 1e3 / 60 > 5)
                                return
                        }
                        S.a.trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, i)
                    })
                }
                const i = yield M.a.getAppState();
                if ("origin" === (yield M.a.get("Options", "notificationClickHandlerMatch"))) {
                    for (const e of Object.keys(i.clickedNotifications))
                        if (new URL(e).origin === location.origin) {
                            yield t(i.clickedNotifications[e])
                        }
                } else {
                    var n = i.clickedNotifications[e];
                    if (n)
                        yield t(n);
                    else if (!n && e.endsWith("/")) {
                        var o = e.substring(0, e.length - 1);
                        (n = i.clickedNotifications[o]) && (yield t(n))
                    }
                }
            })
        }
    }
    te.sendingOrSentWelcomeNotification = !1;
    var ie, ne, oe = i(6);
    class se {
        static promiseStub() {
            return {
                then: se.promiseStub,
                catch: se.promiseStub
            }
        }
        static ensureBackwardsCompatibility(e) {
            se.environmentPolyfill(e),
            se.postmams(e),
            e.syncHashedEmail = se.promiseStub
        }
        static environmentPolyfill(e) {
            e.environment = {},
            e.environment.getEnv = function() {
                return ""
            }
            ,
            e.environment.isPopup = function() {
                return y.a.getWindowEnv() === oe.a.OneSignalSubscriptionPopup
            }
            ,
            e.environment.isIframe = function() {
                return y.a.getWindowEnv() === oe.a.OneSignalProxyFrame
            }
        }
        static postmams(e) {
            const t = function() {
                this.messenger.message.apply(this.messenger, arguments)
            }
              , i = function() {
                this.messenger.postMessage.apply(this.messenger, arguments)
            };
            function n(e) {
                e.message = t,
                e.postMessage = i
            }
            e.proxyFrame && (e.iframePostmam = e.proxyFrame,
            n(e.iframePostmam)),
            e.subscriptionPopup && (e.popupPostmam = e.subscriptionPopup,
            n(e.popupPostmam)),
            e.subscriptionModal && (e.modalPostmam = e.subscriptionModal,
            n(e.modalPostmam))
        }
    }
    !function(e) {
        e[e.Default = 0] = "Default",
        e[e.Subscribed = 1] = "Subscribed",
        e[e.MutedByApi = -2] = "MutedByApi",
        e[e.NotSubscribed = -10] = "NotSubscribed",
        e[e.TemporaryWebRecord = -20] = "TemporaryWebRecord",
        e[e.PermissionRevoked = -21] = "PermissionRevoked",
        e[e.PushSubscriptionRevoked = -22] = "PushSubscriptionRevoked",
        e[e.ServiceWorkerStatus403 = -23] = "ServiceWorkerStatus403",
        e[e.ServiceWorkerStatus404 = -24] = "ServiceWorkerStatus404"
    }(ie || (ie = {}));
    class re extends p.a {
        constructor() {
            super("This code is not implemented yet."),
            Object.setPrototypeOf(this, re.prototype)
        }
    }
    !function(e) {
        e[e.ChromeLike = 5] = "ChromeLike",
        e[e.SafariLegacy = 7] = "SafariLegacy",
        e[e.Firefox = 8] = "Firefox",
        e[e.Email = 11] = "Email",
        e[e.Edge = 12] = "Edge",
        e[e.SMS = 14] = "SMS",
        e[e.SafariVapid = 17] = "SafariVapid"
    }(ne || (ne = {}));
    class ae {
        constructor() {
            this.language = h.a.getLanguage(),
            this.timezone = -60 * (new Date).getTimezoneOffset(),
            this.timezoneId = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const e = parseInt(String(g.a.version), 10);
            this.browserVersion = isNaN(e) ? -1 : e,
            this.deviceModel = navigator.platform,
            this.sdkVersion = h.a.version().toString(),
            this.deliveryPlatform = this.getDeliveryPlatform()
        }
        getDeliveryPlatform() {
            const e = N.a.redetectBrowserUserAgent();
            return h.a.useSafariLegacyPush() ? ne.SafariLegacy : h.a.useSafariVapidPush() ? ne.SafariVapid : e.firefox ? ne.Firefox : e.msedge ? ne.Edge : ne.ChromeLike
        }
        serialize() {
            const e = {
                device_type: this.deliveryPlatform,
                language: this.language,
                timezone: this.timezone,
                timezone_id: this.timezoneId,
                device_os: this.browserVersion,
                device_model: this.deviceModel,
                sdk: this.sdkVersion,
                notification_types: this.subscriptionState
            };
            return this.appId && (e.app_id = this.appId),
            this.externalUserId && (e.external_user_id = this.externalUserId),
            this.externalUserIdAuthHash && (e.external_user_id_auth_hash = this.externalUserIdAuthHash),
            e
        }
        deserialize(e) {
            throw new re
        }
    }
    class ce extends ae {
        constructor(e) {
            super(),
            this.subscription = e
        }
        serialize() {
            const e = super.serialize();
            return this.subscription && (e.identifier = h.a.useSafariLegacyPush() ? this.subscription.safariDeviceToken : this.subscription.w3cEndpoint ? this.subscription.w3cEndpoint.toString() : null,
            e.web_auth = this.subscription.w3cAuth,
            e.web_p256 = this.subscription.w3cP256dh),
            e
        }
        static createFromPushSubscription(e, t, i) {
            const n = new ce(t);
            return n.appId = e,
            n.subscriptionState = t ? ie.Subscribed : ie.NotSubscribed,
            i && (n.subscriptionState = i),
            n
        }
        deserialize(e) {
            throw new re
        }
    }
    var le, de, ue = i(17);
    (de = le || (le = {}))[de.Blocked = 0] = "Blocked",
    de[de.Dismissed = 1] = "Dismissed",
    de[de.Default = 2] = "Default";
    class ge extends p.a {
        constructor(e) {
            let t;
            switch (e) {
            case le.Dismissed:
                t = "The user dismissed the permission prompt.";
                break;
            case le.Blocked:
                t = "Notification permissions are blocked.";
                break;
            case le.Default:
                t = "Notification permissions have not been granted yet."
            }
            super(t),
            this.reason = e,
            Object.setPrototypeOf(this, ge.prototype)
        }
    }
    class he {
        isNewSubscription() {
            return this.existingW3cPushSubscription ? !!this.existingW3cPushSubscription.w3cEndpoint != !!this.w3cEndpoint || (!(!this.existingW3cPushSubscription.w3cEndpoint || !this.w3cEndpoint || this.existingW3cPushSubscription.w3cEndpoint.toString() === this.w3cEndpoint.toString()) || (this.existingW3cPushSubscription.w3cP256dh !== this.w3cP256dh || this.existingW3cPushSubscription.w3cAuth !== this.w3cAuth)) : !this.existingSafariDeviceToken || this.existingSafariDeviceToken !== this.safariDeviceToken
        }
        static setFromW3cSubscription(e) {
            const t = new he;
            if (e && (t.w3cEndpoint = new URL(e.endpoint),
            e.getKey)) {
                let i = null;
                try {
                    i = e.getKey("p256dh")
                } catch (e) {}
                let n = null;
                try {
                    n = e.getKey("auth")
                } catch (e) {}
                if (i) {
                    const e = btoa(String.fromCharCode.apply(null, new Uint8Array(i)));
                    t.w3cP256dh = e
                }
                if (n) {
                    const e = btoa(String.fromCharCode.apply(null, new Uint8Array(n)));
                    t.w3cAuth = e
                }
            }
            return t
        }
        setFromSafariSubscription(e) {
            this.safariDeviceToken = e
        }
        serialize() {
            return {
                w3cEndpoint: this.w3cEndpoint ? this.w3cEndpoint.toString() : null,
                w3cP256dh: this.w3cP256dh,
                w3cAuth: this.w3cAuth,
                safariDeviceToken: this.safariDeviceToken,
                existingPushSubscription: this.existingW3cPushSubscription ? this.existingW3cPushSubscription.serialize() : null,
                existingSafariDeviceToken: this.existingSafariDeviceToken
            }
        }
        static deserialize(e) {
            const t = new he;
            if (!e)
                return t;
            try {
                t.w3cEndpoint = new URL(e.w3cEndpoint)
            } catch (e) {}
            return t.w3cP256dh = e.w3cP256dh,
            t.w3cAuth = e.w3cAuth,
            t.existingW3cPushSubscription = void 0,
            e.existingW3cPushSubscription ? t.existingW3cPushSubscription = he.deserialize(e.existingW3cPushSubscription) : e.existingPushSubscription && (t.existingW3cPushSubscription = he.deserialize(e.existingPushSubscription)),
            t.safariDeviceToken = e.safariDeviceToken,
            t.existingSafariDeviceToken = e.existingSafariDeviceToken,
            t
        }
    }
    var pe, me = i(13);
    !function(e) {
        e.Safari = "safari",
        e.Firefox = "firefox",
        e.Chrome = "chrome",
        e.Opera = "opera",
        e.Edge = "edge",
        e.Other = "other"
    }(pe || (pe = {}));
    class be {
        static registerForPush() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = U.getIsPushNotificationsEnabled();
                return yield be.internalRegisterForPush(e)
            })
        }
        static internalRegisterForPush(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = OneSignal.context;
                let i = null;
                if (e && !t.pageViewManager.isFirstPageView()) {
                    E.a.debug("Not registering for push because the user is subscribed and this is not the first page view."),
                    E.a.debug("But we want to rekindle their session.");
                    const e = yield fe.getDeviceId();
                    if (e) {
                        const t = yield fe.createDeviceRecord(OneSignal.config.appId, !0);
                        yield OneSignal.context.sessionManager.upsertSession(e, t, me.b.PageRefresh)
                    } else
                        E.a.error("Should have been impossible to have push as enabled but no device id.");
                    return null
                }
                if ("undefined" != typeof OneSignal) {
                    if (OneSignal._isRegisteringForPush)
                        return null;
                    OneSignal._isRegisteringForPush = !0
                }
                switch (y.a.getWindowEnv()) {
                case oe.a.Host:
                case oe.a.OneSignalSubscriptionModal:
                    try {
                        const e = yield t.subscriptionManager.subscribe(0);
                        i = yield t.subscriptionManager.registerSubscription(e),
                        t.pageViewManager.incrementPageViewCount(),
                        yield ue.a.triggerNotificationPermissionChanged(),
                        yield te.checkAndTriggerSubscriptionChanged()
                    } catch (e) {
                        E.a.info(e)
                    }
                    break;
                case oe.a.OneSignalSubscriptionPopup:
                    const e = opener || parent;
                    let n;
                    yield t.permissionManager.updateStoredPermission();
                    try {
                        n = yield t.subscriptionManager.subscribe(1),
                        yield t.permissionManager.updateStoredPermission()
                    } catch (i) {
                        if (yield t.permissionManager.updateStoredPermission(),
                        i instanceof ge)
                            switch (i.reason) {
                            case le.Blocked:
                                yield t.permissionManager.updateStoredPermission(),
                                OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, {
                                    permission: A.Denied,
                                    forceUpdatePermission: !1
                                });
                                break;
                            case le.Dismissed:
                                OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, {
                                    permission: A.Default,
                                    forceUpdatePermission: !0
                                })
                            }
                        if (e)
                            return window.close(),
                            null
                    }
                    OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.FINISH_REMOTE_REGISTRATION, {
                        rawPushSubscription: n.serialize()
                    }, t=>{
                        !0 === t.data.progress ? (E.a.debug("Got message from host page that remote reg. is in progress, closing popup."),
                        e && window.close()) : E.a.debug("Got message from host page that remote reg. could not be finished.")
                    }
                    );
                    break;
                default:
                    throw "undefined" != typeof OneSignal && (OneSignal._isRegisteringForPush = !1),
                    new m(o.UnsupportedEnvironment)
                }
                return "undefined" != typeof OneSignal && (OneSignal._isRegisteringForPush = !1),
                i
            })
        }
        static getRawPushSubscriptionForSafari(e) {
            const t = new he
              , {deviceToken: i} = window.safari.pushNotification.permission(e);
            return t.existingSafariDeviceToken = i,
            t
        }
        static getRawPushSubscriptionFromServiceWorkerRegistration(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (!e)
                    return null;
                const t = yield e.pushManager.getSubscription();
                return t ? he.setFromW3cSubscription(t) : null
            })
        }
        static getRawPushSubscriptionWhenUsingSubscriptionWorkaround() {
            return Object(d.a)(this, void 0, void 0, function*() {
                return null
            })
        }
        static getRawPushSubscription(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (e.browserType === pe.Safari)
                    return be.getRawPushSubscriptionForSafari(t);
                if (e.isUsingSubscriptionWorkaround)
                    return be.getRawPushSubscriptionWhenUsingSubscriptionWorkaround();
                if (e.isBrowserAndSupportsServiceWorkers) {
                    const e = yield OneSignal.context.serviceWorkerManager.getRegistration();
                    return yield be.getRawPushSubscriptionFromServiceWorkerRegistration(e)
                }
                return null
            })
        }
    }
    class fe {
        static getCurrentNotificationType() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = yield OneSignal.context.permissionManager.getNotificationPermission(OneSignal.context.appConfig.safariWebId);
                if (e === A.Default)
                    return ie.Default;
                if (e === A.Denied)
                    return N.a.isUsingSubscriptionWorkaround() ? ie.Default : ie.NotSubscribed;
                const t = yield OneSignal.context.subscriptionManager.isAlreadyRegisteredWithOneSignal();
                if (e === A.Granted && t) {
                    return (yield OneSignal.privateIsPushNotificationsEnabled()) ? ie.Subscribed : ie.MutedByApi
                }
                return ie.Default
            })
        }
        static getNotificationTypeFromOptIn(e) {
            return 1 == e || null == e ? ie.Subscribed : ie.MutedByApi
        }
        static markHttpSlidedownShown() {
            sessionStorage.setItem("ONESIGNAL_HTTP_PROMPT_SHOWN", "true")
        }
        static isHttpPromptAlreadyShown() {
            return "true" == sessionStorage.getItem("ONESIGNAL_HTTP_PROMPT_SHOWN")
        }
        static checkAndTriggerNotificationPermissionChanged() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = yield M.a.get("Options", "notificationPermission")
                  , t = yield OneSignal.getNotificationPermission();
                e !== t && (yield ue.a.triggerNotificationPermissionChanged(),
                yield M.a.put("Options", {
                    key: "notificationPermission",
                    value: t
                }))
            })
        }
        static getNotificationIcons() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = yield fe.getAppId();
                if (!e)
                    throw new m(o.MissingAppId);
                const t = `${y.a.getOneSignalApiUrl().toString()}/apps/${e}/icon`
                  , i = yield(yield fetch(t)).json();
                if (i.errors)
                    throw E.a.error(`API call %c ${t}`, w.a.getConsoleStyle("code"), "failed with:", i.errors),
                    new Error("Failed to get notification icons.");
                return i
            })
        }
        static getSlidedownOptions(e) {
            return w.a.getValueOrDefault(e.slidedown, {
                prompts: []
            })
        }
        static getFullscreenPermissionMessageOptions(e) {
            return e ? e.fullscreen ? {
                autoAcceptTitle: e.fullscreen.autoAcceptTitle,
                actionMessage: e.fullscreen.actionMessage,
                exampleNotificationTitleDesktop: e.fullscreen.title,
                exampleNotificationTitleMobile: e.fullscreen.title,
                exampleNotificationMessageDesktop: e.fullscreen.message,
                exampleNotificationMessageMobile: e.fullscreen.message,
                exampleNotificationCaption: e.fullscreen.caption,
                acceptButton: e.fullscreen.acceptButton,
                cancelButton: e.fullscreen.cancelButton
            } : e : null
        }
        static getPromptOptionsQueryString() {
            let e = "";
            if (fe.getFullscreenPermissionMessageOptions(OneSignal.config.userConfig.promptOptions)) {
                const t = fe.getPromptOptionsPostHash();
                for (const i of Object.keys(t)) {
                    e += "&" + i + "=" + t[i]
                }
            }
            return e
        }
        static getPromptOptionsPostHash() {
            const e = fe.getFullscreenPermissionMessageOptions(OneSignal.config.userConfig.promptOptions);
            if (e) {
                var t = {
                    exampleNotificationTitleDesktop: "exampleNotificationTitle",
                    exampleNotificationMessageDesktop: "exampleNotificationMessage",
                    exampleNotificationTitleMobile: "exampleNotificationTitle",
                    exampleNotificationMessageMobile: "exampleNotificationMessage"
                };
                for (const i of Object.keys(t)) {
                    const n = t[i];
                    e[i] && (e[n] = e[i])
                }
                for (var i = ["autoAcceptTitle", "siteName", "autoAcceptTitle", "subscribeText", "showGraphic", "actionMessage", "exampleNotificationTitle", "exampleNotificationMessage", "exampleNotificationCaption", "acceptButton", "cancelButton", "timeout"], n = {}, o = 0; o < i.length; o++) {
                    var s = i[o]
                      , r = e[s]
                      , a = encodeURIComponent(r);
                    (r || !1 === r || "" === r) && (n[s] = a)
                }
            }
            return n
        }
        static triggerCustomPromptClicked(e) {
            S.a.trigger(OneSignal.EVENTS.CUSTOM_PROMPT_CLICKED, {
                result: e
            })
        }
        static getAppId() {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (OneSignal.config.appId)
                    return Promise.resolve(OneSignal.config.appId);
                return yield M.a.get("Ids", "appId")
            })
        }
        static createDeviceRecord(e, t=!1) {
            return Object(d.a)(this, void 0, void 0, function*() {
                let i;
                if (t) {
                    const e = yield be.getRawPushSubscription(OneSignal.environmentInfo, OneSignal.config.safariWebId);
                    e && (i = e)
                }
                const n = new ce(i);
                return n.appId = e,
                n.subscriptionState = yield fe.getCurrentNotificationType(),
                n
            })
        }
        static getDeviceId() {
            return Object(d.a)(this, void 0, void 0, function*() {
                return (yield OneSignal.database.getSubscription()).deviceId || void 0
            })
        }
    }
    var Se, ve, Oe = i(18);
    class ye {
        constructor(e, t, i) {
            if (this.windowReference = e,
            this.sendToOrigin = t,
            this.receiveFromOrigin = i,
            !window || !window.postMessage)
                throw new Error("Must pass in a valid window reference supporting postMessage():" + e);
            if (!t || !i)
                throw new Error("Invalid origin. Must be set.");
            this.emitter = new Oe.a,
            this.channel = new MessageChannel,
            this.messagePort = null,
            this.isListening = !1,
            this.isConnected = !1,
            this.replies = {}
        }
        static get HANDSHAKE_MESSAGE() {
            return "onesignal.postmam.handshake"
        }
        static get CONNECTED_MESSAGE() {
            return "onesignal.postmam.connected"
        }
        listen() {
            E.a.debug("(Postmam) Called listen()."),
            this.isListening ? E.a.debug("(Postmam) Already listening for Postmam connections.") : h.a.isBrowser() && (this.isListening = !0,
            E.a.debug("(Postmam) Listening for Postmam connections.", this),
            window.addEventListener("message", this.onWindowMessagePostmanConnectReceived.bind(this)))
        }
        startPostMessageReceive() {
            window.addEventListener("message", this.onWindowPostMessageReceived.bind(this))
        }
        stopPostMessageReceive() {
            window.removeEventListener("message", this.onWindowPostMessageReceived)
        }
        destroy() {
            this.stopPostMessageReceive(),
            this.emitter.removeAllListeners()
        }
        onWindowPostMessageReceived(e) {
            if (!this.isSafeOrigin(e.origin))
                return;
            const {id: t, command: i, data: n, source: o} = e.data;
            if (i === ye.CONNECTED_MESSAGE)
                return this.emitter.emit("connect"),
                void (this.isConnected = !0);
            const s = {
                id: t,
                command: i,
                data: n,
                source: o
            }
              , r = Object.assign({
                reply: this.reply.bind(this, s)
            }, s);
            if (this.replies.hasOwnProperty(t)) {
                E.a.info("(Postmam) This message is a reply."),
                !1 === this.replies[t].bind(window)(r) && delete this.replies[t]
            } else
                this.emitter.emit(i, r)
        }
        onWindowMessagePostmanConnectReceived(e) {
            const t = y.a.getWindowEnv().toString();
            if (E.a.debug(`(Postmam) (${t}) Window postmessage for Postman connect received:`, e),
            this.isSafeOrigin(e.origin)) {
                var {handshake: i} = e.data;
                i === ye.HANDSHAKE_MESSAGE ? (E.a.info("(Postmam) Got our expected Postmam handshake message (and connecting...):", e.data),
                window.removeEventListener("message", this.onWindowMessagePostmanConnectReceived),
                this.messagePort = e.ports[0],
                this.messagePort.addEventListener("message", this.onMessageReceived.bind(this), !1),
                E.a.info("(Postmam) Removed previous message event listener for handshakes, replaced with main message listener."),
                this.messagePort.start(),
                this.isConnected = !0,
                E.a.info(`(Postmam) (${t}) Connected.`),
                this.message(ye.CONNECTED_MESSAGE),
                this.emitter.emit("connect")) : E.a.info("(Postmam) Got a postmam message, but not our expected handshake:", e.data)
            }
        }
        connect() {
            E.a.info(`(Postmam) (${y.a.getWindowEnv().toString()}) Establishing a connection to ${this.sendToOrigin}.`),
            this.messagePort = this.channel.port1,
            this.messagePort.addEventListener("message", this.onMessageReceived.bind(this), !1),
            this.messagePort.start(),
            this.windowReference.postMessage({
                handshake: ye.HANDSHAKE_MESSAGE
            }, this.sendToOrigin, [this.channel.port2])
        }
        onMessageReceived(e) {
            if (!e.data)
                return void E.a.debug(`(${y.a.getWindowEnv().toString()}) Received an empty Postmam message:`, e);
            const {id: t, command: i, data: n, source: o} = e.data;
            if (i === ye.CONNECTED_MESSAGE)
                return this.emitter.emit("connect"),
                void (this.isConnected = !0);
            const s = {
                id: t,
                command: i,
                data: n,
                source: o
            }
              , r = Object.assign({
                reply: this.reply.bind(this, s)
            }, s);
            if (this.replies.hasOwnProperty(t)) {
                !1 === this.replies[t].bind(window)(r) && delete this.replies[t]
            } else
                this.emitter.emit(i, r)
        }
        reply(e, t, i) {
            const n = {
                id: e.id,
                command: e.command,
                data: t,
                source: y.a.getWindowEnv().toString(),
                isReply: !0
            };
            "function" == typeof i && (this.replies[n.id] = i),
            this.messagePort.postMessage(n)
        }
        postMessage(e, t, i) {
            if (!e || "" == e)
                throw new Error("(Postmam) Postmam command must not be empty.");
            if ("function" == typeof t)
                return void E.a.debug("You passed a function to data, did you mean to pass null?");
            const n = {
                id: N.a.getRandomUuid(),
                command: e,
                data: t,
                source: y.a.getWindowEnv().toString()
            };
            "function" == typeof i && (this.replies[n.id] = i),
            this.windowReference.postMessage(n, "*")
        }
        message(e, t, i) {
            if (!e || "" == e)
                throw new Error("(Postmam) Postmam command must not be empty.");
            if ("function" == typeof t)
                return void E.a.debug("You passed a function to data, did you mean to pass null?");
            const n = {
                id: N.a.getRandomUuid(),
                command: e,
                data: t,
                source: y.a.getWindowEnv().toString()
            };
            "function" == typeof i && (this.replies[n.id] = i),
            this.messagePort.postMessage(n)
        }
        generateSafeOrigins(e) {
            const t = [];
            try {
                const i = new URL(e);
                let n = i.host;
                0 === i.host.indexOf("www.") && (n = i.host.replace("www.", "")),
                "https:" === i.protocol ? (t.push(`https://${n}`),
                t.push(`https://www.${n}`)) : "http:" === i.protocol && (t.push(`http://${n}`),
                t.push(`http://www.${n}`),
                t.push(`https://${n}`),
                t.push(`https://www.${n}`))
            } catch (e) {}
            return t
        }
        isSafeOrigin(e) {
            if (OneSignal.config)
                t = OneSignal.config.subdomain;
            else
                var t = "x";
            const i = this.generateSafeOrigins(this.receiveFromOrigin);
            return "https://onesignal.com" === e || e === `https://${t || ""}.onesignal.com` || e === `https://${t || ""}.os.tc` || e === `https://${t || ""}.os.tc:3001` || e === y.a.getOneSignalApiUrl().origin || "*" === this.receiveFromOrigin || w.a.contains(i, e)
        }
        on(...e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return this.emitter.on.apply(this.emitter, e)
            })
        }
        off(...e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return this.emitter.off.apply(this.emitter, e)
            })
        }
        once(...e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return this.emitter.once.apply(this.emitter, e)
            })
        }
    }
    class we {
        constructor(e, t) {
            this.appId = e,
            this.registrationOptions = t
        }
        load() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = yield OneSignal.isPushNotificationsEnabled()
                  , t = yield OneSignal.getNotificationPermission();
                this.url = y.a.getOneSignalApiUrl(),
                this.url.pathname = "webPushModal",
                this.url.search = `${fe.getPromptOptionsQueryString()}&id=${this.appId}&httpsPrompt=true&pushEnabled=${e}&permissionBlocked=${"denied" === t}&promptType=modal`,
                E.a.info(`Loading iFrame for HTTPS subscription modal at ${this.url.toString()}`),
                this.modal = this.createHiddenSubscriptionDomModal(this.url.toString()),
                this.establishCrossOriginMessaging()
            })
        }
        createHiddenSubscriptionDomModal(e) {
            const t = document.createElement("div");
            t.setAttribute("id", "OneSignal-iframe-modal"),
            t.setAttribute("style", "display:none !important"),
            t.innerHTML = '<div id="notif-permission" style="background: rgba(0, 0, 0, 0.7); position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 3000000000; display: flex; align-items: center; justify-content: center;"></div>',
            document.body.appendChild(t);
            const i = document.createElement("style");
            i.innerHTML = "@media (max-width: 560px) { .OneSignal-permission-iframe { width: 100%; height: 100%;} }",
            document.getElementsByTagName("head")[0].appendChild(i);
            const n = document.createElement("iframe");
            return n.className = "OneSignal-permission-iframe",
            n.setAttribute("frameborder", "0"),
            n.width = OneSignal._windowWidth.toString(),
            n.height = OneSignal._windowHeight.toString(),
            n.src = e,
            document.getElementById("notif-permission").appendChild(n),
            n
        }
        removeFrame() {
            const e = document.querySelector("#OneSignal-iframe-modal");
            e && e.remove()
        }
        showSubscriptionDomModal() {
            document.getElementById("OneSignal-iframe-modal").setAttribute("style", "")
        }
        establishCrossOriginMessaging() {
            this.messenger = new ye(this.modal,this.url.origin,this.url.origin),
            this.messenger.startPostMessageReceive(),
            this.messenger.once(OneSignal.POSTMAM_COMMANDS.MODAL_LOADED, this.onModalLoaded.bind(this)),
            this.messenger.once(OneSignal.POSTMAM_COMMANDS.MODAL_PROMPT_ACCEPTED, this.onModalAccepted.bind(this)),
            this.messenger.once(OneSignal.POSTMAM_COMMANDS.MODAL_PROMPT_REJECTED, this.onModalRejected.bind(this)),
            this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_CLOSING, this.onModalClosing.bind(this))
        }
        onModalLoaded(e) {
            this.showSubscriptionDomModal(),
            S.a.trigger("modalLoaded")
        }
        onModalAccepted(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                E.a.debug("User accepted the HTTPS modal prompt.", location.origin),
                OneSignal._sessionInitAlreadyRunning = !1,
                this.dispose(),
                fe.triggerCustomPromptClicked("granted"),
                E.a.debug("Calling setSubscription(true)"),
                yield be.registerForPush(),
                yield OneSignal.setSubscription(!0)
            })
        }
        onModalRejected(e) {
            E.a.debug("User rejected the HTTPS modal prompt."),
            OneSignal._sessionInitAlreadyRunning = !1,
            this.dispose(),
            fe.triggerCustomPromptClicked("denied")
        }
        onModalClosing(e) {
            E.a.info("Detected modal is closing."),
            this.dispose()
        }
        dispose() {
            this.messenger && this.messenger.destroy(),
            this.removeFrame()
        }
        message() {
            this.messenger.message.apply(this.messenger, arguments)
        }
    }
    class Ee {
        static getRegistration(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                try {
                    const t = location.origin + e;
                    return yield navigator.serviceWorker.getRegistration(t)
                } catch (t) {
                    return E.a.warn("[Service Worker Status] Error Checking service worker registration", e, t),
                    null
                }
            })
        }
        static getAvailableServiceWorker(e) {
            const t = e.active || e.installing || e.waiting;
            return t || E.a.warn("Could not find an available ServiceWorker instance!"),
            t
        }
    }
    (ve = Se || (Se = {})).WorkerVersion = "GetWorkerVersion",
    ve.Subscribe = "Subscribe",
    ve.SubscribeNew = "SubscribeNew",
    ve.AmpSubscriptionState = "amp-web-push-subscription-state",
    ve.AmpSubscribe = "amp-web-push-subscribe",
    ve.AmpUnsubscribe = "amp-web-push-unsubscribe",
    ve.NotificationDisplayed = "notification.displayed",
    ve.NotificationClicked = "notification.clicked",
    ve.NotificationDismissed = "notification.dismissed",
    ve.RedirectPage = "command.redirect",
    ve.SessionUpsert = "os.session.upsert",
    ve.SessionDeactivate = "os.session.deactivate",
    ve.AreYouVisible = "os.page_focused_request",
    ve.AreYouVisibleResponse = "os.page_focused_response",
    ve.SetLogging = "os.set_sw_logging";
    class Ie {
        constructor() {
            this.replies = {}
        }
        addListener(e, t, i) {
            const n = {
                callback: t,
                onceListenerOnly: i
            }
              , o = this.replies[e.toString()];
            o ? o.push(n) : this.replies[e.toString()] = [n]
        }
        findListenersForMessage(e) {
            return this.replies[e.toString()] || []
        }
        deleteListenerRecords(e) {
            this.replies[e.toString()] = null
        }
        deleteAllListenerRecords() {
            this.replies = {}
        }
        deleteListenerRecord(e, t) {
            const i = this.replies[e.toString()];
            if (null != i)
                for (let e = i.length - 1; e >= 0; e--) {
                    i[e] === t && i.splice(e, 1)
                }
        }
    }
    class Pe {
        constructor(e, t=new Ie) {
            this.context = e,
            this.replies = t
        }
        broadcast(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (y.a.getWindowEnv() !== oe.a.ServiceWorker)
                    return;
                const i = yield self.clients.matchAll({
                    type: "window",
                    includeUncontrolled: !0
                });
                for (const n of i)
                    E.a.debug(`[Worker Messenger] [SW -> Page] Broadcasting '${e.toString()}' to window client ${n.url}.`),
                    n.postMessage({
                        command: e,
                        payload: t
                    })
            })
        }
        unicast(e, t, i) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (y.a.getWindowEnv() === oe.a.ServiceWorker) {
                    if (!i)
                        throw new InvalidArgumentError.a("windowClient",InvalidArgumentError.b.Empty);
                    E.a.debug(`[Worker Messenger] [SW -> Page] Unicasting '${e.toString()}' to window client ${i.url}.`),
                    i.postMessage({
                        command: e,
                        payload: t
                    })
                } else
                    E.a.debug(`[Worker Messenger] [Page -> SW] Unicasting '${e.toString()}' to service worker.`),
                    this.directPostMessageToSW(e, t)
            })
        }
        directPostMessageToSW(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                E.a.debug(`[Worker Messenger] [Page -> SW] Direct command '${e.toString()}' to service worker.`);
                const i = yield this.context.serviceWorkerManager.getRegistration();
                if (!i)
                    return void E.a.error("`[Worker Messenger] [Page -> SW] Could not get ServiceWorkerRegistration to postMessage!");
                const n = Ee.getAvailableServiceWorker(i);
                n ? n.postMessage({
                    command: e,
                    payload: t
                }) : E.a.error("`[Worker Messenger] [Page -> SW] Could not get ServiceWorker to postMessage!")
            })
        }
        listen() {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (!h.a.supportsServiceWorkers())
                    return;
                y.a.getWindowEnv() === oe.a.ServiceWorker ? (self.addEventListener("message", this.onWorkerMessageReceivedFromPage.bind(this)),
                E.a.debug("[Worker Messenger] Service worker is now listening for messages.")) : yield this.listenForPage()
            })
        }
        listenForPage() {
            return Object(d.a)(this, void 0, void 0, function*() {
                navigator.serviceWorker.addEventListener("message", this.onPageMessageReceivedFromServiceWorker.bind(this)),
                E.a.debug(`(${location.origin}) [Worker Messenger] Page is now listening for messages.`)
            })
        }
        onWorkerMessageReceivedFromPage(e) {
            const t = e.data;
            if (!t || !t.command)
                return;
            const i = this.replies.findListenersForMessage(t.command)
              , n = []
              , o = [];
            E.a.debug("[Worker Messenger] Service worker received message:", e.data);
            for (const e of i)
                e.onceListenerOnly && n.push(e),
                o.push(e);
            for (let e = n.length - 1; e >= 0; e--) {
                const i = n[e];
                this.replies.deleteListenerRecord(t.command, i)
            }
            for (const e of o)
                e.callback.apply(null, [t.payload])
        }
        onPageMessageReceivedFromServiceWorker(e) {
            const t = e.data;
            if (!t || !t.command)
                return;
            const i = this.replies.findListenersForMessage(t.command)
              , n = []
              , o = [];
            E.a.debug("[Worker Messenger] Page received message:", e.data);
            for (const e of i)
                e.onceListenerOnly && n.push(e),
                o.push(e);
            for (let e = n.length - 1; e >= 0; e--) {
                const i = n[e];
                this.replies.deleteListenerRecord(t.command, i)
            }
            for (const e of o)
                e.callback.apply(null, [t.payload])
        }
        on(e, t) {
            this.replies.addListener(e, t, !1)
        }
        once(e, t) {
            this.replies.addListener(e, t, !0)
        }
        off(e) {
            e ? this.replies.deleteListenerRecords(e) : this.replies.deleteAllListenerRecords()
        }
    }
    class Ce {
        constructor() {
            this.cache = {}
        }
        getCache() {
            return Object.assign({}, this.cache)
        }
        loadSdkStylesheet() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = y.a.getOneSignalResourceUrlPath()
                  , t = y.a.getOneSignalCssFileName();
                return yield this.loadIfNew(0, new URL(`${e}/${t}?v=${h.a.getSdkStylesVersionHash()}`))
            })
        }
        loadFetchPolyfill() {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield this.loadIfNew(1, new URL("https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js"))
            })
        }
        loadIfNew(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return this.cache[t.toString()] || (this.cache[t.toString()] = Ce.load(e, t)),
                yield this.cache[t.toString()]
            })
        }
        static load(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                try {
                    return yield new Promise((i,n)=>{
                        switch (e) {
                        case 1:
                            (o = document.createElement("script")).setAttribute("type", "text/javascript"),
                            o.setAttribute("async", "async"),
                            o.setAttribute("src", t.toString());
                            break;
                        case 0:
                            var o;
                            (o = document.createElement("link")).setAttribute("rel", "stylesheet"),
                            o.setAttribute("href", t.toString())
                        }
                        o.onerror = n,
                        o.onload = i,
                        document.querySelector("head").appendChild(o)
                    }
                    ),
                    0
                } catch (e) {
                    return 1
                }
            })
        }
    }
    var Te, Ae, Me, Ne = i(15), xe = i(23);
    class ke {
        constructor(e, t, i, n="shown", o=["opacity", "transform"], s, r=500) {
            this.selector = e,
            this.showClass = t,
            this.hideClass = i,
            this.state = n,
            this.targetTransitionEvents = o,
            this.nestedContentSelector = s,
            this.transitionCheckTimeout = r
        }
        show() {
            return this.hidden ? new Promise(e=>{
                this.state = "showing",
                S.a.trigger(ke.EVENTS.SHOWING, this);
                const t = this.element;
                if (t ? (this.hideClass && Object(X.v)(t, this.hideClass),
                this.showClass && Object(X.a)(t, this.showClass)) : E.a.error(`(show) could not find animated element with selector ${this.selector}`),
                0 == this.targetTransitionEvents.length)
                    return e(this);
                var i = setTimeout(()=>{
                    E.a.debug(`Element did not completely show (state: ${this.state}).`)
                }
                , this.transitionCheckTimeout);
                Object(X.u)(this.element, "transitionend", (t,n)=>{
                    if (t.target === this.element && Object(X.f)(this.targetTransitionEvents, t.propertyName))
                        return clearTimeout(i),
                        n(),
                        this.state = "shown",
                        S.a.trigger(ke.EVENTS.SHOWN, this),
                        e(this)
                }
                , !0)
            }
            ) : Promise.resolve(this)
        }
        hide() {
            return this.shown ? new Promise(e=>{
                this.state = "hiding",
                S.a.trigger(ke.EVENTS.HIDING, this);
                const t = this.element;
                if (t ? (this.showClass && Object(X.v)(t, this.showClass),
                this.hideClass && Object(X.a)(t, this.hideClass)) : E.a.error(`(hide) could not find animated element with selector ${this.selector}`),
                0 == this.targetTransitionEvents.length)
                    return e(this);
                Object(X.u)(this.element, "transitionend", (t,i)=>{
                    var n = setTimeout(()=>{
                        E.a.debug(`Element did not completely hide (state: ${this.state}).`)
                    }
                    , this.transitionCheckTimeout);
                    if (t.target === this.element && Object(X.f)(this.targetTransitionEvents, t.propertyName))
                        return clearTimeout(n),
                        i(),
                        this.state = "hidden",
                        S.a.trigger(ke.EVENTS.HIDDEN, this),
                        e(this)
                }
                , !0)
            }
            ) : Promise.resolve(this)
        }
        waitUntilShown() {
            return "shown" === this.state ? Promise.resolve(this) : new Promise(e=>{
                Bi.emitter.once(ke.EVENTS.SHOWN, t=>{
                    if (t === this)
                        return e(this)
                }
                )
            }
            )
        }
        waitUntilHidden() {
            return "hidden" === this.state ? Promise.resolve(this) : new Promise(e=>{
                Bi.emitter.once(ke.EVENTS.HIDDEN, t=>{
                    if (t === this)
                        return e(this)
                }
                )
            }
            )
        }
        static get EVENTS() {
            return {
                SHOWING: "animatedElementShowing",
                SHOWN: "animatedElementShown",
                HIDING: "animatedElementHiding",
                HIDDEN: "animatedElementHidden"
            }
        }
        get content() {
            if (!this.element)
                return "";
            if (this.nestedContentSelector) {
                const e = this.element.querySelector(this.nestedContentSelector);
                return e ? e.innerHTML : ""
            }
            return this.element.innerHTML
        }
        set content(e) {
            if (this.element)
                if (this.nestedContentSelector) {
                    const t = this.element.querySelector(this.nestedContentSelector);
                    t && (t.innerHTML = e)
                } else
                    this.element.innerHTML = e
        }
        get element() {
            return document.querySelector(this.selector)
        }
        get showing() {
            return "showing" === this.state
        }
        get shown() {
            return "shown" === this.state
        }
        get hiding() {
            return "hiding" === this.state
        }
        get hidden() {
            return "hidden" === this.state
        }
    }
    class je extends ke {
        constructor(e, t, i, n, o, s="shown", r="active", a=["opacity", "transform"], c) {
            super(e, t, i, s, a),
            this.selector = e,
            this.showClass = t,
            this.hideClass = i,
            this.activeClass = n,
            this.inactiveClass = o,
            this.state = s,
            this.activeState = r,
            this.targetTransitionEvents = a,
            this.nestedContentSelector = c
        }
        activate() {
            return this.inactive && this.shown ? new Promise(e=>{
                this.activeState = "activating",
                S.a.trigger(je.EVENTS.ACTIVATING, this);
                const t = this.element;
                if (t ? (this.inactiveClass && Object(X.v)(t, this.inactiveClass),
                this.activeClass && Object(X.a)(t, this.activeClass)) : E.a.error("Could not find active animated element"),
                !this.shown)
                    return E.a.debug("Ending activate() transition (alternative)."),
                    this.activeState = "active",
                    S.a.trigger(je.EVENTS.ACTIVE, this),
                    e(this);
                if (0 == this.targetTransitionEvents.length)
                    return e(this);
                var i = setTimeout(()=>{
                    E.a.debug(`Element did not completely activate (state: ${this.state}, activeState: ${this.activeState}).`)
                }
                , this.transitionCheckTimeout);
                Object(X.u)(this.element, "transitionend", (t,n)=>{
                    if (t.target === this.element && Object(X.f)(this.targetTransitionEvents, t.propertyName))
                        return clearTimeout(i),
                        n(),
                        this.activeState = "active",
                        S.a.trigger(je.EVENTS.ACTIVE, this),
                        e(this)
                }
                , !0)
            }
            ) : Promise.resolve(this)
        }
        inactivate() {
            return this.active ? new Promise(e=>{
                this.activeState = "inactivating",
                S.a.trigger(je.EVENTS.INACTIVATING, this);
                const t = this.element;
                if (t ? (this.activeClass && Object(X.v)(t, this.activeClass),
                this.inactiveClass && Object(X.a)(t, this.inactiveClass)) : E.a.error("Could not find active animated element"),
                !this.shown)
                    return this.activeState = "inactive",
                    S.a.trigger(je.EVENTS.INACTIVE, this),
                    e(this);
                if (0 == this.targetTransitionEvents.length)
                    return e(this);
                var i = setTimeout(()=>{
                    E.a.debug(`Element did not completely inactivate (state: ${this.state}, activeState: ${this.activeState}).`)
                }
                , this.transitionCheckTimeout);
                Object(X.u)(this.element, "transitionend", (t,n)=>{
                    if (t.target === this.element && Object(X.f)(this.targetTransitionEvents, t.propertyName))
                        return clearTimeout(i),
                        n(),
                        this.activeState = "inactive",
                        S.a.trigger(je.EVENTS.INACTIVE, this),
                        e(this)
                }
                , !0)
            }
            ) : Promise.resolve(this)
        }
        waitUntilActive() {
            return this.active ? Promise.resolve(this) : new Promise(e=>{
                Bi.emitter.once(je.EVENTS.ACTIVE, t=>{
                    if (t === this)
                        return e(this)
                }
                )
            }
            )
        }
        waitUntilInactive() {
            return this.inactive ? Promise.resolve(this) : new Promise(e=>{
                Bi.emitter.once(je.EVENTS.INACTIVE, t=>{
                    if (t === this)
                        return e(this)
                }
                )
            }
            )
        }
        static get EVENTS() {
            return Object.assign(Object.assign({}, ke.EVENTS), {
                ACTIVATING: "activeAnimatedElementActivating",
                ACTIVE: "activeAnimatedElementActive",
                INACTIVATING: "activeAnimatedElementInactivating",
                INACTIVE: "activeAnimatedElementInactive"
            })
        }
        get activating() {
            return "activating" === this.activeState
        }
        get active() {
            return "active" === this.activeState
        }
        get inactivating() {
            return "inactivating" === this.activeState
        }
        get inactive() {
            return "inactive" === this.activeState
        }
    }
    class _e extends je {
        constructor() {
            super(".onesignal-bell-launcher-badge", "onesignal-bell-launcher-badge-opened", null, "onesignal-bell-launcher-badge-active", null, "hidden")
        }
        increment() {
            if (!isNaN(this.content)) {
                let e = +this.content;
                e += 1,
                this.content = e.toString()
            }
        }
        show() {
            const e = super.show();
            return OneSignal.notifyButton.setCustomColorsIfSpecified(),
            e
        }
        decrement() {
            if (!isNaN(this.content)) {
                let e = +this.content;
                e -= 1,
                this.content = e > 0 ? e.toString() : ""
            }
        }
    }
    class De extends ke {
        constructor(e) {
            super(".onesignal-bell-launcher-message", "onesignal-bell-launcher-message-opened", void 0, "hidden", ["opacity", "transform"], ".onesignal-bell-launcher-message-body"),
            this.bell = e,
            this.contentType = "",
            this.queued = []
        }
        static get TIMEOUT() {
            return 2500
        }
        static get TYPES() {
            return {
                TIP: "tip",
                MESSAGE: "message",
                QUEUED: "queued"
            }
        }
        display(e, t, i=0) {
            return E.a.debug(`Calling %cdisplay(${e}, ${t}, ${i}).`, Object(X.k)("code")),
            (this.shown ? this.hide() : Object(X.t)()).then(()=>{
                this.content = Object(X.g)(t),
                this.contentType = e
            }
            ).then(()=>this.show()).then(()=>Object(X.i)(i)).then(()=>this.hide()).then(()=>{
                this.content = this.getTipForState(),
                this.contentType = "tip"
            }
            )
        }
        getTipForState() {
            return this.bell.state === Ke.STATES.UNSUBSCRIBED ? this.bell.options.text["tip.state.unsubscribed"] : this.bell.state === Ke.STATES.SUBSCRIBED ? this.bell.options.text["tip.state.subscribed"] : this.bell.state === Ke.STATES.BLOCKED ? this.bell.options.text["tip.state.blocked"] : ""
        }
        enqueue(e) {
            return this.queued.push(Object(X.g)(e)),
            new Promise(e=>{
                this.bell.badge.shown ? this.bell.badge.hide().then(()=>this.bell.badge.increment()).then(()=>this.bell.badge.show()).then(e) : (this.bell.badge.increment(),
                this.bell.initialized ? this.bell.badge.show().then(e) : e())
            }
            )
        }
        dequeue(e) {
            const t = this.queued.pop(e);
            return new Promise(e=>{
                this.bell.badge.shown ? this.bell.badge.hide().then(()=>this.bell.badge.decrement()).then(e=>e > 0 ? this.bell.badge.show() : Promise.resolve(this)).then(e(t)) : (this.bell.badge.decrement(),
                e(t))
            }
            )
        }
    }
    class Re extends je {
        constructor(e) {
            super(".onesignal-bell-launcher-button", void 0, void 0, "onesignal-bell-launcher-button-active", void 0, "shown", ""),
            this.bell = e,
            this.events = {
                mouse: "bell.launcher.button.mouse"
            };
            const t = this.element;
            t && (t.addEventListener("touchstart", ()=>{
                this.onHovering(),
                this.onTap()
            }
            , {
                passive: !0
            }),
            t.addEventListener("mouseenter", ()=>{
                this.onHovering()
            }
            ),
            t.addEventListener("mouseleave", ()=>{
                this.onHovered()
            }
            ),
            t.addEventListener("touchmove", ()=>{
                this.onHovered()
            }
            , {
                passive: !0
            }),
            t.addEventListener("mousedown", ()=>{
                this.onTap()
            }
            ),
            t.addEventListener("mouseup", ()=>{
                this.onEndTap()
            }
            ),
            t.addEventListener("click", ()=>{
                this.onHovered(),
                this.onClick()
            }
            ))
        }
        onHovering() {
            (v.isEmpty(this.events.mouse) || "out" === v.getLast(this.events.mouse)) && S.a.trigger(Ke.EVENTS.HOVERING),
            v.put(this.events.mouse, "over")
        }
        onHovered() {
            v.put(this.events.mouse, "out"),
            S.a.trigger(Ke.EVENTS.HOVERED)
        }
        onTap() {
            this.pulse(),
            this.activate(),
            this.bell.badge.activate()
        }
        onEndTap() {
            this.inactivate(),
            this.bell.badge.inactivate()
        }
        onClick() {
            if (S.a.trigger(Ke.EVENTS.BELL_CLICK),
            S.a.trigger(Ke.EVENTS.LAUNCHER_CLICK),
            !this.bell.message.shown || this.bell.message.contentType != De.TYPES.MESSAGE) {
                var e = v.getLast("subscription.optedOut");
                return this.bell.unsubscribed ? e ? this.bell.launcher.activateIfInactive().then(()=>{
                    this.bell.showDialogProcedure()
                }
                ) : (Bi.registerForPushNotifications(),
                this.bell._ignoreSubscriptionState = !0,
                Bi.emitter.once(Bi.EVENTS.SUBSCRIPTION_CHANGED, ()=>{
                    this.bell.message.display(De.TYPES.MESSAGE, this.bell.options.text["message.action.subscribed"], De.TIMEOUT).then(()=>{
                        this.bell._ignoreSubscriptionState = !1,
                        this.bell.launcher.inactivate()
                    }
                    )
                }
                )) : this.bell.subscribed ? this.bell.launcher.activateIfInactive().then(()=>{
                    this.bell.showDialogProcedure()
                }
                ) : this.bell.blocked && (Object(X.q)() ? Bi.registerForPushNotifications() : this.bell.launcher.activateIfInactive().then(()=>{
                    this.bell.showDialogProcedure()
                }
                )),
                this.bell.message.hide()
            }
        }
        pulse() {
            Object(X.w)(".pulse-ring"),
            this.element && Object(X.b)(this.element, "beforeend", '<div class="pulse-ring"></div>'),
            this.bell.setCustomColorsIfSpecified()
        }
    }
    class Ue extends ke {
        constructor(e) {
            super(".onesignal-bell-launcher-dialog", "onesignal-bell-launcher-dialog-opened", void 0, "hidden", ["opacity", "transform"], ".onesignal-bell-launcher-dialog-body"),
            this.bell = e,
            this.subscribeButtonId = "#onesignal-bell-container .onesignal-bell-launcher #subscribe-button",
            this.unsubscribeButtonId = "#onesignal-bell-container .onesignal-bell-launcher #unsubscribe-button",
            this.notificationIcons = null
        }
        show() {
            return this.updateBellLauncherDialogBody().then(()=>super.show())
        }
        get subscribeButtonSelectorId() {
            return "subscribe-button"
        }
        get unsubscribeButtonSelectorId() {
            return "unsubscribe-button"
        }
        get subscribeButton() {
            return this.element ? this.element.querySelector("#" + this.subscribeButtonSelectorId) : null
        }
        get unsubscribeButton() {
            return this.element ? this.element.querySelector("#" + this.unsubscribeButtonSelectorId) : null
        }
        updateBellLauncherDialogBody() {
            return OneSignal.getSubscription().then(e=>{
                this.nestedContentSelector && Object(X.e)(this.nestedContentSelector);
                let t = "Nothing to show.";
                var i = "";
                if (this.bell.options.showCredit && (i = '<div class="divider"></div><div class="kickback">Powered by <a href="https://onesignal.com" class="kickback" target="_blank">OneSignal</a></div>'),
                this.bell.state === Ke.STATES.SUBSCRIBED && !0 === e || this.bell.state === Ke.STATES.UNSUBSCRIBED && !1 === e) {
                    let e = "";
                    const n = Object(X.m)(this.notificationIcons);
                    e = "default-icon" != n ? `<div class="push-notification-icon"><img src="${n}"></div>` : '<div class="push-notification-icon push-notification-icon-default"></div>';
                    let o = "";
                    o = this.bell.state !== Ke.STATES.SUBSCRIBED ? `<button type="button" class="action" id="${this.subscribeButtonSelectorId}">${this.bell.options.text["dialog.main.button.subscribe"]}</button>` : `<button type="button" class="action" id="${this.unsubscribeButtonSelectorId}">${this.bell.options.text["dialog.main.button.unsubscribe"]}</button>`,
                    t = `<h1>${this.bell.options.text["dialog.main.title"]}</h1><div class="divider"></div><div class="push-notification">${e}<div class="push-notification-text-container"><div class="push-notification-text push-notification-text-short"></div><div class="push-notification-text"></div><div class="push-notification-text push-notification-text-medium"></div><div class="push-notification-text"></div><div class="push-notification-text push-notification-text-medium"></div></div></div><div class="action-container">${o}</div>${i}`
                } else if (this.bell.state === Ke.STATES.BLOCKED) {
                    let e = null;
                    g.a.chrome ? g.a.mobile || g.a.tablet || (e = "/bell/chrome-unblock.jpg") : g.a.firefox ? e = "/bell/firefox-unblock.jpg" : g.a.safari ? e = "/bell/safari-unblock.jpg" : g.a.msedge && (e = "/bell/edge-unblock.png");
                    let n = "";
                    e && (n = `<a href="${e = y.a.getOneSignalStaticResourcesUrl() + e}" target="_blank"><img src="${e}"></a></div>`),
                    (g.a.mobile || g.a.tablet) && g.a.chrome && (n = "<ol><li>Access <strong>Settings</strong> by tapping the three menu dots <strong>⋮</strong></li><li>Click <strong>Site settings</strong> under Advanced.</li><li>Click <strong>Notifications</strong>.</li><li>Find and click this entry for this website.</li><li>Click <strong>Notifications</strong> and set it to <strong>Allow</strong>.</li></ol>"),
                    t = `<h1>${this.bell.options.text["dialog.blocked.title"]}</h1><div class="divider"></div><div class="instructions"><p>${this.bell.options.text["dialog.blocked.message"]}</p>${n}</div>${i}`
                }
                this.nestedContentSelector && Object(X.b)(this.nestedContentSelector, "beforeend", t),
                this.subscribeButton && this.subscribeButton.addEventListener("click", ()=>{
                    OneSignal.__doNotShowWelcomeNotification = !1,
                    S.a.trigger(Ke.EVENTS.SUBSCRIBE_CLICK)
                }
                ),
                this.unsubscribeButton && this.unsubscribeButton.addEventListener("click", ()=>S.a.trigger(Ke.EVENTS.UNSUBSCRIBE_CLICK)),
                this.bell.setCustomColorsIfSpecified()
            }
            )
        }
    }
    class We extends je {
        constructor(e) {
            super(".onesignal-bell-launcher", "onesignal-bell-launcher-active", void 0, void 0, "onesignal-bell-launcher-inactive", "hidden", "active"),
            this.bell = e,
            this.wasInactive = !1
        }
        resize(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (!this.element)
                    throw new m(o.MissingDomElement);
                if ("small" === e && Object(X.o)(this.element, "onesignal-bell-launcher-sm") || "medium" === e && Object(X.o)(this.element, "onesignal-bell-launcher-md") || "large" === e && Object(X.o)(this.element, "onesignal-bell-launcher-lg"))
                    return Promise.resolve(this);
                if (Object(X.v)(this.element, "onesignal-bell-launcher-sm"),
                Object(X.v)(this.element, "onesignal-bell-launcher-md"),
                Object(X.v)(this.element, "onesignal-bell-launcher-lg"),
                "small" === e)
                    Object(X.a)(this.element, "onesignal-bell-launcher-sm");
                else if ("medium" === e)
                    Object(X.a)(this.element, "onesignal-bell-launcher-md");
                else {
                    if ("large" !== e)
                        throw new Error("Invalid OneSignal bell size " + e);
                    Object(X.a)(this.element, "onesignal-bell-launcher-lg")
                }
                return this.shown ? yield new Promise(e=>{
                    if (0 == this.targetTransitionEvents.length)
                        return e(this);
                    var t = setTimeout(()=>{
                        E.a.debug(`Launcher did not completely resize (state: ${this.state}, activeState: ${this.activeState}).`)
                    }
                    , this.transitionCheckTimeout);
                    Object(X.u)(this.element, "transitionend", (i,n)=>{
                        if (i.target === this.element && Object(X.f)(this.targetTransitionEvents, i.propertyName))
                            return clearTimeout(t),
                            n(),
                            e(this)
                    }
                    , !0)
                }
                ) : this
            })
        }
        activateIfInactive() {
            return this.inactive ? (this.wasInactive = !0,
            this.activate()) : Object(X.t)()
        }
        inactivateIfWasInactive() {
            return this.wasInactive ? (this.wasInactive = !1,
            this.inactivate()) : Object(X.t)()
        }
        clearIfWasInactive() {
            this.wasInactive = !1
        }
        inactivate() {
            return this.bell.message.hide().then(()=>this.bell.badge.content.length > 0 ? this.bell.badge.hide().then(()=>Promise.all([super.inactivate(), this.resize("small")])).then(()=>this.bell.badge.show()) : Promise.all([super.inactivate(), this.resize("small")]))
        }
        activate() {
            return this.bell.badge.content.length > 0 ? this.bell.badge.hide().then(()=>Promise.all([super.activate(), this.resize(this.bell.options.size)])) : Promise.all([super.activate(), this.resize(this.bell.options.size)])
        }
    }
    class Be {
        static isLocalStorageSupported() {
            try {
                return "undefined" != typeof localStorage && (localStorage.getItem("test"),
                !0)
            } catch (e) {
                return !1
            }
        }
        static setItem(e, t, i) {
            if (!Be.isLocalStorageSupported())
                return;
            const n = void 0 !== i ? 60 * i * 1e3 : 0
              , o = {
                value: JSON.stringify(t),
                timestamp: void 0 !== i ? (new Date).getTime() + n : void 0
            };
            localStorage.setItem(e, JSON.stringify(o))
        }
        static getItem(e) {
            if (!Be.isLocalStorageSupported())
                return null;
            const t = localStorage.getItem(e);
            let i;
            try {
                i = JSON.parse(t)
            } catch (e) {
                return null
            }
            if (null === i)
                return null;
            if (i.timestamp && (new Date).getTime() >= i.timestamp)
                return localStorage.removeItem(e),
                null;
            let n = i.value;
            try {
                n = JSON.parse(i.value)
            } catch (e) {
                return n
            }
            return n
        }
        static removeItem(e) {
            if (!Be.isLocalStorageSupported())
                return null;
            localStorage.removeItem(e)
        }
    }
    !function(e) {
        e.Push = "push",
        e.NonPush = "nonPush"
    }(Te || (Te = {})),
    function(e) {
        e.PromptDismissCount = "promptDismissCount",
        e.NonPushPromptsDismissCount = "nonPushPromptsDismissCount"
    }(Ae || (Ae = {})),
    function(e) {
        e.OneSignalNotificationPrompt = "onesignal-notification-prompt",
        e.OneSignalNonPushPrompt = "onesignal-non-push-prompt"
    }(Me || (Me = {}));
    const Le = {
        [Te.Push]: Ae.PromptDismissCount,
        [Te.NonPush]: Ae.NonPushPromptsDismissCount
    }
      , Ve = {
        [Te.Push]: Me.OneSignalNotificationPrompt,
        [Te.NonPush]: Me.OneSignalNonPushPrompt
    };
    class Fe {
        static markPromptDismissedWithType(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (Object(X.q)())
                    try {
                        yield new Promise((e,t)=>{
                            OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.MARK_PROMPT_DISMISSED, {}, i=>{
                                i.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? e() : t()
                            }
                            )
                        }
                        )
                    } catch (e) {
                        E.a.debug("Proxy Frame possibly didn't not receive MARK_PROMPT_DISMISSED message", e || "")
                    }
                const t = Le[e]
                  , i = Ve[e];
                let n = yield M.a.get("Options", t);
                n || (n = 0),
                Object(X.q)() || (n += 1);
                let o = 3;
                2 == n ? o = 7 : n > 2 && (o = 30),
                E.a.debug(`(${y.a.getWindowEnv().toString()}) OneSignal: User dismissed the ${e} ` + `notification prompt; reprompt after ${o} days.`),
                yield M.a.put("Options", {
                    key: t,
                    value: n
                });
                const s = 24 * o * 60;
                return Be.setItem(i, "dismissed", s)
            })
        }
        static wasPromptOfTypeDismissed(e) {
            switch (e) {
            case Te.Push:
                return "dismissed" === Be.getItem(Me.OneSignalNotificationPrompt);
            case Te.NonPush:
                return "dismissed" === Be.getItem(Me.OneSignalNonPushPrompt)
            }
            return !1
        }
    }
    var He, $e, Ge, ze, qe = '<svg class="onesignal-bell-svg" xmlns="http://www.w3.org/2000/svg" width="99.7" height="99.7" viewBox="0 0 99.7 99.7"><circle class="background" cx="49.9" cy="49.9" r="49.9"/><path class="foreground" d="M50.1 66.2H27.7s-2-.2-2-2.1c0-1.9 1.7-2 1.7-2s6.7-3.2 6.7-5.5S33 52.7 33 43.3s6-16.6 13.2-16.6c0 0 1-2.4 3.9-2.4 2.8 0 3.8 2.4 3.8 2.4 7.2 0 13.2 7.2 13.2 16.6s-1 11-1 13.3c0 2.3 6.7 5.5 6.7 5.5s1.7.1 1.7 2c0 1.8-2.1 2.1-2.1 2.1H50.1zm-7.2 2.3h14.5s-1 6.3-7.2 6.3-7.3-6.3-7.3-6.3z"/><ellipse class="stroke" cx="49.9" cy="49.9" rx="37.4" ry="36.9"/></svg>';
    class Ke {
        constructor(e, t) {
            this.state = Ke.STATES.UNINITIALIZED,
            this._ignoreSubscriptionState = !1,
            this.hovering = !1,
            this.initialized = !1,
            this.DEFAULT_SIZE = "medium",
            this.DEFAULT_POSITION = "bottom-right",
            this.DEFAULT_THEME = "default",
            this.options = {
                enable: e.enable || !1,
                size: e.size || this.DEFAULT_SIZE,
                position: e.position || this.DEFAULT_POSITION,
                theme: e.theme || this.DEFAULT_THEME,
                showLauncherAfter: e.showLauncherAfter || 10,
                showBadgeAfter: e.showBadgeAfter || 300,
                text: this.setDefaultTextOptions(e.text || {}),
                prenotify: e.prenotify,
                showCredit: e.showCredit,
                colors: e.colors,
                offset: e.offset
            },
            t && (this._launcher = t),
            this.options.enable && (this.validateOptions(this.options),
            this.state = Ke.STATES.UNINITIALIZED,
            this._ignoreSubscriptionState = !1,
            this.installEventHooks(),
            this.updateState())
        }
        static get EVENTS() {
            return {
                STATE_CHANGED: "notifyButtonStateChange",
                LAUNCHER_CLICK: "notifyButtonLauncherClick",
                BELL_CLICK: "notifyButtonButtonClick",
                SUBSCRIBE_CLICK: "notifyButtonSubscribeClick",
                UNSUBSCRIBE_CLICK: "notifyButtonUnsubscribeClick",
                HOVERING: "notifyButtonHovering",
                HOVERED: "notifyButtonHover"
            }
        }
        static get STATES() {
            return {
                UNINITIALIZED: "uninitialized",
                SUBSCRIBED: "subscribed",
                UNSUBSCRIBED: "unsubscribed",
                BLOCKED: "blocked"
            }
        }
        static get TEXT_SUBS() {
            return {
                "prompt.native.grant": {
                    default: "Allow",
                    chrome: "Allow",
                    firefox: "Always Receive Notifications",
                    safari: "Allow"
                }
            }
        }
        showDialogProcedure() {
            this.dialog.shown || this.dialog.show().then(()=>{
                Object(X.u)(document, "click", (e,t)=>{
                    this.dialog.element.contains(e.target) || (t(),
                    this.dialog.shown && this.dialog.hide().then(()=>{
                        this.launcher.inactivateIfWasInactive()
                    }
                    ))
                }
                , !0)
            }
            )
        }
        validateOptions(e) {
            if (!e.size || !Object(X.f)(["small", "medium", "large"], e.size))
                throw new Error(`Invalid size ${e.size} for notify button. Choose among 'small', 'medium', or 'large'.`);
            if (!e.position || !Object(X.f)(["bottom-left", "bottom-right"], e.position))
                throw new Error(`Invalid position ${e.position} for notify button. Choose either 'bottom-left', or 'bottom-right'.`);
            if (!e.theme || !Object(X.f)(["default", "inverse"], e.theme))
                throw new Error(`Invalid theme ${e.theme} for notify button. Choose either 'default', or 'inverse'.`);
            if (!e.showLauncherAfter || e.showLauncherAfter < 0)
                throw new Error(`Invalid delay duration of ${this.options.showLauncherAfter} for showing the notify button. Choose a value above 0.`);
            if (!e.showBadgeAfter || e.showBadgeAfter < 0)
                throw new Error(`Invalid delay duration of ${this.options.showBadgeAfter} for showing the notify button's badge. Choose a value above 0.`)
        }
        setDefaultTextOptions(e) {
            return {
                "tip.state.unsubscribed": e["tip.state.unsubscribed"] || "Subscribe to notifications",
                "tip.state.subscribed": e["tip.state.subscribed"] || "You're subscribed to notifications",
                "tip.state.blocked": e["tip.state.blocked"] || "You've blocked notifications",
                "message.prenotify": e["message.prenotify"] || "Click to subscribe to notifications",
                "message.action.subscribed": e["message.action.subscribed"] || "Thanks for subscribing!",
                "message.action.resubscribed": e["message.action.resubscribed"] || "You're subscribed to notifications",
                "message.action.subscribing": e["message.action.subscribing"] || "Click <strong>{{prompt.native.grant}}</strong> to receive notifications",
                "message.action.unsubscribed": e["message.action.unsubscribed"] || "You won't receive notifications again",
                "dialog.main.title": e["dialog.main.title"] || "Manage Site Notifications",
                "dialog.main.button.subscribe": e["dialog.main.button.subscribe"] || "SUBSCRIBE",
                "dialog.main.button.unsubscribe": e["dialog.main.button.unsubscribe"] || "UNSUBSCRIBE",
                "dialog.blocked.title": e["dialog.blocked.title"] || "Unblock Notifications",
                "dialog.blocked.message": e["dialog.blocked.message"] || "Follow these instructions to allow notifications:"
            }
        }
        installEventHooks() {
            Bi.emitter.on(Ke.EVENTS.SUBSCRIBE_CLICK, ()=>{
                this.dialog.subscribeButton.disabled = !0,
                this._ignoreSubscriptionState = !0,
                Bi.setSubscription(!0).then(()=>(this.dialog.subscribeButton.disabled = !1,
                this.dialog.hide())).then(()=>this.message.display(De.TYPES.MESSAGE, this.options.text["message.action.resubscribed"], De.TIMEOUT)).then(()=>(this._ignoreSubscriptionState = !1,
                this.launcher.clearIfWasInactive(),
                this.launcher.inactivate())).then(()=>this.updateState())
            }
            ),
            Bi.emitter.on(Ke.EVENTS.UNSUBSCRIBE_CLICK, ()=>{
                this.dialog.unsubscribeButton.disabled = !0,
                Bi.setSubscription(!1).then(()=>(this.dialog.unsubscribeButton.disabled = !1,
                this.dialog.hide())).then(()=>(this.launcher.clearIfWasInactive(),
                this.launcher.activate())).then(()=>this.message.display(De.TYPES.MESSAGE, this.options.text["message.action.unsubscribed"], De.TIMEOUT)).then(()=>this.updateState())
            }
            ),
            Bi.emitter.on(Ke.EVENTS.HOVERING, ()=>{
                this.hovering = !0,
                this.launcher.activateIfInactive(),
                this.message.shown || this.dialog.shown ? this.hovering = !1 : this.message.contentType !== De.TYPES.MESSAGE ? new Promise(e=>{
                    if (this.message.queued.length > 0)
                        return this.message.dequeue().then(t=>{
                            this.message.content = t,
                            this.message.contentType = De.TYPES.QUEUED,
                            e()
                        }
                        );
                    this.message.content = Object(X.g)(this.message.getTipForState()),
                    this.message.contentType = De.TYPES.TIP,
                    e()
                }
                ).then(()=>this.message.show()).then(()=>{
                    this.hovering = !1
                }
                ) : this.hovering = !1
            }
            ),
            Bi.emitter.on(Ke.EVENTS.HOVERED, ()=>{
                this.message.contentType !== De.TYPES.MESSAGE && this.dialog.hidden && (this.hovering && (this.hovering = !1,
                this.message.waitUntilShown().then(()=>Object(X.i)(De.TIMEOUT)).then(()=>this.message.hide()).then(()=>{
                    this.launcher.wasInactive && this.dialog.hidden && (this.launcher.inactivate(),
                    this.launcher.wasInactive = !1)
                }
                )),
                this.message.shown && this.message.hide().then(()=>{
                    this.launcher.wasInactive && this.dialog.hidden && (this.launcher.inactivate(),
                    this.launcher.wasInactive = !1)
                }
                ))
            }
            ),
            Bi.emitter.on(Bi.EVENTS.SUBSCRIPTION_CHANGED, e=>Object(d.a)(this, void 0, void 0, function*() {
                if (1 == e && (this.badge.shown && this.options.prenotify && this.badge.hide(),
                null === this.dialog.notificationIcons)) {
                    const e = yield fe.getNotificationIcons();
                    this.dialog.notificationIcons = e
                }
                Bi.getNotificationPermission(t=>{
                    let i;
                    i = e ? Ke.STATES.SUBSCRIBED : t === A.Denied ? Ke.STATES.BLOCKED : Ke.STATES.UNSUBSCRIBED,
                    this.setState(i, this._ignoreSubscriptionState)
                }
                )
            })),
            Bi.emitter.on(Ke.EVENTS.STATE_CHANGED, e=>{
                this.launcher.element && (e.to === Ke.STATES.SUBSCRIBED ? this.launcher.inactivate() : (e.to === Ke.STATES.UNSUBSCRIBED || Ke.STATES.BLOCKED) && this.launcher.activate())
            }
            ),
            Bi.emitter.on(Bi.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, ()=>{
                this.updateState()
            }
            )
        }
        addDefaultClasses() {
            const e = this.container;
            if ("bottom-left" === this.options.position)
                e && Object(X.a)(e, "onesignal-bell-container-bottom-left"),
                Object(X.a)(this.launcher.selector, "onesignal-bell-launcher-bottom-left");
            else {
                if ("bottom-right" !== this.options.position)
                    throw new Error("Invalid OneSignal notify button position " + this.options.position);
                e && Object(X.a)(e, "onesignal-bell-container-bottom-right"),
                Object(X.a)(this.launcher.selector, "onesignal-bell-launcher-bottom-right")
            }
            if ("default" === this.options.theme)
                Object(X.a)(this.launcher.selector, "onesignal-bell-launcher-theme-default");
            else {
                if ("inverse" !== this.options.theme)
                    throw new Error("Invalid OneSignal notify button theme " + this.options.theme);
                Object(X.a)(this.launcher.selector, "onesignal-bell-launcher-theme-inverse")
            }
        }
        create() {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (!this.options.enable)
                    return;
                if (0 !== (yield Bi.context.dynamicResourceLoader.loadSdkStylesheet()))
                    return void E.a.debug("Not showing notify button because styles failed to load.");
                this.container && Object(X.w)("#onesignal-bell-container"),
                Object(X.b)("body", "beforeend", '<div id="onesignal-bell-container" class="onesignal-bell-container onesignal-reset"></div>'),
                this.container && Object(X.b)(this.container, "beforeend", '<div id="onesignal-bell-launcher" class="onesignal-bell-launcher"></div>'),
                Object(X.b)(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-button"></div>'),
                Object(X.b)(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-badge"></div>'),
                Object(X.b)(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-message"></div>'),
                Object(X.b)(this.message.selector, "beforeend", '<div class="onesignal-bell-launcher-message-body"></div>'),
                Object(X.b)(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-dialog"></div>'),
                Object(X.b)(this.dialog.selector, "beforeend", '<div class="onesignal-bell-launcher-dialog-body"></div>'),
                Object(X.b)(this.button.selector, "beforeend", qe);
                const e = yield Bi.isPushNotificationsEnabled()
                  , t = yield Bi.getSubscription()
                  , i = Fe.wasPromptOfTypeDismissed(Te.Push)
                  , n = e ? "small" : this.options.size || this.DEFAULT_SIZE;
                yield this.launcher.resize(n),
                this.addDefaultClasses(),
                this.applyOffsetIfSpecified(),
                this.setCustomColorsIfSpecified(),
                this.patchSafariSvgFilterBug(),
                E.a.info("Showing the notify button."),
                yield(e ? this.launcher.inactivate() : Object(X.t)()).then(()=>Bi.getSubscription()).then(t=>!e && t || null !== this.dialog.notificationIcons ? Object(X.t)() : fe.getNotificationIcons().then(e=>{
                    this.dialog.notificationIcons = e
                }
                )).then(()=>Object(X.i)(this.options.showLauncherAfter || 0)).then(()=>Object(X.q)() && t && !0 !== i && !e && !0 === Bi.config.userConfig.promptOptions.autoPrompt && !fe.isHttpPromptAlreadyShown() ? (E.a.debug("Not showing notify button because slidedown will be shown."),
                Object(X.t)()) : this.launcher.show()).then(()=>Object(X.i)(this.options.showBadgeAfter || 0)).then(()=>this.options.prenotify && !e && Bi._isNewVisitor ? this.message.enqueue(this.options.text["message.prenotify"]).then(()=>this.badge.show()) : Object(X.t)()).then(()=>this.initialized = !0)
            })
        }
        patchSafariSvgFilterBug() {
            if (!(g.a.safari && Number(g.a.version) >= 9.1)) {
                const e = "drop-shadow(0 2px 4px rgba(34,36,38,0.35));"
                  , t = "drop-shadow(0 2px 4px rgba(34,36,38,0));"
                  , i = "drop-shadow(0px 2px 2px rgba(34,36,38,.15));";
                this.graphic.setAttribute("style", `filter: ${e}; -webkit-filter: ${e};`),
                this.badge.element.setAttribute("style", `filter: ${t}; -webkit-filter: ${t};`),
                this.dialog.element.setAttribute("style", `filter: ${i}; -webkit-filter: ${i};`)
            }
            g.a.safari && this.badge.element.setAttribute("style", "display: none;")
        }
        applyOffsetIfSpecified() {
            const e = this.options.offset;
            if (e) {
                const t = this.launcher.element;
                if (!t)
                    return void E.a.error("Could not find bell dom element");
                t.style.cssText = "",
                e.bottom && (t.style.cssText += `bottom: ${e.bottom};`),
                "bottom-right" === this.options.position ? e.right && (t.style.cssText += `right: ${e.right};`) : "bottom-left" === this.options.position && e.left && (t.style.cssText += `left: ${e.left};`)
            }
        }
        setCustomColorsIfSpecified() {
            const e = this.dialog.element.querySelector("button.action")
              , t = this.button.element.querySelector(".pulse-ring");
            this.graphic.querySelector(".background").style.cssText = "";
            const i = this.graphic.querySelectorAll(".foreground");
            for (let e = 0; e < i.length; e++) {
                i[e].style.cssText = ""
            }
            if (this.graphic.querySelector(".stroke").style.cssText = "",
            this.badge.element.style.cssText = "",
            e && (e.style.cssText = "",
            e.style.cssText = ""),
            t && (t.style.cssText = ""),
            this.options.colors) {
                const i = this.options.colors;
                if (i["circle.background"] && (this.graphic.querySelector(".background").style.cssText += `fill: ${i["circle.background"]}`),
                i["circle.foreground"]) {
                    const e = this.graphic.querySelectorAll(".foreground");
                    for (let t = 0; t < e.length; t++) {
                        e[t].style.cssText += `fill: ${i["circle.foreground"]}`
                    }
                    this.graphic.querySelector(".stroke").style.cssText += `stroke: ${i["circle.foreground"]}`
                }
                i["badge.background"] && (this.badge.element.style.cssText += `background: ${i["badge.background"]}`),
                i["badge.bordercolor"] && (this.badge.element.style.cssText += `border-color: ${i["badge.bordercolor"]}`),
                i["badge.foreground"] && (this.badge.element.style.cssText += `color: ${i["badge.foreground"]}`),
                e && (i["dialog.button.background"] && (this.dialog.element.querySelector("button.action").style.cssText += `background: ${i["dialog.button.background"]}`),
                i["dialog.button.foreground"] && (this.dialog.element.querySelector("button.action").style.cssText += `color: ${i["dialog.button.foreground"]}`),
                i["dialog.button.background.hovering"] && this.addCssToHead("onesignal-background-hover-style", `#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:hover { background: ${i["dialog.button.background.hovering"]} !important; }`),
                i["dialog.button.background.active"] && this.addCssToHead("onesignal-background-active-style", `#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:active { background: ${i["dialog.button.background.active"]} !important; }`)),
                t && i["pulse.color"] && (this.button.element.querySelector(".pulse-ring").style.cssText = `border-color: ${i["pulse.color"]}`)
            }
        }
        addCssToHead(e, t) {
            if (document.getElementById(e))
                return;
            const i = document.createElement("style");
            i.id = e,
            i.type = "text/css",
            i.appendChild(document.createTextNode(t)),
            document.head.appendChild(i)
        }
        updateState() {
            Promise.all([Bi.privateIsPushNotificationsEnabled(), Bi.privateGetNotificationPermission()]).then(([e,t])=>{
                this.setState(e ? Ke.STATES.SUBSCRIBED : Ke.STATES.UNSUBSCRIBED),
                t === A.Denied && this.setState(Ke.STATES.BLOCKED)
            }
            )
        }
        setState(e, t=!1) {
            const i = this.state;
            this.state = e,
            i === e || t || S.a.trigger(Ke.EVENTS.STATE_CHANGED, {
                from: i,
                to: e
            })
        }
        get container() {
            return document.querySelector("#onesignal-bell-container")
        }
        get graphic() {
            return this.button.element.querySelector("svg")
        }
        get launcher() {
            return this._launcher || (this._launcher = new We(this)),
            this._launcher
        }
        get button() {
            return this._button || (this._button = new Re(this)),
            this._button
        }
        get badge() {
            return this._badge || (this._badge = new _e),
            this._badge
        }
        get message() {
            return this._message || (this._message = new De(this)),
            this._message
        }
        get dialog() {
            return this._dialog || (this._dialog = new Ue(this)),
            this._dialog
        }
        get subscribed() {
            return this.state === Ke.STATES.SUBSCRIBED
        }
        get unsubscribed() {
            return this.state === Ke.STATES.UNSUBSCRIBED
        }
        get blocked() {
            return this.state === Ke.STATES.BLOCKED
        }
    }
    class Ye {
        constructor(e, t) {
            this.url = e,
            this.url.pathname = "subscribe",
            this.options = t || {}
        }
        load() {
            const e = Object.assign(Object.assign({}, fe.getPromptOptionsPostHash()), {
                promptType: "popup",
                parentHostname: encodeURIComponent(location.hostname)
            });
            return this.options.autoAccept && (e.autoAccept = !0),
            E.a.info(`Opening a popup to ${this.url.toString()} with POST data:`, e),
            this.popupWindow = this.openWindowViaPost(this.url.toString(), e, null),
            this.establishCrossOriginMessaging(),
            this.loadPromise = {},
            this.loadPromise.promise = new Promise((e,t)=>{
                this.loadPromise.resolver = e,
                this.loadPromise.rejector = t
            }
            ),
            this.loadPromise.promise
        }
        openWindowViaPost(e, t, i) {
            var n = document.createElement("form");
            n.action = e,
            n.method = "POST",
            n.target = "onesignal-http-popup";
            var o = void 0 != window.screenLeft ? window.screenLeft : screen.left
              , s = void 0 != window.screenTop ? window.screenTop : screen.top
              , r = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
              , a = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height
              , c = OneSignal._windowWidth
              , l = OneSignal._windowHeight
              , d = r / 2 - c / 2 + o
              , u = a / 2 - l / 2 + s;
            i && (i.childWidth && (c = i.childWidth),
            i.childHeight && (l = i.childHeight),
            i.left && (d = i.left),
            i.top && (u = i.top));
            const g = window.open("about:blank", "onesignal-http-popup", `'scrollbars=yes, width=${c}, height=${l}, top=${u}, left=${d}`);
            if (t)
                for (var h in t) {
                    var p = document.createElement("textarea");
                    p.name = h,
                    p.value = "object" == typeof t[h] ? JSON.stringify(t[h]) : t[h],
                    n.appendChild(p)
                }
            return n.style.display = "none",
            document.body.appendChild(n),
            n.submit(),
            document.body.removeChild(n),
            g
        }
        establishCrossOriginMessaging() {
            this.messenger = new ye(this.popupWindow,this.url.toString(),this.url.toString()),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.POPUP_BEGIN_MESSAGEPORT_COMMS, this.onBeginMessagePortCommunications.bind(this)),
            this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_LOADED, this.onPopupLoaded.bind(this)),
            this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_ACCEPTED, this.onPopupAccepted.bind(this)),
            this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_REJECTED, this.onPopupRejected.bind(this)),
            this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_CLOSING, this.onPopupClosing.bind(this)),
            this.messenger.once(OneSignal.POSTMAM_COMMANDS.SET_SESSION_COUNT, this.onSetSessionCount.bind(this)),
            this.messenger.once(OneSignal.POSTMAM_COMMANDS.WINDOW_TIMEOUT, this.onWindowTimeout.bind(this)),
            this.messenger.once(OneSignal.POSTMAM_COMMANDS.FINISH_REMOTE_REGISTRATION, this.onFinishingRegistrationRemotely.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, this.onRemoteRetriggerEvent.bind(this)),
            this.messenger.startPostMessageReceive()
        }
        dispose() {
            this.messenger.destroy()
        }
        onBeginMessagePortCommunications(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return E.a.debug(`(${y.a.getWindowEnv().toString()}) Successfully established cross-origin messaging with the popup window.`),
                this.messenger.connect(),
                !1
            })
        }
        onPopupLoaded(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                this.loadPromise.resolver(),
                S.a.trigger("popupLoad")
            })
        }
        onPopupAccepted(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                fe.triggerCustomPromptClicked("granted")
            })
        }
        onPopupRejected(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                fe.triggerCustomPromptClicked("denied")
            })
        }
        onPopupClosing(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                E.a.info("Popup window is closing, running cleanup events."),
                S.a.trigger(OneSignal.EVENTS.POPUP_CLOSING),
                this.dispose()
            })
        }
        onSetSessionCount(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                E.a.debug(y.a.getWindowEnv().toString() + " Marking current session as a continuing browsing session.");
                const {sessionCount: t} = e.data;
                OneSignal.context.pageViewManager.setPageViewCount(t)
            })
        }
        onWindowTimeout(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                E.a.debug(y.a.getWindowEnv().toString() + " Popup window timed out and was closed."),
                S.a.trigger(OneSignal.EVENTS.POPUP_WINDOW_TIMEOUT)
            })
        }
        onFinishingRegistrationRemotely(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                E.a.debug(location.origin, y.a.getWindowEnv().toString() + " Finishing HTTP popup registration inside the iFrame, sent from popup."),
                e.reply({
                    progress: !0
                });
                const {rawPushSubscription: t} = e.data;
                this.messenger && this.messenger.stopPostMessageReceive(),
                yield OneSignal.context.subscriptionManager.registerSubscription(t),
                yield te.checkAndTriggerSubscriptionChanged(),
                yield fe.checkAndTriggerNotificationPermissionChanged()
            })
        }
        onRemoteRetriggerEvent(e) {
            const {eventName: t, eventData: i} = e.data;
            return S.a.trigger(t, i, e.source),
            !1
        }
        message() {
            this.messenger && this.messenger.message.apply(this.messenger, arguments)
        }
    }
    function Je(e) {
        return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(e, t) {
            return String.fromCharCode("0x" + t)
        }))
    }
    class Qe {
        getPropertiesAsJson() {
            return {
                origin: location.origin,
                url: location.href,
                sdkVersion: h.a.version()
            }
        }
    }
    class Ze {
    }
    ($e = He || (He = {})).HttpPermissionRequest = "HttpPermissionRequest",
    $e.SyncHashedEmail = "SyncHashedEmail";
    class Xe extends Qe {
        constructor(e) {
            super(),
            this.apiName = e
        }
        getEventName() {
            return "api-usage"
        }
        getPropertiesAsJson() {
            return Object.assign({
                api: this.apiName.toString()
            }, super.getPropertiesAsJson())
        }
    }
    class et extends Ze {
        constructor() {
            super()
        }
        getProfileName() {
            return "all_websites"
        }
        getDateUtc() {
            const e = new Date;
            return `${e.getUTCMonth() + 1}_ ${e.getUTCDate()}_ ${e.getUTCFullYear()}`
        }
        getOperationData() {
            const e = {
                $add: {},
                $ignore_time: !0
            };
            return e.$add[`pageview_ ${this.getDateUtc()}`] = 1,
            e
        }
    }
    class tt {
        constructor(e, t) {
            this.isFeatureEnabled = e,
            this.mixpanelReportingToken = t
        }
        static get MIXPANEL_REPORTING_URL() {
            return "https://api.mixpanel.com"
        }
        isEnabled() {
            return this.isFeatureEnabled && !!this.mixpanelReportingToken
        }
        reportEvent(e) {
            if (!this.isEnabled())
                return Promise.resolve(null);
            const t = {
                event: e.getEventName(),
                properties: Object.assign({
                    token: this.mixpanelReportingToken
                }, e.getPropertiesAsJson())
            }
              , i = Je(JSON.stringify(t))
              , n = {
                method: "GET",
                headers: new Headers,
                cache: "no-cache"
            };
            return fetch(`${tt.MIXPANEL_REPORTING_URL}/track/?data=${i}`, n)
        }
        reportEngagement(e) {
            if (!this.isEnabled())
                return Promise.resolve(null);
            let t = {
                $token: this.mixpanelReportingToken,
                $distinct_id: e.getProfileName()
            };
            t = Object.assign(Object.assign({}, t), e.getOperationData());
            const i = Je(JSON.stringify(t))
              , n = {
                method: "GET",
                headers: new Headers,
                cache: "no-cache"
            };
            return fetch(`${tt.MIXPANEL_REPORTING_URL}/engage/?data=${i}`, n)
        }
        shouldCollectPageView() {
            const e = new Date;
            return e.getUTCMonth() + 1 <= 2 && e.getUTCDate() <= 10 && e.getUTCFullYear() <= 2018 && e.getUTCMonth() + 1 >= 2 && e.getUTCDate() >= 8 && e.getUTCFullYear() >= 2018
        }
        reportPageView() {
            this.shouldCollectPageView() && this.reportEngagement(new et)
        }
    }
    (ze = Ge || (Ge = {}))[ze.HttpPermissionRequest = 0] = "HttpPermissionRequest",
    ze[ze.SyncHashedEmail = 1] = "SyncHashedEmail";
    class it extends p.a {
        constructor(e) {
            let t, i;
            switch (e) {
            case Ge.HttpPermissionRequest:
                t = "The HTTP permission request has been deprecated. Please remove any custom popups from your code.",
                i = He.HttpPermissionRequest;
                break;
            case Ge.SyncHashedEmail:
                t = "API syncHashedEmail() has been deprecated and will be removed in a future SDK release. Please remove any usages from your code.",
                i = He.SyncHashedEmail
            }
            super(t),
            this.reportUsage(i),
            Object.setPrototypeOf(this, it.prototype)
        }
        reportUsage(e) {
            "undefined" != typeof OneSignal && OneSignal.context && OneSignal.context.metricsManager && OneSignal.context.metricsManager.reportEvent(new Xe(e))
        }
    }
    class nt {
        static internalInit() {
            return Object(d.a)(this, void 0, void 0, function*() {
                E.a.debug("Called %cinternalInit()", Object(X.k)("code")),
                yield OneSignal.context.serviceWorkerManager.installWorker();
                const e = OneSignal.context.sessionManager;
                OneSignal.emitter.on(OneSignal.EVENTS.SESSION_STARTED, e.sendOnSessionUpdateFromPage.bind(e)),
                OneSignal.context.pageViewManager.incrementPageViewCount(),
                "visible" === document.visibilityState ? yield nt.sessionInit() : nt.postponeSessionInitUntilPageIsInFocus()
            })
        }
        static postponeSessionInitUntilPageIsInFocus() {
            Object(X.u)(document, "visibilitychange", (e,t)=>{
                "visible" === document.visibilityState && (t(),
                nt.sessionInit())
            }
            , !0)
        }
        static sessionInit() {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (E.a.debug("Called %csessionInit()", Object(X.k)("code")),
                OneSignal._sessionInitAlreadyRunning)
                    return void E.a.debug("Returning from sessionInit because it has already been called.");
                OneSignal._sessionInitAlreadyRunning = !0;
                try {
                    yield nt.doInitialize()
                } catch (e) {
                    if (e instanceof f)
                        return;
                    throw e
                }
                const e = yield OneSignal.internalIsOptedOut();
                U.setIsOptedOut(!!e),
                N.a.isUsingSubscriptionWorkaround() || (yield nt.handleAutoResubscribe(e));
                const t = yield OneSignal.privateIsPushNotificationsEnabled();
                U.setIsPushNotificationsEnabled(!!t),
                OneSignal.config.userConfig.promptOptions.autoPrompt && !e && OneSignal.context.promptsManager.spawnAutoPrompts(),
                OneSignal._sessionInitAlreadyRunning = !1,
                yield S.a.trigger(OneSignal.EVENTS.SDK_INITIALIZED)
            })
        }
        static registerForPushNotifications(e={}) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (e && e.modalPrompt)
                    return OneSignal.subscriptionModalHost = new we(OneSignal.config.appId,e),
                    void (yield OneSignal.subscriptionModalHost.load());
                if (N.a.isUsingSubscriptionWorkaround())
                    return e.httpPermissionRequest ? void E.a.error(new it(Ge.HttpPermissionRequest)) : void (yield nt.loadSubscriptionPopup(e));
                U.getIsOptedOut() || (yield be.registerForPush())
            })
        }
        static onSdkInitialized() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = yield nt.processExpiringSubscriptions();
                (yield OneSignal.context.subscriptionManager.isAlreadyRegisteredWithOneSignal()) ? (OneSignal.context.sessionManager.setupSessionEventListeners(),
                e || (yield OneSignal.context.updateManager.sendOnSessionUpdate())) : OneSignal.config.userConfig.promptOptions.autoPrompt || OneSignal.config.userConfig.autoResubscribe || (yield OneSignal.context.updateManager.sendOnSessionUpdate()),
                yield S.a.trigger(OneSignal.EVENTS.SDK_INITIALIZED_PUBLIC)
            })
        }
        static loadSubscriptionPopup(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                OneSignal.subscriptionPopupHost = new Ye(OneSignal.proxyFrameHost.url,e),
                yield OneSignal.subscriptionPopupHost.load()
            })
        }
        static storeInitialValues() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = yield OneSignal.privateIsPushNotificationsEnabled()
                  , t = yield OneSignal.privateGetNotificationPermission()
                  , i = yield OneSignal.internalIsOptedOut();
                v.put("subscription.optedOut", i),
                yield M.a.put("Options", {
                    key: "isPushEnabled",
                    value: e
                }),
                yield M.a.put("Options", {
                    key: "notificationPermission",
                    value: t
                })
            })
        }
        static setWelcomeNotificationFlag() {
            return Object(d.a)(this, void 0, void 0, function*() {
                (yield OneSignal.context.permissionManager.getNotificationPermission(OneSignal.context.appConfig.safariWebId)) === A.Granted && (OneSignal.__doNotShowWelcomeNotification = !0)
            })
        }
        static establishServiceWorkerChannel() {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (navigator.serviceWorker && "https:" === window.location.protocol && !(yield y.a.isFrameContextInsecure()))
                    try {
                        yield OneSignal.context.serviceWorkerManager.establishServiceWorkerChannel()
                    } catch (e) {
                        E.a.error(e)
                    }
            })
        }
        static processExpiringSubscriptions() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = OneSignal.context;
                if (E.a.debug("Checking subscription expiration..."),
                !(yield e.subscriptionManager.isSubscriptionExpiring()))
                    return E.a.debug("Subscription is not considered expired."),
                    !1;
                const t = yield y.a.getIntegration()
                  , i = y.a.getWindowEnv();
                switch (E.a.debug("Subscription is considered expiring. Current Integration:", t),
                t) {
                case Ne.a.Secure:
                    const n = yield e.subscriptionManager.subscribe(1);
                    yield e.subscriptionManager.registerSubscription(n);
                    break;
                case Ne.a.SecureProxy:
                    if (i === oe.a.OneSignalProxyFrame)
                        yield this.registerSubscriptionInProxyFrame(e);
                    else {
                        yield OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.PROCESS_EXPIRING_SUBSCRIPTIONS)
                    }
                    break;
                case Ne.a.InsecureProxy:
                    yield M.a.remove("Ids", "registrationId"),
                    E.a.debug("Unsubscribed expiring HTTP subscription by removing registration ID.")
                }
                return !0
            })
        }
        static registerSubscriptionInProxyFrame(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = yield new Promise(t=>{
                    e.workerMessenger.once(Se.SubscribeNew, e=>{
                        t(xe.a.deserialize(e))
                    }
                    ),
                    e.workerMessenger.unicast(Se.SubscribeNew, e.appConfig)
                }
                );
                return E.a.debug("Finished registering brand new subscription:", t),
                t
            })
        }
        static doInitialize() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = [];
                e.push(nt.storeInitialValues()),
                e.push(nt.installNativePromptPermissionChangedHook()),
                e.push(nt.setWelcomeNotificationFlag()),
                e.push(nt.establishServiceWorkerChannel()),
                e.push(nt.showNotifyButton()),
                e.push(nt.showPromptsFromWebConfigEditor());
                try {
                    yield Promise.all(e)
                } catch (e) {
                    throw E.a.error(e),
                    new f(c.Unknown)
                }
            })
        }
        static showNotifyButton() {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (h.a.isBrowser() && !OneSignal.notifyButton) {
                    OneSignal.config.userConfig.notifyButton = OneSignal.config.userConfig.notifyButton || {},
                    OneSignal.config.userConfig.bell && (OneSignal.config.userConfig.bell = Object.assign(Object.assign({}, OneSignal.config.userConfig.bell), OneSignal.config.userConfig.notifyButton),
                    OneSignal.config.userConfig.notifyButton = Object.assign(Object.assign({}, OneSignal.config.userConfig.notifyButton), OneSignal.config.userConfig.bell));
                    const e = OneSignal.config.userConfig.notifyButton.displayPredicate;
                    e && "function" == typeof e ? OneSignal.emitter.once(OneSignal.EVENTS.SDK_INITIALIZED, ()=>Object(d.a)(this, void 0, void 0, function*() {
                        !1 !== (yield Promise.resolve(OneSignal.config.userConfig.notifyButton.displayPredicate())) ? (OneSignal.notifyButton = new Ke(OneSignal.config.userConfig.notifyButton),
                        OneSignal.notifyButton.create()) : E.a.debug("Notify button display predicate returned false so not showing the notify button.")
                    })) : (OneSignal.notifyButton = new Ke(OneSignal.config.userConfig.notifyButton),
                    OneSignal.notifyButton.create())
                }
            })
        }
        static showPromptsFromWebConfigEditor() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = OneSignal.config;
                e.userConfig.promptOptions && (yield new ee(e.userConfig.promptOptions.customlink).initialize())
            })
        }
        static installNativePromptPermissionChangedHook() {
            return Object(d.a)(this, void 0, void 0, function*() {
                try {
                    if (navigator.permissions) {
                        (yield navigator.permissions.query({
                            name: "notifications"
                        })).onchange = function() {
                            Object(X.y)()
                        }
                    }
                } catch (e) {
                    E.a.warn(`Could not install native prompt permission change hook w/ error: ${e}`)
                }
            })
        }
        static saveInitOptions() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = []
                  , t = OneSignal.config.userConfig.persistNotification;
                e.push(M.a.put("Options", {
                    key: "persistNotification",
                    value: null == t || t
                }));
                const i = OneSignal.config.userConfig.webhooks;
                return ["notification.displayed", "notification.clicked", "notification.dismissed"].forEach(t=>{
                    i && i[t] ? e.push(M.a.put("Options", {
                        key: `webhooks.${t}`,
                        value: i[t]
                    })) : e.push(M.a.put("Options", {
                        key: `webhooks.${t}`,
                        value: !1
                    }))
                }
                ),
                i && i.cors ? e.push(M.a.put("Options", {
                    key: "webhooks.cors",
                    value: !0
                })) : e.push(M.a.put("Options", {
                    key: "webhooks.cors",
                    value: !1
                })),
                OneSignal.config.userConfig.notificationClickHandlerMatch ? e.push(M.a.put("Options", {
                    key: "notificationClickHandlerMatch",
                    value: OneSignal.config.userConfig.notificationClickHandlerMatch
                })) : e.push(M.a.put("Options", {
                    key: "notificationClickHandlerMatch",
                    value: "exact"
                })),
                OneSignal.config.userConfig.notificationClickHandlerAction ? e.push(M.a.put("Options", {
                    key: "notificationClickHandlerAction",
                    value: OneSignal.config.userConfig.notificationClickHandlerAction
                })) : e.push(M.a.put("Options", {
                    key: "notificationClickHandlerAction",
                    value: "navigate"
                })),
                Promise.all(e)
            })
        }
        static initSaveState(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = yield fe.getAppId()
                  , i = OneSignal.config;
                yield M.a.put("Ids", {
                    type: "appId",
                    id: t
                });
                const n = e || i.siteName || document.title || "Notification";
                yield M.a.put("Options", {
                    key: "pageTitle",
                    value: n
                }),
                E.a.info(`OneSignal: Set pageTitle to be '${n}'.`)
            })
        }
        static handleAutoResubscribe(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (E.a.info("handleAutoResubscribe", {
                    autoResubscribe: OneSignal.config.userConfig.autoResubscribe,
                    isOptedOut: e
                }),
                OneSignal.config.userConfig.autoResubscribe && !e) {
                    (yield OneSignal.context.permissionManager.getNotificationPermission(OneSignal.context.appConfig.safariWebId)) == A.Granted && (yield be.registerForPush())
                }
            })
        }
        static polyfillSafariFetch() {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (g.a.safari && void 0 === window.fetch) {
                    E.a.debug("Loading fetch polyfill for Safari..");
                    try {
                        yield(new Ce).loadFetchPolyfill(),
                        E.a.debug("Done loading fetch polyfill.")
                    } catch (e) {
                        E.a.debug("Error loading fetch polyfill:", e)
                    }
                }
            })
        }
        static errorIfInitAlreadyCalled() {
            if (OneSignal._initCalled)
                throw new f(c.MultipleInitialization);
            OneSignal._initCalled = !0
        }
    }
    class ot {
        constructor() {
            this.incrementedPageViewCount = !1
        }
        getPageViewCount() {
            try {
                const e = sessionStorage.getItem(ot.SESSION_STORAGE_KEY_NAME)
                  , t = e ? parseInt(e) : 0;
                return isNaN(t) ? 0 : t
            } catch (e) {
                return 0
            }
        }
        setPageViewCount(e) {
            try {
                sessionStorage.setItem(ot.SESSION_STORAGE_KEY_NAME, e.toString()),
                y.a.getWindowEnv() === oe.a.OneSignalSubscriptionPopup && OneSignal.subscriptionPopup && OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.SET_SESSION_COUNT)
            } catch (e) {}
        }
        incrementPageViewCount() {
            if (this.incrementedPageViewCount)
                return;
            const e = this.getPageViewCount() + 1
              , t = this.getLocalPageViewCount() + 1;
            this.setPageViewCount(e),
            this.setLocalPageViewCount(t),
            this.incrementedPageViewCount = !0,
            E.a.debug(`Incremented page view count: newCountSingleTab: ${e},\n      newCountAccrossTabs: ${t}.`)
        }
        simulatePageNavigationOrRefresh() {
            this.incrementedPageViewCount = !1
        }
        isFirstPageView() {
            return 1 === this.getPageViewCount()
        }
        getLocalPageViewCount() {
            return U.getLocalPageViewCount()
        }
        setLocalPageViewCount(e) {
            U.setLocalPageViewCount(e)
        }
    }
    ot.SESSION_STORAGE_KEY_NAME = "onesignal-pageview-count";
    class st {
        constructor(e) {
            if (!e)
                throw new InvalidArgumentError.a("path",InvalidArgumentError.b.Empty);
            this.path = e.trim()
        }
        getQueryString() {
            const e = this.path.indexOf("?");
            return -1 === e ? null : this.path.length > e ? this.path.substring(e + 1) : null
        }
        getWithoutQueryString() {
            return this.path.split(st.QUERY_STRING)[0]
        }
        getFileName() {
            var e;
            return null === (e = this.getWithoutQueryString().split("\\").pop()) || void 0 === e ? void 0 : e.split("/").pop()
        }
        getFileNameWithQuery() {
            var e;
            return null === (e = this.path.split("\\").pop()) || void 0 === e ? void 0 : e.split("/").pop()
        }
        getFullPath() {
            return this.path
        }
        getPathWithoutFileName() {
            const e = this.getWithoutQueryString()
              , t = e.lastIndexOf(this.getFileName());
            let i = e.substring(0, t);
            return i = i.replace(/[\\\/]$/, "")
        }
    }
    st.QUERY_STRING = "?";
    class rt extends p.a {
        constructor(e, t) {
            super("Registration of a Service Worker failed."),
            this.status = e,
            this.statusText = t,
            Object.setPrototypeOf(this, rt.prototype)
        }
    }
    var at, ct = rt;
    !function(e) {
        e[e.Direct = 1] = "Direct",
        e[e.Indirect = 2] = "Indirect",
        e[e.Unattributed = 3] = "Unattributed",
        e[e.NotSupported = 4] = "NotSupported"
    }(at || (at = {}));
    class lt {
        static downloadServerAppConfig(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return w.a.enforceAppId(e),
                yield new Promise((t,i)=>{
                    t(I.get(`sync/${e}/web`, null))
                }
                )
            })
        }
        static getUserIdFromSubscriptionIdentifier(e, t, i) {
            return w.a.enforceAppId(e),
            I.post("players", {
                app_id: e,
                device_type: t,
                identifier: i,
                notification_types: ie.TemporaryWebRecord
            }).then(e=>e && e.id ? e.id : null).catch(e=>(E.a.debug("Error getting user ID from subscription identifier:", e),
            null))
        }
        static updatePlayer(e, t, i) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield w.a.enforceAppIdAndPlayerId(e, t, ()=>Object(d.a)(this, void 0, void 0, function*() {
                    yield I.put(`players/${t}`, Object.assign({
                        app_id: e
                    }, i))
                }))
            })
        }
        static updateUserSession(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield w.a.enforceAppIdAndPlayerId(t.app_id, e, ()=>Object(d.a)(this, void 0, void 0, function*() {
                    const i = yield I.post(`players/${e}/on_session`, t);
                    return i.id ? i.id : e
                }))
            })
        }
        static sendSessionDuration(e, t, i, n, o) {
            return Object(d.a)(this, void 0, void 0, function*() {
                w.a.enforceAppIdAndPlayerId(e, t, ()=>Object(d.a)(this, void 0, void 0, function*() {
                    const s = {
                        app_id: e,
                        type: 1,
                        state: "ping",
                        active_time: i,
                        device_type: n
                    };
                    switch (o.type) {
                    case at.Direct:
                        s.direct = !0,
                        s.notification_ids = o.notificationIds;
                        break;
                    case at.Indirect:
                        s.direct = !1,
                        s.notification_ids = o.notificationIds
                    }
                    yield I.post(`players/${t}/on_focus`, s)
                }))
            })
        }
    }
    var dt = lt;
    class ut {
        static debug(...e) {
            self.shouldLog && console.debug(...e)
        }
        static trace(...e) {
            self.shouldLog && console.trace(...e)
        }
        static info(...e) {
            self.shouldLog && console.info(...e)
        }
        static warn(...e) {
            self.shouldLog && console.warn(...e)
        }
        static error(...e) {
            self.shouldLog && console.error(...e)
        }
    }
    const gt = "sendOutcome"
      , ht = "sendUniqueOutcome";
    class pt {
        constructor(e, t, i, n) {
            this.outcomeName = i,
            this.config = t,
            this.appId = e,
            this.isUnique = n
        }
        getAttribution() {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield pt.getAttribution(this.config)
            })
        }
        beforeOutcomeSend() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = this.isUnique ? ht : gt;
                return Object(X.s)(e, this.outcomeName),
                this.config ? this.outcomeName ? (yield Object(X.c)(),
                !!(yield OneSignal.privateIsPushNotificationsEnabled()) || (E.a.warn("Reporting outcomes is supported only for subscribed users."),
                !1)) : (E.a.error("Outcome name is required"),
                !1) : (E.a.debug("Outcomes feature not supported by main application yet."),
                !1)
            })
        }
        getAttributedNotifsByUniqueOutcomeName() {
            return Object(d.a)(this, void 0, void 0, function*() {
                return (yield M.a.getAll("SentUniqueOutcome")).filter(e=>e.outcomeName === this.outcomeName).reduce((e,t)=>{
                    const i = t.notificationIds || [];
                    return [...e, ...i]
                }
                , [])
            })
        }
        getNotifsToAttributeWithUniqueOutcome(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = yield this.getAttributedNotifsByUniqueOutcomeName();
                return e.filter(e=>-1 === t.indexOf(e))
            })
        }
        shouldSendUnique(e, t) {
            return e.type === at.Unattributed || t.length > 0
        }
        saveSentUniqueOutcome(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = this.outcomeName
                  , i = yield M.a.get("SentUniqueOutcome", t)
                  , n = yield M.a.getCurrentSession()
                  , o = [...i ? i.notificationIds : [], ...e]
                  , s = n ? n.startTimestamp : null;
                yield M.a.put("SentUniqueOutcome", {
                    outcomeName: t,
                    notificationIds: o,
                    sentDuringSession: s
                })
            })
        }
        wasSentDuringSession() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = yield M.a.get("SentUniqueOutcome", this.outcomeName);
                if (!e)
                    return !1;
                const t = yield M.a.getCurrentSession()
                  , i = t && e.sentDuringSession === t.startTimestamp
                  , n = !t && !!e.sentDuringSession;
                return i || n
            })
        }
        send(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const {type: t, notificationIds: i, weight: n} = e;
                switch (t) {
                case at.Direct:
                    return this.isUnique && (yield this.saveSentUniqueOutcome(i)),
                    void (yield OneSignal.context.updateManager.sendOutcomeDirect(this.appId, i, this.outcomeName, n));
                case at.Indirect:
                    return this.isUnique && (yield this.saveSentUniqueOutcome(i)),
                    void (yield OneSignal.context.updateManager.sendOutcomeInfluenced(this.appId, i, this.outcomeName, n));
                case at.Unattributed:
                    if (this.isUnique) {
                        if (yield this.wasSentDuringSession())
                            return void E.a.warn("(Unattributed) unique outcome was already sent during this session");
                        yield this.saveSentUniqueOutcome([])
                    }
                    return void (yield OneSignal.context.updateManager.sendOutcomeUnattributed(this.appId, this.outcomeName, n));
                default:
                    return void E.a.warn("You are on a free plan. Please upgrade to use this functionality.")
                }
            })
        }
        static getAttribution(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (e.direct && e.direct.enabled) {
                    const e = yield M.a.getAll("NotificationClicked");
                    if (e.length > 0)
                        return {
                            type: at.Direct,
                            notificationIds: [e[0].notificationId]
                        }
                }
                if (e.indirect && e.indirect.enabled) {
                    const t = 60 * e.indirect.influencedTimePeriodMin * 1e3
                      , i = new Date((new Date).getTime() - t).getTime()
                      , n = yield M.a.getAll("NotificationReceived");
                    if (E.a.debug(`\tFound total of ${n.length} received notifications`),
                    n.length > 0) {
                        const t = e.indirect.influencedNotificationsLimit
                          , o = w.a.sortArrayOfObjects(n, e=>e.timestamp, !0, !1)
                          , s = o.filter(e=>e.timestamp >= i).slice(0, t).map(e=>e.notificationId);
                        E.a.debug(`\tTotal of ${s.length} received notifications are within reporting window.`);
                        const r = o.filter(e=>-1 === s.indexOf(e.notificationId)).map(e=>e.notificationId);
                        if (r.forEach(e=>M.a.remove("NotificationReceived", e)),
                        E.a.debug(`\t ${r.length} received notifications will be deleted.`),
                        s.length > 0)
                            return {
                                type: at.Indirect,
                                notificationIds: s
                            }
                    }
                }
                return e.unattributed && e.unattributed.enabled ? {
                    type: at.Unattributed,
                    notificationIds: []
                } : {
                    type: at.NotSupported,
                    notificationIds: []
                }
            })
        }
    }
    const mt = ()=>{
        ut.debug("Do nothing")
    }
    ;
    function bt(e, t) {
        const i = 1e3 * t;
        let n, o = void 0;
        const s = new Promise((t,s)=>{
            let r = !1;
            n = self.setTimeout(()=>Object(d.a)(this, void 0, void 0, function*() {
                r = !0;
                try {
                    yield e(),
                    t()
                } catch (e) {
                    ut.error("Failed to execute callback", e),
                    s()
                }
            }), i),
            o = (()=>{
                ut.debug("Cancel called"),
                self.clearTimeout(n),
                r || t()
            }
            )
        }
        );
        return o ? {
            promise: s,
            cancel: o
        } : (ut.warn("clearTimeoutHandle was not assigned."),
        {
            promise: s,
            cancel: mt
        })
    }
    class ft {
        constructor() {
            this._channels = []
        }
        registerChannel(e) {
            this._channels.push(e)
        }
        onSession() {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Promise.all(this._channels.map(e=>e.onSession()))
            })
        }
        onFocus(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Promise.all(this._channels.map(t=>t.onFocus(e)))
            })
        }
        setTags(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Promise.all(this._channels.map(t=>t.setTags(e)))
            })
        }
        setExternalUserId(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Promise.all(this._channels.map(i=>i.setExternalUserId(e, t)))
            })
        }
    }
    var St = i(20)
      , vt = i(26)
      , Ot = i.n(vt);
    class yt {
        static getPlayer(e, t) {
            return C.getPlayer(e, t)
        }
        static updatePlayer(e, t, i) {
            return C.updatePlayer(e, t, i)
        }
        static sendNotification(e, t, i, n, o, s, r, a) {
            return C.sendNotification(e, t, i, n, o, s, r, a)
        }
        static jsonpLib(e, t) {
            Ot()(e, null, t)
        }
        static downloadServerAppConfig(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return y.a.getWindowEnv() !== oe.a.ServiceWorker ? yield new Promise((t,i)=>{
                    yt.jsonpLib(`${y.a.getOneSignalApiUrl().toString()}/sync/${e}/web`, (e,n)=>{
                        e ? i(e) : n.success ? t(n) : i(n)
                    }
                    )
                }
                ) : yield dt.downloadServerAppConfig(e)
            })
        }
        static createUser(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield C.createUser(e)
            })
        }
        static logoutEmail(e, t, i) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield C.logoutEmail(e, t, i)
            })
        }
        static updateUserSession(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield C.updateUserSession(e, t)
            })
        }
    }
    class wt {
        constructor(e, t, i, n, o) {
            this.secondaryChannelIdentifierUpdater = e,
            this.secondaryChannelExternalUserIdUpdater = t,
            this.secondaryChannelTagsUpdater = i,
            this.secondaryChannelSessionUpdater = n,
            this.secondaryChannelFocusUpdater = o
        }
        logout() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = yield M.a.getEmailProfile();
                if (!e.subscriptionId)
                    return E.a.warn(new b(r.NoEmailSet)),
                    !1;
                const {deviceId: t} = yield M.a.getSubscription();
                if (!t)
                    return E.a.warn(new b(r.NoDeviceId)),
                    !1;
                const i = yield M.a.getAppConfig();
                return (yield yt.logoutEmail(i, e, t)) ? (yield M.a.setEmailProfile(new St.a),
                !0) : (E.a.warn("Failed to logout email."),
                !1)
            })
        }
        setIdentifier(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const {profileProvider: i} = this.secondaryChannelIdentifierUpdater
                  , n = yield i.getProfile()
                  , o = yield this.secondaryChannelIdentifierUpdater.setIdentifier(e, t)
                  , s = o.subscriptionId;
                if (s) {
                    const t = i.newProfile(s, e);
                    yield this.updatePushPlayersRelationToEmailPlayer(n, t)
                }
                return yield S.a.trigger(OneSignal.EVENTS.EMAIL_SUBSCRIPTION_CHANGED, {
                    email: o.identifier
                }),
                s
            })
        }
        updatePushPlayersRelationToEmailPlayer(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const {deviceId: i} = yield M.a.getSubscription()
                  , n = i
                  , o = !!!e.subscriptionId || e.subscriptionId !== t.subscriptionId
                  , s = !e.identifier || t.identifier !== e.identifier;
                if (i && n && (o || s)) {
                    const e = yield OneSignal.database.getExternalUserIdAuthHash()
                      , n = yield M.a.getAppConfig();
                    yield yt.updatePlayer(n.appId, i, {
                        parent_player_id: t.subscriptionId,
                        email: t.identifier,
                        external_user_id_auth_hash: e
                    })
                }
            })
        }
        onSession() {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield this.secondaryChannelSessionUpdater.sendOnSession()
            })
        }
        onFocus(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield this.secondaryChannelFocusUpdater.sendOnFocus(e)
            })
        }
        setTags(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield this.secondaryChannelTagsUpdater.sendTags(e)
            })
        }
        setExternalUserId(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield this.secondaryChannelExternalUserIdUpdater.setExternalUserId(e, t)
            })
        }
    }
    class Et {
        static addExternalUserIdToDeviceRecord(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = yield M.a.getExternalUserId();
                if (!t)
                    return;
                e.externalUserId = t;
                const i = yield M.a.getExternalUserIdAuthHash();
                i && (e.externalUserIdAuthHash = i)
            })
        }
    }
    class It extends ae {
        constructor(e, t, i, n) {
            super(),
            this.deliveryPlatform = e,
            this.identifier = t,
            this.identifierAuthHash = i,
            this.pushDeviceRecordId = n
        }
        serialize() {
            const e = super.serialize();
            return this.identifier && (e.identifier = this.identifier),
            this.identifierAuthHash && (e.identifier_auth_hash = this.identifierAuthHash),
            this.pushDeviceRecordId && (e.device_player_id = this.pushDeviceRecordId),
            e
        }
        deserialize(e) {
            throw new re
        }
    }
    class Pt {
        constructor(e) {
            this.profileProvider = e
        }
        setIdentifier(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const i = yield M.a.getAppConfig()
                  , n = yield this.profileProvider.getProfile()
                  , o = this.profileProvider.newProfile(n.subscriptionId, e, t);
                if (n.subscriptionId)
                    yield yt.updatePlayer(i.appId, n.subscriptionId, {
                        identifier: e,
                        identifier_auth_hash: t
                    });
                else {
                    const {deviceId: e} = yield M.a.getSubscription()
                      , t = new It(this.profileProvider.deviceType,o.identifier,o.identifierAuthHash,e);
                    t.appId = i.appId,
                    yield Et.addExternalUserIdToDeviceRecord(t),
                    o.subscriptionId = yield yt.createUser(t)
                }
                return o.subscriptionId && (yield this.profileProvider.setProfile(o)),
                o
            })
        }
    }
    class Ct {
        constructor(e) {
            this.profileProvider = e
        }
        sendTags(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = yield this.profileProvider.getSubscriptionId()
                  , {appId: i} = yield M.a.getAppConfig()
                  , n = (yield this.profileProvider.getProfile()).identifierAuthHash
                  , o = {
                    tags: e,
                    identifier_auth_hash: n
                };
                yield yt.updatePlayer(i, t, o)
            })
        }
    }
    class Tt {
        constructor(e) {
            this.profileProvider = e
        }
        setExternalUserId(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const i = yield this.profileProvider.getSubscriptionId()
                  , {appId: n} = yield M.a.getAppConfig()
                  , o = {
                    external_user_id: e,
                    external_user_id_auth_hash: t
                };
                yield C.updatePlayer(n, i, o)
            })
        }
    }
    class At {
        constructor(e) {
            this.profileProvider = e
        }
        sendOnFocus(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = yield this.profileProvider.getProfile();
                if (!t.subscriptionId)
                    return;
                const i = {
                    app_id: (yield M.a.getAppConfig()).appId,
                    type: 1,
                    state: "ping",
                    active_time: e,
                    device_type: this.profileProvider.deviceType
                };
                yield P.post(`players/${t.subscriptionId}/on_focus`, i)
            })
        }
    }
    class Mt {
        constructor(e) {
            this.profileProvider = e
        }
        sendOnSession() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = yield this.profileProvider.getProfile();
                if (!e.subscriptionId)
                    return;
                const t = new It(this.profileProvider.deviceType,e.identifier,e.identifierAuthHash)
                  , i = yield M.a.getAppConfig();
                t.appId = i.appId;
                const n = yield C.updateUserSession(e.subscriptionId, t);
                n !== e.subscriptionId && (e.subscriptionId = n,
                yield this.profileProvider.setProfile(e))
            })
        }
    }
    class Nt {
        constructor() {
            this._pendingGetSubscriptionIdResolvers = []
        }
        setProfile(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (!e.subscriptionId)
                    return;
                const t = e.subscriptionId;
                this._pendingGetSubscriptionIdResolvers.map(e=>{
                    e(t)
                }
                ),
                this._pendingGetSubscriptionIdResolvers = []
            })
        }
        getSubscriptionId() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = yield this.getProfile();
                return e.subscriptionId ? e.subscriptionId : new Promise(e=>{
                    this._pendingGetSubscriptionIdResolvers.push(e)
                }
                )
            })
        }
    }
    class xt extends Nt {
        constructor() {
            super(...arguments),
            this.deviceType = ne.Email
        }
        newProfile(e, t, i) {
            return new St.a(e,t,i)
        }
        getProfile() {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield M.a.getEmailProfile()
            })
        }
        setProfile(e) {
            const t = Object.create(null, {
                setProfile: {
                    get: ()=>super.setProfile
                }
            });
            return Object(d.a)(this, void 0, void 0, function*() {
                yield M.a.setEmailProfile(e),
                yield t.setProfile.call(this, e)
            })
        }
    }
    var kt, jt, _t, Dt, Rt = i(19);
    class Ut extends Nt {
        constructor() {
            super(...arguments),
            this.deviceType = ne.SMS
        }
        newProfile(e, t, i) {
            return new Rt.a(e,t,i)
        }
        getProfile() {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield M.a.getSMSProfile()
            })
        }
        setProfile(e) {
            const t = Object.create(null, {
                setProfile: {
                    get: ()=>super.setProfile
                }
            });
            return Object(d.a)(this, void 0, void 0, function*() {
                yield M.a.setSMSProfile(e),
                yield t.setProfile.call(this, e)
            })
        }
    }
    class Wt {
        constructor(e, t, i, n, o) {
            this.secondaryChannelIdentifierUpdater = e,
            this.secondaryChannelExternalUserIdUpdater = t,
            this.secondaryChannelTagsUpdater = i,
            this.secondaryChannelSessionUpdater = n,
            this.secondaryChannelFocusUpdater = o
        }
        logout() {
            return Object(d.a)(this, void 0, void 0, function*() {
                return (yield M.a.getSMSProfile()).subscriptionId ? (yield M.a.setSMSProfile(new Rt.a),
                !0) : (E.a.warn(new b(r.NoSMSSet)),
                !1)
            })
        }
        setIdentifier(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const i = yield this.secondaryChannelIdentifierUpdater.setIdentifier(e, t);
                return yield S.a.trigger(OneSignal.EVENTS.SMS_SUBSCRIPTION_CHANGED, {
                    sms: i.identifier
                }),
                i.subscriptionId
            })
        }
        onSession() {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield this.secondaryChannelSessionUpdater.sendOnSession()
            })
        }
        onFocus(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield this.secondaryChannelFocusUpdater.sendOnFocus(e)
            })
        }
        setTags(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield this.secondaryChannelTagsUpdater.sendTags(e)
            })
        }
        setExternalUserId(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield this.secondaryChannelExternalUserIdUpdater.setExternalUserId(e, t)
            })
        }
    }
    class Bt {
        constructor() {
            this.synchronizer = new ft;
            const e = new xt
              , t = new wt(new Pt(e),new Tt(e),new Ct(e),new Mt(e),new At(e));
            this.email = t,
            this.synchronizer.registerChannel(t);
            const i = new Ut
              , n = new Wt(new Pt(i),new Tt(i),new Ct(i),new Mt(i),new At(i));
            this.sms = n,
            this.synchronizer.registerChannel(n)
        }
    }
    class Lt {
        static getServiceWorkerHref(e, t, i) {
            return Lt.appendServiceWorkerParams(e.workerPath.getFullPath(), t, i)
        }
        static appendServiceWorkerParams(e, t, i) {
            return `${new URL(e,N.a.getBaseUrl()).href}?${w.b.encodeHashAsUriComponent({
                appId: t
            })}&${w.b.encodeHashAsUriComponent({
                sdkVersion: i
            })}`
        }
        static upsertSession(e, t, i, n, o, s) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (!n)
                    return void ut.error("No deviceId provided for new session.");
                if (!i.app_id)
                    return void ut.error("No appId provided for new session.");
                const r = yield M.a.getCurrentSession();
                if (!r) {
                    const e = i.app_id
                      , t = Object(me.d)({
                        deviceId: n,
                        appId: e,
                        deviceType: i.device_type
                    })
                      , s = yield M.a.getLastNotificationClicked(e);
                    return s && (t.notificationId = s.notificationId),
                    yield M.a.upsertSession(t),
                    void (yield Lt.sendOnSessionCallIfNecessary(o, i, n, t))
                }
                if (r.status === me.c.Active)
                    return void ut.debug("Session already active", r);
                if (!r.lastDeactivatedTimestamp)
                    return void ut.debug("Session is in invalid state", r);
                const a = (new Date).getTime();
                if (Lt.timeInSecondsBetweenTimestamps(a, r.lastDeactivatedTimestamp) <= e)
                    return r.status = me.c.Active,
                    r.lastActivatedTimestamp = a,
                    r.lastDeactivatedTimestamp = null,
                    void (yield M.a.upsertSession(r));
                yield Lt.finalizeSession(r, t, s);
                const c = Object(me.d)({
                    deviceId: n,
                    appId: i.app_id,
                    deviceType: i.device_type
                });
                yield M.a.upsertSession(c),
                yield Lt.sendOnSessionCallIfNecessary(o, i, n, c)
            })
        }
        static deactivateSession(e, t, i) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const n = yield M.a.getCurrentSession();
                if (!n)
                    return void ut.debug("No active session found. Cannot deactivate.");
                if (n.status === me.c.Inactive)
                    return bt(()=>Lt.finalizeSession(n, t, i), e);
                if (n.status !== me.c.Active)
                    return void ut.warn(`Session in invalid state ${n.status}. Cannot deactivate.`);
                const o = (new Date).getTime()
                  , s = Lt.timeInSecondsBetweenTimestamps(o, n.lastActivatedTimestamp);
                n.lastDeactivatedTimestamp = o,
                n.accumulatedDuration += s,
                n.status = me.c.Inactive;
                const r = bt(()=>Lt.finalizeSession(n, t, i), e);
                return yield M.a.upsertSession(n),
                r
            })
        }
        static sendOnSessionCallIfNecessary(e, t, i, n) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (e === me.b.PlayerCreate)
                    return;
                if (!t.identifier) {
                    const e = yield self.registration.pushManager.getSubscription();
                    if (e) {
                        const i = he.setFromW3cSubscription(e)
                          , n = new ce(i).serialize();
                        t.identifier = n.identifier
                    }
                }
                const o = yield lt.updateUserSession(i, t);
                o !== i && (n.deviceId = o,
                yield Promise.all([M.a.setDeviceId(o), M.a.upsertSession(n), M.a.resetSentUniqueOutcomes()])),
                yield(new Bt).synchronizer.onSession()
            })
        }
        static finalizeSession(e, t, i) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (ut.debug("Finalize session", `started: ${new Date(e.startTimestamp)}`, `duration: ${e.accumulatedDuration}s`),
                t) {
                    ut.debug(`send on_focus reporting session duration -> ${e.accumulatedDuration}s`);
                    const t = yield pt.getAttribution(i);
                    ut.debug("send on_focus with attribution", t),
                    yield lt.sendSessionDuration(e.appId, e.deviceId, e.accumulatedDuration, e.deviceType, t),
                    yield(new Bt).synchronizer.onFocus(e.accumulatedDuration)
                }
                yield Promise.all([M.a.cleanupCurrentSession(), M.a.removeAllNotificationClicked()]),
                ut.debug("Finalize session finished", `started: ${new Date(e.startTimestamp)}`)
            })
        }
        static timeInSecondsBetweenTimestamps(e, t) {
            return e <= t ? 0 : Math.floor((e - t) / 1e3)
        }
    }
    (jt = kt || (kt = {})).OneSignalWorker = "OneSignal Worker",
    jt.ThirdParty = "3rd Party",
    jt.None = "None",
    jt.Indeterminate = "Indeterminate";
    class Vt {
        constructor(e, t) {
            this.context = e,
            this.config = t
        }
        getRegistration() {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield Ee.getRegistration(this.config.registrationOptions.scope)
            })
        }
        getActiveState() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = yield y.a.getIntegration();
                if (e === Ne.a.InsecureProxy)
                    return kt.Indeterminate;
                if (e === Ne.a.SecureProxy) {
                    switch (y.a.getWindowEnv()) {
                    case oe.a.Host:
                    case oe.a.CustomIframe:
                        const e = OneSignal.proxyFrameHost;
                        return e ? yield e.runCommand(OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE) : kt.Indeterminate;
                    case oe.a.OneSignalSubscriptionPopup:
                        break;
                    case oe.a.OneSignalSubscriptionModal:
                        throw new re
                    }
                }
                const t = yield this.context.serviceWorkerManager.getRegistration();
                if (!t)
                    return kt.None;
                const i = Vt.activeSwFileName(t);
                return this.swActiveStateByFileName(i)
            })
        }
        static activeSwFileName(e) {
            const t = Ee.getAvailableServiceWorker(e);
            if (!t)
                return null;
            const i = new URL(t.scriptURL).pathname
              , n = new st(i).getFileName();
            if ("akam-sw.js" == n) {
                const e = new URLSearchParams(new URL(t.scriptURL).search).get("othersw");
                if (e)
                    return E.a.debug("Found a ServiceWorker under Akamai's akam-sw.js?othersw=", e),
                    new st(new URL(e).pathname).getFileName()
            }
            return n
        }
        swActiveStateByFileName(e) {
            return e ? e == this.config.workerPath.getFileName() ? kt.OneSignalWorker : kt.ThirdParty : kt.None
        }
        getWorkerVersion() {
            return Object(d.a)(this, void 0, void 0, function*() {
                return new Promise(e=>Object(d.a)(this, void 0, void 0, function*() {
                    if (N.b.isUsingSubscriptionWorkaround()) {
                        const t = OneSignal.proxyFrameHost;
                        if (t) {
                            const i = yield t.runCommand(OneSignal.POSTMAM_COMMANDS.GET_WORKER_VERSION);
                            e(i)
                        } else
                            e(NaN)
                    } else
                        this.context.workerMessenger.once(Se.WorkerVersion, t=>{
                            e(t)
                        }
                        ),
                        yield this.context.workerMessenger.unicast(Se.WorkerVersion)
                }))
            })
        }
        shouldInstallWorker() {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (!h.a.supportsServiceWorkers())
                    return !1;
                if (!OneSignal.config)
                    return !1;
                if (OneSignal.config.subdomain && "safari" !== OneSignal.environmentInfo.browserType && y.a.getWindowEnv() === oe.a.Host)
                    return !1;
                const e = yield this.getActiveState();
                if (E.a.debug("[shouldInstallWorker] workerState", e),
                e === kt.None || e === kt.ThirdParty) {
                    const e = "granted" === (yield OneSignal.context.permissionManager.getNotificationPermission(OneSignal.config.safariWebId));
                    return e && E.a.info("[shouldInstallWorker] Notification Permissions enabled, will install ServiceWorker"),
                    e
                }
                return !!(yield this.haveParamsChanged()) || this.workerNeedsUpdate()
            })
        }
        haveParamsChanged() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = yield this.context.serviceWorkerManager.getRegistration();
                if (!e)
                    return E.a.info("[changedServiceWorkerParams] workerRegistration not found at scope", this.config.registrationOptions.scope),
                    !0;
                const t = new URL(e.scope).pathname
                  , i = this.config.registrationOptions.scope;
                if (t != i)
                    return E.a.info("[changedServiceWorkerParams] ServiceWorker scope changing", {
                        a_old: t,
                        b_new: i
                    }),
                    !0;
                const n = Ee.getAvailableServiceWorker(e)
                  , o = Lt.getServiceWorkerHref(this.config, this.context.appConfig.appId, h.a.version());
                return null === n || void 0 === n || !n.scriptURL || o !== n.scriptURL && (E.a.info("[changedServiceWorkerParams] ServiceWorker href changing:", {
                    a_old: null === n || void 0 === n ? void 0 : n.scriptURL,
                    b_new: o
                }),
                !0)
            })
        }
        workerNeedsUpdate() {
            return Object(d.a)(this, void 0, void 0, function*() {
                let e;
                E.a.info("[Service Worker Update] Checking service worker version...");
                try {
                    e = yield w.a.timeoutPromise(this.getWorkerVersion(), 2e3)
                } catch (e) {
                    return E.a.info("[Service Worker Update] Worker did not reply to version query; assuming older version and updating."),
                    !0
                }
                return e !== h.a.version() ? (E.a.info(`[Service Worker Update] Updating service worker from ${e} --\x3e ${h.a.version()}.`),
                !0) : (E.a.info(`[Service Worker Update] Service worker version is current at ${e} (no update required).`),
                !1)
            })
        }
        establishServiceWorkerChannel() {
            return Object(d.a)(this, void 0, void 0, function*() {
                E.a.debug("establishServiceWorkerChannel");
                const e = this.context.workerMessenger;
                e.off(),
                e.on(Se.NotificationDisplayed, e=>Object(d.a)(this, void 0, void 0, function*() {
                    E.a.debug(location.origin, "Received notification display event from service worker."),
                    yield S.a.trigger(OneSignal.EVENTS.NOTIFICATION_DISPLAYED, e)
                })),
                e.on(Se.NotificationClicked, e=>Object(d.a)(this, void 0, void 0, function*() {
                    let t;
                    if (0 === (t = y.a.getWindowEnv() === oe.a.OneSignalProxyFrame ? yield new Promise(e=>{
                        const t = OneSignal.proxyFrame;
                        t && t.messenger.message(OneSignal.POSTMAM_COMMANDS.GET_EVENT_LISTENER_COUNT, OneSignal.EVENTS.NOTIFICATION_CLICKED, t=>{
                            const i = t.data;
                            e(i)
                        }
                        )
                    }
                    ) : OneSignal.emitter.numberOfListeners(OneSignal.EVENTS.NOTIFICATION_CLICKED))) {
                        E.a.debug("notification.clicked event received, but no event listeners; storing event in IndexedDb for later retrieval.");
                        let t = e.url;
                        e.url || (t = location.href),
                        yield M.a.put("NotificationOpened", {
                            url: t,
                            data: e,
                            timestamp: Date.now()
                        })
                    } else
                        yield S.a.trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, e)
                })),
                e.on(Se.RedirectPage, e=>{
                    E.a.debug(`${y.a.getWindowEnv().toString()} Picked up command.redirect to ${e}, forwarding to host page.`);
                    const t = OneSignal.proxyFrame;
                    t && t.messenger.message(OneSignal.POSTMAM_COMMANDS.SERVICEWORKER_COMMAND_REDIRECT, e)
                }
                ),
                e.on(Se.NotificationDismissed, e=>Object(d.a)(this, void 0, void 0, function*() {
                    yield S.a.trigger(OneSignal.EVENTS.NOTIFICATION_DISMISSED, e)
                }));
                const t = N.b.isHttps()
                  , i = N.b.isSafari();
                e.on(Se.AreYouVisible, n=>Object(d.a)(this, void 0, void 0, function*() {
                    if (t && i) {
                        const t = {
                            timestamp: n.timestamp,
                            focused: document.hasFocus()
                        };
                        yield e.directPostMessageToSW(Se.AreYouVisibleResponse, t)
                    } else {
                        const e = {
                            timestamp: n.timestamp
                        }
                          , t = OneSignal.proxyFrame;
                        t && t.messenger.message(OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_REQUEST, e)
                    }
                }))
            })
        }
        installWorker() {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (!(yield this.shouldInstallWorker()))
                    return;
                E.a.info("Installing worker..."),
                (yield this.getActiveState()) === kt.ThirdParty && E.a.info("[Service Worker Installation] 3rd party service worker detected.");
                const e = Lt.getServiceWorkerHref(this.config, this.context.appConfig.appId, h.a.version())
                  , t = `${N.b.getBaseUrl()}${this.config.registrationOptions.scope}`;
                E.a.info(`[Service Worker Installation] Installing service worker ${e} ${t}.`);
                try {
                    yield navigator.serviceWorker.register(e, {
                        scope: t
                    })
                } catch (t) {
                    if (E.a.error(`[Service Worker Installation] Installing service worker failed ${t}`),
                    y.a.getWindowEnv() === oe.a.OneSignalSubscriptionPopup)
                        throw t;
                    const i = yield fetch(e);
                    if (403 === i.status || 404 === i.status)
                        throw new ct(i.status,i.statusText);
                    throw t
                }
                E.a.debug("[Service Worker Installation] Service worker installed."),
                yield this.establishServiceWorkerChannel()
            })
        }
    }
    (Dt = _t || (_t = {}))[Dt.InvalidSafariSetup = 0] = "InvalidSafariSetup",
    Dt[Dt.Blocked = 1] = "Blocked",
    Dt[Dt.Dismissed = 2] = "Dismissed";
    class Ft extends p.a {
        constructor(e) {
            let t;
            switch (e) {
            case _t.InvalidSafariSetup:
                t = "The Safari site URL, icon size, or push certificate is invalid, or Safari is in a private session.";
                break;
            case _t.Blocked:
                t = "Notification permissions are blocked.";
                break;
            case _t.Dismissed:
                t = "The notification permission prompt was dismissed."
            }
            super(t),
            Object.setPrototypeOf(this, Ft.prototype)
        }
    }
    class Ht {
        constructor(e, t) {
            this.safariPermissionPromptFailed = !1,
            this.context = e,
            this.config = t
        }
        subscribe(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = y.a.getWindowEnv();
                switch (t) {
                case oe.a.CustomIframe:
                case oe.a.Unknown:
                case oe.a.OneSignalProxyFrame:
                    throw new m(o.UnsupportedEnvironment)
                }
                let i;
                switch (t) {
                case oe.a.ServiceWorker:
                    i = yield this.subscribeFcmFromWorker(e);
                    break;
                case oe.a.Host:
                case oe.a.OneSignalSubscriptionModal:
                case oe.a.OneSignalSubscriptionPopup:
                    if ((yield OneSignal.privateGetNotificationPermission()) === A.Denied)
                        throw new ge(le.Blocked);
                    if (h.a.useSafariLegacyPush()) {
                        i = yield this.subscribeSafari(),
                        E.a.info("Installing SW on Safari");
                        try {
                            yield this.context.serviceWorkerManager.installWorker(),
                            E.a.info("SW on Safari successfully installed")
                        } catch (e) {
                            E.a.error("SW on Safari failed to install.")
                        }
                    } else
                        i = yield this.subscribeFcmFromPage(e);
                    break;
                default:
                    throw new m(o.UnsupportedEnvironment)
                }
                return i
            })
        }
        registerSubscription(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                e && (e = he.deserialize(e));
                const i = ce.createFromPushSubscription(this.config.appId, e, t);
                let n = void 0;
                (yield this.isAlreadyRegisteredWithOneSignal()) ? yield this.context.updateManager.sendPushDeviceRecordUpdate(i) : (n = yield this.context.updateManager.sendPlayerCreate(i)) && (yield this.associateSubscriptionWithEmail(n));
                const o = yield M.a.getSubscription();
                return o.deviceId = n,
                o.optedOut = !1,
                e ? h.a.useSafariLegacyPush() ? o.subscriptionToken = e.safariDeviceToken : o.subscriptionToken = e.w3cEndpoint ? e.w3cEndpoint.toString() : null : o.subscriptionToken = null,
                yield M.a.setSubscription(o),
                y.a.getWindowEnv() !== oe.a.ServiceWorker && S.a.trigger(OneSignal.EVENTS.REGISTERED),
                "undefined" != typeof OneSignal && (OneSignal._sessionInitAlreadyRunning = !1),
                o
            })
        }
        static requestPresubscribeNotificationPermission() {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield Ht.requestNotificationPermission()
            })
        }
        unsubscribe(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (0 === e)
                    throw new re;
                if (1 !== e)
                    throw new re;
                if (y.a.getWindowEnv() !== oe.a.ServiceWorker)
                    throw new re;
                {
                    const {deviceId: e} = yield M.a.getSubscription();
                    yield C.updatePlayer(this.context.appConfig.appId, e, {
                        notification_types: ie.MutedByApi
                    }),
                    yield M.a.put("Options", {
                        key: "optedOut",
                        value: !0
                    })
                }
            })
        }
        static requestNotificationPermission() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = yield window.Notification.requestPermission();
                return A[e]
            })
        }
        associateSubscriptionWithEmail(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = yield M.a.getEmailProfile();
                t.subscriptionId && (yield C.updatePlayer(this.config.appId, e, {
                    parent_player_id: t.subscriptionId,
                    email: t.identifier
                }))
            })
        }
        isAlreadyRegisteredWithOneSignal() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const {deviceId: e} = yield M.a.getSubscription();
                return !!e
            })
        }
        subscribeSafariPromptPermission() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = e=>new Promise(t=>{
                    window.safari.pushNotification.requestPermission(e, this.config.safariWebId, {
                        app_id: this.config.appId
                    }, e=>{
                        e && e.deviceToken ? t(e.deviceToken.toLowerCase()) : t(null)
                    }
                    )
                }
                );
                return this.safariPermissionPromptFailed ? e(`${y.a.getOneSignalApiUrl().toString()}/safari`) : e(`${y.a.getOneSignalApiUrl().toString()}/safari/apps/${this.config.appId}`)
            })
        }
        subscribeSafari() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = new he;
                if (!this.config.safariWebId)
                    throw new f(c.MissingSafariWebId);
                const {deviceToken: t} = window.safari.pushNotification.permission(this.config.safariWebId);
                e.existingSafariDeviceToken = t,
                t || S.a.trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED);
                const i = yield this.subscribeSafariPromptPermission();
                if (ue.a.triggerNotificationPermissionChanged(),
                !i)
                    throw this.safariPermissionPromptFailed = !0,
                    new Ft(_t.InvalidSafariSetup);
                return e.setFromSafariSubscription(i),
                e
            })
        }
        subscribeFcmFromPage(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (y.a.getWindowEnv() !== oe.a.ServiceWorker && Notification.permission === A.Default) {
                    yield S.a.trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED);
                    const e = yield Ht.requestPresubscribeNotificationPermission()
                      , t = e === A.Default;
                    switch (yield ue.a.triggerNotificationPermissionChanged(t),
                    e) {
                    case A.Default:
                        throw E.a.debug("Exiting subscription and not registering worker because the permission was dismissed."),
                        OneSignal._sessionInitAlreadyRunning = !1,
                        OneSignal._isRegisteringForPush = !1,
                        new ge(le.Dismissed);
                    case A.Denied:
                        throw E.a.debug("Exiting subscription and not registering worker because the permission was blocked."),
                        OneSignal._sessionInitAlreadyRunning = !1,
                        OneSignal._isRegisteringForPush = !1,
                        new ge(le.Blocked)
                    }
                }
                try {
                    yield this.context.serviceWorkerManager.installWorker()
                } catch (e) {
                    throw e instanceof ct && (403 === e.status ? yield this.context.subscriptionManager.registerFailedSubscription(ie.ServiceWorkerStatus403, this.context) : 404 === e.status && (yield this.context.subscriptionManager.registerFailedSubscription(ie.ServiceWorkerStatus404, this.context))),
                    e
                }
                E.a.debug("[Subscription Manager] Getting OneSignal service Worker...");
                const t = yield this.context.serviceWorkerManager.getRegistration();
                if (!t)
                    throw new Error("OneSignal service worker not found!");
                return E.a.debug("[Subscription Manager] Service worker is ready to continue subscribing."),
                yield this.subscribeWithVapidKey(t.pushManager, e)
            })
        }
        subscribeFcmFromWorker(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = self.registration;
                if (!t.active && !g.a.firefox)
                    throw new m(o.ServiceWorkerNotActivated);
                const i = yield t.pushManager.permissionState({
                    userVisibleOnly: !0
                });
                if ("denied" === i)
                    throw new ge(le.Blocked);
                if ("prompt" === i)
                    throw new ge(le.Default);
                return yield this.subscribeWithVapidKey(t.pushManager, e)
            })
        }
        getVapidKeyForBrowser() {
            let e = void 0;
            return (e = g.a.firefox ? this.config.onesignalVapidPublicKey : this.config.vapidPublicKey) ? function(e) {
                const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/")
                  , i = atob(t)
                  , n = new Uint8Array(i.length);
                for (let e = 0; e < i.length; ++e)
                    n[e] = i.charCodeAt(e);
                return n
            }(e).buffer : void 0
        }
        subscribeWithVapidKey(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const i = yield e.getSubscription();
                switch (t) {
                case 0:
                    if (!i)
                        break;
                    i.options ? E.a.debug("[Subscription Manager] An existing push subscription exists and it's options is not null.") : (E.a.debug("[Subscription Manager] An existing push subscription exists and options is null. Unsubscribing from push first now."),
                    yield Ht.doPushUnsubscribe(i));
                    break;
                case 1:
                    i && (yield Ht.doPushUnsubscribe(i))
                }
                const [n,o] = yield Ht.doPushSubscribe(e, this.getVapidKeyForBrowser());
                yield Ht.updateSubscriptionTime(o, n.expirationTime);
                const s = he.setFromW3cSubscription(n);
                return i && (s.existingW3cPushSubscription = he.setFromW3cSubscription(i)),
                s
            })
        }
        static updateSubscriptionTime(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const i = yield M.a.getSubscription();
                e && (i.createdAt = (new Date).getTime()),
                i.expirationTime = t,
                yield M.a.setSubscription(i)
            })
        }
        static doPushUnsubscribe(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                E.a.debug("[Subscription Manager] Unsubscribing existing push subscription.");
                const t = yield e.unsubscribe();
                return E.a.debug(`[Subscription Manager] Unsubscribing existing push subscription result: ${t}`),
                t
            })
        }
        static doPushSubscribe(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (!t)
                    throw new Error("Missing required 'applicationServerKey' to subscribe for push notifications!");
                const i = {
                    userVisibleOnly: !0,
                    applicationServerKey: t
                };
                E.a.debug("[Subscription Manager] Subscribing to web push with these options:", i);
                try {
                    const t = yield e.getSubscription();
                    return [yield e.subscribe(i), !t]
                } catch (t) {
                    if ("InvalidStateError" == t.name) {
                        E.a.warn("[Subscription Manager] Couldn't re-subscribe due to applicationServerKey changing, unsubscribe and attempting to subscribe with new key.", t);
                        const n = yield e.getSubscription();
                        return n && (yield Ht.doPushUnsubscribe(n)),
                        [yield e.subscribe(i), !0]
                    }
                    throw t
                }
            })
        }
        isSubscriptionExpiring() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = yield y.a.getIntegration()
                  , t = y.a.getWindowEnv();
                switch (e) {
                case Ne.a.Secure:
                    return yield this.isSubscriptionExpiringForSecureIntegration();
                case Ne.a.SecureProxy:
                    if (t === oe.a.Host) {
                        const e = OneSignal.proxyFrameHost;
                        if (e)
                            return yield e.runCommand(OneSignal.POSTMAM_COMMANDS.SUBSCRIPTION_EXPIRATION_STATE);
                        throw new m(o.NoProxyFrame)
                    }
                    return yield this.isSubscriptionExpiringForSecureIntegration();
                case Ne.a.InsecureProxy:
                    const {expirationTime: i} = yield M.a.getSubscription();
                    return !!i && (new Date).getTime() >= i
                }
            })
        }
        isSubscriptionExpiringForSecureIntegration() {
            return Object(d.a)(this, void 0, void 0, function*() {
                if ((yield this.context.serviceWorkerManager.getActiveState()) !== kt.OneSignalWorker)
                    return !1;
                const e = yield this.context.serviceWorkerManager.getRegistration();
                if (!e)
                    return !1;
                if (!e.pushManager)
                    return !1;
                const t = yield e.pushManager.getSubscription();
                if (!t)
                    return !1;
                if (!t.expirationTime)
                    return !1;
                let {createdAt: i} = yield M.a.getSubscription();
                if (!i) {
                    const e = 31536e6;
                    i = (new Date).getTime() + e
                }
                const n = i + (t.expirationTime - i) / 2;
                return !!t.expirationTime && ((new Date).getTime() >= t.expirationTime || (new Date).getTime() >= n)
            })
        }
        getSubscriptionState() {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (h.a.useSafariLegacyPush())
                    return this.getSubscriptionStateForSecure();
                const e = y.a.getWindowEnv();
                switch (e) {
                case oe.a.ServiceWorker:
                    const t = yield self.registration.pushManager.getSubscription()
                      , {optedOut: i} = yield M.a.getSubscription();
                    return {
                        subscribed: !!t,
                        optedOut: !!i
                    };
                default:
                    switch (yield y.a.getIntegration()) {
                    case Ne.a.Secure:
                        return this.getSubscriptionStateForSecure();
                    case Ne.a.SecureProxy:
                        switch (e) {
                        case oe.a.OneSignalProxyFrame:
                        case oe.a.OneSignalSubscriptionPopup:
                        case oe.a.OneSignalSubscriptionModal:
                            return this.getSubscriptionStateForSecure();
                        default:
                            return yield OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.GET_SUBSCRIPTION_STATE)
                        }
                    case Ne.a.InsecureProxy:
                        return yield this.getSubscriptionStateForInsecure();
                    default:
                        throw new m(o.UnsupportedEnvironment)
                    }
                }
            })
        }
        getSubscriptionStateForSecure() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const {deviceId: e, optedOut: t} = yield M.a.getSubscription();
                if (h.a.useSafariLegacyPush()) {
                    const i = window.safari.pushNotification.permission(this.config.safariWebId);
                    return {
                        subscribed: !("granted" !== i.permission || !i.deviceToken || !e),
                        optedOut: !!t
                    }
                }
                const i = yield this.context.serviceWorkerManager.getActiveState()
                  , n = yield this.context.serviceWorkerManager.getRegistration()
                  , o = yield this.context.permissionManager.getNotificationPermission(this.context.appConfig.safariWebId)
                  , s = i === kt.OneSignalWorker;
                return n ? {
                    subscribed: !(!e || o !== A.Granted || !s),
                    optedOut: !!t
                } : {
                    subscribed: !1,
                    optedOut: !!t
                }
            })
        }
        getSubscriptionStateForInsecure() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const {deviceId: e, subscriptionToken: t, optedOut: i} = yield M.a.getSubscription()
                  , n = yield this.context.permissionManager.getNotificationPermission(this.context.appConfig.safariWebId);
                return {
                    subscribed: !(!e || !t || n !== A.Granted),
                    optedOut: !!i
                }
            })
        }
        registerFailedSubscription(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                t.pageViewManager.isFirstPageView() && (t.subscriptionManager.registerSubscription(new he, e),
                t.pageViewManager.incrementPageViewCount())
            })
        }
    }
    var $t = class {
        static getServiceWorkerManager(e) {
            const t = e.appConfig
              , i = y.a.getBuildEnvPrefix()
              , n = {
                workerPath: new st(`/${i}OneSignalSDKWorker.js`),
                registrationOptions: {
                    scope: "/"
                }
            };
            return t.userConfig && (t.userConfig.path && (n.workerPath = new st(`${t.userConfig.path}${t.userConfig.serviceWorkerPath}`)),
            t.userConfig.serviceWorkerParam && (n.registrationOptions = t.userConfig.serviceWorkerParam)),
            new Vt(e,n)
        }
        static getSubscriptionManager(e) {
            const t = e.appConfig
              , i = {
                safariWebId: t.safariWebId,
                appId: t.appId,
                vapidPublicKey: t.vapidPublicKey,
                onesignalVapidPublicKey: t.onesignalVapidPublicKey
            };
            return new Ht(e,i)
        }
    }
    ;
    class Gt {
        constructor(e) {
            this.context = e,
            this.onSessionSent = e.pageViewManager.getPageViewCount() > 1
        }
        isDeviceIdAvailable() {
            return Object(d.a)(this, void 0, void 0, function*() {
                return null != (yield M.a.getSubscription()).deviceId
            })
        }
        getDeviceId() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const {deviceId: e} = yield M.a.getSubscription();
                if (!e)
                    throw new b(r.NoDeviceId);
                return e
            })
        }
        createDeviceRecord() {
            return Object(d.a)(this, void 0, void 0, function*() {
                return fe.createDeviceRecord(this.context.appConfig.appId)
            })
        }
        sendPushDeviceRecordUpdate(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (!(yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal()))
                    return void E.a.debug("Not sending the update because user is not registered with OneSignal (no device id)");
                const t = yield this.getDeviceId();
                e || (e = yield this.createDeviceRecord()),
                this.onSessionSent ? yield C.updatePlayer(this.context.appConfig.appId, t, Object.assign({
                    notification_types: ie.Subscribed
                }, e.serialize())) : yield this.sendOnSessionUpdate(e)
            })
        }
        sendOnSessionUpdate(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (this.onSessionSent)
                    return;
                if (!this.context.pageViewManager.isFirstPageView())
                    return;
                if (!(yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal()))
                    return void E.a.debug("Not sending the on session because user is not registered with OneSignal (no device id)");
                const t = yield this.getDeviceId();
                if (e || (e = yield this.createDeviceRecord()),
                e.subscriptionState === ie.Subscribed || !0 === OneSignal.config.enableOnSession)
                    try {
                        this.context.sessionManager.upsertSession(t, e, me.b.PlayerOnSession),
                        this.onSessionSent = !0
                    } catch (e) {
                        E.a.error(`Failed to update user session. Error "${e.message}" ${e.stack}`)
                    }
            })
        }
        sendPlayerCreate(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Et.addExternalUserIdToDeviceRecord(e);
                try {
                    const t = yield C.createUser(e);
                    return t ? (E.a.info("Subscribed to web push and registered with OneSignal", e, t),
                    this.onSessionSent = !0,
                    this.context.sessionManager.upsertSession(t, e, me.b.PlayerCreate),
                    t) : void E.a.error("Failed to create user.")
                } catch (e) {
                    return void E.a.error(`Failed to create user. Error "${e.message}" ${e.stack}`)
                }
            })
        }
        onSessionAlreadyCalled() {
            return this.onSessionSent
        }
        sendExternalUserIdUpdate(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                t || (t = yield M.a.getExternalUserIdAuthHash());
                const i = {
                    external_user_id: w.b.getValueOrDefault(e, ""),
                    external_user_id_auth_hash: w.b.getValueOrDefault(t, void 0)
                };
                this.context.secondaryChannelManager.synchronizer.setExternalUserId(i.external_user_id, i.external_user_id_auth_hash);
                const n = this.sendPushPlayerUpdate(i);
                (yield this.isDeviceIdAvailable()) && (yield n)
            })
        }
        sendTagsUpdate(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                this.context.secondaryChannelManager.synchronizer.setTags(e);
                const t = {
                    tags: e
                }
                  , i = yield M.a.getExternalUserIdAuthHash();
                i && (t.external_user_id_auth_hash = i);
                const n = this.sendPushPlayerUpdate(t);
                (yield this.isDeviceIdAvailable()) && (yield n)
            })
        }
        sendPushPlayerUpdate(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                let {deviceId: t} = yield M.a.getSubscription();
                if (t || (yield Object(X.d)(OneSignal.EVENTS.REGISTERED),
                ({deviceId: t} = yield M.a.getSubscription())),
                t)
                    return yield C.updatePlayer(this.context.appConfig.appId, t, e)
            })
        }
        sendOutcomeDirect(e, t, i, n) {
            return Object(d.a)(this, void 0, void 0, function*() {
                Object(X.s)("sendOutcomeDirect");
                const o = yield this.createDeviceRecord()
                  , s = {
                    app_id: e,
                    id: i,
                    device_type: o.deliveryPlatform,
                    notification_ids: t,
                    direct: !0
                };
                void 0 !== n && (s.weight = n),
                yield C.sendOutcome(s)
            })
        }
        sendOutcomeInfluenced(e, t, i, n) {
            return Object(d.a)(this, void 0, void 0, function*() {
                Object(X.s)("sendOutcomeInfluenced");
                const o = yield this.createDeviceRecord()
                  , s = {
                    app_id: e,
                    id: i,
                    device_type: o.deliveryPlatform,
                    notification_ids: t,
                    direct: !1
                };
                void 0 !== n && (s.weight = n),
                yield C.sendOutcome(s)
            })
        }
        sendOutcomeUnattributed(e, t, i) {
            return Object(d.a)(this, void 0, void 0, function*() {
                Object(X.s)("sendOutcomeUnattributed");
                const n = yield this.createDeviceRecord()
                  , o = {
                    app_id: e,
                    id: t,
                    device_type: n.deliveryPlatform
                };
                void 0 !== i && (o.weight = i),
                yield C.sendOutcome(o)
            })
        }
    }
    const zt = {
        reportingThreshold: 30,
        enableOnSessionForUnsubcribed: !1,
        enableOnFocus: !0
    }
      , qt = {
        pageViews: 1,
        timeDelay: 0
    }
      , Kt = {
        actionMessage: "We'd like to show you notifications for the latest news and updates.",
        acceptButton: "Allow",
        cancelButton: "Cancel",
        errorButton: "Try Again",
        categoryDefaults: {
            updateMessage: "Update your push notification subscription preferences.",
            positiveUpdateButton: "Save Preferences",
            negativeUpdateButton: "Cancel"
        },
        savingText: "Saving...",
        confirmMessage: "Thank You!"
    }
      , Yt = {
        type: T.Push,
        text: {
            actionMessage: Kt.actionMessage,
            acceptButton: Kt.acceptButton,
            cancelButton: Kt.cancelButton
        },
        autoPrompt: !1,
        delay: qt
    };
    function Jt(e) {
        return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="24px" height="24px" fill="${e}"> <g transform="rotate(0 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.916s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(30 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.833s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(60 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(90 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.666s"/> </rect> </g> <g transform="rotate(120 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.583s"/> </rect> </g> <g transform="rotate(150 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.5s"/> </rect> </g> <g transform="rotate(180 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.416s"/> </rect> </g> <g transform="rotate(210 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.333s"/> </rect> </g> <g transform="rotate(240 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.25s"/> </rect> </g> <g transform="rotate(270 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.166s"/> </rect> </g> <g transform="rotate(300 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.083s"/> </rect> </g> <g transform="rotate(330 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="0s"/> </rect> </g> </svg>`
    }
    var Qt, Zt, Xt, ei;
    !function(e) {
        e.Stylesheet = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/css/intlTelInput.min.css",
        e.Main = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/intlTelInput.min.js",
        e.Utils = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js"
    }(Qt || (Qt = {})),
    function(e) {
        e.Stylesheet = "sha512-yye/u0ehQsrVrfSd6biT17t39Rg9kNc+vENcCXZuMz2a+LWFGvXUnYuWUW6pbfYj1jcBb/C39UZw2ciQvwDDvg==",
        e.Main = "sha512-OnkjbJ4TwPpgSmjXACCb5J4cJwi880VRe+vWpPDlr8M38/L3slN5uUAeOeWU2jN+4vN0gImCXFGdJmc0wO4Mig==",
        e.Utils = "sha512-bUcJxlqkiGA3cmoYPuZaLRsyc5ChG9APG4ajom2AXKSlBtOmx4kLV3c8uv/6uSz43FMjI4Q2QI21+D223rT76w=="
    }(Zt || (Zt = {}));
    class ti {
        constructor(e) {
            this.smsInputFieldIsValid = !0,
            this.emailInputFieldIsValid = !0,
            this.promptOptions = e
        }
        generateHtml() {
            const e = document.createElement("div");
            let t, i, n;
            switch (Object(X.a)(e, Y.channelCaptureContainer),
            e.id = Y.channelCaptureContainer,
            this.promptOptions.type) {
            case T.Sms:
                t = this.promptOptions.text.smsLabel || "Phone Number",
                i = this.getInputWithValidationElement(T.Sms, t),
                e.appendChild(i);
                break;
            case T.Email:
                t = this.promptOptions.text.emailLabel || "Email",
                n = this.getInputWithValidationElement(T.Email, t),
                e.appendChild(n);
                break;
            case T.SmsAndEmail:
                t = this.promptOptions.text.emailLabel || "Email",
                n = this.getInputWithValidationElement(T.Email, t),
                e.appendChild(n),
                t = this.promptOptions.text.smsLabel || "Phone Number",
                i = this.getInputWithValidationElement(T.Sms, t),
                e.appendChild(i)
            }
            return e
        }
        getValidationElementWithMessage(e) {
            const t = document.createElement("div")
              , i = document.createElement("img")
              , n = document.createElement("p");
            return n.innerText = e,
            i.setAttribute("src", z),
            t.appendChild(i),
            t.appendChild(n),
            t
        }
        getInputWithValidationElement(e, t) {
            const i = this.getTypeSpecificVariablesForValidationElemGeneration(e)
              , n = document.createElement("label")
              , o = document.createElement("input")
              , s = document.createElement("div")
              , r = document.createElement("div")
              , a = this.getValidationElementWithMessage(i.message)
              , c = document.createElement("div");
            return s.setAttribute("style", "clear:both"),
            r.setAttribute("style", "clear:both"),
            Object(X.a)(a, Y.onesignalValidationElementHidden),
            Object(X.a)(a, Y.onesignalValidationElement),
            a.id = i.validationElementId,
            n.title = t,
            n.innerText = t,
            n.htmlFor = i.inputElementId,
            o.type = i.domElementType,
            o.id = i.inputElementId,
            o.tabIndex = i.tabIndex,
            Object(X.a)(o, i.inputClass),
            Object(X.a)(c, Y.inputWithValidationElement),
            c.id = i.wrappingDivId,
            c.appendChild(n),
            c.appendChild(s),
            c.appendChild(o),
            c.appendChild(r),
            c.appendChild(a),
            c
        }
        getTypeSpecificVariablesForValidationElemGeneration(e) {
            if (e === T.Email)
                return {
                    message: "Please enter a valid email",
                    domElementType: "email",
                    validationElementId: J.onesignalEmailValidationElement,
                    inputElementId: J.onesignalEmailInput,
                    inputClass: Y.onesignalEmailInput,
                    wrappingDivId: J.emailInputWithValidationElement,
                    tabIndex: 1
                };
            if (e === T.Sms)
                return {
                    message: "Please enter a valid phone number",
                    domElementType: "tel",
                    validationElementId: J.onesignalSmsValidationElement,
                    inputElementId: J.onesignalSmsInput,
                    inputClass: Y.onesignalSmsInput,
                    wrappingDivId: J.smsInputWithValidationElement,
                    tabIndex: 2
                };
            throw new Error("invalid channel type for input validation")
        }
        initializePhoneInputLibrary() {
            const e = Object(X.l)(`#${J.onesignalSmsInput}`);
            e && window.intlTelInput ? this.itiOneSignal = window.intlTelInput(e, {
                autoPlaceholder: "off",
                separateDialCode: !0
            }) : E.a.error("OneSignal: there was a problem initializing International Telephone Input")
        }
        addSmsInputEventListeners() {
            const e = Object(X.l)(`#${J.onesignalSmsInput}`);
            e.addEventListener("keyup", t=>{
                var i, n;
                this.smsInputFieldIsValid = this.itiOneSignal.isValidNumber() || "" === (null === (i = e) || void 0 === i ? void 0 : i.value),
                "Enter" === t.key && (null === (n = document.getElementById(V.allowButton)) || void 0 === n || n.click()),
                this.updateValidationOnSmsInputChange()
            }
            ),
            e.addEventListener("blur", ()=>{
                var t;
                this.smsInputFieldIsValid = this.itiOneSignal.isValidNumber() || "" === (null === (t = e) || void 0 === t ? void 0 : t.value),
                this.updateValidationOnSmsInputChange()
            }
            )
        }
        addEmailInputEventListeners() {
            const e = Object(X.l)(`#${J.onesignalEmailInput}`);
            e.addEventListener("keyup", t=>{
                var i, n;
                const o = null === (i = e) || void 0 === i ? void 0 : i.value;
                this.emailInputFieldIsValid = ti.validateEmailInputWithReturnVal(o),
                "Enter" === t.key && (null === (n = document.getElementById(V.allowButton)) || void 0 === n || n.click()),
                this.updateValidationOnEmailInputChange()
            }
            )
        }
        updateValidationOnSmsInputChange() {
            const e = Object(X.l)(`#${J.smsInputWithValidationElement}`)
              , t = Object(X.l)(`#${J.onesignalSmsValidationElement}`);
            Object(X.v)(e, Y.onesignalErrorInput),
            Object(X.a)(t, Y.onesignalValidationElementHidden)
        }
        updateValidationOnEmailInputChange() {
            const e = Object(X.l)(`#${J.emailInputWithValidationElement}`)
              , t = Object(X.l)(`#${J.onesignalEmailValidationElement}`);
            Object(X.v)(e, Y.onesignalErrorInput),
            Object(X.a)(t, Y.onesignalValidationElementHidden)
        }
        loadPhoneLibraryScripts() {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (OneSignal._didLoadITILibrary)
                    return;
                const e = document.createElement("script")
                  , t = document.createElement("script")
                  , i = document.createElement("link");
                e.src = Qt.Main,
                t.src = Qt.Utils,
                i.href = Qt.Stylesheet,
                i.rel = "stylesheet",
                e.integrity = Zt.Main,
                t.integrity = Zt.Utils,
                i.integrity = Zt.Stylesheet,
                e.crossOrigin = "anonymous",
                t.crossOrigin = "anonymous",
                i.crossOrigin = "anonymous",
                document.head.appendChild(e),
                document.head.appendChild(t),
                document.head.appendChild(i);
                const n = new Promise(t=>{
                    e.onload = (()=>{
                        t()
                    }
                    )
                }
                )
                  , o = new Promise(e=>{
                    t.onload = (()=>{
                        e()
                    }
                    )
                }
                );
                yield Promise.all([n, o]),
                OneSignal._didLoadITILibrary = !0
            })
        }
        mount() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = ti.isUsingSmsInputField(this.promptOptions.type)
                  , t = ti.isUsingEmailInputField(this.promptOptions.type);
                e && (yield this.loadPhoneLibraryScripts());
                const i = this.generateHtml();
                Object(X.l)(`#${V.body}`).appendChild(i),
                e && (this.initializePhoneInputLibrary(),
                this.addSmsInputEventListeners()),
                t && this.addEmailInputEventListeners()
            })
        }
        isEmailInputFieldEmpty() {
            return "" === this.getValueFromEmailInput()
        }
        isSmsInputFieldEmpty() {
            return "" === this.getValueFromSmsInput()
        }
        getValueFromEmailInput() {
            var e;
            return (null === (e = Object(X.l)(`#${J.onesignalEmailInput}`)) || void 0 === e ? void 0 : e.value) || ""
        }
        getValueFromSmsInput() {
            return this.itiOneSignal.getNumber(intlTelInputUtils.numberFormat.E164) || ""
        }
        static showSmsInputError(e) {
            const t = document.querySelector(`#${J.onesignalSmsValidationElement}`)
              , i = document.querySelector(`#${J.smsInputWithValidationElement}`);
            t && i ? e ? (t.classList.remove(Y.onesignalValidationElementHidden),
            i.classList.add(Y.onesignalErrorInput)) : (t.classList.add(Y.onesignalValidationElementHidden),
            i.classList.remove(Y.onesignalErrorInput)) : E.a.error("OneSignal: couldn't find slidedown validation element")
        }
        static showEmailInputError(e) {
            const t = document.querySelector(`#${J.onesignalEmailValidationElement}`)
              , i = document.querySelector(`#${J.emailInputWithValidationElement}`);
            t && i ? e ? (t.classList.remove(Y.onesignalValidationElementHidden),
            i.classList.add(Y.onesignalErrorInput)) : (t.classList.add(Y.onesignalValidationElementHidden),
            i.classList.remove(Y.onesignalErrorInput)) : E.a.error("OneSignal: couldn't find slidedown validation element")
        }
        static resetInputErrorStates(e) {
            switch (e) {
            case T.Sms:
                ti.showSmsInputError(!1);
                break;
            case T.Email:
                ti.showEmailInputError(!1);
                break;
            case T.SmsAndEmail:
                ti.showSmsInputError(!1),
                ti.showEmailInputError(!1)
            }
        }
        static validateEmailInputWithReturnVal(e) {
            return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e || "") || "" === e
        }
        static isUsingSmsInputField(e) {
            return e === T.Sms || e === T.SmsAndEmail
        }
        static isUsingEmailInputField(e) {
            return e === T.Email || e === T.SmsAndEmail
        }
    }
    (ei = Xt || (Xt = {}))[ei.InvalidSms = 0] = "InvalidSms",
    ei[ei.InvalidEmail = 1] = "InvalidEmail",
    ei[ei.InvalidEmailAndSms = 2] = "InvalidEmailAndSms";
    class ii extends p.a {
        constructor(e) {
            let t;
            switch (e) {
            case Xt.InvalidEmail:
                t = "Invalid email";
                break;
            case Xt.InvalidSms:
                t = "Invalid sms";
                break;
            case Xt.InvalidEmailAndSms:
                t = "Invalid email & sms"
            }
            super(t),
            this.description = Xt[e],
            this.reason = e,
            Object.setPrototypeOf(this, ii.prototype)
        }
    }
    class ni {
        constructor(e) {
            var t, i, n;
            switch (this.savingButton = Kt.savingText,
            this.errorButton = Kt.errorButton,
            this.options = e,
            this.options.text.actionMessage = e.text.actionMessage.substring(0, 90),
            this.options.text.acceptButton = e.text.acceptButton.substring(0, 16),
            this.options.text.cancelButton = e.text.cancelButton.substring(0, 16),
            this.notificationIcons = null,
            this.channelCaptureContainer = null,
            this.isShowingFailureState = !1,
            e.type) {
            case T.Category:
                this.negativeUpdateButton = null === (t = this.options.text.negativeUpdateButton) || void 0 === t ? void 0 : t.substring(0, 16),
                this.positiveUpdateButton = null === (i = this.options.text.positiveUpdateButton) || void 0 === i ? void 0 : i.substring(0, 16),
                this.updateMessage = null === (n = this.options.text.updateMessage) || void 0 === n ? void 0 : n.substring(0, 90),
                this.tagCategories = e.categories,
                this.errorButton = w.a.getValueOrDefault(this.options.text.positiveUpdateButton, Kt.errorButton);
                break;
            case T.Sms:
            case T.Email:
            case T.SmsAndEmail:
                this.errorButton = w.a.getValueOrDefault(this.options.text.acceptButton, Kt.errorButton)
            }
        }
        create(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (null === this.notificationIcons) {
                    const t = yield fe.getNotificationIcons();
                    this.notificationIcons = t,
                    this.container.className.includes(W.container) && Object(X.w)(`#${V.container}`);
                    const i = e && this.tagCategories ? this.positiveUpdateButton : this.options.text.acceptButton
                      , n = e && this.tagCategories ? this.negativeUpdateButton : this.options.text.cancelButton
                      , o = function(e) {
                        const {icon: t, messageText: i, positiveButtonText: n, negativeButtonText: o} = e
                          , s = t === W.defaultIcon ? G : t
                          , r = t === W.defaultIcon ? W.defaultIcon : ""
                          , a = document.createElement("div")
                          , c = document.createElement("div")
                          , l = document.createElement("div")
                          , d = document.createElement("div")
                          , u = document.createElement("div")
                          , g = document.createElement("div")
                          , h = document.createElement("button")
                          , p = document.createElement("button")
                          , m = document.createElement("div")
                          , b = document.createElement("div")
                          , f = document.createElement("img");
                        return Object(X.a)(c, W.body),
                        Object(X.a)(d, W.icon),
                        Object(X.a)(l, W.message),
                        Object(X.a)(g, W.footer),
                        Object(X.a)(m, W.clearfix),
                        Object(X.a)(b, W.clearfix),
                        Object(X.a)(h, F.alignRight),
                        Object(X.a)(h, F.primary),
                        Object(X.a)(h, F.slidedownButton),
                        Object(X.a)(p, F.alignRight),
                        Object(X.a)(p, F.secondary),
                        Object(X.a)(p, F.slidedownButton),
                        a.id = V.normalSlidedown,
                        c.id = V.body,
                        u.id = V.loadingContainer,
                        h.id = V.allowButton,
                        p.id = V.cancelButton,
                        g.id = V.footer,
                        r && Object(X.a)(f, r),
                        f.setAttribute("alt", "notification icon"),
                        f.setAttribute("src", s || ""),
                        l.innerText = i || "",
                        h.innerText = n || "",
                        p.innerText = o || "",
                        d.appendChild(f),
                        c.appendChild(d),
                        c.appendChild(l),
                        c.appendChild(m),
                        c.appendChild(u),
                        g.appendChild(h),
                        g.appendChild(p),
                        g.appendChild(b),
                        a.appendChild(c),
                        a.appendChild(g),
                        a
                    }({
                        messageText: e && this.tagCategories ? this.updateMessage : this.options.text.actionMessage,
                        icon: this.options.icon || this.getPlatformNotificationIcon(),
                        positiveButtonText: i,
                        negativeButtonText: n
                    })
                      , s = document.createElement("div")
                      , r = document.createElement("div");
                    s.id = V.container,
                    Object(X.a)(s, W.container),
                    Object(X.a)(s, W.reset),
                    Object(X.l)("body").appendChild(s),
                    r.id = V.dialog,
                    Object(X.a)(r, W.dialog),
                    r.appendChild(o),
                    this.container.appendChild(r),
                    Object(X.a)(this.container, g.a.mobile ? W.slideUp : W.slideDown),
                    this.allowButton.addEventListener("click", this.onSlidedownAllowed.bind(this)),
                    this.cancelButton.addEventListener("click", this.onSlidedownCanceled.bind(this))
                }
            })
        }
        static triggerSlidedownEvent(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield S.a.trigger(e)
            })
        }
        onSlidedownAllowed(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield ni.triggerSlidedownEvent(ni.EVENTS.ALLOW_CLICK)
            })
        }
        onSlidedownCanceled(e) {
            ni.triggerSlidedownEvent(ni.EVENTS.CANCEL_CLICK),
            this.close(),
            ni.triggerSlidedownEvent(ni.EVENTS.CLOSED)
        }
        close() {
            Object(X.a)(this.container, W.closeSlidedown),
            Object(X.u)(this.dialog, "animationend", (e,t)=>{
                e.target !== this.dialog || "slideDownExit" !== e.animationName && "slideUpExit" !== e.animationName || (Object(X.w)(`#${V.container}`),
                t())
            }
            , !0)
        }
        setSaveState() {
            this.allowButton.disabled = !0,
            this.allowButton.textContent = null,
            this.allowButton.insertAdjacentElement("beforeend", this.getTextSpan(this.savingButton)),
            this.allowButton.insertAdjacentElement("beforeend", this.getIndicatorHolder()),
            Object(X.b)(this.buttonIndicatorHolder, "beforeend", Jt(q.whiteLoadingIndicator)),
            Object(X.a)(this.allowButton, "disabled"),
            Object(X.a)(this.allowButton, W.savingStateButton)
        }
        removeSaveState() {
            this.allowButton.textContent = this.positiveUpdateButton,
            Object(X.w)(`#${W.buttonIndicatorHolder}`),
            this.allowButton.disabled = !1,
            Object(X.v)(this.allowButton, "disabled"),
            Object(X.v)(this.allowButton, W.savingStateButton)
        }
        setFailureState() {
            this.allowButton.textContent = null,
            this.allowButton.insertAdjacentElement("beforeend", this.getTextSpan(this.errorButton)),
            this.options.type === T.Category && (this.allowButton.insertAdjacentElement("beforeend", this.getIndicatorHolder()),
            Object(X.b)(this.buttonIndicatorHolder, "beforeend", function(e="#FFFFFF") {
                return `<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.711 2.652a5.489 5.489 0 00-4.044 4.05 5.513 5.513 0 00.104 2.968.167.167 0 00.25.089l.893-.588a.667.667 0 011.02.692l-.61 2.937a.667.667 0 01-.786.52L.6 12.713a.667.667 0 01-.232-1.21l.933-.615a.166.166 0 00.063-.2 7.167 7.167 0 018.828-9.516.833.833 0 01-.507 1.587 5.489 5.489 0 00-2.974-.108zM15.75 3.542c.09.096.15.216.172.346a.667.667 0 01-.301.681l-.898.564a.166.166 0 00-.066.2 7.167 7.167 0 01-8.77 9.514.835.835 0 01-.154-1.544.831.831 0 01.646-.048 5.5 5.5 0 006.856-6.949.167.167 0 00-.176-.114.164.164 0 00-.071.026l-.962.604a.667.667 0 01-1.005-.713l.667-2.924a.667.667 0 01.8-.502l2.925.667c.129.03.246.096.336.192z" fill="${e}"/></svg>`
            }()),
            Object(X.a)(this.allowButton, "onesignal-error-state-button")),
            this.isShowingFailureState = !0
        }
        setFailureStateForInvalidChannelInput(e) {
            switch (e) {
            case Xt.InvalidSms:
                ti.showSmsInputError(!0);
                break;
            case Xt.InvalidEmail:
                ti.showEmailInputError(!0);
                break;
            case Xt.InvalidEmailAndSms:
                ti.showSmsInputError(!0),
                ti.showEmailInputError(!0)
            }
        }
        removeFailureState() {
            Object(X.w)("#onesignal-button-indicator-holder"),
            Object(X.v)(this.allowButton, "onesignal-error-state-button"),
            k.isSlidedownPushDependent(this.options.type) || ti.resetInputErrorStates(this.options.type),
            this.isShowingFailureState = !1
        }
        getPlatformNotificationIcon() {
            return Object(X.m)(this.notificationIcons)
        }
        getIndicatorHolder() {
            const e = document.createElement("div");
            return e.id = V.buttonIndicatorHolder,
            Object(X.a)(e, W.buttonIndicatorHolder),
            e
        }
        getTextSpan(e) {
            const t = document.createElement("span");
            return t.textContent = e,
            t
        }
        get container() {
            return Object(X.l)(`#${V.container}`)
        }
        get dialog() {
            return Object(X.l)(`#${V.dialog}`)
        }
        get allowButton() {
            return Object(X.l)(`#${V.allowButton}`)
        }
        get cancelButton() {
            return Object(X.l)(`#${V.cancelButton}`)
        }
        get buttonIndicatorHolder() {
            return Object(X.l)(`#${V.buttonIndicatorHolder}`)
        }
        get slidedownFooter() {
            return Object(X.l)(`#${V.footer}`)
        }
        static get EVENTS() {
            return {
                ALLOW_CLICK: "popoverAllowClick",
                CANCEL_CLICK: "popoverCancelClick",
                SHOWN: "popoverShown",
                CLOSED: "popoverClosed",
                QUEUED: "popoverQueued"
            }
        }
    }
    var oi, si, ri, ai, ci, li = i(25);
    class di {
        static getEnvironmentInfo() {
            return {
                browserType: this.getBrowser(),
                browserVersion: this.getBrowserVersion(),
                isHttps: this.isHttps(),
                isUsingSubscriptionWorkaround: this.isUsingSubscriptionWorkaround(),
                isBrowserAndSupportsServiceWorkers: this.supportsServiceWorkers(),
                requiresUserInteraction: this.requiresUserInteraction(),
                osVersion: this.getOsVersion(),
                canTalkToServiceWorker: this.canTalkToServiceWorker()
            }
        }
        static getBrowser() {
            return g.a.chrome ? pe.Chrome : g.a.msedge ? pe.Edge : g.a.opera ? pe.Opera : g.a.firefox ? pe.Firefox : this.isMacOSSafari() ? pe.Safari : pe.Other
        }
        static isMacOSSafari() {
            return void 0 !== window.safari || Object(li.a)()
        }
        static getBrowserVersion() {
            return w.b.parseVersionString(g.a.version)
        }
        static isHttps() {
            return !!window && (window.location && "https:" === window.location.protocol)
        }
        static isUsingSubscriptionWorkaround() {
            return N.a.isUsingSubscriptionWorkaround()
        }
        static supportsServiceWorkers() {
            return window.navigator && "serviceWorker"in window.navigator
        }
        static requiresUserInteraction() {
            return "firefox" === this.getBrowser() && this.getBrowserVersion() >= 72 || "safari" === this.getBrowser() && this.getBrowserVersion() >= 12.1
        }
        static getOsVersion() {
            return g.a.osversion
        }
        static canTalkToServiceWorker() {
            return !!window.isSecureContext
        }
    }
    function ui(e) {
        return new Promise(t=>setTimeout(t, e))
    }
    class gi {
        constructor(e) {
            this.isNativePromptShowing = !1,
            this.context = e,
            this.eventHooksInstalled = !1
        }
        shouldForceSlidedownOverNative() {
            const {environmentInfo: e} = OneSignal
              , {browserType: t, browserVersion: i, requiresUserInteraction: n} = e;
            return "chrome" === t && Number(i) >= 63 && (g.a.tablet || g.a.mobile) || n
        }
        spawnAutoPrompts() {
            return Object(d.a)(this, void 0, void 0, function*() {
                var e, t;
                const i = OneSignal.config.userConfig.promptOptions
                  , n = this.shouldForceSlidedownOverNative()
                  , o = this.getDelayedPromptOptions(i, T.Native)
                  , s = this.isPageViewConditionMet(o)
                  , r = o.enabled && s
                  , a = n && r;
                if (r && !a)
                    return void this.internalShowDelayedPrompt(T.Native, o.timeDelay || 0);
                const c = !!k.getFirstSlidedownPromptOptionsWithType(null === (e = i.slidedown) || void 0 === e ? void 0 : e.prompts, T.Push);
                a && !c && this.internalShowDelayedPrompt(T.Push, o.timeDelay || 0);
                const l = null === (t = i.slidedown) || void 0 === t ? void 0 : t.prompts;
                if (l && (null === l || void 0 === l ? void 0 : l.length) > 0)
                    for (let e = 0; e < l.length; e++) {
                        const t = l[e]
                          , n = this.getDelayedPromptOptions(i, t.type)
                          , o = this.isPageViewConditionMet(n)
                          , s = {
                            slidedownPromptOptions: t
                        };
                        n.enabled && o && this.internalShowDelayedPrompt(t.type, n.timeDelay || 0, s)
                    }
            })
        }
        internalShowDelayedPrompt(e, t, i) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (N.b.logMethodCall("internalShowDelayedPrompt"),
                "number" != typeof t)
                    return void E.a.error("internalShowDelayedPrompt: timeDelay not a number");
                const {requiresUserInteraction: n} = di.getEnvironmentInfo();
                switch (n && e === T.Native && (e = T.Push),
                t > 0 && (yield ui(1e3 * t)),
                e) {
                case T.Native:
                    yield this.internalShowNativePrompt();
                    break;
                case T.Push:
                    yield this.internalShowSlidedownPrompt(i);
                    break;
                case T.Category:
                    yield this.internalShowCategorySlidedown(i);
                    break;
                case T.Sms:
                    yield this.internalShowSmsSlidedown(i);
                    break;
                case T.Email:
                    yield this.internalShowEmailSlidedown(i);
                    break;
                case T.SmsAndEmail:
                    yield this.internalShowSmsAndEmailSlidedown(i);
                    break;
                default:
                    E.a.error("Invalid Delayed Prompt type")
                }
            })
        }
        internalShowNativePrompt() {
            return Object(d.a)(this, void 0, void 0, function*() {
                N.b.logMethodCall("internalShowNativePrompt"),
                this.isNativePromptShowing ? E.a.debug("Already showing autoprompt. Abort showing a native prompt.") : (this.isNativePromptShowing = !0,
                fe.markHttpSlidedownShown(),
                yield nt.registerForPushNotifications(),
                this.isNativePromptShowing = !1,
                Fe.markPromptDismissedWithType(Te.Push))
            })
        }
        internalShowSlidedownPrompt(e={
            force: !1
        }) {
            return Object(d.a)(this, void 0, void 0, function*() {
                N.b.logMethodCall("internalShowSlidedownPrompt"),
                e.slidedownPromptOptions || (e.slidedownPromptOptions = Yt),
                fe.markHttpSlidedownShown(),
                0 === (yield this.context.dynamicResourceLoader.loadSdkStylesheet()) ? (this.eventHooksInstalled || this.installEventHooksForSlidedown(),
                yield this.context.slidedownManager.createSlidedown(e)) : E.a.debug("Not showing slidedown permission message because styles failed to load.")
            })
        }
        internalShowCategorySlidedown(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                N.b.logMethodCall("internalShowCategorySlidedown"),
                yield this.internalShowParticularSlidedown(T.Category, e)
            })
        }
        internalShowSmsSlidedown(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                N.b.logMethodCall("internalShowSmsSlidedown"),
                yield this.internalShowParticularSlidedown(T.Sms, e)
            })
        }
        internalShowEmailSlidedown(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                N.b.logMethodCall("internalShowEmailSlidedown"),
                yield this.internalShowParticularSlidedown(T.Email, e)
            })
        }
        internalShowSmsAndEmailSlidedown(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                N.b.logMethodCall("internalShowSmsAndEmailSlidedown"),
                yield this.internalShowParticularSlidedown(T.SmsAndEmail, e)
            })
        }
        internalShowParticularSlidedown(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                var i, n;
                const o = null === (n = null === (i = this.context.appConfig.userConfig.promptOptions) || void 0 === i ? void 0 : i.slidedown) || void 0 === n ? void 0 : n.prompts
                  , s = (null === t || void 0 === t ? void 0 : t.slidedownPromptOptions) || k.getFirstSlidedownPromptOptionsWithType(o, e);
                if (!s) {
                    if (e !== T.Push)
                        return void E.a.error(`OneSignal: slidedown of type '${e}' couldn't be shown. Check your configuration` + " on the OneSignal dashboard or your custom code initialization.");
                    E.a.warn("The OneSignal 'push' slidedown will be shown with default text settings. To customize, see the OneSignal documentation.")
                }
                yield this.internalShowSlidedownPrompt(Object.assign(Object.assign({}, t), {
                    slidedownPromptOptions: s
                }))
            })
        }
        installEventHooksForSlidedown() {
            this.eventHooksInstalled = !0,
            OneSignal.emitter.on(ni.EVENTS.SHOWN, ()=>{
                this.context.slidedownManager.setIsSlidedownShowing(!0)
            }
            ),
            OneSignal.emitter.on(ni.EVENTS.CLOSED, ()=>{
                this.context.slidedownManager.setIsSlidedownShowing(!1),
                this.context.slidedownManager.showQueued()
            }
            ),
            OneSignal.emitter.on(ni.EVENTS.ALLOW_CLICK, ()=>Object(d.a)(this, void 0, void 0, function*() {
                yield this.context.slidedownManager.handleAllowClick(),
                S.a.trigger(OneSignal.EVENTS.TEST_FINISHED_ALLOW_CLICK_HANDLING)
            })),
            OneSignal.emitter.on(ni.EVENTS.CANCEL_CLICK, ()=>{
                const {type: e} = OneSignal.slidedown.options;
                switch (e) {
                case T.Push:
                case T.Category:
                    E.a.debug("Setting flag to not show the slidedown to the user again."),
                    Fe.markPromptDismissedWithType(Te.Push);
                    break;
                default:
                    E.a.debug("Setting flag to not show the slidedown to the user again."),
                    Fe.markPromptDismissedWithType(Te.NonPush)
                }
            }
            )
        }
        isPageViewConditionMet(e) {
            if (!e || void 0 === e.pageViews)
                return !1;
            if (!e.autoPrompt || !e.enabled)
                return !1;
            return this.context.pageViewManager.getLocalPageViewCount() >= e.pageViews
        }
        getDelayedPromptOptions(e, t) {
            var i, n, o, s;
            const r = {
                enabled: !1,
                autoPrompt: !1,
                timeDelay: qt.timeDelay,
                pageViews: qt.pageViews
            };
            if (!e || !e.native || !e.slidedown)
                return r;
            switch (t) {
            case T.Native:
                const a = e.native;
                return {
                    enabled: null === a || void 0 === a ? void 0 : a.enabled,
                    autoPrompt: null === a || void 0 === a ? void 0 : a.autoPrompt,
                    timeDelay: null === a || void 0 === a ? void 0 : a.timeDelay,
                    pageViews: null === a || void 0 === a ? void 0 : a.pageViews
                };
            case T.Push:
            case T.Category:
            case T.Email:
            case T.Sms:
            case T.SmsAndEmail:
                const {userConfig: c} = this.context.appConfig
                  , l = k.getFirstSlidedownPromptOptionsWithType((null === (n = null === (i = c.promptOptions) || void 0 === i ? void 0 : i.slidedown) || void 0 === n ? void 0 : n.prompts) || [], t);
                return {
                    enabled: !!l,
                    autoPrompt: !!(null === l || void 0 === l ? void 0 : l.autoPrompt),
                    timeDelay: null === (o = null === l || void 0 === l ? void 0 : l.delay) || void 0 === o ? void 0 : o.timeDelay,
                    pageViews: null === (s = null === l || void 0 === l ? void 0 : l.delay) || void 0 === s ? void 0 : s.pageViews
                };
            default:
                return r
            }
        }
    }
    class hi {
        constructor(e) {
            this.onSessionSent = !1,
            this.context = e
        }
        notifySWToUpsertSession(e, t, i) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const n = N.a.isHttps()
                  , o = {
                    deviceId: e,
                    deviceRecord: t.serialize(),
                    sessionThreshold: this.context.appConfig.sessionThreshold || 0,
                    enableSessionDuration: !!this.context.appConfig.enableSessionDuration,
                    sessionOrigin: i,
                    isHttps: n,
                    isSafari: N.a.isSafari(),
                    outcomesConfig: this.context.appConfig.userConfig.outcomes
                };
                this.context.environmentInfo.isBrowserAndSupportsServiceWorkers && !this.context.environmentInfo.isUsingSubscriptionWorkaround ? (E.a.debug("Notify SW to upsert session"),
                yield this.context.workerMessenger.unicast(Se.SessionUpsert, o)) : this.context.environmentInfo.canTalkToServiceWorker && this.context.environmentInfo.isUsingSubscriptionWorkaround ? (E.a.debug("Notify iframe to notify SW to upsert session"),
                yield OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.SESSION_UPSERT, o)) : E.a.debug("Notify upsert: do nothing")
            })
        }
        notifySWToDeactivateSession(e, t, i) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const n = N.a.isHttps()
                  , o = {
                    deviceId: e,
                    deviceRecord: t ? t.serialize() : void 0,
                    sessionThreshold: this.context.appConfig.sessionThreshold,
                    enableSessionDuration: this.context.appConfig.enableSessionDuration,
                    sessionOrigin: i,
                    isHttps: n,
                    isSafari: N.a.isSafari(),
                    outcomesConfig: this.context.appConfig.userConfig.outcomes
                };
                this.context.environmentInfo.isBrowserAndSupportsServiceWorkers && !this.context.environmentInfo.isUsingSubscriptionWorkaround ? (E.a.debug("Notify SW to deactivate session"),
                yield this.context.workerMessenger.unicast(Se.SessionDeactivate, o)) : this.context.environmentInfo.canTalkToServiceWorker && this.context.environmentInfo.isUsingSubscriptionWorkaround ? (E.a.debug("Notify SW to deactivate session"),
                yield OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.SESSION_DEACTIVATE, o)) : E.a.debug("Notify deactivate: do nothing")
            })
        }
        handleVisibilityChange() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = document.visibilityState
                  , [t,i] = yield Promise.all([fe.getDeviceId(), fe.createDeviceRecord(this.context.appConfig.appId, !0)]);
                if ("visible" === e)
                    return this.setupOnFocusAndOnBlurForSession(),
                    E.a.debug("handleVisibilityChange", "visible", `hasFocus: ${document.hasFocus()}`),
                    void (document.hasFocus() && (yield this.notifySWToUpsertSession(t, i, me.b.VisibilityVisible)));
                if ("hidden" !== e)
                    E.a.warn("Unhandled visibility state happened", e);
                else {
                    E.a.debug("handleVisibilityChange", "hidden"),
                    OneSignal.cache.focusHandler && OneSignal.cache.isFocusEventSetup && (window.removeEventListener("focus", OneSignal.cache.focusHandler, !0),
                    OneSignal.cache.isFocusEventSetup = !1),
                    OneSignal.cache.blurHandler && OneSignal.cache.isBlurEventSetup && (window.removeEventListener("blur", OneSignal.cache.blurHandler, !0),
                    OneSignal.cache.isBlurEventSetup = !1);
                    const [e,t] = yield Promise.all([fe.getDeviceId(), fe.createDeviceRecord(this.context.appConfig.appId)]);
                    yield this.notifySWToDeactivateSession(e, t, me.b.VisibilityHidden)
                }
            })
        }
        handleOnBeforeUnload() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = N.a.isHttps()
                  , t = {
                    sessionThreshold: this.context.appConfig.sessionThreshold,
                    enableSessionDuration: this.context.appConfig.enableSessionDuration,
                    sessionOrigin: me.b.BeforeUnload,
                    isHttps: e,
                    isSafari: N.a.isSafari(),
                    outcomesConfig: this.context.appConfig.userConfig.outcomes
                };
                e ? (E.a.debug("Notify SW to deactivate session (beforeunload)"),
                this.context.workerMessenger.directPostMessageToSW(Se.SessionDeactivate, t)) : (E.a.debug("Notify iframe to notify SW to deactivate session (beforeunload)"),
                yield OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.SESSION_DEACTIVATE, t))
            })
        }
        handleOnFocus(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (E.a.debug("handleOnFocus", e),
                e.target !== window)
                    return;
                const [t,i] = yield Promise.all([fe.getDeviceId(), fe.createDeviceRecord(this.context.appConfig.appId, !0)]);
                yield this.notifySWToUpsertSession(t, i, me.b.Focus)
            })
        }
        handleOnBlur(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (E.a.debug("handleOnBlur", e),
                e.target !== window)
                    return;
                const [t,i] = yield Promise.all([fe.getDeviceId(), fe.createDeviceRecord(this.context.appConfig.appId)]);
                yield this.notifySWToDeactivateSession(t, i, me.b.Blur)
            })
        }
        upsertSession(e, t, i) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const n = this.notifySWToUpsertSession(e, t, i);
                this.context.environmentInfo.isBrowserAndSupportsServiceWorkers || this.context.environmentInfo.isUsingSubscriptionWorkaround ? this.context.environmentInfo.canTalkToServiceWorker ? this.setupSessionEventListeners() : (this.onSessionSent = i === me.b.PlayerCreate,
                OneSignal.emitter.emit(OneSignal.EVENTS.SESSION_STARTED)) : this.context.environmentInfo.isBrowserAndSupportsServiceWorkers || this.context.environmentInfo.isUsingSubscriptionWorkaround || (this.onSessionSent = i === me.b.PlayerCreate,
                OneSignal.emitter.emit(OneSignal.EVENTS.SESSION_STARTED)),
                yield n
            })
        }
        setupSessionEventListeners() {
            this.context.environmentInfo.isBrowserAndSupportsServiceWorkers || this.context.environmentInfo.isUsingSubscriptionWorkaround ? this.context.environmentInfo.canTalkToServiceWorker ? (this.setupOnFocusAndOnBlurForSession(),
            OneSignal.cache.isVisibilityChangeEventSetup || (document.addEventListener("visibilitychange", this.handleVisibilityChange.bind(this), !0),
            OneSignal.cache.isVisibilityChangeEventSetup = !0),
            OneSignal.cache.isBeforeUnloadEventSetup || (window.addEventListener("beforeunload", e=>{
                this.handleOnBeforeUnload(),
                delete e.returnValue
            }
            , !0),
            OneSignal.cache.isBeforeUnloadEventSetup = !0)) : E.a.debug("Not setting session event listeners. Can't talk to ServiceWorker due being hosted on an HTTP page.") : E.a.debug("Not setting session event listeners. No service worker possible.")
        }
        setupOnFocusAndOnBlurForSession() {
            E.a.debug("setupOnFocusAndOnBlurForSession"),
            OneSignal.cache.focusHandler || (OneSignal.cache.focusHandler = this.handleOnFocus.bind(this)),
            OneSignal.cache.isFocusEventSetup || (window.addEventListener("focus", OneSignal.cache.focusHandler, !0),
            OneSignal.cache.isFocusEventSetup = !0),
            OneSignal.cache.blurHandler || (OneSignal.cache.blurHandler = this.handleOnBlur.bind(this)),
            OneSignal.cache.isBlurEventSetup || (window.addEventListener("blur", OneSignal.cache.blurHandler, !0),
            OneSignal.cache.isBlurEventSetup = !0)
        }
        static setupSessionEventListenersForHttp() {
            OneSignal.context && OneSignal.context.sessionManager ? OneSignal.context.sessionManager.setupSessionEventListeners() : E.a.error("OneSignal.context not available for http to setup session event listeners.")
        }
        sendOnSessionUpdateFromPage(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (this.onSessionSent)
                    return;
                if (!this.context.pageViewManager.isFirstPageView())
                    return;
                if (!(yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal()))
                    return void E.a.debug("Not sending the on session because user is not registered with OneSignal (no device id)");
                const t = yield fe.getDeviceId();
                if (e || (e = yield fe.createDeviceRecord(this.context.appConfig.appId)),
                e.subscriptionState === ie.Subscribed || !0 === OneSignal.config.enableOnSession) {
                    try {
                        const i = yield C.updateUserSession(t, e);
                        if (this.onSessionSent = !0,
                        i !== t) {
                            const e = yield M.a.getSubscription();
                            e.deviceId = i,
                            yield M.a.setSubscription(e)
                        }
                    } catch (e) {
                        E.a.error(`Failed to update user session. Error "${e.message}" ${e.stack}`)
                    }
                    yield this.context.secondaryChannelManager.synchronizer.onSession()
                }
            })
        }
    }
    class pi {
        static convertTagsApiToBooleans(e) {
            const t = {};
            return Object.keys(e).forEach(i=>{
                t[i] = "1" === e[i]
            }
            ),
            t
        }
        static convertTagsBooleansToApi(e) {
            const t = {};
            return Object.keys(e).forEach(i=>{
                t[i] = !0 === e[i] ? "1" : "0"
            }
            ),
            t
        }
        static getObjectDifference(e, t) {
            const i = {};
            return Object.keys(e).forEach(n=>{
                t[n] !== e[n] && (i[n] = e[n])
            }
            ),
            i
        }
        static markAllTagsAsSpecified(e, t) {
            e.forEach(e=>{
                e.checked = t
            }
            )
        }
        static isTagObjectEmpty(e) {
            return 0 === Object.keys(e).length
        }
        static getCheckedTagCategories(e, t) {
            if (!t)
                return e;
            if (pi.isTagObjectEmpty(t)) {
                const t = Object(X.h)(e);
                return pi.markAllTagsAsSpecified(t, !0),
                t
            }
            return Object(X.h)(e).map(e=>{
                const i = t[e.tag];
                return e.checked = pi.getCheckedStatusForTagValue(i),
                e
            }
            )
        }
        static getCheckedStatusForTagValue(e) {
            return void 0 === e || e
        }
        static limitCategoriesToMaxCount(e, t) {
            let i = Object(X.h)(e);
            return i = e.slice(0, t)
        }
    }
    class mi {
        constructor(e) {
            this.tagsFromTaggingContainer = {},
            this.remoteTags = {},
            this.context = e
        }
        sendTags() {
            return Object(d.a)(this, void 0, void 0, function*() {
                E.a.info("Category Slidedown Local Tags:", this.tagsFromTaggingContainer);
                const e = pi.convertTagsBooleansToApi(this.tagsFromTaggingContainer)
                  , t = pi.getObjectDifference(e, this.remoteTags);
                return pi.isTagObjectEmpty(t) ? (E.a.warn("OneSignal: no change detected in Category preferences. Skipping tag update."),
                t) : yield OneSignal.sendTags(t)
            })
        }
        storeTagValuesToUpdate(e) {
            this.tagsFromTaggingContainer = e
        }
        storeRemotePlayerTags(e) {
            this.context.tagManager.remoteTags = e
        }
    }
    class bi {
        mount(e, t) {
            const i = this.generateHtml(e, t);
            Object(X.l)(`#${V.body}`).appendChild(i),
            this.taggingContainer && this.taggingContainer.addEventListener("change", this.toggleCheckedTag);
            const n = Object(X.l)(`#${V.allowButton}`);
            n.disabled = !1,
            Object(X.v)(n, "disabled"),
            Object(X.w)(`#${V.loadingContainer}`)
        }
        load() {
            const e = Object(X.l)(`#${V.loadingContainer}`)
              , t = Object(X.l)(`#${V.allowButton}`)
              , i = document.createElement("div");
            Object(X.a)(e, `${W.loadingContainer}`),
            Object(X.a)(i, H.loadingMessage),
            Object(X.a)(t, "disabled"),
            Object(X.b)(e, "beforeend", Jt(q.greyLoadingIndicator)),
            i.innerText = K.fetchingPreferences,
            e.appendChild(i),
            t.disabled = !0
        }
        generateHtml(e, t) {
            const i = pi.getCheckedTagCategories(e, t)
              , n = i.filter(e=>i.indexOf(e) % 2 == 0)
              , o = i.filter(e=>i.indexOf(e) % 2)
              , s = document.createElement("div")
              , r = document.createElement("div")
              , a = document.createElement("div");
            return Object(X.a)(s, H.taggingContainerCol),
            Object(X.a)(r, H.taggingContainerCol),
            Object(X.a)(a, H.taggingContainer),
            a.id = $.taggingContainer,
            n.forEach(e=>{
                s.appendChild(this.getCategoryLabelElement(e))
            }
            ),
            o.forEach(e=>{
                r.appendChild(this.getCategoryLabelElement(e))
            }
            ),
            a.appendChild(s),
            a.appendChild(r),
            a
        }
        getCategoryLabelElement(e) {
            const {label: t} = e
              , i = document.createElement("label")
              , n = document.createElement("span")
              , o = document.createElement("input")
              , s = document.createElement("span")
              , r = document.createElement("div")
              , a = document.createElement("div");
            return Object(X.a)(i, H.categoryLabel),
            Object(X.a)(n, H.categoryLabelText),
            Object(X.a)(o, H.categoryLabelInput),
            Object(X.a)(s, H.checkmark),
            i.title = t,
            n.innerText = t,
            o.type = "checkbox",
            o.value = e.tag,
            o.checked = !!e.checked,
            i.appendChild(n),
            i.appendChild(o),
            i.appendChild(s),
            r.setAttribute("style", "clear:both"),
            a.appendChild(i),
            a.appendChild(r),
            a
        }
        get taggingContainer() {
            const e = `#${V.body} > div.${H.taggingContainer}`;
            return Object(X.l)(e)
        }
        toggleCheckedTag(e) {
            const t = e.target;
            if (t && "checkbox" === t.getAttribute("type")) {
                const e = t.checked;
                t.setAttribute("checked", e.toString())
            }
        }
        static getValuesFromTaggingContainer() {
            const e = `#${V.body} > div.${H.taggingContainer}` + "> div > div > label > input[type=checkbox]"
              , t = {};
            return document.querySelectorAll(e).forEach(e=>{
                t[e.value] = e.checked
            }
            ),
            t
        }
    }
    class fi extends p.a {
        constructor(e) {
            super(`The permission message of type ${e || "unknown"} was previously dismissed.`),
            Object.setPrototypeOf(this, fi.prototype)
        }
    }
    class Si {
        constructor(e) {
            this.message = e
        }
        show() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = document.createElement("div")
                  , t = document.createElement("p");
                t.innerText = this.message,
                e.appendChild(t);
                const i = document.createElement("div")
                  , n = document.createElement("div");
                i.id = V.container,
                e.id = L.toastText,
                Object(X.a)(e, B.toastText),
                Object(X.a)(i, W.container),
                Object(X.a)(i, W.reset),
                Object(X.l)("body").appendChild(i),
                n.id = V.dialog,
                Object(X.a)(n, W.dialog),
                n.appendChild(e),
                this.container.appendChild(n),
                Object(X.a)(this.container, g.a.mobile ? W.slideUp : W.slideDown),
                Si.triggerSlidedownEvent(Si.EVENTS.SHOWN)
            })
        }
        static triggerSlidedownEvent(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield S.a.trigger(e)
            })
        }
        close() {
            Object(X.a)(this.container, W.closeSlidedown),
            Object(X.u)(this.dialog, "animationend", (e,t)=>{
                e.target !== this.dialog || "slideDownExit" !== e.animationName && "slideUpExit" !== e.animationName || (Object(X.w)(`#${V.container}`),
                t())
            }
            , !0)
        }
        get container() {
            return Object(X.l)(`#${V.container}`)
        }
        get dialog() {
            return Object(X.l)(`#${V.dialog}`)
        }
        static get EVENTS() {
            return {
                SHOWN: "toastShown",
                CLOSED: "toastClosed"
            }
        }
    }
    class vi extends p.a {
        constructor() {
            super("This operation can only be performed when the user is not subscribed."),
            Object.setPrototypeOf(this, vi.prototype)
        }
    }
    class Oi extends p.a {
        constructor(e) {
            super(`This operation can only be performed when the channel '${e}' does not yet exist.`),
            Object.setPrototypeOf(this, Oi.prototype)
        }
    }
    class yi {
        constructor(e, t) {
            this.secondaryChannelManager = t,
            this.context = e,
            this.slidedownQueue = [],
            this.isSlidedownShowing = !1
        }
        checkIfSlidedownShouldBeShown(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                var t;
                const i = (yield OneSignal.privateGetNotificationPermission()) === A.Denied
                  , n = yield OneSignal.privateIsPushNotificationsEnabled()
                  , o = yield OneSignal.privateGetSubscription();
                let s;
                const a = null === (t = e.slidedownPromptOptions) || void 0 === t ? void 0 : t.type;
                let c = !1;
                if (a && (c = k.isSlidedownPushDependent(a)),
                c) {
                    if (n)
                        return !!e.isInUpdateMode || (E.a.info(new vi),
                        !1);
                    if (s = Fe.wasPromptOfTypeDismissed(Te.Push),
                    !o)
                        throw new b(r.OptedOut);
                    if (i)
                        return E.a.info(new ge(le.Blocked)),
                        !1
                } else {
                    if (!e.force) {
                        const e = !!(yield M.a.getSMSProfile()).subscriptionId
                          , t = !!(yield M.a.getEmailProfile()).subscriptionId
                          , i = e && t;
                        if (e && a === T.Sms)
                            return E.a.info(new Oi(T.Sms)),
                            !1;
                        if (t && a === T.Email)
                            return E.a.info(new Oi(T.Email)),
                            !1;
                        if (i && a === T.SmsAndEmail)
                            return E.a.info(new Oi(T.SmsAndEmail)),
                            !1
                    }
                    s = Fe.wasPromptOfTypeDismissed(Te.NonPush)
                }
                return !(s && !e.force && !e.isInUpdateMode) || (E.a.info(new fi(a)),
                !1)
            })
        }
        registerForPush() {
            const e = {
                autoAccept: !OneSignal.environmentInfo.requiresUserInteraction,
                slidedown: !0
            };
            nt.registerForPushNotifications(e)
        }
        handleAllowForCategoryType() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = bi.getValuesFromTaggingContainer();
                this.context.tagManager.storeTagValuesToUpdate(e),
                U.getIsPushNotificationsEnabled() ? (OneSignal.slidedown.setSaveState(),
                yield this.context.tagManager.sendTags(!0)) : this.registerForPush()
            })
        }
        handleAllowForEmailType() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = OneSignal.slidedown.channelCaptureContainer.emailInputFieldIsValid
                  , t = OneSignal.slidedown.channelCaptureContainer.isEmailInputFieldEmpty();
                if (!e || t)
                    throw new ii(Xt.InvalidEmail);
                const i = OneSignal.slidedown.channelCaptureContainer.getValueFromEmailInput();
                this.updateEmail(i)
            })
        }
        handleAllowForSmsType() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = OneSignal.slidedown.channelCaptureContainer.smsInputFieldIsValid
                  , t = OneSignal.slidedown.channelCaptureContainer.isSmsInputFieldEmpty();
                if (!e || t)
                    throw new ii(Xt.InvalidSms);
                const i = OneSignal.slidedown.channelCaptureContainer.getValueFromSmsInput();
                this.updateSMS(i)
            })
        }
        handleAllowForSmsAndEmailType() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = OneSignal.slidedown.channelCaptureContainer.smsInputFieldIsValid
                  , t = OneSignal.slidedown.channelCaptureContainer.emailInputFieldIsValid
                  , i = OneSignal.slidedown.channelCaptureContainer.isEmailInputFieldEmpty()
                  , n = OneSignal.slidedown.channelCaptureContainer.isSmsInputFieldEmpty();
                if (!e && !t || i && n)
                    throw new ii(Xt.InvalidEmailAndSms);
                const o = OneSignal.slidedown.channelCaptureContainer.getValueFromEmailInput()
                  , s = OneSignal.slidedown.channelCaptureContainer.getValueFromSmsInput();
                if (!t)
                    throw new ii(Xt.InvalidEmail);
                if (i || this.updateEmail(o),
                !e)
                    throw new ii(Xt.InvalidSms);
                n || this.updateSMS(s)
            })
        }
        updateEmail(e) {
            this.secondaryChannelManager.email.setIdentifier(e)
        }
        updateSMS(e) {
            this.secondaryChannelManager.sms.setIdentifier(e)
        }
        showConfirmationToast() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const {confirmMessage: e} = OneSignal.slidedown.options.text;
                yield ui(1e3);
                const t = new Si(e);
                yield t.show(),
                yield ui(5e3),
                t.close(),
                Si.triggerSlidedownEvent(Si.EVENTS.CLOSED)
            })
        }
        mountAuxiliaryContainers(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                var t;
                switch (null === (t = e.slidedownPromptOptions) || void 0 === t ? void 0 : t.type) {
                case T.Category:
                    this.mountTaggingContainer(e);
                    break;
                case T.Email:
                case T.Sms:
                case T.SmsAndEmail:
                    yield this.mountChannelCaptureContainer(e)
                }
            })
        }
        mountTaggingContainer(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                var t;
                N.a.logMethodCall("mountTaggingContainer");
                try {
                    let i = {};
                    const n = new bi
                      , o = null === (t = e.slidedownPromptOptions) || void 0 === t ? void 0 : t.categories;
                    if (!o)
                        throw new Error("Categories not defined");
                    if (e.isInUpdateMode) {
                        n.load();
                        const e = yield OneSignal.getTags();
                        this.context.tagManager.storeRemotePlayerTags(e),
                        i = pi.convertTagsApiToBooleans(e)
                    } else
                        pi.markAllTagsAsSpecified(o, !0);
                    n.mount(o, i)
                } catch (e) {
                    E.a.error("OneSignal: Attempted to create tagging container with error", e)
                }
            })
        }
        mountChannelCaptureContainer(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                N.a.logMethodCall("mountChannelCaptureContainer");
                try {
                    if (e.slidedownPromptOptions) {
                        const t = new ti(e.slidedownPromptOptions);
                        t.mount(),
                        OneSignal.slidedown.channelCaptureContainer = t
                    }
                } catch (e) {
                    E.a.error("OneSignal: Attempted to create channel capture container with error", e)
                }
            })
        }
        handleAllowClick() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const {slidedown: e} = OneSignal
                  , t = e.options.type;
                e.isShowingFailureState && e.removeFailureState();
                try {
                    switch (t) {
                    case T.Push:
                        this.registerForPush();
                        break;
                    case T.Category:
                        yield this.handleAllowForCategoryType();
                        break;
                    case T.Email:
                        yield this.handleAllowForEmailType();
                        break;
                    case T.Sms:
                        yield this.handleAllowForSmsType();
                        break;
                    case T.SmsAndEmail:
                        yield this.handleAllowForSmsAndEmailType()
                    }
                } catch (t) {
                    return E.a.warn("OneSignal Slidedown failed to update:", t),
                    e.removeSaveState(),
                    e.setFailureState(),
                    void (void 0 !== t.reason && e.setFailureStateForInvalidChannelInput(t.reason))
                }
                switch (e && (e.close(),
                k.isSlidedownPushDependent(t) || (yield this.showConfirmationToast()),
                yield ui(1e3),
                ni.triggerSlidedownEvent(ni.EVENTS.CLOSED)),
                t) {
                case T.Push:
                case T.Category:
                    E.a.debug("Setting flag to not show the slidedown to the user again."),
                    Fe.markPromptDismissedWithType(Te.Push);
                    break;
                default:
                    E.a.debug("Setting flag to not show the slidedown to the user again."),
                    Fe.markPromptDismissedWithType(Te.NonPush)
                }
            })
        }
        setIsSlidedownShowing(e) {
            this.isSlidedownShowing = e
        }
        showQueued() {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (this.slidedownQueue.length > 0) {
                    const e = this.dequeue();
                    e && (yield this.createSlidedown(e))
                }
            })
        }
        enqueue(e) {
            this.slidedownQueue.push(e),
            ni.triggerSlidedownEvent(ni.EVENTS.QUEUED)
        }
        dequeue() {
            return this.slidedownQueue.shift()
        }
        createSlidedown(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                N.a.logMethodCall("createSlidedown");
                try {
                    if (!(yield this.checkIfSlidedownShouldBeShown(e)))
                        return
                } catch (e) {
                    return void E.a.warn("checkIfSlidedownShouldBeShown returned an error", e)
                }
                if (function() {
                    const e = OneSignal.notifyButton;
                    e && e.options.enable && "hidden" !== OneSignal.notifyButton.launcher.state && OneSignal.notifyButton.launcher.waitUntilShown().then(()=>{
                        OneSignal.notifyButton.launcher.hide()
                    }
                    ),
                    OneSignal.emitter.once(ni.EVENTS.CLOSED, ()=>{
                        OneSignal.notifyButton && OneSignal.notifyButton.options.enable && OneSignal.notifyButton.launcher.show()
                    }
                    )
                }(),
                this.isSlidedownShowing)
                    this.enqueue(e);
                else
                    try {
                        this.setIsSlidedownShowing(!0);
                        const t = e.slidedownPromptOptions || Yt;
                        OneSignal.slidedown = new ni(t),
                        yield OneSignal.slidedown.create(e.isInUpdateMode),
                        yield this.mountAuxiliaryContainers(e),
                        E.a.debug("Showing OneSignal Slidedown"),
                        ni.triggerSlidedownEvent(ni.EVENTS.SHOWN)
                    } catch (e) {
                        E.a.error("There was an error showing the OneSignal Slidedown:", e),
                        this.setIsSlidedownShowing(!1),
                        OneSignal.slidedown.close()
                    }
            })
        }
    }
    class wi {
        constructor(e) {
            this.appConfig = e,
            "undefined" != typeof OneSignal && OneSignal.environmentInfo && (this.environmentInfo = OneSignal.environmentInfo),
            this.secondaryChannelManager = new Bt,
            this.subscriptionManager = $t.getSubscriptionManager(this),
            this.serviceWorkerManager = $t.getServiceWorkerManager(this),
            this.pageViewManager = new ot,
            this.permissionManager = new j,
            this.workerMessenger = new Pe(this),
            this.updateManager = new Gt(this),
            this.sessionManager = new hi(this),
            this.tagManager = new mi(this),
            this.slidedownManager = new yi(this,this.secondaryChannelManager),
            this.promptsManager = new gi(this),
            this.dynamicResourceLoader = new Ce,
            this.metricsManager = new tt(e.metrics.enable,e.metrics.mixpanelReportingToken)
        }
    }
    !function(e) {
        e.TypicalSite = "typical",
        e.WordPress = "wordpress",
        e.Shopify = "shopify",
        e.Blogger = "blogger",
        e.Magento = "magento",
        e.Drupal = "drupal",
        e.SquareSpace = "squarespace",
        e.Joomla = "joomla",
        e.Weebly = "weebly",
        e.Wix = "wix",
        e.Custom = "custom"
    }(oi || (oi = {})),
    function(e) {
        e.Exact = "exact",
        e.Origin = "origin"
    }(si || (si = {})),
    function(e) {
        e.Navigate = "navigate",
        e.Focus = "focus"
    }(ri || (ri = {}));
    class Ei {
        static upgradeConfigToVersionTwo(e) {
            var t, i, n;
            Ei.isPromptOptionsVersion0(e.promptOptions) && (e.promptOptions = Ei.convertConfigToVersionOne(e.promptOptions)),
            Ei.isSlidedownConfigVersion1(null === (t = e.promptOptions) || void 0 === t ? void 0 : t.slidedown) && (null === (i = e.promptOptions) || void 0 === i ? void 0 : i.slidedown) && (e.promptOptions.slidedown = Ei.convertConfigToVersionTwo(null === (n = e.promptOptions) || void 0 === n ? void 0 : n.slidedown))
        }
        static convertConfigToVersionOne(e) {
            e.slidedown || (e.slidedown = {});
            const {acceptButtonText: t, cancelButtonText: i, actionMessage: n} = e.slidedown
              , o = e.acceptButtonText || e.acceptButton
              , s = e.cancelButtonText || e.cancelButton;
            return e.slidedown.acceptButtonText = t || o,
            e.slidedown.cancelButtonText = i || s,
            e.slidedown.actionMessage = n || e.actionMessage,
            e
        }
        static convertConfigToVersionTwo(e) {
            var t, i, n, o;
            const s = k.isCategorySlidedownConfiguredVersion1(e) ? T.Category : T.Push;
            let r, a;
            return s === T.Category && (r = null === (t = e.categories) || void 0 === t ? void 0 : t.positiveUpdateButton,
            a = null === (i = e.categories) || void 0 === i ? void 0 : i.negativeUpdateButton),
            {
                prompts: [...e.prompts || [], {
                    type: s,
                    autoPrompt: e.autoPrompt,
                    text: {
                        actionMessage: e.actionMessage,
                        acceptButton: e.acceptButton || e.acceptButtonText,
                        cancelButton: e.cancelButton || e.cancelButtonText,
                        positiveUpdateButton: r,
                        negativeUpdateButton: a,
                        updateMessage: null === (n = null === e || void 0 === e ? void 0 : e.categories) || void 0 === n ? void 0 : n.updateMessage
                    },
                    delay: {
                        pageViews: e.pageViews,
                        timeDelay: e.timeDelay
                    },
                    categories: null === (o = null === e || void 0 === e ? void 0 : e.categories) || void 0 === o ? void 0 : o.tags
                }]
            }
        }
        static isPromptOptionsVersion0(e) {
            if (e) {
                const t = ["acceptButtonText", "cancelButtonText", "actionMessage"];
                for (let i = 0; i < t.length; i++)
                    if (e.hasOwnProperty(t[i]))
                        return !0
            }
            return !1
        }
        static isSlidedownConfigVersion1(e) {
            if (e) {
                const t = ["enabled", "autoPrompt", "pageViews", "timeDelay", "acceptButton", "acceptButtonText", "cancelButton", "cancelButtonText", "actionMessage", "customizeTextEnabled", "categories"];
                for (let i = 0; i < t.length; i++)
                    if (e.hasOwnProperty(t[i]))
                        return !0
            }
            return !1
        }
    }
    (ci = ai || (ai = {}))[ci.Dashboard = 0] = "Dashboard",
    ci[ci.JavaScript = 1] = "JavaScript";
    const Ii = 10;
    class Pi {
        static getAppConfig(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                try {
                    if (!e || !e.appId || !N.b.isValidUuid(e.appId))
                        throw new f(c.InvalidAppId);
                    const i = yield t(e.appId);
                    Ei.upgradeConfigToVersionTwo(e);
                    const n = this.getMergedConfig(e, i);
                    return this.checkRestrictedOrigin(n),
                    n
                } catch (e) {
                    if (e) {
                        if (1 === e.code)
                            throw new f(c.InvalidAppId);
                        if (2 === e.code)
                            throw new f(c.AppNotConfiguredForWebPush)
                    }
                    throw e
                }
            })
        }
        static checkRestrictedOrigin(e) {
            if (e.restrictedOriginEnabled && y.a.getWindowEnv() !== oe.a.ServiceWorker && window.top === window && !w.b.contains(window.location.hostname, ".os.tc") && !w.b.contains(window.location.hostname, ".onesignal.com") && !this.doesCurrentOriginMatchConfigOrigin(e.origin))
                throw new f(c.WrongSiteUrl,{
                    siteUrl: e.origin
                })
        }
        static doesCurrentOriginMatchConfigOrigin(e) {
            try {
                return location.origin === new URL(e).origin
            } catch (e) {
                return !1
            }
        }
        static getIntegrationCapabilities(e) {
            switch (e) {
            case oi.Custom:
            case oi.WordPress:
                return {
                    configuration: ai.JavaScript
                };
            default:
                return {
                    configuration: ai.Dashboard
                }
            }
        }
        static getMergedConfig(e, t) {
            const i = this.getConfigIntegrationKind(t)
              , n = this.getSubdomainForConfigIntegrationKind(i, e, t)
              , o = t.config.setupBehavior ? t.config.setupBehavior.allowLocalhostAsSecureOrigin : e.allowLocalhostAsSecureOrigin
              , s = N.b.internalIsUsingSubscriptionWorkaround(n, o)
              , r = this.getUserConfigForConfigIntegrationKind(i, e, t, s);
            return {
                appId: t.app_id,
                subdomain: n,
                siteName: t.config.siteInfo.name,
                origin: t.config.origin,
                httpUseOneSignalCom: t.config.http_use_onesignal_com,
                restrictedOriginEnabled: t.features.restrict_origin && t.features.restrict_origin.enable,
                metrics: {
                    enable: t.features.metrics.enable,
                    mixpanelReportingToken: t.features.metrics.mixpanel_reporting_token
                },
                safariWebId: t.config.safari_web_id,
                vapidPublicKey: t.config.vapid_public_key,
                onesignalVapidPublicKey: t.config.onesignal_vapid_public_key,
                userConfig: r,
                enableOnSession: w.b.valueOrDefault(t.features.enable_on_session, zt.enableOnSessionForUnsubcribed),
                sessionThreshold: w.b.valueOrDefault(t.features.session_threshold, zt.reportingThreshold),
                enableSessionDuration: w.b.valueOrDefault(t.features.web_on_focus_enabled, zt.enableOnFocus)
            }
        }
        static getConfigIntegrationKind(e) {
            return e.config.integration ? e.config.integration.kind : oi.Custom
        }
        static getCustomLinkConfig(e) {
            const t = {
                enabled: !1,
                style: "button",
                size: "medium",
                unsubscribeEnabled: !1,
                text: {
                    explanation: "",
                    subscribe: "",
                    unsubscribe: ""
                },
                color: {
                    button: "",
                    text: ""
                }
            };
            if (!(e && e.config && e.config.staticPrompts && e.config.staticPrompts.customlink && e.config.staticPrompts.customlink.enabled))
                return t;
            const i = e.config.staticPrompts.customlink;
            return {
                enabled: i.enabled,
                style: i.style,
                size: i.size,
                unsubscribeEnabled: i.unsubscribeEnabled,
                text: i.text ? {
                    subscribe: i.text.subscribe,
                    unsubscribe: i.text.unsubscribe,
                    explanation: i.text.explanation
                } : t.text,
                color: i.color ? {
                    button: i.color.button,
                    text: i.color.text
                } : t.color
            }
        }
        static injectDefaultsIntoPromptOptions(e, t, i, n=!1) {
            var o, s;
            let r = {
                enabled: !1
            };
            e && e.customlink && (r = e.customlink);
            const a = t.customlink
              , c = Object.assign(Object.assign({}, e), {
                customlink: {
                    enabled: w.b.getValueOrDefault(r.enabled, a.enabled),
                    style: w.b.getValueOrDefault(r.style, a.style),
                    size: w.b.getValueOrDefault(r.size, a.size),
                    unsubscribeEnabled: w.b.getValueOrDefault(r.unsubscribeEnabled, a.unsubscribeEnabled),
                    text: {
                        subscribe: w.b.getValueOrDefault(r.text ? r.text.subscribe : void 0, a.text.subscribe),
                        unsubscribe: w.b.getValueOrDefault(r.text ? r.text.unsubscribe : void 0, a.text.unsubscribe),
                        explanation: w.b.getValueOrDefault(r.text ? r.text.explanation : void 0, a.text.explanation)
                    },
                    color: {
                        button: w.b.getValueOrDefault(r.color ? r.color.button : void 0, a.color.button),
                        text: w.b.getValueOrDefault(r.color ? r.color.text : void 0, a.color.text)
                    }
                }
            });
            if (c.slidedown ? c.slidedown.prompts = null === (s = null === (o = c.slidedown) || void 0 === o ? void 0 : o.prompts) || void 0 === s ? void 0 : s.map(e=>{
                var t, i, n, o, s, r, a, c, l;
                if (e.type = w.b.getValueOrDefault(e.type, T.Push),
                e.type === T.Category && (e.text = Object.assign(Object.assign({}, e.text), {
                    positiveUpdateButton: w.b.getValueOrDefault(null === (t = e.text) || void 0 === t ? void 0 : t.positiveUpdateButton, Kt.categoryDefaults.positiveUpdateButton),
                    negativeUpdateButton: w.b.getValueOrDefault(null === (i = e.text) || void 0 === i ? void 0 : i.negativeUpdateButton, Kt.categoryDefaults.negativeUpdateButton),
                    updateMessage: w.b.getValueOrDefault(null === (n = e.text) || void 0 === n ? void 0 : n.updateMessage, Kt.categoryDefaults.updateMessage)
                })),
                e.text = Object.assign(Object.assign({}, e.text), {
                    actionMessage: w.b.getValueOrDefault(null === (o = e.text) || void 0 === o ? void 0 : o.actionMessage, Kt.actionMessage),
                    acceptButton: w.b.getValueOrDefault(null === (s = e.text) || void 0 === s ? void 0 : s.acceptButton, Kt.acceptButton),
                    cancelButton: w.b.getValueOrDefault(null === (r = e.text) || void 0 === r ? void 0 : r.cancelButton, Kt.cancelButton),
                    confirmMessage: w.b.getValueOrDefault(null === (a = e.text) || void 0 === a ? void 0 : a.confirmMessage, Kt.confirmMessage)
                }),
                e.autoPrompt = w.b.getValueOrDefault(e.autoPrompt, !0),
                e.delay = {
                    pageViews: w.b.getValueOrDefault(null === (c = e.delay) || void 0 === c ? void 0 : c.pageViews, qt.pageViews),
                    timeDelay: w.b.getValueOrDefault(null === (l = e.delay) || void 0 === l ? void 0 : l.timeDelay, qt.timeDelay)
                },
                e.categories) {
                    const {categories: t} = e;
                    e.categories = pi.limitCategoriesToMaxCount(t, Ii)
                }
                return e
            }
            ) : (c.slidedown = {
                prompts: []
            },
            c.slidedown.prompts = [Yt]),
            c.native ? (c.native.enabled = !!c.native.enabled,
            c.native.autoPrompt = c.native.hasOwnProperty("autoPrompt") ? !!c.native.enabled && !!c.native.autoPrompt : !!c.native.enabled,
            c.native.pageViews = w.b.getValueOrDefault(c.native.pageViews, qt.pageViews),
            c.native.timeDelay = w.b.getValueOrDefault(c.native.timeDelay, qt.timeDelay)) : c.native = {
                enabled: !1,
                autoPrompt: !1,
                pageViews: qt.pageViews,
                timeDelay: qt.timeDelay
            },
            !0 === i.autoRegister)
                if (n) {
                    c.native.enabled = !1,
                    c.native.autoPrompt = !1;
                    const e = {
                        actionMessage: Kt.actionMessage,
                        acceptButton: Kt.acceptButton,
                        cancelButton: Kt.cancelButton
                    };
                    c.slidedown.prompts = [{
                        type: T.Push,
                        autoPrompt: !0,
                        text: e
                    }]
                } else
                    c.native.enabled = !0,
                    c.native.autoPrompt = !0;
            return c.autoPrompt = c.native.autoPrompt || k.isSlidedownAutoPromptConfigured(c.slidedown.prompts),
            c
        }
        static getPromptOptionsForDashboardConfiguration(e) {
            const t = e.config.staticPrompts
              , i = t.native ? {
                enabled: t.native.enabled,
                autoPrompt: t.native.enabled && !1 !== t.native.autoPrompt,
                pageViews: w.b.getValueOrDefault(t.native.pageViews, qt.pageViews),
                timeDelay: w.b.getValueOrDefault(t.native.timeDelay, qt.timeDelay)
            } : {
                enabled: !1,
                autoPrompt: !1,
                pageViews: qt.pageViews,
                timeDelay: qt.timeDelay
            }
              , {prompts: n} = t.slidedown;
            return {
                autoPrompt: i.autoPrompt || k.isSlidedownAutoPromptConfigured(n),
                native: i,
                slidedown: {
                    prompts: n
                },
                fullscreen: {
                    enabled: t.fullscreen.enabled,
                    actionMessage: t.fullscreen.actionMessage,
                    acceptButton: t.fullscreen.acceptButton,
                    cancelButton: t.fullscreen.cancelButton,
                    title: t.fullscreen.title,
                    message: t.fullscreen.message,
                    caption: t.fullscreen.caption,
                    autoAcceptTitle: t.fullscreen.autoAcceptTitle
                },
                customlink: this.getCustomLinkConfig(e)
            }
        }
        static getUserConfigForConfigIntegrationKind(e, t, i, n=!1) {
            switch (this.getIntegrationCapabilities(e).configuration) {
            case ai.Dashboard:
                return {
                    appId: i.app_id,
                    autoRegister: !1,
                    autoResubscribe: i.config.autoResubscribe,
                    path: i.config.serviceWorker.path,
                    serviceWorkerPath: i.config.serviceWorker.workerName,
                    serviceWorkerParam: {
                        scope: i.config.serviceWorker.registrationScope
                    },
                    subdomainName: i.config.siteInfo.proxyOrigin,
                    promptOptions: this.getPromptOptionsForDashboardConfiguration(i),
                    welcomeNotification: {
                        disable: !i.config.welcomeNotification.enable,
                        title: i.config.welcomeNotification.title,
                        message: i.config.welcomeNotification.message,
                        url: i.config.welcomeNotification.url
                    },
                    notifyButton: {
                        enable: i.config.staticPrompts.bell.enabled,
                        displayPredicate: i.config.staticPrompts.bell.hideWhenSubscribed ? ()=>OneSignal.isPushNotificationsEnabled().then(e=>!e) : null,
                        size: i.config.staticPrompts.bell.size,
                        position: i.config.staticPrompts.bell.location,
                        showCredit: !1,
                        offset: {
                            bottom: `${i.config.staticPrompts.bell.offset.bottom}px`,
                            left: `${i.config.staticPrompts.bell.offset.left}px`,
                            right: `${i.config.staticPrompts.bell.offset.right}px`
                        },
                        colors: {
                            "circle.background": i.config.staticPrompts.bell.color.main,
                            "circle.foreground": i.config.staticPrompts.bell.color.accent,
                            "badge.background": "black",
                            "badge.foreground": "white",
                            "badge.bordercolor": "black",
                            "pulse.color": i.config.staticPrompts.bell.color.accent,
                            "dialog.button.background.hovering": i.config.staticPrompts.bell.color.main,
                            "dialog.button.background.active": i.config.staticPrompts.bell.color.main,
                            "dialog.button.background": i.config.staticPrompts.bell.color.main,
                            "dialog.button.foreground": "white"
                        },
                        text: {
                            "tip.state.unsubscribed": i.config.staticPrompts.bell.tooltip.unsubscribed,
                            "tip.state.subscribed": i.config.staticPrompts.bell.tooltip.subscribed,
                            "tip.state.blocked": i.config.staticPrompts.bell.tooltip.blocked,
                            "message.prenotify": i.config.staticPrompts.bell.tooltip.unsubscribed,
                            "message.action.subscribing": i.config.staticPrompts.bell.message.subscribing,
                            "message.action.subscribed": i.config.staticPrompts.bell.message.subscribing,
                            "message.action.resubscribed": i.config.staticPrompts.bell.message.subscribing,
                            "message.action.unsubscribed": i.config.staticPrompts.bell.message.unsubscribing,
                            "dialog.main.title": i.config.staticPrompts.bell.dialog.main.title,
                            "dialog.main.button.subscribe": i.config.staticPrompts.bell.dialog.main.subscribeButton,
                            "dialog.main.button.unsubscribe": i.config.staticPrompts.bell.dialog.main.unsubscribeButton,
                            "dialog.blocked.title": i.config.staticPrompts.bell.dialog.blocked.title,
                            "dialog.blocked.message": i.config.staticPrompts.bell.dialog.blocked.message
                        }
                    },
                    persistNotification: i.config.notificationBehavior ? i.config.notificationBehavior.display.persist : void 0,
                    webhooks: {
                        cors: i.config.webhooks.corsEnable,
                        "notification.displayed": i.config.webhooks.notificationDisplayedHook,
                        "notification.clicked": i.config.webhooks.notificationClickedHook,
                        "notification.dismissed": i.config.webhooks.notificationDismissedHook
                    },
                    notificationClickHandlerMatch: i.config.notificationBehavior ? i.config.notificationBehavior.click.match : void 0,
                    notificationClickHandlerAction: i.config.notificationBehavior ? i.config.notificationBehavior.click.action : void 0,
                    allowLocalhostAsSecureOrigin: i.config.setupBehavior ? i.config.setupBehavior.allowLocalhostAsSecureOrigin : void 0,
                    requiresUserPrivacyConsent: t.requiresUserPrivacyConsent,
                    outcomes: {
                        direct: i.config.outcomes.direct,
                        indirect: {
                            enabled: i.config.outcomes.indirect.enabled,
                            influencedTimePeriodMin: i.config.outcomes.indirect.notification_attribution.minutes_since_displayed,
                            influencedNotificationsLimit: i.config.outcomes.indirect.notification_attribution.limit
                        },
                        unattributed: i.config.outcomes.unattributed
                    }
                };
            case ai.JavaScript:
                const o = "undefined" != typeof OneSignal && !!OneSignal.SERVICE_WORKER_PARAM
                  , s = "undefined" != typeof OneSignal && !!OneSignal.SERVICE_WORKER_PATH
                  , r = o ? OneSignal.SERVICE_WORKER_PARAM : {
                    scope: "/"
                }
                  , a = s ? OneSignal.SERVICE_WORKER_PATH : "OneSignalSDKWorker.js"
                  , c = Object.assign(Object.assign(Object.assign(Object.assign({}, t), {
                    promptOptions: this.injectDefaultsIntoPromptOptions(t.promptOptions, i.config.staticPrompts, t, n)
                }), {
                    serviceWorkerParam: t.serviceWorkerParam ? t.serviceWorkerParam : r,
                    serviceWorkerPath: t.serviceWorkerPath ? t.serviceWorkerPath : a,
                    path: t.path ? t.path : "/"
                }), {
                    outcomes: {
                        direct: i.config.outcomes.direct,
                        indirect: {
                            enabled: i.config.outcomes.indirect.enabled,
                            influencedTimePeriodMin: i.config.outcomes.indirect.notification_attribution.minutes_since_displayed,
                            influencedNotificationsLimit: i.config.outcomes.indirect.notification_attribution.limit
                        },
                        unattributed: i.config.outcomes.unattributed
                    }
                });
                return t.hasOwnProperty("autoResubscribe") ? c.autoResubscribe = !!t.autoResubscribe : t.hasOwnProperty("autoRegister") ? c.autoResubscribe = !!t.autoRegister : c.autoResubscribe = !!i.config.autoResubscribe,
                c
            }
        }
        static getSubdomainForConfigIntegrationKind(e, t, i) {
            const n = this.getIntegrationCapabilities(e)
              , o = t.subdomainName;
            let s = "";
            switch (n.configuration) {
            case ai.Dashboard:
                s = i.config.siteInfo.proxyOriginEnabled ? i.config.siteInfo.proxyOrigin : void 0;
                break;
            case ai.JavaScript:
                s = i.config.subdomain
            }
            return s && !this.shouldUseServerConfigSubdomain(o, n) ? void 0 : s
        }
        static shouldUseServerConfigSubdomain(e, t) {
            switch (t.configuration) {
            case ai.Dashboard:
                return !0;
            case ai.JavaScript:
                switch (location.protocol) {
                case "https:":
                    return !!e;
                case "http:":
                    return !0;
                default:
                    return !1
                }
            }
        }
    }
    class Ci {
        getAppConfig(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield Pi.getAppConfig(e, yt.downloadServerAppConfig)
            })
        }
        getMergedConfig(e, t) {
            return Pi.getMergedConfig(e, t)
        }
    }
    class Ti {
        constructor(e) {
            this.options = {
                appId: e.appId,
                subdomain: e.subdomainName,
                origin: e.origin,
                siteName: e.siteName,
                metrics: {
                    enable: !1,
                    mixpanelReportingToken: null
                },
                userConfig: {}
            }
        }
        initialize() {
            return Object(d.a)(this, void 0, void 0, function*() {
                if ((window.opener || window.parent) == window)
                    return document.write("<span style='font-size: 14px; color: red; font-family: sans-serif;'>OneSignal: This page cannot be directly opened, and must be opened as a result of a subscription call.</span>"),
                    Promise.resolve();
                const e = Object.assign({}, this.options);
                e.appId = e.appId,
                e.subdomainName = e.subdomain,
                e.origin = e.origin,
                OneSignal.config = e || {};
                const t = yield(new Ci).getAppConfig(e);
                return OneSignal.environmentInfo = di.getEnvironmentInfo(),
                OneSignal.context = new wi(t),
                OneSignal.context.workerMessenger.listen(!0),
                OneSignal.initialized = !0,
                this.loadPromise = {},
                this.loadPromise.promise = new Promise((e,t)=>{
                    this.loadPromise.resolver = e,
                    this.loadPromise.rejector = t
                }
                ),
                this.establishCrossOriginMessaging(),
                this.loadPromise.promise
            })
        }
        establishCrossOriginMessaging() {}
        dispose() {
            this.messenger.destroy()
        }
        finishInitialization() {
            this.loadPromise.resolver()
        }
        subscribe() {
            return Object(d.a)(this, void 0, void 0, function*() {
                const e = U.getIsPushNotificationsEnabled()
                  , t = opener || parent;
                e ? t && window.close() : be.registerForPush()
            })
        }
    }
    class Ai extends Ti {
        initialize() {
            const e = super.initialize();
            return S.a.trigger("httpInitialize"),
            e
        }
        establishCrossOriginMessaging() {
            this.messenger && this.messenger.destroy(),
            this.messenger = new ye(window,this.options.origin,this.options.origin),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.CONNECTED, this.onMessengerConnect.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.IFRAME_POPUP_INITIALIZE, this.onProxyFrameInitializing.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION, this.onRemoteNotificationPermission.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, this.onRemoteDatabaseGet.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET_ALL, this.onRemoteDatabaseGetAll.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, this.onRemoteDatabasePut.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, this.onRemoteDatabaseRemove.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_FROM_PUSH, this.onUnsubscribeFromPush.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.MARK_PROMPT_DISMISSED, this.onMarkPromptDismissed.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.IS_SUBSCRIBED, this.onIsSubscribed.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_PROXY_FRAME, this.onUnsubscribeProxyFrame.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE, this.onServiceWorkerState.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.GET_WORKER_VERSION, this.onWorkerVersion.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.SUBSCRIPTION_EXPIRATION_STATE, this.onSubscriptionExpirationState.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.PROCESS_EXPIRING_SUBSCRIPTIONS, this.onProcessExpiringSubscriptions.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.GET_SUBSCRIPTION_STATE, this.onGetSubscriptionState.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.SESSION_UPSERT, this.onSessionUpsert.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.SESSION_DEACTIVATE, this.onSessionDeactivate.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_REQUEST, this.onAreYouVisibleRequest.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_RESPONSE, this.onAreYouVisibleResponse.bind(this)),
            this.messenger.listen()
        }
        retriggerRemoteEvent(e, t) {
            this.messenger.message(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, {
                eventName: e,
                eventData: t
            })
        }
        onMessengerConnect(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return E.a.debug(`(${y.a.getWindowEnv().toString()}) Successfully established cross-origin communication.`),
                this.finishInitialization(),
                !1
            })
        }
        onProxyFrameInitializing(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                E.a.info(`(${y.a.getWindowEnv().toString()}) The iFrame has just received initOptions from the host page!`);
                const t = Object.assign(Object.assign(Object.assign({}, e.data.hostInitOptions), OneSignal.config), {
                    pageUrl: e.data.pageUrl
                });
                if (OneSignal.config = t,
                nt.installNativePromptPermissionChangedHook(),
                (yield M.a.get("Options", "defaultUrl")) || (yield M.a.put("Options", {
                    key: "defaultUrl",
                    value: new URL(OneSignal.config.pageUrl).origin
                })),
                yield M.a.put("Options", {
                    key: "lastKnownHostUrl",
                    value: OneSignal.config.pageUrl
                }),
                yield nt.initSaveState(),
                yield nt.storeInitialValues(),
                yield nt.saveInitOptions(),
                navigator.serviceWorker && "https:" === window.location.protocol)
                    try {
                        OneSignal.context.serviceWorkerManager.establishServiceWorkerChannel()
                    } catch (e) {
                        E.a.error("Error interacting with Service Worker inside an HTTP-hosted iFrame:", e)
                    }
                e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE)
            })
        }
        onRemoteNotificationPermission(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = OneSignal.context
                  , i = yield t.permissionManager.getReportedNotificationPermission(t.appConfig.safariWebId);
                return e.reply(i),
                !1
            })
        }
        onRemoteDatabaseGet(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = e.data
                  , i = [];
                for (const e of t) {
                    const {table: t, key: n} = e;
                    i.push(M.a.get(t, n))
                }
                const n = yield Promise.all(i);
                return e.reply(n),
                !1
            })
        }
        onRemoteDatabaseGetAll(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = e.data.table
                  , i = yield M.a.getAll(t);
                return e.reply(i),
                !1
            })
        }
        onRemoteDatabasePut(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = e.data
                  , i = [];
                for (const e of t) {
                    const {table: t, keypath: n} = e;
                    i.push(M.a.put(t, n))
                }
                return yield Promise.all(i),
                e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE),
                !1
            })
        }
        onRemoteDatabaseRemove(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = e.data
                  , i = [];
                for (const e of t) {
                    const {table: t, keypath: n} = e;
                    i.push(M.a.remove(t, n))
                }
                return yield Promise.all(i),
                e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE),
                !1
            })
        }
        onUnsubscribeFromPush(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                E.a.debug("(Reposted from iFrame -> Host) User unsubscribed but permission granted. Re-prompting the user for push.");
                try {
                    yield Object(X.z)(),
                    e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE)
                } catch (e) {
                    E.a.debug("Failed to unsubscribe from push remotely:", e)
                }
            })
        }
        onMarkPromptDismissed(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return E.a.debug("(Reposted from iFrame -> Host) Marking prompt as dismissed."),
                yield Fe.markPromptDismissedWithType(Te.Push),
                e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE),
                !1
            })
        }
        onIsSubscribed(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = yield OneSignal.isPushNotificationsEnabled();
                return e.reply(t),
                !1
            })
        }
        onUnsubscribeProxyFrame(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return (yield OneSignal.isPushNotificationsEnabled()) && (yield OneSignal.setSubscription(!1),
                yield OneSignal.database.rebuild()),
                e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE),
                !1
            })
        }
        onServiceWorkerState(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = yield OneSignal.context.serviceWorkerManager.getActiveState();
                return e.reply(t),
                !1
            })
        }
        onWorkerVersion(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = yield OneSignal.context.serviceWorkerManager.getWorkerVersion();
                return e.reply(t),
                !1
            })
        }
        onSubscriptionExpirationState(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = yield OneSignal.context.subscriptionManager.isSubscriptionExpiring();
                return e.reply(t),
                !1
            })
        }
        onProcessExpiringSubscriptions(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                OneSignal.context,
                yield nt.processExpiringSubscriptions();
                return e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE),
                !1
            })
        }
        onGetSubscriptionState(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = yield OneSignal.context.subscriptionManager.getSubscriptionState();
                return e.reply(t),
                !1
            })
        }
        onSessionUpsert(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = OneSignal.context
                  , i = e.data;
                t.workerMessenger.directPostMessageToSW(Se.SessionUpsert, i),
                e.reply(!0)
            })
        }
        onSessionDeactivate(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = OneSignal.context
                  , i = e.data;
                t.workerMessenger.directPostMessageToSW(Se.SessionDeactivate, i),
                e.reply(!0)
            })
        }
        onAreYouVisibleRequest(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                E.a.debug("onAreYouVisibleRequest iframe", e)
            })
        }
        onAreYouVisibleResponse(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                E.a.debug("onAreYouVisibleResponse iframe", e);
                const t = OneSignal.context
                  , i = e.data;
                t.workerMessenger.directPostMessageToSW(Se.AreYouVisibleResponse, i),
                e.reply(!0)
            })
        }
    }
    class Mi extends Ti {
        constructor(e) {
            super(e)
        }
        establishCrossOriginMessaging() {
            this.messenger && this.messenger.destroy(),
            this.messenger = new ye(window.parent,this.options.origin,this.options.origin)
        }
    }
    class Ni extends Ti {
        constructor(e) {
            super(e)
        }
        establishCrossOriginMessaging() {
            this.messenger = new ye(window.opener,this.options.origin,this.options.origin),
            this.messenger.once(OneSignal.POSTMAM_COMMANDS.CONNECTED, this.onMessengerConnected.bind(this)),
            this.messenger.postMessage(OneSignal.POSTMAM_COMMANDS.POPUP_BEGIN_MESSAGEPORT_COMMS, null),
            this.messenger.listen()
        }
        onMessengerConnected(e) {
            E.a.debug(`(${y.a.getWindowEnv().toString()}) The host page is now ready to receive commands from the HTTP popup.`),
            this.finishInitialization()
        }
    }
    class xi {
        static initHttp(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                switch (E.a.debug(`Called %cinitHttp(${JSON.stringify(e, null, 4)})`, Object(X.k)("code")),
                y.a.getWindowEnv()) {
                case oe.a.OneSignalProxyFrame:
                    OneSignal.proxyFrame = new Ai(e),
                    yield OneSignal.proxyFrame.initialize(),
                    se.ensureBackwardsCompatibility(OneSignal);
                    break;
                case oe.a.OneSignalSubscriptionPopup:
                    OneSignal.subscriptionPopup = new Ni(e),
                    yield OneSignal.subscriptionPopup.initialize(),
                    se.ensureBackwardsCompatibility(OneSignal),
                    S.a.trigger("httpInitialize");
                    break;
                case oe.a.OneSignalSubscriptionModal:
                    OneSignal.subscriptionModal = new Mi(e),
                    OneSignal.subscriptionModal.establishCrossOriginMessaging(),
                    OneSignal.subscriptionModal.initialize(),
                    se.ensureBackwardsCompatibility(OneSignal),
                    S.a.trigger("httpInitialize");
                    break;
                default:
                    E.a.error("Unsupported HTTP initialization branch.")
                }
            })
        }
    }
    var ki = i(14);
    class ji {
        constructor(e) {
            this.url = e,
            this.url.pathname = "webPushIframe"
        }
        static get LOAD_TIMEOUT_MS() {
            return 15e3
        }
        load() {
            return Object(d.a)(this, void 0, void 0, function*() {
                E.a.debug("Opening an iFrame to", this.url.toString()),
                this.removeFrame();
                const e = document.createElement("iframe");
                return e.style.display = "none",
                e.src = this.url.toString(),
                e.sandbox = "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation",
                this.loadPromise = {},
                this.loadPromise.promise = new Promise((e,t)=>{
                    this.loadPromise.resolver = e,
                    this.loadPromise.rejector = t
                }
                ),
                document.body.appendChild(e),
                e.onload = this.onFrameLoad.bind(this),
                this.element = e,
                Object(X.x)(this.loadPromise.promise, ji.LOAD_TIMEOUT_MS).catch(()=>{
                    window === window.top && E.a.warn(`OneSignal: Loading the required iFrame ${this.url.toString()} timed out. Check that the Site URL onesignal.com dashboard web config is ${location.origin}. Only the Site URL specified there is allowed to use load the iFrame.`)
                }
                ),
                this.loadPromise.promise
            })
        }
        removeFrame() {
            if (!h.a.isBrowser())
                return;
            const e = document.querySelector(`iframe[src='${this.url.toString()}']`);
            e && e.remove()
        }
        onFrameLoad(e) {
            this.establishCrossOriginMessaging()
        }
        establishCrossOriginMessaging() {
            this.messenger && this.messenger.destroy(),
            this.messenger = new ye(this.element.contentWindow,this.url.toString(),this.url.toString()),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.CONNECTED, this.onMessengerConnect.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, this.onRemoteRetriggerEvent.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, this.onRemoteNotificationPermissionChanged.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.REQUEST_HOST_URL, this.onRequestHostUrl.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.SERVICEWORKER_COMMAND_REDIRECT, this.onServiceWorkerCommandRedirect.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.GET_EVENT_LISTENER_COUNT, this.onGetEventListenerCount.bind(this)),
            this.messenger.on(OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_REQUEST, this.onAreYouVisibleRequest.bind(this)),
            this.messenger.connect()
        }
        dispose() {
            this.messenger && this.messenger.destroy(),
            this.removeFrame()
        }
        onMessengerConnect(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                E.a.debug(`Successfully established cross-origin communication for iFrame at ${this.url.toString()}`),
                this.messenger.message(OneSignal.POSTMAM_COMMANDS.IFRAME_POPUP_INITIALIZE, {
                    hostInitOptions: Object(X.h)(OneSignal.config),
                    pageUrl: window.location.href
                }, e=>(e.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE && this.loadPromise.resolver(),
                !1))
            })
        }
        onRemoteRetriggerEvent(e) {
            const {eventName: t, eventData: i} = e.data;
            return S.a.trigger(t, i, e.source),
            !1
        }
        onRemoteNotificationPermissionChanged(e) {
            const {forceUpdatePermission: t} = e.data;
            return Object(X.y)(t),
            !1
        }
        onRequestHostUrl(e) {
            return e.reply(location.href),
            !1
        }
        onServiceWorkerCommandRedirect(e) {
            const t = e.data;
            return t && t.startsWith("http") && (window.location.href = t),
            !1
        }
        onGetEventListenerCount(e) {
            const t = e.data;
            return E.a.debug("(Reposted from iFrame -> Host) Getting event listener count for ", t),
            e.reply(OneSignal.emitter.numberOfListeners(t)),
            !1
        }
        isSubscribed() {
            return new Promise(e=>{
                this.messenger.message(OneSignal.POSTMAM_COMMANDS.IS_SUBSCRIBED, null, t=>{
                    e(t.data)
                }
                )
            }
            )
        }
        unsubscribeFromPush() {
            return new Promise(e=>{
                this.messenger.message(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_PROXY_FRAME, null, t=>{
                    e()
                }
                )
            }
            )
        }
        getProxyServiceWorkerActiveState() {
            return new Promise((e,t)=>{
                this.message(OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE, null, t=>{
                    e(t.data)
                }
                )
            }
            )
        }
        runCommand(e, t=null) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield new Promise((i,n)=>{
                    this.message(e, t, e=>{
                        i(e.data)
                    }
                    )
                }
                )
            })
        }
        onAreYouVisibleRequest(e) {
            E.a.debug("onAreYouVisibleRequest page", e);
            const t = {
                timestamp: e.data.timestamp,
                focused: document.hasFocus()
            };
            this.message(OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_RESPONSE, t)
        }
        message(...e) {
            this.messenger.message.apply(this.messenger, arguments)
        }
    }
    class _i {
        constructor() {}
        static discoverAltOrigin(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = _i.getOneSignalProxyIframeUrls(e)
                  , i = [];
                for (const e of t) {
                    const t = new ji(e);
                    yield t.load(),
                    i.push(t)
                }
                const n = yield _i.subscribedProxyFrameHosts(i);
                let o;
                yield _i.removeDuplicatedAltOriginSubscription(n),
                o = 0 === n.length ? i[0] : n[0];
                for (const e of i)
                    o !== e && e.dispose();
                return o
            })
        }
        static subscribedProxyFrameHosts(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = [];
                for (const i of e)
                    (yield i.isSubscribed()) && t.push(i);
                return t
            })
        }
        static removeDuplicatedAltOriginSubscription(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (e.length < 2)
                    return;
                const t = e.slice(1);
                for (const e of t)
                    yield e.unsubscribeFromPush()
            })
        }
        static getCanonicalSubscriptionUrls(e, t=y.a.getApiEnv()) {
            const i = _i.getWildcardLegacySubscriptionDomain(t)
              , n = new URL(`https://${e.subdomain}.${i}`);
            if (t !== ki.a.Production)
                return [n];
            const o = [new URL(`https://${e.subdomain}.os.tc`)];
            return e.httpUseOneSignalCom && o.push(n),
            o
        }
        static getWildcardLegacySubscriptionDomain(e) {
            const t = y.a.getOneSignalApiUrl(e);
            let i = 2;
            return e === ki.a.Staging && (i = 3),
            w.a.lastParts(t.host, ".", i)
        }
        static getOneSignalProxyIframeUrls(e) {
            const t = _i.getCanonicalSubscriptionUrls(e);
            for (const e of t)
                e.pathname = "webPushIframe";
            return t
        }
    }
    var Di = i(24);
    class Ri {
        static isValidUrl(e, t) {
            if (t && t.allowNull && null === e)
                return !0;
            if (t && t.allowEmpty && (null === e || void 0 === e))
                return !0;
            try {
                const i = new URL(e);
                return !t || !t.requireHttps || "https:" === i.protocol
            } catch (e) {
                return !1
            }
        }
        static isValidBoolean(e, t) {
            return !(!t || !t.allowNull || null !== e) || (!0 === e || !1 === e)
        }
        static isValidArray(e, t) {
            return !(!t || !t.allowNull || null !== e) || (!(!t || !t.allowEmpty || null !== e && void 0 !== e) || e instanceof Array)
        }
    }
    class Ui {
        static processItem(e, t) {
            if ("function" == typeof t)
                t();
            else {
                if (!Array.isArray(t))
                    throw new p.a("Only accepts function and Array types!");
                {
                    if (0 == t.length)
                        throw new p.a("Empty array is not valid!");
                    const i = t.shift();
                    if (null == i || void 0 === i)
                        throw new p.a("First element in array must be the OneSignal function name");
                    const n = e[i.toString()];
                    if ("function" != typeof n)
                        throw new p.a(`No OneSignal function with the name '${i}'`);
                    n.apply(e, t)
                }
            }
        }
    }
    class Wi {
        static throwIfInvalidAuthHashOptions(e, t) {
            if (!e)
                return;
            const i = t.filter(t=>e.hasOwnProperty(t));
            if (i.length > 1)
                throw E.a.error("More than one key provided, please only provide one!", i),
                new InvalidArgumentError.a("options",InvalidArgumentError.b.Malformed);
            const n = i[0]
              , o = e[n];
            return o ? (Wi.throwIfInvalidAuthHash(o, `options.${n}`),
            o) : void 0
        }
        static throwIfInvalidAuthHash(e, t) {
            if (e && e.length !== Wi.VALID_AUTH_HASH_LENGTH)
                throw new InvalidArgumentError.a(t,InvalidArgumentError.b.Malformed)
        }
    }
    Wi.VALID_AUTH_HASH_LENGTH = 64,
    i.d(t, "default", function() {
        return Bi
    });
    class Bi {
        static setDefaultNotificationUrl(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (!Ri.isValidUrl(e, {
                    allowNull: !0
                }))
                    throw new InvalidArgumentError.a("url",InvalidArgumentError.b.Malformed);
                yield Object(X.c)(),
                Object(X.s)("setDefaultNotificationUrl", e);
                const t = yield M.a.getAppState();
                t.defaultNotificationUrl = e,
                yield M.a.setAppState(t)
            })
        }
        static setDefaultTitle(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Object(X.c)(),
                Object(X.s)("setDefaultTitle", e);
                const t = yield M.a.getAppState();
                t.defaultNotificationTitle = e,
                yield M.a.setAppState(t)
            })
        }
        static setEmail(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (!e)
                    throw new InvalidArgumentError.a("email",InvalidArgumentError.b.Empty);
                if (!Object(X.r)(e))
                    throw new InvalidArgumentError.a("email",InvalidArgumentError.b.Malformed);
                const i = Wi.throwIfInvalidAuthHashOptions(t, ["identifierAuthHash", "emailAuthHash"]);
                return Object(X.s)("setEmail", e, t),
                yield Object(X.c)(),
                yield this.context.secondaryChannelManager.email.setIdentifier(e, i)
            })
        }
        static setSMSNumber(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (!e)
                    throw new InvalidArgumentError.a("smsNumber",InvalidArgumentError.b.Empty);
                const i = Wi.throwIfInvalidAuthHashOptions(t, ["identifierAuthHash"]);
                return Object(X.s)("setSMSNumber", e, t),
                yield Object(X.c)(),
                yield this.context.secondaryChannelManager.sms.setIdentifier(e, i)
            })
        }
        static logoutEmail() {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield Object(X.c)(),
                yield this.context.secondaryChannelManager.email.logout()
            })
        }
        static logoutSMS() {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield Object(X.c)(),
                yield this.context.secondaryChannelManager.sms.logout()
            })
        }
        static isPushNotificationsSupported() {
            return Object(X.s)("isPushNotificationsSupported"),
            !0
        }
        static initializeConfig(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = yield(new Ci).getAppConfig(e);
                E.a.debug(`OneSignal: Final web app config: %c ${JSON.stringify(t, null, 4)}`, Object(X.k)("code")),
                Bi.config = t,
                Bi.environmentInfo = di.getEnvironmentInfo(),
                Bi.context = new wi(t),
                Bi.config = Bi.context.appConfig
            })
        }
        static init(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (Object(X.s)("init"),
                yield nt.polyfillSafariFetch(),
                nt.errorIfInitAlreadyCalled(),
                yield Bi.initializeConfig(e),
                !Bi.config)
                    throw new Error("OneSignal config not initialized!");
                if (!g.a.safari || Bi.config.safariWebId) {
                    if (Bi.config.userConfig.requiresUserPrivacyConsent) {
                        if (!(yield M.a.getProvideUserConsent()))
                            return void (Bi.pendingInit = !0)
                    }
                    yield Bi.delayedInit()
                } else
                    E.a.warn(new f(c.MissingSafariWebId))
            })
        }
        static delayedInit() {
            return Object(d.a)(this, void 0, void 0, function*() {
                function e() {
                    return Object(d.a)(this, void 0, void 0, function*() {
                        if (!Bi.__initAlreadyCalled) {
                            if (Bi.__initAlreadyCalled = !0,
                            Bi.emitter.on(Bi.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, te.onNotificationPermissionChange),
                            Bi.emitter.on(Bi.EVENTS.SUBSCRIPTION_CHANGED, te._onSubscriptionChanged),
                            Bi.emitter.on(Bi.EVENTS.SDK_INITIALIZED, nt.onSdkInitialized),
                            N.b.isUsingSubscriptionWorkaround()) {
                                if (!Bi.config || !Bi.config.subdomain)
                                    throw new f(c.MissingSubdomain);
                                Bi.emitter.on(Bi.EVENTS.SESSION_STARTED, hi.setupSessionEventListenersForHttp),
                                Bi.proxyFrameHost = yield _i.discoverAltOrigin(Bi.config)
                            }
                            window.addEventListener("focus", ()=>{
                                fe.checkAndTriggerNotificationPermissionChanged()
                            }
                            ),
                            yield nt.initSaveState(),
                            yield nt.saveInitOptions(),
                            y.a.getWindowEnv() === oe.a.CustomIframe ? yield S.a.trigger(Bi.EVENTS.SDK_INITIALIZED) : yield nt.internalInit()
                        }
                    })
                }
                Bi.pendingInit = !1,
                Bi.context.workerMessenger.listen(),
                "complete" === document.readyState || "interactive" === document.readyState ? yield e() : (E.a.debug("OneSignal: Waiting for DOMContentLoaded or readyStateChange event before continuing initialization..."),
                window.addEventListener("DOMContentLoaded", ()=>{
                    e()
                }
                ),
                document.onreadystatechange = (()=>{
                    "complete" !== document.readyState && "interactive" !== document.readyState || e()
                }
                ))
            })
        }
        static provideUserConsent(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield M.a.setProvideUserConsent(e),
                e && Bi.pendingInit && (yield Bi.delayedInit())
            })
        }
        static showHttpPermissionRequest(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                E.a.debug("Called showHttpPermissionRequest(), redirecting to HTTP prompt."),
                Bi.showHttpPrompt(e).catch(e=>E.a.info(e))
            })
        }
        static showHttpPrompt(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Bi.showSlidedownPrompt(e)
            })
        }
        static showNativePrompt() {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Object(X.c)(),
                yield Bi.context.promptsManager.internalShowNativePrompt()
            })
        }
        static showSlidedownPrompt(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Object(X.c)(),
                yield Bi.context.promptsManager.internalShowParticularSlidedown(T.Push, e)
            })
        }
        static showCategorySlidedown(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Object(X.c)();
                const t = U.getIsPushNotificationsEnabled();
                yield Bi.context.promptsManager.internalShowCategorySlidedown(Object.assign(Object.assign({}, e), {
                    isInUpdateMode: t
                }))
            })
        }
        static showSmsSlidedown(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Object(X.c)(),
                yield Bi.context.promptsManager.internalShowSmsSlidedown(Object.assign({}, e))
            })
        }
        static showEmailSlidedown(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Object(X.c)(),
                yield Bi.context.promptsManager.internalShowEmailSlidedown(Object.assign({}, e))
            })
        }
        static showSmsAndEmailSlidedown(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Object(X.c)(),
                yield Bi.context.promptsManager.internalShowSmsAndEmailSlidedown(Object.assign({}, e))
            })
        }
        static registerForPushNotifications(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (Bi.initialized)
                    return yield nt.registerForPushNotifications(e);
                yield new Promise((t,i)=>{
                    Bi.emitter.once(Bi.EVENTS.SDK_INITIALIZED, ()=>Object(d.a)(this, void 0, void 0, function*() {
                        return yield nt.registerForPushNotifications(e),
                        t()
                    }))
                }
                )
            })
        }
        static getNotificationPermission(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield Object(X.c)(),
                Bi.privateGetNotificationPermission(e)
            })
        }
        static privateGetNotificationPermission(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = yield Bi.context.permissionManager.getNotificationPermission(Bi.config.safariWebId);
                return e && e(t),
                t
            })
        }
        static getTags(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Object(X.c)(),
                Object(X.s)("getTags", e);
                const {appId: t} = yield M.a.getAppConfig()
                  , {deviceId: i} = yield M.a.getSubscription();
                if (!i)
                    return E.a.info(new b(r.NoDeviceId)),
                    null;
                const {tags: n} = yield yt.getPlayer(t, i);
                return Object(X.j)(e, n),
                n
            })
        }
        static sendTag(e, t, i) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const n = {};
                return n[e] = t,
                yield Bi.sendTags(n, i)
            })
        }
        static sendTags(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield Object(X.c)(),
                Object(X.s)("sendTags", e, t),
                e && 0 !== Object.keys(e).length ? (Object.keys(e).forEach(t=>{
                    !1 === e[t] && (e[t] = "false")
                }
                ),
                yield this.context.updateManager.sendTagsUpdate(e),
                Object(X.j)(t, e),
                e) : (E.a.info(new InvalidArgumentError.a("tags",InvalidArgumentError.b.Empty)),
                null)
            })
        }
        static deleteTag(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield Bi.deleteTags([e])
            })
        }
        static deleteTags(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (yield Object(X.c)(),
                Object(X.s)("deleteTags", e, t),
                !Ri.isValidArray(e))
                    throw new InvalidArgumentError.a("tags",InvalidArgumentError.b.Malformed);
                0 === e.length && E.a.info(new InvalidArgumentError.a("tags",InvalidArgumentError.b.Empty));
                const i = {};
                for (const t of e)
                    i[t] = "";
                const n = yield Bi.sendTags(i);
                if (n) {
                    const e = Object.keys(n);
                    return Object(X.j)(t, e),
                    e
                }
                return []
            })
        }
        static setExternalUserId(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Object(X.c)(),
                Object(X.s)("setExternalUserId"),
                yield Bi.privateSetExternalUserId(e, t)
            })
        }
        static privateSetExternalUserId(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                Wi.throwIfInvalidAuthHash(t, "authHash"),
                yield Bi.database.setExternalUserId(e, t),
                yield Bi.context.updateManager.sendExternalUserIdUpdate(e, t)
            })
        }
        static getExternalUserId() {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield Object(X.c)(),
                Object(X.s)("getExternalUserId"),
                yield Bi.database.getExternalUserId()
            })
        }
        static removeExternalUserId() {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Object(X.c)(),
                Object(X.s)("removeExternalUserId"),
                yield Bi.privateSetExternalUserId(void 0)
            })
        }
        static addListenerForNotificationOpened(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Object(X.c)(),
                Object(X.s)("addListenerForNotificationOpened", e),
                Bi.emitter.once(Bi.EVENTS.NOTIFICATION_CLICKED, t=>{
                    Object(X.j)(e, t)
                }
                ),
                Bi.config && te.fireStoredNotificationClicks(Bi.config.pageUrl || Bi.config.userConfig.pageUrl)
            })
        }
        static getIdsAvailable(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Object(X.c)(),
                Object(X.s)("getIdsAvailable", e);
                const {deviceId: t, subscriptionToken: i} = yield M.a.getSubscription()
                  , n = {
                    userId: t,
                    registrationId: i
                };
                return Object(X.j)(e, n),
                n
            })
        }
        static isPushNotificationsEnabled(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield Object(X.c)(),
                Bi.privateIsPushNotificationsEnabled(e)
            })
        }
        static privateIsPushNotificationsEnabled(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                Object(X.s)("isPushNotificationsEnabled", e);
                const t = yield Bi.context.subscriptionManager.getSubscriptionState();
                return Object(X.j)(e, t.subscribed && !t.optedOut),
                t.subscribed && !t.optedOut
            })
        }
        static setSubscription(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Object(X.c)(),
                Object(X.s)("setSubscription", e);
                const t = yield M.a.getAppConfig()
                  , {appId: i} = t
                  , n = yield M.a.getSubscription()
                  , {deviceId: s} = n;
                if (!t.appId)
                    throw new m(o.MissingAppId);
                if (!Ri.isValidBoolean(e))
                    throw new InvalidArgumentError.a("newSubscription",InvalidArgumentError.b.Malformed);
                if (!s)
                    return void E.a.info(new b(r.NoDeviceId));
                const a = {
                    notification_types: fe.getNotificationTypeFromOptIn(e)
                }
                  , c = yield M.a.getExternalUserIdAuthHash();
                c && (a.external_user_id_auth_hash = c),
                n.optedOut = !e,
                yield yt.updatePlayer(i, s, a),
                yield M.a.setSubscription(n),
                te.onInternalSubscriptionSet(n.optedOut),
                te.checkAndTriggerSubscriptionChanged()
            })
        }
        static isOptedOut(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield Object(X.c)(),
                Bi.internalIsOptedOut(e)
            })
        }
        static internalIsOptedOut(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                Object(X.s)("isOptedOut", e);
                const {optedOut: t} = yield M.a.getSubscription();
                return Object(X.j)(e, t),
                t
            })
        }
        static optOut(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                if (yield Object(X.c)(),
                Object(X.s)("optOut", e, t),
                !Ri.isValidBoolean(e))
                    throw new InvalidArgumentError.a("doOptOut",InvalidArgumentError.b.Malformed);
                yield Bi.setSubscription(!e),
                Object(X.j)(t)
            })
        }
        static getEmailId(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Object(X.c)(),
                Object(X.s)("getEmailId", e);
                const t = (yield M.a.getEmailProfile()).subscriptionId;
                return Object(X.j)(e, t),
                t
            })
        }
        static getSMSId(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Object(X.c)(),
                Object(X.s)("getSMSId", e);
                const t = yield M.a.getSMSProfile()
                  , {subscriptionId: i} = t;
                return Object(X.j)(e, i),
                i
            })
        }
        static getUserId(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Object(X.c)(),
                Object(X.s)("getUserId", e);
                const t = (yield M.a.getSubscription()).deviceId;
                return Object(X.j)(e, t),
                t
            })
        }
        static getRegistrationId(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Object(X.c)(),
                Object(X.s)("getRegistrationId", e);
                const t = (yield M.a.getSubscription()).subscriptionToken;
                return Object(X.j)(e, t),
                t
            })
        }
        static getSubscription(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                return yield Object(X.c)(),
                yield Bi.privateGetSubscription(e)
            })
        }
        static privateGetSubscription(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                Object(X.s)("getSubscription", e);
                const t = !(yield M.a.getSubscription()).optedOut;
                return Object(X.j)(e, t),
                t
            })
        }
        static sendSelfNotification(e="OneSignal Test Message", t="This is an example notification.", i=`${new URL(location.href).origin}?_osp=do_not_open`, n, s, a) {
            return Object(d.a)(this, void 0, void 0, function*() {
                yield Object(X.c)(),
                Object(X.s)("sendSelfNotification", e, t, i, n, s, a);
                const c = yield M.a.getAppConfig()
                  , l = yield M.a.getSubscription();
                if (!c.appId)
                    throw new m(o.MissingAppId);
                if (!(yield Bi.isPushNotificationsEnabled()))
                    throw new b(r.NoDeviceId);
                if (!Ri.isValidUrl(i))
                    throw new InvalidArgumentError.a("url",InvalidArgumentError.b.Malformed);
                if (!Ri.isValidUrl(n, {
                    allowEmpty: !0,
                    requireHttps: !0
                }))
                    throw new InvalidArgumentError.a("icon",InvalidArgumentError.b.Malformed);
                l.deviceId && (yield yt.sendNotification(c.appId, [l.deviceId], {
                    en: e
                }, {
                    en: t
                }, i, n, s, a))
            })
        }
        static push(e) {
            Ui.processItem(Bi, e)
        }
        static on(e, t) {
            return this.emitter.on(e, t)
        }
        static off(e, t) {
            return this.emitter.off(e, t)
        }
        static once(e, t) {
            return this.emitter.once(e, t)
        }
        static sendOutcome(e, t) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const i = Bi.config.userConfig.outcomes;
                if (!i)
                    return void E.a.error(`Could not send ${e}. No outcomes config found.`);
                const n = new pt(Bi.config.appId,i,e,!1);
                if (void 0 !== t && "number" != typeof t)
                    return void E.a.error("Outcome weight can only be a number if present.");
                if (!(yield n.beforeOutcomeSend()))
                    return;
                const o = yield n.getAttribution();
                yield n.send({
                    type: o.type,
                    notificationIds: o.notificationIds,
                    weight: t
                })
            })
        }
        static sendUniqueOutcome(e) {
            return Object(d.a)(this, void 0, void 0, function*() {
                const t = Bi.config.userConfig.outcomes;
                if (!t)
                    return void E.a.error(`Could not send ${e}. No outcomes config found.`);
                const i = new pt(Bi.config.appId,t,e,!0);
                if (!(yield i.beforeOutcomeSend()))
                    return;
                const n = yield i.getAttribution();
                if (n.type === at.NotSupported)
                    return void E.a.warn("You are on a free plan. Please upgrade to use this functionality.");
                const {notificationIds: o} = n
                  , s = yield i.getNotifsToAttributeWithUniqueOutcome(o);
                i.shouldSendUnique(n, s) ? yield i.send({
                    type: n.type,
                    notificationIds: s
                }) : E.a.warn(`'${e}' was already reported for all notifications.`)
            })
        }
    }
    Bi.VERSION = h.a.version(),
    Bi._VERSION = h.a.version(),
    Bi.sdkEnvironment = y.a,
    Bi._notificationOpenedCallbacks = [],
    Bi._idsAvailable_callback = [],
    Bi._defaultLaunchURL = null,
    Bi.config = null,
    Bi._sessionInitAlreadyRunning = !1,
    Bi._isNotificationEnabledCallback = [],
    Bi._subscriptionSet = !0,
    Bi.modalUrl = null,
    Bi._windowWidth = 650,
    Bi._windowHeight = 568,
    Bi._isNewVisitor = !1,
    Bi._channel = null,
    Bi.timedLocalStorage = Be,
    Bi.initialized = !1,
    Bi._didLoadITILibrary = !1,
    Bi.notifyButton = null,
    Bi.store = v,
    Bi.environment = h.a,
    Bi.database = M.a,
    Bi.event = S.a,
    Bi.browser = g.a,
    Bi.slidedown = null,
    Bi.log = E.a,
    Bi.api = yt,
    Bi.indexedDb = Di.a,
    Bi.mainHelper = fe,
    Bi.subscriptionHelper = be,
    Bi.httpHelper = xi,
    Bi.eventHelper = te,
    Bi.initHelper = nt,
    Bi.pendingInit = !0,
    Bi.emitter = new Oe.a,
    Bi.cache = {},
    Bi.SERVICE_WORKER_PATH = "OneSignalSDKWorker.js",
    Bi.SERVICE_WORKER_PARAM = {
        scope: "/"
    },
    Bi._LOGGING = !1,
    Bi.LOGGING = !1,
    Bi._initCalled = !1,
    Bi.__initAlreadyCalled = !1,
    Bi.checkAndWipeUserSubscription = function() {}
    ,
    Bi.DeviceRecord = ae,
    Bi.SecondaryChannelDeviceRecord = It,
    Bi.notificationPermission = A,
    Bi._initHttp = xi.initHttp,
    Bi._initPopup = (()=>Bi.subscriptionPopup.subscribe()),
    Bi.POSTMAM_COMMANDS = {
        CONNECTED: "connect",
        REMOTE_NOTIFICATION_PERMISSION: "postmam.remoteNotificationPermission",
        REMOTE_DATABASE_GET: "postmam.remoteDatabaseGet",
        REMOTE_DATABASE_GET_ALL: "postmam.remoteDatabaseGetAll",
        REMOTE_DATABASE_PUT: "postmam.remoteDatabasePut",
        REMOTE_DATABASE_REMOVE: "postmam.remoteDatabaseRemove",
        REMOTE_OPERATION_COMPLETE: "postman.operationComplete",
        REMOTE_RETRIGGER_EVENT: "postmam.remoteRetriggerEvent",
        MODAL_LOADED: "postmam.modalPrompt.loaded",
        MODAL_PROMPT_ACCEPTED: "postmam.modalPrompt.accepted",
        MODAL_PROMPT_REJECTED: "postmam.modalPrompt.canceled",
        POPUP_LOADED: "postmam.popup.loaded",
        POPUP_ACCEPTED: "postmam.popup.accepted",
        POPUP_REJECTED: "postmam.popup.canceled",
        POPUP_CLOSING: "postman.popup.closing",
        REMOTE_NOTIFICATION_PERMISSION_CHANGED: "postmam.remoteNotificationPermissionChanged",
        IFRAME_POPUP_INITIALIZE: "postmam.iframePopupInitialize",
        UNSUBSCRIBE_FROM_PUSH: "postmam.unsubscribeFromPush",
        SET_SESSION_COUNT: "postmam.setSessionCount",
        REQUEST_HOST_URL: "postmam.requestHostUrl",
        WINDOW_TIMEOUT: "postmam.windowTimeout",
        FINISH_REMOTE_REGISTRATION: "postmam.finishRemoteRegistration",
        FINISH_REMOTE_REGISTRATION_IN_PROGRESS: "postmam.finishRemoteRegistrationInProgress",
        POPUP_BEGIN_MESSAGEPORT_COMMS: "postmam.beginMessagePortComms",
        SERVICEWORKER_COMMAND_REDIRECT: "postmam.command.redirect",
        MARK_PROMPT_DISMISSED: "postmam.markPromptDismissed",
        IS_SUBSCRIBED: "postmam.isSubscribed",
        UNSUBSCRIBE_PROXY_FRAME: "postman.unsubscribeProxyFrame",
        GET_EVENT_LISTENER_COUNT: "postmam.getEventListenerCount",
        SERVICE_WORKER_STATE: "postmam.serviceWorkerState",
        GET_WORKER_VERSION: "postmam.getWorkerVersion",
        SUBSCRIPTION_EXPIRATION_STATE: "postmam.subscriptionExpirationState",
        PROCESS_EXPIRING_SUBSCRIPTIONS: "postmam.processExpiringSubscriptions",
        GET_SUBSCRIPTION_STATE: "postmam.getSubscriptionState",
        SESSION_UPSERT: "postmam.sessionUpsert",
        SESSION_DEACTIVATE: "postmam.sessionDeactivate",
        ARE_YOU_VISIBLE_REQUEST: "postmam.areYouVisibleRequest",
        ARE_YOU_VISIBLE_RESPONSE: "postmam.areYouVisibleResponse"
    },
    Bi.EVENTS = {
        CUSTOM_PROMPT_CLICKED: "customPromptClick",
        NATIVE_PROMPT_PERMISSIONCHANGED: "notificationPermissionChange",
        SUBSCRIPTION_CHANGED: "subscriptionChange",
        WELCOME_NOTIFICATION_SENT: "sendWelcomeNotification",
        NOTIFICATION_DISPLAYED: "notificationDisplay",
        NOTIFICATION_DISMISSED: "notificationDismiss",
        NOTIFICATION_CLICKED: "notificationClick",
        SDK_INITIALIZED: "initializeInternal",
        SDK_INITIALIZED_PUBLIC: "initialize",
        REGISTERED: "register",
        POPUP_CLOSING: "popupClose",
        PERMISSION_PROMPT_DISPLAYED: "permissionPromptDisplay",
        EMAIL_SUBSCRIPTION_CHANGED: "emailSubscriptionChanged",
        SMS_SUBSCRIPTION_CHANGED: "smsSubscriptionChanged",
        TEST_INIT_OPTION_DISABLED: "testInitOptionDisabled",
        TEST_WOULD_DISPLAY: "testWouldDisplay",
        TEST_FINISHED_ALLOW_CLICK_HANDLING: "testFinishedAllowClickHandling",
        POPUP_WINDOW_TIMEOUT: "popupWindowTimeout",
        SESSION_STARTED: "os.sessionStarted"
    },
    se.ensureBackwardsCompatibility(Bi),
    E.a.info(`%cOneSignal Web SDK loaded (version ${Bi._VERSION},\n  ${y.a.getWindowEnv().toString()} environment).`, Object(X.k)("bold")),
    E.a.debug(`Current Page URL: ${"undefined" == typeof location ? "NodeJS" : location.href}`),
    E.a.debug(`Browser Environment: ${g.a.name} ${g.a.version}`)
}
, function(e, t) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || Function("return this")() || (0,
        eval)("this")
    } catch (e) {
        "object" == typeof window && (i = window)
    }
    e.exports = i
}
, function(e, t) {
    e.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}
]);
//# sourceMappingURL=OneSignalPageSDKES6.js.map

