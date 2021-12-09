import reducer, { modalToggle } from './modalSlice'

describe('Test modalSlice', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        modal: false
      }
    )
  })

  test('should change state value to true', () => {
    const previousState = {
      modal: false
    }
    expect(reducer(previousState, modalToggle(true))).toEqual(
      {
        modal: true
      }
    )
  })
})