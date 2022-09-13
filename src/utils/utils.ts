export function randomNumber(n: number) {
  return Math.floor(Math.random() * n);
}

export function shuffle(s: string) {
  let arr = s.split("");
  let n = arr.length;
  let shuffle = arr;

  arr.forEach((el, index) => {
    let j = randomNumber(index);
    let temp = shuffle[index];
    shuffle[index] = shuffle[j];
    shuffle[j] = temp;
  });

  return [s, shuffle.join("")];
}

export const wordList: string[] = [];
