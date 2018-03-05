declare module '*.json' {
  const value: any;
  export default value;
}
declare module '*.png' {
  const value: any;
  export default value;
}
declare module '*.jpg' {
  const value: any;
  export default value;
}

// Router
interface iAppRouterProps {}

interface iAppRouterState {
  width: number;
  height: number;
  scrollTop: number;
}

// SideNav
interface iSideNavProps {
  style?: any;
  focusedPageIndex: number;
  pages: {
    id: string;
    component: any;
    label: string;
  }[];
  width?: number;
  height?: number;
  goPage: Function;
}

interface iSideNavState {}

interface iCommonPageProps {
  goPage: Function;
}

interface iCommonPageState {}

// PageMain
interface iPageMainProps {
  width: number;
  height: number;
  scrollTop: number;
  fnScrollTo: Function;
}

interface iPageMainState {
  locationKey: string;
  contentId: string;
  currentPageIndex: number;
  focusedPageIndex: number | null;
  prevPageUrl?: string;
  nextPageUrl?: string;
}

interface iFullPageProps {
  pageIndex: number;
  width: number;
  height: number;
  className: any;
}

interface iFullPageState {}

interface iPageControlProps {
  prevPageUrl?: string;
  nextPageUrl?: string;
}

interface iPageControlState {}
