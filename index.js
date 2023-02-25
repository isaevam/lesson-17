"use strict";
const capitalize = (
  strInput = document.getElementById("inputString").value
) => {
  let strOutput = strInput.charAt(0).toUpperCase();
  for (let i = 0; i < strInput.length; i++) {
    if (strInput.charAt(i) === " ") {
      strOutput += strInput.charAt(i + 1).toUpperCase();
    } else {
      strOutput += strInput.charAt(i + 1);
    }
  }
  document.getElementById("outputString").value = strOutput;
};

const truncate = (
  strInput = document.getElementById("inputText").value,
  maxLenght = document.getElementById("inputMaxlenght").value
) => {
  if (+maxLenght < strInput.length) {
    const strOutput = strInput.slice(0, maxLenght - 3) + "...";
    document.getElementById("outputText").value = strOutput;
  } else {
    document.getElementById("outputText").value = strInput;
  }
};

const filterRange = (
  strInput = document.getElementById("inputArray").value,
  from = document.getElementById("inputFrom").value,
  to = document.getElementById("inputTo").value
) => {
  const indexFrom = strInput.indexOf(from);
  const indexTo = strInput.indexOf(to);
  document.getElementById("outputFilterArray").value = strInput.slice(
    indexFrom,
    indexTo + 1
  );
};

const sortArr = (strInput = document.getElementById("inputArr").value) => {
  let arr = strInput.split(",");
  arr.sort((a, b) => a - b);
  document.getElementById("outputSortArr").value = arr;
};

const sortArrStr = (
  strInput = document.getElementById("inputArrStr").value
) => {
  let arr = strInput.split(",");
  arr.sort((a, b) => a.length - b.length);
  document.getElementById("outputSortArrStr").value = arr;
};

const averageAge = (
  strInput = document.getElementById("inputObject").value
) => {
  const arr = JSON.parse(strInput);
  let count = 0;
  const age = arr.reduce((acc, item) => {
    if (item.age > 17 && item.age < 55) {
      count++;
      acc += item.age;
    }
    return acc;
  }, 0);
  const average = age / count;
  document.getElementById("outputAveraAge").value = average;
};

const sortUsers = (
  strInput = document.getElementById("inputArrayName").value
) => {
  const arr = JSON.parse(strInput);
  arr.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA > nameB) {
      return 1;
    }
    if (nameA < nameB) {
      return -1;
    }
    if (nameA == nameB) {
      if (a.age > b.age) {
        return 1;
      }
      if (a.age < b.age) {
        return -1;
      }
      return 0;
    }
  });
  console.log(arr);
  document.getElementById("outputSortName").textContent = JSON.stringify(arr);
};

const minMaxAge = (
  strInput = document.getElementById("inputMinMaxAge").value
) => {
  const arr = JSON.parse(strInput);
  const age = arr.reduce(
    (acc, item) => {
      if (item.age > acc.min) {
        acc.min = item.age;
      }
      if (item.age > acc.max) {
        acc.max = item.age;
      }
      return acc;
    },
    { min: Infinity, max: -Infinity }
  );
  document.getElementById("outputMinMaxAge").value = JSON.stringify(age);
};

const unique = (strInput = document.getElementById("inputValues").value) => {
  const arr = strInput.split(",");
  const uniqueValues = [];
  arr.forEach((item) => {
    if (!uniqueValues.includes(item)) {
      uniqueValues.push(item);
    }
  });
  document.getElementById("outpuUniqueValues").value = uniqueValues;
};
