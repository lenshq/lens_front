import React, { PropTypes, Component } from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import DiffMonitor from 'redux-devtools-diff-monitor';
import SliderMonitor from 'redux-slider-monitor';
import { TestMonitor } from 'redux-devtools-gentest-plugin';
import { CompositeMonitor, debugPanelDecorator } from 'redux-devtools-monitor-dock';

const debugPanelDecorators = {
  topRightBottom: debugPanelDecorator({
    top: true,
    right: true,
    bottom: true
  }),
  leftRightBottom: debugPanelDecorator({
    left: true,
    right: true,
    bottom: true
  })
};

const monitors = {
  'log': debugPanelDecorators.topRightBottom(LogMonitor),
  'test': debugPanelDecorators.topRightBottom(TestMonitor),
  'slider': debugPanelDecorators.leftRightBottom(SliderMonitor),
  'diff': DiffMonitor
};

export default class Debugger extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    return (
      <DebugPanel top right bottom key='debugPanel'>
        <DevTools
          store={this.props.store}
          monitor={DiffMonitor}
        />
      </DebugPanel>
    );
  }
}
