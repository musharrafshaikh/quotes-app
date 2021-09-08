import React, { useState } from "react";
import "./styles.css";

var books = {
  "Think Like A Monk": [
    {
      name:
        "Remember, saying whatever we want, whenever we want, however we want, is not freedom. Real freedom is not feeling the need to say these things."
    },
    { name: "Cancers of the Mind : Comparing, Complaining, Criticizing." },
    {
      name:
        "The more we define ourselves in relation to the people around us, the more lost we are."
    },
    {
      name:
        "In 1902, the sociologist Charles Horton Cooley wrote: ''I am not what I think I am, and I am not what you think I am. I am what I think you think I am''."
    },
    {
      name:
        "The less time you fixate on everyone else, the more time you have to focus on yourself"
    }
  ],
  "Atomic Habits": [
    {
      name:
        "''Every action you take is a vote for the type of person you wish to become. No single instance will transform your beliefs, but as the votes build up, so does the evidence of your new identity''."
    },
    { name: "''Habit are the compound interest of self-improvement''." },
    {
      name:
        "''Goals are good for setting a direction but systems are the best for making progress''."
    },
    {
      name:
        "''Success is the product of daily habit -- not once in a lifetime transformation''."
    },
    {
      name:
        "''We all deal with setback but in long run, the quality of our lives depends on the quality of our habits''."
    }
  ],
  "The Alchemist": [
    {
      name:
        "''And, when you want something, all the universe consipre in helping you to achive it.''"
    },
    {
      name:
        "''It's the possibility of having a dream come true that makes life interesting.''"
    },
    {
      name:
        "''The simple things are also the most extraordinary things, and only the wise can see them.''"
    },
    {
      name:
        "''Why do we have to listen to our hearts?'' the boy asked. ''Because, wherever your heart is, that is where you will find your treasure.''"
    },
    {
      name:
        "''There is only one thing that makes a dream impossible to achieve: the fear of failure.''"
    }
  ]
};

var arrayOfBooks = Object.keys(books); //Conversting Object to array so that we can use it in map function
export default function App() {
  var [selectedbooks, setSelectedbooks] = useState("Think Like A Monk");

  function booksClickHandler(booksNameReceived) {
    selectedbooks = booksNameReceived;
    setSelectedbooks(selectedbooks);
  }

  //View
  return (
    <div className="App">
      <h1>Quotes App</h1>
      <h4>5 Quotes From Different Books </h4>
      <div>
        {arrayOfBooks.map((booksName) => {
          return (
            <button
              key={booksName}
              onClick={() => booksClickHandler(booksName)}
            >
              {booksName}
            </button>
          );
        })}
      </div>

      <div>
        {books[selectedbooks].map((quotesList) => {
          return (
            <ul>
              <li>{quotesList.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
