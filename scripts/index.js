import { world } from "mojang-minecraft";

const replace = {
    "op": "ビジター",
    "クリエ": "アドベンチャー"
}

world.events.beforeChat.subscribe(ev => {
    let { sender, message } = ev;
    for(let key in replace) message = message.toLowerCase().replace(new RegExp(key, "gi"), replace[key]);

    ev.cancel = true;
    world.say(`<${sender.name}> ${message}`);
});