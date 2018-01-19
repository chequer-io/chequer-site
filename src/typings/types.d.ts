declare module '*.json' {
  const value: any;
  export default value;
}

// Router
interface iAppRouterProps{}
interface iAppRouterState{
  width: number;
  height: number;
}

// SideNav
interface iSideNavProps {
  style?: any;
  currentPageIndex: number;
}
interface iSideNavState {}

interface iCommonPageProps{}
interface iCommonPageState{}

// PageMain
interface iPageMainProps{
  width: number;
  height: number;
}
interface iPageMainState{
  contentId: string;
  currentPageIndex: number;
  prevPageUrl?: string;
  nextPageUrl?: string;
}

interface iFullPageProps{
  width: number;
  height: number;
}
interface iFullPageState{}

interface iPageControlProps{
  prevPageUrl?: string;
  nextPageUrl?: string;
}
interface iPageControlState{}