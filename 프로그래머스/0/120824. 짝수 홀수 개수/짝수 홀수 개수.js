function solution(num_list) {
  const evenNumbers = num_list.filter(num => num % 2 === 0).length;
  const oddNumbers = num_list.filter(num => num % 2 === 1).length;
  
  return [evenNumbers, oddNumbers];
}
