import { createSelector } from 'reselect';

export const getNotesArr = store => store.notes.notesArr;

export const getFilterValue = store => store.notes.filter;

export const getFilteredNotesArr = createSelector(
  [getNotesArr, getFilterValue],
  (notesArr, filterValue) =>
    notesArr.filter(el => el.text.includes(filterValue)),
);

// export const getFilteredNotesArr = store => {
//   const notesArr = getNotesArr(store);
//   const filterValue = getFilterValue(store);

//   return notesArr.filter(el => el.text.includes(filterValue));
// };

// Принцип мемоизации
// add.cash = {
//   (1, 3) //4
//   (3, 5) //8
// }

// const add = (a, b) => a + b;

// add(1, 3) //4
// add(3, 5) //8
// add(1, 3)
