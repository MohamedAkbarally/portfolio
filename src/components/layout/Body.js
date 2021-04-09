import { Box, Button, Container, Slide, Zoom } from '@material-ui/core';
import React, { useState } from 'react';

import Block from '../common/Block';

let scrollpos = 0;
export default function Body({ body, color, button }) {
  const [scrollDown, setScrollDown] = useState(true);
  const divScroll = (e) => {
    var position = document.getElementById('scrollablediv').scrollTop;
    setScrollDown(scrollpos - position > 0);
    scrollpos = position;
  };

  const buttons = button.map((btn) => {
    return (
      <Box flexGrow={1} p={1}>
        <Button
          variant="contained"
          disableElevation
          target="_blank"
          href={btn.split(',')[1]}
          size="large"
          style={{
            width: '100%',
          }}
        >
          {btn.split(',')[0]}
        </Button>
      </Box>
    );
  });

  return (
    <div
      id="scrollablediv"
      onScroll={divScroll}
      style={{
        maxHeight: 'calc(100vh - 70px)',
        minHeight: 'calc(100vh - 70px)',
        backgroundColor: '#fff',
        overflow: 'scroll',
      }}
    >
      <Container style={{ marginTop: 24 }}>
        <Block value={body}></Block>
        <div style={{ width: '100%' }}>
          <Box display="flex" alignItems="center" p={0}>
            {buttons}
          </Box>
        </div>
      </Container>
    </div>
  );
}

Body.defaultProps = {
  button: [],
};
