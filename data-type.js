/*1. Primitive
    a. String --> Karakter !@#$!%!!
        "ABC", "DEF", "12412"
    b. Number --> Angka
        123, 12.4
    c. Boolean --> Flagging (Penanda)
        true, false
    d. BigInt (Big Integer) 
        12n, 14n, 1n
        1n / 4n = 5n
    e. Undefined --> Valuenya kosong
        let undefinedExample; // undefined
    f. null --> Value kosong
        let nullExample = null // null
2. Complex

*/
// let word; // undefined
// let word = 214.214; // number
// let word = 14n; // bigint
// let word = null; // null

// typeof --> untuk mengetahui tipe data

// let isDataValid = true;

/**
 * String Operation
 */

// let word1 = "QWERTY";
// let word2 = "UIOP";
// console.log(word1, " HALLO " ,word2);
// console.log(word1 + " HALLO " + word2);
// console.log(`${word1} HALLO ${word2}`); // Interpolation (back tick)

/* 
Conversion --> Konversi tipe data
1. String
2. Number
3. Boolean -->  
    a. Ada text (string)
    b. Bukan 0
    c. true
4. BigInt
*/

// NaN = Not a Number // Bukan angka --> tidak bisa dikonversi

// let number1 = 12 - 4;
// console.log(typeof number1);
// number1 = Number(number1);
// console.log(typeof number1);
// number1 = Boolean(number1);
// console.log("Value: ", number1);
// console.log(typeof number1);
// // number1 = BigInt(number1);
// console.log(number1);
// console.log(typeof number1);

// let number2 = "2";
// console.log(number1 - number2);

/* Operasi String
1. charAt() --> mendapatkan vallue dari index tertentu
2. length --> panjang karakter
*/

// const word = "ABCDE"
// console.log(word.charAt(2));
// console.log(word.length);

/**
 * Complex Data Type

1. Object --> Analogi seperti benda  {}
             Punya Properti
            Key harus uniq
2. Array --> []
             Menampung banyak data dengan tipe yang berbeda
*/

// let object1 = {}
// let manusia1 = {
//   nama: "Adam",
//   address: "Bekasi",
//   umur: 54,
// };

// manusia1.nama = "Hilmy"

// let object1 = new Object();
// console.log(manusia1["nama"]);
// console.log(manusia1);
// console.log(typeof manusia1);

// let array1 = ["abc", 123, true, null, undefined, {nama: "adam"}];
// console.log(array1);
// console.log(array1);
// console.log(array1 instanceof Array);

let user = [
    { nama: "Adam", address: "Bekasi" },
    { nama: "Hilmy", address: "Jonggol" },
    { nama: "Hilmy", address: "Jonggol" },
    { nama: "Hilmy", address: "Jonggol" },
    { nama: "Hilmy", address: "Jonggol" },
    { nama: "Hilmy", address: "Jonggol" },
    { nama: "Hilmy", address: "Jonggol" },
];

user.nama = "Bdul"
console.log(user);
  
//   console.log(typeof user[0].nama);
  // console.log(typeof user[0].nama);
  
  // let mobil = { warna: "Hijau", brand: "Volvo", klakson: "Tinn" };
  // console.log("Before:", mobil);
  // mobil.roda = "Bulat";
  
  // console.log("After add: ", mobil);
  
  // delete mobil["warna"];
  // console.log("warna", mobil);
  
  // console.log(console.log(user[0].nama));
  // console.log(array1.slice); // mengambil beberapa bagian