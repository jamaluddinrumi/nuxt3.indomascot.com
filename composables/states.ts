export const useCounter = () => useState<number>("counter", () => 0);
export const useColor = () => useState<string>("color", () => "pink");
export const useBreadcrumbsMenus = () =>
  useState<Array<Object>>("breadcrumbs-menus", () => []);
export const useMainMenu = () => useState<boolean>("main-menu", () => false);
