# Pokemons App Frontend

## `Notes on Frontend`

The frontend was implemented with React.js, Typescript, and Material UI.

It interacts with an API developed with Laravel 8 using a token based authentication implemented using Laravel Sactum. 

Below are some of the areas that I would like to improve:

1. Add an edit page for editing individual pokemons.
2. Implement pagination to improve performance, because all the pokemons are currently displayed at once which affects the performance of page rendering. The code that needs to be improved is found in the directory: src/dashboard/Pokemon.tsx
3. I will add a view that shows a history of changes that where made on each Pokemon. 
4. I will add a view for confirming email verifications before a user can access the dashboard.
5. I will add a link on the login page for "Forgot Password" where users can go through the process of changing their passwords in case they forgot their current password.
6. I will add a view on the dashboard where users can update their passwords to something new. 
