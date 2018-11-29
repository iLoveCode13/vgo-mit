var vgo = {};
var temp;

/* Get `vgo` members list */
fetch("members.json")
    .then(response => response.json())
    .then(function(json) {
        vgo = json;
    });

/* Get `template` with id "memberCard" */
temp = document.getElementById("memberCard");

for (var member in vgo) {
    var card = temp.content.clone();

    card.getElementById("name").innerText = member.name;
    card.getElementById("exec").hidden = member.exec;
    card.getElementById("class").innerText = ((isNumber(member.class)) ? "Class of " : "") + member.class;
    card.getElementById("plays").innerText = member.plays;

    document.getElementById("content").appendChild(card);
}