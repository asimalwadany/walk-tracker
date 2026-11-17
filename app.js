console.log("Walk Tracker is running!");

// نجيب زر Start Walking عن طريق الـ Class
const startButton = document.querySelector(".start-btn");
const stopButton = document.querySelector(".stop-btn");
const stepsElement = document.querySelector(".steps-count");

let isWalking = false;
let steps = 0;


// هنا نخلي العداد يبدأ من صفر عند تحميل الصفحة
stepsElement.textContent = steps;

startButton.addEventListener("click", async function () {

    if (isWalking === false) {

        stepsElement.textContent = steps;

        if (typeof DeviceMotionEvent !== "undefined") {
            console.log("Motion API available!");

            if (typeof DeviceMotionEvent.requestPermission === "function") {

                try {
                    const permission = await DeviceMotionEvent.requestPermission();
                    if (permission === "granted") {
                        console.log("Permission granted!");
                        isWalking = true;

                    } else {
                        console.log("Permission denied!");
                    }

                } catch (error) {
                    console.log(error.message);
                }



            } else {
                console.log("Permission request function not available!");
                isWalking = true;
            }

        } else {
            console.log("Motion API not supported!");


        }

    } else {
        console.log("Already walking!");
    }

});

stopButton.addEventListener("click", function () {

    if (isWalking === true) {
        stepsElement.textContent = steps;
        isWalking = false;
    } else {
        console.log("You are not walking!");
    }
});

window.addEventListener("devicemotion", function (event) {
    if (event.acceleration != null && isWalking === true) {
        console.log(event.acceleration)

    }

})
