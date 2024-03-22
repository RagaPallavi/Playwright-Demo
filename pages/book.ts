// Project 1 : Define Book without Classes
let bookTitle = ['letusc','automation testing','testing techniques'];
let bookAuthor = ['yashwanth', 'Ram Manthry', 'Ram'];
let bookISBN = [4587, 5214, 6253];
let bookStatus = ['available', 'checked out', 'available'];
const Displaybook = (bookTitle: string[], bookAuthor:string[], bookISBN:number[], bookStatus:string[]) : void => {
    for (let i=0; i<bookTitle.length; i++){
       console.log(`Details of ${i+1}th book available is`);
       console.log(`Book Title :${bookTitle[i]}`);
       console.log(`Book Author :'${bookAuthor[i]}`);
       console.log(`Book ISBN : ${bookISBN[i]}`);
       console.log(`Book Status : ${bookStatus[i]}`);
    };
};
const Statusbook = (bookStatus:string[]):void => {
    for (let i=0;i<bookStatus.length; i++){
        if(bookStatus[i]=='checked out'){
            bookStatus[i]='available';
        }
        else{
            bookStatus[i]='checked out';
        }
    }

};
Displaybook(bookTitle, bookAuthor, bookISBN, bookStatus);
console.log(`Changed Status of Available books is`);
Statusbook(bookStatus);
Displaybook(bookTitle, bookAuthor, bookISBN, bookStatus);

// Project 2 : Define book With Classes

class Book{
    readonly title:string;
    readonly author:string;
    readonly isbn: number;
    status : string;
    
    constructor(title:string, author:string,isbn:number,status:string){
        this.title= title;
        this.author = author;
        this.isbn = isbn;
        this.status=status;
    }
    Display(){
        console.log(`Details of book is Book Title :${this.title}, Book Author: ${this.author}, Book ISBN : ${this.isbn},Book Status : ${this.status}`);
    }
    Changestatus(sta:string){
        this.status=sta;
    }
};
const firstBook = new Book('Testing Techniques','Ram Mantry',4598,'Available');
console.log(firstBook.Display());
firstBook.Changestatus('checkedout');
