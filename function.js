/* 
Function
1. function namaFunction(){}
2. let cetakNama = function() {} // function expression
3. Arrow function
let cetakNama = () => {}
*/

// function printHari() {
//   console.log("Hari ini adalah hari senin");
// }

// printHari();
// printHari();
// printHari();

// function cetakHari(hari) {
//   console.log("Hari ini adalah hari ", hari);
// }

// cetakHari("Rabu");

// function cetakDataDiri(nama = "Adam", umur) {
//   console.log("Halo nama saya ", nama, " Saya berumur", umur);
//   console.log(`Halo nama saya ${nama} Saya berumur ${umur}`);
// }

// cetakDataDiri(undefined, 14);

// let x; // global scope

// function hitungDuaAngka(x, y) {
//   let result = x + y;
//   x = result;
//   let angka = 12; // local scope
//   return angka;
// }

// console.log(hitungDuaAngka(2, 5));
// rest parameter = untuk menampung banyak value
// function hitungBanyakAngka(...angka) {
//   let result = 0;

//   for (let x of angka) {
//     console.log(x);
//     result += x;
//   }

//   console.log("Hasil akhirnya adalah ", result);
// }

// hitungBanyakAngka(1, 2, 3, 4, 5);

// let cetakNama = function (...angka) {
//   console.log("Nama saya adalah", angka);
// };

// cetakNama("Adam", "Joko");

let cetakNama = (...karakter) => {
    console.log("Hello world ", karakter);
  };
  
  cetakNama("AB", "BC", "CD");

function hitungBanyakAngka(...angka) {
  let result = 0;
  console.log(angka);
  console.log(angka instanceof array);

  for (let x of angka) {
    console.log(x)
    result += x;
  };
    
};
hitungBanyakAngka(1, 2, 3, 4,)