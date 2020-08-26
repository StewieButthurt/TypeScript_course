                                                        // interfaces

// interfaces - это "список требований", в нем мы описываем какие параметры какие типы жолжны иметь

// Пример с обычной функцией

// function printLabel(labelObj: { label: string }) {
//     console.log(labelObj)
//     console.log(labelObj.label)
// }
//
// let myObj = { size: 10, label: 'Size 10 Object' };
//
// printLabel(myObj)

// Перепишем с использованием интерфейса

interface LabeledValue {
    label: String;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label)
}

let myObj = { size: 10, label: 'Size 10 Object' }
printLabel(myObj)

// Пример 2

// readonly - только для чтения, нельзя изменять

// param? - не обязательный параметр
interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 1,
        height: 1
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12345',
    size: {
        width: 30,
        height: 20
    },
    color: 'blue'
}