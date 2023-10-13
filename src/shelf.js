function shelfBook(book1, shelfArray) {
  if (shelfArray.length >= 3) {
    return shelfArray;
  } else {
    return shelfArray.unshift(book1);
  }
}

function unshelfBook(bookName, shelfArray) {
  for (var i = 0; i < shelfArray.length; i++) {
    if (shelfArray[i].title === bookName) {
      // console.log(shelfArray[i].title);
      shelfArray.splice(i, 1);
      return shelfArray;
    }
  }
}
function listTitles(shelfArray) {
  var titleList = "";
  for (var i = 0; i < shelfArray.length; i++) {
    if (titleList === "") {
      titleList += shelfArray[i].title;
    } else {
      titleList += ", " + shelfArray[i].title;
    }
  }
  return titleList;
}

function searchShelf(shelfArray,title){
  for (var i = 0; i < shelfArray.length; i++) {
    if (shelfArray[i].title === title){
      // console.log(shelfArray[i].title);
      return true;
    }
  }
  return false;
}



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};