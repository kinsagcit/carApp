import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {PicturePreviewView} from 'components/blocks'
import {Documentation} from 'navigation/routeNames'

class PicturePreview extends Component {
  onCancelPress = () => {
    this.props.navigation.goBack()
  }

  onConfirmPress = () => {
    const {onUpdateLicense, selectedLicense, navigation} = this.props
    const {type, side} = selectedLicense
    const imageUri = navigation.getParam('photoUri', null)
    onUpdateLicense({
      type,
      side,
      imageUri
    })
    navigation.navigate(Documentation)
  }

  render () {
    const photoUri = this.props.navigation.getParam('photoUri', null)
    return (
      <PicturePreviewView
        photoUri={photoUri}
        onCancelPress={this.onCancelPress}
        onConfirmPress={this.onConfirmPress}
      />
    )
  }
}
PicturePreview.propTypes = {
  navigation: PropTypes.object,
  selectedLicense: PropTypes.object,
  onUpdateLicense: PropTypes.func
}

export default PicturePreview
