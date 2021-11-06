// these are just examples
// they don't do anything yet
const getCard = () => (state) => state.card
const getCardById = (id) => (state) => state.card.find(el => el.id === id)

export default {getCard, getCardById}