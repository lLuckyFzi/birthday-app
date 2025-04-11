import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/main.tsx"),
    route("game/prologue-chasing-cats", "routes/ChasingCats/prologue.tsx"),
    route("game/chasing-cats", "routes/ChasingCats/chasingCats.tsx"),

    route("game/prologue-tic-tac-toe", "routes/tic-tac-toe/prologue.tsx"),    
    route("game/tic-tac-toe", "routes/tic-tac-toe/tic-tac-toe.tsx"),    

] satisfies RouteConfig;
