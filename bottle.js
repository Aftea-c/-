// 一瓶冰红茶2元

// 5个瓶子可以换一瓶

// 10个瓶盖也可换一瓶

// 再来1瓶的瓶盖的中奖率是 10%，中奖瓶盖要回收（这个附加条件，可以先不实现）

// 请问：

// 1、100 块能喝到几瓶冰红茶

// 2、10000 块能喝到多少瓶冰红茶？

// 3、要喝到 12瓶汽水，要多少钱？

// 4、要喝到 1000 瓶汽水，需要多少钱？

/**
 * 一定金额可以喝到多少瓶饮料
 * @param {number} money 钱金额
 * @returns {number} 瓶数
 */
function getDrinksCountByMoney(money) {
  let result = 0;

  //当前没开过的饮料
  let newBottle = money / 2;
  //盖儿
  let currentCap = 0;
  //空瓶
  let currentBottle = 0;

  function deal(full) {
    if (full !== 0) {
      const win = getWinCount(full);

      currentCap += full;
      currentBottle += full + win;
      newBottle = 0;

      const res = full + win;
      result += res;

      console.log(`result`, result);

      deal(0);
    }

    if (currentCap >= 10) {
      // 换盖儿的情况 计算剩余的盖儿 计算兑换的数
      newBottle = Math.floor(currentCap / 10);
      console.log(`盖儿`, newBottle);
      currentCap = currentCap % 10; //剩余的盖儿

      deal(newBottle);
    }

    if (currentBottle >= 5) {
      newBottle = Math.floor(currentBottle / 5);
      currentBottle = currentBottle % 5;
      console.log(`瓶儿`, newBottle);
      deal(newBottle);
    }

    return;
  }

  function getWinCount(origin) {
    let num = Math.floor(origin * 0.1); //10瓶中一瓶
    if (num > 10) {
      num += getWinCount(num);
    }
    return num;
  }

  deal(newBottle);

  return result;
}

/**
 * 喝到一定瓶饮料，最少需要多少钱
 * @param {number} count 喝到饮料的瓶数
 * @returns {number} 最少金额
 */
function getMoneyByDrinksCount(count) {
  // code here
}

// 10000 块能买到多少瓶冰红茶？

console.log(getDrinksCountByMoney(100));
// console.log(getDrinksCountByMoney(10000));

// 如果要喝到 1000 瓶汽水，需要多少钱？
// console.log(getMoneyByDrinksCount(100));
// console.log(getMoneyByDrinksCount(1000));
