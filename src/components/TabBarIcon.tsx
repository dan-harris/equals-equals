import Colors from '@eqeq/app/models/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export default class TabBarIcon extends React.Component<any> {
  render() {
    return (
      <Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
