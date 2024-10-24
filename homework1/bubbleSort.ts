
//Difficulty: O(n^2)

var arr: Array<number> = [45, 22, 7, 11, 92, 1, 6, 88];
console.log(arr.join(", "));

let flag: boolean = true;

while(flag) {
    flag = false;
    for(let i: number = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i + 1]) {
            arr[i] += arr[i + 1];
            arr[i + 1] = arr[i] - arr[i + 1];
            arr[i] = arr[i] - arr[i + 1];
    
            flag = true;
        }
    }
}

console.log(arr.join(", "));