# so_long

`so_long` is a project in the 42 curriculum that involves creating a small 2D game using the MinilibX library. This project helps you understand game development fundamentals, graphical rendering, and event handling in C.

## Overview

`so_long` is a simple 2D game where the player navigates through a map, collecting items and avoiding enemies to reach the exit. The project covers key concepts such as window management, sprite rendering, and user input handling.

## Features

- **Map Rendering:** Display a game map loaded from a file with walls, empty spaces, collectibles, enemies, and an exit.
- **Player Movement:** Control the player character to move up, down, left, and right within the game window.
- **Collectibles:** Implement collectible items that the player must gather to progress.
- **Enemies:** Add intelligent enemies that pursue the player, increasing the game's challenge.
- **Win/Lose Conditions:** Define conditions for winning (reaching the exit with all collectibles) and losing (being caught by an enemy).

## Getting Started

To get started with `so_long`, clone the repository and compile the program using the provided Makefile:

```bash
git clone https://github.com/BenjaminLarger/so_long.git
cd so_long
make bonus