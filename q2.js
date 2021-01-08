const getFailureRates = (nStages, users) => {
    let stageData = []
    let prevCount = 0
    for (i = 1; i <= nStages; i++) {
        count = 0;
        for (j = 0; j < users.length; j++) {
            if (users[j] == i) {
                count = count + 1
            }
        }
        let failureRates = (count / (users.length - prevCount));
        stageData.push({
            'stage': i,
            'failure_rates': failureRates
        })
        prevCount = prevCount + count
    }
    for (i = 1; i < stageData.length; i++) {
        let current = stageData[i]
        let j = i - 1
        while ((j > -1) && (current.failure_rates > stageData[j].failure_rates)) {
            stageData[j + 1] = stageData[j]
            j--
        }
        stageData[j + 1] = current
    }
    let orderedStage = []
    stageData.map(stage => orderedStage.push(stage.stage))
    console.log(orderedStage)
}

const users = [2, 1, 2, 6, 2, 4, 3, 3]
getFailureRates(5, users)
