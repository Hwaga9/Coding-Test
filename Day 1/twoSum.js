var twoSum = function(nums, target) {
    var objectMap = {};
    for(i = 0; i < nums.length; i++) {
        if(objectMap[target - nums[i]] !== undefined) {
            return [objectMap[target- nums[i]] , i]
        } else {
            objectMap[nums[i]] = i
        }
    }
};