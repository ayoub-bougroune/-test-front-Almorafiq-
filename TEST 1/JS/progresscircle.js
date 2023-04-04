  let circularProgress = $(".circular-progress"),
    progressValue = $(".progress-value");

    let progressStartValue = 0,    
        progressEndValue = 77,    
        speed = 100;
        
    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.text(`${progressStartValue}%`);
        circularProgress.css("background", `conic-gradient(#2ae82a ${progressStartValue * 3.6}deg, #ededed 0deg)`);

        if(progressStartValue == progressEndValue){
            clearInterval(progress);
        }    
    }, speed);
    
    let circularProgressUnpaid = $(".circular-progress-unpaid"),
             progressValueUnpaid = $(".progress-value-unpaid");

        let progressStartValueUnpaid = 0,    
            progressEndValueUnpaid = 23,    
            speedUnpaid = 100;
            
        let progressUnpaid = setInterval(() => {
            progressStartValueUnpaid++;

            progressValueUnpaid.text(`${progressStartValueUnpaid}%`);
            circularProgressUnpaid.css("background", `conic-gradient(#bd1558 ${progressStartValueUnpaid * 3.6}deg, #ededed 0deg)`);

            if(progressStartValueUnpaid == progressEndValueUnpaid){
                clearInterval(progressUnpaid);
            }    
        }, speedUnpaid);