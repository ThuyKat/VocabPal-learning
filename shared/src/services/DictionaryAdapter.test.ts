import FreeDictionaryAdapter from "./DictionaryAdapter";

async function testDictionaryAdapter() {
    const adapter = new FreeDictionaryAdapter("test-user-123");

    // Test 1: Valid word
    console.log("Test 1: Looking up 'hello'...");
    try {
        const result = await adapter.lookup("hello");
        console.log("✓ Success! Got definition:");
        console.log(result);
    } catch (error) {
        console.log("✗ Failed:", error);
    }

    // Test 2: Invalid word
    console.log("\nTest 2: Looking up 'asdfghjkl'...");
    try {
        const result = await adapter.lookup("asdfghjkl");
        console.log("✗ Should have thrown an error, but got:", result);
    } catch (error) {
        console.log("✓ Correctly threw error:", (error as Error).message);
    }
}

testDictionaryAdapter();
