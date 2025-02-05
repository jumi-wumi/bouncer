// Väntar tills hela HTML-dokumentet har laddats innan koden körs
document.addEventListener("DOMContentLoaded", () => {
  
    // Hämtar inputfältet och paragrafen där meddelandet ska visas
    const input = document.querySelector("input");
    const output = document.querySelector("p");
  
    // Skapar två nya paragraf-element för att visa slumpmässig dag och status
    const dayOutput = document.createElement("p"); 
    const statusOutput = document.createElement("p");
  
    // Lägger till dessa element i sidan
    document.body.appendChild(dayOutput); 
    document.body.appendChild(statusOutput);
  
    // Lyssnar efter inmatning i inputfältet och uppdaterar text baserat på ålder
    input.addEventListener("input", () => {
      const age = parseInt(input.value); // Omvandlar input till ett heltal
  
      // Kontrollerar om användaren är 18 år eller äldre
      if (age >= 18) {
        output.textContent = "Jippi! Nu ska du supa!";
      } else {
        output.textContent = "Bye! Bli äldre!";
      }
    });
  
    // Funktion som genererar ett slumpmässigt tal mellan 1 och 7
    const randomNumber = () => Math.floor(Math.random() * 7) + 1;
  
    // Funktion som genererar en slumpmässig dag och bestämmer om det är öppet eller stängt
    const generateRandomDay = () => {
      let randomDay;  // Variabel för veckodagen
      let openStatus; // Variabel för öppet/stängt status
  
      // Hämtar ett slumpmässigt nummer mellan 1 och 7
      let dayNum = randomNumber(); 
  
      // Bestämmer vilken dag som motsvarar det slumpmässiga numret
      switch (dayNum) {
        case 1:
          randomDay = "Måndag";
          break;
        case 2:
          randomDay = "Tisdag";
          break;
        case 3:
          randomDay = "Onsdag";
          break;
        case 4:
          randomDay = "Torsdag";
          break;
        case 5:
          randomDay = "Fredag";
          break;
        case 6:
          randomDay = "Lördag";
          break;
        case 7:
          randomDay = "Söndag";
          break;
      }
  
      // Bestämmer om det är öppet eller stängt baserat på dagen
      switch (randomDay) {
        case "Fredag":
        case "Lördag":
          openStatus = "öppet"; // Fredag och lördag är öppet
          break;
        default:
          openStatus = "stängt"; // Alla andra dagar är stängt
      }
  
      // Uppdaterar UI med den slumpmässiga dagen och statusen
      dayOutput.textContent = `Idag är det: ${randomDay}`;
      statusOutput.textContent = `Status: ${openStatus}`;
    };
  
    // Kör funktionen för att visa en slumpmässig dag vid start
    generateRandomDay();
  });
  