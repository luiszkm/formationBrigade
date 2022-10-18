import { ReactNode } from "react";
import { Container } from "./styles";



interface MiniGalleryProps {
  children: ReactNode;
  title: string;
}

export function MiniGallery(props: MiniGalleryProps) {

  return (
    <Container>
      <h4>{props.title}</h4>
      <div>
        {props.children}
      </div>
    </Container>
  )
}