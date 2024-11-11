import { useEffect, useRef } from "react";

export const AutoResizeIframe = () => {
    const ref = useRef<HTMLIFrameElement>(null);

    console.log(`AutoResizeIframe rendering`);

    useEffect(() => {
        console.log(`✨ useEffect called`, { ref: ref.current });

        const handleResize = (message: MessageEvent) => {
            console.log('📬 message received', { message })

            if (ref.current && message.data.type === 'resize') {
                ref.current.height = message.data.height.toString();
            }
        }

        window.addEventListener('message', handleResize);

        return () => window.removeEventListener('message', handleResize);
    }, []);


    return (<>
        <iframe ref={ref} src="iframe.html" />
    </>);
} 