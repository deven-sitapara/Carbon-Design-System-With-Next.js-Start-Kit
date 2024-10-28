import { Notification, Switcher, UserAvatar } from "@carbon/icons-react";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  HeaderMenu,
  Column,
  Grid,
} from "@carbon/react";
import { ThemeDropdown } from "../AuthThemeSelector/ThemeDropdown";
import { useRouter } from "next/navigation";

const DashboardHeader = () => {
  const router = useRouter();
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Carbon Tutorial">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName href="/" prefix="CM">
            Law Firm
          </HeaderName>

          <HeaderNavigation aria-label="IBM [Platform]">
            <HeaderMenuItem href="/dashboard">Dashboard</HeaderMenuItem>
            <HeaderMenuItem href="/file">File</HeaderMenuItem>
            <HeaderMenuItem href="/file/tsr">TSR</HeaderMenuItem>
            <HeaderMenuItem href="/file/document">Documents</HeaderMenuItem>
            <HeaderMenuItem href="/file/bt">BT</HeaderMenuItem>
            <HeaderMenuItem href="/file/extrawork">Extra Work</HeaderMenuItem>
            <HeaderMenu aria-label="Setup" menuLinkName="Setup">
              <HeaderMenuItem href="/setup/company">Company</HeaderMenuItem>
              <HeaderMenuItem href="/setup/branches">Branches</HeaderMenuItem>
              <HeaderMenuItem href="/setup/users">Users</HeaderMenuItem>
            </HeaderMenu>
          </HeaderNavigation>

          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems aria-label="IBM [Platform]">
                <HeaderMenuItem href="/dashboard">Dashboard</HeaderMenuItem>
                <HeaderMenuItem href="/file">File</HeaderMenuItem>
                <HeaderMenuItem href="/file/tsr">TSR</HeaderMenuItem>
                <HeaderMenuItem href="/file/document">Documents</HeaderMenuItem>
                <HeaderMenuItem href="/file/bt">BT</HeaderMenuItem>
                <HeaderMenuItem href="/file/extrawork">
                  Extra Work
                </HeaderMenuItem>
                <HeaderMenu aria-label="Setup" menuLinkName="Setup">
                  <HeaderMenuItem href="/setup/company">Company</HeaderMenuItem>
                  <HeaderMenuItem href="/setup/branches">
                    Branches
                  </HeaderMenuItem>
                  <HeaderMenuItem href="/setup/users">Users</HeaderMenuItem>
                </HeaderMenu>
              </HeaderSideNavItems>
            </SideNavItems>
            <div className="mt-02 space-01 ">
              <Grid condensed>
                <Column md={0} sm={1}>
                  <ThemeDropdown direction="top"></ThemeDropdown>
                </Column>
              </Grid>
            </div>
          </SideNav>

          <HeaderGlobalBar />

          <HeaderGlobalBar>
            <div className="mt-02 space-01 ">
              <Grid condensed>
                <Column md={1} sm={0}>
                  <ThemeDropdown direction="down"></ThemeDropdown>
                </Column>
              </Grid>
            </div>

            <HeaderGlobalAction
              aria-label="Notifications"
              tooltipAlignment="center"
              className="action-icons"
            >
              <Notification size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="User Avatar"
              tooltipAlignment="center"
              className="action-icons"
              onClick={() => router.push("/login")}
            >
              <UserAvatar size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="App Switcher"
              tooltipAlignment="end"
            >
              <Switcher size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    />
  );
};

export default DashboardHeader;
