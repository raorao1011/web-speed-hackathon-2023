import { ApolloProvider } from '@apollo/client';
import type { FC, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { apolloClient } from '../../../utils/apollo_client';

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => (
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <RecoilRoot>{children}</RecoilRoot>
    </BrowserRouter>
  </ApolloProvider>
);
