/**
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 * @param {number[]} nums
 * @param {number} k
 * @returns
 */

// const list = [1, 3, -1, -3, 5, 3, 6, 7];

function maxSlidingWindow(nums, k) {
  if (k === 1) return nums;
  const arr = [],
    result = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[i]);
    if (i >= k - 1) {
      result.push(Math.max(...arr));
      arr.shift();
    }
  }
  return result;
}

// console.log("result", maxSlidingWindow(list, 3));

// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7]

//解法二：优化 双端队列
// const maxSlidingWindow = function (nums, k) {
//   const deque = [];
//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     // 把滑动窗口之外的踢出
//     if (i - deque[0] >= k) {
//       deque.shift();
//     }
//     while (nums[deque[deque.length - 1]] <= nums[i]) {
//       deque.pop();
//     }
//     deque.push(i);
//     if (i >= k - 1) {
//       result.push(nums[deque[0]]);
//     }
//   }
//   return result;
// };

const list = [1, 3, -1, -3, 5, 3, 6, 7];

function getSlidingMaxes(nums, size) {
  let initial = nums.splice(0, size);
  return nums.reduce(
    (result, num) => {
      initial.splice(0, 1);
      initial.push(num);
      result.push(Math.max(...initial));
      return result;
    },
    [Math.max(...initial)]
  );
}
console.log("getSlidingMaxes :>> ", getSlidingMaxes(list, 3));
