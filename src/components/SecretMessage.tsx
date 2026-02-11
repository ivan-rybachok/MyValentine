import { useState, useEffect, useRef } from "react";
import { CORRECT_PASSWORD, WRONG_SHAKES } from "../constants/config";
import LockedState from "./LockedState";
import UnlockedState from "./UnlockedState";
import StarsBackground from "./StarsBackground";
import Particles from "./Particles";

function SecretMessage() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [wrongMsg, setWrongMsg] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (unlocked) {
      setTimeout(() => setRevealed(true), 80);
    }
  }, [unlocked]);

  function handleSubmit() {
    if (input.trim().toLowerCase() === CORRECT_PASSWORD.toLowerCase()) {
      setUnlocked(true);
    } else {
      const msg = WRONG_SHAKES[attempts % WRONG_SHAKES.length];
      setWrongMsg(msg);
      setShaking(true);
      setAttempts((a) => a + 1);
      setTimeout(() => setShaking(false), 500);
      if (attempts >= 1) setShowHint(true);
      setInput("");
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSubmit();
  }

  return (
    <div className="root">
      <StarsBackground />
      <Particles />

      <div className="card">
        {!unlocked ? (
          <LockedState
            attempts={attempts}
            input={input}
            setInput={setInput}
            shaking={shaking}
            handleSubmit={handleSubmit}
            handleKey={handleKey}
            wrongMsg={wrongMsg}
            showHint={showHint}
            inputRef={inputRef}
          />
        ) : (
          <UnlockedState
            revealed={revealed}
            accepted={accepted}
            setAccepted={setAccepted}
          />
        )}
      </div>
    </div>
  );
}
export default SecretMessage;
