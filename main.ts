function followLine () {
    while (amFollowingLine) {
        while (finch.getLine(RLDir.Right) < 90) {
            finch.setTurn(RLDir.Right, 2, 100)
            logMove("right", 2)
        }
        while (finch.getLine(RLDir.Left) < 90) {
            finch.setTurn(RLDir.Left, 2, 100)
            logMove("left", 2)
        }
        finch.setMove(MoveDir.Forward, 1, 100)
        logMove("forward", 1)
    }
}
function logMove (direction: string, distance: number) {
    directionList.push(direction)
    distanceList.push(distance)
}
input.onButtonPressed(Button.A, function () {
    amFollowingLine = false
    finch.setTurn(RLDir.Right, 180, 100)
    driveBack(directionList, distanceList)
})
function driveBack (directionList: any[], distanceList: number[]) {
    for (let index = 0; index <= directionList.length; index++) {
        if (directionList[index] == "right") {
            finch.setTurn(RLDir.Left, distanceList[index], 100)
        } else {
            if (directionList[index] == "left") {
                finch.setTurn(RLDir.Right, distanceList[index], 100)
            } else {
                if (directionList[index] == "forward") {
                    finch.setMove(MoveDir.Forward, distanceList[index], 100)
                } else {
                    basic.showIcon(IconNames.Skull)
                }
            }
        }
    }
}
input.onSound(DetectedSound.Loud, function () {
    if (amFollowingLine) {
        amFollowingLine = false
    } else {
        amFollowingLine = true
    }
})
function speedUpPath (directionList: number[], distanceList: any[]) {
    speedUpPathDirectionList = []
    speedUpPathDistanceList = []
    speedUpCurrentDirection = speedUpPathDirectionList[0]
    speedUpCurrentDistance = 0
    for (let index = 0; index <= 4; index++) {
        if (speedUpCurrentDirection == directionList[index]) {
        	
        } else {
        	
        }
        speedUpCurrentDistance += 1
    }
}
function testSpeedUpPath () {
    let list: number[] = []
    text_list = [
    "forward",
    "forward",
    "right",
    "right",
    "forward",
    "right",
    "forward",
    "left",
    "left",
    "left",
    "forward",
    "forward",
    "forward"
    ]
    testDistanceList = [
    1,
    1,
    2,
    2,
    1,
    2,
    1,
    2,
    2,
    2,
    1,
    1,
    1
    ]
    speedUpPath(list, list)
}
let testDistanceList: number[] = []
let text_list: string[] = []
let speedUpCurrentDistance = 0
let speedUpCurrentDirection = 0
let speedUpPathDistanceList: number[] = []
let speedUpPathDirectionList: number[] = []
let amFollowingLine = false
let directionList: string[] = []
let distanceList: number[] = []
finch.startFinch()
radio.setGroup(1)
distanceList = []
directionList = []
followLine()
basic.forever(function () {
	
})
