import { RefObject } from "react";
import { HINT } from "../constants/config";

interface LockedStateProps {
  attempts: number;
  input: string;
  setInput: (value: string) => void;
  shaking: boolean;
  handleSubmit: () => void;
  handleKey: (e: React.KeyboardEvent) => void;
  wrongMsg: string;
  showHint: boolean;
  inputRef: RefObject<HTMLInputElement | null>;
}
function LockedState({
  attempts,
  input,
  setInput,
  shaking,
  handleSubmit,
  handleKey,
  wrongMsg,
  showHint,
  inputRef,
}: LockedStateProps) {
  return (
    <>
      <div className="lock-icon">{attempts > 0 ? "🔐" : "🔒"}</div>
      <h1 className="card-title">I want to tell you something special</h1>
      <p className="card-sub">
        in order to unlock this message, you must guess the secret word
      </p>

      <div className={`input-wrap ${shaking ? "shaking" : ""}`}>
        <input
          ref={inputRef}
          className="secret-input"
          type="password"
          placeholder="type the secret word here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          autoComplete="off"
          spellCheck={false}
        />
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        unlock →
      </button>

      <p className="wrong-msg">{wrongMsg}</p>

      {showHint && (
        <p className="hint">
          hint: <span>{HINT}</span>
        </p>
      )}
    </>
  );
}

export default LockedState;
