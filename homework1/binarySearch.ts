var arr: Array<number> = [45, 22, 7, 11, 92, 1, 6, 88];
console.log(arr.join(", "))

function binarySearch(arr: Array<number>, x: number) {
    let low: number = 0;
    let high: number = arr.length - 1;
    let mid: number;
    while (high >= low) {
        mid = low + Math.floor((high - low) / 2);

        if (arr[mid] == x)
            return mid;

        if (arr[mid] > x)
            high = mid - 1;

        else
            low = mid + 1;
    }

    return -1;
}

console.log("Index of 11 in array: " + binarySearch(arr, 11));
console.log("Index of 32 in array: " + binarySearch(arr, 32));