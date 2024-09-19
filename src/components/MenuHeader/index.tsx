import { Container, MenuItem, Wrapper } from "./styles";

interface IMenuItems {
  id: string | number;
  title: string;
}

interface IMenuHeader {
  menuItems: IMenuItems[];
}
export function MenuHeader({ menuItems }: IMenuHeader) {
  return (
    <Wrapper>
      <Container>
        {menuItems.map(({ title, id }) => (
          <MenuItem key={id}>{title}</MenuItem>
        ))}
      </Container>
    </Wrapper>
  );
}
