//mock firebase
import { createWord, getWord } from '../wordService';

// Mock Firebase
vi.mock('firebase/firestore');
vi.mock('../../firebase/config');

describe('wordService', () => {
  describe('createWord', () => {
    it('should create a word and return it with an id', async () => {
      // Arrange - set up test data
      // Act - call the function
      // Assert - check the result
    });
  });
});
