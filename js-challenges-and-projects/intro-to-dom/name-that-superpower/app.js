var justiceLeague = [
    {name: "Superman", superpower: "Super strength"}, 
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"}, 
    {name: "The Flash", superpower: "Super speed"}, 
    {name: "Green Lantern", superpower: "Super ring"}
]

var leagueList = document.getElementById('league');

for (let i = 0; i < justiceLeague.length; i++) {
    var listPowers = document.createElement('li')
    listPowers.textContent = justiceLeague[i].name + ', ' + justiceLeague[i].superpower
    leagueList.append(listPowers)
}
