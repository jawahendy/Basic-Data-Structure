/////////////////////////////////////////////
//soal 1 have 5 elemen with str,int bool
/////////////////////////////////////////////

const setarray = [1, true, 'aja', 2, false];

// console.log(setarray)

////////////////////////////////////////////////
//soal 2 alfabet1 must not b
///////////////////////////////////////////////

var alfabet = ["a", "b", "c", "d"];
alfabet[0] = "a";
alfabet[1] = "x";
alfabet[2] = "c";
alfabet[3] = "d";
console.log(alfabet);

//////////////////////////////////////////////////
//soal 3 insert to array before and after array
/////////////////////////////////////////////////

function InsertNumber(arr) {
    arr.unshift('One', 2, 3);
    arr.push(7, 8, 'Nine');
    return arr;
  }
  console.log(InsertNumber([4, 5, 6]));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//soal 4 using pop and shift
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
push ( some_value ) : merupakan fungsi yang  digunakan untuk memasukkan value ke sebuah array dan disimpan di paling akhir / paling kanan.
pop ( ) : digunakan untuk menghapus / remove isi array paling akhir.
shift ( ) : digunakan untuk menghapus / remove isi array paling awal.
unshift ( some_value ) : fungsi yang digunakan untuk memasukkan value ke sebuah array tetapi disimpan di paling awal / ujung kiri.*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function usingpopShift(arr) {
    const popped  = arr.pop(); 
    const shifted = arr.shift() ; 
    return [shifted, popped];
  }
  
  console.log(usingpopShift(['cool', 'is', 'not', 'man']));

/////////////////////////////////////////////////////////////////////////////////////////////////////
//soal 5 splice(2,3) start index in number 2 and total delete 3 elemen in start 2
//splice()= mengubah konten dari array dengan menghapus elemen yang ada dan/atau menambah elemen baru
//////////////////////////////////////////////////////////////////////////////////////////////////////

function Sumarraywithsplice(arr) {
    
    arr.splice(2,2);
    
    return arr.reduce((a, b) => a + b);
  }
  console.log(Sumarraywithsplice([2, 5, 1, 5, 2, 1]));

////////////////////////////////////////////////////////////////////////////////////////////////////
//soal 6 = change DarkGoldenRod to DarkSalmon and insert "DarkSalmon", "BlanchedAlmond" to array
////////////////////////////////////////////////////////////////////////////////////////////////////

