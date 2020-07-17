// Feet to Mile conversion

function feetToMile(feet) {
    const mile = feet / 5280;
    if (feet <= 0) {
        return "Invalid Number - Can't convert to mile"
    } else
        return feet + " feet = " + mile + " " + "Mile";
}

var result = feetToMile(100);
console.log(result);

// Wood calculator in qubic feet

function woodCalculator(chair, table, bed) {
    const totalMeasurement = (chair * 1) + (table * 3) + (bed * 5);
    if (chair <= 0 && table <= 0 && bed <= 0) {
        return "Sorry - You are having a bad day"
    } else if (chair >= 1 && table <= 0 && bed <= 0) {
        return "Your wood measurement for Chair " + (chair * 1);
    } else if (chair <= 0 && table >= 1 && bed <= 0) {
        return "Your wood measurement for Table " + (table * 3);
    } else if (chair <= 0 && table <= 0 && bed >= 1) {
        return "Your wood measurement for Bed " + (bed * 5);
    } else if (chair <= 0 && table >= 1 && bed >= 1) {
        return "Your wood measurement for Table & Bed " + (table * 3) + (bed * 5);
    } else if (chair >= 1 && table >= 1 && bed <= 0) {
        return "Your wood measurement for Chair & Table " + (chair * 1) + (table * 3);
    } else if (chair >= 1 && table <= 0 && bed >= 1) {
        return "Your wood measurement for Chair & Bed " + (chair * 1) + (bed * 5);
    } else
        return "Your total wood measurement " + totalMeasurement;
}

var total = woodCalculator(6, 1, 1);
console.log(total);

// Calculating briks of a building

function brickCalculator(buildingStorey) {
    if (buildingStorey <= 0) {
        return "You are not constructing any building";
    } else if (buildingStorey <= 10) {
        firstTenStorey = buildingStorey * 15 * 1000;
        return "Total Bricks = " + firstTenStorey;
    } else if (buildingStorey >= 11 && buildingStorey <= 20) {
        moreThantenStorey = ((buildingStorey - 10) * (12 * 1000)) + (10 * 15 * 1000);
        return "Total Bricks = " + moreThantenStorey;
    } else if (buildingStorey >= 21) {
        moreThantweentyStorey = ((buildingStorey - 20) * (10 * 1000)) + (10 * 12 * 1000) + (10 * 15 * 1000);
        return "Total Bricks = " + moreThantweentyStorey;
    }
}

var bricksAmount = brickCalculator(11);
console.log(bricksAmount)

// Tiny friend

function tinyFriend(friendsNameList) {
    let tinyName = friendsNameList[0];
    for (i = 0; i < friendsNameList.length; i++) {
        var nameIndex = friendsNameList[i]
        if (nameIndex.length < tinyName.length) {
            tinyName = nameIndex
        }
    }
    return "Yout shortest friend's name = " + tinyName;
}

var name = tinyFriend(["hasan", "jamal", "kamal", "dip", "jhon", "rofiq"]);
console.log(name);