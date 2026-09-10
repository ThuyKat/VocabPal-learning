import {
  getCurrentUser,
  onAuthStateChange,
  signInWithGoogle,
  signOut,
} from '../firebase/authService';
const mockUser = {
  uid: 'test-uid-123',
  email: 'test@example.com',
  displayName: 'Test User',
};
let mockCurrentUser: typeof mockUser | null = mockUser;
vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({
    // get currentUser(){ return mockCurrentUser}, //to keep track of currentUser everytime it change in our code as we use the same object throughout the app. However in this test, getAuth is called multiple times and everytime it create a fresh currentUser object, so getter here is not needed.
    currentUser: mockCurrentUser,
    signOut: vi.fn(async () => {
      mockCurrentUser = null;
    }),
    onAuthStateChanged: vi.fn((cb) => {
      cb();
      return vi.fn();
    }), //The return vi.fn() is because onAuthStateChanged in real Firebase returns an unsubscribe function — your authService stores it as unsubscribe, so it needs to return something callable.
  })),
  GoogleAuthProvider: vi.fn(),
  signInWithPopup: vi.fn(async () => ({
    user: {
      uid: mockUser.uid,
      displayName: mockUser.displayName,
      email: mockUser.email,
      photoURL: null,
      metadata: null,
    },
  })),
}));

beforeEach(async () => {
  mockCurrentUser = mockUser;
});

describe('authService', () => {
  describe('signInWithGoogle', () => {
    it('should return a user with uid', async () => {
      let result = await signInWithGoogle();
      expect(result!.id).toBeTruthy();
      expect(result!.id).toBe('test-uid-123');
    });
  });
  describe('getCurrentUser', () => {
    it('should return a valid user', () => {
      let currentUser = getCurrentUser();
      expect(currentUser!.id).toBe('test-uid-123');
      expect(currentUser!.email).toBe('test@example.com');
      expect(currentUser!.displayName).toBe('Test User');
    });
  });
  describe('signOut', () => {
    it('should return null when call getCurrentUser', async () => {
      await signOut();
      let currentUser = getCurrentUser();
      expect(currentUser).toBe(null);
    });
  });
  describe('onAuthStateChange', () => {
    it('should call the callback with the current user', () => {
      const callback = vi.fn();
      onAuthStateChange(callback);
      expect(callback).toHaveBeenCalled();
    });
  });
});
