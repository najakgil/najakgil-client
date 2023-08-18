declare module 'fabricjs-react' {
    // 이곳에 해당 모듈의 타입 선언을 작성하세요.
    // 예: export function useFabricJSEditor(): { ... }
    // 예: export const FabricJSCanvas: React.FC<Props>;
    export const FabricJSCanvas: React.FC<Props>;
    export function useFabricJSEditor(): { editor, onReady }
  }