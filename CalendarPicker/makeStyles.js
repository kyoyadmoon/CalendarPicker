/**
 * Calendar Picker Component
 *
 * Copyright 2016 Yahoo Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */
'use strict';

const HEADER_CONTROL_SCALE = 1.3;

function makeStyles(scaler) {
  return {
    calendar: {
      height: 320*scaler,
      marginTop: 10*scaler
    },
    dayWrapper: {
      width: 50*scaler,
      height: 40*scaler,
      backgroundColor: 'rgba(0,0,0,0.0)'
    },

    dayButton: {
      width: 50*scaler,
      height: 40*scaler,
      alignSelf: 'center'
    },

    dayButtonSelected: {
      width: 30*scaler,
      height: 30*scaler,
      borderRadius: 15*scaler,
      backgroundColor: '#5ce600',
      alignSelf: 'center'
    },

    dayLabel: {
      fontSize: 14*scaler,
      color: '#FFF',
      marginTop: 6*scaler,
      alignSelf: 'center'
    },

    dayLabelsWrapper: {
      flexDirection: 'row',
      marginBottom: 10*scaler,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      paddingTop: 10*scaler,
      paddingBottom: 10*scaler,
      alignSelf: 'center',
      backgroundColor: 'rgba(0,0,0,0.0)',
      borderColor: 'rgba(0,0,0,0.2)'
    },

    daysWrapper: {
      alignSelf: 'center'
    },

    dayLabels: {
      width: 50*scaler,
      fontSize: 10*scaler,
      color: '#FFF',
      textAlign: 'center'
    },

    selectedDay: {
      width: 60*scaler,
      height:60*scaler,
      backgroundColor: '#5ce600',
      borderRadius: 30*scaler,
      alignSelf: 'center'
    },

    monthLabel: {
      fontSize: 16*scaler*HEADER_CONTROL_SCALE,
      color: '#FFF',
      width: 180*scaler,
      textAlign: 'center'
    },

    headerWrapper: {
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
      marginBottom: 10*scaler,
      padding: 5*scaler,
      paddingBottom: 3*scaler,
      backgroundColor: 'rgba(0,0,0,0.0)'
    },

    monthSelector: {
      width: 80*scaler
    },

    prev: {
      color: '#FFF',
      textAlign: 'left',
      fontSize: 14*scaler*HEADER_CONTROL_SCALE,
    },

    next: {
      color: '#FFF',
      textAlign: 'right',
      fontSize: 14*scaler*HEADER_CONTROL_SCALE,
    },

    yearLabel: {
      fontSize: 14*scaler,
      fontWeight: 'bold',
      color: '#FFF',
      textAlign: 'center'
    },

    weeks: {
      flexDirection: 'column'
    },

    weekRow: {
      flexDirection: 'row'
    }
  };
}


module.exports = makeStyles;