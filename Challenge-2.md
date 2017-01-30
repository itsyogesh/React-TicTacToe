## Challenge 2 - The questions

Before I begin, I would like to say I had amazing fun working on a game in react. I have never build games before, so this was an interesting challenge, both in terms of understanding game logic and how to put a UI over it. Thank you so much for the challenge. 

Coming to things I wanted to do in the game but couldn't because of time constraints. 

The first and foremost would be to implement something called an [ultimate tic tac toe](https://mathwithbaddrawings.com/2013/06/16/ultimate-tic-tac-toe/). I read about it sometime back on hacker news and once I finished up the app, I thought working on that would be quite challenging and fun. 

Secondly, use sass. When I started the project, I wanted to show off all my skills by writing a full blown webpack config ( that too with webpack 2) with all bells and whistles and not use `create-react-app`. But then the setup took way more than I assumed so I had to settle with CSS for the time being.

Thirdly, and this is something I would do in a production quality app is adding a basic shallow testing with enzyme. I am not too good with writing tests, but shallow testing is something I would even if I had a testing team, just to make sure I didn't break something up. 

#### Now the questions.

##### If it was your main project, what would be your next move? What do you think is missing to your solution?

As I already mentioned, testing, with a focus integration tests. Apart from that, gzipping, using production builds for the core modules, and using yarn and lock files. I would look into seprating components completely in terms of CSS as well, so that I can make them work if this project grows large (say 17*17 boxes). Apart from that, I would have looked into removing transpiled modules that are unused. This is everything I can think of right now.

##### What additional steps would you take to make sure your code runs well in production and in the future. Ok, this is a silly example, we know tic-tac-toe probably won't break on us. But imagine if the board were 17x17, the rulebook 143 pages long and changing every year.

Not putting anything on Parse, that's for sure. Seriously though, I would have set up phabricator or some other task management tool that looks into code reviews. Making sure the nginx is well secured. Rereading the documentation for any performace hits I might come across. I mentioned about how composing components with styles would improve the workflow in terms of a complex project. Updating the modules with careful consideration before jumping ship. 

##### Would you approach it differently, with a tool that requires more setup but does the job better? If so, can you walk us through the solution in some bullet points and high level conceptual code? If not, can you explain to us why your solution beats other alternatives?

Centralised state management, that is for sure. I saw while working on this app how difficult it is to keep a track of all the moving components and their respective states and how you have to keep a mental model of everything in your head before moving forward. Using custom webpack config rather than create-react-app for better control over every aspect of the app.

##### What did you enjoy about the process of designing and implementing your solution? Is there anything you found frustrating?

As I mentioned in the summary, I had an amazing time working on the app. Initially I decided to keep all the gameState in a file called `gameState.js` that keeps track of everything in terms moves and winners. It made me realise how you should never store state outside of react and if you do, trust someone like Dan Abhramov to get it right. I was all over the place, I was using `shouldComponentUpdate` to check if the current state is updated and then update the `square`. If yes, how should I call the `Game` component to keep track of the new state. It was a huge mess. On the brighter side, I now know every lifecycle method react has. So you see, both frustation and joy.

