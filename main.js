function CreateGame(player1, hour, player2) {
    return `
    <li>
    <img src="./assents/Icon-${player1}.svg"
     alt="Bandeira do ${player1}" />
    <strong>${hour}</strong>
    <img src="./assents/icon-${player2}.svg" 
    alt="Bandeira da ${player2}" />
  </li>
    `
}
function CreateCard(date, day, games) {
    return `
    <div class="card">
    <h2>${date} <span>${day}</span></h2>
      <ul>
      ${games}
    </ul>
    </div>
    `
}

  document.querySelector('#cards').innerHTML = 
    CreateCard("24/11", "quinta", CreateGame("brazil", "16:00",
     "serbia")) +
     CreateCard(
        "28/11", 
      "segunda",
       CreateGame("switzerland", "13:00", "brazil") +
       CreateGame("portugal", "13:00", "uruguay")
      ) +
   CreateCard("02/12", "sexta", CreateGame("brazil", "16:00", "cameroon"))
 
 