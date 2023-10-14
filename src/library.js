function createLibrary(libraryName) {
  return library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  // var keys = Object.keys(library.shelves);
  // console.log(keys);
  // cool stuff from Jake, not using
    // library.shelves[book.genre].push(book)

  Object.keys(library.shelves).forEach(key => {
    if (key === book.genre) {
      // console.log(key); // name of current key
      // console.log(library.shelves[key]) // value of current key
      library.shelves[key].push(book)
    }
  });
  //notation for myself:
  // forEach is a method for Array that does a function based on what information you give it
  //in this case, I'm looking through each key inside of library.shelves, and seeing if they
  // are === to book.genre. If it is true, then it add the book to that specific shelf, using key
  // I'm not entirely sure how => works, it seems like a shorthand for how to write functions
}

function checkoutBook(library, bookTitle, genre) {
  var finalMessage = ""
  // book and genre and strings
  // for each of the keys in library.shelves, find the key(which is the genre)
  // that matchs the genre provided
  Object.keys(library.shelves).forEach(key => {
    if (key === genre) {
      // console.log(i);
      /*
      find correct bookshelf
      check if im in the right spot
      console.log(key);
      console.log(typeof(library.shelves[key]));
      console.log(library.shelves[key]);
      console.log(library.shelves.fiction); //this is the same
      in bookshelf, for each book, check title, remove select book with same title
      console.log(library.shelves[key][0].title);
      console.log(library.shelves[key].length);
      */
      for (var i = 0; i <= library.shelves[key].length; i++) {
        if (library.shelves[key].length === 0) {
          //if shelf is empty, book doesn't exsist, thus we no copies
          // console.log("MISSED");
          finalMessage = `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`
        }
        else if (library.shelves[key][i].title === bookTitle) {
          //if the bookTitle matchs one of the titles we have, 
          // console.log("GOT IT");
          library.shelves[key].splice(i, 1);
          finalMessage = `You have now checked out ${bookTitle} from the ${library.name}.`
        }
        else { // assuming we didn't match a single time in shelf, means books isn't here
          // console.log("MISSED");
          finalMessage = `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`
        }
      }
      //  library.shelves[key].splice(0,1);
    }
  })
  return finalMessage;
}

function takeStock(library, genre) {
  var finalMessage = ""
  var totalStock = 0;
  if (genre === undefined){
    // console.log("no genre, get all")
    Object.keys(library.shelves).forEach(key => {
      totalStock += library.shelves[key].length;
      // console.log(totalStock);
      finalMessage = `There are a total of ${totalStock} books at the ${library.name}.`
    });
  }else{
    Object.keys(library.shelves).forEach(key => {
      if (key === genre) {
        // console.log("Correct genre");
        totalStock = library.shelves[key].length;
        // console.log(totalStock);
        finalMessage = `There are a total of ${totalStock} ${genre} books at the ${library.name}.`
      }
    });
  }
  
  return finalMessage;
}



module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};