var arr: Array<number> = [45, 22, 7, 11, 92, 1, 6, 88];
console.log(arr.join(", "));

function quickSort(arr: Array<number>): void {
    quickSortRec(arr, 0, arr.length - 1);
}

function quickSortRec(arr: Array<number>, left: number, right: number): void {
    if (left >= right)
        return;
    var wall: number = left - 1;
    for (let i: number = left; i <= right; i++) {
        if (arr[i] <= arr[right]) {
            wall++;
            if (i > wall) {
                arr[i] += arr[wall];
                arr[wall] = arr[i] - arr[wall];
                arr[i] = arr[i] - arr[wall];
            }
        }
    }
    quickSortRec(arr, left, wall - 1);
    quickSortRec(arr, wall + 1, right);
}

quickSort(arr);

console.log(arr.join(", "));