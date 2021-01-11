/**
 * You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in.
 * For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.
 * Return a list of groups such that each person i is in a group of size groupSizes[i].
 * 
 * Each person should appear in exactly one group, and every person must be in a group. 
 * If there are multiple answers, return any of them. 
 * It is guaranteed that there will be at least one valid solution for the given input.
 * 
 * Input: groupSizes = [3,3,3,3,3,1,3]
 * Output: [[5],[0,1,2],[3,4,6]]
 * 
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

var groupThePeople = function(groupSizes) {
    const result = [];
    const map = new Map();
    
    //loop through each group member (i)
    for(let i = 0; i < groupSizes.length; i++) {
        //build up (key, data). Grab already built data array OR create empty array, and add new index [i].
        map.set(groupSizes[i], [...(map.get(groupSizes[i]) || []), i]);
        
        //if currently looking map (key, data) has reached the goal lengt,
        if(map.get(groupSizes[i]).length === groupSizes[i]) {

            //push current data array to result array.
            result.push(map.get(groupSizes[i]));

            //set current data array to empty, maintaining same key.
            map.set(groupSizes[i], [])
        }
    }
    return result;    
};