function createTitle(newTitle) {
  return `The ${newTitle}`;
}

function buildMainCharacter(newName,newAge,newPronouns){
  var newCharacter = {
    name : newName,
    age : newAge,
    pronouns : newPronouns
  }
  return newCharacter;
}

function saveReview(reviewString, reviewsArray){
  if (reviewsArray.includes(reviewString)){
    return reviewsArray;
  }else{
    return reviewsArray.push(reviewString)
  }
}

function calculatePageCount(bookTitle){
  return bookTitle.length * 20;
}

function writeBook(bookTitle,bookCharacter,bookGenre){
  return newBook = {
    title : bookTitle,
    mainCharacter : bookCharacter,
    pageCount :  calculatePageCount(bookTitle) ,
    genre : bookGenre
  }
}

function editBook(oldBook){
  oldBook.pageCount = oldBook.pageCount * .75;
  return oldBook;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}