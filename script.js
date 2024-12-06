const rows = document.querySelectorAll("tr");
const names = document.querySelectorAll("td:first-child");
const countries = document.querySelectorAll("td:last-child");
let nameSortedAsc = false;
let countrySortedAsc = false;

function sortTableData(n) {
  let data = [];

  for (let i = 0; i < names.length; i++) {
    data[i] = [names[i].innerHTML, countries[i].innerHTML];
  }

  if (n == 0) {
    if (nameSortedAsc) {
      data.reverse();
      nameSortedAsc = false;
    } else {
      data.sort();
      nameSortedAsc = true;
    }
    for (let i = 0; i < names.length; i++) {
      names[i].innerHTML = data[i][0];
      countries[i].innerHTML = data[i][1];
    }
  } else {
    if (countrySortedAsc) {
      data.reverse();
      countrySortedAsc = false;
    } else {
      data.sort(function (a, b) {
        return a[1].localeCompare(b[1]);
      });
      countrySortedAsc = true;
    }
    for (let i = 0; i < names.length; i++) {
      names[i].innerHTML = data[i][0];
      countries[i].innerHTML = data[i][1];
    }
  }
}
