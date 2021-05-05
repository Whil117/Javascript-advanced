const character = {
    name:'Ivan',
    last_name : 'Garcia',
    age: 19,
    city:{
        street:'Villa',
        lng: 34.2324,
        mtrs: 4443.23,
        cop:324442324342,

    }
}

const persona2 = {...character}
persona2.name = 'Whil'
persona2.last_name = 'Exe'

console.log(character)
console.log(persona2)





//EXERCISE #1//
//////////////////////////////////////////////////////////////////////////////
const userDate = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    }
  }

  const userDate2 = {...userDate}
  userDate2.id = 2
  userDate2.name = persona2.name


  console.log(userDate)
  console.log(userDate2)