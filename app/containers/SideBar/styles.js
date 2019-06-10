const styles = theme => ({
  drawerRoot: {},
  drawerRow: {
    color: '#fff',
    fontWeight: 500,
    fontSize: '13px',
  },
  toggleButton: {
    transition: theme.transitions.create('border-radius', {
      duration: theme.transitions.duration.standard,
    }),
    backgroundColor: '#4cc0ff',
    borderRadius: '40px',
    padding: '4px',
    border: '2px solid #fff',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#3b9eff',
      borderRadius: '10px',
    },
  },
  rotateButton: {
    transform: 'rotate(180deg)',
  },
  buttonRoot: {
    zIndex: 1400,
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '15px',
    marginRight: '15px',
  },
  drawerPaper: {
    width: '210px',
    overflowX: 'hidden',
  },
  drawerOpen: {
    width: '210px',
    backgroundColor: '#0070ba',
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClosed: {
    backgroundColor: '#0070ba',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: '80px',
    [theme.breakpoints.up('sm')]: {
      width: '80px',
    },
  },
});

export default styles;
