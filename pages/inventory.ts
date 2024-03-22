// // Project 1 : Inventory without classes
// let title = ["Gulliver's Travels", "The Return of the King","The Stand","Misery","The Advantures of Tom Sawyer", "The call of the Wild","A wrinkle in time","The war of the words","A Tale of Two cities", "War and Peace"];
// let author = ['Swift', 'Tolkien', 'Stephen King', 'Stephen King', 'Mark Twain', 'Jack London','Mandeleine','Wells','Charles','Leo'];
// let id = [11,24, 373, 416, 4, 36, 108,111,15,28];
// let category =['Fantasy', 'Fantasy', 'Horror', 'Horror', 'Adventure', 'Adventure','Science Fiction', 'Science Fiction','Historical', 'Historical'];
// let price = [400, 500, 300, 200, 400, 200, 600,500, 600,200];
// let quantity=[5,4, 6, 3, 4, 6, 5, 1,5,8];
// const AddNewItem = (tit:string, aut:string, ID:number, cat:string, pri:number, qua:number) : void => {
//     title.push(tit);
//     author.push(aut);
//     id.push(ID);
//     category.push(cat);
//     price.push(pri);
//     quantity.push(qua);
// };
// const DeleteItem = () : void => {
//     title.pop();
//     author.pop();
//     id.pop();
//     category.pop();
//     price.pop();
//     quantity.pop();
// };
// const Print = (tit:string, aut:string, ID:number, cat:string, pri:number, qua:number) : void => {
//             console.log(tit);
//             console.log(aut);
//             console.log(ID);
//             console.log(cat);
//             console.log(pri);
//             console.log(qua);
// };
// const SearchItem = (cat:string) : void => {
//     console.log(`Details are`)
//     for (let i=0; i<category.length; i++){
//             if(cat == category[i]){
//             Print (title[i],author[i],id[i],category[i],price[i],quantity[i]);
//         };
//     };
// };
// const ListAllItems =() : void => {
//     console.log(`Details of Inventory Available are`);
//     for (let i=0;i<title.length; i++){
//         Print (title[i],author[i],id[i],category[i],price[i],quantity[i]);
//     };
// };
// const SellItem = (tit : string) : void => 
// {
//     for(let i=0;i<title.length;i++)
//     {
//         if(tit = title[i])
//         {
//         quantity[i]-=1;
//         }
//     }
// };
// const RestockItem =(tit : string): void =>
// {
//     for(let i=0;i<title.length;i++)
//     {
//         if(tit = title[i])
//         {
//         quantity[i]+=1;
//         }
//     } 
// };
// SearchItem('Fantasy');
// // I have called only one function here. 
// //Because it may become still lenghthy to send you

// Project 2 - Inventory with Classes

class Inventory 
{
   title:string;
   author:string;
   id: number;
   category : string;
   price : number;
   quantity : number;

    constructor(title:string, author:string,id:number,category:string, price: number, quantity: number)
    {
    this.title= title;
    this.author = author;
    this.id= id;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
    };  

};
    let inven : Inventory[]=
    [
    new Inventory("Gulliver's Travels",'Swift',11,'Fantasy',400,5),
    new Inventory("The Return of the King",'Tolkien',24,'Fantasy',500,4),
    new Inventory("The Stand",'Stephen King',373,'Horror',300,6),
    new Inventory("Misery",'Stephen King',416, 'Horror', 200, 3),
    new Inventory("The Advantures of Tom Sawyer",'Mark Twain',4,'Adventure',400,4),
    ]

//Add Items to inventory
        inven.push(new Inventory("Gullivers travells","xyx",26,"History",400,5));//adding a new array

//closing the latest given array
        inven.pop();

//Update
const id=24;//updating a value equal to 25
for(let i=0;i<inven.length;i++)

{
    if(inven[i].id==id)
    {
        inven[i].quantity=200;
    }
};

// Search by Category

const SearchItem = (cat:string) : void => 
{
    let j=0;
    for(let i=0;i<inven.length;i++)
    {
        if(inven[i].category==cat)
        {
        console.log(inven[i]);
        j++;
        }
    
    };
    if(j==0)
    {
    console.log('Category not exists');
    };
};
SearchItem('fantasy');

// Restoring the Inventory

const title="Time Travels";
for (let i=0;i<inven.length;i++)
{
    if(inven[i].title==title)
    {
        inven[i].quantity+=1;
    };
};
console.log(inven);

// Selling the inventory 

const title1="Time Travels";
for (let i=0;i<inven.length;i++)
{
    if(inven[i].title==title1)
    {
        inven[i].quantity-=1;
    };
};
console.log(inven);