# pokemons-app-frontend

## `Notes on Frontend`

The frontend was implemented with React.js, Typescript, and Material UI.

It interacts with an API developed with Laravel 8 using a token based authentication implemented using Laravel Sactum. 

Below are some of the areas that I would like to improve:

1. Add an edit page for editing individual pokemons.
2. Implement pagination to improve performance, because all the pokemons are currently displayed at once which affects the performance of page rendering. The code that needs to be improved is found in the directory: src/dashboard/Pokemon.tsx
3. I will add a view that shows a history of changes that where made on each Pokemon. 
