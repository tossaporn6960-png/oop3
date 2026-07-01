function vat(price: number): number{
    return price*7/100
}
let price1: number = 200;
let price2: number = 750;
console.log(`สินค้าราคา ${price1}บาท ภาษีมูลค่าเพิ่ม ${vat(price1)}บาท`);
console.log(`สินค้าราคา ${price2}บาท ภาษีมูลค่าเพิ่ม ${vat(price2)}บาท`);

function hello(name: string): string{
    return `ยินดีต้อนรับ คุณ ${name} สู่เว็บไซต์ NPRU`;
}

console.log(hello("tossaporn"));