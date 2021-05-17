const keyPad = document.querySelector(".keypad");
const result = document.getElementById("result");

const operations = ["+", "-", "x", "/"];
const calculate = {
  "+": (a, b) => {
    return a + b;
  },
  "-": (a, b) => {
    return a - b;
  },
  x: (a, b) => {
    return a * b;
  },
  "/": (a, b) => {
    return a / b;
  },
};

const calc = {
  firstOperand: undefined,
  secondOperand: undefined,
  operation: "",
  result: 0,
};
let idxFirstOp = (idxSecondOp = 0); //indices : (idx = 10 if it's decimal and idx = 0 if it's integer)
let firstFlag = (secondFlag = false); //flags : (true if we still in that operand, false if we move to the operation or the other operand)

keyPad.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    let value = e.target.textContent;

    if (!calc.operation) {
      //if we don't type an operation yet (means we still in the 1st operand)
      if (!isNaN(Number(value)) || value === ".") {
        //if we type a digit or a point(we didn't enter an operation)
        if (firstFlag) {
          if (idxFirstOp === 10) {
            //get the decimal number and reset index to 0
            calc.firstOperand = (calc.firstOperand + value) / idxFirstOp;
            idxFirstOp = 0;
          } else if (value !== ".") {
            //if we didn't enter a decimal number yet
            value = calc.firstOperand + value;
            calc.firstOperand = Number(value);
          } else if (idxFirstOp === 0) {
            //to toggle between 0 and 10
            idxFirstOp += 10;
          } else {
            //concatenate old value with the new one
            calc.firstOperand = calc.firstOperand + value;
          }
        } else {
          //set the operation
          calc.firstOperand = Number(value);
        }
        firstFlag = true;
        updateUI(calc.firstOperand, calc.secondOperand, calc.operation);
      } else if (operations.includes(value)) {
        //check if the operation is in (+ - * /)
        calc.operation = value;
        updateUI(calc.firstOperand, calc.secondOperand, calc.operation);
      }
    } else {
      if (!isNaN(Number(value)) || value === ".") {
        //same logic as first operand
        if (secondFlag) {
          if (idxSecondOp === 10) {
            calc.secondOperand = (calc.secondOperand + value) / idxSecondOp;
            idxSecondOp = 0;
          } else if (value !== ".") {
            value = calc.secondOperand + value;
            calc.secondOperand = Number(value);
          } else if (idxSecondOp === 0) {
            idxSecondOp += 10;
          } else {
            calc.secondOperand = calc.secondOperand + value;
          }
        } else {
          calc.secondOperand = Number(value);
          secondFlag = true;
        }
        updateUI(calc.firstOperand, calc.secondOperand, calc.operation);
      } else if (value === "=") {
        if (operations.includes(calc.operation)) {
          calc.result = calculate[calc.operation](
            calc.firstOperand,
            calc.secondOperand
          );
          clearUI();
          showResult(calc.result);
          resetValues();
          calc.firstOperand = calc.result;
          idxFirstOp = idxSecondOp = 0;
          firstFlag = true;
          secondFlag = false;
        } else {
          alert("Wrong Operation");
        }
      }
    }
    if (value.toLowerCase() === "reset") {
      clearUI();
      resetValues();
      idxFirstOp = idxSecondOp = 0;
      firstFlag = secondFlag = false;
    }
    if (value.toLowerCase() === "del") {
      deleteChar();
      idxFirstOp = idxSecondOp = 0;

      if (calc.firstOperand === undefined) {
        firstFlag = false;
        if (calc.secondOperand === undefined) {
          updateUI("", "", calc.operation);
        } else {
          updateUI("", calc.secondOperand, calc.operation);
        }
      } else {
        secondFlag = false;
        updateUI(calc.firstOperand, calc.secondOperand, calc.operation);
      }
    }
  }
});

function updateUI(a, b = "", x = "") {
  result.value = `${a} ${x} ${b}`;
}
function showResult(res) {
  result.value = res;
}
function resetValues() {
  calc.firstOperand = undefined;
  calc.secondOperand = undefined;
  calc.operation = "";
}
function clearUI() {
  result.value = "";
}
function deleteChar() {
  if (calc.secondOperand === undefined) {
    if (calc.operation === "") {
      if (calc.firstOperand !== undefined) {
        let first = calc.firstOperand.toString();
        first =
          first.length > 1
            ? Number(first.slice(0, first.length - 1))
            : undefined;
        calc.firstOperand = first;
        firstFlag = true;
      }
    } else {
      calc.operation = "";
    }
  } else {
    let second = calc.secondOperand.toString();
    second =
      second.length > 1
        ? Number(second.slice(0, second.length - 1))
        : undefined;
    calc.secondOperand = second;
    secondFlag = true;
  }
}
