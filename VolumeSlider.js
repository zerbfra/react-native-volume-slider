/* @flow */
'use strict';

import {
  requireNativeComponent,
  StyleSheet,
  Image
} from 'react-native';
import React, { Component, PropTypes } from 'react';

type Event = Object;

class VolumeSlider extends Component {

  static propTypes = {
    /**
     * The color used for the thumb.
     */
    thumbTintColor: PropTypes.string,

    /**
     * The image for the thumb
     */
    thumbImage: Image.propTypes.source,

    /**
     * The size of the thumb area that allows moving the thumb.
     * The default is {width: 23, height: 23}.
     */
    thumbSize: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number
    }),

    /**
     * The color used for the track to the left of the button. Overrides the
     * default blue gradient image.
     */
    minimumTrackTintColor: PropTypes.string,

    /**
     * The color used for the track to the right of the button. Overrides the
     * default blue gradient image.
     */
    maximumTrackTintColor: PropTypes.string,

    /**
     * Specifies whether or not to show the route button for airplay
     */
    showsRouteButton: PropTypes.bool,

    /**
     * Specifies whether or not to show the volume slider
     */
    showsVolumeSlider: PropTypes.bool,

    /**
     * Callback continuously called while the user is dragging the slider.
     */
    onValueChange: PropTypes.func
  };

  static defaultProps = {
    thumbSize: { width: 23, height: 23 },
    showsRouteButton: true,
    showsVolumeSlider: true
  };

  render() {

    const onValueChange = this.props.onValueChange && ((event: Event) => {
      this.props.onValueChange &&
        this.props.onValueChange(event.nativeEvent.value);
    });

    const { style, ...rest } = this.props;

    return (
      <RNVolumeView
        {...rest}
        onValueChange={onValueChange}
        style={[styles.slider, style]}
      />
    );
  }

}

const styles = StyleSheet.create({
  slider: {
    height: 23,
  },
});

const RNVolumeView = requireNativeComponent('VolumeSlider', VolumeSlider);

export default VolumeSlider
