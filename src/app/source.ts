import { docs } from "@/.source/server";
import { loader } from "fumadocs-core/source";
import { icons } from "@/lib/icons";

export const source = loader({
  source: docs.toFumadocsSource(),
  baseUrl: "/docs",
  icon: (name) => (name ? icons[name] : undefined),
});
