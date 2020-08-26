
                                                            // тип boolean
const isFetching: boolean = true
const isLoading: boolean = false


                                                            // тип number
const int: number = 42
const float: number = 4.2
const num: number = 3e10

// _______________________________________________________________

                                                            // тип string

const message: string = 'Hello TP'


// _______________________________________________________________

// типизированный массив
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]


// типизированный массив, другая форма записи
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

// типизированный массив строк
const words: string[] = ['Hello', 'TypeScript']

// __________________________________________________________________

                                                        // Тип данных Tuple

// позволяет указать допустимые типы данных в массиве

const contact: [string, number] = ['Vyacheslav', 1234567]

// __________________________________________________________________

                                                                // any

// Тип данных  any, если его задать, то переменную можно будет переопределить

let variable: any = 42
variable = 'string'

// _______________________________________________________________

                                                                // Функции


// запись void значит, что функция ничего не возвращает
function sayMyName(name: string):void {
    console.log(name)
}

sayMyName('Хайзенберг')


// _______________________________________________________________

                                                        // тип данных Never

// указываем этот тип, если функция со 100% вероятностью делает return или выбрасывает ошибку
// другими словами, она никогда не будет выполнена до конца

function throwError(message: string): never {
    throw new Error(message)
}

// function infinite(): never {
//     while(true) {
//
//     }
// }

// _________________________________________________________________


                                                                // Type

// позволяет создавать собственные типы

// именованные типы дают больше понимание что происходит

type Login = string

const login: Login = 'admin'

// можно создать тип, который может быть включать в себя несколько типов данных

type ID = string | number
const id1: ID = 'test'
const id2: ID = 2
                                                            // Null, undefined

type SomeType = string | null | undefined