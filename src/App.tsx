import randomWords from "random-words";
import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Spinner from "./components/Spinner";
import { shuffle } from "./utils/utils";

function App() {
  const [word, setWord] = useState<string>();
  const [reverse, setReverse] = useState<string>();
  const [entry, setEntry] = useState<string>("");

  const newWord = useCallback(() => {
    const generatedWord = randomWords(1)[0].toLowerCase();
    const [original, reversed] = shuffle(generatedWord);

    setWord(generatedWord);
    setReverse(reversed);
  }, []);

  useEffect(() => {
    newWord();
  }, []);

  const onChange = (val: React.InputHTMLAttributes<HTMLInputElement>) => {
    // @ts-ignore
    setEntry(val.target.value);
  };

  const handleCheck = useCallback(() => {
    if (entry) {
      if (entry?.toLowerCase() === word?.toLowerCase()) {
        alert("You have matched the guess.");
      } else {
        alert("Please try again.");
      }
    }
  }, [entry, word]);

  const nextWord = useCallback(() => {
    newWord();
  }, []);

  return (
    <div className="container">
      <div className="content">
        <h2>Guess the scrambled word...</h2>
        <div className="original">
          {reverse?.split("").map((el) => (
            <div className="">{el}</div>
          ))}
        </div>
        <div className="input">
          <input
            className="input"
            name="input"
            value={entry}
            onChange={onChange}
            autoFocus={true}
          />
        </div>

        <div className="btn-container">
          <button onClick={nextWord} className="btn">
            Next Word
          </button>
          <button onClick={handleCheck} className="btn">
            Check
          </button>
        </div>
      </div>
      <Spinner />
    </div>
  );
}

export default App;
