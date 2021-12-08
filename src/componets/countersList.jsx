import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ложка" },
    { id: 1, value: 4, name: "Вилка" },
    { id: 2, value: 0, name: "Тарелка" },
    { id: 3, value: 4, name: "Нож" },
    { id: 4, value: 0, name: "Набор" },
  ];

  let newCounters = null;
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((count) => count.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    newCounters = counters.map((count) => {
      if (count.id === id) {
        count.value++;
      }
      return count;
    });
    setCounters(newCounters);
  };

  const handleDecrement = (id) => {
    newCounters = counters.map((count) => {
      if (count.id === id) {
        count.value--;
      }
      return count;
    });
    setCounters(newCounters);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default CountersList;
