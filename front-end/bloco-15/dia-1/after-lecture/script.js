const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      }
    case NEXT_COLOR:
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      }
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

const nextColor =() => ({ type: NEXT_COLOR });
const prevColor = () => ({ type: PREVIOUS_COLOR });

const prevBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const value = document.querySelector('#value');

prevBtn.addEventListener('click', () => store.dispatch(prevColor()));
nextBtn.addEventListener('click',  () => store.dispatch(nextColor()));

store.subscribe(() => {
  const { colors, index } = store.getState();
  value.innerText = colors[index];
  value.style.backgroundColor = colors[index];
})
