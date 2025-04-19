import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/insights", "routes/insights.tsx"),
  route("/insights-single", "routes/insights-single.tsx"),
  route("/services", "routes/services.tsx"),
  route("/contact", "routes/contact.tsx"),
] satisfies RouteConfig;
