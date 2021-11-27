
class Client {
    #id: string
    #firstName: string
    #age: number

    constructor(firstName: string, age: number, id: string = null) {
        this.#firstName = firstName
        this.#age = age
        this.#id = id
    }

    get id() {
        return this.#id
    }

    get firstName() {
        return this.#firstName
    }

    get age() {
        return this.#age
    }
}

export { Client }