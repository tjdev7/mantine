import { createStyles, MantineNumberSize } from '@mantine/core';

export interface SpotlightStylesParams {
  centered: boolean;
  maxWidth: number;
  topOffset: number;
  radius: MantineNumberSize;
  zIndex: React.CSSProperties['zIndex'];
}

export default createStyles(
  (theme, { centered, maxWidth, topOffset, radius, zIndex }: SpotlightStylesParams) => ({
    root: {
      ...theme.fn.cover(),
      position: 'fixed',
      zIndex,
    },

    spotlight: {
      position: 'relative',
      zIndex: 2,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      borderRadius: theme.fn.radius(radius),
      width: '100%',
      maxWidth,
      overflow: 'auto',
      marginLeft: 'calc(var(--removed-scroll-width, 0px) * -1)',
    },

    overlay: {
      ...theme.fn.cover(),
      position: 'fixed',
    },

    inner: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: centered ? theme.spacing.md : topOffset,
      justifyContent: centered ? 'center' : 'flex-start',
      alignItems: 'center',
    },

    searchInput: {
      border: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    },
  })
);
