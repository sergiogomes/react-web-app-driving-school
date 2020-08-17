import styles from "./alert.module.css";

export default function Alert({ children, type, title, message }) {
  if (type === "error") {
  } else if (type === "warning") {
    return (
      <div
        className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
        role="alert"
      >
        <p className="font-bold">{title}</p>
        <p>{message}</p>
        <div>{children}</div>
      </div>
    );
  } else if (type === "success") {
  } else if (type === "info") {
  } else {
    return <></>;
  }
}
