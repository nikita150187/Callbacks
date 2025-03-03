const displayName = (callback) => {
    setTimeout(() => {
        console.log("My name is Nikita");
        callback();
      },2000);
};


const displayAge = (callback) => {
    setTimeout(() => {
        console.log("I am 38 years old.");
        callback();
      },3000);
    };

const displayLocation = (callback) => {
    setTimeout(() => {
        console.log("I was born in India and currently live in Sweden.");
        callback();
      },4000);
};    

const displayHobbies = (callback) => {
    setTimeout(() => {
        console.log("I love dancing, reading, and playing badminton.");
        callback();
      },5000);
    };



    const startDisplaying = () => {
        displayName(() =>{
            displayAge(() => {
                displayLocation(() => {
                    displayHobbies(() => {
                        console.log("That's a little about me!");
                        
                    });
                });
            });
        });
    };


    startDisplaying();