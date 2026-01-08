declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "@/*" {
  const module: any;
  export default module;
}

declare module "tailwindcss" {
  interface CustomScreen {
    tablet: "768px";
    desktop: "992px";
  }
  interface Screens extends CustomScreen {}
}

declare module "*.json";
