var tolerances = {
  "red": [145,78,92,255],
  "green": [111, 140, 112, 255],
  "yellow": [150, 149, 112, 255],
  "purple": [80, 75, 113, 255],
  "diff": 13
};

var inputs = {
  'red' : ["YERTLE THE TURTLE",
            "I’m Yertle the Turtle!<br>Oh, marvelous me!<br>For I am the ruler<br>of all that I see!",
            "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
            "Your Majesty. Please…<br>I don’t like to complain.<br>But down here below,<br>we are feeling great pain."
          ],
  'green': ["HORTON HEARS A WHO!",
            "\“I’ll find it!\” cried Horton.<br>\“I’ll find it or bust!<br>I SHALL find my friends<br>on my small speck of dust!\”",
            "The more that you read, the more things you will know. The more you learn, the more places you’ll go.",
            "We’ve GOT to make noises in greater amounts!<br>So, open your mouth, lad!<br>For every voice counts!"
          ],
  'yellow': ["HOW THE GRINCH STOLE CHRISTMAS!",
             "The Grinch hated Christmas!<br>The whole Christmas season!<br>Now, please don't ask why.<br>No one quite knows the reason.",
             "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
             "\“Maybe Christmas,\” he thought, \“doesn’t come from a store.<br>Maybe Christmas… perhaps…<br>means a little bit more!\”"
           ],
  'purple': ["THE LORAX",
             "I am the Lorax.<br>I speak for the trees.<br>I speak for the trees, for the trees have no tongues.",
             "Fantasy is a necessary ingredient in living, it’s a way of looking at the life through the wrong end of a telescope.",
             "I meant no harm.<br>I most truly did not.<br>But I had to grow bigger.<br>So bigger I got."
           ]

};

var points = [],
    coords = [
               [129, 115],
               [128, 172],
               [130, 255],
               [131, 310]
             ];
