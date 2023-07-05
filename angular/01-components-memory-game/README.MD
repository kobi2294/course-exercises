# Angular Components - Memory Game

## Goal
Practice Angular components authoring. 
* Component Creation
* Inputs
* Outputs
* Lifecycle hooks
* Components Hierarchy Architecture


## Overview
In this exercise we will create a simple memory game. The game will have two players who take turns to find matching pairs of cards. Each player will accumulate the pairs they've found. 

## Requirements
0. Before you start coding, download some images and store them in the `assets` folder. 
    - Add another image for the back face of the card. This is the image that will be displayed when the card is flipped
1. Define these types:
    - `Player`: should have properties for `name`, and an array of `collectedPairs`. You can initialize the names to `Player 1` and `Player 2`
    - `Card`: should have properties for `id` and `image`
    - `CardCell`: `Card | null`, this type describes the content of each cell in the board grid.
2. Create four Angular components:
    - `CardComponent`: displays a card. (Presentational)
        - This component should take a `CardCell` as input
        - It should take a `flipped: boolean` input
        - It should emit an event when the card is clicked
        - Should present an image according to the card image and flipped inputs. If it is empty, present only a border. If it is flipped it should present the image of the card. If not, it should present a card background image. Part of the logic of this component is to calculate the correct path to the image source file
    - `PlayerComponent`: displays a player's info (Presentational) 
        - This component should take a `Player` as input.
        - Should display name, the number of pairs they've collected, and the cards of the collected pairs. 
    - `BoardComponent`: displays the board (Presentational) 
        - This component should take the list of `CardCell`s as input.  (the nulls are for cards that were picked by one of the players and are missing from the pile)
        - It should hold a list of "flipped" card ids.
            - It should present the cards in a grid
            - It should populate the "flipped" input according to the array of flipped cards (use the `includes` method to check if array contains value)        
        - It should respond to the "flipped" event of the card component by actually flipping it (adding it to the list of flipped ids)
            - When the number of flipped cards is 2, it should "freeze" and not allow to flip any more
            - When it is "frozen" clicking another time unfreezes the board while emittin an event
            - If they are matched, it should emit a (match) event and pass the array of cards as payload
            - If they are not matched, it should emit a (miss) event;
            - In addition to emitting the event, it should empty the "flipped" array, which will cause all cards to appear face down again.

    - `AppComponent` (Parent Component): displays two `PlayerComponent`s and one `BoardComponent`. It also includes a "New Game" button to reset the game.
        - Respond to the `BoardComponent (miss) and (match)` events by changing the state of the game
        - Send the proper inputs to all the other components
      - The main component should also handle the state where the game is over and allow the user to click "new game" to start a new game

3. Game Logic:
    - The game starts with the first player.
    - When a player flips a pair of matching cards, those cards are added to the player's `collectedPairs`.
    - Players take turns flipping cards. A turn consists of flipping two cards.
    - The game continues until all pairs are found.
    - The "New Game" button should reset the game state.

## Hints

- To generate the list of cards, consider creating a list of images, duplicating that list, and then concatinating them. Each card should be assigned a unique `id`.
- The following function suffles an array
``` javascript
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
```
- To duplicate an array use: 
```javascript
const newArray = [...sourceArray];
```
- To concatinate two arrays use:
```javascript
const resultArray = [...array1, ...array2];
```

