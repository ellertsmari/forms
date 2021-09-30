const form = document.querySelector("form");
const error = document.getElementById("error");
let questionNr = 1;
let score = 0;
form.addEventListener("submit", e => {
    e.preventDefault();
    
    switch(questionNr){
        case 0:
            console.log("This should nor be possible");
            break;
        case 1:
            console.log("question 1")
            const name = document.getElementsByName("fullName")[0].value;
            document.querySelector("h1").innerHTML = name;
            form.innerHTML = `
                <h2>What is the name of the Finnish president?</h2>
                <input type="radio" id="president1" name="presidents" value="Urho">
                <label for="president1"> Urho Kekkonen </label><br>
                <input type="radio" id="president2" name="presidents" value="Sauli">
                <label for="president2"> Sauli Niinistö </label><br>
                <input type="radio" id="president3" name="presidents" value="Tarja">
                <label for="president3"> Tarja Halonen </label><br> 
                <br/>

                <input type="submit" id="continue" name="ok" value="SEND">

            `
            break;
        case 2:
            console.log("question 2");
            const presidents = document.getElementsByName("presidents");
            if( !( presidents[0].checked || presidents[1].checked || presidents[2].checked) ){
                error.innerHTML = "you need to select one president";
                return;
            }
            else{
                error.innerHTML = "";
            }
            if (presidents[1].checked){
                score++;
            }
            form.innerHTML = `
                <h2>What is the best Operating System (OS)?</h2>
                <label for="OS"> Sauli Niinistö </label><br>
                <input type="text" id="OS" name="operatingSystem" placeholder="OS name here">
                <br/>

                <input type="submit" id="continue" name="ok" value="SEND">

            `
            break;
        default:
            const os = document.getElementById("OS").value;
            if( !["linux", "windows", "osx", "os-x", "macos"].includes(os.toLowerCase())){
                error.innerHTML = "it needs to be either linux, windows or osx"
                return 0;
            }else{
                error.innerHTML = "";
            }
            if( os.toLowerCase()==="linux"){
                score++;    
            }
            form.innerHTML = `
                <h2>Thank you for playing. Your score is ${score}</h2>

            `
           

    }
    questionNr++;
})


console.log("test");

/*The challenge is to:
  Make a quiz with different kind of inputs



*/