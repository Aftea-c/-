/** 递归 根据买入的饮料数量 查询最终总的饮料  */
function getDrinksCount({
  /** 最终总的喝到的饮料数量 */
  totalCount = 0,
  /** 每轮新增的饮料鼠量 */
  addCount = totalCount,
  /** 每轮兑换后剩余的瓶子 */
  remainBottle = 0,
  /** 每轮兑换后剩余的瓶盖 */
  remainCap = 0,
}) {
  // console.log({ totalCount, addCount, remainBottle, remainCap });
  const totalBottle = addCount + remainBottle;
  const totalCap = addCount + remainCap;
  /** 每一轮兑换，额外添加的瓶数 */
  const _addCount = parseInt(totalBottle / 5) + parseInt(totalCap / 10);
  const result = {
    totalCount: totalCount + addCount,
    addCount: _addCount,
    remainBottle: totalBottle % 5,
    remainCap: totalCap % 10,
  };
  return _addCount > 0 ? getDrinksCount(result) : result;
}

/**
 * 一定金额可以最多喝多少瓶饮料
 * @param {number} money 金额
 * @returns {number} 饮料瓶数
 */
function getDrinksCountByMoney(money) {
  return getDrinksCount({ addCount: parseInt(money / 2) }).totalCount;
}

/**
 * 喝到一定瓶饮料，最少需要多少钱
 * @param {number} count 喝到饮料的瓶数
 * @returns {number} 最少金额
 */
function getMoneyByDrinksCount(count) {
  /** 预估单瓶真正需要的价格 */
  const estimatePrice = 2 * (1 - 0.1 - 0.2);
  /** 预估喝到 count 瓶饮料，需要购买的瓶数 */
  const estimateCount = parseInt((count * estimatePrice) / 2);
  /** 通过预估值，估算出对应兑换饮料信息 */
  const estimateInitInfo = getDrinksCount({ addCount: estimateCount });
  /** 递归 依次 buyCount + 1 获取需要购买的最小瓶数 */
  function getBuyCount({ buyCount, totalCount, remainBottle, remainCap }) {
    // 这个log 可以看到最终循环的次数
    // console.log({ buyCount, totalCount, remainBottle, remainCap });
    if (totalCount < count) {
      /** 再买一瓶 额外添加的瓶数 */
      return getBuyCount({
        buyCount: buyCount + 1,
        totalCount:
          totalCount + parseInt((remainBottle + 1) / 5) + parseInt((remainCap + 1) / 10) + 1,
        remainBottle: (remainBottle + 1) % 5,
        remainCap: (remainCap + 1) % 10,
      });
    } else {
      return buyCount;
    }
  }
  const buyCountResult = getBuyCount({ ...estimateInitInfo, buyCount: estimateCount });
  return buyCountResult * 2;
}

// xxxx 块能买到多少瓶冰红茶？

console.log(getDrinksCountByMoney(20));
console.log(getDrinksCountByMoney(10000));

// 如果要喝到 xxxx 瓶汽水，需要多少钱？
console.log(getMoneyByDrinksCount(13));
console.log(getMoneyByDrinksCount(7142));
