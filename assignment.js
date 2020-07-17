// Feet to Mile conversion

function feetToMile(feet) {
    const mile = feet / 5280;
    if (feet <= 0) {
        return "Invalid Number - Can't convert to mile"
    } else
        return mile;
}

var result = feetToMile(5280);
console.log(result);

// Wood calculator in qubic feet

function woodCalculator(chair, table, bed) {
    const totalMeasurement = (chair * 1) + (table * 3) + (bed * 5);
    if (chair <= 0, table <= 0, bed <= 0) {
        return "Sorry - You are having a bad day"
    } else
        return totalMeasurement;
}

var total = woodCalculator(6, 1, 1);
console.log(total);

// Calculating briks of a building

function brickCalculator(buildingStorey) {
    if (buildingStorey <= 0) {
        return "You are not constructing any building";
    } else if (buildingStorey <= 10) {
        firstTenStorey = buildingStorey * 15 * 1000;
        return firstTenStorey;
    } else if (buildingStorey >= 11 && buildingStorey <= 20) {
        moreThantenStorey = ((buildingStorey - 10) * (12 * 1000)) + (10 * 15 * 1000);
        return moreThantenStorey;
    } else if (buildingStorey >= 21) {
        moreThantweentyStorey = ((buildingStorey - 20) * (10 * 1000)) + (10 * 12 * 1000) + (10 * 15 * 1000);
        return moreThantweentyStorey;
    }
}

var brickAmount = brickCalculator(11);
console.log(brickAmount)

// Tiny friend

function tinyFriend(friendsNameList) {
    let tinyName = friendsNameList[0];
    for (i = 0; i < friendsNameList.length; i++) {
        var nameIndex = friendsNameList[i]
        if (nameIndex.length < tinyName.length) {
            tinyName = nameIndex
        }
    }
    return tinyName;
}

var name = tinyFriend(["hasan", "jamal", "kamal", "dip", "jhon", "rofiq"]);
console.log(name);