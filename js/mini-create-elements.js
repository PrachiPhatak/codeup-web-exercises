let DateDiff = {
    inDays: function (d1, d2) {
        let t2 = d2;
        let t1 = d1.getTime();
        return parseInt((d2 - t1) / (24 * 3600 * 1000));
    },
    inHours: function (d1, d2) {
        let t2 = d2;
        let t1 = d1.getTime();
        return parseInt((d2 - t1) / (3600 * 1000));
    }
}

let uploadedDate = new Date(2021, 4, 20, 7);
let days = DateDiff.inHours(uploadedDate, Date.now());
let daysLabel = days > 1 ? "days" : "day";
let node = document.createTextNode("Updated " + days + " " + daysLabel + " ago.");

let p = document.createElement("p");
p.appendChild(node);
let element = document.getElementById("div1");
element.appendChild(p);