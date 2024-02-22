import { Drawer } from 'vaul';
import * as S from './bottom-sheet.css';
import { ComponentProps, PropsWithChildren } from 'react';

const Root = ({ ...props }: ComponentProps<typeof Drawer.Root>) => <Drawer.Root {...props} />;
const Trigger = ({ ...props }: ComponentProps<typeof Drawer.Trigger>) => (
  <Drawer.Trigger {...props} />
);
const Portal = ({ ...props }: ComponentProps<typeof Drawer.Portal>) => <Drawer.Portal {...props} />;
const Content = ({ children, ...props }: ComponentProps<typeof Drawer.Content>) => (
  <Drawer.Content className={S.base} {...props}>
    <div className={S.bottomSheetBar} />
    {children}
  </Drawer.Content>
);
const Overlay = ({ ...props }: ComponentProps<typeof Drawer.Overlay>) => (
  <Drawer.Overlay {...props} className={S.overlay} />
);

const BottomCTA = ({ children }: PropsWithChildren) => {
  return <div className={S.groupButton}>{children}</div>;
};

export const BottomSheet = {
  ...Drawer,
  Root,
  Trigger,
  Portal,
  Content,
  Overlay,
  BottomCTA,
};
