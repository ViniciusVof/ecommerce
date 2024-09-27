import { useNavigate } from "react-router-dom";
import { Container, MenuItem, Wrapper } from "./styles";

interface IMenuItems {
  id: string | number;
  title: string;
  slug: string;
}

interface IMenuHeader {
  menuItems: IMenuItems[];
}
export function MenuHeader({ menuItems }: IMenuHeader) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        {menuItems.map(({ title, id, slug }) => (
          <MenuItem onClick={() => navigate(`category/${slug}`)} key={id}>
            {title}
          </MenuItem>
        ))}
      </Container>
    </Wrapper>
  );
}
