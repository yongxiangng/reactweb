import styles from "./PageHeader.module.css";

export default function PageHeader(props) {
  const { name } = props;
  return (
    <div>
      <h1 className={styles.headerText}>
        <strong>{name}</strong>
      </h1>
    </div>
  );
}
