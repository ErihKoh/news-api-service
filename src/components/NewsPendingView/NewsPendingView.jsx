import pendingImage from "../../image/pending.png";
import { ImSpinner } from "react-icons/im";

const styles = {
  spinner: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
    fontSize: 24,
  },
};

export default function NewsPendingView() {
  return (
    <div role="alert">
      <div style={styles.spinner}>
        <ImSpinner size="32" className="icon-spin" />
        Загружаем...
      </div>
      <img src={pendingImage} alt="quesion" />
    </div>
  );
}
