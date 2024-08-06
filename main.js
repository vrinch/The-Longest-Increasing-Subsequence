function run(sequence) {
    const n = sequence.length;
    if (n === 0) return 0;

    // Initialize dp array
    let dp = new Array(n).fill(1);

    // Compute the length of the longest increasing subsequence
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (sequence[i] > sequence[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // The length of the longest increasing subsequence
    return Math.max(...dp);
}

module.exports = { run };
