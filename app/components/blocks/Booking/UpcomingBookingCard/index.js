import React from 'react'
import {BookingCard} from '../BookingCard'
import moment from 'moment-timezone'
import PropTypes from 'prop-types'

const UpcomingBookingCard = ({booking, onPress}) => {
  const onBookingPress = () => {
    onPress(booking)
  }
  let startingAt = moment.tz(booking['booking_starting_at'].object.date, 'America/New_York')
  let now = moment().tz('America/New_York')
  return (
    <BookingCard
      booking={booking.car}
      bookingEnd={booking['booking_ending_at'].formatted}
      bookingStart={booking['booking_starting_at'].formatted}
      extraDetail={`Starting in ${now.to(startingAt, true)}`}
      onPress={onBookingPress}
    />
  )
}

UpcomingBookingCard.propTypes = {
  booking: PropTypes.object,
  onPress: PropTypes.func
}

UpcomingBookingCard.defaultProps = {
  onPress: () => {}
}

export {UpcomingBookingCard}
