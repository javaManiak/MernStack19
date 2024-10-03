function PrintClassSchedules(headingInfo, data) {
    console.log(headingInfo, data);
}

function GetMyClassSchedules(callBackFunc, classObj) {
    callBackFunc("You clas chedule today are: ", classObj);
} 

var classObj = {
    "DevOps": "12:30 pm",
    "MerStack": "10:10 am",
    "SpringBoot": "5:00 pm"
}

GetMyClassSchedules(PrintClassSchedules, classObj);