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
}
interface iSideNavState {}

// PageMain
interface iPageMainProps{
  width: number;
  height: number;
}
interface iPageMainState{
  currentPage: number;

}

interface iFullPageProps{
  width: number;
  height: number;
}
interface iFullPageState{}

interface iCommonPageProps{}
interface iCommonPageState{}