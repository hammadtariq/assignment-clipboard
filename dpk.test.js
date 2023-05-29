const { deterministicPartitionKey, hashKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("should return the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("should return the provided partition key", () => {
    const event = { partitionKey: "fake-partition-key" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe("fake-partition-key");
  });

  it("should always return the provided partition key in string", () => {
    const event = { partitionKey: 123456 };
    const result = deterministicPartitionKey(event);
    expect(result).toBe("123456");
  });

  it("should return the hashed key if partition key is not provided", () => {
    const event = { data: "fake-data" };
    const hashedKey = hashKey(JSON.stringify(event));
    const result = deterministicPartitionKey(event);
    expect(result).toBe(hashedKey);
  });

  it("should return the hashed key if input is provided", () => {
    const event = { data: "fake-data" };
    const hashedKey = hashKey(JSON.stringify(event));
    const result = deterministicPartitionKey(event);
    expect(result).toBe(hashedKey);
  });

  it("should return the hashed key if candidate length exceeds maximum", () => {
    const longString = "c".repeat(300);
    const event = { data: longString };
    const hashedKey = hashKey(JSON.stringify(event));
    const result = deterministicPartitionKey(event);
    expect(result).toBe(hashedKey);
  });
});
