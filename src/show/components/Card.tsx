// import styled from "styled-components";

// interface ViewerProps {
//   src: string;
//   backgroundhex: string;
//   backgroundimage: string | null;
// }

// export default function Card() {
//   return (
//     <StyledScreen>
//       <Viewer
//         src={selectedCharacterItem}
//         backgroundhex={hex}
//         backgroundimage={uploadedImage}
//         height={"360px"}
//       />
//     </StyledScreen>
//   );
// }

// const StyledScreen = styled.div`
//   width: 360px;
//   height: 360px;
//   position: relative;
//   background: pink;
// `;

// const Viewer = styled.img<ViewerProps>`
//   width: 360px;
//   height: 360px;
//   background: ${(props) => props.backgroundhex};
//   background-image: url(${(props) => props.backgroundimage || "none"});
//   background-size: cover;
//   position: fixed;
// `;
