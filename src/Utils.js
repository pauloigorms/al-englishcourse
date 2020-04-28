export const FormatText = (text) => {
    return text.substring(0, 90) + '...'
}

export const convertToList = (arr__, elements) => {
    var matrix = [], i, k
    for (i = 0, k = -1; i < arr__.length; i++) {
        if (i % elements === 0) {
            k++
            matrix[k] = []
        }
        matrix[k].push(arr__[i])
    }
    return matrix
}