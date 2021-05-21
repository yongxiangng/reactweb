import "./PageHeader.css"

export default function PageHeader(props) {
    const name = props.name
    return (
        <div className="header-container">
            <div className="header">
                <p className="header-text">
                    <strong>{name}</strong>
                </p>
            </div>
        </div>
    )
}
