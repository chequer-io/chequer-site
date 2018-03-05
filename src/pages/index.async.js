import React from 'react';
import Loadable from 'react-loadable';
import { Loading } from 'components';

export const Company = Loadable({
  loader: () => import('./Company'),
  loading: Loading,
});
export const CompanyVision = Loadable({
  loader: () => import('./CompanyVision'),
  loading: Loading,
});
export const CompanySQLGate = Loadable({
  loader: () => import('./CompanySQLGate'),
  loading: Loading,
});
export const People = Loadable({
  loader: () => import('./People'),
  loading: Loading,
});
export const Culture = Loadable({
  loader: () => import('./Culture'),
  loading: Loading,
});
export const Contact = Loadable({
  loader: () => import('./Contact'),
  loading: Loading,
});
export const Recruit = Loadable({
  loader: () => import('./Recruit'),
  loading: Loading,
});
