declare module '*.json' {
  const value: any;
  export default value;
}

// Router
interface iAppRouterProps{}
interface iAppRouterState{}

// SideNav
interface iSideNavProps {
  style?: any;
}
interface iSideNavState {}

// PageMain
interface iPageMainProps{}
interface iPageMainState{
  width: number;
  height: number;
}

interface iFullPageProps{
  width: number;
  height: number;
}
interface iFullPageState{}

interface iCommonPageProps{}
interface iCommonPageState{}