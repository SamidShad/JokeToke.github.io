let jokes = [
  `How do all the oceans say hello to each other? They wave!`,
  `What did one wall say to the other wall? I’ll meet you at the corner!`,
  `What do you call a bear with no teeth? A gummy bear!`,
  `What do you call cheese that’s not yours? Nacho cheese!`,
  `What do you get when you cross a snowman and a vampire? Frostbite!`,
  `What do elves learn in school? The elf-abet.`,
  `Why are seagulls called seagulls? Because if they flew over the bay, they’d be bagels!`,
  `Why did the girl smear peanut butter on the road? To go with the traffic jam!`,
  `How do you make a tissue dance? You put a little boogie in it.`,
  `What do you call a fake noodle? An impasta!`,
  `Why couldn’t the pony sing himself a lullaby? He was a little hoarse.`,
  `What’s a pirate’s favorite letter? Rrrrrrr!`,
  `What musical instrument is found in the bathroom? A tuba toothpaste.`,
  `Why are fish so smart? Because they live in schools!`,
  `What did 0 say to 8? Nice belt!`,
  `peanut butter kids jokes pullquote`,
  `Why do bananas have to put on sunscreen before they go to the beach? Because they might peel!`,
  `What do you call a cow on a trampoline? A milk shake!`,
  `Where do cows go for entertainment? To the moo-vies!`,
  `How do you know if there’s an elephant under your bed? Your head hits the ceiling!`,
  `What do you call a cow with no legs? Ground beef!`,
  `What do you call a pig that knows karate? A pork chop!`,
  `Why are ghosts bad liars? Because you can see right through them!`,
  `Why do bees have sticky hair? Because they use honey combs!`,
  `What do you call an alligator in a vest? An investigator!`,
  `Why did the man run around his bed? Because he was trying to catch up on his sleep!`,
  `What do you call a dinosaur that is sleeping? A dino-snore!`,
  `Why did the teddy bear say “no” to dessert? Because she was stuffed.`,
  `What has ears but cannot hear? A field of corn.`,
  `What did the left eye say to the right eye? Between us, something smells!`,
  `What did one plate say to the other plate? Dinner is on me!`,
  `honey bee kids jokes pullquote`,
  `Why did the kid cross the playground? To get to the other slide.`,
  `What do you call a droid that takes the long way around? R2 detour.`,
  `How do you stop an astronaut’s baby from crying? You rocket!`,
  `What is a witch’s favorite subject in school? Spelling!`,
  `What do you call a duck that gets all A’s? A wise quacker.`,
  `What kind of tree fits in your hand? A palm tree!`,
  `What animal is always at a game of cricket? A bat.`,
  `What is a tornado’s favorite game to play? Twister!`,
  `How does the moon cut his hair? Eclipse it.`,
  `How does a scientist freshen their breath? With experi-mints!`,
  `How are false teeth like stars? They come out at night!`,
  `How can you tell a vampire has a cold? They starts coffin.`,
  `What’s worse than finding a worm in your apple? Finding half a worm.`,
  `What time is it when the clock strikes 13? Time to get a new clock.`,
  `What do you call a boomerang that won’t come back? A stick.`,
  `palm trees kids jokes pullquote`,
  `Did you hear about the new restaurant on the moon? The food was good, but there really wasn’t much atmosphere.`,
  `How do you make an octopus laugh? With ten-tickles!`,
  `What did the nose say to the finger? Stop picking on me!`,
  `What is a vampire’s favorite fruit? A blood orange.`,
  `What do you call a dog magician? A labracadabrador.`,
  `Why didn’t the skeleton go to the dance? He had no body to dance with.`,
  `What kind of award did the dentist receive? A little plaque.`,
  `What do you call a funny mountain? Hill-arious.`,
  `What did the big flower say to the little flower? Hi, bud!`,
  `Why was the picture sent to prison? It was framed.`,
  `Where do rabbits go after they get married? On a bunny-moon!`,
  `What sound do hedgehogs make when they hug? Ouch!`,
  `Why do ducks make great detectives? They always quack the case.`,
  `What do you call an old snowman? Water.`,
  `Why didn’t the orange win the race? It ran out of juice.`,
  `rabbit kids jokes pullquote`,
  `What dinosaur had the best vocabulary? The thesaurus.`,
  `Why did the man put his money in the freezer? He wanted cold hard cash!`,
  `What creature is smarter than a talking parrot? A spelling bee.`,
  `What is orange and sounds like a parrot? A carrot!`,
  `What kind of dinosaur loves to sleep? A stega-snore-us.`,
  `Where do sheep go to get their hair cut? The baa-baa shop.`,
  `What do you call a group of disorganized cats? A cat-tastrophe.`,
  `Why did the chicken get a penalty? For fowl play.`,
  `Where do you learn to make banana splits? At sundae school.`,
  `Why did the tomato turn red? It saw the salad dressing.`,
  `Where do hamburgers go to dance? The meat-ball.`,
  `What’s the worst thing about throwing a party in space? You have to planet.`,
];
let btn = document.getElementById("btn1");
let jokesText;
btn.addEventListener("click", function showJokes() {
  jokesText = document.getElementById("jokesText").innerHTML =
    jokes[Math.floor(Math.random() * jokes.length)];
});
