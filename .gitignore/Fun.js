var randomfun = [];
randomfun[0] = "Everybody has their moment of great opportunity in life. If you happen to miss the one you care about, then everything else becomes eerily easy.";

randomfun[1] = "Why are people born? Why do they die? Why do they want to spend so much of the intervening time wearing digital watches?";

randomfun[2] = "Oh dear,' says God, 'I hadn't thought of that,' and promptly vanishes in a puff of logic.";

randomfun[3] = " Nobody likes a whistler, particularly not the divinity that shapes our ends.";

randomfun[4] = "I don't know what this great thing I'm meant to be doing is, and it looks to me as if I was supposed not to know. And I resent that, right?";

randomfun[5] = "Now the world has gone to bed, Darkness won't engulf my head, I can see by infrared, How I hate the night. Now I lay me down to sleep, Try to count electric sheep, Sweet dream wishes you can keep, How I hate the night. -Marvin.";

randomfun[6] = "You come to me for advice, but you can't cope with anything you don't recognize. Hmmm. So we'll have to tell you something you already know but make it sound like news, eh Well, business as usual , I suppose.";

randomfun[7] = "In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.";

randomfun[8] = "If there's any real truth, it's that the entire multidimensional infinity of the Universe is almost certainly being run by a bunch of maniacs.";

randomfun[9] = "Why are people born? Why do they die? Why do they want to spend so much of the intervening time wearing digital watches?";

randomfun[10] = "The ultimate answer to life,the universe and everything is 42!";

function RandomFun() {
    "use strict";
    var Funny = Math.floor(Math.random() * (randomfun.length));
    document.getElementById('hitchhiker').innerHTML = randomfun[Funny];
}
