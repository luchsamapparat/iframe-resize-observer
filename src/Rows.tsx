import { useState } from "react";

export const Rows = () => {
    const [rows, setRows] = useState(1);

    return (<>
        <pre>{rows}</pre>
        <button onClick={() => setRows(rows + 1)}>Add Row</button>
        <ul>
            {Array.from({ length: rows }).map((_, index) => (
                <li key={index}>Row {index + 1}</li>
            ))}
        </ul>
    </>)
}

