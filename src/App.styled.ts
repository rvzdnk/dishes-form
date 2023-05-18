import styled from "styled-components";

export const Video = styled.video`
  object-fit: cover;
  opacity: 0.6;
  width: 100%;
  height: 55rem;
  @media(min-width: 420px) {
    height: 45rem;
  }
	@media(min-width: 720px) {
			height: 50rem;
	}
`

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  height: 100%;
`

export const Background = styled.source`
`