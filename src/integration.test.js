import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party'
  const unsuccessfulGuess = 'train';

  describe('no guessed words', () => {
    let store
    const initialState = { secretWord}
    beforeEach(() => {
      store = storeFactory(initialState);
    })
    test('updates state correctly for an unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccesfulGuess));
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{
          guessedWWord: unsuccessfulGuess,
          letterMatchCount: 3
        }]
      }
      expect(newState).toEqual(expectedState)
    })

    test('updates state correctly for a successful guess', () => {

    })
  })

  describe('some guessed words', () => {
    test('updates state correctly for an unsuccessful guess', () => {

    })

    test('updates state correctly for a successful guess', () => {

    })
  })
})