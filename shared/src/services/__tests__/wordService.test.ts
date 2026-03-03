//mock firebase
import { Word } from '../../types';
import { createWord, getWord, getWordsByUser } from '../wordService';
import { clearFirestore } from './setup';

// Mock Firebase
// vi.mock('firebase/firestore');
// vi.mock('../../firebase/config');
beforeAll(async () => {
  await clearFirestore();
});
const testWord = {
  id: '1',
  word: 'hello',
  definition: 'a greeting',
  partOfSpeech: 'exclamation',
  example: 'hello world',
  phonetics: '',
  sourceUrl: '',
  categoryId: '',
  userId: '1',
} as Word;
describe('wordService', () => {
  describe('createWord', () => {
    it('should create a word and return it with an id', async () => {
      // Arrange - set up test data
      // Act - call the function
      let result = await createWord(testWord);

      // Assert - check the result
      //first check - not null
      expect(result!.id).toBeDefined();
    });
    it('word created should not be duplicated with the existing word', async () => {});
  });
  describe('getWordByUser', () => {
    it('should return an array of words', async () => {
      let words = getWordsByUser(testWord.userId);
      expect(Array.isArray(words)).toBeTruthy;
    });
  });
  describe('getWord', () => {
    it('should return word or null', async () => {
      getWord(testWord.id);
    });
  });
  describe('updateWord', () => {
    it('should call updateDoc', async () => {});
  });
  describe('deleteWord', () => {
    it('should call deleteDoc', async () => {});
  });
});
