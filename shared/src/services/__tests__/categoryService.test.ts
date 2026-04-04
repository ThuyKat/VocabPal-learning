import { clearFirestore } from './setup';
import { Category } from '../../types';
import {
  createCategory,
  getCategoriesByUser,
  getCategory,
  updateCategory,
  deleteCategory,
} from '../categoryService';

beforeEach(async () => {
  await clearFirestore();
});

const testCategory = {
  id: '1',
  name: 'category1',
  userId: '1',
} as Category;

describe('categoryService', () => {
  describe('createCategory', () => {
    it('should create a category and return it with an id', async () => {
      let result = await createCategory(testCategory);
      expect(result?.id).toBeDefined();
    });
    it('category created should not be duplicated with the existing category', async () => {
      await createCategory(testCategory);
      let result = await createCategory(testCategory);
      expect(result).toBeNull();
    });
  });

  describe('getCategoryByUser', () => {
    it('should return an array of categories', async () => {
      let result = await getCategoriesByUser(testCategory.userId);
      expect(Array.isArray(result)).toBeTruthy();
    });
  });

  describe('getCategory', () => {
    it('should return the category when it exists', async () => {
      const created = await createCategory(testCategory);
      expect(created).not.toBeNull();

      const result = await getCategory(created!.id);

      expect(result).not.toBeNull();
      expect(result!.name).toBe(testCategory.name);
      expect(result!.userId).toBe(testCategory.userId);
    });

    it('should return null when category does not exist', async () => {
      const result = await getCategory('non-existent-id');
      expect(result).toBeNull();
    });
  });

  describe('updateCategory', () => {
    it('should update the category fields in firestore', async () => {
      //create a category in firestore
      let createdCategory = await createCategory(testCategory);
      expect(createCategory).not.toBe(null);
      //update category name of createdCategory
      await updateCategory(createdCategory!.id, { name: 'updated name' });
      const updatedCategory = await getCategory(createdCategory!.id);
      expect(updatedCategory?.name).toBe('updated name');
    });
  });

  describe('deleteCategory', () => {
    it('should delete the category so it no longer exists', async () => {
      const created = await createCategory(testCategory);
      expect(created).not.toBeNull();

      await deleteCategory(created!.id);

      const result = await getCategory(created!.id);
      expect(result).toBeNull();
    });
  });
});
