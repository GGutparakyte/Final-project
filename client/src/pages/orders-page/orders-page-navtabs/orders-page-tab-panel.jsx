import * as React from 'react';
import Box from '@mui/material/Box';

const TabPanel = (props) => {
  const {
    children, value, index, ...other
  } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      sx={{ width: '50vw', minHeight: '300px' }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </Box>
  );
};

export default TabPanel;
