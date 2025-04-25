//Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print what type of delivery is scheduled on each day.

const deliveryDays =(day)=>{
    day.forEach(day=>{
        switch(day){
            case "Mon":
                console.log(`local delivery`)
                break;
                case "Tue":
                    console.log("pickup")
                    break;
                    case "Fri":
                    console.log(`express delivery`)
                    break;
                    default:
                        console.log(`free delivery`)
        }  
    })
}
 
 const days = ["Mon","Tue","Wed","Thur","Fri"];

 deliveryDays(days);
//Create a program that loops through an array of book statuses and prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".

const bookStatus = (Status)=>{
    Status.forEach(Status =>{
        switch(Status){
            case "available":
                console.log(`Ready to lend`)
                break;
                default:
                        console.log(`Checked out`)
                        break;
        }
    })
}
const books = ['available','borrowed'];
bookStatus(books);

//Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.

const getCustomerAge =(age)=>{
    for(let i = 0;i< age.length;i++){
     if(age[i]>= 18){
         console.log(`Adult`)
     }
     else{
       console.log(`Minor`)
     }
    } 
 }
  const ages = [18,16,14,24,32,26];
  getCustomerAge(ages);
//Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0
const livesCountdown = ()=>{
    let x = 5;
    while (x > 0){
        console.log(`You have ${x} lives left`)
        x--;
    }
    console.log(`No lives left`)
}
livesCountdown()


//Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.
const userFeedback = (feedbacks)=>{
    for(feedback of feedbacks)
   
       do{
           console.log(` ${feedback}`)
           feedback --;
         
       }
       while (feedback < feedback.length)
    }
   const reviews = ["It is fun","It is enjoyable","it's nice","it's awesome"];
   
   userFeedback(reviews);
   
//Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.
const userLoginStatus = (login)=>{
    login.forEach(login=>{
        switch(login){
            case "logged in":
                console.log(`Welcome back`)
                break;
                default:
                    console.log(`Please log in`)
                    break;
        }
    })
 }
 const arr = ["logged in","logged out"];
 userLoginStatus(arr);

 //Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".
 const supportTicketPriority = (priority) =>{
    priority.forEach(priority =>{
        switch(priority){
            case "high":
                console.log("This is high priority")
                break;
                case "medium":
                    console.log("This can wait")
                    break;
                    default:
                        console.log("Ignore")
                        break;

        }
    })
 }
 const priorities = ["high","low","medium"];
 supportTicketPriority(priorities);
//Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.
const quizCountdown = ()=>{
    let count = 10;
    while (count > 0){
        console.log(count)
        count--;
    }
    console.log("Stop")
}
quizCountdown();
