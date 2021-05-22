import "./PageHeader.css";

export default function PageHeader(props) {
  const name = props.name;
  return (
    <div className="page-header">
      <h1 className="page-header-text">
        <strong>{name}</strong>
      </h1>
    </div>
  );
}
