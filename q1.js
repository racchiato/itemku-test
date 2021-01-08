const solution = (record) => {
    // Define messages
    const messages = {
        "enter": " came in",
        "leave": " has left"
    }

    // Initialize empty arrays
    const records = [];
    const answers = [];

    // Here comes the magic
    record.map((command, index) => {
        let input = command.split(" ")
        let name = ""
        if (input.length < 3) {
            for (i = 0; i < records.length; i++) {
                if (records[i]['id'] == input[1]) {
                    name = records[i]['name']
                    break
                }
            }
        } else {
            name = input[2]
        }
        if (input[0].toLowerCase() === 'change') {
            for (i = 0; i < records.length; i++) {
                if (records[i]['id'] == input[1]) {
                    records[i]['name'] = input[2]
                    break
                }
            }
        } else {
            let data = {
                "id": input[1],
                "name": name,
                "message": messages[input[0].toLowerCase()]
            }
            records.push(data)
        }
    })
    // Map the finalized records as the full messages
    records.map((chat) => {
        answers.push(chat["name"] + chat["message"])
    })
    return answers;
}

const inputs = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]
const answers = solution(inputs)
console.log(answers)
