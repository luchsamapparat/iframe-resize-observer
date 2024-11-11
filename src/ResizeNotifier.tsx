import { useEffect } from "react";

export const ResizeNotifier = () => {

    useEffect(() => {
        console.log(`✨ useEffect called`);

        const resizeObserver = new ResizeObserver((args) => {
            console.log(`📢 ResizeObserver callback`, { args });

            window.parent.postMessage({
                type: 'resize',
                height: args[0].contentRect.height,
            }, '*');
        })

        console.log(`🔍 resizeObserver.observe`);
        resizeObserver.observe(document.body);

        return () => {
            console.log('🚮 resizeObserver.disconnect');
            resizeObserver.disconnect();
        };
    }, []);

    return null;
}