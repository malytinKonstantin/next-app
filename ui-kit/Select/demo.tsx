import React, { useState } from 'react';
import { Select } from '@/ui-kit/Select/Select';

const delay = (ms: number): Promise<void> =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

const options = Array.from({ length: 3 }).map((_, idx) => {
  const disabled = idx === 1;
  return {
    caption: `Item ${idx}${disabled ? ' (disabled)' : ''}`,
    value: '' + idx,
    disabled,
  };
});

const handleChange = (val: string) => {
  console.log('onChange val', val);
};

export const DemoSelects = () => {
  const [loading, setLoading] = useState(false);
  const handleChangeAsync = async (val: string) => {
    setLoading(true);
    await delay(700);
    setLoading(false);
    console.log('onSelect val', val);
  };

  return (
    <>
      <div style={{ display: 'flex', width: '100%', margin: '40px 0' }}>
        <div style={{ width: '50%', marginRight: '10px' }}>
          <Select
            label="Select with label"
            placeholder="Choose something"
            options={options}
            onChange={handleChange}
          />
        </div>

        <Select
          autocomplete
          label="Select with label and loading"
          placeholder="Choose something"
          loading={loading}
          options={options}
          onChange={handleChangeAsync}
        />
      </div>

      <div style={{ display: 'flex', margin: '20px 0' }}>
        <div style={{ width: '50%', marginRight: '10px' }}>
          <Select
            autocomplete
            placeholder="No data"
            options={[]}
            onChange={handleChange}
          />
        </div>
        <Select
          autocomplete
          disabled
          placeholder="disabled"
          options={options}
          onChange={handleChange}
        />
      </div>

      <div style={{ display: 'flex', width: '100%', margin: '40px 0' }}>
        <div style={{ width: '50%', marginRight: '10px' }}>
          <Select
            label="Success select"
            value={options[0].value}
            validation={{
              status: 'success',
              message: 'Success message',
            }}
            placeholder="Choose something"
            options={options}
            onChange={handleChange}
          />
        </div>

        <Select
          autocomplete
          label="Error select"
          value={options[0].value}
          validation={{
            status: 'error',
            message: 'Error message',
          }}
          placeholder="Choose something"
          loading={loading}
          options={options}
          onChange={handleChangeAsync}
        />
      </div>
    </>
  );
};
