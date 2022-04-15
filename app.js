

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let sorted = false
       
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]) {
                let placeholder = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = placeholder;
                sorted=true
            }
        }
        if(!sorted) break;
    }
    return arr;
}



function merge(arr1 , arr2) {
    let answer = [];
    let left = 0;
    let right = 0;
    while(left < arr1.length && right < arr2.length) {
        if(arr1[left] <= arr2[right]) {
            answer.push(arr1[left]);
            left++
        }else{
            answer.push(arr2[right]);
            right++
        }
    }while(left < arr1.length) {
        answer.push(arr1[left]);
        left++
    }while(right < arr2.length) {
        answer.push(arr2[right]);
        right++
    }
    return answer
}

let arr1 = [1,3,4,5];
let arr2 = [2,4,6,8];
let arr3 = [-2,-1,0,4,5,6];
let arr4 = [-3,-2,-1,2,3,5,7,8]
let arr5 = [3,4,5]
let arr6 = [1,2]


function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left , right);
}

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];