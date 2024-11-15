function containsNearbyDuplicate(nums, k) {
    const lastSeen = {}

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]

        if (num in lastSeen && i - lastSeen[num] <= k){
            return true;
        }

        lastSeen[num] = i
    }

    return false
}
