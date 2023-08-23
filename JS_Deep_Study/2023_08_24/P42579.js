// 프로그래머스 - 베스트앨범

function solution(genres, plays) {
  let elbumMap = {};
  let elbumSum = {};

  for (let i in genres) {
    if (!elbumMap[genres[i]]) {
      let map ={};
      map[plays[i]]=i;
      elbumMap[genres[i]] = [map];
      elbumSum[genres[i]] = plays[i];
    } else {
      let map ={};
      map[plays[i]]=i;
      elbumMap[genres[i]].push(map)
      elbumMap[genres[i]].sort((a, b) => {
        const keyA = parseInt(Object.keys(a)[0]);
        const keyB = parseInt(Object.keys(b)[0]);
        return keyB - keyA;
      });
      elbumSum[genres[i]] += plays[i];
    }
  }

  const invertedData = {};
  for (const key in elbumSum) {
    invertedData[elbumSum[key]] = key;
  }

  const sortedValues = Object.keys(invertedData).sort((a, b) => b - a);
  const sortedKeys = sortedValues.map(value => invertedData[value]);


  let answer = [];
  for (let e of sortedKeys) {
    let sliceArr = elbumMap[e].slice(0,2);
    answer.push(  ...sliceArr.map(value =>  Object.values(value)[0]*1))
  }


  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
