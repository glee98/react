import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem, { useTreeItem } from '@mui/lab/TreeItem';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import { Layout } from "antd";
import { Collapse } from "antd";
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Resizable } from 're-resizable';


const CustomContentRoot = styled('div')(({ theme }) => ({
  WebkitTapHighlightColor: 'transparent',
  '&:hover, &.Mui-disabled, &.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused, &.Mui-selected:hover':
    {
      backgroundColor: 'transparent',
    },
  [`& .MuiTreeItem-contentBar`]: {
    position: 'absolute',
    width: 230,
    height: 23,
    left: 0,
    '&:hover &': {
      backgroundColor: theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-disabled &': {
      opacity: theme.palette.action.disabledOpacity,
      backgroundColor: 'transparent',
    },
    '&.Mui-focused &': {
      backgroundColor: theme.palette.action.focus,
    },
    '&.Mui-selected &': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity,
      ),
    },
    '&.Mui-selected:hover &': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity,
      ),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    '&.Mui-selected.Mui-focused &': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity,
      ),
    },
  },
}));

const CustomContent = React.forwardRef(function CustomContent(props, ref) {
  const {
    className,
    classes,
    label,
    nodeId,
    icon: iconProp,
    expansionIcon,
    displayIcon,
  } = props;

  const {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection,
  } = useTreeItem(nodeId);

  const icon = iconProp || expansionIcon || displayIcon;

  const handleMouseDown = (event) => {
    preventSelection(event);
  };

  const handleClick = (event) => {
    handleExpansion(event);
    handleSelection(event);
  };

  return (
    <CustomContentRoot
      className={clsx(className, classes.root, {
        'Mui-expanded': expanded,
        'Mui-selected': selected,
        'Mui-focused': focused,
        'Mui-disabled': disabled,
      })}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      ref={ref}
    >
      <div className="MuiTreeItem-contentBar" />
      <div className={classes.iconContainer}>{icon}</div>
      <Typography component="div" className={classes.label}>
        {label}
      </Typography>
    </CustomContentRoot>
  );
});

CustomContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  displayIcon: PropTypes.node,
  expansionIcon: PropTypes.node,
  icon: PropTypes.node,
  label: PropTypes.node,
  nodeId: PropTypes.string.isRequired,
};

function CustomTreeItem(props) {
  return <TreeItem ContentComponent={CustomContent} {...props} />;
}
const { Sider } = Layout;

export default function BarTreeView() {
  
  const [focusDisabledItems, setFocusDisabledItems] = React.useState(false);
  const handleToggle = (event) => {
    setFocusDisabledItems(event.target.checked);
  };


  return (
    <Box sx={{ height: '100%', maxWidth: 230, overflowY: 'auto' }} px={2}>
      <Box sx={{ mb: 0 }}>
        <FormControlLabel
          control={
            <Switch
              checked={focusDisabledItems}
              onChange={handleToggle}
              name="focusDisabledItems"
            />
          }
          label="Focus disabled items"
        />
    </Box>

    <Layout>
      <Layout>
        <Sider
          width = {230}
          height = {277}
          style = {{
            background: "#ffffff"
          }}
          >
    
    <Collapse bordered={false} defaultActiveKey={["1"]}> 
    <TreeView
      aria-label="icon expansion"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: "100%", width: 230, position: 'left', overflowX : "hidden"}}
    >
      <Resizable axis = "y">
      <CustomTreeItem nodeId="1" label="Category 1" key = "1">
        <CustomTreeItem nodeId="2" label="Folder 1" key = "1" />
        <CustomTreeItem nodeId="3" label="Folder 2" key = "2">
          <CustomTreeItem nodeId="4" label="File 1" />
          <CustomTreeItem nodeId="5" label="File 2" />
          <CustomTreeItem nodeId="6" label="File 3" />
          <CustomTreeItem nodeId="7" label="File 4" />
          <CustomTreeItem nodeId="8" label="File 5" />
          <CustomTreeItem nodeId="9" label="File 6" />
          <CustomTreeItem nodeId="10" label="File 7" />
          <CustomTreeItem nodeId="11" label="File 8" />
          <CustomTreeItem nodeId="12" label="File 9" />
          <CustomTreeItem nodeId="13" label="File 10" />
          </CustomTreeItem>
        </CustomTreeItem>
        </Resizable>
        </TreeView>
        </Collapse>
    
    
    <Collapse bordered={false} defaultActiveKey={["1"]}> 
    <TreeView
      aria-label="icon expansion"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: '100%', width: 230, position: 'left', overflowX : "hidden"}}
    >
      <Resizable axis = "y">
      <CustomTreeItem nodeId="1" label="Category 2" key = "1">
        <CustomTreeItem nodeId="2" label="Folder 1" key = "1"/>
        <CustomTreeItem nodeId="3" label="Folder 2" key = "2">
          <CustomTreeItem nodeId="4" label="File 1" />
          <CustomTreeItem nodeId="5" label="File 2" />
          <CustomTreeItem nodeId="6" label="File 3" />
          <CustomTreeItem nodeId="7" label="File 4" />
          <CustomTreeItem nodeId="8" label="File 5" />
          <CustomTreeItem nodeId="9" label="File 6" />
          <CustomTreeItem nodeId="10" label="File 7" />
          <CustomTreeItem nodeId="11" label="File 8" />
          <CustomTreeItem nodeId="12" label="File 9" />
          <CustomTreeItem nodeId="13" label="File 10" />
          </CustomTreeItem>
        </CustomTreeItem>
        </Resizable>
        </TreeView>
        </Collapse>

        </Sider>
        </Layout>
        </Layout>
        </Box>
        
  );
}
