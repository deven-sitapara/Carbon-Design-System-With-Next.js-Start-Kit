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
} from "@carbon/react";

const DashboardHeader = () => (
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
          <HeaderMenuItem href="#">Dashboard</HeaderMenuItem>
          <HeaderMenuItem href="#">File</HeaderMenuItem>
          <HeaderMenuItem href="#">TSR</HeaderMenuItem>
          <HeaderMenuItem href="#">Documents</HeaderMenuItem>
          <HeaderMenuItem href="#">BT</HeaderMenuItem>
          <HeaderMenuItem href="#">Extra Work</HeaderMenuItem>
          <HeaderMenu aria-label="Link 4" menuLinkName="Setup">
            <HeaderMenuItem href="#">Company</HeaderMenuItem>
            <HeaderMenuItem href="#">Branch</HeaderMenuItem>
            <HeaderMenuItem href="#">Users</HeaderMenuItem>
          </HeaderMenu>
        </HeaderNavigation>

        {/* <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav> */}
        {/* <HeaderGlobalBar /> */}

        <HeaderGlobalBar>
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
          >
            <UserAvatar size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
            <Switcher size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default DashboardHeader;
