function solution(money) {
    let restoftheCount = [];

    restoftheCount.push(parseInt(money / 5500));
    restoftheCount.push(money % 5500);

    return restoftheCount;
}