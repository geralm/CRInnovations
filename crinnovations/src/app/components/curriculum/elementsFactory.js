import { Fragment } from "react"
export default function Element({ ObjectKey, children }) {
    return (<Fragment key={ObjectKey}>
        {ObjectKey === "title" && <h3 className="font-bold">{children}</h3>}
        {ObjectKey === "company" && <h4>{children}</h4>}
        {ObjectKey === "date" && <time>{children}</time>}
        {ObjectKey === "description" && (
            <p className="line-clamp-3">{children}</p>
        )}
    </Fragment>)
}