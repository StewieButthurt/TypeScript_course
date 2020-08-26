// interface
// readonly - только для чтения, нельзя изменять
// Пример с обычной функцией
function printLabel(labelObj) {
    console.log(labelObj);
    console.log(labelObj.label);
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
// interface Rect {
//     readonly id: string
// }
