import React from 'react';
import { createPlugin, RenderButton } from '../helpers';
import { Button } from '../components';

const ToolbarButton = () => <Button>🍌</Button>;
export default () => createPlugin([RenderButton(ToolbarButton)]);
