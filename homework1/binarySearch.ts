
//Difficulty: O(log(n))

var arr: Array<number> = [1, 6, 7, 11, 22, 45, 88, 92];
console.log(arr.join(", "))

function binarySearch(arr: Array<number>, x: number): number {
    return binarySearchRec(arr, x);
}

function binarySearchRec(arr: Array<number>, x: number): number {
    let high: number = arr.length - 1;
    let mid: number = Math.floor(high / 2);

    if(x == arr[mid]) {
        return mid;
    }
    if(arr.length <= 1) {
        return -1;
    }
    if(arr[mid] > x) {
        return binarySearch(arr.slice(0, mid), x);
    }
    else {
        return binarySearch(arr.slice(mid, high), x);
    }
}

console.log("Index of 11 in array: " + binarySearch(arr, 11));
console.log("Index of 32 in array: " + binarySearch(arr, 32));