declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "@/*" {
  const module: any;
  export default module;
}

declare module "*.json";
