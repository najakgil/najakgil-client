import styled from "styled-components";

interface ToolBarProps {
  setSelectedTool: (tool: string) => void;
  selectedTool: string;
}

export default function ToolBar({ setSelectedTool, selectedTool }: ToolBarProps) {
  return (
    <Toolbar>
      <ToolButton
        isselected={selectedTool === "character"}
        onClick={() => setSelectedTool("character")}
      >
        캐릭터
      </ToolButton>
      <ToolButton
        isselected={selectedTool === "decorate"}
        onClick={() => setSelectedTool("decorate")}
      >
        꾸미기
      </ToolButton>
      <ToolButton
        isselected={selectedTool === "background"}
        onClick={() => setSelectedTool("background")}
      >
        배경
      </ToolButton>
    </Toolbar>
  );
}

const Toolbar = styled.div`
  min-width: 360px;
  max-width: 450px;
  height: 36px;
  background: white;
  display: flex;
  justify-content: center;
`;

const ToolButton = styled.button<{ isselected: boolean }>`
  width: 120px;
  height: 36px;
  border-bottom: ${(props) =>
    props.isselected ? "1.5px solid #2294FF" : "1px solid #d9d9d9"};
  color: ${(props) => (props.isselected ? "#2294FF" : "#D9D9D9")};
  text-align: center;
  font-family: Noto Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: ${(props) => (props.isselected ? 700 : 400)};
  line-height: 140%; /* 16.8px */
`;
