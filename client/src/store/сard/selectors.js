const getCard = () => (state) => state.card
const getCardById = (id) => (state) => state.card.find(el => el.id === id)

export default { getCard, getCardById }