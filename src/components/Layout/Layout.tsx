import Profile from '../Profile/Profile';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>
        <div>
          <Profile></Profile>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
