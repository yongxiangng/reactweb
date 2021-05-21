import "./PageHeader.css"

export default function PageHeader(props) {
    const name = props.name
    return (
        <div className="page-header">
            <p className="page-header-text">
                <strong>{name}</strong>
            </p>
        </div>
    )
}
