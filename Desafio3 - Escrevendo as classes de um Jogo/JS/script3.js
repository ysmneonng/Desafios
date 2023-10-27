class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type

        if (this.type = "mago") {
            this.attack = "magia"
        }else if (this.type = "guerreiro") {
            this.attack = "espada"
        }else if (this.type = "monge") {
            this.attack = "artes marciais"
        } else if (this.type = "ninja") {
            this.attack = "shuriken"
        }
    }
    atacar(){
        console.log(`O ${this.type} atacou usando ${this.attack}`)
    }
}

let heroi1 = new hero("Kitana", 10048, "Ninja")

heroi1.atacar()
