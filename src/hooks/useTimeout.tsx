import { useCallback, useEffect, useRef, useState } from "react";

function useTimeout<T extends (...args: any[]) => void>(
    callback: T,
    delay: number = 100
) {
    if (delay < 0) {
        throw new Error("delay should be positive");
    }
    if (typeof callback !== "function") {
        throw new Error("the callback function should be a function");
    }
    const callbackRef = useRef<T>(callback);
    const [timeoutId, setTimeoutId] = useState<number | null>(null);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const startTimeout = (...args: Parameters<T>) => {
        if (delay !== null && timeoutId === null) {
            const id = window.setTimeout(() => {
                callbackRef.current(...args);
            }, delay);
            setTimeoutId(id);
        }
    };

    const restartTimeout = useCallback(
        (...args: Parameters<T>) => {
            if (timeoutId && delay !== null) {
                clearTimeout(timeoutId);
                const id = setTimeout(() => {
                    callbackRef.current(...args);
                }, delay);
                setTimeoutId(id);
            }
        },
        [delay]
    );

    const cancelTimeout = useCallback(() => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
    }, []);

    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
                setTimeoutId(null);
            }
        };
    }, [callback]);

    return { startTimeout, cancelTimeout, restartTimeout };
}

export default useTimeout;
