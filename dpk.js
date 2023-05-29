const crypto = require("crypto");

const determineCandidate = (event) => {
  if (!event) {
    return "";
  }
  if (event.partitionKey) {
    return event.partitionKey;
  }
  return hashKey(JSON.stringify(event));
};

const hashKey = (key) =>
  crypto.createHash("sha3-512").update(key).digest("hex");

const deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  
  let candidate = determineCandidate(event);

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = hashKey(candidate);
  }

  return candidate || TRIVIAL_PARTITION_KEY;
};

module.exports = { deterministicPartitionKey, hashKey };
