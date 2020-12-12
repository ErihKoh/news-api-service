import errorImage from "../../image/error.jpg";

export default function NewsErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="240" alt="sadcat" />
      {message}
    </div>
  );
}
