import {
  MenuContainer,
  MenuItem,
  MenuItemsContainer,
  MenuTitle,
} from "./styles";

interface IMenuItem {
  title: string;
}

interface IBlockVerticalMenu {
  title: string;
  menuItems: IMenuItem[];
}

export function BlockVerticalMenu({ title, menuItems }: IBlockVerticalMenu) {
  return (
    <MenuContainer>
      <MenuTitle>{title}</MenuTitle>
      <MenuItemsContainer>
        {menuItems.map(({ title }) => (
          <MenuItem>{title}</MenuItem>
        ))}
      </MenuItemsContainer>
    </MenuContainer>
  );
}
