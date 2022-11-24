const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  basePath: '/',
  route: '/',
  pathname: '',
  query: '',
  asPath: '',
  prefetch: () => ({
    catch: () => {}
  })
}));
