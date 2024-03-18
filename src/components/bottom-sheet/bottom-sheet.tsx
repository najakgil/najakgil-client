/** @jsxImportSource @emotion/react */
import { ComponentProps } from 'react';
import { css } from '@emotion/react';
import { Drawer } from 'vaul';

const base = css({
  width: '50%',
  minWidth: '328px',
  maxWidth: '360px',
  margin: '0 auto',
  height: '161px',
  display: 'flex',
  flexDirection: 'column',
  padding: '12px 20px 20px 20px',
  gap: '24px',
  borderRadius: '20px',
  boxShadow: '0px 0px 16px 2px rgba(0, 0, 0, 0.12)',
  backgroundColor: 'white',
  position: 'fixed',
  zIndex: 10000,
  bottom: '30px',
  left: '0px',
  right: '0px',
  color: '#1E212B',
  fontSize: '18px',
  fontWeight: '600',
  '&::after': {
    visibility: 'hidden',
  },
});

const bottomSheetBar = css({
  margin: '0 auto',
  width: '48px',
  height: '4px',
  borderRadius: '999px',
  backgroundColor: '#E5E8EB',
});

const groupButton = css({
  display: 'flex',
  gap: '10px',
  justifyContent: 'space-between',
});

const overlay = css({
  position: 'fixed',
  inset: 0,
  margin: '0 auto',
  width: '100%',
  minWidth: '390px',
  maxWidth: '450px',
  backgroundColor: 'rgba(11, 19, 30, 0.37)',
  backdropFilter: 'blur(3px)',
  WebkitBackdropFilter: 'blur(3px)',
});

const Root = ({ ...props }: ComponentProps<typeof Drawer.Root>) => <Drawer.Root {...props} />;
const Trigger = ({ ...props }: ComponentProps<typeof Drawer.Trigger>) => (
  <Drawer.Trigger {...props} />
);
const Portal = ({ ...props }: ComponentProps<typeof Drawer.Portal>) => <Drawer.Portal {...props} />;
const Content = ({ children, ...props }: ComponentProps<typeof Drawer.Content>) => (
  <Drawer.Content css={base} {...props}>
    <div css={bottomSheetBar} />
    {children}
  </Drawer.Content>
);
const Overlay = ({ ...props }: ComponentProps<typeof Drawer.Overlay>) => (
  <Drawer.Overlay {...props} css={overlay} />
);

const BottomCTA = ({ children }: ComponentProps<typeof Drawer.Content>) => {
  return <div css={groupButton}>{children}</div>;
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
