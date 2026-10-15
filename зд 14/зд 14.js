function isCircleSorted( arr ){
    if (arr.length <= 1) return true;

    let counter = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > arr[(i + 1) % arr.length]) {
            counter++;
        }
    }
    return counter <= 1;
}