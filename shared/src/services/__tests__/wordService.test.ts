//mock firebase
import { Word } from '../../types';
import { createWord, deleteWord, getWord, getWordsByUser, updateWord } from '../wordService';
import { clearFirestore } from './setup';

// Mock Firebase
// vi.mock('firebase/firestore');
// vi.mock('../../firebase/config');
beforeEach(async () => {
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
    it('word created should not be duplicated with the existing word', async () => {
      await createWord(testWord);
      const result = await createWord(testWord);
      expect(result).toBeNull();
    });
  });
  describe('getWordByUser', () => {
    it('should return an array of words', async () => {
      const words = await getWordsByUser(testWord.userId);
      expect(Array.isArray(words)).toBeTruthy();
    });
  });
  describe('getWord', () => {
    it('should return the word when it exists', async () => {
      // Arrange - create a word first so we have something to fetch
      const created = await createWord(testWord);
      expect(created).not.toBeNull();

      // Act
      const result = await getWord(created!.id);

      // Assert
      expect(result).not.toBeNull();
      expect(result!.word).toBe(testWord.word);
      expect(result!.userId).toBe(testWord.userId);
    });

    it('should return null when word does not exist', async () => {
      // Act - use an id that does not exist
      const result = await getWord('non-existent-id');

      // Assert
      expect(result).toBeNull();
    });
  });

  describe('updateWord', () => {
    it('should update the word fields in Firestore', async () => {
      // Arrange - create a word to update
      const created = await createWord(testWord);
      expect(created).not.toBeNull();

      // Act - update the definition
      await updateWord(created!.id, { definition: 'updated definition' });

      // Assert - fetch it back and check the new value
      const updated = await getWord(created!.id);
      expect(updated!.definition).toBe('updated definition');
    });
  });

  describe('deleteWord', () => {
    it('should delete the word so it no longer exists', async () => {
      // Arrange - create a word to delete
      const created = await createWord({ ...testWord, word: 'temporary' });
      expect(created).not.toBeNull();

      // Act
      await deleteWord(created!.id);

      // Assert - word should no longer be found
      const result = await getWord(created!.id);
      expect(result).toBeNull();
    });
  });
});
