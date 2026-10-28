import { useState } from "react";

const App = () => {
  
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState("10");
  const [people, setPeople] = useState("1");

  const billAmount = Number(bill);
  const tipRate = Number(tipPercentage);
  const peopleCount = Number(people);

  const isValid =
    bill.trim() !== "" &&
    tipPercentage.trim() !== "" &&
    people.trim() !== "" &&
    Number.isFinite(billAmount) &&
    Number.isFinite(tipRate) &&
    Number.isFinite(peopleCount) &&
    billAmount >= 0 &&
    tipRate >= 0 &&
    Number.isInteger(peopleCount) &&
    peopleCount >= 1;

  const tipAmount = isValid ? (billAmount * tipRate) / 100 : 0;

  const totalBill = isValid ? billAmount + tipAmount : 0;

  const perPerson = isValid ? totalBill / peopleCount : 0;

  return (
    <div>
      <h1>Tip Calculator</h1>

     
      <div>
        <label htmlFor="bill_amount">Enter Bill Amount:</label>

        <input
          id="bill_amount"
          type="number"
          min="0"
          step="any"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          placeholder="Enter bill amount"
        />
      </div>

      <br />

      
      <div>
        <label htmlFor="tip_percentage">Enter Tip Percentage:</label>

        <input
          id="tip_percentage"
          type="number"
          min="0"
          step="any"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
          placeholder="Enter tip percentage"
        />
      </div>

      <br />

    
      <div>
        <label htmlFor="no_of_people">Enter Number of People:</label>

        <input
          id="no_of_people"
          type="number"
          min="1"
          step="1"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          placeholder="Enter number of people"
        />
      </div>

      <hr />

      {isValid ? (
        <div>
          <h2>Bill Summary</h2>

          <p>Bill Amount: ₹{billAmount.toFixed(2)}</p>

          <p>Tip Amount: ₹{tipAmount.toFixed(2)}</p>

          <p>Total Bill: ₹{totalBill.toFixed(2)}</p>

          <p>Number of People: {peopleCount}</p>

          <h3>Per Person: ₹{perPerson.toFixed(2)}</h3>
        </div>
      ) : (
        <p>
          Please enter a valid bill amount, a non-negative tip percentage, and a
          positive whole number of people.
        </p>
      )}
    </div>
  );
};

export default App;
