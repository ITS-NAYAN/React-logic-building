import React, { useState } from "react";

const App = () => {
  const [question, setQuestion] = useState(null);

  const faq = [
    {
      id: 1,
      question: "What is React",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      question: "What is CSS",
      answer: "CSS is used for styling web pages.",
    },
    {
      id: 3,
      question: "What is HTML",
      answer: "HTML provides structure to web pages.",
    },
    {
      id: 4,
      question: "What is Python",
      answer: "Python is a programming language.",
    },
  ];

  return (
    <div>
      <h1>HI NAYAN</h1>

      {faq.map((faqs) => (
        <div key={faqs.id}>
          <li
            className="question"
            onClick={() => setQuestion(question === faqs.id ? null : faqs.id)}
          >
            {faqs.question}
          </li>

          {question === faqs.id && <li className="answer">{faqs.answer}</li>}
        </div>
      ))}
    </div>
  );
};

export default App;