function insertsplice(arr) {
    
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    
    return arr;
  }
  
  console.log(insertsplice(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

///////////////////////////////////////////////////////
//soal no 7 = using slice untuk print warm and sunny
//slice() == untuk memeotong array 
//start index 2 and end with number 4
///////////////////////////////////////////////////////

function forecast(arr) {
    
    return arr.slice(2,5);
  }
  
  console.log(forecast(['lazy', 'diligent', 'She', 'is', 'Beautifull', 'smart']));

///////////////////////////////////////////////
//soal 8 spread operator
//////////////////////////////////////////////

function Spread(arr, num) {
    let ArrNew = [];
    while (num >= 2) {
      ArrNew.push([...arr]);
      num--;
    }
    return ArrNew;
  }
  console.log(Spread([true, false, true], 2));

////////////////////////////////////////////////////
//soal 9 combine spread operator
//////////////////////////////////////////////////

function spreadOut() {
    let insertarr = ['to', 'code'];
    let sentence = ['learning', ...insertarr, 'is', 'fun'];
    return sentence;
  }
  
  
  console.log(spreadOut());

////////////////////////////////////////////////////////////////////////////
//soal 10 indexOf
//indexOf()= mengembalikan sebuah index saat memanggil 
//           objek  String pertama kali dengan value yang di tentukan
////////////////////////////////////////////////////////////////////////////

function Speedcheck(arr, elemen) {

    // return arr.indexOf(elemen) != -1;

    // Or

    return arr.indexOf(elemen) >= 0 ? true : false;
  }
  console.log(Speedcheck(['hendy', 'joko', 'juko'], 'jeno'));
  
/////////////////////////////////////////////////
//soal 11 array using for loop
////////////////////////////////////////////////

function filtered(array, elemen) {
    let ArrNew = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i].indexOf(elemen) == 0) {
        ArrNew.push(array[i]);
      }
    }
    return ArrNew;
  }
  
  console.log(filtered([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

/////////////////////////////////////////////////
//soal 12 multi dimension array
////////////////////////////////////////////////

let NestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array',['deep']],
    ['mutate', 1327.98, 'splice', 'slice', 'push',[['deeper']]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth',[[['deepest']]]]
  ];

// console.log(NestedArray)

////////////////////////////////////////////////////
//soal 13 Pairs to JavaScript Objects
////////////////////////////////////////////////////

const drinks = {
    chattime: 25,
    promisesoul: 32,
    xinfutang: 28
  };
  
  drinks["Vegie"] = 13,
  drinks["coffe"] = 35,
  drinks["Tuku"] = 27,
  
  console.log(drinks);

/////////////////////////////////////////////////////////////////////
//soal 14  Object Nested Within an Object change online 42 to 45
////////////////////////////////////////////////////////////////////

const Activity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  Activity.data.online = 45,
  
  
  console.log(Activity);

///////////////////////////////////////////////////
//soal 15 Names with Bracket Notation
//////////////////////////////////////////////////

const color = {
    Red: 1,
    Blue: 2,
    White: 3,
    Black: 4,
    Red: 5,
    Grey: 6
  };
  
  function checkInvent(scan) {
      
  return color[scan];
  }
  
  console.log(checkInvent("Red"));

////////////////////////////////////////////////////
//soal 16 Remove Object Properties using delete  ///
///////////////////////////////////////////////////

const color = {
    Red: 1,
    Blue: 2,
    Gray: 3,
    White: 4,
    Black: 5,
    Orange: 6
  };
  
  delete color.Orange;
  delete color.Blue;
  delete color.Gray;
 
  
  console.log(color);

/////////////////////////////////////////////////////////////////////////
//soal 17 Object has a Property                                     /////
//hasOwnProperty () = mengembalikan boolean yang menunjukkan        ////
//                    apakah objek memiliki properti yang ditentukan ///
//                    sebagai properti sendiri                      ////
////////////////////////////////////////////////////////////////////////

const users = {
    Hendy: {
      age: 17,
      online: true
    },
    Joko: {
      age: 32,
      online: true
    },
    Soro: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function Online(obj) {
    while (
      obj.hasOwnProperty("Hendy") &&
      obj.hasOwnProperty("Joko") &&
      obj.hasOwnProperty("Soro") &&
      obj.hasOwnProperty("Ryan")
    ) {
      return true;
    }
    return false;
  }
  
  console.log(Online(users));

////////////////////////////////////////////////////////////
//  soal 18 Keys of an Object with a for...in Statement ////
////////////////////////////////////////////////////////////

const Account = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function Online(usersObj) {
    let result = 0;
    for (let user in usersObj){
      if (usersObj[user].online === true){
        result++;
      }
    }
    return result;
  }
  
  console.log(Online(Account));

///////////////////////////////////////////////////
//soal 19 All Object Keys with Object.keys()
//////////////////////////////////////////////////

const user = {
    Hendy: {
      age: 17,
      online: false
    },
    Trino: {
      age: 42,
      online: true
    },
    Irfan: {
      age: 8,
      online: false
    },
    Inggrid: {
      age: 39,
      online: true
    },
    Budi:{
      age:90,
      online: false
    }
  };
  
  function getUsers(obj) {
  return Object.keys(obj);
  
  }
  
  console.log(getUsers(user));

///////////////////////////////////////////////////
//soal 20 Array Stored in an Object
//////////////////////////////////////////////////
const user = {
    name: 'Hendy',
    age: 17,
    data: {
      username: 'Heiscool',
      joinDate: 'March 26, 2019',
      organization: 'Celerates',
      friends: [
        'tika',
        'irfan',
        'budi'
      ],
      location: {
        city: 'Jakarta',
        state: 'Sawangan',
        country: 'Indonesia'
      }
    }
  };
  
  function addFriend(userObj, friend) {
     userObj.data.friends.push(friend);
    return userObj.data.friends;
  }
  
  console.log(addFriend(user, 'Inggrid'));