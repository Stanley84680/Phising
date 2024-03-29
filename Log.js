export default class Log {
    static shouldLog() {
        try {
            if (typeof window === "undefined" ||
                typeof window.localStorage === "undefined") {
                return false;
            }
            const level = window.localStorage.getItem("loglevel");
            if (level && level.toLowerCase() === "trace") {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            /* LocalStorage may not be accessible on browser profiles that restrict 3rd party cookies */
            return false;
        }
    }
    static setLevel(level) {
        if (typeof window === "undefined" ||
            typeof window.localStorage === "undefined") {
            return;
        }
        try {
            window.localStorage.setItem("loglevel", level);
            Log.proxyMethodsCreated = undefined;
            Log.createProxyMethods();
        }
        catch (e) {
            /* LocalStorage may not be accessible on browser profiles that restrict 3rd party cookies */
            return;
        }
    }
    static createProxyMethods() {
        if (typeof Log.proxyMethodsCreated !== "undefined") {
            return;
        }
        else {
            Log.proxyMethodsCreated = true;
        }
        const methods = {
            log: "debug",
            trace: "trace",
            info: "info",
            warn: "warn",
            error: "error"
        };
        for (const nativeMethod of Object.keys(methods)) {
            const nativeMethodExists = typeof console[nativeMethod] !== "undefined";
            const methodToMapTo = methods[nativeMethod];
            const shouldMap = nativeMethodExists &&
                ((typeof __LOGGING__ !== "undefined" && __LOGGING__ === true) ||
                    (Log.shouldLog()) ||
                    methodToMapTo === "error");
            if (shouldMap) {
                Log[methodToMapTo] = console[nativeMethod].bind(console);
            }
            else {
                Log[methodToMapTo] = function () { };
            }
        }
    }
}
Log.createProxyMethods();
//# sourceMappingURL=Log.js.map
