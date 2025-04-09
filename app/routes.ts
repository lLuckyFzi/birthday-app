import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/main.tsx"),
    route("game/prologue-chasing-cats", "routes/ChasingCats/prologue.tsx"),
    route("game/chasing-cats", "routes/ChasingCats/chasingCats.tsx"),
] satisfies RouteConfig;
