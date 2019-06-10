import { createMuiTheme } from '@material-ui/core/styles';

// Create Material-UI theme
export const getTheme = ({ fontFamily, direction }) =>
  createMuiTheme({
    direction,
    palette: {
      fontFamily,
      primary: {
        main: '#ffffff',
        light: '#fff',
      },
      secondary: { main: '#000000' },
      error: { main: '#f34336' },
      background: { main: '#1caddc' },
    },
    typography: {
      useNextVariants: true,
      fontFamily,
    },
    overrides: {
      MuiFormLabel: {
        root: {
          color: '#fff',
          fontWeight: 500,
          letterSpacing: '1.1px',
          fontSize: '14px',
        },
      },
      MuiCard: {
        root: {
          borderRadius: '10px',
          boxShadow:
            '0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14)',
        },
      },
      MuiCheckbox: {
        root: {
          color: '#000',
        },
        colorSecondary: {
          color: '#000',
        },
      },
      MuiTableCell: {
        head: {
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '0.5px',
          color: '#000000',
        },
        body: {
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '0.5px',
          color: '#434343',
        },
      },
      MuiCardHeader: {
        root: {
          padding: '19px',
        },
        title: {
          letterSpacing: '0.3px',
          color: 'rgba(0, 0, 0, 0.87)',
          fontSize: '20px',
          fontWeight: '500',
        },
        subheader: {
          letterSpacing: '0.3px',
          color: 'rgba(0, 0, 0, 0.6)',
          fontSize: '14px',
          marginTop: '6%',
        },
      },
      MuiToolbar: {
        regular: {
          height: '80px !important',
          minHeight: '80px',
          paddingLeft: '30px',
          paddingRight: '30px',
        },
        gutters: {
          paddingLeft: '30px',
          paddingRight: '30px',
        },
      },
      MuiPaper: {
        elevation4: {
          boxShadow: '0 2px 25px 0 rgba(0, 0, 0, 0.2)',
        },
        rounded: {
          boxShadow: '0 2px 25px 0 rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 800,
        lg: 1000,
        xl: 1300,
      },
    },
  });
