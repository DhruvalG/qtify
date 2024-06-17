import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const AlbumPlaylistCardFilters = ({ key, value, handleChange }) => (
  <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        key={key}
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        textColor="inherit"
        indicatorColor="secondary"
      >
        <Tab label="All" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
        <Tab label="Rock" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
        <Tab label="Jazz" id="simple-tab-2" aria-controls="simple-tabpanel-2" />
        <Tab label="Pop" id="simple-tab-3" aria-controls="simple-tabpanel-3" />
        <Tab
          label="Blues"
          id="simple-tab-4"
          aria-controls="simple-tabpanel-4"
        />
      </Tabs>
    </Box>
  </Box>
);

export default AlbumPlaylistCardFilters;