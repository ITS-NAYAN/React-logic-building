import { useState } from "react";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flashcards = [
    {
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces.",
    },
    {
      question: "What is JSX?",
      answer: "HTML-like syntax used in JavaScript.",
    },
    {
      question: "What are props?",
      answer: "Data passed from a parent component to a child component.",
    },
  ];

  const currentCard = flashcards[currentIndex];

  return (
    <div>
      <h1>Flashcard Deck</h1>

      <h2>{isFlipped ? currentCard.answer : currentCard.question}</h2>
      <button onClick={() => setIsFlipped(!isFlipped)}>Reveal Answer</button>
      <button
        disabled={currentIndex === flashcards.length - 1}
        onClick={() => {
          setCurrentIndex(
            currentIndex < flashcards.length - 1
              ? currentIndex + 1
              : flashcards.length - 1,
          );
          setIsFlipped(false);
        }}
      >
        Next
      </button>
      <button
        disabled={currentIndex === 0}
        onClick={() => {
          setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 0);
          setIsFlipped(false);
        }}
      >
        Previous
      </button>
      <p>Card: {currentIndex+1} of {flashcards.length}</p>
    </div>
  );
};

export default App;
