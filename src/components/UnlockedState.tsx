import { SECRET_MESSAGE } from "../constants/config";

interface UnlockedStateProps {
  revealed: boolean;
  accepted: boolean;
  setAccepted: (value: boolean) => void;
}

function UnlockedState({
  revealed,
  accepted,
  setAccepted,
}: UnlockedStateProps) {
  return (
    <div className={`revealed-card ${revealed ? "" : ""}`}>
      <span className="heart-big">🤍</span>
      <h2 className="message-title">{SECRET_MESSAGE.title}</h2>
      <div className="divider" />
      <div className="message-body">
        {SECRET_MESSAGE.body.split("\n").map((line, i) => (
          <span
            key={i}
            className="line"
            style={{ animationDelay: `${0.1 + i * 0.18}s` }}
          >
            {line || "\u00A0"}
          </span>
        ))}
      </div>

      {!accepted ? (
        <button className="yes-btn" onClick={() => setAccepted(true)}>
          yes, always 🤍
        </button>
      ) : (
        <p className="accepted-msg">I knew you would say that😝</p>
      )}
    </div>
  );
}

export default UnlockedState;
