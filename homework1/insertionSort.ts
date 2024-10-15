
//Difficulty: O(n log(n))

var arr: Array<number> = [45, 22, 7, 11, 92, 1, 6, 88];
console.log(arr.join(", "));

for(let i: number = 0; i < arr.length; i++) {
    var key: number = arr[i];
    let j: number = i - 1
    while(arr[j] > key && j >= 0) {
        arr[j + 1] = arr[j]
        j--;
    }
    arr[j + 1] = key;
}

console.log(arr.join(", "));