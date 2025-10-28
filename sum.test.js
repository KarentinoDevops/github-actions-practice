const result = 1 + 2;
if (result !== 3) {
  console.error("Test failed: 1+2 should be 3");
  process.exit(1);
}
console.log("✅ Test passed: 1+2 equals 3");
