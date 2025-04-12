import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/main.tsx"),
  route("game/prologue-chasing-cats", "routes/ChasingCats/prologue.tsx"),
  route("game/chasing-cats", "routes/ChasingCats/chasingCats.tsx"),

  route("game/prologue-tic-tac-toe", "routes/tic-tac-toe/prologue.tsx"),
  route("game/tic-tac-toe", "routes/tic-tac-toe/tic-tac-toe.tsx"),

  route("game/prologue-puzzle", "routes/puzzle/prologue.tsx"),
  route("game/puzzle", "routes/puzzle/puzzle.tsx"),

  route("game/prologue-greeting-cards", "routes/greeting-cards/prologue.tsx"),
  route("game/greeting-cards", "routes/greeting-cards/greeting-cards.tsx"),

  route("game/prologue-wishing-form", "routes/wishing-form/prologue.tsx"),
  route("game/wishing-form", "routes/wishing-form/wishing-form.tsx"),
  route("game/finish", "routes/wishing-form/finish.tsx"),

  route("menu", "routes/main-menu.tsx"),
] satisfies RouteConfig;
