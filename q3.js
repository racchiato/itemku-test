const solution = (relation) => {
    let nCol = relation[0].length;
    let nRow = relation.length;
    let candidateCount = 0
    let uniqueColumn = []
    // Get unique value
    for (col = 0; col < nCol; col++) {
        let count = 0
        for (row = 0; row < nRow - 1; row++) {
            for (current = row + 1; current < nRow; current++) {
                if (relation[row][col] == relation[current][col]) {
                    count++
                }
            }
        }
        if (count == 0) {
            candidateCount++
            uniqueColumn.push(col)
        }
    }
    // Check candidate keys combination
    for (col = 0; col < nCol - 1; col++) {
        if (!uniqueColumn.includes(col)) {
            for (next = col + 1; next < nCol; next++) {
                let count = 0
                for (row = 0; row < nRow - 1; row++) {
                    for (nextRow = row + 1; nextRow < nRow; nextRow++) {
                        let first = relation[row][col] + relation[row][next]
                        let second = relation[nextRow][col] + relation[nextRow][next]
                        if (first == second) {
                            count++
                        }
                    }
                }
                if (count == 0) {
                    candidateCount++
                }
            }
        }
    }
    console.log("Candidate keys: " + candidateCount);
}

const relation = [
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"]
]

solution(relation)