import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°Ariary`;
}

function RangeSlider({ value, onChange, max }) {
  const roundToNearest100000 = (value) => Math.round(value / 100000) * 100000;

  const handleSliderChange = (event, newValue) => {
    const roundedValue = roundToNearest100000(newValue);
    onChange(event, roundedValue);
  };

  return (
    <Box sx={{ width: '70%' }, { margin: '0 20px' }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{ color: "orange" }}
        max={max}
        min={100000}
        step={100000}
      />
    </Box>
  );
}

export default RangeSlider;
