import { Radio } from './index';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const onChange = () => {};

export const RadioDemo = () => {
  return (
    <>
      <div>
        <Radio mb={20} onChange={onChange} label={'Label'} />
      </div>
      <div>
        <Radio mb={20} onChange={onChange} label={'Label'} checked />
      </div>
      <div>
        <Radio mb={20} onChange={onChange} label={'Label'} disabled />
      </div>
      <div>
        <Radio mb={20} onChange={onChange} label={'Label'} checked disabled />
      </div>
      <div>
        <Radio
          mb={20}
          onChange={onChange}
          label={'Label'}
          checked
          disabled
          error
        />
      </div>
    </>
  );
};
