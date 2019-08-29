$(document).ready(function () {

const dogs = {
  1: {
    imgs: ['img/tom1.jpg', 'img/tom2.jpg', 'img/tom3.jpg', 'img/tom4.jpg'],
    name: 'Tom',
    breed: 'Lorem Ipsum',
    sex: 'unknown',
    description: 'Opis: Cat ipsum dolor sit amet, meowing chowing and wowing cough hairball on conveniently placed pants for intently stare at the same spot. Steal the warm chair right after you get up. Tuxedo cats always looking dapper intently stare at the same spot, and asdflkjaertvlkjasntvkjn (sits on keyboard). Make meme, make cute face as lick i the shoes so cat ass trophy hide head under blanket so no one can see pretend not to be evil yet give attitude human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken!. Tickle my belly at your own peril i will pester for food salad when in doubt, wash so cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters slippers catty ipsum.Scratch me there, elevator butt check cat door for ambush 10 times before coming in or with tail in the air but ignore the squirrels, you ll never catch them anyway but meow all night. Fooled again thinking the dog likes me kick up litter. Go into a room to decide you didnt want to be in there anyway this cat happen now, it was too purr- fect!!! human give me attention meow rub whiskers on bare skin act innocent.Humans, humans, humans oh how much they love us felines we are the center of attention they feed, they clean use lap as chair love me! for purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table so refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am or bleghbleghvomit my furball really tie the room together run at 3am.Chase imaginary bugs intrigued by the shower, yet cat cat moo moo lick ears lick paws meow all night.Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans mice so miaow then turn around and show you my bum or spit up on light gray carpet instead of adjacent linoleum, for humans, humans, humans oh how much they love us felines we are the center of attention they feed, they clean but meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat.Eat a plant, kill a hand leave hair everywhere hiss at vacuum cleaner so suddenly go on wild- eyed crazy rampage.Meow and walk away wake up human for food at 4am. '
  
 },
  2: {
    imgs: ['img/shiba1.jpg' ,'img/shiba2.jpg', 'img/shiba3.jpg', 'img/shiba4.jpg'],
    name: 'Shiba',
    breed: 'Lorem Ipsum',
    sex: 'male',
    description: 'Opis: Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. '
  },

  3: {
    imgs: ['img/gizmo1.jpg', 'img/gizmo2.jpg', 'img/gizmo3.jpg', 'img/gizmo4.jpg'],
    name: 'Gizmo',
    breed:'Lorem Ipsum',
    sex: 'female',
    description: 'Opis: Fruitcake chupa chups danish sesame snaps caramels macaroon muffin.Sugar plum sugar plum chupa chups apple pie lemon drops tart sweet.Chocolate cake dragée jelly pudding chupa chups pastry donut pastry gummies.Caramels wafer tootsie roll dragée.Powder sesame snaps pie.Gummi bears carrot cake gummies.Carrot cake candy canes danish marzipan icing carrot cake chupa chups tootsie roll candy.Sesame snaps bonbon pudding lemon drops brownie candy canes lollipop marshmallow.Tart pie gummies topping chupa chups jelly- o.Pudding tootsie roll chocolate bar powder jujubes candy canes dessert topping chocolate bar.Apple pie macaroon cake chupa chups apple pie brownie.Danish dragée caramels tart.Ice cream brownie bonbon cake cake.'
  },

  4: {
    imgs:['img/dream1.jpg', 'img/dream2.jpg', 'img/dream3.jpg', 'img/dream4.jpg'],
    name: 'Dream',
    breed: 'Lorem Ipsum',
    sex: 'male',
    description: 'Opis: Cupcake ipsum dolor sit. Amet candy canes oat cake bear claw. Carrot cake jelly beans carrot cake jelly-o. Jelly-o carrot cake pastry cheesecake jelly beans dragée. Jelly-o gummi bears jelly halvah gummi bears wafer. Brownie sesame snaps cake jelly-o chocolate cake. Muffin tiramisu pie sweet roll ice cream. Cotton candy cake toffee. Fruitcake chupa chups sugar plum. Bear claw macaroon icing lemon drops lollipop topping gummies jelly-o chocolate cake. Sweet roll gingerbread pastry gummies powder liquorice biscuit cheesecake toffee. Chocolate chocolate cake chocolate marzipan halvah sesame snaps muffin ice cream oat cake. Tart soufflé sesame snaps cake. Cupcake carrot cake jelly lollipop liquorice oat cake.'


  }
}

const parsedUrl = new URL(window.location.href);
const activeDog = parsedUrl.searchParams.get("id");
const prevBtn = $('.prev');
const nextBtn = $('.next');
const countImg = dogs[activeDog].imgs.length - 1;
let imgIndex = 0;
let dogName = $('.dog-name');
let breed = $('.dog-breed');
let sex = $('.dog-sex');
let description = $('.dog-description');
let dogImg = $('.dog-img');
let firstDot = $('.first-dot');
let secondDot = $('.second-dot');
let thirdDot = $('.third-dot');
let fourthDot = $('.fourth-dot');

dogImg.attr("src", dogs[activeDog].imgs[imgIndex]);
dogName.text(dogs[activeDog].name);
breed.text(dogs[activeDog].breed);
sex.text(dogs[activeDog].sex);
description.text(dogs[activeDog].description);

prevBtn.on('click', function() {
  imgIndex = imgIndex - 1;
  if (imgIndex < 0) {
    imgIndex = countImg;
  }
  dogImg.attr("src", dogs[activeDog].imgs[imgIndex]);
  dogAnimation();
})

nextBtn.on('click', function () {
  imgIndex = imgIndex + 1;
  if(imgIndex > countImg) {
    imgIndex = 0;
  }
  dogImg.attr("src", dogs[activeDog].imgs[imgIndex]);
  dogAnimation();
})

  firstDot.on('click', function () {
  dogImg.attr("src", dogs[activeDog].imgs[0]);
  })
  secondDot.on('click', function () {
    dogImg.attr("src", dogs[activeDog].imgs[1]);
  })
  thirdDot.on('click', function () {
    dogImg.attr("src", dogs[activeDog].imgs[2]);
  })
  fourthDot.on('click', function () {
    dogImg.attr("src", dogs[activeDog].imgs[3]);
  })


function dogAnimation() {
  dogImg.removeClass('dog-changed');
  dogImg.addClass('dog-changing');

  setTimeout(() => {
    dogImg.removeClass('dog-changing');
    dogImg.addClass('dog-changed');
  }, 500);
}





});