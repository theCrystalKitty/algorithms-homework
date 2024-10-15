
//Difficulty: O(n log(n))

var arr: Array<number> = [45, 22, 7, 11, 92, 1, 6, 88];
console.log(arr.join(", "));

function merge(arr: Array<number>, left: number, mid: number, right: number): void {
    const n1: number = mid - left + 1,
        n2: number = right - mid;

    const leftArr: Array<number> = new Array<number> (n1);
    const rightArr: Array<number> = new Array<number> (n2);

    for (let i = 0; i < n1; i++)
        leftArr[i] = arr[left + i];
    for (let j = 0; j < n2; j++)
        rightArr[j] = arr[mid + 1 + j];

    var i: number = 0, j: number = 0,
        k: number = left;

    while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

function mergeSort(arr: Array<number>, left, right) {
    if (left >= right)
        return;

    var mid: number = Math.floor(left + (right - left) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

mergeSort(arr, 0, arr.length - 1);

console.log(arr.join(", "));