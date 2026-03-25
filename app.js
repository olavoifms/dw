
const container = document.querySelector(`#container`)

// const quadrados = document.createElement(`div`)

// const filhao = document.createElement(`div`)
// Container.appendChild(filhao)
// filhao.id = `filhao`

// const filhote = document.createElement(`div`)
// filhao.appendChild(filhote)
// filhote.id = `filhote`

// const titulo = document.createElement(`p`)
// filhote.appendChild(titulo)
// titulo.id = `titulo`


// const descri = document.createElement(`p`)
// filhote.appendChild(descri)
// descri.id = `descri`

// const fot = document.createElement(`img`)
// filhote.appendChild(fot)
// fot.id = `fot`


// const price = document.createElement(`p`)
// filhote.appendChild(price)
// price.id = `price`

// const branco = document.createElement(`p`)
// filhao.appendChild(branco)
// branco.id = `branco`


// const branco1 = document.createElement(`p`)
// filhao.appendChild(branco1)
// branco1.id = `branco1`

function criarCard() {
    // card - div
      // title - h1
      // description - p
      // image - img
      // value - p
    //botoes - div
      // botao - div - Ir
      // botao - div - Voltar

    // Referenciar o card e os botoes ao container

    const card = document.createElement(`div`)
    container.appendChild(card)
    card.id = `card`

    const title = document.createElement(`h1`)
    card.appendChild(title)
    title.id = `title`
    title.innerText = 'Headphone Sennheiser HD200 Pro'
    
    const desc = document.createElement(`p`)
    card.appendChild(desc)
    desc.id = `desc`
    desc.innerText = 'Os Headphones monitores HD 200 PRO proporcionam um som de estúdio poderoso onde quer que você esteja'

    const image = document.createElement(`img`)
    card.appendChild(image)
    image.id = `image`
    image.src = 'https://images6.kabum.com.br/produtos/fotos/sync_mirakl/153046/xlarge/Headphone-Sennheiser-HD200-Pro-Preto_1770666852.jpg'

    const value = document.createElement(`p`)
    card.appendChild(value)
    value.id = `value`
    value.innerText = 789.9

    const botoes = document.documentElement
    
}

criarCard();